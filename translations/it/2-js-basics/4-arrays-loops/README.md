<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9197f8af0fef9be6e81d4dbda23c7e7d",
  "translation_date": "2025-10-22T23:20:09+00:00",
  "source_file": "2-js-basics/4-arrays-loops/README.md",
  "language_code": "it"
}
-->
# Fondamenti di JavaScript: Array e Cicli

![Fondamenti di JavaScript - Array](../../../../translated_images/webdev101-js-arrays.439d7528b8a294558d0e4302e448d193f8ad7495cc407539cc81f1afe904b470.it.png)
> Sketchnote di [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz Pre-Lezione
[Quiz pre-lezione](https://ff-quizzes.netlify.app/web/quiz/13)

Ti sei mai chiesto come i siti web tengano traccia degli articoli nel carrello o mostrino la lista dei tuoi amici? È qui che entrano in gioco gli array e i cicli. Gli array sono come contenitori digitali che contengono più informazioni, mentre i cicli ti permettono di lavorare con tutti quei dati in modo efficiente senza scrivere codice ripetitivo.

Insieme, questi due concetti formano la base per gestire le informazioni nei tuoi programmi. Imparerai a passare dal scrivere manualmente ogni singolo passaggio al creare codice intelligente ed efficiente che può elaborare centinaia o persino migliaia di elementi rapidamente.

Alla fine di questa lezione, capirai come svolgere compiti complessi con i dati utilizzando solo poche righe di codice. Esploriamo questi concetti fondamentali della programmazione.

[![Array](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "Array")

[![Cicli](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "Cicli")

> 🎥 Clicca sulle immagini sopra per i video sugli array e i cicli.

> Puoi seguire questa lezione su [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-arrays/?WT.mc_id=academic-77807-sagibbon)!

## Array

Pensa agli array come a un archivio digitale: invece di conservare un documento per cassetto, puoi organizzare più elementi correlati in un unico contenitore strutturato. In termini di programmazione, gli array ti permettono di conservare più informazioni in un unico pacchetto organizzato.

Che tu stia costruendo una galleria fotografica, gestendo una lista di cose da fare o tenendo traccia dei punteggi più alti in un gioco, gli array forniscono la base per l'organizzazione dei dati. Vediamo come funzionano.

✅ Gli array sono ovunque! Riesci a pensare a un esempio reale di un array, come un pannello solare?

### Creare Array

Creare un array è molto semplice: basta usare le parentesi quadre!

```javascript
// Empty array - like an empty shopping cart waiting for items
const myArray = [];
```

**Cosa sta succedendo qui?**
Hai appena creato un contenitore vuoto usando quelle parentesi quadre `[]`. Pensalo come uno scaffale vuoto in una biblioteca: è pronto a contenere qualsiasi libro tu voglia organizzare lì.

Puoi anche riempire il tuo array con valori iniziali fin dall'inizio:

```javascript
// Your ice cream shop's flavor menu
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// A user's profile info (mixing different types of data)
const userData = ["John", 25, true, "developer"];

// Test scores for your favorite class
const scores = [95, 87, 92, 78, 85];
```

**Cose interessanti da notare:**
- Puoi conservare testo, numeri o persino valori vero/falso nello stesso array
- Basta separare ogni elemento con una virgola: facile!
- Gli array sono perfetti per mantenere insieme informazioni correlate

### Indicizzazione degli Array

Ecco qualcosa che potrebbe sembrare insolito all'inizio: gli array numerano i loro elementi a partire da 0, non da 1. Questo sistema di indicizzazione basato su zero ha le sue radici nel funzionamento della memoria del computer: è una convenzione di programmazione che risale ai primi giorni dei linguaggi di programmazione come C. Ogni posizione nell'array ottiene un numero di indirizzo chiamato **indice**.

| Indice | Valore | Descrizione |
|--------|--------|-------------|
| 0 | "Cioccolato" | Primo elemento |
| 1 | "Fragola" | Secondo elemento |
| 2 | "Vaniglia" | Terzo elemento |
| 3 | "Pistacchio" | Quarto elemento |
| 4 | "Rocky Road" | Quinto elemento |

✅ Ti sorprende che gli array inizino dall'indice zero? In alcuni linguaggi di programmazione, gli indici iniziano da 1. C'è una storia interessante su questo, che puoi [leggere su Wikipedia](https://en.wikipedia.org/wiki/Zero-based_numbering).

**Accesso agli Elementi dell'Array:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// Access individual elements using bracket notation
console.log(iceCreamFlavors[0]); // "Chocolate" - first element
console.log(iceCreamFlavors[2]); // "Vanilla" - third element
console.log(iceCreamFlavors[4]); // "Rocky Road" - last element
```

**Analisi di ciò che accade qui:**
- **Usa** la notazione con parentesi quadre e il numero dell'indice per accedere agli elementi
- **Restituisce** il valore conservato in quella posizione specifica dell'array
- **Inizia** a contare da 0, rendendo il primo elemento l'indice 0

**Modifica degli Elementi dell'Array:**

```javascript
// Change an existing value
iceCreamFlavors[4] = "Butter Pecan";
console.log(iceCreamFlavors[4]); // "Butter Pecan"

// Add a new element at the end
iceCreamFlavors[5] = "Cookie Dough";
console.log(iceCreamFlavors[5]); // "Cookie Dough"
```

**In questo esempio abbiamo:**
- **Modificato** l'elemento all'indice 4 da "Rocky Road" a "Butter Pecan"
- **Aggiunto** un nuovo elemento "Cookie Dough" all'indice 5
- **Espanso** automaticamente la lunghezza dell'array aggiungendo oltre i limiti attuali

### Lunghezza dell'Array e Metodi Comuni

Gli array hanno proprietà e metodi integrati che rendono il lavoro con i dati molto più semplice.

**Trovare la Lunghezza dell'Array:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
console.log(iceCreamFlavors.length); // 5

// Length updates automatically as array changes
iceCreamFlavors.push("Mint Chip");
console.log(iceCreamFlavors.length); // 6
```

**Punti chiave da ricordare:**
- **Restituisce** il numero totale di elementi nell'array
- **Si aggiorna** automaticamente quando gli elementi vengono aggiunti o rimossi
- **Fornisce** un conteggio dinamico utile per i cicli e la validazione

**Metodi Essenziali degli Array:**

```javascript
const fruits = ["apple", "banana", "orange"];

// Add elements
fruits.push("grape");           // Adds to end: ["apple", "banana", "orange", "grape"]
fruits.unshift("strawberry");   // Adds to beginning: ["strawberry", "apple", "banana", "orange", "grape"]

// Remove elements
const lastFruit = fruits.pop();        // Removes and returns "grape"
const firstFruit = fruits.shift();     // Removes and returns "strawberry"

// Find elements
const index = fruits.indexOf("banana"); // Returns 1 (position of "banana")
const hasApple = fruits.includes("apple"); // Returns true
```

**Comprendere questi metodi:**
- **Aggiunge** elementi con `push()` (fine) e `unshift()` (inizio)
- **Rimuove** elementi con `pop()` (fine) e `shift()` (inizio)
- **Trova** elementi con `indexOf()` e verifica l'esistenza con `includes()`
- **Restituisce** valori utili come elementi rimossi o indici di posizione

✅ Prova tu stesso! Usa la console del tuo browser per creare e manipolare un array di tua creazione.

## Cicli

Pensa alla famosa punizione nei romanzi di Charles Dickens, dove gli studenti dovevano scrivere ripetutamente frasi su una lavagna. Immagina se potessi semplicemente dire a qualcuno "scrivi questa frase 100 volte" e farlo automaticamente. È esattamente ciò che i cicli fanno per il tuo codice.

I cicli sono come avere un assistente instancabile che può ripetere compiti senza errori. Che tu debba controllare ogni articolo in un carrello o mostrare tutte le foto in un album, i cicli gestiscono la ripetizione in modo efficiente.

JavaScript offre diversi tipi di cicli tra cui scegliere. Esaminiamoli e capiamo quando usarli.

### Ciclo For

Il ciclo `for` è come impostare un timer: sai esattamente quante volte vuoi che qualcosa accada. È super organizzato e prevedibile, il che lo rende perfetto quando lavori con gli array o devi contare qualcosa.

**Struttura del Ciclo For:**

| Componente | Scopo | Esempio |
|------------|-------|---------|
| **Inizializzazione** | Imposta il punto di partenza | `let i = 0` |
| **Condizione** | Quando continuare | `i < 10` |
| **Incremento** | Come aggiornare | `i++` |

```javascript
// Counting from 0 to 9
for (let i = 0; i < 10; i++) {
  console.log(`Count: ${i}`);
}

// More practical example: processing scores
const testScores = [85, 92, 78, 96, 88];
for (let i = 0; i < testScores.length; i++) {
  console.log(`Student ${i + 1}: ${testScores[i]}%`);
}
```

**Passo dopo passo, ecco cosa succede:**
- **Inizializza** la variabile contatore `i` a 0 all'inizio
- **Controlla** la condizione `i < 10` prima di ogni iterazione
- **Esegue** il blocco di codice quando la condizione è vera
- **Incrementa** `i` di 1 dopo ogni iterazione con `i++`
- **Si ferma** quando la condizione diventa falsa (quando `i` raggiunge 10)

✅ Esegui questo codice nella console del browser. Cosa succede quando apporti piccole modifiche al contatore, alla condizione o all'espressione di iterazione? Riesci a farlo funzionare al contrario, creando un conto alla rovescia?

### Ciclo While

Il ciclo `while` è come dire "continua a fare questo finché...": potresti non sapere esattamente quante volte verrà eseguito, ma sai quando fermarti. È perfetto per cose come chiedere input a un utente finché non ti dà ciò di cui hai bisogno, o cercare tra i dati finché non trovi ciò che stai cercando.

**Caratteristiche del Ciclo While:**
- **Continua** a eseguire finché la condizione è vera
- **Richiede** la gestione manuale di eventuali variabili contatore
- **Controlla** la condizione prima di ogni iterazione
- **Rischia** cicli infiniti se la condizione non diventa mai falsa

```javascript
// Basic counting example
let i = 0;
while (i < 10) {
  console.log(`While count: ${i}`);
  i++; // Don't forget to increment!
}

// More practical example: processing user input
let userInput = "";
let attempts = 0;
const maxAttempts = 3;

while (userInput !== "quit" && attempts < maxAttempts) {
  userInput = prompt(`Enter 'quit' to exit (attempt ${attempts + 1}):`);
  attempts++;
}

if (attempts >= maxAttempts) {
  console.log("Maximum attempts reached!");
}
```

**Comprendere questi esempi:**
- **Gestisce** la variabile contatore `i` manualmente all'interno del corpo del ciclo
- **Incrementa** il contatore per prevenire cicli infiniti
- **Dimostra** casi d'uso pratici con input utente e limitazione dei tentativi
- **Include** meccanismi di sicurezza per prevenire esecuzioni infinite

### Alternative Moderne ai Cicli

JavaScript offre una sintassi moderna per i cicli che può rendere il tuo codice più leggibile e meno soggetto a errori.

**Ciclo For...of (ES6+):**

```javascript
const colors = ["red", "green", "blue", "yellow"];

// Modern approach - cleaner and safer
for (const color of colors) {
  console.log(`Color: ${color}`);
}

// Compare with traditional for loop
for (let i = 0; i < colors.length; i++) {
  console.log(`Color: ${colors[i]}`);
}
```

**Vantaggi principali del for...of:**
- **Elimina** la gestione degli indici e gli errori di conteggio
- **Fornisce** accesso diretto agli elementi dell'array
- **Migliora** la leggibilità del codice e riduce la complessità della sintassi

**Metodo forEach:**

```javascript
const prices = [9.99, 15.50, 22.75, 8.25];

// Using forEach for functional programming style
prices.forEach((price, index) => {
  console.log(`Item ${index + 1}: $${price.toFixed(2)}`);
});

// forEach with arrow functions for simple operations
prices.forEach(price => console.log(`Price: $${price}`));
```

**Cosa sapere sul forEach:**
- **Esegue** una funzione per ogni elemento dell'array
- **Fornisce** sia il valore dell'elemento che l'indice come parametri
- **Non può** essere interrotto anticipatamente (a differenza dei cicli tradizionali)
- **Restituisce** undefined (non crea un nuovo array)

✅ Perché sceglieresti un ciclo for rispetto a un ciclo while? 17.000 utenti hanno avuto la stessa domanda su StackOverflow, e alcune opinioni [potrebbero interessarti](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript).

## Cicli e Array

Combinare array con cicli crea potenti capacità di elaborazione dei dati. Questa combinazione è fondamentale per molti compiti di programmazione, dalla visualizzazione di liste al calcolo di statistiche.

**Elaborazione Tradizionale degli Array:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// Classic for loop approach
for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(`Flavor ${i + 1}: ${iceCreamFlavors[i]}`);
}

// Modern for...of approach
for (const flavor of iceCreamFlavors) {
  console.log(`Available flavor: ${flavor}`);
}
```

**Capire ogni approccio:**
- **Usa** la proprietà della lunghezza dell'array per determinare il limite del ciclo
- **Accede** agli elementi tramite l'indice nei cicli for tradizionali
- **Fornisce** accesso diretto agli elementi nel ciclo for...of
- **Elabora** ogni elemento dell'array esattamente una volta

**Esempio Pratico di Elaborazione dei Dati:**

```javascript
const studentGrades = [85, 92, 78, 96, 88, 73, 89];
let total = 0;
let highestGrade = studentGrades[0];
let lowestGrade = studentGrades[0];

// Process all grades with a single loop
for (let i = 0; i < studentGrades.length; i++) {
  const grade = studentGrades[i];
  total += grade;
  
  if (grade > highestGrade) {
    highestGrade = grade;
  }
  
  if (grade < lowestGrade) {
    lowestGrade = grade;
  }
}

const average = total / studentGrades.length;
console.log(`Average: ${average.toFixed(1)}`);
console.log(`Highest: ${highestGrade}`);
console.log(`Lowest: ${lowestGrade}`);
```

**Ecco come funziona questo codice:**
- **Inizializza** variabili di tracciamento per somma e valori estremi
- **Elabora** ogni voto con un unico ciclo efficiente
- **Accumula** il totale per il calcolo della media
- **Traccia** i valori più alti e più bassi durante l'iterazione
- **Calcola** le statistiche finali dopo il completamento del ciclo

✅ Prova a iterare su un array di tua creazione nella console del browser.

---

## Sfida dell'Agente GitHub Copilot 🚀

Usa la modalità Agente per completare la seguente sfida:

**Descrizione:** Crea una funzione completa per l'elaborazione dei dati che combini array e cicli per analizzare un dataset e generare informazioni significative.

**Prompt:** Crea una funzione chiamata `analyzeGrades` che prenda un array di oggetti contenenti i voti degli studenti (ognuno con proprietà nome e punteggio) e restituisca un oggetto con statistiche che includano il punteggio più alto, il punteggio più basso, il punteggio medio, il numero di studenti che hanno superato (punteggio >= 70) e un array di nomi degli studenti che hanno ottenuto un punteggio superiore alla media. Usa almeno due tipi diversi di cicli nella tua soluzione.

Scopri di più sulla [modalità agente](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) qui.

## 🚀 Sfida

JavaScript offre diversi metodi moderni per gli array che possono sostituire i cicli tradizionali per compiti specifici. Esplora [forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of), [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [filter](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), e [reduce](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce). 

**La tua sfida:** Refattorizza l'esempio dei voti degli studenti usando almeno tre metodi diversi per gli array. Nota quanto il codice diventa più pulito e leggibile con la sintassi moderna di JavaScript.

## Quiz Post-Lezione
[Quiz post-lezione](https://ff-quizzes.netlify.app/web/quiz/14)


## Revisione e Studio Autonomo

Gli array in JavaScript hanno molti metodi associati che sono estremamente utili per la manipolazione dei dati. [Leggi di più su questi metodi](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) e prova alcuni di essi (come push, pop, slice e splice) su un array di tua creazione.

## Compito

[Iterare un Array](assignment.md)

---

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione AI [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche potrebbero contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si consiglia una traduzione professionale umana. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.