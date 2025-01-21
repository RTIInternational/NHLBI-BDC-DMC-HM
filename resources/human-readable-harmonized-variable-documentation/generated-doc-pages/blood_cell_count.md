
# blood_cell_count

### Variables in this section:
* [basophil_ncnc_bld_1](#basophil_ncnc_bld_1)
* [eosinophil_ncnc_bld_1](#eosinophil_ncnc_bld_1)
* [hematocrit_vfr_bld_1](#hematocrit_vfr_bld_1)
* [hemoglobin_mcnc_bld_1](#hemoglobin_mcnc_bld_1)
* [lymphocyte_ncnc_bld_1](#lymphocyte_ncnc_bld_1)
* [mch_entmass_rbc_1](#mch_entmass_rbc_1)
* [mchc_mcnc_rbc_1](#mchc_mcnc_rbc_1)
* [mcv_entvol_rbc_1](#mcv_entvol_rbc_1)
* [monocyte_ncnc_bld_1](#monocyte_ncnc_bld_1)
* [neutrophil_ncnc_bld_1](#neutrophil_ncnc_bld_1)
* [platelet_ncnc_bld_1](#platelet_ncnc_bld_1)
* [pmv_entvol_bld_1](#pmv_entvol_bld_1)
* [rbc_ncnc_bld_1](#rbc_ncnc_bld_1)
* [rdw_ratio_rbc_1](#rdw_ratio_rbc_1)
* [wbc_ncnc_bld_1](#wbc_ncnc_bld_1)

<a id="basophil_ncnc_bld_1"></a>
## blood_cell_count: **basophil_ncnc_bld_1** (basophil_ncnc_bld)
  Count by volume, or number concentration (ncnc), of basophils in the blood (bld).
  * **Study (harmonization_units)**:
    * [ARIC](#basophil_ncnc_bld_1-aric)
    * [CARDIA](#basophil_ncnc_bld_1-cardia)
    * [HCHS_SOL](#basophil_ncnc_bld_1-hchs_sol)
    * [JHS](#basophil_ncnc_bld_1-jhs)
    * [MESA](#basophil_ncnc_bld_1-mesa)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: thousands / microliter, **`Version`**: 3, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2018-09-28 14:54:41
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C0942414
  * **DCC Harmonization Comments**:

    When possible, basophil count was derived from percentage (%) of basophils in the total white blood cell count (WBC) , using the formula
    ```
    white blood cell count * % basophils / 100.
    ```
    This choice minimizes discretizing round-off effects which can lead to multi-modal distributions. Otherwise, if percentage was not available, the value of basophil count as provided by the study was used directly.
    
    For studies or cohorts with measurements at more than one visit, in order to maximize sample 
    size, one measurement per subject was selected, rather than choosing the same visit for all subjects. This was done on a trait-by-trait basis. The algorithm for choosing a visit for a subject differed by study.  The counts were first derived as above using data from each visit and then a visit for a given subject was selected. 
    
    ### Study-specific comments
    
    #### Amish
    Because percentage data was not available, harmonization used given count values from a study component variable rescaled to appropriate harmonized.
    
    Subjects with age recorded as 90+ were assigned a harmonized age of 90.
    
    #### ARIC
    The visit with the most non-missing phenotype values was chosen first. For subjects without measurements at this visit, the visit with the next most non-missing values was chosen, and so forth in succession. 
    
    #### MESA
    Because percentage data was not available, harmonization used given count values from a study component variable. 
    
    ### QC checks
    For each subject, the sum of the WBC subtype differential counts (percentages) was compared to the total white blood cell count (100%) . 
    
    For *_FHS_* Offspring, this QC led to the discovery of anomalies (unusual number of values recorded as 0) in the data at Exam 2 for the WBC subtype differentials. After communication with *_FHS_*, the decision was made to not use the Exam 2 data. 
    
    For other studies, there was a small percentage of subjects for which the comparison showed a relative error greater than 5%.  No data were removed based on these observations.
    
    Please note that visit selection to maximize sample size introduced the possibility that related _harmonized_ hematology variables may be measured at different visits for a given subject. For example, for any given subject, the _harmonized_ values for WBC, basophils, and other WBC subtype differentials may not be from the same visit, so the harmonized subtype differential counts may not sum to the WBC count.
    
<a id="basophil_ncnc_bld_1-aric"></a>
  * ### blood_cell_count/basophil_ncnc_bld_1 -- **ARIC Atherosclerosis Risk in Communities (ARIC) Cohort**:
    * 6 component_study_variables
      * _phs000280.v4.pht004062.v2.phv00204623.v1_. No dbGap metadata available.
      * _phs000280.v4.pht004063.v2.phv00204712.v1_. dbGap Name: **V1AGE01**, Desc: **Age at visit 1 [Cohort. Visit 1]**, Table: **DERIVE13**.
      * _phs000280.v4.pht004107.v2.phv00207257.v1_. dbGap Name: **HMTA03**, Desc: **White blood count x1000/mm3 (MAV). Q3 [Hematology Form. HMTA. Visit 1]**, Table: **HMTA**.
      * _phs000280.v4.pht004107.v2.phv00207264.v1_. dbGap Name: **HMTA10**, Desc: **Basophils % Q10 [Hematology Form. HMTA. Visit 1]**, Table: **HMTA**.
      * _phs000280.v4.pht004108.v2.phv00207272.v1_. dbGap Name: **HMTB03**, Desc: **White blood count x1000/mm3 (MAV). Q3 [Hematology Form. HMTB. Visit 2]**, Table: **HMTB**.
      * _phs000280.v4.pht004108.v2.phv00207279.v1_. dbGap Name: **HMTB10**, Desc: **Basophils %. Q10 [Hematology Form. HMTB. Visit 2]**, Table: **HMTB**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
          # Age at visit
          dem1 <- phen_list$source_data[["pht004063"]] %>%
              mutate(visit = 1, age = as.integer(V1AGE01))
          dem2 <- phen_list$source_data[["pht004062"]] %>%
              mutate(visit = 2, age = as.integer(V2AGE22))
      
          dem <- list(dem1, dem2) %>%
              lapply(select, topmed_subject_id, visit, age) %>%
              do.call(rbind, .) %>%
              tbl_df %>%
              filter(!is.na(visit) & !is.na(age))
      
          # Basophils, converted from % of leukocytes to count of thousands/microliter
          # Obtain basophil data and eliminate subjects with missing codes
          blood1 <- phen_list$source_data[["pht004107"]] %>%
              filter(!(HMTA10 %in% c("A", "O")) & !(HMTA03 %in% c("A", "O"))) %>%
              mutate(visit = 1,
                  basophil_ncnc_bld = as.numeric(HMTA10),
                  wbc_ncnc_bld = as.numeric(HMTA03))
          blood2 <- phen_list$source_data[["pht004108"]] %>%
              filter(!(HMTB10 %in% c("A", "O")) & !(HMTB03 %in% c("A", "O"))) %>%
              mutate(visit = 2,
                  basophil_ncnc_bld = as.numeric(HMTB10),
                  wbc_ncnc_bld = as.numeric(HMTB03))
      
          blood <- list(blood1, blood2)
          for (i in seq_along(blood)){
              blood[[i]] %<>%
                  tbl_df() %>%
                  select(topmed_subject_id, visit, basophil_ncnc_bld, wbc_ncnc_bld) %>%
                  na.omit() %>%
                  mutate(basophil_ncnc_bld = basophil_ncnc_bld * wbc_ncnc_bld / 100) %>%
                  select(-wbc_ncnc_bld)
          }
      
          blood %<>% do.call(rbind, .)
      
          dataset <- left_join(blood, dem, c("topmed_subject_id", "visit"))
      
         # Successively select from visit with most observations for additional subjects
          datafnl <- NULL
          while (nrow(dataset) > 0){
           # create table of number of subjects per visit
            tb <- dataset %>% group_by(visit) %>%
                  summarise(count = n())
           # order the table in decreasing order, choose the top visit (most subjects)
            tb <- tb[order(tb$count, decreasing = TRUE), ]
            v <- tb %>% slice(1) %>% select(visit)
            v <- as.numeric(v)
           # select subjects with that visit
            tmp <- dataset %>% filter(visit == v)
            datafnl <- rbind(datafnl, tmp)
           # remove chosen set of subjects and repeat the process with remaining subjects
            dataset <- anti_join(dataset, tmp, by = "topmed_subject_id")
          }
         datafnl <- datafnl %>% select(topmed_subject_id, basophil_ncnc_bld, age) %>% na.omit
         return(datafnl)
      }
      ```
<a id="basophil_ncnc_bld_1-cardia"></a>
  * ### blood_cell_count/basophil_ncnc_bld_1 -- **CARDIA CARDIA Cohort**:
    * 3 component_study_variables
      * _phs000285.v3.pht001559.v2.phv00112439.v2_. dbGap Name: **A01AGE2**, Desc: **AGE VERIFY**, Table: **A4F01**.
      * _phs000285.v3.pht001563.v2.phv00112686.v2_. dbGap Name: **A05WBC**, Desc: **WHITE CELL COUNT (X 1000)**, Table: **A4F05**.
      * _phs000285.v3.pht001563.v2.phv00112696.v2_. dbGap Name: **A05BASO**, Desc: **BASOPHILS (%)**, Table: **A4F05**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # Age at measurement (Exam 1)
          dat1 <- phen_list$source_data[["pht001559"]] %>%
              tbl_df() %>%
              transmute(topmed_subject_id, age = as.numeric(A01AGE2))
      
          # Basophil count at Exam 1 (thousands/microliter)
          # eliminate subjects with missing code "M"
          # derive count from total WBC (A05WBC) and % basophils (A05BASO)
      
          dat2 <- phen_list$source_data[["pht001563"]] %>%
              tbl_df() %>% filter(!(A05BASO %in% "M") & !(A05WBC %in% "M")) %>%
              mutate(basophil_ncnc_bld = as.numeric(A05WBC) * as.numeric(A05BASO) / 100)
      
          dataset <- left_join(dat2, dat1, by = "topmed_subject_id") %>%
              select(topmed_subject_id, basophil_ncnc_bld, age) %>% na.omit()
      
          return(dataset)
      }
      ```
<a id="basophil_ncnc_bld_1-hchs_sol"></a>
  * ### blood_cell_count/basophil_ncnc_bld_1 -- **HCHS_SOL Hispanic Community Health Study /Study of Latinos (HCHS/SOL)**:
    * 3 component_study_variables
      * _phs000810.v1.pht004715.v1.phv00226251.v1_. dbGap Name: **AGE**, Desc: **Age**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
      * _phs000810.v1.pht004715.v1.phv00226283.v1_. dbGap Name: **LABA1**, Desc: **White Blood Count (x10e9) (LABA1)**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
      * _phs000810.v1.pht004715.v1.phv00226288.v1_. dbGap Name: **LABA14**, Desc: **% Basophils (LABA14)**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # Basophils (thousands/microliter) and age at measurement
          # derive count from total WBC (LABA1) and % basophils (LABA14)
          dataset <- phen_list$source_data[["pht004715"]] %>%
              tbl_df %>%
              mutate(basophil_ncnc_bld = as.numeric(LABA1) * as.numeric(LABA14) / 100,
                  age = as.integer(AGE)) %>%
              select(topmed_subject_id, age, basophil_ncnc_bld) %>%
              filter(!is.na(age), !is.na(basophil_ncnc_bld))
      
          return(dataset)
      }
      ```
<a id="basophil_ncnc_bld_1-jhs"></a>
  * ### blood_cell_count/basophil_ncnc_bld_1 -- **JHS Jackson Heart Study (JHS) Cohort**:
    * 3 component_study_variables
      * _phs000286.v5.pht001949.v1.phv00126009.v1_. No dbGap metadata available.
      * _phs000286.v5.pht001959.v1.phv00127620.v1_. dbGap Name: **BASO**, Desc: **Baso: diff measure % [Visit 1]**, Table: **loca**.
      * _phs000286.v5.pht001959.v1.phv00127631.v1_. dbGap Name: **WBC**, Desc: **White blood cells TH/CMM [Visit 1]**, Table: **loca**.
    * **Function:**
      ```r
      harmonize <- function(phen_list) {
        library("dplyr")
      
        source_data <- phen_list$source_data
        # basophil_count
        dataset1 <- source_data[["pht001959"]]
        dataset1$WBC <- as.numeric(dataset1$WBC)
        dataset1$BASO <- as.numeric(dataset1$BASO)
        sel <- !is.na(dataset1$WBC) & !is.na(dataset1$BASO)
        dataset1 <- dataset1[sel, ]
        dataset1$basophil_ncnc_bld <- dataset1$WBC * dataset1$BASO / 100
        dataset1$WBC <- NULL
        dataset1$BASO <- NULL
      
        # age
        dataset2 <- source_data[["pht001949"]]
        dataset2$AGE01 <- as.numeric(dataset2$AGE01)
        names(dataset2)[names(dataset2) %in% "AGE01"] <- "age"
      
        # combine
        dataset <- inner_join(dataset1, dataset2)
      
        # subset to non-missing values
        sel <- !is.na(dataset$age) & !is.na(dataset$basophil_ncnc_bld)
        dataset <- dataset[sel, ]
      
        return(dataset)
      }
      ```
<a id="basophil_ncnc_bld_1-mesa"></a>
  * ### blood_cell_count/basophil_ncnc_bld_1 -- **MESA Multi-Ethnic Study of Atherosclerosis (MESA) Cohort**:
    * 2 component_study_variables
      * _phs000209.v13.pht003091.v3.phv00176011.v1_. dbGap Name: **age5c**, Desc: **AGE AT EXAM 5**, Table: **MESA_Exam5Main**.
      * _phs000209.v13.pht004319.v1.phv00219002.v1_. dbGap Name: **basosa5**, Desc: **BASOPHIL (ABSOLUTE) (x10E3/uL)**, Table: **MESA_AncilMesaEpigenomicCBC**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # Age at Exam 5
          dataset_dem <- phen_list$source_data[["pht003091"]] %>%
              tbl_df() %>%
              transmute(topmed_subject_id, age = as.integer(age5c))
      
          # Basophils (cells x 10^3/uL of blood)
          wbc <- phen_list$source_data[["pht004319"]] %>%
              tbl_df %>%
              mutate(basophil_ncnc_bld = as.numeric(basosa5)) %>%
              select(topmed_subject_id, basophil_ncnc_bld) %>%
              filter(complete.cases(.))
      
          dataset <- inner_join(dataset_dem, wbc, by = "topmed_subject_id") %>%
              na.omit()
      
          return(dataset)
      }
      ```
<a id="eosinophil_ncnc_bld_1"></a>
## blood_cell_count: **eosinophil_ncnc_bld_1** (eosinophil_ncnc_bld)
  Count by volume, or number concentration (ncnc), of eosinophils in the blood (bld).
  * **Study (harmonization_units)**:
    * [ARIC](#eosinophil_ncnc_bld_1-aric)
    * [CARDIA](#eosinophil_ncnc_bld_1-cardia)
    * [HCHS_SOL](#eosinophil_ncnc_bld_1-hchs_sol)
    * [JHS](#eosinophil_ncnc_bld_1-jhs)
    * [MESA](#eosinophil_ncnc_bld_1-mesa)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: thousands / microliter, **`Version`**: 3, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2018-09-28 14:56:42
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C0942419
  * **DCC Harmonization Comments**:

    When possible, eosinophil count was derived from percentage (%) of eosinophils in the total white blood cell count (WBC) , using the formula
    ```
    white blood cell count * % eosinophils / 100.
    ```
    This choice minimizes discretizing round-off effects which can lead to multi-modal distributions. Otherwise, if percentage was not available, the value of eosinophil count as provided by the study was used directly.
    
    For studies or cohorts with measurements at more than one visit, in order to maximize sample 
    size, one measurement per subject was selected, rather than choosing the same visit for all subjects. This was done on a trait-by-trait basis. The algorithm for choosing a visit for a subject differed by study.  The counts were first derived as above using data from each visit and then a visit for a given subject was selected. 
    
    ### Study-specific comments
    
    #### Amish
    Because percentage data was not available, harmonization used given count values from a study component variable rescaled to appropriate harmonized units.
    
    Subjects with age recorded as 90+ were assigned a harmonized age of 90.
    
    #### ARIC
    The visit with the most non-missing phenotype values was chosen first. For subjects without measurements at this visit, the visit with the next most non-missing values was chosen, and so forth in succession. 
    
    #### MESA
    Because percentage data was not available, harmonization used given count values from a study component variable. 
    
    ### QC checks
    For each subject, the sum of the WBC subtype differential counts (percentages) was compared to the total white blood cell count (100%) . 
    
    For *_FHS_* Offspring, this QC led to the discovery of anomalies (unusual number of values recorded as 0) in the data at Exam 2 for the WBC subtype differentials. After communication with *_FHS_*, the decision was made to not use the Exam 2 data. 
    
    For other studies, there was a small percentage of subjects for which the comparison showed a relative error greater than 5%.  No data were removed based on these observations.
    
    Please note that visit selection to maximize sample size introduced the possibility that related _harmonized_ hematology variables may be measured at different visits for a given subject. For example, for any given subject, the _harmonized_ values for WBC, eosinophils, and other WBC subtype differentials may not be from the same visit, so the harmonized subtype differential counts may not sum to the WBC count.
    
<a id="eosinophil_ncnc_bld_1-aric"></a>
  * ### blood_cell_count/eosinophil_ncnc_bld_1 -- **ARIC Atherosclerosis Risk in Communities (ARIC) Cohort**:
    * 6 component_study_variables
      * _phs000280.v4.pht004062.v2.phv00204623.v1_. No dbGap metadata available.
      * _phs000280.v4.pht004063.v2.phv00204712.v1_. dbGap Name: **V1AGE01**, Desc: **Age at visit 1 [Cohort. Visit 1]**, Table: **DERIVE13**.
      * _phs000280.v4.pht004107.v2.phv00207257.v1_. dbGap Name: **HMTA03**, Desc: **White blood count x1000/mm3 (MAV). Q3 [Hematology Form. HMTA. Visit 1]**, Table: **HMTA**.
      * _phs000280.v4.pht004107.v2.phv00207263.v1_. dbGap Name: **HMTA09**, Desc: **Eosinophils % Q9 [Hematology Form. HMTA. Visit 1]**, Table: **HMTA**.
      * _phs000280.v4.pht004108.v2.phv00207272.v1_. dbGap Name: **HMTB03**, Desc: **White blood count x1000/mm3 (MAV). Q3 [Hematology Form. HMTB. Visit 2]**, Table: **HMTB**.
      * _phs000280.v4.pht004108.v2.phv00207278.v1_. dbGap Name: **HMTB09**, Desc: **Eosinophils %. Q9 [Hematology Form. HMTB. Visit 2]**, Table: **HMTB**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
          # Age at visit
          dem1 <- phen_list$source_data[["pht004063"]] %>%
              mutate(visit = 1, age = as.integer(V1AGE01))
          dem2 <- phen_list$source_data[["pht004062"]] %>%
              mutate(visit = 2, age = as.integer(V2AGE22))
      
          dem <- list(dem1, dem2) %>%
              lapply(select, topmed_subject_id, visit, age) %>%
              do.call(rbind, .) %>%
              tbl_df %>%
              filter(!is.na(visit) & !is.na(age))
      
          # Eosinophils, converted from % of leukocytes to count of thousands/microliter
          # Obtain eosinophil data and eliminate subjects with missing codes
          blood1 <- phen_list$source_data[["pht004107"]] %>%
              filter(!(HMTA09 %in% c("A", "O")) & !(HMTA03 %in% c("A", "O"))) %>%
              mutate(visit = 1,
                  eosinophil_ncnc_bld = as.numeric(HMTA09),
                  wbc_ncnc_bld = as.numeric(HMTA03))
          blood2 <- phen_list$source_data[["pht004108"]] %>%
              filter(!(HMTB09 %in% c("A", "O")) & !(HMTB03 %in% c("A", "O"))) %>%
              mutate(visit = 2,
                  eosinophil_ncnc_bld = as.numeric(HMTB09),
                  wbc_ncnc_bld = as.numeric(HMTB03))
      
          blood <- list(blood1, blood2)
          for (i in seq_along(blood)){
              blood[[i]] %<>%
                  tbl_df() %>%
                  select(topmed_subject_id, visit, eosinophil_ncnc_bld, wbc_ncnc_bld) %>%
                  na.omit() %>%
                  mutate(eosinophil_ncnc_bld = eosinophil_ncnc_bld * wbc_ncnc_bld / 100) %>%
                  select(-wbc_ncnc_bld)
          }
      
          blood %<>% do.call(rbind, .)
      
          dataset <- left_join(blood, dem, c("topmed_subject_id", "visit"))
      
         # Successively select from visit with most observations for additional subjects
          datafnl <- NULL
          while (nrow(dataset) > 0){
           # create table of number of subjects per visit
            tb <- dataset %>% group_by(visit) %>%
                  summarise(count = n())
           # order the table in decreasing order, choose the top visit (most subjects)
            tb <- tb[order(tb$count, decreasing = TRUE), ]
            v <- tb %>% slice(1) %>% select(visit)
            v <- as.numeric(v)
           # select subjects with that visit
            tmp <- dataset %>% filter(visit == v)
            datafnl <- rbind(datafnl, tmp)
           # remove chosen set of subjects and repeat the process with remaining subjects
            dataset <- anti_join(dataset, tmp, by = "topmed_subject_id")
          }
         datafnl <- datafnl %>% select(topmed_subject_id, eosinophil_ncnc_bld, age) %>% na.omit
         return(datafnl)
      }
      ```
<a id="eosinophil_ncnc_bld_1-cardia"></a>
  * ### blood_cell_count/eosinophil_ncnc_bld_1 -- **CARDIA CARDIA Cohort**:
    * 3 component_study_variables
      * _phs000285.v3.pht001559.v2.phv00112439.v2_. dbGap Name: **A01AGE2**, Desc: **AGE VERIFY**, Table: **A4F01**.
      * _phs000285.v3.pht001563.v2.phv00112686.v2_. dbGap Name: **A05WBC**, Desc: **WHITE CELL COUNT (X 1000)**, Table: **A4F05**.
      * _phs000285.v3.pht001563.v2.phv00112693.v2_. dbGap Name: **A05EOSIN**, Desc: **EOSINPHILS (%)**, Table: **A4F05**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # Age at measurement (Exam 1)
          dat1 <- phen_list$source_data[["pht001559"]] %>%
              tbl_df() %>%
              transmute(topmed_subject_id, age = as.numeric(A01AGE2))
      
          # Eosinophil count at Exam 1 (thousands/microliter)
          # eliminate subjects with missing code "M"
          # derive count from total WBC (A05WBC) and % eosinophils (A05BASO)
      
          dat2 <- phen_list$source_data[["pht001563"]] %>%
              tbl_df() %>% filter(!(A05EOSIN %in% "M") & !(A05WBC %in% "M")) %>%
              mutate(eosinophil_ncnc_bld = as.numeric(A05WBC) * as.numeric(A05EOSIN) / 100)
      
          dataset <- left_join(dat2, dat1, by = "topmed_subject_id") %>%
              select(topmed_subject_id, eosinophil_ncnc_bld, age) %>% na.omit()
      
          return(dataset)
      }
      ```
<a id="eosinophil_ncnc_bld_1-hchs_sol"></a>
  * ### blood_cell_count/eosinophil_ncnc_bld_1 -- **HCHS_SOL Hispanic Community Health Study /Study of Latinos (HCHS/SOL)**:
    * 3 component_study_variables
      * _phs000810.v1.pht004715.v1.phv00226251.v1_. dbGap Name: **AGE**, Desc: **Age**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
      * _phs000810.v1.pht004715.v1.phv00226283.v1_. dbGap Name: **LABA1**, Desc: **White Blood Count (x10e9) (LABA1)**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
      * _phs000810.v1.pht004715.v1.phv00226287.v1_. dbGap Name: **LABA13**, Desc: **% Eosiniphils (LABA13)**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # Eosinophils (thousands/microliter) and age at measurement
          # derive count from total WBC (LABA1) and % eosinophils (LABA13)
          dataset <- phen_list$source_data[["pht004715"]] %>%
              tbl_df %>%
              mutate(eosinophil_ncnc_bld = as.numeric(LABA1) * as.numeric(LABA13) / 100,
                  age = as.integer(AGE)) %>%
              select(topmed_subject_id, age, eosinophil_ncnc_bld) %>%
              filter(!is.na(age), !is.na(eosinophil_ncnc_bld))
      
          return(dataset)
      }
      ```
<a id="eosinophil_ncnc_bld_1-jhs"></a>
  * ### blood_cell_count/eosinophil_ncnc_bld_1 -- **JHS Jackson Heart Study (JHS) Cohort**:
    * 3 component_study_variables
      * _phs000286.v5.pht001949.v1.phv00126009.v1_. No dbGap metadata available.
      * _phs000286.v5.pht001959.v1.phv00127621.v1_. dbGap Name: **EOSIN**, Desc: **Eosin: diff measure % [Visit 1]**, Table: **loca**.
      * _phs000286.v5.pht001959.v1.phv00127631.v1_. dbGap Name: **WBC**, Desc: **White blood cells TH/CMM [Visit 1]**, Table: **loca**.
    * **Function:**
      ```r
      harmonize <- function(phen_list) {
        library("dplyr")
      
        source_data <- phen_list$source_data
        # eosinophil_count
        dataset1 <- source_data[["pht001959"]]
        dataset1$WBC <- as.numeric(dataset1$WBC)
        dataset1$EOSIN <- as.numeric(dataset1$EOSIN)
        sel <- !is.na(dataset1$WBC) & !is.na(dataset1$EOSIN)
        dataset1 <- dataset1[sel, ]
        dataset1$eosinophil_ncnc_bld <- dataset1$WBC * dataset1$EOSIN / 100
        dataset1$WBC <- NULL
        dataset1$EOSIN <- NULL
      
        # age
        dataset2 <- source_data[["pht001949"]]
        dataset2$AGE01 <- as.numeric(dataset2$AGE01)
        names(dataset2)[names(dataset2) %in% "AGE01"] <- "age"
      
        # combine
        dataset <- inner_join(dataset1, dataset2)
      
        # subset to non-missing values
        sel <- !is.na(dataset$age) & !is.na(dataset$eosinophil_ncnc_bld)
        dataset <- dataset[sel, ]
      
        return(dataset)
      }
      ```
<a id="eosinophil_ncnc_bld_1-mesa"></a>
  * ### blood_cell_count/eosinophil_ncnc_bld_1 -- **MESA Multi-Ethnic Study of Atherosclerosis (MESA) Cohort**:
    * 2 component_study_variables
      * _phs000209.v13.pht003091.v3.phv00176011.v1_. dbGap Name: **age5c**, Desc: **AGE AT EXAM 5**, Table: **MESA_Exam5Main**.
      * _phs000209.v13.pht004319.v1.phv00219001.v1_. dbGap Name: **eosa5**, Desc: **EOSINOPHILS (ABSOLUTE) (x10E3/uL)**, Table: **MESA_AncilMesaEpigenomicCBC**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # Age at Exam 5
          dataset_dem <- phen_list$source_data[["pht003091"]] %>%
              tbl_df %>%
              transmute(topmed_subject_id, age = as.integer(age5c))
      
          # Eosiniphils (cells x 10^3/uL of blood)
          wbc <- phen_list$source_data[["pht004319"]] %>%
              tbl_df %>%
              mutate(eosinophil_ncnc_bld = as.numeric(eosa5)) %>%
              select(topmed_subject_id, eosinophil_ncnc_bld) %>%
              filter(complete.cases(.))
      
          dataset <- inner_join(dataset_dem, wbc, by = "topmed_subject_id") %>%
              na.omit()
      
          return(dataset)
      }
      ```
<a id="hematocrit_vfr_bld_1"></a>
## blood_cell_count: **hematocrit_vfr_bld_1** (hematocrit_vfr_bld)
  Measurement of hematocrit, the fraction of volume (vfr) of blood (bld) that is composed of red blood cells.
  * **Study (harmonization_units)**:
    * [ARIC](#hematocrit_vfr_bld_1-aric)
    * [CARDIA](#hematocrit_vfr_bld_1-cardia)
    * [CHS](#hematocrit_vfr_bld_1-chs)
    * [HCHS_SOL](#hematocrit_vfr_bld_1-hchs_sol)
    * [JHS](#hematocrit_vfr_bld_1-jhs)
    * [MESA](#hematocrit_vfr_bld_1-mesa)
    * [WHI](#hematocrit_vfr_bld_1-whi)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: % = percentage, **`Version`**: 4, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2018-09-28 14:59:23
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C0803379
  * **DCC Harmonization Comments**:

    For studies or cohorts with measurements at more than one visit, in order to maximize sample size, one measurement per subject was selected, rather than choosing the same visit for all subjects. This was done on a trait-by-trait basis. The algorithm for choosing a visit for a subject differed by study.
    
    ### Study-specific comments
    
    #### FHS
    Only the Offspring subcohort had measurements at multiple visits (exams). For this subcohort, the measurement at the most recent exam available was chosen (since more recent exams used more up-to-date procedures). 
    
    #### ARIC
    The visit with the most non-missing phenotype values was chosen first. For subjects without measurements at this visit, the visit with the next most non-missing values was chosen, and so forth in succession. 
    
    #### Amish
    Subjects with age recorded as 90+ were assigned a harmonized age of 90.
    
    
    ### QC checks
    
    Analysts should carefully examine distributions of the *_WHI_* hematocrit values and compare hematocrit and hemoglobin. There are clusters of outliers for which no specific batch effect could be identified but which analysts may wish to exclude from analyses.
    
    Please note that visit selection to maximize sample size introduced the possibility that related _harmonized_ hematology variables may be measured at different visits for a given subject.
    
<a id="hematocrit_vfr_bld_1-aric"></a>
  * ### blood_cell_count/hematocrit_vfr_bld_1 -- **ARIC Atherosclerosis Risk in Communities (ARIC) Cohort**:
    * 10 component_study_variables
      * _phs000280.v4.pht004062.v2.phv00204623.v1_. No dbGap metadata available.
      * _phs000280.v4.pht004063.v2.phv00204712.v1_. dbGap Name: **V1AGE01**, Desc: **Age at visit 1 [Cohort. Visit 1]**, Table: **DERIVE13**.
      * _phs000280.v4.pht004064.v2.phv00204871.v1_. dbGap Name: **V3AGE31**, Desc: **Age at visit 3 [Cohort. Visit 3]**, Table: **DERIVE37**.
      * _phs000280.v4.pht004065.v2.phv00204975.v1_. No dbGap metadata available.
      * _phs000280.v4.pht004107.v2.phv00207255.v1_. dbGap Name: **HMTA01**, Desc: **Hematocrit % (MAV). Q1 [Hematology Form. HMTA. Visit 1]**, Table: **HMTA**.
      * _phs000280.v4.pht004108.v2.phv00207270.v1_. dbGap Name: **HMTB01**, Desc: **Hematocrit % (MAV). Q1 [Hematology Form. HMTB. Visit 2]**, Table: **HMTB**.
      * _phs000280.v4.pht004109.v2.phv00207289.v1_. dbGap Name: **HMTC5**, Desc: **Hematocrit. Q5 [Hematology Lab. HMTCV301. Visit 3]**, Table: **HMTCV301**.
      * _phs000280.v4.pht004110.v2.phv00207301.v1_. dbGap Name: **HMTC5**, Desc: **Hematocrit. Q5 [Hematology Lab. HMTCV401. Visit 4]**, Table: **HMTCV401**.
      * _phs000280.v4.pht006422.v1.phv00294957.v1_. dbGap Name: **CBC6**, Desc: **Hematocrit, Hct [Complete Blood Count, CBC, Visit 5]**, Table: **CBC**.
      * _phs000280.v4.pht006431.v1.phv00295623.v1_. No dbGap metadata available.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
          # Age at visit
          dem1 <- phen_list$source_data[["pht004063"]] %>%
              mutate(visit = 1, age = as.numeric(V1AGE01))
          dem2 <- phen_list$source_data[["pht004062"]] %>%
              mutate(visit = 2, age = as.numeric(V2AGE22))
          dem3 <- phen_list$source_data[["pht004064"]] %>%
              mutate(visit = 3, age = as.numeric(V3AGE31))
          dem4 <- phen_list$source_data[["pht004065"]] %>%
              mutate(visit = 4, age = as.numeric(V4AGE41))
          dem5 <- phen_list$source_data[["pht006431"]] %>%
              mutate(visit  = 5, age = as.numeric(AGE_STAGE_1))
      
          dem <- list(dem1, dem2, dem3, dem4, dem5) %>%
              lapply(select, topmed_subject_id, visit, age) %>%
              do.call(rbind, .) %>%
              tbl_df %>%
              filter(!is.na(visit) & !is.na(age))
      
          # Hematocrit (percentage)
          # get hematocrit data for each visit, eliminate subjects with missing codes
          blood1 <- phen_list$source_data[["pht004107"]] %>%
              filter(!(HMTA01 %in% c("A", "O")) ) %>%
              mutate(visit = 1, hematocrit_vfr_bld = as.numeric(HMTA01))
          blood2 <- phen_list$source_data[["pht004108"]] %>%
              filter(!(HMTB01 %in% c("A", "O")) ) %>%
              mutate(visit = 2, hematocrit_vfr_bld = as.numeric(HMTB01))
          blood3 <- phen_list$source_data[["pht004109"]] %>%
              filter(!(HMTC5 %in% c("A", "O")) ) %>%
              mutate(visit = 3, hematocrit_vfr_bld = as.numeric(HMTC5))
          blood4 <- phen_list$source_data[["pht004110"]] %>%
              filter(!(HMTC5 %in% c("A", "O")) ) %>%
              mutate(visit = 4, hematocrit_vfr_bld = as.numeric(HMTC5))
          blood5 <- phen_list$source_data[["pht006422"]] %>%
              filter(!(CBC6 %in% c("A", "O")) ) %>%
              mutate(visit = 5, hematocrit_vfr_bld = as.numeric(CBC6))
      
          blood <- list(blood1, blood2, blood3, blood4, blood5) %>%
              lapply(select, topmed_subject_id, visit, hematocrit_vfr_bld) %>%
              lapply(na.omit)
      
          blood %<>% do.call(rbind, .)
      
          dataset <- left_join(blood, dem, c("topmed_subject_id", "visit"))
      
          # Successively select from visit with most observations for additional subjects
          datafnl <- NULL
          while (nrow(dataset) > 0){
           # create table of number of subjects per visit
            tb <- dataset %>% group_by(visit) %>%
                  summarise(count = n())
           # order the table in decreasing order, choose the top visit (most subjects)
            tb <- tb[order(tb$count, decreasing = TRUE), ]
            v <- tb %>% slice(1) %>% select(visit)
            v <- as.numeric(v)
           # select subjects with that visit
            tmp <- dataset %>% filter(visit == v)
            datafnl <- rbind(datafnl, tmp)
           # remove chosen set of subjects and repeat the process with remaining subjects
            dataset <- anti_join(dataset, tmp, by = "topmed_subject_id")
          }
         datafnl <- datafnl %>% select(topmed_subject_id, hematocrit_vfr_bld, age) %>% na.omit
         return(datafnl)
      }
      ```
<a id="hematocrit_vfr_bld_1-cardia"></a>
  * ### blood_cell_count/hematocrit_vfr_bld_1 -- **CARDIA CARDIA Cohort**:
    * 2 component_study_variables
      * _phs000285.v3.pht001559.v2.phv00112439.v2_. dbGap Name: **A01AGE2**, Desc: **AGE VERIFY**, Table: **A4F01**.
      * _phs000285.v3.pht001563.v2.phv00112689.v2_. dbGap Name: **A05HCT**, Desc: **HEMATOCRIT (%)**, Table: **A4F05**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # Age at measurement (Exam 1)
          dat1 <- phen_list$source_data[["pht001559"]] %>%
              tbl_df() %>%
              transmute(topmed_subject_id, age = as.numeric(A01AGE2))
      
          # Hematocrit at Exam 1 (%)
          # eliminate subjects with missing code "M"
          dat2 <- phen_list$source_data[["pht001563"]] %>%
              tbl_df() %>% filter(!(A05HCT %in% "M")) %>%
              transmute(topmed_subject_id, hematocrit_vfr_bld = as.numeric(A05HCT))
      
          dataset <- left_join(dat2, dat1, by = "topmed_subject_id") %>%
              select(topmed_subject_id, hematocrit_vfr_bld, age) %>% na.omit()
      
          return(dataset)
      }
      ```
<a id="hematocrit_vfr_bld_1-chs"></a>
  * ### blood_cell_count/hematocrit_vfr_bld_1 -- **CHS Cardiovascular Health Study (CHS) Cohort: an NHLBI-funded observational study of risk factors for cardiovascular disease in adults 65 years or older**:
    * 2 component_study_variables
      * _phs000287.v6.pht001452.v1.phv00100413.v1_. dbGap Name: **HEMATO23**, Desc: **HEMATOCRIT (%)**, Table: **BASEBOTH**.
      * _phs000287.v6.pht001452.v1.phv00100487.v1_. dbGap Name: **AGEBL**, Desc: **CALCULATED AGE AT BASELINE**, Table: **BASEBOTH**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # Hematocrit (percentage) and age at baseline
          dataset <- phen_list$source_data[["pht001452"]] %>%
              tbl_df %>%
              mutate(hematocrit_vfr_bld = as.numeric(HEMATO23),
                  age = as.integer(AGEBL)) %>%
              select(topmed_subject_id, age, hematocrit_vfr_bld) %>%
              filter(!is.na(age), !is.na(hematocrit_vfr_bld))
      
          return(dataset)
      }
      ```
<a id="hematocrit_vfr_bld_1-hchs_sol"></a>
  * ### blood_cell_count/hematocrit_vfr_bld_1 -- **HCHS_SOL Hispanic Community Health Study /Study of Latinos (HCHS/SOL)**:
    * 2 component_study_variables
      * _phs000810.v1.pht004715.v1.phv00226251.v1_. dbGap Name: **AGE**, Desc: **Age**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
      * _phs000810.v1.pht004715.v1.phv00226303.v1_. dbGap Name: **LABA4**, Desc: **% Hematocrit (LABA4)**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # Hematocrit (percentage) and age at measurement
          dataset <- phen_list$source_data[["pht004715"]] %>%
              tbl_df %>%
              mutate(hematocrit_vfr_bld = as.numeric(LABA4),
                  age = as.integer(AGE)) %>%
              select(topmed_subject_id, age, hematocrit_vfr_bld) %>%
              filter(!is.na(age), !is.na(hematocrit_vfr_bld))
      
          return(dataset)
      }
      ```
<a id="hematocrit_vfr_bld_1-jhs"></a>
  * ### blood_cell_count/hematocrit_vfr_bld_1 -- **JHS Jackson Heart Study (JHS) Cohort**:
    * 2 component_study_variables
      * _phs000286.v5.pht001949.v1.phv00126009.v1_. No dbGap metadata available.
      * _phs000286.v5.pht001959.v1.phv00127614.v1_. dbGap Name: **HEMATOCRIT**, Desc: **Hematocrit % [Visit 1]**, Table: **loca**.
    * **Function:**
      ```r
      harmonize <- function(phen_list) {
        library("dplyr")
      
        source_data <- phen_list$source_data
        # hematocrit
        dataset1 <- source_data[["pht001959"]]
        dataset1$HEMATOCRIT <- as.numeric(dataset1$HEMATOCRIT)
        names(dataset1)[names(dataset1) %in% "HEMATOCRIT"] <- "hematocrit_vfr_bld"
      
        # age
        dataset2 <- source_data[["pht001949"]]
        dataset2$AGE01 <- as.numeric(dataset2$AGE01)
        names(dataset2)[names(dataset2) %in% "AGE01"] <- "age"
      
        # combine
        dataset <- inner_join(dataset1, dataset2)
      
        # subset to non-missing values
        sel <- !is.na(dataset$age) & !is.na(dataset$hematocrit_vfr_bld)
        dataset <- dataset[sel, ]
      
        return(dataset)
      }
      ```
<a id="hematocrit_vfr_bld_1-mesa"></a>
  * ### blood_cell_count/hematocrit_vfr_bld_1 -- **MESA Multi-Ethnic Study of Atherosclerosis (MESA) Cohort**:
    * 2 component_study_variables
      * _phs000209.v13.pht003091.v3.phv00176011.v1_. dbGap Name: **age5c**, Desc: **AGE AT EXAM 5**, Table: **MESA_Exam5Main**.
      * _phs000209.v13.pht004319.v1.phv00218992.v1_. dbGap Name: **hct5**, Desc: **HEMATOCRIT (%)**, Table: **MESA_AncilMesaEpigenomicCBC**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # Age at Exam 5
          dataset_dem <- phen_list$source_data[["pht003091"]] %>%
              tbl_df() %>%
              transmute(topmed_subject_id, age = as.integer(age5c))
      
          # Hematocrit at Exam 5 (percentage)
          dataset_hem <- phen_list$source_data[["pht004319"]] %>%
              tbl_df() %>%
              transmute(topmed_subject_id, hematocrit_vfr_bld = as.numeric(hct5))
      
          dataset <- inner_join(dataset_dem, dataset_hem, by = "topmed_subject_id") %>%
              na.omit()
      
          return(dataset)
      }
      ```
<a id="hematocrit_vfr_bld_1-whi"></a>
  * ### blood_cell_count/hematocrit_vfr_bld_1 -- **WHI Women's Health Initiative**:
    * 5 component_study_variables
      * _phs000200.v11.pht000986.v6.phv00077362.v6_. dbGap Name: **CBCVY**, Desc: **CBC Visit year**, Table: **cbc_rel1**.
      * _phs000200.v11.pht000986.v6.phv00077363.v6_. dbGap Name: **CBCDAYS**, Desc: **CBC Days since randomization/enrollment**, Table: **cbc_rel1**.
      * _phs000200.v11.pht000986.v6.phv00077365.v6_. dbGap Name: **HEMATOCR**, Desc: **Hematocrit (%)**, Table: **cbc_rel1**.
      * _phs000200.v11.pht000998.v6.phv00078436.v6_. dbGap Name: **F2DAYS**, Desc: **F2 Days since randomization**, Table: **f2_rel1**.
      * _phs000200.v11.pht000998.v6.phv00078437.v6_. dbGap Name: **AGE**, Desc: **Age at screening**, Table: **f2_rel1**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
          # Hematocrit (percentage)
          dataset <- phen_list$source_data[["pht000986"]] %>%
              tbl_df() %>%
              # Age
              left_join(phen_list$source_data[["pht000998"]], by = "topmed_subject_id") %>%
      
              # AGE is measured at screening on form F2.
              # abs(F2DAYS) is days between screening and enrollment.
              # do not use F2DAYS when F2DAYS > 0
              # CBCDAYS is days from enrollment to trait measurement
              mutate(F2DAYS = ifelse(as.integer(F2DAYS) > 0, 0, F2DAYS)) %>%
              mutate(hematocrit_vfr_bld = as.numeric(HEMATOCR),
                  age = as.integer(AGE) +
                      (as.integer(CBCDAYS) + abs(as.integer(F2DAYS))) / 365.25) %>%
              select(topmed_subject_id,
                      age, CBCVY,
                      hematocrit_vfr_bld) %>%
              # Use year 0 measurement
              filter(CBCVY %in% 0 & !is.na(hematocrit_vfr_bld) & !is.na(age)) %>%
              select(topmed_subject_id, age, hematocrit_vfr_bld)
      
          return(dataset)
      }
      ```
<a id="hemoglobin_mcnc_bld_1"></a>
## blood_cell_count: **hemoglobin_mcnc_bld_1** (hemoglobin_mcnc_bld)
  Measurement of mass per volume, or mass concentration (mcnc), of hemoglobin in the blood (bld).
  * **Study (harmonization_units)**:
    * [ARIC](#hemoglobin_mcnc_bld_1-aric)
    * [CARDIA](#hemoglobin_mcnc_bld_1-cardia)
    * [CHS](#hemoglobin_mcnc_bld_1-chs)
    * [HCHS_SOL](#hemoglobin_mcnc_bld_1-hchs_sol)
    * [JHS](#hemoglobin_mcnc_bld_1-jhs)
    * [MESA](#hemoglobin_mcnc_bld_1-mesa)
    * [WHI](#hemoglobin_mcnc_bld_1-whi)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: g / dL = grams per deciliter, **`Version`**: 4, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2018-09-28 14:59:36
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C0362923
  * **DCC Harmonization Comments**:

    For studies or cohorts with measurements at more than one visit, in order to maximize sample size, one measurement per subject was selected, rather than choosing the same visit for all subjects. This was done on a trait-by-trait basis. The algorithm for choosing a visit for a subject differed by study.
    
    ### Study-specific comments
    
    #### FHS
    Only the Offspring subcohort had measurements at multiple visits (exams). For this subcohort, the measurement at the most recent exam available was chosen (since more recent exams used more up-to-date procedures). 
    
    #### ARIC
    The visit with the most non-missing phenotype values was chosen first. For subjects without measurements at this visit, the visit with the next most non-missing values was chosen, and so forth in succession. 
    
    #### Amish
    Subjects with age recorded as 90+ were assigned a harmonized age of 90.
    
    ### QC checks
    
    Analysts should carefully examine distributions of the *_WHI_* hemoglobin values and compare hematocrit and hemoglobin. There are clusters of outliers for which no specific batch effect could be identified but which analysts may wish to exclude from analyses.
    
    Please note that visit selection to maximize sample size introduced the possibility that related _harmonized_ hematology variables may be measured at different visits for a given subject.
    
<a id="hemoglobin_mcnc_bld_1-aric"></a>
  * ### blood_cell_count/hemoglobin_mcnc_bld_1 -- **ARIC Atherosclerosis Risk in Communities (ARIC) Cohort**:
    * 10 component_study_variables
      * _phs000280.v4.pht004062.v2.phv00204623.v1_. No dbGap metadata available.
      * _phs000280.v4.pht004063.v2.phv00204712.v1_. dbGap Name: **V1AGE01**, Desc: **Age at visit 1 [Cohort. Visit 1]**, Table: **DERIVE13**.
      * _phs000280.v4.pht004064.v2.phv00204871.v1_. dbGap Name: **V3AGE31**, Desc: **Age at visit 3 [Cohort. Visit 3]**, Table: **DERIVE37**.
      * _phs000280.v4.pht004065.v2.phv00204975.v1_. No dbGap metadata available.
      * _phs000280.v4.pht004107.v2.phv00207256.v1_. dbGap Name: **HMTA02**, Desc: **Hemoglobin g/dL (MAV). Q2 [Hematology Form. HMTA. Visit 1]**, Table: **HMTA**.
      * _phs000280.v4.pht004108.v2.phv00207271.v1_. dbGap Name: **HMTB02**, Desc: **Hemoglobin g/dL (MAV). Q2 [Hematology Form. HMTB. Visit 2]**, Table: **HMTB**.
      * _phs000280.v4.pht004109.v2.phv00207288.v1_. dbGap Name: **HMTC4**, Desc: **Hemoglobin. Q4 [Hematology Lab. HMTCV301. Visit 3]**, Table: **HMTCV301**.
      * _phs000280.v4.pht004110.v2.phv00207300.v1_. dbGap Name: **HMTC4**, Desc: **Hemoglobin. Q4 [Hematology Lab. HMTCV401. Visit 4]**, Table: **HMTCV401**.
      * _phs000280.v4.pht006422.v1.phv00294956.v1_. dbGap Name: **CBC5**, Desc: **Hemoglobin, Hgb [Complete Blood Count, CBC, Visit 5]**, Table: **CBC**.
      * _phs000280.v4.pht006431.v1.phv00295623.v1_. No dbGap metadata available.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
          # Age at visit
          dem1 <- phen_list$source_data[["pht004063"]] %>%
              mutate(visit = 1, age = as.numeric(V1AGE01))
          dem2 <- phen_list$source_data[["pht004062"]] %>%
              mutate(visit = 2, age = as.numeric(V2AGE22))
          dem3 <- phen_list$source_data[["pht004064"]] %>%
              mutate(visit = 3, age = as.numeric(V3AGE31))
          dem4 <- phen_list$source_data[["pht004065"]] %>%
              mutate(visit = 4, age = as.numeric(V4AGE41))
          dem5 <- phen_list$source_data[["pht006431"]] %>%
              mutate(visit  = 5, age = as.numeric(AGE_STAGE_1))
      
          dem <- list(dem1, dem2, dem3, dem4, dem5) %>%
              lapply(select, topmed_subject_id, visit, age) %>%
              do.call(rbind, .) %>%
              tbl_df %>%
              filter(!is.na(visit) & !is.na(age))
      
          # Hemoglobin (g/dL)
          # get hemoglobin data for each visit, eliminate subjects with missing codes
          blood1 <- phen_list$source_data[["pht004107"]] %>%
              filter(!(HMTA02 %in% c("A", "O")) ) %>%
              mutate(visit = 1, hemoglobin_mcnc_bld = as.numeric(HMTA02))
          blood2 <- phen_list$source_data[["pht004108"]] %>%
              filter(!(HMTB02 %in% c("A", "O")) ) %>%
              mutate(visit = 2, hemoglobin_mcnc_bld = as.numeric(HMTB02))
          blood3 <- phen_list$source_data[["pht004109"]] %>%
              filter(!(HMTC4 %in% c("A", "O")) ) %>%
              mutate(visit = 3, hemoglobin_mcnc_bld = as.numeric(HMTC4))
          blood4 <- phen_list$source_data[["pht004110"]] %>%
              filter(!(HMTC4 %in% c("A", "O")) ) %>%
              mutate(visit = 4, hemoglobin_mcnc_bld = as.numeric(HMTC4))
          blood5 <- phen_list$source_data[["pht006422"]] %>%
              filter(!(CBC5 %in% c("A", "O")) ) %>%
              mutate(visit = 5, hemoglobin_mcnc_bld = as.numeric(CBC5))
      
          blood <- list(blood1, blood2, blood3, blood4, blood5) %>%
              lapply(select, topmed_subject_id, visit, hemoglobin_mcnc_bld) %>%
              lapply(na.omit)
      
          blood %<>% do.call(rbind, .)
      
          dataset <- left_join(blood, dem, c("topmed_subject_id", "visit"))
      
          # Successively select from visit with most observations for additional subjects
          datafnl <- NULL
          while (nrow(dataset) > 0){
           # create table of number of subjects per visit
            tb <- dataset %>% group_by(visit) %>%
                  summarise(count = n())
           # order the table in decreasing order, choose the top visit (most subjects)
            tb <- tb[order(tb$count, decreasing = TRUE), ]
            v <- tb %>% slice(1) %>% select(visit)
            v <- as.numeric(v)
           # select subjects with that visit
            tmp <- dataset %>% filter(visit == v)
            datafnl <- rbind(datafnl, tmp)
           # remove chosen set of subjects and repeat the process with remaining subjects
            dataset <- anti_join(dataset, tmp, by = "topmed_subject_id")
          }
         datafnl <- datafnl %>% select(topmed_subject_id, hemoglobin_mcnc_bld, age) %>% na.omit
         return(datafnl)
      }
      ```
<a id="hemoglobin_mcnc_bld_1-cardia"></a>
  * ### blood_cell_count/hemoglobin_mcnc_bld_1 -- **CARDIA CARDIA Cohort**:
    * 2 component_study_variables
      * _phs000285.v3.pht001559.v2.phv00112439.v2_. dbGap Name: **A01AGE2**, Desc: **AGE VERIFY**, Table: **A4F01**.
      * _phs000285.v3.pht001563.v2.phv00112688.v2_. dbGap Name: **A05HGB**, Desc: **HEMOGLOBIN (G/DL)**, Table: **A4F05**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # Age at measurement (Exam 1)
          dat1 <- phen_list$source_data[["pht001559"]] %>%
              tbl_df() %>%
              transmute(topmed_subject_id, age = as.numeric(A01AGE2))
      
          # Hemoglobin at Exam 1 (g/dL)
          # eliminate subjects with missing code "M"
          dat2 <- phen_list$source_data[["pht001563"]] %>%
              tbl_df() %>% filter(!(A05HGB %in% "M")) %>%
              transmute(topmed_subject_id, hemoglobin_mcnc_bld = as.numeric(A05HGB))
      
          dataset <- left_join(dat2, dat1, by = "topmed_subject_id") %>%
              select(topmed_subject_id, hemoglobin_mcnc_bld, age) %>% na.omit()
      
          return(dataset)
      }
      ```
<a id="hemoglobin_mcnc_bld_1-chs"></a>
  * ### blood_cell_count/hemoglobin_mcnc_bld_1 -- **CHS Cardiovascular Health Study (CHS) Cohort: an NHLBI-funded observational study of risk factors for cardiovascular disease in adults 65 years or older**:
    * 2 component_study_variables
      * _phs000287.v6.pht001452.v1.phv00100412.v1_. dbGap Name: **HEMOGL23**, Desc: **HEMOGLOBIN (g/dl)**, Table: **BASEBOTH**.
      * _phs000287.v6.pht001452.v1.phv00100487.v1_. dbGap Name: **AGEBL**, Desc: **CALCULATED AGE AT BASELINE**, Table: **BASEBOTH**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # Hemoglobin (g/dL) and age calculated at baseline
          dataset <- phen_list$source_data[["pht001452"]] %>%
              mutate(hemoglobin_mcnc_bld = as.numeric(HEMOGL23),
                  age = as.integer(AGEBL)) %>%
              select(topmed_subject_id, age, hemoglobin_mcnc_bld) %>% na.omit
      
          return(dataset)
      }
      ```
<a id="hemoglobin_mcnc_bld_1-hchs_sol"></a>
  * ### blood_cell_count/hemoglobin_mcnc_bld_1 -- **HCHS_SOL Hispanic Community Health Study /Study of Latinos (HCHS/SOL)**:
    * 2 component_study_variables
      * _phs000810.v1.pht004715.v1.phv00226251.v1_. dbGap Name: **AGE**, Desc: **Age**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
      * _phs000810.v1.pht004715.v1.phv00226302.v1_. dbGap Name: **LABA3**, Desc: **Hemoglobin (g/dL) (LABA3)**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # Hemoglobin (g/dL) and age at measurement
          dataset <- phen_list$source_data[["pht004715"]] %>%
              tbl_df %>%
              mutate(hemoglobin_mcnc_bld = as.numeric(LABA3),
                  age = as.numeric(AGE)) %>%
              select(topmed_subject_id, age, hemoglobin_mcnc_bld) %>%
              filter(!is.na(age), !is.na(hemoglobin_mcnc_bld))
      
          return(dataset)
      }
      ```
<a id="hemoglobin_mcnc_bld_1-jhs"></a>
  * ### blood_cell_count/hemoglobin_mcnc_bld_1 -- **JHS Jackson Heart Study (JHS) Cohort**:
    * 2 component_study_variables
      * _phs000286.v5.pht001949.v1.phv00126009.v1_. No dbGap metadata available.
      * _phs000286.v5.pht001959.v1.phv00127615.v1_. dbGap Name: **HEMOGLOBIN**, Desc: **Hemoglobin G/DL [Visit 1]**, Table: **loca**.
    * **Function:**
      ```r
      harmonize <- function(phen_list) {
        library("dplyr")
      
        source_data <- phen_list$source_data
        # hemoglobin
        dataset1 <- source_data[["pht001959"]]
        dataset1$HEMOGLOBIN <- as.numeric(dataset1$HEMOGLOBIN)
        names(dataset1)[names(dataset1) %in% "HEMOGLOBIN"] <- "hemoglobin_mcnc_bld"
      
        # age
        dataset2 <- source_data[["pht001949"]]
        dataset2$AGE01 <- as.numeric(dataset2$AGE01)
        names(dataset2)[names(dataset2) %in% "AGE01"] <- "age"
      
        # combine
        dataset <- inner_join(dataset1, dataset2)
      
        # subset to non-missing values
        sel <- !is.na(dataset$age) & !is.na(dataset$hemoglobin_mcnc_bld)
        dataset <- dataset[sel, ]
      
        return(dataset)
      }
      ```
<a id="hemoglobin_mcnc_bld_1-mesa"></a>
  * ### blood_cell_count/hemoglobin_mcnc_bld_1 -- **MESA Multi-Ethnic Study of Atherosclerosis (MESA) Cohort**:
    * 2 component_study_variables
      * _phs000209.v13.pht003091.v3.phv00176011.v1_. dbGap Name: **age5c**, Desc: **AGE AT EXAM 5**, Table: **MESA_Exam5Main**.
      * _phs000209.v13.pht004319.v1.phv00218993.v1_. dbGap Name: **hgb5**, Desc: **HEMOGLOBIN (g/dL)**, Table: **MESA_AncilMesaEpigenomicCBC**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # Age at Exam 5
          dataset_dem <- phen_list$source_data[["pht003091"]] %>%
              transmute(topmed_subject_id, age = as.integer(age5c))
      
          # Hemoglobin at Exam 5 (g/dL)
          dataset_hem <- phen_list$source_data[["pht004319"]] %>%
              tbl_df() %>%
              transmute(topmed_subject_id, hemoglobin_mcnc_bld = as.numeric(hgb5))
      
          dataset <- inner_join(dataset_dem, dataset_hem, by = "topmed_subject_id") %>%
              na.omit()
      
          return(dataset)
      }
      ```
<a id="hemoglobin_mcnc_bld_1-whi"></a>
  * ### blood_cell_count/hemoglobin_mcnc_bld_1 -- **WHI Women's Health Initiative**:
    * 5 component_study_variables
      * _phs000200.v11.pht000986.v6.phv00077362.v6_. dbGap Name: **CBCVY**, Desc: **CBC Visit year**, Table: **cbc_rel1**.
      * _phs000200.v11.pht000986.v6.phv00077363.v6_. dbGap Name: **CBCDAYS**, Desc: **CBC Days since randomization/enrollment**, Table: **cbc_rel1**.
      * _phs000200.v11.pht000986.v6.phv00077366.v6_. dbGap Name: **HEMOGLBN**, Desc: **Hemoglobin (gm/dl)**, Table: **cbc_rel1**.
      * _phs000200.v11.pht000998.v6.phv00078436.v6_. dbGap Name: **F2DAYS**, Desc: **F2 Days since randomization**, Table: **f2_rel1**.
      * _phs000200.v11.pht000998.v6.phv00078437.v6_. dbGap Name: **AGE**, Desc: **Age at screening**, Table: **f2_rel1**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
         # Hemaglobin (g/dL)
      
          dataset <- phen_list$source_data[["pht000986"]] %>%
              # Age
              left_join(phen_list$source_data[["pht000998"]], by = "topmed_subject_id") %>%
      
              # AGE is measured at screening on form F2.
              # abs(F2DAYS) is days between screening and enrollment.
              # do not use F2DAYS when F2DAYS > 0
              mutate(F2DAYS = ifelse(as.integer(F2DAYS) > 0, 0, F2DAYS)) %>%
      
              # get hemoglobin
              mutate(hemoglobin_mcnc_bld = as.numeric(HEMOGLBN),
      
              # CBCDAYS is days from enrollment to trait measurement
              age = as.numeric(AGE) +
                      (as.numeric(CBCDAYS) + abs(as.numeric(F2DAYS))) / 365.25) %>%
              select(topmed_subject_id, age, CBCVY, hemoglobin_mcnc_bld) %>%
      
             # Use year 0 measurement.
              filter(CBCVY %in% 0 & !is.na(hemoglobin_mcnc_bld) & !is.na(age)) %>%
              select(topmed_subject_id, age, hemoglobin_mcnc_bld)
      
          return(dataset)
      }
      ```
<a id="lymphocyte_ncnc_bld_1"></a>
## blood_cell_count: **lymphocyte_ncnc_bld_1** (lymphocyte_ncnc_bld)
  Count by volume, or number concentration (ncnc), of lymphocytes in the blood (bld).
  * **Study (harmonization_units)**:
    * [ARIC](#lymphocyte_ncnc_bld_1-aric)
    * [CARDIA](#lymphocyte_ncnc_bld_1-cardia)
    * [HCHS_SOL](#lymphocyte_ncnc_bld_1-hchs_sol)
    * [JHS](#lymphocyte_ncnc_bld_1-jhs)
    * [MESA](#lymphocyte_ncnc_bld_1-mesa)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: thousands / microliter, **`Version`**: 3, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2018-09-28 14:56:57
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C0942437
  * **DCC Harmonization Comments**:

    When possible, lymphocyte count was derived from percentage (%) of lymphocytes in the total white blood cell count (WBC) , using the formula
    ```
    white blood cell count * % lymphocytes / 100.
    ```
    This choice minimizes discretizing round-off effects which can lead to multi-modal distributions. Otherwise, if percentage was not available, the value of lymphocyte count as provided by the study was used directly.
    
    For studies or cohorts with measurements at more than one visit, in order to maximize sample 
    size, one measurement per subject was selected, rather than choosing the same visit for all subjects. This was done on a trait-by-trait basis. The algorithm for choosing a visit for a subject differed by study.  The counts were first derived as above using data from each visit and then a visit for a given subject was selected. 
    
    ### Study-specific comments
    
    #### Amish
    Because percentage data was not available, harmonization used given count values from a study component variable rescaled to appropriate harmonized units.
    
    Subjects with age recorded as 90+ were assigned a harmonized age of 90.
    
    #### ARIC
    The visit with the most non-missing phenotype values was chosen first. For subjects without measurements at this visit, the visit with the next most non-missing values was chosen, and so forth in succession. 
    
    #### MESA
    Because percentage data was not available, harmonization used given count values from a study component variable. 
    
    ### QC checks
    For each subject, the sum of the WBC subtype differential counts (percentages) was compared to the total white blood cell count (100%) . 
    
    For *_FHS_* Offspring, this QC led to the discovery of anomalies (unusual number of values recorded as 0) in the data at Exam 2 for the WBC subtype differentials. After communication with *_FHS_*, the decision was made to not use the Exam 2 data. 
    
    For other studies, there was a small percentage of subjects for which the comparison showed a relative error greater than 5%.  No data were removed based on these observations.
    
    Please note that visit selection to maximize sample size introduced the possibility that related _harmonized_ hematology variables may be measured at different visits for a given subject. For example, for any given subject, the _harmonized_ values for WBC, lymphocytes, and other WBC subtype differentials may not be from the same visit, so the harmonized subtype differential counts may not sum to the WBC count.
    
<a id="lymphocyte_ncnc_bld_1-aric"></a>
  * ### blood_cell_count/lymphocyte_ncnc_bld_1 -- **ARIC Atherosclerosis Risk in Communities (ARIC) Cohort**:
    * 9 component_study_variables
      * _phs000280.v4.pht004062.v2.phv00204623.v1_. No dbGap metadata available.
      * _phs000280.v4.pht004063.v2.phv00204712.v1_. dbGap Name: **V1AGE01**, Desc: **Age at visit 1 [Cohort. Visit 1]**, Table: **DERIVE13**.
      * _phs000280.v4.pht004107.v2.phv00207257.v1_. dbGap Name: **HMTA03**, Desc: **White blood count x1000/mm3 (MAV). Q3 [Hematology Form. HMTA. Visit 1]**, Table: **HMTA**.
      * _phs000280.v4.pht004107.v2.phv00207261.v1_. dbGap Name: **HMTA07**, Desc: **Lymphocytes % Q7 [Hematology Form. HMTA. Visit 1]**, Table: **HMTA**.
      * _phs000280.v4.pht004108.v2.phv00207272.v1_. dbGap Name: **HMTB03**, Desc: **White blood count x1000/mm3 (MAV). Q3 [Hematology Form. HMTB. Visit 2]**, Table: **HMTB**.
      * _phs000280.v4.pht004108.v2.phv00207276.v1_. dbGap Name: **HMTB07**, Desc: **Lymphocytes %. Q7 [Hematology Form. HMTB. Visit 2]**, Table: **HMTB**.
      * _phs000280.v4.pht006422.v1.phv00294954.v1_. dbGap Name: **CBC3**, Desc: **White blood cell count, Wbc [Complete Blood Count, CBC, Visit 5]**, Table: **CBC**.
      * _phs000280.v4.pht006422.v1.phv00294964.v1_. dbGap Name: **CBC13**, Desc: **Lymphocyte percentage, Ly [Complete Blood Count, CBC, Visit 5]**, Table: **CBC**.
      * _phs000280.v4.pht006431.v1.phv00295623.v1_. No dbGap metadata available.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
          # Lymphocyte, converted from % of leukocytes to count of thousands/microliter
          # Study component variables available only in visits 1, 2, and 5
      
          # Age at visit
          dem1 <- phen_list$source_data[["pht004063"]] %>%
              mutate(visit = 1, age = as.integer(V1AGE01))
          dem2 <- phen_list$source_data[["pht004062"]] %>%
              mutate(visit = 2, age = as.integer(V2AGE22))
          dem5 <- phen_list$source_data[["pht006431"]] %>%
              mutate(visit  = 5, age = as.numeric(AGE_STAGE_1))
          dem <- list(dem1, dem2, dem5) %>%
              lapply(select, topmed_subject_id, visit, age) %>%
              do.call(rbind, .) %>%
              tbl_df %>%
              filter(!is.na(visit) & !is.na(age))
      
          # obtain lymphocyte % and WBC data, eliminate subjects with missing codes
          blood1 <- phen_list$source_data[["pht004107"]] %>%
              filter(!(HMTA07 %in% c("A", "O")) & !(HMTA03 %in% c("A", "O"))) %>%
              mutate(visit = 1,
                  lymphocyte_ncnc_bld = as.numeric(HMTA07),
                  wbc_ncnc_bld = as.numeric(HMTA03))
          blood2 <- phen_list$source_data[["pht004108"]] %>%
              filter(!(HMTB07 %in% c("A", "O")) & !(HMTB03 %in% c("A", "O"))) %>%
              mutate(visit = 2,
                  lymphocyte_ncnc_bld = as.numeric(HMTB07),
                  wbc_ncnc_bld = as.numeric(HMTB03))
          blood5 <- phen_list$source_data[["pht006422"]] %>%
              filter(!(CBC13 %in% c("A", "O")) & !(CBC3 %in% c("A", "O"))) %>%
              mutate(visit = 5,
                  lymphocyte_ncnc_bld = as.numeric(CBC13),
                  wbc_ncnc_bld = as.numeric(CBC3))
      
          blood <- list(blood1, blood2, blood5)
          for (i in seq_along(blood)){
              blood[[i]] %<>%
                  tbl_df() %>%
                  select(topmed_subject_id, visit, lymphocyte_ncnc_bld, wbc_ncnc_bld) %>%
                  na.omit() %>%
                  mutate(lymphocyte_ncnc_bld = lymphocyte_ncnc_bld * wbc_ncnc_bld / 100) %>%
                  select(-wbc_ncnc_bld)
          }
      
          blood %<>% do.call(rbind, .)
      
          dataset <- left_join(blood, dem, c("topmed_subject_id", "visit"))
      
          # Successively select from visit with most observations for additional subjects
          datafnl <- NULL
          while (nrow(dataset) > 0){
           # create table of number of subjects per visit
            tb <- dataset %>% group_by(visit) %>%
                  summarise(count = n())
           # order the table in decreasing order, choose the top visit (most subjects)
            tb <- tb[order(tb$count, decreasing = TRUE), ]
            v <- tb %>% slice(1) %>% select(visit)
            v <- as.numeric(v)
           # select subjects with that visit
            tmp <- dataset %>% filter(visit == v)
            datafnl <- rbind(datafnl, tmp)
           # remove chosen set of subjects and repeat the process with remaining subjects
            dataset <- anti_join(dataset, tmp, by = "topmed_subject_id")
          }
         datafnl <- datafnl %>% select(topmed_subject_id, lymphocyte_ncnc_bld, age) %>% na.omit
         return(datafnl)
      }
      ```
<a id="lymphocyte_ncnc_bld_1-cardia"></a>
  * ### blood_cell_count/lymphocyte_ncnc_bld_1 -- **CARDIA CARDIA Cohort**:
    * 3 component_study_variables
      * _phs000285.v3.pht001559.v2.phv00112439.v2_. dbGap Name: **A01AGE2**, Desc: **AGE VERIFY**, Table: **A4F01**.
      * _phs000285.v3.pht001563.v2.phv00112686.v2_. dbGap Name: **A05WBC**, Desc: **WHITE CELL COUNT (X 1000)**, Table: **A4F05**.
      * _phs000285.v3.pht001563.v2.phv00112691.v2_. dbGap Name: **A05LYMPH**, Desc: **LYMPHOCYTE COUNT**, Table: **A4F05**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # Age at measurement (Exam 1)
          dat1 <- phen_list$source_data[["pht001559"]] %>%
              tbl_df() %>%
              transmute(topmed_subject_id, age = as.numeric(A01AGE2))
      
          # Lymphocyte count at Exam 1 (thousands/microliter)
          # eliminate subjects with missing code "M"
          # derive count from total WBC (A05WBC) and % lymphocytes (A05LYMPH)
          #  description of A05LYMPH says lymphocyte count but the values are actually %s
      
          dat2 <- phen_list$source_data[["pht001563"]] %>%
              tbl_df() %>% filter(!(A05LYMPH %in% "M") & !(A05WBC %in% "M")) %>%
              mutate(lymphocyte_ncnc_bld = as.numeric(A05WBC) * as.numeric(A05LYMPH) / 100)
      
          dataset <- left_join(dat2, dat1, by = "topmed_subject_id") %>%
              select(topmed_subject_id, lymphocyte_ncnc_bld, age) %>% na.omit()
      
          return(dataset)
      }
      ```
<a id="lymphocyte_ncnc_bld_1-hchs_sol"></a>
  * ### blood_cell_count/lymphocyte_ncnc_bld_1 -- **HCHS_SOL Hispanic Community Health Study /Study of Latinos (HCHS/SOL)**:
    * 3 component_study_variables
      * _phs000810.v1.pht004715.v1.phv00226251.v1_. dbGap Name: **AGE**, Desc: **Age**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
      * _phs000810.v1.pht004715.v1.phv00226283.v1_. dbGap Name: **LABA1**, Desc: **White Blood Count (x10e9) (LABA1)**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
      * _phs000810.v1.pht004715.v1.phv00226285.v1_. dbGap Name: **LABA11**, Desc: **% Lymphocytes (LABA11)**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # Lymphocytes (thousands/microliter) and age at measurement
          # derive count from total WBC (LABA1) and % lymphocytes (LABA11)
          dataset <- phen_list$source_data[["pht004715"]] %>%
              tbl_df %>%
              mutate(lymphocyte_ncnc_bld = as.numeric(LABA1) * as.numeric(LABA11) / 100) %>%
              mutate(age = as.integer(AGE)) %>%
              select(topmed_subject_id, age, lymphocyte_ncnc_bld) %>%
              filter(!is.na(age), !is.na(lymphocyte_ncnc_bld))
      
          return(dataset)
      }
      ```
<a id="lymphocyte_ncnc_bld_1-jhs"></a>
  * ### blood_cell_count/lymphocyte_ncnc_bld_1 -- **JHS Jackson Heart Study (JHS) Cohort**:
    * 3 component_study_variables
      * _phs000286.v5.pht001949.v1.phv00126009.v1_. No dbGap metadata available.
      * _phs000286.v5.pht001959.v1.phv00127622.v1_. dbGap Name: **LYMPHS**, Desc: **Lymphs: diff measure % [Visit 1]**, Table: **loca**.
      * _phs000286.v5.pht001959.v1.phv00127631.v1_. dbGap Name: **WBC**, Desc: **White blood cells TH/CMM [Visit 1]**, Table: **loca**.
    * **Function:**
      ```r
      harmonize <- function(phen_list) {
        library("dplyr")
      
        source_data <- phen_list$source_data
        # lymphocyte_count - derive from percentage and total WBC
        dataset1 <- source_data[["pht001959"]]
        dataset1$WBC <- as.numeric(dataset1$WBC)
        dataset1$LYMPHS <- as.numeric(dataset1$LYMPHS)
        sel <- !is.na(dataset1$WBC) & !is.na(dataset1$LYMPHS)
        dataset1 <- dataset1[sel, ]
        dataset1$lymphocyte_ncnc_bld <- dataset1$WBC * dataset1$LYMPHS / 100
        dataset1$WBC <- NULL
        dataset1$LYMPHS <- NULL
      
        # age
        dataset2 <- source_data[["pht001949"]]
        dataset2$AGE01 <- as.numeric(dataset2$AGE01)
        names(dataset2)[names(dataset2) %in% "AGE01"] <- "age"
      
        # combine
        dataset <- inner_join(dataset1, dataset2)
      
        # subset to non-missing values
        sel <- !is.na(dataset$age) & !is.na(dataset$lymphocyte_ncnc_bld)
        dataset <- dataset[sel, ]
      
        return(dataset)
      }
      ```
<a id="lymphocyte_ncnc_bld_1-mesa"></a>
  * ### blood_cell_count/lymphocyte_ncnc_bld_1 -- **MESA Multi-Ethnic Study of Atherosclerosis (MESA) Cohort**:
    * 2 component_study_variables
      * _phs000209.v13.pht003091.v3.phv00176011.v1_. dbGap Name: **age5c**, Desc: **AGE AT EXAM 5**, Table: **MESA_Exam5Main**.
      * _phs000209.v13.pht004319.v1.phv00218998.v1_. dbGap Name: **lymphsa5**, Desc: **LYMPHOCYTES (ABSOLUTE) (x10E3/uL)**, Table: **MESA_AncilMesaEpigenomicCBC**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # Age at Exam 5
          dataset_dem <- phen_list$source_data[["pht003091"]] %>%
              tbl_df %>%
              transmute(topmed_subject_id, age = as.integer(age5c))
      
          # Lymphocytes (cells x 10^3/uL of blood)
          wbc <- phen_list$source_data[["pht004319"]] %>%
              tbl_df %>%
              mutate(lymphocyte_ncnc_bld = as.numeric(lymphsa5)) %>%
              select(topmed_subject_id, lymphocyte_ncnc_bld)
      
          dataset <- inner_join(dataset_dem, wbc, by = "topmed_subject_id") %>%
                     na.omit()
      
          return(dataset)
      }
      ```
<a id="mch_entmass_rbc_1"></a>
## blood_cell_count: **mch_entmass_rbc_1** (mch_entmass_rbc)
  Measurement of the average mass (entmass) of hemoglobin per red blood cell(rbc), known as mean corpuscular hemoglobin (MCH).
  * **Study (harmonization_units)**:
    * [ARIC](#mch_entmass_rbc_1-aric)
    * [CARDIA](#mch_entmass_rbc_1-cardia)
    * [HCHS_SOL](#mch_entmass_rbc_1-hchs_sol)
    * [JHS](#mch_entmass_rbc_1-jhs)
    * [MESA](#mch_entmass_rbc_1-mesa)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: pg = picogram, **`Version`**: 3, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2018-09-28 15:25:19
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C0945625
  * **DCC Harmonization Comments**:

    For most studies, the values of mean corpuscular hemoglobin (MCH) as provided by the study were used directly. When a study did not provide a variable for MCH, harmonized MCH values were derived from hemoglobin and red blood cell count study component variables, if available, using the formula:
    ```
    10 * hemoglobin / red blood cell count .
    ```
    For studies or cohorts with measurements at more than one visit, in order to maximize sample size, one measurement per subject was selected, rather than choosing the same visit for all subjects. This was done on a trait-by-trait basis. The algorithm for choosing a visit for a subject differed by study. 
    
    ### Study-specific comments
    
    #### FHS
    Only the Offspring subcohort had measurements at multiple visits (exams). For this subcohort, the measurement at the most recent exam available was chosen because more recent exams used more up-to-date procedures. 
    
    #### ARIC
    The visit with the most non-missing phenotype values was chosen first. For subjects without measurements at this visit, the visit with the next most non-missing values was chosen, and so forth in succession. 
    
    #### Amish
    Subjects with age recorded as 90+ were assigned a harmonized age of 90.
    
    ### QC checks
    
    For studies with MCH, hemoglobin, and red blood cell count study component variables, the calculated values from hemoglobin and red blood cell count were compared with the given values in the MCH study component variable.
    
    For *_MESA_*, this QC detected apparent recording errors in some MCH values and led to the decision to use calculated values.
    
    For other studies, there was a small percentage of subjects for which the comparison showed a relative error greater than 5%.  No data were removed based on these observations.
    
    Please note that visit selection to maximize sample size introduced the possibility that related _harmonized_ hematology variables may be measured at different visits for a given subject. For example, for any given subject, the _harmonized_ values for hemoglobin, red blood cell count, and MCH may not be from the same visit.
    
<a id="mch_entmass_rbc_1-aric"></a>
  * ### blood_cell_count/mch_entmass_rbc_1 -- **ARIC Atherosclerosis Risk in Communities (ARIC) Cohort**:
    * 6 component_study_variables
      * _phs000280.v4.pht004064.v2.phv00204871.v1_. dbGap Name: **V3AGE31**, Desc: **Age at visit 3 [Cohort. Visit 3]**, Table: **DERIVE37**.
      * _phs000280.v4.pht004065.v2.phv00204975.v1_. No dbGap metadata available.
      * _phs000280.v4.pht004109.v2.phv00207290.v1_. dbGap Name: **HMTC7**, Desc: **MCH. Q7 [Hematology Lab. HMTCV301. Visit 3]**, Table: **HMTCV301**.
      * _phs000280.v4.pht004110.v2.phv00207302.v1_. dbGap Name: **HMTC7**, Desc: **MCH. Q7 [Hematology Lab. HMTCV401. Visit 4]**, Table: **HMTCV401**.
      * _phs000280.v4.pht006422.v1.phv00294960.v1_. dbGap Name: **CBC9**, Desc: **Mean corpuscular hemoglobin, Mch [Complete Blood Count, CBC, Visit 5]**, Table: **CBC**.
      * _phs000280.v4.pht006431.v1.phv00295623.v1_. No dbGap metadata available.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
          # Mean corpuscular hemoglobin MCH (pg) - only measured at visit 3, 4, and 5
          # Age at visit
          dem3 <- phen_list$source_data[["pht004064"]] %>%
              mutate(visit = 3, age = as.numeric(V3AGE31))
          dem4 <- phen_list$source_data[["pht004065"]] %>%
              mutate(visit = 4, age = as.numeric(V4AGE41))
          dem5 <- phen_list$source_data[["pht006431"]] %>%
              mutate(visit  = 5, age = as.numeric(AGE_STAGE_1))
      
          dem <- list(dem3, dem4, dem5) %>%
              lapply(select, topmed_subject_id, visit, age) %>%
              do.call(rbind, .) %>%
              tbl_df %>%
              filter(!is.na(visit) & !is.na(age))
      
          # get MCH data for each visit, eliminate subjects with missing codes
          blood3 <- phen_list$source_data[["pht004109"]] %>%
              filter(!(HMTC7 %in% c("A", "O")) ) %>%
              mutate(visit = 3, mch_entmass_rbc = as.numeric(HMTC7))
          blood4 <- phen_list$source_data[["pht004110"]] %>%
              filter(!(HMTC7 %in% c("A", "O")) ) %>%
              mutate(visit = 4, mch_entmass_rbc = as.numeric(HMTC7))
          blood5 <- phen_list$source_data[["pht006422"]] %>%
              filter(!(CBC9 %in% c("A", "O")) ) %>%
              mutate(visit = 5, mch_entmass_rbc = as.numeric(CBC9))
      
          blood <- list(blood3, blood4, blood5) %>%
              lapply(select, topmed_subject_id, visit, mch_entmass_rbc) %>%
              lapply(na.omit)
      
          blood %<>% do.call(rbind, .)
      
          dataset <- left_join(blood, dem, c("topmed_subject_id", "visit"))
      
          # Successively select from visit with most observations for additional subjects
          datafnl <- NULL
          while (nrow(dataset) > 0){
           # create table of number of subjects per visit
            tb <- dataset %>% group_by(visit) %>%
                  summarise(count = n())
           # order the table in decreasing order, choose the top visit (most subjects)
            tb <- tb[order(tb$count, decreasing = TRUE), ]
            v <- tb %>% slice(1) %>% select(visit)
            v <- as.numeric(v)
           # select subjects with that visit
            tmp <- dataset %>% filter(visit == v)
            datafnl <- rbind(datafnl, tmp)
           # remove chosen set of subjects and repeat the process with remaining subjects
            dataset <- anti_join(dataset, tmp, by = "topmed_subject_id")
          }
         datafnl <- datafnl %>% select(topmed_subject_id, mch_entmass_rbc, age) %>% na.omit
         return(datafnl)
      }
      ```
<a id="mch_entmass_rbc_1-cardia"></a>
  * ### blood_cell_count/mch_entmass_rbc_1 -- **CARDIA CARDIA Cohort**:
    * 3 component_study_variables
      * _phs000285.v3.pht001559.v2.phv00112439.v2_. dbGap Name: **A01AGE2**, Desc: **AGE VERIFY**, Table: **A4F01**.
      * _phs000285.v3.pht001563.v2.phv00112687.v2_. dbGap Name: **A05RBC**, Desc: **RED CELL COUNT (X 1,000,000)**, Table: **A4F05**.
      * _phs000285.v3.pht001563.v2.phv00112688.v2_. dbGap Name: **A05HGB**, Desc: **HEMOGLOBIN (G/DL)**, Table: **A4F05**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # Age at measurement (Exam 1)
          dat1 <- phen_list$source_data[["pht001559"]] %>%
              tbl_df() %>%
              transmute(topmed_subject_id, age = as.numeric(A01AGE2))
      
          # Mean corpuscular hemoglobin MCH (pg)
          # not given but can derive from hemoglobin and red blood cell count (RBC)
          # MCH = hemoglobin/RBC * 10
          # get variables, eliminate subjects with missing code "M", derive
          dat2 <- phen_list$source_data[["pht001563"]] %>%
              tbl_df() %>% filter(!(A05HGB %in% "M") & !(A05RBC %in% "M")) %>%
              mutate(mch_entmass_rbc = as.numeric(A05HGB) / as.numeric(A05RBC) * 10)
      
          dataset <- left_join(dat2, dat1, by = "topmed_subject_id") %>%
              select(topmed_subject_id, mch_entmass_rbc, age) %>% na.omit()
      
          return(dataset)
      }
      ```
<a id="mch_entmass_rbc_1-hchs_sol"></a>
  * ### blood_cell_count/mch_entmass_rbc_1 -- **HCHS_SOL Hispanic Community Health Study /Study of Latinos (HCHS/SOL)**:
    * 2 component_study_variables
      * _phs000810.v1.pht004715.v1.phv00226251.v1_. dbGap Name: **AGE**, Desc: **Age**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
      * _phs000810.v1.pht004715.v1.phv00226305.v1_. dbGap Name: **LABA6**, Desc: **Mean Corpuscular Hemoglobin (pg) (LABA6)**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # Mean corpuscular hemoglobin(MCH) (pg) and age at measurement
      
          dataset <- phen_list$source_data[["pht004715"]] %>%
              tbl_df %>%
              mutate(mch_entmass_rbc = as.numeric(LABA6),
                  age = as.integer(AGE)) %>%
              select(topmed_subject_id, age, mch_entmass_rbc) %>%
              filter(!is.na(age), !is.na(mch_entmass_rbc))
      
          return(dataset)
      }
      ```
<a id="mch_entmass_rbc_1-jhs"></a>
  * ### blood_cell_count/mch_entmass_rbc_1 -- **JHS Jackson Heart Study (JHS) Cohort**:
    * 2 component_study_variables
      * _phs000286.v5.pht001949.v1.phv00126009.v1_. No dbGap metadata available.
      * _phs000286.v5.pht001959.v1.phv00127623.v1_. dbGap Name: **MCH**, Desc: **MCH PG [Visit 1]**, Table: **loca**.
    * **Function:**
      ```r
      harmonize <- function(phen_list) {
        library("dplyr")
      
        source_data <- phen_list$source_data
         # mch_entmass_rbc  units = pg (picograms) mean corpuscular hemoglobin
        dataset1 <- source_data[["pht001959"]]
        dataset1$MCH <- as.numeric(dataset1$MCH)
        names(dataset1)[names(dataset1) %in% "MCH"] <- "mch_entmass_rbc"
      
        # age
        dataset2 <- source_data[["pht001949"]]
        dataset2$AGE01 <- as.numeric(dataset2$AGE01)
        names(dataset2)[names(dataset2) %in% "AGE01"] <- "age"
      
        # combine
        dataset <- inner_join(dataset1, dataset2)
      
        # subset to non-missing values
        sel <- !is.na(dataset$age) & !is.na(dataset$mch_entmass_rbc)
        dataset <- dataset[sel, ]
      
        return(dataset)
      }
      ```
<a id="mch_entmass_rbc_1-mesa"></a>
  * ### blood_cell_count/mch_entmass_rbc_1 -- **MESA Multi-Ethnic Study of Atherosclerosis (MESA) Cohort**:
    * 3 component_study_variables
      * _phs000209.v13.pht003091.v3.phv00176011.v1_. dbGap Name: **age5c**, Desc: **AGE AT EXAM 5**, Table: **MESA_Exam5Main**.
      * _phs000209.v13.pht004319.v1.phv00218990.v1_. dbGap Name: **rbc5**, Desc: **RED BLOOD CELL (RBC) (x10E6/uL)**, Table: **MESA_AncilMesaEpigenomicCBC**.
      * _phs000209.v13.pht004319.v1.phv00218993.v1_. dbGap Name: **hgb5**, Desc: **HEMOGLOBIN (g/dL)**, Table: **MESA_AncilMesaEpigenomicCBC**.
    * **Function:**
      ```r
      harmonize <- function(phen_list) {
        library("dplyr")
        source_data <- phen_list$source_data
         # mch_entmass_rbc  units = pg (picograms) mean corpuscular hemoglobin
         # measured at exam 5
         # derive from hemoglobin and RBC since some given values are recording errors
        dataset1 <- source_data[["pht004319"]]
        dataset1$mch_entmass_rbc <- as.numeric(dataset1$hgb5) / as.numeric(dataset1$rbc5) * 10
      
        # age
        dataset2 <- source_data[["pht003091"]]
        dataset2$age5c <- as.numeric(dataset2$age5c)
        names(dataset2)[names(dataset2) %in% "age5c"] <- "age"
      
        # combine
        dataset <- inner_join(dataset1, dataset2)
      
        # subset to non-missing values
        sel <- !is.na(dataset$age) & !is.na(dataset$mch_entmass_rbc)
        dataset <- dataset[sel, ]
      
        # measurements are at Exam 5
        dataset <- dataset %>% select(c(topmed_subject_id, mch_entmass_rbc, age))
      
        return(dataset)
      }
      ```
<a id="mchc_mcnc_rbc_1"></a>
## blood_cell_count: **mchc_mcnc_rbc_1** (mchc_mcnc_rbc)
  Measurement of the mass concentration (mcnc) of hemoglobin in a given volume of packed red blood cells (rbc), known as mean corpuscular hemoglobin concentration (MCHC).
  * **Study (harmonization_units)**:
    * [ARIC](#mchc_mcnc_rbc_1-aric)
    * [CARDIA](#mchc_mcnc_rbc_1-cardia)
    * [CHS](#mchc_mcnc_rbc_1-chs)
    * [HCHS_SOL](#mchc_mcnc_rbc_1-hchs_sol)
    * [JHS](#mchc_mcnc_rbc_1-jhs)
    * [MESA](#mchc_mcnc_rbc_1-mesa)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: g /dL = grams per deciliter, **`Version`**: 3, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2018-09-28 15:25:04
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C0944134
  * **DCC Harmonization Comments**:

    For studies which had no MCHC study component variable but hemoglobin and hematocrit study component variables were available, harmonized MCHC values were calculated using the formula:
    ```
    100 *  hemoglobin / hematocrit .
    ```
    If a study had MCHC, hemoglobin, and hematocrit component variables, the values of MCHC as provided by the study were used directly unless there were many missing values, in which case the harmonized MCHC values were calculated from hemoglobin and hematocrit using the above formula.  For most of the studies, MCHC values were calculated in this manner. The study-specific comments indicate for which studies the MCHC values as provided by the study were used directly. 
    
    For studies or cohorts with measurements at more than one visit, in order to maximize sample size, one measurement per subject was selected, rather than choosing the same visit for all subjects. This was done on a trait-by-trait basis. The algorithm for choosing a visit for a subject differed by study. The values were first calculated as above using data from each visit and then a visit for a given subject was selected. 
    
    ### Study-specific comments
    
    #### FHS
    Only the Offspring subcohort had measurements at multiple visits (exams). For this subcohort, the measurement at the most recent exam available was chosen because more recent exams used more up-to-date procedures. 
    
    The values of MCHC as provided by the study were used directly for the harmonization.
    
    #### JHS
    The values of MCHC as provided by the study were used directly for the harmonization.
    
    #### ARIC
    The visit with the most non-missing phenotype values was chosen first. For subjects without measurements at this visit, the visit with the next most non-missing values was chosen, and so forth in succession. 
    
    Because of missingness patterns across the visits, calculated values were used in order to maximize sample size.
    
    #### Amish
    Subjects with age recorded as 90+ were assigned a harmonized age of 90.
    
    ### QC checks
    
    For studies with MCHC, hemoglobin, and hematocrit study component variables, the calculated values from hemoglobin and hematocrit were compared with the given values in the MCHC study component variable. There was a small percentage of subjects for which the comparison showed a relative error greater than 5%.  No data were removed based on these observations.
    
    Please note that visit selection to maximize sample size introduced the possibility that related _harmonized_ hematology variables may be measured at different visits for a given subject. For example, for any given subject, the _harmonized_ values for hemoglobin, hematocrit, and MCHC may not be from the same visit.
    
<a id="mchc_mcnc_rbc_1-aric"></a>
  * ### blood_cell_count/mchc_mcnc_rbc_1 -- **ARIC Atherosclerosis Risk in Communities (ARIC) Cohort**:
    * 15 component_study_variables
      * _phs000280.v4.pht004062.v2.phv00204623.v1_. No dbGap metadata available.
      * _phs000280.v4.pht004063.v2.phv00204712.v1_. dbGap Name: **V1AGE01**, Desc: **Age at visit 1 [Cohort. Visit 1]**, Table: **DERIVE13**.
      * _phs000280.v4.pht004064.v2.phv00204871.v1_. dbGap Name: **V3AGE31**, Desc: **Age at visit 3 [Cohort. Visit 3]**, Table: **DERIVE37**.
      * _phs000280.v4.pht004065.v2.phv00204975.v1_. No dbGap metadata available.
      * _phs000280.v4.pht004107.v2.phv00207255.v1_. dbGap Name: **HMTA01**, Desc: **Hematocrit % (MAV). Q1 [Hematology Form. HMTA. Visit 1]**, Table: **HMTA**.
      * _phs000280.v4.pht004107.v2.phv00207256.v1_. dbGap Name: **HMTA02**, Desc: **Hemoglobin g/dL (MAV). Q2 [Hematology Form. HMTA. Visit 1]**, Table: **HMTA**.
      * _phs000280.v4.pht004108.v2.phv00207270.v1_. dbGap Name: **HMTB01**, Desc: **Hematocrit % (MAV). Q1 [Hematology Form. HMTB. Visit 2]**, Table: **HMTB**.
      * _phs000280.v4.pht004108.v2.phv00207271.v1_. dbGap Name: **HMTB02**, Desc: **Hemoglobin g/dL (MAV). Q2 [Hematology Form. HMTB. Visit 2]**, Table: **HMTB**.
      * _phs000280.v4.pht004109.v2.phv00207288.v1_. dbGap Name: **HMTC4**, Desc: **Hemoglobin. Q4 [Hematology Lab. HMTCV301. Visit 3]**, Table: **HMTCV301**.
      * _phs000280.v4.pht004109.v2.phv00207289.v1_. dbGap Name: **HMTC5**, Desc: **Hematocrit. Q5 [Hematology Lab. HMTCV301. Visit 3]**, Table: **HMTCV301**.
      * _phs000280.v4.pht004110.v2.phv00207300.v1_. dbGap Name: **HMTC4**, Desc: **Hemoglobin. Q4 [Hematology Lab. HMTCV401. Visit 4]**, Table: **HMTCV401**.
      * _phs000280.v4.pht004110.v2.phv00207301.v1_. dbGap Name: **HMTC5**, Desc: **Hematocrit. Q5 [Hematology Lab. HMTCV401. Visit 4]**, Table: **HMTCV401**.
      * _phs000280.v4.pht006422.v1.phv00294956.v1_. dbGap Name: **CBC5**, Desc: **Hemoglobin, Hgb [Complete Blood Count, CBC, Visit 5]**, Table: **CBC**.
      * _phs000280.v4.pht006422.v1.phv00294957.v1_. dbGap Name: **CBC6**, Desc: **Hematocrit, Hct [Complete Blood Count, CBC, Visit 5]**, Table: **CBC**.
      * _phs000280.v4.pht006431.v1.phv00295623.v1_. No dbGap metadata available.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # MCHC mean corpuscular hemoglobin concentration g/dL
          # to maximize sample size, will derive MCHC from hemoglogin and hematocrit
          # all visits have hemoglobin and hematocrit
      
          source_data <- phen_list$source_data
      
          # Age at visit
          dem1 <- phen_list$source_data[["pht004063"]] %>%
              mutate(visit = 1, age = as.numeric(V1AGE01))
          dem2 <- phen_list$source_data[["pht004062"]] %>%
              mutate(visit = 2, age = as.numeric(V2AGE22))
          dem3 <- phen_list$source_data[["pht004064"]] %>%
              mutate(visit = 3, age = as.numeric(V3AGE31))
          dem4 <- phen_list$source_data[["pht004065"]] %>%
              mutate(visit = 4, age = as.numeric(V4AGE41))
          dem5 <- phen_list$source_data[["pht006431"]] %>%
              mutate(visit  = 5, age = as.numeric(AGE_STAGE_1))
      
          dem <- list(dem1, dem2, dem3, dem4, dem5) %>%
              lapply(select, topmed_subject_id, visit, age) %>%
              do.call(rbind, .) %>%
              tbl_df %>%
              filter(!is.na(visit) & !is.na(age))
      
         # get data for hemoglobin and hematocrit, eliminate subjects with missing codes
         # derive MCHC = hemoglobin/hematocrit * 100
          blood1 <- source_data[["pht004107"]] %>%
              filter(!(HMTA02 %in% c("A", "O")) & !(HMTA01 %in% c("A", "O"))) %>%
              mutate(visit = 1, mchc_mcnc_rbc = as.numeric(HMTA02) / as.numeric(HMTA01) * 100)
          blood2 <- source_data[["pht004108"]] %>%
              filter(!(HMTB02 %in% c("A", "O")) & !(HMTB01 %in% c("A", "O"))) %>%
              mutate(visit = 2, mchc_mcnc_rbc = as.numeric(HMTB02) / as.numeric(HMTB01) * 100)
          blood3 <- source_data[["pht004109"]] %>%
              filter(!(HMTC4 %in% c("A", "O")) & !(HMTC5 %in% c("A", "O"))) %>%
              mutate(visit = 3, mchc_mcnc_rbc = as.numeric(HMTC4) / as.numeric(HMTC5) * 100)
          blood4 <- source_data[["pht004110"]] %>%
              filter(!(HMTC4 %in% c("A", "O")) & !(HMTC5 %in% c("A", "O"))) %>%
              mutate(visit = 4, mchc_mcnc_rbc = as.numeric(HMTC4) / as.numeric(HMTC5) * 100)
          blood5 <- source_data[["pht006422"]] %>%
              filter(!(CBC5 %in% c("A", "O")) & !(CBC6 %in% c("A", "O"))) %>%
              mutate(visit = 5, mchc_mcnc_rbc = as.numeric(CBC5) / as.numeric(CBC6) * 100)
      
          blood <- list(blood1, blood2, blood3, blood4, blood5)
          for (i in seq_along(blood)){
              blood[[i]] %<>%
                  tbl_df %>%
                  select(topmed_subject_id, visit, mchc_mcnc_rbc) %>%
                  na.omit()
          }
      
          blood %<>% do.call(rbind, .)
      
          dataset <- left_join(blood, dem, c("topmed_subject_id", "visit"))
      
          # Successively select from visit with most observations for additional subjects
          datafnl <- NULL
          while (nrow(dataset) > 0){
           # create table of number of subjects per visit
            tb <- dataset %>% group_by(visit) %>%
                  summarise(count = n())
           # order the table in decreasing order, choose the top visit (most subjects)
            tb <- tb[order(tb$count, decreasing = TRUE), ]
            v <- tb %>% slice(1) %>% select(visit)
            v <- as.numeric(v)
           # select subjects with that visit
            tmp <- dataset %>% filter(visit == v)
            datafnl <- rbind(datafnl, tmp)
           # remove chosen set of subjects and repeat the process with remaining subjects
            dataset <- anti_join(dataset, tmp, by = "topmed_subject_id")
          }
         datafnl <- datafnl %>% select(topmed_subject_id, mchc_mcnc_rbc, age) %>% na.omit
         return(datafnl)
      }
      ```
<a id="mchc_mcnc_rbc_1-cardia"></a>
  * ### blood_cell_count/mchc_mcnc_rbc_1 -- **CARDIA CARDIA Cohort**:
    * 3 component_study_variables
      * _phs000285.v3.pht001559.v2.phv00112439.v2_. dbGap Name: **A01AGE2**, Desc: **AGE VERIFY**, Table: **A4F01**.
      * _phs000285.v3.pht001563.v2.phv00112688.v2_. dbGap Name: **A05HGB**, Desc: **HEMOGLOBIN (G/DL)**, Table: **A4F05**.
      * _phs000285.v3.pht001563.v2.phv00112689.v2_. dbGap Name: **A05HCT**, Desc: **HEMATOCRIT (%)**, Table: **A4F05**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # Age at measurement (Exam 1)
          dat1 <- phen_list$source_data[["pht001559"]] %>%
              tbl_df() %>%
              transmute(topmed_subject_id, age = as.numeric(A01AGE2))
      
          # Mean corpuscular hemoglobin concentration MCHC (g/dL)
          # not given but can derive from hemoglobin and hematocrit
          # MCHC = hemoglogin/hematocrit * 100
          # get variables, eliminate subjects with missing code "M", derive
          dat2 <- phen_list$source_data[["pht001563"]] %>%
              tbl_df() %>% filter(!(A05HGB %in% "M") & !(A05HCT %in% "M")) %>%
              mutate(mchc_mcnc_rbc = as.numeric(A05HGB) / as.numeric(A05HCT) * 100)
      
          dataset <- left_join(dat2, dat1, by = "topmed_subject_id") %>%
              select(topmed_subject_id, mchc_mcnc_rbc, age) %>% na.omit()
      
          return(dataset)
      }
      ```
<a id="mchc_mcnc_rbc_1-chs"></a>
  * ### blood_cell_count/mchc_mcnc_rbc_1 -- **CHS Cardiovascular Health Study (CHS) Cohort: an NHLBI-funded observational study of risk factors for cardiovascular disease in adults 65 years or older**:
    * 3 component_study_variables
      * _phs000287.v6.pht001452.v1.phv00100412.v1_. dbGap Name: **HEMOGL23**, Desc: **HEMOGLOBIN (g/dl)**, Table: **BASEBOTH**.
      * _phs000287.v6.pht001452.v1.phv00100413.v1_. dbGap Name: **HEMATO23**, Desc: **HEMATOCRIT (%)**, Table: **BASEBOTH**.
      * _phs000287.v6.pht001452.v1.phv00100487.v1_. dbGap Name: **AGEBL**, Desc: **CALCULATED AGE AT BASELINE**, Table: **BASEBOTH**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # Mean corpuscular hemoglobin concentration MCHC (g/dL)
          # not given but can be derived from hemoglobin and hematocrit
          # MCHC = hemoglobin/hematocrit * 100
          # get variables and derive
      
          dataset <- phen_list$source_data[["pht001452"]] %>%
               mutate(mchc_mcnc_rbc = as.numeric(HEMOGL23) / as.numeric(HEMATO23) * 100,
               age = as.integer(AGEBL)) %>%
               select(topmed_subject_id, age, mchc_mcnc_rbc) %>% na.omit
      
          return(dataset)
      }
      ```
<a id="mchc_mcnc_rbc_1-hchs_sol"></a>
  * ### blood_cell_count/mchc_mcnc_rbc_1 -- **HCHS_SOL Hispanic Community Health Study /Study of Latinos (HCHS/SOL)**:
    * 2 component_study_variables
      * _phs000810.v1.pht004715.v1.phv00226251.v1_. dbGap Name: **AGE**, Desc: **Age**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
      * _phs000810.v1.pht004715.v1.phv00226306.v1_. dbGap Name: **LABA7**, Desc: **Mean Corpuscular Hemoglobin Concentration (g/dL)(LABA7)**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # Mean corpuscular hemoglobin concentration (MCHC) (pg) and age at measurement
      
          dataset <- phen_list$source_data[["pht004715"]] %>%
              tbl_df %>%
              mutate(mchc_mcnc_rbc = as.numeric(LABA7),
                  age = as.integer(AGE)) %>%
              select(topmed_subject_id, age, mchc_mcnc_rbc) %>%
              filter(!is.na(age), !is.na(mchc_mcnc_rbc))
      
          return(dataset)
      }
      ```
<a id="mchc_mcnc_rbc_1-jhs"></a>
  * ### blood_cell_count/mchc_mcnc_rbc_1 -- **JHS Jackson Heart Study (JHS) Cohort**:
    * 2 component_study_variables
      * _phs000286.v5.pht001949.v1.phv00126009.v1_. No dbGap metadata available.
      * _phs000286.v5.pht001959.v1.phv00127624.v1_. dbGap Name: **MCHC**, Desc: **Mchc % [Visit 1]**, Table: **loca**.
    * **Function:**
      ```r
      harmonize <- function(phen_list) {
        library("dplyr")
      
        source_data <- phen_list$source_data
         # mchc_mcnc_rbc units = g/dL (grams/deciliter) mean corpuscular hemoglobin concentration
        dataset1 <- source_data[["pht001959"]]
        dataset1$MCHC <- as.numeric(dataset1$MCHC)
        names(dataset1)[names(dataset1) %in% "MCHC"] <- "mchc_mcnc_rbc"
      
        # age
        dataset2 <- source_data[["pht001949"]]
        dataset2$AGE01 <- as.numeric(dataset2$AGE01)
        names(dataset2)[names(dataset2) %in% "AGE01"] <- "age"
      
        # combine
        dataset <- inner_join(dataset1, dataset2)
      
        # subset to non-missing values
        sel <- !is.na(dataset$age) & !is.na(dataset$mchc_mcnc_rbc)
        dataset <- dataset[sel, ]
      
        return(dataset)
      }
      ```
<a id="mchc_mcnc_rbc_1-mesa"></a>
  * ### blood_cell_count/mchc_mcnc_rbc_1 -- **MESA Multi-Ethnic Study of Atherosclerosis (MESA) Cohort**:
    * 3 component_study_variables
      * _phs000209.v13.pht003091.v3.phv00176011.v1_. dbGap Name: **age5c**, Desc: **AGE AT EXAM 5**, Table: **MESA_Exam5Main**.
      * _phs000209.v13.pht004319.v1.phv00218992.v1_. dbGap Name: **hct5**, Desc: **HEMATOCRIT (%)**, Table: **MESA_AncilMesaEpigenomicCBC**.
      * _phs000209.v13.pht004319.v1.phv00218993.v1_. dbGap Name: **hgb5**, Desc: **HEMOGLOBIN (g/dL)**, Table: **MESA_AncilMesaEpigenomicCBC**.
    * **Function:**
      ```r
      harmonize <- function(phen_list) {
        library("dplyr")
      
        source_data <- phen_list$source_data
         # mchc_mcnc_rbc  units = g/dL (grams/deciliter) mean corpuscular hemoglobin concentration
        # measured at exam 5
         # derive from hemoglobin and hematocrit
      
         dataset1 <- source_data[["pht004319"]]
        dataset1$mchc_mcnc_rbc <- as.numeric(dataset1$hgb5) / as.numeric(dataset1$hct5) * 100
      
        # age
        dataset2 <- source_data[["pht003091"]]
        dataset2$age5c <- as.numeric(dataset2$age5c)
        names(dataset2)[names(dataset2) %in% "age5c"] <- "age"
      
        # combine
        dataset <- inner_join(dataset1, dataset2)
      
        # subset to non-missing values
        sel <- !is.na(dataset$age) & !is.na(dataset$mchc_mcnc_rbc)
        dataset <- dataset[sel, ]
      
        dataset <- dataset %>% select(c(topmed_subject_id, mchc_mcnc_rbc, age))
      
        return(dataset)
      }
      ```
<a id="mcv_entvol_rbc_1"></a>
## blood_cell_count: **mcv_entvol_rbc_1** (mcv_entvol_rbc)
  Measurement of the average volume (entvol) of red blood cells (rbc), known as mean corpuscular volume (MCV).
  * **Study (harmonization_units)**:
    * [ARIC](#mcv_entvol_rbc_1-aric)
    * [CARDIA](#mcv_entvol_rbc_1-cardia)
    * [HCHS_SOL](#mcv_entvol_rbc_1-hchs_sol)
    * [JHS](#mcv_entvol_rbc_1-jhs)
    * [MESA](#mcv_entvol_rbc_1-mesa)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: fL = femtoliter, **`Version`**: 3, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2018-09-28 15:24:45
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C1114281
  * **DCC Harmonization Comments**:

    For most studies, the values of mean corpuscular volume (MCV) as provided by the study were used directly. When a study did not provide a variable for MCV, harmonized MCV values were derived from hematocrit and red blood cell count study component variables, if available, using the formula:
    ```
    10 * hematocrit / red blood cell count .
    ```
    For studies or cohorts with measurements at more than one visit, in order to maximize sample size, one measurement per subject was selected, rather than choosing the same visit for all subjects. This was done on a trait-by-trait basis. The algorithm for choosing a visit for a subject differed by study. 
    
    ### Study-specific comments
    
    #### FHS
    Only the Offspring subcohort had measurements at multiple visits (exams). For this subcohort, the measurement at the most recent exam available was chosen because more recent exams used more up-to-date procedures. 
    
    #### ARIC
    The visit with the most non-missing phenotype values was chosen first. For subjects without measurements at this visit, the visit with the next most non-missing values was chosen, and so forth in succession. 
    
    #### Amish
    Subjects with age recorded as 90+ were assigned a harmonized age of 90.
    
    ### QC checks
    
    For studies with MCV, hematocrit, and red blood cell count study component variables, the calculated values from hematocrit and red blood cell count were compared with the given values in the MCV study component variable.
    
    For *_MESA_*, this QC detected apparent recording errors in some MCV values and led to the decision to use calculated values.
    
    For other studies, there was a small percentage of subjects for which the comparison showed a relative error greater than 5%.  No data were removed based on these observations.
    
    Please note that visit selection to maximize sample size introduced the possibility that related _harmonized_ hematology variables may be measured at different visits for a given subject. For example, for any given subject, the _harmonized_ values for hematocrit, red blood cell count, and MCV may not be from the same visit.
    
<a id="mcv_entvol_rbc_1-aric"></a>
  * ### blood_cell_count/mcv_entvol_rbc_1 -- **ARIC Atherosclerosis Risk in Communities (ARIC) Cohort**:
    * 8 component_study_variables
      * _phs000280.v4.pht004062.v2.phv00204623.v1_. No dbGap metadata available.
      * _phs000280.v4.pht004064.v2.phv00204871.v1_. dbGap Name: **V3AGE31**, Desc: **Age at visit 3 [Cohort. Visit 3]**, Table: **DERIVE37**.
      * _phs000280.v4.pht004065.v2.phv00204975.v1_. No dbGap metadata available.
      * _phs000280.v4.pht004108.v2.phv00207282.v1_. dbGap Name: **HMTB13**, Desc: **Mean corpuscular volume (MCV) (to nearest whole unit). Q13 [Hematology Form. HMTB. Visit 2]**, Table: **HMTB**.
      * _phs000280.v4.pht004109.v2.phv00207293.v1_. dbGap Name: **HMTC6**, Desc: **MCV. Q6 [Hematology Lab. HMTCV301. Visit 3]**, Table: **HMTCV301**.
      * _phs000280.v4.pht004110.v2.phv00207305.v1_. dbGap Name: **HMTC6**, Desc: **MCV. Q6 [Hematology Lab. HMTCV401. Visit 4]**, Table: **HMTCV401**.
      * _phs000280.v4.pht006422.v1.phv00294959.v1_. dbGap Name: **CBC8**, Desc: **Mean cell volume, Mcv [Complete Blood Count, CBC, Visit 5]**, Table: **CBC**.
      * _phs000280.v4.pht006431.v1.phv00295623.v1_. No dbGap metadata available.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
          # Mean corpuscular volume MCV (fl) - measured at visits 2, 3, 4, and 5
          # Age at visit
          dem2 <- phen_list$source_data[["pht004062"]] %>%
              mutate(visit = 2, age = as.numeric(V2AGE22))
          dem3 <- phen_list$source_data[["pht004064"]] %>%
              mutate(visit = 3, age = as.numeric(V3AGE31))
          dem4 <- phen_list$source_data[["pht004065"]] %>%
              mutate(visit = 4, age = as.numeric(V4AGE41))
          dem5 <- phen_list$source_data[["pht006431"]] %>%
              mutate(visit  = 5, age = as.numeric(AGE_STAGE_1))
      
          dem <- list(dem2, dem3, dem4, dem5) %>%
              lapply(select, topmed_subject_id, visit, age) %>%
              do.call(rbind, .) %>%
              tbl_df %>%
              filter(!is.na(visit) & !is.na(age))
      
          # get MCV data for each visit, eliminate subjects with missing codes
          blood2 <- phen_list$source_data[["pht004108"]] %>%
              filter(!(HMTB13 %in% c("A", "O")) ) %>%
              mutate(visit = 2, mcv_entvol_rbc = as.numeric(HMTB13))
          blood3 <- phen_list$source_data[["pht004109"]] %>%
              filter(!(HMTC6 %in% c("A", "O")) ) %>%
              mutate(visit = 3, mcv_entvol_rbc = as.numeric(HMTC6))
          blood4 <- phen_list$source_data[["pht004110"]] %>%
              filter(!(HMTC6 %in% c("A", "O")) ) %>%
              mutate(visit = 4, mcv_entvol_rbc = as.numeric(HMTC6))
          blood5 <- phen_list$source_data[["pht006422"]] %>%
              filter(!(CBC8 %in% c("A", "O")) ) %>%
              mutate(visit = 5, mcv_entvol_rbc = as.numeric(CBC8))
      
          blood <- list(blood2, blood3, blood4, blood5) %>%
              lapply(select, topmed_subject_id, visit, mcv_entvol_rbc) %>%
              lapply(na.omit)
      
          blood %<>% do.call(rbind, .)
      
          dataset <- left_join(blood, dem, c("topmed_subject_id", "visit"))
      
          # Successively select from visit with most observations for additional subjects
          datafnl <- NULL
          while (nrow(dataset) > 0){
           # create table of number of subjects per visit
            tb <- dataset %>% group_by(visit) %>%
                  summarise(count = n())
           # order the table in decreasing order, choose the top visit (most subjects)
            tb <- tb[order(tb$count, decreasing = TRUE), ]
            v <- tb %>% slice(1) %>% select(visit)
            v <- as.numeric(v)
           # select subjects with that visit
            tmp <- dataset %>% filter(visit == v)
            datafnl <- rbind(datafnl, tmp)
           # remove chosen set of subjects and repeat the process with remaining subjects
            dataset <- anti_join(dataset, tmp, by = "topmed_subject_id")
          }
         datafnl <- datafnl %>% select(topmed_subject_id, mcv_entvol_rbc, age) %>% na.omit
         return(datafnl)
      }
      ```
<a id="mcv_entvol_rbc_1-cardia"></a>
  * ### blood_cell_count/mcv_entvol_rbc_1 -- **CARDIA CARDIA Cohort**:
    * 3 component_study_variables
      * _phs000285.v3.pht001559.v2.phv00112439.v2_. dbGap Name: **A01AGE2**, Desc: **AGE VERIFY**, Table: **A4F01**.
      * _phs000285.v3.pht001563.v2.phv00112687.v2_. dbGap Name: **A05RBC**, Desc: **RED CELL COUNT (X 1,000,000)**, Table: **A4F05**.
      * _phs000285.v3.pht001563.v2.phv00112689.v2_. dbGap Name: **A05HCT**, Desc: **HEMATOCRIT (%)**, Table: **A4F05**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # Age at measurement (Exam 1)
          dat1 <- phen_list$source_data[["pht001559"]] %>%
              tbl_df() %>%
              transmute(topmed_subject_id, age = as.numeric(A01AGE2))
      
          # Mean corpuscular volume MCH (fL)
          # not given but can derive from hematocrit and red blood cell count (RBC)
          # MCV = hematocrit/RBC * 10
          # get variables, eliminate subjects with missing code "M", derive
          dat2 <- phen_list$source_data[["pht001563"]] %>%
              tbl_df() %>% filter(!(A05HCT %in% "M") & !(A05RBC %in% "M")) %>%
              mutate(mcv_entvol_rbc = as.numeric(A05HCT) / as.numeric(A05RBC) * 10)
      
          dataset <- left_join(dat2, dat1, by = "topmed_subject_id") %>%
              select(topmed_subject_id, mcv_entvol_rbc, age) %>% na.omit()
      
          return(dataset)
      }
      ```
<a id="mcv_entvol_rbc_1-hchs_sol"></a>
  * ### blood_cell_count/mcv_entvol_rbc_1 -- **HCHS_SOL Hispanic Community Health Study /Study of Latinos (HCHS/SOL)**:
    * 2 component_study_variables
      * _phs000810.v1.pht004715.v1.phv00226251.v1_. dbGap Name: **AGE**, Desc: **Age**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
      * _phs000810.v1.pht004715.v1.phv00226304.v1_. dbGap Name: **LABA5**, Desc: **Mean Corpuscular Volume (fl) (LABA5)**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # Mean corpuscular volume (MCV) (fl) and age at measurement
      
          dataset <- phen_list$source_data[["pht004715"]] %>%
              tbl_df %>%
              mutate(mcv_entvol_rbc = as.numeric(LABA5),
                  age = as.integer(AGE)) %>%
              select(topmed_subject_id, age, mcv_entvol_rbc) %>%
              filter(!is.na(age), !is.na(mcv_entvol_rbc))
      
          return(dataset)
      }
      ```
<a id="mcv_entvol_rbc_1-jhs"></a>
  * ### blood_cell_count/mcv_entvol_rbc_1 -- **JHS Jackson Heart Study (JHS) Cohort**:
    * 2 component_study_variables
      * _phs000286.v5.pht001949.v1.phv00126009.v1_. No dbGap metadata available.
      * _phs000286.v5.pht001959.v1.phv00127625.v1_. dbGap Name: **MCV**, Desc: **Mcv FL [Visit 1]**, Table: **loca**.
    * **Function:**
      ```r
      harmonize <- function(phen_list) {
        library("dplyr")
      
         source_data <- phen_list$source_data
         # mcv_entvol_rbc units=fL femtoliter mean corpuscular volume
        dataset1 <- source_data[["pht001959"]]
        dataset1$MCV <- as.numeric(dataset1$MCV)
        names(dataset1)[names(dataset1) %in% "MCV"] <- "mcv_entvol_rbc"
      
        # age
        dataset2 <- source_data[["pht001949"]]
        dataset2$AGE01 <- as.numeric(dataset2$AGE01)
        names(dataset2)[names(dataset2) %in% "AGE01"] <- "age"
      
        # combine
        dataset <- inner_join(dataset1, dataset2)
      
        # subset to non-missing values
        sel <- !is.na(dataset$age) & !is.na(dataset$mcv_entvol_rbc)
        dataset <- dataset[sel, ]
      
        return(dataset)
      }
      ```
<a id="mcv_entvol_rbc_1-mesa"></a>
  * ### blood_cell_count/mcv_entvol_rbc_1 -- **MESA Multi-Ethnic Study of Atherosclerosis (MESA) Cohort**:
    * 3 component_study_variables
      * _phs000209.v13.pht003091.v3.phv00176011.v1_. dbGap Name: **age5c**, Desc: **AGE AT EXAM 5**, Table: **MESA_Exam5Main**.
      * _phs000209.v13.pht004319.v1.phv00218990.v1_. dbGap Name: **rbc5**, Desc: **RED BLOOD CELL (RBC) (x10E6/uL)**, Table: **MESA_AncilMesaEpigenomicCBC**.
      * _phs000209.v13.pht004319.v1.phv00218992.v1_. dbGap Name: **hct5**, Desc: **HEMATOCRIT (%)**, Table: **MESA_AncilMesaEpigenomicCBC**.
    * **Function:**
      ```r
      harmonize <- function(phen_list) {
        library("dplyr")
      
        source_data <- phen_list$source_data
      
         # mcv_entvol_rbc  units = fL (femtoliter) mean corpuscular volume
         # measured at exam 5
         # derive from hemoglobin and RBC since some given values are recording errors
      
        dataset1 <- source_data[["pht004319"]]
        dataset1$mcv_entvol_rbc <- as.numeric(dataset1$hct5) / as.numeric(dataset1$rbc5) * 10
      
        # age
        dataset2 <- source_data[["pht003091"]]
        dataset2$age5c <- as.numeric(dataset2$age5c)
        names(dataset2)[names(dataset2) %in% "age5c"] <- "age"
      
        # combine
        dataset <- inner_join(dataset1, dataset2)
      
        # subset to non-missing values
        sel <- !is.na(dataset$age) & !is.na(dataset$mcv_entvol_rbc)
        dataset <- dataset[sel, ]
      
        dataset <- dataset %>% select(c(topmed_subject_id, mcv_entvol_rbc, age))
      
        return(dataset)
      }
      ```
<a id="monocyte_ncnc_bld_1"></a>
## blood_cell_count: **monocyte_ncnc_bld_1** (monocyte_ncnc_bld)
  Count by volume, or number concentration (ncnc), of monocytes in the blood (bld).
  * **Study (harmonization_units)**:
    * [ARIC](#monocyte_ncnc_bld_1-aric)
    * [CARDIA](#monocyte_ncnc_bld_1-cardia)
    * [HCHS_SOL](#monocyte_ncnc_bld_1-hchs_sol)
    * [JHS](#monocyte_ncnc_bld_1-jhs)
    * [MESA](#monocyte_ncnc_bld_1-mesa)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: thousands / microliter, **`Version`**: 3, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2018-09-28 15:23:28
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C0942446
  * **DCC Harmonization Comments**:

    When possible, monocyte count was derived from percentage (%) of monocytes in the total white blood cell count (WBC) , using the formula
    ```
    white blood cell count * % monocytes / 100.
    ```
    This choice minimizes discretizing round-off effects which can lead to multi-modal distributions. Otherwise, if percentage was not available, the value of monocyte count as provided by the study was used directly.
    
    For studies or cohorts with measurements at more than one visit, in order to maximize sample 
    size, one measurement per subject was selected, rather than choosing the same visit for all subjects. This was done on a trait-by-trait basis. The algorithm for choosing a visit for a subject differed by study.  The counts were first derived as above using data from each visit and then a visit for a given subject was selected. 
    
    ### Study-specific comments
    
    #### Amish
    Because percentage data was not available, harmonization used given count values from a study component variable rescaled to appropriate harmonized units.
    
    Subjects with age recorded as 90+ were assigned a harmonized age of 90.
    
    #### ARIC
    The visit with the most non-missing phenotype values was chosen first. For subjects without measurements at this visit, the visit with the next most non-missing values was chosen, and so forth in succession. 
    
    #### MESA
    Because percentage data was not available, harmonization used given count values from a study component variable. 
    
    ### QC checks
    For each subject, the sum of the WBC subtype differential counts (percentages) was compared to the total white blood cell count (100%) . 
    
    For *_FHS_* Offspring, this QC led to the discovery of anomalies (unusual number of values recorded as 0) in the data at Exam 2 for the WBC subtype differentials. After communication with *_FHS_*, the decision was made to not use the Exam 2 data. 
    
    For other studies, there was a small percentage of subjects for which the comparison showed a relative error greater than 5%.  No data were removed based on these observations.
    
    Please note that visit selection to maximize sample size introduced the possibility that related _harmonized_ hematology variables may be measured at different visits for a given subject. For example, for any given subject, the _harmonized_ values for WBC, monocytes, and other WBC subtype differentials may not be from the same visit, so the harmonized subtype differential counts may not sum to the WBC count.
    
<a id="monocyte_ncnc_bld_1-aric"></a>
  * ### blood_cell_count/monocyte_ncnc_bld_1 -- **ARIC Atherosclerosis Risk in Communities (ARIC) Cohort**:
    * 9 component_study_variables
      * _phs000280.v4.pht004062.v2.phv00204623.v1_. No dbGap metadata available.
      * _phs000280.v4.pht004063.v2.phv00204712.v1_. dbGap Name: **V1AGE01**, Desc: **Age at visit 1 [Cohort. Visit 1]**, Table: **DERIVE13**.
      * _phs000280.v4.pht004107.v2.phv00207257.v1_. dbGap Name: **HMTA03**, Desc: **White blood count x1000/mm3 (MAV). Q3 [Hematology Form. HMTA. Visit 1]**, Table: **HMTA**.
      * _phs000280.v4.pht004107.v2.phv00207262.v1_. dbGap Name: **HMTA08**, Desc: **Monocytes % Q8 [Hematology Form. HMTA. Visit 1]**, Table: **HMTA**.
      * _phs000280.v4.pht004108.v2.phv00207272.v1_. dbGap Name: **HMTB03**, Desc: **White blood count x1000/mm3 (MAV). Q3 [Hematology Form. HMTB. Visit 2]**, Table: **HMTB**.
      * _phs000280.v4.pht004108.v2.phv00207277.v1_. dbGap Name: **HMTB08**, Desc: **Monocytes %. Q8 [Hematology Form. HMTB. Visit 2]**, Table: **HMTB**.
      * _phs000280.v4.pht006422.v1.phv00294954.v1_. dbGap Name: **CBC3**, Desc: **White blood cell count, Wbc [Complete Blood Count, CBC, Visit 5]**, Table: **CBC**.
      * _phs000280.v4.pht006422.v1.phv00294965.v1_. dbGap Name: **CBC14**, Desc: **Monocyte percentage, Mo [Complete Blood Count, CBC, Visit 5]**, Table: **CBC**.
      * _phs000280.v4.pht006431.v1.phv00295623.v1_. No dbGap metadata available.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
          # Monocyte, converted from % leukocytes to count of thousands/microliter
          # Study component variables available only in visits 1, 2, and 5
      
          # Age at visit
          dem1 <- phen_list$source_data[["pht004063"]] %>%
              mutate(visit = 1, age = as.integer(V1AGE01))
          dem2 <- phen_list$source_data[["pht004062"]] %>%
              mutate(visit = 2, age = as.integer(V2AGE22))
          dem5 <- phen_list$source_data[["pht006431"]] %>%
              mutate(visit  = 5, age = as.numeric(AGE_STAGE_1))
          dem <- list(dem1, dem2, dem5) %>%
              lapply(select, topmed_subject_id, visit, age) %>%
              do.call(rbind, .) %>%
              tbl_df %>%
              filter(!is.na(visit) & !is.na(age))
      
          # obtain monocyte % and WBC data, eliminate subjects with missing codes
          blood1 <- phen_list$source_data[["pht004107"]] %>%
              filter(!(HMTA08 %in% c("A", "O")) & !(HMTA03 %in% c("A", "O"))) %>%
              mutate(visit = 1,
                  monocyte_ncnc_bld = as.numeric(HMTA08),
                  wbc_ncnc_bld = as.numeric(HMTA03))
          blood2 <- phen_list$source_data[["pht004108"]] %>%
              filter(!(HMTB08 %in% c("A", "O")) & !(HMTB03 %in% c("A", "O"))) %>%
              mutate(visit = 2,
                  monocyte_ncnc_bld = as.numeric(HMTB08),
                  wbc_ncnc_bld = as.numeric(HMTB03))
          blood5 <- phen_list$source_data[["pht006422"]] %>%
              filter(!(CBC14 %in% c("A", "O")) & !(CBC3 %in% c("A", "O"))) %>%
              mutate(visit = 5,
                  monocyte_ncnc_bld = as.numeric(CBC14),
                  wbc_ncnc_bld = as.numeric(CBC3))
      
          blood <- list(blood1, blood2, blood5)
          for (i in seq_along(blood)){
              blood[[i]] %<>%
                  tbl_df() %>%
                  select(topmed_subject_id, visit, monocyte_ncnc_bld, wbc_ncnc_bld) %>%
                  na.omit() %>%
                  mutate(monocyte_ncnc_bld = monocyte_ncnc_bld * wbc_ncnc_bld / 100) %>%
                  select(-wbc_ncnc_bld)
          }
      
          blood %<>% do.call(rbind, .)
      
          dataset <- left_join(blood, dem, c("topmed_subject_id", "visit"))
      
          # Successively select from visit with most observations for additional subjects
          datafnl <- NULL
          while (nrow(dataset) > 0){
           # create table of number of subjects per visit
            tb <- dataset %>% group_by(visit) %>%
                  summarise(count = n())
           # order the table in decreasing order, choose the top visit (most subjects)
            tb <- tb[order(tb$count, decreasing = TRUE), ]
            v <- tb %>% slice(1) %>% select(visit)
            v <- as.numeric(v)
           # select subjects with that visit
            tmp <- dataset %>% filter(visit == v)
            datafnl <- rbind(datafnl, tmp)
           # remove chosen set of subjects and repeat the process with remaining subjects
            dataset <- anti_join(dataset, tmp, by = "topmed_subject_id")
          }
         datafnl <- datafnl %>% select(topmed_subject_id, monocyte_ncnc_bld, age) %>% na.omit
         return(datafnl)
      }
      ```
<a id="monocyte_ncnc_bld_1-cardia"></a>
  * ### blood_cell_count/monocyte_ncnc_bld_1 -- **CARDIA CARDIA Cohort**:
    * 3 component_study_variables
      * _phs000285.v3.pht001559.v2.phv00112439.v2_. dbGap Name: **A01AGE2**, Desc: **AGE VERIFY**, Table: **A4F01**.
      * _phs000285.v3.pht001563.v2.phv00112686.v2_. dbGap Name: **A05WBC**, Desc: **WHITE CELL COUNT (X 1000)**, Table: **A4F05**.
      * _phs000285.v3.pht001563.v2.phv00112692.v2_. dbGap Name: **A05MONO**, Desc: **MONOCYTES (%)**, Table: **A4F05**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # Age at measurement (Exam 1)
          dat1 <- phen_list$source_data[["pht001559"]] %>%
              tbl_df() %>%
              transmute(topmed_subject_id, age = as.numeric(A01AGE2))
      
          # Monocyte count at Exam 1 (thousands/microliter)
          # eliminate subjects with missing code "M"
          # derive count from total WBC (A05WBC) and % monocytes (A05MONO)
      
          dat2 <- phen_list$source_data[["pht001563"]] %>%
              tbl_df() %>% filter(!(A05MONO %in% "M") & !(A05WBC %in% "M")) %>%
              mutate(monocyte_ncnc_bld = as.numeric(A05WBC) * as.numeric(A05MONO) / 100)
      
          dataset <- left_join(dat2, dat1, by = "topmed_subject_id") %>%
              select(topmed_subject_id, monocyte_ncnc_bld, age) %>% na.omit()
      
          return(dataset)
      }
      ```
<a id="monocyte_ncnc_bld_1-hchs_sol"></a>
  * ### blood_cell_count/monocyte_ncnc_bld_1 -- **HCHS_SOL Hispanic Community Health Study /Study of Latinos (HCHS/SOL)**:
    * 3 component_study_variables
      * _phs000810.v1.pht004715.v1.phv00226251.v1_. dbGap Name: **AGE**, Desc: **Age**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
      * _phs000810.v1.pht004715.v1.phv00226283.v1_. dbGap Name: **LABA1**, Desc: **White Blood Count (x10e9) (LABA1)**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
      * _phs000810.v1.pht004715.v1.phv00226286.v1_. dbGap Name: **LABA12**, Desc: **% Monocytes (LABA12)**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # Monocytes (thousands/microliter) and age at measurement
          # derive count from total WBC (LABA1) and % monocytes (LABA12)
          dataset <- phen_list$source_data[["pht004715"]] %>%
              tbl_df %>%
              mutate(monocyte_ncnc_bld = as.numeric(LABA1) * as.numeric(LABA12) / 100,
                  age = as.integer(AGE)) %>%
              select(topmed_subject_id, age, monocyte_ncnc_bld) %>%
              filter(!is.na(age), !is.na(monocyte_ncnc_bld))
      
          return(dataset)
      }
      ```
<a id="monocyte_ncnc_bld_1-jhs"></a>
  * ### blood_cell_count/monocyte_ncnc_bld_1 -- **JHS Jackson Heart Study (JHS) Cohort**:
    * 3 component_study_variables
      * _phs000286.v5.pht001949.v1.phv00126009.v1_. No dbGap metadata available.
      * _phs000286.v5.pht001959.v1.phv00127626.v1_. dbGap Name: **MONOS**, Desc: **Monos: diff % [Visit 1]**, Table: **loca**.
      * _phs000286.v5.pht001959.v1.phv00127631.v1_. dbGap Name: **WBC**, Desc: **White blood cells TH/CMM [Visit 1]**, Table: **loca**.
    * **Function:**
      ```r
      harmonize <- function(phen_list) {
        library("dplyr")
      
        source_data <- phen_list$source_data
        # monocyte_count
        dataset1 <- source_data[["pht001959"]]
        dataset1$WBC <- as.numeric(dataset1$WBC)
        dataset1$MONOS <- as.numeric(dataset1$MONOS)
        sel <- !is.na(dataset1$WBC) & !is.na(dataset1$MONOS)
        dataset1 <- dataset1[sel, ]
        dataset1$monocyte_ncnc_bld <- dataset1$WBC * dataset1$MONOS / 100
        dataset1$WBC <- NULL
        dataset1$MONOS <- NULL
      
        # age
        dataset2 <- source_data[["pht001949"]]
        dataset2$AGE01 <- as.numeric(dataset2$AGE01)
        names(dataset2)[names(dataset2) %in% "AGE01"] <- "age"
      
        # combine
        dataset <- inner_join(dataset1, dataset2)
      
        # subset to non-missing values
        sel <- !is.na(dataset$age) & !is.na(dataset$monocyte_ncnc_bld)
        dataset <- dataset[sel, ]
      
        return(dataset)
      }
      ```
<a id="monocyte_ncnc_bld_1-mesa"></a>
  * ### blood_cell_count/monocyte_ncnc_bld_1 -- **MESA Multi-Ethnic Study of Atherosclerosis (MESA) Cohort**:
    * 2 component_study_variables
      * _phs000209.v13.pht003091.v3.phv00176011.v1_. dbGap Name: **age5c**, Desc: **AGE AT EXAM 5**, Table: **MESA_Exam5Main**.
      * _phs000209.v13.pht004319.v1.phv00219000.v1_. dbGap Name: **monosa5**, Desc: **MONOCYTES(ABSOLUTE) (x10E3/uL)**, Table: **MESA_AncilMesaEpigenomicCBC**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # Age at Exam 5
          dataset_dem <- phen_list$source_data[["pht003091"]] %>%
              tbl_df %>%
              transmute(topmed_subject_id, age = as.integer(age5c))
      
          # Monocytes (cells x 10^3/uL of blood)
          wbc <- phen_list$source_data[["pht004319"]] %>%
              tbl_df %>%
              mutate(monocyte_ncnc_bld = as.numeric(monosa5)) %>%
              select(topmed_subject_id, monocyte_ncnc_bld)
      
          dataset <- inner_join(dataset_dem, wbc, by = "topmed_subject_id") %>%
              na.omit()
      
          return(dataset)
      }
      ```
<a id="neutrophil_ncnc_bld_1"></a>
## blood_cell_count: **neutrophil_ncnc_bld_1** (neutrophil_ncnc_bld)
  Count by volume, or number concentration (ncnc), of neutrophils in the blood (bld).
  * **Study (harmonization_units)**:
    * [ARIC](#neutrophil_ncnc_bld_1-aric)
    * [CARDIA](#neutrophil_ncnc_bld_1-cardia)
    * [HCHS_SOL](#neutrophil_ncnc_bld_1-hchs_sol)
    * [JHS](#neutrophil_ncnc_bld_1-jhs)
    * [MESA](#neutrophil_ncnc_bld_1-mesa)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: thousands / microliter, **`Version`**: 3, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2018-09-28 15:23:48
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C0942461
  * **DCC Harmonization Comments**:

    When possible, neutrophil count was derived from percentage (%) of neutrophils in the total white blood cell count (WBC), using the formula
    ```
    white blood cell count * % neutrophils / 100.
    ```
    This choice minimizes discretizing round-off effects, which can lead to multi-modal distributions. Otherwise, if percentage was not available, the value of neutrophil count as provided by the study was used directly. For some studies (as indicated below), the total neutrophil percentage was first calculated by adding multiple study component variables representing different types of neutrophils, treating missing values as 0 when at least one of the study component variables was non-missing.
    
    For studies or cohorts with measurements at more than one visit, in order to maximize sample 
    size, one measurement per subject was selected, rather than choosing the same visit for all subjects. This was done on a trait-by-trait basis. The algorithm for choosing a visit for a subject differed by study.  The counts were first derived as above using data from each visit and then a visit for a given subject was selected. 
    
    ### Study-specific comments
    
    #### ARIC
    The visit with the most non-missing phenotype values was chosen first. For subjects without measurements at this visit, the visit with the next most non-missing values was chosen, and so forth in succession.  Total neutrophil percentage was first calculated from the sum of component study variables representing different types of neutrophils for each visit before visit selection occurred.
    
    #### Amish
    Because percentage data were not available, harmonization used given count values from a study component variable rescaled to the appropriate harmonized units.
    
    Subjects with age recorded as 90+ were assigned a harmonized age of 90.
    
    #### CARDIA
    Total neutrophil percentage was first calculated from the sum of component study variables representing different types of neutrophils. 
    
    #### JHS
    Total neutrophil percentage was first calculated from the sum of component study variables representing different types of neutrophils.
    
    #### MESA
    Because percentage data were not available, harmonization used given count values from a study component variable.
    
    ### QC checks
    For each subject, the sum of the WBC subtype differential counts (percentages) was compared to the total white blood cell count (100%) . 
    
    For *_FHS_* Offspring, this QC led to the discovery of anomalies (unusual number of values recorded as 0) in the data at Exam 2 for the WBC subtype differentials. After communication with *_FHS_*, the decision was made to not use the Exam 2 data. 
    
    For other studies, there was a small percentage of subjects for which the comparison showed a relative error greater than 5%.  No data were removed based on these observations.
    
    Please note that visit selection to maximize sample size introduced the possibility that related _harmonized_ hematology variables may be measured at different visits for a given subject. For example, for any given subject, the _harmonized_ values for WBC, neutrophils, and other WBC subtype differentials may not be from the same visit, so the harmonized subtype differential counts may not sum to the WBC count.
    
<a id="neutrophil_ncnc_bld_1-aric"></a>
  * ### blood_cell_count/neutrophil_ncnc_bld_1 -- **ARIC Atherosclerosis Risk in Communities (ARIC) Cohort**:
    * 8 component_study_variables
      * _phs000280.v4.pht004062.v2.phv00204623.v1_. No dbGap metadata available.
      * _phs000280.v4.pht004063.v2.phv00204712.v1_. dbGap Name: **V1AGE01**, Desc: **Age at visit 1 [Cohort. Visit 1]**, Table: **DERIVE13**.
      * _phs000280.v4.pht004107.v2.phv00207257.v1_. dbGap Name: **HMTA03**, Desc: **White blood count x1000/mm3 (MAV). Q3 [Hematology Form. HMTA. Visit 1]**, Table: **HMTA**.
      * _phs000280.v4.pht004107.v2.phv00207259.v1_. dbGap Name: **HMTA05**, Desc: **Neutrophils % Q5 [Hematology Form. HMTA. Visit 1]**, Table: **HMTA**.
      * _phs000280.v4.pht004107.v2.phv00207260.v1_. dbGap Name: **HMTA06**, Desc: **Neutrophil Bands % Q6 [Hematology Form. HMTA. Visit 1]**, Table: **HMTA**.
      * _phs000280.v4.pht004108.v2.phv00207272.v1_. dbGap Name: **HMTB03**, Desc: **White blood count x1000/mm3 (MAV). Q3 [Hematology Form. HMTB. Visit 2]**, Table: **HMTB**.
      * _phs000280.v4.pht004108.v2.phv00207274.v1_. dbGap Name: **HMTB05**, Desc: **Neutrophils % Q5. Q5 [Hematology Form. HMTB. Visit 2]**, Table: **HMTB**.
      * _phs000280.v4.pht004108.v2.phv00207275.v1_. dbGap Name: **HMTB06**, Desc: **Neutrophil Bands %.Q6 [Hematology Form. HMTB. Visit 2]**, Table: **HMTB**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
        # Age at visit
          dem1 <- phen_list$source_data[["pht004063"]] %>%
              mutate(visit = 1, age = as.integer(V1AGE01))
          dem2 <- phen_list$source_data[["pht004062"]] %>%
              mutate(visit = 2, age = as.integer(V2AGE22))
      
          dem <- list(dem1, dem2) %>%
              lapply(select, topmed_subject_id, visit, age) %>%
              do.call(rbind, .) %>%
              tbl_df %>%
              filter(!is.na(visit) & !is.na(age))
      
        # Combine Neutrophils and bands, convert from % of leukocytes to count of thousands/microliter
        # Obtain neutrophil data and eliminate subjects with missing codes
          blood1 <- phen_list$source_data[["pht004107"]] %>%
              filter(!(HMTA05 %in% c("A", "O")) &  !(HMTA06 %in% c("A", "O"))) %>%
              filter(!(HMTA03 %in% c("A", "O"))) %>%
              mutate(visit = 1,
                  neutrophil_ncnc_bld = as.numeric(HMTA05),
                  bands = as.numeric(HMTA06),
                  wbc_ncnc_bld = as.numeric(HMTA03))
          blood2 <- phen_list$source_data[["pht004108"]] %>%
              filter(!(HMTB05 %in% c("A", "O")) &  !(HMTB06 %in% c("A", "O"))) %>%
              filter(!(HMTB03 %in% c("A", "O"))) %>%
              mutate(visit = 2,
                  neutrophil_ncnc_bld = as.numeric(HMTB05),
                  bands = as.numeric(HMTB06),
                  wbc_ncnc_bld = as.numeric(HMTB03))
      
          blood <- list(blood1, blood2)
          for (i in seq_along(blood)){
              # Add neutrophil and neutrophil bands for harmonized count of neutrophil cells.
              # Treat NAs as zero for summing.
              blood[[i]]$bands[is.na(blood[[i]]$bands)] <- 0
              blood[[i]] %<>%
                  tbl_df() %>%
                  mutate(neutrophil_ncnc_bld = (neutrophil_ncnc_bld + bands) * wbc_ncnc_bld / 100) %>%
                  select(topmed_subject_id, visit, neutrophil_ncnc_bld) %>%
                  na.omit()
          }
      
          blood %<>% do.call(rbind, .)
      
          dataset <- left_join(blood, dem, c("topmed_subject_id", "visit"))
      
         # Successively select from visit with most observations for additional subjects
          datafnl <- NULL
          while (nrow(dataset) > 0){
           # create table of number of subjects per visit
            tb <- dataset %>% group_by(visit) %>%
                  summarise(count = n())
           # order the table in decreasing order, choose the top visit (most subjects)
            tb <- tb[order(tb$count, decreasing = TRUE), ]
            v <- tb %>% slice(1) %>% select(visit)
            v <- as.numeric(v)
           # select subjects with that visit
            tmp <- dataset %>% filter(visit == v)
            datafnl <- rbind(datafnl, tmp)
           # remove chosen set of subjects and repeat the process with remaining subjects
            dataset <- anti_join(dataset, tmp, by = "topmed_subject_id")
          }
         datafnl <- datafnl %>% select(topmed_subject_id, neutrophil_ncnc_bld, age) %>% na.omit
         return(datafnl)
      }
      ```
<a id="neutrophil_ncnc_bld_1-cardia"></a>
  * ### blood_cell_count/neutrophil_ncnc_bld_1 -- **CARDIA CARDIA Cohort**:
    * 6 component_study_variables
      * _phs000285.v3.pht001559.v2.phv00112439.v2_. dbGap Name: **A01AGE2**, Desc: **AGE VERIFY**, Table: **A4F01**.
      * _phs000285.v3.pht001563.v2.phv00112686.v2_. dbGap Name: **A05WBC**, Desc: **WHITE CELL COUNT (X 1000)**, Table: **A4F05**.
      * _phs000285.v3.pht001563.v2.phv00112694.v2_. dbGap Name: **A05NEUTR**, Desc: **NEUTROPHILS (%)**, Table: **A4F05**.
      * _phs000285.v3.pht001563.v2.phv00112695.v2_. dbGap Name: **A05GRAN**, Desc: **GRANULOCYTES (%)**, Table: **A4F05**.
      * _phs000285.v3.pht001563.v2.phv00112697.v2_. dbGap Name: **A05BANDS**, Desc: **BANDS (%)**, Table: **A4F05**.
      * _phs000285.v3.pht001563.v2.phv00112698.v2_. dbGap Name: **A05SEGS**, Desc: **SEGS (%)**, Table: **A4F05**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # Age at measurement (Exam 1)
          dat1 <- phen_list$source_data[["pht001559"]] %>%
              tbl_df() %>%
              transmute(topmed_subject_id, age = as.numeric(A01AGE2))
      
          # Neutrophil count at Exam 1 (thousands/microliter)
          # Naming of neutrophils varied across recordings - neutrophil, bands, segs, granulocyte
          #   first replace missing "M" with NA and make variables numeric
          dat2 <- phen_list$source_data[["pht001563"]]
          vars <- c("A05NEUTR", "A05BANDS", "A05SEGS", "A05GRAN")
          for (v in vars){
            sel <- dat2[, v] %in% "M"
            dat2[sel, v] <- NA
            dat2[, v] <- as.numeric(dat2[, v])
          }
      
          # exclude subjects if have missing values for all types
          dat2 <- dat2 %>% filter(!(is.na(A05NEUTR) & is.na(A05BANDS) & is.na(A05SEGS) & is.na(A05GRAN)))
      
          # Find total % of neutrophils (add up excluding NA)
          dat2$NEUTR <- rowSums(dat2[, vars], na.rm = TRUE)
      
          # derive count from total WBC (A05WBC) and % neutrophils (NEUTR)
      
          dat2 <- dat2 %>%
              mutate(neutrophil_ncnc_bld = as.numeric(A05WBC) * as.numeric(NEUTR) / 100)
      
          dataset <- left_join(dat2, dat1, by = "topmed_subject_id") %>%
              select(topmed_subject_id, neutrophil_ncnc_bld, age) %>% na.omit()
      
          return(dataset)
      }
      ```
<a id="neutrophil_ncnc_bld_1-hchs_sol"></a>
  * ### blood_cell_count/neutrophil_ncnc_bld_1 -- **HCHS_SOL Hispanic Community Health Study /Study of Latinos (HCHS/SOL)**:
    * 3 component_study_variables
      * _phs000810.v1.pht004715.v1.phv00226251.v1_. dbGap Name: **AGE**, Desc: **Age**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
      * _phs000810.v1.pht004715.v1.phv00226283.v1_. dbGap Name: **LABA1**, Desc: **White Blood Count (x10e9) (LABA1)**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
      * _phs000810.v1.pht004715.v1.phv00226284.v1_. dbGap Name: **LABA10**, Desc: **% Neutrophils (LABA10)**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # Neutrophils (thousands/microliter) and age at measurement
          # derive count from total WBC (LABA1) and % neutrophils (LABA10)
          dataset <- phen_list$source_data[["pht004715"]] %>%
              tbl_df %>%
              mutate(neutrophil_ncnc_bld = as.numeric(LABA1) * as.numeric(LABA10) / 100,
                  age = as.integer(AGE)) %>%
              select(topmed_subject_id, age, neutrophil_ncnc_bld) %>%
              filter(!is.na(age), !is.na(neutrophil_ncnc_bld))
      
          return(dataset)
      }
      ```
<a id="neutrophil_ncnc_bld_1-jhs"></a>
  * ### blood_cell_count/neutrophil_ncnc_bld_1 -- **JHS Jackson Heart Study (JHS) Cohort**:
    * 4 component_study_variables
      * _phs000286.v5.pht001949.v1.phv00126009.v1_. No dbGap metadata available.
      * _phs000286.v5.pht001959.v1.phv00127630.v1_. dbGap Name: **SEGS**, Desc: **Segs: diff measure % [Visit 1]**, Table: **loca**.
      * _phs000286.v5.pht001959.v1.phv00127631.v1_. dbGap Name: **WBC**, Desc: **White blood cells TH/CMM [Visit 1]**, Table: **loca**.
      * _phs000286.v5.pht001959.v1.phv00127632.v1_. dbGap Name: **BANDS**, Desc: **Bands: diff measure % [Visit 1]**, Table: **loca**.
    * **Function:**
      ```r
      harmonize <- function(phen_list) {
      
         library("dplyr")
      
         source_data <- phen_list$source_data
        # neutrophil_count
        dataset1 <- source_data[["pht001959"]]
        dataset1$WBC <- as.numeric(dataset1$WBC)
        dataset1$BANDS <- as.numeric(dataset1$BANDS)
        dataset1$SEGS <- as.numeric(dataset1$SEGS)
      
        sel <- !is.na(dataset1$WBC) &  !is.na(dataset1$SEGS)
        dataset1 <- dataset1[sel, ]
        # treat missing BANDS as 0 for adding to SEGS
        dataset1$BANDS[is.na(dataset1$BANDS)] <- 0
        dataset1$neutrophil_ncnc_bld <- dataset1$WBC * (dataset1$SEGS + dataset1$BANDS) / 100
        dataset1$WBC <- NULL
        dataset1$BANDS <- NULL
        dataset1$SEGS <- NULL
      
        # age
        dataset2 <- source_data[["pht001949"]]
        dataset2$AGE01 <- as.numeric(dataset2$AGE01)
        names(dataset2)[names(dataset2) %in% "AGE01"] <- "age"
      
        # combine
        dataset <- inner_join(dataset1, dataset2)
      
        # subset to non-missing values
        sel <- !is.na(dataset$age) & !is.na(dataset$neutrophil_ncnc_bld)
        dataset <- dataset[sel, ]
      
        return(dataset)
      }
      ```
<a id="neutrophil_ncnc_bld_1-mesa"></a>
  * ### blood_cell_count/neutrophil_ncnc_bld_1 -- **MESA Multi-Ethnic Study of Atherosclerosis (MESA) Cohort**:
    * 2 component_study_variables
      * _phs000209.v13.pht003091.v3.phv00176011.v1_. dbGap Name: **age5c**, Desc: **AGE AT EXAM 5**, Table: **MESA_Exam5Main**.
      * _phs000209.v13.pht004319.v1.phv00218999.v1_. dbGap Name: **polysa5**, Desc: **NEUTROPHILS (ABSOLUTE) (x10E3/uL)**, Table: **MESA_AncilMesaEpigenomicCBC**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # Age at Exam 5
          dataset_dem <- phen_list$source_data[["pht003091"]] %>%
              tbl_df %>%
              transmute(topmed_subject_id, age = as.integer(age5c))
      
          # Neutrophils (cells x 10^3/uL of blood)
          wbc <- phen_list$source_data[["pht004319"]] %>%
              tbl_df %>%
              mutate(neutrophil_ncnc_bld = as.numeric(polysa5)) %>%
              select(topmed_subject_id, neutrophil_ncnc_bld) %>%
              filter(complete.cases(.))
      
          dataset <- inner_join(dataset_dem, wbc, by = "topmed_subject_id") %>%
              na.omit()
      
          return(dataset)
      }
      ```
<a id="platelet_ncnc_bld_1"></a>
## blood_cell_count: **platelet_ncnc_bld_1** (platelet_ncnc_bld)
  Count by volume, or number concentration (ncnc), of platelets in the blood (bld).
  * **Study (harmonization_units)**:
    * [ARIC](#platelet_ncnc_bld_1-aric)
    * [CARDIA](#platelet_ncnc_bld_1-cardia)
    * [CHS](#platelet_ncnc_bld_1-chs)
    * [HCHS_SOL](#platelet_ncnc_bld_1-hchs_sol)
    * [JHS](#platelet_ncnc_bld_1-jhs)
    * [MESA](#platelet_ncnc_bld_1-mesa)
    * [WHI](#platelet_ncnc_bld_1-whi)
  * **Metadata**:
    **`Data Type`**: integer, **`Measurement Units`**: thousands / microliter, **`Version`**: 4, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2018-09-28 15:28:37
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C0942474
  * **DCC Harmonization Comments**:

    For studies or cohorts with measurements at more than one visit, in order to maximize sample size, one measurement per subject was selected, rather than choosing the same visit for all subjects. This was done on a trait-by-trait basis. The algorithm for choosing a visit for a subject differed by study.
    
    ### Study-specific comments
    
    #### ARIC
    The visit with the most non-missing phenotype values was chosen first. For subjects without measurements at this visit, the visit with the next most non-missing values was chosen, and so forth in succession. 
    
    #### Amish
    Subjects with age recorded as 90+ were assigned a harmonized age of 90.
    
    ### QC checks
    
    Analysts should carefully examine distributions of the *_WHI_* platelet values. There is at least one extreme outlier.
    
    Please note that visit selection to maximize sample size introduced the possibility that related _harmonized_ hematology variables may be measured at different visits for a given subject. 
    
<a id="platelet_ncnc_bld_1-aric"></a>
  * ### blood_cell_count/platelet_ncnc_bld_1 -- **ARIC Atherosclerosis Risk in Communities (ARIC) Cohort**:
    * 10 component_study_variables
      * _phs000280.v4.pht004062.v2.phv00204623.v1_. No dbGap metadata available.
      * _phs000280.v4.pht004063.v2.phv00204712.v1_. dbGap Name: **V1AGE01**, Desc: **Age at visit 1 [Cohort. Visit 1]**, Table: **DERIVE13**.
      * _phs000280.v4.pht004064.v2.phv00204871.v1_. dbGap Name: **V3AGE31**, Desc: **Age at visit 3 [Cohort. Visit 3]**, Table: **DERIVE37**.
      * _phs000280.v4.pht004065.v2.phv00204975.v1_. No dbGap metadata available.
      * _phs000280.v4.pht004107.v2.phv00207258.v1_. dbGap Name: **HMTA04**, Desc: **Platelet count x1000/mm3 (MAV). Q4 [Hematology Form. HMTA. Visit 1]**, Table: **HMTA**.
      * _phs000280.v4.pht004108.v2.phv00207273.v1_. dbGap Name: **HMTB04**, Desc: **Platelet count x1000/mm3 (MAV). Q4 [Hematology Form. HMTB. Visit 2]**, Table: **HMTB**.
      * _phs000280.v4.pht004109.v2.phv00207294.v1_. dbGap Name: **HMTC10**, Desc: **Platelet count Q10 [Hematology Lab. HMTCV301. Visit 3]**, Table: **HMTCV301**.
      * _phs000280.v4.pht004110.v2.phv00207306.v1_. dbGap Name: **HMTC10**, Desc: **Platelet count. Q10 [Hematology Lab. HMTCV401. Visit 4]**, Table: **HMTCV401**.
      * _phs000280.v4.pht006422.v1.phv00294958.v1_. dbGap Name: **CBC7**, Desc: **Platelet count, Plt [Complete Blood Count, CBC, Visit 5]**, Table: **CBC**.
      * _phs000280.v4.pht006431.v1.phv00295623.v1_. No dbGap metadata available.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
          # Age at visit
          dem1 <- phen_list$source_data[["pht004063"]] %>%
              mutate(visit = 1, age = as.numeric(V1AGE01))
          dem2 <- phen_list$source_data[["pht004062"]] %>%
              mutate(visit = 2, age = as.numeric(V2AGE22))
          dem3 <- phen_list$source_data[["pht004064"]] %>%
              mutate(visit = 3, age = as.numeric(V3AGE31))
          dem4 <- phen_list$source_data[["pht004065"]] %>%
              mutate(visit = 4, age = as.numeric(V4AGE41))
          dem5 <- phen_list$source_data[["pht006431"]] %>%
              mutate(visit  = 5, age = as.numeric(AGE_STAGE_1))
      
          dem <- list(dem1, dem2, dem3, dem4, dem5) %>%
              lapply(select, topmed_subject_id, visit, age) %>%
              do.call(rbind, .) %>%
              tbl_df %>%
              filter(!is.na(visit) & !is.na(age))
      
          # Platelet count (thousands/microliter)
          # get platelet data for each visit, eliminate subjects with missing codes
          blood1 <- phen_list$source_data[["pht004107"]] %>%
              filter(!(HMTA04 %in% c("A", "O")) ) %>%
              mutate(visit = 1, platelet_ncnc_bld = as.numeric(HMTA04))
          blood2 <- phen_list$source_data[["pht004108"]] %>%
              filter(!(HMTB04 %in% c("A", "O")) ) %>%
              mutate(visit = 2, platelet_ncnc_bld = as.numeric(HMTB04))
          blood3 <- phen_list$source_data[["pht004109"]] %>%
              filter(!(HMTC10 %in% c("A", "O")) ) %>%
              mutate(visit = 3, platelet_ncnc_bld = as.numeric(HMTC10))
          blood4 <- phen_list$source_data[["pht004110"]] %>%
              filter(!(HMTC10 %in% c("A", "O")) ) %>%
              mutate(visit = 4, platelet_ncnc_bld = as.numeric(HMTC10))
          blood5 <- phen_list$source_data[["pht006422"]] %>%
              filter(!(CBC7 %in% c("A", "O")) ) %>%
              mutate(visit = 5, platelet_ncnc_bld = as.numeric(CBC7))
      
          blood <- list(blood1, blood2, blood3, blood4, blood5) %>%
              lapply(select, topmed_subject_id, visit, platelet_ncnc_bld) %>%
              lapply(na.omit)
      
          blood %<>% do.call(rbind, .)
      
          dataset <- left_join(blood, dem, c("topmed_subject_id", "visit"))
      
          # Successively select from visit with most observations for additional subjects
          datafnl <- NULL
          while (nrow(dataset) > 0){
           # create table of number of subjects per visit
            tb <- dataset %>% group_by(visit) %>%
                  summarise(count = n())
           # order the table in decreasing order, choose the top visit (most subjects)
            tb <- tb[order(tb$count, decreasing = TRUE), ]
            v <- tb %>% slice(1) %>% select(visit)
            v <- as.numeric(v)
           # select subjects with that visit
            tmp <- dataset %>% filter(visit == v)
            datafnl <- rbind(datafnl, tmp)
           # remove chosen set of subjects and repeat the process with remaining subjects
            dataset <- anti_join(dataset, tmp, by = "topmed_subject_id")
          }
         datafnl <- datafnl %>% select(topmed_subject_id, platelet_ncnc_bld, age) %>% na.omit
         return(datafnl)
      }
      ```
<a id="platelet_ncnc_bld_1-cardia"></a>
  * ### blood_cell_count/platelet_ncnc_bld_1 -- **CARDIA CARDIA Cohort**:
    * 2 component_study_variables
      * _phs000285.v3.pht001559.v2.phv00112439.v2_. dbGap Name: **A01AGE2**, Desc: **AGE VERIFY**, Table: **A4F01**.
      * _phs000285.v3.pht001563.v2.phv00112690.v2_. dbGap Name: **A05PLATL**, Desc: **PLATELET COUNT**, Table: **A4F05**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # Age at measurement (Exam 1)
          dat1 <- phen_list$source_data[["pht001559"]] %>%
              tbl_df() %>%
              transmute(topmed_subject_id, age = as.numeric(A01AGE2))
      
          # Platelet count at Exam 1
          # eliminate subjects with missing code "M"
          # need to convert to units of thousands/microliter
          dat2 <- phen_list$source_data[["pht001563"]] %>%
              tbl_df() %>% filter(!(A05PLATL %in% "M")) %>%
              transmute(topmed_subject_id, platelet_ncnc_bld = as.numeric(A05PLATL) * 100)
      
          dataset <- left_join(dat2, dat1, by = "topmed_subject_id") %>%
              select(topmed_subject_id, platelet_ncnc_bld, age) %>% na.omit()
      
          return(dataset)
      }
      ```
<a id="platelet_ncnc_bld_1-chs"></a>
  * ### blood_cell_count/platelet_ncnc_bld_1 -- **CHS Cardiovascular Health Study (CHS) Cohort: an NHLBI-funded observational study of risk factors for cardiovascular disease in adults 65 years or older**:
    * 2 component_study_variables
      * _phs000287.v6.pht001452.v1.phv00100414.v1_. dbGap Name: **PLATE23**, Desc: **PLATELET COUNT (/cc.mm)**, Table: **BASEBOTH**.
      * _phs000287.v6.pht001452.v1.phv00100487.v1_. dbGap Name: **AGEBL**, Desc: **CALCULATED AGE AT BASELINE**, Table: **BASEBOTH**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # Age at baseline and platelet count (cells X 10^3 / uL)
          dataset <- phen_list$source_data[["pht001452"]] %>%
              tbl_df %>%
              mutate(platelet_ncnc_bld = as.integer(PLATE23),
                  age = as.integer(AGEBL)) %>%
              select(topmed_subject_id, age, platelet_ncnc_bld) %>% na.omit
      
          return(dataset)
      }
      ```
<a id="platelet_ncnc_bld_1-hchs_sol"></a>
  * ### blood_cell_count/platelet_ncnc_bld_1 -- **HCHS_SOL Hispanic Community Health Study /Study of Latinos (HCHS/SOL)**:
    * 2 component_study_variables
      * _phs000810.v1.pht004715.v1.phv00226251.v1_. dbGap Name: **AGE**, Desc: **Age**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
      * _phs000810.v1.pht004715.v1.phv00226310.v1_. dbGap Name: **LABA9**, Desc: **Platelet Count (x10e9) (LABA9)**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # Platelet count(thousands/microliter) and age at measurement
      
          dataset <- phen_list$source_data[["pht004715"]] %>%
              tbl_df %>%
              mutate(platelet_ncnc_bld = as.numeric(LABA9),
                  age = as.integer(AGE)) %>%
              select(topmed_subject_id, age, platelet_ncnc_bld) %>%
              filter(!is.na(age), !is.na(platelet_ncnc_bld))
      
          return(dataset)
      }
      ```
<a id="platelet_ncnc_bld_1-jhs"></a>
  * ### blood_cell_count/platelet_ncnc_bld_1 -- **JHS Jackson Heart Study (JHS) Cohort**:
    * 2 component_study_variables
      * _phs000286.v5.pht001949.v1.phv00126009.v1_. No dbGap metadata available.
      * _phs000286.v5.pht001959.v1.phv00127616.v1_. dbGap Name: **PLATELET**, Desc: **Platelet TH/CMM [Visit 1]**, Table: **loca**.
    * **Function:**
      ```r
      harmonize <- function(phen_list) {
        library("dplyr")
      
        source_data <- phen_list$source_data
        # platelet_ncnc_bld
        dataset1 <- source_data[["pht001959"]]
        dataset1$PLATELET <- as.integer(dataset1$PLATELET)
        names(dataset1)[names(dataset1) %in% "PLATELET"] <- "platelet_ncnc_bld"
      
        # age
        dataset2 <- source_data[["pht001949"]]
        dataset2$AGE01 <- as.numeric(dataset2$AGE01)
        names(dataset2)[names(dataset2) %in% "AGE01"] <- "age"
      
        # combine
        dataset <- inner_join(dataset1, dataset2)
      
        # subset to non-missing values
        sel <- !is.na(dataset$age) & !is.na(dataset$platelet_ncnc_bld)
        dataset <- dataset[sel, ]
      
        return(dataset)
      }
      ```
<a id="platelet_ncnc_bld_1-mesa"></a>
  * ### blood_cell_count/platelet_ncnc_bld_1 -- **MESA Multi-Ethnic Study of Atherosclerosis (MESA) Cohort**:
    * 2 component_study_variables
      * _phs000209.v13.pht003091.v3.phv00176011.v1_. dbGap Name: **age5c**, Desc: **AGE AT EXAM 5**, Table: **MESA_Exam5Main**.
      * _phs000209.v13.pht004319.v1.phv00218991.v1_. dbGap Name: **plt5**, Desc: **PLATELETS (x10E3/uL)**, Table: **MESA_AncilMesaEpigenomicCBC**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          library(magrittr)
          # Age at Exam 5
          dataset_dem <- phen_list$source_data[["pht003091"]] %>%
              tbl_df %>%
              transmute(topmed_subject_id, age = as.integer(age5c))
      
          # Platelets at Exam 5 (cells x 10^3 / uL)
          dataset_blood <- phen_list$source_data[["pht004319"]] %>%
              tbl_df() %>%
              transmute(topmed_subject_id, platelet_ncnc_bld = as.integer(plt5))
      
          dataset <- inner_join(dataset_dem, dataset_blood, by = "topmed_subject_id") %>%
              na.omit()
      
          return(dataset)
      }
      ```
<a id="platelet_ncnc_bld_1-whi"></a>
  * ### blood_cell_count/platelet_ncnc_bld_1 -- **WHI Women's Health Initiative**:
    * 5 component_study_variables
      * _phs000200.v11.pht000986.v6.phv00077362.v6_. dbGap Name: **CBCVY**, Desc: **CBC Visit year**, Table: **cbc_rel1**.
      * _phs000200.v11.pht000986.v6.phv00077363.v6_. dbGap Name: **CBCDAYS**, Desc: **CBC Days since randomization/enrollment**, Table: **cbc_rel1**.
      * _phs000200.v11.pht000986.v6.phv00077367.v6_. dbGap Name: **PLATELET**, Desc: **Platelet count (Kcell/microliter)**, Table: **cbc_rel1**.
      * _phs000200.v11.pht000998.v6.phv00078436.v6_. dbGap Name: **F2DAYS**, Desc: **F2 Days since randomization**, Table: **f2_rel1**.
      * _phs000200.v11.pht000998.v6.phv00078437.v6_. dbGap Name: **AGE**, Desc: **Age at screening**, Table: **f2_rel1**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
          # Platelets (thousands/microliter) and age at measurement
          dataset <- phen_list$source_data[["pht000986"]] %>%
              # Age
              left_join(phen_list$source_data[["pht000998"]], by = "topmed_subject_id") %>%
      
              # AGE is measured at screening on form F2.
              # abs(F2DAYS) is days between screening and enrollment.
              # do not use F2DAYS when F2DAYS > 0
              # CBCDAYS is days from enrollment to trait measurement
              mutate(F2DAYS = ifelse(as.integer(F2DAYS) > 0, 0, F2DAYS)) %>%
              mutate(platelet_ncnc_bld = as.integer(PLATELET),
                  age = as.integer(AGE) +
                      (as.integer(CBCDAYS) + abs(as.integer(F2DAYS))) / 365.25) %>%
              select(topmed_subject_id,
                     age, CBCVY,
                    platelet_ncnc_bld) %>%
                      # Use year 0 measurement.
              filter(CBCVY %in% 0 & !is.na(platelet_ncnc_bld) & !is.na(age)) %>%
              select(topmed_subject_id, age, platelet_ncnc_bld)
      
          return(dataset)
      }
      ```
<a id="pmv_entvol_bld_1"></a>
## blood_cell_count: **pmv_entvol_bld_1** (pmv_entvol_bld)
  Measurement of the mean volume (entvol) of platelets in the blood (bld), known as mean platelet volume (MPV or PMV).
  * **Study (harmonization_units)**:
    * [ARIC](#pmv_entvol_bld_1-aric)
    * [JHS](#pmv_entvol_bld_1-jhs)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: fL = femtoliter, **`Version`**: 2, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2018-09-28 15:33:16
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C0944136
  * **DCC Harmonization Comments**:

    Measurements for each harmonization unit were from a single exam/visit.
    
    ### QC checks
    
    Please note that visit selection to maximize sample size introduced the possibility that related _harmonized_ hematology variables may be measured at different visits for a given subject. For example, for any given subject, the _harmonized_ values for mean platelet volume and platelet count may not be from the same visit.
    
<a id="pmv_entvol_bld_1-aric"></a>
  * ### blood_cell_count/pmv_entvol_bld_1 -- **ARIC Atherosclerosis Risk in Communities (ARIC) Cohort**:
    * 2 component_study_variables
      * _phs000280.v4.pht006422.v1.phv00294963.v1_. dbGap Name: **CBC12**, Desc: **Mean platelet volume, Mpv [Complete Blood Count, CBC, Visit 5]**, Table: **CBC**.
      * _phs000280.v4.pht006431.v1.phv00295623.v1_. No dbGap metadata available.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
          # Mean platelet volume MPV (fL) - measured at visit 5
          # Age at visit
      
          dem <- phen_list$source_data[["pht006431"]] %>%
              mutate(visit  = 5, age = as.numeric(AGE_STAGE_1)) %>%
              filter(!is.na(visit) & !is.na(age))
      
          # get MPV data for visit 5, eliminate subjects with missing codes
          # select desired variables
          blood <- phen_list$source_data[["pht006422"]] %>%
              filter(!(CBC12 %in% c("A", "O")) ) %>%
              mutate(visit = 5, pmv_entvol_bld = as.numeric(CBC12))
          datafnl <- left_join(blood, dem, c("topmed_subject_id", "visit")) %>%
              select(topmed_subject_id, pmv_entvol_bld, age) %>%
              na.omit
      
         return(datafnl)
      }
      ```
<a id="pmv_entvol_bld_1-jhs"></a>
  * ### blood_cell_count/pmv_entvol_bld_1 -- **JHS Jackson Heart Study (JHS) Cohort**:
    * 2 component_study_variables
      * _phs000286.v5.pht001949.v1.phv00126009.v1_. No dbGap metadata available.
      * _phs000286.v5.pht001959.v1.phv00127627.v1_. dbGap Name: **MPV**, Desc: **Mpv FL [Visit 1]**, Table: **loca**.
    * **Function:**
      ```r
      harmonize <- function(phen_list) {
        library("dplyr")
      
        source_data <- phen_list$source_data
         # pmv_entvol_bld  units = fL (femtoliter) mean platelet volume
        dataset1 <- source_data[["pht001959"]]
        dataset1$MPV <- as.numeric(dataset1$MPV)
        names(dataset1)[names(dataset1) %in% "MPV"] <- "pmv_entvol_bld"
      
        # age
        dataset2 <- source_data[["pht001949"]]
        dataset2$AGE01 <- as.numeric(dataset2$AGE01)
        names(dataset2)[names(dataset2) %in% "AGE01"] <- "age"
      
        # combine
        dataset <- inner_join(dataset1, dataset2)
      
        # subset to non-missing values
        sel <- !is.na(dataset$age) & !is.na(dataset$pmv_entvol_bld)
        dataset <- dataset[sel, ]
      
        return(dataset)
      }
      ```
<a id="rbc_ncnc_bld_1"></a>
## blood_cell_count: **rbc_ncnc_bld_1** (rbc_ncnc_bld)
  Count by volume, or number concentration (ncnc), of red blood cells in the blood (bld).
  * **Study (harmonization_units)**:
    * [ARIC](#rbc_ncnc_bld_1-aric)
    * [CARDIA](#rbc_ncnc_bld_1-cardia)
    * [HCHS_SOL](#rbc_ncnc_bld_1-hchs_sol)
    * [JHS](#rbc_ncnc_bld_1-jhs)
    * [MESA](#rbc_ncnc_bld_1-mesa)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: millions / microliter, **`Version`**: 3, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2018-09-28 15:33:27
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C0942422
  * **DCC Harmonization Comments**:

    For studies or cohorts with measurements at more than one visit, in order to maximize sample size, one measurement per subject was selected, rather than choosing the same visit for all subjects. This was done on a trait-by-trait basis. The algorithm for choosing a visit for a subject differed by study.
    
    ### Study-specific comments
    
    #### FHS
    Only the Offspring subcohort had measurements at multiple visits (exams). For this subcohort, the measurement at the most recent exam available was chosen (since more recent exams used more up-to-date procedures). 
    
    #### ARIC
    The visit with the most non-missing phenotype values was chosen first. For subjects without measurements at this visit, the visit with the next most non-missing values was chosen, and so forth in succession. 
    
    #### Amish
    Subjects with age recorded as 90+ were assigned a harmonized age of 90.
    
    ### QC checks
    
    Please note that visit selection to maximize sample size introduced the possibility that related _harmonized_ hematology variables may be measured at different visits for a given subject. For example, for any given subject, the _harmonized_ values of red blood cell count (RBC) and other red blood cell phenotypes may not be from the same visit.
    
<a id="rbc_ncnc_bld_1-aric"></a>
  * ### blood_cell_count/rbc_ncnc_bld_1 -- **ARIC Atherosclerosis Risk in Communities (ARIC) Cohort**:
    * 6 component_study_variables
      * _phs000280.v4.pht004064.v2.phv00204871.v1_. dbGap Name: **V3AGE31**, Desc: **Age at visit 3 [Cohort. Visit 3]**, Table: **DERIVE37**.
      * _phs000280.v4.pht004065.v2.phv00204975.v1_. No dbGap metadata available.
      * _phs000280.v4.pht004109.v2.phv00207287.v1_. dbGap Name: **HMTC3**, Desc: **Red blood count. Q3 [Hematology Lab. HMTCV301. Visit 3]**, Table: **HMTCV301**.
      * _phs000280.v4.pht004110.v2.phv00207299.v1_. dbGap Name: **HMTC3**, Desc: **Red blood count. Q3 [Hematology Lab. HMTCV401. Visit 4]**, Table: **HMTCV401**.
      * _phs000280.v4.pht006422.v1.phv00294955.v1_. dbGap Name: **CBC4**, Desc: **Red blood cell count, Rbc [Complete Blood Count, CBC, Visit 5]**, Table: **CBC**.
      * _phs000280.v4.pht006431.v1.phv00295623.v1_. No dbGap metadata available.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
          # Red blood cell count RBC (millions/microliter) - measured at visit 3, 4, and 5
          # Age at visit
          dem3 <- phen_list$source_data[["pht004064"]] %>%
              mutate(visit = 3, age = as.numeric(V3AGE31))
          dem4 <- phen_list$source_data[["pht004065"]] %>%
              mutate(visit = 4, age = as.numeric(V4AGE41))
          dem5 <- phen_list$source_data[["pht006431"]] %>%
              mutate(visit  = 5, age = as.numeric(AGE_STAGE_1))
      
          dem <- list(dem3, dem4, dem5) %>%
              lapply(select, topmed_subject_id, visit, age) %>%
              do.call(rbind, .) %>%
              tbl_df %>%
              filter(!is.na(visit) & !is.na(age))
      
          # get RBC data for each visit, eliminate subjects with missing codes
          blood3 <- phen_list$source_data[["pht004109"]] %>%
              filter(!(HMTC3 %in% c("A", "O")) ) %>%
              mutate(visit = 3, rbc_ncnc_bld = as.numeric(HMTC3))
          blood4 <- phen_list$source_data[["pht004110"]] %>%
              filter(!(HMTC3 %in% c("A", "O")) ) %>%
              mutate(visit = 4, rbc_ncnc_bld = as.numeric(HMTC3))
          blood5 <- phen_list$source_data[["pht006422"]] %>%
              filter(!(CBC4 %in% c("A", "O")) ) %>%
              mutate(visit = 5, rbc_ncnc_bld = as.numeric(CBC4))
      
          blood <- list(blood3, blood4, blood5) %>%
              lapply(select, topmed_subject_id, visit, rbc_ncnc_bld) %>%
              lapply(na.omit)
      
          blood %<>% do.call(rbind, .)
      
          dataset <- left_join(blood, dem, c("topmed_subject_id", "visit"))
      
          # Successively select from visit with most observations for additional subjects
          datafnl <- NULL
          while (nrow(dataset) > 0){
           # create table of number of subjects per visit
            tb <- dataset %>% group_by(visit) %>%
                  summarise(count = n())
           # order the table in decreasing order, choose the top visit (most subjects)
            tb <- tb[order(tb$count, decreasing = TRUE), ]
            v <- tb %>% slice(1) %>% select(visit)
            v <- as.numeric(v)
           # select subjects with that visit
            tmp <- dataset %>% filter(visit == v)
            datafnl <- rbind(datafnl, tmp)
           # remove chosen set of subjects and repeat the process with remaining subjects
            dataset <- anti_join(dataset, tmp, by = "topmed_subject_id")
          }
         datafnl <- datafnl %>% select(topmed_subject_id, rbc_ncnc_bld, age) %>% na.omit
         return(datafnl)
      }
      ```
<a id="rbc_ncnc_bld_1-cardia"></a>
  * ### blood_cell_count/rbc_ncnc_bld_1 -- **CARDIA CARDIA Cohort**:
    * 2 component_study_variables
      * _phs000285.v3.pht001559.v2.phv00112439.v2_. dbGap Name: **A01AGE2**, Desc: **AGE VERIFY**, Table: **A4F01**.
      * _phs000285.v3.pht001563.v2.phv00112687.v2_. dbGap Name: **A05RBC**, Desc: **RED CELL COUNT (X 1,000,000)**, Table: **A4F05**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # Age at measurement (Exam 1)
          dat1 <- phen_list$source_data[["pht001559"]] %>%
              tbl_df() %>%
              transmute(topmed_subject_id, age = as.numeric(A01AGE2))
      
          # Red blood cell count (RBC) at Exam 1 (millions/microliter)
          # eliminate subjects with missing code "M"
          dat2 <- phen_list$source_data[["pht001563"]] %>%
              tbl_df() %>% filter(!(A05RBC %in% "M")) %>%
              transmute(topmed_subject_id, rbc_ncnc_bld = as.numeric(A05RBC))
      
          dataset <- left_join(dat2, dat1, by = "topmed_subject_id") %>%
              select(topmed_subject_id, rbc_ncnc_bld, age) %>% na.omit()
      
          return(dataset)
      }
      ```
<a id="rbc_ncnc_bld_1-hchs_sol"></a>
  * ### blood_cell_count/rbc_ncnc_bld_1 -- **HCHS_SOL Hispanic Community Health Study /Study of Latinos (HCHS/SOL)**:
    * 2 component_study_variables
      * _phs000810.v1.pht004715.v1.phv00226251.v1_. dbGap Name: **AGE**, Desc: **Age**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
      * _phs000810.v1.pht004715.v1.phv00226294.v1_. dbGap Name: **LABA2**, Desc: **Red Blood Count (x10e12) (LABA2)**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # Red blood cell count (RBC) (millions/microliter) and age at measurement
      
          dataset <- phen_list$source_data[["pht004715"]] %>%
              tbl_df %>%
              mutate(rbc_ncnc_bld = as.numeric(LABA2),
                  age = as.integer(AGE)) %>%
              select(topmed_subject_id, age, rbc_ncnc_bld) %>%
              filter(!is.na(age), !is.na(rbc_ncnc_bld))
      
          return(dataset)
      }
      ```
<a id="rbc_ncnc_bld_1-jhs"></a>
  * ### blood_cell_count/rbc_ncnc_bld_1 -- **JHS Jackson Heart Study (JHS) Cohort**:
    * 2 component_study_variables
      * _phs000286.v5.pht001949.v1.phv00126009.v1_. No dbGap metadata available.
      * _phs000286.v5.pht001959.v1.phv00127629.v1_. dbGap Name: **RED_CELL_COUNT**, Desc: **Red cell count M/CMM [Visit 1]**, Table: **loca**.
    * **Function:**
      ```r
      harmonize <- function(phen_list) {
        library("dplyr")
      
        source_data <- phen_list$source_data
         # RBC_ncnc_bld
        dataset1 <- source_data[["pht001959"]]
        dataset1$RED_CELL_COUNT <- as.numeric(dataset1$RED_CELL_COUNT)
        names(dataset1)[names(dataset1) %in% "RED_CELL_COUNT"] <- "rbc_ncnc_bld"
      
        # age
        dataset2 <- source_data[["pht001949"]]
        dataset2$AGE01 <- as.numeric(dataset2$AGE01)
        names(dataset2)[names(dataset2) %in% "AGE01"] <- "age"
      
        # combine
        dataset <- inner_join(dataset1, dataset2)
      
        # subset to non-missing values
        sel <- !is.na(dataset$age) & !is.na(dataset$rbc_ncnc_bld)
        dataset <- dataset[sel, ]
      
        return(dataset)
      }
      ```
<a id="rbc_ncnc_bld_1-mesa"></a>
  * ### blood_cell_count/rbc_ncnc_bld_1 -- **MESA Multi-Ethnic Study of Atherosclerosis (MESA) Cohort**:
    * 2 component_study_variables
      * _phs000209.v13.pht003091.v3.phv00176011.v1_. dbGap Name: **age5c**, Desc: **AGE AT EXAM 5**, Table: **MESA_Exam5Main**.
      * _phs000209.v13.pht004319.v1.phv00218990.v1_. dbGap Name: **rbc5**, Desc: **RED BLOOD CELL (RBC) (x10E6/uL)**, Table: **MESA_AncilMesaEpigenomicCBC**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          # RBC count at Exam 5 (M/uL)
          dataset_rbc <- phen_list$source_data[["pht004319"]] %>%
              mutate(rbc_ncnc_bld = as.numeric(rbc5)) %>%
              select(topmed_subject_id, rbc_ncnc_bld)
      
          # Age at Exam 5
          dataset_dem <- phen_list$source_data[["pht003091"]] %>%
              mutate(age = as.integer(age5c)) %>%
              select(topmed_subject_id, age)
      
          # Join and remove incomplete cases
          dataset <- inner_join(dataset_dem, dataset_rbc, by = "topmed_subject_id") %>%
              filter(complete.cases(.))
          return(dataset)
      }
      ```
<a id="rdw_ratio_rbc_1"></a>
## blood_cell_count: **rdw_ratio_rbc_1** (rdw_ratio_rbc)
  Measurement of the ratio of variation in width to the mean width of the red blood cell (rbc) volume distribution curve taken at +/- 1 CV, known as red cell distribution width (RDW).
  * **Study (harmonization_units)**:
    * [ARIC](#rdw_ratio_rbc_1-aric)
    * [HCHS_SOL](#rdw_ratio_rbc_1-hchs_sol)
    * [JHS](#rdw_ratio_rbc_1-jhs)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: % = percentage, **`Version`**: 3, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2018-09-28 15:33:56
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C0362909
  * **DCC Harmonization Comments**:

    For studies or cohorts with measurements at more than one visit, in order to maximize sample size, one measurement per subject was selected, rather than choosing the same visit for all subjects. This was done on a trait-by-trait basis. The algorithm for choosing a visit for a subject differed by study.
    
    ### Study-specific comments
    
    #### ARIC
    The visit with the most non-missing phenotype values was chosen first. For subjects without measurements at this visit, the visit with the next most non-missing values was chosen, and so forth in succession. 
    
    ### QC checks
    
    Please note that visit selection to maximize sample size introduced the possibility that related _harmonized_ hematology variables may be measured at different visits for a given subject. For example, for any given subject, the _harmonized_ values of red cell distribution width and other red blood cell phenotypes may not be from the same visit.
    
<a id="rdw_ratio_rbc_1-aric"></a>
  * ### blood_cell_count/rdw_ratio_rbc_1 -- **ARIC Atherosclerosis Risk in Communities (ARIC) Cohort**:
    * 6 component_study_variables
      * _phs000280.v4.pht004064.v2.phv00204871.v1_. dbGap Name: **V3AGE31**, Desc: **Age at visit 3 [Cohort. Visit 3]**, Table: **DERIVE37**.
      * _phs000280.v4.pht004065.v2.phv00204975.v1_. No dbGap metadata available.
      * _phs000280.v4.pht004109.v2.phv00207292.v1_. dbGap Name: **HMTC9**, Desc: **RBC distribution width. Q9 [Hematology Lab. HMTCV301. Visit 3]**, Table: **HMTCV301**.
      * _phs000280.v4.pht004110.v2.phv00207304.v1_. dbGap Name: **HMTC9**, Desc: **RBC distribution width. Q9 [Hematology Lab. HMTCV401. Visit 4]**, Table: **HMTCV401**.
      * _phs000280.v4.pht006422.v1.phv00294962.v1_. dbGap Name: **CBC11**, Desc: **Red cell distribution width, Rdw [Complete Blood Count, CBC, Visit 5]**, Table: **CBC**.
      * _phs000280.v4.pht006431.v1.phv00295623.v1_. No dbGap metadata available.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
          # Red blood cell distribution width RDW (%) - visits 3, 4, and 5
          # Age at visit
          dem3 <- phen_list$source_data[["pht004064"]] %>%
              mutate(visit = 3, age = as.numeric(V3AGE31))
          dem4 <- phen_list$source_data[["pht004065"]] %>%
              mutate(visit = 4, age = as.numeric(V4AGE41))
          dem5 <- phen_list$source_data[["pht006431"]] %>%
              mutate(visit  = 5, age = as.numeric(AGE_STAGE_1))
      
          dem <- list(dem3, dem4, dem5) %>%
              lapply(select, topmed_subject_id, visit, age) %>%
              do.call(rbind, .) %>%
              tbl_df %>%
              filter(!is.na(visit) & !is.na(age))
      
          # get RDW data for each visit, eliminate subjects with missing codes
          blood3 <- phen_list$source_data[["pht004109"]] %>%
              filter(!(HMTC9 %in% c("A", "O")) ) %>%
              mutate(visit = 3, rdw_ratio_rbc = as.numeric(HMTC9))
          blood4 <- phen_list$source_data[["pht004110"]] %>%
              filter(!(HMTC9 %in% c("A", "O")) ) %>%
              mutate(visit = 4, rdw_ratio_rbc = as.numeric(HMTC9))
          blood5 <- phen_list$source_data[["pht006422"]] %>%
              filter(!(CBC11 %in% c("A", "O")) ) %>%
              mutate(visit = 5, rdw_ratio_rbc = as.numeric(CBC11))
      
          blood <- list(blood3, blood4, blood5) %>%
              lapply(select, topmed_subject_id, visit, rdw_ratio_rbc) %>%
              lapply(na.omit)
      
          blood %<>% do.call(rbind, .)
      
          dataset <- left_join(blood, dem, c("topmed_subject_id", "visit"))
      
          # Successively select from visit with most observations for additional subjects
          datafnl <- NULL
          while (nrow(dataset) > 0){
           # create table of number of subjects per visit
            tb <- dataset %>% group_by(visit) %>%
                  summarise(count = n())
           # order the table in decreasing order, choose the top visit (most subjects)
            tb <- tb[order(tb$count, decreasing = TRUE), ]
            v <- tb %>% slice(1) %>% select(visit)
            v <- as.numeric(v)
           # select subjects with that visit
            tmp <- dataset %>% filter(visit == v)
            datafnl <- rbind(datafnl, tmp)
           # remove chosen set of subjects and repeat the process with remaining subjects
            dataset <- anti_join(dataset, tmp, by = "topmed_subject_id")
          }
         datafnl <- datafnl %>% select(topmed_subject_id, rdw_ratio_rbc, age) %>% na.omit
         return(datafnl)
      }
      ```
<a id="rdw_ratio_rbc_1-hchs_sol"></a>
  * ### blood_cell_count/rdw_ratio_rbc_1 -- **HCHS_SOL Hispanic Community Health Study /Study of Latinos (HCHS/SOL)**:
    * 2 component_study_variables
      * _phs000810.v1.pht004715.v1.phv00226251.v1_. dbGap Name: **AGE**, Desc: **Age**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
      * _phs000810.v1.pht004715.v1.phv00226308.v1_. dbGap Name: **LABA8**, Desc: **% Red Cell Distribution Width (LABA8)**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # Red blood cell distribution width (RDW) (%) and age at measurement
      
          dataset <- phen_list$source_data[["pht004715"]] %>%
              tbl_df %>%
              mutate(rdw_ratio_rbc = as.numeric(LABA8),
                  age = as.integer(AGE)) %>%
              select(topmed_subject_id, age, rdw_ratio_rbc) %>%
              filter(!is.na(age), !is.na(rdw_ratio_rbc))
      
          return(dataset)
      }
      ```
<a id="rdw_ratio_rbc_1-jhs"></a>
  * ### blood_cell_count/rdw_ratio_rbc_1 -- **JHS Jackson Heart Study (JHS) Cohort**:
    * 2 component_study_variables
      * _phs000286.v5.pht001949.v1.phv00126009.v1_. No dbGap metadata available.
      * _phs000286.v5.pht001959.v1.phv00127628.v1_. dbGap Name: **RDW**, Desc: **RDW [Visit 1]**, Table: **loca**.
    * **Function:**
      ```r
      harmonize <- function(phen_list) {
        library("dplyr")
      
        source_data <- phen_list$source_data
      
         #rdw_ratio_rbc units = %  red blood cell distribution width
        dataset1 <- source_data[["pht001959"]]
        dataset1$RDW <- as.numeric(dataset1$RDW)
        names(dataset1)[names(dataset1) %in% "RDW"] <- "rdw_ratio_rbc"
      
        # age
        dataset2 <- source_data[["pht001949"]]
        dataset2$AGE01 <- as.numeric(dataset2$AGE01)
        names(dataset2)[names(dataset2) %in% "AGE01"] <- "age"
      
        # combine
        dataset <- inner_join(dataset1, dataset2)
      
        # subset to non-missing values
        sel <- !is.na(dataset$age) & !is.na(dataset$rdw_ratio_rbc)
        dataset <- dataset[sel, ]
      
        return(dataset)
      }
      ```
<a id="wbc_ncnc_bld_1"></a>
## blood_cell_count: **wbc_ncnc_bld_1** (wbc_ncnc_bld)
  Count by volume, or number concentration (ncnc), of white blood cells in the blood (bld).
  * **Study (harmonization_units)**:
    * [ARIC](#wbc_ncnc_bld_1-aric)
    * [CARDIA](#wbc_ncnc_bld_1-cardia)
    * [CHS](#wbc_ncnc_bld_1-chs)
    * [HCHS_SOL](#wbc_ncnc_bld_1-hchs_sol)
    * [JHS](#wbc_ncnc_bld_1-jhs)
    * [MESA](#wbc_ncnc_bld_1-mesa)
    * [WHI](#wbc_ncnc_bld_1-whi)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: thousands / microliter, **`Version`**: 4, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2018-09-28 15:36:33
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C0945357
  * **DCC Harmonization Comments**:

    For studies or cohorts with measurements at more than one visit, in order to maximize sample size, one measurement per subject was selected, rather than choosing the same visit for all subjects. This was done on a trait-by-trait basis. The algorithm for choosing a visit for a subject differed by study.
    
    ### Study-specific comments
    
    #### FHS
    Only the Offspring subcohort had measurements at multiple visits (exams). For this subcohort, the measurement at the most recent exam available was chosen (since more recent exams used more up-to-date procedures). 
    
    #### ARIC
    The visit with the most non-missing phenotype values was chosen first. For subjects without measurements at this visit, the visit with the next most non-missing values was chosen, and so forth in succession. 
    
    #### Amish
    Subjects with age recorded as 90+ were assigned a harmonized age of 90.
    
    ### QC checks
    
    Analysts should carefully examine distributions of the *_WHI_* white blood cell (WBC) values.
    There is a cluster of high-value outliers for which no specific batch effect could be identified but which analysts may wish to exclude from analyses.
    
    Please note that visit selection to maximize sample size introduced the possibility that related _harmonized_ hematology variables may be measured at different visits for a given subject. For example, for any given subject, the _harmonized_ values for WBC and WBC subtype differentials may not be from the same visit, so the harmonized subtype differential counts may not sum to the WBC count.
    
    
    
<a id="wbc_ncnc_bld_1-aric"></a>
  * ### blood_cell_count/wbc_ncnc_bld_1 -- **ARIC Atherosclerosis Risk in Communities (ARIC) Cohort**:
    * 10 component_study_variables
      * _phs000280.v4.pht004062.v2.phv00204623.v1_. No dbGap metadata available.
      * _phs000280.v4.pht004063.v2.phv00204712.v1_. dbGap Name: **V1AGE01**, Desc: **Age at visit 1 [Cohort. Visit 1]**, Table: **DERIVE13**.
      * _phs000280.v4.pht004064.v2.phv00204871.v1_. dbGap Name: **V3AGE31**, Desc: **Age at visit 3 [Cohort. Visit 3]**, Table: **DERIVE37**.
      * _phs000280.v4.pht004065.v2.phv00204975.v1_. No dbGap metadata available.
      * _phs000280.v4.pht004107.v2.phv00207257.v1_. dbGap Name: **HMTA03**, Desc: **White blood count x1000/mm3 (MAV). Q3 [Hematology Form. HMTA. Visit 1]**, Table: **HMTA**.
      * _phs000280.v4.pht004108.v2.phv00207272.v1_. dbGap Name: **HMTB03**, Desc: **White blood count x1000/mm3 (MAV). Q3 [Hematology Form. HMTB. Visit 2]**, Table: **HMTB**.
      * _phs000280.v4.pht004109.v2.phv00207286.v1_. dbGap Name: **HMTC2**, Desc: **White blood count. Q2 [Hematology Lab. HMTCV301. Visit 3]**, Table: **HMTCV301**.
      * _phs000280.v4.pht004110.v2.phv00207298.v1_. dbGap Name: **HMTC2**, Desc: **White blood count. Q2 [Hematology Lab. HMTCV401. Visit 4]**, Table: **HMTCV401**.
      * _phs000280.v4.pht006422.v1.phv00294954.v1_. dbGap Name: **CBC3**, Desc: **White blood cell count, Wbc [Complete Blood Count, CBC, Visit 5]**, Table: **CBC**.
      * _phs000280.v4.pht006431.v1.phv00295623.v1_. No dbGap metadata available.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
          # Age at visit
          dem1 <- phen_list$source_data[["pht004063"]] %>%
              mutate(visit = 1, age = as.numeric(V1AGE01))
          dem2 <- phen_list$source_data[["pht004062"]] %>%
              mutate(visit = 2, age = as.numeric(V2AGE22))
          dem3 <- phen_list$source_data[["pht004064"]] %>%
              mutate(visit = 3, age = as.numeric(V3AGE31))
          dem4 <- phen_list$source_data[["pht004065"]] %>%
              mutate(visit = 4, age = as.numeric(V4AGE41))
          dem5 <- phen_list$source_data[["pht006431"]] %>%
              mutate(visit  = 5, age = as.numeric(AGE_STAGE_1))
      
          dem <- list(dem1, dem2, dem3, dem4, dem5) %>%
              lapply(select, topmed_subject_id, visit, age) %>%
              do.call(rbind, .) %>%
              tbl_df %>%
              filter(!is.na(visit) & !is.na(age))
      
          # White blood cell count (WBC) (thousands/microliter)
          # get WBC data for each visit, eliminate subjects with missing codes
          blood1 <- phen_list$source_data[["pht004107"]] %>%
              filter(!(HMTA03 %in% c("A", "O")) ) %>%
              mutate(visit = 1, wbc_ncnc_bld = as.numeric(HMTA03))
          blood2 <- phen_list$source_data[["pht004108"]] %>%
              filter(!(HMTB03 %in% c("A", "O")) ) %>%
              mutate(visit = 2, wbc_ncnc_bld = as.numeric(HMTB03))
          blood3 <- phen_list$source_data[["pht004109"]] %>%
              filter(!(HMTC2 %in% c("A", "O")) ) %>%
              mutate(visit = 3, wbc_ncnc_bld = as.numeric(HMTC2))
          blood4 <- phen_list$source_data[["pht004110"]] %>%
              filter(!(HMTC2 %in% c("A", "O")) ) %>%
              mutate(visit = 4, wbc_ncnc_bld = as.numeric(HMTC2))
          blood5 <- phen_list$source_data[["pht006422"]] %>%
              filter(!(CBC3 %in% c("A", "O")) ) %>%
              mutate(visit = 5, wbc_ncnc_bld = as.numeric(CBC3))
      
          blood <- list(blood1, blood2, blood3, blood4, blood5) %>%
              lapply(select, topmed_subject_id, visit, wbc_ncnc_bld) %>%
              lapply(na.omit)
      
          blood %<>% do.call(rbind, .)
      
          dataset <- left_join(blood, dem, c("topmed_subject_id", "visit"))
      
          # Successively select from visit with most observations for additional subjects
          datafnl <- NULL
          while (nrow(dataset) > 0){
           # create table of number of subjects per visit
            tb <- dataset %>% group_by(visit) %>%
                  summarise(count = n())
           # order the table in decreasing order, choose the top visit (most subjects)
            tb <- tb[order(tb$count, decreasing = TRUE), ]
            v <- tb %>% slice(1) %>% select(visit)
            v <- as.numeric(v)
           # select subjects with that visit
            tmp <- dataset %>% filter(visit == v)
            datafnl <- rbind(datafnl, tmp)
           # remove chosen set of subjects and repeat the process with remaining subjects
            dataset <- anti_join(dataset, tmp, by = "topmed_subject_id")
          }
         datafnl <- datafnl %>% select(topmed_subject_id, wbc_ncnc_bld, age) %>% na.omit
         return(datafnl)
      }
      ```
<a id="wbc_ncnc_bld_1-cardia"></a>
  * ### blood_cell_count/wbc_ncnc_bld_1 -- **CARDIA CARDIA Cohort**:
    * 2 component_study_variables
      * _phs000285.v3.pht001559.v2.phv00112439.v2_. dbGap Name: **A01AGE2**, Desc: **AGE VERIFY**, Table: **A4F01**.
      * _phs000285.v3.pht001563.v2.phv00112686.v2_. dbGap Name: **A05WBC**, Desc: **WHITE CELL COUNT (X 1000)**, Table: **A4F05**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # Age at measurement (Exam 1)
          dat1 <- phen_list$source_data[["pht001559"]] %>%
              tbl_df() %>%
              transmute(topmed_subject_id, age = as.numeric(A01AGE2))
      
          # White blood cell count (WBC) at Exam 1 (thousands/microliter)
          # eliminate subjects with missing code "M"
          dat2 <- phen_list$source_data[["pht001563"]] %>%
              tbl_df() %>% filter(!(A05WBC %in% "M")) %>%
              transmute(topmed_subject_id, wbc_ncnc_bld = as.numeric(A05WBC))
      
          dataset <- left_join(dat2, dat1, by = "topmed_subject_id") %>%
              select(topmed_subject_id, wbc_ncnc_bld, age) %>% na.omit()
      
          return(dataset)
      }
      ```
<a id="wbc_ncnc_bld_1-chs"></a>
  * ### blood_cell_count/wbc_ncnc_bld_1 -- **CHS Cardiovascular Health Study (CHS) Cohort: an NHLBI-funded observational study of risk factors for cardiovascular disease in adults 65 years or older**:
    * 2 component_study_variables
      * _phs000287.v6.pht001452.v1.phv00100411.v1_. dbGap Name: **WBLD23**, Desc: **WHITE BLOOD COUNT (x1, 000/cubic mm)**, Table: **BASEBOTH**.
      * _phs000287.v6.pht001452.v1.phv00100487.v1_. dbGap Name: **AGEBL**, Desc: **CALCULATED AGE AT BASELINE**, Table: **BASEBOTH**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # White blood cells * 1,000 / uL of blood and age at baseline
          dataset <- phen_list$source_data[["pht001452"]] %>%
              tbl_df %>%
              mutate(wbc_ncnc_bld = as.numeric(WBLD23),
                  age = as.integer(AGEBL)) %>%
              select(topmed_subject_id, age, wbc_ncnc_bld) %>% na.omit
      
          return(dataset)
      }
      ```
<a id="wbc_ncnc_bld_1-hchs_sol"></a>
  * ### blood_cell_count/wbc_ncnc_bld_1 -- **HCHS_SOL Hispanic Community Health Study /Study of Latinos (HCHS/SOL)**:
    * 2 component_study_variables
      * _phs000810.v1.pht004715.v1.phv00226251.v1_. dbGap Name: **AGE**, Desc: **Age**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
      * _phs000810.v1.pht004715.v1.phv00226283.v1_. dbGap Name: **LABA1**, Desc: **White Blood Count (x10e9) (LABA1)**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # White blood cell count (WBC) (thousands/microliter) and age at measurement
      
          dataset <- phen_list$source_data[["pht004715"]] %>%
              tbl_df %>%
              mutate(wbc_ncnc_bld = as.numeric(LABA1),
                  age = as.integer(AGE)) %>%
              select(topmed_subject_id, age, wbc_ncnc_bld) %>%
              filter(!is.na(age), !is.na(wbc_ncnc_bld))
      
          return(dataset)
      }
      ```
<a id="wbc_ncnc_bld_1-jhs"></a>
  * ### blood_cell_count/wbc_ncnc_bld_1 -- **JHS Jackson Heart Study (JHS) Cohort**:
    * 2 component_study_variables
      * _phs000286.v5.pht001949.v1.phv00126009.v1_. No dbGap metadata available.
      * _phs000286.v5.pht001959.v1.phv00127631.v1_. dbGap Name: **WBC**, Desc: **White blood cells TH/CMM [Visit 1]**, Table: **loca**.
    * **Function:**
      ```r
      harmonize <- function(phen_list) {
        library("dplyr")
      
        source_data <- phen_list$source_data
        # WBC_ncnc_bld
        dataset1 <- source_data[["pht001959"]]
        dataset1$WBC <- as.numeric(dataset1$WBC)
        names(dataset1)[names(dataset1) %in% "WBC"] <- "wbc_ncnc_bld"
      
        # age
        dataset2 <- source_data[["pht001949"]]
        dataset2$AGE01 <- as.numeric(dataset2$AGE01)
        names(dataset2)[names(dataset2) %in% "AGE01"] <- "age"
      
        # combine
        dataset <- inner_join(dataset1, dataset2)
      
        # subset to non-missing values
        sel <- !is.na(dataset$age) & !is.na(dataset$wbc_ncnc_bld)
        dataset <- dataset[sel, ]
      
        return(dataset)
      }
      ```
<a id="wbc_ncnc_bld_1-mesa"></a>
  * ### blood_cell_count/wbc_ncnc_bld_1 -- **MESA Multi-Ethnic Study of Atherosclerosis (MESA) Cohort**:
    * 2 component_study_variables
      * _phs000209.v13.pht003091.v3.phv00176011.v1_. dbGap Name: **age5c**, Desc: **AGE AT EXAM 5**, Table: **MESA_Exam5Main**.
      * _phs000209.v13.pht004319.v1.phv00218997.v1_. dbGap Name: **wbc5**, Desc: **WHITE BLOOD CELL COUNT (x10E3/uL)**, Table: **MESA_AncilMesaEpigenomicCBC**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
          # Age at Exam 5
          dataset_dem <- phen_list$source_data[["pht003091"]] %>%
              tbl_df %>%
              transmute(topmed_subject_id, age = as.integer(age5c))
      
          # WBC (cells x 10^3/uL of blood)
          wbc <- phen_list$source_data[["pht004319"]] %>%
              tbl_df %>%
              transmute(topmed_subject_id, wbc_ncnc_bld = as.numeric(wbc5))
      
          dataset <- inner_join(dataset_dem, wbc, by = "topmed_subject_id") %>%
              na.omit()
      
          return(dataset)
      }
      ```
<a id="wbc_ncnc_bld_1-whi"></a>
  * ### blood_cell_count/wbc_ncnc_bld_1 -- **WHI Women's Health Initiative**:
    * 5 component_study_variables
      * _phs000200.v11.pht000986.v6.phv00077362.v6_. dbGap Name: **CBCVY**, Desc: **CBC Visit year**, Table: **cbc_rel1**.
      * _phs000200.v11.pht000986.v6.phv00077363.v6_. dbGap Name: **CBCDAYS**, Desc: **CBC Days since randomization/enrollment**, Table: **cbc_rel1**.
      * _phs000200.v11.pht000986.v6.phv00077368.v6_. dbGap Name: **WBC**, Desc: **White blood cell (Kcell/microliter)**, Table: **cbc_rel1**.
      * _phs000200.v11.pht000998.v6.phv00078436.v6_. dbGap Name: **F2DAYS**, Desc: **F2 Days since randomization**, Table: **f2_rel1**.
      * _phs000200.v11.pht000998.v6.phv00078437.v6_. dbGap Name: **AGE**, Desc: **Age at screening**, Table: **f2_rel1**.
    * **Function:**
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
          # White blood cells * 1,000 / uL of blood and age at measurement
          dataset <- phen_list$source_data[["pht000986"]] %>%
              tbl_df %>%
              # Age
              left_join(phen_list$source_data[["pht000998"]], by = "topmed_subject_id") %>%
      
              # AGE is measured at screening on form F2.
              # abs(F2DAYS) is days between screening and enrollment.
              # do not use F2DAYS when F2DAYS > 0
              # CBCDAYS is days from enrollment to trait measurement
              mutate(F2DAYS = ifelse(as.integer(F2DAYS) > 0, 0, F2DAYS)) %>%
              mutate(wbc_ncnc_bld = as.numeric(WBC),
                  age = as.integer(AGE) +
                      (as.integer(CBCDAYS) + abs(as.integer(F2DAYS))) / 365.25) %>%
              select(topmed_subject_id,
                      age, CBCVY,
                      wbc_ncnc_bld) %>%
              # Use year 0 measurement.
              filter(CBCVY %in% 0 & !is.na(wbc_ncnc_bld) & !is.na(age)) %>%
              select(topmed_subject_id, age, wbc_ncnc_bld)
      
          return(dataset)
      }
      ```