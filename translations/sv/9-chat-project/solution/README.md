<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7b7f54b13f9e6683a844d173ffdd766",
  "translation_date": "2025-08-29T09:48:49+00:00",
  "source_file": "9-chat-project/solution/README.md",
  "language_code": "sv"
}
-->
# Kör kod

## Förberedelser

Skapa en virtuell miljö

```sh
cd backend
python -m venv venv
source ./venv/bin/activate
```

## Installera beroenden

```sh
pip install openai flask flask-cors 
```

## Starta API

```sh
python api.py
```

## Starta frontend

Se till att du befinner dig i frontend-mappen

Leta upp *app.js*, ändra `BASE_URL` till din backend-URL

Kör det

```
npx http-server -p 8000
```

Prova att skriva ett meddelande i chatten, du bör få ett svar (förutsatt att du kör detta i en Codespace eller har ställt in en access token).

## Ställ in access token (om du inte kör detta i en Codespace)

Se [Ställ in PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, vänligen notera att automatiska översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess originalspråk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.