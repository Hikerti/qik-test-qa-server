"""Core: координатор шагов (Spec → Plan → Gen → ...)."""

import os
import uuid
from pathlib import Path
from typing import Dict, Any, Optional, TYPE_CHECKING
import uuid

from libs.shared.config import settings
from libs.agents.spec_loader.parser import parse_openapi

if TYPE_CHECKING:
    from libs.integrations.interfaces.llm import LLMService

# In-memory run store for M1
_RUN_STORE: Dict[str, Dict[str, Any]] = {}


class Orchestrator:
    """
    Simple synchronous orchestrator for M1.
    
    Coordinates the pipeline: parse spec → build prompt → call LLM → save artifact.
    """
    
    def __init__(self, llm: "LLMService"):
        """
        Initialize orchestrator.
        
        Args:
            llm: LLM service instance (must implement LLMService protocol)
        """
        self.llm = llm
        # Resolve artifacts directory (make absolute to avoid relative path issues)
        artifacts_dir = Path(settings.ARTIFACTS_DIR)
        if not artifacts_dir.is_absolute():
            artifacts_dir = (Path.cwd() / artifacts_dir).resolve()
        self.artifacts_dir = artifacts_dir
        self.artifacts_dir.mkdir(parents=True, exist_ok=True)
    
    def start_run(self, spec: Dict[str, Any], run_id: Optional[str] = None) -> str:
        """
        Start a new generation run.
        
        Synchronous function that:
        1. Generates run_id
        2. Parses OpenAPI spec
        3. Builds prompt
        4. Calls LLM
        5. Saves artifact to filesystem
        6. Updates run store
        
        Args:
            spec: OpenAPI specification dictionary
            
        Args:
            spec: OpenAPI specification dictionary
            run_id: Optional run identifier (used when caller wants to return id immediately)
            
        Returns:
            Run ID string
        """
        # Generate run_id if not provided
        run_id = run_id or str(uuid.uuid4())
        
        # Register run in store
        _RUN_STORE[run_id] = {
            "status": "running",
            "spec": spec
        }
        
        try:
            # Parse OpenAPI spec
            endpoints = parse_openapi(spec)
            
            # Build simple prompt
            summary = f"{len(endpoints)} endpoint(s)"
            prompt = f"Generate pytest for: {summary}"
            
            # Call LLM
            code = self.llm.generate(prompt)
            
            # Create run directory
            run_dir = self.artifacts_dir / run_id
            run_dir.mkdir(parents=True, exist_ok=True)
            
            # Save generated code
            artifact_file = run_dir / "test_generated.py"
            artifact_file.write_text(code, encoding="utf-8")
            
            # Store artifact path (absolute for robustness)
            rel_path = str(artifact_file)
            
            # Update run store
            _RUN_STORE[run_id] = {
                "status": "finished",
                "artifact": rel_path,
                "run_id": run_id
            }
            
        except Exception as e:
            # Update run store with error
            _RUN_STORE[run_id] = {
                "status": "failed",
                "error": str(e),
                "run_id": run_id
            }
            raise
        
        return run_id
    
    @staticmethod
    def get_run(run_id: str) -> Optional[Dict[str, Any]]:
        """
        Get run status by run_id.
        
        Args:
            run_id: Run identifier
            
        Returns:
            Run dictionary or None if not found
        """
        return _RUN_STORE.get(run_id)
