<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9197f8af0fef9be6e81d4dbda23c7e7d",
  "translation_date": "2025-10-24T20:42:07+00:00",
  "source_file": "2-js-basics/4-arrays-loops/README.md",
  "language_code": "cs"
}
-->
# Základy JavaScriptu: Pole a cykly

![Základy JavaScriptu - Pole](../../../../translated_images/webdev101-js-arrays.439d7528b8a294558d0e4302e448d193f8ad7495cc407539cc81f1afe904b470.cs.png)
> Sketchnote od [Tomomi Imura](https://twitter.com/girlie_mac)

## Kvíz před lekcí
[Kvíz před lekcí](https://ff-quizzes.netlify.app/web/quiz/13)

Přemýšleli jste někdy, jak webové stránky sledují položky v nákupním košíku nebo zobrazují seznam vašich přátel? Právě zde přicházejí na řadu pole a cykly. Pole jsou jako digitální kontejnery, které uchovávají více informací, zatímco cykly vám umožňují efektivně pracovat s těmito daty bez opakovaného kódu.

Společně tyto dva koncepty tvoří základ pro práci s informacemi ve vašich programech. Naučíte se přejít od ručního psaní každého kroku k vytváření chytrého a efektivního kódu, který dokáže rychle zpracovat stovky nebo dokonce tisíce položek.

Na konci této lekce pochopíte, jak zvládnout složité úkoly s daty pomocí několika málo řádků kódu. Pojďme prozkoumat tyto základní programovací koncepty.

[![Pole](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "Pole")

[![Cykly](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "Cykly")

> 🎥 Klikněte na obrázky výše pro videa o polích a cyklech.

> Tuto lekci si můžete projít na [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-arrays/?WT.mc_id=academic-77807-sagibbon)!

## Pole

Představte si pole jako digitální kartotéku - místo toho, abyste ukládali jeden dokument do každé zásuvky, můžete organizovat více souvisejících položek v jednom strukturovaném kontejneru. V programování vám pole umožňují ukládat více informací do jednoho organizovaného balíčku.

Ať už vytváříte fotogalerii, spravujete seznam úkolů nebo sledujete nejvyšší skóre ve hře, pole poskytují základ pro organizaci dat. Podívejme se, jak fungují.

✅ Pole jsou všude kolem nás! Dokážete si představit příklad pole z reálného života, například pole solárních panelů?

### Vytváření polí

Vytvoření pole je velmi jednoduché - stačí použít hranaté závorky!

```javascript
// Empty array - like an empty shopping cart waiting for items
const myArray = [];
```

**Co se zde děje?**
Právě jste vytvořili prázdný kontejner pomocí těchto hranatých závorek `[]`. Představte si to jako prázdnou knihovnu - je připravena uchovávat jakékoliv knihy, které tam chcete uspořádat.

Pole můžete také naplnit počátečními hodnotami hned od začátku:

```javascript
// Your ice cream shop's flavor menu
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// A user's profile info (mixing different types of data)
const userData = ["John", 25, true, "developer"];

// Test scores for your favorite class
const scores = [95, 87, 92, 78, 85];
```

**Zajímavé věci, které si všimnout:**
- Můžete ukládat text, čísla nebo dokonce hodnoty true/false do stejného pole
- Stačí oddělit každou položku čárkou - snadné!
- Pole jsou ideální pro uchovávání souvisejících informací pohromadě

### Indexování polí

Zde je něco, co se může zpočátku zdát neobvyklé: pole číslují své položky od 0, nikoliv od 1. Toto číslování od nuly má své kořeny v tom, jak funguje paměť počítače - je to programovací konvence od počátků programovacích jazyků jako C. Každé místo v poli dostane své vlastní číslo adresy nazývané **index**.

| Index | Hodnota | Popis |
|-------|---------|-------|
| 0 | "Čokoláda" | První prvek |
| 1 | "Jahoda" | Druhý prvek |
| 2 | "Vanilka" | Třetí prvek |
| 3 | "Pistácie" | Čtvrtý prvek |
| 4 | "Rocky Road" | Pátý prvek |

✅ Překvapuje vás, že pole začínají na indexu nula? V některých programovacích jazycích začínají indexy na 1. Je zde zajímavá historie, kterou si můžete [přečíst na Wikipedii](https://en.wikipedia.org/wiki/Zero-based_numbering).

**Přístup k prvkům pole:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// Access individual elements using bracket notation
console.log(iceCreamFlavors[0]); // "Chocolate" - first element
console.log(iceCreamFlavors[2]); // "Vanilla" - third element
console.log(iceCreamFlavors[4]); // "Rocky Road" - last element
```

**Rozbor toho, co se zde děje:**
- **Používá** notaci hranatých závorek s číslem indexu pro přístup k prvkům
- **Vrací** hodnotu uloženou na konkrétní pozici v poli
- **Začíná** počítat od 0, což dělá první prvek indexem 0

**Úprava prvků pole:**

```javascript
// Change an existing value
iceCreamFlavors[4] = "Butter Pecan";
console.log(iceCreamFlavors[4]); // "Butter Pecan"

// Add a new element at the end
iceCreamFlavors[5] = "Cookie Dough";
console.log(iceCreamFlavors[5]); // "Cookie Dough"
```

**V uvedeném příkladu jsme:**
- **Upravili** prvek na indexu 4 z "Rocky Road" na "Butter Pecan"
- **Přidali** nový prvek "Cookie Dough" na index 5
- **Automaticky rozšířili** délku pole při přidání nad aktuální hranice

### Délka pole a běžné metody

Pole mají vestavěné vlastnosti a metody, které usnadňují práci s daty.

**Zjištění délky pole:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
console.log(iceCreamFlavors.length); // 5

// Length updates automatically as array changes
iceCreamFlavors.push("Mint Chip");
console.log(iceCreamFlavors.length); // 6
```

**Klíčové body k zapamatování:**
- **Vrací** celkový počet prvků v poli
- **Aktualizuje** se automaticky při přidání nebo odebrání prvků
- **Poskytuje** dynamický počet užitečný pro cykly a validaci

**Základní metody pole:**

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

**Porozumění těmto metodám:**
- **Přidává** prvky pomocí `push()` (na konec) a `unshift()` (na začátek)
- **Odstraňuje** prvky pomocí `pop()` (z konce) a `shift()` (ze začátku)
- **Vyhledává** prvky pomocí `indexOf()` a kontroluje existenci pomocí `includes()`
- **Vrací** užitečné hodnoty jako odstraněné prvky nebo pozice indexů

✅ Vyzkoušejte si to sami! Použijte konzoli svého prohlížeče k vytvoření a manipulaci s polem podle svého výběru.

## Cykly

Představte si slavný trest z románů Charlese Dickense, kde studenti museli opakovaně psát věty na tabulku. Představte si, že byste mohli jednoduše někomu říct "napiš tuto větu 100krát" a bylo by to automaticky hotovo. Přesně to dělají cykly pro váš kód.

Cykly jsou jako mít neúnavného asistenta, který může opakovat úkoly bez chyb. Ať už potřebujete zkontrolovat každou položku v nákupním košíku nebo zobrazit všechny fotografie v albu, cykly zvládnou opakování efektivně.

JavaScript nabízí několik typů cyklů, ze kterých si můžete vybrat. Podívejme se na každý z nich a pochopme, kdy je použít.

### For cyklus

Cyklus `for` je jako nastavení časovače - přesně víte, kolikrát chcete, aby se něco stalo. Je velmi organizovaný a předvídatelný, což ho činí ideálním, když pracujete s poli nebo potřebujete něco počítat.

**Struktura cyklu for:**

| Komponenta | Účel | Příklad |
|------------|------|---------|
| **Inicializace** | Nastaví počáteční bod | `let i = 0` |
| **Podmínka** | Kdy pokračovat | `i < 10` |
| **Inkrementace** | Jak aktualizovat | `i++` |

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

**Krok za krokem, co se zde děje:**
- **Inicializuje** proměnnou počítadla `i` na 0 na začátku
- **Kontroluje** podmínku `i < 10` před každou iterací
- **Provádí** blok kódu, když je podmínka pravdivá
- **Inkrementuje** `i` o 1 po každé iteraci pomocí `i++`
- **Zastaví** se, když se podmínka stane nepravdivou (když `i` dosáhne 10)

✅ Spusťte tento kód v konzoli prohlížeče. Co se stane, když provedete malé změny v počítadle, podmínce nebo výrazu iterace? Dokážete ho přimět, aby běžel pozpátku, vytvářející odpočet?

### While cyklus

Cyklus `while` je jako říct "pokračuj v tom, dokud..." - možná nevíte přesně, kolikrát poběží, ale víte, kdy se zastaví. Je ideální pro věci jako požadování vstupu od uživatele, dokud vám nedá, co potřebujete, nebo prohledávání dat, dokud nenajdete, co hledáte.

**Charakteristiky cyklu while:**
- **Pokračuje** v provádění, dokud je podmínka pravdivá
- **Vyžaduje** ruční správu jakýchkoliv proměnných počítadla
- **Kontroluje** podmínku před každou iterací
- **Riziko** nekonečných cyklů, pokud se podmínka nikdy nestane nepravdivou

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

**Porozumění těmto příkladům:**
- **Spravuje** proměnnou počítadla `i` ručně uvnitř těla cyklu
- **Inkrementuje** počítadlo, aby se zabránilo nekonečným cyklům
- **Demonstruje** praktické použití s uživatelským vstupem a omezením pokusů
- **Zahrnuje** bezpečnostní mechanismy, aby se zabránilo nekonečnému provádění

### Moderní alternativy cyklů

JavaScript nabízí moderní syntaxi cyklů, která může váš kód učinit čitelnějším a méně náchylným k chybám.

**For...of cyklus (ES6+):**

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

**Klíčové výhody for...of:**
- **Eliminuje** správu indexů a potenciální chyby o jeden index
- **Poskytuje** přímý přístup k prvkům pole
- **Zlepšuje** čitelnost kódu a snižuje složitost syntaxe

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

**Co potřebujete vědět o forEach:**
- **Provádí** funkci pro každý prvek pole
- **Poskytuje** hodnotu prvku i index jako parametry
- **Nelze** ji předčasně zastavit (na rozdíl od tradičních cyklů)
- **Vrací** undefined (nevytváří nové pole)

✅ Proč byste si vybrali cyklus for oproti cyklu while? 17 tisíc uživatelů mělo stejnou otázku na StackOverflow a některé názory [by vás mohly zajímat](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript).

## Cykly a pole

Kombinace polí s cykly vytváří silné schopnosti zpracování dat. Toto spojení je základem mnoha programovacích úkolů, od zobrazování seznamů po výpočet statistik.

**Tradiční zpracování pole:**

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

**Pojďme pochopit každý přístup:**
- **Používá** vlastnost délky pole k určení hranice cyklu
- **Přistupuje** k prvkům podle indexu v tradičních cyklech for
- **Poskytuje** přímý přístup k prvkům v cyklech for...of
- **Zpracovává** každý prvek pole přesně jednou

**Praktický příklad zpracování dat:**

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

**Jak tento kód funguje:**
- **Inicializuje** sledovací proměnné pro součet a extrémy
- **Zpracovává** každou známku jedním efektivním cyklem
- **Akumuluje** celkový součet pro výpočet průměru
- **Sleduje** nejvyšší a nejnižší hodnoty během iterace
- **Vypočítává** konečné statistiky po dokončení cyklu

✅ Experimentujte s iterací přes pole podle svého výběru v konzoli prohlížeče.

---

## GitHub Copilot Agent Challenge 🚀

Použijte režim Agent k dokončení následující výzvy:

**Popis:** Vytvořte komplexní funkci pro zpracování dat, která kombinuje pole a cykly k analýze datové sady a generování smysluplných poznatků.

**Zadání:** Vytvořte funkci nazvanou `analyzeGrades`, která přijímá pole objektů s výsledky studentů (každý obsahuje vlastnosti name a score) a vrací objekt se statistikami, včetně nejvyššího skóre, nejnižšího skóre, průměrného skóre, počtu studentů, kteří prošli (score >= 70), a pole jmen studentů, kteří dosáhli nadprůměrného skóre. Ve svém řešení použijte alespoň dva různé typy cyklů.

Zjistěte více o [režimu agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) zde.

## 🚀 Výzva

JavaScript nabízí několik moderních metod pro práci s poli, které mohou nahradit tradiční cykly pro specifické úkoly. Prozkoumejte [forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of), [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [filter](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) a [reduce](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce). 

**Vaše výzva:** Přepracujte příklad se známkami studentů pomocí alespoň tří různých metod pro práci s poli. Všimněte si, jak se kód stává čistším a čitelnějším díky moderní syntaxi JavaScriptu.

## Kvíz po lekci
[Kvíz po lekci](https://ff-quizzes.netlify.app/web/quiz/14)

## Opakování a samostudium

Pole v JavaScriptu mají mnoho metod, které jsou velmi užitečné pro manipulaci s daty. [Přečtěte si o těchto metodách](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) a vyzkoušejte některé z nich (například push, pop, slice a splice) na poli podle svého výběru.

## Úkol

[Iterace přes pole](assignment.md)

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlad [Co-op Translator](https://github.com/Azure/co-op-translator). I když se snažíme o přesnost, mějte prosím na paměti, že automatické překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.