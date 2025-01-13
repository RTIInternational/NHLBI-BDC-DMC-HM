
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
  * ### vte/vte_case_status_1 -- **ARIC Atherosclerosis Risk in Communities (ARIC) Cohort**:
    * 3 component_study_variables
      * _phs000280.v4.pht004063.v2.phv00204712.v1_. dbGap Name: **V1AGE01**, Desc: **Age at visit 1 [Cohort. Visit 1]**, Table: **DERIVE13**.
      * _phs000280.v4.pht006485.v1.phv00298125.v1_. No dbGap metadata available.
      * _phs000280.v4.pht006485.v1.phv00298126.v1_. No dbGap metadata available.
    * **Function:**
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
  * ### vte/vte_case_status_1 -- **CHS Cardiovascular Health Study (CHS) Cohort: an NHLBI-funded observational study of risk factors for cardiovascular disease in adults 65 years or older**:
    * 4 component_study_variables
      * _phs000287.v6.pht001452.v1.phv00100487.v1_. dbGap Name: **AGEBL**, Desc: **CALCULATED AGE AT BASELINE**, Table: **BASEBOTH**.
      * _phs000287.v6.pht005981.v1.phv00273565.v1_. dbGap Name: **vt**, Desc: **Lite: VT case (through dec01)**, Table: **CHS_VTE_data**.
      * _phs000287.v6.pht005981.v1.phv00273566.v1_. dbGap Name: **ttoevent**, Desc: **Days from baseline to VT or censoring (through dec01)**, Table: **CHS_VTE_data**.
      * _phs000287.v6.pht005981.v1.phv00273567.v1_. dbGap Name: **vtpehx01**, Desc: **LITE : Self-report of DVT or PE at baseline**, Table: **CHS_VTE_data**.
    * **Function:**
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
<a id="vte_followup_start_age_1"></a>
## vte: **vte_followup_start_age_1** (vte_followup_start_age)
  Age of subject at the start of the follow up period during which venous thromboembolism (VTE) events were reviewed and adjudicated.
  * **Harmonization Units**:
    * [ARIC](#vte_followup_start_age_1-aric)
    * [CHS](#vte_followup_start_age_1-chs)
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
  * ### vte/vte_followup_start_age_1 -- **ARIC Atherosclerosis Risk in Communities (ARIC) Cohort**:
    * 2 component_study_variables
      * _phs000280.v4.pht004063.v2.phv00204712.v1_. dbGap Name: **V1AGE01**, Desc: **Age at visit 1 [Cohort. Visit 1]**, Table: **DERIVE13**.
      * _phs000280.v4.pht006485.v1.phv00298125.v1_. No dbGap metadata available.
    * **Function:**
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
  * ### vte/vte_followup_start_age_1 -- **CHS Cardiovascular Health Study (CHS) Cohort: an NHLBI-funded observational study of risk factors for cardiovascular disease in adults 65 years or older**:
    * 1 component_study_variables
      * _phs000287.v6.pht001452.v1.phv00100487.v1_. dbGap Name: **AGEBL**, Desc: **CALCULATED AGE AT BASELINE**, Table: **BASEBOTH**.
    * **Function:**
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
<a id="vte_prior_history_1"></a>
## vte: **vte_prior_history_1** (vte_prior_history)
  An indicator of whether a subject had a venous thromboembolism (VTE) event prior to the start of the medical review process (including self-reported events).
  * **Harmonization Units**:
    * [ARIC](#vte_prior_history_1-aric)
    * [CHS](#vte_prior_history_1-chs)
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
  * ### vte/vte_prior_history_1 -- **ARIC Atherosclerosis Risk in Communities (ARIC) Cohort**:
    * 2 component_study_variables
      * _phs000280.v4.pht004063.v2.phv00204712.v1_. dbGap Name: **V1AGE01**, Desc: **Age at visit 1 [Cohort. Visit 1]**, Table: **DERIVE13**.
      * _phs000280.v4.pht006485.v1.phv00298125.v1_. No dbGap metadata available.
    * **Function:**
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
  * ### vte/vte_prior_history_1 -- **CHS Cardiovascular Health Study (CHS) Cohort: an NHLBI-funded observational study of risk factors for cardiovascular disease in adults 65 years or older**:
    * 2 component_study_variables
      * _phs000287.v6.pht001452.v1.phv00100487.v1_. dbGap Name: **AGEBL**, Desc: **CALCULATED AGE AT BASELINE**, Table: **BASEBOTH**.
      * _phs000287.v6.pht005981.v1.phv00273567.v1_. dbGap Name: **vtpehx01**, Desc: **LITE : Self-report of DVT or PE at baseline**, Table: **CHS_VTE_data**.
    * **Function:**
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