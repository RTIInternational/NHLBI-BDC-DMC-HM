
# sleep

### Variables in this section:
* [sleep_duration_1](#sleep_duration_1)

<a id="sleep_duration_1"></a>
## sleep: **sleep_duration_1** (sleep_duration)
  Usual amount of time slept per day.
  * **Harmonization Units**:
    * [ARIC](#sleep_duration_1-aric)
    * [CARDIA](#sleep_duration_1-cardia)
    * [CFS](#sleep_duration_1-cfs)
    * [CHS](#sleep_duration_1-chs)
    * [FHS_Gen3](#sleep_duration_1-fhs_gen3)
    * [FHS_Offspring_Omni1](#sleep_duration_1-fhs_offspring_omni1)
    * [FHS_Original](#sleep_duration_1-fhs_original)
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
  * ### sleep/sleep_duration_1 -- **ARIC**:
    * 10 component_study_variables: `phs000280.v5.pht004228.v2.phv00214261.v1`, `phs000280.v5.pht004228.v2.phv00214262.v1`, `phs000280.v5.pht004228.v2.phv00214263.v1`, `phs000280.v5.pht004228.v2.phv00214268.v1`, `phs000280.v5.pht004228.v2.phv00214269.v1`, `phs000280.v5.pht004228.v2.phv00214270.v1`, `phs000280.v5.pht004228.v2.phv00214274.v1`, `phs000280.v5.pht004228.v2.phv00215388.v1`, `phs000280.v5.pht006431.v1.phv00295623.v1`, `phs000280.v5.pht006479.v1.phv00298019.v1`
    * Function:
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
  * ### sleep/sleep_duration_1 -- **CARDIA**:
    * 2 component_study_variables: `phs000285.v3.pht001839.v2.phv00120534.v2`, `phs000285.v3.pht001851.v2.phv00120748.v2`
    * Function:
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
<a id="sleep_duration_1-cfs"></a>
  * ### sleep/sleep_duration_1 -- **CFS**:
    * 6 component_study_variables: `phs000284.v2.pht001902.v1.phv00122012.v1`, `phs000284.v2.pht001902.v1.phv00122015.v1`, `phs000284.v2.pht001902.v1.phv00122084.v1`, `phs000284.v2.pht001902.v1.phv00122088.v1`, `phs000284.v2.pht001902.v1.phv00122371.v1`, `phs000284.v2.pht001902.v1.phv00122372.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(lubridate)
        # Join age data with sleep data.
        source_data <- phen_list$source_data$pht001902
        # Specify NA values.
        na_values <- c(NA, "-2")
      
        # Select necessary variables.
        sdur <- select(source_data, -DAYBED, -DAYWAKE) %>%
          # Set DAYMIN to 0 if its value was missing.
          mutate_at(vars(DAYMIN), function(x) ifelse(x %in% na_values, 0, as.numeric(x))) %>%
          # Set DAYHRS to NA if its value was missing.
          mutate_at(vars(DAYHRS), function(x) ifelse(x %in% na_values, NA, x)) %>%
          # Calculate sleep duration from DAYHRS and DAYMIN.
          mutate(sleep_duration = as.numeric(DAYHRS) + (DAYMIN / 60)) %>%
          # Drop old variables.
          select(-DAYHRS, -DAYMIN) %>%
          # Exclude rows with missing data.
          na.omit()
      
        # Select necessary variables.
        calc <- select(source_data, -DAYHRS, -DAYMIN) %>%
          # Filter out rows with missing component variables.
          filter(!(DAYBED %in% na_values), !(DAYWAKE %in% na_values)) %>%
          # Convert bedtime and waketime variables to date_time type.
          mutate_at(vars(DAYBED, DAYWAKE), function(x){
                      parse_date_time(sprintf("%04d", as.integer(x)), "HM")
          }) %>%
          # Calculate sleep duration from bedtime and waketime.
          mutate(offset = case_when(DAYBED > DAYWAKE ~ dhours(24), DAYBED < DAYWAKE ~ dhours(0)),
                 sleep_duration = as.numeric(DAYWAKE - DAYBED + offset) / 3600) %>%
          # Drop old variables.
          select(-DAYBED, -DAYWAKE, -offset)
        # Bind datasets row-wise
        dat <- rbind(sdur, calc) %>%
          # Group dataset by ID and visit.
          group_by(topmed_subject_id, visit) %>%
          # Subset to first observation for each subject.
          filter(row_number() == 1) %>%
          # Order observations from most-recent to least-recent.
          arrange(desc(visit)) %>%
          # Group dataset by ID.
          group_by(topmed_subject_id) %>%
          # Select only the most recent observation for each subject.
          filter(row_number() == 1) %>%
          # Drop visit variable.
          select(-visit)
      
        return(dat)
      }
      ```
<a id="sleep_duration_1-chs"></a>
  * ### sleep/sleep_duration_1 -- **CHS**:
    * 2 component_study_variables: `phs000287.v6.pht001460.v1.phv00100694.v1`, `phs000287.v6.pht001460.v1.phv00100712.v1`
    * Function:
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
<a id="sleep_duration_1-fhs_gen3"></a>
  * ### sleep/sleep_duration_1 -- **FHS_Gen3**:
    * 2 component_study_variables: `phs000007.v30.pht000074.v11.phv00021348.v5`, `phs000007.v30.pht003099.v5.phv00177930.v5`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        source_data <- phen_list$source_data
        # Join age data with sleep data.
        dat <- inner_join(source_data$pht000074, source_data$pht003099, "topmed_subject_id") %>%
          # Convert character vectors to numeric.
          mutate_if(is.character, as.numeric) %>%
          # Rename harmonized variables.
          rename(sleep_duration = G3A596, age = age1) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dat)
      }
      ```
<a id="sleep_duration_1-fhs_offspring_omni1"></a>
  * ### sleep/sleep_duration_1 -- **FHS_Offspring_Omni1**:
    * 30 component_study_variables: `phs000007.v30.pht000031.v8.phv00007754.v6`, `phs000007.v30.pht000033.v9.phv00009109.v6`, `phs000007.v30.pht000036.v9.phv00010680.v6`, `phs000007.v30.pht000098.v7.phv00022090.v6`, `phs000007.v30.pht000395.v9.phv00055458.v6`, `phs000007.v30.pht000395.v9.phv00055459.v6`, `phs000007.v30.pht000395.v9.phv00055460.v6`, `phs000007.v30.pht000395.v9.phv00055465.v6`, `phs000007.v30.pht000395.v9.phv00055466.v5`, `phs000007.v30.pht000395.v9.phv00055467.v5`, `phs000007.v30.pht000395.v9.phv00055471.v6`, `phs000007.v30.pht000395.v9.phv00056587.v6`, `phs000007.v30.pht000747.v6.phv00072369.v5`, `phs000007.v30.pht000747.v6.phv00072556.v5`, `phs000007.v30.pht003099.v5.phv00177932.v5`, `phs000007.v30.pht003099.v5.phv00177936.v5`, `phs000007.v30.pht003099.v5.phv00177940.v5`, `phs000007.v30.pht003099.v5.phv00177942.v5`, `phs000007.v30.pht003099.v5.phv00177944.v5`, `phs000007.v30.pht003099.v5.phv00177946.v5`, `phs000007.v30.pht005140.v2.phv00254011.v2`, `phs000007.v30.pht005140.v2.phv00254343.v2`, `phs000007.v30.pht005140.v2.phv00254561.v2`, `phs000007.v30.pht005140.v2.phv00254562.v2`, `phs000007.v30.pht005140.v2.phv00254563.v2`, `phs000007.v30.pht005140.v2.phv00254566.v2`, `phs000007.v30.pht005140.v2.phv00254567.v2`, `phs000007.v30.pht005140.v2.phv00254568.v2`, `phs000007.v30.pht005140.v2.phv00254569.v2`, `phs000007.v30.pht005140.v2.phv00254570.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(tidyr)
        library(lubridate)
        library(magrittr)
      
        source_data <- phen_list$source_data
        age <- source_data$pht003099
        # Rename age variables to exam number.
        age_tall <- set_names(age, gsub("age", "", names(age))) %>%
          # Create age-by-visit dataset.
          gather("visit", "age", -topmed_subject_id, na.rm = TRUE)
      
        # Join age data with exam 2 sleep data.
        ex2 <- left_join(source_data$pht000031, age, "topmed_subject_id") %>%
          # Convert character vectors to numeric; create visit variable
          transmute(topmed_subject_id, sleep_duration = as.numeric(B104), age = age2, visit = "2") %>%
          # Exclude rows with missing data.
          na.omit()
      
        # Join age data with exam 4 sleep data.
        ex4 <- left_join(source_data$pht000033, age, "topmed_subject_id") %>%
          # Convert character vectors to numeric; create visit variable
          transmute(topmed_subject_id, sleep_duration = as.numeric(D426), age = age4, visit = "4") %>%
          # Exclude rows with missing data.
          na.omit()
      
        # Join age data with exam 6 sleep data.
        ex6 <- left_join(source_data$pht000098, age, "topmed_subject_id") %>%
          # Convert character vectors to numeric; create visit variable
          transmute(topmed_subject_id, sleep_duration = as.numeric(EH_10A), age = age6, visit = "6") %>%
          # Exclude rows with missing data.
          na.omit()
      
        # Join exam 7 data with age data.
        ex7 <- left_join(source_data$pht000036, age, "topmed_subject_id") %>%
          # Rename sleep variable/age variables and convert to numeric; create visit variable.
          transmute(topmed_subject_id, sleep_duration = as.numeric(G689), age = age7, visit = "7") %>%
          # Exclude rows with missing data.
          na.omit()
      
        # Create visit variable for exam 8.
        ex8 <- mutate(source_data$pht000747, visit = "8") %>%
          # Join exam 8 data with age data.
          left_join(age_tall, c("topmed_subject_id", "visit")) %>%
          # Convert sleep variables to numeric.
          mutate_at(vars(H480, H726), as.numeric)
        # Create sleep dataset for exam 8-H480
        H480 <- select(ex8, topmed_subject_id, sleep_duration = H480, age, visit) %>%
          # Exclude rows with missing data.
          na.omit()
        # Create sleep dataset for exam 8-H726
        H726 <- select(ex8, topmed_subject_id, sleep_duration = H726, age, visit) %>%
          # Exclude rows with missing data.
          na.omit()
      
        # Create visit variable for Offspring exam 9/Omni 1 exam 4 dataset.
        offs9_omni4 <- mutate(source_data$pht005140, visit = case_when(idtype == 1 ~ "9",
                                                                       idtype == 7 ~ "4")) %>%
          # Join with age data.
          left_join(age_tall, c("topmed_subject_id", "visit"))
      
        # Create exam 9/exam 4-j628 sleep dataset.
        j628 <- transmute(offs9_omni4, topmed_subject_id, sleep_duration = as.numeric(j628),
                          age, visit) %>%
          # Exclude rows with missing data.
          na.omit()
      
        # Create exam 9/exam 4-j921/j922 sleep dataset.
        actual_sleep <- select(offs9_omni4, topmed_subject_id, idtype, visit, age, j921, j922) %>%
          # Subset to cases where "hours" portion is not missing.
          filter(!is.na(j921)) %>%
          # Convert sleep variables to numeric.
          mutate_at(vars(j921, j922), as.numeric) %>%
          # Treat missing "minutes" portion as 0.
          mutate_at(vars(j922), function(x) case_when(is.na(x) ~ 0, TRUE ~ x)) %>%
          # Convert hours and minutes to hours and fractional hours.
          mutate(sleep_duration = as.numeric(dhours(j921) + dminutes(j922)) / 3600) %>%
          # Drop old variables.
          select(-idtype, -j921, -j922) %>%
          # Exclude rows with missing data.
          na.omit()
      
        # Rename bedtime and waketime variables, and drop unnecessary variables.
        offs9_omni4_calc <- transmute(offs9_omni4, bt_hour = j913, bt_min = j914,
                                      bt_ampm = j915, wt_hour = j918, wt_min = j919,
                                      wt_ampm = j920, visit, age, idtype,
                                      topmed_subject_id)
        # Rename SHHS variables.
        shhs <- rename(source_data$pht000395, sleep_duration = HrsWD02, age = age_s1) %>%
          # Create visit variable and convert sleep duration to numeric.
          mutate(visit = "shhs", sleep_duration = as.numeric(sleep_duration))
        # Create SHHS-HrsWD02 sleep dataset.
        HrsWD02 <- select(shhs, topmed_subject_id, sleep_duration, visit, age) %>%
          # Exclude rows with missing data.
          na.omit()
        # Rename bedtime and waketime variables, and drop unnecessary variables.
        shhs_calc <- transmute(shhs, bt_hour = TFAWDH02, bt_min = TFAWDM02,
                               bt_ampm = TFAWDA02, wt_hour = TWUWDH02,
                               wt_min = TWUWDM02, wt_ampm = TWUWDA02, visit,
                               topmed_subject_id, age)
        # Create date-time format string.
        fmt <- "IMp"
        # Bind SHHS and exam 9/exam 4 data row-wise.
        calc <- bind_rows(shhs_calc, offs9_omni4_calc) %>%
          # Recode AM/PM variables.
          mutate_at(vars(bt_ampm, wt_ampm), function(x) case_when(x == "1" ~ "AM", x == "2" ~ "PM")) %>%
          # Subset to rows where hour and AM/PM variables are non-missing.
          filter(!is.na(bt_hour), !is.na(wt_hour), !is.na(bt_ampm), !is.na(wt_ampm)) %>%
          # Treat missing "minutes" portion as 0.
          mutate_at(vars(bt_min, wt_min), function(x) case_when(is.na(x) ~ "0", TRUE ~ x)) %>%
          # Create bedtime and waketime variables as date_time.
          mutate(bt = paste0(bt_hour, ":", bt_min, bt_ampm) %>% parse_date_time(fmt),
                 wt = paste0(wt_hour, ":", wt_min, wt_ampm) %>% parse_date_time(fmt)) %>%
          # Calculate sleep duration form bedtime and waketime.
          mutate(offset = case_when(bt > wt ~ dhours(24), bt < wt ~ dhours(0)),
                 sleep_duration = as.numeric(wt - bt + offset) / 3600) %>%
          # Select necessary variables.
          select(topmed_subject_id, visit, sleep_duration, age)
      
        # Bind harmonized data row-wise in order of preference.
        dat <- rbind(
          ex4,
          ex2,
          H480,
          H726,
          ex7,
          actual_sleep,
          filter(calc, visit %in% c("4", "9")),
          j628,
          HrsWD02,
          filter(calc, visit == "shhs"),
          ex6
        ) %>%
          # Group by ID.
          group_by(topmed_subject_id) %>%
          # Select first observation for each subject.
          filter(row_number() == 1) %>%
          # Convert age to numeric.
          mutate_at(vars(age), as.numeric) %>%
          select(-visit) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dat)
      }
      ```
<a id="sleep_duration_1-fhs_original"></a>
  * ### sleep/sleep_duration_1 -- **FHS_Original**:
    * 3 component_study_variables: `phs000007.v30.pht000014.v3.phv00001902.v1`, `phs000007.v30.pht000022.v4.phv00004158.v1`, `phs000007.v30.pht003099.v5.phv00177930.v5`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(tidyr)
        library(lubridate)
        library(magrittr)
      
        source_data <- phen_list$source_data
      
        # Join age data with exam 12 sleep data.
        ex12 <- inner_join(source_data$pht000014, source_data$pht003099, "topmed_subject_id") %>%
          mutate(visit = "12") %>%
          # Convert character vectors to numeric.
          mutate_if(is.character, as.numeric) %>%
          # Rename harmonized variables.
          rename(sleep_duration = FE186, age = age1) %>%
          # Exclude rows with missing data.
          na.omit()
      
        # Join age data with exam 20 sleep data.
        ex20 <- inner_join(source_data$pht000022, source_data$pht003099, "topmed_subject_id") %>%
          mutate(visit = "20") %>%
          # Convert character vectors to numeric.
          mutate_if(is.character, as.numeric) %>%
          # Rename harmonized variables.
          rename(sleep_duration = FM94, age = age1) %>%
          # Exclude rows with missing data.
          na.omit()
      
        # Bind harmonized data row-wise in order of preference.
        dat <- rbind(
          ex12,
          ex20
        ) %>%
          # Group by ID.
          group_by(topmed_subject_id) %>%
          # Select first observation for each subject.
          filter(row_number() == 1) %>%
          # Convert age to numeric.
          mutate_at(vars(sleep_duration, age), as.numeric) %>%
          # Drop visit variable.
          select(-visit) %>%
          # Exclude rows with missing data.
          na.omit() %>%
          # Keep subjects with sleep duration less than 24 hours.
          filter(sleep_duration < 24)
      
        return(dat)
      }
      ```
<a id="sleep_duration_1-hchs_sol"></a>
  * ### sleep/sleep_duration_1 -- **HCHS_SOL**:
    * 2 component_study_variables: `phs000810.v1.pht004715.v1.phv00226251.v1`, `phs000810.v1.pht004715.v1.phv00258046.v1`
    * Function:
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
  * ### sleep/sleep_duration_1 -- **JHS**:
    * 2 component_study_variables: `phs000286.v5.pht001949.v1.phv00126009.v1`, `phs000286.v5.pht001963.v1.phv00127678.v1`
    * Function:
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
  * ### sleep/sleep_duration_1 -- **MESA**:
    * 2 component_study_variables: `phs000209.v13.pht001120.v10.phv00086727.v3`, `phs000209.v13.pht001120.v10.phv00087048.v2`
    * Function:
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
  * ### sleep/sleep_duration_1 -- **WHI**:
    * 5 component_study_variables: `phs000200.v11.pht000998.v6.phv00078436.v6`, `phs000200.v11.pht000998.v6.phv00078437.v6`, `phs000200.v11.pht001005.v6.phv00078869.v6`, `phs000200.v11.pht001005.v6.phv00078870.v6`, `phs000200.v11.pht001005.v6.phv00079041.v6`
    * Function:
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