<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9197f8af0fef9be6e81d4dbda23c7e7d",
  "translation_date": "2025-10-24T19:11:15+00:00",
  "source_file": "2-js-basics/4-arrays-loops/README.md",
  "language_code": "sw"
}
-->
# Misingi ya JavaScript: Arrays na Loops

![Misingi ya JavaScript - Arrays](../../../../translated_images/webdev101-js-arrays.439d7528b8a294558d0e4302e448d193f8ad7495cc407539cc81f1afe904b470.sw.png)
> Sketchnote na [Tomomi Imura](https://twitter.com/girlie_mac)

## Maswali ya Awali ya Somo
[Maswali ya awali ya somo](https://ff-quizzes.netlify.app/web/quiz/13)

Umewahi kujiuliza jinsi tovuti zinavyoweza kufuatilia vitu vya kikapu cha ununuzi au kuonyesha orodha ya marafiki wako? Hapo ndipo arrays na loops zinapokuja. Arrays ni kama vyombo vya kidijitali vinavyohifadhi vipande vingi vya taarifa, wakati loops zinakusaidia kufanya kazi na data hiyo kwa ufanisi bila kuandika nambari ya kurudia.

Pamoja, dhana hizi mbili zinaunda msingi wa kushughulikia taarifa katika programu zako. Utajifunza jinsi ya kuhamia kutoka kuandika kila hatua moja kwa mkono hadi kuunda nambari ya busara na yenye ufanisi inayoweza kushughulikia mamia au hata maelfu ya vitu haraka.

Mwisho wa somo hili, utaelewa jinsi ya kutekeleza kazi ngumu za data kwa mistari michache tu ya nambari. Hebu tuangalie dhana hizi muhimu za programu.

[![Arrays](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "Arrays")

[![Loops](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "Loops")

> 🎥 Bonyeza picha hapo juu kwa video kuhusu arrays na loops.

> Unaweza kuchukua somo hili kwenye [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-arrays/?WT.mc_id=academic-77807-sagibbon)!

## Arrays

Fikiria arrays kama kabati la kuhifadhi faili za kidijitali - badala ya kuhifadhi hati moja kwa kila droo, unaweza kupanga vitu vingi vinavyohusiana katika chombo kimoja kilichopangwa. Kwa maneno ya programu, arrays hukuruhusu kuhifadhi vipande vingi vya taarifa katika kifurushi kimoja kilichopangwa.

Ikiwa unajenga maktaba ya picha, unasimamia orodha ya kazi za kufanya, au unafuatilia alama za juu katika mchezo, arrays hutoa msingi wa upangaji wa data. Hebu tuone jinsi zinavyofanya kazi.

✅ Arrays zipo kila mahali! Je, unaweza kufikiria mfano wa array katika maisha halisi, kama vile safu ya paneli za jua?

### Kuunda Arrays

Kuunda array ni rahisi sana - tumia mabano ya mraba!

```javascript
// Empty array - like an empty shopping cart waiting for items
const myArray = [];
```

**Nini kinatokea hapa?**
Umeunda chombo tupu kwa kutumia mabano ya mraba `[]`. Fikiria kama rafu ya maktaba tupu - iko tayari kuhifadhi vitabu vyovyote unavyotaka kupanga hapo.

Unaweza pia kujaza array yako na maadili ya awali moja kwa moja:

```javascript
// Your ice cream shop's flavor menu
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// A user's profile info (mixing different types of data)
const userData = ["John", 25, true, "developer"];

// Test scores for your favorite class
const scores = [95, 87, 92, 78, 85];
```

**Mambo ya kuvutia ya kuzingatia:**
- Unaweza kuhifadhi maandishi, nambari, au hata maadili ya kweli/siyo kweli katika array moja
- Tenganisha kila kipengee kwa koma - rahisi!
- Arrays ni kamilifu kwa kuweka taarifa zinazohusiana pamoja

### Kuweka Nambari ya Array

Hapa kuna kitu ambacho kinaweza kuonekana cha ajabu mwanzoni: arrays huweka nambari ya vipengee vyake kuanzia 0, si 1. Hii nambari ya kuanzia 0 ina mizizi yake katika jinsi kumbukumbu ya kompyuta inavyofanya kazi - imekuwa desturi ya programu tangu siku za mwanzo za lugha za programu kama C. Kila nafasi katika array inapata nambari yake ya anwani inayoitwa **index**.

| Index | Thamani | Maelezo |
|-------|-------|-------------|
| 0 | "Chocolate" | Kipengee cha kwanza |
| 1 | "Strawberry" | Kipengee cha pili |
| 2 | "Vanilla" | Kipengee cha tatu |
| 3 | "Pistachio" | Kipengee cha nne |
| 4 | "Rocky Road" | Kipengee cha tano |

✅ Je, inakushangaza kwamba arrays huanza na index ya sifuri? Katika baadhi ya lugha za programu, indexes huanza na 1. Kuna historia ya kuvutia kuhusu hili, ambayo unaweza [kusoma kwenye Wikipedia](https://en.wikipedia.org/wiki/Zero-based_numbering).

**Kupata Vipengee vya Array:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// Access individual elements using bracket notation
console.log(iceCreamFlavors[0]); // "Chocolate" - first element
console.log(iceCreamFlavors[2]); // "Vanilla" - third element
console.log(iceCreamFlavors[4]); // "Rocky Road" - last element
```

**Kufafanua kinachotokea hapa:**
- **Inatumia** noti ya mabano ya mraba na nambari ya index kupata vipengee
- **Inarudisha** thamani iliyohifadhiwa katika nafasi maalum ya array
- **Inaanza** kuhesabu kutoka 0, ikifanya kipengee cha kwanza kuwa index 0

**Kubadilisha Vipengee vya Array:**

```javascript
// Change an existing value
iceCreamFlavors[4] = "Butter Pecan";
console.log(iceCreamFlavors[4]); // "Butter Pecan"

// Add a new element at the end
iceCreamFlavors[5] = "Cookie Dough";
console.log(iceCreamFlavors[5]); // "Cookie Dough"
```

**Katika mfano hapo juu, tumefanya:**
- **Kubadilisha** kipengee katika index 4 kutoka "Rocky Road" hadi "Butter Pecan"
- **Kuongeza** kipengee kipya "Cookie Dough" katika index 5
- **Kupanua** urefu wa array moja kwa moja wakati wa kuongeza zaidi ya mipaka ya sasa

### Urefu wa Array na Mbinu za Kawaida

Arrays huja na mali na mbinu zilizojengwa ndani zinazofanya kazi na data kuwa rahisi zaidi.

**Kupata Urefu wa Array:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
console.log(iceCreamFlavors.length); // 5

// Length updates automatically as array changes
iceCreamFlavors.push("Mint Chip");
console.log(iceCreamFlavors.length); // 6
```

**Mambo muhimu ya kukumbuka:**
- **Inarudisha** idadi ya jumla ya vipengee katika array
- **Inasasisha** moja kwa moja wakati vipengee vinaongezwa au kuondolewa
- **Inatoa** hesabu ya nguvu inayofaa kwa loops na uthibitisho

**Mbinu Muhimu za Array:**

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

**Kuelewa mbinu hizi:**
- **Inaongeza** vipengee na `push()` (mwisho) na `unshift()` (mwanzo)
- **Inaondoa** vipengee na `pop()` (mwisho) na `shift()` (mwanzo)
- **Inatafuta** vipengee na `indexOf()` na inakagua uwepo na `includes()`
- **Inarudisha** maadili muhimu kama vipengee vilivyotolewa au nambari za nafasi

✅ Jaribu mwenyewe! Tumia console ya kivinjari chako kuunda na kudhibiti array ya ubunifu wako.

## Loops

Fikiria adhabu maarufu kutoka kwa riwaya za Charles Dickens ambapo wanafunzi walilazimika kuandika mistari mara kwa mara kwenye ubao. Fikiria kama ungeweza kumwambia mtu "andika sentensi hii mara 100" na ikafanyika moja kwa moja. Hivyo ndivyo loops zinavyofanya kwa nambari yako.

Loops ni kama kuwa na msaidizi asiyechoka ambaye anaweza kurudia kazi bila makosa. Ikiwa unahitaji kuangalia kila kipengee katika kikapu cha ununuzi au kuonyesha picha zote katika albamu, loops hushughulikia kurudia kwa ufanisi.

JavaScript inatoa aina kadhaa za loops za kuchagua. Hebu tuchunguze kila moja na kuelewa wakati wa kuitumia.

### For Loop

`for` loop ni kama kuweka timer - unajua hasa mara ngapi unataka kitu kitokee. Ni ya mpangilio mzuri na ya kutabirika, ambayo inafanya kuwa kamilifu wakati unafanya kazi na arrays au unahitaji kuhesabu vitu.

**Muundo wa For Loop:**

| Sehemu | Kusudi | Mfano |
|-----------|---------|----------|
| **Uanzishaji** | Huanzisha mwanzo | `let i = 0` |
| **Hali** | Wakati wa kuendelea | `i < 10` |
| **Ongezeko** | Jinsi ya kusasisha | `i++` |

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

**Hatua kwa hatua, kinachotokea:**
- **Inaanzisha** variable ya kuhesabu `i` kuwa 0 mwanzoni
- **Inakagua** hali `i < 10` kabla ya kila mzunguko
- **Inatekeleza** block ya nambari wakati hali ni kweli
- **Inaongeza** `i` kwa 1 baada ya kila mzunguko na `i++`
- **Inasimama** wakati hali inakuwa si kweli (wakati `i` inafikia 10)

✅ Endesha nambari hii kwenye console ya kivinjari. Nini kinatokea unapofanya mabadiliko madogo kwenye counter, hali, au usemi wa mzunguko? Je, unaweza kuifanya iende kinyume, ikitengeneza hesabu ya kurudi nyuma?

### While Loop

`while` loop ni kama kusema "endelea kufanya hivi hadi..." - huenda usijue hasa mara ngapi itakimbia, lakini unajua wakati wa kusimama. Ni kamilifu kwa vitu kama kuuliza mtumiaji maoni hadi atakapokupa unachohitaji, au kutafuta data hadi upate unachotafuta.

**Tabia za While Loop:**
- **Inaendelea** kutekeleza mradi hali ni kweli
- **Inahitaji** usimamizi wa mikono wa variable yoyote ya kuhesabu
- **Inakagua** hali kabla ya kila mzunguko
- **Ina hatari** ya loops zisizo na mwisho ikiwa hali haitakuwa si kweli

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

**Kuelewa mifano hii:**
- **Inasimamia** variable ya kuhesabu `i` kwa mikono ndani ya mwili wa loop
- **Inaongeza** counter ili kuzuia loops zisizo na mwisho
- **Inaonyesha** matumizi ya vitendo na maoni ya mtumiaji na kikomo cha majaribio
- **Inajumuisha** mifumo ya usalama ili kuzuia utekelezaji usio na mwisho

### Njia za Kisasa za Loop

JavaScript inatoa syntax ya kisasa ya loop inayoweza kufanya nambari yako iwe rahisi kusoma na kupunguza makosa.

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

**Faida kuu za for...of:**
- **Inaondoa** usimamizi wa index na makosa ya off-by-one
- **Inatoa** ufikiaji wa moja kwa moja kwa vipengee vya array
- **Inaboresha** usomaji wa nambari na kupunguza ugumu wa syntax

**Njia ya forEach:**

```javascript
const prices = [9.99, 15.50, 22.75, 8.25];

// Using forEach for functional programming style
prices.forEach((price, index) => {
  console.log(`Item ${index + 1}: $${price.toFixed(2)}`);
});

// forEach with arrow functions for simple operations
prices.forEach(price => console.log(`Price: $${price}`));
```

**Unachohitaji kujua kuhusu forEach:**
- **Inatekeleza** kazi kwa kila kipengee cha array
- **Inatoa** thamani ya kipengee na index kama vigezo
- **Haiwezi** kusimamishwa mapema (tofauti na loops za jadi)
- **Inarudisha** undefined (haitengenezi array mpya)

✅ Kwa nini ungechagua for loop dhidi ya while loop? Watazamaji 17K walikuwa na swali sawa kwenye StackOverflow, na baadhi ya maoni [yanaweza kuwa ya kuvutia kwako](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript).

## Loops na Arrays

Kuchanganya arrays na loops huunda uwezo wa kushughulikia data kwa nguvu. Mchanganyiko huu ni msingi wa kazi nyingi za programu, kutoka kuonyesha orodha hadi kuhesabu takwimu.

**Usindikaji wa Kawaida wa Array:**

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

**Hebu tuelewe kila mbinu:**
- **Inatumia** mali ya urefu wa array kuamua mipaka ya loop
- **Inapata** vipengee kwa index katika loops za jadi za for
- **Inatoa** ufikiaji wa moja kwa moja wa vipengee katika loops za for...of
- **Inasindika** kila kipengee cha array mara moja tu

**Mfano wa Usindikaji wa Data wa Vitendo:**

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

**Hivi ndivyo nambari hii inavyofanya kazi:**
- **Inaanzisha** vigezo vya kufuatilia kwa jumla na viwango vya juu na vya chini
- **Inasindika** kila alama kwa loop moja yenye ufanisi
- **Inakusanya** jumla kwa hesabu ya wastani
- **Inafuatilia** thamani za juu na za chini wakati wa mzunguko
- **Inahesabu** takwimu za mwisho baada ya kukamilika kwa loop

✅ Jaribu kuzunguka array ya ubunifu wako mwenyewe kwenye console ya kivinjari chako.

---

## Changamoto ya Wakala wa GitHub Copilot 🚀

Tumia hali ya Agent kukamilisha changamoto ifuatayo:

**Maelezo:** Tengeneza kazi ya kina ya usindikaji wa data inayochanganya arrays na loops kuchambua seti ya data na kutoa maarifa muhimu.

**Maelekezo:** Unda kazi inayoitwa `analyzeGrades` inayochukua array ya vitu vya alama za wanafunzi (kila moja ikiwa na mali za jina na alama) na inarudisha kitu chenye takwimu ikiwa ni pamoja na alama ya juu zaidi, alama ya chini zaidi, wastani wa alama, idadi ya wanafunzi waliopasi (alama >= 70), na array ya majina ya wanafunzi waliopata alama juu ya wastani. Tumia angalau aina mbili tofauti za loop katika suluhisho lako.

Jifunze zaidi kuhusu [hali ya wakala](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) hapa.

## 🚀 Changamoto

JavaScript inatoa mbinu kadhaa za kisasa za array zinazoweza kuchukua nafasi ya loops za jadi kwa kazi maalum. Chunguza [forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of), [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [filter](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), na [reduce](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce). 

**Changamoto yako:** Rekebisha mfano wa alama za wanafunzi kwa kutumia angalau mbinu tatu tofauti za array. Angalia jinsi nambari inavyokuwa safi na rahisi kusoma kwa syntax ya kisasa ya JavaScript.

## Maswali ya Baada ya Somo
[Maswali ya baada ya somo](https://ff-quizzes.netlify.app/web/quiz/14)


## Mapitio na Kujifunza Binafsi

Arrays katika JavaScript zina mbinu nyingi zilizoambatanishwa nazo, ambazo ni muhimu sana kwa usindikaji wa data. [Soma kuhusu mbinu hizi](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) na jaribu baadhi yao (kama push, pop, slice na splice) kwenye array ya ubunifu wako.

## Kazi ya Nyumbani

[Loop an Array](assignment.md)

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.