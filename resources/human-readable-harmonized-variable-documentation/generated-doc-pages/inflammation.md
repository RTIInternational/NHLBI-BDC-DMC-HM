
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
  * ### inflammation/cd40_1 -- **FHS Framingham Cohort**:
    * 2 component_study_variables
      * _phs000007.v29.pht000079.v6.phv00021687.v5_. No dbGap metadata available.
      * _phs000007.v29.pht003099.v4.phv00177942.v4_. dbGap Name: **age7**, Desc: **Age at Exam 7**, Table: **vr_dates_2019_a_1175s**.
    * **Function:**
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
  * ### inflammation/cd40_1 -- **MESA Multi-Ethnic Study of Atherosclerosis (MESA) Cohort**:
    * 2 component_study_variables
      * _phs000209.v13.pht001116.v10.phv00084442.v3_. dbGap Name: **age1c**, Desc: **AGE**, Table: **MESA_Exam1Main**.
      * _phs000209.v13.pht001116.v10.phv00085021.v2_. dbGap Name: **cd40l1**, Desc: **CD40 LIGAND (pg/mL)**, Table: **MESA_Exam1Main**.
    * **Function:**
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
    * [ARIC](#crp_1-aric)
    * [CARDIA](#crp_1-cardia)
    * [CHS](#crp_1-chs)
    * [HCHS_SOL](#crp_1-hchs_sol)
    * [JHS](#crp_1-jhs)
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
    
<a id="crp_1-aric"></a>
  * ### inflammation/crp_1 -- **ARIC Atherosclerosis Risk in Communities (ARIC) Cohort**:
    * 2 component_study_variables
      * _phs000280.v4.pht006431.v1.phv00295623.v1_. No dbGap metadata available.
      * _phs000280.v4.pht006444.v1.phv00296696.v1_. dbGap Name: **LIP33**, Desc: **High sensitive C reactive protein [Central Lab Data]**, Table: **LIP**.
    * **Function:**
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
  * ### inflammation/crp_1 -- **CARDIA CARDIA Cohort**:
    * 2 component_study_variables
      * _phs000285.v3.pht001851.v2.phv00120748.v2_. dbGap Name: **EX6_AGE**, Desc: **CALCULATED AGE AT EXAM 6**, Table: **F1REF**.
      * _phs000285.v3.pht001853.v2.phv00120759.v2_. dbGap Name: **FL6CRPBN**, Desc: **RERUN CRP (uG/ml - BNII METHOD)**, Table: **F2CRP**.
    * **Function:**
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
<a id="crp_1-chs"></a>
  * ### inflammation/crp_1 -- **CHS Cardiovascular Health Study (CHS) Cohort: an NHLBI-funded observational study of risk factors for cardiovascular disease in adults 65 years or older**:
    * 2 component_study_variables
      * _phs000287.v6.pht001452.v1.phv00100487.v1_. dbGap Name: **AGEBL**, Desc: **CALCULATED AGE AT BASELINE**, Table: **BASEBOTH**.
      * _phs000287.v6.pht001452.v1.phv00100499.v1_. dbGap Name: **CRPBLADJ**, Desc: **C-reactive protein, adjusted original va**, Table: **BASEBOTH**.
    * **Function:**
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
<a id="crp_1-hchs_sol"></a>
  * ### inflammation/crp_1 -- **HCHS_SOL Hispanic Community Health Study /Study of Latinos (HCHS/SOL)**:
    * 2 component_study_variables
      * _phs000810.v1.pht004715.v1.phv00226251.v1_. dbGap Name: **AGE**, Desc: **Age**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
      * _phs000810.v1.pht004715.v1.phv00258066.v1_. dbGap Name: **LABA91**, Desc: **High-sensitivity C-Reactive Protein (mg/L) (LABA91)**, Table: **HCHS_SOL_Cohort_Subject_Phenotypes**.
    * **Function:**
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
  * ### inflammation/crp_1 -- **JHS Jackson Heart Study (JHS) Cohort**:
    * 3 component_study_variables
      * _phs000286.v5.pht001945.v1.phv00125940.v1_. dbGap Name: **Hscrp_cresult**, Desc: **Character results for Hscrp [Visit 1]**, Table: **cena**.
      * _phs000286.v5.pht001945.v1.phv00125941.v1_. dbGap Name: **HSCRP**, Desc: **Hscrp: high sensitivity C-reactive protein in mg/dL [Visit 1]**, Table: **cena**.
      * _phs000286.v5.pht001949.v1.phv00126009.v1_. No dbGap metadata available.
    * **Function:**
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
  * ### inflammation/eselectin_1 -- **MESA Multi-Ethnic Study of Atherosclerosis (MESA) Cohort**:
    * 5 component_study_variables
      * _phs000209.v13.pht001111.v4.phv00082639.v2_. dbGap Name: **age1c**, Desc: **AGE**, Table: **MESA_AirNRExamMain**.
      * _phs000209.v13.pht001111.v4.phv00082969.v1_. dbGap Name: **eselect1**, Desc: **E-SELECTIN (ng/mL)**, Table: **MESA_AirNRExamMain**.
      * _phs000209.v13.pht001111.v4.phv00082970.v1_. dbGap Name: **eselect1m**, Desc: **E-SELECTIN MISSING VALUE**, Table: **MESA_AirNRExamMain**.
      * _phs000209.v13.pht001116.v10.phv00084442.v3_. dbGap Name: **age1c**, Desc: **AGE**, Table: **MESA_Exam1Main**.
      * _phs000209.v13.pht001116.v10.phv00085022.v2_. dbGap Name: **eselect1**, Desc: **E-SELECTIN (ng/mL)**, Table: **MESA_Exam1Main**.
    * **Function:**
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
    * [CHS](#icam1_1-chs)
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
  * ### inflammation/icam1_1 -- **CARDIA CARDIA Cohort**:
    * 2 component_study_variables
      * _phs000285.v3.pht001697.v2.phv00116390.v2_. dbGap Name: **EX3_AGE**, Desc: **CALCULATED AGE AT EXAM 3**, Table: **C1REF**.
      * _phs000285.v3.pht001699.v2.phv00116396.v2_. dbGap Name: **sICAM1**, Desc: **SICAM1**, Table: **CARE_ICAM**.
    * **Function:**
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
<a id="icam1_1-chs"></a>
  * ### inflammation/icam1_1 -- **CHS Cardiovascular Health Study (CHS) Cohort: an NHLBI-funded observational study of risk factors for cardiovascular disease in adults 65 years or older**:
    * 2 component_study_variables
      * _phs000287.v6.pht001449.v1.phv00098764.v1_. dbGap Name: **ICAM1**, Desc: **BASELINE ICAM-1 -sample**, Table: **ADDITIONAL_BIOMARKERS**.
      * _phs000287.v6.pht001452.v1.phv00100487.v1_. dbGap Name: **AGEBL**, Desc: **CALCULATED AGE AT BASELINE**, Table: **BASEBOTH**.
    * **Function:**
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
<a id="il10_1"></a>
## inflammation: **il10_1** (il10)
  Interleukin 10 (IL10) concentration in blood.
  * **Harmonization Units**:
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
    
<a id="il10_1-mesa"></a>
  * ### inflammation/il10_1 -- **MESA Multi-Ethnic Study of Atherosclerosis (MESA) Cohort**:
    * 3 component_study_variables
      * _phs000209.v13.pht001116.v10.phv00084442.v3_. dbGap Name: **age1c**, Desc: **AGE**, Table: **MESA_Exam1Main**.
      * _phs000209.v13.pht002099.v2.phv00142666.v2_. dbGap Name: **il10a1**, Desc: **INTERLEUKIN-10**, Table: **MESA_AncilMesaIL10**.
      * _phs000209.v13.pht002099.v2.phv00142667.v2_. dbGap Name: **il10a1m**, Desc: **MISSING INTERLEUKIN-10 VALUE: REASON**, Table: **MESA_AncilMesaIL10**.
    * **Function:**
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
  * ### inflammation/il18_1 -- **FHS Framingham Cohort**:
    * 2 component_study_variables
      * _phs000007.v29.pht000671.v5.phv00066686.v4_. No dbGap metadata available.
      * _phs000007.v29.pht003099.v4.phv00177942.v4_. dbGap Name: **age7**, Desc: **Age at Exam 7**, Table: **vr_dates_2019_a_1175s**.
    * **Function:**
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
    
<a id="il6_1"></a>
## inflammation: **il6_1** (il6)
  Interleukin 6 (IL6) concentration in blood.
  * **Harmonization Units**:
    * [CARDIA](#il6_1-cardia)
    * [CHS](#il6_1-chs)
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
  * ### inflammation/il6_1 -- **CARDIA CARDIA Cohort**:
    * 3 component_study_variables
      * _phs000285.v3.pht001851.v2.phv00120748.v2_. dbGap Name: **EX6_AGE**, Desc: **CALCULATED AGE AT EXAM 6**, Table: **F1REF**.
      * _phs000285.v3.pht001862.v2.phv00121064.v2_. dbGap Name: **FL6IL6**, Desc: **IL6 PG/ML**, Table: **F2IGFIL**.
      * _phs000285.v3.pht001862.v2.phv00121065.v2_. dbGap Name: **FL6IL6CM**, Desc: **IL6 COMMENTS**, Table: **F2IGFIL**.
    * **Function:**
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
<a id="il6_1-chs"></a>
  * ### inflammation/il6_1 -- **CHS Cardiovascular Health Study (CHS) Cohort: an NHLBI-funded observational study of risk factors for cardiovascular disease in adults 65 years or older**:
    * 2 component_study_variables
      * _phs000287.v6.pht001452.v1.phv00100487.v1_. dbGap Name: **AGEBL**, Desc: **CALCULATED AGE AT BASELINE**, Table: **BASEBOTH**.
      * _phs000287.v6.pht001452.v1.phv00100500.v1_. dbGap Name: **IL6BL**, Desc: **IL-6 at baseline (pg/ml)**, Table: **BASEBOTH**.
    * **Function:**
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
<a id="il6_1-mesa"></a>
  * ### inflammation/il6_1 -- **MESA Multi-Ethnic Study of Atherosclerosis (MESA) Cohort**:
    * 3 component_study_variables
      * _phs000209.v13.pht001116.v10.phv00084442.v3_. dbGap Name: **age1c**, Desc: **AGE**, Table: **MESA_Exam1Main**.
      * _phs000209.v13.pht001116.v10.phv00085009.v2_. dbGap Name: **il61**, Desc: **INTERLEUKIN-6 (IL-6) (pg/mL)**, Table: **MESA_Exam1Main**.
      * _phs000209.v13.pht001116.v10.phv00085010.v2_. dbGap Name: **il61M**, Desc: **EXCEPTIONAL MISSING IL61**, Table: **MESA_Exam1Main**.
    * **Function:**
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
  * ### inflammation/isoprostane_8_epi_pgf2a_1 -- **FHS Framingham Cohort**:
    * 7 component_study_variables
      * _phs000007.v29.pht000162.v6.phv00023800.v5_. No dbGap metadata available.
      * _phs000007.v29.pht002852.v2.phv00171864.v2_. No dbGap metadata available.
      * _phs000007.v29.pht002853.v4.phv00171873.v4_. No dbGap metadata available.
      * _phs000007.v29.pht003099.v4.phv00177928.v4_. dbGap Name: **idtype**, Desc: **Framingham Heart Study cohort identifier**, Table: **vr_dates_2019_a_1175s**.
      * _phs000007.v29.pht003099.v4.phv00177930.v4_. dbGap Name: **age1**, Desc: **Age at Exam 1**, Table: **vr_dates_2019_a_1175s**.
      * _phs000007.v29.pht003099.v4.phv00177934.v4_. dbGap Name: **age3**, Desc: **Age at Exam 3**, Table: **vr_dates_2019_a_1175s**.
      * _phs000007.v29.pht003099.v4.phv00177942.v4_. dbGap Name: **age7**, Desc: **Age at Exam 7**, Table: **vr_dates_2019_a_1175s**.
    * **Function:**
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
  * ### inflammation/lppla2_act_1 -- **CHS Cardiovascular Health Study (CHS) Cohort: an NHLBI-funded observational study of risk factors for cardiovascular disease in adults 65 years or older**:
    * 2 component_study_variables
      * _phs000287.v6.pht001449.v1.phv00098770.v1_. dbGap Name: **LPPLA2AC**, Desc: **Baseline LP-PLA2 Activity (nmols/min/mL)**, Table: **ADDITIONAL_BIOMARKERS**.
      * _phs000287.v6.pht001452.v1.phv00100487.v1_. dbGap Name: **AGEBL**, Desc: **CALCULATED AGE AT BASELINE**, Table: **BASEBOTH**.
    * **Function:**
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
  * ### inflammation/lppla2_act_1 -- **FHS Framingham Cohort**:
    * 7 component_study_variables
      * _phs000007.v29.pht000164.v6.phv00023808.v5_. No dbGap metadata available.
      * _phs000007.v29.pht000304.v5.phv00036408.v4_. No dbGap metadata available.
      * _phs000007.v29.pht002892.v4.phv00172229.v4_. No dbGap metadata available.
      * _phs000007.v29.pht003099.v4.phv00177928.v4_. dbGap Name: **idtype**, Desc: **Framingham Heart Study cohort identifier**, Table: **vr_dates_2019_a_1175s**.
      * _phs000007.v29.pht003099.v4.phv00177930.v4_. dbGap Name: **age1**, Desc: **Age at Exam 1**, Table: **vr_dates_2019_a_1175s**.
      * _phs000007.v29.pht003099.v4.phv00177934.v4_. dbGap Name: **age3**, Desc: **Age at Exam 3**, Table: **vr_dates_2019_a_1175s**.
      * _phs000007.v29.pht003099.v4.phv00177942.v4_. dbGap Name: **age7**, Desc: **Age at Exam 7**, Table: **vr_dates_2019_a_1175s**.
    * **Function:**
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
  * ### inflammation/lppla2_act_1 -- **MESA Multi-Ethnic Study of Atherosclerosis (MESA) Cohort**:
    * 2 component_study_variables
      * _phs000209.v13.pht001116.v10.phv00084442.v3_. dbGap Name: **age1c**, Desc: **AGE**, Table: **MESA_Exam1Main**.
      * _phs000209.v13.pht002512.v1.phv00165052.v1_. dbGap Name: **cam1a**, Desc: **LIPOPROTEIN-ASSOCIATED PHOSPHOLIPASE A2: ACTIVITY**, Table: **MESA_AncilMesaLpPLA2**.
    * **Function:**
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
  * ### inflammation/lppla2_mass_1 -- **CHS Cardiovascular Health Study (CHS) Cohort: an NHLBI-funded observational study of risk factors for cardiovascular disease in adults 65 years or older**:
    * 2 component_study_variables
      * _phs000287.v6.pht001449.v1.phv00098769.v1_. dbGap Name: **LPPLA2**, Desc: **Baseline LP-PLA2 Mass (ng/ml)**, Table: **ADDITIONAL_BIOMARKERS**.
      * _phs000287.v6.pht001452.v1.phv00100487.v1_. dbGap Name: **AGEBL**, Desc: **CALCULATED AGE AT BASELINE**, Table: **BASEBOTH**.
    * **Function:**
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
  * ### inflammation/lppla2_mass_1 -- **FHS Framingham Cohort**:
    * 7 component_study_variables
      * _phs000007.v29.pht000095.v6.phv00021963.v5_. No dbGap metadata available.
      * _phs000007.v29.pht000305.v5.phv00036411.v4_. No dbGap metadata available.
      * _phs000007.v29.pht002892.v4.phv00172227.v4_. No dbGap metadata available.
      * _phs000007.v29.pht003099.v4.phv00177928.v4_. dbGap Name: **idtype**, Desc: **Framingham Heart Study cohort identifier**, Table: **vr_dates_2019_a_1175s**.
      * _phs000007.v29.pht003099.v4.phv00177930.v4_. dbGap Name: **age1**, Desc: **Age at Exam 1**, Table: **vr_dates_2019_a_1175s**.
      * _phs000007.v29.pht003099.v4.phv00177934.v4_. dbGap Name: **age3**, Desc: **Age at Exam 3**, Table: **vr_dates_2019_a_1175s**.
      * _phs000007.v29.pht003099.v4.phv00177942.v4_. dbGap Name: **age7**, Desc: **Age at Exam 7**, Table: **vr_dates_2019_a_1175s**.
    * **Function:**
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
  * ### inflammation/lppla2_mass_1 -- **MESA Multi-Ethnic Study of Atherosclerosis (MESA) Cohort**:
    * 2 component_study_variables
      * _phs000209.v13.pht001116.v10.phv00084442.v3_. dbGap Name: **age1c**, Desc: **AGE**, Table: **MESA_Exam1Main**.
      * _phs000209.v13.pht002512.v1.phv00165050.v1_. dbGap Name: **plac1a**, Desc: **LIPOPROTEIN-ASSOCIATED PHOSPHOLIPASE A2: MASS**, Table: **MESA_AncilMesaLpPLA2**.
    * **Function:**
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
  * ### inflammation/mmp9_1 -- **MESA Multi-Ethnic Study of Atherosclerosis (MESA) Cohort**:
    * 2 component_study_variables
      * _phs000209.v13.pht001116.v10.phv00084442.v3_. dbGap Name: **age1c**, Desc: **AGE**, Table: **MESA_Exam1Main**.
      * _phs000209.v13.pht001116.v10.phv00085027.v2_. dbGap Name: **mmp91**, Desc: **MATRIX METALLOPROTEINASE 9 (ng/mL)**, Table: **MESA_Exam1Main**.
    * **Function:**
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
  * ### inflammation/mpo_1 -- **FHS Framingham Cohort**:
    * 2 component_study_variables
      * _phs000007.v29.pht000167.v6.phv00023854.v5_. No dbGap metadata available.
      * _phs000007.v29.pht003099.v4.phv00177942.v4_. dbGap Name: **age7**, Desc: **Age at Exam 7**, Table: **vr_dates_2019_a_1175s**.
    * **Function:**
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
    
<a id="pselectin_1"></a>
## inflammation: **pselectin_1** (pselectin)
  P-selectin concentration in blood.
  * **Harmonization Units**:
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
    
<a id="tnfa_1"></a>
## inflammation: **tnfa_1** (tnfa)
  Tumor necrosis factor alpha (TNFa) concentration in blood.
  * **Harmonization Units**:
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
    
<a id="tnfa_1-fhs"></a>
  * ### inflammation/tnfa_1 -- **FHS Framingham Cohort**:
    * 2 component_study_variables
      * _phs000007.v29.pht000111.v5.phv00022779.v4_. No dbGap metadata available.
      * _phs000007.v29.pht003099.v4.phv00177942.v4_. dbGap Name: **age7**, Desc: **Age at Exam 7**, Table: **vr_dates_2019_a_1175s**.
    * **Function:**
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
  * ### inflammation/tnfa_1 -- **MESA Multi-Ethnic Study of Atherosclerosis (MESA) Cohort**:
    * 5 component_study_variables
      * _phs000209.v13.pht001118.v8.phv00085773.v3_. dbGap Name: **age2c**, Desc: **AGE AT EXAM 2**, Table: **MESA_Exam2Main**.
      * _phs000209.v13.pht001119.v8.phv00086259.v4_. dbGap Name: **age3c**, Desc: **AGE AT EXAM3**, Table: **MESA_Exam3Main**.
      * _phs000209.v13.pht002198.v2.phv00160529.v1_. dbGap Name: **exam3**, Desc: **EXAM**, Table: **MESA_AncilMesaAbdBodyComposition**.
      * _phs000209.v13.pht002198.v2.phv00160540.v1_. dbGap Name: **tnfa3**, Desc: **TNFa (pg/mL)**, Table: **MESA_AncilMesaAbdBodyComposition**.
      * _phs000209.v13.pht002198.v2.phv00160541.v1_. dbGap Name: **tnfa3m**, Desc: **TNFa (MISSING VALUE REASON)**, Table: **MESA_AncilMesaAbdBodyComposition**.
    * **Function:**
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
  * ### inflammation/tnfa_r1_1 -- **MESA Multi-Ethnic Study of Atherosclerosis (MESA) Cohort**:
    * 2 component_study_variables
      * _phs000209.v13.pht001116.v10.phv00084442.v3_. dbGap Name: **age1c**, Desc: **AGE**, Table: **MESA_Exam1Main**.
      * _phs000209.v13.pht001116.v10.phv00085029.v3_. dbGap Name: **tnfri1**, Desc: **TUMOR NECROSIS FACTOR-A SOLUBLE RECEPTORS (pg/ml)**, Table: **MESA_Exam1Main**.
    * **Function:**
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
  * ### inflammation/tnfr2_1 -- **FHS Framingham Cohort**:
    * 7 component_study_variables
      * _phs000007.v29.pht000175.v6.phv00023913.v5_. No dbGap metadata available.
      * _phs000007.v29.pht002898.v2.phv00172383.v2_. No dbGap metadata available.
      * _phs000007.v29.pht002899.v4.phv00172391.v4_. No dbGap metadata available.
      * _phs000007.v29.pht003099.v4.phv00177928.v4_. dbGap Name: **idtype**, Desc: **Framingham Heart Study cohort identifier**, Table: **vr_dates_2019_a_1175s**.
      * _phs000007.v29.pht003099.v4.phv00177930.v4_. dbGap Name: **age1**, Desc: **Age at Exam 1**, Table: **vr_dates_2019_a_1175s**.
      * _phs000007.v29.pht003099.v4.phv00177934.v4_. dbGap Name: **age3**, Desc: **Age at Exam 3**, Table: **vr_dates_2019_a_1175s**.
      * _phs000007.v29.pht003099.v4.phv00177942.v4_. dbGap Name: **age7**, Desc: **Age at Exam 7**, Table: **vr_dates_2019_a_1175s**.
    * **Function:**
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