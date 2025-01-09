
# vte

### Variables in this section:
* [vte_case_status_1](#vte_case_status_1)
* [vte_followup_start_age_1](#vte_followup_start_age_1)
* [vte_prior_history_1](#vte_prior_history_1)

<a id="vte_case_status_1"></a>
## vte: **vte_case_status_1** (vte_case_status)
  An indicator of whether a subject experienced a venous thromboembolism event (VTE) that was verified by adjudication or by medical professionals.
  * **Harmonization Units**:
    * [ARIC](#vte_case_status_1-aric)
    * [CHS](#vte_case_status_1-chs)
    * [FHS_G3NOSOm12](#vte_case_status_1-fhs_g3nosom12)
    * [FHS_Offspring](#vte_case_status_1-fhs_offspring)
    * [FHS_Original](#vte_case_status_1-fhs_original)
    * [HVH](#vte_case_status_1-hvh)
    * [Mayo_GENEVA](#vte_case_status_1-mayo_geneva)
    * [Mayo_OC](#vte_case_status_1-mayo_oc)
    * [WHI_HRT](#vte_case_status_1-whi_hrt)
    * [WHI_MRCnonHRT](#vte_case_status_1-whi_mrcnonhrt)
  * **Metadata**:
    **`Data Type`**: encoded, **`Measurement Units`**: None, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2018-11-07 14:08:02
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C1861172
  * **DCC Harmonization Comments**:

    Venous thromboembolism (VTE) events include deep vein thrombosis (DVT) or pulmonary embolism (PE). If data included variable(s) distinguishing the type, information about the first event of either type was used. Throughout these comments, we refer to subjects that have experienced a verified VTE event as cases and to subjects that have not as controls.
    
    For cohort studies (where subjects were enrolled and then followed for a period of time), any subject with a verified event who also had no evidence of prior events was classified as a case , with the exception of *_FHS_* Original and Offspring subcohorts. The case determination process for these subcohorts is explained below. Subjects with no events recorded and with no evidence of prior events were classified as controls as long as the time at censoring was after the start of adjudication/medical review. The harmonized variable was set to missing for subjects with no events recorded for which time at censoring was before or at the start of adjudication/medical review, or for any subject with evidence of prior events. 
    For case-control studies, case status was as given in the case status study component variable, with some additional criteria for *_HVH_*.
    
    The cohort studies generally provided time-to-event data.  Time was the time to event for cases and time to censoring for controls, expressed in days from a reference point (usually visit 1 or enrollment).  The time data was used to compute the accompanying age variable for the case status harmonized variable.
    
    ### Study-specific comments
    
    #### FHS
    Censoring time was obtained by using days from Exam 1 to last exam attended.
    
    VTE event adjudication started January 1, 1995. We use the term "pre-specified exam" to refer to the exam for a given subcohort that was closest to the start of adjudication. The pre-specified exam was Exam 24  for the Original subcohort and Exam 6 for the Offspring subcohort. For all other cohorts, Exam 1 was the pre-specified exam.
    
    Consider subjects for whom there was a recorded event and for whom there was no evidence of events prior to the start of adjudication. If a subject attended the pre-specified exam and the event occurred after the pre-specified exam, the subject was classified as a case. If a subject did not attend the pre-specified exam, the subject was classified as a case if the number of days to the event was greater than the number of days to the exam immediately following the pre-specified exam or if the number of days to the event was outside the range of the pre-specified exam for all subjects in that subcohort; otherwise the harmonized variable was assigned as missing.
    
    #### HVH
    
    For this case-control study, the case-control study component variable identified three other conditions besides VTE ( myocardial infarction, atrial fibrillation, and stroke) and subjects identified as controls were free of any of these conditions at the time of initial inclusion in the study. Some subjects initially selected as controls could later be found to have a condition and were then also identified as a case for that condition with a later index date. 
    
    All subjects indicated as a case for VTE by the case-control component study variable were assigned case status; there were no prior events for these subjects nor multiple incident events. The corresponding age variable was assigned the given age at the VTE event.
    
    Subjects indicated as controls by the case-control study variable were assigned control status only if there was no entry indicating later case status for VTE. The corresponding age variable for these subjects was assigned the given age at the latest index date for which the subject was recorded as a control.
    
    #### Mayo_VTE
    
    For cases, the corresponding age variable was assigned as the age at the VTE event. For controls (no VTE event), the corresponding age variable was assigned as the age at enrollment. 
    Some subjects had age recorded as ">89". For these subjects, age was harmonized as 90.
    
    ### Adjudication or medical review process
    
    Below are references to documentation for descriptions of the medical review process for the studies.
    
    ##### FHS
    * dbGaP study accession: phs000007.v29
    * document name/document accession: Venous Thrombosis Review: Protocol / phd007074.1
    
    
    ##### WHI
    * dbGaP study accession: phs000200.v11
    * document name/document accession:
         * Section 1: Introduction to WHI outcomes / phd001942.1
         * Section 8: Other outcomes / phd001949.1
    	 * WHI Extension Study Protocol: Section 8 - Outcomes /phd004180.2 and phd004182.2
    
    ##### HVH
    * dbGaP study accession: phs001013.v3
    * document name/document accession: Manual of operations / phd005482.2
    
    ##### Mayo_VTE
    * dbGaP study accession: phs000289.v2
    * document name/document accession: Manual for recruitment and data entry / phd003193.1
    
    ##### ARIC and CHS
    VTE data for *_ARIC_* (phs000280) and *_CHS_* (phs000287) was from the _LITE_ project (Longitudinal Investigation of Thromboembolism Etiology). The _LITE_ study design, methods, and VTE incidence rates are reported in references 1 and 2 below [^1] [^2].
    
    In addition, brief descriptions for each of the studies can be found in Table S1 (Main Design and Sample Characteristics of the Analyzed VTE studies) of reference 3 [^3] below.
    
    
    ### Additional information for users of TOPMed data 
    
    For cohort studies with subcohort structure or differing protocols for certain subgroups, matching of cases and controls within a study should be done within each subcohort or subgroup and the subgroup/subcohort structure should be included as a covariate in analyses. For the studies with subcohorts, the variable `subcohort_1` in the DCC harmonized demographic dataset identifies the subcohorts. 
    
    Ascertainment of subjects for TOPMed sequencing in some of these studies favored certain conditions related to VTE processes (e.g. stroke and atrial fibrillation). In these situations, analysts should consider excluding controls with a history of these conditions from analyses.
    The following provides additional information  for individual studies. 
    
    #### WHI
    Two subgroups were defined as subjects in the Hormone Replacement Therapy trial (HRT) and subjects in the Medical Records Cohort (MRC) but not in HRT. The table below lists the dbGaP variables needed to identify these subgroups. Ascertainment for TOPMed sequencing favored stroke cases. The table includes dbGaP variables that identify stroke cases.
    
    |variable name| description| dataset accession| variable accession|
    |:---:|:---:|:---:|:---:|
    |HRTFLAG| HRT participant| pht001031|phv00080426.v6.p3|
    |EXT2MRC| MRC participant| pht003395| phv00192302.v3.p3|
    |STROKE| indicator of stroke event| pht003407| phv00193202.v3.p3|
    |STROKE| self-report of stroke at screening| pht000998| phv00078478.v6.p3|
    
    #### FHS
    
    *_FHS_* has the following subcohorts: Original, Offspring, New Spouse Offspring, Generation 3, Omni1 and Omni2. Some TOPMed-sequenced subjects for *_FHS_* were selected because they were AFib (atrial fibrillation) cases. The table below gives dbGaP variables needed to identify AFib cases. 
    
    |variable name| description| dataset accession| variable accession|
    |:---:|:---:|:---:|:---:|
    |afx| atrial fibrillation/flutter status   | pht003315| phv00273699.v1.p10|
    
    #### CHS 
    
    CHS has two subcohorts: Old and New.
    
    A selection of VTE cases for *_CHS_* were sequenced for TOPMed freeze5. Additional subjects from *_CHS_* were sequenced in freeze6 but at a different sequencing center. Analysts should check for potential batch effects.
    
    #### ARIC 
    
    *_ARIC_* has no subcohort structure. Some TOPMed sequenced subjects for *_ARIC_* were selected because they were AFib (atrial fibrillation) cases. It should be noted that the AFib cases for *_ARIC_* were sequenced at a different center than the remaining *_ARIC_* subjects.
    
    |variable name| description| dataset accession| variable accession|
    |:---:|:---:|:---:|:---:|
    |AFECGV1| prevalent AFib at visit 1| pht004118 |phv00207561.v1.p1|
    |AFINCBY05| incident AFib any source| pht004118|phv00207568.v1.p1|
    
    #### HVH 
    
    Some TOPMed sequenced subjects for *_HVH_* were selected because they were AFib (atrial fibrillation) cases. It should be noted that the AFib cases for *_HVH_* were sequenced at a different center than the remaining *_HVH_* subjects.
    The encoded value for `ccs` for AFib cases is 4.
    
    |variable name| description| dataset accession| variable accession|
    |:---:|:---:|:---:|:---:|
    |ccs| encoded value case status| pht005311 |phv00259376.v2.p2|
    
    
    
    [^1]: Cushman, M. et al (2004). Deep vein thrombosis and pulmonary embolism in two cohorts: the longitudinal investigation of thromboembolism etiology. Am J Med, 117(1) 19-25.
    
    [^2]: Tsai, A.W. et al (2002). Cardiovascular risk factors and venous thromboembolism incidence: the longitudinal investigation of thromboembolism etiology. Arch Intern Med, 162(10) 1182-1189.
    
    [^3]: Germain, M et al (2015). Meta-analysis of 65,734 individuals identifies TSPAN15 and SLC44A2 as two susceptibility loci for venous thromboembolism. Am J Hum Genet, 96(4) 532-542.
    
<a id="vte_case_status_1-aric"></a>
  * ### vte/vte_case_status_1 -- **ARIC**:
    * 3 component_study_variables: `phs000280.v4.pht004063.v2.phv00204712.v1`, `phs000280.v4.pht006485.v1.phv00298125.v1`, `phs000280.v4.pht006485.v1.phv00298126.v1`
    * Function:
      ```r
      harmonize <- function(phen_list) {
        library(dplyr)
      
        # case status for ARIC
        # All ARIC cases were incident (i.e. no previous history)
        # follow-up started at visit1 so age = age at visit1
      
        # get dataset with age at visit 1 information
        # get dataset including the subjects followed for VTE
        # join to keep subjects followed for VTE
      
        dat1 <- phen_list$source_data$pht004063
        dat2 <- phen_list$source_data$pht006485
        dat <- left_join(dat2, dat1)
      
        # change age and time to numeric
        dat$V1AGE01 <- as.numeric(dat$V1AGE01)
        dat$PTime <- as.numeric(dat$PTime)
      
        # event: 0 = no event, 1 = event unprovoked, 2 = event provoked
        # PTime = time to event or censoring, given as days from visit 1
        # compute age = age at visit 1 + days from visit1/365.25
        # keep only non-missing information
      
         dat <- dat %>%
                mutate(vte_case_status = ifelse(event %in% c(1, 2), 1, NA)) %>%
                mutate(vte_case_status = ifelse(event %in% 0, 0, vte_case_status)) %>%
                mutate(age = V1AGE01 + PTime / 365.25 ) %>%
                filter(!is.na(vte_case_status) & !is.na(age)) %>%
                mutate(vte_case_status = as.character(vte_case_status)) %>%
                select(topmed_subject_id, vte_case_status, age)
      
        return(dat)
      }
      ```
<a id="vte_case_status_1-chs"></a>
  * ### vte/vte_case_status_1 -- **CHS**:
    * 4 component_study_variables: `phs000287.v6.pht001452.v1.phv00100487.v1`, `phs000287.v6.pht005981.v1.phv00273565.v1`, `phs000287.v6.pht005981.v1.phv00273566.v1`, `phs000287.v6.pht005981.v1.phv00273567.v1`
    * Function:
      ```r
      harmonize <- function(phen_list) {
        library(dplyr)
      
        # case status for CHS
        # some prior history (self-report of DVT or PE at baseline)
      
        # get dataset with age at CHS baseline information
        # get dataset including the subjects followed for VTE
        # join to keep subjects followed for VTE
      
        dat1 <- phen_list$source_data$pht001452
        dat2 <- phen_list$source_data$pht005981
        dat <- left_join(dat2, dat1)
      
        # remove subjects with prior history
        dat <- dat %>% filter(!(vtpehx01 %in% 1))
      
        # change age and days variables to numeric
        dat$AGEBL <- as.numeric(dat$AGEBL)
        dat$ttoevent <- as.numeric(dat$ttoevent)
      
        # assign case status
        # assign age: age at CHS baseline + days from baseline to event/censoring/365.25
        # keep only non-missing information
      
         dat <- dat %>% mutate(vte_case_status = ifelse(vt %in% 1, 1, NA)) %>%
                mutate(vte_case_status = ifelse(vt %in% 0, 0, vte_case_status)) %>%
                mutate(age = AGEBL + ttoevent / 365.25) %>%
                filter(!is.na(vte_case_status) & !is.na(age)) %>%
               mutate(vte_case_status = as.character(vte_case_status)) %>%
               select(topmed_subject_id, vte_case_status, age)
      
        return(dat)
      }
      ```
<a id="vte_case_status_1-fhs_g3nosom12"></a>
  * ### vte/vte_case_status_1 -- **FHS_G3NOSOm12**:
    * 11 component_study_variables: `phs000007.v29.pht003099.v4.phv00177927.v4`, `phs000007.v29.pht003099.v4.phv00177928.v4`, `phs000007.v29.pht003099.v4.phv00177930.v4`, `phs000007.v29.pht003099.v4.phv00177931.v4`, `phs000007.v29.pht003099.v4.phv00177933.v4`, `phs000007.v29.pht003099.v4.phv00177935.v4`, `phs000007.v29.pht003099.v4.phv00177985.v4`, `phs000007.v29.pht003099.v4.phv00177986.v4`, `phs000007.v29.pht003099.v4.phv00177987.v4`, `phs000007.v29.pht006025.v1.phv00276977.v1`, `phs000007.v29.pht006025.v1.phv00277005.v1`
    * 1 component_harmonized_variables: `vte_prior_history_1`
    * Function:
      ```r
      harmonize <- function(phen_list) {
        library(dplyr)
      
        # case status for FHS NOS, Gen3, Omni1, and Omni2
        # follow-up started at visit1
        # Omni1 had Exams 1 - 4, the rest only Exams 1 - 2
      
        # get dataset with sub-cohort indicator and visit information
        # select the given subcohorts: NOS = 2, Gen3 = 3, Omni1 = 7, Omni2 = 72
        # get dataset with VTE event information
        # join
      
        dat1 <- phen_list$source_data$pht003099 %>%
               filter(idtype %in% c(2, 3, 7, 72))
        dat2 <- phen_list$source_data$pht006025
        dat  <- left_join(dat1, dat2)
      
        # filter out prior history
        dat3 <- phen_list$harmonized_data$vte_prior_history_1
        dat <- left_join(dat, dat3)
        dat <- dat %>% filter(!(vte_prior_history_1 %in% 1))
      
        # change age and day variables to numeric
        dat$age1 <- as.numeric(dat$age1)
        dat$EDATE1 <- as.numeric(dat$EDATE1)
        for (i in 2:4){
          v <- paste0("date", i)
          dat[, v] <- as.numeric(dat[, v])
          v2 <- paste0("att", i)
          dat[, v2] <- as.numeric(dat[, v2])
        }
        dat$att1 <- as.numeric(dat$att1)
      
        # determine last exam attended (will need for controls)
        tmp <- as.matrix(dat[, paste0("att", 1:4)])
        w <- apply(tmp, 1, function(x) max(which(x %in% 1)))
        dat$last_exam <- w
      
        # define variable = days from visit1 to last exam
        for (i in 1:nrow(dat)){
          if (dat$last_exam[i] == 1){
            dat$days_last[i] <- 0
          } else {
            dat$days_last[i] <- dat[i, paste0("date", dat$last_exam[i])]
          }
        }
      
        # case status indicator
        dat <- dat %>% mutate(vte_case_status = ifelse(EVENT1 %in% c(1, 2, 3), 1, 0))
      
        # filter out controls if last exam is only at baseline visit1
        dat <- dat %>%
               filter(!(vte_case_status %in% 0 & last_exam == 1))
      
        #  for control age = age at last exam = age visit1 + date last exam/365.25
        #  for case age = age visit1 + days visit 1 to event/365.25
      
        dat <- dat %>%
               mutate(age = ifelse(vte_case_status %in% 1, age1 + EDATE1 / 365.25, NA)) %>%
               mutate(age = ifelse(vte_case_status %in% 0, age1 + days_last / 365.25, age)) %>%
               filter(!is.na(vte_case_status) & !is.na(age)) %>%
               mutate(vte_case_status = as.character(vte_case_status)) %>%
               select(topmed_subject_id, vte_case_status, age)
      
        return(dat)
      }
      ```
<a id="vte_case_status_1-fhs_offspring"></a>
  * ### vte/vte_case_status_1 -- **FHS_Offspring**:
    * 21 component_study_variables: `phs000007.v29.pht003099.v4.phv00177927.v4`, `phs000007.v29.pht003099.v4.phv00177928.v4`, `phs000007.v29.pht003099.v4.phv00177930.v4`, `phs000007.v29.pht003099.v4.phv00177931.v4`, `phs000007.v29.pht003099.v4.phv00177933.v4`, `phs000007.v29.pht003099.v4.phv00177935.v4`, `phs000007.v29.pht003099.v4.phv00177937.v4`, `phs000007.v29.pht003099.v4.phv00177939.v4`, `phs000007.v29.pht003099.v4.phv00177941.v4`, `phs000007.v29.pht003099.v4.phv00177943.v4`, `phs000007.v29.pht003099.v4.phv00177945.v4`, `phs000007.v29.pht003099.v4.phv00177985.v4`, `phs000007.v29.pht003099.v4.phv00177986.v4`, `phs000007.v29.pht003099.v4.phv00177987.v4`, `phs000007.v29.pht003099.v4.phv00177988.v4`, `phs000007.v29.pht003099.v4.phv00177989.v4`, `phs000007.v29.pht003099.v4.phv00177990.v4`, `phs000007.v29.pht003099.v4.phv00177991.v4`, `phs000007.v29.pht003099.v4.phv00177992.v4`, `phs000007.v29.pht006025.v1.phv00276977.v1`, `phs000007.v29.pht006025.v1.phv00277005.v1`
    * 1 component_harmonized_variables: `vte_prior_history_1`
    * Function:
      ```r
      harmonize <- function(phen_list) {
        library(dplyr)
      
        # previous history for FHS Offspring
        # follow-up started at visit6
      
        # get dataset with sub-cohort indicator and visit information
        # select the given subcohorts: Offspring = 1
        # get dataset with VTE event information
        # join
      
        dat1 <- phen_list$source_data$pht003099 %>%
               filter(idtype %in% 1)
        dat2 <- phen_list$source_data$pht006025
        dat  <- left_join(dat1, dat2)
      
        # get dataset with harmonized vte_prior_history
        dat3 <- phen_list$harmonized_data$vte_prior_history_1
        dat <- left_join(dat, dat3)
      
        # to determine status if did not attend visit 6:
        # find max days for those who did attend visit6 before any exclusions
        max6 <- max(as.numeric(dat$date6), na.rm = TRUE)
      
        # remove subjects with prior history
        dat <- dat %>% filter(!(vte_prior_history_1 %in% 1))
      
        # change age and day variables to numeric
        # Offspring spans visits 1 - 9
        dat$age1 <- as.numeric(dat$age1)
        dat$EDATE1 <- as.numeric(dat$EDATE1)
        for (i in 2:9){
          v <- paste0("date", i)
          dat[, v] <- as.numeric(dat[, v])
          v2 <- paste0("att", i)
          dat[, v2] <- as.numeric(dat[, v2])
        }
        dat$att1 <- as.numeric(dat$att1)
      
        # determine last exam attended (will need for controls)
        tmp <- as.matrix(dat[, paste0("att", 1:9)])
        w <- apply(tmp, 1, function(x) max(which(x %in% 1)))
        dat$last_exam <- w
      
        # define variable = days from visit1 to last exam
        for (i in 1:nrow(dat)){
          if (dat$last_exam[i] == 1){
            dat$days_last[i] <- 0
          } else {
            dat$days_last[i] <- dat[i, paste0("date", dat$last_exam[i])]
          }
        }
      
        dat$vte_case_status <- NA
        dat$age <- NA
      
        # determine case: event and event time (EDATE1) >= visit6 time (date6)
        aa <- dat$EVENT1 %in% c(1, 2, 3)
        a <- aa & !is.na(dat$date6) & dat$EDATE1 >= dat$date6
        dat$vte_case_status[a] <- 1
      
        # event but did not attend visit 6:
        #   check if EDATE1 >= date7 (if attended visit 7)
        #   check if EDATE1 > max(date6) for subjects attending visit6
        b1 <- aa & is.na(dat$date6) & !is.na(dat$date7) & dat$EDATE1 >= dat$date7
        b2 <- aa & is.na(dat$date6) & dat$EDATE1 > max6
        b <- b1 | b2
        dat$vte_case_status[b] <- 1
      
        # determine control: no event and last exam > exam6
        ct <- is.na(dat$EVENT1) & dat$last_exam > 6
        dat$vte_case_status[ct] <- 0
      
        # age for cases = age at event = age1 + EDATE1/365.25
        # age for controls = age1 + days to last exam/365.25
        #  will not keep missing
      
        s1 <- dat$vte_case_status %in% 1
        dat$age[s1] <- dat$age1[s1] + dat$EDATE1[s1] / 365.25
        s2 <- dat$vte_case_status %in% 0
        dat$age[s2] <- dat$age1[s2] + dat$days_last[s2] / 365.25
      
        dat <- dat %>%
               filter(!is.na(vte_case_status) & !is.na(age)) %>%
               mutate(vte_case_status = as.character(vte_case_status)) %>%
               select(topmed_subject_id, vte_case_status, age)
      
        return(dat)
      }
      ```
<a id="vte_case_status_1-fhs_original"></a>
  * ### vte/vte_case_status_1 -- **FHS_Original**:
    * 67 component_study_variables: `phs000007.v29.pht003099.v4.phv00177927.v4`, `phs000007.v29.pht003099.v4.phv00177928.v4`, `phs000007.v29.pht003099.v4.phv00177930.v4`, `phs000007.v29.pht003099.v4.phv00177931.v4`, `phs000007.v29.pht003099.v4.phv00177933.v4`, `phs000007.v29.pht003099.v4.phv00177935.v4`, `phs000007.v29.pht003099.v4.phv00177937.v4`, `phs000007.v29.pht003099.v4.phv00177939.v4`, `phs000007.v29.pht003099.v4.phv00177941.v4`, `phs000007.v29.pht003099.v4.phv00177943.v4`, `phs000007.v29.pht003099.v4.phv00177945.v4`, `phs000007.v29.pht003099.v4.phv00177947.v4`, `phs000007.v29.pht003099.v4.phv00177949.v4`, `phs000007.v29.pht003099.v4.phv00177951.v4`, `phs000007.v29.pht003099.v4.phv00177953.v4`, `phs000007.v29.pht003099.v4.phv00177955.v4`, `phs000007.v29.pht003099.v4.phv00177957.v4`, `phs000007.v29.pht003099.v4.phv00177959.v4`, `phs000007.v29.pht003099.v4.phv00177961.v4`, `phs000007.v29.pht003099.v4.phv00177963.v4`, `phs000007.v29.pht003099.v4.phv00177965.v4`, `phs000007.v29.pht003099.v4.phv00177967.v4`, `phs000007.v29.pht003099.v4.phv00177969.v4`, `phs000007.v29.pht003099.v4.phv00177971.v4`, `phs000007.v29.pht003099.v4.phv00177973.v4`, `phs000007.v29.pht003099.v4.phv00177975.v4`, `phs000007.v29.pht003099.v4.phv00177977.v4`, `phs000007.v29.pht003099.v4.phv00177979.v4`, `phs000007.v29.pht003099.v4.phv00177981.v4`, `phs000007.v29.pht003099.v4.phv00177983.v4`, `phs000007.v29.pht003099.v4.phv00177985.v4`, `phs000007.v29.pht003099.v4.phv00177986.v4`, `phs000007.v29.pht003099.v4.phv00177987.v4`, `phs000007.v29.pht003099.v4.phv00177988.v4`, `phs000007.v29.pht003099.v4.phv00177989.v4`, `phs000007.v29.pht003099.v4.phv00177990.v4`, `phs000007.v29.pht003099.v4.phv00177991.v4`, `phs000007.v29.pht003099.v4.phv00177992.v4`, `phs000007.v29.pht003099.v4.phv00177993.v4`, `phs000007.v29.pht003099.v4.phv00177994.v4`, `phs000007.v29.pht003099.v4.phv00177995.v4`, `phs000007.v29.pht003099.v4.phv00177996.v4`, `phs000007.v29.pht003099.v4.phv00177997.v4`, `phs000007.v29.pht003099.v4.phv00177998.v4`, `phs000007.v29.pht003099.v4.phv00177999.v4`, `phs000007.v29.pht003099.v4.phv00178000.v4`, `phs000007.v29.pht003099.v4.phv00178001.v4`, `phs000007.v29.pht003099.v4.phv00178002.v4`, `phs000007.v29.pht003099.v4.phv00178003.v4`, `phs000007.v29.pht003099.v4.phv00178004.v4`, `phs000007.v29.pht003099.v4.phv00178005.v4`, `phs000007.v29.pht003099.v4.phv00178006.v4`, `phs000007.v29.pht003099.v4.phv00178007.v4`, `phs000007.v29.pht003099.v4.phv00178008.v4`, `phs000007.v29.pht003099.v4.phv00178009.v4`, `phs000007.v29.pht003099.v4.phv00178010.v4`, `phs000007.v29.pht003099.v4.phv00178011.v4`, `phs000007.v29.pht003099.v4.phv00226997.v1`, `phs000007.v29.pht003099.v4.phv00226998.v1`, `phs000007.v29.pht003099.v4.phv00227000.v1`, `phs000007.v29.pht003099.v4.phv00227001.v1`, `phs000007.v29.pht003099.v4.phv00227003.v1`, `phs000007.v29.pht003099.v4.phv00227004.v1`, `phs000007.v29.pht003099.v4.phv00227006.v1`, `phs000007.v29.pht003099.v4.phv00227007.v1`, `phs000007.v29.pht006025.v1.phv00276977.v1`, `phs000007.v29.pht006025.v1.phv00277005.v1`
    * 1 component_harmonized_variables: `vte_prior_history_1`
    * Function:
      ```r
      harmonize <- function(phen_list) {
        library(dplyr)
      
        # previous history for FHS Original
        # follow-up started at visit24
      
        # get dataset with sub-cohort indicator and visit information
        # select the given subcohorts: Original = 0
        # get dataset with VTE event information
        # join
      
        dat1 <- phen_list$source_data$pht003099 %>%
               filter(idtype %in% 0)
        dat2 <- phen_list$source_data$pht006025
        dat  <- left_join(dat1, dat2)
      
        # get dataset with harmonized vte_prior_history
        dat3 <- phen_list$harmonized_data$vte_prior_history_1
        dat <- left_join(dat, dat3)
      
        # to determine status if did not attend visit 24:
        # find max days for those who did attend visit24 before any exclusions
        max24 <- max(as.numeric(dat$date24), na.rm = TRUE)
      
        # remove subjects with prior history
        dat <- dat %>% filter(!(vte_prior_history_1 %in% 1))
      
        # change age and day variables to numeric
        # Original spans visits 1 - 32
        dat$age1 <- as.numeric(dat$age1)
        dat$EDATE1 <- as.numeric(dat$EDATE1)
        for (i in 2:32){
          v <- paste0("date", i)
          dat[, v] <- as.numeric(dat[, v])
          v2 <- paste0("att", i)
          dat[, v2] <- as.numeric(dat[, v2])
        }
        dat$att1 <- as.numeric(dat$att1)
      
        # determine last exam attended (will need for controls)
        tmp <- as.matrix(dat[, paste0("att", 1:32)])
        w <- apply(tmp, 1, function(x) max(which(x %in% 1)))
        dat$last_exam <- w
      
        # define variable = days from visit1 to last exam
        for (i in 1:nrow(dat)){
          if (dat$last_exam[i] == 1){
            dat$days_last[i] <- 0
          } else {
            dat$days_last[i] <- dat[i, paste0("date", dat$last_exam[i])]
          }
        }
      
        dat$vte_case_status <- NA
        dat$age <- NA
      
        # determine case: event and event time (EDATE1) >= visit24 time (date24)
        aa <- dat$EVENT1 %in% c(1, 2, 3)
        a <- aa & !is.na(dat$date24) & dat$EDATE1 >= dat$date24
        dat$vte_case_status[a] <- 1
      
        # event but did not attend visit 24:
        #   check if EDATE1 >= date25 (if attended visit 25)
        #   check if EDATE1 > max(date24) for subjects attending visit24
        b1 <- aa & is.na(dat$date24) & !is.na(dat$date25) & dat$EDATE1 >= dat$date25
        b2 <- aa & is.na(dat$date24) & dat$EDATE1 > max24
        b <- b1 | b2
        dat$vte_case_status[b] <- 1
      
        # determine control: no event and last exam > exam24
        ct <- is.na(dat$EVENT1) & dat$last_exam > 24
        dat$vte_case_status[ct] <- 0
      
        # age for cases = age at event = age1 + EDATE1/365.25
        # age for controls = age1 + days to last exam/365.25
        #  will not keep missing
      
        s1 <- dat$vte_case_status %in% 1
        dat$age[s1] <- dat$age1[s1] + dat$EDATE1[s1] / 365.25
        s2 <- dat$vte_case_status %in% 0
        dat$age[s2] <- dat$age1[s2] + dat$days_last[s2] / 365.25
      
        dat <- dat %>%
               filter(!is.na(vte_case_status) & !is.na(age)) %>%
               mutate(vte_case_status = as.character(vte_case_status)) %>%
               select(topmed_subject_id, vte_case_status, age)
      
        return(dat)
      }
      ```
<a id="vte_case_status_1-hvh"></a>
  * ### vte/vte_case_status_1 -- **HVH**:
    * 4 component_study_variables: `phs001013.v3.pht005311.v2.phv00259376.v2`, `phs001013.v3.pht005311.v2.phv00259377.v2`, `phs001013.v3.pht005311.v2.phv00259378.v2`, `phs001013.v3.pht005311.v2.phv00259384.v2`
    * Function:
      ```r
      harmonize <- function(phen_list) {
        library(dplyr)
      
        # VTE case status for HVH
        # get phenotype dataset
        datt <- phen_list$source_data$pht005311
      
        # choose VTE cases - manual says all are incident
        dat1 <- datt %>% filter(ccs %in% 3)
      
        # take out subjects identified as cases then choose controls from remaining
        # necessary since controls at one time could have event to become case
        dat2 <- anti_join(datt, dat1, by = "topmed_subject_id")
      
          # choose controls from remaining
        dat2 <- dat2 %>% filter(ccs %in% 0)
      
        # some controls have duplicate entries
        # arrange by index year in descending order and choose later year
        dat3 <- dat2 %>% arrange(desc(indexy)) %>% group_by(topmed_subject_id) %>%
                     slice(1)
      
        # further restrict controls to those with index year after the start of recruitment 2002
        #  and remove controls with prior vt indication
        dat3 <- dat3 %>% filter(as.numeric(indexy) >= 2002 & !(priorvt %in% 1))
      
        dat <- rbind(dat1, as.data.frame(dat3))
      
        # create case status indicator
        # age: age in years at date of VT diagnosis (cases) or at selection (controls)
        # keep only non-missing information
      
         dat <- dat %>% mutate(vte_case_status = ifelse(ccs %in% 3, 1, 0)) %>%
                filter(!is.na(vte_case_status) & !is.na(age)) %>%
                mutate(vte_case_status = as.character(vte_case_status)) %>%
                select(topmed_subject_id, vte_case_status, age)
      
        return(dat)
      }
      ```
<a id="vte_case_status_1-mayo_geneva"></a>
  * ### vte/vte_case_status_1 -- **Mayo_GENEVA**:
    * 3 component_study_variables: `phs000289.v2.pht001886.v2.phv00121844.v1`, `phs000289.v2.pht001886.v2.phv00121846.v1`, `phs000289.v2.pht001886.v2.phv00121861.v2`
    * Function:
      ```r
      harmonize <- function(phen_list) {
        library(dplyr)
      
        # VTE case status for Mayo GENEVA study
        # get phenotype dataset
        dat <- phen_list$source_data$pht001886
      
        # case control variable VTE selects
        # create case status indicator; 0 = control, 1 = case
      
        dat <- dat %>% filter(!is.na(phenotype) & phenotype != -9) %>%
                mutate(vte_case_status = ifelse(phenotype == 2, 1, 0))
      
        # age: age at clot for cases, age at enrollment for controls
        # keep only non-missing information
      
         dat <- dat %>% mutate(age = ifelse(vte_case_status %in% 1, age_clot, NA)) %>%
                mutate(age = ifelse(vte_case_status %in% 0, enrollage, age)) %>%
                filter(!is.na(vte_case_status) & !is.na(age)) %>%
                mutate(vte_case_status = as.character(vte_case_status)) %>%
                select(topmed_subject_id, vte_case_status, age)
      
        return(dat)
      }
      ```
<a id="vte_case_status_1-mayo_oc"></a>
  * ### vte/vte_case_status_1 -- **Mayo_OC**:
    * 3 component_study_variables: `phs001402.v1.pht008239.v1.phv00389900.v1`, `phs001402.v1.pht008239.v1.phv00389902.v1`, `phs001402.v1.pht008239.v1.phv00389917.v1`
    * Function:
      ```r
      harmonize <- function(phen_list) {
        library(dplyr)
      
        # VTE case status for Mayo OC study
        # get phenotype dataset
        dat <- phen_list$source_data$pht008239
      
        # case control variable VTE selects
        # create case status indicator; 0 = control, 1 = case
      
        dat <- dat %>% filter(!is.na(phenotype) & phenotype != -9) %>%
                mutate(vte_case_status = ifelse(phenotype == 2, 1, 0))
      
        # age: age at clot for cases, age at enrollment for controls
        # keep only non-missing information
      
         dat <- dat %>% mutate(age = ifelse(vte_case_status %in% 1, age_clot, NA)) %>%
                mutate(age = ifelse(vte_case_status %in% 0, enrollage, age)) %>%
                filter(!is.na(vte_case_status) & !is.na(age)) %>%
                mutate(vte_case_status = as.character(vte_case_status)) %>%
                select(topmed_subject_id, vte_case_status, age)
      
        # change age value ">89" to 90
         dat$age[dat$age %in% ">89"] <- 90
      
        return(dat)
      }
      ```
<a id="vte_case_status_1-whi_hrt"></a>
  * ### vte/vte_case_status_1 -- **WHI_HRT**:
    * 8 component_study_variables: `phs000200.v11.pht000998.v6.phv00078436.v6`, `phs000200.v11.pht000998.v6.phv00078437.v6`, `phs000200.v11.pht001031.v6.phv00080426.v6`, `phs000200.v11.pht003407.v3.phv00193178.v3`, `phs000200.v11.pht003407.v3.phv00193179.v3`, `phs000200.v11.pht003407.v3.phv00193193.v3`, `phs000200.v11.pht003407.v3.phv00193194.v3`, `phs000200.v11.pht003407.v3.phv00193505.v3`
    * 1 component_harmonized_variables: `vte_prior_history_1`
    * Function:
      ```r
      harmonize <- function(phen_list) {
        library(dplyr)
      
        # VTE case status
        # follow-up started at baseline
        # age = age at enrollment + (days from enrollment to event or censoring)/365.25
      
        # get dataset with screening information
        dat1 <- phen_list$source_data$pht000998
      
        # get dataset with membership flags and select HRT participants
        # combine datasets
        dat2 <- phen_list$source_data$pht001031 %>% filter(HRTFLAG %in% 1)
        datt <- left_join(dat2, dat1)
      
        # get previous history data set
        # filter out subjects with known or self-reported previous VTE history
        dath <- phen_list$harmonized_data$vte_prior_history_1
        datt <- left_join(datt, dath)
        dat <- datt %>% filter(!(vte_prior_history_1 %in% 1))
      
        # get dataset with outcomes and combine with previous
        outc <- phen_list$source_data$pht003407
        dat <- left_join(dat, outc)
      
        # AGE is measured at screening on form F2
        # abs(F2DAYS) is days between screening and enrollment
        # do not use F2DAYS when F2DAYS > 0
        # correct for erroneous F2DAYS being positive
        dat$F2DAYS <- as.numeric(dat$F2DAYS)
        dat$F2DAYS[dat$F2DAYS > 0] <- 0
      
        # case/control status: case = either DVT or PE or both
        # controls: not known to have VTE event
        dat <- dat %>% mutate(vte_case_status = ifelse( (DVT %in% 1 | PE %in% 1), 1, 0))
      
        # change age and days variables to numeric
        dat$AGE <- as.numeric(dat$AGE)
        dat$DVTDY <- as.numeric(dat$DVTDY)
        dat$PEDY <- as.numeric(dat$PEDY)
        dat$ENDFOLLOWDY <- as.numeric(dat$ENDFOLLOWDY)
      
        dat$age <- NA
        # age for CASES
        # age at event: age at enrollment + (days to event)/365.25
        # age at enrollment is age at screening + |F2DAYS|
        # if both types of events happen, choose the days to earliest event
      
        sel <- dat$vte_case_status %in% 1
        dat$age[sel] <- dat$AGE[sel] +
           (abs(dat$F2DAYS[sel]) + pmin(dat$PEDY[sel], dat$DVTDY[sel], na.rm = TRUE)) / 365.25
      
        # age for CONTROLS = age at enrollment + (days to end of followup)/365.25
        dat$age[!sel] <- dat$AGE[!sel] + (abs(dat$F2DAYS[!sel]) + dat$ENDFOLLOWDY[!sel]) / 365.25
      
        # final selection
        dat <- dat %>% filter(!is.na(vte_case_status) & !is.na(age)) %>%
               mutate(vte_case_status = as.character(vte_case_status)) %>%
               select(topmed_subject_id, vte_case_status, age)
        return(dat)
      }
      ```
<a id="vte_case_status_1-whi_mrcnonhrt"></a>
  * ### vte/vte_case_status_1 -- **WHI_MRCnonHRT**:
    * 10 component_study_variables: `phs000200.v11.pht000998.v6.phv00078436.v6`, `phs000200.v11.pht000998.v6.phv00078437.v6`, `phs000200.v11.pht001031.v6.phv00080426.v6`, `phs000200.v11.pht003395.v3.phv00192301.v3`, `phs000200.v11.pht003395.v3.phv00192302.v3`, `phs000200.v11.pht003407.v3.phv00193178.v3`, `phs000200.v11.pht003407.v3.phv00193179.v3`, `phs000200.v11.pht003407.v3.phv00193193.v3`, `phs000200.v11.pht003407.v3.phv00193194.v3`, `phs000200.v11.pht003407.v3.phv00193505.v3`
    * 1 component_harmonized_variables: `vte_prior_history_1`
    * Function:
      ```r
      harmonize <- function(phen_list) {
        library(dplyr)
      
        # previous history for WHI MRC non-HRT participants
        # follow-up started at beginning of Extension 2
      
        # get dataset with screening information
        dat1 <- phen_list$source_data$pht000998
      
        # get datasets with membership flags and combine
        dat2 <- phen_list$source_data$pht001031
        dat3 <- phen_list$source_data$pht003395
        datt <- full_join(dat3, dat2)
      
        # select subjects in MRC but not in HRT
        datt <- datt %>% filter(EXT2MRC %in% 1 & HRTFLAG %in% 0)
      
        # combine with screening info
        datt <- left_join(datt, dat1)
      
        # get previous history data set
        # filter out subjects with known or self-reported previous VTE history
        dath <- phen_list$harmonized_data$vte_prior_history_1
        datt <- left_join(datt, dath)
        dat <- datt %>% filter(!(vte_prior_history_1 %in% 1))
      
        # get dataset with outcomes and combine with previous
        outc <- phen_list$source_data$pht003407
        dat <- left_join(dat, outc)
      
        # AGE is measured at screening on form F2
        # abs(F2DAYS) is days between screening and enrollment
        # do not use F2DAYS when F2DAYS > 0
        # correct for erroneous F2DAYS being positive
        dat$F2DAYS <- as.numeric(dat$F2DAYS)
        dat$F2DAYS[dat$F2DAYS > 0] <- 0
      
        # case/control status: case = either DVT or PE or both
        # controls: not known to have VTE event
        dat <- dat %>% mutate(vte_case_status = ifelse( (DVT %in% 1 | PE %in% 1), 1, 0))
      
        # change age and days variables to numeric
        dat$AGE <- as.numeric(dat$AGE)
        dat$DVTDY <- as.numeric(dat$DVTDY)
        dat$PEDY <- as.numeric(dat$PEDY)
        dat$ENDFOLLOWDY <- as.numeric(dat$ENDFOLLOWDY)
        dat$EXT2DAYS <- as.numeric(dat$EXT2DAYS)
      
        # age for CASES
        # age at event: age at enrollment + (days to event)/365.25
        # age at enrollment is age at screening + |F2DAYS|
        # if both types of events happen, choose the days to earliest event
      
        dat$age <- NA
        sel <- dat$vte_case_status %in% 1
        dat$age[sel] <- dat$AGE[sel] +
           (abs(dat$F2DAYS[sel]) + pmin(dat$PEDY[sel], dat$DVTDY[sel], na.rm = TRUE)) / 365.25
      
        # age for CONTROLS = age at enrollment + (days to end of followup)/365.25
        # don't include subjects whose last followup is before EXT2
        sel2 <- !is.na(dat$ENDFOLLOWDY) & !is.na(dat$EXT2DAYS) & dat$ENDFOLLOWDY > dat$EXT2DAYS
        sel3 <- !sel & sel2
        dat$age[sel3] <- dat$AGE[sel3] + (abs(dat$F2DAYS[sel3]) + dat$ENDFOLLOWDY[sel3]) / 365.25
      
        # final selection
        dat <- dat %>% filter(!is.na(vte_case_status) & !is.na(age)) %>%
               mutate(vte_case_status = as.character(vte_case_status)) %>%
               select(topmed_subject_id, vte_case_status, age)
        return(dat)
      }
      ```
<a id="vte_followup_start_age_1"></a>
## vte: **vte_followup_start_age_1** (vte_followup_start_age)
  Age of subject at the start of the follow up period during which venous thromboembolism (VTE) events were reviewed and adjudicated.
  * **Harmonization Units**:
    * [ARIC](#vte_followup_start_age_1-aric)
    * [CHS](#vte_followup_start_age_1-chs)
    * [FHS_G3NOSOm12](#vte_followup_start_age_1-fhs_g3nosom12)
    * [FHS_Offspring](#vte_followup_start_age_1-fhs_offspring)
    * [FHS_Original](#vte_followup_start_age_1-fhs_original)
    * [WHI_HRT](#vte_followup_start_age_1-whi_hrt)
    * [WHI_MRCnonHRT](#vte_followup_start_age_1-whi_mrcnonhrt)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: years, **`Version`**: 1, **`Has Age Variable`**: No, **`Date Harmonized`**: 2018-10-29 15:19:09
  * **DCC Harmonization Comments**:

    This phenotype is harmonized for the large cohort studies to facilitate the creation of age strata to be used in matching cases and controls within a study.
    
    For studies/sub-cohorts where the adjudication started at the beginning of the study, the age at enrollment into the study was used. For studies/sub-cohorts where the adjudication started at a later time point, harmonization was specific to the study. In general, the ages were computed as: 
    ```
          age at reference time + (days between reference time and adjudication start) / 365.25
    ```
    For more details on adjudication processes, see the analyst comments for the harmonized case status variable.
    
    ### Study-specific comments
    
    #### WHI
    
    VTE events were adjudicated from the start of the study for subjects in the HRT (hormone replacement therapy) trial. The harmonized variable for HRT subjects was set to the age at enrollment, which was computed from age at screening and days between screening and enrollment.
    
    VTE events for subjects from the MRC (medical records cohort; not in the HRT trial) were adjudicated starting with the beginning of Extension 2.  For these MRC subjects, the harmonized variable was set to the age at the beginning of Extension 2, computed from age at enrollment and the days between enrollment and the start of Extension 2.
    
    #### FHS
    ##### Original and Offspring sub-cohorts
     
    VTE event adjudication started January 1, 1995. For the Original sub-cohort, the exam closest to the start was Exam 24. For the Offspring sub-cohort, the exam closest to the start was Exam 6. If a subject attended the pre-specified exam, the age at the start of adjudication was computed using the age at Exam 1 and the number of days between Exam 1 and the pre-specified exam. If a subject did not attend the pre-specified exam but did attend either the exam immediately preceding or immediately following the pre-specified exam, the number of days to the pre-specified exam was approximated using the average number of days between exams over all subjects who did attend the pre-specified exam. If a subject did not attend either the pre-specified exam or the immediately preceding or following exam, no age was assigned.
    
    (Note that for the Generation 3, New Offspring Spouse, Omni1 and Omni2 cohorts, adjudication started at Exam 1 so the harmonized variable was set to the age at Exam 1.)
    
<a id="vte_followup_start_age_1-aric"></a>
  * ### vte/vte_followup_start_age_1 -- **ARIC**:
    * 2 component_study_variables: `phs000280.v4.pht004063.v2.phv00204712.v1`, `phs000280.v4.pht006485.v1.phv00298125.v1`
    * Function:
      ```r
      harmonize <- function(phen_list) {
        library(dplyr)
      
        # age at start of VTE follow-up for ARIC
        # follow-up started at visit1 so age = age at visit1
      
        # get dataset with age at visit 1 information
        # get dataset including the subjects followed for VTE
        # join to keep subjects followed for VTE
      
        dat1 <- phen_list$source_data$pht004063
        dat2 <- phen_list$source_data$pht006485
        dat <- left_join(dat2, dat1)
      
        # assign age as age at visit 1
        # keep only non-missing information
      
         dat <- dat %>% mutate(vte_followup_start_age = as.numeric(V1AGE01)) %>%
               filter(!is.na(vte_followup_start_age)) %>%
               select(topmed_subject_id, vte_followup_start_age)
      
        return(dat)
      }
      ```
<a id="vte_followup_start_age_1-chs"></a>
  * ### vte/vte_followup_start_age_1 -- **CHS**:
    * 1 component_study_variables: `phs000287.v6.pht001452.v1.phv00100487.v1`
    * Function:
      ```r
      harmonize <- function(phen_list) {
        library(dplyr)
      
        # age at start of VTE follow-up for CHS
        # follow-up started at baseline so age = age at CHS baseline
      
        # get dataset with age at CHS baseline information
      
        dat <- phen_list$source_data$pht001452
      
        # assign age as age at CHS baseline
        # keep only non-missing information
      
         dat <- dat %>% mutate(vte_followup_start_age = as.numeric(AGEBL)) %>%
               filter(!is.na(vte_followup_start_age)) %>%
               select(topmed_subject_id, vte_followup_start_age)
      
        return(dat)
      }
      ```
<a id="vte_followup_start_age_1-fhs_g3nosom12"></a>
  * ### vte/vte_followup_start_age_1 -- **FHS_G3NOSOm12**:
    * 2 component_study_variables: `phs000007.v29.pht003099.v4.phv00177928.v4`, `phs000007.v29.pht003099.v4.phv00177930.v4`
    * Function:
      ```r
      harmonize <- function(phen_list) {
        library(dplyr)
      
        # age at start of VTE follow-up for FHS NOS, Gen3, Omni1, and Omni2
        # follow-up started at visit1 so age = age at visit1
      
        # get dataset with sub-cohort indicator and visit information
        # select the given subcohorts: NOS = 2, Gen3 = 3, Omni1 = 7, Omni2 = 72
        # assign age as age at visit 1
        # keep only non-missing information
      
        dat <- phen_list$source_data$pht003099 %>%
               filter(idtype %in% c(2, 3, 7, 72)) %>%
               mutate(vte_followup_start_age = as.numeric(age1)) %>%
               filter(!is.na(vte_followup_start_age)) %>%
               select(topmed_subject_id, vte_followup_start_age)
      
        return(dat)
      }
      ```
<a id="vte_followup_start_age_1-fhs_offspring"></a>
  * ### vte/vte_followup_start_age_1 -- **FHS_Offspring**:
    * 8 component_study_variables: `phs000007.v29.pht003099.v4.phv00177928.v4`, `phs000007.v29.pht003099.v4.phv00177930.v4`, `phs000007.v29.pht003099.v4.phv00177937.v4`, `phs000007.v29.pht003099.v4.phv00177939.v4`, `phs000007.v29.pht003099.v4.phv00177941.v4`, `phs000007.v29.pht003099.v4.phv00177988.v4`, `phs000007.v29.pht003099.v4.phv00177989.v4`, `phs000007.v29.pht003099.v4.phv00177990.v4`
    * Function:
      ```r
      harmonize <- function(phen_list) {
        library(dplyr)
      
        # age at start of VTE follow-up for FHS Offspring
        # follow-up started at visit6 so age = age at visit6
        # unless subject did not attend visit6 - will then need to approximate
        # will use visit5 and/or visit7 in approximation
      
        # get dataset with sub-cohort indicator and visit information
        # select the given subcohorts: idtype for Offspring = 1
      
        dat <- phen_list$source_data$pht003099 %>%
               filter(idtype %in% 1)
      
        # change age and days to numeric
        dat$age1 <- as.numeric(dat$age1)
        dat$date6 <- as.numeric(dat$date6)
        dat$date5 <- as.numeric(dat$date5)
        dat$date7 <- as.numeric(dat$date7)
      
        # approximate date6 for subjects that did not attend visit6
        # find average number of days between visit5 and visit6
        #   for subjects attending both visit5 and visit6
        # find average number of days between visit7 and visit6
        #   for subjects attending both visit7 and visit6
      
        days56 <- mean(dat$date6 - dat$date5, na.rm = TRUE)
        days67 <- mean(dat$date7 - dat$date6, na.rm = TRUE)
      
        a <- dat$att6 %in% 0
        b1 <- dat$att5 %in% 1
        b2 <- dat$att7 %in% 1
      
        # approximate date6 for subjects not attending visit6
        # use days56 if attended visit 5 but not 7
        s1 <- a & b1 & !b2
        dat$date6[s1] <- dat$date5[s1] + days56
      
        # use days67 if attended visit 7 but not 5
        s2 <- a & !b1 & b2
        dat$date6[s2] <- dat$date7[s2] - days67
      
        # use average if attended both 5 and 7
        s3 <- a & b1 & b2
        tmp <- rbind(dat$date5[s3] + days56, dat$date7[s3] - days67)
        dat$date6[s3] <- colMeans(tmp)
      
        # assign age at vte followup start as age at visit6 (some approximate)
        # if did not attend visit 5 or 6 or 7, will be missing and then deleted
        dat <- dat %>%
               mutate(vte_followup_start_age = age1 + date6 / 365.25) %>%
               filter(!is.na(vte_followup_start_age)) %>%
               select(topmed_subject_id, vte_followup_start_age)
      
        return(dat)
      }
      ```
<a id="vte_followup_start_age_1-fhs_original"></a>
  * ### vte/vte_followup_start_age_1 -- **FHS_Original**:
    * 8 component_study_variables: `phs000007.v29.pht003099.v4.phv00177928.v4`, `phs000007.v29.pht003099.v4.phv00177930.v4`, `phs000007.v29.pht003099.v4.phv00177973.v4`, `phs000007.v29.pht003099.v4.phv00177975.v4`, `phs000007.v29.pht003099.v4.phv00177977.v4`, `phs000007.v29.pht003099.v4.phv00178006.v4`, `phs000007.v29.pht003099.v4.phv00178007.v4`, `phs000007.v29.pht003099.v4.phv00178008.v4`
    * Function:
      ```r
      harmonize <- function(phen_list) {
        library(dplyr)
      
        # age at start of VTE follow-up for FHS Original
        # follow-up started at visit24 so age = age at visit24
        # unless subject did not attend visit24 - will then need to approximate
        # will use visit23 and/or visit25 in approximation
      
        # get dataset with sub-cohort indicator and visit information
        # select the given subcohorts: idtype for Original = 0
      
        dat <- phen_list$source_data$pht003099 %>%
               filter(idtype %in% 0)
      
        # change age and days to numeric
        dat$age1 <- as.numeric(dat$age1)
        dat$date24 <- as.numeric(dat$date24)
        dat$date23 <- as.numeric(dat$date23)
        dat$date25 <- as.numeric(dat$date25)
      
        # approximate date24 for subjects that did not attend visit24
        # find average number of days between visit23 and visit24
        #   for subjects attending both visit23 and visit24
        # find average number of days between visit25 and visit24
        #   for subjects attending both visit25 and visit24
      
        days2324 <- mean(dat$date24 - dat$date23, na.rm = TRUE)
        days2425 <- mean(dat$date25 - dat$date24, na.rm = TRUE)
      
        a <- dat$att24 %in% 0
        b1 <- dat$att23 %in% 1
        b2 <- dat$att25 %in% 1
      
        # approximate date24 for subjects not attending visit24
        # use days2324 if attended visit 23 but not 25
        s1 <- a & b1 & !b2
        dat$date24[s1] <- dat$date23[s1] + days2324
      
        # use days2425 if attended visit 25 but not 23
        s2 <- a & !b1 & b2
        dat$date24[s2] <- dat$date25[s2] - days2425
      
        # use average if attended both 23 and 25
        s3 <- a & b1 & b2
        tmp <- rbind(dat$date23[s3] + days2324, dat$date25[s3] - days2425)
        dat$date24[s3] <- colMeans(tmp)
      
        # assign age at vte followup start as age at visit24 (some approximate)
        # if did not attend visit23 or 24 or 25, will be missing and then deleted
        dat <- dat %>%
               mutate(vte_followup_start_age = age1 + date24 / 365.25) %>%
               filter(!is.na(vte_followup_start_age)) %>%
               select(topmed_subject_id, vte_followup_start_age)
      
        return(dat)
      }
      ```
<a id="vte_followup_start_age_1-whi_hrt"></a>
  * ### vte/vte_followup_start_age_1 -- **WHI_HRT**:
    * 3 component_study_variables: `phs000200.v11.pht000998.v6.phv00078436.v6`, `phs000200.v11.pht000998.v6.phv00078437.v6`, `phs000200.v11.pht001031.v6.phv00080426.v6`
    * Function:
      ```r
      harmonize <- function(phen_list) {
        library(dplyr)
      
        # age at start of VTE follow-up for WHI HRT participants
        # follow-up started at baseline so age = age at enrollment
      
        # get dataset with screening information
        # get dataset with membership flags and select HRT participants
        # combine datasets
      
        dat1 <- phen_list$source_data$pht000998
        dat2 <- phen_list$source_data$pht001031 %>% filter(HRTFLAG %in% 1)
        dat <- left_join(dat2, dat1)
      
        # create desired age variable = age at enrollment
        # AGE is measured at screening on form F2
        # abs(F2DAYS) is days between screening and enrollment
        # do not use F2DAYS when F2DAYS > 0
      
        dat$F2DAYS <- as.numeric(dat$F2DAYS)
        dat$AGE <- as.numeric(dat$AGE)
      
        dat <- dat %>%
               mutate(F2DAYS = ifelse(F2DAYS > 0, 0, F2DAYS)) %>%
               mutate(vte_followup_start_age = AGE + abs(F2DAYS) / 365.25) %>%
               filter(!is.na(vte_followup_start_age)) %>%
               select(topmed_subject_id, vte_followup_start_age)
      
        return(dat)
      }
      ```
<a id="vte_followup_start_age_1-whi_mrcnonhrt"></a>
  * ### vte/vte_followup_start_age_1 -- **WHI_MRCnonHRT**:
    * 5 component_study_variables: `phs000200.v11.pht000998.v6.phv00078436.v6`, `phs000200.v11.pht000998.v6.phv00078437.v6`, `phs000200.v11.pht001031.v6.phv00080426.v6`, `phs000200.v11.pht003395.v3.phv00192301.v3`, `phs000200.v11.pht003395.v3.phv00192302.v3`
    * Function:
      ```r
      harmonize <- function(phen_list) {
        library(dplyr)
        # age at start of VTE follow-up for WHI MRC non-HRT participants
        # follow-up started at beginning of Extension 2
        # so age = age at enrollment + (days to Ext2)/365.25
      
        # get dataset with screening information to compute age at enrollment
        dat1 <- phen_list$source_data$pht000998
      
        # get datasets with membership flags and combine
        dat2 <- phen_list$source_data$pht001031  # HRTFLAG
        dat3 <- phen_list$source_data$pht003395  # EXT2MRC, EXT2DAYS
        datt <- full_join(dat3, dat2)
      
        # select subjects in MRC but not in HRT
        datt <- datt %>% filter(EXT2MRC %in% 1 & HRTFLAG %in% 0)
      
        # combine with screening info
        dat <- left_join(datt, dat1)
      
        # create desired age variable = age at enrollment + (days to Ext2)/365.25
        # AGE is measured at screening on form F2
        # abs(F2DAYS) is days between screening and enrollment
        # do not use F2DAYS when F2DAYS > 0
        # age at enrollment = AGE + abs(F2DAYS)/365.25
      
        # change to numeric variables
        dat$F2DAYS <- as.numeric(dat$F2DAYS)
        dat$AGE <- as.numeric(dat$AGE)
        dat$EXT2DAYS <- as.numeric(dat$EXT2DAYS)
      
        dat <- dat %>%
               mutate(F2DAYS = ifelse(F2DAYS > 0, 0, F2DAYS)) %>%
               mutate(vte_followup_start_age = AGE + (abs(F2DAYS) + EXT2DAYS) / 365.25) %>%
               filter(!is.na(vte_followup_start_age)) %>%
               select(topmed_subject_id, vte_followup_start_age)
      
        return(dat)
      }
      ```
<a id="vte_prior_history_1"></a>
## vte: **vte_prior_history_1** (vte_prior_history)
  An indicator of whether a subject had a venous thromboembolism (VTE) event prior to the start of the medical review process (including self-reported events).
  * **Harmonization Units**:
    * [ARIC](#vte_prior_history_1-aric)
    * [CHS](#vte_prior_history_1-chs)
    * [FHS_G3NOSOm12](#vte_prior_history_1-fhs_g3nosom12)
    * [FHS_Offspring](#vte_prior_history_1-fhs_offspring)
    * [FHS_Original](#vte_prior_history_1-fhs_original)
    * [HVH](#vte_prior_history_1-hvh)
    * [WHI_HRT](#vte_prior_history_1-whi_hrt)
    * [WHI_MRCnonHRT](#vte_prior_history_1-whi_mrcnonhrt)
  * **Metadata**:
    **`Data Type`**: encoded, **`Measurement Units`**: None, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2018-11-01 07:54:04
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C4540929
  * **DCC Harmonization Comments**:

    Venous thromboembolism (VTE) events include deep vein thrombosis (DVT) or pulmonary embolism (PE). If data included variable(s) distinguishing the type, information about the first event of either type was used. 
    
    The main task in creating this variable was to determine whether or not a VTE event occurred before the start of adjudication or the medical review process. For some studies, this information was obtained through self-report (questionnaire). For these studies, the corresponding age variable was chosen as the age at which the questionnaire was administered. The harmonized variable and corresponding age were set to missing if a subject did not answer the relevant questions.
    
    For some studies where adjudication/medical review occurred at enrollment into the study, the dataset contained a variable indicating prior event or not. The corresponding age variable was recorded as the age at enrollment.
    
    For other studies, time to event information was provided in the form of days from some reference point (usually visit 1 or enrollment in the study) to the event. For these studies, if an event was recorded, the number of days from the reference point to the event was compared with the number of days from the reference point to the the start of adjudication or review. If the event was determined to have happened before the start of adjudication or review, the subject  was classified as having a prior event and the corresponding age variable was assigned the age at event, calculated using the age at the reference point plus the time to the event. If the event was determined to have happened after the start of adjudication or review, the subject was classified as not having a prior event and the corresponding age variable was assigned as the age at the start of adjudication/medical review. If there was no event recorded, the subject was classified as not having a prior event and the corresponding age variable was assigned as the age at the start of adjudication/medical review.
    
    ### Study-specific comments
    
    #### WHI
    ##### HRT (Hormone replacement therapy)
    
    Medical review (adjudication) began at enrollment. Prior history information was self-report, obtained from a questionnaire at screening. 
    
    ##### MRC-nonHRT (Medical Records cohort but not enrolled in HRT)
    
    Medical review (adjudication) began at the start of Extension 2. Prior event history was determined from a combination of self-report at screening and time to event information for recorded events during the study but before the start of adjudication.
    
    #### FHS
    ##### Generation 3, New Offspring Spouse, Omni1 and Omni2
    
    Adjudication started at Exam 1. Time to event data was provided and prior events were determined by days to event being negative.
    
    ##### Original and Offspring 
     
    VTE event adjudication started January 1, 1995. We use the term "pre-specified exam" to refer to the exam for a given subcohort that was closest to the start of adjudication. The pre-specified exam was Exam 24 for the Original subcohort and Exam 6 for the Offspring subcohort.
    
    For these subcohorts, a recorded event could be classified as prior, not prior, or indeterminate. If a subject attended the pre-specified exam, then prior or not prior could be readily established. For some subjects with recorded events who did not attend the pre-specified exam, it could not be determined if the recorded event was before or after the start of adjudication. For a subject who did not attend the pre-specified exam, a combination of the following information was used to classify the event as prior, not prior, or indeterminate: days from Exam 1 to event, days from Exam 1 to the exam immediately preceding the pre-specified exam, days from Exam 1 to the exam immediately following the pre-specified exam, and the minimum and maximum number of days from Exam 1 to the pre-specified exam calculated over all subjects in the subcohort who attended the pre-specified exam. If a subject's recorded event was classified as indeterminate, the harmonized variable and corresponding age were set to missing.
    
    ##### CHS 
    
    Adjudication started at the baseline exam for each of the *_CHS_* subcohorts. *_CHS_* dbGaP data included a variable indicating self-report of prior VTE event. Age at the respective baseline exams was used for the corresponding age variable.
    
    ##### ARIC 
    
    Adjudication started at Visit 1. Study investigators confirmed that subjects included in the VTE sub-study had no history of VTE.
    
    ##### HVH 
    
    This is a case-control study. The dbGaP dataset included variables indicating prior VTE and appropriate age. 
    
    ##### Mayo_VTE 
    
    This is a case-control study. There was no information relevant to prior history so values for this variable and the corresponding age variable were assigned as missing.
    
    
<a id="vte_prior_history_1-aric"></a>
  * ### vte/vte_prior_history_1 -- **ARIC**:
    * 2 component_study_variables: `phs000280.v4.pht004063.v2.phv00204712.v1`, `phs000280.v4.pht006485.v1.phv00298125.v1`
    * Function:
      ```r
      harmonize <- function(phen_list) {
        library(dplyr)
      
        # prior VTE history for ARIC
        # All ARIC cases were incident (i.e. no previous history)
        # follow-up started at visit1 so age = age at visit1
      
        # get dataset with age at visit 1 information
        # get dataset including the subjects followed for VTE
        # join to keep subjects followed for VTE
      
        dat1 <- phen_list$source_data$pht004063
        dat2 <- phen_list$source_data$pht006485
        dat <- left_join(dat2, dat1)
      
        # assign 0 to prior history indicator
        # assign age as age at visit 1
        # keep only non-missing information
      
         dat <- dat %>% mutate(vte_prior_history = "0") %>%
                mutate(age = V1AGE01) %>%
                filter(!is.na(vte_prior_history) & !is.na(age)) %>%
                select(topmed_subject_id, vte_prior_history, age)
      
        return(dat)
      }
      ```
<a id="vte_prior_history_1-chs"></a>
  * ### vte/vte_prior_history_1 -- **CHS**:
    * 2 component_study_variables: `phs000287.v6.pht001452.v1.phv00100487.v1`, `phs000287.v6.pht005981.v1.phv00273567.v1`
    * Function:
      ```r
      harmonize <- function(phen_list) {
        library(dplyr)
      
        # prior VTE history for CHS
        # some self-report of DVT or PE at baseline
      
        # get dataset with age at CHS baseline information
        # get dataset including the subjects followed for VTE
        # join to keep subjects followed for VTE
      
        dat1 <- phen_list$source_data$pht001452
        dat2 <- phen_list$source_data$pht005981
        dat <- left_join(dat2, dat1)
      
        # use self-report indicator: 0 (no), 1 (yes), or missing code
        # follow-up started at CHS baseline so age = age at CHS baseline
        # keep only non-missing information
      
         dat <- dat %>% mutate(vte_prior_history = as.character(vtpehx01)) %>%
                mutate(age = AGEBL) %>%
                filter(is.element(vte_prior_history, c(0, 1)) & !is.na(age)) %>%
                select(topmed_subject_id, vte_prior_history, age)
      
        return(dat)
      }
      ```
<a id="vte_prior_history_1-fhs_g3nosom12"></a>
  * ### vte/vte_prior_history_1 -- **FHS_G3NOSOm12**:
    * 4 component_study_variables: `phs000007.v29.pht003099.v4.phv00177928.v4`, `phs000007.v29.pht003099.v4.phv00177930.v4`, `phs000007.v29.pht006025.v1.phv00276977.v1`, `phs000007.v29.pht006025.v1.phv00277005.v1`
    * Function:
      ```r
      harmonize <- function(phen_list) {
        library(dplyr)
      
        # prior history for FHS NOS, Gen3, Omni1, and Omni2
        # follow-up started at visit1 so
      
        # get dataset with sub-cohort indicator and visit information
        # select the given subcohorts: NOS = 2, Gen3 = 3, Omni1 = 7, Omni2 = 72
        # get dataset with VTE event information
        # join
      
        dat1 <- phen_list$source_data$pht003099 %>%
               filter(idtype %in% c(2, 3, 7, 72))
        dat2 <- phen_list$source_data$pht006025
        dat  <- left_join(dat1, dat2)
      
        # change age and day variables to numeric
        dat$age1 <- as.numeric(dat$age1)
        dat$EDATE1 <- as.numeric(dat$EDATE1)
      
        # prior history indicator = 1 if EDATE1 < 0 (i.e. before visit 1)
        dat <- dat %>%
               mutate(vte_prior_history = ifelse(EVENT1 %in% c(1, 2, 3) & EDATE1 < 0, "1", "0"))
      
        #  age = age at visit 1 if no previous event
        #  otherwise age = age visit 1 + days to visit1/365.25 (days negative)
      
        dat <- dat %>%
               mutate(age = ifelse(vte_prior_history %in% 1, age1 + EDATE1 / 365.25, age1)) %>%
               filter(!is.na(vte_prior_history) & !is.na(age)) %>%
               select(topmed_subject_id, vte_prior_history, age)
      
        return(dat)
      }
      ```
<a id="vte_prior_history_1-fhs_offspring"></a>
  * ### vte/vte_prior_history_1 -- **FHS_Offspring**:
    * 7 component_study_variables: `phs000007.v29.pht003099.v4.phv00177928.v4`, `phs000007.v29.pht003099.v4.phv00177930.v4`, `phs000007.v29.pht003099.v4.phv00177988.v4`, `phs000007.v29.pht003099.v4.phv00177989.v4`, `phs000007.v29.pht003099.v4.phv00177990.v4`, `phs000007.v29.pht006025.v1.phv00276977.v1`, `phs000007.v29.pht006025.v1.phv00277005.v1`
    * 1 component_harmonized_variables: `vte_followup_start_age_1`
    * Function:
      ```r
      harmonize <- function(phen_list) {
        library(dplyr)
      
        # prior history for FHS Offspring
        # follow-up started at visit6
      
        # get dataset with sub-cohort indicator and visit information
        # select the given subcohorts: Offspring = 1
        # get dataset with VTE event information
        # join
      
        dat1 <- phen_list$source_data$pht003099 %>%
               filter(idtype %in% 1)
        dat2 <- phen_list$source_data$pht006025
        dat  <- left_join(dat1, dat2)
      
        # get dataset with harmonized vte_followup_start_age
        dat3 <- phen_list$harmonized_data$vte_followup_start_age_1
        dat <- left_join(dat, dat3)
      
        # change age and day variables to numeric
        dat$age1 <- as.numeric(dat$age1)
        dat$EDATE1 <- as.numeric(dat$EDATE1)
        dat$date6 <- as.numeric(dat$date6)
        dat$date5 <- as.numeric(dat$date5)
        dat$date7 <- as.numeric(dat$date7)
        dat$vte_followup_start_age_1 <- as.numeric(dat$vte_followup_start_age_1)
      
        # prior history indicator = 1 if EDATE1 is before visit6
        # can use date6 if subject attended visit6
      
        # if didn't attend visit6:
        #   will need to decide if event date is after adjudication start
        # find range of date6 for subjects who attended visit6
        r1 <- min(dat$date6, na.rm = TRUE)
        r2 <- max(dat$date6, na.rm = TRUE)
      
        # if event days to visit1 < r1, can claim is prior event
        # if event days to visit1 > r2, can claim event is after adjudication start
        # since ranges of consecutive visits can overlap:
        #   if subject attended visit7 and event days >= date7: after adjuciation start
        #   if subject attended visit 5 and event days <= date5: prior event
        # otherwise there is uncertainty so assign as missing
      
        dat$vte_prior_history <- 0
        aa <- dat$EVENT1 %in% c(1, 2, 3) # event recorded
      
        # if attended visit6
        a <- aa & !is.na(dat$date6) & dat$EDATE1 < dat$date6
        dat$vte_prior_history[a] <- 1
      
        # if did not attend visit6 and event before min days to visit6
        b <- aa & is.na(dat$date6) & dat$EDATE1 < r1
        dat$vte_prior_history[b] <- 1
      
        # if did not attend visit6 but did attend visit5 and event before visit5
        f <- aa & is.na(dat$date6) & !is.na(dat$date5) & dat$date5 >= dat$EDATE1
        dat$vte_prior_history[f] <- 1
      
        # if uncertainty about whether event is after adjucation start, assign NA
        g <- aa & is.na(dat$date6) & !(dat$vte_prior_history %in% 1) &
             dat$EDATE1 >= r1 & dat$EDATE1 <= r2
        dat$vte_prior_history[g] <- NA
      
        # check visit 7 to possibly clarify some of the missing
        h <- aa & is.na(dat$date6) & !is.na(dat$date7) & dat$date7 <= dat$EDATE1
        dat$vte_prior_history[h] <- 0
      
        #  age = age at start of followup/adjudication if no prior event
        #  if event, age = age visit 1 + days event to visit1/365.25
        #  will not keep missing
      
        dat <- dat %>%
               mutate(age = ifelse(vte_prior_history %in% 1, age1 + EDATE1 / 365.25, NA)) %>%
               mutate(age = ifelse(vte_prior_history %in% 0, vte_followup_start_age_1, age)) %>%
               filter(!is.na(vte_prior_history) & !is.na(age)) %>%
               mutate(vte_prior_history = as.character(vte_prior_history)) %>%
               select(topmed_subject_id, vte_prior_history, age)
      
          return(dat)
      }
      ```
<a id="vte_prior_history_1-fhs_original"></a>
  * ### vte/vte_prior_history_1 -- **FHS_Original**:
    * 7 component_study_variables: `phs000007.v29.pht003099.v4.phv00177928.v4`, `phs000007.v29.pht003099.v4.phv00177930.v4`, `phs000007.v29.pht003099.v4.phv00178006.v4`, `phs000007.v29.pht003099.v4.phv00178007.v4`, `phs000007.v29.pht003099.v4.phv00178008.v4`, `phs000007.v29.pht006025.v1.phv00276977.v1`, `phs000007.v29.pht006025.v1.phv00277005.v1`
    * 1 component_harmonized_variables: `vte_followup_start_age_1`
    * Function:
      ```r
      harmonize <- function(phen_list) {
        library(dplyr)
      
        # prior history for FHS Original
        # follow-up started at visit24
      
        # get dataset with sub-cohort indicator and visit information
        # select the given subcohorts: Original = 0
        # get dataset with VTE event information
        # join
      
        dat1 <- phen_list$source_data$pht003099 %>%
               filter(idtype %in% 0)
        dat2 <- phen_list$source_data$pht006025
        dat  <- left_join(dat1, dat2)
      
        # get dataset with harmonized vte_followup_start_age
        dat3 <- phen_list$harmonized_data$vte_followup_start_age_1
        dat <- left_join(dat, dat3)
      
        # change age and day variables to numeric
        dat$age1 <- as.numeric(dat$age1)
        dat$EDATE1 <- as.numeric(dat$EDATE1)
        dat$date24 <- as.numeric(dat$date24)
        dat$date23 <- as.numeric(dat$date23)
        dat$date25 <- as.numeric(dat$date25)
        dat$vte_followup_start_age_1 <- as.numeric(dat$vte_followup_start_age_1)
      
        # prior history indicator = 1 if EDATE1 is after visit24
        # can use date24 if subject attended visit24
      
        # if didn't attend visit24:
        #   will need to decide if event date is after adjudication start
        # find range of date24 for subjects who attended visit24
        r1 <- min(dat$date24, na.rm = TRUE)
        r2 <- max(dat$date24, na.rm = TRUE)
      
        # if event days to visit1 < r1, can claim is prior event
        # if event days to visit1 > r2, can claim event is after adjudication start
        # since ranges of consecutive visits can overlap:
        #   if subject attended visit25 and event days >= date25: after adjuciation start
        #   if subject attended visit 23 and event days <= date23: prior event
        # otherwise there is uncertainty so assign as missing
      
        dat$vte_prior_history <- 0 # start with assuming no prior history
        aa <- dat$EVENT1 %in% c(1, 2, 3) # event recorded
      
        # if attended visit24
        a <- aa & !is.na(dat$date24) & dat$EDATE1 < dat$date24
        dat$vte_prior_history[a] <- 1
      
        # if did not attend visit24 and event before min days to visit24
        b <- aa & is.na(dat$date24) & dat$EDATE1 < r1
        dat$vte_prior_history[b] <- 1
      
        # if did not attend visit24 but did attend visit23 and event before visit23
        f <- aa & is.na(dat$date24) & !is.na(dat$date23) & dat$date23 >= dat$EDATE1
        dat$vte_prior_history[f] <- 1
      
        # if uncertainty about whether event is after adjucation start, assign NA
        g <- aa & is.na(dat$date24) & !(dat$vte_prior_history %in% 1) &
             dat$EDATE1 >= r1 & dat$EDATE1 <= r2
        dat$vte_prior_history[g] <- NA
      
        # check visit 25 to possibly clarify some of the missing
        h <- aa & is.na(dat$date24) & !is.na(dat$date25) & dat$date25 <= dat$EDATE1
        dat$vte_prior_history[h] <- 0
      
        #  age = age at start of followup/adjudication if no prior event
        #  if event, age = age visit 1 + days event to visit1/365.25
        #  will not keep missing
      
        dat <- dat %>%
               mutate(age = ifelse(vte_prior_history %in% 1, age1 + EDATE1 / 365.25, NA)) %>%
               mutate(age = ifelse(vte_prior_history %in% 0, vte_followup_start_age_1, age)) %>%
               filter(!is.na(vte_prior_history) & !is.na(age)) %>%
               mutate(vte_prior_history = as.character(vte_prior_history)) %>%
               select(topmed_subject_id, vte_prior_history, age)
      
        return(dat)
      }
      ```
<a id="vte_prior_history_1-hvh"></a>
  * ### vte/vte_prior_history_1 -- **HVH**:
    * 4 component_study_variables: `phs001013.v3.pht005311.v2.phv00259376.v2`, `phs001013.v3.pht005311.v2.phv00259377.v2`, `phs001013.v3.pht005311.v2.phv00259378.v2`, `phs001013.v3.pht005311.v2.phv00259384.v2`
    * Function:
      ```r
      harmonize <- function(phen_list) {
        library(dplyr)
      
        # VTE prior history for HVH
      
        # get phenotype dataset
        datt <- phen_list$source_data$pht005311
      
        # choose VTE cases - manual says all are incident
        dat1 <- datt %>% filter(ccs %in% 3)
      
        # take out subjects identified as cases then choose controls from remaining
        # necessary since controls at one time could have event to become case
        dat2 <- anti_join(datt, dat1, by = "topmed_subject_id")
      
          # choose controls from remaining
        dat2 <- dat2 %>% filter(ccs %in% 0)
      
        # some controls have duplicate entries
        # arrange by index year in descending order and choose later year
        dat3 <- dat2 %>% arrange(desc(indexy)) %>% group_by(topmed_subject_id) %>%
                     slice(1)
      
        dat <- rbind(dat1, as.data.frame(dat3))
      
        # create prior history indicator
        # age: age in years at date of VT diagnosis (cases) or at selection (controls)
        # keep only non-missing information
      
         dat <- dat %>% mutate(vte_prior_history = ifelse(priorvt %in% 1, 1, NA)) %>%
                mutate(vte_prior_history = ifelse(priorvt %in% 0, 0, vte_prior_history)) %>%
                filter(!is.na(vte_prior_history) & !is.na(age)) %>%
                mutate(vte_prior_history = as.character(vte_prior_history)) %>%
                select(topmed_subject_id, vte_prior_history, age)
      
        return(dat)
      }
      ```
<a id="vte_prior_history_1-whi_hrt"></a>
  * ### vte/vte_prior_history_1 -- **WHI_HRT**:
    * 4 component_study_variables: `phs000200.v11.pht000998.v6.phv00078437.v6`, `phs000200.v11.pht000998.v6.phv00078472.v6`, `phs000200.v11.pht000998.v6.phv00078475.v6`, `phs000200.v11.pht001031.v6.phv00080426.v6`
    * Function:
      ```r
      harmonize <- function(phen_list) {
        library(dplyr)
      
        # previous VTE history for WHI HRT participants
        # self-report on Form F2 (screening)
        # no further info so record age as age at screening
      
        # get dataset with screening information
        # get dataset with membership flags and select HRT participants
        # combine datasets
      
        dat1 <- phen_list$source_data$pht000998
        dat2 <- phen_list$source_data$pht001031 %>% filter(HRTFLAG %in% 1)
        dat <- left_join(dat2, dat1)
      
         # define vte_prior_history = 1 if any self-report of DVT or PE
         # vte_prior_history = 0 if answered 0 for both DVT and PE on Form 2
         # otherwise keep as missing
        dat <- dat %>% mutate(age = as.numeric(AGE)) %>%
               mutate(vte_prior_history = ifelse(DVT %in% 1 | PE %in% 1, 1, NA)) %>%
               mutate(vte_prior_history = ifelse(DVT %in% 0 & PE %in% 0, 0, vte_prior_history)) %>%
               filter(!is.na(vte_prior_history) & !is.na(age)) %>%
               mutate(vte_prior_history = as.character(vte_prior_history)) %>%
               select(topmed_subject_id, vte_prior_history, age)
      
        return(dat)
      }
      ```
<a id="vte_prior_history_1-whi_mrcnonhrt"></a>
  * ### vte/vte_prior_history_1 -- **WHI_MRCnonHRT**:
    * 13 component_study_variables: `phs000200.v11.pht000998.v6.phv00078436.v6`, `phs000200.v11.pht000998.v6.phv00078437.v6`, `phs000200.v11.pht000998.v6.phv00078472.v6`, `phs000200.v11.pht000998.v6.phv00078475.v6`, `phs000200.v11.pht001031.v6.phv00080426.v6`, `phs000200.v11.pht002770.v4.phv00170649.v4`, `phs000200.v11.pht002770.v4.phv00170650.v4`, `phs000200.v11.pht002770.v4.phv00170651.v4`, `phs000200.v11.pht002770.v4.phv00170652.v4`, `phs000200.v11.pht003395.v3.phv00192301.v3`, `phs000200.v11.pht003395.v3.phv00192302.v3`, `phs000200.v11.pht003407.v3.phv00193179.v3`, `phs000200.v11.pht003407.v3.phv00193194.v3`
    * Function:
      ```r
      harmonize <- function(phen_list) {
        library(dplyr)
      
        # previous history for WHI MRC non-HRT participants
        # follow-up started at beginning of Extension 2
      
        # get dataset with screening information
        # AGE is measured at screening on form F2
        # abs(F2DAYS) is days between screening and enrollment
        # do not use F2DAYS when F2DAYS > 0
        # age at enrollment = AGE + abs(F2DAYS)/365.25
        dat1 <- phen_list$source_data$pht000998
      
        # get datasets with membership flags and combine
        dat2 <- phen_list$source_data$pht001031
        dat3 <- phen_list$source_data$pht003395
        datt <- full_join(dat3, dat2)
      
        # select subjects in MRC but not in HRT
        datt <- datt %>% filter(EXT2MRC %in% 1 & HRTFLAG %in% 0)
      
        # combine with screening info
        dat <- left_join(datt, dat1)
      
        # change names for screening self-report for DVT or PE
        dat <- dat %>% rename(F2DVT = DVT, F2PE = PE)
      
        # there are three sources of previous history
        # screening self-report, up to EXT2 self-report (FORM 33), event decision before start of Ext2
        # screening self-report: use age = age at screening
      
        # get datasets for self-report (up to Ext2) and for outcomes
        f33 <- phen_list$source_data$pht002770
        outc <- phen_list$source_data$pht003407
      
        # combine
        dt <- left_join(outc, f33)
        datt <- left_join(dat, dt)
      
        # change AGE, days to numeric variables
        datt$AGE <- as.numeric(datt$AGE)
        datt$F2DAYS <- as.numeric(datt$F2DAYS)
        datt$F2DAYS[datt$F2DAYS > 0] <- 0   # correction
        datt$F33DVTDY <- as.numeric(datt$F33DVTDY)
        datt$F33PEDY <- as.numeric(datt$F33PEDY)
        datt$DVTDY <- as.numeric(datt$DVTDY)
        datt$PEDY <- as.numeric(datt$PEDY)
        datt$EXT2DAYS <- as.numeric(datt$EXT2DAYS)
      
        # create some intermediate variables flagging previous history from the three sources
        datt <- datt %>% mutate(F2h = F2DVT %in% 1 | F2PE %in% 1) %>%
                mutate(F33h = F33DVT %in% 1 | F33PE %in% 1)
        se1 <- !is.na(datt$DVTDY) & !is.na(datt$EXT2DAYS) & datt$DVTDY < datt$EXT2DAYS
        se2 <- !is.na(datt$PEDY) & !is.na(datt$EXT2DAYS) & datt$PEDY < datt$EXT2DAYS
        datt$outch <- se1 | se2
      
        # previous history indicator
        datt <- datt %>% mutate(vte_prior_history = ifelse(F2h | F33h | outch, 1, NA))
        sel <- datt$F2DVT %in% 0 & datt$F2PE %in% 0
        sel <- sel & datt$F33DVT %in% 0 & datt$F33PE %in% 0 & !datt$outch
        datt$vte_prior_history[sel] <- 0
      
        datt$age <- NA
        # for subjects with no indication of previous history, set age to start of followup
        a <- datt$vte_prior_history %in% 0
        datt$age[a] <- datt$AGE[a]  + (abs(datt$F2DAYS[a]) + datt$EXT2DAYS[a]) / 365.25
      
        # if indicated previous history at screening, that is first date
        b <- datt$F2h
        datt$age[b] <- datt$AGE[b] # age at screening
      
        # if no indication at F2 but self-report at F33:
        # use time to event if given, else use start of Ext2
        datt$days <- NA
        c1 <- datt$F33h & !datt$F2h & (!is.na(datt$F33DVTDY) | !is.na(datt$F33PEDY))
        c2 <- datt$F33h & !datt$F2h & is.na(datt$F33DVTDY) & is.na(datt$F33PEDY)
        datt$days[c1] <- pmin(datt$F33DVTDY[c1], datt$F33PEDY[c1], na.rm = TRUE)
        datt$days[c2] <- datt$EXT2DAYS[c2]
      
        # if event before adjudication and no baseline self-report, find min days
        d <- datt$outch & !datt$F2h
        datt$days[d] <- pmin(datt$DVTDY[d], datt$PEDY[d], datt$days[d], na.rm = TRUE)
      
        sel <- c1 | c2 | d
        datt$age[sel] <- datt$AGE[sel] + (abs(datt$F2DAYS[sel]) + datt$days[sel]) / 365.25
      
        # final selection
        dat <- datt %>% filter(!is.na(vte_prior_history) & !is.na(age)) %>%
               mutate(vte_prior_history = as.character(vte_prior_history)) %>%
               select(topmed_subject_id, vte_prior_history, age)
      
        return(dat)
      }
      ```