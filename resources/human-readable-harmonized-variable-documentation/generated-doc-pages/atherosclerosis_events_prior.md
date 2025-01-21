
# atherosclerosis_events_prior

### Variables in this section:
* [angina_prior_1](#angina_prior_1)
* [cabg_prior_1](#cabg_prior_1)
* [coronary_angioplasty_prior_1](#coronary_angioplasty_prior_1)
* [coronary_revascularization_prior_1](#coronary_revascularization_prior_1)
* [mi_prior_1](#mi_prior_1)
* [pad_prior_1](#pad_prior_1)

<a id="angina_prior_1"></a>
## atherosclerosis_events_prior: **angina_prior_1** (angina_prior)
  An indicator of whether a subject had an angina event prior to the baseline visit.
  * **Study (harmonization_units)**:
    * [CHS](#angina_prior_1-chs)
    * [COPDGene](#angina_prior_1-copdgene)
    * [FHS](#angina_prior_1-fhs)
    * [MESA](#angina_prior_1-mesa)
    * [WHI](#angina_prior_1-whi)
  * **Metadata**:
    **`Data Type`**: encoded, **`Measurement Units`**: angina_prior, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2019-10-31 16:33:19
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C0002962
  * **DCC Harmonization Comments**:

    This variable was harmonized by appropriately converting component variables to a binary variable indicating the occurrence of angina before the baseline visit. Component variables included could indicate occurrence of angina either by self-report or by study adjudication. If a study recorded multiple events, the DCC harmonized only the earliest event prior to baseline. Unless otherwise stated, the age variable accompanying this variable represents the study participants' age when history of angina was recorded, _not_ the age at which angina occurred.
    
    ### Study-specific comments
    
    #### FHS
    
    The age variable accompanying this variable represents the age at which the angina occurred, not the age when the history of angina was recorded. 
    
    ### Reporting method for component study variables
    
    The table below shows the reporting method (self-reported or adjudicated by the study) for component study variables from each study included in this harmonized variable.
    
    | Study or subcohort | Self-report or Adjudicated|
    |---------|----------|
    | FHS | Adjudicated|
    | MESA | Self-report |
    | CHS | Both |
    | COPDGene | Self-report |
    | WHI | Self-report |
    
    
<a id="angina_prior_1-chs"></a>
  * ### atherosclerosis_events_prior/angina_prior_1 -- **CHS Cardiovascular Health Study (CHS) Cohort: an NHLBI-funded observational study of risk factors for cardiovascular disease in adults 65 years or older**:
    * 2 component_study_variables
      * _phs000287.v6.pht001452.v1.phv00100487.v1_. dbGap Name: **AGEBL**, Desc: **CALCULATED AGE AT BASELINE**, Table: **BASEBOTH**.
      * _phs000287.v6.pht001452.v1.phv00100504.v1_. dbGap Name: **ANBLMOD**, Desc: **ANG MODIFIED BL STAT**, Table: **BASEBOTH**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        # Convert age to numeric and rename angina variable.
        dat <- transmute(phen_list$source_data$pht001452, topmed_subject_id, age = as.numeric(AGEBL),
                         angina_prior = ANBLMOD) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dat)
      }
      ```
<a id="angina_prior_1-copdgene"></a>
  * ### atherosclerosis_events_prior/angina_prior_1 -- **COPDGene **:
    * 2 component_study_variables
      * _phs000179.v5.pht002239.v4.phv00159608.v4_. No dbGap metadata available.
      * _phs000179.v5.pht002239.v4.phv00159836.v4_. No dbGap metadata available.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(magrittr)
      
        dataset <- phen_list$source_data$pht002239 %>%
          rename(age = Age_Enroll, angina_prior = Angina )
      
        # Convert angina_prior to character, age to numeric.
        dataset$angina_prior <- as.character(dataset$angina_prior)
        dataset$age <- as.numeric(dataset$age)
      
        # Remove NAs.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="angina_prior_1-fhs"></a>
  * ### atherosclerosis_events_prior/angina_prior_1 -- **FHS Framingham Cohort**:
    * 5 component_study_variables
      * _phs000007.v30.pht000309.v13.phv00036469.v12_. dbGap Name: **EVENT**, Desc: **Event Number**, Table: **vr_soe_2020_a_1340s**.
      * _phs000007.v30.pht000309.v13.phv00036471.v12_. dbGap Name: **DATE**, Desc: **Date of Event**, Table: **vr_soe_2020_a_1340s**.
      * _phs000007.v30.pht003099.v5.phv00177930.v5_. dbGap Name: **age1**, Desc: **Age at Exam 1**, Table: **vr_dates_2019_a_1175s**.
      * _phs000007.v30.pht003316.v7.phv00190817.v7_. dbGap Name: **cvd**, Desc: **Cardiovascular Disease (CVD) status**, Table: **vr_survcvd_2019_a_1334s**.
      * _phs000007.v30.pht003316.v7.phv00190823.v7_. dbGap Name: **cvddate**, Desc: **Date of Cardiovascular Disease (CVD) status**, Table: **vr_survcvd_2019_a_1334s**.
    * **Function:**
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
      
          # Create mi_prior variable. Gather all mi events.
          dat$angina_prior <- replicate(length(dat$event), 0)
          dat$angina_prior  <- case_when(
            dat$event == 6 ~ 1,
            dat$event != 6 ~ 0,
            is.na(dat$event) ~ NA_real_
          )
      
          # Calculate age at event.
          dat$age_at_event <- replicate(length(dat$event), 0)
          dat$age_at_event <- floor(dat$cad_followup_start_age + (dat$date / 365.25))
      
          # Identify prior angina events.
          dat <- dat %>%
            mutate(angina_prior = case_when(angina_prior == 1 & date <= 0 ~ 1,
                                           angina_prior == 1 & date > 0 ~ 0,
                                           TRUE ~ angina_prior))
        # Find subjects with multiple angina events and select first angina event.
          angina_event <- dat %>%
            filter(angina_prior == 1) %>%
            arrange(topmed_subject_id, date) %>%
            distinct(topmed_subject_id, .keep_all = TRUE) %>%
            select(-event)
      
          # Gather all non-angina-event subjects.
          non_angina_event <- dat %>%
            filter(angina_prior == 0) %>%
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
      
          # Create an angina_prior variable for non-event subjects.
          non_event$angina_prior <- 0
      
          # Create an age at censoring variable for non-event subjects.
          non_event$age_at_event <-
            non_event$cad_followup_start_age + (non_event$date / 365.25)
      
          # Bind non_event and non_angina_event datasets and remove duplicates.
          non_event_all <- rbind(non_event, non_angina_event) %>%
            arrange(topmed_subject_id, desc(date)) %>%
            distinct(topmed_subject_id, .keep_all = TRUE)
      
          # Combine all angina-event subjects with non-angina-event subjects.
          dat_combined <- bind_rows(angina_event, non_event_all) %>%
            arrange(topmed_subject_id, desc(angina_prior)) %>%
      
            # Remove duplicate subjects with multiple events.
            distinct(topmed_subject_id, .keep_all = TRUE) %>%
            transmute(topmed_subject_id,
                      angina_prior = as.character(angina_prior),
                      age = age_at_event) %>%
            na.omit()
      
          return(dat_combined)
      }
      ```
<a id="angina_prior_1-mesa"></a>
  * ### atherosclerosis_events_prior/angina_prior_1 -- **MESA Multi-Ethnic Study of Atherosclerosis (MESA) Cohort**:
    * 1 component_study_variables
      * _phs000209.v13.pht001116.v10.phv00084442.v3_. dbGap Name: **age1c**, Desc: **AGE**, Table: **MESA_Exam1Main**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        # Convert age to numeric and set all participants to 0.
        dat <- transmute(phen_list$source_data$pht001116, topmed_subject_id, age = as.numeric(age1c),
                         angina_prior = "0")
        return(dat)
      }
      ```
<a id="angina_prior_1-whi"></a>
  * ### atherosclerosis_events_prior/angina_prior_1 -- **WHI Women's Health Initiative**:
    * 4 component_study_variables
      * _phs000200.v11.pht000998.v6.phv00078436.v6_. dbGap Name: **F2DAYS**, Desc: **F2 Days since randomization**, Table: **f2_rel1**.
      * _phs000200.v11.pht000998.v6.phv00078437.v6_. dbGap Name: **AGE**, Desc: **Age at screening**, Table: **f2_rel1**.
      * _phs000200.v11.pht000999.v6.phv00078507.v6_. dbGap Name: **F30DAYS**, Desc: **F30 Days since randomization/enrollment**, Table: **f30_rel2**.
      * _phs000200.v11.pht000999.v6.phv00078560.v6_. dbGap Name: **ANGINA**, Desc: **Angina ever**, Table: **f30_rel2**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        source_data <- phen_list$source_data
        # Join Form 2 data with Form 30 data
        dat <- full_join(source_data$pht000998, source_data$pht000999, "topmed_subject_id") %>%
          # Set positive F2DAYS values to 0.
          mutate_at(vars(F2DAYS), function(x) case_when(x > 0 ~ 0, TRUE ~ as.numeric(x))) %>%
          # Calculate age, rename angina variable, and drop remaining variables.
          transmute(age = as.numeric(AGE) + (as.numeric(F30DAYS) + abs(F2DAYS)) / 365.25,
                    angina_prior = ANGINA, topmed_subject_id) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dat)
      }
      ```
<a id="cabg_prior_1"></a>
## atherosclerosis_events_prior: **cabg_prior_1** (cabg_prior)
  An indicator of whether a subject had a coronary artery bypass graft (CABG) procedure prior to the start of the baseline visit.
  * **Study (harmonization_units)**:
    * [ARIC](#cabg_prior_1-aric)
    * [CHS](#cabg_prior_1-chs)
    * [COPDGene](#cabg_prior_1-copdgene)
    * [FHS](#cabg_prior_1-fhs)
    * [JHS](#cabg_prior_1-jhs)
    * [MESA](#cabg_prior_1-mesa)
    * [WHI](#cabg_prior_1-whi)
  * **Metadata**:
    **`Data Type`**: encoded, **`Measurement Units`**: cabg_prior, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2019-10-31 16:33:58
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C0010055
  * **DCC Harmonization Comments**:

    This variable was harmonized by converting encoded component variables indicating the occurrence of a CABG procedure by self-report or adjudication to a binary variable indicating the occurrence of a CABG procedure before the baseline visit. If a study recorded multiple CABG procedures, the DCC harmonized only the earliest procedure prior to baseline. Unless otherwise stated, the age variable accompanying this variable represents the study participants' age when history of the CABG procedure was recorded, _not_ the age when the procedure occurred. 
    
    ### Study-specific comments
    
    #### FHS
    
    The age variable accompanying this variable represents the age at which the CABG procedure occurred, not the age when the history of any CABG procedures was recorded. 
    
    ### Reporting method for component study variables
    
    The table below shows the reporting method (self-reported or adjudicated by the study) for component study variables from each study included in this harmonized variable.
    
    | Study or subcohort | Self-report or Adjudicated|
    |---------|----------|
    | FHS | Adjudicated|
    | MESA | Self-report |
    | JHS | Self-report |
    | ARIC | Self-report |
    | CHS | Both |
    | COPDGene | Self-report |
    | WHI | Self-report |
    
    
<a id="cabg_prior_1-aric"></a>
  * ### atherosclerosis_events_prior/cabg_prior_1 -- **ARIC Atherosclerosis Risk in Communities (ARIC) Cohort**:
    * 4 component_study_variables
      * _phs000280.v5.pht004063.v2.phv00204712.v1_. dbGap Name: **V1AGE01**, Desc: **Age at visit 1 [Cohort. Visit 1]**, Table: **DERIVE13**.
      * _phs000280.v5.pht004143.v2.phv00208845.v1_. dbGap Name: **PHEA06**, Desc: **[Invasive procedures]. Have you ever had surgery on your heart, or on the arteries of your neck or legs, excluding surgery for vericose veins? Q6 [Physical Examination Form. PHEA. Visit 1]**, Table: **PHEA**.
      * _phs000280.v5.pht004143.v2.phv00208846.v1_. dbGap Name: **PHEA07A**, Desc: **[Invasive procedures]. Have you ever had surgery on your heart, or on the arteries of your neck or legs, excluding surgery for vericose veins? Coronary bypass. Q7a [Physical Examination Form. PHEA. Visit 1]**, Table: **PHEA**.
      * _phs000280.v5.pht004143.v2.phv00208853.v1_. dbGap Name: **PHEA08**, Desc: **[Invasive procedures]. Have you ever had a balloon angioplasty on the arteries of your heart or legs? Q8 [Physical Examination Form. PHEA. Visit 1]**, Table: **PHEA**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(magrittr)
      
        # Join datasets with age and revascularization events.
        dataset <- plyr::join_all(phen_list$source_data) %>%
          rename(age = V1AGE01, cabg_prior = PHEA07A, ever_surgery = PHEA06,
                 ever_balloon_angio = PHEA08)
      
        # Set 'T' and 'E' to missing.
        dataset$cabg_prior[dataset$cabg_prior %in% 'T'] <- NA
        dataset$ever_surgery[dataset$ever_surgery %in% 'E'] <- NA
      
        dataset <- dataset %>%
          mutate(cabg_prior = ifelse(cabg_prior == "N", 0, 1),
                 ever_surgery = ifelse(ever_surgery == "N", 0, 1),
                 ever_balloon_angio = ifelse(ever_balloon_angio == "N", 0, 1)) %>%
          mutate_if(is.character, as.numeric) %>%
      
          # Remove rows with all missing values.
          filter(rowSums(is.na(.)) < 3)
      
        # Set cabg_prior values.
        dataset$cabg_prior <- ifelse(is.na(dataset$cabg_prior) == TRUE, 0, dataset$cabg_prior)
      
        # Select phenotype of interest.
        dataset <- select(dataset, topmed_subject_id, age, cabg_prior)
      
        # Convert cabg_prior to character and age to numeric.
        dataset$cabg_prior <- as.character(dataset$cabg_prior)
        dataset$age <- as.numeric(dataset$age)
      
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="cabg_prior_1-chs"></a>
  * ### atherosclerosis_events_prior/cabg_prior_1 -- **CHS Cardiovascular Health Study (CHS) Cohort: an NHLBI-funded observational study of risk factors for cardiovascular disease in adults 65 years or older**:
    * 2 component_study_variables
      * _phs000287.v6.pht001452.v1.phv00100487.v1_. dbGap Name: **AGEBL**, Desc: **CALCULATED AGE AT BASELINE**, Table: **BASEBOTH**.
      * _phs000287.v6.pht001464.v1.phv00100785.v1_. dbGap Name: **BPSSURBL**, Desc: **CORONARY BYPASS SURGERY AT BL**, Table: **EVENT_SUMMARY**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        source_data <- phen_list$source_data
        # Join datasets.
        dat <- full_join(source_data$pht001464, source_data$pht001452, "topmed_subject_id") %>%
          # Rename CABG variable and convert age to numeric.
          transmute(topmed_subject_id, age = as.numeric(AGEBL), cabg_prior = BPSSURBL) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dat)
      }
      ```
<a id="cabg_prior_1-copdgene"></a>
  * ### atherosclerosis_events_prior/cabg_prior_1 -- **COPDGene **:
    * 2 component_study_variables
      * _phs000179.v5.pht002239.v4.phv00159631.v4_. No dbGap metadata available.
      * _phs000179.v5.pht002239.v4.phv00159836.v4_. No dbGap metadata available.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        # Rename CABG variable and convert age to numeric.
        dat <- transmute(phen_list$source_data$pht002239, cabg_prior = CABG, topmed_subject_id,
                         age = as.numeric(Age_Enroll)) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dat)
      }
      ```
<a id="cabg_prior_1-fhs"></a>
  * ### atherosclerosis_events_prior/cabg_prior_1 -- **FHS Framingham Cohort**:
    * 5 component_study_variables
      * _phs000007.v30.pht000389.v10.phv00054697.v8_. dbGap Name: **procdate**, Desc: **Date of cardiovascular procedure**, Table: **vr_cvdproc_2020_a_1313s**.
      * _phs000007.v30.pht000389.v10.phv00163410.v7_. dbGap Name: **vessel**, Desc: **Coronary Artery Bypass Graft (CABG) - Number of vessels bypassed - PROCNUM = 141**, Table: **vr_cvdproc_2020_a_1313s**.
      * _phs000007.v30.pht003099.v5.phv00177930.v5_. dbGap Name: **age1**, Desc: **Age at Exam 1**, Table: **vr_dates_2019_a_1175s**.
      * _phs000007.v30.pht003316.v7.phv00190817.v7_. dbGap Name: **cvd**, Desc: **Cardiovascular Disease (CVD) status**, Table: **vr_survcvd_2019_a_1334s**.
      * _phs000007.v30.pht003316.v7.phv00190823.v7_. dbGap Name: **cvddate**, Desc: **Date of Cardiovascular Disease (CVD) status**, Table: **vr_survcvd_2019_a_1334s**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          source_data <- phen_list$source_data
      
          # Join datasets.
          dat <- full_join(source_data$pht003099, source_data$pht000389, by = "topmed_subject_id") %>%
            # Convert age to numeric.
            transmute(topmed_subject_id,
                      cabg_prior = ifelse(as.numeric(VESSEL) > 0, 1, 0),
                      date = as.numeric(PROCDATE),
                      cad_followup_start_age = as.numeric(age1))
      
          ## Calculate age at event.
          dat$age_at_event <- replicate(length(dat$cabg_prior), 0)
          dat$age_at_event <- floor(dat$cad_followup_start_age + (dat$date / 365.25))
      
          # Identify prior cabg events.
          dat <- dat %>%
            mutate(cabg_prior = case_when(cabg_prior == 1 & date <= 0 ~ 1,
                                           cabg_prior == 1 & date > 0 ~ 0,
                                           TRUE ~ cabg_prior))
      
            # Find subjects with multiple cabg events and select first cabg event.
          cabg_event <- dat %>%
            filter(cabg_prior == 1) %>%
            arrange(topmed_subject_id, date) %>%
            distinct(topmed_subject_id, .keep_all = TRUE)
      
          # Gather all non-cabg-event subjects and remove duplicate subjects.
          non_cabg_event <- dat %>%
            filter(cabg_prior == 0)
      
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
      
          # Create an cabg_prior variable for non-event subjects.
          non_event$cabg_prior <- 0
      
          # Create an age at censoring variable for non-event subjects.
          non_event$age_at_event <-
            non_event$cad_followup_start_age + (non_event$date / 365.25)
      
          # Bind non_event and non_cabg_event datasets and remove duplicates.
          non_event_all <- rbind(non_event, non_cabg_event) %>%
            arrange(topmed_subject_id, desc(date)) %>%
            distinct(topmed_subject_id, .keep_all = TRUE)
      
          # Combine all cabg-event subjects with non-cabg-event subjects.
          dat_combined <- bind_rows(cabg_event, non_event_all) %>%
            arrange(topmed_subject_id, desc(cabg_prior)) %>%
      
            # Remove duplicate subjects with multiple events.
            distinct(topmed_subject_id, .keep_all = TRUE) %>%
            transmute(topmed_subject_id, cabg_prior = as.character(cabg_prior), age = age_at_event) %>%
            na.omit()
      
          return(dat_combined)
      }
      ```
<a id="cabg_prior_1-jhs"></a>
  * ### atherosclerosis_events_prior/cabg_prior_1 -- **JHS Jackson Heart Study (JHS) Cohort**:
    * 6 component_study_variables
      * _phs000286.v5.pht001949.v1.phv00126009.v1_. No dbGap metadata available.
      * _phs000286.v5.pht001963.v1.phv00127727.v1_. dbGap Name: **MHXA51**, Desc: **Q51. F. Invasive procedures. Ever had surgery on heart, arteries of neck or legs? [Visit 1] [Medical History Form, MHX]**, Table: **mhxa**.
      * _phs000286.v5.pht001963.v1.phv00127728.v1_. dbGap Name: **MHXA52A**, Desc: **Q52a. F. Invasive procedures. Did you have a coronary bypass? [Visit 1] [Medical History Form, MHX]**, Table: **mhxa**.
      * _phs000286.v5.pht001963.v1.phv00127731.v1_. dbGap Name: **MHXA52C**, Desc: **Q52c. F. Invasive procedures. Have you had carotid endarterectomy? [Visit 1] [Medical History Form, MHX]**, Table: **mhxa**.
      * _phs000286.v5.pht001963.v1.phv00127733.v1_. dbGap Name: **MHXA52E1**, Desc: **Q52e1. F. Invasive procedures. Had other revascularization or bypass? [Visit 1] [Medical History Form, MHX]**, Table: **mhxa**.
      * _phs000286.v5.pht001963.v1.phv00127740.v1_. dbGap Name: **MHXA55A**, Desc: **Q55a. F. Invasive procedures. Ever had heart catheterization? [Visit 1] [Medical History Form, MHX]**, Table: **mhxa**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(magrittr)
      
        # Join datasets with age and revascularization events.
        dataset <- plyr::join_all(phen_list$source_data) %>%
          rename(age = AGE01, cabg_prior = MHXA52A,
                ever_surgery = MHXA51, other_revasc = MHXA52E1, heart_cath = MHXA55A,
                carotid_endart = MHXA52C) %>%
          mutate(cabg_prior = ifelse(cabg_prior == "N", 0, 1),
                 ever_surgery = ifelse(ever_surgery == "N", 0, 1),
                 other_revasc = ifelse(other_revasc == "N", 0, 1),
                 heart_cath = ifelse(heart_cath == "N", 0, 1),
                 carotid_endart = ifelse(carotid_endart == "N", 0, 1)) %>%
          mutate_if(is.character, as.numeric) %>%
      
          # Remove rows with all missing data.
          filter(rowSums(is.na(.)) < 5)
      
      
        # Set cabg_prior values.
        dataset$cabg_prior <- ifelse(is.na(dataset$cabg_prior) == TRUE, 0, dataset$cabg_prior)
      
        # Select phenotype of interest.
        dataset <- dataset %>%
          select(topmed_subject_id, age, cabg_prior) %>%
          na.omit()
      
        # Convert cabg_prior to character and age to numeric.
        dataset$cabg_prior <- as.character(dataset$cabg_prior)
        dataset$age <- as.numeric(dataset$age)
      
        return(dataset)
      }
      ```
<a id="cabg_prior_1-mesa"></a>
  * ### atherosclerosis_events_prior/cabg_prior_1 -- **MESA Multi-Ethnic Study of Atherosclerosis (MESA) Cohort**:
    * 1 component_study_variables
      * _phs000209.v13.pht001116.v10.phv00084442.v3_. dbGap Name: **age1c**, Desc: **AGE**, Table: **MESA_Exam1Main**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        # Convert age to numeric and set all participants to 0.
        dat <- transmute(phen_list$source_data$pht001116, topmed_subject_id, age = as.numeric(age1c),
                         cabg_prior = "0")
        return(dat)
      }
      ```
<a id="cabg_prior_1-whi"></a>
  * ### atherosclerosis_events_prior/cabg_prior_1 -- **WHI Women's Health Initiative**:
    * 4 component_study_variables
      * _phs000200.v11.pht000998.v6.phv00078436.v6_. dbGap Name: **F2DAYS**, Desc: **F2 Days since randomization**, Table: **f2_rel1**.
      * _phs000200.v11.pht000998.v6.phv00078437.v6_. dbGap Name: **AGE**, Desc: **Age at screening**, Table: **f2_rel1**.
      * _phs000200.v11.pht000999.v6.phv00078507.v6_. dbGap Name: **F30DAYS**, Desc: **F30 Days since randomization/enrollment**, Table: **f30_rel2**.
      * _phs000200.v11.pht000999.v6.phv00078535.v6_. dbGap Name: **CABG**, Desc: **Coronary bypass surgery ever**, Table: **f30_rel2**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        source_data <- phen_list$source_data
        # Join Form 2 data with Form 30 data
        dat <- full_join(source_data$pht000998, source_data$pht000999, "topmed_subject_id") %>%
          # Set positive F2DAYS values to 0.
          mutate_at(vars(F2DAYS), function(x) case_when(x > 0 ~ 0, TRUE ~ as.numeric(x))) %>%
          # Calculate age, rename CABG variable, and drop remaining variables.
          transmute(age = as.numeric(AGE) + (as.numeric(F30DAYS) + abs(F2DAYS)) / 365.25,
                    cabg_prior = CABG, topmed_subject_id) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dat)
      }
      ```
<a id="coronary_angioplasty_prior_1"></a>
## atherosclerosis_events_prior: **coronary_angioplasty_prior_1** (coronary_angioplasty_prior)
  An indicator of whether a subject had a coronary angioplasty procedure prior to the start of the baseline visit.
  * **Study (harmonization_units)**:
    * [ARIC](#coronary_angioplasty_prior_1-aric)
    * [CHS](#coronary_angioplasty_prior_1-chs)
    * [COPDGene](#coronary_angioplasty_prior_1-copdgene)
    * [JHS](#coronary_angioplasty_prior_1-jhs)
    * [MESA](#coronary_angioplasty_prior_1-mesa)
    * [WHI](#coronary_angioplasty_prior_1-whi)
  * **Metadata**:
    **`Data Type`**: encoded, **`Measurement Units`**: coronary_angioplasty_prior, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2019-10-31 16:34:42
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C0002997
  * **DCC Harmonization Comments**:

    This variable was harmonized by appropriately converting component variables to a binary variable indicating the occurrence of a coronary angioplasty procedure before the baseline visit. Component variables included could indicate occurrence of a coronary angioplasty procedure either by self-report or by study adjudication. If a study recorded multiple coronary angioplasty procedures, the DCC harmonized only the earliest procedure prior to baseline. Unless otherwise stated, the age variable accompanying this variable represents the study participants' age when history of the coronary angioplasty procedure was recorded, _not_ the age when the procedure occurred. 
    
    
    ### Reporting method for component study variables
    
    The table below shows the reporting method (self-reported or adjudicated by the study) for component study variables from each study included in this harmonized variable.
    
    | Study or subcohort | Self-report or Adjudicated|
    |---------|----------|
    | MESA | Self-report |
    | JHS | Self-report |
    | ARIC | Self-report |
    | CHS | Both |
    | COPDGene | Self-report |
    | WHI | Self-report |
    
    
<a id="coronary_angioplasty_prior_1-aric"></a>
  * ### atherosclerosis_events_prior/coronary_angioplasty_prior_1 -- **ARIC Atherosclerosis Risk in Communities (ARIC) Cohort**:
    * 4 component_study_variables
      * _phs000280.v5.pht004063.v2.phv00204712.v1_. dbGap Name: **V1AGE01**, Desc: **Age at visit 1 [Cohort. Visit 1]**, Table: **DERIVE13**.
      * _phs000280.v5.pht004143.v2.phv00208845.v1_. dbGap Name: **PHEA06**, Desc: **[Invasive procedures]. Have you ever had surgery on your heart, or on the arteries of your neck or legs, excluding surgery for vericose veins? Q6 [Physical Examination Form. PHEA. Visit 1]**, Table: **PHEA**.
      * _phs000280.v5.pht004143.v2.phv00208853.v1_. dbGap Name: **PHEA08**, Desc: **[Invasive procedures]. Have you ever had a balloon angioplasty on the arteries of your heart or legs? Q8 [Physical Examination Form. PHEA. Visit 1]**, Table: **PHEA**.
      * _phs000280.v5.pht004143.v2.phv00208854.v1_. dbGap Name: **PHEA09A**, Desc: **[Invasive procedures]. [Probe for type of procedure]. Angioplasty of coronary artery(ies)? Q9a [Physical Examination Form. PHEA. Visit 1]**, Table: **PHEA**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(magrittr)
      
        # Join datasets with age and revascularization events.
        dataset <- plyr::join_all(phen_list$source_data) %>%
          rename(age = V1AGE01, coronary_angioplasty_prior = PHEA09A, ever_surgery = PHEA06,
                 ever_balloon_angio = PHEA08)
      
        # Set 'E' to missing.
        dataset$ever_surgery[dataset$ever_surgery %in% 'E'] <- NA
      
        dataset <- dataset %>%
          mutate(coronary_angioplasty_prior = ifelse(coronary_angioplasty_prior == "N", 0, 1),
                 ever_surgery = ifelse(ever_surgery == "N", 0, 1),
                 ever_balloon_angio = ifelse(ever_balloon_angio == "N", 0, 1)) %>%
          mutate_if(is.character, as.numeric) %>%
          filter(rowSums(is.na(.)) < 3)
      
       # Set coronary_angioplasty_prior values.
       dataset$coronary_angioplasty_prior <-
         ifelse(is.na(dataset$coronary_angioplasty_prior) == TRUE,
                 0, dataset$coronary_angioplasty_prior)
      
       dataset <- select(dataset, topmed_subject_id, age, coronary_angioplasty_prior)
      
        # Convert coronary_angioplasty_prior to character.
        dataset$coronary_angioplasty_prior <- as.character(dataset$coronary_angioplasty_prior)
      
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="coronary_angioplasty_prior_1-chs"></a>
  * ### atherosclerosis_events_prior/coronary_angioplasty_prior_1 -- **CHS Cardiovascular Health Study (CHS) Cohort: an NHLBI-funded observational study of risk factors for cardiovascular disease in adults 65 years or older**:
    * 2 component_study_variables
      * _phs000287.v6.pht001452.v1.phv00100322.v1_. dbGap Name: **CORART**, Desc: **CORONARY ARTERY ANGIOPLASTY**, Table: **BASEBOTH**.
      * _phs000287.v6.pht001452.v1.phv00100487.v1_. dbGap Name: **AGEBL**, Desc: **CALCULATED AGE AT BASELINE**, Table: **BASEBOTH**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        # Rename angioplasty variable and convert age to numeric.
        dat <- transmute(phen_list$source_data$pht001452, topmed_subject_id, age = as.numeric(AGEBL),
                         coronary_angioplasty_prior = CORART) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dat)
      }
      ```
<a id="coronary_angioplasty_prior_1-copdgene"></a>
  * ### atherosclerosis_events_prior/coronary_angioplasty_prior_1 -- **COPDGene **:
    * 2 component_study_variables
      * _phs000179.v5.pht002239.v4.phv00159632.v4_. No dbGap metadata available.
      * _phs000179.v5.pht002239.v4.phv00159836.v4_. No dbGap metadata available.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        # Rename angioplasty variable and convert age to numeric.
        dat <- transmute(phen_list$source_data$pht002239, topmed_subject_id,
                         coronary_angioplasty_prior = Angioplasty,
                         age = as.numeric(Age_Enroll)) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dat)
      }
      ```
<a id="coronary_angioplasty_prior_1-jhs"></a>
  * ### atherosclerosis_events_prior/coronary_angioplasty_prior_1 -- **JHS Jackson Heart Study (JHS) Cohort**:
    * 6 component_study_variables
      * _phs000286.v5.pht001949.v1.phv00126009.v1_. No dbGap metadata available.
      * _phs000286.v5.pht001963.v1.phv00127727.v1_. dbGap Name: **MHXA51**, Desc: **Q51. F. Invasive procedures. Ever had surgery on heart, arteries of neck or legs? [Visit 1] [Medical History Form, MHX]**, Table: **mhxa**.
      * _phs000286.v5.pht001963.v1.phv00127731.v1_. dbGap Name: **MHXA52C**, Desc: **Q52c. F. Invasive procedures. Have you had carotid endarterectomy? [Visit 1] [Medical History Form, MHX]**, Table: **mhxa**.
      * _phs000286.v5.pht001963.v1.phv00127733.v1_. dbGap Name: **MHXA52E1**, Desc: **Q52e1. F. Invasive procedures. Had other revascularization or bypass? [Visit 1] [Medical History Form, MHX]**, Table: **mhxa**.
      * _phs000286.v5.pht001963.v1.phv00127737.v1_. dbGap Name: **MHXA54A**, Desc: **Q54a. F. Invasive procedures. Ever had angioplasty of coronary arteries? [Visit 1] [Medical History Form, MHX]**, Table: **mhxa**.
      * _phs000286.v5.pht001963.v1.phv00127740.v1_. dbGap Name: **MHXA55A**, Desc: **Q55a. F. Invasive procedures. Ever had heart catheterization? [Visit 1] [Medical History Form, MHX]**, Table: **mhxa**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(magrittr)
      
        # Join datasets with age and revascularization events.
        dataset <- plyr::join_all(phen_list$source_data) %>%
          rename(age = AGE01, coronary_angioplasty_prior = MHXA54A,
                ever_surgery = MHXA51, other_revasc = MHXA52E1, heart_cath = MHXA55A,
                carotid_endart = MHXA52C) %>%
          mutate(coronary_angioplasty_prior = ifelse(coronary_angioplasty_prior == "N", 0, 1),
                 ever_surgery = ifelse(ever_surgery == "N", 0, 1),
                 other_revasc = ifelse(other_revasc == "N", 0, 1),
                 heart_cath = ifelse(heart_cath == "N", 0, 1),
                 carotid_endart = ifelse(carotid_endart == "N", 0, 1)) %>%
          filter(rowSums(is.na(.)) < 5)
      
        # Set coronary_angioplasty_prior values.
        dataset$coronary_angioplasty_prior <-
          ifelse(is.na(dataset$coronary_angioplasty_prior) == TRUE,
                  0, dataset$coronary_angioplasty_prior)
      
        dataset <- dataset %>%
          select(topmed_subject_id, age, coronary_angioplasty_prior)
      
        # Convert coronary_angioplasty_prior to character.
        dataset$coronary_angioplasty_prior <- as.character(dataset$coronary_angioplasty_prior)
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="coronary_angioplasty_prior_1-mesa"></a>
  * ### atherosclerosis_events_prior/coronary_angioplasty_prior_1 -- **MESA Multi-Ethnic Study of Atherosclerosis (MESA) Cohort**:
    * 1 component_study_variables
      * _phs000209.v13.pht001116.v10.phv00084442.v3_. dbGap Name: **age1c**, Desc: **AGE**, Table: **MESA_Exam1Main**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        # Convert age to numeric and set all participants to 0.
        dat <- transmute(phen_list$source_data$pht001116, topmed_subject_id, age = as.numeric(age1c),
                         coronary_angioplasty_prior = "0")
        return(dat)
      }
      ```
<a id="coronary_angioplasty_prior_1-whi"></a>
  * ### atherosclerosis_events_prior/coronary_angioplasty_prior_1 -- **WHI Women's Health Initiative**:
    * 4 component_study_variables
      * _phs000200.v11.pht000998.v6.phv00078436.v6_. dbGap Name: **F2DAYS**, Desc: **F2 Days since randomization**, Table: **f2_rel1**.
      * _phs000200.v11.pht000998.v6.phv00078437.v6_. dbGap Name: **AGE**, Desc: **Age at screening**, Table: **f2_rel1**.
      * _phs000200.v11.pht000999.v6.phv00078507.v6_. dbGap Name: **F30DAYS**, Desc: **F30 Days since randomization/enrollment**, Table: **f30_rel2**.
      * _phs000200.v11.pht000999.v6.phv00078536.v6_. dbGap Name: **PTCA**, Desc: **Angioplasty of coronary arteries ever**, Table: **f30_rel2**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        source_data <- phen_list$source_data
        # Join Form 2 data with Form 30 data
        dat <- inner_join(source_data$pht000998, source_data$pht000999, "topmed_subject_id") %>%
          # Set positive F2DAYS values to 0.
          mutate_at(vars(F2DAYS), function(x) case_when(x > 0 ~ 0, TRUE ~ as.numeric(x))) %>%
          # Calculate age, rename angioplasty variable, and drop remaining variables.
          transmute(age = as.numeric(AGE) + (as.numeric(F30DAYS) + abs(F2DAYS)) / 365.25,
                    coronary_angioplasty_prior = PTCA, topmed_subject_id) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dat)
      }
      ```
<a id="coronary_revascularization_prior_1"></a>
## atherosclerosis_events_prior: **coronary_revascularization_prior_1** (coronary_revascularization_prior)
  An indicator of whether a subject had a coronary revascularization procedure prior to the start of the baseline visit. This includes angioplasty, CABG, and other coronary revascularization procedures.
  * **Study (harmonization_units)**:
  * **Metadata**:
    **`Data Type`**: encoded, **`Measurement Units`**: coronary_revascularization_prior, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2019-10-31 16:32:57
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C0877341
  * **DCC Harmonization Comments**:

    This variable was harmonized by appropriately converting component variables to a binary variable indicating the occurrence of a coronary revascularization procedure before the baseline visit. Component variables could indicate occurrence of a coronary revascularization procedure either by self-report or by study adjudication. In cases where history of specific revascularization procedures was unavailable, we used component variables for history of _any_ coronary revascularization procedure. 
    
    ### Reporting method for component study variables
    
    The table below shows the reporting method (self-reported or adjudicated by the study) for component study variables from each study included in this harmonized variable.
    
    | Study or subcohort | Self-report or Adjudicated|
    |---------|----------|
    | GENOA | Self-report |
    
    
<a id="mi_prior_1"></a>
## atherosclerosis_events_prior: **mi_prior_1** (mi_prior)
  An indicator of whether a subject had a myocardial infarction (MI) prior to the start of the baseline visit.
  * **Study (harmonization_units)**:
    * [ARIC](#mi_prior_1-aric)
    * [CHS](#mi_prior_1-chs)
    * [COPDGene](#mi_prior_1-copdgene)
    * [FHS](#mi_prior_1-fhs)
    * [JHS](#mi_prior_1-jhs)
    * [MESA](#mi_prior_1-mesa)
    * [WHI](#mi_prior_1-whi)
  * **Metadata**:
    **`Data Type`**: encoded, **`Measurement Units`**: mi_prior, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2019-10-31 16:35:15
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C0027051
  * **DCC Harmonization Comments**:

    This variable was harmonized by appropriately converting component variables to a binary variable indicating the occurrence of an MI event before the baseline visit. Component variables included could indicate the occurrence of an MI event either by self-report or by study adjudication. If a study recorded multiple events, the DCC harmonized only the earliest event prior to baseline. Unless otherwise stated, the age variable accompanying this variable represents the study participants' age when history of MI was recorded, _not_ the age at which the MI occurred.
    
    ### Study-specific comments
    
    #### FHS
    
    The age variable accompanying this variable represents the age at which the MI occurred, not the age at which the history of MI was recorded. 
    
    ### Reporting method for component study variables
    
    The table below shows the reporting method (self-reported or adjudicated by the study) for component study variables from each study included in this harmonized variable.
    
    | Study or subcohort | Self-report or Adjudicated|
    |---------|----------|
    | FHS | Adjudicated|
    | MESA | Self-report |
    | JHS | Self-report |
    | ARIC | Both |
    | CHS | Both |
    | COPDGene | Self-report |
    | WHI | Self-report |
    
<a id="mi_prior_1-aric"></a>
  * ### atherosclerosis_events_prior/mi_prior_1 -- **ARIC Atherosclerosis Risk in Communities (ARIC) Cohort**:
    * 2 component_study_variables
      * _phs000280.v5.pht004063.v2.phv00204705.v1_. dbGap Name: **PREVMI05**, Desc: **Prevalent MI from ECG or medical history [Cohort. Visit 1]**, Table: **DERIVE13**.
      * _phs000280.v5.pht004063.v2.phv00204712.v1_. dbGap Name: **V1AGE01**, Desc: **Age at visit 1 [Cohort. Visit 1]**, Table: **DERIVE13**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(magrittr)
      
        dataset <- phen_list$source_data$pht004063
      
        dataset <- dataset %>%
          rename(age = V1AGE01, mi_prior = PREVMI05)
      
        # Convert missing values to NA.
        dataset$mi_prior[dataset$mi_prior %in% 'T'] <- NA
      
        # Convert age to numeric and mi_prior to character.
        dataset$age <- as.numeric(dataset$age)
        dataset$mi_prior <- as.character(dataset$mi_prior)
      
        # Remove NAs.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="mi_prior_1-chs"></a>
  * ### atherosclerosis_events_prior/mi_prior_1 -- **CHS Cardiovascular Health Study (CHS) Cohort: an NHLBI-funded observational study of risk factors for cardiovascular disease in adults 65 years or older**:
    * 2 component_study_variables
      * _phs000287.v6.pht001452.v1.phv00100487.v1_. dbGap Name: **AGEBL**, Desc: **CALCULATED AGE AT BASELINE**, Table: **BASEBOTH**.
      * _phs000287.v6.pht001452.v1.phv00100508.v1_. dbGap Name: **MIBLMOD**, Desc: **MI MODIFIED BL STAT**, Table: **BASEBOTH**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        # Convert age to numeric and rename variables.
        dat <- transmute(phen_list$source_data$pht001452, age = as.numeric(AGEBL),
                         mi_prior = MIBLMOD, topmed_subject_id) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dat)
      }
      ```
<a id="mi_prior_1-copdgene"></a>
  * ### atherosclerosis_events_prior/mi_prior_1 -- **COPDGene **:
    * 2 component_study_variables
      * _phs000179.v5.pht002239.v4.phv00159615.v4_. No dbGap metadata available.
      * _phs000179.v5.pht002239.v4.phv00159836.v4_. No dbGap metadata available.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(magrittr)
      
        dataset <- phen_list$source_data$pht002239 %>%
          rename(age = Age_Enroll, mi_prior = HeartAttack)
      
        # Convert age to numeric and mi_prior to character.
        dataset$age <- as.numeric(dataset$age)
        dataset$mi_prior <- as.character(dataset$mi_prior)
      
        # Remove NAs.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="mi_prior_1-fhs"></a>
  * ### atherosclerosis_events_prior/mi_prior_1 -- **FHS Framingham Cohort**:
    * 5 component_study_variables
      * _phs000007.v30.pht000309.v13.phv00036469.v12_. dbGap Name: **EVENT**, Desc: **Event Number**, Table: **vr_soe_2020_a_1340s**.
      * _phs000007.v30.pht000309.v13.phv00036471.v12_. dbGap Name: **DATE**, Desc: **Date of Event**, Table: **vr_soe_2020_a_1340s**.
      * _phs000007.v30.pht003099.v5.phv00177930.v5_. dbGap Name: **age1**, Desc: **Age at Exam 1**, Table: **vr_dates_2019_a_1175s**.
      * _phs000007.v30.pht003316.v7.phv00190817.v7_. dbGap Name: **cvd**, Desc: **Cardiovascular Disease (CVD) status**, Table: **vr_survcvd_2019_a_1334s**.
      * _phs000007.v30.pht003316.v7.phv00190823.v7_. dbGap Name: **cvddate**, Desc: **Date of Cardiovascular Disease (CVD) status**, Table: **vr_survcvd_2019_a_1334s**.
    * **Function:**
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
      
          # Create mi_prior variable. Gather all mi events.
          dat$mi_prior <- replicate(length(dat$event), 0)
          dat$mi_prior  <- case_when(
            dat$event == 1 | dat$event == 2 | dat$event == 3 | dat$event == 4 | dat$event == 5 ~ 1,
            dat$event > 5 ~ 0,
            is.na(dat$event) ~ NA_real_
          )
      
          # Calculate age at event.
          dat$age_at_event <- replicate(length(dat$event), 0)
          dat$age_at_event <- floor(dat$cad_followup_start_age + (dat$date / 365.25))
      
          # Identify prior mi events.
          dat <- dat %>%
            mutate(mi_prior = case_when(mi_prior == 1 & date <= 0 ~ 1,
                                           mi_prior == 1 & date > 0 ~ 0,
                                           TRUE ~ mi_prior))
      
          # Find subjects with multiple mi events and select first mi event.
          mi_event <- dat %>%
            filter(mi_prior == 1) %>%
            arrange(topmed_subject_id, date) %>%
            distinct(topmed_subject_id, .keep_all = TRUE) %>%
            select(-event)
      
          # Gather all non-mi-event subjects.
          non_mi_event <- dat %>%
            filter(mi_prior == 0) %>%
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
      
          # Create an mi_prior variable for non-event subjects.
          non_event$mi_prior <- 0
      
          # Create an age at censoring variable for non-event subjects.
          non_event$age_at_event <-
            non_event$cad_followup_start_age + (non_event$date / 365.25)
      
          # Bind non_event and non_mi_event datasets and remove duplicates.
          non_event_all <- rbind(non_event, non_mi_event) %>%
            arrange(topmed_subject_id, desc(date)) %>%
            distinct(topmed_subject_id, .keep_all = TRUE)
      
          # Combine all mi-event subjects with non-mi-event subjects.
          dat_combined <- bind_rows(mi_event, non_event_all) %>%
            arrange(topmed_subject_id, desc(mi_prior)) %>%
      
            # Remove duplicate subjects with multiple events.
            distinct(topmed_subject_id, .keep_all = TRUE) %>%
            transmute(topmed_subject_id, mi_prior = as.character(mi_prior), age = age_at_event) %>%
            na.omit()
      
          return(dat_combined)
      }
      ```
<a id="mi_prior_1-jhs"></a>
  * ### atherosclerosis_events_prior/mi_prior_1 -- **JHS Jackson Heart Study (JHS) Cohort**:
    * 2 component_study_variables
      * _phs000286.v5.pht001949.v1.phv00126009.v1_. No dbGap metadata available.
      * _phs000286.v5.pht001949.v1.phv00126088.v1_. No dbGap metadata available.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(magrittr)
      
        dataset <- phen_list$source_data$pht001949 %>%
          rename(age = AGE01, mi_prior = XMI01)
      
        # Set missing values to NA.
        dataset$mi_prior[dataset$mi_prior %in% 'X'] <- NA
      
        # Convert age to numeric and mi_prior to character.
        dataset$age <- as.numeric(dataset$age)
        dataset$mi_prior <- as.character(dataset$mi_prior)
      
        # Remove NAs.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="mi_prior_1-mesa"></a>
  * ### atherosclerosis_events_prior/mi_prior_1 -- **MESA Multi-Ethnic Study of Atherosclerosis (MESA) Cohort**:
    * 1 component_study_variables
      * _phs000209.v13.pht001116.v10.phv00084442.v3_. dbGap Name: **age1c**, Desc: **AGE**, Table: **MESA_Exam1Main**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        # Convert age to numeric and set all participants to 0.
        dat <- transmute(phen_list$source_data$pht001116, topmed_subject_id, age = as.numeric(age1c),
                         mi_prior = "0")
        return(dat)
      }
      ```
<a id="mi_prior_1-whi"></a>
  * ### atherosclerosis_events_prior/mi_prior_1 -- **WHI Women's Health Initiative**:
    * 3 component_study_variables
      * _phs000200.v11.pht000998.v6.phv00078436.v6_. dbGap Name: **F2DAYS**, Desc: **F2 Days since randomization**, Table: **f2_rel1**.
      * _phs000200.v11.pht000998.v6.phv00078437.v6_. dbGap Name: **AGE**, Desc: **Age at screening**, Table: **f2_rel1**.
      * _phs000200.v11.pht000998.v6.phv00078482.v6_. dbGap Name: **MI**, Desc: **MI ever**, Table: **f2_rel1**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          # Convert age to numeric and rename MI variable.
          dat <- transmute(
            phen_list$source_data$pht000998,
            age = as.numeric(AGE),
            mi_prior = MI,
            topmed_subject_id
          ) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dat)
      }
      ```
<a id="pad_prior_1"></a>
## atherosclerosis_events_prior: **pad_prior_1** (pad_prior)
  An indicator of whether a subject had peripheral arterial disease prior to the baseline visit.
  * **Study (harmonization_units)**:
    * [ARIC](#pad_prior_1-aric)
    * [CHS](#pad_prior_1-chs)
    * [COPDGene](#pad_prior_1-copdgene)
    * [FHS](#pad_prior_1-fhs)
    * [JHS](#pad_prior_1-jhs)
    * [MESA](#pad_prior_1-mesa)
    * [WHI](#pad_prior_1-whi)
  * **Metadata**:
    **`Data Type`**: encoded, **`Measurement Units`**: pad_prior, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2019-10-31 16:35:19
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C0085096
  * **DCC Harmonization Comments**:

    This variable was harmonized by appropriately converting component variables to a binary variable indicating the presence or absence of PAD before the baseline visit. Component variables included could indicate presence or absence of PAD either by self-report or by study adjudication. If a study recorded multiple events, the DCC harmonized only the earliest event prior to baseline. Unless otherwise stated, the age variable accompanying this variable represents the study participants' age when history of PAD was recorded, _not_ the age at which PAD occurred.
    
    
    ### Study-specific comments
    
    #### JHS
    PAD was determined by calculating the ankle-brachial index (ABI) from six total blood pressure measurements: two from the arm and four from the ankle. ABI was determined by dividing the maximum blood pressure of the arm by the maximum blood pressure of the ankle.  A subject was coded as "1" for prior PAD if the calculated ABI value was less than 0.9.
    
    #### FHS
    *_FHS_* uses intermittent claudication to determine PAD. The age variable accompanying this variable represents the age at which the PAD diagnosis occurred, not the age when the history of PAD was recorded. 
    
    ### Reporting method for component study variables
    The table below shows the reporting method (self-reported or adjudicated by the study) for component study variables from each study included in this harmonized variable.
    
    | Study or subcohort | Self-report or Adjudicated|
    |---------|----------|
    | FHS | Adjudicated|
    | MESA | Self-report |
    | JHS | Self-report |
    | ARIC | Self-report |
    | CHS | Both |
    | COPDGene | Self-report |
    | WHI | Self-report |
    
    
<a id="pad_prior_1-aric"></a>
  * ### atherosclerosis_events_prior/pad_prior_1 -- **ARIC Atherosclerosis Risk in Communities (ARIC) Cohort**:
    * 2 component_study_variables
      * _phs000280.v5.pht004063.v2.phv00204712.v1_. dbGap Name: **V1AGE01**, Desc: **Age at visit 1 [Cohort. Visit 1]**, Table: **DERIVE13**.
      * _phs000280.v5.pht004063.v2.phv00204795.v1_. dbGap Name: **PAD02**, Desc: **Peripheral artery disease visit 1, definition 2 - same for both genders [Cohort. Visit 1]**, Table: **DERIVE13**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(magrittr)
      
        dataset <- plyr::join_all(phen_list$source_data) %>%
          rename(age = V1AGE01, pad_prior = PAD02)
      
        dataset$pad_prior[dataset$pad_prior %in% 'T'] <- NA
      
        # Convert age to numeric and pad_prior to character.
        dataset$age <- as.numeric(dataset$age)
        dataset$pad_prior <- as.character(dataset$pad_prior)
      
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="pad_prior_1-chs"></a>
  * ### atherosclerosis_events_prior/pad_prior_1 -- **CHS Cardiovascular Health Study (CHS) Cohort: an NHLBI-funded observational study of risk factors for cardiovascular disease in adults 65 years or older**:
    * 4 component_study_variables
      * _phs000287.v6.pht001452.v1.phv00100330.v1_. dbGap Name: **ABTLEG**, Desc: **LEG ARTERY BYPASS**, Table: **BASEBOTH**.
      * _phs000287.v6.pht001452.v1.phv00100333.v1_. dbGap Name: **EXTART**, Desc: **LOW EXTREM ANGIOPLASTY**, Table: **BASEBOTH**.
      * _phs000287.v6.pht001452.v1.phv00100487.v1_. dbGap Name: **AGEBL**, Desc: **CALCULATED AGE AT BASELINE**, Table: **BASEBOTH**.
      * _phs000287.v6.pht001452.v1.phv00100507.v1_. dbGap Name: **CLBLMOD**, Desc: **CLD MODIFIED BL STAT**, Table: **BASEBOTH**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        # Filter out rows where all phenotype rows are missing.
        dat <- filter(phen_list$source_data$pht001452, !(is.na(CLBLMOD) & is.na(ABTLEG) &
                                                         is.na(EXTART))) %>%
          # Convert all variables to numeric
          mutate_if(is.character, as.numeric) %>%
          # Rename age and calculate PAD variable.
          transmute(topmed_subject_id, age = as.numeric(AGEBL),
                         pad_prior = data.frame(CLBLMOD, ABTLEG, EXTART) %>%
                                     rowSums(na.rm = TRUE) %>%
                                     as.logical() %>%
                                     as.integer() %>%
                                     as.character()) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dat)
      }
      ```
<a id="pad_prior_1-copdgene"></a>
  * ### atherosclerosis_events_prior/pad_prior_1 -- **COPDGene **:
    * 2 component_study_variables
      * _phs000179.v5.pht002239.v4.phv00159618.v4_. No dbGap metadata available.
      * _phs000179.v5.pht002239.v4.phv00159836.v4_. No dbGap metadata available.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(magrittr)
      
        dataset <- phen_list$source_data$pht002239 %>%
          rename(age = Age_Enroll, pad_prior = PeriphVascular)
      
        # Convert age to numeric and pad_prior to character.
        dataset$age <- as.numeric(dataset$age)
        dataset$pad_prior <- as.character(dataset$pad_prior)
      
        # Remove NAs.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="pad_prior_1-fhs"></a>
  * ### atherosclerosis_events_prior/pad_prior_1 -- **FHS Framingham Cohort**:
    * 5 component_study_variables
      * _phs000007.v30.pht000309.v13.phv00036469.v12_. dbGap Name: **EVENT**, Desc: **Event Number**, Table: **vr_soe_2020_a_1340s**.
      * _phs000007.v30.pht000309.v13.phv00036471.v12_. dbGap Name: **DATE**, Desc: **Date of Event**, Table: **vr_soe_2020_a_1340s**.
      * _phs000007.v30.pht003099.v5.phv00177930.v5_. dbGap Name: **age1**, Desc: **Age at Exam 1**, Table: **vr_dates_2019_a_1175s**.
      * _phs000007.v30.pht003316.v7.phv00190817.v7_. dbGap Name: **cvd**, Desc: **Cardiovascular Disease (CVD) status**, Table: **vr_survcvd_2019_a_1334s**.
      * _phs000007.v30.pht003316.v7.phv00190823.v7_. dbGap Name: **cvddate**, Desc: **Date of Cardiovascular Disease (CVD) status**, Table: **vr_survcvd_2019_a_1334s**.
    * **Function:**
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
      
          # Create pad_prior variable. Gather all pad_prior events.
          dat$pad_prior <- replicate(length(dat$event), 0)
          dat$pad_prior  <- case_when(
            dat$event == 30 ~ 1,
            dat$event != 30 ~ 0,
            is.na(dat$event) ~ NA_real_
          )
      
          # Calculate age at event.
          dat$age_at_event <- replicate(length(dat$event), 0)
          dat$age_at_event <- floor(dat$cad_followup_start_age + (dat$date / 365.25))
      
          # Identify prior pad events.
          dat <- dat %>%
            mutate(pad_prior = case_when(pad_prior == 1 & date <= 0 ~ 1,
                                         pad_prior == 1 & date > 0 ~ 0,
                                         TRUE ~ pad_prior))
      
          # Find subjects with multiple pad events and select first pad event.
          pad_event <- dat %>%
            filter(pad_prior == 1) %>%
            arrange(topmed_subject_id, date) %>%
            distinct(topmed_subject_id, .keep_all = TRUE) %>%
            select(-event)
      
          # Gather all non-pad-event subjects.
          non_pad_event <- dat %>%
            filter(pad_prior == 0) %>%
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
      
          # Create a pad_prior variable for non-event subjects.
          non_event$pad_prior <- 0
      
          # Create an age at censoring variable for non-event subjects.
          non_event$age_at_event <-
            non_event$cad_followup_start_age + (non_event$date / 365.25)
      
          # Bind non_event and non_pad_event datasets and remove duplicates.
          non_event_all <- rbind(non_event, non_pad_event) %>%
            arrange(topmed_subject_id, desc(date)) %>%
            distinct(topmed_subject_id, .keep_all = TRUE)
      
          # Combine all pad-event subjects with non-pad-event subjects.
          dat_combined <- bind_rows(pad_event, non_event_all) %>%
            arrange(topmed_subject_id, desc(pad_prior)) %>%
      
            # Remove duplicate subjects with multiple events.
            distinct(topmed_subject_id, .keep_all = TRUE) %>%
            transmute(topmed_subject_id, pad_prior = as.character(pad_prior), age = age_at_event) %>%
            na.omit()
      
          return(dat_combined)
      
      }
      ```
<a id="pad_prior_1-jhs"></a>
  * ### atherosclerosis_events_prior/pad_prior_1 -- **JHS Jackson Heart Study (JHS) Cohort**:
    * 7 component_study_variables
      * _phs000286.v5.pht001921.v1.phv00124562.v1_. dbGap Name: **ABBA7**, Desc: **7. B. Measures. First brachial Doppler blood pressure (mm Hg) [Visit 1] [Ankle-Brachial Blood Pressure]**, Table: **abba**.
      * _phs000286.v5.pht001921.v1.phv00124563.v1_. dbGap Name: **ABBA8**, Desc: **8. B. Measures. First right posterior tibia blood pressure (mm Hg) [Visit 1] [Ankle-Brachial Blood Pressure]**, Table: **abba**.
      * _phs000286.v5.pht001921.v1.phv00124564.v1_. dbGap Name: **ABBA9**, Desc: **9. B. Measures. First left posterior tibia blood pressure (mm Hg) [Visit 1] [Ankle-Brachial Blood Pressure]**, Table: **abba**.
      * _phs000286.v5.pht001921.v1.phv00124565.v1_. dbGap Name: **ABBA10**, Desc: **10. B. Measures. Second left posterior tibia [Visit 1] [Ankle-Brachial Blood Pressure]**, Table: **abba**.
      * _phs000286.v5.pht001921.v1.phv00124566.v1_. dbGap Name: **ABBA11**, Desc: **11. B. Measures. Second right posterior tibia blood pressure (mm Hg) [Visit 1] [Ankle-Brachial Blood Pressure]**, Table: **abba**.
      * _phs000286.v5.pht001921.v1.phv00124567.v1_. dbGap Name: **ABBA12**, Desc: **12. B. Measures. Second brachial blood pressure (mm Hg) [Visit 1] [Ankle-Brachial Blood Pressure]**, Table: **abba**.
      * _phs000286.v5.pht001949.v1.phv00126009.v1_. No dbGap metadata available.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(magrittr)
      
        dataset <- plyr::join_all(phen_list$source_data) %>%
          rename(age = AGE01) %>%
          mutate_if(is.character, as.numeric)
      
        # Take max of the 4 BP measurements from the ankle.
        ankle <- c("ABBA9", "ABBA10", "ABBA8", "ABBA11")
      
        dataset$max_ankle <- apply(dataset[, ankle],
                                       1,
                                       function(x) ifelse(all(is.na(x)),
                                                          NA,
                                                          max(x, na.rm = TRUE)))
      
        # Take max of the 2 BP measurements from the arm.
        arm <- c("ABBA7", "ABBA12")
      
        dataset$max_arm <- apply(dataset[, arm],
                                      1,
                                      function(x) ifelse(all(is.na(x)),
                                                          NA,
                                                          max(x, na.rm = TRUE)))
      
        # Calculate ABI
        dataset$abi <- dataset$max_ankle / dataset$max_arm
      
        # Derive prevalent PAD from ABI calculation (PAD is defined by an ABI < 0.9)
        dataset$pad_prior <- as.character(as.integer(dataset$abi < 0.9))
      
        dataset <- dataset %>%
          select(topmed_subject_id, age, pad_prior)
      
        # Convert pad_prior to character and age to numeric.
        dataset$age <- as.numeric(dataset$age)
      
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="pad_prior_1-mesa"></a>
  * ### atherosclerosis_events_prior/pad_prior_1 -- **MESA Multi-Ethnic Study of Atherosclerosis (MESA) Cohort**:
    * 1 component_study_variables
      * _phs000209.v13.pht001116.v10.phv00084442.v3_. dbGap Name: **age1c**, Desc: **AGE**, Table: **MESA_Exam1Main**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        # Convert age to numeric and set all participants to 0.
        dat <- transmute(phen_list$source_data$pht001116, topmed_subject_id, age = as.numeric(age1c),
                         pad_prior = "0")
        return(dat)
      }
      ```
<a id="pad_prior_1-whi"></a>
  * ### atherosclerosis_events_prior/pad_prior_1 -- **WHI Women's Health Initiative**:
    * 4 component_study_variables
      * _phs000200.v11.pht000998.v6.phv00078436.v6_. dbGap Name: **F2DAYS**, Desc: **F2 Days since randomization**, Table: **f2_rel1**.
      * _phs000200.v11.pht000998.v6.phv00078437.v6_. dbGap Name: **AGE**, Desc: **Age at screening**, Table: **f2_rel1**.
      * _phs000200.v11.pht000999.v6.phv00078507.v6_. dbGap Name: **F30DAYS**, Desc: **F30 Days since randomization/enrollment**, Table: **f30_rel2**.
      * _phs000200.v11.pht000999.v6.phv00078562.v6_. dbGap Name: **PAD**, Desc: **Peripheral arterial disease ever**, Table: **f30_rel2**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        source_data <- phen_list$source_data
        # Join Form 2 data with Form 30 data
        dat <- full_join(source_data$pht000998, source_data$pht000999, "topmed_subject_id") %>%
          # Set positive F2DAYS values to 0.
          mutate_at(vars(F2DAYS), function(x) case_when(x > 0 ~ 0, TRUE ~ as.numeric(x))) %>%
          # Calculate age, rename PAD variable, and drop remaining variables.
          transmute(age = as.numeric(AGE) + (as.numeric(F30DAYS) + abs(F2DAYS)) / 365.25,
                    pad_prior = PAD, topmed_subject_id) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dat)
      }
      ```