<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "537f02a36d73db093cbb8b9b44867645",
  "translation_date": "2025-09-01T15:47:14+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "pa"
}
-->
# ਕੋਡ ਚਲਾਓ

## ਸੈਟਅੱਪ

ਵਰਚੁਅਲ ਐਨਵਾਇਰਨਮੈਂਟ ਬਣਾਓ

```sh
python -m venv venv
source ./venv/bin/activate
```

## Dependencies ਇੰਸਟਾਲ ਕਰੋ

```sh
pip install openai flask flask-cors 
```

## API ਚਲਾਓ

```sh
python api.py
```

## ਫਰੰਟਐਂਡ ਚਲਾਓ

ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਤੁਸੀਂ ਫਰੰਟਐਂਡ ਫੋਲਡਰ ਵਿੱਚ ਹੋ

*app.js* ਲੱਭੋ, `BASE_URL` ਨੂੰ ਆਪਣੇ ਬੈਕਐਂਡ URL ਵਿੱਚ ਬਦਲੋ

ਇਸਨੂੰ ਚਲਾਓ

```
npx http-server -p 8000
```

ਚੈਟ ਵਿੱਚ ਕੋਈ ਸੁਨੇਹਾ ਟਾਈਪ ਕਰਨ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰੋ, ਤੁਹਾਨੂੰ ਜਵਾਬ ਮਿਲਣਾ ਚਾਹੀਦਾ ਹੈ (ਜੇ ਤੁਸੀਂ ਇਸਨੂੰ Codespace ਵਿੱਚ ਚਲਾ ਰਹੇ ਹੋ ਜਾਂ ਪਹੁੰਚ ਟੋਕਨ ਸੈਟਅੱਪ ਕੀਤਾ ਹੈ)।

## ਪਹੁੰਚ ਟੋਕਨ ਸੈਟਅੱਪ ਕਰੋ (ਜੇ ਤੁਸੀਂ ਇਸਨੂੰ Codespace ਵਿੱਚ ਨਹੀਂ ਚਲਾ ਰਹੇ)

[Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) ਵੇਖੋ

---

**ਅਸਵੀਕਤੀ**:  
ਇਹ ਦਸਤਾਵੇਜ਼ AI ਅਨੁਵਾਦ ਸੇਵਾ [Co-op Translator](https://github.com/Azure/co-op-translator) ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਅਨੁਵਾਦ ਕੀਤਾ ਗਿਆ ਹੈ। ਜਦੋਂ ਕਿ ਅਸੀਂ ਸਹੀ ਹੋਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰਦੇ ਹਾਂ, ਕਿਰਪਾ ਕਰਕੇ ਧਿਆਨ ਦਿਓ ਕਿ ਸਵੈਚਾਲਿਤ ਅਨੁਵਾਦਾਂ ਵਿੱਚ ਗਲਤੀਆਂ ਜਾਂ ਅਸੁਚੀਤਤਾਵਾਂ ਹੋ ਸਕਦੀਆਂ ਹਨ। ਮੂਲ ਦਸਤਾਵੇਜ਼ ਨੂੰ ਇਸਦੀ ਮੂਲ ਭਾਸ਼ਾ ਵਿੱਚ ਅਧਿਕਾਰਤ ਸਰੋਤ ਮੰਨਿਆ ਜਾਣਾ ਚਾਹੀਦਾ ਹੈ। ਮਹੱਤਵਪੂਰਨ ਜਾਣਕਾਰੀ ਲਈ, ਪੇਸ਼ੇਵਰ ਮਨੁੱਖੀ ਅਨੁਵਾਦ ਦੀ ਸਿਫਾਰਸ਼ ਕੀਤੀ ਜਾਂਦੀ ਹੈ। ਇਸ ਅਨੁਵਾਦ ਦੀ ਵਰਤੋਂ ਤੋਂ ਪੈਦਾ ਹੋਣ ਵਾਲੇ ਕਿਸੇ ਵੀ ਗਲਤ ਫਹਿਮੀ ਜਾਂ ਗਲਤ ਵਿਆਖਿਆ ਲਈ ਅਸੀਂ ਜ਼ਿੰਮੇਵਾਰ ਨਹੀਂ ਹਾਂ।