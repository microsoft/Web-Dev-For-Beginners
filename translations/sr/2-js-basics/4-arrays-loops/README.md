<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9197f8af0fef9be6e81d4dbda23c7e7d",
  "translation_date": "2025-10-24T23:03:29+00:00",
  "source_file": "2-js-basics/4-arrays-loops/README.md",
  "language_code": "sr"
}
-->
# Основе JavaScript-a: Низови и петље

![Основе JavaScript-a - Низови](../../../../translated_images/webdev101-js-arrays.439d7528b8a294558d0e4302e448d193f8ad7495cc407539cc81f1afe904b470.sr.png)
> Скетч од [Tomomi Imura](https://twitter.com/girlie_mac)

## Квиз пре предавања
[Квиз пре предавања](https://ff-quizzes.netlify.app/web/quiz/13)

Да ли сте се икада запитали како веб-сајтови прате ставке у вашој корпи за куповину или приказују листу ваших пријатеља? Ту на сцену ступају низови и петље. Низови су као дигитални контејнери који чувају више информација, док вам петље омогућавају да ефикасно радите са тим подацима без понављања кода.

Заједно, ова два концепта чине основу за обраду информација у вашим програмима. Научићете како да пређете са ручног писања сваког корака на креирање паметног, ефикасног кода који може брзо да обради стотине или чак хиљаде ставки.

До краја овог часа, разумећете како да обавите сложене задатке са подацима уз само неколико линија кода. Хајде да истражимо ове основне програмске концепте.

[![Низови](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "Низови")

[![Петље](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "Петље")

> 🎥 Кликните на слике изнад за видео записе о низовима и петљама.

> Овај час можете проћи на [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-arrays/?WT.mc_id=academic-77807-sagibbon)!

## Низови

Замислите низове као дигитални орман за документе - уместо да чувате један документ по фиоци, можете организовати више повезаних ставки у један структурисан контејнер. У програмском смислу, низови вам омогућавају да чувате више информација у једном организованом пакету.

Било да правите галерију фотографија, управљате листом задатака или пратите најбоље резултате у игри, низови пружају основу за организацију података. Хајде да видимо како функционишу.

✅ Низови су свуда око нас! Можете ли да смислите пример из стварног живота, као што је низ соларних панела?

### Креирање низова

Креирање низа је веома једноставно - само користите угласте заграде!

```javascript
// Empty array - like an empty shopping cart waiting for items
const myArray = [];
```

**Шта се овде дешава?**
Управо сте креирали празан контејнер користећи те угласте заграде `[]`. Замислите то као празну полицу у библиотеци - спремна је да држи било које књиге које желите да организујете.

Можете и да попуните свој низ почетним вредностима одмах на почетку:

```javascript
// Your ice cream shop's flavor menu
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// A user's profile info (mixing different types of data)
const userData = ["John", 25, true, "developer"];

// Test scores for your favorite class
const scores = [95, 87, 92, 78, 85];
```

**Кул ствари које треба приметити:**
- Можете чувати текст, бројеве или чак вредности true/false у истом низу
- Само раздвојите сваку ставку зарезом - лако!
- Низови су савршени за чување повезаних информација на једном месту

### Индексирање низова

Ево нечега што вам може изгледати необично на почетку: низови броје своје ставке почевши од 0, а не од 1. Ово индексирање које почиње од нуле има своје корене у начину на који рачунарска меморија функционише - то је програмска конвенција још од раних дана програмских језика као што је C. Свако место у низу добија свој број адресе који се назива **индекс**.

| Индекс | Вредност | Опис |
|-------|-------|-------------|
| 0 | "Чоколада" | Први елемент |
| 1 | "Јагода" | Други елемент |
| 2 | "Ванила" | Трећи елемент |
| 3 | "Пистаћи" | Четврти елемент |
| 4 | "Роки Роуд" | Пети елемент |

✅ Да ли вас изненађује што низови почињу од индекса нула? У неким програмским језицима, индекси почињу од 1. Постоји занимљива историја око овога, коју можете [прочитати на Википедији](https://en.wikipedia.org/wiki/Zero-based_numbering).

**Приступање елементима низа:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// Access individual elements using bracket notation
console.log(iceCreamFlavors[0]); // "Chocolate" - first element
console.log(iceCreamFlavors[2]); // "Vanilla" - third element
console.log(iceCreamFlavors[4]); // "Rocky Road" - last element
```

**Разлагање онога што се овде дешава:**
- **Користи** нотацију са угластим заградама и бројем индекса за приступ елементима
- **Враћа** вредност која се чува на тој специфичној позицији у низу
- **Почиње** бројање од 0, чинећи први елемент индексом 0

**Модификовање елемената низа:**

```javascript
// Change an existing value
iceCreamFlavors[4] = "Butter Pecan";
console.log(iceCreamFlavors[4]); // "Butter Pecan"

// Add a new element at the end
iceCreamFlavors[5] = "Cookie Dough";
console.log(iceCreamFlavors[5]); // "Cookie Dough"
```

**У горњем примеру, ми смо:**
- **Модификовали** елемент на индексу 4 са "Роки Роуд" на "Батер Пекан"
- **Додали** нови елемент "Куки Доу" на индекс 5
- **Аутоматски проширили** дужину низа додавањем изван тренутних граница

### Дужина низа и уобичајене методе

Низови долазе са уграђеним својствима и методама које олакшавају рад са подацима.

**Проналажење дужине низа:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
console.log(iceCreamFlavors.length); // 5

// Length updates automatically as array changes
iceCreamFlavors.push("Mint Chip");
console.log(iceCreamFlavors.length); // 6
```

**Кључне тачке које треба запамтити:**
- **Враћа** укупан број елемената у низу
- **Ажурира се** аутоматски када се елементи додају или уклоне
- **Пружа** динамички број који је користан за петље и валидацију

**Основне методе низа:**

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

**Разумевање ових метода:**
- **Додаје** елементе са `push()` (на крај) и `unshift()` (на почетак)
- **Уклања** елементе са `pop()` (на крај) и `shift()` (на почетак)
- **Лоцира** елементе са `indexOf()` и проверава постојање са `includes()`
- **Враћа** корисне вредности као што су уклоњени елементи или позициони индекси

✅ Пробајте сами! Користите конзолу вашег претраживача да креирате и манипулишете низом који сте сами направили.

## Петље

Замислите чувену казну из романа Чарлса Дикенса где су ученици морали да пишу реченице више пута на табли. Замислите да можете једноставно некоме рећи "напиши ову реченицу 100 пута" и да се то аутоматски уради. Управо то петље раде за ваш код.

Петље су као да имате неуморног помоћника који може да понавља задатке без грешке. Било да треба да проверите сваку ставку у корпи за куповину или да прикажете све фотографије у албуму, петље ефикасно обављају понављање.

JavaScript пружа неколико врста петљи које можете изабрати. Хајде да испитамо сваку од њих и разумемо када их користити.

### For петља

`for` петља је као подешавање тајмера - тачно знате колико пута желите да се нешто догоди. Веома је организована и предвидљива, што је чини савршеном када радите са низовима или треба да бројите ствари.

**Структура for петље:**

| Компонента | Сврха | Пример |
|-----------|---------|----------|
| **Иницијализација** | Поставља почетну тачку | `let i = 0` |
| **Услов** | Када наставити | `i < 10` |
| **Инкремент** | Како ажурирати | `i++` |

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

**Корак по корак, шта се овде дешава:**
- **Иницијализује** променљиву бројача `i` на 0 на почетку
- **Проверава** услов `i < 10` пре сваке итерације
- **Извршава** блок кода када је услов тачан
- **Инкрементира** `i` за 1 након сваке итерације са `i++`
- **Зауставља** се када услов постане нетачан (када `i` достигне 10)

✅ Покрените овај код у конзоли претраживача. Шта се дешава када направите мале промене у бројачу, услову или изразу итерације? Можете ли га натерати да ради уназад, стварајући одбројавање?

### While петља

`while` петља је као да кажете "настави да радиш ово док..." - можда не знате тачно колико пута ће се извршити, али знате када ће се зауставити. Савршена је за ствари као што је тражење уноса од корисника док вам не да оно што вам треба, или претраживање података док не пронађете оно што тражите.

**Карактеристике while петље:**
- **Наставља** извршавање док је услов тачан
- **Захтева** ручно управљање било којим променљивим бројача
- **Проверава** услов пре сваке итерације
- **Ризикује** бесконачне петље ако услов никада не постане нетачан

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

**Разумевање ових примера:**
- **Управља** променљивом бројача `i` ручно унутар тела петље
- **Инкрементира** бројач да би се спречиле бесконачне петље
- **Демонстрира** практичну употребу са уносом корисника и ограничењем покушаја
- **Укључује** механизме заштите од бесконачног извршавања

### Модерне алтернативе петљама

JavaScript нуди модерну синтаксу петљи која може учинити ваш код читљивијим и мање склоним грешкама.

**For...of петља (ES6+):**

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

**Кључне предности for...of:**
- **Елиминише** управљање индексима и потенцијалне грешке у бројању
- **Пружа** директан приступ елементима низа
- **Побољшава** читљивост кода и смањује сложеност синтаксе

**Метода forEach:**

```javascript
const prices = [9.99, 15.50, 22.75, 8.25];

// Using forEach for functional programming style
prices.forEach((price, index) => {
  console.log(`Item ${index + 1}: $${price.toFixed(2)}`);
});

// forEach with arrow functions for simple operations
prices.forEach(price => console.log(`Price: $${price}`));
```

**Шта треба да знате о forEach:**
- **Извршава** функцију за сваки елемент низа
- **Пружа** вредност елемента и индекс као параметре
- **Не може** се рано зауставити (за разлику од традиционалних петљи)
- **Враћа** undefined (не ствара нови низ)

✅ Зашто бисте изабрали for петљу уместо while петље? 17 хиљада гледалаца имало је исто питање на StackOverflow-у, а нека мишљења [могу вам бити занимљива](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript).

## Петље и низови

Комбинација низова и петљи ствара моћне могућности за обраду података. Овај спој је основа за многе програмске задатке, од приказивања листа до израчунавања статистике.

**Традиционална обрада низова:**

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

**Хајде да разумемо сваки приступ:**
- **Користи** својство дужине низа за одређивање границе петље
- **Приступа** елементима по индексу у традиционалним for петљама
- **Пружа** директан приступ елементима у for...of петљама
- **Обрађује** сваки елемент низа тачно једном

**Практичан пример обраде података:**

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

**Ево како овај код функционише:**
- **Иницијализује** променљиве за праћење збира и екстрема
- **Обрађује** сваку оцену једном ефикасном петљом
- **Акумулира** укупан збир за израчунавање просека
- **Прати** највише и најниже вредности током итерације
- **Израчунава** коначну статистику након завршетка петље

✅ Експериментишите са петљама преко низа који сте сами направили у конзоли вашег претраживача.

---

## Изазов GitHub Copilot Agent 🚀

Користите Agent мод да завршите следећи изазов:

**Опис:** Направите свеобухватну функцију за обраду података која комбинује низове и петље за анализу скупа података и генерисање значајних увида.

**Задатак:** Направите функцију под називом `analyzeGrades` која узима низ објеката са оценама ученика (сваки садржи својства name и score) и враћа објекат са статистиком укључујући највишу оцену, најнижу оцену, просечну оцену, број ученика који су положили (score >= 70) и низ имена ученика који су постигли изнад просека. Користите најмање две различите врсте петљи у вашем решењу.

Сазнајте више о [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) овде.

## 🚀 Изазов

JavaScript нуди неколико модерних метода за рад са низовима које могу заменити традиционалне петље за одређене задатке. Истражите [forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of), [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [filter](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), и [reduce](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce). 

**Ваш изазов:** Прерадите пример са оценама ученика користећи најмање три различите методе низа. Приметите колико је код чистији и читљивији са модерном синтаксом JavaScript-а.

## Квиз после предавања
[Квиз после предавања](https://ff-quizzes.netlify.app/web/quiz/14)


## Преглед и самостално учење

Низови у JavaScript-у имају много метода које су изузетно корисне за манипулацију подацима. [Прочитајте о овим методама](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) и пробајте неке од њих (као што су push, pop, slice и splice) на низу који сте сами направили.

## Задатак

[Петља кроз низ](assignment.md)

---

**Одрицање од одговорности**:  
Овај документ је преведен коришћењем услуге за превођење помоћу вештачке интелигенције [Co-op Translator](https://github.com/Azure/co-op-translator). Иако настојимо да обезбедимо тачност, молимо вас да имате у виду да аутоматски преводи могу садржати грешке или нетачности. Оригинални документ на његовом изворном језику треба сматрати ауторитативним извором. За критичне информације препоручује се професионални превод од стране људи. Не сносимо одговорност за било каква погрешна тумачења или неспоразуме који могу настати услед коришћења овог превода.