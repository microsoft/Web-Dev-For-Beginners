<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f7009631b73556168ca435120a231c98",
  "translation_date": "2025-08-29T10:07:57+00:00",
  "source_file": "2-js-basics/3-making-decisions/README.md",
  "language_code": "sw"
}
-->
# Msingi wa JavaScript: Kufanya Maamuzi

![Msingi wa JavaScript - Kufanya maamuzi](../../../../translated_images/webdev101-js-decisions.69e1b20f272dd1f0b1cb2f8adaff3ed2a77c4f91db96d8a0594132a353fa189a.sw.png)

> Sketchnote na [Tomomi Imura](https://twitter.com/girlie_mac)

## Jaribio la Kabla ya Somo

[Jaribio la kabla ya somo](https://ff-quizzes.netlify.app/web/quiz/11)

Kufanya maamuzi na kudhibiti mpangilio wa jinsi msimbo wako unavyoendeshwa hufanya msimbo wako uwe wa kutumika tena na thabiti. Sehemu hii inashughulikia sintaksia ya kudhibiti mtiririko wa data katika JavaScript na umuhimu wake inapochanganywa na aina ya data ya Boolean.

[![Kufanya Maamuzi](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Kufanya Maamuzi")

> 🎥 Bofya picha hapo juu kwa video kuhusu kufanya maamuzi.

> Unaweza kuchukua somo hili kwenye [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon)!

## Muhtasari Mfupi Kuhusu Booleans

Booleans zinaweza kuwa na thamani mbili tu: `true` au `false`. Booleans husaidia kufanya maamuzi kuhusu ni mistari gani ya msimbo inapaswa kuendeshwa wakati masharti fulani yanatimizwa.

Weka Boolean yako kuwa true au false kama hivi:

`let myTrueBool = true`  
`let myFalseBool = false`

✅ Booleans zimepewa jina la mtaalamu wa hisabati, falsafa na mantiki wa Kiingereza George Boole (1815–1864).

## Waendeshaji wa Kulinganisha na Booleans

Waendeshaji hutumika kutathmini masharti kwa kufanya kulinganisha ambako kutazalisha thamani ya Boolean. Hii hapa ni orodha ya waendeshaji wanaotumika mara kwa mara.

| Alama  | Maelezo                                                                                                                                                       | Mfano              |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `<`    | **Chini ya**: Inalinganisha thamani mbili na kurudisha aina ya data ya Boolean `true` ikiwa thamani upande wa kushoto ni ndogo kuliko ya kulia                 | `5 < 6 // true`    |
| `<=`   | **Chini au sawa na**: Inalinganisha thamani mbili na kurudisha aina ya data ya Boolean `true` ikiwa thamani upande wa kushoto ni ndogo au sawa na ya kulia     | `5 <= 6 // true`   |
| `>`    | **Kubwa kuliko**: Inalinganisha thamani mbili na kurudisha aina ya data ya Boolean `true` ikiwa thamani upande wa kushoto ni kubwa kuliko ya kulia            | `5 > 6 // false`   |
| `>=`   | **Kubwa au sawa na**: Inalinganisha thamani mbili na kurudisha aina ya data ya Boolean `true` ikiwa thamani upande wa kushoto ni kubwa au sawa na ya kulia     | `5 >= 6 // false`  |
| `===`  | **Usawa mkali**: Inalinganisha thamani mbili na kurudisha aina ya data ya Boolean `true` ikiwa thamani za kulia na kushoto ni sawa NA ni aina sawa ya data     | `5 === 6 // false` |
| `!==`  | **Kutokuwepo usawa**: Inalinganisha thamani mbili na kurudisha thamani ya Boolean kinyume na ile ambayo operator wa usawa mkali ingerudisha                   | `5 !== 6 // true`  |

✅ Jaribu ujuzi wako kwa kuandika kulinganisha kadhaa kwenye console ya kivinjari chako. Je, kuna data yoyote iliyorejeshwa inayokushangaza?

## If Statement

If statement itaendesha msimbo uliopo kati ya vizuizi vyake ikiwa sharti ni kweli.

```javascript
if (condition) {
  //Condition is true. Code in this block will run.
}
```

Waendeshaji wa kimantiki mara nyingi hutumika kuunda sharti.

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

## If..Else Statement

Else statement itaendesha msimbo uliopo kati ya vizuizi vyake wakati sharti ni la uongo. Ni hiari kutumia `else` na if statement.

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  //Condition is false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

✅ Jaribu uelewa wako wa msimbo huu na msimbo ufuatao kwa kuendesha kwenye console ya kivinjari. Badilisha thamani za currentMoney na laptopPrice ili kubadilisha matokeo ya `console.log()`.

## Switch Statement

Switch statement hutumika kutekeleza vitendo tofauti kulingana na masharti tofauti. Tumia switch statement kuchagua moja ya vizuizi vingi vya msimbo vya kutekelezwa.

```javascript
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
  // code block
}
```

```javascript
// program using switch statement
let a = 2;

switch (a) {
  case 1:
    a = "one";
    break;
  case 2:
    a = "two";
    break;
  default:
    a = "not found";
    break;
}
console.log(`The value is ${a}`);
```

✅ Jaribu uelewa wako wa msimbo huu na msimbo ufuatao kwa kuendesha kwenye console ya kivinjari. Badilisha thamani za kigezo a ili kubadilisha matokeo ya `console.log()`.

## Waendeshaji wa Kimantiki na Booleans

Maamuzi yanaweza kuhitaji kulinganisha zaidi ya moja, na yanaweza kuunganishwa pamoja na waendeshaji wa kimantiki ili kutoa thamani ya Boolean.

| Alama  | Maelezo                                                                                     | Mfano                                                                 |
| ------ | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `&&`   | **AND ya Kimantiki**: Inalinganisha maelezo mawili ya Boolean. Inarudisha true **tu** ikiwa pande zote mbili ni kweli | `(5 > 6) && (5 < 6 ) //Upande mmoja ni false, mwingine ni true. Inarudisha false` |
| `\|\|` | **OR ya Kimantiki**: Inalinganisha maelezo mawili ya Boolean. Inarudisha true ikiwa angalau upande mmoja ni kweli     | `(5 > 6) \|\| (5 < 6) //Upande mmoja ni false, mwingine ni true. Inarudisha true` |
| `!`    | **NOT ya Kimantiki**: Inarudisha thamani kinyume ya maelezo ya Boolean                             | `!(5 > 6) // 5 si kubwa kuliko 6, lakini "!" itarudisha true`         |

## Masharti na Maamuzi kwa Waendeshaji wa Kimantiki

Waendeshaji wa kimantiki wanaweza kutumika kuunda masharti katika if..else statements.

```javascript
let currentMoney;
let laptopPrice;
let laptopDiscountPrice = laptopPrice - laptopPrice * 0.2; //Laptop price at 20 percent off

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  //Condition is true. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

### Operator ya Negation

Umeona hadi sasa jinsi unavyoweza kutumia if...else statement kuunda mantiki ya masharti. Chochote kinachoingia kwenye if kinahitaji kutathminiwa kama kweli/si kweli. Kwa kutumia operator ya `!` unaweza _kukanusha_ maelezo. Inaweza kuonekana kama hivi:

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

### Maelezo ya Ternary

If...else si njia pekee ya kueleza mantiki ya maamuzi. Unaweza pia kutumia kitu kinachoitwa operator ya ternary. Sintaksia yake inaonekana kama hii:

```javascript
let variable = condition ? <return this if true> : <return this if false>
```

Hapa chini kuna mfano wa wazi zaidi:

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ Chukua dakika moja kusoma msimbo huu mara kadhaa. Je, unaelewa jinsi waendeshaji hawa wanavyofanya kazi?

Hapo juu inasema kwamba:

- ikiwa `firstNumber` ni kubwa kuliko `secondNumber`
- basi weka `firstNumber` kwa `biggestNumber`
- vinginevyo weka `secondNumber`.

Maelezo ya ternary ni njia fupi tu ya kuandika msimbo hapa chini:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

---

## 🚀 Changamoto

Unda programu iliyoandikwa kwanza kwa waendeshaji wa kimantiki, kisha iandike upya kwa kutumia maelezo ya ternary. Je, ni sintaksia ipi unayopendelea?

---

## Jaribio la Baada ya Somo

[Jaribio la baada ya somo](https://ff-quizzes.netlify.app/web/quiz/12)

## Mapitio na Kujisomea

Soma zaidi kuhusu waendeshaji wengi waliopo kwa mtumiaji [kwenye MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators).

Pitisha muda kupitia zana nzuri ya [operator lookup](https://joshwcomeau.com/operator-lookup/) ya Josh Comeau!

## Kazi

[Waendeshaji](assignment.md)

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, inashauriwa kutumia tafsiri ya kitaalamu ya binadamu. Hatutawajibika kwa maelewano mabaya au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.