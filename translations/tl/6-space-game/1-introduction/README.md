<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "862f7f2ef320f6f8950fae379e6ece45",
  "translation_date": "2025-10-22T15:42:31+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "tl"
}
-->
# Gumawa ng Space Game Bahagi 1: Panimula

![Space game animation na nagpapakita ng gameplay](../../../../6-space-game/images/pewpew.gif)

Katulad ng mission control ng NASA na nagkokoordina ng maraming sistema sa panahon ng paglulunsad ng spacecraft, gagawa tayo ng isang space game na nagpapakita kung paano maaaring magtulungan ang iba't ibang bahagi ng isang programa nang maayos. Habang gumagawa ng isang bagay na maaari mong aktwal na laruin, matututo ka ng mahahalagang konsepto sa programming na maaaring gamitin sa anumang proyekto ng software.

Susuriin natin ang dalawang pangunahing paraan ng pag-oorganisa ng code: inheritance at composition. Hindi lang ito mga akademikong konsepto – ito ang mga pattern na ginagamit sa lahat mula sa video games hanggang sa mga sistema ng pagbabangko. Magpapatupad din tayo ng isang sistema ng komunikasyon na tinatawag na pub/sub na gumagana tulad ng mga network ng komunikasyon na ginagamit sa spacecraft, na nagpapahintulot sa iba't ibang bahagi na magbahagi ng impormasyon nang walang paglikha ng mga dependency.

Sa pagtatapos ng seryeng ito, maiintindihan mo kung paano bumuo ng mga application na maaaring mag-scale at mag-evolve – maging gumagawa ka man ng mga laro, web application, o anumang sistema ng software.

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/29)

## Inheritance at Composition sa Pagbuo ng Laro

Habang lumalaki ang mga proyekto sa pagiging kumplikado, nagiging kritikal ang organisasyon ng code. Ang nagsimula bilang isang simpleng script ay maaaring maging mahirap panatilihin nang walang tamang istruktura – katulad ng kung paano ang Apollo missions ay nangangailangan ng maingat na koordinasyon sa pagitan ng libu-libong mga bahagi.

Susuriin natin ang dalawang pangunahing paraan ng pag-oorganisa ng code: inheritance at composition. Ang bawat isa ay may natatanging mga benepisyo, at ang pag-unawa sa pareho ay tumutulong sa iyo na pumili ng tamang paraan para sa iba't ibang sitwasyon. Ipapakita namin ang mga konseptong ito sa pamamagitan ng aming space game, kung saan ang mga bayani, kalaban, power-ups, at iba pang mga bagay ay kailangang mag-interact nang mahusay.

✅ Isa sa mga pinakasikat na aklat sa programming ay tungkol sa [design patterns](https://en.wikipedia.org/wiki/Design_Patterns).

Sa anumang laro, mayroon kang `game objects` – ang mga interactive na elemento na bumubuo sa mundo ng laro. Ang mga bayani, kalaban, power-ups, at visual effects ay lahat ng game objects. Ang bawat isa ay umiiral sa mga partikular na coordinate ng screen gamit ang `x` at `y` na mga halaga, katulad ng pag-plot ng mga puntos sa isang coordinate plane.

Sa kabila ng kanilang mga visual na pagkakaiba, madalas na may mga karaniwang pag-uugali ang mga bagay na ito:

- **Umiiral sila sa isang lugar** – Ang bawat bagay ay may x at y coordinates para malaman ng laro kung saan ito iguguhit
- **Marami ang maaaring gumalaw** – Tumakbo ang mga bayani, habulin ng mga kalaban, lumipad ang mga bala sa screen
- **May lifespan sila** – Ang ilan ay nananatili magpakailanman, ang iba (tulad ng mga pagsabog) ay lumilitaw nang sandali at nawawala
- **Reaksyon sila sa mga bagay** – Kapag nagbanggaan, nakokolekta ang mga power-ups, nag-a-update ang mga health bar

✅ Isipin ang isang laro tulad ng Pac-Man. Maaari mo bang tukuyin ang apat na uri ng mga bagay na nakalista sa itaas sa larong ito?

### Pagpapahayag ng Pag-uugali sa Pamamagitan ng Code

Ngayon na naiintindihan mo ang mga karaniwang pag-uugali na ibinabahagi ng mga game objects, tingnan natin kung paano ipatupad ang mga pag-uugaling ito sa JavaScript. Maaari mong ipahayag ang pag-uugali ng mga bagay sa pamamagitan ng mga method na nakakabit sa mga klase o indibidwal na mga bagay, at may ilang mga paraan na maaaring piliin.

**Ang Paraan na Batay sa Klase**

Ang mga klase at inheritance ay nagbibigay ng istrukturadong paraan ng pag-oorganisa ng mga game objects. Katulad ng taxonomic classification system na binuo ni Carl Linnaeus, nagsisimula ka sa isang base class na naglalaman ng mga karaniwang properties, pagkatapos ay lumikha ng mga espesyal na klase na nagmamana ng mga pundasyon habang nagdaragdag ng mga partikular na kakayahan.

✅ Ang inheritance ay isang mahalagang konsepto na dapat maunawaan. Matuto pa sa [artikulo ng MDN tungkol sa inheritance](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Narito kung paano mo maipapatupad ang mga game objects gamit ang mga klase at inheritance:

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

**Himayin natin ito nang hakbang-hakbang:**
- Gumagawa tayo ng isang pangunahing template na maaaring gamitin ng bawat game object
- Ang constructor ay nagse-save kung nasaan ang object (`x`, `y`) at kung anong uri ng bagay ito
- Ito ang nagiging pundasyon na gagamitin ng lahat ng iyong game objects

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

**Sa itaas, ginawa natin ang sumusunod:**
- **In-extend** ang GameObject class upang magdagdag ng functionality sa paggalaw
- **Tinawag** ang parent constructor gamit ang `super()` upang i-initialize ang mga inherited properties
- **Nagdagdag** ng `moveTo()` method na nag-a-update sa posisyon ng object

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

**Pag-unawa sa mga konseptong ito:**
- **Lumilikha** ng mga espesyal na uri ng object na nagmamana ng naaangkop na mga pag-uugali
- **Nagpapakita** kung paano pinapayagan ng inheritance ang selective feature inclusion
- **Ipinapakita** na ang mga bayani ay maaaring gumalaw habang ang mga puno ay nananatiling stationary
- **Nagpapakita** kung paano pinipigilan ng class hierarchy ang mga hindi naaangkop na aksyon

✅ Maglaan ng ilang minuto upang muling isipin ang isang Pac-Man hero (Inky, Pinky o Blinky, halimbawa) at kung paano ito isusulat sa JavaScript.

**Ang Paraan ng Composition**

Ang composition ay sumusunod sa modular na pilosopiya ng disenyo, katulad ng kung paano dinisenyo ng mga inhinyero ang spacecraft na may mga interchangeable na bahagi. Sa halip na magmana mula sa isang parent class, pinagsasama mo ang mga partikular na pag-uugali upang lumikha ng mga bagay na may eksaktong functionality na kailangan nila. Ang paraang ito ay nag-aalok ng flexibility nang walang mahigpit na hierarchical constraints.

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

**Narito ang ginagawa ng code na ito:**
- **Nagde-define** ng base `gameObject` na may position at type properties
- **Lumilikha** ng hiwalay na `movable` behavior object na may functionality sa paggalaw
- **Naghiwalay** ng mga concern sa pamamagitan ng pagpapanatili ng position data at movement logic na independent

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

**Sa itaas, ginawa natin ang sumusunod:**
- **Pinagsama** ang base object properties sa movement behavior gamit ang spread syntax
- **Lumilikha** ng mga factory function na nagbabalik ng customized na mga object
- **Nag-enable** ng flexible object creation nang walang mahigpit na class hierarchies
- **Nagpapahintulot** sa mga object na magkaroon ng eksaktong mga pag-uugali na kailangan nila

```javascript
// Step 4: Create and use your composed objects
const hero = createHero(10, 10);
hero.moveTo(5, 5); // Works perfectly!

const tree = createStatic(0, 0, 'Tree');
// tree.moveTo() is undefined - no movement behavior was composed
```

**Mga mahalagang punto na dapat tandaan:**
- **Nagko-compose** ng mga object sa pamamagitan ng pag-mix ng mga pag-uugali sa halip na magmana ng mga ito
- **Nagbibigay** ng mas maraming flexibility kaysa sa mahigpit na inheritance hierarchies
- **Nagpapahintulot** sa mga object na magkaroon ng eksaktong mga feature na kailangan nila
- **Gumagamit** ng modernong JavaScript spread syntax para sa malinis na object combination 
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

**Paghimay sa nangyayari dito:**
- **Lumilikha** ng central event management system gamit ang isang simpleng klase
- **Nag-iimbak** ng mga listener sa isang object na naka-organize ayon sa uri ng mensahe
- **Nagre-rehistro** ng mga bagong listener gamit ang `on()` method
- **Nagbo-broadcast** ng mga mensahe sa lahat ng interesadong listener gamit ang `emit()`
- **Sumusuporta** sa optional na data payloads para sa pagpapasa ng kaugnay na impormasyon

### Pagsasama-sama: Isang Praktikal na Halimbawa

Sige, tingnan natin ito sa aksyon! Bubuo tayo ng isang simpleng movement system na nagpapakita kung gaano kalinis at flexible ang pub/sub:

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

**Narito ang ginagawa ng code na ito:**
- **Nagde-define** ng constants object upang maiwasan ang mga typo sa mga pangalan ng mensahe
- **Lumilikha** ng event emitter instance upang pamahalaan ang lahat ng komunikasyon
- **Nag-i-initialize** ng hero object sa starting position

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

**Sa itaas, ginawa natin ang sumusunod:**
- **Nagrehistro** ng mga event listener na tumutugon sa mga movement message
- **Nag-update** ng posisyon ng hero batay sa direksyon ng paggalaw
- **Nagdagdag** ng console logging upang subaybayan ang mga pagbabago sa posisyon ng hero
- **Naghiwalay** ng movement logic mula sa input handling

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

**Pag-unawa sa mga konseptong ito:**
- **Nagkokonekta** ng keyboard input sa mga game event nang walang tight coupling
- **Nag-enable** sa input system na makipag-ugnayan sa mga game object nang hindi direktang nakikilala ang isa't isa
- **Nagpapahintulot** sa maraming sistema na tumugon sa parehong keyboard events
- **Ginagawang** madali ang pagbabago ng key bindings o pagdaragdag ng mga bagong input method

> 💡 **Pro Tip**: Ang kagandahan ng pattern na ito ay ang flexibility! Madali kang makakapagdagdag ng sound effects, screen shake, o particle effects sa pamamagitan lamang ng pagdaragdag ng higit pang event listener – walang kailangang baguhin sa umiiral na keyboard o movement code.
> 
**Narito kung bakit magugustuhan mo ang paraang ito:**
- Ang pagdaragdag ng mga bagong feature ay nagiging napakadali – makinig lang sa mga event na mahalaga sa iyo
- Maraming bagay ang maaaring tumugon sa parehong event nang hindi nagkakagulo
- Ang testing ay nagiging mas simple dahil ang bawat bahagi ay gumagana nang independent
- Kapag may nasira, alam mo kung saan eksaktong titingin

### Bakit Epektibo ang Pag-scale ng Pub/Sub

Ang pub/sub pattern ay nagpapanatili ng pagiging simple habang lumalaki ang pagiging kumplikado ng mga application. Maging sa pamamahala ng dose-dosenang mga kalaban, dynamic na UI updates, o sound systems, hinahawakan ng pattern ang pagtaas ng scale nang walang pagbabago sa arkitektura. Ang mga bagong feature ay madaling isama sa umiiral na event system nang hindi naaapektuhan ang naitatag na functionality.

> ⚠️ **Karaniwang Pagkakamali**: Huwag gumawa ng masyadong maraming partikular na uri ng mensahe sa simula. Magsimula sa malawak na mga kategorya at i-refine ang mga ito habang nagiging mas malinaw ang mga pangangailangan ng iyong laro.
> 
**Mga pinakamahusay na kasanayan na dapat sundin:**
- **Naggrupo** ng mga kaugnay na mensahe sa lohikal na mga kategorya
- **Gumagamit** ng mga deskriptibong pangalan na malinaw na nagpapahiwatig kung ano ang nangyari
- **Pinapanatili** ang mga payload ng mensahe na simple at nakatuon
- **Nagdo-dokumento** ng iyong mga uri ng mensahe para sa pakikipagtulungan sa koponan

---

## Hamon ng GitHub Copilot Agent 🚀

Gamitin ang Agent mode upang kumpletuhin ang sumusunod na hamon:

**Deskripsyon:** Gumawa ng simpleng sistema ng game object gamit ang parehong inheritance at pub/sub pattern. Magpapatupad ka ng basic na laro kung saan ang iba't ibang object ay maaaring makipag-ugnayan sa pamamagitan ng mga event nang hindi direktang nakikilala ang isa't isa.

**Prompt:** Gumawa ng JavaScript game system na may sumusunod na mga kinakailangan: 1) Gumawa ng base GameObject class na may x, y coordinates at type property. 2) Gumawa ng Hero class na nag-extend sa GameObject at maaaring gumalaw. 3) Gumawa ng Enemy class na nag-extend sa GameObject at maaaring habulin ang hero. 4) Magpatupad ng EventEmitter class para sa pub/sub pattern. 5) Mag-set up ng mga event listener upang kapag gumalaw ang hero, ang mga malapit na kalaban ay makatanggap ng 'HERO_MOVED' event at i-update ang kanilang posisyon upang habulin ang hero. Isama ang mga console.log statement upang ipakita ang komunikasyon sa pagitan ng mga object.

Matuto pa tungkol sa [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) dito.

## 🚀 Hamon

Pag-isipan kung paano maaaring mapahusay ng pub-sub pattern ang arkitektura ng laro. Tukuyin kung aling mga bahagi ang dapat mag-emit ng mga event at kung paano dapat tumugon ang sistema. Magdisenyo ng konsepto ng laro at i-map out ang mga pattern ng komunikasyon sa pagitan ng mga bahagi nito.

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/30)

## Review & Self Study

Matuto pa tungkol sa Pub/Sub sa pamamagitan ng [pagbabasa tungkol dito](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Assignment

[Mock up a game](assignment.md)

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na pinagmulan. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.