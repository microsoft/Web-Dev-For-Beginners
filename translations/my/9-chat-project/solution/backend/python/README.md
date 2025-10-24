<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "0aaa930f076f2d83cc872ad157f8ffd3",
  "translation_date": "2025-10-24T16:31:48+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "my"
}
-->
# ကုဒ်ကို အလုပ်လုပ်စေပါ

## အဆင့်ဆင့် ပြင်ဆင်ခြင်း

Virtual environment တစ်ခု ဖန်တီးပါ

```sh
python -m venv venv
source ./venv/bin/activate
```

## လိုအပ်သော dependencies များ ထည့်သွင်းပါ

```sh
pip install openai fastapi uvicorn python-dotenv
```

## API ကို အလုပ်လုပ်စေပါ

```sh
# Method 1: Direct execution
python api.py

# Method 2: Using uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## API ကို စမ်းသပ်ပါ

Interactive API documentation ကို `http://localhost:5000/docs` တွင် သွားရောက်ကြည့်ရှုပါ

## Frontend ကို အလုပ်လုပ်စေပါ

Frontend folder အတွင်း ရှိနေကြောင်း သေချာပါစေ

*app.js* ကို ရှာဖွေပြီး `BASE_URL` ကို backend URL သို့ ပြောင်းပါ

Run လုပ်ပါ

```
npx http-server -p 8000
```

Chat box တွင် စာသားတစ်ခု ရိုက်ထည့်ကြည့်ပါ၊ Codespace တွင် အလုပ်လုပ်နေသည်ဖြစ်စေ၊ access token ကို ပြင်ဆင်ထားသည်ဖြစ်စေ၊ တုံ့ပြန်မှုကို မြင်ရပါမည်။

## Access token ကို ပြင်ဆင်ပါ (Codespace တွင် မလုပ်ဆောင်ပါက)

[Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) ကို ကြည့်ပါ

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း အလိုအလျောက် ဘာသာပြန်ခြင်းတွင် အမှားများ သို့မဟုတ် မမှန်ကန်မှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းဘာသာစကားဖြင့် ရေးသားထားသော စာရွက်စာတမ်းကို အာဏာတရားရှိသော အရင်းအမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူ့ဘာသာပြန်ပညာရှင်များကို အသုံးပြုရန် အကြံပြုပါသည်။ ဤဘာသာပြန်ကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအမှားများ သို့မဟုတ် အနားယူမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။