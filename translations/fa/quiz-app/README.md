# اپلیکیشن آزمون

این آزمون‌ها، آزمون‌های قبل و بعد از جلسات آموزشی برای برنامه درسی علوم داده در https://aka.ms/webdev-beginners هستند.

## اضافه کردن مجموعه آزمون ترجمه‌شده

برای اضافه کردن ترجمه آزمون، ساختارهای آزمون مشابه را در پوشه‌های `assets/translations` ایجاد کنید. آزمون‌های اصلی در `assets/translations/en` قرار دارند. آزمون‌ها به چند گروه تقسیم شده‌اند. مطمئن شوید که شماره‌گذاری با بخش مناسب آزمون هماهنگ باشد. در این برنامه درسی، مجموعاً ۴۰ آزمون وجود دارد که شمارش از ۰ شروع می‌شود.

  
<details>
<summary>شکل یک فایل ترجمه به این صورت است:</summary>

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

بعد از ویرایش ترجمه‌ها، فایل index.js در پوشه ترجمه را ویرایش کنید تا تمام فایل‌ها را مطابق با قواعد موجود در `en` وارد کنید.

فایل `index.js` در `assets/translations` را ویرایش کنید تا فایل‌های ترجمه‌شده جدید را وارد کنید.

برای مثال، اگر JSON ترجمه شما در `ex.json` باشد، کلید محلی‌سازی را 'ex' قرار دهید و سپس به صورت زیر وارد کنید:

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

## اجرای اپلیکیشن آزمون به صورت محلی

### پیش‌نیازها

- یک حساب GitHub
- [Node.js و Git](https://nodejs.org/)

### نصب و راه‌اندازی

1. یک مخزن از این [قالب](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) ایجاد کنید.

1. مخزن جدید خود را کلون کنید و به پوشه quiz-app بروید.

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. بسته‌ها و وابستگی‌های npm را نصب کنید.

   ```bash
   npm install
   ```

### ساخت اپلیکیشن

1. برای ساختن راه‌حل، اجرا کنید:

   ```bash
   npm run build
   ```

### اجرای اپلیکیشن

1. برای اجرای راه‌حل، اجرا کنید:

    ```bash
    npm run dev
    ```

### [اختیاری] بررسی کد

1. برای اطمینان از بررسی کد، اجرا کنید:

    ```bash
    npm run lint
    ```

## استقرار اپلیکیشن آزمون در Azure 

### پیش‌نیازها
- یک اشتراک Azure. برای ثبت‌نام رایگان [اینجا](https://aka.ms/azure-free) کلیک کنید.

    _برآورد هزینه برای استقرار این اپلیکیشن آزمون: رایگان_

[![استقرار در Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

پس از ورود به Azure از طریق لینک بالا، یک اشتراک و گروه منابع انتخاب کنید سپس:

- جزئیات اپلیکیشن وب استاتیک: یک نام وارد کنید و یک طرح میزبانی انتخاب کنید.
- ورود به GitHub: منبع استقرار خود را GitHub تنظیم کنید سپس وارد شوید و فیلدهای مورد نیاز فرم را پر کنید:
    - *سازمان* – سازمان خود را انتخاب کنید.
    - *مخزن* – مخزن برنامه درسی Web Dev for Beginners را انتخاب کنید.
    - *شاخه* - یک شاخه انتخاب کنید (main)
- تنظیمات ساخت: اپلیکیشن‌های وب استاتیک Azure از یک الگوریتم تشخیص برای شناسایی فریم‌ورک استفاده‌شده در اپلیکیشن شما استفاده می‌کنند.
    - *محل اپلیکیشن* - ./quiz-app
    - *محل API* -
    - *محل خروجی* - dist
- استقرار: روی 'Review + Create' کلیک کنید، سپس 'Create' را بزنید.

    پس از استقرار، یک فایل workflow در دایرکتوری *.github* مخزن شما ایجاد خواهد شد. این فایل workflow شامل دستورالعمل‌هایی برای رویدادهایی است که باعث استقرار مجدد اپلیکیشن در Azure می‌شوند، برای مثال، _یک **push** در شاخه **main**_ و غیره.

    <details>
    <summary>نمونه فایل Workflow</summary>
    اینجا یک نمونه از فایل workflow GitHub Actions آورده شده است:
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

- پس از استقرار: پس از تکمیل استقرار، روی 'Go to Deployment' کلیک کنید سپس 'View app in browser' را بزنید.

پس از اجرای موفقیت‌آمیز GitHub Action (workflow)، صفحه زنده را تازه‌سازی کنید تا اپلیکیشن خود را مشاهده کنید.

**سلب مسئولیت**:  
این سند با استفاده از سرویس ترجمه هوش مصنوعی [Co-op Translator](https://github.com/Azure/co-op-translator) ترجمه شده است. در حالی که ما تلاش می‌کنیم دقت را حفظ کنیم، لطفاً توجه داشته باشید که ترجمه‌های خودکار ممکن است حاوی خطاها یا نادرستی‌هایی باشند. سند اصلی به زبان اصلی آن باید به عنوان منبع معتبر در نظر گرفته شود. برای اطلاعات حساس، ترجمه حرفه‌ای انسانی توصیه می‌شود. ما هیچ مسئولیتی در قبال سوءتفاهم‌ها یا تفسیرهای نادرست ناشی از استفاده از این ترجمه نداریم.