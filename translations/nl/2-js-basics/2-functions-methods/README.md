<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "ec43b53e8e015cdabfd3ad877b3c28e5",
  "translation_date": "2025-10-23T00:47:43+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "nl"
}
-->
# JavaScript Basis: Methoden en Functies

![JavaScript Basis - Functies](../../../../translated_images/webdev101-js-functions.be049c4726e94f8b7605c36330ac42eeb5cd8ed02bcdd60fdac778174d6cb865.nl.png)
> Sketchnote door [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz voor de les
[Quiz voor de les](https://ff-quizzes.netlify.app)

Het herhaaldelijk schrijven van dezelfde code is een van de meest voorkomende frustraties in programmeren. Functies lossen dit probleem op door je in staat te stellen code in herbruikbare blokken te verpakken. Denk aan functies als de gestandaardiseerde onderdelen die Henry Ford's assemblagelijn revolutionair maakten – zodra je een betrouwbaar onderdeel hebt gemaakt, kun je het overal gebruiken zonder het opnieuw te bouwen.

Functies stellen je in staat om stukjes code te bundelen zodat je ze door je hele programma kunt hergebruiken. In plaats van dezelfde logica overal te kopiëren en plakken, kun je een functie één keer maken en deze oproepen wanneer nodig. Deze aanpak houdt je code georganiseerd en maakt updates veel eenvoudiger.

In deze les leer je hoe je je eigen functies kunt maken, informatie aan hen kunt doorgeven en nuttige resultaten kunt terugkrijgen. Je ontdekt het verschil tussen functies en methoden, leert moderne syntaxisbenaderingen en ziet hoe functies met andere functies kunnen samenwerken. We bouwen deze concepten stap voor stap op.

[![Methoden en Functies](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Methoden en Functies")

> 🎥 Klik op de afbeelding hierboven voor een video over methoden en functies.

> Je kunt deze les volgen op [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon)!

## Functies

Een functie is een zelfstandig blok code dat een specifieke taak uitvoert. Het bevat logica die je kunt uitvoeren wanneer dat nodig is.

In plaats van dezelfde code meerdere keren door je programma te schrijven, kun je het in een functie verpakken en die functie oproepen wanneer je het nodig hebt. Deze aanpak houdt je code schoon en maakt updates veel eenvoudiger. Stel je de onderhoudsuitdaging voor als je logica moest veranderen die verspreid was over 20 verschillende locaties in je codebase.

Het is essentieel om je functies beschrijvende namen te geven. Een goed benoemde functie communiceert duidelijk zijn doel – als je `cancelTimer()` ziet, begrijp je meteen wat het doet, net zoals een duidelijk gelabelde knop je precies vertelt wat er gebeurt als je erop klikt.

## Een functie maken en oproepen

Laten we eens kijken hoe je een functie maakt. De syntaxis volgt een consistent patroon:

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

Laten we dit opsplitsen:
- Het sleutelwoord `function` vertelt JavaScript "Hé, ik maak een functie!"
- `nameOfFunction` is waar je je functie een beschrijvende naam geeft
- De haakjes `()` zijn waar je parameters kunt toevoegen (daar komen we zo op terug)
- De accolades `{}` bevatten de daadwerkelijke code die wordt uitgevoerd wanneer je de functie oproept

Laten we een eenvoudige begroetingsfunctie maken om dit in actie te zien:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

Deze functie print "Hello, world!" naar de console. Zodra je het hebt gedefinieerd, kun je het zo vaak gebruiken als nodig is.

Om je functie uit te voeren (of "op te roepen"), schrijf je de naam gevolgd door haakjes. JavaScript staat je toe om je functie te definiëren vóór of nadat je deze oproept – de JavaScript-engine regelt de uitvoeringsvolgorde.

```javascript
// calling our function
displayGreeting();
```

Wanneer je deze regel uitvoert, voert het alle code binnen je `displayGreeting`-functie uit en toont "Hello, world!" in de console van je browser. Je kunt deze functie herhaaldelijk oproepen.

> **Note:** Je hebt **methoden** gebruikt gedurende deze lessen. `console.log()` is een methode – in wezen een functie die behoort tot het `console`-object. Het belangrijkste verschil is dat methoden aan objecten zijn gekoppeld, terwijl functies onafhankelijk staan. Veel ontwikkelaars gebruiken deze termen in informele gesprekken door elkaar.

### Beste praktijken voor functies

Hier zijn een paar tips om je te helpen geweldige functies te schrijven:

- Geef je functies duidelijke, beschrijvende namen – je toekomstige zelf zal je dankbaar zijn!
- Gebruik **camelCasing** voor namen met meerdere woorden (zoals `calculateTotal` in plaats van `calculate_total`)
- Houd elke functie gericht op het goed uitvoeren van één taak

## Informatie doorgeven aan een functie

Onze `displayGreeting`-functie is beperkt – het kan alleen "Hello, world!" weergeven voor iedereen. Parameters stellen ons in staat om functies flexibeler en nuttiger te maken.

**Parameters** werken als placeholders waar je verschillende waarden kunt invoegen elke keer dat je de functie gebruikt. Op deze manier kan dezelfde functie werken met verschillende informatie bij elke oproep.

Je vermeldt parameters binnen de haakjes wanneer je je functie definieert, waarbij je meerdere parameters scheidt met komma's:

```javascript
function name(param, param2, param3) {

}
```

Elke parameter werkt als een placeholder – wanneer iemand je functie oproept, geven ze feitelijke waarden die in deze plekken worden geplaatst.

Laten we onze begroetingsfunctie bijwerken om iemands naam te accepteren:

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

Let op hoe we backticks (`` ` ``) en `${}` gebruiken om de naam direct in ons bericht in te voegen – dit wordt een template literal genoemd en het is een handige manier om strings te bouwen met variabelen erin verwerkt.

Nu, wanneer we onze functie oproepen, kunnen we elke naam doorgeven:

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

JavaScript neemt de string `'Christopher'`, wijst deze toe aan de `name`-parameter en maakt het gepersonaliseerde bericht "Hello, Christopher!"

## Standaardwaarden

Wat als we sommige parameters optioneel willen maken? Dat is waar standaardwaarden van pas komen!

Stel dat we willen dat mensen het begroetingswoord kunnen aanpassen, maar als ze er geen opgeven, gebruiken we gewoon "Hello" als standaard. Je kunt standaardwaarden instellen door het gelijkheidsteken te gebruiken, net zoals bij het instellen van een variabele:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

Hier is `name` nog steeds vereist, maar `salutation` heeft een reservewaarde van `'Hello'` als niemand een andere begroeting opgeeft.

Nu kunnen we deze functie op twee verschillende manieren oproepen:

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

Bij de eerste oproep gebruikt JavaScript de standaard "Hello" omdat we geen begroeting hebben opgegeven. Bij de tweede oproep gebruikt het onze aangepaste "Hi" in plaats daarvan. Deze flexibiliteit maakt functies aanpasbaar aan verschillende scenario's.

## Returnwaarden

Onze functies tot nu toe hebben alleen berichten naar de console geprint, maar wat als je wilt dat een functie iets berekent en je het resultaat teruggeeft?

Dat is waar **returnwaarden** van pas komen. In plaats van alleen iets weer te geven, kan een functie je een waarde teruggeven die je in een variabele kunt opslaan of in andere delen van je code kunt gebruiken.

Om een waarde terug te sturen, gebruik je het sleutelwoord `return` gevolgd door wat je wilt retourneren:

```javascript
return myVariable;
```

Hier is iets belangrijks: wanneer een functie een `return`-verklaring bereikt, stopt het onmiddellijk met uitvoeren en stuurt die waarde terug naar degene die het heeft opgeroepen.

Laten we onze begroetingsfunctie aanpassen om het bericht terug te geven in plaats van het te printen:

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

Nu, in plaats van de begroeting te printen, maakt deze functie het bericht en geeft het aan ons terug.

Om de geretourneerde waarde te gebruiken, kunnen we deze opslaan in een variabele, net zoals elke andere waarde:

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

Nu bevat `greetingMessage` "Hello, Christopher" en kunnen we het overal in onze code gebruiken – om het op een webpagina weer te geven, in een e-mail op te nemen of door te geven aan een andere functie.

## Functies als parameters voor functies

Functies kunnen worden doorgegeven als parameters aan andere functies. Hoewel dit concept in het begin misschien complex lijkt, is het een krachtige functie die flexibele programmeerpatronen mogelijk maakt.

Dit patroon is heel gebruikelijk wanneer je wilt zeggen "wanneer er iets gebeurt, doe dan dit andere ding." Bijvoorbeeld, "wanneer de timer afloopt, voer deze code uit" of "wanneer de gebruiker op de knop klikt, roep deze functie aan."

Laten we kijken naar `setTimeout`, een ingebouwde functie die een bepaalde tijd wacht en vervolgens wat code uitvoert. We moeten aangeven welke code moet worden uitgevoerd – een perfect gebruiksvoorbeeld voor het doorgeven van een functie!

Probeer deze code – na 3 seconden zie je een bericht:

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

Let op hoe we `displayDone` (zonder haakjes) doorgeven aan `setTimeout`. We roepen de functie niet zelf op – we geven het door aan `setTimeout` en zeggen "roep dit aan over 3 seconden."

### Anonieme functies

Soms heb je een functie nodig voor slechts één ding en wil je het geen naam geven. Denk erover na – als je een functie maar één keer gebruikt, waarom zou je je code dan vervuilen met een extra naam?

JavaScript laat je **anonieme functies** maken – functies zonder namen die je kunt definiëren precies waar je ze nodig hebt.

Hier is hoe we ons timervoorbeeld kunnen herschrijven met een anonieme functie:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

Dit bereikt hetzelfde resultaat, maar de functie wordt direct binnen de `setTimeout`-oproep gedefinieerd, waardoor de noodzaak voor een aparte functiedeclaratie wordt geëlimineerd.

### Fat arrow functies

Modern JavaScript heeft een nog kortere manier om functies te schrijven, genaamd **arrow functions**. Ze gebruiken `=>` (wat eruitziet als een pijl – snap je?) en zijn super populair bij ontwikkelaars.

Arrow functions laten je het sleutelwoord `function` overslaan en meer beknopte code schrijven.

Hier is ons timervoorbeeld met een arrow function:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

De `()` is waar parameters zouden gaan (leeg in dit geval), dan komt de pijl `=>`, en ten slotte het functieblok in accolades. Dit biedt dezelfde functionaliteit met een meer beknopte syntaxis.

### Wanneer gebruik je welke strategie?

Wanneer moet je elke aanpak gebruiken? Een praktische richtlijn: als je de functie meerdere keren zult gebruiken, geef het een naam en definieer het apart. Als het voor één specifiek gebruik is, overweeg dan een anonieme functie. Zowel arrow functions als traditionele syntaxis zijn geldige keuzes, hoewel arrow functions veel voorkomen in moderne JavaScript-codebases.

---



## 🚀 Uitdaging

Kun je in één zin het verschil tussen functies en methoden uitleggen? Probeer het eens!

## GitHub Copilot Agent Uitdaging 🚀

Gebruik de Agent-modus om de volgende uitdaging te voltooien:

**Beschrijving:** Maak een hulpbibliotheek van wiskundige functies die verschillende functieconcepten demonstreert die in deze les zijn behandeld, inclusief parameters, standaardwaarden, returnwaarden en arrow functions.

**Opdracht:** Maak een JavaScript-bestand genaamd `mathUtils.js` dat de volgende functies bevat:
1. Een functie `add` die twee parameters accepteert en hun som retourneert
2. Een functie `multiply` met standaardwaarden voor parameters (de tweede parameter heeft standaard de waarde 1)
3. Een arrow function `square` die een getal accepteert en het kwadraat ervan retourneert
4. Een functie `calculate` die een andere functie als parameter accepteert en twee getallen, en vervolgens de functie toepast op die getallen
5. Demonstreer het oproepen van elke functie met geschikte testgevallen

Meer informatie over [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) vind je hier.

## Quiz na de les
[Quiz na de les](https://ff-quizzes.netlify.app)

## Herhaling & Zelfstudie

Het is de moeite waard om [wat meer te lezen over arrow functions](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), aangezien ze steeds vaker worden gebruikt in codebases. Oefen met het schrijven van een functie en herschrijf deze vervolgens met deze syntaxis.

## Opdracht

[Leuke dingen met Functies](assignment.md)

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.