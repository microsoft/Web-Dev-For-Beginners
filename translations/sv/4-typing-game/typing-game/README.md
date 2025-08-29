<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "1b0aeccb600f83c603cd70cb42df594d",
  "translation_date": "2025-08-29T08:00:54+00:00",
  "source_file": "4-typing-game/typing-game/README.md",
  "language_code": "sv"
}
-->
# Skapa ett spel med hjälp av händelser

## Quiz före föreläsningen

[Quiz före föreläsningen](https://ff-quizzes.netlify.app/web/quiz/21)

## Händelsestyrd programmering

När vi skapar en webbläsarbaserad applikation tillhandahåller vi ett grafiskt användargränssnitt (GUI) för användaren att använda när de interagerar med det vi har byggt. Det vanligaste sättet att interagera med webbläsaren är genom att klicka och skriva i olika element. Utmaningen vi står inför som utvecklare är att vi inte vet när de kommer att utföra dessa operationer!

[Händelsestyrd programmering](https://en.wikipedia.org/wiki/Event-driven_programming) är namnet på den typ av programmering vi behöver göra för att skapa vårt GUI. Om vi bryter ner detta uttryck lite ser vi att kärnordet här är **händelse**. [Händelse](https://www.merriam-webster.com/dictionary/event), enligt Merriam-Webster, definieras som "något som händer". Detta beskriver vår situation perfekt. Vi vet att något kommer att hända som vi vill köra kod som svar på, men vi vet inte när det kommer att ske.

Sättet vi markerar en kodsektion vi vill köra är genom att skapa en funktion. När vi tänker på [procedurprogrammering](https://en.wikipedia.org/wiki/Procedural_programming) anropas funktioner i en specifik ordning. Samma sak gäller för händelsestyrd programmering. Skillnaden är **hur** funktionerna kommer att anropas.

För att hantera händelser (knapptryckningar, skrivande, etc.) registrerar vi **händelselyssnare**. En händelselyssnare är en funktion som lyssnar efter att en händelse inträffar och körs som svar. Händelselyssnare kan uppdatera användargränssnittet, göra anrop till servern eller vad som helst som behöver göras som svar på användarens handling. Vi lägger till en händelselyssnare genom att använda [addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) och tillhandahålla en funktion att köra.

> **NOTE:** Det är värt att påpeka att det finns många sätt att skapa händelselyssnare. Du kan använda anonyma funktioner eller skapa namngivna. Du kan använda olika genvägar, som att ställa in egenskapen `click` eller använda `addEventListener`. I vår övning kommer vi att fokusera på `addEventListener` och anonyma funktioner, eftersom det förmodligen är den vanligaste tekniken som webbutvecklare använder. Det är också det mest flexibla, eftersom `addEventListener` fungerar för alla händelser och händelsenamnet kan tillhandahållas som en parameter.

### Vanliga händelser

Det finns [dussintals händelser](https://developer.mozilla.org/docs/Web/Events) tillgängliga för dig att lyssna på när du skapar en applikation. I princip allt en användare gör på en sida genererar en händelse, vilket ger dig mycket kraft att säkerställa att de får den upplevelse du önskar. Lyckligtvis behöver du normalt bara ett fåtal händelser. Här är några vanliga (inklusive de två vi kommer att använda när vi skapar vårt spel):

- [click](https://developer.mozilla.org/docs/Web/API/Element/click_event): Användaren klickade på något, vanligtvis en knapp eller hyperlänk
- [contextmenu](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event): Användaren klickade med höger musknapp
- [select](https://developer.mozilla.org/docs/Web/API/Element/select_event): Användaren markerade text
- [input](https://developer.mozilla.org/docs/Web/API/Element/input_event): Användaren skrev in text

## Skapa spelet

Vi ska skapa ett spel för att utforska hur händelser fungerar i JavaScript. Vårt spel kommer att testa spelarens skrivförmåga, vilket är en av de mest underskattade färdigheterna som alla utvecklare borde ha. Vi borde alla öva på att skriva! Den generella flödet för spelet kommer att se ut så här:

- Spelaren klickar på startknappen och får en text att skriva
- Spelaren skriver texten så snabbt som möjligt i en textruta
  - När varje ord är klart markeras nästa
  - Om spelaren gör ett skrivfel blir textrutan röd
  - När spelaren har skrivit klart texten visas ett framgångsmeddelande med den förflutna tiden

Låt oss bygga vårt spel och lära oss om händelser!

### Filstruktur

Vi kommer att behöva totalt tre filer: **index.html**, **script.js** och **style.css**. Låt oss börja med att ställa in dem för att göra livet lite enklare för oss.

- Skapa en ny mapp för ditt arbete genom att öppna en konsol eller terminal och köra följande kommando:

```bash
# Linux or macOS
mkdir typing-game && cd typing-game

# Windows
md typing-game && cd typing-game
```

- Öppna Visual Studio Code

```bash
code .
```

- Lägg till tre filer i mappen i Visual Studio Code med följande namn:
  - index.html
  - script.js
  - style.css

## Skapa användargränssnittet

Om vi tittar på kraven vet vi att vi kommer att behöva några element på vår HTML-sida. Det här är lite som ett recept, där vi behöver några ingredienser:

- Något för att visa texten som användaren ska skriva
- Något för att visa meddelanden, som ett framgångsmeddelande
- En textruta för att skriva
- En startknapp

Varje av dessa kommer att behöva ID:n så att vi kan arbeta med dem i vår JavaScript. Vi kommer också att lägga till referenser till CSS- och JavaScript-filerna vi ska skapa.

Skapa en ny fil med namnet **index.html**. Lägg till följande HTML:

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

### Starta applikationen

Det är alltid bäst att utveckla iterativt för att se hur saker ser ut. Låt oss starta vår applikation. Det finns en fantastisk extension för Visual Studio Code som heter [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) som både hostar din applikation lokalt och uppdaterar webbläsaren varje gång du sparar.

- Installera [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) genom att följa länken och klicka på **Install**
  - Du kommer att bli ombedd av webbläsaren att öppna Visual Studio Code och sedan av Visual Studio Code att utföra installationen
  - Starta om Visual Studio Code om du blir ombedd
- När det är installerat, i Visual Studio Code, klicka på Ctrl-Shift-P (eller Cmd-Shift-P) för att öppna kommandopaletten
- Skriv **Live Server: Open with Live Server**
  - Live Server kommer att börja hosta din applikation
- Öppna en webbläsare och navigera till **https://localhost:5500**
- Du bör nu se sidan du skapade!

Låt oss lägga till lite funktionalitet.

## Lägg till CSS

Med vår HTML skapad, låt oss lägga till CSS för grundläggande styling. Vi behöver markera ordet som spelaren ska skriva och färga textrutan om det de har skrivit är felaktigt. Vi gör detta med två klasser.

Skapa en ny fil med namnet **style.css** och lägg till följande syntax.

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

✅ När det gäller CSS kan du layouta din sida hur du vill. Ta lite tid och gör sidan mer tilltalande:

- Välj ett annat typsnitt
- Färglägg rubrikerna
- Ändra storlek på element

## JavaScript

Med vårt användargränssnitt skapat är det dags att fokusera på JavaScript som kommer att tillhandahålla logiken. Vi kommer att dela upp detta i några steg:

- [Skapa konstanterna](../../../../4-typing-game/typing-game)
- [Händelselyssnare för att starta spelet](../../../../4-typing-game/typing-game)
- [Händelselyssnare för skrivande](../../../../4-typing-game/typing-game)

Men först, skapa en ny fil med namnet **script.js**.

### Lägg till konstanterna

Vi kommer att behöva några saker för att göra vårt programmeringsliv lite enklare. Återigen, likt ett recept, här är vad vi behöver:

- En array med alla citat
- En tom array för att lagra alla ord för det aktuella citatet
- En plats för att lagra indexet för ordet som spelaren för närvarande skriver
- Tiden då spelaren klickade på start

Vi kommer också att vilja ha referenser till användargränssnittselementen:

- Textrutan (**typed-value**)
- Textvisningen (**quote**)
- Meddelandet (**message**)

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

✅ Lägg gärna till fler citat i ditt spel

> **NOTE:** Vi kan hämta elementen när vi vill i koden genom att använda `document.getElementById`. Eftersom vi kommer att referera till dessa element regelbundet undviker vi skrivfel med stränglitteraler genom att använda konstanter. Ramverk som [Vue.js](https://vuejs.org/) eller [React](https://reactjs.org/) kan hjälpa dig att bättre hantera centralisering av din kod.

Ta en minut och titta på en video om att använda `const`, `let` och `var`

[![Typer av variabler](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Typer av variabler")

> 🎥 Klicka på bilden ovan för en video om variabler.

### Lägg till startlogik

För att börja spelet kommer spelaren att klicka på start. Självklart vet vi inte när de kommer att klicka på start. Här kommer en [händelselyssnare](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) in i bilden. En händelselyssnare låter oss lyssna efter att något inträffar (en händelse) och köra kod som svar. I vårt fall vill vi köra kod när användaren klickar på start.

När användaren klickar på **start** behöver vi välja ett citat, ställa in användargränssnittet och ställa in spårning för det aktuella ordet och tidtagningen. Nedan är JavaScript du behöver lägga till; vi diskuterar det strax efter kodblocket.

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

Låt oss bryta ner koden!

- Ställ in ordspårning
  - Genom att använda [Math.floor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) och [Math.random](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random) kan vi slumpmässigt välja ett citat från `quotes`-arrayen
  - Vi konverterar `quote` till en array av `words` så vi kan spåra ordet som spelaren för närvarande skriver
  - `wordIndex` sätts till 0, eftersom spelaren börjar med det första ordet
- Ställ in användargränssnittet
  - Skapa en array av `spanWords`, som innehåller varje ord inuti ett `span`-element
    - Detta gör att vi kan markera ordet på displayen
  - `join` arrayen för att skapa en sträng som vi kan använda för att uppdatera `innerHTML` på `quoteElement`
    - Detta kommer att visa citatet för spelaren
  - Ställ in `className` för det första `span`-elementet till `highlight` för att markera det som gult
  - Rensa `messageElement` genom att ställa in `innerText` till `''`
- Ställ in textrutan
  - Rensa det aktuella `value` på `typedValueElement`
  - Ställ in `focus` till `typedValueElement`
- Starta timern genom att kalla `getTime`

### Lägg till skrivlogik

När spelaren skriver kommer en `input`-händelse att genereras. Denna händelselyssnare kommer att kontrollera att spelaren skriver ordet korrekt och hantera spelets aktuella status. Återgå till **script.js** och lägg till följande kod i slutet. Vi kommer att bryta ner det efteråt.

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

Låt oss bryta ner koden! Vi börjar med att hämta det aktuella ordet och värdet som spelaren har skrivit hittills. Sedan har vi en logik där vi kontrollerar om citatet är klart, ordet är klart, ordet är korrekt eller (slutligen) om det finns ett fel.

- Citatet är klart, vilket indikeras av att `typedValue` är lika med `currentWord` och `wordIndex` är lika med ett mindre än `length` av `words`
  - Beräkna `elapsedTime` genom att subtrahera `startTime` från den aktuella tiden
  - Dividera `elapsedTime` med 1 000 för att konvertera från millisekunder till sekunder
  - Visa ett framgångsmeddelande
- Ordet är klart, vilket indikeras av att `typedValue` slutar med ett mellanslag (slutet på ett ord) och `typedValue` är lika med `currentWord`
  - Ställ in `value` på `typedElement` till `''` för att tillåta att nästa ord skrivs
  - Öka `wordIndex` för att gå vidare till nästa ord
  - Loop genom alla `childNodes` av `quoteElement` för att ställa in `className` till `''` för att återgå till standardvisning
  - Ställ in `className` för det aktuella ordet till `highlight` för att markera det som nästa ord att skriva
- Ordet är för närvarande korrekt skrivet (men inte klart), vilket indikeras av att `currentWord` börjar med `typedValue`
  - Säkerställ att `typedValueElement` visas som standard genom att rensa `className`
- Om vi har kommit så långt har vi ett fel
  - Ställ in `className` på `typedValueElement` till `error`

## Testa din applikation

Du har kommit till slutet! Det sista steget är att säkerställa att vår applikation fungerar. Testa den! Oroa dig inte om det finns fel; **alla utvecklare** har fel. Undersök meddelandena och felsök vid behov.

Klicka på **start** och börja skriva! Det bör se ut ungefär som animationen vi såg tidigare.

![Animation av spelet i action](../../../../4-typing-game/images/demo.gif)

---

## 🚀 Utmaning

Lägg till mer funktionalitet

- Inaktivera `input`-händelselyssnaren vid avslut och aktivera den igen när knappen klickas
- Inaktivera textrutan när spelaren har skrivit klart citatet
- Visa en modaldialogruta med framgångsmeddelandet
- Spara höga poäng med hjälp av [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)
## Efterföreläsningsquiz

[Efterföreläsningsquiz](https://ff-quizzes.netlify.app/web/quiz/22)

## Repetition & Självstudier

Läs om [alla tillgängliga händelser](https://developer.mozilla.org/docs/Web/Events) som utvecklare kan använda via webbläsaren, och fundera på scenarier där du skulle använda var och en.

## Uppgift

[Skapa ett nytt tangentbordsspel](assignment.md)

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, vänligen notera att automatiska översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess originalspråk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.