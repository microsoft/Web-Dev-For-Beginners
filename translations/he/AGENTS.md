# AGENTS.md

## סקירת הפרויקט

זהו מאגר תכנית לימודים חינוכית להוראת יסודות פיתוח אתרים למתחילים. התכנית היא קורס מקיף של 12 שבועות שפותח על ידי Microsoft Cloud Advocates, וכוללת 24 שיעורים מעשיים המכסים JavaScript, CSS ו-HTML.

### רכיבים מרכזיים

- **תוכן חינוכי**: 24 שיעורים מובנים המאורגנים במודולים מבוססי פרויקטים
- **פרויקטים מעשיים**: טרריום, משחק הקלדה, הרחבת דפדפן, משחק חלל, אפליקציית בנקאות, עורך קוד ועוזר צ'אט מבוסס AI
- **חידונים אינטראקטיביים**: 48 חידונים עם 3 שאלות כל אחד (הערכות לפני/אחרי שיעור)
- **תמיכה רב-לשונית**: תרגומים אוטומטיים ל-50+ שפות באמצעות GitHub Actions
- **טכנולוגיות**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (לפרויקטי AI)

### ארכיטקטורה

- מאגר חינוכי עם מבנה מבוסס שיעורים
- כל תיקיית שיעור מכילה README, דוגמאות קוד ופתרונות
- פרויקטים עצמאיים בתיקיות נפרדות (quiz-app, פרויקטים שונים של שיעורים)
- מערכת תרגום באמצעות GitHub Actions (co-op-translator)
- תיעוד מוגש באמצעות Docsify וזמין כ-PDF

## פקודות התקנה

מאגר זה מיועד בעיקר לצריכת תוכן חינוכי. לעבודה עם פרויקטים ספציפיים:

### התקנת המאגר הראשי

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### התקנת אפליקציית החידונים (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
```

### API של פרויקט הבנק (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Start API server
npm run lint       # Run ESLint
npm run format     # Format with Prettier
```

### פרויקטים של הרחבות דפדפן

```bash
cd 5-browser-extension/solution
npm install
# Follow browser-specific extension loading instructions
```

### פרויקטים של משחק החלל

```bash
cd 6-space-game/solution
npm install
# Open index.html in browser or use Live Server
```

### פרויקט הצ'אט (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Set GITHUB_TOKEN environment variable
python api.py
```

## זרימת עבודה לפיתוח

### עבור תורמי תוכן

1. **צרו Fork למאגר** לחשבון GitHub שלכם
2. **שכפלו את ה-Fork** באופן מקומי
3. **צרו ענף חדש** לשינויים שלכם
4. בצעו שינויים בתוכן השיעורים או בדוגמאות הקוד
5. בדקו שינויים בקוד בתיקיות הפרויקטים הרלוונטיות
6. שלחו Pull Requests בהתאם להנחיות התרומה

### עבור לומדים

1. צרו Fork או שכפלו את המאגר
2. נווטו לתיקיות השיעורים לפי הסדר
3. קראו את קבצי README לכל שיעור
4. השלימו חידונים לפני השיעור בכתובת https://ff-quizzes.netlify.app/web/
5. עבדו על דוגמאות הקוד בתיקיות השיעורים
6. השלימו משימות ואתגרים
7. בצעו חידונים לאחר השיעור

### פיתוח חי

- **תיעוד**: הריצו `docsify serve` בתיקיית השורש (פורט 3000)
- **אפליקציית חידונים**: הריצו `npm run dev` בתיקיית quiz-app
- **פרויקטים**: השתמשו בתוסף Live Server של VS Code לפרויקטי HTML
- **פרויקטי API**: הריצו `npm start` בתיקיות ה-API הרלוונטיות

## הוראות בדיקה

### בדיקת אפליקציית החידונים

```bash
cd quiz-app
npm run lint       # Check for code style issues
npm run build      # Verify build succeeds
```

### בדיקת API של הבנק

```bash
cd 7-bank-project/api
npm run lint       # Check for code style issues
node server.js     # Verify server starts without errors
```

### גישת בדיקה כללית

- זהו מאגר חינוכי ללא בדיקות אוטומטיות מקיפות
- בדיקות ידניות מתמקדות ב:
  - דוגמאות קוד רצות ללא שגיאות
  - קישורים בתיעוד עובדים כראוי
  - בניית פרויקטים מסתיימת בהצלחה
  - דוגמאות עוקבות אחר שיטות עבודה מומלצות

### בדיקות לפני שליחה

- הריצו `npm run lint` בתיקיות עם package.json
- ודאו שקישורי Markdown תקינים
- בדקו דוגמאות קוד בדפדפן או ב-Node.js
- בדקו שהתרגומים שומרים על מבנה נכון

## הנחיות סגנון קוד

### JavaScript

- השתמשו בתחביר מודרני של ES6+
- עקבו אחר תצורות ESLint סטנדרטיות המסופקות בפרויקטים
- השתמשו בשמות משתנים ופונקציות משמעותיים לצורך בהירות חינוכית
- הוסיפו הערות המסבירות מושגים ללומדים
- עיצוב באמצעות Prettier במקומות שבהם מוגדר

### HTML/CSS

- אלמנטים סמנטיים של HTML5
- עקרונות עיצוב רספונסיבי
- מוסכמות שמות מחלקות ברורות
- הערות המסבירות טכניקות CSS ללומדים

### Python

- הנחיות סגנון של PEP 8
- דוגמאות קוד ברורות וחינוכיות
- רמזי סוגים במקומות שבהם מועיל ללמידה

### תיעוד Markdown

- היררכיית כותרות ברורה
- בלוקי קוד עם ציון שפה
- קישורים למשאבים נוספים
- צילומי מסך ותמונות בתיקיות `images/`
- טקסט חלופי לתמונות לצורך נגישות

### ארגון קבצים

- שיעורים ממוספרים לפי סדר (1-getting-started-lessons, 2-js-basics, וכו')
- לכל פרויקט יש `solution/` ולעיתים `start/` או `your-work/`
- תמונות מאוחסנות בתיקיות `images/` ספציפיות לשיעור
- תרגומים במבנה `translations/{language-code}/`

## בנייה ופריסה

### פריסת אפליקציית חידונים (Azure Static Web Apps)

אפליקציית החידונים מוגדרת לפריסה ב-Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Creates dist/ folder
# Deploys via GitHub Actions workflow on push to main
```

תצורת Azure Static Web Apps:
- **מיקום האפליקציה**: `/quiz-app`
- **מיקום הפלט**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### יצירת PDF לתיעוד

```bash
npm install                    # Install docsify-to-pdf
npm run convert               # Generate PDF from docs
```

### תיעוד Docsify

```bash
npm install -g docsify-cli    # Install Docsify globally
docsify serve                 # Serve on localhost:3000
```

### בניות ספציפיות לפרויקטים

לכל תיקיית פרויקט עשוי להיות תהליך בנייה משלה:
- פרויקטי Vue: `npm run build` יוצר חבילות ייצור
- פרויקטים סטטיים: אין שלב בנייה, הגישו קבצים ישירות

## הנחיות Pull Request

### פורמט כותרת

השתמשו בכותרות ברורות ותיאוריות המצביעות על תחום השינוי:
- `[Quiz-app] Add new quiz for lesson X`
- `[Lesson-3] Fix typo in terrarium project`
- `[Translation] Add Spanish translation for lesson 5`
- `[Docs] Update setup instructions`

### בדיקות נדרשות

לפני שליחת PR:

1. **איכות קוד**:
   - הריצו `npm run lint` בתיקיות הפרויקטים המושפעות
   - תקנו את כל שגיאות ואזהרות הלינטר

2. **אימות בנייה**:
   - הריצו `npm run build` אם רלוונטי
   - ודאו שאין שגיאות בנייה

3. **אימות קישורים**:
   - בדקו את כל קישורי Markdown
   - ודאו שהפניות לתמונות עובדות

4. **סקירת תוכן**:
   - בדקו שגיאות כתיב ודקדוק
   - ודאו שדוגמאות הקוד נכונות וחינוכיות
   - בדקו שהתרגומים שומרים על המשמעות המקורית

### דרישות תרומה

- הסכימו ל-Microsoft CLA (בדיקה אוטומטית ב-PR הראשון)
- עקבו אחר [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- ראו [CONTRIBUTING.md](./CONTRIBUTING.md) להנחיות מפורטות
- התייחסו למספרי בעיות בתיאור ה-PR אם רלוונטי

### תהליך סקירה

- PRs נסקרים על ידי מתחזקים והקהילה
- בהירות חינוכית היא בעדיפות
- דוגמאות קוד צריכות לעקוב אחר שיטות עבודה עדכניות
- תרגומים נסקרים לצורך דיוק והתאמה תרבותית

## מערכת תרגום

### תרגום אוטומטי

- משתמשת ב-GitHub Actions עם workflow של co-op-translator
- מתרגמת ל-50+ שפות באופן אוטומטי
- קבצי מקור בתיקיות הראשיות
- קבצים מתורגמים במבנה `translations/{language-code}/`

### הוספת שיפורי תרגום ידניים

1. מצאו את הקובץ ב-`translations/{language-code}/`
2. בצעו שיפורים תוך שמירה על מבנה
3. ודאו שדוגמאות הקוד נשארות פונקציונליות
4. בדקו כל תוכן חידון מקומי

### מטא-נתונים של תרגום

קבצים מתורגמים כוללים כותרת מטא-נתונים:
```markdown
<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "...",
  "translation_date": "...",
  "source_file": "...",
  "language_code": "..."
}
-->
```

## איתור באגים ופתרון בעיות

### בעיות נפוצות

**אפליקציית החידונים לא מתחילה**:
- בדקו גרסת Node.js (מומלץ v14+)
- מחקו `node_modules` ו-`package-lock.json`, הריצו `npm install` שוב
- בדקו קונפליקטים בפורט (ברירת מחדל: Vite משתמש בפורט 5173)

**שרת API לא מתחיל**:
- ודאו שגרסת Node.js עומדת בדרישות המינימום (node >=10)
- בדקו אם הפורט כבר בשימוש
- ודאו שכל התלויות מותקנות עם `npm install`

**הרחבת דפדפן לא נטענת**:
- ודאו ש-manifest.json מעוצב כראוי
- בדקו שגיאות בקונסולת הדפדפן
- עקבו אחר הוראות התקנת הרחבות ספציפיות לדפדפן

**בעיות בפרויקט הצ'אט של Python**:
- ודאו שהחבילה OpenAI מותקנת: `pip install openai`
- בדקו שהמשתנה הסביבתי GITHUB_TOKEN מוגדר
- בדקו הרשאות גישה ל-GitHub Models

**Docsify לא מגיש תיעוד**:
- התקינו docsify-cli באופן גלובלי: `npm install -g docsify-cli`
- הריצו מתיקיית השורש של המאגר
- בדקו ש-`docs/_sidebar.md` קיים

### טיפים לסביבת פיתוח

- השתמשו ב-VS Code עם תוסף Live Server לפרויקטי HTML
- התקינו תוספי ESLint ו-Prettier לעיצוב עקבי
- השתמשו בכלי DevTools של הדפדפן לאיתור באגים ב-JavaScript
- לפרויקטי Vue, התקינו את תוסף Vue DevTools לדפדפן

### שיקולי ביצועים

- מספר גדול של קבצים מתורגמים (50+ שפות) גורם לכך ששכפולים מלאים גדולים
- השתמשו בשכפול רדוד אם עובדים רק על תוכן: `git clone --depth 1`
- החריגו תרגומים מחיפושים בעת עבודה על תוכן באנגלית
- תהליכי בנייה עשויים להיות איטיים בהרצה הראשונה (npm install, Vite build)

## שיקולי אבטחה

### משתני סביבה

- מפתחות API לעולם לא צריכים להיות מחויבים למאגר
- השתמשו בקבצי `.env` (כבר ב-.gitignore)
- תעדו משתני סביבה נדרשים בקבצי README של הפרויקטים

### פרויקטי Python

- השתמשו בסביבות וירטואליות: `python -m venv venv`
- שמרו על תלויות מעודכנות
- אסימוני GitHub צריכים להיות בעלי הרשאות מינימליות נדרשות

### גישה ל-GitHub Models

- נדרשים Personal Access Tokens (PAT) ל-GitHub Models
- אסימונים צריכים להיות מאוחסנים כמשתני סביבה
- לעולם אל תתחייבו אסימונים או אישורים

## הערות נוספות

### קהל יעד

- מתחילים מוחלטים בפיתוח אתרים
- סטודנטים ולומדים עצמאיים
- מורים המשתמשים בתכנית הלימודים בכיתות
- התוכן מיועד לנגישות ולבניית מיומנויות הדרגתית

### פילוסופיה חינוכית

- גישה מבוססת פרויקטים ללמידה
- בדיקות ידע תכופות (חידונים)
- תרגילי קוד מעשיים
- דוגמאות יישום בעולם האמיתי
- התמקדות ביסודות לפני מסגרות עבודה

### תחזוקת המאגר

- קהילה פעילה של לומדים ותורמים
- עדכונים שוטפים לתלויות ולתוכן
- בעיות ודיונים מנוטרים על ידי מתחזקים
- עדכוני תרגום אוטומטיים באמצעות GitHub Actions

### משאבים קשורים

- [מודולי Microsoft Learn](https://docs.microsoft.com/learn/)
- [משאבי Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) מומלץ ללומדים
- קורסים נוספים: Generative AI, Data Science, ML, IoT זמינים

### עבודה עם פרויקטים ספציפיים

להוראות מפורטות על פרויקטים בודדים, עיינו בקבצי README ב:
- `quiz-app/README.md` - אפליקציית חידונים ב-Vue 3
- `7-bank-project/README.md` - אפליקציית בנקאות עם אימות
- `5-browser-extension/README.md` - פיתוח הרחבת דפדפן
- `6-space-game/README.md` - פיתוח משחק מבוסס Canvas
- `9-chat-project/README.md` - פרויקט עוזר צ'אט מבוסס AI

### מבנה Monorepo

למרות שאינו Monorepo מסורתי, מאגר זה מכיל פרויקטים עצמאיים רבים:
- כל שיעור הוא עצמאי
- פרויקטים אינם חולקים תלויות
- עבודה על פרויקטים בודדים ללא השפעה על אחרים
- שכפלו את כל המאגר לחוויית תכנית לימודים מלאה

---

**כתב ויתור**:  
מסמך זה תורגם באמצעות שירות תרגום מבוסס בינה מלאכותית [Co-op Translator](https://github.com/Azure/co-op-translator). למרות שאנו שואפים לדיוק, יש לקחת בחשבון שתרגומים אוטומטיים עשויים להכיל שגיאות או אי דיוקים. המסמך המקורי בשפתו המקורית צריך להיחשב כמקור סמכותי. עבור מידע קריטי, מומלץ להשתמש בתרגום מקצועי על ידי אדם. איננו נושאים באחריות לאי הבנות או לפרשנויות שגויות הנובעות משימוש בתרגום זה.