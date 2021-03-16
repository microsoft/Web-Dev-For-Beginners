# Creare un gioco utilizzando gli eventi

## Quiz Pre-Lezione

[Quiz Pre-Lezione](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/21?loc=it)

## Programmazione guidata dagli eventi

Quando si crea un'applicazione basata su browser, si fornisce un'interfaccia utente grafica (GUI) che l'utente può utilizzare quando interagisce con ciò che si è creato. Il modo più comune per interagire con il browser è facendo clic e digitando su vari elementi. La sfida che si deve affrontare come sviluppatore è che non si conosce quando gli utenti eseguiranno queste operazioni!

[Programmazione guidata dagli eventi](https://it.wikipedia.org/wiki/Programmazione_a_eventi) è il nome del tipo di programmazione che serve per creare l'interfaccia grafica (GUI). Se si suddividie un po' questa frase, si nota che la parola chiave qui è **evento**. [L'evento](https://www.grandidizionari.it/Dizionario_Italiano/parola/E/evento.aspx?query=evento), secondo il dizionario, è definito come "fatto avvenuto o che può avvenire". Questo descrive perfettamente la situazione da affrontare. Si sa che succederà qualcosa per cui si vuole eseguire del codice in risposta, ma non si sa quando avverrà.

Il modo in cui si contrassegna una sezione di codice che si vuole eseguire è creando una funzione. Quando si pensa alla [programmazione procedurale](https://it.wikipedia.org/wiki/Programmazione_procedurale), le funzioni vengono chiamate in un ordine specifico. La stessa cosa sarà vera con la programmazione guidata dagli eventi. La differenza è **come** verranno chiamate le funzioni.

Per gestire gli eventi (clic sul pulsante, digitazione, ecc.), si registrano gli ascoltatori di eventi (**event listener**). Un event listener è una funzione che ascolta il verificarsi di un evento e viene eseguita in risposta. Gli event listener possono aggiornare l'interfaccia utente, effettuare chiamate al server o qualsiasi altra cosa debba essere eseguita in risposta all'azione dell'utente. Un event listener si aggiunge usando [addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener), e fornendo una funzione da eseguire.

> **NOTA:** vale la pena sottolineare che esistono numerosi modi per creare event listener. È possibile utilizzare funzioni anonime o creare funzioni con nome. Si possono utilizzare varie scorciatoie, come impostare la proprietà `click` o utilizzare `addEventListener`. In questo esercizio si ci concentrerà su `addEventLister` e sulle funzioni anonime, poiché è probabilmente la tecnica più comune utilizzata dagli sviluppatori web. È anche la più flessibile, visto che `addEventListener` funziona per tutti gli eventi e il nome dell'evento può essere fornito come parametro.

### Eventi comuni

Ci sono [dozzine di eventi](https://developer.mozilla.org/docs/Web/Events) disponibili da ascoltare quando si crea un'applicazione. Fondamentalmente qualsiasi cosa un utente fa su una pagina genera un evento, il che dà molto potere allo sviluppatore per assicurarsi che egli ottenga l'esperienza che desidera. Fortunatamente, in genere si avrà solo bisogno di una piccola manciata di eventi. Eccone alcuni comuni (inclusi i due che verranno usati durante la creazione del gioco):

- [clic](https://developer.mozilla.org/docs/Web/API/Element/click_event): l'utente ha fatto clic su qualcosa, in genere un pulsante o un collegamento ipertestuale
- [contextmenu](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event): l'utente ha fatto clic con il pulsante destro del mouse
- [select](https://developer.mozilla.org/docs/Web/API/Element/select_event): l'utente ha evidenziato del testo
- [input](https://developer.mozilla.org/docs/Web/API/Element/input_event): l'utente ha inserito del testo

## Creare il gioco

Verrà creato un gioco per esplorare come funzionano gli eventi in JavaScript. Il gioco metterà alla prova l'abilità di battitura di un giocatore, che è una delle abilità più sottovalutate che tutti gli sviluppatori dovrebbero avere. Tutti dovrebbero esercitarsi a digitare! Il flusso generale del gioco sarà simile a questo:

- Il giocatore fa clic sul pulsante di avvio e gli viene visualizzata una citazione da digitare
- Il giocatore digita la citazione il più velocemente possibile in una casella di testo
   - Quando ogni parola è completata, viene evidenziata quella successiva
   - Se il giocatore ha un errore di battitura, la casella di testo viene aggiornata in rosso
   - Quando il giocatore completa la citazione, viene visualizzato un messaggio di successo con il tempo trascorso

Ora si costruirà il gioco e si imparierà a conoscere gli eventi!

### Struttura dei file

Saranno necessari tre file in totale: **index.html**, **script.js** e **style.css**. Si inizia impostando quelli per rendere la vita un po' più facile allo sviluppatore.

- Creare una nuova cartella per il proprio lavoro aprendo una console o una finestra di terminale ed eseguendo il seguente comando:

```bash
# Linux o macOS
mkdir typing-game && cd typing-game

# Windows
md typing-game && cd typing-game
```

- Aprire Visual Studio Code

```bash
code .
```

- Aggiungere tre file alla cartella in Visual Studio Code con i seguenti nomi:
   - index.html
   - script.js
   - Style.css

## Creare l'interfaccia utente

Se si esaminano i requisiti, si saprà che servirà una manciata di elementi sulla pagina HTML. Questa è una specie di ricetta, per la quale servono alcuni ingredienti:

- Un punto nel quale visualizzare la citazione che l'utente deve digitare
- Un punto nel quale visualizzare qualsiasi messaggio, come un messaggio di successo
- Una casella di testo per la digitazione
- Un pulsante di avvio

Ognuno di questi avrà bisogno di ID in modo da poterli referenziare nel codice JavaScript. Verranno aggiunti anche riferimenti ai file CSS e JavaScript che saranno creati.

Creare un nuovo file denominato **index.html**. Inserire il segunte testo HTML:

```html
<!-- inside index.html -->
<html>
<head>
  <title>Gioco di Digitazione</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Gioco di Digitazione</h1>
  <p>Esercita la tua abilità nella digitazione con una citazione da Sherlock Holmes. Fai click su <strong>start</strong> per iniziare!</p>
  <p id="quote"></p> <!-- Qui si visualizza la citazione -->
  <p id="message"></p> <!-- Qui si visualizza un qualsiasi messaggio di stato -->
  <div>
    <input type="text" aria-label="current word" id="typed-value" /> <!-- La casella di testo per digitare -->
    <button type="button" id="start">Start</button> <!-- Per far partire il gioco -->
  </div>
  <script src="script.js"></script>
</body>
</html>
```

### Avviare l'applicazione

È sempre meglio sviluppare in modo iterativo per vedere come appaiono le cose. Lanciare l'applicazione. Una meravigliosa estensione per Visual Studio Code chiamata [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) ospiterà la propria applicazione localmente e aggiornerà il browser ogni volta che viene effettuata una operazione di salvataggio nel codice.

- Installare [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) seguendo il collegamento e facendo clic su **Install**
   - Verrà richiesto dal browser di aprire Visual Studio Code e quindi da Visual Studio Code di eseguire l'installazione
   - Riavviare Visual Studio Code se richiesto
- Una volta installato, in Visual Studio Code, fare clic su Ctrl-Shift-P (o Cmd-Shift-P se su MAC) per aprire il riquadro dei comandi
- Digitare **Live Server: Open with Live Server**
   - Live Server inizierà a servire la propria applicazione
- Aprire un browser e andare a **https://localhost:5500**
- Ora si dovrebbe vedere la pagina che si è creato!

Ora si aggiungeranno alcune funzionalità.

## Aggiungere CSS

Con l'HTML creato, ora si aggiunge CSS per lo stile di base. Occorre evidenziare la parola che il giocatore dovrebbe digitare e colorare la casella di testo se ciò che ha digitato non è corretto. Verrà fatto con due classi.

Aprire il file denominato **style.css** e aggiungere quanto segue.

```css
/* all'interno di style.css */
.highlight {
  background-color: yellow;
}

.error {
  background-color: lightcoral;
  border: red;
}
```

✅ Quando si tratta di CSS, si può impaginare la propria pagina come si preferisce. Ci si prenda un po' di tempo per rendere la pagina più accattivante:

- Scegliere un carattere diverso
- Colorare le intestazioni
- Ridimensionare gli elementi

## JavaScript

Con l'interfaccia utente creata, è il momento di concentrare l'attenzione sul codice JavaScript che fornirà la logica. Verrà suddiviso in una manciata di passaggi:

- [Creare le costanti](#aggiungere-le-costanti)
- [Event listener per avviare il gioco](#aggiungere-la-logica-di-avvio)
- [Event listener per la digitazione](#aggiungere-la-logica-di-digitazione)

Se non già fatto, creare un nuovo file chiamato **script.js**.

### Aggiungere le costanti

Serviranno alcuni elementi per facilitarsi la vita per la programmazione. Ancora una volta, simile a una ricetta, ecco di cosa si avrà bisogno:

- Matrice con l'elenco di tutte le citazioni
- Matrice vuota per memorizzare tutte le parole per la citazione corrente
- Spazio per memorizzare l'indice della parola che il giocatore sta al momento digitando
- L'orario nel quale il giocatore ha fatto clic su Start

Verranno anche referenziati gli elementi dell'interfaccia utente:

- La casella di testo (**typed-value**)
- La visualizzazione della citazione (**quote**)
- Il messaggio (**message**)

```javascript
// all'interno di script.js
// tutte le citazioni
const quotes = [
    'Eliminato l’impossibile, ciò che resta, per improbabile che sia, deve essere la verità.',
    'Non vi è nulla di così ingannevole come un fatto ovvio.',
    'Spesso, il delitto più banale è il più incomprensibile proprio perché non presenta aspetti insoliti o particolari, da cui si possano trarre delle deduzioni.',
    'Non faccio mai eccezioni. Un’eccezione contraddice la regola.',
    'Ciò che un uomo può inventare, un altro può scoprire.',
    'Il miglior modo per chiarire le idee è quello di spiegarle ad un’altra persona.',
    "L'istruzione non finisce mai, Watson. Si tratta di una serie di lezioni, con la più grande per l'ultima."
];
// memorizza l'elenco di parole e l'indice della parola che il giocatore sta attualmente digitando
let words = [];
let wordIndex = 0;
// l'orario di partenza
let startTime = Date.now();
// elementi nella pagina
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
```

✅ Proseguire aggiungendo altre citazioni al proprio gioco

> **NOTA:** si possono recuperare gli elementi ogni volta che serve nel codice utilizzando `document.getElementById`. A causa del fatto che questi elementi verrranno referenziati su base regolare, si eviteranno errori di battitura con stringhe letterali utilizzando costanti. Infrastrutture come [Vue.js](https://vuejs.org/) o [React](https://reactjs.org/) possono aiutare a gestire meglio la centralizzazione del codice.

Si prenda un minuto per guardare un video sull'uso di `const`, `let` e `var`

[![Tipi delle variabili](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "  Tipi delle variabili")

> Fare clic sull'immagine sopra per un video sulle variabili (in inglese).

### Aggiungere la logica di avvio

Per iniziare il gioco, il giocatore farà clic su Start. Ovviamente non si sa quando verrà fatto clic su Start. È qui che entra in gioco un [event listener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) Un event listener consentirà di ascoltare il verificarsi di qualcosa (un evento) ed eseguire del codice in risposta. Nel nostro caso, si vuole eseguire il codice quando l'utente fa clic su Start.

Quando l'utente fa clic su **Start**, occorre selezionare una citazione , configurare l'interfaccia utente e impostare il monitoraggio per la parola e il conteggio del tempo. Di seguito è riportato il codice JavaScript che si dovrà aggiungere; verrà discusso subito dopo questo blocco.

```javascript
// alla fine in script.js
document.getElementById('start').addEventListener('click', () => {
  // si ottiene una citazione
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];
  // Si inserisce la citazione in un array di parole
  words = quote.split(' ');
  // si reimposta l'indice della parola da monitorare
  wordIndex = 0;

  // Aggiornamenti interfaccia utente 
  // Si crea un array di elementi span in modo da impostare una classe
  const spanWords = words.map(function(word) { return `<span>${word} </span>`});
  // Converzione in stringa e impostazione come innerHTML alla visualizzazione della citazione
  quoteElement.innerHTML = spanWords.join('');
  // Evidenzia la prima parola
  quoteElement.childNodes[0].className = 'highlight';
  // Pulisce qualsiasi precedente messaggio
  messageElement.innerText = '';

  // Impostazione della casella di testo
  // Pulisce la casella di testo
  typedValueElement.value = '';
  // imposta il focus
  typedValueElement.focus();
  // imposta il gestore di evento

  // Fa partire il timer
  startTime = new Date().getTime();
});
```

Verrà analizzato il codice!

- Impostazione del monitoraggio delle parole
   - L'utilizzo  di [Math.floor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) e [Math.random](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random) consente di selezionare in modo casuale una citazione dall'array `quotes`
   - Si converte la citazione (`quote`) in un array di parole (`words`) in modo da poter tracciare la parola che il giocatore sta attualmente digitando
   - Si imposta `wordIndex`  a 0, poiché il giocatore inizierà dalla prima parola
- Impostazione dell'interfaccia utente
   - Si crea un array  `spanWords`, che contiene ogni parola all'interno di un elemento `span`
      - Questo permetterà di evidenziare la parola sul display
   - Si unisce (`join`) l'array per creare una stringa che si può usare per aggiornare `innerHTML` su `quoteElement`
      - Questo mostrerà la citazione al giocatore
   - Si imposta `className` del primo elemento `span` a `highlight` per evidenziarlo in giallo
   - Si pulisce `messageElement` impostando `innerText` a `''`
- Impostazione della casella di testo
   - Si cancella il valore (`value`) corrente su `typedValueElement`
   - Si imposta l'elemento (`focus`) su `typedValueElement`
- Su avvia il timer chiamando `getTime`

### Aggiungere la logica di digitazione

Man mano che il giocatore digita, verrà generato un evento di `input` . Questo event listener verificherà che il giocatore stia digitando correttamente la parola e gestirà lo stato corrente del gioco. Tornando a **script.js**, aggiungere il codice seguente alla fine. Verrà analizzato in seguito.

```javascript
// in fondo a script.js
typedValueElement.addEventListener('input', () => {
  // Ottiene la parola corrente
  const currentWord = words[wordIndex];
  // Ottiene il valore corrente
  const typedValue = typedValueElement.value;

  if (typedValue === currentWord && wordIndex === words.length - 1) {
    // fine della frase
    // Visualizza messaggio di successo
    const elapsedTime = new Date().getTime() - startTime;
    const message = `CONGRATULAZIONI! Hai finito in ${elapsedTime / 1000} secondi.`;
    messageElement.innerText = message;
  } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
    // fine della parola
    // pulisce typedValueElement per la nuova parola
    typedValueElement.value = '';
    // si sposta alla parola successiva
    wordIndex++;
    // reimposta il nome della classe per tutti gli elementi in quote
    for (const wordElement of quoteElement.childNodes) {
      wordElement.className = '';
    }
    // evidenzia la nuova parola
    quoteElement.childNodes[wordIndex].className = 'highlight';
  } else if (currentWord.startsWith(typedValue)) {
    // attualmente corretto
    // evidenzia la parola successiva
    typedValueElement.className = '';
  } else {
    // stato di errore
    typedValueElement.className = 'error';
  }
});
```

Ora si analizzerà il codice! Si inizia catturando la parola corrente e il valore che il giocatore ha digitato finora. Quindi si ha una logica a cascata, dove si controlla se la citazione è completa, la parola è completa, la parola è corretta o (finalmente), se c'è un errore.

- La citazione è completa, indicata da `typedValue` che è uguale a `currentWord` e `wordIndex` è uguale a uno meno la lunghezza `length` delle parole (`words`)
   - Si calcola `elapsedTime` sottraendo `startTime` dall'orario corrente
   - Si divide `elapsedTime` per 1.000 per convertire da millisecondi a secondi
   - Si visualizza un messaggio di successo
- La parola è completa, indicata da `typedValue` che termina con uno spazio (la fine di una parola) e `typedValue` è uguale a `currentWord`
   - imposta il valore (`value`) di `typedElement` a `" "` per consentire la digitazione della parola successiva
   - Si incrementa `wordIndex` per passare alla parola successiva
   - Si itera su tutti i nodi figli `childNode` di `quoteElement` per impostare `className` a `""` per tornare alla visualizzazione predefinita
   - Si imposta `className` della parola corrente per evidenziarla a `highlight` per contrassegnarla come parola successiva da digitare
- La parola (`word`) è attualmente digitata correttamente (ma non è completa), indicato da `currentWord` che deve iniziare con il contenuto di `typedValue`
   - Ci si assicura che `typedValueElement` sia visualizzato nel modo predefinito cancellando `className`
- Se si è arrivati fin qui, si ha un errore
   - Si imposta `className` per `typedValueElement` su `error`

## Verificare l'applicazione

Si è arrivati alla fine! L'ultimo passaggio è assicurarsi che la propria applicazione funzioni. Fare una prova! Non ci si deve preoccupare se ci sono errori; **tutti gli sviluppatori** fanno errori. Esaminare i messaggi ed eseguire il debug secondo necessità.

Fare clic su **Start** e iniziare a digitare! Dovrebbe assomigliare un po' all'animazione vista prima.

![Animazione del gioco in azione](../../images/demo.gif)

---

## 🚀 Sfida

Aggiungere più funzionalità

- Disabilitare l'event listener per l'evento di `input` al completamento e riattivarlo quando si fa clic sul pulsante
- Disabilitare la casella di testo quando il giocatore completa la citazione
- Visualizzare una finestra di dialogo modale con il messaggio di successo
- Memorizzare i punteggi migliori utilizzando [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)

## Quiz Post-Lezione

[Quiz post-lezione](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/22?loc=it)

## Revisione e Auto Apprendimento

Informarsi su [tutti gli eventi disponibili](https://developer.mozilla.org/docs/Web/Events) per lo sviluppatore tramite il browser web e considerare gli scenari nei quali si userebbe ciascuno di essi.

## Compito

[Creazione di un nuovo gioco con la tastiera](assignment.it.md)
