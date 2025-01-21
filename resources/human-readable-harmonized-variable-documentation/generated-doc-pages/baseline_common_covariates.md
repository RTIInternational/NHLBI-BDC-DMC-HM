
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
  * **Study (harmonization_units)**:
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
    
    
<a id="current_smoker_baseline_1"></a>
## baseline_common_covariates: **current_smoker_baseline_1** (current_smoker_baseline)
  Indicates whether subject currently smokes cigarettes.
  * **Study (harmonization_units)**:
    * [ARIC](#current_smoker_baseline_1-aric)
    * [CARDIA](#current_smoker_baseline_1-cardia)
    * [CHS](#current_smoker_baseline_1-chs)
    * [COPDGene](#current_smoker_baseline_1-copdgene)
    * [HCHS_SOL](#current_smoker_baseline_1-hchs_sol)
    * [JHS](#current_smoker_baseline_1-jhs)
    * [MESA](#current_smoker_baseline_1-mesa)
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
    
    
<a id="current_smoker_baseline_1-aric"></a>
  * ### baseline_common_covariates/current_smoker_baseline_1 -- **ARIC Atherosclerosis Risk in Communities (ARIC) Cohort**:
    * 4 component_study_variables
      * _phs000280.v5.pht004063.v2.phv00204712.v1_. dbGap Name: **V1AGE01**, Desc: **Age at visit 1 [Cohort. Visit 1]**, Table: **DERIVE13**.
      * _phs000280.v5.pht004111.v2.phv00207368.v1_. dbGap Name: **HOM28**, Desc: **Have you ever smoked cigarettes? Q28 [Home Interview. HOM. Visit 1]**, Table: **HOM**.
      * _phs000280.v5.pht004111.v2.phv00207370.v1_. dbGap Name: **HOM30**, Desc: **Do you now smoke cigarettes? Q30 [Home Interview. HOM. Visit 1]**, Table: **HOM**.
      * _phs000280.v5.pht004111.v2.phv00207372.v1_. dbGap Name: **HOM32**, Desc: **Number of cigarettes smoked per day. Q32 [Home Interview. HOM. Visit 1]**, Table: **HOM**.
    * **Function:**
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
<a id="current_smoker_baseline_1-cardia"></a>
  * ### baseline_common_covariates/current_smoker_baseline_1 -- **CARDIA CARDIA Cohort**:
    * 3 component_study_variables
      * _phs000285.v3.pht001559.v2.phv00112439.v2_. dbGap Name: **A01AGE2**, Desc: **AGE VERIFY**, Table: **A4F01**.
      * _phs000285.v3.pht001572.v2.phv00113168.v2_. dbGap Name: **A09SMKNW**, Desc: **STILL SMOKES CIGARETTES REGULARLY? Q 2.01**, Table: **A4F09TOB**.
      * _phs000285.v3.pht001573.v2.phv00113213.v2_. dbGap Name: **A10CIGS**, Desc: **SUBJECT HAS SMOKED CIGARETTES. Q 2**, Table: **A4F10**.
    * **Function:**
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
<a id="current_smoker_baseline_1-chs"></a>
  * ### baseline_common_covariates/current_smoker_baseline_1 -- **CHS Cardiovascular Health Study (CHS) Cohort: an NHLBI-funded observational study of risk factors for cardiovascular disease in adults 65 years or older**:
    * 5 component_study_variables
      * _phs000287.v6.pht001450.v1.phv00098844.v1_. dbGap Name: **SMOKE101**, Desc: **SMOKED IN LIFETIME**, Table: **BASE1**.
      * _phs000287.v6.pht001450.v1.phv00098845.v1_. dbGap Name: **SMOKE201**, Desc: **SMOKED CIGARETTES LAST 30 DAYS**, Table: **BASE1**.
      * _phs000287.v6.pht001452.v1.phv00100487.v1_. dbGap Name: **AGEBL**, Desc: **CALCULATED AGE AT BASELINE**, Table: **BASEBOTH**.
      * _phs000287.v6.pht001490.v1.phv00105143.v1_. dbGap Name: **SMOKE101**, Desc: **SMOKED IN LIFETIME**, Table: **YR5NEW**.
      * _phs000287.v6.pht001490.v1.phv00105144.v1_. dbGap Name: **SMOKE201**, Desc: **SMOKED CIGARETTES LAST 30 DAYS**, Table: **YR5NEW**.
    * **Function:**
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
  * ### baseline_common_covariates/current_smoker_baseline_1 -- **COPDGene **:
    * 9 component_study_variables
      * _phs000179.v5.pht002239.v4.phv00159636.v4_. No dbGap metadata available.
      * _phs000179.v5.pht002239.v4.phv00159637.v4_. No dbGap metadata available.
      * _phs000179.v5.pht002239.v4.phv00159640.v4_. No dbGap metadata available.
      * _phs000179.v5.pht002239.v4.phv00159749.v4_. No dbGap metadata available.
      * _phs000179.v5.pht002239.v4.phv00159750.v4_. No dbGap metadata available.
      * _phs000179.v5.pht002239.v4.phv00159754.v4_. No dbGap metadata available.
      * _phs000179.v5.pht002239.v4.phv00159755.v4_. No dbGap metadata available.
      * _phs000179.v5.pht002239.v4.phv00159756.v4_. No dbGap metadata available.
      * _phs000179.v5.pht002239.v4.phv00159836.v4_. No dbGap metadata available.
    * **Function:**
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
<a id="current_smoker_baseline_1-hchs_sol"></a>
  * ### baseline_common_covariates/current_smoker_baseline_1 -- **HCHS_SOL Hispanic Community Health Study /Study of Latinos (HCHS/SOL)**:
    * 5 component_study_variables
      * _phs000810.v1.pht004715.v1.phv00226251.v1_. dbGap Name: **AGE**, Desc: **Age**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
      * _phs000810.v1.pht004715.v1.phv00258106.v1_. dbGap Name: **TBEA1**, Desc: **Smoke at least 100 cigs in lifetime (TBEA1)**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
      * _phs000810.v1.pht004715.v1.phv00258107.v1_. dbGap Name: **TBEA3**, Desc: **Present Smoking Status (TBEA3)**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
      * _phs000810.v1.pht004715.v1.phv00258108.v1_. dbGap Name: **TBEA4**, Desc: **Daily: Cigs per Day - Present (TBEA4)**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
      * _phs000810.v1.pht004715.v1.phv00258110.v1_. dbGap Name: **TBEA5A**, Desc: **Some: Past 30 days - quit smoking 6 months or longer (TBEA5A)**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
    * **Function:**
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
<a id="current_smoker_baseline_1-jhs"></a>
  * ### baseline_common_covariates/current_smoker_baseline_1 -- **JHS Jackson Heart Study (JHS) Cohort**:
    * 3 component_study_variables
      * _phs000286.v5.pht001949.v1.phv00126009.v1_. No dbGap metadata available.
      * _phs000286.v5.pht001977.v1.phv00128496.v1_. dbGap Name: **TOBA1**, Desc: **Q1. Smoked at least 400 cigarettes in your lifetime [Visit 1] [Health Practices: Tobacco Use, TOB]**, Table: **toba**.
      * _phs000286.v5.pht001977.v1.phv00128498.v1_. dbGap Name: **TOBA3**, Desc: **Q3. Do you now smoke cigarettes [Visit 1] [Health Practices: Tobacco Use, TOB]**, Table: **toba**.
    * **Function:**
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
<a id="current_smoker_baseline_1-mesa"></a>
  * ### baseline_common_covariates/current_smoker_baseline_1 -- **MESA Multi-Ethnic Study of Atherosclerosis (MESA) Cohort**:
    * 9 component_study_variables
      * _phs000209.v13.pht001111.v4.phv00082639.v2_. dbGap Name: **age1c**, Desc: **AGE**, Table: **MESA_AirNRExamMain**.
      * _phs000209.v13.pht001111.v4.phv00083243.v1_. dbGap Name: **evsmk1**, Desc: **SMOKED AT LEAST 100 CIGARETTES IN LIFETIME**, Table: **MESA_AirNRExamMain**.
      * _phs000209.v13.pht001111.v4.phv00083245.v1_. dbGap Name: **cursmk1**, Desc: **CIGARETTES: SMOKED IN LAST 30 DAYS**, Table: **MESA_AirNRExamMain**.
      * _phs000209.v13.pht001116.v10.phv00084442.v3_. dbGap Name: **age1c**, Desc: **AGE**, Table: **MESA_Exam1Main**.
      * _phs000209.v13.pht001116.v10.phv00085570.v2_. dbGap Name: **evsmk1**, Desc: **SMOKED AT LEAST 100 CIGARETTES IN LIFETIME**, Table: **MESA_Exam1Main**.
      * _phs000209.v13.pht001116.v10.phv00085572.v2_. dbGap Name: **cursmk1**, Desc: **CIGARETTES: SMOKED IN LAST 30 DAYS**, Table: **MESA_Exam1Main**.
      * _phs000209.v13.pht001121.v3.phv00087071.v1_. dbGap Name: **agefc**, Desc: **AGE**, Table: **MESA_FamilyExamMain**.
      * _phs000209.v13.pht001121.v3.phv00087252.v1_. dbGap Name: **evsmkf**, Desc: **SMOKED 100+ CIGARETTES IN LIFETIME**, Table: **MESA_FamilyExamMain**.
      * _phs000209.v13.pht001121.v3.phv00087254.v1_. dbGap Name: **cursmkf**, Desc: **SMOKED CIGARETTES IN THE LAST 30 DAYS**, Table: **MESA_FamilyExamMain**.
    * **Function:**
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
<a id="current_smoker_baseline_1-whi"></a>
  * ### baseline_common_covariates/current_smoker_baseline_1 -- **WHI Women's Health Initiative**:
    * 5 component_study_variables
      * _phs000200.v11.pht000998.v6.phv00078436.v6_. dbGap Name: **F2DAYS**, Desc: **F2 Days since randomization**, Table: **f2_rel1**.
      * _phs000200.v11.pht000998.v6.phv00078437.v6_. dbGap Name: **AGE**, Desc: **Age at screening**, Table: **f2_rel1**.
      * _phs000200.v11.pht001003.v6.phv00078773.v6_. dbGap Name: **F34DAYS**, Desc: **F34 Days since randomization/enrollment**, Table: **f34_rel2**.
      * _phs000200.v11.pht001003.v6.phv00078774.v6_. dbGap Name: **SMOKEVR**, Desc: **Smoked at least 100 cigarettes ever**, Table: **f34_rel2**.
      * _phs000200.v11.pht001003.v6.phv00078776.v6_. dbGap Name: **SMOKNOW**, Desc: **Smoke cigarettes now**, Table: **f34_rel2**.
    * **Function:**
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
  * **Study (harmonization_units)**:
    * [ARIC](#ever_smoker_baseline_1-aric)
    * [CARDIA](#ever_smoker_baseline_1-cardia)
    * [CHS](#ever_smoker_baseline_1-chs)
    * [COPDGene](#ever_smoker_baseline_1-copdgene)
    * [HCHS_SOL](#ever_smoker_baseline_1-hchs_sol)
    * [JHS](#ever_smoker_baseline_1-jhs)
    * [MESA](#ever_smoker_baseline_1-mesa)
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
  * ### baseline_common_covariates/ever_smoker_baseline_1 -- **ARIC Atherosclerosis Risk in Communities (ARIC) Cohort**:
    * 6 component_study_variables
      * _phs000280.v5.pht004063.v2.phv00204712.v1_. dbGap Name: **V1AGE01**, Desc: **Age at visit 1 [Cohort. Visit 1]**, Table: **DERIVE13**.
      * _phs000280.v5.pht004111.v2.phv00207368.v1_. dbGap Name: **HOM28**, Desc: **Have you ever smoked cigarettes? Q28 [Home Interview. HOM. Visit 1]**, Table: **HOM**.
      * _phs000280.v5.pht004111.v2.phv00207369.v1_. dbGap Name: **HOM29**, Desc: **How old were you when you first started regular cigarette smoking? Q29 [Home Interview. HOM. Visit 1]**, Table: **HOM**.
      * _phs000280.v5.pht004111.v2.phv00207370.v1_. dbGap Name: **HOM30**, Desc: **Do you now smoke cigarettes? Q30 [Home Interview. HOM. Visit 1]**, Table: **HOM**.
      * _phs000280.v5.pht004111.v2.phv00207375.v1_. dbGap Name: **HOM35**, Desc: **On the average of the entire time you smoked, how many cigarettes did you usually smoke per day? Q35 [Home Interview. HOM. Visit 1]**, Table: **HOM**.
      * _phs000280.v5.pht004111.v2.phv00207376.v1_. dbGap Name: **HOM36**, Desc: **(Do/did) you inhale the cigarette smoke? Q36 [Home Interview. HOM. Visit 1]**, Table: **HOM**.
    * **Function:**
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
<a id="ever_smoker_baseline_1-cardia"></a>
  * ### baseline_common_covariates/ever_smoker_baseline_1 -- **CARDIA CARDIA Cohort**:
    * 2 component_study_variables
      * _phs000285.v3.pht001559.v2.phv00112439.v2_. dbGap Name: **A01AGE2**, Desc: **AGE VERIFY**, Table: **A4F01**.
      * _phs000285.v3.pht001573.v2.phv00113213.v2_. dbGap Name: **A10CIGS**, Desc: **SUBJECT HAS SMOKED CIGARETTES. Q 2**, Table: **A4F10**.
    * **Function:**
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
<a id="ever_smoker_baseline_1-chs"></a>
  * ### baseline_common_covariates/ever_smoker_baseline_1 -- **CHS Cardiovascular Health Study (CHS) Cohort: an NHLBI-funded observational study of risk factors for cardiovascular disease in adults 65 years or older**:
    * 9 component_study_variables
      * _phs000287.v6.pht001450.v1.phv00098844.v1_. dbGap Name: **SMOKE101**, Desc: **SMOKED IN LIFETIME**, Table: **BASE1**.
      * _phs000287.v6.pht001450.v1.phv00098845.v1_. dbGap Name: **SMOKE201**, Desc: **SMOKED CIGARETTES LAST 30 DAYS**, Table: **BASE1**.
      * _phs000287.v6.pht001450.v1.phv00099157.v1_. dbGap Name: **SMKAGE08**, Desc: **HOW OLD WHEN YOU STARTED TO SMOKE**, Table: **BASE1**.
      * _phs000287.v6.pht001450.v1.phv00099159.v1_. dbGap Name: **AMOUNT08**, Desc: **HOW MANY DID YOU SMOKE PER DAY ON AVER (99=UNKNOWN)**, Table: **BASE1**.
      * _phs000287.v6.pht001452.v1.phv00100487.v1_. dbGap Name: **AGEBL**, Desc: **CALCULATED AGE AT BASELINE**, Table: **BASEBOTH**.
      * _phs000287.v6.pht001490.v1.phv00105143.v1_. dbGap Name: **SMOKE101**, Desc: **SMOKED IN LIFETIME**, Table: **YR5NEW**.
      * _phs000287.v6.pht001490.v1.phv00105144.v1_. dbGap Name: **SMOKE201**, Desc: **SMOKED CIGARETTES LAST 30 DAYS**, Table: **YR5NEW**.
      * _phs000287.v6.pht001490.v1.phv00106198.v1_. dbGap Name: **SMKAGE58**, Desc: **HOW OLD WHEN YOU STARTED TO SMOKE**, Table: **YR5NEW**.
      * _phs000287.v6.pht001490.v1.phv00106200.v1_. dbGap Name: **AMOUNT58**, Desc: **HOW MANY DID YOU SMOKE PER DAY ON AVER.**, Table: **YR5NEW**.
    * **Function:**
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
  * ### baseline_common_covariates/ever_smoker_baseline_1 -- **COPDGene **:
    * 16 component_study_variables
      * _phs000179.v5.pht002239.v4.phv00159636.v4_. No dbGap metadata available.
      * _phs000179.v5.pht002239.v4.phv00159637.v4_. No dbGap metadata available.
      * _phs000179.v5.pht002239.v4.phv00159638.v4_. No dbGap metadata available.
      * _phs000179.v5.pht002239.v4.phv00159639.v4_. No dbGap metadata available.
      * _phs000179.v5.pht002239.v4.phv00159640.v4_. No dbGap metadata available.
      * _phs000179.v5.pht002239.v4.phv00159641.v4_. No dbGap metadata available.
      * _phs000179.v5.pht002239.v4.phv00159747.v4_. No dbGap metadata available.
      * _phs000179.v5.pht002239.v4.phv00159748.v4_. No dbGap metadata available.
      * _phs000179.v5.pht002239.v4.phv00159749.v4_. No dbGap metadata available.
      * _phs000179.v5.pht002239.v4.phv00159750.v4_. No dbGap metadata available.
      * _phs000179.v5.pht002239.v4.phv00159752.v4_. No dbGap metadata available.
      * _phs000179.v5.pht002239.v4.phv00159754.v4_. No dbGap metadata available.
      * _phs000179.v5.pht002239.v4.phv00159755.v4_. No dbGap metadata available.
      * _phs000179.v5.pht002239.v4.phv00159756.v4_. No dbGap metadata available.
      * _phs000179.v5.pht002239.v4.phv00159836.v4_. No dbGap metadata available.
      * _phs000179.v5.pht002239.v4.phv00169388.v3_. No dbGap metadata available.
    * **Function:**
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
<a id="ever_smoker_baseline_1-hchs_sol"></a>
  * ### baseline_common_covariates/ever_smoker_baseline_1 -- **HCHS_SOL Hispanic Community Health Study /Study of Latinos (HCHS/SOL)**:
    * 5 component_study_variables
      * _phs000810.v1.pht004715.v1.phv00226251.v1_. dbGap Name: **AGE**, Desc: **Age**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
      * _phs000810.v1.pht004715.v1.phv00258106.v1_. dbGap Name: **TBEA1**, Desc: **Smoke at least 100 cigs in lifetime (TBEA1)**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
      * _phs000810.v1.pht004715.v1.phv00258107.v1_. dbGap Name: **TBEA3**, Desc: **Present Smoking Status (TBEA3)**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
      * _phs000810.v1.pht004715.v1.phv00258108.v1_. dbGap Name: **TBEA4**, Desc: **Daily: Cigs per Day - Present (TBEA4)**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
      * _phs000810.v1.pht004715.v1.phv00258110.v1_. dbGap Name: **TBEA5A**, Desc: **Some: Past 30 days - quit smoking 6 months or longer (TBEA5A)**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
    * **Function:**
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
<a id="ever_smoker_baseline_1-jhs"></a>
  * ### baseline_common_covariates/ever_smoker_baseline_1 -- **JHS Jackson Heart Study (JHS) Cohort**:
    * 7 component_study_variables
      * _phs000286.v5.pht001949.v1.phv00126009.v1_. No dbGap metadata available.
      * _phs000286.v5.pht001977.v1.phv00128496.v1_. dbGap Name: **TOBA1**, Desc: **Q1. Smoked at least 400 cigarettes in your lifetime [Visit 1] [Health Practices: Tobacco Use, TOB]**, Table: **toba**.
      * _phs000286.v5.pht001977.v1.phv00128498.v1_. dbGap Name: **TOBA3**, Desc: **Q3. Do you now smoke cigarettes [Visit 1] [Health Practices: Tobacco Use, TOB]**, Table: **toba**.
      * _phs000286.v5.pht001977.v1.phv00128502.v1_. dbGap Name: **TOBA6**, Desc: **Q6. Do you smoke more frequently during the first few hours after awakening than during the rest of the day? [Visit 1] [Health Practices: Tobacco Use, TOB]**, Table: **toba**.
      * _phs000286.v5.pht001977.v1.phv00128503.v1_. dbGap Name: **TOBA7**, Desc: **Q7. How soon after you wake up do you smoke your first cigarette? [Visit 1] [Health Practices: Tobacco Use, TOB]**, Table: **toba**.
      * _phs000286.v5.pht001977.v1.phv00128506.v1_. dbGap Name: **TOBA10**, Desc: **Q10. Do you smoke if you are so ill that you are in bed most of the day? [Visit 1] [Health Practices: Tobacco Use, TOB]**, Table: **toba**.
      * _phs000286.v5.pht001977.v1.phv00128507.v1_. dbGap Name: **TOBA11**, Desc: **Q11. On the average for the entire time you have smoked, how many cigarettes did you smoke usually per day? [Visit 1] [Health Practices: Tobacco Use, TOB]**, Table: **toba**.
    * **Function:**
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
<a id="ever_smoker_baseline_1-mesa"></a>
  * ### baseline_common_covariates/ever_smoker_baseline_1 -- **MESA Multi-Ethnic Study of Atherosclerosis (MESA) Cohort**:
    * 12 component_study_variables
      * _phs000209.v13.pht001111.v4.phv00082639.v2_. dbGap Name: **age1c**, Desc: **AGE**, Table: **MESA_AirNRExamMain**.
      * _phs000209.v13.pht001111.v4.phv00083243.v1_. dbGap Name: **evsmk1**, Desc: **SMOKED AT LEAST 100 CIGARETTES IN LIFETIME**, Table: **MESA_AirNRExamMain**.
      * _phs000209.v13.pht001111.v4.phv00083245.v1_. dbGap Name: **cursmk1**, Desc: **CIGARETTES: SMOKED IN LAST 30 DAYS**, Table: **MESA_AirNRExamMain**.
      * _phs000209.v13.pht001111.v4.phv00083247.v1_. dbGap Name: **cigsday1**, Desc: **CIGARETTES: AVERAGE # SMOKED PER DAY**, Table: **MESA_AirNRExamMain**.
      * _phs000209.v13.pht001116.v10.phv00084442.v3_. dbGap Name: **age1c**, Desc: **AGE**, Table: **MESA_Exam1Main**.
      * _phs000209.v13.pht001116.v10.phv00085570.v2_. dbGap Name: **evsmk1**, Desc: **SMOKED AT LEAST 100 CIGARETTES IN LIFETIME**, Table: **MESA_Exam1Main**.
      * _phs000209.v13.pht001116.v10.phv00085572.v2_. dbGap Name: **cursmk1**, Desc: **CIGARETTES: SMOKED IN LAST 30 DAYS**, Table: **MESA_Exam1Main**.
      * _phs000209.v13.pht001116.v10.phv00085574.v2_. dbGap Name: **cigsday1**, Desc: **CIGARETTES: AVERAGE # SMOKED PER DAY**, Table: **MESA_Exam1Main**.
      * _phs000209.v13.pht001121.v3.phv00087071.v1_. dbGap Name: **agefc**, Desc: **AGE**, Table: **MESA_FamilyExamMain**.
      * _phs000209.v13.pht001121.v3.phv00087252.v1_. dbGap Name: **evsmkf**, Desc: **SMOKED 100+ CIGARETTES IN LIFETIME**, Table: **MESA_FamilyExamMain**.
      * _phs000209.v13.pht001121.v3.phv00087254.v1_. dbGap Name: **cursmkf**, Desc: **SMOKED CIGARETTES IN THE LAST 30 DAYS**, Table: **MESA_FamilyExamMain**.
      * _phs000209.v13.pht001121.v3.phv00087256.v1_. dbGap Name: **cigsdayf**, Desc: **AVERAGE NUMBER OF CIGARETTES SMOKED PER DAY**, Table: **MESA_FamilyExamMain**.
    * **Function:**
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
<a id="ever_smoker_baseline_1-whi"></a>
  * ### baseline_common_covariates/ever_smoker_baseline_1 -- **WHI Women's Health Initiative**:
    * 4 component_study_variables
      * _phs000200.v11.pht000998.v6.phv00078436.v6_. dbGap Name: **F2DAYS**, Desc: **F2 Days since randomization**, Table: **f2_rel1**.
      * _phs000200.v11.pht000998.v6.phv00078437.v6_. dbGap Name: **AGE**, Desc: **Age at screening**, Table: **f2_rel1**.
      * _phs000200.v11.pht001003.v6.phv00078773.v6_. dbGap Name: **F34DAYS**, Desc: **F34 Days since randomization/enrollment**, Table: **f34_rel2**.
      * _phs000200.v11.pht001003.v6.phv00078774.v6_. dbGap Name: **SMOKEVR**, Desc: **Smoked at least 100 cigarettes ever**, Table: **f34_rel2**.
    * **Function:**
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
  * **Study (harmonization_units)**:
    * [ARIC](#height_baseline_1-aric)
    * [CARDIA](#height_baseline_1-cardia)
    * [CHS](#height_baseline_1-chs)
    * [COPDGene](#height_baseline_1-copdgene)
    * [HCHS_SOL](#height_baseline_1-hchs_sol)
    * [JHS](#height_baseline_1-jhs)
    * [MESA](#height_baseline_1-mesa)
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
    
    
    
<a id="height_baseline_1-aric"></a>
  * ### baseline_common_covariates/height_baseline_1 -- **ARIC Atherosclerosis Risk in Communities (ARIC) Cohort**:
    * 2 component_study_variables
      * _phs000280.v5.pht004032.v2.phv00203151.v1_. dbGap Name: **ANTA01**, Desc: **[Height and weight]. Standing height (to the nearest cm). Q1 [Anthropometry Form, ANTA. Visit 1]**, Table: **ANTA**.
      * _phs000280.v5.pht004063.v2.phv00204712.v1_. dbGap Name: **V1AGE01**, Desc: **Age at visit 1 [Cohort. Visit 1]**, Table: **DERIVE13**.
    * **Function:**
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
<a id="height_baseline_1-cardia"></a>
  * ### baseline_common_covariates/height_baseline_1 -- **CARDIA CARDIA Cohort**:
    * 2 component_study_variables
      * _phs000285.v3.pht001559.v2.phv00112439.v2_. dbGap Name: **A01AGE2**, Desc: **AGE VERIFY**, Table: **A4F01**.
      * _phs000285.v3.pht001583.v2.phv00113634.v2_. dbGap Name: **A20HGT**, Desc: **PT'S HGT, CM. Q 1**, Table: **A4F20**.
    * **Function:**
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
<a id="height_baseline_1-chs"></a>
  * ### baseline_common_covariates/height_baseline_1 -- **CHS Cardiovascular Health Study (CHS) Cohort: an NHLBI-funded observational study of risk factors for cardiovascular disease in adults 65 years or older**:
    * 2 component_study_variables
      * _phs000287.v6.pht001452.v1.phv00100382.v1_. dbGap Name: **STHT13**, Desc: **STANDING HEIGHT - CM**, Table: **BASEBOTH**.
      * _phs000287.v6.pht001452.v1.phv00100487.v1_. dbGap Name: **AGEBL**, Desc: **CALCULATED AGE AT BASELINE**, Table: **BASEBOTH**.
    * **Function:**
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
  * ### baseline_common_covariates/height_baseline_1 -- **COPDGene **:
    * 2 component_study_variables
      * _phs000179.v5.pht002239.v4.phv00159592.v4_. No dbGap metadata available.
      * _phs000179.v5.pht002239.v4.phv00159836.v4_. No dbGap metadata available.
    * **Function:**
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
<a id="height_baseline_1-hchs_sol"></a>
  * ### baseline_common_covariates/height_baseline_1 -- **HCHS_SOL Hispanic Community Health Study /Study of Latinos (HCHS/SOL)**:
    * 2 component_study_variables
      * _phs000810.v1.pht004715.v1.phv00226251.v1_. dbGap Name: **AGE**, Desc: **Age**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
      * _phs000810.v1.pht004715.v1.phv00226281.v1_. dbGap Name: **HEIGHT**, Desc: **Height (corrected)**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
    * **Function:**
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
<a id="height_baseline_1-jhs"></a>
  * ### baseline_common_covariates/height_baseline_1 -- **JHS Jackson Heart Study (JHS) Cohort**:
    * 2 component_study_variables
      * _phs000286.v5.pht001940.v1.phv00125860.v1_. dbGap Name: **antv1**, Desc: **A. Height and weight. 1: Standing height to nearest cm [Visit 1]**, Table: **antv**.
      * _phs000286.v5.pht001949.v1.phv00126009.v1_. No dbGap metadata available.
    * **Function:**
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
<a id="height_baseline_1-mesa"></a>
  * ### baseline_common_covariates/height_baseline_1 -- **MESA Multi-Ethnic Study of Atherosclerosis (MESA) Cohort**:
    * 6 component_study_variables
      * _phs000209.v13.pht001111.v4.phv00082639.v2_. dbGap Name: **age1c**, Desc: **AGE**, Table: **MESA_AirNRExamMain**.
      * _phs000209.v13.pht001111.v4.phv00082683.v1_. dbGap Name: **htcm1**, Desc: **HEIGHT (cm)**, Table: **MESA_AirNRExamMain**.
      * _phs000209.v13.pht001116.v10.phv00084442.v3_. dbGap Name: **age1c**, Desc: **AGE**, Table: **MESA_Exam1Main**.
      * _phs000209.v13.pht001116.v10.phv00084482.v2_. dbGap Name: **htcm1**, Desc: **HEIGHT (cm)**, Table: **MESA_Exam1Main**.
      * _phs000209.v13.pht001121.v3.phv00087071.v1_. dbGap Name: **agefc**, Desc: **AGE**, Table: **MESA_FamilyExamMain**.
      * _phs000209.v13.pht001121.v3.phv00087078.v1_. dbGap Name: **htcmf**, Desc: **HEIGHT (cm)**, Table: **MESA_FamilyExamMain**.
    * **Function:**
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
<a id="height_baseline_1-whi"></a>
  * ### baseline_common_covariates/height_baseline_1 -- **WHI Women's Health Initiative**:
    * 5 component_study_variables
      * _phs000200.v11.pht000998.v6.phv00078436.v6_. dbGap Name: **F2DAYS**, Desc: **F2 Days since randomization**, Table: **f2_rel1**.
      * _phs000200.v11.pht000998.v6.phv00078437.v6_. dbGap Name: **AGE**, Desc: **Age at screening**, Table: **f2_rel1**.
      * _phs000200.v11.pht001019.v6.phv00079851.v6_. dbGap Name: **F80VY**, Desc: **Visit year**, Table: **f80_rel1**.
      * _phs000200.v11.pht001019.v6.phv00079852.v6_. dbGap Name: **F80DAYS**, Desc: **F80 Days since randomization/enrollment**, Table: **f80_rel1**.
      * _phs000200.v11.pht001019.v6.phv00079858.v6_. dbGap Name: **HEIGHTX**, Desc: **F80 Height cm**, Table: **f80_rel1**.
    * **Function:**
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
  * **Study (harmonization_units)**:
    * [ARIC](#weight_baseline_1-aric)
    * [CARDIA](#weight_baseline_1-cardia)
    * [CHS](#weight_baseline_1-chs)
    * [COPDGene](#weight_baseline_1-copdgene)
    * [HCHS_SOL](#weight_baseline_1-hchs_sol)
    * [JHS](#weight_baseline_1-jhs)
    * [MESA](#weight_baseline_1-mesa)
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
    
    
<a id="weight_baseline_1-aric"></a>
  * ### baseline_common_covariates/weight_baseline_1 -- **ARIC Atherosclerosis Risk in Communities (ARIC) Cohort**:
    * 2 component_study_variables
      * _phs000280.v5.pht004032.v2.phv00203154.v1_. dbGap Name: **ANTA04**, Desc: **[Height and weight]. Weight (to the nearest lb). Q4 [Anthropometry Form, ANTA. Visit 1]**, Table: **ANTA**.
      * _phs000280.v5.pht004063.v2.phv00204712.v1_. dbGap Name: **V1AGE01**, Desc: **Age at visit 1 [Cohort. Visit 1]**, Table: **DERIVE13**.
    * **Function:**
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
<a id="weight_baseline_1-cardia"></a>
  * ### baseline_common_covariates/weight_baseline_1 -- **CARDIA CARDIA Cohort**:
    * 2 component_study_variables
      * _phs000285.v3.pht001559.v2.phv00112439.v2_. dbGap Name: **A01AGE2**, Desc: **AGE VERIFY**, Table: **A4F01**.
      * _phs000285.v3.pht001583.v2.phv00113635.v2_. dbGap Name: **A20WGT**, Desc: **PT'S WGT, LBS. Q 2**, Table: **A4F20**.
    * **Function:**
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
<a id="weight_baseline_1-chs"></a>
  * ### baseline_common_covariates/weight_baseline_1 -- **CHS Cardiovascular Health Study (CHS) Cohort: an NHLBI-funded observational study of risk factors for cardiovascular disease in adults 65 years or older**:
    * 2 component_study_variables
      * _phs000287.v6.pht001452.v1.phv00100383.v1_. dbGap Name: **WEIGHT13**, Desc: **WEIGHT - LBS**, Table: **BASEBOTH**.
      * _phs000287.v6.pht001452.v1.phv00100487.v1_. dbGap Name: **AGEBL**, Desc: **CALCULATED AGE AT BASELINE**, Table: **BASEBOTH**.
    * **Function:**
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
  * ### baseline_common_covariates/weight_baseline_1 -- **COPDGene **:
    * 2 component_study_variables
      * _phs000179.v5.pht002239.v4.phv00159591.v4_. No dbGap metadata available.
      * _phs000179.v5.pht002239.v4.phv00159836.v4_. No dbGap metadata available.
    * **Function:**
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
<a id="weight_baseline_1-hchs_sol"></a>
  * ### baseline_common_covariates/weight_baseline_1 -- **HCHS_SOL Hispanic Community Health Study /Study of Latinos (HCHS/SOL)**:
    * 2 component_study_variables
      * _phs000810.v1.pht004715.v1.phv00226251.v1_. dbGap Name: **AGE**, Desc: **Age**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
      * _phs000810.v1.pht004715.v1.phv00253218.v1_. dbGap Name: **ANTA4**, Desc: **Weight (kg) (ANTA4)**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
    * **Function:**
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
<a id="weight_baseline_1-jhs"></a>
  * ### baseline_common_covariates/weight_baseline_1 -- **JHS Jackson Heart Study (JHS) Cohort**:
    * 2 component_study_variables
      * _phs000286.v5.pht001940.v1.phv00125861.v1_. dbGap Name: **antv2**, Desc: **A. Height and weight. 2: Weight to nearest kilogram [Visit 1]**, Table: **antv**.
      * _phs000286.v5.pht001949.v1.phv00126009.v1_. No dbGap metadata available.
    * **Function:**
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
<a id="weight_baseline_1-mesa"></a>
  * ### baseline_common_covariates/weight_baseline_1 -- **MESA Multi-Ethnic Study of Atherosclerosis (MESA) Cohort**:
    * 6 component_study_variables
      * _phs000209.v13.pht001111.v4.phv00082639.v2_. dbGap Name: **age1c**, Desc: **AGE**, Table: **MESA_AirNRExamMain**.
      * _phs000209.v13.pht001111.v4.phv00082685.v1_. dbGap Name: **wtlb1**, Desc: **WEIGHT (lbs)**, Table: **MESA_AirNRExamMain**.
      * _phs000209.v13.pht001116.v10.phv00084442.v3_. dbGap Name: **age1c**, Desc: **AGE**, Table: **MESA_Exam1Main**.
      * _phs000209.v13.pht001116.v10.phv00084484.v2_. dbGap Name: **wtlb1**, Desc: **WEIGHT (lbs)**, Table: **MESA_Exam1Main**.
      * _phs000209.v13.pht001121.v3.phv00087071.v1_. dbGap Name: **agefc**, Desc: **AGE**, Table: **MESA_FamilyExamMain**.
      * _phs000209.v13.pht001121.v3.phv00087079.v1_. dbGap Name: **wtlbf**, Desc: **WEIGHT (lbs)**, Table: **MESA_FamilyExamMain**.
    * **Function:**
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
<a id="weight_baseline_1-whi"></a>
  * ### baseline_common_covariates/weight_baseline_1 -- **WHI Women's Health Initiative**:
    * 5 component_study_variables
      * _phs000200.v11.pht000998.v6.phv00078436.v6_. dbGap Name: **F2DAYS**, Desc: **F2 Days since randomization**, Table: **f2_rel1**.
      * _phs000200.v11.pht000998.v6.phv00078437.v6_. dbGap Name: **AGE**, Desc: **Age at screening**, Table: **f2_rel1**.
      * _phs000200.v11.pht001019.v6.phv00079851.v6_. dbGap Name: **F80VY**, Desc: **Visit year**, Table: **f80_rel1**.
      * _phs000200.v11.pht001019.v6.phv00079852.v6_. dbGap Name: **F80DAYS**, Desc: **F80 Days since randomization/enrollment**, Table: **f80_rel1**.
      * _phs000200.v11.pht001019.v6.phv00079859.v6_. dbGap Name: **WEIGHTX**, Desc: **F80 Weight kg**, Table: **f80_rel1**.
    * **Function:**
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