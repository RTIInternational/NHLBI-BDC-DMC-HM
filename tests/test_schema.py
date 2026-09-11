"""Schema and example-data validation tests.

`linkml validate` is run two ways:
- the schema itself against the LinkML metamodel
- each example in ``src/data/examples`` against its declared class
"""

import subprocess
import sys
from pathlib import Path

import pytest
import yaml
from linkml.validator import validate

REPO_ROOT = Path(__file__).resolve().parents[1]
SCHEMA = REPO_ROOT / "src" / "bdchm" / "schema" / "bdchm.yaml"
EXAMPLE_DIR = REPO_ROOT / "src" / "data" / "examples"

# Examples that do not yet conform to the model. Tracked, not ignored:
# remove an entry once its example (or the model) is fixed. strict=False
# so a fixed example doesn't fail CI before its entry is removed here.
KNOWN_NONCONFORMING = {
    "alt_measurement_observation.yaml",
    "alt_measurement_observation_qualitative.yaml",
    "bp_measurement_observation_set.yaml",
    "drug_exposure.yaml",
    "family_medical_history.yaml",
    "measurement_observation.yaml",
    "patient_condition.yaml",
    "patient_medical_history.yaml",
    "person_participant_demography.yaml",
}


def _example_params():
    for path in sorted(EXAMPLE_DIR.glob("*.yaml")):
        marks = (
            pytest.mark.xfail(reason="example does not yet conform to the model", strict=False)
            if path.name in KNOWN_NONCONFORMING
            else ()
        )
        yield pytest.param(path, id=path.name, marks=marks)


def test_schema_validates_against_metamodel():
    result = subprocess.run(
        [sys.executable, "-m", "linkml.validator.cli", str(SCHEMA)],
        capture_output=True,
        text=True,
    )
    assert result.returncode == 0, result.stdout + result.stderr
    assert "No issues found" in (result.stdout + result.stderr)


@pytest.mark.parametrize("example_path", _example_params())
def test_example_validates(example_path):
    doc = yaml.safe_load(example_path.read_text())
    assert isinstance(doc, dict) and len(doc) == 1, f"{example_path.name}: expected a single top-level class wrapper"
    target_class, instance = next(iter(doc.items()))
    report = validate(instance, str(SCHEMA), target_class)
    assert not report.results, "\n".join(r.message for r in report.results)
