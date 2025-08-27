<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4e8250db84b027c9ff816b4e4c093457",
  "translation_date": "2025-08-27T20:21:38+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "he"
}
-->
# בנה משחק חלל חלק 5: ניקוד וחיים

## חידון לפני השיעור

[חידון לפני השיעור](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/37)

בשיעור זה תלמד כיצד להוסיף ניקוד למשחק ולחשב חיים.

## הצגת טקסט על המסך

כדי להציג ניקוד של משחק על המסך, תצטרך לדעת כיצד למקם טקסט על המסך. התשובה היא שימוש בשיטת `fillText()` של אובייקט הקנבס. תוכל גם לשלוט בהיבטים נוספים כמו איזה גופן להשתמש, צבע הטקסט ואפילו יישורו (שמאל, ימין, מרכז). להלן קוד שמצייר טקסט על המסך.

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ קרא עוד על [כיצד להוסיף טקסט לקנבס](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text), ואל תהסס להפוך את הטקסט שלך למעוצב יותר!

## חיים כקונספט במשחק

הרעיון של חיים במשחק הוא פשוט מספר. בהקשר של משחק חלל, נהוג להקצות מספר חיים שמופחתים אחד-אחד כאשר הספינה שלך נפגעת. נחמד אם תוכל להציג ייצוג גרפי של זה, כמו ספינות קטנות או לבבות במקום מספר.

## מה לבנות

בוא נוסיף את הדברים הבאים למשחק שלך:

- **ניקוד משחק**: על כל ספינת אויב שמושמדת, הגיבור צריך לקבל נקודות. אנו מציעים 100 נקודות לכל ספינה. ניקוד המשחק יוצג בפינה השמאלית התחתונה.
- **חיים**: לספינה שלך יש שלושה חיים. תאבד חיים בכל פעם שספינת אויב מתנגשת בך. מד החיים יוצג בפינה הימנית התחתונה ויורכב מהגרפיקה הבאה: ![תמונה של חיים](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.he.png).

## שלבים מומלצים

אתר את הקבצים שנוצרו עבורך בתיקיית המשנה `your-work`. היא אמורה להכיל את הדברים הבאים:

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

הפקודה הנ"ל תפעיל שרת HTTP בכתובת `http://localhost:5000`. פתח דפדפן והזן את הכתובת הזו. כרגע, המשחק אמור להציג את הגיבור ואת כל האויבים, וכאשר תלחץ על החצים שמאלה וימינה, הגיבור יזוז ויוכל לירות באויבים.

### הוספת קוד

1. **העתק את הנכסים הדרושים** מתיקיית `solution/assets/` לתיקיית `your-work`; תוסיף את הנכס `life.png`. הוסף את lifeImg לפונקציה window.onload:

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

2. הוסף את `lifeImg` לרשימת הנכסים:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
3. **הוסף משתנים**. הוסף קוד שמייצג את הניקוד הכולל שלך (0) ואת מספר החיים שנותרו (3), והצג את הניקוד הזה על המסך.

4. **הרחב את הפונקציה `updateGameObjects()`**. הרחב את הפונקציה `updateGameObjects()` כדי לטפל בהתנגשויות עם אויבים:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

5. **הוסף חיים ונקודות**. 
   1. **אתחל משתנים**. תחת `this.cooldown = 0` במחלקת `Hero`, הגדר חיים ונקודות:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   2. **צייר משתנים על המסך**. הצג את הערכים הללו על המסך:

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

   3. **הוסף שיטות ללולאת המשחק**. ודא שאתה מוסיף את הפונקציות הללו לפונקציה window.onload תחת `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

6. **ממש חוקי משחק**. יישם את חוקי המשחק הבאים:

   1. **על כל התנגשות בין הגיבור לאויב**, הפחת חיים.
   
      הרחב את מחלקת `Hero` כדי לבצע הפחתה זו:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **על כל לייזר שפוגע באויב**, הגדל את ניקוד המשחק ב-100 נקודות.

      הרחב את מחלקת Hero כדי לבצע הגדלה זו:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        הוסף את הפונקציות הללו לפולטי אירועי ההתנגשות שלך:

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

✅ בצע מחקר קטן כדי לגלות משחקים אחרים שנוצרו באמצעות JavaScript/Canvas. מהם המאפיינים המשותפים שלהם?

בסיום העבודה, תוכל לראות את ספינות ה'חיים' הקטנות בפינה הימנית התחתונה, את הניקוד בפינה השמאלית התחתונה, ותראה שמספר החיים שלך יורד כאשר אתה מתנגש באויבים והניקוד שלך עולה כאשר אתה יורה באויבים. כל הכבוד! המשחק שלך כמעט מוכן.

---

## 🚀 אתגר

הקוד שלך כמעט מוכן. האם אתה יכול לדמיין את הצעדים הבאים שלך?

## חידון לאחר השיעור

[חידון לאחר השיעור](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/38)

## סקירה ולמידה עצמית

חקור דרכים שבהן תוכל להגדיל ולהקטין ניקוד וחיים במשחק. ישנם מנועי משחק מעניינים כמו [PlayFab](https://playfab.com). כיצד שימוש באחד מהם יכול לשפר את המשחק שלך?

## משימה

[בנה משחק ניקוד](assignment.md)

---

**כתב ויתור**:  
מסמך זה תורגם באמצעות שירות תרגום מבוסס בינה מלאכותית [Co-op Translator](https://github.com/Azure/co-op-translator). למרות שאנו שואפים לדיוק, יש לקחת בחשבון שתרגומים אוטומטיים עשויים להכיל שגיאות או אי דיוקים. המסמך המקורי בשפתו המקורית צריך להיחשב כמקור סמכותי. עבור מידע קריטי, מומלץ להשתמש בתרגום מקצועי על ידי אדם. איננו נושאים באחריות לאי הבנות או לפרשנויות שגויות הנובעות משימוש בתרגום זה.