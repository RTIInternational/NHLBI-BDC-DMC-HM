import json
from pathlib import Path
from collections import defaultdict, Counter
import re


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


def generate_markdown(root_dir, output_file):
    """Generate markdown documentation from JSON files"""
    root_path = Path(root_dir).resolve()
    sections = defaultdict(list)
    json_files = 0
    harmonization_units = 0
    component_var_lists = []
    study_vars = []
    harm_vars = []

    # Store structure for TOC
    structure = defaultdict(lambda: defaultdict(list))

    # First pass: collect structure
    for json_file in sorted(root_path.glob('**/*.json')):
        rel_path = json_file.relative_to(root_path)
        directory = rel_path.parent.name

        with open(json_file, 'r') as f:
            data = json.load(f)

        # Store variable name for file-level TOC
        structure[directory][data['name']] = []

        # Store harmonization unit names if present
        if data.get('harmonization_units'):
            for unit in data['harmonization_units']:
                structure[directory][data['name']].append(unit['name'])

    # Second pass: generate content with all TOCs
    for json_file in sorted(root_path.glob('**/*.json')):
        json_files += 1
        rel_path = json_file.relative_to(root_path)
        directory = rel_path.parent.name

        with open(json_file, 'r') as f:
            data = json.load(f)

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
            section.append("  * **Harmonization Units**:")
            for unit in data['harmonization_units']:
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
                harmonization_units += 1
                unit_heading = f"  * ### {directory}/{data['name']} -- **{unit['name']}**:"
                unit_anchor = create_anchor(f"{data['name']}-{unit['name']}")
                section.append(f'<a id="{unit_anchor}"></a>')
                section.append(unit_heading)

                zeros = []
                if unit.get('component_study_variables'):
                    file_study_vars = unit['component_study_variables']
                    study_vars.extend(file_study_vars)
                    vars_text = ", ".join(f"`{var}`" for var in file_study_vars)
                    section.append(f"    * {len(unit['component_study_variables'])} component_study_variables: {vars_text}")
                    component_var_lists.append(f"#### {len(file_study_vars)} study vars in {directory}/{data['name']}/{unit['name']}:\n{vars_text}")
                else:
                    zeros.append("component_study_variables")

                if unit.get('component_harmonized_variables'):
                    file_harm_vars = [hv['name'] for hv in unit['component_harmonized_variables']]
                    harm_vars.extend(file_harm_vars)
                    vars_text = ", ".join(f"`{var}`" for var in file_harm_vars)
                    harm_vars_text = ", ".join(f"`{var}`" for var in file_harm_vars)
                    section.append(f"    * {len(unit['component_harmonized_variables'])} component_harmonized_variables: {vars_text}")
                    component_var_lists.append(f"#### {len(file_harm_vars)} study vars in {directory}/{data['name']}/{unit['name']}:\n{harm_vars_text}")
                else:
                    zeros.append("component_harmonized_variables")

                if len(zeros) == 2: # never happens, but I thought it did. no harm leaving it.
                    section.append(f"    * Does not use {' or '.join(zeros)}")

                if unit.get('harmonization_function'):
                    section.append("    * Function:")
                    code = format_code(unit['harmonization_function'])
                    indented_code = '\n'.join('      ' + line for line in code.split('\n'))
                    section.append(indented_code)
        else:
            raise Exception("Every json file should have some harmonization units")

        sections[directory].append('\n'.join(section))

    print(f"\n{json_files} json files")
    print(f"{harmonization_units} harmonization units (i.e. harmonized variables)")
    print(f"{len(component_var_lists)} component var lists\n")

    study_vars = [re.sub(r'.*(phv\d+).*', r'\1', v) for v in study_vars]
    sc = Counter(study_vars)
    print(f"{len(study_vars)} component_study_variables, {len(sc)} distinct")

    hc = Counter(harm_vars)
    print(f"{len(harm_vars)} component_harmonization_variables, {len(hc)} distinct\n")

    with open(output_file, 'w') as f:
        # Main TOC
        f.write("# TOPMed Variable Documentation\n")
        f.write("### [List of component variables](#component_vars)\n")
        f.write("## Contents\n")
        for directory in sorted(sections.keys()):
            f.write(f"* [{directory}](#{directory.lower()})\n")
        f.write("\n")

        # Generate content with directory-level TOCs
        for directory in sorted(sections.keys()):
            f.write(f"\n# {directory}\n")

            # Add file-level TOC for this directory
            f.write("\n### Variables in this section:\n")
            for var_name in sorted(structure[directory].keys()):
                var_anchor = create_anchor(f"{var_name}")
                f.write(f"* [{var_name}](#{var_anchor})\n")
            f.write("\n")

            f.write('\n'.join(sections[directory]))
            f.write("\n")

        f.write('\n\n<a id="component_vars"></a>\n')
        f.write("# Consolodated list of component variables by json file:\n")
        f.write('\n'.join(component_var_lists))
        f.write("\n")

        # not in good order and very long, don't include for now
        # f.write("# Component variables count of uses in harmonization units:\n")
        # f.write('\n'.join([f"{k}: {sc[k]}" for k in sc.keys()]))
        # f.write("\n")
    pass


def main():
    input_dir = "harmonized-variable-documentation"
    output_file = "topmed-variable-documentation.md"

    generate_markdown(input_dir, output_file)
    print(f"Documentation generated in {output_file}")


if __name__ == "__main__":
    main()