# تطبيق الاختبارات

هذه الاختبارات هي اختبارات ما قبل وبعد المحاضرات لمنهج علوم البيانات على الرابط https://aka.ms/webdev-beginners

## إضافة مجموعة اختبارات مترجمة

قم بإضافة ترجمة للاختبارات عن طريق إنشاء هياكل اختبارات مطابقة في مجلد `assets/translations`. الاختبارات الأصلية موجودة في `assets/translations/en`. يتم تقسيم الاختبارات إلى عدة مجموعات. تأكد من مطابقة الترقيم مع القسم الصحيح للاختبار. هناك 40 اختبارًا إجمالاً في هذا المنهج، ويبدأ العد من 0.

  
<details>
<summary>هذا هو شكل ملف الترجمة:</summary>

```
[
    {
        "title": "A title",
        "complete": "A complete button title",
        "error": "An error message upon selecting the wrong answer",
        "quizzes": [
            {
                "id": 1,
                "title": "Title",
                "quiz": [
                    {
                        "questionText": "The question asked",
                        "answerOptions": [
                            {
                                "answerText": "Option 1 title",
                                "isCorrect": true
                            },
                            {
                                "answerText": "Option 2 title",
                                "isCorrect": false
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
```
</details>

بعد تعديل الترجمات، قم بتعديل ملف index.js في مجلد الترجمة لاستيراد جميع الملفات وفقًا للمعايير الموجودة في `en`.

قم بتعديل ملف `index.js` في `assets/translations` لاستيراد الملفات المترجمة الجديدة.

على سبيل المثال، إذا كانت ترجمة JSON الخاصة بك في `ex.json`، اجعل 'ex' مفتاح التوطين، ثم أدخله كما هو موضح أدناه لاستيراده.

<details>
<summary>index.js</summary>

```
import ex from "./ex.json";

// if 'ex' is localization key then enter it like so in `messages` to expose it 

const messages = {
  ex: ex[0],
};

export default messages;
```

</details>

## تشغيل تطبيق الاختبارات محليًا

### المتطلبات الأساسية

- حساب GitHub
- [Node.js و Git](https://nodejs.org/)

### التثبيت والإعداد

1. قم بإنشاء مستودع من هذا [القالب](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) 

1. قم باستنساخ المستودع الجديد الخاص بك، وانتقل إلى تطبيق الاختبارات

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. قم بتثبيت حزم npm والاعتماديات

   ```bash
   npm install
   ```

### بناء التطبيق

1. لبناء الحل، قم بتشغيل:

   ```bash
   npm run build
   ```

### تشغيل التطبيق

1. لتشغيل الحل، قم بتشغيل:

    ```bash
    npm run dev
    ```

### [اختياري] التحقق من الكود

1. للتأكد من أن الكود تم التحقق منه، قم بتشغيل:

    ```bash
    npm run lint
    ```

## نشر تطبيق الاختبارات على Azure 

### المتطلبات الأساسية
- اشتراك Azure. قم بالتسجيل للحصول على اشتراك مجاني [هنا](https://aka.ms/azure-free).

    _التكلفة التقديرية لنشر هذا التطبيق: مجاني_

[![نشر على Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

بمجرد تسجيل الدخول إلى Azure عبر الرابط أعلاه، اختر اشتراكًا ومجموعة موارد ثم:

- تفاصيل تطبيق الويب الثابت: قم بتوفير اسم واختر خطة استضافة
- تسجيل الدخول إلى GitHub: قم بتعيين مصدر النشر الخاص بك كـ GitHub ثم قم بتسجيل الدخول واملأ الحقول المطلوبة في النموذج:
    - *المنظمة* – اختر منظمتك.
    - *المستودع* – اختر مستودع منهج Web Dev for Beginners. 
    - *الفرع* - اختر فرعًا (main) 
- إعدادات البناء: تستخدم Azure Static Web Apps خوارزمية للكشف عن الإطار المستخدم في تطبيقك. 
    - *موقع التطبيق* - ./quiz-app
    - *موقع الـ API* -
    - *موقع الإخراج* - dist
- النشر: انقر على 'Review + Create' ثم 'Create'

    بمجرد النشر، سيتم إنشاء ملف سير العمل في دليل *.github* الخاص بمستودعك. يحتوي ملف سير العمل هذا على تعليمات حول الأحداث التي ستؤدي إلى إعادة نشر التطبيق على Azure، على سبيل المثال، _عملية **push** على الفرع **main**_ إلخ.

    <details>
    <summary>مثال على ملف سير العمل</summary>
    هذا مثال على ما قد يبدو عليه ملف سير العمل الخاص بـ GitHub Actions:
    name: Azure Static Web Apps CI/CD

    ```
    on:
    push:
        branches:
        - main
    pull_request:
        types: [opened, synchronize, reopened, closed]
        branches:
        - main

    jobs:
    build_and_deploy_job:
        runs-on: ubuntu-latest
        name: Build and Deploy Job
        steps:
        - uses: actions/checkout@v2
        - name: Build And Deploy
            id: builddeploy
            uses: Azure/static-web-apps-deploy@v1
            with:
            azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
            repo_token: ${{ secrets.GITHUB_TOKEN }}
            action: "upload"
            app_location: "quiz-app" # App source code path
            api_location: ""API source code path optional
            output_location: "dist" #Built app content directory - optional
    ```

    </details>

- ما بعد النشر: بعد اكتمال النشر، انقر على 'Go to Deployment' ثم 'View app in browser'.

بمجرد تنفيذ إجراء GitHub (سير العمل) بنجاح، قم بتحديث الصفحة المباشرة لعرض تطبيقك.

**إخلاء المسؤولية**:  
تم ترجمة هذا المستند باستخدام خدمة الترجمة بالذكاء الاصطناعي [Co-op Translator](https://github.com/Azure/co-op-translator). بينما نسعى لتحقيق الدقة، يرجى العلم أن الترجمات الآلية قد تحتوي على أخطاء أو معلومات غير دقيقة. يجب اعتبار المستند الأصلي بلغته الأصلية المصدر الموثوق. للحصول على معلومات حاسمة، يُوصى بالاستعانة بترجمة بشرية احترافية. نحن غير مسؤولين عن أي سوء فهم أو تفسيرات خاطئة تنشأ عن استخدام هذه الترجمة.