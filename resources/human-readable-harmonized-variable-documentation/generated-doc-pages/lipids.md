
# lipids

### Variables in this section:
* [fasting_lipids_1](#fasting_lipids_1)
* [hdl_1](#hdl_1)
* [ldl_1](#ldl_1)
* [lipid_lowering_medication_1](#lipid_lowering_medication_1)
* [total_cholesterol_1](#total_cholesterol_1)
* [triglycerides_1](#triglycerides_1)

<a id="fasting_lipids_1"></a>
## lipids: **fasting_lipids_1** (fasting_lipids)
  Indicates whether participant fasted for at least eight hours prior to blood draw to measure lipids phenotypes.
  * **Harmonization Units**:
    * [ARIC](#fasting_lipids_1-aric)
    * [CARDIA](#fasting_lipids_1-cardia)
    * [CHS](#fasting_lipids_1-chs)
    * [HCHS_SOL](#fasting_lipids_1-hchs_sol)
    * [JHS](#fasting_lipids_1-jhs)
    * [MESA](#fasting_lipids_1-mesa)
  * **Metadata**:
    **`Data Type`**: encoded, **`Measurement Units`**: None, **`Version`**: 3, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2018-12-12 15:39:19
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C1976106
  * **DCC Harmonization Comments**:

    This variable was harmonized by converting fasting time in hours to a binary
    indicator as needed; or in the cases where all participants fasted prior to the
    blood draw at which lipids were measured, this variable was set to true for all
    participants.
    
    Exceptions to the eight-hour cutoff are the *_CARDIA_*, *_FHS_* Offspring cohort, *_GENOA_*
    and *_SAS_*. Subjects in *_CARDIA_* and the *_FHS_* Offspring cohort were asked to fast for
    _12 hours_ or more. Subjects in the studies *_GENOA_* and *_SAS_* were asked to
    fast for _10 hours_ or more and greater resolution is not available.
    
    Subjects in
    [*_ARIC_*](https://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/document.cgi?study_id=phs000280.v3.p1&phv=182563&phd=4496&pha=&pht=4235&phvf=&phdf=387&phaf=&phtf=494&dssp=1&consent=&temp=1#sec9), *_CHS_* and *_HCHS/SOL_* were asked to fast for 12 hours prior to the blood draw. However,
    there are study variables available from all three studies that indicate
    specifically how long the subject fasted for. These variables were used for
    harmonization.
    
    #### FHS
    
    DCC analysts could not confirm that data from the *_FHS_* Original cohort
    available in dbGaP should be used for harmonization, and they are not included.
    
    
<a id="fasting_lipids_1-aric"></a>
  * ### lipids/fasting_lipids_1 -- **ARIC Atherosclerosis Risk in Communities (ARIC) Cohort**:
    * 2 component_study_variables
      * _phs000280.v4.pht004063.v2.phv00204712.v1_. dbGap Name: **V1AGE01**, Desc: **Age at visit 1 [Cohort. Visit 1]**, Table: **DERIVE13**.
      * _phs000280.v4.pht004063.v2.phv00204732.v1_. dbGap Name: **FAST0802**, Desc: **Fasting time of 8 hours or more [Cohort. Visit 1]**, Table: **DERIVE13**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        dataset <- phen_list$source_data$pht004063 %>%
          rename(age = V1AGE01, fasting_lipids = FAST0802) %>%
          mutate_at(vars(age), funs(as.numeric))
      
        # Encoded value "T" is NA
        dataset[which(dataset$fasting_lipids == "T"), ]$fasting_lipids <- NA
      
        # Exclude rows with missing data
        dataset <- dataset[!is.na(dataset$age) & !is.na(dataset$fasting_lipids), ]
      
        return(dataset)
      }
      ```
<a id="fasting_lipids_1-cardia"></a>
  * ### lipids/fasting_lipids_1 -- **CARDIA CARDIA Cohort**:
    * 2 component_study_variables
      * _phs000285.v3.pht001559.v2.phv00112439.v2_. dbGap Name: **A01AGE2**, Desc: **AGE VERIFY**, Table: **A4F01**.
      * _phs000285.v3.pht001563.v2.phv00112661.v2_. dbGap Name: **A05FAST**, Desc: **12 HR FAST BEFORE BLOOD DRAWN**, Table: **A4F05**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        source_data <- phen_list$source_data
        # Join fasting data with age data.
        dat <- full_join(source_data$pht001559, source_data$pht001563, "topmed_subject_id") %>%
          # Rename variables and convert to numeric.
          transmute(topmed_subject_id, age = as.numeric(A01AGE2), fasting_lipids = A05FAST)
      
        # Recode fasting_lipids.
        dat$fasting_lipids[dat$fasting_lipids == "YES"] <- "1"
        dat$fasting_lipids[dat$fasting_lipids == "NO"] <- "0"
        # Exclude rows with missing data.
        dat <- na.omit(dat)
        return(dat)
      }
      ```
<a id="fasting_lipids_1-chs"></a>
  * ### lipids/fasting_lipids_1 -- **CHS Cardiovascular Health Study (CHS) Cohort: an NHLBI-funded observational study of risk factors for cardiovascular disease in adults 65 years or older**:
    * 2 component_study_variables
      * _phs000287.v6.pht001451.v1.phv00099923.v1_. dbGap Name: **FAST30**, Desc: **HOURS SINCE LAST ATE OR DRANK**, Table: **BASE2**.
      * _phs000287.v6.pht001452.v1.phv00100487.v1_. dbGap Name: **AGEBL**, Desc: **CALCULATED AGE AT BASELINE**, Table: **BASEBOTH**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        source_data <- phen_list$source_data
      
        # Join age dataset and fasting dataset
        inner_join(source_data$pht001451, source_data$pht001452) %>%
          # Convert AGEBL and FAST30 to numeric
          mutate_at(vars(AGEBL, FAST30), funs(as.numeric)) %>%
          # Select ID, rename age
          transmute(topmed_subject_id, age = AGEBL,
                    # Create binary fasting indicator
                    fasting_lipids = as.character(as.integer(FAST30 >= 8))) %>%
          # Exclude records with NAs
          na.omit() %>%
          return()
      }
      ```
<a id="fasting_lipids_1-hchs_sol"></a>
  * ### lipids/fasting_lipids_1 -- **HCHS_SOL Hispanic Community Health Study /Study of Latinos (HCHS/SOL)**:
    * 2 component_study_variables
      * _phs000810.v1.pht004715.v1.phv00226251.v1_. dbGap Name: **AGE**, Desc: **Age**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
      * _phs000810.v1.pht004715.v1.phv00253225.v1_. dbGap Name: **FASTTIME**, Desc: **Fasting time (hrs.)**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        dat <- phen_list$source_data$pht004715 %>%
          # Convert character vectors to numeric.
          mutate_if(is.character, as.numeric) %>%
          # Rename variables and create binary fasting variable.
          transmute(topmed_subject_id, age = AGE,
                    fasting_lipids = as.character(as.numeric(FASTTIME >= 8))) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dat)
      }
      ```
<a id="fasting_lipids_1-jhs"></a>
  * ### lipids/fasting_lipids_1 -- **JHS Jackson Heart Study (JHS) Cohort**:
    * 2 component_study_variables
      * _phs000286.v5.pht001949.v1.phv00126009.v1_. No dbGap metadata available.
      * _phs000286.v5.pht001949.v1.phv00126044.v1_. No dbGap metadata available.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset and rename variables.
        dataset <- phen_list$source_data$pht001949 %>%
          rename(age = AGE01, fasting_lipids = LPF01)
      
        # Substitute the value of 'NA' to missing.
        dataset$fasting_lipids[dataset$fasting_lipids %in% 'NA'] <- NA
      
        # Remove records with NAs from dataset.
        dataset <- dataset[!is.na(dataset$age) & !is.na(dataset$fasting_lipids), ]
      
        # Convert character values to numeric.
        dataset <- mutate(dataset, age = as.numeric(age))
      
        return(dataset)
      }
      ```
<a id="fasting_lipids_1-mesa"></a>
  * ### lipids/fasting_lipids_1 -- **MESA Multi-Ethnic Study of Atherosclerosis (MESA) Cohort**:
    * 6 component_study_variables
      * _phs000209.v13.pht001111.v4.phv00082639.v2_. dbGap Name: **age1c**, Desc: **AGE**, Table: **MESA_AirNRExamMain**.
      * _phs000209.v13.pht001111.v4.phv00083303.v1_. dbGap Name: **lastdrk1**, Desc: **HOW LONG AGO LAST DRINK OR EAT? (HRS)**, Table: **MESA_AirNRExamMain**.
      * _phs000209.v13.pht001116.v10.phv00084442.v3_. dbGap Name: **age1c**, Desc: **AGE**, Table: **MESA_Exam1Main**.
      * _phs000209.v13.pht001116.v10.phv00084980.v2_. dbGap Name: **lastdrk1**, Desc: **HOW LONG AGO LAST DRINK OR EAT? (HRS)**, Table: **MESA_Exam1Main**.
      * _phs000209.v13.pht001121.v3.phv00087071.v1_. dbGap Name: **agefc**, Desc: **AGE**, Table: **MESA_FamilyExamMain**.
      * _phs000209.v13.pht001121.v3.phv00087524.v1_. dbGap Name: **lastdrkf**, Desc: **HOW LONG AGO LAST DRINK OR EAT? (hrs)**, Table: **MESA_FamilyExamMain**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get list of dataframes.
        source_data <- phen_list$source_data
        # Rename variables in the family exam to match variables in the other dataframes.
        source_data$pht001121 <- rename(source_data$pht001121, age1c = agefc,
                                        lastdrk1 = lastdrkf)
      
        # Bind datasets row-wise.
        dat <- bind_rows(source_data) %>%
          # Rename fasting and age variables. Convert age to numeric and fasting to binary.
          transmute(topmed_subject_id,
                    fasting_lipids = as.character(as.numeric(as.numeric(lastdrk1) >= 8)),
                    age = as.numeric(age1c)) %>%
          # Exclude rows with missing data.
          na.omit()
      
        return(dat)
      }
      ```
<a id="hdl_1"></a>
## lipids: **hdl_1** (hdl)
  Blood mass concentration of high-density lipoprotein cholesterol
  * **Harmonization Units**:
    * [ARIC](#hdl_1-aric)
    * [CARDIA](#hdl_1-cardia)
    * [CHS](#hdl_1-chs)
    * [HCHS_SOL](#hdl_1-hchs_sol)
    * [JHS](#hdl_1-jhs)
    * [MESA](#hdl_1-mesa)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: mg/dL, **`Version`**: 3, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2018-12-12 15:49:25
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C2603387
  * **DCC Harmonization Comments**:

    This variable was harmonized by converting component study variables to the
    appropriate unit of measure as needed.
    
    #### FHS
    
    DCC analysts could not confirm that data from the Original cohort available in
    dbGaP should be used for harmonization, and they are not included.
    
    #### Assays and measurement
    
    Lipids were measured in a number of different methods across studies:
    
    | study | method |
    |-------|--------|
    | Amish | serum |
    | ARIC | plasma |
    | CARDIA | plasma |
    | CFS | plasma |
    | CHS | plasma |
    | FHS | plasma |
    | GENOA | serum |
    | HCHS/SOL | serum |
    | JHS | serum |
    | MESA | plasma |
    | SAS | serum |
    
    
<a id="hdl_1-aric"></a>
  * ### lipids/hdl_1 -- **ARIC Atherosclerosis Risk in Communities (ARIC) Cohort**:
    * 2 component_study_variables
      * _phs000280.v4.pht004063.v2.phv00204712.v1_. dbGap Name: **V1AGE01**, Desc: **Age at visit 1 [Cohort. Visit 1]**, Table: **DERIVE13**.
      * _phs000280.v4.pht004063.v2.phv00204761.v1_. dbGap Name: **HDL01**, Desc: **HDL cholesterol (recalibrated lipid) [Cohort. Visit 1]**, Table: **DERIVE13**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        phen_list$source_data$pht004063 %>%
          rename(age = V1AGE01, hdl = HDL01) %>%
          # Convert character values to numeric
          mutate_if(is.character, as.numeric) %>%
          # Exclude records with NAs
          na.omit() %>%
          return()
      }
      ```
<a id="hdl_1-cardia"></a>
  * ### lipids/hdl_1 -- **CARDIA CARDIA Cohort**:
    * 2 component_study_variables
      * _phs000285.v3.pht001559.v2.phv00112439.v2_. dbGap Name: **A01AGE2**, Desc: **AGE VERIFY**, Table: **A4F01**.
      * _phs000285.v3.pht001588.v2.phv00113702.v2_. dbGap Name: **AL1HDL**, Desc: **TOTAL HDL CHOLESTEROL (MG/DL)**, Table: **A4LIP**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        source_data <- phen_list$source_data
        # Join lipids data with age data.
        dat <- full_join(source_data$pht001559, source_data$pht001588, "topmed_subject_id") %>%
          # Rename variables and convert to numeric.
          transmute(topmed_subject_id, age = as.numeric(A01AGE2), hdl = as.numeric(AL1HDL)) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dat)
      }
      ```
<a id="hdl_1-chs"></a>
  * ### lipids/hdl_1 -- **CHS Cardiovascular Health Study (CHS) Cohort: an NHLBI-funded observational study of risk factors for cardiovascular disease in adults 65 years or older**:
    * 2 component_study_variables
      * _phs000287.v6.pht001452.v1.phv00100426.v1_. dbGap Name: **HDL44**, Desc: **HDL (mg/dl)**, Table: **BASEBOTH**.
      * _phs000287.v6.pht001452.v1.phv00100487.v1_. dbGap Name: **AGEBL**, Desc: **CALCULATED AGE AT BASELINE**, Table: **BASEBOTH**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        source_data <- phen_list$source_data
        source_data$pht001452 %>% rename(age = AGEBL, hdl = HDL44) %>%
          # Convert character values to numeric
          mutate_if(is.character, as.numeric) %>%
          # Exclude incomplete records
          na.omit() %>%
          return()
      }
      ```
<a id="hdl_1-hchs_sol"></a>
  * ### lipids/hdl_1 -- **HCHS_SOL Hispanic Community Health Study /Study of Latinos (HCHS/SOL)**:
    * 2 component_study_variables
      * _phs000810.v1.pht004715.v1.phv00226251.v1_. dbGap Name: **AGE**, Desc: **Age**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
      * _phs000810.v1.pht004715.v1.phv00253239.v1_. dbGap Name: **LABA68**, Desc: **HDL-cholesterol (mg/dL) (LABA68)**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        # Rename and convert variables to numeric.
        dat <- transmute(phen_list$source_data$pht004715, topmed_subject_id,
                         age = as.numeric(AGE), hdl = as.numeric(LABA68)) %>%
          # Exclude rows with missing data
          na.omit()
        return(dat)
      }
      ```
<a id="hdl_1-jhs"></a>
  * ### lipids/hdl_1 -- **JHS Jackson Heart Study (JHS) Cohort**:
    * 2 component_study_variables
      * _phs000286.v5.pht001945.v1.phv00125930.v1_. dbGap Name: **HDLC**, Desc: **Hdlc: HDL cholesterol - mg/dL [Visit 1]**, Table: **cena**.
      * _phs000286.v5.pht001949.v1.phv00126009.v1_. No dbGap metadata available.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset and rename variables.
        source_data <- phen_list$source_data
        dataset <- inner_join(source_data$pht001949,
                              source_data$pht001945,
                              by = "topmed_subject_id") %>%
          rename(age = AGE01, hdl = HDLC)
      
        # Substitute the value of 'NA' to missing.
        dataset$hdl[dataset$hdl %in% 'NA'] <- NA
      
        # Remove records with NAs from dataset.
        dataset <- dataset[!is.na(dataset$age) & !is.na(dataset$hdl), ]
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        return(dataset)
      }
      ```
<a id="hdl_1-mesa"></a>
  * ### lipids/hdl_1 -- **MESA Multi-Ethnic Study of Atherosclerosis (MESA) Cohort**:
    * 6 component_study_variables
      * _phs000209.v13.pht001111.v4.phv00082639.v2_. dbGap Name: **age1c**, Desc: **AGE**, Table: **MESA_AirNRExamMain**.
      * _phs000209.v13.pht001111.v4.phv00082952.v1_. dbGap Name: **hdl1**, Desc: **HDL CHOLESTEROL (mg/dl)**, Table: **MESA_AirNRExamMain**.
      * _phs000209.v13.pht001116.v10.phv00084442.v3_. dbGap Name: **age1c**, Desc: **AGE**, Table: **MESA_Exam1Main**.
      * _phs000209.v13.pht001116.v10.phv00084972.v2_. dbGap Name: **hdl1**, Desc: **HDL CHOLESTEROL (mg/dl)**, Table: **MESA_Exam1Main**.
      * _phs000209.v13.pht001121.v3.phv00087071.v1_. dbGap Name: **agefc**, Desc: **AGE**, Table: **MESA_FamilyExamMain**.
      * _phs000209.v13.pht001121.v3.phv00087099.v1_. dbGap Name: **hdlf**, Desc: **HDL CHOLESTEROL (mg/dl)**, Table: **MESA_FamilyExamMain**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get list of dataframes.
        source_data <- phen_list$source_data
        # Rename variables in the family exam to match variables in the other dataframes.
        source_data$pht001121 <- rename(source_data$pht001121, age1c = agefc,
                                        hdl1 = hdlf)
        # Bind datasets row-wise.
        dat <- bind_rows(source_data) %>%
          # Rename hdl and age variables and convert to numeric.
          transmute(topmed_subject_id, hdl = as.numeric(hdl1), age = as.numeric(age1c)) %>%
          na.omit()
      
        return(dat)
      }
      ```
<a id="ldl_1"></a>
## lipids: **ldl_1** (ldl)
  Blood mass concentration of low-density lipoprotein cholesterol
  * **Harmonization Units**:
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: mg/dL, **`Version`**: 3, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2018-12-12 16:13:48
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C2603388
  * **DCC Harmonization Comments**:

    The DCC-harmonized variables for HDL cholesterol, total cholesterol and
    triglycerides were used to derive this variable with the Friedewald
    formula[^1].
    
    #### Assays and measurement
    
    Lipids were measured in a number of different methods across studies:
    
    | study | method |
    |-------|--------|
    | Amish | serum |
    | ARIC | plasma |
    | CARDIA | plasma |
    | CFS | plasma |
    | CHS | plasma |
    | FHS | plasma |
    | GENOA | serum |
    | HCHS/SOL | serum |
    | JHS | serum |
    | MESA | plasma |
    | SAS | serum |
    
    ### QC Checks
    
    There are a small number of discrepancies between this variable and the
    *_Amish_* study variable `ldl_baseline` (phv00253017); the *_CFS_* study
    variable `ldl` (phv00123971); the *_CHS_* study variable `LDLADJ`
    (phv00100492); the *_JHS_* study variable `LDLC` (phv00125931); and the
    *_MESA_* study variables `ldl1` (phv00082951, phv00084971) and `ldlf`
    (phv00087098). These study variables contain LDL data calculated by the study,
    also derived with the Friedewald formula, and were used for quality checks.
    
    For one subject from *_CFS_*, there is a 25.9% difference in value between this
    variable and the CFS study variable.
    
    [^1]: Friedewald, W. T., Levy, R. I., and Fredrickson, D. S. (1972). Estimation
      of the concentration of low-density lipoprotein cholesterol in plasma,
      without use of the preparative ultracentrifuge. Clin. Chem., 18(6), 499-502.
    
    
<a id="lipid_lowering_medication_1"></a>
## lipids: **lipid_lowering_medication_1** (lipid_lowering_medication)
  Indicates whether participant was taking any lipid-lowering medication at blood draw to measure lipids phenotypes
  * **Harmonization Units**:
    * [ARIC](#lipid_lowering_medication_1-aric)
    * [CHS](#lipid_lowering_medication_1-chs)
    * [HCHS_SOL](#lipid_lowering_medication_1-hchs_sol)
    * [JHS](#lipid_lowering_medication_1-jhs)
    * [MESA](#lipid_lowering_medication_1-mesa)
  * **Metadata**:
    **`Data Type`**: encoded, **`Measurement Units`**: None, **`Version`**: 3, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2018-12-13 08:44:44
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C2924556
  * **DCC Harmonization Comments**:

    This variable is not restricted to a single class of medications, and includes
    lipid lowering drugs like statins and fibrates.
    
    #### FHS
    
    DCC analysts could not confirm that data from the *_FHS_* Original cohort
    available in dbGaP should be used for harmonization, and they are not included.
    
    #### SAS
    
    There is no study variable to indicate whether a subject was taking
    lipid-lowering medication at the time of the lipids blood draw. Therefore, all
    *_SAS_* subjects have missing values for this harmonized variable.
    
    
<a id="lipid_lowering_medication_1-aric"></a>
  * ### lipids/lipid_lowering_medication_1 -- **ARIC Atherosclerosis Risk in Communities (ARIC) Cohort**:
    * 2 component_study_variables
      * _phs000280.v4.pht004063.v2.phv00204712.v1_. dbGap Name: **V1AGE01**, Desc: **Age at visit 1 [Cohort. Visit 1]**, Table: **DERIVE13**.
      * _phs000280.v4.pht004063.v2.phv00204802.v1_. dbGap Name: **CHOLMDCODE01**, Desc: **Cholesterol lowering medication in past 2 weeks: using 2004 Med. code, visit 1 [Cohort. Visit 1]**, Table: **DERIVE13**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(magrittr)
        dataset <- phen_list$source_data$pht004063 %>%
          rename(age = V1AGE01, lipid_lowering_medication = CHOLMDCODE01)
      
        # Convert "T" entry to NA. "T" is interpreted as "forgot medications" or "missing data"
        dataset[which(dataset$lipid_lowering_medication == "T"), ]$lipid_lowering_medication <- NA
      
        # Exclude missing records
        dataset <- dataset[!is.na(dataset$age) & !is.na(dataset$lipid_lowering_medication), ]
      
        # Convert character values to numeric
        dataset %>% mutate_if(is.character, as.numeric) %>%
          return()
      }
      ```
<a id="lipid_lowering_medication_1-chs"></a>
  * ### lipids/lipid_lowering_medication_1 -- **CHS Cardiovascular Health Study (CHS) Cohort: an NHLBI-funded observational study of risk factors for cardiovascular disease in adults 65 years or older**:
    * 2 component_study_variables
      * _phs000287.v6.pht001452.v1.phv00100487.v1_. dbGap Name: **AGEBL**, Desc: **CALCULATED AGE AT BASELINE**, Table: **BASEBOTH**.
      * _phs000287.v6.pht001452.v1.phv00100594.v1_. dbGap Name: **LIPID06**, Desc: **Any lipid-lowering medication**, Table: **BASEBOTH**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        dataset <- phen_list$source_data$pht001452 %>%
          rename(age = AGEBL, lipid_lowering_medication = LIPID06)
      
        # Remove records with NAs from dataset
        dataset <- dataset[!is.na(dataset$age) & !is.na(dataset$lipid_lowering_medication), ]
      
        # Convert character values to numeric and return
        dataset %>% mutate_if(is.character, as.numeric) %>%
          return()
      }
      ```
<a id="lipid_lowering_medication_1-hchs_sol"></a>
  * ### lipids/lipid_lowering_medication_1 -- **HCHS_SOL Hispanic Community Health Study /Study of Latinos (HCHS/SOL)**:
    * 2 component_study_variables
      * _phs000810.v1.pht004715.v1.phv00226251.v1_. dbGap Name: **AGE**, Desc: **Age**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
      * _phs000810.v1.pht004715.v1.phv00226349.v1_. dbGap Name: **MED_LLD**, Desc: **Lipid lowering drugs/Antihyperlipidemics (LLD)**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        dat <- phen_list$source_data$ pht004715 %>%
          # Convert to numeric/rename variables.
          transmute(topmed_subject_id, age = as.numeric(AGE),
                    lipid_lowering_medication = as.numeric(MED_LLD)) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dat)
      }
      ```
<a id="lipid_lowering_medication_1-jhs"></a>
  * ### lipids/lipid_lowering_medication_1 -- **JHS Jackson Heart Study (JHS) Cohort**:
    * 2 component_study_variables
      * _phs000286.v5.pht001949.v1.phv00126009.v1_. No dbGap metadata available.
      * _phs000286.v5.pht001949.v1.phv00126053.v1_. No dbGap metadata available.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset and rename variables.
        dataset <- phen_list$source_data$pht001949 %>%
          rename(age = AGE01, lipid_lowering_medication = LPM01)
      
        # Substitute the value of 'X' to missing.
        dataset$lipid_lowering_medication[dataset$lipid_lowering_medication %in% 'X'] <- NA
      
        # Remove records with NAs from dataset.
        dataset <- dataset[!is.na(dataset$age) & !is.na(dataset$lipid_lowering_medication), ]
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        return(dataset)
      }
      ```
<a id="lipid_lowering_medication_1-mesa"></a>
  * ### lipids/lipid_lowering_medication_1 -- **MESA Multi-Ethnic Study of Atherosclerosis (MESA) Cohort**:
    * 6 component_study_variables
      * _phs000209.v13.pht001111.v4.phv00082639.v2_. dbGap Name: **age1c**, Desc: **AGE**, Table: **MESA_AirNRExamMain**.
      * _phs000209.v13.pht001111.v4.phv00083162.v1_. dbGap Name: **lipid1c**, Desc: **ANY LIPID-LOWERING MEDICATION**, Table: **MESA_AirNRExamMain**.
      * _phs000209.v13.pht001116.v10.phv00084442.v3_. dbGap Name: **age1c**, Desc: **AGE**, Table: **MESA_Exam1Main**.
      * _phs000209.v13.pht001116.v10.phv00085407.v2_. dbGap Name: **lipid1c**, Desc: **ANY LIPID-LOWERING MEDICATION**, Table: **MESA_Exam1Main**.
      * _phs000209.v13.pht001121.v3.phv00087071.v1_. dbGap Name: **agefc**, Desc: **AGE**, Table: **MESA_FamilyExamMain**.
      * _phs000209.v13.pht001121.v3.phv00087104.v1_. dbGap Name: **lipidfc**, Desc: **ANY LIPID-LOWERING MEDICATION**, Table: **MESA_FamilyExamMain**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get list of dataframes.
        source_data <- phen_list$source_data
        # Rename variables in the family exam to match variables in the other dataframes.
        source_data$pht001121 <- rename(source_data$pht001121, lipid1c = lipidfc,
                                        age1c = agefc)
        # Bind datasets row-wise.
        dat <- bind_rows(source_data) %>%
          # Rename treatment and age variables, and convert to numeric.
          transmute(topmed_subject_id, lipid_lowering_medication = as.numeric(lipid1c),
                    age = as.numeric(age1c)) %>%
          na.omit()
      
        return(dat)
      }
      ```
<a id="total_cholesterol_1"></a>
## lipids: **total_cholesterol_1** (total_cholesterol)
  Blood mass concentration of total cholesterol
  * **Harmonization Units**:
    * [ARIC](#total_cholesterol_1-aric)
    * [CARDIA](#total_cholesterol_1-cardia)
    * [CHS](#total_cholesterol_1-chs)
    * [HCHS_SOL](#total_cholesterol_1-hchs_sol)
    * [JHS](#total_cholesterol_1-jhs)
    * [MESA](#total_cholesterol_1-mesa)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: mg/dL, **`Version`**: 3, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2018-12-12 15:54:03
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C0543421
  * **DCC Harmonization Comments**:

    This variable was harmonized by converting study variables to the appropriate
    unit of measure as needed.
    
    #### CHS
    
    The component study variable `CHOLADJ` (phv00100491) was already adjusted for
    laboratory drift as provided.
    
    #### FHS
    
    DCC analysts could not confirm that data from the Original cohort available in
    dbGaP should be used for harmonization, and they are not included.
    
    #### Assays and measurement
    
    Lipids were measured in a number of different methods across studies:
    
    | study | method |
    |-------|--------|
    | Amish | serum |
    | ARIC | plasma |
    | CARDIA | plasma |
    | CFS | plasma |
    | CHS | plasma |
    | FHS | plasma |
    | GENOA | serum |
    | HCHS/SOL | serum |
    | JHS | serum |
    | MESA | plasma |
    | SAS | serum |
    
    ### QC Checks
    
    #### CFS
    
    The distribution of values for this phenotype is substantially lower than other
    studies. DCC analysts confirmed with study correspondents that the units are
    correct.
    
    
<a id="total_cholesterol_1-aric"></a>
  * ### lipids/total_cholesterol_1 -- **ARIC Atherosclerosis Risk in Communities (ARIC) Cohort**:
    * 2 component_study_variables
      * _phs000280.v4.pht004063.v2.phv00204712.v1_. dbGap Name: **V1AGE01**, Desc: **Age at visit 1 [Cohort. Visit 1]**, Table: **DERIVE13**.
      * _phs000280.v4.pht004063.v2.phv00204735.v1_. dbGap Name: **TCHSIU01**, Desc: **Total cholesterol in SI units [Cohort. Visit 1]**, Table: **DERIVE13**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(magrittr)
        dataset <- phen_list$source_data$pht004063 %>%
          rename(age = V1AGE01, total_cholesterol = TCHSIU01)
      
        # Convert chol from SI unit to mg/dL using given conversion on ARIC data form
      
          # https://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/document.cgi?study_id=
          # phs000280.v4.p1&phv=204738&phd=2881&pha=&pht=1440&phvf=&phdf=&phaf=&phtf=
          # &dssp=1&consent=&temp=1#sec132
      
        dataset$total_cholesterol <- as.numeric(dataset$total_cholesterol) / 0.02586
      
        # Convert character values to numeric
        dataset %>% mutate_if(is.character, as.numeric) %>%
          na.omit() %>%
          return()
      }
      ```
<a id="total_cholesterol_1-cardia"></a>
  * ### lipids/total_cholesterol_1 -- **CARDIA CARDIA Cohort**:
    * 2 component_study_variables
      * _phs000285.v3.pht001559.v2.phv00112439.v2_. dbGap Name: **A01AGE2**, Desc: **AGE VERIFY**, Table: **A4F01**.
      * _phs000285.v3.pht001588.v2.phv00113700.v2_. dbGap Name: **AL1CHOL**, Desc: **TOTAL CHOLESTEROL (MG/DL)**, Table: **A4LIP**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        source_data <- phen_list$source_data
        # Join lipids data with age data.
        dat <- full_join(source_data$pht001559, source_data$pht001588, "topmed_subject_id") %>%
          # Rename variables and convert to numeric.
          transmute(topmed_subject_id, age = as.numeric(A01AGE2),
                    total_cholesterol = as.numeric(AL1CHOL)) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dat)
      }
      ```
<a id="total_cholesterol_1-chs"></a>
  * ### lipids/total_cholesterol_1 -- **CHS Cardiovascular Health Study (CHS) Cohort: an NHLBI-funded observational study of risk factors for cardiovascular disease in adults 65 years or older**:
    * 2 component_study_variables
      * _phs000287.v6.pht001452.v1.phv00100487.v1_. dbGap Name: **AGEBL**, Desc: **CALCULATED AGE AT BASELINE**, Table: **BASEBOTH**.
      * _phs000287.v6.pht001452.v1.phv00100491.v1_. dbGap Name: **CHOLADJ**, Desc: **Adjusted Cholesterol (mg/dl)**, Table: **BASEBOTH**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        phen_list$source_data$pht001452 %>%
          rename(age = AGEBL, total_cholesterol = CHOLADJ) %>%
          # Convert character values to numeric
          mutate_if(is.character, as.numeric) %>%
          # Exclude incomplete records
          na.omit() %>%
          return()
      }
      ```
<a id="total_cholesterol_1-hchs_sol"></a>
  * ### lipids/total_cholesterol_1 -- **HCHS_SOL Hispanic Community Health Study /Study of Latinos (HCHS/SOL)**:
    * 2 component_study_variables
      * _phs000810.v1.pht004715.v1.phv00226251.v1_. dbGap Name: **AGE**, Desc: **Age**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
      * _phs000810.v1.pht004715.v1.phv00253238.v1_. dbGap Name: **LABA66**, Desc: **Total cholesterol (mg/dL) (LABA66)**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        # Rename and convert variables to numeric.
        dat <- transmute(phen_list$source_data$pht004715, topmed_subject_id,
                         age = as.numeric(AGE),
                         total_cholesterol = as.numeric(LABA66)) %>%
        # Exclude rows with missing data
        na.omit()
        return(dat)
      }
      ```
<a id="total_cholesterol_1-jhs"></a>
  * ### lipids/total_cholesterol_1 -- **JHS Jackson Heart Study (JHS) Cohort**:
    * 2 component_study_variables
      * _phs000286.v5.pht001945.v1.phv00125927.v1_. dbGap Name: **CHR**, Desc: **Chr: total cholesterol - mg/dL [Visit 1]**, Table: **cena**.
      * _phs000286.v5.pht001949.v1.phv00126009.v1_. No dbGap metadata available.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset and rename variables.
        source_data <- phen_list$source_data
        dataset <- inner_join(source_data$pht001949,
                              source_data$pht001945,
                              by = "topmed_subject_id") %>%
          rename(age = AGE01, total_cholesterol = CHR)
      
        # Substitute the value of 'NA' to missing.
        dataset$total_cholesterol[dataset$total_cholesterol %in% 'NA'] <- NA
      
        # Remove records with NAs from dataset.
        dataset <- dataset[!is.na(dataset$age) & !is.na(dataset$total_cholesterol), ]
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        return(dataset)
      }
      ```
<a id="total_cholesterol_1-mesa"></a>
  * ### lipids/total_cholesterol_1 -- **MESA Multi-Ethnic Study of Atherosclerosis (MESA) Cohort**:
    * 6 component_study_variables
      * _phs000209.v13.pht001111.v4.phv00082639.v2_. dbGap Name: **age1c**, Desc: **AGE**, Table: **MESA_AirNRExamMain**.
      * _phs000209.v13.pht001111.v4.phv00082956.v1_. dbGap Name: **chol1**, Desc: **TOTAL CHOLESTEROL (mg/dl)**, Table: **MESA_AirNRExamMain**.
      * _phs000209.v13.pht001116.v10.phv00084442.v3_. dbGap Name: **age1c**, Desc: **AGE**, Table: **MESA_Exam1Main**.
      * _phs000209.v13.pht001116.v10.phv00084974.v2_. dbGap Name: **chol1**, Desc: **TOTAL CHOLESTEROL (mg/dl)**, Table: **MESA_Exam1Main**.
      * _phs000209.v13.pht001121.v3.phv00087071.v1_. dbGap Name: **agefc**, Desc: **AGE**, Table: **MESA_FamilyExamMain**.
      * _phs000209.v13.pht001121.v3.phv00087100.v1_. dbGap Name: **cholf**, Desc: **TOTAL CHOLESTEROL (mg/dl)**, Table: **MESA_FamilyExamMain**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get list of dataframes.
        source_data <- phen_list$source_data
        # Rename variables in the family exam to match variables in the other dataframes.
        source_data$pht001121 <- rename(source_data$pht001121, chol1 = cholf, age1c = agefc)
        # Bind datasets row-wise.
        dat <- bind_rows(source_data) %>%
          # Rename cholesterol and age variables, and convert to numeric.
          transmute(topmed_subject_id, total_cholesterol = as.numeric(chol1),
                    age = as.numeric(age1c)) %>%
          # Exclude rows with missing values.
          na.omit()
      
        return(dat)
      }
      ```
<a id="triglycerides_1"></a>
## lipids: **triglycerides_1** (triglycerides)
  Blood mass concentration of triglycerides
  * **Harmonization Units**:
    * [ARIC](#triglycerides_1-aric)
    * [CARDIA](#triglycerides_1-cardia)
    * [CHS](#triglycerides_1-chs)
    * [HCHS_SOL](#triglycerides_1-hchs_sol)
    * [JHS](#triglycerides_1-jhs)
    * [MESA](#triglycerides_1-mesa)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: mg/dL, **`Version`**: 3, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2018-12-12 15:58:14
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C0428475
  * **DCC Harmonization Comments**:

    This variable was harmonized by converting study variables to the
    appropriate unit of measure as needed.
    
    #### FHS
    
    DCC analysts could not confirm that data from the Original cohort
    available in dbGaP should be used for harmonization, and they are not
    included.
    
    #### Assays and measurement
    
    Lipids were measured in a number of different methods across studies:
    
    | study | method |
    |-------|--------|
    | Amish | serum |
    | ARIC | plasma |
    | CARDIA | plasma |
    | CFS | plasma |
    | CHS | plasma |
    | FHS | plasma |
    | GENOA | serum |
    | HCHS/SOL | serum |
    | JHS | serum |
    | MESA | plasma |
    | SAS | serum |
    
    
<a id="triglycerides_1-aric"></a>
  * ### lipids/triglycerides_1 -- **ARIC Atherosclerosis Risk in Communities (ARIC) Cohort**:
    * 2 component_study_variables
      * _phs000280.v4.pht004063.v2.phv00204712.v1_. dbGap Name: **V1AGE01**, Desc: **Age at visit 1 [Cohort. Visit 1]**, Table: **DERIVE13**.
      * _phs000280.v4.pht004063.v2.phv00204738.v1_. dbGap Name: **TRGSIU01**, Desc: **Total triglycerides In SI units [Cohort. Visit 1]**, Table: **DERIVE13**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(magrittr)
        source_data <- phen_list$source_data
        source_data$pht004063 %<>% rename(age1 = V1AGE01, trig1 = TRGSIU01)
      
        # Convert trig from SI unit to mg/dL using given conversion on ARIC data form
      
        # https://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/document.cgi?
        # study_id=phs000280.v4.p1&phv=204738&phd=2881&pha=&pht=1440&phvf=&phdf=
        # &phaf=&phtf=&dssp=1&consent=&temp=1#sec139
      
        source_data$pht004063$trig1 <- as.numeric(source_data$pht004063$trig1) / 0.01129
      
        # Convert character values to numeric
        source_data$pht004063 %>% mutate_if(is.character, as.numeric) %>%
          rename(age = age1, triglycerides = trig1) %>%
          # Exclude incomplete records
          na.omit() %>%
          return()
      }
      ```
<a id="triglycerides_1-cardia"></a>
  * ### lipids/triglycerides_1 -- **CARDIA CARDIA Cohort**:
    * 2 component_study_variables
      * _phs000285.v3.pht001559.v2.phv00112439.v2_. dbGap Name: **A01AGE2**, Desc: **AGE VERIFY**, Table: **A4F01**.
      * _phs000285.v3.pht001588.v2.phv00113701.v2_. dbGap Name: **AL1NTRIG**, Desc: **TRIGLYCERIDES (MG/DL)**, Table: **A4LIP**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        source_data <- phen_list$source_data
        # Join lipids data with age data.
        dat <- full_join(source_data$pht001559, source_data$pht001588, "topmed_subject_id") %>%
          # Rename variables and convert to numeric.
          transmute(topmed_subject_id, age = as.numeric(A01AGE2),
                    triglycerides = as.numeric(AL1NTRIG)) %>%
          # Exclude rows with missing data.
          na.omit()
        return(dat)
      }
      ```
<a id="triglycerides_1-chs"></a>
  * ### lipids/triglycerides_1 -- **CHS Cardiovascular Health Study (CHS) Cohort: an NHLBI-funded observational study of risk factors for cardiovascular disease in adults 65 years or older**:
    * 2 component_study_variables
      * _phs000287.v6.pht001452.v1.phv00100425.v1_. dbGap Name: **TRIG44**, Desc: **TRIGLYCERIDE (mg/dl)**, Table: **BASEBOTH**.
      * _phs000287.v6.pht001452.v1.phv00100487.v1_. dbGap Name: **AGEBL**, Desc: **CALCULATED AGE AT BASELINE**, Table: **BASEBOTH**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        phen_list$source_data$pht001452 %>%
          rename(age = AGEBL, triglycerides = TRIG44) %>%
          # Convert character values to numeric
          mutate_if(is.character, as.numeric) %>%
          # Exclude incomplete records
          na.omit() %>%
          return()
      }
      ```
<a id="triglycerides_1-hchs_sol"></a>
  * ### lipids/triglycerides_1 -- **HCHS_SOL Hispanic Community Health Study /Study of Latinos (HCHS/SOL)**:
    * 2 component_study_variables
      * _phs000810.v1.pht004715.v1.phv00226251.v1_. dbGap Name: **AGE**, Desc: **Age**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
      * _phs000810.v1.pht004715.v1.phv00253240.v1_. dbGap Name: **LABA67**, Desc: **Triglycerides (mg/dL) (LABA67)**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        # Rename and convert variables to numeric.
        dat <- transmute(phen_list$source_data$pht004715, topmed_subject_id,
                         age = as.numeric(AGE), triglycerides = as.numeric(LABA67)) %>%
          # Exclude rows with missing data
          na.omit()
        return(dat)
      }
      ```
<a id="triglycerides_1-jhs"></a>
  * ### lipids/triglycerides_1 -- **JHS Jackson Heart Study (JHS) Cohort**:
    * 2 component_study_variables
      * _phs000286.v5.pht001945.v1.phv00125933.v1_. dbGap Name: **TRR**, Desc: **Trr: triglyceride - mg/dL [Visit 1]**, Table: **cena**.
      * _phs000286.v5.pht001949.v1.phv00126009.v1_. No dbGap metadata available.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset and rename variables.
        source_data <- phen_list$source_data
        dataset <- inner_join(source_data$pht001949,
                              source_data$pht001945,
                              by = "topmed_subject_id") %>%
          rename(age = AGE01, triglycerides = TRR)
      
        # Substitute the value of 'NA' to missing.
        dataset$triglycerides[dataset$triglycerides %in% 'NA'] <- NA
      
        # Remove records with NAs from dataset.
        dataset <- dataset[!is.na(dataset$age) & !is.na(dataset$triglycerides), ]
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        return(dataset)
      }
      ```
<a id="triglycerides_1-mesa"></a>
  * ### lipids/triglycerides_1 -- **MESA Multi-Ethnic Study of Atherosclerosis (MESA) Cohort**:
    * 6 component_study_variables
      * _phs000209.v13.pht001111.v4.phv00082639.v2_. dbGap Name: **age1c**, Desc: **AGE**, Table: **MESA_AirNRExamMain**.
      * _phs000209.v13.pht001111.v4.phv00082950.v1_. dbGap Name: **trig1**, Desc: **TRIGLYCERIDES (mg/dl)**, Table: **MESA_AirNRExamMain**.
      * _phs000209.v13.pht001116.v10.phv00084442.v3_. dbGap Name: **age1c**, Desc: **AGE**, Table: **MESA_Exam1Main**.
      * _phs000209.v13.pht001116.v10.phv00084968.v2_. dbGap Name: **trig1**, Desc: **TRIGLYCERIDES (mg/dl)**, Table: **MESA_Exam1Main**.
      * _phs000209.v13.pht001121.v3.phv00087071.v1_. dbGap Name: **agefc**, Desc: **AGE**, Table: **MESA_FamilyExamMain**.
      * _phs000209.v13.pht001121.v3.phv00087101.v1_. dbGap Name: **trigf**, Desc: **TRIGLYCERIDES (mg/dl)**, Table: **MESA_FamilyExamMain**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get list of dataframes.
        source_data <- phen_list$source_data
        # Rename variables in the family exam to match variables in the other dataframes.
        source_data$pht001121 <- rename(source_data$pht001121, age1c = agefc, trig1 = trigf)
      
        # Bind datasets row-wise.
        dat <- bind_rows(source_data) %>%
          # Rename triglycerides and age variables, and convert to numeric.
          transmute(topmed_subject_id, age = as.numeric(age1c),
                    triglycerides = as.numeric(trig1)) %>%
          # Exclude incomplete records.
          na.omit()
      
          return(dat)
      }
      ```