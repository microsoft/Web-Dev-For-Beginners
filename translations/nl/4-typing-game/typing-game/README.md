<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e982871b8388c59c22a41b73b5fca70f",
  "translation_date": "2025-08-27T21:08:53+00:00",
  "source_file": "4-typing-game/typing-game/README.md",
  "language_code": "nl"
}
-->
# Een spel maken met behulp van events

## Quiz voor de les

[Quiz voor de les](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/21)

## Event-driven programmeren

Bij het maken van een browsergebaseerde applicatie bieden we een grafische gebruikersinterface (GUI) aan waarmee de gebruiker kan interageren met wat we hebben gebouwd. De meest gebruikelijke manier om met de browser te interageren is door te klikken en te typen in verschillende elementen. De uitdaging voor ons als ontwikkelaars is dat we niet weten wanneer ze deze acties gaan uitvoeren!

[Event-driven programmeren](https://en.wikipedia.org/wiki/Event-driven_programming) is de naam voor het type programmeren dat we nodig hebben om onze GUI te maken. Als we deze term een beetje ontleden, zien we dat het kernwoord hier **event** is. [Event](https://www.merriam-webster.com/dictionary/event), volgens Merriam-Webster, wordt gedefinieerd als "iets dat gebeurt". Dit beschrijft onze situatie perfect. We weten dat er iets gaat gebeuren waarvoor we code willen uitvoeren als reactie, maar we weten niet wanneer het zal plaatsvinden.

De manier waarop we een stuk code markeren dat we willen uitvoeren, is door een functie te maken. Als we denken aan [procedureel programmeren](https://en.wikipedia.org/wiki/Procedural_programming), worden functies in een specifieke volgorde aangeroepen. Ditzelfde geldt voor event-driven programmeren. Het verschil zit in **hoe** de functies worden aangeroepen.

Om events (knopklikken, typen, enz.) te verwerken, registreren we **event listeners**. Een event listener is een functie die luistert naar een event dat plaatsvindt en code uitvoert als reactie. Event listeners kunnen de UI bijwerken, serveraanroepen doen of wat er verder nodig is als reactie op de actie van de gebruiker. We voegen een event listener toe met behulp van [addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) en geven een functie op om uit te voeren.

> **NOTE:** Het is belangrijk om te benadrukken dat er verschillende manieren zijn om event listeners te maken. Je kunt anonieme functies gebruiken of benoemde functies maken. Je kunt verschillende snelkoppelingen gebruiken, zoals het instellen van de `click`-eigenschap of het gebruik van `addEventListener`. In onze oefening gaan we ons richten op `addEventListener` en anonieme functies, omdat dit waarschijnlijk de meest gebruikelijke techniek is die webontwikkelaars gebruiken. Het is ook de meest flexibele, omdat `addEventListener` werkt voor alle events en de eventnaam als parameter kan worden opgegeven.

### Veelvoorkomende events

Er zijn [tientallen events](https://developer.mozilla.org/docs/Web/Events) beschikbaar om naar te luisteren bij het maken van een applicatie. Eigenlijk roept alles wat een gebruiker op een pagina doet een event op, wat je veel macht geeft om ervoor te zorgen dat ze de ervaring krijgen die je wenst. Gelukkig heb je meestal maar een klein aantal events nodig. Hier zijn een paar veelvoorkomende (inclusief de twee die we gaan gebruiken bij het maken van ons spel):

- [click](https://developer.mozilla.org/docs/Web/API/Element/click_event): De gebruiker heeft ergens op geklikt, meestal een knop of hyperlink
- [contextmenu](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event): De gebruiker heeft met de rechtermuisknop geklikt
- [select](https://developer.mozilla.org/docs/Web/API/Element/select_event): De gebruiker heeft tekst gemarkeerd
- [input](https://developer.mozilla.org/docs/Web/API/Element/input_event): De gebruiker heeft tekst ingevoerd

## Het spel maken

We gaan een spel maken om te ontdekken hoe events werken in JavaScript. Ons spel gaat de typevaardigheid van een speler testen, wat een van de meest onderschatte vaardigheden is die alle ontwikkelaars zouden moeten hebben. We zouden allemaal onze typevaardigheid moeten oefenen! De algemene flow van het spel ziet er als volgt uit:

- De speler klikt op de startknop en krijgt een quote om te typen
- De speler typt de quote zo snel mogelijk in een tekstvak
  - Zodra een woord is voltooid, wordt het volgende woord gemarkeerd
  - Als de speler een typefout maakt, wordt het tekstvak rood
  - Wanneer de speler de quote voltooit, wordt een succesbericht weergegeven met de verstreken tijd

Laten we ons spel bouwen en meer leren over events!

### Bestandsstructuur

We hebben in totaal drie bestanden nodig: **index.html**, **script.js** en **style.css**. Laten we die instellen om het onszelf wat makkelijker te maken.

- Maak een nieuwe map voor je werk door een console- of terminalvenster te openen en het volgende commando uit te voeren:

```bash
# Linux or macOS
mkdir typing-game && cd typing-game

# Windows
md typing-game && cd typing-game
```

- Open Visual Studio Code

```bash
code .
```

- Voeg drie bestanden toe aan de map in Visual Studio Code met de volgende namen:
  - index.html
  - script.js
  - style.css

## Maak de gebruikersinterface

Als we de vereisten bekijken, weten we dat we een aantal elementen nodig hebben op onze HTML-pagina. Dit is een beetje zoals een recept, waarbij we enkele ingrediënten nodig hebben:

- Een plek om de quote weer te geven die de gebruiker moet typen
- Een plek om berichten weer te geven, zoals een succesbericht
- Een tekstvak om te typen
- Een startknop

Elk van deze elementen heeft ID's nodig zodat we ermee kunnen werken in onze JavaScript. We zullen ook verwijzingen toevoegen naar de CSS- en JavaScript-bestanden die we gaan maken.

Maak een nieuw bestand genaamd **index.html**. Voeg de volgende HTML toe:

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

### Start de applicatie

Het is altijd het beste om iteratief te ontwikkelen om te zien hoe dingen eruitzien. Laten we onze applicatie starten. Er is een geweldige extensie voor Visual Studio Code genaamd [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) die zowel je applicatie lokaal host als de browser ververst elke keer dat je opslaat.

- Installeer [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) door de link te volgen en op **Install** te klikken
  - Je wordt door de browser gevraagd om Visual Studio Code te openen, en vervolgens door Visual Studio Code om de installatie uit te voeren
  - Start Visual Studio Code opnieuw op als daarom wordt gevraagd
- Zodra het is geïnstalleerd, klik je in Visual Studio Code op Ctrl-Shift-P (of Cmd-Shift-P) om de commandopalet te openen
- Typ **Live Server: Open with Live Server**
  - Live Server begint je applicatie te hosten
- Open een browser en navigeer naar **https://localhost:5500**
- Je zou nu de pagina moeten zien die je hebt gemaakt!

Laten we wat functionaliteit toevoegen.

## Voeg de CSS toe

Met onze HTML gemaakt, laten we de CSS toevoegen voor de kernstyling. We moeten het woord markeren dat de speler moet typen en het tekstvak kleuren als wat ze hebben getypt onjuist is. We doen dit met twee klassen.

Maak een nieuw bestand genaamd **style.css** en voeg de volgende syntax toe.

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

✅ Als het gaat om CSS kun je je pagina indelen zoals je wilt. Neem even de tijd om de pagina er aantrekkelijker uit te laten zien:

- Kies een ander lettertype
- Geef de koppen een kleur
- Pas de grootte van items aan

## JavaScript

Met onze UI gemaakt, is het tijd om onze aandacht te richten op de JavaScript die de logica zal bieden. We gaan dit opsplitsen in een aantal stappen:

- [Maak de constanten](../../../../4-typing-game/typing-game)
- [Event listener om het spel te starten](../../../../4-typing-game/typing-game)
- [Event listener voor het typen](../../../../4-typing-game/typing-game)

Maar eerst, maak een nieuw bestand genaamd **script.js**.

### Maak de constanten

We hebben een paar items nodig om ons leven wat makkelijker te maken bij het programmeren. Opnieuw, vergelijkbaar met een recept, hier is wat we nodig hebben:

- Een array met de lijst van alle quotes
- Een lege array om alle woorden van de huidige quote op te slaan
- Een plek om de index van het woord dat de speler momenteel typt op te slaan
- De tijd waarop de speler op start heeft geklikt

We willen ook verwijzingen naar de UI-elementen:

- Het tekstvak (**typed-value**)
- De quote-weergave (**quote**)
- Het bericht (**message**)

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

✅ Voeg meer quotes toe aan je spel

> **NOTE:** We kunnen de elementen altijd ophalen in de code door `document.getElementById` te gebruiken. Omdat we regelmatig naar deze elementen gaan verwijzen, vermijden we typefouten met string literals door constanten te gebruiken. Frameworks zoals [Vue.js](https://vuejs.org/) of [React](https://reactjs.org/) kunnen je helpen bij het beter beheren van het centraliseren van je code.

Neem een minuut om een video te bekijken over het gebruik van `const`, `let` en `var`

[![Soorten variabelen](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Soorten variabelen")

> 🎥 Klik op de afbeelding hierboven voor een video over variabelen.

### Voeg startlogica toe

Om het spel te beginnen, klikt de speler op start. Natuurlijk weten we niet wanneer ze op start gaan klikken. Dit is waar een [event listener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) van pas komt. Een event listener stelt ons in staat om te luisteren naar iets dat gebeurt (een event) en code uit te voeren als reactie. In ons geval willen we code uitvoeren wanneer de gebruiker op start klikt.

Wanneer de gebruiker op **start** klikt, moeten we een quote selecteren, de gebruikersinterface instellen en tracking instellen voor het huidige woord en de timing. Hieronder staat de JavaScript die je moet toevoegen; we bespreken het direct na het scriptblok.

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

Laten we de code opsplitsen!

- Stel de woordtracking in
  - Door [Math.floor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) en [Math.random](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random) te gebruiken, kunnen we willekeurig een quote selecteren uit de `quotes`-array
  - We converteren de `quote` naar een array van `words` zodat we het woord kunnen volgen dat de speler momenteel typt
  - `wordIndex` wordt ingesteld op 0, omdat de speler begint met het eerste woord
- Stel de UI in
  - Maak een array van `spanWords`, die elk woord bevat binnen een `span`-element
    - Dit stelt ons in staat om het woord op de weergave te markeren
  - `join` de array om een string te maken die we kunnen gebruiken om de `innerHTML` op `quoteElement` bij te werken
    - Dit toont de quote aan de speler
  - Stel de `className` van het eerste `span`-element in op `highlight` om het geel te markeren
  - Maak het `messageElement` schoon door `innerText` in te stellen op `''`
- Stel het tekstvak in
  - Wis de huidige `value` op `typedValueElement`
  - Stel de `focus` in op `typedValueElement`
- Start de timer door `getTime` aan te roepen

### Voeg typelogica toe

Terwijl de speler typt, wordt een `input`-event opgewekt. Deze event listener controleert of de speler het woord correct typt en behandelt de huidige status van het spel. Ga terug naar **script.js** en voeg de volgende code toe aan het einde. We zullen het daarna opsplitsen.

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

Laten we de code opsplitsen! We beginnen met het ophalen van het huidige woord en de waarde die de speler tot nu toe heeft getypt. Vervolgens hebben we waterval-logica, waarbij we controleren of de quote compleet is, het woord compleet is, het woord correct is, of (ten slotte) of er een fout is.

- De quote is compleet, aangegeven door `typedValue` gelijk aan `currentWord` en `wordIndex` gelijk aan één minder dan de `length` van `words`
  - Bereken `elapsedTime` door `startTime` af te trekken van de huidige tijd
  - Deel `elapsedTime` door 1.000 om van milliseconden naar seconden te converteren
  - Toon een succesbericht
- Het woord is compleet, aangegeven door `typedValue` eindigend met een spatie (het einde van een woord) en `typedValue` gelijk aan `currentWord`
  - Stel `value` op `typedElement` in op `''` om het volgende woord te kunnen typen
  - Verhoog `wordIndex` om naar het volgende woord te gaan
  - Loop door alle `childNodes` van `quoteElement` om `className` in te stellen op `''` om terug te keren naar de standaardweergave
  - Stel `className` van het huidige woord in op `highlight` om het te markeren als het volgende woord om te typen
- Het woord is momenteel correct getypt (maar niet compleet), aangegeven door `currentWord` beginnend met `typedValue`
  - Zorg ervoor dat `typedValueElement` wordt weergegeven als standaard door `className` te wissen
- Als we zover zijn gekomen, is er een fout
  - Stel `className` op `typedValueElement` in op `error`

## Test je applicatie

Je bent aan het einde gekomen! De laatste stap is om ervoor te zorgen dat onze applicatie werkt. Probeer het uit! Maak je geen zorgen als er fouten zijn; **alle ontwikkelaars** hebben fouten. Onderzoek de berichten en debug indien nodig.

Klik op **start** en begin te typen! Het zou een beetje moeten lijken op de animatie die we eerder zagen.

![Animatie van het spel in actie](../../../../4-typing-game/images/demo.gif)

---

## 🚀 Uitdaging

Voeg meer functionaliteit toe

- Schakel de `input`-event listener uit bij voltooiing en schakel deze opnieuw in wanneer op de knop wordt geklikt
- Schakel het tekstvak uit wanneer de speler de quote voltooit
- Toon een modaal dialoogvenster met het succesbericht
- Sla hoge scores op met behulp van [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)

## Quiz na de les

[Quiz na de les](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/22)

## Herhaling & Zelfstudie

Lees meer over [alle beschikbare events](https://developer.mozilla.org/docs/Web/Events) voor de ontwikkelaar via de webbrowser, en denk na over de scenario's waarin je elk event zou gebruiken.

## Opdracht

[Maak een nieuw toetsenbordspel](assignment.md)

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we ons best doen voor nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor cruciale informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.