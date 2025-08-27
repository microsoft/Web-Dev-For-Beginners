<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "888609c48329c280ca2477d2df40f2e5",
  "translation_date": "2025-08-27T22:48:45+00:00",
  "source_file": "2-js-basics/3-making-decisions/README.md",
  "language_code": "tl"
}
-->
# Mga Batayan ng JavaScript: Paggawa ng Desisyon

![Mga Batayan ng JavaScript - Paggawa ng Desisyon](../../../../translated_images/webdev101-js-decisions.69e1b20f272dd1f0b1cb2f8adaff3ed2a77c4f91db96d8a0594132a353fa189a.tl.png)

> Sketchnote ni [Tomomi Imura](https://twitter.com/girlie_mac)

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/11)

Ang paggawa ng desisyon at pagkontrol sa pagkakasunod-sunod ng pagtakbo ng iyong code ay nagpapalakas at nagpaparami ng gamit ng iyong code. Ang seksyong ito ay tumatalakay sa syntax para sa pagkontrol ng daloy ng data sa JavaScript at ang kahalagahan nito kapag ginamit sa Boolean na uri ng data.

[![Paggawa ng Desisyon](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Paggawa ng Desisyon")

> 🎥 I-click ang imahe sa itaas para sa isang video tungkol sa paggawa ng desisyon.

> Maaari mong kunin ang araling ito sa [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon)!

## Maikling Pagbabalik-Aral sa Booleans

Ang Booleans ay may dalawang halaga lamang: `true` o `false`. Ang Booleans ay tumutulong sa paggawa ng desisyon kung aling mga linya ng code ang dapat tumakbo kapag natugunan ang ilang mga kondisyon.

Itakda ang iyong boolean na maging true o false tulad nito:

`let myTrueBool = true`  
`let myFalseBool = false`

✅ Ang Booleans ay ipinangalan sa English na matematikong si George Boole (1815–1864), na isa ring pilosopo at lohiko.

## Mga Operator ng Paghahambing at Booleans

Ang mga operator ay ginagamit upang suriin ang mga kondisyon sa pamamagitan ng paggawa ng mga paghahambing na lilikha ng Boolean na halaga. Narito ang listahan ng mga operator na madalas gamitin.

| Simbolo | Paglalarawan                                                                                                                                                   | Halimbawa          |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `<`     | **Mas mababa sa**: Inihahambing ang dalawang halaga at ibinabalik ang `true` Boolean na uri ng data kung ang halaga sa kaliwang bahagi ay mas mababa kaysa sa kanan | `5 < 6 // true`    |
| `<=`    | **Mas mababa o katumbas sa**: Inihahambing ang dalawang halaga at ibinabalik ang `true` Boolean na uri ng data kung ang halaga sa kaliwang bahagi ay mas mababa o katumbas sa kanan | `5 <= 6 // true`   |
| `>`     | **Mas mataas sa**: Inihahambing ang dalawang halaga at ibinabalik ang `true` Boolean na uri ng data kung ang halaga sa kaliwang bahagi ay mas mataas kaysa sa kanan | `5 > 6 // false`   |
| `>=`    | **Mas mataas o katumbas sa**: Inihahambing ang dalawang halaga at ibinabalik ang `true` Boolean na uri ng data kung ang halaga sa kaliwang bahagi ay mas mataas o katumbas sa kanan | `5 >= 6 // false`  |
| `===`   | **Mahigpit na pagkakapantay-pantay**: Inihahambing ang dalawang halaga at ibinabalik ang `true` Boolean na uri ng data kung ang mga halaga sa kanan at kaliwa ay magkapantay AT magkapareho ng uri ng data. | `5 === 6 // false` |
| `!==`   | **Hindi pagkakapantay-pantay**: Inihahambing ang dalawang halaga at ibinabalik ang kabaligtaran na Boolean na halaga ng kung ano ang ibabalik ng mahigpit na pagkakapantay-pantay na operator | `5 !== 6 // true`  |

✅ Subukan ang iyong kaalaman sa pamamagitan ng pagsusulat ng ilang mga paghahambing sa console ng iyong browser. Mayroon bang data na ibinalik na ikinagulat mo?

## If Statement

Ang if statement ay magpapatakbo ng code sa pagitan ng mga block nito kung ang kondisyon ay true.

```javascript
if (condition) {
  //Condition is true. Code in this block will run.
}
```

Ang mga logical operator ay madalas gamitin upang bumuo ng kondisyon.

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

## If..Else Statement

Ang `else` statement ay magpapatakbo ng code sa pagitan ng mga block nito kapag ang kondisyon ay false. Opsyonal ito sa isang `if` statement.

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

✅ Subukan ang iyong pag-unawa sa code na ito at sa sumusunod na code sa pamamagitan ng pagpapatakbo nito sa console ng browser. Baguhin ang mga halaga ng mga variable na currentMoney at laptopPrice upang baguhin ang ibinalik na `console.log()`.

## Switch Statement

Ang `switch` statement ay ginagamit upang magsagawa ng iba't ibang aksyon batay sa iba't ibang kondisyon. Gamitin ang `switch` statement upang pumili ng isa sa maraming block ng code na isasagawa.

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

✅ Subukan ang iyong pag-unawa sa code na ito at sa sumusunod na code sa pamamagitan ng pagpapatakbo nito sa console ng browser. Baguhin ang mga halaga ng variable na a upang baguhin ang ibinalik na `console.log()`.

## Mga Logical Operator at Booleans

Ang mga desisyon ay maaaring mangailangan ng higit sa isang paghahambing, at maaaring pagsamahin gamit ang mga logical operator upang makabuo ng Boolean na halaga.

| Simbolo | Paglalarawan                                                                                     | Halimbawa                                                                 |
| ------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `&&`    | **Logical AND**: Inihahambing ang dalawang Boolean na expression. Nagbabalik ng true **lamang** kung parehong panig ay true | `(5 > 6) && (5 < 6 ) //Isang panig ay false, ang isa ay true. Nagbabalik ng false` |
| `\|\|`  | **Logical OR**: Inihahambing ang dalawang Boolean na expression. Nagbabalik ng true kung kahit isa sa mga panig ay true     | `(5 > 6) \|\| (5 < 6) //Isang panig ay false, ang isa ay true. Nagbabalik ng true` |
| `!`     | **Logical NOT**: Nagbabalik ng kabaligtaran na halaga ng isang Boolean na expression                             | `!(5 > 6) // 5 ay hindi mas mataas kaysa sa 6, ngunit ang "!" ay magbabalik ng true`         |

## Mga Kondisyon at Desisyon gamit ang Logical Operators

Ang mga logical operator ay maaaring gamitin upang bumuo ng mga kondisyon sa if..else statements.

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

### Negation operator

Nakikita mo na kung paano mo magagamit ang isang `if...else` statement upang lumikha ng conditional logic. Ang anumang ilalagay sa isang `if` ay kailangang magresulta sa true/false. Sa pamamagitan ng paggamit ng `!` operator, maaari mong _i-negate_ ang expression. Ganito ang hitsura nito:

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

### Ternary expressions

Ang `if...else` ay hindi lamang ang paraan upang ipahayag ang lohika ng desisyon. Maaari ka ring gumamit ng tinatawag na ternary operator. Ang syntax nito ay ganito:

```javascript
let variable = condition ? <return this if true> : <return this if false>
```

Narito ang isang mas malinaw na halimbawa:

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ Maglaan ng ilang minuto upang basahin ang code na ito nang ilang beses. Nauunawaan mo ba kung paano gumagana ang mga operator na ito?

Ang nasa itaas ay nagsasaad na:

- kung ang `firstNumber` ay mas mataas kaysa sa `secondNumber`
- kung gayon, i-assign ang `firstNumber` sa `biggestNumber`
- kung hindi, i-assign ang `secondNumber`.

Ang ternary expression ay isang mas compact na paraan ng pagsulat ng code sa ibaba:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

---

## 🚀 Hamon

Gumawa ng isang programa na unang isinulat gamit ang logical operators, at pagkatapos ay isulat muli ito gamit ang isang ternary expression. Ano ang mas gusto mong syntax?

---

## Post-Lecture Quiz

[Post-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/12)

## Review & Self Study

Magbasa pa tungkol sa maraming operator na magagamit ng user [sa MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators).

Suriin ang kahanga-hangang [operator lookup](https://joshwcomeau.com/operator-lookup/) ni Josh Comeau!

## Assignment

[Operators](assignment.md)

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na pinagmulan. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.