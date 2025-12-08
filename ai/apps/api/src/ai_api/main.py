"""FastAPI application - создание FastAPI, подключение роутеров."""

import asyncio
import logging
import sys
from pathlib import Path
from contextlib import asynccontextmanager
from fastapi import FastAPI
from nats.aio.client import Client as NATS

from .config import settings
from .controllers.nats_controller import NATSController

# Import generator service
# In production: install generator as package and use proper imports
# For development: add to path
if settings.generator_path:
    generator_path = Path(settings.generator_path)
else:
    generator_path = Path(__file__).parent.parent.parent.parent.parent / "generator" / "src"

if generator_path.exists():
    sys.path.insert(0, str(generator_path))
    from ai_generator.service import GeneratorService
else:
    raise ImportError(f"Generator service not found at {generator_path}")

logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.INFO)

# Global instances
nc: NATS = None
nats_controller: NATSController = None


@asynccontextmanager
async def lifespan(app: FastAPI):
    """
    Lifespan context manager for FastAPI app.
    Handles startup and shutdown events.
    """
    # Startup
    global nc, nats_controller
    
    logger.info("Starting AI API service...")
    
    # Initialize NATS client
    nc = NATS()
    try:
        await nc.connect(servers=settings.nats_servers)
        logger.info(f"Connected to NATS servers: {settings.nats_servers}")
    except Exception as e:
        logger.error(f"Failed to connect to NATS: {e}")
        raise
    
    # Initialize generator service
    generator_service = GeneratorService()
    
    # Initialize NATS controller
    nats_controller = NATSController(nc, generator_service)
    await nats_controller.subscribe(topic=settings.nats_topic)
    logger.info(f"NATS controller initialized and subscribed to topic: {settings.nats_topic}")
    
    yield
    
    # Shutdown
    logger.info("Shutting down AI API service...")
    if nc:
        await nc.close()
        logger.info("NATS connection closed")


# Create FastAPI app with lifespan
app = FastAPI(
    title="AI API Service",
    description="AI service for text generation via NATS",
    version="0.1.0",
    lifespan=lifespan
)


@app.get("/")
def root():
    """Health check endpoint."""
    return {
        "message": "AI API Service is running",
        "nats_connected": nc.is_connected if nc else False,
        "nats_topic": settings.nats_topic
    }


@app.get("/health")
def health():
    """Health check endpoint."""
    return {
        "status": "healthy",
        "service": "ai-api",
        "nats_connected": nc.is_connected if nc else False
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host=settings.api_host, port=settings.api_port)
