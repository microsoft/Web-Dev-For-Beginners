<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "01336cddd638242e99b133614111ea40",
  "translation_date": "2025-08-27T20:29:51+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "he"
}
-->
# בנה משחק חלל חלק 6: סיום והתחלה מחדש

## חידון לפני ההרצאה

[חידון לפני ההרצאה](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/39)

יש דרכים שונות להגדיר *תנאי סיום* במשחק. זה תלוי בך, כיוצר המשחק, להחליט מדוע המשחק מסתיים. הנה כמה סיבות, בהנחה שאנחנו מדברים על משחק החלל שבנית עד כה:

- **`N` ספינות אויב הושמדו**: זה די נפוץ, במיוחד אם מחלקים את המשחק לרמות שונות, שצריך להשמיד `N` ספינות אויב כדי להשלים רמה.
- **הספינה שלך הושמדה**: ישנם משחקים שבהם אתה מפסיד אם הספינה שלך נהרסת. גישה נפוצה נוספת היא שימוש במושג "חיים". בכל פעם שהספינה שלך נהרסת, יורד לך חיים אחד. ברגע שכל החיים נגמרים, אתה מפסיד במשחק.
- **אספת `N` נקודות**: תנאי סיום נפוץ נוסף הוא איסוף נקודות. איך משיגים נקודות תלוי בך, אבל זה די נפוץ להקצות נקודות לפעילויות שונות כמו השמדת ספינת אויב או איסוף פריטים שנופלים כאשר הם נהרסים.
- **השלמת רמה**: זה עשוי לכלול כמה תנאים, כמו `X` ספינות אויב שהושמדו, `Y` נקודות שנאספו או אולי פריט מסוים שנאסף.

## התחלה מחדש

אם אנשים נהנים מהמשחק שלך, סביר להניח שהם ירצו לשחק בו שוב. ברגע שהמשחק מסתיים מכל סיבה שהיא, כדאי להציע אפשרות להתחיל מחדש.

✅ חשוב קצת על אילו תנאים גורמים למשחק להסתיים, ואז איך אתה מתבקש להתחיל מחדש.

## מה לבנות

תוסיף את הכללים הבאים למשחק שלך:

1. **ניצחון במשחק**. ברגע שכל ספינות האויב הושמדו, אתה מנצח במשחק. בנוסף, הצג הודעת ניצחון כלשהי.
1. **התחלה מחדש**. ברגע שכל החיים שלך נגמרים או שהמשחק מנצח, עליך להציע דרך להתחיל מחדש את המשחק. זכור! תצטרך לאתחל את המשחק ולנקות את מצב המשחק הקודם.

## שלבים מומלצים

מצא את הקבצים שנוצרו עבורך בתיקיית המשנה `your-work`. היא אמורה להכיל את הדברים הבאים:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
  -| life.png
-| index.html
-| app.js
-| package.json
```

תתחיל את הפרויקט שלך בתיקיית `your_work` על ידי הקלדת:

```bash
cd your-work
npm start
```

הפקודה הנ"ל תפעיל שרת HTTP בכתובת `http://localhost:5000`. פתח דפדפן והזן את הכתובת הזו. המשחק שלך אמור להיות במצב משחק.

> טיפ: כדי להימנע מהתראות ב-Visual Studio Code, ערוך את הפונקציה `window.onload` כך שתתקשר ל-`gameLoopId` כפי שהוא (ללא `let`), והכרז על `gameLoopId` בראש הקובץ, בנפרד: `let gameLoopId;`

### הוסף קוד

1. **מעקב אחר תנאי סיום**. הוסף קוד שעוקב אחר מספר האויבים, או אם ספינת הגיבור הושמדה על ידי הוספת שתי הפונקציות הבאות:

    ```javascript
    function isHeroDead() {
      return hero.life <= 0;
    }

    function isEnemiesDead() {
      const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
      return enemies.length === 0;
    }
    ```

1. **הוסף לוגיקה למטפלי הודעות**. ערוך את ה-`eventEmitter` כדי לטפל בתנאים אלו:

    ```javascript
    eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
        first.dead = true;
        second.dead = true;
        hero.incrementPoints();

        if (isEnemiesDead()) {
          eventEmitter.emit(Messages.GAME_END_WIN);
        }
    });

    eventEmitter.on(Messages.COLLISION_ENEMY_HERO, (_, { enemy }) => {
        enemy.dead = true;
        hero.decrementLife();
        if (isHeroDead())  {
          eventEmitter.emit(Messages.GAME_END_LOSS);
          return; // loss before victory
        }
        if (isEnemiesDead()) {
          eventEmitter.emit(Messages.GAME_END_WIN);
        }
    });
    
    eventEmitter.on(Messages.GAME_END_WIN, () => {
        endGame(true);
    });
      
    eventEmitter.on(Messages.GAME_END_LOSS, () => {
      endGame(false);
    });
    ```

1. **הוסף סוגי הודעות חדשים**. הוסף את ההודעות האלו לאובייקט ה-constants:

    ```javascript
    GAME_END_LOSS: "GAME_END_LOSS",
    GAME_END_WIN: "GAME_END_WIN",
    ```

2. **הוסף קוד התחלה מחדש** שמאפשר להתחיל מחדש את המשחק בלחיצה על כפתור נבחר.

   1. **האזן ללחיצה על מקש `Enter`**. ערוך את ה-eventListener של החלון שלך כדי להאזין ללחיצה זו:

    ```javascript
     else if(evt.key === "Enter") {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
      }
    ```

   1. **הוסף הודעת התחלה מחדש**. הוסף את ההודעה הזו ל-constants של ההודעות:

        ```javascript
        KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
        ```

1. **ממש את כללי המשחק**.  ממש את כללי המשחק הבאים:

   1. **תנאי ניצחון לשחקן**. כאשר כל ספינות האויב מושמדות, הצג הודעת ניצחון.

      1. ראשית, צור פונקציה `displayMessage()`:

        ```javascript
        function displayMessage(message, color = "red") {
          ctx.font = "30px Arial";
          ctx.fillStyle = color;
          ctx.textAlign = "center";
          ctx.fillText(message, canvas.width / 2, canvas.height / 2);
        }
        ```

      1. צור פונקציה `endGame()`:

        ```javascript
        function endGame(win) {
          clearInterval(gameLoopId);
        
          // set a delay so we are sure any paints have finished
          setTimeout(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            if (win) {
              displayMessage(
                "Victory!!! Pew Pew... - Press [Enter] to start a new game Captain Pew Pew",
                "green"
              );
            } else {
              displayMessage(
                "You died !!! Press [Enter] to start a new game Captain Pew Pew"
              );
            }
          }, 200)  
        }
        ```

   1. **לוגיקת התחלה מחדש**. כאשר כל החיים נגמרים או שהשחקן ניצח במשחק, הצג שהמשחק יכול להתחיל מחדש. בנוסף, התחל מחדש את המשחק כאשר לוחצים על מקש ההתחלה מחדש (אתה יכול להחליט איזה מקש יתאים לכך).

      1. צור את הפונקציה `resetGame()`:

        ```javascript
        function resetGame() {
          if (gameLoopId) {
            clearInterval(gameLoopId);
            eventEmitter.clear();
            initGame();
            gameLoopId = setInterval(() => {
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              ctx.fillStyle = "black";
              ctx.fillRect(0, 0, canvas.width, canvas.height);
              drawPoints();
              drawLife();
              updateGameObjects();
              drawGameObjects(ctx);
            }, 100);
          }
        }
        ```

     1. הוסף קריאה ל-`eventEmitter` כדי לאתחל את המשחק ב-`initGame()`:

        ```javascript
        eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
          resetGame();
        });
        ```

     1. הוסף פונקציה `clear()` ל-EventEmitter:

        ```javascript
        clear() {
          this.listeners = {};
        }
        ```

👽 💥 🚀 ברכות, קפטן! המשחק שלך הושלם! כל הכבוד! 🚀 💥 👽

---

## 🚀 אתגר

הוסף צליל! האם תוכל להוסיף צליל כדי לשפר את חוויית המשחק, אולי כאשר יש פגיעת לייזר, או כשהגיבור מת או מנצח? עיין ב-[sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) הזה כדי ללמוד כיצד להשמיע צליל באמצעות JavaScript.

## חידון אחרי ההרצאה

[חידון אחרי ההרצאה](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/40)

## סקירה ולמידה עצמית

המשימה שלך היא ליצור משחק דוגמה חדש, אז חקור כמה משחקים מעניינים כדי לראות איזה סוג משחק תוכל לבנות.

## משימה

[בנה משחק דוגמה](assignment.md)

---

**כתב ויתור**:  
מסמך זה תורגם באמצעות שירות תרגום מבוסס בינה מלאכותית [Co-op Translator](https://github.com/Azure/co-op-translator). למרות שאנו שואפים לדיוק, יש לקחת בחשבון שתרגומים אוטומטיים עשויים להכיל שגיאות או אי דיוקים. המסמך המקורי בשפתו המקורית צריך להיחשב כמקור סמכותי. עבור מידע קריטי, מומלץ להשתמש בתרגום מקצועי על ידי אדם. איננו נושאים באחריות לאי הבנות או לפרשנויות שגויות הנובעות משימוש בתרגום זה.