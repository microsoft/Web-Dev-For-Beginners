<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "862f7f2ef320f6f8950fae379e6ece45",
  "translation_date": "2025-10-24T22:18:37+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "ro"
}
-->
# Construiește un Joc Spațial Partea 1: Introducere

![Animație a jocului spațial care arată gameplay-ul](../../../../6-space-game/images/pewpew.gif)

La fel cum centrul de control al NASA coordonează mai multe sisteme în timpul unei lansări spațiale, vom construi un joc spațial care demonstrează cum diferite părți ale unui program pot lucra împreună fără probleme. În timp ce creezi ceva ce poți juca efectiv, vei învăța concepte esențiale de programare care se aplică oricărui proiect software.

Vom explora două abordări fundamentale pentru organizarea codului: moștenirea și compoziția. Acestea nu sunt doar concepte academice – sunt aceleași modele care alimentează totul, de la jocuri video la sisteme bancare. De asemenea, vom implementa un sistem de comunicare numit pub/sub, care funcționează ca rețelele de comunicare utilizate în navele spațiale, permițând diferitelor componente să împărtășească informații fără a crea dependențe.

Până la sfârșitul acestei serii, vei înțelege cum să construiești aplicații care pot scala și evolua – fie că dezvolți jocuri, aplicații web sau orice alt sistem software.

## Chestionar Pre-Lecție

[Chestionar pre-lecție](https://ff-quizzes.netlify.app/web/quiz/29)

## Moștenirea și Compoziția în Dezvoltarea Jocurilor

Pe măsură ce proiectele devin mai complexe, organizarea codului devine crucială. Ceea ce începe ca un script simplu poate deveni dificil de întreținut fără o structură adecvată – la fel cum misiunile Apollo au necesitat o coordonare atentă între mii de componente.

Vom explora două abordări fundamentale pentru organizarea codului: moștenirea și compoziția. Fiecare are avantaje distincte, iar înțelegerea ambelor te ajută să alegi abordarea potrivită pentru diferite situații. Vom demonstra aceste concepte prin jocul nostru spațial, unde eroii, inamicii, power-up-urile și alte obiecte trebuie să interacționeze eficient.

✅ Una dintre cele mai faimoase cărți de programare scrise vreodată are legătură cu [modelele de design](https://en.wikipedia.org/wiki/Design_Patterns).

În orice joc, ai `obiecte de joc` – elementele interactive care populează lumea jocului. Eroii, inamicii, power-up-urile și efectele vizuale sunt toate obiecte de joc. Fiecare există la coordonate specifice pe ecran folosind valorile `x` și `y`, similar cu trasarea punctelor pe un plan de coordonate.

În ciuda diferențelor vizuale, aceste obiecte împărtășesc adesea comportamente fundamentale:

- **Există undeva** – Fiecare obiect are coordonate x și y, astfel încât jocul să știe unde să-l deseneze
- **Multe se pot mișca** – Eroii aleargă, inamicii urmăresc, gloanțele zboară pe ecran
- **Au o durată de viață** – Unele rămân pentru totdeauna, altele (cum ar fi exploziile) apar pentru scurt timp și dispar
- **Reacționează la lucruri** – Când lucrurile se ciocnesc, power-up-urile sunt colectate, barele de sănătate se actualizează

✅ Gândește-te la un joc precum Pac-Man. Poți identifica cele patru tipuri de obiecte enumerate mai sus în acest joc?

### Exprimarea Comportamentului Prin Cod

Acum că înțelegi comportamentele comune pe care le împărtășesc obiectele de joc, să explorăm cum să implementăm aceste comportamente în JavaScript. Poți exprima comportamentul obiectelor prin metode atașate fie claselor, fie obiectelor individuale, și există mai multe abordări din care să alegi.

**Abordarea Bazată pe Clase**

Clasele și moștenirea oferă o abordare structurată pentru organizarea obiectelor de joc. La fel ca sistemul de clasificare taxonomică dezvoltat de Carl Linnaeus, începi cu o clasă de bază care conține proprietăți comune, apoi creezi clase specializate care moștenesc aceste fundamente, adăugând în același timp capabilități specifice.

✅ Moștenirea este un concept important de înțeles. Află mai multe din [articolul MDN despre moștenire](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Iată cum poți implementa obiectele de joc folosind clase și moștenire:

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

**Să descompunem acest lucru pas cu pas:**
- Creăm un șablon de bază pe care fiecare obiect de joc îl poate folosi
- Constructorul salvează unde se află obiectul (`x`, `y`) și ce tip de obiect este
- Acesta devine fundația pe care toate obiectele de joc se vor construi

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

**În cele de mai sus, am:**
- **Extins** clasa GameObject pentru a adăuga funcționalitate de mișcare
- **Apelat** constructorul părintelui folosind `super()` pentru a inițializa proprietățile moștenite
- **Adăugat** o metodă `moveTo()` care actualizează poziția obiectului

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

**Înțelegerea acestor concepte:**
- **Creează** tipuri de obiecte specializate care moștenesc comportamentele adecvate
- **Demonstrează** cum moștenirea permite includerea selectivă a caracteristicilor
- **Arată** că eroii se pot mișca în timp ce copacii rămân staționari
- **Ilustrează** cum ierarhia claselor previne acțiunile nepotrivite

✅ Ia câteva minute pentru a reimagina un erou din Pac-Man (de exemplu, Inky, Pinky sau Blinky) și cum ar fi scris în JavaScript.

**Abordarea Compoziției**

Compoziția urmează o filozofie de design modular, similară cu modul în care inginerii proiectează nave spațiale cu componente interschimbabile. În loc să moștenești de la o clasă părinte, combini comportamente specifice pentru a crea obiecte cu exact funcționalitatea de care au nevoie. Această abordare oferă flexibilitate fără constrângeri ierarhice rigide.

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

**Iată ce face acest cod:**
- **Definește** un obiect de bază `gameObject` cu proprietăți de poziție și tip
- **Creează** un obiect de comportament separat `movable` cu funcționalitate de mișcare
- **Separă** preocupările prin păstrarea datelor de poziție și logicii de mișcare independente

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

**În cele de mai sus, am:**
- **Combinat** proprietățile obiectului de bază cu comportamentul de mișcare folosind sintaxa spread
- **Creat** funcții de fabrică care returnează obiecte personalizate
- **Permis** crearea flexibilă a obiectelor fără ierarhii rigide de clase
- **Permis** obiectelor să aibă exact comportamentele de care au nevoie

```javascript
// Step 4: Create and use your composed objects
const hero = createHero(10, 10);
hero.moveTo(5, 5); // Works perfectly!

const tree = createStatic(0, 0, 'Tree');
// tree.moveTo() is undefined - no movement behavior was composed
```

**Puncte cheie de reținut:**
- **Compune** obiecte prin combinarea comportamentelor, mai degrabă decât prin moștenirea lor
- **Oferă** mai multă flexibilitate decât ierarhiile rigide de moștenire
- **Permite** obiectelor să aibă exact caracteristicile de care au nevoie
- **Folosește** sintaxa modernă JavaScript spread pentru o combinație curată a obiectelor
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

**Descompunerea a ceea ce se întâmplă aici:**
- **Creează** un sistem central de gestionare a evenimentelor folosind o clasă simplă
- **Stochează** ascultătorii într-un obiect organizat pe tipuri de mesaje
- **Înregistrează** noi ascultători folosind metoda `on()`
- **Transmite** mesaje tuturor ascultătorilor interesați folosind `emit()`
- **Suportă** încărcături de date opționale pentru transmiterea informațiilor relevante

### Punând Totul Împreună: Un Exemplu Practic

Bun, să vedem asta în acțiune! Vom construi un sistem simplu de mișcare care arată cât de curat și flexibil poate fi pub/sub:

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

**Iată ce face acest cod:**
- **Definește** un obiect de constante pentru a preveni greșelile de tastare în numele mesajelor
- **Creează** o instanță de emițător de evenimente pentru a gestiona toată comunicarea
- **Inițializează** un obiect erou la poziția de start

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

**În cele de mai sus, am:**
- **Înregistrat** ascultători de evenimente care răspund la mesaje de mișcare
- **Actualizat** poziția eroului pe baza direcției de mișcare
- **Adăugat** logare în consolă pentru a urmări schimbările de poziție ale eroului
- **Separat** logica de mișcare de gestionarea inputului

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

**Înțelegerea acestor concepte:**
- **Conectează** inputul de la tastatură la evenimentele jocului fără o cuplare strânsă
- **Permite** sistemului de input să comunice indirect cu obiectele de joc
- **Permite** mai multor sisteme să răspundă la aceleași evenimente de tastatură
- **Facilitează** schimbarea legăturilor de taste sau adăugarea de noi metode de input

> 💡 **Pro Tip**: Frumusețea acestui model constă în flexibilitate! Poți adăuga cu ușurință efecte sonore, tremurături de ecran sau efecte de particule doar adăugând mai mulți ascultători de evenimente – fără a modifica codul existent pentru tastatură sau mișcare.
> 
**Iată de ce vei iubi această abordare:**
- Adăugarea de noi funcționalități devine super ușoară – doar ascultă evenimentele care te interesează
- Mai multe lucruri pot reacționa la același eveniment fără a se încurca între ele
- Testarea devine mult mai simplă deoarece fiecare piesă funcționează independent
- Când ceva se strică, știi exact unde să cauți

### De ce Pub/Sub Scalează Eficient

Modelul pub/sub menține simplitatea pe măsură ce aplicațiile devin mai complexe. Fie că gestionezi zeci de inamici, actualizări dinamice ale interfeței sau sisteme sonore, modelul face față creșterii complexității fără modificări arhitecturale. Noile funcționalități se integrează în sistemul de evenimente existent fără a afecta funcționalitatea stabilită.

> ⚠️ **Greșeală Comună**: Nu crea prea multe tipuri de mesaje specifice de la început. Începe cu categorii largi și rafinează-le pe măsură ce nevoile jocului devin mai clare.
> 
**Cele mai bune practici de urmat:**
- **Grupează** mesajele legate în categorii logice
- **Folosește** nume descriptive care indică clar ce s-a întâmplat
- **Păstrează** încărcăturile de mesaje simple și concentrate
- **Documentează** tipurile de mesaje pentru colaborarea în echipă

---

## Provocarea Agentului GitHub Copilot 🚀

Folosește modul Agent pentru a finaliza următoarea provocare:

**Descriere:** Creează un sistem simplu de obiecte de joc folosind atât moștenirea, cât și modelul pub/sub. Vei implementa un joc de bază în care diferite obiecte pot comunica prin evenimente fără a se cunoaște direct între ele.

**Prompt:** Creează un sistem de joc în JavaScript cu următoarele cerințe: 1) Creează o clasă de bază GameObject cu coordonate x, y și o proprietate de tip. 2) Creează o clasă Hero care extinde GameObject și se poate mișca. 3) Creează o clasă Enemy care extinde GameObject și poate urmări eroul. 4) Implementează o clasă EventEmitter pentru modelul pub/sub. 5) Configurează ascultători de evenimente astfel încât, atunci când eroul se mișcă, inamicii din apropiere să primească un eveniment 'HERO_MOVED' și să-și actualizeze poziția pentru a se apropia de erou. Include declarații console.log pentru a arăta comunicarea între obiecte.

Află mai multe despre [modul agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) aici.

## 🚀 Provocare

Gândește-te cum modelul pub-sub poate îmbunătăți arhitectura jocului. Identifică ce componente ar trebui să emită evenimente și cum ar trebui să răspundă sistemul. Proiectează un concept de joc și schițează modelele de comunicare între componentele sale.

## Chestionar Post-Lecție

[Chestionar post-lecție](https://ff-quizzes.netlify.app/web/quiz/30)

## Recapitulare & Studiu Individual

Află mai multe despre Pub/Sub citind [despre acest subiect](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Temă

[Proiectează un joc](assignment.md)

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.