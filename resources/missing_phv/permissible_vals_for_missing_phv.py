import gspread
import json
from itertools import chain
from resources.human_readable_harmonized_variable_documentation.picsure_data_dict import picsure_dd_parse
from resources.merged_TOPMed_harmonized_data_file.merge_files import extract_phv

USE_CACHED = False

def main():
    priority_vars_sheet, priority_vars, missing_phvs_sheet, missing_phv_rows = get_sheets_and_data()

    picsure_dd, picsure_var_vals = picsure_dd_parse()
    picsure_dd = picsure_dd[['varId', 'values', 'is_categorical', 'is_continuous', 'min', 'max']]
    picsure_dd.set_index('varId', inplace=True)

    # get the priority var rows with yc
    pvars_yc = [row['Variable (Label)'] for row in priority_vars if row["search for addn phv"] == "yc"]

    # group missing_pvh rows by variable name
    missing_phv = {}
    for row in missing_phv_rows:
        bdchm_variable = row.get('BDCHM Variable')
        if bdchm_variable not in pvars_yc:
            continue
        if bdchm_variable not in missing_phv:
            missing_phv[bdchm_variable] = []
        missing_phv[bdchm_variable].append(row)

        all_values = set()
        try:
            phv_stuff['picsure'] = picsure_dd.loc[phv_stuff['phv']].to_dict()
            all_values.update(phv_stuff['picsure']['values'])
        except KeyError:
            phv_stuff['picsure'] = 'Not found'

    missing_phv_info = {}
    """
    this is going to look like:
    {
      'variable1': { 'phv_info': 
          [
              {
                  'phv': phv1, 
                  'cohort': string,
                  'name': string,
                  'desc': string,
                  'picsure': {
                      'values': ['val1', 'val2'],
                      'is_categorical': bool,
                      'is_continuous': bool,
                      'min': num,
                      'max': num,
              },
              {
                  'phv': phv2, 
                  'cohort': string,
                  'name': string,
                  'desc': string,
                  'picsure': {
                      'values': ['val1', 'val3'],
                      'is_categorical': bool,
                      'is_continuous': bool,
                      'min': num,
                      'max': num,
              },
              {
                  'phv': phv3, 
                  'cohort': string,
                  'name': string,
                  'desc': string,
                  'picsure': 'Not found',
              },
          ],
          'all_values': ['val1', 'val2', 'val3']
      },
      'variable2': { ... }
    }
    """
    for var in pvars_yc:
        if var in missing_phv:
            phvs = []
            all_values = set()
            for row in missing_phv[var]:
                phv_stuff = {
                    'phv': extract_phv(row['Variable accession']),
                    'cohort': row['Cohort'],
                    'name': row['Variable name'],
                    'desc': row['Variable description'],
                }
                try:
                    phv_stuff['picsure'] = picsure_dd.loc[phv_stuff['phv']].to_dict()
                    all_values.update(phv_stuff['picsure']['values'])
                except KeyError:
                    phv_stuff['picsure'] = 'Not found'

                phvs.append(phv_stuff)

            missing_phv_info[var] = {'phv_info': phvs, 'all_values': all_values}

        # vals['all_values'] = set(chain.from_iterable([phv_values['values'] for phv_values in vals['phv_values'] if phv_values['values']]))

    pass


    # picsure_rec = picsure_dd.loc[phv]
    # var_values = picsure_rec['values']

def get_sheets_and_data():
    gc = gspread.service_account()
    sh = gc.open("BDCHM Prioritization Information")

    priority_vars_sheet = sh.worksheet("Copy of BDCHM Priority Variables")
    headers = priority_vars_sheet.row_values(1)
    priority_vars = priority_vars_sheet.get_all_records(expected_headers=headers)

    missing_phvs_sheet = sh.worksheet("Copy of priority phv not in TM")
    headers = missing_phvs_sheet.row_values(1)
    missing_phvs = missing_phvs_sheet.get_all_records(expected_headers=headers)

    return priority_vars_sheet, priority_vars, missing_phvs_sheet, missing_phvs

def get_data():
    if USE_CACHED: # just to save time while developing
        with open('priority.json', 'r') as f:
            priority = json.load(f)
        with open('phv.json', 'r') as f:
            missing_phvs = json.load(f)
        return priority, missing_phvs

    gc = gspread.service_account()
    sh = gc.open("BDCHM Prioritization Information")

    sheet = sh.worksheet("Copy of BDCHM Priority Variables")
    headers = sheet.row_values(1)
    priority = sheet.get_all_records(expected_headers=headers)

    sheet = sh.worksheet("Copy of priority phv not in TM")
    headers = sheet.row_values(1)
    missing_phvs = sheet.get_all_records(expected_headers=headers)

    # just to save time while developing
    with open('priority.json', 'w') as f:
        json.dump(priority, f, indent=4)  # indent for readability
    with open('phv.json', 'w') as f:
        json.dump(missing_phvs, f, indent=4)  # indent for readability

    return priority, missing_phvs

if __name__ == "__main__":
    main()
