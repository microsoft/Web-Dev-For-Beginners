<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "056641280211e52fd0adb81b6058ec55",
  "translation_date": "2025-08-29T01:14:46+00:00",
  "source_file": "6-space-game/2-drawing-to-canvas/README.md",
  "language_code": "he"
}
-->
# בניית משחק חלל חלק 2: ציור גיבור ומפלצות על הקנבס

## שאלון לפני ההרצאה

[שאלון לפני ההרצאה](https://ff-quizzes.netlify.app/web/quiz/31)

## הקנבס

הקנבס הוא אלמנט HTML שבברירת מחדל אין לו תוכן; הוא כמו דף ריק. צריך להוסיף לו תוכן על ידי ציור עליו.

✅ קראו [עוד על Canvas API](https://developer.mozilla.org/docs/Web/API/Canvas_API) באתר MDN.

כך בדרך כלל מצהירים עליו כחלק מגוף הדף:

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

למעלה אנחנו מגדירים את `id`, `width` ו-`height`.

- `id`: הגדרה זו מאפשרת לקבל הפניה לאלמנט כאשר יש צורך לעבוד איתו.
- `width`: זהו רוחב האלמנט.
- `height`: זהו גובה האלמנט.

## ציור גיאומטריה פשוטה

הקנבס משתמש במערכת צירים קרטזית לציור. לכן הוא משתמש בציר x ובציר y כדי לבטא את מיקום האלמנט. המיקום `0,0` הוא הפינה השמאלית העליונה, והפינה הימנית התחתונה היא מה שהגדרתם כ-WIDTH ו-HEIGHT של הקנבס.

![הרשת של הקנבס](../../../../translated_images/canvas_grid.5f209da785ded492a01ece440e3032afe51efa500cc2308e5ea4252487ceaf0b.he.png)
> תמונה מ-[MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

כדי לצייר על אלמנט הקנבס, יש לבצע את השלבים הבאים:

1. **לקבל הפניה** לאלמנט הקנבס.
1. **לקבל הפניה** לאלמנט הקונטקסט שיושב על אלמנט הקנבס.
1. **לבצע פעולת ציור** באמצעות אלמנט הקונטקסט.

הקוד עבור השלבים הנ"ל נראה בדרך כלל כך:

```javascript
// draws a red rectangle
//1. get the canvas reference
canvas = document.getElementById("myCanvas");

//2. set the context to 2D to draw basic shapes
ctx = canvas.getContext("2d");

//3. fill it with the color red
ctx.fillStyle = 'red';

//4. and draw a rectangle with these parameters, setting location and size
ctx.fillRect(0,0, 200, 200) // x,y,width, height
```

✅ Canvas API מתמקד בעיקר בצורות דו-ממדיות, אך ניתן גם לצייר אלמנטים תלת-ממדיים באתר; לשם כך ניתן להשתמש ב-[WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API).

ניתן לצייר מגוון דברים עם Canvas API כמו:

- **צורות גיאומטריות**, כבר הראינו איך לצייר מלבן, אבל יש עוד הרבה דברים שאפשר לצייר.
- **טקסט**, ניתן לצייר טקסט בכל גופן וצבע שתרצו.
- **תמונות**, ניתן לצייר תמונה על בסיס נכס תמונה כמו .jpg או .png למשל.

✅ נסו את זה! אתם יודעים איך לצייר מלבן, האם תוכלו לצייר עיגול על הדף? הסתכלו על כמה ציורים מעניינים של קנבס ב-CodePen. הנה [דוגמה מרשימה במיוחד](https://codepen.io/dissimulate/pen/KrAwx).

## טעינה וציור של נכס תמונה

טוענים נכס תמונה על ידי יצירת אובייקט `Image` והגדרת המאפיין `src` שלו. לאחר מכן מאזינים לאירוע `load` כדי לדעת מתי הוא מוכן לשימוש. הקוד נראה כך:

### טעינת נכס

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // image loaded and ready to be used
}
```

### תבנית טעינת נכס

מומלץ לעטוף את הקוד הנ"ל במבנה כמו זה, כך שיהיה קל יותר להשתמש בו ותנסו לעבוד איתו רק כשהוא נטען במלואו:

```javascript
function loadAsset(path) {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = path;
    img.onload = () => {
      // image loaded and ready to be used
      resolve(img);
    }
  })
}

// use like so

async function run() {
  const heroImg = await loadAsset('hero.png')
  const monsterImg = await loadAsset('monster.png')
}

```

כדי לצייר נכסי משחק על המסך, הקוד שלכם ייראה כך:

```javascript
async function run() {
  const heroImg = await loadAsset('hero.png')
  const monsterImg = await loadAsset('monster.png')

  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
  ctx.drawImage(heroImg, canvas.width/2,canvas.height/2);
  ctx.drawImage(monsterImg, 0,0);
}
```

## עכשיו הגיע הזמן להתחיל לבנות את המשחק שלכם

### מה לבנות

תבנו דף אינטרנט עם אלמנט קנבס. הוא צריך להציג מסך שחור בגודל `1024*768`. סיפקנו לכם שתי תמונות:

- ספינת גיבור

   ![ספינת גיבור](../../../../translated_images/player.dd24c1afa8c71e9b82b2958946d4bad13308681392d4b5ddcc61a0e818ef8088.he.png)

- מפלצת בגודל 5*5

   ![ספינת מפלצת](../../../../translated_images/enemyShip.5df2a822c16650c2fb3c06652e8ec8120cdb9122a6de46b9a1a56d54db22657f.he.png)

### שלבים מומלצים להתחלת הפיתוח

אתרו את הקבצים שנוצרו עבורכם בתיקיית `your-work`. היא אמורה להכיל את הדברים הבאים:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

פתחו עותק של תיקייה זו ב-Visual Studio Code. אתם צריכים להגדיר סביבת פיתוח מקומית, רצוי עם Visual Studio Code עם NPM ו-Node מותקנים. אם אין לכם `npm` מוגדר במחשב, [כך עושים זאת](https://www.npmjs.com/get-npm).

התחילו את הפרויקט על ידי ניווט לתיקיית `your_work`:

```bash
cd your-work
npm start
```

הפעולה הנ"ל תתחיל שרת HTTP בכתובת `http://localhost:5000`. פתחו דפדפן והזינו את הכתובת הזו. כרגע זהו דף ריק, אבל זה ישתנה.

> הערה: כדי לראות שינויים על המסך, רעננו את הדפדפן.

### הוספת קוד

הוסיפו את הקוד הדרוש ל-`your-work/app.js` כדי לפתור את המשימות הבאות:

1. **ציירו** קנבס עם רקע שחור  
   > טיפ: הוסיפו שתי שורות תחת ה-TODO המתאים ב-`/app.js`, הגדרת האלמנט `ctx` לשחור והגדרת הקואורדינטות העליונות/שמאליות ל-0,0 והגובה והרוחב לשווים לאלו של הקנבס.
2. **טענו** טקסטורות  
   > טיפ: הוסיפו את תמונות השחקן והאויב באמצעות `await loadTexture` והעברת נתיב התמונה. עדיין לא תראו אותן על המסך!
3. **ציירו** את הגיבור במרכז המסך בחצי התחתון  
   > טיפ: השתמשו ב-API `drawImage` כדי לצייר את heroImg על המסך, הגדרת `canvas.width / 2 - 45` ו-`canvas.height - canvas.height / 4)`.
4. **ציירו** מפלצות בגודל 5*5  
   > טיפ: עכשיו תוכלו לבטל את ההערות בקוד כדי לצייר אויבים על המסך. לאחר מכן, עברו לפונקציה `createEnemies` ובנו אותה.

   קודם כל, הגדירו כמה קבועים:

    ```javascript
    const MONSTER_TOTAL = 5;
    const MONSTER_WIDTH = MONSTER_TOTAL * 98;
    const START_X = (canvas.width - MONSTER_WIDTH) / 2;
    const STOP_X = START_X + MONSTER_WIDTH;
    ```

    לאחר מכן, צרו לולאה לציור מערך המפלצות על המסך:

    ```javascript
    for (let x = START_X; x < STOP_X; x += 98) {
        for (let y = 0; y < 50 * 5; y += 50) {
          ctx.drawImage(enemyImg, x, y);
        }
      }
    ```

## תוצאה

התוצאה הסופית אמורה להיראות כך:

![מסך שחור עם גיבור ו-5*5 מפלצות](../../../../translated_images/partI-solution.36c53b48c9ffae2a5e15496b23b604ba5393433e4bf91608a7a0a020eb7a2691.he.png)

## פתרון

נסו לפתור זאת בעצמכם קודם, אבל אם אתם נתקעים, הסתכלו על [פתרון](../../../../6-space-game/2-drawing-to-canvas/solution/app.js).

---

## 🚀 אתגר

למדתם על ציור עם Canvas API שמתמקד בדו-ממד; הסתכלו על [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API), ונסו לצייר אובייקט תלת-ממדי.

## שאלון אחרי ההרצאה

[שאלון אחרי ההרצאה](https://ff-quizzes.netlify.app/web/quiz/32)

## סקירה ולימוד עצמי

למדו עוד על Canvas API על ידי [קריאה עליו](https://developer.mozilla.org/docs/Web/API/Canvas_API).

## משימה

[שחקו עם Canvas API](assignment.md)

---

**כתב ויתור**:  
מסמך זה תורגם באמצעות שירות תרגום מבוסס בינה מלאכותית [Co-op Translator](https://github.com/Azure/co-op-translator). בעוד שאנו שואפים לדיוק, יש להיות מודעים לכך שתרגומים אוטומטיים עשויים להכיל שגיאות או אי-דיוקים. המסמך המקורי בשפתו המקורית צריך להיחשב כמקור הסמכותי. למידע קריטי, מומלץ להשתמש בתרגום מקצועי על ידי בני אדם. איננו נושאים באחריות לכל אי-הבנה או פרשנות שגויה הנובעת משימוש בתרגום זה.