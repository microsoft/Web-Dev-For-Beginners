<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9197f8af0fef9be6e81d4dbda23c7e7d",
  "translation_date": "2025-10-22T15:17:59+00:00",
  "source_file": "2-js-basics/4-arrays-loops/README.md",
  "language_code": "tl"
}
-->
# Mga Pangunahing Kaalaman sa JavaScript: Arrays at Loops

![Mga Pangunahing Kaalaman sa JavaScript - Arrays](../../../../translated_images/webdev101-js-arrays.439d7528b8a294558d0e4302e448d193f8ad7495cc407539cc81f1afe904b470.tl.png)
> Sketchnote ni [Tomomi Imura](https://twitter.com/girlie_mac)

## Pre-Lecture Quiz
[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/13)

Naisip mo na ba kung paano nagtatala ang mga website ng mga item sa shopping cart o nagpapakita ng listahan ng mga kaibigan? Dito pumapasok ang arrays at loops. Ang arrays ay parang digital na lalagyan na nagtatago ng maraming impormasyon, habang ang loops ay nagbibigay-daan sa iyo na magtrabaho sa lahat ng data nang epektibo nang hindi inuulit ang code.

Magkasama, ang dalawang konseptong ito ang bumubuo ng pundasyon para sa paghawak ng impormasyon sa iyong mga programa. Matutunan mong lumipat mula sa manu-manong pagsusulat ng bawat hakbang patungo sa paggawa ng matalino at epektibong code na maaaring magproseso ng daan-daan o libu-libong item nang mabilis.

Sa pagtatapos ng araling ito, maiintindihan mo kung paano magawa ang mga kumplikadong gawain sa data gamit lamang ang ilang linya ng code. Tuklasin natin ang mga mahahalagang konsepto sa programming.

[![Arrays](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "Arrays")

[![Loops](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "Loops")

> 🎥 I-click ang mga imahe sa itaas para sa mga video tungkol sa arrays at loops.

> Maaari mong kunin ang araling ito sa [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-arrays/?WT.mc_id=academic-77807-sagibbon)!

## Arrays

Isipin ang arrays bilang isang digital na filing cabinet - sa halip na mag-imbak ng isang dokumento bawat drawer, maaari mong ayusin ang maraming kaugnay na item sa isang solong, nakaayos na lalagyan. Sa mga termino ng programming, ang arrays ay nagbibigay-daan sa iyo na mag-imbak ng maraming impormasyon sa isang organisadong pakete.

Kung ikaw ay gumagawa ng photo gallery, nagma-manage ng to-do list, o nagtatala ng high scores sa isang laro, ang arrays ang pundasyon para sa organisasyon ng data. Tingnan natin kung paano ito gumagana.

✅ Ang arrays ay nasa paligid natin! Makakaisip ka ba ng halimbawa ng array sa totoong buhay, tulad ng solar panel array?

### Paglikha ng Arrays

Napakadaling gumawa ng array - gumamit lang ng square brackets!

```javascript
// Empty array - like an empty shopping cart waiting for items
const myArray = [];
```

**Ano ang nangyayari dito?**
Kakagawa mo lang ng isang walang laman na lalagyan gamit ang mga square brackets `[]`. Isipin ito na parang isang walang laman na istante ng aklatan - handa na itong maglaman ng anumang mga libro na nais mong ayusin doon.

Maaari mo ring punan ang iyong array ng mga paunang halaga mula sa simula:

```javascript
// Your ice cream shop's flavor menu
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// A user's profile info (mixing different types of data)
const userData = ["John", 25, true, "developer"];

// Test scores for your favorite class
const scores = [95, 87, 92, 78, 85];
```

**Mga cool na bagay na mapapansin:**
- Maaari kang mag-imbak ng text, numero, o kahit true/false values sa parehong array
- Paghiwalayin lang ang bawat item gamit ang comma - madali!
- Perpekto ang arrays para sa pag-iingat ng kaugnay na impormasyon nang magkasama

### Array Indexing

Narito ang isang bagay na maaaring mukhang hindi pangkaraniwan sa simula: ang arrays ay binibilang ang kanilang mga item simula sa 0, hindi 1. Ang zero-based indexing na ito ay may ugat sa kung paano gumagana ang memorya ng computer - ito ay naging isang programming convention mula pa noong unang panahon ng mga wika sa programming tulad ng C. Ang bawat lugar sa array ay may sariling address number na tinatawag na **index**.

| Index | Halaga | Deskripsyon |
|-------|-------|-------------|
| 0 | "Chocolate" | Unang elemento |
| 1 | "Strawberry" | Ikalawang elemento |
| 2 | "Vanilla" | Ikatlong elemento |
| 3 | "Pistachio" | Ikaapat na elemento |
| 4 | "Rocky Road" | Ikalimang elemento |

✅ Ikaw ba ay nagulat na ang arrays ay nagsisimula sa zero index? Sa ilang programming languages, ang indexes ay nagsisimula sa 1. Mayroong isang kawili-wiling kasaysayan tungkol dito, na maaari mong [basahin sa Wikipedia](https://en.wikipedia.org/wiki/Zero-based_numbering).

**Pag-access sa mga Elemento ng Array:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// Access individual elements using bracket notation
console.log(iceCreamFlavors[0]); // "Chocolate" - first element
console.log(iceCreamFlavors[2]); // "Vanilla" - third element
console.log(iceCreamFlavors[4]); // "Rocky Road" - last element
```

**Paghiwa-hiwalay sa nangyayari dito:**
- **Gumagamit** ng square bracket notation na may index number para ma-access ang mga elemento
- **Ibinabalik** ang halaga na nakaimbak sa partikular na posisyon sa array
- **Nagsisimula** sa pagbilang mula sa 0, kaya ang unang elemento ay index 0

**Pagbabago ng mga Elemento ng Array:**

```javascript
// Change an existing value
iceCreamFlavors[4] = "Butter Pecan";
console.log(iceCreamFlavors[4]); // "Butter Pecan"

// Add a new element at the end
iceCreamFlavors[5] = "Cookie Dough";
console.log(iceCreamFlavors[5]); // "Cookie Dough"
```

**Sa itaas, ginawa natin ang:**
- **Binago** ang elemento sa index 4 mula "Rocky Road" patungong "Butter Pecan"
- **Nagdagdag** ng bagong elemento "Cookie Dough" sa index 5
- **Pinalawak** ang haba ng array nang awtomatiko kapag nagdagdag ng lampas sa kasalukuyang hangganan

### Haba ng Array at Karaniwang Mga Pamamaraan

Ang arrays ay may mga built-in na properties at methods na nagpapadali sa pagtrabaho sa data.

**Paghanap ng Haba ng Array:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
console.log(iceCreamFlavors.length); // 5

// Length updates automatically as array changes
iceCreamFlavors.push("Mint Chip");
console.log(iceCreamFlavors.length); // 6
```

**Mga mahalagang puntos na tandaan:**
- **Ibinabalik** ang kabuuang bilang ng mga elemento sa array
- **Ina-update** nang awtomatiko kapag may idinagdag o tinanggal na mga elemento
- **Nagbibigay** ng dynamic na bilang na kapaki-pakinabang para sa loops at validation

**Mahahalagang Pamamaraan ng Array:**

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

**Pag-unawa sa mga pamamaraang ito:**
- **Nagdaragdag** ng mga elemento gamit ang `push()` (dulo) at `unshift()` (simula)
- **Nag-aalis** ng mga elemento gamit ang `pop()` (dulo) at `shift()` (simula)
- **Hinahanap** ang mga elemento gamit ang `indexOf()` at sinusuri ang pagkakaroon gamit ang `includes()`
- **Ibinabalik** ang mga kapaki-pakinabang na halaga tulad ng mga tinanggal na elemento o mga posisyon ng index

✅ Subukan mo ito! Gumamit ng console ng iyong browser upang gumawa at manipulahin ang isang array na ikaw mismo ang lumikha.

## Loops

Isipin ang sikat na parusa mula sa mga nobela ni Charles Dickens kung saan ang mga estudyante ay kailangang magsulat ng mga linya nang paulit-ulit sa isang slate. Isipin kung maaari mong simpleng utusan ang isang tao na "isulat ang pangungusap na ito ng 100 beses" at magawa ito nang awtomatiko. Iyan ang eksaktong ginagawa ng loops para sa iyong code.

Ang loops ay parang may masipag na katulong na maaaring ulitin ang mga gawain nang walang error. Kung kailangan mong suriin ang bawat item sa shopping cart o ipakita ang lahat ng mga larawan sa isang album, ang loops ang humahawak sa pag-uulit nang epektibo.

Nagbibigay ang JavaScript ng ilang uri ng loops na maaari mong pagpilian. Tingnan natin ang bawat isa at unawain kung kailan ito gagamitin.

### For Loop

Ang `for` loop ay parang pag-set ng timer - alam mo nang eksakto kung ilang beses mo gustong mangyari ang isang bagay. Napaka-organisado at predictable nito, na ginagawang perpekto kapag nagtatrabaho ka sa arrays o kailangang magbilang ng mga bagay.

**Struktura ng For Loop:**

| Komponent | Layunin | Halimbawa |
|-----------|---------|----------|
| **Initialization** | Nagtatakda ng panimulang punto | `let i = 0` |
| **Condition** | Kailan magpapatuloy | `i < 10` |
| **Increment** | Paano mag-update | `i++` |

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

**Hakbang-hakbang, narito ang nangyayari:**
- **Nagsisimula** ang counter variable na `i` sa 0 sa simula
- **Sinusuri** ang kondisyon na `i < 10` bago ang bawat pag-ulit
- **Isinasagawa** ang code block kapag ang kondisyon ay totoo
- **Ina-update** ang `i` ng 1 pagkatapos ng bawat pag-ulit gamit ang `i++`
- **Humihinto** kapag ang kondisyon ay naging mali (kapag umabot na sa 10 ang `i`)

✅ Patakbuhin ang code na ito sa console ng browser. Ano ang mangyayari kapag gumawa ka ng maliliit na pagbabago sa counter, kondisyon, o expression ng pag-ulit? Kaya mo bang gawing pabaliktad ito, na gumagawa ng countdown?

### While Loop

Ang `while` loop ay parang sinasabi na "patuloy na gawin ito hanggang sa..." - maaaring hindi mo alam nang eksakto kung ilang beses itong tatakbo, ngunit alam mo kung kailan ito titigil. Perpekto ito para sa mga bagay tulad ng paghingi ng input mula sa user hanggang sa maibigay nila ang tamang sagot, o paghahanap sa data hanggang sa makita mo ang hinahanap mo.

**Mga Katangian ng While Loop:**
- **Nagpapatuloy** sa pagtakbo hangga't ang kondisyon ay totoo
- **Nangangailangan** ng manual na pamamahala ng anumang counter variables
- **Sinusuri** ang kondisyon bago ang bawat pag-ulit
- **May panganib** ng infinite loops kung ang kondisyon ay hindi kailanman magiging mali

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

**Pag-unawa sa mga halimbawa:**
- **Pinamamahalaan** ang counter variable na `i` nang manu-mano sa loob ng loop body
- **Ina-update** ang counter upang maiwasan ang infinite loops
- **Nagpapakita** ng praktikal na paggamit sa input ng user at limitasyon ng pagtatangka
- **May kasamang** mga mekanismo ng kaligtasan upang maiwasan ang walang katapusang pagtakbo

### Mga Modernong Alternatibo sa Loop

Nag-aalok ang JavaScript ng modernong syntax ng loop na maaaring gawing mas nababasa at mas kaunti ang error sa iyong code.

**For...of Loop (ES6+):**

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

**Mga pangunahing bentahe ng for...of:**
- **Inaalis** ang pamamahala ng index at mga posibleng error sa off-by-one
- **Nagbibigay** ng direktang access sa mga elemento ng array
- **Pinapabuti** ang nababasa ng code at binabawasan ang pagiging kumplikado ng syntax

**forEach Method:**

```javascript
const prices = [9.99, 15.50, 22.75, 8.25];

// Using forEach for functional programming style
prices.forEach((price, index) => {
  console.log(`Item ${index + 1}: $${price.toFixed(2)}`);
});

// forEach with arrow functions for simple operations
prices.forEach(price => console.log(`Price: $${price}`));
```

**Ano ang dapat mong malaman tungkol sa forEach:**
- **Isinasagawa** ang isang function para sa bawat elemento ng array
- **Nagbibigay** ng parehong halaga ng elemento at index bilang mga parameter
- **Hindi maaaring** itigil nang maaga (hindi tulad ng tradisyunal na loops)
- **Ibinabalik** ang undefined (hindi gumagawa ng bagong array)

✅ Bakit mo pipiliin ang for loop kumpara sa while loop? 17K na mga manonood ang may parehong tanong sa StackOverflow, at ang ilan sa mga opinyon [maaaring maging kawili-wili sa iyo](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript).

## Loops at Arrays

Ang pagsasama ng arrays sa loops ay lumilikha ng makapangyarihang kakayahan sa pagproseso ng data. Ang kombinasyong ito ay mahalaga sa maraming gawain sa programming, mula sa pagpapakita ng mga listahan hanggang sa pagkalkula ng mga istatistika.

**Tradisyunal na Pagproseso ng Array:**

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

**Unawain natin ang bawat paraan:**
- **Gumagamit** ng property ng haba ng array upang matukoy ang hangganan ng loop
- **Ina-access** ang mga elemento sa pamamagitan ng index sa tradisyunal na for loops
- **Nagbibigay** ng direktang access sa mga elemento sa for...of loops
- **Pinoproseso** ang bawat elemento ng array nang eksakto isang beses

**Praktikal na Halimbawa ng Pagproseso ng Data:**

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

**Narito kung paano gumagana ang code na ito:**
- **Nagsisimula** ng mga tracking variables para sa kabuuan at extremes
- **Pinoproseso** ang bawat grade gamit ang isang epektibong loop
- **Nag-iipon** ng kabuuan para sa kalkulasyon ng average
- **Nagtatala** ng pinakamataas at pinakamababang halaga sa panahon ng pag-ulit
- **Kinakalkula** ang panghuling istatistika pagkatapos ng pag-ulit

✅ Subukan ang pag-loop sa isang array na ikaw mismo ang lumikha sa console ng iyong browser.

---

## Hamon ng GitHub Copilot Agent 🚀

Gamitin ang Agent mode upang tapusin ang sumusunod na hamon:

**Deskripsyon:** Gumawa ng komprehensibong function sa pagproseso ng data na pinagsasama ang arrays at loops upang suriin ang isang dataset at makabuo ng makabuluhang mga insight.

**Prompt:** Gumawa ng function na tinatawag na `analyzeGrades` na tumatanggap ng isang array ng mga object ng grade ng estudyante (bawat isa ay naglalaman ng name at score properties) at nagbabalik ng isang object na may mga istatistika kabilang ang pinakamataas na score, pinakamababang score, average score, bilang ng mga estudyanteng pumasa (score >= 70), at isang array ng mga pangalan ng estudyante na nakakuha ng mas mataas sa average. Gumamit ng hindi bababa sa dalawang magkaibang uri ng loop sa iyong solusyon.

Alamin ang higit pa tungkol sa [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) dito.

## 🚀 Hamon

Nag-aalok ang JavaScript ng ilang modernong pamamaraan ng array na maaaring pumalit sa tradisyunal na loops para sa mga partikular na gawain. Tuklasin ang [forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of), [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [filter](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), at [reduce](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce). 

**Ang iyong hamon:** I-refactor ang halimbawa ng grades ng estudyante gamit ang hindi bababa sa tatlong magkaibang pamamaraan ng array. Pansinin kung gaano kalinis at mas nababasa ang code gamit ang modernong syntax ng JavaScript.

## Post-Lecture Quiz
[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/14)


## Review at Sariling Pag-aaral

Ang arrays sa JavaScript ay may maraming mga pamamaraan na nakakabit sa mga ito, na napaka-kapaki-pakinabang para sa manipulasyon ng data. [Basahin ang tungkol sa mga pamamaraang ito](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) at subukan ang ilan sa mga ito (tulad ng push, pop, slice, at splice) sa isang array na ikaw mismo ang lumikha.

## Takdang-Aralin

[Loop an Array](assignment.md)

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.