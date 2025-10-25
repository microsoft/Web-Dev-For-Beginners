<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9197f8af0fef9be6e81d4dbda23c7e7d",
  "translation_date": "2025-10-24T21:54:42+00:00",
  "source_file": "2-js-basics/4-arrays-loops/README.md",
  "language_code": "ro"
}
-->
# Bazele JavaScript: Tablouri și bucle

![Bazele JavaScript - Tablouri](../../../../translated_images/webdev101-js-arrays.439d7528b8a294558d0e4302e448d193f8ad7495cc407539cc81f1afe904b470.ro.png)
> Notițe vizuale de [Tomomi Imura](https://twitter.com/girlie_mac)

## Chestionar înainte de lecție
[Chestionar înainte de lecție](https://ff-quizzes.netlify.app/web/quiz/13)

Te-ai întrebat vreodată cum site-urile web țin evidența articolelor din coșul de cumpărături sau afișează lista de prieteni? Aici intervin tablourile și buclele. Tablourile sunt ca niște containere digitale care stochează mai multe informații, în timp ce buclele te ajută să lucrezi eficient cu toate aceste date, fără să scrii cod repetitiv.

Împreună, aceste două concepte formează baza pentru gestionarea informațiilor în programele tale. Vei învăța să treci de la scrierea manuală a fiecărui pas la crearea unui cod inteligent și eficient, care poate procesa sute sau chiar mii de elemente rapid.

Până la sfârșitul acestei lecții, vei înțelege cum să realizezi sarcini complexe de procesare a datelor cu doar câteva linii de cod. Haide să explorăm aceste concepte esențiale de programare.

[![Tablouri](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "Tablouri")

[![Bucle](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "Bucle")

> 🎥 Click pe imaginile de mai sus pentru videoclipuri despre tablouri și bucle.

> Poți parcurge această lecție pe [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-arrays/?WT.mc_id=academic-77807-sagibbon)!

## Tablouri

Gândește-te la tablouri ca la un dulap digital - în loc să stochezi un singur document pe sertar, poți organiza mai multe elemente legate într-un singur container structurat. În termeni de programare, tablourile îți permit să stochezi mai multe informații într-un singur pachet organizat.

Indiferent dacă construiești o galerie foto, gestionezi o listă de sarcini sau ții evidența scorurilor mari într-un joc, tablourile oferă fundația pentru organizarea datelor. Haide să vedem cum funcționează.

✅ Tablourile sunt peste tot! Poți să te gândești la un exemplu din viața reală al unui tablou, cum ar fi un ansamblu de panouri solare?

### Crearea tablourilor

Crearea unui tablou este foarte simplă - folosește doar paranteze pătrate!

```javascript
// Empty array - like an empty shopping cart waiting for items
const myArray = [];
```

**Ce se întâmplă aici?**
Tocmai ai creat un container gol folosind acele paranteze pătrate `[]`. Gândește-te la el ca la un raft gol de bibliotecă - este pregătit să țină orice cărți vrei să organizezi acolo.

De asemenea, poți să-ți umpli tabloul cu valori inițiale chiar de la început:

```javascript
// Your ice cream shop's flavor menu
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// A user's profile info (mixing different types of data)
const userData = ["John", 25, true, "developer"];

// Test scores for your favorite class
const scores = [95, 87, 92, 78, 85];
```

**Lucruri interesante de observat:**
- Poți stoca text, numere sau chiar valori adevărat/fals în același tablou
- Doar separă fiecare element cu o virgulă - simplu!
- Tablourile sunt perfecte pentru a păstra informații legate împreună

### Indexarea tablourilor

Iată ceva ce poate părea neobișnuit la început: tablourile își numerotează elementele începând de la 0, nu de la 1. Această indexare bazată pe zero își are rădăcinile în modul în care funcționează memoria computerului - este o convenție de programare încă de la începuturile limbajelor de programare precum C. Fiecare loc din tablou primește un număr de adresă propriu, numit **index**.

| Index | Valoare | Descriere |
|-------|---------|-----------|
| 0 | "Ciocolată" | Primul element |
| 1 | "Căpșuni" | Al doilea element |
| 2 | "Vanilie" | Al treilea element |
| 3 | "Fistic" | Al patrulea element |
| 4 | "Rocky Road" | Al cincilea element |

✅ Te surprinde faptul că tablourile încep de la indexul zero? În unele limbaje de programare, indexurile încep de la 1. Există o istorie interesantă în jurul acestui subiect, pe care o poți [citi pe Wikipedia](https://en.wikipedia.org/wiki/Zero-based_numbering).

**Accesarea elementelor unui tablou:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// Access individual elements using bracket notation
console.log(iceCreamFlavors[0]); // "Chocolate" - first element
console.log(iceCreamFlavors[2]); // "Vanilla" - third element
console.log(iceCreamFlavors[4]); // "Rocky Road" - last element
```

**Ce se întâmplă aici:**
- **Folosește** notația cu paranteze pătrate și numărul indexului pentru a accesa elementele
- **Returnează** valoarea stocată la poziția specifică din tablou
- **Începe** numărătoarea de la 0, făcând ca primul element să aibă indexul 0

**Modificarea elementelor unui tablou:**

```javascript
// Change an existing value
iceCreamFlavors[4] = "Butter Pecan";
console.log(iceCreamFlavors[4]); // "Butter Pecan"

// Add a new element at the end
iceCreamFlavors[5] = "Cookie Dough";
console.log(iceCreamFlavors[5]); // "Cookie Dough"
```

**În exemplul de mai sus, am:**
- **Modificat** elementul de la indexul 4 din "Rocky Road" în "Butter Pecan"
- **Adăugat** un nou element "Cookie Dough" la indexul 5
- **Extins** automat lungimea tabloului când am adăugat un element dincolo de limitele curente

### Lungimea tabloului și metode comune

Tablourile vin cu proprietăți și metode încorporate care fac lucrul cu datele mult mai ușor.

**Determinarea lungimii tabloului:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
console.log(iceCreamFlavors.length); // 5

// Length updates automatically as array changes
iceCreamFlavors.push("Mint Chip");
console.log(iceCreamFlavors.length); // 6
```

**Puncte cheie de reținut:**
- **Returnează** numărul total de elemente din tablou
- **Se actualizează** automat când se adaugă sau se elimină elemente
- **Oferă** un număr dinamic util pentru bucle și validare

**Metode esențiale ale tablourilor:**

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

**Înțelegerea acestor metode:**
- **Adaugă** elemente cu `push()` (la sfârșit) și `unshift()` (la început)
- **Elimină** elemente cu `pop()` (la sfârșit) și `shift()` (la început)
- **Localizează** elemente cu `indexOf()` și verifică existența cu `includes()`
- **Returnează** valori utile, cum ar fi elementele eliminate sau indexurile pozițiilor

✅ Încearcă singur! Folosește consola browserului pentru a crea și manipula un tablou propriu.

## Bucle

Gândește-te la celebra pedeapsă din romanele lui Charles Dickens, unde elevii trebuiau să scrie propoziții repetitiv pe o tablă. Imaginează-ți dacă ai putea pur și simplu să spui cuiva "scrie această propoziție de 100 de ori" și să fie făcut automat. Exact asta fac buclele pentru codul tău.

Buclele sunt ca un asistent neobosit care poate repeta sarcini fără greșeală. Indiferent dacă trebuie să verifici fiecare articol dintr-un coș de cumpărături sau să afișezi toate fotografiile dintr-un album, buclele gestionează repetiția eficient.

JavaScript oferă mai multe tipuri de bucle din care poți alege. Haide să le examinăm pe fiecare și să înțelegem când să le folosim.

### Bucla For

Bucla `for` este ca și cum ai seta un cronometru - știi exact de câte ori vrei să se întâmple ceva. Este super organizată și previzibilă, ceea ce o face perfectă atunci când lucrezi cu tablouri sau trebuie să numeri lucruri.

**Structura buclei For:**

| Componentă | Scop | Exemplu |
|------------|------|---------|
| **Inițializare** | Setează punctul de pornire | `let i = 0` |
| **Condiție** | Când să continue | `i < 10` |
| **Incrementare** | Cum să actualizezi | `i++` |

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

**Pas cu pas, iată ce se întâmplă:**
- **Inițializează** variabila contor `i` la 0 la început
- **Verifică** condiția `i < 10` înainte de fiecare iterație
- **Execută** blocul de cod când condiția este adevărată
- **Incrementează** `i` cu 1 după fiecare iterație cu `i++`
- **Se oprește** când condiția devine falsă (când `i` ajunge la 10)

✅ Rulează acest cod în consola browserului. Ce se întâmplă când faci mici modificări la contor, condiție sau expresia de iterație? Poți să-l faci să ruleze invers, creând un numărătoare inversă?

### Bucla While

Bucla `while` este ca și cum ai spune "continuă să faci asta până când..." - s-ar putea să nu știi exact de câte ori va rula, dar știi când să te oprești. Este perfectă pentru lucruri precum solicitarea unui răspuns de la utilizator până când primești ceea ce ai nevoie sau căutarea în date până când găsești ceea ce cauți.

**Caracteristicile buclei While:**
- **Continuă** să execute cât timp condiția este adevărată
- **Necesită** gestionarea manuală a oricăror variabile contor
- **Verifică** condiția înainte de fiecare iterație
- **Există riscul** de bucle infinite dacă condiția nu devine niciodată falsă

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

**Înțelegerea acestor exemple:**
- **Gestionează** variabila contor `i` manual în interiorul corpului buclei
- **Incrementează** contorul pentru a preveni buclele infinite
- **Demonstrează** utilizarea practică cu inputul utilizatorului și limitarea încercărilor
- **Include** mecanisme de siguranță pentru a preveni execuția nesfârșită

### Alternative moderne pentru bucle

JavaScript oferă o sintaxă modernă pentru bucle care poate face codul mai ușor de citit și mai puțin predispus la erori.

**Bucla For...of (ES6+):**

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

**Avantajele cheie ale for...of:**
- **Elimină** gestionarea indexului și erorile potențiale de tip off-by-one
- **Oferă** acces direct la elementele tabloului
- **Îmbunătățește** lizibilitatea codului și reduce complexitatea sintaxei

**Metoda forEach:**

```javascript
const prices = [9.99, 15.50, 22.75, 8.25];

// Using forEach for functional programming style
prices.forEach((price, index) => {
  console.log(`Item ${index + 1}: $${price.toFixed(2)}`);
});

// forEach with arrow functions for simple operations
prices.forEach(price => console.log(`Price: $${price}`));
```

**Ce trebuie să știi despre forEach:**
- **Execută** o funcție pentru fiecare element al tabloului
- **Oferă** atât valoarea elementului, cât și indexul ca parametri
- **Nu poate** fi oprită devreme (spre deosebire de buclele tradiționale)
- **Returnează** undefined (nu creează un tablou nou)

✅ De ce ai alege o buclă for în loc de o buclă while? 17.000 de utilizatori au avut aceeași întrebare pe StackOverflow, iar unele dintre opinii [ar putea fi interesante pentru tine](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript).

## Buclele și tablourile

Combinarea tablourilor cu buclele creează capacități puternice de procesare a datelor. Această pereche este fundamentală pentru multe sarcini de programare, de la afișarea listelor la calcularea statisticilor.

**Procesarea tradițională a tablourilor:**

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

**Să înțelegem fiecare abordare:**
- **Folosește** proprietatea de lungime a tabloului pentru a determina limita buclei
- **Accesează** elementele prin index în buclele for tradiționale
- **Oferă** acces direct la elemente în buclele for...of
- **Procesează** fiecare element al tabloului exact o dată

**Exemplu practic de procesare a datelor:**

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

**Iată cum funcționează acest cod:**
- **Inițializează** variabile de urmărire pentru sumă și extreme
- **Procesează** fiecare notă cu o singură buclă eficientă
- **Acumulează** totalul pentru calculul mediei
- **Urmărește** valorile cele mai mari și cele mai mici în timpul iterației
- **Calculează** statisticile finale după finalizarea buclei

✅ Experimentează cu buclele peste un tablou creat de tine în consola browserului.

---

## Provocarea Agentului GitHub Copilot 🚀

Folosește modul Agent pentru a finaliza următoarea provocare:

**Descriere:** Construiește o funcție cuprinzătoare de procesare a datelor care combină tablouri și bucle pentru a analiza un set de date și a genera informații semnificative.

**Prompt:** Creează o funcție numită `analyzeGrades` care primește un tablou de obiecte cu note ale studenților (fiecare conținând proprietăți de nume și scor) și returnează un obiect cu statistici, inclusiv cel mai mare scor, cel mai mic scor, scorul mediu, numărul de studenți care au trecut (scor >= 70) și un tablou cu numele studenților care au obținut un scor peste medie. Folosește cel puțin două tipuri diferite de bucle în soluția ta.

Află mai multe despre [modul agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) aici.

## 🚀 Provocare

JavaScript oferă mai multe metode moderne pentru tablouri care pot înlocui buclele tradiționale pentru sarcini specifice. Explorează [forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of), [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [filter](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), și [reduce](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce). 

**Provocarea ta:** Refactorizează exemplul cu notele studenților folosind cel puțin trei metode diferite pentru tablouri. Observă cât de mult mai curat și mai ușor de citit devine codul cu sintaxa modernă JavaScript.

## Chestionar după lecție
[Chestionar după lecție](https://ff-quizzes.netlify.app/web/quiz/14)

## Recapitulare și studiu individual

Tablourile în JavaScript au multe metode atașate, care sunt extrem de utile pentru manipularea datelor. [Citește despre aceste metode](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) și încearcă unele dintre ele (cum ar fi push, pop, slice și splice) pe un tablou creat de tine.

## Temă

[Parcurge un tablou](assignment.md)

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa maternă ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm responsabilitatea pentru neînțelegerile sau interpretările greșite care pot apărea din utilizarea acestei traduceri.