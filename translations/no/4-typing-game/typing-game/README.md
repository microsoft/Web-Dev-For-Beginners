<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e982871b8388c59c22a41b73b5fca70f",
  "translation_date": "2025-08-26T23:18:23+00:00",
  "source_file": "4-typing-game/typing-game/README.md",
  "language_code": "no"
}
-->
# Lage et spill ved hjelp av hendelser

## Quiz før forelesning

[Quiz før forelesning](https://ff-quizzes.netlify.app/web/quiz/21)

## Hendelsesdrevet programmering

Når vi lager en nettleserbasert applikasjon, gir vi brukeren en grafisk brukergrensesnitt (GUI) som de kan bruke for å samhandle med det vi har bygget. Den vanligste måten å samhandle med nettleseren på er gjennom å klikke og skrive i ulike elementer. Utfordringen vi står overfor som utviklere er at vi ikke vet når de kommer til å utføre disse handlingene!

[Hendelsesdrevet programmering](https://en.wikipedia.org/wiki/Event-driven_programming) er navnet på den typen programmering vi må bruke for å lage vårt GUI. Hvis vi bryter ned dette uttrykket litt, ser vi at kjernen her er **hendelse**. [Hendelse](https://www.merriam-webster.com/dictionary/event), ifølge Merriam-Webster, er definert som "noe som skjer". Dette beskriver situasjonen vår perfekt. Vi vet at noe kommer til å skje som vi ønsker å utføre kode som svar på, men vi vet ikke når det vil skje.

Måten vi markerer en del av koden vi ønsker å utføre på, er ved å lage en funksjon. Når vi tenker på [prosedyreorientert programmering](https://en.wikipedia.org/wiki/Procedural_programming), kalles funksjoner i en spesifikk rekkefølge. Det samme gjelder for hendelsesdrevet programmering. Forskjellen er **hvordan** funksjonene kalles.

For å håndtere hendelser (knappeklikk, skriving osv.), registrerer vi **hendelseslyttere**. En hendelseslytter er en funksjon som lytter etter at en hendelse oppstår og utfører noe som svar. Hendelseslyttere kan oppdatere brukergrensesnittet, gjøre kall til serveren, eller hva som helst annet som må gjøres som svar på brukerens handling. Vi legger til en hendelseslytter ved å bruke [addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) og gi en funksjon som skal utføres.

> **NOTE:** Det er verdt å merke seg at det finnes mange måter å lage hendelseslyttere på. Du kan bruke anonyme funksjoner eller lage navngitte. Du kan bruke ulike snarveier, som å sette `click`-egenskapen, eller bruke `addEventListener`. I vår øvelse skal vi fokusere på `addEventListener` og anonyme funksjoner, da dette sannsynligvis er den mest brukte teknikken blant webutviklere. Det er også den mest fleksible, siden `addEventListener` fungerer for alle hendelser, og hendelsesnavnet kan gis som en parameter.

### Vanlige hendelser

Det finnes [dusiner av hendelser](https://developer.mozilla.org/docs/Web/Events) du kan lytte til når du lager en applikasjon. I utgangspunktet utløser alt en bruker gjør på en side en hendelse, noe som gir deg mye makt til å sikre at de får den opplevelsen du ønsker. Heldigvis trenger du vanligvis bare et lite utvalg av hendelser. Her er noen vanlige (inkludert de to vi skal bruke når vi lager spillet vårt):

- [click](https://developer.mozilla.org/docs/Web/API/Element/click_event): Brukeren klikket på noe, vanligvis en knapp eller hyperkobling
- [contextmenu](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event): Brukeren klikket med høyre museknapp
- [select](https://developer.mozilla.org/docs/Web/API/Element/select_event): Brukeren markerte noe tekst
- [input](https://developer.mozilla.org/docs/Web/API/Element/input_event): Brukeren skrev inn noe tekst

## Lage spillet

Vi skal lage et spill for å utforske hvordan hendelser fungerer i JavaScript. Spillet vårt skal teste spillerens skriveferdigheter, som er en av de mest undervurderte ferdighetene alle utviklere bør ha. Vi bør alle øve på skrivingen vår! Den generelle flyten i spillet vil se slik ut:

- Spilleren klikker på startknappen og får presentert et sitat å skrive
- Spilleren skriver sitatet så raskt som mulig i en tekstboks
  - Når hvert ord er fullført, blir det neste uthevet
  - Hvis spilleren gjør en skrivefeil, blir tekstboksen rød
  - Når spilleren fullfører sitatet, vises en suksessmelding med den brukte tiden

La oss bygge spillet vårt og lære om hendelser!

### Filstruktur

Vi trenger totalt tre filer: **index.html**, **script.js** og **style.css**. La oss starte med å sette opp disse for å gjøre livet litt enklere for oss.

- Opprett en ny mappe for arbeidet ditt ved å åpne en konsoll eller terminal og skrive følgende kommando:

```bash
# Linux or macOS
mkdir typing-game && cd typing-game

# Windows
md typing-game && cd typing-game
```

- Åpne Visual Studio Code

```bash
code .
```

- Legg til tre filer i mappen i Visual Studio Code med følgende navn:
  - index.html
  - script.js
  - style.css

## Lag brukergrensesnittet

Hvis vi ser på kravene, vet vi at vi trenger noen få elementer på HTML-siden vår. Dette er litt som en oppskrift, der vi trenger noen ingredienser:

- Et sted å vise sitatet som brukeren skal skrive
- Et sted å vise meldinger, som en suksessmelding
- En tekstboks for skriving
- En startknapp

Hvert av disse trenger ID-er slik at vi kan jobbe med dem i JavaScript. Vi vil også legge til referanser til CSS- og JavaScript-filene vi skal lage.

Opprett en ny fil med navnet **index.html**. Legg til følgende HTML:

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

### Start applikasjonen

Det er alltid best å utvikle iterativt for å se hvordan ting ser ut. La oss starte applikasjonen vår. Det finnes en flott utvidelse for Visual Studio Code kalt [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) som både vil hoste applikasjonen din lokalt og oppdatere nettleseren hver gang du lagrer.

- Installer [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) ved å følge lenken og klikke **Install**
  - Du vil bli bedt av nettleseren om å åpne Visual Studio Code, og deretter av Visual Studio Code om å utføre installasjonen
  - Start Visual Studio Code på nytt hvis du blir bedt om det
- Når den er installert, klikk Ctrl-Shift-P (eller Cmd-Shift-P) i Visual Studio Code for å åpne kommandopaletten
- Skriv **Live Server: Open with Live Server**
  - Live Server vil starte hosting av applikasjonen din
- Åpne en nettleser og naviger til **https://localhost:5500**
- Du skal nå se siden du opprettet!

La oss legge til litt funksjonalitet.

## Legg til CSS

Med HTML-en vår opprettet, la oss legge til CSS for grunnleggende styling. Vi trenger å utheve ordet spilleren skal skrive, og fargelegge tekstboksen hvis det de har skrevet er feil. Vi gjør dette med to klasser.

Opprett en ny fil med navnet **style.css** og legg til følgende syntaks.

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

✅ Når det gjelder CSS, kan du designe siden din slik du ønsker. Bruk litt tid på å gjøre siden mer tiltalende:

- Velg en annen font
- Fargelegg overskriftene
- Endre størrelsen på elementene

## JavaScript

Med brukergrensesnittet vårt opprettet, er det på tide å fokusere på JavaScript som skal gi logikken. Vi skal dele dette opp i noen få trinn:

- [Opprett konstantene](../../../../4-typing-game/typing-game)
- [Hendelseslytter for å starte spillet](../../../../4-typing-game/typing-game)
- [Hendelseslytter for skriving](../../../../4-typing-game/typing-game)

Men først, opprett en ny fil med navnet **script.js**.

### Opprett konstantene

Vi trenger noen få elementer for å gjøre programmeringen enklere. Igjen, som en oppskrift, her er hva vi trenger:

- En array med listen over alle sitater
- En tom array for å lagre alle ordene i det nåværende sitatet
- Et sted for å lagre indeksen til ordet spilleren skriver for øyeblikket
- Tiden spilleren klikket på start

Vi trenger også referanser til brukergrensesnittelementene:

- Tekstboksen (**typed-value**)
- Sitatvisningen (**quote**)
- Meldingen (**message**)

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

✅ Legg gjerne til flere sitater i spillet ditt

> **NOTE:** Vi kan hente elementene når som helst i koden ved å bruke `document.getElementById`. Fordi vi kommer til å referere til disse elementene regelmessig, unngår vi skrivefeil med strenglitteraler ved å bruke konstanter. Rammeverk som [Vue.js](https://vuejs.org/) eller [React](https://reactjs.org/) kan hjelpe deg med å sentralisere koden din bedre.

Ta et øyeblikk til å se en video om bruk av `const`, `let` og `var`.

[![Typer av variabler](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Typer av variabler")

> 🎥 Klikk på bildet over for en video om variabler.

### Legg til startlogikk

For å starte spillet, vil spilleren klikke på start. Selvfølgelig vet vi ikke når de kommer til å klikke på start. Dette er hvor en [hendelseslytter](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) kommer inn i bildet. En hendelseslytter lar oss lytte etter at noe skjer (en hendelse) og utføre kode som svar. I vårt tilfelle ønsker vi å utføre kode når brukeren klikker på start.

Når brukeren klikker på **start**, må vi velge et sitat, sette opp brukergrensesnittet og sette opp sporing for det nåværende ordet og tiden. Nedenfor er JavaScript-koden du trenger å legge til; vi diskuterer den rett etter kodeblokken.

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

La oss bryte ned koden!

- Sett opp ordsporing
  - Ved å bruke [Math.floor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) og [Math.random](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random) kan vi tilfeldig velge et sitat fra `quotes`-arrayen
  - Vi konverterer `quote` til en array av `words` slik at vi kan spore ordet spilleren skriver for øyeblikket
  - `wordIndex` settes til 0, siden spilleren starter på det første ordet
- Sett opp brukergrensesnittet
  - Opprett en array av `spanWords`, som inneholder hvert ord inne i et `span`-element
    - Dette lar oss utheve ordet på skjermen
  - `join` arrayen for å lage en streng som vi kan bruke til å oppdatere `innerHTML` på `quoteElement`
    - Dette vil vise sitatet til spilleren
  - Sett `className` til det første `span`-elementet til `highlight` for å utheve det som gult
  - Rens `messageElement` ved å sette `innerText` til `''`
- Sett opp tekstboksen
  - Tøm den nåværende `value` på `typedValueElement`
  - Sett `focus` til `typedValueElement`
- Start timeren ved å kalle `getTime`

### Legg til skrive-logikk

Når spilleren skriver, vil en `input`-hendelse utløses. Denne hendelseslytteren vil sjekke at spilleren skriver ordet riktig og håndtere spillets nåværende status. Gå tilbake til **script.js** og legg til følgende kode på slutten. Vi vil bryte den ned etterpå.

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

La oss bryte ned koden! Vi starter med å hente det nåværende ordet og verdien spilleren har skrevet så langt. Deretter har vi en "vannfallslogikk", hvor vi sjekker om sitatet er fullført, ordet er fullført, ordet er riktig, eller (til slutt) om det er en feil.

- Sitatet er fullført, indikert ved at `typedValue` er lik `currentWord`, og `wordIndex` er lik én mindre enn `length` av `words`
  - Beregn `elapsedTime` ved å trekke `startTime` fra nåværende tid
  - Del `elapsedTime` på 1 000 for å konvertere fra millisekunder til sekunder
  - Vis en suksessmelding
- Ordet er fullført, indikert ved at `typedValue` slutter med et mellomrom (slutten av et ord) og `typedValue` er lik `currentWord`
  - Sett `value` på `typedElement` til `''` for å tillate at neste ord kan skrives
  - Øk `wordIndex` for å gå til neste ord
  - Gå gjennom alle `childNodes` av `quoteElement` for å sette `className` til `''` for å tilbakestille til standardvisning
  - Sett `className` til det nåværende ordet til `highlight` for å markere det som neste ord som skal skrives
- Ordet er riktig skrevet (men ikke fullført), indikert ved at `currentWord` starter med `typedValue`
  - Sørg for at `typedValueElement` vises som standard ved å tømme `className`
- Hvis vi har kommet så langt, har vi en feil
  - Sett `className` på `typedValueElement` til `error`

## Test applikasjonen din

Du har kommet til slutten! Det siste trinnet er å sørge for at applikasjonen vår fungerer. Prøv det! Ikke bekymre deg hvis det er feil; **alle utviklere** opplever feil. Undersøk meldingene og feilsøk etter behov.

Klikk på **start**, og begynn å skrive! Det skal se litt ut som animasjonen vi så tidligere.

![Animasjon av spillet i aksjon](../../../../4-typing-game/images/demo.gif)

---

## 🚀 Utfordring

Legg til mer funksjonalitet

- Deaktiver `input`-hendelseslytteren når spillet er fullført, og aktiver den igjen når knappen klikkes
- Deaktiver tekstboksen når spilleren fullfører sitatet
- Vis en modal dialogboks med suksessmeldingen
- Lagre høye poengsummer ved å bruke [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)

## Quiz etter forelesning

[Quiz etter forelesning](https://ff-quizzes.netlify.app/web/quiz/22)

## Gjennomgang og selvstudium

Les om [alle tilgjengelige hendelser](https://developer.mozilla.org/docs/Web/Events) for utviklere via nettleseren, og vurder scenariene der du ville brukt hver av dem.

## Oppgave

[Lag et nytt tastaturspill](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.