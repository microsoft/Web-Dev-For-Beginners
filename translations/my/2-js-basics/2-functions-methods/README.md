<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "ec43b53e8e015cdabfd3ad877b3c28e5",
  "translation_date": "2025-10-24T16:06:49+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "my"
}
-->
# JavaScript အခြေခံ: Methods နှင့် Functions

![JavaScript အခြေခံ - Functions](../../../../translated_images/webdev101-js-functions.be049c4726e94f8b7605c36330ac42eeb5cd8ed02bcdd60fdac778174d6cb865.my.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## မိန့်ခွန်းမပြောမီ စမ်းမေးခွန်း
[မိန့်ခွန်းမပြောမီ စမ်းမေးခွန်း](https://ff-quizzes.netlify.app)

တစ်ခါတစ်လေမှာ အတူတူပဲဖြစ်တဲ့ code ကို မကြာခဏရေးရတာက programming မှာ အများဆုံး စိတ်ပျက်စရာဖြစ်ပါတယ်။ Functions တွေက ဒီပြဿနာကို ဖြေရှင်းပေးနိုင်ပါတယ်၊ အဲဒါကတော့ code တွေကို ပြန်လည်အသုံးပြုနိုင်တဲ့ block အဖြစ် package လုပ်ပေးတာပါ။ Functions တွေကို Henry Ford ရဲ့ assembly line ကို revolutionary ဖြစ်စေတဲ့ standardized parts တွေလိုပဲ စဉ်းစားနိုင်ပါတယ် – reliable component တစ်ခုကို ဖန်တီးပြီးရင် ပြန်လည်တည်ဆောက်စရာမလိုဘဲ လိုအပ်တဲ့နေရာမှာ အသုံးပြုနိုင်ပါတယ်။

Functions တွေက code အပိုင်းအစတွေကို bundle လုပ်ပြီး program တစ်ခုလုံးမှာ ပြန်လည်အသုံးပြုနိုင်စေပါတယ်။ အတူတူပဲ logic ကို နေရာတိုင်းမှာ copy-paste လုပ်ရတာကို ရှောင်ရှားနိုင်ပြီး function တစ်ခုကို တစ်ခါဖန်တီးပြီးရင် လိုအပ်တဲ့အခါမှာ ခေါ်သုံးနိုင်ပါတယ်။ ဒီနည်းလမ်းက code ကို စနစ်တကျထားရှိနိုင်ပြီး update လုပ်ရတာလွယ်ကူစေပါတယ်။

ဒီသင်ခန်းစာမှာ သင့်ကိုယ်ပိုင် functions တွေ ဖန်တီးနည်း၊ အချက်အလက်တွေကို functions တွေထဲကို ပေးပို့နည်း၊ အသုံးဝင်တဲ့ရလဒ်တွေကို ပြန်လည်ရယူနည်းကို သင်ယူရမှာဖြစ်ပါတယ်။ Functions နှင့် Methods တွေကြားက ကွာခြားချက်၊ modern syntax နည်းလမ်းတွေ၊ Functions တွေက Functions အခြားတွေနဲ့ ဘယ်လိုအလုပ်လုပ်နိုင်တယ်ဆိုတာကို သင်တွေ့မြင်ရမှာဖြစ်ပါတယ်။ ဒီအကြောင်းအရာတွေကို တစ်ဆင့်ချင်းဆင့် တည်ဆောက်သွားမှာဖြစ်ပါတယ်။

[![Methods နှင့် Functions](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Methods နှင့် Functions")

> 🎥 အပေါ်ကပုံကို click လုပ်ပြီး Methods နှင့် Functions အကြောင်း video ကို ကြည့်ပါ။

> ဒီသင်ခန်းစာကို [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon) မှာ လေ့လာနိုင်ပါတယ်။

## Functions

Function ဆိုတာက တစ်ခုခုလုပ်ဆောင်ပေးတဲ့ logic ကို encapsulate လုပ်ထားတဲ့ self-contained block of code ဖြစ်ပါတယ်။

Program တစ်ခုလုံးမှာ အတူတူပဲ code ကို မကြာခဏရေးရတာကို ရှောင်ရှားနိုင်ဖို့ function ထဲမှာ package လုပ်ပြီး လိုအပ်တဲ့အခါမှာ function ကို ခေါ်သုံးနိုင်ပါတယ်။ ဒီနည်းလမ်းက code ကို သန့်ရှင်းစေပြီး update လုပ်ရတာလွယ်ကူစေပါတယ်။ Codebase ရဲ့ 20 နေရာမှာ logic ကို scattered လုပ်ထားရင် ပြုပြင်ထိန်းသိမ်းရတာ ဘယ်လောက်ခက်ခဲမလဲ စဉ်းစားကြည့်ပါ။

Functions တွေကို အဓိပ္ပါယ်ရှိတဲ့နာမည်တွေပေးဖို့ အရေးကြီးပါတယ်။ `cancelTimer()` ဆိုတဲ့ function ကိုတွေ့ရင် အဲဒါဘာလုပ်တာလဲဆိုတာ ချက်ချင်းနားလည်နိုင်ပါတယ်၊ အတိအကျ label လုပ်ထားတဲ့ button ကို click လုပ်ရင် ဘာဖြစ်မယ်ဆိုတာ သိနိုင်သလိုပဲ။

## Function တစ်ခု ဖန်တီးပြီး ခေါ်သုံးခြင်း

Function တစ်ခုကို ဘယ်လိုဖန်တီးရမလဲဆိုတာကို ကြည့်ကြမယ်။ Syntax က တစ်မျိုးတည်း pattern ကိုလိုက်ပါတယ်။

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

ဒီကို ခွဲခြမ်းစိတ်ဖြာကြည့်ရအောင်:
- `function` keyword က JavaScript ကို "ဟေ့၊ function တစ်ခုဖန်တီးနေတယ်!" လို့ပြောပါတယ်။
- `nameOfFunction` က သင့် function ကို အဓိပ္ပါယ်ရှိတဲ့နာမည်ပေးတဲ့နေရာပါ။
- Parentheses `()` က parameters တွေထည့်နိုင်တဲ့နေရာပါ (ဒီအကြောင်းကို ခဏနောက်မှ ပြောမယ်)
- Curly braces `{}` က function ကို ခေါ်သုံးတဲ့အခါမှာ အလုပ်လုပ်မယ့် code တွေကို ထည့်ထားတဲ့နေရာပါ။

အခုတော့ simple greeting function တစ်ခုကို ဖန်တီးပြီး အလုပ်လုပ်ပုံကို ကြည့်ကြမယ်။

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

ဒီ function က "Hello, world!" ဆိုတဲ့စာကို console မှာ print လုပ်ပေးပါတယ်။ သင်ဖန်တီးပြီးရင် လိုအပ်တဲ့အခါမှာ အများကြိမ်သုံးနိုင်ပါတယ်။

Function ကို execute (သို့မဟုတ် "call") လုပ်ဖို့ function ရဲ့နာမည်နဲ့ parentheses ကိုရေးပါ။ JavaScript က function ကို သင်ခေါ်သုံးမယ့်အချိန်မရွေး သတ်မှတ်နိုင်ပါတယ် – JavaScript engine က execution order ကို handle လုပ်ပေးပါလိမ့်မယ်။

```javascript
// calling our function
displayGreeting();
```

ဒီလိုရေးပြီး run လုပ်လိုက်ရင် `displayGreeting` function ထဲမှာရှိတဲ့ code အားလုံးကို execute လုပ်ပြီး browser ရဲ့ console မှာ "Hello, world!" ကို ပြသပေးပါလိမ့်မယ်။ ဒီ function ကို အများကြိမ်ခေါ်သုံးနိုင်ပါတယ်။

> **Note:** ဒီသင်ခန်းစာတွေမှာ **methods** တွေကို သုံးနေခဲ့ပါတယ်။ `console.log()` က method ဖြစ်ပါတယ် – အဓိကအားဖြင့် `console` object ရဲ့ function ဖြစ်ပါတယ်။ အဓိကကတော့ methods တွေက objects တွေကို ပေါင်းစပ်ထားပြီး functions တွေက အထီးကျန်ဖြစ်ပါတယ်။ Developer အများစုက casual conversation မှာ ဒီ terms တွေကို အလွယ်တကူ အစားထိုးသုံးတတ်ပါတယ်။

### Function ရေးသားမှုအကောင်းဆုံးနည်းလမ်းများ

Function တွေကို ရေးသားရာမှာ အကောင်းဆုံးနည်းလမ်းတွေကတော့:

- Functions တွေကို အဓိပ္ပါယ်ရှိတဲ့ နာမည်တွေ ပေးပါ – သင့်အနာဂတ်ကိုယ်တိုင်က ကျေးဇူးတင်ပါလိမ့်မယ်!
- Multi-word နာမည်တွေကို **camelCasing** သုံးပါ (ဥပမာ `calculateTotal` ကို `calculate_total` အစား)
- Function တစ်ခုစီကို တစ်ခုခုကို အကောင်းဆုံးလုပ်ဆောင်နိုင်အောင် အာရုံစိုက်ပါ

## Function ကို အချက်အလက်ပေးပို့ခြင်း

ကျွန်တော်တို့ရဲ့ `displayGreeting` function က အကန့်အသတ်ရှိပါတယ် – အားလုံးအတွက် "Hello, world!" ကိုသာ ပြသနိုင်ပါတယ်။ Parameters တွေက functions တွေကို ပို flexible ဖြစ်စေပြီး အသုံးဝင်စေပါတယ်။

**Parameters** တွေက function ကို သုံးတဲ့အခါမှာ value တွေကို ထည့်နိုင်တဲ့ placeholder အဖြစ် လုပ်ဆောင်ပေးပါတယ်။ ဒီနည်းလမ်းနဲ့ function တစ်ခုကို call လုပ်တဲ့အခါ마다 အခြားအချက်အလက်တွေနဲ့ အလုပ်လုပ်နိုင်ပါတယ်။

Function ကို define လုပ်တဲ့အခါ parentheses ထဲမှာ parameters တွေကို စာရင်းပြုစုပြီး parameter တစ်ခုနှင့်တစ်ခုကို comma နဲ့ ခွဲထားပါ:

```javascript
function name(param, param2, param3) {

}
```

Parameter တစ်ခုစီက placeholder အဖြစ်လုပ်ဆောင်ပါတယ် – function ကို call လုပ်တဲ့အခါမှာ အမှန်တကယ် value တွေကို ထည့်ပေးရပါမယ်။

Greeting function ကို update လုပ်ပြီး တစ်စုံတစ်ဦးရဲ့နာမည်ကို လက်ခံနိုင်အောင်လုပ်ကြည့်ရအောင်:

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

နာမည်ကို message ထဲမှာ တိုက်ရိုက်ထည့်ဖို့ backticks (`` ` ``) နဲ့ `${}` ကို သုံးနည်းကို သတိထားပါ – ဒီကို template literal လို့ခေါ်ပြီး variable တွေကို string တွေထဲမှာ ပေါင်းစပ်ဖန်တီးဖို့ အရမ်းအသုံးဝင်ပါတယ်။

Function ကို call လုပ်တဲ့အခါမှာ နာမည်ကို ထည့်ပေးနိုင်ပါပြီ:

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

JavaScript က string `'Christopher'` ကို `name` parameter မှာ assign လုပ်ပြီး "Hello, Christopher!" ဆိုတဲ့ personalized message ကို ဖန်တီးပေးပါတယ်။

## Default values

Parameter တစ်ချို့ကို optional ဖြစ်အောင်လုပ်ချင်ရင် default values တွေကို အသုံးပြုနိုင်ပါတယ်!

Greeting word ကို customize လုပ်နိုင်ဖို့လိုချင်တယ်၊ ဒါပေမယ့် specify မလုပ်ရင် "Hello" ကို fallback အဖြစ်သုံးချင်တယ်ဆိုရင် default values တွေကို variable တစ်ခု setting လုပ်သလိုပဲ equals sign ကို သုံးပြီး setup လုပ်နိုင်ပါတယ်:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

ဒီမှာ `name` က မဖြစ်မနေလိုအပ်ပါတယ်၊ ဒါပေမယ့် `salutation` က backup value `'Hello'` ရှိပါတယ်၊ တစ်စုံတစ်ဦးက greeting ကို specify မလုပ်ရင် fallback အဖြစ်သုံးနိုင်ပါတယ်။

Function ကို အခုနှစ်မျိုးအနည်းဆုံး call လုပ်နိုင်ပါပြီ:

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

ပထမဆုံး call မှာ salutation ကို specify မလုပ်တဲ့အတွက် default "Hello" ကို JavaScript က သုံးပါတယ်။ ဒုတိယ call မှာတော့ custom "Hi" ကို သုံးပါတယ်။ ဒီ flexibility က functions တွေကို အခြေအနေအမျိုးမျိုးမှာ အသုံးပြုနိုင်စေပါတယ်။

## Return values

ကျွန်တော်တို့ရဲ့ functions တွေက console မှာ message တွေကို print လုပ်ပေးနေခဲ့ပါတယ်၊ ဒါပေမယ့် function တစ်ခုက တစ်ခုခုကိုတွက်ချက်ပြီး ရလဒ်ကို ပြန်ပေးချင်ရင်ရော?

ဒီမှာ **return values** တွေက အရေးပါလာပါတယ်။ Function က တစ်ခုခုကို display လုပ်ပေးတာအစား တန်ဖိုးတစ်ခုကို ပြန်ပေးနိုင်ပါတယ်၊ အဲဒီတန်ဖိုးကို variable တစ်ခုမှာ သိမ်းထားနိုင်သလို code ရဲ့ အခြားနေရာတွေမှာ အသုံးပြုနိုင်ပါတယ်။

Value ကို ပြန်ပေးဖို့ `return` keyword ကို သုံးပြီး ပြန်ပေးချင်တဲ့အရာကို ရေးပါ:

```javascript
return myVariable;
```

အရေးကြီးတာက – function က `return` statement ကို ရောက်တဲ့အခါမှာ ချက်ချင်းရပ်ပြီး value ကို function ကို call လုပ်တဲ့သူဆီ ပြန်ပေးပါတယ်။

Greeting function ကို modify လုပ်ပြီး message ကို print လုပ်မယ့်အစား ပြန်ပေးစေကြည့်ရအောင်:

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

Greeting ကို print လုပ်မယ့်အစား message ကို ဖန်တီးပြီး ပြန်ပေးပါတယ်။

Returned value ကို အသုံးပြုဖို့ variable တစ်ခုမှာ သိမ်းထားနိုင်ပါတယ်:

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

အခုတော့ `greetingMessage` မှာ "Hello, Christopher" ရှိပြီး code ရဲ့ နေရာတိုင်းမှာ အသုံးပြုနိုင်ပါတယ် – webpage မှာ display လုပ်ဖို့၊ email မှာ ထည့်ဖို့၊ function တစ်ခုကို pass လုပ်ဖို့။

## Functions တွေကို Functions တွေမှာ parameter အဖြစ်သုံးခြင်း

Functions တွေကို အခြား functions တွေမှာ parameter အဖြစ် pass လုပ်နိုင်ပါတယ်။ ဒီ concept က အစမှာတော့ ရှုပ်ထွေးနေတာလိုပဲ ထင်ရနိုင်ပါတယ်၊ ဒါပေမယ့် flexible programming patterns တွေကို ဖန်တီးနိုင်စေတဲ့ အရေးပါတဲ့ feature တစ်ခုပါ။

ဒီ pattern က "တစ်ခုခုဖြစ်တဲ့အခါမှာ ဒီအရာကိုလုပ်ပါ" ဆိုတဲ့အခါမှာ အရမ်းအသုံးဝင်ပါတယ်။ ဥပမာ "timer ပြီးတဲ့အခါမှာ ဒီ code ကို run လုပ်ပါ" သို့မဟုတ် "user က button ကို click လုပ်တဲ့အခါမှာ ဒီ function ကို call လုပ်ပါ" ဆိုတာမျိုးပါ။

`setTimeout` ကိုကြည့်ရအောင်၊ ဒီဟာက built-in function ဖြစ်ပြီး အချိန်တစ်ခုခုစောင့်ပြီးနောက် code တစ်ခုကို run လုပ်ပေးပါတယ်။ ဘယ် code ကို run လုပ်မလဲဆိုတာကို ပြောရမယ် – function ကို pass လုပ်ဖို့ perfect use case ပါ!

ဒီ code ကို try လုပ်ကြည့်ပါ – ၃ စက္ကန့်အကြာမှာ message တစ်ခုကို တွေ့ရပါမယ်:

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

`setTimeout` ကို `displayDone` (parentheses မပါဘဲ) pass လုပ်ပေးတာကို သတိထားပါ။ Function ကို ကိုယ်တိုင် call လုပ်တာမဟုတ်ပါဘူး – function ကို `setTimeout` ကိုပေးပြီး "၃ စက္ကန့်အကြာမှာ ဒီကို call လုပ်ပါ" လို့ပြောတာပါ။

### Anonymous functions

တစ်ခါတစ်လေမှာ function တစ်ခုကို တစ်ခါတည်းအတွက်သာသုံးပြီး နာမည်ပေးချင်မိမယ့်အခါမှာ JavaScript က **anonymous functions** တွေကို ဖန်တီးနိုင်စေပါတယ် – နာမည်မပါဘဲ function တွေကို လိုအပ်တဲ့နေရာမှာ define လုပ်နိုင်ပါတယ်။

Timer ဥပမာကို anonymous function သုံးပြီး ပြန်ရေးကြည့်ရအောင်:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

ဒီဟာက အတူတူရလဒ်ကိုရရှိစေပါတယ်၊ function ကို `setTimeout` call ထဲမှာ တိုက်ရိုက် define လုပ်ထားပြီး အခြား function declaration မလိုတော့ပါဘူး။

### Fat arrow functions

Modern JavaScript မှာ function တွေကို ရေးသားဖို့ ပိုမိုတိုတောင်းတဲ့နည်းလမ်းတစ်ခုရှိပါတယ်၊ **arrow functions** လို့ခေါ်ပါတယ်။ `=>` ကိုသုံးပြီး (arrow လိုပုံရပါတယ် – နားလည်ရလွယ်ပါတယ်) developer တွေကြားမှာ အရမ်းလူကြိုက်များပါတယ်။

Arrow functions တွေက `function` keyword ကို skip လုပ်ပြီး code ကို ပိုမိုတိုတောင်းစေပါတယ်။

Timer ဥပမာကို arrow function သုံးပြီး ပြန်ရေးကြည့်ရအောင်:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

`()` က parameter တွေကိုထည့်တဲ့နေရာ (ဒီဥပမာမှာတော့ အလွတ်)၊ အဲဒီနောက် arrow `=>` ရှိပြီး function body ကို curly braces ထဲမှာရေးထားပါတယ်။ Syntax ကို ပိုမိုတိုတောင်းစေတဲ့အပြင် အတူတူ functionality ကိုပေးစွမ်းပါတယ်။

### Strategy တစ်ခုချင်းစီကို ဘယ်အချိန်မှာသုံးမလဲ

Strategy တစ်ခုချင်းစီကို ဘယ်အချိန်မှာသုံးမလဲဆိုတာအတွက် လက်တွေ့ guideline တစ်ခုက – function ကို အများကြိမ်သုံးမယ်ဆိုရင် နာမည်ပေးပြီး သီးသန့် define လုပ်ပါ။ တစ်ခါတည်းအတွက်ဆိုရင် anonymous function ကို သုံးပါ။ Arrow functions နဲ့ traditional syntax နှစ်မျိုးလုံး valid ဖြစ်ပါတယ်၊ modern JavaScript codebases တွေမှာတော့ arrow functions တွေ အများဆုံးသုံးပါတယ်။

---

## 🚀 စိန်ခေါ်မှု

Functions နှင့် Methods ကြားက ကွာခြားချက်ကို တစ်ကြောင်းစာနဲ့ ရှင်းပြနိုင်မလား? ကြိုးစားကြည့်ပါ!

## GitHub Copilot Agent Challenge 🚀

Agent mode ကိုသုံးပြီး အောက်ပါစိန်ခေါ်မှုကို ပြီးမြောက်စေပါ:

**ဖော်ပြချက်:** ဒီသင်ခန်းစာမှာဖော်ပြထားတဲ့ function concept မျိုးစုံကို ပြသတဲ့ mathematical functions တွေပါဝင်တဲ့ utility library တစ်ခုကို ဖန်တီးပါ၊ အဲဒီမှာ parameters, default values, return values, နဲ့ arrow functions တွေပါဝင်ရပါမယ်။

**Prompt:** `mathUtils.js` ဆိုတဲ့ JavaScript file ကို ဖန်တီးပြီး အောက်ပါ functions တွေပါဝင်စေပါ:
1. `add` function တစ်ခု – parameters နှစ်ခုကိုယူပြီး အတူတကွပေါင်းပြီး return လုပ်ပါ
2. `multiply` function တစ်ခု – default parameter values (ဒုတိယ parameter က default 1)
3. `square` ဆိုတဲ့ arrow function တစ်ခု – number တစ်ခုကိုယူပြီး square ကို return လုပ်ပါ
4. `calculate` function တစ်ခု – အခြား function တစ်ခုကို parameter အဖြစ်ယူပြီး number နှစ်ခုကို function ကို apply လုပ်ပါ
5. Function တစ်ခုချင်းစီကို test cases တွေသုံးပြီး call လုပ်ပြပါ

[agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) အကြောင်းပိုမိုလေ့လာရန် ဒီမှာကြည့်ပါ။

## မိန့်ခွန်းပြီးနောက် စမ်းမေးခွန်း

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှန်ကန်မှုအတွက် ကြိုးစားနေသော်လည်း အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မမှန်ကန်မှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းဘာသာစကားဖြင့် ရေးသားထားသော စာရွက်စာတမ်းကို အာဏာတရားရှိသော အရင်းအမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူက ဘာသာပြန်မှုကို အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအမှားများ သို့မဟုတ် အနားလွဲမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။