<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e982871b8388c59c22a41b73b5fca70f",
  "translation_date": "2025-08-24T13:51:57+00:00",
  "source_file": "4-typing-game/typing-game/README.md",
  "language_code": "de"
}
-->
# Ein Spiel mit Ereignissen erstellen

## Quiz vor der Vorlesung

[Quiz vor der Vorlesung](https://ff-quizzes.netlify.app/web/quiz/21)

## Ereignisgesteuerte Programmierung

Beim Erstellen einer browserbasierten Anwendung stellen wir eine grafische Benutzeroberfläche (GUI) bereit, die der Benutzer verwenden kann, um mit dem zu interagieren, was wir gebaut haben. Die häufigste Art, mit dem Browser zu interagieren, ist durch Klicken und Tippen auf verschiedene Elemente. Die Herausforderung, der wir als Entwickler gegenüberstehen, ist, dass wir nicht wissen, wann der Benutzer diese Aktionen ausführen wird!

[Ereignisgesteuerte Programmierung](https://de.wikipedia.org/wiki/Ereignisgesteuerte_Programmierung) ist der Name für die Art der Programmierung, die wir benötigen, um unsere GUI zu erstellen. Wenn wir diesen Begriff ein wenig aufschlüsseln, sehen wir, dass das Kernwort hier **Ereignis** ist. [Ereignis](https://www.merriam-webster.com/dictionary/event) wird laut Merriam-Webster definiert als "etwas, das passiert". Das beschreibt unsere Situation perfekt. Wir wissen, dass etwas passieren wird, für das wir Code ausführen möchten, aber wir wissen nicht, wann es stattfinden wird.

Die Art und Weise, wie wir einen Abschnitt von Code markieren, den wir ausführen möchten, besteht darin, eine Funktion zu erstellen. Wenn wir an [prozedurale Programmierung](https://de.wikipedia.org/wiki/Prozedurale_Programmierung) denken, werden Funktionen in einer bestimmten Reihenfolge aufgerufen. Dasselbe gilt auch für ereignisgesteuerte Programmierung. Der Unterschied liegt darin, **wie** die Funktionen aufgerufen werden.

Um Ereignisse (Button-Klicks, Eingaben usw.) zu behandeln, registrieren wir **Ereignis-Listener**. Ein Ereignis-Listener ist eine Funktion, die auf ein Ereignis wartet und daraufhin ausgeführt wird. Ereignis-Listener können die Benutzeroberfläche aktualisieren, Serveraufrufe durchführen oder alles andere erledigen, was als Reaktion auf die Aktion des Benutzers erforderlich ist. Wir fügen einen Ereignis-Listener hinzu, indem wir [addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) verwenden und eine Funktion bereitstellen, die ausgeführt werden soll.

> **NOTE:** Es ist erwähnenswert, dass es zahlreiche Möglichkeiten gibt, Ereignis-Listener zu erstellen. Sie können anonyme Funktionen verwenden oder benannte Funktionen erstellen. Sie können verschiedene Abkürzungen nutzen, wie das Setzen der `click`-Eigenschaft oder die Verwendung von `addEventListener`. In unserer Übung konzentrieren wir uns auf `addEventListener` und anonyme Funktionen, da dies wahrscheinlich die am häufigsten verwendete Technik von Webentwicklern ist. Es ist auch die flexibelste, da `addEventListener` für alle Ereignisse funktioniert und der Ereignisname als Parameter übergeben werden kann.

### Häufige Ereignisse

Es gibt [Dutzende von Ereignissen](https://developer.mozilla.org/docs/Web/Events), die Sie beim Erstellen einer Anwendung überwachen können. Grundsätzlich löst alles, was ein Benutzer auf einer Seite tut, ein Ereignis aus, was Ihnen viel Macht gibt, um sicherzustellen, dass der Benutzer die gewünschte Erfahrung erhält. Glücklicherweise benötigen Sie normalerweise nur eine kleine Auswahl an Ereignissen. Hier sind einige häufige (einschließlich der beiden, die wir beim Erstellen unseres Spiels verwenden werden):

- [click](https://developer.mozilla.org/docs/Web/API/Element/click_event): Der Benutzer hat auf etwas geklickt, typischerweise auf einen Button oder Hyperlink
- [contextmenu](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event): Der Benutzer hat die rechte Maustaste geklickt
- [select](https://developer.mozilla.org/docs/Web/API/Element/select_event): Der Benutzer hat Text markiert
- [input](https://developer.mozilla.org/docs/Web/API/Element/input_event): Der Benutzer hat Text eingegeben

## Das Spiel erstellen

Wir werden ein Spiel erstellen, um zu erkunden, wie Ereignisse in JavaScript funktionieren. Unser Spiel wird die Tippfähigkeiten eines Spielers testen, eine der am meisten unterschätzten Fähigkeiten, die alle Entwickler haben sollten. Wir sollten alle unsere Tippfähigkeiten üben! Der allgemeine Ablauf des Spiels sieht folgendermaßen aus:

- Der Spieler klickt auf den Start-Button und erhält ein Zitat, das er tippen soll
- Der Spieler tippt das Zitat so schnell wie möglich in ein Textfeld
  - Jedes Wort wird hervorgehoben, sobald es abgeschlossen ist
  - Wenn der Spieler einen Tippfehler macht, wird das Textfeld rot
  - Wenn der Spieler das Zitat abschließt, wird eine Erfolgsmeldung mit der verstrichenen Zeit angezeigt

Lassen Sie uns unser Spiel bauen und dabei etwas über Ereignisse lernen!

### Dateistruktur

Wir benötigen insgesamt drei Dateien: **index.html**, **script.js** und **style.css**. Lassen Sie uns diese einrichten, um uns die Arbeit zu erleichtern.

- Erstellen Sie einen neuen Ordner für Ihre Arbeit, indem Sie ein Konsolen- oder Terminalfenster öffnen und den folgenden Befehl ausführen:

```bash
# Linux or macOS
mkdir typing-game && cd typing-game

# Windows
md typing-game && cd typing-game
```

- Öffnen Sie Visual Studio Code

```bash
code .
```

- Fügen Sie dem Ordner in Visual Studio Code drei Dateien mit den folgenden Namen hinzu:
  - index.html
  - script.js
  - style.css

## Die Benutzeroberfläche erstellen

Wenn wir die Anforderungen untersuchen, wissen wir, dass wir eine Handvoll Elemente auf unserer HTML-Seite benötigen. Das ist ein bisschen wie ein Rezept, bei dem wir einige Zutaten brauchen:

- Einen Bereich, um das Zitat anzuzeigen, das der Benutzer tippen soll
- Einen Bereich, um Nachrichten wie eine Erfolgsmeldung anzuzeigen
- Ein Textfeld zum Tippen
- Einen Start-Button

Jedes dieser Elemente benötigt IDs, damit wir mit ihnen in unserem JavaScript arbeiten können. Wir werden auch Verweise auf die CSS- und JavaScript-Dateien hinzufügen, die wir erstellen werden.

Erstellen Sie eine neue Datei namens **index.html**. Fügen Sie den folgenden HTML-Code hinzu:

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

### Die Anwendung starten

Es ist immer am besten, iterativ zu entwickeln, um zu sehen, wie die Dinge aussehen. Lassen Sie uns unsere Anwendung starten. Es gibt eine wunderbare Erweiterung für Visual Studio Code namens [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon), die Ihre Anwendung lokal hostet und den Browser jedes Mal aktualisiert, wenn Sie speichern.

- Installieren Sie [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon), indem Sie dem Link folgen und auf **Installieren** klicken
  - Der Browser fordert Sie auf, Visual Studio Code zu öffnen, und Visual Studio Code fordert Sie auf, die Installation durchzuführen
  - Starten Sie Visual Studio Code neu, falls erforderlich
- Sobald die Installation abgeschlossen ist, klicken Sie in Visual Studio Code auf Strg-Shift-P (oder Cmd-Shift-P), um die Befehls-Palette zu öffnen
- Geben Sie **Live Server: Open with Live Server** ein
  - Live Server beginnt, Ihre Anwendung zu hosten
- Öffnen Sie einen Browser und navigieren Sie zu **https://localhost:5500**
- Sie sollten jetzt die Seite sehen, die Sie erstellt haben!

Lassen Sie uns etwas Funktionalität hinzufügen.

## CSS hinzufügen

Nachdem wir unser HTML erstellt haben, fügen wir das CSS für die grundlegende Gestaltung hinzu. Wir müssen das Wort hervorheben, das der Spieler tippen soll, und das Textfeld einfärben, wenn das, was er getippt hat, falsch ist. Wir werden dies mit zwei Klassen tun.

Erstellen Sie eine neue Datei namens **style.css** und fügen Sie den folgenden Syntax hinzu.

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

✅ Wenn es um CSS geht, können Sie Ihre Seite so gestalten, wie Sie möchten. Nehmen Sie sich etwas Zeit, um die Seite ansprechender zu gestalten:

- Wählen Sie eine andere Schriftart
- Färben Sie die Überschriften ein
- Ändern Sie die Größe der Elemente

## JavaScript

Nachdem wir unsere Benutzeroberfläche erstellt haben, konzentrieren wir uns nun auf das JavaScript, das die Logik bereitstellt. Wir werden dies in eine Handvoll Schritte unterteilen:

- [Die Konstanten erstellen](../../../../4-typing-game/typing-game)
- [Ereignis-Listener für den Spielstart](../../../../4-typing-game/typing-game)
- [Ereignis-Listener für das Tippen](../../../../4-typing-game/typing-game)

Erstellen Sie zunächst eine neue Datei namens **script.js**.

### Die Konstanten hinzufügen

Wir benötigen einige Elemente, um uns das Programmieren zu erleichtern. Wieder ähnlich wie ein Rezept, hier ist, was wir brauchen:

- Ein Array mit der Liste aller Zitate
- Ein leeres Array, um alle Wörter des aktuellen Zitats zu speichern
- Einen Speicherplatz für den Index des Wortes, das der Spieler gerade tippt
- Die Zeit, zu der der Spieler auf Start geklickt hat

Wir möchten auch Verweise auf die UI-Elemente:

- Das Textfeld (**typed-value**)
- Die Zitat-Anzeige (**quote**)
- Die Nachricht (**message**)

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

✅ Fügen Sie Ihrem Spiel weitere Zitate hinzu

> **NOTE:** Wir können die Elemente jederzeit im Code abrufen, indem wir `document.getElementById` verwenden. Da wir diese Elemente regelmäßig referenzieren werden, vermeiden wir Tippfehler mit Zeichenkettenliteralen, indem wir Konstanten verwenden. Frameworks wie [Vue.js](https://vuejs.org/) oder [React](https://reactjs.org/) können Ihnen helfen, Ihre zentrale Codeverwaltung besser zu organisieren.

Nehmen Sie sich eine Minute Zeit, um ein Video über die Verwendung von `const`, `let` und `var` anzusehen.

[![Arten von Variablen](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Arten von Variablen")

> 🎥 Klicken Sie auf das Bild oben, um ein Video über Variablen anzusehen.

### Start-Logik hinzufügen

Um das Spiel zu beginnen, klickt der Spieler auf Start. Natürlich wissen wir nicht, wann er auf Start klicken wird. Hier kommt ein [Ereignis-Listener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) ins Spiel. Ein Ereignis-Listener ermöglicht es uns, auf etwas zu warten (ein Ereignis) und Code als Reaktion darauf auszuführen. In unserem Fall möchten wir Code ausführen, wenn der Benutzer auf Start klickt.

Wenn der Benutzer auf **Start** klickt, müssen wir ein Zitat auswählen, die Benutzeroberfläche einrichten und die Verfolgung des aktuellen Wortes und der Zeit einrichten. Unten finden Sie das JavaScript, das Sie hinzufügen müssen; wir besprechen es direkt nach dem Skriptblock.

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

Lassen Sie uns den Code aufschlüsseln!

- Einrichtung der Wortverfolgung
  - Mit [Math.floor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) und [Math.random](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random) können wir zufällig ein Zitat aus dem `quotes`-Array auswählen
  - Wir konvertieren das `quote` in ein Array von `words`, damit wir das Wort verfolgen können, das der Spieler gerade tippt
  - `wordIndex` wird auf 0 gesetzt, da der Spieler mit dem ersten Wort beginnt
- Einrichtung der Benutzeroberfläche
  - Erstellen eines Arrays von `spanWords`, das jedes Wort in einem `span`-Element enthält
    - Dadurch können wir das Wort auf der Anzeige hervorheben
  - `join` des Arrays, um eine Zeichenkette zu erstellen, die wir verwenden können, um das `innerHTML` auf `quoteElement` zu aktualisieren
    - Dies zeigt dem Spieler das Zitat an
  - Setzen der `className` des ersten `span`-Elements auf `highlight`, um es gelb hervorzuheben
  - Bereinigen des `messageElement`, indem `innerText` auf `''` gesetzt wird
- Einrichtung des Textfelds
  - Löschen des aktuellen `value` auf `typedValueElement`
  - Setzen des `focus` auf `typedValueElement`
- Starten des Timers durch Aufrufen von `getTime`

### Tipp-Logik hinzufügen

Während der Spieler tippt, wird ein `input`-Ereignis ausgelöst. Dieser Ereignis-Listener überprüft, ob der Spieler das Wort korrekt tippt, und behandelt den aktuellen Status des Spiels. Kehren Sie zu **script.js** zurück und fügen Sie den folgenden Code am Ende hinzu. Wir werden ihn danach aufschlüsseln.

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

Lassen Sie uns den Code aufschlüsseln! Wir beginnen damit, das aktuelle Wort und den Wert zu erfassen, den der Spieler bisher getippt hat. Dann haben wir eine Wasserfall-Logik, bei der wir überprüfen, ob das Zitat abgeschlossen ist, das Wort abgeschlossen ist, das Wort korrekt ist oder (schließlich), ob ein Fehler vorliegt.

- Das Zitat ist abgeschlossen, angezeigt durch `typedValue`, das gleich `currentWord` ist, und `wordIndex`, das gleich der Länge von `words` minus eins ist
  - Berechnen von `elapsedTime`, indem `startTime` von der aktuellen Zeit subtrahiert wird
  - Teilen von `elapsedTime` durch 1.000, um von Millisekunden in Sekunden umzuwandeln
  - Anzeigen einer Erfolgsmeldung
- Das Wort ist abgeschlossen, angezeigt durch `typedValue`, das mit einem Leerzeichen endet (das Ende eines Wortes), und `typedValue`, das gleich `currentWord` ist
  - Setzen von `value` auf `typedElement` auf `''`, um das nächste Wort tippen zu können
  - Erhöhen von `wordIndex`, um zum nächsten Wort zu wechseln
  - Durchlaufen aller `childNodes` von `quoteElement`, um `className` auf `''` zu setzen, um die Standardanzeige wiederherzustellen
  - Setzen von `className` des aktuellen Wortes auf `highlight`, um es als nächstes zu tippendes Wort zu markieren
- Das Wort wird derzeit korrekt getippt (aber nicht abgeschlossen), angezeigt durch `currentWord`, das mit `typedValue` beginnt
  - Sicherstellen, dass `typedValueElement` als Standard angezeigt wird, indem `className` gelöscht wird
- Wenn wir bis hierher gekommen sind, liegt ein Fehler vor
  - Setzen von `className` auf `typedValueElement` auf `error`

## Testen Sie Ihre Anwendung

Sie haben es bis zum Ende geschafft! Der letzte Schritt besteht darin, sicherzustellen, dass unsere Anwendung funktioniert. Probieren Sie es aus! Machen Sie sich keine Sorgen, wenn es Fehler gibt; **alle Entwickler** haben Fehler. Untersuchen Sie die Nachrichten und debuggen Sie bei Bedarf.

Klicken Sie auf **Start** und beginnen Sie zu tippen! Es sollte ein wenig wie die Animation aussehen, die wir zuvor gesehen haben.

![Animation des Spiels in Aktion](../../../../4-typing-game/images/demo.gif)

---

## 🚀 Herausforderung

Fügen Sie weitere Funktionen hinzu:

- Deaktivieren Sie den `input`-Ereignis-Listener bei Abschluss und aktivieren Sie ihn erneut, wenn der Button geklickt wird
- Deaktivieren Sie das Textfeld, wenn der Spieler das Zitat abschließt
- Zeigen Sie ein modales Dialogfeld mit der Erfolgsmeldung an
- Speichere hohe Punktzahlen mit [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)

## Quiz nach der Vorlesung

[Quiz nach der Vorlesung](https://ff-quizzes.netlify.app/web/quiz/22)

## Überprüfung & Selbststudium

Lies über [alle verfügbaren Ereignisse](https://developer.mozilla.org/docs/Web/Events), die Entwicklern über den Webbrowser zur Verfügung stehen, und überlege, in welchen Szenarien du jedes davon verwenden würdest.

## Aufgabe

[Erstelle ein neues Tastaturspiel](assignment.md)

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, beachten Sie bitte, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die sich aus der Nutzung dieser Übersetzung ergeben.