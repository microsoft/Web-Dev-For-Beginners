<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "89d0df9854ed020f155e94882ae88d4c",
  "translation_date": "2025-08-29T01:07:56+00:00",
  "source_file": "7-bank-project/3-data/README.md",
  "language_code": "he"
}
-->
# בניית אפליקציית בנקאות חלק 3: שיטות לשליפת נתונים ושימוש בהם

## שאלון לפני השיעור

[שאלון לפני השיעור](https://ff-quizzes.netlify.app/web/quiz/45)

### מבוא

בלב כל אפליקציית ווב נמצאים *נתונים*. הנתונים יכולים להופיע בצורות שונות, אך מטרתם העיקרית היא להציג מידע למשתמש. עם הפיכת אפליקציות הווב לאינטראקטיביות ומורכבות יותר, הדרך שבה המשתמש ניגש למידע ומתקשר איתו הפכה לחלק מרכזי בפיתוח ווב.

בשיעור זה נלמד כיצד לשלוף נתונים משרת בצורה אסינכרונית, ולהשתמש בנתונים אלו להצגת מידע בדף ווב מבלי לטעון מחדש את ה-HTML.

### דרישות מקדימות

עליכם לבנות את [טופס ההתחברות וההרשמה](../2-forms/README.md) כחלק מאפליקציית הווב עבור שיעור זה. כמו כן, יש להתקין את [Node.js](https://nodejs.org) ולהריץ את [שרת ה-API](../api/README.md) באופן מקומי כדי לקבל נתוני חשבון.

ניתן לבדוק שהשרת פועל כראוי על ידי הרצת הפקודה הבאה בטרמינל:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## AJAX ושליפת נתונים

באתרים מסורתיים, התוכן המוצג מתעדכן כאשר המשתמש בוחר קישור או שולח נתונים באמצעות טופס, על ידי טעינה מחדש של דף ה-HTML כולו. בכל פעם שיש צורך בנתונים חדשים, שרת הווב מחזיר דף HTML חדש שיש לעבד בדפדפן, מה שמפריע לפעולת המשתמש הנוכחית ומגביל אינטראקציות במהלך הטעינה. תהליך זה נקרא גם *אפליקציית ריבוי דפים* או *MPA*.

![תהליך עדכון באפליקציית ריבוי דפים](../../../../translated_images/mpa.7f7375a1a2d4aa779d3f928a2aaaf9ad76bcdeb05cfce2dc27ab126024050f51.he.png)

כאשר אפליקציות ווב החלו להיות מורכבות ואינטראקטיביות יותר, התפתחה טכניקה חדשה בשם [AJAX (JavaScript ו-XML אסינכרוניים)](https://en.wikipedia.org/wiki/Ajax_(programming)). טכניקה זו מאפשרת לאפליקציות ווב לשלוח ולקבל נתונים משרת בצורה אסינכרונית באמצעות JavaScript, מבלי לטעון מחדש את דף ה-HTML, מה שמוביל לעדכונים מהירים יותר ואינטראקציות חלקות יותר. כאשר מתקבלים נתונים חדשים מהשרת, ניתן לעדכן את דף ה-HTML הנוכחי באמצעות JavaScript באמצעות [API של DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model). עם הזמן, גישה זו התפתחה למה שמכונה כיום [*אפליקציית דף יחיד* או *SPA*](https://en.wikipedia.org/wiki/Single-page_application).

![תהליך עדכון באפליקציית דף יחיד](../../../../translated_images/spa.268ec73b41f992c2a21ef9294235c6ae597b3c37e2c03f0494c2d8857325cc57.he.png)

כאשר AJAX הוצג לראשונה, ה-API היחיד שהיה זמין לשליפת נתונים אסינכרונית היה [`XMLHttpRequest`](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest). אך דפדפנים מודרניים תומכים כיום גם ב-API הנוח והחזק יותר [`Fetch`](https://developer.mozilla.org/docs/Web/API/Fetch_API), המשתמש ב-promises ומתאים יותר לעבודה עם נתוני JSON.

> למרות שכל הדפדפנים המודרניים תומכים ב-`Fetch API`, אם ברצונכם שאפליקציית הווב שלכם תפעל בדפדפנים ישנים, כדאי לבדוק תחילה את [טבלת התאימות ב-caniuse.com](https://caniuse.com/fetch).

### משימה

בשיעור הקודם יישמנו את טופס ההרשמה ליצירת חשבון. כעת נוסיף קוד להתחברות באמצעות חשבון קיים ולשליפת נתוניו. פתחו את הקובץ `app.js` והוסיפו פונקציית `login` חדשה:

```js
async function login() {
  const loginForm = document.getElementById('loginForm')
  const user = loginForm.user.value;
}
```

כאן אנו מתחילים בשליפת אלמנט הטופס באמצעות `getElementById()`, ולאחר מכן מקבלים את שם המשתמש מהקלט באמצעות `loginForm.user.value`. ניתן לגשת לכל פקד טופס לפי שמו (המוגדר ב-HTML באמצעות המאפיין `name`) כמאפיין של הטופס.

בדומה למה שעשינו בהרשמה, ניצור פונקציה נוספת לביצוע בקשת שרת, אך הפעם לשליפת נתוני החשבון:

```js
async function getAccount(user) {
  try {
    const response = await fetch('//localhost:5000/api/accounts/' + encodeURIComponent(user));
    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}
```

אנו משתמשים ב-`fetch API` כדי לבקש נתונים מהשרת בצורה אסינכרונית, אך הפעם איננו זקוקים לפרמטרים נוספים מלבד ה-URL, מכיוון שאנו רק שואלים נתונים. כברירת מחדל, `fetch` יוצר בקשת HTTP מסוג [`GET`](https://developer.mozilla.org/docs/Web/HTTP/Methods/GET), שזה בדיוק מה שאנו צריכים כאן.

✅ `encodeURIComponent()` היא פונקציה שממירה תווים מיוחדים לכתובת URL. אילו בעיות עלולות להתרחש אם לא נקרא לפונקציה זו ונשתמש ישירות בערך `user` ב-URL?

כעת נעדכן את פונקציית `login` שלנו לשימוש ב-`getAccount`:

```js
async function login() {
  const loginForm = document.getElementById('loginForm')
  const user = loginForm.user.value;
  const data = await getAccount(user);

  if (data.error) {
    return console.log('loginError', data.error);
  }

  account = data;
  navigate('/dashboard');
}
```

ראשית, מכיוון ש-`getAccount` היא פונקציה אסינכרונית, עלינו להשתמש במילת המפתח `await` כדי להמתין לתוצאת השרת. כמו בכל בקשת שרת, עלינו גם להתמודד עם מקרים של שגיאות. לעת עתה נוסיף רק הודעת לוג להצגת השגיאה, ונחזור לזה מאוחר יותר.

לאחר מכן עלינו לשמור את הנתונים במקום כלשהו כדי שנוכל להשתמש בהם מאוחר יותר להצגת מידע בלוח הבקרה. מכיוון שהמשתנה `account` עדיין לא קיים, ניצור משתנה גלובלי עבורו בראש הקובץ:

```js
let account = null;
```

לאחר שמירת נתוני המשתמש במשתנה, נוכל לנווט מדף *ההתחברות* לדף *לוח הבקרה* באמצעות הפונקציה `navigate()` שכבר יש לנו.

לבסוף, עלינו לקרוא לפונקציית `login` שלנו כאשר טופס ההתחברות נשלח, על ידי שינוי ה-HTML:

```html
<form id="loginForm" action="javascript:login()">
```

בדקו שהכול פועל כראוי על ידי הרשמה לחשבון חדש וניסיון להתחבר באמצעות אותו חשבון.

לפני שנעבור לחלק הבא, נוכל גם להשלים את פונקציית `register` על ידי הוספת הקוד הבא בסוף הפונקציה:

```js
account = result;
navigate('/dashboard');
```

✅ האם ידעתם שבברירת מחדל, ניתן לקרוא ל-APIs של שרת רק מאותו *דומיין ופורט* של דף הווב שאתם צופים בו? זהו מנגנון אבטחה שמיושם על ידי דפדפנים. אבל רגע, אפליקציית הווב שלנו פועלת ב-`localhost:3000` בעוד ששרת ה-API פועל ב-`localhost:5000`, איך זה עובד? באמצעות טכניקה שנקראת [שיתוף משאבים בין מקורות (CORS)](https://developer.mozilla.org/docs/Web/HTTP/CORS), ניתן לבצע בקשות HTTP בין מקורות אם השרת מוסיף כותרות מיוחדות לתגובה, המאפשרות חריגות לדומיינים ספציפיים.

> למדו עוד על APIs על ידי לקיחת [השיעור הזה](https://docs.microsoft.com/learn/modules/use-apis-discover-museum-art/?WT.mc_id=academic-77807-sagibbon)

## עדכון HTML להצגת נתונים

כעת, כשיש לנו את נתוני המשתמש, עלינו לעדכן את ה-HTML הקיים כדי להציג אותם. אנו כבר יודעים כיצד לשלוף אלמנט מה-DOM באמצעות לדוגמה `document.getElementById()`. לאחר שיש לכם אלמנט בסיס, הנה כמה APIs שניתן להשתמש בהם כדי לשנות אותו או להוסיף לו אלמנטים ילדים:

- באמצעות המאפיין [`textContent`](https://developer.mozilla.org/docs/Web/API/Node/textContent) ניתן לשנות את הטקסט של אלמנט. שימו לב ששינוי ערך זה מסיר את כל הילדים של האלמנט (אם ישנם) ומחליף אותם בטקסט שסופק. לכן, זו גם שיטה יעילה להסרת כל הילדים של אלמנט נתון על ידי הקצאת מחרוזת ריקה `''` לו.

- באמצעות [`document.createElement()`](https://developer.mozilla.org/docs/Web/API/Document/createElement) יחד עם המתודה [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append) ניתן ליצור ולצרף אלמנטים ילדים חדשים.

✅ באמצעות המאפיין [`innerHTML`](https://developer.mozilla.org/docs/Web/API/Element/innerHTML) של אלמנט ניתן גם לשנות את תוכן ה-HTML שלו, אך יש להימנע משימוש בו מכיוון שהוא פגיע להתקפות [XSS (Cross-site scripting)](https://developer.mozilla.org/docs/Glossary/Cross-site_scripting).

### משימה

לפני שנעבור למסך לוח הבקרה, יש דבר נוסף שעלינו לעשות בדף *ההתחברות*. כרגע, אם תנסו להתחבר עם שם משתמש שאינו קיים, הודעה מוצגת בקונסולה אך עבור משתמש רגיל דבר לא משתנה ואין דרך לדעת מה קורה.

נוסיף אלמנט placeholder בטופס ההתחברות שבו נוכל להציג הודעת שגיאה במידת הצורך. מקום טוב יהיה ממש לפני כפתור ההתחברות `<button>`:

```html
...
<div id="loginError"></div>
<button>Login</button>
...
```

אלמנט `<div>` זה ריק, כלומר דבר לא יוצג על המסך עד שנוסיף לו תוכן. אנו גם נותנים לו `id` כדי שנוכל לשלוף אותו בקלות באמצעות JavaScript.

חזרו לקובץ `app.js` וצרו פונקציית עזר חדשה `updateElement`:

```js
function updateElement(id, text) {
  const element = document.getElementById(id);
  element.textContent = text;
}
```

פונקציה זו פשוטה למדי: בהינתן *id* של אלמנט וטקסט, היא תעדכן את תוכן הטקסט של אלמנט ה-DOM עם ה-`id` המתאים. נשתמש בשיטה זו במקום הודעת השגיאה הקודמת בפונקציית `login`:

```js
if (data.error) {
  return updateElement('loginError', data.error);
}
```

כעת, אם תנסו להתחבר עם חשבון לא תקין, תראו משהו כזה:

![צילום מסך המציג הודעת שגיאה במהלך התחברות](../../../../translated_images/login-error.416fe019b36a63276764c2349df5d99e04ebda54fefe60c715ee87a28d5d4ad0.he.png)

כעת יש לנו טקסט שגיאה שמופיע באופן חזותי, אך אם תנסו זאת עם קורא מסך תבחינו ששום דבר לא מוכרז. כדי שטקסט שנוסף לדף באופן דינמי יוכרז על ידי קוראי מסך, יש להשתמש במשהו שנקרא [אזור חי (Live Region)](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/ARIA_Live_Regions). כאן נשתמש בסוג ספציפי של אזור חי שנקרא התראה:

```html
<div id="loginError" role="alert"></div>
```

יישמו את אותו התנהגות עבור שגיאות בפונקציית `register` (אל תשכחו לעדכן את ה-HTML).

## הצגת מידע בלוח הבקרה

באמצעות אותן טכניקות שראינו זה עתה, נטפל גם בהצגת נתוני החשבון בדף לוח הבקרה.

כך נראה אובייקט חשבון שמתקבל מהשרת:

```json
{
  "user": "test",
  "currency": "$",
  "description": "Test account",
  "balance": 75,
  "transactions": [
    { "id": "1", "date": "2020-10-01", "object": "Pocket money", "amount": 50 },
    { "id": "2", "date": "2020-10-03", "object": "Book", "amount": -10 },
    { "id": "3", "date": "2020-10-04", "object": "Sandwich", "amount": -5 }
  ],
}
```

> הערה: כדי להקל עליכם, תוכלו להשתמש בחשבון `test` הקיים שכבר מאוכלס בנתונים.

### משימה

נתחיל בהחלפת חלק "היתרה" ב-HTML כדי להוסיף אלמנטים placeholder:

```html
<section>
  Balance: <span id="balance"></span><span id="currency"></span>
</section>
```

נוסיף גם חלק חדש מתחתיו להצגת תיאור החשבון:

```html
<h2 id="description"></h2>
```

✅ מכיוון שתיאור החשבון משמש ככותרת לתוכן שמתחתיו, הוא מסומן באופן סמנטי ככותרת. למדו עוד על [מבנה כותרות](https://www.nomensa.com/blog/2017/how-structure-headings-web-accessibility) וכיצד הוא חשוב לנגישות, ובחנו באופן ביקורתי את הדף כדי לקבוע מה עוד יכול להיות כותרת.

כעת ניצור פונקציה חדשה ב-`app.js` למילוי ה-placeholder:

```js
function updateDashboard() {
  if (!account) {
    return navigate('/login');
  }

  updateElement('description', account.description);
  updateElement('balance', account.balance.toFixed(2));
  updateElement('currency', account.currency);
}
```

ראשית, אנו בודקים שיש לנו את נתוני החשבון הדרושים לפני שנמשיך. לאחר מכן אנו משתמשים בפונקציה `updateElement()` שיצרנו קודם כדי לעדכן את ה-HTML.

> כדי להפוך את תצוגת היתרה ליפה יותר, אנו משתמשים במתודה [`toFixed(2)`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) כדי להציג את הערך עם שתי ספרות אחרי הנקודה העשרונית.

כעת עלינו לקרוא לפונקציית `updateDashboard()` שלנו בכל פעם שדף לוח הבקרה נטען. אם כבר סיימתם את [משימת שיעור 1](../1-template-route/assignment.md) זה אמור להיות פשוט, אחרת תוכלו להשתמש במימוש הבא.

הוסיפו את הקוד הזה לסוף פונקציית `updateRoute()`:

```js
if (typeof route.init === 'function') {
  route.init();
}
```

ועדכנו את הגדרת הנתיבים עם:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: updateDashboard }
};
```

עם שינוי זה, בכל פעם שדף לוח הבקרה מוצג, הפונקציה `updateDashboard()` נקראת. לאחר התחברות, תוכלו לראות את יתרת החשבון, המטבע והתיאור.

## יצירת שורות טבלה דינמיות עם תבניות HTML

בשיעור הראשון השתמשנו בתבניות HTML יחד עם המתודה [`appendChild()`](https://developer.mozilla.org/docs/Web/API/Node/appendChild) כדי ליישם את הניווט באפליקציה שלנו. תבניות יכולות להיות גם קטנות יותר ולהשתמש בהן למילוי חלקים חוזרים בדף באופן דינמי.

נשתמש בגישה דומה להצגת רשימת העסקאות בטבלת ה-HTML.

### משימה

הוסיפו תבנית חדשה ב-`<body>` של ה-HTML:

```html
<template id="transaction">
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</template>
```

תבנית זו מייצגת שורת טבלה אחת, עם שלושת העמודות שאנו רוצים למלא: *תאריך*, *אובייקט* ו-*סכום* של עסקה.

לאחר מכן, הוסיפו את המאפיין `id` הזה לאלמנט `<tbody>` של הטבלה בתוך תבנית לוח הבקרה כדי להקל על מציאתו באמצעות JavaScript:

```html
<tbody id="transactions"></tbody>
```

ה-HTML שלנו מוכן, נעבור לקוד JavaScript וניצור פונקציה חדשה `createTransactionRow`:

```js
function createTransactionRow(transaction) {
  const template = document.getElementById('transaction');
  const transactionRow = template.content.cloneNode(true);
  const tr = transactionRow.querySelector('tr');
  tr.children[0].textContent = transaction.date;
  tr.children[1].textContent = transaction.object;
  tr.children[2].textContent = transaction.amount.toFixed(2);
  return transactionRow;
}
```

פונקציה זו עושה בדיוק מה ששמה מרמז: באמצעות התבנית שיצרנו קודם, היא יוצרת שורת טבלה חדשה וממלאת את תוכנה באמצעות נתוני העסקה. נשתמש בזה בפונקציה `updateDashboard()` שלנו כדי למלא את הטבלה:

```js
const transactionsRows = document.createDocumentFragment();
for (const transaction of account.transactions) {
  const transactionRow = createTransactionRow(transaction);
  transactionsRows.appendChild(transactionRow);
}
updateElement('transactions', transactionsRows);
```

כאן אנו משתמשים במתודה [`document.createDocumentFragment()`](https://developer.mozilla.org/docs/Web/API/Document/createDocumentFragment) שיוצרת פרגמנט DOM חדש שעליו ניתן לעבוד, לפני שמצרפים אותו לבסוף לטבלת ה-HTML שלנו.

יש עדיין דבר אחד נוסף שעלינו לעשות לפני שהקוד הזה יפעל, מכיוון שפונקציית `updateElement()` שלנו תומכת כרגע בתוכן טקסט בלבד. נשנה את הקוד שלה מעט:

```js
function updateElement(id, textOrNode) {
  const element = document.getElementById(id);
  element.textContent = ''; // Removes all children
  element.append(textOrNode);
}
```

אנו משתמשים במתודה [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append) מכיוון שהיא מאפשרת לצרף טקסט או [צמתי DOM](https://developer.mozilla.org/docs/Web/API/Node) לאלמנט אב, מה שמתאים לכל מקרי השימוש שלנו.
אם תנסה להיכנס עם חשבון `test`, כעת תוכל לראות רשימת עסקאות בלוח הבקרה 🎉.

---

## 🚀 אתגר

עבדו יחד כדי לגרום לדף לוח הבקרה להיראות כמו אפליקציית בנקאות אמיתית. אם כבר עיצבתם את האפליקציה שלכם, נסו להשתמש ב-[media queries](https://developer.mozilla.org/docs/Web/CSS/Media_Queries) כדי ליצור [עיצוב רספונסיבי](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks) שעובד בצורה טובה גם במחשבים שולחניים וגם במכשירים ניידים.

הנה דוגמה לדף לוח בקרה מעוצב:

![צילום מסך של תוצאה לדוגמה של לוח הבקרה לאחר עיצוב](../../../../translated_images/screen2.123c82a831a1d14ab2061994be2fa5de9cec1ce651047217d326d4773a6348e4.he.png)

## חידון לאחר ההרצאה

[חידון לאחר ההרצאה](https://ff-quizzes.netlify.app/web/quiz/46)

## משימה

[שפרו והוסיפו הערות לקוד שלכם](assignment.md)

---

**כתב ויתור**:  
מסמך זה תורגם באמצעות שירות תרגום מבוסס בינה מלאכותית [Co-op Translator](https://github.com/Azure/co-op-translator). למרות שאנו שואפים לדיוק, יש לקחת בחשבון שתרגומים אוטומטיים עשויים להכיל שגיאות או אי-דיוקים. המסמך המקורי בשפתו המקורית נחשב למקור הסמכותי. למידע קריטי, מומלץ להשתמש בתרגום מקצועי על ידי מתרגם אנושי. איננו נושאים באחריות לכל אי-הבנה או פרשנות שגויה הנובעת משימוש בתרגום זה.