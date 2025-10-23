<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d0a02cb117e91a5b5f24178080068a3d",
  "translation_date": "2025-10-22T23:34:24+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "it"
}
-->
# Compito di Refactoring del Codice e Documentazione

## Obiettivi di Apprendimento

Completando questo compito, praticherai competenze essenziali di sviluppo software che gli sviluppatori professionisti utilizzano quotidianamente. Imparerai a organizzare il codice per renderlo più manutenibile, ridurre la duplicazione attraverso l'astrazione e documentare il tuo lavoro per futuri sviluppatori (incluso te stesso!).

Un codice pulito e ben documentato è cruciale per progetti di sviluppo web reali, dove collaborano più sviluppatori e le basi di codice evolvono nel tempo.

## Panoramica del Compito

Il file `app.js` della tua app bancaria è cresciuto significativamente con funzionalità di login, registrazione e dashboard. È il momento di rifattorizzare questo codice utilizzando pratiche di sviluppo professionali per migliorarne la leggibilità, la manutenibilità e ridurre la duplicazione.

## Istruzioni

Trasforma il tuo attuale codice `app.js` implementando queste tre tecniche principali di refactoring:

### 1. Estrai Costanti di Configurazione

**Compito**: Crea una sezione di configurazione all'inizio del file con costanti riutilizzabili.

**Guida all'implementazione:**
- Estrai l'URL base dell'API del server (attualmente hardcoded in più punti)
- Crea costanti per i messaggi di errore che appaiono in più funzioni
- Considera di estrarre i percorsi delle rotte e gli ID degli elementi utilizzati ripetutamente

**Esempio di struttura:**
```javascript
// Configuration constants
const API_BASE_URL = 'http://localhost:5000/api';
const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard'
};
```

### 2. Crea una Funzione Unificata per le Richieste

**Compito**: Costruisci una funzione riutilizzabile `sendRequest()` che elimini il codice duplicato tra `createAccount()` e `getAccount()`.

**Requisiti:**
- Gestire sia richieste GET che POST
- Includere una gestione degli errori adeguata
- Supportare diversi endpoint URL
- Accettare dati opzionali nel corpo della richiesta

**Guida alla firma della funzione:**
```javascript
async function sendRequest(endpoint, method = 'GET', data = null) {
  // Your implementation here
}
```

### 3. Aggiungi Documentazione Professionale al Codice

**Compito**: Documenta il tuo codice con commenti chiari e utili che spiegano il "perché" dietro la tua logica.

**Standard di documentazione:**
- Aggiungi documentazione alle funzioni spiegando scopo, parametri e valori restituiti
- Includi commenti inline per logiche complesse o regole aziendali
- Raggruppa le funzioni correlate con intestazioni di sezione
- Spiega eventuali pattern di codice non ovvi o workaround specifici per il browser

**Esempio di stile di documentazione:**
```javascript
/**
 * Authenticates user and redirects to dashboard
 * @param {Event} event - Form submission event
 * @returns {Promise<void>} - Resolves when login process completes
 */
async function login(event) {
  // Prevent default form submission to handle with JavaScript
  event.preventDefault();
  
  // Your implementation...
}
```

## Criteri di Successo

Il tuo codice rifattorizzato dovrebbe dimostrare queste pratiche di sviluppo professionale:

### Implementazione Esemplare
- ✅ **Costanti**: Tutte le stringhe magiche e gli URL sono estratti in costanti chiaramente denominate
- ✅ **Principio DRY**: La logica comune delle richieste è consolidata in una funzione riutilizzabile `sendRequest()`
- ✅ **Documentazione**: Le funzioni hanno commenti JSDoc chiari che spiegano scopo e parametri
- ✅ **Organizzazione**: Il codice è raggruppato logicamente con intestazioni di sezione e formattazione coerente
- ✅ **Gestione degli Errori**: Migliorata la gestione degli errori utilizzando la nuova funzione di richiesta

### Implementazione Adeguata
- ✅ **Costanti**: La maggior parte dei valori ripetuti è estratta, con alcune piccole eccezioni hardcoded
- ✅ **Fattorizzazione**: Creata una funzione base `sendRequest()`, ma potrebbe non gestire tutti i casi limite
- ✅ **Commenti**: Le funzioni principali sono documentate, anche se alcune spiegazioni potrebbero essere più complete
- ✅ **Leggibilità**: Il codice è generalmente ben organizzato con alcune aree da migliorare

### Necessita di Miglioramenti
- ❌ **Costanti**: Molte stringhe magiche e URL rimangono hardcoded nel file
- ❌ **Duplicazione**: Rimane una significativa duplicazione di codice tra funzioni simili
- ❌ **Documentazione**: Commenti mancanti o inadeguati che non spiegano lo scopo del codice
- ❌ **Organizzazione**: Il codice manca di una struttura chiara e di un raggruppamento logico

## Test del Codice Rifattorizzato

Dopo il refactoring, assicurati che la tua app bancaria funzioni ancora correttamente:

1. **Testa tutti i flussi utente**: Registrazione, login, visualizzazione del dashboard e gestione degli errori
2. **Verifica le chiamate API**: Conferma che la tua funzione `sendRequest()` funzioni sia per la creazione che per il recupero dell'account
3. **Controlla gli scenari di errore**: Testa con credenziali non valide e errori di rete
4. **Rivedi l'output della console**: Assicurati che non siano stati introdotti nuovi errori durante il refactoring

## Linee Guida per la Consegna

Invia il file `app.js` rifattorizzato con:
- Intestazioni di sezione chiare che organizzano le diverse funzionalità
- Formattazione e indentazione del codice coerenti
- Documentazione JSDoc completa per tutte le funzioni
- Un breve commento all'inizio che spiega il tuo approccio al refactoring

**Sfida Bonus**: Crea un semplice file di documentazione del codice (`CODE_STRUCTURE.md`) che spieghi l'architettura della tua app e come le diverse funzioni lavorano insieme.

## Connessione al Mondo Reale

Questo compito rispecchia il tipo di manutenzione del codice che gli sviluppatori professionisti svolgono regolarmente. In contesti industriali:
- **Revisioni del codice** valutano la leggibilità e la manutenibilità come in questo compito
- **Debito tecnico** si accumula quando il codice non viene rifattorizzato e documentato regolarmente
- **Collaborazione di squadra** dipende da un codice chiaro e ben documentato che i nuovi membri del team possono comprendere
- **Correzione di bug** è molto più semplice in basi di codice ben organizzate con astrazioni adeguate

Le competenze che stai praticando qui - estrazione di costanti, eliminazione della duplicazione e scrittura di documentazione chiara - sono fondamentali per lo sviluppo software professionale.

---

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione AI [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale umana. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.