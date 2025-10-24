<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9197f8af0fef9be6e81d4dbda23c7e7d",
  "translation_date": "2025-10-23T21:27:32+00:00",
  "source_file": "2-js-basics/4-arrays-loops/README.md",
  "language_code": "sv"
}
-->
# JavaScript Grunder: Arrayer och Loopar

![JavaScript Grunder - Arrayer](../../../../translated_images/webdev101-js-arrays.439d7528b8a294558d0e4302e448d193f8ad7495cc407539cc81f1afe904b470.sv.png)
> Sketchnote av [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz före föreläsningen
[Quiz före föreläsningen](https://ff-quizzes.netlify.app/web/quiz/13)

Har du någonsin undrat hur webbplatser håller koll på varor i en kundvagn eller visar din vänlista? Det är här arrayer och loopar kommer in i bilden. Arrayer är som digitala behållare som håller flera informationsbitar, medan loopar låter dig arbeta med all den datan effektivt utan att behöva skriva repetitiv kod.

Tillsammans utgör dessa två koncept grunden för att hantera information i dina program. Du kommer att lära dig att gå från att manuellt skriva ut varje steg till att skapa smart, effektiv kod som kan bearbeta hundratals eller till och med tusentals objekt snabbt.

I slutet av denna lektion kommer du att förstå hur du kan utföra komplexa datauppgifter med bara några få rader kod. Låt oss utforska dessa viktiga programmeringskoncept.

[![Arrayer](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "Arrayer")

[![Loopar](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "Loopar")

> 🎥 Klicka på bilderna ovan för videor om arrayer och loopar.

> Du kan ta denna lektion på [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-arrays/?WT.mc_id=academic-77807-sagibbon)!

## Arrayer

Tänk på arrayer som ett digitalt arkivskåp - istället för att lagra ett dokument per låda kan du organisera flera relaterade objekt i en enda, strukturerad behållare. I programmeringstermer låter arrayer dig lagra flera informationsbitar i ett organiserat paket.

Oavsett om du bygger ett fotogalleri, hanterar en att-göra-lista eller håller koll på höga poäng i ett spel, ger arrayer grunden för dataorganisation. Låt oss se hur de fungerar.

✅ Arrayer finns överallt! Kan du tänka på ett verkligt exempel på en array, som en solpanel-array?

### Skapa Arrayer

Att skapa en array är superenkelt - använd bara hakparenteser!

```javascript
// Empty array - like an empty shopping cart waiting for items
const myArray = [];
```

**Vad händer här?**
Du har precis skapat en tom behållare med hjälp av hakparenteserna `[]`. Tänk på det som en tom bokhylla - den är redo att hålla vilka böcker du vill organisera där.

Du kan också fylla din array med initiala värden direkt från början:

```javascript
// Your ice cream shop's flavor menu
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// A user's profile info (mixing different types of data)
const userData = ["John", 25, true, "developer"];

// Test scores for your favorite class
const scores = [95, 87, 92, 78, 85];
```

**Coola saker att notera:**
- Du kan lagra text, siffror eller till och med sant/falskt-värden i samma array
- Separera bara varje objekt med ett komma - enkelt!
- Arrayer är perfekta för att hålla relaterad information tillsammans

### Arrayindexering

Här är något som kan verka ovanligt till en början: arrayer numrerar sina objekt från 0, inte 1. Denna nollbaserade indexering har sina rötter i hur datorminne fungerar - det har varit en programmeringskonvention sedan de tidiga dagarna av programmeringsspråk som C. Varje plats i arrayen får sitt eget adressnummer som kallas ett **index**.

| Index | Värde | Beskrivning |
|-------|-------|-------------|
| 0 | "Choklad" | Första elementet |
| 1 | "Jordgubb" | Andra elementet |
| 2 | "Vanilj" | Tredje elementet |
| 3 | "Pistage" | Fjärde elementet |
| 4 | "Rocky Road" | Femte elementet |

✅ Är det förvånande att arrayer börjar på index noll? I vissa programmeringsspråk börjar index på 1. Det finns en intressant historia om detta som du kan [läsa på Wikipedia](https://en.wikipedia.org/wiki/Zero-based_numbering).

**Åtkomst till arrayelement:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// Access individual elements using bracket notation
console.log(iceCreamFlavors[0]); // "Chocolate" - first element
console.log(iceCreamFlavors[2]); // "Vanilla" - third element
console.log(iceCreamFlavors[4]); // "Rocky Road" - last element
```

**Så här fungerar det:**
- **Använder** hakparentesnotation med indexnummer för att komma åt element
- **Returnerar** värdet som lagras på den specifika positionen i arrayen
- **Börjar** räkna från 0, vilket gör det första elementet till index 0

**Modifiera arrayelement:**

```javascript
// Change an existing value
iceCreamFlavors[4] = "Butter Pecan";
console.log(iceCreamFlavors[4]); // "Butter Pecan"

// Add a new element at the end
iceCreamFlavors[5] = "Cookie Dough";
console.log(iceCreamFlavors[5]); // "Cookie Dough"
```

**I exemplet ovan har vi:**
- **Ändrat** elementet på index 4 från "Rocky Road" till "Butter Pecan"
- **Lagt till** ett nytt element "Cookie Dough" på index 5
- **Utökat** arrayens längd automatiskt när vi lägger till bortom nuvarande gränser

### Arraylängd och vanliga metoder

Arrayer har inbyggda egenskaper och metoder som gör det mycket enklare att arbeta med data.

**Hitta arrayens längd:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
console.log(iceCreamFlavors.length); // 5

// Length updates automatically as array changes
iceCreamFlavors.push("Mint Chip");
console.log(iceCreamFlavors.length); // 6
```

**Viktiga punkter att komma ihåg:**
- **Returnerar** det totala antalet element i arrayen
- **Uppdateras** automatiskt när element läggs till eller tas bort
- **Ger** en dynamisk räkning som är användbar för loopar och validering

**Viktiga arraymetoder:**

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

**Förstå dessa metoder:**
- **Lägger till** element med `push()` (slutet) och `unshift()` (början)
- **Tar bort** element med `pop()` (slutet) och `shift()` (början)
- **Hittar** element med `indexOf()` och kontrollerar existens med `includes()`
- **Returnerar** användbara värden som borttagna element eller positionsindex

✅ Testa själv! Använd din webbläsares konsol för att skapa och manipulera en array som du själv skapar.

## Loopar

Tänk på det berömda straffet från Charles Dickens romaner där elever var tvungna att skriva meningar upprepade gånger på en griffeltavla. Tänk om du bara kunde instruera någon att "skriva den här meningen 100 gånger" och få det gjort automatiskt. Det är precis vad loopar gör för din kod.

Loopar är som att ha en outtröttlig assistent som kan upprepa uppgifter utan fel. Oavsett om du behöver kontrollera varje objekt i en kundvagn eller visa alla foton i ett album, hanterar loopar repetitionen effektivt.

JavaScript erbjuder flera typer av loopar att välja mellan. Låt oss undersöka var och en och förstå när de ska användas.

### For-loop

`for`-loopen är som att ställa in en timer - du vet exakt hur många gånger du vill att något ska hända. Den är superorganiserad och förutsägbar, vilket gör den perfekt när du arbetar med arrayer eller behöver räkna saker.

**Struktur för for-loop:**

| Komponent | Syfte | Exempel |
|-----------|-------|---------|
| **Initialisering** | Sätter startpunkt | `let i = 0` |
| **Villkor** | När den ska fortsätta | `i < 10` |
| **Inkrement** | Hur den ska uppdateras | `i++` |

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

**Steg för steg, här är vad som händer:**
- **Initierar** räknarvariabeln `i` till 0 i början
- **Kontrollerar** villkoret `i < 10` före varje iteration
- **Utför** kodblocket när villkoret är sant
- **Inkrementerar** `i` med 1 efter varje iteration med `i++`
- **Stoppar** när villkoret blir falskt (när `i` når 10)

✅ Kör denna kod i en webbläsares konsol. Vad händer när du gör små ändringar i räknaren, villkoret eller iterationsuttrycket? Kan du få den att gå baklänges och skapa en nedräkning?

### While-loop

`while`-loopen är som att säga "fortsätt göra detta tills..." - du kanske inte vet exakt hur många gånger den kommer att köras, men du vet när den ska sluta. Den är perfekt för saker som att be en användare om input tills de ger dig vad du behöver, eller att söka igenom data tills du hittar vad du letar efter.

**Egenskaper hos while-loop:**
- **Fortsätter** att exekvera så länge villkoret är sant
- **Kräver** manuell hantering av eventuella räknarvariabler
- **Kontrollerar** villkoret före varje iteration
- **Riskerar** oändliga loopar om villkoret aldrig blir falskt

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

**Förstå dessa exempel:**
- **Hantera** räknarvariabeln `i` manuellt inuti loopens kropp
- **Inkrementera** räknaren för att undvika oändliga loopar
- **Demonstrerar** praktiska användningsfall med användarinmatning och begränsning av försök
- **Inkluderar** säkerhetsmekanismer för att förhindra oändlig exekvering

### Moderna loopalternativ

JavaScript erbjuder modern loopsyntax som kan göra din kod mer läsbar och mindre benägen för fel.

**For...of-loop (ES6+):**

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

**Viktiga fördelar med for...of:**
- **Eliminerar** indexhantering och potentiella off-by-one-fel
- **Ger** direkt åtkomst till arrayelement
- **Förbättrar** kodläsbarhet och minskar syntaxkomplexitet

**forEach-metod:**

```javascript
const prices = [9.99, 15.50, 22.75, 8.25];

// Using forEach for functional programming style
prices.forEach((price, index) => {
  console.log(`Item ${index + 1}: $${price.toFixed(2)}`);
});

// forEach with arrow functions for simple operations
prices.forEach(price => console.log(`Price: $${price}`));
```

**Vad du behöver veta om forEach:**
- **Exekverar** en funktion för varje arrayelement
- **Ger** både elementvärde och index som parametrar
- **Kan inte** stoppas i förtid (till skillnad från traditionella loopar)
- **Returnerar** undefined (skapar inte en ny array)

✅ Varför skulle du välja en for-loop istället för en while-loop? 17K tittare hade samma fråga på StackOverflow, och några av åsikterna [kan vara intressanta för dig](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript).

## Loopar och Arrayer

Att kombinera arrayer med loopar skapar kraftfulla databehandlingsmöjligheter. Denna kombination är grundläggande för många programmeringsuppgifter, från att visa listor till att beräkna statistik.

**Traditionell arraybehandling:**

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

**Låt oss förstå varje tillvägagångssätt:**
- **Använder** arrayens längdegenskap för att bestämma loopgränsen
- **Kommer åt** element via index i traditionella for-loopar
- **Ger** direkt åtkomst till element i for...of-loopar
- **Bearbetar** varje arrayelement exakt en gång

**Praktiskt exempel på databehandling:**

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

**Så här fungerar denna kod:**
- **Initierar** spårningsvariabler för summa och extremvärden
- **Bearbetar** varje betyg med en enda effektiv loop
- **Ackumulerar** totalen för genomsnittsberäkning
- **Spårar** högsta och lägsta värden under iterationen
- **Beräknar** slutlig statistik efter loopens avslutning

✅ Experimentera med att loopa över en array som du själv skapar i din webbläsares konsol.

---

## GitHub Copilot Agent-utmaning 🚀

Använd Agent-läget för att slutföra följande utmaning:

**Beskrivning:** Bygg en omfattande databehandlingsfunktion som kombinerar arrayer och loopar för att analysera en dataset och generera meningsfulla insikter.

**Uppmaning:** Skapa en funktion som heter `analyzeGrades` som tar en array av studentbetygsobjekt (varje innehåller namn och poängegenskaper) och returnerar ett objekt med statistik inklusive högsta poäng, lägsta poäng, genomsnittspoäng, antal studenter som klarade (poäng >= 70) och en array av studentnamn som fick över genomsnittet. Använd minst två olika looptyper i din lösning.

Läs mer om [agent-läge](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) här.

## 🚀 Utmaning

JavaScript erbjuder flera moderna arraymetoder som kan ersätta traditionella loopar för specifika uppgifter. Utforska [forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of), [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [filter](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), och [reduce](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce). 

**Din utmaning:** Omstrukturera studentbetygsexemplet med minst tre olika arraymetoder. Lägg märke till hur mycket renare och mer läsbar koden blir med modern JavaScript-syntax.

## Quiz efter föreläsningen
[Quiz efter föreläsningen](https://ff-quizzes.netlify.app/web/quiz/14)


## Granskning & Självstudier

Arrayer i JavaScript har många metoder kopplade till sig som är extremt användbara för datamanipulation. [Läs mer om dessa metoder](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) och testa några av dem (som push, pop, slice och splice) på en array som du själv skapar.

## Uppgift

[Loop en Array](assignment.md)

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiserade översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess ursprungliga språk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.