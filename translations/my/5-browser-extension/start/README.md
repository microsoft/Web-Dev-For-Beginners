<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "26fd39046d264ba185dcb086d3a8cf3e",
  "translation_date": "2025-08-27T22:13:28+00:00",
  "source_file": "5-browser-extension/start/README.md",
  "language_code": "my"
}
-->
# Carbon Trigger Browser Extension: စတင်ရေးသားထားသော ကုဒ်

tmrow ရဲ့ C02 Signal API ကို အသုံးပြုပြီး လျှပ်စစ်ဓာတ်အားအသုံးပြုမှုကို စောင့်ကြည့်နိုင်ရန် browser extension တစ်ခု တည်ဆောက်ပါ။ ဒါကို သင့် browser မှာ တိုက်ရိုက် သတိပေးအဖြစ် အသုံးပြုနိုင်ပါတယ်။ ဒီ extension ကို အခါအားလျော်စွာ အသုံးပြုခြင်းက သင့်ရဲ့ လုပ်ဆောင်မှုတွေကို ဒီအချက်အလက်အပေါ် အခြေခံပြီး ဆုံးဖြတ်နိုင်ဖို့ အထောက်အကူဖြစ်စေပါလိမ့်မယ်။

![extension screenshot](../../../../translated_images/extension-screenshot.0e7f5bfa110e92e3875e1bc9405edd45a3d2e02963e48900adb91926a62a5807.my.png)

## စတင်အသုံးပြုခြင်း

သင့်မှာ [npm](https://npmjs.com) ကို install လုပ်ထားဖို့ လိုအပ်ပါမယ်။ ဒီကုဒ်ကို သင့်ကွန်ပျူတာမှာ ဖိုလ်ဒါတစ်ခုထဲကို ဒေါင်းလုဒ်လုပ်ပါ။

လိုအပ်တဲ့ packages တွေကို install လုပ်ပါ:

```
npm install
```

extension ကို webpack မှတစ်ဆင့် build လုပ်ပါ:

```
npm run build
```

Edge browser မှာ install လုပ်ဖို့အတွက် browser ရဲ့ အပေါ်ဘက်ညာထောင့်မှာရှိတဲ့ 'three dot' menu ကို အသုံးပြုပြီး Extensions panel ကို ရှာပါ။ 'Load Unpacked' ကို ရွေးချယ်ပြီး extension အသစ်တစ်ခုကို load လုပ်ပါ။ prompt မှာ 'dist' folder ကို ဖွင့်ပြီး extension ကို load လုပ်ပါ။ အသုံးပြုဖို့အတွက် CO2 Signal ရဲ့ API key ([ဒီမှာ email ဖြင့် ရယူပါ](https://www.co2signal.com/) - ဒီစာမျက်နှာမှာ သင့် email ကို box ထဲမှာ ထည့်ပါ) နဲ့ [Electricity Map](https://www.electricitymap.org/map) ရဲ့ သင့်ဒေသကို ကိုယ်စားပြုတဲ့ [region code](http://api.electricitymap.org/v3/zones) ကို ထည့်သွင်းဖို့ လိုအပ်ပါမယ်။ ဥပမာအားဖြင့် Boston မှာ 'US-NEISO' ကို အသုံးပြုပါတယ်။

![installing](../../../../translated_images/install-on-edge.78634f02842c48283726c531998679a6f03a45556b2ee99d8ff231fe41446324.my.png)

API key နဲ့ region ကို extension interface မှာ input လုပ်ပြီးရင် browser extension bar ရဲ့ အရောင် dot က သင့်ဒေသရဲ့ လျှပ်စစ်ဓာတ်အားအသုံးပြုမှုကို ပြောင်းလဲပြသပေးပါလိမ့်မယ်။ ဒါက သင့်အတွက် လျှပ်စစ်ဓာတ်အားများစွာ အသုံးပြုရမယ့် လုပ်ဆောင်မှုတွေကို ဘယ်လိုလုပ်ဆောင်ရမလဲဆိုတာ အညွှန်းပေးပါလိမ့်မယ်။ ဒီ 'dot' စနစ်ရဲ့ အကြံဉာဏ်ကို [Energy Lollipop extension](https://energylollipop.com/) က California emissions အတွက် ပေးခဲ့တာဖြစ်ပါတယ်။

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း၊ အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မမှန်ကန်မှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းဘာသာစကားဖြင့် ရေးသားထားသော စာရွက်စာတမ်းကို အာဏာရှိသော ရင်းမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူ့ဘာသာပြန်ပညာရှင်များမှ ပရော်ဖက်ရှင်နယ် ဘာသာပြန်မှုကို အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအလွတ်များ သို့မဟုတ် အနားလွဲမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။