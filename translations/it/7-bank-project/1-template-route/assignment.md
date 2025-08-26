<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8223e429218befa731dd5bfd22299520",
  "translation_date": "2025-08-26T00:38:48+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "it"
}
-->
# Migliora il routing

## Istruzioni

La dichiarazione delle rotte attualmente contiene solo l'ID del template da utilizzare. Tuttavia, quando si visualizza una nuova pagina, a volte è necessario qualcosa in più. Miglioriamo la nostra implementazione del routing con due funzionalità aggiuntive:

- Assegna titoli a ciascun template e aggiorna il titolo della finestra con questo nuovo titolo quando il template cambia.
- Aggiungi un'opzione per eseguire del codice dopo il cambio del template. Vogliamo stampare `'Dashboard is shown'` nella console dello sviluppatore ogni volta che viene visualizzata la pagina del dashboard.

## Criteri di valutazione

| Criteri  | Esemplare                                                                                                                          | Adeguato                                                                                                                                                                                  | Da migliorare                                         |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|          | Le due funzionalità sono implementate e funzionano. L'aggiunta di titolo e codice funziona anche per una nuova rotta aggiunta nella dichiarazione `routes`.                | Le due funzionalità funzionano, ma il comportamento è codificato e non configurabile tramite la dichiarazione `routes`. L'aggiunta di una terza rotta con titolo e codice non funziona o funziona parzialmente. | Una delle funzionalità manca o non funziona correttamente. |

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione automatica [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale effettuata da un traduttore umano. Non siamo responsabili per eventuali fraintendimenti o interpretazioni errate derivanti dall'uso di questa traduzione.