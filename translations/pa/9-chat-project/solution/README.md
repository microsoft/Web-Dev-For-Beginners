<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7b7f54b13f9e6683a844d173ffdd766",
  "translation_date": "2025-08-28T17:22:06+00:00",
  "source_file": "9-chat-project/solution/README.md",
  "language_code": "pa"
}
-->
# ਕੋਡ ਚਲਾਓ

## ਸੈਟਅੱਪ

ਵਰਚੁਅਲ ਐਨਵਾਇਰਨਮੈਂਟ ਬਣਾਓ

```sh
cd backend
python -m venv venv
source ./venv/bin/activate
```

## ਡਿਪੈਂਡੈਂਸੀਜ਼ ਇੰਸਟਾਲ ਕਰੋ

```sh
pip install openai flask flask-cors 
```

## API ਚਲਾਓ

```sh
python api.py
```

## ਫਰੰਟਐਂਡ ਚਲਾਓ

ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਤੁਸੀਂ ਫਰੰਟਐਂਡ ਫੋਲਡਰ ਵਿੱਚ ਹੋ

*app.js* ਨੂੰ ਲੱਭੋ, `BASE_URL` ਨੂੰ ਆਪਣੇ ਬੈਕਐਂਡ URL ਨਾਲ ਬਦਲੋ

ਇਸਨੂੰ ਚਲਾਓ

```
npx http-server -p 8000
```

ਚੈਟ ਵਿੱਚ ਕੋਈ ਸੁਨੇਹਾ ਟਾਈਪ ਕਰਨ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰੋ, ਤੁਹਾਨੂੰ ਇੱਕ ਜਵਾਬ ਮਿਲਣਾ ਚਾਹੀਦਾ ਹੈ (ਜੇ ਤੁਸੀਂ ਇਸਨੂੰ Codespace ਵਿੱਚ ਚਲਾ ਰਹੇ ਹੋ ਜਾਂ ਇੱਕ ਐਕਸੈਸ ਟੋਕਨ ਸੈਟਅੱਪ ਕੀਤਾ ਹੋਇਆ ਹੈ)।

## ਐਕਸੈਸ ਟੋਕਨ ਸੈਟਅੱਪ ਕਰੋ (ਜੇਕਰ ਤੁਸੀਂ ਇਸਨੂੰ Codespace ਵਿੱਚ ਨਹੀਂ ਚਲਾਉਂਦੇ)

[ਪੈਟ ਸੈਟਅੱਪ ਕਰੋ](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) ਨੂੰ ਵੇਖੋ

---

**ਅਸਵੀਕਤੀ**:  
ਇਹ ਦਸਤਾਵੇਜ਼ AI ਅਨੁਵਾਦ ਸੇਵਾ [Co-op Translator](https://github.com/Azure/co-op-translator) ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਅਨੁਵਾਦ ਕੀਤਾ ਗਿਆ ਹੈ। ਜਦੋਂ ਕਿ ਅਸੀਂ ਸਹੀਤਾ ਲਈ ਯਤਨਸ਼ੀਲ ਹਾਂ, ਕਿਰਪਾ ਕਰਕੇ ਧਿਆਨ ਦਿਓ ਕਿ ਸਵੈਚਾਲਿਤ ਅਨੁਵਾਦਾਂ ਵਿੱਚ ਗਲਤੀਆਂ ਜਾਂ ਅਸੁੱਤੀਆਂ ਹੋ ਸਕਦੀਆਂ ਹਨ। ਮੂਲ ਦਸਤਾਵੇਜ਼ ਨੂੰ ਇਸਦੀ ਮੂਲ ਭਾਸ਼ਾ ਵਿੱਚ ਅਧਿਕਾਰਤ ਸਰੋਤ ਮੰਨਿਆ ਜਾਣਾ ਚਾਹੀਦਾ ਹੈ। ਮਹੱਤਵਪੂਰਨ ਜਾਣਕਾਰੀ ਲਈ, ਪੇਸ਼ੇਵਰ ਮਨੁੱਖੀ ਅਨੁਵਾਦ ਦੀ ਸਿਫਾਰਸ਼ ਕੀਤੀ ਜਾਂਦੀ ਹੈ। ਇਸ ਅਨੁਵਾਦ ਦੀ ਵਰਤੋਂ ਤੋਂ ਪੈਦਾ ਹੋਣ ਵਾਲੇ ਕਿਸੇ ਵੀ ਗਲਤਫਹਿਮੀ ਜਾਂ ਗਲਤ ਵਿਆਖਿਆ ਲਈ ਅਸੀਂ ਜ਼ਿੰਮੇਵਾਰ ਨਹੀਂ ਹਾਂ।