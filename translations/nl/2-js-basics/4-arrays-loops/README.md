<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9197f8af0fef9be6e81d4dbda23c7e7d",
  "translation_date": "2025-10-23T00:48:11+00:00",
  "source_file": "2-js-basics/4-arrays-loops/README.md",
  "language_code": "nl"
}
-->
# JavaScript Basis: Arrays en Lussen

![JavaScript Basis - Arrays](../../../../translated_images/webdev101-js-arrays.439d7528b8a294558d0e4302e448d193f8ad7495cc407539cc81f1afe904b470.nl.png)
> Sketchnote door [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz voor de les
[Quiz voor de les](https://ff-quizzes.netlify.app/web/quiz/13)

Heb je je ooit afgevraagd hoe websites bijhouden wat er in je winkelwagentje zit of je vriendenlijst weergeven? Dat is waar arrays en lussen van pas komen. Arrays zijn als digitale containers die meerdere stukjes informatie kunnen bevatten, terwijl lussen je in staat stellen om efficiënt met al die data te werken zonder herhalende code.

Samen vormen deze twee concepten de basis voor het verwerken van informatie in je programma's. Je leert hoe je van het handmatig uitschrijven van elke stap kunt overstappen naar het maken van slimme, efficiënte code die honderden of zelfs duizenden items snel kan verwerken.

Aan het einde van deze les begrijp je hoe je complexe datataken kunt uitvoeren met slechts een paar regels code. Laten we deze essentiële programmeerconcepten verkennen.

[![Arrays](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "Arrays")

[![Lussen](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "Loops")

> 🎥 Klik op de afbeeldingen hierboven voor video's over arrays en lussen.

> Je kunt deze les volgen op [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-arrays/?WT.mc_id=academic-77807-sagibbon)!

## Arrays

Denk aan arrays als een digitale archiefkast - in plaats van één document per lade op te slaan, kun je meerdere gerelateerde items organiseren in één gestructureerde container. In programmeertermen stellen arrays je in staat om meerdere stukjes informatie in één georganiseerd pakket op te slaan.

Of je nu een fotogalerij bouwt, een takenlijst beheert of de topscores in een spel bijhoudt, arrays vormen de basis voor dataorganisatie. Laten we eens kijken hoe ze werken.

✅ Arrays zijn overal om ons heen! Kun je een voorbeeld bedenken van een array in het echte leven, zoals een zonnepaneelarray?

### Arrays maken

Een array maken is super eenvoudig - gebruik gewoon vierkante haken!

```javascript
// Empty array - like an empty shopping cart waiting for items
const myArray = [];
```

**Wat gebeurt hier?**
Je hebt net een lege container gemaakt met die vierkante haken `[]`. Denk eraan als een lege boekenplank - klaar om te vullen met de boeken die je wilt organiseren.

Je kunt je array ook meteen vullen met beginwaarden:

```javascript
// Your ice cream shop's flavor menu
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// A user's profile info (mixing different types of data)
const userData = ["John", 25, true, "developer"];

// Test scores for your favorite class
const scores = [95, 87, 92, 78, 85];
```

**Interessante dingen om op te merken:**
- Je kunt tekst, getallen of zelfs true/false-waarden in dezelfde array opslaan
- Scheid elk item gewoon met een komma - simpel!
- Arrays zijn perfect om gerelateerde informatie bij elkaar te houden

### Indexering van arrays

Hier is iets dat in het begin misschien ongebruikelijk lijkt: arrays nummeren hun items vanaf 0, niet vanaf 1. Deze nul-gebaseerde indexering heeft zijn oorsprong in hoe computergeheugen werkt - het is een programmeerconventie sinds de vroege dagen van computertalen zoals C. Elke plek in de array krijgt een eigen adresnummer, een **index** genoemd.

| Index | Waarde | Beschrijving |
|-------|-------|-------------|
| 0 | "Chocolade" | Eerste element |
| 1 | "Aardbei" | Tweede element |
| 2 | "Vanille" | Derde element |
| 3 | "Pistache" | Vierde element |
| 4 | "Rocky Road" | Vijfde element |

✅ Verrast het je dat arrays beginnen bij index nul? In sommige programmeertalen beginnen indexen bij 1. Er is een interessante geschiedenis hierover, die je kunt [lezen op Wikipedia](https://en.wikipedia.org/wiki/Zero-based_numbering).

**Toegang tot array-elementen:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// Access individual elements using bracket notation
console.log(iceCreamFlavors[0]); // "Chocolate" - first element
console.log(iceCreamFlavors[2]); // "Vanilla" - third element
console.log(iceCreamFlavors[4]); // "Rocky Road" - last element
```

**Wat gebeurt hier precies:**
- **Gebruikt** vierkante haaknotatie met het indexnummer om elementen te benaderen
- **Geeft** de waarde terug die op die specifieke positie in de array is opgeslagen
- **Begint** te tellen vanaf 0, waardoor het eerste element index 0 heeft

**Array-elementen wijzigen:**

```javascript
// Change an existing value
iceCreamFlavors[4] = "Butter Pecan";
console.log(iceCreamFlavors[4]); // "Butter Pecan"

// Add a new element at the end
iceCreamFlavors[5] = "Cookie Dough";
console.log(iceCreamFlavors[5]); // "Cookie Dough"
```

**In het bovenstaande hebben we:**
- **Gewijzigd** het element op index 4 van "Rocky Road" naar "Butter Pecan"
- **Toegevoegd** een nieuw element "Cookie Dough" op index 5
- **Automatisch uitgebreid** de lengte van de array bij het toevoegen buiten de huidige grenzen

### Lengte van arrays en veelgebruikte methoden

Arrays hebben ingebouwde eigenschappen en methoden die het werken met data veel eenvoudiger maken.

**Lengte van een array vinden:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
console.log(iceCreamFlavors.length); // 5

// Length updates automatically as array changes
iceCreamFlavors.push("Mint Chip");
console.log(iceCreamFlavors.length); // 6
```

**Belangrijke punten om te onthouden:**
- **Geeft** het totale aantal elementen in de array terug
- **Wordt** automatisch bijgewerkt wanneer elementen worden toegevoegd of verwijderd
- **Biedt** een dynamische telling die handig is voor lussen en validatie

**Essentiële array-methoden:**

```javascript
const fruits = ["apple", "banana", "orange"];

// Add elements
fruits.push("grape");           // Adds to end: ["apple", "banana", "orange", "grape"]
fruits.unshift("strawberry");   // Adds to beginning: ["strawberry", "apple", "banana", "orange", "grape"]

// Remove elements
const lastFruit = fruits.pop();        // Removes and returns "grape"
const firstFruit = fruits.shift();     // Removes and returns "strawberry"

// Find elements
const index = fruits.indexOf("banana"); // Returns 1 (position of "banana")
const hasApple = fruits.includes("apple"); // Returns true
```

**Begrijp deze methoden:**
- **Voegt** elementen toe met `push()` (einde) en `unshift()` (begin)
- **Verwijdert** elementen met `pop()` (einde) en `shift()` (begin)
- **Vindt** elementen met `indexOf()` en controleert bestaan met `includes()`
- **Geeft** nuttige waarden terug zoals verwijderde elementen of positie-indexen

✅ Probeer het zelf! Gebruik de console van je browser om een array te maken en te manipuleren die je zelf hebt bedacht.

## Lussen

Denk aan de beroemde straf uit Charles Dickens' romans waarin studenten herhaaldelijk zinnen op een lei moesten schrijven. Stel je voor dat je iemand gewoon kunt instrueren om "schrijf deze zin 100 keer" en dat het automatisch wordt gedaan. Dat is precies wat lussen doen voor je code.

Lussen zijn als een onvermoeibare assistent die taken zonder fouten kan herhalen. Of je nu elk item in een winkelwagentje moet controleren of alle foto's in een album moet weergeven, lussen verwerken de herhaling efficiënt.

JavaScript biedt verschillende soorten lussen om uit te kiezen. Laten we ze elk bekijken en begrijpen wanneer je ze moet gebruiken.

### For-lus

De `for`-lus is als het instellen van een timer - je weet precies hoe vaak je wilt dat iets gebeurt. Het is super georganiseerd en voorspelbaar, wat het perfect maakt wanneer je met arrays werkt of dingen moet tellen.

**Structuur van een for-lus:**

| Component | Doel | Voorbeeld |
|-----------|---------|----------|
| **Initialisatie** | Stelt beginpunt in | `let i = 0` |
| **Voorwaarde** | Wanneer doorgaan | `i < 10` |
| **Increment** | Hoe bijwerken | `i++` |

```javascript
// Counting from 0 to 9
for (let i = 0; i < 10; i++) {
  console.log(`Count: ${i}`);
}

// More practical example: processing scores
const testScores = [85, 92, 78, 96, 88];
for (let i = 0; i < testScores.length; i++) {
  console.log(`Student ${i + 1}: ${testScores[i]}%`);
}
```

**Stap voor stap, wat gebeurt er:**
- **Initialiseert** de teller-variabele `i` op 0 aan het begin
- **Controleert** de voorwaarde `i < 10` vóór elke iteratie
- **Voert** de codeblok uit wanneer de voorwaarde waar is
- **Verhoogt** `i` met 1 na elke iteratie met `i++`
- **Stopt** wanneer de voorwaarde onwaar wordt (wanneer `i` 10 bereikt)

✅ Voer deze code uit in een browserconsole. Wat gebeurt er als je kleine wijzigingen aanbrengt in de teller, voorwaarde of iteratie-uitdrukking? Kun je het achteruit laten lopen, een aftelling maken?

### While-lus

De `while`-lus is als zeggen "blijf dit doen totdat..." - je weet misschien niet precies hoe vaak het zal draaien, maar je weet wanneer je moet stoppen. Het is perfect voor dingen zoals een gebruiker om input vragen totdat ze je geven wat je nodig hebt, of door data zoeken totdat je vindt wat je zoekt.

**Kenmerken van een while-lus:**
- **Blijft** uitvoeren zolang de voorwaarde waar is
- **Vereist** handmatig beheer van eventuele teller-variabelen
- **Controleert** de voorwaarde vóór elke iteratie
- **Risico** op oneindige lussen als de voorwaarde nooit onwaar wordt

```javascript
// Basic counting example
let i = 0;
while (i < 10) {
  console.log(`While count: ${i}`);
  i++; // Don't forget to increment!
}

// More practical example: processing user input
let userInput = "";
let attempts = 0;
const maxAttempts = 3;

while (userInput !== "quit" && attempts < maxAttempts) {
  userInput = prompt(`Enter 'quit' to exit (attempt ${attempts + 1}):`);
  attempts++;
}

if (attempts >= maxAttempts) {
  console.log("Maximum attempts reached!");
}
```

**Begrijp deze voorbeelden:**
- **Beheert** de teller-variabele `i` handmatig binnen de lus
- **Verhoogt** de teller om oneindige lussen te voorkomen
- **Toont** een praktisch gebruik met gebruikersinput en poginglimieten
- **Bevat** veiligheidsmechanismen om eindeloze uitvoering te voorkomen

### Moderne lusalternatieven

JavaScript biedt moderne lus-syntaxis die je code leesbaarder en minder foutgevoelig kan maken.

**For...of-lus (ES6+):**

```javascript
const colors = ["red", "green", "blue", "yellow"];

// Modern approach - cleaner and safer
for (const color of colors) {
  console.log(`Color: ${color}`);
}

// Compare with traditional for loop
for (let i = 0; i < colors.length; i++) {
  console.log(`Color: ${colors[i]}`);
}
```

**Belangrijke voordelen van for...of:**
- **Elimineert** indexbeheer en mogelijke off-by-one fouten
- **Biedt** directe toegang tot array-elementen
- **Verbetert** de leesbaarheid van code en vermindert syntaxiscomplexiteit

**forEach-methode:**

```javascript
const prices = [9.99, 15.50, 22.75, 8.25];

// Using forEach for functional programming style
prices.forEach((price, index) => {
  console.log(`Item ${index + 1}: $${price.toFixed(2)}`);
});

// forEach with arrow functions for simple operations
prices.forEach(price => console.log(`Price: $${price}`));
```

**Wat je moet weten over forEach:**
- **Voert** een functie uit voor elk array-element
- **Biedt** zowel elementwaarde als index als parameters
- **Kan** niet vroegtijdig worden gestopt (in tegenstelling tot traditionele lussen)
- **Geeft** undefined terug (maakt geen nieuwe array)

✅ Waarom zou je kiezen voor een for-lus versus een while-lus? 17K kijkers hadden dezelfde vraag op StackOverflow, en sommige van de meningen [kunnen interessant voor je zijn](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript).

## Lussen en Arrays

Het combineren van arrays met lussen creëert krachtige dataverwerkingsmogelijkheden. Deze combinatie is fundamenteel voor veel programmeertaken, van het weergeven van lijsten tot het berekenen van statistieken.

**Traditionele arrayverwerking:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// Classic for loop approach
for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(`Flavor ${i + 1}: ${iceCreamFlavors[i]}`);
}

// Modern for...of approach
for (const flavor of iceCreamFlavors) {
  console.log(`Available flavor: ${flavor}`);
}
```

**Laten we elke aanpak begrijpen:**
- **Gebruikt** de eigenschap arraylengte om de lusgrens te bepalen
- **Benadert** elementen via index in traditionele for-lussen
- **Biedt** directe toegang tot elementen in for...of-lussen
- **Verwerkt** elk array-element precies één keer

**Praktisch voorbeeld van dataverwerking:**

```javascript
const studentGrades = [85, 92, 78, 96, 88, 73, 89];
let total = 0;
let highestGrade = studentGrades[0];
let lowestGrade = studentGrades[0];

// Process all grades with a single loop
for (let i = 0; i < studentGrades.length; i++) {
  const grade = studentGrades[i];
  total += grade;
  
  if (grade > highestGrade) {
    highestGrade = grade;
  }
  
  if (grade < lowestGrade) {
    lowestGrade = grade;
  }
}

const average = total / studentGrades.length;
console.log(`Average: ${average.toFixed(1)}`);
console.log(`Highest: ${highestGrade}`);
console.log(`Lowest: ${lowestGrade}`);
```

**Zo werkt deze code:**
- **Initialiseert** tracking-variabelen voor som en extremen
- **Verwerkt** elke score met een enkele efficiënte lus
- **Accumulateert** het totaal voor gemiddelde berekening
- **Volgt** hoogste en laagste waarden tijdens iteratie
- **Berekent** eindstatistieken na voltooiing van de lus

✅ Experimenteer met het doorlopen van een array die je zelf hebt gemaakt in de console van je browser.

---

## GitHub Copilot Agent Challenge 🚀

Gebruik de Agent-modus om de volgende uitdaging te voltooien:

**Beschrijving:** Bouw een uitgebreide dataverwerkingsfunctie die arrays en lussen combineert om een dataset te analyseren en zinvolle inzichten te genereren.

**Prompt:** Maak een functie genaamd `analyzeGrades` die een array van studentcijferobjecten (elk met name- en score-eigenschappen) neemt en een object retourneert met statistieken, waaronder de hoogste score, laagste score, gemiddelde score, aantal studenten die geslaagd zijn (score >= 70), en een array van studentnamen die boven gemiddeld scoorden. Gebruik minstens twee verschillende lussoorten in je oplossing.

Lees meer over [agent-modus](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) hier.

## 🚀 Uitdaging

JavaScript biedt verschillende moderne array-methoden die traditionele lussen kunnen vervangen voor specifieke taken. Verken [forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of), [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [filter](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), en [reduce](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce). 

**Jouw uitdaging:** Herstructureer het voorbeeld van de studentcijfers met behulp van minstens drie verschillende array-methoden. Merk op hoe veel schoner en leesbaarder de code wordt met moderne JavaScript-syntaxis.

## Quiz na de les
[Quiz na de les](https://ff-quizzes.netlify.app/web/quiz/14)

## Herhaling & Zelfstudie

Arrays in JavaScript hebben veel methoden die erg handig zijn voor datamanipulatie. [Lees meer over deze methoden](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) en probeer er een paar uit (zoals push, pop, slice en splice) op een array die je zelf hebt gemaakt.

## Opdracht

[Loop een Array](assignment.md)

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.