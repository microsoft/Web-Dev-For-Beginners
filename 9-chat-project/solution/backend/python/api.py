from flask import Flask, request, jsonify
from llm import call_llm
from flask_cors import CORS
import logging

app = Flask(__name__)

# Configure CORS (allow all origins for development; restrict in production)
CORS(app, resources={r"/*": {"origins": "*"}})

# Set up logging
logging.basicConfig(level=logging.INFO)

@app.route("/", methods=["GET"])
def index():
    """Root endpoint for API status."""
    return jsonify({
        "status": "ok",
        "message": "Welcome to the Chat Project API"
    })

@app.route("/health", methods=["GET"])
def health():
    """Health check endpoint."""
    return jsonify({"status": "healthy"}), 200

@app.route("/test", methods=["GET"])
def test():
    """Simple test endpoint."""
    return jsonify({"result": "Test successful"}), 200

@app.route("/hello", methods=["POST"])
def hello():
    """
    Chat endpoint.
    Expects JSON: { "message": "your message" }
    Returns: { "response": "LLM response" }
    """
    try:
        data = request.get_json(force=True)
        message = data.get("message", "").strip()
        if not message:
            logging.warning("No message provided in request.")
            return jsonify({"error": "No message provided."}), 400

        logging.info(f"Received message: {message}")
        response = call_llm(message, "You are a helpful assistant.")
        return jsonify({"response": response}), 200

    except Exception as e:
        logging.error(f"Error in /hello endpoint: {e}")
        return jsonify({"error": "Internal server error."}), 500

if __name__ == "__main__":
    # Run the app with debug mode for development
    app.run(host="0.0.0.0", port=5000, debug=True)