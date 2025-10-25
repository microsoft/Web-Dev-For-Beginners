<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9197f8af0fef9be6e81d4dbda23c7e7d",
  "translation_date": "2025-10-24T21:17:45+00:00",
  "source_file": "2-js-basics/4-arrays-loops/README.md",
  "language_code": "sk"
}
-->
# Základy JavaScriptu: Polia a cykly

![Základy JavaScriptu - Polia](../../../../translated_images/webdev101-js-arrays.439d7528b8a294558d0e4302e448d193f8ad7495cc407539cc81f1afe904b470.sk.png)
> Sketchnote od [Tomomi Imura](https://twitter.com/girlie_mac)

## Kvíz pred prednáškou
[Kvíz pred prednáškou](https://ff-quizzes.netlify.app/web/quiz/13)

Premýšľali ste niekedy nad tým, ako webové stránky sledujú položky v nákupnom košíku alebo zobrazujú zoznam vašich priateľov? Tu prichádzajú na rad polia a cykly. Polia sú ako digitálne kontajnery, ktoré uchovávajú viacero informácií, zatiaľ čo cykly vám umožňujú efektívne pracovať s týmito dátami bez opakovania kódu.

Spoločne tieto dva koncepty tvoria základ pre spracovanie informácií vo vašich programoch. Naučíte sa prejsť od manuálneho zapisovania každého kroku k vytváraniu inteligentného, efektívneho kódu, ktorý dokáže rýchlo spracovať stovky alebo dokonca tisíce položiek.

Na konci tejto lekcie pochopíte, ako zvládnuť zložité úlohy s dátami pomocou niekoľkých riadkov kódu. Poďme preskúmať tieto základné programovacie koncepty.

[![Polia](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "Polia")

[![Cykly](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "Cykly")

> 🎥 Kliknite na obrázky vyššie pre videá o poliach a cykloch.

> Túto lekciu si môžete prejsť na [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-arrays/?WT.mc_id=academic-77807-sagibbon)!

## Polia

Predstavte si polia ako digitálnu kartotéku - namiesto ukladania jedného dokumentu do každého šuplíka môžete organizovať viacero súvisiacich položiek v jednom štruktúrovanom kontajneri. V programovaní vám polia umožňujú uchovávať viacero informácií v jednom organizovanom balíku.

Či už vytvárate fotogalériu, spravujete zoznam úloh alebo sledujete najvyššie skóre v hre, polia poskytujú základ pre organizáciu dát. Pozrime sa, ako fungujú.

✅ Polia sú všade okolo nás! Dokážete si predstaviť reálny príklad poľa, napríklad pole solárnych panelov?

### Vytváranie polí

Vytvorenie poľa je veľmi jednoduché - stačí použiť hranaté zátvorky!

```javascript
// Empty array - like an empty shopping cart waiting for items
const myArray = [];
```

**Čo sa tu deje?**
Práve ste vytvorili prázdny kontajner pomocou hranatých zátvoriek `[]`. Predstavte si to ako prázdnu poličku v knižnici - je pripravená na uloženie akýchkoľvek kníh, ktoré tam chcete usporiadať.

Pole môžete tiež naplniť počiatočnými hodnotami hneď od začiatku:

```javascript
// Your ice cream shop's flavor menu
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// A user's profile info (mixing different types of data)
const userData = ["John", 25, true, "developer"];

// Test scores for your favorite class
const scores = [95, 87, 92, 78, 85];
```

**Zaujímavé veci na všimnutie:**
- V tom istom poli môžete uchovávať text, čísla alebo dokonca hodnoty true/false
- Stačí oddeliť každú položku čiarkou - jednoduché!
- Polia sú ideálne na uchovávanie súvisiacich informácií pohromade

### Indexovanie polí

Tu je niečo, čo sa na prvý pohľad môže zdať nezvyčajné: polia číslujú svoje položky od 0, nie od 1. Toto číslovanie od nuly má korene v tom, ako funguje pamäť počítača - je to programovací štandard už od počiatkov jazykov ako C. Každé miesto v poli dostane svoje vlastné číslo adresy nazývané **index**.

| Index | Hodnota | Popis |
|-------|---------|-------|
| 0 | "Čokoláda" | Prvý prvok |
| 1 | "Jahoda" | Druhý prvok |
| 2 | "Vanilka" | Tretí prvok |
| 3 | "Pistácia" | Štvrtý prvok |
| 4 | "Rocky Road" | Piaty prvok |

✅ Prekvapuje vás, že polia začínajú na indexe nula? V niektorých programovacích jazykoch indexy začínajú na 1. Je tu zaujímavá história, ktorú si môžete [prečítať na Wikipédii](https://en.wikipedia.org/wiki/Zero-based_numbering).

**Prístup k prvkom poľa:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// Access individual elements using bracket notation
console.log(iceCreamFlavors[0]); // "Chocolate" - first element
console.log(iceCreamFlavors[2]); // "Vanilla" - third element
console.log(iceCreamFlavors[4]); // "Rocky Road" - last element
```

**Rozklad toho, čo sa tu deje:**
- **Používa** notáciu hranatých zátvoriek s číslom indexu na prístup k prvkom
- **Vracia** hodnotu uloženú na konkrétnej pozícii v poli
- **Začína** počítať od 0, pričom prvý prvok má index 0

**Úprava prvkov poľa:**

```javascript
// Change an existing value
iceCreamFlavors[4] = "Butter Pecan";
console.log(iceCreamFlavors[4]); // "Butter Pecan"

// Add a new element at the end
iceCreamFlavors[5] = "Cookie Dough";
console.log(iceCreamFlavors[5]); // "Cookie Dough"
```

**V uvedenom príklade sme:**
- **Upravili** prvok na indexe 4 z "Rocky Road" na "Butter Pecan"
- **Pridali** nový prvok "Cookie Dough" na index 5
- **Automaticky rozšírili** dĺžku poľa pri pridávaní nad aktuálne hranice

### Dĺžka poľa a bežné metódy

Polia majú zabudované vlastnosti a metódy, ktoré uľahčujú prácu s dátami.

**Zistenie dĺžky poľa:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
console.log(iceCreamFlavors.length); // 5

// Length updates automatically as array changes
iceCreamFlavors.push("Mint Chip");
console.log(iceCreamFlavors.length); // 6
```

**Kľúčové body na zapamätanie:**
- **Vracia** celkový počet prvkov v poli
- **Automaticky sa aktualizuje** pri pridávaní alebo odstraňovaní prvkov
- **Poskytuje** dynamický počet užitočný pre cykly a validáciu

**Základné metódy poľa:**

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

**Pochopenie týchto metód:**
- **Pridáva** prvky pomocou `push()` (na koniec) a `unshift()` (na začiatok)
- **Odstraňuje** prvky pomocou `pop()` (z konca) a `shift()` (zo začiatku)
- **Vyhľadáva** prvky pomocou `indexOf()` a kontroluje existenciu pomocou `includes()`
- **Vracia** užitočné hodnoty ako odstránené prvky alebo indexy pozícií

✅ Vyskúšajte si to sami! Použite konzolu vášho prehliadača na vytvorenie a manipuláciu s vlastným poľom.

## Cykly

Predstavte si slávny trest z románov Charlesa Dickensa, kde študenti museli opakovane písať vety na tabuľu. Predstavte si, že by ste mohli jednoducho niekomu povedať: "Napíš túto vetu 100-krát" a bolo by to automaticky hotové. Presne to robia cykly pre váš kód.

Cykly sú ako neúnavný asistent, ktorý dokáže opakovať úlohy bez chyby. Či už potrebujete skontrolovať každú položku v nákupnom košíku alebo zobraziť všetky fotografie v albume, cykly efektívne zvládajú opakovanie.

JavaScript ponúka niekoľko typov cyklov, z ktorých si môžete vybrať. Poďme preskúmať každý z nich a pochopiť, kedy ich použiť.

### For cyklus

Cyklus `for` je ako nastavenie časovača - presne viete, koľkokrát chcete, aby sa niečo stalo. Je super organizovaný a predvídateľný, čo ho robí ideálnym, keď pracujete s poliami alebo potrebujete niečo počítať.

**Štruktúra for cyklu:**

| Komponent | Účel | Príklad |
|-----------|------|---------|
| **Inicializácia** | Nastaví počiatočný bod | `let i = 0` |
| **Podmienka** | Kedy pokračovať | `i < 10` |
| **Inkrementácia** | Ako aktualizovať | `i++` |

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

**Krok za krokom, čo sa tu deje:**
- **Inicializuje** premennú počítadla `i` na 0 na začiatku
- **Kontroluje** podmienku `i < 10` pred každou iteráciou
- **Vykonáva** blok kódu, keď je podmienka pravdivá
- **Inkrementuje** `i` o 1 po každej iterácii pomocou `i++`
- **Zastaví** sa, keď sa podmienka stane nepravdivou (keď `i` dosiahne 10)

✅ Spustite tento kód v konzole prehliadača. Čo sa stane, keď urobíte malé zmeny v počítadle, podmienke alebo výraze iterácie? Dokážete ho spustiť dozadu, vytvoriť odpočítavanie?

### While cyklus

Cyklus `while` je ako povedať "pokračuj v tom, kým..." - možno neviete presne, koľkokrát sa bude vykonávať, ale viete, kedy sa má zastaviť. Je ideálny na veci ako žiadanie používateľa o vstup, kým vám nedá, čo potrebujete, alebo hľadanie v dátach, kým nenájdete, čo hľadáte.

**Charakteristiky while cyklu:**
- **Pokračuje** vo vykonávaní, pokiaľ je podmienka pravdivá
- **Vyžaduje** manuálne spravovanie akýchkoľvek premenných počítadla
- **Kontroluje** podmienku pred každou iteráciou
- **Riziko** nekonečných cyklov, ak sa podmienka nikdy nestane nepravdivou

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

**Pochopenie týchto príkladov:**
- **Spravuje** premennú počítadla `i` manuálne vo vnútri tela cyklu
- **Inkrementuje** počítadlo, aby sa zabránilo nekonečným cyklom
- **Demonštruje** praktické použitie s používateľským vstupom a obmedzením pokusov
- **Zahŕňa** bezpečnostné mechanizmy na zabránenie nekonečnému vykonávaniu

### Moderné alternatívy cyklov

JavaScript ponúka modernú syntax cyklov, ktorá môže váš kód urobiť čitateľnejším a menej náchylným na chyby.

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

**Kľúčové výhody for...of:**
- **Eliminuje** správu indexov a potenciálne chyby o jeden index
- **Poskytuje** priamy prístup k prvkom poľa
- **Zlepšuje** čitateľnosť kódu a znižuje zložitosť syntaxe

**Metóda forEach:**

```javascript
const prices = [9.99, 15.50, 22.75, 8.25];

// Using forEach for functional programming style
prices.forEach((price, index) => {
  console.log(`Item ${index + 1}: $${price.toFixed(2)}`);
});

// forEach with arrow functions for simple operations
prices.forEach(price => console.log(`Price: $${price}`));
```

**Čo potrebujete vedieť o forEach:**
- **Vykonáva** funkciu pre každý prvok poľa
- **Poskytuje** hodnotu prvku aj index ako parametre
- **Nemožno** zastaviť predčasne (na rozdiel od tradičných cyklov)
- **Vracia** undefined (nevytvára nové pole)

✅ Prečo by ste si vybrali for cyklus namiesto while cyklu? 17K divákov malo rovnakú otázku na StackOverflow a niektoré názory [môžu byť pre vás zaujímavé](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript).

## Cykly a polia

Kombinácia polí s cyklami vytvára silné schopnosti spracovania dát. Táto kombinácia je základom mnohých programovacích úloh, od zobrazovania zoznamov až po výpočet štatistík.

**Tradičné spracovanie polí:**

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

**Poďme pochopiť každý prístup:**
- **Používa** vlastnosť dĺžky poľa na určenie hranice cyklu
- **Pristupuje** k prvkom podľa indexu v tradičných for cykloch
- **Poskytuje** priamy prístup k prvkom v for...of cykloch
- **Spracováva** každý prvok poľa presne raz

**Praktický príklad spracovania dát:**

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

**Takto funguje tento kód:**
- **Inicializuje** premenné na sledovanie súčtu a extrémov
- **Spracováva** každú známku jedným efektívnym cyklom
- **Akumuluje** celkový súčet na výpočet priemeru
- **Sleduje** najvyššie a najnižšie hodnoty počas iterácie
- **Vypočíta** konečné štatistiky po dokončení cyklu

✅ Experimentujte s cyklovaním cez pole, ktoré si sami vytvoríte, v konzole vášho prehliadača.

---

## GitHub Copilot Agent Výzva 🚀

Použite režim Agent na splnenie nasledujúcej výzvy:

**Popis:** Vytvorte komplexnú funkciu na spracovanie dát, ktorá kombinuje polia a cykly na analýzu datasetu a generovanie zmysluplných poznatkov.

**Výzva:** Vytvorte funkciu nazvanú `analyzeGrades`, ktorá prijíma pole objektov študentských známok (každý obsahuje vlastnosti name a score) a vracia objekt so štatistikami vrátane najvyššieho skóre, najnižšieho skóre, priemerného skóre, počtu študentov, ktorí prešli (score >= 70), a pole mien študentov, ktorí dosiahli nadpriemerné skóre. Použite aspoň dva rôzne typy cyklov vo vašom riešení.

Viac o [režime agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) sa dozviete tu.

## 🚀 Výzva

JavaScript ponúka niekoľko moderných metód polí, ktoré môžu nahradiť tradičné cykly pre konkrétne úlohy. Preskúmajte [forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of), [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [filter](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) a [reduce](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce). 

**Vaša výzva:** Refaktorujte príklad študentských známok pomocou aspoň troch rôznych metód polí. Všimnite si, o koľko čistejší a čitateľnejší sa kód stane s modernou syntaxou JavaScriptu.

## Kvíz po prednáške
[Kvíz po prednáške](https://ff-quizzes.netlify.app/web/quiz/14)

## Opakovanie a samostatné štúdium

Polia v JavaScripte majú mnoho metód, ktoré sú mimoriadne užitočné na manipuláciu s dátami. [Prečítajte si o týchto metódach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) a vyskúšajte niektoré z nich (ako push, pop, slice a splice) na poli, ktoré si sami vytvoríte.

## Zadanie

[Cyklovanie poľa](assignment.md)

---

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nie sme zodpovední za žiadne nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.