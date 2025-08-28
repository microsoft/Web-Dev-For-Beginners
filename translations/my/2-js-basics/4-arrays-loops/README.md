<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9029f96b0e034839c1799f4595e4bb66",
  "translation_date": "2025-08-28T18:43:09+00:00",
  "source_file": "2-js-basics/4-arrays-loops/README.md",
  "language_code": "my"
}
-->
# JavaScript အခြေခံ: Arrays နှင့် Loops

![JavaScript Basics - Arrays](../../../../translated_images/webdev101-js-arrays.439d7528b8a294558d0e4302e448d193f8ad7495cc407539cc81f1afe904b470.my.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## မိန့်ခွန်းမပြောမီ Quiz
[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/13)

ဒီသင်ခန်းစာမှာ JavaScript အခြေခံများကို လေ့လာပါမည်။ JavaScript သည် ဝဘ်ပေါ်တွင် အပြန်အလှန်လုပ်ဆောင်မှုများကို ပေးစွမ်းသော ဘာသာစကားဖြစ်သည်။ ဒီသင်ခန်းစာတွင် သင်သည် arrays နှင့် loops အကြောင်းကို လေ့လာမည်ဖြစ်ပြီး၊ ဒါများကို ဒေတာကို စီမံခန့်ခွဲရန် အသုံးပြုသည်။

[![Arrays](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "Arrays")

[![Loops](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "Loops")

> 🎥 အထက်ရှိပုံများကို နှိပ်ပြီး arrays နှင့် loops အကြောင်း ဗီဒီယိုများကို ကြည့်ပါ။

> ဒီသင်ခန်းစာကို [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-arrays/?WT.mc_id=academic-77807-sagibbon) တွင် လေ့လာနိုင်ပါသည်။

## Arrays

ဒေတာနှင့်အလုပ်လုပ်ခြင်းသည် ဘာသာစကားတိုင်းအတွက် ရိုးရိုးရှင်းရှင်းလုပ်ဆောင်ရမည့်အလုပ်ဖြစ်ပြီး၊ ဒေတာကို စနစ်တကျဖွဲ့စည်းထားသော ပုံစံ (ဥပမာ arrays) တွင် စီစဉ်ထားပါက ပိုမိုလွယ်ကူသည်။ Arrays တွင် ဒေတာကို စာရင်းပုံစံနှင့် ဆင်တူသော ဖွဲ့စည်းမှုတစ်ခုတွင် သိမ်းဆည်းထားသည်။ Arrays ၏ အရေးကြီးသော အကျိုးကျေးဇူးတစ်ခုမှာ တစ်ခုတည်းသော array တွင် ဒေတာအမျိုးအစားများစွာကို သိမ်းဆည်းနိုင်ခြင်းဖြစ်သည်။

✅ Arrays သည် ကျွန်ုပ်တို့ပတ်ဝန်းကျင်တွင် အများကြီးရှိသည်! Solar panel array ကဲ့သို့သော အမှန်တကယ်ရှိသော array တစ်ခုကို သင်စဉ်းစားနိုင်ပါသလား?

Array ရေးသားရန် syntax သည် square brackets တစ်စုံဖြစ်သည်။

```javascript
let myArray = [];
```

ဤသည်မှာ အလွတ် array ဖြစ်သည်။ သို့သော် arrays များကို ဒေတာဖြင့် ပြည့်စုံပြီးသားအနေဖြင့် ကြေညာနိုင်သည်။ Array တွင်ရှိသော တန်ဖိုးများကို comma ဖြင့် ခွဲထားသည်။

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
```

Array တွင်ရှိသော တန်ဖိုးများကို **index** ဟုခေါ်သော တန်ဖိုးတစ်ခုဖြင့် သတ်မှတ်ထားသည်။ Index သည် array ၏အစမှ အကွာအဝေးအပေါ် မူတည်၍ သတ်မှတ်ထားသော ကိန်းဂဏန်းဖြစ်သည်။ အထက်ပါဥပမာတွင် "Chocolate" ဟုရေးထားသော string တန်ဖိုးသည် index 0 ရှိပြီး၊ "Rocky Road" ၏ index သည် 4 ဖြစ်သည်။ Square brackets နှင့် index ကို အသုံးပြု၍ array တန်ဖိုးများကို ရယူ၊ ပြောင်းလဲ၊ သို့မဟုတ် ထည့်သွင်းနိုင်သည်။

✅ Arrays သည် 0 index မှ စတင်သည်ဟု သင်အံ့ဩပါသလား? အချို့ programming languages တွင် index များသည် 1 မှ စတင်သည်။ ဤအကြောင်းအရာနှင့်ပတ်သက်သော စိတ်ဝင်စားဖွယ်ရာ သမိုင်းကြောင်းကို [Wikipedia](https://en.wikipedia.org/wiki/Zero-based_numbering) တွင် ဖတ်ရှုနိုင်ပါသည်။

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors[2]; //"Vanilla"
```

Index ကို အသုံးပြု၍ တန်ဖိုးကို ပြောင်းလဲနိုင်သည်၊ ဥပမာအားဖြင့်:

```javascript
iceCreamFlavors[4] = "Butter Pecan"; //Changed "Rocky Road" to "Butter Pecan"
```

သတ်မှတ်ထားသော index တွင် တန်ဖိုးအသစ်ကို ထည့်သွင်းနိုင်သည်၊ ဥပမာအားဖြင့်:

```javascript
iceCreamFlavors[5] = "Cookie Dough"; //Added "Cookie Dough"
```

✅ Array တွင် တန်ဖိုးများကို push လုပ်ရန် array.push() ကဲ့သို့သော array operators များကို အသုံးပြုခြင်းသည် ပိုမိုရိုးရှင်းသော နည်းလမ်းဖြစ်သည်။

Array တွင်ရှိသော items အရေအတွက်ကို သိရန် `length` property ကို အသုံးပြုပါ။

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors.length; //5
```

✅ ကိုယ်ပိုင် array တစ်ခုကို ဖန်တီးပြီး browser console တွင် စမ်းသပ်ပါ။

## Loops

Loops များသည် ထပ်တလဲလဲလုပ်ဆောင်မှုများ သို့မဟုတ် **iterative** အလုပ်များကို လုပ်ဆောင်ရန် ခွင့်ပြုသည်။ ဒါက အချိန်နှင့် ကုဒ်များကို သိမ်းဆည်းပေးနိုင်သည်။ Loop တစ်ခု၏ iteration တစ်ခုစီသည် variable, value, နှင့် condition များအပေါ် မူတည်၍ ကွဲပြားနိုင်သည်။ JavaScript တွင် loops အမျိုးအစားများစွာရှိပြီး၊ အနည်းငယ်ကွဲပြားမှုများရှိသော်လည်း အဓိကအားဖြင့် တူညီသောအလုပ်ကို လုပ်ဆောင်သည်: ဒေတာကို loop လုပ်ခြင်း။

### For Loop

`for` loop သည် iteration လုပ်ရန် အချက် ၃ ခုလိုအပ်သည်:
- `counter` Iteration အရေအတွက်ကို ရေတွက်ရန် သတ်မှတ်ထားသော variable
- `condition` Comparison operators ကို အသုံးပြု၍ `false` ဖြစ်သောအခါ loop ကို ရပ်တန့်စေသော expression
- `iteration-expression` Iteration တစ်ခုစီ၏ အဆုံးတွင် run လုပ်ပြီး၊ counter value ကို ပြောင်းလဲရန် အသုံးပြုသည်။

```javascript
// Counting up to 10
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

✅ ဤကုဒ်ကို browser console တွင် run လုပ်ပါ။ Counter, condition, iteration expression တို့ကို အနည်းငယ်ပြောင်းလဲပါက ဘာဖြစ်မည်ကို စမ်းသပ်ပါ။ Loop ကို နောက်ပြန်လည်လုပ်ပြီး countdown ဖန်တီးနိုင်ပါသလား?

### While loop

`for` loop ၏ syntax နှင့် မတူကွဲပြားပြီး၊ `while` loop သည် condition တစ်ခုသာလိုအပ်သည်။ Condition သည် `false` ဖြစ်သောအခါ loop ကို ရပ်တန့်စေသည်။ Loop များတွင် condition များသည် counter ကဲ့သို့သော တန်ဖိုးများကို အခြေခံထားပြီး၊ loop အတွင်းတွင် စီမံခန့်ခွဲရမည်။ Counter များအတွက် starting value များကို loop အပြင်တွင် ဖန်တီးရမည်။ Condition ကို ဖြည့်ဆည်းရန် expression များကို loop အတွင်းတွင် ထိန်းသိမ်းရမည်။

```javascript
//Counting up to 10
let i = 0;
while (i < 10) {
 console.log(i);
 i++;
}
```

✅ For loop နှင့် while loop ကို ဘာကြောင့် ရွေးချယ်မည်ဆိုတာ သင်စဉ်းစားပါ။ StackOverflow တွင် 17,000 ကျော်သော viewers မေးမြန်းခဲ့ပြီး၊ [အမြင်အချို့](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript) သင်စိတ်ဝင်စားနိုင်သည်။

## Loops နှင့် Arrays

Arrays များသည် loops နှင့် အတူ အသုံးပြုလေ့ရှိသည်။ အများအားဖြင့် condition များသည် loop ကို ရပ်တန့်စေသော array ၏ length ကို လိုအပ်ပြီး၊ index သည် counter value ဖြစ်နိုင်သည်။

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(iceCreamFlavors[i]);
} //Ends when all flavors are printed
```

✅ ကိုယ်ပိုင် array တစ်ခုကို ဖန်တီးပြီး browser console တွင် loop လုပ်ခြင်းကို စမ်းသပ်ပါ။

---

## 🚀 စိန်ခေါ်မှု

For နှင့် while loops များအပြင် arrays ကို loop လုပ်ရန် နည်းလမ်းများရှိသည်။ [forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of), နှင့် [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map) တို့ဖြစ်သည်။ သင်၏ array loop ကို ဤနည်းလမ်းများထဲမှ တစ်ခုကို အသုံးပြုပြီး ပြန်ရေးပါ။

## မိန့်ခွန်းပြီး Quiz
[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/14)

## ပြန်လည်သုံးသပ်ခြင်းနှင့် ကိုယ်ပိုင်လေ့လာမှု

JavaScript တွင် arrays များသည် ဒေတာကို စီမံခန့်ခွဲရန် အလွန်အသုံးဝင်သော methods များစွာပါရှိသည်။ [ဤ methods များကို ဖတ်ရှုပါ](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)၊ push, pop, slice, splice ကဲ့သို့သော methods များကို ကိုယ်ပိုင် array တစ်ခုတွင် စမ်းသပ်ပါ။

## အလုပ်ပေးစာ

[Loop an Array](assignment.md)

---

**ဝက်ဘ်ဆိုက်မှတ်ချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှန်ကန်မှုအတွက် ကြိုးစားနေပါသော်လည်း၊ အလိုအလျောက်ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မမှန်ကန်မှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းစာရွက်စာတမ်းကို ၎င်း၏ မူလဘာသာစကားဖြင့် အာဏာတည်သောရင်းမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူ့ဘာသာပြန်ပညာရှင်များမှ ပြန်ဆိုမှုကို အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော နားလည်မှုမှားများ သို့မဟုတ် အဓိပ္ပာယ်မှားများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။