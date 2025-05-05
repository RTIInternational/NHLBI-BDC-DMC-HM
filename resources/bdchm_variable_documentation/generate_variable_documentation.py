import pandas as pd
from resources.load_data import load_gsheet_as_df, root_dir



def main():
    sheet = load_gsheet_as_df("BDCHM Variable Mapping", "BDCHM Harmonized Variables V1")
    # table = pd.DataFrame.to_markdown(sheet.head())

    df = pd.DataFrame({
        'BDCHM element':            sheet['BDCHM.Element.Attribute'].str.split('.', n=1).str[0],
        'variable label':           sheet['Variable (Label)'],
        'machine-readable label':   sheet['Variable (Machine Readable Name)'],
        'datatype':                 sheet['Standardized Data Type'],
        'unit':                     sheet['Standardized Unit'],
        'OMOP concept id as CURIE': 'OMOP:' + sheet['OMOP Standard Concept ID'].astype(str),
        'OMOP UCUM id as CURIE':    sheet['OMOP UCUM CURIE'],
        'OBA CURIE':                sheet['OBA CURIE'],
        'UCUM unit':                sheet['UCUM unit'],
        'Text definition':          sheet['Text definition'],
    })

    # only keep MeasurementObservation, Demography, SdohObservation
    df = df[df['BDCHM element'].isin(['MeasurementObservation', 'Demography', 'SdohObservation'])]

    by_element = df.groupby('BDCHM element')


    with open(f'{root_dir()}/VARIABLE_DOCUMENTATION.md', 'w') as f:
        for grp, grp_df in by_element:
            md = pd.DataFrame.to_markdown(grp_df, index=False)
            f.write(f"# {grp}\n")
            f.write(md)
            f.write('\n')

    pass

if __name__ == "__main__":
    main()
