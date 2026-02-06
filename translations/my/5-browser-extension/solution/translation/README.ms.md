# Carbon Trigger Browser Extension: အပြည့်အစုံသော ကုဒ်

CO2 Signal API ကို အသုံးပြု၍ လျှပ်စစ်ဓာတ်အား အသုံးပြုမှုကို စစ်ဆေးပြီး၊ သင့်ဒေသ၏ လျှပ်စစ်ဓာတ်အား အသုံးပြုမှု အခြေအနေကို သတိပေးချက်အဖြစ် သင့် browser မှာ ရရှိနိုင်အောင် browser extension တစ်ခုကို တည်ဆောက်ပါ။ ဒီ extension ကို အသုံးပြုခြင်းက သင့်လုပ်ဆောင်မှုများကို ဒီအချက်အလက်အပေါ် အခြေခံပြီး စဉ်းစားနိုင်ရန် အထောက်အကူဖြစ်စေပါမည်။

![browser extension screenshot](../../../../../translated_images/my/extension-screenshot.0e7f5bfa110e92e3.webp)

## စတင်ရန်

သင့်မှာ [npm](https://npmjs.com) ကို install လုပ်ထားဖို့ လိုအပ်ပါတယ်။ ဒီကုဒ်ကို သင့်ကွန်ပျူတာထဲမှာ folder တစ်ခုကို download လုပ်ပါ။

လိုအပ်သော packages အားလုံးကို install လုပ်ပါ။

```
npm install
```

Webpack ကို အသုံးပြု၍ extension ကို build လုပ်ပါ။

```
npm run build
```

Edge မှာ install လုပ်ရန်အတွက် browser ရဲ့ ညာဘက်အပေါ်ထောင့်မှာရှိတဲ့ 'သုံးခုတိုင်' menu ကို အသုံးပြု၍ Extensions panel ကို ရှာပါ။ 'Load Unpacked' ကို ရွေးပြီး extension အသစ်ကို load လုပ်ပါ။ 'dist' folder ကို ဖွင့်ပြီး extension ကို load လုပ်ပါ။ အသုံးပြုရန်အတွက် CO2 Signal API အတွက် API key ([ဒီမှာ email ဖြင့် ရယူပါ](https://www.co2signal.com/) - ဒီ page ရဲ့ box ထဲမှာ သင့် email ကို ထည့်ပါ) နှင့် [သင့်ဒေသအတွက် code](http://api.electricitymap.org/v3/zones) ကို [Electricity Map](https://www.electricitymap.org/map) မှာ ရှာပါ။ (ဥပမာ Boston မှာ 'US-NEISO' ကို အသုံးပြုပါ။)

![installing](../../../../../translated_images/my/install-on-edge.78634f02842c4828.webp)

API key နှင့် region code ကို extension interface မှာ ထည့်ပြီးနောက် browser extension bar ရဲ့ အရောင် dot က သင့်ဒေသရဲ့ လျှပ်စစ်ဓာတ်အား အသုံးပြုမှုကို ပြသပြီး သင့်လုပ်ဆောင်မှုများအတွက် အကြံပေးချက်များကို ပေးပါမည်။ ဒီ 'dot' စနစ်ရဲ့ အကြောင်းအရင်းကို [Energy Lollipop browser extension](https://energylollipop.com/) မှ California အတွက် concept အဖြစ် ရရှိခဲ့ပါသည်။

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း၊ အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မတိကျမှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းဘာသာစကားဖြင့် ရေးသားထားသော စာရွက်စာတမ်းကို အာဏာတရ အရင်းအမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူက ဘာသာပြန်မှု ဝန်ဆောင်မှုကို အသုံးပြုရန် အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအလွတ်များ သို့မဟုတ် အနားယူမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။