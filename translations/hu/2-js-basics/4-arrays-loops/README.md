<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9197f8af0fef9be6e81d4dbda23c7e7d",
  "translation_date": "2025-10-24T19:51:37+00:00",
  "source_file": "2-js-basics/4-arrays-loops/README.md",
  "language_code": "hu"
}
-->
# JavaScript Alapok: Tömbök és Ciklusok

![JavaScript Alapok - Tömbök](../../../../translated_images/webdev101-js-arrays.439d7528b8a294558d0e4302e448d193f8ad7495cc407539cc81f1afe904b470.hu.png)
> Sketchnote készítette: [Tomomi Imura](https://twitter.com/girlie_mac)

## Előadás előtti kvíz
[Előadás előtti kvíz](https://ff-quizzes.netlify.app/web/quiz/13)

Gondolkodtál már azon, hogyan követik nyomon a weboldalak a bevásárlókosár tartalmát, vagy hogyan jelenítik meg a barátlistádat? Itt jönnek képbe a tömbök és a ciklusok. A tömbök olyan digitális tárolók, amelyek több információt is képesek tárolni, míg a ciklusok lehetővé teszik, hogy hatékonyan dolgozz ezekkel az adatokkal anélkül, hogy ismétlődő kódot írnál.

Együtt ez a két fogalom az alapja annak, hogy programjaidban információkat kezelj. Megtanulod, hogyan lépj túl azon, hogy minden egyes lépést kézzel írsz le, és hogyan hozz létre okos, hatékony kódot, amely gyorsan képes több száz vagy akár több ezer elemet feldolgozni.

Az óra végére megérted, hogyan lehet összetett adatkezelési feladatokat megoldani mindössze néhány sor kóddal. Nézzük meg ezeket az alapvető programozási fogalmakat.

[![Tömbök](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "Tömbök")

[![Ciklusok](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "Ciklusok")

> 🎥 Kattints a fenti képekre a tömbökről és ciklusokról szóló videókért.

> Ezt az órát elérheted a [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-arrays/?WT.mc_id=academic-77807-sagibbon) oldalon!

## Tömbök

Gondolj a tömbökre úgy, mint egy digitális iratszekrényre - ahelyett, hogy minden fiókban egyetlen dokumentumot tárolnál, több kapcsolódó elemet is rendszerezhetsz egyetlen, strukturált tárolóban. Programozási szempontból a tömbök lehetővé teszik, hogy több információt tárolj egyetlen rendezett csomagban.

Akár egy fotógalériát építesz, egy teendőlistát kezelsz, vagy egy játékban a legmagasabb pontszámokat követed, a tömbök biztosítják az adatok rendszerezésének alapját. Nézzük meg, hogyan működnek.

✅ A tömbök mindenhol ott vannak! Tudsz mondani egy valós példát egy tömbre, például egy napelem tömbre?

### Tömbök létrehozása

Egy tömb létrehozása nagyon egyszerű - csak használj szögletes zárójeleket!

```javascript
// Empty array - like an empty shopping cart waiting for items
const myArray = [];
```

**Mi történik itt?**
Most hoztál létre egy üres tárolót ezekkel a szögletes zárójelekkel `[]`. Gondolj rá úgy, mint egy üres könyvtári polcra - készen áll arra, hogy bármilyen könyvet elhelyezz rajta.

A tömböt már az elején feltöltheted kezdeti értékekkel is:

```javascript
// Your ice cream shop's flavor menu
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// A user's profile info (mixing different types of data)
const userData = ["John", 25, true, "developer"];

// Test scores for your favorite class
const scores = [95, 87, 92, 78, 85];
```

**Érdekes dolgok, amiket észrevehetsz:**
- Szöveget, számokat vagy akár igaz/hamis értékeket is tárolhatsz ugyanabban a tömbben
- Csak vesszővel válaszd el az egyes elemeket - egyszerű!
- A tömbök tökéletesek arra, hogy kapcsolódó információkat együtt tarts

### Tömbök indexelése

Itt van valami, ami először szokatlannak tűnhet: a tömbök az elemeket 0-tól kezdve számozzák, nem 1-től. Ez a nullás indexelés a számítógépes memória működéséből ered - ez egy programozási konvenció, amely a korai számítógépes nyelvek, például a C óta létezik. A tömb minden egyes helye saját cím számot kap, amit **indexnek** nevezünk.

| Index | Érték | Leírás |
|-------|-------|-------------|
| 0 | "Csokoládé" | Első elem |
| 1 | "Eper" | Második elem |
| 2 | "Vanília" | Harmadik elem |
| 3 | "Pisztácia" | Negyedik elem |
| 4 | "Rocky Road" | Ötödik elem |

✅ Meglep, hogy a tömbök nullás indexelést használnak? Néhány programozási nyelvben az indexek 1-től kezdődnek. Ennek érdekes története van, amit [elolvashatsz a Wikipédián](https://en.wikipedia.org/wiki/Zero-based_numbering).

**Tömb elemek elérése:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// Access individual elements using bracket notation
console.log(iceCreamFlavors[0]); // "Chocolate" - first element
console.log(iceCreamFlavors[2]); // "Vanilla" - third element
console.log(iceCreamFlavors[4]); // "Rocky Road" - last element
```

**Mi történik itt részletesen:**
- **Használja** a szögletes zárójel jelölést az index számmal az elemek eléréséhez
- **Visszaadja** az adott pozícióban tárolt értéket
- **Nullától kezd** számolni, így az első elem indexe 0

**Tömb elemek módosítása:**

```javascript
// Change an existing value
iceCreamFlavors[4] = "Butter Pecan";
console.log(iceCreamFlavors[4]); // "Butter Pecan"

// Add a new element at the end
iceCreamFlavors[5] = "Cookie Dough";
console.log(iceCreamFlavors[5]); // "Cookie Dough"
```

**A fentiekben:**
- **Módosítottuk** a 4-es indexű elemet "Rocky Road"-ról "Butter Pecan"-ra
- **Hozzáadtunk** egy új elemet "Cookie Dough"-t az 5-ös indexhez
- **Automatikusan bővült** a tömb hossza, amikor a jelenlegi határokon túl adtunk hozzá elemet

### Tömb hossza és gyakori metódusok

A tömbök beépített tulajdonságokkal és metódusokkal rendelkeznek, amelyek megkönnyítik az adatok kezelését.

**Tömb hosszának meghatározása:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
console.log(iceCreamFlavors.length); // 5

// Length updates automatically as array changes
iceCreamFlavors.push("Mint Chip");
console.log(iceCreamFlavors.length); // 6
```

**Fontos pontok, amiket meg kell jegyezni:**
- **Visszaadja** a tömbben lévő elemek teljes számát
- **Automatikusan frissül**, amikor elemeket adunk hozzá vagy távolítunk el
- **Dinamikus számot biztosít**, ami hasznos ciklusokhoz és érvényesítéshez

**Alapvető tömb metódusok:**

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

**Ezeket a metódusokat érdemes megérteni:**
- **Hozzáad** elemeket a `push()` (végére) és `unshift()` (elejére) segítségével
- **Eltávolít** elemeket a `pop()` (végéről) és `shift()` (elejéről) segítségével
- **Megkeresi** az elemeket az `indexOf()` segítségével, és ellenőrzi a létezést az `includes()` segítségével
- **Visszaad** hasznos értékeket, például eltávolított elemeket vagy pozíció indexeket

✅ Próbáld ki magad! Használd a böngésződ konzolját, hogy létrehozz és manipulálj egy saját tömböt.

## Ciklusok

Gondolj Charles Dickens híres büntetésére, ahol a diákoknak többször kellett ugyanazt a mondatot felírniuk egy palatáblára. Képzeld el, ha egyszerűen utasíthatnád valakit, hogy "írd le ezt a mondatot 100-szor", és automatikusan elvégezné. Pontosan ezt teszik a ciklusok a kódodban.

A ciklusok olyanok, mint egy fáradhatatlan asszisztens, aki hibátlanul ismétli a feladatokat. Akár minden elemet ellenőrizni kell egy bevásárlókosárban, akár az album összes fotóját meg kell jeleníteni, a ciklusok hatékonyan kezelik az ismétlést.

A JavaScript többféle ciklust kínál, amelyek közül választhatsz. Nézzük meg mindegyiket, és értsük meg, mikor érdemes használni őket.

### For ciklus

A `for` ciklus olyan, mint egy időzítő beállítása - pontosan tudod, hányszor szeretnéd, hogy valami megtörténjen. Szuper szervezett és kiszámítható, ami tökéletes, ha tömbökkel dolgozol vagy dolgokat kell megszámolnod.

**For ciklus szerkezete:**

| Összetevő | Cél | Példa |
|-----------|---------|----------|
| **Inicializálás** | Kezdőpont beállítása | `let i = 0` |
| **Feltétel** | Mikor folytatódjon | `i < 10` |
| **Növelés** | Hogyan frissüljön | `i++` |

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

**Lépésről lépésre, mi történik itt:**
- **Inicializálja** a számláló változót `i` 0-ra az elején
- **Ellenőrzi** a feltételt `i < 10` minden iteráció előtt
- **Végrehajtja** a kódblokkot, ha a feltétel igaz
- **Növeli** `i` értékét 1-gyel minden iteráció után `i++` segítségével
- **Leáll**, amikor a feltétel hamis lesz (amikor `i` eléri a 10-et)

✅ Futtasd ezt a kódot a böngésződ konzoljában. Mi történik, ha apró változtatásokat teszel a számlálóban, feltételben vagy iterációs kifejezésben? Tudsz visszafelé futtatni, visszaszámlálást létrehozva?

### While ciklus

A `while` ciklus olyan, mintha azt mondanád: "folytasd ezt, amíg..." - lehet, hogy nem tudod pontosan, hányszor fog futni, de tudod, mikor kell megállnia. Tökéletes olyan dolgokhoz, mint például a felhasználótól való bemenet kéréséhez, amíg meg nem kapod, amit szeretnél, vagy adatok kereséséhez, amíg meg nem találod, amit keresel.

**While ciklus jellemzői:**
- **Folytatja** a végrehajtást, amíg a feltétel igaz
- **Kézi kezelést igényel** bármilyen számláló változóhoz
- **Ellenőrzi** a feltételt minden iteráció előtt
- **Kockázatot jelent** végtelen ciklusok esetén, ha a feltétel soha nem válik hamissá

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

**Ezeket az példákat megértve:**
- **Kezeli** a számláló változót `i` manuálisan a ciklus testében
- **Növeli** a számlálót, hogy elkerülje a végtelen ciklusokat
- **Gyakorlati példát mutat** felhasználói bemenettel és próbálkozási korlátozással
- **Biztonsági mechanizmusokat tartalmaz**, hogy elkerülje a végtelen végrehajtást

### Modern ciklus alternatívák

A JavaScript modern ciklus szintaxist kínál, amely olvashatóbbá és kevésbé hibázóvá teszi a kódot.

**For...of ciklus (ES6+):**

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

**A for...of előnyei:**
- **Kiküszöböli** az index kezelését és a potenciális egyel elcsúszott hibákat
- **Közvetlen hozzáférést biztosít** a tömb elemeihez
- **Javítja** a kód olvashatóságát és csökkenti a szintaxis bonyolultságát

**forEach metódus:**

```javascript
const prices = [9.99, 15.50, 22.75, 8.25];

// Using forEach for functional programming style
prices.forEach((price, index) => {
  console.log(`Item ${index + 1}: $${price.toFixed(2)}`);
});

// forEach with arrow functions for simple operations
prices.forEach(price => console.log(`Price: $${price}`));
```

**Amit tudni kell a forEach-ről:**
- **Végrehajt** egy függvényt minden tömb elemre
- **Biztosítja** az elem értékét és indexét paraméterként
- **Nem állítható meg** korán (ellentétben a hagyományos ciklusokkal)
- **Visszaad** undefined értéket (nem hoz létre új tömböt)

✅ Miért választanál for ciklust a while ciklus helyett? 17K nézőnek volt ugyanilyen kérdése a StackOverflow-n, és néhány vélemény [érdekes lehet számodra](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript).

## Ciklusok és tömbök

A tömbök és ciklusok kombinálása erőteljes adatfeldolgozási képességeket hoz létre. Ez a párosítás alapvető számos programozási feladathoz, a listák megjelenítésétől a statisztikák kiszámításáig.

**Hagyományos tömbfeldolgozás:**

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

**Értsük meg az egyes megközelítéseket:**
- **Használja** a tömb hossz tulajdonságát a ciklus határának meghatározásához
- **Eléri** az elemeket index alapján a hagyományos for ciklusokban
- **Közvetlen hozzáférést biztosít** az elemekhez a for...of ciklusokban
- **Pontosan egyszer dolgozza fel** minden tömb elemet

**Gyakorlati adatfeldolgozási példa:**

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

**Így működik ez a kód:**
- **Inicializálja** a nyomkövetési változókat az összeghez és szélsőségekhez
- **Feldolgozza** minden egyes osztályzatot egyetlen hatékony ciklussal
- **Felhalmozza** az összeset az átlag kiszámításához
- **Nyomon követi** a legmagasabb és legalacsonyabb értékeket az iteráció során
- **Kiszámítja** a végső statisztikákat a ciklus befejezése után

✅ Kísérletezz azzal, hogy egy saját tömböt iterálsz a böngésződ konzoljában.

---

## GitHub Copilot Agent Kihívás 🚀

Használd az Agent módot a következő kihívás teljesítéséhez:

**Leírás:** Hozz létre egy átfogó adatfeldolgozó függvényt, amely tömböket és ciklusokat kombinálva elemez egy adathalmazt, és értelmes betekintéseket generál.

**Feladat:** Hozz létre egy `analyzeGrades` nevű függvényt, amely egy diák osztályzatokat tartalmazó tömböt vesz (mindegyik név és pontszám tulajdonságokat tartalmaz), és visszaad egy objektumot statisztikákkal, beleértve a legmagasabb pontszámot, legalacsonyabb pontszámot, átlagos pontszámot, a sikeres diákok számát (pontszám >= 70), és egy tömböt a diákok neveivel, akik az átlag felett teljesítettek. Használj legalább két különböző ciklust a megoldásban.

További információ az [agent módról](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) itt.

## 🚀 Kihívás

A JavaScript számos modern tömb metódust kínál, amelyek helyettesíthetik a hagyományos ciklusokat bizonyos feladatokhoz. Fedezd fel a [forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of), [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [filter](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), és [reduce](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) metódusokat.

**A kihívásod:** Refaktoráld a diák osztályzatok példát legalább három különböző tömb metódus használatával. Figyeld meg, mennyivel tisztább és olvashatóbb lesz a kód a modern JavaScript szintaxissal.

## Előadás utáni kvíz
[Előadás utáni kvíz](https://ff-quizzes.netlify.app/web/quiz/14)


## Áttekintés és önálló tanulás



---

**Felelősség kizárása**:  
Ez a dokumentum az AI fordítási szolgáltatás [Co-op Translator](https://github.com/Azure/co-op-translator) segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.