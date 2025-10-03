import os
import logging
from openai import OpenAI

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Environment variable check for GitHub token
GITHUB_TOKEN = os.environ.get("GITHUB_TOKEN")
if not GITHUB_TOKEN:
    logger.error("GITHUB_TOKEN environment variable not set.")
    raise EnvironmentError("GITHUB_TOKEN environment variable not set.")

# Model and endpoint configuration
MODEL_NAME = os.environ.get("LLM_MODEL", "openai/gpt-4o-mini")
BASE_URL = os.environ.get("LLM_BASE_URL", "https://models.github.ai/inference")

# Initialize OpenAI client
client = OpenAI(
    base_url=BASE_URL,
    api_key=GITHUB_TOKEN,
)

def call_llm(prompt: str, system_message: str, temperature: float = 1.0, max_tokens: int = 4096, top_p: float = 1.0) -> str:
    """
    Calls the LLM with the given prompt and system message.
    Returns the model's response as a string.
    """
    try:
        logger.info(f"Calling LLM model '{MODEL_NAME}' with prompt: {prompt}")
        response = client.chat.completions.create(
            messages=[
                {"role": "system", "content": system_message},
                {"role": "user", "content": prompt}
            ],
            model=MODEL_NAME,
            temperature=temperature,
            max_tokens=max_tokens,
            top_p=top_p
        )
        content = response.choices[0].message.content
        logger.info("LLM response received successfully.")
        return content
    except Exception as e:
        logger.error(f"Error calling LLM: {e}")
        return "Sorry, there was an error processing your request."

# Example usage (for testing)
if __name__ == "__main__":
    test_prompt = "Hello, how are you?"
    test_system = "You are a friendly assistant."
    print(call_llm(test_prompt, test_system))