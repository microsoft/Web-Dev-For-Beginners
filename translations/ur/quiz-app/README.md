# کوئز ایپ

یہ کوئزز ڈیٹا سائنس کے نصاب کے لیے لیکچر سے پہلے اور بعد کے کوئزز ہیں، جو یہاں دستیاب ہیں: https://aka.ms/webdev-beginners

## ترجمہ شدہ کوئز سیٹ شامل کرنا

کوئز کا ترجمہ شامل کرنے کے لیے، `assets/translations` فولڈرز میں مماثل کوئز ڈھانچے بنائیں۔ اصل کوئزز `assets/translations/en` میں موجود ہیں۔ کوئزز کو کئی گروپوں میں تقسیم کیا گیا ہے۔ یقینی بنائیں کہ نمبرنگ کو صحیح کوئز سیکشن کے ساتھ ہم آہنگ کریں۔ اس نصاب میں کل 40 کوئزز ہیں، اور گنتی 0 سے شروع ہوتی ہے۔

  
<details>
<summary>ترجمہ فائل کی ساخت یہاں ہے:</summary>

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

ترجمہ میں ترمیم کرنے کے بعد، ترجمہ فولڈر میں `index.js` فائل کو ایڈٹ کریں تاکہ تمام فائلز کو `en` میں موجود کنونشنز کے مطابق امپورٹ کریں۔

`assets/translations` میں موجود `index.js` فائل کو ایڈٹ کریں تاکہ نئی ترجمہ شدہ فائلز کو امپورٹ کریں۔

مثال کے طور پر، اگر آپ کا ترجمہ JSON `ex.json` میں ہے، تو 'ex' کو لوکلائزیشن کی کلید بنائیں، پھر اسے نیچے دیے گئے طریقے سے امپورٹ کریں:

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

## کوئز ایپ کو مقامی طور پر چلائیں

### ضروریات

- ایک GitHub اکاؤنٹ
- [Node.js اور Git](https://nodejs.org/)

### انسٹال اور سیٹ اپ

1. اس [ٹیمپلیٹ](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) سے ایک ریپوزٹری بنائیں۔

1. اپنی نئی ریپوزٹری کو کلون کریں، اور کوئز ایپ پر جائیں:

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. npm پیکجز اور ڈیپینڈنسیز انسٹال کریں:

   ```bash
   npm install
   ```

### ایپ بنائیں

1. حل کو بنانے کے لیے، یہ کمانڈ چلائیں:

   ```bash
   npm run build
   ```

### ایپ شروع کریں

1. حل کو چلانے کے لیے، یہ کمانڈ چلائیں:

    ```bash
    npm run dev
    ```

### [اختیاری] کوڈ کی جانچ

1. کوڈ کو جانچنے کے لیے، یہ کمانڈ چلائیں:

    ```bash
    npm run lint
    ```

## کوئز ایپ کو Azure پر ڈیپلائے کریں

### ضروریات
- ایک Azure سبسکرپشن۔ مفت سبسکرپشن کے لیے [یہاں](https://aka.ms/azure-free) سائن اپ کریں۔

    _اس کوئز ایپ کو ڈیپلائے کرنے کی تخمینی لاگت: مفت_

[![Azure پر ڈیپلائے کریں](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

Azure پر اوپر دیے گئے لنک کے ذریعے سائن ان کرنے کے بعد، ایک سبسکرپشن اور ریسورس گروپ منتخب کریں، پھر:

- Static Web App کی تفصیلات: ایک نام فراہم کریں اور ہوسٹنگ پلان منتخب کریں۔
- GitHub لاگ ان: اپنی ڈیپلائے سورس کو GitHub پر سیٹ کریں، پھر لاگ ان کریں اور فارم میں مطلوبہ فیلڈز کو پُر کریں:
    - *Organization* – اپنی تنظیم منتخب کریں۔
    - *Repository* – Web Dev for Beginners نصاب کی ریپوزٹری منتخب کریں۔
    - *Branch* - ایک برانچ منتخب کریں (main)
- Build Presets: Azure Static Web Apps ایک ڈیٹیکشن الگورتھم استعمال کرتا ہے تاکہ آپ کی ایپلیکیشن میں استعمال ہونے والے فریم ورک کا پتہ لگا سکے۔
    - *App location* - ./quiz-app
    - *Api location* -
    - *Output location* - dist
- Deployment: 'Review + Create' پر کلک کریں، پھر 'Create' پر کلک کریں۔

    ایک بار ڈیپلائے ہونے کے بعد، ایک ورک فلو فائل آپ کی ریپوزٹری کے *.github* ڈائریکٹری میں بنائی جائے گی۔ یہ ورک فلو فائل ان ایونٹس کی ہدایات پر مشتمل ہوتی ہے جو ایپ کو Azure پر دوبارہ ڈیپلائے کرنے کو ٹرگر کرتے ہیں، جیسے _برانچ **main** پر **push**_ وغیرہ۔

    <details>
    <summary>ورک فلو فائل کی مثال</summary>
    یہاں ایک مثال ہے کہ GitHub Actions ورک فلو فائل کیسا دکھائی دے سکتا ہے:
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

- ڈیپلائے کے بعد: ڈیپلائے مکمل ہونے کے بعد، 'Go to Deployment' پر کلک کریں، پھر 'View app in browser' پر کلک کریں۔

جب آپ کا GitHub Action (ورک فلو) کامیابی سے مکمل ہو جائے، تو لائیو صفحہ کو ریفریش کریں تاکہ اپنی ایپلیکیشن دیکھ سکیں۔

**ڈسکلیمر**:  
یہ دستاویز AI ترجمہ سروس [Co-op Translator](https://github.com/Azure/co-op-translator) کا استعمال کرتے ہوئے ترجمہ کی گئی ہے۔ ہم درستگی کے لیے کوشش کرتے ہیں، لیکن براہ کرم آگاہ رہیں کہ خودکار ترجمے میں غلطیاں یا غیر درستیاں ہو سکتی ہیں۔ اصل دستاویز کو اس کی اصل زبان میں مستند ذریعہ سمجھا جانا چاہیے۔ اہم معلومات کے لیے، پیشہ ور انسانی ترجمہ کی سفارش کی جاتی ہے۔ ہم اس ترجمے کے استعمال سے پیدا ہونے والی کسی بھی غلط فہمی یا غلط تشریح کے ذمہ دار نہیں ہیں۔