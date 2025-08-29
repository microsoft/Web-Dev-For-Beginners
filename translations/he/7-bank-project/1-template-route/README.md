<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8a07db14e75ac62f013b7de5df05981d",
  "translation_date": "2025-08-29T01:10:16+00:00",
  "source_file": "7-bank-project/1-template-route/README.md",
  "language_code": "he"
}
-->
# בניית אפליקציית בנק חלק 1: תבניות HTML ונתיבים באפליקציה אינטרנטית

## שאלון לפני השיעור

[שאלון לפני השיעור](https://ff-quizzes.netlify.app/web/quiz/41)

### הקדמה

מאז הופעת JavaScript בדפדפנים, אתרי אינטרנט הופכים לאינטראקטיביים ומורכבים יותר מאי פעם. טכנולוגיות אינטרנט משמשות כיום ליצירת אפליקציות פונקציונליות לחלוטין שפועלות ישירות בדפדפן, אותן אנו מכנים [אפליקציות אינטרנט](https://en.wikipedia.org/wiki/Web_application). מכיוון שאפליקציות אינטרנט הן מאוד אינטראקטיביות, משתמשים אינם רוצים להמתין לטעינה מלאה של עמוד בכל פעם שמתבצעת פעולה. לכן, JavaScript משמש לעדכון ה-HTML ישירות באמצעות ה-DOM, כדי לספק חוויית משתמש חלקה יותר.

בשיעור הזה, נניח את היסודות ליצירת אפליקציית בנק אינטרנטית, תוך שימוש בתבניות HTML ליצירת מסכים מרובים שניתן להציג ולעדכן מבלי לטעון מחדש את כל עמוד ה-HTML.

### דרישות מוקדמות

אתם צריכים שרת אינטרנט מקומי כדי לבדוק את אפליקציית האינטרנט שנבנה בשיעור הזה. אם אין לכם אחד, תוכלו להתקין [Node.js](https://nodejs.org) ולהשתמש בפקודה `npx lite-server` מתוך תיקיית הפרויקט שלכם. זה ייצור שרת אינטרנט מקומי ויפתח את האפליקציה שלכם בדפדפן.

### הכנה

במחשב שלכם, צרו תיקייה בשם `bank` עם קובץ בשם `index.html` בתוכה. נתחיל מתבנית [boilerplate](https://en.wikipedia.org/wiki/Boilerplate_code) של HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bank App</title>
  </head>
  <body>
    <!-- This is where you'll work -->
  </body>
</html>
```

---

## תבניות HTML

אם אתם רוצים ליצור מסכים מרובים עבור עמוד אינטרנט, פתרון אחד יהיה ליצור קובץ HTML נפרד עבור כל מסך שתרצו להציג. עם זאת, פתרון זה מגיע עם כמה חסרונות:

- יש לטעון מחדש את כל ה-HTML בעת מעבר בין מסכים, מה שיכול להיות איטי.
- קשה לשתף נתונים בין המסכים השונים.

גישה אחרת היא להשתמש בקובץ HTML אחד בלבד, ולהגדיר מספר [תבניות HTML](https://developer.mozilla.org/docs/Web/HTML/Element/template) באמצעות האלמנט `<template>`. תבנית היא בלוק HTML שניתן לשימוש חוזר, שאינו מוצג על ידי הדפדפן, ויש להפעיל אותו בזמן ריצה באמצעות JavaScript.

### משימה

ניצור אפליקציית בנק עם שני מסכים: עמוד התחברות ולוח מחוונים. קודם כל, נוסיף בגוף ה-HTML אלמנט placeholder שנשתמש בו כדי להפעיל את המסכים השונים של האפליקציה שלנו:

```html
<div id="app">Loading...</div>
```

נתנו לו `id` כדי להקל על איתורו באמצעות JavaScript מאוחר יותר.

> טיפ: מכיוון שהתוכן של אלמנט זה יוחלף, ניתן לשים בו הודעת טעינה או אינדיקטור שיוצגו בזמן שהאפליקציה נטענת.

לאחר מכן, נוסיף מתחתיו את תבנית ה-HTML עבור עמוד ההתחברות. כרגע נשים שם רק כותרת ומקטע שמכיל קישור שנשתמש בו לניווט.

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <a href="/dashboard">Login</a>
  </section>
</template>
```

לאחר מכן נוסיף תבנית HTML נוספת עבור עמוד לוח המחוונים. עמוד זה יכיל מקטעים שונים:

- כותרת עם כותרת וקישור ליציאה
- יתרת חשבון הבנק הנוכחית
- רשימת עסקאות, מוצגת בטבלה

```html
<template id="dashboard">
  <header>
    <h1>Bank App</h1>
    <a href="/login">Logout</a>
  </header>
  <section>
    Balance: 100$
  </section>
  <section>
    <h2>Transactions</h2>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Object</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </section>
</template>
```

> טיפ: כשאתם יוצרים תבניות HTML, אם אתם רוצים לראות איך הן ייראו, תוכלו להסתיר את השורות `<template>` ו-`</template>` על ידי עטיפתן ב-`<!-- -->`.

✅ מדוע לדעתכם אנו משתמשים בתכונות `id` על התבניות? האם ניתן להשתמש במשהו אחר כמו מחלקות?

## הצגת תבניות באמצעות JavaScript

אם תנסו את קובץ ה-HTML הנוכחי שלכם בדפדפן, תראו שהוא נתקע על הצגת `Loading...`. זאת מכיוון שעלינו להוסיף קוד JavaScript כדי להפעיל ולהציג את תבניות ה-HTML.

הפעלת תבנית נעשית בדרך כלל בשלושה שלבים:

1. איתור אלמנט התבנית ב-DOM, למשל באמצעות [`document.getElementById`](https://developer.mozilla.org/docs/Web/API/Document/getElementById).
2. שכפול אלמנט התבנית, באמצעות [`cloneNode`](https://developer.mozilla.org/docs/Web/API/Node/cloneNode).
3. הצמדתו ל-DOM תחת אלמנט גלוי, למשל באמצעות [`appendChild`](https://developer.mozilla.org/docs/Web/API/Node/appendChild).

✅ מדוע אנו צריכים לשכפל את התבנית לפני הצמדתה ל-DOM? מה לדעתכם יקרה אם נדלג על שלב זה?

### משימה

צרו קובץ חדש בשם `app.js` בתיקיית הפרויקט שלכם וייבאו את הקובץ הזה בקטע `<head>` של ה-HTML:

```html
<script src="app.js" defer></script>
```

עכשיו ב-`app.js`, ניצור פונקציה חדשה בשם `updateRoute`:

```js
function updateRoute(templateId) {
  const template = document.getElementById(templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

מה שאנחנו עושים כאן הוא בדיוק שלושת השלבים שתוארו לעיל. אנו מפעילים את התבנית עם ה-id `templateId`, ושמים את התוכן המשוכפל שלה בתוך ה-placeholder של האפליקציה שלנו. שימו לב שעלינו להשתמש ב-`cloneNode(true)` כדי להעתיק את כל תת-העץ של התבנית.

עכשיו קראו לפונקציה הזו עם אחת התבניות ותראו את התוצאה.

```js
updateRoute('login');
```

✅ מה מטרת הקוד הזה `app.innerHTML = '';`? מה קורה בלעדיו?

## יצירת נתיבים

כשמדברים על אפליקציית אינטרנט, אנו מכנים *נתיבים* את הכוונה למפות **כתובות URL** למסכים ספציפיים שצריכים להיות מוצגים. באתר עם קבצי HTML מרובים, זה נעשה באופן אוטומטי מכיוון שהנתיבים משתקפים בכתובת ה-URL. לדוגמה, עם הקבצים האלה בתיקיית הפרויקט שלכם:

```
mywebsite/index.html
mywebsite/login.html
mywebsite/admin/index.html
```

אם תיצרו שרת אינטרנט עם `mywebsite` כשורש, מיפוי ה-URL יהיה:

```
https://site.com            --> mywebsite/index.html
https://site.com/login.html --> mywebsite/login.html
https://site.com/admin/     --> mywebsite/admin/index.html
```

עם זאת, עבור אפליקציית האינטרנט שלנו אנו משתמשים בקובץ HTML יחיד שמכיל את כל המסכים, כך שהתנהגות ברירת המחדל הזו לא תעזור לנו. עלינו ליצור את המפה הזו ידנית ולעדכן את התבנית המוצגת באמצעות JavaScript.

### משימה

נשתמש באובייקט פשוט כדי ליישם [מפה](https://en.wikipedia.org/wiki/Associative_array) בין נתיבי URL לתבניות שלנו. הוסיפו את האובייקט הזה בראש קובץ `app.js` שלכם.

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard' },
};
```

עכשיו נשנה מעט את פונקציית `updateRoute`. במקום להעביר ישירות את `templateId` כארגומנט, אנו רוצים לאתר אותו על ידי בדיקת כתובת ה-URL הנוכחית, ואז להשתמש במפה שלנו כדי לקבל את ערך ה-id של התבנית המתאימה. נוכל להשתמש ב-[`window.location.pathname`](https://developer.mozilla.org/docs/Web/API/Location/pathname) כדי לקבל רק את חלק הנתיב מה-URL.

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  const template = document.getElementById(route.templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

כאן מיפינו את הנתיבים שהצהרנו לתבנית המתאימה. תוכלו לבדוק שזה עובד נכון על ידי שינוי כתובת ה-URL ידנית בדפדפן שלכם.

✅ מה קורה אם אתם מזינים נתיב לא מוכר בכתובת ה-URL? איך נוכל לפתור את זה?

## הוספת ניווט

השלב הבא עבור האפליקציה שלנו הוא להוסיף אפשרות לנווט בין עמודים מבלי לשנות את כתובת ה-URL ידנית. זה כולל שני דברים:

1. עדכון כתובת ה-URL הנוכחית
2. עדכון התבנית המוצגת בהתבסס על כתובת ה-URL החדשה

כבר טיפלנו בחלק השני עם פונקציית `updateRoute`, אז עלינו להבין איך לעדכן את כתובת ה-URL הנוכחית.

נשתמש ב-JavaScript ובמיוחד ב-[`history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState) שמאפשר לעדכן את כתובת ה-URL וליצור ערך חדש בהיסטוריית הגלישה, מבלי לטעון מחדש את ה-HTML.

> הערה: בעוד שאלמנט העוגן של HTML [`<a href>`](https://developer.mozilla.org/docs/Web/HTML/Element/a) יכול לשמש בפני עצמו ליצירת קישורים לכתובות URL שונות, הוא יגרום לדפדפן לטעון מחדש את ה-HTML כברירת מחדל. יש למנוע התנהגות זו בעת טיפול בנתיבים עם JavaScript מותאם אישית, באמצעות הפונקציה `preventDefault()` על אירוע הלחיצה.

### משימה

בואו ניצור פונקציה חדשה שנוכל להשתמש בה לניווט באפליקציה שלנו:

```js
function navigate(path) {
  window.history.pushState({}, path, path);
  updateRoute();
}
```

שיטה זו קודם כל מעדכנת את כתובת ה-URL הנוכחית בהתבסס על הנתיב שניתן, ואז מעדכנת את התבנית. התכונה `window.location.origin` מחזירה את שורש ה-URL, ומאפשרת לנו לבנות מחדש כתובת URL מלאה מנתיב נתון.

עכשיו כשיש לנו את הפונקציה הזו, נוכל לטפל בבעיה שיש לנו אם נתיב אינו תואם לאף נתיב מוגדר. נשנה את פונקציית `updateRoute` על ידי הוספת fallback לאחד הנתיבים הקיימים אם לא נוכל למצוא התאמה.

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
    return navigate('/login');
  }

  ...
```

אם לא ניתן למצוא נתיב, עכשיו נופנה לעמוד ההתחברות.

עכשיו בואו ניצור פונקציה לקבלת כתובת ה-URL כאשר קישור נלחץ, ולמנוע את התנהגות ברירת המחדל של הדפדפן לקישורים:

```js
function onLinkClick(event) {
  event.preventDefault();
  navigate(event.target.href);
}
```

נשלים את מערכת הניווט על ידי הוספת קישורים לעמודי *התחברות* ו-*יציאה* ב-HTML.

```html
<a href="/dashboard" onclick="onLinkClick(event)">Login</a>
...
<a href="/login" onclick="onLinkClick(event)">Logout</a>
```

האובייקט `event` למעלה, תופס את אירוע הלחיצה ומעביר אותו לפונקציה `onLinkClick`.

באמצעות התכונה [`onclick`](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick) ניתן לקשור את אירוע הלחיצה לקוד JavaScript, כאן הקריאה לפונקציה `navigate()`.

נסו ללחוץ על הקישורים האלה, עכשיו תוכלו לנווט בין המסכים השונים של האפליקציה שלכם.

✅ שיטת `history.pushState` היא חלק מהסטנדרט של HTML5 ומיושמת [בכל הדפדפנים המודרניים](https://caniuse.com/?search=pushState). אם אתם בונים אפליקציית אינטרנט לדפדפנים ישנים, יש טריק שתוכלו להשתמש בו במקום ה-API הזה: שימוש ב-[hash (`#`)](https://en.wikipedia.org/wiki/URI_fragment) לפני הנתיב מאפשר ליישם נתיבים שעובדים עם ניווט עוגן רגיל ואינם טוענים מחדש את העמוד, שכן מטרתו הייתה ליצור קישורים פנימיים בתוך עמוד.

## טיפול בכפתורי אחורה וקדימה של הדפדפן

שימוש ב-`history.pushState` יוצר ערכים חדשים בהיסטוריית הניווט של הדפדפן. תוכלו לבדוק זאת על ידי לחיצה ממושכת על *כפתור האחורה* של הדפדפן שלכם, זה אמור להציג משהו כזה:

![צילום מסך של היסטוריית ניווט](../../../../translated_images/history.7fdabbafa521e06455b738d3dafa3ff41d3071deae60ead8c7e0844b9ed987d8.he.png)

אם תנסו ללחוץ על כפתור האחורה כמה פעמים, תראו שכתובת ה-URL הנוכחית משתנה וההיסטוריה מתעדכנת, אבל אותה תבנית ממשיכה להיות מוצגת.

זה בגלל שהאפליקציה אינה יודעת שעלינו לקרוא ל-`updateRoute()` בכל פעם שההיסטוריה משתנה. אם תסתכלו על [תיעוד `history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState), תוכלו לראות שאם המצב משתנה - כלומר עברנו לכתובת URL שונה - אירוע [`popstate`](https://developer.mozilla.org/docs/Web/API/Window/popstate_event) מופעל. נשתמש בזה כדי לתקן את הבעיה.

### משימה

כדי לוודא שהתבנית המוצגת מתעדכנת כאשר היסטוריית הדפדפן משתנה, נקשר פונקציה חדשה שקוראת ל-`updateRoute()`. נעשה זאת בתחתית קובץ `app.js` שלנו:

```js
window.onpopstate = () => updateRoute();
updateRoute();
```

> הערה: השתמשנו ב-[פונקציית חץ](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions) כאן כדי להצהיר על מטפל אירוע `popstate` שלנו בקיצור, אבל פונקציה רגילה תעבוד באותה מידה.

הנה סרטון רענון על פונקציות חץ:

[![פונקציות חץ](https://img.youtube.com/vi/OP6eEbOj2sc/0.jpg)](https://youtube.com/watch?v=OP6eEbOj2sc "פונקציות חץ")

> 🎥 לחצו על התמונה למעלה לסרטון על פונקציות חץ.

עכשיו נסו להשתמש בכפתורי אחורה וקדימה של הדפדפן שלכם, ובדקו שהתבנית המוצגת מתעדכנת כראוי הפעם.

---

## 🚀 אתגר

הוסיפו תבנית חדשה ונתיב לעמוד שלישי שמציג את הקרדיטים עבור האפליקציה הזו.

## שאלון אחרי השיעור

[שאלון אחרי השיעור](https://ff-quizzes.netlify.app/web/quiz/42)

## סקירה ולימוד עצמי

נתיבים הם אחד החלקים המפתיעים והמורכבים בפיתוח אינטרנט, במיוחד כשהאינטרנט עובר מהתנהגות של רענון עמודים לאפליקציות עמוד יחיד. קראו מעט על [איך שירות Azure Static Web App](https://docs.microsoft.com/azure/static-web-apps/routes/?WT.mc_id=academic-77807-sagibbon) מטפל בנתיבים. האם תוכלו להסביר מדוע חלק מההחלטות המתוארות במסמך הזה הכרחיות?

## משימה

[שפרו את מערכת הנתיבים](assignment.md)

---

**כתב ויתור**:  
מסמך זה תורגם באמצעות שירות תרגום מבוסס בינה מלאכותית [Co-op Translator](https://github.com/Azure/co-op-translator). למרות שאנו שואפים לדיוק, יש לקחת בחשבון שתרגומים אוטומטיים עשויים להכיל שגיאות או אי-דיוקים. המסמך המקורי בשפתו המקורית נחשב למקור הסמכותי. למידע קריטי, מומלץ להשתמש בתרגום מקצועי על ידי בני אדם. איננו נושאים באחריות לכל אי-הבנה או פרשנות שגויה הנובעת משימוש בתרגום זה.  