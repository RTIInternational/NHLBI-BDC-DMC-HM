import json
from pathlib import Path
from collections import defaultdict, Counter
import re
import pandas as pd
from .picsure_data_dict import picsure_dd_parse
from merged_TOPMed_harmonized_data_file.merge_files import extract_phv

prioritized_studies = ['ARIC','CARDIA','CHS','COPDGene','FHS','HCHS_SOL','JHS','MESA','WHI']

def format_code(code):
    """Format R code with proper markdown code block syntax"""
    lines = [line.rstrip() for line in code.splitlines()]
    while lines and not lines[0].strip():
        lines.pop(0)
    while lines and not lines[-1].strip():
        lines.pop()
    return '```r\n' + '\n'.join(lines) + '\n```'


def create_anchor(text):
    """Create GitHub-style markdown anchors"""
    return text.lower().replace(' ', '-').replace('**', '').replace('(', '').replace(')', '').replace(',', '')


def generate_markdown(root_dir, output_dir, output_index, picsure_dd):
    """Generate markdown documentation from JSON files"""
    root_path = Path(root_dir).resolve()
    sections = defaultdict(list)
    json_files = 0
    harmonization_units = 0
    component_var_lists = {}
    study_vars = []
    component_study_vars = []
    study_vars_with_dbGap_metadata = []
    study_vars_with_picsure_metadata = []
    harm_vars = []
    # for printing out hyperlinks for google sheet: https://docs.google.com/spreadsheets/d/1G-AIk2m4UCDfh1OvFID3bewQXqxExeKNNmVxaswLT8E/edit?gid=979420329#gid=979420329&range=D:D
    var_links = {}

    # dbGap metadata is available for some phv vals
    df = pd.read_csv('./merged_TOPMed_harmonized_data_file/merged_variables.csv') # Read the CSV file
    df = df.drop('TOPMed Harmonized Variable', axis=1)
    df = df.drop_duplicates(keep='first')
    dbgap_metadata = df.set_index('TOPMed Component ID').to_dict('index')

    study_names = df.iloc[:, [1, 9]].drop_duplicates().dropna().set_index('TOPMed Study').to_dict()['dbGap Study Name']

    # Store structure for TOC
    structure = defaultdict(lambda: defaultdict(list))

    for json_file in sorted(root_path.glob('**/*.json')):
        json_files += 1
        rel_path = json_file.relative_to(root_path)
        directory = rel_path.parent.name

        with open(json_file, 'r') as f:
            data = json.load(f)

        var_links[data['name']] = f"""HYPERLINK("https://github.com/RTIInternational/NHLBI-BDC-DMC-HM/blob/main/resources/human-readable-harmonized-variable-documentation/generated-doc-pages/{directory}.md#{data['name']}", "{data['name']}")"""

        # Store variable name for file-level TOC
        structure[directory][data['name']] = []

        # Store harmonization unit names if present
        if data.get('harmonization_units'):
            for unit in data['harmonization_units']:
                if unit['name'] in prioritized_studies:
                    structure[directory][data['name']].append(unit['name'])
        else:
            continue

        section = []

        # Add anchor for variable
        var_anchor = create_anchor(data['name'])
        section.append(f'<a id="{var_anchor}"></a>')

        # Variable name, concept and description
        var_heading = f"## {directory}: **{data['name']}** ({data.get('phenotype_concept', 'N/A')})"
        section.append(var_heading)
        section.append(f"  {data.get('description', 'N/A')}")

        # Add harmonization units TOC if present
        if data.get('harmonization_units'):
            section.append("  * **Study (harmonization_units)**:")
            for unit in data['harmonization_units']:
                if unit['name'] in prioritized_studies:
                    unit_anchor = create_anchor(f"{data['name']}-{unit['name']}")
                    section.append(f"    * [{unit['name']}](#{unit_anchor})")

        # Basic metadata
        metadata = [
            ("Data Type", data.get('data_type', 'N/A')),
            ("Measurement Units", data.get('measurement_units', 'N/A')),
            ("Version", data.get('version', 'N/A')),
            ("Has Age Variable", "Yes" if data.get('has_age_variable') else "No"),
            ("Date Harmonized", data.get('date_harmonized', 'N/A')),
        ]

        section.append("  * **Metadata**:")
        section.append("    " + ", ".join(f"**`{key}`**: {value}" for key, value in metadata))

        # Controlled vocabulary if present
        if data.get('controlled_vocabulary'):
            section.append("  * **Controlled Vocabulary**:")
            vocab_items = []
            for vocab in data['controlled_vocabulary']:
                vocab_items.append(
                    f"`Source:` {vocab.get('source', 'N/A')}, `Version:` {vocab.get('version', 'N/A')}, `ID:` {vocab.get('id', 'N/A')}")
            section.append("    " + "; ".join(vocab_items))

        # DCC harmonization comments if present
        if data.get('dcc_harmonization_comments'):
            section.append("  * **DCC Harmonization Comments**:\n")
            comments = data['dcc_harmonization_comments'].replace('\n', '\n    ')
            section.append('    ' + comments)

        # Harmonization units
        if data.get('harmonization_units'):
            for unit in data['harmonization_units']:
                if unit['name'] not in prioritized_studies:
                    continue
                harmonization_units += 1
                dbgap_study_name = study_names.get(unit['name'], '')
                unit_heading = f"  * ### {directory}/{data['name']} -- **{unit['name']} {dbgap_study_name}**:"
                unit_anchor = create_anchor(f"{data['name']}-{unit['name']}")
                section.append(f'<a id="{unit_anchor}"></a>')
                section.append(unit_heading)

                zeros = []
                if unit.get('component_study_variables'):
                    file_study_vars = unit['component_study_variables']
                    study_vars.extend(file_study_vars)
                    # vars_text = ", ".join(f"`{var}`" for var in file_study_vars)
                    # section.append(f"    * {len(unit['component_study_variables'])} component_study_variables: {vars_text}")
                    section.append(f"    * {len(unit['component_study_variables'])} component_study_variables")
                    for var in file_study_vars:
                        component_study_vars.append(var)
                        section.append(f"      * _{var}_")
                        md = dbgap_metadata.get(var)
                        if md:
                            section.append(f"        * dbGap name: **{md['dbGap Variable Name']}**")
                            section.append(f"        * dbGap desc: **{md['dbGap Variable Description']}**")
                            section.append(f"        * dbGap table: **{md['dbGap pht Name']}**")
                            study_vars_with_dbGap_metadata.append(var)
                        else:
                            section.append(f"        * No dbGap metadata available")

                        phv = extract_phv(var)
                        try:
                            picsure_rec = picsure_dd.loc[phv]
                            study_vars_with_picsure_metadata.append(var)
                        except KeyError:
                            section.append(f"         * varId _{phv}_ not found in PIC-SURE data dictionary")
                            continue

                        var_values = picsure_rec['values']
                        if var_values:
                            section.append(f"         * PIC-SURE permissible values: {', '.join(var_values)}")
                        else:
                            section.append(f"         * No permissible values listed in PIC-SURE data dictionary")

                    component_var_lists[f"{directory}/{data['name']}/{unit['name']}"] = file_study_vars
                else:
                    zeros.append("component_study_variables")

                if unit.get('component_harmonized_variables'):
                    file_harm_vars = [hv['name'] for hv in unit['component_harmonized_variables']]
                    harm_vars.extend(file_harm_vars)
                    vars_text = ", ".join(f"`{var}`" for var in file_harm_vars)
                    harm_vars_text = ", ".join(f"`{var}`" for var in file_harm_vars)
                    section.append(f"    * {len(unit['component_harmonized_variables'])} component_harmonized_variables: {vars_text}")
                    # component_var_lists.append(f"#### {len(file_harm_vars)} study vars in {directory}/{data['name']}/{unit['name']}:\n{harm_vars_text}")
                    component_var_lists[f"{directory}/{data['name']}/{unit['name']}"] = file_study_vars
                else:
                    zeros.append("component_harmonized_variables")

                if len(zeros) == 2: # never happens, but I thought it did. no harm leaving it.
                    section.append(f"    * Does not use {' or '.join(zeros)}")

                if unit.get('harmonization_function'):
                    section.append("    * **Function:**")
                    code = format_code(unit['harmonization_function'])
                    indented_code = '\n'.join('      ' + line for line in code.split('\n'))
                    section.append(indented_code)
        else:
            raise Exception("Every json file should have some harmonization units")

        sections[directory].append('\n'.join(section)) # don't really need this now that splitting up pages

    print(f"\n{json_files} json files")
    print(f"{harmonization_units} harmonization units (i.e. harmonized variables)")
    print(f"{len(component_var_lists)} component var lists\n")

    study_vars = [re.sub(r'.*(phv\d+).*', r'\1', v) for v in study_vars]
    sc = Counter(study_vars)
    print(f"{len(study_vars)} component_study_variables, {len(sc)} distinct")

    hc = Counter(harm_vars)
    print(f"{len(harm_vars)} component_harmonization_variables, {len(hc)} distinct\n")

    # Generate content with directory-level TOCs
    for directory in sorted(sections.keys()):
        with open(f"{output_dir}/{directory}.md", 'w') as f:
            f.write(f"\n# {directory}\n")

            # Add file-level TOC for this directory
            f.write("\n### Variables in this section:\n")
            # print(sorted(structure[directory].keys()))
            for var_name in sorted(structure[directory].keys()):
                var_anchor = create_anchor(f"{var_name}")
                f.write(f"* [{var_name}](#{var_anchor})\n")
                # print(f"{directory}/{var_name}: {var_anchor}")
            f.write("\n")

            f.write('\n'.join(sections[directory]))


    with open(f"{output_dir}/{output_index}", 'w') as f:
        # Main TOC
        f.write("# TOPMed Variable Documentation\n")
        # f.write("### [List of component variables](#component_vars)\n")
        f.write("## Contents\n")
        for directory in sorted(sections.keys()):
            f.write(f"* [{directory}]({directory.lower()}.md)\n")
        f.write("\n")

        f.write(f"{len(study_vars_with_dbGap_metadata):,} of {len(component_study_vars):,} input study variables have dbGap metadata\n\n")
        f.write(f"{len(study_vars_with_picsure_metadata):,} of {len(component_study_vars):,} input study variables have PIC-SURE metadata\n\n")

        f.write('\n\n<a id="component_vars"></a>\n')
        list_lengths = Counter([len(l) for l in component_var_lists.values()])
        keys = sorted(list_lengths.keys())
        f.write("# Counts of study variables used by number of harmonized variables:\n")
        f.write("| This many R functions | use this many study variables |\n")
        f.write("|------------:|-----------:|\n")
        for key in keys:
            f.write(f"| {list_lengths[key]} | {key} |\n")

        # f.write("# Consolodated list of component variables by json file:\n")
        # f.write('\n'.join(component_var_lists))
        # f.write("\n")

        # not in good order and very long, don't include for now
        # f.write("# Component variables count of uses in harmonization units:\n")
        # f.write('\n'.join([f"{k}: {sc[k]}" for k in sc.keys()]))
        # f.write("\n")

    # This stuff is for printing links to be used in google docs
    vars_in_gsheet_order = [ # for column D https://docs.google.com/spreadsheets/d/1G-AIk2m4UCDfh1OvFID3bewQXqxExeKNNmVxaswLT8E/edit?gid=979420329#gid=979420329
        'angina_incident_1', 'cabg_incident_1', 'cad_followup_start_age_1', 'chd_death_definite_1',
        'chd_death_probable_1', 'coronary_angioplasty_incident_1', 'mi_incident_1', 'pad_incident_1', 'angina_prior_1',
        'cabg_prior_1', 'coronary_angioplasty_prior_1', 'coronary_revascularization_prior_1', 'mi_prior_1',
        'pad_prior_1', 'annotated_sex_1', 'geographic_site_1', 'hispanic_or_latino_1', 'hispanic_subgroup_1',
        'race_us_1', 'subcohort_1', 'bmi_baseline_1', 'current_smoker_baseline_1', 'ever_smoker_baseline_1',
        'height_baseline_1', 'weight_baseline_1', 'sleep_duration_1', 'cd40_1', 'crp_1', 'eselectin_1', 'icam1_1',
        'il1_beta_1', 'il10_1', 'il18_1', 'il6_1', 'isoprostane_8_epi_pgf2a_1', 'lppla2_act_1', 'lppla2_mass_1',
        'mcp1_1', 'mmp9_1', 'mpo_1', 'opg_1', 'pselectin_1', 'tnfa_1', 'tnfa_r1_1', 'tnfr2_1', 'fasting_lipids_1',
        'hdl_1', 'ldl_1', 'lipid_lowering_medication_1', 'total_cholesterol_1', 'triglycerides_1', 'vte_case_status_1',
        'vte_followup_start_age_1', 'vte_prior_history_1', 'basophil_ncnc_bld_1', 'eosinophil_ncnc_bld_1',
        'hematocrit_vfr_bld_1', 'hemoglobin_mcnc_bld_1', 'lymphocyte_ncnc_bld_1', 'mch_entmass_rbc_1',
        'mchc_mcnc_rbc_1', 'mcv_entvol_rbc_1', 'monocyte_ncnc_bld_1', 'neutrophil_ncnc_bld_1', 'platelet_ncnc_bld_1',
        'pmv_entvol_bld_1', 'rbc_ncnc_bld_1', 'rdw_ratio_rbc_1', 'wbc_ncnc_bld_1', 'antihypertensive_meds_1',
        'bp_diastolic_1', 'bp_systolic_1', 'cac_score_1', 'cac_volume_1', 'carotid_plaque_1', 'carotid_stenosis_1',
        'cimt_1', 'cimt_2']
    vars_in_gsheet_order = [ # for column W https://docs.google.com/spreadsheets/d/1G-AIk2m4UCDfh1OvFID3bewQXqxExeKNNmVxaswLT8E/edit?gid=2039879463#gid=2039879463
        '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'cac_score_1', 'cac_volume_1', 'cimt_1|cimt_2',
        'carotid_stenosis_1', '', '', '', '', '', '', '', '', '', '', '', '', 'fasting_lipids_1', '', '', '', '', '',
        '', '', 'hematocrit_vfr_bld_1', '', '', 'coronary_angioplasty_prior_1|coronary_angioplasty_incident_1',
        'cabg_prior_1|cabg_incident_1|coronary_revascularization_prior_1', '', '', '', '', '', '',
        'lymphocyte_ncnc_bld_1', '', '', '', '', 'neutrophil_ncnc_bld_1', '', '', '', '', '', '', '', '', '', '',
        'rbc_ncnc_bld_1', '', '', '', '', '', '', 'antihypertensive_meds_1', 'antihypertensive_meds_1',
        'antihypertensive_meds_1', 'antihypertensive_meds_1', 'antihypertensive_meds_1', 'antihypertensive_meds_1',
        'antihypertensive_meds_1', 'antihypertensive_meds_1', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
        '', '', 'crp_1', '', '', '', '', '', 'fasting_lipids_1', '', '', '', '', '', '', '', 'hemoglobin_mcnc_bld_1',
        'mi_prior_1|mi_incident_1', 'il6_1', '', 'platelet_ncnc_bld_1', '', 'lipid_lowering_medication_1',
        'vte_case_status_1|vte_prior_history_1', 'wbc_ncnc_bld_1', 'current_smoker_baseline_1|ever_smoker_baseline_1',
        '', 'hdl_1', 'antihypertensive_meds_1', 'ldl_1', 'total_cholesterol_1', 'triglycerides_1', '',
        'bmi_baseline_1', 'weight_baseline_1', '', '', 'bp_diastolic_1', 'height_baseline_1', '', 'race_us_1',
        'annotated_sex_1', 'bp_systolic_1', '', 'cad_followup_start_age_1|vte_followup_start_age_1',
        'hispanic_or_latino_1|hispanic_subgroup_1', 'geographic_site_1', 'subcohort_1', 'sleep_duration_1',
        'angina_incident_1|angina_prior_1', 'chd_death_definite_1|chd_death_probable_1', 'pad_prior_1|pad_incident_1', 'cd40_1', 'eselectin_1', 'icam1_1', 'il1_beta_1', 'il10_1', 'il18_1',
                                                                                            'isoprostane_8_epi_pgf2a_1',
        'lppla2_act_1', 'lppla2_mass_1', 'mcp1_1', 'monocyte_ncnc_bld_1', 'mmp9_1',
        'mpo_1', 'opg_1', 'pselectin_1', 'tnfa_1', 'tnfa_r1_1', 'tnfr2_1', 'basophil_ncnc_bld_1',
        'eosinophil_ncnc_bld_1', 'mcv_entvol_rbc_1', 'mch_entmass_rbc_1', 'mchc_mcnc_rbc_1', 'pmv_entvol_bld_1',
        'rdw_ratio_rbc_1', 'carotid_plaque_1'
    ]
    for var in vars_in_gsheet_order:
        if not var:
            print('""')
            continue
        vars = var.split('|')
        links = [var_links[v] for v in vars]
        if len(vars) > 1:
            print(f"""=CONCATENATE({', " | ", '.join(links)})""")
        else:
            print('=' + links[0])

    pass


def main():
    input_dir = "../../topmed-dcc-harmonized-phenotypes/harmonized-variable-documentation"
    output_index = "README.md"
    output_dir = "./human-readable-harmonized-variable-documentation/generated-doc-pages"
    picsure_dd, picsure_var_vals = picsure_dd_parse()
    picsure_dd.set_index('varId', inplace=True)

    generate_markdown(input_dir, output_dir, output_index, picsure_dd)
    print(f"Documentation generated in {output_dir}/{output_index}")


if __name__ == "__main__":
    main()
