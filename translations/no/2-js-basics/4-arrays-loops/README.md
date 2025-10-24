<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9197f8af0fef9be6e81d4dbda23c7e7d",
  "translation_date": "2025-10-23T22:16:55+00:00",
  "source_file": "2-js-basics/4-arrays-loops/README.md",
  "language_code": "no"
}
-->
# Grunnleggende JavaScript: Arrays og Løkker

![Grunnleggende JavaScript - Arrays](../../../../translated_images/webdev101-js-arrays.439d7528b8a294558d0e4302e448d193f8ad7495cc407539cc81f1afe904b470.no.png)
> Sketchnote av [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz før forelesning
[Quiz før forelesning](https://ff-quizzes.netlify.app/web/quiz/13)

Har du noen gang lurt på hvordan nettsider holder styr på varer i handlekurven eller viser vennelisten din? Det er her arrays og løkker kommer inn. Arrays er som digitale beholdere som lagrer flere informasjonsbiter, mens løkker lar deg jobbe med all denne dataen effektivt uten å måtte skrive repetitiv kode.

Sammen utgjør disse to konseptene grunnlaget for å håndtere informasjon i programmene dine. Du vil lære å gå fra å manuelt skrive ut hvert enkelt trinn til å lage smart, effektiv kode som kan behandle hundrevis eller til og med tusenvis av elementer raskt.

Ved slutten av denne leksjonen vil du forstå hvordan du kan utføre komplekse databehandlingsoppgaver med bare noen få linjer kode. La oss utforske disse essensielle programmeringskonseptene.

[![Arrays](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "Arrays")

[![Løkker](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "Løkker")

> 🎥 Klikk på bildene ovenfor for videoer om arrays og løkker.

> Du kan ta denne leksjonen på [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-arrays/?WT.mc_id=academic-77807-sagibbon)!

## Arrays

Tenk på arrays som et digitalt arkivskap - i stedet for å lagre ett dokument per skuff, kan du organisere flere relaterte elementer i en enkelt, strukturert beholder. I programmering lar arrays deg lagre flere informasjonsbiter i én organisert pakke.

Enten du bygger et fotogalleri, administrerer en oppgaveliste eller holder styr på poengsummer i et spill, gir arrays grunnlaget for dataorganisering. La oss se hvordan de fungerer.

✅ Arrays er overalt! Kan du komme på et eksempel fra virkeligheten, som en solcellepanel-array?

### Opprette Arrays

Å opprette en array er superenkelt - bruk bare firkantede parenteser!

```javascript
// Empty array - like an empty shopping cart waiting for items
const myArray = [];
```

**Hva skjer her?**
Du har nettopp opprettet en tom beholder ved hjelp av de firkantede parentesene `[]`. Tenk på det som en tom bokhylle - den er klar til å holde hvilke som helst bøker du vil organisere der.

Du kan også fylle arrayen med startverdier med en gang:

```javascript
// Your ice cream shop's flavor menu
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// A user's profile info (mixing different types of data)
const userData = ["John", 25, true, "developer"];

// Test scores for your favorite class
const scores = [95, 87, 92, 78, 85];
```

**Kule ting å merke seg:**
- Du kan lagre tekst, tall eller til og med sann/usann-verdier i samme array
- Bare skill hvert element med et komma - enkelt!
- Arrays er perfekte for å holde relatert informasjon samlet

### Array-indeksering

Her er noe som kanskje virker uvanlig i starten: arrays nummererer elementene sine fra 0, ikke 1. Denne nullbaserte indekseringen har sine røtter i hvordan dataminne fungerer - det har vært en programmeringskonvensjon siden de tidlige dagene av programmeringsspråk som C. Hver plass i arrayen får sitt eget adressenummer kalt en **indeks**.

| Indeks | Verdi | Beskrivelse |
|--------|-------|-------------|
| 0 | "Sjokolade" | Første element |
| 1 | "Jordbær" | Andre element |
| 2 | "Vanilje" | Tredje element |
| 3 | "Pistasj" | Fjerde element |
| 4 | "Rocky Road" | Femte element |

✅ Overrasker det deg at arrays starter på nullindeks? I noen programmeringsspråk starter indekser på 1. Det finnes en interessant historie rundt dette, som du kan [lese på Wikipedia](https://en.wikipedia.org/wiki/Zero-based_numbering).

**Tilgang til Array-elementer:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// Access individual elements using bracket notation
console.log(iceCreamFlavors[0]); // "Chocolate" - first element
console.log(iceCreamFlavors[2]); // "Vanilla" - third element
console.log(iceCreamFlavors[4]); // "Rocky Road" - last element
```

**Hva skjer her:**
- **Bruker** firkantet parentesnotasjon med indeksnummer for å få tilgang til elementer
- **Returnerer** verdien lagret på den spesifikke posisjonen i arrayen
- **Starter** tellingen fra 0, som gjør det første elementet indeks 0

**Endring av Array-elementer:**

```javascript
// Change an existing value
iceCreamFlavors[4] = "Butter Pecan";
console.log(iceCreamFlavors[4]); // "Butter Pecan"

// Add a new element at the end
iceCreamFlavors[5] = "Cookie Dough";
console.log(iceCreamFlavors[5]); // "Cookie Dough"
```

**I eksempelet ovenfor har vi:**
- **Endret** elementet på indeks 4 fra "Rocky Road" til "Butter Pecan"
- **Lagt til** et nytt element "Cookie Dough" på indeks 5
- **Utvidet** arrayens lengde automatisk når vi legger til utover nåværende grenser

### Array-lengde og vanlige metoder

Arrays kommer med innebygde egenskaper og metoder som gjør det mye enklere å jobbe med data.

**Finne Array-lengde:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
console.log(iceCreamFlavors.length); // 5

// Length updates automatically as array changes
iceCreamFlavors.push("Mint Chip");
console.log(iceCreamFlavors.length); // 6
```

**Viktige punkter å huske:**
- **Returnerer** det totale antallet elementer i arrayen
- **Oppdateres** automatisk når elementer legges til eller fjernes
- **Gir** en dynamisk telling som er nyttig for løkker og validering

**Essensielle Array-metoder:**

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

**Forstå disse metodene:**
- **Legger til** elementer med `push()` (slutt) og `unshift()` (start)
- **Fjerner** elementer med `pop()` (slutt) og `shift()` (start)
- **Lokaliserer** elementer med `indexOf()` og sjekker eksistens med `includes()`
- **Returnerer** nyttige verdier som fjernede elementer eller posisjonsindekser

✅ Prøv det selv! Bruk nettleserens konsoll for å opprette og manipulere en array du lager selv.

## Løkker

Tenk på den berømte straffen fra Charles Dickens' romaner der elever måtte skrive linjer gjentatte ganger på en tavle. Tenk om du bare kunne instruere noen til "skriv denne setningen 100 ganger" og få det gjort automatisk. Det er akkurat det løkker gjør for koden din.

Løkker er som å ha en utrettelig assistent som kan gjenta oppgaver uten feil. Enten du trenger å sjekke hvert element i en handlekurv eller vise alle bildene i et album, håndterer løkker repetisjonen effektivt.

JavaScript tilbyr flere typer løkker å velge mellom. La oss undersøke hver av dem og forstå når de skal brukes.

### For-løkke

`for`-løkka er som å sette en timer - du vet nøyaktig hvor mange ganger du vil at noe skal skje. Den er superorganisert og forutsigbar, noe som gjør den perfekt når du jobber med arrays eller trenger å telle ting.

**Struktur for For-løkke:**

| Komponent | Formål | Eksempel |
|-----------|--------|----------|
| **Initialisering** | Setter startpunkt | `let i = 0` |
| **Betingelse** | Når den skal fortsette | `i < 10` |
| **Inkrement** | Hvordan oppdatere | `i++` |

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

**Trinn for trinn, her er hva som skjer:**
- **Initialiserer** tellevariabelen `i` til 0 i starten
- **Sjekker** betingelsen `i < 10` før hver iterasjon
- **Utfører** kodeblokken når betingelsen er sann
- **Inkrementerer** `i` med 1 etter hver iterasjon med `i++`
- **Stopper** når betingelsen blir usann (når `i` når 10)

✅ Kjør denne koden i en nettleserkonsoll. Hva skjer når du gjør små endringer i telleren, betingelsen eller iterasjonsuttrykket? Kan du få den til å kjøre baklengs, som en nedtelling?

### While-løkke

`while`-løkka er som å si "fortsett med dette til..." - du vet kanskje ikke nøyaktig hvor mange ganger den vil kjøre, men du vet når den skal stoppe. Den er perfekt for ting som å be en bruker om input til de gir deg det du trenger, eller søke gjennom data til du finner det du leter etter.

**Kjennetegn ved While-løkke:**
- **Fortsetter** å kjøre så lenge betingelsen er sann
- **Krever** manuell håndtering av eventuelle tellevariabler
- **Sjekker** betingelsen før hver iterasjon
- **Risikerer** uendelige løkker hvis betingelsen aldri blir usann

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

**Forstå disse eksemplene:**
- **Håndterer** tellevariabelen `i` manuelt inne i løkkens kropp
- **Inkrementerer** telleren for å forhindre uendelige løkker
- **Demonstrerer** praktisk bruk med brukerinput og begrensning av forsøk
- **Inkluderer** sikkerhetsmekanismer for å forhindre endeløs kjøring

### Moderne løkkealternativer

JavaScript tilbyr moderne løkkesyntaks som kan gjøre koden din mer lesbar og mindre feilutsatt.

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

**Viktige fordeler med for...of:**
- **Eliminerer** indeksstyring og potensielle feil med én avvik
- **Gir** direkte tilgang til array-elementer
- **Forbedrer** kodelesbarhet og reduserer syntakskompleksitet

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

**Hva du trenger å vite om forEach:**
- **Utfører** en funksjon for hvert array-element
- **Gir** både elementverdi og indeks som parametere
- **Kan ikke** stoppes tidlig (i motsetning til tradisjonelle løkker)
- **Returnerer** undefined (lager ikke en ny array)

✅ Hvorfor ville du valgt en for-løkke kontra en while-løkke? 17K lesere hadde det samme spørsmålet på StackOverflow, og noen av meningene [kan være interessante for deg](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript).

## Løkker og Arrays

Å kombinere arrays med løkker skaper kraftige databehandlingsmuligheter. Denne kombinasjonen er grunnleggende for mange programmeringsoppgaver, fra å vise lister til å beregne statistikk.

**Tradisjonell Array-behandling:**

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

**La oss forstå hver tilnærming:**
- **Bruker** arrayens lengdeegenskap for å bestemme løkkens grense
- **Får tilgang til** elementer via indeks i tradisjonelle for-løkker
- **Gir** direkte elementtilgang i for...of-løkker
- **Behandler** hvert array-element nøyaktig én gang

**Praktisk eksempel på databehandling:**

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

**Slik fungerer denne koden:**
- **Initialiserer** sporingsvariabler for sum og ytterpunkter
- **Behandler** hver karakter med en enkelt effektiv løkke
- **Akkumulerer** totalen for gjennomsnittsberegning
- **Sporer** høyeste og laveste verdier under iterasjon
- **Beregner** endelige statistikker etter løkkens fullføring

✅ Eksperimenter med å iterere over en array du lager selv i nettleserens konsoll.

---

## GitHub Copilot Agent-utfordring 🚀

Bruk Agent-modus for å fullføre følgende utfordring:

**Beskrivelse:** Bygg en omfattende databehandlingsfunksjon som kombinerer arrays og løkker for å analysere et datasett og generere meningsfulle innsikter.

**Prompt:** Lag en funksjon kalt `analyzeGrades` som tar en array av studentkarakterobjekter (hver inneholder navn og score-egenskaper) og returnerer et objekt med statistikk inkludert høyeste score, laveste score, gjennomsnittsscore, antall studenter som bestod (score >= 70), og en array av studentnavn som scoret over gjennomsnittet. Bruk minst to forskjellige løkketyper i løsningen din.

Lær mer om [agent-modus](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) her.

## 🚀 Utfordring

JavaScript tilbyr flere moderne array-metoder som kan erstatte tradisjonelle løkker for spesifikke oppgaver. Utforsk [forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of), [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [filter](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), og [reduce](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce). 

**Din utfordring:** Refaktorer eksempelet med studentkarakterer ved å bruke minst tre forskjellige array-metoder. Legg merke til hvor mye renere og mer lesbar koden blir med moderne JavaScript-syntaks.

## Quiz etter forelesning
[Quiz etter forelesning](https://ff-quizzes.netlify.app/web/quiz/14)


## Gjennomgang og selvstudium

Arrays i JavaScript har mange metoder knyttet til seg, som er ekstremt nyttige for datamanipulering. [Les om disse metodene](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) og prøv noen av dem (som push, pop, slice og splice) på en array du lager selv.

## Oppgave

[Iterer en Array](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på dets opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for eventuelle misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.