
# blood_pressure

### Variables in this section:
* [antihypertensive_meds_1](#antihypertensive_meds_1)
* [bp_diastolic_1](#bp_diastolic_1)
* [bp_systolic_1](#bp_systolic_1)

<a id="antihypertensive_meds_1"></a>
## blood_pressure: **antihypertensive_meds_1** (antihypertensive_meds)
  Indicator for use of antihypertensive medication at the time of blood pressure measurement.
  * **Harmonization Units**:
    * [Amish](#antihypertensive_meds_1-amish)
    * [ARIC](#antihypertensive_meds_1-aric)
    * [CARDIA](#antihypertensive_meds_1-cardia)
    * [CFS](#antihypertensive_meds_1-cfs)
    * [CHS](#antihypertensive_meds_1-chs)
    * [FHS_Gen3_NOS_Omni2](#antihypertensive_meds_1-fhs_gen3_nos_omni2)
    * [FHS_Offspring](#antihypertensive_meds_1-fhs_offspring)
    * [FHS_Omni1](#antihypertensive_meds_1-fhs_omni1)
    * [FHS_Original](#antihypertensive_meds_1-fhs_original)
    * [GENOA](#antihypertensive_meds_1-genoa)
    * [HCHS_SOL](#antihypertensive_meds_1-hchs_sol)
    * [JHS](#antihypertensive_meds_1-jhs)
    * [MESA](#antihypertensive_meds_1-mesa)
    * [SAS](#antihypertensive_meds_1-sas)
    * [WHI](#antihypertensive_meds_1-whi)
  * **Metadata**:
    **`Data Type`**: encoded, **`Measurement Units`**: None, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2018-07-31 12:39:37
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C2054151
  * **DCC Harmonization Comments**:

    This variable was defined as a binary indicator for use of antihypertensive medication at the time of blood pressure measurement. When available, binary variables provided by the study were used for harmonization. Otherwise, usage of specific medication classes was used to define the harmonized variable.
    
    #### COPDGene
    
    There was no study variable to indicate whether a subject was taking antihypertensive medication at the time of blood pressure measurement. Therefore, all *_COPDGene_* subjects have missing values for this harmonized variable. 
    
    #### FHS
    
    Because antihypertensive medication was not recorded before Exam 4 for the Original cohort, antihypertensive medication status from Exam 4 were used for harmonization.
    
    #### GOLDN
    
    There was no study variable to indicate whether a subject was taking antihypertensive medication at the time of blood pressure measurement. Therefore, all *_GOLDN_* subjects have missing values for this harmonized variable. 
    
<a id="antihypertensive_meds_1-amish"></a>
  * ### blood_pressure/antihypertensive_meds_1 -- **Amish**:
    * 2 component_study_variables: `phs000956.v2.pht005002.v1.phv00252976.v1`, `phs000956.v2.pht005002.v1.phv00252997.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        # Get dataset and rename variables.
        dataset <- phen_list$source_data$pht005002 %>%
                   rename(age = age_baseline, antihypertensive_meds = htn_med_baseline)
      
        # Substitute the winsorized age value of '90+' to a numeric value 90.
        dataset$age[dataset$age %in% '90+'] <- 90
      
        # Substitute the value of 'NA' to missing.
        dataset$age[dataset$age %in% 'NA'] <- NA
        dataset$antihypertensive_meds[dataset$antihypertensive_meds %in% 'NA'] <- NA
      
        # Convert character values to numeric and remove NAs.
        dataset <- mutate(dataset, age = as.numeric(age)) %>%
                   na.omit()
      
        return(dataset)
      }
      ```
<a id="antihypertensive_meds_1-aric"></a>
  * ### blood_pressure/antihypertensive_meds_1 -- **ARIC**:
    * 2 component_study_variables: `phs000280.v4.pht004063.v2.phv00204712.v1`, `phs000280.v4.pht004063.v2.phv00204754.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
      
        dataset <- phen_list$source_data$pht004063
      
        # Change missing encoded values to NA.
        dataset$HYPTMD01[dataset$HYPTMD01 %in% 'NA'] <- NA
        dataset$HYPTMD01[dataset$HYPTMD01 %in% 'T'] <- NA
      
        # Rename variables.
        dataset <- rename(dataset, age = V1AGE01, antihypertensive_meds = HYPTMD01)
      
        # Convert age variable from character to numeric.
        dataset <- mutate(dataset, age = as.numeric(age))
      
        # Remove NAs.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="antihypertensive_meds_1-cardia"></a>
  * ### blood_pressure/antihypertensive_meds_1 -- **CARDIA**:
    * 4 component_study_variables: `phs000285.v3.pht001569.v2.phv00113012.v2`, `phs000285.v3.pht001571.v2.phv00113154.v2`, `phs000285.v3.pht001571.v2.phv00113155.v2`, `phs000285.v3.pht001645.v2.phv00115119.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        # Get dataset of whether a participant has ever taken antihypertensive meds.
        med_ever <- phen_list$source_data$pht001569
      
        # Subset participants who have never taken antihypertensive meds
        # and assign the encoded value "0".
        med_no <- filter(med_ever, A08BPMED == "1") %>%
                  mutate(antihypertensive_meds = 0) %>%
                  select(topmed_subject_id, antihypertensive_meds)
      
        # Subset participants who have ever taken antihypertensive meds.
        med_yes <- filter(med_ever, A08BPMED == "2")
      
        # Get dataset of antihypertensive meds status at clinical visit.
        med_visit <- filter(distinct(phen_list$source_data$pht001571),
                              A09MDTYP == "HBP")
      
        # Join datasets to determine the meds status of participants who have ever
        # taken antihypertensive meds at time of clinical visit.
        med_now <- left_join(med_yes, med_visit, by = "topmed_subject_id")
      
        # Assign encoded values to multiple records of a participant.
        # Records of taking antihypertensive meds at visit are encoded as "1".
        # Records of a missing value are encoded as "0.5".
        # Records of not taking antihypertensive meds at visit are encoded as "0".
        med_now <- mutate(med_now, med = case_when(A09MDNOW == "2" ~ 1,
                                                   A09MDNOW == "M" | is.na(A09MDNOW) ~ 0.5,
                                                   A09MDNOW == "1" ~ 0))
      
        # If a participant has any records of "1", he/she is identified as taking antihypertensive meds
        # at visit and get the encoded value "1". If a participant has records of both "0.5" and "0",
        # he/she is identified as missing meds status at visit and get the encoded value "0.5". If a
        # participant only has records of "0", he/she is identified as not taking antihypertensive meds
        # at visit and get the encoded value "0".
        med_now <- group_by(med_now, topmed_subject_id) %>%
                   mutate(antihypertensive_meds = max(med)) %>%
                   ungroup()
      
        # Convert the encoded value "0.5" to "NA" to represent missing meds status.
        med_now$antihypertensive_meds[med_now$antihypertensive_meds == 0.5] <- NA
      
        # Filter out unique values.
        med_now <- distinct(select(med_now, topmed_subject_id, antihypertensive_meds))
      
        # Combine datasets.
        dataset <- bind_rows(med_no, med_now)
      
        # Join with age dataset and rename variable.
        dataset <- inner_join(dataset,
                              phen_list$source_data$pht001645,
                              by = "topmed_subject_id") %>%
                   rename(age = EXAMAGE)
      
        # Convert variable types and remove records with NAs from dataset.
        dataset <- mutate(dataset,
                          age = as.numeric(age),
                          antihypertensive_meds = as.character(antihypertensive_meds)) %>%
                   na.omit()
      
        return(dataset)
      }
      ```
<a id="antihypertensive_meds_1-cfs"></a>
  * ### blood_pressure/antihypertensive_meds_1 -- **CFS**:
    * 3 component_study_variables: `phs000284.v1.pht001902.v1.phv00122012.v1`, `phs000284.v1.pht001902.v1.phv00122015.v1`, `phs000284.v1.pht001902.v1.phv00123029.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        dataset <- phen_list$source_data$pht001902 %>%
      
        # Rename variables.
                   rename(antihypertensive_meds = xbpmeds) %>%
      
        # Filter for baseline visit only.
                   filter(visit == 5) %>%
      
        # Select diastolic blood pressure.
                   select(topmed_subject_id, age, antihypertensive_meds) %>%
      
        # Remove NAs.
                   na.omit()
      
        return(dataset)
      }
      ```
<a id="antihypertensive_meds_1-chs"></a>
  * ### blood_pressure/antihypertensive_meds_1 -- **CHS**:
    * 2 component_study_variables: `phs000287.v6.pht001452.v1.phv00100487.v1`, `phs000287.v6.pht001452.v1.phv00100595.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
      
        dataset <- phen_list$source_data$pht001452
      
        # Rename age and medication variable.
        dataset <- rename(dataset, age = AGEBL, antihypertensive_meds = HTNMED06)
      
        # Remove NAs.
        dataset <- na.omit(dataset)
      
        # Return harmonized dataset
        return(dataset)
      }
      ```
<a id="antihypertensive_meds_1-fhs_gen3_nos_omni2"></a>
  * ### blood_pressure/antihypertensive_meds_1 -- **FHS_Gen3_NOS_Omni2**:
    * 2 component_study_variables: `phs000007.v29.pht003099.v4.phv00177930.v4`, `phs000007.v29.pht006026.v1.phv00277059.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
      
        dataset <- inner_join(phen_list$source_data$pht006026,
                              phen_list$source_data$pht003099,
                              by = "topmed_subject_id") %>%
      
          # Rename variables.
          rename(antihypertensive_meds = HRX1, age = age1) %>%
      
          # Remove NAs.
          na.omit()
      
        # Return harmonized dataset.
        return(dataset)
      }
      ```
<a id="antihypertensive_meds_1-fhs_offspring"></a>
  * ### blood_pressure/antihypertensive_meds_1 -- **FHS_Offspring**:
    * 2 component_study_variables: `phs000007.v29.pht003099.v4.phv00177930.v4`, `phs000007.v29.pht006027.v1.phv00277245.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
      
        dataset <- inner_join(phen_list$source_data$pht006027,
                              phen_list$source_data$pht003099,
                              by = "topmed_subject_id") %>%
      
          # Rename variables.
          rename(antihypertensive_meds = HRX1, age = age1) %>%
      
          # Remove NAs.
          na.omit()
      
        # Return harmonized dataset.
        return(dataset)
      }
      ```
<a id="antihypertensive_meds_1-fhs_omni1"></a>
  * ### blood_pressure/antihypertensive_meds_1 -- **FHS_Omni1**:
    * 2 component_study_variables: `phs000007.v29.pht003099.v4.phv00177930.v4`, `phs000007.v29.pht004813.v1.phv00250358.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        dataset <- plyr::join_all(phen_list$source_data) %>%
      
          # Rename variables.
          rename(antihypertensive_meds = e221, age = age1) %>%
      
          # Remove NAs.
          na.omit()
      
        # Return dataset.
        return(dataset)
      
      }
      ```
<a id="antihypertensive_meds_1-fhs_original"></a>
  * ### blood_pressure/antihypertensive_meds_1 -- **FHS_Original**:
    * 2 component_study_variables: `phs000007.v29.pht000009.v2.phv00000705.v1`, `phs000007.v29.pht003099.v4.phv00177936.v4`
    * Function:
      ```r
      harmonize <- function(phen_list){
        dataset <- plyr::join_all(phen_list$source_data) %>%
      
          # Rename variables.
          rename(antihypertensive_meds = MF250, age = age4)
      
        # Recode encoded values to 0 (no) and 1 (yes).
        dataset[dataset$antihypertensive_meds %in% "2", ]$antihypertensive_meds <- "0"
      
        # Remove NAs.
        dataset <- na.omit(dataset)
      
        # Return dataset.
        return(dataset)
      
      }
      ```
<a id="antihypertensive_meds_1-genoa"></a>
  * ### blood_pressure/antihypertensive_meds_1 -- **GENOA**:
    * 4 component_study_variables: `phs001238.v1.pht006039.v1.phv00277507.v1`, `phs001238.v1.pht006042.v1.phv00277585.v1`, `phs001238.v1.pht006653.v1.phv00307788.v1`, `phs001238.v1.pht006656.v1.phv00307866.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
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
        dataset <- rename(dataset, age = AGE, antihypertensive_meds = meds_HYT)
      
        # Encode the two-level factor values to binary values.
        dataset <- mutate_if(dataset, is.factor, as.character)
        dataset$antihypertensive_meds[dataset$antihypertensive_meds %in% 'NO'] <- 0
        dataset$antihypertensive_meds[dataset$antihypertensive_meds %in% 'YES'] <- 1
      
        # Convert variable types and remove records with NAs from dataset.
        dataset <- mutate(dataset,
                          age = as.numeric(age),
                          antihypertensive_meds = as.character(antihypertensive_meds)) %>%
                   na.omit()
      
        return(dataset)
      }
      ```
<a id="antihypertensive_meds_1-hchs_sol"></a>
  * ### blood_pressure/antihypertensive_meds_1 -- **HCHS_SOL**:
    * 2 component_study_variables: `phs000810.v1.pht004715.v1.phv00226251.v1`, `phs000810.v1.pht004715.v1.phv00226324.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        # Select phenotype dataset.
        dataset <- phen_list$source_data$pht004715 %>%
        # Rename variables and convert to appropriate data type.
                   transmute(topmed_subject_id,
                             antihypertensive_meds = as.character(MED_ANTIHYPERT),
                             age = as.numeric(AGE)) %>%
        # Exclude rows with NAs.
                   na.omit()
        # Return harmonized dataset.
        return(dataset)
      }
      ```
<a id="antihypertensive_meds_1-jhs"></a>
  * ### blood_pressure/antihypertensive_meds_1 -- **JHS**:
    * 2 component_study_variables: `phs000286.v5.pht001949.v1.phv00126009.v1`, `phs000286.v5.pht001949.v1.phv00126038.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        # Get dataset and rename variables.
        dataset <- phen_list$source_data$pht001949 %>%
                   rename(age = AGE01, antihypertensive_meds = BPM01)
      
        # Substitute the value of 'X' to missing.
        dataset$antihypertensive_meds[dataset$antihypertensive_meds %in% 'X'] <- NA
      
        # Convert variable types and remove records with NAs from dataset.
        dataset <- mutate(dataset,
                          age = as.numeric(age),
                          antihypertensive_meds = as.character(antihypertensive_meds)) %>%
                   na.omit()
      
        return(dataset)
      }
      ```
<a id="antihypertensive_meds_1-mesa"></a>
  * ### blood_pressure/antihypertensive_meds_1 -- **MESA**:
    * 6 component_study_variables: `phs000209.v13.pht001111.v4.phv00082639.v2`, `phs000209.v13.pht001111.v4.phv00083163.v1`, `phs000209.v13.pht001116.v10.phv00084442.v3`, `phs000209.v13.pht001116.v10.phv00085324.v2`, `phs000209.v13.pht001121.v3.phv00087071.v1`, `phs000209.v13.pht001121.v3.phv00087093.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
      
        # Merge pht001111 and pht001116.
        dataset <- rbind(phen_list$source_data$pht001111, phen_list$source_data$pht001116)
      
        # Rename variables in pht001121.
        dataset_21 <- phen_list$source_data$pht001121 %>%
                      rename(age1c = agefc, htnmed1c = htnmedfc)
      
        # Merge pht001121 with previously merged dataset.
        dataset <- rbind(dataset, dataset_21)
      
        # Rename age and medication variable.
        dataset <- rename(dataset, age = age1c, antihypertensive_meds = htnmed1c)
      
        # Remove NAs.
        dataset <- na.omit(dataset)
      
        # Return harmonized dataset
        return(dataset)
      }
      ```
<a id="antihypertensive_meds_1-sas"></a>
  * ### blood_pressure/antihypertensive_meds_1 -- **SAS**:
    * 2 component_study_variables: `phs000914.v1.pht005253.v1.phv00258680.v1`, `phs000914.v1.pht005253.v1.phv00258749.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        # Get dataset.
        dataset <- phen_list$source_data$pht005253 %>%
        # Rename variables.
                   transmute(topmed_subject_id,
                             age = Dec_Age,
                             antihypertensive_meds = na_if(Hyp_meds, "NA")) %>%
                   mutate_at(vars(age), funs(as.numeric)) %>%
        # Remove NAs.
                   na.omit()
        return(dataset)
      }
      ```
<a id="antihypertensive_meds_1-whi"></a>
  * ### blood_pressure/antihypertensive_meds_1 -- **WHI**:
    * 8 component_study_variables: `phs000200.v11.pht000998.v6.phv00078436.v6`, `phs000200.v11.pht000998.v6.phv00078437.v6`, `phs000200.v11.pht001019.v6.phv00079850.v6`, `phs000200.v11.pht001019.v6.phv00079852.v6`, `phs000200.v11.pht002754.v4.phv00169603.v4`, `phs000200.v11.pht002754.v4.phv00169605.v4`, `phs000200.v11.pht002754.v4.phv00169608.v4`, `phs000200.v11.pht002754.v4.phv00169611.v4`
    * Function:
      ```r
      harmonize <- function(phen_list){
        # Get medication dataset.
        dataset_med <- phen_list$source_data$pht002754
      
        # Subset to baseline visit.
        dataset_med <- filter(dataset_med, F44VTYP == 1)
      
        # Select variables needed.
        dataset_med <- select(dataset_med, topmed_subject_id, ADULTDY, F44DAYS, TCCODE)
      
        # Substitute the value of 'NA' to missing.
        dataset_med$ADULTDY[dataset_med$ADULTDY %in% 'NA'] <- NA
        dataset_med$TCCODE[dataset_med$TCCODE %in% 'NA'] <- NA
      
        # Convert character values to numeric.
        dataset_med <- mutate_if(dataset_med, is.character, as.numeric)
      
        # Get blood pressure dataset.
        dataset_bp <- phen_list$source_data$pht001019
      
        # Subset to baseline visit.
        dataset_bp <- filter(dataset_bp, F80VTYP == 1)
      
        # Convert character values to numeric.
        dataset_bp <- mutate_if(dataset_bp, is.character, as.numeric)
      
        # Select variables needed and join with medication dataset to get medication taken during
        # blood pressure measurement.
        dataset_bp <- select(dataset_bp, topmed_subject_id, F80DAYS)
        dataset_med <- left_join(dataset_med, dataset_bp, by = "topmed_subject_id")
      
        # Subset participants who had taken blood pressure measurements.
        dataset_med <- filter(dataset_med, !is.na(F80DAYS))
      
        # Create the antihypertensive medication status variable and assign the value "-1" to all records.
        dataset_med$meds <- -1
      
        # Subset participants taking antihypertensive meds at time of medication questionnaire visit.
        whi_med_y <- filter(dataset_med,
                            (TCCODE >= 330000 & TCCODE <= 349999) |
                            (TCCODE >= 360000 & TCCODE <= 369999) |
                            (TCCODE == 372000) | (TCCODE == 375000) |
                            (TCCODE == 376000) | (TCCODE == 379900))
      
        # For each visit defined by one "F44DAYS", calculate the new variable
        # "MEDSTART" (Medication start days since randomization/enrollment).
        whi_med_yes <- mutate(whi_med_y, MEDSTART = F44DAYS - ADULTDY)
      
        # If the time of taking blood pressure measurements was between MEDSTART and the
        # time of medication questionnaire visit, it means the participant was taking
        # antihypertensive meds at blood pressure measurements.
        whi_med_yes <- mutate(whi_med_yes,
                              meds = ifelse(MEDSTART <= F80DAYS & F80DAYS <= F44DAYS, 1, meds))
      
        # If the time of taking blood pressure measurements was before MEDSTART,
        # it means the participant was not taking antihypertensive meds at blood pressure measurements.
        whi_med_yes <- mutate(whi_med_yes, meds = ifelse(F80DAYS < MEDSTART, 0, meds))
      
        # For participants with multiple medication questionnaire visits, if she was ever assigned the
        # value 1 at the previous steps, her antihypertensive meds status should be 1. If she was
        # assigned both 0 and -1, her antihypertensive meds status should be 0.
        whi_med_yes <- group_by(whi_med_yes, topmed_subject_id) %>%
                       mutate(antihypertensive_meds = max(meds)) %>%
                       ungroup()
      
        # Filter out unique values.
        whi_med_yes <- distinct(select(whi_med_yes, topmed_subject_id, antihypertensive_meds, F80DAYS))
      
        # Subset participants not taking antihypertensive meds at time of medication questionnaire visit.
        whi_med_n <- anti_join(dataset_med, whi_med_y, by = "topmed_subject_id")
      
        # If the time of taking blood pressure measurements was before or the same as the
        # time of medication questionnaire visit, it means the participant was not taking
        # antihypertensive meds at blood pressure measurements.
        whi_med_no <- mutate(whi_med_n, meds = ifelse(F80DAYS <= F44DAYS, 0, meds))
      
        # If a participant had multiple medication questionnaire visits, as long as she was assigned the
        # value 0 at the previous step, her antihypertensive meds status should be 0.
        whi_med_no <- group_by(whi_med_no, topmed_subject_id) %>%
                      mutate(antihypertensive_meds = max(meds)) %>%
                      ungroup()
      
        # Filter out unique values.
        whi_med_no <- distinct(select(whi_med_no, topmed_subject_id, antihypertensive_meds, F80DAYS))
      
        # Combine datasets.
        whi_med_all <- bind_rows(whi_med_yes, whi_med_no)
      
        # Convert the encoded value "-1" to "NA" to represent missing meds status.
        whi_med_all$antihypertensive_meds[whi_med_all$antihypertensive_meds == -1] <- NA
      
        # Select the medication variable and time of blood pressure measurement.
        whi_med_all <- select(whi_med_all, topmed_subject_id, antihypertensive_meds, F80DAYS)
      
        # Get age dataset.
        dataset_age <- phen_list$source_data$pht000998
      
        # Substitute the value of 'NA' to missing.
        dataset_age$F2DAYS[dataset_age$F2DAYS %in% 'NA'] <- NA
        dataset_age$AGE[dataset_age$AGE %in% 'NA'] <- NA
      
        # Convert character values to numeric.
        dataset_age <- mutate_if(dataset_age, is.character, as.numeric)
      
        # Join blood pressure dataset and age dataset.
        dataset <- inner_join(whi_med_all, dataset_age, by = "topmed_subject_id")
      
        # Calculate age at blood pressure measurement.
        dataset <- mutate(dataset,
                          age = ifelse(F2DAYS > 0,
                                       AGE + F80DAYS / 365.25,
                                       AGE + (abs(F2DAYS) + F80DAYS) / 365.25))
      
        # Select the output variables.
        dataset <- select(dataset, topmed_subject_id, antihypertensive_meds, age)
      
        # Convert variable types.
        dataset <- mutate(dataset, antihypertensive_meds = as.character(antihypertensive_meds))
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="bp_diastolic_1"></a>
## blood_pressure: **bp_diastolic_1** (bp_diastolic)
  Resting diastolic blood pressure from the upper arm in a clinical setting.
  * **Harmonization Units**:
    * [Amish](#bp_diastolic_1-amish)
    * [ARIC](#bp_diastolic_1-aric)
    * [CARDIA](#bp_diastolic_1-cardia)
    * [CFS](#bp_diastolic_1-cfs)
    * [CHS](#bp_diastolic_1-chs)
    * [COPDGene](#bp_diastolic_1-copdgene)
    * [FHS_Gen3_NOS_Omni2](#bp_diastolic_1-fhs_gen3_nos_omni2)
    * [FHS_Offspring](#bp_diastolic_1-fhs_offspring)
    * [FHS_Omni1](#bp_diastolic_1-fhs_omni1)
    * [FHS_Original](#bp_diastolic_1-fhs_original)
    * [GENOA](#bp_diastolic_1-genoa)
    * [GOLDN](#bp_diastolic_1-goldn)
    * [HCHS_SOL](#bp_diastolic_1-hchs_sol)
    * [JHS](#bp_diastolic_1-jhs)
    * [MESA](#bp_diastolic_1-mesa)
    * [SAS](#bp_diastolic_1-sas)
    * [WHI](#bp_diastolic_1-whi)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: mmHg, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2018-07-31 12:33:29
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C2183311
  * **DCC Harmonization Comments**:

    This variable was harmonized by taking the average of two diastolic blood pressure (BP) measurements collected at a single clinic visit. When more than two measurements were collected, the average was calculated using the second and third measurements. In cases where either of the measurements was missing, the average was calculated discarding the missing value. If a study used a random-zero sphygmomanometer and the variables representing the zero readings were available in dbGaP, the zero reading adjustments were applied in the harmonization. In cases where the individual BP measurements were not available in dbGaP, a mean diastolic BP variable derived by the study was used for harmonization. For paired systolic and diastolic BP measurements, if one of the paired measurements was missing or the systolic BP was less than the diastolic BP, the values for both systolic BP and diastolic BP for that pair were set to missing. This harmonized variable was not adjusted for antihypertensive medication status.
    
    #### ARIC
    
    Two subjects had a mean diastolic BP value of zero after adjusting for random zero correction. These values were kept in the harmonized diastolic BP dataset.  
    
    #### COPDGene
    
    Only one blood pressure measurement was available for each subject at baseline, so an average diastolic BP value could not be calculated. The single measurement was used for harmonization of diastolic BP.
    
    #### FHS
    
    Because antihypertensive medication was not recorded before Exam 4 for the Original cohort, diastolic BP values from Exam 4 were used for harmonization.
    
    #### GOLDN
    
    Only one blood pressure measurement was available for each subject at baseline, so an average diastolic BP value could not be calculated. The single measurement was used for harmonization of diastolic BP.
    
    #### Instrumentation
    
    The instruments used for BP measurements were different among studies, including standard manual sphygmomanometers, random-zero sphygmomanometers, and automated digital blood pressure monitors.
    
<a id="bp_diastolic_1-amish"></a>
  * ### blood_pressure/bp_diastolic_1 -- **Amish**:
    * 3 component_study_variables: `phs000956.v2.pht005002.v1.phv00252976.v1`, `phs000956.v2.pht005002.v1.phv00252995.v1`, `phs000956.v2.pht005002.v1.phv00252996.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        # Get dataset.
        dataset <- phen_list$source_data$pht005002
        # Substitute the winsorized age value of '90+' to a numeric value 90.
        ind <- dataset$age_baseline == "90+"
        dataset$age_baseline[ind] <- "90"
        # Rename variables.
        dataset <- transmute(dataset,
                             topmed_subject_id,
                             bp_systolic = as.numeric(sbp_baseline),
                             bp_diastolic = as.numeric(dbp_baseline),
                             age = as.numeric(age_baseline)) %>%
        # Subset to observations where systolic BP is greater than or equal to diastolic BP.
                   filter(bp_systolic >= bp_diastolic) %>%
        # Select the output variables and remove NAs.
                   select(-bp_systolic) %>%
                   na.omit()
        return(dataset)
      }
      ```
<a id="bp_diastolic_1-aric"></a>
  * ### blood_pressure/bp_diastolic_1 -- **ARIC**:
    * 7 component_study_variables: `phs000280.v4.pht004063.v2.phv00204712.v1`, `phs000280.v4.pht004192.v2.phv00210284.v1`, `phs000280.v4.pht004192.v2.phv00210285.v1`, `phs000280.v4.pht004192.v2.phv00210286.v1`, `phs000280.v4.pht004192.v2.phv00210287.v1`, `phs000280.v4.pht004192.v2.phv00210288.v1`, `phs000280.v4.pht004192.v2.phv00210289.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        # Select phenotype dataset.
        dataset <- plyr::join_all(phen_list$source_data)
      
        # Change "NA" to NA.
        dataset$SBPA15[dataset$SBPA15 %in% 'NA'] <- NA
        dataset$SBPA18[dataset$SBPA18 %in% 'NA'] <- NA
        dataset$SBPA16[dataset$SBPA16 %in% 'NA'] <- NA
        dataset$SBPA19[dataset$SBPA19 %in% 'NA'] <- NA
        dataset$SBPA17[dataset$SBPA17 %in% 'NA'] <- NA
        dataset$SBPA20[dataset$SBPA20 %in% 'NA'] <- NA
        dataset$V1AGE01[dataset$V1AGE01 %in% 'NA'] <- NA
      
        dataset$SBPA15[dataset$SBPA15 %in% 'A'] <- NA
        dataset$SBPA18[dataset$SBPA18 %in% 'A'] <- NA
        dataset$SBPA16[dataset$SBPA16 %in% 'A'] <- NA
        dataset$SBPA19[dataset$SBPA19 %in% 'A'] <- NA
        dataset$SBPA17[dataset$SBPA17 %in% 'A'] <- NA
        dataset$SBPA20[dataset$SBPA20 %in% 'A'] <- NA
        dataset$V1AGE01[dataset$V1AGE01 %in% 'A'] <- NA
      
        # Rename variables and convert to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric) %>%
                   rename(sbp_2 = SBPA15,
                          sbp_3 = SBPA18,
                          dbp_2 = SBPA16,
                          dbp_3 = SBPA19,
                          zero_2 = SBPA17,
                          zero_3 = SBPA20,
                          age = V1AGE01)
      
        # Use Random zero correction for BP values.
        dataset$dbp_2_RZ <- dataset$dbp_2 - dataset$zero_2
        dataset$dbp_3_RZ <- dataset$dbp_3 - dataset$zero_3
      
        dataset$sbp_2_RZ <- dataset$sbp_2 - dataset$zero_2
        dataset$sbp_3_RZ <- dataset$sbp_3 - dataset$zero_3
      
        # Check SBP is greater than or equal to DBP.
        dataset <- mutate(dataset, sbp_2_RZ = ifelse(sbp_2_RZ >= dbp_2_RZ, sbp_2_RZ, NA))
        dataset <- mutate(dataset, sbp_3_RZ = ifelse(sbp_3_RZ >= dbp_3_RZ, sbp_3_RZ, NA))
        dataset <- mutate(dataset, dbp_2_RZ = ifelse(sbp_2_RZ >= dbp_2_RZ, dbp_2_RZ, NA))
        dataset <- mutate(dataset, dbp_3_RZ = ifelse(sbp_3_RZ >= dbp_3_RZ, dbp_3_RZ, NA))
      
        # Subset R-Z corrected DBP.
        dataset_RZ <- dataset %>%
                      select(topmed_subject_id, dbp_2_RZ, dbp_3_RZ)
      
        # Take the mean of DBP
        vars <- c("dbp_2_RZ", "dbp_3_RZ")
        dataset$bp_diastolic <- rowMeans(dataset_RZ[, vars], na.rm = TRUE)
      
        # Exclude rows with NAs.
        dataset <- dataset %>%
                   select(topmed_subject_id, age, bp_diastolic) %>%
                   na.omit()
      
        # Return harmonized dataset.
        return(dataset)
      }
      ```
<a id="bp_diastolic_1-cardia"></a>
  * ### blood_pressure/bp_diastolic_1 -- **CARDIA**:
    * 9 component_study_variables: `phs000285.v3.pht001560.v2.phv00112481.v2`, `phs000285.v3.pht001560.v2.phv00112482.v2`, `phs000285.v3.pht001560.v2.phv00112483.v2`, `phs000285.v3.pht001560.v2.phv00112484.v2`, `phs000285.v3.pht001560.v2.phv00112487.v2`, `phs000285.v3.pht001560.v2.phv00112488.v2`, `phs000285.v3.pht001560.v2.phv00112489.v2`, `phs000285.v3.pht001560.v2.phv00112490.v2`, `phs000285.v3.pht001645.v2.phv00115119.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        # Get dataset.
        dataset <- inner_join(phen_list$source_data$pht001560,
                              phen_list$source_data$pht001645,
                              by = "topmed_subject_id")
      
        # Substitute the value of 'M' to missing.
        dataset$A02R2S[dataset$A02R2S %in% 'M'] <- NA
        dataset$A02RZ2S[dataset$A02RZ2S %in% 'M'] <- NA
        dataset$A02R2D[dataset$A02R2D %in% 'M'] <- NA
        dataset$A02RZ2D[dataset$A02RZ2D %in% 'M'] <- NA
        dataset$A02R3S[dataset$A02R3S %in% 'M'] <- NA
        dataset$A02RZ3S[dataset$A02RZ3S %in% 'M'] <- NA
        dataset$A02R3D[dataset$A02R3D %in% 'M'] <- NA
        dataset$A02RZ3D[dataset$A02RZ3D %in% 'M'] <- NA
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Calculate random-zero corrected BP readings.
        dataset <- mutate(dataset,
                          sbp2 = A02R2S - A02RZ2S,
                          dbp2 = A02R2D - A02RZ2D,
                          sbp3 = A02R3S - A02RZ3S,
                          dbp3 = A02R3D - A02RZ3D)
      
        # Set diastolic BP to NA when systolic BP is less than diastolic BP from the same reading
        # or when systolic BP from the same reading is NA.
        dataset <- mutate(dataset,
                          dbp2 = ifelse(sbp2 >= dbp2, dbp2, NA),
                          dbp3 = ifelse(sbp3 >= dbp3, dbp3, NA))
      
        # Calculate the average diastolic BP.
        dataset$bp_diastolic <- rowMeans(dataset[, c("dbp2", "dbp3")], na.rm = TRUE)
      
        # Rename and select the output variables.
        dataset <- rename(dataset, age = EXAMAGE) %>%
                   select(topmed_subject_id, bp_diastolic, age)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="bp_diastolic_1-cfs"></a>
  * ### blood_pressure/bp_diastolic_1 -- **CFS**:
    * 4 component_study_variables: `phs000284.v1.pht001902.v1.phv00122012.v1`, `phs000284.v1.pht001902.v1.phv00122015.v1`, `phs000284.v1.pht001902.v1.phv00123001.v1`, `phs000284.v1.pht001902.v1.phv00123002.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        dataset_tmp <- phen_list$source_data$pht001902 %>%
      
        # Convert from character to numeric.
                       mutate_if(is.character, as.numeric) %>%
      
        # Filter for baseline visit only.
                       filter(visit == 5) %>%
      
        # Check for inconsistencies between systolic and diastolic values.
                       filter(sbp >= dbp)
      
        # Create dataset.
        dataset <- dataset_tmp %>%
                   select(topmed_subject_id, age, bp_diastolic = dbp) %>%
                   na.omit()
      
        return(dataset)
      }
      ```
<a id="bp_diastolic_1-chs"></a>
  * ### blood_pressure/bp_diastolic_1 -- **CHS**:
    * 3 component_study_variables: `phs000287.v6.pht001452.v1.phv00100435.v1`, `phs000287.v6.pht001452.v1.phv00100436.v1`, `phs000287.v6.pht001452.v1.phv00100487.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
      
        dataset <- phen_list$source_data$pht001452 %>%
      
        # Convert from character to numeric
                   mutate_if(is.character, as.numeric) %>%
      
        # Check for inconsistencies between systolic and diastolic values
                   filter(AVZMSYS >= AVZMDIA) %>%
      
        # Select diastolic blood pressure
                   select(topmed_subject_id, AGEBL, AVZMDIA) %>%
      
        # Rename variables
                   rename(age = AGEBL, bp_diastolic = AVZMDIA) %>%
      
        # Remove NAs
                   na.omit()
      
        return(dataset)
      
      }
      ```
<a id="bp_diastolic_1-copdgene"></a>
  * ### blood_pressure/bp_diastolic_1 -- **COPDGene**:
    * 3 component_study_variables: `phs000179.v5.pht002239.v4.phv00159583.v4`, `phs000179.v5.pht002239.v4.phv00159590.v4`, `phs000179.v5.pht002239.v4.phv00159836.v4`
    * Function:
      ```r
      harmonize <- function(phen_list){
        # Get dataset.
        dataset <- phen_list$source_data$pht002239
      
        # Substitute the value of 'NA' to missing.
        dataset$sysBP[dataset$sysBP %in% 'NA'] <- NA
        dataset$diasBP[dataset$diasBP %in% 'NA'] <- NA
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Set diastolic BP to NA when systolic BP is less than diastolic BP from the same reading
        # or when systolic BP from the same reading is NA.
        dataset <- mutate(dataset, bp_diastolic = ifelse(sysBP >= diasBP, diasBP, NA))
      
        # Rename and select the output variables.
        dataset <- rename(dataset, age = Age_Enroll) %>%
                   select(topmed_subject_id, bp_diastolic, age)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="bp_diastolic_1-fhs_gen3_nos_omni2"></a>
  * ### blood_pressure/bp_diastolic_1 -- **FHS_Gen3_NOS_Omni2**:
    * 3 component_study_variables: `phs000007.v29.pht003099.v4.phv00177930.v4`, `phs000007.v29.pht006026.v1.phv00277034.v1`, `phs000007.v29.pht006026.v1.phv00277045.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
      
        dataset <- inner_join(phen_list$source_data$pht006026,
                              phen_list$source_data$pht003099,
                              by = "topmed_subject_id") %>%
      
          # Convert from character to numeric.
          mutate_if(is.character, as.numeric) %>%
      
          # Check SBP >= DBP.
          filter(SBP1 >= DBP1) %>%
      
          # Rename variables.
          rename(bp_diastolic = DBP1, age = age1) %>%
      
          # Select relevant columns for harmonized dataset.
          select(topmed_subject_id, age, bp_diastolic) %>%
      
          # Remove NAs.
          na.omit()
      
        # Return harmonized dataset.
        return(dataset)
      }
      ```
<a id="bp_diastolic_1-fhs_offspring"></a>
  * ### blood_pressure/bp_diastolic_1 -- **FHS_Offspring**:
    * 3 component_study_variables: `phs000007.v29.pht003099.v4.phv00177930.v4`, `phs000007.v29.pht006027.v1.phv00277137.v1`, `phs000007.v29.pht006027.v1.phv00277185.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
      
        dataset <- inner_join(phen_list$source_data$pht006027,
                              phen_list$source_data$pht003099,
                              by = "topmed_subject_id") %>%
      
          # Convert from character to numeric.
          mutate_if(is.character, as.numeric) %>%
      
          # Check SBP >= DBP.
          filter(SBP1 >= DBP1) %>%
      
          # Rename variables.
          rename(bp_diastolic = DBP1, age = age1) %>%
      
          # Select relevant columns for harmonized dataset.
          select(topmed_subject_id, age, bp_diastolic) %>%
      
          # Remove NAs.
          na.omit()
      
        # Return harmonized dataset.
        return(dataset)
      }
      ```
<a id="bp_diastolic_1-fhs_omni1"></a>
  * ### blood_pressure/bp_diastolic_1 -- **FHS_Omni1**:
    * 5 component_study_variables: `phs000007.v29.pht003099.v4.phv00177930.v4`, `phs000007.v29.pht004813.v1.phv00250561.v1`, `phs000007.v29.pht004813.v1.phv00250562.v1`, `phs000007.v29.pht004813.v1.phv00250652.v1`, `phs000007.v29.pht004813.v1.phv00250653.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
      
        dataset <- plyr::join_all(phen_list$source_data) %>%
      
          # Rename variables.
          rename(sbp_1 = e485, dbp_1 = e486, sbp_2 = e581, dbp_2 = e582, age = age1) %>%
      
          # Convert from character to numeric.
          mutate_if(is.character, as.numeric)
      
        # Filter for values in which sbp is greater than or equal to dbp.
        dataset <- mutate(dataset, sbp_1 = ifelse(sbp_1 >= dbp_1, sbp_1, NA))
        dataset <- mutate(dataset, sbp_2 = ifelse(sbp_2 >= dbp_2, sbp_2, NA))
        dataset <- mutate(dataset, dbp_1 = ifelse(sbp_1 >= dbp_1, dbp_1, NA))
        dataset <- mutate(dataset, dbp_2 = ifelse(sbp_2 >= dbp_2, dbp_2, NA))
      
        # Subset DBP values.
        dataset_2 <- dataset %>%
          select(topmed_subject_id, dbp_1, dbp_2)
      
        # Take the mean of DBP
        vars <- c("dbp_1", "dbp_2")
        dataset$bp_diastolic <- rowMeans(dataset_2[, vars], na.rm = TRUE)
      
        # Select columns for harmonization dataset.
        dataset <- select(dataset, topmed_subject_id, age, bp_diastolic)
      
        # Remove NAs
        dataset <- na.omit(dataset)
      
        # Return harmonized dataset.
        return(dataset)
      }
      ```
<a id="bp_diastolic_1-fhs_original"></a>
  * ### blood_pressure/bp_diastolic_1 -- **FHS_Original**:
    * 5 component_study_variables: `phs000007.v29.pht000009.v2.phv00000719.v1`, `phs000007.v29.pht000009.v2.phv00000720.v1`, `phs000007.v29.pht000009.v2.phv00000721.v1`, `phs000007.v29.pht000009.v2.phv00000722.v1`, `phs000007.v29.pht003099.v4.phv00177936.v4`
    * Function:
      ```r
      harmonize <- function(phen_list){
      
        dataset <- plyr::join_all(phen_list$source_data) %>%
      
          # Rename variables.
          rename(sbp_1 = MF264, dbp_1 = MF265, sbp_2 = MF266, dbp_2 = MF267, age = age4) %>%
      
          # Convert from character to numeric.
          mutate_if(is.character, as.numeric)
      
        # Filter for values in which sbp is greater than or equal to dbp.
        dataset <- mutate(dataset, sbp_1 = ifelse(sbp_1 >= dbp_1, sbp_1, NA))
        dataset <- mutate(dataset, sbp_2 = ifelse(sbp_2 >= dbp_2, sbp_2, NA))
        dataset <- mutate(dataset, dbp_1 = ifelse(sbp_1 >= dbp_1, dbp_1, NA))
        dataset <- mutate(dataset, dbp_2 = ifelse(sbp_2 >= dbp_2, dbp_2, NA))
      
        # Subset DBP values.
        dataset_2 <- dataset %>%
          select(topmed_subject_id, dbp_1, dbp_2)
      
        # Take the mean of DBP
        vars <- c("dbp_1", "dbp_2")
        dataset$bp_diastolic <- rowMeans(dataset_2[, vars], na.rm = TRUE)
      
        # Select columns for harmonization dataset.
        dataset <- select(dataset, topmed_subject_id, age, bp_diastolic)
      
        # Remove NAs
        dataset <- na.omit(dataset)
      
        # Return harmonized dataset.
        return(dataset)
      }
      ```
<a id="bp_diastolic_1-genoa"></a>
  * ### blood_pressure/bp_diastolic_1 -- **GENOA**:
    * 10 component_study_variables: `phs001238.v1.pht006039.v1.phv00277507.v1`, `phs001238.v1.pht006039.v1.phv00277520.v1`, `phs001238.v1.pht006039.v1.phv00277521.v1`, `phs001238.v1.pht006039.v1.phv00277522.v1`, `phs001238.v1.pht006039.v1.phv00277523.v1`, `phs001238.v1.pht006653.v1.phv00307788.v1`, `phs001238.v1.pht006653.v1.phv00307801.v1`, `phs001238.v1.pht006653.v1.phv00307802.v1`, `phs001238.v1.pht006653.v1.phv00307803.v1`, `phs001238.v1.pht006653.v1.phv00307804.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        # Get dataset.
        dataset <- union(phen_list$source_data$pht006039, phen_list$source_data$pht006653)
      
        # Substitute the value of 'NA' to missing.
        dataset$RAND_SYS2[dataset$RAND_SYS2 %in% 'NA'] <- NA
        dataset$RAND_DIA2[dataset$RAND_DIA2 %in% 'NA'] <- NA
        dataset$RAND_SYS3[dataset$RAND_SYS3 %in% 'NA'] <- NA
        dataset$RAND_DIA3[dataset$RAND_DIA3 %in% 'NA'] <- NA
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Set diastolic BP to NA when systolic BP is less than diastolic BP from the same reading
        # or when systolic BP from the same reading is NA.
        dataset <- mutate(dataset,
                          dbp2 = ifelse(RAND_SYS2 >= RAND_DIA2, RAND_DIA2, NA),
                          dbp3 = ifelse(RAND_SYS3 >= RAND_DIA3, RAND_DIA3, NA))
      
        # Calculate the average systolic BP.
        dataset$bp_diastolic <- rowMeans(dataset[, c("dbp2", "dbp3")], na.rm = TRUE)
      
        # Rename and select the output variables.
        dataset <- rename(dataset, age = AGE) %>%
                   select(topmed_subject_id, bp_diastolic, age)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="bp_diastolic_1-goldn"></a>
  * ### blood_pressure/bp_diastolic_1 -- **GOLDN**:
    * 3 component_study_variables: `phs000741.v2.pht003918.v2.phv00202104.v2`, `phs000741.v2.pht003918.v2.phv00259052.v1`, `phs000741.v2.pht003918.v2.phv00259053.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        # Get dataset.
        dataset <- phen_list$source_data$pht003918
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Set diastolic BP to NA when systolic BP is less than diastolic BP from the same reading
        # or when systolic BP from the same reading is NA.
        dataset <- mutate(dataset, bp_diastolic = ifelse(SBP >= DBP, DBP, NA))
      
        # Select the output variables.
        dataset <- select(dataset, topmed_subject_id, bp_diastolic, age)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="bp_diastolic_1-hchs_sol"></a>
  * ### blood_pressure/bp_diastolic_1 -- **HCHS_SOL**:
    * 3 component_study_variables: `phs000810.v1.pht004715.v1.phv00226251.v1`, `phs000810.v1.pht004715.v1.phv00226390.v1`, `phs000810.v1.pht004715.v1.phv00226391.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        # Select phenotype dataset.
        dataset <- phen_list$source_data$pht004715 %>%
        # Convert character variables to numeric.
                   mutate_if(is.character, as.numeric) %>%
        # Subset to observations where SBP is greater than or equal to DBP.
                   filter(SBPA5 >= SBPA6) %>%
        # Rename variables.
                   select(topmed_subject_id, bp_diastolic = SBPA6, age = AGE) %>%
        # Exclude rows with NAs.
                   na.omit()
        return(dataset)
      }
      ```
<a id="bp_diastolic_1-jhs"></a>
  * ### blood_pressure/bp_diastolic_1 -- **JHS**:
    * 7 component_study_variables: `phs000286.v5.pht001949.v1.phv00126009.v1`, `phs000286.v5.pht001974.v1.phv00128370.v1`, `phs000286.v5.pht001974.v1.phv00128371.v1`, `phs000286.v5.pht001974.v1.phv00128372.v1`, `phs000286.v5.pht001974.v1.phv00128373.v1`, `phs000286.v5.pht001974.v1.phv00128374.v1`, `phs000286.v5.pht001974.v1.phv00128375.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        # Get dataset.
        dataset <- inner_join(phen_list$source_data$pht001949,
                              phen_list$source_data$pht001974,
                              by = "topmed_subject_id")
      
        # Substitute the value of 'NA' to missing.
        dataset$SBPA13[dataset$SBPA13 %in% 'NA'] <- NA
        dataset$SBPA14[dataset$SBPA14 %in% 'NA'] <- NA
        dataset$SBPA15[dataset$SBPA15 %in% 'NA'] <- NA
        dataset$SBPA16[dataset$SBPA16 %in% 'NA'] <- NA
        dataset$SBPA17[dataset$SBPA17 %in% 'NA'] <- NA
        dataset$SBPA18[dataset$SBPA18 %in% 'NA'] <- NA
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Calculate random-zero corrected BP readings.
        dataset <- mutate(dataset,
                          sbp1 = SBPA13 - SBPA15,
                          dbp1 = SBPA14 - SBPA15,
                          sbp2 = SBPA16 - SBPA18,
                          dbp2 = SBPA17 - SBPA18)
      
        # Set diastolic BP to NA when systolic BP is less than diastolic BP from the same reading
        # or when systolic BP from the same reading is NA.
        dataset <- mutate(dataset,
                          dbp1 = ifelse(sbp1 >= dbp1, dbp1, NA),
                          dbp2 = ifelse(sbp2 >= dbp2, dbp2, NA))
      
        # Calculate the average diastolic BP.
        dataset$bp_diastolic <- rowMeans(dataset[, c("dbp1", "dbp2")], na.rm = TRUE)
      
        # Rename and select the output variables.
        dataset <- rename(dataset, age = AGE01) %>%
                   select(topmed_subject_id, bp_diastolic, age)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="bp_diastolic_1-mesa"></a>
  * ### blood_pressure/bp_diastolic_1 -- **MESA**:
    * 15 component_study_variables: `phs000209.v13.pht001111.v4.phv00082639.v2`, `phs000209.v13.pht001111.v4.phv00083403.v1`, `phs000209.v13.pht001111.v4.phv00083404.v1`, `phs000209.v13.pht001111.v4.phv00083406.v1`, `phs000209.v13.pht001111.v4.phv00083407.v1`, `phs000209.v13.pht001116.v10.phv00084442.v3`, `phs000209.v13.pht001116.v10.phv00085735.v2`, `phs000209.v13.pht001116.v10.phv00085736.v2`, `phs000209.v13.pht001116.v10.phv00085737.v2`, `phs000209.v13.pht001116.v10.phv00085738.v2`, `phs000209.v13.pht001121.v3.phv00087071.v1`, `phs000209.v13.pht001121.v3.phv00087509.v1`, `phs000209.v13.pht001121.v3.phv00087510.v1`, `phs000209.v13.pht001121.v3.phv00087512.v1`, `phs000209.v13.pht001121.v3.phv00087513.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
      
        # Merge pht001111 and pht001116.
        dataset <- rbind(phen_list$source_data$pht001111, phen_list$source_data$pht001116)
      
        # Rename variable names for pht001121.
        dataset_21 <- phen_list$source_data$pht001121 %>%
                      rename(s2bp1 = s2bpf,
                             d2bp1 = d2bpf,
                             s3bp1 = s3bpf,
                             d3bp1 = d3bpf,
                             age1c = agefc)
      
        # Merge pht001121 with previously merged dataset.
        dataset <- rbind(dataset, dataset_21) %>%
      
          # Rename variables.
          rename(sbp_2 = s2bp1, dbp_2 = d2bp1, sbp_3 = s3bp1, dbp_3 = d3bp1, age = age1c) %>%
      
          # Convert from character to numeric.
          mutate_if(is.character, as.numeric)
      
        # Filter for values in which sbp is greater than or equal to dbp.
        dataset <- mutate(dataset, sbp_2 = ifelse(sbp_2 > dbp_2, sbp_2, NA))
        dataset <- mutate(dataset, sbp_3 = ifelse(sbp_3 > dbp_3, sbp_3, NA))
        dataset <- mutate(dataset, dbp_2 = ifelse(sbp_2 > dbp_2, dbp_2, NA))
        dataset <- mutate(dataset, dbp_3 = ifelse(sbp_3 > dbp_3, dbp_3, NA))
      
        # Subset DBP values.
        dataset_2 <- dataset %>%
          select(topmed_subject_id, dbp_2, dbp_3)
      
        # Take the mean of DBP
        vars <- c("dbp_2", "dbp_3")
        dataset$bp_diastolic <- rowMeans(dataset_2[, vars], na.rm = TRUE)
      
        # Select columns for harmonization dataset.
        dataset <- select(dataset, topmed_subject_id, age, bp_diastolic)
      
        # Remove NAs
        dataset <- na.omit(dataset)
      
        # Return harmonized dataset.
        return(dataset)
      }
      ```
<a id="bp_diastolic_1-sas"></a>
  * ### blood_pressure/bp_diastolic_1 -- **SAS**:
    * 3 component_study_variables: `phs000914.v1.pht005253.v1.phv00258680.v1`, `phs000914.v1.pht005253.v1.phv00258701.v1`, `phs000914.v1.pht005253.v1.phv00258703.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        # Get dataset.
        dataset <- phen_list$source_data$pht005253 %>%
        # Rename variables.
                   transmute(topmed_subject_id,
                             age = Dec_Age,
                             bp_diastolic = na_if(Diastolic_BP, "NA"),
                             bp_systolic = na_if(Systolic_BP, "NA")) %>%
                   mutate_at(vars(age, bp_diastolic, bp_systolic), funs(as.numeric)) %>%
        # Subset to observations where systolic BP is greater than or equal to diastolic BP.
                   filter(bp_systolic >= bp_diastolic) %>%
        # Select the output variables and remove NAs.
                   select(-bp_systolic) %>%
                   na.omit()
        return(dataset)
      }
      ```
<a id="bp_diastolic_1-whi"></a>
  * ### blood_pressure/bp_diastolic_1 -- **WHI**:
    * 8 component_study_variables: `phs000200.v11.pht000998.v6.phv00078436.v6`, `phs000200.v11.pht000998.v6.phv00078437.v6`, `phs000200.v11.pht001019.v6.phv00079850.v6`, `phs000200.v11.pht001019.v6.phv00079852.v6`, `phs000200.v11.pht001019.v6.phv00079854.v6`, `phs000200.v11.pht001019.v6.phv00079855.v6`, `phs000200.v11.pht001019.v6.phv00079856.v6`, `phs000200.v11.pht001019.v6.phv00079857.v6`
    * Function:
      ```r
      harmonize <- function(phen_list){
        # Get blood pressure dataset.
        dataset <- phen_list$source_data$pht001019
      
        # Subset to baseline visit.
        dataset <- filter(dataset, F80VTYP == 1)
      
        # Substitute the value of 'NA' to missing.
        dataset$SYSTBP1[dataset$SYSTBP1 %in% 'NA'] <- NA
        dataset$DIASBP1[dataset$DIASBP1 %in% 'NA'] <- NA
        dataset$SYSTBP2[dataset$SYSTBP2 %in% 'NA'] <- NA
        dataset$DIASBP2[dataset$DIASBP2 %in% 'NA'] <- NA
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Set diastolic BP to NA when systolic BP is less than diastolic BP from the same reading
        # or when systolic BP from the same reading is NA.
        dataset <- mutate(dataset,
                          dbp1 = ifelse(SYSTBP1 >= DIASBP1, DIASBP1, NA),
                          dbp2 = ifelse(SYSTBP2 >= DIASBP2, DIASBP2, NA))
      
        # Calculate the average diastolic BP.
        dataset$bp_diastolic <- rowMeans(dataset[, c("dbp1", "dbp2")], na.rm = TRUE)
      
        # Select the blood pressure variables.
        dataset <- select(dataset, topmed_subject_id, bp_diastolic, F80DAYS)
      
        # Get age dataset.
        dataset_age <- phen_list$source_data$pht000998
      
        # Substitute the value of 'NA' to missing.
        dataset_age$F2DAYS[dataset_age$F2DAYS %in% 'NA'] <- NA
        dataset_age$AGE[dataset_age$AGE %in% 'NA'] <- NA
      
        # Convert character values to numeric.
        dataset_age <- mutate_if(dataset_age, is.character, as.numeric)
      
        # Join blood pressure dataset and age dataset.
        dataset <- inner_join(dataset, dataset_age, by = "topmed_subject_id")
      
        # Calculate age at blood pressure measurement.
        dataset <- mutate(dataset,
                          age = ifelse(F2DAYS > 0,
                                       AGE + F80DAYS / 365.25,
                                       AGE + (abs(F2DAYS) + F80DAYS) / 365.25))
      
        # Select the output variables.
        dataset <- select(dataset, topmed_subject_id, bp_diastolic, age)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="bp_systolic_1"></a>
## blood_pressure: **bp_systolic_1** (bp_systolic)
  Resting systolic blood pressure from the upper arm in a clinical setting.
  * **Harmonization Units**:
    * [Amish](#bp_systolic_1-amish)
    * [ARIC](#bp_systolic_1-aric)
    * [CARDIA](#bp_systolic_1-cardia)
    * [CFS](#bp_systolic_1-cfs)
    * [CHS](#bp_systolic_1-chs)
    * [COPDGene](#bp_systolic_1-copdgene)
    * [FHS_Gen3_NOS_Omni2](#bp_systolic_1-fhs_gen3_nos_omni2)
    * [FHS_Offspring](#bp_systolic_1-fhs_offspring)
    * [FHS_Omni1](#bp_systolic_1-fhs_omni1)
    * [FHS_Original](#bp_systolic_1-fhs_original)
    * [GENOA](#bp_systolic_1-genoa)
    * [GOLDN](#bp_systolic_1-goldn)
    * [HCHS_SOL](#bp_systolic_1-hchs_sol)
    * [JHS](#bp_systolic_1-jhs)
    * [MESA](#bp_systolic_1-mesa)
    * [SAS](#bp_systolic_1-sas)
    * [WHI](#bp_systolic_1-whi)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: mmHg, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2018-07-31 12:02:39
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C2039694
  * **DCC Harmonization Comments**:

    This variable was harmonized by taking the average of two systolic blood pressure (BP) measurements collected at a single clinic visit. When more than two measurements were collected, the average was calculated using the second and third measurements. In cases where either of the measurements was missing, the average was calculated discarding the missing value. If a study used a random-zero sphygmomanometer and the variables representing the zero readings were available in dbGaP, the zero reading adjustments were applied in the harmonization. In cases where the individual BP measurements were not available in dbGaP, a mean systolic BP variable derived by the study was used for harmonization. For paired systolic and diastolic BP measurements, if one of the paired measurements was missing or the systolic BP was less than the diastolic BP, the values for both systolic BP and diastolic BP for that pair were set to missing. This harmonized variable was not adjusted for antihypertensive medication status.
    
    #### COPDGene
    
    Only one blood pressure measurement was available for each subject at baseline, so an average systolic BP value could not be calculated. The single measurement was used for harmonization of systolic BP.
    
    #### FHS
    
    Because antihypertensive medication was not recorded before Exam 4 for the Original cohort, systolic BP values from Exam 4 were used for harmonization.
    
    #### GOLDN
    
    Only one blood pressure measurement was available for each subject at baseline, so an average systolic BP value could not be calculated. The single measurement was used for harmonization of systolic BP.
    
    #### Instrumentation
    
    The instruments used for BP measurements were different among studies, including standard manual sphygmomanometers, random-zero sphygmomanometers, and automated digital blood pressure monitors.
    
<a id="bp_systolic_1-amish"></a>
  * ### blood_pressure/bp_systolic_1 -- **Amish**:
    * 3 component_study_variables: `phs000956.v2.pht005002.v1.phv00252976.v1`, `phs000956.v2.pht005002.v1.phv00252995.v1`, `phs000956.v2.pht005002.v1.phv00252996.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        # Get dataset.
        dataset <- phen_list$source_data$pht005002
        # Substitute the winsorized age value of '90+' to a numeric value 90.
        ind <- dataset$age_baseline == "90+"
        dataset$age_baseline[ind] <- "90"
        # Rename variables.
        dataset <- transmute(dataset,
                             topmed_subject_id,
                             bp_systolic = as.numeric(sbp_baseline),
                             bp_diastolic = as.numeric(dbp_baseline),
                             age = as.numeric(age_baseline)) %>%
        # Subset to observations where systolic BP is greater than or equal to diastolic BP.
                   filter(bp_systolic >= bp_diastolic) %>%
        # Select the output variables and remove NAs.
                   select(-bp_diastolic) %>%
                   na.omit()
        return(dataset)
      }
      ```
<a id="bp_systolic_1-aric"></a>
  * ### blood_pressure/bp_systolic_1 -- **ARIC**:
    * 7 component_study_variables: `phs000280.v4.pht004063.v2.phv00204712.v1`, `phs000280.v4.pht004192.v2.phv00210284.v1`, `phs000280.v4.pht004192.v2.phv00210285.v1`, `phs000280.v4.pht004192.v2.phv00210286.v1`, `phs000280.v4.pht004192.v2.phv00210287.v1`, `phs000280.v4.pht004192.v2.phv00210288.v1`, `phs000280.v4.pht004192.v2.phv00210289.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        # Select phenotype dataset.
        dataset <- plyr::join_all(phen_list$source_data)
      
        # Change "NA" to NA.
        dataset$SBPA15[dataset$SBPA15 %in% 'NA'] <- NA
        dataset$SBPA18[dataset$SBPA18 %in% 'NA'] <- NA
        dataset$SBPA16[dataset$SBPA16 %in% 'NA'] <- NA
        dataset$SBPA19[dataset$SBPA19 %in% 'NA'] <- NA
        dataset$SBPA17[dataset$SBPA17 %in% 'NA'] <- NA
        dataset$SBPA20[dataset$SBPA20 %in% 'NA'] <- NA
        dataset$V1AGE01[dataset$V1AGE01 %in% 'NA'] <- NA
      
        dataset$SBPA15[dataset$SBPA15 %in% 'A'] <- NA
        dataset$SBPA18[dataset$SBPA18 %in% 'A'] <- NA
        dataset$SBPA16[dataset$SBPA16 %in% 'A'] <- NA
        dataset$SBPA19[dataset$SBPA19 %in% 'A'] <- NA
        dataset$SBPA17[dataset$SBPA17 %in% 'A'] <- NA
        dataset$SBPA20[dataset$SBPA20 %in% 'A'] <- NA
        dataset$V1AGE01[dataset$V1AGE01 %in% 'A'] <- NA
      
        # Rename variables and convert to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric) %>%
                   rename(sbp_2 = SBPA15,
                          sbp_3 = SBPA18,
                          dbp_2 = SBPA16,
                          dbp_3 = SBPA19,
                          zero_2 = SBPA17,
                          zero_3 = SBPA20,
                          age = V1AGE01)
      
        # Use Random zero correction for SBP and DBP values.
        dataset$sbp_2_RZ <- dataset$sbp_2 - dataset$zero_2
        dataset$sbp_3_RZ <- dataset$sbp_3 - dataset$zero_3
      
        dataset$dbp_2_RZ <- dataset$dbp_2 - dataset$zero_2
        dataset$dbp_3_RZ <- dataset$dbp_3 - dataset$zero_3
      
        # Check SBP value is greater than or equal to DBP value.
        dataset <- mutate(dataset, sbp_2_RZ = ifelse(sbp_2_RZ >= dbp_2_RZ, sbp_2_RZ, NA))
        dataset <- mutate(dataset, sbp_3_RZ = ifelse(sbp_3_RZ >= dbp_3_RZ, sbp_3_RZ, NA))
        dataset <- mutate(dataset, dbp_2_RZ = ifelse(sbp_2_RZ >= dbp_2_RZ, dbp_2_RZ, NA))
        dataset <- mutate(dataset, dbp_3_RZ = ifelse(sbp_3_RZ >= dbp_3_RZ, dbp_3_RZ, NA))
      
        # Subset R-Z corrected SBP.
        dataset_RZ <- dataset %>%
                      select(topmed_subject_id, sbp_2_RZ, sbp_3_RZ)
      
        # Take the mean of SBP
        vars <- c("sbp_2_RZ", "sbp_3_RZ")
        dataset$bp_systolic <- rowMeans(dataset_RZ[, vars], na.rm = TRUE)
      
        # Exclude rows with NAs.
        dataset <- dataset %>%
                   select(topmed_subject_id, age, bp_systolic) %>%
                   na.omit()
      
        # Return harmonized dataset.
        return(dataset)
      }
      ```
<a id="bp_systolic_1-cardia"></a>
  * ### blood_pressure/bp_systolic_1 -- **CARDIA**:
    * 9 component_study_variables: `phs000285.v3.pht001560.v2.phv00112481.v2`, `phs000285.v3.pht001560.v2.phv00112482.v2`, `phs000285.v3.pht001560.v2.phv00112483.v2`, `phs000285.v3.pht001560.v2.phv00112484.v2`, `phs000285.v3.pht001560.v2.phv00112487.v2`, `phs000285.v3.pht001560.v2.phv00112488.v2`, `phs000285.v3.pht001560.v2.phv00112489.v2`, `phs000285.v3.pht001560.v2.phv00112490.v2`, `phs000285.v3.pht001645.v2.phv00115119.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        # Get dataset.
        dataset <- inner_join(phen_list$source_data$pht001560,
                              phen_list$source_data$pht001645,
                              by = "topmed_subject_id")
      
        # Substitute the value of 'M' to missing.
        dataset$A02R2S[dataset$A02R2S %in% 'M'] <- NA
        dataset$A02RZ2S[dataset$A02RZ2S %in% 'M'] <- NA
        dataset$A02R2D[dataset$A02R2D %in% 'M'] <- NA
        dataset$A02RZ2D[dataset$A02RZ2D %in% 'M'] <- NA
        dataset$A02R3S[dataset$A02R3S %in% 'M'] <- NA
        dataset$A02RZ3S[dataset$A02RZ3S %in% 'M'] <- NA
        dataset$A02R3D[dataset$A02R3D %in% 'M'] <- NA
        dataset$A02RZ3D[dataset$A02RZ3D %in% 'M'] <- NA
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Calculate random-zero corrected BP readings.
        dataset <- mutate(dataset,
                          sbp2 = A02R2S - A02RZ2S,
                          dbp2 = A02R2D - A02RZ2D,
                          sbp3 = A02R3S - A02RZ3S,
                          dbp3 = A02R3D - A02RZ3D)
      
        # Set systolic BP to NA when systolic BP is less than diastolic BP from the same reading
        # or when diastolic BP from the same reading is NA.
        dataset <- mutate(dataset,
                          sbp2 = ifelse(sbp2 >= dbp2, sbp2, NA),
                          sbp3 = ifelse(sbp3 >= dbp3, sbp3, NA))
      
        # Calculate the average systolic BP.
        dataset$bp_systolic <- rowMeans(dataset[, c("sbp2", "sbp3")], na.rm = TRUE)
      
        # Rename and select the output variables.
        dataset <- rename(dataset, age = EXAMAGE) %>%
                   select(topmed_subject_id, bp_systolic, age)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="bp_systolic_1-cfs"></a>
  * ### blood_pressure/bp_systolic_1 -- **CFS**:
    * 4 component_study_variables: `phs000284.v1.pht001902.v1.phv00122012.v1`, `phs000284.v1.pht001902.v1.phv00122015.v1`, `phs000284.v1.pht001902.v1.phv00123001.v1`, `phs000284.v1.pht001902.v1.phv00123002.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        dataset_tmp <- phen_list$source_data$pht001902 %>%
      
        # Convert from character to numeric.
                       mutate_if(is.character, as.numeric) %>%
      
        # Filter for baseline visit only
                       filter(visit == 5) %>%
      
        # Check for inconsistencies between systolic and diastolic values.
                       filter(sbp >= dbp)
      
        # Create dataset.
        dataset <- dataset_tmp %>%
                   select(topmed_subject_id, age, bp_systolic = sbp) %>%
                   na.omit()
      
        return(dataset)
      }
      ```
<a id="bp_systolic_1-chs"></a>
  * ### blood_pressure/bp_systolic_1 -- **CHS**:
    * 3 component_study_variables: `phs000287.v6.pht001452.v1.phv00100435.v1`, `phs000287.v6.pht001452.v1.phv00100436.v1`, `phs000287.v6.pht001452.v1.phv00100487.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
      
        dataset <- phen_list$source_data$pht001452 %>%
      
        # Convert from character to numeric
                   mutate_if(is.character, as.numeric) %>%
      
        # Check for inconsistencies between systolic and diastolic values
                   filter(AVZMSYS >= AVZMDIA) %>%
      
        # Select systolic blood pressure
                   select(topmed_subject_id, AGEBL, AVZMSYS) %>%
      
        # Rename variables
                   rename(age = AGEBL, bp_systolic = AVZMSYS) %>%
      
        # Remove NAs
                   na.omit()
      
        return(dataset)
      
      }
      ```
<a id="bp_systolic_1-copdgene"></a>
  * ### blood_pressure/bp_systolic_1 -- **COPDGene**:
    * 3 component_study_variables: `phs000179.v5.pht002239.v4.phv00159583.v4`, `phs000179.v5.pht002239.v4.phv00159590.v4`, `phs000179.v5.pht002239.v4.phv00159836.v4`
    * Function:
      ```r
      harmonize <- function(phen_list){
        # Get dataset.
        dataset <- phen_list$source_data$pht002239
      
        # Substitute the value of 'NA' to missing.
        dataset$sysBP[dataset$sysBP %in% 'NA'] <- NA
        dataset$diasBP[dataset$diasBP %in% 'NA'] <- NA
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Set systolic BP to NA when systolic BP is less than diastolic BP from the same reading
        # or when diastolic BP from the same reading is NA.
        dataset <- mutate(dataset, bp_systolic = ifelse(sysBP >= diasBP, sysBP, NA))
      
        # Rename and select the output variables.
        dataset <- rename(dataset, age = Age_Enroll) %>%
                   select(topmed_subject_id, bp_systolic, age)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="bp_systolic_1-fhs_gen3_nos_omni2"></a>
  * ### blood_pressure/bp_systolic_1 -- **FHS_Gen3_NOS_Omni2**:
    * 3 component_study_variables: `phs000007.v29.pht003099.v4.phv00177930.v4`, `phs000007.v29.pht006026.v1.phv00277034.v1`, `phs000007.v29.pht006026.v1.phv00277045.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
      
        dataset <- inner_join(phen_list$source_data$pht006026,
                              phen_list$source_data$pht003099,
                              by = "topmed_subject_id") %>%
      
          # Convert from character to numeric.
          mutate_if(is.character, as.numeric) %>%
      
          # Check SBP >= DBP.
          filter(SBP1 >= DBP1) %>%
      
          # Rename variables.
          rename(bp_systolic = SBP1, age = age1) %>%
      
          # Select relevant columns for harmonized dataset.
          select(topmed_subject_id, age, bp_systolic) %>%
      
          # Remove NAs.
          na.omit()
      
        # Return harmonized dataset.
        return(dataset)
      }
      ```
<a id="bp_systolic_1-fhs_offspring"></a>
  * ### blood_pressure/bp_systolic_1 -- **FHS_Offspring**:
    * 3 component_study_variables: `phs000007.v29.pht003099.v4.phv00177930.v4`, `phs000007.v29.pht006027.v1.phv00277137.v1`, `phs000007.v29.pht006027.v1.phv00277185.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
      
        dataset <- inner_join(phen_list$source_data$pht006027,
                              phen_list$source_data$pht003099,
                              by = "topmed_subject_id") %>%
      
          # Convert from character to numeric.
          mutate_if(is.character, as.numeric) %>%
      
          # Check SBP >= DBP.
          filter(SBP1 >= DBP1) %>%
      
          # Rename variables.
          rename(bp_systolic = SBP1, age = age1) %>%
      
          # Select relevant columns for harmonized dataset.
          select(topmed_subject_id, age, bp_systolic) %>%
      
          # Remove NAs.
          na.omit()
      
        # Return harmonized dataset.
        return(dataset)
      }
      ```
<a id="bp_systolic_1-fhs_omni1"></a>
  * ### blood_pressure/bp_systolic_1 -- **FHS_Omni1**:
    * 5 component_study_variables: `phs000007.v29.pht003099.v4.phv00177930.v4`, `phs000007.v29.pht004813.v1.phv00250561.v1`, `phs000007.v29.pht004813.v1.phv00250562.v1`, `phs000007.v29.pht004813.v1.phv00250652.v1`, `phs000007.v29.pht004813.v1.phv00250653.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
      
        dataset <- plyr::join_all(phen_list$source_data) %>%
      
          # Rename variables.
          rename(sbp_1 = e485, dbp_1 = e486, sbp_2 = e581, dbp_2 = e582, age = age1) %>%
      
          # Convert from character to numeric.
          mutate_if(is.character, as.numeric)
      
        # Filter for values in which sbp is greater than or equal to dbp.
        dataset <- mutate(dataset, sbp_1 = ifelse(sbp_1 >= dbp_1, sbp_1, NA))
        dataset <- mutate(dataset, sbp_2 = ifelse(sbp_2 >= dbp_2, sbp_2, NA))
        dataset <- mutate(dataset, dbp_1 = ifelse(sbp_1 >= dbp_1, dbp_1, NA))
        dataset <- mutate(dataset, dbp_2 = ifelse(sbp_2 >= dbp_2, dbp_2, NA))
      
        # Subset SBP values.
        dataset_2 <- dataset %>%
          select(topmed_subject_id, sbp_1, sbp_2)
      
        # Take the mean of SBP
        vars <- c("sbp_1", "sbp_2")
        dataset$bp_systolic <- rowMeans(dataset_2[, vars], na.rm = TRUE)
      
        # Select columns for harmonization dataset.
        dataset <- select(dataset, topmed_subject_id, age, bp_systolic)
      
        # Remove NAs
        dataset <- na.omit(dataset)
      
        # Return harmonized dataset.
        return(dataset)
      }
      ```
<a id="bp_systolic_1-fhs_original"></a>
  * ### blood_pressure/bp_systolic_1 -- **FHS_Original**:
    * 5 component_study_variables: `phs000007.v29.pht000009.v2.phv00000719.v1`, `phs000007.v29.pht000009.v2.phv00000720.v1`, `phs000007.v29.pht000009.v2.phv00000721.v1`, `phs000007.v29.pht000009.v2.phv00000722.v1`, `phs000007.v29.pht003099.v4.phv00177936.v4`
    * Function:
      ```r
      harmonize <- function(phen_list){
      
        dataset <- plyr::join_all(phen_list$source_data) %>%
      
          # Rename variables.
          rename(sbp_1 = MF264, dbp_1 = MF265, sbp_2 = MF266, dbp_2 = MF267, age = age4) %>%
      
          # Convert from character to numeric.
          mutate_if(is.character, as.numeric)
      
        # Filter for values in which sbp is greater than or equal to dbp.
        dataset <- mutate(dataset, sbp_1 = ifelse(sbp_1 >= dbp_1, sbp_1, NA))
        dataset <- mutate(dataset, sbp_2 = ifelse(sbp_2 >= dbp_2, sbp_2, NA))
        dataset <- mutate(dataset, dbp_1 = ifelse(sbp_1 >= dbp_1, dbp_1, NA))
        dataset <- mutate(dataset, dbp_2 = ifelse(sbp_2 >= dbp_2, dbp_2, NA))
      
        # Subset SBP values.
        dataset_2 <- dataset %>%
          select(topmed_subject_id, sbp_1, sbp_2)
      
        # Take the mean of SBP
        vars <- c("sbp_1", "sbp_2")
        dataset$bp_systolic <- rowMeans(dataset_2[, vars], na.rm = TRUE)
      
        # Select columns for harmonization dataset.
        dataset <- select(dataset, topmed_subject_id, age, bp_systolic)
      
        # Remove NAs
        dataset <- na.omit(dataset)
      
        # Return harmonized dataset.
        return(dataset)
      }
      ```
<a id="bp_systolic_1-genoa"></a>
  * ### blood_pressure/bp_systolic_1 -- **GENOA**:
    * 10 component_study_variables: `phs001238.v1.pht006039.v1.phv00277507.v1`, `phs001238.v1.pht006039.v1.phv00277520.v1`, `phs001238.v1.pht006039.v1.phv00277521.v1`, `phs001238.v1.pht006039.v1.phv00277522.v1`, `phs001238.v1.pht006039.v1.phv00277523.v1`, `phs001238.v1.pht006653.v1.phv00307788.v1`, `phs001238.v1.pht006653.v1.phv00307801.v1`, `phs001238.v1.pht006653.v1.phv00307802.v1`, `phs001238.v1.pht006653.v1.phv00307803.v1`, `phs001238.v1.pht006653.v1.phv00307804.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        # Get dataset.
        dataset <- union(phen_list$source_data$pht006039, phen_list$source_data$pht006653)
      
        # Substitute the value of 'NA' to missing.
        dataset$RAND_SYS2[dataset$RAND_SYS2 %in% 'NA'] <- NA
        dataset$RAND_DIA2[dataset$RAND_DIA2 %in% 'NA'] <- NA
        dataset$RAND_SYS3[dataset$RAND_SYS3 %in% 'NA'] <- NA
        dataset$RAND_DIA3[dataset$RAND_DIA3 %in% 'NA'] <- NA
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Set systolic BP to NA when systolic BP is less than diastolic BP from the same reading
        # or when diastolic BP from the same reading is NA.
        dataset <- mutate(dataset,
                          sbp2 = ifelse(RAND_SYS2 >= RAND_DIA2, RAND_SYS2, NA),
                          sbp3 = ifelse(RAND_SYS3 >= RAND_DIA3, RAND_SYS3, NA))
      
        # Calculate the average systolic BP.
        dataset$bp_systolic <- rowMeans(dataset[, c("sbp2", "sbp3")], na.rm = TRUE)
      
        # Rename and select the output variables.
        dataset <- rename(dataset, age = AGE) %>%
                   select(topmed_subject_id, bp_systolic, age)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="bp_systolic_1-goldn"></a>
  * ### blood_pressure/bp_systolic_1 -- **GOLDN**:
    * 3 component_study_variables: `phs000741.v2.pht003918.v2.phv00202104.v2`, `phs000741.v2.pht003918.v2.phv00259052.v1`, `phs000741.v2.pht003918.v2.phv00259053.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        # Get dataset.
        dataset <- phen_list$source_data$pht003918
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Set systolic BP to NA when systolic BP is less than diastolic BP from the same reading
        # or when diastolic BP from the same reading is NA.
        dataset <- mutate(dataset, bp_systolic = ifelse(SBP >= DBP, SBP, NA))
      
        # Select the output variables.
        dataset <- select(dataset, topmed_subject_id, bp_systolic, age)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="bp_systolic_1-hchs_sol"></a>
  * ### blood_pressure/bp_systolic_1 -- **HCHS_SOL**:
    * 3 component_study_variables: `phs000810.v1.pht004715.v1.phv00226251.v1`, `phs000810.v1.pht004715.v1.phv00226390.v1`, `phs000810.v1.pht004715.v1.phv00226391.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        # Select phenotype dataset.
        dataset <- phen_list$source_data$pht004715 %>%
        # Convert character variables to numeric.
                   mutate_if(is.character, as.numeric) %>%
        # Subset to observations where SBP is greater than or equal to DBP.
                   filter(SBPA5 >= SBPA6) %>%
        # Rename variables.
                   select(topmed_subject_id, bp_systolic = SBPA5, age = AGE) %>%
        # Exclude rows with NAs.
                   na.omit()
        return(dataset)
      }
      ```
<a id="bp_systolic_1-jhs"></a>
  * ### blood_pressure/bp_systolic_1 -- **JHS**:
    * 7 component_study_variables: `phs000286.v5.pht001949.v1.phv00126009.v1`, `phs000286.v5.pht001974.v1.phv00128370.v1`, `phs000286.v5.pht001974.v1.phv00128371.v1`, `phs000286.v5.pht001974.v1.phv00128372.v1`, `phs000286.v5.pht001974.v1.phv00128373.v1`, `phs000286.v5.pht001974.v1.phv00128374.v1`, `phs000286.v5.pht001974.v1.phv00128375.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        # Get dataset.
        dataset <- inner_join(phen_list$source_data$pht001949,
                              phen_list$source_data$pht001974,
                              by = "topmed_subject_id")
      
        # Substitute the value of 'NA' to missing.
        dataset$SBPA13[dataset$SBPA13 %in% 'NA'] <- NA
        dataset$SBPA14[dataset$SBPA14 %in% 'NA'] <- NA
        dataset$SBPA15[dataset$SBPA15 %in% 'NA'] <- NA
        dataset$SBPA16[dataset$SBPA16 %in% 'NA'] <- NA
        dataset$SBPA17[dataset$SBPA17 %in% 'NA'] <- NA
        dataset$SBPA18[dataset$SBPA18 %in% 'NA'] <- NA
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Calculate random-zero corrected BP readings.
        dataset <- mutate(dataset,
                          sbp1 = SBPA13 - SBPA15,
                          dbp1 = SBPA14 - SBPA15,
                          sbp2 = SBPA16 - SBPA18,
                          dbp2 = SBPA17 - SBPA18)
      
        # Set systolic BP to NA when systolic BP is less than diastolic BP from the same reading
        # or when diastolic BP from the same reading is NA.
        dataset <- mutate(dataset,
                          sbp1 = ifelse(sbp1 >= dbp1, sbp1, NA),
                          sbp2 = ifelse(sbp2 >= dbp2, sbp2, NA))
      
        # Calculate the average systolic BP.
        dataset$bp_systolic <- rowMeans(dataset[, c("sbp1", "sbp2")], na.rm = TRUE)
      
        # Rename and select the output variables.
        dataset <- rename(dataset, age = AGE01) %>%
                   select(topmed_subject_id, bp_systolic, age)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="bp_systolic_1-mesa"></a>
  * ### blood_pressure/bp_systolic_1 -- **MESA**:
    * 15 component_study_variables: `phs000209.v13.pht001111.v4.phv00082639.v2`, `phs000209.v13.pht001111.v4.phv00083403.v1`, `phs000209.v13.pht001111.v4.phv00083404.v1`, `phs000209.v13.pht001111.v4.phv00083406.v1`, `phs000209.v13.pht001111.v4.phv00083407.v1`, `phs000209.v13.pht001116.v10.phv00084442.v3`, `phs000209.v13.pht001116.v10.phv00085735.v2`, `phs000209.v13.pht001116.v10.phv00085736.v2`, `phs000209.v13.pht001116.v10.phv00085737.v2`, `phs000209.v13.pht001116.v10.phv00085738.v2`, `phs000209.v13.pht001121.v3.phv00087071.v1`, `phs000209.v13.pht001121.v3.phv00087509.v1`, `phs000209.v13.pht001121.v3.phv00087510.v1`, `phs000209.v13.pht001121.v3.phv00087512.v1`, `phs000209.v13.pht001121.v3.phv00087513.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
      
        # Merge pht001111 and pht001116.
        dataset <- rbind(phen_list$source_data$pht001111, phen_list$source_data$pht001116)
      
        # Rename variable names for pht001121.
        dataset_21 <- phen_list$source_data$pht001121 %>%
                      rename(s2bp1 = s2bpf,
                             d2bp1 = d2bpf,
                             s3bp1 = s3bpf,
                             d3bp1 = d3bpf,
                             age1c = agefc)
      
        # Merge pht001121 with previously merged dataset.
        dataset <- rbind(dataset, dataset_21) %>%
      
          # Rename variables.
          rename(sbp_2 = s2bp1, dbp_2 = d2bp1, sbp_3 = s3bp1, dbp_3 = d3bp1, age = age1c) %>%
      
          # Convert from character to numeric.
          mutate_if(is.character, as.numeric)
      
        # Filter for values in which sbp is greater than or equal to dbp.
        dataset <- mutate(dataset, sbp_2 = ifelse(sbp_2 > dbp_2, sbp_2, NA))
        dataset <- mutate(dataset, sbp_3 = ifelse(sbp_3 > dbp_3, sbp_3, NA))
        dataset <- mutate(dataset, dbp_2 = ifelse(sbp_2 > dbp_2, dbp_2, NA))
        dataset <- mutate(dataset, dbp_3 = ifelse(sbp_3 > dbp_3, dbp_3, NA))
      
        # Subset SBP values.
        dataset_2 <- dataset %>%
          select(topmed_subject_id, sbp_2, sbp_3)
      
        # Take the mean of SBP
        vars <- c("sbp_2", "sbp_3")
        dataset$bp_systolic <- rowMeans(dataset_2[, vars], na.rm = TRUE)
      
        # Select columns for harmonization dataset.
        dataset <- select(dataset, topmed_subject_id, age, bp_systolic)
      
        # Remove NAs
        dataset <- na.omit(dataset)
      
        # Return harmonized dataset.
        return(dataset)
      }
      ```
<a id="bp_systolic_1-sas"></a>
  * ### blood_pressure/bp_systolic_1 -- **SAS**:
    * 3 component_study_variables: `phs000914.v1.pht005253.v1.phv00258680.v1`, `phs000914.v1.pht005253.v1.phv00258701.v1`, `phs000914.v1.pht005253.v1.phv00258703.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        # Get dataset.
        dataset <- phen_list$source_data$pht005253 %>%
        # Rename variables.
               transmute(topmed_subject_id,
                         age = Dec_Age,
                         bp_systolic = na_if(Systolic_BP, "NA"),
                         bp_diastolic = na_if(Diastolic_BP, "NA")) %>%
               mutate_at(vars(age, bp_systolic, bp_diastolic), funs(as.numeric)) %>%
        # Subset to observations where systolic BP is greater than or equal to diastolic BP.
               filter(bp_systolic >= bp_diastolic) %>%
        # Select the output variables and remove NAs.
               select(-bp_diastolic) %>%
               na.omit()
        return(dataset)
      }
      ```
<a id="bp_systolic_1-whi"></a>
  * ### blood_pressure/bp_systolic_1 -- **WHI**:
    * 8 component_study_variables: `phs000200.v11.pht000998.v6.phv00078436.v6`, `phs000200.v11.pht000998.v6.phv00078437.v6`, `phs000200.v11.pht001019.v6.phv00079850.v6`, `phs000200.v11.pht001019.v6.phv00079852.v6`, `phs000200.v11.pht001019.v6.phv00079854.v6`, `phs000200.v11.pht001019.v6.phv00079855.v6`, `phs000200.v11.pht001019.v6.phv00079856.v6`, `phs000200.v11.pht001019.v6.phv00079857.v6`
    * Function:
      ```r
      harmonize <- function(phen_list){
        # Get blood pressure dataset.
        dataset <- phen_list$source_data$pht001019
      
        # Subset to baseline visit.
        dataset <- filter(dataset, F80VTYP == 1)
      
        # Substitute the value of 'NA' to missing.
        dataset$SYSTBP1[dataset$SYSTBP1 %in% 'NA'] <- NA
        dataset$DIASBP1[dataset$DIASBP1 %in% 'NA'] <- NA
        dataset$SYSTBP2[dataset$SYSTBP2 %in% 'NA'] <- NA
        dataset$DIASBP2[dataset$DIASBP2 %in% 'NA'] <- NA
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Set systolic BP to NA when systolic BP is less than diastolic BP from the same reading
        # or when diastolic BP from the same reading is NA.
        dataset <- mutate(dataset,
                          sbp1 = ifelse(SYSTBP1 >= DIASBP1, SYSTBP1, NA),
                          sbp2 = ifelse(SYSTBP2 >= DIASBP2, SYSTBP2, NA))
      
        # Calculate the average systolic BP.
        dataset$bp_systolic <- rowMeans(dataset[, c("sbp1", "sbp2")], na.rm = TRUE)
      
        # Select the blood pressure variables.
        dataset <- select(dataset, topmed_subject_id, bp_systolic, F80DAYS)
      
        # Get age dataset.
        dataset_age <- phen_list$source_data$pht000998
      
        # Substitute the value of 'NA' to missing.
        dataset_age$F2DAYS[dataset_age$F2DAYS %in% 'NA'] <- NA
        dataset_age$AGE[dataset_age$AGE %in% 'NA'] <- NA
      
        # Convert character values to numeric.
        dataset_age <- mutate_if(dataset_age, is.character, as.numeric)
      
        # Join blood pressure dataset and age dataset.
        dataset <- inner_join(dataset, dataset_age, by = "topmed_subject_id")
      
        # Calculate age at blood pressure measurement.
        dataset <- mutate(dataset,
                          age = ifelse(F2DAYS > 0,
                                       AGE + F80DAYS / 365.25,
                                       AGE + (abs(F2DAYS) + F80DAYS) / 365.25))
      
        # Select the output variables.
        dataset <- select(dataset, topmed_subject_id, bp_systolic, age)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```