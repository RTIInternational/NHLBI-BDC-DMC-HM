"""Validate the trust-hierarchy annotations on bdchm concept-binding enums.

This is the self-consistency check co-located as CI: every enum that declares
`instantiates: th:TrustHierarchyBinding` must carry a well-formed trust_hierarchy
annotation (governed by the trust-hierarchy microschema profile).
"""
from pathlib import Path
import pytest
from linkml_runtime import SchemaView

SCHEMA = Path(__file__).resolve().parent.parent / "src" / "bdchm" / "schema" / "bdchm.yaml"
META = "th:TrustHierarchyBinding"
ALLOWED = {"prefer", "fallback", "via", "validation_source", "flag"}
VIA = {"reachable_from", "inherits", "static_pv"}
STATUS = {"observed", "permitted"}


@pytest.fixture(scope="module")
def th_enums():
    sv = SchemaView(str(SCHEMA))
    return {n: e for n, e in sv.all_enums().items() if e.instantiates and META in e.instantiates}


def test_bindings_present(th_enums):
    assert len(th_enums) >= 12


def test_annotation_shape(th_enums):
    for name, e in th_enums.items():
        ann = {k: v.value for k, v in e.annotations.items()}
        assert set(ann) <= ALLOWED, f"{name}: unexpected keys {set(ann) - ALLOWED}"
        assert (ann.get("prefer", "").strip() or "flag" in ann), f"{name}: empty prefer and no flag"
        for v in [x.strip() for x in ann.get("via", "").split(",") if x.strip()]:
            assert v in VIA, f"{name}: bad via token '{v}'"
        for fb in [x.strip() for x in ann.get("fallback", "").split(",") if x.strip()]:
            assert ":" in fb and fb.split(":")[1] in STATUS, f"{name}: bad fallback '{fb}'"
