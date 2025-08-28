<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d9da6dc61fb712b29f65e108c79b8a5d",
  "translation_date": "2025-08-27T22:34:46+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "hr"
}
-->
# Izgradnja svemirske igre, 1. dio: Uvod

![video](../../../../6-space-game/images/pewpew.gif)

## Kviz prije predavanja

[Kviz prije predavanja](https://ff-quizzes.netlify.app/web/quiz/29)

### Nasljeđivanje i kompozicija u razvoju igara

U prethodnim lekcijama nije bilo potrebe za razmišljanjem o arhitekturi aplikacija koje ste gradili, jer su projekti bili vrlo malog opsega. Međutim, kako vaše aplikacije rastu u veličini i složenosti, arhitektonske odluke postaju važnije. Postoje dva glavna pristupa za stvaranje većih aplikacija u JavaScriptu: *kompozicija* ili *nasljeđivanje*. Oba pristupa imaju svoje prednosti i nedostatke, ali objasnit ćemo ih u kontekstu igre.

✅ Jedna od najpoznatijih knjiga o programiranju bavi se [dizajnerskim obrascima](https://en.wikipedia.org/wiki/Design_Patterns).

U igri imate `objekte igre`, koji su objekti koji postoje na ekranu. To znači da imaju lokaciju u kartezijanskom koordinatnom sustavu, definiranu `x` i `y` koordinatama. Dok razvijate igru, primijetit ćete da svi vaši objekti igre imaju standardna svojstva, zajednička za svaku igru koju kreirate, a to su elementi koji su:

- **temeljeni na lokaciji** Većina, ako ne i svi, elementi igre temelje se na lokaciji. To znači da imaju lokaciju, `x` i `y`.
- **pokretni** To su objekti koji se mogu premjestiti na novu lokaciju. To je obično heroj, čudovište ili NPC (lik koji nije igrač), ali ne, na primjer, statični objekt poput stabla.
- **samouništavajući** Ovi objekti postoje samo određeno vrijeme prije nego što se postave za brisanje. Obično je to predstavljeno s `dead` ili `destroyed` booleanom koji signalizira mehanizmu igre da se taj objekt više ne treba prikazivati.
- **s odgodom** 'Odgoda' je tipično svojstvo među kratkotrajnih objekata. Tipičan primjer je komad teksta ili grafički efekt poput eksplozije koji bi trebao biti vidljiv samo nekoliko milisekundi.

✅ Razmislite o igri poput Pac-Mana. Možete li identificirati četiri gore navedene vrste objekata u ovoj igri?

### Izražavanje ponašanja

Sve što smo gore opisali su ponašanja koja objekti igre mogu imati. Kako ih onda kodirati? Ovo ponašanje možemo izraziti kao metode povezane s klasama ili objektima.

**Klase**

Ideja je koristiti `klase` u kombinaciji s `nasljeđivanjem` kako bismo dodali određeno ponašanje klasi.

✅ Nasljeđivanje je važan koncept za razumijevanje. Saznajte više u [MDN-ovom članku o nasljeđivanju](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Izraženo putem koda, objekt igre obično izgleda ovako:

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

✅ Odvojite nekoliko minuta da zamislite Pac-Man heroja (na primjer, Inky, Pinky ili Blinky) i kako bi bio napisan u JavaScriptu.

**Kompozicija**

Drugi način rukovanja nasljeđivanjem objekata je korištenje *kompozicije*. Tada objekti izražavaju svoje ponašanje ovako:

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

**Koji obrazac koristiti?**

Na vama je da odlučite koji obrazac ćete koristiti. JavaScript podržava oba ova pristupa.

--

Još jedan obrazac koji je čest u razvoju igara bavi se problemom upravljanja korisničkim iskustvom i performansama igre.

## Pub/sub obrazac

✅ Pub/Sub označava 'publish-subscribe' (objavi-pretplati se)

Ovaj obrazac se bavi idejom da različiti dijelovi vaše aplikacije ne bi trebali znati jedni za druge. Zašto? To olakšava razumijevanje što se općenito događa ako su različiti dijelovi odvojeni. Također olakšava nagle promjene ponašanja ako je potrebno. Kako to postići? To radimo uspostavljanjem nekih koncepata:

- **poruka**: Poruka je obično tekstualni niz popraćen opcionalnim podatkom (komadom podataka koji pojašnjava o čemu se radi u poruci). Tipična poruka u igri može biti `KEY_PRESSED_ENTER`.
- **objavitelj**: Ovaj element *objavljuje* poruku i šalje je svim pretplatnicima.
- **pretplatnik**: Ovaj element *sluša* određene poruke i izvršava neki zadatak kao rezultat primanja te poruke, poput ispaljivanja lasera.

Implementacija je prilično mala, ali je vrlo moćan obrazac. Evo kako se može implementirati:

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

Za korištenje gore navedenog koda možemo stvoriti vrlo malu implementaciju:

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

Gore povezujemo događaj tipkovnice, `ArrowLeft`, i šaljemo poruku `HERO_MOVE_LEFT`. Slušamo tu poruku i kao rezultat pomičemo `heroja`. Snaga ovog obrasca je u tome što slušatelj događaja i heroj ne znaju jedan za drugoga. Možete premapirati `ArrowLeft` na tipku `A`. Osim toga, bilo bi moguće učiniti nešto potpuno drugačije na `ArrowLeft` uz nekoliko izmjena u funkciji `on` eventEmittera:

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

Kako stvari postaju složenije kako vaša igra raste, ovaj obrazac ostaje isti u složenosti, a vaš kod ostaje čist. Preporučuje se usvojiti ovaj obrazac.

---

## 🚀 Izazov

Razmislite o tome kako pub-sub obrazac može unaprijediti igru. Koji dijelovi bi trebali emitirati događaje, a kako bi igra trebala reagirati na njih? Sada je vaša prilika da budete kreativni, osmislite novu igru i kako bi se njeni dijelovi mogli ponašati.

## Kviz nakon predavanja

[Kviz nakon predavanja](https://ff-quizzes.netlify.app/web/quiz/30)

## Pregled i samostalno učenje

Saznajte više o Pub/Sub obrascu [čitajući o njemu](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Zadatak

[Izradite skicu igre](assignment.md)

---

**Odricanje od odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane ljudskog prevoditelja. Ne preuzimamo odgovornost za bilo kakve nesporazume ili pogrešne interpretacije koje proizlaze iz korištenja ovog prijevoda.