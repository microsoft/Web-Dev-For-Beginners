<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "0aaa930f076f2d83cc872ad157f8ffd3",
  "translation_date": "2025-10-22T17:45:55+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "pa"
}
-->
# ਕੋਡ ਚਲਾਓ

## ਸੈਟਅੱਪ

ਵਰਚੁਅਲ ਵਾਤਾਵਰਨ ਬਣਾਓ

```sh
python -m venv venv
source ./venv/bin/activate
```

## Dependencies ਇੰਸਟਾਲ ਕਰੋ

```sh
pip install openai fastapi uvicorn python-dotenv
```

## API ਚਲਾਓ

```sh
# Method 1: Direct execution
python api.py

# Method 2: Using uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## API ਟੈਸਟ ਕਰੋ

ਇੰਟਰਐਕਟਿਵ API ਡੌਕੂਮੈਂਟੇਸ਼ਨ 'ਤੇ ਜਾਓ: `http://localhost:5000/docs`

## ਫਰੰਟਐਂਡ ਚਲਾਓ

ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਤੁਸੀਂ ਫਰੰਟਐਂਡ ਫੋਲਡਰ ਵਿੱਚ ਹੋ

*app.js* ਲੱਭੋ, `BASE_URL` ਨੂੰ ਆਪਣੇ ਬੈਕਐਂਡ URL ਵਿੱਚ ਬਦਲੋ

ਇਸਨੂੰ ਚਲਾਓ

```
npx http-server -p 8000
```

ਚੈਟ ਵਿੱਚ ਕੋਈ ਸੁਨੇਹਾ ਟਾਈਪ ਕਰਨ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰੋ, ਤੁਹਾਨੂੰ ਜਵਾਬ ਮਿਲਣਾ ਚਾਹੀਦਾ ਹੈ (ਜੇਕਰ ਤੁਸੀਂ ਇਸਨੂੰ Codespace ਵਿੱਚ ਚਲਾ ਰਹੇ ਹੋ ਜਾਂ ਪਹੁੰਚ ਟੋਕਨ ਸੈਟਅੱਪ ਕੀਤਾ ਹੈ)।

## ਪਹੁੰਚ ਟੋਕਨ ਸੈਟਅੱਪ ਕਰੋ (ਜੇਕਰ ਤੁਸੀਂ ਇਸਨੂੰ Codespace ਵਿੱਚ ਨਹੀਂ ਚਲਾ ਰਹੇ)

[PAT ਸੈਟਅੱਪ ਕਰੋ](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**ਅਸਵੀਕਰਤਾ**:  
ਇਹ ਦਸਤਾਵੇਜ਼ AI ਅਨੁਵਾਦ ਸੇਵਾ [Co-op Translator](https://github.com/Azure/co-op-translator) ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਅਨੁਵਾਦ ਕੀਤਾ ਗਿਆ ਹੈ। ਜਦੋਂ ਕਿ ਅਸੀਂ ਸਹੀ ਹੋਣ ਦਾ ਯਤਨ ਕਰਦੇ ਹਾਂ, ਕਿਰਪਾ ਕਰਕੇ ਧਿਆਨ ਦਿਓ ਕਿ ਸਵੈਚਾਲਿਤ ਅਨੁਵਾਦਾਂ ਵਿੱਚ ਗਲਤੀਆਂ ਜਾਂ ਅਸੁਚਤਤਾਵਾਂ ਹੋ ਸਕਦੀਆਂ ਹਨ। ਇਸ ਦੀ ਮੂਲ ਭਾਸ਼ਾ ਵਿੱਚ ਮੂਲ ਦਸਤਾਵੇਜ਼ ਨੂੰ ਅਧਿਕਾਰਤ ਸਰੋਤ ਮੰਨਿਆ ਜਾਣਾ ਚਾਹੀਦਾ ਹੈ। ਮਹੱਤਵਪੂਰਨ ਜਾਣਕਾਰੀ ਲਈ, ਪੇਸ਼ੇਵਰ ਮਨੁੱਖੀ ਅਨੁਵਾਦ ਦੀ ਸਿਫਾਰਸ਼ ਕੀਤੀ ਜਾਂਦੀ ਹੈ। ਇਸ ਅਨੁਵਾਦ ਦੀ ਵਰਤੋਂ ਤੋਂ ਪੈਦਾ ਹੋਣ ਵਾਲੇ ਕਿਸੇ ਵੀ ਗਲਤਫਹਿਮੀ ਜਾਂ ਗਲਤ ਵਿਆਖਿਆ ਲਈ ਅਸੀਂ ਜ਼ਿੰਮੇਵਾਰ ਨਹੀਂ ਹਾਂ।