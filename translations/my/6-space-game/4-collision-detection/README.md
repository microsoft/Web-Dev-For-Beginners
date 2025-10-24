<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4b1d441cfd31924084956000c0fee5a5",
  "translation_date": "2025-10-24T16:58:36+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "my"
}
-->
# အာကာသဂိမ်းတည်ဆောက်ခြင်း အပိုင်း ၄: လေဆာထည့်သွင်းခြင်းနှင့် တိုက်မိမှုများကို ရှာဖွေခြင်း

## မိန့်ခွန်းမပြောမီ စမ်းမေးခွန်း

[မိန့်ခွန်းမပြောမီ စမ်းမေးခွန်း](https://ff-quizzes.netlify.app/web/quiz/35)

Star Wars မှာ Luke ရဲ့ proton torpedoes က Death Star ရဲ့ exhaust port ကို ထိမှန်တဲ့အချိန်ကို သတိရပါ။ အဲ့ဒီတိကျတဲ့ တိုက်မိမှုရှာဖွေမှုက ဂလက်ဆီရဲ့ အနာဂတ်ကို ပြောင်းလဲစေခဲ့ပါတယ်! ဂိမ်းတွေမှာလည်း တိုက်မိမှုရှာဖွေမှုက အတူတူပဲ - အရာဝတ္ထုတွေ အပြန်အလှန်ဆက်သွယ်တဲ့အခါ ဘာတွေဖြစ်မလဲဆိုတာကို ဆုံးဖြတ်ပေးပါတယ်။

ဒီသင်ခန်းစာမှာ သင့်အာကာသဂိမ်းမှာ လေဆာလက်နက်တွေ ထည့်သွင်းပြီး တိုက်မိမှုရှာဖွေမှုကို အကောင်အထည်ဖော်ပါမယ်။ NASA ရဲ့ မစ်ရှင်အစီအစဉ်ရေးဆွဲသူတွေက အာကာသယာဉ်တွေ debris တွေကို ရှောင်ရှားဖို့ trajectory တွေတွက်ချက်တဲ့အတိုင်း သင်လည်း ဂိမ်းအရာဝတ္ထုတွေ intersection ဖြစ်တဲ့အခါကို ရှာဖွေတတ်လာပါမယ်။ ဒီကို အဆင့်ဆင့် ခွဲခြားပြီး လေ့လာသွားမှာဖြစ်ပါတယ်။

သင်ခန်းစာအဆုံးမှာတော့ လေဆာတွေက ရန်သူတွေကို ဖျက်ဆီးပြီး တိုက်မိမှုတွေက ဂိမ်းအဖြစ်အပျက်တွေကို ဖြစ်ပေါ်စေတဲ့ combat system တစ်ခုကို ရရှိမှာဖြစ်ပါတယ်။ ဒီတိုက်မိမှုအခြေခံအချက်တွေဟာ physics simulation တွေကနေ interactive web interface တွေထိ အားလုံးမှာ အသုံးပြုနေပါတယ်။

✅ ပထမဆုံးရေးသားခဲ့တဲ့ ကွန်ပျူတာဂိမ်းအကြောင်းကို သုတေသနလေးလုပ်ကြည့်ပါ။ အဲ့ဒီဂိမ်းရဲ့ လုပ်ဆောင်ချက်က ဘာလဲ?

## တိုက်မိမှုရှာဖွေမှု

တိုက်မိမှုရှာဖွေမှုဟာ Apollo lunar module ရဲ့ proximity sensors လိုပဲ - အမြဲတမ်း အကွာအဝေးတွေကို စစ်ဆေးပြီး အရာဝတ္ထုတွေ အနီးကပ်လာတဲ့အခါ alert တွေကို trigger လုပ်ပါတယ်။ ဂိမ်းတွေမှာတော့ ဒီစနစ်က အရာဝတ္ထုတွေ အပြန်အလှန်ဆက်သွယ်တဲ့အခါ ဘာတွေဖြစ်မလဲဆိုတာကို ဆုံးဖြတ်ပေးပါတယ်။

ဒီသင်ခန်းစာမှာ သင့်အာကာသဂိမ်းမှာ လေဆာလက်နက်တွေ ထည့်သွင်းပြီး တိုက်မိမှုရှာဖွေမှုကို အကောင်အထည်ဖော်ပါမယ်။ NASA ရဲ့ မစ်ရှင်အစီအစဉ်ရေးဆွဲသူတွေက အာကာသယာဉ်တွေ debris တွေကို ရှောင်ရှားဖို့ trajectory တွေတွက်ချက်တဲ့အတိုင်း သင်လည်း ဂိမ်းအရာဝတ္ထုတွေ intersection ဖြစ်တဲ့အခါကို ရှာဖွေတတ်လာပါမယ်။ 

### Rectangle ကိုယ်စားပြုမှု

ဂိမ်းအရာဝတ္ထုတိုင်းမှာ coordinate boundaries လိုအပ်ပါတယ်။ Mars Pathfinder rover က Martian မျက်နှာပြင်ပေါ်မှာ သူ့ရဲ့တည်နေရာကို map လုပ်တဲ့အတိုင်းပဲ။ ဒီ boundary coordinates တွေကို ဘယ်လိုသတ်မှတ်မလဲဆိုတာကတော့:

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

**ဒီကို ခွဲခြားကြည့်ရအောင်:**
- **ထိပ်စွန်း**: အရာဝတ္ထု vertical (y position) မှာ စတင်တဲ့နေရာ
- **ဘယ်ဘက်စွန်း**: horizontal (x position) မှာ စတင်တဲ့နေရာ
- **အောက်စွန်း**: height ကို y position နဲ့ ပေါင်းလိုက်ပါ - အခုတော့ အဆုံးနားကို သိနိုင်ပါပြီ!
- **ညာဘက်စွန်း**: width ကို x position နဲ့ ပေါင်းလိုက်ပါ - boundary အပြည့်အစုံကို ရရှိပါပြီ

### Intersection algorithm

Rectangle intersection တွေကို ရှာဖွေဖို့ Hubble Space Telescope က သူ့ရဲ့ field of view မှာ celestial objects တွေ overlap ဖြစ်နေလားဆိုတာ စစ်ဆေးတဲ့ logic ကို အသုံးပြုပါတယ်။ Algorithm က separation ကို စစ်ဆေးပါတယ်:

```javascript
function intersectRect(r1, r2) {
  return !(r2.left > r1.right ||
    r2.right < r1.left ||
    r2.top > r1.bottom ||
    r2.bottom < r1.top);
}
```

**Separation test ဟာ radar systems လိုပဲ:**
- Rectangle 2 ဟာ Rectangle 1 ရဲ့ညာဘက်မှာ အပြည့်အဝရှိလား?
- Rectangle 2 ဟာ Rectangle 1 ရဲ့ဘယ်ဘက်မှာ အပြည့်အဝရှိလား?
- Rectangle 2 ဟာ Rectangle 1 ရဲ့အောက်မှာ အပြည့်အဝရှိလား?
- Rectangle 2 ဟာ Rectangle 1 ရဲ့ထိပ်မှာ အပြည့်အဝရှိလား?

ဒီ condition တွေက တစ်ခုမှမှန်မယ်ဆိုရင် Rectangle တွေ overlap ဖြစ်နေလို့ ဖြစ်ပါတယ်။ Radar operator တွေ Aircraft ၂ခု safe distance မှာရှိလားဆိုတာကို စစ်ဆေးတဲ့နည်းလမ်းနဲ့ တူပါတယ်။

## Object တွေရဲ့ lifecycle ကို စီမံခြင်း

လေဆာက ရန်သူကို ထိမှန်တဲ့အခါမှာ အရာဝတ္ထု ၂ခုလုံးကို ဂိမ်းကနေ ဖယ်ရှားရပါမယ်။ ဒါပေမဲ့ loop အတွင်းမှာ အရာဝတ္ထုတွေကို ဖျက်လိုက်ရင် crash ဖြစ်နိုင်ပါတယ် - Apollo Guidance Computer လို အစောပိုင်းကွန်ပျူတာစနစ်တွေမှာ အတွေ့အကြုံရှိခဲ့တဲ့ သင်ခန်းစာတစ်ခုပါ။ အဲ့ဒါကြောင့် "mark for deletion" ဆိုတဲ့နည်းလမ်းကို အသုံးပြုပြီး frame တွေကြားမှာ အရာဝတ္ထုတွေကို လုံခြုံစွာဖယ်ရှားပါတယ်။

```javascript
// Mark object for removal
enemy.dead = true;
```

**ဒီနည်းလမ်းက အလုပ်လုပ်တဲ့အကြောင်း:**
- Object ကို "dead" အဖြစ် mark လုပ်ပေမဲ့ ချက်ချင်း ဖျက်မထားပါဘူး
- အဲ့ဒီနောက်မှာတော့ လက်ရှိ game frame ကို လုံခြုံစွာပြီးမြောက်စေပါတယ်
- ဖျက်ပြီးသားအရာဝတ္ထုကို အသုံးပြုရင်း crash ဖြစ်တာကို ကာကွယ်ပေးပါတယ်!

Render cycle နောက်တစ်ခုမတိုင်ခင်မှာ mark လုပ်ထားတဲ့ object တွေကို filter လုပ်ပါ:

```javascript
gameObjects = gameObjects.filter(go => !go.dead);
```

**ဒီ filtering က ဘာလုပ်ပေးလဲဆိုရင်:**
- "အသက်ရှင်"နေတဲ့ object တွေကိုသာ ထည့်ထားတဲ့ fresh list တစ်ခု ဖန်တီးပေးပါတယ်
- "dead" အဖြစ် mark လုပ်ထားတဲ့အရာဝတ္ထုတွေကို ဖယ်ရှားပေးပါတယ်
- ဂိမ်းကို အဆင်ပြေပြေ လည်ပတ်စေပါတယ်
- ဖျက်ဆီးပြီးသား object တွေ accumulation ဖြစ်တာကို ကာကွယ်ပေးပါတယ်

## လေဆာ mechanics ကို အကောင်အထည်ဖော်ခြင်း

ဂိမ်းထဲမှာ လေဆာ projectiles တွေဟာ Star Trek ရဲ့ photon torpedoes လိုပဲ - အရာဝတ္ထုတွေကို တိုက်မိတဲ့အထိ တိုက်ရိုက်လိုက်ပါမယ်။ Spacebar ကိုနှိပ်တိုင်း hero ရဲ့တည်နေရာကနေ laser object အသစ်တစ်ခုကို ဖန်တီးပြီး screen ပေါ်မှာ ရွေ့လျားစေပါတယ်။

ဒီကို အကောင်အထည်ဖော်ဖို့အတွက် အစိတ်အပိုင်းအချို့ကို ကိုက်ညီစွာ စီမံရပါမယ်:

**အဓိကလိုအပ်ချက်များ:**
- **ဖန်တီး** hero ရဲ့တည်နေရာကနေ laser object တွေကို spawn လုပ်ပါ
- **ကိုင်တွယ်** keyboard input ကို အသုံးပြုပြီး laser creation ကို trigger လုပ်ပါ
- **စီမံ** laser ရဲ့ရွေ့လျားမှုနဲ့ lifecycle
- **အကောင်အထည်ဖော်** laser projectile တွေရဲ့ visual representation

## Firing rate control ကို အကောင်အထည်ဖော်ခြင်း

Firing rate အကန့်အသတ်မရှိရင် ဂိမ်း engine ကို overload ဖြစ်စေပြီး gameplay ကိုလွယ်ကူလွန်းစေမှာဖြစ်ပါတယ်။ အမှန်တကယ်လက်နက်စနစ်တွေမှာလည်း အတူတူပဲ - USS Enterprise ရဲ့ phasers တွေတောင် shot တစ်ခုပြီးရင် recharge လုပ်ဖို့အချိန်လိုပါတယ်။

Rapid-fire spamming ကို ကာကွယ်ပေးတဲ့ cooldown system ကို အကောင်အထည်ဖော်ပါမယ်:

```javascript
class Cooldown {
  constructor(time) {
    this.cool = false;
    setTimeout(() => {
      this.cool = true;
    }, time);
  }
}

class Weapon {
  constructor() {
    this.cooldown = null;
  }
  
  fire() {
    if (!this.cooldown || this.cooldown.cool) {
      // Create laser projectile
      this.cooldown = new Cooldown(500);
    } else {
      // Weapon is still cooling down
    }
  }
}
```

**Cooldown system အလုပ်လုပ်ပုံ:**
- Weapon ကို "hot" (မပစ်နိုင်သေး) အဖြစ်စတင်ပါ
- Timeout period ပြည့်တဲ့အခါ "cool" (ပစ်နိုင်) ဖြစ်လာပါမယ်
- ပစ်ခါနီးမှာ "Weapon cool ဖြစ်လား?" ဆိုတာကို စစ်ဆေးပါ
- Spam-clicking ကို ကာကွယ်ပေးပြီး control တွေကို responsive ဖြစ်စေပါတယ်

✅ Space game series ရဲ့ lesson 1 ကို ပြန်လည်သွားကြည့်ပြီး cooldowns အကြောင်းကို သတိရပါ။

## တိုက်မိမှုစနစ်ကို တည်ဆောက်ခြင်း

သင့်ရဲ့ space game code ကို တိုးချဲ့ပြီး တိုက်မိမှုရှာဖွေမှုစနစ်ကို ဖန်တီးပါမယ်။ International Space Station ရဲ့ automated collision avoidance system လိုပဲ သင့်ဂိမ်းက အမြဲတမ်း object တွေရဲ့တည်နေရာကို စောင့်ကြည့်ပြီး intersection တွေကို တုံ့ပြန်ပါမယ်။

ယခင်သင်ခန်းစာရဲ့ code ကနေစပြီး object interaction တွေကို စီမံတဲ့ တိုက်မိမှုရှာဖွေမှုစနစ်ကို ထည့်သွင်းပါမယ်။

> 💡 **အကြံပေးချက်**: Laser sprite ဟာ assets folder ထဲမှာ ရှိပြီး code မှာ reference လုပ်ထားပြီးသားဖြစ်ပါတယ်၊ အကောင်အထည်ဖော်ဖို့အဆင်သင့်ဖြစ်ပါတယ်။

### တိုက်မိမှုစည်းမျဉ်းများ

**ထည့်သွင်းရန် Game mechanics:**
1. **Laser ရန်သူကို ထိမှန်ခြင်း**: Laser projectile က ရန်သူ object ကို ထိမှန်တဲ့အခါ ဖျက်ဆီးပါ
2. **Laser screen boundary ကို ထိမှန်ခြင်း**: Laser က screen ရဲ့ထိပ်စွန်းကို ရောက်တဲ့အခါ ဖယ်ရှားပါ
3. **ရန်သူနဲ့ hero တိုက်မိခြင်း**: Object ၂ခုလုံး တိုက်မိတဲ့အခါ ဖျက်ဆီးပါ
4. **ရန်သူ screen အောက်ကို ရောက်ခြင်း**: ရန်သူတွေ screen အောက်ကို ရောက်တဲ့အခါ Game over ဖြစ်ပါမယ်

## Development environment ကို စတင်ခြင်း

သတင်းကောင်း - အခြေခံအလုပ်တွေကို အားလုံး ပြင်ဆင်ပြီးသားဖြစ်ပါတယ်! သင့်ရဲ့ game assets နဲ့ အခြေခံဖွဲ့စည်းမှုတွေဟာ `your-work` subfolder ထဲမှာရှိပြီး collision features တွေကို ထည့်သွင်းဖို့အဆင်သင့်ဖြစ်ပါတယ်။

### Project ဖွဲ့စည်းမှု

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

**File structure ကို နားလည်ခြင်း:**
- **Sprite images** တွေကို game objects အတွက် ထည့်သွင်းထားပါတယ်
- **Main HTML document** နဲ့ JavaScript application file ပါဝင်ပါတယ်
- **Local development server** အတွက် package configuration ကို ပေးထားပါတယ်

### Development server ကို စတင်ခြင်း

Project folder ကိုသွားပြီး local server ကို စတင်ပါ:

```bash
cd your-work
npm start
```

**ဒီ command sequence:**
- **Directory** ကို သင့်ရဲ့ project folder ကို ပြောင်းပါ
- **Local HTTP server** ကို `http://localhost:5000` မှာ စတင်ပါ
- **Game files** တွေကို testing နဲ့ development အတွက် serve လုပ်ပါ
- **Live development** ကို automatic reloading နဲ့ အဆင်ပြေစေပါတယ်

Browser ကိုဖွင့်ပြီး `http://localhost:5000` ကို သွားပါ။ Hero နဲ့ ရန်သူတွေ screen ပေါ်မှာ render ဖြစ်နေတဲ့ current game state ကို ကြည့်နိုင်ပါမယ်။

### အဆင့်ဆင့် အကောင်အထည်ဖော်ခြင်း

NASA က Voyager spacecraft ကို program လုပ်တဲ့ systematic approach လိုပဲ တိုက်မိမှုရှာဖွေမှုကို အဆင့်ဆင့်တည်ဆောက်သွားပါမယ်။

#### ၁. Rectangle collision bounds ထည့်သွင်းပါ

ပထမဆုံးမှာတော့ game objects တွေ boundary ကို ဖော်ပြတတ်အောင် သင်ကြားပါမယ်။ `GameObject` class မှာ ဒီ method ကို ထည့်သွင်းပါ:

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

**ဒီ method ရဲ့လုပ်ဆောင်ချက်:**
- **Rectangle object** ကို precise boundary coordinates တွေနဲ့ ဖန်တီးပေးပါတယ်
- **Bottom နဲ့ right edges** ကို position နဲ့ dimensions ကို အသုံးပြုပြီးတွက်ချက်ပေးပါတယ်
- **Object** တစ်ခုကို collision detection algorithm တွေအတွက် အသုံးပြုနိုင်တဲ့အခြေအနေဖြစ်စေပါတယ်
- **Standardized interface** ကို game objects အားလုံးအတွက် ပေးစွမ်းပါတယ်

#### ၂. Intersection detection ကို အကောင်အထည်ဖော်ပါ

အခုတော့ collision detective - rectangle ၂ခု overlap ဖြစ်နေလားဆိုတာကို ပြောပြနိုင်တဲ့ function ကို ဖန်တီးပါမယ်:

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

**ဒီ algorithm ရဲ့လုပ်ဆောင်ချက်:**
- **Separation conditions** ၄ခုကို rectangle တွေကြားမှာ စစ်ဆေးပါတယ်
- **False** ကို separation condition တစ်ခုမှန်ရင် return လုပ်ပါတယ်
- **Collision** ဖြစ်နေတဲ့အခါ separation မရှိတဲ့အခြေအနေကို ပြောပြပါတယ်
- **Negation logic** ကို အသုံးပြုပြီး intersection testing ကို အကျိုးရှိရှိလုပ်ဆောင်ပါတယ်

#### ၃. Laser firing system ကို အကောင်အထည်ဖော်ပါ

အခုတော့ စိတ်လှုပ်ရှားစရာအချိန်ရောက်ပါပြီ! Laser firing system ကို စတင်တည်ဆောက်ပါ။

##### Message constants

ပထမဆုံးမှာတော့ game system တွေ အပြန်အလှန် ဆက်သွယ်နိုင်ဖို့ message types တွေကို သတ်မှတ်ပါ:

```javascript
KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
```

**ဒီ constants ရဲ့အကျိုးကျေးဇူး:**
- **Event names** တွေကို application တစ်ခုလုံးမှာ standardize လုပ်ပေးပါတယ်
- **Game systems** တွေကြားမှာ consistent communication ကို အကောင်အထည်ဖော်ပေးပါတယ်
- **Event handler registration** မှာ typo ဖြစ်တာကို ကာကွယ်ပေးပါတယ်

##### Keyboard input handling

Key event listener မှာ space key detection ကို ထည့်သွင်းပါ:

```javascript
} else if(evt.keyCode === 32) {
  eventEmitter.emit(Messages.KEY_EVENT_SPACE);
}
```

**ဒီ input handler:**
- **Space key presses** ကို keyCode 32 နဲ့ detect လုပ်ပါတယ်
- **Standardized event message** ကို emit လုပ်ပါတယ်
- **Decoupled firing logic** ကို enable လုပ်ပါတယ်

##### Event listener setup

`initGame()` function မှာ firing behavior ကို register လုပ်ပါ:

```javascript
eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
 if (hero.canFire()) {
   hero.fire();
 }
});
```

**ဒီ event listener:**
- **Space key events** ကို တုံ့ပြန်ပါတယ်
- **Firing cooldown status** ကို စစ်ဆေးပါတယ်
- **Laser creation** ကို ခွင့်ပြုတဲ့အခါ trigger လုပ်ပါတယ်

Laser-enemy interaction တွေကို collision handling ထည့်သွင်းပါ:

```javascript
eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
  first.dead = true;
  second.dead = true;
});
```

**ဒီ collision handler:**
- **Collision event data** ကို object ၂ခုနဲ့အတူ လက်ခံပါတယ်
- **Object ၂ခုလုံးကို ဖျက်ဆီးဖို့ mark လုပ်ပါတယ်
- **Collision cleanup** ကို သေချာစေပါတယ်

#### ၄. Laser class ကို ဖန်တီးပါ

Laser projectile ကို အပေါ်ဘက်ရွေ့လျားပြီး သူ့ရဲ့ lifecycle ကို စီမံနိုင်တဲ့အခြေအနေဖြစ်စေပါ:

```javascript
class Laser extends GameObject {
  constructor(x, y) {
    super(x, y);
    this.width = 9;
    this.height = 33;
    this.type = 'Laser';
    this.img = laserImg;
    
    let id = setInterval(() => {
      if (this.y > 0) {
        this.y -= 15;
      } else {
        this.dead = true;
        clearInterval(id);
      }
    }, 100);
  }
}
```

**ဒီ class implementation:**
- **GameObject** ကို extend လုပ်ပြီး အခြေခံလုပ်ဆောင်ချက်တွေကို ရယူပါတယ်
- **Laser sprite** အတွက် အရွယ်အစားကို သတ်မှတ်ပါတယ်
- **Automatic upward movement** ကို `setInterval()` အသုံးပြုပြီး ဖန်တီးပါတယ်
- **Screen top** ကို ရောက်တဲ့အခါ self-destruction ကို handle လုပ်ပါတယ်
- **Animation timing နဲ့ cleanup** ကို စီမံပါတယ်

#### ၅. Collision detection system ကို အကောင်အထည်ဖော်ပါ

Comprehensive collision detection function ကို ဖန်တီးပါ:

```javascript
function updateGameObjects() {
  const enemies = gameObjects.filter(go => go.type === 'Enemy');
  const lasers = gameObjects.filter(go => go.type === "Laser");
  
  // Test laser-enemy collisions
  lasers.forEach((laser) => {
    enemies.forEach((enemy) => {
      if (intersectRect(laser.rectFromGameObject(), enemy.rectFromGameObject())) {
        eventEmitter.emit(Messages.COLLISION_ENEMY_LASER, {
          first: laser,
          second: enemy,
        });
      }
    });
  });

  // Remove destroyed objects
  gameObjects = gameObjects.filter(go => !go.dead);
}
```

**ဒီ collision system:

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မတိကျမှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းဘာသာစကားဖြင့် ရေးသားထားသော စာရွက်စာတမ်းကို အာဏာတရ အရင်းအမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူ့ဘာသာပြန်ပညာရှင်များကို အသုံးပြုရန် အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအမှားများ သို့မဟုတ် အနားလွဲမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။