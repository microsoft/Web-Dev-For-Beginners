<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7b7f54b13f9e6683a844d173ffdd766",
  "translation_date": "2025-08-29T13:05:18+00:00",
  "source_file": "9-chat-project/solution/README.md",
  "language_code": "hr"
}
-->
# Pokreni kod

## Postavljanje

Kreiraj virtualno okruženje

```sh
cd backend
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

Pokušaj upisati poruku u chat, trebao bi vidjeti odgovor (pod uvjetom da ovo pokrećeš u Codespaceu ili da si postavio pristupni token).

## Postavljanje pristupnog tokena (ako ovo ne pokrećeš u Codespaceu)

Pogledaj [Postavljanje PAT-a](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Odricanje od odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati mjerodavnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane stručnjaka. Ne preuzimamo odgovornost za bilo kakve nesporazume ili pogrešne interpretacije proizašle iz korištenja ovog prijevoda.