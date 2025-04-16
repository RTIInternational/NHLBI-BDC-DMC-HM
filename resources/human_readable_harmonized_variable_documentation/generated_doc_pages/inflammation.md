
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
  * **Study (harmonization_units)**:
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
      * _phs000007.v29.pht000079.v6.phv00021687.v5_
        * No dbGap metadata available
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000007.v29.pht003099.v4.phv00177942.v4_
        * dbGap name: **age7**
        * dbGap desc: **Age at Exam 7**
        * dbGap table: **vr_dates_2019_a_1175s**
         * No permissible values listed in PIC-SURE data dictionary
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
      * _phs000209.v13.pht001116.v10.phv00084442.v3_
        * dbGap name: **age1c**
        * dbGap desc: **AGE**
        * dbGap table: **MESA_Exam1Main**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000209.v13.pht001116.v10.phv00085021.v2_
        * dbGap name: **cd40l1**
        * dbGap desc: **CD40 LIGAND (pg/mL)**
        * dbGap table: **MESA_Exam1Main**
         * PIC-SURE permissible values: .25, .27, .293, .49, .521, .598, .607, .628, .638, .675, .685, .688, .697, .716, .728, .732, .734, .748, .788, .791, .793, .803, .81, .811, .825, .827, .838, .872, .878, .936, .95, .993, .994, .995, .998, 1.012, 1.017, 1.018, 1.021, 1.033, 1.071, 1.079, 1.081, 1.084, 1.1, 1.102, 1.11, 1.117, 1.118, 1.128, 1.153, 1.157, 1.158, 1.166, 1.168, 1.17, 1.172, 1.187, 1.188, 1.217, 1.22, 1.238, 1.245, 1.249, 1.257, 1.262, 1.264, 1.267, 1.274, 1.282, 1.283, 1.289, 1.292, 1.31, 1.312, 1.319, 1.322, 1.334, 1.336, 1.34, 1.346, 1.361, 1.373, 1.376, 1.382, 1.386, 1.387, 1.389, 1.395, 1.398, 1.408, 1.409, 1.42, 1.421, 1.429, 1.433, 1.437, 1.446, 1.448, 1.452, 1.461, 1.464, 1.469, 1.472, 1.473, 1.478, 1.484, 1.486, 1.492, 1.512, 1.514, 1.515, 1.529, 1.533, 1.545, 1.546, 1.553, 1.556, 1.564, 1.572, 1.574, 1.582, 1.585, 1.594, 1.596, 1.602, 1.606, 1.607, 1.616, 1.617, 1.618, 1.619, 1.621, 1.626, 1.635, 1.649, 1.661, 1.665, 1.675, 1.676, 1.677, 1.685, 1.686, 1.698, 1.701, 1.712, 1.717, 1.726, 1.728, 1.733, 1.736, 1.75, 1.753, 1.76, 1.761, 1.764, 1.765, 1.772, 1.78, 1.783, 1.785, 1.79, 1.805, 1.807, 1.808, 1.81, 1.813, 1.819, 1.828, 1.833, 1.834, 1.837, 1.844, 1.847, 1.852, 1.871, 1.872, 1.875, 1.88, 1.898, 1.899, 1.937, 1.938, 1.946, 1.96, 1.962, 1.969, 1.974, 1.983, 1.994, 10.043, 10.249, 10.466, 10.594, 10.782, 10.844, 10.85, 10.889, 11.298, 11.443, 11.657, 11.73, 11.831, 12.087, 13.927, 14.146, 16.995, 17.764, 18.977, 2.004, 2.009, 2.011, 2.016, 2.025, 2.031, 2.037, 2.04, 2.041, 2.049, 2.05, 2.053, 2.068, 2.069, 2.08, 2.081, 2.082, 2.087, 2.096, 2.101, 2.102, 2.104, 2.107, 2.108, 2.112, 2.115, 2.126, 2.134, 2.136, 2.141, 2.152, 2.158, 2.16, 2.17, 2.171, 2.176, 2.182, 2.183, 2.187, 2.197, 2.201, 2.209, 2.212, 2.213, 2.219, 2.222, 2.223, 2.227, 2.239, 2.24, 2.27, 2.274, 2.28, 2.281, 2.293, 2.297, 2.298, 2.3, 2.302, 2.304, 2.312, 2.32, 2.327, 2.329, 2.346, 2.355, 2.361, 2.375, 2.379, 2.382, 2.383, 2.396, 2.401, 2.408, 2.411, 2.415, 2.417, 2.437, 2.438, 2.45, 2.459, 2.467, 2.472, 2.483, 2.484, 2.487, 2.49, 2.497, 2.504, 2.506, 2.516, 2.528, 2.531, 2.534, 2.535, 2.536, 2.539, 2.54, 2.542, 2.551, 2.554, 2.563, 2.571, 2.577, 2.585, 2.598, 2.6, 2.611, 2.613, 2.614, 2.616, 2.625, 2.626, 2.627, 2.634, 2.635, 2.643, 2.655, 2.666, 2.668, 2.67, 2.679, 2.683, 2.69, 2.694, 2.698, 2.701, 2.703, 2.718, 2.724, 2.747, 2.752, 2.755, 2.756, 2.758, 2.763, 2.766, 2.77, 2.776, 2.782, 2.785, 2.788, 2.79, 2.795, 2.804, 2.819, 2.82, 2.831, 2.847, 2.854, 2.857, 2.861, 2.869, 2.877, 2.884, 2.903, 2.909, 2.918, 2.92, 2.949, 2.951, 2.956, 2.957, 2.958, 2.964, 2.97, 2.975, 2.981, 2.999, 24.6, 3.007, 3.01, 3.012, 3.021, 3.022, 3.029, 3.031, 3.035, 3.04, 3.044, 3.046, 3.053, 3.059, 3.078, 3.079, 3.08, 3.082, 3.088, 3.093, 3.096, 3.108, 3.116, 3.118, 3.132, 3.138, 3.141, 3.148, 3.149, 3.153, 3.154, 3.157, 3.165, 3.166, 3.169, 3.17, 3.175, 3.185, 3.198, 3.199, 3.2, 3.209, 3.217, 3.223, 3.236, 3.237, 3.252, 3.261, 3.262, 3.263, 3.275, 3.278, 3.279, 3.282, 3.296, 3.298, 3.301, 3.303, 3.308, 3.309, 3.312, 3.316, 3.32, 3.326, 3.327, 3.336, 3.344, 3.351, 3.364, 3.377, 3.382, 3.406, 3.408, 3.413, 3.428, 3.431, 3.439, 3.453, 3.461, 3.465, 3.479, 3.488, 3.493, 3.5, 3.502, 3.52, 3.522, 3.531, 3.551, 3.554, 3.57, 3.576, 3.579, 3.607, 3.613, 3.615, 3.618, 3.619, 3.621, 3.625, 3.642, 3.646, 3.657, 3.661, 3.668, 3.675, 3.677, 3.678, 3.695, 3.708, 3.709, 3.711, 3.721, 3.722, 3.728, 3.733, 3.741, 3.743, 3.744, 3.745, 3.749, 3.758, 3.762, 3.764, 3.776, 3.777, 3.779, 3.791, 3.803, 3.808, 3.816, 3.82, 3.822, 3.828, 3.833, 3.84, 3.846, 3.861, 3.866, 3.885, 3.891, 3.894, 3.895, 3.898, 3.908, 3.926, 3.931, 3.946, 3.959, 3.96, 3.97, 3.974, 3.982, 3.987, 4.012, 4.018, 4.026, 4.04, 4.042, 4.048, 4.053, 4.056, 4.064, 4.07, 4.075, 4.077, 4.078, 4.087, 4.088, 4.09, 4.092, 4.094, 4.1, 4.104, 4.109, 4.111, 4.122, 4.124, 4.129, 4.14, 4.141, 4.142, 4.172, 4.174, 4.196, 4.209, 4.224, 4.227, 4.231, 4.233, 4.247, 4.251, 4.255, 4.261, 4.264, 4.265, 4.268, 4.272, 4.284, 4.287, 4.3, 4.302, 4.335, 4.342, 4.374, 4.382, 4.39, 4.398, 4.401, 4.407, 4.422, 4.425, 4.428, 4.434, 4.438, 4.458, 4.46, 4.464, 4.466, 4.467, 4.484, 4.494, 4.499, 4.51, 4.516, 4.519, 4.521, 4.524, 4.53, 4.534, 4.541, 4.542, 4.556, 4.576, 4.58, 4.581, 4.595, 4.603, 4.607, 4.609, 4.628, 4.645, 4.685, 4.695, 4.71, 4.711, 4.75, 4.755, 4.756, 4.777, 4.781, 4.798, 4.801, 4.808, 4.834, 4.846, 4.878, 4.882, 4.885, 4.887, 4.89, 4.891, 4.895, 4.897, 4.922, 4.923, 4.926, 4.94, 4.944, 4.956, 4.96, 4.969, 4.985, 5.013, 5.015, 5.022, 5.033, 5.041, 5.051, 5.056, 5.083, 5.087, 5.098, 5.102, 5.109, 5.11, 5.114, 5.124, 5.127, 5.14, 5.144, 5.15, 5.153, 5.177, 5.186, 5.187, 5.193, 5.201, 5.21, 5.244, 5.263, 5.264, 5.276, 5.29, 5.298, 5.301, 5.324, 5.335, 5.36, 5.362, 5.38, 5.386, 5.387, 5.437, 5.438, 5.462, 5.467, 5.507, 5.518, 5.54, 5.55, 5.558, 5.564, 5.58, 5.612, 5.615, 5.617, 5.643, 5.645, 5.646, 5.648, 5.655, 5.665, 5.676, 5.697, 5.726, 5.729, 5.742, 5.759, 5.783, 5.796, 5.805, 5.82, 5.822, 5.824, 5.825, 5.859, 5.865, 5.867, 5.875, 5.896, 5.9, 5.917, 5.936, 5.953, 5.955, 5.96, 5.975, 5.981, 5.995, 5.996, 6.014, 6.03, 6.031, 6.042, 6.047, 6.05, 6.062, 6.065, 6.081, 6.091, 6.092, 6.096, 6.116, 6.117, 6.134, 6.135, 6.142, 6.187, 6.191, 6.199, 6.247, 6.261, 6.275, 6.293, 6.296, 6.302, 6.314, 6.32, 6.355, 6.363, 6.365, 6.38, 6.399, 6.408, 6.423, 6.479, 6.482, 6.502, 6.51, 6.527, 6.564, 6.591, 6.601, 6.636, 6.64, 6.642, 6.643, 6.661, 6.687, 6.688, 6.709, 6.717, 6.765, 6.775, 6.784, 6.798, 6.8, 6.853, 6.871, 6.875, 6.915, 6.92, 6.924, 6.931, 6.945, 6.947, 6.948, 6.95, 6.968, 6.978, 6.983, 6.987, 7.006, 7.007, 7.016, 7.022, 7.048, 7.053, 7.075, 7.107, 7.17, 7.174, 7.211, 7.254, 7.266, 7.268, 7.288, 7.289, 7.351, 7.384, 7.395, 7.403, 7.408, 7.512, 7.514, 7.518, 7.54, 7.544, 7.556, 7.557, 7.594, 7.653, 7.697, 7.709, 7.804, 7.832, 7.862, 7.921, 7.959, 8.013, 8.021, 8.022, 8.04, 8.077, 8.091, 8.113, 8.114, 8.173, 8.186, 8.199, 8.204, 8.24, 8.249, 8.259, 8.289, 8.301, 8.319, 8.321, 8.366, 8.374, 8.403, 8.406, 8.456, 8.512, 8.584, 8.59, 8.593, 8.618, 8.629, 8.639, 8.67, 8.697, 8.709, 8.713, 8.731, 8.766, 8.774, 8.776, 8.819, 8.961, 8.971, 9.139, 9.208, 9.304, 9.481, 9.63, 9.823, 9.854, 9.908, 9.916, 9.945
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
  * **Study (harmonization_units)**:
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
      * _phs000280.v4.pht006431.v1.phv00295623.v1_
        * No dbGap metadata available
         * varId _phv00295623_ not found in PIC-SURE data dictionary
      * _phs000280.v4.pht006444.v1.phv00296696.v1_
        * dbGap name: **LIP33**
        * dbGap desc: **High sensitive C reactive protein [Central Lab Data]**
        * dbGap table: **LIP**
         * varId _phv00296696_ not found in PIC-SURE data dictionary
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
      * _phs000285.v3.pht001851.v2.phv00120748.v2_
        * dbGap name: **EX6_AGE**
        * dbGap desc: **CALCULATED AGE AT EXAM 6**
        * dbGap table: **F1REF**
         * varId _phv00120748_ not found in PIC-SURE data dictionary
      * _phs000285.v3.pht001853.v2.phv00120759.v2_
        * dbGap name: **FL6CRPBN**
        * dbGap desc: **RERUN CRP (uG/ml - BNII METHOD)**
        * dbGap table: **F2CRP**
         * varId _phv00120759_ not found in PIC-SURE data dictionary
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
      * _phs000287.v6.pht001452.v1.phv00100487.v1_
        * dbGap name: **AGEBL**
        * dbGap desc: **CALCULATED AGE AT BASELINE**
        * dbGap table: **BASEBOTH**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000287.v6.pht001452.v1.phv00100499.v1_
        * dbGap name: **CRPBLADJ**
        * dbGap desc: **C-reactive protein, adjusted original va**
        * dbGap table: **BASEBOTH**
         * No permissible values listed in PIC-SURE data dictionary
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
      * _phs000810.v1.pht004715.v1.phv00226251.v1_
        * dbGap name: **AGE**
        * dbGap desc: **Age**
        * dbGap table: **HCHS_SOL_Cohort_Subject_Phenotypes**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000810.v1.pht004715.v1.phv00258066.v1_
        * dbGap name: **LABA91**
        * dbGap desc: **High-sensitivity C-Reactive Protein (mg/L) (LABA91)**
        * dbGap table: **HCHS_SOL_Cohort_Subject_Phenotypes**
         * No permissible values listed in PIC-SURE data dictionary
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
      * _phs000286.v5.pht001945.v1.phv00125940.v1_
        * dbGap name: **Hscrp_cresult**
        * dbGap desc: **Character results for Hscrp [Visit 1]**
        * dbGap table: **cena**
         * varId _phv00125940_ not found in PIC-SURE data dictionary
      * _phs000286.v5.pht001945.v1.phv00125941.v1_
        * dbGap name: **HSCRP**
        * dbGap desc: **Hscrp: high sensitivity C-reactive protein in mg/dL [Visit 1]**
        * dbGap table: **cena**
         * varId _phv00125941_ not found in PIC-SURE data dictionary
      * _phs000286.v5.pht001949.v1.phv00126009.v1_
        * No dbGap metadata available
         * varId _phv00126009_ not found in PIC-SURE data dictionary
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
  * **Study (harmonization_units)**:
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
      * _phs000209.v13.pht001111.v4.phv00082639.v2_
        * dbGap name: **age1c**
        * dbGap desc: **AGE**
        * dbGap table: **MESA_AirNRExamMain**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000209.v13.pht001111.v4.phv00082969.v1_
        * dbGap name: **eselect1**
        * dbGap desc: **E-SELECTIN (ng/mL)**
        * dbGap table: **MESA_AirNRExamMain**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000209.v13.pht001111.v4.phv00082970.v1_
        * dbGap name: **eselect1m**
        * dbGap desc: **E-SELECTIN MISSING VALUE**
        * dbGap table: **MESA_AirNRExamMain**
         * varId _phv00082970_ not found in PIC-SURE data dictionary
      * _phs000209.v13.pht001116.v10.phv00084442.v3_
        * dbGap name: **age1c**
        * dbGap desc: **AGE**
        * dbGap table: **MESA_Exam1Main**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000209.v13.pht001116.v10.phv00085022.v2_
        * dbGap name: **eselect1**
        * dbGap desc: **E-SELECTIN (ng/mL)**
        * dbGap table: **MESA_Exam1Main**
         * PIC-SURE permissible values: 10.11, 10.487, 10.975, 101.09, 101.32, 102.23, 102.62, 102.97, 104.8, 105.81, 105.97, 106.12, 106.51, 106.63, 107.5, 108.75, 109.51, 11.698, 110.53, 111.71, 113.2, 115.48, 115.89, 115.94, 116.13, 117.87, 118.03, 118.78, 119.31, 119.85, 12.167, 12.66, 12.784, 120.38, 120.55, 120.83, 120.92, 121.08, 121.24, 122.01, 124.01, 124.29, 126.45, 128.13, 13.146, 13.514, 13.929, 131.6, 139.36, 139.59, 14.103, 14.957, 143.01, 15.378, 15.379, 15.491, 15.652, 15.704, 15.863, 15.957, 156.2, 16.09, 16.301, 16.325, 16.468, 16.829, 16.897, 160.33, 160.63, 17.143, 17.168, 17.271, 17.337, 17.426, 17.561, 17.651, 17.671, 17.794, 17.972, 18.208, 18.763, 181.64, 184.73, 19.147, 19.258, 19.325, 19.692, 19.866, 19.869, 20.059, 20.239, 20.3, 20.416, 20.599, 20.71, 201.37, 21.125, 21.352, 21.59, 21.794, 21.812, 21.955, 22.234, 22.307, 22.445, 22.477, 22.6, 22.717, 22.803, 23.178, 23.189, 23.418, 23.499, 23.555, 23.578, 23.762, 23.958, 24.04, 24.054, 24.121, 24.237, 24.366, 24.38, 24.556, 24.573, 24.672, 24.988, 25.025, 25.177, 25.535, 25.613, 25.686, 25.727, 25.85, 25.986, 26.213, 26.359, 26.579, 26.621, 26.638, 26.648, 26.689, 26.704, 26.717, 26.98, 27.022, 27.204, 27.406, 27.476, 27.534, 27.911, 27.913, 27.955, 27.97, 28.146, 28.169, 28.387, 28.441, 28.539, 28.563, 28.608, 28.665, 28.674, 28.741, 28.749, 28.855, 28.904, 29.031, 29.206, 29.207, 29.321, 29.369, 29.499, 29.551, 29.592, 29.653, 29.727, 29.778, 29.888, 30.233, 30.248, 30.335, 30.347, 30.373, 30.434, 30.57, 30.585, 30.641, 30.725, 30.761, 30.791, 30.882, 30.905, 30.922, 30.945, 30.952, 30.996, 31.027, 31.185, 31.201, 31.277, 31.315, 31.331, 31.348, 31.379, 31.603, 31.742, 31.894, 31.927, 32.009, 32.306, 32.369, 32.385, 32.45, 32.503, 32.544, 32.56, 32.564, 32.645, 32.772, 32.831, 32.956, 33.132, 33.143, 33.199, 33.284, 33.305, 33.421, 33.43, 33.494, 33.585, 33.626, 33.762, 33.891, 33.942, 34.119, 34.125, 34.228, 34.263, 34.329, 34.351, 34.502, 34.529, 34.53, 34.566, 34.588, 34.605, 34.61, 34.662, 34.737, 34.759, 34.788, 34.872, 34.91, 34.938, 34.997, 35.278, 35.329, 35.377, 35.443, 35.529, 35.532, 35.688, 35.851, 35.909, 35.927, 35.993, 36.014, 36.31, 36.454, 36.468, 36.632, 36.696, 36.739, 36.769, 36.923, 36.936, 36.995, 37.156, 37.191, 37.212, 37.213, 37.486, 37.522, 37.638, 37.754, 37.8, 37.873, 37.905, 37.937, 38.05, 38.174, 38.271, 38.288, 38.37, 38.562, 38.566, 38.65, 38.785, 38.906, 38.909, 39.039, 39.186, 39.298, 39.454, 39.478, 39.61, 39.617, 39.641, 39.733, 39.839, 39.9, 39.917, 39.928, 39.994, 4.652, 4.789, 40.058, 40.168, 40.371, 40.428, 40.473, 40.609, 40.638, 40.651, 40.668, 40.736, 40.863, 40.901, 40.93, 41.055, 41.19, 41.216, 41.36, 41.363, 41.41, 41.445, 41.449, 41.519, 41.577, 41.637, 41.703, 41.715, 41.791, 41.866, 41.879, 41.908, 41.97, 41.999, 42.096, 42.126, 42.168, 42.217, 42.237, 42.303, 42.424, 42.444, 42.582, 42.7, 42.72, 42.745, 42.764, 42.815, 42.831, 42.856, 42.962, 42.98, 42.996, 43.014, 43.035, 43.079, 43.114, 43.132, 43.138, 43.317, 43.371, 43.41, 43.431, 43.494, 43.502, 43.545, 43.686, 43.693, 43.729, 43.782, 43.893, 43.945, 43.962, 43.965, 43.984, 44.02, 44.166, 44.169, 44.192, 44.389, 44.42, 44.621, 44.758, 44.771, 44.874, 44.953, 44.97, 44.976, 45.003, 45.012, 45.02, 45.042, 45.049, 45.078, 45.25, 45.3, 45.532, 45.731, 45.754, 45.76, 45.789, 45.808, 45.893, 45.895, 45.944, 45.962, 45.974, 46.205, 46.267, 46.305, 46.33, 46.359, 46.459, 46.643, 46.74, 46.79, 46.832, 47.008, 47.04, 47.053, 47.117, 47.118, 47.135, 47.27, 47.296, 47.312, 47.331, 47.342, 47.44, 47.49, 47.58, 47.692, 47.74, 47.827, 47.884, 48.016, 48.036, 48.04, 48.045, 48.116, 48.152, 48.223, 48.262, 48.303, 48.39, 48.424, 48.435, 48.437, 48.514, 48.626, 48.647, 48.652, 48.732, 48.773, 48.775, 48.819, 48.835, 48.861, 48.936, 49.053, 49.135, 49.374, 49.439, 49.548, 49.566, 49.701, 49.721, 49.76, 49.821, 49.9, 49.903, 49.957, 50.053, 50.064, 50.114, 50.125, 50.166, 50.195, 50.221, 50.239, 50.262, 50.318, 50.345, 50.368, 50.413, 50.533, 50.576, 50.591, 50.686, 50.722, 50.851, 50.898, 50.904, 50.988, 51.005, 51.114, 51.302, 51.369, 51.411, 51.496, 51.623, 51.627, 51.643, 51.657, 51.699, 51.726, 51.772, 51.809, 51.813, 51.818, 51.876, 51.968, 51.97, 52.094, 52.098, 52.13, 52.167, 52.29, 52.299, 52.325, 52.33, 52.391, 52.434, 52.453, 52.462, 52.511, 52.567, 52.681, 52.717, 52.768, 52.791, 52.864, 52.902, 52.918, 52.938, 53.014, 53.037, 53.097, 53.157, 53.238, 53.303, 53.375, 53.449, 53.466, 53.481, 53.492, 53.598, 53.621, 53.631, 53.643, 53.729, 53.756, 53.944, 54.031, 54.106, 54.151, 54.18, 54.372, 54.428, 54.498, 54.503, 54.558, 54.561, 54.581, 54.584, 54.591, 54.624, 54.644, 54.649, 54.745, 54.764, 54.802, 54.824, 54.875, 54.878, 54.89, 54.902, 54.918, 55.111, 55.203, 55.205, 55.26, 55.323, 55.374, 55.481, 55.55, 55.579, 55.591, 55.875, 55.889, 55.956, 55.964, 56.021, 56.043, 56.048, 56.077, 56.097, 56.179, 56.198, 56.256, 56.445, 56.462, 56.511, 56.636, 56.71, 56.866, 56.901, 56.909, 57.018, 57.019, 57.175, 57.275, 57.345, 57.483, 57.519, 57.576, 57.597, 57.887, 57.895, 57.898, 57.93, 57.945, 58.072, 58.098, 58.217, 58.353, 58.367, 58.374, 58.447, 58.526, 58.528, 58.543, 58.56, 58.892, 59.019, 59.054, 59.148, 59.185, 59.276, 59.316, 59.342, 59.536, 59.706, 59.714, 59.731, 59.851, 59.875, 59.895, 59.93, 60.021, 60.08, 60.172, 60.212, 60.236, 60.241, 60.307, 60.361, 60.414, 60.447, 60.516, 60.579, 60.587, 60.606, 60.655, 60.714, 60.764, 60.766, 60.769, 60.852, 60.878, 61.002, 61.115, 61.178, 61.269, 61.375, 61.453, 61.496, 61.598, 61.609, 61.617, 61.648, 61.779, 61.798, 61.867, 62.083, 62.085, 62.103, 62.142, 62.242, 62.283, 62.349, 62.487, 62.598, 63.05, 63.053, 63.169, 63.282, 63.464, 63.545, 63.551, 63.741, 63.847, 64.024, 64.172, 64.214, 64.32, 64.438, 64.503, 64.583, 64.608, 64.728, 64.818, 64.927, 64.937, 65.036, 65.041, 65.06, 65.063, 65.075, 65.101, 65.436, 65.475, 65.507, 65.508, 65.546, 65.796, 65.864, 66.082, 66.214, 66.221, 66.329, 66.33, 66.345, 66.384, 66.719, 66.766, 66.899, 67.115, 67.171, 67.199, 67.326, 67.344, 67.561, 67.721, 67.818, 67.858, 67.967, 67.978, 68.089, 68.181, 68.404, 68.415, 68.507, 68.72, 68.785, 68.799, 68.84, 68.891, 69.04, 69.279, 69.412, 69.551, 69.599, 69.629, 69.99, 70.007, 70.02, 70.077, 70.254, 70.36, 70.52, 70.526, 70.722, 71.037, 71.042, 71.139, 71.207, 71.258, 71.328, 71.446, 71.57, 71.971, 72.02, 72.067, 72.128, 72.371, 72.403, 72.446, 72.543, 72.606, 72.926, 72.976, 73.041, 73.103, 73.104, 73.211, 73.359, 73.371, 73.784, 73.827, 73.84, 74.187, 74.243, 74.353, 74.376, 74.46, 74.599, 74.604, 75.069, 75.45, 75.466, 75.55, 75.723, 75.782, 75.824, 75.967, 76.079, 76.207, 76.283, 76.519, 76.672, 76.673, 76.929, 76.93, 77.192, 77.267, 77.393, 77.408, 77.515, 77.559, 77.622, 77.707, 77.974, 78.046, 78.056, 78.381, 78.398, 78.692, 78.922, 78.979, 79.003, 79.085, 79.299, 79.767, 79.799, 79.809, 79.857, 79.926, 80.175, 80.522, 80.578, 80.701, 80.711, 80.796, 80.95, 81.141, 81.38, 81.598, 82.106, 82.259, 82.55, 82.675, 83.022, 83.569, 83.653, 83.863, 84.309, 84.367, 85.712, 85.89, 85.94, 85.972, 86.056, 86.472, 86.59, 86.693, 86.808, 86.859, 86.907, 86.965, 87.38, 87.441, 87.704, 87.72, 88.027, 88.089, 88.302, 88.421, 88.733, 89.166, 9.911, 90.421, 91.168, 91.498, 91.779, 92.108, 92.444, 92.602, 93.064, 93.123, 93.384, 93.451, 93.646, 94.965, 95.607, 95.748, 95.786, 95.869, 95.918, 96.666, 97.261, 97.281, 97.427, 97.561, 97.796, 97.846, 98.247, 98.527, 98.562, 98.73, 98.947, 99.608, 99.869
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
  * **Study (harmonization_units)**:
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
      * _phs000285.v3.pht001697.v2.phv00116390.v2_
        * dbGap name: **EX3_AGE**
        * dbGap desc: **CALCULATED AGE AT EXAM 3**
        * dbGap table: **C1REF**
         * varId _phv00116390_ not found in PIC-SURE data dictionary
      * _phs000285.v3.pht001699.v2.phv00116396.v2_
        * dbGap name: **sICAM1**
        * dbGap desc: **SICAM1**
        * dbGap table: **CARE_ICAM**
         * varId _phv00116396_ not found in PIC-SURE data dictionary
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
      * _phs000287.v6.pht001449.v1.phv00098764.v1_
        * dbGap name: **ICAM1**
        * dbGap desc: **BASELINE ICAM-1 -sample**
        * dbGap table: **ADDITIONAL_BIOMARKERS**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000287.v6.pht001452.v1.phv00100487.v1_
        * dbGap name: **AGEBL**
        * dbGap desc: **CALCULATED AGE AT BASELINE**
        * dbGap table: **BASEBOTH**
         * No permissible values listed in PIC-SURE data dictionary
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
  * **Study (harmonization_units)**:
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
      * _phs000209.v13.pht001116.v10.phv00084442.v3_
        * dbGap name: **age1c**
        * dbGap desc: **AGE**
        * dbGap table: **MESA_Exam1Main**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000209.v13.pht002099.v2.phv00142666.v2_
        * dbGap name: **il10a1**
        * dbGap desc: **INTERLEUKIN-10**
        * dbGap table: **MESA_AncilMesaIL10**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000209.v13.pht002099.v2.phv00142667.v2_
        * dbGap name: **il10a1m**
        * dbGap desc: **MISSING INTERLEUKIN-10 VALUE: REASON**
        * dbGap table: **MESA_AncilMesaIL10**
         * PIC-SURE permissible values: High > 10,000, Low < 0.13
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
  * **Study (harmonization_units)**:
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
      * _phs000007.v29.pht000671.v5.phv00066686.v4_
        * No dbGap metadata available
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000007.v29.pht003099.v4.phv00177942.v4_
        * dbGap name: **age7**
        * dbGap desc: **Age at Exam 7**
        * dbGap table: **vr_dates_2019_a_1175s**
         * No permissible values listed in PIC-SURE data dictionary
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
  * **Study (harmonization_units)**:
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
  * **Study (harmonization_units)**:
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
      * _phs000285.v3.pht001851.v2.phv00120748.v2_
        * dbGap name: **EX6_AGE**
        * dbGap desc: **CALCULATED AGE AT EXAM 6**
        * dbGap table: **F1REF**
         * varId _phv00120748_ not found in PIC-SURE data dictionary
      * _phs000285.v3.pht001862.v2.phv00121064.v2_
        * dbGap name: **FL6IL6**
        * dbGap desc: **IL6 PG/ML**
        * dbGap table: **F2IGFIL**
         * varId _phv00121064_ not found in PIC-SURE data dictionary
      * _phs000285.v3.pht001862.v2.phv00121065.v2_
        * dbGap name: **FL6IL6CM**
        * dbGap desc: **IL6 COMMENTS**
        * dbGap table: **F2IGFIL**
         * varId _phv00121065_ not found in PIC-SURE data dictionary
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
      * _phs000287.v6.pht001452.v1.phv00100487.v1_
        * dbGap name: **AGEBL**
        * dbGap desc: **CALCULATED AGE AT BASELINE**
        * dbGap table: **BASEBOTH**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000287.v6.pht001452.v1.phv00100500.v1_
        * dbGap name: **IL6BL**
        * dbGap desc: **IL-6 at baseline (pg/ml)**
        * dbGap table: **BASEBOTH**
         * No permissible values listed in PIC-SURE data dictionary
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
      * _phs000209.v13.pht001116.v10.phv00084442.v3_
        * dbGap name: **age1c**
        * dbGap desc: **AGE**
        * dbGap table: **MESA_Exam1Main**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000209.v13.pht001116.v10.phv00085009.v2_
        * dbGap name: **il61**
        * dbGap desc: **INTERLEUKIN-6 (IL-6) (pg/mL)**
        * dbGap table: **MESA_Exam1Main**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000209.v13.pht001116.v10.phv00085010.v2_
        * dbGap name: **il61M**
        * dbGap desc: **EXCEPTIONAL MISSING IL61**
        * dbGap table: **MESA_Exam1Main**
         * PIC-SURE permissible values: INVALID (UNREPORTABLE) RESULT, VALUE < 0.09 (BELOW MEASUREMENT LIMITS), VALUE > 13
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
  * **Study (harmonization_units)**:
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
      * _phs000007.v29.pht000162.v6.phv00023800.v5_
        * No dbGap metadata available
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000007.v29.pht002852.v2.phv00171864.v2_
        * No dbGap metadata available
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000007.v29.pht002853.v4.phv00171873.v4_
        * No dbGap metadata available
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000007.v29.pht003099.v4.phv00177928.v4_
        * dbGap name: **idtype**
        * dbGap desc: **Framingham Heart Study cohort identifier**
        * dbGap table: **vr_dates_2019_a_1175s**
         * PIC-SURE permissible values: Generation 3 Cohort, New Offspring Spouse Cohort, Offspring Cohort, Omni 1 Cohort, Omni 2 Cohort, Original Cohort
      * _phs000007.v29.pht003099.v4.phv00177930.v4_
        * dbGap name: **age1**
        * dbGap desc: **Age at Exam 1**
        * dbGap table: **vr_dates_2019_a_1175s**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000007.v29.pht003099.v4.phv00177934.v4_
        * dbGap name: **age3**
        * dbGap desc: **Age at Exam 3**
        * dbGap table: **vr_dates_2019_a_1175s**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000007.v29.pht003099.v4.phv00177942.v4_
        * dbGap name: **age7**
        * dbGap desc: **Age at Exam 7**
        * dbGap table: **vr_dates_2019_a_1175s**
         * No permissible values listed in PIC-SURE data dictionary
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
  * **Study (harmonization_units)**:
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
      * _phs000287.v6.pht001449.v1.phv00098770.v1_
        * dbGap name: **LPPLA2AC**
        * dbGap desc: **Baseline LP-PLA2 Activity (nmols/min/mL)**
        * dbGap table: **ADDITIONAL_BIOMARKERS**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000287.v6.pht001452.v1.phv00100487.v1_
        * dbGap name: **AGEBL**
        * dbGap desc: **CALCULATED AGE AT BASELINE**
        * dbGap table: **BASEBOTH**
         * No permissible values listed in PIC-SURE data dictionary
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
      * _phs000007.v29.pht000164.v6.phv00023808.v5_
        * No dbGap metadata available
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000007.v29.pht000304.v5.phv00036408.v4_
        * No dbGap metadata available
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000007.v29.pht002892.v4.phv00172229.v4_
        * No dbGap metadata available
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000007.v29.pht003099.v4.phv00177928.v4_
        * dbGap name: **idtype**
        * dbGap desc: **Framingham Heart Study cohort identifier**
        * dbGap table: **vr_dates_2019_a_1175s**
         * PIC-SURE permissible values: Generation 3 Cohort, New Offspring Spouse Cohort, Offspring Cohort, Omni 1 Cohort, Omni 2 Cohort, Original Cohort
      * _phs000007.v29.pht003099.v4.phv00177930.v4_
        * dbGap name: **age1**
        * dbGap desc: **Age at Exam 1**
        * dbGap table: **vr_dates_2019_a_1175s**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000007.v29.pht003099.v4.phv00177934.v4_
        * dbGap name: **age3**
        * dbGap desc: **Age at Exam 3**
        * dbGap table: **vr_dates_2019_a_1175s**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000007.v29.pht003099.v4.phv00177942.v4_
        * dbGap name: **age7**
        * dbGap desc: **Age at Exam 7**
        * dbGap table: **vr_dates_2019_a_1175s**
         * No permissible values listed in PIC-SURE data dictionary
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
      * _phs000209.v13.pht001116.v10.phv00084442.v3_
        * dbGap name: **age1c**
        * dbGap desc: **AGE**
        * dbGap table: **MESA_Exam1Main**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000209.v13.pht002512.v1.phv00165052.v1_
        * dbGap name: **cam1a**
        * dbGap desc: **LIPOPROTEIN-ASSOCIATED PHOSPHOLIPASE A2: ACTIVITY**
        * dbGap table: **MESA_AncilMesaLpPLA2**
         * No permissible values listed in PIC-SURE data dictionary
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
  * **Study (harmonization_units)**:
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
      * _phs000287.v6.pht001449.v1.phv00098769.v1_
        * dbGap name: **LPPLA2**
        * dbGap desc: **Baseline LP-PLA2 Mass (ng/ml)**
        * dbGap table: **ADDITIONAL_BIOMARKERS**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000287.v6.pht001452.v1.phv00100487.v1_
        * dbGap name: **AGEBL**
        * dbGap desc: **CALCULATED AGE AT BASELINE**
        * dbGap table: **BASEBOTH**
         * No permissible values listed in PIC-SURE data dictionary
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
      * _phs000007.v29.pht000095.v6.phv00021963.v5_
        * No dbGap metadata available
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000007.v29.pht000305.v5.phv00036411.v4_
        * No dbGap metadata available
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000007.v29.pht002892.v4.phv00172227.v4_
        * No dbGap metadata available
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000007.v29.pht003099.v4.phv00177928.v4_
        * dbGap name: **idtype**
        * dbGap desc: **Framingham Heart Study cohort identifier**
        * dbGap table: **vr_dates_2019_a_1175s**
         * PIC-SURE permissible values: Generation 3 Cohort, New Offspring Spouse Cohort, Offspring Cohort, Omni 1 Cohort, Omni 2 Cohort, Original Cohort
      * _phs000007.v29.pht003099.v4.phv00177930.v4_
        * dbGap name: **age1**
        * dbGap desc: **Age at Exam 1**
        * dbGap table: **vr_dates_2019_a_1175s**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000007.v29.pht003099.v4.phv00177934.v4_
        * dbGap name: **age3**
        * dbGap desc: **Age at Exam 3**
        * dbGap table: **vr_dates_2019_a_1175s**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000007.v29.pht003099.v4.phv00177942.v4_
        * dbGap name: **age7**
        * dbGap desc: **Age at Exam 7**
        * dbGap table: **vr_dates_2019_a_1175s**
         * No permissible values listed in PIC-SURE data dictionary
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
      * _phs000209.v13.pht001116.v10.phv00084442.v3_
        * dbGap name: **age1c**
        * dbGap desc: **AGE**
        * dbGap table: **MESA_Exam1Main**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000209.v13.pht002512.v1.phv00165050.v1_
        * dbGap name: **plac1a**
        * dbGap desc: **LIPOPROTEIN-ASSOCIATED PHOSPHOLIPASE A2: MASS**
        * dbGap table: **MESA_AncilMesaLpPLA2**
         * No permissible values listed in PIC-SURE data dictionary
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
  * **Study (harmonization_units)**:
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
  * **Study (harmonization_units)**:
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
      * _phs000209.v13.pht001116.v10.phv00084442.v3_
        * dbGap name: **age1c**
        * dbGap desc: **AGE**
        * dbGap table: **MESA_Exam1Main**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000209.v13.pht001116.v10.phv00085027.v2_
        * dbGap name: **mmp91**
        * dbGap desc: **MATRIX METALLOPROTEINASE 9 (ng/mL)**
        * dbGap table: **MESA_Exam1Main**
         * PIC-SURE permissible values: 100.5, 100.7, 101, 101.6, 102.2, 102.5, 102.7, 102.8, 103.9, 104.2, 105.1, 105.5, 106.1, 106.5, 106.6, 106.9, 108.3, 108.5, 108.7, 109, 109.4, 110.4, 110.9, 111.5, 111.9, 112.3, 114.2, 114.3, 114.7, 114.8, 115.4, 116, 116.2, 116.3, 116.7, 117.1, 117.5, 117.7, 118, 118.4, 118.8, 119.3, 119.4, 119.6, 120.5, 120.7, 121.5, 122.2, 122.4, 122.5, 122.8, 123.3, 123.5, 124.3, 124.4, 124.5, 124.8, 125, 125.8, 126.2, 126.6, 126.7, 126.8, 126.9, 127.1, 127.2, 127.3, 127.6, 127.7, 127.9, 128.1, 128.5, 128.7, 129.1, 129.4, 129.9, 130.1, 130.4, 131.1, 131.2, 131.4, 131.5, 132.6, 132.9, 133.3, 133.4, 133.9, 134.1, 134.9, 135.2, 135.6, 135.7, 135.9, 1351.6, 136.2, 136.6, 136.8, 137, 137.1, 138.4, 138.8, 139.5, 140.2, 140.4, 140.7, 140.9, 141, 141.1, 141.4, 141.8, 142, 142.1, 142.6, 143.3, 143.4, 143.5, 143.8, 145.1, 145.6, 145.7, 145.8, 146.8, 147.2, 147.7, 147.9, 148.4, 148.5, 148.9, 149.2, 149.6, 150, 150.1, 150.5, 150.9, 151.2, 151.4, 151.6, 151.8, 152.1, 152.4, 152.7, 152.8, 153, 153.1, 153.2, 153.3, 153.4, 153.7, 154, 154.3, 154.6, 155.3, 155.9, 156.1, 156.8, 157, 157.2, 157.6, 158.2, 158.3, 158.4, 158.8, 159.1, 159.2, 159.4, 159.5, 159.8, 160.6, 160.7, 160.8, 161, 161.5, 161.7, 161.8, 162.2, 162.8, 163.8, 163.9, 164.3, 164.5, 164.6, 164.8, 164.9, 165.4, 165.8, 165.9, 166.2, 166.9, 167.1, 167.3, 167.5, 167.7, 167.8, 168, 168.3, 169, 169.4, 169.8, 169.9, 170.3, 170.6, 171, 171.1, 171.5, 171.6, 172.1, 173.1, 173.2, 173.7, 174, 174.7, 175, 175.2, 175.8, 176.3, 176.4, 176.6, 176.7, 176.8, 177, 177.3, 177.6, 177.8, 178.1, 178.3, 178.6, 178.7, 179, 179.5, 179.8, 180.2, 180.8, 181.5, 181.6, 182.6, 182.7, 182.9, 183, 183.1, 183.3, 183.8, 183.9, 184.5, 184.6, 185.2, 185.8, 186, 186.2, 186.6, 187.4, 187.6, 187.7, 187.8, 188.1, 188.4, 188.5, 188.7, 189.2, 189.3, 189.8, 189.9, 190.3, 190.4, 190.5, 190.6, 191.2, 191.4, 191.7, 191.9, 192.1, 192.3, 192.4, 192.8, 193, 193.1, 193.3, 193.4, 193.5, 194.3, 194.5, 194.7, 194.8, 195, 195.5, 195.7, 195.8, 196.1, 196.4, 196.6, 197.1, 197.3, 197.6, 197.8, 197.9, 198, 198.7, 198.9, 199, 199.3, 199.5, 199.6, 201.3, 201.7, 202, 202.1, 202.2, 202.3, 203.4, 203.9, 204.2, 204.6, 204.9, 205.2, 205.5, 205.9, 206.2, 207.1, 207.2, 207.9, 208.4, 208.7, 209.1, 209.2, 209.9, 210.4, 210.5, 210.8, 211.2, 211.3, 211.8, 213.2, 213.5, 213.7, 213.9, 214.4, 214.6, 214.7, 214.9, 215, 215.1, 215.6, 215.8, 215.9, 216, 216.9, 217.2, 217.8, 217.9, 218.1, 218.2, 218.4, 219.5, 219.6, 220.2, 221, 221.1, 222.1, 222.2, 223.3, 223.6, 223.7, 223.8, 224, 225.3, 225.6, 226.1, 226.7, 227.5, 227.8, 227.9, 228, 228.8, 229.2, 229.5, 230.2, 230.7, 230.9, 231.1, 231.2, 231.3, 231.4, 231.7, 232.3, 232.6, 232.7, 233.2, 233.9, 234.1, 234.2, 234.8, 235, 235.4, 235.9, 236.7, 237.1, 238, 238.2, 238.3, 238.4, 238.7, 239.4, 239.6, 239.8, 240, 240.2, 240.3, 240.8, 241.3, 241.6, 242.5, 242.6, 242.8, 243.6, 243.7, 244, 244.7, 245.7, 246.6, 246.7, 247.3, 247.4, 247.7, 247.9, 248, 249, 249.4, 249.8, 249.9, 250.3, 250.4, 251.1, 251.7, 252.2, 252.3, 252.6, 252.8, 253.7, 253.8, 254, 254.5, 255.2, 255.5, 255.6, 256.4, 256.8, 257.4, 258.5, 259.4, 259.7, 260.1, 260.5, 260.8, 261.3, 261.7, 261.8, 262.1, 262.2, 262.9, 263.3, 263.9, 264.4, 265.1, 265.2, 265.4, 265.7, 265.8, 266.1, 266.2, 266.4, 266.6, 266.7, 266.9, 267, 267.6, 268.2, 268.3, 268.7, 268.9, 269.5, 269.7, 269.9, 270.3, 270.4, 271.3, 272.1, 272.2, 272.9, 273.3, 274.3, 274.8, 274.9, 275.9, 276.1, 277.2, 277.5, 278.6, 278.7, 278.9, 279.4, 279.5, 279.6, 280.4, 280.9, 281.9, 282.5, 282.7, 283, 283.2, 283.5, 285.1, 285.4, 286.2, 286.9, 287.8, 288.5, 289.5, 290, 290.2, 290.3, 291.1, 291.2, 291.5, 291.6, 291.9, 292, 292.3, 292.7, 293.1, 293.6, 293.8, 294.1, 295.8, 296.6, 298.7, 298.8, 299.3, 299.8, 300.1, 301, 301.2, 301.4, 301.8, 302.3, 302.9, 303.1, 303.4, 304, 304.5, 305.2, 305.4, 306.6, 308.1, 309.5, 310.9, 312.2, 312.4, 314.7, 315.3, 316.9, 317.9, 318, 318.1, 319.6, 320.1, 320.8, 321.4, 321.5, 322.5, 322.7, 323.1, 323.7, 324, 324.1, 325.5, 325.9, 326.3, 327.6, 328.7, 330.9, 332.2, 332.7, 333.4, 334.6, 334.7, 335.5, 336.1, 338.2, 338.3, 338.7, 339, 339.8, 34.2, 340.1, 340.3, 341.4, 341.5, 344.1, 344.7, 344.9, 345.9, 347.8, 349.3, 35.1, 350.3, 350.6, 351.9, 353.5, 353.7, 354.2, 355.2, 356.4, 356.7, 357, 357.9, 358.2, 358.7, 359.7, 360.9, 361.6, 361.8, 364.3, 367.1, 367.6, 368.1, 368.5, 369.9, 372, 374.7, 376, 376.1, 377.6, 377.9, 378.7, 38.6, 380.4, 381.3, 381.4, 381.7, 383.9, 384.5, 385.6, 386.2, 387.4, 388.6, 390.5, 394.6, 396.2, 396.8, 397.6, 399.4, 400, 400.7, 401, 402.9, 404.5, 408, 408.9, 409.9, 410.4, 410.6, 411.4, 411.7, 411.9, 412.2, 412.5, 414.2, 415.1, 416.9, 418, 418.9, 421.1, 421.9, 423.5, 424.3, 425.9, 426.5, 427.7, 428.4, 429.6, 43, 431.2, 433.5, 439, 440.4, 442.1, 442.4, 443.8, 444.1, 445.7, 45.9, 450, 450.4, 451.4, 453.9, 456.9, 457.4, 461.1, 461.2, 462.1, 462.4, 466.3, 467.7, 47, 471.8, 472.4, 473.3, 475.6, 476.2, 48.3, 482.7, 484.1, 487.6, 487.8, 490.6, 491.4, 492.9, 494.3, 498.4, 499, 50.4, 503, 505.5, 507.1, 507.9, 508.2, 510.2, 515.5, 516.9, 517.1, 517.9, 519.7, 52.4, 52.9, 53, 533.7, 536.1, 540.1, 542.7, 546.8, 552.1, 566.6, 567.8, 568.8, 571.9, 575.1, 584.1, 589.3, 595.1, 600.3, 604.6, 608.3, 61.6, 61.8, 612.9, 618.7, 62.7, 620.5, 621.3, 621.7, 630.1, 64.5, 64.7, 646.5, 65.5, 654.6, 66.4, 66.7, 66.9, 661.9, 663.9, 668.3, 67.1, 67.3, 67.8, 68, 68.5, 680.9, 695.3, 700.8, 707.1, 71, 712.4, 718, 74.1, 74.2, 74.5, 74.9, 75, 75.7, 76, 762.3, 77.6, 775.8, 78.3, 78.8, 78.9, 80.4, 80.9, 801.6, 81.2, 81.9, 82, 82.4, 83.5, 831.8, 836.9, 84.2, 85.2, 85.4, 85.8, 86.5, 87.6, 88.3, 88.4, 88.5, 88.7, 88.8, 89.3, 89.5, 890.3, 891.5, 91.1, 91.3, 91.4, 91.5, 92.4, 928.1, 93.1, 93.3, 93.4, 937.1, 94.4, 94.6, 94.8, 95, 95.6, 96.3, 96.8, 98.1, 98.8, 99.9
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
  * **Study (harmonization_units)**:
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
      * _phs000007.v29.pht000167.v6.phv00023854.v5_
        * No dbGap metadata available
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000007.v29.pht003099.v4.phv00177942.v4_
        * dbGap name: **age7**
        * dbGap desc: **Age at Exam 7**
        * dbGap table: **vr_dates_2019_a_1175s**
         * No permissible values listed in PIC-SURE data dictionary
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
  * **Study (harmonization_units)**:
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
  * **Study (harmonization_units)**:
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
  * **Study (harmonization_units)**:
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
      * _phs000007.v29.pht000111.v5.phv00022779.v4_
        * No dbGap metadata available
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000007.v29.pht003099.v4.phv00177942.v4_
        * dbGap name: **age7**
        * dbGap desc: **Age at Exam 7**
        * dbGap table: **vr_dates_2019_a_1175s**
         * No permissible values listed in PIC-SURE data dictionary
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
      * _phs000209.v13.pht001118.v8.phv00085773.v3_
        * dbGap name: **age2c**
        * dbGap desc: **AGE AT EXAM 2**
        * dbGap table: **MESA_Exam2Main**
         * PIC-SURE permissible values: 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87
      * _phs000209.v13.pht001119.v8.phv00086259.v4_
        * dbGap name: **age3c**
        * dbGap desc: **AGE AT EXAM3**
        * dbGap table: **MESA_Exam3Main**
         * PIC-SURE permissible values: 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88
      * _phs000209.v13.pht002198.v2.phv00160529.v1_
        * dbGap name: **exam3**
        * dbGap desc: **EXAM**
        * dbGap table: **MESA_AncilMesaAbdBodyComposition**
         * PIC-SURE permissible values: Exam 2, Exam 3
      * _phs000209.v13.pht002198.v2.phv00160540.v1_
        * dbGap name: **tnfa3**
        * dbGap desc: **TNFa (pg/mL)**
        * dbGap table: **MESA_AncilMesaAbdBodyComposition**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000209.v13.pht002198.v2.phv00160541.v1_
        * dbGap name: **tnfa3m**
        * dbGap desc: **TNFa (MISSING VALUE REASON)**
        * dbGap table: **MESA_AncilMesaAbdBodyComposition**
         * PIC-SURE permissible values: High > 12, Insufficient volume for testing, Low < 0.16, Unknown
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
  * **Study (harmonization_units)**:
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
      * _phs000209.v13.pht001116.v10.phv00084442.v3_
        * dbGap name: **age1c**
        * dbGap desc: **AGE**
        * dbGap table: **MESA_Exam1Main**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000209.v13.pht001116.v10.phv00085029.v3_
        * dbGap name: **tnfri1**
        * dbGap desc: **TUMOR NECROSIS FACTOR-A SOLUBLE RECEPTORS (pg/ml)**
        * dbGap table: **MESA_Exam1Main**
         * PIC-SURE permissible values: -555, -888, 1000, 1001, 1002, 1003, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1022, 1023, 1024, 1025, 1027, 1028, 1029, 1030, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1270, 1271, 1272, 1273, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1310, 1311, 1312, 1313, 1314, 1315, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328, 1329, 1330, 1331, 1332, 1333, 1334, 1335, 1336, 1337, 1338, 1339, 1340, 1341, 1342, 1343, 1344, 1345, 1346, 1347, 1348, 1349, 1350, 1351, 1352, 1353, 1354, 1355, 1356, 1357, 1358, 1359, 1360, 1361, 1362, 1363, 1364, 1365, 1366, 1367, 1368, 1369, 1370, 1371, 1372, 1373, 1374, 1375, 1376, 1377, 1378, 1379, 1380, 1381, 1382, 1383, 1384, 1385, 1386, 1387, 1388, 1389, 1390, 1391, 1392, 1393, 1394, 1395, 1396, 1397, 1398, 1399, 1400, 1401, 1403, 1404, 1405, 1406, 1407, 1408, 1409, 1410, 1411, 1412, 1413, 1414, 1415, 1416, 1417, 1418, 1419, 1420, 1421, 1422, 1423, 1424, 1425, 1426, 1427, 1428, 1429, 1430, 1431, 1433, 1434, 1435, 1437, 1438, 1439, 1440, 1441, 1442, 1443, 1444, 1445, 1446, 1447, 1448, 1449, 1450, 1451, 1452, 1453, 1454, 1455, 1457, 1458, 1459, 1460, 1461, 1462, 1463, 1465, 1466, 1467, 1468, 1469, 1470, 1471, 1472, 1474, 1476, 1477, 1478, 1479, 1480, 1481, 1482, 1483, 1484, 1485, 1486, 1487, 1488, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1515, 1516, 1517, 1518, 1519, 1520, 1521, 1522, 1524, 1525, 1526, 1527, 1528, 1529, 1530, 1531, 1532, 1533, 1534, 1535, 1536, 1537, 1539, 1540, 1541, 1542, 1543, 1544, 1545, 1546, 1547, 1548, 1549, 1550, 1551, 1552, 1553, 1554, 1555, 1556, 1558, 1559, 1561, 1562, 1563, 1564, 1565, 1567, 1568, 1569, 1571, 1572, 1573, 1574, 1575, 1576, 1578, 1579, 1580, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1592, 1594, 1595, 1596, 1597, 1598, 1600, 1601, 1602, 1603, 1604, 1606, 1607, 1608, 1609, 1610, 1612, 1613, 1614, 1616, 1617, 1618, 1619, 1620, 1621, 1622, 1624, 1625, 1626, 1627, 1628, 1630, 1631, 1632, 1633, 1634, 1636, 1639, 1640, 1641, 1644, 1645, 1646, 1647, 1648, 1649, 1651, 1652, 1653, 1654, 1655, 1657, 1660, 1662, 1664, 1665, 1666, 1667, 1668, 1669, 1670, 1671, 1673, 1675, 1676, 1678, 1679, 1681, 1683, 1684, 1685, 1686, 1687, 1688, 1690, 1691, 1692, 1693, 1694, 1696, 1697, 1698, 1701, 1703, 1705, 1706, 1707, 1708, 1709, 1711, 1712, 1713, 1715, 1717, 1719, 1720, 1721, 1722, 1723, 1725, 1726, 1728, 1729, 1731, 1735, 1737, 1738, 1739, 1740, 1741, 1742, 1743, 1744, 1745, 1746, 1748, 1749, 1750, 1755, 1756, 1757, 1758, 1759, 1760, 1761, 1762, 1764, 1766, 1767, 1768, 1770, 1771, 1773, 1774, 1776, 1778, 1780, 1781, 1783, 1784, 1786, 1787, 1789, 1791, 1792, 1793, 1795, 1796, 1797, 1798, 1800, 1801, 1802, 1803, 1806, 1807, 1809, 1810, 1812, 1816, 1817, 1820, 1821, 1825, 1827, 1828, 1829, 1833, 1835, 1837, 1839, 1840, 1845, 1847, 1848, 1850, 1852, 1853, 1855, 1858, 1861, 1863, 1864, 1865, 1866, 1867, 1868, 1869, 1871, 1873, 1875, 1878, 1879, 1882, 1883, 1886, 1888, 1890, 1894, 1902, 1904, 1907, 1910, 1911, 1912, 1914, 1915, 1920, 1921, 1922, 1928, 1929, 1931, 1934, 1936, 1938, 1940, 1942, 1943, 1946, 1948, 1950, 1954, 1955, 1959, 1960, 1967, 1970, 1972, 1974, 1977, 1978, 1982, 1984, 1988, 1989, 1991, 1994, 1996, 1997, 2001, 2008, 2011, 2012, 2014, 2016, 2020, 2024, 2027, 2030, 2049, 2055, 2056, 2057, 2058, 2060, 2063, 2064, 2068, 2071, 2073, 2075, 2076, 2085, 2087, 2106, 2107, 2108, 2109, 2113, 2114, 2120, 2124, 2125, 2129, 2130, 2132, 2140, 2144, 2148, 2153, 2157, 2159, 2164, 2175, 2176, 2179, 2183, 2188, 2190, 2195, 2199, 2201, 2203, 2208, 2210, 2212, 2218, 2220, 2222, 2226, 2232, 2234, 2240, 2248, 2249, 2253, 2255, 2256, 2261, 2266, 2271, 2272, 2286, 2293, 2301, 2305, 2307, 2310, 2312, 2314, 2316, 2327, 2328, 2336, 2337, 2339, 2341, 2345, 2346, 2356, 2359, 2367, 2369, 2370, 2375, 2385, 2394, 2397, 2399, 2409, 2415, 2418, 2426, 2427, 2432, 2438, 2442, 2452, 2461, 2465, 2467, 2472, 2495, 2499, 2518, 2519, 2531, 2532, 2534, 2539, 2552, 2562, 2569, 2584, 2591, 2593, 2609, 2614, 2634, 2668, 2711, 2720, 2725, 2728, 2745, 2777, 2781, 2792, 2800, 2826, 2834, 2861, 2862, 2869, 2874, 2907, 2920, 2927, 2948, 2960, 2982, 2999, 3018, 3037, 3055, 3060, 3080, 3111, 3191, 3229, 3745, 3775, 3864, 4034, 4040, 4128, 4146, 4162, 4610, 4918, 5052, 5419, 5544, 603, 618, 622, 636, 653, 654, 663, 675, 696, 697, 699, 706, 736, 741, 742, 751, 753, 760, 764, 769, 771, 772, 773, 775, 779, 782, 783, 785, 788, 790, 791, 793, 794, 797, 798, 802, 804, 807, 810, 811, 813, 814, 815, 816, 817, 818, 819, 822, 823, 824, 827, 828, 830, 833, 834, 836, 837, 838, 839, 844, 845, 846, 847, 849, 851, 852, 853, 854, 858, 859, 860, 864, 865, 866, 867, 869, 870, 871, 872, 873, 875, 876, 877, 878, 879, 880, 881, 882, 885, 886, 887, 888, 889, 890, 892, 893, 894, 895, 898, 899, 901, 903, 904, 905, 906, 907, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 921, 925, 926, 927, 928, 929, 930, 931, 933, 934, 935, 936, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 953, 954, 955, 956, 957, 958, 959, 961, 963, 964, 966, 967, 969, 970, 971, 972, 973, 975, 976, 978, 979, 980, 981, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 998, 999
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
  * **Study (harmonization_units)**:
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
      * _phs000007.v29.pht000175.v6.phv00023913.v5_
        * No dbGap metadata available
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000007.v29.pht002898.v2.phv00172383.v2_
        * No dbGap metadata available
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000007.v29.pht002899.v4.phv00172391.v4_
        * No dbGap metadata available
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000007.v29.pht003099.v4.phv00177928.v4_
        * dbGap name: **idtype**
        * dbGap desc: **Framingham Heart Study cohort identifier**
        * dbGap table: **vr_dates_2019_a_1175s**
         * PIC-SURE permissible values: Generation 3 Cohort, New Offspring Spouse Cohort, Offspring Cohort, Omni 1 Cohort, Omni 2 Cohort, Original Cohort
      * _phs000007.v29.pht003099.v4.phv00177930.v4_
        * dbGap name: **age1**
        * dbGap desc: **Age at Exam 1**
        * dbGap table: **vr_dates_2019_a_1175s**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000007.v29.pht003099.v4.phv00177934.v4_
        * dbGap name: **age3**
        * dbGap desc: **Age at Exam 3**
        * dbGap table: **vr_dates_2019_a_1175s**
         * No permissible values listed in PIC-SURE data dictionary
      * _phs000007.v29.pht003099.v4.phv00177942.v4_
        * dbGap name: **age7**
        * dbGap desc: **Age at Exam 7**
        * dbGap table: **vr_dates_2019_a_1175s**
         * No permissible values listed in PIC-SURE data dictionary
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