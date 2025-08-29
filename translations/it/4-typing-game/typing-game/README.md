<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "1b0aeccb600f83c603cd70cb42df594d",
  "translation_date": "2025-08-29T00:13:48+00:00",
  "source_file": "4-typing-game/typing-game/README.md",
  "language_code": "it"
}
-->
# Creare un gioco utilizzando gli eventi

## Quiz pre-lezione

[Quiz pre-lezione](https://ff-quizzes.netlify.app/web/quiz/21)

## Programmazione basata su eventi

Quando creiamo un'applicazione basata su browser, forniamo un'interfaccia grafica (GUI) per l'utente, che utilizza per interagire con ciò che abbiamo costruito. Il modo più comune per interagire con il browser è cliccare e digitare in vari elementi. La sfida che affrontiamo come sviluppatori è che non sappiamo quando l'utente eseguirà queste operazioni!

La [programmazione basata su eventi](https://en.wikipedia.org/wiki/Event-driven_programming) è il tipo di programmazione che dobbiamo utilizzare per creare la nostra GUI. Se analizziamo questa frase, vediamo che la parola chiave qui è **evento**. [Evento](https://www.merriam-webster.com/dictionary/event), secondo Merriam-Webster, è definito come "qualcosa che accade". Questo descrive perfettamente la nostra situazione. Sappiamo che qualcosa accadrà e vogliamo eseguire del codice in risposta, ma non sappiamo quando avverrà.

Il modo in cui contrassegniamo una sezione di codice che vogliamo eseguire è creando una funzione. Quando pensiamo alla [programmazione procedurale](https://en.wikipedia.org/wiki/Procedural_programming), le funzioni vengono chiamate in un ordine specifico. Lo stesso vale per la programmazione basata su eventi. La differenza sta nel **modo** in cui le funzioni vengono chiamate.

Per gestire gli eventi (clic sui pulsanti, digitazione, ecc.), registriamo i **listener di eventi**. Un listener di eventi è una funzione che ascolta un evento e lo esegue in risposta. I listener di eventi possono aggiornare l'interfaccia utente, effettuare chiamate al server o fare qualsiasi altra cosa necessaria in risposta all'azione dell'utente. Aggiungiamo un listener di eventi utilizzando [addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) e fornendo una funzione da eseguire.

> **NOTE:** Vale la pena sottolineare che ci sono numerosi modi per creare listener di eventi. Puoi utilizzare funzioni anonime o crearne di nominate. Puoi usare vari metodi abbreviati, come impostare la proprietà `click` o utilizzare `addEventListener`. Nel nostro esercizio ci concentreremo su `addEventListener` e le funzioni anonime, poiché è probabilmente la tecnica più comune utilizzata dagli sviluppatori web. È anche la più flessibile, poiché `addEventListener` funziona per tutti gli eventi e il nome dell'evento può essere fornito come parametro.

### Eventi comuni

Ci sono [dozzine di eventi](https://developer.mozilla.org/docs/Web/Events) disponibili per essere ascoltati quando si crea un'applicazione. Fondamentalmente, qualsiasi cosa un utente faccia su una pagina genera un evento, il che ti dà molta libertà per garantire che ottenga l'esperienza desiderata. Fortunatamente, normalmente avrai bisogno solo di una piccola selezione di eventi. Ecco alcuni tra i più comuni (inclusi i due che utilizzeremo per creare il nostro gioco):

- [click](https://developer.mozilla.org/docs/Web/API/Element/click_event): L'utente ha cliccato su qualcosa, tipicamente un pulsante o un collegamento ipertestuale
- [contextmenu](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event): L'utente ha cliccato con il tasto destro del mouse
- [select](https://developer.mozilla.org/docs/Web/API/Element/select_event): L'utente ha evidenziato del testo
- [input](https://developer.mozilla.org/docs/Web/API/Element/input_event): L'utente ha inserito del testo

## Creare il gioco

Creeremo un gioco per esplorare come funzionano gli eventi in JavaScript. Il nostro gioco testerà la velocità di digitazione di un giocatore, una delle abilità più sottovalutate che tutti gli sviluppatori dovrebbero avere. Dovremmo tutti esercitarci a digitare! Il flusso generale del gioco sarà il seguente:

- Il giocatore clicca sul pulsante di avvio e viene presentato con una citazione da digitare
- Il giocatore digita la citazione il più velocemente possibile in una casella di testo
  - Ogni parola completata viene evidenziata
  - Se il giocatore commette un errore, la casella di testo diventa rossa
  - Quando il giocatore completa la citazione, viene visualizzato un messaggio di successo con il tempo trascorso

Costruiamo il nostro gioco e impariamo a gestire gli eventi!

### Struttura dei file

Avremo bisogno di tre file in totale: **index.html**, **script.js** e **style.css**. Iniziamo a configurarli per semplificarci il lavoro.

- Crea una nuova cartella per il tuo lavoro aprendo una console o una finestra del terminale ed eseguendo il seguente comando:

```bash
# Linux or macOS
mkdir typing-game && cd typing-game

# Windows
md typing-game && cd typing-game
```

- Apri Visual Studio Code

```bash
code .
```

- Aggiungi tre file alla cartella in Visual Studio Code con i seguenti nomi:
  - index.html
  - script.js
  - style.css

## Creare l'interfaccia utente

Se analizziamo i requisiti, sappiamo che avremo bisogno di alcuni elementi sulla nostra pagina HTML. È un po' come una ricetta, dove abbiamo bisogno di alcuni ingredienti:

- Un'area per visualizzare la citazione che l'utente deve digitare
- Un'area per visualizzare eventuali messaggi, come un messaggio di successo
- Una casella di testo per digitare
- Un pulsante di avvio

Ognuno di questi elementi avrà bisogno di ID per poterli utilizzare nel nostro JavaScript. Aggiungeremo anche riferimenti ai file CSS e JavaScript che creeremo.

Crea un nuovo file chiamato **index.html**. Aggiungi il seguente HTML:

```html
<!-- inside index.html -->
<html>
<head>
  <title>Typing game</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Typing game!</h1>
  <p>Practice your typing skills with a quote from Sherlock Holmes. Click **start** to begin!</p>
  <p id="quote"></p> <!-- This will display our quote -->
  <p id="message"></p> <!-- This will display any status messages -->
  <div>
    <input type="text" aria-label="current word" id="typed-value" /> <!-- The textbox for typing -->
    <button type="button" id="start">Start</button> <!-- To start the game -->
  </div>
  <script src="script.js"></script>
</body>
</html>
```

### Avviare l'applicazione

È sempre meglio sviluppare iterativamente per vedere come appaiono le cose. Avviamo la nostra applicazione. C'è una fantastica estensione per Visual Studio Code chiamata [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) che ospiterà la tua applicazione localmente e aggiornerà il browser ogni volta che salvi.

- Installa [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) seguendo il link e cliccando su **Installa**
  - Il browser ti chiederà di aprire Visual Studio Code, e Visual Studio Code ti chiederà di completare l'installazione
  - Riavvia Visual Studio Code se richiesto
- Una volta installato, in Visual Studio Code, premi Ctrl-Shift-P (o Cmd-Shift-P) per aprire il command palette
- Digita **Live Server: Open with Live Server**
  - Live Server inizierà a ospitare la tua applicazione
- Apri un browser e naviga su **https://localhost:5500**
- Ora dovresti vedere la pagina che hai creato!

Aggiungiamo un po' di funzionalità.

## Aggiungere il CSS

Con il nostro HTML creato, aggiungiamo il CSS per lo stile di base. Dobbiamo evidenziare la parola che il giocatore dovrebbe digitare e colorare la casella di testo se ciò che ha digitato è errato. Faremo questo con due classi.

Crea un nuovo file chiamato **style.css** e aggiungi la seguente sintassi.

```css
/* inside style.css */
.highlight {
  background-color: yellow;
}

.error {
  background-color: lightcoral;
  border: red;
}
```

✅ Per quanto riguarda il CSS, puoi disporre la tua pagina come preferisci. Prenditi un po' di tempo per rendere la pagina più accattivante:

- Scegli un font diverso
- Colora i titoli
- Ridimensiona gli elementi

## JavaScript

Con la nostra interfaccia utente creata, è ora di concentrarci sul JavaScript che fornirà la logica. Suddivideremo il lavoro in alcuni passaggi:

- [Creare le costanti](../../../../4-typing-game/typing-game)
- [Listener di eventi per avviare il gioco](../../../../4-typing-game/typing-game)
- [Listener di eventi per la digitazione](../../../../4-typing-game/typing-game)

Ma prima, crea un nuovo file chiamato **script.js**.

### Creare le costanti

Avremo bisogno di alcuni elementi per semplificarci la vita durante la programmazione. Ancora una volta, simile a una ricetta, ecco cosa ci servirà:

- Array con l'elenco di tutte le citazioni
- Array vuoto per memorizzare tutte le parole della citazione corrente
- Spazio per memorizzare l'indice della parola che il giocatore sta digitando
- Il momento in cui il giocatore ha cliccato su start

Avremo anche bisogno di riferimenti agli elementi dell'interfaccia utente:

- La casella di testo (**typed-value**)
- La visualizzazione della citazione (**quote**)
- Il messaggio (**message**)

```javascript
// inside script.js
// all of our quotes
const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];
// store the list of words and the index of the word the player is currently typing
let words = [];
let wordIndex = 0;
// the starting time
let startTime = Date.now();
// page elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
```

✅ Aggiungi altre citazioni al tuo gioco

> **NOTE:** Possiamo recuperare gli elementi ogni volta che vogliamo nel codice utilizzando `document.getElementById`. Poiché faremo riferimento a questi elementi regolarmente, eviteremo errori con le stringhe letterali utilizzando costanti. Framework come [Vue.js](https://vuejs.org/) o [React](https://reactjs.org/) possono aiutarti a gestire meglio la centralizzazione del tuo codice.

Prenditi un minuto per guardare un video sull'utilizzo di `const`, `let` e `var`

[![Tipi di variabili](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Tipi di variabili")

> 🎥 Clicca sull'immagine sopra per un video sulle variabili.

### Aggiungere la logica di avvio

Per iniziare il gioco, il giocatore cliccherà su start. Ovviamente, non sappiamo quando cliccherà su start. Questo è il momento in cui entra in gioco un [listener di eventi](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener). Un listener di eventi ci permetterà di ascoltare qualcosa che accade (un evento) ed eseguire codice in risposta. Nel nostro caso, vogliamo eseguire codice quando l'utente clicca su start.

Quando l'utente clicca su **start**, dobbiamo selezionare una citazione, configurare l'interfaccia utente e impostare il tracciamento per la parola corrente e il tempo. Di seguito è riportato il JavaScript che devi aggiungere; lo analizziamo subito dopo il blocco di script.

```javascript
// at the end of script.js
document.getElementById('start').addEventListener('click', () => {
  // get a quote
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];
  // Put the quote into an array of words
  words = quote.split(' ');
  // reset the word index for tracking
  wordIndex = 0;

  // UI updates
  // Create an array of span elements so we can set a class
  const spanWords = words.map(function(word) { return `<span>${word} </span>`});
  // Convert into string and set as innerHTML on quote display
  quoteElement.innerHTML = spanWords.join('');
  // Highlight the first word
  quoteElement.childNodes[0].className = 'highlight';
  // Clear any prior messages
  messageElement.innerText = '';

  // Setup the textbox
  // Clear the textbox
  typedValueElement.value = '';
  // set focus
  typedValueElement.focus();
  // set the event handler

  // Start the timer
  startTime = new Date().getTime();
});
```

Analizziamo il codice!

- Configurare il tracciamento delle parole
  - Utilizzando [Math.floor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) e [Math.random](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random) possiamo selezionare casualmente una citazione dall'array `quotes`
  - Convertiamo la `quote` in un array di `words` per tracciare la parola che il giocatore sta digitando
  - `wordIndex` viene impostato su 0, poiché il giocatore inizierà dalla prima parola
- Configurare l'interfaccia utente
  - Creare un array di `spanWords`, che contiene ogni parola all'interno di un elemento `span`
    - Questo ci permetterà di evidenziare la parola nella visualizzazione
  - Utilizzare `join` per creare una stringa che possiamo utilizzare per aggiornare l'`innerHTML` su `quoteElement`
    - Questo visualizzerà la citazione al giocatore
  - Impostare la `className` del primo elemento `span` su `highlight` per evidenziarlo in giallo
  - Pulire il `messageElement` impostando `innerText` su `''`
- Configurare la casella di testo
  - Cancellare il valore corrente su `typedValueElement`
  - Impostare il `focus` su `typedValueElement`
- Avviare il timer chiamando `getTime`

### Aggiungere la logica di digitazione

Mentre il giocatore digita, verrà generato un evento `input`. Questo listener di eventi controllerà che il giocatore stia digitando correttamente la parola e gestirà lo stato corrente del gioco. Tornando a **script.js**, aggiungi il seguente codice alla fine. Lo analizzeremo subito dopo.

```javascript
// at the end of script.js
typedValueElement.addEventListener('input', () => {
  // Get the current word
  const currentWord = words[wordIndex];
  // get the current value
  const typedValue = typedValueElement.value;

  if (typedValue === currentWord && wordIndex === words.length - 1) {
    // end of sentence
    // Display success
    const elapsedTime = new Date().getTime() - startTime;
    const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
    messageElement.innerText = message;
  } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
    // end of word
    // clear the typedValueElement for the new word
    typedValueElement.value = '';
    // move to the next word
    wordIndex++;
    // reset the class name for all elements in quote
    for (const wordElement of quoteElement.childNodes) {
      wordElement.className = '';
    }
    // highlight the new word
    quoteElement.childNodes[wordIndex].className = 'highlight';
  } else if (currentWord.startsWith(typedValue)) {
    // currently correct
    // highlight the next word
    typedValueElement.className = '';
  } else {
    // error state
    typedValueElement.className = 'error';
  }
});
```

Analizziamo il codice! Iniziamo recuperando la parola corrente e il valore che il giocatore ha digitato finora. Poi utilizziamo una logica a cascata, dove controlliamo se la citazione è completa, la parola è completa, la parola è corretta o (infine) se c'è un errore.

- La citazione è completa, indicata da `typedValue` uguale a `currentWord` e `wordIndex` uguale a uno in meno della `length` di `words`
  - Calcolare `elapsedTime` sottraendo `startTime` dal tempo corrente
  - Dividere `elapsedTime` per 1.000 per convertire da millisecondi a secondi
  - Visualizzare un messaggio di successo
- La parola è completa, indicata da `typedValue` che termina con uno spazio (la fine di una parola) e `typedValue` uguale a `currentWord`
  - Impostare `value` su `typedElement` su `''` per consentire la digitazione della parola successiva
  - Incrementare `wordIndex` per passare alla parola successiva
  - Scorrere tutti i `childNodes` di `quoteElement` per impostare `className` su `''` per tornare alla visualizzazione predefinita
  - Impostare `className` della parola corrente su `highlight` per contrassegnarla come la prossima parola da digitare
- La parola è attualmente digitata correttamente (ma non completa), indicata da `currentWord` che inizia con `typedValue`
  - Assicurarsi che `typedValueElement` sia visualizzato come predefinito cancellando `className`
- Se siamo arrivati fin qui, c'è un errore
  - Impostare `className` su `typedValueElement` su `error`

## Testare l'applicazione

Sei arrivato alla fine! L'ultimo passaggio è assicurarti che la tua applicazione funzioni. Provala! Non preoccuparti se ci sono errori; **tutti gli sviluppatori** incontrano errori. Esamina i messaggi e fai debug se necessario.

Clicca su **start** e inizia a digitare! Dovrebbe assomigliare un po' all'animazione che abbiamo visto prima.

![Animazione del gioco in azione](../../../../4-typing-game/images/demo.gif)

---

## 🚀 Sfida

Aggiungi più funzionalità

- Disabilita il listener dell'evento `input` al completamento e riattivalo quando viene cliccato il pulsante
- Disabilita la casella di testo quando il giocatore completa la citazione
- Visualizza una finestra di dialogo modale con il messaggio di successo
- Memorizza i punteggi migliori utilizzando [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)
## Quiz post-lezione

[Quiz post-lezione](https://ff-quizzes.netlify.app/web/quiz/22)

## Revisione e studio autonomo

Leggi [tutti gli eventi disponibili](https://developer.mozilla.org/docs/Web/Events) per gli sviluppatori tramite il browser web e considera gli scenari in cui utilizzeresti ciascuno di essi.

## Compito

[Crea un nuovo gioco con tastiera](assignment.md)

---

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione automatica [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale eseguita da un traduttore umano. Non siamo responsabili per eventuali fraintendimenti o interpretazioni errate derivanti dall'uso di questa traduzione.