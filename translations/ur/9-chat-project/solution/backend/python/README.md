# کوڈ چلائیں

## ترتیب دیں

ورچوئل ماحول بنائیں

```sh
python -m venv venv
source ./venv/bin/activate
```

## ضروریات انسٹال کریں

```sh
pip install openai fastapi uvicorn python-dotenv
```

## API چلائیں

```sh
# Method 1: Direct execution
python api.py

# Method 2: Using uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## API ٹیسٹ کریں

انٹرایکٹو API دستاویزات پر جائیں: `http://localhost:5000/docs`

## فرنٹ اینڈ چلائیں

یقینی بنائیں کہ آپ فرنٹ اینڈ فولڈر میں موجود ہیں

*app.js* تلاش کریں، `BASE_URL` کو اپنے بیک اینڈ URL میں تبدیل کریں

اسے چلائیں

```
npx http-server -p 8000
```

چیٹ میں ایک پیغام لکھنے کی کوشش کریں، آپ کو جواب نظر آنا چاہیے (اگر آپ اسے Codespace میں چلا رہے ہیں یا ایک ایکسیس ٹوکن ترتیب دیا ہے)۔

## ایکسیس ٹوکن ترتیب دیں (اگر آپ اسے Codespace میں نہیں چلا رہے ہیں)

[ذاتی ایکسیس ٹوکن ترتیب دیں](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) دیکھیں

---

**ڈسکلیمر**:  
یہ دستاویز AI ترجمہ سروس [Co-op Translator](https://github.com/Azure/co-op-translator) کا استعمال کرتے ہوئے ترجمہ کی گئی ہے۔ ہم درستگی کے لیے کوشش کرتے ہیں، لیکن براہ کرم آگاہ رہیں کہ خودکار ترجمے میں غلطیاں یا غیر درستیاں ہو سکتی ہیں۔ اصل دستاویز کو اس کی اصل زبان میں مستند ذریعہ سمجھا جانا چاہیے۔ اہم معلومات کے لیے، پیشہ ور انسانی ترجمہ کی سفارش کی جاتی ہے۔ ہم اس ترجمے کے استعمال سے پیدا ہونے والی کسی بھی غلط فہمی یا غلط تشریح کے ذمہ دار نہیں ہیں۔