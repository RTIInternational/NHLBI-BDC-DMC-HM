import json
import csv
from pathlib import Path


def process_json_files(root_dir):
    """
    Process JSON files in the given directory and its subdirectories to extract
    raw and harmonized variable mappings.

    Args:
        root_dir (str): Path to the root directory containing JSON files

    Returns:
        list: List of tuples containing (raw_var, harmonized_var) mappings
    """
    # Convert the root directory path to a Path object
    root_path = Path(root_dir).resolve()

    # Store the mappings
    mappings = []

    # Find all JSON files recursively
    for json_file in root_path.glob('**/*.json'):
        try:
            with open(json_file, 'r') as f:
                data = json.load(f)

            harmonized_name = data['name']

            # Extract harmonization units
            if 'harmonization_units' in data:
                for unit in data['harmonization_units']:
                    # Get the harmonized name
                    harmonization_unit_name = unit['name']

                    # Get the raw variable names
                    raw_vars = unit.get('component_study_variables', [])

                    # Add each raw variable mapping
                    for raw_var in raw_vars:
                        mappings.append((harmonized_name, harmonization_unit_name, raw_var))

        except Exception as e:
            print(f"Error processing {json_file}: {str(e)}")

    return mappings


def write_csv(mappings, output_file):
    """
    Write the mappings to a CSV file.

    Args:
        mappings (list): List of tuples containing (raw_var, harmonized_var) mappings
        output_file (str): Path to the output CSV file
    """
    with open(output_file, 'w', newline='') as f:
        writer = csv.writer(f)
        # Write header
        writer.writerow(['harmonized', 'harmonized_unit', 'raw'])
        # Write mappings
        writer.writerows(mappings)


def main():
    # Define input directory and output file
    input_dir = "harmonized-variable-source-documentation"
    output_file = "raw-to-harmonized-topmed-vars.csv"

    # Process JSON files and get mappings
    mappings = process_json_files(input_dir)

    # Write mappings to CSV
    write_csv(mappings, output_file)

    print(f"Processing complete. Results written to {output_file}")


if __name__ == "__main__":
    main()