<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "979cfcce2413a87d9e4c67eb79234bc3",
  "translation_date": "2025-08-29T07:11:51+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "el"
}
-->
# Δημιουργία ενός Παιχνιδιού Διαστήματος Μέρος 1: Εισαγωγή

![video](../../../../6-space-game/images/pewpew.gif)

## Κουίζ πριν το μάθημα

[Κουίζ πριν το μάθημα](https://ff-quizzes.netlify.app/web/quiz/29)

### Κληρονομικότητα και Σύνθεση στην ανάπτυξη παιχνιδιών

Στα προηγούμενα μαθήματα, δεν υπήρχε μεγάλη ανάγκη να ανησυχείτε για την αρχιτεκτονική σχεδίαση των εφαρμογών που δημιουργούσατε, καθώς τα έργα ήταν μικρής κλίμακας. Ωστόσο, όταν οι εφαρμογές σας μεγαλώνουν σε μέγεθος και εύρος, οι αρχιτεκτονικές αποφάσεις γίνονται πιο σημαντικές. Υπάρχουν δύο κύριες προσεγγίσεις για τη δημιουργία μεγαλύτερων εφαρμογών στη JavaScript: *σύνθεση* ή *κληρονομικότητα*. Υπάρχουν πλεονεκτήματα και μειονεκτήματα και στις δύο, αλλά ας τις εξηγήσουμε μέσα από το πλαίσιο ενός παιχνιδιού.

✅ Ένα από τα πιο διάσημα βιβλία προγραμματισμού που έχουν γραφτεί ποτέ αφορά τα [σχεδιαστικά μοτίβα](https://en.wikipedia.org/wiki/Design_Patterns).

Σε ένα παιχνίδι, έχετε `αντικείμενα παιχνιδιού`, τα οποία είναι αντικείμενα που υπάρχουν στην οθόνη. Αυτό σημαίνει ότι έχουν μια θέση σε ένα καρτεσιανό σύστημα συντεταγμένων, που χαρακτηρίζεται από τις συντεταγμένες `x` και `y`. Καθώς αναπτύσσετε ένα παιχνίδι, θα παρατηρήσετε ότι όλα τα αντικείμενα παιχνιδιού έχουν μια τυπική ιδιότητα, κοινή για κάθε παιχνίδι που δημιουργείτε, δηλαδή στοιχεία που είναι:

- **βασισμένα στη θέση** Τα περισσότερα, αν όχι όλα, τα στοιχεία του παιχνιδιού βασίζονται στη θέση. Αυτό σημαίνει ότι έχουν μια θέση, `x` και `y`.
- **κινητά** Αυτά είναι αντικείμενα που μπορούν να μετακινηθούν σε μια νέα θέση. Συνήθως είναι ένας ήρωας, ένα τέρας ή ένας NPC (χαρακτήρας που δεν ελέγχεται από τον παίκτη), αλλά όχι, για παράδειγμα, ένα στατικό αντικείμενο όπως ένα δέντρο.
- **αυτοκαταστρεφόμενα** Αυτά τα αντικείμενα υπάρχουν μόνο για μια συγκεκριμένη χρονική περίοδο πριν προγραμματιστούν για διαγραφή. Συνήθως αυτό εκπροσωπείται από μια boolean μεταβλητή `dead` ή `destroyed` που σηματοδοτεί στη μηχανή του παιχνιδιού ότι αυτό το αντικείμενο δεν πρέπει πλέον να εμφανίζεται.
- **με χρονική καθυστέρηση** Η "χρονική καθυστέρηση" είναι μια τυπική ιδιότητα μεταξύ αντικειμένων μικρής διάρκειας. Ένα τυπικό παράδειγμα είναι ένα κομμάτι κειμένου ή ένα γραφικό εφέ όπως μια έκρηξη που πρέπει να εμφανίζεται μόνο για λίγα χιλιοστά του δευτερολέπτου.

✅ Σκεφτείτε ένα παιχνίδι όπως το Pac-Man. Μπορείτε να εντοπίσετε τους τέσσερις τύπους αντικειμένων που αναφέρονται παραπάνω σε αυτό το παιχνίδι;

### Έκφραση συμπεριφοράς

Όλα όσα περιγράψαμε παραπάνω είναι συμπεριφορές που μπορούν να έχουν τα αντικείμενα παιχνιδιού. Πώς μπορούμε να τις κωδικοποιήσουμε; Μπορούμε να εκφράσουμε αυτές τις συμπεριφορές ως μεθόδους που σχετίζονται είτε με κλάσεις είτε με αντικείμενα.

**Κλάσεις**

Η ιδέα είναι να χρησιμοποιήσουμε `κλάσεις` σε συνδυασμό με την `κληρονομικότητα` για να προσθέσουμε μια συγκεκριμένη συμπεριφορά σε μια κλάση.

✅ Η κληρονομικότητα είναι μια σημαντική έννοια που πρέπει να κατανοήσετε. Μάθετε περισσότερα στο [άρθρο της MDN για την κληρονομικότητα](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Εκφρασμένο μέσω κώδικα, ένα αντικείμενο παιχνιδιού μπορεί τυπικά να μοιάζει κάπως έτσι:

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

✅ Αφιερώστε λίγα λεπτά για να φανταστείτε έναν ήρωα του Pac-Man (π.χ. Inky, Pinky ή Blinky) και πώς θα γραφόταν σε JavaScript.

**Σύνθεση**

Μια διαφορετική προσέγγιση για τη διαχείριση της κληρονομικότητας αντικειμένων είναι η χρήση της *Σύνθεσης*. Τότε, τα αντικείμενα εκφράζουν τη συμπεριφορά τους ως εξής:

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

**Ποιο μοτίβο να χρησιμοποιήσω;**

Εξαρτάται από εσάς ποιο μοτίβο θα επιλέξετε. Η JavaScript υποστηρίζει και τα δύο αυτά παραδείγματα.

--

Ένα άλλο μοτίβο που είναι κοινό στην ανάπτυξη παιχνιδιών αντιμετωπίζει το πρόβλημα της διαχείρισης της εμπειρίας χρήστη και της απόδοσης του παιχνιδιού.

## Μοτίβο Pub/Sub

✅ Το Pub/Sub σημαίνει 'δημοσίευση-συνδρομή'

Αυτό το μοτίβο αντιμετωπίζει την ιδέα ότι τα διάφορα μέρη της εφαρμογής σας δεν πρέπει να γνωρίζουν το ένα για το άλλο. Γιατί αυτό; Κάνει πολύ πιο εύκολο να κατανοήσετε τι συμβαίνει γενικά αν τα διάφορα μέρη είναι διαχωρισμένα. Επίσης, καθιστά πιο εύκολη την αλλαγή συμπεριφοράς αν χρειαστεί. Πώς το πετυχαίνουμε αυτό; Το κάνουμε καθιερώνοντας κάποιες έννοιες:

- **μήνυμα**: Ένα μήνυμα είναι συνήθως μια συμβολοσειρά κειμένου συνοδευόμενη από ένα προαιρετικό φορτίο (ένα κομμάτι δεδομένων που διευκρινίζει τι αφορά το μήνυμα). Ένα τυπικό μήνυμα σε ένα παιχνίδι μπορεί να είναι `KEY_PRESSED_ENTER`.
- **δημοσιευτής**: Αυτό το στοιχείο *δημοσιεύει* ένα μήνυμα και το στέλνει σε όλους τους συνδρομητές.
- **συνδρομητής**: Αυτό το στοιχείο *ακούει* συγκεκριμένα μηνύματα και εκτελεί κάποια ενέργεια ως αποτέλεσμα της λήψης αυτού του μηνύματος, όπως το να πυροβολήσει ένα λέιζερ.

Η υλοποίηση είναι αρκετά μικρή σε μέγεθος, αλλά είναι ένα πολύ ισχυρό μοτίβο. Να πώς μπορεί να υλοποιηθεί:

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

Για να χρησιμοποιήσουμε τον παραπάνω κώδικα, μπορούμε να δημιουργήσουμε μια πολύ μικρή υλοποίηση:

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

Στον παραπάνω κώδικα, συνδέουμε ένα συμβάν πληκτρολογίου, `ArrowLeft`, και στέλνουμε το μήνυμα `HERO_MOVE_LEFT`. Ακούμε αυτό το μήνυμα και μετακινούμε τον `ήρωα` ως αποτέλεσμα. Η δύναμη αυτού του μοτίβου είναι ότι ο ακροατής συμβάντων και ο ήρωας δεν γνωρίζουν ο ένας τον άλλον. Μπορείτε να αντιστοιχίσετε το `ArrowLeft` στο πλήκτρο `A`. Επιπλέον, θα ήταν δυνατό να κάνετε κάτι εντελώς διαφορετικό στο `ArrowLeft` κάνοντας μερικές αλλαγές στη συνάρτηση `on` του eventEmitter:

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

Καθώς τα πράγματα γίνονται πιο περίπλοκα όταν το παιχνίδι σας μεγαλώνει, αυτό το μοτίβο παραμένει το ίδιο σε πολυπλοκότητα και ο κώδικάς σας παραμένει καθαρός. Συνιστάται πραγματικά να υιοθετήσετε αυτό το μοτίβο.

---

## 🚀 Πρόκληση

Σκεφτείτε πώς το μοτίβο pub-sub μπορεί να βελτιώσει ένα παιχνίδι. Ποια μέρη θα πρέπει να εκπέμπουν συμβάντα και πώς θα πρέπει το παιχνίδι να αντιδρά σε αυτά; Τώρα είναι η ευκαιρία σας να γίνετε δημιουργικοί, σκεπτόμενοι ένα νέο παιχνίδι και πώς τα μέρη του μπορεί να συμπεριφέρονται.

## Κουίζ μετά το μάθημα

[Κουίζ μετά το μάθημα](https://ff-quizzes.netlify.app/web/quiz/30)

## Ανασκόπηση & Αυτομελέτη

Μάθετε περισσότερα για το Pub/Sub [διαβάζοντας σχετικά](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Εργασία

[Σχεδιάστε ένα παιχνίδι](assignment.md)

---

**Αποποίηση Ευθύνης**:  
Αυτό το έγγραφο έχει μεταφραστεί χρησιμοποιώντας την υπηρεσία αυτόματης μετάφρασης [Co-op Translator](https://github.com/Azure/co-op-translator). Παρόλο που καταβάλλουμε προσπάθειες για ακρίβεια, παρακαλούμε να έχετε υπόψη ότι οι αυτόματες μεταφράσεις ενδέχεται να περιέχουν λάθη ή ανακρίβειες. Το πρωτότυπο έγγραφο στη μητρική του γλώσσα θα πρέπει να θεωρείται η αυθεντική πηγή. Για κρίσιμες πληροφορίες, συνιστάται επαγγελματική ανθρώπινη μετάφραση. Δεν φέρουμε ευθύνη για τυχόν παρεξηγήσεις ή εσφαλμένες ερμηνείες που προκύπτουν από τη χρήση αυτής της μετάφρασης.