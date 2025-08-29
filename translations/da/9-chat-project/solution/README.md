<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7b7f54b13f9e6683a844d173ffdd766",
  "translation_date": "2025-08-29T09:48:56+00:00",
  "source_file": "9-chat-project/solution/README.md",
  "language_code": "da"
}
-->
# Kør kode

## Opsætning

Opret virtuelt miljø

```sh
cd backend
python -m venv venv
source ./venv/bin/activate
```

## Installer afhængigheder

```sh
pip install openai flask flask-cors 
```

## Kør API

```sh
python api.py
```

## Kør frontend

Sørg for, at du står i frontend-mappen

Find *app.js*, og ændr `BASE_URL` til URL'en for din backend

Kør det

```
npx http-server -p 8000
```

Prøv at skrive en besked i chatten, du bør se et svar (forudsat at du kører dette i en Codespace eller har opsat en adgangstoken).

## Opsæt adgangstoken (hvis du ikke kører dette i en Codespace)

Se [Opsæt PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi påtager os intet ansvar for misforståelser eller fejltolkninger, der måtte opstå som følge af brugen af denne oversættelse.