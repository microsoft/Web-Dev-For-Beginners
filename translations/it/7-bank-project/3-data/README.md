<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "86ee5069f27ea3151389d8687c95fac9",
  "translation_date": "2025-11-04T00:31:04+00:00",
  "source_file": "7-bank-project/3-data/README.md",
  "language_code": "it"
}
-->
# Costruire un'app bancaria Parte 3: Metodi per recuperare e utilizzare i dati

Pensa al computer dell'Enterprise in Star Trek: quando il Capitano Picard chiede lo stato della nave, le informazioni appaiono istantaneamente senza che l'interfaccia si blocchi o si ricostruisca completamente. Quel flusso continuo di informazioni è esattamente ciò che stiamo costruendo qui con il recupero dinamico dei dati.

Al momento, la tua app bancaria è come un giornale stampato: informativa ma statica. La trasformeremo in qualcosa di simile al centro di controllo della NASA, dove i dati scorrono continuamente e si aggiornano in tempo reale senza interrompere il flusso di lavoro dell'utente.

Imparerai a comunicare con i server in modo asincrono, gestire i dati che arrivano in momenti diversi e trasformare informazioni grezze in qualcosa di significativo per i tuoi utenti. Questa è la differenza tra una demo e un software pronto per la produzione.

## ⚡ Cosa puoi fare nei prossimi 5 minuti

**Percorso rapido per sviluppatori impegnati**

```mermaid
flowchart LR
    A[⚡ 5 minutes] --> B[Set up API server]
    B --> C[Test fetch with curl]
    C --> D[Create login function]
    D --> E[See data in action]
```

- **Minuto 1-2**: Avvia il server API (`cd api && npm start`) e testa la connessione
- **Minuto 3**: Crea una funzione base `getAccount()` utilizzando fetch
- **Minuto 4**: Collega il modulo di login con `action="javascript:login()"`
- **Minuto 5**: Testa il login e osserva i dati dell'account apparire nella console

**Comandi rapidi di test**:
```bash
# Verify API is running
curl http://localhost:5000/api

# Test account data fetch
curl http://localhost:5000/api/accounts/test
```

**Perché è importante**: In 5 minuti vedrai la magia del recupero asincrono dei dati che alimenta ogni applicazione web moderna. Questa è la base che rende le app reattive e vive.

## 🗺️ Il tuo percorso di apprendimento attraverso le applicazioni web basate sui dati

```mermaid
journey
    title From Static Pages to Dynamic Applications
    section Understanding the Evolution
      Traditional page reloads: 3: You
      Discover AJAX/SPA benefits: 5: You
      Master Fetch API patterns: 7: You
    section Building Authentication
      Create login functions: 4: You
      Handle async operations: 6: You
      Manage user sessions: 8: You
    section Dynamic UI Updates
      Learn DOM manipulation: 5: You
      Build transaction displays: 7: You
      Create responsive dashboards: 9: You
    section Professional Patterns
      Template-based rendering: 6: You
      Error handling strategies: 7: You
      Performance optimization: 8: You
```

**Destinazione del tuo percorso**: Alla fine di questa lezione, comprenderai come le applicazioni web moderne recuperano, elaborano e visualizzano i dati in modo dinamico, creando esperienze utente fluide che ci aspettiamo dalle applicazioni professionali.

## Quiz preliminare alla lezione

[Quiz preliminare alla lezione](https://ff-quizzes.netlify.app/web/quiz/45)

### Prerequisiti

Prima di immergerti nel recupero dei dati, assicurati di avere questi componenti pronti:

- **Lezione precedente**: Completa il [Modulo di login e registrazione](../2-forms/README.md) - costruiremo su questa base
- **Server locale**: Installa [Node.js](https://nodejs.org) e [avvia il server API](../api/README.md) per fornire i dati dell'account
- **Connessione API**: Testa la connessione al server con questo comando:

```bash
curl http://localhost:5000/api
# Expected response: "Bank API v1.0.0"
```

Questo test rapido garantisce che tutti i componenti comunichino correttamente:
- Verifica che Node.js funzioni correttamente sul tuo sistema
- Conferma che il server API sia attivo e risponda
- Valida che la tua app possa raggiungere il server (come controllare il contatto radio prima di una missione)

## 🧠 Panoramica dell'ecosistema di gestione dei dati

```mermaid
mindmap
  root((Data Management))
    Authentication Flow
      Login Process
        Form Validation
        Credential Verification
        Session Management
      User State
        Global Account Object
        Navigation Guards
        Error Handling
    API Communication
      Fetch Patterns
        GET Requests
        POST Requests
        Error Responses
      Data Formats
        JSON Processing
        URL Encoding
        Response Parsing
    Dynamic UI Updates
      DOM Manipulation
        Safe Text Updates
        Element Creation
        Template Cloning
      User Experience
        Real-time Updates
        Error Messages
        Loading States
    Security Considerations
      XSS Prevention
        textContent Usage
        Input Sanitization
        Safe HTML Creation
      CORS Handling
        Cross-Origin Requests
        Header Configuration
        Development Setup
```

**Principio fondamentale**: Le applicazioni web moderne sono sistemi di orchestrazione dei dati - coordinano tra interfacce utente, API server e modelli di sicurezza del browser per creare esperienze fluide e reattive.

---

## Comprendere il recupero dei dati nelle app web moderne

Il modo in cui le applicazioni web gestiscono i dati è cambiato radicalmente negli ultimi due decenni. Comprendere questa evoluzione ti aiuterà ad apprezzare perché tecniche moderne come AJAX e l'API Fetch sono così potenti e perché sono diventate strumenti essenziali per gli sviluppatori web.

Esploriamo come funzionavano i siti web tradizionali rispetto alle applicazioni dinamiche e reattive che costruiamo oggi.

### Applicazioni tradizionali multi-pagina (MPA)

Nei primi giorni del web, ogni clic era come cambiare canale su una vecchia televisione: lo schermo si oscurava, poi lentamente si sintonizzava sul nuovo contenuto. Questa era la realtà delle prime applicazioni web, dove ogni interazione significava ricostruire completamente l'intera pagina da zero.

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server
    
    User->>Browser: Clicks link or submits form
    Browser->>Server: Requests new HTML page
    Note over Browser: Page goes blank
    Server->>Browser: Returns complete HTML page
    Browser->>User: Displays new page (flash/reload)
```

![Flusso di aggiornamento in un'applicazione multi-pagina](../../../../translated_images/it/mpa.7f7375a1a2d4aa77.webp)

**Perché questo approccio sembrava macchinoso:**
- Ogni clic significava ricostruire l'intera pagina da zero
- Gli utenti venivano interrotti nel bel mezzo dei loro pensieri da quei fastidiosi lampeggiamenti della pagina
- La tua connessione internet lavorava il doppio scaricando ripetutamente la stessa intestazione e piè di pagina
- Le app sembravano più simili a sfogliare un archivio che a utilizzare un software

### Applicazioni moderne a pagina singola (SPA)

AJAX (Asynchronous JavaScript and XML) ha cambiato completamente questo paradigma. Come il design modulare della Stazione Spaziale Internazionale, dove gli astronauti possono sostituire singoli componenti senza ricostruire l'intera struttura, AJAX ci consente di aggiornare parti specifiche di una pagina web senza ricaricare tutto. Nonostante il nome menzioni XML, oggi usiamo principalmente JSON, ma il principio fondamentale rimane: aggiornare solo ciò che deve cambiare.

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant JavaScript
    participant Server
    
    User->>Browser: Interacts with page
    Browser->>JavaScript: Triggers event handler
    JavaScript->>Server: Fetches only needed data
    Server->>JavaScript: Returns JSON data
    JavaScript->>Browser: Updates specific page elements
    Browser->>User: Shows updated content (no reload)
```

![Flusso di aggiornamento in un'applicazione a pagina singola](../../../../translated_images/it/spa.268ec73b41f992c2.webp)

**Perché le SPA sono così migliori:**
- Solo le parti che effettivamente cambiano vengono aggiornate (intelligente, vero?)
- Niente più interruzioni brusche - gli utenti rimangono nel loro flusso
- Meno dati che viaggiano sulla rete significa caricamenti più veloci
- Tutto sembra scattante e reattivo, come le app sul tuo telefono

### L'evoluzione verso l'API Fetch moderna

I browser moderni forniscono l'[API Fetch](https://developer.mozilla.org/docs/Web/API/Fetch_API), che sostituisce il vecchio [`XMLHttpRequest`](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest). Come la differenza tra operare un telegrafo e usare l'email, l'API Fetch utilizza le promesse per un codice asincrono più pulito e gestisce naturalmente JSON.

| Caratteristica | XMLHttpRequest | API Fetch |
|----------------|----------------|-----------|
| **Sintassi** | Complessa basata su callback | Pulita basata su promesse |
| **Gestione JSON** | Richiede parsing manuale | Metodo `.json()` integrato |
| **Gestione errori** | Informazioni limitate sugli errori | Dettagli completi sugli errori |
| **Supporto moderno** | Compatibilità legacy | Promesse ES6+ e async/await |

> 💡 **Compatibilità del browser**: Buone notizie - l'API Fetch funziona in tutti i browser moderni! Se sei curioso di conoscere versioni specifiche, [caniuse.com](https://caniuse.com/fetch) ha tutte le informazioni sulla compatibilità.
> 
**In sintesi:**
- Funziona perfettamente in Chrome, Firefox, Safari e Edge (praticamente ovunque siano i tuoi utenti)
- Solo Internet Explorer ha bisogno di aiuto extra (e onestamente, è ora di lasciar perdere IE)
- Ti prepara perfettamente per i modelli eleganti async/await che useremo più avanti

### Implementare il login utente e il recupero dei dati

Ora implementeremo il sistema di login che trasforma la tua app bancaria da una visualizzazione statica a un'applicazione funzionale. Come i protocolli di autenticazione utilizzati nelle strutture militari sicure, verificheremo le credenziali dell'utente e poi forniremo l'accesso ai loro dati specifici.

Costruiremo questo gradualmente, partendo dall'autenticazione di base e poi aggiungendo le funzionalità di recupero dei dati.

#### Passaggio 1: Creare la base della funzione di login

Apri il file `app.js` e aggiungi una nuova funzione `login`. Questa gestirà il processo di autenticazione dell'utente:

```javascript
async function login() {
  const loginForm = document.getElementById('loginForm');
  const user = loginForm.user.value;
}
```

**Analizziamo questo codice:**
- La parola chiave `async`? Sta dicendo a JavaScript "ehi, questa funzione potrebbe dover aspettare qualcosa"
- Stiamo recuperando il modulo dalla pagina (niente di complicato, lo troviamo semplicemente tramite il suo ID)
- Poi estraiamo ciò che l'utente ha digitato come nome utente
- Ecco un trucco interessante: puoi accedere a qualsiasi input del modulo tramite il suo attributo `name` - niente bisogno di ulteriori chiamate a getElementById!

> 💡 **Pattern di accesso ai moduli**: Ogni controllo del modulo può essere accessibile tramite il suo nome (impostato nell'HTML utilizzando l'attributo `name`) come proprietà dell'elemento modulo. Questo fornisce un modo pulito e leggibile per ottenere i dati del modulo.

#### Passaggio 2: Creare la funzione di recupero dei dati dell'account

Successivamente, creeremo una funzione dedicata per recuperare i dati dell'account dal server. Segue lo stesso schema della tua funzione di registrazione ma si concentra sul recupero dei dati:

```javascript
async function getAccount(user) {
  try {
    const response = await fetch('//localhost:5000/api/accounts/' + encodeURIComponent(user));
    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}
```

**Cosa fa questo codice:**
- **Utilizza** l'API `fetch` moderna per richiedere dati in modo asincrono
- **Costruisce** un URL di richiesta GET con il parametro del nome utente
- **Applica** `encodeURIComponent()` per gestire in modo sicuro i caratteri speciali negli URL
- **Converte** la risposta in formato JSON per una facile manipolazione dei dati
- **Gestisce** gli errori in modo elegante restituendo un oggetto di errore invece di bloccarsi

> ⚠️ **Nota sulla sicurezza**: La funzione `encodeURIComponent()` gestisce i caratteri speciali negli URL. Come i sistemi di codifica utilizzati nelle comunicazioni navali, garantisce che il tuo messaggio arrivi esattamente come previsto, impedendo che caratteri come "#" o "&" vengano interpretati erroneamente.
> 
**Perché è importante:**
- Impedisce che i caratteri speciali interrompano gli URL
- Protegge da attacchi di manipolazione degli URL
- Garantisce che il server riceva i dati previsti
- Segue le pratiche di codifica sicura

#### Comprendere le richieste HTTP GET

Ecco qualcosa che potrebbe sorprenderti: quando usi `fetch` senza opzioni extra, crea automaticamente una richiesta [`GET`](https://developer.mozilla.org/docs/Web/HTTP/Methods/GET). Questo è perfetto per ciò che stiamo facendo - chiedere al server "ehi, posso vedere i dati dell'account di questo utente?"

Pensa alle richieste GET come chiedere educatamente di prendere in prestito un libro dalla biblioteca - stai richiedendo di vedere qualcosa che già esiste. Le richieste POST (che abbiamo usato per la registrazione) sono più simili a inviare un nuovo libro da aggiungere alla collezione.

| Richiesta GET | Richiesta POST |
|---------------|---------------|
| **Scopo** | Recuperare dati esistenti | Inviare nuovi dati al server |
| **Parametri** | Nel percorso/query string dell'URL | Nel corpo della richiesta |
| **Caching** | Può essere memorizzata dai browser | Non tipicamente memorizzata |
| **Sicurezza** | Visibile nell'URL/log | Nascosta nel corpo della richiesta |

```mermaid
sequenceDiagram
    participant B as Browser
    participant S as Server
    
    Note over B,S: GET Request (Data Retrieval)
    B->>S: GET /api/accounts/test
    S-->>B: 200 OK + Account Data
    
    Note over B,S: POST Request (Data Submission)
    B->>S: POST /api/accounts + New Account Data
    S-->>B: 201 Created + Confirmation
    
    Note over B,S: Error Handling
    B->>S: GET /api/accounts/nonexistent
    S-->>B: 404 Not Found + Error Message
```

#### Passaggio 3: Unire tutto insieme

Ora arriva la parte soddisfacente - colleghiamo la funzione di recupero dei dati dell'account al processo di login. Qui tutto si incastra:

```javascript
async function login() {
  const loginForm = document.getElementById('loginForm');
  const user = loginForm.user.value;
  const data = await getAccount(user);

  if (data.error) {
    return console.log('loginError', data.error);
  }

  account = data;
  navigate('/dashboard');
}
```

Questa funzione segue una sequenza chiara:
- Estrae il nome utente dall'input del modulo
- Richiede i dati dell'account dell'utente al server
- Gestisce eventuali errori che si verificano durante il processo
- Memorizza i dati dell'account e naviga al dashboard in caso di successo

> 🎯 **Pattern Async/Await**: Poiché `getAccount` è una funzione asincrona, utilizziamo la parola chiave `await` per sospendere l'esecuzione fino a quando il server risponde. Questo impedisce al codice di continuare con dati indefiniti.

#### Passaggio 4: Creare una memoria per i tuoi dati

La tua app ha bisogno di un posto dove ricordare le informazioni dell'account una volta caricate. Pensa a questo come alla memoria a breve termine della tua app - un luogo per tenere i dati dell'utente corrente a portata di mano. Aggiungi questa riga all'inizio del tuo file `app.js`:

```javascript
// This holds the current user's account data
let account = null;
```

**Perché ne abbiamo bisogno:**
- Mantiene i dati dell'account accessibili da qualsiasi parte della tua app
- Iniziare con `null` significa "nessuno è ancora loggato"
- Viene aggiornato quando qualcuno effettua il login o la registrazione con successo
- Funziona come una fonte unica di verità - nessuna confusione su chi è loggato

#### Passaggio 5: Collegare il modulo

Ora colleghiamo la tua nuova funzione di login al modulo HTML. Aggiorna il tag del modulo in questo modo:

```html
<form id="loginForm" action="javascript:login()">
  <!-- Your existing form inputs -->
</form>
```

**Cosa fa questo piccolo cambiamento:**
- Impedisce al modulo di eseguire il comportamento predefinito "ricarica l'intera pagina"
- Chiama la tua funzione JavaScript personalizzata
- Mantiene tutto fluido e simile a un'app a pagina singola
- Ti dà il controllo completo su ciò che accade quando gli utenti cliccano su "Login"

#### Passaggio 6: Migliorare la funzione di registrazione

Per coerenza, aggiorna la tua funzione `register` per memorizzare anche i dati dell'account e navigare al dashboard:

```javascript
// Add these lines at the end of your register function
account = result;
navigate('/dashboard');
```

**Questo miglioramento offre:**
- **Transizione fluida** dalla registrazione al dashboard
- **Esperienza utente coerente** tra i flussi di login e registrazione
- **Accesso immediato** ai dati dell'account dopo una registrazione riuscita

#### Testare la tua implementazione

```mermaid
flowchart TD
    A[User enters credentials] --> B[Login function called]
    B --> C[Fetch account data from server]
    C --> D{Data received successfully?}
    D -->|Yes| E[Store account data globally]
    D -->|No| F[Display error message]
    E --> G[Navigate to dashboard]
    F --> H[User stays on login page]
```

**È ora di provarlo:**
1. Crea un nuovo account per assicurarti che tutto funzioni
2. Prova a effettuare il login con le stesse credenziali
3. Dai un'occhiata alla console del tuo browser (F12) se qualcosa sembra non funzionare
4. Assicurati di arrivare al dashboard dopo un login riuscito

Se qualcosa non funziona, non farti prendere dal panico! La maggior parte dei problemi sono semplici da risolvere, come errori di battitura o dimenticare di avviare il server API.

#### Una parola veloce sulla magia del Cross-Origin

Potresti chiederti: "Come fa la mia app web a comunicare con questo server API quando funzionano su porte diverse?" Ottima domanda! Questo tocca qualcosa che ogni sviluppatore web incontra prima o poi.

> 🔒 **Sicurezza Cross-Origin**: I browser applicano una "same-origin policy" per prevenire comunicazioni non autorizzate tra domini diversi. Come il sistema di checkpoint al Pentagono, verificano che la comunicazione sia autorizzata prima di consentire il trasferimento dei dati.
> 
**Nel nostro setup:**
- La tua app web gira su `localhost:3000` (server di sviluppo)
- Il tuo server API gira su `localhost:5000` (server backend)
- Il server API include intestazioni [CORS](https://developer.mozilla.org/docs/Web/HTTP/CORS) che autorizzano esplicitamente la comunicazione dalla tua app web

Questa configurazione rispecchia lo sviluppo nel mondo reale, dove le applicazioni frontend e backend solitamente girano su server separati.

> 📚 **Per saperne di più**: Approfondisci gli API e il recupero dei dati con questo modulo completo di [Microsoft Learn sugli API](https://docs.microsoft.com/learn/modules/use-apis-discover-museum-art/?WT.mc_id=academic-77807-sagibbon).

## Dare vita ai tuoi dati in HTML

Ora renderemo i dati recuperati visibili agli utenti attraverso la manipolazione del DOM. Come il processo di sviluppo delle fotografie in una camera oscura, stiamo trasformando dati invisibili in qualcosa che gli utenti possono vedere e con cui possono interagire.
La manipolazione del DOM è la tecnica che trasforma le pagine web statiche in applicazioni dinamiche che aggiornano il loro contenuto in base alle interazioni degli utenti e alle risposte del server.

### Scegliere lo Strumento Giusto per il Lavoro

Quando si tratta di aggiornare il tuo HTML con JavaScript, hai diverse opzioni. Pensale come strumenti diversi in una cassetta degli attrezzi - ognuno perfetto per lavori specifici:

| Metodo | Per cosa è ideale | Quando usarlo | Livello di sicurezza |
|--------|-------------------|---------------|----------------------|
| `textContent` | Mostrare dati utente in modo sicuro | Ogni volta che mostri testo | ✅ Super sicuro |
| `createElement()` + `append()` | Creare layout complessi | Creare nuove sezioni/liste | ✅ A prova di bomba |
| `innerHTML` | Impostare contenuti HTML | ⚠️ Cerca di evitarlo | ❌ Rischioso |

#### Il Modo Sicuro per Mostrare Testo: textContent

La proprietà [`textContent`](https://developer.mozilla.org/docs/Web/API/Node/textContent) è la tua migliore amica per mostrare dati utente. È come avere un buttafuori per la tua pagina web - niente di dannoso passa:

```javascript
// The safe, reliable way to update text
const balanceElement = document.getElementById('balance');
balanceElement.textContent = account.balance;
```

**Vantaggi di textContent:**
- Tratta tutto come testo semplice (impedisce l'esecuzione di script)
- Cancella automaticamente il contenuto esistente
- Efficiente per aggiornamenti di testo semplici
- Fornisce sicurezza integrata contro contenuti dannosi

#### Creare Elementi HTML Dinamici

Per contenuti più complessi, combina [`document.createElement()`](https://developer.mozilla.org/docs/Web/API/Document/createElement) con il metodo [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append):

```javascript
// Safe way to create new elements
const transactionItem = document.createElement('div');
transactionItem.className = 'transaction-item';
transactionItem.textContent = `${transaction.date}: ${transaction.description}`;
container.append(transactionItem);
```

**Comprendere questo approccio:**
- **Crea** nuovi elementi DOM in modo programmatico
- **Mantiene** il pieno controllo sugli attributi e sul contenuto degli elementi
- **Permette** strutture di elementi complesse e nidificate
- **Preserva** la sicurezza separando la struttura dal contenuto

> ⚠️ **Considerazione sulla Sicurezza**: Anche se [`innerHTML`](https://developer.mozilla.org/docs/Web/API/Element/innerHTML) appare in molti tutorial, può eseguire script incorporati. Come i protocolli di sicurezza al CERN che impediscono l'esecuzione di codice non autorizzato, usare `textContent` e `createElement` offre alternative più sicure.
> 
**Rischi di innerHTML:**
- Esegue qualsiasi tag `<script>` nei dati utente
- Vulnerabile agli attacchi di injection di codice
- Crea potenziali vulnerabilità di sicurezza
- Le alternative più sicure che stiamo usando offrono funzionalità equivalenti

### Rendere gli Errori Comprensibili per gli Utenti

Attualmente, gli errori di login appaiono solo nella console del browser, che è invisibile agli utenti. Come la differenza tra i diagnostici interni di un pilota e il sistema di informazioni per i passeggeri, dobbiamo comunicare informazioni importanti attraverso il canale appropriato.

Implementare messaggi di errore visibili fornisce agli utenti un feedback immediato su cosa è andato storto e su come procedere.

#### Passo 1: Aggiungere uno Spazio per i Messaggi di Errore

Per prima cosa, diamo ai messaggi di errore una posizione nel tuo HTML. Aggiungi questo proprio prima del pulsante di login in modo che gli utenti lo vedano naturalmente:

```html
<!-- This is where error messages will appear -->
<div id="loginError" role="alert"></div>
<button>Login</button>
```

**Cosa sta succedendo qui:**
- Stiamo creando un contenitore vuoto che rimane invisibile fino a quando necessario
- È posizionato dove gli utenti guardano naturalmente dopo aver cliccato "Login"
- Quel `role="alert"` è un bel tocco per i lettori di schermo - dice alla tecnologia assistiva "ehi, questo è importante!"
- L'`id` unico dà al nostro JavaScript un facile bersaglio

#### Passo 2: Creare una Funzione Helper Pratica

Creiamo una piccola funzione di utilità che può aggiornare il testo di qualsiasi elemento. Questa è una di quelle funzioni "scrivi una volta, usa ovunque" che ti farà risparmiare tempo:

```javascript
function updateElement(id, text) {
  const element = document.getElementById(id);
  element.textContent = text;
}
```

**Vantaggi della funzione:**
- Interfaccia semplice che richiede solo un ID elemento e il contenuto del testo
- Localizza e aggiorna in modo sicuro gli elementi DOM
- Modello riutilizzabile che riduce la duplicazione del codice
- Mantiene un comportamento di aggiornamento coerente in tutta l'applicazione

#### Passo 3: Mostrare gli Errori Dove gli Utenti Possono Vederli

Ora sostituiamo quel messaggio nascosto nella console con qualcosa che gli utenti possano effettivamente vedere. Aggiorna la tua funzione di login:

```javascript
// Instead of just logging to console, show the user what's wrong
if (data.error) {
  return updateElement('loginError', data.error);
}
```

**Questo piccolo cambiamento fa una grande differenza:**
- I messaggi di errore appaiono proprio dove gli utenti stanno guardando
- Niente più fallimenti silenziosi misteriosi
- Gli utenti ricevono un feedback immediato e pratico
- La tua app inizia a sembrare professionale e attenta

Ora, quando testi con un account non valido, vedrai un utile messaggio di errore direttamente sulla pagina!

![Screenshot che mostra il messaggio di errore visualizzato durante il login](../../../../translated_images/it/login-error.416fe019b36a6327.webp)

#### Passo 4: Essere Inclusivi con l'Accessibilità

Ecco qualcosa di interessante su quel `role="alert"` che abbiamo aggiunto prima - non è solo decorazione! Questo piccolo attributo crea quello che si chiama una [Live Region](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) che annuncia immediatamente i cambiamenti ai lettori di schermo:

```html
<div id="loginError" role="alert"></div>
```

**Perché è importante:**
- Gli utenti di lettori di schermo sentono il messaggio di errore non appena appare
- Tutti ricevono le stesse informazioni importanti, indipendentemente da come navigano
- È un modo semplice per far funzionare la tua app per più persone
- Dimostra che ti importa di creare esperienze inclusive

Piccoli dettagli come questo distinguono i buoni sviluppatori dai grandi!

### 🎯 Verifica Pedagogica: Pattern di Autenticazione

**Pausa e Riflettici**: Hai appena implementato un flusso di autenticazione completo. Questo è un pattern fondamentale nello sviluppo web.

**Auto-Valutazione Rapida**:
- Sai spiegare perché usiamo async/await per le chiamate API?
- Cosa accadrebbe se dimenticassimo la funzione `encodeURIComponent()`?
- Come il nostro trattamento degli errori migliora l'esperienza utente?

**Connessione con il Mondo Reale**: I pattern che hai imparato qui (fetching asincrono dei dati, gestione degli errori, feedback agli utenti) sono utilizzati in ogni grande applicazione web, dai social media alle piattaforme di e-commerce. Stai acquisendo competenze di livello professionale!

**Domanda di Sfida**: Come potresti modificare questo sistema di autenticazione per gestire più ruoli utente (cliente, amministratore, cassiere)? Pensa alla struttura dei dati e ai cambiamenti necessari nell'interfaccia utente.

#### Passo 5: Applicare lo Stesso Pattern alla Registrazione

Per coerenza, implementa una gestione degli errori identica nel tuo modulo di registrazione:

1. **Aggiungi** un elemento di visualizzazione degli errori al tuo HTML di registrazione:
```html
<div id="registerError" role="alert"></div>
```

2. **Aggiorna** la tua funzione di registrazione per utilizzare lo stesso pattern di visualizzazione degli errori:
```javascript
if (data.error) {
  return updateElement('registerError', data.error);
}
```

**Vantaggi di una gestione degli errori coerente:**
- **Fornisce** un'esperienza utente uniforme su tutti i moduli
- **Riduce** il carico cognitivo utilizzando pattern familiari
- **Semplifica** la manutenzione con codice riutilizzabile
- **Garantisce** che gli standard di accessibilità siano rispettati in tutta l'app

## Creare il Tuo Dashboard Dinamico

Ora trasformeremo il tuo dashboard statico in un'interfaccia dinamica che mostra i dati reali del conto. Come la differenza tra un orario di volo stampato e i tabelloni delle partenze in tempo reale negli aeroporti, stiamo passando da informazioni statiche a visualizzazioni reattive e aggiornate.

Utilizzando le tecniche di manipolazione del DOM che hai imparato, creeremo un dashboard che si aggiorna automaticamente con le informazioni correnti del conto.

### Conoscere i Tuoi Dati

Prima di iniziare a costruire, diamo un'occhiata al tipo di dati che il tuo server invia indietro. Quando qualcuno effettua il login con successo, ecco il tesoro di informazioni con cui puoi lavorare:

```json
{
  "user": "test",
  "currency": "$",
  "description": "Test account",
  "balance": 75,
  "transactions": [
    { "id": "1", "date": "2020-10-01", "object": "Pocket money", "amount": 50 },
    { "id": "2", "date": "2020-10-03", "object": "Book", "amount": -10 },
    { "id": "3", "date": "2020-10-04", "object": "Sandwich", "amount": -5 }
  ]
}
```

**Questa struttura dati fornisce:**
- **`user`**: Perfetto per personalizzare l'esperienza ("Bentornata, Sarah!")
- **`currency`**: Garantisce che mostriamo correttamente gli importi monetari
- **`description`**: Un nome amichevole per il conto
- **`balance`**: L'importante saldo corrente
- **`transactions`**: La cronologia completa delle transazioni con tutti i dettagli

Tutto ciò di cui hai bisogno per costruire un dashboard bancario dall'aspetto professionale!

```mermaid
flowchart TD
    A[User Login] --> B[Fetch Account Data]
    B --> C{Data Valid?}
    C -->|Yes| D[Store in Global Variable]
    C -->|No| E[Show Error Message]
    D --> F[Navigate to Dashboard]
    F --> G[Update UI Elements]
    G --> H[Display Balance]
    G --> I[Show Description]
    G --> J[Render Transactions]
    J --> K[Create Table Rows]
    K --> L[Format Currency]
    L --> M[User Sees Live Data]
```

> 💡 **Suggerimento Pro**: Vuoi vedere subito il tuo dashboard in azione? Usa il nome utente `test` quando effettui il login - viene pre-caricato con dati di esempio realistici così puoi vedere tutto funzionare senza dover creare prima transazioni.
> 
**Perché l'account di test è utile:**
- Viene fornito con dati di esempio realistici già caricati
- Perfetto per vedere come vengono visualizzate le transazioni
- Ottimo per testare le funzionalità del tuo dashboard
- Ti evita di dover creare manualmente dati fittizi

### Creare gli Elementi di Visualizzazione del Dashboard

Costruiamo la tua interfaccia del dashboard passo dopo passo, iniziando con le informazioni di riepilogo del conto e poi passando a funzionalità più complesse come le liste di transazioni.

#### Passo 1: Aggiornare la Struttura HTML

Per prima cosa, sostituisci la sezione statica "Saldo" con elementi segnaposto dinamici che il tuo JavaScript può popolare:

```html
<section>
  Balance: <span id="balance"></span><span id="currency"></span>
</section>
```

Successivamente, aggiungi una sezione per la descrizione del conto. Poiché questa funge da titolo per il contenuto del dashboard, usa HTML semantico:

```html
<h2 id="description"></h2>
```

**Comprendere la struttura HTML:**
- **Usa** elementi `<span>` separati per saldo e valuta per un controllo individuale
- **Applica** ID univoci a ciascun elemento per il targeting JavaScript
- **Segue** HTML semantico usando `<h2>` per la descrizione del conto
- **Crea** una gerarchia logica per i lettori di schermo e la SEO

> ✅ **Approfondimento sull'Accessibilità**: La descrizione del conto funziona come un titolo per il contenuto del dashboard, quindi è contrassegnata semanticamente come intestazione. Scopri di più su come [la struttura delle intestazioni](https://www.nomensa.com/blog/2017/how-structure-headings-web-accessibility) influisce sull'accessibilità. Riesci a identificare altri elementi sulla tua pagina che potrebbero beneficiare dei tag di intestazione?

#### Passo 2: Creare la Funzione di Aggiornamento del Dashboard

Ora crea una funzione che popoli il tuo dashboard con i dati reali del conto:

```javascript
function updateDashboard() {
  if (!account) {
    return navigate('/login');
  }

  updateElement('description', account.description);
  updateElement('balance', account.balance.toFixed(2));
  updateElement('currency', account.currency);
}
```

**Passo dopo passo, ecco cosa fa questa funzione:**
- **Valida** che i dati del conto esistano prima di procedere
- **Reindirizza** gli utenti non autenticati alla pagina di login
- **Aggiorna** la descrizione del conto usando la funzione riutilizzabile `updateElement`
- **Formatta** il saldo per mostrare sempre due cifre decimali
- **Mostra** il simbolo della valuta appropriato

> 💰 **Formattazione Monetaria**: Quel metodo [`toFixed(2)`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) è una salvezza! Garantisce che il tuo saldo sembri sempre denaro reale - "75.00" invece di solo "75". I tuoi utenti apprezzeranno vedere una formattazione monetaria familiare.

#### Passo 3: Assicurarsi che il Dashboard si Aggiorni

Per garantire che il tuo dashboard si aggiorni con i dati correnti ogni volta che qualcuno lo visita, dobbiamo collegarci al tuo sistema di navigazione. Se hai completato l'[esercizio della lezione 1](../1-template-route/assignment.md), questo dovrebbe sembrare familiare. In caso contrario, non preoccuparti - ecco cosa ti serve:

Aggiungi questo alla fine della tua funzione `updateRoute()`:

```javascript
if (typeof route.init === 'function') {
  route.init();
}
```

Poi aggiorna le tue rotte per includere l'inizializzazione del dashboard:

```javascript
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: updateDashboard }
};
```

**Cosa fa questa configurazione intelligente:**
- Controlla se una rotta ha codice di inizializzazione speciale
- Esegue automaticamente quel codice quando la rotta viene caricata
- Garantisce che il tuo dashboard mostri sempre dati freschi e correnti
- Mantiene la logica di routing pulita e organizzata

#### Testare il Tuo Dashboard

Dopo aver implementato queste modifiche, testa il tuo dashboard:

1. **Effettua il login** con un account di test
2. **Verifica** che vieni reindirizzato al dashboard
3. **Controlla** che la descrizione del conto, il saldo e la valuta siano visualizzati correttamente
4. **Prova a disconnetterti e a rientrare** per assicurarti che i dati si aggiornino correttamente

Il tuo dashboard dovrebbe ora mostrare informazioni dinamiche sul conto che si aggiornano in base ai dati dell'utente autenticato!

## Creare Liste di Transazioni Intelligenti con i Template

Invece di creare manualmente l'HTML per ogni transazione, utilizzeremo i template per generare automaticamente una formattazione coerente. Come i componenti standardizzati utilizzati nella produzione di veicoli spaziali, i template garantiscono che ogni riga di transazione segua la stessa struttura e aspetto.

Questa tecnica si scala efficacemente da poche transazioni a migliaia, mantenendo prestazioni e presentazione coerenti.

```mermaid
graph LR
    A[HTML Template] --> B[JavaScript Clone]
    B --> C[Populate with Data]
    C --> D[Add to Fragment]
    D --> E[Batch Insert to DOM]
    
    subgraph "Performance Benefits"
        F[Single DOM Update]
        G[Consistent Formatting]
        H[Reusable Pattern]
    end
    
    E --> F
    E --> G
    E --> H
```

```mermaid
flowchart LR
    A[Transaction Data] --> B[HTML Template]
    B --> C[Clone Template]
    C --> D[Populate with Data]
    D --> E[Add to DOM]
    E --> F[Repeat for Each Transaction]
```

### Passo 1: Creare il Template per le Transazioni

Per prima cosa, aggiungi un template riutilizzabile per le righe delle transazioni nel tuo HTML `<body>`:

```html
<template id="transaction">
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</template>
```

**Comprendere i template HTML:**
- **Definisce** la struttura per una singola riga della tabella
- **Rimane** invisibile fino a quando non viene clonata e popolata con JavaScript
- **Include** tre celle per data, descrizione e importo
- **Fornisce** un modello riutilizzabile per una formattazione coerente

### Passo 2: Preparare la Tabella per Contenuti Dinamici

Successivamente, aggiungi un `id` al corpo della tabella in modo che JavaScript possa facilmente individuarlo:

```html
<tbody id="transactions"></tbody>
```

**Cosa ottiene questo:**
- **Crea** un chiaro bersaglio per inserire le righe delle transazioni
- **Separa** la struttura della tabella dal contenuto dinamico
- **Permette** una facile cancellazione e ripopolamento dei dati delle transazioni

### Passo 3: Costruire la Funzione Factory per le Righe delle Transazioni

Ora crea una funzione che trasformi i dati delle transazioni in elementi HTML:

```javascript
function createTransactionRow(transaction) {
  const template = document.getElementById('transaction');
  const transactionRow = template.content.cloneNode(true);
  const tr = transactionRow.querySelector('tr');
  tr.children[0].textContent = transaction.date;
  tr.children[1].textContent = transaction.object;
  tr.children[2].textContent = transaction.amount.toFixed(2);
  return transactionRow;
}
```

**Analisi di questa funzione factory:**
- **Recupera** l'elemento template tramite il suo ID
- **Clona** il contenuto del template per una manipolazione sicura
- **Seleziona** la riga della tabella all'interno del contenuto clonato
- **Popola** ogni cella con i dati delle transazioni
- **Formatta** l'importo per mostrare i decimali corretti
- **Restituisce** la riga completata pronta per l'inserimento

### Passo 4: Generare Righe di Transazioni Multiple in Modo Efficiente

Aggiungi questo codice alla tua funzione `updateDashboard()` per visualizzare tutte le transazioni:

```javascript
const transactionsRows = document.createDocumentFragment();
for (const transaction of account.transactions) {
  const transactionRow = createTransactionRow(transaction);
  transactionsRows.appendChild(transactionRow);
}
updateElement('transactions', transactionsRows);
```

**Comprendere questo approccio efficiente:**
- **Crea** un frammento di documento per raggruppare le operazioni DOM
- **Itera** attraverso tutte le transazioni nei dati del conto
- **Genera** una riga per ogni transazione usando la funzione factory
- **Raccoglie** tutte le righe nel frammento prima di aggiungerle al DOM
- **Esegue** un singolo aggiornamento del DOM invece di molteplici inserimenti individuali
> ⚡ **Ottimizzazione delle prestazioni**: [`document.createDocumentFragment()`](https://developer.mozilla.org/docs/Web/API/Document/createDocumentFragment) funziona come il processo di assemblaggio alla Boeing - i componenti vengono preparati fuori dalla linea principale e poi installati come un'unità completa. Questo approccio a blocchi riduce al minimo i ricalcoli del DOM effettuando un'unica operazione di inserimento invece di molteplici operazioni individuali.

### Passo 5: Migliora la funzione di aggiornamento per contenuti misti

La tua funzione `updateElement()` attualmente gestisce solo contenuti testuali. Aggiornala per funzionare sia con contenuti testuali che con nodi DOM:

```javascript
function updateElement(id, textOrNode) {
  const element = document.getElementById(id);
  element.textContent = ''; // Removes all children
  element.append(textOrNode);
}
```

**Miglioramenti chiave in questo aggiornamento:**
- **Cancella** il contenuto esistente prima di aggiungere nuovo contenuto
- **Accetta** sia stringhe di testo che nodi DOM come parametri
- **Utilizza** il metodo [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append) per maggiore flessibilità
- **Mantiene** la compatibilità con l'uso basato su testo esistente

### Metti alla prova il tuo dashboard

È arrivato il momento della verità! Vediamo il tuo dashboard dinamico in azione:

1. Accedi utilizzando l'account `test` (contiene dati di esempio pronti all'uso)
2. Vai al tuo dashboard
3. Controlla che le righe delle transazioni appaiano con il formato corretto
4. Assicurati che date, descrizioni e importi siano visualizzati correttamente

Se tutto funziona, dovresti vedere un elenco di transazioni completamente funzionante sul tuo dashboard! 🎉

**Cosa hai realizzato:**
- Hai creato un dashboard che si adatta a qualsiasi quantità di dati
- Hai sviluppato template riutilizzabili per un formato coerente
- Hai implementato tecniche efficienti di manipolazione del DOM
- Hai sviluppato funzionalità paragonabili a quelle delle applicazioni bancarie professionali

Hai trasformato con successo una pagina web statica in un'applicazione web dinamica.

### 🎯 Verifica pedagogica: Generazione di contenuti dinamici

**Comprensione dell'architettura**: Hai implementato una pipeline sofisticata che trasforma i dati in interfaccia utente, rispecchiando i modelli utilizzati in framework come React, Vue e Angular.

**Concetti chiave acquisiti**:
- **Rendering basato su template**: Creazione di componenti UI riutilizzabili
- **Document fragments**: Ottimizzazione delle prestazioni del DOM
- **Manipolazione sicura del DOM**: Prevenzione di vulnerabilità di sicurezza
- **Trasformazione dei dati**: Conversione dei dati del server in interfacce utente

**Connessione con l'industria**: Queste tecniche costituiscono la base dei moderni framework frontend. Il virtual DOM di React, il sistema di template di Vue e l'architettura dei componenti di Angular si basano su questi concetti fondamentali.

**Domanda di riflessione**: Come estenderesti questo sistema per gestire aggiornamenti in tempo reale (come nuove transazioni che appaiono automaticamente)? Considera l'uso di WebSockets o Server-Sent Events.

---

## 📈 Cronologia della tua padronanza nella gestione dei dati

```mermaid
timeline
    title Data-Driven Development Journey
    
    section Foundation Building
        API Setup & Testing
            : Understand client-server communication
            : Master HTTP request/response cycle
            : Learn debugging techniques
    
    section Authentication Mastery
        Async Function Patterns
            : Write clean async/await code
            : Handle promises effectively
            : Implement error boundaries
        User Session Management
            : Create global state patterns
            : Build navigation guards
            : Design user feedback systems
    
    section Dynamic UI Development
        Safe DOM Manipulation
            : Prevent XSS vulnerabilities
            : Use textContent over innerHTML
            : Create accessibility-friendly interfaces
        Template Systems
            : Build reusable UI components
            : Optimize performance with fragments
            : Scale to handle large datasets
    
    section Professional Patterns
        Production-Ready Code
            : Implement comprehensive error handling
            : Follow security best practices
            : Create maintainable architectures
        Modern Web Standards
            : Master Fetch API patterns
            : Understand CORS configurations
            : Build responsive, accessible UIs
```

**🎓 Traguardo di laurea**: Hai costruito con successo un'applicazione web completa basata sui dati utilizzando modelli moderni di JavaScript. Queste competenze si traducono direttamente nel lavoro con framework come React, Vue o Angular.

**🔄 Capacità di livello successivo**:
- Pronto per esplorare framework frontend che si basano su questi concetti
- Preparato per implementare funzionalità in tempo reale con WebSockets
- Equipaggiato per creare Progressive Web Apps con funzionalità offline
- Base solida per apprendere modelli avanzati di gestione dello stato

## Sfida GitHub Copilot Agent 🚀

Usa la modalità Agent per completare la seguente sfida:

**Descrizione:** Migliora l'app bancaria implementando una funzione di ricerca e filtro delle transazioni che consenta agli utenti di trovare transazioni specifiche per intervallo di date, importo o parole chiave nella descrizione.

**Prompt:** Crea una funzionalità di ricerca per l'app bancaria che includa: 1) Un modulo di ricerca con campi di input per intervallo di date (da/a), importo minimo/massimo e parole chiave della descrizione delle transazioni, 2) Una funzione `filterTransactions()` che filtri l'array account.transactions in base ai criteri di ricerca, 3) Aggiorna la funzione `updateDashboard()` per mostrare i risultati filtrati, e 4) Aggiungi un pulsante "Cancella filtri" per ripristinare la visualizzazione. Usa i moderni metodi degli array JavaScript come `filter()` e gestisci i casi limite per criteri di ricerca vuoti.

Scopri di più sulla [modalità agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) qui.

## 🚀 Sfida

Pronto a portare la tua app bancaria al livello successivo? Rendiamola qualcosa che vorresti davvero utilizzare. Ecco alcune idee per stimolare la tua creatività:

**Rendila bella**: Aggiungi uno stile CSS per trasformare il tuo dashboard funzionale in qualcosa di visivamente accattivante. Pensa a linee pulite, spazi ben distribuiti e magari anche qualche animazione sottile.

**Rendila responsiva**: Prova a utilizzare [media queries](https://developer.mozilla.org/docs/Web/CSS/Media_Queries) per creare un [design responsivo](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks) che funzioni bene su telefoni, tablet e desktop. I tuoi utenti te ne saranno grati!

**Aggiungi un tocco di stile**: Considera di codificare a colori le transazioni (verde per entrate, rosso per spese), aggiungere icone o creare effetti hover che rendano l'interfaccia più interattiva.

Ecco come potrebbe apparire un dashboard ben rifinito:

![Screenshot di un esempio di risultato del dashboard dopo la stilizzazione](../../../../translated_images/it/screen2.123c82a831a1d14a.webp)

Non sentirti obbligato a replicarlo esattamente - usalo come ispirazione e rendilo unico!

## Quiz post-lezione

[Quiz post-lezione](https://ff-quizzes.netlify.app/web/quiz/46)

## Compito

[Refattorizza e commenta il tuo codice](assignment.md)

---

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione AI [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale umana. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.