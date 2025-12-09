"""POST /v1/generate — старт пайплайна."""

from fastapi import APIRouter, BackgroundTasks, status
from pydantic import BaseModel
from typing import Dict, Any

from libs.systems.llm.local_llm_stub import LocalLLMStub
from libs.agents.orchestrator.orchestrator import Orchestrator
import uuid

router = APIRouter()


class GenerateRequest(BaseModel):
    """Request model for generation endpoint."""
    openapi: Dict[str, Any]


@router.post("/generate/", status_code=status.HTTP_202_ACCEPTED)
def generate(
    request: GenerateRequest,
    background_tasks: BackgroundTasks
):
    """
    Start generation pipeline in background.
    
    Args:
        request: GenerateRequest with openapi specification
        background_tasks: FastAPI background tasks
        
    Returns:
        JSON with status "started"
    """
    # Create LLM stub and orchestrator
    llm = LocalLLMStub()
    orchestrator = Orchestrator(llm)

    # Pre-generate run_id to return immediately
    run_id = str(uuid.uuid4())

    # Add background task (background_tasks accepts sync callable)
    background_tasks.add_task(orchestrator.start_run, request.openapi, run_id)

    return {"status": "started", "run_id": run_id}
