<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cbaf73f94a9ab4c680a10ef871e92948",
  "translation_date": "2025-08-27T22:15:26+00:00",
  "source_file": "5-browser-extension/solution/translation/README.es.md",
  "language_code": "my"
}
-->
# Carbon Trigger Browser Extension: အပြည့်အစုံသောကုဒ်

tmrow ရဲ့ C02 Signal API ကို အသုံးပြုပြီး လျှပ်စစ်ဓာတ်အားအသုံးပြုမှုကို ခြေရာခံနိုင်တဲ့ browser extension တစ်ခုကို ဖန်တီးပါ။ ဒီ extension ကို သင့် browser မှတစ်ဆင့် တိုက်ရိုက်အသုံးပြုနိုင်မယ့် reminder အနေနဲ့ ရရှိမှာဖြစ်ပါတယ်။ ဒီ extension ကို အသုံးပြုခြင်းက သင့်ရဲ့ လုပ်ဆောင်မှုများအပေါ် အချက်အလက်အခြေခံပြီး ဆုံးဖြတ်ချက်များကို ချမှတ်နိုင်စေမှာဖြစ်ပါတယ်။

![extension screenshot](../../../../../translated_images/extension-screenshot.352c4c3ba54e4041ad2f6af749d562cc5705f527b5826efd53d11c3528f5ae45.my.png)

## စတင်ခြင်း

[npm](https://npmjs.com) ကို install လုပ်ထားဖို့ လိုအပ်ပါတယ်။ ဒီကုဒ်ကို သင့်ကွန်ပျူတာထဲမှာ ဖိုလ်ဒါတစ်ခုကို download လုပ်ပါ။

လိုအပ်တဲ့ packages အားလုံးကို install လုပ်ပါ:

```
npm install
```

Webpack ကို အသုံးပြုပြီး extension ကို build လုပ်ပါ:

```
npm run build
```

Edge မှာ install လုပ်ဖို့အတွက် browser ရဲ့ အပေါ်ဘက်ညာထောင့်မှာရှိတဲ့ 'သုံးချက်' menu ကို အသုံးပြုပြီး Extensions panel ကို ရှာပါ။ အဲဒီနေရာက 'Load unpacked' ကို ရွေးချယ်ပြီး extension အသစ်တစ်ခုကို load လုပ်ပါ။ ဖိုလ်ဒါ 'dist' ကို ဖွင့်ပြီး extension ကို load လုပ်ပါ။ အသုံးပြုဖို့အတွက် CO2 Signal API အတွက် API key ([ဒီမှာ email ဖြင့် ရယူပါ](https://www.co2signal.com/) - ဒီစာမျက်နှာမှာ email ကို ထည့်ပါ) နဲ့ [Electricity Map](https://www.electricitymap.org/map) ရဲ့ [region code](http://api.electricitymap.org/v3/zones) ကို ရယူဖို့ လိုအပ်ပါတယ်။ ဥပမာ Boston မှာ 'US-NEISO' ကို အသုံးပြုပါတယ်။

![installing](../../../../../translated_images/install-on-edge.8bd0ee3ca7dcda1c5334b5195603a43c864e3b38d088b03d57376d25e77b9459.my.png)

API key နဲ့ region ကို extension interface မှာ ထည့်ပြီးနောက် browser extension bar ရဲ့ အရောင်အမှတ်တစ်ခုက သင့် region ရဲ့ လျှပ်စစ်ဓာတ်အားအသုံးပြုမှုကို ပြသပြီး သင့်အတွက် အမြင့်မားတဲ့ လျှပ်စစ်ဓာတ်အားအသုံးပြုမှု လုပ်ဆောင်မှုများအတွက် သင့်တော်မှုကို အညွှန်းပေးပါလိမ့်မယ်။ ဒီ "အမှတ်" စနစ်ရဲ့ အကြံအတင်ကို [Energy Lollipop extension](https://energylollipop.com/) မှ California emissions အတွက် ရရှိခဲ့ပါတယ်။

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း၊ အလိုအလျောက် ဘာသာပြန်ခြင်းတွင် အမှားများ သို့မဟုတ် မမှန်ကန်မှုများ ပါရှိနိုင်သည်ကို သတိပြုပါ။ မူရင်းစာရွက်စာတမ်းကို ၎င်း၏ မူရင်းဘာသာစကားဖြင့် အာဏာတရားရှိသော အရင်းအမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူ့ဘာသာပြန်ပညာရှင်များမှ ပရော်ဖက်ရှင်နယ် ဘာသာပြန်ခြင်းကို အကြံပြုပါသည်။ ဤဘာသာပြန်ကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအလွတ်များ သို့မဟုတ် အနားလွဲမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။