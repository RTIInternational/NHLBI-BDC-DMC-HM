
# baseline_common_covariates

### Variables in this section:
* [bmi_baseline_1](#bmi_baseline_1)
* [current_smoker_baseline_1](#current_smoker_baseline_1)
* [ever_smoker_baseline_1](#ever_smoker_baseline_1)
* [height_baseline_1](#height_baseline_1)
* [weight_baseline_1](#weight_baseline_1)

<a id="bmi_baseline_1"></a>
## baseline_common_covariates: **bmi_baseline_1** (bmi_baseline)
  Body mass index calculated at baseline.
  * **Harmonization Units**:
    * [DCC_harmonized](#bmi_baseline_1-dcc_harmonized)
    * [GALAII](#bmi_baseline_1-galaii)
    * [GOLDN](#bmi_baseline_1-goldn)
    * [SAGE](#bmi_baseline_1-sage)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: kg/m^2, **`Version`**: 4, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2019-09-30 16:03:59
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2018AB, `ID:` C1305855
  * **DCC Harmonization Comments**:

    This variable was calculated from harmonized baseline height and weight for all available studies using the formula $BMI = weight / height^2$.
    
    #### HVH
    
    There are multiple observations for many subjects in the HVH phenotype data. In
    these instances, we used the earliest observation of each subject for harmonization. Although
    this harmonized phenotype is designated as "baseline", the concept of
    "baseline" does not apply to HVH based on its study design. Consult the study
    documentation for more details (phs001013).
    
    #### BAGS
    
    Using BAGS height and weight data to calculate BMI, we identified 6 implausibly high BMI values. The study investigated and confirmed that these 6 subjects had incorrect values for height and weight component study variables.  The incorrect BMI values for this study can be identified using `bmi_baseline_1` values > 100.  
    
    #### GOLDN
    
    We used a BMI variable calculated by the study as the component variable, not height and weight variables.
    
    #### SAGE
    
    We used a BMI variable calculated by the study as the component variable, not height and weight variables.
    
    #### Exam visit for BMI measurement or measurement of component variables
    
    | Study or subcohort | Visit |
    |---------|----------|
    | Amish | Baseline visit |
    | ARIC | Exam 1 |
    | BAGS | Baseline visit |
    | CARDIA |Year 0/Exam 1 |
    | CCAF | *Unspecified first visit* |
    | CFS | Baseline visit |
    | CHS_Original | Baseline visit |
    | CHS_AfricanAmerican | Baseline visit |
    | COPDGene | Baseline visit |
    | CRA | Baseline visit | 
    | DHS | Baseline visit |
    | FHS | Exam 1 |
    | GALAII | Baseline visit |
    | GeneSTAR_ProbandSiblingCohort | Sibling Study Visit |
    | GeneSTAR_OffspringCoparentCohort | Platelet Study Visit |
    | GENOA | Phase 1 |
    | GOLDN | Baseline visit |
    | HCHS_SOL | Visit 1 |
    | HVH | *No visit structure* |
    | JHS | Visit 1 |
    | Mayo_VTE_GENEVA | *Unspecified first visit*  |
    | Mayo_VTE_Olmsted | *Unspecified first visit* |
    | MESA_Classic | Exam 1 Main |
    | MESA_Family | Family Exam Main |
    | MESA_AirNR | AirNR Exam Main | 
    | MGH_AF | *Unspecified first visit* |
    | Partners | Baseline visit |
    | SAGE | Exam 1, initial interview |
    | SAS | Exam 1 |
    | VAFAR | *Unspecified first visit* |
    | VU_AF | *Unspecified first visit* |
    | WGHS | Exam 1 |
    | WHI | Screening, Year 0 |
    
    
<a id="bmi_baseline_1-dcc_harmonized"></a>
  * ### baseline_common_covariates/bmi_baseline_1 -- **DCC_harmonized**:
    * 2 component_harmonized_variables: `height_baseline_1`, `weight_baseline_1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        harmonized_data <- phen_list$harmonized_data
        # Join baseline height and weight datasets on topmed_subject_id
        harmonized_data <- inner_join(harmonized_data$height_baseline_1,
                                      harmonized_data$weight_baseline_1,
                                      "topmed_subject_id") %>%
                           select(-c(unit_height_baseline_1, unit_weight_baseline_1))
      
        # Convert character variables to numeric
        harmonized_data <- replace(harmonized_data, harmonized_data == 'NA', NA) %>%
                           mutate_if(is.character, as.numeric)
        # Filter to observations where age variables match
        harmonized_data <- harmonized_data %>%
                           filter(age_at_height_baseline_1 == age_at_weight_baseline_1) %>%
                           transmute(topmed_subject_id, age = age_at_height_baseline_1,
        # Calculate BMI from weight(in kg) and height (in cm)
        bmi_baseline = weight_baseline_1 / (height_baseline_1 / 100) ^ 2)
      
        # Exclude incomplete records
        harmonized_data <- harmonized_data %>%
        select(topmed_subject_id, bmi_baseline, age) %>%
        na.omit() %>%
        return()
      }
      ```
<a id="bmi_baseline_1-galaii"></a>
  * ### baseline_common_covariates/bmi_baseline_1 -- **GALAII**:
    * 2 component_study_variables: `phs001180.v1.pht006991.v1.phv00320630.v1`, `phs001180.v1.pht006991.v1.phv00320633.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        dataset <- phen_list$source_data$pht006991
        dataset <- replace(dataset, dataset == 'NA', NA)
        dataset <- dataset %>%
                   transmute(topmed_subject_id,
                             age = as.numeric(AGE),
                             bmi_baseline = as.numeric(BMI)) %>%
                   na.omit() %>%
                   return()
      }
      ```
<a id="bmi_baseline_1-goldn"></a>
  * ### baseline_common_covariates/bmi_baseline_1 -- **GOLDN**:
    * 2 component_study_variables: `phs000741.v2.pht003918.v2.phv00202104.v2`, `phs000741.v2.pht003918.v2.phv00259051.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          phen_list$source_data$pht003918 %>%
              # Convert BMI to numeric and rename
              transmute(topmed_subject_id, age, bmi_baseline = as.numeric(BMI)) %>%
              # Exclude incomplete records
              na.omit() %>%
              return()
      }
      ```
<a id="bmi_baseline_1-sage"></a>
  * ### baseline_common_covariates/bmi_baseline_1 -- **SAGE**:
    * 2 component_study_variables: `phs000921.v3.pht004883.v3.phv00252283.v3`, `phs000921.v3.pht004883.v3.phv00252286.v3`
    * Function:
      ```r
      harmonize <- function(phen_list){
        #Dataset
        dataset <- phen_list$source_data$pht004883 %>%
                   rename(age = AGE, bmi_baseline = BMI)
      
        #Convert to numeric variables
        dataset <- replace(dataset, dataset == 'NA', NA) %>%
                   mutate_if(is.character, as.numeric)
      
        #Remove missing values
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="current_smoker_baseline_1"></a>
## baseline_common_covariates: **current_smoker_baseline_1** (current_smoker_baseline)
  Indicates whether subject currently smokes cigarettes.
  * **Harmonization Units**:
    * [Amish](#current_smoker_baseline_1-amish)
    * [ARIC](#current_smoker_baseline_1-aric)
    * [BAGS](#current_smoker_baseline_1-bags)
    * [CARDIA](#current_smoker_baseline_1-cardia)
    * [CFS](#current_smoker_baseline_1-cfs)
    * [CHS](#current_smoker_baseline_1-chs)
    * [COPDGene](#current_smoker_baseline_1-copdgene)
    * [CRA](#current_smoker_baseline_1-cra)
    * [FHS_NOS_Gen3_Omni2](#current_smoker_baseline_1-fhs_nos_gen3_omni2)
    * [FHS_Offspring](#current_smoker_baseline_1-fhs_offspring)
    * [FHS_Omni1](#current_smoker_baseline_1-fhs_omni1)
    * [FHS_Original](#current_smoker_baseline_1-fhs_original)
    * [GALAII](#current_smoker_baseline_1-galaii)
    * [GeneSTAR](#current_smoker_baseline_1-genestar)
    * [GENOA](#current_smoker_baseline_1-genoa)
    * [HCHS_SOL](#current_smoker_baseline_1-hchs_sol)
    * [HVH](#current_smoker_baseline_1-hvh)
    * [JHS](#current_smoker_baseline_1-jhs)
    * [Mayo_VTE_GENEVA](#current_smoker_baseline_1-mayo_vte_geneva)
    * [Mayo_VTE_Olmsted](#current_smoker_baseline_1-mayo_vte_olmsted)
    * [MESA](#current_smoker_baseline_1-mesa)
    * [SAGE](#current_smoker_baseline_1-sage)
    * [SAS](#current_smoker_baseline_1-sas)
    * [WGHS](#current_smoker_baseline_1-wghs)
    * [WHI](#current_smoker_baseline_1-whi)
  * **Metadata**:
    **`Data Type`**: encoded, **`Measurement Units`**: None, **`Version`**: 4, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2019-09-30 14:21:24
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2018AB, `ID:` C0337667
  * **DCC Harmonization Comments**:

    We used component study variables from smoking history questionnaires to harmonize this phenotype when available, rather than using derived 'current smoker' study variables. When using component questionnaire data, we looked for inconsistencies between subject responses across multiple questions. If a subject's responses were inconsistent, our general approach was to prioritize any positive indication that a subject currently smokes regularly. That is, any positive indication of current regular smoking results in coding as "1" ("Currently smokes cigarettes"). E.g. if a subject responds that they do not currently smoke, but also responds that they currently smoke > 0 cigarettes per day, they will be coded as "1" ("Currently smokes cigarettes") for this harmonized variable. In some cases, subjects who indicated that they had never smoked were not subsequently asked if they currently smoked, resulting in missing data values for the current smoking component study variable. These subjects were coded as "0" ("Does not currently smoke cigarettes").
    
    
    The smoking history questionnaires used by different studies used different
    time cutpoints to classify their subjects as 'current smokers'. Refer to the component variables for each study for details.
    
    #### HVH
    
    There are multiple observations for many subjects in the HVH phenotype data. In
    these instances, we used the earliest observation of each subject for harmonization. Although
    this harmonized phenotype is designated as "baseline", the concept of
    "baseline" does not apply to HVH based on its study design. Consult the study
    documentation for more details (phs001013).
    
    #### Exam visit used for current smoker assignment
    
    | Study or subcohort | Visit |
    |---------|----------|
    | Amish | Baseline visit |
    | ARIC | Exam 1 |
    | BAGS | Baseline visit |
    | CARDIA | Year 0/Exam 1 |
    | CFS | Baseline visit |
    | CHS_Original | Baseline visit |
    | CHS_AfricanAmerican | Baseline visit |
    | FHS | Exam 1 |
    | GALAII | Baseline visit |
    | GeneSTAR_ProbandSiblingCohort | Sibling Study Visit |
    | GeneSTAR_OffspringCoparentCohort | Platelet Study Visit |
    | GENOA | Phase 1 |
    | HCHS_SOL | Visit 1 |
    | HVH | *No visit structure* |
    | JHS | Visit 1 |
    | Mayo_VTE_GENEVA | *Unspecified first visit* |
    | Mayo_VTE_Olmsted | *Unspecified first visit* |
    | MESA_Classic | Exam 1 Main |
    | MESA_Family | Family Exam Main |
    | MESA_AirNR | AirNR Exam Main | 
    | SAGE | Exam 1, initial interview |
    | SAS | Exam 1 |
    | WGHS | Exam 1 |
    | WHI | Screening, Year 0 |
    
    
<a id="current_smoker_baseline_1-amish"></a>
  * ### baseline_common_covariates/current_smoker_baseline_1 -- **Amish**:
    * 2 component_study_variables: `phs000956.v3.pht005002.v1.phv00252976.v1`, `phs000956.v3.pht005002.v1.phv00252990.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          phen_list$source_data$pht005002 %>%
              # Convert encoded winsorized values to numeric values
              mutate(age_baseline = ifelse(age_baseline == "90+", "90", age_baseline)) %>%
              # Convert character variables to numeric
              mutate_if(is.character, as.numeric) %>%
              # Rename variables
              rename(age = age_baseline) %>%
              # Exclude incomplete records
              na.omit() %>%
              return()
      }
      ```
<a id="current_smoker_baseline_1-aric"></a>
  * ### baseline_common_covariates/current_smoker_baseline_1 -- **ARIC**:
    * 4 component_study_variables: `phs000280.v5.pht004063.v2.phv00204712.v1`, `phs000280.v5.pht004111.v2.phv00207368.v1`, `phs000280.v5.pht004111.v2.phv00207370.v1`, `phs000280.v5.pht004111.v2.phv00207372.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          source_data <- phen_list$source_data
          source_data$pht004111 %>%
              # Code current_smoker_baseline as 0 if HOM28 is "N" and HOM30 is NA
              mutate(current_smoker_baseline = ifelse(HOM28 == "N" & is.na(HOM30), 0,
                      # Code current_smoker_baseline as 0 if HOM30 is "N"
                      ifelse(HOM30 == "N", 0,
                      # Code current_smoker_baseline as 1 if HOM30 is "Y", else code as NA
                      ifelse(HOM30 == "Y", 1, NA))),
                  # Code "A" and NA as zero in HOM32
                  HOM32 = as.numeric(ifelse(HOM32 == "A" | is.na(HOM32), 0, HOM32)),
              # Recode current_smoker_baseline as TRUE if respondent reports smoking a
              # a positive number of cigarettes
              current_smoker_baseline = as.numeric(as.logical(current_smoker_baseline + HOM32))) %>%
              select(topmed_subject_id, current_smoker_baseline) %>%
              # Join with age dataset
              left_join(source_data$pht004063, "topmed_subject_id") %>%
              # Exclude incomplete records
              na.omit() %>%
              # Rename age variable
              rename(age = V1AGE01) %>%
              return()
      }
      ```
<a id="current_smoker_baseline_1-bags"></a>
  * ### baseline_common_covariates/current_smoker_baseline_1 -- **BAGS**:
    * 4 component_study_variables: `phs001143.v2.pht005905.v2.phv00273211.v2`, `phs001143.v2.pht005905.v2.phv00375339.v1`, `phs001143.v2.pht005905.v2.phv00375341.v1`, `phs001143.v2.pht005905.v2.phv00375343.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Data
        dataset <- phen_list$source_data$pht005905
        #Converting to numeric values
        dataset <- dataset %>%
                   replace(dataset == 'NA', NA) %>%
                   mutate_if(is.character, as.numeric)
        #Subjects who report > 0 cigs/day assigned ever smoker
        dataset$EVER_SMOKED_CIGARETTES[dataset$DAILY_NR_CIGARETTES > 0] <- 1
      
        #Assigning current_smoker_baseline variable
        dataset$current_smoker_baseline <- dataset$CURRENT_SMOKING
        #Never smokers assigned not current smoker status
        dataset$current_smoker_baseline[dataset$EVER_SMOKED_CIGARETTES == 0] <- 0
      
        #Selecting varaibles and removing missing
        dataset <- dataset %>%
                   select(topmed_subject_id,
                          age = AGE,
                          current_smoker_baseline) %>%
                   na.omit()
      
        return(dataset)
      }
      ```
<a id="current_smoker_baseline_1-cardia"></a>
  * ### baseline_common_covariates/current_smoker_baseline_1 -- **CARDIA**:
    * 3 component_study_variables: `phs000285.v3.pht001559.v2.phv00112439.v2`, `phs000285.v3.pht001572.v2.phv00113168.v2`, `phs000285.v3.pht001573.v2.phv00113213.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        source_data <- phen_list$source_data
        # Join both smoking datasets.
        dat <- full_join(source_data$pht001572, source_data$pht001573, "topmed_subject_id") %>%
          # Recode "M" to NA.
          mutate_at(vars(A09SMKNW, A10CIGS), funs(na_if(., "M")))
        # "Never smokers" were not asked the current smoking question. Code them all as "not current
        # smokers."
        dat$A09SMKNW[dat$A10CIGS == 1 & is.na(dat$A09SMKNW)] <- 1
        # Recode "1" to "0".
        dat$A09SMKNW[dat$A09SMKNW == 1] <- "0"
        # Recode "2" to "1".
        dat$A09SMKNW[dat$A09SMKNW == 2] <- "1"
        # Join smoking data with age data.
        dat <- inner_join(dat, source_data$pht001559, "topmed_subject_id") %>%
          # Rename age and current smoker variables, and convert numeric.
          transmute(age = as.numeric(A01AGE2), current_smoker_baseline = as.numeric(A09SMKNW),
                    topmed_subject_id) %>%
          # Remove rows with missing data.
          na.omit()
        return(dat)
      }
      ```
<a id="current_smoker_baseline_1-cfs"></a>
  * ### baseline_common_covariates/current_smoker_baseline_1 -- **CFS**:
    * 4 component_study_variables: `phs000284.v2.pht001902.v1.phv00122012.v1`, `phs000284.v2.pht001902.v1.phv00122015.v1`, `phs000284.v2.pht001902.v1.phv00122343.v1`, `phs000284.v2.pht001902.v1.phv00122344.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          df <- phen_list$source_data$pht001902 %>%
              # Subset to baseline visit. Some respondents baseline is visit 5
              filter(visit %in% c("1", "5")) %>%
              group_by(topmed_subject_id) %>%
              arrange(topmed_subject_id, visit) %>%
              filter(row_number(topmed_subject_id) == 1) %>%
              ungroup() %>%
              # Convert variables to numeric
              mutate_if(is.character, as.numeric)
      
          # Recode -1 and NA as 0 in NOWSMOKE
          df$NOWSMOKE[df$NOWSMOKE == -1] <- 0
          df$NOWSMOKE[is.na(df$NOWSMOKE)] <- 0
          # Recode -1 as 0 in MONSMOKE
          df$MONSMOKE[df$MONSMOKE == -1] <- 0
      
          # Recode current_smoker_baseline to 1 if respondent reports smoking > 1  cigarette
          # per day
          df %>% transmute(topmed_subject_id, age,
                  current_smoker_baseline = as.numeric(as.logical(MONSMOKE + NOWSMOKE))) %>%
              # Exclude incomplete records
              na.omit() %>%
              return()
      }
      ```
<a id="current_smoker_baseline_1-chs"></a>
  * ### baseline_common_covariates/current_smoker_baseline_1 -- **CHS**:
    * 5 component_study_variables: `phs000287.v6.pht001450.v1.phv00098844.v1`, `phs000287.v6.pht001450.v1.phv00098845.v1`, `phs000287.v6.pht001452.v1.phv00100487.v1`, `phs000287.v6.pht001490.v1.phv00105143.v1`, `phs000287.v6.pht001490.v1.phv00105144.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          source_data <- phen_list$source_data
      
          source_data[c("pht001450", "pht001490")] %>%
              # pht001450 and pht001490 have empty rows for members of the original
              # and new cohorts, respectively. These are filtered out here
              lapply(filter, !(is.na(SMOKE101) & is.na(SMOKE201))) %>%
              # Bind first two datasets row-wise
              bind_rows() %>%
              # Join with age dataset by topmed_subject_id
              full_join(source_data$pht001452, "topmed_subject_id") %>%
              # Transform and rename variables
              # Code current_smoker_baseline as 0 if SMOKE101 is 0 and SMOKE201 is NA
              transmute(current_smoker_baseline = ifelse(SMOKE101 == "0" & is.na(SMOKE201), 0,
                      # Else, use value from SMOKE201
                      as.integer(SMOKE201)),
                  topmed_subject_id, age = AGEBL) %>%
              # Exclude incomplete records
              na.omit() %>%
              return()
      }
      ```
<a id="current_smoker_baseline_1-copdgene"></a>
  * ### baseline_common_covariates/current_smoker_baseline_1 -- **COPDGene**:
    * 9 component_study_variables: `phs000179.v5.pht002239.v4.phv00159636.v4`, `phs000179.v5.pht002239.v4.phv00159637.v4`, `phs000179.v5.pht002239.v4.phv00159640.v4`, `phs000179.v5.pht002239.v4.phv00159749.v4`, `phs000179.v5.pht002239.v4.phv00159750.v4`, `phs000179.v5.pht002239.v4.phv00159754.v4`, `phs000179.v5.pht002239.v4.phv00159755.v4`, `phs000179.v5.pht002239.v4.phv00159756.v4`, `phs000179.v5.pht002239.v4.phv00159836.v4`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        df <- phen_list$source_data$pht002239 %>%
          # Convert character variables to numeric
          mutate_if(is.character, as.numeric) %>%
          # Rename variables
          rename_(current_smoker_baseline = "SmokCigNow", age = "Age_Enroll")
      
        modifier <- select(df, -topmed_subject_id, -age, -current_smoker_baseline) %>%
        # Sum other variables that indicate smoking status, counting NA as 0
          rowSums(na.rm = TRUE)
      
        # Add modifier to current_smoker_baseline and convert to 0/1
        transmute(
            df,
            current_smoker_baseline = as.numeric(as.logical(current_smoker_baseline + modifier)),
            topmed_subject_id,
            age
          ) %>%
          # Exclude incomplete records
          na.omit() %>%
          return()
      }
      ```
<a id="current_smoker_baseline_1-cra"></a>
  * ### baseline_common_covariates/current_smoker_baseline_1 -- **CRA**:
    * 3 component_study_variables: `phs000988.v2.pht005248.v2.phv00258650.v2`, `phs000988.v2.pht005248.v2.phv00267375.v2`, `phs000988.v2.pht005248.v2.phv00267378.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          phen_list$source_data$pht005248 %>%
              # Convert variables to numeric
              mutate_if(is.character, as.numeric) %>%
              # Recode 1 to 0
              mutate(Current_Smoker = ifelse(Current_Smoker == 1, 0, Current_Smoker),
                     # Code NA as 0
                     cigsperday = ifelse(is.na(cigsperday), 0, cigsperday)) %>%
              transmute(topmed_subject_id, age,
                        # Recode current_smoker_baseline from 0 to 1 if respondent smokes > 0 cigarettes
                        # per day
                        current_smoker_baseline = as.numeric(as.logical(Current_Smoker + cigsperday))) %>%
              # exclude incomplete records
              na.omit() %>%
              return()
      }
      ```
<a id="current_smoker_baseline_1-fhs_nos_gen3_omni2"></a>
  * ### baseline_common_covariates/current_smoker_baseline_1 -- **FHS_NOS_Gen3_Omni2**:
    * 7 component_study_variables: `phs000007.v30.pht000074.v11.phv00020926.v5`, `phs000007.v30.pht000074.v11.phv00020927.v5`, `phs000007.v30.pht003099.v5.phv00177930.v5`, `phs000007.v30.pht006005.v1.phv00273760.v1`, `phs000007.v30.pht006005.v1.phv00273761.v1`, `phs000007.v30.pht006006.v2.phv00274253.v2`, `phs000007.v30.pht006006.v2.phv00274254.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          source_data <- phen_list$source_data
          smk <- source_data[c("pht000074", "pht006005", "pht006006")] %>%
              # Select variables in standard order
              lapply(select, topmed_subject_id, matches("g3a071"), matches("g3a072")) %>%
              # Standardize names
              lapply(setNames, c("topmed_subject_id", "smoke_past_year", "smoke_now")) %>%
              # Bind rowwise
              do.call(what = rbind) %>%
              # Convert character variables to numeric
              mutate_if(is.character, as.numeric) %>%
              # Subset to records with an observation for at least one phenotype
              filter(!(is.na(smoke_past_year) & is.na(smoke_now)))
      
          # Create current_smoker_baseline variable
          current_smoker_baseline <- smk %>%
              # Select smoking phenotypes
              select(smoke_past_year, smoke_now) %>%
              # Sum row-wise, treating NA as 0
              rowSums(na.rm = TRUE) %>%
              # Convert to TRUE/FALSE
              as.logical()
      
              # Add current_smoker_baseline variable to dataframe, and drop old columns
              smk %>% transmute(topmed_subject_id,
                                current_smoker_baseline = as.integer(current_smoker_baseline)) %>%
              # Join with age variable
              left_join(source_data$pht003099, "topmed_subject_id") %>%
              rename(age = age1) %>%
              # Exclude incomplete records
              na.omit() %>%
              return()
      }
      ```
<a id="current_smoker_baseline_1-fhs_offspring"></a>
  * ### baseline_common_covariates/current_smoker_baseline_1 -- **FHS_Offspring**:
    * 2 component_study_variables: `phs000007.v30.pht000030.v8.phv00007612.v6`, `phs000007.v30.pht003099.v5.phv00177930.v5`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          source_data <- phen_list$source_data
          source_data$pht000030 %>%
              # Transform smoking variable and drop old version
              transmute(topmed_subject_id,
                  # Code current_smoker_baseline as 0 if A99 is 0 or 2
                  current_smoker_baseline = ifelse(A99 %in% c("0", "2"), 0,
                      # Code current_smoker_baseline as 1 if A99 is 1, else code as NA
                      ifelse(A99 == "1", 1, NA))) %>%
                  # Join with age dataset on topmed_subject_id
              left_join(source_data$pht003099, "topmed_subject_id") %>%
              rename(age = age1) %>%
              # Exclude incomplete records
              na.omit() %>%
              return()
      }
      ```
<a id="current_smoker_baseline_1-fhs_omni1"></a>
  * ### baseline_common_covariates/current_smoker_baseline_1 -- **FHS_Omni1**:
    * 2 component_study_variables: `phs000007.v30.pht003099.v5.phv00177930.v5`, `phs000007.v30.pht004813.v1.phv00250452.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          source_data <- phen_list$source_data
          # Join datasets on topmed_subject_id
          source_data$pht004813 %>% left_join(source_data$pht003099) %>%
              # Rename and convert to numeric
              transmute(topmed_subject_id, age = as.numeric(age1),
                  current_smoker_baseline = as.numeric(e319)) %>%
              # Exclude incomplete results
              na.omit() %>%
              return()
      }
      ```
<a id="current_smoker_baseline_1-fhs_original"></a>
  * ### baseline_common_covariates/current_smoker_baseline_1 -- **FHS_Original**:
    * 2 component_study_variables: `phs000007.v30.pht000009.v2.phv00000543.v1`, `phs000007.v30.pht003099.v5.phv00177930.v5`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          source_data <- phen_list$source_data
          source_data$pht000009 %>%
              # Join datasets on topmed_subject_id
              left_join(source_data$pht003099, "topmed_subject_id") %>%
              # Convert character variables to numeric
              mutate_if(is.character, as.numeric) %>%
              # Transform and rename variables
              transmute(topmed_subject_id, age = age1,
                  # Code current_smoker_baseline as 1 if MF71 is 1 or 3
                  current_smoker_baseline = ifelse(MF71 %in% c(1, 3), 1,
                      # Code current_smoker_baseline as 0 if MF71 is 2, 5, or 7, else code it as NA
                      ifelse(MF71 %in% c(2, 5, 7), 0, NA))) %>%
              # Exclude incomplete records
              na.omit() %>%
              return()
      }
      ```
<a id="current_smoker_baseline_1-galaii"></a>
  * ### baseline_common_covariates/current_smoker_baseline_1 -- **GALAII**:
    * 2 component_study_variables: `phs001180.v1.pht006991.v1.phv00320630.v1`, `phs001180.v1.pht006991.v1.phv00320635.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        dataset <- phen_list$source_data$pht006991
        #Assign values
        dataset$current_smoker_baseline <- ifelse(dataset$smoke_current == 'Yes',
                                                  1, 0)
        dataset <- transmute(dataset,
                   topmed_subject_id,
                   age = as.numeric(AGE),
                   current_smoker_baseline)
        return(dataset)
      }
      ```
<a id="current_smoker_baseline_1-genestar"></a>
  * ### baseline_common_covariates/current_smoker_baseline_1 -- **GeneSTAR**:
    * 4 component_study_variables: `phs001218.v1.pht007766.v1.phv00369267.v1`, `phs001218.v1.pht007766.v1.phv00369268.v1`, `phs001218.v1.pht007766.v1.phv00369293.v1`, `phs001218.v1.pht007766.v1.phv00369294.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Datasets
        int <- phen_list$source_data$pht007766
        #Order of levels
        int$VISIT <- int$VISIT %>%
                     as.factor() %>%
                     relevel('SSV')
        #Subset to baseline visits, SSV and PSV
        dataset <- int %>%
                   filter(VISIT %in% c('SSV', 'PSV')) %>%
                   mutate(VISIT = as.factor(VISIT)) %>%
                   group_by(topmed_subject_id) %>%
                   arrange(topmed_subject_id, VISIT) %>%
                   filter(row_number(topmed_subject_id) == 1) %>%
                   ungroup() %>%
                   data.frame()
        #Converting to numeric variable
        dataset <- dataset %>%
                   replace(dataset == 'NA', NA) %>%
                   mutate(age = as.numeric(AGE))
      
        #Assigning values
        dataset$current_smoker_baseline <- ifelse(dataset$SMOKENOW == '1', 1,
                                                  ifelse(dataset$SMOKENOW == '2', 0,
                                                         ifelse(dataset$SMOKENOW == '3', 1, NA)))
      
        dataset$current_smoker_baseline[dataset$CIGSDAY > '0'] <- 1
      
        #Select variables and remove missing
        dataset <- dataset %>%
                   select(topmed_subject_id, current_smoker_baseline, age) %>%
                   na.omit()
      
        return(dataset)
      }
      ```
<a id="current_smoker_baseline_1-genoa"></a>
  * ### baseline_common_covariates/current_smoker_baseline_1 -- **GENOA**:
    * 6 component_study_variables: `phs001238.v2.pht006039.v1.phv00277507.v1`, `phs001238.v2.pht006043.v1.phv00277618.v1`, `phs001238.v2.pht006043.v1.phv00277621.v1`, `phs001238.v2.pht006653.v1.phv00307788.v1`, `phs001238.v2.pht006657.v1.phv00307899.v1`, `phs001238.v2.pht006657.v1.phv00307902.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        source_data <- phen_list$source_data
        # Row-bind African-American and European-American cohort datasets with age variable.
        age <- bind_rows(source_data[c("pht006039", "pht006653")]) %>%
          # Rename age variable and convert to numeric.
          transmute(topmed_subject_id, age = as.numeric(AGE))
        # Row-bind AA and EA cohort datasets with smoking history.
        smoke <- bind_rows(source_data[c("pht006043", "pht006657")]) %>%
          # Rename smoking status variable.
          rename(current_smoker_baseline = CIGARETT)
        # Recode "Yes" to 1.
        smoke$current_smoker_baseline[smoke$current_smoker_baseline == "Yes"] <- "1"
        # Recode "No" to 0.
        smoke$current_smoker_baseline[smoke$current_smoker_baseline == "No"] <- "0"
        ind <- is.na(smoke$current_smoker_baseline) & smoke$SMOKE100 == "No"
        smoke$current_smoker_baseline[ind] <- "0"
        # There is an observation with an undefined level "Other". Set it to NA.
        smoke$current_smoker_baseline[smoke$current_smoker_baseline == "Other"] <- NA
        # Join the age and smoking datasets.
        harmonized <- inner_join(age, smoke, "topmed_subject_id") %>%
          # Select only ID, age and convert current_smoker to numeric.
          transmute(topmed_subject_id, age,
                    current_smoker_baseline = as.numeric(current_smoker_baseline)) %>%
          # Exclude rows with missing data.
          na.omit()
        return(harmonized)
      }
      ```
<a id="current_smoker_baseline_1-hchs_sol"></a>
  * ### baseline_common_covariates/current_smoker_baseline_1 -- **HCHS_SOL**:
    * 5 component_study_variables: `phs000810.v1.pht004715.v1.phv00226251.v1`, `phs000810.v1.pht004715.v1.phv00258106.v1`, `phs000810.v1.pht004715.v1.phv00258107.v1`, `phs000810.v1.pht004715.v1.phv00258108.v1`, `phs000810.v1.pht004715.v1.phv00258110.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(magrittr)
        dat <- phen_list$source_data$pht004715 %>%
          # Create empty 'current smoker' variable.
          mutate(current_smoker_baseline = NA)
        # Code 'daily' and 'most days' smokers as '1'.
        dat$current_smoker_baseline[dat$TBEA3 %in% c("1", "2")] <- "1"
        # Code 'not at all' smokers as '0'.
        dat$current_smoker_baseline[dat$TBEA3 %in% "3"] <- "0"
        # Code 'never smokers' as '0'.
        dat$current_smoker_baseline[is_in(dat$TBEA1, "0") & is.na(dat$TBEA3)] <- "0"
        # Create index of participants who report smoking a positive number of
        # cigarettes per day.
        ind <- dat$TBEA4 > 0 | dat$TBEA5A > 0
        # Code those individuals as "1".
        dat$ever_smoker_baseline[ind] <- "1"
        # Rename age and convert age and smoking to numeric.
        dat <- transmute(dat, topmed_subject_id, age = as.numeric(AGE),
                         current_smoker_baseline = as.numeric(current_smoker_baseline)) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dat)
      }
      ```
<a id="current_smoker_baseline_1-hvh"></a>
  * ### baseline_common_covariates/current_smoker_baseline_1 -- **HVH**:
    * 4 component_study_variables: `phs001013.v3.pht005311.v2.phv00259376.v2`, `phs001013.v3.pht005311.v2.phv00259377.v2`, `phs001013.v3.pht005311.v2.phv00259378.v2`, `phs001013.v3.pht005311.v2.phv00259394.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        dat <- phen_list$source_data$pht005311 %>%
          # Convert character variables to numeric.
          mutate_if(is.character, as.numeric) %>%
          group_by(topmed_subject_id) %>%
          # Select only earliest observations for each participant.
          filter(indexy == min(indexy))
        # Create index of duplicated subject IDs.
        dup_index <- duplicated(select(dat, topmed_subject_id))
        # Create vector of duplicated subject IDs.
        dups <- select(dat, topmed_subject_id)[dup_index, ]
        # Filter out duplicated subject IDs.
        dat <- filter(dat, !(topmed_subject_id %in% unlist(dups))) %>%
          # Drop unnecessary variables.
          select(-ccs, -indexy) %>%
          # Exclude incomplete records.
          na.omit() %>%
          # Code current_smoker_baseline as 1 if smoke is 2, else code as 0.
          mutate(current_smoker_baseline = ifelse(smoke == 2, 1, 0)) %>%
          # Drop old smoking variable.
          select(-smoke)
        return(dat)
      }
      ```
<a id="current_smoker_baseline_1-jhs"></a>
  * ### baseline_common_covariates/current_smoker_baseline_1 -- **JHS**:
    * 3 component_study_variables: `phs000286.v5.pht001949.v1.phv00126009.v1`, `phs000286.v5.pht001977.v1.phv00128496.v1`, `phs000286.v5.pht001977.v1.phv00128498.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          # Join all datasets
          phen_list$source_data %>% plyr::join_all("topmed_subject_id", "left") %>%
          transmute(topmed_subject_id, age = AGE01,
              # Code current_smoker_baseline as 0 if TOBA1 is N and TOBA3 is NA
              current_smoker_baseline = ifelse(TOBA1 == "N" & is.na(TOBA3), 0,
                  # Code current smoker as 0 if TOBA3 is N
                  ifelse(TOBA3 == "N", 0,
                  # Code current smoker as 1 if TOBA3 is Y, else code as NA
                  ifelse(TOBA3 == "Y", 1, NA)))) %>%
          # Exclude incomplete records
          na.omit %>%
          return()
      }
      ```
<a id="current_smoker_baseline_1-mayo_vte_geneva"></a>
  * ### baseline_common_covariates/current_smoker_baseline_1 -- **Mayo_VTE_GENEVA**:
    * 2 component_study_variables: `phs000289.v2.pht001886.v2.phv00121846.v1`, `phs000289.v2.pht001886.v2.phv00121874.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        dat <- phen_list$source_data$pht001886
        # Initialize empty harmonized variable.
        dat$current_smoker_baseline <- NA
        # Get index of current smokers.
        ind_cs <- dat$smoking %in% "1"
        # Specify current smokers.
        dat$current_smoker_baseline[ind_cs] <- 1
        # Get index of former and never smokers.
        ind_no_cs <- dat$smoking %in% c("0", "2")
        # Specify not-current-smokers.
        dat$current_smoker_baseline[ind_no_cs] <- 0
        # Convert age to numeric and drop old variables.
        dat <- transmute(dat, topmed_subject_id, age = as.numeric(enrollage),
                         current_smoker_baseline) %>%
          # Remove rows with missing data.
          na.omit()
        return(dat)
      }
      ```
<a id="current_smoker_baseline_1-mayo_vte_olmsted"></a>
  * ### baseline_common_covariates/current_smoker_baseline_1 -- **Mayo_VTE_Olmsted**:
    * 2 component_study_variables: `phs001402.v1.pht008239.v1.phv00389902.v1`, `phs001402.v1.pht008239.v1.phv00389930.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        dataset <- phen_list$source_data$pht008239
      
        #Assigning age '>89' to 90
        dataset$enrollage[dataset$enrollage == '>89'] <- 90
      
        dataset$current_smoker_baseline <- ifelse(dataset$smoking == '0' | dataset$smoking == '2', 0,
                                           ifelse(dataset$smoking == '1', 1, NA))
      
        #Variable type, names and removing missing
        dataset <- dataset %>%
                   select(topmed_subject_id, age = enrollage, current_smoker_baseline) %>%
                   mutate_if(is.character, as.numeric) %>%
                   na.omit()
      
        return(dataset)
      }
      ```
<a id="current_smoker_baseline_1-mesa"></a>
  * ### baseline_common_covariates/current_smoker_baseline_1 -- **MESA**:
    * 9 component_study_variables: `phs000209.v13.pht001111.v4.phv00082639.v2`, `phs000209.v13.pht001111.v4.phv00083243.v1`, `phs000209.v13.pht001111.v4.phv00083245.v1`, `phs000209.v13.pht001116.v10.phv00084442.v3`, `phs000209.v13.pht001116.v10.phv00085570.v2`, `phs000209.v13.pht001116.v10.phv00085572.v2`, `phs000209.v13.pht001121.v3.phv00087071.v1`, `phs000209.v13.pht001121.v3.phv00087252.v1`, `phs000209.v13.pht001121.v3.phv00087254.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          smk <- phen_list$source_data %>%
              # Set column order across datasets
              lapply(select, topmed_subject_id, starts_with("age"),
                  starts_with("evsmk"), starts_with("cursmk")) %>%
              # Set standard names across datasets
              lapply(setNames, c("topmed_subject_id", "age", "evsmk", "cursmk")) %>%
              # Bind datasets rowwise
              do.call(what = rbind) %>%
              # Convert character variables to numeric
              mutate_if(is.character, as.numeric) %>%
              # Subset to records with a value for at least one of the following variables
              filter(!(is.na(evsmk) & is.na(cursmk)))
      
          smk %>% transmute(topmed_subject_id, age,
                  # Code current smoker as 0 if evsmk is 0 and cursmk is NA, else use value for cursmk
                  current_smoker_baseline = ifelse(!evsmk & is.na(cursmk), 0, cursmk)) %>%
              # Exclude incomplete records
              na.omit() %>%
              return()
      }
      ```
<a id="current_smoker_baseline_1-sage"></a>
  * ### baseline_common_covariates/current_smoker_baseline_1 -- **SAGE**:
    * 2 component_study_variables: `phs000921.v3.pht004883.v3.phv00252283.v3`, `phs000921.v3.pht004883.v3.phv00347787.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
      
        #Dataset
        dataset <- phen_list$source_data$pht004883
      
        #Variable types
        dataset <- replace(dataset, dataset == 'NA', NA) %>%
                   mutate(age = as.numeric(AGE))
      
        #Relevel current_smoker_baseline
        dataset$current_smoker_baseline <- ifelse(dataset$SMOKE_CURRENT == 'No', 0,
          ifelse(dataset$SMOKE_CURRENT == 'NO', 0,
          ifelse(dataset$SMOKE_CURRENT == 'YES', 1, NA)))
      
        #Select variables, remove missing
        dataset <- select(dataset, topmed_subject_id, age, current_smoker_baseline) %>%
                   na.omit()
      }
      ```
<a id="current_smoker_baseline_1-sas"></a>
  * ### baseline_common_covariates/current_smoker_baseline_1 -- **SAS**:
    * 2 component_study_variables: `phs000914.v1.pht005253.v1.phv00258680.v1`, `phs000914.v1.pht005253.v1.phv00258705.v1`
    * Function:
      ```r
      harmonize <- function(phen_list) {
          source_data <- phen_list$source_data
          dataset <- source_data[["pht005253"]]
          # Make age column into a numeric value.
          dataset$age <- as.numeric(dataset[["Dec_Age"]])
          # Make an empty column to hold current_smoker_baseline.
          dataset$current_smoker_baseline <- NA
          # Set current_smoker_baseline to 1 if Current_smoke was 1.
          dataset$current_smoker_baseline[dataset[["Current_smoke"]] == "1"] <- 1
          # Set current_smoker_baseline to 0 if Current_smoke was 0.
          dataset$current_smoker_baseline[dataset[["Current_smoke"]] == "0"] <- 0
          # Note that other values were left as NA in the final current_smoker_baseline variable.
          dataset <- dataset[c("topmed_subject_id", "current_smoker_baseline", "age")]
          # Remove rows with missing values.
          dataset <- na.omit(dataset)
          return(dataset)
      }
      ```
<a id="current_smoker_baseline_1-wghs"></a>
  * ### baseline_common_covariates/current_smoker_baseline_1 -- **WGHS**:
    * 2 component_study_variables: `phs001040.v3.pht005682.v3.phv00265848.v3`, `phs001040.v3.pht005682.v3.phv00375260.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Dataset
        dataset <- phen_list$source_data$pht005682
        dataset <- dataset %>%
                   replace(dataset == 'NA', NA) %>%
                   mutate(SMK3CAT = as.numeric(SMK3CAT),
                          age = as.integer(age))
      
        #Category assignment for current smokers
        dataset$current_smoker_baseline <- ifelse(dataset$SMK3CAT == 1, 1, 0)
      
        #Final variables and remove missing
        dataset <- dataset %>%
                   select(topmed_subject_id, current_smoker_baseline, age) %>%
                   na.omit() %>%
                   return()
      }
      ```
<a id="current_smoker_baseline_1-whi"></a>
  * ### baseline_common_covariates/current_smoker_baseline_1 -- **WHI**:
    * 5 component_study_variables: `phs000200.v11.pht000998.v6.phv00078436.v6`, `phs000200.v11.pht000998.v6.phv00078437.v6`, `phs000200.v11.pht001003.v6.phv00078773.v6`, `phs000200.v11.pht001003.v6.phv00078774.v6`, `phs000200.v11.pht001003.v6.phv00078776.v6`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          # Join all datasets by topmed_subject_id
          dataset <- plyr::join_all(phen_list$source_data, "topmed_subject_id") %>%
              # Convert character variables to numeric
              mutate_if(is.character, as.numeric)
          # Values in F2DAYS above zero are likely errors. They are set to zero here
          ind <- dataset$F2DAYS > 0
          dataset$F2DAYS[ind] <- 0
          # Code current smoker as 0 if SMOKEVR is 0
          transmute(dataset, current_smoker_baseline = ifelse(SMOKEVR == 0, 0,
                      # Code current smoker as 1 if SMOKNOW is 1, else use value for SMOKENOW
                      ifelse(SMOKNOW == 1, 1, SMOKNOW)),
                  # To calculate age at measurement, add baseline age, days since
                  # enrollment, and age since randomization
                  age = AGE + (abs(F2DAYS) + F34DAYS) / 365.25,
                  topmed_subject_id)  %>%
              # Exclude incomplete records
              na.omit() %>%
              return()
      }
      ```
<a id="ever_smoker_baseline_1"></a>
## baseline_common_covariates: **ever_smoker_baseline_1** (ever_smoker_baseline)
  Indicates whether subject ever regularly smoked cigarettes.
  * **Harmonization Units**:
    * [ARIC](#ever_smoker_baseline_1-aric)
    * [BAGS](#ever_smoker_baseline_1-bags)
    * [CARDIA](#ever_smoker_baseline_1-cardia)
    * [CFS](#ever_smoker_baseline_1-cfs)
    * [CHS](#ever_smoker_baseline_1-chs)
    * [COPDGene](#ever_smoker_baseline_1-copdgene)
    * [CRA](#ever_smoker_baseline_1-cra)
    * [FHS_NOS_Gen3_Omni2](#ever_smoker_baseline_1-fhs_nos_gen3_omni2)
    * [FHS_Offspring](#ever_smoker_baseline_1-fhs_offspring)
    * [FHS_Omni1](#ever_smoker_baseline_1-fhs_omni1)
    * [FHS_Original](#ever_smoker_baseline_1-fhs_original)
    * [GeneSTAR](#ever_smoker_baseline_1-genestar)
    * [GENOA](#ever_smoker_baseline_1-genoa)
    * [HCHS_SOL](#ever_smoker_baseline_1-hchs_sol)
    * [HVH](#ever_smoker_baseline_1-hvh)
    * [JHS](#ever_smoker_baseline_1-jhs)
    * [Mayo_VTE_GENEVA](#ever_smoker_baseline_1-mayo_vte_geneva)
    * [Mayo_VTE_Olmsted](#ever_smoker_baseline_1-mayo_vte_olmsted)
    * [MESA](#ever_smoker_baseline_1-mesa)
    * [SAS](#ever_smoker_baseline_1-sas)
    * [WGHS](#ever_smoker_baseline_1-wghs)
    * [WHI](#ever_smoker_baseline_1-whi)
  * **Metadata**:
    **`Data Type`**: encoded, **`Measurement Units`**: None, **`Version`**: 4, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2019-09-30 14:34:02
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2018AB, `ID:` C1519384
  * **DCC Harmonization Comments**:

    
    We used component study variables from smoking history questionnaires to harmonize this phenotype when available, rather than using derived 'ever smoker' study variables. When using component questionnaire data, we looked for inconsistencies between subject responses across multiple questions. If a subject's responses were inconsistent, our general approach was to prioritize any positive indication that a subject smoked regularly. That is, any positive indication of regular smoking results in coding as "1" ("Current or former cigarette smoker"). E.g. if a subject responds that they have never smoked, but also responds that they smoked > 0 cigarettes per day, they will be coded as "1" ("Current or former cigarette smoker") for this harmonized variable.
    
    #### FHS
    
    The FHS Omni 1 subcohort did not have 'ever smoker' variables from Exam 1 but did at Exam 2. All current smokers at Exam 1 were coded as "1" ("Current or former cigarette smoker") and subjects that indicated they had never smoked at Exam 2 were coded as "0" ("Never a cigarette smoker"). All other subjects were set to missing. 
    
    Using the variables indicating number of years smoked at Exam 2 (phv00251241), age at Exam 1 (phv00177930), and age at Exam 2 (phv00177932) 69 additional 'ever smokers' at Exam 1 can be extrapolated.
    
    #### HVH
    
    There are multiple observations for many subjects in the HVH phenotype file. In
    these instances, we used the earliest observation for harmonization. Although
    this harmonized phenotype is designated as "baseline", the concept of
    "baseline" does not apply to HVH based on its study design. Consult the study
    documentation for more details (phs001013).
    
    #### Exam visit used for ever smoker assignment
    
    | Study or subcohort | Visit |
    |---------|----------|
    | ARIC | Exam 1 |
    | BAGS | Baseline visit |
    | CARDIA | Year 0/Exam 1 |
    | CFS | Baseline visit |
    | CHS_Original | Baseline visit |
    | CHS_AfricanAmerican | Baseline visit |
    | COPDGene | Baseline visit |
    | CRA | Baseline visit | 
    | FHS_Original | Exam 1 |
    | FHS_Offspring | Exam 1 |
    | FHS_NewOffspringSpouse | Exam 1 |
    | FHS_Gen3 | Exam 1 |
    | FHS_Omni1 | Exam 1 and Exam 2 |
    | FHS_Omni2 | Exam 1 |
    | FHS_Original | Exam 1 |
    | GeneSTAR_ProbandSiblingCohort | Sibling Study Visit |
    | GeneSTAR_OffspringCoparentCohort | Platelet Study Visit |
    | GENOA | Phase 1 |
    | HCHS_SOL | Visit 1 |
    | HVH | *No visit structure* |
    | JHS | Visit 1 |
    | Mayo_VTE_GENEVA | *Unspecified first visit* |
    | Mayo_VTE_Olmsted | *Unspecified first visit* |
    | MESA_Classic | Exam 1 Main |
    | MESA_Family | Family Exam Main |
    | MESA_AirNR | AirNR Exam Main | 
    | SAS | Exam 1 |
    | WGHS | Exam 1 |
    | WHI | Screening, Year 0 |
    
<a id="ever_smoker_baseline_1-aric"></a>
  * ### baseline_common_covariates/ever_smoker_baseline_1 -- **ARIC**:
    * 6 component_study_variables: `phs000280.v5.pht004063.v2.phv00204712.v1`, `phs000280.v5.pht004111.v2.phv00207368.v1`, `phs000280.v5.pht004111.v2.phv00207369.v1`, `phs000280.v5.pht004111.v2.phv00207370.v1`, `phs000280.v5.pht004111.v2.phv00207375.v1`, `phs000280.v5.pht004111.v2.phv00207376.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          source_data <- phen_list$source_data
          source_data$pht004111 %>%
          # Code "A" and NA as 0 in HOM29 and HOM35
              mutate(HOM29 = as.numeric(ifelse(is.na(HOM29) | HOM29 == "A", 0, HOM29)),
              HOM35 = as.numeric(ifelse(is.na(HOM35) | HOM35 == "A", 0, HOM35)),
              # Convert HOM36 to TRUE/FALSE
              HOM36 = !is.na(HOM36),
                  # Code ever_smoker_baseline as 0 if HOM28 is N
              ever_smoker_baseline = ifelse(HOM28 == "N", 0,
                      # Code ever_smoker_baseline as 1 if HOM28 or HOM30 are Y, else code as NA
                      ifelse(HOM28 == "Y" | HOM30 == "Y", 1, NA)),
                      ever_smoker_baseline = as.numeric(as.logical(
                          ever_smoker_baseline + HOM29 + HOM35 + HOM36
                      ))) %>%
              select(topmed_subject_id, ever_smoker_baseline) %>%
              # Join with age dataset on topmed_subject_id
              left_join(source_data$pht004063, "topmed_subject_id") %>%
              # Exclude incomplete records
              na.omit() %>%
              rename(age = V1AGE01) %>%
              return()
      }
      ```
<a id="ever_smoker_baseline_1-bags"></a>
  * ### baseline_common_covariates/ever_smoker_baseline_1 -- **BAGS**:
    * 3 component_study_variables: `phs001143.v2.pht005905.v2.phv00273211.v2`, `phs001143.v2.pht005905.v2.phv00375339.v1`, `phs001143.v2.pht005905.v2.phv00375343.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Data
        dataset <- phen_list$source_data$pht005905
        #Converting to numeric values
        dataset <- dataset %>%
                   replace(dataset == 'NA', NA) %>%
                   mutate_if(is.character, as.numeric)
        #Subjects who report > 0 cigs/day assigned ever smoker
        dataset$EVER_SMOKED_CIGARETTES[dataset$DAILY_NR_CIGARETTES > 0] <- 1
        #Selecting varaibles and removing missing
        dataset <- dataset %>%
                   select(topmed_subject_id,
                          age = AGE,
                          ever_smoker_baseline = EVER_SMOKED_CIGARETTES) %>%
                   na.omit()
      
        return(dataset)
      }
      ```
<a id="ever_smoker_baseline_1-cardia"></a>
  * ### baseline_common_covariates/ever_smoker_baseline_1 -- **CARDIA**:
    * 2 component_study_variables: `phs000285.v3.pht001559.v2.phv00112439.v2`, `phs000285.v3.pht001573.v2.phv00113213.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        source_data <- phen_list$source_data
        # Create dataframe for harmonized phenotype.
        dat <- source_data$pht001573
        # Create empty vector for harmonized variable.
        dat$ever_smoker_baseline <- NA
        # Recode "2" to "1"
        dat$ever_smoker_baseline[dat$A10CIGS == "2"] <- 1L
        # Recode "1" to "0"
        dat$ever_smoker_baseline[dat$A10CIGS == "1"] <- 0L
        # Join smoking data with age variable.
        dat <- inner_join(dat, source_data$pht001559, "topmed_subject_id") %>%
          # Rename and convert age to numeric.
          transmute(topmed_subject_id, ever_smoker_baseline, age = as.numeric(A01AGE2)) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dat)
      }
      ```
<a id="ever_smoker_baseline_1-cfs"></a>
  * ### baseline_common_covariates/ever_smoker_baseline_1 -- **CFS**:
    * 7 component_study_variables: `phs000284.v2.pht001902.v1.phv00122012.v1`, `phs000284.v2.pht001902.v1.phv00122015.v1`, `phs000284.v2.pht001902.v1.phv00122340.v1`, `phs000284.v2.pht001902.v1.phv00122341.v1`, `phs000284.v2.pht001902.v1.phv00122342.v1`, `phs000284.v2.pht001902.v1.phv00122343.v1`, `phs000284.v2.pht001902.v1.phv00122344.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          df <- phen_list$source_data$pht001902 %>%
              # Subset to baseline visit. Some respondents baseline is visit 5
              filter(visit %in% c("1", "5")) %>%
              group_by(topmed_subject_id) %>%
              arrange(topmed_subject_id, visit) %>%
              filter(row_number(topmed_subject_id) == 1) %>%
              ungroup() %>%
              # Convert variables to numeric
              mutate_if(is.character, as.numeric) %>%
              # Recode encoded values and NA as 0
              mutate(AGESMOK = ifelse(AGESMOK %in% c(-1, -2, NA), 0, AGESMOK),
                  AVGSMOK = ifelse(AVGSMOK %in% c(-1, -2, NA), 0, AVGSMOK),
                  MONSMOKE = ifelse(MONSMOKE %in% c(-1, NA), 0, MONSMOKE),
                  NOWSMOKE = ifelse(NOWSMOKE %in% c(-1, NA), 0, NOWSMOKE),
                  # code ever_smoker_baseline as 1 if any smoking variables are positive
                  ever_smoker_baseline = as.numeric(as.logical(
                      SMOKED + AGESMOK + AVGSMOK + MONSMOKE + NOWSMOKE
                  ))) %>%
              # Select only ID, age and phenotype
              select(topmed_subject_id, age, ever_smoker_baseline) %>%
              # Exclude incomplete records
              na.omit() %>%
              return()
      }
      ```
<a id="ever_smoker_baseline_1-chs"></a>
  * ### baseline_common_covariates/ever_smoker_baseline_1 -- **CHS**:
    * 9 component_study_variables: `phs000287.v6.pht001450.v1.phv00098844.v1`, `phs000287.v6.pht001450.v1.phv00098845.v1`, `phs000287.v6.pht001450.v1.phv00099157.v1`, `phs000287.v6.pht001450.v1.phv00099159.v1`, `phs000287.v6.pht001452.v1.phv00100487.v1`, `phs000287.v6.pht001490.v1.phv00105143.v1`, `phs000287.v6.pht001490.v1.phv00105144.v1`, `phs000287.v6.pht001490.v1.phv00106198.v1`, `phs000287.v6.pht001490.v1.phv00106200.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          source_data <- phen_list$source_data
      
          smk <- source_data[c("pht001450", "pht001490")] %>%
              # Standardize column order
              lapply(select, topmed_subject_id, SMOKE101, SMOKE201,
                     starts_with("SMKAGE"), starts_with("AMOUNT")) %>%
              # Standardize column names
              lapply(setNames, c("topmed_subject_id", "SMOKE101", "SMOKE201",
                                 "SMKAGE", "AMOUNT")) %>%
              # pht001450 and pht001490 have empty rows for members of the new and
              # original cohorts, respectively. They are excluded here
              lapply(filter, !(is.na(SMOKE101) & is.na(SMOKE201) & is.na(SMKAGE) &
                               is.na(AMOUNT)))
          # NA is coded as "9" in SMKAGE
          smk$pht001490$SMKAGE[smk$pht001490$SMKAGE == "9"] <- NA
              # Bind datasets row-wise
          smk %<>% bind_rows() %>%
              # Join with remaining dataset
              full_join(source_data$pht001452, "topmed_subject_id") %>%
              # Convert character variables to numeric
              mutate_if(is.character, as.numeric)
      
          # Code ever_smoker_baseline as TRUE if ANY variables are true
          ever_smoker_baseline <- smk %>% select(SMOKE101, SMOKE201, AMOUNT, SMKAGE) %>%
              rowSums(na.rm = TRUE) %>%
              as.logical()
      
          smk %>% mutate(ever_smoker_baseline = as.integer(ever_smoker_baseline)) %>%
              # exclude if SMOKE101 is NA and ever_smoker_baseline is FALSE
              filter(!(is.na(SMOKE101) & !ever_smoker_baseline)) %>%
              select(topmed_subject_id, age = AGEBL, ever_smoker_baseline) %>%
              # Exclude incomplete records
              na.omit() %>%
              return()
      }
      ```
<a id="ever_smoker_baseline_1-copdgene"></a>
  * ### baseline_common_covariates/ever_smoker_baseline_1 -- **COPDGene**:
    * 16 component_study_variables: `phs000179.v5.pht002239.v4.phv00159636.v4`, `phs000179.v5.pht002239.v4.phv00159637.v4`, `phs000179.v5.pht002239.v4.phv00159638.v4`, `phs000179.v5.pht002239.v4.phv00159639.v4`, `phs000179.v5.pht002239.v4.phv00159640.v4`, `phs000179.v5.pht002239.v4.phv00159641.v4`, `phs000179.v5.pht002239.v4.phv00159747.v4`, `phs000179.v5.pht002239.v4.phv00159748.v4`, `phs000179.v5.pht002239.v4.phv00159749.v4`, `phs000179.v5.pht002239.v4.phv00159750.v4`, `phs000179.v5.pht002239.v4.phv00159752.v4`, `phs000179.v5.pht002239.v4.phv00159754.v4`, `phs000179.v5.pht002239.v4.phv00159755.v4`, `phs000179.v5.pht002239.v4.phv00159756.v4`, `phs000179.v5.pht002239.v4.phv00159836.v4`, `phs000179.v5.pht002239.v4.phv00169388.v3`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          df <- phen_list$source_data$pht002239 %>%
              # Convert character variables to numeric
              mutate_if(is.character, as.numeric) %>%
              rename_(ever_smoker_baseline = "EverSmokedCig", age = "Age_Enroll")
      
          modifier <- select(df, -topmed_subject_id, -age, -ever_smoker_baseline) %>%
          # Sum other variables that indicate smoking status, counting NA as 0
              rowSums(na.rm = TRUE)
      
          # Add modifier to ever_smoker_baseline and convert to 0/1
          transmute(df, ever_smoker_baseline = as.numeric(as.logical(ever_smoker_baseline + modifier)),
                  topmed_subject_id, age) %>%
              # Exclude incomplete records
              na.omit() %>%
              return()
      }
      ```
<a id="ever_smoker_baseline_1-cra"></a>
  * ### baseline_common_covariates/ever_smoker_baseline_1 -- **CRA**:
    * 6 component_study_variables: `phs000988.v2.pht005248.v2.phv00258650.v2`, `phs000988.v2.pht005248.v2.phv00267374.v2`, `phs000988.v2.pht005248.v2.phv00267375.v2`, `phs000988.v2.pht005248.v2.phv00267376.v2`, `phs000988.v2.pht005248.v2.phv00267378.v2`, `phs000988.v2.pht005248.v2.phv00267379.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          df <- phen_list$source_data$pht005248 %>%
              # Recode 1/2 as 0/1
              mutate(ever_smoker_baseline = ifelse(ever_Smoker == "1", 0,
                      ifelse(ever_Smoker == "2", 1, NA)))
          modifier <- select(df, Current_Smoker, former_Smoker,
                            cigsperday, cigsperday_average) %>%
              # Convert variables to numeric
              mutate_each(funs(as.numeric))
          # Recode 1 as 0
          modifier[c("Current_Smoker", "former_Smoker")] %<>%
              mutate_each(funs(ifelse(. == 1, 0, .)))
          # Sum variables row-wise
          modifier %<>% rowSums(na.rm = TRUE)
          transmute(df, topmed_subject_id, age,
                    # Switch ever_smoker_baseline from 0 to 1 if respondent answered positively
                    # to other smoking questions.
                    ever_smoker_baseline = as.numeric(as.logical(ever_smoker_baseline + modifier))) %>%
              # Exclude incomplete records
              na.omit() %>%
              return()
      }
      ```
<a id="ever_smoker_baseline_1-fhs_nos_gen3_omni2"></a>
  * ### baseline_common_covariates/ever_smoker_baseline_1 -- **FHS_NOS_Gen3_Omni2**:
    * 4 component_study_variables: `phs000007.v30.pht000074.v11.phv00020925.v5`, `phs000007.v30.pht003099.v5.phv00177930.v5`, `phs000007.v30.pht006005.v1.phv00273759.v1`, `phs000007.v30.pht006006.v2.phv00274252.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          source_data <- phen_list$source_data
          source_data[c("pht000074", "pht006006", "pht006005")] %>%
              # Standardize column order
              lapply(select, topmed_subject_id, matches("g3a070")) %>%
              # Set common column names
              lapply(setNames, c("topmed_subject_id", "ever_smoker_baseline")) %>%
              # bind row-wise
              bind_rows() %>%
              # Join with age dataset
              left_join(source_data$pht003099, "topmed_subject_id") %>%
              transmute(topmed_subject_id, age = age1,
                  # Convert ever_smoker_baseline to numeric
                  ever_smoker_baseline = as.numeric(ever_smoker_baseline)) %>%
              # Exclude incomplete records
              na.omit() %>%
              return()
      }
      ```
<a id="ever_smoker_baseline_1-fhs_offspring"></a>
  * ### baseline_common_covariates/ever_smoker_baseline_1 -- **FHS_Offspring**:
    * 2 component_study_variables: `phs000007.v30.pht000030.v8.phv00007612.v6`, `phs000007.v30.pht003099.v5.phv00177930.v5`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          phen_list$source_data %>%
              # Join all datasets by topmed_subject_id
              plyr::join_all("topmed_subject_id") %>%
              # Convert age to numeric
              transmute(topmed_subject_id, age = as.numeric(age1),
                  # Code ever_smoker_baseline as 1/0
                  ever_smoker_baseline = A99 %>% as.numeric %>% as.logical %>% as.integer) %>%
              # Exclude incomplete records
              na.omit() %>%
              return()
      }
      ```
<a id="ever_smoker_baseline_1-fhs_omni1"></a>
  * ### baseline_common_covariates/ever_smoker_baseline_1 -- **FHS_Omni1**:
    * 5 component_study_variables: `phs000007.v30.pht003099.v5.phv00177930.v5`, `phs000007.v30.pht004813.v1.phv00250452.v1`, `phs000007.v30.pht004814.v1.phv00251240.v1`, `phs000007.v30.pht004814.v1.phv00251241.v1`, `phs000007.v30.pht004814.v1.phv00251242.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Data
        dataset <- full_join(phen_list$source_data$pht004813,
                             phen_list$source_data$pht004814,
                             by = 'topmed_subject_id') %>%
                   left_join(phen_list$source_data$pht003099,
                   by = 'topmed_subject_id')
        dataset <- replace(dataset, dataset == 'NA', NA)
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        #Ever smokers at visit 2 corrections
        # cigs/day > 0 make ever smoker
        dataset$g675[dataset$g677 > 0] <- 1
        # years of smoking >0 make ever smoker
        dataset$g675[dataset$g676 > 0] <- 1
      
        #ever_smoker_baseline code assignment
        # all initially set to missing
        dataset$ever_smoker_baseline <- NA
        # never smokers at visit 2, set to 0
        dataset$ever_smoker_baseline[dataset$g675 == 0] <- 0
        # current smokers at visit 1, set to 1
        dataset$ever_smoker_baseline[dataset$e319 == 1] <- 1
      
        #Select final variables, remove missing
        dataset <- dataset %>%
                   select(topmed_subject_id, ever_smoker_baseline, age = age1) %>%
                   na.omit()
      
        return(dataset)
      }
      ```
<a id="ever_smoker_baseline_1-fhs_original"></a>
  * ### baseline_common_covariates/ever_smoker_baseline_1 -- **FHS_Original**:
    * 2 component_study_variables: `phs000007.v30.pht000009.v2.phv00000543.v1`, `phs000007.v30.pht003099.v5.phv00177930.v5`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          # Join al datasets by topmed_subject_id
          phen_list$source_data %>% plyr::join_all("topmed_subject_id") %>%
              # Convert age to numeric
              transmute(topmed_subject_id, age = as.numeric(age1),
                  # Code ever_smoker_baseline as 1 if MF71 is 1, 2 or 3
                  ever_smoker_baseline = ifelse(MF71 %in% c("1", "2", "3"), 1,
                      # Code ever_smoker_baseline as 0 if MF71 is 5 or 7, else code it as NA
                      ifelse(MF71 %in% c("5", "7"), 0, NA))) %>%
              # exclude incomplete records
              na.omit() %>%
              return()
      }
      ```
<a id="ever_smoker_baseline_1-genestar"></a>
  * ### baseline_common_covariates/ever_smoker_baseline_1 -- **GeneSTAR**:
    * 4 component_study_variables: `phs001218.v1.pht007766.v1.phv00369267.v1`, `phs001218.v1.pht007766.v1.phv00369268.v1`, `phs001218.v1.pht007766.v1.phv00369293.v1`, `phs001218.v1.pht007766.v1.phv00369296.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Datasets
        int <- phen_list$source_data$pht007766
        #Order of levels
        int$VISIT <- int$VISIT %>%
                     as.factor() %>%
                     relevel('SSV')
        #Subset to baseline visits, SSV and PSV
        dataset <- int %>%
                   filter(VISIT %in% c('SSV', 'PSV')) %>%
                   mutate(VISIT = as.factor(VISIT)) %>%
                   group_by(topmed_subject_id) %>%
                   arrange(topmed_subject_id, VISIT) %>%
                   filter(row_number(topmed_subject_id) == 1) %>%
                   ungroup() %>%
                   data.frame()
        #Converting to numeric variable
        dataset <- dataset %>%
                   replace(dataset == 'NA', NA) %>%
                   mutate(age = as.numeric(AGE))
      
        #Assigning values
        dataset$ever_smoker_baseline <- ifelse(dataset$EVERSMOK == 1, 1,
                                               ifelse(dataset$EVERSMOK == 2, 0, NA))
        #Accounting for skip pattern anomalies
        dataset$ever_smoker_baseline[dataset$EVERSMOK == 2 & dataset$SMOKENOW == 3] <- 1
        dataset$ever_smoker_baseline[is.na(dataset$EVERSMOK) & dataset$SMOKENOW == 1] <- 1
        dataset$ever_smoker_baseline[is.na(dataset$EVERSMOK) & dataset$SMOKENOW == 3] <- 1
      
        #Select variables and remove missing
        dataset <- dataset %>%
                   select(topmed_subject_id, ever_smoker_baseline, age) %>%
                   na.omit()
      
        return(dataset)
      }
      ```
<a id="ever_smoker_baseline_1-genoa"></a>
  * ### baseline_common_covariates/ever_smoker_baseline_1 -- **GENOA**:
    * 8 component_study_variables: `phs001238.v2.pht006039.v1.phv00277507.v1`, `phs001238.v2.pht006043.v1.phv00277618.v1`, `phs001238.v2.pht006043.v1.phv00277621.v1`, `phs001238.v2.pht006043.v1.phv00277624.v1`, `phs001238.v2.pht006653.v1.phv00307788.v1`, `phs001238.v2.pht006657.v1.phv00307899.v1`, `phs001238.v2.pht006657.v1.phv00307902.v1`, `phs001238.v2.pht006657.v1.phv00307905.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(magrittr)
      
        source_data <- phen_list$source_data
        # Row-bind African-American and European-American cohort datasets with age variable.
        age <- bind_rows(source_data[c("pht006039", "pht006653")]) %>%
          # Rename age variable and convert to numeric.
          transmute(topmed_subject_id, age = as.numeric(AGE))
      
        # Row-bind AA and EA cohort datasets with smoking history.
        smoke <- bind_rows(source_data[c("pht006043", "pht006657")]) %>%
          # Convert AVGCIGDY to numeric.
          mutate_at(vars(AVGCIGDY), as.numeric) %>%
          # Recode CIGARETT from "Yes"/"No" to TRUE/FALSE.
          mutate_at(vars(CIGARETT), funs(CIGARETT == "Yes")) %>%
          # Recode SMOKE100 from "Yes"/"No" to 1/0.
          mutate_at(
            vars(SMOKE100),
            funs(ifelse(SMOKE100 == "No", 0, ifelse(SMOKE100 == "Yes", 1, "Undefined")))
          )
      
        # To create the harmonized variable, select the component traits and convert SMOKE100 to integer.
        smoke$ever_smoker_baseline <- transmute(smoke, as.integer(SMOKE100), CIGARETT, AVGCIGDY) %>%
          # Add them row-wise, ignoring NAs.
          rowSums(na.rm = TRUE) %>%
          # Convert to TRUE/FALSE.
          as.logical() %>%
          # Convert to 1/0.
          as.integer()
      
        # Select only ID and harmonized variable.
        harmonized <- select(smoke, topmed_subject_id, ever_smoker_baseline) %>%
          # Join with age dataset.
          inner_join(age, "topmed_subject_id") %>%
          # Exclude rows with missing data.
          na.omit()
      
        return(harmonized)
      }
      ```
<a id="ever_smoker_baseline_1-hchs_sol"></a>
  * ### baseline_common_covariates/ever_smoker_baseline_1 -- **HCHS_SOL**:
    * 5 component_study_variables: `phs000810.v1.pht004715.v1.phv00226251.v1`, `phs000810.v1.pht004715.v1.phv00258106.v1`, `phs000810.v1.pht004715.v1.phv00258107.v1`, `phs000810.v1.pht004715.v1.phv00258108.v1`, `phs000810.v1.pht004715.v1.phv00258110.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(magrittr)
        dat <- phen_list$source_data$pht004715 %>%
          # Create new 'ever smoker' variable from TBEA1.
          mutate(ever_smoker_baseline = TBEA1) %>%
          # Convert cigarettes-per-day variables to numeric.
          mutate_at(vars(TBEA4, TBEA5A), as.numeric)
      
        # Create index of participants missing a response to the 'ever smoker' survey
        # who report currently smoking cigarettes.
        ind <- is.na(dat$TBEA1) & is_in(dat$TBEA3, c("1", "2"))
        # Code those individuals as "1".
        dat$ever_smoker_baseline[ind] <- "1"
        # Create index of participants who report smoking a positive number of
        # cigarettes per day.
        ind <- dat$TBEA4 > 0 | dat$TBEA5A > 0
        # Code those individuals as "1".
        dat$ever_smoker_baseline[ind] <- "1"
        # Rename age and convert age and smoking to numeric.
        dat <- transmute(dat, topmed_subject_id, age = as.numeric(AGE),
                         ever_smoker_baseline = as.numeric(ever_smoker_baseline)) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dat)
      }
      ```
<a id="ever_smoker_baseline_1-hvh"></a>
  * ### baseline_common_covariates/ever_smoker_baseline_1 -- **HVH**:
    * 4 component_study_variables: `phs001013.v3.pht005311.v2.phv00259376.v2`, `phs001013.v3.pht005311.v2.phv00259377.v2`, `phs001013.v3.pht005311.v2.phv00259378.v2`, `phs001013.v3.pht005311.v2.phv00259394.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        dat <- phen_list$source_data$pht005311 %>%
          # Convert character variables to numeric.
          mutate_if(is.character, as.numeric) %>%
          group_by(topmed_subject_id) %>%
          # Select only earliest observations for each participant.
          filter(indexy == min(indexy))
        # Create index of duplicated subject IDs.
        dup_index <- duplicated(select(dat, topmed_subject_id))
        # Create vector of duplicated subject IDs.
        dups <- select(dat, topmed_subject_id)[dup_index, ]
        # Filter out duplicated subject IDs.
        dat <- filter(dat, !(topmed_subject_id %in% unlist(dups))) %>%
          # Drop unnecessary variables.
          select(-ccs, -indexy) %>%
          # Exclude incomplete records.
          na.omit() %>%
          # Code ever_smoker_baseline as 1 if smoke is greater than 0
          mutate(ever_smoker_baseline = as.numeric(as.logical(smoke))) %>%
          select(-smoke)
        return(dat)
      }
      ```
<a id="ever_smoker_baseline_1-jhs"></a>
  * ### baseline_common_covariates/ever_smoker_baseline_1 -- **JHS**:
    * 7 component_study_variables: `phs000286.v5.pht001949.v1.phv00126009.v1`, `phs000286.v5.pht001977.v1.phv00128496.v1`, `phs000286.v5.pht001977.v1.phv00128498.v1`, `phs000286.v5.pht001977.v1.phv00128502.v1`, `phs000286.v5.pht001977.v1.phv00128503.v1`, `phs000286.v5.pht001977.v1.phv00128506.v1`, `phs000286.v5.pht001977.v1.phv00128507.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          # Join all datasets on topmed_subject_id
          df <- phen_list$source_data %>% plyr::join_all("topmed_subject_id", "left") %>%
              # Recode Y/N as 1/0
              mutate_each(funs(recode = ifelse(. == "Y", 1,
                                        ifelse(. == "N", 0, .))),
                  -topmed_subject_id, -TOBA7, -TOBA11, -AGE01) %>%
              # Recode TOBA7 to TRUE/FALSE
              mutate(TOBA7 = !is.na(TOBA7)) %>%
              # Drop old versions of variables
              select(topmed_subject_id, age = AGE01, TOBA1_recode, TOBA3_recode, TOBA6_recode,
                  TOBA7, TOBA10_recode, TOBA11) %>%
              mutate_each(funs(as.numeric))
      
          # Sum additional smoking questions row-wise
          modifier <- select(df, -topmed_subject_id, -age, -TOBA1_recode) %>%
              # Treat NA as 0
              rowSums(na.rm = TRUE)
      
          transmute(df, topmed_subject_id, age,
                  # Code ever_smoker_baseline as 1 if respondent gave positive response to any
                  # smoking question
                  ever_smoker_baseline = as.numeric(as.logical(TOBA1_recode + modifier))) %>%
              # Exclude incomplete records
              na.omit() %>%
              return()
      }
      ```
<a id="ever_smoker_baseline_1-mayo_vte_geneva"></a>
  * ### baseline_common_covariates/ever_smoker_baseline_1 -- **Mayo_VTE_GENEVA**:
    * 2 component_study_variables: `phs000289.v2.pht001886.v2.phv00121846.v1`, `phs000289.v2.pht001886.v2.phv00121874.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        dat <- phen_list$source_data$pht001886
        # Initialize empty harmonized variable.
        dat$ever_smoker_baseline <- NA
        # Get index of current and former smokers.
        ind_es <- dat$smoking %in% c("1", "2")
        # Specify ever smokers.
        dat$ever_smoker_baseline[ind_es] <- 1
        # Get index of never smokers.
        ind_ns <- dat$smoking %in% "0"
        # Specify never smokers.
        dat$ever_smoker_baseline[ind_ns] <- 0
        # Convert age to numeric and drop old variables.
        dat <- transmute(dat, topmed_subject_id, age = as.numeric(enrollage),
                         ever_smoker_baseline)
        # Remove missing
        dat <- na.omit(dat)
      
        return(dat)
      }
      ```
<a id="ever_smoker_baseline_1-mayo_vte_olmsted"></a>
  * ### baseline_common_covariates/ever_smoker_baseline_1 -- **Mayo_VTE_Olmsted**:
    * 2 component_study_variables: `phs001402.v1.pht008239.v1.phv00389902.v1`, `phs001402.v1.pht008239.v1.phv00389930.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        dataset <- phen_list$source_data$pht008239
      
        #Assigning age '>89' to 90
        dataset$enrollage[dataset$enrollage == '>89'] <- 90
      
        dataset$ever_smoker_baseline <- ifelse(dataset$smoking == '0', 0,
                                        ifelse(dataset$smoking >= '1', 1, NA))
      
        #Variable type, names and removing missing
        dataset <- dataset %>%
                   select(topmed_subject_id, age = enrollage, ever_smoker_baseline) %>%
                   mutate_if(is.character, as.numeric) %>%
                   na.omit()
      
        return(dataset)
      }
      ```
<a id="ever_smoker_baseline_1-mesa"></a>
  * ### baseline_common_covariates/ever_smoker_baseline_1 -- **MESA**:
    * 12 component_study_variables: `phs000209.v13.pht001111.v4.phv00082639.v2`, `phs000209.v13.pht001111.v4.phv00083243.v1`, `phs000209.v13.pht001111.v4.phv00083245.v1`, `phs000209.v13.pht001111.v4.phv00083247.v1`, `phs000209.v13.pht001116.v10.phv00084442.v3`, `phs000209.v13.pht001116.v10.phv00085570.v2`, `phs000209.v13.pht001116.v10.phv00085572.v2`, `phs000209.v13.pht001116.v10.phv00085574.v2`, `phs000209.v13.pht001121.v3.phv00087071.v1`, `phs000209.v13.pht001121.v3.phv00087252.v1`, `phs000209.v13.pht001121.v3.phv00087254.v1`, `phs000209.v13.pht001121.v3.phv00087256.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          smk <- phen_list$source_data %>%
              # Set common column order
              lapply(select, topmed_subject_id, starts_with("age"), starts_with("evsmk"),
                  starts_with("cursmk"), starts_with("cigsday")) %>%
              # Set common column names
              lapply(setNames, c("topmed_subject_id", "age", "evsmk", "cursmk", "cigsday")) %>%
              # bind datasets row-wise
              bind_rows() %>%
              # convert character variables to numeric
              mutate_if(is.character, as.numeric) %>%
              # Subset to records with a value for at least one of the following variables
              filter(!(is.na(evsmk) & is.na(cursmk) & is.na(cigsday)))
      
          # Code ever_smoker_baseline as TRUE if any of the following variables are greater than 0
          ever_smoker_baseline <- smk %>%
              select(evsmk, cursmk, cigsday) %>%
              rowSums(na.rm = TRUE) %>%
              as.logical()
      
          smk %>% mutate(ever_smoker_baseline = as.integer(ever_smoker_baseline)) %>%
              # exclude if evsmk is NA and ever_smoker_baseline is FALSE
              filter(!(is.na(evsmk) & !ever_smoker_baseline)) %>%
              select(topmed_subject_id, age, ever_smoker_baseline) %>%
              # Exclude incomplete records
              na.omit() %>%
              return()
      }
      ```
<a id="ever_smoker_baseline_1-sas"></a>
  * ### baseline_common_covariates/ever_smoker_baseline_1 -- **SAS**:
    * 3 component_study_variables: `phs000914.v1.pht005253.v1.phv00258680.v1`, `phs000914.v1.pht005253.v1.phv00258705.v1`, `phs000914.v1.pht005253.v1.phv00258713.v1`
    * Function:
      ```r
      harmonize <- function(phen_list) {
          source_data <- phen_list$source_data
          dataset <- source_data[['pht005253']]
          # Make age column into a numeric value.
          dataset$age <- as.numeric(dataset[['Dec_Age']])
          # Make an empty column to hold current_smoker.
          dataset$ever_smoker_baseline <- NA
          # Set ever_smoker_baseline to 1 if either Current_smoke or Past_smoker was equal to 1.
          dataset$ever_smoker_baseline[dataset$Current_smoke == '1' | dataset$Past_smoker == '1'] <- 1
          # Set ever_smoker_baseline to 0 if both Current_smoke and Past_smoker were equal to 0.
          dataset$ever_smoker_baseline[dataset$Current_smoke == '0' & dataset$Past_smoker == '0'] <- 0
          # Note that other values were left as NA in the final ever_smoker_baseline variable.
          dataset <- dataset[c("topmed_subject_id", "age", "ever_smoker_baseline")]
          # Remove rows with missing values.
          dataset <- na.omit(dataset)
          return(dataset)
      }
      ```
<a id="ever_smoker_baseline_1-wghs"></a>
  * ### baseline_common_covariates/ever_smoker_baseline_1 -- **WGHS**:
    * 2 component_study_variables: `phs001040.v3.pht005682.v3.phv00265848.v3`, `phs001040.v3.pht005682.v3.phv00375260.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Dataset
        dataset <- phen_list$source_data$pht005682
        dataset <- dataset %>%
                   replace(dataset == 'NA', NA) %>%
                   mutate(SMK3CAT = as.numeric(SMK3CAT),
                          age = as.integer(age))
      
        #Category assignment for ever smokers
        dataset$ever_smoker_baseline <- ifelse(dataset$SMK3CAT == 1, 1,
                                        ifelse(dataset$SMK3CAT == 2, 1, 0))
      
        #Final variables and remove missing
        dataset <- dataset %>%
                   select(topmed_subject_id, ever_smoker_baseline, age) %>%
                   na.omit() %>%
                   return()
      }
      ```
<a id="ever_smoker_baseline_1-whi"></a>
  * ### baseline_common_covariates/ever_smoker_baseline_1 -- **WHI**:
    * 4 component_study_variables: `phs000200.v11.pht000998.v6.phv00078436.v6`, `phs000200.v11.pht000998.v6.phv00078437.v6`, `phs000200.v11.pht001003.v6.phv00078773.v6`, `phs000200.v11.pht001003.v6.phv00078774.v6`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          # Join all datasets by topmed_subject_id
          dataset <- plyr::join_all(phen_list$source_data, "topmed_subject_id") %>%
              # Convert character variables to numeric
              mutate_if(is.character, as.numeric)
          # Values in F2DAYS above zero are likely errors. They are set to zero here
          ind <- dataset$F2DAYS > 0
          dataset$F2DAYS[ind] <- 0
          # To calculate age at measurement, add baseline age, days since enrollment, and
          # age since randomization
          transmute(dataset, topmed_subject_id,
                  ever_smoker_baseline = as.numeric(SMOKEVR),
                  age = AGE + (abs(F2DAYS) + F34DAYS) / 365.25) %>%
              # Exclude incomplete records
              na.omit() %>%
              return()
      }
      ```
<a id="height_baseline_1"></a>
## baseline_common_covariates: **height_baseline_1** (height_baseline)
  Body height at baseline.
  * **Harmonization Units**:
    * [Amish](#height_baseline_1-amish)
    * [ARIC](#height_baseline_1-aric)
    * [BAGS](#height_baseline_1-bags)
    * [CARDIA](#height_baseline_1-cardia)
    * [CCAF](#height_baseline_1-ccaf)
    * [CFS](#height_baseline_1-cfs)
    * [CHS](#height_baseline_1-chs)
    * [COPDGene](#height_baseline_1-copdgene)
    * [CRA](#height_baseline_1-cra)
    * [DHS](#height_baseline_1-dhs)
    * [FHS_Omni1](#height_baseline_1-fhs_omni1)
    * [FHS_Original](#height_baseline_1-fhs_original)
    * [FHS_Workthru](#height_baseline_1-fhs_workthru)
    * [GeneSTAR](#height_baseline_1-genestar)
    * [GENOA](#height_baseline_1-genoa)
    * [HCHS_SOL](#height_baseline_1-hchs_sol)
    * [HVH](#height_baseline_1-hvh)
    * [JHS](#height_baseline_1-jhs)
    * [Mayo_VTE_GENEVA](#height_baseline_1-mayo_vte_geneva)
    * [Mayo_VTE_Olmsted](#height_baseline_1-mayo_vte_olmsted)
    * [MESA](#height_baseline_1-mesa)
    * [MGH_AF](#height_baseline_1-mgh_af)
    * [Partners](#height_baseline_1-partners)
    * [SAS](#height_baseline_1-sas)
    * [VAFAR](#height_baseline_1-vafar)
    * [VU_AF](#height_baseline_1-vu_af)
    * [WGHS](#height_baseline_1-wghs)
    * [WHI](#height_baseline_1-whi)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: cm, **`Version`**: 5, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2019-09-30 14:49:13
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2018AB, `ID:` C0005890
  * **DCC Harmonization Comments**:

    This variable was harmonized by converting component study variables to the appropriate unit, as needed.
    
    #### BAGS
    
    Using BAGS height and weight data to calculate BMI, we identified 6 implausibly high BMI values. The study investigated and confirmed that these 6 subjects had incorrect values for height and weight component study variables.  The incorrect height values for this study can be identified using the harmonized variable `bmi_baseline_1` values > 100. 
    
    #### HVH
    
    There are multiple observations for many subjects in the HVH phenotype data. In
    these instances, we used the earliest observation of each subject for harmonization. Although
    this harmonized phenotype is designated as "baseline", the concept of
    "baseline" does not apply to HVH based on its study design. Consult the study
    documentation for more details (phs001013).
    
    #### WHI
    
    The study set height values below 146.2 cm to 146.2 and set height values above 177 cm to 177 in the component study variable. 
    
    #### Exam visit for height measurement
    
    | Study or subcohort | Visit |
    |---------|----------|
    | Amish | Baseline visit |
    | ARIC | Exam 1 |
    | BAGS | Baseline visit |
    | CARDIA | Year 0/Exam 1 |
    | CCAF | *Unspecified first visit* |
    | CFS | Baseline visit |
    | CHS_Original | Baseline visit |
    | CHS_AfricanAmerican | Baseline visit |
    | COPDGene | Baseline visit |
    | CRA | Baseline visit | 
    | DHS | Baseline visit |
    | FHS | Exam 1 |
    | GeneSTAR_ProbandSiblingCohort | Sibling Study Visit |
    | GeneSTAR_OffspringCoparentCohort | Platelet Study Visit |
    | GENOA | Phase 1 |
    | HCHS_SOL | Visit 1 |
    | HVH | *No visit structure* |
    | JHS | Visit 1 |
    | Mayo_VTE_GENEVA | *Unspecified first visit*  |
    | Mayo_VTE_Olmsted | *Unspecified first visit* |
    | MESA_Classic | Exam 1 Main |
    | MESA_Family | Family Exam Main |
    | MESA_AirNR | AirNR Exam Main | 
    | MGH_AF | *Unspecified first visit* |
    | Partners | Baseline visit |
    | SAS | Exam 1 |
    | VAFAR | *Unspecified first visit* |
    | VU_AF | *Unspecified first visit* |
    | WGHS | Exam 1 |
    | WHI | Screening, Year 0 |
    
    
    
<a id="height_baseline_1-amish"></a>
  * ### baseline_common_covariates/height_baseline_1 -- **Amish**:
    * 2 component_study_variables: `phs000956.v3.pht005002.v1.phv00252976.v1`, `phs000956.v3.pht005002.v1.phv00252982.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          dataset <- phen_list$source_data[["pht005002"]] %>%
              # Select and rename relevant traits
              transmute(topmed_subject_id,
                  age = age_baseline,
                  height_baseline = as.numeric(height_baseline)) %>%
              # Omit incomplete records
              na.omit()
          # Age is winsorized at 90, as an encoded value. Convert to integer:
          dataset$age[dataset$age == "90+"] <- "90"
          # Convert age to integer
          dataset %<>% mutate(age = as.integer(age))
          return(dataset)
      }
      ```
<a id="height_baseline_1-aric"></a>
  * ### baseline_common_covariates/height_baseline_1 -- **ARIC**:
    * 2 component_study_variables: `phs000280.v5.pht004032.v2.phv00203151.v1`, `phs000280.v5.pht004063.v2.phv00204712.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          dataset <- phen_list$source_data[["pht004032"]] %>%
              # Join datasets by topmed_subject_id
              full_join(phen_list$source_data[["pht004063"]], "topmed_subject_id") %>%
              # Select and rename relevant variables
              transmute(topmed_subject_id,
                  age = as.integer(V1AGE01),
                  # There is an encoded value 'A' in ANTA01 that is not present in
                  # the the data dictionary. It is coerced to NA here.
                  height_baseline = as.integer(na_if(ANTA01, "A"))) %>%
              # Omit incomplete records
              na.omit()
      
          return(dataset)
      }
      ```
<a id="height_baseline_1-bags"></a>
  * ### baseline_common_covariates/height_baseline_1 -- **BAGS**:
    * 2 component_study_variables: `phs001143.v2.pht005905.v2.phv00273211.v2`, `phs001143.v2.pht005905.v2.phv00375338.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Dataset
        dataset <- phen_list$source_data$pht005905
      
        #Numeric values and remove missing
        dataset <- dataset %>%
                   replace(dataset == 'NA', NA) %>%
                   mutate(height_baseline = as.numeric(HEIGHT_CM),
                          age = as.numeric(AGE)) %>%
                   select(topmed_subject_id, height_baseline, age) %>%
                   na.omit()
      
        return(dataset)
      }
      ```
<a id="height_baseline_1-cardia"></a>
  * ### baseline_common_covariates/height_baseline_1 -- **CARDIA**:
    * 2 component_study_variables: `phs000285.v3.pht001559.v2.phv00112439.v2`, `phs000285.v3.pht001583.v2.phv00113634.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        # Join all dataframes.
        dat <- plyr::join_all(phen_list$source_data, "topmed_subject_id") %>%
          # Rename and convert height and age to numeric.
          transmute(topmed_subject_id, age = as.numeric(A01AGE2),
                    height_baseline = as.numeric(A20HGT)) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dat)
      }
      ```
<a id="height_baseline_1-ccaf"></a>
  * ### baseline_common_covariates/height_baseline_1 -- **CCAF**:
    * 2 component_study_variables: `phs001189.v2.pht005979.v2.phv00273546.v2`, `phs001189.v2.pht005979.v2.phv00273551.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset.
        dataset <- phen_list$source_data$pht005979 %>%
                   rename(height_baseline = height)
      
        # Substitute the value of 'NA' to missing.
        dataset$age[dataset$age %in% 'NA'] <- NA
        dataset$height_baseline[dataset$height_baseline %in% 'NA'] <- NA
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Convert height unit from inch to cm.
        dataset <- mutate(dataset, height_baseline = height_baseline * 2.54)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="height_baseline_1-cfs"></a>
  * ### baseline_common_covariates/height_baseline_1 -- **CFS**:
    * 3 component_study_variables: `phs000284.v2.pht001902.v1.phv00122012.v1`, `phs000284.v2.pht001902.v1.phv00122015.v1`, `phs000284.v2.pht001902.v1.phv00122640.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          source_data <- phen_list$source_data
          source_data$pht001902 %>%
              # Subset to baseline visit. Some respondents baseline is visit 5
              filter(visit %in% c("1", "5")) %>%
              group_by(topmed_subject_id) %>%
              arrange(topmed_subject_id, visit) %>%
              filter(row_number(topmed_subject_id) == 1) %>%
              ungroup() %>%
              # Select, convert and rename relevant variables
              transmute(topmed_subject_id,
                  # Convert age to integer
                  age = as.integer(age),
                  # Height in cm, converted to numeric
                  height_baseline = as.numeric(htcm)) %>%
              # Omit incomplete records
              na.omit() %>%
              return()
      }
      ```
<a id="height_baseline_1-chs"></a>
  * ### baseline_common_covariates/height_baseline_1 -- **CHS**:
    * 2 component_study_variables: `phs000287.v6.pht001452.v1.phv00100382.v1`, `phs000287.v6.pht001452.v1.phv00100487.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          dataset <- phen_list$source_data[["pht001452"]] %>%
          # Select, rename and convert relevent variables
          transmute(topmed_subject_id,
              # Convert height to numeric
              height_baseline = as.numeric(STHT13),
              # Convert age to integer
              age = as.integer(AGEBL)) %>%
          # Exclude incomplete records
          na.omit()
          return(dataset)
      }
      ```
<a id="height_baseline_1-copdgene"></a>
  * ### baseline_common_covariates/height_baseline_1 -- **COPDGene**:
    * 2 component_study_variables: `phs000179.v5.pht002239.v4.phv00159592.v4`, `phs000179.v5.pht002239.v4.phv00159836.v4`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          phen_list$source_data$pht002239 %>%
              # Select, rename and convert relevent variables
              transmute(topmed_subject_id,
                  # Convert height and age to numeric
                  height_baseline = as.numeric(Height_CM),
                  age = as.numeric(Age_Enroll)) %>%
              # Exclude incomplete records
              na.omit() %>%
              return()
      }
      ```
<a id="height_baseline_1-cra"></a>
  * ### baseline_common_covariates/height_baseline_1 -- **CRA**:
    * 2 component_study_variables: `phs000988.v2.pht005248.v2.phv00258650.v2`, `phs000988.v2.pht005248.v2.phv00267371.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          source_data <- phen_list$source_data
          source_data$pht005248 %>%
              # Select and rename relevant variables
              transmute(topmed_subject_id, age, height_baseline = as.numeric(height)) %>%
              # Exclude incomplete records
              na.omit() %>%
              return()
      }
      ```
<a id="height_baseline_1-dhs"></a>
  * ### baseline_common_covariates/height_baseline_1 -- **DHS**:
    * 2 component_study_variables: `phs001412.v1.pht006746.v1.phv00310016.v1`, `phs001412.v1.pht006746.v1.phv00310030.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        dataset <- phen_list$source_data$pht006746 %>%
                   select(topmed_subject_id,
                          height_baseline = HEIGHT,
                          age = AGE) %>%
                   mutate_if(is.character, as.numeric) %>%
                   return()
      }
      ```
<a id="height_baseline_1-fhs_omni1"></a>
  * ### baseline_common_covariates/height_baseline_1 -- **FHS_Omni1**:
    * 2 component_study_variables: `phs000007.v30.pht003099.v5.phv00177930.v5`, `phs000007.v30.pht004813.v1.phv00250288.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        source_data <- phen_list$source_data
        # Convert columns to numeric.
        source_data <- lapply(source_data, function(x) mutate_if(x, is.character, as.numeric))
        harmonized <- source_data$pht004813 %>%
          # Convert height to cm.
          transmute(topmed_subject_id, height_baseline = 2.54 * e025) %>%
          # Join to dataset to age dataset.
          inner_join(source_data[["pht003099"]], by = "topmed_subject_id") %>%
          # Convert age to integer.
          mutate(age = as.integer(age1)) %>%
          # Drop old age variable.
          select(-age1) %>%
          # Exclude incomplete records.
          na.omit()
        return(harmonized)
      }
      ```
<a id="height_baseline_1-fhs_original"></a>
  * ### baseline_common_covariates/height_baseline_1 -- **FHS_Original**:
    * 3 component_study_variables: `phs000007.v30.pht000009.v2.phv00000539.v1`, `phs000007.v30.pht000009.v2.phv00000540.v1`, `phs000007.v30.pht003099.v5.phv00177930.v5`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        source_data <- phen_list$source_data
        # Convert variables to numeric.
        source_data <- lapply(source_data, function(x) mutate_if(x, is.character, as.numeric))
      
        harmonized <- source_data$pht000009 %>%
          # Convert height to cm from inches and fractional inches.
          transmute(topmed_subject_id, height_baseline = 2.54 * (MF67 + 0.01 * MF68)) %>%
          # Join with age dataset.
          inner_join(source_data[["pht003099"]], by = "topmed_subject_id") %>%
          # Convert age to integer.
          mutate(age = as.integer(age1)) %>%
          # Drop old age variable.
          select(-age1) %>%
          # Exclude incomplete records.
          na.omit()
        return(harmonized)
      }
      ```
<a id="height_baseline_1-fhs_workthru"></a>
  * ### baseline_common_covariates/height_baseline_1 -- **FHS_Workthru**:
    * 4 component_study_variables: `phs000007.v30.pht006026.v2.phv00277020.v2`, `phs000007.v30.pht006026.v2.phv00277042.v2`, `phs000007.v30.pht006027.v2.phv00277077.v2`, `phs000007.v30.pht006027.v2.phv00277171.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          # Bind dataframes row-wise
          bind_rows(phen_list$source_data) %>%
              # Convert character variables to numeric
              mutate_if(is.character, as.numeric) %>%
              # Convert HGT1 to numeric
              transmute(age = AGE1, height_baseline = HGT1 * 2.54,
                        topmed_subject_id) %>%
              # Exclude incomplete records
              na.omit() %>%
              return
      }
      ```
<a id="height_baseline_1-genestar"></a>
  * ### baseline_common_covariates/height_baseline_1 -- **GeneSTAR**:
    * 3 component_study_variables: `phs001218.v1.pht007766.v1.phv00369267.v1`, `phs001218.v1.pht007766.v1.phv00369268.v1`, `phs001218.v1.pht007766.v1.phv00369271.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Datasets
        int <- phen_list$source_data$pht007766
        #Order of levels
        int$VISIT <- int$VISIT %>%
                     as.factor() %>%
                     relevel('SSV')
        #Subset to baseline visits, SSV and PSV
        dataset <- int %>%
                   filter(VISIT %in% c('SSV', 'PSV')) %>%
                   mutate(VISIT = as.factor(VISIT)) %>%
                   group_by(topmed_subject_id) %>%
                   arrange(topmed_subject_id, VISIT) %>%
                   filter(row_number(topmed_subject_id) == 1) %>%
                   ungroup() %>%
                   data.frame()
        #Converting to numeric variable
        dataset <- dataset %>%
                   replace(dataset == 'NA', NA) %>%
                   mutate(height_baseline = as.numeric(HT),
                          age = as.numeric(AGE))
      
        #Converting to cm from inch
        dataset$height_baseline <- (2.54 * (dataset$height_baseline))
      
        #Selecting final harmonized variables
        dataset <- dataset %>%
                   select(topmed_subject_id, height_baseline, age) %>%
                   na.omit()
      
        return(dataset)
      }
      ```
<a id="height_baseline_1-genoa"></a>
  * ### baseline_common_covariates/height_baseline_1 -- **GENOA**:
    * 4 component_study_variables: `phs001238.v2.pht006039.v1.phv00277507.v1`, `phs001238.v2.pht006039.v1.phv00277514.v1`, `phs001238.v2.pht006653.v1.phv00307788.v1`, `phs001238.v2.pht006653.v1.phv00307795.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        # Row-bind African-American and European-American cohort datasets.
        harmonized <- bind_rows(phen_list$source_data) %>%
          # Convert character vectors to numeric.
          mutate_if(is.character, as.numeric) %>%
          # Rename age and height variables.
          rename(age = AGE, height_baseline = HEIGHT) %>%
          # Exclude rows with missing values.
          na.omit()
        return(harmonized)
      }
      ```
<a id="height_baseline_1-hchs_sol"></a>
  * ### baseline_common_covariates/height_baseline_1 -- **HCHS_SOL**:
    * 2 component_study_variables: `phs000810.v1.pht004715.v1.phv00226251.v1`, `phs000810.v1.pht004715.v1.phv00226281.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          phen_list$source_data$pht004715 %>%
              # Rename variables; HEIGHT has been corrected. See dbGaP for documentation
              rename(age = AGE, height_baseline = HEIGHT) %>%
              # Convert variables to numeric
              mutate_if(is.character, as.numeric) %>%
              # Exclude incomplete records
              na.omit() %>%
              return()
      }
      ```
<a id="height_baseline_1-hvh"></a>
  * ### baseline_common_covariates/height_baseline_1 -- **HVH**:
    * 4 component_study_variables: `phs001013.v3.pht005311.v2.phv00259376.v2`, `phs001013.v3.pht005311.v2.phv00259377.v2`, `phs001013.v3.pht005311.v2.phv00259378.v2`, `phs001013.v3.pht005311.v2.phv00259392.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        dat <- phen_list$source_data$pht005311 %>%
          # Convert character variables to numeric.
          mutate_if(is.character, as.numeric) %>%
          group_by(topmed_subject_id) %>%
          # Select only earliest observations for each participant.
          filter(indexy == min(indexy))
        # Create index of duplicated subject IDs.
        dup_index <- duplicated(select(dat, topmed_subject_id))
        # Create vector of duplicated subject IDs.
        dups <- select(dat, topmed_subject_id)[dup_index, ]
        # Filter out duplicated subject IDs.
        dat <- filter(dat, !(topmed_subject_id %in% unlist(dups))) %>%
          # Drop unnecessary variables.
          select(-ccs, -indexy) %>%
          # Exclude incomplete records.
          na.omit() %>%
          ungroup() %>%
          # Select relevent variables
          transmute(topmed_subject_id, age,
                    # Convert height in inches to cm
                    height_baseline = as.numeric(height) * 2.54)
        return(dat)
      }
      ```
<a id="height_baseline_1-jhs"></a>
  * ### baseline_common_covariates/height_baseline_1 -- **JHS**:
    * 2 component_study_variables: `phs000286.v5.pht001940.v1.phv00125860.v1`, `phs000286.v5.pht001949.v1.phv00126009.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          # Join datasets by topmed_subject_id
          dataset <- full_join(phen_list$source_data[["pht001940"]],
                  phen_list$source_data[["pht001949"]],
                  by = "topmed_subject_id") %>%
              # Select and rename relevant variables
              select(topmed_subject_id,
                  height_baseline = antv1,
                  age = AGE01) %>%
              # Convert variables to integer
              mutate_if(is.character, as.integer) %>%
              # exclude incomplete records
              na.omit()
          return(dataset)
      }
      ```
<a id="height_baseline_1-mayo_vte_geneva"></a>
  * ### baseline_common_covariates/height_baseline_1 -- **Mayo_VTE_GENEVA**:
    * 2 component_study_variables: `phs000289.v2.pht001886.v2.phv00121846.v1`, `phs000289.v2.pht001886.v2.phv00121872.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          phen_list$source_data$pht001886 %>%
              # Rename variables
              rename(age = enrollage, height_baseline = apptht_cms) %>%
              # Convert variables to numeric
              mutate_if(is.character, as.numeric) %>%
              # Exclude incomplete records
              na.omit() %>%
              return()
      }
      ```
<a id="height_baseline_1-mayo_vte_olmsted"></a>
  * ### baseline_common_covariates/height_baseline_1 -- **Mayo_VTE_Olmsted**:
    * 2 component_study_variables: `phs001402.v1.pht008239.v1.phv00389902.v1`, `phs001402.v1.pht008239.v1.phv00389928.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        dataset <- phen_list$source_data$pht008239
      
        #Assigning age '>89' to 90
        dataset$enrollage[dataset$enrollage == '>89'] <- 90
      
        #Variable type, names and removing missing
        dataset <- dataset %>%
                   rename(age = enrollage, height_baseline = apptht_cms) %>%
                   replace(dataset == 'NA', NA) %>%
                   mutate_if(is.character, as.numeric) %>%
                   na.omit()
      
        return(dataset)
      }
      ```
<a id="height_baseline_1-mesa"></a>
  * ### baseline_common_covariates/height_baseline_1 -- **MESA**:
    * 6 component_study_variables: `phs000209.v13.pht001111.v4.phv00082639.v2`, `phs000209.v13.pht001111.v4.phv00082683.v1`, `phs000209.v13.pht001116.v10.phv00084442.v3`, `phs000209.v13.pht001116.v10.phv00084482.v2`, `phs000209.v13.pht001121.v3.phv00087071.v1`, `phs000209.v13.pht001121.v3.phv00087078.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          # Bind datasets rowwise
          dataset <- rbind(phen_list$source_data[["pht001111"]],
                  phen_list$source_data[["pht001116"]]) %>%
              # Rename variables
              rename(age = age1c, height_baseline = htcm1) %>%
              # Bind rowwise with remaining dataset
              rbind(rename(phen_list$source_data[["pht001121"]], age = agefc,
                  height_baseline = htcmf)) %>%
              # convert height to numeric
              mutate(height_baseline = as.numeric(height_baseline),
                  # convert age to integer
                  age = as.integer(age)) %>%
              # Exclude incomplete records
              na.omit()
      
          return(dataset)
      }
      ```
<a id="height_baseline_1-mgh_af"></a>
  * ### baseline_common_covariates/height_baseline_1 -- **MGH_AF**:
    * 2 component_study_variables: `phs001001.v1.pht005655.v1.phv00354560.v1`, `phs001001.v1.pht005655.v1.phv00354564.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        dataset <- phen_list$source_data$pht005655
      
        #Converting height to numeric variable
        dataset <- dataset %>%
                   replace(dataset == 'NA', NA) %>%
                   mutate(height = as.numeric(height), age = as.numeric(age))
      
        #Converting to centimeters
        dataset$height_baseline <- (2.54 * dataset$height)
      
        #Selecting variables and removing NAs
        dataset <- dataset %>%
                   select(topmed_subject_id, height_baseline, age) %>%
                   na.omit()
      
        return(dataset)
      }
      ```
<a id="height_baseline_1-partners"></a>
  * ### baseline_common_covariates/height_baseline_1 -- **Partners**:
    * 2 component_study_variables: `phs001024.v3.pht005693.v1.phv00265978.v1`, `phs001024.v3.pht005693.v1.phv00265982.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Dataset
        dataset <- phen_list$source_data$pht005693 %>%
                   rename(age = age_diagnosis)
      
        #Missing values and variable structure
        dataset <- replace(dataset, dataset == 'NA', NA) %>%
                   mutate(age = as.numeric(age),
                          height = as.numeric(height))
      
        #Converting from inches to centimeters
        dataset$height_baseline <- (2.54 * dataset$height)
      
        #Select variables and remove missing
        dataset <- select(dataset, topmed_subject_id, age, height_baseline) %>%
                   na.omit()
      
        return(dataset)
      }
      ```
<a id="height_baseline_1-sas"></a>
  * ### baseline_common_covariates/height_baseline_1 -- **SAS**:
    * 2 component_study_variables: `phs000914.v1.pht005253.v1.phv00258680.v1`, `phs000914.v1.pht005253.v1.phv00258683.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          phen_list$source_data[["pht005253"]] %>%
              # Select and transform relevent variables
              transmute(topmed_subject_id,
                  # Convert age to numeric
                  age = as.numeric(Dec_Age),
                  # Convert height to numeric and encode "NA" as NA
                  height_baseline = as.numeric(na_if(Height, "NA"))) %>%
              # Exclude incomplete records
              na.omit() %>%
              return()
      }
      ```
<a id="height_baseline_1-vafar"></a>
  * ### baseline_common_covariates/height_baseline_1 -- **VAFAR**:
    * 2 component_study_variables: `phs000997.v3.pht005688.v3.phv00265921.v3`, `phs000997.v3.pht005688.v3.phv00265926.v3`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset.
        dataset <- phen_list$source_data$pht005688 %>%
                   rename(height_baseline = height)
      
        # Substitute the value of 'NA' to missing.
        dataset$age[dataset$age %in% 'NA'] <- NA
        dataset$height_baseline[dataset$height_baseline %in% 'NA'] <- NA
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Convert height unit from inch to cm.
        dataset <- mutate(dataset, height_baseline = height_baseline * 2.54)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="height_baseline_1-vu_af"></a>
  * ### baseline_common_covariates/height_baseline_1 -- **VU_AF**:
    * 2 component_study_variables: `phs001032.v4.pht005675.v3.phv00265805.v2`, `phs001032.v4.pht005675.v3.phv00265810.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset.
        dataset <- phen_list$source_data$pht005675 %>%
                   rename(height_baseline = height)
      
        # Substitute the value of 'NA' to missing.
        dataset$height_baseline[dataset$height_baseline %in% 'NA'] <- NA
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Convert height unit from inch to cm.
        dataset <- mutate(dataset, height_baseline = height_baseline * 2.54)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="height_baseline_1-wghs"></a>
  * ### baseline_common_covariates/height_baseline_1 -- **WGHS**:
    * 2 component_study_variables: `phs001040.v3.pht005682.v3.phv00265848.v3`, `phs001040.v3.pht005682.v3.phv00375254.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Dataset
        dataset <- phen_list$source_data$pht005682
        dataset <- dataset %>%
                   replace(dataset == 'NA', NA) %>%
                   mutate(HEIGHT = as.numeric(HEIGHT),
                          age = as.integer(age))
      
        #Height in cm
        dataset$height_baseline <- (dataset$HEIGHT * 2.54)
      
        #Final variables and remove missing
        dataset <- dataset %>%
                   select(topmed_subject_id, height_baseline, age) %>%
                   na.omit() %>%
                   return()
      }
      ```
<a id="height_baseline_1-whi"></a>
  * ### baseline_common_covariates/height_baseline_1 -- **WHI**:
    * 5 component_study_variables: `phs000200.v11.pht000998.v6.phv00078436.v6`, `phs000200.v11.pht000998.v6.phv00078437.v6`, `phs000200.v11.pht001019.v6.phv00079851.v6`, `phs000200.v11.pht001019.v6.phv00079852.v6`, `phs000200.v11.pht001019.v6.phv00079858.v6`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          dataset <- phen_list$source_data[["pht001019"]] %>%
              # Subset to baseline
              filter(F80VY == "0") %>%
              # Join datasets
              inner_join(phen_list$source_data[["pht000998"]],
                  by = "topmed_subject_id") %>%
              mutate_at(vars(F2DAYS), funs(as.numeric))
          # Values in F2DAYS above zero are likely errors. They are set to zero here
          ind <- dataset$F2DAYS > 0
          dataset$F2DAYS[ind] <- 0
          # Select and rename relevent variables
          transmute(dataset, topmed_subject_id,
                  # convert height to numeric
                  height_baseline = as.numeric(HEIGHTX),
                  # To calculate age at measurement, add baseline age, days since
                  # enrollment, and age since randomization
                  age = as.numeric(AGE) +
                      (as.numeric(F80DAYS) + abs(F2DAYS)) / 365.25) %>%
              # Exclude incomplete results
              na.omit() %>%
              return()
      }
      ```
<a id="weight_baseline_1"></a>
## baseline_common_covariates: **weight_baseline_1** (weight_baseline)
  Body weight at baseline.
  * **Harmonization Units**:
    * [Amish](#weight_baseline_1-amish)
    * [ARIC](#weight_baseline_1-aric)
    * [BAGS](#weight_baseline_1-bags)
    * [CARDIA](#weight_baseline_1-cardia)
    * [CCAF](#weight_baseline_1-ccaf)
    * [CFS](#weight_baseline_1-cfs)
    * [CHS](#weight_baseline_1-chs)
    * [COPDGene](#weight_baseline_1-copdgene)
    * [CRA](#weight_baseline_1-cra)
    * [DHS](#weight_baseline_1-dhs)
    * [FHS_Original_Omni1](#weight_baseline_1-fhs_original_omni1)
    * [FHS_Workthru](#weight_baseline_1-fhs_workthru)
    * [GeneSTAR](#weight_baseline_1-genestar)
    * [GENOA](#weight_baseline_1-genoa)
    * [HCHS_SOL](#weight_baseline_1-hchs_sol)
    * [HVH](#weight_baseline_1-hvh)
    * [JHS](#weight_baseline_1-jhs)
    * [Mayo_VTE_GENEVA](#weight_baseline_1-mayo_vte_geneva)
    * [Mayo_VTE_Olmsted](#weight_baseline_1-mayo_vte_olmsted)
    * [MESA](#weight_baseline_1-mesa)
    * [MGH_AF](#weight_baseline_1-mgh_af)
    * [Partners](#weight_baseline_1-partners)
    * [SAS](#weight_baseline_1-sas)
    * [VAFAR](#weight_baseline_1-vafar)
    * [VU_AF](#weight_baseline_1-vu_af)
    * [WGHS](#weight_baseline_1-wghs)
    * [WHI](#weight_baseline_1-whi)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: kg, **`Version`**: 4, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2019-09-30 15:02:33
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2018AB, `ID:` C0005910
  * **DCC Harmonization Comments**:

    This variable was harmonized by converting component study variables to the appropriate unit, as needed.
    
    #### BAGS
    
    Using BAGS height and weight data to calculate BMI, we identified 6 implausibly high BMI values. The study investigated and confirmed that these 6 subjects had incorrect values for height and weight component study variables. The incorrect weight values for this study can be identified using the harmonized variable `bmi_baseline_1` values > 100. 
    
    #### GeneSTAR
    
    This variable was harmonized using study-reported height and BMI variables to calculate weight. 
    
    #### HVH
    
    There are multiple observations for many subjects in the HVH phenotype data. In
    these instances, we used the earliest observation of each subject for harmonization. Although
    this harmonized phenotype is designated as "baseline", the concept of
    "baseline" does not apply to HVH based on its study design. Consult the study
    documentation for more details (phs001013).
    
    #### Partners
    
    One subject with a weight value of `400+` was assigned to 400 lbs (181.437 kg).
    
    #### WHI 
    
    The WHI study set weight values below 45.8 kg to 45.8 and set weight values above 130.2 kg to 130.2 in the component study variable. 
    
    #### Exam visit for weight measurement
    
    | Study or subcohort | Visit |
    |---------|----------|
    | Amish | Baseline visit |
    | ARIC | Exam 1 |
    | BAGS | Baseline visit |
    | CARDIA | Year 0/Exam 1 |
    | CCAF | *Unspecified first visit* |
    | CFS | Baseline visit |
    | CHS_Original | Baseline visit |
    | CHS_AfricanAmerican | Baseline visit |
    | COPDGene | Baseline visit |
    | CRA | Baseline visit | 
    | DHS | Baseline visit |
    | FHS | Exam 1 |
    | GeneSTAR_ProbandSiblingCohort | Sibling Study Visit |
    | GeneSTAR_OffspringCoparentCohort | Platelet Study Visit |
    | GENOA | Phase 1 |
    | HCHS_SOL | Visit 1 |
    | HVH | *No visit structure* |
    | JHS | Visit 1 |
    | Mayo_VTE_GENEVA | *Unspecified first visit*  |
    | Mayo_VTE_Olmsted | *Unspecified first visit* |
    | MESA_Classic | Exam 1 Main |
    | MESA_Family | Family Exam Main |
    | MESA_AirNR | AirNR Exam Main | 
    | MGH_AF | *Unspecified first visit* |
    | Partners | Baseline visit |
    | SAS | Exam 1 |
    | VAFAR | *Unspecified first visit* |
    | VU_AF | *Unspecified first visit* |
    | WGHS | Exam 1 |
    | WHI | Screening, Year 0 |
    
    
<a id="weight_baseline_1-amish"></a>
  * ### baseline_common_covariates/weight_baseline_1 -- **Amish**:
    * 2 component_study_variables: `phs000956.v3.pht005002.v1.phv00252976.v1`, `phs000956.v3.pht005002.v1.phv00252979.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          dataset <- phen_list$source_data[["pht005002"]] %>%
              # Rename and select relevant variables
              transmute(topmed_subject_id,
                  age = age_baseline,
                  # Convert weight to numeric
                  weight_baseline = as.numeric(weight_baseline)) %>%
                  # Exclude incomplete records
              na.omit()
          # Age is winsorized at 90, as an encoded value. Convert to integer:
          dataset$age[dataset$age == "90+"] <- "90"
          # Convert age to integer
          dataset %<>% mutate(age = as.integer(age))
          return(dataset)
      }
      ```
<a id="weight_baseline_1-aric"></a>
  * ### baseline_common_covariates/weight_baseline_1 -- **ARIC**:
    * 2 component_study_variables: `phs000280.v5.pht004032.v2.phv00203154.v1`, `phs000280.v5.pht004063.v2.phv00204712.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          dataset <- phen_list$source_data[["pht004032"]] %>%
              # Join datasets by topmed_subject_id
              full_join(phen_list$source_data[["pht004063"]], "topmed_subject_id") %>%
              # Select and rename relevant variables
              transmute(topmed_subject_id,
                  # Convert age to integer
                  age = as.integer(V1AGE01),
                  # There is an encoded value 'A' in ANTA04 that is not described in
                  # the the data dictionary. It is coerced to NA here.
                  # Weight in pounds converted to kilograms
                  weight_baseline = as.numeric(na_if(ANTA04, "A")) * 0.453592) %>%
              # Exclude incomplete records
              na.omit()
      
          return(dataset)
      }
      ```
<a id="weight_baseline_1-bags"></a>
  * ### baseline_common_covariates/weight_baseline_1 -- **BAGS**:
    * 2 component_study_variables: `phs001143.v2.pht005905.v2.phv00273211.v2`, `phs001143.v2.pht005905.v2.phv00375337.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Dataset
        dataset <- phen_list$source_data$pht005905
      
        #Numeric values
        dataset <- dataset %>%
                   replace(dataset == 'NA', NA) %>%
                   mutate(weight_baseline = as.numeric(WEIGHT_KG),
                          age = as.numeric(AGE)) %>%
                   select(topmed_subject_id, weight_baseline, age) %>%
                   na.omit()
      
        return(dataset)
      }
      ```
<a id="weight_baseline_1-cardia"></a>
  * ### baseline_common_covariates/weight_baseline_1 -- **CARDIA**:
    * 2 component_study_variables: `phs000285.v3.pht001559.v2.phv00112439.v2`, `phs000285.v3.pht001583.v2.phv00113635.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        # Join all dataframes.
        dat <- plyr::join_all(phen_list$source_data, "topmed_subject_id") %>%
          # Rename age and convert to numeric, and convert weight to kilograms.
          transmute(topmed_subject_id, age = as.numeric(A01AGE2),
                    weight_baseline = as.numeric(A20WGT) * 0.45359) %>%
          # Exlcue rows with missing data.
          na.omit()
        return(dat)
      }
      ```
<a id="weight_baseline_1-ccaf"></a>
  * ### baseline_common_covariates/weight_baseline_1 -- **CCAF**:
    * 2 component_study_variables: `phs001189.v2.pht005979.v2.phv00273546.v2`, `phs001189.v2.pht005979.v2.phv00273552.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset.
        dataset <- phen_list$source_data$pht005979 %>%
                   rename(weight_baseline = weight)
      
        # Substitute the value of 'NA' to missing.
        dataset$age[dataset$age %in% 'NA'] <- NA
        dataset$weight_baseline[dataset$weight_baseline %in% 'NA'] <- NA
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Convert weight unit from pound to kg.
        dataset <- mutate(dataset, weight_baseline = weight_baseline * 0.453592)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="weight_baseline_1-cfs"></a>
  * ### baseline_common_covariates/weight_baseline_1 -- **CFS**:
    * 3 component_study_variables: `phs000284.v2.pht001902.v1.phv00122012.v1`, `phs000284.v2.pht001902.v1.phv00122015.v1`, `phs000284.v2.pht001902.v1.phv00122639.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          phen_list$source_data$pht001902  %>%
              # Subset to baseline visit. Some respondents baseline is visit 5
              filter(visit %in% c("1", "5")) %>%
              group_by(topmed_subject_id) %>%
              arrange(topmed_subject_id, visit) %>%
              filter(row_number(topmed_subject_id) == 1) %>%
              ungroup() %>%
              # Select and rename relevant variables
              transmute(topmed_subject_id,
                  # Convert age to integer
                  age = as.integer(age),
                  # Convert weight to numeric
                  weight_baseline = as.numeric(wtkg)) %>%
              # Exclude incomplete records
              na.omit() %>%
              return()
      }
      ```
<a id="weight_baseline_1-chs"></a>
  * ### baseline_common_covariates/weight_baseline_1 -- **CHS**:
    * 2 component_study_variables: `phs000287.v6.pht001452.v1.phv00100383.v1`, `phs000287.v6.pht001452.v1.phv00100487.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          phen_list$source_data[["pht001452"]] %>%
              # Select and rename relevant variables
              transmute(topmed_subject_id,
                  # Convert age to integer
                  age = as.integer(AGEBL),
                  # Convert weight to kilograms
                  weight_baseline = as.numeric(WEIGHT13) * 0.453592) %>%
                  # Exclude incomplete records
              na.omit()
      }
      ```
<a id="weight_baseline_1-copdgene"></a>
  * ### baseline_common_covariates/weight_baseline_1 -- **COPDGene**:
    * 2 component_study_variables: `phs000179.v5.pht002239.v4.phv00159591.v4`, `phs000179.v5.pht002239.v4.phv00159836.v4`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          phen_list$source_data$pht002239 %>%
              # Select and rename relevatn variables
              transmute(topmed_subject_id,
                  # convert age to numeric
                  age = as.numeric(Age_Enroll),
                  # convert weight to numeric
                  weight_baseline = as.numeric(Weight_KG)) %>%
              # Exclude incomplete records
              na.omit() %>%
              return()
      }
      ```
<a id="weight_baseline_1-cra"></a>
  * ### baseline_common_covariates/weight_baseline_1 -- **CRA**:
    * 2 component_study_variables: `phs000988.v2.pht005248.v2.phv00258650.v2`, `phs000988.v2.pht005248.v2.phv00267372.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          source_data <- phen_list$source_data
          source_data$pht005248 %>%
              # Select, rename and convert to numeric relevant variables
              transmute(topmed_subject_id, age = as.numeric(age),
                        weight_baseline = as.numeric(weight)) %>%
              # Exclude incomplete records
              na.omit() %>%
              return()
      }
      ```
<a id="weight_baseline_1-dhs"></a>
  * ### baseline_common_covariates/weight_baseline_1 -- **DHS**:
    * 2 component_study_variables: `phs001412.v1.pht006746.v1.phv00310016.v1`, `phs001412.v1.pht006746.v1.phv00310029.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        dataset <- phen_list$source_data$pht006746 %>%
                   select(topmed_subject_id,
                          weight_baseline = WEIGHT,
                          age = AGE) %>%
                   mutate_if(is.character, as.numeric) %>%
                   return()
      }
      ```
<a id="weight_baseline_1-fhs_original_omni1"></a>
  * ### baseline_common_covariates/weight_baseline_1 -- **FHS_Original_Omni1**:
    * 3 component_study_variables: `phs000007.v30.pht000009.v2.phv00000541.v1`, `phs000007.v30.pht003099.v5.phv00177930.v5`, `phs000007.v30.pht004813.v1.phv00250287.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          source_data <- phen_list$source_data
          # Initiate empty list
          data_lists <- list(original = NULL, omni_1 = NULL)
      
          # Rename weight variables
          data_lists$original <- rename(source_data$pht000009, wt = MF69)
          data_lists$omni_1 <- rename(source_data$pht004813, wt = e024)
          # Bind datasets rowwise
          dataset <- do.call(rbind, data_lists) %>%
              # Join weight datasets with age dataset
              inner_join(source_data$pht003099, by = "topmed_subject_id") %>%
              # Select and rename relevant variables
              transmute(topmed_subject_id,
                  # Convert weight to kilograms
                  weight_baseline = as.numeric(wt) * 0.45359,
                  # Convert age to integer
                  age = as.integer(age1)) %>%
              # Exclude incomplete records
              na.omit()
      
          return(dataset)
      }
      ```
<a id="weight_baseline_1-fhs_workthru"></a>
  * ### baseline_common_covariates/weight_baseline_1 -- **FHS_Workthru**:
    * 4 component_study_variables: `phs000007.v30.pht006026.v2.phv00277020.v2`, `phs000007.v30.pht006026.v2.phv00277055.v2`, `phs000007.v30.pht006027.v2.phv00277077.v2`, `phs000007.v30.pht006027.v2.phv00277227.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          # Bind dataframes row-wise
          bind_rows(phen_list$source_data) %>%
              # Convert character variables to numeric
              mutate_if(is.character, as.numeric) %>%
              transmute(age = AGE1, weight_baseline = WGT1 * 0.45359,
                        topmed_subject_id) %>%
              # Exclude incomplete records
              na.omit() %>%
              return
      }
      ```
<a id="weight_baseline_1-genestar"></a>
  * ### baseline_common_covariates/weight_baseline_1 -- **GeneSTAR**:
    * 4 component_study_variables: `phs001218.v1.pht007766.v1.phv00369267.v1`, `phs001218.v1.pht007766.v1.phv00369268.v1`, `phs001218.v1.pht007766.v1.phv00369271.v1`, `phs001218.v1.pht007766.v1.phv00369272.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Datasets
        int <- phen_list$source_data$pht007766
        #Order of levels
        int$VISIT <- int$VISIT %>%
                     as.factor() %>%
                     relevel('SSV')
        #Subset to baseline visits, SSV and PSV
        dataset <- int %>%
                   filter(VISIT %in% c('SSV', 'PSV')) %>%
                   mutate(VISIT = as.factor(VISIT)) %>%
                   group_by(topmed_subject_id) %>%
                   arrange(topmed_subject_id, VISIT) %>%
                   filter(row_number(topmed_subject_id) == 1) %>%
                   ungroup() %>%
                   data.frame()
        #Converting to numeric variable
        dataset <- dataset %>%
                   replace(dataset == 'NA', NA) %>%
                   mutate(HT = as.numeric(HT),
                          BMI = as.numeric(BMI),
                          age = as.numeric(AGE))
      
        #Calculating weight from height and BMI
        dataset$height_m <- (0.0254 * (dataset$HT))
        dataset$weight_baseline <- (dataset$BMI * (dataset$height_m) ^ 2)
      
        #Final variables and remove missing
        dataset <- dataset %>%
                   select(topmed_subject_id, weight_baseline, age) %>%
                   na.omit()
      
        return(dataset)
      }
      ```
<a id="weight_baseline_1-genoa"></a>
  * ### baseline_common_covariates/weight_baseline_1 -- **GENOA**:
    * 4 component_study_variables: `phs001238.v2.pht006039.v1.phv00277507.v1`, `phs001238.v2.pht006039.v1.phv00277515.v1`, `phs001238.v2.pht006653.v1.phv00307788.v1`, `phs001238.v2.pht006653.v1.phv00307796.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        # Row-bind African-American and European-American cohort datasets.
        harmonized <- bind_rows(phen_list$source_data) %>%
          # Convert character vectors to numeric.
          mutate_if(is.character, as.numeric) %>%
          # Rename age and weight variables.
          rename(age = AGE, weight_baseline = WEIGHT) %>%
          # Exclude rows with missing values.
          na.omit()
        return(harmonized)
      }
      ```
<a id="weight_baseline_1-hchs_sol"></a>
  * ### baseline_common_covariates/weight_baseline_1 -- **HCHS_SOL**:
    * 2 component_study_variables: `phs000810.v1.pht004715.v1.phv00226251.v1`, `phs000810.v1.pht004715.v1.phv00253218.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          phen_list$source_data$pht004715 %>%
              # Reneame age and weight variables
              rename(age = AGE, weight_baseline = ANTA4) %>%
              # Convert character variables to numeric
              mutate_if(is.character, as.numeric) %>%
              # Exclude incomplete records
              na.omit() %>%
              return()
      }
      ```
<a id="weight_baseline_1-hvh"></a>
  * ### baseline_common_covariates/weight_baseline_1 -- **HVH**:
    * 4 component_study_variables: `phs001013.v3.pht005311.v2.phv00259376.v2`, `phs001013.v3.pht005311.v2.phv00259377.v2`, `phs001013.v3.pht005311.v2.phv00259378.v2`, `phs001013.v3.pht005311.v2.phv00259393.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        dat <- phen_list$source_data$pht005311 %>%
          # Convert character variables to numeric.
          mutate_if(is.character, as.numeric) %>%
          group_by(topmed_subject_id) %>%
          # Select only earliest observations for each participant.
          filter(indexy == min(indexy))
        # Create index of duplicated subject IDs.
        dup_index <- duplicated(select(dat, topmed_subject_id))
        # Create vector of duplicated subject IDs.
        dups <- select(dat, topmed_subject_id)[dup_index, ]
        # Filter out duplicated subject IDs.
        dat <- filter(dat, !(topmed_subject_id %in% unlist(dups))) %>%
          # Drop unnecessary variables.
          select(-ccs, -indexy) %>%
          # Exclude incomplete records.
          na.omit() %>%
          ungroup() %>%
          # Select relevent variables and convert weight to kg.
          transmute(topmed_subject_id, age, weight_baseline = as.numeric(weight) * 0.453592)
        return(dat)
      }
      ```
<a id="weight_baseline_1-jhs"></a>
  * ### baseline_common_covariates/weight_baseline_1 -- **JHS**:
    * 2 component_study_variables: `phs000286.v5.pht001940.v1.phv00125861.v1`, `phs000286.v5.pht001949.v1.phv00126009.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          source_data <- phen_list$source_data
          # Join datasets by topmed_subject_id
          dataset <- inner_join(source_data$pht001940, source_data$pht001949,
                  by = "topmed_subject_id") %>%
                  # Select and rename relevant variables
              transmute(topmed_subject_id,
                  # Convert age to integer
                  age = as.integer(AGE01),
                  # Convert weight to numeric
                  weight_baseline = as.numeric(antv2)) %>%
              # Exclude incomplete records
              na.omit()
          return(dataset)
      }
      ```
<a id="weight_baseline_1-mayo_vte_geneva"></a>
  * ### baseline_common_covariates/weight_baseline_1 -- **Mayo_VTE_GENEVA**:
    * 2 component_study_variables: `phs000289.v2.pht001886.v2.phv00121846.v1`, `phs000289.v2.pht001886.v2.phv00121873.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          phen_list$source_data$pht001886 %>%
              # Rename relevant variables
              rename(age = enrollage, weight_baseline = apptwt_kgs) %>%
              # Convert character variables to numeric
              mutate_if(is.character, as.numeric) %>%
              # Exclude incomplete records
              na.omit() %>%
              return()
      }
      ```
<a id="weight_baseline_1-mayo_vte_olmsted"></a>
  * ### baseline_common_covariates/weight_baseline_1 -- **Mayo_VTE_Olmsted**:
    * 2 component_study_variables: `phs001402.v1.pht008239.v1.phv00389902.v1`, `phs001402.v1.pht008239.v1.phv00389929.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        dataset <- phen_list$source_data$pht008239
      
        #Assigning age '>89' to 90
        dataset$enrollage[dataset$enrollage == '>89'] <- 90
      
        #Variable type, names and removing missing
        dataset <- dataset %>%
                   rename(age = enrollage, weight_baseline = apptwt_kgs) %>%
                   replace(dataset == 'NA', NA) %>%
                   mutate_if(is.character, as.numeric) %>%
                   na.omit()
      
        return(dataset)
      }
      ```
<a id="weight_baseline_1-mesa"></a>
  * ### baseline_common_covariates/weight_baseline_1 -- **MESA**:
    * 6 component_study_variables: `phs000209.v13.pht001111.v4.phv00082639.v2`, `phs000209.v13.pht001111.v4.phv00082685.v1`, `phs000209.v13.pht001116.v10.phv00084442.v3`, `phs000209.v13.pht001116.v10.phv00084484.v2`, `phs000209.v13.pht001121.v3.phv00087071.v1`, `phs000209.v13.pht001121.v3.phv00087079.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          source_data <- phen_list$source_data
          # Rename age and weight to match other datasets
          source_data$pht001121 <- rename(source_data$pht001121,
                  age1c = agefc, wtlb1 = wtlbf)
          # Bind datasets rowwise
          dataset <- do.call(rbind, source_data) %>%
              # Select and rename relevant variables
              transmute(topmed_subject_id,
                  # Convert age to integer
                  age = as.integer(age1c),
                  # Convert weight to kilograms
                  weight_baseline = as.numeric(wtlb1) * 0.453592) %>%
          # Exclude incomplete records
          na.omit()
          return(dataset)
      }
      ```
<a id="weight_baseline_1-mgh_af"></a>
  * ### baseline_common_covariates/weight_baseline_1 -- **MGH_AF**:
    * 2 component_study_variables: `phs001001.v1.pht005655.v1.phv00354560.v1`, `phs001001.v1.pht005655.v1.phv00354565.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        dataset <- phen_list$source_data$pht005655
      
        #Converting weight to numeric variables
        dataset <- dataset %>%
                   replace(dataset == 'NA', NA) %>%
                   mutate(weight = as.numeric(weight), age = as.numeric(age))
      
        #Converting to kilograms
        dataset$weight_baseline <- (0.453592 * dataset$weight)
      
        #Selecting variables and removing NAs
        dataset <- dataset %>%
                   select(topmed_subject_id, weight_baseline, age) %>%
                   na.omit()
      
        return(dataset)
      }
      ```
<a id="weight_baseline_1-partners"></a>
  * ### baseline_common_covariates/weight_baseline_1 -- **Partners**:
    * 2 component_study_variables: `phs001024.v3.pht005693.v1.phv00265978.v1`, `phs001024.v3.pht005693.v1.phv00265983.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Dataset
        dataset <- phen_list$source_data$pht005693 %>%
                   rename(age = age_diagnosis)
      
        #Assign 400+ value to 400
        dataset$weight[dataset$weight == '400+'] <- 400
      
        #Missing values and variable structure
        dataset <- replace(dataset, dataset == 'NA', NA) %>%
                   mutate(age = as.numeric(age),
                          weight = as.numeric(weight))
      
        #Converting from pounds to kilograms
        dataset$weight_baseline <- (0.4536 * dataset$weight)
      
        #Select final variables
        dataset <- select(dataset, topmed_subject_id, age, weight_baseline)
      
        return(dataset)
      }
      ```
<a id="weight_baseline_1-sas"></a>
  * ### baseline_common_covariates/weight_baseline_1 -- **SAS**:
    * 2 component_study_variables: `phs000914.v1.pht005253.v1.phv00258680.v1`, `phs000914.v1.pht005253.v1.phv00258684.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          phen_list$source_data$pht005253 %>%
              # Select and rename relevant variables
              transmute(topmed_subject_id,
                  age = Dec_Age,
                  # Recode "NA" string as NA
                  weight_baseline = na_if(Weight, "NA")) %>%
              # Convert character variables to numeric
              mutate_if(is.character, as.numeric) %>%
              # Exclude incomplete records
              na.omit() %>%
              return()
      }
      ```
<a id="weight_baseline_1-vafar"></a>
  * ### baseline_common_covariates/weight_baseline_1 -- **VAFAR**:
    * 2 component_study_variables: `phs000997.v3.pht005688.v3.phv00265921.v3`, `phs000997.v3.pht005688.v3.phv00265927.v3`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset.
        dataset <- phen_list$source_data$pht005688 %>%
                   rename(weight_baseline = weight)
      
        # Substitute the value of 'NA' to missing.
        dataset$age[dataset$age %in% 'NA'] <- NA
        dataset$weight_baseline[dataset$weight_baseline %in% 'NA'] <- NA
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Convert weight unit from pound to kg.
        dataset <- mutate(dataset, weight_baseline = weight_baseline * 0.453592)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="weight_baseline_1-vu_af"></a>
  * ### baseline_common_covariates/weight_baseline_1 -- **VU_AF**:
    * 2 component_study_variables: `phs001032.v4.pht005675.v3.phv00265805.v2`, `phs001032.v4.pht005675.v3.phv00265811.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset.
        dataset <- phen_list$source_data$pht005675 %>%
                   rename(weight_baseline = weight)
      
        # Substitute the value of 'NA' to missing.
        dataset$weight_baseline[dataset$weight_baseline %in% 'NA'] <- NA
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Convert weight unit from pound to kg.
        dataset <- mutate(dataset, weight_baseline = weight_baseline * 0.453592)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="weight_baseline_1-wghs"></a>
  * ### baseline_common_covariates/weight_baseline_1 -- **WGHS**:
    * 2 component_study_variables: `phs001040.v3.pht005682.v3.phv00265848.v3`, `phs001040.v3.pht005682.v3.phv00375261.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Dataset
        dataset <- phen_list$source_data$pht005682
        dataset <- dataset %>%
                   replace(dataset == 'NA', NA) %>%
                   mutate(WEIGHT = as.numeric(WEIGHT),
                          age = as.integer(age))
      
        #Height in cm
        dataset$weight_baseline <- (dataset$WEIGHT * 0.453592)
      
        #Final variables and remove missing
        dataset <- dataset %>%
                   select(topmed_subject_id, weight_baseline, age) %>%
                   na.omit() %>%
                   return()
      }
      ```
<a id="weight_baseline_1-whi"></a>
  * ### baseline_common_covariates/weight_baseline_1 -- **WHI**:
    * 5 component_study_variables: `phs000200.v11.pht000998.v6.phv00078436.v6`, `phs000200.v11.pht000998.v6.phv00078437.v6`, `phs000200.v11.pht001019.v6.phv00079851.v6`, `phs000200.v11.pht001019.v6.phv00079852.v6`, `phs000200.v11.pht001019.v6.phv00079859.v6`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          dataset <- phen_list$source_data[["pht001019"]] %>%
              # Subset to baseline visit
              filter(F80VY == "0") %>%
              # Join datasets by topmed_subject_id
              inner_join(phen_list$source_data[["pht000998"]],
                         by = "topmed_subject_id") %>%
              mutate_at(vars(F2DAYS), funs(as.numeric))
          # Values in F2DAYS above zero are likely errors. They are set to zero here
          ind <- dataset$F2DAYS > 0
          dataset$F2DAYS[ind] <- 0
          # Select and rename relevant variables
          transmute(dataset, topmed_subject_id,
                  # To calculate age at measurement, add baseline age, days since
                  # enrollment, and age since randomization
                  age = as.numeric(AGE) +
                      (as.numeric(F80DAYS) + abs(F2DAYS)) / 365.25,
                  # Convert weight to numeric
                  weight_baseline = as.numeric(WEIGHTX)) %>%
              # Exclude incomplete records
              na.omit() %>%
              return()
      }
      ```