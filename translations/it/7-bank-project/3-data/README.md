<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "89d0df9854ed020f155e94882ae88d4c",
  "translation_date": "2025-08-29T00:02:00+00:00",
  "source_file": "7-bank-project/3-data/README.md",
  "language_code": "it"
}
-->
# Costruire un'app bancaria Parte 3: Metodi per recuperare e utilizzare i dati

## Quiz Pre-Lezione

[Quiz pre-lezione](https://ff-quizzes.netlify.app/web/quiz/45)

### Introduzione

Al centro di ogni applicazione web c'è *il dato*. I dati possono assumere molte forme, ma il loro scopo principale è sempre quello di mostrare informazioni all'utente. Con le app web che diventano sempre più interattive e complesse, il modo in cui l'utente accede e interagisce con le informazioni è ora una parte fondamentale dello sviluppo web.

In questa lezione, vedremo come recuperare dati da un server in modo asincrono e utilizzare questi dati per mostrare informazioni su una pagina web senza ricaricare l'HTML.

### Prerequisiti

È necessario aver costruito la parte [Modulo di Login e Registrazione](../2-forms/README.md) dell'app web per questa lezione. Inoltre, è necessario installare [Node.js](https://nodejs.org) e [eseguire l'API del server](../api/README.md) localmente per ottenere i dati dell'account.

Puoi verificare che il server stia funzionando correttamente eseguendo questo comando in un terminale:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## AJAX e recupero dei dati

I siti web tradizionali aggiornano il contenuto mostrato quando l'utente seleziona un link o invia dati tramite un modulo, ricaricando l'intera pagina HTML. Ogni volta che è necessario caricare nuovi dati, il server web restituisce una nuova pagina HTML che deve essere elaborata dal browser, interrompendo l'azione corrente dell'utente e limitando le interazioni durante il caricamento. Questo flusso di lavoro è anche chiamato *Applicazione Multi-Pagina* o *MPA*.

![Flusso di aggiornamento in un'applicazione multi-pagina](../../../../translated_images/mpa.7f7375a1a2d4aa779d3f928a2aaaf9ad76bcdeb05cfce2dc27ab126024050f51.it.png)

Quando le applicazioni web hanno iniziato a diventare più complesse e interattive, è emersa una nuova tecnica chiamata [AJAX (JavaScript e XML Asincrono)](https://en.wikipedia.org/wiki/Ajax_(programming)). Questa tecnica consente alle app web di inviare e recuperare dati da un server in modo asincrono utilizzando JavaScript, senza dover ricaricare la pagina HTML, risultando in aggiornamenti più rapidi e interazioni più fluide. Quando vengono ricevuti nuovi dati dal server, la pagina HTML corrente può essere aggiornata con JavaScript utilizzando l'API [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model). Nel tempo, questo approccio si è evoluto in ciò che ora viene chiamato [*Applicazione Singola Pagina* o *SPA*](https://en.wikipedia.org/wiki/Single-page_application).

![Flusso di aggiornamento in un'applicazione singola pagina](../../../../translated_images/spa.268ec73b41f992c2a21ef9294235c6ae597b3c37e2c03f0494c2d8857325cc57.it.png)

Quando AJAX è stato introdotto per la prima volta, l'unica API disponibile per recuperare dati in modo asincrono era [`XMLHttpRequest`](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest). Tuttavia, i browser moderni ora implementano anche l'API [`Fetch`](https://developer.mozilla.org/docs/Web/API/Fetch_API), più comoda e potente, che utilizza le promesse ed è più adatta per manipolare dati JSON.

> Sebbene tutti i browser moderni supportino l'API `Fetch`, se desideri che la tua applicazione web funzioni su browser legacy o vecchi, è sempre una buona idea controllare prima la [tabella di compatibilità su caniuse.com](https://caniuse.com/fetch).

### Compito

Nella [lezione precedente](../2-forms/README.md) abbiamo implementato il modulo di registrazione per creare un account. Ora aggiungeremo il codice per effettuare il login utilizzando un account esistente e recuperare i suoi dati. Apri il file `app.js` e aggiungi una nuova funzione `login`:

```js
async function login() {
  const loginForm = document.getElementById('loginForm')
  const user = loginForm.user.value;
}
```

Qui iniziamo recuperando l'elemento del modulo con `getElementById()`, e poi otteniamo il nome utente dall'input con `loginForm.user.value`. Ogni controllo del modulo può essere accessibile tramite il suo nome (impostato nell'HTML utilizzando l'attributo `name`) come proprietà del modulo.

In modo simile a quanto fatto per la registrazione, creeremo un'altra funzione per eseguire una richiesta al server, ma questa volta per recuperare i dati dell'account:

```js
async function getAccount(user) {
  try {
    const response = await fetch('//localhost:5000/api/accounts/' + encodeURIComponent(user));
    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}
```

Utilizziamo l'API `fetch` per richiedere i dati in modo asincrono dal server, ma questa volta non abbiamo bisogno di parametri extra oltre all'URL da chiamare, poiché stiamo solo interrogando i dati. Per impostazione predefinita, `fetch` crea una richiesta HTTP [`GET`](https://developer.mozilla.org/docs/Web/HTTP/Methods/GET), che è ciò che ci serve qui.

✅ `encodeURIComponent()` è una funzione che esegue l'escape dei caratteri speciali per l'URL. Quali problemi potremmo avere se non chiamiamo questa funzione e utilizziamo direttamente il valore `user` nell'URL?

Ora aggiorniamo la nostra funzione `login` per utilizzare `getAccount`:

```js
async function login() {
  const loginForm = document.getElementById('loginForm')
  const user = loginForm.user.value;
  const data = await getAccount(user);

  if (data.error) {
    return console.log('loginError', data.error);
  }

  account = data;
  navigate('/dashboard');
}
```

Poiché `getAccount` è una funzione asincrona, dobbiamo abbinarla alla parola chiave `await` per attendere il risultato del server. Come per qualsiasi richiesta al server, dobbiamo anche gestire i casi di errore. Per ora aggiungeremo solo un messaggio di log per mostrare l'errore e ci torneremo più avanti.

Dobbiamo poi salvare i dati da qualche parte per poterli utilizzare successivamente per mostrare le informazioni della dashboard. Poiché la variabile `account` non esiste ancora, creeremo una variabile globale all'inizio del nostro file:

```js
let account = null;
```

Dopo che i dati dell'utente sono stati salvati in una variabile, possiamo navigare dalla pagina *login* alla *dashboard* utilizzando la funzione `navigate()` che abbiamo già.

Infine, dobbiamo chiamare la nostra funzione `login` quando il modulo di login viene inviato, modificando l'HTML:

```html
<form id="loginForm" action="javascript:login()">
```

Verifica che tutto funzioni correttamente registrando un nuovo account e provando a effettuare il login utilizzando lo stesso account.

Prima di passare alla parte successiva, possiamo anche completare la funzione `register` aggiungendo questo alla fine della funzione:

```js
account = result;
navigate('/dashboard');
```

✅ Sapevi che per impostazione predefinita puoi chiamare le API del server solo dal *dominio e porta* della pagina web che stai visualizzando? Questo è un meccanismo di sicurezza imposto dai browser. Ma aspetta, la nostra app web è in esecuzione su `localhost:3000` mentre l'API del server è in esecuzione su `localhost:5000`, perché funziona? Utilizzando una tecnica chiamata [Condivisione delle Risorse tra Origini Diverse (CORS)](https://developer.mozilla.org/docs/Web/HTTP/CORS), è possibile eseguire richieste HTTP cross-origin se il server aggiunge intestazioni speciali alla risposta, consentendo eccezioni per domini specifici.

> Scopri di più sulle API seguendo questa [lezione](https://docs.microsoft.com/learn/modules/use-apis-discover-museum-art/?WT.mc_id=academic-77807-sagibbon)

## Aggiornare l'HTML per mostrare i dati

Ora che abbiamo i dati dell'utente, dobbiamo aggiornare l'HTML esistente per mostrarli. Sappiamo già come recuperare un elemento dal DOM utilizzando, ad esempio, `document.getElementById()`. Dopo aver ottenuto un elemento base, ecco alcune API che puoi utilizzare per modificarlo o aggiungere elementi figli:

- Utilizzando la proprietà [`textContent`](https://developer.mozilla.org/docs/Web/API/Node/textContent) puoi cambiare il testo di un elemento. Nota che modificare questo valore rimuove tutti i figli dell'elemento (se presenti) e li sostituisce con il testo fornito. Pertanto, è anche un metodo efficiente per rimuovere tutti i figli di un dato elemento assegnando una stringa vuota `''`.

- Utilizzando [`document.createElement()`](https://developer.mozilla.org/docs/Web/API/Document/createElement) insieme al metodo [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append) puoi creare e allegare uno o più nuovi elementi figli.

✅ Utilizzando la proprietà [`innerHTML`](https://developer.mozilla.org/docs/Web/API/Element/innerHTML) di un elemento è anche possibile modificare i suoi contenuti HTML, ma questa dovrebbe essere evitata poiché è vulnerabile agli attacchi di [cross-site scripting (XSS)](https://developer.mozilla.org/docs/Glossary/Cross-site_scripting).

### Compito

Prima di passare alla schermata della dashboard, c'è un'altra cosa che dovremmo fare nella pagina *login*. Attualmente, se provi a effettuare il login con un nome utente che non esiste, viene mostrato un messaggio nella console, ma per un utente normale nulla cambia e non si sa cosa stia succedendo.

Aggiungiamo un elemento segnaposto nel modulo di login dove possiamo mostrare un messaggio di errore, se necessario. Un buon posto sarebbe appena prima del `<button>` di login:

```html
...
<div id="loginError"></div>
<button>Login</button>
...
```

Questo elemento `<div>` è vuoto, il che significa che nulla verrà mostrato sullo schermo fino a quando non aggiungiamo del contenuto. Gli diamo anche un `id` per poterlo recuperare facilmente con JavaScript.

Torna al file `app.js` e crea una nuova funzione helper `updateElement`:

```js
function updateElement(id, text) {
  const element = document.getElementById(id);
  element.textContent = text;
}
```

Questa funzione è piuttosto semplice: dato un *id* dell'elemento e un *testo*, aggiornerà il contenuto testuale dell'elemento DOM con l'`id` corrispondente. Utilizziamo questo metodo al posto del precedente messaggio di errore nella funzione `login`:

```js
if (data.error) {
  return updateElement('loginError', data.error);
}
```

Ora, se provi a effettuare il login con un account non valido, dovresti vedere qualcosa del genere:

![Screenshot che mostra il messaggio di errore durante il login](../../../../translated_images/login-error.416fe019b36a63276764c2349df5d99e04ebda54fefe60c715ee87a28d5d4ad0.it.png)

Ora abbiamo un testo di errore che appare visivamente, ma se lo provi con un lettore di schermo noterai che nulla viene annunciato. Per fare in modo che il testo aggiunto dinamicamente a una pagina venga annunciato dai lettori di schermo, sarà necessario utilizzare qualcosa chiamato [Live Region](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/ARIA_Live_Regions). Qui utilizzeremo un tipo specifico di live region chiamato alert:

```html
<div id="loginError" role="alert"></div>
```

Implementa lo stesso comportamento per gli errori della funzione `register` (non dimenticare di aggiornare l'HTML).

## Mostrare informazioni sulla dashboard

Utilizzando le stesse tecniche appena viste, ci occuperemo anche di mostrare le informazioni dell'account sulla pagina della dashboard.

Questo è l'aspetto di un oggetto account ricevuto dal server:

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
  ],
}
```

> Nota: per semplificarti la vita, puoi utilizzare l'account `test` preesistente che è già popolato con dati.

### Compito

Iniziamo sostituendo la sezione "Saldo" nell'HTML per aggiungere elementi segnaposto:

```html
<section>
  Balance: <span id="balance"></span><span id="currency"></span>
</section>
```

Aggiungeremo anche una nuova sezione appena sotto per mostrare la descrizione dell'account:

```html
<h2 id="description"></h2>
```

✅ Poiché la descrizione dell'account funziona come un titolo per il contenuto sottostante, è contrassegnata semanticamente come intestazione. Scopri di più su come [la struttura delle intestazioni](https://www.nomensa.com/blog/2017/how-structure-headings-web-accessibility) sia importante per l'accessibilità e osserva criticamente la pagina per determinare cos'altro potrebbe essere un'intestazione.

Successivamente, creeremo una nuova funzione in `app.js` per riempire il segnaposto:

```js
function updateDashboard() {
  if (!account) {
    return navigate('/login');
  }

  updateElement('description', account.description);
  updateElement('balance', account.balance.toFixed(2));
  updateElement('currency', account.currency);
}
```

Per prima cosa, verifichiamo di avere i dati dell'account necessari prima di procedere. Poi utilizziamo la funzione `updateElement()` che abbiamo creato in precedenza per aggiornare l'HTML.

> Per rendere la visualizzazione del saldo più gradevole, utilizziamo il metodo [`toFixed(2)`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) per forzare la visualizzazione del valore con 2 cifre decimali.

Ora dobbiamo chiamare la nostra funzione `updateDashboard()` ogni volta che la dashboard viene caricata. Se hai già completato l'[assegnazione della lezione 1](../1-template-route/assignment.md) questo dovrebbe essere semplice, altrimenti puoi utilizzare la seguente implementazione.

Aggiungi questo codice alla fine della funzione `updateRoute()`:

```js
if (typeof route.init === 'function') {
  route.init();
}
```

E aggiorna la definizione delle rotte con:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: updateDashboard }
};
```

Con questa modifica, ogni volta che la pagina della dashboard viene mostrata, viene chiamata la funzione `updateDashboard()`. Dopo un login, dovresti quindi essere in grado di vedere il saldo dell'account, la valuta e la descrizione.

## Creare righe della tabella dinamicamente con template HTML

Nella [prima lezione](../1-template-route/README.md) abbiamo utilizzato template HTML insieme al metodo [`appendChild()`](https://developer.mozilla.org/docs/Web/API/Node/appendChild) per implementare la navigazione nella nostra app. I template possono anche essere più piccoli e utilizzati per popolare dinamicamente parti ripetitive di una pagina.

Utilizzeremo un approccio simile per mostrare l'elenco delle transazioni nella tabella HTML.

### Compito

Aggiungi un nuovo template nel `<body>` dell'HTML:

```html
<template id="transaction">
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</template>
```

Questo template rappresenta una singola riga della tabella, con le 3 colonne che vogliamo popolare: *data*, *oggetto* e *importo* di una transazione.

Poi, aggiungi questa proprietà `id` all'elemento `<tbody>` della tabella all'interno del template della dashboard per renderlo più facile da trovare utilizzando JavaScript:

```html
<tbody id="transactions"></tbody>
```

Il nostro HTML è pronto, passiamo al codice JavaScript e creiamo una nuova funzione `createTransactionRow`:

```js
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

Questa funzione fa esattamente ciò che il suo nome implica: utilizzando il template che abbiamo creato prima, crea una nuova riga della tabella e ne riempie i contenuti utilizzando i dati della transazione. Utilizzeremo questa funzione nella nostra `updateDashboard()` per popolare la tabella:

```js
const transactionsRows = document.createDocumentFragment();
for (const transaction of account.transactions) {
  const transactionRow = createTransactionRow(transaction);
  transactionsRows.appendChild(transactionRow);
}
updateElement('transactions', transactionsRows);
```

Qui utilizziamo il metodo [`document.createDocumentFragment()`](https://developer.mozilla.org/docs/Web/API/Document/createDocumentFragment) che crea un nuovo frammento DOM su cui possiamo lavorare, prima di allegarlo finalmente alla nostra tabella HTML.

C'è ancora una cosa che dobbiamo fare prima che questo codice possa funzionare, poiché la nostra funzione `updateElement()` attualmente supporta solo contenuti testuali. Modifichiamo un po' il suo codice:

```js
function updateElement(id, textOrNode) {
  const element = document.getElementById(id);
  element.textContent = ''; // Removes all children
  element.append(textOrNode);
}
```

Utilizziamo il metodo [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append) poiché consente di allegare sia testo che [Nodi DOM](https://developer.mozilla.org/docs/Web/API/Node) a un elemento padre, perfetto per tutti i nostri casi d'uso.
Se provi a utilizzare l'account `test` per accedere, ora dovresti vedere un elenco di transazioni nella dashboard 🎉.

---

## 🚀 Sfida

Collaborate per far sì che la pagina della dashboard sembri una vera app bancaria. Se hai già stilizzato la tua app, prova a utilizzare [media queries](https://developer.mozilla.org/docs/Web/CSS/Media_Queries) per creare un [design responsivo](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks) che funzioni bene sia su dispositivi desktop che mobili.

Ecco un esempio di una pagina dashboard stilizzata:

![Screenshot di un esempio del risultato della dashboard dopo la stilizzazione](../../../../translated_images/screen2.123c82a831a1d14ab2061994be2fa5de9cec1ce651047217d326d4773a6348e4.it.png)

## Quiz post-lezione

[Quiz post-lezione](https://ff-quizzes.netlify.app/web/quiz/46)

## Compito

[Refattorizza e commenta il tuo codice](assignment.md)

---

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione automatica [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si consiglia una traduzione professionale eseguita da un traduttore umano. Non siamo responsabili per eventuali fraintendimenti o interpretazioni errate derivanti dall'uso di questa traduzione.