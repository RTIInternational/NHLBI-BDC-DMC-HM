
# sleep

### Variables in this section:
* [sleep_duration_1](#sleep_duration_1)

<a id="sleep_duration_1"></a>
## sleep: **sleep_duration_1** (sleep_duration)
  Usual amount of time slept per day.
  * **Harmonization Units**:
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
      * _phs000280.v5.pht004228.v2.phv00214261.v1_. No dbGap metadata available.
      * _phs000280.v5.pht004228.v2.phv00214262.v1_. No dbGap metadata available.
      * _phs000280.v5.pht004228.v2.phv00214263.v1_. No dbGap metadata available.
      * _phs000280.v5.pht004228.v2.phv00214268.v1_. No dbGap metadata available.
      * _phs000280.v5.pht004228.v2.phv00214269.v1_. No dbGap metadata available.
      * _phs000280.v5.pht004228.v2.phv00214270.v1_. No dbGap metadata available.
      * _phs000280.v5.pht004228.v2.phv00214274.v1_. No dbGap metadata available.
      * _phs000280.v5.pht004228.v2.phv00215388.v1_. No dbGap metadata available.
      * _phs000280.v5.pht006431.v1.phv00295623.v1_. No dbGap metadata available.
      * _phs000280.v5.pht006479.v1.phv00298019.v1_. dbGap Name: **RSE21**, Desc: **F. Sleep. Q21. Hours of sleep in past month [Respiratory Symptoms Form. RSE. Visit 5]**, Table: **RSE**.
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
      * _phs000285.v3.pht001839.v2.phv00120534.v2_. dbGap Name: **F67SLPHR**, Desc: **PAST MONTH AVG SLEEPING HOURS. Q 7**, Table: **F1F67**.
      * _phs000285.v3.pht001851.v2.phv00120748.v2_. dbGap Name: **EX6_AGE**, Desc: **CALCULATED AGE AT EXAM 6**, Table: **F1REF**.
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
      * _phs000287.v6.pht001460.v1.phv00100694.v1_. dbGap Name: **AGE_S1**, Desc: **Age = StdyDtqa - DOB**, Table: **CHS_SHHS1_15K**.
      * _phs000287.v6.pht001460.v1.phv00100712.v1_. dbGap Name: **HRSWD02**, Desc: **How many hours of sleep do you usually get at night (or your main sleep period) on weekdays or workdays?**, Table: **CHS_SHHS1_15K**.
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
      * _phs000810.v1.pht004715.v1.phv00226251.v1_. dbGap Name: **AGE**, Desc: **Age**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
      * _phs000810.v1.pht004715.v1.phv00258046.v1_. dbGap Name: **SLPDUR**, Desc: **Average sleep duration (hours)**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
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
      * _phs000286.v5.pht001949.v1.phv00126009.v1_. No dbGap metadata available.
      * _phs000286.v5.pht001963.v1.phv00127678.v1_. dbGap Name: **MHXA7**, Desc: **Q7. A. Sleep. During the past month, excluding naps, how many hours of actual sleep did you get at night (or day, if you work at night) on average (Hours)? [Visit 1] [Medical History Form, MHX]**, Table: **mhxa**.
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
      * _phs000209.v13.pht001120.v10.phv00086727.v3_. dbGap Name: **age4c**, Desc: **AGE AT EXAM 4**, Table: **MESA_Exam4Main**.
      * _phs000209.v13.pht001120.v10.phv00087048.v2_. dbGap Name: **slpwkhr4**, Desc: **NIGHT SLEEP HOURS ON WEEKDAY OR WORKDAY**, Table: **MESA_Exam4Main**.
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
      * _phs000200.v11.pht000998.v6.phv00078436.v6_. dbGap Name: **F2DAYS**, Desc: **F2 Days since randomization**, Table: **f2_rel1**.
      * _phs000200.v11.pht000998.v6.phv00078437.v6_. dbGap Name: **AGE**, Desc: **Age at screening**, Table: **f2_rel1**.
      * _phs000200.v11.pht001005.v6.phv00078869.v6_. dbGap Name: **F37VY**, Desc: **Visit year**, Table: **f37_rel1**.
      * _phs000200.v11.pht001005.v6.phv00078870.v6_. dbGap Name: **F37DAYS**, Desc: **F37 Days since randomization/enrollment**, Table: **f37_rel1**.
      * _phs000200.v11.pht001005.v6.phv00079041.v6_. dbGap Name: **HRSSLP**, Desc: **How many hours of sleep**, Table: **f37_rel1**.
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