<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d9da6dc61fb712b29f65e108c79b8a5d",
  "translation_date": "2025-08-28T08:01:28+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "ro"
}
-->
# Construiește un Joc Spațial Partea 1: Introducere

![video](../../../../6-space-game/images/pewpew.gif)

## Chestionar înainte de curs

[Chestionar înainte de curs](https://ff-quizzes.netlify.app/web/quiz/29)

### Moștenire și Compoziție în dezvoltarea jocurilor

În lecțiile anterioare, nu a fost nevoie să te preocupi prea mult de arhitectura aplicațiilor pe care le-ai construit, deoarece proiectele erau de dimensiuni mici. Totuși, pe măsură ce aplicațiile tale cresc în dimensiune și complexitate, deciziile arhitecturale devin mai importante. Există două abordări majore pentru crearea aplicațiilor mai mari în JavaScript: *compoziția* sau *moștenirea*. Ambele au avantaje și dezavantaje, dar să le explicăm în contextul unui joc.

✅ Una dintre cele mai faimoase cărți de programare scrise vreodată are legătură cu [modelele de design](https://en.wikipedia.org/wiki/Design_Patterns).

Într-un joc ai `obiecte de joc`, care sunt obiecte ce există pe un ecran. Asta înseamnă că au o locație într-un sistem de coordonate cartezian, caracterizată printr-o coordonată `x` și `y`. Pe măsură ce dezvolți un joc, vei observa că toate obiectele de joc au o proprietate standard, comună pentru fiecare joc pe care îl creezi, și anume elemente care sunt:

- **bazate pe locație** Majoritatea, dacă nu toate, elementele de joc sunt bazate pe locație. Asta înseamnă că au o locație, un `x` și un `y`.
- **mobile** Acestea sunt obiecte care se pot deplasa într-o locație nouă. De obicei, acestea sunt un erou, un monstru sau un NPC (personaj non-jucător), dar nu, de exemplu, un obiect static precum un copac.
- **autodistructive** Aceste obiecte există doar pentru o perioadă de timp determinată înainte de a se pregăti pentru ștergere. De obicei, acest lucru este reprezentat printr-un boolean `dead` sau `destroyed` care semnalează motorului de joc că acest obiect nu ar mai trebui să fie redat.
- **cu timp de răcire** 'Timpul de răcire' este o proprietate tipică pentru obiectele de scurtă durată. Un exemplu tipic este un text sau un efect grafic, cum ar fi o explozie, care ar trebui să fie vizibil doar pentru câteva milisecunde.

✅ Gândește-te la un joc precum Pac-Man. Poți identifica cele patru tipuri de obiecte enumerate mai sus în acest joc?

### Exprimarea comportamentului

Tot ce am descris mai sus reprezintă comportamente pe care obiectele de joc le pot avea. Deci, cum codificăm aceste comportamente? Putem exprima acest comportament ca metode asociate fie claselor, fie obiectelor.

**Clase**

Ideea este să folosim `clase` împreună cu `moștenirea` pentru a adăuga un anumit comportament unei clase.

✅ Moștenirea este un concept important de înțeles. Află mai multe din [articolul MDN despre moștenire](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Exprimat prin cod, un obiect de joc poate arăta astfel:

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

✅ Petrece câteva minute imaginându-ți un erou din Pac-Man (de exemplu, Inky, Pinky sau Blinky) și cum ar fi scris în JavaScript.

**Compoziție**

O altă modalitate de a gestiona moștenirea obiectelor este prin utilizarea *Compoziției*. În acest caz, obiectele își exprimă comportamentul astfel:

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

**Ce model ar trebui să folosesc?**

Depinde de tine ce model alegi. JavaScript suportă ambele paradigme.

--

Un alt model comun în dezvoltarea jocurilor abordează problema gestionării experienței utilizatorului și a performanței jocului.

## Modelul Pub/Sub

✅ Pub/Sub înseamnă 'publish-subscribe' (publicare-abonare)

Acest model abordează ideea că părțile disparate ale aplicației tale nu ar trebui să știe una despre cealaltă. De ce? Face mult mai ușor să vezi ce se întâmplă în general dacă diversele părți sunt separate. De asemenea, face mai ușor să schimbi brusc comportamentul dacă este necesar. Cum realizăm acest lucru? Stabilim câteva concepte:

- **mesaj**: Un mesaj este de obicei un șir de text însoțit de o sarcină opțională (o bucată de date care clarifică despre ce este vorba în mesaj). Un mesaj tipic într-un joc poate fi `KEY_PRESSED_ENTER`.
- **publisher**: Acest element *publică* un mesaj și îl trimite tuturor abonaților.
- **subscriber**: Acest element *ascultă* mesaje specifice și execută o anumită sarcină ca rezultat al primirii acestui mesaj, cum ar fi lansarea unui laser.

Implementarea este destul de mică, dar este un model foarte puternic. Iată cum poate fi implementat:

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

Pentru a utiliza codul de mai sus, putem crea o implementare foarte mică:

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

Mai sus conectăm un eveniment de tastatură, `ArrowLeft`, și trimitem mesajul `HERO_MOVE_LEFT`. Ascultăm acest mesaj și mutăm `eroul` ca rezultat. Punctul forte al acestui model este că ascultătorul de evenimente și eroul nu știu unul despre celălalt. Poți remapa `ArrowLeft` la tasta `A`. În plus, ar fi posibil să faci ceva complet diferit pe `ArrowLeft` făcând câteva modificări funcției `on` a eventEmitter-ului:

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

Pe măsură ce lucrurile devin mai complicate pe măsură ce jocul tău crește, acest model rămâne la fel de simplu, iar codul tău rămâne curat. Este cu adevărat recomandat să adopți acest model.

---

## 🚀 Provocare

Gândește-te cum modelul pub-sub poate îmbunătăți un joc. Ce părți ar trebui să emită evenimente și cum ar trebui să reacționeze jocul la acestea? Acum ai șansa să fii creativ, gândindu-te la un joc nou și la cum ar putea funcționa părțile sale.

## Chestionar după curs

[Chestionar după curs](https://ff-quizzes.netlify.app/web/quiz/30)

## Recapitulare și Studiu Individual

Află mai multe despre Pub/Sub [citind despre acest subiect](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Temă

[Crează un prototip de joc](assignment.md)

---

**Declinarea responsabilității**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși depunem eforturi pentru a asigura acuratețea, vă rugăm să rețineți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa nativă ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm răspunderea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.