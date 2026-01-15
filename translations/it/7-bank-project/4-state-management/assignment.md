<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "50a7783473b39a2e0f133e271a102231",
  "translation_date": "2025-10-22T23:33:15+00:00",
  "source_file": "7-bank-project/4-state-management/assignment.md",
  "language_code": "it"
}
-->
# Implementare la finestra di dialogo "Aggiungi Transazione"

## Panoramica

La tua app bancaria ora dispone di una solida gestione dello stato e persistenza dei dati, ma manca una funzionalità cruciale che le app bancarie reali devono avere: la possibilità per gli utenti di aggiungere le proprie transazioni. In questo compito, implementerai una finestra di dialogo completa "Aggiungi Transazione" che si integra perfettamente con il tuo sistema di gestione dello stato esistente.

Questo compito riunisce tutto ciò che hai imparato nelle quattro lezioni bancarie: templating HTML, gestione dei moduli, integrazione API e gestione dello stato.

## Obiettivi di apprendimento

Completando questo compito, sarai in grado di:
- **Creare** un'interfaccia di dialogo user-friendly per l'inserimento dei dati
- **Implementare** un design del modulo accessibile con supporto per tastiera e lettori di schermo
- **Integrare** nuove funzionalità con il tuo sistema di gestione dello stato esistente
- **Praticare** la comunicazione con le API e la gestione degli errori
- **Applicare** modelli di sviluppo web moderni a una funzionalità reale

## Istruzioni

### Passaggio 1: Pulsante Aggiungi Transazione

**Crea** un pulsante "Aggiungi Transazione" nella pagina della dashboard che gli utenti possano trovare e utilizzare facilmente.

**Requisiti:**
- **Posiziona** il pulsante in una posizione logica nella dashboard
- **Usa** un testo chiaro e orientato all'azione per il pulsante
- **Stilizza** il pulsante per adattarlo al design della tua interfaccia utente esistente
- **Assicurati** che il pulsante sia accessibile tramite tastiera

### Passaggio 2: Implementazione della finestra di dialogo

Scegli uno dei due approcci per implementare la finestra di dialogo:

**Opzione A: Pagina separata**
- **Crea** un nuovo template HTML per il modulo di transazione
- **Aggiungi** un nuovo percorso al tuo sistema di routing
- **Implementa** la navigazione da e verso la pagina del modulo

**Opzione B: Finestra di dialogo modale (consigliata)**
- **Usa** JavaScript per mostrare/nascondere la finestra di dialogo senza lasciare la dashboard
- **Implementa** utilizzando la proprietà [`hidden`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden) o classi CSS
- **Crea** un'esperienza utente fluida con una corretta gestione del focus

### Passaggio 3: Implementazione dell'accessibilità

**Assicurati** che la tua finestra di dialogo soddisfi gli [standard di accessibilità per le finestre di dialogo modali](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/):

**Navigazione tramite tastiera:**
- **Supporta** il tasto Esc per chiudere la finestra di dialogo
- **Blocca** il focus all'interno della finestra di dialogo quando è aperta
- **Ritorna** il focus al pulsante di attivazione quando la finestra di dialogo è chiusa

**Supporto per lettori di schermo:**
- **Aggiungi** etichette e ruoli ARIA appropriati
- **Annuncia** l'apertura/chiusura della finestra di dialogo ai lettori di schermo
- **Fornisci** etichette chiare per i campi del modulo e messaggi di errore

### Passaggio 4: Creazione del modulo

**Progetta** un modulo HTML che raccolga i dati della transazione:

**Campi obbligatori:**
- **Data**: Quando è avvenuta la transazione
- **Descrizione**: A cosa si riferisce la transazione
- **Importo**: Valore della transazione (positivo per entrate, negativo per spese)

**Caratteristiche del modulo:**
- **Valida** l'input dell'utente prima dell'invio
- **Fornisci** messaggi di errore chiari per i dati non validi
- **Includi** testo di esempio e etichette utili
- **Stilizza** in modo coerente con il tuo design esistente

### Passaggio 5: Integrazione API

**Collega** il tuo modulo all'API backend:

**Passaggi di implementazione:**
- **Consulta** le [specifiche dell'API del server](../api/README.md) per il corretto endpoint e formato dei dati
- **Crea** dati JSON dai tuoi input del modulo
- **Invia** i dati all'API utilizzando una gestione degli errori appropriata
- **Mostra** messaggi di successo/fallimento all'utente
- **Gestisci** gli errori di rete in modo efficace

### Passaggio 6: Integrazione della gestione dello stato

**Aggiorna** la tua dashboard con la nuova transazione:

**Requisiti di integrazione:**
- **Aggiorna** i dati del conto dopo l'aggiunta della transazione con successo
- **Aggiorna** la visualizzazione della dashboard senza richiedere un ricaricamento della pagina
- **Assicurati** che la nuova transazione appaia immediatamente
- **Mantieni** la coerenza dello stato durante tutto il processo

## Specifiche tecniche

**Dettagli dell'endpoint API:**
Consulta la [documentazione dell'API del server](../api/README.md) per:
- Formato JSON richiesto per i dati della transazione
- Metodo HTTP e URL dell'endpoint
- Formato della risposta previsto
- Gestione delle risposte di errore

**Risultato previsto:**
Dopo aver completato questo compito, la tua app bancaria dovrebbe avere una funzionalità "Aggiungi Transazione" completamente operativa che appare e si comporta in modo professionale:

![Screenshot che mostra un esempio di finestra di dialogo "Aggiungi transazione"](../../../../translated_images/it/dialog.93bba104afeb79f1.png)

## Test della tua implementazione

**Test funzionali:**
1. **Verifica** che il pulsante "Aggiungi Transazione" sia chiaramente visibile e accessibile
2. **Testa** che la finestra di dialogo si apra e si chiuda correttamente
3. **Conferma** che la validazione del modulo funzioni per tutti i campi obbligatori
4. **Controlla** che le transazioni effettuate con successo appaiano immediatamente sulla dashboard
5. **Assicurati** che la gestione degli errori funzioni per dati non validi e problemi di rete

**Test di accessibilità:**
1. **Naviga** attraverso l'intero flusso utilizzando solo la tastiera
2. **Testa** con un lettore di schermo per garantire annunci corretti
3. **Verifica** che la gestione del focus funzioni correttamente
4. **Controlla** che tutti gli elementi del modulo abbiano etichette appropriate

## Griglia di valutazione

| Criteri | Esemplare | Adeguato | Da migliorare |
| -------- | --------- | -------- | ------------- |
| **Funzionalità** | La funzionalità di aggiunta delle transazioni funziona perfettamente con un'eccellente esperienza utente e segue tutte le migliori pratiche delle lezioni | La funzionalità di aggiunta delle transazioni funziona correttamente ma potrebbe non seguire alcune migliori pratiche o avere piccoli problemi di usabilità | La funzionalità di aggiunta delle transazioni funziona solo parzialmente o presenta problemi significativi di usabilità |
| **Qualità del codice** | Il codice è ben organizzato, segue modelli consolidati, include una corretta gestione degli errori e si integra perfettamente con la gestione dello stato esistente | Il codice funziona ma potrebbe avere alcuni problemi di organizzazione o modelli incoerenti con il codice esistente | Il codice presenta problemi strutturali significativi o non si integra bene con i modelli esistenti |
| **Accessibilità** | Supporto completo per la navigazione tramite tastiera, compatibilità con lettori di schermo e conformità alle linee guida WCAG con eccellente gestione del focus | Funzionalità di accessibilità di base implementate ma potrebbero mancare alcune caratteristiche di navigazione tramite tastiera o lettori di schermo | Considerazioni limitate o assenti sull'accessibilità |
| **Esperienza utente** | Interfaccia intuitiva e curata con feedback chiari, interazioni fluide e aspetto professionale | Buona esperienza utente con alcune aree da migliorare nel feedback o nel design visivo | Esperienza utente scarsa con interfaccia confusa o mancanza di feedback per l'utente |

## Sfide aggiuntive (opzionali)

Una volta completati i requisiti di base, considera questi miglioramenti:

**Funzionalità avanzate:**
- **Aggiungi** categorie di transazione (cibo, trasporti, intrattenimento, ecc.)
- **Implementa** la validazione degli input con feedback in tempo reale
- **Crea** scorciatoie da tastiera per utenti esperti
- **Aggiungi** funzionalità di modifica e eliminazione delle transazioni

**Integrazione avanzata:**
- **Implementa** la funzionalità di annullamento per le transazioni aggiunte di recente
- **Aggiungi** importazione di transazioni in blocco da file CSV
- **Crea** funzionalità di ricerca e filtraggio delle transazioni
- **Implementa** la funzionalità di esportazione dei dati

Queste funzionalità opzionali ti aiuteranno a praticare concetti di sviluppo web più avanzati e a creare un'app bancaria più completa!

---

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione AI [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale umana. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.