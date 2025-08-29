<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "92e136090efc4341b1d51c37924c1802",
  "translation_date": "2025-08-29T01:15:49+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "he"
}
-->
# יסודות JavaScript: מתודות ופונקציות

![JavaScript Basics - Functions](../../../../translated_images/webdev101-js-functions.be049c4726e94f8b7605c36330ac42eeb5cd8ed02bcdd60fdac778174d6cb865.he.png)
> איור מאת [Tomomi Imura](https://twitter.com/girlie_mac)

## חידון לפני ההרצאה
[חידון לפני ההרצאה](https://ff-quizzes.netlify.app)

כשאנחנו חושבים על כתיבת קוד, אנחנו תמיד רוצים לוודא שהקוד שלנו קריא. למרות שזה נשמע מנוגד לאינטואיציה, קוד נקרא הרבה יותר פעמים מאשר נכתב. אחד הכלים המרכזיים בארגז הכלים של מפתח להבטחת קוד שניתן לתחזוקה הוא **פונקציה**.

[![Methods and Functions](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Methods and Functions")

> 🎥 לחצו על התמונה למעלה לצפייה בסרטון על מתודות ופונקציות.

> ניתן לקחת את השיעור הזה ב-[Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon)!

## פונקציות

בבסיסה, פונקציה היא בלוק של קוד שניתן להריץ לפי דרישה. זה מושלם לתרחישים שבהם אנחנו צריכים לבצע את אותה משימה מספר פעמים; במקום לשכפל את הלוגיקה במיקומים שונים (מה שהיה מקשה על עדכון הקוד בעתיד), אנחנו יכולים לרכז אותה במקום אחד ולקרוא לה בכל פעם שנרצה לבצע את הפעולה - אפשר אפילו לקרוא לפונקציות מתוך פונקציות אחרות!

לא פחות חשוב הוא היכולת לתת שם לפונקציה. למרות שזה עשוי להיראות טריוויאלי, השם מספק דרך מהירה לתעד חלק מסוים בקוד. אפשר לחשוב על זה כמו תווית על כפתור. אם אני לוחץ על כפתור שכתוב עליו "בטל טיימר", אני יודע שהוא יעצור את השעון.

## יצירה וקריאה לפונקציה

התחביר של פונקציה נראה כך:

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

אם הייתי רוצה ליצור פונקציה שמציגה ברכה, זה עשוי להיראות כך:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

בכל פעם שנרצה לקרוא (או להפעיל) את הפונקציה שלנו, נשתמש בשם הפונקציה ואחריו `()`. שווה לציין שהפונקציה שלנו יכולה להיות מוגדרת לפני או אחרי שאנחנו מחליטים לקרוא לה; המהדר של JavaScript ימצא אותה בשבילנו.

```javascript
// calling our function
displayGreeting();
```

> **NOTE:** יש סוג מיוחד של פונקציה שנקרא **מתודה**, שכבר השתמשתם בו! למעשה, ראינו זאת בדוגמה שלנו למעלה כששימושנו ב-`console.log`. מה שמבדיל מתודה מפונקציה הוא שמתודה מחוברת לאובייקט (במקרה שלנו `console`), בעוד שפונקציה היא עצמאית. תיתקלו בהרבה מפתחים שמשתמשים במונחים הללו לסירוגין.

### עקרונות מנחים לכתיבת פונקציות

יש כמה עקרונות מנחים שכדאי לזכור כשכותבים פונקציות:

- כמו תמיד, השתמשו בשמות תיאוריים כדי שתדעו מה הפונקציה עושה.
- השתמשו ב-**camelCasing** כדי לשלב מילים.
- שמרו על הפונקציות ממוקדות במשימה ספציפית.

## העברת מידע לפונקציה

כדי להפוך פונקציה לשימושית יותר, לעיתים קרובות נרצה להעביר לה מידע. אם נחשוב על הדוגמה שלנו `displayGreeting`, היא תציג רק **Hello, world!**. לא הפונקציה הכי שימושית שאפשר ליצור. אם נרצה להפוך אותה לגמישה יותר, כמו לאפשר למישהו לציין את שם האדם לברך, נוכל להוסיף **פרמטר**. פרמטר (שלעיתים נקרא גם **ארגומנט**) הוא מידע נוסף שנשלח לפונקציה.

פרמטרים נרשמים בחלק ההגדרה בתוך סוגריים ומופרדים בפסיקים כך:

```javascript
function name(param, param2, param3) {

}
```

נוכל לעדכן את `displayGreeting` כך שתקבל שם ותציג אותו.

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

כשנרצה לקרוא לפונקציה שלנו ולהעביר לה את הפרמטר, נציין אותו בתוך הסוגריים.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

## ערכי ברירת מחדל

נוכל להפוך את הפונקציה שלנו לגמישה עוד יותר על ידי הוספת פרמטרים נוספים. אבל מה אם לא נרצה לדרוש שכל ערך יוגדר? בדוגמת הברכה שלנו, נוכל להשאיר את השם כדרישה (אנחנו צריכים לדעת את מי לברך), אבל נרצה לאפשר להתאים אישית את הברכה עצמה לפי הצורך. אם מישהו לא רוצה להתאים אותה, נספק ערך ברירת מחדל במקום. כדי לספק ערך ברירת מחדל לפרמטר, נגדיר אותו באותו אופן שבו אנחנו מגדירים ערך למשתנה - `parameterName = 'defaultValue'`. לדוגמה מלאה:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

כשנקרא לפונקציה, נוכל להחליט אם להגדיר ערך עבור `salutation`.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

## ערכים מוחזרים

עד עכשיו הפונקציות שיצרנו תמיד פלטו למסוף ([console](https://developer.mozilla.org/docs/Web/API/console)). לפעמים זה בדיוק מה שאנחנו מחפשים, במיוחד כשאנחנו יוצרים פונקציות שיקראו לשירותים אחרים. אבל מה אם נרצה ליצור פונקציה עזר שתבצע חישוב ותחזיר את הערך כדי שנוכל להשתמש בו במקום אחר?

נוכל לעשות זאת באמצעות **ערך מוחזר**. ערך מוחזר מוחזר על ידי הפונקציה, וניתן לאחסן אותו במשתנה בדיוק כמו שנוכל לאחסן ערך כמו מחרוזת או מספר.

אם פונקציה מחזירה משהו, אז משתמשים במילת המפתח `return`. מילת המפתח `return` מצפה לערך או הפניה למה שמוחזר, כך:

```javascript
return myVariable;
```  

נוכל ליצור פונקציה שתיצור הודעת ברכה ותחזיר את הערך למי שקורא לה.

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

כשנקרא לפונקציה הזו, נאחסן את הערך במשתנה. זה דומה מאוד לאופן שבו היינו מגדירים משתנה לערך סטטי (כמו `const name = 'Christopher'`).

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

## פונקציות כפרמטרים לפונקציות

כשתתקדמו בקריירת התכנות שלכם, תיתקלו בפונקציות שמקבלות פונקציות כפרמטרים. הטריק הזה נפוץ כשאנחנו לא יודעים מתי משהו יתרחש או יסתיים, אבל אנחנו יודעים שאנחנו צריכים לבצע פעולה בתגובה.

לדוגמה, חשבו על [setTimeout](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout), שמתחיל טיימר ויבצע קוד כשהוא מסתיים. אנחנו צריכים לומר לו איזה קוד אנחנו רוצים לבצע. נשמע כמו עבודה מושלמת לפונקציה!

אם תריצו את הקוד למטה, אחרי 3 שניות תראו את ההודעה **3 seconds has elapsed**.

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

### פונקציות אנונימיות

בואו נסתכל שוב על מה שבנינו. אנחנו יוצרים פונקציה עם שם שתשמש פעם אחת בלבד. ככל שהאפליקציה שלנו תסתבך, נוכל לראות את עצמנו יוצרים הרבה פונקציות שישמשו רק פעם אחת. זה לא אידיאלי. מתברר שלא תמיד אנחנו צריכים לספק שם!

כשאנחנו מעבירים פונקציה כפרמטר, נוכל לדלג על יצירתה מראש ולבנות אותה כחלק מהפרמטר. נשתמש באותה מילת מפתח `function`, אבל נבנה אותה כפרמטר.

בואו נכתוב מחדש את הקוד למעלה כך שישתמש בפונקציה אנונימית:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

אם תריצו את הקוד החדש שלנו, תבחינו שאנחנו מקבלים את אותן תוצאות. יצרנו פונקציה, אבל לא היינו צריכים לתת לה שם!

### פונקציות חץ

קיצור נפוץ בהרבה שפות תכנות (כולל JavaScript) הוא היכולת להשתמש במה שנקרא **פונקציות חץ** או **פונקציות חץ שמן**. הן משתמשות בסימון מיוחד `=>`, שנראה כמו חץ - ומכאן השם! באמצעות `=>`, אנחנו יכולים לדלג על מילת המפתח `function`.

בואו נכתוב מחדש את הקוד שלנו פעם נוספת כך שישתמש בפונקציות חץ:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

### מתי להשתמש בכל אסטרטגיה

עכשיו ראיתם שיש לנו שלוש דרכים להעביר פונקציה כפרמטר, ואולי אתם תוהים מתי להשתמש בכל אחת. אם אתם יודעים שתשתמשו בפונקציה יותר מפעם אחת, צרו אותה כרגיל. אם תשתמשו בה רק במקום אחד, בדרך כלל עדיף להשתמש בפונקציה אנונימית. האם להשתמש בפונקציית חץ או בתחביר המסורתי של `function` תלוי בכם, אבל תבחינו שרוב המפתחים המודרניים מעדיפים `=>`.

---

## 🚀 אתגר

האם תוכלו להסביר במשפט אחד את ההבדל בין פונקציות למתודות? נסו!

## חידון אחרי ההרצאה
[חידון אחרי ההרצאה](https://ff-quizzes.netlify.app)

## סקירה ולימוד עצמי

כדאי [לקרוא עוד על פונקציות חץ](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), שכן הן הופכות נפוצות יותר בקוד. תרגלו כתיבת פונקציה, ואז כתבו אותה מחדש עם התחביר הזה.

## משימה

[כיף עם פונקציות](assignment.md)

---

**כתב ויתור**:  
מסמך זה תורגם באמצעות שירות תרגום מבוסס בינה מלאכותית [Co-op Translator](https://github.com/Azure/co-op-translator). למרות שאנו שואפים לדיוק, יש לקחת בחשבון שתרגומים אוטומטיים עשויים להכיל שגיאות או אי-דיוקים. המסמך המקורי בשפתו המקורית נחשב למקור הסמכותי. למידע קריטי, מומלץ להשתמש בתרגום מקצועי על ידי מתרגם אנושי. איננו נושאים באחריות לכל אי-הבנה או פרשנות שגויה הנובעת משימוש בתרגום זה.