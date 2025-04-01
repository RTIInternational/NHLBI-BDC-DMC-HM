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

def update_phv_not_in_tm(sheets_and_data):
    priority_vars_sheet, priority_vars, missing_phvs_sheet, missing_phv_rows, picsure_dd = get_sheets_and_data('not_in_tm')

    # get the priority var rows with yc
    pvars_yc = [row['Variable (Label)'] for row in priority_vars if row["search for addn phv"] == "yc"]

    picsure_dd = picsure_dd[['varId', 'is_categorical', 'is_continuous', 'min', 'max', 'values']]
    picsure_dd.set_index('varId', inplace=True)

    picsure_rows_for_sheet = [[] for _ in range(len(missing_phv_rows))]
    values_by_bdchm_var = {} # for grouping missing_pvh rows by variable name
    for row in missing_phv_rows:
        if not row['Original row']:
            continue
        bdchm_variable = row.get('BDCHM Variable')
        if bdchm_variable not in pvars_yc:
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
            values_by_bdchm_var[bdchm_variable].update(ps_records['values'])
            picsure_rows_for_sheet[row['Original row']] = list(ps_records.values())
            pass
        except KeyError:
            # phv_stuff['picsure'] = 'Not found'
            pass

    missing_phvs_sheet.update(picsure_rows_for_sheet, f'N2:R{len(picsure_rows_for_sheet) + 1}')
    pass

def tm_phvs():
    """
    populate worksheet with picsure metadata for topmed vars similar to Copy of priority phv not in TM, which contains
        the following columns
    """
    target_columns = [
        'BDCHM Variable', 'Cohort', 'Variable name', 'Variable description', 'dbGaP Study Accession', 'Variable accession',
        'Dataset accession', 'copy of Dataset accession', 'Dataset name', 'Notes', '', 'is_categorical', 'is_continuous',
        'min', 'max', 'values'
    ]
    """
        Sources: 
            BDCHM Priority Variables worksheet (pvars)
            TOPMed plus dbGap merge file (tm_dbgap) from https://github.com/RTIInternational/NHLBI-BDC-DMC-HM/blob/main/resources/merged_TOPMed_harmonized_data_file/merged_variables.csv
            PicSure
            
            Join tm_dbgap on pvars col Z 'TOPMed Reference' to tm_dbap 'TOPMed Harmonized Variable'
            Join PicSure on 
                1) 'dbGap Variable Name' to picsure 'varid' (lower case version of varId, which same as metacolumn_name)
                2) 'Matched phv' to picsure 'varid'
                because picsure varId inconsistently includes variable names sometime, phv other times
            
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
        Notes                                   Will leave blank
        [blank]
        is_categorical              picsure
        is_continuous               picsure
        min                         picsure
        max                         picsure
        values                      picsure
    """
    from_priority_vars = ['Variable (Machine Readable Name)']

    priority_vars, priority_vars_df, tm_dbgap, picsure_dd, tm_phvs_sheet = get_sheets_and_data('tm_phvs')
    priority_vars_df = priority_vars_df[['Variable (Label)', 'Variable (Machine Readable Name)', 'TOPMed Reference']]

    _plus_dbgap = pd.merge(
        priority_vars_df, tm_dbgap,
        left_on=[priority_vars_df['TOPMed Reference']],
        right_on=[tm_dbgap['TOPMed Harmonized Variable']],
        how="left"
    ).fillna('')
    # _plus_dbgap['Variable name'] = ''
    # _plus_dbgap['Variable description'] = ''
    _plus_dbgap['Notes'] = ''
    # _plus_dbgap[' '] = ''   # for blank column

    plus_dbgap = _plus_dbgap.copy()[[
        'Variable (Label)',
        'Variable (Machine Readable Name)',
        'TOPMed Reference',
        'TOPMed Study',
        # 'TOPMed Harmonized Variable',
        'dbGap Variable Name',
        'dbGap Variable Description',
        'Matched phv',
        'dbGap phs',
        'dbGap phv',
        'dbGap pht',
        'dbGap pht Name',
    ]]
    'TOPMed Reference'

    picsure_dd['varid'] = picsure_dd['varId'].str.lower()

    psdd = picsure_dd[['varid', 'is_categorical', 'is_continuous', 'min', 'max', 'values']]

    ps_tmref = psdd[psdd['varid'].isin(priority_vars_df['TOPMed Reference'])].copy()
    ps_dbgvar = psdd[psdd['varid'].isin(tm_dbgap['dbGap Variable Name'])].copy()
    ps_phv = psdd[psdd['varid'].isin(tm_dbgap['Matched phv'])].copy()

    ps_tmref['matched'] = 'matched_tmref'
    ps_dbgvar['matched'] = 'dbgvar'
    ps_phv['matched'] = 'phv'

    plus_picsure1 = pd.merge(
        plus_dbgap, ps_tmref,
        left_on=[plus_dbgap['TOPMed Reference']],
        right_on=[ps_tmref['varid']],
        how="inner"
    ).fillna('')

    plus_picsure2 = pd.merge(
        plus_dbgap, ps_dbgvar,
        left_on=[plus_dbgap['dbGap Variable Name']],
        right_on=[ps_dbgvar['varid']],
        how="inner"
    ).fillna('')

    plus_picsure3 = pd.merge(
        plus_dbgap, ps_phv,
        left_on=[plus_dbgap['Matched phv']],
        right_on=[ps_phv['varid']],
        how="inner"
    ).fillna('')

    plus_picsure = pd.concat([plus_picsure1, plus_picsure2, plus_picsure3])
    plus_picsure.drop(['key_0'], axis=1, inplace=True)
    plus_picsure['Notes'] = ''

    missing_tm_refs = list(set(priority_vars_df['TOPMed Reference']) - set(plus_picsure['TOPMed Reference']))
    rows_for_missing = {col: [None] * len(missing_tm_refs) for col in plus_picsure.columns}
    rows_for_missing['TOPMed Reference'] = missing_tm_refs

    # Create the new DataFrame and concatenate
    new_rows = pd.DataFrame(rows_for_missing)
    result_df = pd.concat([new_rows, plus_picsure], ignore_index=True)

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
        'Notes':                    'Notes',
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

    set_with_dataframe(tm_phvs_sheet, sheet_df)


def get_sheets_and_data(which):
    picsure_dd, picsure_var_vals = picsure_dd_parse()

    gc = gspread.service_account()
    spreadsheet = gc.open("BDCHM Prioritization Information")

    priority_vars_sheet = spreadsheet.worksheet("BDCHM Priority Variables")
    headers = priority_vars_sheet.row_values(1)
    priority_vars = priority_vars_sheet.get_all_records(expected_headers=headers)

    if which == 'not_in_tm':
        missing_phvs_sheet = spreadsheet.worksheet("DO NOT TOUCH Copy of priority phv not in TM")
        headers = missing_phvs_sheet.row_values(1)
        missing_phvs = missing_phvs_sheet.get_all_records(expected_headers=headers)
        return priority_vars_sheet, priority_vars, missing_phvs_sheet, missing_phvs, picsure_dd

    if which == 'tm_phvs':
        priority_vars_df = get_as_dataframe(priority_vars_sheet).dropna(how='all').dropna(axis=1, how='all')
        priority_vars_df = priority_vars_df.fillna('')
        priority_vars_df = priority_vars_df[priority_vars_df['TOPMed Reference'] != ''] # topmed only
        # sometimes it has multiple vals pipe delimited. explode into multiple rows
        priority_vars_df['TOPMed Reference'] = priority_vars_df.apply(lambda row: [item.strip() for item in row['TOPMed Reference'].split('|')], axis=1)
        priority_vars_df = priority_vars_df.explode('TOPMed Reference')
        # dbgap_priority = load_csv('dbgap_priority')
        # dbgap_w_index = dbgap_priority.set_index(['dbGaP Study Accession', 'Variable accession'])
        tm_dbgap = load_csv('topmed_plus_dbgap') # already limited to prioritized_studies ['ARIC','CARDIA','CHS','COPDGene','FHS','HCHS_SOL','JHS','MESA','WHI']

        tm_phvs_sheet = spreadsheet.worksheet("DO NOT TOUCH TOPMed phvs & and values")
        tm_phvs_sheet.clear()
        return priority_vars, priority_vars_df, tm_dbgap, picsure_dd, tm_phvs_sheet

def fix_missing_phts():
    gc = gspread.service_account()
    spreadsheet = gc.open("BDCHM Prioritization Information")
    sheet = spreadsheet.worksheet("Copy of priority phv not in TM")

    if sheet.get('I1')[0][0] != 'Dataset accession':
        raise Exception('Expected column I to be Dataset accession')

    headers = sheet.row_values(1)
    missing_phvs = sheet.get_all_records(expected_headers=headers)

    dbgap_priority = load_csv('dbgap_priority')
    dbgap_w_index = dbgap_priority.set_index(['dbGaP Study Accession', 'Variable accession'])

    phts = []
    for row in missing_phvs:
        if not row['Original row']:
            continue
        if len(phts) != int(row['Original row']) - 1:
            raise Exception(f"phts array out of sync with row['Original row'] {row['Original row']}")
        if row['Dataset accession']:
            pht = row['Dataset accession']
        else:
            pht = lookup_pht(row['dbGaP Study Accession'], row['Variable accession'], dbgap_w_index)
        phts.append(pht)

    cell_range = f'I2:I{len(phts) + 1}'
    sheet.update([[pht] for pht in phts], cell_range)
    pass


def lookup_pht(phs, phv, df):
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
            print(f"Warning: No pht on dbgap row for {phs}, {phv}")
            return ''
        return pht

    except KeyError:
        # Handle the case where no rows match
        print(f"No rows found for values {phs}, {phv}")

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