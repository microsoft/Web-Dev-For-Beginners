<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "df0dcecddcd28ea8cbf6ede0ad57d673",
  "translation_date": "2025-10-24T16:46:33+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "my"
}
-->
# လမ်းကြောင်းများကို တိုးတက်အောင်လုပ်ပါ

## လမ်းညွှန်ချက်များ

သင့်ရဲ့ အခြေခံလမ်းကြောင်းစနစ်ကို တည်ဆောက်ပြီးပြီဆိုတော့ အသုံးပြုသူအတွေ့အကြုံကို တိုးတက်စေပြီး developer tools များကို ပိုမိုကောင်းမွန်စေမယ့် professional features များဖြင့် တိုးတက်အောင်လုပ်ရမယ့်အချိန်ရောက်ပါပြီ။ အမှန်တကယ် application များအတွက် template switching ပဲမဟုတ်ဘဲ dynamic page titles, lifecycle hooks, နှင့် extensible architectures တို့လိုအပ်ပါတယ်။

ဒီအလုပ်မှာ သင့်ရဲ့ routing implementation ကို production web applications တွေမှာ အများဆုံးတွေ့ရတဲ့ အရေးကြီး features နှစ်ခုဖြင့် တိုးချဲ့ပါမယ်။ ဒီ enhancements တွေက သင့်ရဲ့ banking app ကို ပိုမိုပြည့်စုံစေပြီး အနာဂတ် functionality များအတွက် အခြေခံအုတ်မြစ်တည်ဆောက်ပေးပါမယ်။

လမ်းကြောင်းများကို သတ်မှတ်ထားတဲ့ routes declaration မှာ template ID ကိုသာ အသုံးပြုထားပါတယ်။ ဒါပေမယ့် စာမျက်နှာအသစ်ကို ပြသတဲ့အခါမှာ အခြားအချက်အလက်များလည်း လိုအပ်တတ်ပါတယ်။ အခုတော့ လမ်းကြောင်းစနစ်ကို အောက်ပါ features နှစ်ခုဖြင့် တိုးတက်အောင်လုပ်ပါမယ်။

### Feature 1: Dynamic Page Titles
**ရည်ရွယ်ချက်:** Template တစ်ခုချင်းစီကို title ပေးပြီး template ပြောင်းလဲတဲ့အခါ window title ကို ဒီ title အသစ်ဖြင့် update လုပ်ပါ။

**အရေးကြီးတဲ့အကြောင်းအရင်းများ:**
- **တိုးတက်စေသည်** အသုံးပြုသူအတွေ့အကြုံကို browser tab titles ကို ဖော်ပြခြင်းဖြင့်
- **တိုးတက်စေသည်** screen readers နှင့် assistive technologies အတွက် accessibility  
- **ပေးသည်** bookmarking နှင့် browser history context ပိုမိုကောင်းမွန်စေခြင်း
- **လိုက်နာသည်** professional web development best practices

**Implementation approach:**
- **Extend** လုပ်ပါ routes object ကို route တစ်ခုချင်းစီအတွက် title အချက်အလက်များပါဝင်အောင်
- **Modify** လုပ်ပါ `updateRoute()` function ကို `document.title` ကို dynamic update လုပ်နိုင်အောင်
- **Test** လုပ်ပါ title များသည် screen များအကြား navigation လုပ်သောအခါ မှန်ကန်စွာ ပြောင်းလဲမှုရှိကြောင်း

### Feature 2: Route Lifecycle Hooks  
**ရည်ရွယ်ချက်:** Template ပြောင်းလဲပြီးနောက် code တစ်ခုခုကို run လုပ်နိုင်တဲ့ option တစ်ခု ထည့်သွင်းပါ။ Dashboard page ကို ပြသတဲ့အခါ developer console မှာ `'Dashboard is shown'` ဟု print လုပ်ချင်ပါတယ်။

**အရေးကြီးတဲ့အကြောင်းအရင်းများ:**
- **ခွင့်ပြုသည်** route တစ်ခု load လုပ်သောအခါ custom logic ကို run လုပ်နိုင်ခြင်း
- **ပေးသည်** analytics, logging, သို့မဟုတ် initialization code အတွက် hooks
- **ဖန်တီးသည်** route behaviors ပိုမိုရှုပ်ထွေးသောအခြေခံအုတ်မြစ်
- **ပြသသည်** observer pattern ကို web development မှာ

**Implementation approach:**
- **Add** လုပ်ပါ route configurations တွင် optional callback function property
- **Execute** လုပ်ပါ callback function (ရှိပါက) template rendering ပြီးဆုံးပြီးနောက်
- **Ensure** လုပ်ပါ feature သည် callback သတ်မှတ်ထားသော route များအတွက် အလုပ်လုပ်သည်
- **Test** လုပ်ပါ console message သည် dashboard ကို သွားရောက်ကြည့်ရှုသောအခါ တွေ့ရကြောင်း

## အဆင့်သတ်မှတ်ချက်

| Criteria | အထူးကောင်းမွန်သော                                                                                                                          | လုံလောက်သော                                                                                                                                                                                  | တိုးတက်မှုလိုအပ်သော                                       |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|          | Feature နှစ်ခုလုံးကို အကောင်အထည်ဖော်ပြီး အလုပ်လုပ်သည်။ Title နှင့် code ထည့်သွင်းမှုသည် `routes` declaration တွင် route အသစ်တစ်ခုထည့်သွင်းသောအခါလည်း အလုပ်လုပ်သည်။ | Feature နှစ်ခုလုံး အလုပ်လုပ်သည်၊ သို့သော် behavior သည် hardcoded ဖြစ်ပြီး `routes` declaration မှတစ်ဆင့် configure လုပ်နိုင်မှုမရှိပါ။ Title နှင့် code ထည့်သွင်းမှုသည် route တစ်ခုထပ်မံထည့်သွင်းသောအခါ အလုပ်မလုပ်ပါ သို့မဟုတ် အစိတ်အပိုင်းအချို့သာ အလုပ်လုပ်သည်။ | Feature တစ်ခုမပါဝင်ခြင်း သို့မဟုတ် feature တစ်ခုသည် မှန်ကန်စွာ အလုပ်မလုပ်ခြင်း။ |

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မတိကျမှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းဘာသာစကားဖြင့် ရေးသားထားသော စာရွက်စာတမ်းကို အာဏာတရားရှိသော အရင်းအမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူ့ဘာသာပြန်ပညာရှင်များကို အသုံးပြုရန် အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအမှားများ သို့မဟုတ် အနားယူမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။