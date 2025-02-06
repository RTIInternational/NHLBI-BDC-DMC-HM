import pandas as pd
from resources.load_data import load_csv

aha_harmonized = load_csv('aha_harmonized')
aha_harmonized = aha_harmonized.drop(columns=['Unnamed: 6'])
aha_study_vars = load_csv('aha_study_vars')

aha_all = pd.merge(
    aha_harmonized, aha_study_vars, on='Harmonized Variable',
    how='right').fillna('')
aha_all[['dataset','var']] = aha_all['Variable Field Name'].str.split('.',expand=True)

dbgap_priority = load_csv('dbgap_priority')

aha_dbgap = pd.merge(
    aha_all, dbgap_priority,
    left_on=[aha_all["dataset"].str.lower(), aha_all["var"].str.lower()],
    right_on=[dbgap_priority["Dataset name"].str.lower(), dbgap_priority["Variable name"].str.lower()],
    how="left"
).fillna('')


len(aha_dbgap[aha_dbgap['Study'] == ''])

print(aha_dbgap.columns)
pass

picsure_dd = load_csv('picsure_dd')
picsure_dd = picsure_dd.drop(columns=['Unnamed: 0'])
