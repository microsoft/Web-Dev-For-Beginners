<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8328f58f4593b4671656ff8f4b2edbd9",
  "translation_date": "2025-10-24T16:07:28+00:00",
  "source_file": "2-js-basics/2-functions-methods/assignment.md",
  "language_code": "my"
}
-->
# Functions နှင့်ပျော်ရွှင်ခြင်း

## လမ်းညွှန်ချက်များ

ဒီအလုပ်မှာ JavaScript functions, parameters, default values, နှင့် return statements အကြောင်း သင်လေ့လာထားတဲ့ အယူအဆတွေကို အတည်ပြုဖို့အတွက် function အမျိုးမျိုး ဖန်တီးခြင်းကို လေ့ကျင့်ပါမယ်။

`functions-practice.js` ဆိုတဲ့ JavaScript ဖိုင်တစ်ခု ဖန်တီးပြီး အောက်ပါ functions တွေကို အကောင်အထည်ဖော်ပါ။

### အပိုင်း ၁: အခြေခံ Functions
1. **`sayHello` ဆိုတဲ့ function တစ်ခု ဖန်တီးပါ**။ ဒီ function က parameter မယူပါဘဲ console မှာ "Hello!" လို့ log လုပ်ပါမယ်။

2. **`introduceYourself` ဆိုတဲ့ function တစ်ခု ဖန်တီးပါ**။ ဒီ function က `name` parameter ကိုယူပြီး console မှာ "Hi, my name is [name]" လို့ log လုပ်ပါမယ်။

### အပိုင်း ၂: Default Parameters ပါတဲ့ Functions
3. **`greetPerson` ဆိုတဲ့ function တစ်ခု ဖန်တီးပါ**။ ဒီ function က `name` (လိုအပ်) နှင့် `greeting` (optional, default "Hello") ဆိုတဲ့ parameters နှစ်ခုကိုယူပါမယ်။ function က console မှာ "[greeting], [name]!" လို့ log လုပ်ပါမယ်။

### အပိုင်း ၃: Return Values ပါတဲ့ Functions
4. **`addNumbers` ဆိုတဲ့ function တစ်ခု ဖန်တီးပါ**။ ဒီ function က `num1` နှင့် `num2` ဆိုတဲ့ parameters နှစ်ခုကိုယူပြီး သူတို့ရဲ့ ပေါင်းကို return လုပ်ပါမယ်။

5. **`createFullName` ဆိုတဲ့ function တစ်ခု ဖန်တီးပါ**။ ဒီ function က `firstName` နှင့် `lastName` parameters ကိုယူပြီး full name ကို string တစ်ခုအနေနဲ့ return လုပ်ပါမယ်။

### အပိုင်း ၄: အားလုံးကိုပေါင်းစပ်ခြင်း
6. **`calculateTip` ဆိုတဲ့ function တစ်ခု ဖန်တီးပါ**။ ဒီ function က `billAmount` (လိုအပ်) နှင့် `tipPercentage` (optional, default 15) ဆိုတဲ့ parameters နှစ်ခုကိုယူပြီး tip amount ကိုတွက်ချက်ပြီး return လုပ်ပါမယ်။

### အပိုင်း ၅: Functions တွေကို စမ်းသပ်ပါ
Function တစ်ခုချင်းစီကို စမ်းသပ်ဖို့ function calls တွေ ထည့်ပြီး `console.log()` ကိုသုံးပြီး ရလဒ်တွေကို ပြပါ။

**စမ်းသပ်မှုအတွက် ဥပမာ calls:**
```javascript
// Test your functions here
sayHello();
introduceYourself("Sarah");
greetPerson("Alex");
greetPerson("Maria", "Hi");

const sum = addNumbers(5, 3);
console.log(`The sum is: ${sum}`);

const fullName = createFullName("John", "Doe");
console.log(`Full name: ${fullName}`);

const tip = calculateTip(50);
console.log(`Tip for $50 bill: $${tip}`);
```

## အဆင့်သတ်မှတ်ချက်

| အချက်အလက် | ထူးချွန်မှု | လုံလောက်မှု | တိုးတက်မှုလိုအပ်မှု |
| -------- | --------- | -------- | ----------------- |
| **Function ဖန်တီးခြင်း** | Functions ၆ ခုလုံးကို syntax နှင့် naming conventions မှန်ကန်စွာ ဖန်တီးထားသည် | Functions ၄-၅ ခုကို syntax အနည်းငယ်မှားပြီး ဖန်တီးထားသည် | Functions ၃ ခု သို့မဟုတ် အနည်းငယ်သာ ဖန်တီးထားပြီး syntax အမှားများ |
| **Parameters & Default Values** | လိုအပ်သော parameters, optional parameters, နှင့် default values ကို မှန်ကန်စွာ အသုံးပြုထားသည် | Parameters ကို မှန်ကန်စွာ အသုံးပြုထားသော်လည်း default values တွေမှာ အနည်းငယ်ပြဿနာရှိသည် | Parameters ကို မှားယွင်းစွာ သို့မဟုတ် မထည့်ထား |
| **Return Values** | Return လုပ်သင့်တဲ့ functions တွေ return လုပ်ပြီး၊ return မလုပ်သင့်တဲ့ functions တွေ action လုပ်သက်သာ | Return values အများစု မှန်ကန်ပြီး အနည်းငယ်ပြဿနာရှိသည် | Return statements တွေမှာ ပြဿနာများ |
| **Code Quality** | သန့်ရှင်းပြီး အစီအစဉ်တကျရေးသားထားသော code၊ အဓိပ္ပါယ်ရှိသော variable names နှင့် proper indentation | Code က အလုပ်လုပ်သော်လည်း သန့်ရှင်းမှု သို့မဟုတ် အစီအစဉ်တကျရေးသားမှု မလုံလောက် | Code ကို ဖတ်ရခက်ခဲ သို့မဟုတ် အစီအစဉ်မရှိ |
| **Testing** | Functions အားလုံးကို သင့်လျော်သော function calls ဖြင့် စမ်းသပ်ပြီး ရလဒ်တွေကို ရှင်းလင်းစွာ ပြထားသည် | Functions အများစုကို လုံလောက်စွာ စမ်းသပ်ထားသည် | Functions တွေကို အနည်းငယ် သို့မဟုတ် မှားယွင်းစွာ စမ်းသပ်ထား |

## အပိုဆု စိန်ခေါ်မှုများ (Optional)

သင်ပိုပြီး စိန်ခေါ်မှုကို လုပ်ချင်ပါက -

1. **Arrow function version** ကို functions တစ်ခုအတွက် ဖန်တီးပါ
2. **Function တစ်ခုကို အခြား function အနေနဲ့ parameter အဖြစ် လက်ခံနိုင်သော function တစ်ခု ဖန်တီးပါ** (သင်ခန်းစာထဲက `setTimeout` ဥပမာလိုမျိုး)
3. **Invalid inputs တွေကို handle လုပ်နိုင်ဖို့ input validation ထည့်ပါ**

---

> 💡 **အကြံပြုချက်**: သင့် browser ရဲ့ developer console (F12) ကို ဖွင့်ပြီး `console.log()` statement တွေ ရဲ့ output ကို ကြည့်ပါ!

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မတိကျမှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းဘာသာစကားဖြင့် ရေးသားထားသော စာရွက်စာတမ်းကို အာဏာတရားရှိသော အရင်းအမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူ့ဘာသာပြန်ပညာရှင်များကို အသုံးပြုရန် အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအမှားများ သို့မဟုတ် အနားလွဲမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။