#!/usr/bin/env python
"""
Convert notebook workflow to markdown documentation using Jinja2 templates.
This script runs the same steps as the Jupyter notebook but outputs Markdown.
"""

import sys
import os
from os.path import basename

import pandas as pd
import json
import textwrap
from jinja2 import Environment, FileSystemLoader, select_autoescape
from resources.load_data import get_sheet_info, load_csv, load_table, convert_path_relative_to

current_dir = os.path.abspath(os.getcwd())
project_dir = os.path.abspath(os.path.join(os.getcwd(), '../..'))
os.chdir(project_dir)

# Set up Jinja2 environment
# Create templates directory if it doesn't exist
templates_dir = os.path.join(current_dir, 'templates')
os.makedirs(templates_dir, exist_ok=True)

# Create a basic template file if it doesn't exist
template_path = os.path.join(templates_dir, 'workflow_step.md.j2')

# Initialize Jinja2 environment
env = Environment(
    loader=FileSystemLoader(templates_dir),
    autoescape=select_autoescape(['html', 'xml'])
)

# Get the template
template = env.get_template('workflow_step.md.j2')

# List to collect all rendered markdown sections
markdown_sections = []

files_table = load_table()
short_names = [f['short_name'] for f in files_table]

def get_file_info(file_path):
    """Generate a preview for a file based on its type"""
    if file_path in short_names:
        # if this is a file from the README table, do this
        short_name = file_path
        try:
            info = get_sheet_info(file_path)
            file_path = info['local_path']
            df = load_csv(short_name)
            try:
                preview = df.head(3).to_markdown(index=False)
            except ImportError:
                preview = df.head(3).to_string()

            file_info = {
                'path': file_path,
                'relative_path': convert_path_relative_to(file_path, current_dir),
                'basename': short_name,
                'type': file_path.split('.')[-1] if '.' in file_path else None,
                'preview': preview,
            }
        except Exception as e:
            return f"*Error with README table file {file_path}: {str(e)}*"

        return file_info

    # it's a regular file path
    if not os.path.exists(file_path):
        return None

    # Determine file type and generate appropriate preview
    if file_path.endswith('.csv'):
        try:
            df = pd.read_csv(file_path)
            try:
                preview = df.head(3).to_markdown(index=False)
            except ImportError:
                preview = df.head(3).to_string()
        except Exception as e:
            preview = f"*Error previewing file: {str(e)}*"

    elif file_path.endswith('.json'):
        try:
            with open(file_path, 'r') as f:
                data = json.load(f)
            if isinstance(data, list) and len(data) > 0:
                preview = json.dumps(data[:2], indent=2)
            else:
                preview = json.dumps(data, indent=2)
        except Exception as e:
            preview = f"*Error previewing file: {str(e)}*"

    file_info = {
        'path': file_path,
        'basename': os.path.basename(file_path),
        'type': file_path.split('.')[-1] if '.' in file_path else None,
        'preview': preview,
    }

    return file_info


def document_workflow_step(
    step_name, script_path, specific_function=None, input_files=[], output_files=[],
    output_url=None, output_url_name=None, description=""):
    """Generate markdown documentation for a workflow step using Jinja2 template"""

    # Process file information
    processed_input_files = []
    for file_path in input_files:
        file_info = get_file_info(file_path)
        processed_input_files.append(file_info)

    processed_output_files = []
    for file_path in output_files:
        file_info = get_file_info(file_path)
        processed_output_files.append(file_info)

    # Render the template with our data
    rendered_markdown = template.render(
        step_name=step_name,
        script_path=script_path,
        script_basename=os.path.basename(script_path),
        specific_function=specific_function,
        description=textwrap.dedent(description),
        input_files=processed_input_files,
        output_files=processed_output_files,
        output_url=output_url,
        output_url_name=output_url_name,
    )
    print(file_info)
    print(rendered_markdown)

    # Add to our collection of markdown sections
    markdown_sections.append(rendered_markdown)

    # Print to console for debugging
    print(f"Generated markdown for step: {step_name}")

    return rendered_markdown


def main():
    """Run all workflow steps and generate markdown documentation"""

    document_workflow_step(
        step_name="1. Map variable inputs to TOPMed to their harmonized variable names",
        script_path="resources/map-topmed-raw-to-harmonized/generate_mapping.py",
        output_files=["topmed_raw_to_harm"],
        description="""For each component_study_variable 
            ([example](https://github.com/UW-GAC/topmed-dcc-harmonized-phenotypes/blob/14960eb088d9057f3fcd04c65f609a31e0d981a1/harmonized-variable-documentation/inflammation/cd40_1.json#L24C8-L24C33)),
            give the harmonized variable name and the harmonization unit name.
            Inputs are all the json files [here](https://github.com/UW-GAC/topmed-dcc-harmonized-phenotypes/tree/master/harmonized-variable-documentation).""",
    )

    document_workflow_step(
        step_name="2. Generate documentation for TOPMed harmonization functions",
        script_path="resources/human_readable_harmonized_variable_documentation/harmonization_documentation_generator.py",
        input_files=['topmed_plus_dbgap', 'resources/copies_of_external_source_files/picsure_without_values_col.csv'],
        output_url='https://github.com/RTIInternational/NHLBI-BDC-DMC-HM/blob/main/resources/human_readable_harmonized_variable_documentation/generated_doc_pages/README.md',
        output_url_name='TOPMed Variable Documentation',
        description="""For each TOPMed harmonized variable, readably display everything
            (R harmonization functions, input variable, documentation, etc.)
            from the [TOPMed json files](https://github.com/UW-GAC/topmed-dcc-harmonized-phenotypes/tree/master/harmonized-variable-documentation)
            and, if found, permissible values for the input variable from PicSure.
            PicSure values lists are sometimes (and probably incorrectly) very long,
            so showing a preview of that file without them.""",
    )

    document_workflow_step(
        step_name="Fix messed up or missing pht values in the Dataset accession column",
        script_path="resources/missing_phv/permissible_vals_for_missing_phv.py",
        specific_function='fix_missing_phts()',
        input_files=['dbgap_priority'],
        output_url='https://docs.google.com/spreadsheets/d/1G-AIk2m4UCDfh1OvFID3bewQXqxExeKNNmVxaswLT8E/edit?gid=1927886785',
        output_url_name='DO NOT TOUCH Copy of priority phv not in TM worksheet',
        description="""Reads from and writes to worksheet in
            [BDCHM Prioritization Information](https://docs.google.com/spreadsheets/d/1G-AIk2m4UCDfh1OvFID3bewQXqxExeKNNmVxaswLT8E/edit?gid=1927886785#gid=1927886785).
            Before running this function, duplicate `priority phv not in TM` worksheet and rename the copy
            `DO NOT TOUCH Copy of priority phv not in TM`.
            Uses `dbGaP Study Accession` and `Variable accession` columns to look up pht in `dbgap_priority`.""",
    )

    document_workflow_step(
        step_name="Adds permissible value data from PicSure to `DO NOT TOUCH Copy of priority phv not in TM` worksheet.",
        script_path="resources/missing_phv/permissible_vals_for_missing_phv.py",
        specific_function='update_phv_not_in_tm()',
        input_files=['dbgap_priority'],
        output_url='https://docs.google.com/spreadsheets/d/1G-AIk2m4UCDfh1OvFID3bewQXqxExeKNNmVxaswLT8E/edit?gid=1927886785',
        output_url_name='DO NOT TOUCH Copy of priority phv not in TM worksheet',
        description="""Reads from and writes to same worksheet as fix_missing_phts() above.
            Uses `dbGaP Study Accession` and `Variable accession` columns to look up pht in `dbgap_priority`.""",
    )
    # Add more steps as needed...

    # Write the complete markdown document to a file
    with open(os.path.join(current_dir, 'README.md'), 'w') as f:
        f.write('\n'.join(markdown_sections))

    print(f"Markdown documentation written to README.md")


if __name__ == "__main__":
    # Check if jinja2 is installed
    try:
        import jinja2
    except ImportError:
        print("Error: The 'jinja2' package is not installed.")
        print("Please install it with: pip install jinja2")
        sys.exit(1)

    # Check if tabulate is installed for DataFrame markdown conversion
    try:
        import tabulate
    except ImportError:
        print("Note: The 'tabulate' package is not installed. Installing it will improve DataFrame rendering.")
        print("You can install it with: pip install tabulate")

    main()