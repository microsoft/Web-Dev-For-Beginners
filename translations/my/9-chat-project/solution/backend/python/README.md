<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "537f02a36d73db093cbb8b9b44867645",
  "translation_date": "2025-09-01T15:50:13+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "my"
}
-->
# ကုဒ်ကို အလုပ်လုပ်စေပါ

## စတင်ပြင်ဆင်ခြင်း

အခြေခံပတ်ဝန်းကျင်ကို ဖန်တီးပါ

```sh
python -m venv venv
source ./venv/bin/activate
```

## လိုအပ်သော Dependencies များကို ထည့်သွင်းပါ

```sh
pip install openai flask flask-cors 
```

## API ကို အလုပ်လုပ်စေပါ

```sh
python api.py
```

## Frontend ကို အလုပ်လုပ်စေပါ

Frontend ဖိုလ်ဒါအတွင်း ရှိနေကြောင်း သေချာပါစေ

*app.js* ကို ရှာဖွေပြီး `BASE_URL` ကို backend URL သို့ ပြောင်းပါ

အလုပ်လုပ်စေပါ

```
npx http-server -p 8000
```

Chat မှာ စာသားတစ်ခု ရိုက်ထည့်ကြည့်ပါ၊ Codespace မှာ အလုပ်လုပ်နေသည်ဟု သေချာပါက သို့မဟုတ် access token ကို ပြင်ဆင်ပြီးသားဖြစ်ပါက တုံ့ပြန်မှုကို မြင်ရပါမည်။

## Access token ကို ပြင်ဆင်ပါ (Codespace မှာ မလုပ်ဆောင်ပါက)

[Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) ကို ကြည့်ပါ

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း၊ အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မတိကျမှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းစာရွက်စာတမ်းကို ၎င်း၏ မူလဘာသာစကားဖြင့် အာဏာတရားရှိသော အရင်းအမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူက ဘာသာပြန်မှု ဝန်ဆောင်မှုကို အသုံးပြုရန် အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအလွတ်များ သို့မဟုတ် အနားလွဲမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။