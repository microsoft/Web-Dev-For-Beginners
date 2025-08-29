<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7b7f54b13f9e6683a844d173ffdd766",
  "translation_date": "2025-08-29T17:07:33+00:00",
  "source_file": "9-chat-project/solution/README.md",
  "language_code": "en"
}
-->
# Run code

## Set up

Create a virtual environment

```sh
cd backend
python -m venv venv
source ./venv/bin/activate
```

## Install dependencies

```sh
pip install openai flask flask-cors 
```

## Run API

```sh
python api.py
```

## Run frontend

Make sure you're in the frontend folder

Find *app.js*, and update `BASE_URL` to match your backend URL

Run the application

```
npx http-server -p 8000
```

Try typing a message in the chat; you should see a response (assuming you're running this in a Codespace or have set up an access token).

## Set up access token (if you're not running this in a Codespace)

Refer to [Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Disclaimer**:  
This document has been translated using the AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). While we aim for accuracy, please note that automated translations may include errors or inaccuracies. The original document in its native language should be regarded as the authoritative source. For critical information, professional human translation is advised. We are not responsible for any misunderstandings or misinterpretations resulting from the use of this translation.