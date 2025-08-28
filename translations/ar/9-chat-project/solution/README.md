<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7b7f54b13f9e6683a844d173ffdd766",
  "translation_date": "2025-08-28T15:57:13+00:00",
  "source_file": "9-chat-project/solution/README.md",
  "language_code": "ar"
}
-->
# تشغيل الكود

## الإعداد

إنشاء بيئة افتراضية

```sh
cd backend
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

ابحث عن *app.js*، وقم بتغيير `BASE_URL` إلى عنوان URL الخاص بواجهة برمجة التطبيقات الخلفية لديك

قم بتشغيله

```
npx http-server -p 8000
```

حاول كتابة رسالة في الدردشة، يجب أن ترى استجابة (بشرط أنك تقوم بتشغيل هذا في Codespace أو قمت بإعداد رمز وصول).

## إعداد رمز الوصول (إذا لم تقم بتشغيل هذا في Codespace)

راجع [إعداد PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**إخلاء المسؤولية**:  
تم ترجمة هذا المستند باستخدام خدمة الترجمة بالذكاء الاصطناعي [Co-op Translator](https://github.com/Azure/co-op-translator). بينما نسعى لتحقيق الدقة، يرجى العلم أن الترجمات الآلية قد تحتوي على أخطاء أو معلومات غير دقيقة. يجب اعتبار المستند الأصلي بلغته الأصلية المصدر الموثوق. للحصول على معلومات حاسمة، يُوصى بالاستعانة بترجمة بشرية احترافية. نحن غير مسؤولين عن أي سوء فهم أو تفسيرات خاطئة تنشأ عن استخدام هذه الترجمة.