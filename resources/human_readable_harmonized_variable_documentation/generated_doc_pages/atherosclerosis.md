
# atherosclerosis

### Variables in this section:
* [cac_score_1](#cac_score_1)
* [cac_volume_1](#cac_volume_1)
* [carotid_plaque_1](#carotid_plaque_1)
* [carotid_stenosis_1](#carotid_stenosis_1)
* [cimt_1](#cimt_1)
* [cimt_2](#cimt_2)

<a id="cac_score_1"></a>
## atherosclerosis: **cac_score_1** (cac_score)
  Coronary artery calcification (CAC) score using Agatston scoring of CT scan(s) of coronary arteries
  * **Study (harmonization_units)**:
    * [CHS](#cac_score_1-chs)
    * [JHS](#cac_score_1-jhs)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: None, **`Version`**: 2, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2018-01-18 19:10:10
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C2825178
  * **DCC Harmonization Comments**:

    All component study variables used for the harmonized `cac_score` variable recorded scores using the Agatston scoring method from computed tomography (CT) scans.
    Coronary calcium measurements were determined by summing individual lesion measurements from each of four anatomic sites (left main, left anterior descending, circumflex, and right coronary arteries).  
    
    Studies used different computed tomography scanners to ascertain CAC scoring. 
    Information on the scanning technology used can be found in Table 1 in the Data Supplement of the paper:  
     Natarajan, P., Bis, J.C., _et al_ (2016). Multiethnic exome-wide association study of subclinical atherosclerosis, 
     Circ. Cardiovasc. Genet. _9_, 511 510.
    
    The following information was either obtained from protocol documents in dbGaP or from communication with the studies.
    
    * For MESA (phs000209), the score was the average of the scores from two consecutive CT scans and the scores were phantom adjusted.
    * For FHS (phs000007), sub-cohorts "Offspring" and "Generation 3", the score was the average of scores from two consecutive CT scans and the scores were phantom adjusted.
    (For a small number of subjects in these FHS sub-cohorts, the score was based on only one scan.)
    * For FHS (phs000007), sub-cohorts Omni1 and Omni2, the score was based on only one scan and the score was phantom adjusted.
    * For JHS (phs000286), Amish (phs000965), CHS (phs000287), and GENOA (phs001238) the scores were based on only one scan and were not phantom adjusted.
    
    
<a id="cac_score_1-chs"></a>
  * ### atherosclerosis/cac_score_1 -- **CHS Cardiovascular Health Study (CHS) Cohort: an NHLBI-funded observational study of risk factors for cardiovascular disease in adults 65 years or older**:
    * 2 component_study_variables
      * _phs000287.v6.pht001459.v1.phv00100691.v1_
        * dbGap name: **CACSCORE**
        * dbGap desc: **Coronary Artery Calcification by electron beam CYT scan**
        * dbGap table: **CHS_CAC**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000287.v6.pht001475.v1.phv00102583.v1_
        * dbGap name: **AGEY11**
        * dbGap desc: **AGE AT YEAR 11**
        * dbGap table: **YR11**
         * No permissible values listed in PIC-SURE data dictionary
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
      # harmonize CAC Agatston score CHS
         source_data <- phen_list$source_data
      
      # CAC data set
         dat1 <- source_data[["pht001459"]]
      
      # for age info
      # reviewing CAC data set: year of CAC measurement was given as 11 for all subjects
      # age information found in YR11 dataset
         dat2 <- source_data[["pht001475"]]
      
         dat <- inner_join(dat1, dat2)
      
      # change variable names
      # select final variables and omit missing records
      
         dat <- dat %>% mutate(cac_score = as.numeric(CACSCORE), age = AGEY11) %>%
                select(topmed_subject_id, cac_score, age) %>% na.omit
      
         return(dat)
      }
      ```
<a id="cac_score_1-jhs"></a>
  * ### atherosclerosis/cac_score_1 -- **JHS Jackson Heart Study (JHS) Cohort**:
    * 2 component_study_variables
      * _phs000286.v5.pht001948.v1.phv00126002.v1_
        * dbGap name: **CSTA24**
        * dbGap desc: **24. Agatston Score All Coronary (does not include others)**
        * dbGap table: **csta**
         * varId _phv00126002_ not found in PIC-SURE data dictionary
      * _phs000286.v5.pht001949.v1.phv00126009.v1_
        * No dbGap metadata available
         * varId _phv00126009_ not found in PIC-SURE data dictionary
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
      # harmonize CAC Agatston score JHS
         source_data <- phen_list$source_data
      
      # CAC data set
         dat1 <- source_data[["pht001948"]]
      
      # for age info
         dat2 <- source_data[["pht001949"]]
      
         dat <- inner_join(dat1, dat2)
      
      # change variable names
      # then select final variables and omit missing records
      
         dat <- dat %>% mutate(cac_score = as.numeric(CSTA24), age = AGE01) %>%
                select(topmed_subject_id, cac_score, age) %>% na.omit
      
         return(dat)
      }
      ```
<a id="cac_volume_1"></a>
## atherosclerosis: **cac_volume_1** (cac_volume)
  Coronary artery calcium volume using CT scan(s) of coronary arteries
  * **Study (harmonization_units)**:
    * [FHS](#cac_volume_1-fhs)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: cubic millimeters, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2017-10-30 17:31:30
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C2825178
  * **DCC Harmonization Comments**:

    The harmonized `cac_volume` variable uses given study component variables for calcium volume measurements.
    Coronary calcium measurements were determined by summing individual lesion measurements from each of four anatomic sites (left main, left anterior descending, circumflex, and right coronary arteries).  
    
    Studies used different computed tomography (CT) scanners to ascertain CAC scoring. 
    Information on the scanning technology used can be found in Table 1 in the Data Supplement of the paper:  
     Natarajan, P., Bis, J.C., _et al_ (2016). Multiethnic exome-wide association study of subclinical atherosclerosis, 
     Circ. Cardiovasc. Genet. _9_, 511 510.
     
    The following information was either obtained from protocol documents in dbGaP or from communication with the studies:
    
    * For FHS (phs000007), the volume component variables were based on one CT scan and were phantom adjusted. 
    * For MESA (phs000209), the volume component variables were the average of two consecutive CT scans and were phantom adjusted. 
    
    Please note that the study component calcium volume variables for FHS sub-cohorts "Offspring" and "Generation 3" were measured at a later time than the component study variables used for harmonized `cac_score`.
<a id="cac_volume_1-fhs"></a>
  * ### atherosclerosis/cac_volume_1 -- **FHS Framingham Cohort**:
    * 3 component_study_variables
      * _phs000007.v29.pht003099.v4.phv00177930.v4_
        * dbGap name: **age1**
        * dbGap desc: **Age at Exam 1**
        * dbGap table: **vr_dates_2019_a_1175s**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000007.v29.pht005161.v1.phv00257671.v1_
        * dbGap name: **CAC_V**
        * dbGap desc: **Coronary artery calcium volume**
        * dbGap table: **t_ctthrcac_2011_m_0682s**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000007.v29.pht005161.v1.phv00257672.v1_
        * dbGap name: **scan_date**
        * dbGap desc: **CT scan date**
        * dbGap table: **t_ctthrcac_2011_m_0682s**
         * No permissible values listed in PIC-SURE data dictionary
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
      # harmonize CAC volume for FHS from CT scans in 2008-2011
         source_data <- phen_list$source_data
      
      # CAC data set
         dat1 <- source_data[["pht005161"]]
      
      # for age info
         dat2 <- source_data[["pht003099"]]
      
         dat <- inner_join(dat1, dat2)
      
      # change variable name and type then
      # compute age at scoring using age at Exam 1 and days since Exam 1 for scan date
      # then select final variables and omit missing records
      
         dat <- dat %>% mutate(cac_volume = as.numeric(CAC_V)) %>%
                mutate(age = (as.numeric(age1) + as.numeric(scan_date) / 365.25)) %>%
                select(topmed_subject_id, cac_volume, age) %>% na.omit
      
         return(dat)
      }
      ```
<a id="carotid_plaque_1"></a>
## atherosclerosis: **carotid_plaque_1** (carotid_plaque)
  Presence or absence of carotid plaque.
  * **Study (harmonization_units)**:
    * [ARIC](#carotid_plaque_1-aric)
    * [CHS](#carotid_plaque_1-chs)
    * [JHS](#carotid_plaque_1-jhs)
    * [MESA](#carotid_plaque_1-mesa)
  * **Metadata**:
    **`Data Type`**: encoded, **`Measurement Units`**: None, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2018-05-30 13:40:57
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C0751633
  * **DCC Harmonization Comments**:

    This variable was harmonized by converting encoded component variables indicating the presence or type of carotid plaque or lesion, to a binary variable indicating the presence or absence of carotid plaque. Carotid plaque or lesion was defined as the presence of abnormal wall thickness, wall shape (surface focality or roughness), or wall texture. 
    
    Measurements of stenosis were originally considered for harmonization for this variable, as a proxy measurement of plaque. However, since stenosis is a fundamentally different phenotypic concept, the DCC created a separate harmonized variable `carotid_stenosis_1`.
    
    #### Amish
    
    *_Amish_* defined the presence of carotid plaque as "measured by intima-media thickness" (component variable phv00252989.v1.p1) on the far wall of the common carotid arteries.
    
    #### CHS
    
    Baseline carotid ultrasound scans for the Original cohort were reread due to reader drift. Reread measurements of *_CHS_* subjects were used for harmonization.[^1]
    
    #### MESA
    
    The *_MESA_* Family subcohort is not included in this harmonized phenotype at this time.
    
    #### Instrumentation
    
    Studies used different instruments at their carotid ultrasound exams:
    
    | Study | Instrument                 |
    |-------|----------------------------|
    | Amish | ATL Phillps HDI 5000       |
    | ARIC  | Biosound 2000 II SA        |
    | CHS   | Toshiba SSA-270A           |
    | JHS   | Hewlett Packard SONOS 4500 |
    | MESA  | GE Logiq 700               |
    
    
    [^1]:[Documentation Without Data Collection Forms phd002779.1](https://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/document.cgi?study_id=phs000287.v6.p1&phd=2779)
    
<a id="carotid_plaque_1-aric"></a>
  * ### atherosclerosis/carotid_plaque_1 -- **ARIC Atherosclerosis Risk in Communities (ARIC) Cohort**:
    * 2 component_study_variables
      * _phs000280.v3.pht004063.v1.phv00204712.v1_
        * dbGap name: **V1AGE01**
        * dbGap desc: **Age at visit 1 [Cohort. Visit 1]**
        * dbGap table: **DERIVE13**
         * varId _phv00204712_ not found in PIC-SURE data dictionary
      * _phs000280.v3.pht004063.v1.phv00204791.v1_
        * dbGap name: **PLAQUE01**
        * dbGap desc: **Plaque (with or without shadowing) in any carotid site [Cohort. Visit 1]**
        * dbGap table: **DERIVE13**
         * varId _phv00204791_ not found in PIC-SURE data dictionary
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(magrittr)
      
        dataset <- phen_list$source_data$pht004063
      
        # Rename age and plaque variables
        dataset <- rename(dataset, age = V1AGE01, carotid_plaque = PLAQUE01)
      
        # Convert "T" entry to NA. "T" is interpreted as "missing data"
        dataset[which(dataset$carotid_plaque == "T"), ]$carotid_plaque <- NA
      
        # Exclude missing records
        dataset <- na.omit(dataset)
      
        # Convert numeric to character.
        dataset$carotid_plaque <- as.character(dataset$carotid_plaque)
      
        return(dataset)
      }
      ```
<a id="carotid_plaque_1-chs"></a>
  * ### atherosclerosis/carotid_plaque_1 -- **CHS Cardiovascular Health Study (CHS) Cohort: an NHLBI-funded observational study of risk factors for cardiovascular disease in adults 65 years or older**:
    * 6 component_study_variables
      * _phs000287.v6.pht001452.v1.phv00100290.v1_
        * dbGap name: **PERSTAT**
        * dbGap desc: **COHORT**
        * dbGap table: **BASEBOTH**
         * PIC-SURE permissible values: NEW COHORT, OLD COHORT
      * _phs000287.v6.pht001452.v1.phv00100487.v1_
        * dbGap name: **AGEBL**
        * dbGap desc: **CALCULATED AGE AT BASELINE**
        * dbGap table: **BASEBOTH**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000287.v6.pht001473.v1.phv00101306.v1_
        * dbGap name: **LMRPH141**
        * dbGap desc: **YEAR 5 LESION MORPHOLOGY, RT SIDE**
        * dbGap table: **ULTRAYR5**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000287.v6.pht001473.v1.phv00101307.v1_
        * dbGap name: **LMRPH241**
        * dbGap desc: **YEAR 5 LESION MORPHOLOGY, LFT SIDE**
        * dbGap table: **ULTRAYR5**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000287.v6.pht001473.v1.phv00101317.v1_
        * dbGap name: **LMRPH155**
        * dbGap desc: **BL REREAD LESION MORPHOLOGY, RT SIDE**
        * dbGap table: **ULTRAYR5**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000287.v6.pht001473.v1.phv00101318.v1_
        * dbGap name: **LMRPH255**
        * dbGap desc: **BL REREAD LESION MORPHOLOGY, LFT SIDE**
        * dbGap table: **ULTRAYR5**
         * No permissible values listed in PIC-SURE data dictionary
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Join age data and lesion data.
        dataset <- plyr::join_all(phen_list$source_data) %>%
      
          # Rename age and lesion variables.
          rename(age = AGEBL,
                 subcohort = PERSTAT,
                 r_les_aa = LMRPH141,
                 l_les_aa = LMRPH241,
                 r_les_orig_rr = LMRPH155,
                 l_les_orig_rr = LMRPH255)
      
        # Convert from character to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Subset cohort 1 and create plaque variable.
        dataset_orig <- subset(dataset, select = c(topmed_subject_id,
                                                   age,
                                                   subcohort,
                                                   r_les_orig_rr,
                                                   l_les_orig_rr))
        dataset_orig <- dataset_orig[dataset_orig$subcohort == 1, ]
        dataset_orig$carotid_plaque <-
          (dataset_orig$r_les_orig_rr > 0 | dataset_orig$l_les_orig_rr > 0) %>%
          as.logical() %>%
          as.integer() %>%
          as.character()
      
        # Subset cohort 2 and create plaque variable.
        dataset_new <- subset(dataset, select = c(topmed_subject_id,
                                                  age,
                                                  subcohort,
                                                  r_les_aa,
                                                  l_les_aa))
        dataset_new <- dataset_new[dataset_new$subcohort == 2, ]
        dataset_new$carotid_plaque <- (dataset_new$r_les_aa > 0 | dataset_new$l_les_aa > 0) %>%
          as.logical() %>%
          as.integer() %>%
          as.character()
      
        # Combine plaque variable from both cohorts.
        dataset_orig <- subset(dataset_orig, select = c(topmed_subject_id, age, carotid_plaque))
        dataset_new <- subset(dataset_new, select = c(topmed_subject_id, age, carotid_plaque))
        dataset <- dplyr::full_join(dataset_orig,
                                     dataset_new,
                                     by = c("topmed_subject_id", "age", "carotid_plaque"))
      
        # Remove NAs.
        dataset <- na.omit(dataset)
      
        # Convert to character.
        dataset$carotid_plaque <- as.character(dataset$carotid_plaque)
      
        return(dataset)
      
      }
      ```
<a id="carotid_plaque_1-jhs"></a>
  * ### atherosclerosis/carotid_plaque_1 -- **JHS Jackson Heart Study (JHS) Cohort**:
    * 2 component_study_variables
      * _phs000286.v5.pht001949.v1.phv00126009.v1_
        * No dbGap metadata available
         * varId _phv00126009_ not found in PIC-SURE data dictionary
      * _phs000286.v5.pht001978.v1.phv00128573.v1_
        * No dbGap metadata available
         * varId _phv00128573_ not found in PIC-SURE data dictionary
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset and rename variables.
        source_data <- phen_list$source_data
        dataset <- inner_join(source_data$pht001949,
                              source_data$pht001978,
                              by = "topmed_subject_id") %>%
          rename(age = AGE01, carotid_plaque = plq01)
      
        # Substitute the value of 'NA' to missing.
        dataset$carotid_plaque[dataset$carotid_plaque %in% 'NA'] <- NA
      
        # Remove records with NAs from dataset.
        dataset <- dataset[!is.na(dataset$age) & !is.na(dataset$carotid_plaque), ]
      
        # Convert character values to numeric.
        dataset <- mutate(dataset, age = as.numeric(age))
      
        return(dataset)
      }
      ```
<a id="carotid_plaque_1-mesa"></a>
  * ### atherosclerosis/carotid_plaque_1 -- **MESA Multi-Ethnic Study of Atherosclerosis (MESA) Cohort**:
    * 5 component_study_variables
      * _phs000209.v13.pht001111.v4.phv00082639.v2_
        * dbGap name: **age1c**
        * dbGap desc: **AGE**
        * dbGap table: **MESA_AirNRExamMain**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000209.v13.pht001116.v10.phv00084442.v3_
        * dbGap name: **age1c**
        * dbGap desc: **AGE**
        * dbGap table: **MESA_Exam1Main**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000209.v13.pht001116.v10.phv00084797.v2_
        * dbGap name: **rmorph1**
        * dbGap desc: **RIGHT MORPHOLOGY**
        * dbGap table: **MESA_Exam1Main**
         * PIC-SURE permissible values: CANNOT TELL, HETEROGENEOUS, HOMOGENEOUS, NO LESION
      * _phs000209.v13.pht001116.v10.phv00084802.v2_
        * dbGap name: **lmorph1**
        * dbGap desc: **LEFT MORPHOLOGY**
        * dbGap table: **MESA_Exam1Main**
         * PIC-SURE permissible values: CANNOT TELL, HETEROGENEOUS, HOMOGENEOUS, NO LESION
      * _phs000209.v13.pht001121.v3.phv00087071.v1_
        * dbGap name: **agefc**
        * dbGap desc: **AGE**
        * dbGap table: **MESA_FamilyExamMain**
         * No permissible values listed in PIC-SURE data dictionary
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        harmonized <- phen_list$source_data$pht001116 %>%
          # Recode 8 as NA.
          mutate_at(vars(rmorph1, lmorph1), funs(na_if(., "8"))) %>%
          # Filter out rows where left and right lesion morphology are missing.
          filter(!(is.na(rmorph1) & is.na(lmorph1))) %>%
          # Convert character vectors to numeric.
          mutate_if(is.character, as.numeric) %>%
          # Specify transformations will be by row.
          rowwise() %>%
          # Select ID and age and convert plaque to 0/1.
          transmute(
            topmed_subject_id,
            age = age1c,
            carotid_plaque = as.character(as.numeric(as.logical(max(rmorph1, lmorph1, na.rm = TRUE))))
          ) %>%
          # Exclude rows with missing data.
          na.omit()
        return(harmonized)
      }
      ```
<a id="carotid_stenosis_1"></a>
## atherosclerosis: **carotid_stenosis_1** (carotid_stenosis)
  Extent of narrowing of the carotid artery.
  * **Study (harmonization_units)**:
    * [CHS](#carotid_stenosis_1-chs)
    * [FHS](#carotid_stenosis_1-fhs)
    * [MESA](#carotid_stenosis_1-mesa)
  * **Metadata**:
    **`Data Type`**: encoded, **`Measurement Units`**: None, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2018-05-30 13:32:01
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C0007282
  * **DCC Harmonization Comments**:

    This variable was harmonized by calculating the maximum of left and right carotid artery stenosis grade where possible, or by selecting an existing maximum stenosis variable. Component study variables estimated narrowing using a combination of visual inspection and ultrasound Doppler values.
    
    #### CHS
    
    Baseline carotid ultrasound scans for the Original cohort were reread due to reader drift. Reread measurements of *_CHS_* subjects were used for harmonization.[^1]
    
    #### FHS
    
    *_FHS_* measured stenosis in the common carotid, internal carotid and bulb.
    
    #### MESA 
    
    *_MESA_* measured stenosis in the internal carotid and the bulb.
    
    The *_MESA_* Family subcohort is not included in this harmonized phenotype at this time.
    
    #### Instrumentation
    
    Studies used different instruments at their carotid ultrasound exams:
    
    | Study    | Instrument       |
    |----------|------------------|
    | CHS      | Toshiba SSA-270A |
    | FHS      | Toshiba SSH-140A |
    | MESA     | GE Logiq 700     |
    
    
    [^1]:[Documentation Without Data Collection Forms phd002779.1](https://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/document.cgi?study_id=phs000287.v6.p1&phd=2779)
    
<a id="carotid_stenosis_1-chs"></a>
  * ### atherosclerosis/carotid_stenosis_1 -- **CHS Cardiovascular Health Study (CHS) Cohort: an NHLBI-funded observational study of risk factors for cardiovascular disease in adults 65 years or older**:
    * 6 component_study_variables
      * _phs000287.v6.pht001452.v1.phv00100290.v1_
        * dbGap name: **PERSTAT**
        * dbGap desc: **COHORT**
        * dbGap table: **BASEBOTH**
         * PIC-SURE permissible values: NEW COHORT, OLD COHORT
      * _phs000287.v6.pht001452.v1.phv00100487.v1_
        * dbGap name: **AGEBL**
        * dbGap desc: **CALCULATED AGE AT BASELINE**
        * dbGap table: **BASEBOTH**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000287.v6.pht001473.v1.phv00101302.v1_
        * dbGap name: **PSTEN141**
        * dbGap desc: **YEAR 5 PERCENT STENOSIS, RT SIDE**
        * dbGap table: **ULTRAYR5**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000287.v6.pht001473.v1.phv00101303.v1_
        * dbGap name: **PSTEN241**
        * dbGap desc: **YEAR 5 PERCENT STENOSIS, LFT SIDE**
        * dbGap table: **ULTRAYR5**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000287.v6.pht001473.v1.phv00101313.v1_
        * dbGap name: **PSTEN155**
        * dbGap desc: **BL REREAD PERCENT STENOSIS, RT SIDE**
        * dbGap table: **ULTRAYR5**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000287.v6.pht001473.v1.phv00101314.v1_
        * dbGap name: **PSTEN255**
        * dbGap desc: **BL REREAD PERCENT STENOSIS, LFT SIDE**
        * dbGap table: **ULTRAYR5**
         * No permissible values listed in PIC-SURE data dictionary
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Join age data and lesion data.
        dataset <- plyr::join_all(phen_list$source_data)
      
        # Code any missing values to NA
        dataset$PSTEN141[dataset$PSTEN141 %in% '9'] <- NA
        dataset$PSTEN241[dataset$PSTEN241 %in% '9'] <- NA
        dataset$PSTEN155[dataset$PSTEN155 %in% '9'] <- NA
        dataset$PSTEN255[dataset$PSTEN255 %in% '9'] <- NA
      
        # Rename age and lesion variables.
        dataset <- rename(dataset, age = AGEBL,
                                   subcohort = PERSTAT,
                                   stenRT_aa = PSTEN141,
                                   stenLFT_aa = PSTEN241,
                                   stenRT_orig = PSTEN155,
                                   stenLFT_orig = PSTEN255)
      
        # Convert from character to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Get subset of cohort 1 and create stenosis variable.
        dataset_orig <- subset(dataset, select = c(topmed_subject_id,
                                                   age,
                                                   subcohort,
                                                   stenRT_orig,
                                                   stenLFT_orig))
      
        dataset_orig <- dataset_orig[dataset_orig$subcohort == 1, ] %>%
      
          # Only include rows with at least one measurement.
          filter(!(is.na(stenRT_orig) & is.na(stenLFT_orig)))
      
        # Isolate left and right stenosis variables.
        sten_lft_rt_1 <- c("stenRT_orig", "stenLFT_orig")
      
        # Take maximum stenosis value of left and right sides.
        dataset_orig$max_sten <- apply(dataset_orig[, sten_lft_rt_1], 1,
                                    function(x) ifelse(all(is.na(x)), NA, max(x, na.rm = TRUE)))
      
        # Get subset of cohort 2 and create stenosis variable.
        dataset_new <- subset(dataset, select = c(topmed_subject_id,
                                                  age,
                                                  subcohort,
                                                  stenRT_aa,
                                                  stenLFT_aa))
      
        dataset_new <- dataset_new[dataset_new$subcohort == 2, ] %>%
      
          # Only include rows with at least one measurement.
          filter(!(is.na(stenRT_aa) & is.na(stenLFT_aa)))
      
        # Isolate left and right stenosis variables.
        sten_lft_rt_2 <- c("stenRT_aa", "stenLFT_aa")
      
        # Take maximum stenosis value of left and right sides.
        dataset_new$max_sten <- apply(dataset_new[, sten_lft_rt_2], 1,
                                    function(x) ifelse(all(is.na(x)), NA, max(x, na.rm = TRUE)))
      
      
        # Combine max stenosis variable from both cohorts.
        dataset_orig <- subset(dataset_orig, select = c(topmed_subject_id, age, max_sten))
        dataset_new <- subset(dataset_new, select = c(topmed_subject_id, age, max_sten))
        dataset <- dplyr::full_join(dataset_orig,
                                     dataset_new,
                                     by = c("topmed_subject_id", "age", "max_sten")) %>%
      
          # Rename max_sten to stenosis
          rename(carotid_stenosis = max_sten) %>%
      
          # Convert stenosis to character and select topmed ID and age variables.
          transmute(topmed_subject_id, age, carotid_stenosis = as.character(carotid_stenosis))
      
      
      
        # Remove NAs.
        dataset <- na.omit(dataset)
      
      
        return(dataset)
      
      }
      ```
<a id="carotid_stenosis_1-fhs"></a>
  * ### atherosclerosis/carotid_stenosis_1 -- **FHS Framingham Cohort**:
    * 3 component_study_variables
      * _phs000007.v29.pht000083.v6.phv00021700.v5_
        * dbGap name: **R_STENO**
        * dbGap desc: **PERCENT STENOSIS ON THE RIGHT**
        * dbGap table: **carotid1_6s**
         * PIC-SURE permissible values: 1-24 %, 100 %, 25-49 %, 50-74 %, 75-99 %, NONE
      * _phs000007.v29.pht000083.v6.phv00021702.v5_
        * dbGap name: **L_STENO**
        * dbGap desc: **PERCENT STENOSIS ON THE LEFT**
        * dbGap table: **carotid1_6s**
         * PIC-SURE permissible values: 1-24 %, 100 %, 25-49 %, 50-74 %, 75-99 %, NONE
      * _phs000007.v29.pht003099.v4.phv00177940.v4_
        * dbGap name: **age6**
        * dbGap desc: **Age at Exam 6**
        * dbGap table: **vr_dates_2019_a_1175s**
         * No permissible values listed in PIC-SURE data dictionary
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        harmonized <- phen_list$source_data$pht000083 %>%
          # Only include rows with at least one measurement.
          filter(!(is.na(R_STENO) & is.na(L_STENO))) %>%
          # Convert character vectors to numeric.
          mutate_if(is.character, as.numeric) %>%
          # Perform calculations row-wise.
          rowwise() %>%
          # Code stenosis as max of left and right stenosis.
          mutate(carotid_stenosis = as.character(max(R_STENO, L_STENO, na.rm = TRUE))) %>%
          # Join stenosis and age data.
          left_join(phen_list$source_data$pht003099, "topmed_subject_id") %>%
          # Select relevant variables, and rename/convert age variable.
          transmute(topmed_subject_id, carotid_stenosis, age = as.numeric(age6)) %>%
          # Exclude rows with missing data.
          na.omit()
        return(harmonized)
      }
      ```
<a id="carotid_stenosis_1-mesa"></a>
  * ### atherosclerosis/carotid_stenosis_1 -- **MESA Multi-Ethnic Study of Atherosclerosis (MESA) Cohort**:
    * 5 component_study_variables
      * _phs000209.v13.pht001111.v4.phv00082639.v2_
        * dbGap name: **age1c**
        * dbGap desc: **AGE**
        * dbGap table: **MESA_AirNRExamMain**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000209.v13.pht001116.v10.phv00084442.v3_
        * dbGap name: **age1c**
        * dbGap desc: **AGE**
        * dbGap table: **MESA_Exam1Main**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000209.v13.pht001116.v10.phv00084798.v2_
        * dbGap name: **rsten1**
        * dbGap desc: **RIGHT STENOSIS**
        * dbGap table: **MESA_Exam1Main**
         * PIC-SURE permissible values: 1 - 24%, 100%, 25 - 49%, 50 - 74%, 75 - 99%, BAD IMAGE/NORMAL DOPPLER, CAN'T TELL, NO LESION
      * _phs000209.v13.pht001116.v10.phv00084803.v2_
        * dbGap name: **lsten1**
        * dbGap desc: **LEFT STENOSIS**
        * dbGap table: **MESA_Exam1Main**
         * PIC-SURE permissible values: 1 - 24%, 100%, 25 - 49%, 50 - 74%, 75 - 99%, BAD IMAGE/NORMAL DOPPLER, CAN'T TELL, NO LESION
      * _phs000209.v13.pht001121.v3.phv00087071.v1_
        * dbGap name: **agefc**
        * dbGap desc: **AGE**
        * dbGap table: **MESA_FamilyExamMain**
         * No permissible values listed in PIC-SURE data dictionary
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        harmonized <- phen_list$source_data$pht001116 %>%
          # Convert character vectors to numeric.
          mutate_if(is.character, as.numeric) %>%
          # Recode 6 as 0, and 7 and 8 as NA.
          mutate_at(vars(rsten1, lsten1), funs(ifelse(. == 6, 0, .) %>% na_if(7) %>% na_if(8))) %>%
          # Specify transformations will be row-wise.
          rowwise() %>%
          # Subset to rows with values for at least one stenosis variable.
          filter(!(is.na(rsten1) & is.na(lsten1))) %>%
          # Convert and rename age, and calculate maximum stenosis.
          transmute(topmed_subject_id, age = as.numeric(age1c),
                    carotid_stenosis = as.character(max(rsten1, lsten1, na.rm = TRUE))) %>%
          # Exclude rows with any missing data.
          na.omit()
        return(harmonized)
      }
      ```
<a id="cimt_1"></a>
## atherosclerosis: **cimt_1** (cimt)
  Common carotid intima-media thickness, calculated as the mean of two values: mean of multiple thickness estimates from the left far wall and from the right far wall.
  * **Study (harmonization_units)**:
    * [ARIC](#cimt_1-aric)
    * [CHS](#cimt_1-chs)
    * [FHS](#cimt_1-fhs)
    * [JHS](#cimt_1-jhs)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: mm, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2018-05-30 11:44:19
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C1960466
  * **DCC Harmonization Comments**:

    This variable was harmonized by taking the mean of mean left common carotid artery far wall intima-media thickness (IMT) and mean right common carotid artery far wall IMT. In cases where values for mean left far wall thickness or mean right far wall thickness was missing, mean IMT was calculated ignoring the missing values. Where possible, this variable was derived with component measures of IMT, but in cases where the components were not available in dbGaP, mean-of-mean IMT variables derived by the studies were used for harmonization.
    
    #### MESA
    
    Mean left IMT was not available for the *_MESA_* Family subcohort, so the only component study variable used for this group is mean right IMT.
    
    
    #### Instrumentation
    
    Studies used different instruments at their carotid ultrasound exams:
    
    | Study | Instrument                 |
    |-------|----------------------------|
    | Amish | ATL Phillps HDI 5000       |
    | ARIC  | Biosound 2000 II SA        |
    | CHS   | Toshiba SSA-270A           |
    | FHS   | Toshiba SSH-140A           |
    | JHS   | Hewlett Packard SONOS 4500 |
    | MESA  | GE Logiq 700               |
    
<a id="cimt_1-aric"></a>
  * ### atherosclerosis/cimt_1 -- **ARIC Atherosclerosis Risk in Communities (ARIC) Cohort**:
    * 7 component_study_variables
      * _phs000280.v3.pht004063.v1.phv00204712.v1_
        * dbGap name: **V1AGE01**
        * dbGap desc: **Age at visit 1 [Cohort. Visit 1]**
        * dbGap table: **DERIVE13**
         * varId _phv00204712_ not found in PIC-SURE data dictionary
      * _phs000280.v3.pht004207.v1.phv00211095.v1_
        * dbGap name: **LOPAAV45**
        * dbGap desc: **Average far wall width, left common carotid: optimal angle [Ultrasound Derived Data. UBMD4. Visit 1]**
        * dbGap table: **UBMD4**
         * varId _phv00211095_ not found in PIC-SURE data dictionary
      * _phs000280.v3.pht004207.v1.phv00211096.v1_
        * dbGap name: **LANAAV45**
        * dbGap desc: **Average far wall width, left common carotid: anterior angle [Ultrasound Derived Data. UBMD4. Visit 1]**
        * dbGap table: **UBMD4**
         * varId _phv00211096_ not found in PIC-SURE data dictionary
      * _phs000280.v3.pht004207.v1.phv00211097.v1_
        * dbGap name: **LPOAAV45**
        * dbGap desc: **Average far wall width, left common carotid: posterior angle [Ultrasound Derived Data. UBMD4. Visit 1]**
        * dbGap table: **UBMD4**
         * varId _phv00211097_ not found in PIC-SURE data dictionary
      * _phs000280.v3.pht004207.v1.phv00211101.v1_
        * dbGap name: **ROPAAV45**
        * dbGap desc: **Average far wall width, right common carotid: optimal angle [Ultrasound Derived Data. UBMD4. Visit 1]**
        * dbGap table: **UBMD4**
         * varId _phv00211101_ not found in PIC-SURE data dictionary
      * _phs000280.v3.pht004207.v1.phv00211102.v1_
        * dbGap name: **RANAAV45**
        * dbGap desc: **Average far wall width, right common carotid: anterior angle [Ultrasound Derived Data. UBMD4. Visit 1]**
        * dbGap table: **UBMD4**
         * varId _phv00211102_ not found in PIC-SURE data dictionary
      * _phs000280.v3.pht004207.v1.phv00211103.v1_
        * dbGap name: **RPOAAV45**
        * dbGap desc: **Average far wall width, right common carotid: posterior angle [Ultrasound Derived Data. UBMD4. Visit 1]**
        * dbGap table: **UBMD4**
         * varId _phv00211103_ not found in PIC-SURE data dictionary
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(magrittr)
      
        # Join dataset containing Age with dataset containing IMT.
        dataset <- plyr::join_all(phen_list$source_data)
      
        # Rename variables.
        dataset <- rename(dataset,
                          age = V1AGE01,
                          ropt = ROPAAV45,
                          rant = RANAAV45,
                          rpos = RPOAAV45,
                          lopt = LOPAAV45,
                          lant = LANAAV45,
                          lpos = LPOAAV45)
      
        # Convert from character to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Calculate mean of the Right IMT measurements.
        dataset_R <- subset(dataset, select = c(topmed_subject_id, ropt, rant, rpos))
        dataset$mean_imt_R <- rowMeans(subset(dataset_R, select = -c(topmed_subject_id)), na.rm = TRUE)
      
        # Calculate mean of the Left IMT measurements.
        dataset_L <- subset(dataset, select = c(topmed_subject_id, lopt, lant, lpos))
        dataset$mean_imt_L <- rowMeans(subset(dataset_L, select = -c(topmed_subject_id)), na.rm = TRUE)
      
        # Calculate mean of Right IMT mean measurement and Left IMT mean measurement.
        means_RL <- subset(dataset, select = c(topmed_subject_id, mean_imt_R, mean_imt_L))
        dataset$cimt <- rowMeans(subset(means_RL, select = -c(topmed_subject_id)), na.rm = TRUE)
      
        # Include only relevant variables in final dataset.
        dataset <- subset(dataset, select = c(topmed_subject_id, age, cimt))
      
        # Remove NAs.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="cimt_1-chs"></a>
  * ### atherosclerosis/cimt_1 -- **CHS Cardiovascular Health Study (CHS) Cohort: an NHLBI-funded observational study of risk factors for cardiovascular disease in adults 65 years or older**:
    * 2 component_study_variables
      * _phs000287.v6.pht001452.v1.phv00100487.v1_
        * dbGap name: **AGEBL**
        * dbGap desc: **CALCULATED AGE AT BASELINE**
        * dbGap table: **BASEBOTH**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000287.v6.pht001468.v1.phv00100864.v1_
        * dbGap name: **CCA_FWME**
        * dbGap desc: **Mean of the mean far wall intima media t (var=CCA_FWME)**
        * dbGap table: **IMT_POLACK**
         * No permissible values listed in PIC-SURE data dictionary
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Join age and imt data into one dataset.
        dataset <- plyr::join_all(phen_list$source_data) %>%
      
          # Rename age and far wall mean cimt variables.
          rename(age = AGEBL, cimt = CCA_FWME) %>%
      
          # Convert from character to numeric.
          mutate_if(is.character, as.numeric) %>%
      
          # Remove NAs
          na.omit() %>%
      
          return()
      }
      ```
<a id="cimt_1-fhs"></a>
  * ### atherosclerosis/cimt_1 -- **FHS Framingham Cohort**:
    * 2 component_study_variables
      * _phs000007.v29.pht000907.v5.phv00076366.v4_
        * dbGap name: **cca_fw_mean_imt**
        * dbGap desc: **Mean of the mean common carotid IMT far wall of both sides**
        * dbGap table: **imtcarotid1_6s**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000007.v29.pht003099.v4.phv00177940.v4_
        * dbGap name: **age6**
        * dbGap desc: **Age at Exam 6**
        * dbGap table: **vr_dates_2019_a_1175s**
         * No permissible values listed in PIC-SURE data dictionary
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        source_data <- phen_list$source_data
        harmonized <- source_data$pht000907 %>%
          # Join age dataset and cimt dataset.
          full_join(source_data$pht003099, "topmed_subject_id") %>%
          # Select, convert and rename variables.
          transmute(topmed_subject_id,
                    cimt = as.numeric(cca_fw_mean_imt),
                    age = as.numeric(age6)) %>%
          # Exclude rows with missing data.
          na.omit()
        return(harmonized)
      }
      ```
<a id="cimt_1-jhs"></a>
  * ### atherosclerosis/cimt_1 -- **JHS Jackson Heart Study (JHS) Cohort**:
    * 7 component_study_variables
      * _phs000286.v5.pht001949.v1.phv00126009.v1_
        * No dbGap metadata available
         * varId _phv00126009_ not found in PIC-SURE data dictionary
      * _phs000286.v5.pht001978.v1.phv00128531.v1_
        * No dbGap metadata available
         * varId _phv00128531_ not found in PIC-SURE data dictionary
      * _phs000286.v5.pht001978.v1.phv00128532.v1_
        * No dbGap metadata available
         * varId _phv00128532_ not found in PIC-SURE data dictionary
      * _phs000286.v5.pht001978.v1.phv00128533.v1_
        * No dbGap metadata available
         * varId _phv00128533_ not found in PIC-SURE data dictionary
      * _phs000286.v5.pht001978.v1.phv00128534.v1_
        * No dbGap metadata available
         * varId _phv00128534_ not found in PIC-SURE data dictionary
      * _phs000286.v5.pht001978.v1.phv00128535.v1_
        * No dbGap metadata available
         * varId _phv00128535_ not found in PIC-SURE data dictionary
      * _phs000286.v5.pht001978.v1.phv00128536.v1_
        * No dbGap metadata available
         * varId _phv00128536_ not found in PIC-SURE data dictionary
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset and rename variables.
        source_data <- phen_list$source_data
        dataset <- inner_join(source_data$pht001949,
                              source_data$pht001978,
                              by = "topmed_subject_id") %>%
          rename(age = AGE01)
      
        # Substitute the value of 'NA' to missing.
        dataset$lcl_av45[dataset$lcl_av45 %in% 'NA'] <- NA
        dataset$lca_av45[dataset$lca_av45 %in% 'NA'] <- NA
        dataset$lcp_av45[dataset$lcp_av45 %in% 'NA'] <- NA
        dataset$rcl_av45[dataset$rcl_av45 %in% 'NA'] <- NA
        dataset$rca_av45[dataset$rca_av45 %in% 'NA'] <- NA
        dataset$rcp_av45[dataset$rcp_av45 %in% 'NA'] <- NA
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Take mean of the 3 measurements from the left common carotid artery.
        left <- c("lcl_av45", "lca_av45", "lcp_av45")
        dataset <- mutate(dataset, left_av = rowMeans(dataset[, left], na.rm = TRUE))
      
        # Take mean of the 3 measurements from the right common carotid artery.
        right <- c("rcl_av45", "rca_av45", "rcp_av45")
        dataset <- mutate(dataset, right_av = rowMeans(dataset[, right], na.rm = TRUE))
      
        # Take mean of the left and right means.
        av <- c("left_av", "right_av")
        dataset <- mutate(dataset, cimt = rowMeans(dataset[, av], na.rm = TRUE))
      
        # Select the columns for output.
        dataset <- select(dataset, topmed_subject_id, age, cimt)
      
        # Remove records with NAs from dataset.
        dataset <- dataset[!is.na(dataset$age) & !is.na(dataset$cimt), ]
      
        return(dataset)
      }
      ```
<a id="cimt_2"></a>
## atherosclerosis: **cimt_2** (cimt)
  Common carotid intima-media thickness, calculated as the mean of four values: maximum of multiple thickness estimates from the left far wall, left near wall, right far wall, and right near wall.
  * **Study (harmonization_units)**:
    * [ARIC](#cimt_2-aric)
    * [CHS](#cimt_2-chs)
    * [FHS](#cimt_2-fhs)
    * [JHS](#cimt_2-jhs)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: mm, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2018-05-30 12:10:37
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C1960466
  * **DCC Harmonization Comments**:

    This variable was harmonized by taking the mean of the following four measurements of common carotid intima-media thickness (IMT): maximum left near wall IMT, maximum left far wall IMT, maximum right near wall IMT and maximum right far wall IMT. In cases where values for individual measures of IMT were missing, mean IMT was calculated ignoring the missing values. Where possible, this variable was derived with component measures of IMT, but in cases where the components were not available in dbGaP, mean-of-max IMT variables derived by the studies were used for harmonization.
    
    #### CHS
    
    Baseline carotid ultrasound scans for the Original cohort were reread due to reader drift. Reread measurements of *_CHS_* subjects were used for harmonization.[^1]
    
    #### FHS
    
    Measurements of *_FHS_* subjects were taken in systole and diastole. Measurements in diastole were used for harmonization.
    
    #### Instrumentation
    
    Studies used different instruments at their carotid ultrasound exams:
    
    | Study | Instrument                 |
    |-------|----------------------------|
    | ARIC  | Biosound 2000 II SA        |
    | CHS   | Toshiba SSA-270A           |
    | FHS   | Toshiba SSH-140A           |
    | JHS   | Hewlett Packard SONOS 4500 |
    | MESA  | GE Logiq 700               |
    
    
    [^1]:[Documentation Without Data Collection Forms phd002779.1](https://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/document.cgi?study_id=phs000287.v6.p1&phd=2779)
    
<a id="cimt_2-aric"></a>
  * ### atherosclerosis/cimt_2 -- **ARIC Atherosclerosis Risk in Communities (ARIC) Cohort**:
    * 13 component_study_variables
      * _phs000280.v3.pht004063.v1.phv00204712.v1_
        * dbGap name: **V1AGE01**
        * dbGap desc: **Age at visit 1 [Cohort. Visit 1]**
        * dbGap table: **DERIVE13**
         * varId _phv00204712_ not found in PIC-SURE data dictionary
      * _phs000280.v3.pht004207.v1.phv00211053.v1_
        * dbGap name: **LOPAMX23**
        * dbGap desc: **Maximum near wall width, left common carotid: optimal angle [Ultrasound Derived Data. UBMD4. Visit 1]**
        * dbGap table: **UBMD4**
         * varId _phv00211053_ not found in PIC-SURE data dictionary
      * _phs000280.v3.pht004207.v1.phv00211054.v1_
        * dbGap name: **LANAMX23**
        * dbGap desc: **Maximum near wall width, left common carotid: anterior angle [Ultrasound Derived Data. UBMD4. Visit 1]**
        * dbGap table: **UBMD4**
         * varId _phv00211054_ not found in PIC-SURE data dictionary
      * _phs000280.v3.pht004207.v1.phv00211055.v1_
        * dbGap name: **LPOAMX23**
        * dbGap desc: **Maximum near wall width, left common carotid: posterior angle [Ultrasound Derived Data. UBMD4. Visit 1]**
        * dbGap table: **UBMD4**
         * varId _phv00211055_ not found in PIC-SURE data dictionary
      * _phs000280.v3.pht004207.v1.phv00211059.v1_
        * dbGap name: **ROPAMX23**
        * dbGap desc: **Maximum near wall width, right common carotid: optimal angle [Ultrasound Derived Data. UBMD4. Visit 1]**
        * dbGap table: **UBMD4**
         * varId _phv00211059_ not found in PIC-SURE data dictionary
      * _phs000280.v3.pht004207.v1.phv00211060.v1_
        * dbGap name: **RANAMX23**
        * dbGap desc: **Maximum near wall width, right common carotid: anterior angle [Ultrasound Derived Data. UBMD4. Visit 1]**
        * dbGap table: **UBMD4**
         * varId _phv00211060_ not found in PIC-SURE data dictionary
      * _phs000280.v3.pht004207.v1.phv00211061.v1_
        * dbGap name: **RPOAMX23**
        * dbGap desc: **Maximum near wall width, right common carotid: posterior angle [Ultrasound Derived Data. UBMD4. Visit 1]**
        * dbGap table: **UBMD4**
         * varId _phv00211061_ not found in PIC-SURE data dictionary
      * _phs000280.v3.pht004207.v1.phv00211081.v1_
        * dbGap name: **LOPAMX45**
        * dbGap desc: **Maximum far wall width, left common carotid: optimal angle [Ultrasound Derived Data. UBMD4. Visit 1]**
        * dbGap table: **UBMD4**
         * varId _phv00211081_ not found in PIC-SURE data dictionary
      * _phs000280.v3.pht004207.v1.phv00211082.v1_
        * dbGap name: **LANAMX45**
        * dbGap desc: **Maximum far wall width, left common carotid: anterior angle [Ultrasound Derived Data. UBMD4. Visit 1]**
        * dbGap table: **UBMD4**
         * varId _phv00211082_ not found in PIC-SURE data dictionary
      * _phs000280.v3.pht004207.v1.phv00211083.v1_
        * dbGap name: **LPOAMX45**
        * dbGap desc: **Maximum far wall width, left common carotid: posterior angle [Ultrasound Derived Data. UBMD4. Visit 1]**
        * dbGap table: **UBMD4**
         * varId _phv00211083_ not found in PIC-SURE data dictionary
      * _phs000280.v3.pht004207.v1.phv00211087.v1_
        * dbGap name: **ROPAMX45**
        * dbGap desc: **Maximum far wall width, right common carotid: optimal angle [Ultrasound Derived Data. UBMD4. Visit 1]**
        * dbGap table: **UBMD4**
         * varId _phv00211087_ not found in PIC-SURE data dictionary
      * _phs000280.v3.pht004207.v1.phv00211088.v1_
        * dbGap name: **RANAMX45**
        * dbGap desc: **Maximum far wall width, right common carotid: anterior angle [Ultrasound Derived Data. UBMD4. Visit 1]**
        * dbGap table: **UBMD4**
         * varId _phv00211088_ not found in PIC-SURE data dictionary
      * _phs000280.v3.pht004207.v1.phv00211089.v1_
        * dbGap name: **RPOAMX45**
        * dbGap desc: **Maximum far wall width, right common carotid: posterior angle [Ultrasound Derived Data. UBMD4. Visit 1]**
        * dbGap table: **UBMD4**
         * varId _phv00211089_ not found in PIC-SURE data dictionary
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(magrittr)
      
        # Join dataset containing Age with dataset containing IMT.
        dataset_0 <- plyr::join_all(phen_list$source_data)
      
        # Rename variables.
        dataset_0 <- rename(dataset_0,
                          age = V1AGE01,
                          lopt_nw = LOPAMX23,
                          lant_nw = LANAMX23,
                          lpos_nw = LPOAMX23,
                          ropt_nw = ROPAMX23,
                          rant_nw = RANAMX23,
                          rpos_nw = RPOAMX23,
                          lopt_fw = LOPAMX45,
                          lant_fw = LANAMX45,
                          lpos_fw = LPOAMX45,
                          ropt_fw = ROPAMX45,
                          rant_fw = RANAMX45,
                          rpos_fw = RPOAMX45)
      
        # Convert from character to numeric.
        dataset_0 <- mutate_if(dataset_0, is.character, as.numeric)
      
        # Find max of Left Near Wall IMT.
        L_nw_ds <- subset(dataset_0, select = c(lopt_nw, lant_nw, lpos_nw))
        dataset_0$L_nw_max <- apply(L_nw_ds, 1,
                                    function(x) ifelse(all(is.na(x)), NA, max(x, na.rm = TRUE)))
      
        # Find max of Right Near Wall IMT.
        R_nw_ds <- subset(dataset_0, select = c(ropt_nw, rant_nw, rpos_nw))
        dataset_0$R_nw_max <- apply(R_nw_ds, 1,
                                    function(x) ifelse(all(is.na(x)), NA, max(x, na.rm = TRUE)))
      
        # Find max of Left Far Wall IMT.
        L_fw_ds <- subset(dataset_0, select = c(lopt_fw, lant_fw, lpos_fw))
        dataset_0$L_fw_max <- apply(L_fw_ds, 1,
                                    function(x) ifelse(all(is.na(x)), NA, max(x, na.rm = TRUE)))
      
        # Find max of Right Far Wall IMT.
        R_fw_ds <- subset(dataset_0, select = c(ropt_fw, rant_fw, rpos_fw))
        dataset_0$R_fw_max <- apply(R_fw_ds, 1,
                                    function(x) ifelse(all(is.na(x)), NA, max(x, na.rm = TRUE)))
      
        # Find mean of max LNW, RNW, LFW, RFW.
        maxCols <- subset(dataset_0, select = c(L_nw_max, R_nw_max, L_fw_max, R_fw_max))
        dataset_0$cimt <- rowMeans(maxCols)
      
        # Create harmonized cimt dataset.
        dataset <- subset(dataset_0, select = c(topmed_subject_id, age, cimt))
      
        # Remove NAs.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="cimt_2-chs"></a>
  * ### atherosclerosis/cimt_2 -- **CHS Cardiovascular Health Study (CHS) Cohort: an NHLBI-funded observational study of risk factors for cardiovascular disease in adults 65 years or older**:
    * 10 component_study_variables
      * _phs000287.v6.pht001452.v1.phv00100290.v1_
        * dbGap name: **PERSTAT**
        * dbGap desc: **COHORT**
        * dbGap table: **BASEBOTH**
         * PIC-SURE permissible values: NEW COHORT, OLD COHORT
      * _phs000287.v6.pht001452.v1.phv00100487.v1_
        * dbGap name: **AGEBL**
        * dbGap desc: **CALCULATED AGE AT BASELINE**
        * dbGap table: **BASEBOTH**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000287.v6.pht001473.v1.phv00101238.v1_
        * dbGap name: **NMAX155**
        * dbGap desc: **BL REREAD NEAR WALL MAX, R. COMMON**
        * dbGap table: **ULTRAYR5**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000287.v6.pht001473.v1.phv00101239.v1_
        * dbGap name: **FMAX155**
        * dbGap desc: **BL REREAD FAR WALL MAX, R. COMMON**
        * dbGap table: **ULTRAYR5**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000287.v6.pht001473.v1.phv00101250.v1_
        * dbGap name: **NMAX555**
        * dbGap desc: **BL REREAD NEAR WALL MAX, L. COMMON**
        * dbGap table: **ULTRAYR5**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000287.v6.pht001473.v1.phv00101251.v1_
        * dbGap name: **FMAX555**
        * dbGap desc: **BL REREAD FAR WALL MAX, L. COMMON**
        * dbGap table: **ULTRAYR5**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000287.v6.pht001473.v1.phv00101264.v1_
        * dbGap name: **NMAX141**
        * dbGap desc: **YEAR 5 NEAR WALL MAX, R. COMMON**
        * dbGap table: **ULTRAYR5**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000287.v6.pht001473.v1.phv00101265.v1_
        * dbGap name: **FMAX141**
        * dbGap desc: **YEAR 5 FAR WALL MAX, R. COMMON**
        * dbGap table: **ULTRAYR5**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000287.v6.pht001473.v1.phv00101276.v1_
        * dbGap name: **NMAX541**
        * dbGap desc: **YEAR 5 NEAR WALL MAX, L. COMMON**
        * dbGap table: **ULTRAYR5**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000287.v6.pht001473.v1.phv00101277.v1_
        * dbGap name: **FMAX541**
        * dbGap desc: **YEAR 5 FAR WALL MAX, L. COMMON**
        * dbGap table: **ULTRAYR5**
         * No permissible values listed in PIC-SURE data dictionary
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(magrittr)
      
        # Join dataset containing Age with dataset containing IMT.
        dataset_0 <- plyr::join_all(phen_list$source_data)
      
        # Rename variables.
        dataset_0 <- rename(dataset_0,
                            age = AGEBL,
                            subcohort = PERSTAT,
                            O_R_max_nw = NMAX155,
                            O_R_max_fw = FMAX155,
                            O_L_max_nw = NMAX555,
                            O_L_max_fw = FMAX555,
                            A_R_max_nw = NMAX141,
                            A_R_max_fw = FMAX141,
                            A_L_max_nw = NMAX541,
                            A_L_max_fw = FMAX541)
      
        # Convert from character to numeric.
        dataset_0 <- mutate_if(dataset_0, is.character, as.numeric)
      
        # Subset cohort 1 and create cimt variable.
        dataset_orig <- subset(dataset_0, select = c(topmed_subject_id,
                                                     age,
                                                     subcohort,
                                                     O_R_max_nw,
                                                     O_R_max_fw,
                                                     O_L_max_nw,
                                                     O_L_max_fw))
      
        dataset_orig <- dataset_orig[dataset_orig$subcohort == 1, ]
        maxCols <- c("O_R_max_nw", "O_R_max_fw", "O_L_max_nw", "O_L_max_fw")
        dataset_orig$cimt <- rowMeans(dataset_orig[, maxCols], na.rm = TRUE)
      
        # Subset cohort 2 and create cimt variable.
        dataset_new <- subset(dataset_0, select = c(topmed_subject_id,
                                                    age,
                                                    subcohort,
                                                    A_R_max_nw,
                                                    A_R_max_fw,
                                                    A_L_max_nw,
                                                    A_L_max_fw))
      
        dataset_new <- dataset_new[dataset_new$subcohort == 2, ]
        maxCols <- c("A_R_max_nw", "A_R_max_fw", "A_L_max_nw", "A_L_max_fw")
        dataset_new$cimt <- rowMeans(dataset_new[, maxCols], na.rm = TRUE)
      
        # Join cohort 1 and cohort 2 cimt variable by Topmed IDs.
        dataset_orig_1 <- subset(dataset_orig, select = c(topmed_subject_id, age, cimt))
        dataset_new_1 <- subset(dataset_new, select = c(topmed_subject_id, age, cimt))
        dataset <- dplyr::full_join(dataset_orig_1,
                                    dataset_new_1,
                                    by = c("topmed_subject_id", "age", "cimt"))
      
        # Remove NAs.
        dataset <- na.omit(dataset)
      }
      ```
<a id="cimt_2-fhs"></a>
  * ### atherosclerosis/cimt_2 -- **FHS Framingham Cohort**:
    * 2 component_study_variables
      * _phs000007.v29.pht000083.v6.phv00021728.v5_
        * dbGap name: **CCD_MEMX**
        * dbGap desc: **MEAN OF MAX IMT FOR BOTH LEFT AND RIGHT COMMON CAROTID ARTERIES IN DIASTOLE (MM)**
        * dbGap table: **carotid1_6s**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000007.v29.pht003099.v4.phv00177940.v4_
        * dbGap name: **age6**
        * dbGap desc: **Age at Exam 6**
        * dbGap table: **vr_dates_2019_a_1175s**
         * No permissible values listed in PIC-SURE data dictionary
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        source_data <- phen_list$source_data
        # Join ultrasound dataset with age dataset.
        harmonized <- left_join(source_data$pht000083, source_data$pht003099,
                                "topmed_subject_id") %>%
          # Rename variables and convert to numeric.
          transmute(topmed_subject_id, cimt = as.numeric(CCD_MEMX), age = as.numeric(age6)) %>%
          # Exclude rows with missing data.
          na.omit()
        return(harmonized)
      }
      ```
<a id="cimt_2-jhs"></a>
  * ### atherosclerosis/cimt_2 -- **JHS Jackson Heart Study (JHS) Cohort**:
    * 13 component_study_variables
      * _phs000286.v5.pht001949.v1.phv00126009.v1_
        * No dbGap metadata available
         * varId _phv00126009_ not found in PIC-SURE data dictionary
      * _phs000286.v5.pht001978.v1.phv00128541.v1_
        * No dbGap metadata available
         * varId _phv00128541_ not found in PIC-SURE data dictionary
      * _phs000286.v5.pht001978.v1.phv00128542.v1_
        * No dbGap metadata available
         * varId _phv00128542_ not found in PIC-SURE data dictionary
      * _phs000286.v5.pht001978.v1.phv00128543.v1_
        * No dbGap metadata available
         * varId _phv00128543_ not found in PIC-SURE data dictionary
      * _phs000286.v5.pht001978.v1.phv00128544.v1_
        * No dbGap metadata available
         * varId _phv00128544_ not found in PIC-SURE data dictionary
      * _phs000286.v5.pht001978.v1.phv00128545.v1_
        * No dbGap metadata available
         * varId _phv00128545_ not found in PIC-SURE data dictionary
      * _phs000286.v5.pht001978.v1.phv00128546.v1_
        * No dbGap metadata available
         * varId _phv00128546_ not found in PIC-SURE data dictionary
      * _phs000286.v5.pht001978.v1.phv00128561.v1_
        * No dbGap metadata available
         * varId _phv00128561_ not found in PIC-SURE data dictionary
      * _phs000286.v5.pht001978.v1.phv00128562.v1_
        * No dbGap metadata available
         * varId _phv00128562_ not found in PIC-SURE data dictionary
      * _phs000286.v5.pht001978.v1.phv00128563.v1_
        * No dbGap metadata available
         * varId _phv00128563_ not found in PIC-SURE data dictionary
      * _phs000286.v5.pht001978.v1.phv00128564.v1_
        * No dbGap metadata available
         * varId _phv00128564_ not found in PIC-SURE data dictionary
      * _phs000286.v5.pht001978.v1.phv00128565.v1_
        * No dbGap metadata available
         * varId _phv00128565_ not found in PIC-SURE data dictionary
      * _phs000286.v5.pht001978.v1.phv00128566.v1_
        * No dbGap metadata available
         * varId _phv00128566_ not found in PIC-SURE data dictionary
    * **Function:**
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset and rename variables.
        source_data <- phen_list$source_data
        dataset <- inner_join(source_data$pht001949,
                              source_data$pht001978,
                              by = "topmed_subject_id") %>%
          rename(age = AGE01)
      
        # Substitute the value of 'NA' to missing.
        dataset$lcl_mx45[dataset$lcl_mx45 %in% 'NA'] <- NA
        dataset$lca_mx45[dataset$lca_mx45 %in% 'NA'] <- NA
        dataset$lcp_mx45[dataset$lcp_mx45 %in% 'NA'] <- NA
        dataset$rcl_mx45[dataset$rcl_mx45 %in% 'NA'] <- NA
        dataset$rca_mx45[dataset$rca_mx45 %in% 'NA'] <- NA
        dataset$rcp_mx45[dataset$rcp_mx45 %in% 'NA'] <- NA
        dataset$lcl_mx23[dataset$lcl_mx23 %in% 'NA'] <- NA
        dataset$lca_mx23[dataset$lca_mx23 %in% 'NA'] <- NA
        dataset$lcp_mx23[dataset$lcp_mx23 %in% 'NA'] <- NA
        dataset$rcl_mx23[dataset$rcl_mx23 %in% 'NA'] <- NA
        dataset$rca_mx23[dataset$rca_mx23 %in% 'NA'] <- NA
        dataset$rcp_mx23[dataset$rcp_mx23 %in% 'NA'] <- NA
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Take max of the 3 measurements from the left common carotid artery far wall.
        left_fw <- c("lca_mx45", "lcl_mx45", "lcp_mx45")
        dataset$left_fw_max <- apply(dataset[, left_fw],
                                     1,
                                     function(x) ifelse(all(is.na(x)),
                                                        NA,
                                                        max(x, na.rm = TRUE)))
      
        # Take max of the 3 measurements from the right common carotid artery far wall.
        right_fw <- c("rca_mx45", "rcl_mx45", "rcp_mx45")
        dataset$right_fw_max <- apply(dataset[, right_fw],
                                      1,
                                      function(x) ifelse(all(is.na(x)),
                                                         NA,
                                                         max(x, na.rm = TRUE)))
      
        # Take max of the 3 measurements from the left common carotid artery near wall.
        left_nw <- c("lca_mx23", "lcl_mx23", "lcp_mx23")
        dataset$left_nw_max <- apply(dataset[, left_nw],
                                     1,
                                     function(x) ifelse(all(is.na(x)),
                                                        NA,
                                                        max(x, na.rm = TRUE)))
      
        # Take max of the 3 measurements from the right common carotid artery near wall.
        right_nw <- c("rca_mx23", "rcl_mx23", "rcp_mx23")
        dataset$right_nw_max <- apply(dataset[, right_nw],
                                      1,
                                      function(x) ifelse(all(is.na(x)),
                                                         NA,
                                                         max(x, na.rm = TRUE)))
      
        # Take mean of the left and right, far and near wall max.
        wmax <- c("left_fw_max", "right_fw_max", "left_nw_max", "right_nw_max")
        dataset <- mutate(dataset, cimt = rowMeans(dataset[, wmax], na.rm = TRUE))
      
        # Select the columns for output.
        dataset <- select(dataset, topmed_subject_id, age, cimt)
      
        # Remove records with NAs from dataset.
        dataset <- dataset[!is.na(dataset$age) & !is.na(dataset$cimt), ]
      
        return(dataset)
      }
      ```