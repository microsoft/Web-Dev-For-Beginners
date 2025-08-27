<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "fc6aef8ecfdd5b0ad2afa6e6ba52bfde",
  "translation_date": "2025-08-27T22:31:44+00:00",
  "source_file": "2-js-basics/1-data-types/README.md",
  "language_code": "my"
}
-->
# JavaScript အခြေခံ: ဒေတာအမျိုးအစားများ

![JavaScript Basics - Data types](../../../../translated_images/webdev101-js-datatypes.4cc470179730702c756480d3ffa46507f746e5975ebf80f99fdaaf1cff09a7f4.my.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## မိန့်ခွန်းမပြောမီ စမ်းမေးခွန်း
[Pre-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/7)

ဒီသင်ခန်းစာမှာ JavaScript အခြေခံများကို လေ့လာပါမယ်။ JavaScript က ဝဘ်ဆိုဒ်မှာ အပြန်အလှန်လုပ်ဆောင်မှုများကို ပေးစွမ်းတဲ့ programming language ဖြစ်ပါတယ်။

> ဒီသင်ခန်းစာကို [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-variables/?WT.mc_id=academic-77807-sagibbon) မှာ လေ့လာနိုင်ပါတယ်!

[![Variables](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Variables in JavaScript")

[![Data Types in JavaScript](https://img.youtube.com/vi/AWfA95eLdq8/0.jpg)](https://youtube.com/watch?v=AWfA95eLdq8 "Data Types in JavaScript")

> 🎥 အပေါ်ကပုံများကို နှိပ်ပြီး Variables နဲ့ Data Types အကြောင်း ဗီဒီယိုများကို ကြည့်ပါ

Variables နဲ့ ဒေတာအမျိုးအစားများကို စတင်လေ့လာကြပါစို့!

## Variables

Variables ဆိုတာ သင့်ကုဒ်မှာ တန်ဖိုးများကို သိမ်းဆည်းပြီး ပြောင်းလဲအသုံးပြုနိုင်တဲ့ အရာတွေပါ။

Variable တစ်ခုကို ဖန်တီးပြီး **ကြေညာ**ဖို့အတွက် **[keyword] [name]** ဆိုတဲ့ syntax ကို အသုံးပြုရပါတယ်။ ဒါဟာ အောက်ပါ အပိုင်းနှစ်ခုပါဝင်ပါတယ်။

- **Keyword**. Keywords တွေက `let` သို့မဟုတ် `var` ဖြစ်နိုင်ပါတယ်။

✅ ES6 မှာ `let` ဆိုတဲ့ keyword ကို မိတ်ဆက်ခဲ့ပြီး variable ကို _block scope_ ပေးပါတယ်။ `let` ကို `var` ထက် အသုံးပြုဖို့ အကြံပြုပါတယ်။ block scopes အကြောင်းကို နောက်ပိုင်းမှာ ပိုမိုအသေးစိတ်လေ့လာပါမယ်။
- **Variable name**. Variable name က သင့်ကိုယ်တိုင်ရွေးချယ်ရတဲ့ နာမည်ပါ။

### Task - Variables နဲ့ လုပ်ဆောင်မှု

1. **Variable ကို ကြေညာပါ**. `let` keyword ကို အသုံးပြုပြီး variable ကို ကြေညာပါ:

    ```javascript
    let myVariable;
    ```

   `myVariable` ကို `let` keyword ကို အသုံးပြုပြီး ကြေညာပြီးပါပြီ။ အခုတော့ တန်ဖိုးမရှိသေးပါဘူး။

1. **တန်ဖိုးပေးပါ**. `=` operator နဲ့ variable ထဲမှာ တန်ဖိုးကို သိမ်းဆည်းပါ။

    ```javascript
    myVariable = 123;
    ```

   > Note: ဒီသင်ခန်းစာမှာ `=` ကို "assignment operator" အနေနဲ့ အသုံးပြုပါတယ်။ ဒါဟာ variable ကို တန်ဖိုးပေးဖို့အတွက် အသုံးပြုတာဖြစ်ပြီး တန်းတူညီမျှမှုကို မဆိုလိုပါဘူး။

   `myVariable` ကို 123 တန်ဖိုးနဲ့ *initialized* လုပ်ပြီးပါပြီ။

1. **Refactor**. သင့်ကုဒ်ကို အောက်ပါ statement နဲ့ အစားထိုးပါ။

    ```javascript
    let myVariable = 123;
    ```

    အထက်ပါကုဒ်ဟာ _explicit initialization_ လို့ခေါ်ပြီး variable ကို ကြေညာပြီး တန်ဖိုးကို တစ်ချိန်တည်းမှာပဲ ပေးထားတာဖြစ်ပါတယ်။

1. **Variable တန်ဖိုးကို ပြောင်းပါ**. Variable တန်ဖိုးကို အောက်ပါနည်းလမ်းနဲ့ ပြောင်းပါ:

   ```javascript
   myVariable = 321;
   ```

   Variable ကို ကြေညာပြီးတဲ့နောက်မှာ `=` operator နဲ့ တန်ဖိုးအသစ်ကို သင့်ကုဒ်မှာ အချိန်မရွေး ပြောင်းလဲနိုင်ပါတယ်။

   ✅ စမ်းကြည့်ပါ! သင့် browser မှာ JavaScript ကို ရေးနိုင်ပါတယ်။ Browser window ကို ဖွင့်ပြီး Developer Tools ကို သွားပါ။ Console မှာ prompt တစ်ခုကို တွေ့ပါလိမ့်မယ်။ `let myVariable = 123` လို့ ရိုက်ထည့်ပြီး return ကို နှိပ်ပါ၊ ပြီးရင် `myVariable` ကို ရိုက်ထည့်ပါ။ ဘာဖြစ်သွားလဲ? ဒီ concepts တွေကို နောက်ထပ်သင်ခန်းစာတွေမှာ ပိုမိုလေ့လာပါမယ်။

## Constants

Constant ကို ကြေညာပြီး initialize လုပ်ဖို့အတွက် variable နဲ့ တူညီတဲ့ concept တွေကို လိုအပ်ပါတယ်၊ `const` keyword ကို အသုံးပြုရတာကို မျှော်လင့်ရပါတယ်။ Constants တွေကို အများအားဖြင့် အားလုံး uppercase letter နဲ့ ကြေညာပါတယ်။

```javascript
const MY_VARIABLE = 123;
```

Constants တွေဟာ variable တွေနဲ့ ဆင်တူပါတယ်၊ ဒါပေမယ့် အောက်ပါ အချက်နှစ်ခုကွာခြားပါတယ်။

- **တန်ဖိုးရှိရမယ်**. Constants တွေကို initialize မလုပ်ရင် error ဖြစ်ပေါ်နိုင်ပါတယ်။
- **Reference ကို မပြောင်းလဲနိုင်ပါ**. Constant ကို initialize လုပ်ပြီးတဲ့နောက်မှာ reference ကို ပြောင်းလဲမရပါဘူး၊ error ဖြစ်ပေါ်နိုင်ပါတယ်။ အောက်ပါ ဥပမာနှစ်ခုကို ကြည့်ပါ:
   - **ရိုးရှင်းတဲ့တန်ဖိုး**. အောက်ပါအရာကို မလုပ်နိုင်ပါ:
   
      ```javascript
      const PI = 3;
      PI = 4; // not allowed
      ```
 
   - **Object reference ကို ကာကွယ်ထားပါတယ်**. အောက်ပါအရာကို မလုပ်နိုင်ပါ:
   
      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // not allowed
      ```

    - **Object value ကို မကာကွယ်ထားပါ**. အောက်ပါအရာကို လုပ်နိုင်ပါတယ်:
    
      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // allowed
      ```

      အထက်ပါမှာ object ရဲ့ value ကို ပြောင်းလဲထားတာဖြစ်ပြီး reference ကို မပြောင်းလဲထားတာကြောင့် လုပ်နိုင်ပါတယ်။

   > Note, `const` ဆိုတာ reference ကို ပြောင်းလဲမှုမှ ကာကွယ်ပေးတာဖြစ်ပါတယ်။ ဒါပေမယ့် value ကို _immutable_ မဟုတ်ပါဘူး၊ အထူးသဖြင့် object လိုမျိုး ရှုပ်ထွေးတဲ့ construct တွေမှာ value ကို ပြောင်းလဲနိုင်ပါတယ်။

## ဒေတာအမျိုးအစားများ

Variables တွေဟာ နံပါတ်တွေ၊ စာသားတွေလိုမျိုး အမျိုးမျိုးသော တန်ဖိုးများကို သိမ်းဆည်းနိုင်ပါတယ်။ ဒီတန်ဖိုးအမျိုးအစားတွေကို **data type** လို့ခေါ်ပါတယ်။ ဒေတာအမျိုးအစားတွေဟာ software development မှာ အရေးကြီးပါတယ်၊ အကြောင်းက developer တွေကို ကုဒ်ရေးနည်းနဲ့ software ရှေ့ဆောင်ပုံကို ဆုံးဖြတ်နိုင်စေပါတယ်။ ထို့အပြင် ဒေတာအမျိုးအစားတချို့မှာ တန်ဖိုးထဲက အချက်အလက်တွေကို ပြောင်းလဲဖို့ သို့မဟုတ် ထုတ်ယူဖို့ အထူးလက္ခဏာတွေ ပါဝင်ပါတယ်။

✅ ဒေတာအမျိုးအစားတွေကို JavaScript data primitives လို့လည်း ခေါ်ပါတယ်၊ ဒါဟာ language မှပေးထားတဲ့ အနိမ့်ဆုံးအဆင့် ဒေတာအမျိုးအစားတွေဖြစ်ပါတယ်။ Primitive data types ၇ မျိုးရှိပါတယ်: string, number, bigint, boolean, undefined, null, symbol. ဒီ primitives တစ်ခုချင်းစီက ဘာကို ကိုယ်စားပြုနိုင်မလဲဆိုတာ စဉ်းစားကြည့်ပါ။ `zebra` ဆိုတာဘာလဲ? `0` ကော? `true` ကော?

### Numbers

အရင်ပိုင်းက `myVariable` ရဲ့ value ဟာ number data type ဖြစ်ပါတယ်။

`let myVariable = 123;`

Variables တွေဟာ decimal နဲ့ negative numbers အပါအဝင် နံပါတ်အမျိုးမျိုးကို သိမ်းဆည်းနိုင်ပါတယ်။ Numbers တွေကို arithmetic operators တွေနဲ့လည်း အသုံးပြုနိုင်ပါတယ်၊ [နောက်ပိုင်းအပိုင်း](../../../../2-js-basics/1-data-types) မှာ လေ့လာပါမယ်။

### Arithmetic Operators

Arithmetic function တွေကို လုပ်ဆောင်ဖို့ operator အမျိုးမျိုးရှိပြီး အချို့ကို အောက်မှာ ဖော်ပြထားပါတယ်:

| Symbol | ဖော်ပြချက်                                                               | ဥပမာ                           |
| ------ | ------------------------------------------------------------------------ | -------------------------------- |
| `+`    | **Addition**: နံပါတ်နှစ်ခုရဲ့ စုစုပေါင်းကို တွက်ချက်သည်                 | `1 + 2 //expected answer is 3`   |
| `-`    | **Subtraction**: နံပါတ်နှစ်ခုရဲ့ ကွာခြားချက်ကို တွက်ချက်သည်             | `1 - 2 //expected answer is -1`  |
| `*`    | **Multiplication**: နံပါတ်နှစ်ခုရဲ့ ထုတ်ကုန်ကို တွက်ချက်သည်             | `1 * 2 //expected answer is 2`   |
| `/`    | **Division**: နံပါတ်နှစ်ခုရဲ့ မျှဝေချက်ကို တွက်ချက်သည်                 | `1 / 2 //expected answer is 0.5` |
| `%`    | **Remainder**: နံပါတ်နှစ်ခုကို မျှဝေပြီး ကျန်ရှိသော တန်ဖိုးကို တွက်ချက်သည် | `1 % 2 //expected answer is 1`   |

✅ စမ်းကြည့်ပါ! Browser console မှာ arithmetic operation တစ်ခုကို စမ်းကြည့်ပါ။ ရလဒ်တွေက သင့်ကို အံ့ဩစေပါသလား?

### Strings

Strings ဆိုတာ single quotes သို့မဟုတ် double quotes ကြားမှာ ရှိတဲ့ စာလုံးများဖြစ်ပါတယ်။

- `'This is a string'`
- `"This is also a string"`
- `let myString = 'This is a string value stored in a variable';`

String ရေးတဲ့အခါ quotes ကို အသုံးပြုဖို့ မမေ့ပါနဲ့၊ မဟုတ်ရင် JavaScript က variable name လို့ ထင်နိုင်ပါတယ်။

### Formatting Strings

Strings တွေဟာ စာသားဖြစ်ပြီး အချိန်အခါတစ်ချို့မှာ format လုပ်ဖို့ လိုအပ်နိုင်ပါတယ်။

Strings နှစ်ခု သို့မဟုတ် အများကြီးကို **concatenate** လုပ်ဖို့ `+` operator ကို အသုံးပြုပါ။

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!

```

✅ ဘာကြောင့် JavaScript မှာ `1 + 1 = 2` ဖြစ်ပြီး `'1' + '1' = 11` ဖြစ်တာလဲ? စဉ်းစားကြည့်ပါ။ `'1' + 1` ကော?

**Template literals** ဆိုတာ strings ကို format လုပ်ဖို့ နောက်ထပ်နည်းလမ်းတစ်ခုဖြစ်ပြီး quotes အစား backtick ကို အသုံးပြုပါတယ်။ Plain text မဟုတ်တဲ့ အရာအားလုံးကို `${ }` placeholder ထဲမှာ ထည့်ရပါမယ်။ ဒါမှာ string ဖြစ်နိုင်တဲ့ variable တွေပါဝင်ပါတယ်။

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
```

သင့်ရဲ့ formatting ရည်ရွယ်ချက်တွေကို နည်းလမ်းနှစ်ခုလုံးနဲ့ ရနိုင်ပါတယ်၊ ဒါပေမယ့် template literals က spaces နဲ့ line breaks ကို လေးစားပေးပါမယ်။

✅ Template literal ကို ဘယ်အချိန်မှာ အသုံးပြုမလဲ၊ plain string ကို ဘယ်အချိန်မှာ အသုံးပြုမလဲ?

### Booleans

Booleans တွေဟာ `true` သို့မဟုတ် `false` ဆိုတဲ့ တန်ဖိုးနှစ်ခုသာ ရှိနိုင်ပါတယ်။ Booleans တွေက အခြေအနေတစ်ခုခုကို ဖြည့်ဆည်းတဲ့အခါ ဘယ်လိုကုဒ်တွေကို run လုပ်မလဲဆိုတာ ဆုံးဖြတ်နိုင်စေပါတယ်။ အများအားဖြင့် [operators](../../../../2-js-basics/1-data-types) တွေက Boolean တန်ဖိုးကို သတ်မှတ်ဖို့ အကူအညီပေးပြီး variable တွေကို initialize လုပ်တာ သို့မဟုတ် value ကို update လုပ်တာတွေကို မကြာခဏ တွေ့ရပါမယ်။

- `let myTrueBool = true`
- `let myFalseBool = false`

✅ Variable တစ်ခုကို boolean `true` အဖြစ် သတ်မှတ်နိုင်ရင် 'truthy' ဖြစ်တယ်လို့ ဆိုနိုင်ပါတယ်။ အံ့ဩစရာက JavaScript မှာ [falsy အဖြစ် သတ်မှတ်ထားတဲ့ value များအပြင် value အားလုံးကို truthy ဖြစ်တယ်](https://developer.mozilla.org/docs/Glossary/Truthy) လို့ သတ်မှတ်ပါတယ်။

---

## 🚀 စိန်ခေါ်မှု

JavaScript ဟာ တစ်ခါတစ်လေ ဒေတာအမျိုးအစားတွေကို handle လုပ်တဲ့နည်းလမ်းတွေကြောင့် အံ့ဩစရာများဖြစ်တတ်ပါတယ်။ ဒီ 'gotchas' တွေကို သုတေသနလုပ်ကြည့်ပါ။ ဥပမာ - case sensitivity က အခက်အခဲဖြစ်နိုင်ပါတယ်! Console မှာ ဒီလိုစမ်းကြည့်ပါ: `let age = 1; let Age = 2; age == Age` (ရလဒ် `false` -- ဘာကြောင့်လဲ?) အခြား gotchas တွေကို ရှာဖွေကြည့်ပါ။

## မိန့်ခွန်းပြီးနောက် စမ်းမေးခွန်း
[Post-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/8)

## ပြန်လည်သုံးသပ်ခြင်းနှင့် ကိုယ်တိုင်လေ့လာခြင်း

[JavaScript exercises](https://css-tricks.com/snippets/javascript/) စာရင်းကို ကြည့်ပြီး တစ်ခုကို စမ်းကြည့်ပါ။ ဘာတွေ သင်ယူနိုင်ခဲ့လဲ?

## အိမ်စာ

[Data Types Practice](assignment.md)

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း၊ အလိုအလျောက် ဘာသာပြန်ခြင်းတွင် အမှားများ သို့မဟုတ် မတိကျမှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းစာရွက်စာတမ်းကို ၎င်း၏ မူရင်းဘာသာစကားဖြင့် အာဏာတရားရှိသော အရင်းအမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူက ဘာသာပြန်ခြင်းကို အကြံပြုပါသည်။ ဤဘာသာပြန်ကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအလွတ်များ သို့မဟုတ် အနားယူမှုမှားများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။