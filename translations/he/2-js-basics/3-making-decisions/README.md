<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "888609c48329c280ca2477d2df40f2e5",
  "translation_date": "2025-08-27T20:13:26+00:00",
  "source_file": "2-js-basics/3-making-decisions/README.md",
  "language_code": "he"
}
-->
# יסודות JavaScript: קבלת החלטות

![JavaScript Basics - Making decisions](../../../../translated_images/webdev101-js-decisions.69e1b20f272dd1f0b1cb2f8adaff3ed2a77c4f91db96d8a0594132a353fa189a.he.png)

> איור מאת [Tomomi Imura](https://twitter.com/girlie_mac)

## חידון לפני ההרצאה

[חידון לפני ההרצאה](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/11)

קבלת החלטות ושליטה בסדר שבו הקוד שלך רץ הופכים את הקוד שלך לשימושי ועמיד יותר. חלק זה מכסה את התחביר לשליטה בזרימת הנתונים ב-JavaScript ואת החשיבות שלו בשימוש עם סוגי נתונים בוליאניים.

[![Making Decisions](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Making Decisions")

> 🎥 לחץ על התמונה למעלה לצפייה בסרטון על קבלת החלטות.

> ניתן ללמוד שיעור זה גם ב-[Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon)!

## סקירה קצרה על בוליאנים

בוליאנים יכולים לקבל רק שני ערכים: `true` או `false`. בוליאנים עוזרים להחליט אילו שורות קוד ירוצו כאשר תנאים מסוימים מתקיימים.

ניתן להגדיר בוליאן כ-true או false כך:

`let myTrueBool = true`  
`let myFalseBool = false`

✅ בוליאנים נקראים על שמו של המתמטיקאי, הפילוסוף והלוגיקן האנגלי ג'ורג' בול (1815–1864).

## אופרטורים להשוואה ובוליאנים

אופרטורים משמשים להערכת תנאים על ידי ביצוע השוואות שיוצרות ערך בוליאני. להלן רשימה של אופרטורים נפוצים.

| סימן  | תיאור                                                                                                                                                   | דוגמה              |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `<`    | **קטן מ-**: משווה בין שני ערכים ומחזיר את הערך הבוליאני `true` אם הערך בצד שמאל קטן מהערך בצד ימין                                                     | `5 < 6 // true`    |
| `<=`   | **קטן או שווה ל-**: משווה בין שני ערכים ומחזיר את הערך הבוליאני `true` אם הערך בצד שמאל קטן או שווה לערך בצד ימין                                       | `5 <= 6 // true`   |
| `>`    | **גדול מ-**: משווה בין שני ערכים ומחזיר את הערך הבוליאני `true` אם הערך בצד שמאל גדול מהערך בצד ימין                                                    | `5 > 6 // false`   |
| `>=`   | **גדול או שווה ל-**: משווה בין שני ערכים ומחזיר את הערך הבוליאני `true` אם הערך בצד שמאל גדול או שווה לערך בצד ימין                                     | `5 >= 6 // false`  |
| `===`  | **שוויון מוחלט**: משווה בין שני ערכים ומחזיר את הערך הבוליאני `true` אם הערכים בצד ימין ובצד שמאל שווים וגם מאותו סוג נתונים                            | `5 === 6 // false` |
| `!==`  | **אי-שוויון**: משווה בין שני ערכים ומחזיר את הערך הבוליאני ההפוך למה שאופרטור השוויון המוחלט היה מחזיר                                                  | `5 !== 6 // true`  |

✅ בדוק את הידע שלך על ידי כתיבת השוואות בקונסול של הדפדפן שלך. האם יש נתונים שהחזירו תוצאה שהפתיעה אותך?

## משפט If

משפט if יריץ את הקוד שבתוך הבלוקים שלו אם התנאי מתקיים.

```javascript
if (condition) {
  //Condition is true. Code in this block will run.
}
```

אופרטורים לוגיים משמשים לעיתים קרובות ליצירת התנאי.

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

## משפט If..Else

משפט `else` יריץ את הקוד שבתוך הבלוקים שלו כאשר התנאי אינו מתקיים. הוא אופציונלי עם משפט `if`.

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  //Condition is false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

✅ בדוק את הבנתך על הקוד הזה ועל הקוד הבא על ידי הרצתם בקונסול של הדפדפן. שנה את הערכים של המשתנים currentMoney ו-laptopPrice כדי לשנות את הפלט של `console.log()`.

## משפט Switch

משפט `switch` משמש לביצוע פעולות שונות בהתבסס על תנאים שונים. השתמש ב-`switch` כדי לבחור אחד מתוך מספר בלוקים של קוד לביצוע.

```javascript
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
  // code block
}
```

```javascript
// program using switch statement
let a = 2;

switch (a) {
  case 1:
    a = "one";
    break;
  case 2:
    a = "two";
    break;
  default:
    a = "not found";
    break;
}
console.log(`The value is ${a}`);
```

✅ בדוק את הבנתך על הקוד הזה ועל הקוד הבא על ידי הרצתם בקונסול של הדפדפן. שנה את הערכים של המשתנה a כדי לשנות את הפלט של `console.log()`.

## אופרטורים לוגיים ובוליאנים

החלטות עשויות לדרוש יותר מהשוואה אחת, וניתן לשלב אותן יחד עם אופרטורים לוגיים כדי להפיק ערך בוליאני.

| סימן  | תיאור                                                                                     | דוגמה                                                                 |
| ------ | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `&&`   | **וגם לוגי**: משווה בין שני ביטויים בוליאניים. מחזיר true **רק** אם שני הצדדים הם true | `(5 > 6) && (5 < 6 ) // צד אחד false, צד שני true. מחזיר false`      |
| `\|\|` | **או לוגי**: משווה בין שני ביטויים בוליאניים. מחזיר true אם לפחות צד אחד הוא true       | `(5 > 6) \|\| (5 < 6) // צד אחד false, צד שני true. מחזיר true`      |
| `!`    | **לא לוגי**: מחזיר את הערך ההפוך של ביטוי בוליאני                                       | `!(5 > 6) // 5 אינו גדול מ-6, אבל "!" יחזיר true`                    |

## תנאים והחלטות עם אופרטורים לוגיים

ניתן להשתמש באופרטורים לוגיים ליצירת תנאים במשפטי if..else.

```javascript
let currentMoney;
let laptopPrice;
let laptopDiscountPrice = laptopPrice - laptopPrice * 0.2; //Laptop price at 20 percent off

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  //Condition is true. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

### אופרטור שלילה

ראית עד כה כיצד ניתן להשתמש במשפט `if...else` ליצירת לוגיקה מותנית. כל מה שנכנס ל-`if` צריך להעריך ל-true/false. על ידי שימוש באופרטור `!` ניתן **להפוך** את הביטוי. זה ייראה כך:

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

### ביטויים טרנריים

`if...else` אינו הדרך היחידה לבטא לוגיקת החלטות. ניתן גם להשתמש במה שנקרא אופרטור טרנרי. התחביר שלו נראה כך:

```javascript
let variable = condition ? <return this if true> : <return this if false>
```

להלן דוגמה מוחשית יותר:

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ קח דקה לקרוא את הקוד הזה כמה פעמים. האם אתה מבין כיצד האופרטורים עובדים?

הקוד למעלה אומר:

- אם `firstNumber` גדול מ-`secondNumber`
- אז יש להקצות את `firstNumber` ל-`biggestNumber`
- אחרת יש להקצות את `secondNumber`.

הביטוי הטרנרי הוא פשוט דרך מקוצרת לכתיבת הקוד הבא:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

---

## 🚀 אתגר

צור תוכנית שנכתבת תחילה עם אופרטורים לוגיים, ולאחר מכן כתוב אותה מחדש באמצעות ביטוי טרנרי. מה התחביר המועדף עליך?

---

## חידון לאחר ההרצאה

[חידון לאחר ההרצאה](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/12)

## סקירה ולימוד עצמי

קרא עוד על האופרטורים הרבים הזמינים למשתמש [ב-MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators).

עבור על הכלי הנהדר של ג'וש קומו [operator lookup](https://joshwcomeau.com/operator-lookup/)!

## משימה

[אופרטורים](assignment.md)

---

**כתב ויתור**:  
מסמך זה תורגם באמצעות שירות תרגום מבוסס בינה מלאכותית [Co-op Translator](https://github.com/Azure/co-op-translator). למרות שאנו שואפים לדיוק, יש לקחת בחשבון שתרגומים אוטומטיים עשויים להכיל שגיאות או אי דיוקים. המסמך המקורי בשפתו המקורית צריך להיחשב כמקור סמכותי. עבור מידע קריטי, מומלץ להשתמש בתרגום מקצועי על ידי אדם. איננו נושאים באחריות לאי הבנות או לפרשנויות שגויות הנובעות משימוש בתרגום זה.