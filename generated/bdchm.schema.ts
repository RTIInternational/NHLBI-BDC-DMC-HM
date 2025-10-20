export type EntityId = string;
export type PersonId = string;
export type DemographyId = string;
export type ParticipantId = string;
export type ResearchStudyId = string;
export type ConsentId = string;
export type VisitId = string;
export type OrganizationId = string;
export type TimePointId = string;
export type QuestionnaireId = string;
export type QuestionnaireItemId = string;
export type QuestionnaireResponseId = string;
export type ConditionId = string;
export type ProcedureId = string;
export type ExposureId = string;
export type DrugExposureId = string;
export type DeviceExposureId = string;
export type DimensionalObservationId = string;
export type DimensionalObservationSetId = string;
export type FileId = string;
export type DocumentId = string;
export type SpecimenId = string;
export type SpecimenContainerId = string;
export type SpecimenCreationActivityId = string;
export type SpecimenQualityObservationId = string;
export type SpecimenQuantityObservationId = string;
export type SpecimenProcessingActivityId = string;
export type SpecimenStorageActivityId = string;
export type SpecimenTransportActivityId = string;
export type BiologicProductId = string;
export type SubstanceId = string;
export type QuantityId = string;
export type BodySiteId = string;
export type ObservationSetId = string;
export type ObservationId = string;
export type MeasurementObservationSetId = string;
export type MeasurementObservationId = string;
export type SdohObservationSetId = string;
export type SdohObservationId = string;
export type CauseOfDeathId = string;
/**
* A base constrained set of enumerative values that can be used as a placeholder in a class expected to be further constrained in a subclass.
*/
export enum BaseEnum {
    
};
/**
* A constrained set of enumerative values drawn from the Data Use Ontology (DUO). The DUO is an ontology which represent data use conditions.
*/
export enum DataUseEnum {
    
    /** This data use permission indicates that use is allowed for general research use for any research purpose. This includes but is not limited to: health/medical/biomedical purposes, fundamental biology research, the study of population origins or ancestry, statistical methods and algorithms development, and social-sciences research. */
    GRU = "GRU",
    /** This data use permission indicates that use is allowed for health/medical/biomedical purposes; does not include the study of population origins or ancestry. */
    HMB = "HMB",
    /** This data use permission indicates that use is allowed provided it is related to the specified disease. This term should be coupled with a term describing a disease from an ontology to specify the disease the restriction applies to. DUO recommends MONDO be used, to provide the basis for automated evaluation. For more information see https://github.com/EBISPOT/DUO/blob/master/MONDO_Overview.md Other resources, such as the Disease Ontology, HPO, SNOMED-CT or others, can also be used. When those other resources are being used, this may require an extra mapping step to leverage automated matching algorithms. */
    DS = "DS",
    /** This data use modifier indicates that use of the data is limited to not-for-profit organizations and not-for-profit use, non-commercial use. */
    NPUNCU = "NPUNCU",
    /** This data use modifier indicates that the requestor must provide documentation of local IRB/ERB approval. */
    IRB = "IRB",
};
/**
* A constrained set of enumerative values containing the United States Office of Management and Budget (OMB) values for ethnicity.
*/
export enum EthnicityEnum {
    
    /** A person of Cuban, Mexican, Puerto Rican, South or Central American, or other Spanish culture or origin, regardless of race. The term, "Spanish origin" can be used in addition to "Hispanic or Latino". (OMB) */
    HISPANIC_OR_LATINO = "HISPANIC_OR_LATINO",
    /** A person not of Cuban, Mexican, Puerto Rican, South or Central American, or other Spanish culture or origin, regardless of race. */
    NOT_HISPANIC_OR_LATINO = "NOT_HISPANIC_OR_LATINO",
};
/**
* A constrained set of enumerative values containing the United States Office of Management and Budget (OMB) values for race.
*/
export enum RaceEnum {
    
    /** A person having origins in any of the original peoples of North and South America (including Central America) and who maintains tribal affiliation or community attachment. (OMB) */
    AMERICAN_INDIAN_OR_ALASKA_NATIVE = "AMERICAN_INDIAN_OR_ALASKA_NATIVE",
    /** A person having origins in any of the original peoples of the Far East, Southeast Asia, or the Indian subcontinent, including for example, Cambodia, China, India, Japan, Korea, Malaysia, Pakistan, the Philippine Islands, Thailand, and Vietnam. (OMB) */
    ASIAN = "ASIAN",
    /** A person having origins in any of the Black racial groups of Africa. Terms such as "Haitian" or "Negro" can be used in addition to "Black or African American". (OMB) */
    BLACK_OR_AFRICAN_AMERICAN = "BLACK_OR_AFRICAN_AMERICAN",
    /** Denotes a person having origins in any of the original peoples of Hawaii, Guam, Samoa, or other Pacific Islands. The term covers particularly people who identify themselves as part-Hawaiian, Native Hawaiian, Guamanian or Chamorro, Carolinian, Samoan, Chuukese (Trukese), Fijian, Kosraean, Melanesian, Micronesian, Northern Mariana Islander, Palauan, Papua New Guinean, Pohnpeian, Polynesian, Solomon Islander, Tahitian, Tokelauan, Tongan, Yapese, or Pacific Islander, not specified. */
    NATIVE_HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER = "NATIVE_HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER",
    /** Not known, not observed, not recorded, or refused. */
    UNKNOWN = "UNKNOWN",
    /** Denotes person with European, Middle Eastern, or North African ancestral origin who identifies, or is identified, as White. */
    WHITE = "WHITE",
    /** A person having more than one race. */
    MORE_THAN_ONE_RACE = "MORE_THAN_ONE_RACE",
};
/**
* A constrained set of enumerative values containing the OMOP values for sex.
*/
export enum SexEnum {
    
    /** A person who belongs to the sex that normally produces sperm. */
    MALE = "MALE",
    /** A person who belongs to the sex that normally produces ova. */
    FEMALE = "FEMALE",
    /** Not known, not observed, not recorded, or refused. */
    UNKNOWN = "UNKNOWN",
};
/**
* A constrained set of enumerative values containing the NCBITaxon values for cellular organisms.
*/
export enum CellularOrganismSpeciesEnum {
    
};
/**
* A constrained set of enumerative values containing the OMOP values for vital status.
*/
export enum VitalStatusEnum {
    
    /** Showing characteristics of life; displaying signs of life. (NCIt) */
    ALIVE = "ALIVE",
    /** The cessation of life. (NCIt) */
    DEAD = "DEAD",
};
/**
* A constrained set of enumerative values containing the VBO values for vertebrate breeds.
*/
export enum VertebrateBreedEnum {
    
};
/**
* A constrained set of enumerative values containing the OMOP values for visit categories.
*/
export enum VisitCategoryEnum {
    
    /** Person visiting hospital, at a care stie, in bed, for duration of more than one day, with physicians and other Providers permanently available to deliver service around the clock */
    INPATIENT = "INPATIENT",
    /** Person visiting dedicated healthcare institution for treating emergencies, at a Care Site, within one day, with physicians and Providers permanently available to deliver service around the clock */
    EMERGENCY_ROOM = "EMERGENCY_ROOM",
    /** Person visiting ER followed by a subsequent Inpatient Visit, where Emergency department is part of hospital, and transition from the ER to other hospital departments is undefined */
    EMERGENCY_ROOM_AND_INPATIENT = "EMERGENCY_ROOM_AND_INPATIENT",
    /** Person visiting dedicated institution for reasons of poor health, at a Care Site, long-term or permanently, with no physician but possibly other Providers permanently available to deliver service around the clock */
    NON_HOSPITAL_INSTITUTION = "NON_HOSPITAL_INSTITUTION",
    /** Person visiting dedicated ambulatory healthcare institution, at a Care Site, within one day, without bed, with physicians or medical Providers delivering service during Visit */
    OUTPATIENT = "OUTPATIENT",
    /** Provider visiting Person, without a Care Site, within one day, delivering service */
    HOME = "HOME",
    /** Patient engages with Provider through communication media */
    TELEHEALTH = "TELEHEALTH",
    /** Person visiting pharmacy for dispensing of Drug, at a Care Site, within one day */
    PHARMACY = "PHARMACY",
    /** Patient visiting dedicated institution, at a Care Site, within one day, for the purpose of a Measurement. */
    LABORATORY = "LABORATORY",
    /** Person using transportation service for the purpose of initiating one of the other Visits, without a Care Site, within one day, potentially with Providers accompanying the Visit and delivering service */
    AMBULANCE = "AMBULANCE",
    /** Person interacting with healthcare system, without a Care Site, within a day, with no Providers involved, for administrative purposes */
    CASE_MANAGEMENT = "CASE_MANAGEMENT",
};
/**
* A constrained set of enumerative values containing the OMOP values for visit provenance.
*/
export enum VisitProvenanceEnum {
    
    /** Case Report Form */
    CASE_REPORT_FORM = "CASE_REPORT_FORM",
    /** Claim */
    CLAIM = "CLAIM",
    /** Claim authorization */
    CLAIM_AUTHORIZATION = "CLAIM_AUTHORIZATION",
    /** Claim discharge record */
    CLAIM_DISCHARGE_RECORD = "CLAIM_DISCHARGE_RECORD",
    /** Claim enrolment record */
    CLAIM_ENROLMENT_RECORD = "CLAIM_ENROLMENT_RECORD",
    /** Cost record */
    COST_RECORD = "COST_RECORD",
    /** Death Certificate */
    DEATH_CERTIFICATE = "DEATH_CERTIFICATE",
    /** Dental claim */
    DENTAL_CLAIM = "DENTAL_CLAIM",
    /** EHR */
    EHR = "EHR",
    /** EHR Pathology report */
    EHR_PATHOLOGY_REPORT = "EHR_PATHOLOGY_REPORT",
    /** EHR administration record */
    EHR_ADMINISTRATION_RECORD = "EHR_ADMINISTRATION_RECORD",
    /** EHR admission note */
    EHR_ADMISSION_NOTE = "EHR_ADMISSION_NOTE",
    /** EHR ancillary report */
    EHR_ANCILLARY_REPORT = "EHR_ANCILLARY_REPORT",
    /** EHR billing record */
    EHR_BILLING_RECORD = "EHR_BILLING_RECORD",
    /** EHR chief complaint */
    EHR_CHIEF_COMPLAINT = "EHR_CHIEF_COMPLAINT",
    /** EHR discharge record */
    EHR_DISCHARGE_RECORD = "EHR_DISCHARGE_RECORD",
    /** EHR discharge summary */
    EHR_DISCHARGE_SUMMARY = "EHR_DISCHARGE_SUMMARY",
    /** EHR dispensing record */
    EHR_DISPENSING_RECORD = "EHR_DISPENSING_RECORD",
    /** EHR emergency room note */
    EHR_EMERGENCY_ROOM_NOTE = "EHR_EMERGENCY_ROOM_NOTE",
    /** EHR encounter record */
    EHR_ENCOUNTER_RECORD = "EHR_ENCOUNTER_RECORD",
    /** EHR episode record */
    EHR_EPISODE_RECORD = "EHR_EPISODE_RECORD",
    /** EHR inpatient note */
    EHR_INPATIENT_NOTE = "EHR_INPATIENT_NOTE",
    /** EHR medication list */
    EHR_MEDICATION_LIST = "EHR_MEDICATION_LIST",
    /** EHR note */
    EHR_NOTE = "EHR_NOTE",
    /** EHR nursing report */
    EHR_NURSING_REPORT = "EHR_NURSING_REPORT",
    /** EHR order */
    EHR_ORDER = "EHR_ORDER",
    /** EHR outpatient note */
    EHR_OUTPATIENT_NOTE = "EHR_OUTPATIENT_NOTE",
    /** EHR physical examination */
    EHR_PHYSICAL_EXAMINATION = "EHR_PHYSICAL_EXAMINATION",
    /** EHR planned dispensing record */
    EHR_PLANNED_DISPENSING_RECORD = "EHR_PLANNED_DISPENSING_RECORD",
    /** EHR prescription */
    EHR_PRESCRIPTION = "EHR_PRESCRIPTION",
    /** EHR prescription issue record */
    EHR_PRESCRIPTION_ISSUE_RECORD = "EHR_PRESCRIPTION_ISSUE_RECORD",
    /** EHR problem list */
    EHR_PROBLEM_LIST = "EHR_PROBLEM_LIST",
    /** EHR radiology report */
    EHR_RADIOLOGY_REPORT = "EHR_RADIOLOGY_REPORT",
    /** EHR referral record */
    EHR_REFERRAL_RECORD = "EHR_REFERRAL_RECORD",
    /** External CDM instance */
    EXTERNAL_CDM_INSTANCE = "EXTERNAL_CDM_INSTANCE",
    /** Facility claim */
    FACILITY_CLAIM = "FACILITY_CLAIM",
    /** Facility claim detail */
    FACILITY_CLAIM_DETAIL = "FACILITY_CLAIM_DETAIL",
    /** Facility claim header */
    FACILITY_CLAIM_HEADER = "FACILITY_CLAIM_HEADER",
    /** Geographic isolation record */
    GEOGRAPHIC_ISOLATION_RECORD = "GEOGRAPHIC_ISOLATION_RECORD",
    /** Government report */
    GOVERNMENT_REPORT = "GOVERNMENT_REPORT",
    /** Health Information Exchange record */
    HEALTH_INFORMATION_EXCHANGE_RECORD = "HEALTH_INFORMATION_EXCHANGE_RECORD",
    /** Health Risk Assessment */
    HEALTH_RISK_ASSESSMENT = "HEALTH_RISK_ASSESSMENT",
    /** Healthcare professional filled survey */
    HEALTHCARE_PROFESSIONAL_FILLED_SURVEY = "HEALTHCARE_PROFESSIONAL_FILLED_SURVEY",
    /** Hospital cost */
    HOSPITAL_COST = "HOSPITAL_COST",
    /** Inpatient claim */
    INPATIENT_CLAIM = "INPATIENT_CLAIM",
    /** Inpatient claim detail */
    INPATIENT_CLAIM_DETAIL = "INPATIENT_CLAIM_DETAIL",
    /** Inpatient claim header */
    INPATIENT_CLAIM_HEADER = "INPATIENT_CLAIM_HEADER",
    /** Lab */
    LAB = "LAB",
    /** Mail order record */
    MAIL_ORDER_RECORD = "MAIL_ORDER_RECORD",
    /** NLP */
    NLP = "NLP",
    /** Outpatient claim */
    OUTPATIENT_CLAIM = "OUTPATIENT_CLAIM",
    /** Outpatient claim detail */
    OUTPATIENT_CLAIM_DETAIL = "OUTPATIENT_CLAIM_DETAIL",
    /** Outpatient claim header */
    OUTPATIENT_CLAIM_HEADER = "OUTPATIENT_CLAIM_HEADER",
    /** Patient filled survey */
    PATIENT_FILLED_SURVEY = "PATIENT_FILLED_SURVEY",
    /** Patient or payer paid record */
    PATIENT_OR_PAYER_PAID_RECORD = "PATIENT_OR_PAYER_PAID_RECORD",
    /** Patient reported cost */
    PATIENT_REPORTED_COST = "PATIENT_REPORTED_COST",
    /** Patient self-report */
    PATIENT_SELF_REPORT = "PATIENT_SELF-REPORT",
    /** Patient self-tested */
    PATIENT_SELF_TESTED = "PATIENT_SELF-TESTED",
    /** Payer system record (paid premium) */
    PAYER_SYSTEM_RECORD_LEFT_PARENTHESISPAID_PREMIUMRIGHT_PARENTHESIS = "PAYER_SYSTEM_RECORD_(PAID_PREMIUM)",
    /** Payer system record (primary payer) */
    PAYER_SYSTEM_RECORD_LEFT_PARENTHESISPRIMARY_PAYERRIGHT_PARENTHESIS = "PAYER_SYSTEM_RECORD_(PRIMARY_PAYER)",
    /** Payer system record (secondary payer) */
    PAYER_SYSTEM_RECORD_LEFT_PARENTHESISSECONDARY_PAYERRIGHT_PARENTHESIS = "PAYER_SYSTEM_RECORD_(SECONDARY_PAYER)",
    /** Pharmacy claim */
    PHARMACY_CLAIM = "PHARMACY_CLAIM",
    /** Point of care/express lab */
    POINT_OF_CARESOLIDUSEXPRESS_LAB = "POINT_OF_CARE/EXPRESS_LAB",
    /** Pre-qualification time period */
    PRE_QUALIFICATION_TIME_PERIOD = "PRE-QUALIFICATION_TIME_PERIOD",
    /** Professional claim */
    PROFESSIONAL_CLAIM = "PROFESSIONAL_CLAIM",
    /** Professional claim detail */
    PROFESSIONAL_CLAIM_DETAIL = "PROFESSIONAL_CLAIM_DETAIL",
    /** Professional claim header */
    PROFESSIONAL_CLAIM_HEADER = "PROFESSIONAL_CLAIM_HEADER",
    /** Provider charge list price */
    PROVIDER_CHARGE_LIST_PRICE = "PROVIDER_CHARGE_LIST_PRICE",
    /** Provider financial system */
    PROVIDER_FINANCIAL_SYSTEM = "PROVIDER_FINANCIAL_SYSTEM",
    /** Provider incurred cost record */
    PROVIDER_INCURRED_COST_RECORD = "PROVIDER_INCURRED_COST_RECORD",
    /** Randomization record */
    RANDOMIZATION_RECORD = "RANDOMIZATION_RECORD",
    /** Reference lab */
    REFERENCE_LAB = "REFERENCE_LAB",
    /** Registry */
    REGISTRY = "REGISTRY",
    /** Standard algorithm */
    STANDARD_ALGORITHM = "STANDARD_ALGORITHM",
    /** Standard algorithm from EHR */
    STANDARD_ALGORITHM_FROM_EHR = "STANDARD_ALGORITHM_FROM_EHR",
    /** Standard algorithm from claims */
    STANDARD_ALGORITHM_FROM_CLAIMS = "STANDARD_ALGORITHM_FROM_CLAIMS",
    /** Survey */
    SURVEY = "SURVEY",
    /** US Social Security Death Master File */
    US_SOCIAL_SECURITY_DEATH_MASTER_FILE = "US_SOCIAL_SECURITY_DEATH_MASTER_FILE",
    /** Urgent lab */
    URGENT_LAB = "URGENT_LAB",
    /** Vision claim */
    VISION_CLAIM = "VISION_CLAIM",
};
/**
* A constrained set of enumerative values containing the MONDO values for human diseases.
*/
export enum MondoHumanDiseaseEnum {
    
};
/**
* A constrained set of enumerative values containing the HPO values for phenotypic abnormalities.
*/
export enum HpoPhenotypicAbnormalityEnum {
    
};
/**
* A constrained set of enumerative values containing both the MONDO values for human diseases and the HPO values for phenotypic abnormalities.
*/
export enum ConditionConceptEnum {
    
};
/**
* A constrained set of enumerative values containing the OMOP values for provenance.
*/
export enum ProvenanceEnum {
    
    EHR_BILLING_DIAGNOSIS = "EHR_BILLING_DIAGNOSIS",
    EHR_CHIEF_COMPLAINT = "EHR_CHIEF_COMPLAINT",
    EHR_ENCOUNTER_DIAGNOSIS = "EHR_ENCOUNTER_DIAGNOSIS",
    EHR_EPISODE_ENTRY = "EHR_EPISODE_ENTRY",
    EHR_PROBLEM_LIST_ENTRY = "EHR_PROBLEM_LIST_ENTRY",
    FIRST_POSITION_CONDITION = "FIRST_POSITION_CONDITION",
    NLP_DERIVED = "NLP_DERIVED",
    OBSERVATION_RECORDED_FROM_EHR = "OBSERVATION_RECORDED_FROM_EHR",
    PATIENT_SELF_REPORTED_CONDITION = "PATIENT_SELF-REPORTED_CONDITION",
    PRIMARY_CONDITION = "PRIMARY_CONDITION",
    REFERRAL_RECORD = "REFERRAL_RECORD",
    SECONDARY_CONDITION = "SECONDARY_CONDITION",
    TUMOR_REGISTRY = "TUMOR_REGISTRY",
    WORKING_DIAGNOSIS = "WORKING_DIAGNOSIS",
    CLINICAL_DIAGNOSIS = "CLINICAL_DIAGNOSIS",
};
/**
* A constrained set of enumerative values indicating whether something is present, absent, or its status is unknown.
*/
export enum StatusEnum {
    
    /** was present in the patient at observation time. */
    PRESENT = "PRESENT",
    /** was absent in the patient at observation time. */
    ABSENT = "ABSENT",
    /** was of unknown status in the patient at observation time. */
    UNKNOWN = "UNKNOWN",
};
/**
* A constrained set of enumerative values indicating whether something is present, absent, historical, or its status is unknown.
*/
export enum HistoricalStatusEnum {
    
};
/**
* Procedure codes from OMOP.
*/
export enum ProcedureConceptEnum {
    
};
/**
* Drug codes from RxNorm.
*/
export enum DrugExposureConceptEnum {
    
};
/**
* Source of drug exposure record
*/
export enum DrugExposureProvenanceEnum {
    
    /** Randomized Drug */
    RANDOMIZED_DRUG = "RANDOMIZED DRUG",
    /** Patient Self-Reported Medication */
    PATIENT_SELF_REPORTED_MEDICATION = "PATIENT SELF-REPORTED MEDICATION",
    /** NLP derived */
    NLP_DERIVED = "NLP DERIVED",
    /** Prescription dispensed in pharmacy */
    PRESCRIPTION_DISPENSED_IN_PHARMACY = "PRESCRIPTION DISPENSED IN PHARMACY",
    /** Physician administered drug (identified from EHR order) */
    PHYSICIAN_ADMINISTERED_DRUG_LEFT_PARENTHESISIDENTIFIED_FROM_EHR_ORDERRIGHT_PARENTHESIS = "PHYSICIAN ADMINISTERED DRUG (IDENTIFIED FROM EHR ORDER)",
    /** Dispensed in Outpatient office */
    DISPENSED_IN_OUTPATIENT_OFFICE = "DISPENSED IN OUTPATIENT OFFICE",
    /** Prescription dispensed through mail order */
    PRESCRIPTION_DISPENSED_THROUGH_MAIL_ORDER = "PRESCRIPTION DISPENSED THROUGH MAIL ORDER",
    /** Prescription written */
    PRESCRIPTION_WRITTEN = "PRESCRIPTION WRITTEN",
    /** Medication list entry */
    MEDICATION_LIST_ENTRY = "MEDICATION LIST ENTRY",
    /** Physician administered drug (identified as procedure) */
    PHYSICIAN_ADMINISTERED_DRUG_LEFT_PARENTHESISIDENTIFIED_AS_PROCEDURERIGHT_PARENTHESIS = "PHYSICIAN ADMINISTERED DRUG (IDENTIFIED AS PROCEDURE)",
    /** Inpatient administration */
    INPATIENT_ADMINISTRATION = "INPATIENT ADMINISTRATION",
    /** Drug era - 0 days persistence window */
    DRUG_ERA___0_DAYS_PERSISTENCE_WINDOW = "DRUG ERA - 0 DAYS PERSISTENCE WINDOW",
    /** Drug era - 30 days persistence window */
    DRUG_ERA___30_DAYS_PERSISTENCE_WINDOW = "DRUG ERA - 30 DAYS PERSISTENCE WINDOW",
    /** Physician administered drug (identified from EHR problem list) */
    PHYSICIAN_ADMINISTERED_DRUG_LEFT_PARENTHESISIDENTIFIED_FROM_EHR_PROBLEM_LISTRIGHT_PARENTHESIS = "PHYSICIAN ADMINISTERED DRUG (IDENTIFIED FROM EHR PROBLEM LIST)",
    /** Physician administered drug (identified from referral record) */
    PHYSICIAN_ADMINISTERED_DRUG_LEFT_PARENTHESISIDENTIFIED_FROM_REFERRAL_RECORDRIGHT_PARENTHESIS = "PHYSICIAN ADMINISTERED DRUG (IDENTIFIED FROM REFERRAL RECORD)",
    /** Physician administered drug (identified from EHR observation) */
    PHYSICIAN_ADMINISTERED_DRUG_LEFT_PARENTHESISIDENTIFIED_FROM_EHR_OBSERVATIONRIGHT_PARENTHESIS = "PHYSICIAN ADMINISTERED DRUG (IDENTIFIED FROM EHR OBSERVATION)",
};
/**
* Routes of drug administration.
*/
export enum DrugRouteEnum {
    
    /** Arteriovenous fistula */
    ARTERIOVENOUS_FISTULA = "ARTERIOVENOUS FISTULA",
    /** Haemodiafiltration */
    HAEMODIAFILTRATION = "HAEMODIAFILTRATION",
    /** Sublesional */
    SUBLESIONAL = "SUBLESIONAL",
    /** Intraneural */
    INTRANEURAL = "INTRANEURAL",
    /** Intramural */
    INTRAMURAL = "INTRAMURAL",
    /** Intracatheter instillation */
    INTRACATHETER_INSTILLATION = "INTRACATHETER INSTILLATION",
    /** Sublabial */
    SUBLABIAL = "SUBLABIAL",
    /** Intra-articular */
    INTRA_ARTICULAR = "INTRA-ARTICULAR",
    /** Intradialytic */
    INTRADIALYTIC = "INTRADIALYTIC",
    /** Arteriovenous graft */
    ARTERIOVENOUS_GRAFT = "ARTERIOVENOUS GRAFT",
    /** Otic */
    OTIC = "OTIC",
    /** Oral */
    ORAL = "ORAL",
    /** Vaginal */
    VAGINAL = "VAGINAL",
    /** Route of administration value */
    ROUTE_OF_ADMINISTRATION_VALUE = "ROUTE OF ADMINISTRATION VALUE",
    /** Gastrostomy */
    GASTROSTOMY = "GASTROSTOMY",
    /** Nasogastric */
    NASOGASTRIC = "NASOGASTRIC",
    /** Jejunostomy */
    JEJUNOSTOMY = "JEJUNOSTOMY",
    /** Subcutaneous */
    SUBCUTANEOUS = "SUBCUTANEOUS",
    /** Gingival */
    GINGIVAL = "GINGIVAL",
    /** Intracardiac */
    INTRACARDIAC = "INTRACARDIAC",
    /** Intradermal */
    INTRADERMAL = "INTRADERMAL",
    /** Intrapleural */
    INTRAPLEURAL = "INTRAPLEURAL",
    /** Periarticular */
    PERIARTICULAR = "PERIARTICULAR",
    /** Endosinusial */
    ENDOSINUSIAL = "ENDOSINUSIAL",
    /** Intracavernous */
    INTRACAVERNOUS = "INTRACAVERNOUS",
    /** Intralesional */
    INTRALESIONAL = "INTRALESIONAL",
    /** Intralymphatic */
    INTRALYMPHATIC = "INTRALYMPHATIC",
    /** Intraocular */
    INTRAOCULAR = "INTRAOCULAR",
    /** Perineural */
    PERINEURAL = "PERINEURAL",
    /** Intracranial */
    INTRACRANIAL = "INTRACRANIAL",
    /** Dental */
    DENTAL = "DENTAL",
    /** Intraamniotic */
    INTRAAMNIOTIC = "INTRAAMNIOTIC",
    /** Intrabursal */
    INTRABURSAL = "INTRABURSAL",
    /** Intradiscal */
    INTRADISCAL = "INTRADISCAL",
    /** Subconjunctival */
    SUBCONJUNCTIVAL = "SUBCONJUNCTIVAL",
    /** Mucous fistula */
    MUCOUS_FISTULA = "MUCOUS FISTULA",
    /** Intraprostatic */
    INTRAPROSTATIC = "INTRAPROSTATIC",
    /** Intravenous peripheral */
    INTRAVENOUS_PERIPHERAL = "INTRAVENOUS PERIPHERAL",
    /** Periosteal */
    PERIOSTEAL = "PERIOSTEAL",
    /** Esophagostomy */
    ESOPHAGOSTOMY = "ESOPHAGOSTOMY",
    /** Nasoduodenal */
    NASODUODENAL = "NASODUODENAL",
    /** Percutaneous */
    PERCUTANEOUS = "PERCUTANEOUS",
    /** Suborbital */
    SUBORBITAL = "SUBORBITAL",
    /** Intrathoracic */
    INTRATHORACIC = "INTRATHORACIC",
    /** Enteral */
    ENTERAL = "ENTERAL",
    /** Intramyometrial */
    INTRAMYOMETRIAL = "INTRAMYOMETRIAL",
    /** Colostomy */
    COLOSTOMY = "COLOSTOMY",
    /** Intratympanic */
    INTRATYMPANIC = "INTRATYMPANIC",
    /** Gastro-intestinal stoma */
    GASTRO_INTESTINAL_STOMA = "GASTRO-INTESTINAL STOMA",
    /** Intrapulmonary */
    INTRAPULMONARY = "INTRAPULMONARY",
    /** Intrasinal */
    INTRASINAL = "INTRASINAL",
    /** Tumor cavity */
    TUMOR_CAVITY = "TUMOR CAVITY",
    /** Submucosal */
    SUBMUCOSAL = "SUBMUCOSAL",
    /** Intraductal */
    INTRADUCTAL = "INTRADUCTAL",
    /** Intravenous central */
    INTRAVENOUS_CENTRAL = "INTRAVENOUS CENTRAL",
    /** Paravertebral */
    PARAVERTEBRAL = "PARAVERTEBRAL",
    /** Urostomy */
    UROSTOMY = "UROSTOMY",
    /** Laryngeal */
    LARYNGEAL = "LARYNGEAL",
    /** Surgical cavity */
    SURGICAL_CAVITY = "SURGICAL CAVITY",
    /** Intravenous */
    INTRAVENOUS = "INTRAVENOUS",
    /** Intratesticular */
    INTRATESTICULAR = "INTRATESTICULAR",
    /** Endocervical */
    ENDOCERVICAL = "ENDOCERVICAL",
    /** Endotracheopulmonary */
    ENDOTRACHEOPULMONARY = "ENDOTRACHEOPULMONARY",
    /** Extra-amniotic */
    EXTRA_AMNIOTIC = "EXTRA-AMNIOTIC",
    /** Gastroenteral */
    GASTROENTERAL = "GASTROENTERAL",
    /** Intracervical */
    INTRACERVICAL = "INTRACERVICAL",
    /** Intracoronary */
    INTRACORONARY = "INTRACORONARY",
    /** Intrasternal */
    INTRASTERNAL = "INTRASTERNAL",
    /** Intravesical */
    INTRAVESICAL = "INTRAVESICAL",
    /** Oromucosal */
    OROMUCOSAL = "OROMUCOSAL",
    /** Caudal */
    CAUDAL = "CAUDAL",
    /** Buccal */
    BUCCAL = "BUCCAL",
    /** Ophthalmic */
    OPHTHALMIC = "OPHTHALMIC",
    /** Body cavity */
    BODY_CAVITY = "BODY CAVITY",
    /** Intraosseous */
    INTRAOSSEOUS = "INTRAOSSEOUS",
    /** Intraventricular route - cardiac */
    INTRAVENTRICULAR_ROUTE___CARDIAC = "INTRAVENTRICULAR ROUTE - CARDIAC",
    /** Intrabiliary */
    INTRABILIARY = "INTRABILIARY",
    /** Intracerebroventricular */
    INTRACEREBROVENTRICULAR = "INTRACEREBROVENTRICULAR",
    /** Intrathecal */
    INTRATHECAL = "INTRATHECAL",
    /** Epidural */
    EPIDURAL = "EPIDURAL",
    /** Intratracheal */
    INTRATRACHEAL = "INTRATRACHEAL",
    /** Urethral */
    URETHRAL = "URETHRAL",
    /** Transmucosal */
    TRANSMUCOSAL = "TRANSMUCOSAL",
    /** Transdermal */
    TRANSDERMAL = "TRANSDERMAL",
    /** Intra-arterial */
    INTRA_ARTERIAL = "INTRA-ARTERIAL",
    /** Intraperitoneal */
    INTRAPERITONEAL = "INTRAPERITONEAL",
    /** Intramedullary */
    INTRAMEDULLARY = "INTRAMEDULLARY",
    /** Intrauterine */
    INTRAUTERINE = "INTRAUTERINE",
    /** Nasal */
    NASAL = "NASAL",
    /** Topical */
    TOPICAL = "TOPICAL",
    /** Rectal */
    RECTAL = "RECTAL",
    /** Sublingual */
    SUBLINGUAL = "SUBLINGUAL",
    /** Intraluminal */
    INTRALUMINAL = "INTRALUMINAL",
    /** Transcervical */
    TRANSCERVICAL = "TRANSCERVICAL",
    /** Intraabdominal */
    INTRAABDOMINAL = "INTRAABDOMINAL",
    /** Transurethral */
    TRANSURETHRAL = "TRANSURETHRAL",
    /** Peritendinous */
    PERITENDINOUS = "PERITENDINOUS",
    /** Ileostomy */
    ILEOSTOMY = "ILEOSTOMY",
    /** Intracorneal */
    INTRACORNEAL = "INTRACORNEAL",
    /** Nasojejunal */
    NASOJEJUNAL = "NASOJEJUNAL",
    /** Intracisternal */
    INTRACISTERNAL = "INTRACISTERNAL",
    /** Subgingival */
    SUBGINGIVAL = "SUBGINGIVAL",
    /** Intraovarian */
    INTRAOVARIAN = "INTRAOVARIAN",
    /** Interstitial */
    INTERSTITIAL = "INTERSTITIAL",
    /** Intrasynovial */
    INTRASYNOVIAL = "INTRASYNOVIAL",
    /** Intraduodenal */
    INTRADUODENAL = "INTRADUODENAL",
    /** Subtendinous */
    SUBTENDINOUS = "SUBTENDINOUS",
    /** Intramuscular */
    INTRAMUSCULAR = "INTRAMUSCULAR",
    /** Intravitreal */
    INTRAVITREAL = "INTRAVITREAL",
    /** Intraspinal */
    INTRASPINAL = "INTRASPINAL",
    /** Intrabronchial */
    INTRABRONCHIAL = "INTRABRONCHIAL",
    /** Oropharyngeal */
    OROPHARYNGEAL = "OROPHARYNGEAL",
    /** Intracameral */
    INTRACAMERAL = "INTRACAMERAL",
    /** Paracervical */
    PARACERVICAL = "PARACERVICAL",
    /** Periurethral */
    PERIURETHRAL = "PERIURETHRAL",
    /** Intracoronal */
    INTRACORONAL = "INTRACORONAL",
    /** Retrobulbar */
    RETROBULBAR = "RETROBULBAR",
    /** Intracartilaginous */
    INTRACARTILAGINOUS = "INTRACARTILAGINOUS",
    /** Orogastric */
    OROGASTRIC = "OROGASTRIC",
    /** Intratendinous */
    INTRATENDINOUS = "INTRATENDINOUS",
    /** Peribulbar */
    PERIBULBAR = "PERIBULBAR",
    /** Fistula */
    FISTULA = "FISTULA",
    /** Surgical drain */
    SURGICAL_DRAIN = "SURGICAL DRAIN",
    /** Ureteral */
    URETERAL = "URETERAL",
    /** Epilesional */
    EPILESIONAL = "EPILESIONAL",
    /** Extracorporeal hemodialysis */
    EXTRACORPOREAL_HEMODIALYSIS = "EXTRACORPOREAL HEMODIALYSIS",
    /** Suprachoroidal */
    SUPRACHOROIDAL = "SUPRACHOROIDAL",
    /** Extracorporeal */
    EXTRACORPOREAL = "EXTRACORPOREAL",
    /** Intracorporus cavernosum */
    INTRACORPORUS_CAVERNOSUM = "INTRACORPORUS CAVERNOSUM",
    /** Intraglandular */
    INTRAGLANDULAR = "INTRAGLANDULAR",
    /** Intracholangiopancreatic */
    INTRACHOLANGIOPANCREATIC = "INTRACHOLANGIOPANCREATIC",
    /** Intraportal */
    INTRAPORTAL = "INTRAPORTAL",
    /** Peritumoral */
    PERITUMORAL = "PERITUMORAL",
    /** Posterior juxtascleral */
    POSTERIOR_JUXTASCLERAL = "POSTERIOR JUXTASCLERAL",
    /** Subretinal */
    SUBRETINAL = "SUBRETINAL",
    /** Infiltration */
    INFILTRATION = "INFILTRATION",
    /** Transendocardial */
    TRANSENDOCARDIAL = "TRANSENDOCARDIAL",
    /** Transplacental */
    TRANSPLACENTAL = "TRANSPLACENTAL",
    /** Intraepidermal */
    INTRAEPIDERMAL = "INTRAEPIDERMAL",
    /** Intracerebral */
    INTRACEREBRAL = "INTRACEREBRAL",
    /** Intrajejunal */
    INTRAJEJUNAL = "INTRAJEJUNAL",
    /** Intracolonic */
    INTRACOLONIC = "INTRACOLONIC",
    /** Cutaneous */
    CUTANEOUS = "CUTANEOUS",
    /** Intraileal */
    INTRAILEAL = "INTRAILEAL",
    /** Periodontal */
    PERIODONTAL = "PERIODONTAL",
    /** Peridural */
    PERIDURAL = "PERIDURAL",
    /** Lower respiratory tract */
    LOWER_RESPIRATORY_TRACT = "LOWER RESPIRATORY TRACT",
    /** Intramammary */
    INTRAMAMMARY = "INTRAMAMMARY",
    /** Intratumor */
    INTRATUMOR = "INTRATUMOR",
    /** Transtympanic */
    TRANSTYMPANIC = "TRANSTYMPANIC",
    /** Transtracheal */
    TRANSTRACHEAL = "TRANSTRACHEAL",
    /** Intraesophageal */
    INTRAESOPHAGEAL = "INTRAESOPHAGEAL",
    /** Intragingival */
    INTRAGINGIVAL = "INTRAGINGIVAL",
    /** Intravascular */
    INTRAVASCULAR = "INTRAVASCULAR",
    /** Intradural */
    INTRADURAL = "INTRADURAL",
    /** Intrameningeal */
    INTRAMENINGEAL = "INTRAMENINGEAL",
    /** Intragastric */
    INTRAGASTRIC = "INTRAGASTRIC",
    /** Intrapericardial */
    INTRAPERICARDIAL = "INTRAPERICARDIAL",
    /** Intralingual */
    INTRALINGUAL = "INTRALINGUAL",
    /** Respiratory tract */
    RESPIRATORY_TRACT = "RESPIRATORY TRACT",
    /** Intrahepatic */
    INTRAHEPATIC = "INTRAHEPATIC",
    /** Conjunctival */
    CONJUNCTIVAL = "CONJUNCTIVAL",
    /** Intraepicardial */
    INTRAEPICARDIAL = "INTRAEPICARDIAL",
    /** Digestive tract */
    DIGESTIVE_TRACT = "DIGESTIVE TRACT",
    /** Ocular */
    OCULAR = "OCULAR",
};
/**
* Device codes from SNOMED.
*/
export enum DeviceExposureConceptEnum {
    
};
/**
* Source of device exposure record
*/
export enum DeviceExposureProvenanceEnum {
    
    /** Case Report Form */
    CASE_REPORT_FORM = "CASE REPORT FORM",
    /** Claim */
    CLAIM = "CLAIM",
    /** Claim authorization */
    CLAIM_AUTHORIZATION = "CLAIM AUTHORIZATION",
    /** Claim discharge record */
    CLAIM_DISCHARGE_RECORD = "CLAIM DISCHARGE RECORD",
    /** Claim enrolment record */
    CLAIM_ENROLMENT_RECORD = "CLAIM ENROLMENT RECORD",
    /** Cost record */
    COST_RECORD = "COST RECORD",
    /** Death Certificate */
    DEATH_CERTIFICATE = "DEATH CERTIFICATE",
    /** Dental claim */
    DENTAL_CLAIM = "DENTAL CLAIM",
    /** EHR */
    EHR = "EHR",
    /** EHR administration record */
    EHR_ADMINISTRATION_RECORD = "EHR ADMINISTRATION RECORD",
    /** EHR admission note */
    EHR_ADMISSION_NOTE = "EHR ADMISSION NOTE",
    /** EHR ancillary report */
    EHR_ANCILLARY_REPORT = "EHR ANCILLARY REPORT",
    /** EHR billing record */
    EHR_BILLING_RECORD = "EHR BILLING RECORD",
    /** EHR chief complaint */
    EHR_CHIEF_COMPLAINT = "EHR CHIEF COMPLAINT",
    /** EHR discharge record */
    EHR_DISCHARGE_RECORD = "EHR DISCHARGE RECORD",
    /** EHR discharge summary */
    EHR_DISCHARGE_SUMMARY = "EHR DISCHARGE SUMMARY",
    /** EHR dispensing record */
    EHR_DISPENSING_RECORD = "EHR DISPENSING RECORD",
    /** EHR emergency room note */
    EHR_EMERGENCY_ROOM_NOTE = "EHR EMERGENCY ROOM NOTE",
    /** EHR encounter record */
    EHR_ENCOUNTER_RECORD = "EHR ENCOUNTER RECORD",
    /** EHR episode record */
    EHR_EPISODE_RECORD = "EHR EPISODE RECORD",
    /** EHR inpatient note */
    EHR_INPATIENT_NOTE = "EHR INPATIENT NOTE",
    /** EHR medication list */
    EHR_MEDICATION_LIST = "EHR MEDICATION LIST",
    /** EHR note */
    EHR_NOTE = "EHR NOTE",
    /** EHR nursing report */
    EHR_NURSING_REPORT = "EHR NURSING REPORT",
    /** EHR order */
    EHR_ORDER = "EHR ORDER",
    /** EHR outpatient note */
    EHR_OUTPATIENT_NOTE = "EHR OUTPATIENT NOTE",
    /** EHR Pathology report */
    EHR_PATHOLOGY_REPORT = "EHR PATHOLOGY REPORT",
    /** EHR physical examination */
    EHR_PHYSICAL_EXAMINATION = "EHR PHYSICAL EXAMINATION",
    /** EHR planned dispensing record */
    EHR_PLANNED_DISPENSING_RECORD = "EHR PLANNED DISPENSING RECORD",
    /** EHR prescription */
    EHR_PERSCRIPTION = "EHR PERSCRIPTION",
    /** EHR prescription issue record */
    EHR_PERSCRIPTION_ISSUE_RECORD = "EHR PERSCRIPTION ISSUE RECORD",
    /** EHR problem list */
    EHR_PROBLEM_LIST = "EHR PROBLEM LIST",
    /** EHR radiology report */
    EHR_RADIOLOGY_REPORT = "EHR RADIOLOGY REPORT",
    /** EHR referral record */
    EHR_REFERRAL_RECORD = "EHR REFERRAL RECORD",
    /** External CDM instance */
    EXTERNAL_CDM_INSTANCE = "EXTERNAL CDM INSTANCE",
    /** Facility claim */
    FACILITY_CLAIM = "FACILITY CLAIM",
    /** Facility claim detail */
    FACILITY_CLAIM_DETAIL = "FACILITY CLAIM DETAIL",
    /** Facility claim header */
    FACILITY_CLAIM_HEADER = "FACILITY CLAIM HEADER",
    /** Geographic isolation record */
    GEOGRAPHIC_ISOLATION_RECORD = "GEOGRAPHIC ISOLATION RECORD",
    /** Government report */
    GOVERNMENT_REPORT = "GOVERNMENT REPORT",
    /** Health Information Exchange record */
    HEALTH_INFORMATION_EXCHANGE_RECORD = "HEALTH INFORMATION EXCHANGE RECORD",
    /** Health Risk Assessment */
    HEALTH_RISK_ASSESSMENT = "HEALTH RISK ASSESSMENT",
    /** Healthcare professional filled survey */
    HEALTHCARE_PROFESSIONAL_FILLED_SURVEY = "HEALTHCARE PROFESSIONAL FILLED SURVEY",
    /** Hospital cost */
    HOSPITAL_COST = "HOSPITAL COST",
    /** Inpatient claim */
    INPATIENT_CLAIM = "INPATIENT CLAIM",
    /** Inpatient claim detail */
    INPATIENT_CLAIM_DETAIL = "INPATIENT CLAIM DETAIL",
    /** Inpatient claim header */
    INPATIENT_CLAIM_HEADER = "INPATIENT CLAIM HEADER",
    /** Lab */
    LAB = "LAB",
    /** Mail order record */
    MAIL_ORDER_RECORD = "MAIL ORDER RECORD",
    /** NLP */
    NLP = "NLP",
    /** Outpatient claim */
    OUTPATIENT_CLAIM = "OUTPATIENT CLAIM",
    /** Outpatient claim detail */
    OUTPATIENT_CLAIM_DETAIL = "OUTPATIENT CLAIM DETAIL",
    /** Outpatient claim header */
    OUTPATIENT_CLAIM_HEADER = "OUTPATIENT CLAIM HEADER",
    /** Patient filled survey */
    PATIENT_FILLED_SURVEY = "PATIENT FILLED SURVEY",
    /** Patient or payer paid record */
    PATIENT_OR_PAYER_PAID_RECORD = "PATIENT OR PAYER PAID RECORD",
    /** Patient reported cost */
    PATIENT_REPORTED_COST = "PATIENT REPORTED COST",
    /** Patient self-report */
    PATIENT_SELF_REPORT = "PATIENT SELF-REPORT",
    /** Patient self-tested */
    PATIENT_SELF_TESTED = "PATIENT SELF-TESTED",
    /** Payer system record (paid premium) */
    PAYER_SYSTEM_RECORD_LEFT_PARENTHESISPAID_PREMIUMRIGHT_PARENTHESIS = "PAYER SYSTEM RECORD (PAID PREMIUM)",
    /** Payer system record (primary payer) */
    PAYER_SYSTEM_RECORD_LEFT_PARENTHESISPRIMARY_PAYERRIGHT_PARENTHESIS = "PAYER SYSTEM RECORD (PRIMARY PAYER)",
    /** Payer system record (secondary payer) */
    PAYER_SYSTEM_RECORD_LEFT_PARENTHESISSECONDARY_PAYERRIGHT_PARENTHESIS = "PAYER SYSTEM RECORD (SECONDARY PAYER)",
    /** Pharmacy claim */
    PHARMACY_CLAIM = "PHARMACY CLAIM",
    /** Point of care/express lab */
    POINT_OF_CARESOLIDUSEXPRESS_LAB = "POINT OF CARE/EXPRESS LAB",
    /** Pre-qualification time period */
    PRE_QUALIFICATION_TIME_PERIOD = "PRE-QUALIFICATION TIME PERIOD",
    /** Professional claim */
    PROFESSIONAL_CLAIM = "PROFESSIONAL CLAIM",
    /** Professional claim detail */
    PROFESSIONAL_CLAIM_DETAIL = "PROFESSIONAL CLAIM DETAIL",
    /** Professional claim header */
    PROFESSIONAL_CLAIM_HEADER = "PROFESSIONAL CLAIM HEADER",
    /** Provider charge list price */
    PROVIDER_CHARGE_LIST_PRICE = "PROVIDER CHARGE LIST PRICE",
    /** Provider financial system */
    PROVIDER_FINANCIAL_SYSTEM = "PROVIDER FINANCIAL SYSTEM",
    /** Provider incurred cost record */
    PROVIDER_INCURRED_COST_RECORD = "PROVIDER INCURRED COST RECORD",
    /** Randomization record */
    RANDOMIZATION_RECORD = "RANDOMIZATION RECORD",
    /** Reference lab */
    REFERENCE_LAB = "REFERENCE LAB",
    /** Registry */
    REGISTRY = "REGISTRY",
    /** Standard algorithm */
    STANDARD_ALGORITHM = "STANDARD ALGORITHM",
    /** Standard algorithm from claims */
    STANDARD_ALGORITHM_FROM_CLAIMS = "STANDARD ALGORITHM FROM CLAIMS",
    /** Standard algorithm from EHR */
    STANDARD_ALGORITHM_FROM_EHR = "STANDARD ALGORITHM FROM EHR",
    /** Survey */
    SURVEY = "SURVEY",
    /** Urgent lab */
    URGENT_LAB = "URGENT LAB",
    /** US Social Security Death Master File */
    US_SOCIAL_SECURITY_DEATH_MASTER_FILE = "US SOCIAL SECURITY DEATH MASTER FILE",
    /** Vision claim */
    VISION_CLAIM = "VISION CLAIM",
};
/**
* A high-level type of specimen, based on its derivation provenance (i.e. how far removed it is from the original sample extracted from a source).
*/
export enum SpecimenTypeEnum {
    
    /** A specimen that results from the division of some parent specimen into equal amounts for downstream analysis. */
    ALIQUOT = "ALIQUOT",
    /** A specimen generated through the extraction of a specified class of substance/chemical (e.g. DNA, RNA, protein) from a parent specimen, which is stored in solution as an analyte. */
    ANALYTE = "ANALYTE",
    /** A specimen representing the material that was directly collected from a subject (i.e. not generated through portioning, aliquoting, or analyte extraction from an existing specimen). */
    FRESH_SPECIMEN = "FRESH_SPECIMEN",
    /** A physical sub-part taken from an existing specimen. */
    PORTION = "PORTION",
    /** A specimen that is mounted on a slide or coverslip for microscopic analysis. */
    SLIDE = "SLIDE",
};

export enum AnalyteTypeEnum {
    
    /** Formalin-Fixed Paraffin-Embedded DNA */
    FFPE_DNA = "FFPE DNA",
    /** Repli-G (Qiagen) DNA */
    Repli_G_LEFT_PARENTHESISQiagenRIGHT_PARENTHESIS_DNA = "Repli-G (Qiagen) DNA",
    GenomePlex_LEFT_PARENTHESISRubiconRIGHT_PARENTHESIS_Amplified_DNA = "GenomePlex (Rubicon) Amplified DNA",
    /** Total Ribonucleic Acid */
    Total_RNA = "Total RNA",
    /** Repli-G X (Qiagen) DNA */
    Repli_G_X_LEFT_PARENTHESISQiagenRIGHT_PARENTHESIS_DNA = "Repli-G X (Qiagen) DNA",
    /** Ribonucleic Acid */
    RNA = "RNA",
    /** REPLI-g Pooled DNA */
    Repli_G_Pooled_LEFT_PARENTHESISQiagenRIGHT_PARENTHESIS_DNA = "Repli-G Pooled (Qiagen) DNA",
    /** DNA */
    DNA = "DNA",
    /** Normal Epstein-Barr Virus Immortalization */
    EBV_Immortalized_Normal = "EBV Immortalized Normal",
    /** Formalin-Fixed Paraffin-Embedded RNA */
    FFPE_RNA = "FFPE RNA",
    /** Protein */
    Protein = "Protein",
    Nuclei_RNA = "Nuclei RNA",
    cfDNA = "cfDNA",
};

export enum SourceMaterialTypeEnum {
    
    ADDITIONAL_METASTATIC = "ADDITIONAL_METASTATIC",
    ADDITIONAL_NEW_PRIMARY = "ADDITIONAL_NEW_PRIMARY",
    BENIGN_NEOPLASMS = "BENIGN_NEOPLASMS",
    BLOOD_DERIVED_CANCER_BONE_MARROW = "BLOOD_DERIVED_CANCER_BONE_MARROW",
    BLOOD_DERIVED_CANCER_BONE_MARROW_POST_TREATMENT = "BLOOD_DERIVED_CANCER_BONE_MARROW_POST_TREATMENT",
    BLOOD_DERIVED_CANCER_PERIPHERAL_BLOOD = "BLOOD_DERIVED_CANCER_PERIPHERAL_BLOOD",
    BLOOD_DERIVED_CANCER_PERIPHERAL_BLOOD_POST_TREATMENT = "BLOOD_DERIVED_CANCER_PERIPHERAL_BLOOD_POST_TREATMENT",
    BLOOD_DERIVED_LIQUID_BIOPSY = "BLOOD_DERIVED_LIQUID_BIOPSY",
    BLOOD_DERIVED_NORMAL = "BLOOD_DERIVED_NORMAL",
    BONE_MARROW_NORMAL = "BONE_MARROW_NORMAL",
    BUCCAL_CELL_NORMAL = "BUCCAL_CELL_NORMAL",
    CELL_LINE_DERIVED_XENOGRAFT_TISSUE = "CELL_LINE_DERIVED_XENOGRAFT_TISSUE",
    CELL_LINES = "CELL_LINES",
    CONTROL_ANALYTE = "CONTROL_ANALYTE",
    DNA = "DNA",
    EBV_IMMORTALIZED_NORMAL = "EBV_IMMORTALIZED_NORMAL",
    EXPANDED_NEXT_GENERATION_CANCER_MODEL = "EXPANDED_NEXT_GENERATION_CANCER_MODEL",
    FFPE_RECURRENT = "FFPE_RECURRENT",
    FFPE_SCROLLS = "FFPE_SCROLLS",
    FIBROBLASTS_FROM_BONE_MARROW_NORMAL = "FIBROBLASTS_FROM_BONE_MARROW_NORMAL",
    GRANULOCYTES = "GRANULOCYTES",
    HUMAN_TUMOR_ORIGINAL_CELLS = "HUMAN_TUMOR_ORIGINAL_CELLS",
    IN_SITU_NEOPLASMS = "IN_SITU_NEOPLASMS",
    LYMPHOID_NORMAL = "LYMPHOID_NORMAL",
    METASTATIC = "METASTATIC",
    MIXED_ADHERENT_SUSPENSION = "MIXED_ADHERENT_SUSPENSION",
    MONONUCLEAR_CELLS_FROM_BONE_MARROW_NORMAL = "MONONUCLEAR_CELLS_FROM_BONE_MARROW_NORMAL",
    NEOPLASMS_OF_UNCERTAIN_AND_UNKNOWN_BEHAVIOR = "NEOPLASMS_OF_UNCERTAIN_AND_UNKNOWN_BEHAVIOR",
    NEXT_GENERATION_CANCER_MODEL = "NEXT_GENERATION_CANCER_MODEL",
    NORMAL_ADJACENT_TISSUE = "NORMAL_ADJACENT_TISSUE",
    PLEURAL_EFFUSION = "PLEURAL_EFFUSION",
    POST_NEOADJUVANT_THERAPY = "POST_NEOADJUVANT_THERAPY",
    PRIMARY_BLOOD_DERIVED_CANCER_BONE_MARROW = "PRIMARY_BLOOD_DERIVED_CANCER_BONE_MARROW",
    PRIMARY_BLOOD_DERIVED_CANCER_PERIPHERAL_BLOOD = "PRIMARY_BLOOD_DERIVED_CANCER_PERIPHERAL_BLOOD",
    PRIMARY_TUMOR = "PRIMARY_TUMOR",
    PRIMARY_XENOGRAFT_TISSUE = "PRIMARY_XENOGRAFT_TISSUE",
    RECURRENT_BLOOD_DERIVED_CANCER_BONE_MARROW = "RECURRENT_BLOOD_DERIVED_CANCER_BONE_MARROW",
    RECURRENT_BLOOD_DERIVED_CANCER_PERIPHERAL_BLOOD = "RECURRENT_BLOOD_DERIVED_CANCER_PERIPHERAL_BLOOD",
    RECURRENT_TUMOR = "RECURRENT_TUMOR",
    RNA = "RNA",
    SALIVA = "SALIVA",
    SLIDES = "SLIDES",
    SOLID_TISSUE_NORMAL = "SOLID_TISSUE_NORMAL",
    TOTAL_RNA = "TOTAL_RNA",
    TUMOR = "TUMOR",
    TUMOR_ADJACENT_NORMAL_POST_NEOADJUVANT_THERAPY = "TUMOR_ADJACENT_NORMAL_POST_NEOADJUVANT_THERAPY",
    XENOGRAFT_TISSUE = "XENOGRAFT_TISSUE",
    NOT_ALLOWED_TO_COLLECT = "NOT_ALLOWED_TO_COLLECT",
    NOT_REPORTED = "NOT_REPORTED",
    UNKNOWN = "UNKNOWN",
};
/**
* The location in a parent specimen from which a section/portion was excised.
*/
export enum SectionLocationEnum {
    
    /** The part of a specimen designated as its 'bottom' based on specified orientation criteria. */
    BOTTOM = "BOTTOM",
    /** The part of a specimen designated as its 'top' based on specified orientation criteria. */
    TOP = "TOP",
    /** An unknown location on a specimen. */
    UNKNOWN = "UNKNOWN",
};
/**
* The high-level type of activity through which the specimen was generated (i.e. via collection from the original source, or via derivation from an existing specimen)
*/
export enum SpecimenCreationActivityTypeEnum {
    
    /** An activity that collects an initial sample directly from a subject / source. */
    COLLECTION_FROM_SOURCE = "COLLECTION_FROM_SOURCE",
    /** An activity that derives a new specimen from an existing one. */
    DERIVATION_FROM_SPECIMEN = "DERIVATION_FROM_SPECIMEN",
};

export enum SpecimenCollectionMethodType {
    
    ORCHIECTOMY = "ORCHIECTOMY",
    METASTASECTOMY = "METASTASECTOMY",
    AUTOPSY = "AUTOPSY",
    UNKNOWN = "UNKNOWN",
    ASPIRATE = "ASPIRATE",
    RIGHT_HEMICOLECTOMY = "RIGHT_HEMICOLECTOMY",
    INCISIONAL_BIOPSY = "INCISIONAL_BIOPSY",
    BLOOD_DRAW = "BLOOD_DRAW",
    PERITONEAL_LAVAGE = "PERITONEAL_LAVAGE",
    OPEN_RADICAL_PROSTATECTOMY = "OPEN_RADICAL_PROSTATECTOMY",
    ABDOMINO_PERINEAL_RESECTION_OF_RECTUM = "ABDOMINO_PERINEAL_RESECTION_OF_RECTUM",
    SALPINGECTOMY = "SALPINGECTOMY",
    ENDO_RECTAL_TUMOR_RESECTION = "ENDO_RECTAL_TUMOR_RESECTION",
    BIOPSY = "BIOPSY",
    SALPINGO_OOPHORECTOMY = "SALPINGO_OOPHORECTOMY",
    NOT_ALLOWED_TO_COLLECT = "NOT_ALLOWED_TO_COLLECT",
    WHIPPLE_PROCEDURE = "WHIPPLE_PROCEDURE",
    ENUCLEATION = "ENUCLEATION",
    MODIFIED_RADICAL_MASTECTOMY = "MODIFIED_RADICAL_MASTECTOMY",
    PARACENTESIS = "PARACENTESIS",
    OPEN_CRANIOTOMY = "OPEN_CRANIOTOMY",
    WEDGE_RESECTION = "WEDGE_RESECTION",
    LAPAROSCOPIC_RADICAL_NEPHRECTOMY = "LAPAROSCOPIC_RADICAL_NEPHRECTOMY",
    OPEN_PARTIAL_NEPHRECTOMY = "OPEN_PARTIAL_NEPHRECTOMY",
    TRANSURETHRAL_RESECTION = "TRANSURETHRAL_RESECTION",
    SIGMOID_COLECTOMY = "SIGMOID_COLECTOMY",
    OOPHORECTOMY = "OOPHORECTOMY",
    TOTAL_HEPATECTOMY = "TOTAL_HEPATECTOMY",
    INDETERMINANT = "INDETERMINANT",
    SUBTOTAL_RESECTION = "SUBTOTAL_RESECTION",
    LEFT_HEMICOLECTOMY = "LEFT_HEMICOLECTOMY",
    NEEDLE_BIOPSY = "NEEDLE_BIOPSY",
    OTHER = "OTHER",
    PANCREATECTOMY = "PANCREATECTOMY",
    THORACOSCOPIC_BIOPSY = "THORACOSCOPIC_BIOPSY",
    TOTAL_MASTECTOMY = "TOTAL_MASTECTOMY",
    EXCISIONAL_BIOPSY = "EXCISIONAL_BIOPSY",
    BONE_MARROW_ASPIRATE = "BONE_MARROW_ASPIRATE",
    LOCAL_RESECTION = "LOCAL_RESECTION",
    LOBECTOMY = "LOBECTOMY",
    FINE_NEEDLE_ASPIRATION = "FINE_NEEDLE_ASPIRATION",
    OMENTECTOMY = "OMENTECTOMY",
    TUMOR_RESECTION = "TUMOR_RESECTION",
    CYSTECTOMY = "CYSTECTOMY",
    GROSS_TOTAL_RESECTION = "GROSS_TOTAL_RESECTION",
    THORACENTESIS = "THORACENTESIS",
    ANTERIOR_RESECTION_OF_RECTUM = "ANTERIOR_RESECTION_OF_RECTUM",
    TRANSPLANT = "TRANSPLANT",
    LAPAROSCOPIC_PARTIAL_NEPHRECTOMY = "LAPAROSCOPIC_PARTIAL_NEPHRECTOMY",
    LAPAROSCOPIC_RADICAL_PROSTATECTOMY_WITH_ROBOTICS = "LAPAROSCOPIC_RADICAL_PROSTATECTOMY_WITH_ROBOTICS",
    PNEUMONECTOMY = "PNEUMONECTOMY",
    PAN_PROCTO_COLECTOMY = "PAN_PROCTO_COLECTOMY",
    HYSTERECTOMY_NOS = "HYSTERECTOMY_NOS",
    CORE_BIOPSY = "CORE_BIOPSY",
    SIMPLE_MASTECTOMY = "SIMPLE_MASTECTOMY",
    LUMPECTOMY = "LUMPECTOMY",
    ENDOSCOPIC_BIOPSY = "ENDOSCOPIC_BIOPSY",
    SIMPLE_HYSTERECTOMY = "SIMPLE_HYSTERECTOMY",
    LYMPHADENECTOMY = "LYMPHADENECTOMY",
    LAPAROSCOPIC_BIOPSY = "LAPAROSCOPIC_BIOPSY",
    TUMOR_DEBULKING = "TUMOR_DEBULKING",
    ASCITES_DRAINAGE = "ASCITES_DRAINAGE",
    ENDOSCOPIC_MUCOSAL_RESECTION = "ENDOSCOPIC_MUCOSAL_RESECTION",
    LAPAROSCOPIC_RADICAL_PROSTATECTOMY_WITHOUT_ROBOTICS = "LAPAROSCOPIC_RADICAL_PROSTATECTOMY_WITHOUT_ROBOTICS",
    TOTAL_COLECTOMY = "TOTAL_COLECTOMY",
    LIQUID_BIOPSY = "LIQUID_BIOPSY",
    RADICAL_HYSTERECTOMY = "RADICAL_HYSTERECTOMY",
    SURGICAL_RESECTION = "SURGICAL_RESECTION",
    OPEN_RADICAL_NEPHRECTOMY = "OPEN_RADICAL_NEPHRECTOMY",
    TRANSVERSE_COLECTOMY = "TRANSVERSE_COLECTOMY",
    HAND_ASSISTED_LAPAROSCOPIC_RADICAL_NEPHRECTOMY = "HAND_ASSISTED_LAPAROSCOPIC_RADICAL_NEPHRECTOMY",
    PUNCH_BIOPSY = "PUNCH_BIOPSY",
    PARTIAL_HEPATECTOMY = "PARTIAL_HEPATECTOMY",
    SUPRACERVICAL_HYSTERECTOMY = "SUPRACERVICAL_HYSTERECTOMY",
    OTHER_SURGICAL_RESECTION = "OTHER_SURGICAL_RESECTION",
    NOT_REPORTED = "NOT_REPORTED",
    FULL_HYSTERECTOMY = "FULL_HYSTERECTOMY",
    TONSILLECTOMY = "TONSILLECTOMY",
    SUPRAGLOTTIC_LARYNGECTOMY = "SUPRAGLOTTIC_LARYNGECTOMY",
    SUPERFICIAL_PAROTIDECTOMY = "SUPERFICIAL_PAROTIDECTOMY",
    LARYNGOPHARYNGECTOMY = "LARYNGOPHARYNGECTOMY",
    MAXILLECTOMY = "MAXILLECTOMY",
    PARTIAL_NEPHRECTOMY = "PARTIAL_NEPHRECTOMY",
    MANDIBULECTOMY = "MANDIBULECTOMY",
    BUCCAL_MUCOSAL_RESECTION = "BUCCAL_MUCOSAL_RESECTION",
    VERTICAL_HEMILARYNGECTOMY = "VERTICAL_HEMILARYNGECTOMY",
    TOTAL_NEPHRECTOMY = "TOTAL_NEPHRECTOMY",
    TOTAL_LARYNGECTOMY = "TOTAL_LARYNGECTOMY",
    TRANSORAL_LASER_EXCISION = "TRANSORAL_LASER_EXCISION",
    PAROTIDECTOMY_NOS = "PAROTIDECTOMY_NOS",
    RADICAL_MAXILLECTOMY = "RADICAL_MAXILLECTOMY",
    ENDOLARYNGEAL_EXCISION = "ENDOLARYNGEAL_EXCISION",
    PALATECTOMY = "PALATECTOMY",
    GLOSSECTOMY = "GLOSSECTOMY",
    PARTIAL_LARYNGECTOMY = "PARTIAL_LARYNGECTOMY",
    LYMPH_NODE_DISSECTION = "LYMPH_NODE_DISSECTION",
    RADICAL_PROSTATECTOMY = "RADICAL_PROSTATECTOMY",
    DEEP_PAROTIDECTOMY = "DEEP_PAROTIDECTOMY",
    SUBTOTAL_PROSTATECTOMY = "SUBTOTAL_PROSTATECTOMY",
    RADICAL_NEPHRECTOMY = "RADICAL_NEPHRECTOMY",
    SUPRACRICOID_LARYNGECTOMY = "SUPRACRICOID_LARYNGECTOMY",
    PARTIAL_MAXILLECTOMY = "PARTIAL_MAXILLECTOMY",
};
/**
* Types of measurements that reflect the quality of a specimen or its suitability for use.
*/
export enum SpecimenQualityObservationTypeEnum {
    
    /** Ratio of absorbance measured at a wavelength of 260 over that at a wavelength of 280. */
    A260_A280_RATIO = "A260_A280_RATIO",
    /** Ratio of quantity of 28s RNA over that of 16s RNA. */
    RIBOSOMAL_RNA_28S_16S_RATIO = "RIBOSOMAL_RNA_28S_16S_RATIO",
};
/**
* A type of method used in determining the quantity of a specimen.
*/
export enum SpecimenQualityObservationMethodEnum {
    
    /** A technique used to measure light absorbance across the ultraviolet and visible ranges of the electromagnetic spectrum. */
    UV_SPEC = "UV_SPEC",
    /** A technique applying the Pico488 fluorescent sensor dye that is used for quantifying the amount of double-stranded DNA (dsDNA) present in a given sample. */
    PICO_GREEN = "PICO_GREEN",
};
/**
* Measures related to the quantity of a specimen or analyte it currently contains - e.g. its weight, volume, or concentration.
*/
export enum SpecimenQuantityObservationTypeEnum {
    
    /** The current weight of the specimen, at the time of recording (as opposed to an initial weight before its processing or portioning). */
    WEIGHT = "WEIGHT",
    /** The current total volume of the specimen, at the time of recording. */
    VOLUME = "VOLUME",
    /** The concentration of an extracted analyte that is present in a specimen (specifically, in a specimen of type 'analyte', or an 'aliquot' derived from an analyte). For example, the concentration of DNA in a specimen created through extracting DNA from a blood sample. */
    CONCENTRATION = "CONCENTRATION",
};
/**
* The high-level type of processing activity performed.
*/
export enum SpecimenProcessingActivityTypeEnum {
    
    /** A processing activity that applies chemicals to preserve biological tissues from decay due to autolysis or putrefaction */
    FIXATION = "FIXATION",
    /** A processing activity that aims to freeze a specimen. */
    FREEZING = "FREEZING",
    /** A processing activity that aims to secure a specimen or slide in place in preparation for further examination (usually via microscopy) */
    MOUNTING = "MOUNTING",
    /** A processing activity that aims to preserve a specimen. */
    PRESERVATION = "PRESERVATION",
};
/**
* Standard units of measurement from the [Units of Measurement (UOM) ontology](https://units-of-measurement.org/). Units-of-measurement (UOM) provides URLs for Unified Code for Units of Measure (UCUM) codes, and mappings to a number of units ontologies and systems, in human- and machine-readable linked data formats.
*/
export enum UnitOfMeasurementEnum {
    
};
/**
* Social Determinants of Health domains as defined in the Gravity Project
*/
export enum GravityDomainEnum {
    
    FOOD_INSECURITY = "FOOD_INSECURITY",
    HOUSING_INSTABILITY = "HOUSING_INSTABILITY",
    HOMELESSNESS = "HOMELESSNESS",
    INADEQUATE_HOUSING = "INADEQUATE_HOUSING",
    TRANSPORTATION_INSECURITY = "TRANSPORTATION_INSECURITY",
    FINANCIAL_INSECURITY = "FINANCIAL_INSECURITY",
    MATERIAL_HARDSHIP = "MATERIAL_HARDSHIP",
    EMPLOYMENT_STATUS = "EMPLOYMENT_STATUS",
    EDUCATIONAL_ATTAINMENT = "EDUCATIONAL_ATTAINMENT",
    VETERAN_STATUS = "VETERAN_STATUS",
    STRESS = "STRESS",
    SOCIAL_CONNECTION = "SOCIAL_CONNECTION",
    INTIMATE_PARTNER_VIOLENCE_IPV = "INTIMATE_PARTNER_VIOLENCE_IPV",
    ELDER_ABUSE = "ELDER_ABUSE",
    HEALTH_LITERACY = "HEALTH_LITERACY",
    MEDICAL_COST_BURDEN = "MEDICAL_COST_BURDEN",
    HEALTH_INSURANCE_COVERAGE_STATUS = "HEALTH_INSURANCE_COVERAGE_STATUS",
    DIGITAL_LITERACY = "DIGITAL_LITERACY",
    DIGITAL_ACCESS = "DIGITAL_ACCESS",
    UTILITY_INSECURITY = "UTILITY_INSECURITY",
};
/**
* Social Determinants of Health domains as defined in the Gravity Project
*/
export enum ConditionSeverityEnum {
    
    MILD = "MILD",
    MODERATE = "MODERATE",
    SEVERE = "SEVERE",
};
/**
* Values describing the relationship between an individual and family members.
*/
export enum FamilyRelationshipEnum {
    
    /** A relation to one's self. */
    ONESELF = "ONESELF",
    /** A relation to a natural parent (mother or father) when otherwise not specified. */
    NATURAL_PARENT = "NATURAL_PARENT",
    /** A relation to a natural father. */
    NATURAL_FATHER = "NATURAL_FATHER",
    /** A relation to a natural mother. */
    NATURAL_MOTHER = "NATURAL_MOTHER",
    /** A relation to a natural sibling (sister or brother) when otherwise not specified. */
    NATURAL_SIBLING = "NATURAL_SIBLING",
    /** A relation to a natural brother. */
    NATURAL_BROTHER = "NATURAL_BROTHER",
    /** A relation to a natural sister. */
    NATURAL_SISTER = "NATURAL_SISTER",
    /** A relation to a natural child. */
    NATURAL_CHILD = "NATURAL_CHILD",
    /** A generic blood relation. */
    BLOOD_RELATIVE = "BLOOD_RELATIVE",
};
/**
* Values describing the types of MeasurementObservations.
*/
export enum MeasurementObservationTypeEnum {
    
    ALBUMIN_IN_BLOOD = "ALBUMIN_IN_BLOOD",
    ALT_SGPT = "ALT_SGPT",
    BASOPHILS_COUNT = "BASOPHILS_COUNT",
    BILIRUBIN_UNCONJUGATED_INDIRECT = "BILIRUBIN_UNCONJUGATED_INDIRECT",
    BMI = "BMI",
    BNP = "BNP",
    BODY_WEIGHT = "BODY_WEIGHT",
    BUN = "BUN",
    CD40_IN_BLOOD = "CD40_IN_BLOOD",
    CHLORIDE_IN_BLOOD = "CHLORIDE_IN_BLOOD",
    CREATININE_IN_BLOOD = "CREATININE_IN_BLOOD",
    CREATININE_IN_URINE = "CREATININE_IN_URINE",
    CYSTATIN_C_IN_BLOOD = "CYSTATIN_C_IN_BLOOD",
    E_SELECTIN_IN_BLOOD = "E-SELECTIN_IN_BLOOD",
    EOSINOPHILS_COUNT = "EOSINOPHILS_COUNT",
    ERYTHROCYTE_SED_RATE = "ERYTHROCYTE_SED_RATE",
    FACTOR_VII = "FACTOR_VII",
    FERRITIN = "FERRITIN",
    FIBRINOGEN = "FIBRINOGEN",
    GFR = "GFR",
    GLUCOSE_IN_BLOOD = "GLUCOSE_IN_BLOOD",
    HDL = "HDL",
    HEART_RATE = "HEART_RATE",
    HEIGHT = "HEIGHT",
    HEMATOCRIT = "HEMATOCRIT",
    HEMOGLOBIN = "HEMOGLOBIN",
    HIP_CIRCUMFERENCE = "HIP_CIRCUMFERENCE",
    INSULIN_IN_BLOOD = "INSULIN_IN_BLOOD",
    INTERLEUKIN_6_IN_BLOOD = "INTERLEUKIN_6_IN_BLOOD",
    LACTATE_DEHYDROGENASE_LDH = "LACTATE_DEHYDROGENASE_LDH",
    LACTATE_IN_BLOOD = "LACTATE_IN_BLOOD",
    LDL = "LDL",
    LYMPHOCYTES_COUNT = "LYMPHOCYTES_COUNT",
    MCP1_IN_BLOOD = "MCP1_IN_BLOOD",
    MEAN_ARTERIAL_PRESSURE = "MEAN_ARTERIAL_PRESSURE",
    MEAN_CORPUSCULAR_HEMOGLOBIN = "MEAN_CORPUSCULAR_HEMOGLOBIN",
    MEAN_CORPUSCULAR_VOLUME = "MEAN_CORPUSCULAR_VOLUME",
    MEAN_PLATELET_VOLUME = "MEAN_PLATELET_VOLUME",
    MMP9_IN_BLOOD = "MMP9_IN_BLOOD",
    MYELOPEROXIDASE_IN_BLOOD = "MYELOPEROXIDASE_IN_BLOOD",
    NEUTROPHILS_COUNT = "NEUTROPHILS_COUNT",
    NT_PRO_BNP = "NT_PRO_BNP",
    P_SELECTIN_IN_BLOOD = "P-SELECTIN_IN_BLOOD",
    PH_OF_BLOOD = "PH_OF_BLOOD",
    POTASSIUM_IN_BLOOD = "POTASSIUM_IN_BLOOD",
    QRS_INTERVAL = "QRS_INTERVAL",
    RED_BLOOD_CELL_COUNT = "RED_BLOOD_CELL_COUNT",
    SLEEP_HOURS = "SLEEP_HOURS",
    SODIUM_IN_BLOOD = "SODIUM_IN_BLOOD",
    SPO2 = "SPO2",
    TEMPERATURE = "TEMPERATURE",
    TNFA_IN_BLOOD = "TNFA_IN_BLOOD",
    TNFA_R1_IN_BLOOD = "TNFA-R1_IN_BLOOD",
    TOTAL_CHOLESTEROL_IN_BLOOD = "TOTAL_CHOLESTEROL_IN_BLOOD",
    TRIGLYCERIDES_IN_BLOOD = "TRIGLYCERIDES_IN_BLOOD",
    VON_WILLEBRAND_FACTOR = "VON_WILLEBRAND_FACTOR",
    WAIST_CIRCUMFERENCE = "WAIST_CIRCUMFERENCE",
    WHITE_BLOOD_CELL_COUNT = "WHITE_BLOOD_CELL_COUNT",
    ALBUMIN_IN_URINE = "ALBUMIN_IN_URINE",
    FACTOR_VIII = "FACTOR_VIII",
    MONOCYTES_COUNT = "MONOCYTES_COUNT",
    ISOPROSTANE_8_EPI_PGF2A = "ISOPROSTANE_8_EPI_PGF2A",
    LPPLA2_ACT = "LPPLA2_ACT",
    APNEA_HYPOP_INDEX = "APNEA_HYPOP_INDEX",
    ALBUMIN_CREATININE = "ALBUMIN_CREATININE",
    ALCOHOL_SERVINGS = "ALCOHOL_SERVINGS",
    AST_SGOT = "AST_SGOT",
    BILIRUBIN_CON = "BILIRUBIN_CON",
    BILIRUBIN_TOT = "BILIRUBIN_TOT",
    BUN_CREATININE = "BUN_CREATININE",
    CRP = "CRP",
    CAC_SCORE = "CAC_SCORE",
    CAROTID_IMT = "CAROTID_IMT",
    SMOKING = "SMOKING",
    D_DIMER = "D_DIMER",
    BP_DIASTOLIC = "BP_DIASTOLIC",
    EGFR = "EGFR",
    FAST_GLUC_BLD = "FAST_GLUC_BLD",
    FEV1 = "FEV1",
    FEV1_FVC = "FEV1_FVC",
    FRUIT_SERVING = "FRUIT_SERVING",
    FVC = "FVC",
    HEMO_A1C = "HEMO_A1C",
    ICAM = "ICAM",
    IL1_BETA = "IL1_BETA",
    IL10 = "IL10",
    IL18 = "IL18",
    LYMPHO_PCT = "LYMPHO_PCT",
    LPPLA2_MASS = "LPPLA2_MASS",
    MCHC = "MCHC",
    NEUTRO_PCT = "NEUTRO_PCT",
    OPG = "OPG",
    PLATELET_CT = "PLATELET_CT",
    PR_EKG = "PR_EKG",
    PROCAL = "PROCAL",
    QT_EKG = "QT_EKG",
    RDW = "RDW",
    RESP_RT = "RESP_RT",
    SODIUM_INTAK = "SODIUM_INTAK",
    TNFR2 = "TNFR2",
    TROPONIN = "TROPONIN",
    VEGE_SERVING = "VEGE_SERVING",
    WAIST_HIP = "WAIST_HIP",
    CESD_SCORE = "CESD_SCORE",
    FAST_LIPIDS = "FAST_LIPIDS",
    MED_ADHER = "MED_ADHER",
    MED_USE = "MED_USE",
    PACEM_STAT = "PACEM_STAT",
    SLP_AP_STAT = "SLP_AP_STAT",
    BP_SYSTOLIC = "BP_SYSTOLIC",
};
/**
* Values describing the types of Education Attainment observed in an Observation.
*/
export enum EducationalAttainmentObservationTypeEnum {
    
    number_8TH_GRADE_OR_LESS = "8TH_GRADE_OR_LESS",
    HIGH_SCHOOL_NO_DIPLOMA = "HIGH_SCHOOL_NO_DIPLOMA",
    HIGH_SCHOOL_GRADUATE_GED = "HIGH_SCHOOL_GRADUATE_GED",
    SOME_COLLEGE_OR_TECH_NO_DEGREE = "SOME_COLLEGE_OR_TECH_NO_DEGREE",
    COLLEGE_OR_TECH_WITH_DEGREE = "COLLEGE_OR_TECH_WITH_DEGREE",
    MASTERS_OR_DOCTORAL_DEGREE = "MASTERS_OR_DOCTORAL_DEGREE",
};
/**
* Values describing the types of Smoking Status observed in an Observation.
*/
export enum SmokingStatusObservationTypeEnum {
    
    CURRENT_SMOKER = "CURRENT_SMOKER",
    FORMER_SOMKER = "FORMER_SOMKER",
    NEVER_SMOKED = "NEVER_SMOKED",
    UNKNOWN_IF_EVER_SMOKED = "UNKNOWN_IF_EVER_SMOKED",
};
/**
* A constrained set of enumerative values containing the ICD-10 diagnoses.
*/
export enum CauseOfDeathEnum {
    
};
/**
* Values describing the types of an Observation.
*/
export enum BaseObservationTypeEnum {
    
};


/**
 * Any resource that has its own identifier
 */
export interface Entity {
    /** The 'logical' identifier of the entity within the system of record.  The simple value of this attribute stands for an identifier of this data object within the system, it can be used as a reference from other objects within the same system (i.e. primary and foreign keys), and it should be unique per type of object. The same data object copied to a different system will likely have a different "id" in the new system since "id" values are system specific and do not represent persistent business identifiers. Business identifiers are assigned outside the information system and are captured in the "identifier" field. The "id" field is more likely to be a serially or randomly generated value that is assigned to the data object as it is created in a system. */
    id: string,
}


/**
 * Administrative information about an individual or animal receiving care or other health-related services.
 */
export interface Person extends Entity {
    /** A 'business' identifier or accession number for the entity, typically as provided by an external system or authority, that are globally unique and persist across implementing systems. Also, since these identifiers are created outside the information system through a specific business process, the Identifier type has additional attributes to capture this additional metadata so the actual identifier values are qualified by the context that created those values. This additional context allows "identifier" instances to be transmitted as business data across systems while still being able to trace them back to the system of origin. */
    identity?: string[],
    /** The scientific binomial name for the species of the Person (e.g. Homo sapiens, Mus musculus, etc.). Values should be derived from the NCBI organismal taxonomy (http://purl.obolibrary.org/obo/ncbitaxon.owl). */
    species?: string,
    /** A label given to a group of animals homogeneous in appearance and other characteristics that distinguish it from other animals of the same species. Values should be derived from the Vertebrate Breed Ontology (http://purl.obolibrary.org/obo/vbo.owl). */
    breed?: string,
    /** Numeric value to represent the calendar year in which an individual was born. */
    year_of_birth?: number,
    /** Coded value indicating the state or condition of being living or deceased; also includes the case where the vital status is unknown. */
    vital_status?: string,
    /** The age of an individual at the time of death, expressed in days since birth */
    age_at_death?: number,
    /** Numeric value to represent the calendar year in which an individual died. */
    year_of_death?: number,
    /** Coded value indicating the circumstance or condition that results in the death of the individual. */
    cause_of_death?: CauseOfDeathId[],
}


/**
 * Demographics about an individual or animal receiving care or other health-related services.
 */
export interface Demography extends Entity {
    /** A 'business' identifier or accession number for the entity, typically as provided by an external system or authority, that are globally unique and persist across implementing systems. Also, since these identifiers are created outside the information system through a specific business process, the Identifier type has additional attributes to capture this additional metadata so the actual identifier values are qualified by the context that created those values. This additional context allows "identifier" instances to be transmitted as business data across systems while still being able to trace them back to the system of origin. */
    identity?: string[],
    /** A reference to the Participant that is associated with this record. */
    associated_participant?: ParticipantId,
    /** A reference to the Visit that is associated with this record. */
    associated_visit?: VisitId,
    /** The biologic character or quality that distinguishes male and female from one another as expressed by analysis of the person's gonadal, morphologic (internal and external), chromosomal, and hormonal characteristics. */
    sex?: string,
    /** An individual's self-described social and cultural grouping, specifically whether an individual describes themselves as Hispanic or Latino. The provided values are based on the categories defined by the U.S. Office of Management and Business and used by the U.S. Census Bureau */
    ethnicity?: string,
    /** An arbitrary classification of a taxonomic group that is a division of a species. It usually arises as a consequence of geographical isolation within a species and is characterized by shared heredity, physical attributes and behavior, and in the case of humans, by common history, nationality, or geographic distribution. The provided values are based on the categories defined by the U.S. Office of Management and Business and used by the U.S. Census Bureau. */
    race?: string,
}


/**
 * A Participant is the entity of interest in a research study, typically a human being or an animal, but can also be a device, group of humans or animals, or a tissue sample. Human research subjects are usually not traceable to a particular person to protect the subject’s privacy.
 */
export interface Participant extends Entity {
    /** A reference to the Person that is associated with this record. */
    associated_person?: PersonId,
    /** A 'business' identifier or accession number for the entity, typically as provided by an external system or authority, that are globally unique and persist across implementing systems. Also, since these identifiers are created outside the information system through a specific business process, the Identifier type has additional attributes to capture this additional metadata so the actual identifier values are qualified by the context that created those values. This additional context allows "identifier" instances to be transmitted as business data across systems while still being able to trace them back to the system of origin. */
    identity?: string[],
    /** A free text field to capture additional info/explanation about the research subject. */
    description?: string,
    /** A reference to the Study(s) of which this Participant is a member */
    member_of_research_study?: ResearchStudyId,
    /** The age in days of the Participant at the index_timepoint */
    age_at_index?: number,
    /** The text term used to describe the reference or anchor date used for date obfuscation, where a single date is obscured by creating one or more date ranges in relation to this date. */
    index_timepoint?: string,
    /** The Organization through which a subject was enrolled on a ResearchStudy. */
    originating_site?: OrganizationId,
    /** The arm(s) of the study on which the Participant is enrolled */
    study_arm?: string[],
    /** Data Use Restrictions that are used to indicate permissions/restrictions for datasets and/or materials, and relates to the purposes for which datasets and/or material might be removed, stored or used. Based on the Data Use Ontology : see http://www.obofoundry.org/ontology/duo.html */
    consents?: ConsentId[],
}


/**
 * A process where a researcher or organization plans and then executes a series of steps intended to increase the field of healthcare-related knowledge. This includes studies of safety, efficacy, comparative effectiveness and other information about medications, devices, therapies and other interventional and investigative techniques. A ResearchStudy involves the gathering of information about human or animal subjects.
 */
export interface ResearchStudy extends Entity {
    /** A 'business' identifier or accession number for the entity, typically as provided by an external system or authority, that are globally unique and persist across implementing systems. Also, since these identifiers are created outside the information system through a specific business process, the Identifier type has additional attributes to capture this additional metadata so the actual identifier values are qualified by the context that created those values. This additional context allows "identifier" instances to be transmitted as business data across systems while still being able to trace them back to the system of origin. */
    identity?: string[],
    /** An unabridged name of a research program, project, or study. */
    name?: string,
    /** An abbreviated name of a research program, project, or study. */
    name_shortened?: string,
    /** An unabridged description of a research program, project, or study. */
    description?: string,
    /** An abbreviated description of a research program, project, or study. */
    description_shortened?: string,
    /** An entity that is responsible for the initiation, management, and/or financing of a research project. */
    sponsor?: string,
    /** The date when the research project began. */
    date_started?: TimePointId,
    /** The date when the research project ended. */
    date_ended?: TimePointId,
    /** The accession number of the research study with the accession authority */
    accession_number?: string,
    /** The accession authority for the research study. */
    accession_authority?: string,
    /** The version number of the ResearchStudy */
    version?: string,
    /** A URL address for a resource that provides information about a research program, project, or study. */
    url?: string,
    /** A reference to a parent ResearchStudy (e.g. a link to the overarching CPTAC ResearchStudy from a substudy of CPTAC) */
    part_of?: ResearchStudyId,
    /** The 'type' of ResearchStudy represented (e.g. a broad-based Program like 'CPTAC' or a more focused Project like 'CPTAC PDAC Discovery Study') */
    research_project_type?: string,
    /** A collection of timepoint observations that are relevant to research projects (e.g. date of IACUC approval, date of IRB approval, date of embargo end, etc.) */
    associated_timepoint?: TimePointId[],
    /** The investigator or investigators leading a project. */
    principal_investigator?: string[],
    /** Data Use Restrictions that are used to indicate permissions/restrictions for datasets and/or materials, and relates to the purposes for which datasets and/or material might be removed, stored or used. Based on the Data Use Ontology : see http://www.obofoundry.org/ontology/duo.html */
    consents?: ConsentId[],
}


/**
 * An entity that can be used to capture consent code and other relevant data about consent for a study.
 */
export interface Consent extends Entity {
    /** Data Use Restrictions that are used to indicate permissions/restrictions for datasets and/or materials, and relates to the purposes for which datasets and/or material might be removed, stored or used. Based on the Data Use Ontology : see http://www.obofoundry.org/ontology/duo.html */
    consent_code?: string,
    /** The point in time from which the consent record is valid. */
    valid_from?: TimePointId,
    /** The point in time after which the consent record is invalid. */
    valid_to?: TimePointId,
}


/**
 * Events where Persons engage with the healthcare system for a duration of time. They are often also called “Encounters”. Visits are defined by a configuration of circumstances under which they occur, such as (i) whether the patient comes to a healthcare institution, the other way around, or the interaction is remote, (ii) whether and what kind of trained medical staff is delivering the service during the Visit, and (iii) whether the Visit is transient or for a longer period involving a stay in bed. (OMOP)
 */
export interface Visit extends Entity {
    /** A value representing the kind (or category) of visit, like inpatient or outpatient. */
    visit_category?: string,
    /** The age of the Participant (in days) at the start of the Visit. */
    age_at_visit_start?: number,
    /** The age of the Participant (in days) at the end of the Visit. */
    age_at_visit_end?: number,
    /** A value representing the provenance of the visit record, or where the record comes from. */
    visit_provenance?: string,
    /** A reference to the Participant for whom this Visit occurred. */
    associated_participant?: ParticipantId,
}


/**
 * A grouping of people or organizations with a common purpose such as a data coordinating center, an university, or an institute within a university.
 */
export interface Organization extends Entity {
    /** A 'business' identifier or accession number for the entity, typically as provided by an external system or authority, that are globally unique and persist across implementing systems. Also, since these identifiers are created outside the information system through a specific business process, the Identifier type has additional attributes to capture this additional metadata so the actual identifier values are qualified by the context that created those values. This additional context allows "identifier" instances to be transmitted as business data across systems while still being able to trace them back to the system of origin. */
    identity?: string[],
    /** The full legal name by which the organization is known (e.g. 'National Cancer Institute') */
    name?: string,
    /** A secondary name for the organization such as a short name or abbreviation (e.g. 'NCI') */
    alias?: string,
    /** The type of the organization (e.g. 'Cancer Genome Characterization Center') */
    organization_type?: string,
}


/**
 * A structured representation of a single point in time that allows direct/explicit declaration as a dateTime, specification in terms of offset from a defined index, or description of an event type as a proxy for the time point when it occurred.
 */
export interface TimePoint extends Entity {
    /** An explicitly specified timepoint described in terms of a date and optionally a time on that date. */
    date_time?: string,
    /** Another TimePoint from which this point is offset. */
    index_time_point?: TimePointId,
    /** A quantity of time that, together with the index date or event, can be used to derive a specific timepoint. */
    offset_from_index?: number,
    /** An event that occurred at the point in time specified by this TimePoint. */
    event_type?: string,
}


/**
 * A period of time between a start and end time point.
 */
export interface TimePeriod {
    /** When a period of time started. */
    period_start?: TimePointId,
    /** When a period of time ended. */
    period_end?: TimePointId,
}


/**
 * A holder for ResearchStudy objects
 */
export interface ResearchStudyCollection {
    entries?: {[index: ResearchStudyId]: ResearchStudy },
}


/**
 * A Questionnaire is an organized collection of questions intended to solicit information from patients, providers or other individuals involved in the healthcare domain. They may be simple flat lists of questions or can be hierarchically organized in groups and sub-groups, each containing questions. The Questionnaire defines the questions to be asked, how they are ordered and grouped, any intervening instructional text and what the constraints are on the allowed answers. The results of a Questionnaire can be communicated using the QuestionnaireResponse. (FHIR)
 */
export interface Questionnaire extends Entity {
    /** A 'business' identifier or accession number for the entity, typically as provided by an external system or authority, that are globally unique and persist across implementing systems. Also, since these identifiers are created outside the information system through a specific business process, the Identifier type has additional attributes to capture this additional metadata so the actual identifier values are qualified by the context that created those values. This additional context allows "identifier" instances to be transmitted as business data across systems while still being able to trace them back to the system of origin. */
    identity?: string[],
    /** Name for this Questionnaire (computer friendly) */
    name?: string,
    /** Name for this Questionnaire (human friendly) */
    title?: string,
    /** Natural language description of the Questionnaire */
    description?: string,
    /** Canonical identifier for this Questionnaire, represented as an absolute URI (globally unique) */
    url?: string,
    /** The identifier that is used to identify this version of the questionnaire when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the questionnaire author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. */
    version?: string,
    /** Name of the publisher/steward (organization or individual) of this Questionnaire */
    publisher?: string,
    /** Textual description of any use and/or publishing restrictions */
    copyright?: string,
    /** Copyright holder and year(s) */
    copyright_label?: string,
    /** The language(s) in which questions are presented. */
    language?: string[],
    /** A collection of QuestionnaireItem objects which encapsulate the question being asked. */
    items: QuestionnaireItemId[],
}


/**
 * QuestionnaireItem defines a question or section within the Questionnaire
 */
export interface QuestionnaireItem extends Entity {
    /** A 'business' identifier or accession number for the entity, typically as provided by an external system or authority, that are globally unique and persist across implementing systems. Also, since these identifiers are created outside the information system through a specific business process, the Identifier type has additional attributes to capture this additional metadata so the actual identifier values are qualified by the context that created those values. This additional context allows "identifier" instances to be transmitted as business data across systems while still being able to trace them back to the system of origin. */
    identity?: string[],
    /** Name for group or question text */
    text?: string,
    /** Corresponding concept for this item in a terminology */
    code?: string,
    /** A reference to a parent QuestionnaireItem. */
    part_of?: QuestionnaireItemId,
}


/**
 * QuestionnaireResponse provides a complete or partial list of answers to a set of questions filled when responding to a questionnaire. (FHIR)
 */
export interface QuestionnaireResponse extends Entity {
    /** A reference to the Visit that is associated with this record. */
    associated_visit?: VisitId,
    /** The age (in days) of the Participant when the QuestionnaireResponse was captured. */
    age_at_response?: number,
    /** A collection of QuestionnaireResponseItem objects which encapsulate the question being asked and the response. */
    items: QuestionnaireResponseItem[],
}


/**
 * QuestionnaireResponseItem provides a complete or partial list of answers to a set of questions filled when responding to a questionnaire. (FHIR)
 */
export interface QuestionnaireResponseItem {
    /** A reference to the QuestionnaireItem that this QuestionnaireResponseItem responds to. */
    has_questionnaire_item?: QuestionnaireItemId,
    /** Name for group or question text */
    text?: string,
    response_value: QuestionnaireResponseValue,
}


/**
 * Single-valued answer to the question. (FHIR)
 */
export interface QuestionnaireResponseValue {
    /** A general slot to hold a value. */
    value?: string,
    type?: string,
    name?: string,
}


/**
 * Single-valued decimal answer to the question
 */
export interface QuestionnaireResponseValueDecimal extends QuestionnaireResponseValue {
}


/**
 * Single-valued boolean answer to the question
 */
export interface QuestionnaireResponseValueBoolean extends QuestionnaireResponseValue {
}


/**
 * Single-valued integer answer to the question
 */
export interface QuestionnaireResponseValueInteger extends QuestionnaireResponseValue {
}


/**
 * Single-valued TimePoint answer to the question
 */
export interface QuestionnaireResponseValueTimePoint extends QuestionnaireResponseValue {
}


/**
 * Single-valued string answer to the question
 */
export interface QuestionnaireResponseValueString extends QuestionnaireResponseValue {
}


/**
 * Conditions are records of a Person suggesting the presence of a disease or medical condition stated as a diagnosis, a sign or a symptom, which is either observed by a Provider or reported by the patient. Conditions are recorded in different sources and levels of standardization. 
 */
export interface Condition extends Entity {
    /** A 'business' identifier or accession number for the entity, typically as provided by an external system or authority, that are globally unique and persist across implementing systems. Also, since these identifiers are created outside the information system through a specific business process, the Identifier type has additional attributes to capture this additional metadata so the actual identifier values are qualified by the context that created those values. This additional context allows "identifier" instances to be transmitted as business data across systems while still being able to trace them back to the system of origin. */
    identity?: string[],
    /** A reference to the Visit that is associated with this record. */
    associated_visit?: VisitId,
    /** The coded value for the presence of a disease or medical condition stated as a diagnosis, a sign or a symptom, coded to the Human Phenotype Ontology or MONDO. */
    condition_concept?: string,
    /** The Participant's age (expressed in days) when the condition was first recorded. */
    age_at_condition_start?: number,
    /** The Participant's age (expressed in days) when the condition was recorded as having been resolved. */
    age_at_condition_end?: number,
    /** A value representing the provenance of the Condition record */
    condition_provenance?: string,
    /** A value indicating whether the medical condition described in this record is present, absent, historically present, or unknown for this individual patient. */
    condition_status?: string,
    /** A subjective assessment of the severity of the condition */
    condition_severity?: string,
    /** A value indicating the relationship between the Participant to which the Condition is attributed and the individual who had the reported Condition.  If the Condition is affecting the participant themselves, then 'Self' is the appropriate relationship.  If the Condition is affecting a family member (e.g. a parent of the Participant) then an appropriate relationship should be provided (e.g. 'Parent') */
    relationship_to_participant?: string,
    /** A reference to the Participant to which the Condition is attributed. */
    associated_participant?: ParticipantId,
}


/**
 * Procedure contains records of activities or processes ordered by, or carried out by, a healthcare provider on the patient to have a diagnostic or therapeutic purpose. Procedures are present in various data sources in different forms with varying levels of standardization. [Derived from OMOP]
 */
export interface Procedure extends Entity {
    /** A 'business' identifier or accession number for the entity, typically as provided by an external system or authority, that are globally unique and persist across implementing systems. Also, since these identifiers are created outside the information system through a specific business process, the Identifier type has additional attributes to capture this additional metadata so the actual identifier values are qualified by the context that created those values. This additional context allows "identifier" instances to be transmitted as business data across systems while still being able to trace them back to the system of origin. */
    identity?: string[],
    /** A reference to the Visit that is associated with this record. */
    associated_visit?: VisitId,
    /** The coded value that describes the procedure, derived from OMOP codes. */
    procedure_concept?: string,
    /** The Participant's age (expressed in days) when the procedure was performed. */
    age_at_procedure?: number,
    /** A value representing the provenance of the Procedure record */
    procedure_provenance?: string,
    /** A value indicating whether the medical procedure described in this record is present, absent, or unknown for this individual patient. */
    procedure_status?: string,
    /** The quantity of procedures ordered or administered. */
    quantity?: QuantityId,
    /** A reference to the Participant on which the Procedure was performed. */
    associated_participant?: ParticipantId,
}


/**
 * Exposures are records of a Person suggesting exposure to a medication, device, environmental material.
 */
export interface Exposure extends Entity {
    /** A 'business' identifier or accession number for the entity, typically as provided by an external system or authority, that are globally unique and persist across implementing systems. Also, since these identifiers are created outside the information system through a specific business process, the Identifier type has additional attributes to capture this additional metadata so the actual identifier values are qualified by the context that created those values. This additional context allows "identifier" instances to be transmitted as business data across systems while still being able to trace them back to the system of origin. */
    identity?: string[],
    /** A reference to the Visit that is associated with this record. */
    associated_visit?: VisitId,
    /** The Participant's age (expressed in days) at the exposure start date. */
    age_at_exposure_start?: number,
    /** The Participant's age (expressed in days) at the exposure end date, if available. Otherwise equal to age_at_exposure_start. */
    age_at_exposure_end?: number,
    /** A reference to the Participant to which the exposure is attributed. */
    associated_participant?: ParticipantId,
    /** A value indicating whether the exposure described in this record is present, absent, historically present, or unknown for this individual patient. */
    exposure_status?: string,
}


/**
 * DrugExposures are records of a Person suggesting exposure to a medication. The source could be prescription, dispensing, medication administration records (MARs), or patient medication list.
 */
export interface DrugExposure extends Exposure {
    /** The coded value for a drug. From RxNorm. The syntax for the enum may need work. */
    drug_concept?: string,
    /** A value representing the provenance of the DrugExposure record. From OMOP Drug Types. */
    exposure_provenance?: string,
    /** Intended refills at time of the prescription. */
    refills?: number,
    /** To find the dose form of a drug the RELATIONSHIP table can be used where the relationship_id is ‘Has dose form’. If liquid, quantity stands for the total amount dispensed or ordered of ingredient in the units given by the drug_strength table. If the unit from the source data does not align with the unit in the DRUG_STRENGTH table the quantity should be converted to the correct unit given in DRUG_STRENGTH. For clinical drugs with fixed dose forms (tablets etc.) the quantity is the number of units/tablets/capsules prescribed or dispensed (can be partial, but then only 1/2 or 1/3, not 0.01). Clinical drugs with divisible dose forms (injections) the quantity is the amount of ingredient the patient got. For example, if the injection is 2mg/mL but the patient got 80mL then quantity is reported as 160. Quantified clinical drugs with divisible dose forms (prefilled syringes), the quantity is the amount of ingredient similar to clinical drugs. Please see [how to calculate drug dose](https://ohdsi.github.io/CommonDataModel/drug_dose.html) for more information. */
    quantity?: number,
    /** The number of days of supply of the medication as recorded in the original prescription or dispensing record. Days supply can differ from actual drug duration (i.e. prescribed days supply vs actual exposure). */
    days_supply?: number,
    /** This is the verbatim instruction for the drug as written by the provider. */
    sig?: string,
    /** Route of drug administration. */
    route_concept?: string,
}


/**
 * DeviceExposures are records of a Person suggesting exposure to a foreign object. The source is typically physical objects used in procedures, measurements, or observations.
 */
export interface DeviceExposure extends Exposure {
    /** The coded value for a device. Primarily SNOMED. The syntax for the enum may need work. */
    device_concept?: string,
    /** A value representing the provenance of the DeviceExposure record. From OMOP Device Types. */
    exposure_provenance?: string,
    /** Amount of device used. If not present in source, default to 1. */
    quantity?: number,
}


/**
 * A structured object that describes a single data item about the physical dimensions of an entity (e.g. length width, area), as generated through a point-in-time observation or measurement.
 */
export interface DimensionalObservation extends Observation {
}


/**
 * A set of one or more discrete observations about the physical dimensions of an object (e.g. length, width, area).
 */
export interface DimensionalObservationSet extends ObservationSet {
}


/**
 * Abstract class for various kinds of files. Subclasses may be defined for specific file types.
 */
export interface File extends Entity {
    /** A 'business' identifier or accession number for the entity, typically as provided by an external system or authority, that are globally unique and persist across implementing systems. Also, since these identifiers are created outside the information system through a specific business process, the Identifier type has additional attributes to capture this additional metadata so the actual identifier values are qualified by the context that created those values. This additional context allows "identifier" instances to be transmitted as business data across systems while still being able to trace them back to the system of origin. */
    identity?: string[],
    /** The name (or part of a name) of a file (of any type). */
    file_name?: string,
    /** The size of the data file (object) in bytes. */
    file_size?: number,
    /** A unique identifier or url for identifying or locating the file. */
    file_location?: string[],
    /** The 128-bit hash value expressed as a 32 digit hexadecimal number used as a file's digital fingerprint. */
    md5sum?: string,
    /** The nature or genre of the resource. Recommended best practice is to use a controlled vocabulary such as the DCMI Type Vocabulary [DCMI-TYPE](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#section-7). To describe the file format, physical medium, or dimensions of the resource, use the Format element. */
    data_type?: string,
    /** A broad categorization of the contents of the data file. */
    data_category?: string,
    /** The file format, physical medium, or dimensions of the resource. Examples of dimensions include size and duration. Recommended best practice is to use a controlled vocabulary such as the list of Internet Media Types [MIME] (http://www.iana.org/assignments/media-types/). */
    format?: string,
    /** An account of the resource. Description may include but is not limited to: an abstract, a table of contents, a graphical representation, or a free-text account of the resource. */
    description?: string,
    /** A reference to the Participant to which this file relates. */
    associated_participant?: ParticipantId,
    /** A File from which this File is derived.  A derivation is a transformation of an entity into another, an update of an entity resulting in a new one, or the construction of a new entity based on a pre-existing entity. */
    derived_from?: FileId,
}


/**
 * A collection of information intented to be understood together as a whole, and codified in human-readable form.
 */
export interface Document extends Entity {
    /** A 'business' identifier or accession number for the entity, typically as provided by an external system or authority, that are globally unique and persist across implementing systems. Also, since these identifiers are created outside the information system through a specific business process, the Identifier type has additional attributes to capture this additional metadata so the actual identifier values are qualified by the context that created those values. This additional context allows "identifier" instances to be transmitted as business data across systems while still being able to trace them back to the system of origin. */
    identity?: string[],
    /** The high-level type of the document (e.g.  'publication', 'pathology report') */
    document_type?: string,
    /** A free text description or summary of the report. */
    description?: string,
    /** The entity that the report is primarily about */
    focus?: EntityId,
    /** A URL/web address where the document can be accessed. */
    url?: string[],
}


/**
 * Any material taken as a sample from a biological entity (living or dead), or from a physical object or the environment. Specimens are usually collected as an example of their kind, often for use in some investigation.
 */
export interface Specimen extends Entity {
    /** A 'business' identifier or accession number for the entity, typically as provided by an external system or authority, that are globally unique and persist across implementing systems. Also, since these identifiers are created outside the information system through a specific business process, the Identifier type has additional attributes to capture this additional metadata so the actual identifier values are qualified by the context that created those values. This additional context allows "identifier" instances to be transmitted as business data across systems while still being able to trace them back to the system of origin. */
    identity?: string[],
    /** A free text field to capture additional information or explanation about the specimen. */
    description?: string,
    /** The high-level type of the specimen, based on its derivation provenance (i.e. how far removed it is from the original sample extracted from a source). */
    specimen_type?: string,
    /** For specimens of type 'analyte' (or an 'aliquot' derived from an analyte), this is the category of chemcial the analyte of interest represents (e.g. DNA, RNA) */
    analyte_type?: string,
    /** The general kind of material from which the specimen was derived. */
    source_material_type?: string,
    /** An existing specimen from which the specimen of interest was directly derived (i.e its immediate parent specimen). */
    parent_specimen?: Specimen[],
    /** A specific Subject from which the specimen was directly or indirectly derived. */
    source_participant?: ParticipantId,
    /** The activity through which a specimen was created, by removing material from an biological subject, or deriving material from an existing specimen. */
    creation_activity?: SpecimenCreationActivityId,
    /** An activity that modifies the physical structure, composition, or state of a specimen. */
    processing_activity?: SpecimenProcessingActivityId[],
    /** An activity that results in the storage or maintenance of a specimen in a particular location, container, or state. */
    storage_activity?: SpecimenStorageActivityId[],
    /** An activity through which the specimen is transported between locations. */
    transport_activity?: SpecimenTransportActivityId[],
    /** A physical container in which a specimen is presently held or attached -  as storage for future use,  a substrate for growth (e.g. a cell culture dish), or a vessel to enable analysis (e.g. a microscope slide or 96-well plate) */
    contained_in?: SpecimenContainerId,
    /** Observations about the current physical dimensions of an object (e.g. length, width, area). */
    dimensional_measures?: DimensionalObservationSetId,
    /** An observation related to the present quantity of a specimen - e.g. its weight, volume, or analyte concentration. */
    quantity_measure?: SpecimenQuantityObservationId[],
    /** An observation about characteristics of a specimen that are indicative of its quality or suitability for use. */
    quality_measure?: SpecimenQualityObservationId[],
    /** A term describing the type of cell or cellular material comprising a specimen. */
    cellular_composition_type?: string,
    /** A reference to an external document that is about or related to the specimen (e.g. a publication related to the study it is a part of, pathology report containing additional details about it, protocol describing how it was collected) */
    related_document?: DocumentId[],
    /** The location in a parent specimen from which a section/portion was excised (e.g. top, middle, bottom) */
    section_location?: string,
    /** A 'living' biologically active product that was derived from the specimen (e.g. a cell culture, tissue culture, or organoid) */
    derived_product?: BiologicProduct[],
}


/**
 * A vessel in which a specimen is held or to which it is attached - for storage or as a substrate for growth (e.g. a cell culture dish) or analysis (e.g. a microscope slide or 96-well plate)
 */
export interface SpecimenContainer extends Entity {
    /** The kind of the container. */
    container_type?: string,
    /** Informal number by which the container is referenced  or identified (e.g. a slide number, or a well number in a plate) */
    container_number?: string,
    /** A material substance added to the container (typically to support the primary contained object - e.g. culture media to support cell growth) */
    additive?: SubstanceId[],
    /** A larger container of which this container is a part (e.g. the complete 96-well plate of which a single well is a part) */
    parent_container?: SpecimenContainerId,
}


/**
 * The process of creating a specimen. This may occur through observing and/or collecting material from an biological source or natural setting, or through derivation from an existing specimen (e.g. via portioning or aliquoting).
 */
export interface SpecimenCreationActivity extends Entity {
    /** The high-level type of creation activity. */
    activity_type?: string,
    /** The date when the activity began (in this case, a specimen creation event). */
    date_started?: TimePointId,
    /** The date when the activity ended (in this case, a specimen creation event). */
    date_ended?: TimePointId,
    /** The organization or group that performed the activity. */
    performed_by?: OrganizationId,
    /** The type of method applied in collecting a sample from its original source. */
    collection_method_type?: string,
    /** The type of method applied to derive a new specimen from an existing one. */
    derivation_method_type?: string,
    /** A type of material or reagent used applied as input when creating a specimen. */
    additive?: SubstanceId[],
    /** The anatomic site from which a specimen was collected. */
    collection_site?: BodySiteId,
    /** The quantity of material in the specimen as originally collected from its original source material (prior to downstream portioning or processing) */
    quantity_collected?: QuantityId,
    /** A numeric value that represents the sequential order of this creation activity relative to those producing other specimens from the same source material or parent specimen. */
    specimen_order?: number,
}


/**
 * A structured object that describes a characteristic of a specimen indicative of its quality or suitability for use, as generated through a point-in-time observation or measurement.
 */
export interface SpecimenQualityObservation extends Observation {
}


/**
 * A structured object that describes a single data item about the quantity of a Specimen, as generated through a point-in-time observation or measurement.
 */
export interface SpecimenQuantityObservation extends Observation {
}


/**
 * An activity that modifies the physical structure, composition, or state of a specimen. Unlike SpecimenCreation, SpecimenProcessing activities do not result in the generation of new entities - they take a single specimen as input, and output that same specimen.
 */
export interface SpecimenProcessingActivity extends Entity {
    /** The high-level type of processing activity */
    activity_type?: string,
    /** The date when the activity began (in this case, a specimen processing event). */
    date_started?: TimePointId,
    /** The date when the activity began (in this case, a specimen processing event). */
    date_ended?: TimePointId,
    /** The length of time over which the activity was performed. */
    duration?: Quantity[],
    /** A specific type of method or procedure performed to process the specimen */
    method_type?: string,
    /** A type of material or reagent used as input when processing the specimen */
    additive?: Substance[],
}


/**
 * An activity in which a specimen is stored or maintained in a particular location, container, or state. Unlike 'processing' activities, storage does not alter the \nintrinsic physical nature of a specimen.
 */
export interface SpecimenStorageActivity extends Entity {
    /** The date when the activity began (in this case, a storage event). */
    date_started?: TimePointId,
    /** The date when the activity ended (in this case, a storage event). */
    date_ended?: TimePointId,
    /** The length of time over which the activity was performed. */
    duration?: QuantityId,
    /** A specific type of method or procedure performed to store the specimen */
    method_type?: string,
    /** A container in which the specimen is held or affixed during its storage. */
    container?: SpecimenContainer[],
}


/**
 * An activity through which a specimen is transported between locations or organizations.
 */
export interface SpecimenTransportActivity extends Entity {
    /** The date when the activity began (in this case, a transport event). */
    date_started?: TimePointId,
    /** The date when the activity ended (in this case, a transport event). */
    date_ended?: TimePointId,
    /** The length of time over which the activity was performed. */
    duration?: string[],
    /** An organization (facility, site, lab, etc) from which the specimen was transported as a result of the activity. */
    transport_origin?: OrganizationId,
    /** An organization (facility, site, lab, etc) to which the specimen is delivered as a result of the activity. */
    transport_destination?: OrganizationId,
}


/**
 * A living organism, or a metabolically active biological system such as a cell culture, tissue culture, or organoid that is maintained or propagated in vitro.
 */
export interface BiologicProduct extends Entity {
    /** A 'business' identifier or accession number for the entity, typically as provided by an external system or authority, that are globally unique and persist across implementing systems. Also, since these identifiers are created outside the information system through a specific business process, the Identifier type has additional attributes to capture this additional metadata so the actual identifier values are qualified by the context that created those values. This additional context allows "identifier" instances to be transmitted as business data across systems while still being able to trace them back to the system of origin. */
    identity?: string[],
    /** A free text field to capture additional info/explanation about the model system */
    description?: string,
    /** The high level type of model system (e.g. cell line, cell culture, tissue culture, organoid) */
    product_type?: string,
    /** When the specimen an actively growing model system, such as a cell or tissue culture, this property captures its passage number. */
    passage_number?: number[],
    /** When the specimen an actively growing model system, such as a cell or tissue culture, this property captures its rate of growth. */
    growth_rate?: string[],
}


/**
 * A type of material substance, or instance thereof, as used in a particular application. May include information about the role the substance played in a particular application.
 */
export interface Substance extends Entity {
    /** The specific type of the substance - at as granular a level as possible. May be a specific chemical compound, or the name of a formulation/preparation made up of many compounds. */
    substance_type?: string,
    /** A role played by the substance in a particular application (e.g. the role of a lysis buffer when applied in a specimen creation activity, or the role of fixative when applied in specimen processing) */
    role?: string[],
    /** The quantity of substance this instance stands for. */
    substance_quantity?: QuantityId,
}


/**
 * A structured object to represent an amount of something (e.g., weight, mass, length, duration of time) - including a value and unit.
 */
export interface Quantity extends Entity {
    /** A decimal amount, in the given units (if specified) */
    value_decimal?: string,
    /** An integer amount, in the given units (if specified) */
    value_integer?: number,
    /** A coded value representing a quantity (e.g. "Adjacent (< or = 2cm)") */
    value_concept?: string,
    /** A coded or free text (in the .text field) representation of the unit. */
    unit?: string,
}


/**
 * A site in the body of an organism, typically described in terms of an anatomical concept and optional qualifiers (e.g. left/right, upper/lower). But body sites as defined here may include non-canonical sites, such as an implanted medical device.
 */
export interface BodySite extends Entity {
    /** A term describing any site in the body. */
    site: string,
    /** A qualifier that further refines or specifies the location of the body site - e.g. to indicate laterality, upper v. lower, containment in some other anatomical structure (e.g. 'blood' contained in the 'hepatic vein') */
    qualifier?: string[],
}


/**
 * A structured object to hold related Observations in a set.
 */
export interface ObservationSet extends Entity {
    /** A set of one or more observations. */
    observations?: ObservationId[],
    /** A reference to the Visit that is associated with this record. */
    associated_visit?: VisitId,
    /** The general category of observation set described */
    category?: string,
    /** The entity or entities directly observed/measured in generating an observation result. */
    focus?: Entity[],
    /** The Participant that the observation is about (if not the direct focus).  Observations are often made on specimens derived from a patient, or other entities related to a patient, that ultimately tell us something about the patient of interest. */
    associated_participant?: ParticipantId,
    /** The type of method used in generating the ObservationSet */
    method_type?: string[],
    /** The organization or group that performed the observation activity. */
    performed_by?: OrganizationId,
}


/**
 * A data structure with key (observation_type) and value (value) attributes that represents a single observation, such as the hematocrit component of a complete blood count panel.
 */
export interface Observation extends Entity {
    /** A reference to the Visit that is associated with this record. */
    associated_visit?: VisitId,
    /** The Participant's age (expressed in days) when the Observation was made. */
    age_at_observation?: number,
    /** The general category of observation described */
    category?: string,
    /** The type of Observation being represented (e.g. 'diastolic blood pressure') */
    observation_type: string,
    /** A type of method used in generating the Observation result. */
    method_type?: string,
    /** The entity or entities directly observed/measured in generating an observation result. */
    focus?: EntityId,
    /** The patient that the observation is about (if not the direct focus).  e.g. observations are often made on specimens derived from a patient, or other entities related to a patient, that ultimately tell us something about the patient of interest. */
    associated_participant?: ParticipantId,
    /** The organization or group that performed the observation activity. */
    performed_by?: OrganizationId,
    /** A slot to hold a string value for an Observation. */
    value_string?: string,
    /** A slot to hold a boolean value for an Observation. */
    value_boolean?: boolean,
    /** A slot to hold a Quantity value for an Observation. */
    value_quantity?: QuantityId,
    /** A slot to hold an enumerated value for an Observation. */
    value_enum?: string,
}


/**
 * A structured object to hold related Observations in a set.
 */
export interface MeasurementObservationSet extends ObservationSet {
}


/**
 * A data structure with key (observation_type) and value (value) attributes that represents a single observation, such as the hematocrit component of a complete blood count panel.
 */
export interface MeasurementObservation extends Observation {
    /** If reference ranges for upper and lower limit of normal as provided (typically by a laboratory) these are stored in the range_high and range_low fields. This should be set to NULL if not provided. */
    range_low?: QuantityId,
    /** If reference ranges for upper and lower limit of normal as provided (typically by a laboratory) these are stored in the range_high and range_low fields. This should be set to NULL if not provided. */
    range_high?: QuantityId,
    /** The type of Observation being represented (e.g. 'diastolic blood pressure') */
    observation_type?: string,
}


/**
 * A structured object to hold related Observations in a set.
 */
export interface SdohObservationSet extends ObservationSet {
}


/**
 * A data structure with key (observation_type) and value (value) attributes that represents a single observation, such as the hematocrit component of a complete blood count panel.
 */
export interface SdohObservation extends Observation {
    /** An optional attribute that captures the QuestionnaireItem to which this SdohObservation refers. */
    related_questionnaire_item?: QuestionnaireItemId,
}


/**
 * A class / complex datatype for handling both values and ordinality for causes of death.
 */
export interface CauseOfDeath extends Entity {
    /** The value for the cause of death (e.g., myocardial infarction, chronic obstructive pulmonary disorder). */
    cause: string,
    /** The ordinality of a given cause of death record recorded in integers.  Primary cause of death should have order equal to 1 and additional causes should be recorded starting from 2 and iterating up from there. */
    order: number,
}



