<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "862f7f2ef320f6f8950fae379e6ece45",
  "translation_date": "2025-10-23T01:38:39+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "he"
}
-->
# בניית משחק חלל חלק 1: מבוא

![אנימציה של משחק חלל המציגה משחקיות](../../../../6-space-game/images/pewpew.gif)

בדיוק כמו שמרכז הבקרה של נאס"א מתאם מערכות רבות במהלך שיגור חללית, אנחנו הולכים לבנות משחק חלל שמדגים איך חלקים שונים בתוכנית יכולים לעבוד יחד בצורה חלקה. תוך כדי יצירת משהו שתוכלו לשחק בו, תלמדו מושגים תכנותיים חיוניים שתקפים לכל פרויקט תוכנה.

נחקור שתי גישות בסיסיות לארגון קוד: ירושה והרכבה. אלו אינם רק מושגים אקדמיים – אלו אותם דפוסים שמניעים הכל, ממשחקי וידאו ועד מערכות בנקאיות. בנוסף, ניישם מערכת תקשורת בשם pub/sub שעובדת כמו רשתות התקשורת המשמשות בחלליות, ומאפשרת לרכיבים שונים לשתף מידע מבלי ליצור תלות.

בסוף הסדרה הזו, תבינו איך לבנות אפליקציות שיכולות להתפתח ולהתרחב – בין אם אתם מפתחים משחקים, אפליקציות אינטרנט או כל מערכת תוכנה אחרת.

## שאלון לפני ההרצאה

[שאלון לפני ההרצאה](https://ff-quizzes.netlify.app/web/quiz/29)

## ירושה והרכבה בפיתוח משחקים

ככל שהפרויקטים הופכים מורכבים יותר, ארגון הקוד הופך לקריטי. מה שמתחיל כקובץ סקריפט פשוט יכול להפוך לקשה לתחזוקה ללא מבנה נכון – בדיוק כמו שהמשימות של אפולו דרשו תיאום מדויק בין אלפי רכיבים.

נחקור שתי גישות בסיסיות לארגון קוד: ירושה והרכבה. לכל אחת יש יתרונות ייחודיים, והבנת שתיהן תעזור לכם לבחור את הגישה הנכונה למצבים שונים. נדגים את המושגים הללו דרך משחק החלל שלנו, שבו גיבורים, אויבים, חיזוקים ואובייקטים אחרים חייבים לתקשר ביעילות.

✅ אחד הספרים המפורסמים ביותר שנכתבו על תכנות עוסק ב-[Design Patterns](https://en.wikipedia.org/wiki/Design_Patterns).

בכל משחק יש לכם `אובייקטים במשחק` – האלמנטים האינטראקטיביים שמאכלסים את עולם המשחק שלכם. גיבורים, אויבים, חיזוקים ואפקטים חזותיים הם כולם אובייקטים במשחק. כל אחד מהם נמצא בקואורדינטות מסוימות על המסך באמצעות ערכי `x` ו-`y`, בדומה לשרטוט נקודות על מערכת צירים.

למרות ההבדלים החזותיים שלהם, אובייקטים אלו חולקים לעיתים קרובות התנהגויות בסיסיות:

- **הם קיימים איפשהו** – לכל אובייקט יש קואורדינטות x ו-y כדי שהמשחק ידע היכן לצייר אותו
- **רבים יכולים לזוז** – גיבורים רצים, אויבים רודפים, כדורים עפים על פני המסך
- **יש להם אורך חיים** – חלקם נשארים לנצח, אחרים (כמו פיצוצים) מופיעים לזמן קצר ונעלמים
- **הם מגיבים לדברים** – כשדברים מתנגשים, חיזוקים נאספים, מדדי חיים מתעדכנים

✅ חשבו על משחק כמו פאק-מן. האם תוכלו לזהות את ארבעת סוגי האובייקטים המפורטים לעיל במשחק הזה?

### ביטוי התנהגות דרך קוד

עכשיו כשאתם מבינים את ההתנהגויות המשותפות לאובייקטים במשחק, בואו נחקור איך ליישם את ההתנהגויות הללו ב-JavaScript. ניתן לבטא התנהגות אובייקט דרך מתודות שמצורפות למחלקות או לאובייקטים בודדים, ויש כמה גישות לבחירה.

**הגישה מבוססת המחלקות**

מחלקות וירושה מספקות גישה מובנית לארגון אובייקטים במשחק. כמו מערכת הסיווג הטקסונומית שפותחה על ידי קרל לינאוס, מתחילים עם מחלקת בסיס שמכילה תכונות משותפות, ואז יוצרים מחלקות מיוחדות שיורשות את היסודות הללו תוך הוספת יכולות ספציפיות.

✅ ירושה היא מושג חשוב להבנה. למדו עוד במאמר של [MDN על ירושה](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

כך ניתן ליישם אובייקטים במשחק באמצעות מחלקות וירושה:

```javascript
// Step 1: Create the base GameObject class
class GameObject {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }
}
```

**בואו נפרק את זה שלב אחר שלב:**
- אנחנו יוצרים תבנית בסיסית שכל אובייקט במשחק יכול להשתמש בה
- הבנאי שומר היכן נמצא האובייקט (`x`, `y`) ומה סוגו
- זה הופך ליסוד שעליו כל האובייקטים במשחק יבנו

```javascript
// Step 2: Add movement capability through inheritance
class Movable extends GameObject {
  constructor(x, y, type) {
    super(x, y, type); // Call parent constructor
  }

  // Add the ability to move to a new position
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}
```

**בקטע הקוד לעיל, עשינו את הדברים הבאים:**
- **הרחבנו** את מחלקת GameObject כדי להוסיף פונקציונליות של תנועה
- **קראנו** לבנאי ההורה באמצעות `super()` כדי לאתחל תכונות שהורשו
- **הוספנו** מתודה `moveTo()` שמעדכנת את מיקום האובייקט

```javascript
// Step 3: Create specific game object types
class Hero extends Movable {
  constructor(x, y) {
    super(x, y, 'Hero'); // Set type automatically
  }
}

class Tree extends GameObject {
  constructor(x, y) {
    super(x, y, 'Tree'); // Trees don't need movement
  }
}

// Step 4: Use your game objects
const hero = new Hero(0, 0);
hero.moveTo(5, 5); // Hero can move!

const tree = new Tree(10, 15);
// tree.moveTo() would cause an error - trees can't move
```

**הבנת המושגים הללו:**
- **יוצרת** סוגי אובייקטים מיוחדים שיורשים התנהגויות מתאימות
- **מדגימה** איך ירושה מאפשרת הכללת תכונות נבחרות
- **מראה** שגיבורים יכולים לזוז בעוד שעצים נשארים במקום
- **ממחישה** איך היררכיית המחלקות מונעת פעולות לא מתאימות

✅ הקדישו כמה דקות לדמיין גיבור פאק-מן (אינקי, פינקי או בלינקי, למשל) ואיך הוא היה נכתב ב-JavaScript.

**הגישה ההרכבתית**

הרכבה עוקבת אחר פילוסופיית עיצוב מודולרית, בדומה לאופן שבו מהנדסים מעצבים חלליות עם רכיבים ניתנים להחלפה. במקום לרשת ממחלקת הורה, משלבים התנהגויות ספציפיות כדי ליצור אובייקטים עם בדיוק הפונקציונליות שהם צריכים. גישה זו מציעה גמישות ללא מגבלות היררכיות נוקשות.

```javascript
// Step 1: Create base behavior objects
const gameObject = {
  x: 0,
  y: 0,
  type: ''
};

const movable = {
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
};
```

**הנה מה שהקוד הזה עושה:**
- **מגדיר** אובייקט בסיסי `gameObject` עם תכונות מיקום וסוג
- **יוצר** אובייקט התנהגות נפרד `movable` עם פונקציונליות תנועה
- **מפריד** בין נתוני מיקום ללוגיקת תנועה

```javascript
// Step 2: Compose objects by combining behaviors
const movableObject = { ...gameObject, ...movable };

// Step 3: Create factory functions for different object types
function createHero(x, y) {
  return {
    ...movableObject,
    x,
    y,
    type: 'Hero'
  };
}

function createStatic(x, y, type) {
  return {
    ...gameObject,
    x,
    y,
    type
  };
}
```

**בקטע הקוד לעיל, עשינו את הדברים הבאים:**
- **שילבנו** תכונות אובייקט בסיסיות עם התנהגות תנועה באמצעות תחביר פיזור
- **יצרנו** פונקציות מפעל שמחזירות אובייקטים מותאמים אישית
- **אפשרנו** יצירת אובייקטים גמישה ללא היררכיות מחלקות נוקשות
- **אפשרנו** לאובייקטים לקבל בדיוק את ההתנהגויות שהם צריכים

```javascript
// Step 4: Create and use your composed objects
const hero = createHero(10, 10);
hero.moveTo(5, 5); // Works perfectly!

const tree = createStatic(0, 0, 'Tree');
// tree.moveTo() is undefined - no movement behavior was composed
```

**נקודות מפתח לזכור:**
- **מרכיב** אובייקטים על ידי שילוב התנהגויות במקום ירושה
- **מספק** יותר גמישות מאשר היררכיות ירושה נוקשות
- **מאפשר** לאובייקטים לקבל בדיוק את התכונות שהם צריכים
- **משתמש** בתחביר פיזור מודרני של JavaScript לשילוב אובייקטים בצורה נקייה
```

**Which Pattern Should You Choose?**

> 💡 **Pro Tip**: Both patterns have their place in modern JavaScript development. Classes work well for clearly defined hierarchies, while composition shines when you need maximum flexibility.
> 
**Here's when to use each approach:**
- **Choose** inheritance when you have clear "is-a" relationships (a Hero *is-a* Movable object)
- **Select** composition when you need "has-a" relationships (a Hero *has* movement abilities)
- **Consider** your team's preferences and project requirements
- **Remember** that you can mix both approaches in the same application

## Communication Patterns: The Pub/Sub System

As applications grow complex, managing communication between components becomes challenging. The publish-subscribe pattern (pub/sub) solves this problem using principles similar to radio broadcasting – one transmitter can reach multiple receivers without knowing who's listening.

Consider what happens when a hero takes damage: the health bar updates, sound effects play, visual feedback appears. Rather than coupling the hero object directly to these systems, pub/sub allows the hero to broadcast a "damage taken" message. Any system that needs to respond can subscribe to this message type and react accordingly.

✅ **Pub/Sub** stands for 'publish-subscribe'

### Understanding the Pub/Sub Architecture

The pub/sub pattern keeps different parts of your application loosely coupled, meaning they can work together without being directly dependent on each other. This separation makes your code more maintainable, testable, and flexible to changes.

**The key players in pub/sub:**
- **Messages** – Simple text labels like `'PLAYER_SCORED'` that describe what happened (plus any extra info)
- **Publishers** – The objects that shout out "Something happened!" to anyone who's listening
- **Subscribers** – The objects that say "I care about that event" and react when it happens
- **Event System** – The middleman that makes sure messages get to the right listeners

### Building an Event System

Let's create a simple but powerful event system that demonstrates these concepts:

```javascript
// Step 1: Create the EventEmitter class
class EventEmitter {
  constructor() {
    this.listeners = {}; // Store all event listeners
  }
  
  // Register a listener for a specific message type
  on(message, listener) {
    if (!this.listeners[message]) {
      this.listeners[message] = [];
    }
    this.listeners[message].push(listener);
  }
  
  // Send a message to all registered listeners
  emit(message, payload = null) {
    if (this.listeners[message]) {
      this.listeners[message].forEach(listener => {
        listener(message, payload);
      });
    }
  }
}
```

**פירוט מה קורה כאן:**
- **יוצר** מערכת ניהול אירועים מרכזית באמצעות מחלקה פשוטה
- **שומר** מאזינים באובייקט שמאורגן לפי סוג הודעה
- **רושם** מאזינים חדשים באמצעות מתודת `on()`
- **משדר** הודעות לכל המאזינים המתעניינים באמצעות `emit()`
- **תומך** במטעני נתונים אופציונליים להעברת מידע רלוונטי

### חיבור הכל יחד: דוגמה מעשית

טוב, בואו נראה את זה בפעולה! נבנה מערכת תנועה פשוטה שמראה איך pub/sub יכול להיות נקי וגמיש:

```javascript
// Step 1: Define your message types
const Messages = {
  HERO_MOVE_LEFT: 'HERO_MOVE_LEFT',
  HERO_MOVE_RIGHT: 'HERO_MOVE_RIGHT',
  ENEMY_SPOTTED: 'ENEMY_SPOTTED'
};

// Step 2: Create your event system and game objects
const eventEmitter = new EventEmitter();
const hero = createHero(0, 0);
```

**הנה מה שהקוד הזה עושה:**
- **מגדיר** אובייקט קבועים כדי למנוע שגיאות הקלדה בשמות הודעות
- **יוצר** מופע של EventEmitter לטיפול בכל התקשורת
- **מאתחל** אובייקט גיבור במיקום ההתחלתי

```javascript
// Step 3: Set up event listeners (subscribers)
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.moveTo(hero.x - 5, hero.y);
  console.log(`Hero moved to position: ${hero.x}, ${hero.y}`);
});

eventEmitter.on(Messages.HERO_MOVE_RIGHT, () => {
  hero.moveTo(hero.x + 5, hero.y);
  console.log(`Hero moved to position: ${hero.x}, ${hero.y}`);
});
```

**בקטע הקוד לעיל, עשינו את הדברים הבאים:**
- **רשמנו** מאזיני אירועים שמגיבים להודעות תנועה
- **עדכנו** את מיקום הגיבור בהתאם לכיוון התנועה
- **הוספנו** רישום לקונסול כדי לעקוב אחר שינויים במיקום הגיבור
- **הפרדנו** את לוגיקת התנועה מטיפול הקלט

```javascript
// Step 4: Connect keyboard input to events (publishers)
window.addEventListener('keydown', (event) => {
  switch(event.key) {
    case 'ArrowLeft':
      eventEmitter.emit(Messages.HERO_MOVE_LEFT);
      break;
    case 'ArrowRight':
      eventEmitter.emit(Messages.HERO_MOVE_RIGHT);
      break;
  }
});
```

**הבנת המושגים הללו:**
- **מחברת** קלט מהמקלדת לאירועי משחק ללא תלות חזקה
- **מאפשרת** למערכת הקלט לתקשר עם אובייקטים במשחק בעקיפין
- **מאפשרת** למערכות רבות להגיב לאותם אירועי מקלדת
- **מקלה** על שינוי הקצאת מקשים או הוספת שיטות קלט חדשות

> 💡 **טיפ מקצועי**: היופי בדפוס הזה הוא הגמישות! תוכלו להוסיף בקלות אפקטים קוליים, רעידות מסך או אפקטים של חלקיקים על ידי פשוט הוספת מאזיני אירועים נוספים – אין צורך לשנות את קוד המקלדת או התנועה הקיים.
> 
**הנה למה תאהבו את הגישה הזו:**
- הוספת תכונות חדשות הופכת לקלה מאוד – פשוט מקשיבים לאירועים שמעניינים אתכם
- דברים רבים יכולים להגיב לאותו אירוע מבלי להפריע זה לזה
- בדיקות הופכות לפשוטות יותר כי כל חלק עובד באופן עצמאי
- כשמשהו נשבר, אתם יודעים בדיוק איפה לחפש

### למה pub/sub מתמודד היטב עם גדילה

דפוס pub/sub שומר על פשטות ככל שהאפליקציות גדלות במורכבותן. בין אם מדובר בניהול עשרות אויבים, עדכוני ממשק משתמש דינמיים או מערכות קול, הדפוס מתמודד עם גדילה מבלי לשנות את הארכיטקטורה. תכונות חדשות משתלבות במערכת האירועים הקיימת מבלי להשפיע על הפונקציונליות הקיימת.

> ⚠️ **טעות נפוצה**: אל תיצרו יותר מדי סוגי הודעות ספציפיים בשלב מוקדם. התחילו עם קטגוריות רחבות ושפרו אותן ככל שצרכי המשחק שלכם יתבהרו.
> 
**המלצות שכדאי לעקוב אחריהן:**
- **קבוצות** הודעות קשורות לקטגוריות לוגיות
- **שימוש** בשמות תיאוריים שמבהירים מה קרה
- **שמירה** על מטעני הודעות פשוטים וממוקדים
- **תיעוד** סוגי ההודעות לשיתוף פעולה בצוות

---

## אתגר סוכן GitHub Copilot 🚀

השתמשו במצב סוכן כדי להשלים את האתגר הבא:

**תיאור:** צרו מערכת אובייקטים פשוטה למשחק באמצעות גם ירושה וגם דפוס pub/sub. תיישמו משחק בסיסי שבו אובייקטים שונים יכולים לתקשר דרך אירועים מבלי לדעת ישירות אחד על השני.

**הנחיה:** צרו מערכת משחק ב-JavaScript עם הדרישות הבאות: 1) צרו מחלקת בסיס GameObject עם קואורדינטות x, y ותכונת סוג. 2) צרו מחלקת Hero שמרחיבה את GameObject ויכולה לזוז. 3) צרו מחלקת Enemy שמרחיבה את GameObject ויכולה לרדוף אחרי הגיבור. 4) יישמו מחלקת EventEmitter לדפוס pub/sub. 5) הגדירו מאזיני אירועים כך שכאשר הגיבור זז, אויבים קרובים יקבלו אירוע 'HERO_MOVED' ויעדכנו את מיקומם כדי להתקרב לגיבור. הוסיפו הצהרות console.log כדי להראות את התקשורת בין האובייקטים.

למדו עוד על [מצב סוכן](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) כאן.

## 🚀 אתגר

שקלו איך דפוס pub-sub יכול לשפר את ארכיטקטורת המשחק. זהו אילו רכיבים צריכים לשדר אירועים ואיך המערכת צריכה להגיב. תכננו רעיון למשחק ומפו את דפוסי התקשורת בין רכיביו.

## שאלון לאחר ההרצאה

[שאלון לאחר ההרצאה](https://ff-quizzes.netlify.app/web/quiz/30)

## סקירה ולימוד עצמי

למדו עוד על Pub/Sub על ידי [קריאה בנושא](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## משימה

[עצבו משחק](assignment.md)

---

**הצהרת אחריות**:  
מסמך זה תורגם באמצעות שירות תרגום AI [Co-op Translator](https://github.com/Azure/co-op-translator). למרות שאנו שואפים לדיוק, יש להיות מודעים לכך שתרגומים אוטומטיים עשויים להכיל שגיאות או אי דיוקים. המסמך המקורי בשפתו המקורית צריך להיחשב כמקור סמכותי. עבור מידע קריטי, מומלץ להשתמש בתרגום מקצועי אנושי. איננו אחראים לאי הבנות או לפרשנויות שגויות הנובעות משימוש בתרגום זה.