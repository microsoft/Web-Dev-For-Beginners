<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a9a161871de7706cb0e23b1bd0c74559",
  "translation_date": "2025-08-29T01:13:32+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "he"
}
-->
# בניית משחק חלל חלק 3: הוספת תנועה

## חידון לפני השיעור

[חידון לפני השיעור](https://ff-quizzes.netlify.app/web/quiz/33)

משחקים לא ממש כיפיים עד שיש חייזרים שמתרוצצים על המסך! במשחק הזה נשתמש בשני סוגי תנועות:

- **תנועה באמצעות מקלדת/עכבר**: כאשר המשתמש משתמש במקלדת או בעכבר כדי להזיז אובייקט על המסך.
- **תנועה שמונעת על ידי המשחק**: כאשר המשחק מזיז אובייקט במרווחי זמן מסוימים.

אז איך מזיזים דברים על המסך? הכל קשור לקואורדינטות קרטזיות: משנים את המיקום (x,y) של האובייקט ואז מציירים מחדש את המסך.

בדרך כלל יש לבצע את השלבים הבאים כדי להשיג *תנועה* על המסך:

1. **קביעת מיקום חדש** לאובייקט; זה נדרש כדי שהאובייקט ייראה כאילו הוא זז.
2. **ניקוי המסך**, יש לנקות את המסך בין הציורים. ניתן לנקות אותו על ידי ציור מלבן שממלאים בצבע רקע.
3. **ציור מחדש של האובייקט** במיקום החדש. כך למעשה מזיזים את האובייקט ממקום אחד לאחר.

כך זה יכול להיראות בקוד:

```javascript
//set the hero's location
hero.x += 5;
// clear the rectangle that hosts the hero
ctx.clearRect(0, 0, canvas.width, canvas.height);
// redraw the game background and hero
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.fillStyle = "black";
ctx.drawImage(heroImg, hero.x, hero.y);
```

✅ האם אתם יכולים לחשוב על סיבה מדוע ציור מחדש של הגיבור מספר פעמים בשנייה עלול לגרום לעלויות ביצועים? קראו על [חלופות לדפוס הזה](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## טיפול באירועי מקלדת

מטפלים באירועים על ידי חיבור אירועים ספציפיים לקוד. אירועי מקלדת מופעלים על כל החלון, בעוד שאירועי עכבר כמו `click` יכולים להיות מחוברים ללחיצה על אלמנט מסוים. נשתמש באירועי מקלדת לאורך כל הפרויקט הזה.

כדי לטפל באירוע, יש להשתמש בשיטת `addEventListener()` של החלון ולספק לה שני פרמטרים. הפרמטר הראשון הוא שם האירוע, לדוגמה `keyup`. הפרמטר השני הוא הפונקציה שצריכה להיות מופעלת כתוצאה מהתרחשות האירוע.

הנה דוגמה:

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

עבור אירועי מקלדת יש שתי תכונות באירוע שניתן להשתמש בהן כדי לראות איזו מקש נלחץ:

- `key`, זהו ייצוג מחרוזתי של המקש שנלחץ, לדוגמה `ArrowUp`.
- `keyCode`, זהו ייצוג מספרי, לדוגמה `37`, שמתאים ל-`ArrowLeft`.

✅ מניפולציה של אירועי מקלדת שימושית גם מחוץ לפיתוח משחקים. אילו שימושים נוספים אתם יכולים לחשוב עליהם לטכניקה הזו?

### מקשים מיוחדים: אזהרה

ישנם מקשים *מיוחדים* שמשפיעים על החלון. המשמעות היא שאם אתם מאזינים לאירוע `keyup` ומשתמשים במקשים המיוחדים האלה כדי להזיז את הגיבור, זה גם יבצע גלילה אופקית. מסיבה זו ייתכן שתרצו *לכבות* את ההתנהגות המובנית של הדפדפן בזמן שאתם בונים את המשחק. תצטרכו קוד כזה:

```javascript
let onKeyDown = function (e) {
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 37:
    case 39:
    case 38:
    case 40: // Arrow keys
    case 32:
      e.preventDefault();
      break; // Space
    default:
      break; // do not block other keys
  }
};

window.addEventListener('keydown', onKeyDown);
```

הקוד לעיל יבטיח שמקשי החצים ומקש הרווח יכבו את ההתנהגות *הברירת מחדל* שלהם. מנגנון ה-*כיבוי* מתרחש כאשר אנו קוראים ל-`e.preventDefault()`.

## תנועה שמונעת על ידי המשחק

ניתן לגרום לדברים לזוז בעצמם על ידי שימוש בטיימרים כמו הפונקציות `setTimeout()` או `setInterval()` שמעדכנות את מיקום האובייקט בכל טיק, או מרווח זמן. כך זה יכול להיראות:

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## לולאת המשחק

לולאת המשחק היא מושג שבו פונקציה מופעלת במרווחי זמן קבועים. היא נקראת לולאת המשחק מכיוון שכל מה שצריך להיות גלוי למשתמש מצויר בתוך הלולאה. לולאת המשחק משתמשת בכל האובייקטים של המשחק שהם חלק מהמשחק, ומציירת את כולם אלא אם כן מסיבה כלשהי הם כבר לא חלק מהמשחק. לדוגמה, אם אובייקט הוא אויב שנפגע על ידי לייזר ומתפוצץ, הוא כבר לא חלק מלולאת המשחק הנוכחית (תלמדו על כך יותר בשיעורים הבאים).

כך לולאת משחק יכולה להיראות בקוד:

```javascript
let gameLoopId = setInterval(() =>
  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawHero();
    drawEnemies();
    drawStaticObjects();
}, 200);
```

הלולאה לעיל מופעלת כל `200` מילישניות כדי לצייר מחדש את הקנבס. יש לכם את היכולת לבחור את המרווח הטוב ביותר שמתאים למשחק שלכם.

## המשך משחק החלל

תיקחו את הקוד הקיים ותוסיפו עליו. או שתתחילו עם הקוד שסיימתם בחלק הראשון או שתשתמשו בקוד שב-[חלק השני - קוד התחלתי](../../../../6-space-game/3-moving-elements-around/your-work).

- **הזזת הגיבור**: תוסיפו קוד שיבטיח שתוכלו להזיז את הגיבור באמצעות מקשי החצים.
- **הזזת האויבים**: תצטרכו גם להוסיף קוד שיבטיח שהאויבים יזוזו מלמעלה למטה בקצב מסוים.

## שלבים מומלצים

אתרו את הקבצים שנוצרו עבורכם בתיקיית `your-work`. היא אמורה להכיל את הדברים הבאים:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

תתחילו את הפרויקט בתיקיית `your_work` על ידי הקלדת:

```bash
cd your-work
npm start
```

הפקודה לעיל תפעיל שרת HTTP בכתובת `http://localhost:5000`. פתחו דפדפן והזינו את הכתובת הזו, כרגע זה אמור להציג את הגיבור ואת כל האויבים; שום דבר עדיין לא זז!

### הוספת קוד

1. **הוסיפו אובייקטים ייעודיים** עבור `hero`, `enemy` ו-`game object`, הם צריכים לכלול תכונות `x` ו-`y`. (זכרו את החלק על [ירושה או קומפוזיציה](../README.md)).

   *רמז*: `game object` צריך להיות זה עם `x` ו-`y` והיכולת לצייר את עצמו על הקנבס.

   >טיפ: התחילו ביצירת מחלקת GameObject עם הבנאי שלה כפי שמוצג למטה, ואז ציירו אותה על הקנבס:
  
    ```javascript
        
    class GameObject {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dead = false;
        this.type = "";
        this.width = 0;
        this.height = 0;
        this.img = undefined;
      }
    
      draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      }
    }
    ```

    עכשיו, הרחיבו את GameObject כדי ליצור את Hero ו-Enemy.
    
    ```javascript
    class Hero extends GameObject {
      constructor(x, y) {
        ...it needs an x, y, type, and speed
      }
    }
    ```

    ```javascript
    class Enemy extends GameObject {
      constructor(x, y) {
        super(x, y);
        (this.width = 98), (this.height = 50);
        this.type = "Enemy";
        let id = setInterval(() => {
          if (this.y < canvas.height - this.height) {
            this.y += 5;
          } else {
            console.log('Stopped at', this.y)
            clearInterval(id);
          }
        }, 300)
      }
    }
    ```

2. **הוסיפו מאזיני אירועים למקלדת** כדי לטפל בניווט (הזזת הגיבור למעלה/למטה שמאלה/ימינה).

   *זכרו* שזהו מערכת קרטזית, הפינה השמאלית העליונה היא `0,0`. זכרו גם להוסיף קוד לעצירת *התנהגות ברירת מחדל*.

   >טיפ: צרו פונקציה onKeyDown וחברו אותה לחלון:

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   בדקו את קונסולת הדפדפן בשלב זה, וצפו בלחיצות המקלדת שנרשמות.

3. **ממשו** את [תבנית Pub Sub](../README.md), זה ישמור על הקוד שלכם מסודר ככל שתמשיכו לחלקים הבאים.

   כדי לבצע את החלק האחרון, תוכלו:

   1. **להוסיף מאזין אירועים** לחלון:

       ```javascript
        window.addEventListener("keyup", (evt) => {
          if (evt.key === "ArrowUp") {
            eventEmitter.emit(Messages.KEY_EVENT_UP);
          } else if (evt.key === "ArrowDown") {
            eventEmitter.emit(Messages.KEY_EVENT_DOWN);
          } else if (evt.key === "ArrowLeft") {
            eventEmitter.emit(Messages.KEY_EVENT_LEFT);
          } else if (evt.key === "ArrowRight") {
            eventEmitter.emit(Messages.KEY_EVENT_RIGHT);
          }
        });
        ```

    1. **ליצור מחלקת EventEmitter** כדי לפרסם ולהירשם להודעות:

        ```javascript
        class EventEmitter {
          constructor() {
            this.listeners = {};
          }
        
          on(message, listener) {
            if (!this.listeners[message]) {
              this.listeners[message] = [];
            }
            this.listeners[message].push(listener);
          }
        
          emit(message, payload = null) {
            if (this.listeners[message]) {
              this.listeners[message].forEach((l) => l(message, payload));
            }
          }
        }
        ```

    1. **להוסיף קבועים** ולהגדיר את EventEmitter:

        ```javascript
        const Messages = {
          KEY_EVENT_UP: "KEY_EVENT_UP",
          KEY_EVENT_DOWN: "KEY_EVENT_DOWN",
          KEY_EVENT_LEFT: "KEY_EVENT_LEFT",
          KEY_EVENT_RIGHT: "KEY_EVENT_RIGHT",
        };
        
        let heroImg, 
            enemyImg, 
            laserImg,
            canvas, ctx, 
            gameObjects = [], 
            hero, 
            eventEmitter = new EventEmitter();
        ```

    1. **לאתחל את המשחק**

    ```javascript
    function initGame() {
      gameObjects = [];
      createEnemies();
      createHero();
    
      eventEmitter.on(Messages.KEY_EVENT_UP, () => {
        hero.y -=5 ;
      })
    
      eventEmitter.on(Messages.KEY_EVENT_DOWN, () => {
        hero.y += 5;
      });
    
      eventEmitter.on(Messages.KEY_EVENT_LEFT, () => {
        hero.x -= 5;
      });
    
      eventEmitter.on(Messages.KEY_EVENT_RIGHT, () => {
        hero.x += 5;
      });
    }
    ```

1. **הגדירו את לולאת המשחק**

   ערכו מחדש את פונקציית window.onload כדי לאתחל את המשחק ולהגדיר לולאת משחק במרווח זמן מתאים. תוסיפו גם קרן לייזר:

    ```javascript
    window.onload = async () => {
      canvas = document.getElementById("canvas");
      ctx = canvas.getContext("2d");
      heroImg = await loadTexture("assets/player.png");
      enemyImg = await loadTexture("assets/enemyShip.png");
      laserImg = await loadTexture("assets/laserRed.png");
    
      initGame();
      let gameLoopId = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawGameObjects(ctx);
      }, 100)
      
    };
    ```

5. **הוסיפו קוד** להזזת האויבים במרווח זמן מסוים

    ערכו מחדש את הפונקציה `createEnemies()` כדי ליצור את האויבים ולהוסיף אותם למחלקת gameObjects החדשה:

    ```javascript
    function createEnemies() {
      const MONSTER_TOTAL = 5;
      const MONSTER_WIDTH = MONSTER_TOTAL * 98;
      const START_X = (canvas.width - MONSTER_WIDTH) / 2;
      const STOP_X = START_X + MONSTER_WIDTH;
    
      for (let x = START_X; x < STOP_X; x += 98) {
        for (let y = 0; y < 50 * 5; y += 50) {
          const enemy = new Enemy(x, y);
          enemy.img = enemyImg;
          gameObjects.push(enemy);
        }
      }
    }
    ```
    
    והוסיפו פונקציה `createHero()` כדי לבצע תהליך דומה עבור הגיבור.
    
    ```javascript
    function createHero() {
      hero = new Hero(
        canvas.width / 2 - 45,
        canvas.height - canvas.height / 4
      );
      hero.img = heroImg;
      gameObjects.push(hero);
    }
    ```

    ולבסוף, הוסיפו פונקציה `drawGameObjects()` כדי להתחיל את הציור:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    האויבים שלכם אמורים להתחיל להתקדם לעבר חללית הגיבור שלכם!

---

## 🚀 אתגר

כפי שאתם רואים, הקוד שלכם יכול להפוך ל'קוד ספגטי' כאשר אתם מתחילים להוסיף פונקציות, משתנים ומחלקות. איך תוכלו לארגן את הקוד שלכם בצורה טובה יותר כך שיהיה קריא יותר? שרטטו מערכת לארגון הקוד שלכם, גם אם הוא עדיין נמצא בקובץ אחד.

## חידון אחרי השיעור

[חידון אחרי השיעור](https://ff-quizzes.netlify.app/web/quiz/34)

## סקירה ולימוד עצמי

בעוד שאנחנו כותבים את המשחק שלנו ללא שימוש בפריימוורקים, ישנם פריימוורקים רבים מבוססי JavaScript לפיתוח משחקים עם Canvas. הקדישו זמן לקרוא על [האפשרויות האלה](https://github.com/collections/javascript-game-engines).

## משימה

[הוסיפו הערות לקוד שלכם](assignment.md)

---

**כתב ויתור**:  
מסמך זה תורגם באמצעות שירות תרגום מבוסס בינה מלאכותית [Co-op Translator](https://github.com/Azure/co-op-translator). בעוד שאנו שואפים לדיוק, יש לקחת בחשבון שתרגומים אוטומטיים עשויים להכיל שגיאות או אי-דיוקים. המסמך המקורי בשפתו המקורית נחשב למקור הסמכותי. למידע קריטי, מומלץ להשתמש בתרגום מקצועי על ידי מתרגם אנושי. איננו נושאים באחריות לכל אי-הבנה או פרשנות שגויה הנובעת משימוש בתרגום זה.