### Generating a TOPMed harmonized data file by merging 

* [raw-to-harmonized-topmed-vars.csv](raw-to-harmonized-topmed-vars.csv) and
* [dbgap_variables_priority_cohorts.csv](dbgap_variables_priority_cohorts.csv)

using the PHS and PHV ID’s (Exclude the version numbers if needed).


#### First findings

Extracted just phv values (without version) into

  * [phv-names-dbgap](phv-names-dbgap) (170,729 values)
  * [phv-names-raw-to-harmonized](phv-names-raw-to-harmonized) (2,289 values, 1,162 distinct)

The two files had only 773 values in common.

    Sorted them and ran

         comm -12 phv-names-raw-to-harmonized phv-names-dbgap | wc -l
         773

#### Filtered raw-to-harmonized to only include priority cohorts
(i.e., ARIC,CARDIA,CHS,COPDGene,FHS,HCHS_SOL,JHS,MESA,WHI)

Command for getting phv values common to both files:

    comm -12 <(cat dbgap_variables_priority_cohorts.csv | sed 's/^.*\(phv[0-1]*\)/\1/' | sed 's/\..*//' | sort -u) <(cat raw-to-harmonized-topmed-vars.csv | sed 's/^.*\(phv[0-1]*\)/\1/' | sed 's/\..*//' | sort -u)
