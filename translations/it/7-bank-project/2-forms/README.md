<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b24f28fc46dd473aa9080f174182adde",
  "translation_date": "2025-10-22T23:35:27+00:00",
  "source_file": "7-bank-project/2-forms/README.md",
  "language_code": "it"
}
-->
# Creare un'app bancaria Parte 2: Creare un modulo di login e registrazione

## Quiz Pre-Lezione

[Quiz pre-lezione](https://ff-quizzes.netlify.app/web/quiz/43)

Hai mai compilato un modulo online e ti è stato rifiutato il formato dell'email? O hai perso tutte le informazioni quando hai cliccato su "Invia"? Tutti abbiamo vissuto queste esperienze frustranti.

I moduli sono il ponte tra gli utenti e la funzionalità della tua applicazione. Proprio come i protocolli accurati che i controllori di volo usano per guidare gli aerei in sicurezza verso le loro destinazioni, i moduli ben progettati forniscono un feedback chiaro e prevengono errori costosi. I moduli mal progettati, invece, possono allontanare gli utenti più velocemente di una comunicazione errata in un aeroporto affollato.

In questa lezione, trasformeremo la tua app bancaria statica in un'applicazione interattiva. Imparerai a creare moduli che convalidano l'input dell'utente, comunicano con i server e forniscono feedback utili. Pensalo come la costruzione dell'interfaccia di controllo che consente agli utenti di navigare tra le funzionalità della tua applicazione.

Alla fine, avrai un sistema completo di login e registrazione con validazione che guida gli utenti verso il successo piuttosto che verso la frustrazione.

## Prerequisiti

Prima di iniziare a creare i moduli, assicuriamoci che tu abbia tutto configurato correttamente. Questa lezione riprende esattamente da dove ci siamo fermati nella precedente, quindi se hai saltato qualche passaggio, potresti voler tornare indietro e completare le basi prima di procedere.

### Configurazione Necessaria

| Componente | Stato | Descrizione |
|------------|-------|-------------|
| [Template HTML](../1-template-route/README.md) | ✅ Necessario | Struttura di base dell'app bancaria |
| [Node.js](https://nodejs.org) | ✅ Necessario | Runtime JavaScript per il server |
| [Server API Bancario](../api/README.md) | ✅ Necessario | Servizio backend per l'archiviazione dei dati |

> 💡 **Consiglio per lo sviluppo**: Dovrai eseguire due server separati contemporaneamente – uno per la tua app bancaria front-end e un altro per l'API backend. Questa configurazione rispecchia lo sviluppo reale, dove i servizi frontend e backend operano indipendentemente.

### Configurazione del Server

**Il tuo ambiente di sviluppo includerà:**
- **Server frontend**: Serve la tua app bancaria (tipicamente porta `3000`)
- **Server API backend**: Gestisce l'archiviazione e il recupero dei dati (porta `5000`)
- **Entrambi i server** possono funzionare contemporaneamente senza conflitti

**Test della connessione API:**
```bash
curl http://localhost:5000/api
# Expected response: "Bank API v1.0.0"
```

**Se vedi la risposta della versione API, sei pronto per procedere!**

---

## Comprendere i moduli HTML e i controlli

I moduli HTML sono il modo in cui gli utenti comunicano con la tua applicazione web. Pensali come il sistema telegrafico che collegava luoghi lontani nel XIX secolo – sono il protocollo di comunicazione tra l'intento dell'utente e la risposta dell'applicazione. Quando progettati con cura, catturano errori, guidano la formattazione degli input e forniscono suggerimenti utili.

I moduli moderni sono significativamente più sofisticati rispetto ai semplici input di testo. HTML5 ha introdotto tipi di input specializzati che gestiscono automaticamente la validazione delle email, la formattazione dei numeri e la selezione delle date. Questi miglioramenti favoriscono sia l'accessibilità che le esperienze degli utenti mobili.

### Elementi Essenziali del Modulo

**Blocchi fondamentali di ogni modulo:**

```html
<!-- Basic form structure -->
<form id="userForm" method="POST">
  <label for="username">Username</label>
  <input id="username" name="username" type="text" required>
  
  <button type="submit">Submit</button>
</form>
```

**Ecco cosa fa questo codice:**
- **Crea** un contenitore del modulo con un identificatore unico
- **Specifica** il metodo HTTP per l'invio dei dati
- **Associa** etichette agli input per l'accessibilità
- **Definisce** un pulsante di invio per elaborare il modulo

### Tipi di Input Moderni e Attributi

| Tipo di Input | Scopo | Esempio di Utilizzo |
|---------------|-------|---------------------|
| `text` | Input di testo generico | `<input type="text" name="username">` |
| `email` | Validazione email | `<input type="email" name="email">` |
| `password` | Inserimento di testo nascosto | `<input type="password" name="password">` |
| `number` | Input numerico | `<input type="number" name="balance" min="0">` |
| `tel` | Numeri di telefono | `<input type="tel" name="phone">` |

> 💡 **Vantaggio HTML5 Moderno**: Usare tipi di input specifici fornisce validazione automatica, tastiere mobili appropriate e un migliore supporto per l'accessibilità senza bisogno di JavaScript aggiuntivo!

### Tipi di Pulsanti e Comportamento

```html
<!-- Different button behaviors -->
<button type="submit">Save Data</button>     <!-- Submits the form -->
<button type="reset">Clear Form</button>    <!-- Resets all fields -->
<button type="button">Custom Action</button> <!-- No default behavior -->
```

**Ecco cosa fa ogni tipo di pulsante:**
- **Pulsanti di invio**: Attivano l'invio del modulo e inviano i dati al punto di destinazione specificato
- **Pulsanti di reset**: Ripristinano tutti i campi del modulo al loro stato iniziale
- **Pulsanti regolari**: Non hanno un comportamento predefinito e richiedono JavaScript personalizzato per la funzionalità

> ⚠️ **Nota Importante**: L'elemento `<input>` è auto-chiudente e non richiede un tag di chiusura. La pratica moderna è scrivere `<input>` senza la barra.

### Creare il Modulo di Login

Ora creiamo un modulo di login pratico che dimostra le pratiche moderne dei moduli HTML. Inizieremo con una struttura di base e la miglioreremo gradualmente con funzionalità di accessibilità e validazione.

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <h2>Login</h2>
    <form id="loginForm" novalidate>
      <div class="form-group">
        <label for="username">Username</label>
        <input id="username" name="user" type="text" required 
               autocomplete="username" placeholder="Enter your username">
      </div>
      <button type="submit">Login</button>
    </form>
  </section>
</template>
```

**Analisi di ciò che accade qui:**
- **Struttura** il modulo con elementi semantici HTML5
- **Raggruppa** elementi correlati usando contenitori `div` con classi significative
- **Associa** etichette agli input usando gli attributi `for` e `id`
- **Include** attributi moderni come `autocomplete` e `placeholder` per una migliore UX
- **Aggiunge** `novalidate` per gestire la validazione con JavaScript invece che con le impostazioni predefinite del browser

### L'importanza delle Etichette

**Perché le etichette sono importanti per lo sviluppo web moderno:**

```mermaid
graph TD
    A[Label Element] --> B[Screen Reader Support]
    A --> C[Click Target Expansion]
    A --> D[Form Validation]
    A --> E[SEO Benefits]
    
    B --> F[Accessible to all users]
    C --> G[Better mobile experience]
    D --> H[Clear error messaging]
    E --> I[Better search ranking]
```

**Cosa ottengono le etichette corrette:**
- **Permettono** ai lettori di schermo di annunciare chiaramente i campi del modulo
- **Espandono** l'area cliccabile (cliccando sull'etichetta si focalizza l'input)
- **Migliorano** l'usabilità mobile con target di tocco più grandi
- **Supportano** la validazione del modulo con messaggi di errore significativi
- **Migliorano** la SEO fornendo significato semantico agli elementi del modulo

> 🎯 **Obiettivo Accessibilità**: Ogni input del modulo dovrebbe avere un'etichetta associata. Questa semplice pratica rende i tuoi moduli utilizzabili da tutti, inclusi gli utenti con disabilità, e migliora l'esperienza per tutti gli utenti.

### Creare il Modulo di Registrazione

Il modulo di registrazione richiede informazioni più dettagliate per creare un account utente completo. Costruiamolo con funzionalità moderne di HTML5 e una migliore accessibilità.

```html
<hr/>
<h2>Register</h2>
<form id="registerForm" novalidate>
  <div class="form-group">
    <label for="user">Username</label>
    <input id="user" name="user" type="text" required 
           autocomplete="username" placeholder="Choose a username">
  </div>
  
  <div class="form-group">
    <label for="currency">Currency</label>
    <input id="currency" name="currency" type="text" value="$" 
           required maxlength="3" placeholder="USD, EUR, etc.">
  </div>
  
  <div class="form-group">
    <label for="description">Account Description</label>
    <input id="description" name="description" type="text" 
           maxlength="100" placeholder="Personal savings, checking, etc.">
  </div>
  
  <div class="form-group">
    <label for="balance">Starting Balance</label>
    <input id="balance" name="balance" type="number" value="0" 
           min="0" step="0.01" placeholder="0.00">
  </div>
  
  <button type="submit">Create Account</button>
</form>
```

**Nel codice sopra, abbiamo:**
- **Organizzato** ogni campo in contenitori div per un migliore stile e layout
- **Aggiunto** attributi `autocomplete` appropriati per il supporto di riempimento automatico del browser
- **Incluso** testo di placeholder utile per guidare l'inserimento dell'utente
- **Impostato** valori predefiniti sensati usando l'attributo `value`
- **Applicato** attributi di validazione come `required`, `maxlength` e `min`
- **Utilizzato** `type="number"` per il campo saldo con supporto decimale

### Esplorare i Tipi di Input e il Comportamento

**I tipi di input moderni offrono funzionalità avanzate:**

| Caratteristica | Vantaggio | Esempio |
|----------------|-----------|---------|
| `type="number"` | Tastierino numerico su mobile | Inserimento del saldo più semplice |
| `step="0.01"` | Controllo della precisione decimale | Permette i centesimi nelle valute |
| `autocomplete` | Riempimento automatico del browser | Completamento più rapido del modulo |
| `placeholder` | Suggerimenti contestuali | Guida le aspettative dell'utente |

> 🎯 **Sfida Accessibilità**: Prova a navigare nei moduli usando solo la tastiera! Usa `Tab` per spostarti tra i campi, `Spazio` per selezionare le caselle e `Invio` per inviare. Questa esperienza ti aiuterà a capire come gli utenti che utilizzano lettori di schermo interagiscono con i tuoi moduli.

## Comprendere i Metodi di Invio del Modulo

Quando qualcuno compila il tuo modulo e clicca su "Invia", quei dati devono essere inviati da qualche parte – di solito a un server che può salvarli. Ci sono diversi modi in cui questo può accadere, e sapere quale utilizzare può evitarti problemi in futuro.

Vediamo cosa succede effettivamente quando qualcuno clicca su quel pulsante di invio.

### Comportamento Predefinito del Modulo

Per prima cosa, osserviamo cosa succede con l'invio di un modulo di base:

**Testa i tuoi moduli attuali:**
1. Clicca sul pulsante *Registrati* nel tuo modulo
2. Osserva i cambiamenti nella barra degli indirizzi del browser
3. Nota come la pagina si ricarica e i dati appaiono nell'URL

![Screenshot del cambiamento dell'URL del browser dopo aver cliccato sul pulsante Registrati](../../../../translated_images/click-register.e89a30bf0d4bc9ca867dc537c4cea679a7c26368bd790969082f524fed2355bc.it.png)

### Confronto tra Metodi HTTP

```mermaid
graph TD
    A[Form Submission] --> B{HTTP Method}
    B -->|GET| C[Data in URL]
    B -->|POST| D[Data in Request Body]
    
    C --> E[Visible in address bar]
    C --> F[Limited data size]
    C --> G[Bookmarkable]
    
    D --> H[Hidden from URL]
    D --> I[Large data capacity]
    D --> J[More secure]
```

**Comprendere le differenze:**

| Metodo | Caso d'uso | Posizione dei dati | Livello di sicurezza | Limite di dimensione |
|--------|------------|--------------------|----------------------|----------------------|
| `GET` | Query di ricerca, filtri | Parametri URL | Basso (visibile) | ~2000 caratteri |
| `POST` | Account utente, dati sensibili | Corpo della richiesta | Alto (nascosto) | Nessun limite pratico |

**Comprendere le differenze fondamentali:**
- **GET**: Aggiunge i dati del modulo all'URL come parametri di query (appropriato per operazioni di ricerca)
- **POST**: Include i dati nel corpo della richiesta (essenziale per informazioni sensibili)
- **Limitazioni di GET**: Vincoli di dimensione, dati visibili, cronologia persistente del browser
- **Vantaggi di POST**: Capacità di dati elevata, protezione della privacy, supporto per il caricamento di file

> 💡 **Migliore Pratica**: Usa `GET` per moduli di ricerca e filtri (recupero dati), usa `POST` per registrazione utente, login e creazione di dati.

### Configurare l'Invio del Modulo

Configuriamo il tuo modulo di registrazione per comunicare correttamente con l'API backend utilizzando il metodo POST:

```html
<form id="registerForm" action="//localhost:5000/api/accounts" 
      method="POST" novalidate>
```

**Ecco cosa fa questa configurazione:**
- **Indirizza** l'invio del modulo al punto di destinazione dell'API
- **Usa** il metodo POST per una trasmissione sicura dei dati
- **Include** `novalidate` per gestire la validazione con JavaScript

### Testare l'Invio del Modulo

**Segui questi passaggi per testare il tuo modulo:**
1. **Compila** il modulo di registrazione con le tue informazioni
2. **Clicca** sul pulsante "Crea Account"
3. **Osserva** la risposta del server nel tuo browser

![Una finestra del browser all'indirizzo localhost:5000/api/accounts, che mostra una stringa JSON con i dati dell'utente](../../../../translated_images/form-post.61de4ca1b964d91a9e338416e19f218504dd0af5f762fbebabfe7ae80edf885f.it.png)

**Cosa dovresti vedere:**
- **Il browser si reindirizza** all'URL del punto di destinazione dell'API
- **Risposta JSON** contenente i dati del tuo nuovo account
- **Conferma del server** che l'account è stato creato con successo

> 🧪 **Tempo di Esperimento**: Prova a registrarti di nuovo con lo stesso nome utente. Che risposta ottieni? Questo ti aiuta a capire come il server gestisce i dati duplicati e le condizioni di errore.

### Comprendere le Risposte JSON

**Quando il server elabora correttamente il tuo modulo:**
```json
{
  "user": "john_doe",
  "currency": "$",
  "description": "Personal savings",
  "balance": 100,
  "id": "unique_account_id"
}
```

**Questa risposta conferma:**
- **Crea** un nuovo account con i dati specificati
- **Assegna** un identificatore unico per riferimento futuro
- **Restituisce** tutte le informazioni dell'account per la verifica
- **Indica** l'archiviazione riuscita nel database

## Gestione Moderna dei Moduli con JavaScript

Gli invii tradizionali dei moduli causano il ricaricamento completo della pagina, simile a come le prime missioni spaziali richiedevano il reset completo del sistema per le correzioni di rotta. Questo approccio interrompe l'esperienza utente e perde lo stato dell'applicazione.

La gestione dei moduli con JavaScript funziona come i sistemi di guida continua utilizzati dalle moderne navicelle spaziali – apportando regolazioni in tempo reale senza perdere il contesto di navigazione. Possiamo intercettare gli invii dei moduli, fornire feedback immediato, gestire gli errori in modo elegante e aggiornare l'interfaccia in base alle risposte del server mantenendo la posizione dell'utente nell'applicazione.

### Perché Evitare il Ricaricamento della Pagina?

```mermaid
sequenceDiagram
    participant User
    participant SPA
    participant Server
    
    User->>SPA: Submits form
    SPA->>Server: AJAX request
    Server-->>SPA: JSON response
    SPA->>User: Updates interface
    
    Note over User,SPA: No page reload!
```

**Vantaggi della gestione dei moduli con JavaScript:**
- **Mantiene** lo stato dell'applicazione e il contesto dell'utente
- **Fornisce** feedback immediato e indicatori di caricamento
- **Abilita** la gestione dinamica degli errori e la validazione
- **Crea** esperienze utente fluide, simili a quelle delle app
- **Permette** logica condizionale basata sulle risposte del server

### Passare dai Moduli Tradizionali a quelli Moderni

**Sfide dell'approccio tradizionale:**
- **Reindirizza** gli utenti lontano dalla tua applicazione
- **Perde** lo stato e il contesto dell'applicazione corrente
- **Richiede** il ricaricamento completo della pagina per operazioni semplici
- **Fornisce** un controllo limitato sul feedback dell'utente

**Vantaggi dell'approccio moderno con JavaScript:**
- **Mantiene** gli utenti all'interno della tua applicazione
- **Conserva** tutto lo stato e i dati dell'applicazione
- **Abilita** la validazione e il feedback in tempo reale
- **Supporta** il miglioramento progressivo e l'accessibilità

### Implementare la Gestione dei Moduli con JavaScript

Sostituiamo l'invio tradizionale del modulo con la gestione moderna degli eventi JavaScript:

```html
<!-- Remove the action attribute and add event handling -->
<form id="registerForm" method="POST" novalidate>
```

**Aggiungi la logica di registrazione al tuo file `app.js`:**

```javascript
// Modern event-driven form handling
function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const data = Object.fromEntries(formData);
  const jsonData = JSON.stringify(data);
  
  console.log('Form data prepared:', data);
}

// Attach event listener when the page loads
document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');
  registerForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
    register();
  });
});
```

**Analisi di ciò che accade qui:**
- **Previene** l'invio predefinito del modulo usando `event.preventDefault()`
- **Recupera** l'elemento del modulo usando la selezione moderna del DOM
- **Estrae** i dati del modulo usando l'API potente `FormData`
- **Converte** FormData in un oggetto semplice con `Object.fromEntries()`
- **Serializza** i dati in formato JSON per la comunicazione con il server
- **Registra** i dati elaborati per il debug e la verifica

### Comprendere l'API FormData

**L'API FormData offre una gestione potente dei moduli:**

```javascript
// Example of what FormData captures
const formData = new FormData(registerForm);

// FormData automatically captures:
// {
//   "user": "john_doe",
//   "currency": "$", 
//   "description": "Personal account",
//   "balance": "100"
// }
```

**Vantaggi dell'API FormData:**
- **Raccolta completa**: Cattura tutti gli elementi del modulo inclusi testo, file e input complessi
- **Consapevolezza del tipo**: Gestisce automaticamente diversi tipi di input senza codifica personalizzata
- **Efficienza**: Elimina la raccolta manuale dei campi con una singola chiamata API
- **Adattabilità**: Mantiene la funzionalità mentre la struttura del modulo evolve

### Creare la Funzione di Comunicazione con il Server

Ora costruiamo una funzione robusta per comunicare con il server API usando modelli moderni di JavaScript:

```javascript
async function createAccount(account) {
  try {
    const response = await fetch('//localhost:5000/api/accounts', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: account
    });
    
    // Check if the response was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Account creation failed:', error);
    return { error: error.message || 'Network error occurred' };
  }
}
```

**Comprendere JavaScript asincrono:**

```mermaid
sequenceDiagram
    participant JS as JavaScript
    participant Fetch as Fetch API
    participant Server as Backend Server
    
    JS->>Fetch: fetch() request
    Fetch->>Server: HTTP POST
    Server-->>Fetch: JSON response
    Fetch-->>JS: await response
    JS->>JS: Process data
```

**Cosa realizza questa implementazione moderna:**
- **Usa** `async/await` per un codice asincrono leggibile
- **Include** una gestione corretta degli errori con blocchi try/catch
- **Controlla** lo stato della risposta prima di elaborare i dati
- **Imposta** intestazioni appropriate per la comunicazione JSON
- **Fornisce** messaggi di errore dettagliati per il debug
- **Restituisce** una struttura dati coerente per casi di successo ed errore

### La potenza della Fetch API moderna

**Vantaggi della Fetch API rispetto ai metodi più vecchi:**

| Caratteristica | Vantaggio | Implementazione |
|----------------|-----------|-----------------|
| Basata su Promise | Codice asincrono pulito | `await fetch()` |
| Personalizzazione delle richieste | Controllo completo HTTP | Headers, metodi, body |
| Gestione delle risposte | Parsing flessibile dei dati | `.json()`, `.text()`, `.blob()` |
| Gestione degli errori | Cattura completa degli errori | Blocchi Try/catch |

> 🎥 **Scopri di più**: [Tutorial su Async/Await](https://youtube.com/watch?v=YwmlRkrxvkk) - Comprendere i pattern asincroni di JavaScript per lo sviluppo web moderno.

**Concetti chiave per la comunicazione con il server:**
- Le **funzioni asincrone** permettono di sospendere l'esecuzione per attendere le risposte del server
- La parola chiave **await** rende il codice asincrono leggibile come codice sincrono
- La **Fetch API** offre richieste HTTP moderne basate su Promise
- La **gestione degli errori** garantisce che la tua app risponda in modo adeguato ai problemi di rete

### Completare la funzione di registrazione

Mettiamo insieme tutto con una funzione di registrazione completa e pronta per la produzione:

```javascript
async function register() {
  const registerForm = document.getElementById('registerForm');
  const submitButton = registerForm.querySelector('button[type="submit"]');
  
  try {
    // Show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Creating Account...';
    
    // Process form data
    const formData = new FormData(registerForm);
    const jsonData = JSON.stringify(Object.fromEntries(formData));
    
    // Send to server
    const result = await createAccount(jsonData);
    
    if (result.error) {
      console.error('Registration failed:', result.error);
      alert(`Registration failed: ${result.error}`);
      return;
    }
    
    console.log('Account created successfully!', result);
    alert(`Welcome, ${result.user}! Your account has been created.`);
    
    // Reset form after successful registration
    registerForm.reset();
    
  } catch (error) {
    console.error('Unexpected error:', error);
    alert('An unexpected error occurred. Please try again.');
  } finally {
    // Restore button state
    submitButton.disabled = false;
    submitButton.textContent = 'Create Account';
  }
}
```

**Questa implementazione avanzata include:**
- **Fornisce** feedback visivo durante l'invio del modulo
- **Disabilita** il pulsante di invio per prevenire invii duplicati
- **Gestisce** sia errori previsti che imprevisti in modo efficace
- **Mostra** messaggi di successo e di errore user-friendly
- **Reimposta** il modulo dopo una registrazione riuscita
- **Ripristina** lo stato dell'interfaccia utente indipendentemente dal risultato

### Testare la tua implementazione

**Apri gli strumenti per sviluppatori del browser e testa la registrazione:**

1. **Apri** la console del browser (F12 → scheda Console)
2. **Compila** il modulo di registrazione
3. **Clicca** su "Crea Account"
4. **Osserva** i messaggi della console e il feedback per l'utente

![Screenshot che mostra un messaggio di log nella console del browser](../../../../translated_images/browser-console.efaf0b51aaaf67782a29e1a0bb32cc063f189b18e894eb5926e02f1abe864ec2.it.png)

**Cosa dovresti vedere:**
- **Stato di caricamento** appare sul pulsante di invio
- **Log della console** mostrano informazioni dettagliate sul processo
- **Messaggio di successo** appare quando la creazione dell'account riesce
- **Il modulo si reimposta** automaticamente dopo l'invio riuscito

> 🔒 **Considerazione sulla sicurezza**: Attualmente, i dati viaggiano su HTTP, che non è sicuro per la produzione. Nelle applicazioni reali, utilizza sempre HTTPS per crittografare la trasmissione dei dati. Scopri di più su [sicurezza HTTPS](https://en.wikipedia.org/wiki/HTTPS) e perché è essenziale per proteggere i dati degli utenti.

## Validazione completa del modulo

La validazione del modulo previene l'esperienza frustrante di scoprire errori solo dopo l'invio. Come i sistemi ridondanti multipli sulla Stazione Spaziale Internazionale, una validazione efficace utilizza più livelli di controlli di sicurezza.

L'approccio ottimale combina la validazione a livello di browser per un feedback immediato, la validazione JavaScript per migliorare l'esperienza utente e la validazione lato server per sicurezza e integrità dei dati. Questa ridondanza garantisce sia la soddisfazione dell'utente che la protezione del sistema.

### Comprendere i livelli di validazione

```mermaid
graph TD
    A[User Input] --> B[HTML5 Validation]
    B --> C[Custom JavaScript Validation]
    C --> D[Client-Side Complete]
    D --> E[Server-Side Validation]
    E --> F[Data Storage]
    
    B -->|Invalid| G[Browser Error Message]
    C -->|Invalid| H[Custom Error Display]
    E -->|Invalid| I[Server Error Response]
```

**Strategia di validazione multilivello:**
- **Validazione HTML5**: Controlli immediati basati sul browser
- **Validazione JavaScript**: Logica personalizzata e esperienza utente migliorata
- **Validazione lato server**: Controlli finali di sicurezza e integrità dei dati
- **Miglioramento progressivo**: Funziona anche se JavaScript è disabilitato

### Attributi di validazione HTML5

**Strumenti moderni di validazione a tua disposizione:**

| Attributo | Scopo | Esempio di utilizzo | Comportamento del browser |
|-----------|-------|---------------------|---------------------------|
| `required` | Campi obbligatori | `<input required>` | Impedisce invii vuoti |
| `minlength`/`maxlength` | Limiti di lunghezza del testo | `<input maxlength="20">` | Impone limiti di caratteri |
| `min`/`max` | Intervalli numerici | `<input min="0" max="1000">` | Valida i limiti numerici |
| `pattern` | Regole regex personalizzate | `<input pattern="[A-Za-z]+">` | Corrisponde a formati specifici |
| `type` | Validazione del tipo di dato | `<input type="email">` | Validazione specifica per formato |

### Stile CSS per la validazione

**Crea feedback visivi per gli stati di validazione:**

```css
/* Valid input styling */
input:valid {
  border-color: #28a745;
  background-color: #f8fff9;
}

/* Invalid input styling */
input:invalid {
  border-color: #dc3545;
  background-color: #fff5f5;
}

/* Focus states for better accessibility */
input:focus:valid {
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
}

input:focus:invalid {
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}
```

**Cosa ottengono questi segnali visivi:**
- **Bordi verdi**: Indicano una validazione riuscita, come semafori verdi nel controllo missione
- **Bordi rossi**: Segnalano errori di validazione che richiedono attenzione
- **Evidenziazione del focus**: Fornisce un contesto visivo chiaro per la posizione corrente dell'input
- **Stile coerente**: Stabilisce pattern di interfaccia prevedibili che gli utenti possono imparare

> 💡 **Suggerimento Pro**: Usa le pseudo-classi CSS `:valid` e `:invalid` per fornire feedback visivo immediato mentre gli utenti digitano, creando un'interfaccia reattiva e utile.

### Implementare una validazione completa

Miglioriamo il modulo di registrazione con una validazione robusta che offre un'eccellente esperienza utente e qualità dei dati:

```html
<form id="registerForm" method="POST" novalidate>
  <div class="form-group">
    <label for="user">Username <span class="required">*</span></label>
    <input id="user" name="user" type="text" required 
           minlength="3" maxlength="20" 
           pattern="[a-zA-Z0-9_]+" 
           autocomplete="username"
           title="Username must be 3-20 characters, letters, numbers, and underscores only">
    <small class="form-text">Choose a unique username (3-20 characters)</small>
  </div>
  
  <div class="form-group">
    <label for="currency">Currency <span class="required">*</span></label>
    <input id="currency" name="currency" type="text" required 
           value="$" maxlength="3" 
           pattern="[A-Z$€£¥₹]+" 
           title="Enter a valid currency symbol or code">
    <small class="form-text">Currency symbol (e.g., $, €, £)</small>
  </div>
  
  <div class="form-group">
    <label for="description">Account Description</label>
    <input id="description" name="description" type="text" 
           maxlength="100" 
           placeholder="Personal savings, checking, etc.">
    <small class="form-text">Optional description (up to 100 characters)</small>
  </div>
  
  <div class="form-group">
    <label for="balance">Starting Balance</label>
    <input id="balance" name="balance" type="number" 
           value="0" min="0" step="0.01" 
           title="Enter a positive number for your starting balance">
    <small class="form-text">Initial account balance (minimum $0.00)</small>
  </div>
  
  <button type="submit">Create Account</button>
</form>
```

**Comprendere la validazione avanzata:**
- **Combina** indicatori di campi obbligatori con descrizioni utili
- **Include** attributi `pattern` per la validazione del formato
- **Fornisce** attributi `title` per accessibilità e tooltip
- **Aggiunge** testo di aiuto per guidare l'input dell'utente
- **Utilizza** una struttura HTML semantica per una migliore accessibilità

### Regole di validazione avanzate

**Cosa ottiene ogni regola di validazione:**

| Campo | Regole di validazione | Beneficio per l'utente |
|-------|-----------------------|------------------------|
| Nome utente | `required`, `minlength="3"`, `maxlength="20"`, `pattern="[a-zA-Z0-9_]+"` | Garantisce identificatori validi e unici |
| Valuta | `required`, `maxlength="3"`, `pattern="[A-Z$€£¥₹]+"` | Accetta simboli di valuta comuni |
| Saldo | `min="0"`, `step="0.01"`, `type="number"` | Impedisce saldi negativi |
| Descrizione | `maxlength="100"` | Limiti di lunghezza ragionevoli |

### Testare il comportamento della validazione

**Prova questi scenari di validazione:**
1. **Invia** il modulo con campi obbligatori vuoti
2. **Inserisci** un nome utente più corto di 3 caratteri
3. **Prova** caratteri speciali nel campo del nome utente
4. **Inserisci** un importo di saldo negativo

![Screenshot che mostra l'errore di validazione quando si tenta di inviare il modulo](../../../../translated_images/validation-error.8bd23e98d416c22f80076d04829a4bb718e0e550fd622862ef59008ccf0d5dce.it.png)

**Cosa osserverai:**
- **Il browser mostra** messaggi di validazione nativi
- **Cambiamenti di stile** basati sugli stati `:valid` e `:invalid`
- **L'invio del modulo** è impedito finché tutte le validazioni non sono superate
- **Il focus si sposta automaticamente** sul primo campo non valido

### Validazione lato client vs lato server

```mermaid
graph LR
    A[Client-Side Validation] --> B[Instant Feedback]
    A --> C[Better UX]
    A --> D[Reduced Server Load]
    
    E[Server-Side Validation] --> F[Security]
    E --> G[Data Integrity]
    E --> H[Business Rules]
    
    A -.-> I[Both Required]
    E -.-> I
```

**Perché hai bisogno di entrambi i livelli:**
- **Validazione lato client**: Fornisce feedback immediato e migliora l'esperienza utente
- **Validazione lato server**: Garantisce sicurezza e gestisce regole aziendali complesse
- **Approccio combinato**: Crea applicazioni robuste, user-friendly e sicure
- **Miglioramento progressivo**: Funziona anche quando JavaScript è disabilitato

> 🛡️ **Promemoria di sicurezza**: Non fidarti mai solo della validazione lato client! Gli utenti malintenzionati possono bypassare i controlli lato client, quindi la validazione lato server è essenziale per sicurezza e integrità dei dati.

---



---

## Sfida dell'Agente GitHub Copilot 🚀

Usa la modalità Agente per completare la seguente sfida:

**Descrizione:** Migliora il modulo di registrazione con una validazione completa lato client e feedback per l'utente. Questa sfida ti aiuterà a praticare la validazione dei moduli, la gestione degli errori e il miglioramento dell'esperienza utente con feedback interattivo.

**Prompt:** Crea un sistema completo di validazione del modulo per il modulo di registrazione che includa: 1) Feedback di validazione in tempo reale per ogni campo mentre l'utente digita, 2) Messaggi di validazione personalizzati che appaiono sotto ogni campo di input, 3) Un campo di conferma password con validazione di corrispondenza, 4) Indicatori visivi (come segni di spunta verdi per i campi validi e avvisi rossi per quelli non validi), 5) Un pulsante di invio che si abilita solo quando tutte le validazioni sono superate. Usa attributi di validazione HTML5, CSS per lo stile degli stati di validazione e JavaScript per il comportamento interattivo.

Scopri di più sulla [modalità agente](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) qui.

## 🚀 Sfida

Mostra un messaggio di errore nell'HTML se l'utente esiste già.

Ecco un esempio di come potrebbe apparire la pagina di login finale dopo un po' di styling:

![Screenshot della pagina di login dopo aver aggiunto gli stili CSS](../../../../translated_images/result.96ef01f607bf856aa9789078633e94a4f7664d912f235efce2657299becca483.it.png)

## Quiz post-lezione

[Quiz post-lezione](https://ff-quizzes.netlify.app/web/quiz/44)

## Revisione e studio autonomo

Gli sviluppatori sono diventati molto creativi nei loro sforzi di costruzione di moduli, specialmente per quanto riguarda le strategie di validazione. Scopri diversi flussi di moduli guardando [CodePen](https://codepen.com); riesci a trovare moduli interessanti e ispiratori?

## Compito

[Stilizza la tua app bancaria](assignment.md)

---

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione AI [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale umana. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.