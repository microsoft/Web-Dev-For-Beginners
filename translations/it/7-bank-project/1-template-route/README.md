<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8da1b5e2c63f749808858c53f37b8ce7",
  "translation_date": "2025-08-26T00:36:13+00:00",
  "source_file": "7-bank-project/1-template-route/README.md",
  "language_code": "it"
}
-->
# Crea un'app bancaria Parte 1: Template HTML e Rotte in un'app web

## Quiz Pre-Lezione

[Quiz pre-lezione](https://ff-quizzes.netlify.app/web/quiz/41)

### Introduzione

Dall'avvento di JavaScript nei browser, i siti web sono diventati più interattivi e complessi che mai. Le tecnologie web sono ora comunemente utilizzate per creare applicazioni completamente funzionali che girano direttamente nel browser, chiamate [applicazioni web](https://it.wikipedia.org/wiki/Web_application). Poiché le app web sono altamente interattive, gli utenti non vogliono attendere il ricaricamento completo della pagina ogni volta che viene eseguita un'azione. Per questo motivo, JavaScript viene utilizzato per aggiornare direttamente l'HTML tramite il DOM, offrendo un'esperienza utente più fluida.

In questa lezione, getteremo le basi per creare un'app bancaria web, utilizzando template HTML per creare più schermate che possono essere visualizzate e aggiornate senza dover ricaricare l'intera pagina HTML.

### Prerequisiti

Hai bisogno di un server web locale per testare l'app web che costruiremo in questa lezione. Se non ne hai uno, puoi installare [Node.js](https://nodejs.org) e utilizzare il comando `npx lite-server` dalla tua cartella di progetto. Questo creerà un server web locale e aprirà la tua app in un browser.

### Preparazione

Sul tuo computer, crea una cartella chiamata `bank` con un file chiamato `index.html` al suo interno. Partiremo da questo [boilerplate HTML](https://it.wikipedia.org/wiki/Boilerplate_code):

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bank App</title>
  </head>
  <body>
    <!-- This is where you'll work -->
  </body>
</html>
```

---

## Template HTML

Se vuoi creare più schermate per una pagina web, una soluzione potrebbe essere creare un file HTML per ogni schermata che vuoi visualizzare. Tuttavia, questa soluzione presenta alcune difficoltà:

- Devi ricaricare l'intero HTML quando cambi schermata, il che può essere lento.
- È difficile condividere dati tra le diverse schermate.

Un altro approccio è avere un solo file HTML e definire più [template HTML](https://developer.mozilla.org/docs/Web/HTML/Element/template) utilizzando l'elemento `<template>`. Un template è un blocco HTML riutilizzabile che non viene visualizzato dal browser e deve essere istanziato a runtime utilizzando JavaScript.

### Compito

Creeremo un'app bancaria con due schermate: la pagina di login e la dashboard. Per prima cosa, aggiungiamo nel corpo dell'HTML un elemento segnaposto che utilizzeremo per istanziare le diverse schermate della nostra app:

```html
<div id="app">Loading...</div>
```

Gli assegniamo un `id` per renderlo più facile da individuare con JavaScript in seguito.

> Suggerimento: poiché il contenuto di questo elemento verrà sostituito, possiamo inserire un messaggio o un indicatore di caricamento che verrà mostrato mentre l'app si sta caricando.

Successivamente, aggiungiamo sotto il template HTML per la pagina di login. Per ora inseriremo solo un titolo e una sezione contenente un link che utilizzeremo per la navigazione.

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <a href="/dashboard">Login</a>
  </section>
</template>
```

Poi aggiungeremo un altro template HTML per la pagina della dashboard. Questa pagina conterrà diverse sezioni:

- Un'intestazione con un titolo e un link per il logout
- Il saldo corrente del conto bancario
- Un elenco di transazioni, visualizzato in una tabella

```html
<template id="dashboard">
  <header>
    <h1>Bank App</h1>
    <a href="/login">Logout</a>
  </header>
  <section>
    Balance: 100$
  </section>
  <section>
    <h2>Transactions</h2>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Object</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </section>
</template>
```

> Suggerimento: quando crei template HTML, se vuoi vedere come appariranno, puoi commentare le righe `<template>` e `</template>` racchiudendole con `<!-- -->`.

✅ Perché pensi che utilizziamo gli attributi `id` sui template? Potremmo usare qualcos'altro come le classi?

## Visualizzare i template con JavaScript

Se provi il tuo file HTML attuale in un browser, vedrai che rimane bloccato su `Loading...`. Questo perché dobbiamo aggiungere del codice JavaScript per istanziare e visualizzare i template HTML.

L'istanza di un template di solito avviene in 3 passaggi:

1. Recuperare l'elemento template nel DOM, ad esempio utilizzando [`document.getElementById`](https://developer.mozilla.org/docs/Web/API/Document/getElementById).
2. Clonare l'elemento template, utilizzando [`cloneNode`](https://developer.mozilla.org/docs/Web/API/Node/cloneNode).
3. Allegarlo al DOM sotto un elemento visibile, ad esempio utilizzando [`appendChild`](https://developer.mozilla.org/docs/Web/API/Node/appendChild).

✅ Perché dobbiamo clonare il template prima di allegarlo al DOM? Cosa pensi che accadrebbe se saltassimo questo passaggio?

### Compito

Crea un nuovo file chiamato `app.js` nella tua cartella di progetto e importa quel file nella sezione `<head>` del tuo HTML:

```html
<script src="app.js" defer></script>
```

Ora in `app.js`, creeremo una nuova funzione `updateRoute`:

```js
function updateRoute(templateId) {
  const template = document.getElementById(templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

Quello che facciamo qui sono esattamente i 3 passaggi descritti sopra. Istanziamo il template con l'id `templateId` e mettiamo il suo contenuto clonato all'interno del nostro segnaposto dell'app. Nota che dobbiamo usare `cloneNode(true)` per copiare l'intero sottoalbero del template.

Ora chiama questa funzione con uno dei template e guarda il risultato.

```js
updateRoute('login');
```

✅ Qual è lo scopo di questo codice `app.innerHTML = '';`? Cosa succede senza di esso?

## Creare le rotte

Quando si parla di un'app web, chiamiamo *Routing* l'intento di mappare gli **URL** a specifiche schermate che devono essere visualizzate. Su un sito web con più file HTML, questo avviene automaticamente poiché i percorsi dei file si riflettono sull'URL. Ad esempio, con questi file nella tua cartella di progetto:

```
mywebsite/index.html
mywebsite/login.html
mywebsite/admin/index.html
```

Se crei un server web con `mywebsite` come root, la mappatura degli URL sarà:

```
https://site.com            --> mywebsite/index.html
https://site.com/login.html --> mywebsite/login.html
https://site.com/admin/     --> mywebsite/admin/index.html
```

Tuttavia, per la nostra app web stiamo utilizzando un singolo file HTML contenente tutte le schermate, quindi questo comportamento predefinito non ci sarà utile. Dobbiamo creare questa mappa manualmente e aggiornare il template visualizzato utilizzando JavaScript.

### Compito

Utilizzeremo un semplice oggetto per implementare una [mappa](https://it.wikipedia.org/wiki/Array_associativo) tra i percorsi URL e i nostri template. Aggiungi questo oggetto all'inizio del tuo file `app.js`.

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard' },
};
```

Ora modifichiamo un po' la funzione `updateRoute`. Invece di passare direttamente il `templateId` come argomento, vogliamo recuperarlo prima guardando l'URL corrente e poi utilizzare la nostra mappa per ottenere il valore corrispondente del template ID. Possiamo usare [`window.location.pathname`](https://developer.mozilla.org/docs/Web/API/Location/pathname) per ottenere solo la sezione del percorso dall'URL.

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  const template = document.getElementById(route.templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

Qui abbiamo mappato le rotte che abbiamo dichiarato al template corrispondente. Puoi verificare che funzioni correttamente cambiando manualmente l'URL nel tuo browser.

✅ Cosa succede se inserisci un percorso sconosciuto nell'URL? Come potremmo risolvere questo problema?

## Aggiungere la navigazione

Il passo successivo per la nostra app è aggiungere la possibilità di navigare tra le pagine senza dover cambiare manualmente l'URL. Questo implica due cose:

  1. Aggiornare l'URL corrente
  2. Aggiornare il template visualizzato in base al nuovo URL

Abbiamo già affrontato la seconda parte con la funzione `updateRoute`, quindi dobbiamo capire come aggiornare l'URL corrente.

Dovremo utilizzare JavaScript e, più specificamente, [`history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState), che consente di aggiornare l'URL e creare una nuova voce nella cronologia di navigazione, senza ricaricare l'HTML.

> Nota: Sebbene l'elemento HTML di ancoraggio [`<a href>`](https://developer.mozilla.org/docs/Web/HTML/Element/a) possa essere utilizzato da solo per creare collegamenti ipertestuali a diversi URL, farà ricaricare l'HTML al browser per impostazione predefinita. È necessario impedire questo comportamento quando si gestisce il routing con JavaScript personalizzato, utilizzando la funzione `preventDefault()` sull'evento click.

### Compito

Creiamo una nuova funzione che possiamo utilizzare per navigare nella nostra app:

```js
function navigate(path) {
  window.history.pushState({}, path, path);
  updateRoute();
}
```

Questo metodo aggiorna prima l'URL corrente in base al percorso fornito, quindi aggiorna il template. La proprietà `window.location.origin` restituisce la radice dell'URL, consentendoci di ricostruire un URL completo da un percorso dato.

Ora che abbiamo questa funzione, possiamo occuparci del problema che abbiamo se un percorso non corrisponde a nessuna rotta definita. Modificheremo la funzione `updateRoute` aggiungendo un fallback a una delle rotte esistenti se non troviamo una corrispondenza.

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
    return navigate('/login');
  }

  ...
```

Se non è possibile trovare una rotta, ora verremo reindirizzati alla pagina di `login`.

Ora creiamo una funzione per ottenere l'URL quando viene cliccato un link e per impedire il comportamento predefinito del browser per i link:

```js
function onLinkClick(event) {
  event.preventDefault();
  navigate(event.target.href);
}
```

Completiamo il sistema di navigazione aggiungendo i collegamenti per il *Login* e il *Logout* nel nostro HTML.

```html
<a href="/dashboard" onclick="onLinkClick(event)">Login</a>
...
<a href="/login" onclick="onLinkClick(event)">Logout</a>
```

L'oggetto `event` sopra cattura l'evento `click` e lo passa alla nostra funzione `onLinkClick`.

Utilizzando l'attributo [`onclick`](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick), colleghiamo l'evento `click` al codice JavaScript, in questo caso la chiamata alla funzione `navigate()`.

Prova a cliccare su questi link, ora dovresti essere in grado di navigare tra le diverse schermate della tua app.

✅ Il metodo `history.pushState` fa parte dello standard HTML5 ed è implementato in [tutti i browser moderni](https://caniuse.com/?search=pushState). Se stai costruendo un'app web per browser più vecchi, c'è un trucco che puoi utilizzare al posto di questa API: usando un [hash (`#`)](https://it.wikipedia.org/wiki/URI_fragment) prima del percorso, puoi implementare un routing che funziona con la normale navigazione tramite ancore e non ricarica la pagina, poiché il suo scopo era creare collegamenti interni all'interno di una pagina.

## Gestire i pulsanti indietro e avanti del browser

L'utilizzo di `history.pushState` crea nuove voci nella cronologia di navigazione del browser. Puoi verificarlo tenendo premuto il *pulsante indietro* del tuo browser, dovrebbe mostrare qualcosa del genere:

![Screenshot della cronologia di navigazione](../../../../translated_images/history.7fdabbafa521e06455b738d3dafa3ff41d3071deae60ead8c7e0844b9ed987d8.it.png)

Se provi a cliccare più volte sul pulsante indietro, vedrai che l'URL corrente cambia e la cronologia viene aggiornata, ma lo stesso template continua a essere visualizzato.

Questo perché l'applicazione non sa che dobbiamo chiamare `updateRoute()` ogni volta che la cronologia cambia. Se dai un'occhiata alla [documentazione di `history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState), puoi vedere che se lo stato cambia - cioè ci spostiamo su un URL diverso - viene attivato l'evento [`popstate`](https://developer.mozilla.org/docs/Web/API/Window/popstate_event). Lo utilizzeremo per risolvere questo problema.

### Compito

Per assicurarci che il template visualizzato venga aggiornato quando la cronologia del browser cambia, collegheremo una nuova funzione che chiama `updateRoute()`. Lo faremo alla fine del nostro file `app.js`:

```js
window.onpopstate = () => updateRoute();
updateRoute();
```

> Nota: abbiamo utilizzato una [funzione freccia](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions) per dichiarare il nostro gestore dell'evento `popstate` per concisione, ma una funzione regolare funzionerebbe allo stesso modo.

Ecco un video di ripasso sulle funzioni freccia:

[![Funzioni Freccia](https://img.youtube.com/vi/OP6eEbOj2sc/0.jpg)](https://youtube.com/watch?v=OP6eEbOj2sc "Funzioni Freccia")

> 🎥 Clicca sull'immagine sopra per un video sulle funzioni freccia.

Ora prova a utilizzare i pulsanti indietro e avanti del tuo browser e verifica che la rotta visualizzata venga aggiornata correttamente questa volta.

---

## 🚀 Sfida

Aggiungi un nuovo template e una rotta per una terza pagina che mostri i crediti per questa app.

## Quiz Post-Lezione

[Quiz post-lezione](https://ff-quizzes.netlify.app/web/quiz/42)

## Revisione e Studio Autonomo

Il routing è una delle parti sorprendentemente complesse dello sviluppo web, soprattutto man mano che il web si sposta dai comportamenti di aggiornamento della pagina alle applicazioni a pagina singola (SPA). Leggi un po' su [come il servizio Azure Static Web App](https://docs.microsoft.com/azure/static-web-apps/routes/?WT.mc_id=academic-77807-sagibbon) gestisce il routing. Riesci a spiegare perché alcune delle decisioni descritte in quel documento sono necessarie?

## Compito

[Migliora il routing](assignment.md)

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione automatica [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale effettuata da un traduttore umano. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.