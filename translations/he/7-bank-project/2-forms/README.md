<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8baca047d77a5f43fa4099c0578afa42",
  "translation_date": "2025-08-29T01:08:46+00:00",
  "source_file": "7-bank-project/2-forms/README.md",
  "language_code": "he"
}
-->
# בניית אפליקציית בנק חלק 2: יצירת טופס כניסה והרשמה

## שאלון לפני השיעור

[שאלון לפני השיעור](https://ff-quizzes.netlify.app/web/quiz/43)

### הקדמה

בכמעט כל אפליקציית אינטרנט מודרנית, ניתן ליצור חשבון אישי כדי לקבל מרחב פרטי משלך. מכיוון שמשתמשים רבים יכולים לגשת לאפליקציה בו זמנית, יש צורך במנגנון שיאפשר לשמור את הנתונים האישיים של כל משתמש בנפרד ולהציג את המידע הרלוונטי. לא נעסוק בנושא [ניהול זהות משתמש בצורה מאובטחת](https://en.wikipedia.org/wiki/Authentication), שכן זהו נושא רחב בפני עצמו, אך נדאג שכל משתמש יוכל ליצור חשבון בנק אחד (או יותר) באפליקציה שלנו.

בחלק הזה נשתמש בטפסי HTML כדי להוסיף כניסה והרשמה לאפליקציה שלנו. נלמד כיצד לשלוח את הנתונים ל-API של השרת בצורה תכנותית, ולבסוף נגדיר כללי אימות בסיסיים עבור הקלטים של המשתמש.

### דרישות מקדימות

עליכם להשלים את [תבניות HTML וניתוב](../1-template-route/README.md) של האפליקציה עבור שיעור זה. כמו כן, יש להתקין את [Node.js](https://nodejs.org) ולהריץ את [API של השרת](../api/README.md) באופן מקומי כדי שתוכלו לשלוח נתונים ליצירת חשבונות.

**שימו לב**
יהיו לכם שני טרמינלים פעילים בו זמנית כפי שמפורט להלן:
1. עבור אפליקציית הבנק הראשית שבנינו בשיעור [תבניות HTML וניתוב](../1-template-route/README.md)
2. עבור [API של שרת אפליקציית הבנק](../api/README.md) שהגדרנו קודם.

יש להפעיל את שני השרתים כדי להמשיך עם השיעור. הם מאזינים על פורטים שונים (פורט `3000` ופורט `5000`), כך שהכול אמור לעבוד בצורה תקינה.

ניתן לבדוק שהשרת פועל כראוי על ידי ביצוע הפקודה הבאה בטרמינל:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## טופס ושליטה

אלמנט `<form>` עוטף חלק במסמך HTML שבו המשתמש יכול להזין ולשלוח נתונים באמצעות רכיבי ממשק אינטראקטיביים. ישנם סוגים רבים של רכיבי ממשק משתמש (UI) שניתן להשתמש בהם בתוך טופס, כאשר הנפוצים ביותר הם אלמנטים `<input>` ו-`<button>`.

ישנם סוגים רבים ושונים של [קלטים](https://developer.mozilla.org/docs/Web/HTML/Element/input). לדוגמה, כדי ליצור שדה שבו המשתמש יכול להזין את שם המשתמש שלו, ניתן להשתמש ב:

```html
<input id="username" name="username" type="text">
```

המאפיין `name` ישמש כשם המאפיין כאשר נתוני הטופס יישלחו. המאפיין `id` משמש לקשר בין `<label>` לבין רכיב הטופס.

> עיינו ברשימה המלאה של [סוגי `<input>`](https://developer.mozilla.org/docs/Web/HTML/Element/input) ו-[רכיבי טופס אחרים](https://developer.mozilla.org/docs/Learn/Forms/Other_form_controls) כדי לקבל מושג על כל רכיבי הממשק הטבעיים שתוכלו להשתמש בהם בעת בניית ממשק המשתמש שלכם.

✅ שימו לב ש-`<input>` הוא [אלמנט ריק](https://developer.mozilla.org/docs/Glossary/Empty_element) שאין להוסיף לו תג סגירה תואם. עם זאת, ניתן להשתמש בסימון `<input/>` הסוגר את האלמנט בעצמו, אך זה אינו חובה.

אלמנט `<button>` בתוך טופס הוא מעט מיוחד. אם לא תציינו את מאפיין `type`, הוא יגיש את נתוני הטופס לשרת באופן אוטומטי כאשר לוחצים עליו. הנה הערכים האפשריים עבור `type`:

- `submit`: ברירת המחדל בתוך `<form>`, הכפתור מפעיל את פעולת שליחת הטופס.
- `reset`: הכפתור מאפס את כל רכיבי הטופס לערכים הראשוניים שלהם.
- `button`: אינו מקצה פעולה ברירת מחדל כאשר לוחצים על הכפתור. ניתן להקצות לו פעולות מותאמות אישית באמצעות JavaScript.

### משימה

נתחיל בהוספת טופס לתבנית `login`. נצטרך שדה *שם משתמש* וכפתור *כניסה*.

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <h2>Login</h2>
    <form id="loginForm">
      <label for="username">Username</label>
      <input id="username" name="user" type="text">
      <button>Login</button>
    </form>
  </section>
</template>
```

אם תסתכלו מקרוב, תוכלו להבחין שהוספנו גם אלמנט `<label>` כאן. אלמנטים `<label>` משמשים להוספת שם לרכיבי ממשק משתמש, כמו שדה שם המשתמש שלנו. תוויות חשובות לקריאות הטפסים שלכם, אך הן גם מביאות יתרונות נוספים:

- על ידי קישור תווית לרכיב טופס, היא עוזרת למשתמשים המשתמשים בטכנולוגיות מסייעות (כמו קורא מסך) להבין איזה נתונים הם אמורים לספק.
- ניתן ללחוץ על התווית כדי למקד ישירות את הקלט המשויך, מה שמקל על הגישה במכשירים מבוססי מסך מגע.

> [נגישות](https://developer.mozilla.org/docs/Learn/Accessibility/What_is_accessibility) באינטרנט היא נושא חשוב מאוד שלעתים קרובות מתעלמים ממנו. בזכות [אלמנטים HTML סמנטיים](https://developer.mozilla.org/docs/Learn/Accessibility/HTML) לא קשה ליצור תוכן נגיש אם משתמשים בהם בצורה נכונה. תוכלו [לקרוא עוד על נגישות](https://developer.mozilla.org/docs/Web/Accessibility) כדי להימנע מטעויות נפוצות ולהפוך למפתחים אחראיים.

כעת נוסיף טופס שני להרשמה, ממש מתחת לטופס הקודם:

```html
<hr/>
<h2>Register</h2>
<form id="registerForm">
  <label for="user">Username</label>
  <input id="user" name="user" type="text">
  <label for="currency">Currency</label>
  <input id="currency" name="currency" type="text" value="$">
  <label for="description">Description</label>
  <input id="description" name="description" type="text">
  <label for="balance">Current balance</label>
  <input id="balance" name="balance" type="number" value="0">
  <button>Register</button>
</form>
```

באמצעות מאפיין `value` ניתן להגדיר ערך ברירת מחדל עבור קלט מסוים. שימו לב גם שהקלט עבור `balance` הוא מסוג `number`. האם הוא נראה שונה מהקלטים האחרים? נסו לתקשר איתו.

✅ האם אתם יכולים לנווט ולהשתמש בטפסים רק באמצעות מקלדת? איך הייתם עושים זאת?

## שליחת נתונים לשרת

כעת, לאחר שיש לנו ממשק משתמש פונקציונלי, השלב הבא הוא לשלוח את הנתונים לשרת. בואו נעשה בדיקה מהירה באמצעות הקוד הנוכחי שלנו: מה קורה אם תלחצו על כפתור *כניסה* או *הרשמה*?

האם שמתם לב לשינוי בכתובת ה-URL של הדפדפן?

![צילום מסך של שינוי כתובת ה-URL בדפדפן לאחר לחיצה על כפתור ההרשמה](../../../../translated_images/click-register.e89a30bf0d4bc9ca867dc537c4cea679a7c26368bd790969082f524fed2355bc.he.png)

פעולת ברירת המחדל של `<form>` היא לשלוח את הטופס לכתובת השרת הנוכחית באמצעות [שיטת GET](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3), תוך הוספת נתוני הטופס ישירות לכתובת ה-URL. לשיטה זו יש כמה חסרונות:

- הנתונים שנשלחים מוגבלים בגודלם (כ-2000 תווים)
- הנתונים גלויים ישירות בכתובת ה-URL (לא אידיאלי עבור סיסמאות)
- היא אינה עובדת עם העלאות קבצים

לכן ניתן לשנות אותה לשימוש בשיטת [POST](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5) ששולחת את נתוני הטופס לשרת בגוף הבקשה של HTTP, ללא המגבלות הקודמות.

> בעוד ש-POST היא השיטה הנפוצה ביותר לשליחת נתונים, [במצבים מסוימים](https://www.w3.org/2001/tag/doc/whenToUseGet.html) עדיף להשתמש בשיטת GET, למשל בעת יישום שדה חיפוש.

### משימה

הוסיפו מאפייני `action` ו-`method` לטופס ההרשמה:

```html
<form id="registerForm" action="//localhost:5000/api/accounts" method="POST">
```

כעת נסו להירשם לחשבון חדש עם שמכם. לאחר לחיצה על כפתור *הרשמה* אתם אמורים לראות משהו כזה:

![חלון דפדפן בכתובת localhost:5000/api/accounts, מציג מחרוזת JSON עם נתוני משתמש](../../../../translated_images/form-post.61de4ca1b964d91a9e338416e19f218504dd0af5f762fbebabfe7ae80edf885f.he.png)

אם הכול עובד כראוי, השרת אמור לענות לבקשה שלכם עם תגובת [JSON](https://www.json.org/json-en.html) המכילה את נתוני החשבון שנוצר.

✅ נסו להירשם שוב עם אותו שם. מה קורה?

## שליחת נתונים ללא טעינת הדף

כפי שכנראה שמתם לב, יש בעיה קטנה בגישה שבה השתמשנו: כאשר שולחים את הטופס, אנחנו יוצאים מהאפליקציה והדפדפן מפנה לכתובת ה-URL של השרת. אנחנו מנסים להימנע מכל טעינת דף באפליקציה שלנו, שכן אנחנו יוצרים [אפליקציה חד-עמודית (SPA)](https://en.wikipedia.org/wiki/Single-page_application).

כדי לשלוח את נתוני הטופס לשרת מבלי לגרום לטעינת דף, עלינו להשתמש בקוד JavaScript. במקום לשים כתובת URL במאפיין `action` של אלמנט `<form>`, ניתן להשתמש בכל קוד JavaScript שמתחיל במחרוזת `javascript:` כדי לבצע פעולה מותאמת אישית. שימוש בגישה זו גם אומר שתצטרכו ליישם כמה משימות שהדפדפן ביצע באופן אוטומטי:

- אחזור נתוני הטופס
- המרה וקידוד נתוני הטופס לפורמט מתאים
- יצירת בקשת HTTP ושליחתה לשרת

### משימה

החליפו את מאפיין `action` של טופס ההרשמה ב:

```html
<form id="registerForm" action="javascript:register()">
```

פתחו את `app.js` והוסיפו פונקציה חדשה בשם `register`:

```js
function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const data = Object.fromEntries(formData);
  const jsonData = JSON.stringify(data);
}
```

כאן אנחנו מאחזרים את אלמנט הטופס באמצעות `getElementById()` ומשתמשים בעוזר [`FormData`](https://developer.mozilla.org/docs/Web/API/FormData) כדי לחלץ את הערכים מרכיבי הטופס כסט של זוגות מפתח/ערך. לאחר מכן אנו ממירים את הנתונים לאובייקט רגיל באמצעות [`Object.fromEntries()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries) ולבסוף מסדרים את הנתונים ל-[JSON](https://www.json.org/json-en.html), פורמט נפוץ להחלפת נתונים באינטרנט.

הנתונים מוכנים כעת לשליחה לשרת. צרו פונקציה חדשה בשם `createAccount`:

```js
async function createAccount(account) {
  try {
    const response = await fetch('//localhost:5000/api/accounts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: account
    });
    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}
```

מה עושה הפונקציה הזו? ראשית, שימו לב למילת המפתח `async` כאן. משמעות הדבר היא שהפונקציה מכילה קוד שיבוצע [באופן אסינכרוני](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function). כאשר משתמשים במילת המפתח `await`, ניתן להמתין לביצוע קוד אסינכרוני - כמו המתנה לתשובת השרת כאן - לפני שממשיכים.

הנה סרטון קצר על שימוש ב-`async/await`:

[![Async and Await לניהול הבטחות](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async and Await לניהול הבטחות")

> 🎥 לחצו על התמונה למעלה לסרטון על async/await.

אנחנו משתמשים ב-API של `fetch()` כדי לשלוח נתוני JSON לשרת. שיטה זו מקבלת שני פרמטרים:

- כתובת ה-URL של השרת, לכן אנחנו מחזירים כאן את `//localhost:5000/api/accounts`.
- הגדרות הבקשה. כאן אנחנו מגדירים את השיטה ל-`POST` ומספקים את `body` של הבקשה. מכיוון שאנחנו שולחים נתוני JSON לשרת, עלינו גם להגדיר את כותרת `Content-Type` ל-`application/json` כדי שהשרת ידע כיצד לפרש את התוכן.

מכיוון שהשרת יענה לבקשה עם JSON, ניתן להשתמש ב-`await response.json()` כדי לנתח את תוכן ה-JSON ולהחזיר את האובייקט המתקבל. שימו לב ששיטה זו היא אסינכרונית, ולכן אנחנו משתמשים במילת המפתח `await` כאן לפני ההחזרה כדי לוודא שכל שגיאה במהלך הניתוח תיתפס גם כן.

כעת הוסיפו קצת קוד לפונקציה `register` כדי לקרוא ל-`createAccount()`:

```js
const result = await createAccount(jsonData);
```

מכיוון שאנחנו משתמשים במילת המפתח `await` כאן, עלינו להוסיף את מילת המפתח `async` לפני הפונקציה register:

```js
async function register() {
```

לבסוף, נוסיף כמה לוגים כדי לבדוק את התוצאה. הפונקציה הסופית צריכה להיראות כך:

```js
async function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const jsonData = JSON.stringify(Object.fromEntries(formData));
  const result = await createAccount(jsonData);

  if (result.error) {
    return console.log('An error occurred:', result.error);
  }

  console.log('Account created!', result);
}
```

זה היה קצת ארוך, אבל הגענו לשם! אם תפתחו את [כלי המפתחים של הדפדפן](https://developer.mozilla.org/docs/Learn/Common_questions/What_are_browser_developer_tools), ותנסו להירשם לחשבון חדש, לא תראו שום שינוי בדף האינטרנט, אך הודעה תופיע בקונסולה המאשרת שהכול עובד.

![צילום מסך המציג הודעת לוג בקונסולת הדפדפן](../../../../translated_images/browser-console.efaf0b51aaaf67782a29e1a0bb32cc063f189b18e894eb5926e02f1abe864ec2.he.png)

✅ האם לדעתכם הנתונים נשלחים לשרת בצורה מאובטחת? מה אם מישהו יוכל ליירט את הבקשה? תוכלו לקרוא על [HTTPS](https://en.wikipedia.org/wiki/HTTPS) כדי ללמוד עוד על תקשורת נתונים מאובטחת.

## אימות נתונים

אם תנסו להירשם לחשבון חדש מבלי להגדיר שם משתמש תחילה, תוכלו לראות שהשרת מחזיר שגיאה עם קוד סטטוס [400 (בקשה שגויה)](https://developer.mozilla.org/docs/Web/HTTP/Status/400#:~:text=The%20HyperText%20Transfer%20Protocol%20(HTTP,%2C%20or%20deceptive%20request%20routing).).

לפני שליחת נתונים לשרת, מומלץ [לאמת את נתוני הטופס](https://developer.mozilla.org/docs/Learn/Forms/Form_validation) מראש כאשר הדבר אפשרי, כדי לוודא שאתם שולחים בקשה תקפה. רכיבי טפסים ב-HTML5 מספקים אימות מובנה באמצעות מאפיינים שונים:

- `required`: השדה חייב להיות מלא אחרת הטופס לא יכול להישלח.
- `minlength` ו-`maxlength`: מגדירים את מספר התווים המינימלי והמקסימלי בשדות טקסט.
- `min` ו-`max`: מגדירים את הערך המינימלי והמקסימלי של שדה מספרי.
- `type`: מגדיר את סוג הנתונים הצפוי, כמו `number`, `email`, `file` או [סוגים מובנים אחרים](https://developer.mozilla.org/docs/Web/HTML/Element/input). מאפיין זה עשוי גם לשנות את התצוגה החזותית של רכיב הטופס.
- `pattern`: מאפשר להגדיר [ביטוי רגולרי](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Regular_Expressions) כדי לבדוק אם הנתונים שהוזנו תקפים או לא.
טיפ: ניתן להתאים את המראה של פקדי הטופס שלך בהתאם לשאלה אם הם תקינים או לא, באמצעות פסאודו-מחלקות ה-CSS `:valid` ו-`:invalid`.
### משימה

ישנם שני שדות חובה ליצירת חשבון חדש תקין: שם משתמש ומטבע. שאר השדות הם אופציונליים. עדכנו את ה-HTML של הטופס, תוך שימוש בתכונה `required` ובטקסט בתווית השדה כך ש:

```html
<label for="user">Username (required)</label>
<input id="user" name="user" type="text" required>
...
<label for="currency">Currency (required)</label>
<input id="currency" name="currency" type="text" value="$" required>
```

למרות שמימוש השרת הספציפי הזה אינו אוכף מגבלות מסוימות על אורך מקסימלי של השדות, תמיד מומלץ להגדיר מגבלות סבירות עבור כל הזנת טקסט של משתמש.

הוסיפו תכונה `maxlength` לשדות הטקסט:

```html
<input id="user" name="user" type="text" maxlength="20" required>
...
<input id="currency" name="currency" type="text" value="$" maxlength="5" required>
...
<input id="description" name="description" type="text" maxlength="100">
```

כעת, אם תלחצו על כפתור *Register* ושדה כלשהו אינו עומד בכללי האימות שהגדרנו, תראו משהו כזה:

![צילום מסך שמראה את שגיאת האימות בעת ניסיון לשלוח את הטופס](../../../../translated_images/validation-error.8bd23e98d416c22f80076d04829a4bb718e0e550fd622862ef59008ccf0d5dce.he.png)

אימות כזה שמתבצע *לפני* שליחת נתונים לשרת נקרא **אימות בצד הלקוח**. אך שימו לב שלא תמיד ניתן לבצע את כל הבדיקות מבלי לשלוח את הנתונים. לדוגמה, לא נוכל לבדוק כאן אם כבר קיים חשבון עם אותו שם משתמש מבלי לשלוח בקשה לשרת. אימות נוסף שמתבצע בשרת נקרא **אימות בצד השרת**.

בדרך כלל יש צורך ליישם את שניהם, וכשמשתמשים באימות בצד הלקוח זה משפר את חוויית המשתמש על ידי מתן משוב מיידי, אך אימות בצד השרת הוא קריטי כדי לוודא שהנתונים שאתם מעבדים הם תקינים ובטוחים.

---

## 🚀 אתגר

הציגו הודעת שגיאה ב-HTML אם המשתמש כבר קיים.

הנה דוגמה לאיך עמוד ההתחברות הסופי יכול להיראות לאחר מעט עיצוב:

![צילום מסך של עמוד ההתחברות לאחר הוספת סגנונות CSS](../../../../translated_images/result.96ef01f607bf856aa9789078633e94a4f7664d912f235efce2657299becca483.he.png)

## שאלון לאחר ההרצאה

[שאלון לאחר ההרצאה](https://ff-quizzes.netlify.app/web/quiz/44)

## סקירה ולימוד עצמי

מפתחים הפכו יצירתיים מאוד בכל הנוגע לבניית טפסים, במיוחד בכל הנוגע לאסטרטגיות אימות. למדו על זרימות טפסים שונות על ידי עיון ב-[CodePen](https://codepen.com); האם תוכלו למצוא טפסים מעניינים ומעוררי השראה?

## משימה

[עצבו את אפליקציית הבנק שלכם](assignment.md)

---

**כתב ויתור**:  
מסמך זה תורגם באמצעות שירות תרגום מבוסס בינה מלאכותית [Co-op Translator](https://github.com/Azure/co-op-translator). בעוד שאנו שואפים לדיוק, יש להיות מודעים לכך שתרגומים אוטומטיים עשויים להכיל שגיאות או אי-דיוקים. המסמך המקורי בשפתו המקורית נחשב למקור הסמכותי. למידע קריטי, מומלץ להשתמש בתרגום מקצועי על ידי בני אדם. איננו נושאים באחריות לכל אי-הבנה או פרשנות שגויה הנובעת משימוש בתרגום זה.