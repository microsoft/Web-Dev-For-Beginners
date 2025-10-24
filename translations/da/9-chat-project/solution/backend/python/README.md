<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "0aaa930f076f2d83cc872ad157f8ffd3",
  "translation_date": "2025-10-23T22:02:10+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "da"
}
-->
# Kør kode

## Opsætning

Opret virtuelt miljø

```sh
python -m venv venv
source ./venv/bin/activate
```

## Installer afhængigheder

```sh
pip install openai fastapi uvicorn python-dotenv
```

## Kør API

```sh
# Method 1: Direct execution
python api.py

# Method 2: Using uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## Test API

Besøg den interaktive API-dokumentation på: `http://localhost:5000/docs`

## Kør frontend

Sørg for, at du står i frontend-mappen

Find *app.js*, ændr `BASE_URL` til URL'en for din backend

Kør det

```
npx http-server -p 8000
```

Prøv at skrive en besked i chatten, du bør se et svar (forudsat at du kører dette i en Codespace eller har opsat en adgangstoken).

## Opsæt adgangstoken (hvis du ikke kører dette i en Codespace)

Se [Opsæt PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi er ikke ansvarlige for eventuelle misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.