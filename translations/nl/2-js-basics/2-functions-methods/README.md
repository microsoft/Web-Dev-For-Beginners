<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b4612bbb9ace984f374fcc80e3e035ad",
  "translation_date": "2025-08-27T20:14:46+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "nl"
}
-->
# JavaScript Basis: Methoden en Functies

![JavaScript Basis - Functies](../../../../translated_images/webdev101-js-functions.be049c4726e94f8b7605c36330ac42eeb5cd8ed02bcdd60fdac778174d6cb865.nl.png)
> Sketchnote door [Tomomi Imura](https://twitter.com/girlie_mac)

## Pre-Les Quiz
[Pre-les quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/9)

Wanneer we nadenken over het schrijven van code, willen we altijd zorgen dat onze code leesbaar is. Hoewel dit misschien tegenstrijdig klinkt, wordt code veel vaker gelezen dan geschreven. Een belangrijk hulpmiddel in de gereedschapskist van een ontwikkelaar om onderhoudbare code te garanderen, is de **functie**.

[![Methoden en Functies](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Methoden en Functies")

> 🎥 Klik op de afbeelding hierboven voor een video over methoden en functies.

> Je kunt deze les volgen op [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon)!

## Functies

In essentie is een functie een blok code dat we op verzoek kunnen uitvoeren. Dit is ideaal voor situaties waarin we dezelfde taak meerdere keren moeten uitvoeren; in plaats van de logica op meerdere locaties te dupliceren (wat het moeilijk zou maken om bij te werken wanneer dat nodig is), kunnen we het centraliseren op één plek en het oproepen wanneer we de operatie willen uitvoeren - je kunt zelfs functies oproepen vanuit andere functies!

Net zo belangrijk is het vermogen om een functie een naam te geven. Hoewel dit misschien triviaal lijkt, biedt de naam een snelle manier om een sectie code te documenteren. Je kunt dit zien als een label op een knop. Als ik op een knop klik met de tekst "Timer annuleren", weet ik dat het de klok stopt.

## Een functie maken en oproepen

De syntaxis voor een functie ziet er als volgt uit:

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

Als ik een functie wilde maken om een begroeting weer te geven, zou dat er zo uitzien:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

Wanneer we onze functie willen oproepen (of aanroepen), gebruiken we de naam van de functie gevolgd door `()`. Het is belangrijk op te merken dat onze functie kan worden gedefinieerd vóór of nadat we besluiten deze op te roepen; de JavaScript-compiler zal deze voor je vinden.

```javascript
// calling our function
displayGreeting();
```

> **NOTE:** Er is een speciaal type functie dat bekend staat als een **methode**, die je al hebt gebruikt! In feite zagen we dit in onze demo hierboven toen we `console.log` gebruikten. Wat een methode anders maakt dan een functie, is dat een methode aan een object is gekoppeld (`console` in ons voorbeeld), terwijl een functie vrij zwevend is. Je zult veel ontwikkelaars deze termen door elkaar horen gebruiken.

### Beste praktijken voor functies

Er zijn een aantal beste praktijken om in gedachten te houden bij het maken van functies:

- Gebruik altijd beschrijvende namen zodat je weet wat de functie zal doen
- Gebruik **camelCasing** om woorden te combineren
- Houd je functies gericht op een specifieke taak

## Informatie doorgeven aan een functie

Om een functie meer herbruikbaar te maken, wil je vaak informatie doorgeven. Als we ons `displayGreeting`-voorbeeld hierboven bekijken, zal het alleen **Hello, world!** weergeven. Niet de meest nuttige functie die je kunt maken. Als we het iets flexibeler willen maken, zoals iemand de naam van de persoon laten specificeren die begroet moet worden, kunnen we een **parameter** toevoegen. Een parameter (ook soms een **argument** genoemd) is aanvullende informatie die naar een functie wordt gestuurd.

Parameters worden vermeld in het definitiegedeelte tussen haakjes en worden door komma's gescheiden, zoals:

```javascript
function name(param, param2, param3) {

}
```

We kunnen onze `displayGreeting` bijwerken om een naam te accepteren en die weer te geven.

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

Wanneer we onze functie willen oproepen en de parameter willen doorgeven, specificeren we deze tussen de haakjes.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

## Standaardwaarden

We kunnen onze functie nog flexibeler maken door meer parameters toe te voegen. Maar wat als we niet willen dat elke waarde verplicht wordt opgegeven? Blijvend bij ons begroetingsvoorbeeld, zouden we de naam verplicht kunnen laten (we moeten weten wie we begroeten), maar willen we de begroeting zelf naar wens laten aanpassen. Als iemand het niet wil aanpassen, bieden we een standaardwaarde aan. Om een standaardwaarde aan een parameter toe te voegen, stellen we deze in op dezelfde manier als we een waarde voor een variabele instellen - `parameterName = 'defaultValue'`. Een volledig voorbeeld:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

Wanneer we de functie oproepen, kunnen we dan beslissen of we een waarde willen instellen voor `salutation`.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

## Returnwaarden

Tot nu toe zal de functie die we hebben gebouwd altijd output geven naar de [console](https://developer.mozilla.org/docs/Web/API/console). Soms kan dit precies zijn wat we zoeken, vooral wanneer we functies maken die andere services zullen aanroepen. Maar wat als ik een hulpfunctie wil maken om een berekening uit te voeren en de waarde terug te geven zodat ik deze elders kan gebruiken?

We kunnen dit doen door een **returnwaarde** te gebruiken. Een returnwaarde wordt door de functie teruggegeven en kan in een variabele worden opgeslagen, net zoals we een letterlijke waarde zoals een string of getal zouden opslaan.

Als een functie iets teruggeeft, wordt het sleutelwoord `return` gebruikt. Het sleutelwoord `return` verwacht een waarde of referentie van wat wordt teruggegeven, zoals:

```javascript
return myVariable;
```  

We zouden een functie kunnen maken om een begroetingsbericht te maken en de waarde terug te geven aan de aanroeper.

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

Bij het oproepen van deze functie slaan we de waarde op in een variabele. Dit is vrijwel hetzelfde als wanneer we een variabele instellen op een statische waarde (zoals `const name = 'Christopher'`).

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

## Functies als parameters voor functies

Naarmate je verder komt in je programmeercarrière, zul je functies tegenkomen die functies als parameters accepteren. Deze handige truc wordt vaak gebruikt wanneer we niet weten wanneer iets gaat gebeuren of voltooid zal zijn, maar we weten dat we een operatie moeten uitvoeren als reactie.

Als voorbeeld, overweeg [setTimeout](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout), die een timer start en code uitvoert wanneer deze voltooid is. We moeten aangeven welke code we willen uitvoeren. Klinkt als een perfecte taak voor een functie!

Als je de onderstaande code uitvoert, zie je na 3 seconden het bericht **3 seconden zijn verstreken**.

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

### Anonieme functies

Laten we nog eens kijken naar wat we hebben gebouwd. We maken een functie met een naam die slechts één keer zal worden gebruikt. Naarmate onze applicatie complexer wordt, kunnen we ons voorstellen dat we veel functies maken die slechts één keer worden aangeroepen. Dit is niet ideaal. Het blijkt dat we niet altijd een naam hoeven te geven!

Wanneer we een functie als parameter doorgeven, kunnen we het maken ervan vooraf overslaan en in plaats daarvan een functie bouwen als onderdeel van de parameter. We gebruiken hetzelfde sleutelwoord `function`, maar bouwen het als een parameter.

Laten we de bovenstaande code herschrijven om een anonieme functie te gebruiken:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

Als je onze nieuwe code uitvoert, zul je merken dat we dezelfde resultaten krijgen. We hebben een functie gemaakt, maar hoefden er geen naam aan te geven!

### Fat arrow functies

Een veelgebruikte shortcut in veel programmeertalen (inclusief JavaScript) is de mogelijkheid om gebruik te maken van wat een **arrow** of **fat arrow** functie wordt genoemd. Het gebruikt een speciale indicator `=>`, die eruitziet als een pijl - vandaar de naam! Door `=>` te gebruiken, kunnen we het sleutelwoord `function` overslaan.

Laten we onze code nog een keer herschrijven om een fat arrow functie te gebruiken:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

### Wanneer welke strategie te gebruiken

Je hebt nu gezien dat we drie manieren hebben om een functie als parameter door te geven en vraagt je misschien af wanneer je welke moet gebruiken. Als je weet dat je de functie meer dan eens zult gebruiken, maak deze dan zoals normaal. Als je deze slechts op één locatie zult gebruiken, is het over het algemeen het beste om een anonieme functie te gebruiken. Of je een fat arrow functie of de meer traditionele `function`-syntaxis gebruikt, is aan jou, maar je zult merken dat de meeste moderne ontwikkelaars de voorkeur geven aan `=>`.

---

## 🚀 Uitdaging

Kun je in één zin het verschil tussen functies en methoden uitleggen? Probeer het eens!

## Post-Les Quiz
[Post-les quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/10)

## Review & Zelfstudie

Het is de moeite waard om [wat meer te lezen over arrow functies](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), aangezien ze steeds vaker worden gebruikt in codebases. Oefen met het schrijven van een functie en herschrijf deze vervolgens met deze syntaxis.

## Opdracht

[Leuke dingen met Functies](assignment.md)

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor cruciale informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.