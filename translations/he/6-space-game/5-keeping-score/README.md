<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "adda95e02afa3fbee67b6e385b1109e1",
  "translation_date": "2025-08-29T01:14:05+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "he"
}
-->
# בנה משחק חלל חלק 5: ניקוד וחיים

## שאלון לפני השיעור

[שאלון לפני השיעור](https://ff-quizzes.netlify.app/web/quiz/37)

בשיעור הזה תלמד כיצד להוסיף ניקוד למשחק ולחשב חיים.

## הצגת טקסט על המסך

כדי להציג ניקוד של משחק על המסך, תצטרך לדעת כיצד למקם טקסט על המסך. התשובה היא באמצעות השיטה `fillText()` של אובייקט הקנבס. ניתן גם לשלוט על היבטים נוספים כמו איזה גופן להשתמש, צבע הטקסט ואפילו יישור (שמאל, ימין, מרכז). להלן קוד שמציג טקסט על המסך.

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ קרא עוד על [כיצד להוסיף טקסט לקנבס](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text), ואל תהסס להפוך את הטקסט שלך למרשים יותר!

## חיים, כקונספט במשחק

הקונספט של חיים במשחק הוא רק מספר. בהקשר של משחק חלל, נהוג להקצות מספר חיים שמופחתים אחד אחד כאשר הספינה שלך נפגעת. נחמד אם תוכל להציג ייצוג גרפי של זה כמו ספינות קטנות או לבבות במקום מספר.

## מה לבנות

בוא נוסיף את הדברים הבאים למשחק שלך:

- **ניקוד משחק**: עבור כל ספינת אויב שמושמדת, הגיבור צריך לקבל נקודות. אנו מציעים 100 נקודות לכל ספינה. ניקוד המשחק צריך להיות מוצג בפינה השמאלית התחתונה.
- **חיים**: לספינה שלך יש שלושה חיים. אתה מאבד חיים בכל פעם שספינת אויב מתנגשת בך. ניקוד החיים צריך להיות מוצג בפינה הימנית התחתונה ולהיות מורכב מהגרפיקה הבאה ![life image](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.he.png).

## צעדים מומלצים

מצא את הקבצים שנוצרו עבורך בתיקיית המשנה `your-work`. היא אמורה להכיל את הדברים הבאים:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

תתחיל את הפרויקט שלך בתיקיית `your_work` על ידי הקלדת:

```bash
cd your-work
npm start
```

הפעולה לעיל תפעיל שרת HTTP בכתובת `http://localhost:5000`. פתח דפדפן והזן את הכתובת הזו. כרגע, אמור להופיע הגיבור וכל האויבים, וכאשר תלחץ על החצים שמאלה וימינה, הגיבור יזוז ויוכל לירות על אויבים.

### הוסף קוד

1. **העתק את הנכסים הדרושים** מתיקיית `solution/assets/` לתיקיית `your-work`; תוסיף את הנכס `life.png`. הוסף את lifeImg לפונקציה window.onload:

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. הוסף את `lifeImg` לרשימת הנכסים:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **הוסף משתנים**. הוסף קוד שמייצג את הניקוד הכולל שלך (0) ואת מספר החיים שנותרו (3), והצג את הניקוד הזה על המסך.

3. **הרחב את הפונקציה `updateGameObjects()`**. הרחב את הפונקציה `updateGameObjects()` כדי לטפל בהתנגשויות עם אויבים:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **הוסף חיים ונקודות**. 
   1. **אתחל משתנים**. תחת `this.cooldown = 0` במחלקת `Hero`, הגדר חיים ונקודות:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **צייר משתנים על המסך**. הצג את הערכים הללו על המסך:

        ```javascript
        function drawLife() {
          // TODO, 35, 27
          const START_POS = canvas.width - 180;
          for(let i=0; i < hero.life; i++ ) {
            ctx.drawImage(
              lifeImg, 
              START_POS + (45 * (i+1) ), 
              canvas.height - 37);
          }
        }
        
        function drawPoints() {
          ctx.font = "30px Arial";
          ctx.fillStyle = "red";
          ctx.textAlign = "left";
          drawText("Points: " + hero.points, 10, canvas.height-20);
        }
        
        function drawText(message, x, y) {
          ctx.fillText(message, x, y);
        }

        ```

   1. **הוסף שיטות ללולאת המשחק**. ודא שאתה מוסיף את הפונקציות הללו לפונקציה window.onload תחת `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **ממש חוקי משחק**. ממש את חוקי המשחק הבאים:

   1. **עבור כל התנגשות בין גיבור לאויב**, הפחת חיים.
   
      הרחב את מחלקת `Hero` כדי לבצע הפחתה זו:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **עבור כל לייזר שפוגע באויב**, הגדל את ניקוד המשחק ב-100 נקודות.

      הרחב את מחלקת Hero כדי לבצע הגדלה זו:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        הוסף את הפונקציות הללו למפיצי אירועי ההתנגשות:

        ```javascript
        eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
           first.dead = true;
           second.dead = true;
           hero.incrementPoints();
        })

        eventEmitter.on(Messages.COLLISION_ENEMY_HERO, (_, { enemy }) => {
           enemy.dead = true;
           hero.decrementLife();
        });
        ```

✅ בצע מעט מחקר כדי לגלות משחקים אחרים שנוצרו באמצעות JavaScript/Canvas. מה המאפיינים המשותפים שלהם?

בסיום העבודה הזו, אתה אמור לראות את ספינות החיים הקטנות בפינה הימנית התחתונה, נקודות בפינה השמאלית התחתונה, ואתה אמור לראות את ספירת החיים שלך יורדת כאשר אתה מתנגש באויבים ואת הנקודות שלך עולות כאשר אתה יורה על אויבים. כל הכבוד! המשחק שלך כמעט מוכן.

---

## 🚀 אתגר

הקוד שלך כמעט מוכן. האם אתה יכול לדמיין את הצעדים הבאים שלך?

## שאלון אחרי השיעור

[שאלון אחרי השיעור](https://ff-quizzes.netlify.app/web/quiz/38)

## סקירה ולימוד עצמי

חקור דרכים שבהן תוכל להגדיל ולהקטין ניקוד וחיים במשחק. ישנם מנועי משחק מעניינים כמו [PlayFab](https://playfab.com). כיצד שימוש באחד מהם יכול לשפר את המשחק שלך?

## משימה

[בנה משחק ניקוד](assignment.md)

---

**כתב ויתור**:  
מסמך זה תורגם באמצעות שירות תרגום מבוסס בינה מלאכותית [Co-op Translator](https://github.com/Azure/co-op-translator). למרות שאנו שואפים לדיוק, יש לקחת בחשבון שתרגומים אוטומטיים עשויים להכיל שגיאות או אי-דיוקים. המסמך המקורי בשפתו המקורית נחשב למקור הסמכותי. למידע קריטי, מומלץ להשתמש בתרגום מקצועי על ידי מתרגם אנושי. איננו נושאים באחריות לכל אי-הבנה או פרשנות שגויה הנובעת משימוש בתרגום זה.