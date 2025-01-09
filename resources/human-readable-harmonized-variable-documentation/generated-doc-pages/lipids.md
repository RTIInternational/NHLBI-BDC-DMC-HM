
# lipids

### Variables in this section:
* [fasting_lipids_1](#fasting_lipids_1)
* [hdl_1](#hdl_1)
* [ldl_1](#ldl_1)
* [lipid_lowering_medication_1](#lipid_lowering_medication_1)
* [total_cholesterol_1](#total_cholesterol_1)
* [triglycerides_1](#triglycerides_1)

<a id="fasting_lipids_1"></a>
## lipids: **fasting_lipids_1** (fasting_lipids)
  Indicates whether participant fasted for at least eight hours prior to blood draw to measure lipids phenotypes.
  * **Harmonization Units**:
    * [Amish](#fasting_lipids_1-amish)
    * [ARIC](#fasting_lipids_1-aric)
    * [CARDIA](#fasting_lipids_1-cardia)
    * [CFS](#fasting_lipids_1-cfs)
    * [CHS](#fasting_lipids_1-chs)
    * [FHS_Gen3](#fasting_lipids_1-fhs_gen3)
    * [FHS_NewOffspringSpouse_Omni2](#fasting_lipids_1-fhs_newoffspringspouse_omni2)
    * [FHS_Offspring](#fasting_lipids_1-fhs_offspring)
    * [GENOA](#fasting_lipids_1-genoa)
    * [HCHS_SOL](#fasting_lipids_1-hchs_sol)
    * [JHS](#fasting_lipids_1-jhs)
    * [MESA](#fasting_lipids_1-mesa)
    * [SAS](#fasting_lipids_1-sas)
  * **Metadata**:
    **`Data Type`**: encoded, **`Measurement Units`**: None, **`Version`**: 3, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2018-12-12 15:39:19
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C1976106
  * **DCC Harmonization Comments**:

    This variable was harmonized by converting fasting time in hours to a binary
    indicator as needed; or in the cases where all participants fasted prior to the
    blood draw at which lipids were measured, this variable was set to true for all
    participants.
    
    Exceptions to the eight-hour cutoff are the *_CARDIA_*, *_FHS_* Offspring cohort, *_GENOA_*
    and *_SAS_*. Subjects in *_CARDIA_* and the *_FHS_* Offspring cohort were asked to fast for
    _12 hours_ or more. Subjects in the studies *_GENOA_* and *_SAS_* were asked to
    fast for _10 hours_ or more and greater resolution is not available.
    
    Subjects in
    [*_ARIC_*](https://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/document.cgi?study_id=phs000280.v3.p1&phv=182563&phd=4496&pha=&pht=4235&phvf=&phdf=387&phaf=&phtf=494&dssp=1&consent=&temp=1#sec9), *_CHS_* and *_HCHS/SOL_* were asked to fast for 12 hours prior to the blood draw. However,
    there are study variables available from all three studies that indicate
    specifically how long the subject fasted for. These variables were used for
    harmonization.
    
    #### FHS
    
    DCC analysts could not confirm that data from the *_FHS_* Original cohort
    available in dbGaP should be used for harmonization, and they are not included.
    
    
<a id="fasting_lipids_1-amish"></a>
  * ### lipids/fasting_lipids_1 -- **Amish**:
    * 1 component_study_variables: `phs000956.v2.pht005002.v1.phv00252976.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset and rename variables.
        dataset <- phen_list$source_data$pht005002 %>%
          rename(age = age_baseline)
      
        # Substitute the winsorized age value of '90+' to a numeric value 90.
        dataset$age[dataset$age %in% '90+'] <- 90
      
        # Substitute the value of 'NA' to missing.
        dataset$age[dataset$age %in% 'NA'] <- NA
      
        # Remove records with NAs from dataset.
        dataset <- dataset[!is.na(dataset$age), ]
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Create fasting status for all subjects, since all subjects have fasted.
        dataset <- transmute(dataset, topmed_subject_id, age, fasting_lipids = "1")
      
        return(dataset)
      }
      ```
<a id="fasting_lipids_1-aric"></a>
  * ### lipids/fasting_lipids_1 -- **ARIC**:
    * 2 component_study_variables: `phs000280.v4.pht004063.v2.phv00204712.v1`, `phs000280.v4.pht004063.v2.phv00204732.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        dataset <- phen_list$source_data$pht004063 %>%
          rename(age = V1AGE01, fasting_lipids = FAST0802) %>%
          mutate_at(vars(age), funs(as.numeric))
      
        # Encoded value "T" is NA
        dataset[which(dataset$fasting_lipids == "T"), ]$fasting_lipids <- NA
      
        # Exclude rows with missing data
        dataset <- dataset[!is.na(dataset$age) & !is.na(dataset$fasting_lipids), ]
      
        return(dataset)
      }
      ```
<a id="fasting_lipids_1-cardia"></a>
  * ### lipids/fasting_lipids_1 -- **CARDIA**:
    * 2 component_study_variables: `phs000285.v3.pht001559.v2.phv00112439.v2`, `phs000285.v3.pht001563.v2.phv00112661.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        source_data <- phen_list$source_data
        # Join fasting data with age data.
        dat <- full_join(source_data$pht001559, source_data$pht001563, "topmed_subject_id") %>%
          # Rename variables and convert to numeric.
          transmute(topmed_subject_id, age = as.numeric(A01AGE2), fasting_lipids = A05FAST)
      
        # Recode fasting_lipids.
        dat$fasting_lipids[dat$fasting_lipids == "YES"] <- "1"
        dat$fasting_lipids[dat$fasting_lipids == "NO"] <- "0"
        # Exclude rows with missing data.
        dat <- na.omit(dat)
        return(dat)
      }
      ```
<a id="fasting_lipids_1-cfs"></a>
  * ### lipids/fasting_lipids_1 -- **CFS**:
    * 2 component_study_variables: `phs000284.v1.pht001902.v1.phv00122012.v1`, `phs000284.v1.pht001902.v1.phv00122015.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        phen_list$source_data$pht001902 %>%
          # Convert character vectors to numeric
          mutate_if(is.character, as.numeric) %>%
          # Subset to visit 5
          filter(visit == 5) %>%
          # Select only relevant variables
          transmute(topmed_subject_id, age, fasting_lipids = "1") %>%
          return()
      }
      ```
<a id="fasting_lipids_1-chs"></a>
  * ### lipids/fasting_lipids_1 -- **CHS**:
    * 2 component_study_variables: `phs000287.v6.pht001451.v1.phv00099923.v1`, `phs000287.v6.pht001452.v1.phv00100487.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        source_data <- phen_list$source_data
      
        # Join age dataset and fasting dataset
        inner_join(source_data$pht001451, source_data$pht001452) %>%
          # Convert AGEBL and FAST30 to numeric
          mutate_at(vars(AGEBL, FAST30), funs(as.numeric)) %>%
          # Select ID, rename age
          transmute(topmed_subject_id, age = AGEBL,
                    # Create binary fasting indicator
                    fasting_lipids = as.character(as.integer(FAST30 >= 8))) %>%
          # Exclude records with NAs
          na.omit() %>%
          return()
      }
      ```
<a id="fasting_lipids_1-fhs_gen3"></a>
  * ### lipids/fasting_lipids_1 -- **FHS_Gen3**:
    * 2 component_study_variables: `phs000007.v29.pht000074.v10.phv00021237.v4`, `phs000007.v29.pht006026.v1.phv00277020.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        source_data <- phen_list$source_data
        # Join fasting dataset with age dataset.
        dataset <- plyr::join_all(source_data) %>%
          # Convert AGE1 and G3A453 to numeric.
          mutate_at(vars(AGE1, G3A453), funs(as.numeric)) %>%
          # Select ID, rename age.
          transmute(topmed_subject_id, age = AGE1,
                    # Create binary fasting indicator
                    fasting_lipids = as.character(as.integer(G3A453 >= 8)))
      
        # Exclude records with NAs.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="fasting_lipids_1-fhs_newoffspringspouse_omni2"></a>
  * ### lipids/fasting_lipids_1 -- **FHS_NewOffspringSpouse_Omni2**:
    * 2 component_study_variables: `phs000007.v29.pht005143.v1.phv00255347.v1`, `phs000007.v29.pht006026.v1.phv00277020.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        source_data <- phen_list$source_data
        # Join fasting dataset with age dataset.
        dataset <- plyr::join_all(source_data) %>%
          # Convert AGE1 to numeric.
          mutate_at(vars(AGE1), funs(as.numeric)) %>%
          # Select ID, rename age and fasting.
          transmute(topmed_subject_id, age = AGE1, fasting_lipids = FASTING)
      
        # Exclude records with NAs.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="fasting_lipids_1-fhs_offspring"></a>
  * ### lipids/fasting_lipids_1 -- **FHS_Offspring**:
    * 2 component_study_variables: `phs000007.v29.pht000030.v7.phv00007550.v5`, `phs000007.v29.pht006027.v1.phv00277077.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        source_data <- phen_list$source_data
      
        # Join fasting dataset with age dataset.
        dataset <- plyr::join_all(source_data, by = "topmed_subject_id") %>%
          # Convert AGE1 to numeric.
          mutate_at(vars(AGE1), funs(as.numeric)) %>%
          # Select ID, rename age and fasting status.
          transmute(topmed_subject_id, age = AGE1, fasting_lipids = A23)
      
        # Exclude records with NAs.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="fasting_lipids_1-genoa"></a>
  * ### lipids/fasting_lipids_1 -- **GENOA**:
    * 4 component_study_variables: `phs001238.v1.pht006039.v1.phv00277507.v1`, `phs001238.v1.pht006041.v1.phv00277572.v1`, `phs001238.v1.pht006653.v1.phv00307788.v1`, `phs001238.v1.pht006655.v1.phv00307853.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset.
        source_data <- phen_list$source_data
        data_aa <- inner_join(source_data$pht006039,
                              source_data$pht006041,
                              by = "topmed_subject_id")
        data_ea <- inner_join(source_data$pht006653,
                              source_data$pht006655,
                              by = "topmed_subject_id")
        dataset <- union(data_aa, data_ea)
      
        # Rename variables.
        dataset <- rename(dataset, age = AGE, fasting_lipids = FAST10HR)
      
        # Encode the two-level factor values to binary values.
        dataset <- mutate_if(dataset, is.factor, as.character)
        dataset$fasting_lipids[dataset$fasting_lipids %in% 'No'] <- 0
        dataset$fasting_lipids[dataset$fasting_lipids %in% 'Yes'] <- 1
      
        # Remove records with NAs from dataset.
        dataset <- dataset[!is.na(dataset$age) & !is.na(dataset$fasting_lipids), ]
      
        return(dataset)
      }
      ```
<a id="fasting_lipids_1-hchs_sol"></a>
  * ### lipids/fasting_lipids_1 -- **HCHS_SOL**:
    * 2 component_study_variables: `phs000810.v1.pht004715.v1.phv00226251.v1`, `phs000810.v1.pht004715.v1.phv00253225.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        dat <- phen_list$source_data$pht004715 %>%
          # Convert character vectors to numeric.
          mutate_if(is.character, as.numeric) %>%
          # Rename variables and create binary fasting variable.
          transmute(topmed_subject_id, age = AGE,
                    fasting_lipids = as.character(as.numeric(FASTTIME >= 8))) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dat)
      }
      ```
<a id="fasting_lipids_1-jhs"></a>
  * ### lipids/fasting_lipids_1 -- **JHS**:
    * 2 component_study_variables: `phs000286.v5.pht001949.v1.phv00126009.v1`, `phs000286.v5.pht001949.v1.phv00126044.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset and rename variables.
        dataset <- phen_list$source_data$pht001949 %>%
          rename(age = AGE01, fasting_lipids = LPF01)
      
        # Substitute the value of 'NA' to missing.
        dataset$fasting_lipids[dataset$fasting_lipids %in% 'NA'] <- NA
      
        # Remove records with NAs from dataset.
        dataset <- dataset[!is.na(dataset$age) & !is.na(dataset$fasting_lipids), ]
      
        # Convert character values to numeric.
        dataset <- mutate(dataset, age = as.numeric(age))
      
        return(dataset)
      }
      ```
<a id="fasting_lipids_1-mesa"></a>
  * ### lipids/fasting_lipids_1 -- **MESA**:
    * 6 component_study_variables: `phs000209.v13.pht001111.v4.phv00082639.v2`, `phs000209.v13.pht001111.v4.phv00083303.v1`, `phs000209.v13.pht001116.v10.phv00084442.v3`, `phs000209.v13.pht001116.v10.phv00084980.v2`, `phs000209.v13.pht001121.v3.phv00087071.v1`, `phs000209.v13.pht001121.v3.phv00087524.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get list of dataframes.
        source_data <- phen_list$source_data
        # Rename variables in the family exam to match variables in the other dataframes.
        source_data$pht001121 <- rename(source_data$pht001121, age1c = agefc,
                                        lastdrk1 = lastdrkf)
      
        # Bind datasets row-wise.
        dat <- bind_rows(source_data) %>%
          # Rename fasting and age variables. Convert age to numeric and fasting to binary.
          transmute(topmed_subject_id,
                    fasting_lipids = as.character(as.numeric(as.numeric(lastdrk1) >= 8)),
                    age = as.numeric(age1c)) %>%
          # Exclude rows with missing data.
          na.omit()
      
        return(dat)
      }
      ```
<a id="fasting_lipids_1-sas"></a>
  * ### lipids/fasting_lipids_1 -- **SAS**:
    * 1 component_study_variables: `phs000914.v1.pht005253.v1.phv00258680.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(magrittr)
        dataset <- phen_list$source_data$pht005253 %>%
          # Select/rename variables, convert age to numeric, set fasting to true
          # for all subjects.
          transmute(topmed_subject_id, age = as.numeric(Dec_Age),
                    fasting_lipids = "1") %>%
          # Exclude incomplete rows.
          na.omit()
        return(dataset)
      }
      ```
<a id="hdl_1"></a>
## lipids: **hdl_1** (hdl)
  Blood mass concentration of high-density lipoprotein cholesterol
  * **Harmonization Units**:
    * [Amish](#hdl_1-amish)
    * [ARIC](#hdl_1-aric)
    * [CARDIA](#hdl_1-cardia)
    * [CFS](#hdl_1-cfs)
    * [CHS](#hdl_1-chs)
    * [FHS_Gen3_NewOffspringSpouse_Omni2](#hdl_1-fhs_gen3_newoffspringspouse_omni2)
    * [FHS_Offspring](#hdl_1-fhs_offspring)
    * [GENOA](#hdl_1-genoa)
    * [HCHS_SOL](#hdl_1-hchs_sol)
    * [JHS](#hdl_1-jhs)
    * [MESA](#hdl_1-mesa)
    * [SAS](#hdl_1-sas)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: mg/dL, **`Version`**: 3, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2018-12-12 15:49:25
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C2603387
  * **DCC Harmonization Comments**:

    This variable was harmonized by converting component study variables to the
    appropriate unit of measure as needed.
    
    #### FHS
    
    DCC analysts could not confirm that data from the Original cohort available in
    dbGaP should be used for harmonization, and they are not included.
    
    #### Assays and measurement
    
    Lipids were measured in a number of different methods across studies:
    
    | study | method |
    |-------|--------|
    | Amish | serum |
    | ARIC | plasma |
    | CARDIA | plasma |
    | CFS | plasma |
    | CHS | plasma |
    | FHS | plasma |
    | GENOA | serum |
    | HCHS/SOL | serum |
    | JHS | serum |
    | MESA | plasma |
    | SAS | serum |
    
    
<a id="hdl_1-amish"></a>
  * ### lipids/hdl_1 -- **Amish**:
    * 2 component_study_variables: `phs000956.v2.pht005002.v1.phv00252976.v1`, `phs000956.v2.pht005002.v1.phv00253018.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset and rename variables.
        dataset <- phen_list$source_data$pht005002 %>%
          rename(age = age_baseline, hdl = hdl_baseline)
      
        # Substitute the winsorized age value of '90+' to a numeric value 90.
        dataset$age[dataset$age %in% '90+'] <- 90
      
        # Substitute the value of 'NA' to missing.
        dataset$age[dataset$age %in% 'NA'] <- NA
        dataset$hdl[dataset$hdl %in% 'NA'] <- NA
      
        # Remove records with NAs from dataset.
        dataset <- dataset[!is.na(dataset$age) & !is.na(dataset$hdl), ]
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        return(dataset)
      }
      ```
<a id="hdl_1-aric"></a>
  * ### lipids/hdl_1 -- **ARIC**:
    * 2 component_study_variables: `phs000280.v4.pht004063.v2.phv00204712.v1`, `phs000280.v4.pht004063.v2.phv00204761.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        phen_list$source_data$pht004063 %>%
          rename(age = V1AGE01, hdl = HDL01) %>%
          # Convert character values to numeric
          mutate_if(is.character, as.numeric) %>%
          # Exclude records with NAs
          na.omit() %>%
          return()
      }
      ```
<a id="hdl_1-cardia"></a>
  * ### lipids/hdl_1 -- **CARDIA**:
    * 2 component_study_variables: `phs000285.v3.pht001559.v2.phv00112439.v2`, `phs000285.v3.pht001588.v2.phv00113702.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        source_data <- phen_list$source_data
        # Join lipids data with age data.
        dat <- full_join(source_data$pht001559, source_data$pht001588, "topmed_subject_id") %>%
          # Rename variables and convert to numeric.
          transmute(topmed_subject_id, age = as.numeric(A01AGE2), hdl = as.numeric(AL1HDL)) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dat)
      }
      ```
<a id="hdl_1-cfs"></a>
  * ### lipids/hdl_1 -- **CFS**:
    * 3 component_study_variables: `phs000284.v1.pht001902.v1.phv00122012.v1`, `phs000284.v1.pht001902.v1.phv00122015.v1`, `phs000284.v1.pht001902.v1.phv00123968.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        phen_list$source_data$pht001902 %>%
          # Convert character vectors to numeric
          mutate_if(is.character, as.numeric) %>%
          # Subset to visit 5
          filter(visit == 5) %>%
          # Select only necessary variables
          select(topmed_subject_id, age, hdl) %>%
          na.omit() %>%
          return()
      }
      ```
<a id="hdl_1-chs"></a>
  * ### lipids/hdl_1 -- **CHS**:
    * 2 component_study_variables: `phs000287.v6.pht001452.v1.phv00100426.v1`, `phs000287.v6.pht001452.v1.phv00100487.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        source_data <- phen_list$source_data
        source_data$pht001452 %>% rename(age = AGEBL, hdl = HDL44) %>%
          # Convert character values to numeric
          mutate_if(is.character, as.numeric) %>%
          # Exclude incomplete records
          na.omit() %>%
          return()
      }
      ```
<a id="hdl_1-fhs_gen3_newoffspringspouse_omni2"></a>
  * ### lipids/hdl_1 -- **FHS_Gen3_NewOffspringSpouse_Omni2**:
    * 2 component_study_variables: `phs000007.v29.pht006026.v1.phv00277020.v1`, `phs000007.v29.pht006026.v1.phv00277040.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        dataset <- phen_list$source_data$pht006026 %>%
          # Convert character vectors to numeric.
          mutate_if(is.character, as.numeric) %>%
          # Rename age and HDL variables.
          select(topmed_subject_id, age = AGE1, hdl = HDL1) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dataset)
      }
      ```
<a id="hdl_1-fhs_offspring"></a>
  * ### lipids/hdl_1 -- **FHS_Offspring**:
    * 2 component_study_variables: `phs000007.v29.pht006027.v1.phv00277077.v1`, `phs000007.v29.pht006027.v1.phv00277162.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        dataset <- phen_list$source_data$pht006027 %>%
          # Convert character vectors to numeric.
          mutate_if(is.character, as.numeric) %>%
          # Rename age and HDL variables.
          select(topmed_subject_id, age = AGE1, hdl = HDL1) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dataset)
      }
      ```
<a id="hdl_1-genoa"></a>
  * ### lipids/hdl_1 -- **GENOA**:
    * 4 component_study_variables: `phs001238.v1.pht006039.v1.phv00277507.v1`, `phs001238.v1.pht006041.v1.phv00277575.v1`, `phs001238.v1.pht006653.v1.phv00307788.v1`, `phs001238.v1.pht006655.v1.phv00307856.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset.
        source_data <- phen_list$source_data
        data_aa <- inner_join(source_data$pht006039,
                              source_data$pht006041,
                              by = "topmed_subject_id")
        data_ea <- inner_join(source_data$pht006653,
                              source_data$pht006655,
                              by = "topmed_subject_id")
        dataset <- union(data_aa, data_ea)
      
        # Rename variables.
        dataset <- rename(dataset, age = AGE, hdl = HDL)
      
        # Substitute the value of 'NA' to missing.
        dataset$hdl[dataset$hdl %in% 'NA'] <- NA
        dataset$age[dataset$age %in% 'NA'] <- NA
      
        # Remove records with NAs from dataset.
        dataset <- dataset[!is.na(dataset$age) & !is.na(dataset$hdl), ]
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        return(dataset)
      }
      ```
<a id="hdl_1-hchs_sol"></a>
  * ### lipids/hdl_1 -- **HCHS_SOL**:
    * 2 component_study_variables: `phs000810.v1.pht004715.v1.phv00226251.v1`, `phs000810.v1.pht004715.v1.phv00253239.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        # Rename and convert variables to numeric.
        dat <- transmute(phen_list$source_data$pht004715, topmed_subject_id,
                         age = as.numeric(AGE), hdl = as.numeric(LABA68)) %>%
          # Exclude rows with missing data
          na.omit()
        return(dat)
      }
      ```
<a id="hdl_1-jhs"></a>
  * ### lipids/hdl_1 -- **JHS**:
    * 2 component_study_variables: `phs000286.v5.pht001945.v1.phv00125930.v1`, `phs000286.v5.pht001949.v1.phv00126009.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset and rename variables.
        source_data <- phen_list$source_data
        dataset <- inner_join(source_data$pht001949,
                              source_data$pht001945,
                              by = "topmed_subject_id") %>%
          rename(age = AGE01, hdl = HDLC)
      
        # Substitute the value of 'NA' to missing.
        dataset$hdl[dataset$hdl %in% 'NA'] <- NA
      
        # Remove records with NAs from dataset.
        dataset <- dataset[!is.na(dataset$age) & !is.na(dataset$hdl), ]
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        return(dataset)
      }
      ```
<a id="hdl_1-mesa"></a>
  * ### lipids/hdl_1 -- **MESA**:
    * 6 component_study_variables: `phs000209.v13.pht001111.v4.phv00082639.v2`, `phs000209.v13.pht001111.v4.phv00082952.v1`, `phs000209.v13.pht001116.v10.phv00084442.v3`, `phs000209.v13.pht001116.v10.phv00084972.v2`, `phs000209.v13.pht001121.v3.phv00087071.v1`, `phs000209.v13.pht001121.v3.phv00087099.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get list of dataframes.
        source_data <- phen_list$source_data
        # Rename variables in the family exam to match variables in the other dataframes.
        source_data$pht001121 <- rename(source_data$pht001121, age1c = agefc,
                                        hdl1 = hdlf)
        # Bind datasets row-wise.
        dat <- bind_rows(source_data) %>%
          # Rename hdl and age variables and convert to numeric.
          transmute(topmed_subject_id, hdl = as.numeric(hdl1), age = as.numeric(age1c)) %>%
          na.omit()
      
        return(dat)
      }
      ```
<a id="hdl_1-sas"></a>
  * ### lipids/hdl_1 -- **SAS**:
    * 2 component_study_variables: `phs000914.v1.pht005253.v1.phv00258680.v1`, `phs000914.v1.pht005253.v1.phv00258743.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(magrittr)
        dataset <- phen_list$source_data$pht005253
      
        # Set string entries of "NA" to NA
        dataset[which(dataset$HDL_C == "NA"), ]$HDL_C <- NA
      
        # Convert character values to numeric and remove <NA>s from dataset
        dataset %>% mutate_if(is.character, as.numeric) %>%
          rename(age = Dec_Age, hdl = HDL_C) %>%
          na.omit() %>%
          return()
      }
      ```
<a id="ldl_1"></a>
## lipids: **ldl_1** (ldl)
  Blood mass concentration of low-density lipoprotein cholesterol
  * **Harmonization Units**:
    * [DCC_harmonized](#ldl_1-dcc_harmonized)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: mg/dL, **`Version`**: 3, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2018-12-12 16:13:48
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C2603388
  * **DCC Harmonization Comments**:

    The DCC-harmonized variables for HDL cholesterol, total cholesterol and
    triglycerides were used to derive this variable with the Friedewald
    formula[^1].
    
    #### Assays and measurement
    
    Lipids were measured in a number of different methods across studies:
    
    | study | method |
    |-------|--------|
    | Amish | serum |
    | ARIC | plasma |
    | CARDIA | plasma |
    | CFS | plasma |
    | CHS | plasma |
    | FHS | plasma |
    | GENOA | serum |
    | HCHS/SOL | serum |
    | JHS | serum |
    | MESA | plasma |
    | SAS | serum |
    
    ### QC Checks
    
    There are a small number of discrepancies between this variable and the
    *_Amish_* study variable `ldl_baseline` (phv00253017); the *_CFS_* study
    variable `ldl` (phv00123971); the *_CHS_* study variable `LDLADJ`
    (phv00100492); the *_JHS_* study variable `LDLC` (phv00125931); and the
    *_MESA_* study variables `ldl1` (phv00082951, phv00084971) and `ldlf`
    (phv00087098). These study variables contain LDL data calculated by the study,
    also derived with the Friedewald formula, and were used for quality checks.
    
    For one subject from *_CFS_*, there is a 25.9% difference in value between this
    variable and the CFS study variable.
    
    [^1]: Friedewald, W. T., Levy, R. I., and Fredrickson, D. S. (1972). Estimation
      of the concentration of low-density lipoprotein cholesterol in plasma,
      without use of the preparative ultracentrifuge. Clin. Chem., 18(6), 499-502.
    
    
<a id="ldl_1-dcc_harmonized"></a>
  * ### lipids/ldl_1 -- **DCC_harmonized**:
    * 3 component_harmonized_variables: `total_cholesterol_1`, `triglycerides_1`, `hdl_1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        harmonized_data <- phen_list$harmonized_data
        # Join harmonized datasets.
        srcd <-  plyr::join_all(harmonized_data, by = "topmed_subject_id",
                                type = "inner") %>%
          mutate_at(vars(total_cholesterol_1, hdl_1, triglycerides_1), funs(as.numeric)) %>%
          # Exclude incomplete records from source data.
          na.omit()
      
        # Use age_at_triglycerids for age.
        srcd$age <- srcd$age_at_triglycerides_1
      
        # Stop if all ages are not equal.
        if (!all(srcd$age == srcd$age_at_total_cholesterol_1) |
            !all(srcd$age == srcd$age_at_hdl_1)){
          stop("Age at measurement does not match for all source phenotypes")
        }
      
        # Friedewald formula to calculate LDL values.
        srcd$ldl <- srcd$total_cholesterol_1 - srcd$hdl_1 - (srcd$triglycerides_1 / 5)
      
        # If triglyceride >= 400, set LDL to NA.
        srcd[which(srcd$triglycerides_1 >= 400), ]$ldl <- NA
      
        # Set negative LDL values to NA.
        srcd[which(srcd$ldl < 0), ]$ldl <- NA
      
        # Exclude incomplete records.
        srcd <- na.omit(srcd) %>%
          # Select variables to return.
          select(topmed_subject_id, ldl, age)
        # Return harmonized dataset.
        return(srcd)
      }
      ```
<a id="lipid_lowering_medication_1"></a>
## lipids: **lipid_lowering_medication_1** (lipid_lowering_medication)
  Indicates whether participant was taking any lipid-lowering medication at blood draw to measure lipids phenotypes
  * **Harmonization Units**:
    * [Amish](#lipid_lowering_medication_1-amish)
    * [ARIC](#lipid_lowering_medication_1-aric)
    * [CFS](#lipid_lowering_medication_1-cfs)
    * [CHS](#lipid_lowering_medication_1-chs)
    * [FHS_Gen3_NewOffspringSpouse_Omni2](#lipid_lowering_medication_1-fhs_gen3_newoffspringspouse_omni2)
    * [FHS_Offspring](#lipid_lowering_medication_1-fhs_offspring)
    * [GENOA](#lipid_lowering_medication_1-genoa)
    * [HCHS_SOL](#lipid_lowering_medication_1-hchs_sol)
    * [JHS](#lipid_lowering_medication_1-jhs)
    * [MESA](#lipid_lowering_medication_1-mesa)
  * **Metadata**:
    **`Data Type`**: encoded, **`Measurement Units`**: None, **`Version`**: 3, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2018-12-13 08:44:44
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C2924556
  * **DCC Harmonization Comments**:

    This variable is not restricted to a single class of medications, and includes
    lipid lowering drugs like statins and fibrates.
    
    #### FHS
    
    DCC analysts could not confirm that data from the *_FHS_* Original cohort
    available in dbGaP should be used for harmonization, and they are not included.
    
    #### SAS
    
    There is no study variable to indicate whether a subject was taking
    lipid-lowering medication at the time of the lipids blood draw. Therefore, all
    *_SAS_* subjects have missing values for this harmonized variable.
    
    
<a id="lipid_lowering_medication_1-amish"></a>
  * ### lipids/lipid_lowering_medication_1 -- **Amish**:
    * 2 component_study_variables: `phs000956.v2.pht005002.v1.phv00252976.v1`, `phs000956.v2.pht005002.v1.phv00253021.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset and rename variables.
        dataset <- phen_list$source_data$pht005002 %>%
          rename(age = age_baseline, lipid_lowering_medication = lipid_med_baseline)
      
        # Substitute the winsorized age value of '90+' to a numeric value 90.
        dataset$age[dataset$age %in% '90+'] <- 90
      
        # Substitute the value of 'NA' to missing.
        dataset$age[dataset$age %in% 'NA'] <- NA
        dataset$lipid_lowering_medication[dataset$lipid_lowering_medication %in% 'NA'] <- NA
      
        # Remove records with NAs from dataset.
        dataset <- dataset[!is.na(dataset$age) & !is.na(dataset$lipid_lowering_medication), ]
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        return(dataset)
      }
      ```
<a id="lipid_lowering_medication_1-aric"></a>
  * ### lipids/lipid_lowering_medication_1 -- **ARIC**:
    * 2 component_study_variables: `phs000280.v4.pht004063.v2.phv00204712.v1`, `phs000280.v4.pht004063.v2.phv00204802.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(magrittr)
        dataset <- phen_list$source_data$pht004063 %>%
          rename(age = V1AGE01, lipid_lowering_medication = CHOLMDCODE01)
      
        # Convert "T" entry to NA. "T" is interpreted as "forgot medications" or "missing data"
        dataset[which(dataset$lipid_lowering_medication == "T"), ]$lipid_lowering_medication <- NA
      
        # Exclude missing records
        dataset <- dataset[!is.na(dataset$age) & !is.na(dataset$lipid_lowering_medication), ]
      
        # Convert character values to numeric
        dataset %>% mutate_if(is.character, as.numeric) %>%
          return()
      }
      ```
<a id="lipid_lowering_medication_1-cfs"></a>
  * ### lipids/lipid_lowering_medication_1 -- **CFS**:
    * 3 component_study_variables: `phs000284.v1.pht001902.v1.phv00122012.v1`, `phs000284.v1.pht001902.v1.phv00122015.v1`, `phs000284.v1.pht001902.v1.phv00123030.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        phen_list$source_data$pht001902 %>%
          # Convert character vectors to numeric
          mutate_if(is.character, as.numeric) %>%
          # Subset to visit 5
          filter(visit == 5) %>%
          # Select only relevant variables
          select(topmed_subject_id, age, lipid_lowering_medication = statins) %>%
            return()
      
      }
      ```
<a id="lipid_lowering_medication_1-chs"></a>
  * ### lipids/lipid_lowering_medication_1 -- **CHS**:
    * 2 component_study_variables: `phs000287.v6.pht001452.v1.phv00100487.v1`, `phs000287.v6.pht001452.v1.phv00100594.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        dataset <- phen_list$source_data$pht001452 %>%
          rename(age = AGEBL, lipid_lowering_medication = LIPID06)
      
        # Remove records with NAs from dataset
        dataset <- dataset[!is.na(dataset$age) & !is.na(dataset$lipid_lowering_medication), ]
      
        # Convert character values to numeric and return
        dataset %>% mutate_if(is.character, as.numeric) %>%
          return()
      }
      ```
<a id="lipid_lowering_medication_1-fhs_gen3_newoffspringspouse_omni2"></a>
  * ### lipids/lipid_lowering_medication_1 -- **FHS_Gen3_NewOffspringSpouse_Omni2**:
    * 2 component_study_variables: `phs000007.v29.pht006026.v1.phv00277020.v1`, `phs000007.v29.pht006026.v1.phv00277061.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        dataset <- phen_list$source_data$pht006026 %>%
          # Convert character vectors to numeric.
          mutate_if(is.character, as.numeric) %>%
          # Rename age and medication variables.
          select(topmed_subject_id, age = AGE1, lipid_lowering_medication = LIPRX1) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dataset)
      }
      ```
<a id="lipid_lowering_medication_1-fhs_offspring"></a>
  * ### lipids/lipid_lowering_medication_1 -- **FHS_Offspring**:
    * 2 component_study_variables: `phs000007.v29.pht006027.v1.phv00277077.v1`, `phs000007.v29.pht006027.v1.phv00277254.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        dataset <- phen_list$source_data$pht006027 %>%
          # Convert character vectors to numeric.
          mutate_if(is.character, as.numeric) %>%
          # Rename age and medication variables.
          select(topmed_subject_id, age = AGE1, lipid_lowering_medication = LIPRX1) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dataset)
      }
      ```
<a id="lipid_lowering_medication_1-genoa"></a>
  * ### lipids/lipid_lowering_medication_1 -- **GENOA**:
    * 4 component_study_variables: `phs001238.v1.pht006039.v1.phv00277507.v1`, `phs001238.v1.pht006042.v1.phv00277586.v1`, `phs001238.v1.pht006653.v1.phv00307788.v1`, `phs001238.v1.pht006656.v1.phv00307867.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset.
        source_data <- phen_list$source_data
        data_aa <- inner_join(source_data$pht006039,
                              source_data$pht006042,
                              by = "topmed_subject_id")
        data_ea <- inner_join(source_data$pht006653,
                              source_data$pht006656,
                              by = "topmed_subject_id")
        dataset <- union(data_aa, data_ea)
      
        # Rename variables.
        dataset <- rename(dataset, age = AGE, lipid_lowering_medication = meds_LIPIDS)
      
        # Encode the two-level factor values to binary values.
        dataset <- mutate_if(dataset, is.factor, as.character)
        dataset$lipid_lowering_medication[dataset$lipid_lowering_medication %in% 'NO'] <- 0
        dataset$lipid_lowering_medication[dataset$lipid_lowering_medication %in% 'YES'] <- 1
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Remove records with NAs from dataset.
        dataset <- dataset[!is.na(dataset$age) & !is.na(dataset$lipid_lowering_medication), ]
      
        return(dataset)
      }
      ```
<a id="lipid_lowering_medication_1-hchs_sol"></a>
  * ### lipids/lipid_lowering_medication_1 -- **HCHS_SOL**:
    * 2 component_study_variables: `phs000810.v1.pht004715.v1.phv00226251.v1`, `phs000810.v1.pht004715.v1.phv00226349.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        dat <- phen_list$source_data$ pht004715 %>%
          # Convert to numeric/rename variables.
          transmute(topmed_subject_id, age = as.numeric(AGE),
                    lipid_lowering_medication = as.numeric(MED_LLD)) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dat)
      }
      ```
<a id="lipid_lowering_medication_1-jhs"></a>
  * ### lipids/lipid_lowering_medication_1 -- **JHS**:
    * 2 component_study_variables: `phs000286.v5.pht001949.v1.phv00126009.v1`, `phs000286.v5.pht001949.v1.phv00126053.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset and rename variables.
        dataset <- phen_list$source_data$pht001949 %>%
          rename(age = AGE01, lipid_lowering_medication = LPM01)
      
        # Substitute the value of 'X' to missing.
        dataset$lipid_lowering_medication[dataset$lipid_lowering_medication %in% 'X'] <- NA
      
        # Remove records with NAs from dataset.
        dataset <- dataset[!is.na(dataset$age) & !is.na(dataset$lipid_lowering_medication), ]
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        return(dataset)
      }
      ```
<a id="lipid_lowering_medication_1-mesa"></a>
  * ### lipids/lipid_lowering_medication_1 -- **MESA**:
    * 6 component_study_variables: `phs000209.v13.pht001111.v4.phv00082639.v2`, `phs000209.v13.pht001111.v4.phv00083162.v1`, `phs000209.v13.pht001116.v10.phv00084442.v3`, `phs000209.v13.pht001116.v10.phv00085407.v2`, `phs000209.v13.pht001121.v3.phv00087071.v1`, `phs000209.v13.pht001121.v3.phv00087104.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get list of dataframes.
        source_data <- phen_list$source_data
        # Rename variables in the family exam to match variables in the other dataframes.
        source_data$pht001121 <- rename(source_data$pht001121, lipid1c = lipidfc,
                                        age1c = agefc)
        # Bind datasets row-wise.
        dat <- bind_rows(source_data) %>%
          # Rename treatment and age variables, and convert to numeric.
          transmute(topmed_subject_id, lipid_lowering_medication = as.numeric(lipid1c),
                    age = as.numeric(age1c)) %>%
          na.omit()
      
        return(dat)
      }
      ```
<a id="total_cholesterol_1"></a>
## lipids: **total_cholesterol_1** (total_cholesterol)
  Blood mass concentration of total cholesterol
  * **Harmonization Units**:
    * [Amish](#total_cholesterol_1-amish)
    * [ARIC](#total_cholesterol_1-aric)
    * [CARDIA](#total_cholesterol_1-cardia)
    * [CFS](#total_cholesterol_1-cfs)
    * [CHS](#total_cholesterol_1-chs)
    * [FHS_Gen3_NewOffspringSpouse_Omni2](#total_cholesterol_1-fhs_gen3_newoffspringspouse_omni2)
    * [FHS_Offspring](#total_cholesterol_1-fhs_offspring)
    * [GENOA](#total_cholesterol_1-genoa)
    * [HCHS_SOL](#total_cholesterol_1-hchs_sol)
    * [JHS](#total_cholesterol_1-jhs)
    * [MESA](#total_cholesterol_1-mesa)
    * [SAS](#total_cholesterol_1-sas)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: mg/dL, **`Version`**: 3, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2018-12-12 15:54:03
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C0543421
  * **DCC Harmonization Comments**:

    This variable was harmonized by converting study variables to the appropriate
    unit of measure as needed.
    
    #### CHS
    
    The component study variable `CHOLADJ` (phv00100491) was already adjusted for
    laboratory drift as provided.
    
    #### FHS
    
    DCC analysts could not confirm that data from the Original cohort available in
    dbGaP should be used for harmonization, and they are not included.
    
    #### Assays and measurement
    
    Lipids were measured in a number of different methods across studies:
    
    | study | method |
    |-------|--------|
    | Amish | serum |
    | ARIC | plasma |
    | CARDIA | plasma |
    | CFS | plasma |
    | CHS | plasma |
    | FHS | plasma |
    | GENOA | serum |
    | HCHS/SOL | serum |
    | JHS | serum |
    | MESA | plasma |
    | SAS | serum |
    
    ### QC Checks
    
    #### CFS
    
    The distribution of values for this phenotype is substantially lower than other
    studies. DCC analysts confirmed with study correspondents that the units are
    correct.
    
    
<a id="total_cholesterol_1-amish"></a>
  * ### lipids/total_cholesterol_1 -- **Amish**:
    * 2 component_study_variables: `phs000956.v2.pht005002.v1.phv00252976.v1`, `phs000956.v2.pht005002.v1.phv00253020.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset and rename variables.
        dataset <- phen_list$source_data$pht005002 %>%
          rename(age = age_baseline, total_cholesterol = totchol_baseline)
      
        # Substitute the winsorized age value of '90+' to a numeric value 90.
        dataset$age[dataset$age %in% '90+'] <- 90
      
        # Substitute the value of 'NA' to missing.
        dataset$age[dataset$age %in% 'NA'] <- NA
        dataset$total_cholesterol[dataset$total_cholesterol %in% 'NA'] <- NA
      
        # Remove records with NAs from dataset.
        dataset <- dataset[!is.na(dataset$age) & !is.na(dataset$total_cholesterol), ]
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        return(dataset)
      }
      ```
<a id="total_cholesterol_1-aric"></a>
  * ### lipids/total_cholesterol_1 -- **ARIC**:
    * 2 component_study_variables: `phs000280.v4.pht004063.v2.phv00204712.v1`, `phs000280.v4.pht004063.v2.phv00204735.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(magrittr)
        dataset <- phen_list$source_data$pht004063 %>%
          rename(age = V1AGE01, total_cholesterol = TCHSIU01)
      
        # Convert chol from SI unit to mg/dL using given conversion on ARIC data form
      
          # https://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/document.cgi?study_id=
          # phs000280.v4.p1&phv=204738&phd=2881&pha=&pht=1440&phvf=&phdf=&phaf=&phtf=
          # &dssp=1&consent=&temp=1#sec132
      
        dataset$total_cholesterol <- as.numeric(dataset$total_cholesterol) / 0.02586
      
        # Convert character values to numeric
        dataset %>% mutate_if(is.character, as.numeric) %>%
          na.omit() %>%
          return()
      }
      ```
<a id="total_cholesterol_1-cardia"></a>
  * ### lipids/total_cholesterol_1 -- **CARDIA**:
    * 2 component_study_variables: `phs000285.v3.pht001559.v2.phv00112439.v2`, `phs000285.v3.pht001588.v2.phv00113700.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        source_data <- phen_list$source_data
        # Join lipids data with age data.
        dat <- full_join(source_data$pht001559, source_data$pht001588, "topmed_subject_id") %>%
          # Rename variables and convert to numeric.
          transmute(topmed_subject_id, age = as.numeric(A01AGE2),
                    total_cholesterol = as.numeric(AL1CHOL)) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dat)
      }
      ```
<a id="total_cholesterol_1-cfs"></a>
  * ### lipids/total_cholesterol_1 -- **CFS**:
    * 3 component_study_variables: `phs000284.v1.pht001902.v1.phv00122012.v1`, `phs000284.v1.pht001902.v1.phv00122015.v1`, `phs000284.v1.pht001902.v1.phv00123953.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        phen_list$source_data$pht001902 %>%
          # Convert character vectors to numeric
          mutate_if(is.character, as.numeric) %>%
          # Subset to visit 5
          filter(visit == 5) %>%
          # Select only relevant variables
          select(topmed_subject_id, age, total_cholesterol = cholesterol) %>%
          na.omit() %>%
          return()
      }
      ```
<a id="total_cholesterol_1-chs"></a>
  * ### lipids/total_cholesterol_1 -- **CHS**:
    * 2 component_study_variables: `phs000287.v6.pht001452.v1.phv00100487.v1`, `phs000287.v6.pht001452.v1.phv00100491.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        phen_list$source_data$pht001452 %>%
          rename(age = AGEBL, total_cholesterol = CHOLADJ) %>%
          # Convert character values to numeric
          mutate_if(is.character, as.numeric) %>%
          # Exclude incomplete records
          na.omit() %>%
          return()
      }
      ```
<a id="total_cholesterol_1-fhs_gen3_newoffspringspouse_omni2"></a>
  * ### lipids/total_cholesterol_1 -- **FHS_Gen3_NewOffspringSpouse_Omni2**:
    * 2 component_study_variables: `phs000007.v29.pht006026.v1.phv00277020.v1`, `phs000007.v29.pht006026.v1.phv00277047.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        dataset <- phen_list$source_data$pht006026 %>%
          # Convert character vectors to numeric
          mutate_if(is.character, as.numeric) %>%
          # Rename age and cholesterol variables.
          select(topmed_subject_id, age = AGE1, total_cholesterol = TC1) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dataset)
      }
      ```
<a id="total_cholesterol_1-fhs_offspring"></a>
  * ### lipids/total_cholesterol_1 -- **FHS_Offspring**:
    * 2 component_study_variables: `phs000007.v29.pht006027.v1.phv00277077.v1`, `phs000007.v29.pht006027.v1.phv00277194.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        dataset <- phen_list$source_data$pht006027 %>%
          # Convert character vectors to numeric
          mutate_if(is.character, as.numeric) %>%
          # Rename age and cholesterol variables.
          select(topmed_subject_id, age = AGE1, total_cholesterol = TC1) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dataset)
      }
      ```
<a id="total_cholesterol_1-genoa"></a>
  * ### lipids/total_cholesterol_1 -- **GENOA**:
    * 4 component_study_variables: `phs001238.v1.pht006039.v1.phv00277507.v1`, `phs001238.v1.pht006041.v1.phv00277573.v1`, `phs001238.v1.pht006653.v1.phv00307788.v1`, `phs001238.v1.pht006655.v1.phv00307854.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset.
        source_data <- phen_list$source_data
        data_aa <- inner_join(source_data$pht006039,
                              source_data$pht006041,
                              by = "topmed_subject_id")
        data_ea <- inner_join(source_data$pht006653,
                              source_data$pht006655,
                              by = "topmed_subject_id")
        dataset <- union(data_aa, data_ea)
      
        # Rename variables.
        dataset <- rename(dataset, age = AGE, total_cholesterol = CHOL)
      
        # Substitute the value of 'NA' to missing.
        dataset$total_cholesterol[dataset$total_cholesterol %in% 'NA'] <- NA
        dataset$age[dataset$age %in% 'NA'] <- NA
      
        # Remove records with NAs from dataset.
        dataset <- dataset[!is.na(dataset$age) & !is.na(dataset$total_cholesterol), ]
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        return(dataset)
      }
      ```
<a id="total_cholesterol_1-hchs_sol"></a>
  * ### lipids/total_cholesterol_1 -- **HCHS_SOL**:
    * 2 component_study_variables: `phs000810.v1.pht004715.v1.phv00226251.v1`, `phs000810.v1.pht004715.v1.phv00253238.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        # Rename and convert variables to numeric.
        dat <- transmute(phen_list$source_data$pht004715, topmed_subject_id,
                         age = as.numeric(AGE),
                         total_cholesterol = as.numeric(LABA66)) %>%
        # Exclude rows with missing data
        na.omit()
        return(dat)
      }
      ```
<a id="total_cholesterol_1-jhs"></a>
  * ### lipids/total_cholesterol_1 -- **JHS**:
    * 2 component_study_variables: `phs000286.v5.pht001945.v1.phv00125927.v1`, `phs000286.v5.pht001949.v1.phv00126009.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset and rename variables.
        source_data <- phen_list$source_data
        dataset <- inner_join(source_data$pht001949,
                              source_data$pht001945,
                              by = "topmed_subject_id") %>%
          rename(age = AGE01, total_cholesterol = CHR)
      
        # Substitute the value of 'NA' to missing.
        dataset$total_cholesterol[dataset$total_cholesterol %in% 'NA'] <- NA
      
        # Remove records with NAs from dataset.
        dataset <- dataset[!is.na(dataset$age) & !is.na(dataset$total_cholesterol), ]
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        return(dataset)
      }
      ```
<a id="total_cholesterol_1-mesa"></a>
  * ### lipids/total_cholesterol_1 -- **MESA**:
    * 6 component_study_variables: `phs000209.v13.pht001111.v4.phv00082639.v2`, `phs000209.v13.pht001111.v4.phv00082956.v1`, `phs000209.v13.pht001116.v10.phv00084442.v3`, `phs000209.v13.pht001116.v10.phv00084974.v2`, `phs000209.v13.pht001121.v3.phv00087071.v1`, `phs000209.v13.pht001121.v3.phv00087100.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get list of dataframes.
        source_data <- phen_list$source_data
        # Rename variables in the family exam to match variables in the other dataframes.
        source_data$pht001121 <- rename(source_data$pht001121, chol1 = cholf, age1c = agefc)
        # Bind datasets row-wise.
        dat <- bind_rows(source_data) %>%
          # Rename cholesterol and age variables, and convert to numeric.
          transmute(topmed_subject_id, total_cholesterol = as.numeric(chol1),
                    age = as.numeric(age1c)) %>%
          # Exclude rows with missing values.
          na.omit()
      
        return(dat)
      }
      ```
<a id="total_cholesterol_1-sas"></a>
  * ### lipids/total_cholesterol_1 -- **SAS**:
    * 2 component_study_variables: `phs000914.v1.pht005253.v1.phv00258680.v1`, `phs000914.v1.pht005253.v1.phv00258733.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(magrittr)
        dataset <- phen_list$source_data$pht005253
      
        # Set string entries of "NA" to NA
        dataset[which(dataset$Cholesterol == "NA"), ]$Cholesterol <- NA
      
        # Convert character values to numeric and remove <NA>s from dataset
        dataset %>% mutate_if(is.character, as.numeric) %>%
          rename(age = Dec_Age, total_cholesterol = Cholesterol) %>%
          na.omit() %>%
          return()
      }
      ```
<a id="triglycerides_1"></a>
## lipids: **triglycerides_1** (triglycerides)
  Blood mass concentration of triglycerides
  * **Harmonization Units**:
    * [Amish](#triglycerides_1-amish)
    * [ARIC](#triglycerides_1-aric)
    * [CARDIA](#triglycerides_1-cardia)
    * [CFS](#triglycerides_1-cfs)
    * [CHS](#triglycerides_1-chs)
    * [FHS_Gen3_NewOffspringSpouse_Omni2](#triglycerides_1-fhs_gen3_newoffspringspouse_omni2)
    * [FHS_Offspring](#triglycerides_1-fhs_offspring)
    * [GENOA](#triglycerides_1-genoa)
    * [HCHS_SOL](#triglycerides_1-hchs_sol)
    * [JHS](#triglycerides_1-jhs)
    * [MESA](#triglycerides_1-mesa)
    * [SAS](#triglycerides_1-sas)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: mg/dL, **`Version`**: 3, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2018-12-12 15:58:14
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C0428475
  * **DCC Harmonization Comments**:

    This variable was harmonized by converting study variables to the
    appropriate unit of measure as needed.
    
    #### FHS
    
    DCC analysts could not confirm that data from the Original cohort
    available in dbGaP should be used for harmonization, and they are not
    included.
    
    #### Assays and measurement
    
    Lipids were measured in a number of different methods across studies:
    
    | study | method |
    |-------|--------|
    | Amish | serum |
    | ARIC | plasma |
    | CARDIA | plasma |
    | CFS | plasma |
    | CHS | plasma |
    | FHS | plasma |
    | GENOA | serum |
    | HCHS/SOL | serum |
    | JHS | serum |
    | MESA | plasma |
    | SAS | serum |
    
    
<a id="triglycerides_1-amish"></a>
  * ### lipids/triglycerides_1 -- **Amish**:
    * 2 component_study_variables: `phs000956.v2.pht005002.v1.phv00252976.v1`, `phs000956.v2.pht005002.v1.phv00253019.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset and rename variables.
        dataset <- phen_list$source_data$pht005002 %>%
          rename(age = age_baseline, triglycerides = trigs_baseline)
      
        # Substitute the winsorized age value of '90+' to a numeric value 90.
        dataset$age[dataset$age %in% '90+'] <- 90
      
        # Substitute the value of 'NA' to missing.
        dataset$age[dataset$age %in% 'NA'] <- NA
        dataset$triglycerides[dataset$triglycerides %in% 'NA'] <- NA
      
        # Remove records with NAs from dataset.
        dataset <- dataset[!is.na(dataset$age) & !is.na(dataset$triglycerides), ]
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        return(dataset)
      }
      ```
<a id="triglycerides_1-aric"></a>
  * ### lipids/triglycerides_1 -- **ARIC**:
    * 2 component_study_variables: `phs000280.v4.pht004063.v2.phv00204712.v1`, `phs000280.v4.pht004063.v2.phv00204738.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(magrittr)
        source_data <- phen_list$source_data
        source_data$pht004063 %<>% rename(age1 = V1AGE01, trig1 = TRGSIU01)
      
        # Convert trig from SI unit to mg/dL using given conversion on ARIC data form
      
        # https://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/document.cgi?
        # study_id=phs000280.v4.p1&phv=204738&phd=2881&pha=&pht=1440&phvf=&phdf=
        # &phaf=&phtf=&dssp=1&consent=&temp=1#sec139
      
        source_data$pht004063$trig1 <- as.numeric(source_data$pht004063$trig1) / 0.01129
      
        # Convert character values to numeric
        source_data$pht004063 %>% mutate_if(is.character, as.numeric) %>%
          rename(age = age1, triglycerides = trig1) %>%
          # Exclude incomplete records
          na.omit() %>%
          return()
      }
      ```
<a id="triglycerides_1-cardia"></a>
  * ### lipids/triglycerides_1 -- **CARDIA**:
    * 2 component_study_variables: `phs000285.v3.pht001559.v2.phv00112439.v2`, `phs000285.v3.pht001588.v2.phv00113701.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        source_data <- phen_list$source_data
        # Join lipids data with age data.
        dat <- full_join(source_data$pht001559, source_data$pht001588, "topmed_subject_id") %>%
          # Rename variables and convert to numeric.
          transmute(topmed_subject_id, age = as.numeric(A01AGE2),
                    triglycerides = as.numeric(AL1NTRIG)) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dat)
      }
      ```
<a id="triglycerides_1-cfs"></a>
  * ### lipids/triglycerides_1 -- **CFS**:
    * 3 component_study_variables: `phs000284.v1.pht001902.v1.phv00122012.v1`, `phs000284.v1.pht001902.v1.phv00122015.v1`, `phs000284.v1.pht001902.v1.phv00123974.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        phen_list$source_data$pht001902 %>%
          # Convert character vectors to numeric
          mutate_if(is.character, as.numeric) %>%
          # Subset to visit 5
          filter(visit == 5) %>%
          # Select only relevant variables
          select(topmed_subject_id, age, triglycerides = triglyceride) %>%
          na.omit() %>%
          return()
      }
      ```
<a id="triglycerides_1-chs"></a>
  * ### lipids/triglycerides_1 -- **CHS**:
    * 2 component_study_variables: `phs000287.v6.pht001452.v1.phv00100425.v1`, `phs000287.v6.pht001452.v1.phv00100487.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        phen_list$source_data$pht001452 %>%
          rename(age = AGEBL, triglycerides = TRIG44) %>%
          # Convert character values to numeric
          mutate_if(is.character, as.numeric) %>%
          # Exclude incomplete records
          na.omit() %>%
          return()
      }
      ```
<a id="triglycerides_1-fhs_gen3_newoffspringspouse_omni2"></a>
  * ### lipids/triglycerides_1 -- **FHS_Gen3_NewOffspringSpouse_Omni2**:
    * 2 component_study_variables: `phs000007.v29.pht006026.v1.phv00277020.v1`, `phs000007.v29.pht006026.v1.phv00277049.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        dataset <- phen_list$source_data$pht006026 %>%
          # Convert character vectors to numeric.
          mutate_if(is.character, as.numeric) %>%
          # Rename age and triglyceride variables.
          select(topmed_subject_id, age = AGE1, triglycerides = TRIG1) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dataset)
      }
      ```
<a id="triglycerides_1-fhs_offspring"></a>
  * ### lipids/triglycerides_1 -- **FHS_Offspring**:
    * 2 component_study_variables: `phs000007.v29.pht006027.v1.phv00277077.v1`, `phs000007.v29.pht006027.v1.phv00277203.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        dataset <- phen_list$source_data$pht006027 %>%
          # Convert character vectors to numeric.
          mutate_if(is.character, as.numeric) %>%
          # Rename age and triglycerides variables.
          select(topmed_subject_id, age = AGE1, triglycerides = TRIG1) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dataset)
      }
      ```
<a id="triglycerides_1-genoa"></a>
  * ### lipids/triglycerides_1 -- **GENOA**:
    * 4 component_study_variables: `phs001238.v1.pht006039.v1.phv00277507.v1`, `phs001238.v1.pht006041.v1.phv00277574.v1`, `phs001238.v1.pht006653.v1.phv00307788.v1`, `phs001238.v1.pht006655.v1.phv00307855.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset.
        source_data <- phen_list$source_data
        data_aa <- inner_join(source_data$pht006039,
                              source_data$pht006041,
                              by = "topmed_subject_id")
        data_ea <- inner_join(source_data$pht006653,
                              source_data$pht006655,
                              by = "topmed_subject_id")
        dataset <- union(data_aa, data_ea)
      
        # Rename variables.
        dataset <- rename(dataset, age = AGE, triglycerides = TRIG)
      
        # Substitute the value of 'NA' to missing.
        dataset$triglycerides[dataset$triglycerides %in% 'NA'] <- NA
        dataset$age[dataset$age %in% 'NA'] <- NA
      
        # Remove records with NAs from dataset.
        dataset <- dataset[!is.na(dataset$age) & !is.na(dataset$triglycerides), ]
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        return(dataset)
      }
      ```
<a id="triglycerides_1-hchs_sol"></a>
  * ### lipids/triglycerides_1 -- **HCHS_SOL**:
    * 2 component_study_variables: `phs000810.v1.pht004715.v1.phv00226251.v1`, `phs000810.v1.pht004715.v1.phv00253240.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        # Rename and convert variables to numeric.
        dat <- transmute(phen_list$source_data$pht004715, topmed_subject_id,
                         age = as.numeric(AGE), triglycerides = as.numeric(LABA67)) %>%
          # Exclude rows with missing data
          na.omit()
        return(dat)
      }
      ```
<a id="triglycerides_1-jhs"></a>
  * ### lipids/triglycerides_1 -- **JHS**:
    * 2 component_study_variables: `phs000286.v5.pht001945.v1.phv00125933.v1`, `phs000286.v5.pht001949.v1.phv00126009.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset and rename variables.
        source_data <- phen_list$source_data
        dataset <- inner_join(source_data$pht001949,
                              source_data$pht001945,
                              by = "topmed_subject_id") %>%
          rename(age = AGE01, triglycerides = TRR)
      
        # Substitute the value of 'NA' to missing.
        dataset$triglycerides[dataset$triglycerides %in% 'NA'] <- NA
      
        # Remove records with NAs from dataset.
        dataset <- dataset[!is.na(dataset$age) & !is.na(dataset$triglycerides), ]
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        return(dataset)
      }
      ```
<a id="triglycerides_1-mesa"></a>
  * ### lipids/triglycerides_1 -- **MESA**:
    * 6 component_study_variables: `phs000209.v13.pht001111.v4.phv00082639.v2`, `phs000209.v13.pht001111.v4.phv00082950.v1`, `phs000209.v13.pht001116.v10.phv00084442.v3`, `phs000209.v13.pht001116.v10.phv00084968.v2`, `phs000209.v13.pht001121.v3.phv00087071.v1`, `phs000209.v13.pht001121.v3.phv00087101.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get list of dataframes.
        source_data <- phen_list$source_data
        # Rename variables in the family exam to match variables in the other dataframes.
        source_data$pht001121 <- rename(source_data$pht001121, age1c = agefc, trig1 = trigf)
      
        # Bind datasets row-wise.
        dat <- bind_rows(source_data) %>%
          # Rename triglycerides and age variables, and convert to numeric.
          transmute(topmed_subject_id, age = as.numeric(age1c),
                    triglycerides = as.numeric(trig1)) %>%
          # Exclude incomplete records.
          na.omit()
      
          return(dat)
      }
      ```
<a id="triglycerides_1-sas"></a>
  * ### lipids/triglycerides_1 -- **SAS**:
    * 2 component_study_variables: `phs000914.v1.pht005253.v1.phv00258680.v1`, `phs000914.v1.pht005253.v1.phv00258736.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        dataset <- phen_list$source_data$pht005253 %>%
          rename_(age = "Dec_Age", triglycerides = "NetTG")
      
        # Recode the string "NA" as NA
        dataset[which(dataset$triglycerides == "NA"), ]$triglycerides <- NA
      
      
        dataset %>% mutate_if(is.character, as.numeric) %>%
          # Remove NAs from dataset
          na.omit() %>%
          return()
      }
      ```