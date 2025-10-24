<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "90a3c32c3377f83ab750c2447c77ab98",
  "translation_date": "2025-10-24T16:08:41+00:00",
  "source_file": "2-js-basics/3-making-decisions/README.md",
  "language_code": "my"
}
-->
# JavaScript အခြေခံ: ဆုံးဖြတ်ချက်များလုပ်ခြင်း

![JavaScript အခြေခံ - ဆုံးဖြတ်ချက်များလုပ်ခြင်း](../../../../translated_images/webdev101-js-decisions.69e1b20f272dd1f0b1cb2f8adaff3ed2a77c4f91db96d8a0594132a353fa189a.my.png)

> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

အက်ပလီကေးရှင်းတွေ ဘယ်လိုအလိုအလျောက် ဆုံးဖြတ်ချက်တွေ လုပ်နိုင်သလဲဆိုတာ သင်မေးဖူးပါသလား? ဥပမာ - လမ်းကြောင်းအမြန်ဆုံးကို ရွေးချယ်တဲ့ navigation system, အပူပေးစနစ်ကို ဘယ်အချိန်မှာ ဖွင့်ရမလဲဆိုတာ ဆုံးဖြတ်တဲ့ thermostat စသည်တို့ပါ။ ဒီဟာက programming မှာ အခြေခံသော ဆုံးဖြတ်ချက်လုပ်ခြင်း၏ အဓိကအယူအဆဖြစ်ပါတယ်။

Charles Babbage ရဲ့ Analytical Engine က အခြေအနေအပေါ် မူတည်ပြီး လုပ်ဆောင်မှုအဆင့်တွေကို အခြားနည်းလမ်းတွေနဲ့ လိုက်နာဖို့ ဒီဇိုင်းဆွဲထားသလိုပဲ၊ ယနေ့ခေတ် JavaScript အစီအစဉ်တွေဟာ အခြေအနေအမျိုးမျိုးအပေါ် မူတည်ပြီး ရွေးချယ်မှုတွေ လုပ်ဖို့ လိုအပ်ပါတယ်။ ဒီလို branch လုပ်ပြီး ဆုံးဖြတ်ချက်တွေ လုပ်နိုင်စွမ်းက static code ကို responsive, intelligent applications အဖြစ် ပြောင်းလဲပေးပါတယ်။

ဒီသင်ခန်းစာမှာ သင့်ရဲ့အစီအစဉ်တွေမှာ conditional logic ကို ဘယ်လိုအသုံးပြုရမလဲ သင်ယူပါမယ်။ Conditional statements, comparison operators, logical expressions တွေကို လေ့လာပြီး သင့် code က အခြေအနေတွေကို အကဲဖြတ်ပြီး သင့်တော်တဲ့အဖြေကို ပြန်လည်ပေးနိုင်စေပါမယ်။

## သင်ခန်းစာမတိုင်မီ Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/11)

အစီအစဉ်တွေကို ဆုံးဖြတ်ချက်လုပ်နိုင်စွမ်းနဲ့ control လုပ်နိုင်စွမ်းက programming ရဲ့ အခြေခံအပိုင်းဖြစ်ပါတယ်။ ဒီအပိုင်းမှာ Boolean values နဲ့ conditional logic ကို အသုံးပြုပြီး သင့် JavaScript အစီအစဉ်တွေကို ဘယ်လို control လုပ်ရမလဲကို လေ့လာပါမယ်။

[![Making Decisions](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Making Decisions")

> 🎥 အပေါ်ကပုံကို click လုပ်ပြီး ဆုံးဖြတ်ချက်လုပ်ခြင်းအကြောင်း video ကို ကြည့်ပါ။

> ဒီသင်ခန်းစာကို [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon) မှာလည်း လေ့လာနိုင်ပါတယ်။

## Booleans အကြောင်းအကျဉ်းချုပ်

ဆုံးဖြတ်ချက်လုပ်ခြင်းကို လေ့လာမယ့်အခါမှာ၊ အရင်ဆုံး Boolean values ကို ပြန်လည်သုံးသပ်ကြရအောင်။ George Boole ဆိုတဲ့ သင်္ချာပညာရှင်ရဲ့နာမည်ကို ယူထားတဲ့ ဒီ values တွေဟာ binary states ကို ကိုယ်စားပြုပါတယ် - `true` ဒါမှမဟုတ် `false` ဖြစ်ပါတယ်။ အဓိကအားဖြင့် အလယ်အလတ်အခြေအနေမရှိပါဘူး။

ဒီ binary values တွေဟာ computational logic အားလုံးရဲ့ အခြေခံဖြစ်ပါတယ်။ သင့်ရဲ့အစီအစဉ်က ဆုံးဖြတ်ချက်လုပ်တဲ့အခါမှာ အဆုံးသတ်မှာ Boolean အကဲဖြတ်မှုတစ်ခုအဖြစ် ပြောင်းလဲသွားပါတယ်။

Boolean variables ဖန်တီးခြင်းက ရိုးရှင်းပါတယ်။

```javascript
let myTrueBool = true;
let myFalseBool = false;
```

ဒီဟာက explicit Boolean values တွေပါရှိတဲ့ variables နှစ်ခုကို ဖန်တီးပေးပါတယ်။

✅ Booleans တွေဟာ အင်္ဂလိပ်သင်္ချာပညာရှင်၊ အတွေးအမြင်ပညာရှင်နဲ့ logic ပညာရှင် George Boole (1815–1864) ရဲ့နာမည်ကို ယူထားတာဖြစ်ပါတယ်။

## Comparison Operators နဲ့ Booleans

အမှန်တကယ်မှာ Boolean values တွေကို လက်နဲ့မထည့်ရပါဘူး။ အစားအစား အခြေအနေတွေကို အကဲဖြတ်ခြင်းမှတစ်ဆင့် ဖန်တီးရပါမယ် - "ဒီနံပါတ်က အဲဒီနံပါတ်ထက် ကြီးနေလား?" ဒါမှမဟုတ် "ဒီ values တွေ တူနေလား?"

Comparison operators တွေက ဒီအကဲဖြတ်မှုတွေကို လုပ်ဆောင်နိုင်စေပါတယ်။ ဒါတွေက values တွေကို နှိုင်းယှဉ်ပြီး operands တွေကြားက ဆက်စပ်မှုအပေါ် မူတည်ပြီး Boolean results တွေကို ပြန်ပေးပါတယ်။

| Symbol | Description                                                                                                                                                   | Example            |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `<`    | **Less than**: ဘယ်ဘက်က value ဟာ ညာဘက်က value ထက် သေးနေရင် `true` Boolean data type ကို ပြန်ပေးပါတယ်                              | `5 < 6 // true`    |
| `<=`   | **Less than or equal to**: ဘယ်ဘက်က value ဟာ ညာဘက်က value ထက် သေးနေရင် ဒါမှမဟုတ် တူနေရင် `true` Boolean data type ကို ပြန်ပေးပါတယ်      | `5 <= 6 // true`   |
| `>`    | **Greater than**: ဘယ်ဘက်က value ဟာ ညာဘက်က value ထက် ကြီးနေရင် `true` Boolean data type ကို ပြန်ပေးပါတယ်                         | `5 > 6 // false`   |
| `>=`   | **Greater than or equal to**: ဘယ်ဘက်က value ဟာ ညာဘက်က value ထက် ကြီးနေရင် ဒါမှမဟုတ် တူနေရင် `true` Boolean data type ကို ပြန်ပေးပါတယ် | `5 >= 6 // false`  |
| `===`  | **Strict equality**: ဘယ်ဘက်နဲ့ ညာဘက်က values တွေ တူပြီး data type လည်း တူနေရင် `true` Boolean data type ကို ပြန်ပေးပါတယ်       | `5 === 6 // false` |
| `!==`  | **Inequality**: Strict equality operator က ပြန်ပေးမယ့် Boolean value ရဲ့ ဆန့်ကျင်ဘက်ကို ပြန်ပေးပါတယ်                                    | `5 !== 6 // true`  |

✅ သင့် browser ရဲ့ console မှာ comparison တွေ ရေးပြီး သင့်ရဲ့အသိပညာကို စမ်းသပ်ပါ။ ပြန်ပေးတဲ့ data တွေထဲမှာ အံ့ဩစရာရှိပါသလား?

## If Statement

`if` statement က သင့် code မှာ မေးခွန်းတစ်ခုမေးတာလိုပါပဲ။ "ဒီအခြေအနေက true ဖြစ်ရင် ဒီဟာကိုလုပ်ပါ။" JavaScript မှာ ဆုံးဖြတ်ချက်လုပ်ဖို့ အရေးကြီးဆုံး tool တစ်ခုပါ။

ဒါကို ဘယ်လိုအလုပ်လုပ်သလဲဆိုတာ ကြည့်ပါ:

```javascript
if (condition) {
  // Condition is true. Code in this block will run.
}
```

Condition ကို parentheses အတွင်းမှာ ထည့်ပြီး၊ `true` ဖြစ်ရင် JavaScript က curly braces အတွင်းမှာရှိတဲ့ code ကို run လုပ်ပါတယ်။ `false` ဖြစ်ရင်တော့ JavaScript က အဲဒီ block အားလုံးကို ကျော်သွားပါတယ်။

Comparison operators တွေကို သုံးပြီး ဒီ conditions တွေကို ဖန်တီးရမှာဖြစ်ပါတယ်။ အကဲဖြတ်မှုတစ်ခုကို ကြည့်ပါ:

```javascript
let currentMoney = 1000;
let laptopPrice = 800;

if (currentMoney >= laptopPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

`1000 >= 800` က `true` ဖြစ်တဲ့အတွက် block အတွင်းမှာရှိတဲ့ code ကို run လုပ်ပြီး console မှာ "Getting a new laptop!" ဆိုတဲ့စာကို ပြသပါတယ်။

## If..Else Statement

ဒါပေမယ့် condition က false ဖြစ်တဲ့အခါမှာ အခြားအရာတစ်ခုကို လုပ်ချင်ရင်ရော? ဒီအချိန်မှာ `else` က အကူအညီပေးပါတယ် - backup plan တစ်ခုလိုပါပဲ။

`else` statement က "ဒီ condition true မဖြစ်ရင် အခြားအရာတစ်ခုကို လုပ်ပါ" ဆိုတဲ့နည်းလမ်းကို ပေးပါတယ်။

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

အခုတော့ `500 >= 800` က `false` ဖြစ်တဲ့အတွက် JavaScript က ပထမ block ကို ကျော်ပြီး `else` block ကို run လုပ်ပါတယ်။ Console မှာ "Can't afford a new laptop, yet!" ဆိုတဲ့စာကို တွေ့ရပါမယ်။

✅ ဒီ code နဲ့ အောက်မှာရှိတဲ့ code ကို browser console မှာ run လုပ်ပြီး သင့်ရဲ့အသိပညာကို စမ်းသပ်ပါ။ currentMoney နဲ့ laptopPrice variables တွေကို ပြောင်းလဲပြီး console.log() ရဲ့ output ကို ပြောင်းလဲကြည့်ပါ။

## Switch Statement

တစ်ခါတစ်ရံမှာ value တစ်ခုကို အများကြီး options တွေကို နှိုင်းယှဉ်ဖို့ လိုအပ်တတ်ပါတယ်။ `if..else` statements အများကြီးကို chain လုပ်နိုင်ပေမယ့် ဒီနည်းလမ်းက မလွယ်ကူပါဘူး။ `switch` statement က အများကြီး options တွေကို handle လုပ်ဖို့ သန့်ရှင်းတဲ့ structure ကို ပေးပါတယ်။

ဒီ concept က အစောပိုင်းတယ်လီဖုန်း switch systems တွေလိုမျိုး - input value တစ်ခုက execution path ကို ဆုံးဖြတ်ပေးပါတယ်။

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

ဒီဟာက ဒီလိုအလုပ်လုပ်ပါတယ်:
- JavaScript က expression ကို တစ်ခါသာ အကဲဖြတ်တယ်
- `case` တစ်ခုချင်းစီကို match ရှာတယ်
- match တွေ့ရင် အဲဒီ code block ကို run လုပ်တယ်
- `break` က JavaScript ကို switch ထဲကနေ ထွက်ဖို့ ပြောတယ်
- ဘယ် case မှ မကိုက်ရင် `default` block ကို run လုပ်တယ် (default ရှိရင်)

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

ဒီဥပမာမှာ JavaScript က `dayNumber` ကို `2` ဖြစ်တာကို တွေ့ပြီး `case 2` ကို match လုပ်တယ်၊ `dayName` ကို "Tuesday" အဖြစ် သတ်မှတ်ပြီး switch ထဲကနေ ထွက်သွားတယ်။ အဖြေက "Today is Tuesday" ဆိုပြီး console မှာ ပြသပါတယ်။

✅ ဒီ code နဲ့ အောက်မှာရှိတဲ့ code ကို browser console မှာ run လုပ်ပြီး သင့်ရဲ့အသိပညာကို စမ်းသပ်ပါ။ variable a ရဲ့ value ကို ပြောင်းလဲပြီး console.log() ရဲ့ output ကို ပြောင်းလဲကြည့်ပါ။

## Logical Operators နဲ့ Booleans

ခက်ခဲတဲ့ ဆုံးဖြတ်ချက်တွေဟာ အခြေအနေများစွာကို တစ်ချိန်တည်းမှာ အကဲဖြတ်ဖို့ လိုအပ်တတ်ပါတယ်။ Boolean algebra က mathematicians တွေကို logical expressions တွေကို ပေါင်းစပ်ဖို့ ခွင့်ပြုသလိုပဲ၊ programming က logical operators တွေကို ပေးပြီး Boolean conditions တွေကို ပေါင်းစပ်နိုင်စေပါတယ်။

ဒီ operators တွေက ရိုးရှင်းတဲ့ true/false အကဲဖြတ်မှုတွေကို ပေါင်းစပ်ပြီး ခက်ခဲတဲ့ conditional logic တွေကို ဖန်တီးနိုင်စေပါတယ်။

| Symbol | Description                                                                                     | Example                                                                 |
| ------ | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `&&`   | **Logical AND**: Boolean expressions နှစ်ခုကို နှိုင်းယှဉ်တယ်။ နှစ်ဖက်လုံး true ဖြစ်ရင်သာ true ကို ပြန်ပေးတယ် | `(5 > 3) && (5 < 10) // နှစ်ဖက်လုံး true ဖြစ်တယ်။ true ကို ပြန်ပေးတယ်` |
| `\|\|` | **Logical OR**: Boolean expressions နှစ်ခုကို နှိုင်းယှဉ်တယ်။ တစ်ဖက်ခုခု true ဖြစ်ရင် true ကို ပြန်ပေးတယ်     | `(5 > 10) \|\| (5 < 10) // တစ်ဖက် false, တစ်ဖက် true. true ကို ပြန်ပေးတယ်` |
| `!`    | **Logical NOT**: Boolean expression ရဲ့ ဆန့်ကျင်ဘက်ကို ပြန်ပေးတယ်                             | `!(5 > 10) // 5 က 10 ထက် ကြီးမဟုတ်ဘူး၊ ဒါကြောင့် "!" က true ဖြစ်စေတယ်`         |

ဒီ operators တွေက conditions တွေကို အသုံးချဖို့ အကျိုးရှိတဲ့နည်းလမ်းတွေကို ပေးပါတယ်:
- AND (`&&`) ဆိုတာ conditions နှစ်ခုလုံး true ဖြစ်ရမယ်
- OR (`||`) ဆိုတာ condition တစ်ခုခု true ဖြစ်ရမယ်  
- NOT (`!`) ဆိုတာ true ကို false ပြောင်း (false ကို true ပြောင်း)

## Logical Operators နဲ့ Conditions

Logical operators တွေကို အသုံးပြုပြီး ပိုမိုလက်တွေ့ကျတဲ့ ဥပမာကို ကြည့်ပါ:

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

ဒီဥပမာမှာ - 20% discount price (640) ကိုတွက်ပြီး၊ full price OR discounted price ကို ကျော်နိုင်မလားဆိုတာ အကဲဖြတ်တယ်။ 600 က discounted price threshold (640) ကို ကျော်နိုင်တဲ့အတွက် condition က true ဖြစ်ပါတယ်။

### Negation Operator

တစ်ခါတစ်ရံမှာ တစ်ခုခု NOT true ဖြစ်တဲ့အခါကို စဉ်းစားရတာ ပိုလွယ်တတ်ပါတယ်။ ဥပမာ - "User logged in ဖြစ်နေလား?" ဆိုတာမေးမယ့်အစား "User NOT logged in ဖြစ်နေလား?" ဆိုတာမေးချင်တတ်ပါတယ်။ Exclamation mark (`!`) operator က logic ကို ပြောင်းပေးပါတယ်။

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

`!` operator က "ဆန့်ကျင်ဘက်..." ဆိုတာလိုပါပဲ - တစ်ခုခု `true` ဖြစ်ရင် `!` က `false` ဖြစ်စေတယ်၊ `false` ဖြစ်ရင် `true` ဖြစ်စေတယ်။

### Ternary Expressions

ရိုးရှင်းတဲ့ conditional assignments တွေအတွက် JavaScript က **ternary operator** ကို ပေးထားပါတယ်။ ဒီ syntax က condition တစ်ခုကို single line မှာရေးနိုင်စေပြီး condition အပေါ်မူတည်ပြီး value နှစ်ခုထဲက တစ်ခုကို assign လုပ်ဖို့ အသုံးဝင်ပါတယ်။

```javascript
let variable = condition ? returnThisIfTrue : returnThisIfFalse;
```

ဒါဟာ မေးခွန်းတစ်ခုလိုဖတ်ရတယ် - "ဒီ condition true ဖြစ်လား? true ဖြစ်ရင် ဒီ value ကို သုံးပါ။ false ဖြစ်ရင် အဲဒီ value ကို သုံးပါ။"

အောက်မှာ ပိုမိုလက်တွေ့ကျတဲ့ ဥပမာကို ကြည့်ပါ:

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ ဒီ code ကို အချိန်ယူပြီး အကြိမ်ကြိမ်ဖတ်ပါ။ ဒီ operators တွေ ဘယ်လိုအလုပ်လုပ်နေလဲဆိုတာ နားလည်ပါသလား?

ဒီ line က "firstNumber က secondNumber ထက် ကြီးနေလား? true ဖြစ်ရင် firstNumber ကို biggestNumber ထဲထည့်ပါ။ false ဖြစ်ရင် secondNumber ကို biggestNumber ထဲထည့်ပါ။" ဆိုတာကို ပြောပါတယ်။

Ternary operator က traditional `if..else` statement ကို ရေးတဲ့နည်းလမ်းကို ပိုမိုတိုတောင်းစေပါတယ်:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

နည်းလမ်းနှစ်ခုလုံးက အတူတူရလဒ်တွေကို ထုတ်ပေးပါတယ်။ Ternary operator က တိုတောင်းမှုကို ပေးပြီး၊ traditional if-else structure က ခက်ခဲတဲ့ conditions တွေအတွက် ပိုမိုဖတ်ရှင်းနိုင်စေပါတယ်။

---

## 🚀 စိန်ခေါ်မှု

Logical operators ကို အသုံးပြုပြီး အစီအစဉ်တစ်ခုကို ရေးပါ၊ ပြီးတော့ ternary expression ကို အသုံးပြုပြီး ပြန်ရေးပါ။ သင့်အကြိုက်ဆုံး syntax က ဘာလဲ?

---

## GitHub Copilot Agent Challenge 🚀

Agent mode ကို အသုံးပြုပြီး အောက်ပါစိန်ခေါ်မှုကို ပြီးမြောက်ပါ:

**ဖော်ပြချက်:** ဒီသင်ခန်းစာရဲ့ ဆုံးဖြတ်ချက်လုပ်နိုင်စွမ်း concept အများကြီးကို အသုံးပြုထားတဲ့ grade calculator တစ်ခုကို ဖန်တီးပါ။ အဲဒီမှာ if-else statements, switch statements, logical operators, ternary expressions တွေ ပါဝင်ရပါမယ်။

**အကြောင်းအရာ:** ကျောင်းသားတစ်ဦးရဲ့ အမှတ် (0-100) ကိုယူပြီး အောက်ပါအခြေခံချက်အတိုင်း letter grade ကို သတ်မှတ်ပါ:
- A: 90-100
- B: 80-89  
- C: 70-79
- D: 60-69
- F: 60 ထက်နည်း

လိုအပ်ချက်များ:
1. Letter grade ကို သတ်မှတ်ဖို့ if-else statement ကို အသုံးပြုပါ
2. ကျောင်းသားက pass (grade >= 60) ဖြစ်ပြီး honors (grade >= 90) ရရှိလားဆိုတာ logical operators ကို အသုံးပြုပြီး စစ်ပါ
3. Letter grade တစ်ခုချင်းစီအတွက် specific feedback ပေးဖို့ switch statement ကို အသုံးပြုပါ
4. ကျောင်းသားက next course (grade >= 70) အတွက် အရည်အချ

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မမှန်ကန်မှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းဘာသာစကားဖြင့် ရေးသားထားသော စာရွက်စာတမ်းကို အာဏာတရားရှိသော အရင်းအမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူ့ဘာသာပြန်ပညာရှင်များကို အသုံးပြုရန် အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအမှားများ သို့မဟုတ် အနားလွဲမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။