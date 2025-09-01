<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "537f02a36d73db093cbb8b9b44867645",
  "translation_date": "2025-09-01T15:48:22+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "no"
}
-->
# Kjør kode

## Sett opp

Opprett et virtuelt miljø

```sh
python -m venv venv
source ./venv/bin/activate
```

## Installer avhengigheter

```sh
pip install openai flask flask-cors 
```

## Kjør API

```sh
python api.py
```

## Kjør frontend

Sørg for at du står i frontend-mappen

Finn *app.js*, endre `BASE_URL` til URL-en for din backend

Kjør det

```
npx http-server -p 8000
```

Prøv å skrive en melding i chatten, du bør se et svar (forutsatt at du kjører dette i en Codespace eller har satt opp en tilgangstoken).

## Sett opp tilgangstoken (hvis du ikke kjører dette i en Codespace)

Se [Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.