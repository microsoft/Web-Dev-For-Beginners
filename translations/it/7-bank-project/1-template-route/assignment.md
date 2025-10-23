<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "df0dcecddcd28ea8cbf6ede0ad57d673",
  "translation_date": "2025-10-22T23:35:19+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "it"
}
-->
# Migliora il Routing

## Istruzioni

Ora che hai costruito un sistema di routing di base, è il momento di arricchirlo con funzionalità professionali che migliorano l'esperienza utente e forniscono strumenti migliori per gli sviluppatori. Le applicazioni reali necessitano di più del semplice cambio di template: richiedono titoli di pagina dinamici, hook di ciclo di vita e architetture estensibili.

In questo compito, estenderai la tua implementazione di routing con due funzionalità essenziali che si trovano comunemente nelle applicazioni web in produzione. Questi miglioramenti renderanno la tua app bancaria più raffinata e forniranno una base per funzionalità future.

La dichiarazione delle rotte attualmente contiene solo l'ID del template da utilizzare. Ma quando si visualizza una nuova pagina, a volte è necessario qualcosa di più. Miglioriamo la nostra implementazione di routing con due funzionalità aggiuntive:

### Funzionalità 1: Titoli di Pagina Dinamici
**Obiettivo:** Assegna titoli a ogni template e aggiorna il titolo della finestra con questo nuovo titolo quando il template cambia.

**Perché è importante:**
- **Migliora** l'esperienza utente mostrando titoli descrittivi nella scheda del browser
- **Aumenta** l'accessibilità per lettori di schermo e tecnologie assistive  
- **Fornisce** un contesto migliore per i segnalibri e la cronologia del browser
- **Segue** le migliori pratiche dello sviluppo web professionale

**Approccio di implementazione:**
- **Estendi** l'oggetto delle rotte per includere informazioni sui titoli per ogni rotta
- **Modifica** la funzione `updateRoute()` per aggiornare dinamicamente `document.title`
- **Testa** che i titoli cambino correttamente durante la navigazione tra le schermate

### Funzionalità 2: Hook di Ciclo di Vita delle Rotte  
**Obiettivo:** Aggiungi un'opzione per eseguire del codice dopo il cambio del template. Vogliamo stampare `'Dashboard è mostrato'` nella console dello sviluppatore ogni volta che viene visualizzata la pagina del dashboard.

**Perché è importante:**
- **Consente** l'esecuzione di logiche personalizzate quando vengono caricate rotte specifiche
- **Fornisce** hook per analisi, registrazione o codice di inizializzazione
- **Crea** una base per comportamenti di rotta più complessi
- **Dimostra** il pattern observer nello sviluppo web

**Approccio di implementazione:**
- **Aggiungi** una proprietà opzionale di funzione di callback alle configurazioni delle rotte
- **Esegui** la funzione di callback (se presente) dopo il completamento del rendering del template
- **Assicurati** che la funzionalità funzioni per qualsiasi rotta con una callback definita
- **Testa** che il messaggio della console appaia quando si visita il dashboard

## Criteri di Valutazione

| Criteri | Esemplare                                                                                                                          | Adeguato                                                                                                                                                                                  | Da Migliorare                                       |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|          | Le due funzionalità sono implementate e funzionano. Il titolo e l'aggiunta di codice funzionano anche per una nuova rotta aggiunta nella dichiarazione `routes`. | Le due funzionalità funzionano, ma il comportamento è hardcoded e non configurabile tramite la dichiarazione `routes`. Aggiungere una terza rotta con titolo e aggiunta di codice non funziona o funziona parzialmente. | Una delle funzionalità manca o non funziona correttamente. |

---

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione AI [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale umana. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.