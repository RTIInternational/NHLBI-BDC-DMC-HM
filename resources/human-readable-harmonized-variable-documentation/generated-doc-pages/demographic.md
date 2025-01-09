
# demographic

### Variables in this section:
* [annotated_sex_1](#annotated_sex_1)
* [geographic_site_1](#geographic_site_1)
* [hispanic_or_latino_1](#hispanic_or_latino_1)
* [hispanic_subgroup_1](#hispanic_subgroup_1)
* [race_us_1](#race_us_1)
* [subcohort_1](#subcohort_1)

<a id="annotated_sex_1"></a>
## demographic: **annotated_sex_1** (annotated_sex)
  Subject sex, as recorded by the study.
  * **Harmonization Units**:
    * [Amish](#annotated_sex_1-amish)
    * [ARIC](#annotated_sex_1-aric)
    * [BAGS](#annotated_sex_1-bags)
    * [CARDIA](#annotated_sex_1-cardia)
    * [CCAF](#annotated_sex_1-ccaf)
    * [CFS](#annotated_sex_1-cfs)
    * [CHS](#annotated_sex_1-chs)
    * [COPDGene](#annotated_sex_1-copdgene)
    * [CRA](#annotated_sex_1-cra)
    * [DHS](#annotated_sex_1-dhs)
    * [FHS](#annotated_sex_1-fhs)
    * [GALAII](#annotated_sex_1-galaii)
    * [GeneSTAR](#annotated_sex_1-genestar)
    * [GENOA](#annotated_sex_1-genoa)
    * [GOLDN](#annotated_sex_1-goldn)
    * [HCHS_SOL](#annotated_sex_1-hchs_sol)
    * [HVH](#annotated_sex_1-hvh)
    * [JHS](#annotated_sex_1-jhs)
    * [Mayo_VTE_GENEVA](#annotated_sex_1-mayo_vte_geneva)
    * [Mayo_VTE_Olmsted](#annotated_sex_1-mayo_vte_olmsted)
    * [MESA_AirNR](#annotated_sex_1-mesa_airnr)
    * [MESA_Classic](#annotated_sex_1-mesa_classic)
    * [MESA_Family](#annotated_sex_1-mesa_family)
    * [MGH_AF](#annotated_sex_1-mgh_af)
    * [Partners](#annotated_sex_1-partners)
    * [SAGE](#annotated_sex_1-sage)
    * [SAS](#annotated_sex_1-sas)
    * [VAFAR](#annotated_sex_1-vafar)
    * [VU_AF](#annotated_sex_1-vu_af)
    * [WGHS](#annotated_sex_1-wghs)
    * [WHI](#annotated_sex_1-whi)
  * **Metadata**:
    **`Data Type`**: encoded, **`Measurement Units`**: None, **`Version`**: 5, **`Has Age Variable`**: No, **`Date Harmonized`**: 2019-10-29 09:41:00
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2018AB, `ID:` C0017249
  * **DCC Harmonization Comments**:

    This variable was harmonized by renaming and recoding component study variables. Note that it is possible for annotated sex to differ from genetic sex.
    
    ### Study-specific comments
    
    #### WGHS
    
    All subjects are female due to recruitment criteria. 
    
    #### WHI
    
    *WHI* is an all female study, so all consented subjects were assigned the value "`female`" for this harmonized variable.
    
<a id="annotated_sex_1-amish"></a>
  * ### demographic/annotated_sex_1 -- **Amish**:
    * 1 component_study_variables: `phs000956.v3.pht005002.v1.phv00252975.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
        # harmonize sex for Amish
      
          source_data <- phen_list$source_data
          dat <- source_data[["pht005002"]]
      
         dat <- dat %>% filter(!is.na(SEX)) %>%
              mutate(annotated_sex = ifelse(SEX %in% "M", "male", "female")) %>%
              select(topmed_subject_id, annotated_sex)
      
         return(dat)
      }
      ```
<a id="annotated_sex_1-aric"></a>
  * ### demographic/annotated_sex_1 -- **ARIC**:
    * 1 component_study_variables: `phs000280.v5.pht004063.v2.phv00204711.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
       # harmonize gender for ARIC; use first visit
      
         source_data <- phen_list$source_data
      
         # visit 1 data
      
          dat <- source_data[["pht004063"]]
      
          dat <- dat %>% filter(!is.na(GENDER)) %>%
                mutate(annotated_sex = ifelse(GENDER %in% "M", "male", "female"))
      
         dat <- dat %>% select(topmed_subject_id, annotated_sex)
      
         return(dat)
      }
      ```
<a id="annotated_sex_1-bags"></a>
  * ### demographic/annotated_sex_1 -- **BAGS**:
    * 1 component_study_variables: `phs001143.v2.pht005905.v2.phv00273212.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        dataset <- phen_list$source_data$pht005905
      
        #Sex levels
        dataset$annotated_sex <- ifelse(dataset$SEX == 1, 'male',
          ifelse(dataset$SEX == 2, 'female', NA))
      
        #Select variables and remove missing
        dataset <- select(dataset, topmed_subject_id, annotated_sex) %>%
        na.omit() %>%
        return()
      }
      ```
<a id="annotated_sex_1-cardia"></a>
  * ### demographic/annotated_sex_1 -- **CARDIA**:
    * 1 component_study_variables: `phs000285.v3.pht001645.v2.phv00115114.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
       # harmonize gender for CARDIA
          source_data <- phen_list$source_data
      
         dat <- source_data[["pht001645"]]
      
         dat <- dat %>% filter(!is.na(SEX)) %>%
                mutate(annotated_sex = ifelse(SEX == 2, "female", "male")) %>%
                select(topmed_subject_id, annotated_sex)
      
         return(dat)
      }
      ```
<a id="annotated_sex_1-ccaf"></a>
  * ### demographic/annotated_sex_1 -- **CCAF**:
    * 1 component_study_variables: `phs001189.v2.pht005979.v2.phv00273548.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset and rename variables.
        dataset <- phen_list$source_data$pht005979 %>%
                   rename(annotated_sex = sex)
      
        # Substitute the value of 'NA' to missing.
        dataset$annotated_sex[dataset$annotated_sex %in% 'NA'] <- NA
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="annotated_sex_1-cfs"></a>
  * ### demographic/annotated_sex_1 -- **CFS**:
    * 2 component_study_variables: `phs000284.v2.pht001902.v1.phv00122012.v1`, `phs000284.v2.pht001902.v1.phv00122989.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
          source_data <- phen_list$source_data
          dat <- source_data[["pht001902"]]
      
        # harmonize sex for CFS; first available visit
       # 1=Male;0=Female
       # male if variable = 1; female if variable = 0
      
         dat <- dat %>% filter(!is.na(male))
         dat$visit <- as.integer(dat$visit)
         dat <- dat[order(dat$visit), ]
      
         dat2 <- dat %>% tbl_df() %>%
             arrange(topmed_subject_id) %>%
              group_by(topmed_subject_id) %>% slice(1)
      
         datt <- dat2 %>% mutate(annotated_sex = ifelse(male == 1, "male", "female"))
      
         datt <- datt %>% select(topmed_subject_id, annotated_sex)
      
         return(datt)
      }
      ```
<a id="annotated_sex_1-chs"></a>
  * ### demographic/annotated_sex_1 -- **CHS**:
    * 1 component_study_variables: `phs000287.v6.pht001452.v1.phv00100302.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
          source_data <- phen_list$source_data
          dat <- source_data[["pht001452"]]
      
       # CHS BASEBOTH file
       # GEND01: 0/1 = female/male
      
          dat <- dat %>% filter(!is.na(GEND01))
      
         datt <- dat %>%
                mutate(annotated_sex = ifelse(dat$GEND01 %in% 1, "male", "female")) %>%
                select(topmed_subject_id, annotated_sex)
      
         return(datt)
      }
      ```
<a id="annotated_sex_1-copdgene"></a>
  * ### demographic/annotated_sex_1 -- **COPDGene**:
    * 1 component_study_variables: `phs000179.v5.pht002239.v4.phv00159571.v4`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
          source_data <- phen_list$source_data
          dat <- source_data[["pht002239"]]
      
       # COPDGene 1= male 2 = female
      
         dat <- dat %>% filter(!is.na(gender)) %>%
              mutate(annotated_sex = ifelse(gender %in% 1, "male", "female")) %>%
              select(topmed_subject_id, annotated_sex)
      
         return(dat)
      }
      ```
<a id="annotated_sex_1-cra"></a>
  * ### demographic/annotated_sex_1 -- **CRA**:
    * 1 component_study_variables: `phs000988.v2.pht005248.v2.phv00258649.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
       # harmonize gender for CRA
      
          source_data <- phen_list$source_data
      
          dat <- source_data[["pht005248"]]
      
         dat <- dat %>% filter(!is.na(gender)) %>%
                mutate(annotated_sex = ifelse(gender %in% "M", "male", "female")) %>%
                select(topmed_subject_id, annotated_sex)
      
         return(dat)
      }
      ```
<a id="annotated_sex_1-dhs"></a>
  * ### demographic/annotated_sex_1 -- **DHS**:
    * 1 component_study_variables: `phs001412.v1.pht006746.v1.phv00310017.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Dataset
        dataset <- phen_list$source_data$pht006746
        # Recoding male and female values
        dataset$annotated_sex <- ifelse(dataset$SEX == 'M',
                                        'male',
                                        'female')
        #Selecting final harmonized variables
        dataset <- select(dataset, topmed_subject_id, annotated_sex)
      
        return(dataset)
      }
      ```
<a id="annotated_sex_1-fhs"></a>
  * ### demographic/annotated_sex_1 -- **FHS**:
    * 1 component_study_variables: `phs000007.v30.pht003099.v5.phv00177929.v5`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
       # harmonize gender FHS
      
         source_data <- phen_list$source_data
      
          dat <- source_data[["pht003099"]]
          w <- which(is.element(dat, "."))
          dat[w] <- NA
      
          dat <- dat %>% filter(!is.na(sex)) %>%
              mutate(annotated_sex = ifelse(sex %in% 1, "male", "female"))
      
          datt <- dat %>% select(topmed_subject_id, annotated_sex)
      
         return(datt)
      }
      ```
<a id="annotated_sex_1-galaii"></a>
  * ### demographic/annotated_sex_1 -- **GALAII**:
    * 1 component_study_variables: `phs001180.v1.pht006991.v1.phv00320631.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Dataset
        dataset <- phen_list$source_data$pht006991 %>%
        rename(annotated_sex = SEX)
      
        #Rename levels
        dataset$annotated_sex <- ifelse(dataset$annotated_sex == 'Male',
                                        'male', 'female')
      
        return(dataset)
      }
      ```
<a id="annotated_sex_1-genestar"></a>
  * ### demographic/annotated_sex_1 -- **GeneSTAR**:
    * 2 component_study_variables: `phs001218.v1.pht007766.v1.phv00369267.v1`, `phs001218.v1.pht007766.v1.phv00369269.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Datasets
        int <- phen_list$source_data$pht007766
        #Order of levels
        int$VISIT <- int$VISIT %>%
                     as.factor() %>%
                     relevel('SSV')
        #Subset to baseline visits, SSV and PSV
        dataset <- int %>%
                   filter(VISIT %in% c('SSV', 'PSV')) %>%
                   mutate(VISIT = as.factor(VISIT)) %>%
                   group_by(topmed_subject_id) %>%
                   arrange(topmed_subject_id, VISIT) %>%
                   filter(row_number(topmed_subject_id) == 1) %>%
                   ungroup() %>%
                   data.frame()
      
        #Reassigning values
        dataset$SEX <- ifelse(dataset$SEX == '0', 'male', 'female')
      
        #Rename harmonized variable
        dataset <- select(dataset, topmed_subject_id, annotated_sex = SEX)
      
        return(dataset)
      }
      ```
<a id="annotated_sex_1-genoa"></a>
  * ### demographic/annotated_sex_1 -- **GENOA**:
    * 2 component_study_variables: `phs001238.v2.pht006039.v1.phv00277506.v1`, `phs001238.v2.pht006653.v1.phv00307787.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
       # harmonize annotated sex for GENOA
          source_data <- phen_list$source_data
      
      # GENDER coded as "Female" or "Male"
      
         dat1 <- source_data[["pht006039"]]   # AA sub-study
         dat2 <- source_data[["pht006653"]]   # EA sub_study
         dat <- rbind(dat1, dat2)
      
      # filter for non-missing values
      # assign harmonized names "male" and "female"
      # select subject id and ethnicity
         dat <- dat %>% filter(!is.na(GENDER)) %>%
                 mutate(annotated_sex = ifelse(GENDER %in% "Male", "male", "female")) %>%
                 select(topmed_subject_id, annotated_sex)
      
         return(dat)
      }
      ```
<a id="annotated_sex_1-goldn"></a>
  * ### demographic/annotated_sex_1 -- **GOLDN**:
    * 1 component_study_variables: `phs000741.v2.pht003918.v2.phv00202103.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
        # harmonize sex for GOLDN
      
          source_data <- phen_list$source_data
          dat <- source_data[["pht003918"]]
      
       # 1= male 2 = female
      
         dat <- dat %>% filter(!is.na(sex)) %>%
              mutate(annotated_sex = ifelse(sex %in% 1, "male", "female")) %>%
              select(topmed_subject_id, annotated_sex)
      
         return(dat)
      }
      ```
<a id="annotated_sex_1-hchs_sol"></a>
  * ### demographic/annotated_sex_1 -- **HCHS_SOL**:
    * 1 component_study_variables: `phs000810.v1.pht004715.v1.phv00226279.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
          source_data <- phen_list$source_data
          dat <- source_data[["pht004715"]]
      
         dat <- dat %>% filter(!is.na(dat$GENDER)) %>%
              mutate(annotated_sex = ifelse(GENDER %in% "M", "male", "female")) %>%
              select(topmed_subject_id, annotated_sex)
      
         return(dat)
      }
      ```
<a id="annotated_sex_1-hvh"></a>
  * ### demographic/annotated_sex_1 -- **HVH**:
    * 1 component_study_variables: `phs001013.v3.pht005311.v2.phv00259379.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        dat <- phen_list$source_data$pht005311 %>%
          # Remove rows that are missing sex variable.
          filter(!is.na(sex)) %>%
          group_by(topmed_subject_id) %>%
          # Collapse sex variable by topmed_subject_id.
          summarize(as_1 = unique(sex)) %>%
          # Recode sex codes.
          mutate(annotated_sex = ifelse(as_1 %in% 1, "male", "female")) %>%
          # Select only ID and harmonized variables.
          select(topmed_subject_id, annotated_sex)
        return(dat)
      }
      ```
<a id="annotated_sex_1-jhs"></a>
  * ### demographic/annotated_sex_1 -- **JHS**:
    * 1 component_study_variables: `phs000286.v5.pht001949.v1.phv00126012.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
        # harmonize sex for JHS
      
          source_data <- phen_list$source_data
          dat <- source_data[["pht001949"]]
      
       # 1= male 0 = female
      
         dat <- dat %>% filter(!is.na(GENDER)) %>%
              mutate(annotated_sex = ifelse(GENDER %in% 1, "male", "female")) %>%
              select(topmed_subject_id, annotated_sex)
      
         return(dat)
      }
      ```
<a id="annotated_sex_1-mayo_vte_geneva"></a>
  * ### demographic/annotated_sex_1 -- **Mayo_VTE_GENEVA**:
    * 1 component_study_variables: `phs000289.v2.pht001886.v2.phv00121845.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
      
      # harmonize annotated sex for Mayo_VTE (parent Mayo)
      
        datt <- phen_list$source_data[["pht001886"]]
      
        datt <- datt %>% filter(!is.na(gender)) %>%
                   mutate(annotated_sex = ifelse(gender %in% "M", "male", "female")) %>%
                   select(topmed_subject_id, annotated_sex) %>% na.omit
      
         return(datt)
      }
      ```
<a id="annotated_sex_1-mayo_vte_olmsted"></a>
  * ### demographic/annotated_sex_1 -- **Mayo_VTE_Olmsted**:
    * 1 component_study_variables: `phs001402.v1.pht008239.v1.phv00389901.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        dataset <- phen_list$source_data$pht008239 %>%
                   mutate(annotated_sex = ifelse(gender == 'M',
                                             'male',
                                             'female')) %>%
                   select(topmed_subject_id, annotated_sex)
      
        return(dataset)
      }
      ```
<a id="annotated_sex_1-mesa_airnr"></a>
  * ### demographic/annotated_sex_1 -- **MESA_AirNR**:
    * 1 component_study_variables: `phs000209.v13.pht001111.v4.phv00082643.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
       # harmonize gender for MESA AirNR; all subjects in visit 1
      
          source_data <- phen_list$source_data
      
         # visit 1 data
          dat <- source_data[["pht001111"]]
      
         datt <- dat %>% filter(!is.na(gender1))
      
         datt <- datt %>%
                mutate(annotated_sex = ifelse(gender1 %in% 1, "male", "female")) %>%
                select(topmed_subject_id, annotated_sex)
      
         return(datt)
      }
      ```
<a id="annotated_sex_1-mesa_classic"></a>
  * ### demographic/annotated_sex_1 -- **MESA_Classic**:
    * 1 component_study_variables: `phs000209.v13.pht001116.v10.phv00084446.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
       # harmonize gender for MESA Classic - all subjects in visit 1
      
          source_data <- phen_list$source_data
      
         # visit 1 data
          dat <- source_data[["pht001116"]]
      
         datt <- dat %>% filter(!is.na(gender1))
      
         datt <- datt %>%
               mutate(annotated_sex = ifelse(gender1 %in% 1, "male", "female")) %>%
                select(topmed_subject_id, annotated_sex)
      
         return(datt)
      }
      ```
<a id="annotated_sex_1-mesa_family"></a>
  * ### demographic/annotated_sex_1 -- **MESA_Family**:
    * 1 component_study_variables: `phs000209.v13.pht001121.v3.phv00087073.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
       # harmonize gender for MESA Family
      
          source_data <- phen_list$source_data
      
         # visit 1 data
          dat <- source_data[["pht001121"]]
      
          datt <- dat %>% filter(!is.na(genderf)) %>%
                mutate(annotated_sex = ifelse(genderf %in% 1, "male", "female")) %>%
                select(topmed_subject_id, annotated_sex)
      
         return(datt)
      }
      ```
<a id="annotated_sex_1-mgh_af"></a>
  * ### demographic/annotated_sex_1 -- **MGH_AF**:
    * 1 component_study_variables: `phs001001.v1.pht005655.v1.phv00354562.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        dataset <- phen_list$source_data$pht005655 %>%
                   select(topmed_subject_id, annotated_sex = sex)
      
        return(dataset)
      }
      ```
<a id="annotated_sex_1-partners"></a>
  * ### demographic/annotated_sex_1 -- **Partners**:
    * 1 component_study_variables: `phs001024.v3.pht005693.v1.phv00265979.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
      
        #Dataset
        dataset <- phen_list$source_data$pht005693 %>%
                   rename(annotated_sex = sex)
      
        return(dataset)
      
      }
      ```
<a id="annotated_sex_1-sage"></a>
  * ### demographic/annotated_sex_1 -- **SAGE**:
    * 1 component_study_variables: `phs000921.v3.pht004883.v3.phv00252284.v3`
    * Function:
      ```r
      harmonize <- function(phen_list){
        #Dataset
        dataset <- phen_list$source_data$pht004883 %>%
                   rename(annotated_sex = SEX)
      
        #Assigning missing and converting to factor variable
        dataset <- replace(dataset, dataset == 'NA', NA) %>%
                   mutate(annotated_sex = as.factor(annotated_sex))
      
        #Assigning correct levels
        levels(dataset$annotated_sex) <- c('female', 'male')
      
        #Remove missing
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="annotated_sex_1-sas"></a>
  * ### demographic/annotated_sex_1 -- **SAS**:
    * 1 component_study_variables: `phs000914.v1.pht005253.v1.phv00258679.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
        # harmonize sex for Samoan
      
          source_data <- phen_list$source_data
          dat <- source_data[["pht005253"]]
      
         dat <- dat %>% filter(!is.na(Gender)) %>%
              mutate(annotated_sex = ifelse(Gender %in% 1, "male", "female")) %>%
              select(topmed_subject_id, annotated_sex)
      
         return(dat)
      }
      ```
<a id="annotated_sex_1-vafar"></a>
  * ### demographic/annotated_sex_1 -- **VAFAR**:
    * 1 component_study_variables: `phs000997.v3.pht005688.v3.phv00265923.v3`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset and rename variables.
        dataset <- phen_list$source_data$pht005688 %>%
                   rename(annotated_sex = sex)
      
        # Substitute the value of 'NA' to missing.
        dataset$annotated_sex[dataset$annotated_sex %in% 'NA'] <- NA
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="annotated_sex_1-vu_af"></a>
  * ### demographic/annotated_sex_1 -- **VU_AF**:
    * 1 component_study_variables: `phs001032.v4.pht005675.v3.phv00265807.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset and rename variables.
        dataset <- phen_list$source_data$pht005675 %>%
                   rename(annotated_sex = sex)
      
        # Substitute the value of 'NA' to missing.
        dataset$annotated_sex[dataset$annotated_sex %in% 'NA'] <- NA
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="annotated_sex_1-wghs"></a>
  * ### demographic/annotated_sex_1 -- **WGHS**:
    * 1 component_study_variables: `phs001040.v3.pht005682.v3.phv00265850.v3`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Dataset
        dataset <- phen_list$source_data$pht005682 %>%
                   rename(annotated_sex = sex)
      
        return(dataset)
      }
      ```
<a id="annotated_sex_1-whi"></a>
  * ### demographic/annotated_sex_1 -- **WHI**:
    * 1 component_study_variables: `phs000200.v11.pht000982.v8.phv00077315.v8`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
       # harmonize sex for WHI - an all female study
       # pull in subject file and eliminate consent=0 subjects
      
          source_data <- phen_list$source_data
      
         dat <- source_data[["pht000982"]]
      
         dat <- dat %>% filter(CONSENT != 0)
         dat$annotated_sex <- "female"
      
         dat <- dat %>% select(topmed_subject_id, annotated_sex)
      
         return(dat)
      }
      ```
<a id="geographic_site_1"></a>
## demographic: **geographic_site_1** (geographic_site)
  Recruitment/field center, baseline clinic, or geographic region.
  * **Harmonization Units**:
    * [ARIC](#geographic_site_1-aric)
    * [CARDIA](#geographic_site_1-cardia)
    * [CHS](#geographic_site_1-chs)
    * [COPDGene](#geographic_site_1-copdgene)
    * [GENOA](#geographic_site_1-genoa)
    * [GOLDN](#geographic_site_1-goldn)
    * [HCHS_SOL](#geographic_site_1-hchs_sol)
    * [JHS](#geographic_site_1-jhs)
    * [MESA_AirNR](#geographic_site_1-mesa_airnr)
    * [MESA_Classic](#geographic_site_1-mesa_classic)
    * [MESA_Family](#geographic_site_1-mesa_family)
    * [SAS](#geographic_site_1-sas)
    * [WHI](#geographic_site_1-whi)
  * **Metadata**:
    **`Data Type`**: encoded, **`Measurement Units`**: None, **`Version`**: 5, **`Has Age Variable`**: No, **`Date Harmonized`**: 2019-10-29 09:51:05
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2018AB, `ID:` C2828208
  * **DCC Harmonization Comments**:

    For studies with multiple exams or visits, baseline (visit 1) clinic was recorded for this variable. All harmonized values are prepended with the study name abbreviation to ensure that values are unique across studies.
    
    ### Study-specific comments
    
    #### GENOA
    
    This study does not provide a specific variable containing this information. However, the dbGaP study page (phs001238) contains the information that the African-American cohort participants were recruited from Jackson, MS, and that the European-American cohort participants were recruited from Rochester, MN. To determine cohort membership, and thus geographic site, for each subject, the study variable `GENDER` from cohort-specific datasets was used as a component variable for this harmonized trait even though the values in the `GENDER` variable are not used.
    
    #### Mayo_VTE_GENEVA 
    
    This study was removed from this harmonized variable version to maintain consistency with the other harmonized studies and variable definition. All subjects were recruited and had baseline measurements at Mayo Clinic Rochester although their home residence may have been located in a different state or country.
    
<a id="geographic_site_1-aric"></a>
  * ### demographic/geographic_site_1 -- **ARIC**:
    * 1 component_study_variables: `phs000280.v5.pht004063.v2.phv00204813.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(magrittr)
      
       # harmonize recruitment site for ARIC
       # 4 anonymized centers where exams were conducted; values A, B, C, D
       # The ARIC dbGaP study site acknowledges four communities:
       # Forsyth County, NC; Jackson, MS; the northwest suburbs of Minneapolis, MN;
       # and Washington County, MD.
       # The correspondence of the four communities with the values A, B, C, D is not given.
      
       # CENTERID variable given for each exam
       # we use Exam 1 center as the recruitment site
      
       source_data <- phen_list$source_data
       dat <- source_data[["pht004063"]]
      
       # Select and rename relevant traits
       dat <- dat %>% transmute(topmed_subject_id, geographic_site = CENTERID) %>%
          # omit incomplete records
          na.omit()
      
        # concatenate values with study abbrev to insure unique values across studies
       dat <- dat %>% mutate(geographic_site = paste("ARIC", geographic_site, sep = "_"))
      
       return(dat)
      }
      ```
<a id="geographic_site_1-cardia"></a>
  * ### demographic/geographic_site_1 -- **CARDIA**:
    * 1 component_study_variables: `phs000285.v3.pht001700.v2.phv00116398.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(magrittr)
      
       # harmonize recruitment site for CARDIA
       # "CENTER_CARE" = center for CARE project
       # anonymized 1 - 4 for 4 field centers
       # The CARDIA dbGaP study site acknowledges four field centers:
       # University of Alabama, Birmingham; Northwester University; University of Minnesota;
       #  Kaiser Foundation Research Institute, Oakland CA.
       # The correspondence of the values 1 - 4 with the four field centers is not given.
      
       source_data <- phen_list$source_data
       dat <- source_data[["pht001700"]]
      
       # Select and rename relevant traits
       dat <- dat %>% transmute(topmed_subject_id, geographic_site = CENTER_CARE) %>%
          # omit incomplete records
          na.omit()
      
       # concatenate values with study abbrev to insure unique values across studies
       dat <- dat %>% mutate(geographic_site = paste("CARDIA", geographic_site, sep = "_"))
      
       return(dat)
      }
      ```
<a id="geographic_site_1-chs"></a>
  * ### demographic/geographic_site_1 -- **CHS**:
    * 1 component_study_variables: `phs000287.v6.pht001452.v1.phv00100291.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(magrittr)
      
       # harmonize recruitment site for CHS
       # "CLINIC" = CHS clinic
       # 3 = BOWMAN GRAY
       # 4 = DAVIS
       # 5 = HOPKINS
       # 6 = PITT
       # abbreviations for Universities
      
       source_data <- phen_list$source_data
       dat <- source_data[["pht001452"]]
      
       # Select and rename relevant traits
       dat <- dat %>% transmute(topmed_subject_id, geographic_site = CLINIC) %>%
          # omit incomplete records
          na.omit()
      
       # change site variable to integer and shift to number 1 - 4 instead of 3 - 6
       dat$geographic_site <- as.integer(dat$geographic_site) - 2
      
       # establish desired values and assign accordingly
       vals <- c("BOWMAN.GRAY", "DAVIS", "HOPKINS", "PITT")
       dat$geographic_site <- vals[dat$geographic_site]
      
        # concatenate values with study abbrev to insure unique values across studies
       dat <- dat %>% mutate(geographic_site = paste("CHS", geographic_site, sep = "_"))
      
       return(dat)
      }
      ```
<a id="geographic_site_1-copdgene"></a>
  * ### demographic/geographic_site_1 -- **COPDGene**:
    * 1 component_study_variables: `phs000179.v5.pht002239.v4.phv00159569.v4`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(magrittr)
      
       # harmonize recruitment site for COPDGene
       # 21 clinical centers with "deid_center" = de-identified site codes with values C1 - C21
      
       source_data <- phen_list$source_data
       dat <- source_data[["pht002239"]]
      
       # Select and rename relevant traits
       dat <- dat %>% transmute(topmed_subject_id, geographic_site = deid_center) %>%
          # omit incomplete records
          na.omit()
      
        # concatenate values with study abbrev to insure unique values across studies
       dat <- dat %>% mutate(geographic_site = paste("COPDGene", geographic_site, sep = "_"))
      
       return(dat)
      }
      ```
<a id="geographic_site_1-genoa"></a>
  * ### demographic/geographic_site_1 -- **GENOA**:
    * 2 component_study_variables: `phs001238.v2.pht006039.v1.phv00277506.v1`, `phs001238.v2.pht006653.v1.phv00307787.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
       # harmonize geographic_site (recruitment site)for GENOA
          source_data <- phen_list$source_data
      
      # from study dbgap page: AA study from Jackson, MS and EA study from Rochester, MN
      # concatenate values with study abbrev to insure unique values across studies
      
         dat1 <- source_data[["pht006039"]]   # AA sub-study
         dat1 <- dat1 %>% mutate(geographic_site = "GENOA_MS")
      
         dat2 <- source_data[["pht006653"]]   # EA sub_study
         dat2 <- dat2 %>% mutate(geographic_site = "GENOA_MN")
      
         dat <- rbind(dat1, dat2)
      
         dat <- dat %>% select(topmed_subject_id, geographic_site)
      
         return(dat)
      }
      ```
<a id="geographic_site_1-goldn"></a>
  * ### demographic/geographic_site_1 -- **GOLDN**:
    * 1 component_study_variables: `phs000741.v2.pht003918.v2.phv00202105.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(magrittr)
      
       # harmonize recruitment site for GOLDN
       # "center" = recruitment center
       # M = Minneapolis, MN
       # U = Salt Lake City, Utah
       # use state abbreviation MN, UT
      
       source_data <- phen_list$source_data
       dat <- source_data[["pht003918"]]
      
       # Select and rename relevant traits
       dat <- dat %>% transmute(topmed_subject_id, geographic_site = center) %>%
          # omit incomplete records
          na.omit()
      
        # establish desired values and assign accordingly
       dat$geographic_site[dat$geographic_site == "M"] <- "MN"
       dat$geographic_site[dat$geographic_site == "U"] <- "UT"
      
        # concatenate values with study abbrev to insure unique values across studies
       dat <- dat %>% mutate(geographic_site = paste("GOLDN", geographic_site, sep = "_"))
      
       return(dat)
      }
      ```
<a id="geographic_site_1-hchs_sol"></a>
  * ### demographic/geographic_site_1 -- **HCHS_SOL**:
    * 1 component_study_variables: `phs000810.v1.pht004715.v1.phv00226256.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(magrittr)
      
       # harmonize recruitment site for HCHS/SOL
       # "CENTER" = recruitment center
       # B = Bronx
       # C = Chicago
       # M = Miami
       # S = San Diego
      
       source_data <- phen_list$source_data
       dat <- source_data[["pht004715"]]
      
       # Select and rename relevant traits
       dat <- dat %>% transmute(topmed_subject_id, geographic_site = CENTER) %>%
          # omit incomplete records
          na.omit()
      
        # establish desired values and assign accordingly
       dat$geographic_site[dat$geographic_site == "B"] <- "Bronx"
       dat$geographic_site[dat$geographic_site == "C"] <- "Chicago"
       dat$geographic_site[dat$geographic_site == "M"] <- "Miami"
       dat$geographic_site[dat$geographic_site == "S"] <- "SanDiego"
      
       # concatenate values with study abbrev to insure unique values across studies
       dat <- dat %>% mutate(geographic_site = paste("HCHS_SOL", geographic_site, sep = "_"))
      
       return(dat)
      }
      ```
<a id="geographic_site_1-jhs"></a>
  * ### demographic/geographic_site_1 -- **JHS**:
    * 1 component_study_variables: `phs000286.v5.pht001949.v1.phv00126005.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(magrittr)
      
       # harmonize recruitment site for JHS
       # given as counties in Missisippi
       # COUNTY has values "Hinds", "Madison", "Rankin", "Unkn" (Unknown)
      
       source_data <- phen_list$source_data
       dat <- source_data[["pht001949"]]
      
       # select subjects with COUNTY = "Unkn"  or missing and change value to "Unknown"
       sel <- dat$COUNTY %in% "Unkn" | is.na(dat$COUNTY)
       dat$COUNTY[sel] <- "Unknown"
      
       # Select and rename relevant traits
       dat <- dat %>% transmute(topmed_subject_id, geographic_site = COUNTY)
      
        # concatenate values with study abbrev to insure unique values across studies
       dat <- dat %>% mutate(geographic_site = paste("JHS", geographic_site, sep = "_"))
      
       return(dat)
      }
      ```
<a id="geographic_site_1-mesa_airnr"></a>
  * ### demographic/geographic_site_1 -- **MESA_AirNR**:
    * 1 component_study_variables: `phs000209.v13.pht001111.v4.phv00082644.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(magrittr)
      
       # harmonize recruitment site for MESA AirNR
       # 6 field centers (same for Classic, AirNR, Family)
       # 3 = WFU = Wake Forest University
       # 4 = COL = Columbia University
       # 5 = JHU = John Hopkins University
       # 6 = UMN = University of Minnesota
       # 7 = NWU = Northwestern University
       # 8 = UCLA = University of California, Los Angeles
       # assign the university abbreviations for values
       # site variable is associated with each exam
       # we use Exam 1 "site1c" as the recruitment site
      
       source_data <- phen_list$source_data
       dat <- source_data[["pht001111"]]
      
       # Select and rename relevant traits
       dat <- dat %>% transmute(topmed_subject_id, geographic_site = site1c) %>%
          # omit incomplete records
          na.omit()
      
       # change site variable to integer and shift to become 1 - 6 instead of 3 - 8
       dat$geographic_site <- as.integer(dat$geographic_site) - 2
      
       # establish desired values and assign accordingly
       vals <- c("WFU", "COL", "JHU", "UMN", "NWU", "UCLA")
       dat$geographic_site <- vals[dat$geographic_site]
      
        # concatenate values with study abbrev to insure unique values across studies
       dat <- dat %>% mutate(geographic_site = paste("MESA", geographic_site, sep = "_"))
      
       return(dat)
      }
      ```
<a id="geographic_site_1-mesa_classic"></a>
  * ### demographic/geographic_site_1 -- **MESA_Classic**:
    * 1 component_study_variables: `phs000209.v13.pht001116.v10.phv00084447.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(magrittr)
      
       # harmonize recruitment site for MESA Classic
       # 6 field centers (same for Classic, AirNR, Family)
       # 3 = WFU = Wake Forest University
       # 4 = COL = Columbia University
       # 5 = JHU = Johns Hopkins University
       # 6 = UMN = University of Minnesota
       # 7 = NWU = Northwestern University
       # 8 = UCLA = University of California, Los Angeles
       # assign the university abbreviations for values
       # site variable is associated with each exam
       # we use Exam 1 "site1c" as the recruitment site
      
       source_data <- phen_list$source_data
       dat <- source_data[["pht001116"]]
      
       # Select and rename relevant traits
       dat <- dat %>% transmute(topmed_subject_id, geographic_site = site1c) %>%
          # omit incomplete records
          na.omit()
      
       # change site variable to integer and shift to become 1 - 6 instead of 3 - 8
       dat$geographic_site <- as.integer(dat$geographic_site) - 2
      
       # establish desired values and assign accordingly
       vals <- c("WFU", "COL", "JHU", "UMN", "NWU", "UCLA")
       dat$geographic_site <- vals[dat$geographic_site]
      
        # concatenate values with study abbrev to insure unique values across studies
       dat <- dat %>% mutate(geographic_site = paste("MESA", geographic_site, sep = "_"))
      
       return(dat)
      }
      ```
<a id="geographic_site_1-mesa_family"></a>
  * ### demographic/geographic_site_1 -- **MESA_Family**:
    * 1 component_study_variables: `phs000209.v13.pht001121.v3.phv00087075.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(magrittr)
      
       # harmonize recruitment site for MESA Family
       # 6 field centers (same for Classic, AirNR, Family)
       # 3 = WFU = Wake Forest University
       # 4 = COL = Columbia University
       # 5 = JHU = John Hopkins University
       # 6 = UMN = University of Minnesota
       # 7 = NWU = Northwestern University
       # 8 = UCLA = University of California, Los Angeles
       # assign the university abbreviations for values
       # variable is "sitefc"
      
       source_data <- phen_list$source_data
       dat <- source_data[["pht001121"]]
      
       # Select and rename relevant traits
       dat <- dat %>% transmute(topmed_subject_id, geographic_site = sitefc) %>%
          # omit incomplete records
          na.omit()
      
       # change site variable to integer and shift to become 1 - 6 instead of 3 - 8
       dat$geographic_site <- as.integer(dat$geographic_site) - 2
      
       # establish desired values and assign accordingly
       vals <- c("WFU", "COL", "JHU", "UMN", "NWU", "UCLA")
       dat$geographic_site <- vals[dat$geographic_site]
      
        # concatenate values with study abbrev to insure unique values across studies
       dat <- dat %>% mutate(geographic_site = paste("MESA", geographic_site, sep = "_"))
      
       return(dat)
      }
      ```
<a id="geographic_site_1-sas"></a>
  * ### demographic/geographic_site_1 -- **SAS**:
    * 1 component_study_variables: `phs000914.v1.pht005253.v1.phv00258677.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(magrittr)
      
       # harmonize recruitment site for SAS (Samoan)
       # "Census_Region" = census region of Samoa
       # 1 = Apia Urban Area assign "Apia.urban"
       # 2 = Northwest Upola assign "NW.Upola"
       # 3 = Rest of Upola  assign "rest.Upola"
       # 4 = Savaii         assign "Savaii"
      
       source_data <- phen_list$source_data
       dat <- source_data[["pht005253"]]
      
       # Select and rename relevant traits
       dat <- dat %>% transmute(topmed_subject_id, geographic_site = Census_Region) %>%
          # omit incomplete records
          na.omit()
      
       # convert values to integer; assign new values
       dat$geographic_site <- as.integer(dat$geographic_site)
       vals <- c("Apia.urban", "NW.Upola", "rest.Upola", "Savaii")
       dat$geographic_site <- vals[dat$geographic_site]
      
        # concatenate values with study abbrev to insure unique values across studies
       dat <- dat %>% mutate(geographic_site = paste("SAS", geographic_site, sep = "_"))
      
       return(dat)
      }
      ```
<a id="geographic_site_1-whi"></a>
  * ### demographic/geographic_site_1 -- **WHI**:
    * 1 component_study_variables: `phs000200.v11.pht001031.v6.phv00080435.v6`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        library(magrittr)
      
       # harmonize recruitment site for WHI
       # study documents mention 40 clinical centers but there is no variable for these
       # we will use "REGION" which gives 4 regions of the US(suggested by study investigator)
       # 1 = Northeast
       # 2 = South
       # 3 = Midwest
       # 4 = West
      
       source_data <- phen_list$source_data
       dat <- source_data[["pht001031"]]
      
       # Select and rename relevant traits
       dat <- dat %>% transmute(topmed_subject_id, geographic_site = REGION) %>%
          # omit incomplete records
          na.omit()
      
       # change site variable to integer
       dat$geographic_site <- as.integer(dat$geographic_site)
      
       # establish desired values and assign accordingly
       vals <- c("Northeast", "South", "Midwest", "West")
       dat$geographic_site <- vals[dat$geographic_site]
      
        # concatenate values with study abbrev to insure unique values across studies
       dat <- dat %>% mutate(geographic_site = paste("WHI", geographic_site, sep = "_"))
      
       return(dat)
      }
      ```
<a id="hispanic_or_latino_1"></a>
## demographic: **hispanic_or_latino_1** (hispanic_or_latino)
  Indicator of reported Hispanic or Latino ethnicity.
  * **Harmonization Units**:
    * [BAGS](#hispanic_or_latino_1-bags)
    * [CCAF](#hispanic_or_latino_1-ccaf)
    * [CFS](#hispanic_or_latino_1-cfs)
    * [CHS_AfricanAmerican](#hispanic_or_latino_1-chs_africanamerican)
    * [CHS_Original](#hispanic_or_latino_1-chs_original)
    * [COPDGene](#hispanic_or_latino_1-copdgene)
    * [CRA](#hispanic_or_latino_1-cra)
    * [FHS_Gen3](#hispanic_or_latino_1-fhs_gen3)
    * [FHS_NewOffspringSpouse](#hispanic_or_latino_1-fhs_newoffspringspouse)
    * [FHS_Offspring](#hispanic_or_latino_1-fhs_offspring)
    * [FHS_Omni1](#hispanic_or_latino_1-fhs_omni1)
    * [FHS_Omni2](#hispanic_or_latino_1-fhs_omni2)
    * [GALAII](#hispanic_or_latino_1-galaii)
    * [GENOA](#hispanic_or_latino_1-genoa)
    * [HCHS_SOL](#hispanic_or_latino_1-hchs_sol)
    * [HVH](#hispanic_or_latino_1-hvh)
    * [Mayo_VTE_GENEVA](#hispanic_or_latino_1-mayo_vte_geneva)
    * [Mayo_VTE_Olmsted](#hispanic_or_latino_1-mayo_vte_olmsted)
    * [MESA_AirNR](#hispanic_or_latino_1-mesa_airnr)
    * [MESA_Classic](#hispanic_or_latino_1-mesa_classic)
    * [MESA_Family](#hispanic_or_latino_1-mesa_family)
    * [MGH_AF](#hispanic_or_latino_1-mgh_af)
    * [Partners](#hispanic_or_latino_1-partners)
    * [VAFAR](#hispanic_or_latino_1-vafar)
    * [VU_AF](#hispanic_or_latino_1-vu_af)
    * [WHI](#hispanic_or_latino_1-whi)
  * **Metadata**:
    **`Data Type`**: encoded, **`Measurement Units`**: None, **`Version`**: 1, **`Has Age Variable`**: No, **`Date Harmonized`**: 2019-10-29 10:00:18
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C2741637
  * **DCC Harmonization Comments**:

    This variable was harmonized by consistently recoding component study variables for Hispanic/Latino ethnicity or a Hispanic/Latino option from component race variables. Subjects who indicated Hispanic or Latino ethnicity were assigned "`HL`". If subjects were asked about their Hispanic or Latino ethnicity at multiple time points, we used information from all time points to construct this variable. Subjects who had discordant responses at different time points were assigned the value "`both`".
    
    Please note that the "`both`" encoded value is not intended to be used directly in analysis. If this variable is used in analysis, analysts should either exclude subjects who were assigned this value or decide how to appropriately group the subjects with this value.
    
    It is expected that most values for this harmonized variable are from self-report of study subjects. For some studies it is known that Hispanic/Latino ethnicity is not directly from self-report but rather was inferred from the study recruitment and/or confirmed by study investigators.
    
    ### Study-specific comments
    
    #### BAGS
    
    All consented subjects were assigned the value "`notHL`" for this harmonized variable, which was confirmed by study investigators. 
    
    #### CFS
    
    Component variables for *CFS* include study variables from multiple visits.
    
    #### CRA
    
    All subjects are Hispanic due to recruitment criteria. 
    
    #### FHS
    
    Component variables for *FHS* Generation 3, New Offspring Spouse, and Omni 2 subcohorts include study variables from multiple visits.
    
    *FHS* Offspring, and Omni 1 subcohorts only used component variables from one visit.
    
    #### GALAII
    
    All consented subjects were assigned the value "`HL`" for this harmonized variable, which was confirmed by study investigators.
    
    #### HCHS_SOL
    
    All consented subjects were assigned the value "`HL`" for this harmonized variable, which was confirmed by study investigators.
    
    #### MESA
    
    Component variables for *MESA* AirNR and Classic subcohorts include study variables from multiple visits.
    
    *MESA* Family subcohort only used component variables from one visit.
    
    
    
<a id="hispanic_or_latino_1-bags"></a>
  * ### demographic/hispanic_or_latino_1 -- **BAGS**:
    * 1 component_study_variables: `phs001143.v2.pht005902.v1.phv00273200.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        dataset <- phen_list$source_data$pht005902 %>%
          # Filter out unconsented individuals.
          filter(!(CONSENT %in% "0") & !is.na(CONSENT)) %>%
          # Create hispanic_or_latino variable.
          transmute(topmed_subject_id, hispanic_or_latino = "notHL")
      
        return(dataset)
      }
      ```
<a id="hispanic_or_latino_1-ccaf"></a>
  * ### demographic/hispanic_or_latino_1 -- **CCAF**:
    * 1 component_study_variables: `phs001189.v2.pht005979.v2.phv00273550.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset.
        dataset <- phen_list$source_data$pht005979 %>%
                   rename(hispanic_or_latino = ethnicity)
      
        # Substitute encoded hispanic_or_latino values.
        dataset$hispanic_or_latino[dataset$hispanic_or_latino %in% 'yes'] <- 'HL'
        dataset$hispanic_or_latino[dataset$hispanic_or_latino %in% 'no'] <- 'notHL'
      
        # Substitute the value of 'NA' to missing.
        dataset$hispanic_or_latino[dataset$hispanic_or_latino %in% 'NA'] <- NA
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="hispanic_or_latino_1-cfs"></a>
  * ### demographic/hispanic_or_latino_1 -- **CFS**:
    * 2 component_study_variables: `phs000284.v2.pht001902.v1.phv00122991.v1`, `phs000284.v2.pht001902.v1.phv00122992.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
          source_data <- phen_list$source_data
          dat <- source_data[["pht001902"]]
      
       # 1=Hispanic or Latino; 0=Not Hispanic or Latino; 2=Unknown
       # 1=White or Caucasian; 2=Black or African American; 3=Asian; 4=Hispanic;
       # 5=Native American or Alaska Native;  6=More than one race
      
         dat$ethnicity[dat$ethnicity %in% 0] <- "notHL"
         dat$ethnicity[dat$ethnicity %in% 1] <- "HL"
         dat$ethnicity[dat$ethnicity %in% 2] <- NA
      
         se2 <- dat$race %in% 4  # Hispanic race will count as ethnicity HL
         dat$ethnicity[se2] <- "HL"
      
         dat2 <- dat %>% filter(!is.na(ethnicity)) %>% tbl_df() %>%
             arrange(topmed_subject_id) %>%
              group_by(topmed_subject_id)
      
        # determine number of unique ethnicity categories chosen across visits for each subject
         sdat <- dat2 %>% summarise(ncate = length(unique(ethnicity)))
      
         dat3 <- inner_join(dat2, sdat)
         sele <- dat3$ncate > 1
         dat3$ethnicity[sele] <- "both"  # inconsistent responses across visits
      
        # slice(1) chooses the first entry for each subject (all entries per subject are now the same)
         datt <- dat3 %>% slice(1) %>%
                select(topmed_subject_id, ethnicity) %>%
                rename(hispanic_or_latino = ethnicity)
      
         return(datt)
      }
      ```
<a id="hispanic_or_latino_1-chs_africanamerican"></a>
  * ### demographic/hispanic_or_latino_1 -- **CHS_AfricanAmerican**:
    * 1 component_study_variables: `phs000287.v6.pht001490.v1.phv00105652.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
          source_data <- phen_list$source_data
          dat <- source_data[["pht001490"]]
      
       # YR5 NEW file (NEW cohort)
       # HISP01: 0/1 = no/yes for Hispanic origin
      
          dat <- dat %>% filter(!is.na(HISP01))
      
         datt <- dat %>% mutate(hispanic_or_latino = ifelse(dat$HISP01 %in% 1, "HL", "notHL")) %>%
                select(topmed_subject_id, hispanic_or_latino)
      
         return(datt)
      }
      ```
<a id="hispanic_or_latino_1-chs_original"></a>
  * ### demographic/hispanic_or_latino_1 -- **CHS_Original**:
    * 1 component_study_variables: `phs000287.v6.pht001450.v1.phv00099434.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
          source_data <- phen_list$source_data
          dat <- source_data[["pht001450"]]
      
       # BASE1 file (Original or OLD cohort)
       # HISP01: 0/1 = no/yes for Hispanic origin
      
          dat <- dat %>% filter(!is.na(HISP01))
      
         datt <- dat %>% mutate(hispanic_or_latino = ifelse(dat$HISP01 %in% 1, "HL", "notHL")) %>%
                select(topmed_subject_id, hispanic_or_latino)
      
         return(datt)
      }
      ```
<a id="hispanic_or_latino_1-copdgene"></a>
  * ### demographic/hispanic_or_latino_1 -- **COPDGene**:
    * 1 component_study_variables: `phs000179.v5.pht002239.v4.phv00159573.v4`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
          source_data <- phen_list$source_data
          dat <- source_data[["pht002239"]]
      
       # 1= Hispanic or Latino 2 = not Hispanic or Latino
      
          dat <- dat %>% filter(!is.na(ethnic)) %>%
              mutate(hispanic_or_latino = ifelse(ethnic %in% 1, "HL", "notHL"))
      
         dat <- dat %>% select(topmed_subject_id, hispanic_or_latino)
      
         return(dat)
      }
      ```
<a id="hispanic_or_latino_1-cra"></a>
  * ### demographic/hispanic_or_latino_1 -- **CRA**:
    * 1 component_study_variables: `phs000988.v2.pht005248.v2.phv00258651.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
       # harmonize ethnicity for CRA
       # phenotype file has "race", all values "Hispanic"
          source_data <- phen_list$source_data
      
          dat <- source_data[["pht005248"]]
      
         dat <- dat %>% filter(race %in% "Hispanic") %>%
            mutate(hispanic_or_latino = "HL") %>% select(topmed_subject_id, hispanic_or_latino)
      
         return(dat)
      }
      ```
<a id="hispanic_or_latino_1-fhs_gen3"></a>
  * ### demographic/hispanic_or_latino_1 -- **FHS_Gen3**:
    * 4 component_study_variables: `phs000007.v30.pht000074.v11.phv00021245.v5`, `phs000007.v30.pht000074.v11.phv00021398.v5`, `phs000007.v30.pht003094.v5.phv00177238.v3`, `phs000007.v30.pht003094.v5.phv00177597.v3`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
       # harmonize hispanic_or_latino for FHS Generation 3
       # variables are 0/1 (no/yes) for given categories
       # Have race category of Hispanic (Spanish/Hispanic/Latino)
       # 1 if checked, 0 if no or not checked
      
         source_data <- phen_list$source_data
      
         # visit 1 data
      
          dat1 <- source_data[["pht000074"]]
          dat1 <- dat1[dat1$IDTYPE %in% 3, ]
          vars <- "G3A484"
      
         w <- which(is.element(dat1, "."))
         dat1[w] <- NA
         dat1$hispanic_or_latino <- NA
      
         se <- dat1$G3A484 %in% 1
         dat1$hispanic_or_latino[se] <- "HL"
      
         dat1 <- dat1 %>% filter(!is.na(hispanic_or_latino)) %>%
                select(topmed_subject_id, hispanic_or_latino)
      
         # visit 2 data - contains Gen3, NOS, Omni2
         # Hispanic is not race choice
         #   but there is question re Hispanic hispanic_or_latino: 1 = yes; 2 = no
      
          dat2 <- source_data[["pht003094"]]
          dat2 <- dat2[dat2$idtype %in% 3, ] # choose Gen3
          vars <- "g3b0624"
      
         w <- which(is.element(dat2, "."))
         dat2[w] <- NA
      
         dat2 <- dat2 %>% filter(!is.na(g3b0624)) %>%
              mutate(hispanic_or_latino = ifelse(g3b0624 == 1, "HL", "notHL")) %>%
              select(topmed_subject_id, hispanic_or_latino)
      
         dat <- rbind(dat1, dat2)
      
         dat <- dat %>% tbl_df() %>%
             arrange(topmed_subject_id) %>%
              group_by(topmed_subject_id)
      
        # determine number of unique hispanic_or_latino categories chosen across visits
        #    for each subject
         sdat <- dat %>% summarise(ncatr = length(unique(hispanic_or_latino)))
      
         datt <- inner_join(dat, sdat)
         selr <- datt$ncatr > 1
         datt$hispanic_or_latino[selr] <- "both"  # inconsistency in choices across visits
      
        # slice(1) chooses the first entry for each subject (all entries per subject are now the same)
         datt <- datt %>% filter(!is.na(hispanic_or_latino)) %>% slice(1) %>%
                select(topmed_subject_id, hispanic_or_latino)
      
         return(datt)
      }
      ```
<a id="hispanic_or_latino_1-fhs_newoffspringspouse"></a>
  * ### demographic/hispanic_or_latino_1 -- **FHS_NewOffspringSpouse**:
    * 4 component_study_variables: `phs000007.v30.pht003094.v5.phv00177238.v3`, `phs000007.v30.pht003094.v5.phv00177597.v3`, `phs000007.v30.pht006005.v1.phv00273701.v1`, `phs000007.v30.pht006005.v1.phv00274067.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
       # harmonize hispanic_or_latino for FHS New Offspring Spouse
       # variables are 0/1 (no/yes) for given categories
       # Have race category of Hispanic (Spanish/Hispanic/Latino)
      
         source_data <- phen_list$source_data
      
         # visit 1 data
      
          dat1 <- source_data[["pht006005"]]
          dat1 <- dat1[dat1$idtype %in% 2, ]
          vars <- "g3a484"
      
         w <- which(is.element(dat1, "."))
         dat1[w] <- NA
      
         dat1$hispanic_or_latino <- NA
         se <- dat1$g3a484 %in% 1 # chose Hispanic as race
         dat1$hispanic_or_latino[se] <- "HL"
      
         dat1 <- dat1 %>% filter(!is.na(hispanic_or_latino)) %>%
                select(topmed_subject_id, hispanic_or_latino)
      
         # visit 2 data - contains Gen3, NOS, Omni2
         # Hispanic is not race choice but there is question
         #   re Hispanic hispanic_or_latino: 1 = yes; 2 = no
      
          dat2 <- source_data[["pht003094"]]
          dat2 <- dat2[dat2$idtype %in% 2, ] # choose NOS
          vars <- "g3b0624"
      
         w <- which(is.element(dat2, "."))
         dat2[w] <- NA
      
         dat2 <- dat2 %>% filter(!is.na(g3b0624)) %>%
              mutate(hispanic_or_latino = ifelse(g3b0624 == 1, "HL", "notHL")) %>%
              select(topmed_subject_id, hispanic_or_latino)
      
         dat <- rbind(dat1, dat2)
      
         dat <- dat %>% tbl_df() %>%
             arrange(topmed_subject_id) %>%
              group_by(topmed_subject_id)
      
         # determine number of unique hispanic_or_latino categories chosen across visits for each subject
         sdat <- dat %>% summarise(ncatr = length(unique(hispanic_or_latino)))
      
         datt <- inner_join(dat, sdat)
         selr <- datt$ncatr > 1
         datt$hispanic_or_latino[selr] <- "both" # inconsistent responses across visits
      
        # slice(1) chooses the first entry for each subject (all entries per subject are now the same)
         datt <- datt %>% filter(!is.na(hispanic_or_latino)) %>% slice(1) %>%
                select(topmed_subject_id, hispanic_or_latino)
      
         return(datt)
      }
      ```
<a id="hispanic_or_latino_1-fhs_offspring"></a>
  * ### demographic/hispanic_or_latino_1 -- **FHS_Offspring**:
    * 3 component_study_variables: `phs000007.v30.pht000747.v6.phv00072044.v5`, `phs000007.v30.pht000747.v6.phv00072538.v5`, `phs000007.v30.pht000747.v6.phv00072539.v5`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
       # harmonize hispanic_or_latino for FHS Offspring
       # variables are 0/1 (no/yes) for given categories
       # H700 is Hispanic/Latino and H701 is not Hispanic/Latino
      
         source_data <- phen_list$source_data
      
         # visit 8 data
      
          dat1 <- source_data[["pht000747"]]
          dat1 <- dat1[dat1$IDTYPE %in% 1, ]
          vars <- paste0("H", 700:701)
      
         w <- which(is.element(dat1, "."))
         dat1[w] <- NA
      
         dat1$hispanic_or_latino <- dat1$H700  # 0 not hispanic, 1 hispanic
         s <- (dat1$H700 %in% 1 & dat1$H701 %in% 1) | (dat1$H700 %in% 0 & dat1$H701 %in% 0)
       # chose yes and no
         dat1$hispanic_or_latino[s] <- NA
      
         datt <- dat1 %>%
                 filter(!is.na(hispanic_or_latino)) %>%
                 select(topmed_subject_id, hispanic_or_latino)
         datt$hispanic_or_latino[datt$hispanic_or_latino %in% 1] <- "HL"
         datt$hispanic_or_latino[datt$hispanic_or_latino %in% 0] <- "notHL"
      
         return(datt)
      }
      ```
<a id="hispanic_or_latino_1-fhs_omni1"></a>
  * ### demographic/hispanic_or_latino_1 -- **FHS_Omni1**:
    * 3 component_study_variables: `phs000007.v30.pht004815.v1.phv00251263.v1`, `phs000007.v30.pht004815.v1.phv00251746.v1`, `phs000007.v30.pht004815.v1.phv00251747.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
       # harmonize hispanic_or_latino for FHS Omni1
       # variables are 0/1 (no/yes) for given categories
       # h700 is Hispanic/Latino and h701 is not Hispanic/Latino
      
         source_data <- phen_list$source_data
      
         # visit 3 data
      
          dat1 <- source_data[["pht004815"]]
          dat1 <- dat1[dat1$idtype %in% 7, ]
          vars <- paste0("h", 700:701)
      
         w <- which(is.element(dat1, "."))
         dat1[w] <- NA
      
         dat1$hispanic_or_latino <- dat1$h700  # 0 not hispanic, 1 hispanic
         s <- (dat1$h700 %in% 1 & dat1$h701 %in% 1) | (dat1$h700 %in% 0 & dat1$h701 %in% 0)
       # chose yes and no
         dat1$hispanic_or_latino[s] <- NA
      
         datt <- dat1 %>%
                 filter(!is.na(hispanic_or_latino)) %>%
                 select(topmed_subject_id, hispanic_or_latino)
         datt$hispanic_or_latino[datt$hispanic_or_latino %in% 1] <- "HL"
         datt$hispanic_or_latino[datt$hispanic_or_latino %in% 0] <- "notHL"
      
         return(datt)
      }
      ```
<a id="hispanic_or_latino_1-fhs_omni2"></a>
  * ### demographic/hispanic_or_latino_1 -- **FHS_Omni2**:
    * 4 component_study_variables: `phs000007.v30.pht003094.v5.phv00177238.v3`, `phs000007.v30.pht003094.v5.phv00177597.v3`, `phs000007.v30.pht006006.v2.phv00274194.v2`, `phs000007.v30.pht006006.v2.phv00274558.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
       # harmonize hispanic_or_latino for FHS Omni2
       # variables are 0/1 (no/yes) for given categories
       # Have race category of Hispanic (Spanish/Hispanic/Latino)
      
         source_data <- phen_list$source_data
      
         # visit 1 data
      
          dat1 <- source_data[["pht006006"]]
          dat1 <- dat1[dat1$idtype %in% 72, ]
          vars <- "g3a484"
      
         w <- which(is.element(dat1, "."))
         dat1[w] <- NA
      
         dat1$hispanic_or_latino <- NA
         se <- dat1$g3a484 %in% 1 # chose Hispanic as race
         dat1$hispanic_or_latino[se] <- "HL"
      
         dat1 <- dat1 %>% filter(!is.na(hispanic_or_latino)) %>%
                select(topmed_subject_id, hispanic_or_latino)
      
         # visit 2 data - contains Gen3, NOS, Omni2
         # Hispanic is not race choice but there is question re Hispanic hispanic_or_latino:
         # 1 = yes; 2 = no
      
          dat2 <- source_data[["pht003094"]]
          dat2 <- dat2[dat2$idtype %in% 72, ] # choose Omni2
          vars <- "g3b0624"
      
         w <- which(is.element(dat2, "."))
         dat2[w] <- NA
      
         dat2 <- dat2 %>% filter(!is.na(g3b0624)) %>%
              mutate(hispanic_or_latino = ifelse(g3b0624 == 1, "HL", "notHL")) %>%
              select(topmed_subject_id, hispanic_or_latino)
      
         dat <- rbind(dat1, dat2)
      
         dat <- dat %>% tbl_df() %>%
             arrange(topmed_subject_id) %>%
              group_by(topmed_subject_id)
      
        # determine number of unique hispanic_or_latino categories chosen across visits for each subject
         sdat <- dat %>% summarise(ncatr = length(unique(hispanic_or_latino)))
      
         datt <- inner_join(dat, sdat)
         selr <- datt$ncatr > 1
         datt$hispanic_or_latino[selr] <- "both"  # inconsistent responses across visits
      
        # slice(1) chooses the first entry for each subject (all entries per subject are now the same)
         datt <- datt %>% filter(!is.na(hispanic_or_latino)) %>% slice(1) %>%
                select(topmed_subject_id, hispanic_or_latino)
      
         return(datt)
      }
      ```
<a id="hispanic_or_latino_1-galaii"></a>
  * ### demographic/hispanic_or_latino_1 -- **GALAII**:
    * 1 component_study_variables: `phs001180.v1.pht006988.v1.phv00320615.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        dataset <- phen_list$source_data$pht006988 %>%
          # Filter out unconsented individuals.
          filter(!(CONSENT %in% "0") & !is.na(CONSENT)) %>%
          # Create hispanic_or_latino variable.
          # Confirmed with study, hispanic_or_latino = 'HL'
          transmute(topmed_subject_id, hispanic_or_latino = "HL")
      
        return(dataset)
      }
      ```
<a id="hispanic_or_latino_1-genoa"></a>
  * ### demographic/hispanic_or_latino_1 -- **GENOA**:
    * 2 component_study_variables: `phs001238.v2.pht006039.v1.phv00277509.v1`, `phs001238.v2.pht006653.v1.phv00307790.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
       # harmonize ethnicity for GENOA
          source_data <- phen_list$source_data
      
      #  information is in the RACE variable
      # values are "African-American", "Hispanic White", "Non-Hispanic White"
      
         dat1 <- source_data[["pht006039"]]   # AA sub-study
         dat2 <- source_data[["pht006653"]]   # EA sub_study
         dat <- rbind(dat1, dat2)
      
      # filter RACE to values with ethnicity information
      # assign HL = if RACE is Hispanic White and notHL otherwise, i.e. for Non-Hispanic White
      # select subject id and ethnicity
         dat <- dat %>% filter(RACE %in% c("Hispanic White", "Non-Hispanic White")) %>%
                 mutate(hispanic_or_latino = ifelse(RACE %in% "Hispanic White", "HL", "notHL")) %>%
                 select(topmed_subject_id, hispanic_or_latino)
      
         return(dat)
      }
      ```
<a id="hispanic_or_latino_1-hchs_sol"></a>
  * ### demographic/hispanic_or_latino_1 -- **HCHS_SOL**:
    * 1 component_study_variables: `phs000810.v1.pht004713.v1.phv00226241.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
          source_data <- phen_list$source_data
          dat <- source_data[["pht004713"]]
      
        # All subjects are Hispanic/Latino
        # set race to Other and ethnicity to HL
        # will define ethnic_subgroup variable
        # pull in Subject file and delete subjects with consent 0
      
         dat <- dat %>% filter(!is.element(CONSENT, 0)) %>%
              mutate(hispanic_or_latino = "HL") %>%
              select(topmed_subject_id, hispanic_or_latino)
      
         return(dat)
      }
      ```
<a id="hispanic_or_latino_1-hvh"></a>
  * ### demographic/hispanic_or_latino_1 -- **HVH**:
    * 1 component_study_variables: `phs001013.v3.pht005311.v2.phv00259381.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        dat <- phen_list$source_data$pht005311 %>%
          group_by(topmed_subject_id) %>%
          # Collapse ethnicity variable by topmed_subject_id.
          summarize(eth_1 = unique(ethnicity)) %>%
          # Remove rows where the value is missing or unknown.
          filter(!is.na(eth_1) & !(eth_1 %in% 9)) %>%
          mutate(hispanic_or_latino = ifelse(eth_1 %in% 1, "HL", "notHL")) %>%
          select(topmed_subject_id, hispanic_or_latino)
        return(dat)
      }
      ```
<a id="hispanic_or_latino_1-mayo_vte_geneva"></a>
  * ### demographic/hispanic_or_latino_1 -- **Mayo_VTE_GENEVA**:
    * 1 component_study_variables: `phs000289.v2.pht001886.v2.phv00121875.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
      
      # harmonize ethnicity for GWAS_VTE (parent Mayo)
      # variable Hispanic = 1 if of Hispanic or Latino ethnicity, = 0 is not Hispanic or Latino
      
        datt <- phen_list$source_data[["pht001886"]]
      
        datt <- datt %>% filter(!is.na(Hispanic)) %>%
                  mutate(hispanic_or_latino = ifelse(Hispanic %in% 1, "HL", "notHL")) %>%
                       select(topmed_subject_id, hispanic_or_latino) %>% na.omit
      
         return(datt)
      }
      ```
<a id="hispanic_or_latino_1-mayo_vte_olmsted"></a>
  * ### demographic/hispanic_or_latino_1 -- **Mayo_VTE_Olmsted**:
    * 1 component_study_variables: `phs001402.v1.pht008239.v1.phv00389931.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        dataset <- phen_list$source_data$pht008239
      
        dataset$ethnicity <- ifelse(dataset$hispanic == '0', 'notHL',
                                    ifelse(dataset$hispanic == '1', 'HL', NA))
      
        dataset <- dataset %>%
                   select(topmed_subject_id, hispanic_or_latino = ethnicity) %>%
                   na.omit() %>%
                   return()
      }
      ```
<a id="hispanic_or_latino_1-mesa_airnr"></a>
  * ### demographic/hispanic_or_latino_1 -- **MESA_AirNR**:
    * 2 component_study_variables: `phs000209.v13.pht001111.v4.phv00082641.v1`, `phs000209.v13.pht003086.v3.phv00174585.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
       # harmonize hispanic_or_latino for MESA AirNR
       # 1=white; 2=chinese american; 3=black;4=hispanic
       # assign Hispanic for hispanic_or_latino if indicated Hispanic race at any time
      
          source_data <- phen_list$source_data
      
          # visit 1 data
          dat1 <- source_data[["pht001111"]]
      
         # visit 5 data
         dat5 <- source_data[["pht003086"]]
      
         dat <- rbind(dat1, dat5)
      
         dat$hispanic_or_latino <- NA
         dat$hispanic_or_latino[dat$race1c %in% 4] <- "HL"
         # set hispanic_or_latino = HL if race choice is Hispanic
         # cannot identify "not Hispanic" directly
      
         dat <- dat %>% tbl_df() %>%
             arrange(topmed_subject_id) %>%
              group_by(topmed_subject_id)
      
        # slice(1) chooses the first entry for each subject
         datt <- dat %>% filter(!is.na(hispanic_or_latino)) %>% slice(1) %>%
                select(topmed_subject_id, hispanic_or_latino)
      
         return(datt)
      }
      ```
<a id="hispanic_or_latino_1-mesa_classic"></a>
  * ### demographic/hispanic_or_latino_1 -- **MESA_Classic**:
    * 5 component_study_variables: `phs000209.v13.pht001116.v10.phv00084444.v2`, `phs000209.v13.pht001118.v8.phv00085775.v2`, `phs000209.v13.pht001119.v8.phv00086261.v2`, `phs000209.v13.pht001120.v10.phv00086729.v2`, `phs000209.v13.pht003091.v3.phv00176008.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
       # harmonize hispanic_or_latino for MESA Classic
       # 1=white; 2=chinese american; 3=black;4=hispanic
        # assign Hispanic for hispanic_or_latino if indicated Hispanic race at any time
      
          source_data <- phen_list$source_data
      
         # visit 1 data
          dat1 <- source_data[["pht001116"]]
      
         # visit 2 data
          dat2 <- source_data[["pht001118"]]
      
         # visit 3 data
          dat3 <- source_data[["pht001119"]]
      
         # visit 4 data
          dat4 <- source_data[["pht001120"]]
      
         # visit 5 data
          dat5 <- source_data[["pht003091"]]
      
         dat <- rbind(dat1, dat2, dat3, dat4, dat5)
      
         dat$hispanic_or_latino <- NA
         dat$hispanic_or_latino[dat$race1c %in% 4] <- "HL"
        # set hispanic_or_latino = HL if race choice is Hispanic
            # we cannot identify not Hispanic directly
      
          dat <- dat %>% tbl_df() %>%
               arrange(topmed_subject_id) %>%
               group_by(topmed_subject_id)
      
        # slice(1) chooses the first entry for each subject
         datt <- dat %>% filter(!is.na(hispanic_or_latino)) %>% slice(1) %>%
                select(topmed_subject_id, hispanic_or_latino)
      
         return(datt)
      }
      ```
<a id="hispanic_or_latino_1-mesa_family"></a>
  * ### demographic/hispanic_or_latino_1 -- **MESA_Family**:
    * 2 component_study_variables: `phs000209.v13.pht001121.v3.phv00087074.v1`, `phs000209.v13.pht001121.v3.phv00087659.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
       # harmonize hispanic_or_latino for MESA Family
       # racefc: 1=white; 2=chinese american; 3=black;4=hispanic
       # scrhispf: 0 = not Hispanic, 1 = Hispanic
      
          source_data <- phen_list$source_data
      
         # visit 1 data
          dat <- source_data[["pht001121"]]
      
         dat$hispanic_or_latino <- NA
      
         sel1 <- dat$scrhispf %in% 0 & !(dat$racefc %in% 4)
         sel2 <- dat$scrhispf %in% 0 & dat$racefc %in% 4 # inconsistent
         sel3 <- dat$scrhispf %in% 1 | (is.na(dat$scrhispf) & dat$racefc %in% 4)
      
         dat$hispanic_or_latino[sel3] <- "HL"
         dat$hispanic_or_latino[sel1] <- "notHL"
         dat$hispanic_or_latino[sel2] <- "both"
      
         datt <- dat %>% filter(!is.na(hispanic_or_latino)) %>%
                select(topmed_subject_id, hispanic_or_latino)
      
         return(datt)
      }
      ```
<a id="hispanic_or_latino_1-mgh_af"></a>
  * ### demographic/hispanic_or_latino_1 -- **MGH_AF**:
    * 1 component_study_variables: `phs001001.v1.pht005655.v1.phv00354563.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
      
        library(dplyr)
      
        dataset <- phen_list$source_data$pht005655
      
        dataset$ethnicity_cat <- ifelse(dataset$ethnicity == 'yes', 'HL',
                                      ifelse(dataset$ethnicity == 'no', 'notHL', NA))
        dataset <- dataset %>%
                   select(topmed_subject_id, hispanic_or_latino = ethnicity_cat) %>%
                   na.omit()
      }
      ```
<a id="hispanic_or_latino_1-partners"></a>
  * ### demographic/hispanic_or_latino_1 -- **Partners**:
    * 1 component_study_variables: `phs001024.v3.pht005693.v1.phv00265981.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Dataset
        dataset <- phen_list$source_data$pht005693
      
        #Ethnicity categories
        dataset$ethnicity_cat <- ifelse(dataset$ethnicity == 'yes', 'HL',
                                        ifelse(dataset$ethnicity == 'no', 'notHL', NA))
      
        #Variable selection and remove missing
        dataset <- select(dataset, topmed_subject_id, hispanic_or_latino = ethnicity_cat) %>%
                   na.omit()
      
        return(dataset)
      }
      ```
<a id="hispanic_or_latino_1-vafar"></a>
  * ### demographic/hispanic_or_latino_1 -- **VAFAR**:
    * 1 component_study_variables: `phs000997.v3.pht005688.v3.phv00265925.v3`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset.
        dataset <- phen_list$source_data$pht005688
      
        # Substitute encoded ethnicity values.
        dataset$ethnicity[dataset$ethnicity %in% 'yes'] <- 'HL'
        dataset$ethnicity[dataset$ethnicity %in% 'no'] <- 'notHL'
      
        # Substitute the value of 'NA' to missing.
        dataset$ethnicity[dataset$ethnicity %in% 'NA'] <- NA
      
        # Remove records with NAs from dataset.
        dataset <- rename(dataset, hispanic_or_latino = ethnicity) %>%
                   na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="hispanic_or_latino_1-vu_af"></a>
  * ### demographic/hispanic_or_latino_1 -- **VU_AF**:
    * 1 component_study_variables: `phs001032.v4.pht005675.v3.phv00265809.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset.
        dataset <- phen_list$source_data$pht005675
      
        # Substitute encoded ethnicity values.
        dataset$ethnicity[dataset$ethnicity %in% 'yes'] <- 'HL'
        dataset$ethnicity[dataset$ethnicity %in% 'no'] <- 'notHL'
      
        # Substitute the value of 'NA' to missing.
        dataset$ethnicity[dataset$ethnicity %in% 'NA'] <- NA
      
        # Remove records with NAs from dataset.
        dataset <- rename(dataset, hispanic_or_latino = ethnicity) %>%
                   na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="hispanic_or_latino_1-whi"></a>
  * ### demographic/hispanic_or_latino_1 -- **WHI**:
    * 1 component_study_variables: `phs000200.v11.pht000998.v6.phv00078450.v6`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
       # harmonize ethnicity for WHI
       # From WHI study investigator: Form 2 takes precedence, Form 41 can be used for more specificity
       # If Form 2 says "hispanic", and F41 has one of the main hispanic subcategories
       #   (puerto rican, mexican, cuban), that can be used.
       # The other combinations (F2 = hispanic and F41 = missing, F41 = "not hispanic",
       #   or F41 = "other hispanic") can be lumped together or used separate.
       # However, if F41 is Hispanic and F2 is not hispanic, F2 wins.
      
          source_data <- phen_list$source_data
      
       ## baseline
       # 1=American Indian or Alaskan Native; 2=Asian or Pacific Islander;
       #    3=Black or African American; 4=Hispanic/Latino; 5=White (not of Hispanic origin); 8 = Other
      
         dat <- source_data[["pht000998"]]
         dat <- dat %>% filter(!is.na(RACE)) %>%
             mutate(hispanic_or_latino = ifelse(RACE %in% 4, "HL", "notHL")) %>%
             select(topmed_subject_id, hispanic_or_latino)
      
       return(dat)
      }
      ```
<a id="hispanic_subgroup_1"></a>
## demographic: **hispanic_subgroup_1** (hispanic_subgroup)
  classification of Hispanic/Latino background for Hispanic/Latino subjects where country or region of origin information is available
  * **Harmonization Units**:
    * [CRA](#hispanic_subgroup_1-cra)
    * [HCHS_SOL](#hispanic_subgroup_1-hchs_sol)
    * [MESA_AirNR](#hispanic_subgroup_1-mesa_airnr)
    * [MESA_Classic](#hispanic_subgroup_1-mesa_classic)
    * [MESA_Family](#hispanic_subgroup_1-mesa_family)
    * [WHI](#hispanic_subgroup_1-whi)
  * **Metadata**:
    **`Data Type`**: encoded, **`Measurement Units`**: None, **`Version`**: 1, **`Has Age Variable`**: No, **`Date Harmonized`**: 2017-08-02 13:25:16
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2018AB, `ID:` C0804625
  * **DCC Harmonization Comments**:

    No additional summary information for this trait.
    
<a id="hispanic_subgroup_1-cra"></a>
  * ### demographic/hispanic_subgroup_1 -- **CRA**:
    * 1 component_study_variables: `phs000988.v2.pht005248.v2.phv00258651.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
       # harmonize hispanic subgroup CRA
       # phenotype file has "race", all values "Hispanic"
          source_data <- phen_list$source_data
      
          dat <- source_data[["pht005248"]]
      
         dat <- dat %>% filter(race %in% "Hispanic") %>%
                mutate(hispanic_subgroup = "CostaRican") %>% select(topmed_subject_id, hispanic_subgroup)
      
         return(dat)
      }
      ```
<a id="hispanic_subgroup_1-hchs_sol"></a>
  * ### demographic/hispanic_subgroup_1 -- **HCHS_SOL**:
    * 1 component_study_variables: `phs000810.v1.pht004715.v1.phv00226254.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
          source_data <- phen_list$source_data
          dat <- source_data[["pht004715"]]
      
        # All subjects are Hispanic/Latino
      
         # 0=Dominican; 1=Central American; 2=Cuban; 3= Mexican; 4=Puerto-Rican; 5=South American; 6=More than one heritage/Other; Q = DK/Refused
      
         dat <- dat %>% filter(BKGRD1_C7 %in% 0:5)
      
         rc <- c("Dominican", "CentralAmerican", "Cuban", "Mexican", "PuertoRican", "SouthAmerican")
         dat$hispanic_subgroup <- as.integer(dat$BKGRD1_C7) + 1
         dat$hispanic_subgroup <- rc[dat$hispanic_subgroup]
      
         dat <- dat %>%
              select(topmed_subject_id, hispanic_subgroup)
      
            return(dat)
      }
      ```
<a id="hispanic_subgroup_1-mesa_airnr"></a>
  * ### demographic/hispanic_subgroup_1 -- **MESA_AirNR**:
    * 1 component_study_variables: `phs000209.v13.pht001111.v4.phv00083215.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
       # hispanic subgroup MESA AirNR
      
       #hctryo1c: CENTRAL AMERICA NOS, DOMINICAN REPUBLIC, MEXICO, OTHER NOS,
       #           PUERTO RICO, SOUTH AMERICA NOS
      
        source_data <- phen_list$source_data
      
         # visit 1 data
          dat <- source_data[["pht001111"]]
      
        vro <- c("CENTRAL AMERICA NOS", "DOMINICAN REPUBLIC", "MEXICO", "PUERTO RICO", "SOUTH AMERICA NOS")
        vrn <- c("CentralAmerican", "Dominican", "Mexican", "PuertoRican", "SouthAmerican")
      
        dat$hispanic_subgroup <- NA
        for (i in 1:length(vro)){
           sel <- dat$hctryo1c %in% vro[i]
           dat$hispanic_subgroup[sel] <- vrn[i]
        }
      
        dat <- dat %>% filter(!is.na(hispanic_subgroup)) %>% select(topmed_subject_id, hispanic_subgroup)
      
        return(dat)
      }
      ```
<a id="hispanic_subgroup_1-mesa_classic"></a>
  * ### demographic/hispanic_subgroup_1 -- **MESA_Classic**:
    * 1 component_study_variables: `phs000209.v13.pht001116.v10.phv00085543.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
       # hispanic subgroup MESA Classic
      
       #hctryo1c: CENTRAL AMERICA NOS, DOMINICAN REPUBLIC, MEXICO, OTHER NOS,
       #           PUERTO RICO, SOUTH AMERICA NOS, CARIBBEAN NOS, CUBA, NOT SPECIFIED
      
        source_data <- phen_list$source_data
      
         # visit 1 data
          dat <- source_data[["pht001116"]]
      
        vro <- c("CENTRAL AMERICA NOS", "DOMINICAN REPUBLIC", "MEXICO", "PUERTO RICO", "SOUTH AMERICA NOS", "CUBA")
        vrn <- c("CentralAmerican", "Dominican", "Mexican", "PuertoRican", "SouthAmerican", "Cuban")
      
        dat$hispanic_subgroup <- NA
        for (i in 1:length(vro)){
           sel <- dat$hctryo1c %in% vro[i]
           dat$hispanic_subgroup[sel] <- vrn[i]
        }
      
        dat <- dat %>% filter(!is.na(hispanic_subgroup)) %>% select(topmed_subject_id, hispanic_subgroup)
      
        return(dat)
      }
      ```
<a id="hispanic_subgroup_1-mesa_family"></a>
  * ### demographic/hispanic_subgroup_1 -- **MESA_Family**:
    * 1 component_study_variables: `phs000209.v13.pht001121.v3.phv00087228.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
       # hispanic subgroup MESA Family
      
       #hctryofc: CENTRAL AMERICA NOS, DOMINICAN REPUBLIC, MEXICO, OTHER NOS,
       #           PUERTO RICO, SOUTH AMERICA NOS, CUBA
      
        source_data <- phen_list$source_data
      
         # visit 1 data
          dat <- source_data[["pht001121"]]
      
        vro <- c("CENTRAL AMERICA NOS", "DOMINICAN REPUBLIC", "MEXICO", "PUERTO RICO", "SOUTH AMERICA NOS", "CUBA")
        vrn <- c("CentralAmerican", "Dominican", "Mexican", "PuertoRican", "SouthAmerican", "Cuban")
      
        dat$hispanic_subgroup <- NA
        for (i in 1:length(vro)){
           sel <- dat$hctryofc %in% vro[i]
           dat$hispanic_subgroup[sel] <- vrn[i]
        }
      
        dat <- dat %>% filter(!is.na(hispanic_subgroup)) %>% select(topmed_subject_id, hispanic_subgroup)
      
        return(dat)
      }
      ```
<a id="hispanic_subgroup_1-whi"></a>
  * ### demographic/hispanic_subgroup_1 -- **WHI**:
    * 2 component_study_variables: `phs000200.v11.pht000998.v6.phv00078450.v6`, `phs000200.v11.pht001009.v6.phv00079316.v6`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      # If Form 2 says "hispanic", and F41 has one of the main hispanic subcategories (puerto rican, mexican, cuban), that can be used.
      # Form 41 used for specificity - otherwise Form 2 takes precedence
      
       # harmonize hispanic subgroup for WHI
          source_data <- phen_list$source_data
      
        # Form 2 Hispanic is RACE = 4
          dat1 <- source_data[["pht000998"]]
      
       # variable SPANISH Form 41: 0 = not Hispanic, 1 = Puerto Rican, 2 = Mexican/MexicanAmerican, Chicano, 3 = Cuban, 4 = Other Hispanic
         dat2 <- source_data[["pht001009"]]
      
         dat <- inner_join(dat1, dat2)
      
      # choose Hispanics
         dat <- dat %>% filter(RACE %in% 4 & SPANISH %in% 1:3)
      
         dat$hispanic_subgroup[dat$SPANISH %in% 1] <- "PuertoRican"
         dat$hispanic_subgroup[dat$SPANISH %in% 2] <- "Mexican"
         dat$hispanic_subgroup[dat$SPANISH %in% 3] <- "Cuban"
      
         dat <- dat %>% select(topmed_subject_id, hispanic_subgroup)
      
        return(dat)
      }
      ```
<a id="race_us_1"></a>
## demographic: **race_us_1** (race_us)
  Reported race of participant according to the United States administrative definition of race.
  * **Harmonization Units**:
    * [Amish](#race_us_1-amish)
    * [ARIC](#race_us_1-aric)
    * [CARDIA](#race_us_1-cardia)
    * [CCAF](#race_us_1-ccaf)
    * [CFS](#race_us_1-cfs)
    * [CHS_AfricanAmerican](#race_us_1-chs_africanamerican)
    * [CHS_Original](#race_us_1-chs_original)
    * [COPDGene](#race_us_1-copdgene)
    * [DHS](#race_us_1-dhs)
    * [FHS_Gen3](#race_us_1-fhs_gen3)
    * [FHS_NewOffspringSpouse](#race_us_1-fhs_newoffspringspouse)
    * [FHS_Offspring](#race_us_1-fhs_offspring)
    * [FHS_Omni1](#race_us_1-fhs_omni1)
    * [FHS_Omni2](#race_us_1-fhs_omni2)
    * [FHS_Original](#race_us_1-fhs_original)
    * [GALAII](#race_us_1-galaii)
    * [GeneSTAR](#race_us_1-genestar)
    * [GENOA](#race_us_1-genoa)
    * [GOLDN](#race_us_1-goldn)
    * [HCHS_SOL](#race_us_1-hchs_sol)
    * [HVH](#race_us_1-hvh)
    * [JHS](#race_us_1-jhs)
    * [Mayo_VTE_GENEVA](#race_us_1-mayo_vte_geneva)
    * [Mayo_VTE_Olmsted](#race_us_1-mayo_vte_olmsted)
    * [MESA_AirNR](#race_us_1-mesa_airnr)
    * [MESA_Classic](#race_us_1-mesa_classic)
    * [MESA_Family](#race_us_1-mesa_family)
    * [MGH_AF](#race_us_1-mgh_af)
    * [Partners](#race_us_1-partners)
    * [SAGE](#race_us_1-sage)
    * [VAFAR](#race_us_1-vafar)
    * [VU_AF](#race_us_1-vu_af)
    * [WGHS](#race_us_1-wghs)
    * [WHI](#race_us_1-whi)
  * **Metadata**:
    **`Data Type`**: encoded, **`Measurement Units`**: None, **`Version`**: 1, **`Has Age Variable`**: No, **`Date Harmonized`**: 2019-10-29 10:12:49
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2019AA, `ID:` C0034510
  * **DCC Harmonization Comments**:

    The values for this harmonized variable are largely concordant with the Office of Management and Budget (OMB) race categories[^1], but ultimately rely on if and how each study asked subjects about their race and ethnicity. This harmonized variable only includes studies where all or most subjects were recruited in the U.S. Subjects in studies that recruited all subjects outside the U.S. were not included in this harmonized variable.
    
    Some studies included the option "`Asian or Pacific Islander`" (in contrast to separate options of "`Native Hawaiian/Pacific Islander`" and "`Asian`"). In these cases, the value assigned for this variable was "`Asian`". If a component study variable included the option of Hispanic/Latino, "`Other`" was assigned for this variable unless there was additional information to allow for a specific race value to be assigned. Information about Hispanic/Latino origin is provided in the harmonized variable `hispanic_or_latino_1.` In addition to "`Other`" being assigned in this way, some studies had questionnaires where "`Other`" was an option to select for race. In these cases, the value "`Other`" was used for these subjects in this harmonized variable.
    
    For studies with multiple component variables asking for "`Yes`" or "`No`" for various race options, if a subject indicated "`Yes`" for more than one race option, the value "`Multiple`" was assigned for this variable. For studies/subcohorts with multiple visits and comparable race/ethnicity questions, if race values were inconsistent across visits, the value "`Multiple`" was assigned for this variable.
    
    Please note that the "`Other`" and "`Multiple`" encoded values are very heterogeneous and are not intended to be used directly in analysis. If this variable is used in analysis, analysts should either exclude subjects who were assigned to either of these encoded values or decide how to appropriately group the subjects with these values.
    
    It is expected that most values for this harmonized variable are from self-report of study subjects; however, this cannot be guaranteed in all cases. For some subjects, it is possible that a race value was assigned by a member of the research team. Indeed, for several studies it is known that race is not directly from self-report but rather was inferred from the study recruitment criteria and/or confirmed by study investigators. 
    
    ### Study-specific comments
    
    #### Amish
    
    All consented subjects were assigned the value  "`White`" for this harmonized variable, which was confirmed by study investigators.
    
    #### ARIC
    
    Component variables for *ARIC* include study variables from multiple visits.
    
    #### CFS
    
    Component variables for *CFS* include study variables from multiple visits.
    
    #### FHS
    
    All consented subjects from the *FHS* Original subcohort were assigned the value "`White`" for this harmonized variable, which was confirmed by study investigators.
    
    Component variables for *FHS* Generation 3, New Offspring Spouse, and Omni 2 subcohorts include study variables from multiple visits.
    
    *FHS* Offspring and Omni 1 subcohorts only used component variables from one visit.
    
    #### GALAII
    
    All consented subjects were assigned the value "`Other`" for this harmonized variable, which was confirmed by study investigators.
    
    #### GOLDN
    
    All consented subjects were assigned the value "`White`" for this harmonized variable based on recruitment criteria.
    
    #### HCHS_SOL
    
    All consented subjects were assigned the value "`Other`" for this harmonized variable, which was confirmed by study investigators.
    
    #### JHS
    
    All consented subjects were assigned the value "`Black`" for this harmonized variable, which was confirmed by study investigators.
    
    #### MESA
    
    Component variables for *MESA* AirNR and Classic subcohorts include study variables from multiple visits.
    
    *MESA* Family subcohort only used component variables from one visit.
    
    #### WHI 
    
    *WHI* ascertained race using two forms, one with broader race options and the second with more specific options, but the broader form took precedence according to study investigators. In this harmonization the second form was used to determine the assignment of "`Native Hawaiian/Pacific Islander`" over "`Asian`". Subjects who selected more than one option on the second form were not assigned to "`Multiple`".  See harmonization algorithm for more details.
    
    
    [^1]: Revisions to the Standards for the Classification of Federal Data on Race and Ethnicity, 62 Fed. Reg. 210 (October 30, 1997). *Federal Register: The Daily Journal of the United States*. 
    
    
<a id="race_us_1-amish"></a>
  * ### demographic/race_us_1 -- **Amish**:
    * 1 component_study_variables: `phs000956.v3.pht005000.v1.phv00252969.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
          source_data <- phen_list$source_data
          dat <- source_data[["pht005000"]]
      
        # confirmed with PI that all subjects are Amish; set race_us = White
        # pull in subject file and eliminate consent=0 subjects
      
         dat <- dat %>% filter(!is.element(CONSENT, 0)) %>%
              mutate(race_us = "White") %>%
              select(topmed_subject_id, race_us)
      
         return(dat)
      }
      ```
<a id="race_us_1-aric"></a>
  * ### demographic/race_us_1 -- **ARIC**:
    * 3 component_study_variables: `phs000280.v5.pht004062.v2.phv00204633.v1`, `phs000280.v5.pht004063.v2.phv00204710.v1`, `phs000280.v5.pht004065.v2.phv00204962.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
       # harmonize race_us and hispanic_or_latino for ARIC
       # A=Asian/Pacific Islander;B=Black;I=American Indian or Alaskan Indian;W=White
      
         source_data <- phen_list$source_data
      
         # visit 1 data
      
          dat1 <- source_data[["pht004063"]]
      
         # visit 2 data
          dat2 <- source_data[["pht004062"]]
      
         # visit 4 data
          dat4 <- source_data[["pht004065"]]
      
         dat <- rbind(dat1, dat2, dat4)
      
         dat$race_us <- dat$RACEGRP
         dat$race_us[dat$race_us %in% "A"] <- "Asian"
         dat$race_us[dat$race_us %in% "B"] <- "Black"
         dat$race_us[dat$race_us %in% "I"] <- "AI_AN"
         dat$race_us[dat$race_us %in% "W"] <- "White"
      
         dat <- dat %>% filter(!is.na(race_us)) %>% tbl_df() %>%
             arrange(topmed_subject_id) %>%
              group_by(topmed_subject_id)
      
        # determine number of unique race categories chosen across visits for each subject
         sdat <- dat %>% summarise(ncatr = length(unique(race_us)))
      
         datt <- inner_join(dat, sdat)
      
        # if subject chose more than one race category across visits, assign race_us = Multiple
         selr <- datt$ncatr > 1
         datt$race_us[selr] <- "Multiple"
      
        # slice(1) chooses the first entry for each subject (all entries per subject are now the same)
         datt <- datt %>% filter(!is.na(race_us)) %>% slice(1) %>%
                select(topmed_subject_id, race_us)
      
         return(datt)
      }
      ```
<a id="race_us_1-cardia"></a>
  * ### demographic/race_us_1 -- **CARDIA**:
    * 1 component_study_variables: `phs000285.v3.pht001645.v2.phv00115113.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
       # harmonize race_us for CARDIA
          source_data <- phen_list$source_data
      
       ## study document for B2REF (pht001645) says:
       #  This file contains the demographic variables (age, sex, race, education)
       # and should be used in any analysis of the CARDIA cohort requiring stratification
       # by the demographic variables.
       #  The variables SEX and RACE are based on the original demographic variables collected in Exam 1
       # and verified in Exam 2.
       #  This reference file is the only file in this version of the CARDIA data that contains
       # information on all original participants.
       #  Document for A4REF from Exam1 states:
       # THE FOLLOWING CODE IMPLEMENTS ONLY TWO CODES FOR THE RACE VARIABLE
       #  5 - WHITE AND 4 - BLACK
       # Only 2 codes were carried forward
      
         dat <- source_data[["pht001645"]]
      
         dat$race_us <- NA
         dat$race_us[dat$RACE %in% 4] <- "Black"
         dat$race_us[dat$RACE %in% 5] <- "White"
      
         dat <- dat %>% filter(!is.na(race_us)) %>% select(topmed_subject_id, race_us)
      
         return(dat)
      }
      ```
<a id="race_us_1-ccaf"></a>
  * ### demographic/race_us_1 -- **CCAF**:
    * 1 component_study_variables: `phs001189.v2.pht005979.v2.phv00273549.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset.
        dataset <- phen_list$source_data$pht005979 %>%
                   rename(race_us = race)
      
        # Substitute encoded race values.
        dataset$race_us[dataset$race_us %in% 'white'] <- 'White'
      
        # Substitute the value of 'NA' to missing.
        dataset$race_us[dataset$race_us %in% 'NA'] <- NA
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="race_us_1-cfs"></a>
  * ### demographic/race_us_1 -- **CFS**:
    * 1 component_study_variables: `phs000284.v2.pht001902.v1.phv00122991.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
          source_data <- phen_list$source_data
          dat <- source_data[["pht001902"]]
      
       # 1=White or Caucasian; 2=Black or African American; 3=Asian; 4=Hispanic;
      #  5=Native American or Alaska Native;  6=More than one race
       # White if variable=1; Black if variable=2; Asian if variable=3; Other if variable=4;
       # AI_AN if variable = 5; Multiple if variable=6
       # dat has multiple entries per subject for different visits
      
         rc <- c("White", "Black", "Asian", "Hispanic", "AI_AN", "Multiple")
         dat$race <- as.integer(dat$race)
         dat$race <- rc[dat$race]
      
         dat2 <- dat %>% tbl_df() %>%
             arrange(topmed_subject_id) %>%
              group_by(topmed_subject_id)
      
         seh <- dat2$race %in% "Hispanic"
         dat2$race[seh] <- "Other"
         dat3 <- dat2[!is.na(dat2$race), ]
      
        # determine number of unique race categories chosen across visits for each subject
         sdat <- dat3 %>% summarise(ncatr = length(unique(race)), ot = is.element("Other", race))
      
         # if more than one race category (not including "Other") per subject across visits,
         #   assign race = Multiple
         datt <- inner_join(dat3, sdat)
         selr <- datt$ncatr > 2
         datt$race[selr] <- "Multiple"
      
         so <- datt$ncatr == 2 & datt$ot == FALSE
         datt$race[so] <- "Multiple"
      
        # if race chosen as Other and one other race also chosen, assign the more specific race
         se <- datt$ncatr == 2 & datt$ot == TRUE
         sse <- se & datt$race %in% "Other"
         datt <- datt[!sse, ]
        # take out the "Other" entry so slice(1) (taking first entry per subject)
        #  will capture the more specific race
      
         datt <- datt %>% filter(!is.na(race)) %>% slice(1) %>%
                select(topmed_subject_id, race_us = race)
      
         return(datt)
      }
      ```
<a id="race_us_1-chs_africanamerican"></a>
  * ### demographic/race_us_1 -- **CHS_AfricanAmerican**:
    * 1 component_study_variables: `phs000287.v6.pht001490.v1.phv00105645.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
          source_data <- phen_list$source_data
          dat <- source_data[["pht001490"]]
      
       # YR5 NEW file (NEW cohort)
       # 1=white;2=black; 3=American Indian or Alaska Native; 4= Asian/Pacific Islander; 5 = Other
      
          dat <- dat %>% filter(!is.na(RACE01))
      
         rc <- c("White", "Black", "AI_AN", "Asian", "Other")
         dat$race_us <- as.integer(dat$RACE01)
         dat$race_us <- rc[dat$race_us]
      
         datt <- dat %>% filter(!is.na(race_us)) %>%
                select(topmed_subject_id, race_us)
      
         return(datt)
      }
      ```
<a id="race_us_1-chs_original"></a>
  * ### demographic/race_us_1 -- **CHS_Original**:
    * 1 component_study_variables: `phs000287.v6.pht001450.v1.phv00099569.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
          source_data <- phen_list$source_data
          dat <- source_data[["pht001450"]]
      
       # BASE1 file (Original, ie. OLD cohort)
       # 1=white;2=black; 3=American Indian or Alaska Native; 4= Asian/Pacific Islander; 5 = Other
      
         dat <- dat %>% filter(!is.na(RACE01))
      
         rc <- c("White", "Black", "AI_AN", "Asian", "Other")
         dat$race_us <- as.integer(dat$RACE01)
         dat$race_us <- rc[dat$race_us]
      
         datt <- dat %>% filter(!is.na(race_us)) %>%
                select(topmed_subject_id, race_us)
      
         return(datt)
      }
      ```
<a id="race_us_1-copdgene"></a>
  * ### demographic/race_us_1 -- **COPDGene**:
    * 1 component_study_variables: `phs000179.v5.pht002239.v4.phv00159572.v4`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
          source_data <- phen_list$source_data
          dat <- source_data[["pht002239"]] %>%
                 rename(race_us = race)
      
       # harmonize race_us for COPDGene
       # 1=Caucasian; 2=African American; 3=Asian; 4=Pacific Islander;
       # 5= American Indian/Alaska; 6 = More than one race; 7 = Other
      
         rc <- c("White", "Black", "Asian", "HI_PI", "AI_AN", "Multiple", "Other")
         dat <- dat[!is.na(dat$race_us), ]
         dat$race_us <- as.integer(dat$race_us)
         dat$race_us <- rc[dat$race_us]
      
         return(dat)
      }
      ```
<a id="race_us_1-dhs"></a>
  * ### demographic/race_us_1 -- **DHS**:
    * 1 component_study_variables: `phs001412.v1.pht006746.v1.phv00310019.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Dataset
        dataset <- phen_list$source_data$pht006746 %>%
                   rename(race_us = RACE)
        #Encoding race values
        dataset$race_us[dataset$race_us %in% "AA"] <- "Black"
      
        return(dataset)
      }
      ```
<a id="race_us_1-fhs_gen3"></a>
  * ### demographic/race_us_1 -- **FHS_Gen3**:
    * 17 component_study_variables: `phs000007.v30.pht000074.v11.phv00021244.v5`, `phs000007.v30.pht000074.v11.phv00021245.v5`, `phs000007.v30.pht000074.v11.phv00021246.v5`, `phs000007.v30.pht000074.v11.phv00021247.v5`, `phs000007.v30.pht000074.v11.phv00021248.v5`, `phs000007.v30.pht000074.v11.phv00021249.v5`, `phs000007.v30.pht000074.v11.phv00021250.v5`, `phs000007.v30.pht000074.v11.phv00021251.v5`, `phs000007.v30.pht000074.v11.phv00021398.v5`, `phs000007.v30.pht003094.v5.phv00177238.v3`, `phs000007.v30.pht003094.v5.phv00177597.v3`, `phs000007.v30.pht003094.v5.phv00177598.v3`, `phs000007.v30.pht003094.v5.phv00177599.v3`, `phs000007.v30.pht003094.v5.phv00177600.v3`, `phs000007.v30.pht003094.v5.phv00177601.v3`, `phs000007.v30.pht003094.v5.phv00177602.v3`, `phs000007.v30.pht003094.v5.phv00177603.v3`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
       # harmonize race_us and hispanic_or_latino for FHS Generation 3
       # variables are 0/1 (no/yes) for given categories
       # White (Caucasian or White), Hispanic (Spanish/Hispanic/Latino)
       # Black (African-American or Black), Asian, HI_PI (Native Hawaiian or Pacific Islander
       # AI_AN (American Indian or Alaskan Native), Other, No (Prefer not to answer)
       # can choose more than one
      
         source_data <- phen_list$source_data
      
         # visit 1 data
      
          dat1 <- source_data[["pht000074"]]
          dat1 <- dat1[dat1$IDTYPE %in% 3, ]
          vars <- paste0("G3A", 483:490)
      
        #  rename variables; change 0/1 categorical to integer
          nm <- c("White", "Hispanic", "Black", "Asian", "HI_PI", "AI_AN", "Other", "No")
          for (i in 1:length(vars)){
            dat1[, vars[i]] <- as.integer(dat1[, vars[i]])
            names(dat1)[names(dat1) %in% vars[i]] <- nm[i]
          }
         w <- which(is.element(dat1, "."))
         dat1[w] <- NA
         dat1$race_us <- NA
      
        # treat "Hispanic" differently
         cnm <- c("White", "Black", "Asian", "HI_PI", "AI_AN", "Other")
      
        # add up 0's and 1's across variables for each subject
        # if sum =1 only chose one race category, if sum > 1 chose multiple race categories,
        #   if sum = 0, did not choose any of the indicated categories
         dat1$rs <- rowSums(dat1[, cnm], na.rm = TRUE)
      
        # if only one category chosen, assign that category as the race
         s1 <- dat1$rs %in% 1 & !(dat1$No %in% 1)
         ws1 <- which(s1)
         t2 <- dat1[s1, cnm]
         wa <- which(t2 == 1, arr.ind = T)
         dat1$race_us[ws1[wa[, 1]]] <- cnm[wa[, 2]]
      
       # if more than one race category chosen, assign race_us as "Multiple"
         s3 <- dat1$rs > 1 & !(dat1$No %in% 1)
         dat1$race_us[s3] <- "Multiple"
      
       # if Hispanic category chosen with no other race category, assign "Other"
       # person did choose to identify a race
       # ethnicity will be set to HL (i.e. is Hispanic)
      
         s <- dat1$Hispanic %in% 1 & dat1$rs %in% 0
         dat1$race_us[s] <- "Other"
      
         dat1$race_us[dat1$No %in% 1] <- NA
      
         dat1 <- dat1 %>% filter(!is.na(dat1$race_us)) %>% select(topmed_subject_id, race_us)
      
         # visit 2 data - contains Gen3, NOS, Omni2
         # Hispanic is not race choice but there is question re Hispanic ethnicity
         # race is not affected by ethnicity
         # here if chose ethnicity as Hispanic but no race - set race_us to Other if no other race choice
      
          dat2 <- source_data[["pht003094"]]
          dat2 <- dat2[dat2$idtype %in% 3, ] # choose Gen3
          vars <- paste0("g3b0", 625:630)
          nm <- c("White", "Black", "Asian", "HI_PI", "AI_AN", "No")
          for (i in 1:length(vars)){
            dat2[, vars[i]] <- as.integer(dat2[, vars[i]])
            names(dat2)[names(dat2) %in% vars[i]] <- nm[i]
          }
         w <- which(is.element(dat2, "."))
         dat2[w] <- NA
         dat2$race_us <- NA
      
         cnm <- c("White", "Black", "Asian", "HI_PI", "AI_AN")
         dat2$rs <- rowSums(dat2[, cnm], na.rm = TRUE)
      
        # if only one category chosen, assign that category as the race
         s1 <- dat2$rs %in% 1 & !(dat2$No %in% 1)
         ws1 <- which(s1)
         t2 <- dat2[s1, cnm]
         wa <- which(t2 == 1, arr.ind = T)
         dat2$race_us[ws1[wa[, 1]]] <- cnm[wa[, 2]]
      
       # if more than one race category chosen, assign race_us as "Multiple"
         s3 <- dat2$rs > 1 & !(dat2$No %in% 1)
         dat2$race_us[s3] <- "Multiple"
      
       # no other race chosen but indicated Hispanic ethnicity, set race_us to Other
         s <- dat2$g3b0624 %in% 1 & dat2$rs %in% 0
         dat2$race_us[s] <- "Other"
      
         dat2$race_us[dat2$No %in% 1] <- NA
      
         dat2 <- dat2 %>% filter(!is.na(dat2$race_us)) %>% select(topmed_subject_id, race_us)
      
       # check for consistency across visits - if differ, assign race_us as "Multiple"
         dat <- rbind(dat1, dat2)
      
         dat <- dat %>% tbl_df() %>%
             arrange(topmed_subject_id) %>%
              group_by(topmed_subject_id)
      
          # determine number of unique race categories chosen across visits for each subject
         sdat <- dat %>% summarise(ncatr = length(unique(race_us)), ot = is.element("Other", race_us))
      
         # if more than one race category (not including "Other") per subject across visits,
         #   assign race_us = Multiple
         datt <- inner_join(dat, sdat)
         selr <- datt$ncatr > 2
         datt$race_us[selr] <- "Multiple"
      
         so <- datt$ncatr == 2 & datt$ot == FALSE
         datt$race_us[so] <- "Multiple"
      
        # if race chosen as Other and one other race also chosen, assign the more specific race
         se <- datt$ncatr == 2 & datt$ot == TRUE
         sse <- se & datt$race_us %in% "Other"
         datt <- datt[!sse, ]
         # take out the "Other" entry so slice(1) (taking first entry per subject)
      #     will capture the more specific race
      
         datt <- datt %>% filter(!is.na(race_us)) %>% slice(1) %>%
                select(topmed_subject_id, race_us)
      
         return(datt)
      }
      ```
<a id="race_us_1-fhs_newoffspringspouse"></a>
  * ### demographic/race_us_1 -- **FHS_NewOffspringSpouse**:
    * 17 component_study_variables: `phs000007.v30.pht003094.v5.phv00177238.v3`, `phs000007.v30.pht003094.v5.phv00177597.v3`, `phs000007.v30.pht003094.v5.phv00177598.v3`, `phs000007.v30.pht003094.v5.phv00177599.v3`, `phs000007.v30.pht003094.v5.phv00177600.v3`, `phs000007.v30.pht003094.v5.phv00177601.v3`, `phs000007.v30.pht003094.v5.phv00177602.v3`, `phs000007.v30.pht003094.v5.phv00177603.v3`, `phs000007.v30.pht006005.v1.phv00273701.v1`, `phs000007.v30.pht006005.v1.phv00274066.v1`, `phs000007.v30.pht006005.v1.phv00274067.v1`, `phs000007.v30.pht006005.v1.phv00274068.v1`, `phs000007.v30.pht006005.v1.phv00274069.v1`, `phs000007.v30.pht006005.v1.phv00274070.v1`, `phs000007.v30.pht006005.v1.phv00274071.v1`, `phs000007.v30.pht006005.v1.phv00274072.v1`, `phs000007.v30.pht006005.v1.phv00274073.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
       # harmonize race_us and hispanic_or_latino for FHS New Offspring Spouse
       # variables are 0/1 (no/yes) for given categories
       # White (Caucasian or White), Hispanic (Spanish/Hispanic/Latino)
       # Black (African-American or Black), Asian, HI_PI (Native Hawaiian or Pacific Islander
       # AI_AN (American Indian or Alaskan Native), Other, No (Prefer not to answer)
       # can choose more than one
      
         source_data <- phen_list$source_data
      
         # visit 1 data
      
          dat1 <- source_data[["pht006005"]]
          dat1 <- dat1[dat1$idtype %in% 2, ]
          vars <- paste0("g3a", 483:490)
          nm <- c("White", "Hispanic", "Black", "Asian", "HI_PI", "AI_AN", "Other", "No")
      
        #  rename variables; change 0/1 categorical to integer
         for (i in 1:length(vars)){
            dat1[, vars[i]] <- as.integer(dat1[, vars[i]])
            names(dat1)[names(dat1) %in% vars[i]] <- nm[i]
          }
         w <- which(is.element(dat1, "."))
         dat1[w] <- NA
         dat1$race_us <- NA
      
        # treat "Hispanic" differently
         cnm <- c("White", "Black", "Asian", "HI_PI", "AI_AN", "Other")
      
        # add up 0's and 1's across variables for each subject
        # if sum =1 only chose one race category, if sum > 1 chose multiple race categories,
        #   if sum = 0, did not choose any of the indicated categories
         dat1$rs <- rowSums(dat1[, cnm], na.rm = TRUE)
      
        # if only one category chosen, assign that category as the race
         s1 <- dat1$rs %in% 1 & !(dat1$No %in% 1)
         ws1 <- which(s1)
         t2 <- dat1[s1, cnm]
         wa <- which(t2 == 1, arr.ind = T)
         dat1$race_us[ws1[wa[, 1]]] <- cnm[wa[, 2]]
      
       # if more than one race category chosen, assign race_us as "Multiple"
         s3 <- dat1$rs > 1 & !(dat1$No %in% 1)
         dat1$race_us[s3] <- "Multiple"
      
       # if Hispanic category chosen with no other race category, assign "Other"
       # ethnicity will be set to HL (i.e. is Hispanic)
      
         s <- dat1$Hispanic %in% 1 & dat1$rs %in% 0
         dat1$race_us[s] <- "Other"
      
         dat1$race_us[dat1$No %in% 1] <- NA
      
         dat1 <- dat1 %>% filter(!is.na(dat1$race_us)) %>% select(topmed_subject_id, race_us)
      
         # visit 2 data - contains Gen3, NOS, Omni2
         # Hispanic is not race choice but there is question re Hispanic ethnicity
         # set race_us to Other if no other race choice
      
          dat2 <- source_data[["pht003094"]]
          dat2 <- dat2[dat2$idtype %in% 2, ] # choose NOS
          vars <- paste0("g3b0", 625:630)
          nm <- c("White", "Black", "Asian", "HI_PI", "AI_AN", "No")
          for (i in 1:length(vars)){
            dat2[, vars[i]] <- as.integer(dat2[, vars[i]])
            names(dat2)[names(dat2) %in% vars[i]] <- nm[i]
          }
         w <- which(is.element(dat2, "."))
         dat2[w] <- NA
         dat2$race_us <- NA
      
         cnm <- c("White", "Black", "Asian", "HI_PI", "AI_AN")
         dat2$rs <- rowSums(dat2[, cnm], na.rm = TRUE)
      
        # if only one category chosen, assign that category as the race
         s1 <- dat2$rs %in% 1 & !(dat2$No %in% 1)
         ws1 <- which(s1)
         t2 <- dat2[s1, cnm]
         wa <- which(t2 == 1, arr.ind = T)
         dat2$race_us[ws1[wa[, 1]]] <- cnm[wa[, 2]]
      
       # if more than one race category chosen, assign race_us as "Multiple"
         s3 <- dat2$rs > 1 & !(dat2$No %in% 1)
         dat2$race_us[s3] <- "Multiple"
      
        # no other race chosen but indicated Hispanic ethnicity, set race_us to Other
         s <- dat2$g3b0624 %in% 1 & dat2$rs %in% 0
         dat2$race_us[s] <- "Other"
      
         dat2$race_us[dat2$No %in% 1] <- NA
      
         dat2 <- dat2 %>% filter(!is.na(dat2$race_us)) %>% select(topmed_subject_id, race_us)
      
       # check for consistency across visits - if differ, assign race_us as "Multiple"
         dat <- rbind(dat1, dat2)
      
         dat <- dat %>% tbl_df() %>%
             arrange(topmed_subject_id) %>%
              group_by(topmed_subject_id)
      
          # determine number of unique race categories chosen across visits for each subject
       sdat <- dat %>% summarise(ncatr = length(unique(race_us)), ot = is.element("Other", race_us))
      
         # if more than one race category (not including "Other") per subject across visits,
         #   assign race_us = Multiple
      
         datt <- inner_join(dat, sdat)
         selr <- datt$ncatr > 2
         datt$race_us[selr] <- "Multiple"
      
         so <- datt$ncatr == 2 & datt$ot == FALSE
         datt$race_us[so] <- "Multiple"
      
        # if race chosen as Other and one other race also chosen, assign the more specific race
         se <- datt$ncatr == 2 & datt$ot == TRUE
         sse <- se & datt$race_us %in% "Other"
         datt <- datt[!sse, ]
         ## take out the "Other" entry so slice(1) (taking first entry per subject)
         #   will capture the more specific race
      
         datt <- datt %>% filter(!is.na(race_us)) %>% slice(1) %>%
                 select(topmed_subject_id, race_us)
      
         return(datt)
      }
      ```
<a id="race_us_1-fhs_offspring"></a>
  * ### demographic/race_us_1 -- **FHS_Offspring**:
    * 7 component_study_variables: `phs000007.v30.pht000747.v6.phv00072044.v5`, `phs000007.v30.pht000747.v6.phv00072530.v5`, `phs000007.v30.pht000747.v6.phv00072531.v5`, `phs000007.v30.pht000747.v6.phv00072532.v5`, `phs000007.v30.pht000747.v6.phv00072533.v5`, `phs000007.v30.pht000747.v6.phv00072534.v5`, `phs000007.v30.pht000747.v6.phv00072537.v5`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
       # harmonize race_us and hispanic_or_latino for FHS Offspring
       # variables are 0/1 (no/yes) for given categories
       # White (Caucasian or White)
       # Black (African-American or Black), Asian, HI_PI (Native Hawaiian or Pacific Islander
       # AI_AN (American Indian or Alaskan Native),  No (Prefer not to answer)
       # can choose more than one
       # ethnicity questions are separate
      
         source_data <- phen_list$source_data
      
         # visit 8 data
      
          dat1 <- source_data[["pht000747"]]
          dat1 <- dat1[dat1$IDTYPE %in% 1, ]
          vars <- paste0("H", 702:707)
          nm <- c("White", "Black", "Asian", "HI_PI", "AI_AN", "No")
      
          #  rename variables; change 0/1 categorical to integer
          for (i in 1:length(vars)){
            dat1[, vars[i]] <- as.integer(dat1[, vars[i]])
            names(dat1)[names(dat1) %in% vars[i]] <- nm[i]
          }
         w <- which(is.element(dat1, "."))
         dat1[w] <- NA
         dat1$race_us <- NA
      
         cnm <- c("White", "Black", "Asian", "HI_PI", "AI_AN")
      
        # add up 0's and 1's across variables for each subject
        # if sum =1 only chose one race category, if sum > 1 chose multiple race categories,
        #  if sum = 0, did not choose any of the indicated categories
         dat1$rs <- rowSums(dat1[, cnm], na.rm = TRUE)
      
        # if only one category chosen, assign that category as the race
         s1 <- dat1$rs %in% 1 & !(dat1$No %in% 1)
         ws1 <- which(s1)
         t2 <- dat1[s1, cnm]
         wa <- which(t2 == 1, arr.ind = T)
         dat1$race_us[ws1[wa[, 1]]] <- cnm[wa[, 2]]
      
       # if more than one race category chosen, assign race_us as "Multiple"
         s3 <- dat1$rs > 1 & !(dat1$No %in% 1)
         dat1$race_us[s3] <- "Multiple"
         dat1$race_us[dat1$No %in% 1] <- NA
      
         datt <- dat1 %>% filter(!is.na(dat1$race_us)) %>% select(topmed_subject_id, race_us)
      
         return(datt)
      }
      ```
<a id="race_us_1-fhs_omni1"></a>
  * ### demographic/race_us_1 -- **FHS_Omni1**:
    * 7 component_study_variables: `phs000007.v30.pht004815.v1.phv00251263.v1`, `phs000007.v30.pht004815.v1.phv00251748.v1`, `phs000007.v30.pht004815.v1.phv00251749.v1`, `phs000007.v30.pht004815.v1.phv00251750.v1`, `phs000007.v30.pht004815.v1.phv00251751.v1`, `phs000007.v30.pht004815.v1.phv00251752.v1`, `phs000007.v30.pht004815.v1.phv00251753.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
       # harmonize race_us and hispanic_or_latino for FHS Omni1
       # variables are 0/1 (no/yes) for given categories
       # White (Caucasian or White)
       # Black (African-American or Black), Asian, HI_PI (Native Hawaiian or Pacific Islander
       # AI_AN (American Indian or Alaskan Native),  No (Prefer not to answer)
       # can choose more than one
       # ethnicity questions are separate
      
         source_data <- phen_list$source_data
      
         # visit 3 data
      
          dat1 <- source_data[["pht004815"]]
          dat1 <- dat1[dat1$idtype %in% 7, ]
          vars <- paste0("h", 702:707)
          nm <- c("White", "Black", "Asian", "HI_PI", "AI_AN", "No")
      
        #  rename variables; change 0/1 categorical to integer
          for (i in 1:length(vars)){
            dat1[, vars[i]] <- as.integer(dat1[, vars[i]])
            names(dat1)[names(dat1) %in% vars[i]] <- nm[i]
          }
         w <- which(is.element(dat1, "."))
         dat1[w] <- NA
         dat1$race_us <- NA
      
         cnm <- c("White", "Black", "Asian", "HI_PI", "AI_AN")
      
        # add up 0's and 1's across variables for each subject
        # if sum =1 only chose one race category, if sum > 1 chose multiple race categories,
        #  if sum = 0, did not choose any of the indicated categories
         dat1$rs <- rowSums(dat1[, cnm], na.rm = TRUE)
      
        # if only one category chosen, assign that category as the race
         s1 <- dat1$rs %in% 1 & !(dat1$No %in% 1)
         ws1 <- which(s1)
         t2 <- dat1[s1, cnm]
         wa <- which(t2 == 1, arr.ind = T)
         dat1$race_us[ws1[wa[, 1]]] <- cnm[wa[, 2]]
      
       # if more than one race category chosen, assign race_us as "Multiple"
         s3 <- dat1$rs > 1 & !(dat1$No %in% 1)
         dat1$race_us[s3] <- "Multiple"
      
         dat1$race_us[dat1$No %in% 1] <- NA
      
         datt <- dat1 %>% filter(!is.na(dat1$race_us)) %>% select(topmed_subject_id, race_us)
      
         return(datt)
      }
      ```
<a id="race_us_1-fhs_omni2"></a>
  * ### demographic/race_us_1 -- **FHS_Omni2**:
    * 17 component_study_variables: `phs000007.v30.pht003094.v5.phv00177238.v3`, `phs000007.v30.pht003094.v5.phv00177597.v3`, `phs000007.v30.pht003094.v5.phv00177598.v3`, `phs000007.v30.pht003094.v5.phv00177599.v3`, `phs000007.v30.pht003094.v5.phv00177600.v3`, `phs000007.v30.pht003094.v5.phv00177601.v3`, `phs000007.v30.pht003094.v5.phv00177602.v3`, `phs000007.v30.pht003094.v5.phv00177603.v3`, `phs000007.v30.pht006006.v2.phv00274194.v2`, `phs000007.v30.pht006006.v2.phv00274557.v2`, `phs000007.v30.pht006006.v2.phv00274558.v2`, `phs000007.v30.pht006006.v2.phv00274559.v2`, `phs000007.v30.pht006006.v2.phv00274560.v2`, `phs000007.v30.pht006006.v2.phv00274561.v2`, `phs000007.v30.pht006006.v2.phv00274562.v2`, `phs000007.v30.pht006006.v2.phv00274563.v2`, `phs000007.v30.pht006006.v2.phv00274564.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
       # harmonize race_us and hispanic_or_latino for FHS Omni2
       # variables are 0/1 (no/yes) for given categories
       # White (Caucasian or White), Hispanic (Spanish/Hispanic/Latino)
       # Black (African-American or Black), Asian, HI_PI (Native Hawaiian or Pacific Islander
       # AI_AN (American Indian or Alaskan Native), Other, No (Prefer not to answer)
       # can choose more than one
      
         source_data <- phen_list$source_data
      
         # visit 1 data
      
          dat1 <- source_data[["pht006006"]]
          dat1 <- dat1[dat1$idtype %in% 72, ]
          vars <- paste0("g3a", 483:490)
      
        #  rename variables; change 0/1 categorical to integer
          nm <- c("White", "Hispanic", "Black", "Asian", "HI_PI", "AI_AN", "Other", "No")
          for (i in 1:length(vars)){
            dat1[, vars[i]] <- as.integer(dat1[, vars[i]])
            names(dat1)[names(dat1) %in% vars[i]] <- nm[i]
          }
         w <- which(is.element(dat1, "."))
         dat1[w] <- NA
         dat1$race_us <- NA
      
        # treat "Hispanic" differently
         cnm <- c("White", "Black", "Asian", "HI_PI", "AI_AN", "Other")
      
        # add up 0's and 1's across variables for each subject
        # if sum =1 only chose one race category, if sum > 1 chose multiple race categories,
        #   if sum = 0, did not choose any of the indicated categories
         dat1$rs <- rowSums(dat1[, cnm], na.rm = TRUE)
      
        # if only one category chosen, assign that category as the race
         s1 <- dat1$rs %in% 1 & !(dat1$No %in% 1)
         ws1 <- which(s1)
         t2 <- dat1[s1, cnm]
         wa <- which(t2 == 1, arr.ind = T)
         dat1$race_us[ws1[wa[, 1]]] <- cnm[wa[, 2]]
      
       # if more than one race category chosen, assign race_us as "Multiple"
         s3 <- dat1$rs > 1 & !(dat1$No %in% 1)
         dat1$race_us[s3] <- "Multiple"
      
       # if Hispanic category chosen with no other race category, assign "Other"
       # person did choose to identify a race
       # ethnicity will be set to 1 (i.e. is Hispanic)
      
         s <- dat1$Hispanic %in% 1 & dat1$rs %in% 0
         dat1$race_us[s] <- "Other"
      
         dat1$race_us[dat1$No %in% 1] <- NA
      
         dat1 <- dat1 %>% filter(!is.na(dat1$race_us)) %>% select(topmed_subject_id, race_us)
      
         # visit 2 data - contains Gen3, NOS, Omni2
         # Hispanic is not race choice but there is question re Hispanic ethnicity;
      #     set race_us to Other if no other race choice
      
          dat2 <- source_data[["pht003094"]]
          dat2 <- dat2[dat2$idtype %in% 72, ] # choose Omni2
          vars <- paste0("g3b0", 625:630)
          nm <- c("White", "Black", "Asian", "HI_PI", "AI_AN", "No")
          for (i in 1:length(vars)){
            dat2[, vars[i]] <- as.integer(dat2[, vars[i]])
            names(dat2)[names(dat2) %in% vars[i]] <- nm[i]
          }
         w <- which(is.element(dat2, "."))
         dat2[w] <- NA
         dat2$race_us <- NA
      
         cnm <- c("White", "Black", "Asian", "HI_PI", "AI_AN")
         dat2$rs <- rowSums(dat2[, cnm], na.rm = TRUE)
      
        # if only one category chosen, assign that category as the race
         s1 <- dat2$rs %in% 1 & !(dat2$No %in% 1)
         ws1 <- which(s1)
         t2 <- dat2[s1, cnm]
         wa <- which(t2 == 1, arr.ind = T)
         dat2$race_us[ws1[wa[, 1]]] <- cnm[wa[, 2]]
      
       # if more than one race category chosen, assign race_us as "Multiple"
         s3 <- dat2$rs > 1 & !(dat2$No %in% 1)
         dat2$race_us[s3] <- "Multiple"
      
        # no other race chosen but indicated Hispanic ethnicity, set race_us to Other
         s <- dat2$g3b0624 %in% 1 & dat2$rs %in% 0
         dat2$race_us[s] <- "Other"
      
         dat2$race_us[dat2$No %in% 1] <- NA
      
         dat2 <- dat2 %>% filter(!is.na(dat2$race_us)) %>% select(topmed_subject_id, race_us)
      
       # check for consistency across visits - if differ, assign race_us as "Multiple"
         dat <- rbind(dat1, dat2)
      
         dat <- dat %>% tbl_df() %>%
             arrange(topmed_subject_id) %>%
              group_by(topmed_subject_id)
      
          # determine number of unique race categories chosen across visits for each subject
         sdat <- dat %>% summarise(ncatr = length(unique(race_us)), ot = is.element("Other", race_us))
      
         # if more than one race category (not including "Other") per subject across visits,
      #     assign race_us = Multiple
         datt <- inner_join(dat, sdat)
         selr <- datt$ncatr > 2
         datt$race_us[selr] <- "Multiple"
      
         so <- datt$ncatr == 2 & datt$ot == FALSE
         datt$race_us[so] <- "Multiple"
      
        # if race chosen as Other and one other race also chosen, assign the more specific race
         se <- datt$ncatr == 2 & datt$ot == TRUE
         sse <- se & datt$race_us %in% "Other"
         datt <- datt[!sse, ]
        # take out the "Other" entry so slice(1) (taking first entry per subject)
        #   will capture the more specific race
      
         datt <- datt %>% filter(!is.na(race_us)) %>% slice(1) %>%
                select(topmed_subject_id, race_us)
      
         return(datt)
      }
      ```
<a id="race_us_1-fhs_original"></a>
  * ### demographic/race_us_1 -- **FHS_Original**:
    * 1 component_study_variables: `phs000007.v30.pht003099.v5.phv00177928.v5`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
       # harmonize race_us for Original cohort
       # Nancy Heard-Costa confirmed can assume White
       # use global information file to get subjects
      
         source_data <- phen_list$source_data
      
          dat <- source_data[["pht003099"]]
          w <- which(is.element(dat, "."))
          dat[w] <- NA
      
          dat <- dat[dat$idtype %in% 0, ]
          dat$race_us <- "White"
      
          datt <- dat %>% select(topmed_subject_id, race_us)
      
         return(datt)
      }
      ```
<a id="race_us_1-galaii"></a>
  * ### demographic/race_us_1 -- **GALAII**:
    * 1 component_study_variables: `phs001180.v1.pht006988.v1.phv00320615.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        dataset <- phen_list$source_data$pht006988 %>%
          # Filter out unconsented individuals.
          filter(!(CONSENT %in% "0") & !is.na(CONSENT)) %>%
          # Create race_us variable
          # Confirmed with study, race_us = Other
          transmute(topmed_subject_id, race_us = "Other")
      
        return(dataset)
      }
      ```
<a id="race_us_1-genestar"></a>
  * ### demographic/race_us_1 -- **GeneSTAR**:
    * 2 component_study_variables: `phs001218.v1.pht007766.v1.phv00369267.v1`, `phs001218.v1.pht007766.v1.phv00369270.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Datasets
        int <- phen_list$source_data$pht007766
        #Order of levels
        int$VISIT <- int$VISIT %>%
                     as.factor() %>%
                     relevel('SSV')
        #Subset to baseline visits, SSV and PSV
        dataset <- int %>%
                   filter(VISIT %in% c('SSV', 'PSV')) %>%
                   mutate(VISIT = as.factor(VISIT)) %>%
                   group_by(topmed_subject_id) %>%
                   arrange(topmed_subject_id, VISIT) %>%
                   filter(row_number(topmed_subject_id) == 1) %>%
                   ungroup() %>%
                   data.frame()
      
        #Assigning race_us categories
        dataset$RACE <- ifelse(dataset$RACE == '1', 'White', 'Black')
      
        #Rename harmonized variable
        dataset <- select(dataset, topmed_subject_id, race_us = RACE)
      
        return(dataset)
      }
      ```
<a id="race_us_1-genoa"></a>
  * ### demographic/race_us_1 -- **GENOA**:
    * 2 component_study_variables: `phs001238.v2.pht006039.v1.phv00277509.v1`, `phs001238.v2.pht006653.v1.phv00307790.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
       # harmonize race_us for GENOA
          source_data <- phen_list$source_data
      
      # values are "African-American", "Hispanic White", "Non-Hispanic White"
      
         dat1 <- source_data[["pht006039"]]   # AA sub-study
         dat2 <- source_data[["pht006653"]]   # EA sub_study
         dat <- rbind(dat1, dat2)
      
      # filter to non-missing values
      # assign Black = African-American, White = either of the other two values
      # select subject id and race_us
         dat <- dat %>% filter(!is.na(RACE)) %>%
                 mutate(race_us = ifelse(RACE %in% "African-American", "Black", "White")) %>%
                 select(topmed_subject_id, race_us)
      
         return(dat)
      }
      ```
<a id="race_us_1-goldn"></a>
  * ### demographic/race_us_1 -- **GOLDN**:
    * 1 component_study_variables: `phs000741.v2.pht003915.v2.phv00202090.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
          source_data <- phen_list$source_data
          dat <- source_data[["pht003915"]]
      
        # GOLDN dbGaP study page says "recruited Caucasian" so set race_us = "White"
        # pull in subject file and eliminate consent=0 subjects
      
         dat <- dat %>% filter(!is.element(consent, 0)) %>%
              mutate(race_us = "White") %>%
              select(topmed_subject_id, race_us)
      
         return(dat)
      }
      ```
<a id="race_us_1-hchs_sol"></a>
  * ### demographic/race_us_1 -- **HCHS_SOL**:
    * 1 component_study_variables: `phs000810.v1.pht004713.v1.phv00226241.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
          source_data <- phen_list$source_data
          dat <- source_data[["pht004713"]]
      
        # All subjects are Hispanic/Latino
        # set race_us to Other and ethnicity to HL
        # will define ethnic_subgroup variable
        # pull in subject file and eliminate consent=0 subjects
      
         dat <- dat %>% filter(!is.element(CONSENT, 0)) %>%
              mutate(race_us = "Other") %>%
              select(topmed_subject_id, race_us)
      
            return(dat)
      }
      ```
<a id="race_us_1-hvh"></a>
  * ### demographic/race_us_1 -- **HVH**:
    * 1 component_study_variables: `phs001013.v3.pht005311.v2.phv00259380.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        dat <- phen_list$source_data$pht005311 %>%
          # Remove rows where race is missing or unknown.
          filter(!is.na(race) & !(race %in% 9)) %>%
          group_by(topmed_subject_id) %>%
          # Collapse race by topmed_subject_id.
          summarize(race = unique(race))
      
        rc <- c("Black", "White", "Asian", "AI_AN", "HI_PI", "Other")
        dat$race <- as.integer(dat$race) + 1
        dat$race <- rc[dat$race]
      
        dat <- select(dat, topmed_subject_id, race_us = race)
        return(dat)
      }
      ```
<a id="race_us_1-jhs"></a>
  * ### demographic/race_us_1 -- **JHS**:
    * 1 component_study_variables: `phs000286.v5.pht001920.v4.phv00124546.v3`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
          source_data <- phen_list$source_data
          dat <- source_data[["pht001920"]]
      
        # confirmed with PI that all subjects are African American so set race_us="Black"
        # pull in subject file and eliminate consent=0 subjects
      
         dat <- dat %>% filter(!is.element(CONSENT, 0)) %>%
              mutate(race_us = "Black") %>%
              select(topmed_subject_id, race_us)
      
         return(dat)
      
      }
      ```
<a id="race_us_1-mayo_vte_geneva"></a>
  * ### demographic/race_us_1 -- **Mayo_VTE_GENEVA**:
    * 6 component_study_variables: `phs000289.v2.pht001886.v2.phv00121876.v2`, `phs000289.v2.pht001886.v2.phv00121877.v2`, `phs000289.v2.pht001886.v2.phv00121878.v2`, `phs000289.v2.pht001886.v2.phv00121879.v2`, `phs000289.v2.pht001886.v2.phv00121880.v2`, `phs000289.v2.pht001886.v2.phv00121881.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
      
      # harmonize race_us for Mayo_VTE
        datt <- phen_list$source_data[["pht001886"]]
      
        rc <- c("race_other", "race_afram", "race_amind", "race_asian", "race_pacisl", "race_white")
       # variables are 1 if category chosen, otherwise 0
      
       # convert to integer
       # change category names to harmonized names
       hnm <- c("Other", "Black", "AI_AN", "Asian", "HI_PI", "White")
        for (i in 1:6){
          datt[, rc[i]] <- as.integer(datt[, rc[i]])
          names(datt)[names(datt) %in% rc[i]] <- hnm[i]
        }
      
       # rowSums in effect counts the number of categories chosen
        datt$rs <- rowSums(datt[, hnm], na.rm = T)
      
        datt$race_us <- NA
       # if rs=0, no categories were chosen; keep race_us as NA
       # if rs=1 then only one category chosen so assign race_us = that category
         s1 <- datt$rs %in% 1
         ws1 <- which(s1)
         t2 <- datt[s1, hnm]
         wa <- which(t2 == 1, arr.ind = TRUE)
       # wa[,1] gives row (subject index), wa[,2] gives column index of column/category chosen
         datt$race_us[ws1[wa[, 1]]] <- hnm[wa[, 2]]
      
       # if rs > 1 multiple categories chosen so assign race_us = "Multiple"
         datt$race_us[datt$rs > 1] <- "Multiple"
      
         datt <- datt %>% filter(!is.na(datt$race_us)) %>% select(topmed_subject_id, race_us)
      
         return(datt)
      }
      ```
<a id="race_us_1-mayo_vte_olmsted"></a>
  * ### demographic/race_us_1 -- **Mayo_VTE_Olmsted**:
    * 6 component_study_variables: `phs001402.v1.pht008239.v1.phv00389932.v1`, `phs001402.v1.pht008239.v1.phv00389933.v1`, `phs001402.v1.pht008239.v1.phv00389934.v1`, `phs001402.v1.pht008239.v1.phv00389935.v1`, `phs001402.v1.pht008239.v1.phv00389936.v1`, `phs001402.v1.pht008239.v1.phv00389937.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        dataset <- phen_list$source_data$pht008239
      
        #Assiging race
        dataset$race_us[dataset$race_white == 1] <- 'White'
        dataset$race_us[dataset$race_other == 1] <- 'Other'
        dataset$race_us[dataset$race_afram == 1] <- 'Black'
        dataset$race_us[dataset$race_amind == 1] <- 'AI_AN'
        dataset$race_us[dataset$race_asian == 1] <- 'Asian'
      
        dataset <- dataset %>%
                   select(topmed_subject_id, race_us) %>%
                   return()
      }
      ```
<a id="race_us_1-mesa_airnr"></a>
  * ### demographic/race_us_1 -- **MESA_AirNR**:
    * 2 component_study_variables: `phs000209.v13.pht001111.v4.phv00082641.v1`, `phs000209.v13.pht003086.v3.phv00174585.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
       # harmonize race_us and hispanic_or_latino for MESA AirNR
       # 1=white; 2=chinese american; 3=black;4=hispanic
      
          source_data <- phen_list$source_data
      
         # visit 1 data
         dat1 <- source_data[["pht001111"]]
      
         # visit 5 data
          dat5 <- source_data[["pht003086"]]
      
         dat <- rbind(dat1, dat5)
      
         dat$race_us <- dat$race1c
         dat$race_us[dat$race_us %in% 1] <- "White"
         dat$race_us[dat$race_us %in% 2] <- "Asian"
         dat$race_us[dat$race_us %in% 3] <- "Black"
         dat$race_us[dat$race_us %in% 4] <- "Other"  # will set ethnicity = HL
      
         dat <- dat %>% filter(!is.na(race_us)) %>% tbl_df() %>%
           arrange(topmed_subject_id) %>%
             group_by(topmed_subject_id)
      
          # determine number of unique race categories chosen across visits for each subject
         sdat <- dat %>% summarise(ncatr = length(unique(race_us)), ot = is.element("Other", race_us))
      
         # if more than one race category (not including "Other") per subject across visits,
         #   assign race_us = Multiple
         datt <- inner_join(dat, sdat)
         selr <- datt$ncatr > 2
         datt$race_us[selr] <- "Multiple"
      
         so <- datt$ncatr == 2 & datt$ot == FALSE
         datt$race_us[so] <- "Multiple"
      
        # if race chosen as Hispanic/Other and one other race also chosen, assign that one other race
         se <- datt$ncatr == 2 & datt$ot == TRUE
         sse <- se & datt$race_us %in% "Other"
         datt <- datt[!sse, ]
        #  take out the "Other" entry so slice(1) (taking first entry per subject)
      #     will capture the more specific race
         datt <- datt %>% filter(!is.na(race_us)) %>% slice(1) %>%
            select(topmed_subject_id, race_us)
      
         return(datt)
      }
      ```
<a id="race_us_1-mesa_classic"></a>
  * ### demographic/race_us_1 -- **MESA_Classic**:
    * 5 component_study_variables: `phs000209.v13.pht001116.v10.phv00084444.v2`, `phs000209.v13.pht001118.v8.phv00085775.v2`, `phs000209.v13.pht001119.v8.phv00086261.v2`, `phs000209.v13.pht001120.v10.phv00086729.v2`, `phs000209.v13.pht003091.v3.phv00176008.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
       # harmonize race_us and hispanic_or_latino for MESA Classic
       # 1=white; 2=chinese american; 3=black;4=hispanic
      
         source_data <- phen_list$source_data
      
         # visit 1 data
          dat1 <- source_data[["pht001116"]]
      
         # visit 2 data
          dat2 <- source_data[["pht001118"]]
      
         # visit 3 data
          dat3 <- source_data[["pht001119"]]
      
         # visit 4 data
         dat4 <- source_data[["pht001120"]]
      
         # visit 5 data
          dat5 <- source_data[["pht003091"]]
      
         dat0 <- rbind(dat1, dat2, dat3, dat4, dat5)
      
         dat0$race_us <- dat0$race1c
         dat0$race_us[dat0$race_us %in% 1] <- "White"
         dat0$race_us[dat0$race_us %in% 2] <- "Asian"
         dat0$race_us[dat0$race_us %in% 3] <- "Black"
         dat0$race_us[dat0$race_us %in% 4] <- "Other"   # will set ethnicity = "HL"
      
         dat0 <- dat0 %>% tbl_df()  %>%
             arrange(topmed_subject_id) %>%
              group_by(topmed_subject_id)
      
         dat <- dat0 %>% filter(!is.na(race_us))
      
          # determine number of unique race categories chosen across visits for each subject
         sdat <- dat %>% summarise(ncatr = length(unique(race_us)), ot = is.element("Other", race_us))
      
         # if more than one race category (not including "Other") per subject across visits,
      #      assign race = Multiple
         datt <- inner_join(dat, sdat)
         selr <- datt$ncatr > 2
         datt$race_us[selr] <- "Multiple"
      
         so <- datt$ncatr == 2 & datt$ot == FALSE
         datt$race_us[so] <- "Multiple"
      
        # if race chosen as Hispanic and one other race also chosen, assign the more specific race
         se <- datt$ncatr == 2 & datt$ot == TRUE
         sse <- se & datt$race_us %in% "Other"
         datt <- datt[!sse, ]
        # take out the "Other" entry so slice(1) (taking first entry per subject)
      #    will capture the more specific race
      
         datt <- datt %>% filter(!is.na(race_us)) %>% slice(1) %>%
                select(topmed_subject_id, race_us)
      
         return(datt)
      }
      ```
<a id="race_us_1-mesa_family"></a>
  * ### demographic/race_us_1 -- **MESA_Family**:
    * 1 component_study_variables: `phs000209.v13.pht001121.v3.phv00087074.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
       # harmonize race_us and hispanic_or_latino for MESA Family
       # 1=white; 2=chinese american; 3=black;4=hispanic
      
          source_data <- phen_list$source_data
      
         # visit 1 data
          dat <- source_data[["pht001121"]]
      
         dat$race_us <- dat$racefc
         dat$race_us[dat$race_us %in% 1] <- "White"
         dat$race_us[dat$race_us %in% 2] <- "Asian"
         dat$race_us[dat$race_us %in% 3] <- "Black"
         dat$race_us[dat$race_us %in% 4] <- "Other"  # will set ethnicity = HL
      
         datt <- dat %>% filter(!is.na(race_us)) %>%
                select(topmed_subject_id, race_us)
      
         return(datt)
      }
      ```
<a id="race_us_1-mgh_af"></a>
  * ### demographic/race_us_1 -- **MGH_AF**:
    * 1 component_study_variables: `phs001001.v1.pht005655.v1.phv00265713.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
      
        library(dplyr)
      
        dataset <- phen_list$source_data$pht005655
      
        dataset$race_cat <- ifelse(dataset$race == 'african_american', 'Black',
          ifelse(dataset$race == 'asian', 'Asian',
            ifelse(dataset$race == 'white', 'White',
              ifelse(dataset$race == 'american_indian', 'AI_AN',
                ifelse(dataset$race == 'other', 'Other',
                  ifelse(dataset$race == 'american_indian_black', 'Multiple',
                    ifelse(dataset$race == 'pacific_islanders', 'HI_PI', NA)))))))
      
        dataset <- select(dataset, topmed_subject_id, race_us = race_cat)
      
        return(dataset)
      }
      ```
<a id="race_us_1-partners"></a>
  * ### demographic/race_us_1 -- **Partners**:
    * 1 component_study_variables: `phs001024.v3.pht005693.v1.phv00265980.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Dataset
        dataset <- phen_list$source_data$pht005693
      
        #Race categories
        dataset$race_cat <- ifelse(dataset$race == 'white', 'White',
                                   ifelse(dataset$race == 'black', 'Black',
                                          ifelse(dataset$race == 'asian', 'Asian',
                                                 ifelse(dataset$race == 'hispanic', 'Other',
                                                        ifelse(dataset$race == 'other', 'Other', NA)))))
      
        #Variable selection and remove missing
        dataset <- select(dataset, topmed_subject_id, race_us = race_cat) %>%
                   na.omit()
      
        return(dataset)
      }
      ```
<a id="race_us_1-sage"></a>
  * ### demographic/race_us_1 -- **SAGE**:
    * 1 component_study_variables: `phs000921.v3.pht004883.v3.phv00252285.v3`
    * Function:
      ```r
      harmonize <- function(phen_list) {
        #Dataset
        dataset <- phen_list$source_data$pht004883 %>%
                   rename(race_us = RACE)
      
        #Relevel variable
        dataset$race_us <- as.factor(dataset$race_us)
        levels(dataset$race_us) <- c('Black', 'Multiple', 'Multiple', 'Multiple', 'Multiple', 'Multiple')
      
        return(dataset)
      }
      ```
<a id="race_us_1-vafar"></a>
  * ### demographic/race_us_1 -- **VAFAR**:
    * 1 component_study_variables: `phs000997.v3.pht005688.v3.phv00265924.v3`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset.
        dataset <- phen_list$source_data$pht005688 %>%
                   rename(race_us = race)
      
        # Substitute encoded race values.
        dataset$race_us[dataset$race_us %in% 'white'] <- 'White'
      
        # Substitute the value of 'NA' to missing.
        dataset$race_us[dataset$race_us %in% 'NA'] <- NA
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="race_us_1-vu_af"></a>
  * ### demographic/race_us_1 -- **VU_AF**:
    * 1 component_study_variables: `phs001032.v4.pht005675.v3.phv00265808.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset.
        dataset <- phen_list$source_data$pht005675 %>%
                   rename(race_us = race)
      
        # Substitute encoded race values.
        dataset$race_us[dataset$race_us %in% 'white'] <- 'White'
        dataset$race_us[dataset$race_us %in% 'black'] <- 'Black'
        dataset$race_us[dataset$race_us %in% 'asian'] <- 'Asian'
        dataset$race_us[dataset$race_us %in% 'native_american'] <- 'AI_AN'
      
        # Substitute the value of 'NA' to missing.
        dataset$race_us[dataset$race_us %in% 'NA'] <- NA
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="race_us_1-wghs"></a>
  * ### demographic/race_us_1 -- **WGHS**:
    * 1 component_study_variables: `phs001040.v3.pht005682.v3.phv00328556.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
      
        #Dataset and rename race variable
        dataset <- phen_list$source_data$pht005682 %>%
                   rename(race_us = race)
      
        #Rename variable category
        dataset$race_us <- 'White'
      
        return(dataset)
      }
      ```
<a id="race_us_1-whi"></a>
  * ### demographic/race_us_1 -- **WHI**:
    * 16 component_study_variables: `phs000200.v11.pht000998.v6.phv00078450.v6`, `phs000200.v11.pht001009.v6.phv00079317.v6`, `phs000200.v11.pht001009.v6.phv00079318.v6`, `phs000200.v11.pht001009.v6.phv00079319.v6`, `phs000200.v11.pht001009.v6.phv00079320.v6`, `phs000200.v11.pht001009.v6.phv00079321.v6`, `phs000200.v11.pht001009.v6.phv00079322.v6`, `phs000200.v11.pht001009.v6.phv00079323.v6`, `phs000200.v11.pht001009.v6.phv00079324.v6`, `phs000200.v11.pht001009.v6.phv00079325.v6`, `phs000200.v11.pht001009.v6.phv00079326.v6`, `phs000200.v11.pht001009.v6.phv00079327.v6`, `phs000200.v11.pht001009.v6.phv00079328.v6`, `phs000200.v11.pht001009.v6.phv00079329.v6`, `phs000200.v11.pht001009.v6.phv00079330.v6`, `phs000200.v11.pht001009.v6.phv00079331.v6`
    * Function:
      ```r
      harmonize <- function(phen_list){
          library(dplyr)
          library(magrittr)
      
       # harmonize race_us for WHI
       # From WHI study investigator: Form 2 takes precedence, Form 41 can be used for more specificity
       #  Form 2 Asian or Pacific Islander category:
       #    can use Form 41 to identify Pacific Islander, assign rest Asian
       # all subjects were present for Form 2
      
          source_data <- phen_list$source_data
      
       ## baseline Form 2
       # 1=American Indian or Alaskan Native; 2=Asian or Pacific Islander; 3=Black or African American;
       # 4=Hispanic/Latino; 5=White (not of Hispanic origin); 8 = Other
      
         dat1 <- source_data[["pht000998"]]
      
         dat1$RACE[dat1$RACE %in% 8] <- 6
         dat1$RACE <- as.integer(dat1$RACE)
         rc <- c("AI_AN", "AsPacIsl", "Black", "Hispanic", "White", "Other")
         dat1$RACE <- rc[dat1$RACE]
      
       ## additional race information Form 41
       # variable SPANISH: 0 = not Hispanic, 1 = Puerto Rican, 2 = Mexican/MexicanAmerican, Chicano
       #  3 = Cuban, 4 = Other Hispanic
       # SPANISH: use for ethnicity and ethnic_subgroup variables
       # other variables are 0/1 for No/Yes for a given race category
      
         dat2 <- source_data[["pht001009"]]
      
        asian <- c("CHINESE", "JAPANESE", "KOREAN", "ASIAINDIAN", "OTHERASIAN", "VIETNAMESE", "FILIPINO")
        pacisl <- c("GUAMANIAN", "HAWAIIAN", "OTHRPACISL", "SAMOAN")
        rest <- c("WHITE", "BLACK", "AMERINDIAN", "OTHERRACE")
        rest2 <- c("White", "Black", "AI_AN", "Other")
        for (i in 1:length(rest)){
             names(dat2)[names(dat2) %in% rest[i]] <- rest2[i]
        }
      
        asel1 <- FALSE
        asel0 <- TRUE
        for (i in 1:length(asian)){
          asel1 <- asel1 | dat2[, asian[i]] %in% 1
          asel0 <- asel0 & dat2[, asian[i]] %in% 0
        }
        dat2$asian <- NA
        dat2$asian[asel1] <- 1
        dat2$asian[asel0] <- 0
      
        asel1 <- FALSE
        asel0 <- TRUE
        for (i in 1:length(pacisl)){
          asel1 <- asel1 | dat2[, pacisl[i]] %in% 1
          asel0 <- asel0 & dat2[, pacisl[i]] %in% 0
        }
        dat2$pacisl <- NA
        dat2$pacisl[asel1] <- 1
        dat2$pacisl[asel0] <- 0
      
        cnm <- c(rest2, "asian", "pacisl")
        for (cn in cnm){
          dat2[, cn] <- as.integer(dat2[, cn])
        }
      
        dat2$rs <- rowSums(dat2[, cnm], na.rm = TRUE)
      
        dat2$race2 <- NA
      
       # if only one category chosen, assign that category as the race
         s1 <- dat2$rs %in% 1
         ws1 <- which(s1)
         t2 <- dat2[s1, cnm]
         wa <- which(t2 == 1, arr.ind = TRUE)
         dat2$race2[ws1[wa[, 1]]] <- cnm[wa[, 2]]
      
         dat2$race2[dat2$race2 %in% "asian"] <- "Asian"
         dat2$race2[dat2$race2 %in% "pacisl"] <- "HI_PI"
      
         dat3 <- dat2 %>% select(topmed_subject_id, race2)
      
       ## combine to assess more specificity
       ## Form 2 takes precedence even if inconsistency
      
         datt <- full_join(dat1, dat3)
      
         datt$race_us <- NA
      
       #--- AsPacIsl: assign Asian unless there is more specific information
      #   to determine Hawaiian or Pacific Islander---
         x <- datt$RACE %in% "AsPacIsl"
      
         ps <- datt$race2 %in% "HI_PI"
         sel <- x & ps
         datt$race_us[sel] <- "HI_PI"
      
         n <- x & !sel
         datt$race_us[n] <- "Asian"
      
       #--- Hispanic ---
         x <- datt$RACE %in% "Hispanic"
        datt$race_us[x] <- datt$race2[x]
      
        s3 <- x & is.na(datt$race2)
        datt$race_us[s3] <- "Other"
      
       #--- Other ---
        x <- datt$RACE %in% "Other"
        s1 <- x & !is.na(datt$race2)
        datt$race_us[s1] <- datt$race2[s1]
        s2 <- x & is.na(datt$race2)
        datt$race_us[s2] <- "Other"
      
       #--- White ---
        x <- datt$RACE %in% "White"
        datt$race_us[x] <- "White"
      
       #--- Black ---
        x <- datt$RACE %in% "Black"
        datt$race_us[x] <- "Black"
      
       #--- AI_AN ---
        x <- datt$RACE %in% "AI_AN"
        datt$race_us[x] <- "AI_AN"
      
       #--- Unspecified ---
        x <- is.na(datt$RACE)
        datt$race_us[x] <- datt$race2[x]
      
        datt <- datt %>% filter(!is.na(race_us)) %>% select(topmed_subject_id, race_us)
      
        return(datt)
      }
      ```
<a id="subcohort_1"></a>
## demographic: **subcohort_1** (subcohort)
  A distinct subgroup within a study, generally indicating subjects who share similar characteristics due to study design. Subjects may belong to only one subcohort.
  * **Harmonization Units**:
    * [Amish](#subcohort_1-amish)
    * [ARIC](#subcohort_1-aric)
    * [BAGS](#subcohort_1-bags)
    * [CARDIA](#subcohort_1-cardia)
    * [CCAF](#subcohort_1-ccaf)
    * [CFS](#subcohort_1-cfs)
    * [CHS](#subcohort_1-chs)
    * [COPDGene](#subcohort_1-copdgene)
    * [CRA](#subcohort_1-cra)
    * [DHS](#subcohort_1-dhs)
    * [FHS](#subcohort_1-fhs)
    * [GALAII](#subcohort_1-galaii)
    * [GeneSTAR](#subcohort_1-genestar)
    * [GENOA_AfricanAmerican](#subcohort_1-genoa_africanamerican)
    * [GENOA_EuropeanAmerican](#subcohort_1-genoa_europeanamerican)
    * [GOLDN](#subcohort_1-goldn)
    * [HCHS_SOL](#subcohort_1-hchs_sol)
    * [HVH](#subcohort_1-hvh)
    * [JHS](#subcohort_1-jhs)
    * [Mayo_VTE_GENEVA](#subcohort_1-mayo_vte_geneva)
    * [Mayo_VTE_Olmsted](#subcohort_1-mayo_vte_olmsted)
    * [MESA_airnr](#subcohort_1-mesa_airnr)
    * [MESA_classic](#subcohort_1-mesa_classic)
    * [MESA_family](#subcohort_1-mesa_family)
    * [MGH_AF](#subcohort_1-mgh_af)
    * [Partners](#subcohort_1-partners)
    * [SAGE](#subcohort_1-sage)
    * [SAS](#subcohort_1-sas)
    * [VAFAR](#subcohort_1-vafar)
    * [VU_AF](#subcohort_1-vu_af)
    * [WGHS](#subcohort_1-wghs)
    * [WHI](#subcohort_1-whi)
  * **Metadata**:
    **`Data Type`**: encoded, **`Measurement Units`**: None, **`Version`**: 2, **`Has Age Variable`**: No, **`Date Harmonized`**: 2019-10-29 10:25:04
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2018AB, `ID:` C0599755
  * **DCC Harmonization Comments**:

    The concept of "cohort" or "subcohort" varies among studies and its meaning is highly dependent on study design. This is intended to be a general-purpose variable, and analysts should consult study documentation before using this variable in analysis.
    
    If available, we recoded component study variables indicating subcohort membership. In instances where there was no variable indicating subcohort membership, we assigned the corresponding harmonized subcohort codes to the set of subject IDs included in subcohort-specific datasets. All consented subjects in studies with no subcohort structure were assigned a code of the form "`TOPMed_abbreviation_NoSubcohortStructure`" (e.g. "`JHS_NoSubcohortStructure`").
    
<a id="subcohort_1-amish"></a>
  * ### demographic/subcohort_1 -- **Amish**:
    * 1 component_study_variables: `phs000956.v3.pht005002.v1.phv00252974.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        dat <- phen_list$source_data[["pht005002"]]
        # Specify subcohort codes.
        cht <- c("HAPI", "Longevity", "Wellness")
        # Convert variable to integer.
        dat$baseline_study <- as.integer(dat$baseline_study)
        # Create new variable with new codes.
        dat$subcohort <- paste0("Amish_", cht[dat$baseline_study])
        # Select only ID and new subcohort variable.
        dat <- select(dat, topmed_subject_id, subcohort)
        return(dat)
      }
      ```
<a id="subcohort_1-aric"></a>
  * ### demographic/subcohort_1 -- **ARIC**:
    * 1 component_study_variables: `phs000280.v5.pht001440.v5.phv00098580.v4`
    * Function:
      ```r
      harmonize <- function(phen_list){
        dat <- phen_list$source_data$pht001440 %>%
          # Filter out unconsented individuals.
          filter(!(CONSENT %in% "0") & !is.na(CONSENT)) %>%
          # Create subcohort variable.
          transmute(topmed_subject_id, subcohort = "ARIC_NoSubcohortStructure")
        return(dat)
      }
      ```
<a id="subcohort_1-bags"></a>
  * ### demographic/subcohort_1 -- **BAGS**:
    * 1 component_study_variables: `phs001143.v2.pht005902.v1.phv00273200.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        dataset <- phen_list$source_data$pht005902 %>%
          # Filter out unconsented individuals.
          filter(!(CONSENT %in% "0") & !is.na(CONSENT)) %>%
          # Create subcohort variable.
          transmute(topmed_subject_id, subcohort = "BAGS_NoSubcohortStructure")
      
        return(dataset)
      }
      ```
<a id="subcohort_1-cardia"></a>
  * ### demographic/subcohort_1 -- **CARDIA**:
    * 1 component_study_variables: `phs000285.v3.pht001554.v3.phv00112395.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        dat <- phen_list$source_data$pht001554 %>%
          # Filter out unconsented individuals.
          filter(!(Consent %in% "0") & !is.na(Consent)) %>%
          # Create subcohort variable.
          transmute(topmed_subject_id, subcohort = "CARDIA_NoSubcohortStructure")
        return(dat)
      }
      ```
<a id="subcohort_1-ccaf"></a>
  * ### demographic/subcohort_1 -- **CCAF**:
    * 1 component_study_variables: `phs001189.v2.pht005977.v2.phv00273537.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset.
        dataset <- phen_list$source_data$pht005977
      
        # Filter for consented subjects.
        dataset <- filter(dataset, CONSENT == '1')
      
        # Create subcohort variable.
        dataset$subcohort <- 'CCAF_NoSubcohortStructure'
      
        # Select variables to return.
        dataset <- select(dataset, topmed_subject_id, subcohort)
      
        return(dataset)
      }
      ```
<a id="subcohort_1-cfs"></a>
  * ### demographic/subcohort_1 -- **CFS**:
    * 2 component_study_variables: `phs000284.v2.pht001899.v2.phv00122002.v2`, `phs000284.v2.pht001902.v1.phv00122012.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        dat <- phen_list$source_data$pht001899 %>%
          # Filter out unconsented individuals.
          filter(!(CONSENT %in% "0") & !is.na(CONSENT)) %>%
          # Create subcohort variable.
          transmute(topmed_subject_id, subcohort = "CFS_NoSubcohortStructure")
        return(dat)
      }
      ```
<a id="subcohort_1-chs"></a>
  * ### demographic/subcohort_1 -- **CHS**:
    * 1 component_study_variables: `phs000287.v6.pht001452.v1.phv00100290.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        # Rename subcohort variable.
        harmonized <- dplyr::rename(phen_list$source_data$pht001452, subcohort = PERSTAT)
        # Get index of Original cohort.
        ind_old <- harmonized$subcohort == "1"
        # Specify new key.
        harmonized[ind_old, "subcohort"] <- "CHS_Original"
        # Get index of African-American cohort.
        ind_new <- harmonized$subcohort == "2"
        # Specify new key.
        harmonized[ind_new, "subcohort"] <- "CHS_AfricanAmerican"
        return(harmonized)
      }
      ```
<a id="subcohort_1-copdgene"></a>
  * ### demographic/subcohort_1 -- **COPDGene**:
    * 1 component_study_variables: `phs000179.v5.pht002237.v3.phv00159560.v3`
    * Function:
      ```r
      harmonize <- function(phen_list){
        dat <- phen_list$source_data$pht002237 %>%
          # Filter out unconsented individuals.
          filter(!(CONSENT %in% "0") & !is.na(CONSENT)) %>%
          # Create subcohort variable.
          transmute(topmed_subject_id, subcohort = "COPDGene_NoSubcohortStructure")
        return(dat)
      }
      ```
<a id="subcohort_1-cra"></a>
  * ### demographic/subcohort_1 -- **CRA**:
    * 1 component_study_variables: `phs000988.v2.pht005245.v2.phv00258637.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        dat <- phen_list$source_data$pht005245 %>%
          # Filter out unconsented individuals.
          filter(!(CONSENT %in% "0") & !is.na(CONSENT)) %>%
          # Create subcohort variable.
          transmute(topmed_subject_id, subcohort = "CRA_NoSubcohortStructure")
        return(dat)
      }
      ```
<a id="subcohort_1-dhs"></a>
  * ### demographic/subcohort_1 -- **DHS**:
    * 1 component_study_variables: `phs001412.v1.pht006743.v1.phv00310005.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Dataset
        dataset <- phen_list$source_data$pht006743 %>%
        #Removing consent group 0
                   filter(!(CONSENT == 0))
        #Assigning cohort structure
        dataset$subcohort <- "DHS_NoSubcohortStructure"
        #Selecting final variables
        dataset <- dataset %>%
                   select(topmed_subject_id, subcohort) %>%
                   return()
      }
      ```
<a id="subcohort_1-fhs"></a>
  * ### demographic/subcohort_1 -- **FHS**:
    * 1 component_study_variables: `phs000007.v30.pht003099.v5.phv00177928.v5`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        dat <- phen_list$source_data[["pht003099"]]
        # Create empty subcohort variable.
        dat$subcohort <- NA
        # Map codes to new subcohort variable.
        dat$subcohort[dat$idtype == "0"] <- "FHS_Original"
        dat$subcohort[dat$idtype == "1"] <- "FHS_Offspring"
        dat$subcohort[dat$idtype == "2"] <- "FHS_NewOffspringSpouse"
        dat$subcohort[dat$idtype == "3"] <- "FHS_Gen3"
        dat$subcohort[dat$idtype == "7"] <- "FHS_Omni1"
        dat$subcohort[dat$idtype == "72"] <- "FHS_Omni2"
        # Select only ID and new subcohort variable.
        dat <- select(dat, topmed_subject_id, subcohort)
        return(dat)
      }
      ```
<a id="subcohort_1-galaii"></a>
  * ### demographic/subcohort_1 -- **GALAII**:
    * 1 component_study_variables: `phs001180.v1.pht006988.v1.phv00320615.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        dataset <- phen_list$source_data$pht006988 %>%
          # Filter out unconsented individuals.
          filter(!(CONSENT %in% "0") & !is.na(CONSENT)) %>%
          # Create subcohort variable.
          transmute(topmed_subject_id, subcohort = "GALAII_NoSubcohortStructure")
      
        return(dataset)
      }
      ```
<a id="subcohort_1-genestar"></a>
  * ### demographic/subcohort_1 -- **GeneSTAR**:
    * 1 component_study_variables: `phs001218.v1.pht007766.v1.phv00369267.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Datasets
        int <- phen_list$source_data$pht007766
        #Order of levels
        int$VISIT <- int$VISIT %>%
                     as.factor() %>%
                     relevel('SSV')
        #Subset to baseline visits, SSV and PSV
        dataset <- int %>%
                   filter(VISIT %in% c('SSV', 'PSV')) %>%
                   mutate(VISIT = as.factor(VISIT)) %>%
                   group_by(topmed_subject_id) %>%
                   arrange(topmed_subject_id, VISIT) %>%
                   filter(row_number(topmed_subject_id) == 1) %>%
                   ungroup() %>%
                   data.frame()
      
        #Assigning values
        dataset$subcohort <- ifelse(dataset$VISIT == 'SSV',
                                    'GeneSTAR_Sibling',
                                    'GeneSTAR_CoparentOffspring')
      
        #Select variables and remove missing
        dataset <- select(dataset, topmed_subject_id, subcohort)
      
        return(dataset)
      }
      ```
<a id="subcohort_1-genoa_africanamerican"></a>
  * ### demographic/subcohort_1 -- **GENOA_AfricanAmerican**:
    * 1 component_study_variables: `phs001238.v2.pht006039.v1.phv00277508.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        pht6039 <- phen_list$source_data$pht006039 %>%
          # Select ID variable and code all subjects as AA.
          transmute(topmed_subject_id, subcohort = "GENOA_AfricanAmerican")
        return(pht6039)
      }
      ```
<a id="subcohort_1-genoa_europeanamerican"></a>
  * ### demographic/subcohort_1 -- **GENOA_EuropeanAmerican**:
    * 3 component_study_variables: `phs001238.v2.pht006649.v1.phv00307741.v1`, `phs001238.v2.pht006653.v1.phv00307789.v1`, `phs001238.v2.pht006659.v1.phv00307950.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(magrittr)
        # Get IDs from each dataset.
        ids <- sapply(phen_list$source_data, extract2, "topmed_subject_id") %>%
          # Unlist IDs into vector.
          unlist() %>%
          # Remove duplicate values.
          unique()
        # Create harmonized dataframe and add subcohort.
        harmonized <- data.frame(topmed_subject_id = ids, subcohort = "GENOA_EuropeanAmerican")
        return(harmonized)
      }
      ```
<a id="subcohort_1-goldn"></a>
  * ### demographic/subcohort_1 -- **GOLDN**:
    * 1 component_study_variables: `phs000741.v2.pht003915.v2.phv00202090.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        dat <- phen_list$source_data$pht003915 %>%
          # Filter out unconsented individuals.
          filter(!(consent %in% "0") & !is.na(consent)) %>%
          # Create subcohort variable.
          transmute(topmed_subject_id, subcohort = "GOLDN_NoSubcohortStructure")
        return(dat)
      }
      ```
<a id="subcohort_1-hchs_sol"></a>
  * ### demographic/subcohort_1 -- **HCHS_SOL**:
    * 1 component_study_variables: `phs000810.v1.pht004713.v1.phv00226241.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        dat <- phen_list$source_data$pht004713 %>%
          # Filter out unconsented individuals.
          filter(!(CONSENT %in% "0") & !is.na(CONSENT)) %>%
          # Create subcohort variable.
          transmute(topmed_subject_id, subcohort = "HCHS_SOL_NoSubcohortStructure")
        return(dat)
      }
      ```
<a id="subcohort_1-hvh"></a>
  * ### demographic/subcohort_1 -- **HVH**:
    * 3 component_study_variables: `phs001013.v3.pht005309.v3.phv00259370.v3`, `phs001013.v3.pht005311.v2.phv00259376.v2`, `phs001013.v3.pht005311.v2.phv00259377.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        dat <- phen_list$source_data$pht005309 %>%
          # Filter out unconsented individuals.
          filter(!(CONSENT %in% "0") & !is.na(CONSENT)) %>%
          # Create subcohort variable.
          transmute(topmed_subject_id, subcohort = "HVH_NoSubcohortStructure")
        return(dat)
      }
      ```
<a id="subcohort_1-jhs"></a>
  * ### demographic/subcohort_1 -- **JHS**:
    * 1 component_study_variables: `phs000286.v5.pht001920.v4.phv00124546.v3`
    * Function:
      ```r
      harmonize <- function(phen_list){
        dat <- phen_list$source_data$pht001920 %>%
          # Filter out unconsented individuals.
          filter(!(CONSENT %in% "0") & !is.na(CONSENT)) %>%
          # Create subcohort variable.
          transmute(topmed_subject_id, subcohort = "JHS_NoSubcohortStructure")
        return(dat)
      }
      ```
<a id="subcohort_1-mayo_vte_geneva"></a>
  * ### demographic/subcohort_1 -- **Mayo_VTE_GENEVA**:
    * 1 component_study_variables: `phs000289.v2.pht001883.v1.phv00121830.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        dat <- phen_list$source_data$pht001883 %>%
          # Filter out unconsented individuals.
          filter(!(CONSENT %in% "0") & !is.na(CONSENT)) %>%
          # Create subcohort variable.
          transmute(topmed_subject_id, subcohort = "Mayo_VTE_GENEVA")
        return(dat)
      }
      ```
<a id="subcohort_1-mayo_vte_olmsted"></a>
  * ### demographic/subcohort_1 -- **Mayo_VTE_Olmsted**:
    * 1 component_study_variables: `phs001402.v1.pht008239.v1.phv00389900.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        dataset <- phen_list$source_data$pht008239 %>%
                   transmute(topmed_subject_id, subcohort = "Mayo_VTE_Olmsted")
      
        return(dataset)
      }
      ```
<a id="subcohort_1-mesa_airnr"></a>
  * ### demographic/subcohort_1 -- **MESA_airnr**:
    * 1 component_study_variables: `phs000209.v13.pht001111.v4.phv00082644.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        # Code subcohort as AirNR for all observations in dataframe.
        harmonized <- transmute(phen_list$source_data$pht001111, topmed_subject_id,
                                subcohort = "MESA_AirNR")
        return(harmonized)
      }
      ```
<a id="subcohort_1-mesa_classic"></a>
  * ### demographic/subcohort_1 -- **MESA_classic**:
    * 1 component_study_variables: `phs000209.v13.pht001116.v10.phv00084447.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        # Code subcohort as Classic for all observations in dataframe.
        harmonized <- transmute(phen_list$source_data$pht001116, topmed_subject_id,
                                subcohort = "MESA_Classic")
        return(harmonized)
      }
      ```
<a id="subcohort_1-mesa_family"></a>
  * ### demographic/subcohort_1 -- **MESA_family**:
    * 1 component_study_variables: `phs000209.v13.pht001121.v3.phv00087075.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        # Code subcohort as Family for all observations in dataframe.
        harmonized <- transmute(phen_list$source_data$pht001121, topmed_subject_id,
                                subcohort = "MESA_Family")
        return(harmonized)
      }
      ```
<a id="subcohort_1-mgh_af"></a>
  * ### demographic/subcohort_1 -- **MGH_AF**:
    * 1 component_study_variables: `phs001001.v1.pht005653.v1.phv00265704.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        dataset <- phen_list$source_data$pht005653 %>%
          # Filter out unconsented individuals.
          filter(!(CONSENT %in% "0") & !is.na(CONSENT)) %>%
          # Create subcohort variable.
          transmute(topmed_subject_id, subcohort = "MGH_AF_NoSubcohortStructure")
      
        return(dataset)
      }
      ```
<a id="subcohort_1-partners"></a>
  * ### demographic/subcohort_1 -- **Partners**:
    * 1 component_study_variables: `phs001024.v3.pht005116.v2.phv00253774.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        dataset <- phen_list$source_data$pht005116
        # Create subcohort variable.
        dataset$subcohort <- 'Partners_NoSubcohortStructure'
      
        dataset <- select(dataset, topmed_subject_id, subcohort)
        return(dataset)
      }
      ```
<a id="subcohort_1-sage"></a>
  * ### demographic/subcohort_1 -- **SAGE**:
    * 1 component_study_variables: `phs000921.v3.pht004881.v3.phv00252275.v3`
    * Function:
      ```r
      harmonize <- function(phen_list){
        dataset <- phen_list$source_data$pht004881
        # Create subcohort variable.
        dataset$subcohort <- "SAGE_NoSubcohortStructure"
      
        dataset <- select(dataset, topmed_subject_id, subcohort)
        return(dataset)
      }
      ```
<a id="subcohort_1-sas"></a>
  * ### demographic/subcohort_1 -- **SAS**:
    * 1 component_study_variables: `phs000914.v1.pht005251.v1.phv00258664.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        dat <- phen_list$source_data$pht005251 %>%
          # Filter out unconsented individuals.
          filter(!(CONSENT %in% "0") & !is.na(CONSENT)) %>%
          # Create subcohort variable.
          transmute(topmed_subject_id, subcohort = "SAS_NoSubcohortStructure")
        return(dat)
      }
      ```
<a id="subcohort_1-vafar"></a>
  * ### demographic/subcohort_1 -- **VAFAR**:
    * 1 component_study_variables: `phs000997.v3.pht005087.v3.phv00253604.v3`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset.
        dataset <- phen_list$source_data$pht005087
      
        # Filter for consented subjects.
        dataset <- filter(dataset, CONSENT == '1')
      
        # Create subcohort variable.
        dataset$subcohort <- 'VAFAR_NoSubcohortStructure'
      
        # Select variables to return.
        dataset <- select(dataset, topmed_subject_id, subcohort)
      
        return(dataset)
      }
      ```
<a id="subcohort_1-vu_af"></a>
  * ### demographic/subcohort_1 -- **VU_AF**:
    * 1 component_study_variables: `phs001032.v4.pht005098.v2.phv00253678.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset.
        dataset <- phen_list$source_data$pht005098
      
        # Filter for consented subjects.
        dataset <- filter(dataset, CONSENT == '1')
      
        # Create subcohort variable.
        dataset$subcohort <- 'VU_AF_NoSubcohortStructure'
      
        # Select variables to return.
        dataset <- select(dataset, topmed_subject_id, subcohort)
      
        return(dataset)
      }
      ```
<a id="subcohort_1-wghs"></a>
  * ### demographic/subcohort_1 -- **WGHS**:
    * 1 component_study_variables: `phs001040.v3.pht005203.v2.phv00258321.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Dataset
        dataset <- phen_list$source_data$pht005203 %>%
        #subcohort variable
        transmute(topmed_subject_id, subcohort = "WGHS_NoSubcohortStructure")
      
        return(dataset)
      }
      ```
<a id="subcohort_1-whi"></a>
  * ### demographic/subcohort_1 -- **WHI**:
    * 2 component_study_variables: `phs000200.v11.pht001031.v6.phv00080424.v6`, `phs000200.v11.pht001031.v6.phv00080425.v6`
    * Function:
      ```r
      harmonize <- function(phen_list){
        dat <- phen_list$source_data[["pht001031"]] %>%
          # Select ID and create new variable.
          transmute(topmed_subject_id, subcohort = ifelse(
            # Code CT cohort.
            CTFLAG %in% 1, "WHI_ClinicalTrial",
            # Code OS cohort.
            ifelse(OSFLAG %in% 1, "WHI_ObservationalStudy",
            # Specify NA for any remaining.
            NA
          )))
      }
      ```