<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "1b0aeccb600f83c603cd70cb42df594d",
  "translation_date": "2025-08-29T07:19:55+00:00",
  "source_file": "4-typing-game/typing-game/README.md",
  "language_code": "el"
}
-->
# Δημιουργία παιχνιδιού με χρήση γεγονότων

## Ερωτηματολόγιο πριν το μάθημα

[Ερωτηματολόγιο πριν το μάθημα](https://ff-quizzes.netlify.app/web/quiz/21)

## Προγραμματισμός βασισμένος σε γεγονότα

Όταν δημιουργούμε μια εφαρμογή για τον περιηγητή, παρέχουμε μια γραφική διεπαφή χρήστη (GUI) για να αλληλεπιδρά ο χρήστης με αυτό που έχουμε δημιουργήσει. Ο πιο συνηθισμένος τρόπος αλληλεπίδρασης με τον περιηγητή είναι μέσω κλικ και πληκτρολόγησης σε διάφορα στοιχεία. Η πρόκληση που αντιμετωπίζουμε ως προγραμματιστές είναι ότι δεν γνωρίζουμε πότε θα εκτελέσουν αυτές τις ενέργειες!

Ο [προγραμματισμός βασισμένος σε γεγονότα](https://en.wikipedia.org/wiki/Event-driven_programming) είναι ο τύπος προγραμματισμού που πρέπει να χρησιμοποιήσουμε για να δημιουργήσουμε τη GUI μας. Αν αναλύσουμε λίγο αυτή τη φράση, βλέπουμε ότι η βασική λέξη εδώ είναι το **γεγονός**. Σύμφωνα με το [Merriam-Webster](https://www.merriam-webster.com/dictionary/event), γεγονός ορίζεται ως "κάτι που συμβαίνει". Αυτό περιγράφει τέλεια την κατάστασή μας. Γνωρίζουμε ότι κάτι πρόκειται να συμβεί για το οποίο θέλουμε να εκτελέσουμε κάποιον κώδικα ως απάντηση, αλλά δεν γνωρίζουμε πότε θα συμβεί.

Ο τρόπος με τον οποίο σημειώνουμε ένα τμήμα κώδικα που θέλουμε να εκτελεστεί είναι δημιουργώντας μια συνάρτηση. Όταν σκεφτόμαστε τον [διαδικαστικό προγραμματισμό](https://en.wikipedia.org/wiki/Procedural_programming), οι συναρτήσεις καλούνται με συγκεκριμένη σειρά. Το ίδιο ισχύει και για τον προγραμματισμό βασισμένο σε γεγονότα. Η διαφορά είναι **πώς** καλούνται οι συναρτήσεις.

Για να χειριστούμε τα γεγονότα (κλικ κουμπιών, πληκτρολόγηση κ.λπ.), καταχωρούμε **ακροατές γεγονότων**. Ένας ακροατής γεγονότων είναι μια συνάρτηση που "ακούει" για την εμφάνιση ενός γεγονότος και εκτελείται ως απάντηση. Οι ακροατές γεγονότων μπορούν να ενημερώσουν τη διεπαφή χρήστη, να κάνουν κλήσεις στον διακομιστή ή οτιδήποτε άλλο χρειάζεται να γίνει ως απάντηση στη δράση του χρήστη. Προσθέτουμε έναν ακροατή γεγονότων χρησιμοποιώντας το [addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) και παρέχοντας μια συνάρτηση για εκτέλεση.

> **NOTE:** Αξίζει να σημειωθεί ότι υπάρχουν πολλοί τρόποι για να δημιουργήσετε ακροατές γεγονότων. Μπορείτε να χρησιμοποιήσετε ανώνυμες συναρτήσεις ή να δημιουργήσετε ονομασμένες. Μπορείτε να χρησιμοποιήσετε διάφορες συντομεύσεις, όπως να ορίσετε την ιδιότητα `click` ή να χρησιμοποιήσετε το `addEventListener`. Στην άσκησή μας θα επικεντρωθούμε στο `addEventListener` και στις ανώνυμες συναρτήσεις, καθώς είναι πιθανώς η πιο συνηθισμένη τεχνική που χρησιμοποιούν οι προγραμματιστές ιστού. Είναι επίσης η πιο ευέλικτη, καθώς το `addEventListener` λειτουργεί για όλα τα γεγονότα και το όνομα του γεγονότος μπορεί να παρέχεται ως παράμετρος.

### Συνηθισμένα γεγονότα

Υπάρχουν [δεκάδες γεγονότα](https://developer.mozilla.org/docs/Web/Events) που μπορείτε να παρακολουθήσετε κατά τη δημιουργία μιας εφαρμογής. Ουσιαστικά, οτιδήποτε κάνει ένας χρήστης σε μια σελίδα δημιουργεί ένα γεγονός, κάτι που σας δίνει μεγάλη δύναμη για να εξασφαλίσετε ότι θα έχει την εμπειρία που επιθυμείτε. Ευτυχώς, συνήθως θα χρειαστείτε μόνο μια μικρή ομάδα γεγονότων. Εδώ είναι μερικά συνηθισμένα (συμπεριλαμβανομένων των δύο που θα χρησιμοποιήσουμε για τη δημιουργία του παιχνιδιού μας):

- [click](https://developer.mozilla.org/docs/Web/API/Element/click_event): Ο χρήστης έκανε κλικ σε κάτι, συνήθως ένα κουμπί ή έναν υπερσύνδεσμο
- [contextmenu](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event): Ο χρήστης έκανε δεξί κλικ
- [select](https://developer.mozilla.org/docs/Web/API/Element/select_event): Ο χρήστης επέλεξε κάποιο κείμενο
- [input](https://developer.mozilla.org/docs/Web/API/Element/input_event): Ο χρήστης εισήγαγε κάποιο κείμενο

## Δημιουργία του παιχνιδιού

Θα δημιουργήσουμε ένα παιχνίδι για να εξερευνήσουμε πώς λειτουργούν τα γεγονότα στη JavaScript. Το παιχνίδι μας θα δοκιμάσει την ικανότητα πληκτρολόγησης του παίκτη, η οποία είναι μία από τις πιο υποτιμημένες δεξιότητες που πρέπει να έχουν όλοι οι προγραμματιστές. Όλοι πρέπει να εξασκούμαστε στην πληκτρολόγηση! Η γενική ροή του παιχνιδιού θα είναι η εξής:

- Ο παίκτης κάνει κλικ στο κουμπί έναρξης και του εμφανίζεται μια φράση για να πληκτρολογήσει
- Ο παίκτης πληκτρολογεί τη φράση όσο πιο γρήγορα μπορεί σε ένα πλαίσιο κειμένου
  - Καθώς ολοκληρώνεται κάθε λέξη, η επόμενη επισημαίνεται
  - Αν ο παίκτης κάνει κάποιο λάθος, το πλαίσιο κειμένου γίνεται κόκκινο
  - Όταν ο παίκτης ολοκληρώσει τη φράση, εμφανίζεται ένα μήνυμα επιτυχίας με τον χρόνο που χρειάστηκε

Ας δημιουργήσουμε το παιχνίδι μας και ας μάθουμε για τα γεγονότα!

### Δομή αρχείων

Θα χρειαστούμε συνολικά τρία αρχεία: **index.html**, **script.js** και **style.css**. Ας τα δημιουργήσουμε για να κάνουμε τη ζωή μας λίγο πιο εύκολη.

- Δημιουργήστε έναν νέο φάκελο για τη δουλειά σας ανοίγοντας μια κονσόλα ή ένα τερματικό και εκτελώντας την παρακάτω εντολή:

```bash
# Linux or macOS
mkdir typing-game && cd typing-game

# Windows
md typing-game && cd typing-game
```

- Ανοίξτε το Visual Studio Code

```bash
code .
```

- Προσθέστε τρία αρχεία στον φάκελο στο Visual Studio Code με τα εξής ονόματα:
  - index.html
  - script.js
  - style.css

## Δημιουργία της διεπαφής χρήστη

Αν εξετάσουμε τις απαιτήσεις, γνωρίζουμε ότι θα χρειαστούμε μερικά στοιχεία στη σελίδα HTML μας. Αυτό μοιάζει λίγο με συνταγή, όπου χρειαζόμαστε κάποια υλικά:

- Ένα μέρος για να εμφανίζεται η φράση που πρέπει να πληκτρολογήσει ο χρήστης
- Ένα μέρος για να εμφανίζονται μηνύματα, όπως ένα μήνυμα επιτυχίας
- Ένα πλαίσιο κειμένου για πληκτρολόγηση
- Ένα κουμπί έναρξης

Το καθένα από αυτά θα χρειαστεί IDs ώστε να μπορούμε να τα χειριστούμε μέσω JavaScript. Θα προσθέσουμε επίσης αναφορές στα αρχεία CSS και JavaScript που θα δημιουργήσουμε.

Δημιουργήστε ένα νέο αρχείο με όνομα **index.html**. Προσθέστε τον παρακάτω HTML:

```html
<!-- inside index.html -->
<html>
<head>
  <title>Typing game</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Typing game!</h1>
  <p>Practice your typing skills with a quote from Sherlock Holmes. Click **start** to begin!</p>
  <p id="quote"></p> <!-- This will display our quote -->
  <p id="message"></p> <!-- This will display any status messages -->
  <div>
    <input type="text" aria-label="current word" id="typed-value" /> <!-- The textbox for typing -->
    <button type="button" id="start">Start</button> <!-- To start the game -->
  </div>
  <script src="script.js"></script>
</body>
</html>
```

### Εκκίνηση της εφαρμογής

Είναι πάντα καλύτερο να αναπτύσσουμε επαναληπτικά για να βλέπουμε πώς φαίνονται τα πράγματα. Ας εκκινήσουμε την εφαρμογή μας. Υπάρχει μια εξαιρετική επέκταση για το Visual Studio Code που ονομάζεται [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon), η οποία φιλοξενεί την εφαρμογή σας τοπικά και ανανεώνει τον περιηγητή κάθε φορά που αποθηκεύετε.

- Εγκαταστήστε το [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) ακολουθώντας τον σύνδεσμο και κάνοντας κλικ στο **Install**
  - Ο περιηγητής θα σας ζητήσει να ανοίξετε το Visual Studio Code και στη συνέχεια το Visual Studio Code θα σας ζητήσει να εκτελέσετε την εγκατάσταση
  - Επανεκκινήστε το Visual Studio Code αν σας ζητηθεί
- Μόλις εγκατασταθεί, στο Visual Studio Code, πατήστε Ctrl-Shift-P (ή Cmd-Shift-P) για να ανοίξετε το command palette
- Πληκτρολογήστε **Live Server: Open with Live Server**
  - Το Live Server θα ξεκινήσει να φιλοξενεί την εφαρμογή σας
- Ανοίξτε έναν περιηγητή και μεταβείτε στη διεύθυνση **https://localhost:5500**
- Θα πρέπει τώρα να βλέπετε τη σελίδα που δημιουργήσατε!

Ας προσθέσουμε λίγη λειτουργικότητα.

## Προσθήκη του CSS

Με τον HTML μας έτοιμο, ας προσθέσουμε το CSS για τον βασικό σχεδιασμό. Χρειαζόμαστε να επισημάνουμε τη λέξη που πρέπει να πληκτρολογήσει ο παίκτης και να χρωματίσουμε το πλαίσιο κειμένου αν αυτό που πληκτρολόγησε είναι λανθασμένο. Θα το κάνουμε αυτό με δύο κλάσεις.

Δημιουργήστε ένα νέο αρχείο με όνομα **style.css** και προσθέστε την παρακάτω σύνταξη.

```css
/* inside style.css */
.highlight {
  background-color: yellow;
}

.error {
  background-color: lightcoral;
  border: red;
}
```

✅ Όταν πρόκειται για CSS, μπορείτε να διαμορφώσετε τη σελίδα σας όπως θέλετε. Αφιερώστε λίγο χρόνο για να κάνετε τη σελίδα πιο ελκυστική:

- Επιλέξτε διαφορετική γραμματοσειρά
- Χρωματίστε τους τίτλους
- Αλλάξτε το μέγεθος των στοιχείων

## JavaScript

Με τη διεπαφή χρήστη έτοιμη, ήρθε η ώρα να επικεντρωθούμε στη JavaScript που θα παρέχει τη λογική. Θα το χωρίσουμε σε μερικά βήματα:

- [Δημιουργία των σταθερών](../../../../4-typing-game/typing-game)
- [Ακροατής γεγονότων για την έναρξη του παιχνιδιού](../../../../4-typing-game/typing-game)
- [Ακροατής γεγονότων για την πληκτρολόγηση](../../../../4-typing-game/typing-game)

Αλλά πρώτα, δημιουργήστε ένα νέο αρχείο με όνομα **script.js**.

### Δημιουργία των σταθερών

Θα χρειαστούμε μερικά στοιχεία για να κάνουμε τη ζωή μας λίγο πιο εύκολη στον προγραμματισμό. Και πάλι, όπως σε μια συνταγή, εδώ είναι τι θα χρειαστούμε:

- Έναν πίνακα με τη λίστα όλων των φράσεων
- Έναν κενό πίνακα για να αποθηκεύσουμε όλες τις λέξεις της τρέχουσας φράσης
- Χώρο για να αποθηκεύσουμε τον δείκτη της λέξης που πληκτρολογεί ο παίκτης
- Τον χρόνο που ο παίκτης έκανε κλικ στο κουμπί έναρξης

Θα χρειαστούμε επίσης αναφορές στα στοιχεία της διεπαφής χρήστη:

- Το πλαίσιο κειμένου (**typed-value**)
- Την εμφάνιση της φράσης (**quote**)
- Το μήνυμα (**message**)

```javascript
// inside script.js
// all of our quotes
const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];
// store the list of words and the index of the word the player is currently typing
let words = [];
let wordIndex = 0;
// the starting time
let startTime = Date.now();
// page elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
```

✅ Προσθέστε περισσότερες φράσεις στο παιχνίδι σας

> **NOTE:** Μπορούμε να ανακτήσουμε τα στοιχεία όποτε θέλουμε στον κώδικα χρησιμοποιώντας το `document.getElementById`. Επειδή θα αναφερόμαστε συχνά σε αυτά τα στοιχεία, θα αποφύγουμε τα τυπογραφικά λάθη με συμβολοσειρές χρησιμοποιώντας σταθερές. Πλαίσια όπως το [Vue.js](https://vuejs.org/) ή το [React](https://reactjs.org/) μπορούν να σας βοηθήσουν να διαχειριστείτε καλύτερα την κεντρικοποίηση του κώδικά σας.

Αφιερώστε ένα λεπτό για να παρακολουθήσετε ένα βίντεο σχετικά με τη χρήση των `const`, `let` και `var`.

[![Τύποι μεταβλητών](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Τύποι μεταβλητών")

> 🎥 Κάντε κλικ στην εικόνα παραπάνω για ένα βίντεο σχετικά με τις μεταβλητές.

### Προσθήκη λογικής έναρξης

Για να ξεκινήσει το παιχνίδι, ο παίκτης θα κάνει κλικ στο κουμπί έναρξης. Φυσικά, δεν γνωρίζουμε πότε θα κάνει κλικ στο κουμπί έναρξης. Εδώ είναι που ένας [ακροατής γεγονότων](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) μπαίνει στο παιχνίδι. Ένας ακροατής γεγονότων θα μας επιτρέψει να "ακούμε" για κάτι που συμβαίνει (ένα γεγονός) και να εκτελούμε κώδικα ως απάντηση. Στην περίπτωσή μας, θέλουμε να εκτελέσουμε κώδικα όταν ο χρήστης κάνει κλικ στο κουμπί έναρξης.

Όταν ο χρήστης κάνει κλικ στο **start**, πρέπει να επιλέξουμε μια φράση, να ρυθμίσουμε τη διεπαφή χρήστη και να ρυθμίσουμε την παρακολούθηση για την τρέχουσα λέξη και τον χρόνο. Παρακάτω είναι η JavaScript που θα χρειαστεί να προσθέσετε. Θα την αναλύσουμε αμέσως μετά το μπλοκ κώδικα.

```javascript
// at the end of script.js
document.getElementById('start').addEventListener('click', () => {
  // get a quote
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];
  // Put the quote into an array of words
  words = quote.split(' ');
  // reset the word index for tracking
  wordIndex = 0;

  // UI updates
  // Create an array of span elements so we can set a class
  const spanWords = words.map(function(word) { return `<span>${word} </span>`});
  // Convert into string and set as innerHTML on quote display
  quoteElement.innerHTML = spanWords.join('');
  // Highlight the first word
  quoteElement.childNodes[0].className = 'highlight';
  // Clear any prior messages
  messageElement.innerText = '';

  // Setup the textbox
  // Clear the textbox
  typedValueElement.value = '';
  // set focus
  typedValueElement.focus();
  // set the event handler

  // Start the timer
  startTime = new Date().getTime();
});
```

Ας αναλύσουμε τον κώδικα!

- Ρύθμιση παρακολούθησης λέξεων
  - Χρησιμοποιώντας το [Math.floor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) και το [Math.random](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random), επιλέγουμε τυχαία μια φράση από τον πίνακα `quotes`
  - Μετατρέπουμε τη `quote` σε έναν πίνακα `words` για να παρακολουθούμε τη λέξη που πληκτρολογεί ο παίκτης
  - Ορίζουμε το `wordIndex` στο 0, καθώς ο παίκτης θα ξεκινήσει από την πρώτη λέξη
- Ρύθμιση διεπαφής χρήστη
  - Δημιουργούμε έναν πίνακα `spanWords`, ο οποίος περιέχει κάθε λέξη μέσα σε ένα στοιχείο `span`
    - Αυτό θα μας επιτρέψει να επισημάνουμε τη λέξη στην οθόνη
  - Χρησιμοποιούμε το `join` στον πίνακα για να δημιουργήσουμε μια συμβολοσειρά που μπορούμε να χρησιμοποιήσουμε για να ενημερώσουμε το `innerHTML` του `quoteElement`
    - Αυτό θα εμφανίσει τη φράση στον παίκτη
  - Ορίζουμε το `className` του πρώτου στοιχείου `span` σε `highlight` για να το επισημάνουμε ως κίτρινο
  - Καθαρίζουμε το `messageElement` ορίζοντας το `innerText` σε `''`
- Ρύθμιση πλαισίου κειμένου
  - Καθαρίζουμε την τρέχουσα `value` του `typedValueElement`
  - Ορίζουμε το `focus` στο `typedValueElement`
- Ξεκινάμε το χρονόμετρο καλώντας το `getTime`

### Προσθήκη λογικής πληκτρολόγησης

Καθώς ο παίκτης πληκτρολογεί, δημιουργείται ένα γεγονός `input`. Αυτός ο ακροατής γεγονότων θα ελέγξει αν ο παίκτης πληκτρολογεί σωστά τη λέξη και θα χειριστεί την τρέχουσα κατάσταση του παιχνιδιού. Επιστρέφοντας στο **script.js**, προσθέστε τον παρακάτω κώδικα στο τέλος. Θα τον αναλύσουμε αμέσως μετά.

```javascript
// at the end of script.js
typedValueElement.addEventListener('input', () => {
  // Get the current word
  const currentWord = words[wordIndex];
  // get the current value
  const typedValue = typedValueElement.value;

  if (typedValue === currentWord && wordIndex === words.length - 1) {
    // end of sentence
    // Display success
    const elapsedTime = new Date().getTime() - startTime;
    const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
    messageElement.innerText = message;
  } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
    // end of word
    // clear the typedValueElement for the new word
    typedValueElement.value = '';
    // move to the next word
    wordIndex++;
    // reset the class name for all elements in quote
    for (const wordElement of quoteElement.childNodes) {
      wordElement.className = '';
    }
    // highlight the new word
    quoteElement.childNodes[wordIndex].className = 'highlight';
  } else if (currentWord.startsWith(typedValue)) {
    // currently correct
    // highlight the next word
    typedValueElement.className = '';
  } else {
    // error state
    typedValueElement.className = 'error';
  }
});
```

Ας αναλύσουμε τον κώδικα! Ξεκινάμε παίρνοντας την τρέχουσα λέξη και την τιμή που έχει πληκτρολογήσει μέχρι στιγμής ο παίκτης. Στη συνέχεια, έχουμε λογική "καταρράκτη", όπου ελέγχουμε αν η φράση έχει ολοκληρωθεί, αν η λέξη έχει ολοκληρωθεί, αν η λέξη είναι σωστή ή (τελικά) αν υπάρχει κάποιο λάθος.

- Η φράση έχει ολοκληρωθεί, κάτι που υποδεικνύεται από το `typedValue` να είναι ίσο με το `currentWord` και το `wordIndex` να είναι ίσο με το μήκος του `words` μείον ένα
  - Υπολογίζουμε το `elapsedTime` αφαιρώντας το `startTime` από τον τρέχοντα χρόνο
  - Διαιρούμε το `elapsedTime` με το 1.000 για να το μετατρέψουμε από χ
## Κουίζ Μετά τη Διάλεξη

[Κουίζ μετά τη διάλεξη](https://ff-quizzes.netlify.app/web/quiz/22)

## Ανασκόπηση & Αυτομελέτη

Διαβάστε για [όλα τα διαθέσιμα γεγονότα](https://developer.mozilla.org/docs/Web/Events) που παρέχονται στον προγραμματιστή μέσω του προγράμματος περιήγησης και σκεφτείτε τα σενάρια στα οποία θα χρησιμοποιούσατε το καθένα.

## Εργασία

[Δημιουργήστε ένα νέο παιχνίδι πληκτρολογίου](assignment.md)

---

**Αποποίηση Ευθύνης**:  
Αυτό το έγγραφο έχει μεταφραστεί χρησιμοποιώντας την υπηρεσία αυτόματης μετάφρασης [Co-op Translator](https://github.com/Azure/co-op-translator). Παρόλο που καταβάλλουμε προσπάθειες για ακρίβεια, παρακαλούμε να έχετε υπόψη ότι οι αυτόματες μεταφράσεις ενδέχεται να περιέχουν λάθη ή ανακρίβειες. Το πρωτότυπο έγγραφο στη μητρική του γλώσσα θα πρέπει να θεωρείται η αυθεντική πηγή. Για κρίσιμες πληροφορίες, συνιστάται επαγγελματική ανθρώπινη μετάφραση. Δεν φέρουμε ευθύνη για τυχόν παρεξηγήσεις ή εσφαλμένες ερμηνείες που προκύπτουν από τη χρήση αυτής της μετάφρασης.