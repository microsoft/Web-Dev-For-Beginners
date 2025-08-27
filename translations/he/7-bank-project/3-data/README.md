<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f587e913e3f7c0b1c549a05dd74ee8e5",
  "translation_date": "2025-08-27T20:59:51+00:00",
  "source_file": "7-bank-project/3-data/README.md",
  "language_code": "he"
}
-->
# בניית אפליקציית בנקאות חלק 3: שיטות לשליפת נתונים ושימוש בהם

## חידון לפני השיעור

[חידון לפני השיעור](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/45)

### מבוא

בלב כל אפליקציית אינטרנט נמצאים *נתונים*. הנתונים יכולים להופיע בצורות שונות, אך מטרתם העיקרית היא תמיד להציג מידע למשתמש. עם הפיכת אפליקציות האינטרנט לאינטראקטיביות ומורכבות יותר, האופן שבו המשתמש ניגש למידע ומתקשר איתו הפך לחלק מרכזי בפיתוח אתרים.

בשיעור זה, נלמד כיצד לשלוף נתונים משרת בצורה אסינכרונית ולהשתמש בהם להצגת מידע בדף אינטרנט מבלי לטעון מחדש את ה-HTML.

### דרישות מוקדמות

עליך לבנות את [טופס ההתחברות וההרשמה](../2-forms/README.md) כחלק מאפליקציית האינטרנט לשיעור זה. כמו כן, עליך להתקין את [Node.js](https://nodejs.org) ולהריץ את [שרת ה-API](../api/README.md) באופן מקומי כדי לקבל נתוני חשבון.

ניתן לבדוק שהשרת פועל כראוי על ידי הרצת הפקודה הבאה בטרמינל:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## AJAX ושליפת נתונים

אתרים מסורתיים מעדכנים את התוכן המוצג כאשר המשתמש בוחר קישור או שולח נתונים באמצעות טופס, על ידי טעינה מחדש של דף ה-HTML המלא. בכל פעם שיש צורך בנתונים חדשים, שרת האינטרנט מחזיר דף HTML חדש לחלוטין שיש לעבד בדפדפן, מה שמפריע לפעולה הנוכחית של המשתמש ומגביל אינטראקציות במהלך הטעינה. תהליך זה נקרא גם *אפליקציה מרובת דפים* או *MPA*.

![תהליך עדכון באפליקציה מרובת דפים](../../../../translated_images/mpa.7f7375a1a2d4aa779d3f928a2aaaf9ad76bcdeb05cfce2dc27ab126024050f51.he.png)

כאשר אפליקציות אינטרנט החלו להיות מורכבות ואינטראקטיביות יותר, הופיעה טכניקה חדשה בשם [AJAX (JavaScript ו-XML אסינכרוניים)](https://en.wikipedia.org/wiki/Ajax_(programming)). טכניקה זו מאפשרת לאפליקציות אינטרנט לשלוח ולקבל נתונים משרת בצורה אסינכרונית באמצעות JavaScript, מבלי לטעון מחדש את דף ה-HTML, מה שמוביל לעדכונים מהירים יותר ואינטראקציות חלקות יותר. כאשר מתקבלים נתונים חדשים מהשרת, ניתן גם לעדכן את דף ה-HTML הנוכחי באמצעות JavaScript באמצעות ה-[DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model) API. עם הזמן, גישה זו התפתחה למה שמכונה כיום [*אפליקציה חד-דפית* או *SPA*](https://en.wikipedia.org/wiki/Single-page_application).

![תהליך עדכון באפליקציה חד-דפית](../../../../translated_images/spa.268ec73b41f992c2a21ef9294235c6ae597b3c37e2c03f0494c2d8857325cc57.he.png)

כאשר AJAX הוצג לראשונה, ה-API היחיד שהיה זמין לשליפת נתונים אסינכרונית היה [`XMLHttpRequest`](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest). אך דפדפנים מודרניים תומכים כיום גם ב-API נוח וחזק יותר בשם [`Fetch`](https://developer.mozilla.org/docs/Web/API/Fetch_API), המשתמש ב-Promises ומתאים יותר לטיפול בנתוני JSON.

> למרות שכל הדפדפנים המודרניים תומכים ב-`Fetch API`, אם ברצונך שאפליקציית האינטרנט שלך תעבוד בדפדפנים ישנים, תמיד כדאי לבדוק את [טבלת התאימות באתר caniuse.com](https://caniuse.com/fetch).

### משימה

בשיעור הקודם [הטמענו את טופס ההרשמה](../2-forms/README.md) ליצירת חשבון. כעת נוסיף קוד להתחברות באמצעות חשבון קיים ולשליפת נתוניו. פתח את הקובץ `app.js` והוסף פונקציה חדשה בשם `login`:

```js
async function login() {
  const loginForm = document.getElementById('loginForm')
  const user = loginForm.user.value;
}
```

כאן אנו מתחילים בשליפת אלמנט הטופס באמצעות `getElementById()`, ולאחר מכן מקבלים את שם המשתמש מהשדה באמצעות `loginForm.user.value`. כל שדה בטופס ניתן לגישה לפי שמו (המוגדר ב-HTML באמצעות המאפיין `name`) כמאפיין של הטופס.

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

אנו משתמשים ב-`fetch` API כדי לבקש נתונים מהשרת בצורה אסינכרונית, אך הפעם איננו זקוקים לפרמטרים נוספים מלבד ה-URL, מכיוון שאנו רק מבצעים שאילתת נתונים. כברירת מחדל, `fetch` יוצר בקשת HTTP מסוג [`GET`](https://developer.mozilla.org/docs/Web/HTTP/Methods/GET), שזה בדיוק מה שאנו צריכים כאן.

✅ `encodeURIComponent()` היא פונקציה שממירה תווים מיוחדים לכתובת URL. אילו בעיות עלולות להיווצר אם לא נשתמש בפונקציה זו ונשתמש ישירות בערך `user` ב-URL?

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

ראשית, מכיוון ש-`getAccount` היא פונקציה אסינכרונית, עלינו להשתמש במילת המפתח `await` כדי להמתין לתוצאת השרת. כמו בכל בקשת שרת, עלינו להתמודד גם עם מקרים של שגיאות. לעת עתה נוסיף רק הודעת לוג להצגת השגיאה, ונחזור לכך מאוחר יותר.

לאחר מכן, עלינו לשמור את הנתונים במקום כלשהו כדי שנוכל להשתמש בהם מאוחר יותר להצגת מידע בלוח הבקרה. מכיוון שהמשתנה `account` עדיין לא קיים, ניצור משתנה גלובלי עבורו בראש הקובץ שלנו:

```js
let account = null;
```

לאחר שמירת נתוני המשתמש במשתנה, נוכל לנווט מדף ההתחברות לדף לוח הבקרה באמצעות הפונקציה `navigate()` שכבר יש לנו.

לבסוף, עלינו לקרוא לפונקציית `login` שלנו כאשר טופס ההתחברות נשלח, על ידי שינוי ה-HTML:

```html
<form id="loginForm" action="javascript:login()">
```

בדוק שהכול פועל כראוי על ידי יצירת חשבון חדש וניסיון להתחבר באמצעות אותו חשבון.

לפני שנעבור לחלק הבא, נוכל גם להשלים את פונקציית `register` על ידי הוספת הקוד הבא בסוף הפונקציה:

```js
account = result;
navigate('/dashboard');
```

✅ האם ידעת שבברירת מחדל, ניתן לקרוא ל-API של שרתים רק מאותו *דומיין ופורט* של דף האינטרנט שאתה צופה בו? זהו מנגנון אבטחה שמיושם על ידי דפדפנים. אבל רגע, אפליקציית האינטרנט שלנו פועלת ב-`localhost:3000` בעוד ששרת ה-API פועל ב-`localhost:5000`, איך זה עובד? באמצעות טכניקה שנקראת [שיתוף משאבים בין מקורות (CORS)](https://developer.mozilla.org/docs/Web/HTTP/CORS), ניתן לבצע בקשות HTTP בין מקורות אם השרת מוסיף כותרות מיוחדות לתגובה, המאפשרות חריגים לדומיינים מסוימים.

> למדו עוד על APIs על ידי השתתפות בשיעור זה [כאן](https://docs.microsoft.com/learn/modules/use-apis-discover-museum-art/?WT.mc_id=academic-77807-sagibbon)

## עדכון HTML להצגת נתונים

כעת, כשיש לנו את נתוני המשתמש, עלינו לעדכן את ה-HTML הקיים כדי להציג אותם. אנחנו כבר יודעים כיצד לשלוף אלמנט מה-DOM באמצעות לדוגמה `document.getElementById()`. לאחר שיש לנו אלמנט בסיסי, הנה כמה APIs שניתן להשתמש בהם כדי לשנות אותו או להוסיף לו אלמנטים ילדים:

- באמצעות המאפיין [`textContent`](https://developer.mozilla.org/docs/Web/API/Node/textContent) ניתן לשנות את הטקסט של אלמנט. שימו לב ששינוי ערך זה מסיר את כל הילדים של האלמנט (אם ישנם) ומחליף אותם בטקסט שסופק. לכן, זו גם שיטה יעילה להסרת כל הילדים של אלמנט נתון על ידי הקצאת מחרוזת ריקה `''` אליו.

- באמצעות [`document.createElement()`](https://developer.mozilla.org/docs/Web/API/Document/createElement) יחד עם השיטה [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append) ניתן ליצור ולצרף אלמנטים ילדים חדשים.

✅ באמצעות המאפיין [`innerHTML`](https://developer.mozilla.org/docs/Web/API/Element/innerHTML) של אלמנט ניתן גם לשנות את תוכן ה-HTML שלו, אך יש להימנע משימוש בו מכיוון שהוא פגיע להתקפות [XSS (Cross-site scripting)](https://developer.mozilla.org/docs/Glossary/Cross-site_scripting).

### משימה

לפני שנעבור למסך לוח הבקרה, יש דבר נוסף שעלינו לעשות בדף ההתחברות. כרגע, אם תנסה להתחבר עם שם משתמש שאינו קיים, הודעה מוצגת בקונסול אך עבור משתמש רגיל שום דבר לא משתנה ואין לך מושג מה קורה.

נוסיף אלמנט placeholder בטופס ההתחברות שבו נוכל להציג הודעת שגיאה במידת הצורך. מקום טוב יהיה ממש לפני כפתור ההתחברות `<button>`:

```html
...
<div id="loginError"></div>
<button>Login</button>
...
```

אלמנט `<div>` זה ריק, כלומר שום דבר לא יוצג על המסך עד שנוסיף לו תוכן. אנו גם נותנים לו `id` כך שנוכל לשלוף אותו בקלות באמצעות JavaScript.

חזור לקובץ `app.js` ויצר פונקציית עזר חדשה בשם `updateElement`:

```js
function updateElement(id, text) {
  const element = document.getElementById(id);
  element.textContent = text;
}
```

פונקציה זו די פשוטה: בהתחשב ב-*id* של אלמנט וב-*text*, היא תעדכן את תוכן הטקסט של אלמנט ה-DOM עם ה-`id` המתאים. נשתמש בשיטה זו במקום הודעת השגיאה הקודמת בפונקציית `login`:

```js
if (data.error) {
  return updateElement('loginError', data.error);
}
```

כעת, אם תנסה להתחבר עם חשבון לא תקין, תראה משהו כזה:

![צילום מסך המציג את הודעת השגיאה במהלך התחברות](../../../../translated_images/login-error.416fe019b36a63276764c2349df5d99e04ebda54fefe60c715ee87a28d5d4ad0.he.png)

כעת יש לנו טקסט שגיאה שמופיע חזותית, אך אם תנסה זאת עם קורא מסך תבחין ששום דבר לא מוכרז. כדי שטקסט שנוסף לדף באופן דינמי יוכרז על ידי קוראי מסך, יש להשתמש במשהו שנקרא [אזור חי](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/ARIA_Live_Regions). כאן נשתמש בסוג מסוים של אזור חי שנקרא התראה:

```html
<div id="loginError" role="alert"></div>
```

הטמיעו את אותו התנהגות עבור שגיאות בפונקציית `register` (אל תשכחו לעדכן את ה-HTML).

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

> הערה: כדי להקל עליכם, ניתן להשתמש בחשבון `test` הקיים שכבר מאוכלס בנתונים.

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

✅ מכיוון שתיאור החשבון מתפקד ככותרת לתוכן שמתחתיו, הוא מסומן סמנטית ככותרת. למדו עוד על [מבנה כותרות](https://www.nomensa.com/blog/2017/how-structure-headings-web-accessibility) וכיצד הוא חשוב לנגישות, ובחנו את הדף באופן ביקורתי כדי לקבוע מה עוד יכול להיות כותרת.

לאחר מכן, ניצור פונקציה חדשה ב-`app.js` למילוי ה-placeholder:

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

ראשית, אנו בודקים שיש לנו את נתוני החשבון הדרושים לפני שנמשיך. לאחר מכן, אנו משתמשים בפונקציה `updateElement()` שיצרנו קודם כדי לעדכן את ה-HTML.

> כדי להפוך את תצוגת היתרה ליפה יותר, אנו משתמשים בשיטה [`toFixed(2)`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) כדי להציג את הערך עם 2 ספרות אחרי הנקודה העשרונית.

כעת עלינו לקרוא לפונקציית `updateDashboard()` שלנו בכל פעם שדף לוח הבקרה נטען. אם כבר סיימתם את [משימת שיעור 1](../1-template-route/assignment.md) זה אמור להיות פשוט, אחרת תוכלו להשתמש במימוש הבא.

הוסיפו קוד זה לסוף פונקציית `updateRoute()`:

```js
if (typeof route.init === 'function') {
  route.init();
}
```

ועדכנו את הגדרת המסלולים עם:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: updateDashboard }
};
```

עם שינוי זה, בכל פעם שדף לוח הבקרה מוצג, הפונקציה `updateDashboard()` נקראת. לאחר התחברות, תוכלו לראות את היתרה, המטבע והתיאור של החשבון.

## יצירת שורות טבלה דינמיות עם תבניות HTML

בשיעור הראשון [השתמשנו בתבניות HTML](../1-template-route/README.md) יחד עם השיטה [`appendChild()`](https://developer.mozilla.org/docs/Web/API/Node/appendChild) כדי ליישם את הניווט באפליקציה שלנו. תבניות יכולות להיות גם קטנות יותר ולהשתמש בהן כדי לאכלס חלקים חוזרים בדף באופן דינמי.

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

תבנית זו מייצגת שורת טבלה אחת, עם 3 העמודות שאנו רוצים לאכלס: *תאריך*, *אובייקט* ו-*סכום* של עסקה.

לאחר מכן, הוסיפו את המאפיין `id` לאלמנט `<tbody>` של הטבלה בתוך תבנית לוח הבקרה כדי להקל על מציאתו באמצעות JavaScript:

```html
<tbody id="transactions"></tbody>
```

ה-HTML שלנו מוכן, נעבור לקוד JavaScript וניצור פונקציה חדשה בשם `createTransactionRow`:

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

פונקציה זו עושה בדיוק מה ששמה מרמז: באמצעות התבנית שיצרנו קודם, היא יוצרת שורת טבלה חדשה וממלאת את תוכנה באמצעות נתוני עסקה. נשתמש בזה בפונקציה `updateDashboard()` שלנו כדי לאכלס את הטבלה:

```js
const transactionsRows = document.createDocumentFragment();
for (const transaction of account.transactions) {
  const transactionRow = createTransactionRow(transaction);
  transactionsRows.appendChild(transactionRow);
}
updateElement('transactions', transactionsRows);
```

כאן אנו משתמשים בשיטה [`document.createDocumentFragment()`](https://developer.mozilla.org/docs/Web/API/Document/createDocumentFragment) שיוצרת פרגמנט DOM חדש שעליו ניתן לעבוד, לפני שמחברים אותו לטבלת ה-HTML שלנו.

יש עדיין דבר אחד נוסף שעלינו לעשות לפני שהקוד הזה יעבוד, מכיוון שפונקציית `updateElement()` שלנו תומכת כרגע בתוכן טקסט בלבד. נשנה את הקוד שלה מעט:

```js
function updateElement(id, textOrNode) {
  const element = document.getElementById(id);
  element.textContent = ''; // Removes all children
  element.append(textOrNode);
}
```

אנו משתמשים בשיטה [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append) מכיוון שהיא מאפשרת לצרף טקסט או [Nodes של DOM](https://developer.mozilla.org/docs/Web/API/Node) לאלמנט אב, מה שמתאים לכל מקרי השימוש שלנו.
אם תנסה להשתמש בחשבון `test` כדי להתחבר, כעת תוכל לראות רשימת עסקאות בלוח הבקרה 🎉.

---

## 🚀 אתגר

עבדו יחד כדי לגרום לדף לוח הבקרה להיראות כמו אפליקציית בנק אמיתית. אם כבר עיצבתם את האפליקציה שלכם, נסו להשתמש ב-[media queries](https://developer.mozilla.org/docs/Web/CSS/Media_Queries) כדי ליצור [עיצוב רספונסיבי](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks) שעובד היטב גם במחשבים שולחניים וגם במכשירים ניידים.

הנה דוגמה לדף לוח בקרה מעוצב:

![צילום מסך של תוצאה לדוגמה של לוח הבקרה לאחר עיצוב](../../../../translated_images/screen2.123c82a831a1d14ab2061994be2fa5de9cec1ce651047217d326d4773a6348e4.he.png)

## שאלון לאחר ההרצאה

[שאלון לאחר ההרצאה](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/46)

## משימה

[שפרו והוסיפו הערות לקוד שלכם](assignment.md)

---

**כתב ויתור**:  
מסמך זה תורגם באמצעות שירות תרגום מבוסס בינה מלאכותית [Co-op Translator](https://github.com/Azure/co-op-translator). למרות שאנו שואפים לדיוק, יש לקחת בחשבון שתרגומים אוטומטיים עשויים להכיל שגיאות או אי דיוקים. המסמך המקורי בשפתו המקורית צריך להיחשב כמקור סמכותי. עבור מידע קריטי, מומלץ להשתמש בתרגום מקצועי על ידי אדם. איננו נושאים באחריות לאי הבנות או לפרשנויות שגויות הנובעות משימוש בתרגום זה.