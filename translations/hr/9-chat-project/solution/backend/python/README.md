<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "537f02a36d73db093cbb8b9b44867645",
  "translation_date": "2025-09-01T15:50:00+00:00",
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
pip install openai flask flask-cors 
```

## Pokreni API

```sh
python api.py
```

## Pokreni frontend

Provjeri da se nalaziš u mapi frontend

Pronađi *app.js*, promijeni `BASE_URL` na URL svog backend-a

Pokreni ga

```
npx http-server -p 8000
```

Pokušaj upisati poruku u chat, trebala bi se pojaviti odgovarajuća reakcija (pod uvjetom da ovo pokrećeš u Codespace-u ili si postavio pristupni token).

## Postavi pristupni token (ako ovo ne pokrećeš u Codespace-u)

Pogledaj [Postavljanje PAT-a](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Odricanje od odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za bilo kakva pogrešna tumačenja ili nesporazume koji mogu proizaći iz korištenja ovog prijevoda.