<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "537f02a36d73db093cbb8b9b44867645",
  "translation_date": "2025-09-01T15:45:49+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "ar"
}
-->
# تشغيل الكود

## الإعداد

إنشاء بيئة افتراضية

```sh
python -m venv venv
source ./venv/bin/activate
```

## تثبيت التبعيات

```sh
pip install openai flask flask-cors 
```

## تشغيل واجهة برمجة التطبيقات (API)

```sh
python api.py
```

## تشغيل الواجهة الأمامية

تأكد من أنك في مجلد الواجهة الأمامية

ابحث عن *app.js*، وقم بتغيير `BASE_URL` إلى عنوان URL الخاص بالخادم الخلفي لديك

قم بتشغيله

```
npx http-server -p 8000
```

حاول كتابة رسالة في الدردشة، يجب أن ترى استجابة (بشرط أن تكون تعمل في Codespace أو قد قمت بإعداد رمز الوصول).

## إعداد رمز الوصول (إذا لم تكن تعمل في Codespace)

راجع [إعداد PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**إخلاء المسؤولية**:  
تم ترجمة هذه الوثيقة باستخدام خدمة الترجمة بالذكاء الاصطناعي [Co-op Translator](https://github.com/Azure/co-op-translator). بينما نسعى لتحقيق الدقة، يرجى العلم أن الترجمات الآلية قد تحتوي على أخطاء أو معلومات غير دقيقة. يجب اعتبار الوثيقة الأصلية بلغتها الأصلية المصدر الموثوق. للحصول على معلومات حاسمة، يُوصى بالاستعانة بترجمة بشرية احترافية. نحن غير مسؤولين عن أي سوء فهم أو تفسيرات خاطئة تنشأ عن استخدام هذه الترجمة.