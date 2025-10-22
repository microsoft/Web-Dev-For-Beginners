<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "90a3c32c3377f83ab750c2447c77ab98",
  "translation_date": "2025-10-22T15:18:39+00:00",
  "source_file": "2-js-basics/3-making-decisions/README.md",
  "language_code": "tl"
}
-->
# Mga Pangunahing Kaalaman sa JavaScript: Paggawa ng Desisyon

![Mga Pangunahing Kaalaman sa JavaScript - Paggawa ng Desisyon](../../../../translated_images/webdev101-js-decisions.69e1b20f272dd1f0b1cb2f8adaff3ed2a77c4f91db96d8a0594132a353fa189a.tl.png)

> Sketchnote ni [Tomomi Imura](https://twitter.com/girlie_mac)

Naisip mo na ba kung paano gumagawa ng matatalinong desisyon ang mga aplikasyon? Tulad ng kung paano pumipili ang isang navigation system ng pinakamabilis na ruta, o kung paano nagdedesisyon ang isang thermostat kung kailan bubuksan ang init? Ito ang pangunahing konsepto ng paggawa ng desisyon sa programming.

Katulad ng Analytical Engine ni Charles Babbage na idinisenyo upang sundin ang iba't ibang sequence ng operasyon batay sa mga kondisyon, ang mga modernong JavaScript program ay kailangang gumawa ng mga pagpipilian batay sa iba't ibang sitwasyon. Ang kakayahang mag-branch at gumawa ng desisyon ang nagbabago sa static na code upang maging responsive at matalinong mga aplikasyon.

Sa araling ito, matututunan mo kung paano ipatupad ang conditional logic sa iyong mga programa. Susuriin natin ang mga conditional statement, comparison operators, at logical expressions na nagbibigay-daan sa iyong code na suriin ang mga sitwasyon at tumugon nang naaangkop.

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/11)

Ang kakayahang gumawa ng desisyon at kontrolin ang daloy ng programa ay isang mahalagang aspeto ng programming. Saklaw ng seksyong ito kung paano kontrolin ang execution path ng iyong mga JavaScript program gamit ang Boolean values at conditional logic.

[![Paggawa ng Desisyon](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Paggawa ng Desisyon")

> 🎥 I-click ang imahe sa itaas para sa isang video tungkol sa paggawa ng desisyon.

> Maaari mong kunin ang araling ito sa [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon)!

## Maikling Pagbabalik-Aral sa Booleans

Bago suriin ang paggawa ng desisyon, balikan natin ang Boolean values mula sa nakaraang aralin. Pinangalanan mula sa mathematician na si George Boole, ang mga value na ito ay kumakatawan sa binary states – alinman `true` o `false`. Walang kalabuan, walang gitnang estado.

Ang mga binary values na ito ang bumubuo sa pundasyon ng lahat ng computational logic. Ang bawat desisyon na ginagawa ng iyong programa ay sa huli ay nagreresulta sa Boolean evaluation.

Ang paggawa ng Boolean variables ay simple:

```javascript
let myTrueBool = true;
let myFalseBool = false;
```

Ito ay lumilikha ng dalawang variable na may explicit na Boolean values.

✅ Ang Booleans ay pinangalanan mula sa English mathematician, philosopher, at logician na si George Boole (1815–1864).

## Comparison Operators at Booleans

Sa praktika, bihira kang mag-set ng Boolean values nang manu-mano. Sa halip, gagawa ka ng mga ito sa pamamagitan ng pagsusuri ng mga kondisyon: "Mas malaki ba ang numerong ito kaysa sa isa?" o "Magkapantay ba ang mga value na ito?"

Ang mga comparison operator ang nagbibigay-daan sa mga pagsusuring ito. Kinukumpara nila ang mga value at nagbabalik ng Boolean results batay sa relasyon ng mga operands.

| Simbolo | Deskripsyon                                                                                                                                                   | Halimbawa          |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `<`    | **Mas mababa sa**: Kinukumpara ang dalawang value at nagbabalik ng `true` Boolean data type kung ang value sa kaliwang bahagi ay mas mababa kaysa sa kanan     | `5 < 6 // true`    |
| `<=`   | **Mas mababa o pantay sa**: Kinukumpara ang dalawang value at nagbabalik ng `true` Boolean data type kung ang value sa kaliwang bahagi ay mas mababa o pantay sa kanan | `5 <= 6 // true`   |
| `>`    | **Mas malaki sa**: Kinukumpara ang dalawang value at nagbabalik ng `true` Boolean data type kung ang value sa kaliwang bahagi ay mas malaki kaysa sa kanan     | `5 > 6 // false`   |
| `>=`   | **Mas malaki o pantay sa**: Kinukumpara ang dalawang value at nagbabalik ng `true` Boolean data type kung ang value sa kaliwang bahagi ay mas malaki o pantay sa kanan | `5 >= 6 // false`  |
| `===`  | **Strict equality**: Kinukumpara ang dalawang value at nagbabalik ng `true` Boolean data type kung ang mga value sa kanan at kaliwa ay magkapantay AT magkapareho ng data type | `5 === 6 // false` |
| `!==`  | **Inequality**: Kinukumpara ang dalawang value at nagbabalik ng kabaligtaran ng Boolean value na ibabalik ng strict equality operator                          | `5 !== 6 // true`  |

✅ Subukan ang iyong kaalaman sa pamamagitan ng pagsusulat ng ilang comparisons sa console ng iyong browser. May data bang nagbalik na ikinagulat mo?

## If Statement

Ang `if` statement ay parang pagtatanong sa iyong code. "Kung ang kondisyong ito ay totoo, gawin ang bagay na ito." Marahil ito ang pinakamahalagang tool na gagamitin mo para sa paggawa ng desisyon sa JavaScript.

Ganito ito gumagana:

```javascript
if (condition) {
  // Condition is true. Code in this block will run.
}
```

Ang kondisyon ay inilalagay sa loob ng mga parentheses, at kung ito ay `true`, pinapatakbo ng JavaScript ang code sa loob ng curly braces. Kung ito ay `false`, nilalaktawan lang ng JavaScript ang buong block.

Madalas mong gagamitin ang mga comparison operator upang lumikha ng mga kondisyong ito. Tingnan natin ang isang praktikal na halimbawa:

```javascript
let currentMoney = 1000;
let laptopPrice = 800;

if (currentMoney >= laptopPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

Dahil ang `1000 >= 800` ay nag-evaluate sa `true`, ang code sa loob ng block ay pinapatakbo, na nagpapakita ng "Getting a new laptop!" sa console.

## If..Else Statement

Pero paano kung gusto mong gawin ng iyong programa ang ibang bagay kapag ang kondisyon ay false? Dito pumapasok ang `else` – parang backup plan.

Ang `else` statement ay nagbibigay sa iyo ng paraan upang sabihin "kung ang kondisyong ito ay hindi totoo, gawin ang ibang bagay na ito."

```javascript
let currentMoney = 500;
let laptopPrice = 800;

if (currentMoney >= laptopPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  // Condition is false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

Ngayon, dahil ang `500 >= 800` ay `false`, nilalaktawan ng JavaScript ang unang block at pinapatakbo ang `else` block. Makikita mo ang "Can't afford a new laptop, yet!" sa console.

✅ Subukan ang iyong pag-unawa sa code na ito at sa sumusunod na code sa pamamagitan ng pagpapatakbo nito sa console ng browser. Baguhin ang mga value ng currentMoney at laptopPrice variables upang baguhin ang ibinalik na `console.log()`.

## Switch Statement

Minsan kailangan mong ikumpara ang isang value laban sa maraming opsyon. Bagama't maaari kang mag-chain ng maraming `if..else` statements, nagiging magulo ang ganitong paraan. Ang `switch` statement ay nagbibigay ng mas malinis na istruktura para sa paghawak ng maraming discrete values.

Ang konsepto ay kahalintulad ng mechanical switching systems na ginamit sa mga unang telephone exchanges – ang isang input value ang nagtatakda kung aling partikular na path ang susundan ng execution.

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

Ganito ang istruktura nito:
- Sinusuri ng JavaScript ang expression nang isang beses
- Tinitingnan nito ang bawat `case` upang makahanap ng match
- Kapag nakahanap ng match, pinapatakbo nito ang code block na iyon
- Ang `break` ang nagsasabi sa JavaScript na huminto at lumabas sa switch
- Kung walang match na case, pinapatakbo nito ang `default` block (kung mayroon ka nito)

```javascript
// Program using switch statement for day of week
let dayNumber = 2;
let dayName;

switch (dayNumber) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  default:
    dayName = "Unknown day";
    break;
}
console.log(`Today is ${dayName}`);
```

Sa halimbawang ito, nakikita ng JavaScript na ang `dayNumber` ay `2`, hinahanap ang matching `case 2`, itinatakda ang `dayName` sa "Tuesday", at pagkatapos ay lumalabas sa switch. Ang resulta? "Today is Tuesday" ang nalog sa console.

✅ Subukan ang iyong pag-unawa sa code na ito at sa sumusunod na code sa pamamagitan ng pagpapatakbo nito sa console ng browser. Baguhin ang mga value ng variable a upang baguhin ang ibinalik na `console.log()`.

## Logical Operators at Booleans

Ang mga kumplikadong desisyon ay madalas na nangangailangan ng pagsusuri ng maraming kondisyon nang sabay-sabay. Tulad ng Boolean algebra na nagbibigay-daan sa mga mathematician na pagsamahin ang mga logical expressions, ang programming ay nagbibigay ng logical operators upang ikonekta ang maraming Boolean conditions.

Ang mga operator na ito ay nagbibigay-daan sa mas sopistikadong conditional logic sa pamamagitan ng pagsasama ng mga simpleng true/false evaluations.

| Simbolo | Deskripsyon                                                                                     | Halimbawa                                                                 |
| ------ | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `&&`   | **Logical AND**: Kinukumpara ang dalawang Boolean expressions. Nagbabalik ng true **kung pareho** ang mga panig ay true | `(5 > 3) && (5 < 10) // Parehong panig ay true. Nagbabalik ng true` |
| `\|\|` | **Logical OR**: Kinukumpara ang dalawang Boolean expressions. Nagbabalik ng true kung kahit isa sa mga panig ay true     | `(5 > 10) \|\| (5 < 10) // Isang panig ay false, ang isa ay true. Nagbabalik ng true` |
| `!`    | **Logical NOT**: Nagbabalik ng kabaligtaran na value ng isang Boolean expression                             | `!(5 > 10) // Ang 5 ay hindi mas malaki sa 10, kaya ang "!" ay ginagawang true`         |

Ang mga operator na ito ay nagbibigay-daan sa iyo na pagsamahin ang mga kondisyon sa kapaki-pakinabang na paraan:
- AND (`&&`) nangangahulugan na ang parehong kondisyon ay dapat na true
- OR (`||`) nangangahulugan na kahit isa sa mga kondisyon ay dapat na true  
- NOT (`!`) binabaliktad ang true sa false (at kabaligtaran)

## Mga Kondisyon at Desisyon gamit ang Logical Operators

Tingnan natin ang mga logical operators sa aksyon gamit ang mas makatotohanang halimbawa:

```javascript
let currentMoney = 600;
let laptopPrice = 800;
let laptopDiscountPrice = laptopPrice - (laptopPrice * 0.2); // Laptop price at 20 percent off

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  // Condition is false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

Sa halimbawang ito: kinakalkula natin ang 20% discount price (640), pagkatapos ay sinusuri kung ang ating available funds ay sapat para sa buong presyo O sa discounted price. Dahil ang 600 ay tumutugma sa threshold ng discounted price na 640, ang kondisyon ay nag-evaluate sa true.

### Negation Operator

Minsan mas madali ang mag-isip kung kailan ang isang bagay ay HINDI totoo. Tulad ng sa halip na magtanong "Naka-login ba ang user?", maaaring gusto mong magtanong "Hindi ba naka-login ang user?" Ang exclamation mark (`!`) operator ang nagbabaliktad ng logic para sa iyo.

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

Ang `!` operator ay parang sinasabi "ang kabaligtaran ng..." – kung ang isang bagay ay `true`, ginagawa itong `false` ng `!`, at kabaligtaran.

### Ternary Expressions

Para sa simpleng conditional assignments, nagbibigay ang JavaScript ng **ternary operator**. Ang maikling syntax na ito ay nagbibigay-daan sa iyo na magsulat ng conditional expression sa isang linya, kapaki-pakinabang kapag kailangan mong mag-assign ng isa sa dalawang value batay sa isang kondisyon.

```javascript
let variable = condition ? returnThisIfTrue : returnThisIfFalse;
```

Binabasa ito tulad ng isang tanong: "Totoo ba ang kondisyong ito? Kung oo, gamitin ang value na ito. Kung hindi, gamitin ang value na iyon."

Narito ang isang mas konkretong halimbawa:

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ Maglaan ng ilang minuto upang basahin ang code na ito nang ilang beses. Nauunawaan mo ba kung paano gumagana ang mga operator na ito?

Narito ang sinasabi ng linyang ito: "Mas malaki ba ang `firstNumber` kaysa sa `secondNumber`? Kung oo, ilagay ang `firstNumber` sa `biggestNumber`. Kung hindi, ilagay ang `secondNumber` sa `biggestNumber`."

Ang ternary operator ay isang mas maikling paraan upang isulat ang tradisyunal na `if..else` statement:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

Parehong nagbubunga ng magkaparehong resulta ang dalawang paraan. Ang ternary operator ay nag-aalok ng pagiging maikli, habang ang tradisyunal na if-else na istruktura ay maaaring mas madaling basahin para sa mas kumplikadong mga kondisyon.

---

## 🚀 Hamon

Gumawa ng programa na unang isinulat gamit ang logical operators, at pagkatapos ay isulat muli ito gamit ang ternary expression. Ano ang mas gusto mong syntax?

---

## Hamon ng GitHub Copilot Agent 🚀

Gamitin ang Agent mode upang tapusin ang sumusunod na hamon:

**Deskripsyon:** Gumawa ng komprehensibong grade calculator na nagpapakita ng maraming konsepto ng paggawa ng desisyon mula sa araling ito, kabilang ang if-else statements, switch statements, logical operators, at ternary expressions.

**Prompt:** Sumulat ng JavaScript program na kumukuha ng numerical score ng isang estudyante (0-100) at tinutukoy ang kanilang letter grade gamit ang sumusunod na pamantayan:
- A: 90-100
- B: 80-89  
- C: 70-79
- D: 60-69
- F: Mas mababa sa 60

Mga Kinakailangan:
1. Gumamit ng if-else statement upang matukoy ang letter grade
2. Gumamit ng logical operators upang suriin kung ang estudyante ay pumasa (grade >= 60) AT may honors (grade >= 90)
3. Gumamit ng switch statement upang magbigay ng partikular na feedback para sa bawat letter grade
4. Gumamit ng ternary operator upang matukoy kung ang estudyante ay kwalipikado para sa susunod na kurso (grade >= 70)
5. Isama ang input validation upang matiyak na ang score ay nasa pagitan ng 0 at 100

Subukan ang iyong programa gamit ang iba't ibang scores kabilang ang edge cases tulad ng 59, 60, 89, 90, at mga invalid inputs.

Alamin ang higit pa tungkol sa [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) dito.

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/12)

## Review & Self Study

Basahin ang higit pa tungkol sa maraming operator na available sa user [sa MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators).

Dumaan sa kahanga-hangang [operator lookup](https://joshwcomeau.com/operator-lookup/) ni Josh Comeau!

## Assignment

[Operators](assignment.md)

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na mapagkakatiwalaang pinagmulan. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.