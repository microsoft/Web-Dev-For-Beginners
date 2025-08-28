<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "979cfcce2413a87d9e4c67eb79234bc3",
  "translation_date": "2025-08-28T15:46:24+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "tl"
}
-->
# Gumawa ng Space Game Bahagi 1: Panimula

![video](../../../../6-space-game/images/pewpew.gif)

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/29)

### Pagmamana at Komposisyon sa paggawa ng laro

Sa mga naunang aralin, hindi masyadong kailangan ang pag-aalala sa disenyo ng arkitektura ng mga app na ginawa mo, dahil maliit lamang ang saklaw ng mga proyekto. Gayunpaman, kapag lumaki ang iyong mga aplikasyon sa laki at saklaw, nagiging mas mahalaga ang mga desisyon sa arkitektura. Mayroong dalawang pangunahing paraan sa paggawa ng mas malalaking aplikasyon sa JavaScript: *komposisyon* o *pagmamana*. May mga kalamangan at kahinaan ang bawat isa, ngunit ipapaliwanag natin ito sa konteksto ng isang laro.

✅ Isa sa mga pinakasikat na aklat tungkol sa programming ay may kinalaman sa [mga disenyo ng pattern](https://en.wikipedia.org/wiki/Design_Patterns).

Sa isang laro, mayroon kang `game objects` na mga bagay na umiiral sa screen. Nangangahulugan ito na mayroon silang lokasyon sa isang cartesian coordinate system, na may `x` at `y` coordinate. Habang nagde-develop ka ng laro, mapapansin mo na ang lahat ng iyong game objects ay may karaniwang property na pareho sa bawat laro na iyong ginagawa, tulad ng mga elementong:

- **batay sa lokasyon** Karamihan, kung hindi lahat, ng mga elemento ng laro ay batay sa lokasyon. Nangangahulugan ito na mayroon silang lokasyon, isang `x` at `y`.
- **naigagalaw** Ito ay mga bagay na maaaring lumipat sa bagong lokasyon. Karaniwan itong isang bayani, halimaw, o NPC (non-player character), ngunit hindi, halimbawa, isang static na bagay tulad ng puno.
- **nagwawasak ng sarili** Ang mga bagay na ito ay umiiral lamang sa isang tiyak na panahon bago sila maghanda para sa pagtanggal. Karaniwan itong kinakatawan ng isang `dead` o `destroyed` boolean na nagsasabi sa game engine na ang bagay na ito ay hindi na dapat i-render.
- **cool-down** Ang 'cool-down' ay isang karaniwang property sa mga panandaliang bagay. Isang tipikal na halimbawa ay isang piraso ng teksto o graphical effect tulad ng pagsabog na dapat makita lamang sa loob ng ilang millisecond.

✅ Isipin ang isang laro tulad ng Pac-Man. Maaari mo bang tukuyin ang apat na uri ng bagay na nakalista sa itaas sa larong ito?

### Pagpapahayag ng pag-uugali

Ang lahat ng inilarawan sa itaas ay mga pag-uugali na maaaring taglayin ng mga game object. Paano natin ito encode? Maaari nating ipahayag ang mga pag-uugali na ito bilang mga method na nauugnay sa mga klase o object.

**Mga Klase**

Ang ideya ay gumamit ng `classes` kasabay ng `inheritance` upang magdagdag ng tiyak na pag-uugali sa isang klase.

✅ Ang pagmamana ay isang mahalagang konsepto na dapat maunawaan. Matuto pa sa [artikulo ng MDN tungkol sa inheritance](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Sa pamamagitan ng code, ang isang game object ay karaniwang ganito ang hitsura:

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

✅ Maglaan ng ilang minuto upang muling isipin ang isang Pac-Man hero (halimbawa, si Inky, Pinky, o Blinky) at kung paano ito isusulat sa JavaScript.

**Komposisyon**

Isang alternatibong paraan ng paghawak sa pagmamana ng object ay sa pamamagitan ng paggamit ng *Komposisyon*. Sa ganitong paraan, ipinapahayag ng mga object ang kanilang pag-uugali tulad nito:

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

**Aling pattern ang dapat kong gamitin?**

Ikaw ang magpapasya kung aling pattern ang pipiliin mo. Sinusuportahan ng JavaScript ang parehong mga paradigm.

--

Isa pang pattern na karaniwan sa paggawa ng laro ay tumutugon sa problema ng paghawak sa karanasan ng user at performance ng laro.

## Pub/sub pattern

✅ Ang Pub/Sub ay nangangahulugang 'publish-subscribe'

Ang pattern na ito ay tumutugon sa ideya na ang iba't ibang bahagi ng iyong aplikasyon ay hindi dapat magkaalaman tungkol sa isa't isa. Bakit? Mas madali itong makita kung ano ang nangyayari sa pangkalahatan kung ang iba't ibang bahagi ay hiwalay. Mas madali rin itong baguhin ang pag-uugali bigla kung kinakailangan. Paano natin ito magagawa? Ginagawa natin ito sa pamamagitan ng pagtatatag ng ilang mga konsepto:

- **mensahe**: Ang mensahe ay karaniwang isang text string na may kasamang opsyonal na payload (isang piraso ng data na nagpapaliwanag kung tungkol saan ang mensahe). Isang tipikal na mensahe sa laro ay maaaring `KEY_PRESSED_ENTER`.
- **publisher**: Ang elementong ito ay *nagpapalathala* ng mensahe at ipinapadala ito sa lahat ng subscriber.
- **subscriber**: Ang elementong ito ay *nakikinig* sa mga partikular na mensahe at gumagawa ng isang gawain bilang resulta ng pagtanggap ng mensahe, tulad ng pagpapaputok ng laser.

Ang implementasyon nito ay maliit lamang sa laki ngunit napakalakas na pattern. Ganito ito maipapatupad:

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

Upang magamit ang code sa itaas, maaari tayong gumawa ng napakaliit na implementasyon:

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

Sa itaas, ikinonekta natin ang isang keyboard event, `ArrowLeft` at ipinadala ang `HERO_MOVE_LEFT` na mensahe. Nakikinig tayo sa mensaheng iyon at inilipat ang `hero` bilang resulta. Ang lakas ng pattern na ito ay ang event listener at ang hero ay hindi magkaalaman tungkol sa isa't isa. Maaari mong i-remap ang `ArrowLeft` sa `A` key. Bukod pa rito, posible na gumawa ng ganap na ibang bagay sa `ArrowLeft` sa pamamagitan ng paggawa ng ilang pagbabago sa `on` function ng eventEmitter:

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

Habang nagiging mas kumplikado ang mga bagay kapag lumaki ang iyong laro, nananatiling pareho ang pattern na ito sa pagiging kumplikado at nananatiling malinis ang iyong code. Lubos na inirerekomenda na gamitin ang pattern na ito.

---

## 🚀 Hamon

Pag-isipan kung paano mapapahusay ng pub-sub pattern ang isang laro. Aling mga bahagi ang dapat maglabas ng mga event, at paano dapat tumugon ang laro sa mga ito? Ngayon ang pagkakataon mong maging malikhain, mag-isip ng bagong laro at kung paano maaaring kumilos ang mga bahagi nito.

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/30)

## Review & Self Study

Matuto pa tungkol sa Pub/Sub sa pamamagitan ng [pagbabasa tungkol dito](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Takdang-Aralin

[Mag-mock up ng laro](assignment.md)

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na maaaring magmula sa paggamit ng pagsasaling ito.