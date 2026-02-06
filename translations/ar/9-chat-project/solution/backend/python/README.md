# تشغيل الكود

## الإعداد

إنشاء بيئة افتراضية

```sh
python -m venv venv
source ./venv/bin/activate
```

## تثبيت التبعيات

```sh
pip install openai fastapi uvicorn python-dotenv
```

## تشغيل واجهة برمجة التطبيقات (API)

```sh
# Method 1: Direct execution
python api.py

# Method 2: Using uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## اختبار واجهة برمجة التطبيقات (API)

قم بزيارة وثائق واجهة برمجة التطبيقات التفاعلية على: `http://localhost:5000/docs`

## تشغيل الواجهة الأمامية

تأكد من أنك في مجلد الواجهة الأمامية

حدد موقع *app.js*، وقم بتغيير `BASE_URL` إلى عنوان URL الخاص بالخلفية لديك

قم بتشغيله

```
npx http-server -p 8000
```

حاول كتابة رسالة في الدردشة، يجب أن ترى استجابة (بشرط أن تكون تعمل في Codespace أو قد قمت بإعداد رمز وصول).

## إعداد رمز الوصول (إذا لم تكن تعمل في Codespace)

راجع [إعداد PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**إخلاء المسؤولية**:  
تم ترجمة هذا المستند باستخدام خدمة الترجمة بالذكاء الاصطناعي [Co-op Translator](https://github.com/Azure/co-op-translator). بينما نسعى لتحقيق الدقة، يرجى العلم أن الترجمات الآلية قد تحتوي على أخطاء أو عدم دقة. يجب اعتبار المستند الأصلي بلغته الأصلية المصدر الرسمي. للحصول على معلومات حاسمة، يُوصى بالترجمة البشرية الاحترافية. نحن غير مسؤولين عن أي سوء فهم أو تفسير خاطئ ينشأ عن استخدام هذه الترجمة.