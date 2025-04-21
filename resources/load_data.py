import pandas as pd
from datetime import datetime
import os
from pathlib import Path
from contextlib import contextmanager

"""
Needs to find credentials in ~/.config/gspread/service_account.json.
Instructions: https://docs.gspread.org/en/v6.1.3/oauth2.html
"""

@contextmanager
def working_directory(path):
    """
    Context manager that temporarily changes the working directory
    and automatically reverts back when exiting the context.

    Usage:
    with working_directory('/path/to/dir'):
        # code that runs in the new working directory
    # working directory is now reverted to original
    """
    original_dir = os.getcwd()
    try:
        os.chdir(path)
        yield
    finally:
        os.chdir(original_dir)

def file_locations_readme_path():
    """
    :return: Path to README file with the markdown table that specifies file locations
    """
    rd = root_dir()
    return os.path.join(rd, 'resources/README.md')

def root_dir():
    root_dir = Path(__file__).absolute().parent.parent
    return root_dir


def load_table():
    readme_path = file_locations_readme_path()
    with open(readme_path, 'r') as f:
        markdown_text = f.read()
    return find_and_parse_markdown_table(markdown_text)


def get_sheet_info(short_name):
    data_files = load_table()
    sheet_info = [f for f in data_files if f['short_name'] == short_name][0]
    return sheet_info


def load_csv(short_name):
    # copies_of_external_source_files/AHA_TABLES 1(Sheet2).csv breaks
    #   pd.csv because of (kg/m²), so using code to figure out file encoding
    with working_directory(root_dir()):
        sheet_info = get_sheet_info(short_name)
        short_name, local_path, web_location = sheet_info.values()
        df = read_csv_with_encoding(local_path)
    return df


def find_and_parse_markdown_table(markdown_text):
    # Split into lines and find the table
    lines = markdown_text.strip().split('\n')
    table_start = None
    table_end = None

    for i, line in enumerate(lines):
        # Look for line starting with | to find table
        if line.strip().startswith('|'):
            if table_start is None:
                table_start = i
        # If we found the start and hit a non-table line, we've found the end
        elif table_start is not None and table_end is None:
            table_end = i
            break

    if table_start is None:
        raise ValueError("No table found in markdown text")

    # If we never found the end, the table goes to the end of the file
    if table_end is None:
        table_end = len(lines)

    # Extract and parse the table
    table_text = '\n'.join(lines[table_start:table_end])

    # Get headers from first line
    headers = [h.strip() for h in lines[table_start].split('|')[1:-1]]

    # Skip the header and separator lines
    data = []
    for line in lines[table_start + 2:table_end]:
        if line.strip() and line.strip().startswith('|'):
            values = [v.strip() for v in line.split('|')[1:-1]]
            row = {headers[i]: values[i] for i in range(len(headers))}
            data.append(row)

    return data


def read_csv_with_encoding(filepath):
    """
    Read a CSV file with the appropriate encoding based on file detection.
    Falls back to UTF-8 if detection fails.
    """
    import subprocess

    try:
        # Get file encoding using `file` command
        result = subprocess.run(['file', '-I', filepath], capture_output=True, text=True)
        encoding = result.stdout.split('charset=')[1].strip()

        # Map common charset names to Python encoding names
        encoding_map = {
            # 'us-ascii': 'ascii',
            'us-ascii': 'utf-8',
            'ascii': 'utf-8',
            'iso-8859-1': 'iso-8859-1',
            'utf-8': 'utf-8'
        }

        encoding = encoding_map.get(encoding, 'utf-8')
        return pd.read_csv(filepath, encoding=encoding)

    except Exception as e:
        print(f"Error reading {filepath}: {str(e)}")
        return None


def convert_path_relative_to(local_path, target_dir):
    """
    Converts a path that is relative to project root to be relative to another directory.

    Args:
        local_path (str): Path from README table (relative to project root)
        target_dir (str): Target directory (relative to project root)

    Returns:
        str: Path that is relative to the target directory
    """
    # Remove leading ./ if present in the local_path
    if local_path.startswith('./'):
        local_path = local_path[2:]

    # Convert both paths to absolute using Path objects
    root_dir_path = Path(root_dir())
    abs_local_path = root_dir_path / local_path
    abs_target_path = root_dir_path / target_dir

    # Create relative path from target to local path
    rel_path = os.path.relpath(abs_local_path, abs_target_path)

    return rel_path