# כיף עם פונקציות

## הוראות

במשימה זו, תתרגלו יצירת סוגים שונים של פונקציות כדי לחזק את המושגים שלמדתם על פונקציות ב-JavaScript, פרמטרים, ערכי ברירת מחדל והצהרות החזרה.

צרו קובץ JavaScript בשם `functions-practice.js` ויישמו את הפונקציות הבאות:

### חלק 1: פונקציות בסיסיות
1. **צרו פונקציה בשם `sayHello`** שלא מקבלת פרמטרים ופשוט מדפיסה "Hello!" לקונסול.

2. **צרו פונקציה בשם `introduceYourself`** שמקבלת פרמטר `name` ומדפיסה הודעה כמו "Hi, my name is [name]" לקונסול.

### חלק 2: פונקציות עם פרמטרים ברירת מחדל
3. **צרו פונקציה בשם `greetPerson`** שמקבלת שני פרמטרים: `name` (חובה) ו-`greeting` (אופציונלי, ברירת מחדל היא "Hello"). הפונקציה צריכה להדפיס הודעה כמו "[greeting], [name]!" לקונסול.

### חלק 3: פונקציות שמחזירות ערכים
4. **צרו פונקציה בשם `addNumbers`** שמקבלת שני פרמטרים (`num1` ו-`num2`) ומחזירה את הסכום שלהם.

5. **צרו פונקציה בשם `createFullName`** שמקבלת פרמטרים `firstName` ו-`lastName` ומחזירה את השם המלא כמחרוזת אחת.

### חלק 4: לערבב הכל יחד
6. **צרו פונקציה בשם `calculateTip`** שמקבלת שני פרמטרים: `billAmount` (חובה) ו-`tipPercentage` (אופציונלי, ברירת מחדל היא 15). הפונקציה צריכה לחשב ולהחזיר את סכום הטיפ.

### חלק 5: בדקו את הפונקציות שלכם
הוסיפו קריאות לפונקציות כדי לבדוק כל אחת מהן והציגו את התוצאות באמצעות `console.log()`.

**דוגמאות לקריאות בדיקה:**
```javascript
// Test your functions here
sayHello();
introduceYourself("Sarah");
greetPerson("Alex");
greetPerson("Maria", "Hi");

const sum = addNumbers(5, 3);
console.log(`The sum is: ${sum}`);

const fullName = createFullName("John", "Doe");
console.log(`Full name: ${fullName}`);

const tip = calculateTip(50);
console.log(`Tip for $50 bill: $${tip}`);
```

## קריטריונים להערכה

| קריטריון | מצטיין | מספק | דורש שיפור |
| -------- | ------- | ----- | ---------- |
| **יצירת פונקציות** | כל 6 הפונקציות מיושמות נכון עם תחביר ושמות מתאימים | 4-5 פונקציות מיושמות נכון עם בעיות תחביר קלות | 3 פונקציות או פחות מיושמות או שגיאות תחביר משמעותיות |
| **פרמטרים וערכי ברירת מחדל** | שימוש נכון בפרמטרים חובה, פרמטרים אופציונליים וערכי ברירת מחדל כפי שצוין | שימוש נכון בפרמטרים אך ייתכנו בעיות עם ערכי ברירת מחדל | יישום פרמטרים שגוי או חסר |
| **ערכי החזרה** | פונקציות שצריכות להחזיר ערכים עושות זאת נכון, ופונקציות שלא צריכות להחזיר ערכים מבצעות רק פעולות | רוב ערכי ההחזרה נכונים עם בעיות קלות | בעיות משמעותיות עם הצהרות החזרה |
| **איכות קוד** | קוד נקי, מאורגן היטב עם שמות משתנים משמעותיים ואינדנטציה נכונה | הקוד עובד אך יכול להיות נקי או מאורגן יותר | הקוד קשה לקריאה או בנוי בצורה לא טובה |
| **בדיקות** | כל הפונקציות נבדקות עם קריאות פונקציה מתאימות והתוצאות מוצגות בצורה ברורה | רוב הפונקציות נבדקות בצורה מספקת | בדיקות מוגבלות או שגויות של פונקציות |

## אתגרי בונוס (אופציונלי)

אם אתם רוצים לאתגר את עצמכם יותר:

1. **צרו גרסה של פונקציה עם Arrow Function**
2. **צרו פונקציה שמקבלת פונקציה אחרת כפרמטר** (כמו הדוגמאות של `setTimeout` מהשיעור)
3. **הוסיפו בדיקת קלט** כדי לוודא שהפונקציות שלכם מתמודדות עם קלטים לא תקינים בצורה טובה

---

> 💡 **טיפ**: זכרו לפתוח את קונסול המפתחים בדפדפן שלכם (F12) כדי לראות את הפלט של הצהרות `console.log()` שלכם!

---

**כתב ויתור**:  
מסמך זה תורגם באמצעות שירות תרגום AI [Co-op Translator](https://github.com/Azure/co-op-translator). למרות שאנו שואפים לדיוק, יש לקחת בחשבון שתרגומים אוטומטיים עשויים להכיל שגיאות או אי דיוקים. המסמך המקורי בשפתו המקורית צריך להיחשב כמקור סמכותי. עבור מידע קריטי, מומלץ להשתמש בתרגום מקצועי אנושי. איננו אחראים לאי הבנות או לפרשנויות שגויות הנובעות משימוש בתרגום זה.