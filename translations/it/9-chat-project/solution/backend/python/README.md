<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "537f02a36d73db093cbb8b9b44867645",
  "translation_date": "2025-09-01T15:47:37+00:00",
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
pip install openai flask flask-cors 
```

## Esegui l'API

```sh
python api.py
```

## Esegui il frontend

Assicurati di trovarti nella cartella del frontend

Trova *app.js*, modifica `BASE_URL` con l'URL del tuo backend

Eseguilo

```
npx http-server -p 8000
```

Prova a digitare un messaggio nella chat, dovresti vedere una risposta (a condizione che tu stia eseguendo questo in un Codespace o abbia configurato un token di accesso).

## Configura il token di accesso (se non stai eseguendo questo in un Codespace)

Consulta [Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione automatica [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale effettuata da un traduttore umano. Non siamo responsabili per eventuali fraintendimenti o interpretazioni errate derivanti dall'uso di questa traduzione.