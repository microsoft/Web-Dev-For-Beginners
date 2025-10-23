<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "0aaa930f076f2d83cc872ad157f8ffd3",
  "translation_date": "2025-10-22T23:30:08+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "it"
}
-->
# Esegui il codice

## Configurazione

Crea un ambiente virtuale

```sh
python -m venv venv
source ./venv/bin/activate
```

## Installa le dipendenze

```sh
pip install openai fastapi uvicorn python-dotenv
```

## Avvia l'API

```sh
# Method 1: Direct execution
python api.py

# Method 2: Using uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## Testa l'API

Visita la documentazione interattiva dell'API su: `http://localhost:5000/docs`

## Avvia il frontend

Assicurati di trovarti nella cartella del frontend

Trova *app.js*, cambia `BASE_URL` con l'URL del tuo backend

Avvialo

```
npx http-server -p 8000
```

Prova a digitare un messaggio nella chat, dovresti vedere una risposta (a condizione che tu stia eseguendo questo in un Codespace o abbia configurato un token di accesso).

## Configura il token di accesso (se non stai eseguendo questo in un Codespace)

Consulta [Configura PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione AI [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale umana. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.