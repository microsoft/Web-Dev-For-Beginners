<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7b7f54b13f9e6683a844d173ffdd766",
  "translation_date": "2025-08-29T09:49:03+00:00",
  "source_file": "9-chat-project/solution/README.md",
  "language_code": "no"
}
-->
# Kjør kode

## Oppsett

Opprett et virtuelt miljø

```sh
cd backend
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
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi tilstreber nøyaktighet, vennligst vær oppmerksom på at automatiske oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for eventuelle misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.