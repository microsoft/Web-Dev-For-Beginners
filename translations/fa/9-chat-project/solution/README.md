<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7b7f54b13f9e6683a844d173ffdd766",
  "translation_date": "2025-08-29T17:07:57+00:00",
  "source_file": "9-chat-project/solution/README.md",
  "language_code": "fa"
}
-->
# اجرای کد

## تنظیمات

ایجاد محیط مجازی

```sh
cd backend
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

## اجرای رابط کاربری

اطمینان حاصل کنید که در پوشه رابط کاربری قرار دارید

فایل *app.js* را پیدا کنید، مقدار `BASE_URL` را به آدرس URL بک‌اند خود تغییر دهید

آن را اجرا کنید

```
npx http-server -p 8000
```

سعی کنید یک پیام در چت تایپ کنید، باید پاسخی دریافت کنید (به شرطی که این را در Codespace اجرا کنید یا یک توکن دسترسی تنظیم کرده باشید).

## تنظیم توکن دسترسی (اگر این را در Codespace اجرا نمی‌کنید)

به [تنظیم PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) مراجعه کنید

---

**سلب مسئولیت**:  
این سند با استفاده از سرویس ترجمه هوش مصنوعی [Co-op Translator](https://github.com/Azure/co-op-translator) ترجمه شده است. در حالی که ما برای دقت تلاش می‌کنیم، لطفاً توجه داشته باشید که ترجمه‌های خودکار ممکن است شامل خطاها یا نادقتی‌ها باشند. سند اصلی به زبان اصلی آن باید به عنوان منبع معتبر در نظر گرفته شود. برای اطلاعات حساس، ترجمه حرفه‌ای انسانی توصیه می‌شود. ما هیچ مسئولیتی در قبال سوءتفاهم‌ها یا تفسیرهای نادرست ناشی از استفاده از این ترجمه نداریم.