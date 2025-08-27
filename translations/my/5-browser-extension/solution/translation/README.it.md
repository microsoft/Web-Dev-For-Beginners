<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9a6b22a2eff0f499b66236be973b24ad",
  "translation_date": "2025-08-27T22:14:40+00:00",
  "source_file": "5-browser-extension/solution/translation/README.it.md",
  "language_code": "my"
}
-->
# Carbon Trigger Browser Extension: စတင်ရန်ကုဒ်

tmrow ရဲ့ Signal CO2 API ကို အသုံးပြုပြီး လျှပ်စစ်ဓာတ်အားအသုံးပြုမှုကို စောင့်ကြည့်ကာ သင့်ရဲ့ ဘရောက်ဇာတွင် တိုက်ရိုက် သတိပေးချက်ရနိုင်ရန် ဘရောက်ဇာအတွက် extension တစ်ခု ဖန်တီးပါမည်။ ဒီ extension ကို အသုံးပြုခြင်းအားဖြင့် သင့်ရဲ့ လုပ်ဆောင်မှုများကို အချက်အလက်များအပေါ် အခြေခံပြီး အကဲဖြတ်နိုင်ပါမည်။

![extension screenshot](../../../../../translated_images/extension-screenshot.0e7f5bfa110e92e3875e1bc9405edd45a3d2e02963e48900adb91926a62a5807.my.png)

## စတင်ရန်

[npm](https://npmjs.com) ကို install လုပ်ထားရန် လိုအပ်ပါသည်။ ဒီကုဒ်ကို သင့်ကွန်ပျူတာထဲရှိ ဖိုလ်ဒါတစ်ခုတွင် download လုပ်ပါ။

လိုအပ်သော packages အားလုံးကို install လုပ်ပါ:

```
npm install
```

webpack ကို အသုံးပြု၍ extension ကို ဖန်တီးပါ:

```
npm run build
```

Edge တွင် install လုပ်ရန်အတွက် ဘရောက်ဇာ၏ အပေါ်ယံညာဘက်ရှိ "သုံးချက်" menu ကို အသုံးပြု၍ Extensions panel ကို ရှာပါ။ Developer Mode ကို (ဘရောက်ဇာ၏ ဘေးဘက်အောက်ခြေတွင်) ဖွင့်ထားရန် လိုအပ်ပါသည်။ "Load unpacked" ကို ရွေးချယ်ပြီး extension အသစ်တစ်ခုကို load လုပ်ပါ။ Prompt တွင် "dist" ဖိုလ်ဒါကို ဖွင့်ပြီး extension ကို load လုပ်ပါမည်။ အသုံးပြုရန် CO2 Signal API အတွက် API key တစ်ခုလိုအပ်ပါမည် ([ဒီမှာ e-mail ဖြင့် ရယူနိုင်ပါသည်](https://www.co2signal.com/) - ဒီစာမျက်နှာတွင် သင့် e-mail ကို box ထဲတွင် ထည့်ပါ) နှင့် [electricity map](https://www.electricitymap.org/map) တွင် သင့်ဒေသနှင့် ကိုက်ညီသော [region code](http://api.electricitymap.org/v3/zones) (ဥပမာ Boston တွင် "US-NEISO")။

![installation](../../../../../translated_images/install-on-edge.78634f02842c48283726c531998679a6f03a45556b2ee99d8ff231fe41446324.my.png)

API key နှင့် region ကို extension interface တွင် ထည့်ပြီးနောက် ဘရောက်ဇာ၏ extension bar တွင်ရှိသော အရောင်အမှတ်အသားသည် ဒေသ၏ လျှပ်စစ်ဓာတ်အားအသုံးပြုမှုကို ပြသရန် ပြောင်းလဲသင့်ပါမည်။ ထို့အပြင် အမြင့်မားသော စွမ်းအင်အသုံးပြုမှု လုပ်ဆောင်မှုများကို မည်သို့လုပ်ဆောင်ရမည်ကို အညွှန်းပေးပါမည်။ ဒီ "အမှတ်" စနစ်၏ အခြေခံแนวคิดကို [Energy Lollipop extension](https://energylollipop.com/) မှ California emissions အတွက် ပံ့ပိုးပေးထားပါသည်။

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း၊ အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မတိကျမှုများ ပါရှိနိုင်သည်ကို သတိပြုပါ။ မူရင်းဘာသာစကားဖြင့် ရေးသားထားသော စာရွက်စာတမ်းကို အာဏာရှိသော ရင်းမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူ့ဘာသာပြန်ပညာရှင်များမှ ဘာသာပြန်မှုကို အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအလွတ်များ သို့မဟုတ် အနားယူမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။