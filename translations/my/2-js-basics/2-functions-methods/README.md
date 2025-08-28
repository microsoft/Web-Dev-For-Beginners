<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b4612bbb9ace984f374fcc80e3e035ad",
  "translation_date": "2025-08-27T22:28:44+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "my"
}
-->
# JavaScript အခြေခံ: Methods နှင့် Functions

![JavaScript Basics - Functions](../../../../translated_images/webdev101-js-functions.be049c4726e94f8b7605c36330ac42eeb5cd8ed02bcdd60fdac778174d6cb865.my.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## မိန့်ခွန်းမပြောမီ စမ်းမေးခွန်း
[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/9)

ကိုယ်ရေးသားတဲ့ကုဒ်ကို စဉ်ဆက်မပြတ်ဖတ်ရလွယ်အောင်လုပ်ဖို့ Developer တစ်ဦးအနေနဲ့ အမြဲလိုအပ်ပါတယ်။ ကုဒ်ကိုရေးတာထက် ဖတ်တာပိုများတယ်ဆိုတာ အနည်းငယ်ဆန့်ကျင်ဘက်ဖြစ်ပေမယ့် အမှန်တရားပါ။ **Function** ဆိုတာကတော့ Developer တွေရဲ့ ကုဒ်ကို ထိန်းသိမ်းဖို့အတွက် အရေးကြီးတဲ့ Tools တစ်ခုဖြစ်ပါတယ်။

[![Methods and Functions](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Methods and Functions")

> 🎥 အထက်ကပုံကိုနှိပ်ပြီး methods နဲ့ functions အကြောင်း ဗီဒီယိုကြည့်ပါ။

> ဒီသင်ခန်းစာကို [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon) မှာလည်း လေ့လာနိုင်ပါတယ်။

## Functions

Function ဆိုတာက အဓိကအားဖြင့် လိုအပ်တဲ့အချိန်မှာ ပြန်ခေါ်သုံးနိုင်တဲ့ ကုဒ်တစ်ပိုင်းဖြစ်ပါတယ်။ တစ်ခုတည်းသောအလုပ်ကို မကြိမ်ကြိမ်လုပ်ဖို့လိုတဲ့အခါမှာ Function က အလွန်အသုံးဝင်ပါတယ်။ Function ကိုတစ်နေရာတည်းမှာ စုစည်းထားပြီး လိုအပ်တဲ့အချိန်မှာ ခေါ်သုံးနိုင်ပါတယ်။ Function တစ်ခုက Function တစ်ခုကိုပါ ခေါ်သုံးနိုင်ပါတယ်။

Function ကိုအမည်ပေးနိုင်ခြင်းလည်း အရေးကြီးပါတယ်။ Function အမည်က ကုဒ်တစ်ပိုင်းကို အလွယ်တကူ နားလည်နိုင်စေပါတယ်။ ဥပမာ - "Cancel timer" ဆိုတဲ့ Button ကိုနှိပ်လိုက်ရင် Timer ရပ်မယ်ဆိုတာ သိနိုင်ပါတယ်။

## Function တစ်ခုကို ဖန်တီးခြင်းနှင့် ခေါ်သုံးခြင်း

Function ရဲ့ Syntax က အောက်ပါအတိုင်းဖြစ်ပါတယ်-

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

Greeting ပြသဖို့ Function တစ်ခု ဖန်တီးချင်တယ်ဆိုရင်-

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

Function ကိုခေါ်သုံးချင်တဲ့အခါမှာ Function နာမည်နဲ့ `()` ကိုသုံးရပါတယ်။ Function ကို ဖန်တီးထားတဲ့နေရာက အစဉ်အတိုင်းမဟုတ်ရင်တောင် JavaScript Compiler က Function ကိုရှာပေးပါလိမ့်မယ်။

```javascript
// calling our function
displayGreeting();
```

> **NOTE:** Function ရဲ့ အထူးအမျိုးအစားတစ်ခုကို **Method** လို့ခေါ်ပါတယ်။ ဥပမာ - `console.log` ကို သုံးတဲ့အခါမှာ Method ကိုသုံးနေပါတယ်။ Method က Object တစ်ခု (`console`) နဲ့ ပတ်သက်ပြီးရှိတာဖြစ်ပြီး Function ကတော့ လွတ်လပ်ပါတယ်။ Developer အများစုက Method နဲ့ Function ဆိုတာကို အလွယ်တကူ အစားထိုးသုံးတတ်ကြပါတယ်။

### Function ဖန်တီးရာမှာ အကောင်းဆုံးအကြံပြုချက်များ

Function ဖန်တီးရာမှာ အောက်ပါအချက်များကို သတိပြုပါ-

- အမြဲတမ်း ဖော်ပြချက်ပေးတဲ့ နာမည်များကို သုံးပါ။
- စကားလုံးများကို ပေါင်းစပ်ရာမှာ **camelCasing** ကိုသုံးပါ။
- Function တစ်ခုကို အထူးအလုပ်တစ်ခုအတွက်သာ အာရုံစိုက်ပါ။

## Function ကို အချက်အလက်များဖြင့် ဖြည့်စွက်ခြင်း

Function တစ်ခုကို ပိုမိုအသုံးဝင်စေဖို့ အချက်အလက်များ (parameters) ကို ဖြည့်စွက်နိုင်ပါတယ်။ ဥပမာ - `displayGreeting` Function က **Hello, world!** ကိုသာ ပြသနိုင်ပါတယ်။ Function ကို ပိုမိုပြောင်းလွယ်ပြုလွယ်စေဖို့ အမည်တစ်ခုကို parameter အနေနဲ့ ထည့်သွင်းနိုင်ပါတယ်။

Parameter တွေကို Function ရဲ့ parenthesis အတွင်းမှာ comma ဖြင့် ခွဲပြီး သတ်မှတ်ရပါတယ်-

```javascript
function name(param, param2, param3) {

}
```

`displayGreeting` Function ကို အမည်တစ်ခုကို parameter အနေနဲ့ ထည့်သွင်းပြီး ပြောင်းလဲနိုင်ပါတယ်။

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

Function ကိုခေါ်သုံးတဲ့အခါမှာ parameter ကို parenthesis အတွင်းမှာ သတ်မှတ်ရပါတယ်။

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

## Default values

Function ကို ပိုမိုပြောင်းလွယ်ပြုလွယ်စေဖို့ parameter တွေကို ပိုထည့်နိုင်ပါတယ်။ သို့သော် parameter တစ်ခုချင်းစီကို မလိုအပ်လျှင် Default Value ကို သတ်မှတ်နိုင်ပါတယ်။ ဥပမာ - Greeting ကို Default Value အဖြစ် သတ်မှတ်နိုင်ပါတယ်။

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

Function ကိုခေါ်သုံးတဲ့အခါမှာ `salutation` ကို သတ်မှတ်မလား မသတ်မှတ်ဘူးဆိုတာ ဆုံးဖြတ်နိုင်ပါတယ်။

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

## Return values

ယခင် Function တွေက console မှာ output ပြသဖို့သာ ရည်ရွယ်ထားပါတယ်။ သို့သော် Calculation လုပ်ပြီး အဖြေကို ပြန်ပေးစေချင်ရင် **return value** ကို သုံးနိုင်ပါတယ်။

Function တစ်ခုက value တစ်ခုကို return လုပ်မယ်ဆိုရင် `return` keyword ကို သုံးရပါတယ်။

```javascript
return myVariable;
```  

Greeting message တစ်ခုကို ဖန်တီးပြီး value ကို ပြန်ပေးတဲ့ Function တစ်ခုကို ဖန်တီးနိုင်ပါတယ်။

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

Function ကိုခေါ်သုံးတဲ့အခါမှာ value ကို variable တစ်ခုထဲမှာ သိမ်းဆည်းနိုင်ပါတယ်။

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

## Functions as parameters for functions

Programming လောကမှာ Function တစ်ခုကို Function တစ်ခုရဲ့ parameter အဖြစ် သုံးရတဲ့အခါတွေ ရှိတတ်ပါတယ်။ ဥပမာ - [setTimeout](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) က Timer တစ်ခုကို စတင်ပြီး အချိန်ကုန်လို့ ပြီးဆုံးတဲ့အခါမှာ Function တစ်ခုကို ခေါ်သုံးစေပါတယ်။

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

### Anonymous functions

Function တစ်ခုကို တစ်ကြိမ်သာ သုံးမယ်ဆိုရင် အမည်မပေးဘဲ Anonymous Function အဖြစ် ဖန်တီးနိုင်ပါတယ်။

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

### Fat arrow functions

JavaScript မှာ `=>` ကို သုံးပြီး Fat Arrow Function ကို ဖန်တီးနိုင်ပါတယ်။ 

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

### ဘယ်အခါမှာ ဘယ်နည်းကို သုံးမလဲ

Function ကို တစ်ကြိမ်ထက်ပိုသုံးမယ်ဆိုရင် ပုံမှန် Function အဖြစ် ဖန်တီးပါ။ တစ်နေရာတည်းမှာသာ သုံးမယ်ဆိုရင် Anonymous Function သုံးပါ။ Fat Arrow Function သို့မဟုတ် ပုံမှန် Syntax ကို သုံးမယ်ဆိုတာ သင့်ရွေးချယ်မှုပါ။

---

## 🚀 စိန်ခေါ်မှု

Function နဲ့ Method တို့ရဲ့ ကွာခြားချက်ကို စာကြောင်းတစ်ကြောင်းနဲ့ ရှင်းပြနိုင်မလား? ကြိုးစားကြည့်ပါ။

## မိန့်ခွန်းပြီးနောက် စမ်းမေးခွန်း
[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/10)

## ပြန်လည်သုံးသပ်ခြင်းနှင့် ကိုယ်တိုင်လေ့လာခြင်း

[Arrow functions](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions) အကြောင်း ပိုမိုလေ့လာဖို့ တန်ဖိုးရှိပါတယ်။ Function တစ်ခုကိုရေးပြီး Arrow Function နဲ့ ပြန်ရေးကြည့်ပါ။

## လုပ်ငန်းတာဝန်

[Fun with Functions](assignment.md)

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း၊ အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မတိကျမှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းဘာသာစကားဖြင့် ရေးသားထားသော စာရွက်စာတမ်းကို အာဏာရှိသော ရင်းမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူ့ဘာသာပြန်ပညာရှင်များမှ ပရော်ဖက်ရှင်နယ် ဘာသာပြန်မှုကို အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအလွတ်များ သို့မဟုတ် အနားလွဲမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။