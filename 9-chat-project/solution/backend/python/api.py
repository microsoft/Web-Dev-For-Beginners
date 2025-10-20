from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from llm import call_llm
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Create FastAPI application
app = FastAPI(
    title="AI Chat API",
    description="A high-performance API for AI-powered chat applications",
    version="1.0.0"
)

# Configure CORS (allow all origins for development; restrict in production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models for request/response validation
class ChatMessage(BaseModel):
    message: str

class ChatResponse(BaseModel):
    response: str

class HealthResponse(BaseModel):
    status: str
    service: str

@app.get("/")
async def index():
    """Root endpoint for API status."""
    return {
        "status": "ok",
        "message": "Welcome to the Chat Project API",
        "docs": "/docs",
        "health": "/health"
    }

@app.get("/health", response_model=HealthResponse)
async def health():
    """Health check endpoint."""
    return HealthResponse(status="healthy", service="ai-chat-api")

@app.get("/test")
async def test():
    """Simple test endpoint."""
    return {"result": "Test successful"}

@app.post("/hello", response_model=ChatResponse)
async def hello(chat_message: ChatMessage):
    """
    Chat endpoint.
    Expects JSON: { "message": "your message" }
    Returns: { "response": "LLM response" }
    """
    try:
        message = chat_message.message.strip()
        if not message:
            logger.warning("Empty message provided in request.")
            raise HTTPException(status_code=400, detail="Message cannot be empty")

        logger.info(f"Received message: {message}")
        response = call_llm(message, "You are a helpful assistant.")
        logger.info("LLM response generated successfully")
        return ChatResponse(response=response)

    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error in /hello endpoint: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5000, reload=True)