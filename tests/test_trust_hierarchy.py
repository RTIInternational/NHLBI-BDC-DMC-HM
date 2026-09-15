"""CI checks for the trust-hierarchy artifact.

Two checks, both standard (no bespoke consumer code):
  1. The data conforms to the trust-hierarchy microschema (linkml validation).
  2. Every binding's `class_name.slot_name` is a real (class, slot) in bdchm
     -- i.e. the modeling constraint actually points at something in the model.
"""

from pathlib import Path

import yaml
from linkml.validator import validate
from linkml_runtime import SchemaView

ROOT = Path(__file__).resolve().parent.parent
TH_DIR = ROOT / "trust_hierarchy"
SCHEMA = TH_DIR / "trust_hierarchy.schema.yaml"
DATA = TH_DIR / "bdchm_trust_hierarchy.yaml"
BDCHM = ROOT / "src" / "bdchm" / "schema" / "bdchm.yaml"


def test_data_conforms_to_microschema():
    report = validate(yaml.safe_load(DATA.read_text()), str(SCHEMA), "TrustHierarchy")
    assert not report.results, [r.message for r in report.results]


def test_bindings_reference_real_bdchm_slots():
    sv = SchemaView(str(BDCHM))
    classes = sv.all_classes()
    bindings = yaml.safe_load(DATA.read_text())["bindings"]
    assert len(bindings) >= 12
    for b in bindings:
        cls, slot = b["class_name"], b["slot_name"]
        assert cls in classes, f"{b['id']}: class '{cls}' not in bdchm"
        slot_names = {s.name for s in sv.class_induced_slots(cls)}
        assert slot in slot_names, f"{b['id']}: slot '{slot}' not on class '{cls}'"
