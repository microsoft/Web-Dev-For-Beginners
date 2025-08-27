<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2e83e38c35dc003f046d7cc0bbfd4920",
  "translation_date": "2025-08-27T20:26:53+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "he"
}
-->
# בניית משחק חלל חלק 4: הוספת לייזר וזיהוי התנגשויות

## שאלון לפני השיעור

[שאלון לפני השיעור](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/35)

בשיעור הזה תלמדו איך לירות לייזרים באמצעות JavaScript! נוסיף שני דברים למשחק שלנו:

- **לייזר**: הלייזר נורה מהחללית של הגיבור שלכם כלפי מעלה.
- **זיהוי התנגשויות**: כחלק מהיכולת לירות, נוסיף גם כמה כללי משחק נחמדים:
   - **לייזר פוגע באויב**: אויב מת אם לייזר פוגע בו.
   - **לייזר פוגע בחלק העליון של המסך**: לייזר נהרס אם הוא פוגע בחלק העליון של המסך.
   - **התנגשות בין אויב לגיבור**: אויב והגיבור נהרסים אם הם מתנגשים זה בזה.
   - **אויב פוגע בחלק התחתון של המסך**: אויב והגיבור נהרסים אם האויב מגיע לחלק התחתון של המסך.

בקיצור, אתם -- *הגיבור* -- צריכים לפגוע בכל האויבים עם לייזר לפני שהם מצליחים להגיע לחלק התחתון של המסך.

✅ בצעו מחקר קטן על משחק המחשב הראשון שנכתב אי פעם. מה הייתה הפונקציונליות שלו?

בואו נהיה גיבורים יחד!

## זיהוי התנגשויות

איך מבצעים זיהוי התנגשויות? אנחנו צריכים לחשוב על אובייקטי המשחק שלנו כמלבנים שנעים. למה, אתם שואלים? ובכן, התמונה שמשמשת לציור אובייקט משחק היא מלבן: יש לה `x`, `y`, `width` ו-`height`.

אם שני מלבנים, כלומר גיבור ואויב, *מצטלבים*, יש לכם התנגשות. מה שצריך לקרות אז תלוי בכללי המשחק. כדי ליישם זיהוי התנגשויות, תצטרכו את הדברים הבאים:

1. דרך לקבל ייצוג מלבני של אובייקט משחק, משהו כזה:

   ```javascript
   rectFromGameObject() {
     return {
       top: this.y,
       left: this.x,
       bottom: this.y + this.height,
       right: this.x + this.width
     }
   }
   ```

2. פונקציית השוואה, הפונקציה יכולה להיראות כך:

   ```javascript
   function intersectRect(r1, r2) {
     return !(r2.left > r1.right ||
       r2.right < r1.left ||
       r2.top > r1.bottom ||
       r2.bottom < r1.top);
   }
   ```

## איך הורסים דברים

כדי להרוס דברים במשחק, צריך להודיע למשחק שהוא לא צריך לצייר את הפריט הזה יותר בלולאת המשחק שמופעלת במרווחים מסוימים. דרך לעשות זאת היא לסמן אובייקט משחק כ-*מת* כאשר משהו קורה, כך:

```javascript
// collision happened
enemy.dead = true
```

לאחר מכן, אפשר להמשיך ולסנן אובייקטים *מתים* לפני ציור המסך מחדש, כך:

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## איך יורים לייזר

ירי לייזר מתורגם לתגובה לאירוע מקשים ויצירת אובייקט שנע בכיוון מסוים. לכן, נצטרך לבצע את השלבים הבאים:

1. **יצירת אובייקט לייזר**: מהחלק העליון של החללית של הגיבור, שמתחיל לנוע כלפי מעלה לכיוון החלק העליון של המסך.
2. **חיבור קוד לאירוע מקשים**: נצטרך לבחור מקש במקלדת שמייצג את פעולת הירי של הלייזר.
3. **יצירת אובייקט משחק שנראה כמו לייזר** כאשר המקש נלחץ.

## זמן המתנה ללייזר

הלייזר צריך להיירות בכל פעם שאתם לוחצים על מקש, כמו *רווח* למשל. כדי למנוע מהמשחק לייצר יותר מדי לייזרים בזמן קצר, נצטרך לתקן זאת. התיקון הוא באמצעות יישום מה שנקרא *זמן המתנה*, טיימר, שמבטיח שלייזר יוכל להיירות רק בתדירות מסוימת. אפשר ליישם זאת כך:

```javascript
class Cooldown {
  constructor(time) {
    this.cool = false;
    setTimeout(() => {
      this.cool = true;
    }, time)
  }
}

class Weapon {
  constructor {
  }
  fire() {
    if (!this.cooldown || this.cooldown.cool) {
      // produce a laser
      this.cooldown = new Cooldown(500);
    } else {
      // do nothing - it hasn't cooled down yet.
    }
  }
}
```

✅ חזרו לשיעור הראשון בסדרת משחק החלל כדי להזכיר לעצמכם על *זמני המתנה*.

## מה לבנות

תיקחו את הקוד הקיים (שכבר ניקיתם ושיפרתם) מהשיעור הקודם, ותאריכו אותו. תוכלו להתחיל עם הקוד מחלק II או להשתמש בקוד ב-[חלק III - קוד התחלתי](../../../../../../../../../your-work).

> טיפ: הלייזר שתעבדו איתו כבר נמצא בתיקיית הנכסים שלכם ומוזכר בקוד שלכם.

- **הוסיפו זיהוי התנגשויות**, כאשר לייזר מתנגש במשהו, הכללים הבאים צריכים לחול:
   1. **לייזר פוגע באויב**: אויב מת אם לייזר פוגע בו.
   2. **לייזר פוגע בחלק העליון של המסך**: לייזר נהרס אם הוא פוגע בחלק העליון של המסך.
   3. **התנגשות בין אויב לגיבור**: אויב והגיבור נהרסים אם הם מתנגשים זה בזה.
   4. **אויב פוגע בחלק התחתון של המסך**: אויב והגיבור נהרסים אם האויב מגיע לחלק התחתון של המסך.

## צעדים מומלצים

אתרו את הקבצים שנוצרו עבורכם בתיקיית `your-work`. היא אמורה להכיל את הדברים הבאים:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

תתחילו את הפרויקט שלכם בתיקיית `your_work` על ידי הקלדה:

```bash
cd your-work
npm start
```

הפעולה הזו תתחיל שרת HTTP בכתובת `http://localhost:5000`. פתחו דפדפן והזינו את הכתובת הזו, כרגע הוא אמור להציג את הגיבור ואת כל האויבים, שום דבר עדיין לא זז :).

### הוספת קוד

1. **הגדירו ייצוג מלבני של אובייקט המשחק, כדי לטפל בהתנגשויות** הקוד הבא מאפשר לכם לקבל ייצוג מלבני של `GameObject`. ערכו את מחלקת GameObject כדי להרחיב אותה:

    ```javascript
    rectFromGameObject() {
        return {
          top: this.y,
          left: this.x,
          bottom: this.y + this.height,
          right: this.x + this.width,
        };
      }
    ```

2. **הוסיפו קוד שבודק התנגשויות** זו תהיה פונקציה חדשה שבודקת אם שני מלבנים מצטלבים:

    ```javascript
    function intersectRect(r1, r2) {
      return !(
        r2.left > r1.right ||
        r2.right < r1.left ||
        r2.top > r1.bottom ||
        r2.bottom < r1.top
      );
    }
    ```

3. **הוסיפו יכולת ירי לייזר**
   1. **הוסיפו הודעת אירוע מקשים**. מקש *רווח* צריך ליצור לייזר ממש מעל החללית של הגיבור. הוסיפו שלוש קבועות לאובייקט Messages:

       ```javascript
        KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
        COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
        COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
       ```

   1. **טפלו במקש רווח**. ערכו את פונקציית `window.addEventListener` keyup כדי לטפל במקש רווח:

      ```javascript
        } else if(evt.keyCode === 32) {
          eventEmitter.emit(Messages.KEY_EVENT_SPACE);
        }
      ```

    1. **הוסיפו מאזינים**. ערכו את פונקציית `initGame()` כדי לוודא שהגיבור יכול לירות כאשר מקש הרווח נלחץ:

       ```javascript
       eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if (hero.canFire()) {
          hero.fire();
        }
       ```

       והוסיפו פונקציה חדשה `eventEmitter.on()` כדי להבטיח התנהגות כאשר אויב מתנגש בלייזר:

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   1. **הזיזו אובייקט**, ודאו שהלייזר נע בהדרגה לחלק העליון של המסך. תיצרו מחלקת Laser חדשה שמרחיבה את `GameObject`, כפי שעשיתם קודם:

      ```javascript
        class Laser extends GameObject {
        constructor(x, y) {
          super(x,y);
          (this.width = 9), (this.height = 33);
          this.type = 'Laser';
          this.img = laserImg;
          let id = setInterval(() => {
            if (this.y > 0) {
              this.y -= 15;
            } else {
              this.dead = true;
              clearInterval(id);
            }
          }, 100)
        }
      }
      ```

   1. **טפלו בהתנגשויות**, יישמו כללי התנגשות עבור הלייזר. הוסיפו פונקציה `updateGameObjects()` שבודקת אובייקטים מתנגשים:

      ```javascript
      function updateGameObjects() {
        const enemies = gameObjects.filter(go => go.type === 'Enemy');
        const lasers = gameObjects.filter((go) => go.type === "Laser");
      // laser hit something
        lasers.forEach((l) => {
          enemies.forEach((m) => {
            if (intersectRect(l.rectFromGameObject(), m.rectFromGameObject())) {
            eventEmitter.emit(Messages.COLLISION_ENEMY_LASER, {
              first: l,
              second: m,
            });
          }
         });
      });

        gameObjects = gameObjects.filter(go => !go.dead);
      }  
      ```

      ודאו להוסיף את `updateGameObjects()` ללולאת המשחק שלכם ב-`window.onload`.

   4. **יישמו זמן המתנה** ללייזר, כך שהוא יוכל להיירות רק בתדירות מסוימת.

      לבסוף, ערכו את מחלקת Hero כך שתוכל לטפל בזמן המתנה:

       ```javascript
      class Hero extends GameObject {
        constructor(x, y) {
          super(x, y);
          (this.width = 99), (this.height = 75);
          this.type = "Hero";
          this.speed = { x: 0, y: 0 };
          this.cooldown = 0;
        }
        fire() {
          gameObjects.push(new Laser(this.x + 45, this.y - 10));
          this.cooldown = 500;
    
          let id = setInterval(() => {
            if (this.cooldown > 0) {
              this.cooldown -= 100;
            } else {
              clearInterval(id);
            }
          }, 200);
        }
        canFire() {
          return this.cooldown === 0;
        }
      }
      ```

בשלב הזה, למשחק שלכם יש קצת פונקציונליות! אתם יכולים לנווט עם מקשי החצים, לירות לייזר עם מקש הרווח, ואויבים נעלמים כשאתם פוגעים בהם. כל הכבוד!

---

## 🚀 אתגר

הוסיפו פיצוץ! הסתכלו על נכסי המשחק ב-[מאגר אמנות החלל](../../../../6-space-game/solution/spaceArt/readme.txt) ונסו להוסיף פיצוץ כאשר הלייזר פוגע בחייזר.

## שאלון אחרי השיעור

[שאלון אחרי השיעור](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/36)

## סקירה ולימוד עצמי

נסו לשחק עם המרווחים במשחק שלכם עד כה. מה קורה כשאתם משנים אותם? קראו עוד על [אירועי תזמון ב-JavaScript](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## משימה

[חקירת התנגשויות](assignment.md)

---

**כתב ויתור**:  
מסמך זה תורגם באמצעות שירות תרגום מבוסס בינה מלאכותית [Co-op Translator](https://github.com/Azure/co-op-translator). למרות שאנו שואפים לדיוק, יש לקחת בחשבון שתרגומים אוטומטיים עשויים להכיל שגיאות או אי דיוקים. המסמך המקורי בשפתו המקורית צריך להיחשב כמקור סמכותי. עבור מידע קריטי, מומלץ להשתמש בתרגום מקצועי על ידי אדם. איננו נושאים באחריות לאי הבנות או לפרשנויות שגויות הנובעות משימוש בתרגום זה.