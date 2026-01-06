<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "0aaa930f076f2d83cc872ad157f8ffd3",
  "translation_date": "2026-01-06T10:56:54+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "fa"
}
-->
# اجرای کد

## راه‌اندازی

ساخت محیط مجازی

```sh
python -m venv venv
source ./venv/bin/activate
```

## نصب وابستگی‌ها

```sh
pip install openai fastapi uvicorn python-dotenv
```

## اجرای API

```sh
# روش ۱: اجرای مستقیم
python api.py

# روش ۲: استفاده از uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## تست API

برای مشاهده مستندات تعاملی API به آدرس زیر مراجعه کنید: `http://localhost:5000/docs`

## اجرای فرانت‌اند

مطمئن شوید که در پوشه فرانت‌اند قرار دارید

فایل *app.js* را پیدا کنید، مقدار `BASE_URL` را به آدرس URL بک‌اند خود تغییر دهید

آن را اجرا کنید

```
npx http-server -p 8000
```

سعی کنید در چت یک پیام تایپ کنید، باید پاسخ دریافت کنید (به شرطی که در یک کد اسپیس این را اجرا کنید یا یک توکن دسترسی تنظیم کرده باشید).

## راه‌اندازی توکن دسترسی (اگر این را در یک کد اسپیس اجرا نمی‌کنید)

به [راه‌اندازی PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) مراجعه کنید

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**سلب مسئولیت**:
این سند با استفاده از سرویس ترجمه هوش مصنوعی [Co-op Translator](https://github.com/Azure/co-op-translator) ترجمه شده است. در حالی که ما در تلاش برای دقت هستیم، لطفاً توجه داشته باشید که ترجمه‌های خودکار ممکن است شامل اشتباهات یا نادرستی‌هایی باشند. سند اصلی به زبان بومی خود باید به عنوان منبع معتبر در نظر گرفته شود. برای اطلاعات حساس، توصیه می‌شود از ترجمه حرفه‌ای انسانی استفاده شود. ما مسئول هیچ‌گونه سو تفاهم یا برداشت نادرست ناشی از استفاده از این ترجمه نیستیم.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->