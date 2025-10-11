<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "979cfcce2413a87d9e4c67eb79234bc3",
  "translation_date": "2025-10-11T12:14:13+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "ta"
}
-->
# விண்வெளி விளையாட்டு உருவாக்கம் பகுதி 1: அறிமுகம்

![video](../../../../6-space-game/images/pewpew.gif)

## முன்-வகுப்பு வினாடி வினா

[முன்-வகுப்பு வினாடி வினா](https://ff-quizzes.netlify.app/web/quiz/29)

### விளையாட்டு மேம்பாட்டில் மரபுரிமை மற்றும் கலவை

முந்தைய பாடங்களில், நீங்கள் உருவாக்கிய செயலிகளின் வடிவமைப்பு கட்டமைப்பைப் பற்றி அதிகம் கவலைப்பட வேண்டிய அவசியம் இல்லை, ஏனெனில் திட்டங்கள் மிகவும் சிறிய அளவிலிருந்தன. ஆனால், உங்கள் செயலிகள் அளவிலும் பரப்பிலும் வளரும்போது, கட்டமைப்பு முடிவுகள் முக்கியமான கவலையாக மாறுகின்றன. JavaScript-இல் பெரிய செயலிகளை உருவாக்க இரண்டு முக்கிய அணுகுமுறைகள் உள்ளன: *கலவை* அல்லது *மரபுரிமை*. இரண்டிற்கும் நன்மைகள் மற்றும் குறைகள் உள்ளன, ஆனால் அவற்றை விளையாட்டின் சூழலில் விளக்கலாம்.

✅ [வடிவமைப்பு முறை](https://en.wikipedia.org/wiki/Design_Patterns) பற்றிய உலகின் மிகவும் பிரபலமான நிரலாக்க புத்தகங்களில் ஒன்று.

ஒரு விளையாட்டில் `game objects` எனப்படும் பொருட்கள் திரையில் காணப்படும் பொருட்களாகும். இதன் பொருள், அவற்றுக்கு கார்டீசியன் கோட்பாடு அமைப்பில் ஒரு இடம் உள்ளது, இது `x` மற்றும் `y` கோட்பாடுகளால் விவரிக்கப்படுகிறது. நீங்கள் ஒரு விளையாட்டை உருவாக்கும்போது, உங்கள் விளையாட்டு பொருட்கள் அனைத்துக்கும் ஒரு நிலையான பண்புகள் உள்ளன என்பதை கவனிக்கலாம், இது நீங்கள் உருவாக்கும் ஒவ்வொரு விளையாட்டிற்கும் பொதுவானது, அதாவது:

- **இடம் சார்ந்தவை** பெரும்பாலான, அல்லது அனைத்து விளையாட்டு பொருட்களும் இடம் சார்ந்தவை. இதன் பொருள், அவற்றுக்கு ஒரு இடம் உள்ளது, `x` மற்றும் `y`.
- **நகர்த்தக்கவை** இவை புதிய இடத்திற்கு நகர்த்தக்கூடிய பொருட்கள். இது பொதுவாக ஒரு ஹீரோ, ஒரு மான்ஸ்டர் அல்லது ஒரு NPC (non-player character) ஆகும், ஆனால் உதாரணமாக, ஒரு மரம் போன்ற நிலையான பொருட்களுக்காக அல்ல.
- **சுய அழிப்பு** இவை ஒரு குறிப்பிட்ட காலத்திற்கு மட்டுமே இருக்கும் பொருட்கள், பின்னர் தங்களை நீக்குவதற்கான ஏற்பாடுகளைச் செய்கின்றன. இது பொதுவாக `dead` அல்லது `destroyed` எனப்படும் boolean மூலம் பிரதிநிதித்துவம் செய்யப்படுகிறது, இது இந்த பொருள் இனி காட்சிப்படுத்தப்படக்கூடாது என்று விளையாட்டு இயந்திரத்திற்கு சிக்னல் செய்கிறது.
- **கூல்-டவுன்** 'கூல்-டவுன்' என்பது குறுகிய காலத்திற்கு மட்டுமே இருக்கும் பொருட்களுக்கிடையே ஒரு பொதுவான பண்பாகும். ஒரு குறிப்பிட்ட உதாரணம், வெடிப்பு போன்ற ஒரு உரை அல்லது கிராஃபிகல் விளைவு, சில மில்லி விநாடிகளுக்கு மட்டுமே காணப்பட வேண்டும்.

✅ Pac-Man போன்ற ஒரு விளையாட்டைப் பற்றி சிந்தியுங்கள். இந்த விளையாட்டில் மேலே குறிப்பிடப்பட்ட நான்கு பொருள் வகைகளை நீங்கள் அடையாளம் காண முடியுமா?

### நடத்தை வெளிப்படுத்துதல்

மேலே விவரிக்கப்பட்டவை அனைத்தும் விளையாட்டு பொருட்களுக்கு இருக்கும் நடத்தை. அதைப் எப்படி குறியீட்டில் பதிவு செய்வது? இந்த நடத்தை `classes` அல்லது `objects`-க்கு தொடர்புடைய முறைகளாக வெளிப்படுத்தலாம்.

**Classes**

இந்த யோசனை `classes`-ஐ `inheritance` உடன் இணைத்து ஒரு வகுப்பிற்கு ஒரு குறிப்பிட்ட நடத்தை சேர்க்கும் நோக்கத்துடன் பயன்படுத்துவது.

✅ மரபுரிமை என்பது புரிந்து கொள்ள முக்கியமான கருத்தாகும். [MDN-இன் மரபுரிமை பற்றிய கட்டுரை](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) பற்றி மேலும் அறிக.

குறியீட்டில் வெளிப்படுத்தப்பட்டால், ஒரு விளையாட்டு பொருள் பொதுவாக இவ்வாறு இருக்கும்:

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

✅ Pac-Man ஹீரோ (உதாரணமாக Inky, Pinky அல்லது Blinky) மற்றும் அது JavaScript-இல் எப்படி எழுதப்படும் என்பதை மீண்டும் கற்பனை செய்ய சில நிமிடங்கள் எடுத்துக்கொள்ளுங்கள்.

**Composition**

மரபுரிமையை கையாளும் ஒரு வேறு வழி *Composition* பயன்படுத்துவதால். பின்னர், பொருட்கள் தங்கள் நடத்தை இவ்வாறு வெளிப்படுத்துகின்றன:

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

**எந்த முறைபாட்டை நான் பயன்படுத்த வேண்டும்?**

நீங்கள் எந்த முறைபாட்டை தேர்வு செய்வது என்பது உங்கள் விருப்பம். JavaScript இந்த இரண்டு பரிமாணங்களையும் ஆதரிக்கிறது.

--

விளையாட்டு மேம்பாட்டில் பொதுவாக காணப்படும் மற்றொரு முறைபாடு, விளையாட்டின் பயனர் அனுபவம் மற்றும் செயல்திறனை கையாளும் பிரச்சினையைத் தீர்க்கிறது.

## Pub/sub முறைபாடு

✅ Pub/Sub என்பது 'publish-subscribe' என்பதற்கான சுருக்கமாகும்.

இந்த முறைபாடு உங்கள் செயலியின் வெவ்வேறு பகுதிகள் ஒன்றை மற்றொன்று பற்றி அறியக்கூடாது என்ற யோசனையைத் தீர்க்கிறது. ஏன்? இது பொதுவாக என்ன நடக்கிறது என்பதைப் பார்க்க மிகவும் எளிதாகிறது, மேலும் நீங்கள் தேவையானால் நடத்தை திடீரென மாற்றுவதும் எளிதாகிறது. இதை எவ்வாறு சாதிக்கலாம்? இதைச் செய்ய சில கருத்துகளை நிறுவுகிறோம்:

- **message**: ஒரு message என்பது பொதுவாக ஒரு உரை சரம் மற்றும் விருப்பமான payload (message பற்றிய وضوحத்தை வழங்கும் தரவின் ஒரு துண்டு) உடன் வரும். ஒரு விளையாட்டில் ஒரு message பொதுவாக `KEY_PRESSED_ENTER` ஆக இருக்கலாம்.
- **publisher**: இந்த கூறு ஒரு message-ஐ *publish* செய்கிறது மற்றும் அனைத்து subscribers-களுக்கும் அனுப்புகிறது.
- **subscriber**: இந்த கூறு குறிப்பிட்ட message-களை *listen* செய்கிறது மற்றும் இந்த message-ஐ பெறுவதற்கான விளைவாக ஒரு பணியைச் செய்கிறது, உதாரணமாக ஒரு laser-ஐ சுடுதல்.

இந்த முறைபாட்டின் செயல்பாடு மிகவும் சிறிய அளவிலுள்ளது, ஆனால் இது மிகவும் சக்திவாய்ந்தது. இதை எவ்வாறு செயல்படுத்தலாம்:

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

மேலே உள்ள குறியீட்டை பயன்படுத்த, ஒரு மிகச் சிறிய செயல்பாட்டை உருவாக்கலாம்:

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

மேலே, ஒரு keyboard நிகழ்வை `ArrowLeft`-க்கு இணைத்து `HERO_MOVE_LEFT` message-ஐ அனுப்புகிறோம். அந்த message-ஐ கேட்டு, `hero`-ஐ அதன் விளைவாக நகர்த்துகிறோம். இந்த முறைபாட்டின் வலிமை என்னவென்றால், event listener மற்றும் hero ஒன்றை மற்றொன்று பற்றி அறியாது. நீங்கள் `ArrowLeft`-ஐ `A` key-க்கு remap செய்யலாம். மேலும், `ArrowLeft`-ல் முற்றிலும் வேறொரு செயல்பாட்டைச் செய்ய முடியும், eventEmitter-இன் `on` செயல்பாட்டில் சில திருத்தங்களைச் செய்வதன் மூலம்:

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

உங்கள் விளையாட்டு வளரும்போது விஷயங்கள் மேலும் சிக்கலாக மாறும்போது, இந்த முறைபாடு சிக்கலின் அளவில் மாறாமல் இருக்கும், மேலும் உங்கள் குறியீடு சுத்தமாக இருக்கும். இந்த முறைபாட்டை ஏற்றுக்கொள்வது மிகவும் பரிந்துரைக்கப்படுகிறது.

---

## 🚀 சவால்

Pub-sub முறைபாடு ஒரு விளையாட்டை எவ்வாறு மேம்படுத்த முடியும் என்று சிந்தியுங்கள். எந்த பகுதிகள் நிகழ்வுகளை வெளியிட வேண்டும், மற்றும் விளையாட்டு அவற்றுக்கு எப்படி பதிலளிக்க வேண்டும்? புதிய விளையாட்டை உருவாக்கி அதன் பகுதிகள் எப்படி நடந்து கொள்ள வேண்டும் என்று சிந்திக்க இது உங்கள் வாய்ப்பு.

## வகுப்புக்குப் பின் வினாடி வினா

[வகுப்புக்குப் பின் வினாடி வினா](https://ff-quizzes.netlify.app/web/quiz/30)

## மதிப்பீடு மற்றும் சுயபயிற்சி

Pub/Sub பற்றி மேலும் அறிய [இதைப் படிக்கவும்](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## பணிக்கூற்று

[ஒரு விளையாட்டை உருவாக்கவும்](assignment.md)

---

**குறிப்பு**:  
இந்த ஆவணம் [Co-op Translator](https://github.com/Azure/co-op-translator) என்ற AI மொழிபெயர்ப்பு சேவையைப் பயன்படுத்தி மொழிபெயர்க்கப்பட்டுள்ளது. நாங்கள் துல்லியத்திற்காக முயற்சிக்கின்றோம், ஆனால் தானியங்கி மொழிபெயர்ப்புகளில் பிழைகள் அல்லது தவறான தகவல்கள் இருக்கக்கூடும் என்பதை தயவுசெய்து கவனத்தில் கொள்ளுங்கள். அதன் தாய்மொழியில் உள்ள மூல ஆவணம் அதிகாரப்பூர்வ ஆதாரமாக கருதப்பட வேண்டும். முக்கியமான தகவல்களுக்கு, தொழில்முறை மனித மொழிபெயர்ப்பு பரிந்துரைக்கப்படுகிறது. இந்த மொழிபெயர்ப்பைப் பயன்படுத்துவதால் ஏற்படும் எந்த தவறான புரிதல்கள் அல்லது தவறான விளக்கங்களுக்கு நாங்கள் பொறுப்பல்ல.