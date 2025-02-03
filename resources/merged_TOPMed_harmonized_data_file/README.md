### Generating a TOPMed harmonized data file by merging 

* [raw_to_harmonized_topmed_vars.csv](../map_topmed_raw_to_harmonized/raw-to-harmonized-topmed-vars.csv) and
* [dbgap_variables_priority_cohorts.csv](../copies_of_external_source_files/dbgap_variables_priority_cohorts.csv)

using the PHS and PHV ID’s (Exclude the version numbers if needed).

#### Filtered raw-to-harmonized to only include priority cohorts
(i.e., ARIC,CARDIA,CHS,COPDGene,FHS,HCHS_SOL,JHS,MESA,WHI)

Command for getting phv values common to both files:

    comm -12 <(cat ../copies_of_external_source_files/dbgap_variables_priority_cohorts.csv | sed 's/^.*\(phv[0-1]*\)/\1/' | sed 's/\..*//' | sort -u) <(cat ../map-topmed-raw-to-harmonized/raw-to-harmonized-topmed-vars.csv | sed 's/^.*\(phv[0-1]*\)/\1/' | sed 's/\..*//' | sort -u)
