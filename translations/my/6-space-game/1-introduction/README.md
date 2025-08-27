<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d9da6dc61fb712b29f65e108c79b8a5d",
  "translation_date": "2025-08-27T22:27:07+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "my"
}
-->
# အာကာသဂိမ်းတစ်ခု တည်ဆောက်ခြင်း အပိုင်း ၁: နိဒါန်း

![video](../../../../6-space-game/images/pewpew.gif)

## မိန့်ခွန်းမတိုင်မီ စမ်းမေးခွန်း

[မိန့်ခွန်းမတိုင်မီ စမ်းမေးခွန်း](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/29)

### ဂိမ်းဖွံ့ဖြိုးရေးအတွက် Inheritance နှင့် Composition

ယခင်သင်ခန်းစာများတွင် သင်တည်ဆောက်ခဲ့သော app များသည် အတိုချုပ်သော ပရောဂျက်များဖြစ်သောကြောင့် ဒီဇိုင်းအဆောက်အအုံကို မသိပ်စဉ်းစားရန်လိုအပ်ခဲ့ပါ။ သို့သော် သင့် application များသည် အရွယ်အစားနှင့် အကျယ်အဝန်းကြီးလာသည်နှင့်အမျှ ဒီဇိုင်းဆိုင်ရာ ဆုံးဖြတ်ချက်များသည် ပိုမိုအရေးကြီးလာပါသည်။ JavaScript တွင် application များကို ကြီးမားစွာ ဖန်တီးရန်အတွက် နည်းလမ်းနှစ်ခုရှိပါသည် - *composition* သို့မဟုတ် *inheritance* ဖြစ်ပါသည်။ နှစ်ခုစလုံးတွင် အားသာချက်နှင့် အားနည်းချက်များရှိသော်လည်း ဂိမ်း၏အခြေခံအနေအထားမှ ရှင်းပြကြပါစို့။

✅ အတော်လေးကျော်ကြားသော programming စာအုပ်တစ်အုပ်မှာ [design patterns](https://en.wikipedia.org/wiki/Design_Patterns) အကြောင်းကို ရေးသားထားခြင်းဖြစ်ပါသည်။

ဂိမ်းတစ်ခုတွင် `game objects` ဆိုသည်မှာ မျက်နှာပြင်ပေါ်တွင် ရှိနေသော objects များဖြစ်ပါသည်။ ၎င်းတို့သည် cartesian coordinate system ပေါ်တွင် တည်ရှိနေသော `x` နှင့် `y` coordinate တို့ဖြင့် သတ်မှတ်ထားသော တည်နေရာရှိသည်။ ဂိမ်းတစ်ခု ဖန်တီးနေစဉ် သင်တွေ့ရှိမည်မှာ သင့် game objects များအားလုံးတွင် သင်ဖန်တီးသည့် ဂိမ်းတိုင်းအတွက် အခြေခံ property တစ်ခုရှိသည်။ ၎င်းတို့မှာ -

- **တည်နေရာအခြေခံ** - ဂိမ်းအရာဝတ္ထုများအများစုသည် တည်နေရာအခြေခံဖြစ်သည်။ ၎င်းတို့တွင် `x` နှင့် `y` တည်နေရာရှိသည်။
- **ရွေ့လျားနိုင်သော** - ဤအရာဝတ္ထုများသည် တည်နေရာအသစ်သို့ ရွေ့လျားနိုင်သည်။ ဤအရာဝတ္ထုများသည် များသောအားဖြင့် သူရဲကောင်း၊ အလွှာသတ္တဝါ သို့မဟုတ် NPC (ကစားသမားမဟုတ်သော ဇာတ်ကောင်) ဖြစ်သည်။ သို့သော် သစ်ပင်ကဲ့သို့ static object များမဟုတ်ပါ။
- **ကိုယ်တိုင်ဖျက်ဆီးနိုင်သော** - ဤအရာဝတ္ထုများသည် သတ်မှတ်ထားသော အချိန်ကာလအတွင်းသာ ရှိနေပြီး ၎င်းတို့ကို ဖျက်သိမ်းရန် ပြင်ဆင်ထားသည်။ ယေဘူယျအားဖြင့် ဤအရာဝတ္ထုများကို `dead` သို့မဟုတ် `destroyed` boolean ဖြင့် ဖော်ပြပြီး ဂိမ်း engine သို့ ၎င်းကို render မလုပ်ရန် အချက်ပြသည်။
- **cool-down** - 'Cool-down' သည် အချိန်တိုအတွင်းသာ ရှိနေသော အရာဝတ္ထုများအတွက် အထူး property တစ်ခုဖြစ်သည်။ ဥပမာအားဖြင့် မိနစ်ပိုင်းသာ မြင်ရမည့် စာသားတစ်ခု သို့မဟုတ် ပေါက်ကွဲမှုကဲ့သို့သော ဂရပ်ဖစ်အကျိုးသက်ရောက်မှုတစ်ခု။

✅ Pac-Man ကဲ့သို့သော ဂိမ်းတစ်ခုကို စဉ်းစားကြည့်ပါ။ ဤအရာဝတ္ထုအမျိုးအစားလေးမျိုးကို ဂိမ်းတွင် ရှာဖွေနိုင်ပါသလား?

### အပြုအမူကို ဖော်ပြခြင်း

အထက်တွင် ဖော်ပြထားသည့်အတိုင်း ဂိမ်းအရာဝတ္ထုများတွင် ရှိနိုင်သည့် အပြုအမူများကို ဖော်ပြထားပါသည်။ ဒါကို ဘယ်လို encode လုပ်မလဲ? ဤအပြုအမူများကို class များ သို့မဟုတ် object များနှင့် ဆက်စပ်ထားသော method များအဖြစ် ဖော်ပြနိုင်ပါသည်။

**Classes**

`Classes` ကို `inheritance` နှင့် တွဲဖက်ပြီး class တစ်ခုတွင် အပြုအမူတစ်ခုကို ထည့်သွင်းရန် အသုံးပြုနိုင်ပါသည်။

✅ Inheritance သည် နားလည်ရန် အရေးကြီးသော အယူအဆတစ်ခုဖြစ်သည်။ [MDN ၏ inheritance ဆောင်းပါး](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) ကို ဖတ်ရှုပါ။

Code ဖြင့် ဖော်ပြပါက ဂိမ်းအရာဝတ္ထုသည် အောက်ပါအတိုင်း ဖြစ်နိုင်ပါသည် -

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

✅ Pac-Man ၏ သူရဲကောင်း (ဥပမာ - Inky, Pinky, Blinky) ကို JavaScript ဖြင့် ဘယ်လိုရေးမလဲဆိုတာ စဉ်းစားကြည့်ပါ။

**Composition**

Object inheritance ကို ကိုင်တွယ်ရန် နည်းလမ်းကွဲတစ်ခုမှာ *Composition* ကို အသုံးပြုခြင်းဖြစ်သည်။ ထို့နောက် object များသည် ၎င်းတို့၏ အပြုအမူကို အောက်ပါအတိုင်း ဖော်ပြပါသည် -

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

**ဘယ် pattern ကို သုံးမလဲ?**

ဘယ် pattern ကို သုံးမည်ဆိုတာ သင့်အပေါ်မူတည်ပါသည်။ JavaScript သည် ဤ paradigm နှစ်ခုစလုံးကို ပံ့ပိုးပေးပါသည်။

--

ဂိမ်းဖွံ့ဖြိုးရေးတွင် ကျယ်ကျယ်ပြန့်ပြန့် အသုံးပြုသော pattern တစ်ခုမှာ ဂိမ်း၏ အသုံးပြုသူအတွေ့အကြုံနှင့် စွမ်းဆောင်ရည်ကို ကိုင်တွယ်ရန်ဖြစ်သည်။

## Pub/sub pattern

✅ Pub/Sub ဆိုသည်မှာ 'publish-subscribe' ကို ရည်ညွှန်းပါသည်။

ဤ pattern သည် သင့် application ၏ အစိတ်အပိုင်းများသည် တစ်ခုနှင့်တစ်ခု မသိစေခြင်း၏ အယူအဆကို ကိုင်တွယ်ပါသည်။ အဘယ်ကြောင့်လဲဆိုတော့ အစိတ်အပိုင်းများကို ခွဲခြားထားခြင်းဖြင့် အခြေအနေကို ပိုမိုလွယ်ကူစွာ နားလည်နိုင်စေပါသည်။ ထို့အပြင် လိုအပ်ပါက အပြုအမူကို ရုတ်တရက် ပြောင်းလဲနိုင်စေပါသည်။ ဤအရာကို ဘယ်လိုလုပ်ဆောင်မလဲ? ၎င်းကို အောက်ပါအယူအဆများကို တည်ဆောက်ခြင်းဖြင့် ပြုလုပ်ပါသည် -

- **message**: message သည် ယေဘူယျအားဖြင့် စာသား string တစ်ခုဖြစ်ပြီး အချို့သော payload (message ၏ အဓိပ္ပါယ်ကို ရှင်းလင်းပေးသော data တစ်ခု) ပါဝင်နိုင်ပါသည်။ ဂိမ်းတစ်ခုတွင် message တစ်ခုမှာ `KEY_PRESSED_ENTER` ဖြစ်နိုင်ပါသည်။
- **publisher**: ဤ element သည် message တစ်ခုကို *publish* လုပ်ပြီး subscriber များအားလုံးသို့ ပေးပို့ပါသည်။
- **subscriber**: ဤ element သည် သတ်မှတ်ထားသော message များကို *listen* လုပ်ပြီး message ရရှိသည်နှင့်တပြိုင်နက် တစ်စုံတစ်ရာလုပ်ဆောင်ပါသည်။ ဥပမာအားဖြင့် လေဆာပစ်ခြင်း။

ဤ pattern ၏ အကောင်အထည်ဖော်မှုသည် အရွယ်အစားသေးငယ်သော်လည်း အလွန်အစွမ်းထက်ပါသည်။ ၎င်းကို အောက်ပါအတိုင်း အကောင်အထည်ဖော်နိုင်ပါသည် -

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

အထက်ပါ code ကို အသုံးပြုရန်အတွက် အလွန်သေးငယ်သော အကောင်အထည်ဖော်မှုတစ်ခုကို ဖန်တီးနိုင်ပါသည် -

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

အထက်တွင် keyboard event `ArrowLeft` ကို ချိတ်ဆက်ပြီး `HERO_MOVE_LEFT` message ကို ပေးပို့ပါသည်။ ဤ message ကို နားထောင်ပြီး `hero` ကို ရွေ့လျားစေပါသည်။ ဤ pattern ၏ အားသာချက်မှာ event listener နှင့် hero တို့သည် တစ်ခုနှင့်တစ်ခု မသိစေခြင်းဖြစ်သည်။ `ArrowLeft` ကို `A` key သို့ ပြောင်းလဲနိုင်ပါသည်။ ထို့အပြင် `ArrowLeft` တွင် အခြားအရာတစ်ခုကို ပြုလုပ်စေလိုပါက eventEmitter ၏ `on` function တွင် အနည်းငယ် ပြင်ဆင်ခြင်းဖြင့် ပြုလုပ်နိုင်ပါသည် -

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

သင့်ဂိမ်းကြီးလာသည်နှင့်အမျှ အရာများ ပိုမိုရှုပ်ထွေးလာသော်လည်း ဤ pattern သည် အလွန်ရိုးရှင်းနေပြီး သင့် code သန့်ရှင်းစွာ ရှိနေပါသည်။ ဤ pattern ကို အသုံးပြုရန် အလွန်အကြံပြုပါသည်။

---

## 🚀 စိန်ခေါ်မှု

Pub-sub pattern သည် ဂိမ်းတစ်ခုကို ဘယ်လိုတိုးတက်စေမည်ကို စဉ်းစားကြည့်ပါ။ ဘယ်အစိတ်အပိုင်းများက event များကို ထုတ်လွှင့်သင့်ပြီး ဂိမ်းသည် ၎င်းတို့ကို ဘယ်လိုတုံ့ပြန်သင့်သလဲ? ဂိမ်းအသစ်တစ်ခုကို စဉ်းစားပြီး ၎င်း၏ အစိတ်အပိုင်းများ ဘယ်လိုအပြုအမူရှိမည်ကို ဖန်တီးစဉ်းစားပါ။

## မိန့်ခွန်းပြီးနောက် စမ်းမေးခွန်း

[မိန့်ခွန်းပြီးနောက် စမ်းမေးခွန်း](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/30)

## ပြန်လည်သုံးသပ်ခြင်းနှင့် ကိုယ်တိုင်လေ့လာခြင်း

Pub/Sub အကြောင်းကို [ဖတ်ရှုခြင်း](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon) ဖြင့် ပိုမိုလေ့လာပါ။

## လုပ်ငန်း

[ဂိမ်းတစ်ခုကို Mock up ပြုလုပ်ပါ](assignment.md)

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း၊ အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မမှန်ကန်မှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းဘာသာစကားဖြင့် ရေးသားထားသော စာရွက်စာတမ်းကို အာဏာရှိသော ရင်းမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူက ဘာသာပြန်မှု ဝန်ဆောင်မှုကို အသုံးပြုရန် အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအလွတ်များ သို့မဟုတ် အနားယူမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။