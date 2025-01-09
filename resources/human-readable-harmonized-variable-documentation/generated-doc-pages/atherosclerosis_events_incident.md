
# atherosclerosis_events_incident

### Variables in this section:
* [angina_incident_1](#angina_incident_1)
* [cabg_incident_1](#cabg_incident_1)
* [cad_followup_start_age_1](#cad_followup_start_age_1)
* [chd_death_definite_1](#chd_death_definite_1)
* [chd_death_probable_1](#chd_death_probable_1)
* [coronary_angioplasty_incident_1](#coronary_angioplasty_incident_1)
* [mi_incident_1](#mi_incident_1)
* [pad_incident_1](#pad_incident_1)

<a id="angina_incident_1"></a>
## atherosclerosis_events_incident: **angina_incident_1** (angina_incident)
  An indicator of whether a subject had an angina event (that was verified by adjudication or by medical professionals) during the follow-up period.
  * **Harmonization Units**:
    * [FHS](#angina_incident_1-fhs)
    * [WHI](#angina_incident_1-whi)
  * **Metadata**:
    **`Data Type`**: encoded, **`Measurement Units`**: None, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2019-10-31 16:33:13
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C0002962
  * **DCC Harmonization Comments**:

    This variable was harmonized by appropriately converting component variables to a binary variable indicating the occurrence of an angina event during follow-up. If a study recorded multiple events, the DCC harmonized only the earliest event after the start of follow-up, and the corresponding age at event was used for the accompanying age variable. Unless otherwise stated, the age variable accompanying this variable represents the study participants' age when the angina event occurred or the age at last follow-up or death for those participants who did not have an angina event.
    
    ### Study-specific comments
    
    #### FHS
    
    The data available for angina includes events through December 2016. The data available for participants who did not have an angina event is through December 2014. Therefore, the age at censorship for participants who did not have an angina event is recorded through 2014, while participants who did have an angina event have their age recorded through 2016.
    
    
<a id="angina_incident_1-fhs"></a>
  * ### atherosclerosis_events_incident/angina_incident_1 -- **FHS**:
    * 5 component_study_variables: `phs000007.v30.pht000309.v13.phv00036469.v12`, `phs000007.v30.pht000309.v13.phv00036471.v12`, `phs000007.v30.pht003099.v5.phv00177930.v5`, `phs000007.v30.pht003316.v7.phv00190817.v7`, `phs000007.v30.pht003316.v7.phv00190823.v7`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          source_data <- phen_list$source_data
      
          # Join datasets.
          dat <- full_join(source_data$pht003099, source_data$pht000309, by = "topmed_subject_id") %>%
      
            # Convert age to numeric.
            transmute(topmed_subject_id,
                      cad_followup_start_age = as.numeric(age1),
                      event = as.numeric(EVENT),
                      date = as.numeric(DATE))
      
          # Create angina_incident variable. Gather all angina_incident events.
          dat$angina_incident  <- case_when(
            dat$event == 6 ~ 1,
            dat$event != 6 ~ 0,
            is.na(dat$event) ~ NA_real_
          )
      
          # Calculate age at event.
          dat$age_at_event <- dat$cad_followup_start_age + (dat$date / 365.25)
      
          # Identify prior angina events.
          dat <- dat %>%
            mutate(angina_incident = case_when(date <= 0 ~ 0,
                                           angina_incident == 1 & date > 0 ~ 1,
                                           TRUE ~ angina_incident))
      
          # Find subjects with multiple angina events and select first angina event.
          angina_event <- dat %>%
            filter(angina_incident == 1) %>%
            arrange(topmed_subject_id, date) %>%
            distinct(topmed_subject_id, .keep_all = TRUE) %>%
            select(-event)
      
          # Gather all non-angina-event subjects.
          non_angina_event <- dat %>%
            filter(angina_incident == 0) %>%
            select(-event)
      
          # Gather all non-event subjects from surv dataset.
          dat2 <- full_join(source_data$pht003099, source_data$pht003316, by = "topmed_subject_id") %>%
            transmute(topmed_subject_id,
                      cad_followup_start_age = as.numeric(age1),
                      cvd_status = as.numeric(cvd),
                      date = as.numeric(cvddate))
      
          # Create a non-event specific dataset and remove duplicates.
          non_event <- dat2 %>%
            filter(cvd_status == 0) %>%
            arrange(topmed_subject_id, desc(date)) %>%
            distinct(topmed_subject_id, .keep_all = TRUE) %>%
            select(-cvd_status)
      
          # Create an angina_incident variable for non-event subjects.
          non_event$angina_incident <- 0
      
          # Create an age at censoring variable for non-event subjects.
          non_event$age_at_event <-
            non_event$cad_followup_start_age + (non_event$date / 365.25)
      
          # Bind non_event and non_angina_event datasets and remove duplicates.
          non_event_all <- rbind(non_event, non_angina_event) %>%
            arrange(topmed_subject_id, desc(date)) %>%
            distinct(topmed_subject_id, .keep_all = TRUE)
      
          # Combine all angina-event subjects with non-angina-event subjects.
          dat_combined <- bind_rows(angina_event, non_event_all) %>%
            arrange(topmed_subject_id, desc(angina_incident)) %>%
      
            # Remove duplicate subjects with multiple events.
            distinct(topmed_subject_id, .keep_all = TRUE) %>%
            transmute(topmed_subject_id,
                      angina_incident = as.character(angina_incident),
                      age = age_at_event) %>%
            na.omit()
      
          return(dat_combined)
      }
      ```
<a id="angina_incident_1-whi"></a>
  * ### atherosclerosis_events_incident/angina_incident_1 -- **WHI**:
    * 7 component_study_variables: `phs000200.v11.pht000998.v6.phv00078436.v6`, `phs000200.v11.pht000998.v6.phv00078437.v6`, `phs000200.v11.pht003395.v3.phv00192302.v3`, `phs000200.v11.pht003407.v3.phv00193145.v3`, `phs000200.v11.pht003407.v3.phv00193146.v3`, `phs000200.v11.pht003407.v3.phv00193504.v3`, `phs000200.v11.pht003407.v3.phv00193505.v3`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          # Join all dataframes in the list.
          dat <- plyr::join_all(phen_list$source_data, "topmed_subject_id", "full") %>%
              # Convert numeric variables to numeric type.
              mutate_at(vars(ends_with("DY"), AGE, F2DAYS), as.numeric) %>%
              # Set positive F2DAYS values to 0.
              mutate_at(vars(F2DAYS), function(x) case_when(x > 0 ~ 0, TRUE ~ x)) %>%
              # Calculate time to last followup.
              mutate(censordy = case_when(EXT2MRC == 1 ~ ENDFOLLOWDY, TRUE ~ ENDEXT1DY),
                     # Use time-to_event when an event occured; otherwise use time to end-of-followup.
                     eventdy = case_when(ANGINA == 1 ~ ANGINADY, ANGINA == 0 ~ censordy),
                     # Calculate age at event/end-of-followup.
                     age = AGE + (abs(F2DAYS) + eventdy) / 365.25) %>%
              # Drop old variables.
              select(topmed_subject_id, angina_incident = ANGINA, age) %>%
              # Exclude rows with missing data.
              na.omit()
          return(dat)
      }
      ```
<a id="cabg_incident_1"></a>
## atherosclerosis_events_incident: **cabg_incident_1** (cabg_incident)
  An indicator of whether a subject had a coronary artery bypass graft (CABG) procedure (that was verified by adjudication or by medical professionals) during the follow-up period.
  * **Harmonization Units**:
    * [FHS](#cabg_incident_1-fhs)
    * [WHI](#cabg_incident_1-whi)
  * **Metadata**:
    **`Data Type`**: encoded, **`Measurement Units`**: None, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2019-10-31 16:33:20
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C0010055
  * **DCC Harmonization Comments**:

    This variable was harmonized by appropriately converting component variables to a binary variable indicating the occurrence of a CABG procedure during follow-up. If a study recorded multiple procedures, the DCC harmonized only the earliest event after the start of follow-up, and the corresponding age at event was used for the accompanying age variable. Unless otherwise stated, the age variable accompanying this variable represents the study participants' age when the CABG procedure occurred or the age at last follow-up or death for those participants who did not have a CABG procedure.
    
    
    ### Study-specific comments
    
    #### FHS
    
    The data available for CABG includes procedures through December 2016. The data available for participants who did not have a CABG procedure is through December 2014. Therefore, the accompanying age variable for participants who did not have a CABG procedure is recorded through 2014, while participants who did have a CABG procedure have their age recorded through 2016. 
    
    
<a id="cabg_incident_1-fhs"></a>
  * ### atherosclerosis_events_incident/cabg_incident_1 -- **FHS**:
    * 5 component_study_variables: `phs000007.v30.pht000389.v10.phv00054697.v8`, `phs000007.v30.pht000389.v10.phv00163410.v7`, `phs000007.v30.pht003099.v5.phv00177930.v5`, `phs000007.v30.pht003316.v7.phv00190817.v7`, `phs000007.v30.pht003316.v7.phv00190823.v7`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          source_data <- phen_list$source_data
      
          # Join datasets.
          dat <- full_join(source_data$pht003099, source_data$pht000389, by = "topmed_subject_id") %>%
            # Convert age to numeric.
            transmute(topmed_subject_id,
                      cabg_incident = ifelse(as.numeric(VESSEL) > 0, 1, 0),
                      date = as.numeric(PROCDATE),
                      cad_followup_start_age = as.numeric(age1))
      
          ## Calculate age at event.
          dat$age_at_event <- replicate(length(dat$cabg_incident), 0)
          dat$age_at_event <- floor(dat$cad_followup_start_age + (dat$date / 365.25))
      
          # Identify prior cabg events.
          dat <- dat %>%
            mutate(cabg_incident = case_when(date <= 0 ~ 0,
                                           cabg_incident == 1 & date > 0 ~ 1,
                                           TRUE ~ cabg_incident))
      
          # Find subjects with multiple cabg events and select first cabg event.
          cabg_event <- dat %>%
            filter(cabg_incident == 1) %>%
            arrange(topmed_subject_id, date) %>%
            distinct(topmed_subject_id, .keep_all = TRUE)
      
          # Gather all non-cabg-event subjects and remove duplicate subjects.
          non_cabg_event <- dat %>%
            filter(cabg_incident == 0)
      
          # Gather all non-event subjects from surv dataset.
          dat2 <- full_join(source_data$pht003099, source_data$pht003316, by = "topmed_subject_id") %>%
            transmute(topmed_subject_id,
                      cad_followup_start_age = as.numeric(age1),
                      cvd_status = as.numeric(cvd),
                      date = as.numeric(cvddate))
      
          # Create a non-event specific dataset and remove duplicates.
          non_event <- dat2 %>%
            filter(cvd_status == 0) %>%
            arrange(topmed_subject_id, desc(date)) %>%
            distinct(topmed_subject_id, .keep_all = TRUE) %>%
            select(-cvd_status)
      
          # Create an cabg_incident variable for non-event subjects.
          non_event$cabg_incident <- 0
      
          # Create an age at censoring variable for non-event subjects.
          non_event$age_at_event <-
            non_event$cad_followup_start_age + (non_event$date / 365.25)
      
          # Bind non_event and non_cabg_event datasets and remove duplicates.
          non_event_all <- rbind(non_event, non_cabg_event) %>%
            arrange(topmed_subject_id, desc(date)) %>%
            distinct(topmed_subject_id, .keep_all = TRUE)
      
          # Combine all cabg-event subjects with non-cabg-event subjects.
          dat_combined <- bind_rows(cabg_event, non_event_all) %>%
            arrange(topmed_subject_id, desc(cabg_incident)) %>%
      
            # Remove duplicate subjects with multiple events.
            distinct(topmed_subject_id, .keep_all = TRUE) %>%
            transmute(topmed_subject_id,
                      cabg_incident = as.character(cabg_incident),
                      age = age_at_event) %>%
            na.omit()
      
          return(dat_combined)
      }
      ```
<a id="cabg_incident_1-whi"></a>
  * ### atherosclerosis_events_incident/cabg_incident_1 -- **WHI**:
    * 7 component_study_variables: `phs000200.v11.pht000998.v6.phv00078436.v6`, `phs000200.v11.pht000998.v6.phv00078437.v6`, `phs000200.v11.pht003395.v3.phv00192302.v3`, `phs000200.v11.pht003407.v3.phv00193157.v3`, `phs000200.v11.pht003407.v3.phv00193158.v3`, `phs000200.v11.pht003407.v3.phv00193504.v3`, `phs000200.v11.pht003407.v3.phv00193505.v3`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          # Join all dataframes in the list.
          dat <- plyr::join_all(phen_list$source_data, "topmed_subject_id", "full") %>%
              # Convert numeric variables to numeric type.
              mutate_at(vars(ends_with("DY"), AGE, F2DAYS), as.numeric) %>%
              # Set positive F2DAYS values to 0.
              mutate_at(vars(F2DAYS), function(x) case_when(x > 0 ~ 0, TRUE ~ x)) %>%
              # Calculate age at event/censoring.
              mutate(censordy = case_when(EXT2MRC == 1 ~ ENDFOLLOWDY, TRUE ~ ENDEXT1DY),
                     eventdy = case_when(CABG == 1 ~ CABGDY, CABG == 0 ~ censordy),
                     age = AGE + (abs(F2DAYS) + eventdy) / 365.25) %>%
              # Drop old variables.
              select(topmed_subject_id, cabg_incident = CABG, age) %>%
              # Exclude rows with missing data.
              na.omit()
          return(dat)
      }
      ```
<a id="cad_followup_start_age_1"></a>
## atherosclerosis_events_incident: **cad_followup_start_age_1** (cad_followup_start_age)
  Age of subject at the start of the follow-up period during which atherosclerosis events were reviewed and adjudicated.
  * **Harmonization Units**:
    * [FHS](#cad_followup_start_age_1-fhs)
    * [WHI](#cad_followup_start_age_1-whi)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: cad_followup_start_age, **`Version`**: 1, **`Has Age Variable`**: No, **`Date Harmonized`**: 2019-10-31 16:32:31
  * **DCC Harmonization Comments**:

    This variable represents the age at which the follow-up period began for the following incident event variables: `mi_incident_1`, `cabg_incident_1`, `coronary_angioplasty_incident_1`, `angina_incident_1`, `pad_incident_1`. For most studies, this variable was harmonized from component variables indicating the age at baseline visit.
    
    ### Study-specific comments
    
    #### WHI
    
    The age at follow-up start does not directly correspond to the age at which prior history of CAD indicators were determined.
    
    
<a id="cad_followup_start_age_1-fhs"></a>
  * ### atherosclerosis_events_incident/cad_followup_start_age_1 -- **FHS**:
    * 1 component_study_variables: `phs000007.v30.pht003099.v5.phv00177930.v5`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        # Rename age variable and convert to numeric.
        dat <- transmute(phen_list$source_data$pht003099, topmed_subject_id,
                         cad_followup_start_age = as.numeric(age1)) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dat)
      }
      ```
<a id="cad_followup_start_age_1-whi"></a>
  * ### atherosclerosis_events_incident/cad_followup_start_age_1 -- **WHI**:
    * 1 component_study_variables: `phs000200.v11.pht000998.v6.phv00078437.v6`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        # Rename age variable and convert to numeric.
        dat <- transmute(phen_list$source_data$pht000998, topmed_subject_id,
                         cad_followup_start_age = as.numeric(AGE)) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dat)
      }
      ```
<a id="chd_death_definite_1"></a>
## atherosclerosis_events_incident: **chd_death_definite_1** (chd_death_definite)
  An indicator of whether the cause of death was determined by medical professionals or technicians to be "definite" coronary heart disease for subjects who died during the follow-up period.
  * **Harmonization Units**:
    * [FHS](#chd_death_definite_1-fhs)
    * [WHI](#chd_death_definite_1-whi)
  * **Metadata**:
    **`Data Type`**: encoded, **`Measurement Units`**: None, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2019-10-31 16:34:13
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C3844303
  * **DCC Harmonization Comments**:

    This variable was harmonized by using  "death type" and "death status" variables to classify individuals whose cause of death was determined to be definitely related to CHD.
    
    This variable should be consistent with the harmonized variable `chd_death_probable_1` in that all "definite" cases should also be "probable" cases.
    
    
<a id="chd_death_definite_1-fhs"></a>
  * ### atherosclerosis_events_incident/chd_death_definite_1 -- **FHS**:
    * 5 component_study_variables: `phs000007.v30.pht000309.v13.phv00036469.v12`, `phs000007.v30.pht000309.v13.phv00036471.v12`, `phs000007.v30.pht003099.v5.phv00177930.v5`, `phs000007.v30.pht003316.v7.phv00190817.v7`, `phs000007.v30.pht003316.v7.phv00190823.v7`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          source_data <- phen_list$source_data
      
            # Join datasets.
            dat <- full_join(source_data$pht003099, source_data$pht000309, by = "topmed_subject_id") %>%
      
              # Convert age to numeric.
              transmute(topmed_subject_id,
                        cad_followup_start_age = as.numeric(age1),
                        event = as.numeric(EVENT),
                        date = as.numeric(DATE))
      
            # Create chd_death_definite variable. Gather all chd_death_definite events.
            dat$chd_death_definite <- replicate(length(dat$event), 0)
            dat$chd_death_definite  <- case_when(
              dat$event == 9 | dat$event == 21 | dat$event == 22 | dat$event == 23 | dat$event == 24 ~ 1,
              dat$event != 9 & dat$event < 21 | dat$event > 24 ~ 0,
              is.na(dat$event) ~ NA_real_
            )
      
            # Calculate age at event.
            dat$age_at_event <- replicate(length(dat$event), 0)
            dat$age_at_event <- floor(dat$cad_followup_start_age + (dat$date / 365.25))
      
            # Create a chd_death event dataset.
            chd_death_event <- dat %>%
              filter(chd_death_definite == 1)
      
            # Gather all non-chd_death-event subjects and remove duplicate subjects.
            non_chd_death_event <- dat %>%
              filter(chd_death_definite == 0) %>%
              arrange(topmed_subject_id, desc(date)) %>%
              distinct(topmed_subject_id, .keep_all = TRUE)
      
            # Gather all non-event subjects from surv dataset and remove duplicates.
            dat2 <- full_join(source_data$pht003099, source_data$pht003316, by = "topmed_subject_id") %>%
              transmute(topmed_subject_id,
                        cad_followup_start_age = as.numeric(age1),
                        cvd_status = as.numeric(cvd),
                        surv_date = as.numeric(cvddate))
      
            # Create a non-event specific dataset.
            non_event <- dat2 %>%
              filter(cvd_status == 0) %>%
              arrange(topmed_subject_id, desc(surv_date)) %>%
              distinct(topmed_subject_id, .keep_all = TRUE)
      
            # Create a chd_death variable for non-event subjects.
            non_event$chd_death_definite <- replicate(length(non_event$cvd_status), 0)
      
            # Create an age at censoring variable for non-event subjects.
            non_event$age_at_event <- replicate(length(non_event$cvd_status), 0)
            non_event$age_at_event <-
              floor(non_event$cad_followup_start_age + (non_event$surv_date / 365.25))
      
            # Create an event variable for non_event subjects.
            non_event$event <- replicate(length(non_event$cvd_status), 0)
      
            # Combine all chd_death-event subjects with non-chd_death-event subjects.
            dat_combined <- bind_rows(chd_death_event, non_chd_death_event)
      
            # Remove duplicate subjects with multiple events.
            dat_combined <- dat_combined %>%
              arrange(topmed_subject_id, desc(chd_death_definite)) %>%
              distinct(topmed_subject_id, .keep_all = TRUE)
      
            # Join combined events data with non-events data.
            all_dat <- full_join(dat_combined, non_event, by = "topmed_subject_id")
      
            # Set all remaining non-event subjects to chd_death_definite = 0.
            inds_event <- which(is.na(all_dat$chd_death_definite.x) & all_dat$chd_death_definite.y == 0)
            all_dat$chd_death_definite.x[inds_event] <- 0
      
            # Combine age at censoring with age at event into one variable.
            inds_age <- which(is.na(all_dat$age_at_event.x) & !is.na(all_dat$age_at_event.y))
            all_dat$age_at_event.x[inds_age] <- all_dat$age_at_event.y[inds_age]
      
            # Set follow up start age for all remaining subjects.
            inds_age_start <-
              which(is.na(all_dat$cad_followup_start_age.x) & !is.na(all_dat$cad_followup_start_age.y))
            all_dat$cad_followup_start_age.x[inds_age_start] <-
              all_dat$cad_followup_start_age.y[inds_age_start]
      
            # Select columns for final dataset.
            all_dat <- all_dat %>%
              transmute(topmed_subject_id,
                        chd_death_definite = as.character(chd_death_definite.x),
                        age = age_at_event.x) %>%
              na.omit()
      
          return(all_dat)
      }
      ```
<a id="chd_death_definite_1-whi"></a>
  * ### atherosclerosis_events_incident/chd_death_definite_1 -- **WHI**:
    * 8 component_study_variables: `phs000200.v11.pht000998.v6.phv00078436.v6`, `phs000200.v11.pht000998.v6.phv00078437.v6`, `phs000200.v11.pht003395.v3.phv00192302.v3`, `phs000200.v11.pht003407.v3.phv00193498.v3`, `phs000200.v11.pht003407.v3.phv00193504.v3`, `phs000200.v11.pht003407.v3.phv00193505.v3`, `phs000200.v11.pht003409.v3.phv00193531.v2`, `phs000200.v11.pht003409.v3.phv00193532.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        # Join all datasets.
        dat <- plyr::join_all(phen_list$source_data, "topmed_subject_id", "full") %>%
          # Convert numeric variables to numeric type.
          mutate_at(vars(ends_with("DY"), AGE, F2DAYS), as.numeric) %>%
          # Set positive F2DAYS values to 0.
          mutate_at(vars(F2DAYS), function(x) case_when(x > 0 ~ 0, TRUE ~ x)) %>%
          # Calculate age at event/censoring.
          mutate(censordy = ifelse(EXT2MRC == 1, ENDFOLLOWDY, ENDEXT1DY),
                 eventdy = ifelse(DEATH %in% 1, DEATHDY, censordy),
                 age = AGE + (abs(F2DAYS) + eventdy) / 365.25,
                 # Compute harmonized CHD death from death and cause-of-death variables.
                 chd_death_definite = case_when(DEATH == 1 & DEATHCAUSE %in% 11 ~ "1", TRUE ~ "0")) %>%
          select(topmed_subject_id, chd_death_definite, age) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dat)
      }
      ```
<a id="chd_death_probable_1"></a>
## atherosclerosis_events_incident: **chd_death_probable_1** (chd_death_probable)
  An indicator of whether the cause of death was determined by medical professionals or technicians to be "probable" or "definite" coronary heart disease for subjects who died during the follow-up period.
  * **Harmonization Units**:
    * [FHS](#chd_death_probable_1-fhs)
    * [WHI](#chd_death_probable_1-whi)
  * **Metadata**:
    **`Data Type`**: encoded, **`Measurement Units`**: None, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2019-10-31 16:34:30
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C3844302
  * **DCC Harmonization Comments**:

    This variable was harmonized by using "death type" and "death status" variables to classify individuals whose cause of death was determined to be at least "probable". 
    
    This variable should be consistent with the harmonized variable `chd_death_definite_1` in that all "definite" cases should also be "probable" cases.
    
    
<a id="chd_death_probable_1-fhs"></a>
  * ### atherosclerosis_events_incident/chd_death_probable_1 -- **FHS**:
    * 5 component_study_variables: `phs000007.v30.pht000309.v13.phv00036469.v12`, `phs000007.v30.pht000309.v13.phv00036471.v12`, `phs000007.v30.pht003099.v5.phv00177930.v5`, `phs000007.v30.pht003316.v7.phv00190817.v7`, `phs000007.v30.pht003316.v7.phv00190823.v7`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          source_data <- phen_list$source_data
      
            # Join datasets.
            dat <- full_join(source_data$pht003099, source_data$pht000309, by = "topmed_subject_id") %>%
      
              # Convert age to numeric.
              transmute(topmed_subject_id,
                        cad_followup_start_age = as.numeric(age1),
                        event = as.numeric(EVENT),
                        date = as.numeric(DATE))
      
            # Create chd_death_probable variable. Gather all chd_death_probable events.
            dat$chd_death_probable <- replicate(length(dat$event), 0)
            dat$chd_death_probable  <- case_when(
              dat$event == 9 | dat$event == 21 | dat$event == 22 | dat$event == 23 | dat$event == 24 ~ 1,
              dat$event != 9 & dat$event < 21 | dat$event > 24 ~ 0,
              is.na(dat$event) ~ NA_real_
            )
      
            # Calculate age at event.
            dat$age_at_event <- replicate(length(dat$event), 0)
            dat$age_at_event <- floor(dat$cad_followup_start_age + (dat$date / 365.25))
      
            # Create a chd_death event dataset.
            chd_death_event <- dat %>%
              filter(chd_death_probable == 1)
      
            # Gather all non-chd_death-event subjects and remove duplicate subjects.
            non_chd_death_event <- dat %>%
              filter(chd_death_probable == 0) %>%
              arrange(topmed_subject_id, desc(date)) %>%
              distinct(topmed_subject_id, .keep_all = TRUE)
      
            # Gather all non-event subjects from surv dataset and remove duplicates.
            dat2 <- full_join(source_data$pht003099, source_data$pht003316, by = "topmed_subject_id") %>%
              transmute(topmed_subject_id,
                        cad_followup_start_age = as.numeric(age1),
                        cvd_status = as.numeric(cvd),
                        surv_date = as.numeric(cvddate))
      
            # Create a non-event specific dataset.
            non_event <- dat2 %>%
              filter(cvd_status == 0) %>%
              arrange(topmed_subject_id, desc(surv_date)) %>%
              distinct(topmed_subject_id, .keep_all = TRUE)
      
            # Create a chd_death variable for non-event subjects.
            non_event$chd_death_probable <- replicate(length(non_event$cvd_status), 0)
      
            # Create an age at censoring variable for non-event subjects.
            non_event$age_at_event <- replicate(length(non_event$cvd_status), 0)
            non_event$age_at_event <-
              floor(non_event$cad_followup_start_age + (non_event$surv_date / 365.25))
      
            # Create an event variable for non_event subjects.
            non_event$event <- replicate(length(non_event$cvd_status), 0)
      
            # Combine all chd_death-event subjects with non-chd_death-event subjects.
            dat_combined <- bind_rows(chd_death_event, non_chd_death_event)
      
            # Remove duplicate subjects with multiple events.
            dat_combined <- dat_combined %>%
              arrange(topmed_subject_id, desc(chd_death_probable)) %>%
              distinct(topmed_subject_id, .keep_all = TRUE)
      
            # Join combined events data with non-events data.
            all_dat <- full_join(dat_combined, non_event, by = "topmed_subject_id")
      
            # Set all remaining non-event subjects to chd_death_probable = 0.
            inds_event <- which(is.na(all_dat$chd_death_probable.x) & all_dat$chd_death_probable.y == 0)
            all_dat$chd_death_probable.x[inds_event] <- 0
      
            # Combine age at censoring with age at event into one variable.
            inds_age <- which(is.na(all_dat$age_at_event.x) & !is.na(all_dat$age_at_event.y))
            all_dat$age_at_event.x[inds_age] <- all_dat$age_at_event.y[inds_age]
      
            # Set follow up start age for all remaining subjects.
            inds_age_start <-
              which(is.na(all_dat$cad_followup_start_age.x) & !is.na(all_dat$cad_followup_start_age.y))
            all_dat$cad_followup_start_age.x[inds_age_start] <-
              all_dat$cad_followup_start_age.y[inds_age_start]
      
            # Select columns for final dataset.
            all_dat <- all_dat %>%
              transmute(topmed_subject_id,
                        chd_death_probable = as.character(chd_death_probable.x),
                        age = age_at_event.x) %>%
              na.omit()
      
          return(all_dat)
      }
      ```
<a id="chd_death_probable_1-whi"></a>
  * ### atherosclerosis_events_incident/chd_death_probable_1 -- **WHI**:
    * 8 component_study_variables: `phs000200.v11.pht000998.v6.phv00078436.v6`, `phs000200.v11.pht000998.v6.phv00078437.v6`, `phs000200.v11.pht003395.v3.phv00192302.v3`, `phs000200.v11.pht003407.v3.phv00193498.v3`, `phs000200.v11.pht003407.v3.phv00193504.v3`, `phs000200.v11.pht003407.v3.phv00193505.v3`, `phs000200.v11.pht003409.v3.phv00193531.v2`, `phs000200.v11.pht003409.v3.phv00193532.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        # Join all datasets.
        dat <- plyr::join_all(phen_list$source_data, "topmed_subject_id", "full") %>%
          # Convert numeric variables to numeric type.
          mutate_at(vars(ends_with("DY"), AGE, F2DAYS), as.numeric) %>%
          # Set positive F2DAYS values to 0.
          mutate_at(vars(F2DAYS), function(x) case_when(x > 0 ~ 0, TRUE ~ x)) %>%
          # Calculate age at event/censoring.
          mutate(censordy = ifelse(EXT2MRC == 1, ENDFOLLOWDY, ENDEXT1DY),
                 eventdy = ifelse(DEATH %in% 1, DEATHDY, censordy),
                 age = AGE + (abs(F2DAYS) + eventdy) / 365.25,
                 # Compute harmonized CHD death from death and cause-of-death variables.
                 chd_death_probable = case_when(DEATH == 1 & DEATHCAUSE %in% c(11, 14) ~ "1",
                                                TRUE ~ "0")) %>%
          select(topmed_subject_id, chd_death_probable, age) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dat)
      }
      ```
<a id="coronary_angioplasty_incident_1"></a>
## atherosclerosis_events_incident: **coronary_angioplasty_incident_1** (coronary_angioplasty_incident)
  An indicator of whether a subject had a coronary angioplasty procedure (that was verified by adjudication or by medical professionals) during the follow-up period.
  * **Harmonization Units**:
    * [WHI](#coronary_angioplasty_incident_1-whi)
  * **Metadata**:
    **`Data Type`**: encoded, **`Measurement Units`**: None, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2019-10-31 16:34:10
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C0002997
  * **DCC Harmonization Comments**:

    This variable was harmonized by appropriately converting component variables to a binary variable indicating the occurrence of a coronary angioplasty procedure during follow-up. If a study recorded multiple events, the DCC harmonized only the earliest event after the start of follow-up, and the corresponding age at event was used for the accompanying age variable. Unless otherwise stated, the age variable accompanying this variable represents the study participants' age when the coronary angioplasty procedure occurred or the age at last follow-up or death for those participants who did not have a coronary angioplasty procedure.
    
<a id="coronary_angioplasty_incident_1-whi"></a>
  * ### atherosclerosis_events_incident/coronary_angioplasty_incident_1 -- **WHI**:
    * 7 component_study_variables: `phs000200.v11.pht000998.v6.phv00078436.v6`, `phs000200.v11.pht000998.v6.phv00078437.v6`, `phs000200.v11.pht003395.v3.phv00192302.v3`, `phs000200.v11.pht003407.v3.phv00193199.v3`, `phs000200.v11.pht003407.v3.phv00193200.v3`, `phs000200.v11.pht003407.v3.phv00193504.v3`, `phs000200.v11.pht003407.v3.phv00193505.v3`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          # Join all dataframes in the list.
          dat <- plyr::join_all(phen_list$source_data, "topmed_subject_id", "full") %>%
              # Convert numeric variables to numeric type.
              mutate_at(vars(ends_with("DY"), AGE, F2DAYS), as.numeric) %>%
              # Set positive F2DAYS values to 0.
              mutate_at(vars(F2DAYS), function(x) case_when(x > 0 ~ 0, TRUE ~ x)) %>%
              # Calculate age at event/censoring.
              mutate(censordy = case_when(EXT2MRC == 1 ~ ENDFOLLOWDY, TRUE ~ ENDEXT1DY),
                     eventdy = case_when(PTCA == 1 ~ PTCADY, PTCA == 0 ~ censordy),
                     age = AGE + (abs(F2DAYS) + eventdy) / 365.25) %>%
              # Drop old variables.
              select(topmed_subject_id, coronary_angioplasty_incident = PTCA, age) %>%
              # Exclude rows with missing data.
              na.omit()
          return(dat)
      }
      ```
<a id="mi_incident_1"></a>
## atherosclerosis_events_incident: **mi_incident_1** (mi_incident)
  An indicator of whether a subject had a myocardial infarction (MI) event (that was verified by adjudication or by medical professionals) during the follow-up period.
  * **Harmonization Units**:
    * [FHS](#mi_incident_1-fhs)
    * [WHI](#mi_incident_1-whi)
  * **Metadata**:
    **`Data Type`**: encoded, **`Measurement Units`**: None, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2019-10-31 16:35:32
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C0027051
  * **DCC Harmonization Comments**:

    This variable was harmonized by appropriately converting component variables to a binary variable indicating the occurrence of an MI event during follow-up. If a study recorded multiple events, the DCC harmonized only the earliest event after the start of follow-up, and the corresponding age at event was used for the accompanying age variable. Unless otherwise stated, the age variable accompanying this variable represents the study participants' age when the MI event occurred or the age at last follow-up or death for those participants who did not experience an MI event.
    
    
    ### Study-specific comments
    
    #### FHS
    
    The data available for MI includes events through December 2016. The data available for participants who did not have an MI event is through December 2014. Therefore, the age at censorship for participants who did not have an MI event is recorded through 2014, while participants who did have an MI event have their age recorded through 2016.
    
<a id="mi_incident_1-fhs"></a>
  * ### atherosclerosis_events_incident/mi_incident_1 -- **FHS**:
    * 5 component_study_variables: `phs000007.v30.pht000309.v13.phv00036469.v12`, `phs000007.v30.pht000309.v13.phv00036471.v12`, `phs000007.v30.pht003099.v5.phv00177930.v5`, `phs000007.v30.pht003316.v7.phv00190817.v7`, `phs000007.v30.pht003316.v7.phv00190823.v7`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          source_data <- phen_list$source_data
      
          # Join datasets.
          dat <- full_join(source_data$pht003099, source_data$pht000309, by = "topmed_subject_id") %>%
      
            # Convert age to numeric.
            transmute(topmed_subject_id,
                      cad_followup_start_age = as.numeric(age1),
                      event = as.numeric(EVENT),
                      date = as.numeric(DATE))
      
          # Create mi_incident variable. Gather all mi_incident events.
          dat$mi_incident <- replicate(length(dat$event), 0)
          dat$mi_incident  <- case_when(
            dat$event == 1 | dat$event == 2 | dat$event == 3 | dat$event == 4 | dat$event == 5 ~ 1,
            dat$event > 5 ~ 0,
            is.na(dat$event) ~ NA_real_
          )
      
          # Calculate age at event.
          dat$age_at_event <- replicate(length(dat$event), 0)
          dat$age_at_event <- floor(dat$cad_followup_start_age + (dat$date / 365.25))
      
          # Identify prior mi events.
          dat <- dat %>%
            mutate(mi_incident = case_when(date <= 0 ~ 0,
                                           mi_incident == 1 & date > 0 ~ 1,
                                           TRUE ~ mi_incident))
      
      # Find subjects with multiple mi events and select first mi event.
          mi_event <- dat %>%
            filter(mi_incident == 1) %>%
            arrange(topmed_subject_id, date) %>%
            distinct(topmed_subject_id, .keep_all = TRUE) %>%
            select(-event)
      
          # Gather all non-mi-event subjects.
          non_mi_event <- dat %>%
            filter(mi_incident == 0) %>%
            select(-event)
      
          # Gather all non-event subjects from surv dataset.
          dat2 <- full_join(source_data$pht003099, source_data$pht003316, by = "topmed_subject_id") %>%
            transmute(topmed_subject_id,
                      cad_followup_start_age = as.numeric(age1),
                      cvd_status = as.numeric(cvd),
                      date = as.numeric(cvddate))
      
          # Create a non-event specific dataset and remove duplicates.
          non_event <- dat2 %>%
            filter(cvd_status == 0) %>%
            arrange(topmed_subject_id, desc(date)) %>%
            distinct(topmed_subject_id, .keep_all = TRUE) %>%
            select(-cvd_status)
      
          # Create an mi_incident variable for non-event subjects.
          non_event$mi_incident <- 0
      
          # Create an age at censoring variable for non-event subjects.
          non_event$age_at_event <-
            non_event$cad_followup_start_age + (non_event$date / 365.25)
      
          # Bind non_event and non_mi_event datasets and remove duplicates.
          non_event_all <- rbind(non_event, non_mi_event) %>%
            arrange(topmed_subject_id, desc(date)) %>%
            distinct(topmed_subject_id, .keep_all = TRUE)
      
          # Combine all mi-event subjects with non-mi-event subjects.
          dat_combined <- bind_rows(mi_event, non_event_all) %>%
            arrange(topmed_subject_id, desc(mi_incident)) %>%
      
            # Remove duplicate subjects with multiple events.
            distinct(topmed_subject_id, .keep_all = TRUE) %>%
            transmute(topmed_subject_id, mi_incident = as.character(mi_incident), age = age_at_event) %>%
            na.omit()
      
          return(dat_combined)
      }
      ```
<a id="mi_incident_1-whi"></a>
  * ### atherosclerosis_events_incident/mi_incident_1 -- **WHI**:
    * 7 component_study_variables: `phs000200.v11.pht000998.v6.phv00078436.v6`, `phs000200.v11.pht000998.v6.phv00078437.v6`, `phs000200.v11.pht003395.v3.phv00192302.v3`, `phs000200.v11.pht003407.v3.phv00193169.v3`, `phs000200.v11.pht003407.v3.phv00193170.v3`, `phs000200.v11.pht003407.v3.phv00193504.v3`, `phs000200.v11.pht003407.v3.phv00193505.v3`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          # Join all dataframes in the list.
          dat <- plyr::join_all(phen_list$source_data, "topmed_subject_id", "full") %>%
              # Convert numeric variables to numeric type.
              mutate_at(vars(ends_with("DY"), AGE, F2DAYS), as.numeric) %>%
              # Set positive F2DAYS values to 0.
              mutate_at(vars(F2DAYS), function(x) case_when(x > 0 ~ 0, TRUE ~ x)) %>%
              # Calculate age at event/censoring.
              mutate(censordy = case_when(EXT2MRC == 1 ~ ENDFOLLOWDY, TRUE ~ ENDEXT1DY),
                     eventdy = case_when(MI == 1 ~ MIDY, MI == 0 ~ censordy),
                     age = AGE + (abs(F2DAYS) + eventdy) / 365.25) %>%
              # Drop old variables.
              select(topmed_subject_id, mi_incident = MI, age) %>%
              # Exclude rows with missing data.
              na.omit()
          return(dat)
      }
      ```
<a id="pad_incident_1"></a>
## atherosclerosis_events_incident: **pad_incident_1** (pad_incident)
  An indicator of whether a subject had peripheral arterial disease (that was verified by adjudication or by medical professionals) during the follow-up period.
  * **Harmonization Units**:
    * [FHS](#pad_incident_1-fhs)
    * [WHI](#pad_incident_1-whi)
  * **Metadata**:
    **`Data Type`**: encoded, **`Measurement Units`**: None, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2019-10-31 16:35:34
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C0085096
  * **DCC Harmonization Comments**:

    This variable was harmonized by appropriately converting component variables to a binary variable indicating the presence or absence of a PAD diagnosis during follow-up. If a study recorded multiple events, the DCC harmonized only the earliest event after the start of follow-up, and the corresponding age at event was used for the accompanying age variable. Unless otherwise stated, the age variable accompanying this variable represents the study participants' age when the PAD diagnosis occurred or the age at last follow-up or death for those participants who did not have a PAD diagnosis. 
    
    ### Study-specific comments
    
    #### WHI
    
    Source variables contained some abdominal aortic aneurysm (AAA) cases. Observations where a subject had an abdominal aortic aneurysm (AAA) and not another PAD event had their value set to "0".
    
    #### FHS
    
    The data available for PAD includes events through December 2016. The data available for participants who did not have PAD is through December 2014. Therefore, the accompanying age variable for participants who did not have PAD is recorded through 2014, while participants who did have PAD have their age recorded through 2016. 
    
    
<a id="pad_incident_1-fhs"></a>
  * ### atherosclerosis_events_incident/pad_incident_1 -- **FHS**:
    * 5 component_study_variables: `phs000007.v30.pht000309.v13.phv00036469.v12`, `phs000007.v30.pht000309.v13.phv00036471.v12`, `phs000007.v30.pht003099.v5.phv00177930.v5`, `phs000007.v30.pht003316.v7.phv00190817.v7`, `phs000007.v30.pht003316.v7.phv00190823.v7`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          source_data <- phen_list$source_data
      
          # Join datasets.
          dat <- full_join(source_data$pht003099, source_data$pht000309, by = "topmed_subject_id") %>%
      
            # Convert age to numeric.
            transmute(topmed_subject_id,
                      cad_followup_start_age = as.numeric(age1),
                      event = as.numeric(EVENT),
                      date = as.numeric(DATE))
      
          # Create pad_incident variable. Gather all pad_incident events.
          dat$pad_incident <- replicate(length(dat$event), 0)
          dat$pad_incident  <- case_when(
            dat$event == 30 ~ 1,
            dat$event != 30 ~ 0,
            is.na(dat$event) ~ NA_real_
          )
      
          # Calculate age at event.
          dat$age_at_event <- replicate(length(dat$event), 0)
          dat$age_at_event <- floor(dat$cad_followup_start_age + (dat$date / 365.25))
      
          # Identify prior pad events.
          dat <- dat %>%
            mutate(pad_incident = case_when(date <= 0 ~ 0,
                                           pad_incident == 1 & date > 0 ~ 1,
                                           TRUE ~ pad_incident))
      
          # Find subjects with multiple pad events and select first pad event.
          pad_event <- dat %>%
            filter(pad_incident == 1) %>%
            arrange(topmed_subject_id, date) %>%
            distinct(topmed_subject_id, .keep_all = TRUE) %>%
            select(-event)
      
          # Gather all non-pad-event subjects.
          non_pad_event <- dat %>%
            filter(pad_incident == 0) %>%
            select(-event)
      
          # Gather all non-event subjects from surv dataset.
          dat2 <- full_join(source_data$pht003099, source_data$pht003316, by = "topmed_subject_id") %>%
            transmute(topmed_subject_id,
                      cad_followup_start_age = as.numeric(age1),
                      cvd_status = as.numeric(cvd),
                      date = as.numeric(cvddate))
      
          # Create a non-event specific dataset and remove duplicates.
          non_event <- dat2 %>%
            filter(cvd_status == 0) %>%
            arrange(topmed_subject_id, desc(date)) %>%
            distinct(topmed_subject_id, .keep_all = TRUE) %>%
            select(-cvd_status)
      
          # Create a pad_incident variable for non-event subjects.
          non_event$pad_incident <- 0
      
          # Create an age at censoring variable for non-event subjects.
          non_event$age_at_event <-
            non_event$cad_followup_start_age + (non_event$date / 365.25)
      
          # Bind non_event and non_pad_event datasets and remove duplicates.
          non_event_all <- rbind(non_event, non_pad_event) %>%
            arrange(topmed_subject_id, desc(date)) %>%
            distinct(topmed_subject_id, .keep_all = TRUE)
      
          # Combine all pad-event subjects with non-pad-event subjects.
          dat_combined <- bind_rows(pad_event, non_event_all) %>%
            arrange(topmed_subject_id, desc(pad_incident)) %>%
      
            # Remove duplicate subjects with multiple events.
            distinct(topmed_subject_id, .keep_all = TRUE) %>%
            transmute(topmed_subject_id,
                      pad_incident = as.character(pad_incident),
                      age = age_at_event) %>%
            na.omit()
      
          return(dat_combined)
      }
      ```
<a id="pad_incident_1-whi"></a>
  * ### atherosclerosis_events_incident/pad_incident_1 -- **WHI**:
    * 14 component_study_variables: `phs000200.v11.pht000998.v6.phv00078436.v6`, `phs000200.v11.pht000998.v6.phv00078437.v6`, `phs000200.v11.pht003395.v3.phv00192302.v3`, `phs000200.v11.pht003406.v3.phv00193101.v3`, `phs000200.v11.pht003406.v3.phv00193102.v3`, `phs000200.v11.pht003406.v3.phv00193103.v3`, `phs000200.v11.pht003406.v3.phv00193104.v3`, `phs000200.v11.pht003406.v3.phv00193105.v3`, `phs000200.v11.pht003406.v3.phv00193106.v3`, `phs000200.v11.pht003406.v3.phv00193107.v3`, `phs000200.v11.pht003407.v3.phv00193190.v3`, `phs000200.v11.pht003407.v3.phv00193191.v3`, `phs000200.v11.pht003407.v3.phv00193504.v3`, `phs000200.v11.pht003407.v3.phv00193505.v3`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          source_data <- phen_list$source_data
      
          # Subset to rows with at least one relevant value.
          dat_pad <- filter(source_data$pht003406, !is.na(PADLEG) | !is.na(PADAMP) |
                            !is.na(PADSURG) | !is.na(PADEXER) | !is.na(PADABDOP) |
                            !is.na(PADPLAQ) | !is.na(PADDX)) %>%
            # Convert character vectors to integer.
            mutate_if(is.character, as.integer) %>%
            # Code PAD events based on subtypes.
            mutate(pad1 = PADDX %in% 1:3 | PADPLAQ | PADABDOP | PADEXER | PADSURG |
                   PADAMP | PADLEG) %>%
            # Code pad2 as FALSE when pad1 is missing and PAD diagnosis is AAA.
            mutate(pad2 = case_when(is.na(pad1) & PADDX == 4 ~ FALSE, TRUE ~ pad1))
      
          dat <- full_join(dat_pad, source_data$pht003407, "topmed_subject_id") %>%
              # Use PERIPH value for PAD when pad2 is missing; otherwise use pad2.
              mutate(pad_incident = case_when(is.na(pad2) ~ as.logical(as.integer(PERIPH)),
                                              TRUE ~ pad2)) %>%
              # Join with MRC indicator.
              left_join(source_data$pht003395, "topmed_subject_id") %>%
              # Join with age.
              left_join(source_data$pht000998, "topmed_subject_id") %>%
              # Convert numeric variables to numeric type.
              mutate_at(vars(ends_with("DY"), AGE, F2DAYS), as.numeric) %>%
              # Set positive F2DAYS values to 0.
              mutate_at(vars(F2DAYS), function(x) case_when(x > 0 ~ 0, TRUE ~ x)) %>%
              # Calculate age at event/censoring.
              mutate(censordy = case_when(EXT2MRC == 1 ~ ENDFOLLOWDY, TRUE ~ ENDEXT1DY),
                     eventdy = case_when(pad_incident ~ PERIPHDY, !pad_incident ~ censordy),
                     age = AGE + (abs(F2DAYS) + eventdy) / 365.25) %>%
              # Drop old variables and convert PAD to binary.
              transmute(topmed_subject_id, pad_incident = as.character(as.integer(pad_incident)),
                        age) %>%
              # Exclude rows with missing data.
              na.omit()
          return(dat)
      }
      ```