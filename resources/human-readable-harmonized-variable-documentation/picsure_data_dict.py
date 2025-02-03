import pandas as pd
from collections import defaultdict, Counter
import statistics

PATH = './copies_of_external_source_files'

def picsure_dd_parse(path=PATH):
    cols_to_load = ['values', 'studyId', 'dtId', 'varId', 'is_categorical', 'is_continuous',
                    'columnmeta_is_stigmatized', 'columnmeta_name', 'description',
                    'columnmeta_min', 'HPDS_PATH', 'derived_group_id',
                    'columnmeta_hpds_path', 'columnmeta_var_id',
                    'columnmeta_var_group_description', 'derived_var_description',
                    'derived_variable_level_data', 'data_hierarchy',
                    'derived_group_description', 'columnmeta_max', 'columnmeta_description',
                    'derived_study_id', 'hashed_var_id', 'columnmeta_data_type',
                    'derived_var_id', 'columnmeta_study_id', 'is_stigmatized',
                    'derived_var_name', 'derived_study_abv_name',
                    'derived_study_description', 'columnmeta_var_group_id',
                    'derived_group_name', 'columnmeta_HPDS_PATH', 'min', 'max']

    dd = pd.read_csv(
        f'{path}/picsure_data_dictionary.csv',
        usecols=cols_to_load,
        quoting=1,
        low_memory=False
    )

    values = [eval(v) for v in list(dd['values'])]

    dd['values'] = values
    return dd, values

def analyze(path):
    dd, values = picsure_dd_parse(path)
    analyze_values(values)  # Uncomment and run with your data
    print()
    pass

    print("DataFrame Info:")
    print(dd.info())

    print("\ndata_hierarchy unique values and counts:")
    print(dd['data_hierarchy'].value_counts().head())

    print(f"\nLoaded dataframe shape: {dd.shape}")

    # Optional: examine what's in rows where data_hierarchy is not null
    non_null_hierarchy = dd[dd['data_hierarchy'].notna()]
    if len(non_null_hierarchy) > 0:
        print("\nSample row with non-null data_hierarchy:")
        print(non_null_hierarchy.iloc[0][['columnmeta_name', 'data_hierarchy', 'description']])

    dd.to_csv(f'{path}/data_dictionary_clean.csv', index=False)

    pass


def analyze_values(values):
    # Check for duplicates within rows
    print("\n=== Checking for duplicates within rows ===")
    rows_with_dups = []
    for i, row in enumerate(values, 1):
        if len(row) != len(set(row)):
            rows_with_dups.append(i)

    if rows_with_dups:
        print(f"Found {len(rows_with_dups)} rows with duplicate values")
        print(f"First few affected rows: {rows_with_dups[:5]}")
    else:
        print("No rows contain duplicate values")

    # Analyze list lengths
    print("\n=== List Length Distribution ===")
    lengths = [len(row) for row in values]
    print(f"Minimum length: {min(lengths)}")
    print(f"Maximum length: {max(lengths)}")
    print(f"Mean length: {statistics.mean(lengths):.2f}")
    print(f"Median length: {statistics.median(lengths)}")

    # Group lengths into ranges for better visualization
    length_ranges = [
        (0, 0), (1, 1), (2, 2), (3, 5), (6, 10),
        (11, 100), (101, 1000), (1001, 10000), (10001, float('inf'))]
    length_dist = defaultdict(int)

    for length in lengths:
        for start, end in length_ranges:
            if start <= length <= end:
                length_dist[f"{start}-{end if end != float('inf') else '∞'}"] += 1
                break

    print("\nLength distribution:")
    total_rows = len(values)
    for range_str, count in length_dist.items():
        percentage = (count / total_rows) * 100
        print(f"{range_str}: {count} rows ({percentage:.1f}%)")

    # Analyze value frequencies across rows
    print("\n=== Value Occurrence Distribution ===")
    value_occurrences = defaultdict(set)
    for i, row in enumerate(values):
        for value in row:
            value_occurrences[value].add(i)

    occurrence_counts = {value: len(rows) for value, rows in value_occurrences.items()}

    # Get most common values
    most_common = Counter(occurrence_counts).most_common(25)
    print("\nMost frequently occurring values:")
    for value, count in most_common:
        percentage = (count / total_rows) * 100
        print(f"{value}: appears in {count} rows ({percentage:.1f}%)")

    # Distribution of how many rows values appear in
    occurrence_dist = defaultdict(int)
    for count in occurrence_counts.values():
        occurrence_dist[count] += 1

    print("\nDistribution of value occurrences:")
    ranges = [(1, 1), (2, 5), (6, 10), (11, 50), (51, 100), (101, float('inf'))]

    for start, end in ranges:
        count = sum(1 for c in occurrence_counts.values() if start <= c <= end)
        percentage = (count / len(occurrence_counts)) * 100
        range_str = f"{start}-{end if end != float('inf') else '∞'}"
        print(f"Values appearing in {range_str} rows: {count:,} ({percentage:.1f}%)")


def main():
    analyze(PATH)


if __name__ == "__main__":
    main()
