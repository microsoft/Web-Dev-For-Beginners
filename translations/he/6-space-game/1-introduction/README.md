<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d9da6dc61fb712b29f65e108c79b8a5d",
  "translation_date": "2025-08-27T20:28:41+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "he"
}
-->
# בניית משחק חלל חלק 1: מבוא

![video](../../../../6-space-game/images/pewpew.gif)

## שאלון לפני ההרצאה

[שאלון לפני ההרצאה](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/29)

### ירושה והרכבה בפיתוח משחקים

בשיעורים קודמים לא היה צורך רב לדאוג לארכיטקטורת העיצוב של האפליקציות שבניתם, מכיוון שהפרויקטים היו קטנים בהיקפם. עם זאת, כאשר האפליקציות שלכם גדלות בגודל ובהיקף, החלטות ארכיטקטוניות הופכות לדאגה משמעותית יותר. ישנן שתי גישות עיקריות ליצירת אפליקציות גדולות יותר ב-JavaScript: *הרכבה* או *ירושה*. לכל אחת מהן יש יתרונות וחסרונות, אך בואו נסביר אותן בהקשר של משחק.

✅ אחד הספרים המפורסמים ביותר על תכנות עוסק ב-[תבניות עיצוב](https://en.wikipedia.org/wiki/Design_Patterns).

במשחק יש לכם `אובייקטים במשחק`, שהם אובייקטים שמופיעים על המסך. המשמעות היא שיש להם מיקום במערכת קואורדינטות קרטזית, שמתאפיינת בקואורדינטות `x` ו-`y`. כשאתם מפתחים משחק, תבחינו שכל האובייקטים במשחק שלכם חולקים תכונה סטנדרטית, משותפת לכל משחק שאתם יוצרים, כלומר אלמנטים שהם:

- **מבוססי מיקום** רוב, אם לא כל, האלמנטים במשחק מבוססי מיקום. המשמעות היא שיש להם מיקום, `x` ו-`y`.
- **ניתנים לתזוזה** אלו אובייקטים שיכולים לזוז למיקום חדש. בדרך כלל מדובר בגיבור, מפלצת או NPC (דמות שאינה שחקן), אך לא למשל אובייקט סטטי כמו עץ.
- **משמידים את עצמם** אלו אובייקטים שקיימים רק לתקופה מוגבלת לפני שהם מסמנים את עצמם למחיקה. בדרך כלל זה מיוצג על ידי משתנה בוליאני `מת` או `הושמד` שמסמן למנוע המשחק שאובייקט זה לא צריך להיות מוצג יותר.
- **זמן המתנה** 'זמן המתנה' הוא תכונה טיפוסית בקרב אובייקטים קצרי חיים. דוגמה טיפוסית היא טקסט או אפקט גרפי כמו פיצוץ שצריך להופיע רק לכמה מילישניות.

✅ חשבו על משחק כמו פאק-מן. האם תוכלו לזהות את ארבעת סוגי האובייקטים שצוינו לעיל במשחק הזה?

### ביטוי התנהגות

כל מה שתיארנו לעיל הוא התנהגות שאובייקטים במשחק יכולים להחזיק. אז איך אנחנו מקודדים את זה? אנחנו יכולים לבטא את ההתנהגות הזו כמתודות שמקושרות למחלקות או לאובייקטים.

**מחלקות**

הרעיון הוא להשתמש ב-`מחלקות` בשילוב עם `ירושה` כדי להוסיף התנהגות מסוימת למחלקה.

✅ ירושה היא מושג חשוב להבנה. למדו עוד במאמר של [MDN על ירושה](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

ביטוי בקוד, אובייקט במשחק יכול להיראות כך:

```javascript

//set up the class GameObject
class GameObject {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }
}

//this class will extend the GameObject's inherent class properties
class Movable extends GameObject {
  constructor(x,y, type) {
    super(x,y, type)
  }

//this movable object can be moved on the screen
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}

//this is a specific class that extends the Movable class, so it can take advantage of all the properties that it inherits
class Hero extends Movable {
  constructor(x,y) {
    super(x,y, 'Hero')
  }
}

//this class, on the other hand, only inherits the GameObject properties
class Tree extends GameObject {
  constructor(x,y) {
    super(x,y, 'Tree')
  }
}

//a hero can move...
const hero = new Hero();
hero.moveTo(5,5);

//but a tree cannot
const tree = new Tree();
```

✅ הקדישו כמה דקות לדמיין מחדש גיבור פאק-מן (למשל אינקי, פינקי או בלינקי) ואיך הוא היה נכתב ב-JavaScript.

**הרכבה**

דרך שונה לטפל בירושה של אובייקטים היא באמצעות *הרכבה*. אז, אובייקטים מבטאים את ההתנהגות שלהם כך:

```javascript
//create a constant gameObject
const gameObject = {
  x: 0,
  y: 0,
  type: ''
};

//...and a constant movable
const movable = {
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}
//then the constant movableObject is composed of the gameObject and movable constants
const movableObject = {...gameObject, ...movable};

//then create a function to create a new Hero who inherits the movableObject properties
function createHero(x, y) {
  return {
    ...movableObject,
    x,
    y,
    type: 'Hero'
  }
}
//...and a static object that inherits only the gameObject properties
function createStatic(x, y, type) {
  return {
    ...gameObject
    x,
    y,
    type
  }
}
//create the hero and move it
const hero = createHero(10,10);
hero.moveTo(5,5);
//and create a static tree which only stands around
const tree = createStatic(0,0, 'Tree'); 
```

**איזו תבנית כדאי לי להשתמש?**

זה תלוי בכם איזו תבנית תבחרו. JavaScript תומכת בשתי הפרדיגמות הללו.

--

תבנית נוספת נפוצה בפיתוח משחקים מתמודדת עם הבעיה של טיפול בחוויית המשתמש ובביצועי המשחק.

## תבנית Pub/Sub

✅ Pub/Sub מייצג 'פרסום-מנוי'

תבנית זו מתמודדת עם הרעיון שהחלקים השונים של האפליקציה שלכם לא צריכים לדעת אחד על השני. למה זה חשוב? זה הופך את הדברים להרבה יותר ברורים אם החלקים השונים מופרדים. זה גם מקל על שינוי פתאומי של התנהגות אם יש צורך בכך. איך אנחנו משיגים את זה? אנחנו עושים זאת על ידי הגדרת כמה מושגים:

- **הודעה**: הודעה היא בדרך כלל מחרוזת טקסט שמלווה במטען אופציונלי (נתון שמבהיר על מה ההודעה). הודעה טיפוסית במשחק יכולה להיות `KEY_PRESSED_ENTER`.
- **מפרסם**: אלמנט זה *מפרסם* הודעה ושולח אותה לכל המנויים.
- **מנוי**: אלמנט זה *מאזין* להודעות ספציפיות ומבצע משימה כתוצאה מקבלת ההודעה, כמו ירי לייזר.

היישום הוא קטן בגודלו אך מדובר בתבנית חזקה מאוד. כך ניתן ליישם אותה:

```javascript
//set up an EventEmitter class that contains listeners
class EventEmitter {
  constructor() {
    this.listeners = {};
  }
//when a message is received, let the listener to handle its payload
  on(message, listener) {
    if (!this.listeners[message]) {
      this.listeners[message] = [];
    }
    this.listeners[message].push(listener);
  }
//when a message is sent, send it to a listener with some payload
  emit(message, payload = null) {
    if (this.listeners[message]) {
      this.listeners[message].forEach(l => l(message, payload))
    }
  }
}

```

כדי להשתמש בקוד לעיל, ניתן ליצור יישום קטן מאוד:

```javascript
//set up a message structure
const Messages = {
  HERO_MOVE_LEFT: 'HERO_MOVE_LEFT'
};
//invoke the eventEmitter you set up above
const eventEmitter = new EventEmitter();
//set up a hero
const hero = createHero(0,0);
//let the eventEmitter know to watch for messages pertaining to the hero moving left, and act on it
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});

//set up the window to listen for the keyup event, specifically if the left arrow is hit, emit a message to move the hero left
window.addEventListener('keyup', (evt) => {
  if (evt.key === 'ArrowLeft') {
    eventEmitter.emit(Messages.HERO_MOVE_LEFT)
  }
});
```

לעיל אנחנו מחברים אירוע מקלדת, `ArrowLeft` ושולחים את ההודעה `HERO_MOVE_LEFT`. אנחנו מאזינים להודעה הזו ומזיזים את ה-`hero` כתוצאה מכך. היתרון בתבנית זו הוא שהמאזין לאירוע והגיבור לא יודעים אחד על השני. ניתן למפות מחדש את `ArrowLeft` למקש `A`. בנוסף, ניתן לעשות משהו שונה לחלוטין על `ArrowLeft` על ידי ביצוע כמה עריכות לפונקציית `on` של ה-eventEmitter:

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

כשהמשחק שלכם גדל והופך למורכב יותר, התבנית הזו נשארת באותה רמת מורכבות והקוד שלכם נשאר נקי. מומלץ מאוד לאמץ את התבנית הזו.

---

## 🚀 אתגר

חשבו כיצד תבנית Pub/Sub יכולה לשפר משחק. אילו חלקים צריכים לשדר אירועים, וכיצד המשחק צריך להגיב אליהם? עכשיו זו ההזדמנות שלכם להיות יצירתיים, לחשוב על משחק חדש ואיך החלקים שלו עשויים להתנהג.

## שאלון אחרי ההרצאה

[שאלון אחרי ההרצאה](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/30)

## סקירה ולימוד עצמי

למדו עוד על Pub/Sub על ידי [קריאה בנושא](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## משימה

[צרו סקיצה למשחק](assignment.md)

---

**כתב ויתור**:  
מסמך זה תורגם באמצעות שירות תרגום מבוסס בינה מלאכותית [Co-op Translator](https://github.com/Azure/co-op-translator). למרות שאנו שואפים לדיוק, יש לקחת בחשבון שתרגומים אוטומטיים עשויים להכיל שגיאות או אי דיוקים. המסמך המקורי בשפתו המקורית צריך להיחשב כמקור סמכותי. עבור מידע קריטי, מומלץ להשתמש בתרגום מקצועי על ידי אדם. איננו נושאים באחריות לאי הבנות או לפרשנויות שגויות הנובעות משימוש בתרגום זה.