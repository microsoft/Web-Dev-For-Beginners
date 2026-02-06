# Mock up a Game: Apply Design Patterns

## အလုပ်အကိုင်အကျဉ်းချုပ်

ဒီအလုပ်အကိုင်မှာ သင်လေ့လာထားတဲ့ Design Patterns ကို အသုံးချပြီး ရိုးရှင်းတဲ့ဂိမ်းပုံစံတစ်ခုကို ဖန်တီးပါ။ ဒီအလုပ်အကိုင်က သင့်ကို architectural patterns (inheritance သို့မဟုတ် composition) နဲ့ pub/sub communication system ကို လေ့ကျင့်ခွင့်ပေးမှာဖြစ်ပါတယ်။

## လမ်းညွှန်ချက်များ

ဒီသင်ခန်းစာက Design Patterns တွေကို အသုံးပြုထားတဲ့ ရိုးရှင်းတဲ့ဂိမ်းကို ဖန်တီးပါ။ သင့်ဂိမ်းဟာ လုပ်ဆောင်နိုင်ဖို့လိုအပ်ပေမယ့် ရုပ်ပုံတွေကို မခက်ခဲစေပါဘူး။ အဓိကအားဖြင့် architecture နဲ့ communication patterns ကို အာရုံစိုက်ပါ။

### လိုအပ်ချက်များ

**Architecture Pattern ကို ရွေးချယ်ပါ:**
- **Option A**: class-based inheritance ကို အသုံးပြုပါ (ဥပမာ `GameObject` → `Movable` → `Hero`)
- **Option B**: composition ကို အသုံးပြုပါ (factory function နဲ့ mixed behaviors)

**Communication ကို အကောင်အထည်ဖော်ပါ:**
- **EventEmitter** class ကို pub/sub messaging အတွက် ထည့်သွင်းပါ
- **Message types** ၂-၃ ခုအနည်းဆုံး ဖန်တီးပါ (ဥပမာ `PLAYER_MOVE`, `ENEMY_SPAWN`, `SCORE_UPDATE`)
- **User input** (keyboard/mouse) ကို event system နဲ့ ချိတ်ဆက်ပါ

**Game Elements ထည့်သွင်းရန်:**
- Player-controlled character တစ်ခုအနည်းဆုံး ပါဝင်ရမည်
- အခြား game object တစ်ခု (ဥပမာ enemy, collectible, environmental element)
- Object တွေကြား basic interaction (collision, collection, communication)

### အကြံပြုထားသောဂိမ်းအကြံဉာဏ်များ

**ရိုးရှင်းတဲ့ဂိမ်းများ:**
- **Snake Game** \u2013 အမြှားတွေဟာ ဦးခေါင်းကိုလိုက်ပြီး အစားအစာတွေကို random နေရာမှာပေါ်လာစေပါ
- **Pong Variation** \u2013 Paddle ဟာ input ကိုတုံ့ပြန်ပြီး Ball ဟာ နံရံတွေကိုထိပြီးပြန်လည်ပေါက်ကွဲ
- **Collector Game** \u2013 Player ဟာ အရာဝတ္ထုတွေကိုစုဆောင်းပြီး အတားအဆီးတွေကိုရှောင်ရှားရမည်
- **Tower Defense Basics** \u2013 Towers တွေဟာ ရွေ့လျားနေတဲ့ ရန်သူတွေကို detect လုပ်ပြီး ပစ်ခတ်ပါ

### Code Structure လမ်းညွှန်ချက်များ

```javascript
// Example starting structure
const Messages = {
  // Define your game messages here
};

class EventEmitter {
  // Your event system implementation
}

// Choose either class-based OR composition approach
// Class-based example:
class GameObject { /* base properties */ }
class Player extends GameObject { /* player-specific behavior */ }

// OR Composition example:
const gameObject = { /* base properties */ };
const movable = { /* movement behavior */ };
function createPlayer() { /* combine behaviors */ }
```

### သင့် Implementation ကို စမ်းသပ်ခြင်း

**သင့် code အလုပ်လုပ်မှုကို အတည်ပြုရန်:**
- **Objects တွေ** event တွေကို trigger လုပ်တဲ့အခါ ရွေ့လျားခြင်း သို့မဟုတ် ပြောင်းလဲခြင်းကို စမ်းသပ်ပါ
- **Objects များစွာ** တစ်ခုတည်းသော event ကို တုံ့ပြန်နိုင်မှုကို အတည်ပြုပါ
- **အသစ်သော behaviors** တွေကို ရှေးက code ကို မပြောင်းလဲဘဲ ထည့်သွင်းနိုင်မှုကို စမ်းသပ်ပါ
- **Keyboard/mouse input** ဟာ game events တွေကို မှန်ကန်စွာ trigger လုပ်နိုင်မှုကို အတည်ပြုပါ

## တင်သွင်းရန် လမ်းညွှန်ချက်များ

**သင့်ရဲ့တင်သွင်းမှုမှာ ပါဝင်ရမည်:**
1. **JavaScript file(s)** သင့်ဂိမ်း implementation ပါဝင်ရမည်
2. **HTML file** သင့်ဂိမ်းကို run နဲ့ test လုပ်ဖို့ (ရိုးရှင်းနိုင်သည်)
3. **Comments** သင်ရွေးချယ်ထားတဲ့ pattern နဲ့ အကြောင်းပြချက်
4. **Message types** တွေက ဘာလုပ်ဆောင်သလဲဆိုတာ ရှင်းလင်းချက်

## အဆင့်သတ်မှတ်ချက်

| Criteria | Exemplary (3 points) | Adequate (2 points) | Needs Improvement (1 point) |
|----------|---------------------|---------------------|------------------------------|
| **Architecture Pattern** | inheritance သို့မဟုတ် composition ကို မှန်ကန်စွာ အသုံးပြုထားပြီး class/object hierarchy ရှင်းလင်းမှုရှိသည် | ရွေးချယ်ထားသော pattern ကို အသုံးပြုထားပြီး အနည်းငယ်အမှားများရှိသည် | Pattern ကို အသုံးပြုရန် ကြိုးစားထားပေမယ့် implementation မှာ အလွန်အမင်းပြဿနာများရှိသည် |
| **Pub/Sub Implementation** | EventEmitter ဟာ message types များစွာနဲ့ event flow မှန်ကန်စွာ အလုပ်လုပ်သည် | Basic pub/sub system ဟာ အခြေခံ event handling နဲ့ အလုပ်လုပ်သည် | Event system ရှိပေမယ့် မှန်ကန်စွာ အလုပ်မလုပ်နိုင်ပါ |
| **Game Functionality** | Interactive elements သုံးခု သို့မဟုတ် အများကြီး event တွေကို အသုံးပြုပြီး ဆက်သွယ်သည် | Interactive elements နှစ်ခု အခြေခံ event communication နဲ့ | Element တစ်ခုသာ event တွေကို တုံ့ပြန် သို့မဟုတ် အခြေခံ interaction |
| **Code Quality** | Code ဟာ သန့်ရှင်းပြီး အလွန်ကောင်းမွန်သော comment တွေ၊ logical organization နဲ့ modern JavaScript | Generally code ဟာ အလယ်အလတ်ကောင်းမွန်ပြီး comment တွေ ရှိသည် | Code ဟာ အလုပ်လုပ်ပေမယ့် organization သို့မဟုတ် ရှင်းလင်းသော comment မရှိပါ |

**အပိုအမှတ်များ:**
- **ဖန်တီးမှုရှိသော game mechanics** pattern တွေကို စိတ်ဝင်စားဖွယ် အသုံးပြုထားသည်
- **Input methods များစွာ** (keyboard AND mouse events)
- **Scalable architecture** အသစ်သော features တွေကို ထည့်သွင်းရန် လွယ်ကူသည်

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မတိကျမှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းဘာသာစကားဖြင့် ရေးသားထားသော စာရွက်စာတမ်းကို အာဏာတရ အရင်းအမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူ့ဘာသာပြန်ပညာရှင်များကို အသုံးပြုရန် အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအလွတ်များ သို့မဟုတ် အနားယူမှုမှားများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။