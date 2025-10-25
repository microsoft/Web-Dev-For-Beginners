<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "862f7f2ef320f6f8950fae379e6ece45",
  "translation_date": "2025-10-25T00:13:52+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "hr"
}
-->
# Izgradnja svemirske igre, 1. dio: Uvod

![Animacija svemirske igre koja prikazuje igranje](../../../../6-space-game/images/pewpew.gif)

Baš kao što NASA-ina kontrola misije koordinira više sustava tijekom lansiranja svemirske letjelice, mi ćemo izgraditi svemirsku igru koja pokazuje kako različiti dijelovi programa mogu besprijekorno surađivati. Dok stvarate nešto što zapravo možete igrati, naučit ćete osnovne programerske koncepte koji se primjenjuju na bilo koji softverski projekt.

Istražit ćemo dva temeljna pristupa organizaciji koda: nasljeđivanje i kompoziciju. Ovo nisu samo akademski koncepti – to su isti obrasci koji pokreću sve, od videoigara do bankarskih sustava. Također ćemo implementirati komunikacijski sustav nazvan pub/sub koji funkcionira poput komunikacijskih mreža koje se koriste u svemirskim letjelicama, omogućujući različitim komponentama da dijele informacije bez stvaranja ovisnosti.

Do kraja ove serije, razumjet ćete kako izgraditi aplikacije koje se mogu skalirati i razvijati – bilo da razvijate igre, web aplikacije ili bilo koji drugi softverski sustav.

## Kviz prije predavanja

[Kviz prije predavanja](https://ff-quizzes.netlify.app/web/quiz/29)

## Nasljeđivanje i kompozicija u razvoju igara

Kako projekti postaju složeniji, organizacija koda postaje ključna. Ono što započne kao jednostavan skript može postati teško za održavanje bez odgovarajuće strukture – slično kao što su Apollo misije zahtijevale pažljivu koordinaciju između tisuća komponenti.

Istražit ćemo dva temeljna pristupa organizaciji koda: nasljeđivanje i kompoziciju. Svaki od njih ima svoje prednosti, a razumijevanje oba pomaže vam odabrati pravi pristup za različite situacije. Ove koncepte ćemo demonstrirati kroz našu svemirsku igru, gdje junaci, neprijatelji, pojačanja i drugi objekti moraju učinkovito međusobno djelovati.

✅ Jedna od najpoznatijih knjiga o programiranju odnosi se na [obrasce dizajna](https://en.wikipedia.org/wiki/Design_Patterns).

U svakoj igri postoje `objekti igre` – interaktivni elementi koji ispunjavaju vaš svijet igre. Junaci, neprijatelji, pojačanja i vizualni efekti su svi objekti igre. Svaki od njih postoji na određenim koordinatama ekrana koristeći vrijednosti `x` i `y`, slično kao što se točke postavljaju na koordinatni sustav.

Unatoč njihovim vizualnim razlikama, ovi objekti često dijele osnovna ponašanja:

- **Postoje negdje** – Svaki objekt ima x i y koordinate kako bi igra znala gdje ga nacrtati
- **Mnogi se mogu kretati** – Junaci trče, neprijatelji jure, meci lete preko ekrana
- **Imaju životni vijek** – Neki ostaju zauvijek, drugi (poput eksplozija) pojavljuju se nakratko i nestaju
- **Reagiraju na stvari** – Kada se sudare, pojačanja se prikupljaju, trake zdravlja se ažuriraju

✅ Razmislite o igri poput Pac-Mana. Možete li identificirati četiri vrste objekata navedene gore u ovoj igri?

### Izražavanje ponašanja kroz kod

Sada kada razumijete zajednička ponašanja koja dijele objekti igre, istražimo kako implementirati ta ponašanja u JavaScriptu. Ponašanje objekta možete izraziti kroz metode pridružene klasama ili pojedinačnim objektima, a postoji nekoliko pristupa koje možete odabrati.

**Pristup temeljen na klasama**

Klase i nasljeđivanje pružaju strukturirani pristup organizaciji objekata igre. Kao taksonomski sustav klasifikacije koji je razvio Carl Linnaeus, započinjete s osnovnom klasom koja sadrži zajedničke značajke, a zatim stvarate specijalizirane klase koje nasljeđuju te osnove dok dodaju specifične sposobnosti.

✅ Nasljeđivanje je važan koncept za razumijevanje. Saznajte više u [MDN-ovom članku o nasljeđivanju](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Evo kako možete implementirati objekte igre koristeći klase i nasljeđivanje:

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

**Razložimo ovo korak po korak:**
- Stvaramo osnovni predložak koji svaki objekt igre može koristiti
- Konstruktor sprema gdje se objekt nalazi (`x`, `y`) i kakva je to stvar
- Ovo postaje temelj na kojem će se graditi svi vaši objekti igre

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

**U gore navedenom, učinili smo sljedeće:**
- **Proširili** klasu GameObject kako bismo dodali funkcionalnost kretanja
- **Pozvali** konstruktor roditelja koristeći `super()` za inicijalizaciju naslijeđenih svojstava
- **Dodali** metodu `moveTo()` koja ažurira poziciju objekta

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

**Razumijevanje ovih koncepata:**
- **Stvara** specijalizirane vrste objekata koji nasljeđuju odgovarajuća ponašanja
- **Pokazuje** kako nasljeđivanje omogućuje selektivno uključivanje značajki
- **Prikazuje** da se junaci mogu kretati dok drveće ostaje nepomično
- **Ilustrira** kako hijerarhija klasa sprječava neprimjerene radnje

✅ Odvojite nekoliko minuta da ponovno osmislite junaka iz Pac-Mana (na primjer, Inky, Pinky ili Blinky) i kako bi bio napisan u JavaScriptu.

**Pristup kompozicijom**

Kompozicija slijedi filozofiju modularnog dizajna, slično kao što inženjeri dizajniraju svemirske letjelice s izmjenjivim komponentama. Umjesto nasljeđivanja od roditeljske klase, kombinirate specifična ponašanja kako biste stvorili objekte s točno onim funkcionalnostima koje su im potrebne. Ovaj pristup nudi fleksibilnost bez krutih hijerarhijskih ograničenja.

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

**Evo što ovaj kod radi:**
- **Definira** osnovni `gameObject` s svojstvima pozicije i tipa
- **Stvara** zaseban objekt ponašanja `movable` s funkcionalnošću kretanja
- **Razdvaja** brige tako da podaci o poziciji i logika kretanja ostanu neovisni

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

**U gore navedenom, učinili smo sljedeće:**
- **Kombinirali** osnovna svojstva objekta s ponašanjem kretanja koristeći spread sintaksu
- **Stvorili** funkcije tvornice koje vraćaju prilagođene objekte
- **Omogućili** fleksibilno stvaranje objekata bez krutih hijerarhija klasa
- **Dopustili** objektima da imaju točno ona ponašanja koja su im potrebna

```javascript
// Step 4: Create and use your composed objects
const hero = createHero(10, 10);
hero.moveTo(5, 5); // Works perfectly!

const tree = createStatic(0, 0, 'Tree');
// tree.moveTo() is undefined - no movement behavior was composed
```

**Ključne točke za zapamtiti:**
- **Komponira** objekte miješanjem ponašanja umjesto nasljeđivanja
- **Pruža** više fleksibilnosti od krutih hijerarhija nasljeđivanja
- **Dopustite** objektima da imaju točno one značajke koje su im potrebne
- **Koristi** modernu JavaScript spread sintaksu za čisto kombiniranje objekata 
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

**Razlaganje što se ovdje događa:**
- **Stvara** centralni sustav za upravljanje događajima koristeći jednostavnu klasu
- **Pohranjuje** slušatelje u objekt organiziran prema vrsti poruke
- **Registrira** nove slušatelje koristeći metodu `on()`
- **Emitira** poruke svim zainteresiranim slušateljima koristeći `emit()`
- **Podržava** opcionalne podatkovne pakete za prijenos relevantnih informacija

### Sve na jednom mjestu: Praktičan primjer

U redu, pogledajmo kako to funkcionira! Izgradit ćemo jednostavan sustav kretanja koji pokazuje kako čist i fleksibilan pub/sub može biti:

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

**Evo što ovaj kod radi:**
- **Definira** objekt konstanti kako bi se spriječile pogreške u nazivima poruka
- **Stvara** instancu emitera događaja za upravljanje svim komunikacijama
- **Inicijalizira** junaka na početnoj poziciji

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

**U gore navedenom, učinili smo sljedeće:**
- **Registrirali** slušatelje događaja koji reagiraju na poruke o kretanju
- **Ažurirali** poziciju junaka na temelju smjera kretanja
- **Dodali** zapisivanje u konzolu za praćenje promjena pozicije junaka
- **Razdvojili** logiku kretanja od obrade unosa

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

**Razumijevanje ovih koncepata:**
- **Povezuje** unos s tipkovnice s događajima u igri bez čvrstog povezivanja
- **Omogućuje** sustavu unosa da neizravno komunicira s objektima igre
- **Dopušta** više sustava da reagiraju na iste događaje s tipkovnice
- **Olakšava** promjenu tipki ili dodavanje novih metoda unosa

> 💡 **Savjet**: Ljepota ovog obrasca je fleksibilnost! Možete lako dodati zvučne efekte, podrhtavanje ekrana ili čestične efekte jednostavnim dodavanjem više slušatelja događaja – nema potrebe za izmjenom postojećeg koda za tipkovnicu ili kretanje.
> 
**Zašto ćete voljeti ovaj pristup:**
- Dodavanje novih značajki postaje vrlo jednostavno – samo slušajte događaje koji vas zanimaju
- Više stvari može reagirati na isti događaj bez međusobnog ometanja
- Testiranje postaje puno jednostavnije jer svaki dio radi neovisno
- Kada nešto ne radi, točno znate gdje tražiti problem

### Zašto se Pub/Sub učinkovito skalira

Obrazac pub/sub održava jednostavnost dok aplikacije postaju složenije. Bilo da upravljate desecima neprijatelja, dinamičkim ažuriranjima korisničkog sučelja ili zvučnim sustavima, obrazac podnosi povećanu složenost bez promjena u arhitekturi. Nove značajke se integriraju u postojeći sustav događaja bez utjecaja na postojeću funkcionalnost.

> ⚠️ **Uobičajena pogreška**: Nemojte stvarati previše specifičnih vrsta poruka na početku. Započnite sa širokim kategorijama i precizirajte ih kako se potrebe vaše igre budu jasnije oblikovale.
> 
**Najbolje prakse koje treba slijediti:**
- **Grupirajte** povezane poruke u logičke kategorije
- **Koristite** opisne nazive koji jasno ukazuju na ono što se dogodilo
- **Održavajte** podatkovne pakete poruka jednostavnima i fokusiranima
- **Dokumentirajte** vrste poruka za suradnju tima

---

## Izazov GitHub Copilot Agent 🚀

Koristite način rada Agent za dovršavanje sljedećeg izazova:

**Opis:** Stvorite jednostavan sustav objekata igre koristeći i nasljeđivanje i obrazac pub/sub. Implementirat ćete osnovnu igru u kojoj različiti objekti mogu komunicirati putem događaja bez da izravno znaju jedni za druge.

**Zadatak:** Stvorite sustav igre u JavaScriptu s sljedećim zahtjevima: 1) Stvorite osnovnu klasu GameObject s koordinatama x, y i svojstvom tipa. 2) Stvorite klasu Hero koja proširuje GameObject i može se kretati. 3) Stvorite klasu Enemy koja proširuje GameObject i može pratiti junaka. 4) Implementirajte klasu EventEmitter za obrazac pub/sub. 5) Postavite slušatelje događaja tako da kada se junak pomakne, obližnji neprijatelji prime događaj 'HERO_MOVED' i ažuriraju svoju poziciju kako bi se približili junaku. Uključite console.log izjave kako biste prikazali komunikaciju između objekata.

Saznajte više o [načinu rada agenta](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) ovdje.

## 🚀 Izazov

Razmislite kako obrazac pub-sub može poboljšati arhitekturu igre. Identificirajte koje komponente bi trebale emitirati događaje i kako bi sustav trebao reagirati. Osmislite koncept igre i mapirajte komunikacijske obrasce između njezinih komponenti.

## Kviz nakon predavanja

[Kviz nakon predavanja](https://ff-quizzes.netlify.app/web/quiz/30)

## Pregled i samostalno učenje

Saznajte više o Pub/Sub obrascu [čitajući o njemu](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Zadatak

[Izradite skicu igre](assignment.md)

---

**Odricanje od odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za nesporazume ili pogrešna tumačenja koja proizlaze iz korištenja ovog prijevoda.