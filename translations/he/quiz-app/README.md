<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5301875c55bb305e6046bed3a4fd06d2",
  "translation_date": "2025-08-27T21:10:49+00:00",
  "source_file": "quiz-app/README.md",
  "language_code": "he"
}
-->
# אפליקציית חידונים

החידונים הללו הם חידוני טרום ואחרי הרצאה עבור תוכנית הלימודים למדעי הנתונים בכתובת https://aka.ms/webdev-beginners

## הוספת סט חידונים מתורגם

הוסף תרגום לחידון על ידי יצירת מבני חידון תואמים בתיקיות `assets/translations`. החידונים המקוריים נמצאים ב-`assets/translations/en`. החידונים מחולקים למספר קבוצות. ודא שהמספור תואם את החלק המתאים של החידון. ישנם 40 חידונים בסך הכל בתוכנית הלימודים הזו, עם המספור שמתחיל מ-0.

  
<details>
<summary>כך נראה קובץ תרגום:</summary>

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

לאחר עריכת התרגומים, ערוך את קובץ index.js בתיקיית התרגום כדי לייבא את כל הקבצים בהתאם להנחיות ב-`en`.

ערוך את הקובץ `index.js` ב-`assets/translations` כדי לייבא את הקבצים המתורגמים החדשים.

לדוגמה, אם קובץ ה-JSON של התרגום שלך הוא `ex.json`, הפוך את 'ex' למפתח הלוקליזציה, ואז הכנס אותו כפי שמוצג למטה כדי לייבא אותו:

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

## הרץ את אפליקציית החידונים באופן מקומי

### דרישות מוקדמות

- חשבון GitHub
- [Node.js ו-Git](https://nodejs.org/)

### התקנה והגדרה

1. צור מאגר מהתבנית הזו [כאן](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) 

1. שיבט את המאגר החדש שלך, ועבור לאפליקציית החידונים

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. התקן את חבילות ה-npm והתלויות

   ```bash
   npm install
   ```

### בניית האפליקציה

1. כדי לבנות את הפתרון, הרץ:

   ```bash
   npm run build
   ```

### הפעלת האפליקציה

1. כדי להפעיל את הפתרון, הרץ:

    ```bash
    npm run dev
    ```

### [אופציונלי] בדיקת קוד

1. כדי לוודא שהקוד נבדק, הרץ:

    ```bash
    npm run lint
    ```

## פריסת אפליקציית החידונים ל-Azure 

### דרישות מוקדמות
- מנוי Azure. הירשם למנוי חינמי [כאן](https://aka.ms/azure-free).

    _הערכת עלות לפריסת אפליקציית החידונים הזו: חינם_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

לאחר שנכנסת ל-Azure דרך הקישור למעלה, בחר מנוי וקבוצת משאבים ואז:

- פרטי אפליקציית האינטרנט הסטטית: ספק שם ובחר תוכנית אירוח
- כניסה ל-GitHub: הגדר את מקור הפריסה שלך כ-GitHub ואז התחבר ומלא את השדות הנדרשים בטופס:
    - *ארגון* – בחר את הארגון שלך.
    - *מאגר* – בחר את מאגר תוכנית הלימודים Web Dev for Beginners. 
    - *ענף* - בחר ענף (main) 
- הגדרות בנייה: Azure Static Web Apps משתמש באלגוריתם זיהוי כדי לזהות את המסגרת שבה נעשה שימוש באפליקציה שלך. 
    - *מיקום האפליקציה* - ./quiz-app
    - *מיקום ה-Api* -
    - *מיקום הפלט* - dist
- פריסה: לחץ על 'Review + Create', ואז 'Create'

    לאחר הפריסה, קובץ זרימת עבודה ייווצר בתיקיית *.github* של המאגר שלך. קובץ זרימת עבודה זה מכיל הוראות על אירועים שיפעילו פריסה מחדש של האפליקציה ל-Azure, לדוגמה, _**push** על ענף **main**_ וכו'.

    <details>
    <summary>דוגמה לקובץ זרימת עבודה</summary>
    הנה דוגמה לאיך קובץ זרימת העבודה של GitHub Actions עשוי להיראות:
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

- לאחר הפריסה: לאחר שהפריסה הושלמה, לחץ על 'Go to Deployment' ואז 'View app in browser'.

לאחר ש-GitHub Action (זרימת העבודה) שלך בוצעה בהצלחה, רענן את הדף החי כדי לצפות באפליקציה שלך.

---

**כתב ויתור**:  
מסמך זה תורגם באמצעות שירות תרגום מבוסס בינה מלאכותית [Co-op Translator](https://github.com/Azure/co-op-translator). בעוד שאנו שואפים לדיוק, יש להיות מודעים לכך שתרגומים אוטומטיים עשויים להכיל שגיאות או אי דיוקים. המסמך המקורי בשפתו המקורית צריך להיחשב כמקור סמכותי. עבור מידע קריטי, מומלץ להשתמש בתרגום מקצועי על ידי אדם. איננו נושאים באחריות לאי הבנות או לפרשנויות שגויות הנובעות משימוש בתרגום זה.