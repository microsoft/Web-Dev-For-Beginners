<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9197f8af0fef9be6e81d4dbda23c7e7d",
  "translation_date": "2025-10-23T01:11:03+00:00",
  "source_file": "2-js-basics/4-arrays-loops/README.md",
  "language_code": "he"
}
-->
# יסודות JavaScript: מערכים ולולאות

![JavaScript Basics - Arrays](../../../../translated_images/webdev101-js-arrays.439d7528b8a294558d0e4302e448d193f8ad7495cc407539cc81f1afe904b470.he.png)
> סקיצה מאת [Tomomi Imura](https://twitter.com/girlie_mac)

## שאלון לפני השיעור
[שאלון לפני השיעור](https://ff-quizzes.netlify.app/web/quiz/13)

אי פעם תהיתם איך אתרים עוקבים אחרי פריטים בעגלת הקניות או מציגים את רשימת החברים שלכם? כאן נכנסים לתמונה מערכים ולולאות. מערכים הם כמו מיכלים דיגיטליים שמחזיקים מידע רב, בעוד שלולאות מאפשרות לכם לעבוד עם כל המידע הזה בצורה יעילה בלי לכתוב קוד חוזר.

יחד, שני המושגים הללו מהווים את הבסיס לטיפול במידע בתוכניות שלכם. תלמדו לעבור מכתיבה ידנית של כל שלב ליצירת קוד חכם ויעיל שיכול לעבד מאות או אפילו אלפי פריטים במהירות.

בסוף השיעור הזה, תבינו איך לבצע משימות נתונים מורכבות עם כמה שורות קוד בלבד. בואו נחקור את מושגי התכנות החיוניים הללו.

[![Arrays](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "Arrays")

[![Loops](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "Loops")

> 🎥 לחצו על התמונות למעלה לצפייה בסרטונים על מערכים ולולאות.

> ניתן לקחת את השיעור הזה ב-[Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-arrays/?WT.mc_id=academic-77807-sagibbon)!

## מערכים

חשבו על מערכים כמו ארון תיוק דיגיטלי - במקום לאחסן מסמך אחד בכל מגירה, ניתן לארגן פריטים קשורים רבים במיכל מובנה אחד. במונחי תכנות, מערכים מאפשרים לכם לאחסן מידע רב בחבילה אחת מאורגנת.

בין אם אתם בונים גלריית תמונות, מנהלים רשימת משימות או עוקבים אחרי ציונים גבוהים במשחק, מערכים מספקים את הבסיס לארגון נתונים. בואו נראה איך הם עובדים.

✅ מערכים נמצאים בכל מקום! האם אתם יכולים לחשוב על דוגמה אמיתית למערך, כמו מערך של פאנלים סולאריים?

### יצירת מערכים

יצירת מערך היא פשוטה מאוד - פשוט השתמשו בסוגריים מרובעים!

```javascript
// Empty array - like an empty shopping cart waiting for items
const myArray = [];
```

**מה קורה כאן?**
הרגע יצרתם מיכל ריק באמצעות הסוגריים המרובעים `[]`. חשבו על זה כמו מדף ספרים ריק - הוא מוכן להכיל כל ספר שתרצו לארגן שם.

ניתן גם למלא את המערך בערכים התחלתיים כבר מההתחלה:

```javascript
// Your ice cream shop's flavor menu
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// A user's profile info (mixing different types of data)
const userData = ["John", 25, true, "developer"];

// Test scores for your favorite class
const scores = [95, 87, 92, 78, 85];
```

**דברים מגניבים לשים לב אליהם:**
- ניתן לאחסן טקסט, מספרים ואפילו ערכים של נכון/לא נכון באותו מערך
- פשוט להפריד כל פריט עם פסיק - קל!
- מערכים מושלמים לשמירה על מידע קשור יחד

### אינדקס במערכים

הנה משהו שעשוי להיראות מוזר בהתחלה: מערכים ממספרים את הפריטים שלהם החל מ-0, לא מ-1. אינדוקס שמתחיל מאפס נובע מאופן הפעולה של זיכרון המחשב - זהו מוסכמה בתכנות מאז ימי המחשוב הראשונים כמו שפת C. כל מקום במערך מקבל מספר כתובת משלו שנקרא **אינדקס**.

| אינדקס | ערך | תיאור |
|-------|-------|-------------|
| 0 | "Chocolate" | פריט ראשון |
| 1 | "Strawberry" | פריט שני |
| 2 | "Vanilla" | פריט שלישי |
| 3 | "Pistachio" | פריט רביעי |
| 4 | "Rocky Road" | פריט חמישי |

✅ האם מפתיע אתכם שמערכים מתחילים באינדקס אפס? בשפות תכנות מסוימות, אינדקסים מתחילים ב-1. יש היסטוריה מעניינת סביב זה, עליה ניתן [לקרוא בויקיפדיה](https://en.wikipedia.org/wiki/Zero-based_numbering).

**גישה לפריטי מערך:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// Access individual elements using bracket notation
console.log(iceCreamFlavors[0]); // "Chocolate" - first element
console.log(iceCreamFlavors[2]); // "Vanilla" - third element
console.log(iceCreamFlavors[4]); // "Rocky Road" - last element
```

**פירוט מה קורה כאן:**
- **משתמשים** בסוגריים מרובעים עם מספר האינדקס כדי לגשת לפריטים
- **מחזירים** את הערך המאוחסן במיקום הספציפי במערך
- **מתחילים** לספור מ-0, כך שהפריט הראשון הוא אינדקס 0

**שינוי פריטי מערך:**

```javascript
// Change an existing value
iceCreamFlavors[4] = "Butter Pecan";
console.log(iceCreamFlavors[4]); // "Butter Pecan"

// Add a new element at the end
iceCreamFlavors[5] = "Cookie Dough";
console.log(iceCreamFlavors[5]); // "Cookie Dough"
```

**בדוגמה למעלה, עשינו:**
- **שינינו** את הפריט באינדקס 4 מ-"Rocky Road" ל-"Butter Pecan"
- **הוספנו** פריט חדש "Cookie Dough" באינדקס 5
- **הרחבנו** את אורך המערך באופן אוטומטי כאשר הוספנו מעבר לגבולות הנוכחיים

### אורך מערך ושיטות נפוצות

למערכים יש תכונות ושיטות מובנות שמקלות על העבודה עם נתונים.

**מציאת אורך מערך:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
console.log(iceCreamFlavors.length); // 5

// Length updates automatically as array changes
iceCreamFlavors.push("Mint Chip");
console.log(iceCreamFlavors.length); // 6
```

**נקודות חשובות לזכור:**
- **מחזיר** את המספר הכולל של הפריטים במערך
- **מתעדכן** באופן אוטומטי כאשר פריטים מתווספים או מוסרים
- **מספק** ספירה דינמית שימושית ללולאות ולאימות

**שיטות מערך חיוניות:**

```javascript
const fruits = ["apple", "banana", "orange"];

// Add elements
fruits.push("grape");           // Adds to end: ["apple", "banana", "orange", "grape"]
fruits.unshift("strawberry");   // Adds to beginning: ["strawberry", "apple", "banana", "orange", "grape"]

// Remove elements
const lastFruit = fruits.pop();        // Removes and returns "grape"
const firstFruit = fruits.shift();     // Removes and returns "strawberry"

// Find elements
const index = fruits.indexOf("banana"); // Returns 1 (position of "banana")
const hasApple = fruits.includes("apple"); // Returns true
```

**הבנת השיטות הללו:**
- **מוסיף** פריטים עם `push()` (סוף) ו-`unshift()` (תחילה)
- **מסיר** פריטים עם `pop()` (סוף) ו-`shift()` (תחילה)
- **מאתר** פריטים עם `indexOf()` ובודק קיום עם `includes()`
- **מחזיר** ערכים שימושיים כמו פריטים שהוסרו או מיקומי אינדקס

✅ נסו בעצמכם! השתמשו בקונסול של הדפדפן כדי ליצור ולשנות מערך משלכם.

## לולאות

חשבו על העונש המפורסם מספרי צ'ארלס דיקנס שבו תלמידים נאלצו לכתוב שורות שוב ושוב על לוח. דמיינו אם הייתם יכולים פשוט להורות למישהו "כתוב את המשפט הזה 100 פעמים" וזה היה נעשה אוטומטית. זה בדיוק מה שלולאות עושות עבור הקוד שלכם.

לולאות הן כמו עוזר בלתי נלאה שיכול לחזור על משימות ללא שגיאות. בין אם אתם צריכים לבדוק כל פריט בעגלת קניות או להציג את כל התמונות באלבום, לולאות מטפלות בחזרה בצורה יעילה.

JavaScript מספקת מספר סוגי לולאות לבחירה. בואו נבחן כל אחת ונבין מתי להשתמש בהן.

### לולאת For

לולאת `for` היא כמו הגדרת טיימר - אתם יודעים בדיוק כמה פעמים אתם רוצים שמשהו יקרה. היא מאוד מאורגנת וצפויה, מה שהופך אותה למושלמת כשעובדים עם מערכים או צריכים לספור דברים.

**מבנה לולאת For:**

| רכיב | מטרה | דוגמה |
|-----------|---------|----------|
| **אתחול** | קובע נקודת התחלה | `let i = 0` |
| **תנאי** | מתי להמשיך | `i < 10` |
| **הגדלה** | איך לעדכן | `i++` |

```javascript
// Counting from 0 to 9
for (let i = 0; i < 10; i++) {
  console.log(`Count: ${i}`);
}

// More practical example: processing scores
const testScores = [85, 92, 78, 96, 88];
for (let i = 0; i < testScores.length; i++) {
  console.log(`Student ${i + 1}: ${testScores[i]}%`);
}
```

**שלב אחר שלב, מה קורה כאן:**
- **מאתחל** את משתנה הספירה `i` ל-0 בתחילת הלולאה
- **בודק** את התנאי `i < 10` לפני כל איטרציה
- **מבצע** את קטע הקוד כאשר התנאי נכון
- **מגדיל** את `i` ב-1 אחרי כל איטרציה עם `i++`
- **עוצר** כאשר התנאי הופך לשקרי (כאשר `i` מגיע ל-10)

✅ הריצו את הקוד הזה בקונסול של הדפדפן. מה קורה כשאתם עושים שינויים קטנים בספירה, בתנאי או בביטוי האיטרציה? האם אתם יכולים לגרום ללולאה לרוץ אחורה, וליצור ספירה לאחור?

### לולאת While

לולאת `while` היא כמו לומר "תמשיך לעשות את זה עד ש..." - ייתכן שלא תדעו בדיוק כמה פעמים היא תרוץ, אבל אתם יודעים מתי לעצור. היא מושלמת לדברים כמו בקשת קלט ממשתמש עד שהוא נותן לכם את מה שאתם צריכים, או חיפוש נתונים עד שתמצאו את מה שאתם מחפשים.

**מאפייני לולאת While:**
- **ממשיכה** להתבצע כל עוד התנאי נכון
- **דורשת** ניהול ידני של משתני ספירה
- **בודקת** את התנאי לפני כל איטרציה
- **מסוכנת** ללולאות אינסופיות אם התנאי לעולם לא הופך לשקרי

```javascript
// Basic counting example
let i = 0;
while (i < 10) {
  console.log(`While count: ${i}`);
  i++; // Don't forget to increment!
}

// More practical example: processing user input
let userInput = "";
let attempts = 0;
const maxAttempts = 3;

while (userInput !== "quit" && attempts < maxAttempts) {
  userInput = prompt(`Enter 'quit' to exit (attempt ${attempts + 1}):`);
  attempts++;
}

if (attempts >= maxAttempts) {
  console.log("Maximum attempts reached!");
}
```

**הבנת הדוגמאות הללו:**
- **מנהלת** את משתנה הספירה `i` ידנית בתוך גוף הלולאה
- **מגדילה** את הספירה כדי למנוע לולאות אינסופיות
- **מדגימה** שימוש מעשי עם קלט משתמש והגבלת ניסיונות
- **כוללת** מנגנוני בטיחות למניעת ביצוע אינסופי

### חלופות מודרניות ללולאות

JavaScript מציעה תחביר לולאות מודרני שיכול להפוך את הקוד שלכם לקריא יותר ופחות רגיש לשגיאות.

**לולאת For...of (ES6+):**

```javascript
const colors = ["red", "green", "blue", "yellow"];

// Modern approach - cleaner and safer
for (const color of colors) {
  console.log(`Color: ${color}`);
}

// Compare with traditional for loop
for (let i = 0; i < colors.length; i++) {
  console.log(`Color: ${colors[i]}`);
}
```

**יתרונות עיקריים של For...of:**
- **מבטלת** את הצורך בניהול אינדקסים ושגיאות של אחד פחות
- **מספקת** גישה ישירה לפריטי המערך
- **משפרת** את קריאות הקוד ומפחיתה את מורכבות התחביר

**שיטת forEach:**

```javascript
const prices = [9.99, 15.50, 22.75, 8.25];

// Using forEach for functional programming style
prices.forEach((price, index) => {
  console.log(`Item ${index + 1}: $${price.toFixed(2)}`);
});

// forEach with arrow functions for simple operations
prices.forEach(price => console.log(`Price: $${price}`));
```

**מה שצריך לדעת על forEach:**
- **מבצעת** פונקציה עבור כל פריט במערך
- **מספקת** גם את ערך הפריט וגם את האינדקס כפרמטרים
- **לא ניתן** לעצור אותה מוקדם (בניגוד ללולאות מסורתיות)
- **מחזירה** undefined (לא יוצרת מערך חדש)

✅ מדוע הייתם בוחרים בלולאת for לעומת לולאת while? 17K צופים שאלו את אותה שאלה ב-StackOverflow, וחלק מהדעות [עשויות לעניין אתכם](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript).

## לולאות ומערכים

שילוב מערכים עם לולאות יוצר יכולות עיבוד נתונים עוצמתיות. השילוב הזה הוא בסיסי למשימות תכנות רבות, החל מהצגת רשימות ועד חישוב סטטיסטיקות.

**עיבוד מערכים מסורתי:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// Classic for loop approach
for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(`Flavor ${i + 1}: ${iceCreamFlavors[i]}`);
}

// Modern for...of approach
for (const flavor of iceCreamFlavors) {
  console.log(`Available flavor: ${flavor}`);
}
```

**בואו נבין כל גישה:**
- **משתמשים** בתכונת אורך המערך כדי לקבוע את גבול הלולאה
- **ניגשים** לפריטים לפי אינדקס בלולאות for מסורתיות
- **מספקים** גישה ישירה לפריטים בלולאות for...of
- **מעבדים** כל פריט במערך בדיוק פעם אחת

**דוגמה לעיבוד נתונים מעשי:**

```javascript
const studentGrades = [85, 92, 78, 96, 88, 73, 89];
let total = 0;
let highestGrade = studentGrades[0];
let lowestGrade = studentGrades[0];

// Process all grades with a single loop
for (let i = 0; i < studentGrades.length; i++) {
  const grade = studentGrades[i];
  total += grade;
  
  if (grade > highestGrade) {
    highestGrade = grade;
  }
  
  if (grade < lowestGrade) {
    lowestGrade = grade;
  }
}

const average = total / studentGrades.length;
console.log(`Average: ${average.toFixed(1)}`);
console.log(`Highest: ${highestGrade}`);
console.log(`Lowest: ${lowestGrade}`);
```

**כך הקוד הזה עובד:**
- **מאתחל** משתנים למעקב אחר סכום וערכים קיצוניים
- **מעבד** כל ציון בלולאה יעילה אחת
- **מצטבר** את הסכום לחישוב ממוצע
- **עוקב** אחר הערכים הגבוהים והנמוכים במהלך האיטרציה
- **מחשב** סטטיסטיקות סופיות לאחר סיום הלולאה

✅ נסו לבצע לולאה על מערך משלכם בקונסול של הדפדפן.

---

## אתגר סוכן GitHub Copilot 🚀

השתמשו במצב סוכן כדי להשלים את האתגר הבא:

**תיאור:** צרו פונקציה מקיפה לעיבוד נתונים שמשלבת מערכים ולולאות לניתוח מערך נתונים והפקת תובנות משמעותיות.

**הנחיה:** צרו פונקציה בשם `analyzeGrades` שמקבלת מערך של אובייקטים עם ציוני תלמידים (כל אחד מכיל שם ותכונות ציון) ומחזירה אובייקט עם סטטיסטיקות כולל הציון הגבוה ביותר, הציון הנמוך ביותר, ממוצע הציונים, מספר התלמידים שעברו (ציון >= 70), ומערך שמות התלמידים שקיבלו ציון מעל הממוצע. השתמשו לפחות בשני סוגי לולאות שונים בפתרון שלכם.

למדו עוד על [מצב סוכן](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) כאן.

## 🚀 אתגר

JavaScript מציעה מספר שיטות מודרניות למערכים שיכולות להחליף לולאות מסורתיות למשימות ספציפיות. חקרו את [forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of), [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [filter](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), ו-[reduce](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce). 

**האתגר שלכם:** בצעו שינוי בקוד הדוגמה של ציוני התלמידים באמצעות לפחות שלוש שיטות מערך שונות. שימו לב כמה הקוד הופך לנקי וקריא יותר עם תחביר JavaScript מודרני.

## שאלון לאחר השיעור
[שאלון לאחר השיעור](https://ff-quizzes.netlify.app/web/quiz/14)


## סקירה ולימוד עצמי

למערכים ב-JavaScript יש הרבה שיטות מצורפות, שהן שימושיות מאוד לעיבוד נתונים. [קראו על השיטות הללו](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) ונסו כמה מהן (כמו push, pop, slice ו-splice) על מערך שיצרתם.

## משימה

[לולאה על מערך](assignment.md)

---

**כתב ויתור**:  
מסמך זה תורגם באמצעות שירות תרגום מבוסס AI [Co-op Translator](https://github.com/Azure/co-op-translator). למרות שאנו שואפים לדיוק, יש לקחת בחשבון שתרגומים אוטומטיים עשויים להכיל שגיאות או אי דיוקים. המסמך המקורי בשפתו המקורית צריך להיחשב כמקור סמכותי. עבור מידע קריטי, מומלץ להשתמש בתרגום מקצועי אנושי. איננו אחראים לאי הבנות או לפרשנויות שגויות הנובעות משימוש בתרגום זה.