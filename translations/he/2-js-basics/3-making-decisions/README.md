<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f7009631b73556168ca435120a231c98",
  "translation_date": "2025-08-29T01:16:20+00:00",
  "source_file": "2-js-basics/3-making-decisions/README.md",
  "language_code": "he"
}
-->
# יסודות JavaScript: קבלת החלטות

![JavaScript Basics - Making decisions](../../../../translated_images/webdev101-js-decisions.69e1b20f272dd1f0b1cb2f8adaff3ed2a77c4f91db96d8a0594132a353fa189a.he.png)

> סקיצה מאת [Tomomi Imura](https://twitter.com/girlie_mac)

## שאלון לפני ההרצאה

[שאלון לפני ההרצאה](https://ff-quizzes.netlify.app/web/quiz/11)

קבלת החלטות ושליטה בסדר שבו הקוד שלך פועל הופכים את הקוד שלך לשימושי ועמיד יותר. חלק זה מכסה את התחביר לשליטה בזרימת הנתונים ב-JavaScript ואת החשיבות שלו כאשר משתמשים בו עם סוגי נתונים בוליאניים.

[![Making Decisions](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Making Decisions")

> 🎥 לחץ על התמונה למעלה לצפייה בסרטון על קבלת החלטות.

> ניתן ללמוד את השיעור הזה ב-[Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon)!

## סקירה קצרה על בוליאנים

בוליאנים יכולים להכיל רק שני ערכים: `true` או `false`. בוליאנים עוזרים לקבל החלטות לגבי אילו שורות קוד צריכות לפעול כאשר תנאים מסוימים מתקיימים.

ניתן להגדיר בוליאן כ-true או false כך:

`let myTrueBool = true`  
`let myFalseBool = false`

✅ בוליאנים נקראים על שמו של המתמטיקאי, הפילוסוף והלוגיקן האנגלי ג'ורג' בול (1815–1864).

## אופרטורים להשוואה ובוליאנים

אופרטורים משמשים להערכת תנאים על ידי ביצוע השוואות שיוצרות ערך בוליאני. להלן רשימה של אופרטורים נפוצים.

| סימן  | תיאור                                                                                                                                                   | דוגמה              |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `<`    | **קטן מ**: משווה בין שני ערכים ומחזיר את סוג הנתונים הבוליאני `true` אם הערך בצד שמאל קטן מהערך בצד ימין                                                | `5 < 6 // true`    |
| `<=`   | **קטן או שווה ל**: משווה בין שני ערכים ומחזיר את סוג הנתונים הבוליאני `true` אם הערך בצד שמאל קטן או שווה לערך בצד ימין                                 | `5 <= 6 // true`   |
| `>`    | **גדול מ**: משווה בין שני ערכים ומחזיר את סוג הנתונים הבוליאני `true` אם הערך בצד שמאל גדול מהערך בצד ימין                                               | `5 > 6 // false`   |
| `>=`   | **גדול או שווה ל**: משווה בין שני ערכים ומחזיר את סוג הנתונים הבוליאני `true` אם הערך בצד שמאל גדול או שווה לערך בצד ימין                                | `5 >= 6 // false`  |
| `===`  | **שוויון מוחלט**: משווה בין שני ערכים ומחזיר את סוג הנתונים הבוליאני `true` אם הערכים בצד ימין ובצד שמאל שווים וגם מאותו סוג נתונים                     | `5 === 6 // false` |
| `!==`  | **אי שוויון**: משווה בין שני ערכים ומחזיר את הערך הבוליאני ההפוך למה שאופרטור השוויון המוחלט היה מחזיר                                                  | `5 !== 6 // true`  |

✅ בדוק את הידע שלך על ידי כתיבת השוואות בקונסול של הדפדפן שלך. האם הנתונים שהוחזרו מפתיעים אותך?

## משפט If

משפט if יריץ קוד בין הבלוקים שלו אם התנאי מתקיים.

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

משפט `else` יריץ את הקוד בין הבלוקים שלו כאשר התנאי אינו מתקיים. הוא אופציונלי עם משפט `if`.

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

✅ בדוק את הבנתך לגבי הקוד הזה והקוד הבא על ידי הרצתם בקונסול של הדפדפן. שנה את הערכים של המשתנים currentMoney ו-laptopPrice כדי לשנות את הפלט של `console.log()`.

## משפט Switch

משפט `switch` משמש לביצוע פעולות שונות בהתבסס על תנאים שונים. השתמש במשפט `switch` כדי לבחור אחד מתוך מספר בלוקים של קוד לביצוע.

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

✅ בדוק את הבנתך לגבי הקוד הזה והקוד הבא על ידי הרצתם בקונסול של הדפדפן. שנה את הערכים של המשתנה a כדי לשנות את הפלט של `console.log()`.

## אופרטורים לוגיים ובוליאנים

החלטות עשויות לדרוש יותר מהשוואה אחת, וניתן לחבר אותן יחד עם אופרטורים לוגיים כדי ליצור ערך בוליאני.

| סימן  | תיאור                                                                                     | דוגמה                                                                 |
| ------ | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `&&`   | **וגם לוגי**: משווה בין שני ביטויים בוליאניים. מחזיר true **רק** אם שני הצדדים נכונים   | `(5 > 6) && (5 < 6 ) // צד אחד שגוי, השני נכון. מחזיר false`         |
| `\|\|` | **או לוגי**: משווה בין שני ביטויים בוליאניים. מחזיר true אם לפחות צד אחד נכון            | `(5 > 6) \|\| (5 < 6) // צד אחד שגוי, השני נכון. מחזיר true`         |
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

עד כה ראית כיצד ניתן להשתמש במשפט `if...else` ליצירת לוגיקה מותנית. כל מה שנכנס ל-`if` צריך להעריך ל-true/false. על ידי שימוש באופרטור `!` ניתן _לשלול_ את הביטוי. זה ייראה כך:

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

### ביטויים טרנריים

`if...else` אינו הדרך היחידה לבטא לוגיקת החלטות. ניתן גם להשתמש במשהו שנקרא אופרטור טרנרי. התחביר שלו נראה כך:

```javascript
let variable = condition ? <return this if true> : <return this if false>
```

להלן דוגמה מוחשית יותר:

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ קח רגע לקרוא את הקוד הזה כמה פעמים. האם אתה מבין כיצד האופרטורים עובדים?

הקוד לעיל אומר:

- אם `firstNumber` גדול מ-`secondNumber`
- אז יש להקצות את `firstNumber` ל-`biggestNumber`
- אחרת יש להקצות את `secondNumber`.

הביטוי הטרנרי הוא פשוט דרך קומפקטית לכתיבת הקוד הבא:

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

## שאלון לאחר ההרצאה

[שאלון לאחר ההרצאה](https://ff-quizzes.netlify.app/web/quiz/12)

## סקירה ולימוד עצמי

קרא עוד על האופרטורים הרבים הזמינים למשתמש [ב-MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators).

עבור דרך הכלי הנהדר של ג'וש קומאו [למציאת אופרטורים](https://joshwcomeau.com/operator-lookup/)!

## משימה

[אופרטורים](assignment.md)

---

**כתב ויתור**:  
מסמך זה תורגם באמצעות שירות תרגום מבוסס בינה מלאכותית [Co-op Translator](https://github.com/Azure/co-op-translator). למרות שאנו שואפים לדיוק, יש לקחת בחשבון שתרגומים אוטומטיים עשויים להכיל שגיאות או אי-דיוקים. המסמך המקורי בשפתו המקורית נחשב למקור הסמכותי. למידע קריטי, מומלץ להשתמש בתרגום מקצועי על ידי מתרגם אנושי. איננו נושאים באחריות לכל אי-הבנה או פרשנות שגויה הנובעת משימוש בתרגום זה.