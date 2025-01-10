
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
    * [ARIC](#annotated_sex_1-aric)
    * [CARDIA](#annotated_sex_1-cardia)
    * [CHS](#annotated_sex_1-chs)
    * [COPDGene](#annotated_sex_1-copdgene)
    * [FHS](#annotated_sex_1-fhs)
    * [HCHS_SOL](#annotated_sex_1-hchs_sol)
    * [JHS](#annotated_sex_1-jhs)
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
    * [HCHS_SOL](#geographic_site_1-hchs_sol)
    * [JHS](#geographic_site_1-jhs)
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
    * [COPDGene](#hispanic_or_latino_1-copdgene)
    * [HCHS_SOL](#hispanic_or_latino_1-hchs_sol)
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
    * [HCHS_SOL](#hispanic_subgroup_1-hchs_sol)
    * [WHI](#hispanic_subgroup_1-whi)
  * **Metadata**:
    **`Data Type`**: encoded, **`Measurement Units`**: None, **`Version`**: 1, **`Has Age Variable`**: No, **`Date Harmonized`**: 2017-08-02 13:25:16
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2018AB, `ID:` C0804625
  * **DCC Harmonization Comments**:

    No additional summary information for this trait.
    
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
    * [ARIC](#race_us_1-aric)
    * [CARDIA](#race_us_1-cardia)
    * [COPDGene](#race_us_1-copdgene)
    * [HCHS_SOL](#race_us_1-hchs_sol)
    * [JHS](#race_us_1-jhs)
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
    * [ARIC](#subcohort_1-aric)
    * [CARDIA](#subcohort_1-cardia)
    * [CHS](#subcohort_1-chs)
    * [COPDGene](#subcohort_1-copdgene)
    * [FHS](#subcohort_1-fhs)
    * [HCHS_SOL](#subcohort_1-hchs_sol)
    * [JHS](#subcohort_1-jhs)
    * [WHI](#subcohort_1-whi)
  * **Metadata**:
    **`Data Type`**: encoded, **`Measurement Units`**: None, **`Version`**: 2, **`Has Age Variable`**: No, **`Date Harmonized`**: 2019-10-29 10:25:04
  * **Controlled Vocabulary**:
    `Source:` UMLS, `Version:` 2018AB, `ID:` C0599755
  * **DCC Harmonization Comments**:

    The concept of "cohort" or "subcohort" varies among studies and its meaning is highly dependent on study design. This is intended to be a general-purpose variable, and analysts should consult study documentation before using this variable in analysis.
    
    If available, we recoded component study variables indicating subcohort membership. In instances where there was no variable indicating subcohort membership, we assigned the corresponding harmonized subcohort codes to the set of subject IDs included in subcohort-specific datasets. All consented subjects in studies with no subcohort structure were assigned a code of the form "`TOPMed_abbreviation_NoSubcohortStructure`" (e.g. "`JHS_NoSubcohortStructure`").
    
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