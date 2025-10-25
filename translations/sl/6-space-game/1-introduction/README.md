<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "862f7f2ef320f6f8950fae379e6ece45",
  "translation_date": "2025-10-25T00:44:12+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "sl"
}
-->
# Ustvari vesoljsko igro, 1. del: Uvod

![Animacija vesoljske igre, ki prikazuje igranje](../../../../6-space-game/images/pewpew.gif)

Tako kot NASA-jev nadzor misij koordinira več sistemov med vesoljskim izstrelitvijo, bomo zgradili vesoljsko igro, ki prikazuje, kako lahko različni deli programa delujejo skupaj brezhibno. Medtem ko ustvarjate nekaj, kar lahko dejansko igrate, se boste naučili osnovnih programskih konceptov, ki veljajo za vsak projekt programske opreme.

Raziskali bomo dva temeljna pristopa k organizaciji kode: dedovanje in kompozicijo. To niso le akademski koncepti – to so isti vzorci, ki poganjajo vse od video iger do bančnih sistemov. Prav tako bomo implementirali komunikacijski sistem, imenovan pub/sub, ki deluje kot komunikacijska omrežja, uporabljena v vesoljskih plovilih, in omogoča različnim komponentam deljenje informacij brez ustvarjanja odvisnosti.

Do konca te serije boste razumeli, kako zgraditi aplikacije, ki se lahko razširijo in razvijajo – ne glede na to, ali razvijate igre, spletne aplikacije ali kateri koli drug sistem programske opreme.

## Predhodni kviz pred predavanjem

[Predhodni kviz pred predavanjem](https://ff-quizzes.netlify.app/web/quiz/29)

## Dedovanje in kompozicija v razvoju iger

Ko projekti postajajo bolj kompleksni, postane organizacija kode ključnega pomena. Kar se začne kot preprost skript, lahko postane težko vzdrževati brez ustrezne strukture – podobno kot so misije Apollo zahtevale skrbno koordinacijo med tisočimi komponentami.

Raziskali bomo dva temeljna pristopa za organizacijo kode: dedovanje in kompozicijo. Vsak ima svoje prednosti, razumevanje obeh pa vam pomaga izbrati pravi pristop za različne situacije. Te koncepte bomo prikazali skozi našo vesoljsko igro, kjer morajo junaki, sovražniki, dodatki moči in drugi objekti učinkovito sodelovati.

✅ Ena najbolj znanih knjig o programiranju je povezana z [vzorci oblikovanja](https://en.wikipedia.org/wiki/Design_Patterns).

V vsaki igri imate `objekte igre` – interaktivne elemente, ki naseljujejo vaš igralni svet. Junaki, sovražniki, dodatki moči in vizualni učinki so vsi objekti igre. Vsak obstaja na določenih koordinatah zaslona z uporabo vrednosti `x` in `y`, podobno kot pri risanju točk na koordinatni ravnini.

Kljub njihovim vizualnim razlikam ti objekti pogosto delijo osnovna vedenja:

- **Obstajajo nekje** – Vsak objekt ima x in y koordinate, da igra ve, kje ga narisati
- **Veliko jih se premika** – Junaki tečejo, sovražniki lovijo, krogle letijo po zaslonu
- **Imajo življenjsko dobo** – Nekateri ostanejo za vedno, drugi (kot eksplozije) se pojavijo za kratek čas in izginejo
- **Reagirajo na stvari** – Ko se stvari zaletijo, se dodatki moči poberejo, zdravstvene vrstice se posodobijo

✅ Pomislite na igro, kot je Pac-Man. Ali lahko prepoznate štiri zgoraj navedene tipe objektov v tej igri?

### Izražanje vedenja skozi kodo

Zdaj, ko razumete skupna vedenja, ki jih delijo objekti igre, raziščimo, kako implementirati ta vedenja v JavaScriptu. Vedenje objektov lahko izrazite skozi metode, ki so priložene razredom ali posameznim objektom, in obstaja več pristopov, med katerimi lahko izbirate.

**Pristop, ki temelji na razredih**

Razredi in dedovanje zagotavljajo strukturiran pristop k organizaciji objektov igre. Tako kot taksonomski klasifikacijski sistem, ki ga je razvil Carl Linnaeus, začnete z osnovnim razredom, ki vsebuje skupne lastnosti, nato pa ustvarite specializirane razrede, ki podedujejo te osnove, hkrati pa dodajo specifične sposobnosti.

✅ Dedovanje je pomemben koncept za razumevanje. Več o tem preberite v [članku MDN o dedovanju](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Tukaj je prikazano, kako lahko implementirate objekte igre z uporabo razredov in dedovanja:

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

**Razčlenimo to korak za korakom:**
- Ustvarjamo osnovno predlogo, ki jo lahko uporabi vsak objekt igre
- Konstruktor shrani, kje se objekt nahaja (`x`, `y`) in kakšen tip objekta je
- To postane osnova, na kateri bodo gradili vsi vaši objekti igre

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

**V zgornjem primeru smo:**
- **Razširili** razred GameObject, da dodamo funkcionalnost premikanja
- **Poklicali** konstruktor starša z uporabo `super()`, da inicializiramo podedovane lastnosti
- **Dodali** metodo `moveTo()`, ki posodobi položaj objekta

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

**Razumevanje teh konceptov:**
- **Ustvarja** specializirane tipe objektov, ki podedujejo ustrezna vedenja
- **Prikazuje**, kako dedovanje omogoča selektivno vključevanje funkcij
- **Pokaže**, da se junaki lahko premikajo, medtem ko drevesa ostajajo na mestu
- **Ilustrira**, kako hierarhija razredov preprečuje neprimerna dejanja

✅ Vzemite si nekaj minut in si zamislite junaka iz Pac-Mana (na primer Inky, Pinky ali Blinky) ter kako bi bil napisan v JavaScriptu.

**Pristop kompozicije**

Kompozicija sledi modularni oblikovalski filozofiji, podobno kot inženirji oblikujejo vesoljska plovila z zamenljivimi komponentami. Namesto da dedujete od starševskega razreda, kombinirate specifična vedenja, da ustvarite objekte z natančno funkcionalnostjo, ki jo potrebujejo. Ta pristop ponuja fleksibilnost brez togih hierarhičnih omejitev.

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

**Kaj počne ta koda:**
- **Definira** osnovni `gameObject` z lastnostmi položaja in tipa
- **Ustvari** ločen objekt vedenja `movable` z funkcionalnostjo premikanja
- **Loči** skrbi z ohranjanjem podatkov o položaju in logike premikanja neodvisno

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

**V zgornjem primeru smo:**
- **Združili** osnovne lastnosti objekta z vedenjem premikanja z uporabo sintakse razširitve
- **Ustvarili** tovarniške funkcije, ki vračajo prilagojene objekte
- **Omogočili** fleksibilno ustvarjanje objektov brez togih hierarhij razredov
- **Dovolili**, da imajo objekti natančno tista vedenja, ki jih potrebujejo

```javascript
// Step 4: Create and use your composed objects
const hero = createHero(10, 10);
hero.moveTo(5, 5); // Works perfectly!

const tree = createStatic(0, 0, 'Tree');
// tree.moveTo() is undefined - no movement behavior was composed
```

**Ključne točke za zapomniti:**
- **Sestavlja** objekte z mešanjem vedenj namesto dedovanja
- **Ponuja** večjo fleksibilnost kot toge hierarhije dedovanja
- **Dovoljuje**, da imajo objekti natančno tiste funkcije, ki jih potrebujejo
- **Uporablja** sodobno sintakso razširitve JavaScript za čisto kombinacijo objektov 
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

**Razčlenitev, kaj se tukaj dogaja:**
- **Ustvari** centralni sistem za upravljanje dogodkov z uporabo preprostega razreda
- **Shrani** poslušalce v objekt, organiziran po tipih sporočil
- **Registrira** nove poslušalce z metodo `on()`
- **Oddaja** sporočila vsem zainteresiranim poslušalcem z uporabo `emit()`
- **Podpira** opcijske podatkovne pakete za posredovanje ustreznih informacij

### Vse skupaj: praktičen primer

Dobro, poglejmo to v praksi! Zgradili bomo preprost sistem premikanja, ki prikazuje, kako čist in prilagodljiv je lahko pub/sub:

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

**Kaj počne ta koda:**
- **Definira** objekt konstant, da prepreči tipkarske napake v imenih sporočil
- **Ustvari** instanco oddajnika dogodkov za upravljanje vse komunikacije
- **Inicializira** junaka na začetnem položaju

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

**V zgornjem primeru smo:**
- **Registrirali** poslušalce dogodkov, ki se odzivajo na sporočila o premikanju
- **Posodobili** junakov položaj glede na smer premikanja
- **Dodali** beleženje v konzolo za sledenje spremembam junakovega položaja
- **Ločili** logiko premikanja od obdelave vnosa

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

**Razumevanje teh konceptov:**
- **Povezuje** vnos s tipkovnico z dogodki igre brez tesnega povezovanja
- **Omogoča**, da sistem vnosa posredno komunicira z objekti igre
- **Dovoljuje**, da se več sistemov odzove na iste dogodke tipkovnice
- **Olajša** spreminjanje tipk ali dodajanje novih metod vnosa

> 💡 **Nasvet**: Lepota tega vzorca je v njegovi prilagodljivosti! Z lahkoto lahko dodate zvočne učinke, tresenje zaslona ali delce tako, da preprosto dodate več poslušalcev dogodkov – ni treba spreminjati obstoječe kode za tipkovnico ali premikanje.
> 
**Zakaj vam bo ta pristop všeč:**
- Dodajanje novih funkcij postane zelo enostavno – samo poslušajte dogodke, ki vas zanimajo
- Več stvari se lahko odzove na isti dogodek, ne da bi se medsebojno motile
- Testiranje postane veliko enostavnejše, ker vsak del deluje neodvisno
- Ko se nekaj pokvari, točno veste, kje iskati

### Zakaj se pub/sub učinkovito prilagaja

Vzorec pub/sub ohranja preprostost, ko aplikacije postajajo bolj kompleksne. Ne glede na to, ali upravljate desetine sovražnikov, dinamične posodobitve uporabniškega vmesnika ali zvočne sisteme, vzorec obvladuje povečano kompleksnost brez sprememb v arhitekturi. Nove funkcije se integrirajo v obstoječi sistem dogodkov, ne da bi vplivale na obstoječo funkcionalnost.

> ⚠️ **Pogosta napaka**: Ne ustvarjajte preveč specifičnih tipov sporočil že na začetku. Začnite s širokimi kategorijami in jih prilagodite, ko postanejo potrebe vaše igre bolj jasne.
> 
**Najboljše prakse, ki jih je treba upoštevati:**
- **Združuje** povezana sporočila v logične kategorije
- **Uporablja** opisna imena, ki jasno označujejo, kaj se je zgodilo
- **Ohranja** podatkovne pakete sporočil preproste in osredotočene
- **Dokumentira** tipe sporočil za sodelovanje ekipe

---

## Izziv GitHub Copilot Agent 🚀

Uporabite način Agent za dokončanje naslednjega izziva:

**Opis:** Ustvarite preprost sistem objektov igre z uporabo tako dedovanja kot vzorca pub/sub. Implementirali boste osnovno igro, kjer lahko različni objekti komunicirajo prek dogodkov, ne da bi neposredno vedeli drug za drugega.

**Navodilo:** Ustvarite sistem igre v JavaScriptu z naslednjimi zahtevami: 1) Ustvarite osnovni razred GameObject z x, y koordinatami in lastnostjo tipa. 2) Ustvarite razred Hero, ki razširi GameObject in se lahko premika. 3) Ustvarite razred Enemy, ki razširi GameObject in lahko lovi junaka. 4) Implementirajte razred EventEmitter za vzorec pub/sub. 5) Nastavite poslušalce dogodkov, tako da, ko se junak premakne, bližnji sovražniki prejmejo dogodek 'HERO_MOVED' in posodobijo svoj položaj, da se premaknejo proti junaku. Vključite izjave console.log, da pokažete komunikacijo med objekti.

Več o [načinu agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) preberite tukaj.

## 🚀 Izziv

Razmislite, kako lahko vzorec pub-sub izboljša arhitekturo igre. Določite, katere komponente naj oddajajo dogodke in kako naj sistem nanje odgovarja. Oblikujte koncept igre in začrtajte komunikacijske vzorce med njenimi komponentami.

## Kviz po predavanju

[Kviz po predavanju](https://ff-quizzes.netlify.app/web/quiz/30)

## Pregled in samostojno učenje

Več o Pub/Sub preberite v [tem članku](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Naloga

[Ustvarite osnutek igre](assignment.md)

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje AI [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatski prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku naj se šteje za avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne prevzemamo odgovornosti za morebitna nesporazumevanja ali napačne razlage, ki izhajajo iz uporabe tega prevoda.