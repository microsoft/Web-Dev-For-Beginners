# Kör kod

## Ställ in

Skapa en virtuell miljö

```sh
python -m venv venv
source ./venv/bin/activate
```

## Installera beroenden

```sh
pip install openai fastapi uvicorn python-dotenv
```

## Kör API

```sh
# Method 1: Direct execution
python api.py

# Method 2: Using uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## Testa API

Besök den interaktiva API-dokumentationen på: `http://localhost:5000/docs`

## Kör frontend

Se till att du står i frontend-mappen

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
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiserade översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess ursprungliga språk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.