<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a4abf305ede1cfaadd56a8fab4b4c288",
  "translation_date": "2025-08-26T00:29:07+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "it"
}
-->
# Rifattorizza e commenta il tuo codice

## Istruzioni

Man mano che il tuo codice cresce, è importante rifattorizzarlo frequentemente per mantenerlo leggibile e gestibile nel tempo. Aggiungi commenti e rifattorizza il tuo `app.js` per migliorare la qualità del codice:

- Estrai le costanti, come l'URL base dell'API del server
- Fattorizza il codice simile: ad esempio, puoi creare una funzione `sendRequest()` per raggruppare il codice utilizzato sia in `createAccount()` che in `getAccount()`
- Riorganizza il codice per renderlo più facile da leggere e aggiungi commenti

## Criteri di valutazione

| Criteri  | Esemplare                                                                                                                                                     | Adeguato                                                                                         | Da migliorare                                                                         |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
|          | Il codice è commentato, ben organizzato in diverse sezioni e facile da leggere. Le costanti sono estratte e una funzione `sendRequest()` fattorizzata è stata creata. | Il codice è pulito ma può essere ulteriormente migliorato con più commenti, estrazione di costanti o fattorizzazione. | Il codice è disordinato, non commentato, le costanti non sono estratte e il codice non è fattorizzato. |

**Disclaimer (Avvertenza)**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione automatica [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di tenere presente che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale effettuata da un traduttore umano. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.