<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9197f8af0fef9be6e81d4dbda23c7e7d",
  "translation_date": "2025-10-25T00:19:06+00:00",
  "source_file": "2-js-basics/4-arrays-loops/README.md",
  "language_code": "sl"
}
-->
# Osnove JavaScripta: Tabele in Zanke

![Osnove JavaScripta - Tabele](../../../../translated_images/webdev101-js-arrays.439d7528b8a294558d0e4302e448d193f8ad7495cc407539cc81f1afe904b470.sl.png)
> Sketchnote avtorja [Tomomi Imura](https://twitter.com/girlie_mac)

## Predhodni kviz
[Predhodni kviz](https://ff-quizzes.netlify.app/web/quiz/13)

Ste se kdaj spraševali, kako spletne strani sledijo predmetom v nakupovalni košarici ali prikazujejo seznam vaših prijateljev? Tukaj pridejo v igro tabele in zanke. Tabele so kot digitalne posode, ki vsebujejo več kosov informacij, medtem ko vam zanke omogočajo učinkovito delo z vsemi temi podatki brez ponavljajoče se kode.

Skupaj ti dve koncepti tvorita osnovo za obdelavo informacij v vaših programih. Naučili se boste, kako preiti od ročnega pisanja vsakega koraka do ustvarjanja pametne, učinkovite kode, ki lahko hitro obdela na stotine ali celo tisoče elementov.

Do konca te lekcije boste razumeli, kako doseči kompleksne naloge obdelave podatkov z le nekaj vrsticami kode. Raziskujmo te ključne programerske koncepte.

[![Tabele](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "Tabele")

[![Zanke](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "Zanke")

> 🎥 Kliknite na zgornje slike za videoposnetke o tabelah in zankah.

> To lekcijo lahko opravite na [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-arrays/?WT.mc_id=academic-77807-sagibbon)!

## Tabele

Pomislite na tabele kot na digitalno omaro za dokumente - namesto da shranjujete en dokument na predal, lahko organizirate več povezanih elementov v eno samo strukturirano posodo. V programerskem smislu vam tabele omogočajo shranjevanje več kosov informacij v enem organiziranem paketu.

Ne glede na to, ali gradite galerijo fotografij, upravljate seznam opravil ali sledite najboljšim rezultatom v igri, tabele zagotavljajo osnovo za organizacijo podatkov. Poglejmo, kako delujejo.

✅ Tabele so povsod okoli nas! Ali lahko pomislite na primer iz resničnega življenja, kot je na primer niz sončnih panelov?

### Ustvarjanje tabel

Ustvarjanje tabele je zelo preprosto - uporabite le oglate oklepaje!

```javascript
// Empty array - like an empty shopping cart waiting for items
const myArray = [];
```

**Kaj se tukaj dogaja?**
Pravkar ste ustvarili prazno posodo z uporabo teh oglatih oklepajev `[]`. Pomislite na to kot na prazno knjižno polico - pripravljena je, da vanjo shranite karkoli želite.

Tabelo lahko napolnite tudi z začetnimi vrednostmi že od začetka:

```javascript
// Your ice cream shop's flavor menu
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// A user's profile info (mixing different types of data)
const userData = ["John", 25, true, "developer"];

// Test scores for your favorite class
const scores = [95, 87, 92, 78, 85];
```

**Kul stvari, ki jih je treba opaziti:**
- V isto tabelo lahko shranite besedilo, številke ali celo vrednosti true/false
- Samo ločite vsak element z vejico - enostavno!
- Tabele so popolne za shranjevanje povezanih informacij skupaj

### Indeksiranje tabel

Tukaj je nekaj, kar se vam na začetku morda zdi nenavadno: tabele številčijo svoje elemente, začenši z 0, ne z 1. To indeksiranje, ki se začne z ničlo, ima korenine v delovanju računalniškega pomnilnika - to je programerska konvencija že od zgodnjih dni programskih jezikov, kot je C. Vsakemu mestu v tabeli je dodeljena lastna številka naslova, imenovana **indeks**.

| Indeks | Vrednost | Opis |
|--------|----------|-------|
| 0 | "Čokolada" | Prvi element |
| 1 | "Jagoda" | Drugi element |
| 2 | "Vanilija" | Tretji element |
| 3 | "Pistacija" | Četrti element |
| 4 | "Rocky Road" | Peti element |

✅ Vas preseneča, da tabele začnejo z ničelnim indeksom? V nekaterih programskih jezikih indeksi začnejo z 1. Obstaja zanimiva zgodovina o tem, ki jo lahko [preberete na Wikipediji](https://en.wikipedia.org/wiki/Zero-based_numbering).

**Dostop do elementov tabele:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// Access individual elements using bracket notation
console.log(iceCreamFlavors[0]); // "Chocolate" - first element
console.log(iceCreamFlavors[2]); // "Vanilla" - third element
console.log(iceCreamFlavors[4]); // "Rocky Road" - last element
```

**Razčlenitev dogajanja tukaj:**
- **Uporablja** notacijo z oglatimi oklepaji z indeksom za dostop do elementov
- **Vrne** vrednost, shranjeno na določenem mestu v tabeli
- **Začne** šteti od 0, kar pomeni, da je prvi element indeks 0

**Spreminjanje elementov tabele:**

```javascript
// Change an existing value
iceCreamFlavors[4] = "Butter Pecan";
console.log(iceCreamFlavors[4]); // "Butter Pecan"

// Add a new element at the end
iceCreamFlavors[5] = "Cookie Dough";
console.log(iceCreamFlavors[5]); // "Cookie Dough"
```

**V zgornjem primeru smo:**
- **Spremenili** element na indeksu 4 iz "Rocky Road" v "Butter Pecan"
- **Dodali** nov element "Cookie Dough" na indeksu 5
- **Samodejno razširili** dolžino tabele pri dodajanju elementov izven trenutnih meja

### Dolžina tabele in pogoste metode

Tabele imajo vgrajene lastnosti in metode, ki močno olajšajo delo s podatki.

**Iskanje dolžine tabele:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
console.log(iceCreamFlavors.length); // 5

// Length updates automatically as array changes
iceCreamFlavors.push("Mint Chip");
console.log(iceCreamFlavors.length); // 6
```

**Ključne točke za zapomniti:**
- **Vrne** skupno število elementov v tabeli
- **Samodejno se posodobi**, ko se elementi dodajajo ali odstranjujejo
- **Nudi** dinamično štetje, ki je uporabno za zanke in validacijo

**Osnovne metode tabel:**

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

**Razumevanje teh metod:**
- **Dodaja** elemente z `push()` (na konec) in `unshift()` (na začetek)
- **Odstranjuje** elemente z `pop()` (na koncu) in `shift()` (na začetku)
- **Poišče** elemente z `indexOf()` in preveri obstoj z `includes()`
- **Vrne** uporabne vrednosti, kot so odstranjeni elementi ali indeksi položajev

✅ Poskusite sami! Uporabite konzolo svojega brskalnika za ustvarjanje in spreminjanje tabele po svoji izbiri.

## Zanke

Pomislite na znano kazen iz romanov Charlesa Dickensa, kjer so morali učenci večkrat zapisati stavke na tablico. Predstavljajte si, da bi lahko nekomu preprosto naročili: "Zapiši ta stavek 100-krat" in bi bilo to samodejno opravljeno. Točno to počnejo zanke za vašo kodo.

Zanke so kot neumorni pomočnik, ki lahko ponavlja naloge brez napak. Ne glede na to, ali morate preveriti vsak predmet v nakupovalni košarici ali prikazati vse fotografije v albumu, zanke učinkovito obvladujejo ponavljanje.

JavaScript ponuja več vrst zank, med katerimi lahko izbirate. Poglejmo vsako posebej in razumimo, kdaj jih uporabiti.

### Zanka For

Zanka `for` je kot nastavitev časovnika - točno veste, kolikokrat želite, da se nekaj zgodi. Je zelo organizirana in predvidljiva, kar jo naredi popolno, ko delate s tabelami ali morate nekaj prešteti.

**Struktura zanke For:**

| Komponenta | Namen | Primer |
|------------|-------|--------|
| **Inicializacija** | Nastavi začetno točko | `let i = 0` |
| **Pogoj** | Kdaj nadaljevati | `i < 10` |
| **Inkrement** | Kako posodobiti | `i++` |

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

**Korak za korakom, kaj se dogaja:**
- **Inicializira** števec spremenljivke `i` na 0 na začetku
- **Preveri** pogoj `i < 10` pred vsako iteracijo
- **Izvede** blok kode, ko je pogoj resničen
- **Poveča** `i` za 1 po vsaki iteraciji z `i++`
- **Ustavi**, ko pogoj postane napačen (ko `i` doseže 10)

✅ Zaženite to kodo v konzoli brskalnika. Kaj se zgodi, ko naredite majhne spremembe števca, pogoja ali izraza za iteracijo? Ali lahko naredite, da deluje nazaj, kot odštevanje?

### Zanka While

Zanka `while` je kot reči "nadaljuj s tem, dokler..." - morda ne veste točno, kolikokrat se bo zagnala, vendar veste, kdaj se bo ustavila. Je popolna za stvari, kot so zahteva po vnosu uporabnika, dokler ne dobite, kar potrebujete, ali iskanje po podatkih, dokler ne najdete, kar iščete.

**Značilnosti zanke While:**
- **Nadaljuje** izvajanje, dokler je pogoj resničen
- **Zahteva** ročno upravljanje vseh spremenljivk števca
- **Preveri** pogoj pred vsako iteracijo
- **Tvega** neskončne zanke, če pogoj nikoli ne postane napačen

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

**Razumevanje teh primerov:**
- **Upravlja** števec spremenljivke `i` ročno znotraj telesa zanke
- **Poveča** števec, da prepreči neskončne zanke
- **Prikazuje** praktično uporabo z uporabniškim vnosom in omejevanjem poskusov
- **Vključuje** varnostne mehanizme za preprečevanje neskončnega izvajanja

### Sodobne alternative zank

JavaScript ponuja sodobno sintakso zank, ki lahko naredi vašo kodo bolj berljivo in manj nagnjeno k napakam.

**Zanka For...of (ES6+):**

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
- **Odpravlja** upravljanje indeksov in morebitne napake pri štetju
- **Omogoča** neposreden dostop do elementov tabele
- **Izboljša** berljivost kode in zmanjša kompleksnost sintakse

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

**Kaj morate vedeti o forEach:**
- **Izvede** funkcijo za vsak element tabele
- **Omogoča** dostop do vrednosti elementa in indeksa kot parametrov
- **Ne more** biti predčasno ustavljena (za razliko od tradicionalnih zank)
- **Vrne** undefined (ne ustvari nove tabele)

✅ Zakaj bi izbrali zanko for namesto zanke while? 17.000 gledalcev je imelo isto vprašanje na StackOverflow, nekatera mnenja [bi vas lahko zanimala](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript).

## Zanke in tabele

Združevanje tabel z zankami ustvarja močne zmogljivosti za obdelavo podatkov. Ta kombinacija je temelj mnogih programerskih nalog, od prikazovanja seznamov do izračunavanja statistike.

**Tradicionalna obdelava tabel:**

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

**Razumimo vsak pristop:**
- **Uporablja** lastnost dolžine tabele za določanje meje zanke
- **Dostopa** do elementov po indeksu v tradicionalnih zankah for
- **Omogoča** neposreden dostop do elementov v zankah for...of
- **Obdeluje** vsak element tabele natanko enkrat

**Praktičen primer obdelave podatkov:**

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

**Kako deluje ta koda:**
- **Inicializira** sledilne spremenljivke za vsoto in skrajnosti
- **Obdeluje** vsako oceno z eno učinkovito zanko
- **Sešteva** skupno za izračun povprečja
- **Sledi** najvišjim in najnižjim vrednostim med iteracijo
- **Izračuna** končne statistike po zaključku zanke

✅ Eksperimentirajte z zanko čez tabelo, ki ste jo sami ustvarili v konzoli brskalnika.

---

## GitHub Copilot Agent izziv 🚀

Uporabite način Agent za dokončanje naslednjega izziva:

**Opis:** Zgradite celovito funkcijo za obdelavo podatkov, ki združuje tabele in zanke za analizo nabora podatkov ter generiranje smiselnih vpogledov.

**Navodilo:** Ustvarite funkcijo z imenom `analyzeGrades`, ki sprejme tabelo objektov z ocenami študentov (vsak vsebuje lastnosti ime in ocena) ter vrne objekt s statistiko, vključno z najvišjo oceno, najnižjo oceno, povprečno oceno, številom študentov, ki so opravili (ocena >= 70), in tabelo imen študentov, ki so dosegli nadpovprečne ocene. V svoji rešitvi uporabite vsaj dve različni vrsti zank.

Več o [načinu agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) si preberite tukaj.

## 🚀 Izziv

JavaScript ponuja več sodobnih metod tabel, ki lahko nadomestijo tradicionalne zanke za specifične naloge. Raziščite [forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of), [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [filter](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) in [reduce](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce). 

**Vaš izziv:** Preoblikujte primer ocen študentov z uporabo vsaj treh različnih metod tabel. Opazite, kako postane koda s sodobno sintakso JavaScripta bolj čista in berljiva.

## Kviz po predavanju
[Kviz po predavanju](https://ff-quizzes.netlify.app/web/quiz/14)

## Pregled in samostojno učenje

Tabele v JavaScriptu imajo veliko metod, ki so izjemno uporabne za manipulacijo podatkov. [Preberite več o teh metodah](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) in poskusite nekatere od njih (kot so push, pop, slice in splice) na tabeli, ki jo sami ustvarite.

## Naloga

[Zanka čez tabelo](assignment.md)

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje z umetno inteligenco [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne prevzemamo odgovornosti za morebitne nesporazume ali napačne razlage, ki bi nastale zaradi uporabe tega prevoda.