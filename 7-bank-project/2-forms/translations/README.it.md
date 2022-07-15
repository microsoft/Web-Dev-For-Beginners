# Creazione di un'App Bancaria Parte 2: Creazione di un form di accesso e registrazione

## Quiz Pre-Lezione

[Quiz Pre-Lezione](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/43?loc=it)

### Introduzione

In quasi tutte le moderne app web, si può  creare un account per avere il proprio spazio privato. Poiché più utenti possono accedere a un'app web contemporaneamente, è necessario un meccanismo per archiviare i dati personali di ciascun utente separatamente e selezionare le informazioni da visualizzare. Non verrà trattato come gestire [l'identità dell'utente in modo sicuro](https://it.wikipedia.org/wiki/Autenticazione) poiché si tratta di un argomento ampio di per sé, ma ci si assicurerà che ogni utente sia in grado di creare uno (o più) conto bancario nella app.

In questa parte si utilizzeranno form HTML per aggiungere login e registrazione all'app. Si vedrà come inviare i dati a un'API del server a livello di programmazione e, infine, come definire le regole di convalida di base per gli input dell'utente.

### Prerequisito

È necessario aver completato i [modelli HTML e il routing](../../1-template-route/translations/README.it.md) dell'app web per questa lezione. È inoltre necessario installare [Node.js](https://nodejs.org) ed  [eseguirel'API del server](../../api/README.md) in locale in modo da poter inviare dati per creare account.

Si può verificare che il server funzioni correttamente eseguendo questo comando in un terminale:

```sh
curl http://localhost:5000/api
# -> dovrebbe restituire "Bank API v1.0.0" come risultato
```

---

## Form e controlli

L'elemento  `<form>` incapsula una sezione di un documento HTML in cui l'utente può inserire e inviare dati con controlli interattivi. Esistono tutti i tipi di controlli dell'interfaccia utente (UI) che possono essere utilizzati all'interno di un form, i più comuni sono gli elementi `<input>` e `<button>`.

Esistono molti [tipi](https://developer.mozilla.org/docs/Web/HTML/Element/input) diversi di `<input>`, ad esempio per creare un campo in cui l'utente può inserire il proprio nome utente si può  utilizzare:

```html
<input id="username" name="username" type="text">
```

L'attributo `name` verrà utilizzato come nome della proprietà quando verranno inviati i dati del form. L'attributo `id` viene utilizzato per associare un'etichetta (`<label>`) al relativo controllo nel form.

> Si dia un'occhiata all'intero elenco di  [tipi di `<input>`](https://developer.mozilla.org/docs/Web/HTML/Element/input) e [altri controlli del form](https://developer.mozilla.org/docs/Learn/Forms/Other_form_controls) per avere un'idea di tutti gli elementi nativi dell'interfaccia utente che si possono utilizzare durante la creazione della propria interfaccia utente.

✅ Si noti che  `<input>` è un [elemento vuoto](https://developer.mozilla.org/docs/Glossary/Empty_element) su cui *non* si dovrebbe aggiungere un tag di chiusura corrispondente. È comunque possibile utilizzare la notazione a chiusura automatica  `<input/>` , ma non è richiesta.

L'elemento `<button>` all'interno di un form è un po' speciale. Se non si specifica il suo attributo di tipo (`type`) , invierà automaticamente i dati del form al server quando viene premuto. Ecco i possibili valori di `type` :

- `submit`: l'impostazione predefinita all'interno di un `<form>`, il pulsante attiva l'azione di invio del form.
- `reset`: il pulsante ripristina tutti i controlli del form ai valori iniziali.
- `button`: non assegna un comportamento predefinito quando viene premuto il pulsante. È quindi possibile assegnargli azioni personalizzate utilizzando JavaScript.

### Attività

Si comincia aggiungendo un form al modello di accesso `login` . Servirà di un campo *username* per il nome utente e di un pulsante *Login* .

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <h2>Login</h2>
    <form id="loginForm">
      <label for="username">Username</label>
      <input id="username" name="user" type="text">
      <button>Login</button>
    </form>
  </section>
</template>
```

Se si guarda più attentamente, si può notare che è stato aggiunto anche un elemento `<label>` (etichetta). Gli elementi `<label>` vengono utilizzati per aggiungere un nome ai controlli dell'interfaccia utente, come il campo username. Le etichette sono importanti per la leggibilità dei form, ma offrono anche vantaggi aggiuntivi:

- Associaer un'etichetta a un controllo in un form, aiuta gli utenti che utilizzano tecnologie assistite (come unlettore di schremo) a capire quali dati dovrebbero fornire.
- È possibile fare clic sull'etichetta per portare direttamente il focus sull'input associato, rendendolo più facile da raggiungere su dispositivi basati su touch screen.

> [L'accessibilità](https://developer.mozilla.org/docs/Learn/Accessibility/What_is_accessibility) sul Web è un argomento molto importante che spesso viene trascurato. Grazie agli [elementi HTML semantici](https://developer.mozilla.org/docs/Learn/Accessibility/HTML) non è difficile creare contenuti accessibili se usati correttamente. Si può [leggere di più sull'accessibilità](https://developer.mozilla.org/docs/Web/Accessibility) per evitare errori comuni e diventare uno sviluppatore responsabile.

Ora si aggiungerà un secondo modulo per la registrazione, appena sotto il precedente:

```html
<hr/>
<h2>Register</h2>
<form id="registerForm">
  <label for="user">Username</label>
  <input id="user" name="user" type="text">
  <label for="currency">Currency</label>
  <input id="currency" name="currency" type="text" value="$">
  <label for="description">Description</label>
  <input id="description" name="description" type="text">
  <label for="balance">Current balance</label>
  <input id="balance" name="balance" type="number" value="0">
  <button>Register</button>
</form>
```

Utilizzando l'attributo `value` si può impostare un valore predefinito per un dato input. Si noti inoltre che l'input per il saldo(`balance`) ha il tipo `number` (numero). Sembra diverso dagli altri input? Provare a interagire con esso.

✅ Si può  navigare e interagire con i form utilizzando solo una tastiera? E come si pensa di fare?

## Invio dei dati al server

Ora che si ha un'interfaccia utente funzionale, il passaggio successivo è inviare i dati al server. Fare un rapido test utilizzando il codice attuale: cosa succede se si fa clic sul pulsante *Login* o *Register* ?

Si è notato il cambiamento nella sezione URL del proprio browser?

![Videata della modifica dell'URL del browser dopo aver fatto clic sul pulsante Registra](../images/click-register.png)

L'azione predefinita per un `<form>` consiste nell'inviare il form all'URL del server corrente utilizzando il [metodo GET](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3), aggiungendo i dati del modulo direttamente all'URL. Questo metodo presenta però alcuni difetti:

- I dati inviati sono di dimensioni molto limitate (circa 2000 caratteri)
- I dati sono direttamente visibili nell'URL (non eccezionale per le password)
- Non funziona con i caricamenti di file

Ecco perché si può cambiare e utilizzare il [metodo POST](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5) che invia i dati del modulo al server nel corpo della richiesta HTTP, senza nessuna delle limitazioni precedenti.

> Sebbene POST sia il metodo più comunemente utilizzato per inviare i dati, [in alcuni scenari specifici](https://www.w3.org/2001/tag/doc/whenToUseGet.html) è preferibile utilizzare il metodo GET, ad esempio quando si implementa un campo di ricerca.

### Attività

Aggiungere le proprietà `action` e `method` al form di registrazione:

```html
<form id="registerForm" action="//localhost:5000/api/accounts" method="POST">
```

Provare ora a registrare un nuovo account con il proprio nome. Dopo aver fatto clic sul pulsante *Register* si dovrebbe vedere qualcosa del genere:

![Una finestra del browser all'indirizzo localhost:5000/api/ accounts, che mostra una stringa JSON con i dati dell'utente](../images/form-post.png)

Se tutto va bene, il server dovrebbe rispondere alla richiesta con una risposta [JSON](https://www.json.org/json-en.html) contenente i dati dell'account che è stato creato.

✅ Provare una nuova registrazione con lo stesso nome. Che cosa accade?

## Invio di dati senza ricaricare la pagina

Come probabilmente si è notato, c'è un piccolo problema con l'approccio appena usato: quando si invia il modulo, si esce dalla propria app e il browser reindirizza all'URL del server. Si sta cercando qui di evitare tutti i ricaricamenti delle pagine con quest app web, poiché si sta creando un'[applicazione a pagina singola (SPA)](https://en.wikipedia.org/wiki/Single-page_application).

Per inviare i dati del modulo al server senza forzare il ricaricamento di una pagina, si deve utilizzare il codice JavaScript. Invece di inserire un URL nella proprietà `action` di un  `<form>`, si può  utilizzare qualsiasi codice JavaScript anteposto dalla stringa `javascript:` per eseguire un'azione personalizzata. Usarlo significa anche che si dovranno implementare alcune attività che erano state precedentemente eseguite automaticamente dal browser:

- Recuperare i dati del form
- Convertire e codificare i dati del form in un formato adatto
- Creare la richiesta HTTP e inviarla al server

### Attività

Sostituire `action` nel form di registrazione con:

```html
<form id="registerForm" action="javascript:register()">
```

Aprire `app.js` aggiungere una nuova funzione denominata `register`:

```js
function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const data = Object.fromEntries(formData);
  const jsonData = JSON.stringify(data);
}
```

Qui si recupera l'elemento form utilizzando `getElementById()` e si utilizza il [metodo di supporto FormData](https://developer.mozilla.org/docs/Web/API/FormData)  per estrarre i valori dai controlli del forma come un insieme di coppie chiave/valore. Quindi si convertono i dati in un oggetto normale utilizzando [`Object.fromEntries()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries) e infine si serializzano i dati in [JSON](https://www.json.org/json-en.html), un formato comunemente utilizzato per lo scambio di dati sul web.

I dati sono ora pronti per essere inviati al server. Creare una nuova funzione denominata `createAccount`:

```js
async function createAccount(account) {
  try {
    const response = await fetch('//localhost:5000/api/accounts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: account
    });
    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}
```

Cosa fa questa funzione? Per prima cosa notare la  parola chiave `async`. Ciò significa che la funzione contiene codice che verrà eseguito [**in modo asincrono**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function). Quando viene utilizzato insieme alla parola chiave `await`, consente di attendere l'esecuzione del codice asincrono, come l'attesa della risposta del server qui, prima di continuare.

Ecco un breve video sull'utilizzo di `async/await`:

[![Async e Await per la](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk " gestione di promesse")

> Fare clic sull'immagine sopra per un video su async/await.

Si usa l'API `fetch()` per inviare dati JSON al server. Questo metodo richiede 2 parametri:

- L'URL del server, quindi rimettere `//localhost:5000/api/accounts` qui.
- Le impostazioni della richiesta. È qui che si imposta il metodo su `POST` e si fornisce il corpo (`body`) della richiesta. Dato che si inviano dati JSON al server, si deve anche impostare l'intestazione `Content-Type` su `application/json` in modo che il server sappia come interpretare il contenuto.

Poiché il server risponderà alla richiesta con JSON, si può  utilizzare `await response.json()` per analizzare il contenuto JSON e restituire l'oggetto risultante. Notare che questo metodo è asincrono, quindi si usa la parola chiave `await` qui prima di tornare per assicurarsi che vengano rilevati anche eventuali errori durante l'analisi.

Ora aggiungere del codice alla funzione di `register` per chiamare `createAccount()`:

```js
const result = await createAccount(jsonData);
```

Poiché qui si usa la parola chiave `await`, si deve aggiungere la parola chiave `async` prima della funzione di registrazione

```js
async function register() {
```

Infine, aggiungere alcuni log per verificare il risultato. La funzione finale dovrebbe essere simile a questa:

```js
async function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const jsonData = JSON.stringify(Object.fromEntries(formData));
  const result = await createAccount(jsonData);

  if (result.error) {
    return console.log('An error occured:', result.error);
  }

  console.log('Account created!', result);
}
```

È stato un po' lungo ma si è arrivati! Se si apre [strumenti di sviluppo del browser](https://developer.mozilla.org/docs/Learn/Common_questions/What_are_browser_developer_tools) e si prava a registrare un nuovo account, non si dovrebbe  vedere alcun cambiamento nella pagina web ma apparirà un messaggio nella console che conferma che tutto funziona.

![Videata che mostra il messaggio di registro nella console del browser](../images/browser-console.png)

✅ Si pensa che i dati vengano inviati al server in modo sicuro? E se qualcuno fosse in grado di intercettare la richiesta? Si possono leggere informazioni su [HTTPS](https://en.wikipedia.org/wiki/HTTPS) per saperne di più sulla comunicazione sicura dei dati.

## Convalida dati

Se si prova a registrare un nuovo account senza prima impostare un nome utente, si può  vedere che il server restituisce un errore con codice di stato [400 Bad Request](https://developer.mozilla.org/docs/Web/HTTP/Status/400#:~:text=The%20HyperText%20Transfer%20Protocol%20(HTTP,%2C%20or%20deceptive%20request%20routing).), (richiesta non valida)

Prima di inviare i dati a un server è buona norma [convalidare i dati del modulo](https://developer.mozilla.org/docs/Learn/Forms/Form_validation) in anticipo quando possibile, per assicurarsi di inviare una richiesta valida. I controlli dei form HTML5 forniscono la convalida incorporata utilizzando vari attributi:

- `requested`: il campo deve essere compilato altrimenti il modulo non può essere inviato.
- `minlength` e `maxlength`: definisce il numero minimo e massimo di caratteri nei campi di testo.
- `min` e `max`: definisce il valore minimo e massimo di un campo numerico.
- `type`: definisce il tipo di dati attesi, come `number`, `email`, `file` o [altri tipi incorporati](https://developer.mozilla.org/docs/Web/HTML/Element/input). Questo attributo può anche modificare il rendering visivo del form.
- `pattern`: permette di definire un modello di [espressione regolare](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Regular_Expressions) per verificare se i dati inseriti sono validi o meno.

> Suggerimento: si può  personalizzare l'aspetto dei controlli del form a seconda che siano validi o meno utilizzando le pseudo-classi CSS `:valid` e `:invalid` .

### Attività

Ci sono 2 campi obbligatori per creare un nuovo account valido,  nome utente (username) e la valuta (currency), gli altri campi sono opzionali. Aggiornare l'HTML del form, utilizzando sia l'attributo `required` che il testo nell'etichetta del campo in questo modo:

```html
<label for="user">Username (required)</label>
<input id="user" name="user" type="text" required>
...
<label for="currency">Currency (required)</label>
<input id="currency" name="currency" type="text" value="$" required>
```

Sebbene questa particolare implementazione del server non imponga limiti specifici sulla lunghezza massima dei campi, è sempre buona norma definire limiti ragionevoli per qualsiasi voce di testo inserita dell'utente.

Aggiungere un attributo `maxlength` ai campi di testo:

```html
<input id="user" name="user" type="text" maxlength="20" required>
...
<input id="currency" name="currency" type="text" value="$" maxlength="5" required>
...
<input id="description" name="description" type="text" maxlength="100">
```

Ora se si preme il pulsante *Register* e un campo non rispetta una regola di convalida che è stata definita, si dovrebbe vedere qualcosa del genere:

![Videata che mostra l'errore di convalida durante il tentativo di inviare il form](../images/validation-error.png)

La convalida come questa eseguita *prima* di inviare qualsiasi dato al server è chiamata convalida **lato client** . Tenere presente che non è sempre possibile eseguire tutti i controlli senza inviare i dati. Ad esempio, non si può  verificare qui se esiste già un account con lo stesso nome utente senza inviare una richiesta al server. La convalida aggiuntiva eseguita sul server è denominata convalida **lato server** .

Di solito devono essere implementate entrambe; mentre l'utilizzo della convalida lato client migliora l'esperienza dell'utente fornendo un feedback immediato all'utente, la convalida lato server è fondamentale per assicurarsi che i dati utente da manipolare siano validi e sicuri.

---

## 🚀 Sfida

Mostrare un messaggio di errore nell'HTML se l'utente esiste già.

Ecco un esempio di come può apparire la pagina di accesso finale dopo l'applicazione di un po' di stile:

![Videata della pagina di accesso dopo l'aggiunta di stili CSS](../images/result.png)

## Quiz Post-Lezione

[Quiz post-lezione](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/44?loc=it)

## Revisione e Auto Apprendimento

Gli sviluppatori sono diventati molto creativi nei loro sforzi di costruzione di form, in particolare per quanto riguarda le strategie di convalida. Scoprire i diversi flussi di form cercando su [CodePen](https://codepen.com); si riescono a trovare dei form interessanti e stimolanti?

## Compito

[Dare uno stile alla propria app bancaria](assignment.it.md)
