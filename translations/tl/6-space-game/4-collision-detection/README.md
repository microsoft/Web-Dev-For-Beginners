<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4b1d441cfd31924084956000c0fee5a5",
  "translation_date": "2025-10-22T15:41:50+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "tl"
}
-->
# Gumawa ng Space Game Bahagi 4: Magdagdag ng Laser at Mag-detect ng Mga Banggaan

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/35)

Isipin ang eksena sa Star Wars kung saan tumama ang proton torpedoes ni Luke sa exhaust port ng Death Star. Ang eksaktong pag-detect ng banggaan na iyon ang nagbago sa kapalaran ng kalawakan! Sa mga laro, ang pag-detect ng banggaan ay gumagana sa parehong paraan - tinutukoy nito kung kailan nagkakaroon ng interaksyon ang mga bagay at kung ano ang susunod na mangyayari.

Sa araling ito, magdadagdag ka ng laser weapons sa iyong space game at magpapatupad ng collision detection. Katulad ng mga mission planners ng NASA na nagkakalkula ng trajectory ng spacecraft para maiwasan ang debris, matututo kang mag-detect kung kailan nagkakaroon ng intersection ang mga game objects. Hahatiin natin ito sa mga hakbang na madaling sundan.

Sa dulo, magkakaroon ka ng gumaganang combat system kung saan ang mga laser ay sumisira sa mga kalaban at ang mga banggaan ay nagti-trigger ng mga event sa laro. Ang parehong prinsipyo ng banggaan ay ginagamit sa lahat mula sa physics simulations hanggang sa interactive web interfaces.

✅ Mag-research ng kaunti tungkol sa pinakaunang computer game na kailanman isinulat. Ano ang functionality nito?

## Pag-detect ng Banggaan

Ang pag-detect ng banggaan ay gumagana tulad ng proximity sensors sa Apollo lunar module - patuloy nitong sinusuri ang distansya at nagti-trigger ng alerto kapag ang mga bagay ay masyadong malapit. Sa mga laro, ang sistemang ito ang tumutukoy kung kailan nagkakaroon ng interaksyon ang mga bagay at kung ano ang dapat mangyari.

Ang approach na gagamitin natin ay ituturing ang bawat game object bilang isang rectangle, katulad ng kung paano ginagamit ng air traffic control systems ang mga simpleng geometric shapes para i-track ang mga aircraft. Ang rectangular method na ito ay maaaring mukhang basic, pero ito ay computationally efficient at epektibo para sa karamihan ng game scenarios.

### Representasyon ng Rectangle

Ang bawat game object ay nangangailangan ng coordinate boundaries, katulad ng kung paano minapa ng Mars Pathfinder rover ang lokasyon nito sa ibabaw ng Mars. Ganito natin ide-define ang mga boundary coordinates:

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

**I-breakdown natin ito:**
- **Top edge**: Ito ang simula ng iyong object sa vertical (ang y position nito)
- **Left edge**: Kung saan ito nagsisimula sa horizontal (ang x position nito)
- **Bottom edge**: Idagdag ang height sa y position - ngayon alam mo na kung saan ito nagtatapos!
- **Right edge**: Idagdag ang width sa x position - at nakuha mo na ang kumpletong boundary

### Algorithm ng Intersection

Ang pag-detect ng rectangle intersections ay gumagamit ng logic na katulad ng kung paano tinutukoy ng Hubble Space Telescope kung ang mga celestial objects ay nag-o-overlap sa field of view nito. Ang algorithm ay nagsusuri ng separation:

```javascript
function intersectRect(r1, r2) {
  return !(r2.left > r1.right ||
    r2.right < r1.left ||
    r2.top > r1.bottom ||
    r2.bottom < r1.top);
}
```

**Ang separation test ay gumagana tulad ng radar systems:**
- Ang rectangle 2 ba ay ganap na nasa kanan ng rectangle 1?
- Ang rectangle 2 ba ay ganap na nasa kaliwa ng rectangle 1?
- Ang rectangle 2 ba ay ganap na nasa ibaba ng rectangle 1?
- Ang rectangle 2 ba ay ganap na nasa itaas ng rectangle 1?

Kung wala sa mga kondisyong ito ang totoo, ang mga rectangles ay dapat na nag-o-overlap. Ang approach na ito ay katulad ng kung paano tinutukoy ng radar operators kung ang dalawang aircraft ay nasa ligtas na distansya.

## Pamamahala ng Lifecycle ng Object

Kapag ang laser ay tumama sa kalaban, parehong object ang kailangang alisin sa laro. Gayunpaman, ang pag-delete ng mga object sa gitna ng loop ay maaaring magdulot ng crashes - isang aral na natutunan sa maagang computer systems tulad ng Apollo Guidance Computer. Sa halip, gumagamit tayo ng "mark for deletion" approach na ligtas na nag-aalis ng mga object sa pagitan ng frames.

Ganito natin minamarkahan ang isang bagay para sa pag-alis:

```javascript
// Mark object for removal
enemy.dead = true;
```

**Bakit gumagana ang approach na ito:**
- Minamarkahan natin ang object bilang "patay" pero hindi agad ito dine-delete
- Pinapayagan nitong matapos ang kasalukuyang game frame nang ligtas
- Walang crashes mula sa pagsubok na gamitin ang isang bagay na wala na!

Pagkatapos ay i-filter ang mga marked objects bago ang susunod na render cycle:

```javascript
gameObjects = gameObjects.filter(go => !go.dead);
```

**Ang ginagawa ng filtering na ito:**
- Gumagawa ng bagong listahan na may lamang "buhay" na mga object
- Itinatapon ang anumang bagay na minarkahan bilang patay
- Pinapanatili ang maayos na pagtakbo ng laro
- Pinipigilan ang memory bloat mula sa naipong mga nasirang object

## Pagpapatupad ng Laser Mechanics

Ang laser projectiles sa mga laro ay gumagana sa parehong prinsipyo ng photon torpedoes sa Star Trek - sila ay discrete objects na gumagalaw sa tuwid na linya hanggang sa tumama sa isang bagay. Ang bawat pag-pindot sa spacebar ay lumilikha ng bagong laser object na gumagalaw sa screen.

Para magawa ito, kailangan nating i-coordinate ang ilang iba't ibang bahagi:

**Mga pangunahing bahagi na ipapatupad:**
- **Gumawa** ng laser objects na nagmumula sa posisyon ng hero
- **I-handle** ang keyboard input para i-trigger ang paglikha ng laser
- **Pamahalaan** ang galaw at lifecycle ng laser
- **Ipatupad** ang visual representation para sa laser projectiles

## Pagpapatupad ng Firing Rate Control

Ang walang limitasyong firing rates ay mag-o-overload sa game engine at gagawing masyadong madali ang gameplay. Ang mga tunay na weapon systems ay may parehong constraints - kahit ang phasers ng USS Enterprise ay nangangailangan ng oras para mag-recharge sa pagitan ng mga shot.

Magpapatupad tayo ng cooldown system na pumipigil sa rapid-fire spamming habang pinapanatili ang responsive controls:

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

**Paano gumagana ang cooldown:**
- Kapag ginawa, ang weapon ay nagsisimula bilang "hot" (hindi pa maaaring mag-fire)
- Pagkatapos ng timeout period, ito ay nagiging "cool" (handa nang mag-fire)
- Bago mag-fire, sinusuri natin: "Ang weapon ba ay cool?"
- Pinipigilan nito ang spam-clicking habang pinapanatili ang responsive controls

✅ Balikan ang lesson 1 sa space game series para ipaalala sa sarili ang tungkol sa cooldowns.

## Pagbuo ng Collision System

Palalawakin mo ang umiiral na code ng iyong space game para gumawa ng collision detection system. Katulad ng automated collision avoidance system ng International Space Station, ang iyong laro ay patuloy na magmo-monitor ng mga posisyon ng object at magre-respond sa mga intersection.

Simula sa code ng iyong nakaraang aralin, magdadagdag ka ng collision detection na may partikular na mga patakaran na namamahala sa interaksyon ng mga object.

> 💡 **Pro Tip**: Ang laser sprite ay kasama na sa iyong assets folder at naka-reference na sa iyong code, handa na para sa pagpapatupad.

### Mga Patakaran ng Banggaan na Ipatupad

**Mga mekanika ng laro na idagdag:**
1. **Laser tumama sa kalaban**: Ang kalaban ay nasisira kapag tinamaan ng laser projectile
2. **Laser tumama sa screen boundary**: Ang laser ay tinatanggal kapag umabot sa itaas na gilid ng screen
3. **Kalaban at hero banggaan**: Parehong object ang nasisira kapag nag-intersect
4. **Kalaban umabot sa ibaba**: Game over condition kapag ang mga kalaban ay umabot sa ibaba ng screen

## Pag-set up ng Iyong Development Environment

Magandang balita - na-set up na namin ang karamihan ng mga pundasyon para sa iyo! Ang lahat ng iyong game assets at basic structure ay naghihintay sa `your-work` subfolder, handa na para idagdag ang mga cool na collision features.

### Estruktura ng Proyekto

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

**Pag-unawa sa file structure:**
- **Naglalaman** ng lahat ng sprite images na kailangan para sa mga game object
- **Kasama** ang pangunahing HTML document at JavaScript application file
- **Nagbibigay** ng package configuration para sa local development server

### Pag-start ng Development Server

Mag-navigate sa iyong project folder at simulan ang local server:

```bash
cd your-work
npm start
```

**Ang sequence ng command na ito:**
- **Nagbabago** ng directory sa iyong working project folder
- **Nag-start** ng local HTTP server sa `http://localhost:5000`
- **Nag-serve** ng iyong game files para sa testing at development
- **Nag-enable** ng live development na may automatic reloading

Buksan ang iyong browser at mag-navigate sa `http://localhost:5000` para makita ang kasalukuyang estado ng iyong laro na may hero at mga kalaban na naka-render sa screen.

### Step-by-step Implementation

Katulad ng systematic approach na ginamit ng NASA para i-program ang Voyager spacecraft, ipapatupad natin ang collision detection methodically, itatayo ang bawat component nang hakbang-hakbang.

#### 1. Magdagdag ng Rectangle Collision Bounds

Una, turuan natin ang mga game object kung paano i-describe ang kanilang boundaries. Idagdag ang method na ito sa iyong `GameObject` class:

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

**Ang method na ito ay nagagawa:**
- **Gumagawa** ng rectangle object na may eksaktong boundary coordinates
- **Kinakalkula** ang bottom at right edges gamit ang position plus dimensions
- **Nagre-return** ng object na handa para sa collision detection algorithms
- **Nagbibigay** ng standardized interface para sa lahat ng game objects

#### 2. Ipatupad ang Intersection Detection

Ngayon, gumawa tayo ng collision detective - isang function na makakapagsabi kung kailan nag-o-overlap ang dalawang rectangles:

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

**Ang algorithm na ito ay gumagana sa pamamagitan ng:**
- **Pagsusuri** ng apat na separation conditions sa pagitan ng rectangles
- **Nagre-return** ng `false` kung ang anumang separation condition ay totoo
- **Nagpapahiwatig** ng banggaan kapag walang separation na umiiral
- **Gumagamit** ng negation logic para sa efficient intersection testing

#### 3. Ipatupad ang Laser Firing System

Narito ang exciting na bahagi! I-set up natin ang laser firing system.

##### Mga Constants ng Mensahe

Una, mag-define tayo ng ilang uri ng mensahe para makapag-usap ang iba't ibang bahagi ng ating laro:

```javascript
KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
```

**Ang mga constants na ito ay nagbibigay:**
- **Nag-standardize** ng mga pangalan ng event sa buong application
- **Nag-enable** ng consistent communication sa pagitan ng game systems
- **Nag-prevent** ng typos sa event handler registration

##### Keyboard Input Handling

Idagdag ang space key detection sa iyong key event listener:

```javascript
} else if(evt.keyCode === 32) {
  eventEmitter.emit(Messages.KEY_EVENT_SPACE);
}
```

**Ang input handler na ito:**
- **Nag-detect** ng space key presses gamit ang keyCode 32
- **Nag-eemit** ng standardized event message
- **Nag-enable** ng decoupled firing logic

##### Event Listener Setup

Irehistro ang firing behavior sa iyong `initGame()` function:

```javascript
eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
 if (hero.canFire()) {
   hero.fire();
 }
});
```

**Ang event listener na ito:**
- **Nagre-respond** sa space key events
- **Sinusuri** ang firing cooldown status
- **Nagti-trigger** ng laser creation kapag pinapayagan

Idagdag ang collision handling para sa laser-enemy interactions:

```javascript
eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
  first.dead = true;
  second.dead = true;
});
```

**Ang collision handler na ito:**
- **Tumanggap** ng collision event data na may parehong objects
- **Minamarkahan** ang parehong objects para sa pag-alis
- **Tinitiyak** ang tamang cleanup pagkatapos ng banggaan

#### 4. Gumawa ng Laser Class

Magpatupad ng laser projectile na gumagalaw pataas at namamahala sa sarili nitong lifecycle:

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

**Ang class implementation na ito:**
- **Nag-extend** ng GameObject para ma-inherit ang basic functionality
- **Nag-set** ng tamang dimensions para sa laser sprite
- **Gumagawa** ng automatic upward movement gamit ang `setInterval()`
- **Nag-handle** ng self-destruction kapag umabot sa screen top
- **Namamahala** sa sariling animation timing at cleanup

#### 5. Ipatupad ang Collision Detection System

Gumawa ng comprehensive collision detection function:

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

**Ang collision system na ito:**
- **Nag-filter** ng game objects ayon sa type para sa efficient testing
- **Sinusuri** ang bawat laser laban sa bawat kalaban para sa intersections
- **Nag-eemit** ng collision events kapag may intersections na na-detect
- **Nag-clean** up ng mga nasirang objects pagkatapos ng collision processing

> ⚠️ **Mahalaga**: Idagdag ang `updateGameObjects()` sa iyong main game loop sa `window.onload` para ma-enable ang collision detection.

#### 6. Magdagdag ng Cooldown System sa Hero Class

Palawakin ang Hero class gamit ang firing mechanics at rate limiting:

```javascript
class Hero extends GameObject {
  constructor(x, y) {
    super(x, y);
    this.width = 99;
    this.height = 75;
    this.type = "Hero";
    this.speed = { x: 0, y: 0 };
    this.cooldown = 0;
  }
  
  fire() {
    gameObjects.push(new Laser(this.x + 45, this.y - 10));
    this.cooldown = 500;

    let id = setInterval(() => {
      if (this.cooldown > 0) {
        this.cooldown -= 100;
      } else {
        clearInterval(id);
      }
    }, 200);
  }
  
  canFire() {
    return this.cooldown === 0;
  }
}
```

**Pag-unawa sa enhanced Hero class:**
- **Nag-initialize** ng cooldown timer sa zero (handa nang mag-fire)
- **Gumagawa** ng laser objects na nakaposisyon sa itaas ng hero ship
- **Nag-set** ng cooldown period para maiwasan ang rapid firing
- **Nag-decrement** ng cooldown timer gamit ang interval-based updates
- **Nagbibigay** ng firing status check sa pamamagitan ng `canFire()` method

### Testing ng Iyong Implementation

Ang iyong space game ngayon ay may kumpletong collision detection at combat mechanics. 🚀 Subukan ang mga bagong kakayahan:
- **Mag-navigate** gamit ang arrow keys para i-verify ang movement controls
- **Mag-fire ng lasers** gamit ang spacebar - pansinin kung paano pinipigilan ng cooldown ang spam-clicking
- **Obserbahan ang mga banggaan** kapag ang lasers ay tumama sa mga kalaban, na nagti-trigger ng pag-alis
- **I-verify ang cleanup** habang ang mga nasirang objects ay nawawala sa laro

Matagumpay mong naipatupad ang collision detection system gamit ang parehong mathematical principles na gumagabay sa spacecraft navigation at robotics.

## GitHub Copilot Agent Challenge 🚀

Gamitin ang Agent mode para tapusin ang sumusunod na challenge:

**Deskripsyon:** Pagandahin ang collision detection system sa pamamagitan ng pagpapatupad ng power-ups na random na lumilitaw at nagbibigay ng pansamantalang kakayahan kapag nakolekta ng hero ship.

**Prompt:** Gumawa ng PowerUp class na nag-extend sa GameObject at ipatupad ang collision detection sa pagitan ng hero at power-ups. Magdagdag ng hindi bababa sa dalawang uri ng power-ups: isa na nagpapataas ng fire rate (nagpapababa ng cooldown) at isa na lumilikha ng pansamantalang shield. Isama ang spawn logic na lumilikha ng power-ups sa random intervals at positions.

---

## 🚀 Hamon

Magdagdag ng explosion! Tingnan ang game assets sa [Space Art repo](../../../../6-space-game/solution/spaceArt/readme.txt) at subukang magdagdag ng explosion kapag ang laser ay tumama sa alien.

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/36)

## Review & Self Study

Mag-eksperimento sa mga intervals sa iyong laro sa ngayon. Ano ang nangyayari kapag binago mo ang mga ito? Magbasa pa tungkol sa [JavaScript timing events](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Assignment

[Explore collisions](assignment.md)

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat sinisikap naming maging tumpak, pakatandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.