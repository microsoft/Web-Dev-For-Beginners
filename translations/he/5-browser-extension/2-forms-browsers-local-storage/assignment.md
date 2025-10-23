<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "25b8d28b8531352d4eb67291fd7824c4",
  "translation_date": "2025-10-23T01:40:54+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/assignment.md",
  "language_code": "he"
}
-->
# אימוץ API

## סקירה כללית

API פותחים אינסוף אפשרויות לפיתוח אתרים יצירתי! במשימה זו, תבחרו API חיצוני ותבנו תוסף לדפדפן שמספק פתרון לבעיה אמיתית או פונקציונליות בעלת ערך למשתמשים.

## הוראות

### שלב 1: בחרו את ה-API שלכם
בחרו API מתוך [רשימת ה-API הציבוריים החינמיים](https://github.com/public-apis/public-apis). שקלו את הקטגוריות הבאות:

**אפשרויות פופולריות למתחילים:**
- **בידור**: [Dog CEO API](https://dog.ceo/dog-api/) לתמונות כלבים אקראיות
- **מזג אוויר**: [OpenWeatherMap](https://openweathermap.org/api) לנתוני מזג אוויר עדכניים
- **ציטוטים**: [Quotable API](https://quotable.io/) לציטוטים מעוררי השראה
- **חדשות**: [NewsAPI](https://newsapi.org/) לכותרות עדכניות
- **עובדות מעניינות**: [Numbers API](http://numbersapi.com/) לעובדות מעניינות על מספרים

### שלב 2: תכננו את התוסף שלכם
לפני שתתחילו לקודד, ענו על שאלות התכנון הבאות:
- איזו בעיה התוסף שלכם פותר?
- מי קהל היעד שלכם?
- אילו נתונים תאחסנו באחסון המקומי?
- איך תטפלו בכשלים של ה-API או במגבלות קצב?

### שלב 3: בנו את התוסף שלכם
התוסף שלכם צריך לכלול:

**תכונות נדרשות:**
- שדות קלט לכל פרמטרים נדרשים של ה-API
- אינטגרציה עם ה-API כולל טיפול נכון בשגיאות
- אחסון מקומי להעדפות משתמש או מפתחות API
- ממשק משתמש נקי ומגיב
- מצבי טעינה ומשוב למשתמש

**דרישות קוד:**
- השתמשו בתכונות מודרניות של JavaScript (ES6+)
- יישמו async/await לקריאות API
- כללו טיפול נכון בשגיאות עם בלוקים try/catch
- הוסיפו הערות משמעותיות שמסבירות את הקוד שלכם
- שמרו על פורמט קוד עקבי

### שלב 4: בדיקה ושיפור
- בדקו את התוסף שלכם עם קלטים שונים
- טפלו במקרים חריגים (אין אינטרנט, תגובות API לא תקינות)
- ודאו שהתוסף עובד לאחר הפעלה מחדש של הדפדפן
- הוסיפו הודעות שגיאה ידידותיות למשתמש

## אתגרי בונוס

קחו את התוסף שלכם לשלב הבא:
- הוסיפו נקודות קצה נוספות של API לפונקציונליות עשירה יותר
- יישמו שמירת נתונים (caching) להפחתת קריאות API
- צרו קיצורי מקלדת לפעולות נפוצות
- הוסיפו תכונות ייצוא/ייבוא נתונים
- יישמו אפשרויות התאמה אישית למשתמש

## דרישות הגשה

1. **תוסף דפדפן עובד** שמשתלב בהצלחה עם ה-API שבחרתם
2. **קובץ README** שמסביר:
   - איזה API בחרתם ולמה
   - איך להתקין ולהשתמש בתוסף שלכם
   - אילו מפתחות API או הגדרות נדרשים
   - צילומי מסך של התוסף שלכם בפעולה
3. **קוד נקי ומוער** שעוקב אחרי שיטות מודרניות של JavaScript

## קריטריונים להערכה

| קריטריון | מצטיין (90-100%) | טוב (80-89%) | מתפתח (70-79%) | מתחיל (60-69%) |
|----------|------------------|--------------|----------------|----------------|
| **אינטגרציית API** | אינטגרציה מושלמת עם טיפול מקיף בשגיאות וניהול מקרים חריגים | אינטגרציה מוצלחת עם טיפול בסיסי בשגיאות | ה-API עובד אך עם טיפול מוגבל בשגיאות | בעיות משמעותיות באינטגרציית ה-API |
| **איכות הקוד** | JavaScript מודרני, נקי ומוער היטב שעוקב אחרי שיטות עבודה מומלצות | מבנה קוד טוב עם הערות מספקות | הקוד עובד אך דורש ארגון טוב יותר | איכות קוד נמוכה עם מעט הערות |
| **חוויית משתמש** | ממשק מלוטש עם מצבי טעינה ומשוב מצוינים | ממשק טוב עם משוב בסיסי למשתמש | ממשק בסיסי שמתפקד בצורה מספקת | חוויית משתמש גרועה עם ממשק מבלבל |
| **אחסון מקומי** | שימוש מתוחכם באחסון מקומי עם אימות וניהול נתונים | יישום נכון של אחסון מקומי לתכונות מרכזיות | יישום בסיסי של אחסון מקומי | שימוש מינימלי או שגוי באחסון מקומי |
| **תיעוד** | README מקיף עם הוראות התקנה וצילומי מסך | תיעוד טוב שמכסה את רוב הדרישות | תיעוד בסיסי שחסר פרטים מסוימים | תיעוד גרוע או חסר |

## טיפים להתחלה

1. **התחילו פשוט**: בחרו API שלא דורש אימות מורכב
2. **קראו את התיעוד**: הבינו היטב את נקודות הקצה והתגובות של ה-API שבחרתם
3. **תכננו את הממשק שלכם**: שרטטו את ממשק התוסף לפני הקידוד
4. **בדקו לעיתים קרובות**: בנו בהדרגה ובדקו כל תכונה תוך כדי הוספתה
5. **טפלו בשגיאות**: תמיד הניחו שקריאות API עשויות להיכשל ותכננו בהתאם

## משאבים

- [תיעוד תוספי דפדפן](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions)
- [מדריך Fetch API](https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch)
- [מדריך אחסון מקומי](https://developer.mozilla.org/docs/Web/API/Window/localStorage)
- [ניתוח וטיפול ב-JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON)

תהנו לבנות משהו שימושי ויצירתי! 🚀

---

**כתב ויתור**:  
מסמך זה תורגם באמצעות שירות תרגום AI [Co-op Translator](https://github.com/Azure/co-op-translator). למרות שאנו שואפים לדיוק, יש לקחת בחשבון שתרגומים אוטומטיים עשויים להכיל שגיאות או אי דיוקים. המסמך המקורי בשפתו המקורית צריך להיחשב כמקור סמכותי. עבור מידע קריטי, מומלץ להשתמש בתרגום מקצועי אנושי. איננו אחראים לאי הבנות או לפרשנויות שגויות הנובעות משימוש בתרגום זה.