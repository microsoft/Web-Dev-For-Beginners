<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "979cfcce2413a87d9e4c67eb79234bc3",
  "translation_date": "2025-08-29T01:15:28+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "he"
}
-->
# בנה משחק חלל חלק 1: מבוא

![video](../../../../6-space-game/images/pewpew.gif)

## חידון לפני ההרצאה

[חידון לפני ההרצאה](https://ff-quizzes.netlify.app/web/quiz/29)

### ירושה והרכבה בפיתוח משחקים

בשיעורים הקודמים לא היה צורך רב לדאוג לארכיטקטורת העיצוב של האפליקציות שבנית, מכיוון שהפרויקטים היו קטנים בהיקפם. עם זאת, כאשר האפליקציות שלך גדלות בגודל ובהיקף, החלטות ארכיטקטוניות הופכות לחשובות יותר. ישנן שתי גישות עיקריות ליצירת אפליקציות גדולות יותר ב-JavaScript: *הרכבה* או *ירושה*. לכל אחת מהן יש יתרונות וחסרונות, אבל בואו נסביר אותן בהקשר של משחק.

✅ אחד הספרים המפורסמים ביותר על תכנות עוסק ב-[תבניות עיצוב](https://en.wikipedia.org/wiki/Design_Patterns).

במשחק יש לך `אובייקטי משחק`, שהם אובייקטים שמופיעים על המסך. המשמעות היא שיש להם מיקום במערכת קואורדינטות קרטזית, שמתאפיינת בקואורדינטות `x` ו-`y`. כשאתה מפתח משחק, תבחין שלכל אובייקטי המשחק יש תכונות סטנדרטיות, משותפות לכל משחק שאתה יוצר, כלומר אלמנטים שהם:

- **מבוססי מיקום** רוב, אם לא כל, האלמנטים במשחק מבוססי מיקום. המשמעות היא שיש להם מיקום, `x` ו-`y`.
- **ניתנים להזזה** אלו הם אובייקטים שיכולים לזוז למיקום חדש. בדרך כלל מדובר בגיבור, מפלצת או NPC (דמות שאינה שחקן), אך לא, למשל, אובייקט סטטי כמו עץ.
- **משמידים את עצמם** אלו הם אובייקטים שקיימים רק לפרק זמן מסוים לפני שהם מסמנים את עצמם למחיקה. בדרך כלל זה מיוצג על ידי בוליאני `מת` או `הושמד` שמסמן למנוע המשחק שאובייקט זה לא צריך להיות מוצג יותר.
- **בעלי זמן קירור** 'זמן קירור' הוא תכונה אופיינית לאובייקטים קצרי חיים. דוגמה טיפוסית היא טקסט או אפקט גרפי כמו פיצוץ שצריך להופיע רק לכמה אלפיות שנייה.

✅ חשבו על משחק כמו פאק-מן. האם תוכלו לזהות את ארבעת סוגי האובייקטים שצוינו לעיל במשחק הזה?

### ביטוי התנהגות

כל מה שתיארנו לעיל הוא התנהגות שאובייקטי משחק יכולים להחזיק. אז איך אנחנו מקודדים את זה? ניתן לבטא את ההתנהגות הזו כמתודות המשויכות למחלקות או לאובייקטים.

**מחלקות**

הרעיון הוא להשתמש ב-`מחלקות` בשילוב עם `ירושה` כדי להוסיף התנהגות מסוימת למחלקה.

✅ ירושה היא מושג חשוב להבנה. למדו עוד במאמר של [MDN על ירושה](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

באמצעות קוד, אובייקט משחק יכול להיראות כך:

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

✅ הקדישו כמה דקות לדמיין מחדש גיבור פאק-מן (למשל אינקי, פינקי או בלינקי) וכיצד הוא ייכתב ב-JavaScript.

**הרכבה**

דרך שונה לטפל בירושת אובייקטים היא באמצעות *הרכבה*. במקרה זה, אובייקטים מבטאים את התנהגותם כך:

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

הבחירה בתבנית תלויה בך. JavaScript תומכת בשתי הפרדיגמות הללו.

--

תבנית נוספת הנפוצה בפיתוח משחקים מתמודדת עם הבעיה של ניהול חוויית המשתמש וביצועי המשחק.

## תבנית Pub/Sub

✅ Pub/Sub מייצג 'פרסום-מנוי'

תבנית זו עוסקת ברעיון שהחלקים השונים של האפליקציה שלך לא צריכים לדעת אחד על השני. למה זה? זה מקל מאוד על הבנת מה שקורה באופן כללי אם החלקים השונים מופרדים. זה גם מקל על שינוי פתאומי של התנהגות אם יש צורך בכך. איך אנחנו משיגים את זה? אנחנו עושים זאת על ידי הגדרת כמה מושגים:

- **הודעה**: הודעה היא בדרך כלל מחרוזת טקסט שמלווה במטען אופציונלי (נתון שמבהיר על מה ההודעה). הודעה טיפוסית במשחק יכולה להיות `KEY_PRESSED_ENTER`.
- **מפרסם**: אלמנט זה *מפרסם* הודעה ושולח אותה לכל המנויים.
- **מנוי**: אלמנט זה *מאזין* להודעות מסוימות ומבצע משימה כלשהי כתוצאה מקבלת ההודעה, כמו ירי לייזר.

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

לעיל חיברנו אירוע מקלדת, `ArrowLeft`, ושלחנו את ההודעה `HERO_MOVE_LEFT`. אנחנו מאזינים להודעה זו ומזיזים את ה-`hero` כתוצאה מכך. החוזק של תבנית זו הוא שהמאזין לאירוע והגיבור לא יודעים אחד על השני. ניתן למפות מחדש את `ArrowLeft` למקש `A`. בנוסף, ניתן לעשות משהו שונה לחלוטין על `ArrowLeft` על ידי עריכת הפונקציה `on` של ה-eventEmitter:

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

כאשר המשחק שלך גדל ומסתבך, התבנית הזו נשארת באותה רמת מורכבות והקוד שלך נשאר נקי. מומלץ מאוד לאמץ תבנית זו.

---

## 🚀 אתגר

חשבו כיצד תבנית ה-Pub/Sub יכולה לשפר משחק. אילו חלקים צריכים לשדר אירועים, וכיצד המשחק צריך להגיב אליהם? עכשיו זו ההזדמנות שלך להיות יצירתיים, לחשוב על משחק חדש וכיצד חלקיו עשויים להתנהג.

## חידון לאחר ההרצאה

[חידון לאחר ההרצאה](https://ff-quizzes.netlify.app/web/quiz/30)

## סקירה ולמידה עצמית

למדו עוד על Pub/Sub על ידי [קריאה בנושא](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## משימה

[צרו דגם למשחק](assignment.md)

---

**כתב ויתור**:  
מסמך זה תורגם באמצעות שירות תרגום מבוסס בינה מלאכותית [Co-op Translator](https://github.com/Azure/co-op-translator). למרות שאנו שואפים לדיוק, יש לקחת בחשבון שתרגומים אוטומטיים עשויים להכיל שגיאות או אי-דיוקים. המסמך המקורי בשפתו המקורית נחשב למקור הסמכותי. למידע קריטי, מומלץ להשתמש בתרגום מקצועי על ידי מתרגם אנושי. איננו נושאים באחריות לכל אי-הבנה או פרשנות שגויה הנובעת משימוש בתרגום זה.