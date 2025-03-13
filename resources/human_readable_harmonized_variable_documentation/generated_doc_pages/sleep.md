
# sleep

### Variables in this section:
* [sleep_duration_1](#sleep_duration_1)

<a id="sleep_duration_1"></a>
## sleep: **sleep_duration_1** (sleep_duration)
  Usual amount of time slept per day.
  * **Study (harmonization_units)**:
    * [ARIC](#sleep_duration_1-aric)
    * [CARDIA](#sleep_duration_1-cardia)
    * [CHS](#sleep_duration_1-chs)
    * [HCHS_SOL](#sleep_duration_1-hchs_sol)
    * [JHS](#sleep_duration_1-jhs)
    * [MESA](#sleep_duration_1-mesa)
    * [WHI](#sleep_duration_1-whi)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: hours/day, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2019-09-03 17:10:19
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C0424574
  * **DCC Harmonization Comments**:

    ### Harmonization process
    
    This variable was harmonized either by converting the component study variables to the appropriate unit of measure, or by calculating from component study variables using the formula `sleep duration = waketime - bedtime` or `sleep duration = sleep hours + sleep minutes / 60`. All component study variables were self-reported. Sleep duration was recorded at multiple visits for some study subjects; one observation per subject was selected for the harmonized variable.
    
    #### ARIC
    
    Observations for subjects with sleep duration measured at multiple exams were selected from the largest visit in which that subject was represented (i.e. the visit with the greatest number of observations).
    
    #### CFS
    
    Observations for subjects with sleep duration measured at multiple exams were selected from most- to least-recent.
    
    #### FHS
    
    Observations for subjects with sleep duration measured at multiple exams were selected from the largest visit in which that subject was represented.
    
    #### WHI
    
    Values in the component variable used for harmonization were Winsorized at five and 10 hours at the lower and upper ends, respectively.
    
    #### Exam/visit for sleep duration measurements
    
    | Study or subcohort | Visit |
    |---------|----------|
    | ARIC | Visit 5; Sleep Health Heart Study |
    | Cardia | Year 15 |
    | CFS | Visit 1; Visit 2; Visit 3; Visit 5 |
    | CHS | SHHS 1 |
    | FHS_Gen3 | Exam 1 |
    | FHS_Offspring | Exam 2; Exam 4; Exam 6; Exam 7; Exam 8; Exam 9; SHHS|
    | FHS_Omni1 | Exam 4|
    | FHS_Original | Exam 12; Exam 20 |
    | HCHS/SOL | Visit 1 |
    | JHS | Visit 1 |
    | MESA | Exam 4 |
    | WHI | Year 0 |
    
    ### QC checks
    
    We compared self-reported sleep duration and sleep duration calculated from the formula `sleep duration = waketime - bedtime`, for subjects with both measurements. There are differences between the measurements, but not enough to suggest that there are errors with the harmonization algorithm.
    
    Some subjects in *_CARDIA_*, *_CHS_*, *_FHS_* Original Cohort, *_HCHS/SOL_* and *_MESA_* reported usual sleep duration of zero or greater than 24 hours per day and were removed from the harmonized dataset.
    
<a id="sleep_duration_1-aric"></a>
  * ### sleep/sleep_duration_1 -- **ARIC Atherosclerosis Risk in Communities (ARIC) Cohort**:
    * 10 component_study_variables
      * _phs000280.v5.pht004228.v2.phv00214261.v1_
        * No dbGap metadata available
         * varId _phv00214261_ not found in PIC-SURE data dictionary
      * _phs000280.v5.pht004228.v2.phv00214262.v1_
        * No dbGap metadata available
         * varId _phv00214262_ not found in PIC-SURE data dictionary
      * _phs000280.v5.pht004228.v2.phv00214263.v1_
        * No dbGap metadata available
         * varId _phv00214263_ not found in PIC-SURE data dictionary
      * _phs000280.v5.pht004228.v2.phv00214268.v1_
        * No dbGap metadata available
         * varId _phv00214268_ not found in PIC-SURE data dictionary
      * _phs000280.v5.pht004228.v2.phv00214269.v1_
        * No dbGap metadata available
         * varId _phv00214269_ not found in PIC-SURE data dictionary
      * _phs000280.v5.pht004228.v2.phv00214270.v1_
        * No dbGap metadata available
         * varId _phv00214270_ not found in PIC-SURE data dictionary
      * _phs000280.v5.pht004228.v2.phv00214274.v1_
        * No dbGap metadata available
         * varId _phv00214274_ not found in PIC-SURE data dictionary
      * _phs000280.v5.pht004228.v2.phv00215388.v1_
        * No dbGap metadata available
         * varId _phv00215388_ not found in PIC-SURE data dictionary
      * _phs000280.v5.pht006431.v1.phv00295623.v1_
        * No dbGap metadata available
         * varId _phv00295623_ not found in PIC-SURE data dictionary
      * _phs000280.v5.pht006479.v1.phv00298019.v1_
        * dbGap name: **RSE21**
        * dbGap desc: **F. Sleep. Q21. Hours of sleep in past month [Respiratory Symptoms Form. RSE. Visit 5]**
        * dbGap table: **RSE**
         * varId _phv00298019_ not found in PIC-SURE data dictionary
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(lubridate)
        library(tidyr)
        source_data <- phen_list$source_data
        # Create date-time format string.
        fmt <- "IMp"
      
        # Join Visit 5 age data and sleep data.
        v5 <- inner_join(source_data$pht006431, source_data$pht006479, "topmed_subject_id") %>%
          # Convert character vectors to numeric.
          mutate_if(is.character, as.numeric) %>%
          # Change variable names.
          dplyr::rename(sleep_duration = RSE21, age = AGE_STAGE_1) %>%
          # Exclude rows with missing data.
          na.omit()
      
        shhs <- source_data$pht004228
        # Recode AM/PM variables.
        shhs_calc <- mutate_at(shhs, vars(TFAWDA02, TWUWDA02),
                  function(x) case_when(x == "1" ~ "AM", x == "2" ~ "PM")) %>%
          # Subset to rows where hour and AM/PM variables are non-missing.
          filter(!is.na(TFAWDH02), !is.na(TWUWDH02), !is.na(TFAWDA02), !is.na(TWUWDA02)) %>%
          # Treat missing "minutes" portion as 0.
          mutate_at(vars(TFAWDM02, TWUWDM02), function(x) case_when(is.na(x) ~ "0", TRUE ~ x)) %>%
          # Create bedtime and waketime variables as date_time.
          mutate(bt = paste0(TFAWDH02, ":", TFAWDM02, TFAWDA02) %>% parse_date_time(fmt),
                 wt = paste0(TWUWDH02, ":", TWUWDM02, TWUWDA02) %>% parse_date_time(fmt)) %>%
          # Calculate sleep duration form bedtime and waketime.
          mutate(offset = case_when(bt > wt ~ dhours(24), bt < wt ~ dhours(0)),
                 sleep_duration = as.numeric(wt - bt + offset) / 3600) %>%
          # Select necessary variables.
          select(topmed_subject_id, sleep_duration, AGE_S1) %>%
          # Exclude rows with missing data.
          na.omit()
      
        # Select SHHS variables.
        dat <- select(shhs, topmed_subject_id, sleep_duration = HRSWD02, AGE_S1) %>%
          # Exclude rows with missing data.
          na.omit() %>%
          # Combine with calculated sleep duration.
          rbind(shhs_calc) %>%
          # Rename age variable.
          dplyr::rename(age = AGE_S1) %>%
          # Combine Visit 5 and SHHS.
          rbind(v5) %>%
          # Group by subject.
          group_by(topmed_subject_id) %>%
          # Subset to first observation for each subject.
          filter(row_number() == 1) %>%
          # Convert sleep duration and age to numeric.
          mutate_at(vars(sleep_duration, age), as.numeric)
      
        return(dat)
      }
      ```
<a id="sleep_duration_1-cardia"></a>
  * ### sleep/sleep_duration_1 -- **CARDIA CARDIA Cohort**:
    * 2 component_study_variables
      * _phs000285.v3.pht001839.v2.phv00120534.v2_
        * dbGap name: **F67SLPHR**
        * dbGap desc: **PAST MONTH AVG SLEEPING HOURS. Q 7**
        * dbGap table: **F1F67**
         * varId _phv00120534_ not found in PIC-SURE data dictionary
      * _phs000285.v3.pht001851.v2.phv00120748.v2_
        * dbGap name: **EX6_AGE**
        * dbGap desc: **CALCULATED AGE AT EXAM 6**
        * dbGap table: **F1REF**
         * varId _phv00120748_ not found in PIC-SURE data dictionary
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        source_data <- phen_list$source_data
        # Join age data with sleep data.
        dat <- inner_join(source_data$pht001839, source_data$pht001851, "topmed_subject_id") %>%
          # Convert character vectors to numeric.
          mutate_if(is.character, as.numeric) %>%
          # Rename harmonized variables.
          rename(sleep_duration = F67SLPHR, age = EX6_AGE) %>%
          # Exclude rows with missing data.
          na.omit() %>%
          # Keep subjects with sleep duration less than 24 hours.
          filter(sleep_duration < 24)
        return(dat)
      }
      ```
<a id="sleep_duration_1-chs"></a>
  * ### sleep/sleep_duration_1 -- **CHS Cardiovascular Health Study (CHS) Cohort: an NHLBI-funded observational study of risk factors for cardiovascular disease in adults 65 years or older**:
    * 2 component_study_variables
      * _phs000287.v6.pht001460.v1.phv00100694.v1_
        * dbGap name: **AGE_S1**
        * dbGap desc: **Age = StdyDtqa - DOB**
        * dbGap table: **CHS_SHHS1_15K**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000287.v6.pht001460.v1.phv00100712.v1_
        * dbGap name: **HRSWD02**
        * dbGap desc: **How many hours of sleep do you usually get at night (or your main sleep period) on weekdays or workdays?**
        * dbGap table: **CHS_SHHS1_15K**
         * No permissible values listed in PIC-SURE data dictionary
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        # Join age data with sleep data.
        dat <- phen_list$source_data$pht001460 %>%
          # Rename variables and convert to numeric.
          transmute(topmed_subject_id, age = as.numeric(AGE_S1),
                    sleep_duration = as.numeric(HRSWD02)) %>%
          # Exclude rows with missing data.
          na.omit() %>%
          # Filter out observations where sleep_duration is zero or less.
          filter(sleep_duration > 0)
        return(dat)
      }
      ```
<a id="sleep_duration_1-hchs_sol"></a>
  * ### sleep/sleep_duration_1 -- **HCHS_SOL Hispanic Community Health Study /Study of Latinos (HCHS/SOL)**:
    * 2 component_study_variables
      * _phs000810.v1.pht004715.v1.phv00226251.v1_
        * dbGap name: **AGE**
        * dbGap desc: **Age**
        * dbGap table: **HCHS_SOL_Cohort_Subject_Phenotypes**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000810.v1.pht004715.v1.phv00258046.v1_
        * dbGap name: **SLPDUR**
        * dbGap desc: **Average sleep duration (hours)**
        * dbGap table: **HCHS_SOL_Cohort_Subject_Phenotypes**
         * No permissible values listed in PIC-SURE data dictionary
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        # Join age data with sleep data.
        dat <- phen_list$source_data$pht004715 %>%
        # Change variable names and convert character vectors to numeric.
          transmute(topmed_subject_id, age = as.numeric(AGE),
                    sleep_duration = as.numeric(SLPDUR)) %>%
          # Exclude rows with mising data.
          na.omit() %>%
          # Subset to observations inside logical range.
          filter(sleep_duration > 0)
        return(dat)
      }
      ```
<a id="sleep_duration_1-jhs"></a>
  * ### sleep/sleep_duration_1 -- **JHS Jackson Heart Study (JHS) Cohort**:
    * 2 component_study_variables
      * _phs000286.v5.pht001949.v1.phv00126009.v1_
        * No dbGap metadata available
         * varId _phv00126009_ not found in PIC-SURE data dictionary
      * _phs000286.v5.pht001963.v1.phv00127678.v1_
        * dbGap name: **MHXA7**
        * dbGap desc: **Q7. A. Sleep. During the past month, excluding naps, how many hours of actual sleep did you get at night (or day, if you work at night) on average (Hours)? [Visit 1] [Medical History Form, MHX]**
        * dbGap table: **mhxa**
         * varId _phv00127678_ not found in PIC-SURE data dictionary
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        source_data <- phen_list$source_data
        # Join sleep data with age data.
        dat <- inner_join(source_data$pht001949, source_data$pht001963, "topmed_subject_id") %>%
          # Rename and convert variables to numeric.
          transmute(topmed_subject_id, age = as.numeric(AGE01), sleep_duration = as.numeric(MHXA7)) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dat)
      }
      ```
<a id="sleep_duration_1-mesa"></a>
  * ### sleep/sleep_duration_1 -- **MESA Multi-Ethnic Study of Atherosclerosis (MESA) Cohort**:
    * 2 component_study_variables
      * _phs000209.v13.pht001120.v10.phv00086727.v3_
        * dbGap name: **age4c**
        * dbGap desc: **AGE AT EXAM 4**
        * dbGap table: **MESA_Exam4Main**
         * PIC-SURE permissible values: 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90
      * _phs000209.v13.pht001120.v10.phv00087048.v2_
        * dbGap name: **slpwkhr4**
        * dbGap desc: **NIGHT SLEEP HOURS ON WEEKDAY OR WORKDAY**
        * dbGap table: **MESA_Exam4Main**
         * PIC-SURE permissible values: 0, 1, 10, 11, 12, 13, 14, 2, 24, 25, 3, 4, 5, 6, 7, 8, 9, 99
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        # Join age data with sleep data.
        dat <- phen_list$source_data$pht001120 %>%
          # Rename harmonized variables and convert character vectors to numeric.
          transmute(topmed_subject_id, age = as.numeric(age4c),
                    sleep_duration = as.numeric(slpwkhr4)) %>%
          # Exclude rows with missing data.
          na.omit() %>%
          # Filter out rows outside of logical range.
          filter(sleep_duration < 24, sleep_duration > 0)
        return(dat)
      }
      ```
<a id="sleep_duration_1-whi"></a>
  * ### sleep/sleep_duration_1 -- **WHI Women's Health Initiative**:
    * 5 component_study_variables
      * _phs000200.v11.pht000998.v6.phv00078436.v6_
        * dbGap name: **F2DAYS**
        * dbGap desc: **F2 Days since randomization**
        * dbGap table: **f2_rel1**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000200.v11.pht000998.v6.phv00078437.v6_
        * dbGap name: **AGE**
        * dbGap desc: **Age at screening**
        * dbGap table: **f2_rel1**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000200.v11.pht001005.v6.phv00078869.v6_
        * dbGap name: **F37VY**
        * dbGap desc: **Visit year**
        * dbGap table: **f37_rel1**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000200.v11.pht001005.v6.phv00078870.v6_
        * dbGap name: **F37DAYS**
        * dbGap desc: **F37 Days since randomization/enrollment**
        * dbGap table: **f37_rel1**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000200.v11.pht001005.v6.phv00079041.v6_
        * dbGap name: **HRSSLP**
        * dbGap desc: **How many hours of sleep**
        * dbGap table: **f37_rel1**
         * PIC-SURE permissible values: 10 or more hours, 5 or less hours, 6 hours, 7 hours, 8 hours, 9 hours
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        source_data <- phen_list$source_data
        # Filter data to baseline observations only.
        dat <- filter(source_data$pht001005, F37VY == "0") %>%
          # Join with age variables.
          left_join(source_data$pht000998, "topmed_subject_id") %>%
          # Convert variables to numeric.
          mutate_at(vars(F37DAYS, F2DAYS, AGE, HRSSLP), as.numeric) %>%
          # Set positive F2DAYS values to zero.
          mutate_at(vars(F2DAYS), ~ ifelse(. > 0, 0, .)) %>%
          # Calculate age, and sleep duration in hours.
          transmute(age = AGE + (abs(F2DAYS) + F37DAYS) / 365.25,
                    sleep_duration = HRSSLP + 4, topmed_subject_id) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dat)
      }
      ```