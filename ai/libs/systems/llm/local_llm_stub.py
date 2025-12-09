"""Dev stub for local LLM."""

import logging

logger = logging.getLogger(__name__)


class LocalLLMStub:
    """
    Local LLM stub implementation for M1.
    
    Deterministic implementation that returns a simple pytest test script.
    """
    
    def generate(self, prompt: str, max_tokens: int = 512) -> str:
        """
        Generate a simple pytest test script as stub response.
        
        Args:
            prompt: Text prompt (used for logging)
            max_tokens: Maximum tokens (ignored in stub)
            
        Returns:
            String containing a simple pytest test script
        """
        logger.info(f"LocalLLMStub.generate called with prompt: {prompt[:50]}...")
        
        # Return a simple deterministic pytest test script
        return """# Сгенерированный тест (stub)
import pytest

def test_dummy():
    assert 1 == 1
"""
