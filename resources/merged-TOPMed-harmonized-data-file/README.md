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