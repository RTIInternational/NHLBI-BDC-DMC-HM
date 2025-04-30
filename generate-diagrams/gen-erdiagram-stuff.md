# 2025-04-29
from root:

# how to make a class diagram

## generate er diagram for selected classes
    gen-erdiagram src/bdchm/schema/bdchm.yaml -c Person -c Demography -c Participant -c ResearchStudy -c Visit -c Condition -c DrugExposure  -c SdohObservation -c SdohObservationSet -c MeasurementObservation -c MeasurementObservationSet --max-hops 0 -f mermaid >! generate-diagrams/er-diagram-w-attrs.mermaid

## convert er-diagram-w-attrs.mermaid into a class diagram 
used claude.ai to do it. put the results into class-diagram-w-attrs.mermaid

## copy mermad class diagram to md
    echo '```mermaid\n' >! generate-diagrams/class-diagram-w-attrs.md
    cat generate-diagrams/class-diagram-w-attrs.mermaid >> generate-diagrams/class-diagram-w-attrs.md
    echo '```' >> generate-diagrams/class-diagram-w-attrs.md

## put it in docs directory as .md
    echo '# BDCHM Model Overview\n\n' >! src/docs/class-diagram-w-attrs.md
    echo 'This is a high-level class diagram of the core entities present in the BioData Catalyst Harmonized Model (BDCHM).\n' >> src/docs/class-diagram-w-attrs.md
    cat generate-diagrams/class-diagram-w-attrs.md >> src/docs/class-diagram-w-attrs.md


## Harry wanted to see a png, so:

## convert class diagram to svg. (got mmdc with `pip install mmdc`)
    mmdc -i generate-diagrams/class-diagram-w-attrs.mermaid -o generate-diagrams/class-diagram-w-attrs.svg

## convert svg into png (using macos built-in qlmanage)
    qlmanage -t -s 4000 -o generate-diagrams generate-diagrams/class-diagram-w-attrs.svg





# old stuff

    gen-erdiagram src/bdchm/schema/bdchm.yaml -c Person -c Demography -c Participant -c ResearchStudy -c Visit -c Condition -c DrugExposure  -c SdohObservation -c SdohObservationSet -c MeasurementObservation -c MeasurementObservationSet --max-hops 0 -f mermaid --exclude-attributes >! src/docs/smaller.md

    mmdc -i src/docs/smaller.md



    from NHLBI-BDC-DMC-HM/src/bdchm/schema:
    ➜ gen-erdiagram bdchm.yaml -c Person -c Demography -c Participant -c ResearchStudy -c Visit -c Condition -c DrugExposure  -c SdohObservation -c SdohObservationSet -c MeasurementObservation -c MeasurementObservationSet --max-hops 0 -f mermaid >! ../../docs/smaller.md




    gen-erdiagram bdchm.yaml -c Person -c Demography -c Participant -c ResearchStudy -c Consent -c Visit -c Organization -c ResearchStudyCollection -c Condition -c Procedure -c Exposure -c DrugExposure -c DeviceExposure -c Substance -c ObservationSet -c Observation --exclude-attributes >! ../../docs/smaller.md






    gen-plantuml bdchm.yaml -c Entity -c Person -c Demography -c Participant -c ResearchStudy -c Consent -c Visit -c Organization -c TimePoint -c TimePeriod -c ResearchStudyCollection -c Questionnaire -c QuestionnaireItem -c QuestionnaireResponse -c QuestionnaireResponseItem -c QuestionnaireResponseValue -c QuestionnaireResponseValueDecimal -c QuestionnaireResponseValueBoolean -c QuestionnaireResponseValueInteger -c QuestionnaireResponseValueTimePoint -c QuestionnaireResponseValueString -c Condition -c Procedure -c Exposure -c DrugExposure -c DeviceExposure -c DimensionalObservation -c DimensionalObservationSet -c File -c Document -c Specimen -c SpecimenContainer -c SpecimenCreationActivity -c SpecimenQualityObservation -c SpecimenQuantityObservation -c SpecimenProcessingActivity -c SpecimenStorageActivity -c SpecimenTransportActivity -c BiologicProduct -c Substance -c Quantity -c BodySite -c ObservationSet -c Observation -c MeasurementObservationSet -c MeasurementObservation -c SdohObservationSet -c SdohObservation --directory src/docs

    gen-plantuml bdchm.yaml -c Person -c Demography -c Participant -c ResearchStudy -c Consent -c Visit -c Organization -c ResearchStudyCollection -c Condition -c Procedure -c Exposure -c DrugExposure -c DeviceExposure -c DimensionalObservation -c DimensionalObservationSet -c File -c Document -c BiologicProduct -c Substance -c Quantity -c BodySite -c ObservationSet -c Observation -c MeasurementObservationSet -c MeasurementObservation -c SdohObservationSet -c SdohObservation --directory ../../docs
