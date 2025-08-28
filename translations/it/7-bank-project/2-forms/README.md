<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b667b7d601e2ee19acb5aa9d102dc9f3",
  "translation_date": "2025-08-26T00:14:58+00:00",
  "source_file": "7-bank-project/2-forms/README.md",
  "language_code": "it"
}
-->
# Costruire un'app bancaria Parte 2: Creare un modulo di login e registrazione

## Quiz Pre-Lettura

[Quiz pre-lettura](https://ff-quizzes.netlify.app/web/quiz/43)

### Introduzione

In quasi tutte le app web moderne, puoi creare un account per avere uno spazio privato. Poiché più utenti possono accedere a un'app web contemporaneamente, è necessario un meccanismo per memorizzare separatamente i dati personali di ciascun utente e selezionare quali informazioni mostrare. Non tratteremo come gestire [l'identità dell'utente in modo sicuro](https://en.wikipedia.org/wiki/Authentication) poiché è un argomento ampio a sé stante, ma ci assicureremo che ogni utente sia in grado di creare uno (o più) conti bancari nella nostra app.

In questa parte utilizzeremo i moduli HTML per aggiungere login e registrazione alla nostra app web. Vedremo come inviare i dati a un'API del server in modo programmatico e, infine, come definire regole di validazione di base per gli input dell'utente.

### Prerequisiti

Devi aver completato la lezione su [template HTML e routing](../1-template-route/README.md) dell'app web. Inoltre, devi installare [Node.js](https://nodejs.org) e [eseguire l'API del server](../api/README.md) localmente per poter inviare dati e creare account.

**Nota**
Avrai due terminali in esecuzione contemporaneamente come indicato di seguito:
1. Per l'app bancaria principale che abbiamo costruito nella lezione su [template HTML e routing](../1-template-route/README.md)
2. Per l'[API del server dell'app bancaria](../api/README.md) che abbiamo appena configurato sopra.

È necessario che entrambi i server siano attivi e funzionanti per seguire il resto della lezione. Stanno ascoltando su porte diverse (porta `3000` e porta `5000`), quindi tutto dovrebbe funzionare correttamente.

Puoi verificare che il server sia in esecuzione correttamente eseguendo questo comando in un terminale:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## Modulo e controlli

L'elemento `<form>` incapsula una sezione di un documento HTML in cui l'utente può inserire e inviare dati tramite controlli interattivi. Esistono tutti i tipi di controlli dell'interfaccia utente (UI) che possono essere utilizzati all'interno di un modulo, il più comune è l'elemento `<input>` e `<button>`.

Ci sono molti [tipi](https://developer.mozilla.org/docs/Web/HTML/Element/input) diversi di `<input>`, ad esempio per creare un campo in cui l'utente può inserire il proprio nome utente puoi usare:

```html
<input id="username" name="username" type="text">
```

L'attributo `name` verrà utilizzato come nome della proprietà quando i dati del modulo verranno inviati. L'attributo `id` viene utilizzato per associare un `<label>` al controllo del modulo.

> Dai un'occhiata all'intera lista di [tipi di `<input>`](https://developer.mozilla.org/docs/Web/HTML/Element/input) e [altri controlli del modulo](https://developer.mozilla.org/docs/Learn/Forms/Other_form_controls) per avere un'idea di tutti gli elementi UI nativi che puoi utilizzare per costruire la tua interfaccia.

✅ Nota che `<input>` è un [elemento vuoto](https://developer.mozilla.org/docs/Glossary/Empty_element) su cui *non* dovresti aggiungere un tag di chiusura corrispondente. Puoi comunque utilizzare la notazione auto-chiudente `<input/>`, ma non è obbligatorio.

L'elemento `<button>` all'interno di un modulo è un po' speciale. Se non specifichi il suo attributo `type`, invierà automaticamente i dati del modulo al server quando premuto. Ecco i possibili valori di `type`:

- `submit`: Il valore predefinito all'interno di un `<form>`, il pulsante attiva l'azione di invio del modulo.
- `reset`: Il pulsante ripristina tutti i controlli del modulo ai loro valori iniziali.
- `button`: Non assegna un comportamento predefinito quando il pulsante viene premuto. Puoi quindi assegnare azioni personalizzate utilizzando JavaScript.

### Compito

Iniziamo aggiungendo un modulo al template `login`. Avremo bisogno di un campo *username* e di un pulsante *Login*.

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

Se guardi più da vicino, puoi notare che abbiamo anche aggiunto un elemento `<label>` qui. Gli elementi `<label>` vengono utilizzati per aggiungere un nome ai controlli UI, come il nostro campo username. Le etichette sono importanti per la leggibilità dei moduli, ma offrono anche vantaggi aggiuntivi:

- Associando un'etichetta a un controllo del modulo, aiuta gli utenti che utilizzano tecnologie assistive (come un lettore di schermo) a capire quali dati devono fornire.
- Puoi cliccare sull'etichetta per mettere direttamente a fuoco l'input associato, rendendolo più facile da raggiungere su dispositivi touch-screen.

> [Accessibilità](https://developer.mozilla.org/docs/Learn/Accessibility/What_is_accessibility) sul web è un argomento molto importante spesso trascurato. Grazie agli [elementi HTML semantici](https://developer.mozilla.org/docs/Learn/Accessibility/HTML) non è difficile creare contenuti accessibili se li usi correttamente. Puoi [leggere di più sull'accessibilità](https://developer.mozilla.org/docs/Web/Accessibility) per evitare errori comuni e diventare uno sviluppatore responsabile.

Ora aggiungeremo un secondo modulo per la registrazione, appena sotto il precedente:

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

Utilizzando l'attributo `value` possiamo definire un valore predefinito per un determinato input. Nota anche che l'input per `balance` ha il tipo `number`. Sembra diverso dagli altri input? Prova a interagire con esso.

✅ Puoi navigare e interagire con i moduli utilizzando solo la tastiera? Come lo faresti?

## Invio dei dati al server

Ora che abbiamo un'interfaccia utente funzionale, il passo successivo è inviare i dati al nostro server. Facciamo un rapido test utilizzando il nostro codice attuale: cosa succede se clicchi sul pulsante *Login* o *Register*?

Hai notato il cambiamento nella sezione URL del tuo browser?

![Screenshot del cambiamento dell'URL del browser dopo aver cliccato sul pulsante Register](../../../../translated_images/click-register.e89a30bf0d4bc9ca867dc537c4cea679a7c26368bd790969082f524fed2355bc.it.png)

L'azione predefinita per un `<form>` è inviare il modulo all'URL del server corrente utilizzando il [metodo GET](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3), aggiungendo i dati del modulo direttamente all'URL. Questo metodo ha però alcune limitazioni:

- I dati inviati sono molto limitati in dimensione (circa 2000 caratteri)
- I dati sono direttamente visibili nell'URL (non ideale per le password)
- Non funziona con il caricamento di file

Ecco perché puoi cambiarlo per utilizzare il [metodo POST](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5) che invia i dati del modulo al server nel corpo della richiesta HTTP, senza nessuna delle limitazioni precedenti.

> Sebbene POST sia il metodo più comunemente utilizzato per inviare dati, [in alcuni scenari specifici](https://www.w3.org/2001/tag/doc/whenToUseGet.html) è preferibile utilizzare il metodo GET, ad esempio quando si implementa un campo di ricerca.

### Compito

Aggiungi le proprietà `action` e `method` al modulo di registrazione:

```html
<form id="registerForm" action="//localhost:5000/api/accounts" method="POST">
```

Ora prova a registrare un nuovo account con il tuo nome. Dopo aver cliccato sul pulsante *Register* dovresti vedere qualcosa del genere:

![Una finestra del browser all'indirizzo localhost:5000/api/accounts, che mostra una stringa JSON con i dati dell'utente](../../../../translated_images/form-post.61de4ca1b964d91a9e338416e19f218504dd0af5f762fbebabfe7ae80edf885f.it.png)

Se tutto va bene, il server dovrebbe rispondere alla tua richiesta con una risposta [JSON](https://www.json.org/json-en.html) contenente i dati dell'account che è stato creato.

✅ Prova a registrarti di nuovo con lo stesso nome. Cosa succede?

## Invio dei dati senza ricaricare la pagina

Come probabilmente hai notato, c'è un piccolo problema con l'approccio che abbiamo appena utilizzato: quando inviamo il modulo, usciamo dalla nostra app e il browser si reindirizza all'URL del server. Stiamo cercando di evitare tutti i ricaricamenti della pagina con la nostra app web, poiché stiamo creando una [Single-page application (SPA)](https://en.wikipedia.org/wiki/Single-page_application).

Per inviare i dati del modulo al server senza forzare un ricaricamento della pagina, dobbiamo utilizzare il codice JavaScript. Invece di mettere un URL nella proprietà `action` di un elemento `<form>`, puoi utilizzare qualsiasi codice JavaScript preceduto dalla stringa `javascript:` per eseguire un'azione personalizzata. Utilizzando questo approccio, dovrai implementare alcune attività che in precedenza venivano eseguite automaticamente dal browser:

- Recuperare i dati del modulo
- Convertire e codificare i dati del modulo in un formato adatto
- Creare la richiesta HTTP e inviarla al server

### Compito

Sostituisci l'`action` del modulo di registrazione con:

```html
<form id="registerForm" action="javascript:register()">
```

Apri `app.js` e aggiungi una nuova funzione chiamata `register`:

```js
function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const data = Object.fromEntries(formData);
  const jsonData = JSON.stringify(data);
}
```

Qui recuperiamo l'elemento del modulo utilizzando `getElementById()` e utilizziamo il helper [`FormData`](https://developer.mozilla.org/docs/Web/API/FormData) per estrarre i valori dai controlli del modulo come un insieme di coppie chiave/valore. Poi convertiamo i dati in un oggetto regolare utilizzando [`Object.fromEntries()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries) e infine serializziamo i dati in [JSON](https://www.json.org/json-en.html), un formato comunemente utilizzato per lo scambio di dati sul web.

I dati sono ora pronti per essere inviati al server. Crea una nuova funzione chiamata `createAccount`:

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

Cosa fa questa funzione? Innanzitutto, nota la parola chiave `async` qui. Questo significa che la funzione contiene codice che verrà eseguito [**asincronamente**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function). Quando utilizzata insieme alla parola chiave `await`, consente di attendere l'esecuzione del codice asincrono - come aspettare la risposta del server qui - prima di continuare.

Ecco un breve video sull'uso di `async/await`:

[![Async e Await per gestire le promesse](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async e Await per gestire le promesse")

> 🎥 Clicca sull'immagine sopra per un video su async/await.

Utilizziamo l'API `fetch()` per inviare dati JSON al server. Questo metodo richiede 2 parametri:

- L'URL del server, quindi qui rimettiamo `//localhost:5000/api/accounts`.
- Le impostazioni della richiesta. È qui che impostiamo il metodo su `POST` e forniamo il `body` per la richiesta. Poiché stiamo inviando dati JSON al server, dobbiamo anche impostare l'intestazione `Content-Type` su `application/json` in modo che il server sappia come interpretare il contenuto.

Poiché il server risponderà alla richiesta con JSON, possiamo utilizzare `await response.json()` per analizzare il contenuto JSON e restituire l'oggetto risultante. Nota che questo metodo è asincrono, quindi utilizziamo la parola chiave `await` qui prima di restituire per assicurarci che eventuali errori durante l'analisi vengano catturati.

Ora aggiungi del codice alla funzione `register` per chiamare `createAccount()`:

```js
const result = await createAccount(jsonData);
```

Poiché utilizziamo la parola chiave `await` qui, dobbiamo aggiungere la parola chiave `async` prima della funzione register:

```js
async function register() {
```

Infine, aggiungiamo alcuni log per verificare il risultato. La funzione finale dovrebbe apparire così:

```js
async function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const jsonData = JSON.stringify(Object.fromEntries(formData));
  const result = await createAccount(jsonData);

  if (result.error) {
    return console.log('An error occurred:', result.error);
  }

  console.log('Account created!', result);
}
```

È stato un po' lungo, ma ci siamo arrivati! Se apri gli [strumenti per sviluppatori del browser](https://developer.mozilla.org/docs/Learn/Common_questions/What_are_browser_developer_tools) e provi a registrare un nuovo account, non dovresti vedere alcun cambiamento sulla pagina web, ma apparirà un messaggio nella console che conferma che tutto funziona.

![Screenshot che mostra il messaggio di log nella console del browser](../../../../translated_images/browser-console.efaf0b51aaaf67782a29e1a0bb32cc063f189b18e894eb5926e02f1abe864ec2.it.png)

✅ Pensi che i dati vengano inviati al server in modo sicuro? Cosa succederebbe se qualcuno fosse in grado di intercettare la richiesta? Puoi leggere di più su [HTTPS](https://en.wikipedia.org/wiki/HTTPS) per sapere di più sulla comunicazione sicura dei dati.

## Validazione dei dati

Se provi a registrare un nuovo account senza impostare prima un nome utente, puoi vedere che il server restituisce un errore con il codice di stato [400 (Bad Request)](https://developer.mozilla.org/docs/Web/HTTP/Status/400#:~:text=The%20HyperText%20Transfer%20Protocol%20(HTTP,%2C%20or%20deceptive%20request%20routing).).

Prima di inviare dati a un server è una buona pratica [validare i dati del modulo](https://developer.mozilla.org/docs/Learn/Forms/Form_validation) in anticipo quando possibile, per assicurarsi di inviare una richiesta valida. I controlli dei moduli HTML5 forniscono una validazione integrata utilizzando vari attributi:

- `required`: il campo deve essere compilato altrimenti il modulo non può essere inviato.
- `minlength` e `maxlength`: definisce il numero minimo e massimo di caratteri nei campi di testo.
- `min` e `max`: definisce il valore minimo e massimo di un campo numerico.
- `type`: definisce il tipo di dati previsto, come `number`, `email`, `file` o [altri tipi integrati](https://developer.mozilla.org/docs/Web/HTML/Element/input). Questo attributo può anche cambiare il rendering visivo del controllo del modulo.
- `pattern`: consente di definire un modello di [espressione regolare](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Regular_Expressions) per verificare se i dati inseriti sono validi o meno.
Suggerimento: puoi personalizzare l'aspetto dei tuoi controlli del modulo a seconda che siano validi o meno utilizzando le pseudo-classi CSS `:valid` e `:invalid`.
### Compito

Ci sono 2 campi obbligatori per creare un nuovo account valido: il nome utente e la valuta, mentre gli altri campi sono opzionali. Aggiorna l'HTML del modulo, utilizzando sia l'attributo `required` che il testo nell'etichetta del campo per indicarlo:

```html
<label for="user">Username (required)</label>
<input id="user" name="user" type="text" required>
...
<label for="currency">Currency (required)</label>
<input id="currency" name="currency" type="text" value="$" required>
```

Anche se questa particolare implementazione del server non impone limiti specifici sulla lunghezza massima dei campi, è sempre una buona pratica definire limiti ragionevoli per qualsiasi inserimento di testo da parte dell'utente.

Aggiungi un attributo `maxlength` ai campi di testo:

```html
<input id="user" name="user" type="text" maxlength="20" required>
...
<input id="currency" name="currency" type="text" value="$" maxlength="5" required>
...
<input id="description" name="description" type="text" maxlength="100">
```

Ora, se premi il pulsante *Registrati* e un campo non rispetta una regola di validazione che abbiamo definito, dovresti vedere qualcosa di simile:

![Screenshot che mostra l'errore di validazione quando si tenta di inviare il modulo](../../../../translated_images/validation-error.8bd23e98d416c22f80076d04829a4bb718e0e550fd622862ef59008ccf0d5dce.it.png)

La validazione come questa, eseguita *prima* di inviare qualsiasi dato al server, si chiama validazione **client-side**. Tuttavia, nota che non è sempre possibile eseguire tutti i controlli senza inviare i dati. Ad esempio, non possiamo verificare qui se esiste già un account con lo stesso nome utente senza inviare una richiesta al server. La validazione aggiuntiva eseguita sul server si chiama validazione **server-side**.

Di solito, entrambe devono essere implementate. Mentre la validazione client-side migliora l'esperienza utente fornendo un feedback immediato, la validazione server-side è cruciale per garantire che i dati dell'utente che manipoliamo siano corretti e sicuri.

---

## 🚀 Sfida

Mostra un messaggio di errore nell'HTML se l'utente esiste già.

Ecco un esempio di come potrebbe apparire la pagina di login finale dopo un po' di styling:

![Screenshot della pagina di login dopo aver aggiunto gli stili CSS](../../../../translated_images/result.96ef01f607bf856aa9789078633e94a4f7664d912f235efce2657299becca483.it.png)

## Quiz post-lezione

[Quiz post-lezione](https://ff-quizzes.netlify.app/web/quiz/44)

## Revisione e studio autonomo

Gli sviluppatori si sono dimostrati molto creativi nella costruzione dei moduli, soprattutto per quanto riguarda le strategie di validazione. Scopri diversi flussi di moduli esplorando [CodePen](https://codepen.com); riesci a trovare moduli interessanti e ispiratori?

## Compito

[Stilizza la tua app bancaria](assignment.md)

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione automatica [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale effettuata da un traduttore umano. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.