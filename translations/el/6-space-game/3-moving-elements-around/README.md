<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a9a161871de7706cb0e23b1bd0c74559",
  "translation_date": "2025-08-29T07:08:51+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "el"
}
-->
# Δημιουργία ενός Παιχνιδιού Διαστήματος Μέρος 3: Προσθήκη Κίνησης

## Κουίζ πριν το μάθημα

[Κουίζ πριν το μάθημα](https://ff-quizzes.netlify.app/web/quiz/33)

Τα παιχνίδια δεν είναι πολύ διασκεδαστικά μέχρι να αρχίσουν να εμφανίζονται εξωγήινοι στην οθόνη! Σε αυτό το παιχνίδι, θα χρησιμοποιήσουμε δύο τύπους κινήσεων:

- **Κίνηση με πληκτρολόγιο/ποντίκι**: όταν ο χρήστης αλληλεπιδρά με το πληκτρολόγιο ή το ποντίκι για να μετακινήσει ένα αντικείμενο στην οθόνη.
- **Κίνηση που προκαλείται από το παιχνίδι**: όταν το παιχνίδι μετακινεί ένα αντικείμενο σε συγκεκριμένα χρονικά διαστήματα.

Πώς λοιπόν μετακινούμε αντικείμενα στην οθόνη; Όλα βασίζονται στις καρτεσιανές συντεταγμένες: αλλάζουμε τη θέση (x,y) του αντικειμένου και στη συνέχεια ξανασχεδιάζουμε την οθόνη.

Συνήθως χρειάζεστε τα παρακάτω βήματα για να επιτύχετε *κίνηση* στην οθόνη:

1. **Ορισμός νέας θέσης** για ένα αντικείμενο· αυτό είναι απαραίτητο για να φαίνεται ότι το αντικείμενο έχει μετακινηθεί.
2. **Καθαρισμός της οθόνης**, η οθόνη πρέπει να καθαρίζεται μεταξύ των σχεδιάσεων. Μπορούμε να την καθαρίσουμε σχεδιάζοντας ένα ορθογώνιο που γεμίζουμε με ένα χρώμα φόντου.
3. **Ξανασχεδίαση του αντικειμένου** στη νέα θέση. Με αυτόν τον τρόπο επιτυγχάνουμε τελικά τη μετακίνηση του αντικειμένου από μία θέση σε άλλη.

Αυτό μπορεί να μοιάζει κάπως έτσι στον κώδικα:

```javascript
//set the hero's location
hero.x += 5;
// clear the rectangle that hosts the hero
ctx.clearRect(0, 0, canvas.width, canvas.height);
// redraw the game background and hero
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.fillStyle = "black";
ctx.drawImage(heroImg, hero.x, hero.y);
```

✅ Μπορείτε να σκεφτείτε έναν λόγο για τον οποίο η επανασχεδίαση του ήρωα πολλές φορές ανά δευτερόλεπτο μπορεί να προκαλέσει κόστη απόδοσης; Διαβάστε για [εναλλακτικές σε αυτό το μοτίβο](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Χειρισμός συμβάντων πληκτρολογίου

Χειρίζεστε τα συμβάντα συνδέοντας συγκεκριμένα συμβάντα με κώδικα. Τα συμβάντα πληκτρολογίου ενεργοποιούνται σε ολόκληρο το παράθυρο, ενώ τα συμβάντα ποντικιού όπως το `click` μπορούν να συνδεθούν με το κλικ σε ένα συγκεκριμένο στοιχείο. Θα χρησιμοποιήσουμε συμβάντα πληκτρολογίου σε όλο το έργο.

Για να χειριστείτε ένα συμβάν, πρέπει να χρησιμοποιήσετε τη μέθοδο `addEventListener()` του παραθύρου και να της δώσετε δύο παραμέτρους εισόδου. Η πρώτη παράμετρος είναι το όνομα του συμβάντος, για παράδειγμα `keyup`. Η δεύτερη παράμετρος είναι η συνάρτηση που πρέπει να κληθεί ως αποτέλεσμα του συμβάντος.

Παράδειγμα:

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

Για τα συμβάντα πληκτρολογίου υπάρχουν δύο ιδιότητες στο συμβάν που μπορείτε να χρησιμοποιήσετε για να δείτε ποιο πλήκτρο πατήθηκε:

- `key`, αυτή είναι μια συμβολοσειρά που αντιπροσωπεύει το πατημένο πλήκτρο, για παράδειγμα `ArrowUp`.
- `keyCode`, αυτή είναι μια αριθμητική αναπαράσταση, για παράδειγμα `37`, που αντιστοιχεί στο `ArrowLeft`.

✅ Η διαχείριση συμβάντων πληκτρολογίου είναι χρήσιμη και εκτός ανάπτυξης παιχνιδιών. Σε τι άλλο μπορείτε να χρησιμοποιήσετε αυτήν την τεχνική;

### Ειδικά πλήκτρα: μια προειδοποίηση

Υπάρχουν κάποια *ειδικά* πλήκτρα που επηρεάζουν το παράθυρο. Αυτό σημαίνει ότι αν ακούτε ένα συμβάν `keyup` και χρησιμοποιείτε αυτά τα ειδικά πλήκτρα για να μετακινήσετε τον ήρωά σας, θα πραγματοποιηθεί επίσης οριζόντια κύλιση. Για αυτόν τον λόγο ίσως θέλετε να *απενεργοποιήσετε* αυτήν τη συμπεριφορά του προγράμματος περιήγησης καθώς δημιουργείτε το παιχνίδι σας. Χρειάζεστε κώδικα όπως αυτός:

```javascript
let onKeyDown = function (e) {
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 37:
    case 39:
    case 38:
    case 40: // Arrow keys
    case 32:
      e.preventDefault();
      break; // Space
    default:
      break; // do not block other keys
  }
};

window.addEventListener('keydown', onKeyDown);
```

Ο παραπάνω κώδικας θα διασφαλίσει ότι τα πλήκτρα βέλους και το πλήκτρο διαστήματος έχουν την *προεπιλεγμένη* συμπεριφορά τους απενεργοποιημένη. Ο μηχανισμός *απενεργοποίησης* συμβαίνει όταν καλούμε τη μέθοδο `e.preventDefault()`.

## Κίνηση που προκαλείται από το παιχνίδι

Μπορούμε να κάνουμε αντικείμενα να κινούνται μόνα τους χρησιμοποιώντας χρονομετρητές όπως οι συναρτήσεις `setTimeout()` ή `setInterval()` που ενημερώνουν τη θέση του αντικειμένου σε κάθε χρονικό διάστημα. Αυτό μπορεί να μοιάζει κάπως έτσι:

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## Ο βρόχος του παιχνιδιού

Ο βρόχος του παιχνιδιού είναι μια έννοια που ουσιαστικά είναι μια συνάρτηση που καλείται σε τακτά χρονικά διαστήματα. Ονομάζεται βρόχος παιχνιδιού καθώς όλα όσα πρέπει να είναι ορατά στον χρήστη σχεδιάζονται μέσα στον βρόχο. Ο βρόχος παιχνιδιού χρησιμοποιεί όλα τα αντικείμενα του παιχνιδιού που αποτελούν μέρος του παιχνιδιού, σχεδιάζοντας όλα εκτός αν για κάποιο λόγο δεν πρέπει να αποτελούν πλέον μέρος του παιχνιδιού. Για παράδειγμα, αν ένα αντικείμενο είναι ένας εχθρός που χτυπήθηκε από ένα λέιζερ και ανατινάχθηκε, δεν αποτελεί πλέον μέρος του τρέχοντος βρόχου παιχνιδιού (θα μάθετε περισσότερα για αυτό σε επόμενα μαθήματα).

Αυτός είναι ένας τυπικός βρόχος παιχνιδιού, εκφρασμένος σε κώδικα:

```javascript
let gameLoopId = setInterval(() =>
  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawHero();
    drawEnemies();
    drawStaticObjects();
}, 200);
```

Ο παραπάνω βρόχος καλείται κάθε `200` χιλιοστά του δευτερολέπτου για να ξανασχεδιάσει τον καμβά. Έχετε τη δυνατότητα να επιλέξετε το καλύτερο χρονικό διάστημα που έχει νόημα για το παιχνίδι σας.

## Συνεχίζοντας το Παιχνίδι Διαστήματος

Θα πάρετε τον υπάρχοντα κώδικα και θα τον επεκτείνετε. Ξεκινήστε είτε με τον κώδικα που ολοκληρώσατε κατά το μέρος Ι είτε χρησιμοποιήστε τον κώδικα στο [Μέρος ΙΙ - αρχικό](../../../../6-space-game/3-moving-elements-around/your-work).

- **Μετακίνηση του ήρωα**: θα προσθέσετε κώδικα για να διασφαλίσετε ότι μπορείτε να μετακινήσετε τον ήρωα χρησιμοποιώντας τα πλήκτρα βέλους.
- **Μετακίνηση εχθρών**: θα χρειαστεί επίσης να προσθέσετε κώδικα για να διασφαλίσετε ότι οι εχθροί μετακινούνται από πάνω προς τα κάτω με συγκεκριμένο ρυθμό.

## Προτεινόμενα βήματα

Βρείτε τα αρχεία που έχουν δημιουργηθεί για εσάς στον υποφάκελο `your-work`. Θα πρέπει να περιέχει τα εξής:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Ξεκινήστε το έργο σας στον φάκελο `your_work` πληκτρολογώντας:

```bash
cd your-work
npm start
```

Ο παραπάνω κώδικας θα ξεκινήσει έναν HTTP Server στη διεύθυνση `http://localhost:5000`. Ανοίξτε έναν περιηγητή και εισάγετε αυτήν τη διεύθυνση· αυτή τη στιγμή θα πρέπει να εμφανίζεται ο ήρωας και όλοι οι εχθροί· τίποτα δεν κινείται - ακόμα!

### Προσθήκη κώδικα

1. **Προσθέστε ειδικά αντικείμενα** για τον `ήρωα`, τον `εχθρό` και το `αντικείμενο παιχνιδιού`, τα οποία θα έχουν ιδιότητες `x` και `y`. (Θυμηθείτε το τμήμα για [Κληρονομικότητα ή σύνθεση](../README.md)).

   *ΥΠΟΔΕΙΞΗ* Το `αντικείμενο παιχνιδιού` θα πρέπει να είναι αυτό με τις ιδιότητες `x` και `y` και τη δυνατότητα να σχεδιάζεται στον καμβά.

   >υπόδειξη: ξεκινήστε προσθέτοντας μια νέα κλάση GameObject με τον κατασκευαστή της όπως παρακάτω και στη συνέχεια σχεδιάστε την στον καμβά:
  
    ```javascript
        
    class GameObject {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dead = false;
        this.type = "";
        this.width = 0;
        this.height = 0;
        this.img = undefined;
      }
    
      draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      }
    }
    ```

    Τώρα, επεκτείνετε αυτό το GameObject για να δημιουργήσετε τον Ήρωα και τον Εχθρό.
    
    ```javascript
    class Hero extends GameObject {
      constructor(x, y) {
        ...it needs an x, y, type, and speed
      }
    }
    ```

    ```javascript
    class Enemy extends GameObject {
      constructor(x, y) {
        super(x, y);
        (this.width = 98), (this.height = 50);
        this.type = "Enemy";
        let id = setInterval(() => {
          if (this.y < canvas.height - this.height) {
            this.y += 5;
          } else {
            console.log('Stopped at', this.y)
            clearInterval(id);
          }
        }, 300)
      }
    }
    ```

2. **Προσθέστε χειριστές συμβάντων πληκτρολογίου** για να χειριστείτε την πλοήγηση με πλήκτρα (μετακίνηση ήρωα πάνω/κάτω, αριστερά/δεξιά).

   *ΘΥΜΗΘΕΙΤΕ* ότι είναι ένα καρτεσιανό σύστημα, η πάνω-αριστερή γωνία είναι `0,0`. Επίσης, θυμηθείτε να προσθέσετε κώδικα για να σταματήσετε την *προεπιλεγμένη συμπεριφορά*.

   >υπόδειξη: δημιουργήστε τη συνάρτηση onKeyDown και συνδέστε την με το παράθυρο:

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   Ελέγξτε την κονσόλα του περιηγητή σας σε αυτό το σημείο και παρακολουθήστε τα πατήματα πλήκτρων που καταγράφονται.

3. **Υλοποιήστε** το [Μοτίβο Pub-Sub](../README.md), αυτό θα κρατήσει τον κώδικά σας καθαρό καθώς ακολουθείτε τα υπόλοιπα μέρη.

   Για να κάνετε αυτό το τελευταίο μέρος, μπορείτε:

   1. **Προσθέστε έναν ακροατή συμβάντων** στο παράθυρο:

       ```javascript
        window.addEventListener("keyup", (evt) => {
          if (evt.key === "ArrowUp") {
            eventEmitter.emit(Messages.KEY_EVENT_UP);
          } else if (evt.key === "ArrowDown") {
            eventEmitter.emit(Messages.KEY_EVENT_DOWN);
          } else if (evt.key === "ArrowLeft") {
            eventEmitter.emit(Messages.KEY_EVENT_LEFT);
          } else if (evt.key === "ArrowRight") {
            eventEmitter.emit(Messages.KEY_EVENT_RIGHT);
          }
        });
        ```

    1. **Δημιουργήστε μια κλάση EventEmitter** για να δημοσιεύετε και να εγγράφεστε σε μηνύματα:

        ```javascript
        class EventEmitter {
          constructor() {
            this.listeners = {};
          }
        
          on(message, listener) {
            if (!this.listeners[message]) {
              this.listeners[message] = [];
            }
            this.listeners[message].push(listener);
          }
        
          emit(message, payload = null) {
            if (this.listeners[message]) {
              this.listeners[message].forEach((l) => l(message, payload));
            }
          }
        }
        ```

    1. **Προσθέστε σταθερές** και ρυθμίστε το EventEmitter:

        ```javascript
        const Messages = {
          KEY_EVENT_UP: "KEY_EVENT_UP",
          KEY_EVENT_DOWN: "KEY_EVENT_DOWN",
          KEY_EVENT_LEFT: "KEY_EVENT_LEFT",
          KEY_EVENT_RIGHT: "KEY_EVENT_RIGHT",
        };
        
        let heroImg, 
            enemyImg, 
            laserImg,
            canvas, ctx, 
            gameObjects = [], 
            hero, 
            eventEmitter = new EventEmitter();
        ```

    1. **Αρχικοποιήστε το παιχνίδι**

    ```javascript
    function initGame() {
      gameObjects = [];
      createEnemies();
      createHero();
    
      eventEmitter.on(Messages.KEY_EVENT_UP, () => {
        hero.y -=5 ;
      })
    
      eventEmitter.on(Messages.KEY_EVENT_DOWN, () => {
        hero.y += 5;
      });
    
      eventEmitter.on(Messages.KEY_EVENT_LEFT, () => {
        hero.x -= 5;
      });
    
      eventEmitter.on(Messages.KEY_EVENT_RIGHT, () => {
        hero.x += 5;
      });
    }
    ```

1. **Ρυθμίστε τον βρόχο του παιχνιδιού**

   Αναμορφώστε τη συνάρτηση window.onload για να αρχικοποιήσετε το παιχνίδι και να ρυθμίσετε έναν βρόχο παιχνιδιού σε ένα καλό χρονικό διάστημα. Θα προσθέσετε επίσης μια ακτίνα λέιζερ:

    ```javascript
    window.onload = async () => {
      canvas = document.getElementById("canvas");
      ctx = canvas.getContext("2d");
      heroImg = await loadTexture("assets/player.png");
      enemyImg = await loadTexture("assets/enemyShip.png");
      laserImg = await loadTexture("assets/laserRed.png");
    
      initGame();
      let gameLoopId = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawGameObjects(ctx);
      }, 100)
      
    };
    ```

5. **Προσθέστε κώδικα** για να μετακινήσετε τους εχθρούς σε συγκεκριμένα χρονικά διαστήματα.

    Αναμορφώστε τη συνάρτηση `createEnemies()` για να δημιουργήσετε τους εχθρούς και να τους προσθέσετε στη νέα κλάση gameObjects:

    ```javascript
    function createEnemies() {
      const MONSTER_TOTAL = 5;
      const MONSTER_WIDTH = MONSTER_TOTAL * 98;
      const START_X = (canvas.width - MONSTER_WIDTH) / 2;
      const STOP_X = START_X + MONSTER_WIDTH;
    
      for (let x = START_X; x < STOP_X; x += 98) {
        for (let y = 0; y < 50 * 5; y += 50) {
          const enemy = new Enemy(x, y);
          enemy.img = enemyImg;
          gameObjects.push(enemy);
        }
      }
    }
    ```
    
    και προσθέστε μια συνάρτηση `createHero()` για να κάνετε μια παρόμοια διαδικασία για τον ήρωα.
    
    ```javascript
    function createHero() {
      hero = new Hero(
        canvas.width / 2 - 45,
        canvas.height - canvas.height / 4
      );
      hero.img = heroImg;
      gameObjects.push(hero);
    }
    ```

    και τέλος, προσθέστε μια συνάρτηση `drawGameObjects()` για να ξεκινήσετε τη σχεδίαση:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    Οι εχθροί σας θα πρέπει να αρχίσουν να προχωρούν προς το διαστημόπλοιο του ήρωά σας!

---

## 🚀 Πρόκληση

Όπως βλέπετε, ο κώδικάς σας μπορεί να μετατραπεί σε 'σπαγγέτι κώδικα' όταν αρχίζετε να προσθέτετε συναρτήσεις, μεταβλητές και κλάσεις. Πώς μπορείτε να οργανώσετε καλύτερα τον κώδικά σας ώστε να είναι πιο ευανάγνωστος; Σχεδιάστε ένα σύστημα για την οργάνωση του κώδικα σας, ακόμα κι αν εξακολουθεί να βρίσκεται σε ένα αρχείο.

## Κουίζ μετά το μάθημα

[Κουίζ μετά το μάθημα](https://ff-quizzes.netlify.app/web/quiz/34)

## Ανασκόπηση & Αυτομελέτη

Ενώ γράφουμε το παιχνίδι μας χωρίς τη χρήση frameworks, υπάρχουν πολλά frameworks για ανάπτυξη παιχνιδιών με JavaScript που βασίζονται στον καμβά. Αφιερώστε λίγο χρόνο για να κάνετε [ανάγνωση σχετικά με αυτά](https://github.com/collections/javascript-game-engines).

## Εργασία

[Σχολιάστε τον κώδικά σας](assignment.md)

---

**Αποποίηση ευθύνης**:  
Αυτό το έγγραφο έχει μεταφραστεί χρησιμοποιώντας την υπηρεσία αυτόματης μετάφρασης AI [Co-op Translator](https://github.com/Azure/co-op-translator). Παρόλο που καταβάλλουμε προσπάθειες για ακρίβεια, παρακαλούμε να έχετε υπόψη ότι οι αυτόματες μεταφράσεις ενδέχεται να περιέχουν σφάλματα ή ανακρίβειες. Το πρωτότυπο έγγραφο στη μητρική του γλώσσα θα πρέπει να θεωρείται η αυθεντική πηγή. Για κρίσιμες πληροφορίες, συνιστάται επαγγελματική ανθρώπινη μετάφραση. Δεν φέρουμε ευθύνη για τυχόν παρεξηγήσεις ή εσφαλμένες ερμηνείες που προκύπτουν από τη χρήση αυτής της μετάφρασης.