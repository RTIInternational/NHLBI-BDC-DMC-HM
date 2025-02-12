import os
import pandas as pd
from resources.load_data import load_csv

def main():
    aha_harmonized = load_csv('aha_harmonized')
    aha_harmonized = aha_harmonized.drop(columns=['Unnamed: 6'])
    aha_study_vars = load_csv('aha_study_vars')

    aha_all = pd.merge(
        aha_harmonized, aha_study_vars, on='Harmonized Variable',
        how='right').fillna('')

    aha_all[['dataset','var']] = aha_all['Variable Field Name'].str.split('.',expand=True)

    # aha_all = aha_all[aha_all['Harmonized Variable'].isin(aha_vars())]
    aha_all = aha_all[aha_all['Harmonized Variable'].isin(aha_vars_not_in_topmed())]

    dbgap_priority = load_csv('dbgap_priority')

    aha_dbgap = pd.merge(
        aha_all, dbgap_priority,
        # left_on=[aha_all["dataset"].str.lower(), aha_all["var"].str.lower()],
        # right_on=[dbgap_priority["Dataset name"].str.lower(), dbgap_priority["Variable name"].str.lower()],
        left_on=[aha_all["var"].str.lower()],
        right_on=[dbgap_priority["Variable name"].str.lower()],
        how="left"
    ).fillna('').drop(columns=['key_0'])

    aha_dbgap['phv'] = aha_dbgap['Variable accession'].str.split('.').str[0]

    # len(aha_dbgap[aha_dbgap['Study'] == ''])

    # print(aha_dbgap.columns)
    pass

    picsure_dd = load_csv('picsure_dd')
    picsure_dd = picsure_dd.drop(columns=['Unnamed: 0'])

    aha_dbgap_picsure = pd.merge(
        aha_dbgap, picsure_dd,
        left_on=[aha_dbgap["phv"]],
        right_on=[picsure_dd["varId"]],
        how="left"
    ).fillna('').drop(columns=['key_0'])

    script_dir = os.path.dirname(os.path.abspath(__file__))
    working_dir = os.getcwd()
    relative_path = os.path.relpath(script_dir, working_dir)
    ofile = os.path.join(relative_path, 'aha_dbgap_picsure.csv')
    aha_dbgap_picsure.sort_values('Variable Field Name').to_csv(ofile, index=False)
    pass

aha_vars_also_in_topmed = [
    "CARSTEN",
    "FASTING_8HR",
    "FASTING",
    "HXMI", "HXMI_SR",
    "STATIN", "STATNONSTAT",
    "CURRSMK",
    "HDL",
    "HRX",
    "LDL",
    "TC",
    "TRIG",
    "BMI",
    "WGT",
    "DIABP1", "DIABP2",
    "HGT_CM",
    "RACE_C",
    "SEX_C", "SEX_N",
    "SYSBP", "SYSBP1", "SYSBP2",
]

def aha_vars_not_in_topmed():
    return [v for v in aha_vars() if v not in aha_vars_also_in_topmed]

def aha_vars():
    return [v for v in aha_vars_in_spreadsheet_order() if v]

def aha_vars_in_spreadsheet_order():
    return [
        "",
        "ALCOHOL",
        "",
        "ASPIRIN",
        "",
        "",
        "BASE_CVD",
        "BASE_STROKE",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "CARSTEN",
        "",
        "",
        "ANYCHOLMED",
        "",
        "",
        "",
        "",
        "",
        "",
        "FAM_STROKE",
        "FAM_INCOME",
        "FASTING_12HR",
        "FASTING_8HR",
        "",
        "",
        "FRUITS",
        "",
        "",
        "",
        "",
        "",
        "",
        "HXCVD",
        "",
        "",
        "HXHRTD",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "SODIUM",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "NONSTATIN",
        "",
        "",
        "",
        "",
        "",
        "VALVDIS",
        "VEGETABLES",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "AFIB",
        "",
        "",
        "",
        "DEATH_IND", "DEATH_IND_T2",
        "EDUCLEV",
        "",
        "FASTING",
        "FASTING_BG",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "HXMI", "HXMI_SR",
        "",
        "LVH",
        "",
        "INSULIN",
        "STATIN", "STATNONSTAT",
        "",
        "",
        "CURRSMK",
        "BG", "GLUCOSE",
        "HDL",
        "HRX",
        "LDL",
        "TC",
        "TRIG",
        "AGE",
        "BMI",
        "WGT",
        "CREAT",
        "",
        "DIAB", "DIABP",
        "DIABP1", "DIABP2",
        "HGT_CM",
        "HYPT",
        "RACE_C",
        "SEX_C", "SEX_N",
        "SYSBP", "SYSBP1", "SYSBP2",
    ]

if __name__ == "__main__":
    main()
