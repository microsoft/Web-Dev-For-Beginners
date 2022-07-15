# Creazione di un'App Bancaria Parte 1: Modelli HTML e Rotte in un'app web

## Quiz Pre-Lezione

[Quiz Pre-Lezione](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/41?loc=it)

### Introduzione

Dall'avvento di JavaScript nei browser, i siti web stanno diventando più interattivi e complessi che mai. Le tecnologie web sono ora comunemente utilizzate per creare applicazioni completamente funzionali che vengono eseguite direttamente in un browser che vengono chiamate [applicazioni web](https://it.wikipedia.org/wiki/Applicazione_web). Poiché le app web sono altamente interattive, gli utenti non desiderano attendere il ricaricamento di una pagina intera ogni volta che viene eseguita un'azione. Ecco perché JavaScript viene utilizzato per aggiornare l'HTML direttamente utilizzando il DOM, per fornire un'esperienza utente più fluida.

In questa lezione, getteremo le basi per creare un'app web bancaria, utilizzando modelli HTML per creare più schermate che possono essere visualizzate e aggiornate senza dover ricaricare l'intera pagina HTML.

### Prerequisito

È necessario un server web locale per testare l'app web che verrà creata in questa lezione. Se non ne ha uno, si può installare [Node.js](https://nodejs.org) e utilizzare il comando `npx lite-server` dalla cartella del progetto. Creerà un server web locale e aprirà la propria app in un browser.

### Preparazione

Sul proprio computer, creare una cartella denominata `bank` con un file denominato `index.html` al suo interno. Si inizierà da questo codice [boilerplate](https://en.wikipedia.org/wiki/Boilerplate_code) HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bank App</title>
  </head>
  <body>
    <!-- Qui è dove si lavorerà -->
  </body>
</html>
```

---

## Modelli HTML.

Se si desidera creare più schermate per una pagina Web, una soluzione potrebbe essere la creazione di un file HTML per ogni schermata che si desidera visualizzare. Tuttavia, questa soluzione presenta alcuni inconvenienti:

- È necessario ricaricare l'intero HTML quando si cambia schermata, il che può essere lento.
- È difficile condividere i dati tra le diverse schermate.

Un altro approccio consiste nell'avere un solo file HTML e definire più [modelli HTML](https://developer.mozilla.org/docs/Web/HTML/Element/template) utilizzando l'elemento `<template>`. Un modello è un blocco HTML riutilizzabile che non viene visualizzato dal browser e deve essere istanziato in fase di esecuzione utilizzando JavaScript.

### Attività

Verrà creata un'app bancaria con due schermate: la pagina di accesso e il cruscotto. Innanzitutto, si aggiunge nel corpo dell'HTML un elemento segnaposto che si utilizzerà per istanziare le diverse schermate dell'app:

```html
<div id="app">Loading...</div>
```

Viene fornito un `ID` all'elemento per renderlo più facilmente individuabile con JavaScript in seguito.

> Suggerimento: poiché il contenuto di questo elemento verrà sostituito, si può  inserire un messaggio di caricamento o un indicatore che verrà mostrato durante il caricamento dell'app.

Successivamente, si aggiunge il modello HTML seguente per la pagina di accesso. Per ora si inserirà solo un titolo e una sezione contenente un collegamento che si utilizzerà per eseguire la navigazione.

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <a href="/dashboard">Login</a>
  </section>
</template>
```

Quindi si aggiungerà un altro modello HTML per la pagina del cruscotto. Questa pagina conterrà diverse sezioni:

- Un'intestazione con un titolo e un collegamento di disconnessione
- Saldo corrente del conto bancario
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

> Suggerimento: durante la creazione di modelli HTML, se si vuole vedere come apparirà, si possono commentare le righe tra `<template>` `</template>` racchiudendole `tra <!- ->-->`.

✅ Perché si pensa che vengano utilizzati gli attributi `id` sui modelli? Si potrebbe usare qualcos'altro come le classi?

## Visualizzazione di modelli con JavaScript

Se si prova il proprio file HTML corrente in un browser, si vedrà che si blocca visualizzando `Loading ...` Questo perché si deve aggiungere del codice JavaScript per istanziare e visualizzare i modelli HTML.

L'istanza di un modello viene solitamente eseguita in 3 passaggi:

1. Recuperare l'elemento del modello nel DOM, ad esempio utilizzando [`document.getElementById`](https://developer.mozilla.org/it/docs/Web/API/Document/getElementById).
2. Clonare l'elemento template, usando [`cloneNode`](https://developer.mozilla.org/docs/Web/API/Node/cloneNode).
3. Collegarlo al DOM sotto un elemento visibile, ad esempio utilizzando [`appendChild`](https://developer.mozilla.org/it/docs/Web/API/Node/appendChild).

✅ Perché è necessario clonare il modello prima di collegarlo al DOM? Cosa si pensa che accadrebbe se venisse saltato questo passaggio?

### Attività

Creare un nuovo file denominato `app.js` nella cartella del progetto e importare quel file nella sezione  `<head>` del proprio HTML:

```html
<script src="app.js" defer></script>
```

Ora in `app.js`, verrà creata una nuova funzione `updateRoute`:

```js
function updateRoute(templateId) {
  const template = document.getElementById(templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

Quello che si fa qui sono esattamente i 3 passaggi descritti sopra. Si istanza il modello con l'id `templateId` e si inserisce il suo contenuto clonato nel segnaposto dell'app. Notare che si deve usare `cloneNode (true)` per copiare l'intero sottoalbero del modello.

Ora chiamare questa funzione con uno dei template e guardare il risultato.

```js
updateRoute('login');
```

✅ Qual è lo scopo di questo codice `app.innerHTML = '';`? Cosa succede senza di essa?

## Creazione di rotte

Quando si parla di un'app web, si definisce *Routing* (instradamento) l'intento di mappare gli **URL** a schermate specifiche che dovrebbero essere visualizzate. Su un sito web con più file HTML, questa operazione viene eseguita automaticamente poiché i percorsi dei file si riflettono sull'URL. Ad esempio, con questi file nella cartella del progetto:

```
mywebsite/index.html
mywebsite/login.html
mywebsite/admin/index.html
```

Se si crea un server web con `mywebsite` come radice, la mappatura dell'URL sarà:

```
https://site.com            --> mywebsite/index.html
https://site.com/login.html --> mywebsite/login.html
https://site.com/admin/     --> mywebsite/admin/index.html
```

Tuttavia, per l'app web in costruzione si utilizza un singolo file HTML contenente tutte le schermate, quindi questo comportamento predefinito non sarà di aiuto. Si deve creare questa mappa manualmente ed eseguire l'aggiornamento del modello visualizzato utilizzando JavaScript.

### Attività

Si userà un semplice oggetto per implementare una [mappa](https://it.wikipedia.org/wiki/Array_associativo) tra i percorsi degli URL e i propri modelli. Aggiungere questo oggetto all'inizio del file `app.js`.

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard' },
};
```

Ora modificare un po' la funzione `updateRoute`. Invece di passare direttamente il `templateId` come argomento, lo si vuole recuperare guardando prima l'URL corrente, quindi utilizzndo la mappa per ottenere il valore dell'ID del modello corrispondente. Si può  usare [`window.location.pathname`](https://developer.mozilla.org/docs/Web/API/Location/pathname) per ottenere solo la sezione del percorso dall'URL.

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

Qui sono state mappato le rotte che sono state dichiarate al modello corrispondente. Si può provare se funziona correttamente modificando manualmente l'URL nel proprio browser.

✅ Cosa succede se si inserisce un percorso sconosciuto nell'URL? Come potrebbe essere risolto questo problema?

## Aggiungere navigazione

Il prossimo passo per la costruzione dell'app è aggiungere la possibilità di navigare tra le pagine senza dover modificare manualmente l'URL. Questo implica due cose:

1. Aggiornamento dell'URL corrente
2. Aggiornamento del modello visualizzato in base al nuovo URL

E' già stata trattata la seconda parte con la funzione `updateRoute`, quindi occorre capire come aggiornare l'URL corrente.

Si dovrà utilizzare JavaScript e più precisamente [history.pushState](https://developer.mozilla.org/docs/Web/API/History/pushState) che permette di aggiornare l'URL e creare una nuova voce nella cronologia di navigazione, senza ricaricare l'HTML.

> Nota: Sebbene l'elemento HTML ancora [`<a href>`](https://developer.mozilla.org/it/docs/Web/HTML/Element/a) possa essere usato da solo per creare collegamenti ipertestuali a diversi URL, è anche in grado di fare ricaricare al browser l'HTML nella modalità predefinita. È necessario prevenire questo comportamento quando si gestisce il routing con javascript personalizzato, utilizzando la funzione preventDefault() sull'evento click.

### Attività

Si crea una nuova funzione da utilizzare per navigare nell'app:

```js
function navigate(path) {
  window.history.pushState({}, path, path);
  updateRoute();
}
```

Questo metodo aggiorna prima l'URL corrente in base al percorso fornito, quindi aggiorna il modello. La proprietà `window.location.origin` restituisce l'URL radice, permettendo di ricostruire un URL completo da un dato percorso.

Ora che si ha questa funzione, ci si può occupare del problema che si verifica se un percorso non corrisponde a nessuna rotta definita. Si modificherà la funzione `updateRoute` aggiungendo una soluzione di contingenza per indirizzare verso una delle rotte esistenti se non viene trovata una corrispondenza.

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
    return navigate('/login');
  }

  ...
```

Se non è possibile trovare una rotta, si esegue un reindirizzamento alla pagina `login`.

Ora si crea una funzione per ottenere l'URL quando si fa clic su un collegamento e per impedire il comportamento predefinito del browser per un collegamento:

```js
function onLinkClick(event) {
  event.preventDefault();
  navigate(event.target.href);
}
```

Si completa il sistema di navigazione aggiungendo collegamenti ai link di accesso (*Login*) e di disconnessione (*Logout*) nell'HTML.

```html
<a href="/dashboard" onclick="onLinkClick(event)">Login</a>
...
<a href="/login" onclick="onLinkClick(event)">Logout</a>
```

Utilizzando l 'attributo [`onclick`](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick) associare l'evento `click` al codice JavaScript, in questo caso la chiamata alla funzione `navigate()` .

Provare a fare clic su questi collegamenti, ora si dovrebbe essere in grado di navigare tra le diverse schermate dell'app.

✅ Il metodo `history.pushState` fa parte dello standard HTML5 e implementato in [tutti i browser moderni](https://caniuse.com/?search=pushState). Se si sta creando un'app web per browser meno recenti, c'è un trucco che si può usare al posto di questa API: usando un [hash (`#`)](https://en.wikipedia.org/wiki/URI_fragment) prima del percorso si può implementare un instradatamento che funziona con la normale navigazione dell'elemento ancora e non ricarica la pagina, poiché il suo scopo era creare collegamenti all'interno di una pagina.

## Gestione dei pulsanti Avanti e Indietro del browser

L'utilizzo di `history.pushState` crea nuove voci nella cronologia di navigazione del browser. Si può verificare tenendo premuto il *pulsante Indietro* del proprio browser, dovrebbe visualizzare qualcosa del genere:

![Videata della cronologia di navigazione](../history.png)

Se si prova a fare clic sul pulsante Indietro alcune volte, si vedrà che l'URL corrente cambia e la cronologia viene aggiornata, ma lo stesso modello continua a essere visualizzato.

Questo perché il browser non sa che si deve chiamare `updateRoute()` ogni volta che cambia la cronologia. Se si dà un'occhiata alla documentazione di [`history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState) si può vedere che se lo stato cambia, vale a dire che si è passati a un URL diverso, viene attivato l'[evento](https://developer.mozilla.org/docs/Web/API/Window/popstate_event) `popstate`. Verrà usato per risolvere quel problema.

### Attività

Per assicurarsi che il modello visualizzato venga aggiornato quando la cronologia del browser cambia, si aggiungerà una nuova funzione che chiama `updateRoute()`. Verrà fatto in fondo al file `app.js`:

```js
window.onpopstate = () => updateRoute();
updateRoute();
```

> Nota: è stata usata una [funzione freccia](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions) qui per dichiarare il gestore di eventi `popstate` per concisione, ma una funzione normale andrebbe bene allo stesso modo.

Ecco un video di aggiornamento sulle funzioni freccia:

[![Funzionifreccia](https://img.youtube.com/vi/OP6eEbOj2sc/0.jpg)](https://youtube.com/watch?v=OP6eEbOj2sc "")

> Fare clic sull'immagine sopra per un video sulle funzioni freccia

Ora provare a utilizzare i pulsanti Indietro e Avanti del proprio browser e controllare che il percorso visualizzato sia aggiornato correttamente questa volta.

---

## 🚀 Sfida

Aggiungere un nuovo modello e instradare per una terza pagina che mostra i crediti per questa app.

## Quiz Post-Lezione

[Quiz post-lezione](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/42?loc=it)

## Revisione e Auto Apprendimento

Il routing (instradamento) è una delle parti sorprendentemente complicate dello sviluppo web, soprattutto perché il web passa dai comportamenti di aggiornamento della pagina all'aggiornamento della pagina dell'applicazione a pagina singola. Leggere alcune informazioni su [come il servizio App Web Static di Azure](https://docs.microsoft.com/azure/static-web-apps/routes?WT.mc_id=academic-4621-cxa) gestisce il routing. Si può spiegare perché alcune delle decisioni descritte in quel documento sono necessarie?

## Compito

[Migliorare l'instradamento](assignment.it.md)
