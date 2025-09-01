<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "537f02a36d73db093cbb8b9b44867645",
  "translation_date": "2025-09-01T15:46:02+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "ur"
}
-->
# کوڈ چلائیں

## ترتیب دیں

ورچوئل ماحول بنائیں

```sh
python -m venv venv
source ./venv/bin/activate
```

## انحصارات انسٹال کریں

```sh
pip install openai flask flask-cors 
```

## API چلائیں

```sh
python api.py
```

## فرنٹ اینڈ چلائیں

یقینی بنائیں کہ آپ فرنٹ اینڈ فولڈر میں موجود ہیں

*app.js* تلاش کریں، `BASE_URL` کو اپنے بیک اینڈ URL پر تبدیل کریں

اسے چلائیں

```
npx http-server -p 8000
```

چیٹ میں کوئی پیغام ٹائپ کرنے کی کوشش کریں، آپ کو ایک جواب نظر آنا چاہیے (بشرطیکہ آپ یہ Codespace میں چلا رہے ہوں یا ایکسیس ٹوکن ترتیب دیا ہو)۔

## ایکسیس ٹوکن ترتیب دیں (اگر آپ یہ Codespace میں نہیں چلا رہے)

[ذاتی ایکسیس ٹوکن ترتیب دیں](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) دیکھیں۔

---

**ڈسکلیمر**:  
یہ دستاویز AI ترجمہ سروس [Co-op Translator](https://github.com/Azure/co-op-translator) کا استعمال کرتے ہوئے ترجمہ کی گئی ہے۔ ہم درستگی کے لیے کوشش کرتے ہیں، لیکن براہ کرم آگاہ رہیں کہ خودکار ترجمے میں غلطیاں یا غیر درستیاں ہو سکتی ہیں۔ اصل دستاویز کو اس کی اصل زبان میں مستند ذریعہ سمجھا جانا چاہیے۔ اہم معلومات کے لیے، پیشہ ور انسانی ترجمہ کی سفارش کی جاتی ہے۔ ہم اس ترجمے کے استعمال سے پیدا ہونے والی کسی بھی غلط فہمی یا غلط تشریح کے ذمہ دار نہیں ہیں۔