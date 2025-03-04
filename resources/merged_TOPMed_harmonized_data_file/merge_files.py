import pandas as pd
import re
import os
from resources.load_data import load_csv


def extract_phv(text):
    """Extract PHV number from a string using regex"""
    match = re.search(r'phv\d+', text)
    return match.group(0) if match else None


def merge_files():
    # Read the CSVs
    dbgap_priority = load_csv('dbgap_priority')
    raw_to_harm = load_csv('topmed_raw_to_harm')

    # Extract PHV numbers from the 'Variable accession' column
    dbgap_priority['phv_number'] = dbgap_priority['Variable accession'].apply(extract_phv)

    # Extract PHV numbers from the 'raw' column
    raw_to_harm['phv_number'] = raw_to_harm['raw'].apply(extract_phv)

    # Verify uniqueness of PHV numbers in both dataframes
    if len(dbgap_priority['phv_number'].unique()) != len(dbgap_priority['phv_number']):
        print("Warning: Duplicate PHV numbers found in ./copies_of_external_source_files/dbgap_variables_priority_cohorts.csv")

    # if len(raw_to_harm['phv_number'].unique()) != len(raw_to_harm['phv_number']):
    #     print("Warning: Duplicate PHV numbers found in ./map-topmed-raw-to-harmonized/raw-to-harmonized-topmed-vars.csv")

    # Merge dataframes on PHV number
    merged_df = pd.merge( raw_to_harm,
                          dbgap_priority,
                          on='phv_number',
                          how='inner')

    # Rename columns
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
    merged_df_pretty = merged_df.rename(columns=column_mapping)

    # Select and reorder columns
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

    merged_df_pretty = merged_df_pretty[columns_to_keep]

    # Save to CSV
    script_path = os.path.dirname(os.path.abspath(__file__))
    merged_df_pretty.to_csv(os.path.join(script_path, 'merged_variables.csv'), index=False)

    # anti-join, raw_to_harm but not in dbgap_priority
    outer = raw_to_harm.merge(dbgap_priority, how='outer', indicator=True, on='phv_number')
    outer = outer[[*raw_to_harm.columns, '_merge']]
    raw_to_harm_only = outer[(outer._merge=='left_only')].drop('_merge', axis=1)
    # raw_to_harm_only = raw_to_harm_only.rename(columns=column_mapping)
    output_path = os.path.join(script_path, 'raw_to_harm_only.csv')
    raw_to_harm_only.to_csv(output_path, index=False)

    # anti-join, dbgap_priority but not in raw_to_harm
    outer = dbgap_priority.merge(raw_to_harm, how='outer', indicator=True, on='phv_number')
    outer = outer[[*dbgap_priority.columns, '_merge']]
    dbgap_priority_only = outer[(outer._merge=='left_only')].drop('_merge', axis=1)
    # dbgap_priority_only = dbgap_priority_only.rename(columns=column_mapping)
    output_path = os.path.join(script_path, 'dbgap_priority_only.csv')
    dbgap_priority_only.to_csv(output_path, index=False)

    pass

def main():
    merge_files()


if __name__ == "__main__":
    main()
