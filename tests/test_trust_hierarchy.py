"""Validate the trust-hierarchy annotations on bdchm concept-binding enums against the
trust-hierarchy microschema profile, resolved locally by relative path.

The profile (trust_hierarchy_profile.yaml) is the source of truth: allowed annotation keys,
via-tokens, and fallback statuses are derived from it, so the schema and its governing
metaclass cannot drift. The profile is referenced by `instantiates` (a CURIE) in bdchm but
not imported (which would emit the metaclass into the generated datamodel).
"""

from pathlib import Path

import pytest
from linkml_runtime import SchemaView

SCHEMA_DIR = Path(__file__).resolve().parent.parent / "src" / "bdchm" / "schema"
BDCHM = SCHEMA_DIR / "bdchm.yaml"
PROFILE = SCHEMA_DIR / "trust_hierarchy_profile.yaml"
META = "th:TrustHierarchyBinding"


@pytest.fixture(scope="module")
def profile():
    sv = SchemaView(str(PROFILE))
    cls = sv.get_class("TrustHierarchyBinding")
    assert cls is not None, "profile must define the TrustHierarchyBinding metaclass"
    return {
        "keys": set(cls.attributes.keys()),
        "via": set(sv.get_enum("EncodingEnum").permissible_values.keys()),
        "status": set(sv.get_enum("FallbackStatusEnum").permissible_values.keys()),
    }


@pytest.fixture(scope="module")
def th_enums():
    sv = SchemaView(str(BDCHM))
    return {n: e for n, e in sv.all_enums().items() if e.instantiates and META in e.instantiates}


def test_profile_defines_expected_attributes(profile):
    assert {"prefer", "fallback", "via", "validation_source", "flag"} <= profile["keys"]


def test_bindings_present(th_enums):
    assert len(th_enums) >= 12


def test_annotations_conform_to_profile(th_enums, profile):
    for name, e in th_enums.items():
        ann = {k: v.value for k, v in e.annotations.items()}
        assert set(ann) <= profile["keys"], f"{name}: keys not in profile: {set(ann) - profile['keys']}"
        assert ann.get("prefer", "").strip() or "flag" in ann, f"{name}: empty prefer and no flag"
        for v in [x.strip() for x in ann.get("via", "").split(",") if x.strip()]:
            assert v in profile["via"], f"{name}: via token '{v}' not in profile EncodingEnum"
        for fb in [x.strip() for x in ann.get("fallback", "").split(",") if x.strip()]:
            assert ":" in fb and fb.split(":")[1] in profile["status"], f"{name}: bad fallback '{fb}'"
