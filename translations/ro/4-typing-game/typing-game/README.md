<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e982871b8388c59c22a41b73b5fca70f",
  "translation_date": "2025-08-28T08:21:15+00:00",
  "source_file": "4-typing-game/typing-game/README.md",
  "language_code": "ro"
}
-->
# Crearea unui joc folosind evenimente

## Chestionar înainte de lecție

[Chestionar înainte de lecție](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/21)

## Programare bazată pe evenimente

Când creăm o aplicație pentru browser, oferim o interfață grafică (GUI) pentru utilizator, astfel încât să poată interacționa cu ceea ce am construit. Cea mai comună modalitate de interacțiune cu browserul este prin clicuri și tastare în diverse elemente. Provocarea pentru noi, ca dezvoltatori, este că nu știm când utilizatorul va efectua aceste operațiuni!

[Programarea bazată pe evenimente](https://en.wikipedia.org/wiki/Event-driven_programming) este denumirea tipului de programare pe care trebuie să o utilizăm pentru a crea GUI-ul. Dacă analizăm puțin această expresie, vedem că cuvântul cheie este **eveniment**. [Eveniment](https://www.merriam-webster.com/dictionary/event), conform Merriam-Webster, este definit ca "ceva care se întâmplă". Aceasta descrie perfect situația noastră. Știm că ceva se va întâmpla și dorim să executăm un cod ca răspuns, dar nu știm când va avea loc.

Modalitatea prin care marcăm o secțiune de cod pe care dorim să o executăm este prin crearea unei funcții. Când ne gândim la [programarea procedurală](https://en.wikipedia.org/wiki/Procedural_programming), funcțiile sunt apelate într-o ordine specifică. Același lucru este valabil și pentru programarea bazată pe evenimente. Diferența constă în **modul** în care funcțiile vor fi apelate.

Pentru a gestiona evenimentele (clicuri pe butoane, tastare etc.), înregistrăm **ascultători de evenimente**. Un ascultător de evenimente este o funcție care ascultă un eveniment și se execută ca răspuns. Ascultătorii de evenimente pot actualiza interfața, pot face apeluri către server sau orice altceva este necesar ca răspuns la acțiunea utilizatorului. Adăugăm un ascultător de evenimente folosind [addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) și furnizând o funcție de executat.

> **NOTE:** Merită menționat că există numeroase modalități de a crea ascultători de evenimente. Poți folosi funcții anonime sau poți crea funcții denumite. Poți utiliza diverse scurtături, cum ar fi setarea proprietății `click` sau utilizarea `addEventListener`. În exercițiul nostru, ne vom concentra pe `addEventListener` și funcțiile anonime, deoarece aceasta este probabil cea mai comună tehnică utilizată de dezvoltatorii web. Este, de asemenea, cea mai flexibilă, deoarece `addEventListener` funcționează pentru toate evenimentele, iar numele evenimentului poate fi furnizat ca parametru.

### Evenimente comune

Există [zeci de evenimente](https://developer.mozilla.org/docs/Web/Events) disponibile pentru a fi ascultate atunci când creezi o aplicație. Practic, orice acțiune a utilizatorului pe o pagină generează un eveniment, ceea ce îți oferă multă putere pentru a asigura experiența dorită. Din fericire, de obicei vei avea nevoie doar de câteva evenimente. Iată câteva dintre cele mai comune (inclusiv cele pe care le vom folosi pentru a crea jocul nostru):

- [click](https://developer.mozilla.org/docs/Web/API/Element/click_event): Utilizatorul a dat clic pe ceva, de obicei un buton sau un hyperlink
- [contextmenu](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event): Utilizatorul a dat clic dreapta
- [select](https://developer.mozilla.org/docs/Web/API/Element/select_event): Utilizatorul a selectat un text
- [input](https://developer.mozilla.org/docs/Web/API/Element/input_event): Utilizatorul a introdus un text

## Crearea jocului

Vom crea un joc pentru a explora modul în care funcționează evenimentele în JavaScript. Jocul nostru va testa abilitățile de tastare ale jucătorului, una dintre cele mai subestimate abilități pe care toți dezvoltatorii ar trebui să le aibă. Ar trebui să exersăm cu toții tastarea! Fluxul general al jocului va arăta astfel:

- Jucătorul dă clic pe butonul de start și i se afișează un citat de tastat
- Jucătorul tastează citatul cât de repede poate într-o casetă de text
  - Pe măsură ce fiecare cuvânt este completat, următorul este evidențiat
  - Dacă jucătorul face o greșeală, caseta de text devine roșie
  - Când jucătorul completează citatul, se afișează un mesaj de succes cu timpul scurs

Să construim jocul și să învățăm despre evenimente!

### Structura fișierelor

Vom avea nevoie de trei fișiere: **index.html**, **script.js** și **style.css**. Să le configurăm pentru a ne ușura munca.

- Creează un folder nou pentru proiectul tău deschizând o fereastră de consolă sau terminal și executând următoarea comandă:

```bash
# Linux or macOS
mkdir typing-game && cd typing-game

# Windows
md typing-game && cd typing-game
```

- Deschide Visual Studio Code

```bash
code .
```

- Adaugă trei fișiere în folderul din Visual Studio Code cu următoarele nume:
  - index.html
  - script.js
  - style.css

## Crearea interfeței utilizatorului

Dacă analizăm cerințele, știm că vom avea nevoie de câteva elemente pe pagina HTML. Este ca o rețetă, unde avem nevoie de câteva ingrediente:

- Un loc pentru afișarea citatului pe care utilizatorul trebuie să-l tasteze
- Un loc pentru afișarea mesajelor, cum ar fi un mesaj de succes
- O casetă de text pentru tastare
- Un buton de start

Fiecare dintre acestea va avea nevoie de ID-uri pentru a putea lucra cu ele în JavaScript. Vom adăuga, de asemenea, referințe la fișierele CSS și JavaScript pe care le vom crea.

Creează un fișier nou numit **index.html**. Adaugă următorul cod HTML:

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

### Lansarea aplicației

Este întotdeauna bine să dezvolți iterativ pentru a vedea cum arată lucrurile. Să lansăm aplicația. Există o extensie minunată pentru Visual Studio Code numită [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) care va găzdui aplicația local și va reîmprospăta browserul de fiecare dată când salvezi.

- Instalează [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) urmând linkul și făcând clic pe **Install**
  - Browserul te va solicita să deschizi Visual Studio Code, iar apoi Visual Studio Code te va solicita să efectuezi instalarea
  - Repornește Visual Studio Code dacă este necesar
- După instalare, în Visual Studio Code, apasă Ctrl-Shift-P (sau Cmd-Shift-P) pentru a deschide paleta de comenzi
- Tastează **Live Server: Open with Live Server**
  - Live Server va începe să găzduiască aplicația
- Deschide un browser și navighează la **https://localhost:5500**
- Acum ar trebui să vezi pagina pe care ai creat-o!

Să adăugăm funcționalitate.

## Adăugarea CSS-ului

Cu HTML-ul creat, să adăugăm CSS-ul pentru stilizarea de bază. Trebuie să evidențiem cuvântul pe care jucătorul ar trebui să-l tasteze și să colorăm caseta de text dacă ceea ce a tastat este incorect. Vom face acest lucru cu două clase.

Creează un fișier nou numit **style.css** și adaugă următoarea sintaxă.

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

✅ În ceea ce privește CSS-ul, poți să-ți aranjezi pagina cum dorești. Ia-ți puțin timp și fă pagina mai atractivă:

- Alege un font diferit
- Colorează titlurile
- Redimensionează elementele

## JavaScript

Cu interfața creată, este timpul să ne concentrăm pe JavaScript, care va oferi logica. Vom împărți acest proces în câțiva pași:

- [Crearea constantelor](../../../../4-typing-game/typing-game)
- [Ascultător de evenimente pentru începerea jocului](../../../../4-typing-game/typing-game)
- [Ascultător de evenimente pentru tastare](../../../../4-typing-game/typing-game)

Dar mai întâi, creează un fișier nou numit **script.js**.

### Adăugarea constantelor

Vom avea nevoie de câteva elemente pentru a ne ușura munca de programare. Din nou, similar cu o rețetă, iată de ce avem nevoie:

- Un array cu lista tuturor citatelor
- Un array gol pentru a stoca toate cuvintele din citatul curent
- Un spațiu pentru a stoca indexul cuvântului pe care jucătorul îl tastează în prezent
- Timpul la care jucătorul a dat clic pe start

De asemenea, vom dori referințe la elementele UI:

- Caseta de text (**typed-value**)
- Afișarea citatului (**quote**)
- Mesajul (**message**)

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

✅ Adaugă mai multe citate în jocul tău

> **NOTE:** Putem recupera elementele oricând dorim în cod folosind `document.getElementById`. Deoarece vom face referire la aceste elemente în mod regulat, vom evita greșelile de tipar cu literale de șiruri utilizând constante. Framework-uri precum [Vue.js](https://vuejs.org/) sau [React](https://reactjs.org/) te pot ajuta să gestionezi mai bine centralizarea codului.

Ia un minut pentru a viziona un videoclip despre utilizarea `const`, `let` și `var`

[![Tipuri de variabile](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Tipuri de variabile")

> 🎥 Fă clic pe imaginea de mai sus pentru un videoclip despre variabile.

### Adăugarea logicii de start

Pentru a începe jocul, jucătorul va da clic pe start. Desigur, nu știm când va da clic pe start. Aici intervine un [ascultător de evenimente](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener). Un ascultător de evenimente ne va permite să ascultăm ceva care se întâmplă (un eveniment) și să executăm cod ca răspuns. În cazul nostru, dorim să executăm cod atunci când utilizatorul dă clic pe start.

Când utilizatorul dă clic pe **start**, trebuie să selectăm un citat, să configurăm interfața utilizatorului și să configurăm urmărirea cuvântului curent și a timpului. Mai jos este JavaScript-ul pe care trebuie să-l adaugi; discutăm despre el imediat după blocul de cod.

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

Să descompunem codul!

- Configurarea urmăririi cuvintelor
  - Utilizarea [Math.floor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) și [Math.random](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random) ne permite să selectăm aleatoriu un citat din array-ul `quotes`
  - Convertim `quote` într-un array de `words` pentru a putea urmări cuvântul pe care jucătorul îl tastează în prezent
  - `wordIndex` este setat la 0, deoarece jucătorul va începe cu primul cuvânt
- Configurarea interfeței utilizatorului
  - Creăm un array de `spanWords`, care conține fiecare cuvânt într-un element `span`
    - Acest lucru ne va permite să evidențiem cuvântul pe afișaj
  - `join` array-ul pentru a crea un șir pe care îl putem folosi pentru a actualiza `innerHTML` pe `quoteElement`
    - Acest lucru va afișa citatul jucătorului
  - Setăm `className` al primului element `span` la `highlight` pentru a-l evidenția ca galben
  - Curățăm `messageElement` setând `innerText` la `''`
- Configurarea casetei de text
  - Golim `value` curent pe `typedValueElement`
  - Setăm `focus` pe `typedValueElement`
- Pornim cronometrul apelând `getTime`

### Adăugarea logicii de tastare

Pe măsură ce jucătorul tastează, se va genera un eveniment `input`. Acest ascultător de evenimente va verifica dacă jucătorul tastează corect cuvântul și va gestiona starea curentă a jocului. Revenind la **script.js**, adaugă următorul cod la final. Îl vom descompune ulterior.

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

Să descompunem codul! Începem prin a prelua cuvântul curent și valoarea tastată de jucător până acum. Apoi avem o logică în cascadă, unde verificăm dacă citatul este complet, cuvântul este complet, cuvântul este corect sau (în final), dacă există o eroare.

- Citatul este complet, indicat de `typedValue` fiind egal cu `currentWord` și `wordIndex` fiind egal cu unul mai puțin decât `length` al `words`
  - Calculăm `elapsedTime` scăzând `startTime` din timpul curent
  - Împărțim `elapsedTime` la 1.000 pentru a converti din milisecunde în secunde
  - Afișăm un mesaj de succes
- Cuvântul este complet, indicat de `typedValue` terminându-se cu un spațiu (sfârșitul unui cuvânt) și `typedValue` fiind egal cu `currentWord`
  - Setăm `value` pe `typedElement` la `''` pentru a permite tastarea următorului cuvânt
  - Incrementăm `wordIndex` pentru a trece la următorul cuvânt
  - Parcurgem toți `childNodes` ai `quoteElement` pentru a seta `className` la `''` pentru a reveni la afișajul implicit
  - Setăm `className` al cuvântului curent la `highlight` pentru a-l marca ca următorul cuvânt de tastat
- Cuvântul este tastat corect (dar nu complet), indicat de `currentWord` începând cu `typedValue`
  - Asigurăm afișarea implicită a `typedValueElement` prin golirea `className`
- Dacă am ajuns până aici, avem o eroare
  - Setăm `className` pe `typedValueElement` la `error`

## Testarea aplicației

Ai ajuns la final! Ultimul pas este să te asiguri că aplicația funcționează. Încearcă! Nu te îngrijora dacă apar erori; **toți dezvoltatorii** au erori. Examinează mesajele și depanează după cum este necesar.

Dă clic pe **start** și începe să tastezi! Ar trebui să arate puțin ca animația pe care am văzut-o înainte.

![Animație a jocului în acțiune](../../../../4-typing-game/images/demo.gif)

---

## 🚀 Provocare

Adaugă mai multă funcționalitate

- Dezactivează ascultătorul de evenimente `input` la finalizare și reactivează-l când se apasă butonul
- Dezactivează caseta de text când jucătorul completează citatul
- Afișează o casetă de dialog modală cu mesajul de succes
- Stochează scorurile maxime folosind [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)

## Test de verificare după curs

[Test de verificare după curs](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/22)

## Recapitulare și Studiu Individual

Citește despre [toate evenimentele disponibile](https://developer.mozilla.org/docs/Web/Events) pentru dezvoltatori prin intermediul browserului web și gândește-te la scenariile în care ai folosi fiecare dintre ele.

## Temă

[Creează un nou joc de tastatură](assignment.md)

---

**Declinarea responsabilității**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să rețineți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm răspunderea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.