<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f7009631b73556168ca435120a231c98",
  "translation_date": "2025-08-29T16:53:39+00:00",
  "source_file": "2-js-basics/3-making-decisions/README.md",
  "language_code": "lt"
}
-->
# JavaScript pagrindai: Sprendimų priėmimas

![JavaScript pagrindai - Sprendimų priėmimas](../../../../translated_images/webdev101-js-decisions.69e1b20f272dd1f0b1cb2f8adaff3ed2a77c4f91db96d8a0594132a353fa189a.lt.png)

> Sketchnote sukūrė [Tomomi Imura](https://twitter.com/girlie_mac)

## Klausimai prieš paskaitą

[Klausimai prieš paskaitą](https://ff-quizzes.netlify.app/web/quiz/11)

Sprendimų priėmimas ir kodo vykdymo eigos valdymas padaro jūsų kodą pakartotinai naudojamą ir patikimą. Šiame skyriuje aptariama JavaScript duomenų srauto valdymo sintaksė ir jos svarba naudojant su loginiais (Boolean) duomenų tipais.

[![Sprendimų priėmimas](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Sprendimų priėmimas")

> 🎥 Spustelėkite aukščiau esančią nuotrauką, kad peržiūrėtumėte vaizdo įrašą apie sprendimų priėmimą.

> Šią pamoką galite rasti [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon)!

## Trumpas loginių reikšmių (Boolean) priminimas

Loginės reikšmės gali turėti tik dvi reikšmes: `true` arba `false`. Jos padeda nuspręsti, kurios kodo eilutės turėtų būti vykdomos, kai tenkinamos tam tikros sąlygos.

Nustatykite loginę reikšmę kaip true arba false taip:

`let myTrueBool = true`  
`let myFalseBool = false`

✅ Loginės reikšmės pavadintos pagal anglų matematiką, filosofą ir logiką George'ą Boole'ą (1815–1864).

## Palyginimo operatoriai ir loginės reikšmės

Operatoriai naudojami sąlygoms įvertinti, atliekant palyginimus, kurie sukuria loginę reikšmę. Žemiau pateikiamas dažnai naudojamų operatorių sąrašas.

| Simbolis | Aprašymas                                                                                                                                                   | Pavyzdys           |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| `<`      | **Mažiau nei**: Palygina dvi reikšmes ir grąžina `true`, jei kairėje pusėje esanti reikšmė yra mažesnė už dešinėje                                           | `5 < 6 // true`     |
| `<=`     | **Mažiau arba lygu**: Palygina dvi reikšmes ir grąžina `true`, jei kairėje pusėje esanti reikšmė yra mažesnė arba lygi dešinėje                              | `5 <= 6 // true`    |
| `>`      | **Daugiau nei**: Palygina dvi reikšmes ir grąžina `true`, jei kairėje pusėje esanti reikšmė yra didesnė už dešinėje                                          | `5 > 6 // false`    |
| `>=`     | **Daugiau arba lygu**: Palygina dvi reikšmes ir grąžina `true`, jei kairėje pusėje esanti reikšmė yra didesnė arba lygi dešinėje                             | `5 >= 6 // false`   |
| `===`    | **Griežta lygybė**: Palygina dvi reikšmes ir grąžina `true`, jei reikšmės kairėje ir dešinėje yra lygios IR yra to paties duomenų tipo                       | `5 === 6 // false`  |
| `!==`    | **Nelygybė**: Palygina dvi reikšmes ir grąžina priešingą loginę reikšmę, nei griežtos lygybės operatorius                                                   | `5 !== 6 // true`   |

✅ Patikrinkite savo žinias, rašydami palyginimus naršyklės konsolėje. Ar kokie nors grąžinti duomenys jus nustebino?

## If sakinys

`if` sakinys vykdys kodą tarp savo blokų, jei sąlyga yra teisinga.

```javascript
if (condition) {
  //Condition is true. Code in this block will run.
}
```

Loginiai operatoriai dažnai naudojami sąlygai sudaryti.

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

## If..Else sakinys

`else` sakinys vykdys kodą tarp savo blokų, kai sąlyga yra klaidinga. Jis yra neprivalomas naudojant `if` sakinį.

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

✅ Patikrinkite savo supratimą apie šį kodą ir žemiau pateiktą kodą, vykdydami jį naršyklės konsolėje. Pakeiskite `currentMoney` ir `laptopPrice` kintamųjų reikšmes, kad pakeistumėte grąžintą `console.log()`.

## Switch sakinys

`switch` sakinys naudojamas skirtingiems veiksmams atlikti, atsižvelgiant į skirtingas sąlygas. Naudokite `switch` sakinį, kad pasirinktumėte vieną iš daugelio vykdytinų kodo blokų.

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

✅ Patikrinkite savo supratimą apie šį kodą ir žemiau pateiktą kodą, vykdydami jį naršyklės konsolėje. Pakeiskite kintamojo `a` reikšmes, kad pakeistumėte grąžintą `console.log()`.

## Loginiai operatoriai ir loginės reikšmės

Sprendimams gali prireikti daugiau nei vieno palyginimo, ir jie gali būti sujungti naudojant loginius operatorius, kad būtų gauta loginė reikšmė.

| Simbolis | Aprašymas                                                                                     | Pavyzdys                                                                 |
| -------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `&&`     | **Loginis IR**: Palygina dvi logines išraiškas. Grąžina `true` tik tada, jei abi pusės yra teisingos | `(5 > 6) && (5 < 6 ) // Viena pusė klaidinga, kita teisinga. Grąžina false` |
| `\|\|`   | **Loginis ARBA**: Palygina dvi logines išraiškas. Grąžina `true`, jei bent viena pusė yra teisinga | `(5 > 6) \|\| (5 < 6) // Viena pusė klaidinga, kita teisinga. Grąžina true` |
| `!`      | **Loginis NE**: Grąžina priešingą loginės išraiškos reikšmę                                   | `!(5 > 6) // 5 nėra didesnis už 6, bet "!" grąžins true`                |

## Sąlygos ir sprendimai su loginiais operatoriais

Loginiai operatoriai gali būti naudojami sąlygoms sudaryti `if..else` sakiniuose.

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

### Neigimo operatorius

Jūs jau matėte, kaip galima naudoti `if...else` sakinį sąlyginei logikai kurti. Viskas, kas patenka į `if`, turi būti įvertinta kaip true/false. Naudodami `!` operatorių galite _neigti_ išraišką. Tai atrodytų taip:

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

### Ternarinės išraiškos

`if...else` nėra vienintelis būdas išreikšti sprendimų logiką. Taip pat galite naudoti vadinamąjį ternarinį operatorių. Jo sintaksė atrodo taip:

```javascript
let variable = condition ? <return this if true> : <return this if false>
```

Žemiau pateiktas konkretesnis pavyzdys:

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ Skirkite minutę šiam kodui perskaityti kelis kartus. Ar suprantate, kaip veikia šie operatoriai?

Aukščiau pateiktas kodas sako:

- jei `firstNumber` yra didesnis už `secondNumber`
- tada priskirkite `firstNumber` kintamajam `biggestNumber`
- kitu atveju priskirkite `secondNumber`.

Ternarinė išraiška yra tiesiog kompaktiškas būdas parašyti žemiau pateiktą kodą:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

---

## 🚀 Iššūkis

Sukurkite programą, kuri pirmiausia būtų parašyta naudojant loginius operatorius, o tada perrašykite ją naudodami ternarinę išraišką. Kuris sintaksės būdas jums labiau patinka?

---

## Klausimai po paskaitos

[Klausimai po paskaitos](https://ff-quizzes.netlify.app/web/quiz/12)

## Peržiūra ir savarankiškas mokymasis

Skaitykite daugiau apie daugybę vartotojui prieinamų operatorių [MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators).

Peržiūrėkite nuostabų Josh Comeau [operatorių vadovą](https://joshwcomeau.com/operator-lookup/)!

## Užduotis

[Operatoriai](assignment.md)

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Kritinei informacijai rekomenduojama naudoti profesionalų žmogaus vertimą. Mes neprisiimame atsakomybės už nesusipratimus ar klaidingus aiškinimus, atsiradusius dėl šio vertimo naudojimo.