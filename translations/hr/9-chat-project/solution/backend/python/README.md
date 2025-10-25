<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "0aaa930f076f2d83cc872ad157f8ffd3",
  "translation_date": "2025-10-25T00:01:10+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "hr"
}
-->
# Pokreni kod

## Postavljanje

Kreiraj virtualno okruženje

```sh
python -m venv venv
source ./venv/bin/activate
```

## Instaliraj ovisnosti

```sh
pip install openai fastapi uvicorn python-dotenv
```

## Pokreni API

```sh
# Method 1: Direct execution
python api.py

# Method 2: Using uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## Testiraj API

Posjeti interaktivnu dokumentaciju API-ja na: `http://localhost:5000/docs`

## Pokreni frontend

Provjeri da se nalaziš u mapi frontend

Pronađi *app.js*, promijeni `BASE_URL` na URL svog backend-a

Pokreni ga

```
npx http-server -p 8000
```

Pokušaj upisati poruku u chat, trebao bi vidjeti odgovor (pod uvjetom da ovo pokrećeš u Codespaceu ili si postavio pristupni token).

## Postavi pristupni token (ako ovo ne pokrećeš u Codespaceu)

Pogledaj [Postavljanje PAT-a](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Izjava o odricanju odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za nesporazume ili pogrešna tumačenja koja proizlaze iz korištenja ovog prijevoda.