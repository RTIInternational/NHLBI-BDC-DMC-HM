## 1. Map variable inputs to TOPMed to their harmonized variable names

For each component_study_variable 
            ([example](https://github.com/UW-GAC/topmed-dcc-harmonized-phenotypes/blob/14960eb088d9057f3fcd04c65f609a31e0d981a1/harmonized-variable-documentation/inflammation/cd40_1.json#L24C8-L24C33)),
            give the harmonized variable name and the harmonization unit name.
            Inputs are all the json files [here](https://github.com/UW-GAC/topmed-dcc-harmonized-phenotypes/tree/master/harmonized-variable-documentation).

#### Script: [generate_mapping.py](../map-topmed-raw-to-harmonized/generate_mapping.py)




### Output Files

#### [topmed_raw_to_harm](../map-topmed-raw-to-harmonized/raw-to-harmonized-topmed-vars.csv)

<details><summary>Preview</summary>

| harmonized     | harmonized_unit   | raw                                         |
|:---------------|:------------------|:--------------------------------------------|
| pad_incident_1 | FHS               | phs000007.v30.pht000309.v13.phv00036469.v12 |
| pad_incident_1 | FHS               | phs000007.v30.pht000309.v13.phv00036471.v12 |
| pad_incident_1 | FHS               | phs000007.v30.pht003099.v5.phv00177930.v5   |

</details>




## 2. Generate documentation for TOPMed harmonization functions

For each TOPMed harmonized variable, readably display everything
            (R harmonization functions, input variable, documentation, etc.)
            from the [TOPMed json files](https://github.com/UW-GAC/topmed-dcc-harmonized-phenotypes/tree/master/harmonized-variable-documentation)
            and, if found, permissible values for the input variable from PicSure.
            PicSure values lists are sometimes (and probably incorrectly) very long,
            so showing a preview of that file without them.

#### Script: [harmonization_documentation_generator.py](../human_readable_harmonized_variable_documentation/harmonization_documentation_generator.py)


### Input Files

#### [topmed_plus_dbgap](../merged_TOPMed_harmonized_data_file/merged_variables.csv)

<details><summary>Preview</summary>


| Matched phv   | TOPMed Study   | TOPMed Harmonized Variable   | dbGap Variable Description   | dbGap Variable Name   | TOPMed Component ID                         | dbGap phs         | dbGap phv           | dbGap pht         | dbGap pht Name        | dbGap Study Name   |
|:--------------|:---------------|:-----------------------------|:-----------------------------|:----------------------|:--------------------------------------------|:------------------|:--------------------|:------------------|:----------------------|:-------------------|
| phv00036469   | FHS            | pad_incident_1               | Event Number                 | EVENT                 | phs000007.v30.pht000309.v13.phv00036469.v12 | phs000007.v33.p14 | phv00036469.v15.p14 | pht000309.v16.p14 | vr_soe_2020_a_1340s   | Framingham Cohort  |
| phv00036471   | FHS            | pad_incident_1               | Date of Event                | DATE                  | phs000007.v30.pht000309.v13.phv00036471.v12 | phs000007.v33.p14 | phv00036471.v15.p14 | pht000309.v16.p14 | vr_soe_2020_a_1340s   | Framingham Cohort  |
| phv00177930   | FHS            | pad_incident_1               | Age at Exam 1                | age1                  | phs000007.v30.pht003099.v5.phv00177930.v5   | phs000007.v33.p14 | phv00177930.v8.p14  | pht003099.v8.p14  | vr_dates_2019_a_1175s | Framingham Cohort  |


</details>


#### [picsure_without_values_col.csv]()

<details><summary>Preview</summary>


|   Unnamed: 0 | studyId   | dtId      | varId       | is_categorical   | is_continuous   | columnmeta_is_stigmatized   | columnmeta_name   | description             |   columnmeta_min | HPDS_PATH                                   | derived_group_id   | columnmeta_hpds_path                        | columnmeta_var_id   |   columnmeta_var_group_description | derived_var_description   | derived_variable_level_data   |   data_hierarchy |   derived_group_description |   columnmeta_max | columnmeta_description   | derived_study_id   | hashed_var_id                                                    | columnmeta_data_type   | derived_var_id   | columnmeta_study_id   | is_stigmatized   | derived_var_name   | derived_study_abv_name   | derived_study_description                             | columnmeta_var_group_id   | derived_group_name                    | columnmeta_HPDS_PATH                        |   min |   max |
|-------------:|:----------|:----------|:------------|:-----------------|:----------------|:----------------------------|:------------------|:------------------------|-----------------:|:--------------------------------------------|:-------------------|:--------------------------------------------|:--------------------|-----------------------------------:|:--------------------------|:------------------------------|-----------------:|----------------------------:|-----------------:|:-------------------------|:-------------------|:-----------------------------------------------------------------|:-----------------------|:-----------------|:----------------------|:-----------------|:-------------------|:-------------------------|:------------------------------------------------------|:--------------------------|:--------------------------------------|:--------------------------------------------|------:|------:|
|            0 | phs000200 | pht001032 | phv00080443 | True             | False           | True                        | SAMPLE_ID         | WHI Sample ID           |              nan | \phs000200\pht001032\phv00080443\SAMPLE_ID\ | pht001032.v9       | \phs000200\pht001032\phv00080443\SAMPLE_ID\ | phv00080443         |                                nan | WHI Sample ID             | {}                            |              nan |                         nan |              nan | WHI Sample ID            | phs000200.v12      | 35882da5dfed18414dadd77e75250b0323cad4e48400f17797aadfba3d3ab9f4 | categorical            | phv00080443.v6   | phs000200             | True             | SAMPLE_ID          | WHI                      | Women's Health Initiative                             | pht001032                 | WHI_Sample                            | \phs000200\pht001032\phv00080443\SAMPLE_ID\ |   nan |   nan |
|            1 | phs000951 | pht005052 | phv00253405 | True             | False           | True                        | SAMPLE_ID         | De-identified Sample ID |              nan | \phs000951\pht005052\phv00253405\SAMPLE_ID\ | pht005052.v5       | \phs000951\pht005052\phv00253405\SAMPLE_ID\ | phv00253405         |                                nan | De-identified Sample ID   | {}                            |              nan |                         nan |              nan | De-identified Sample ID  | phs000951.v5       | f91882025da2463b164c3a539c379e501bc0f8b3f3ba9a83adf561107957bc4e | categorical            | phv00253405.v5   | phs000951             | True             | SAMPLE_ID          | COPDGENE                 | NHLBI TOPMed: Genetic Epidemiology of COPD (COPDGene) | pht005052                 | TOPMed_WGS_COPDGene_Sample_Attributes | \phs000951\pht005052\phv00253405\SAMPLE_ID\ |   nan |   nan |
|            2 | phs000951 | pht005051 | phv00253403 | True             | False           | True                        | SAMPLE_ID         | Sample ID               |              nan | \phs000951\pht005051\phv00253403\SAMPLE_ID\ | pht005051.v5       | \phs000951\pht005051\phv00253403\SAMPLE_ID\ | phv00253403         |                                nan | Sample ID                 | {}                            |              nan |                         nan |              nan | Sample ID                | phs000951.v5       | ee71a8cd9c98cd14a9267c5cc215155d6675af19f6c84ef5a8b567a0bfbf4a0e | categorical            | phv00253403.v5   | phs000951             | True             | SAMPLE_ID          | COPDGENE                 | NHLBI TOPMed: Genetic Epidemiology of COPD (COPDGene) | pht005051                 | TOPMed_WGS_COPDGene_Sample            | \phs000951\pht005051\phv00253403\SAMPLE_ID\ |   nan |   nan |


</details>







### Output: [TOPMed Variable Documentation](https://github.com/RTIInternational/NHLBI-BDC-DMC-HM/blob/main/resources/human_readable_harmonized_variable_documentation/generated_doc_pages/README.md)

## Fix messed up or missing pht values in the Dataset accession column

Reads from and writes to worksheet in
            [BDCHM Prioritization Information](https://docs.google.com/spreadsheets/d/1G-AIk2m4UCDfh1OvFID3bewQXqxExeKNNmVxaswLT8E/edit?gid=1927886785#gid=1927886785).
            Before running this function, duplicate `priority phv not in TM` worksheet and rename the copy
            `DO NOT TOUCH Copy of priority phv not in TM`.
            Uses `dbGaP Study Accession` and `Variable accession` columns to look up pht in `dbgap_priority`.

#### Script: [permissible_vals_for_missing_phv.py](../missing_phv/permissible_vals_for_missing_phv.py): fix_missing_phts()


### Input Files

#### [DO NOT TOUCH Copy of priority phv not in TM worksheet](https://docs.google.com/spreadsheets/d/1G-AIk2m4UCDfh1OvFID3bewQXqxExeKNNmVxaswLT8E/edit?gid=1927886785)


#### [dbgap_priority](../copies_of_external_source_files/dbgap_variables_priority_cohorts_V2.csv)

<details><summary>Preview</summary>


| Study             | FHS_Gen3_Omni2   | Variable description    | dbGaP Study Accession   | Variable accession   | Dataset accession   | Dataset name   |
|:------------------|:-----------------|:------------------------|:------------------------|:---------------------|:--------------------|:---------------|
| Framingham Cohort | MF4              | RELATIVE WEIGHT, EXAM 1 | phs000007.v33.p14       | phv00000479.v1.p14   | pht000009.v2.p14    | ex0_7s         |
| Framingham Cohort | MF5              | EDUCATION               | phs000007.v33.p14       | phv00000480.v1.p14   | pht000009.v2.p14    | ex0_7s         |
| Framingham Cohort | MF6              | COUNTRY OF BIRTH        | phs000007.v33.p14       | phv00000481.v1.p14   | pht000009.v2.p14    | ex0_7s         |


</details>







## Adds permissible value data from PicSure to `DO NOT TOUCH Copy of priority phv not in TM` worksheet.

Adds permissible value data from PicSure to `DO NOT TOUCH Copy of priority phv not in TM` worksheet.
            For each row of priority not in TM where the BDCHM Variable is marked as 'yc' in BDCHM Priority Variables,
            look up phv in PicSure and grab permissible values info. (The PicSure data dictionary input is too large
            to store on GitHub. I have it as a local file.

#### Script: [permissible_vals_for_missing_phv.py](../missing_phv/permissible_vals_for_missing_phv.py): update_phv_not_in_tm()


### Input Files

#### [DO NOT TOUCH Copy of priority phv not in TM worksheet](https://docs.google.com/spreadsheets/d/1G-AIk2m4UCDfh1OvFID3bewQXqxExeKNNmVxaswLT8E/edit?gid=1927886785)


#### [BDCHM Priority Variables](https://docs.google.com/spreadsheets/d/1G-AIk2m4UCDfh1OvFID3bewQXqxExeKNNmVxaswLT8E/edit?gid=2039879463#gid=2039879463)





### Output Files

#### [DO NOT TOUCH Copy of priority phv not in TM worksheet](https://docs.google.com/spreadsheets/d/1G-AIk2m4UCDfh1OvFID3bewQXqxExeKNNmVxaswLT8E/edit?gid=1927886785)





## Adds permissible value data from PicSure to `DO NOT TOUCH TOPMed phvs & and values` worksheet.


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


#### Script: [permissible_vals_for_missing_phv.py](../missing_phv/permissible_vals_for_missing_phv.py): tm_phvs()


### Input Files

#### [BDCHM Priority Variables](https://docs.google.com/spreadsheets/d/1G-AIk2m4UCDfh1OvFID3bewQXqxExeKNNmVxaswLT8E/edit?gid=2039879463#gid=2039879463)


#### [topmed_plus_dbgap](../merged_TOPMed_harmonized_data_file/merged_variables.csv)

<details><summary>Preview</summary>


| Matched phv   | TOPMed Study   | TOPMed Harmonized Variable   | dbGap Variable Description   | dbGap Variable Name   | TOPMed Component ID                         | dbGap phs         | dbGap phv           | dbGap pht         | dbGap pht Name        | dbGap Study Name   |
|:--------------|:---------------|:-----------------------------|:-----------------------------|:----------------------|:--------------------------------------------|:------------------|:--------------------|:------------------|:----------------------|:-------------------|
| phv00036469   | FHS            | pad_incident_1               | Event Number                 | EVENT                 | phs000007.v30.pht000309.v13.phv00036469.v12 | phs000007.v33.p14 | phv00036469.v15.p14 | pht000309.v16.p14 | vr_soe_2020_a_1340s   | Framingham Cohort  |
| phv00036471   | FHS            | pad_incident_1               | Date of Event                | DATE                  | phs000007.v30.pht000309.v13.phv00036471.v12 | phs000007.v33.p14 | phv00036471.v15.p14 | pht000309.v16.p14 | vr_soe_2020_a_1340s   | Framingham Cohort  |
| phv00177930   | FHS            | pad_incident_1               | Age at Exam 1                | age1                  | phs000007.v30.pht003099.v5.phv00177930.v5   | phs000007.v33.p14 | phv00177930.v8.p14  | pht003099.v8.p14  | vr_dates_2019_a_1175s | Framingham Cohort  |


</details>





### Output Files

#### [DO NOT TOUCH TOPMed phvs & and values](https://docs.google.com/spreadsheets/d/1G-AIk2m4UCDfh1OvFID3bewQXqxExeKNNmVxaswLT8E/edit?gid=546161536#gid=546161536)

</details>



