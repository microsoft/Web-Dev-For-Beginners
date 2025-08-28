<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "979cfcce2413a87d9e4c67eb79234bc3",
  "translation_date": "2025-08-28T18:40:54+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "my"
}
-->
# အာကာသဂိမ်းတည်ဆောက်ခြင်း အပိုင်း ၁: အနိမ့်ဆုံးအကျဉ်းချုပ်

![ဗီဒီယို](../../../../6-space-game/images/pewpew.gif)

## မိန့်ခွန်းမပြုမီ စစ်တမ်း

[မိန့်ခွန်းမပြုမီ စစ်တမ်း](https://ff-quizzes.netlify.app/web/quiz/29)

### ဂိမ်းတိုးတက်မှုတွင် အမွေဆက်ခြင်းနှင့် ဖွဲ့စည်းမှု

ယခင်သင်ခန်းစာများတွင် သင်တည်ဆောက်ခဲ့သော app များသည် အတိုင်းအတာသေးငယ်သောကြောင့် ဒီဇိုင်းအဆောက်အအုံကို စိုးရိမ်ရန်မလိုအပ်ခဲ့ပါ။ သို့သော် သင့် application များသည် အရွယ်အစားနှင့် အတိုင်းအတာကြီးလာသည်နှင့်အမျှ ဒီဇိုင်းဆိုင်ရာ ဆုံးဖြတ်ချက်များသည် ပိုမိုအရေးပါလာသည်။ JavaScript တွင် application ကြီးများကို ဖန်တီးရန် နည်းလမ်းကြီးနှစ်ခုရှိသည် - *ဖွဲ့စည်းမှု* သို့မဟုတ် *အမွေဆက်ခြင်း*။ နှစ်ခုစလုံးတွင် အားသာချက်နှင့် အားနည်းချက်များရှိသော်လည်း ဂိမ်း၏အခြေခံအနေအထားမှ ရှင်းလင်းဖော်ပြပါမည်။

✅ အတော်လေးကျော်ကြားသော programming စာအုပ်တစ်အုပ်မှာ [design patterns](https://en.wikipedia.org/wiki/Design_Patterns) နှင့်ဆိုင်သည်။

ဂိမ်းတွင် `game objects` ဆိုသည်မှာ screen ပေါ်တွင် ရှိနေသော objects ဖြစ်သည်။ ဒါဟာ Cartesian coordinate system ပေါ်မှာ `x` နှင့် `y` coordinate ရှိခြင်းဖြင့် သတ်မှတ်ထားသည်။ ဂိမ်းတိုးတက်လာသည်နှင့်အမျှ သင်၏ game objects များသည် သင်ဖန်တီးသော ဂိမ်းတိုင်းအတွက် အခြေခံ property တစ်ခုရှိသည်ကို သတိပြုမိပါမည်။ အဓိကအားဖြင့် အောက်ပါအရာများဖြစ်သည် -

- **တည်နေရာအခြေခံ** ဂိမ်း element များအားလုံး (သို့မဟုတ် အများစု) သည် တည်နေရာအခြေခံဖြစ်သည်။ ဒါဟာ `x` နှင့် `y` တည်နေရာရှိသည်ကို ဆိုလိုသည်။
- **ရွေ့လျားနိုင်သော** ဤ object များသည် တည်နေရာအသစ်သို့ ရွေ့လျားနိုင်သည်။ ဤသည်မှာ typically hero, monster သို့မဟုတ် NPC (non-player character) ဖြစ်သည်။ သို့သော် ဥပမာအားဖြင့် သစ်ပင်ကဲ့သို့ static object မဟုတ်ပါ။
- **ကိုယ်တိုင်ဖျက်ဆီးခြင်း** ဤ object များသည် သတ်မှတ်ထားသော အချိန်ကာလအတွင်းသာ ရှိနေပြီး ထိုအချိန်ကုန်ဆုံးသည်နှင့် ဖျက်ပစ်ရန် ပြင်ဆင်ထားသည်။ ယေဘူယျအားဖြင့် ဤသည်ကို `dead` သို့မဟုတ် `destroyed` boolean ဖြင့် ဖော်ပြပြီး ဂိမ်း engine သို့ ဤ object ကို render မလုပ်ရန် signal ပေးသည်။
- **cool-down** 'Cool-down' သည် အချိန်တိုအတွင်းသာ ရှိနေသော object များအတွက် အခြေခံ property ဖြစ်သည်။ ဥပမာအားဖြင့် milliseconds အနည်းငယ်သာ မြင်ရမည့် text သို့မဟုတ် graphical effect (ဥပမာ - ပေါက်ကွဲမှု) တစ်ခုဖြစ်သည်။

✅ Pac-Man ကဲ့သို့သော ဂိမ်းတစ်ခုကို စဉ်းစားပါ။ ဤ object အမျိုးအစားလေးခုကို ဂိမ်းတွင် ရှာဖွေနိုင်ပါသလား?

### အပြုအမူကို ဖော်ပြခြင်း

အပေါ်တွင် ဖော်ပြထားသောအရာများသည် game objects တွင် ရှိနိုင်သော အပြုအမူများဖြစ်သည်။ ဒါကို ဘယ်လို encode လုပ်မလဲ? ဤအပြုအမူကို class သို့မဟုတ် object များနှင့် ဆက်စပ်ထားသော method များအဖြစ် ဖော်ပြနိုင်သည်။

**Classes**

`classes` ကို `inheritance` နှင့် တွဲဖက်အသုံးပြု၍ class တစ်ခုတွင် အပြုအမူတစ်ခု ထည့်သွင်းရန် ရည်ရွယ်ချက်ရှိသည်။

✅ အမွေဆက်ခြင်းသည် နားလည်ရန် အရေးပါသော အယူအဆတစ်ခုဖြစ်သည်။ [MDN ရဲ့ အမွေဆက်ခြင်းဆောင်းပါး](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) ကို ဖတ်ရှုပါ။

Code ဖြင့် ဖော်ပြပါက game object သည် အောက်ပါအတိုင်း ဖြစ်နိုင်သည် -

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

✅ Pac-Man hero (ဥပမာ - Inky, Pinky, Blinky) ကို JavaScript ဖြင့် ဘယ်လိုရေးမလဲဆိုတာ စဉ်းစားရန် အချိန်အနည်းငယ်ယူပါ။

**Composition**

Object inheritance ကို ကိုင်တွယ်ရန် နည်းလမ်းကွဲတစ်ခုမှာ *Composition* ကို အသုံးပြုခြင်းဖြစ်သည်။ ထို့နောက် object များသည် အပြုအမူကို အောက်ပါအတိုင်း ဖော်ပြသည် -

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

**ဘယ် pattern ကို သုံးသင့်သလဲ?**

ဘယ် pattern ကို သုံးမည်ဆိုတာ သင့်ရဲ့ ရွေးချယ်မှုအပေါ် မူတည်သည်။ JavaScript သည် ဤ paradigm နှစ်ခုစလုံးကို ပံ့ပိုးပေးသည်။

--

ဂိမ်းတိုးတက်မှုတွင် အသုံးများသော pattern တစ်ခုသည် ဂိမ်း၏ user experience နှင့် performance ကို ကိုင်တွယ်ရန် ပြဿနာကို ဖြေရှင်းပေးသည်။

## Pub/sub pattern

✅ Pub/Sub သည် 'publish-subscribe' ကို ဆိုလိုသည်။

ဤ pattern သည် application ၏ အစိတ်အပိုင်းများသည် တစ်ခုနှင့်တစ်ခု မသိအောင်ထားသင့်သည်ဆိုသော အယူအဆကို ကိုင်တွယ်သည်။ အဘယ်ကြောင့်လဲ? အစိတ်အပိုင်းများကို ခွဲခြားထားပါက အထွေထွေမှာ ဘာဖြစ်နေလဲဆိုတာ ပိုမိုလွယ်ကူစွာ မြင်နိုင်သည်။ ထို့အပြင် သင်လိုအပ်ပါက အပြုအမူကို ရုတ်တရက် ပြောင်းလဲရန်လည်း ပိုမိုလွယ်ကူစေသည်။ ဤအရာကို ဘယ်လိုအောင်မြင်စေမလဲ? ဤအရာကို အောက်ပါအယူအဆများကို တည်ဆောက်ခြင်းဖြင့် ပြုလုပ်သည် -

- **message**: message သည် text string တစ်ခုဖြစ်ပြီး optional payload (message အကြောင်းကို ရှင်းလင်းပေးသော data အပိုင်း) တစ်ခုနှင့် တွဲဖက်ထားသည်။ ဂိမ်းတွင် သာမန် message တစ်ခုမှာ `KEY_PRESSED_ENTER` ဖြစ်နိုင်သည်။
- **publisher**: ဤ element သည် message တစ်ခုကို *publish* လုပ်ပြီး subscriber အားလုံးထံ ပေးပို့သည်။
- **subscriber**: ဤ element သည် သတ်မှတ်ထားသော message များကို *listen* လုပ်ပြီး message ကို ရရှိသောအခါ laser ပစ်ခြင်းကဲ့သို့သော task တစ်ခုကို ဆောင်ရွက်သည်။

Implementation သည် အရွယ်အစားသေးငယ်သော်လည်း အလွန်အစွမ်းထက်သော pattern ဖြစ်သည်။ ဤအရာကို အောက်ပါအတိုင်း implement လုပ်နိုင်သည် -

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

အထက်ပါ code ကို အသုံးပြုရန် အလွန်သေးငယ်သော implementation တစ်ခုကို ဖန်တီးနိုင်သည် -

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

အထက်တွင် keyboard event `ArrowLeft` ကို ချိတ်ဆက်ပြီး `HERO_MOVE_LEFT` message ကို ပေးပို့သည်။ ဤ message ကို listen လုပ်ပြီး hero ကို ရလဒ်အနေနှင့် ရွေ့လျားသည်။ ဤ pattern ၏ အားသာချက်မှာ event listener နှင့် hero တစ်ခုနှင့်တစ်ခု မသိအောင်ထားသည်။ `ArrowLeft` ကို `A` key သို့ remap ပြုလုပ်နိုင်သည်။ ထို့အပြင် `ArrowLeft` တွင် အခြားအရာတစ်ခုကို ပြုလုပ်ရန်လည်း eventEmitter ရဲ့ `on` function ကို အနည်းငယ် edit လုပ်ခြင်းဖြင့် အလွယ်တကူ ပြုလုပ်နိုင်သည် -

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

သင့်ဂိမ်းကြီးလာသည်နှင့်အမျှ အရာများ ပိုမိုရှုပ်ထွေးလာသော်လည်း ဤ pattern သည် ရှုပ်ထွေးမှုအတူတူရှိနေပြီး သင့် code သည် သန့်ရှင်းနေသည်။ ဤ pattern ကို လက်ခံအသုံးပြုရန် အလွန်အကြံပြုပါသည်။

---

## 🚀 စိန်ခေါ်မှု

Pub-sub pattern သည် ဂိမ်းတစ်ခုကို ဘယ်လိုတိုးတက်စေမည်ကို စဉ်းစားပါ။ ဘယ်အစိတ်အပိုင်းများသည် events ကို emit လုပ်သင့်ပြီး ဂိမ်းသည် အဲဒီ events များကို ဘယ်လိုတုံ့ပြန်သင့်သလဲ? ဂိမ်းအသစ်တစ်ခုကို စဉ်းစားပြီး အဲဒီအစိတ်အပိုင်းများသည် ဘယ်လိုအပြုအမူရှိမည်ကို ဖန်တီးရန် အခွင့်အရေးရှိပါသည်။

## မိန့်ခွန်းပြီးနောက် စစ်တမ်း

[မိန့်ခွန်းပြီးနောက် စစ်တမ်း](https://ff-quizzes.netlify.app/web/quiz/30)

## ပြန်လည်သုံးသပ်ခြင်းနှင့် ကိုယ်တိုင်လေ့လာခြင်း

Pub/Sub အကြောင်းကို [ဖတ်ရှုခြင်း](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon) ဖြင့် ပိုမိုလေ့လာပါ။

## လုပ်ငန်း

[ဂိမ်းတစ်ခုကို Mock up ပြုလုပ်ပါ](assignment.md)

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း၊ အလိုအလျောက် ဘာသာပြန်ခြင်းတွင် အမှားများ သို့မဟုတ် မတိကျမှုများ ပါရှိနိုင်သည်ကို သတိပြုပါ။ မူရင်းဘာသာစကားဖြင့် ရေးသားထားသော စာရွက်စာတမ်းကို အာဏာရှိသော ရင်းမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူ့ဘာသာပြန်ပညာရှင်များမှ ပရော်ဖက်ရှင်နယ် ဘာသာပြန်ခြင်းကို အကြံပြုပါသည်။ ဤဘာသာပြန်ကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအမှားများ သို့မဟုတ် အနားလွဲမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။