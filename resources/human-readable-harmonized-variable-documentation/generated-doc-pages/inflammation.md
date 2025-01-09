
# inflammation

### Variables in this section:
* [cd40_1](#cd40_1)
* [crp_1](#crp_1)
* [eselectin_1](#eselectin_1)
* [icam1_1](#icam1_1)
* [il10_1](#il10_1)
* [il18_1](#il18_1)
* [il1_beta_1](#il1_beta_1)
* [il6_1](#il6_1)
* [isoprostane_8_epi_pgf2a_1](#isoprostane_8_epi_pgf2a_1)
* [lppla2_act_1](#lppla2_act_1)
* [lppla2_mass_1](#lppla2_mass_1)
* [mcp1_1](#mcp1_1)
* [mmp9_1](#mmp9_1)
* [mpo_1](#mpo_1)
* [opg_1](#opg_1)
* [pselectin_1](#pselectin_1)
* [tnfa_1](#tnfa_1)
* [tnfa_r1_1](#tnfa_r1_1)
* [tnfr2_1](#tnfr2_1)

<a id="cd40_1"></a>
## inflammation: **cd40_1** (cd40)
  Cluster of differentiation 40 ligand (CD40) concentration in blood.
  * **Harmonization Units**:
    * [FHS](#cd40_1-fhs)
    * [MESA](#cd40_1-mesa)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: ng / mL, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2019-04-15 15:02:25
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2018AB, `ID:` C2825885
  * **DCC Harmonization Comments**:

    This variable was harmonized by converting the component study variables to the appropriate unit of measure as needed and, when possible, accounting for measurements outside an assay's limits of detection (LOD). If the information was available, measurements below the lower limit of detection (LLOD) were set to the LLOD and measurements above the upper limit of detection (ULOD) were set to the ULOD unless otherwise indicated in the study-specific sections below. Some studies identified subjects with measurements outside the LOD; see table below for more details. The assay(s) used to measure CD40 concentration from serum or plasma differed by study and/or subcohort.
    
    #### FHS
    
    The *_FHS_* Original, New Offspring Spouse, Generation 3, Omni 1, and Omni 2 Cohorts are not included in this harmonized phenotype at this time.
    
    #### MESA
    
    After careful consideration of normal CD40 ranges and assay limits, the units of the dbGaP variable (phv00085021) were inferred to be ng/mL instead of pg/mL as reported in the dbGaP metadata. These inferred units were used when harmonizing this component variable.
    
    The *_MESA_* AirNR and Family Cohorts are not included in this harmonized phenotype at this time.
    
    #### Exam visit for CD40 measurements
    
    | Study or subcohort | Visit |
    |---------|----------|
    | FHS_Offspring | Exam 7 |
    | MESA_Classic | Exam 1 Main |
    
    #### Assay and limits of detection for CD40 measurements
    
    | Study or subcohort | Assay | LLOD | ULOD | Differentiated^1^ |
    |---------|----------|---------|---------|---------|
    | FHS_Offspring | ELISA | 0.005 ng/mL | NA | No |
    | MESA_Classic | ELISA | 0.0042 ng/mL | NA | No | 
    
    1. The study included information indicating which measurements were below or above the limit of detection. If "Yes", measurements outside the LOD can be identified using component study or subcohort variables.
    
    #### Specimen type for CD40 measurements
    
    Table includes studies or subcohorts with known specimen types only.
    
    | Study or subcohort | Specimen |
    |---------|----------|
    | FHS | Plasma |
    | MESA | Serum |
    
<a id="cd40_1-fhs"></a>
  * ### inflammation/cd40_1 -- **FHS**:
    * 2 component_study_variables: `phs000007.v29.pht000079.v6.phv00021687.v5`, `phs000007.v29.pht003099.v4.phv00177942.v4`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Dataset
        dataset <- left_join(phen_list$source_data$pht000079,
                             phen_list$source_data$pht003099,
                             by = 'topmed_subject_id') %>%
                   rename(cd40 = CD40P, age = age7)
      
        #Converting to numeric variables
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="cd40_1-mesa"></a>
  * ### inflammation/cd40_1 -- **MESA**:
    * 2 component_study_variables: `phs000209.v13.pht001116.v10.phv00084442.v3`, `phs000209.v13.pht001116.v10.phv00085021.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Dataset
        dataset <- phen_list$source_data$pht001116 %>%
                   rename(cd40 = cd40l1, age = age1c)
      
        #Converting to numeric values
        dataset <- replace(dataset, dataset == 'NA', NA) %>%
                   mutate_if(is.character, as.numeric)
      
        #Removing missing values
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="crp_1"></a>
## inflammation: **crp_1** (crp)
  C-reactive protein (CRP) concentration in blood.
  * **Harmonization Units**:
    * [Amish](#crp_1-amish)
    * [ARIC](#crp_1-aric)
    * [CARDIA](#crp_1-cardia)
    * [CFS](#crp_1-cfs)
    * [CHS](#crp_1-chs)
    * [FHS_Gen3_Offspring](#crp_1-fhs_gen3_offspring)
    * [FHS_NewOffspringSpouse_Omni2](#crp_1-fhs_newoffspringspouse_omni2)
    * [FHS_Omni1](#crp_1-fhs_omni1)
    * [GENOA](#crp_1-genoa)
    * [HCHS_SOL](#crp_1-hchs_sol)
    * [JHS](#crp_1-jhs)
    * [MESA_AirNR](#crp_1-mesa_airnr)
    * [MESA_Classic_Family](#crp_1-mesa_classic_family)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: mg / L, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2019-04-15 15:07:16
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2018AB, `ID:` C0428528
  * **DCC Harmonization Comments**:

    This variable was harmonized by converting the component study variables to the appropriate unit of measure as needed and, when possible, accounting for measurements outside an assay's limits of detection (LOD). If the information was available, measurements below the lower limit of detection (LLOD) were set to the LLOD and measurements above the upper limit of detection (ULOD) were set to the ULOD unless otherwise indicated in the study-specific sections below. Some studies identified subjects with measurements outside the LOD; see table below for more details. The assay(s) used to measure CRP concentration from serum or plasma differed by study and/or subcohort.
    
    #### ARIC
    
    A few negative measurement values were set to missing in the harmonization.
    
    #### CHS
    
    The component study variable used in harmonization contains measurements using different assays and was already adjusted for laboratory drift by the study. Original assay LODs are not applicable to this variable due to adjustment.
    
    #### FHS
    
    The *_FHS_* Original Cohort is not included in this harmonized phenotype at this time.
    
    #### GENOA
    
    The component study variable used in harmonization is the average of two CRP measurements at the Phase 2 Exam. 
    
    #### HCHS_SOL 
    
    Measurements outside the LLOD or the ULOD were set to missing by the study and therefore were not available.
    
    #### JHS 
    
    A small number of measurements not indicated as below the LLOD had a value of 0.0 mg/dL. After consulting with the study, these measurements were set to the LLOD in the harmonized variable.
    
    #### Exam visit for CRP measurements
    
    | Study or subcohort | Visit |
    |---------|----------|
    | Amish | Baseline visit |
    | ARIC | Visit 5 |
    | CARDIA | Year 15/Exam 6 |
    | CFS | Visit 5 |
    | CHS_Original | Baseline visit |
    | CHS_AfricanAmerican | Baseline visit |
    | FHS_Offspring | Exam 7 |
    | FHS_NewOffspringSpouse | Exam 2 |
    | FHS_Gen3 | Exam 1 |
    | FHS_Omni1 | Exam 3 |
    | FHS_Omni2 | Exam 2 |
    | GENOA | Phase 2 |
    | HCHS_SOL | Visit 1 |
    | JHS | Visit 1 |
    | MESA_Classic | Exam 1 Main |
    | MESA_Family | Family Exam Main |
    | MESA_AirNR | AirNR Exam Main | 
    
    #### Assay and limits of detection for CRP measurements
    
    | Study or subcohort | Assay | LLOD | ULOD | Differentiated^1^ |
    |---------|----------|---------|---------|---------|
    | Amish | Endpoint Nephelometry | 0.2 mg/L | NA | No |
    | ARIC | ELISA | 0.00035 mg/L |  NA  | No |
    | CARDIA | BNII nephelometer | 0.15 mg/L | 1100 mg/L | Yes |
    | CFS | Dade Behring BN II nephelometer | 0.15 mg/L | 1100 mg/L | Yes |
    | CHS | High-sensitivity ELISA | NA |  NA  | No |
    | FHS_Offspring | Particle Enhanced Immunonephelometry | 0.16 mg/L |  1100 mg/L | No |
    | FHS_NewOffspringSpouse | Immunoturbidometric assay | 0.15 mg/L | NA  | Yes |
    | FHS_Gen3 | Particle Enhanced Immunonephelometry | 0.15 mg/L |  550 mg/L  | No |
    | FHS_Omni1 | Immunoturbidometric assay | 0.15 mg/L | 262.5 mg/L | Yes |
    | FHS_Omni2 | Immunoturbidometric assay | 0.15 mg/L | NA | Yes |
    | GENOA | Immunoturbidimetric CRP-Latex assay | 0.1 mg/L | NA | No |
    | HCHS_SOL | Immunoturbidimetric assay | 0.1 mg/L |  NA  | No |
    | JHS | Immunoturbidimetric CRP-Latex assay | 0.1 mg/L |  NA  | Yes |
    | MESA_Classic  | BNII nephelometer, Siemens | 0.16 mg/L | 1100 mg/L |Yes |
    | MESA_Family  | BNII nephelometer, Siemens | 0.16 mg/L | 1100 mg/L | No | 
    | MESA_AirNR  | BNII nephelometer, Siemens | 0.16 mg/L | 1100 mg/L | Yes |
    
    1. The study included information indicating which measurements were below or above the limit of detection. If "Yes", measurements outside the LOD can be identified using component study or subcohort variables.
    
    #### Specimen type for CRP measurements
    
    Table includes studies or subcohorts with known specimen types only.
    
    | Study or subcohort | Specimen |
    |---------|----------|
    | CARDIA | Plasma |
    | CHS | Plasma |
    | FHS | Serum |
    | GENOA | Serum |
    
<a id="crp_1-amish"></a>
  * ### inflammation/crp_1 -- **Amish**:
    * 2 component_study_variables: `phs000956.v2.pht005002.v1.phv00252976.v1`, `phs000956.v2.pht005002.v1.phv00252992.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset and rename variables.
        dataset <- phen_list$source_data$pht005002 %>%
                   rename(age = age_baseline, crp = crp_baseline)
      
        # Substitute the winsorized age value of '90+' to a numeric value 90.
        dataset$age[dataset$age %in% '90+'] <- 90
      
        # Substitute the value of 'NA' to missing.
        dataset$age[dataset$age %in% 'NA'] <- NA
        dataset$crp[dataset$crp %in% 'NA'] <- NA
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="crp_1-aric"></a>
  * ### inflammation/crp_1 -- **ARIC**:
    * 2 component_study_variables: `phs000280.v4.pht006431.v1.phv00295623.v1`, `phs000280.v4.pht006444.v1.phv00296696.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset and rename variables.
        dataset <- inner_join(phen_list$source_data$pht006444,
                              phen_list$source_data$pht006431,
                              by = "topmed_subject_id") %>%
                   rename(age = AGE_STAGE_1, crp = LIP33)
      
        # Substitute the value of 'NA' to missing.
        dataset$age[dataset$age %in% 'NA'] <- NA
        dataset$crp[dataset$crp %in% 'NA'] <- NA
      
        # Substitute negative CRP values to missing.
        dataset$crp[dataset$crp < 0] <- NA
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="crp_1-cardia"></a>
  * ### inflammation/crp_1 -- **CARDIA**:
    * 2 component_study_variables: `phs000285.v3.pht001851.v2.phv00120748.v2`, `phs000285.v3.pht001853.v2.phv00120759.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset and rename variables.
        dataset <- inner_join(phen_list$source_data$pht001853,
                              phen_list$source_data$pht001851,
                              by = "topmed_subject_id") %>%
                   rename(age = EX6_AGE, crp = FL6CRPBN)
      
        # Substitute the value of 'NA' to missing.
        dataset$age[dataset$age %in% 'NA'] <- NA
        dataset$crp[dataset$crp %in% 'NA'] <- NA
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="crp_1-cfs"></a>
  * ### inflammation/crp_1 -- **CFS**:
    * 3 component_study_variables: `phs000284.v1.pht001902.v1.phv00122012.v1`, `phs000284.v1.pht001902.v1.phv00122015.v1`, `phs000284.v1.pht001902.v1.phv00123990.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset and rename variables.
        dataset <- phen_list$source_data$pht001902 %>%
                   rename(crp = crpam)
      
        # Filter for Visit 5 only.
        dataset <- filter(dataset, visit == '5')
      
        # Substitute the value of 'NA' to missing.
        dataset$age[dataset$age %in% 'NA'] <- NA
        dataset$crp[dataset$crp %in% 'NA'] <- NA
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Set CRP values below the lower limit of detection to the lower limit of detection.
        dataset$crp[dataset$crp == 0.075] <- 0.15
      
        # Select the output variables and remove records with NAs from dataset.
        dataset <- select(dataset, topmed_subject_id, crp, age) %>%
                   na.omit()
      
        return(dataset)
      }
      ```
<a id="crp_1-chs"></a>
  * ### inflammation/crp_1 -- **CHS**:
    * 2 component_study_variables: `phs000287.v6.pht001452.v1.phv00100487.v1`, `phs000287.v6.pht001452.v1.phv00100499.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset and rename variables.
        dataset <- phen_list$source_data$pht001452 %>%
                   rename(age = AGEBL, crp = CRPBLADJ)
      
        # Substitute the value of 'NA' to missing.
        dataset$crp[dataset$crp %in% 'NA'] <- NA
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="crp_1-fhs_gen3_offspring"></a>
  * ### inflammation/crp_1 -- **FHS_Gen3_Offspring**:
    * 5 component_study_variables: `phs000007.v29.pht000082.v6.phv00021697.v5`, `phs000007.v29.pht000298.v5.phv00036343.v4`, `phs000007.v29.pht003099.v4.phv00177928.v4`, `phs000007.v29.pht003099.v4.phv00177930.v4`, `phs000007.v29.pht003099.v4.phv00177942.v4`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #OFFSPRING EXAM 7
        crp_of <- left_join(phen_list$source_data$pht000082, phen_list$source_data$pht003099,
                            by = 'topmed_subject_id') %>%
                  rename(crp = CRP, age = age7)
        crp_of <- select(crp_of, topmed_subject_id, crp, age)
      
        #GENERATION 3 EXAM 1
        crp_g3 <- left_join(phen_list$source_data$pht000298, phen_list$source_data$pht003099,
                            by = 'topmed_subject_id') %>%
                  rename(age = age1)
      
        crp_g3 <- select(crp_g3, topmed_subject_id, crp, age)
      
        dataset <- bind_rows(crp_of, crp_g3)
      
        #Changing variables to numeric
        dataset <- mutate(dataset, age = as.numeric(age), crp = as.numeric(crp))
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="crp_1-fhs_newoffspringspouse_omni2"></a>
  * ### inflammation/crp_1 -- **FHS_NewOffspringSpouse_Omni2**:
    * 4 component_study_variables: `phs000007.v29.pht002889.v2.phv00172177.v2`, `phs000007.v29.pht002889.v2.phv00172203.v2`, `phs000007.v29.pht003099.v4.phv00177928.v4`, `phs000007.v29.pht003099.v4.phv00177932.v4`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        dataset <- left_join(phen_list$source_data$pht002889, phen_list$source_data$pht003099,
                             by = 'topmed_subject_id') %>%
                   rename(crp = CRP, age = age2)
        dataset <- subset(dataset, idtype == '2' | idtype == '72')
      
        #Converting to numeric values
        #dataset$crp[dataset$crp %in% 'NA'] <- NA
        #dataset$crp_i[dataset$crp_i %in% 'NA'] <- NA
      
        dataset <- mutate(dataset, crp = as.numeric(crp),
                          age = as.numeric(age),
                          crp_i = as.numeric(crp_i))
      
        #Assigning subjects below LOD to LLOD
        dataset$crp <- ifelse(dataset$crp_i == 1, 0.15, dataset$crp)
      
        dataset <- select(dataset, topmed_subject_id, crp, age)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="crp_1-fhs_omni1"></a>
  * ### inflammation/crp_1 -- **FHS_Omni1**:
    * 3 component_study_variables: `phs000007.v29.pht002888.v4.phv00172158.v4`, `phs000007.v29.pht003099.v4.phv00177928.v4`, `phs000007.v29.pht003099.v4.phv00177934.v4`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        dataset <- left_join(phen_list$source_data$pht002888, phen_list$source_data$pht003099,
                             by = 'topmed_subject_id') %>%
                   rename(age = age3)
        dataset <- subset(dataset, idtype == '7')
      
        #Changing to numeric values
        dataset <- mutate(dataset, crp = as.numeric(crp), age = as.numeric(age))
      
        #Recoding values below LOD to LLOD
        dataset$crp <- ifelse(dataset$crp == 0.14, 0.15, dataset$crp)
      
        dataset <- select(dataset, topmed_subject_id, crp, age)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="crp_1-genoa"></a>
  * ### inflammation/crp_1 -- **GENOA**:
    * 4 component_study_variables: `phs001238.v1.pht006046.v1.phv00277758.v1`, `phs001238.v1.pht006048.v1.phv00277841.v1`, `phs001238.v1.pht006659.v1.phv00307949.v1`, `phs001238.v1.pht006661.v1.phv00308034.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        #AA dataset
        crp_aa <- left_join(phen_list$source_data$pht006048, phen_list$source_data$pht006046,
                            by = 'topmed_subject_id') %>%
                  rename(crp = CCRP,
                         age = AGE)
        #EA dataset
        crp_ea <- left_join(phen_list$source_data$pht006661, phen_list$source_data$pht006659,
                            by = 'topmed_subject_id') %>%
                  rename(crp = CCRP,
                         age = AGE)
        #Appending AA and EA datasets
        dataset <- bind_rows(crp_ea, crp_aa, .id = NULL)
      
        #Changing to numeric values
      
        dataset$crp[dataset$crp %in% 'NA'] <- NA
      
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        #Converting mg/dL to mg/L
        dataset$crp <- (dataset$crp * 10)
      
        dataset <- select(dataset, crp, age, topmed_subject_id)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="crp_1-hchs_sol"></a>
  * ### inflammation/crp_1 -- **HCHS_SOL**:
    * 2 component_study_variables: `phs000810.v1.pht004715.v1.phv00226251.v1`, `phs000810.v1.pht004715.v1.phv00258066.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset and rename variables.
        dataset <- phen_list$source_data$pht004715 %>%
          rename(age = AGE, crp = LABA91)
      
        # Substitute the value of 'NA' to missing.
        dataset$crp[dataset$crp %in% 'NA'] <- NA
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="crp_1-jhs"></a>
  * ### inflammation/crp_1 -- **JHS**:
    * 3 component_study_variables: `phs000286.v5.pht001945.v1.phv00125940.v1`, `phs000286.v5.pht001945.v1.phv00125941.v1`, `phs000286.v5.pht001949.v1.phv00126009.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset and rename variables.
        dataset <- left_join(phen_list$source_data$pht001945, phen_list$source_data$pht001949,
                             by = 'topmed_subject_id') %>%
                   rename(crp_i = Hscrp_cresult,
                          crp = HSCRP,
                          age = AGE01)
      
        # Substitute the value of 'NA' to missing.
        dataset$age[dataset$age %in% 'NA'] <- NA
        dataset$crp[dataset$crp %in% 'NA'] <- NA
      
        # Convert character values to numeric.
        dataset <- mutate(dataset, crp = as.numeric(crp), age = as.numeric(age))
      
        #Values below LOD being set to LLOD
        dataset$crp[dataset$crp_i == '<0.01'] <- 0.01
      
        #Setting crp values of 0 to LLOD
        dataset$crp[dataset$crp == 0] <- 0.01
      
        #Converting mg/dL to mg/L
      
        dataset$crp <- (dataset$crp * 10)
      
        #Selecting harmonized variables
        dataset <- select(dataset, topmed_subject_id, crp, age)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="crp_1-mesa_airnr"></a>
  * ### inflammation/crp_1 -- **MESA_AirNR**:
    * 3 component_study_variables: `phs000209.v13.pht001111.v4.phv00082639.v2`, `phs000209.v13.pht001111.v4.phv00082967.v1`, `phs000209.v13.pht001111.v4.phv00082968.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        dataset <- phen_list$source_data$pht001111 %>%
                   rename(crp = crp1,
                          crp_m = crp1m,
                          age = age1c)
      
        #Adding NAs and changing to numeric values
        dataset$crp[dataset$crp %in% 'NA'] <- NA
        dataset$crp_m[dataset$crp_m %in% 'NA'] <- NA
        dataset <- mutate(dataset, crp = as.numeric(crp),
                                   crp_m = as.numeric(crp_m),
                                   age = as.numeric(age))
      
        #Setting values below LOD to LLOD
        dataset$crp[dataset$crp_m == -333] <- 0.16
      
        dataset <- select(dataset, crp, age, topmed_subject_id)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="crp_1-mesa_classic_family"></a>
  * ### inflammation/crp_1 -- **MESA_Classic_Family**:
    * 4 component_study_variables: `phs000209.v13.pht001116.v10.phv00084442.v3`, `phs000209.v13.pht001116.v10.phv00085015.v2`, `phs000209.v13.pht001121.v3.phv00087071.v1`, `phs000209.v13.pht001121.v3.phv00087661.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        main_crp <- phen_list$source_data$pht001116 %>%
                    rename(crp = crp1,
                           age = age1c)
        fam_crp <- phen_list$source_data$pht001121 %>%
                   rename(crp = crpf,
                   age = agefc)
      
        #Combining datasets
        dataset <- bind_rows(main_crp, fam_crp)
      
        #Adding NAs and changing to numeric values
        dataset$crp[dataset$crp %in% 'NA'] <- NA
        dataset <- mutate(dataset, crp = as.numeric(crp),
                                   age = as.numeric(age))
      
        #Setting values below LOD to LLOD
        dataset$crp[dataset$crp == 0.15] <- 0.16
      
        dataset <- select(dataset, crp, age, topmed_subject_id)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="eselectin_1"></a>
## inflammation: **eselectin_1** (eselectin)
  E-selectin concentration in blood.
  * **Harmonization Units**:
    * [MESA](#eselectin_1-mesa)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: ng / mL, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2019-04-15 15:14:23
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2018AB, `ID:` C1316265
  * **DCC Harmonization Comments**:

    This variable was harmonized by converting the component study variables to the appropriate unit of measure as needed and, when possible, accounting for measurements outside an assay's limits of detection (LOD). If the information was available, measurements below the lower limit of detection (LLOD) were set to the LLOD and measurements above the upper limit of detection (ULOD) were set to the ULOD unless otherwise indicated in the study-specific sections below. Some studies identified subjects with measurements outside the LOD; see table below for more details. The assay(s) used to measure E-selectin concentration from serum or plasma differed by study and/or subcohort.
    
    #### MESA
    
    The *_MESA_* Family Cohort is not included in this harmonized phenotype at this time.
    
    #### Exam visit for E-selectin measurements
    
    | Study or subcohort | Visit |
    |---------|----------|
    | MESA_Classic | Exam 1 Main |
    | MESA_AirNR | AirNR Exam Main | 
    
    #### Assay and limits of detection for E-selectin measurements
    
    | Study or subcohort | Assay | LLOD | ULOD^1^ | Differentiated^2^ |
    |---------|----------|---------|---------|---------|
    | MESA_Classic | ELISA |  0.1 ng/mL | NA  | No |
    | MESA_AirNR | ELISA | 0.47 ng/mL | 100 ng/mL | Yes |
    
    1. Values over the ULOD are valid and were obtained by dilution.
    2. The study included information indicating which measurements were below or above the limit of detection. If "Yes", measurements outside the LOD can be identified using component study or subcohort variables.
    
    #### Specimen type for E-selectin measurements
    
    Table includes studies or subcohorts with known specimen types only.
    
    | Study or subcohort | Specimen |
    |---------|----------|
    | MESA | Serum |
    
<a id="eselectin_1-mesa"></a>
  * ### inflammation/eselectin_1 -- **MESA**:
    * 5 component_study_variables: `phs000209.v13.pht001111.v4.phv00082639.v2`, `phs000209.v13.pht001111.v4.phv00082969.v1`, `phs000209.v13.pht001111.v4.phv00082970.v1`, `phs000209.v13.pht001116.v10.phv00084442.v3`, `phs000209.v13.pht001116.v10.phv00085022.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset and rename variables
        main <- phen_list$source_data$pht001116 %>%
                rename(eselectin = eselect1,
                       age = age1c)
        air <- phen_list$source_data$pht001111 %>%
               rename(eselectin = eselect1,
                age = age1c)
      
        dataset <- bind_rows(main, air)
      
        # Substitute the value of 'NA' to missing
        dataset$eselectin[dataset$eselectin %in% 'NA'] <- NA
      
        # Convert character values to numeric
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Select final variables
        dataset <- select(dataset, eselectin, age, topmed_subject_id)
      
        # Remove records with NAs from dataset
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="icam1_1"></a>
## inflammation: **icam1_1** (icam1)
  Intercellular adhesion molecule 1 (ICAM1) concentration in blood.
  * **Harmonization Units**:
    * [CARDIA](#icam1_1-cardia)
    * [CFS](#icam1_1-cfs)
    * [CHS](#icam1_1-chs)
    * [FHS_Gen3_Offspring](#icam1_1-fhs_gen3_offspring)
    * [FHS_NewOffspringSpouse_Omni1](#icam1_1-fhs_newoffspringspouse_omni1)
    * [MESA_AirNR](#icam1_1-mesa_airnr)
    * [MESA_Classic](#icam1_1-mesa_classic)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: ng / mL, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2019-04-15 15:17:46
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2018AB, `ID:` C4084871
  * **DCC Harmonization Comments**:

    This variable was harmonized by converting the component study variables to the appropriate unit of measure as needed and, when possible, accounting for measurements outside an assay's limits of detection (LOD). If the information was available, measurements below the lower limit of detection (LLOD) were set to the LLOD and measurements above the upper limit of detection (ULOD) were set to the ULOD unless otherwise indicated in the study-specific sections below. Some studies identified subjects with measurements outside the LOD; see table below for more details. The assay(s) used to measure ICAM1 concentration from serum or plasma differed by study and/or subcohort.
    
    #### CFS
    
    The study identified values with low concentrations that had been extrapolated outside the assay range. These extrapolated values were set to the LLOD.
    
    #### FHS
    
    The *_FHS_* New Offspring Spouse and Omni 1 Cohorts included a variable on dbGaP (phv00172210) indicating which plate a sample was assayed on. Plate differences in ICAM1 concentration were observed in the Omni 1 Cohort after adjusting for age and sex. 
    
    The *_FHS_* Original and Omni 2 Cohorts are not included in this harmonized phenotype at this time.
    
    #### MESA
    
    The *_MESA_* Family Cohort is not included in this harmonized phenotype at this time.
    
    #### Exam visit for ICAM1 measurements
    
    | Study or subcohort | Visit |
    |---------|----------|
    | CARDIA | Year 5/Exam 3 |
    | CFS | Visit 5 |
    | CHS_Original | Baseline visit |
    | CHS_AfricanAmerican | Baseline visit |
    | FHS_Offspring | Exam 7 |
    | FHS_NewOffspring Spouse | Exam 1|
    | FHS_Gen3 | Exam 1 |
    | FHS_Omni1 | Exam 3 |
    | MESA_Classic | Exam 1 Main |
    | MESA_AirNR | AirNR Exam Main | 
    
    #### Assay and limits of detection for ICAM1 measurements
    
    | Study or subcohort | Assay | LLOD | ULOD | Differentiated^1^ |
    |---------|----------|---------|---------|---------|
    | CARDIA | ELISA | 0.031 ng/mL | NA | No |
    | CFS | Unknown | 1.13 ng/mL | 906 ng/mL | Yes |
    | CHS | ELISA | 0.35 ng/mL |  NA  | No |
    | FHS | ELISA  | < 0.35 ng/mL |  NA  | No |
    | MESA_Classic | ELISA | 0.35 ng/mL |  900 ng/mL | Yes |
    | MESA_AirNR | ELISA  |  20 ng/mL  | 1000 ng/mL | Yes |
    
    1. The study included information indicating which measurements were below or above the limit of detection. If "Yes", measurements outside the LOD can be identified using component study or subcohort variables.
    
    #### Specimen type for ICAM1 measurements
    
    Table includes studies or subcohorts with known specimen types only.
    
    | Study or subcohort | Specimen |
    |---------|----------|
    | FHS | Serum |
    | MESA | Plasma |
    
<a id="icam1_1-cardia"></a>
  * ### inflammation/icam1_1 -- **CARDIA**:
    * 2 component_study_variables: `phs000285.v3.pht001697.v2.phv00116390.v2`, `phs000285.v3.pht001699.v2.phv00116396.v2`
    * Function:
      ```r
      harmonize <- function(phen_list) {
      
        library(dplyr)
      
        #working dataset
        dataset <- left_join(phen_list$source_data$pht001699,
                   phen_list$source_data$pht001697,
                   by = 'topmed_subject_id') %>%
                   rename(icam1 = sICAM1, age = EX3_AGE)
      
        #Converting to numeric variables
        dataset$age[dataset$age %in% 'NA'] <- NA
        dataset$icam1[dataset$icam1 %in% 'NA'] <- NA
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        #Removing missing values
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="icam1_1-cfs"></a>
  * ### inflammation/icam1_1 -- **CFS**:
    * 5 component_study_variables: `phs000284.v1.pht001902.v1.phv00122012.v1`, `phs000284.v1.pht001902.v1.phv00122015.v1`, `phs000284.v1.pht001902.v1.phv00124095.v1`, `phs000284.v1.pht001902.v1.phv00124097.v1`, `phs000284.v1.pht001902.v1.phv00124098.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
        #Dataset
        dataset <- phen_list$source_data$pht001902
      
        #Selecting subjects with visit 5 data
        dataset <- subset(dataset, visit == 5)
      
        #Converting values to numeric
        dataset$icam[dataset$icam %in% 'NA'] <- NA
        dataset$icam_flag[dataset$icam_flag %in% 'NA'] <- NA
      
        dataset <- mutate(dataset,
                         icam1 = as.numeric(icam),
                         icam_flag = as.numeric(icam_flag),
                         age = as.numeric(age))
      
        #Setting extrapolated values to the LLOD
        dataset$icam1[dataset$icam_flag == 1 & dataset$icam_comment == 'L'] <- 1.13
      
        #Selecting final varaibles and removing missing
        dataset <- select(dataset, topmed_subject_id, icam1, age)
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="icam1_1-chs"></a>
  * ### inflammation/icam1_1 -- **CHS**:
    * 2 component_study_variables: `phs000287.v6.pht001449.v1.phv00098764.v1`, `phs000287.v6.pht001452.v1.phv00100487.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Dataset
        dataset <- left_join(phen_list$source_data$pht001449,
                             phen_list$source_data$pht001452,
                             by = 'topmed_subject_id') %>%
                   rename(icam1 = ICAM1, age = AGEBL)
      
        #Converting to numeric values
        dataset$icam1[dataset$icam1 %in% 'NA'] <- NA
        dataset$age[dataset$age %in% 'NA'] <- NA
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        #Removing missing values
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="icam1_1-fhs_gen3_offspring"></a>
  * ### inflammation/icam1_1 -- **FHS_Gen3_Offspring**:
    * 4 component_study_variables: `phs000007.v29.pht000093.v6.phv00021939.v5`, `phs000007.v29.pht000303.v5.phv00036405.v4`, `phs000007.v29.pht003099.v4.phv00177930.v4`, `phs000007.v29.pht003099.v4.phv00177942.v4`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Dataset
        icam_of <- left_join(phen_list$source_data$pht000093,
                             phen_list$source_data$pht003099,
                             by = 'topmed_subject_id') %>%
                   select(topmed_subject_id, icam, age7) %>%
                   rename(age = age7, icam1 = icam)
        icam_g3 <- left_join(phen_list$source_data$pht000303,
                             phen_list$source_data$pht003099,
                             by = 'topmed_subject_id') %>%
                   select(topmed_subject_id, G3ICAM, age1) %>%
                   rename(icam1 = G3ICAM, age = age1)
        dataset <- bind_rows(icam_of, icam_g3)
      
        #Convert to numeric variables
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="icam1_1-fhs_newoffspringspouse_omni1"></a>
  * ### inflammation/icam1_1 -- **FHS_NewOffspringSpouse_Omni1**:
    * 4 component_study_variables: `phs000007.v29.pht002890.v4.phv00172215.v4`, `phs000007.v29.pht003099.v4.phv00177928.v4`, `phs000007.v29.pht003099.v4.phv00177930.v4`, `phs000007.v29.pht003099.v4.phv00177934.v4`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Dataset
        dataset <- left_join(phen_list$source_data$pht002890,
                   phen_list$source_data$pht003099,
                   by = 'topmed_subject_id')
      
        #Selection correct age for visit
        dataset <- subset(dataset, idtype == 2 | idtype == 7)
        dataset$age <- ifelse(dataset$idtype == 2, dataset$age1, dataset$age3)
      
        #Selecting variables
        dataset <- select(dataset, topmed_subject_id, icam, age) %>%
                   rename(icam1 = icam)
      
        #Changing to numeric values
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="icam1_1-mesa_airnr"></a>
  * ### inflammation/icam1_1 -- **MESA_AirNR**:
    * 3 component_study_variables: `phs000209.v13.pht001111.v4.phv00082639.v2`, `phs000209.v13.pht001111.v4.phv00082963.v1`, `phs000209.v13.pht001111.v4.phv00082964.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        #Dataset
        dataset <- phen_list$source_data$pht001111 %>%
                   rename(icam_m = icam1m, age = age1c)
      
        #Convert variables to numeric values
        dataset$icam1[dataset$icam1 %in% 'NA'] <- NA
        dataset$icam_m[dataset$icam_m %in% 'NA'] <- NA
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        #Limit of detection values
        dataset$icam1[dataset$icam_m == -333] <- 20.0
      
        #Select harmonizaed variables
        dataset <- select(dataset, topmed_subject_id, icam1, age)
      
        #Remove missing values
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="icam1_1-mesa_classic"></a>
  * ### inflammation/icam1_1 -- **MESA_Classic**:
    * 3 component_study_variables: `phs000209.v13.pht001116.v10.phv00084442.v3`, `phs000209.v13.pht001116.v10.phv00085117.v2`, `phs000209.v13.pht001116.v10.phv00085118.v2`
    * Function:
      ```r
      harmonize <- function(phen_list) {
        #Dataset
        dataset <- phen_list$source_data$pht001116 %>%
                   rename(icam_m = icam11M, age = age1c)
      
        #Convert variables to numeric values
        dataset$icam1[dataset$icam1 %in% 'NA'] <- NA
        dataset$icam_m[dataset$icam_m %in% 'NA'] <- NA
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        #Limit of detection values
        dataset$icam1[dataset$icam_m == -333] <- 0.35
        dataset$icam1[dataset$icam_m == -555] <- 900
      
        #Select harmonizaed variables
        dataset <- select(dataset, topmed_subject_id, icam1, age)
      
        #Remove missing values
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="il10_1"></a>
## inflammation: **il10_1** (il10)
  Interleukin 10 (IL10) concentration in blood.
  * **Harmonization Units**:
    * [CFS](#il10_1-cfs)
    * [MESA](#il10_1-mesa)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: pg / mL, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2019-04-15 15:30:51
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2018AB, `ID:` C0945416
  * **DCC Harmonization Comments**:

    This variable was harmonized by converting the component study variables to the appropriate unit of measure as needed and, when possible, accounting for measurements outside an assay's limits of detection (LOD). If the information was available, measurements below the lower limit of detection (LLOD) were set to the LLOD and measurements above the upper limit of detection (ULOD) were set to the ULOD unless otherwise indicated in the study-specific sections below. Some studies identified subjects with measurements outside the LOD; see table below for more details. The assay(s) used to measure IL10 concentration from serum or plasma differed by study and/or subcohort.
    
    #### CFS
     
    The study identified values with low concentrations that had been extrapolated outside the assay range. These extrapolated values were set to the LLOD.
    
    #### MESA
    
    The *_MESA_* Family and AirNR Cohorts are not included in this harmonized phenotype at this time.
    
    #### Exam visit for IL10 measurements
    
    | Study or subcohort | Visit |
    |---------|----------|
    | CFS | Visit 5 |
    | MESA_Classic | Exam 1 Main |
    
    #### Assay and limits of detection for IL10 measurements
    
    | Study or subcohort | Assay | LLOD | ULOD | Differentiated^1^ |
    |---------|----------|---------|---------|---------|
    | CFS | Human Cytokine/Chemokine | 0.1 pg/mL | NA  | Yes |
    | | LINCOplex Kit | | | |
    | MESA_Classic | Millipore CVD Panel 3 | < 0.13 pg/mL | > 10000 pg/mL | Yes |
    
    1. The study included information indicating which measurements were below or above the limit of detection. If "Yes", measurements outside the LOD can be identified using component study or subcohort variables.
    
<a id="il10_1-cfs"></a>
  * ### inflammation/il10_1 -- **CFS**:
    * 4 component_study_variables: `phs000284.v1.pht001902.v1.phv00122012.v1`, `phs000284.v1.pht001902.v1.phv00122015.v1`, `phs000284.v1.pht001902.v1.phv00124072.v1`, `phs000284.v1.pht001902.v1.phv00124075.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Dataset
        dataset <- phen_list$source_data$pht001902
      
        #Subsetting data to visit 5
        dataset <- subset(dataset, visit == 5)
      
        #Converting age and il10 to numeric values
        dataset$il10[dataset$il10 %in% 'NA'] <- NA
        dataset <- mutate(dataset, il10 = as.numeric(il10), age = as.numeric(age))
      
        #Converting extrapolated values to LLOD
        dataset$il10[dataset$il10_comment %in% 'extrapolated'] <- 0.10
      
        #Selecting variables and removing missing
        dataset <- select(dataset, topmed_subject_id, il10, age)
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="il10_1-mesa"></a>
  * ### inflammation/il10_1 -- **MESA**:
    * 3 component_study_variables: `phs000209.v13.pht001116.v10.phv00084442.v3`, `phs000209.v13.pht002099.v2.phv00142666.v2`, `phs000209.v13.pht002099.v2.phv00142667.v2`
    * Function:
      ```r
      harmonize <- function(phen_list) {
        #Dataset
        dataset <- left_join(phen_list$source_data$pht002099,
                             phen_list$source_data$pht001116,
                             by = 'topmed_subject_id') %>%
                   rename(il10 = il10a1, age = age1c, il10_m = il10a1m)
      
        #Converting to numeric varaibles
        dataset$il10[dataset$il10 %in% 'NA'] <- NA
        dataset$il10_m[dataset$il10_m %in% 'NA'] <- NA
      
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        #Samples outside of LOD to LLOD or ULOD
        dataset$il10[dataset$il10_m == -333] <- 0.13
        dataset$il10[dataset$il10_m == -555] <- 10000
      
        #Selecting varaibles
        dataset <- select(dataset, topmed_subject_id, il10, age)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="il18_1"></a>
## inflammation: **il18_1** (il18)
  Interleukin 18 (IL18) concentration in blood.
  * **Harmonization Units**:
    * [FHS](#il18_1-fhs)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: pg / mL, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2019-04-15 15:32:49
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2018AB, `ID:` C1316287
  * **DCC Harmonization Comments**:

    This variable was harmonized by converting the component study variables to the appropriate unit of measure as needed and, when possible, accounting for measurements outside an assay's limits of detection (LOD). If the information was available, measurements below the lower limit of detection (LLOD) were set to the LLOD and measurements above the upper limit of detection (ULOD) were set to the ULOD unless otherwise indicated in the study-specific sections below. Some studies identified subjects with measurements outside the LOD; see table below for more details. The assay(s) used to measure IL18 concentration from serum or plasma differed by study and/or subcohort.
    
    #### FHS
    
    The *_FHS_* Original, New Offspring Spouse, Generation 3, Omni 1, and Omni 2 Cohorts are not included in this harmonized phenotype at this time.
    
    #### Exam visit for IL18 measurements
    
    | Study or subcohort | Visit |
    |---------|----------|
    | FHS_Offspring | Exam 7 |
    
    #### Assay and limits of detection for IL18 measurements
    
    | Study or subcohort | Assay | LLOD | ULOD | Differentiated^1^ |
    |---------|----------|---------|---------|---------|
    | FHS_Offspring | ELISA | 128.0 pg/mL | 5000.0 pg/mL | No |
    
    1. The study included information indicating which measurements were below or above the limit of detection. If "Yes", measurements outside the LOD can be identified using component study or subcohort variables.
    
    #### Specimen type for IL18 measurements
    
    Table includes studies or subcohorts with known specimen types only.
    
    | Study or subcohort | Specimen |
    |---------|----------|
    | FHS | Serum |
    
<a id="il18_1-fhs"></a>
  * ### inflammation/il18_1 -- **FHS**:
    * 2 component_study_variables: `phs000007.v29.pht000671.v5.phv00066686.v4`, `phs000007.v29.pht003099.v4.phv00177942.v4`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Dataset
        dataset <- left_join(phen_list$source_data$pht000671,
                             phen_list$source_data$pht003099,
                             by = 'topmed_subject_id') %>%
        rename(age = age7)
      
        #Converting to numeric values
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="il1_beta_1"></a>
## inflammation: **il1_beta_1** (il1_beta)
  Interleukin 1 beta (IL1b) concentration in blood.
  * **Harmonization Units**:
    * [CFS](#il1_beta_1-cfs)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: pg / mL, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2019-04-15 15:24:49
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2018AB, `ID:` C0796820
  * **DCC Harmonization Comments**:

    This variable was harmonized by converting the component study variables to the appropriate unit of measure as needed and, when possible, accounting for measurements outside an assay's limits of detection (LOD). If the information was available, measurements below the lower limit of detection (LLOD) were set to the LLOD and measurements above the upper limit of detection (ULOD) were set to the ULOD unless otherwise indicated in the study-specific sections below. Some studies identified subjects with measurements outside the LOD; see table below for more details. The assay(s) used to measure IL1b concentration from serum or plasma differed by study and/or subcohort.
    
    #### CFS
    
    The study identified values with low concentrations that had been extrapolated outside the assay range. These extrapolated values were set to the LLOD.
    
    #### Exam visit for IL1b measurements
    
    | Study or subcohort | Visit |
    |---------|----------|
    | CFS | Visit 5 |
    
    #### Assay and limits of detection for IL1b measurements
    
    | Study or subcohort | Assay | LLOD | ULOD | Differentiated^1^ |
    |---------|----------|---------|---------|---------|
    | CFS | Human Cytokine/Chemokine LINCOplex Kit | 0.06 pg/mL |  NA  | Yes |
    
    1. The study included information indicating which measurements were below or above the limit of detection. If "Yes", measurements outside the LOD can be identified using component study or subcohort variables.
    
<a id="il1_beta_1-cfs"></a>
  * ### inflammation/il1_beta_1 -- **CFS**:
    * 4 component_study_variables: `phs000284.v1.pht001902.v1.phv00122012.v1`, `phs000284.v1.pht001902.v1.phv00122015.v1`, `phs000284.v1.pht001902.v1.phv00124068.v1`, `phs000284.v1.pht001902.v1.phv00124071.v1`
    * Function:
      ```r
      harmonize <- function(phen_list) {
        library(dplyr)
      
        #Dataset
        dataset <- phen_list$source_data$pht001902
      
        #Subsetting to visit 5
        dataset <- subset(dataset, visit == 5)
      
        #Converting to numeric values
        dataset$il1b[dataset$il1b %in% 'NA'] <- NA
        dataset <- mutate(dataset, age = as.numeric(age), il1b = as.numeric(il1b))
      
        #Replacing extrapolated values with LLOD
        dataset$il1b[dataset$il1b_comment %in% 'extrapolated'] <- 0.06
      
        #Selection variables and removing missing
        dataset <- select(dataset, topmed_subject_id, il1b, age) %>%
                   rename(il1_beta = il1b)
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="il6_1"></a>
## inflammation: **il6_1** (il6)
  Interleukin 6 (IL6) concentration in blood.
  * **Harmonization Units**:
    * [CARDIA](#il6_1-cardia)
    * [CFS](#il6_1-cfs)
    * [CHS](#il6_1-chs)
    * [FHS_Gen3](#il6_1-fhs_gen3)
    * [FHS_NewOffspringSpouse_Omni1](#il6_1-fhs_newoffspringspouse_omni1)
    * [FHS_Offspring](#il6_1-fhs_offspring)
    * [MESA](#il6_1-mesa)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: pg / mL, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2019-04-15 15:27:59
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2018AB, `ID:` C0942776
  * **DCC Harmonization Comments**:

    This variable was harmonized by converting the component study variables to the appropriate unit of measure as needed and, when possible, accounting for measurements outside an assay's limits of detection (LOD). If the information was available, measurements below the lower limit of detection (LLOD) were set to the LLOD and measurements above the upper limit of detection (ULOD) were set to the ULOD unless otherwise indicated in the study-specific sections below. Some studies identified subjects with measurements outside the LOD; see table below for more details. The assay(s) used to measure IL6 concentration from serum or plasma differed by study and/or subcohort.
    
    #### FHS
    
    The *_FHS_* New Offspring Spouse and Omni 1 Cohorts included a variable on dbGaP (phv00172218) indicating which plate a sample was assayed on. Plate differences in IL6 concentrations were not observed after adjusting for age and sex. 
    
    The *_FHS_* Original and Omni 2 Cohorts are not included in this harmonized phenotype at this time.
    
    #### MESA
    
    The *_MESA_* AirNR and Family Cohorts are not included in this harmonized phenotype at this time.
    
    #### Exam visit for IL6 measurements
    
    | Study or subcohort | Visit |
    |---------|----------|
    | CARDIA | Year 15/Exam 6 |
    | CFS | Visit 5 |
    | CHS_Original | Baseline visit |
    | CHS_AfricanAmerican | Baseline visit |
    | FHS_Offspring | Exam 7 |
    | FHS_NewOffspring Spouse | Exam 1 |
    | FHS_Gen3 | Exam 1 |
    | FHS_Omni1 | Exam 3 |
    | MESA_Classic | Exam 1 Main |
    
    #### Assay and limits of detection for IL6 measurements
    
    | Study or subcohort | Assay | LLOD | ULOD | Differentiated^1^ |
    |---------|----------|---------|---------|---------|
    | CARIDA | ELISA | 0.10 pg/mL | 12 pg/mL | Yes |
    | CFS | ELISA | 0.08 pg/mL | 15 pg/mL | Yes |
    | CHS | ELISA  | < 0.7 pg/mL | 300 pg/mL | No |
    | FHS_Offspring | ELISA | < 0.7 pg/mL | 300 pg/mL | No |
    | FHS_Gen3 | ELISA | 0.039 pg/mL | NA  | No |
    | FHS_NewOffspringSpouse | ELISA |  0.15 pg/mL | NA  | No |
    | FHS_Omni1 | ELISA | 0.15 pg/mL | NA  | No |
    | MESA_Classic | ELISA  | 0.09 pg/mL | 13.0 pg/mL | Yes |
    
    1.  The study included information indicating which measurements were below or above the limit of detection. If "Yes", measurements outside the LOD can be identified using component study or subcohort variables.
    
    #### Specimen type for IL6 measurements
    
    Table includes studies or subcohorts with known specimen types only.
    
    | Study or subcohort | Specimen |
    |---------|----------|
    | CHS | Serum |
    | FHS | Serum |
    
<a id="il6_1-cardia"></a>
  * ### inflammation/il6_1 -- **CARDIA**:
    * 3 component_study_variables: `phs000285.v3.pht001851.v2.phv00120748.v2`, `phs000285.v3.pht001862.v2.phv00121064.v2`, `phs000285.v3.pht001862.v2.phv00121065.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset and rename variables.
        dataset <- inner_join(phen_list$source_data$pht001862,
                              phen_list$source_data$pht001851,
                              by = "topmed_subject_id") %>%
                   rename(age = EX6_AGE, il6 = FL6IL6)
      
        # Substitute the value of 'NA' to missing.
        dataset$age[dataset$age %in% 'NA'] <- NA
        dataset$il6[dataset$il6 %in% 'NA'] <- NA
      
        # Set IL6 values above the upper limit of detection to the upper limit of detection.
        dataset$il6[dataset$FL6IL6CM == 'High > 12'] <- 12
      
        # Select the output variables.
        dataset <- select(dataset, topmed_subject_id, il6, age)
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="il6_1-cfs"></a>
  * ### inflammation/il6_1 -- **CFS**:
    * 3 component_study_variables: `phs000284.v1.pht001902.v1.phv00122012.v1`, `phs000284.v1.pht001902.v1.phv00122015.v1`, `phs000284.v1.pht001902.v1.phv00124021.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset and rename variables.
        dataset <- phen_list$source_data$pht001902 %>%
                   rename(il6 = il6am)
      
        # Filter for Visit 5 only.
        dataset <- filter(dataset, visit == '5')
      
        # Substitute the value of 'NA' to missing.
        dataset$age[dataset$age %in% 'NA'] <- NA
        dataset$il6[dataset$il6 %in% 'NA'] <- NA
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Select the output variables and remove records with NAs from dataset.
        dataset <- select(dataset, topmed_subject_id, il6, age) %>%
                   na.omit()
      
        return(dataset)
      }
      ```
<a id="il6_1-chs"></a>
  * ### inflammation/il6_1 -- **CHS**:
    * 2 component_study_variables: `phs000287.v6.pht001452.v1.phv00100487.v1`, `phs000287.v6.pht001452.v1.phv00100500.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset and rename variables.
        dataset <- phen_list$source_data$pht001452 %>%
                   rename(age = AGEBL, il6 = IL6BL)
      
        # Substitute the value of 'NA' to missing.
        dataset$il6[dataset$il6 %in% 'NA'] <- NA
      
        # Convert character values to numeric.
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="il6_1-fhs_gen3"></a>
  * ### inflammation/il6_1 -- **FHS_Gen3**:
    * 4 component_study_variables: `phs000007.v29.pht001043.v4.phv00080999.v3`, `phs000007.v29.pht001043.v4.phv00081000.v3`, `phs000007.v29.pht003099.v4.phv00177928.v4`, `phs000007.v29.pht003099.v4.phv00177930.v4`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        dataset <- left_join(phen_list$source_data$pht001043, phen_list$source_data$pht003099,
                             by = 'topmed_subject_id') %>%
                   rename(age = age1)
      
        #Converting to numeric values
        dataset <- mutate(dataset, il6 = as.numeric(il6), age = as.numeric(age))
      
        dataset <- subset(dataset, flag == 1 | flag == 2)
      
        # Select final variables
        dataset <- select(dataset, il6, age, topmed_subject_id)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="il6_1-fhs_newoffspringspouse_omni1"></a>
  * ### inflammation/il6_1 -- **FHS_NewOffspringSpouse_Omni1**:
    * 4 component_study_variables: `phs000007.v29.pht002891.v4.phv00172223.v4`, `phs000007.v29.pht003099.v4.phv00177928.v4`, `phs000007.v29.pht003099.v4.phv00177930.v4`, `phs000007.v29.pht003099.v4.phv00177934.v4`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        dataset <- left_join(phen_list$source_data$pht002891, phen_list$source_data$pht003099,
                             by = 'topmed_subject_id')
      
        dataset <- subset(dataset, idtype == "2" | idtype == "7")
      
        #Selecting correct age for visit
        dataset$age <- ifelse(dataset$idtype == "2", dataset$age1, dataset$age3)
      
        #Convert to numeric values
        dataset <- mutate(dataset, il6 = as.numeric(il6), age = as.numeric(age))
      
        #Select final variables
        dataset <- select(dataset, il6, age, topmed_subject_id)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="il6_1-fhs_offspring"></a>
  * ### inflammation/il6_1 -- **FHS_Offspring**:
    * 3 component_study_variables: `phs000007.v29.pht000161.v6.phv00023796.v5`, `phs000007.v29.pht003099.v4.phv00177928.v4`, `phs000007.v29.pht003099.v4.phv00177942.v4`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        dataset <- left_join(phen_list$source_data$pht000161, phen_list$source_data$pht003099,
                             by = 'topmed_subject_id') %>%
                   rename(age = age7)
      
        #Converting to numeric values
        dataset <- mutate(dataset, il6 = as.numeric(il6),
                          age = as.numeric(age))
      
        # Select final variables
        dataset <- select(dataset, il6, age, topmed_subject_id)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="il6_1-mesa"></a>
  * ### inflammation/il6_1 -- **MESA**:
    * 3 component_study_variables: `phs000209.v13.pht001116.v10.phv00084442.v3`, `phs000209.v13.pht001116.v10.phv00085009.v2`, `phs000209.v13.pht001116.v10.phv00085010.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset and rename variables
        dataset <- phen_list$source_data$pht001116 %>%
                   rename(il6 = il61,
                          il6_m = il61M,
                          age = age1c)
      
      
        # Substitute the value of 'NA' to missing
        dataset$age[dataset$age %in% 'NA'] <- NA
        dataset$il6[dataset$il6 %in% 'NA'] <- NA
        dataset$il6_m[dataset$il6_m %in% 'NA'] <- NA
      
        # Convert character values to numeric
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        #Assinging values to subjects outside of LOD
        dataset$il6[dataset$il6_m == -333] <- 0.09
        dataset$il6[dataset$il6_m == -555] <- 13.0
      
        # Select final variables
        dataset <- select(dataset, il6, age, topmed_subject_id)
      
        # Remove records with NAs from dataset
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="isoprostane_8_epi_pgf2a_1"></a>
## inflammation: **isoprostane_8_epi_pgf2a_1** (isoprostane_8_epi_pgf2a)
  Isoprostane 8-epi-prostaglandin F2 alpha (8-epi-PGF2a) concentration in urine.
  * **Harmonization Units**:
    * [FHS](#isoprostane_8_epi_pgf2a_1-fhs)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: pg / mL, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2019-04-15 15:35:36
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2018AB, `ID:` C2700042
  * **DCC Harmonization Comments**:

    This variable was harmonized by converting the component study variables to the appropriate unit of measure as needed and, when possible, accounting for measurements outside an assay's limits of detection (LOD). If the information was available, measurements below the lower limit of detection (LLOD) were set to the LLOD and measurements above the upper limit of detection (ULOD) were set to the ULOD unless otherwise indicated in the study-specific sections below. Some studies identified subjects with measurements outside the LOD; see table below for more details. The assay(s) used to measure 8-epi-PGF2a concentration differed by study and/or subcohort.
    
    #### FHS
    
    The *_FHS_* Offspring Cohort included a variable on dbGaP (phv00023802) indicating which lot the ELISA test was from. Lot differences in 8-epi-PGF2a concentrations were observed after adjusting for age and sex. 
    
    The *_FHS_* Original and New Offspring Spouse Cohorts are not included in this harmonized phenotype at this time.
    
    #### Exam visit for 8-epi-PGF2a measurements
    
    | Study or subcohort | Visit |
    |---------|----------|
    | FHS_Offspring | Exam 7 |
    | FHS_Gen3 | Exam 1 |
    | FHS_Omni1 | Exam 3 |
    | FHS_Omni2 | Exam 1 |
    
    #### Assay and limits of detection for 8-epi-PGF2a measurements
    
    | Study or subcohort | Assay | LLOD | ULOD^1^ | Differentiated^2^ |
    |---------|----------|---------|---------|---------|
    | FHS _Offspring | ELISA | 3.0 pg/mL | 500 pg/mL  | No |
    | FHS_Gen3 | ELISA | 0.8 pg/mL | 500 pg/mL | No |
    | FHS_Omni1 | ELISA | 2.7 pg/mL | 500 pg/mL  | No |
    | FHS_Omni2 | ELISA | 0.8 pg/mL | 500 pg/mL | No |
    
    1. Values over the ULOD are valid and were obtained by dilution.
    2. The study included information indicating which measurements were below or above the limit of detection. If "Yes", measurements outside the LOD can be identified using component study or subcohort variables.
    
    #### Specimen type for 8-epi-PGF2a measurements
    
    Table includes studies or subcohorts with known specimen types only.
    
    | Study or subcohort | Specimen |
    |---------|----------|
    | FHS | Urine |
    
<a id="isoprostane_8_epi_pgf2a_1-fhs"></a>
  * ### inflammation/isoprostane_8_epi_pgf2a_1 -- **FHS**:
    * 7 component_study_variables: `phs000007.v29.pht000162.v6.phv00023800.v5`, `phs000007.v29.pht002852.v2.phv00171864.v2`, `phs000007.v29.pht002853.v4.phv00171873.v4`, `phs000007.v29.pht003099.v4.phv00177928.v4`, `phs000007.v29.pht003099.v4.phv00177930.v4`, `phs000007.v29.pht003099.v4.phv00177934.v4`, `phs000007.v29.pht003099.v4.phv00177942.v4`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Datasets
        ##Offspring (exam 7)
        iso_of <- left_join(phen_list$source_data$pht000162,
                            phen_list$source_data$pht003099,
                            by = 'topmed_subject_id') %>%
                  select(topmed_subject_id, isoprostane_8_epi_pgf2a = iso, age = age7)
      
        ##Generation 3 / OMNI 2 (exam 1)
        iso_g3o2 <- left_join(phen_list$source_data$pht002852,
                              phen_list$source_data$pht003099,
                              by = 'topmed_subject_id') %>%
                    select(topmed_subject_id, isoprostane_8_epi_pgf2a = conc1, age = age1)
      
        ##Omni 1 - removing Offspring (exam 8)
        iso_o1 <- left_join(phen_list$source_data$pht002853,
                            phen_list$source_data$pht003099,
                            by = 'topmed_subject_id') %>%
                  subset(idtype == 7) %>%
                  select(topmed_subject_id, isoprostane_8_epi_pgf2a = res1, age = age3)
      
        ##Combining datasets
        dataset <- bind_rows(iso_of, iso_g3o2)
        dataset <- bind_rows(dataset, iso_o1)
      
        #Converting to numeric variables
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="lppla2_act_1"></a>
## inflammation: **lppla2_act_1** (lppla2_act)
  Activity of lipoprotein-associated phospholipase A2 (LP-PLA2), also known as platelet-activating factor acetylhydrolase, measured in blood.
  * **Harmonization Units**:
    * [CHS](#lppla2_act_1-chs)
    * [FHS](#lppla2_act_1-fhs)
    * [MESA](#lppla2_act_1-mesa)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: nmol / min / mL, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2019-04-15 15:38:09
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2018AB, `ID:` C4531983
  * **DCC Harmonization Comments**:

    This variable was harmonized by converting the component study variables to the appropriate unit of measure as needed and, when possible, accounted for measurements outside an assay's limits of detection (LOD). If the information was available, measurements below the lower limit of detection (LLOD) were set to the LLOD and measurements above the upper limit of detection (ULOD) were set to the ULOD unless otherwise indicated in the study-specific sections below. Some studies identified subjects with measurements outside the LOD; see table below for more details. The assay(s) used to measure LP-PLA2 activity from serum or plasma differed by study and/or subcohort.
    
    #### FHS
    
    The *_FHS_* Omni 1 Cohort included a variable on dbGaP (phv00172228) indicating which plate a sample was assayed on. No plate differences in LP-PLA2 activity were observed after adjusting for age and sex.
    
    The *_FHS_* Original, New Offspring Spouse, and Omni 2 Cohorts are not included in this harmonized phenotype at this time.
    
    #### MESA
    
    The *_MESA_* Family and AirNR Cohorts are not included in this harmonized phenotype at this time.
    
    #### Exam visit for LP-PLA2 activity measurements
    
    | Study or subcohort | Visit |
    |---------|----------|
    | CHS_Original | Baseline visit |
    | CHS_AfricanAmerican | Baseline visit |
    | FHS_Offspring | Exam 7 |
    | FHS_Gen3 | Exam 1 |
    | FHS_Omni1 | Exam 3 |
    | MESA_Classic | Exam 1 Main |
    
    #### Assay and limits of detection for LP-PLA2 activity measurements
    
    | Study or subcohort | Assay | LLOD | ULOD^1^ | Differentiated^2^ |
    |---------|----------|---------|---------|---------|
    | CHS | Tritiated PAF activity assay | NA | NA | No |
    | FHS | ELISA | 2.0 nmol/min/mL | 300.0 nmol/min/mL | No |
    | MESA | High-throughput radiometric assay | NA | NA | No |
    
    1. Values over the ULOD are valid and were obtained by dilution.
    2. The study included information indicating which measurements were below or above the limit of detection. If "Yes", measurements outside the LOD can be identified using component study or subcohort variables.
    
    #### Specimen type for LP-PLA2 activity measurements
    
    Table includes studies or subcohorts with known specimen types only.
    
    | Study or subcohort | Specimen |
    |---------|----------|
    | CHS | Plasma |
    | FHS | Plasma |
    | MESA | Serum |
    
<a id="lppla2_act_1-chs"></a>
  * ### inflammation/lppla2_act_1 -- **CHS**:
    * 2 component_study_variables: `phs000287.v6.pht001449.v1.phv00098770.v1`, `phs000287.v6.pht001452.v1.phv00100487.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Dataset
        dataset <- left_join(phen_list$source_data$pht001449,
                             phen_list$source_data$pht001452,
                             by = 'topmed_subject_id') %>%
                   rename(lppla2_act = LPPLA2AC, age = AGEBL)
      
        #Converting to numeric variables
        dataset <- replace(dataset, dataset == 'NA', NA)
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        #Removing missing values
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="lppla2_act_1-fhs"></a>
  * ### inflammation/lppla2_act_1 -- **FHS**:
    * 7 component_study_variables: `phs000007.v29.pht000164.v6.phv00023808.v5`, `phs000007.v29.pht000304.v5.phv00036408.v4`, `phs000007.v29.pht002892.v4.phv00172229.v4`, `phs000007.v29.pht003099.v4.phv00177928.v4`, `phs000007.v29.pht003099.v4.phv00177930.v4`, `phs000007.v29.pht003099.v4.phv00177934.v4`, `phs000007.v29.pht003099.v4.phv00177942.v4`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Datasets
        #Offspring exam 7
        offspring <- left_join(phen_list$source_data$pht000164,
                              phen_list$source_data$pht003099,
                              by = 'topmed_subject_id') %>%
                     select(topmed_subject_id, lppla2_act = Activity, age = age7)
      
        #Generation 3 exam 1
        gen3 <- left_join(phen_list$source_data$pht000304,
                               phen_list$source_data$pht003099,
                               by = 'topmed_subject_id') %>%
                select(topmed_subject_id, lppla2_act = Activity, age = age1)
      
        #Omni 1 exam 3
        omni1 <- left_join(phen_list$source_data$pht002892,
                           phen_list$source_data$pht003099,
                           by = 'topmed_subject_id') %>%
                 subset(idtype == 7) %>%
                 select(topmed_subject_id, lppla2_act = cam, age = age3)
      
        #Combined FHS data
        dataset <- bind_rows(offspring, gen3) %>%
                   bind_rows(omni1)
      
        #Converting to numeric variables
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="lppla2_act_1-mesa"></a>
  * ### inflammation/lppla2_act_1 -- **MESA**:
    * 2 component_study_variables: `phs000209.v13.pht001116.v10.phv00084442.v3`, `phs000209.v13.pht002512.v1.phv00165052.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Dataset
        dataset <- left_join(phen_list$source_data$pht002512,
                             phen_list$source_data$pht001116,
                             by = 'topmed_subject_id') %>%
                     rename(lppla2_act = cam1a,
                            age = age1c)
      
        #Converting to numeric variables
        dataset <- replace(dataset, dataset == 'NA', NA)
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        #Removing numeric values
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="lppla2_mass_1"></a>
## inflammation: **lppla2_mass_1** (lppla2_mass)
  Mass of lipoprotein-associated phospholipase A2 (LP-PLA2), also known as platelet-activating factor acetylhydrolase, measured in blood.
  * **Harmonization Units**:
    * [CHS](#lppla2_mass_1-chs)
    * [FHS](#lppla2_mass_1-fhs)
    * [MESA](#lppla2_mass_1-mesa)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: ng / mL, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2019-04-15 15:40:39
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2018AB, `ID:` C1543846
  * **DCC Harmonization Comments**:

    This variable was harmonized by converting the component study variables to the appropriate unit of measure as needed and, when possible, accounting for measurements outside an assay's limits of detection (LOD). If the information was available, measurements below the lower limit of detection (LLOD) were set to the LLOD and measurements above the upper limit of detection (ULOD) were set to the ULOD unless otherwise indicated in the study-specific sections below. Some studies identified subjects with measurements outside the LOD; see table below for more details. The assay(s) used to measure LP-PLA2 mass from serum or plasma differed by study and/or subcohort.
    
    #### FHS
    
    The *_FHS_* Omni 1 Cohort included a variable on dbGaP (phv00172226) indicating which plate a sample was assayed on. Plate differences in LP-PLA2 mass were observed after adjusting for age and sex. 
    
    The *_FHS_* Original, New Offspring Spouse, and Omni 2 Cohorts are not included in this harmonized phenotype at this time.
    
    #### MESA
    
    A variable (phv00165048) indicating which plate a sample was assayed on is available on dbGaP. Plate differences in LP-PLA2 concentrations were observed after adjusting for age and sex. 
    
    The *_MESA_* Family and AirNR Cohorts are not included in this harmonized phenotype at this time.
    
    #### Exam visit for LP-PLA2 mass measurements
    
    | Study or subcohort | Visit |
    |---------|----------|
    | CHS_Original | Baseline visit |
    | CHS_AfricanAmerican | Baseline visit |
    | FHS_Offspring | Exam 7 |
    | FHS_Gen3 | Exam 1 |
    | FHS_Omni1 | Exam 3 |
    | MESA_Classic | Exam 1 Main |
    
    #### Assay and limits of detection for LP-PLA2 mass measurements
    
    | Study or subcohort | Assay | LLOD | ULOD | Differentiated^1^ |
    |---------|----------|---------|---------|---------|
    | CHS | ELISA | 1.3 ng/mL |  NA  | No |
    | FHS| ELISA | 1.3 ng/mL |  NA  | No |
    | MESA | ELISA | 0.34 ng/mL | NA | No |
    
    1. The study included information indicating which measurements were below or above the limit of detection. If "Yes", measurements outside the LOD can be identified using component study or subcohort variables.
    
    #### Specimen type for LP-PLA2 mass measurements
    
    Table includes studies or subcohorts with known specimen types only.
    
    | Study or subcohort | Specimen |
    |---------|----------|
    | CHS | Plasma |
    | FHS | Plasma |
    | MESA | Serum |
    
<a id="lppla2_mass_1-chs"></a>
  * ### inflammation/lppla2_mass_1 -- **CHS**:
    * 2 component_study_variables: `phs000287.v6.pht001449.v1.phv00098769.v1`, `phs000287.v6.pht001452.v1.phv00100487.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Dataset
        dataset <- left_join(phen_list$source_data$pht001449,
                             phen_list$source_data$pht001452,
                             by = 'topmed_subject_id') %>%
                   rename(lppla2_mass = LPPLA2, age = AGEBL)
      
        #Converting to numeric varaibles
        dataset <- replace(dataset, dataset == 'NA', NA) %>%
                   mutate_if(is.character, as.numeric)
      
        #Removing missing values
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="lppla2_mass_1-fhs"></a>
  * ### inflammation/lppla2_mass_1 -- **FHS**:
    * 7 component_study_variables: `phs000007.v29.pht000095.v6.phv00021963.v5`, `phs000007.v29.pht000305.v5.phv00036411.v4`, `phs000007.v29.pht002892.v4.phv00172227.v4`, `phs000007.v29.pht003099.v4.phv00177928.v4`, `phs000007.v29.pht003099.v4.phv00177930.v4`, `phs000007.v29.pht003099.v4.phv00177934.v4`, `phs000007.v29.pht003099.v4.phv00177942.v4`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Datasets
        #Offspring, exam 7
        lppla_of <- left_join(phen_list$source_data$pht000095,
                              phen_list$source_data$pht003099,
                              by = 'topmed_subject_id') %>%
                    select(topmed_subject_id, lppla2_mass = MASS, age = age7)
      
        #Generation 3, exam 1
        lppla_g3 <- left_join(phen_list$source_data$pht000305,
                              phen_list$source_data$pht003099,
                              by = 'topmed_subject_id') %>%
                    select(topmed_subject_id, lppla2_mass = mass, age = age1)
      
        #OMNI1, exam 3
        lppla_o1 <- left_join(phen_list$source_data$pht002892,
                              phen_list$source_data$pht003099,
                              by = 'topmed_subject_id') %>%
                    subset(idtype == 7) %>%
                    select(topmed_subject_id, lppla2_mass = plac, age = age3)
      
        #Combining subcohorts
        dataset <- bind_rows(lppla_of, lppla_g3) %>%
                   bind_rows(lppla_o1)
      
        #Converting to numeric variables
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="lppla2_mass_1-mesa"></a>
  * ### inflammation/lppla2_mass_1 -- **MESA**:
    * 2 component_study_variables: `phs000209.v13.pht001116.v10.phv00084442.v3`, `phs000209.v13.pht002512.v1.phv00165050.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Dataset
        dataset <- left_join(phen_list$source_data$pht002512,
                            phen_list$source_data$pht001116,
                            by = 'topmed_subject_id') %>%
                    rename(lppla2_mass = plac1a, age = age1c)
      
        #Converting to numeric
        dataset <- replace(dataset, dataset == 'NA', NA)
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        #Removing missing values
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="mcp1_1"></a>
## inflammation: **mcp1_1** (mcp1)
  Monocyte chemoattractant protein-1 (MCP1), also known as C-C motif chemokine ligand 2, concentration in blood.
  * **Harmonization Units**:
    * [FHS_Gen3_Offspring](#mcp1_1-fhs_gen3_offspring)
    * [FHS_NewOffspringSpouse_Omni1](#mcp1_1-fhs_newoffspringspouse_omni1)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: pg / mL, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2019-04-15 15:43:07
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2018AB, `ID:` C0128897
  * **DCC Harmonization Comments**:

    This variable was harmonized by converting the component study variables to the appropriate unit of measure as needed and, when possible, accounting for measurements outside an assay's limits of detection (LOD). If the information was available, measurements below the lower limit of detection (LLOD) were set to the LLOD and measurements above the upper limit of detection (ULOD) were set to the ULOD unless otherwise indicated in the study-specific sections below. Some studies identified subjects with measurements outside the LOD; see table below for more details. The assay(s) used to measure MCP1 concentration from serum or plasma differed by study and/or subcohort.
    
    #### FHS
    
    The *_FHS_* New Offspring Spouse and Omni 1 Cohorts included a variable on dbGaP (phv00172235) indicating which plate a sample was assayed on. Plate differences in MCP1 concentrations were observed after adjusting for age and sex.  
    
    The *_FHS_* Original and Omni 2 Cohorts are not included in this harmonized phenotype at this time.
    
    #### Exam visit for MCP1 measurements
    
    | Study or subcohort | Visit |
    |---------|----------|
    | FHS_Offspring | Exam 7 |
    | FHS_NewOffspringSpouse | Exam 1 |
    | FHS_Gen3 | Exam 1 |
    | FHS_Omni1 | Exam 3 |
    
    #### Assay and limits of detection for MCP1 measurements
    
    | Study or subcohort | Assay | LLOD | ULOD | Differentiated^1^ |
    |---------|----------|---------|---------|---------|
    | FHS | ELISA | < 5.0 pg/mL |  NA  | No |
    
    1. The study included information indicating which measurements were below or above the limit of detection. If "Yes", measurements outside the LOD can be identified using component study or subcohort variables.
    
    #### Specimen type for MCP1 measurements
    
    Table includes studies or subcohorts with known specimen types only.
    
    | Study or subcohort | Specimen |
    |---------|----------|
    | FHS | Serum |
    
<a id="mcp1_1-fhs_gen3_offspring"></a>
  * ### inflammation/mcp1_1 -- **FHS_Gen3_Offspring**:
    * 4 component_study_variables: `phs000007.v29.pht000165.v6.phv00023811.v5`, `phs000007.v29.pht000306.v6.phv00036415.v4`, `phs000007.v29.pht003099.v4.phv00177930.v4`, `phs000007.v29.pht003099.v4.phv00177942.v4`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Dataset
        ##Offspring, exam 7
        mcp_of <- left_join(phen_list$source_data$pht000165,
                            phen_list$source_data$pht003099,
                            by = 'topmed_subject_id') %>%
                  select(topmed_subject_id, mcp1, age = age7)
        ##Generation 3, exam 1
        mcp_g3 <- left_join(phen_list$source_data$pht000306,
                            phen_list$source_data$pht003099,
                            by = 'topmed_subject_id') %>%
                  select(topmed_subject_id, mcp1, age = age1)
        ##Combined
        dataset <- bind_rows(mcp_of, mcp_g3)
      
        #Converting to numeric variables
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="mcp1_1-fhs_newoffspringspouse_omni1"></a>
  * ### inflammation/mcp1_1 -- **FHS_NewOffspringSpouse_Omni1**:
    * 4 component_study_variables: `phs000007.v29.pht002893.v4.phv00172239.v4`, `phs000007.v29.pht003099.v4.phv00177928.v4`, `phs000007.v29.pht003099.v4.phv00177930.v4`, `phs000007.v29.pht003099.v4.phv00177934.v4`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Dataset
        dataset <- left_join(phen_list$source_data$pht002893,
                             phen_list$source_data$pht003099,
                             by = 'topmed_subject_id')
      
        #Removing Offspring subcohort
        dataset <- subset(dataset, idtype == 2 | idtype == 7)
      
        #Assigning correct age for visit
        dataset$age <- ifelse(dataset$idtype == 2, dataset$age1, dataset$age3)
      
        #Select age and MCP1
        dataset <- select(dataset, topmed_subject_id, mcp1, age)
      
        #Converting to numeric variables
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="mmp9_1"></a>
## inflammation: **mmp9_1** (mmp9)
  Matrix metalloproteinase 9 (MMP9) concentration in blood.
  * **Harmonization Units**:
    * [MESA](#mmp9_1-mesa)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: ng / mL, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2019-04-15 15:45:19
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2018AB, `ID:` C2698028
  * **DCC Harmonization Comments**:

    This variable was harmonized by converting the component study variables to the appropriate unit of measure as needed and, when possible, accounting for measurements outside an assay's limits of detection (LOD). If the information was available, measurements below the lower limit of detection (LLOD) were set to the LLOD and measurements above the upper limit of detection (ULOD) were set to the ULOD unless otherwise indicated in the study-specific sections below. Some studies identified subjects with measurements outside the LOD; see table below for more details. The assay(s) used to measure MMP9 concentration from serum or plasma differed by study and/or subcohort.
    
    #### MESA 
    
    The *_MESA_* Family and AirNR Cohorts are not included in this harmonized phenotype at this time.
    
    #### Exam visit for MMP9 measurements
    
    | Study or subcohort | Visit |
    |---------|----------|
    | MESA_Classic | Exam 1 Main |
    
    #### Assay and limits of detection for MMP9 measurements
    
    | Study or subcohort | Assay | LLOD | ULOD^1^ | Differentiated^2^ |
    |---------|----------|---------|---------|---------|
    | MESA_Classic | ELISA | 12 ng/mL  | 800 ng/mL | No |
    
    1. Values over the ULOD are valid and were obtained by dilution.
    2. The study included information indicating which measurements were below or above the limit of detection. If "Yes", measurements outside the LOD can be identified using component study or subcohort variables.
    
<a id="mmp9_1-mesa"></a>
  * ### inflammation/mmp9_1 -- **MESA**:
    * 2 component_study_variables: `phs000209.v13.pht001116.v10.phv00084442.v3`, `phs000209.v13.pht001116.v10.phv00085027.v2`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        dataset <- phen_list$source_data$pht001116 %>%
                   rename(mmp9 = mmp91, age = age1c)
      
        # Converting to numeric values
        dataset$mmp9[dataset$mmp9 %in% 'NA'] <- NA
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Removing subjects with missing values
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="mpo_1"></a>
## inflammation: **mpo_1** (mpo)
  Myeloperoxidase (MPO) concentration in blood.
  * **Harmonization Units**:
    * [FHS](#mpo_1-fhs)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: ng / mL, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2019-04-15 15:47:50
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2018AB, `ID:` C2698399
  * **DCC Harmonization Comments**:

    This variable was harmonized by converting the component study variables to the appropriate unit of measure as needed and, when possible, accounting for measurements outside an assay's limits of detection (LOD). If the information was available, measurements below the lower limit of detection (LLOD) were set to the LLOD and measurements above the upper limit of detection (ULOD) were set to the ULOD unless otherwise indicated in the study-specific sections below. Some studies identified subjects with measurements outside the LOD; see table below for more details. The assay(s) used to measure MPO concentration from serum or plasma differed by study and/or subcohort.
    
    #### FHS
    
    The *_FHS_* Offspring Cohort included a variable on dbGaP (phv00023853) indicating which lot an assay material was associated with was used for the assay. Lot differences in MPO concentrations were observed after adjusting for age and sex. 
    
    The *_FHS_* Original, New Offspring Spouse, Generation 3, Omni 1, and Omni 2 Cohorts are not included in this harmonized phenotype at this time.
    
    #### Exam visit for MPO measurements
    
    | Study or subcohort | Visit |
    |---------|----------|
    | FHS_Offspring | Exam 7 |
    
    #### Assay and limits of detection for MPO measurements
    
    | Study or subcohort | Assay | LLOD | ULOD | Differentiated^1^ |
    |---------|----------|---------|---------|---------|
    | FHS_Offspring | ELISA | 0.17 ng/mL | NA | No |
    
    1. The study included information indicating which measurements were below or above the limit of detection. If "Yes", measurements outside the LOD can be identified using component study or subcohort variables.
    
    #### Specimen type for MPO measurements
    
    Table includes studies or subcohorts with known specimen types only.
    
    | Study or subcohort | Specimen |
    |---------|----------|
    | FHS | Serum |
    
<a id="mpo_1-fhs"></a>
  * ### inflammation/mpo_1 -- **FHS**:
    * 2 component_study_variables: `phs000007.v29.pht000167.v6.phv00023854.v5`, `phs000007.v29.pht003099.v4.phv00177942.v4`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Dataset
        dataset <- left_join(phen_list$source_data$pht000167,
                             phen_list$source_data$pht003099,
                             by = 'topmed_subject_id') %>%
                   rename(mpo = MPO, age = age7)
      
        #Converting to numeric variables
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="opg_1"></a>
## inflammation: **opg_1** (opg)
  Osteoprotegerin (OPG) concentration in blood.
  * **Harmonization Units**:
    * [FHS_Gen3_Omni2](#opg_1-fhs_gen3_omni2)
    * [FHS_Offspring_Omni1](#opg_1-fhs_offspring_omni1)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: pmol / L, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2019-04-15 15:50:07
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2018AB, `ID:` C1262886
  * **DCC Harmonization Comments**:

    This variable was harmonized by converting the component study variables to the appropriate unit of measure as needed and, when possible, accounting for measurements outside an assay's limits of detection (LOD). If the information was available, measurements below the lower limit of detection (LLOD) were set to the LLOD and measurements above the upper limit of detection (ULOD) were set to the ULOD unless otherwise indicated in the study-specific sections below. Some studies identified subjects with measurements outside the LOD; see table below for more details. The assay(s) used to measure OPG concentration from serum or plasma differed by study and/or subcohort.
    
    #### FHS
    
    All *_FHS_* cohorts included a variable on dbGaP (phv00172359 Offspring and Omni 1, phv00156659 Generation 3 and Omni 2) indicating which plate a sample was assayed on. Plate differences in OPG concentrations were observed for all cohorts after adjusting for age and sex. Additionally, a lot variable (phv00156669) is available for the Generation 3 and Omni 2 cohorts. 
    
    The *_FHS_* Original and New Offspring Spouse Cohorts are not included in this harmonized phenotype at this time.
    
    #### Exam visit for OPG measurements
    
    | Study or subcohort | Visit |
    |---------|----------|
    | FHS_Offspring | Exam 8 |
    | FHS_Gen3 | Exam 1 |
    | FHS_Omni1 | Exam 3 |
    | FHS_Omni2 | Exam 1 |
    
    #### Assay and limits of detection for OPG measurements
    
    | Study or subcohort | Assay | LLOD | ULOD | Differentiated^1^ |
    |---------|----------|---------|---------|---------|
    | FHS_Offspring | ELISA | 0.14 pmol/L | NA | No |
    | FHS_Gen3 | ELISA | 0.14 pmol/L | NA | Yes |
    | FHS_Omni1 | ELISA | 0.14 pmol/L | NA | No |
    | FHS_Omni2 | ELISA | 0.14 pmol/L | NA | Yes |
    
    1. The study included information indicating which measurements were below or above the limit of detection. If "Yes", measurements outside the LOD can be identified using component study or subcohort variables.
    
    #### Specimen type for OPG measurements
    
    Table includes studies or subcohorts with known specimen types only.
    
    | Study or subcohort | Specimen |
    |---------|----------|
    | FHS_Offspring | Serum |
    | FHS_Gen3 | Plasma |
    | FHS_Omni1 | Serum |
    | FHS_Omni2 | Plasma |
    
<a id="opg_1-fhs_gen3_omni2"></a>
  * ### inflammation/opg_1 -- **FHS_Gen3_Omni2**:
    * 3 component_study_variables: `phs000007.v29.pht002144.v3.phv00156665.v3`, `phs000007.v29.pht002144.v3.phv00156666.v3`, `phs000007.v29.pht003099.v4.phv00177930.v4`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Dataset
        dataset <- left_join(phen_list$source_data$pht002144,
                             phen_list$source_data$pht003099,
                             by = 'topmed_subject_id') %>%
                   rename(age = age1)
      
        #Converting to numeric variables
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        #Removing phantom samples
        dataset <- subset(dataset, flag == 1 | flag == 2)
      
        #Setting values below LOD to LLOD
        dataset$opg[dataset$opg == 0.13] <- 0.14
      
        #Selecting variables
        dataset <- select(dataset, topmed_subject_id, opg, age)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="opg_1-fhs_offspring_omni1"></a>
  * ### inflammation/opg_1 -- **FHS_Offspring_Omni1**:
    * 4 component_study_variables: `phs000007.v29.pht002896.v4.phv00172364.v4`, `phs000007.v29.pht003099.v4.phv00177928.v4`, `phs000007.v29.pht003099.v4.phv00177934.v4`, `phs000007.v29.pht003099.v4.phv00177944.v4`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Dataset
        dataset <- left_join(phen_list$source_data$pht002896,
                             phen_list$source_data$pht003099,
                             by = 'topmed_subject_id')
      
        #Selecting correct age
        dataset$age <- ifelse(dataset$idtype == 1, dataset$age8, dataset$age3)
      
        #Selecting variables
        dataset <- select(dataset, topmed_subject_id, opg, age)
      
        #Converting to numeric variables
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="pselectin_1"></a>
## inflammation: **pselectin_1** (pselectin)
  P-selectin concentration in blood.
  * **Harmonization Units**:
    * [FHS_Gen3_Omni2](#pselectin_1-fhs_gen3_omni2)
    * [FHS_Offspring](#pselectin_1-fhs_offspring)
    * [FHS_Omni1](#pselectin_1-fhs_omni1)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: ng / mL, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2019-04-15 15:52:08
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2018AB, `ID:` C3890352
  * **DCC Harmonization Comments**:

    This variable was harmonized by converting the component study variables to the appropriate unit of measure as needed and, when possible, accounting for measurements outside an assay's limits of detection (LOD). If the information was available, measurements below the lower limit of detection (LLOD) were set to the LLOD and measurements above the upper limit of detection (ULOD) were set to the ULOD unless otherwise indicated in the study-specific sections below. Some studies identified subjects with measurements outside the LOD; see table below for more details. The assay(s) used to measure P-selectin concentration from serum or plasma differed by study and/or subcohort.
    
    #### FHS
    
    The *_FHS_* Omni 1 Cohort included a variable on dbGaP (phv00172367) indicating which plate a sample was assayed on. Plate differences in P-selectin concentrations were observed after adjusting for age and sex. 
    
    The *_FHS_* Original and New Offspring Spouse Cohorts are not included in this harmonized phenotype at this time.
    
    #### Exam visit for P-selectin measurements
    
    | Study or subcohort | Visit |
    |---------|----------|
    | FHS_Offspring | Exam 7 |
    | FHS_Gen3 | Exam 1 |
    | FHS_Omni1 | Exam 3 |
    | FHS_Omni2 | Exam 1 |
    
    #### Assay and limits of detection for P-selectin measurements
    
    | Study or subcohort | Assay | LLOD | ULOD | Differentiated^1^ |
    |---------|----------|---------|---------|---------|
    | FHS_Offspring | ELISA | 0.5 ng/mL | NA | No |
    | FHS_Gen3 | ELISA | 0.5 ng/mL | NA  | Yes |
    | FHS_Omni1 | ELISA | 0.5 ng/mL | NA  | Yes |
    | FHS_Omni2 | ELISA | 0.5 ng/mL | NA  | Yes |
    
    1. The study included information indicating which measurements were below or above the limit of detection. If "Yes", measurements outside the LOD can be identified using component study or subcohort variables.
    
    
    #### Specimen type for P-selectin measurements
    
    Table includes studies or subcohorts with known specimen types only.
    
    | Study or subcohort | Specimen |
    |---------|----------|
    | FHS | Plasma |
    
<a id="pselectin_1-fhs_gen3_omni2"></a>
  * ### inflammation/pselectin_1 -- **FHS_Gen3_Omni2**:
    * 3 component_study_variables: `phs000007.v29.pht002145.v3.phv00156677.v3`, `phs000007.v29.pht002145.v3.phv00156678.v3`, `phs000007.v29.pht003099.v4.phv00177930.v4`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Datasets
        dataset <- left_join(phen_list$source_data$pht002145,
                                  phen_list$source_data$pht003099,
                                  by = 'topmed_subject_id') %>%
                        rename(age = age1)
      
        #Removing phantom samples (flag = 3)
        dataset <- subset(dataset, flag == 1 | flag == 2)
      
        #Converting to numeric values
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        #Selecting final variables
        dataset <- select(dataset, topmed_subject_id, pselectin, age)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="pselectin_1-fhs_offspring"></a>
  * ### inflammation/pselectin_1 -- **FHS_Offspring**:
    * 2 component_study_variables: `phs000007.v29.pht000171.v6.phv00023892.v5`, `phs000007.v29.pht003099.v4.phv00177942.v4`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #dataset
        dataset <- left_join(phen_list$source_data$pht000171, phen_list$source_data$pht003099) %>%
                   rename(pselectin = psel, age = age7)
      
        #Changing to numeric variables
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="pselectin_1-fhs_omni1"></a>
  * ### inflammation/pselectin_1 -- **FHS_Omni1**:
    * 3 component_study_variables: `phs000007.v29.pht002897.v4.phv00172372.v4`, `phs000007.v29.pht003099.v4.phv00177928.v4`, `phs000007.v29.pht003099.v4.phv00177934.v4`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Datasets
        dataset <- left_join(phen_list$source_data$pht002897,
                               phen_list$source_data$pht003099,
                               by = 'topmed_subject_id') %>%
                      rename(age = age3) %>%
                      subset(idtype == 7)
      
        #Converting to numeric values
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        #Selecting final variables
        dataset <- select(dataset, topmed_subject_id, pselectin, age)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="tnfa_1"></a>
## inflammation: **tnfa_1** (tnfa)
  Tumor necrosis factor alpha (TNFa) concentration in blood.
  * **Harmonization Units**:
    * [CFS](#tnfa_1-cfs)
    * [FHS](#tnfa_1-fhs)
    * [MESA](#tnfa_1-mesa)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: pg / mL, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2019-04-15 15:54:39
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2018AB, `ID:` C1168005
  * **DCC Harmonization Comments**:

    This variable was harmonized by converting the component study variables to the appropriate unit of measure as needed and, when possible, accounting for measurements outside an assay's limits of detection (LOD). If the information was available, measurements below the lower limit of detection (LLOD) were set to the LLOD and measurements above the upper limit of detection (ULOD) were set to the ULOD unless otherwise indicated in the study-specific sections below. Some studies identified subjects with measurements outside the LOD; see table below for more details. The assay(s) used to measure TNFa concentration from serum or plasma differed by study and/or subcohort.
    
    #### CFS
    
    The study identified values with low concentrations that had been extrapolated outside the assay range. These extrapolated values were set to the LLOD.
    
    #### FHS
    
    The *_FHS_* Original, New Offspring Spouse, Generation 3, Omni 1, and Omni 2 Cohorts are not included in this harmonized phenotype at this time.
    
    #### MESA
    
    Measurements indicated as low or high were set to 0.16 pg/mL or 12.0 pg/mL, respectively, based on encoded values in the indicator variable (phv00160541). These values differed from the detection limits of the assay.
    
    The *_MESA_* Family and AirNR Cohorts are not included in this harmonized phenotype at this time.
    
    #### Exam visit for TNFa measurements
    
    | Study or subcohort | Visit |
    |---------|----------|
    | CFS | Visit 5 |
    | FHS_Offspring | Exam 7 |
    | MESA_Classic | Exam 2 or 3^1^ |
    
    1. TNFa was measured for an ancillary study that included randomly selected MESA Classic subjects during exams 2 and 3. No subjects were selected more than once in the ancillary study.
    
    #### Assay and limits of detection for TNFa measurements
    
    | Study or subcohort | Assay | LLOD | ULOD | Differentiated^1^ |
    |---------|----------|---------|---------|---------|
    | CFS | Human Serum Adipokine Panel B | 0.06 pg/mL |  NA  | Yes |
    | | LINCOplex Kit | | | |
    | FHS_Offspring | ELISA | 0.06-0.32 pg/mL |  NA  | No |
    | MESA_Classic | Millipore Panel B, Luminex | 0.13 pg/mL | 10000 pg/mL | Yes |
    
    1. The study included information indicating which measurements were below or above the limit of detection. If "Yes", measurements outside the LOD can be identified using component study or subcohort variables.
    
    #### Specimen type for TNFa measurements
    
    Table includes studies or subcohorts with known specimen types only.
    
    | Study or subcohort | Specimen |
    |---------|----------|
    | CFS | Serum |
    | FHS | Plasma |
    | MESA | Serum |
    
<a id="tnfa_1-cfs"></a>
  * ### inflammation/tnfa_1 -- **CFS**:
    * 4 component_study_variables: `phs000284.v1.pht001902.v1.phv00122012.v1`, `phs000284.v1.pht001902.v1.phv00122015.v1`, `phs000284.v1.pht001902.v1.phv00124076.v1`, `phs000284.v1.pht001902.v1.phv00124079.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Data
        dataset <- phen_list$source_data$pht001902 %>%
                   rename(tnfa = tnfaam, tnfa_comment = tnfaam_comment)
      
        #Subset to visit 5
        dataset <- subset(dataset, visit == 5)
      
        #Converting age and tnfa to numeric
        dataset$tnfa[dataset$tnfa %in% 'NA'] <- NA
        dataset <- mutate(dataset, tnfa = as.numeric(tnfa), age = as.numeric(age))
      
        #Chaning extrapolated values to LLOD
        dataset$tnfa[dataset$tnfa_comment %in% 'extrapolated'] <- 0.06
      
        #Selecting final varaibles and removing missing
        dataset <- select(dataset, topmed_subject_id, tnfa, age)
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="tnfa_1-fhs"></a>
  * ### inflammation/tnfa_1 -- **FHS**:
    * 2 component_study_variables: `phs000007.v29.pht000111.v5.phv00022779.v4`, `phs000007.v29.pht003099.v4.phv00177942.v4`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset and rename variables
        dataset <- left_join(phen_list$source_data$pht000111,
                             phen_list$source_data$pht003099,
                             by = 'topmed_subject_id') %>%
                   rename(tnfa = tnf7, age = age7)
      
        # Convert character values to numeric
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="tnfa_1-mesa"></a>
  * ### inflammation/tnfa_1 -- **MESA**:
    * 5 component_study_variables: `phs000209.v13.pht001118.v8.phv00085773.v3`, `phs000209.v13.pht001119.v8.phv00086259.v4`, `phs000209.v13.pht002198.v2.phv00160529.v1`, `phs000209.v13.pht002198.v2.phv00160540.v1`, `phs000209.v13.pht002198.v2.phv00160541.v1`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        # Get dataset and rename variables
        dataset <- left_join(phen_list$source_data$pht002198,
                             phen_list$source_data$pht001118,
                             by = 'topmed_subject_id')
        dataset <- left_join(dataset,
                   phen_list$source_data$pht001119,
                   by = 'topmed_subject_id') %>%
                   rename(tnfa = tnfa3,
                          tnfa_m = tnfa3m,
                          exam = exam3,
                          age2 = age2c,
                          age3 = age3c)
      
        #Selecting correct age for visit
        dataset$age <- ifelse(dataset$exam == 2, dataset$age2, dataset$age3)
      
        # Substitute the value of 'NA' to missing
        dataset$tnfa[dataset$tnfa %in% 'NA'] <- NA
        dataset$tnfa_m[dataset$tnfa_m %in% 'NA'] <- NA
        dataset$age[dataset$age %in% 'NA'] <- NA
      
        # Convert character values to numeric
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        #Assign values to tnfa_m = -333 or tnfa_m = -555
        dataset$tnfa[dataset$tnfa_m == -333] <- 0.16
        dataset$tnfa[dataset$tnfa_m == -555] <- 12.0
      
        # Select final variables
        dataset <- select(dataset, tnfa, age, topmed_subject_id)
      
        # Remove records with NAs from dataset
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="tnfa_r1_1"></a>
## inflammation: **tnfa_r1_1** (tnfa_r1)
  Tumor necrosis factor alpha receptor 1 (TNFa-R1) concentration in blood.
  * **Harmonization Units**:
    * [MESA](#tnfa_r1_1-mesa)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: pg / mL, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2019-04-15 15:56:50
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2018AB, `ID:` C4050424
  * **DCC Harmonization Comments**:

    This variable was harmonized by converting the component study variables to the appropriate unit of measure as needed and, when possible, accounting for measurements outside an assay's limits of detection (LOD). If the information was available, measurements below the lower limit of detection (LLOD) were set to the LLOD and measurements above the upper limit of detection (ULOD) were set to the ULOD unless otherwise indicated in the study-specific sections below. Some studies identified subjects with measurements outside the LOD; see table below for more details. The assay(s) used to measure TNFa-R1 concentration from serum or plasma differed by study and/or subcohort.
    
    #### MESA
    
    Values above the original assay ULOD (500 pg/mL) are valid and were assayed after dilution. Values that continued to be above the ULOD after dilution as indicated by the study were set to a 10-fold diluted ULOD (5000 pg/mL). 
    
    The *_MESA_* Family and AirNR Cohorts are not included in this harmonized phenotype at this time.
    
    #### Exam visit for TNFa-R1 measurements
    
    | Study or subcohort | Visit |
    |---------|----------|
    | MESA_Classic | Exam 1 Main |
    
    #### Assay and limits of detection for TNFa-R1 measurements
    
    | Study or subcohort | Assay | LLOD | ULOD^1^ | Differentiated^2^ |
    |---------|----------|---------|---------|---------|
    | MESA_Classic | ELISA | 6.03 pg/mL | 500 pg/mL | Yes |
    
    1. Values over the ULOD are valid and were obtained by dilution.
    2. The study included information indicating which measurements were below or above the limit of detection. If "Yes", measurements outside the LOD can be identified using component study or subcohort variables.
    
    #### Specimen type for TNFa-R1 measurements
    
    Table includes studies or subcohorts with known specimen types only.
    
    | Study or subcohort | Specimen |
    |---------|----------|
    | MESA | Serum |
    
<a id="tnfa_r1_1-mesa"></a>
  * ### inflammation/tnfa_r1_1 -- **MESA**:
    * 2 component_study_variables: `phs000209.v13.pht001116.v10.phv00084442.v3`, `phs000209.v13.pht001116.v10.phv00085029.v3`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Dataset
        dataset <- phen_list$source_data$pht001116 %>%
                   rename(tnfa_r1 = tnfri1, age = age1c)
      
        #Changing to numeric values
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        #Samples with insufficient volume --> NA
        dataset$tnfa_r1[dataset$tnfa_r1 == -888] <- NA
      
        #Sample above the ULOD --> 5000
        dataset$tnfa_r1[dataset$tnfa_r1 == -555] <- 5000
      
        #Removing missing values
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```
<a id="tnfr2_1"></a>
## inflammation: **tnfr2_1** (tnfr2)
  Tumor necrosis factor receptor 2 (TNFR2) concentration in blood.
  * **Harmonization Units**:
    * [FHS](#tnfr2_1-fhs)
  * **Metadata**:
    **`Data Type`**: decimal, **`Measurement Units`**: pg / mL, **`Version`**: 1, **`Has Age Variable`**: Yes, **`Date Harmonized`**: 2019-04-15 16:03:21
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2018AB, `ID:` C3897554
  * **DCC Harmonization Comments**:

    This variable was harmonized by converting the component study variables to the appropriate unit of measure as needed and, when possible, accounting for measurements outside an assay's limits of detection (LOD). If the information was available, measurements below the lower limit of detection (LLOD) were set to the LLOD and measurements above the upper limit of detection (ULOD) were set to the ULOD unless otherwise indicated in the study-specific sections below. Some studies identified subjects with measurements outside the LOD; see table below for more details. The assay(s) used to measure TNFR2 concentration from serum or plasma differed by study and/or subcohort.
    
    #### FHS
    
    The *_FHS_* Omni 1 Cohort included a variable on dbGaP (phv00172386) indicating which plate a sample was assayed on. Plate differences in TNFR2 concentrations were observed after adjusting for age and sex. 
    
    The *_FHS_* Original and New Offspring Spouse Cohorts are not included in this harmonized phenotype at this time.
    
    #### Exam visit for TNFR2 measurements
    
    | Study or subcohort | Visit |
    |---------|----------|
    | FHS_Offspring | Exam 7 |
    | FHS_Gen3 | Exam 1 |
    | FHS_Omni1 | Exam 3 |
    | FHS_Omni2 | Exam 1 |
    
    #### Assay and limits of detection for TNFR2 measurements
    
    | Study or subcohort | Assay | LLOD | ULOD | Differentiated^1^ |
    |---------|----------|---------|---------|---------|
    | FHS_Offspring | ELISA | 0.2 pg/mL |  NA | No | 
    | FHS_Gen3 | ELISA | 0.6 pg/mL |  NA  | No | 
    | FHS_Omni1 | ELISA | 0.2 pg/mL |  NA | No |
    | FHS_Omni2 | ELISA | 0.6 pg/mL |  NA  | No |
    
    1. The study included information indicating which measurements were below or above the limit of detection. If "Yes", measurements outside the LOD can be identified using component study or subcohort variables.
    
    #### Specimen type for TNFR2 measurements
    
    Table includes studies or subcohorts with known specimen types only.
    
    | Study or subcohort | Specimen |
    |---------|----------|
    | FHS | Plasma |
    
<a id="tnfr2_1-fhs"></a>
  * ### inflammation/tnfr2_1 -- **FHS**:
    * 7 component_study_variables: `phs000007.v29.pht000175.v6.phv00023913.v5`, `phs000007.v29.pht002898.v2.phv00172383.v2`, `phs000007.v29.pht002899.v4.phv00172391.v4`, `phs000007.v29.pht003099.v4.phv00177928.v4`, `phs000007.v29.pht003099.v4.phv00177930.v4`, `phs000007.v29.pht003099.v4.phv00177934.v4`, `phs000007.v29.pht003099.v4.phv00177942.v4`
    * Function:
      ```r
      harmonize <- function(phen_list){
        library(dplyr)
      
        #Datasets
        #Offspring
        of_tnfr2 <- left_join(phen_list$source_data$pht000175,
                              phen_list$source_data$pht003099,
                              by = 'topmed_subject_id') %>%
                    select(topmed_subject_id, tnfr2, age = age7)
      
        #Generation 3 and Omni 2
        g3o2_tnfr2 <- left_join(phen_list$source_data$pht002898,
                                phen_list$source_data$pht003099,
                                by = 'topmed_subject_id') %>%
                      select(topmed_subject_id, tnfr2 = tnfr, age = age1)
      
        #Omni 1, remove Offspring
        o1_tnfr2 <- left_join(phen_list$source_data$pht002899,
                              phen_list$source_data$pht003099,
                              by = 'topmed_subject_id') %>%
                    subset(idtype == 7) %>%
                    select(topmed_subject_id, tnfr2 = tnf, age = age3)
      
        #Combined dataset
        dataset <- bind_rows(of_tnfr2, g3o2_tnfr2) %>%
                   bind_rows(o1_tnfr2)
      
        #Converting to numeric variables
        dataset <- mutate_if(dataset, is.character, as.numeric)
      
        # Remove records with NAs from dataset.
        dataset <- na.omit(dataset)
      
        return(dataset)
      }
      ```