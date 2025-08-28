<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b95fdd8310ef467305015ece1b0f9411",
  "translation_date": "2025-08-28T18:42:33+00:00",
  "source_file": "2-js-basics/1-data-types/README.md",
  "language_code": "my"
}
-->
# JavaScript အခြေခံ: ဒေတာအမျိုးအစားများ

![JavaScript Basics - Data types](../../../../translated_images/webdev101-js-datatypes.4cc470179730702c756480d3ffa46507f746e5975ebf80f99fdaaf1cff09a7f4.my.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## မိန့်ခွန်းမပြောမီ စမ်းမေးခွန်း
[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/)

ဒီသင်ခန်းစာမှာ JavaScript အခြေခံများကို လေ့လာပါမည်။ JavaScript သည် ဝဘ်ပေါ်တွင် အပြန်အလှန်လုပ်ဆောင်မှုများကို ပေးစွမ်းသော ဘာသာစကားဖြစ်သည်။

> ဒီသင်ခန်းစာကို [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-variables/?WT.mc_id=academic-77807-sagibbon) မှာ လေ့လာနိုင်ပါတယ်!

[![Variables](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Variables in JavaScript")

[![Data Types in JavaScript](https://img.youtube.com/vi/AWfA95eLdq8/0.jpg)](https://youtube.com/watch?v=AWfA95eLdq8 "Data Types in JavaScript")

> 🎥 အထက်ရှိ ပုံများကို နှိပ်ပြီး Variables နှင့် Data Types အကြောင်း ဗီဒီယိုများကို ကြည့်ပါ

အရင်ဆုံး Variables နှင့် ဒါတွင် ပါဝင်သော ဒေတာအမျိုးအစားများကို စတင်လေ့လာကြပါစို့!

## Variables

Variables သည် သင့်ကုဒ်တွင် တစ်လျှောက်လုံး အသုံးပြုနိုင်ပြီး ပြောင်းလဲနိုင်သော တန်ဖိုးများကို သိမ်းဆည်းပေးသည်။

Variable တစ်ခုကို ဖန်တီးပြီး **ကြေညာ**ခြင်းသည် **[keyword] [name]** ဆိုသော syntax ဖြင့် ရေးသားရမည်။ ၎င်းသည် အောက်ပါ အစိတ်အပိုင်းနှစ်ခုဖြင့် ဖွဲ့စည်းထားသည်-

- **Keyword**. Keywords တွင် `let` သို့မဟုတ် `var` ပါဝင်နိုင်သည်။

✅ `let` keyword ကို ES6 မှာ မိတ်ဆက်ခဲ့ပြီး variable ကို _block scope_ ဟုခေါ်သော အကျယ်အဝန်းပေးသည်။ `var` ထက် `let` ကို အသုံးပြုရန် အကြံပြုထားသည်။ block scopes အကြောင်းကို နောက်ပိုင်းတွင် ပိုမိုအသေးစိတ်လေ့လာပါမည်။
- **Variable name**. သင့်ကိုယ်တိုင် ရွေးချယ်ထားသော နာမည်ဖြစ်သည်။

### Task - Variables နှင့် လုပ်ဆောင်ခြင်း

1. **Variable ကို ကြေညာပါ**. `let` keyword ကို အသုံးပြု၍ Variable ကို ကြေညာပါ:

    ```javascript
    let myVariable;
    ```

   `myVariable` ကို `let` keyword ဖြင့် ကြေညာပြီးဖြစ်သည်။ ၎င်းတွင် လက်ရှိအချိန်တွင် တန်ဖိုးမရှိသေးပါ။

1. **တန်ဖိုးထည့်ပါ**. `=` operator ကို အသုံးပြု၍ Variable တွင် တန်ဖိုးကို သိမ်းဆည်းပါ၊ ထို့နောက် မျှော်မှန်းထားသော တန်ဖိုးကို ထည့်ပါ။

    ```javascript
    myVariable = 123;
    ```

   > Note: ဒီသင်ခန်းစာမှာ `=` ကို အသုံးပြုခြင်းသည် Variable တွင် တန်ဖိုးကို သတ်မှတ်ရန် အသုံးပြုသော "assignment operator" ဖြစ်သည်။ ၎င်းသည် တန်းတူမှုကို မဆိုလိုပါ။

   `myVariable` ကို 123 တန်ဖိုးဖြင့် *initialized* လုပ်ပြီးဖြစ်သည်။

1. **Refactor**. သင့်ကုဒ်ကို အောက်ပါ statement ဖြင့် အစားထိုးပါ။

    ```javascript
    let myVariable = 123;
    ```

    အထက်ပါသည် _explicit initialization_ ဟုခေါ်သည်။ Variable ကို ကြေညာပြီး တန်ဖိုးကို တစ်ချိန်တည်းတွင် သတ်မှတ်ခြင်းဖြစ်သည်။

1. **Variable တန်ဖိုးကို ပြောင်းလဲပါ**. Variable တန်ဖိုးကို အောက်ပါနည်းဖြင့် ပြောင်းလဲပါ:

   ```javascript
   myVariable = 321;
   ```

   Variable ကို ကြေညာပြီးနောက် သင့်ကုဒ်တွင် တန်ဖိုးကို `=` operator နှင့် တန်ဖိုးအသစ်ဖြင့် အချိန်မရွေး ပြောင်းလဲနိုင်သည်။

   ✅ စမ်းကြည့်ပါ! သင့် browser မှာ JavaScript ကို တိုက်ရိုက်ရေးနိုင်ပါတယ်။ Browser window ကို ဖွင့်ပြီး Developer Tools ကို သွားပါ။ Console တွင် prompt ကို တွေ့ပါမည်။ `let myVariable = 123` ဟု ရိုက်ထည့်ပြီး return ကို နှိပ်ပါ၊ ထို့နောက် `myVariable` ကို ရိုက်ပါ။ ဘာဖြစ်သလဲ? ဒီအကြောင်းကို နောက်ထပ် သင်ခန်းစာများတွင် ပိုမိုလေ့လာပါမည်။

## Constants

Constant ကို ကြေညာခြင်းနှင့် initialization လုပ်ခြင်းသည် Variable နှင့် အခြေခံအချက်များ တူသည်။ သို့သော် `const` keyword ကို အသုံးပြုရမည်။ Constants များကို အများအားဖြင့် အကြီးစာလုံးများဖြင့် ကြေညာသည်။

```javascript
const MY_VARIABLE = 123;
```

Constants သည် Variable များနှင့် ဆင်တူသည်၊ သို့သော် အောက်ပါ အချက်နှစ်ခုကွာခြားသည်-

- **တန်ဖိုးရှိရမည်**. Constants များကို initialization မလုပ်ပါက ကုဒ်ကို run လုပ်သောအခါ error ဖြစ်ပေါ်မည်။
- **Reference ကို မပြောင်းလဲနိုင်**. Constant ကို initialization လုပ်ပြီးနောက် Reference ကို ပြောင်းလဲမရပါ၊ ပြောင်းလဲပါက error ဖြစ်ပေါ်မည်။ အောက်ပါ ဥပမာနှစ်ခုကို ကြည့်ပါ-
   - **ရိုးရှင်းသော တန်ဖိုး**. အောက်ပါသည် ခွင့်မပြုပါ:
   
      ```javascript
      const PI = 3;
      PI = 4; // not allowed
      ```
 
   - **Object reference ကို ကာကွယ်ထားသည်**. အောက်ပါသည် ခွင့်မပြုပါ:
   
      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // not allowed
      ```

    - **Object value ကို မကာကွယ်ထားပါ**. အောက်ပါသည် ခွင့်ပြုပါ:
    
      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // allowed
      ```

      အထက်ပါသည် Object တန်ဖိုးကို ပြောင်းလဲနေသော်လည်း Reference ကို မပြောင်းလဲသည့်အတွက် ခွင့်ပြုထားသည်။

   > Note, `const` သည် Reference ကို ပြန်လည်သတ်မှတ်ခြင်းမှ ကာကွယ်ပေးသည်။ သို့သော် တန်ဖိုးသည် _immutable_ မဟုတ်သေးပါ၊ အထူးသဖြင့် Object ကဲ့သို့သော ရှုပ်ထွေးသော ဖွဲ့စည်းမှုများတွင် ပြောင်းလဲနိုင်သည်။

## ဒေတာအမျိုးအစားများ

Variables တွင် နံပါတ်များနှင့် စာသားများကဲ့သို့သော အမျိုးမျိုးသော တန်ဖိုးများကို သိမ်းဆည်းနိုင်သည်။ ဒီအမျိုးမျိုးသော တန်ဖိုးများကို **ဒေတာအမျိုးအစား** ဟုခေါ်သည်။ ဒေတာအမျိုးအစားများသည် ကုဒ်ကို ရေးသားပုံနှင့် software ကို run လုပ်ပုံအပေါ် developer များအတွက် ဆုံးဖြတ်ချက်များကို ကူညီပေးသည်။ ထို့အပြင် ဒေတာအမျိုးအစားတစ်ချို့တွင် တန်ဖိုးအတွင်းရှိ အချက်အလက်များကို ပြောင်းလဲခြင်း သို့မဟုတ် ထုတ်ယူခြင်းအတွက် ထူးခြားသော လုပ်ဆောင်ချက်များပါဝင်သည်။

✅ ဒေတာအမျိုးအစားများကို JavaScript data primitives ဟုလည်း ခေါ်ကြသည်၊ ဘာသာစကားမှ ပေးထားသော အနိမ့်ဆုံးအဆင့် ဒေတာအမျိုးအစားများဖြစ်သည်။ Primitive data types ၇ မျိုးရှိသည်- string, number, bigint, boolean, undefined, null နှင့် symbol။ ဒီ primitives တစ်ခုချင်းစီသည် ဘာကို ကိုယ်စားပြုနိုင်မလဲဆိုတာကို စဉ်းစားကြည့်ပါ။ `zebra` ဆိုတာဘာလဲ? `0` ကော? `true` ကော?

### Numbers

အရင်ပိုင်းကဏ္ဍတွင် `myVariable` ၏ တန်ဖိုးသည် number data type ဖြစ်သည်။

`let myVariable = 123;`

Variables တွင် decimal သို့မဟုတ် negative numbers အပါအဝင် နံပါတ်အမျိုးမျိုးကို သိမ်းဆည်းနိုင်သည်။ Numbers များကို [နောက်ကဏ္ဍ](../../../../2-js-basics/1-data-types) တွင် ဖော်ပြထားသော arithmetic operators များနှင့်လည်း အသုံးပြုနိုင်သည်။

### Arithmetic Operators

Arithmetic လုပ်ဆောင်ချက်များကို ပြုလုပ်ရာတွင် အသုံးပြုနိုင်သော operator အမျိုးအစားများစွာရှိပြီး အချို့ကို အောက်တွင် ဖော်ပြထားသည်-

| Symbol | ဖော်ပြချက်                                                               | ဥပမာ                           |
| ------ | ------------------------------------------------------------------------ | -------------------------------- |
| `+`    | **Addition**: နံပါတ်နှစ်ခု၏ စုစုပေါင်းကို တွက်ချက်သည်                  | `1 + 2 //expected answer is 3`   |
| `-`    | **Subtraction**: နံပါတ်နှစ်ခု၏ ကွာခြားချက်ကို တွက်ချက်သည်              | `1 - 2 //expected answer is -1`  |
| `*`    | **Multiplication**: နံပါတ်နှစ်ခု၏ ထုတ်လဒ်ကို တွက်ချက်သည်               | `1 * 2 //expected answer is 2`   |
| `/`    | **Division**: နံပါတ်နှစ်ခု၏ မျှဝေချက်ကို တွက်ချက်သည်                   | `1 / 2 //expected answer is 0.5` |
| `%`    | **Remainder**: နံပါတ်နှစ်ခုကို မျှဝေပြီး ကျန်ရှိသော တန်ဖိုးကို တွက်ချက်သည် | `1 % 2 //expected answer is 1`   |

✅ စမ်းကြည့်ပါ! Browser console တွင် arithmetic operation တစ်ခုကို စမ်းကြည့်ပါ။ ရလဒ်များသည် သင့်ကို အံ့ဩစေပါသလား?

### Strings

Strings သည် single quotes သို့မဟုတ် double quotes အတွင်းရှိ စာလုံးများဖြစ်သည်။

- `'This is a string'`
- `"This is also a string"`
- `let myString = 'This is a string value stored in a variable';`

String ရေးသားရာတွင် quotes မသုံးပါက JavaScript သည် ၎င်းကို Variable name ဟုယူဆမည်။

### Formatting Strings

Strings သည် စာသားဖြစ်ပြီး အချိန်အခါတစ်ချို့တွင် format လုပ်ရန် လိုအပ်နိုင်သည်။

Strings နှစ်ခု သို့မဟုတ် အများကြီးကို **concatenate** လုပ်ရန် `+` operator ကို အသုံးပြုပါ။

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!

```

✅ ဘာကြောင့် JavaScript မှာ `1 + 1 = 2` ဖြစ်ပြီး `'1' + '1' = 11` ဖြစ်သလဲ? စဉ်းစားကြည့်ပါ။ `'1' + 1` ကော?

**Template literals** သည် strings ကို format လုပ်ရန် အခြားနည်းလမ်းတစ်ခုဖြစ်သည်။ Quotes မသုံးဘဲ backtick ကို အသုံးပြုရမည်။ Plain text မဟုတ်သော အရာအားလုံးကို `${ }` placeholder အတွင်း ထည့်ရမည်။ ၎င်းတွင် string ဖြစ်နိုင်သော Variable များပါဝင်သည်။

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
```

သင့် formatting ရည်မှန်းချက်များကို နည်းလမ်းနှစ်ခုစလုံးဖြင့် ရရှိနိုင်သော်လည်း Template literals သည် space နှင့် line break များကို လေးစားမည်။

✅ Template literal ကို Plain string ထက် ဘယ်အချိန်မှာ အသုံးပြုမလဲ?

### Booleans

Booleans သည် `true` သို့မဟုတ် `false` တန်ဖိုးနှစ်ခုသာ ရှိနိုင်သည်။ Booleans သည် အခြေအနေတစ်ခုခုကို ဖြည့်ဆည်းသောအခါ ဘယ်လိုကုဒ်များကို run လုပ်မည်ဆိုတာ ဆုံးဖြတ်ရန် ကူညီပေးသည်။ အများအားဖြင့် [operators](../../../../2-js-basics/1-data-types) များသည် Boolean တန်ဖိုးကို သတ်မှတ်ရာတွင် ကူညီပေးပြီး Variable များကို initialization လုပ်ခြင်း သို့မဟုတ် ၎င်းတို့၏ တန်ဖိုးများကို update လုပ်ခြင်းတွင် မကြာခဏ တွေ့ရမည်။

- `let myTrueBool = true`
- `let myFalseBool = false`

✅ Variable တစ်ခုသည် boolean `true` ဟု အကဲဖြတ်နိုင်ပါက 'truthy' ဟုဆိုနိုင်သည်။ အံ့ဩစရာကောင်းသည်မှာ JavaScript တွင် [falsy ဟု သတ်မှတ်ထားသော တန်ဖိုးများမှလွဲ၍ တန်ဖိုးအားလုံးသည် truthy ဖြစ်သည်](https://developer.mozilla.org/docs/Glossary/Truthy)။

---

## 🚀 စိန်ခေါ်မှု

JavaScript သည် တစ်ခါတစ်ရံ ဒေတာအမျိုးအစားများကို handle လုပ်ပုံအပေါ် အံ့ဩစရာများကြောင့် နာမည်ကြီးသည်။ ဒီ 'gotchas' များအကြောင်း သုတေသနလုပ်ပါ။ ဥပမာ- case sensitivity သည် အခက်အခဲဖြစ်စေနိုင်သည်! Console တွင် ဒီလို စမ်းကြည့်ပါ- `let age = 1; let Age = 2; age == Age` (ရလဒ် `false` -- ဘာကြောင့်လဲ?) အခြား gotchas များကို ရှာဖွေပါ။

## မိန့်ခွန်းပြီးနောက် စမ်းမေးခွန်း
[Post-lecture quiz](https://ff-quizzes.netlify.app)

## ပြန်လည်သုံးသပ်ခြင်းနှင့် ကိုယ်တိုင်လေ့လာခြင်း

[JavaScript exercises များ](https://css-tricks.com/snippets/javascript/) စာရင်းကို ကြည့်ပြီး တစ်ခုကို စမ်းကြည့်ပါ။ သင်ဘာလေ့လာရသလဲ?

## အိမ်စာ

[Data Types Practice](assignment.md)

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း၊ အလိုအလျောက် ဘာသာပြန်ခြင်းတွင် အမှားများ သို့မဟုတ် မတိကျမှုများ ပါရှိနိုင်သည်ကို သတိပြုပါ။ မူရင်းစာရွက်စာတမ်းကို ၎င်း၏ မူလဘာသာစကားဖြင့် အာဏာတရားရှိသော အရင်းအမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူ့ဘာသာပြန်ပညာရှင်များမှ ပရော်ဖက်ရှင်နယ် ဘာသာပြန်ခြင်းကို အကြံပြုပါသည်။ ဤဘာသာပြန်ကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအမှားများ သို့မဟုတ် အနားလွဲမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။