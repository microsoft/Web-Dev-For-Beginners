<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f7009631b73556168ca435120a231c98",
  "translation_date": "2025-08-28T18:41:49+00:00",
  "source_file": "2-js-basics/3-making-decisions/README.md",
  "language_code": "my"
}
-->
# JavaScript အခြေခံများ: ဆုံးဖြတ်ချက်များချခြင်း

![JavaScript အခြေခံများ - ဆုံးဖြတ်ချက်များချခြင်း](../../../../translated_images/webdev101-js-decisions.69e1b20f272dd1f0b1cb2f8adaff3ed2a77c4f91db96d8a0594132a353fa189a.my.png)

> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## မိန့်ခွန်းမတိုင်မီ စစ်ဆေးမှု

[မိန့်ခွန်းမတိုင်မီ စစ်ဆေးမှု](https://ff-quizzes.netlify.app/web/quiz/11)

ဆုံးဖြတ်ချက်များချခြင်းနှင့် သင့်ကုဒ်ကို အစဉ်လိုက်အောင် စီမံခြင်းသည် သင့်ကုဒ်ကို ပြန်လည်အသုံးပြုနိုင်စေပြီး ခိုင်မာစေသည်။ ဤအပိုင်းတွင် JavaScript တွင် ဒေတာလှည့်ပတ်မှုကို ထိန်းချုပ်ရန် သုံးသည့် သဒ္ဒါနှင့် Boolean ဒေတာအမျိုးအစားများနှင့်အတူ အသုံးပြုသောအခါ၌ ၎င်း၏ အရေးပါမှုကို ဖော်ပြထားသည်။

[![ဆုံးဖြတ်ချက်များချခြင်း](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "ဆုံးဖြတ်ချက်များချခြင်း")

> 🎥 အထက်ပါပုံကို နှိပ်၍ ဆုံးဖြတ်ချက်များချခြင်းအကြောင်း ဗီဒီယိုကို ကြည့်ပါ။

> ဤသင်ခန်းစာကို [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon) တွင် လေ့လာနိုင်ပါသည်။

## Boolean များအကြောင်း အကျဉ်းချုပ်

Boolean များတွင် `true` သို့မဟုတ် `false` ဆိုသည့် တန်ဖိုးနှစ်ခုသာ ရှိနိုင်သည်။ Boolean များသည် အခြေအနေတစ်ခုခုဖြင့် သတ်မှတ်ထားသောအခါ သင့်ကုဒ်၏ ဘယ်လိုလိုင်းများကို အလုပ်လုပ်မည်ကို ဆုံးဖြတ်ရန် အထောက်အကူပြုသည်။

သင့် Boolean ကို `true` သို့မဟုတ် `false` အဖြစ် သတ်မှတ်ပါ-

`let myTrueBool = true`  
`let myFalseBool = false`

✅ Boolean များကို အင်္ဂလိပ် သင်္ချာပညာရှင်၊ ဒဿနပညာရှင်နှင့် သဘောတရားပညာရှင် George Boole (1815–1864) ၏ နာမည်မှ ဆောင်ယူထားသည်။

## နှိုင်းယှဉ်မှု Operator များနှင့် Boolean များ

Operator များကို အခြေအနေများကို သုံးသပ်ရန် အသုံးပြုပြီး Boolean တန်ဖိုးကို ဖန်တီးရန် နှိုင်းယှဉ်မှုများ ပြုလုပ်သည်။ အောက်တွင် မကြာခဏ အသုံးပြုသော Operator များစာရင်းကို ဖော်ပြထားသည်။

| သင်္ကေတ | ဖော်ပြချက်                                                                                                                                                   | ဥပမာ               |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| `<`      | **ငယ်သည်**: တန်ဖိုးနှစ်ခုကို နှိုင်းယှဉ်ပြီး ဘယ်ဘက်တန်ဖိုးသည် ညာဘက်ထက် ငယ်လျှင် `true` Boolean တန်ဖိုးကို ပြန်ပေးသည်                              | `5 < 6 // true`     |
| `<=`     | **ငယ်သည် သို့မဟုတ် ငြိမ်သည်**: တန်ဖိုးနှစ်ခုကို နှိုင်းယှဉ်ပြီး ဘယ်ဘက်တန်ဖိုးသည် ညာဘက်ထက် ငယ် သို့မဟုတ် ငြိမ်လျှင် `true` Boolean တန်ဖိုးကို ပြန်ပေးသည် | `5 <= 6 // true`    |
| `>`      | **ကြီးသည်**: တန်ဖိုးနှစ်ခုကို နှိုင်းယှဉ်ပြီး ဘယ်ဘက်တန်ဖိုးသည် ညာဘက်ထက် ကြီးလျှင် `true` Boolean တန်ဖိုးကို ပြန်ပေးသည်                         | `5 > 6 // false`    |
| `>=`     | **ကြီးသည် သို့မဟုတ် ငြိမ်သည်**: တန်ဖိုးနှစ်ခုကို နှိုင်းယှဉ်ပြီး ဘယ်ဘက်တန်ဖိုးသည် ညာဘက်ထက် ကြီး သို့မဟုတ် ငြိမ်လျှင် `true` Boolean တန်ဖိုးကို ပြန်ပေးသည် | `5 >= 6 // false`   |
| `===`    | **တိကျသော တန်းတူမှု**: တန်ဖိုးနှစ်ခုကို နှိုင်းယှဉ်ပြီး ဘယ်ဘက်နှင့် ညာဘက်တန်ဖိုးများသည် တူပြီး ဒေတာအမျိုးအစားလည်း တူလျှင် `true` Boolean တန်ဖိုးကို ပြန်ပေးသည် | `5 === 6 // false`  |
| `!==`    | **မတူညီမှု**: တန်ဖိုးနှစ်ခုကို နှိုင်းယှဉ်ပြီး တိကျသော တန်းတူမှု Operator ပြန်ပေးမည့် Boolean တန်ဖိုး၏ ဆန့်ကျင်ဘက်ကို ပြန်ပေးသည်                | `5 !== 6 // true`   |

✅ သင့် browser console တွင် နှိုင်းယှဉ်မှုများကို ရေးသားပြီး သင့်အသိပညာကို စစ်ဆေးပါ။ ပြန်ပေးသော ဒေတာများထဲတွင် အံ့ဩစရာရှိပါသလား။

## If Statement

`if` statement သည် အခြေအနေသည် `true` ဖြစ်ပါက ၎င်း၏ block များအတွင်းရှိ ကုဒ်ကို အလုပ်လုပ်စေသည်။

```javascript
if (condition) {
  //Condition is true. Code in this block will run.
}
```

အခြေအနေဖွဲ့စည်းရာတွင် Logical Operator များကို မကြာခဏ အသုံးပြုသည်။

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

## If..Else Statement

`else` statement သည် အခြေအနေသည် `false` ဖြစ်ပါက ၎င်း၏ block များအတွင်းရှိ ကုဒ်ကို အလုပ်လုပ်စေသည်။ ၎င်းသည် `if` statement နှင့်အတူ ရွေးချယ်စရာဖြစ်သည်။

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

✅ ဤကုဒ်နှင့် အောက်ပါကုဒ်ကို browser console တွင် အလုပ်လုပ်စေပြီး သင့်နားလည်မှုကို စစ်ဆေးပါ။ `currentMoney` နှင့် `laptopPrice` variable များ၏ တန်ဖိုးများကို ပြောင်းလဲပြီး `console.log()` ပြန်ပေးသောအရာကို ပြောင်းလဲကြည့်ပါ။

## Switch Statement

`switch` statement ကို အခြေအနေအမျိုးမျိုးအပေါ် မူတည်၍ ကွဲပြားသော လုပ်ဆောင်မှုများကို ပြုလုပ်ရန် အသုံးပြုသည်။ `switch` statement ကို အသုံးပြု၍ အလုပ်လုပ်စေမည့် ကုဒ် block တစ်ခုကို ရွေးချယ်ပါ။

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

✅ ဤကုဒ်နှင့် အောက်ပါကုဒ်ကို browser console တွင် အလုပ်လုပ်စေပြီး သင့်နားလည်မှုကို စစ်ဆေးပါ။ `a` variable ၏ တန်ဖိုးများကို ပြောင်းလဲပြီး `console.log()` ပြန်ပေးသောအရာကို ပြောင်းလဲကြည့်ပါ။

## Logical Operator များနှင့် Boolean များ

ဆုံးဖြတ်ချက်များသည် တစ်ခုထက်ပိုသော နှိုင်းယှဉ်မှုများကို လိုအပ်နိုင်ပြီး Logical Operator များဖြင့် ဆက်စပ်၍ Boolean တန်ဖိုးကို ထုတ်နိုင်သည်။

| သင်္ကေတ | ဖော်ပြချက်                                                                                     | ဥပမာ                                                                 |
| -------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `&&`     | **Logical AND**: Boolean ဖော်ပြချက်နှစ်ခုကို နှိုင်းယှဉ်သည်။ နှစ်ဖက်လုံး `true` ဖြစ်လျှင်သာ `true` ပြန်ပေးသည် | `(5 > 6) && (5 < 6 ) //ဖက်တစ်ဖက်သည် false, ဖက်တစ်ဖက်သည် true. false ပြန်ပေးသည်` |
| `\|\|`   | **Logical OR**: Boolean ဖော်ပြချက်နှစ်ခုကို နှိုင်းယှဉ်သည်။ ဖက်တစ်ဖက် `true` ဖြစ်လျှင် `true` ပြန်ပေးသည်     | `(5 > 6) \|\| (5 < 6) //ဖက်တစ်ဖက်သည် false, ဖက်တစ်ဖက်သည် true. true ပြန်ပေးသည်` |
| `!`      | **Logical NOT**: Boolean ဖော်ပြချက်၏ ဆန့်ကျင်ဘက်တန်ဖိုးကို ပြန်ပေးသည်                             | `!(5 > 6) // 5 သည် 6 ထက် ကြီးမဟုတ်ပါ, သို့သော် "!" သည် true ပြန်ပေးမည်`         |

## Logical Operator များနှင့် If..Else Statement များဖြင့် ဆုံးဖြတ်ချက်များ

Logical Operator များကို If..Else Statement များတွင် အခြေအနေဖွဲ့စည်းရန် အသုံးပြုနိုင်သည်။

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

### Negation Operator

`if...else` statement ကို အသုံးပြု၍ အခြေအနေဆိုင်ရာ logical ကို ဖန်တီးနိုင်ပုံကို ယခင်က ကြည့်ခဲ့ပါသည်။ `if` အတွင်းသို့ သွားသော အရာအားလုံးသည် `true/false` အဖြစ် သတ်မှတ်ရမည်။ `!` operator ကို အသုံးပြု၍ ဖော်ပြချက်ကို _ဆန့်ကျင်_ ပြုလုပ်နိုင်သည်။ ၎င်းသည် အောက်ပါအတိုင်း ဖြစ်မည်-

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

### Ternary Expression များ

`if...else` သည် ဆုံးဖြတ်ချက် logical ကို ဖော်ပြရန် တစ်ခုတည်းသော နည်းလမ်းမဟုတ်ပါ။ Ternary Operator ဟုခေါ်သော အရာတစ်ခုကိုလည်း အသုံးပြုနိုင်သည်။ ၎င်း၏ သဒ္ဒါသည် အောက်ပါအတိုင်း ဖြစ်သည်-

```javascript
let variable = condition ? <return this if true> : <return this if false>
```

အောက်တွင် ပိုမိုလက်တွေ့ကျသော ဥပမာတစ်ခုကို ဖော်ပြထားသည်-

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ ဤကုဒ်ကို အချိန်ယူဖတ်ပါ။ Operator များအလုပ်လုပ်ပုံကို နားလည်ပါသလား။

အထက်ပါကုဒ်သည် အောက်ပါအတိုင်း ဆိုလိုသည်-

- `firstNumber` သည် `secondNumber` ထက် ကြီးလျှင်  
- `firstNumber` ကို `biggestNumber` သို့ သတ်မှတ်ပါ  
- မဟုတ်လျှင် `secondNumber` ကို သတ်မှတ်ပါ။

Ternary Expression သည် အောက်ပါကုဒ်ကို ရေးသားရန် အတိုချုံးနည်းလမ်းသာဖြစ်သည်-

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

---

## 🚀 စိန်ခေါ်မှု

Logical Operator များကို အသုံးပြု၍ ရေးသားထားသော ပရိုဂရမ်တစ်ခုကို ဖန်တီးပါ၊ ထို့နောက် Ternary Expression ကို အသုံးပြု၍ ထပ်မံရေးသားပါ။ သင့်အကြိုက်ဆုံး သဒ္ဒါသည် ဘယ်ဟာလဲ?

---

## မိန့်ခွန်းပြီးနောက် စစ်ဆေးမှု

[မိန့်ခွန်းပြီးနောက် စစ်ဆေးမှု](https://ff-quizzes.netlify.app/web/quiz/12)

## ပြန်လည်သုံးသပ်ခြင်းနှင့် ကိုယ်တိုင်လေ့လာခြင်း

အသုံးပြုသူအတွက် ရရှိနိုင်သော Operator များစွာအကြောင်းကို [MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators) တွင် ဖတ်ရှုပါ။

Josh Comeau ၏ အလွန်အမင်းအထောက်အကူပြုသော [operator lookup](https://joshwcomeau.com/operator-lookup/) ကို လေ့လာပါ။

## လုပ်ငန်းတာဝန်

[Operators](assignment.md)

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း၊ အလိုအလျောက် ဘာသာပြန်ခြင်းတွင် အမှားများ သို့မဟုတ် မတိကျမှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းဘာသာစကားဖြင့် ရေးသားထားသော စာရွက်စာတမ်းကို အာဏာရှိသော ရင်းမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူ့ဘာသာပြန်ပညာရှင်များမှ ပရော်ဖက်ရှင်နယ် ဘာသာပြန်ခြင်းကို အကြံပြုပါသည်။ ဤဘာသာပြန်ကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအလွဲအချော်အချော်များ သို့မဟုတ် အနားလွဲမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။