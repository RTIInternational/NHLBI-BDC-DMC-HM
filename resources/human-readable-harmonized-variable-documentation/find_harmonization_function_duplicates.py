import json
from pathlib import Path
from collections import defaultdict
import hashlib


def get_harmonization_functions(root_dir):
    """
    Extract all harmonization functions from JSON files and identify duplicates.

    Args:
        root_dir (str): Path to the root directory containing JSON files

    Returns:
        tuple: (functions_data, duplicate_groups)
            - functions_data: list of dicts with file, unit_name, and function info
            - duplicate_groups: dict mapping function hashes to lists of (file, unit) tuples
    """
    root_path = Path(root_dir).resolve()

    # Store all functions with their metadata
    functions_data = []

    # Track duplicates
    func_hash_to_info = defaultdict(list)

    # Find all JSON files recursively
    for json_file in root_path.glob('**/*.json'):
        try:
            with open(json_file, 'r') as f:
                data = json.load(f)

            # Get the variable name from the JSON
            variable_name = data.get('name', 'unknown')

            # Extract harmonization functions from harmonization_units
            if 'harmonization_units' in data:
                for unit in data['harmonization_units']:
                    if 'harmonization_function' in unit:
                        func = unit['harmonization_function']
                        unit_name = unit['name']

                        # Store function info
                        func_info = {
                            'file': json_file.name,
                            'variable': variable_name,
                            'unit_name': unit_name,
                            'function': func
                        }
                        functions_data.append(func_info)

                        # Create hash for duplicate detection
                        # Normalize whitespace to ensure similar functions match
                        normalized_func = ' '.join(func.split())
                        func_hash = hashlib.md5(normalized_func.encode()).hexdigest()
                        func_hash_to_info[func_hash].append((json_file.name, variable_name, unit_name))

        except Exception as e:
            print(f"Error processing {json_file}: {str(e)}")

    # Filter to only duplicate groups (more than one function)
    duplicate_groups = {
        h: files for h, files in func_hash_to_info.items()
        if len(files) > 1
    }

    return functions_data, duplicate_groups


def analyze_functions(functions_data, duplicate_groups):
    """
    Print analysis of harmonization functions.
    """
    # Get unique counts per file
    file_counts = defaultdict(int)
    for func in functions_data:
        file_counts[func['file']] += 1

    print("\nSummary Statistics:")
    print(f"Total harmonization functions: {len(functions_data)}")
    print(f"Unique files: {len(file_counts)}")
    print(f"Duplicate function groups: {len(duplicate_groups)}")

    print("\nFunctions per file:")
    for file, count in sorted(file_counts.items(), key=lambda x: (-x[1], x[0])):
        print(f"  {file}: {count} functions")

    if duplicate_groups:
        print("\nDuplicate Function Groups:")
        for hash_val, instances in duplicate_groups.items():
            print("\nDuplicate Group:")
            for file, var, unit in instances:
                print(f"  - File: {file}, Variable: {var}, Unit: {unit}")

            # Get the function text from one of the instances
            sample_func = next(f['function'] for f in functions_data
                               if f['file'] == instances[0][0] and f['unit_name'] == instances[0][2])
            print("\nFunction Preview (first 200 chars):")
            print(sample_func[:200] + "...")
            print("-" * 80)


def main():
    input_dir = "harmonized-variable-source-documentation"

    # Get functions and analyze
    functions_data, duplicate_groups = get_harmonization_functions(input_dir)
    analyze_functions(functions_data, duplicate_groups)


if __name__ == "__main__":
    main()