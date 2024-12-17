import json
from pathlib import Path
from collections import defaultdict


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
        rel_path = json_file.relative_to(root_path)
        directory = rel_path.parent.name

        with open(json_file, 'r') as f:
            data = json.load(f)

        section = []

        # Add anchor for variable
        var_anchor = create_anchor(data['name'])
        section.append(f'<a id="{var_anchor}"></a>')

        # Variable name, concept and description
        var_heading = f"## **{data['name']}** ({data.get('phenotype_concept', 'N/A')})"
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
                unit_heading = f"  * ### **{unit['name']}**:"
                unit_anchor = create_anchor(f"{data['name']}-{unit['name']}")
                section.append(f'<a id="{unit_anchor}"></a>')
                section.append(unit_heading)

                if unit.get('component_study_variables'):
                    vars_text = ", ".join(f"`{var}`" for var in unit['component_study_variables'])
                    section.append(f"    * Variables: {vars_text}")

                if unit.get('component_harmonized_variables'):
                    harm_vars_text = ", ".join(f"`{var}`" for var in unit['component_harmonized_variables'])
                    section.append(f"    * Harmonized Variables: {harm_vars_text}")

                if unit.get('harmonization_function'):
                    section.append("    * Function:")
                    code = format_code(unit['harmonization_function'])
                    indented_code = '\n'.join('      ' + line for line in code.split('\n'))
                    section.append(indented_code)

        sections[directory].append('\n'.join(section))

    with open(output_file, 'w') as f:
        # Main TOC
        f.write("# TOPMed Variable Documentation\n")
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


def main():
    input_dir = "harmonized-variable-documentation"
    output_file = "topmed-variable-documentation.md"

    generate_markdown(input_dir, output_file)
    print(f"Documentation generated in {output_file}")


if __name__ == "__main__":
    main()