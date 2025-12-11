"""Semantic checks for generated code."""

from typing import Tuple
import py_compile
import re
from pathlib import Path


def validate_generated_code(path: str) -> Tuple[bool, str]:
    """
    Validate generated python test file.

    Checks:
    - Syntax via py_compile
    - Presence of at least one test function (def test_)
    """
    file_path = Path(path)
    if not file_path.exists():
        return False, f"File not found: {path}"

    try:
        py_compile.compile(str(file_path), doraise=True)
    except py_compile.PyCompileError as e:
        return False, f"Syntax error: {e}"

    content = file_path.read_text(encoding="utf-8")
    if not re.search(r"def\s+test_", content):
        return False, "No test function found in generated code"

    return True, ""
