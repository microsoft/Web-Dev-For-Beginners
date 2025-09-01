<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "537f02a36d73db093cbb8b9b44867645",
  "translation_date": "2025-09-01T15:48:08+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "sv"
}
-->
# Kör kod

## Ställ in

Skapa en virtuell miljö

```sh
python -m venv venv
source ./venv/bin/activate
```

## Installera beroenden

```sh
pip install openai flask flask-cors 
```

## Kör API

```sh
python api.py
```

## Kör frontend

Se till att du befinner dig i frontend-mappen

Leta upp *app.js*, ändra `BASE_URL` till din backend-URL

Kör det

```
npx http-server -p 8000
```

Prova att skriva ett meddelande i chatten, du bör se ett svar (förutsatt att du kör detta i en Codespace eller har ställt in en åtkomsttoken).

## Ställ in åtkomsttoken (om du inte kör detta i en Codespace)

Se [Ställ in PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör du vara medveten om att automatiska översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess ursprungliga språk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.