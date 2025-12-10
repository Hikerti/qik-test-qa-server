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
    LLM_API_KEY: str
    
    class Config:
        env_file = ".env"
        case_sensitive = False


# Global settings instance
settings = Settings()
