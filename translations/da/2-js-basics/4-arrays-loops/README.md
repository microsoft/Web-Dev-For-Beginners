<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9197f8af0fef9be6e81d4dbda23c7e7d",
  "translation_date": "2025-10-23T21:53:19+00:00",
  "source_file": "2-js-basics/4-arrays-loops/README.md",
  "language_code": "da"
}
-->
# JavaScript Grundlæggende: Arrays og Løkker

![JavaScript Basics - Arrays](../../../../translated_images/webdev101-js-arrays.439d7528b8a294558d0e4302e448d193f8ad7495cc407539cc81f1afe904b470.da.png)
> Sketchnote af [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz før forelæsning
[Quiz før forelæsning](https://ff-quizzes.netlify.app/web/quiz/13)

Har du nogensinde undret dig over, hvordan hjemmesider holder styr på varer i indkøbskurven eller viser din venneliste? Det er her arrays og løkker kommer ind i billedet. Arrays er som digitale beholdere, der kan indeholde flere stykker information, mens løkker gør det muligt at arbejde med alle disse data effektivt uden gentagende kode.

Sammen udgør disse to begreber fundamentet for at håndtere information i dine programmer. Du vil lære at gå fra manuelt at skrive hver enkelt trin til at skabe smart, effektiv kode, der kan behandle hundredevis eller endda tusindvis af elementer hurtigt.

Ved slutningen af denne lektion vil du forstå, hvordan du kan udføre komplekse databehandlingsopgaver med blot nogle få linjer kode. Lad os udforske disse essentielle programmeringsbegreber.

[![Arrays](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "Arrays")

[![Loops](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "Loops")

> 🎥 Klik på billederne ovenfor for videoer om arrays og løkker.

> Du kan tage denne lektion på [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-arrays/?WT.mc_id=academic-77807-sagibbon)!

## Arrays

Tænk på arrays som et digitalt arkivskab - i stedet for at opbevare ét dokument per skuffe, kan du organisere flere relaterede elementer i en enkelt, struktureret beholder. I programmering giver arrays dig mulighed for at gemme flere stykker information i én organiseret pakke.

Uanset om du bygger et fotogalleri, administrerer en to-do-liste eller holder styr på high scores i et spil, giver arrays fundamentet for dataorganisation. Lad os se, hvordan de fungerer.

✅ Arrays er overalt omkring os! Kan du komme i tanke om et eksempel fra det virkelige liv, som en solcellepanel-array?

### Oprettelse af Arrays

At oprette et array er super enkelt - brug bare firkantede parenteser!

```javascript
// Empty array - like an empty shopping cart waiting for items
const myArray = [];
```

**Hvad sker der her?**
Du har lige oprettet en tom beholder ved hjælp af de firkantede parenteser `[]`. Tænk på det som en tom boghylde - den er klar til at indeholde de bøger, du vil organisere der.

Du kan også fylde dit array med startværdier fra begyndelsen:

```javascript
// Your ice cream shop's flavor menu
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// A user's profile info (mixing different types of data)
const userData = ["John", 25, true, "developer"];

// Test scores for your favorite class
const scores = [95, 87, 92, 78, 85];
```

**Seje ting at bemærke:**
- Du kan gemme tekst, tal eller endda sand/falsk værdier i det samme array
- Bare adskil hvert element med et komma - nemt!
- Arrays er perfekte til at holde relateret information samlet

### Array-indeksering

Her er noget, der måske virker usædvanligt i starten: Arrays nummererer deres elementer fra 0, ikke 1. Denne nulbaserede indeksering har sine rødder i, hvordan computerhukommelse fungerer - det har været en programmeringskonvention siden de tidlige dage med programmeringssprog som C. Hvert sted i arrayet får sit eget adresse nummer kaldet et **indeks**.

| Indeks | Værdi | Beskrivelse |
|--------|-------|-------------|
| 0 | "Chokolade" | Første element |
| 1 | "Jordbær" | Andet element |
| 2 | "Vanilje" | Tredje element |
| 3 | "Pistacie" | Fjerde element |
| 4 | "Rocky Road" | Femte element |

✅ Er det overraskende for dig, at arrays starter ved nul-indekset? I nogle programmeringssprog starter indekser ved 1. Der er en interessant historie bag dette, som du kan [læse på Wikipedia](https://en.wikipedia.org/wiki/Zero-based_numbering).

**Adgang til array-elementer:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// Access individual elements using bracket notation
console.log(iceCreamFlavors[0]); // "Chocolate" - first element
console.log(iceCreamFlavors[2]); // "Vanilla" - third element
console.log(iceCreamFlavors[4]); // "Rocky Road" - last element
```

**Hvad sker der her:**
- **Bruger** firkantet parentesnotation med indeksnummeret for at få adgang til elementer
- **Returnerer** værdien, der er gemt på den specifikke position i arrayet
- **Starter** tælling fra 0, hvilket gør det første element til indeks 0

**Ændring af array-elementer:**

```javascript
// Change an existing value
iceCreamFlavors[4] = "Butter Pecan";
console.log(iceCreamFlavors[4]); // "Butter Pecan"

// Add a new element at the end
iceCreamFlavors[5] = "Cookie Dough";
console.log(iceCreamFlavors[5]); // "Cookie Dough"
```

**I ovenstående har vi:**
- **Ændret** elementet ved indeks 4 fra "Rocky Road" til "Butter Pecan"
- **Tilføjet** et nyt element "Cookie Dough" ved indeks 5
- **Udvidet** arrayets længde automatisk ved at tilføje ud over de nuværende grænser

### Array-længde og almindelige metoder

Arrays kommer med indbyggede egenskaber og metoder, der gør arbejdet med data meget lettere.

**Find array-længde:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
console.log(iceCreamFlavors.length); // 5

// Length updates automatically as array changes
iceCreamFlavors.push("Mint Chip");
console.log(iceCreamFlavors.length); // 6
```

**Vigtige punkter at huske:**
- **Returnerer** det samlede antal elementer i arrayet
- **Opdateres** automatisk, når elementer tilføjes eller fjernes
- **Giver** en dynamisk optælling, der er nyttig til løkker og validering

**Væsentlige array-metoder:**

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

**Forståelse af disse metoder:**
- **Tilføjer** elementer med `push()` (slut) og `unshift()` (start)
- **Fjerner** elementer med `pop()` (slut) og `shift()` (start)
- **Finder** elementer med `indexOf()` og tjekker eksistens med `includes()`
- **Returnerer** nyttige værdier som fjernede elementer eller positionsindekser

✅ Prøv det selv! Brug din browsers konsol til at oprette og manipulere et array, du selv har lavet.

## Løkker

Tænk på den berømte straf fra Charles Dickens' romaner, hvor elever skulle skrive linjer gentagne gange på en tavle. Forestil dig, hvis du bare kunne instruere nogen til "skriv denne sætning 100 gange" og få det gjort automatisk. Det er præcis, hvad løkker gør for din kode.

Løkker er som at have en utrættelig assistent, der kan gentage opgaver uden fejl. Uanset om du skal tjekke hver vare i en indkøbskurv eller vise alle billeder i et album, håndterer løkker gentagelsen effektivt.

JavaScript tilbyder flere typer løkker at vælge imellem. Lad os undersøge hver enkelt og forstå, hvornår de skal bruges.

### For-løkke

`for`-løkken er som at sætte en timer - du ved præcis, hvor mange gange du vil have noget til at ske. Den er super organiseret og forudsigelig, hvilket gør den perfekt, når du arbejder med arrays eller skal tælle ting.

**For-løkke struktur:**

| Komponent | Formål | Eksempel |
|-----------|--------|----------|
| **Initialisering** | Sætter startpunkt | `let i = 0` |
| **Betingelse** | Hvornår skal den fortsætte | `i < 10` |
| **Inkrement** | Hvordan den opdateres | `i++` |

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

**Trin for trin, her er hvad der sker:**
- **Initialiserer** tæller-variablen `i` til 0 fra starten
- **Tjekker** betingelsen `i < 10` før hver iteration
- **Udfører** kodeblokken, når betingelsen er sand
- **Inkrementerer** `i` med 1 efter hver iteration med `i++`
- **Stopper**, når betingelsen bliver falsk (når `i` når 10)

✅ Kør denne kode i en browserkonsol. Hvad sker der, når du laver små ændringer i tælleren, betingelsen eller iterationsudtrykket? Kan du få den til at køre baglæns og lave en nedtælling?

### While-løkke

`while`-løkken er som at sige "bliv ved med at gøre dette indtil..." - du ved måske ikke præcis, hvor mange gange den vil køre, men du ved, hvornår den skal stoppe. Den er perfekt til ting som at bede en bruger om input, indtil de giver dig det, du har brug for, eller søge gennem data, indtil du finder det, du leder efter.

**While-løkke karakteristika:**
- **Fortsætter** med at køre, så længe betingelsen er sand
- **Kræver** manuel styring af eventuelle tæller-variabler
- **Tjekker** betingelsen før hver iteration
- **Risikerer** uendelige løkker, hvis betingelsen aldrig bliver falsk

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

**Forståelse af disse eksempler:**
- **Styrer** tæller-variablen `i` manuelt inde i løkkens krop
- **Inkrementerer** tælleren for at undgå uendelige løkker
- **Demonstrerer** praktisk anvendelse med brugerinput og begrænsning af forsøg
- **Inkluderer** sikkerhedsmekanismer for at forhindre endeløs udførelse

### Moderne løkkealternativer

JavaScript tilbyder moderne løkkesyntaks, der kan gøre din kode mere læsbar og mindre fejlbehæftet.

**For...of-løkke (ES6+):**

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

**Vigtige fordele ved for...of:**
- **Eliminerer** styring af indeks og potentielle fejl
- **Giver** direkte adgang til array-elementer
- **Forbedrer** kodelæsbarhed og reducerer syntaks-kompleksitet

**forEach-metode:**

```javascript
const prices = [9.99, 15.50, 22.75, 8.25];

// Using forEach for functional programming style
prices.forEach((price, index) => {
  console.log(`Item ${index + 1}: $${price.toFixed(2)}`);
});

// forEach with arrow functions for simple operations
prices.forEach(price => console.log(`Price: $${price}`));
```

**Hvad du skal vide om forEach:**
- **Udfører** en funktion for hvert array-element
- **Giver** både elementværdi og indeks som parametre
- **Kan ikke** stoppes tidligt (i modsætning til traditionelle løkker)
- **Returnerer** undefined (skaber ikke et nyt array)

✅ Hvorfor ville du vælge en for-løkke frem for en while-løkke? 17K læsere havde det samme spørgsmål på StackOverflow, og nogle af meningerne [kan være interessante for dig](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript).

## Løkker og Arrays

Kombinationen af arrays med løkker skaber kraftfulde databehandlingsmuligheder. Denne kombination er grundlæggende for mange programmeringsopgaver, fra visning af lister til beregning af statistikker.

**Traditionel array-behandling:**

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

**Lad os forstå hver tilgang:**
- **Bruger** array-længdeegenskaben til at bestemme løkkens grænse
- **Får adgang** til elementer via indeks i traditionelle for-løkker
- **Giver** direkte adgang til elementer i for...of-løkker
- **Behandler** hvert array-element præcist én gang

**Praktisk databehandlingseksempel:**

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

**Sådan fungerer denne kode:**
- **Initialiserer** sporingsvariabler for sum og ekstremer
- **Behandler** hver karakter med en enkelt effektiv løkke
- **Akkumulerer** det samlede for gennemsnitsberegning
- **Sporer** højeste og laveste værdier under iteration
- **Beregner** endelige statistikker efter løkkens afslutning

✅ Eksperimenter med at iterere over et array, du selv har lavet, i din browsers konsol.

---

## GitHub Copilot Agent Challenge 🚀

Brug Agent-mode til at fuldføre følgende udfordring:

**Beskrivelse:** Byg en omfattende databehandlingsfunktion, der kombinerer arrays og løkker for at analysere et datasæt og generere meningsfulde indsigter.

**Prompt:** Opret en funktion kaldet `analyzeGrades`, der tager et array af studenterkarakterobjekter (hver indeholder navn og score-egenskaber) og returnerer et objekt med statistikker, inklusive den højeste score, laveste score, gennemsnitsscore, antal studenter, der bestod (score >= 70), og et array af studenternavne, der scorede over gennemsnittet. Brug mindst to forskellige løkketyper i din løsning.

Læs mere om [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) her.

## 🚀 Udfordring

JavaScript tilbyder flere moderne array-metoder, der kan erstatte traditionelle løkker til specifikke opgaver. Udforsk [forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of), [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [filter](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), og [reduce](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce). 

**Din udfordring:** Refaktorer eksemplet med studenterkarakterer ved hjælp af mindst tre forskellige array-metoder. Bemærk, hvor meget renere og mere læsbar koden bliver med moderne JavaScript-syntaks.

## Quiz efter forelæsning
[Quiz efter forelæsning](https://ff-quizzes.netlify.app/web/quiz/14)


## Gennemgang & Selvstudie

Arrays i JavaScript har mange metoder knyttet til dem, som er ekstremt nyttige til datamanipulation. [Læs om disse metoder](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) og prøv nogle af dem (som push, pop, slice og splice) på et array, du selv har lavet.

## Opgave

[Iterér et Array](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi er ikke ansvarlige for eventuelle misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.