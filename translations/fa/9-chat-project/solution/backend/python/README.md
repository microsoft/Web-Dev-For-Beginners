<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "537f02a36d73db093cbb8b9b44867645",
  "translation_date": "2025-09-01T15:45:55+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "fa"
}
-->
# اجرای کد

## آماده‌سازی

ایجاد محیط مجازی

```sh
python -m venv venv
source ./venv/bin/activate
```

## نصب وابستگی‌ها

```sh
pip install openai flask flask-cors 
```

## اجرای API

```sh
python api.py
```

## اجرای رابط کاربری (Frontend)

اطمینان حاصل کنید که در پوشه‌ی frontend قرار دارید.

فایل *app.js* را پیدا کنید و مقدار `BASE_URL` را به آدرس URL مربوط به backend خود تغییر دهید.

آن را اجرا کنید.

```
npx http-server -p 8000
```

سعی کنید یک پیام در چت تایپ کنید، باید پاسخی دریافت کنید (به شرطی که این کار را در یک Codespace اجرا می‌کنید یا یک توکن دسترسی تنظیم کرده‌اید).

## تنظیم توکن دسترسی (اگر این کار را در Codespace اجرا نمی‌کنید)

به [تنظیم PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) مراجعه کنید.

---

**سلب مسئولیت**:  
این سند با استفاده از سرویس ترجمه هوش مصنوعی [Co-op Translator](https://github.com/Azure/co-op-translator) ترجمه شده است. در حالی که ما تلاش می‌کنیم دقت را حفظ کنیم، لطفاً توجه داشته باشید که ترجمه‌های خودکار ممکن است شامل خطاها یا نادرستی‌ها باشند. سند اصلی به زبان اصلی آن باید به عنوان منبع معتبر در نظر گرفته شود. برای اطلاعات حساس، توصیه می‌شود از ترجمه حرفه‌ای انسانی استفاده کنید. ما مسئولیتی در قبال سوءتفاهم‌ها یا تفسیرهای نادرست ناشی از استفاده از این ترجمه نداریم.