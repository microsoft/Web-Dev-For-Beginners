<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9197f8af0fef9be6e81d4dbda23c7e7d",
  "translation_date": "2025-10-24T23:48:53+00:00",
  "source_file": "2-js-basics/4-arrays-loops/README.md",
  "language_code": "hr"
}
-->
# Osnove JavaScripta: Nizovi i petlje

![Osnove JavaScripta - Nizovi](../../../../translated_images/webdev101-js-arrays.439d7528b8a294558d0e4302e448d193f8ad7495cc407539cc81f1afe904b470.hr.png)
> Sketchnote autorice [Tomomi Imura](https://twitter.com/girlie_mac)

## Kviz prije predavanja
[Kviz prije predavanja](https://ff-quizzes.netlify.app/web/quiz/13)

Jeste li se ikada pitali kako web stranice prate stavke u košarici ili prikazuju popis vaših prijatelja? Tu dolaze nizovi i petlje. Nizovi su poput digitalnih spremnika koji drže više informacija, dok vam petlje omogućuju da učinkovito radite s tim podacima bez ponavljanja koda.

Zajedno, ova dva koncepta čine temelj za rukovanje informacijama u vašim programima. Naučit ćete kako prijeći s ručnog pisanja svakog koraka na stvaranje pametnog, učinkovitog koda koji može brzo obraditi stotine ili čak tisuće stavki.

Do kraja ove lekcije, razumjet ćete kako obaviti složene zadatke s podacima koristeći samo nekoliko redaka koda. Istražimo ove ključne koncepte programiranja.

[![Nizovi](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "Nizovi")

[![Petlje](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "Petlje")

> 🎥 Kliknite na slike iznad za videozapise o nizovima i petljama.

> Ovu lekciju možete pronaći na [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-arrays/?WT.mc_id=academic-77807-sagibbon)!

## Nizovi

Zamislite nizove kao digitalni ormarić za dokumente - umjesto da pohranite jedan dokument po ladici, možete organizirati više povezanih stavki u jednom strukturiranom spremniku. U programskom smislu, nizovi vam omogućuju pohranu više informacija u jednom organiziranom paketu.

Bez obzira gradite li galeriju fotografija, upravljate popisom obaveza ili pratite najbolje rezultate u igri, nizovi pružaju temelj za organizaciju podataka. Pogledajmo kako funkcioniraju.

✅ Nizovi su svuda oko nas! Možete li smisliti primjer stvarnog života koji uključuje niz, poput niza solarnih panela?

### Kreiranje nizova

Kreiranje niza je vrlo jednostavno - samo koristite uglate zagrade!

```javascript
// Empty array - like an empty shopping cart waiting for items
const myArray = [];
```

**Što se ovdje događa?**
Upravo ste stvorili prazan spremnik koristeći te uglate zagrade `[]`. Zamislite to kao praznu policu u knjižnici - spremna je za pohranu bilo kojih knjiga koje želite tamo organizirati.

Također možete odmah popuniti svoj niz početnim vrijednostima:

```javascript
// Your ice cream shop's flavor menu
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// A user's profile info (mixing different types of data)
const userData = ["John", 25, true, "developer"];

// Test scores for your favorite class
const scores = [95, 87, 92, 78, 85];
```

**Zanimljive stvari koje treba primijetiti:**
- Možete pohraniti tekst, brojeve ili čak vrijednosti istinito/netočno u istom nizu
- Samo odvojite svaku stavku zarezom - jednostavno!
- Nizovi su savršeni za držanje povezanih informacija na jednom mjestu

### Indeksiranje nizova

Evo nečega što vam se na početku može činiti neobičnim: nizovi numeriraju svoje stavke počevši od 0, a ne od 1. Ovo indeksiranje koje počinje od nule ima korijene u načinu na koji računalna memorija funkcionira - to je konvencija programiranja još od ranih dana programskih jezika poput C-a. Svako mjesto u nizu dobiva svoj broj adrese koji se naziva **indeks**.

| Indeks | Vrijednost | Opis |
|--------|------------|------|
| 0 | "Čokolada" | Prvi element |
| 1 | "Jagoda" | Drugi element |
| 2 | "Vanilija" | Treći element |
| 3 | "Pistacija" | Četvrti element |
| 4 | "Rocky Road" | Peti element |

✅ Iznenađuje li vas da nizovi počinju s indeksom nula? U nekim programskim jezicima indeksi počinju od 1. Postoji zanimljiva povijest o tome, koju možete [pročitati na Wikipediji](https://en.wikipedia.org/wiki/Zero-based_numbering).

**Pristup elementima niza:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// Access individual elements using bracket notation
console.log(iceCreamFlavors[0]); // "Chocolate" - first element
console.log(iceCreamFlavors[2]); // "Vanilla" - third element
console.log(iceCreamFlavors[4]); // "Rocky Road" - last element
```

**Razlaganje onoga što se ovdje događa:**
- **Koristi** notaciju s uglatim zagradama i brojem indeksa za pristup elementima
- **Vraća** vrijednost pohranjenu na određenoj poziciji u nizu
- **Počinje** brojati od 0, čineći prvi element indeksom 0

**Modificiranje elemenata niza:**

```javascript
// Change an existing value
iceCreamFlavors[4] = "Butter Pecan";
console.log(iceCreamFlavors[4]); // "Butter Pecan"

// Add a new element at the end
iceCreamFlavors[5] = "Cookie Dough";
console.log(iceCreamFlavors[5]); // "Cookie Dough"
```

**U gornjem primjeru smo:**
- **Modificirali** element na indeksu 4 iz "Rocky Road" u "Butter Pecan"
- **Dodali** novi element "Cookie Dough" na indeksu 5
- **Automatski proširili** duljinu niza dodavanjem izvan trenutnih granica

### Duljina niza i uobičajene metode

Nizovi dolaze s ugrađenim svojstvima i metodama koje olakšavaju rad s podacima.

**Pronalaženje duljine niza:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
console.log(iceCreamFlavors.length); // 5

// Length updates automatically as array changes
iceCreamFlavors.push("Mint Chip");
console.log(iceCreamFlavors.length); // 6
```

**Ključne točke za zapamtiti:**
- **Vraća** ukupan broj elemenata u nizu
- **Ažurira** se automatski kada se elementi dodaju ili uklone
- **Pruža** dinamičko brojanje korisno za petlje i provjeru valjanosti

**Osnovne metode niza:**

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

**Razumijevanje ovih metoda:**
- **Dodaje** elemente s `push()` (na kraju) i `unshift()` (na početku)
- **Uklanja** elemente s `pop()` (na kraju) i `shift()` (na početku)
- **Pronalazi** elemente s `indexOf()` i provjerava postojanje s `includes()`
- **Vraća** korisne vrijednosti poput uklonjenih elemenata ili indeksa pozicije

✅ Isprobajte sami! Koristite konzolu vašeg preglednika za kreiranje i manipulaciju nizom koji sami osmislite.

## Petlje

Sjetite se poznate kazne iz romana Charlesa Dickensa gdje su učenici morali ponavljati rečenice na ploči. Zamislite da možete jednostavno nekome reći "napiši ovu rečenicu 100 puta" i da se to automatski obavi. To je upravo ono što petlje rade za vaš kod.

Petlje su poput neumornog asistenta koji može ponavljati zadatke bez greške. Bez obzira trebate li provjeriti svaku stavku u košarici ili prikazati sve fotografije u albumu, petlje učinkovito rješavaju ponavljanje.

JavaScript nudi nekoliko vrsta petlji koje možete odabrati. Pogledajmo svaku od njih i razumimo kada ih koristiti.

### For petlja

`for` petlja je poput postavljanja timera - točno znate koliko puta želite da se nešto dogodi. Super je organizirana i predvidljiva, što je čini savršenom kada radite s nizovima ili trebate nešto brojati.

**Struktura for petlje:**

| Komponenta | Svrha | Primjer |
|------------|-------|---------|
| **Inicijalizacija** | Postavlja početnu točku | `let i = 0` |
| **Uvjet** | Kada nastaviti | `i < 10` |
| **Inkrement** | Kako ažurirati | `i++` |

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

**Korak po korak, evo što se događa:**
- **Inicijalizira** varijablu brojača `i` na 0 na početku
- **Provjerava** uvjet `i < 10` prije svake iteracije
- **Izvršava** blok koda kada je uvjet istinit
- **Inkrementira** `i` za 1 nakon svake iteracije s `i++`
- **Zaustavlja** se kada uvjet postane lažan (kada `i` dosegne 10)

✅ Pokrenite ovaj kod u konzoli preglednika. Što se događa kada napravite male promjene u brojaču, uvjetu ili izrazu za iteraciju? Možete li ga natjerati da radi unatrag, stvarajući odbrojavanje?

### While petlja

`while` petlja je poput izreke "nastavi raditi ovo dok..." - možda ne znate točno koliko puta će se izvršiti, ali znate kada treba stati. Savršena je za stvari poput traženja unosa od korisnika dok ne dobijete ono što trebate ili pretraživanja podataka dok ne pronađete ono što tražite.

**Karakteristike while petlje:**
- **Nastavlja** se izvršavati dok je uvjet istinit
- **Zahtijeva** ručno upravljanje bilo kojim varijablama brojača
- **Provjerava** uvjet prije svake iteracije
- **Rizikuje** beskonačne petlje ako uvjet nikada ne postane lažan

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

**Razumijevanje ovih primjera:**
- **Upravlja** varijablom brojača `i` ručno unutar tijela petlje
- **Inkrementira** brojač kako bi spriječio beskonačne petlje
- **Demonstrira** praktičnu upotrebu s unosom korisnika i ograničenjem pokušaja
- **Uključuje** sigurnosne mehanizme za sprječavanje beskonačnog izvršavanja

### Moderni alternativni oblici petlji

JavaScript nudi modernu sintaksu petlji koja može učiniti vaš kod čitljivijim i manje sklonim greškama.

**For...of petlja (ES6+):**

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

**Ključne prednosti for...of:**
- **Eliminira** upravljanje indeksima i potencijalne greške u brojanju
- **Pruža** direktan pristup elementima niza
- **Poboljšava** čitljivost koda i smanjuje složenost sintakse

**Metoda forEach:**

```javascript
const prices = [9.99, 15.50, 22.75, 8.25];

// Using forEach for functional programming style
prices.forEach((price, index) => {
  console.log(`Item ${index + 1}: $${price.toFixed(2)}`);
});

// forEach with arrow functions for simple operations
prices.forEach(price => console.log(`Price: $${price}`));
```

**Što trebate znati o forEach:**
- **Izvršava** funkciju za svaki element niza
- **Pruža** vrijednost elementa i indeks kao parametre
- **Ne može** se zaustaviti prije vremena (za razliku od tradicionalnih petlji)
- **Vraća** undefined (ne stvara novi niz)

✅ Zašto biste odabrali for petlju umjesto while petlje? 17 tisuća gledatelja imalo je isto pitanje na StackOverflowu, a neka od mišljenja [mogla bi vas zanimati](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript).

## Petlje i nizovi

Kombiniranje nizova s petljama stvara moćne mogućnosti obrade podataka. Ova kombinacija je temelj mnogih programskih zadataka, od prikazivanja popisa do izračunavanja statistike.

**Tradicionalna obrada nizova:**

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

**Razumimo svaki pristup:**
- **Koristi** svojstvo duljine niza za određivanje granice petlje
- **Pristupa** elementima prema indeksu u tradicionalnim for petljama
- **Pruža** direktan pristup elementima u for...of petljama
- **Obrađuje** svaki element niza točno jednom

**Praktičan primjer obrade podataka:**

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

**Evo kako ovaj kod funkcionira:**
- **Inicijalizira** varijable za praćenje zbroja i ekstremnih vrijednosti
- **Obrađuje** svaku ocjenu jednom učinkovitom petljom
- **Akumulira** ukupni zbroj za izračun prosjeka
- **Prati** najviše i najniže vrijednosti tijekom iteracije
- **Izračunava** konačnu statistiku nakon završetka petlje

✅ Eksperimentirajte s iteracijom kroz niz koji sami osmislite u konzoli vašeg preglednika.

---

## Izazov GitHub Copilot Agent 🚀

Koristite Agent način rada za dovršavanje sljedećeg izazova:

**Opis:** Izradite sveobuhvatnu funkciju za obradu podataka koja kombinira nizove i petlje kako bi analizirala skup podataka i generirala značajne uvide.

**Zadatak:** Kreirajte funkciju pod nazivom `analyzeGrades` koja prima niz objekata s ocjenama učenika (svaki sadrži svojstva name i score) i vraća objekt sa statistikama, uključujući najvišu ocjenu, najnižu ocjenu, prosječnu ocjenu, broj učenika koji su prošli (score >= 70) i niz imena učenika koji su postigli iznadprosječne ocjene. Koristite barem dvije različite vrste petlji u svom rješenju.

Više o [agent načinu rada](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) saznajte ovdje.

## 🚀 Izazov

JavaScript nudi nekoliko modernih metoda za rad s nizovima koje mogu zamijeniti tradicionalne petlje za specifične zadatke. Istražite [forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of), [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [filter](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) i [reduce](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce). 

**Vaš izazov:** Refaktorirajte primjer s ocjenama učenika koristeći barem tri različite metode za rad s nizovima. Primijetite koliko čišći i čitljiviji kod postaje s modernom sintaksom JavaScripta.

## Kviz nakon predavanja
[Kviz nakon predavanja](https://ff-quizzes.netlify.app/web/quiz/14)

## Pregled i samostalno učenje

Nizovi u JavaScriptu imaju mnogo metoda koje su izuzetno korisne za manipulaciju podacima. [Pročitajte više o tim metodama](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) i isprobajte neke od njih (poput push, pop, slice i splice) na nizu koji sami osmislite.

## Zadatak

[Prođite kroz niz](assignment.md)

---

**Odricanje od odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne odgovaramo za nesporazume ili pogrešna tumačenja koja mogu proizaći iz korištenja ovog prijevoda.