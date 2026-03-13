export type EntityId = string;
export type PersonId = string;
export type DemographyId = string;
export type ParticipantId = string;
export type ResearchStudyId = string;
export type ConsentId = string;
export type VisitId = string;
export type OrganizationId = string;
export type TimePointId = string;
export type TimePeriodId = string;
export type QuestionnaireId = string;
export type QuestionnaireItemId = string;
export type QuestionnaireResponseId = string;
export type QuestionnaireResponseItemId = string;
export type QuestionnaireResponseValueId = string;
export type QuestionnaireResponseValueDecimalId = string;
export type QuestionnaireResponseValueBooleanId = string;
export type QuestionnaireResponseValueIntegerId = string;
export type QuestionnaireResponseValueTimePointId = string;
export type QuestionnaireResponseValueStringId = string;
export type ConditionId = string;
export type ProcedureId = string;
export type ImagingStudyId = string;
export type ExposureId = string;
export type DrugExposureId = string;
export type DeviceExposureId = string;
export type DimensionalObservationId = string;
export type DimensionalObservationSetId = string;
export type FileId = string;
export type ImagingFileId = string;
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
export type AssayId = string;
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
* A constrained set of enumerative values containing the Measurement Method Ontology (MMO) values for assay methods.
*/
export enum AssayMethodEnum {
    
};
/**
* A constrained set of enumerative values containing the BioAssay Ontology (BAO) values for instruments.
*/
export enum InstrumentEnum {
    
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
    
    /** Person receiving care at a temporary or non-traditional care site established to expand capacity, such as during a public health emergency */
    ALTERNATE_CARE_SITE_ACS = "ALTERNATE_CARE_SITE_ACS",
    /** Person using transportation service for the purpose of initiating one of the other Visits, without a Care Site, within one day, potentially with Providers accompanying the Visit and delivering service */
    AMBULANCE_VISIT = "AMBULANCE_VISIT",
    /** Person visiting a specialized outpatient clinic dedicated to the assessment and management of persistent post-COVID-19 symptoms */
    AMBULATORY_LONG_COVID_CLINIC = "AMBULATORY_LONG_COVID_CLINIC",
    /** Person visiting a Care Site within one day for the purpose of receiving rehabilitative therapy services without overnight admission */
    AMBULATORY_REHABILITATION_VISIT = "AMBULATORY_REHABILITATION_VISIT",
    /** Person visiting ER followed by a subsequent Inpatient Visit, where Emergency department is part of hospital, and transition from the ER to other hospital departments is undefined */
    EMERGENCY_ROOM_AND_INPATIENT_VISIT = "EMERGENCY_ROOM_AND_INPATIENT_VISIT",
    /** Person visiting dedicated healthcare institution for treating emergencies, at a Care Site, within one day, with physicians and Providers permanently available to deliver service around the clock */
    EMERGENCY_ROOM_VISIT = "EMERGENCY_ROOM_VISIT",
    /** Person visiting a Care Site within one day for a routine or preventive health assessment, without an acute presenting complaint */
    HEALTH_EXAMINATION = "HEALTH_EXAMINATION",
    /** Person remaining at home and separated from others for the purpose of containing or managing an infectious or potentially infectious condition */
    HOME_ISOLATION = "HOME_ISOLATION",
    /** Provider visiting Person, without a Care Site, within one day, delivering service */
    HOME_VISIT = "HOME_VISIT",
    /** Person visiting hospital, at a care site, in bed, for duration of more than one day, with physicians and other Providers permanently available to deliver service around the clock */
    INPATIENT_VISIT = "INPATIENT_VISIT",
    /** Person admitted to a specialized hospital unit for more than one day, receiving continuous monitoring and advanced life-support from dedicated Providers */
    INTENSIVE_CARE = "INTENSIVE_CARE",
    /** Person admitted to a hospital and physically separated from other patients to prevent transmission of an infectious or potentially infectious condition */
    ISOLATION_IN_INPATIENT_SETTING = "ISOLATION_IN_INPATIENT_SETTING",
    /** Patient visiting dedicated institution, at a Care Site, within one day, for the purpose of a Measurement. */
    LABORATORY_VISIT = "LABORATORY_VISIT",
    /** Person visiting dedicated institution for reasons of poor health, at a Care Site, long-term or permanently, with no physician but possibly other Providers permanently available to deliver service around the clock */
    NON_HOSPITAL_INSTITUTION_VISIT = "NON_HOSPITAL_INSTITUTION_VISIT",
    /** Person visiting a Provider at a Care Site within one day for evaluation or management of a health concern, without bed or overnight stay */
    OFFICE_VISIT = "OFFICE_VISIT",
    /** Person visiting dedicated ambulatory healthcare institution, at a Care Site, within one day, without bed, with physicians or medical Providers delivering service during Visit */
    OUTPATIENT_VISIT = "OUTPATIENT_VISIT",
    /** Person being monitored or assessed at a Care Site due to potential exposure to or symptoms of a reportable or emerging infectious disease */
    PERSON_UNDER_INVESTIGATION_PUI = "PERSON_UNDER_INVESTIGATION_PUI",
    /** Person visiting pharmacy for dispensing of Drug, at a Care Site, within one day */
    PHARMACY_VISIT = "PHARMACY_VISIT",
    /** Person receiving goods or services from a non-clinical supplier or durable medical equipment provider, outside of a traditional Care Site encounter */
    SUPPLIER_SERVICE_PROVIDER = "SUPPLIER_SERVICE_PROVIDER",
    /** Patient engages with Provider through communication media */
    TELEHEALTH = "TELEHEALTH",
    /** Visit category is not known, not observed, not recorded, or refused. */
    UNKNOWN = "UNKNOWN",
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
    
    CASE_REPORT_FORM = "CASE_REPORT_FORM",
    CLAIM = "CLAIM",
    CLAIM_AUTHORIZATION = "CLAIM_AUTHORIZATION",
    CLAIM_DISCHARGE_RECORD = "CLAIM_DISCHARGE_RECORD",
    CLAIM_ENROLMENT_RECORD = "CLAIM_ENROLMENT_RECORD",
    COST_RECORD = "COST_RECORD",
    DEATH_CERTIFICATE = "DEATH_CERTIFICATE",
    DENTAL_CLAIM = "DENTAL_CLAIM",
    EHR = "EHR",
    EHR_ADMINISTRATION_RECORD = "EHR_ADMINISTRATION_RECORD",
    EHR_ADMISSION_NOTE = "EHR_ADMISSION_NOTE",
    EHR_ANCILLARY_REPORT = "EHR_ANCILLARY_REPORT",
    EHR_BILLING_RECORD = "EHR_BILLING_RECORD",
    EHR_CHIEF_COMPLAINT = "EHR_CHIEF_COMPLAINT",
    EHR_DISCHARGE_RECORD = "EHR_DISCHARGE_RECORD",
    EHR_DISCHARGE_SUMMARY = "EHR_DISCHARGE_SUMMARY",
    EHR_DISPENSING_RECORD = "EHR_DISPENSING_RECORD",
    EHR_EMERGENCY_ROOM_NOTE = "EHR_EMERGENCY_ROOM_NOTE",
    EHR_ENCOUNTER_RECORD = "EHR_ENCOUNTER_RECORD",
    EHR_EPISODE_RECORD = "EHR_EPISODE_RECORD",
    EHR_INPATIENT_NOTE = "EHR_INPATIENT_NOTE",
    EHR_MEDICATION_LIST = "EHR_MEDICATION_LIST",
    EHR_NOTE = "EHR_NOTE",
    EHR_NURSING_REPORT = "EHR_NURSING_REPORT",
    EHR_ORDER = "EHR_ORDER",
    EHR_OUTPATIENT_NOTE = "EHR_OUTPATIENT_NOTE",
    EHR_PATHOLOGY_REPORT = "EHR_PATHOLOGY_REPORT",
    EHR_PHYSICAL_EXAMINATION = "EHR_PHYSICAL_EXAMINATION",
    EHR_PLANNED_DISPENSING_RECORD = "EHR_PLANNED_DISPENSING_RECORD",
    EHR_PRESCRIPTION = "EHR_PRESCRIPTION",
    EHR_PRESCRIPTION_ISSUE_RECORD = "EHR_PRESCRIPTION_ISSUE_RECORD",
    EHR_PROBLEM_LIST = "EHR_PROBLEM_LIST",
    EHR_RADIOLOGY_REPORT = "EHR_RADIOLOGY_REPORT",
    EHR_REFERRAL_RECORD = "EHR_REFERRAL_RECORD",
    EXTERNAL_CDM_INSTANCE = "EXTERNAL_CDM_INSTANCE",
    FACILITY_CLAIM = "FACILITY_CLAIM",
    FACILITY_CLAIM_DETAIL = "FACILITY_CLAIM_DETAIL",
    FACILITY_CLAIM_HEADER = "FACILITY_CLAIM_HEADER",
    GEOGRAPHIC_ISOLATION_RECORD = "GEOGRAPHIC_ISOLATION_RECORD",
    GOVERNMENT_REPORT = "GOVERNMENT_REPORT",
    HEALTH_INFORMATION_EXCHANGE_RECORD = "HEALTH_INFORMATION_EXCHANGE_RECORD",
    HEALTH_RISK_ASSESSMENT = "HEALTH_RISK_ASSESSMENT",
    HEALTHCARE_PROFESSIONAL_FILLED_SURVEY = "HEALTHCARE_PROFESSIONAL_FILLED_SURVEY",
    HOSPITAL_COST = "HOSPITAL_COST",
    INPATIENT_CLAIM = "INPATIENT_CLAIM",
    INPATIENT_CLAIM_DETAIL = "INPATIENT_CLAIM_DETAIL",
    INPATIENT_CLAIM_HEADER = "INPATIENT_CLAIM_HEADER",
    LAB = "LAB",
    MAIL_ORDER_RECORD = "MAIL_ORDER_RECORD",
    NLP = "NLP",
    OBITUARY = "OBITUARY",
    OUTPATIENT_CLAIM = "OUTPATIENT_CLAIM",
    OUTPATIENT_CLAIM_DETAIL = "OUTPATIENT_CLAIM_DETAIL",
    OUTPATIENT_CLAIM_HEADER = "OUTPATIENT_CLAIM_HEADER",
    PATIENT_FILLED_SURVEY = "PATIENT_FILLED_SURVEY",
    PATIENT_OR_PAYER_PAID_RECORD = "PATIENT_OR_PAYER_PAID_RECORD",
    PATIENT_REPORTED_COST = "PATIENT_REPORTED_COST",
    PATIENT_SELF_REPORT = "PATIENT_SELF_REPORT",
    PATIENT_SELF_TESTED = "PATIENT_SELF_TESTED",
    PAYER_SYSTEM_RECORD_PAID_PREMIUM = "PAYER_SYSTEM_RECORD_PAID_PREMIUM",
    PAYER_SYSTEM_RECORD_PRIMARY_PAYER = "PAYER_SYSTEM_RECORD_PRIMARY_PAYER",
    PAYER_SYSTEM_RECORD_SECONDARY_PAYER = "PAYER_SYSTEM_RECORD_SECONDARY_PAYER",
    PHARMACY_CLAIM = "PHARMACY_CLAIM",
    POINT_OF_CARESOLIDUSEXPRESS_LAB = "POINT_OF_CARE/EXPRESS_LAB",
    PRE_QUALIFICATION_TIME_PERIOD = "PRE_QUALIFICATION_TIME_PERIOD",
    PROFESSIONAL_CLAIM = "PROFESSIONAL_CLAIM",
    PROFESSIONAL_CLAIM_DETAIL = "PROFESSIONAL_CLAIM_DETAIL",
    PROFESSIONAL_CLAIM_HEADER = "PROFESSIONAL_CLAIM_HEADER",
    PROVIDER_CHARGE_LIST_PRICE = "PROVIDER_CHARGE_LIST_PRICE",
    PROVIDER_FINANCIAL_SYSTEM = "PROVIDER_FINANCIAL_SYSTEM",
    PROVIDER_INCURRED_COST_RECORD = "PROVIDER_INCURRED_COST_RECORD",
    RANDOMIZATION_RECORD = "RANDOMIZATION_RECORD",
    REFERENCE_LAB = "REFERENCE_LAB",
    REGISTRY = "REGISTRY",
    STANDARD_ALGORITHM = "STANDARD_ALGORITHM",
    STANDARD_ALGORITHM_FROM_CLAIMS = "STANDARD_ALGORITHM_FROM_CLAIMS",
    STANDARD_ALGORITHM_FROM_EHR = "STANDARD_ALGORITHM_FROM_EHR",
    SURVEY = "SURVEY",
    URGENT_LAB = "URGENT_LAB",
    US_SOCIAL_SECURITY_DEATH_MASTER_FILE = "US_SOCIAL_SECURITY_DEATH_MASTER_FILE",
    VISION_CLAIM = "VISION_CLAIM",
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
    RANDOMIZED_DRUG = "RANDOMIZED_DRUG",
    /** Patient Self-Reported Medication */
    PATIENT_SELF_REPORTED_MEDICATION = "PATIENT_SELF_REPORTED_MEDICATION",
    /** NLP derived */
    NLP_DERIVED = "NLP_DERIVED",
    /** Prescription dispensed in pharmacy */
    PRESCRIPTION_DISPENSED_IN_PHARMACY = "PRESCRIPTION_DISPENSED_IN_PHARMACY",
    /** Physician administered drug (identified from EHR order) */
    PHYSICIAN_ADMINISTERED_DRUG_IDENTIFIED_FROM_EHR_ORDER = "PHYSICIAN_ADMINISTERED_DRUG_IDENTIFIED_FROM_EHR_ORDER",
    /** Dispensed in Outpatient office */
    DISPENSED_IN_OUTPATIENT_OFFICE = "DISPENSED_IN_OUTPATIENT_OFFICE",
    /** Prescription dispensed through mail order */
    PRESCRIPTION_DISPENSED_THROUGH_MAIL_ORDER = "PRESCRIPTION_DISPENSED_THROUGH_MAIL_ORDER",
    /** Prescription written */
    PRESCRIPTION_WRITTEN = "PRESCRIPTION_WRITTEN",
    /** Medication list entry */
    MEDICATION_LIST_ENTRY = "MEDICATION_LIST_ENTRY",
    /** Physician administered drug (identified as procedure) */
    PHYSICIAN_ADMINISTERED_DRUG_IDENTIFIED_AS_PROCEDURE = "PHYSICIAN_ADMINISTERED_DRUG_IDENTIFIED_AS_PROCEDURE",
    /** Inpatient administration */
    INPATIENT_ADMINISTRATION = "INPATIENT_ADMINISTRATION",
    /** Drug era - 0 days persistence window */
    DRUG_ERA_0_DAYS_PERSISTENCE_WINDOW = "DRUG_ERA_0_DAYS_PERSISTENCE_WINDOW",
    /** Drug era - 30 days persistence window */
    DRUG_ERA_30_DAYS_PERSISTENCE_WINDOW = "DRUG_ERA_30_DAYS_PERSISTENCE_WINDOW",
    /** Physician administered drug (identified from EHR problem list) */
    PHYSICIAN_ADMINISTERED_DRUG_IDENTIFIED_FROM_EHR_PROBLEM_LIST = "PHYSICIAN_ADMINISTERED_DRUG_IDENTIFIED_FROM_EHR_PROBLEM_LIST",
    /** Physician administered drug (identified from referral record) */
    PHYSICIAN_ADMINISTERED_DRUG_IDENTIFIED_FROM_REFERRAL_RECORD = "PHYSICIAN_ADMINISTERED_DRUG_IDENTIFIED_FROM_REFERRAL_RECORD",
    /** Physician administered drug (identified from EHR observation) */
    PHYSICIAN_ADMINISTERED_DRUG_IDENTIFIED_FROM_EHR_OBSERVATION = "PHYSICIAN_ADMINISTERED_DRUG_IDENTIFIED_FROM_EHR_OBSERVATION",
};
/**
* Routes of drug administration.
*/
export enum DrugRouteEnum {
    
    /** Arteriovenous fistula */
    ARTERIOVENOUS_FISTULA = "ARTERIOVENOUS_FISTULA",
    /** Haemodiafiltration */
    HAEMODIAFILTRATION = "HAEMODIAFILTRATION",
    /** Sublesional */
    SUBLESIONAL = "SUBLESIONAL",
    /** Intraneural */
    INTRANEURAL = "INTRANEURAL",
    /** Intramural */
    INTRAMURAL = "INTRAMURAL",
    /** Intracatheter instillation */
    INTRACATHETER_INSTILLATION = "INTRACATHETER_INSTILLATION",
    /** Sublabial */
    SUBLABIAL = "SUBLABIAL",
    /** Intra-articular */
    INTRA_ARTICULAR = "INTRA_ARTICULAR",
    /** Intradialytic */
    INTRADIALYTIC = "INTRADIALYTIC",
    /** Arteriovenous graft */
    ARTERIOVENOUS_GRAFT = "ARTERIOVENOUS_GRAFT",
    /** Otic */
    OTIC = "OTIC",
    /** Oral */
    ORAL = "ORAL",
    /** Vaginal */
    VAGINAL = "VAGINAL",
    /** Route of administration value */
    ROUTE_OF_ADMINISTRATION_VALUE = "ROUTE_OF_ADMINISTRATION_VALUE",
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
    MUCOUS_FISTULA = "MUCOUS_FISTULA",
    /** Intraprostatic */
    INTRAPROSTATIC = "INTRAPROSTATIC",
    /** Intravenous peripheral */
    INTRAVENOUS_PERIPHERAL = "INTRAVENOUS_PERIPHERAL",
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
    GASTRO_INTESTINAL_STOMA = "GASTRO_INTESTINAL_STOMA",
    /** Intrapulmonary */
    INTRAPULMONARY = "INTRAPULMONARY",
    /** Intrasinal */
    INTRASINAL = "INTRASINAL",
    /** Tumor cavity */
    TUMOR_CAVITY = "TUMOR_CAVITY",
    /** Submucosal */
    SUBMUCOSAL = "SUBMUCOSAL",
    /** Intraductal */
    INTRADUCTAL = "INTRADUCTAL",
    /** Intravenous central */
    INTRAVENOUS_CENTRAL = "INTRAVENOUS_CENTRAL",
    /** Paravertebral */
    PARAVERTEBRAL = "PARAVERTEBRAL",
    /** Urostomy */
    UROSTOMY = "UROSTOMY",
    /** Laryngeal */
    LARYNGEAL = "LARYNGEAL",
    /** Surgical cavity */
    SURGICAL_CAVITY = "SURGICAL_CAVITY",
    /** Intravenous */
    INTRAVENOUS = "INTRAVENOUS",
    /** Intratesticular */
    INTRATESTICULAR = "INTRATESTICULAR",
    /** Endocervical */
    ENDOCERVICAL = "ENDOCERVICAL",
    /** Endotracheopulmonary */
    ENDOTRACHEOPULMONARY = "ENDOTRACHEOPULMONARY",
    /** Extra-amniotic */
    EXTRA_AMNIOTIC = "EXTRA_AMNIOTIC",
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
    BODY_CAVITY = "BODY_CAVITY",
    /** Intraosseous */
    INTRAOSSEOUS = "INTRAOSSEOUS",
    /** Intraventricular route - cardiac */
    INTRAVENTRICULAR_ROUTE_CARDIAC = "INTRAVENTRICULAR_ROUTE_CARDIAC",
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
    INTRA_ARTERIAL = "INTRA_ARTERIAL",
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
    SURGICAL_DRAIN = "SURGICAL_DRAIN",
    /** Ureteral */
    URETERAL = "URETERAL",
    /** Epilesional */
    EPILESIONAL = "EPILESIONAL",
    /** Extracorporeal hemodialysis */
    EXTRACORPOREAL_HEMODIALYSIS = "EXTRACORPOREAL_HEMODIALYSIS",
    /** Suprachoroidal */
    SUPRACHOROIDAL = "SUPRACHOROIDAL",
    /** Extracorporeal */
    EXTRACORPOREAL = "EXTRACORPOREAL",
    /** Intracorporus cavernosum */
    INTRACORPORUS_CAVERNOSUM = "INTRACORPORUS_CAVERNOSUM",
    /** Intraglandular */
    INTRAGLANDULAR = "INTRAGLANDULAR",
    /** Intracholangiopancreatic */
    INTRACHOLANGIOPANCREATIC = "INTRACHOLANGIOPANCREATIC",
    /** Intraportal */
    INTRAPORTAL = "INTRAPORTAL",
    /** Peritumoral */
    PERITUMORAL = "PERITUMORAL",
    /** Posterior juxtascleral */
    POSTERIOR_JUXTASCLERAL = "POSTERIOR_JUXTASCLERAL",
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
    LOWER_RESPIRATORY_TRACT = "LOWER_RESPIRATORY_TRACT",
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
    RESPIRATORY_TRACT = "RESPIRATORY_TRACT",
    /** Intrahepatic */
    INTRAHEPATIC = "INTRAHEPATIC",
    /** Conjunctival */
    CONJUNCTIVAL = "CONJUNCTIVAL",
    /** Intraepicardial */
    INTRAEPICARDIAL = "INTRAEPICARDIAL",
    /** Digestive tract */
    DIGESTIVE_TRACT = "DIGESTIVE_TRACT",
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
    /** EHR Pathology report */
    EHR_PATHOLOGY_REPORT = "EHR_PATHOLOGY_REPORT",
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
    PATIENT_SELF_TESTED = "PATIENT_SELF_TESTED",
    /** Payer system record (paid premium) */
    PAYER_SYSTEM_RECORD_PAID_PREMIUM = "PAYER_SYSTEM_RECORD_PAID_PREMIUM",
    /** Payer system record (primary payer) */
    PAYER_SYSTEM_RECORD_PRIMARY_PAYER = "PAYER_SYSTEM_RECORD_PRIMARY_PAYER",
    /** Payer system record (secondary payer) */
    PAYER_SYSTEM_RECORD_SECONDARY_PAYER = "PAYER_SYSTEM_RECORD_SECONDARY_PAYER",
    /** Pharmacy claim */
    PHARMACY_CLAIM = "PHARMACY_CLAIM",
    /** Point of care/express lab */
    POINT_OF_CARE_EXPRESS_LAB = "POINT_OF_CARE_EXPRESS_LAB",
    /** Pre-qualification time period */
    PRE_QUALIFICATION_TIME_PERIOD = "PRE_QUALIFICATION_TIME_PERIOD",
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
    /** Standard algorithm from claims */
    STANDARD_ALGORITHM_FROM_CLAIMS = "STANDARD_ALGORITHM_FROM_CLAIMS",
    /** Standard algorithm from EHR */
    STANDARD_ALGORITHM_FROM_EHR = "STANDARD_ALGORITHM_FROM_EHR",
    /** Survey */
    SURVEY = "SURVEY",
    /** Urgent lab */
    URGENT_LAB = "URGENT_LAB",
    /** US Social Security Death Master File */
    US_SOCIAL_SECURITY_DEATH_MASTER_FILE = "US_SOCIAL_SECURITY_DEATH_MASTER_FILE",
    /** Vision claim */
    VISION_CLAIM = "VISION_CLAIM",
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
    FFPE_DNA = "FFPE_DNA",
    /** Repli-G (Qiagen) DNA */
    REPLI_G_QIAGEN_DNA = "REPLI_G_QIAGEN_DNA",
    /** GenomePlex Rubicon Amplified DNA */
    GENOME_PLEX_RUBICON_AMPLIFIED_DNA = "GENOME_PLEX_RUBICON_AMPLIFIED_DNA",
    /** Total Ribonucleic Acid */
    TOTAL_RNA = "TOTAL_RNA",
    /** Repli-G X (Qiagen) DNA */
    REPLI_G_X_QIAGEN_DNA = "REPLI_G_X_QIAGEN_DNA",
    /** Ribonucleic Acid */
    RNA = "RNA",
    /** Repli-G Pooled (Qiagen) DNA */
    REPLI_G_POOLED_QIAGEN_DNA = "REPLI_G_POOLED_QIAGEN_DNA",
    /** DNA */
    DNA = "DNA",
    /** Normal Epstein-Barr Virus Immortalization */
    EBV_IMMORTALIZED_NORMAL = "EBV_IMMORTALIZED_NORMAL",
    /** Formalin-Fixed Paraffin-Embedded RNA */
    FFPE_RNA = "FFPE_RNA",
    /** Protein */
    PROTEIN = "PROTEIN",
    /** Nuclei RNA */
    NUCLEI_RNA = "NUCLEI_RNA",
    /** Cell-free DNA */
    CFDNA = "CFDNA",
};

export enum SourceMaterialTypeEnum {
    
    /** A metastatic tumor sample collected in addition to a previously collected metastatic specimen. */
    ADDITIONAL_METASTATIC = "ADDITIONAL_METASTATIC",
    /** A new primary tumor sample collected in addition to a previously collected primary specimen. */
    ADDITIONAL_NEW_PRIMARY = "ADDITIONAL_NEW_PRIMARY",
    /** Tissue derived from a non-cancerous tumor that does not invade nearby tissue or metastasize. */
    BENIGN_NEOPLASMS = "BENIGN_NEOPLASMS",
    /** Cancerous cells isolated from bone marrow as part of a blood-derived cancer sample. */
    BLOOD_DERIVED_CANCER_BONE_MARROW = "BLOOD_DERIVED_CANCER_BONE_MARROW",
    /** Cancerous cells isolated from bone marrow following therapeutic intervention. */
    BLOOD_DERIVED_CANCER_BONE_MARROW_POST_TREATMENT = "BLOOD_DERIVED_CANCER_BONE_MARROW_POST_TREATMENT",
    /** Cancerous cells isolated from peripheral blood as part of a blood-derived cancer sample. */
    BLOOD_DERIVED_CANCER_PERIPHERAL_BLOOD = "BLOOD_DERIVED_CANCER_PERIPHERAL_BLOOD",
    /** Cancerous cells isolated from peripheral blood following therapeutic intervention. */
    BLOOD_DERIVED_CANCER_PERIPHERAL_BLOOD_POST_TREATMENT = "BLOOD_DERIVED_CANCER_PERIPHERAL_BLOOD_POST_TREATMENT",
    /** Tumor-derived material, such as circulating tumor DNA or cells, extracted from a blood sample. */
    BLOOD_DERIVED_LIQUID_BIOPSY = "BLOOD_DERIVED_LIQUID_BIOPSY",
    /** Non-cancerous blood sample used as a normal reference for genomic or molecular analyses. */
    BLOOD_DERIVED_NORMAL = "BLOOD_DERIVED_NORMAL",
    /** Non-cancerous bone marrow sample used as a normal reference for genomic or molecular analyses. */
    BONE_MARROW_NORMAL = "BONE_MARROW_NORMAL",
    /** Normal cells collected from the inner cheek mucosa, typically used as a germline reference. */
    BUCCAL_CELL_NORMAL = "BUCCAL_CELL_NORMAL",
    /** Tumor tissue derived from a xenograft model that was originally established from a cultured cell line. */
    CELL_LINE_DERIVED_XENOGRAFT_TISSUE = "CELL_LINE_DERIVED_XENOGRAFT_TISSUE",
    /** Immortalized cells grown in culture, derived from tumor or normal tissue for experimental use. */
    CELL_LINES = "CELL_LINES",
    /** A reference material used to validate or calibrate laboratory assays and analytical processes. */
    CONTROL_ANALYTE = "CONTROL_ANALYTE",
    /** Deoxyribonucleic acid extracted from a biological sample for genomic analysis. */
    DNA = "DNA",
    /** Normal B-lymphocytes immortalized by Epstein-Barr virus transformation, used as a germline reference. */
    EBV_IMMORTALIZED_NORMAL = "EBV_IMMORTALIZED_NORMAL",
    /** A cancer model, such as an organoid or cell line, that has been propagated or expanded from a next-generation model system. */
    EXPANDED_NEXT_GENERATION_CANCER_MODEL = "EXPANDED_NEXT_GENERATION_CANCER_MODEL",
    /** Formalin-fixed paraffin-embedded tissue from a recurrent tumor, preserved for histological or molecular analysis. */
    FFPE_RECURRENT = "FFPE_RECURRENT",
    /** Thin sections cut from formalin-fixed paraffin-embedded tissue blocks for nucleic acid or protein extraction. */
    FFPE_SCROLLS = "FFPE_SCROLLS",
    /** Normal fibroblast cells isolated from bone marrow, used as a non-cancerous reference. */
    FIBROBLASTS_FROM_BONE_MARROW_NORMAL = "FIBROBLASTS_FROM_BONE_MARROW_NORMAL",
    /** White blood cells of the granulocyte lineage isolated from blood, often used as a normal germline reference. */
    GRANULOCYTES = "GRANULOCYTES",
    /** Primary tumor cells taken directly from a human subject without prior in vitro expansion. */
    HUMAN_TUMOR_ORIGINAL_CELLS = "HUMAN_TUMOR_ORIGINAL_CELLS",
    /** Tissue from a neoplasm that has not yet invaded surrounding tissue, representing an early-stage malignancy. */
    IN_SITU_NEOPLASMS = "IN_SITU_NEOPLASMS",
    /** Non-cancerous lymphoid tissue used as a normal reference for genomic or molecular analyses. */
    LYMPHOID_NORMAL = "LYMPHOID_NORMAL",
    /** Tumor tissue collected from a site distant from the primary tumor, representing metastatic disease. */
    METASTATIC = "METASTATIC",
    /** A cell culture sample containing both adherent and suspension cell populations. */
    MIXED_ADHERENT_SUSPENSION = "MIXED_ADHERENT_SUSPENSION",
    /** Normal mononuclear cells isolated from bone marrow, used as a non-cancerous reference. */
    MONONUCLEAR_CELLS_FROM_BONE_MARROW_NORMAL = "MONONUCLEAR_CELLS_FROM_BONE_MARROW_NORMAL",
    /** Tissue from a neoplasm whose malignant potential cannot be determined based on available information. */
    NEOPLASMS_OF_UNCERTAIN_AND_UNKNOWN_BEHAVIOR = "NEOPLASMS_OF_UNCERTAIN_AND_UNKNOWN_BEHAVIOR",
    /** A modern in vitro or in vivo cancer model, such as a patient-derived organoid or xenograft, that recapitulates tumor biology. */
    NEXT_GENERATION_CANCER_MODEL = "NEXT_GENERATION_CANCER_MODEL",
    /** Histologically normal tissue collected from a site adjacent to a tumor, used as a local reference. */
    NORMAL_ADJACENT_TISSUE = "NORMAL_ADJACENT_TISSUE",
    /** A sample that was not obtained because collection was prohibited by consent, regulation, or protocol. */
    NOT_ALLOWED_TO_COLLECT = "NOT_ALLOWED_TO_COLLECT",
    /** The source material type was not documented or reported for this sample. */
    NOT_REPORTED = "NOT_REPORTED",
    /** Fluid collected from the pleural cavity, which may contain tumor cells in the context of malignancy. */
    PLEURAL_EFFUSION = "PLEURAL_EFFUSION",
    /** Tumor tissue collected after the administration of neoadjuvant (pre-surgical) therapy. */
    POST_NEOADJUVANT_THERAPY = "POST_NEOADJUVANT_THERAPY",
    /** The initial cancerous bone marrow sample collected from a patient with a blood-derived malignancy. */
    PRIMARY_BLOOD_DERIVED_CANCER_BONE_MARROW = "PRIMARY_BLOOD_DERIVED_CANCER_BONE_MARROW",
    /** The initial cancerous peripheral blood sample collected from a patient with a blood-derived malignancy. */
    PRIMARY_BLOOD_DERIVED_CANCER_PERIPHERAL_BLOOD = "PRIMARY_BLOOD_DERIVED_CANCER_PERIPHERAL_BLOOD",
    /** Tissue collected from the original site of tumor origin, prior to any metastatic spread. */
    PRIMARY_TUMOR = "PRIMARY_TUMOR",
    /** Tumor tissue derived from a first-generation xenograft established directly from a patient sample. */
    PRIMARY_XENOGRAFT_TISSUE = "PRIMARY_XENOGRAFT_TISSUE",
    /** Cancerous bone marrow sample collected at the time of disease recurrence in a blood-derived malignancy. */
    RECURRENT_BLOOD_DERIVED_CANCER_BONE_MARROW = "RECURRENT_BLOOD_DERIVED_CANCER_BONE_MARROW",
    /** Cancerous peripheral blood sample collected at the time of disease recurrence in a blood-derived malignancy. */
    RECURRENT_BLOOD_DERIVED_CANCER_PERIPHERAL_BLOOD = "RECURRENT_BLOOD_DERIVED_CANCER_PERIPHERAL_BLOOD",
    /** Tumor tissue collected following disease recurrence after prior treatment or remission. */
    RECURRENT_TUMOR = "RECURRENT_TUMOR",
    /** Ribonucleic acid extracted from a biological sample for transcriptomic or gene expression analysis. */
    RNA = "RNA",
    /** Saliva collected as a non-invasive source of DNA or other biological material, typically for germline analysis. */
    SALIVA = "SALIVA",
    /** Prepared microscopy slides containing tissue or cell specimens for histological or molecular examination. */
    SLIDES = "SLIDES",
    /** Non-cancerous solid tissue used as a normal reference for genomic or molecular analyses. */
    SOLID_TISSUE_NORMAL = "SOLID_TISSUE_NORMAL",
    /** The complete RNA complement extracted from a sample, including messenger, ribosomal, and non-coding RNA species. */
    TOTAL_RNA = "TOTAL_RNA",
    /** Tissue derived from a malignant neoplasm, used broadly when more specific tumor classification is not specified. */
    TUMOR = "TUMOR",
    /** Histologically normal tissue adjacent to a tumor, collected after completion of neoadjuvant therapy. */
    TUMOR_ADJACENT_NORMAL_POST_NEOADJUVANT_THERAPY = "TUMOR_ADJACENT_NORMAL_POST_NEOADJUVANT_THERAPY",
    /** The source material type is not known or could not be determined for this sample. */
    UNKNOWN = "UNKNOWN",
    /** Tumor tissue derived from a xenograft model in which human tumor cells are propagated in an animal host. */
    XENOGRAFT_TISSUE = "XENOGRAFT_TISSUE",
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
    
    /** Surgical removal of one or both testicles, typically performed to treat testicular cancer or as part of prostate cancer management. */
    ORCHIECTOMY = "ORCHIECTOMY",
    /** Surgical removal of one or more metastatic tumor deposits that have spread from a primary cancer site to distant organs or tissues. */
    METASTASECTOMY = "METASTASECTOMY",
    /** Post-mortem surgical examination of a body to determine cause of death and collect tissue specimens for pathological analysis. */
    AUTOPSY = "AUTOPSY",
    /** The method of specimen collection performed is not known. */
    UNKNOWN = "UNKNOWN",
    /** Collection of fluid or semi-solid material by suction through a needle or syringe from a body cavity or tissue mass. */
    ASPIRATE = "ASPIRATE",
    /** Surgical removal of the right portion of the colon, including the cecum, ascending colon, and part of the transverse colon. */
    RIGHT_HEMICOLECTOMY = "RIGHT_HEMICOLECTOMY",
    /** Surgical procedure in which a portion of a suspicious lesion or tumor is cut out for pathological examination, leaving the remainder in place. */
    INCISIONAL_BIOPSY = "INCISIONAL_BIOPSY",
    /** Collection of a blood sample via venipuncture for laboratory analysis or biospecimen banking. */
    BLOOD_DRAW = "BLOOD_DRAW",
    /** Washing of the peritoneal cavity with fluid, which is then collected and analyzed for the presence of malignant cells or other diagnostic information. */
    PERITONEAL_LAVAGE = "PERITONEAL_LAVAGE",
    /** Complete surgical removal of the prostate gland and surrounding tissues through a traditional open abdominal or perineal incision. */
    OPEN_RADICAL_PROSTATECTOMY = "OPEN_RADICAL_PROSTATECTOMY",
    /** Surgical removal of the rectum, anus, and surrounding tissue via both abdominal and perineal incisions, typically resulting in a permanent colostomy. */
    ABDOMINO_PERINEAL_RESECTION_OF_RECTUM = "ABDOMINO_PERINEAL_RESECTION_OF_RECTUM",
    /** Surgical removal of one or both fallopian tubes, often performed to treat or reduce risk of ovarian or tubal cancer. */
    SALPINGECTOMY = "SALPINGECTOMY",
    /** Surgical excision of a rectal tumor through an endoscopic or transanal approach without requiring an external incision. */
    ENDO_RECTAL_TUMOR_RESECTION = "ENDO_RECTAL_TUMOR_RESECTION",
    /** Removal of a small sample of tissue or cells from the body for microscopic examination and pathological diagnosis. */
    BIOPSY = "BIOPSY",
    /** Surgical removal of one or both ovaries along with the corresponding fallopian tube(s), performed to treat or prevent gynecologic cancers. */
    SALPINGO_OOPHORECTOMY = "SALPINGO_OOPHORECTOMY",
    /** Specimen collection was not permitted due to regulatory, ethical, institutional, or patient consent restrictions. */
    NOT_ALLOWED_TO_COLLECT = "NOT_ALLOWED_TO_COLLECT",
    /** A complex surgical procedure (pancreaticoduodenectomy) involving removal of the head of the pancreas, duodenum, gallbladder, and part of the bile duct, typically performed for pancreatic cancer. */
    WHIPPLE_PROCEDURE = "WHIPPLE_PROCEDURE",
    /** Surgical removal of a tumor or organ intact and in its entirety without cutting into the mass. */
    ENUCLEATION = "ENUCLEATION",
    /** Surgical removal of the entire breast along with most or all of the axillary lymph nodes, while preserving the chest wall muscles. */
    MODIFIED_RADICAL_MASTECTOMY = "MODIFIED_RADICAL_MASTECTOMY",
    /** A minimally invasive procedure in which a needle is inserted into the peritoneal cavity to drain ascitic fluid for diagnostic or therapeutic purposes. */
    PARACENTESIS = "PARACENTESIS",
    /** Surgical procedure involving the removal of a portion of the skull to access the brain for tumor resection or biopsy. */
    OPEN_CRANIOTOMY = "OPEN_CRANIOTOMY",
    /** Surgical removal of a wedge-shaped section of an organ, most commonly the lung, to excise a tumor or lesion. */
    WEDGE_RESECTION = "WEDGE_RESECTION",
    /** Minimally invasive surgical removal of an entire kidney and surrounding tissue using a laparoscope, performed to treat renal cell carcinoma. */
    LAPAROSCOPIC_RADICAL_NEPHRECTOMY = "LAPAROSCOPIC_RADICAL_NEPHRECTOMY",
    /** Surgical removal of a tumor-bearing portion of the kidney through an open incision while preserving the remaining healthy kidney tissue. */
    OPEN_PARTIAL_NEPHRECTOMY = "OPEN_PARTIAL_NEPHRECTOMY",
    /** Endoscopic surgical procedure performed through the urethra to remove tumors or tissue from the bladder or prostate without external incision. */
    TRANSURETHRAL_RESECTION = "TRANSURETHRAL_RESECTION",
    /** Surgical removal of the sigmoid colon, the S-shaped final section of the large intestine before the rectum. */
    SIGMOID_COLECTOMY = "SIGMOID_COLECTOMY",
    /** Surgical removal of one or both ovaries, performed to treat ovarian cancer or as a risk-reducing measure in high-risk individuals. */
    OOPHORECTOMY = "OOPHORECTOMY",
    /** Complete surgical removal of the liver, typically performed in preparation for liver transplantation. */
    TOTAL_HEPATECTOMY = "TOTAL_HEPATECTOMY",
    /** The method of specimen collection could not be definitively determined from available information. */
    INDETERMINANT = "INDETERMINANT",
    /** Surgical removal of the majority but not all of a tumor or organ, leaving behind a remnant due to technical or safety constraints. */
    SUBTOTAL_RESECTION = "SUBTOTAL_RESECTION",
    /** Surgical removal of the left portion of the colon, including the descending colon and part of the transverse colon. */
    LEFT_HEMICOLECTOMY = "LEFT_HEMICOLECTOMY",
    /** Minimally invasive collection of tissue or fluid using a hollow needle inserted into a lesion or mass for pathological analysis. */
    NEEDLE_BIOPSY = "NEEDLE_BIOPSY",
    /** A specimen collection method that does not correspond to any of the other specifically defined permissible values. */
    OTHER = "OTHER",
    /** Surgical removal of all or part of the pancreas, performed to treat pancreatic cancer or other pancreatic neoplasms. */
    PANCREATECTOMY = "PANCREATECTOMY",
    /** Minimally invasive biopsy of thoracic structures performed using a thoracoscope inserted through small chest wall incisions. */
    THORACOSCOPIC_BIOPSY = "THORACOSCOPIC_BIOPSY",
    /** Surgical removal of the entire breast tissue including the nipple and areola, without removal of the underlying chest muscles or axillary lymph nodes. */
    TOTAL_MASTECTOMY = "TOTAL_MASTECTOMY",
    /** Surgical removal of an entire suspicious lesion or lymph node for pathological examination, intending complete excision of the abnormal tissue. */
    EXCISIONAL_BIOPSY = "EXCISIONAL_BIOPSY",
    /** Collection of a liquid bone marrow sample via needle aspiration, typically from the iliac crest, for hematologic diagnosis and analysis. */
    BONE_MARROW_ASPIRATE = "BONE_MARROW_ASPIRATE",
    /** Surgical removal of a tumor and a small margin of surrounding tissue, limited to the immediate area of the lesion. */
    LOCAL_RESECTION = "LOCAL_RESECTION",
    /** Surgical removal of a lobe of an organ, most commonly a lobe of the lung, to treat malignancies confined to that lobe. */
    LOBECTOMY = "LOBECTOMY",
    /** Minimally invasive diagnostic procedure using a thin needle and syringe to extract cells or fluid from a suspicious lesion for cytological analysis. */
    FINE_NEEDLE_ASPIRATION = "FINE_NEEDLE_ASPIRATION",
    /** Surgical removal of all or part of the omentum, the fatty tissue covering the abdominal organs, often performed during cytoreductive surgery for ovarian cancer. */
    OMENTECTOMY = "OMENTECTOMY",
    /** Surgical excision of a tumor mass, with the extent of surrounding tissue removal depending on tumor type, location, and surgical intent. */
    TUMOR_RESECTION = "TUMOR_RESECTION",
    /** Surgical removal of the urinary bladder, either in part (partial) or entirety (radical), typically performed to treat bladder cancer. */
    CYSTECTOMY = "CYSTECTOMY",
    /** Surgical removal of all visually and grossly identifiable tumor tissue, as determined by the operating surgeon at the time of surgery. */
    GROSS_TOTAL_RESECTION = "GROSS_TOTAL_RESECTION",
    /** Minimally invasive procedure in which a needle is inserted into the pleural space to aspirate fluid for diagnostic analysis or therapeutic relief. */
    THORACENTESIS = "THORACENTESIS",
    /** Surgical removal of the upper rectum through an abdominal approach with restoration of bowel continuity, used to treat rectal cancer. */
    ANTERIOR_RESECTION_OF_RECTUM = "ANTERIOR_RESECTION_OF_RECTUM",
    /** Surgical procedure involving the transfer of an organ or tissue from a donor to a recipient, with specimen collection occurring at the time of organ procurement or implantation. */
    TRANSPLANT = "TRANSPLANT",
    /** Minimally invasive removal of a tumor-bearing portion of the kidney using laparoscopic techniques, preserving the remaining renal tissue. */
    LAPAROSCOPIC_PARTIAL_NEPHRECTOMY = "LAPAROSCOPIC_PARTIAL_NEPHRECTOMY",
    /** Complete removal of the prostate gland performed using robot-assisted laparoscopic surgery, offering enhanced precision and minimal invasiveness. */
    LAPAROSCOPIC_RADICAL_PROSTATECTOMY_WITH_ROBOTICS = "LAPAROSCOPIC_RADICAL_PROSTATECTOMY_WITH_ROBOTICS",
    /** Surgical removal of an entire lung, typically performed to treat lung cancer confined to one lung that is not amenable to lesser resection. */
    PNEUMONECTOMY = "PNEUMONECTOMY",
    /** Surgical removal of the entire colon and rectum, typically performed for colorectal cancer or inflammatory bowel disease with dysplasia. */
    PAN_PROCTO_COLECTOMY = "PAN_PROCTO_COLECTOMY",
    /** Surgical removal of the uterus by an unspecified or not otherwise specified technique or extent. */
    HYSTERECTOMY_NOS = "HYSTERECTOMY_NOS",
    /** Removal of a cylindrical core of tissue using a large-bore needle to obtain a histologically intact sample for pathological diagnosis. */
    CORE_BIOPSY = "CORE_BIOPSY",
    /** Surgical removal of the entire breast tissue including the nipple-areola complex, without removing axillary lymph nodes or chest wall muscles. */
    SIMPLE_MASTECTOMY = "SIMPLE_MASTECTOMY",
    /** Breast-conserving surgery in which only the tumor and a margin of surrounding normal tissue are removed, leaving the remaining breast intact. */
    LUMPECTOMY = "LUMPECTOMY",
    /** Tissue sampling performed through an endoscope inserted into a body cavity, allowing direct visualization and targeted biopsy of suspicious lesions. */
    ENDOSCOPIC_BIOPSY = "ENDOSCOPIC_BIOPSY",
    /** Surgical removal of the uterus and cervix without removing the parametria, upper vagina, or lymph nodes, used for benign or early-stage disease. */
    SIMPLE_HYSTERECTOMY = "SIMPLE_HYSTERECTOMY",
    /** Surgical removal of one or more lymph nodes for pathological examination or as part of cancer staging and treatment. */
    LYMPHADENECTOMY = "LYMPHADENECTOMY",
    /** Tissue sampling performed using a laparoscope introduced through small abdominal incisions, allowing visualization and biopsy of intraperitoneal structures. */
    LAPAROSCOPIC_BIOPSY = "LAPAROSCOPIC_BIOPSY",
    /** Cytoreductive surgery aimed at removing as much tumor mass as possible when complete resection is not feasible, to reduce tumor burden and improve treatment response. */
    TUMOR_DEBULKING = "TUMOR_DEBULKING",
    /** Therapeutic or diagnostic removal of accumulated fluid from the peritoneal cavity, which may be examined for malignant cells. */
    ASCITES_DRAINAGE = "ASCITES_DRAINAGE",
    /** Endoscopic technique for removing superficial tumors or lesions confined to the mucosal layer of the gastrointestinal tract. */
    ENDOSCOPIC_MUCOSAL_RESECTION = "ENDOSCOPIC_MUCOSAL_RESECTION",
    /** Complete removal of the prostate gland using standard laparoscopic techniques without robotic assistance. */
    LAPAROSCOPIC_RADICAL_PROSTATECTOMY_WITHOUT_ROBOTICS = "LAPAROSCOPIC_RADICAL_PROSTATECTOMY_WITHOUT_ROBOTICS",
    /** Surgical removal of the entire large intestine (colon) while preserving the rectum, typically performed for colorectal cancer or hereditary polyposis syndromes. */
    TOTAL_COLECTOMY = "TOTAL_COLECTOMY",
    /** Non-invasive sampling of circulating tumor cells, cell-free DNA, or other cancer biomarkers from a body fluid, most commonly blood. */
    LIQUID_BIOPSY = "LIQUID_BIOPSY",
    /** Extensive surgical removal of the uterus, cervix, upper vagina, parametria, and regional lymph nodes, performed for gynecologic malignancies such as cervical cancer. */
    RADICAL_HYSTERECTOMY = "RADICAL_HYSTERECTOMY",
    /** Surgical removal of a tumor or diseased tissue, used as a general term when the specific resection type is not further specified. */
    SURGICAL_RESECTION = "SURGICAL_RESECTION",
    /** Complete removal of a kidney, adrenal gland, and surrounding fatty tissue through a traditional open incision, performed to treat renal cell carcinoma. */
    OPEN_RADICAL_NEPHRECTOMY = "OPEN_RADICAL_NEPHRECTOMY",
    /** Surgical removal of the transverse colon, the middle horizontal portion of the large intestine connecting the ascending and descending colon. */
    TRANSVERSE_COLECTOMY = "TRANSVERSE_COLECTOMY",
    /** Laparoscopic radical nephrectomy performed with the aid of a hand port that allows direct manual assistance during the minimally invasive procedure. */
    HAND_ASSISTED_LAPAROSCOPIC_RADICAL_NEPHRECTOMY = "HAND_ASSISTED_LAPAROSCOPIC_RADICAL_NEPHRECTOMY",
    /** Removal of a small cylindrical core of skin or mucosal tissue using a circular cutting instrument for dermatological or mucosal pathological diagnosis. */
    PUNCH_BIOPSY = "PUNCH_BIOPSY",
    /** Surgical removal of a portion of the liver, performed to resect primary liver tumors or metastatic deposits while preserving adequate hepatic function. */
    PARTIAL_HEPATECTOMY = "PARTIAL_HEPATECTOMY",
    /** Surgical removal of the uterine body while leaving the cervix in place, also known as a subtotal hysterectomy. */
    SUPRACERVICAL_HYSTERECTOMY = "SUPRACERVICAL_HYSTERECTOMY",
    /** A surgical resection procedure that does not correspond to any of the other specifically defined resection types. */
    OTHER_SURGICAL_RESECTION = "OTHER_SURGICAL_RESECTION",
    /** The method of specimen collection was not documented or reported in the available records. */
    NOT_REPORTED = "NOT_REPORTED",
    /** Complete surgical removal of the uterus and cervix, sometimes also including the ovaries and fallopian tubes, to treat uterine or cervical malignancies. */
    FULL_HYSTERECTOMY = "FULL_HYSTERECTOMY",
    /** Surgical removal of the palatine tonsils, performed for tonsillar tumors or as part of treatment for oropharyngeal cancer. */
    TONSILLECTOMY = "TONSILLECTOMY",
    /** Partial removal of the larynx above the vocal cords (glottis), used to treat supraglottic laryngeal cancer while preserving voice function. */
    SUPRAGLOTTIC_LARYNGECTOMY = "SUPRAGLOTTIC_LARYNGECTOMY",
    /** Surgical removal of the superficial lobe of the parotid gland, typically performed to excise parotid tumors located superficial to the facial nerve. */
    SUPERFICIAL_PAROTIDECTOMY = "SUPERFICIAL_PAROTIDECTOMY",
    /** Surgical removal of the larynx and part or all of the pharynx, performed for advanced cancers involving both structures. */
    LARYNGOPHARYNGECTOMY = "LARYNGOPHARYNGECTOMY",
    /** Surgical removal of all or part of the maxilla (upper jaw), performed to treat malignant tumors of the hard palate, maxillary sinus, or upper jaw. */
    MAXILLECTOMY = "MAXILLECTOMY",
    /** Nephron-sparing surgery in which only the tumor-bearing portion of the kidney is removed, preserving the remaining healthy renal parenchyma. */
    PARTIAL_NEPHRECTOMY = "PARTIAL_NEPHRECTOMY",
    /** Surgical removal of all or part of the mandible (lower jaw), performed to treat malignant tumors involving the mandible or adjacent oral cavity. */
    MANDIBULECTOMY = "MANDIBULECTOMY",
    /** Surgical excision of tumor-bearing tissue from the buccal mucosa (inner lining of the cheek), performed to treat oral cavity cancers. */
    BUCCAL_MUCOSAL_RESECTION = "BUCCAL_MUCOSAL_RESECTION",
    /** Partial laryngectomy involving vertical removal of one side of the larynx, used to treat glottic cancers while preserving voice and swallowing function. */
    VERTICAL_HEMILARYNGECTOMY = "VERTICAL_HEMILARYNGECTOMY",
    /** Complete surgical removal of an entire kidney, performed to treat renal malignancies or other kidney diseases. */
    TOTAL_NEPHRECTOMY = "TOTAL_NEPHRECTOMY",
    /** Complete surgical removal of the larynx, resulting in permanent loss of natural voice, performed for advanced laryngeal cancer. */
    TOTAL_LARYNGECTOMY = "TOTAL_LARYNGECTOMY",
    /** Minimally invasive surgical technique using a laser delivered through the mouth to precisely excise laryngeal or pharyngeal tumors without external incision. */
    TRANSORAL_LASER_EXCISION = "TRANSORAL_LASER_EXCISION",
    /** Surgical removal of the parotid gland by an unspecified or not otherwise specified extent or technique. */
    PAROTIDECTOMY_NOS = "PAROTIDECTOMY_NOS",
    /** Extensive surgical removal of the entire maxilla along with surrounding structures, performed for aggressive or extensive malignant tumors of the upper jaw. */
    RADICAL_MAXILLECTOMY = "RADICAL_MAXILLECTOMY",
    /** Surgical removal of a laryngeal lesion performed entirely through the mouth using endoscopic instruments, without external neck incision. */
    ENDOLARYNGEAL_EXCISION = "ENDOLARYNGEAL_EXCISION",
    /** Surgical removal of all or part of the palate, performed to treat malignant tumors involving the hard or soft palate. */
    PALATECTOMY = "PALATECTOMY",
    /** Surgical removal of all or part of the tongue, performed to treat oral tongue or base of tongue malignancies. */
    GLOSSECTOMY = "GLOSSECTOMY",
    /** Surgical removal of a portion of the larynx while preserving remaining laryngeal function, used for early to intermediate-stage laryngeal cancers. */
    PARTIAL_LARYNGECTOMY = "PARTIAL_LARYNGECTOMY",
    /** Systematic surgical removal of a group of regional lymph nodes for pathological staging or therapeutic management of cancer spread. */
    LYMPH_NODE_DISSECTION = "LYMPH_NODE_DISSECTION",
    /** Complete surgical removal of the prostate gland, seminal vesicles, and surrounding tissue, performed to treat localized prostate cancer. */
    RADICAL_PROSTATECTOMY = "RADICAL_PROSTATECTOMY",
    /** Surgical removal of the deep lobe of the parotid gland, performed for tumors located deep to the facial nerve. */
    DEEP_PAROTIDECTOMY = "DEEP_PAROTIDECTOMY",
    /** Partial surgical removal of the prostate gland, in which only a portion of the gland is excised rather than the complete organ. */
    SUBTOTAL_PROSTATECTOMY = "SUBTOTAL_PROSTATECTOMY",
    /** Complete surgical removal of the kidney along with the adrenal gland, surrounding fatty tissue, and regional lymph nodes, performed for renal cell carcinoma. */
    RADICAL_NEPHRECTOMY = "RADICAL_NEPHRECTOMY",
    /** Partial laryngectomy involving removal of the supracricoid structures while preserving the cricoid cartilage, used for select intermediate-stage laryngeal cancers. */
    SUPRACRICOID_LARYNGECTOMY = "SUPRACRICOID_LARYNGECTOMY",
    /** Surgical removal of a portion of the maxilla, performed for localized malignant or benign tumors that do not require total maxillary resection. */
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
    
    /** The ability to access and use digital technologies, including internet connectivity and devices. */
    DIGITAL_ACCESS = "DIGITAL_ACCESS",
    /** The capacity to find, evaluate, and communicate information using digital technology. */
    DIGITAL_LITERACY = "DIGITAL_LITERACY",
    /** The highest level of formal education an individual has completed. */
    EDUCATIONAL_ATTAINMENT = "EDUCATIONAL_ATTAINMENT",
    /** Physical, emotional, financial, or other mistreatment or neglect of older adults. */
    ELDER_ABUSE = "ELDER_ABUSE",
    /** An individual's current relationship to the workforce, including employment, unemployment, or underemployment. */
    EMPLOYMENT_STATUS = "EMPLOYMENT_STATUS",
    /** Inadequate financial resources to meet basic needs and maintain economic stability. */
    FINANCIAL_INSECURITY = "FINANCIAL_INSECURITY",
    /** Limited or uncertain access to adequate, nutritious food due to financial or other constraints. */
    FOOD_INSECURITY = "FOOD_INSECURITY",
    /** Whether an individual has health insurance and the type or adequacy of that coverage. */
    HEALTH_INSURANCE_COVERAGE_STATUS = "HEALTH_INSURANCE_COVERAGE_STATUS",
    /** The degree to which individuals can obtain, process, and understand basic health information to make appropriate health decisions. */
    HEALTH_LITERACY = "HEALTH_LITERACY",
    /** The condition of lacking a fixed, regular, and adequate nighttime residence. */
    HOMELESSNESS = "HOMELESSNESS",
    /** Difficulty maintaining stable housing, including risk of eviction, frequent moves, or inability to pay rent or mortgage. */
    HOUSING_INSTABILITY = "HOUSING_INSTABILITY",
    /** Living conditions that are unsafe, overcrowded, or otherwise fail to meet basic habitability standards. */
    INADEQUATE_HOUSING = "INADEQUATE_HOUSING",
    /** Physical, sexual, psychological, or economic abuse perpetrated by a current or former intimate partner. */
    INTIMATE_PARTNER_VIOLENCE_IPV = "INTIMATE_PARTNER_VIOLENCE_IPV",
    /** Inability to meet basic material needs such as food, housing, clothing, or medical care. */
    MATERIAL_HARDSHIP = "MATERIAL_HARDSHIP",
    /** The financial strain caused by out-of-pocket medical expenses relative to an individual's or household's income. */
    MEDICAL_COST_BURDEN = "MEDICAL_COST_BURDEN",
    /** The degree to which an individual has relationships and social support networks that promote well-being. */
    SOCIAL_CONNECTION = "SOCIAL_CONNECTION",
    /** Psychological or physical tension arising from adverse or demanding circumstances that affects health and well-being. */
    STRESS = "STRESS",
    /** Lack of reliable, safe, or affordable transportation needed to meet daily needs and access services. */
    TRANSPORTATION_INSECURITY = "TRANSPORTATION_INSECURITY",
    /** Inability to reliably afford or access essential utilities such as electricity, heat, or water. */
    UTILITY_INSECURITY = "UTILITY_INSECURITY",
    /** Whether an individual has served in the military, which may affect eligibility for benefits and expose them to unique health risks. */
    VETERAN_STATUS = "VETERAN_STATUS",
};
/**
* The clinical severity level assigned to a condition or diagnosis.
*/
export enum ConditionSeverityEnum {
    
    /** A condition that causes minimal symptoms or functional impairment and typically does not require intensive intervention. */
    MILD = "MILD",
    /** A condition that causes noticeable symptoms or functional impairment and may require active treatment or monitoring. */
    MODERATE = "MODERATE",
    /** A condition that causes significant symptoms or functional impairment, often requiring urgent or intensive intervention. */
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
    FORMER_SMOKER = "FORMER_SMOKER",
    NEVER_SMOKED = "NEVER_SMOKED",
    UNKNOWN_IF_EVER_SMOKED = "UNKNOWN_IF_EVER_SMOKED",
};
/**
* A constrained set of enumerative values containing the ICD-10 diagnoses.
*/
export enum CauseOfDeathEnum {
    
};
/**
* Values describing types of research projects.
*/
export enum ResearchProjectTypeEnum {
    
    /** Consortium */
    CONSORTIUM = "CONSORTIUM",
    /** Study */
    STUDY = "STUDY",
};
/**
* Values describing the body position of a patient during a measurement or observation.
*/
export enum BodyPositionEnum {
    
    /** The patient is in a sitting position during the measurement or observation. */
    SITTING_POSITION = "SITTING_POSITION",
    /** The patient is in a standing position during the measurement or observation. */
    ORTHOSTATIC_BODY_POSITION = "ORTHOSTATIC_BODY_POSITION",
    /** The patient is lying on their back during the measurement or observation. */
    SUPINE_BODY_POSITION = "SUPINE_BODY_POSITION",
    /** The patient is lying on their stomach during the measurement or observation. */
    PRONE_BODY_POSITION = "PRONE_BODY_POSITION",
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
    /** The biologic character or quality that distinguishes male and female from one another as expressed by analysis of the person's gonadal, morphologic (internal and external), chromosomal, and hormonal characteristics. Individuals where these characteristics do not all clearly align with either male or female are often considered intersex. */
    sex?: string,
    /** A sociopolitically constructed system for classifying human beings according to claims of shared heritage often based on perceived cultural similarities (e.g., language, religion, beliefs); the system varies globally. The provided values are based on the categories defined by the U.S. Office of Management and Business and used by the U.S. Census Bureau and include only the options “Hispanic or Latino” and “Not Hispanic or Latino.” */
    ethnicity?: string,
    /** A sociopolitically constructed system for classifying human beings according to subjective beliefs about shared ancestry based on perceived innate biological similarities; the system varies globally. The provided values are based on the categories defined by the U.S. Office of Management and Business and used by the U.S. Census Bureau. */
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
    /** The 'type' of ResearchStudy represented by this object (e.g. 'Consortium', 'Study') */
    research_project_type?: string,
    /** The name of the overarching research program under which this ResearchStudy is conducted (e.g. 'Heartshare', 'TOPMed', etc.) */
    program?: string,
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
    /** A reference to the Participant that is associated with this record. */
    associated_participant?: ParticipantId,
    /** A free text field or label used to refer to the visit. */
    name?: string,
    /** A value representing the kind (or category) of visit, like inpatient or outpatient. */
    visit_category?: string,
    /** The age of the Participant (in days) at the start of the Visit. */
    age_at_visit_start?: number,
    /** The age of the Participant (in days) at the end of the Visit. */
    age_at_visit_end?: number,
    /** A value representing the provenance of the visit record, or where the record comes from. */
    visit_provenance?: string,
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
export interface TimePeriod extends Entity {
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
    items: QuestionnaireResponseItemId[],
}


/**
 * QuestionnaireResponseItem provides a complete or partial list of answers to a set of questions filled when responding to a questionnaire. (FHIR)
 */
export interface QuestionnaireResponseItem extends Entity {
    /** A reference to the QuestionnaireItem that this QuestionnaireResponseItem responds to. */
    has_questionnaire_item?: QuestionnaireItemId,
    /** Name for group or question text */
    text?: string,
    response_value: QuestionnaireResponseValueId,
}


/**
 * Single-valued answer to the question. (FHIR)
 */
export interface QuestionnaireResponseValue extends Entity {
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
    /** A reference to the Participant that is associated with this record. */
    associated_participant?: ParticipantId,
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
    /** Evidence supporting the assertion of the condition (e.g., an ImagingStudy, Procedure, Observation) */
    associated_evidence?: EntityId[],
}


/**
 * Procedure contains records of activities or processes ordered by, or carried out by, a healthcare provider on the patient to have a diagnostic or therapeutic purpose. Procedures are present in various data sources in different forms with varying levels of standardization. [Derived from OMOP]
 */
export interface Procedure extends Entity {
    /** A 'business' identifier or accession number for the entity, typically as provided by an external system or authority, that are globally unique and persist across implementing systems. Also, since these identifiers are created outside the information system through a specific business process, the Identifier type has additional attributes to capture this additional metadata so the actual identifier values are qualified by the context that created those values. This additional context allows "identifier" instances to be transmitted as business data across systems while still being able to trace them back to the system of origin. */
    identity?: string[],
    /** A reference to the Visit that is associated with this record. */
    associated_visit?: VisitId,
    /** A reference to the Participant that is associated with this record. */
    associated_participant?: ParticipantId,
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
}


/**
 * An ImagingStudy is a set of images produced in a single study (one or more series of references images).  It may include images from different modalities (e.g. CT, MR, Ultrasound) and from different instances in time.  The ImagingStudy may be linked to other information such as the clinical context in which the images were acquired.
 */
export interface ImagingStudy extends Entity {
    /** A reference to the Visit that is associated with this record. */
    associated_visit?: VisitId,
    /** A reference to the Participant that is associated with this record. */
    associated_participant?: ParticipantId,
    /** The Participant's age (expressed in days) when the ImagingStudy was performed. */
    age_at_imaging_study?: number,
    /** Number of Series in the Study. */
    number_of_series?: number,
    /** Number of SOP Instances in Study. */
    number_of_instances?: number,
    /** (0008, 1030) Study Description. The Digital Imaging and Communications in Medicine (DICOM) standard is the international standard to transmit, store, retrieve, print, process, and display medical imaging information. */
    study_description?: string,
    /** The modalities of the imaging study; derived from (0008, 0060) Modality. The Digital Imaging and Communications in Medicine (DICOM) standard is the international standard to transmit, store, retrieve, print, process, and display medical imaging information. */
    study_modality?: string,
    /** (0020, 000d) Study Instance UID. The Digital Imaging and Communications in Medicine (DICOM) standard is the international standard to transmit, store, retrieve, print, process, and display medical imaging information. */
    study_uid?: string,
    /** (0018, 0015) Body Part Examined. The Digital Imaging and Communications in Medicine (DICOM) standard is the international standard to transmit, store, retrieve, print, process, and display medical imaging information. */
    body_part_examined?: BodySiteId,
}


/**
 * Exposures are records of a Person suggesting exposure to a medication, device, environmental material.
 */
export interface Exposure extends Entity {
    /** A 'business' identifier or accession number for the entity, typically as provided by an external system or authority, that are globally unique and persist across implementing systems. Also, since these identifiers are created outside the information system through a specific business process, the Identifier type has additional attributes to capture this additional metadata so the actual identifier values are qualified by the context that created those values. This additional context allows "identifier" instances to be transmitted as business data across systems while still being able to trace them back to the system of origin. */
    identity?: string[],
    /** A reference to the Visit that is associated with this record. */
    associated_visit?: VisitId,
    /** A reference to the Participant that is associated with this record. */
    associated_participant?: ParticipantId,
    /** The Participant's age (expressed in days) at the exposure start date. */
    age_at_exposure_start?: number,
    /** The Participant's age (expressed in days) at the exposure end date, if available. Otherwise equal to age_at_exposure_start. */
    age_at_exposure_end?: number,
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
    /** A reference to the Participant that is associated with this record. */
    associated_participant?: ParticipantId,
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
    /** An account of the resource. Description may include but is not limited to an abstract, a table of contents, a graphical representation, or a free-text account of the resource. */
    description?: string,
    /** A File from which this File is derived.  A derivation is a transformation of an entity into another, an update of an entity resulting in a new one, or the construction of a new entity based on a pre-existing entity. */
    derived_from?: FileId,
}


/**
 * A file that contains diagnostic imaging data, such as a DICOM file, or a JPEG or PNG image.
 */
export interface ImagingFile extends File {
    /** The modality of the imaging data contained in the file (e.g. CT, MRI, etc.) */
    imaging_modality?: string,
    /** The anatomical site from which the imaging data was acquired (e.g. Chest, Abdomen, etc.) */
    anatomical_site?: BodySiteId,
    /** The Series Instance Number for the imaging data contained in the file, if applicable. */
    series_number?: number,
    /** (0020, 000e) Series Instance UID. The Digital Imaging and Communications in Medicine (DICOM) standard is the international standard to transmit, store, retrieve, print, process, and display medical imaging information. */
    series_uid?: string,
    /** (0008, 103e) Series Description. The Digital Imaging and Communications in Medicine (DICOM) standard is the international standard to transmit, store, retrieve, print, process, and display medical imaging information. */
    series_description?: string,
    /** The ImagingStudy with which this ImagingFile is associated. */
    related_imaging_study?: ImagingStudyId,
    /** (0008, 0070) Manufacturer. The Digital Imaging and Communications in Medicine (DICOM) standard is the international standard to transmit, store, retrieve, print, process, and display medical imaging information. */
    manufacturer?: string,
    /** (0008, 1090) Manufacturer's Model Name. The Digital Imaging and Communications in Medicine (DICOM) standard is the international standard to transmit, store, retrieve, print, process, and display medical imaging information. */
    manufacturer_model?: string,
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
    /** A reference to the Participant that is associated with this record. */
    associated_participant?: ParticipantId,
    /** The general category of observation set described */
    category?: string,
    /** The entity or entities directly observed/measured in generating an observation result. */
    focus?: Entity[],
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
    /** A reference to the Participant that is associated with this record. */
    associated_participant?: ParticipantId,
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
    /** A reference to the assay that was used in generating this observation. */
    associated_assay?: AssayId,
    /** The body site that is the focus of this observation, if applicable. */
    body_site?: BodySiteId,
    /** The position of the body that is the focus of this observation, if applicable. */
    body_position?: string,
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


/**
 * A class for representing metadata about an assay performed on a specimen, including the method and instrument used.
 */
export interface Assay extends Entity {
    /** The type of assay performed (e.g. "immunohistochemistry", "RNA-seq", "mass spectrometry") */
    method: string,
    /** The instrument(s) used to perform the assay. */
    instrument?: string,
    /** The reagent(s) used to perform the assay. */
    reagent?: SubstanceId[],
    /** The lower limit of detection for the assay, if applicable. */
    lower_limit_of_detection?: QuantityId,
    /** The upper limit of detection for the assay, if applicable. */
    upper_limit_of_detection?: QuantityId,
}



