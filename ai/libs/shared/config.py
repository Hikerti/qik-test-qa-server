"""Settings Pydantic, env parsing (used повсюду)."""

from typing import Optional
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    """Application settings loaded from environment variables."""
    
    ENV: str = "development"
    DATABASE_URL: Optional[str] = None  # Reserved for future use
    QDRANT_URL: str = "http://localhost:6333"
    LLM_MODE: str = "local"
    ARTIFACTS_DIR: str = "ai_artifacts"
    LLM_API_KEY: Optional[str] = None
    LLM_BASE_URL: Optional[str] = None
    LLM_MODEL: str = "Qwen/Qwen3-Coder-480B-A35B-Instruct"
    LLM_TEMPERATURE: float = 0.5
    LLM_TOP_P: float = 0.95
    USE_REAL_LLM: bool = False
    MAX_TESTS_PER_ENDPOINT: int = 3
    
    class Config:
        env_file = ".env"
        case_sensitive = False


# Global settings instance
settings = Settings()
