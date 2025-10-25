<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "0aaa930f076f2d83cc872ad157f8ffd3",
  "translation_date": "2025-10-25T00:31:55+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "sl"
}
-->
# Zaženi kodo

## Nastavitev

Ustvari virtualno okolje

```sh
python -m venv venv
source ./venv/bin/activate
```

## Namesti odvisnosti

```sh
pip install openai fastapi uvicorn python-dotenv
```

## Zaženi API

```sh
# Method 1: Direct execution
python api.py

# Method 2: Using uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## Testiraj API

Obišči interaktivno dokumentacijo API na: `http://localhost:5000/docs`

## Zaženi frontend

Prepričaj se, da si v mapi frontend

Poišči *app.js*, spremeni `BASE_URL` na URL svojega backend-a

Zaženi

```
npx http-server -p 8000
```

Poskusi vtipkati sporočilo v klepet, moral bi videti odgovor (če to izvajaš v Codespace ali si nastavil dostopni žeton).

## Nastavi dostopni žeton (če tega ne izvajaš v Codespace)

Glej [Nastavitev PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje AI [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku naj se šteje za avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne odgovarjamo za morebitna nesporazumevanja ali napačne razlage, ki izhajajo iz uporabe tega prevoda.