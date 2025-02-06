## Generate mapping from TopMed raw variables to TopMed harmonized variables

### Contents

* [map-topmed-raw-to-harmonized/](map-topmed-raw-to-harmonized/)
  * [generate_mapping.py](map-topmed-raw-to-harmonized/generate_mapping.py) -- Script
  * [raw-to-harmonized-topmed-vars.csv](map-topmed-raw-to-harmonized/raw-to-harmonized-topmed-vars.csv)
    -- Output

* [human-readable-harmonized-variable-documentation/](human-readable-harmonized-variable-documentation/)
  * [TopMED variable documentation](human-readable-harmonized-variable-documentation/generated-doc-pages/README.md)

* [merged_TOPMed_harmonized_data_file](merged_TOPMed_harmonized_data_file/)


### External resources

* [harmonized-variable-documentation](../../../topmed-dcc-harmonized-phenotypes/harmonized-variable-documentation)
  * Location of local clone of [UW-GAC/topmed-dcc-harmonized-phenotypes](https://github.com/UW-GAC/topmed-dcc-harmonized-phenotypes/tree/master/harmonized-variable-documentation).
    Clone that repo in the same directory as this repo, and the code that needs it should work.


| short_name                     | local_path                                                                       | web_location                                                                                             |
|--------------------------------|----------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| biolincc_variables_all_studies | ./resources/copies_of_external_source_files/biolincc_variables_all_studies.csv   | https://drive.google.com/file/d/1I_xZWRDUMHmz7jTNUFaVAQALe0ruVg6i/view?usp=drive_link                    |
| dbgap_priority                 | ./resources/copies_of_external_source_files/dbgap_variables_priority_cohorts.csv | https://docs.google.com/spreadsheets/d/1xe-aSFH0PJ_p1e4t5hEyDWlFwMYmV_6g8N8TD-izIEo/edit?gid=1719407279  |
| picsure_dd                     | ./resources/copies_of_external_source_files/picsure_data_dictionary.csv          |                                                                                                          |
| topmed_harm_var_json_docs      | ../../topmed-dcc-harmonized-phenotypes/harmonized-variable-documentation/        | https://github.com/UW-GAC/topmed-dcc-harmonized-phenotypes/tree/master/harmonized-variable-documentation |
| topmed_plus_dbgap              | ./merged_TOPMed_harmonized_data_file/merged_variables.csv                        |                                                                                                          |
| topmed_not_dbgap               | ./merged_TOPMed_harm onized_data_file/raw_to_harm_only.csv                       |                                                                                                          |
| topmed_raw_to_harm             | ./map-topmed-raw-to-harmonized/raw-to-harmonized-topmed-vars.csv                 |                                                                                                          |
| aha_harmonized                 | ./resources/copies_of_external_source_files/AHA_TABLES 1(Sheet1).csv             |                                                                                                          |
| aha_study_vars                 | ./resources/copies_of_external_source_files/AHA_TABLES 1(Sheet2).csv             |                                                                                                          |
| bdchm_priority_not_in_topmed   | ./resources/copies_of_external_source_files/priorityPhvNotInTM_sheet.csv         | https://docs.google.com/spreadsheets/d/1G-AIk2m4UCDfh1OvFID3bewQXqxExeKNNmVxaswLT8E/edit?gid=215586941   |
| bdchm_topmed_vars              | ./resources/copies_of_external_source_files/TopmedHarmonizedVariables_sheet.csv  | https://docs.google.com/spreadsheets/d/1G-AIk2m4UCDfh1OvFID3bewQXqxExeKNNmVxaswLT8E/edit?gid=215586941   |
| bdchm_priority                 | ./resources/copies_of_external_source_files/BDCHMPriorityVariables_sheet.csv     | https://docs.google.com/spreadsheets/d/1G-AIk2m4UCDfh1OvFID3bewQXqxExeKNNmVxaswLT8E/edit?gid=215586941   |
