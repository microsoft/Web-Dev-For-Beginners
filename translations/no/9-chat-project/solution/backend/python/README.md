<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "0aaa930f076f2d83cc872ad157f8ffd3",
  "translation_date": "2025-10-23T22:27:21+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "no"
}
-->
# Kjør kode

## Oppsett

Opprett virtuelt miljø

```sh
python -m venv venv
source ./venv/bin/activate
```

## Installer avhengigheter

```sh
pip install openai fastapi uvicorn python-dotenv
```

## Kjør API

```sh
# Method 1: Direct execution
python api.py

# Method 2: Using uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## Test API

Besøk den interaktive API-dokumentasjonen på: `http://localhost:5000/docs`

## Kjør frontend

Sørg for at du står i frontend-mappen

Finn *app.js*, endre `BASE_URL` til URL-en til din backend

Kjør det

```
npx http-server -p 8000
```

Prøv å skrive en melding i chatten, du bør få et svar (forutsatt at du kjører dette i en Codespace eller har satt opp en tilgangstoken).

## Sett opp tilgangstoken (hvis du ikke kjører dette i en Codespace)

Se [Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi tilstreber nøyaktighet, vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på dets opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for eventuelle misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.