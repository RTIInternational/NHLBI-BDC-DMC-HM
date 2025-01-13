import pandas as pd
import re


def extract_phv(text):
    """Extract PHV number from a string using regex"""
    match = re.search(r'phv\d+', text)
    return match.group(0) if match else None


# Read the CSVs
dbgap_vars = pd.read_csv('dbgap_variables_priority_cohorts.csv')
raw_to_harm = pd.read_csv('raw-to-harmonized-topmed-vars.csv')

# Extract PHV numbers from the 'Variable accession' column
dbgap_vars['phv_number'] = dbgap_vars['Variable accession'].apply(extract_phv)

# Extract PHV numbers from the 'raw' column
raw_to_harm['phv_number'] = raw_to_harm['raw'].apply(extract_phv)

# Verify uniqueness of PHV numbers in both dataframes
if len(dbgap_vars['phv_number'].unique()) != len(dbgap_vars['phv_number']):
    print("Warning: Duplicate PHV numbers found in dbgap_variables_priority_cohorts.csv")

# if len(raw_to_harm['phv_number'].unique()) != len(raw_to_harm['phv_number']):
#     print("Warning: Duplicate PHV numbers found in raw-to-harmonized-topmed-vars.csv")

# Merge dataframes on PHV number
merged_df = pd.merge( raw_to_harm,
                      dbgap_vars,
                      on='phv_number',
                      how='inner')

# Rename columns as needed (you can modify these names)
column_mapping = {
    'phv_number': 'Matched phv',
    'harmonized': 'TOPMed Harmonized Variable',
    'harmonized_unit': 'TOPMed Study',
    'raw': 'TOPMed Component ID',
    'Study': 'dbGap Study Name',
    'Variable name': 'dbGap Variable Name',
    'Variable description': 'dbGap Variable Description',
    'dbGaP Study Accession': 'dbGap phs',
    'Variable accession': 'dbGap phv',
    'Dataset accession': 'dbGap pht',
    'Dataset name': 'dbGap pht Name',
}
merged_df = merged_df.rename(columns=column_mapping)

# Select and reorder columns as needed
columns_to_keep = [
    'Matched phv',
    'TOPMed Study',
    'TOPMed Harmonized Variable',
    'dbGap Variable Description',
    'dbGap Variable Name',
    'TOPMed Component ID',
    'dbGap phs',
    'dbGap phv',
    'dbGap pht',
    'dbGap pht Name',
    'dbGap Study Name',
    # 'cohort_name',
    # 'study_name',
    # 'variable_id',
    # 'description',
    # 'harmonized_variable',
    # 'raw_variable',
    # 'phv_number'
]

final_df = merged_df[columns_to_keep]

# Save to CSV
final_df.to_csv('merged_variables.csv', index=False)