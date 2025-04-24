import gspread
from gspread_dataframe import set_with_dataframe, get_as_dataframe
import json
import pandas as pd
# from itertools import chain
from resources.human_readable_harmonized_variable_documentation.picsure_data_dict import picsure_dd_parse
from resources.merged_TOPMed_harmonized_data_file.merge_files import extract_phv
from resources.load_data import load_csv

USE_CACHED = False

def main():
    # fix_missing_phts()
    # update_phv_not_in_tm()
    tm_phvs()

def fix_missing_phts():
    gc = gspread.service_account()
    spreadsheet = gc.open("BDCHM Prioritization Information")
    missing_phvs_sheet = spreadsheet.worksheet("DO NOT TOUCH Copy of priority phv not in TM")

    if missing_phvs_sheet.get('I1')[0][0] != 'Dataset accession':
        raise Exception('Expected column I to be Dataset accession')

    headers = missing_phvs_sheet.row_values(1)
    missing_phv_rows = missing_phvs_sheet.get_all_records(expected_headers=headers)

    dbgap_priority_df = load_csv('dbgap_priority')
    dbgap_w_index = dbgap_priority_df.set_index(['dbGaP Study Accession', 'Variable accession'])

    phts = []
    for i, row in enumerate(missing_phv_rows):
        pht = lookup_pht(row['dbGaP Study Accession'], row['Variable accession'], dbgap_w_index, i+2)
        phts.append(pht)

    cell_range = f'I2:I{len(phts) + 1}'
    missing_phvs_sheet.update([[pht] for pht in phts], cell_range)
    pass

def update_phv_not_in_tm():
    """
    Adds permissible value data from PicSure to `DO NOT TOUCH Copy of priority phv not in TM` worksheet.
    For each row of priority not in TM where the BDCHM Variable is marked as 'yc' in BDCHM Priority Variables,
    look up phv in PicSure and grab permissible values info.
    """
    gc = gspread.service_account()
    spreadsheet = gc.open("BDCHM Prioritization Information")
    missing_phvs_sheet = spreadsheet.worksheet("DO NOT TOUCH Copy of priority phv not in TM")
    headers = missing_phvs_sheet.row_values(1)
    missing_phv_rows = missing_phvs_sheet.get_all_records(expected_headers=headers)

    picsure_dd, picsure_var_vals = picsure_dd_parse()

    pvars_sheet = spreadsheet.worksheet("BDCHM Priority Variables")
    headers = pvars_sheet.row_values(1)
    pvars = pvars_sheet.get_all_records(expected_headers=headers)

    # get the priority var rows with yc
    pvars_yc = [row['Variable (Label)'] for row in pvars if row["search for addn phv"] == "yc"]

    picsure_dd = picsure_dd[['varId', 'is_categorical', 'is_continuous', 'min', 'max', 'values']]
    picsure_dd.set_index('varId', inplace=True)

    picsure_rows_for_sheet = [[] for _ in range(len(missing_phv_rows) + 2)]

    # not currently doing anything with the grouped permissible values for bdchm_vars
    values_by_bdchm_var = {} # for grouping missing_pvh rows by variable name
    for i, row in enumerate(missing_phv_rows):
        rownum = i + 2
        # if not row['Original row']:
        #     print(row)
            # continue

        bdchm_variable = row.get('BDCHM Variable')
        if bdchm_variable not in pvars_yc:
            picsure_rows_for_sheet[rownum] = [None, None, None, None, None, f"{bdchm_variable} not marked yc"]
            # print(f"not yc: {bdchm_variable} line {rownum}")
            continue
        if bdchm_variable not in values_by_bdchm_var:
            values_by_bdchm_var[bdchm_variable] = set()

        phv = extract_phv(row['Variable accession'])
        try:
            ps_records = picsure_dd.loc[phv].to_dict()
            vals = json.dumps(ps_records['values'])
            if len(vals) > 50000:  # maximum allows in gsheet cell
                vals = f'List too long, truncated: {vals[:49970]}...'
            ps_records['values'] = vals
            if pd.isna(ps_records['min']):
                ps_records['min'] = None
            if pd.isna(ps_records['max']):
                ps_records['max'] = None
            picsure_rows_for_sheet[rownum] = list(ps_records.values())
            values_by_bdchm_var[bdchm_variable].update(ps_records['values'])    # not using these now
            pass
        except KeyError:
            picsure_rows_for_sheet[rownum] = [None, None, None, None, None, f"{phv} not found in PicSure"]
            # phv_stuff['picsure'] = 'Not found'
            pass

    missing_phvs_sheet.update(picsure_rows_for_sheet, f'M2:R{len(picsure_rows_for_sheet) + 1}')
    pass

def tm_phvs():
    """
    Populate worksheet with picsure metadata for topmed vars
        Sources:
            BDCHM Priority Variables worksheet (pvars)
            TOPMed plus dbGap merge file (tm_dbgap) from https://github.com/RTIInternational/NHLBI-BDC-DMC-HM/blob/main/resources/merged_TOPMed_harmonized_data_file/merged_variables.csv
            PicSure data dictionary (too big for github, stored as local csv)

        Target columns              Source
        --------------------------  ----------------------------------------------
        BDCHM Variable              pvars       col F 'Variable (Label)'
        BDCHM var                   pvars       col G 'Variable (Machine Readable Name)'
        Cohort                      tm_dbgap    'TOPMed Study'
        Variable name (col E)       tm_dbgap    'dbGap Variable Name'
        Variable description (F)    tm_dbgap    'dbGap Variable Description'
        dbGaP Study Accession       tm_dbgap    'dbGap phs'
        Variable accession          tm_dbgap    'dbGap phv'
        Dataset accession           tm_dbgap    'dbGap pht'
        copy of Dataset accession               Not needed
        Dataset name                tm_dbgap    'dbGap pht Name	'
        [blank]
        is_categorical              picsure
        is_continuous               picsure
        min                         picsure
        max                         picsure
        values                      picsure

        Algorithm:
            1. Filter pvars (Priority Variables worksheet) to rows with a TOPMed Reference (tmref).
            2. There can be multiple values in tmref (e.g., `cimt_1|cimt_2`). Explode those to have
               one row for each value.
            3. Inner join pvars and tm_dbgap on pvars:TOPMed Reference = tm_dbap:TOPMed Harmonized Variable.
               Result is `plus_dbgap`. Limit to cols needed for worksheet. For pvars that don't match, put
               rows in `missing_from_dbgap`
            4. Filter picsure to these columns: varid, is_categorical, is_continuous, min, max, values.
               (And varid is a lower-case copy of varId, for matching on variable name.)
               Result is `psdd`.
            5. Inner join picsure to plus_dbgap in two ways (was three) with result in
               `plus_picsure`:
                a. Previously was matching on tmref, but that wasn't helpful.
                b. 'dbGap Variable Name' to picsure 'varid' (lower case version of varId, which same as metacolumn_name).
                c. 'Matched phv' to picsure 'varid' because picsure varId inconsistently includes variable names
                   sometime, phv other times.
    """
    gc = gspread.service_account()
    spreadsheet = gc.open("BDCHM Prioritization Information")

    # 1. Filter pvars (Priority Variables worksheet) to rows with a TOPMed Reference (tmref)
    pvars_sheet = spreadsheet.worksheet("BDCHM Priority Variables")
    pvars_df = get_as_dataframe(pvars_sheet).dropna(how='all').dropna(axis=1, how='all')
    pvars_df = pvars_df.fillna('')
    pvars_df = pvars_df[pvars_df['TOPMed Reference'] != '']  # topmed only

    #  2. There can be multiple values in tmref (e.g., `cimt_1|cimt_2`). Explode those to have
    #     one row for each value.
    pvars_df['TOPMed Reference'] = pvars_df.apply(
        lambda row: [item.strip() for item in row['TOPMed Reference'].split('|')], axis=1)
    pvars_df = pvars_df.explode('TOPMed Reference')
    pvars_df = pvars_df[['Variable (Label)', 'Variable (Machine Readable Name)', 'TOPMed Reference']]

    # 3. Inner join pvars and tm_dbgap on pvars:TOPMed Reference = tm_dbap:TOPMed Harmonized Variable.
    #    Result is `plus_dbgap`. Limit to cols needed for worksheet. For pvars that don't match, put
    #    rows in `missing_from_dbgap`
    tm_dbgap = load_csv('topmed_plus_dbgap')
    tm_dbgap['dbGap Variable Name'] = tm_dbgap['dbGap Variable Name'].str.lower()
    _plus_dbgap = pd.merge(
        pvars_df, tm_dbgap,
        left_on=[pvars_df['TOPMed Reference']],
        right_on=[tm_dbgap['TOPMed Harmonized Variable']],
        how="left"
    ).fillna('')

    plus_dbgap = _plus_dbgap.copy()[[
        'Variable (Label)',
        'Variable (Machine Readable Name)',
        'TOPMed Reference',
        'TOPMed Study',
        'dbGap Variable Name',
        'dbGap Variable Description',
        'Matched phv',
        'dbGap phs',
        'dbGap phv',
        'dbGap pht',
        'dbGap pht Name',
    ]]
    missing_from_dbgap = plus_dbgap[plus_dbgap['dbGap Variable Name'] == ''].copy()
    missing_from_dbgap['matched'] = 'No match in dbgvar'

    # 4. Filter picsure to these columns: varid, is_categorical, is_continuous, min, max, values.
    #    (And varid is a lower-case copy of varId, for matching on variable name.)
    picsure_dd, picsure_var_vals = picsure_dd_parse()
    picsure_dd['varid'] = picsure_dd['varId'].str.lower()
    psdd = picsure_dd[['varid', 'is_categorical', 'is_continuous', 'min', 'max', 'values']]

    # 5. Inner join picsure to plus_dbgap in two ways (was three) with result in `plus_picsure`. For each,
    #    get rows from `psdd` that match variable name or phv, then

    # 5a. Previously was matching on tmref, but that wasn't helpful
    # ps_tmref = psdd[psdd['varid'].isin(pvars_df['TOPMed Reference'])].copy()
    # ps_tmref['matched'] = 'matched_tmref'
    # plus_picsure1 = pd.merge(
    #     plus_dbgap, ps_tmref,
    #     left_on=[plus_dbgap['TOPMed Reference']],
    #     right_on=[ps_tmref['varid']],
    #     how="inner"
    # ).fillna('')

    # 5b. 'dbGap Variable Name' to picsure 'varid' (lower case version of varId, which same as metacolumn_name)
    ps_dbgvar = psdd[psdd['varid'].isin(tm_dbgap['dbGap Variable Name'])].copy()
    ps_dbgvar['matched'] = 'dbgvar'
    plus_picsure2 = pd.merge(
        plus_dbgap, ps_dbgvar,
        left_on=[plus_dbgap['dbGap Variable Name']],
        right_on=[ps_dbgvar['varid']],
        how="inner"
    ).fillna('')

    # 5c. 'Matched phv' to picsure 'varid' because picsure varId inconsistently includes variable names
    #        sometime, phv other times
    ps_phv = psdd[psdd['varid'].isin(tm_dbgap['Matched phv'])].copy()
    ps_phv['matched'] = 'phv'
    plus_picsure3 = pd.merge(
        plus_dbgap, ps_phv,
        left_on=[plus_dbgap['Matched phv']],
        right_on=[ps_phv['varid']],
        how="inner"
    ).fillna('')

    # plus_picsure = pd.concat([plus_picsure1, plus_picsure2, plus_picsure3])
    plus_picsure = pd.concat([plus_picsure2, plus_picsure3])
    plus_picsure.drop(['key_0'], axis=1, inplace=True)

    # 6. Add rows for tm_refs that didn't match
    missing_tm_refs = list(
        set(pvars_df['TOPMed Reference'])
        - set(missing_from_dbgap['TOPMed Reference'])
        - set(plus_picsure['TOPMed Reference'])
    )
    missing_from_picsure = pvars_df[pvars_df['TOPMed Reference'].isin(missing_tm_refs)].copy()
    missing_from_picsure['matched'] = 'No match in picsure'

    result_df = pd.concat([missing_from_dbgap, missing_from_picsure, plus_picsure], ignore_index=True)

    col_mapping = {
        'BDCHM Variable':           'Variable (Label)',
        'BDCHM var':                'Variable (Machine Readable Name)',
        'Cohort':                   'TOPMed Study',
        'TOPMed Reference':         'TOPMed Reference',
        'Variable name':            'dbGap Variable Name',
        'Variable description':     'dbGap Variable Description',
        'phv':                      'Matched phv',
        'dbGaP Study Accession':    'dbGap phs',
        'Variable accession':       'dbGap phv',
        'Dataset accession':        'dbGap pht',
        'Dataset name':             'dbGap pht Name',
        'varId':                    'varid',
        'is_categorical':           'is_categorical',
        'is_continuous':            'is_continuous',
        'min':                      'min',
        'max':                      'max',
        'values':                   'values',
        'Matched on':               'matched',
    }
    reversed_mapping = {v: k for k, v in col_mapping.items()}

    # Create a new DataFrame with renamed columns in the order specified by your dictionary
    sheet_df = result_df[list(col_mapping.values())].rename(columns=reversed_mapping)

    tm_phvs_sheet = spreadsheet.worksheet("DO NOT TOUCH TOPMed phvs & and values")
    tm_phvs_sheet.clear()
    set_with_dataframe(tm_phvs_sheet, sheet_df)
    pass

def lookup_pht(phs, phv, df, row_num):
    try:
        # This will raise a KeyError if the key doesn't exist
        result = df.loc[(phs, phv)]

        # Check if we got a Series (single row) or DataFrame (multiple rows)
        if isinstance(result, pd.Series): # We got exactly one row as expected
            pht = result['Dataset accession']
        else: # We got multiple rows
            print(f"Warning: Found {len(result)} rows instead of 1 for {phs}, {phv}")
            pht = result.iloc[0]['Dataset accession'] # Option 1: Take the first row anyway
            # Option 2: Handle the multiple rows case as needed
        if not pht:
            print(f"Warning: No pht on dbgap row for {phs}, {phv}, from row {row_num}")
            return ''
        return pht

    except KeyError:
        # Handle the case where no rows match
        print(f"No dbgap rows found for values {phs}, {phv}, from row {row_num}")

def find_potential_key_columns(df):
    """
    Returns a list of column names that can serve as unique keys:
    - All values are unique
    - No null/NaN values

    Parameters:
    df (pandas.DataFrame): The DataFrame to check

    Returns:
    list: Column names suitable as unique keys
    """
    key_columns = []

    for column in df.columns:
        # Check if column has no NaN values AND all values are unique
        if not df[column].isna().any() and df[column].is_unique:
            key_columns.append(column)

    return key_columns

if __name__ == "__main__":
    main()
