import pandas as pd
from datetime import datetime
import os
from pathlib import Path


def load_table():
    # module_dir = os.path.dirname(__file__)
    # readme_path = os.path.join(module_dir, 'README.md')
    readme_path = './resources/README.md'
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
    sheet_info = get_sheet_info(short_name)
    short_name, local_path, web_location = sheet_info.values()
    df = read_csv_with_encoding(local_path)
    return df


# not using this now. was having too many issues with loading from gsheets
def handle_sheet_download(short_name):  # not working with gsheets download...just use local for now
    # web_location = "YOUR_GOOGLE_SHEET_URL"
    sheet_info = get_sheet_info(short_name)
    short_name, local_path, web_location = sheet_info.values()
    if not web_location:
        df = read_csv_with_encoding(local_path)
        return df

    today = datetime.now().date()
    backup_dir = Path('resources/copies_of_external_source_files/backups')
    backup_dir.mkdir(exist_ok=True)

    # Check if we already downloaded today
    if os.path.exists(local_path):
        file_date = datetime.fromtimestamp(os.path.getmtime(local_path)).date()
        if file_date == today:
            print(f"Already downloaded {local_path} today. Using local copy.")
            return read_csv_with_encoding(local_path)

    # Download new version
    web_location = web_location.replace('/edit?gid=', '/export?format=csv&gid=')
    new_df = read_csv_with_encoding(web_location)

    # Compare with existing if it exists
    if os.path.exists(local_path):
        old_df = read_csv_with_encoding(local_path)

        # Create backup of old file
        timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
        backup_path = backup_dir / f"{Path(local_path).stem}_{timestamp}.csv"
        old_df.to_csv(backup_path, index=False)

        # Compare and report differences
        if not old_df.equals(new_df):
            print(f"Changes detected! Old version backed up to {backup_path}")

            # Find and report specific differences
            if old_df.shape != new_df.shape:
                print(f"Row count changed: {old_df.shape[0]} -> {new_df.shape[0]}")
            else:
                # Find changed values
                changes = (old_df != new_df).any()
                changed_cols = changes[changes].index.tolist()
                if changed_cols:
                    print("Changed columns:", ", ".join(changed_cols))

    # Save new version
    new_df.to_csv(local_path, index=False)
    return new_df


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