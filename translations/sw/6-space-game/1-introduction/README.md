<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "862f7f2ef320f6f8950fae379e6ece45",
  "translation_date": "2025-10-24T19:43:20+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "sw"
}
-->
# Jenga Mchezo wa Anga Sehemu ya 1: Utangulizi

![Mchezo wa anga unaonyesha uchezaji](../../../../6-space-game/images/pewpew.gif)

Kama vile udhibiti wa NASA unavyoratibu mifumo mingi wakati wa uzinduzi wa anga, tutajenga mchezo wa anga unaoonyesha jinsi sehemu tofauti za programu zinaweza kufanya kazi pamoja bila matatizo. Wakati tunaunda kitu ambacho unaweza kucheza, utajifunza dhana muhimu za programu zinazotumika katika mradi wowote wa programu.

Tutachunguza njia mbili za msingi za kupanga msimbo: urithi na muundo. Hizi si dhana za kitaaluma tu – ni mifumo ile ile inayotumika kuendesha kila kitu kutoka michezo ya video hadi mifumo ya benki. Pia tutatekeleza mfumo wa mawasiliano unaoitwa pub/sub ambao hufanya kazi kama mitandao ya mawasiliano inayotumika kwenye vyombo vya anga, ikiruhusu vipengele tofauti kushiriki taarifa bila kuunda utegemezi.

Mwisho wa mfululizo huu, utaelewa jinsi ya kujenga programu zinazoweza kupanuka na kubadilika – iwe unaunda michezo, programu za wavuti, au mfumo wowote wa programu.

## Maswali ya Awali ya Somo

[Maswali ya awali ya somo](https://ff-quizzes.netlify.app/web/quiz/29)

## Urithi na Muundo katika Uundaji wa Michezo

Kadri miradi inavyokua kwa ugumu, mpangilio wa msimbo unakuwa muhimu. Kinachoanza kama hati rahisi kinaweza kuwa kigumu kudumisha bila muundo sahihi – kama vile misheni za Apollo zilivyohitaji uratibu makini kati ya maelfu ya vipengele.

Tutachunguza njia mbili za msingi za kupanga msimbo: urithi na muundo. Kila moja ina faida zake, na kuelewa zote mbili hukusaidia kuchagua njia sahihi kwa hali tofauti. Tutadhihirisha dhana hizi kupitia mchezo wetu wa anga, ambapo mashujaa, maadui, nguvu za ziada, na vitu vingine lazima vishirikiane kwa ufanisi.

✅ Mojawapo ya vitabu maarufu zaidi vya programu vilivyowahi kuandikwa linahusu [mifumo ya muundo](https://en.wikipedia.org/wiki/Design_Patterns).

Katika mchezo wowote, una `vitu vya mchezo` – vipengele vya maingiliano vinavyojaza ulimwengu wa mchezo wako. Mashujaa, maadui, nguvu za ziada, na athari za kuona vyote ni vitu vya mchezo. Kila kimoja kipo katika viwianishi maalum vya skrini kwa kutumia thamani za `x` na `y`, sawa na kuweka alama kwenye ndege ya viwianishi.

Licha ya tofauti zao za kuona, vitu hivi mara nyingi hushiriki tabia za msingi:

- **Vipo mahali fulani** – Kila kitu kina viwianishi vya x na y ili mchezo ujue wapi kukichora
- **Vingi vinaweza kusogea** – Mashujaa hukimbia, maadui hufuatilia, risasi huruka kwenye skrini
- **Vinakuwa na muda wa maisha** – Baadhi hubaki milele, vingine (kama milipuko) huonekana kwa muda mfupi na kutoweka
- **Hureact kwa vitu** – Wakati vitu vinagongana, nguvu za ziada hukusanywa, baa za afya husasishwa

✅ Fikiria mchezo kama Pac-Man. Je, unaweza kutambua aina nne za vitu vilivyoorodheshwa hapo juu katika mchezo huu?

### Kueleza Tabia Kupitia Msimbo

Sasa kwa kuwa unaelewa tabia za kawaida ambazo vitu vya mchezo hushiriki, hebu tuchunguze jinsi ya kutekeleza tabia hizi katika JavaScript. Unaweza kueleza tabia za kitu kupitia mbinu zilizounganishwa na madarasa au vitu binafsi, na kuna njia kadhaa za kuchagua.

**Njia ya Kulingana na Darasa**

Madarasa na urithi hutoa njia iliyopangwa ya kupanga vitu vya mchezo. Kama mfumo wa uainishaji wa kitalaamu ulioanzishwa na Carl Linnaeus, unaanza na darasa la msingi linalo na mali za kawaida, kisha kuunda madarasa maalum yanayorithi misingi hii huku yakiongeza uwezo maalum.

✅ Urithi ni dhana muhimu kuelewa. Jifunze zaidi kwenye [makala ya MDN kuhusu urithi](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Hivi ndivyo unavyoweza kutekeleza vitu vya mchezo kwa kutumia madarasa na urithi:

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

**Hebu tuvunje hatua kwa hatua:**
- Tunaunda kiolezo cha msingi ambacho kila kitu cha mchezo kinaweza kutumia
- Constructor huhifadhi wapi kitu kipo (`x`, `y`) na ni aina gani ya kitu
- Hii inakuwa msingi ambao vitu vyote vya mchezo vitajengwa juu yake

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

**Katika hapo juu, tumefanya:**
- **Kuongeza** darasa la GameObject ili kuongeza utendaji wa kusogea
- **Kuita** constructor ya mzazi kwa kutumia `super()` ili kuanzisha mali zilizorithiwa
- **Kuongeza** mbinu ya `moveTo()` inayosasisha nafasi ya kitu

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

**Kuelewa dhana hizi:**
- **Kuunda** aina maalum za vitu vinavyorithi tabia zinazofaa
- **Kudhirisha** jinsi urithi unavyoruhusu ujumuishaji wa vipengele kwa kuchagua
- **Kuonyesha** kwamba mashujaa wanaweza kusogea huku miti ikibaki imara
- **Kueleza** jinsi hierarkia ya darasa inavyopunguza vitendo visivyofaa

✅ Chukua dakika chache kufikiria shujaa wa Pac-Man (Inky, Pinky au Blinky, kwa mfano) na jinsi ambavyo ingeandikwa katika JavaScript.

**Njia ya Muundo**

Muundo unafuata falsafa ya muundo wa modular, sawa na jinsi wahandisi wanavyounda vyombo vya anga na vipengele vinavyoweza kubadilishwa. Badala ya kurithi kutoka darasa la mzazi, unachanganya tabia maalum ili kuunda vitu vyenye utendaji unaohitajika. Njia hii inatoa kubadilika bila vikwazo vya hierarkia ngumu.

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

**Hii ndiyo msimbo unavyofanya:**
- **Inafafanua** msingi wa `gameObject` na mali za nafasi na aina
- **Inaunda** kitu cha tabia ya `movable` chenye utendaji wa kusogea
- **Inatenganisha** masuala kwa kuweka data ya nafasi na mantiki ya kusogea huru

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

**Katika hapo juu, tumefanya:**
- **Kuunganisha** mali za msingi za kitu na tabia ya kusogea kwa kutumia spread syntax
- **Kuunda** kazi za kiwanda zinazorejesha vitu vilivyobinafsishwa
- **Kuwezesha** uundaji wa vitu vya kubadilika bila hierarkia ngumu za darasa
- **Kuruhusu** vitu kuwa na tabia zinazohitajika tu

```javascript
// Step 4: Create and use your composed objects
const hero = createHero(10, 10);
hero.moveTo(5, 5); // Works perfectly!

const tree = createStatic(0, 0, 'Tree');
// tree.moveTo() is undefined - no movement behavior was composed
```

**Vidokezo vya kukumbuka:**
- **Kuunda** vitu kwa kuchanganya tabia badala ya kuvirithi
- **Kutoa** kubadilika zaidi kuliko hierarkia ngumu za urithi
- **Kuruhusu** vitu kuwa na vipengele vinavyohitajika tu
- **Kutumia** spread syntax ya kisasa ya JavaScript kwa mchanganyiko safi wa vitu
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

**Kuvunja kinachotokea hapa:**
- **Kuunda** mfumo wa usimamizi wa matukio wa kati kwa kutumia darasa rahisi
- **Kuhifadhi** wasikilizaji katika kitu kilichopangwa kwa aina ya ujumbe
- **Kusajili** wasikilizaji wapya kwa kutumia mbinu ya `on()`
- **Kutangaza** ujumbe kwa wasikilizaji wote wanaovutiwa kwa kutumia `emit()`
- **Kusaidia** payloads za data za hiari kwa kupitisha taarifa husika

### Kuweka Yote Pamoja: Mfano wa Vitendo

Sawa, hebu tuone hii ikifanya kazi! Tutajenga mfumo rahisi wa kusogea unaoonyesha jinsi pub/sub ilivyo safi na rahisi:

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

**Hii ndiyo msimbo unavyofanya:**
- **Inafafanua** kitu cha constants ili kuzuia makosa ya herufi katika majina ya ujumbe
- **Inaunda** mfano wa emitter ya matukio ili kushughulikia mawasiliano yote
- **Inaanzisha** kitu cha shujaa katika nafasi ya kuanzia

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

**Katika hapo juu, tumefanya:**
- **Kusajili** wasikilizaji wa matukio wanaojibu ujumbe wa kusogea
- **Kusasisha** nafasi ya shujaa kulingana na mwelekeo wa kusogea
- **Kuongeza** logging ya console kufuatilia mabadiliko ya nafasi ya shujaa
- **Kutenganisha** mantiki ya kusogea kutoka kwa usimamizi wa pembejeo

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

**Kuelewa dhana hizi:**
- **Kuunganisha** pembejeo ya kibodi na matukio ya mchezo bila kuunganisha kwa karibu
- **Kuwezesha** mfumo wa pembejeo kuwasiliana na vitu vya mchezo kwa njia isiyo ya moja kwa moja
- **Kuruhusu** mifumo mingi kujibu matukio sawa ya kibodi
- **Kufanya** iwe rahisi kubadilisha funguo au kuongeza njia mpya za pembejeo

> 💡 **Kidokezo cha Kitaalamu**: Uzuri wa muundo huu ni kubadilika! Unaweza kuongeza athari za sauti, mtikisiko wa skrini, au athari za chembe kwa urahisi kwa kuongeza wasikilizaji zaidi wa matukio – hakuna haja ya kurekebisha msimbo wa kibodi au kusogea uliopo.
> 
**Hii ndiyo sababu utaipenda njia hii:**
- Kuongeza vipengele vipya kunakuwa rahisi sana – sikiliza tu matukio unayojali
- Mambo mengi yanaweza kuguswa na tukio moja bila kuingiliana
- Kupima kunakuwa rahisi sana kwa sababu kila kipande hufanya kazi kwa uhuru
- Wakati kitu kinaharibika, unajua hasa wapi pa kuangalia

### Kwa Nini Pub/Sub Inapimika Vyema

Mfumo wa pub/sub unadumisha urahisi kadri programu zinavyokua kwa ugumu. Iwe unashughulikia maadui wengi, masasisho ya UI yenye nguvu, au mifumo ya sauti, mfumo hushughulikia ongezeko la ukubwa bila mabadiliko ya usanifu. Vipengele vipya vinaunganishwa katika mfumo wa matukio uliopo bila kuathiri utendaji uliowekwa.

> ⚠️ **Kosa la Kawaida**: Usianze na aina nyingi sana za ujumbe maalum mapema. Anza na makundi mapana na uyaboreshe kadri mahitaji ya mchezo wako yanavyokuwa wazi.
> 
**Mazoea bora ya kufuata:**
- **Kugawanya** ujumbe unaohusiana katika makundi ya kimantiki
- **Kutumia** majina ya kuelezea yanayoonyesha wazi kilichotokea
- **Kuweka** payloads za ujumbe rahisi na zenye lengo
- **Kudokumentisha** aina za ujumbe kwa ushirikiano wa timu

---

## Changamoto ya Wakala wa GitHub Copilot 🚀

Tumia hali ya Wakala kukamilisha changamoto ifuatayo:

**Maelezo:** Unda mfumo rahisi wa vitu vya mchezo kwa kutumia urithi na mfumo wa pub/sub. Utatekeleza mchezo wa msingi ambapo vitu tofauti vinaweza kuwasiliana kupitia matukio bila kujua moja kwa moja kuhusu kila mmoja.

**Maelekezo:** Unda mfumo wa mchezo wa JavaScript wenye mahitaji yafuatayo: 1) Unda darasa la msingi la GameObject lenye viwianishi vya x, y na mali ya aina. 2) Unda darasa la Hero linalopanua GameObject na linaweza kusogea. 3) Unda darasa la Enemy linalopanua GameObject na linaweza kufuatilia shujaa. 4) Tekeleza darasa la EventEmitter kwa mfumo wa pub/sub. 5) Sanidi wasikilizaji wa matukio ili shujaa anaposogea, maadui wa karibu wapokee tukio la 'HERO_MOVED' na kusasisha nafasi zao kufuatilia shujaa. Jumuisha kauli za console.log kuonyesha mawasiliano kati ya vitu.

Jifunze zaidi kuhusu [hali ya wakala](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) hapa.

## 🚀 Changamoto

Fikiria jinsi mfumo wa pub-sub unavyoweza kuboresha usanifu wa mchezo. Tambua ni vipengele gani vinapaswa kutangaza matukio na jinsi mfumo unavyopaswa kujibu. Buni dhana ya mchezo na panga mifumo ya mawasiliano kati ya vipengele vyake.

## Maswali ya Baada ya Somo

[Maswali ya baada ya somo](https://ff-quizzes.netlify.app/web/quiz/30)

## Mapitio na Kujisomea

Jifunze zaidi kuhusu Pub/Sub kwa [kusoma kuhusu hilo](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Kazi

[Unda mfano wa mchezo](assignment.md)

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.