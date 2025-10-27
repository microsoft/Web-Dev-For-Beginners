<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "ec43b53e8e015cdabfd3ad877b3c28e5",
  "translation_date": "2025-10-24T21:54:11+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "ro"
}
-->
# Bazele JavaScript: Metode și Funcții

![Bazele JavaScript - Funcții](../../../../translated_images/webdev101-js-functions.be049c4726e94f8b7605c36330ac42eeb5cd8ed02bcdd60fdac778174d6cb865.ro.png)
> Sketchnote de [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz înainte de lecție
[Quiz înainte de lecție](https://ff-quizzes.netlify.app)

Scrierea aceluiași cod în mod repetat este una dintre cele mai frecvente frustrări ale programării. Funcțiile rezolvă această problemă, permițându-vă să împachetați codul în blocuri reutilizabile. Gândiți-vă la funcții ca la piesele standardizate care au revoluționat linia de asamblare a lui Henry Ford – odată ce creați o componentă fiabilă, o puteți folosi oriunde este nevoie, fără să o reconstruiți de la zero.

Funcțiile vă permit să grupați bucăți de cod pentru a le putea reutiliza în întregul program. În loc să copiați și să lipiți aceeași logică peste tot, puteți crea o funcție o singură dată și să o apelați ori de câte ori este necesar. Această abordare vă ajută să vă organizați codul și face actualizările mult mai ușoare.

În această lecție, veți învăța cum să creați propriile funcții, să transmiteți informații către ele și să obțineți rezultate utile înapoi. Veți descoperi diferența dintre funcții și metode, veți învăța abordări moderne de sintaxă și veți vedea cum funcțiile pot lucra împreună cu alte funcții. Vom construi aceste concepte pas cu pas.

[![Metode și Funcții](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Metode și Funcții")

> 🎥 Faceți clic pe imaginea de mai sus pentru un videoclip despre metode și funcții.

> Puteți parcurge această lecție pe [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon)!

## Funcții

O funcție este un bloc de cod autonom care îndeplinește o sarcină specifică. Ea încorporează logica pe care o puteți executa ori de câte ori este necesar.

În loc să scrieți același cod de mai multe ori în programul dvs., îl puteți împacheta într-o funcție și să o apelați ori de câte ori aveți nevoie. Această abordare menține codul curat și face actualizările mult mai ușoare. Gândiți-vă la provocarea de a modifica logica care este răspândită în 20 de locații diferite din codul dvs.

Este esențial să denumiți funcțiile într-un mod descriptiv. O funcție bine denumită comunică clar scopul său – când vedeți `cancelTimer()`, înțelegeți imediat ce face, la fel cum un buton etichetat clar vă spune exact ce se va întâmpla când faceți clic pe el.

## Crearea și apelarea unei funcții

Să examinăm cum să creăm o funcție. Sintaxa urmează un model consecvent:

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

Să descompunem acest lucru:
- Cuvântul cheie `function` îi spune JavaScript-ului "Hei, creez o funcție!"
- `nameOfFunction` este locul unde îi dați funcției un nume descriptiv
- Parantezele `()` sunt locul unde puteți adăuga parametri (vom ajunge la asta în curând)
- Acoladele `{}` conțin codul propriu-zis care rulează atunci când apelați funcția

Să creăm o funcție simplă de salut pentru a vedea acest lucru în acțiune:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

Această funcție afișează "Hello, world!" în consolă. Odată ce ați definit-o, o puteți folosi de câte ori este necesar.

Pentru a executa (sau "apela") funcția, scrieți numele acesteia urmat de paranteze. JavaScript vă permite să definiți funcția înainte sau după ce o apelați – motorul JavaScript va gestiona ordinea execuției.

```javascript
// calling our function
displayGreeting();
```

Când rulați această linie, se execută tot codul din funcția `displayGreeting`, afișând "Hello, world!" în consola browserului. Puteți apela această funcție în mod repetat.

> **Notă:** Ați folosit **metode** pe parcursul acestor lecții. `console.log()` este o metodă – practic o funcție care aparține obiectului `console`. Diferența cheie este că metodele sunt atașate obiectelor, în timp ce funcțiile sunt independente. Mulți dezvoltatori folosesc acești termeni interschimbabil în conversațiile informale.

### Cele mai bune practici pentru funcții

Iată câteva sfaturi pentru a vă ajuta să scrieți funcții excelente:

- Dați funcțiilor nume clare și descriptive – viitorul vostru vă va mulțumi!
- Folosiți **camelCasing** pentru nume compuse din mai multe cuvinte (cum ar fi `calculateTotal` în loc de `calculate_total`)
- Fiecare funcție să fie concentrată pe realizarea unui singur lucru bine

## Transmiterea informațiilor către o funcție

Funcția noastră `displayGreeting` este limitată – poate afișa doar "Hello, world!" pentru toată lumea. Parametrii ne permit să facem funcțiile mai flexibile și mai utile.

**Parametrii** acționează ca niște locuri rezervate unde puteți introduce valori diferite de fiecare dată când utilizați funcția. În acest fel, aceeași funcție poate lucra cu informații diferite la fiecare apel.

Listați parametrii în interiorul parantezelor atunci când definiți funcția, separând mai mulți parametri cu virgule:

```javascript
function name(param, param2, param3) {

}
```

Fiecare parametru acționează ca un loc rezervat – când cineva apelează funcția, va furniza valori reale care vor fi introduse în aceste locuri.

Să actualizăm funcția noastră de salut pentru a accepta numele cuiva:

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

Observați cum folosim ghilimele inversate (`` ` ``) și `${}` pentru a introduce numele direct în mesajul nostru – aceasta se numește un literal de șablon și este o modalitate foarte utilă de a construi șiruri de caractere cu variabile amestecate.

Acum, când apelăm funcția, putem transmite orice nume:

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

JavaScript ia șirul `'Christopher'`, îl atribuie parametrului `name` și creează mesajul personalizat "Hello, Christopher!"

## Valori implicite

Ce se întâmplă dacă dorim să facem unii parametri opționali? Aici intervin valorile implicite!

Să presupunem că dorim ca oamenii să poată personaliza cuvântul de salut, dar dacă nu specifică unul, vom folosi "Hello" ca opțiune implicită. Puteți seta valori implicite folosind semnul egal, la fel ca atunci când setați o variabilă:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

Aici, `name` este încă necesar, dar `salutation` are o valoare de rezervă `'Hello'` dacă nimeni nu oferă un alt salut.

Acum putem apela această funcție în două moduri diferite:

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

În primul apel, JavaScript folosește implicit "Hello", deoarece nu am specificat un salut. În al doilea apel, folosește "Hi", personalizat de noi. Această flexibilitate face funcțiile adaptabile la diferite scenarii.

## Valori returnate

Funcțiile noastre de până acum doar au afișat mesaje în consolă, dar ce se întâmplă dacă doriți ca o funcție să calculeze ceva și să vă dea rezultatul înapoi?

Aici intervin **valorile returnate**. În loc să afișeze ceva, o funcție poate să vă înapoieze o valoare pe care o puteți stoca într-o variabilă sau folosi în alte părți ale codului.

Pentru a trimite o valoare înapoi, folosiți cuvântul cheie `return` urmat de ceea ce doriți să returnați:

```javascript
return myVariable;
```

Iată ceva important: când o funcție ajunge la o instrucțiune `return`, se oprește imediat din rulare și trimite acea valoare înapoi celui care a apelat-o.

Să modificăm funcția noastră de salut pentru a returna mesajul în loc să-l afișeze:

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

Acum, în loc să afișeze salutul, această funcție creează mesajul și ni-l înapoiază.

Pentru a folosi valoarea returnată, o putem stoca într-o variabilă, la fel ca orice altă valoare:

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

Acum `greetingMessage` conține "Hello, Christopher" și îl putem folosi oriunde în codul nostru – pentru a-l afișa pe o pagină web, a-l include într-un e-mail sau a-l transmite unei alte funcții.

## Funcții ca parametri pentru funcții

Funcțiile pot fi transmise ca parametri altor funcții. Deși acest concept poate părea complex la început, este o caracteristică puternică ce permite modele flexibile de programare.

Acest model este foarte comun atunci când doriți să spuneți "când se întâmplă ceva, execută acest alt lucru". De exemplu, "când cronometrul se termină, rulează acest cod" sau "când utilizatorul face clic pe buton, apelează această funcție."

Să analizăm `setTimeout`, care este o funcție încorporată ce așteaptă o anumită perioadă de timp și apoi rulează un cod. Trebuie să îi spunem ce cod să ruleze – un caz perfect pentru transmiterea unei funcții!

Încercați acest cod – după 3 secunde, veți vedea un mesaj:

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

Observați cum transmitem `displayDone` (fără paranteze) către `setTimeout`. Nu apelăm funcția noi înșine – o predăm lui `setTimeout` și spunem "apelează aceasta în 3 secunde."

### Funcții anonime

Uneori aveți nevoie de o funcție doar pentru un singur lucru și nu doriți să îi dați un nume. Gândiți-vă – dacă folosiți o funcție doar o dată, de ce să vă aglomerați codul cu un nume suplimentar?

JavaScript vă permite să creați **funcții anonime** – funcții fără nume pe care le puteți defini exact acolo unde aveți nevoie.

Iată cum putem rescrie exemplul nostru cu cronometrul folosind o funcție anonimă:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

Acest lucru obține același rezultat, dar funcția este definită direct în apelul `setTimeout`, eliminând necesitatea unei declarații separate a funcției.

### Funcții săgeată

JavaScript modern are o modalitate și mai scurtă de a scrie funcții, numită **funcții săgeată**. Acestea folosesc `=>` (care arată ca o săgeată – nu-i așa?) și sunt foarte populare printre dezvoltatori.

Funcțiile săgeată vă permit să săriți peste cuvântul cheie `function` și să scrieți cod mai concis.

Iată exemplul nostru cu cronometrul folosind o funcție săgeată:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

Parantezele `()` sunt locul unde ar merge parametrii (goale în acest caz), apoi urmează săgeata `=>`, și în final corpul funcției în acolade. Acest lucru oferă aceeași funcționalitate cu o sintaxă mai concisă.

### Când să folosiți fiecare strategie

Când ar trebui să folosiți fiecare abordare? O regulă practică: dacă veți folosi funcția de mai multe ori, dați-i un nume și definiți-o separat. Dacă este pentru o utilizare specifică, luați în considerare o funcție anonimă. Atât funcțiile săgeată, cât și sintaxa tradițională sunt alegeri valabile, deși funcțiile săgeată sunt predominante în bazele de cod moderne.

---



## 🚀 Provocare

Puteți explica într-o propoziție diferența dintre funcții și metode? Încercați!

## Provocarea Agentului GitHub Copilot 🚀

Utilizați modul Agent pentru a finaliza următoarea provocare:

**Descriere:** Creați o bibliotecă de utilități matematice care demonstrează diferite concepte de funcții acoperite în această lecție, inclusiv parametri, valori implicite, valori returnate și funcții săgeată.

**Cerere:** Creați un fișier JavaScript numit `mathUtils.js` care să conțină următoarele funcții:
1. O funcție `add` care primește doi parametri și returnează suma lor
2. O funcție `multiply` cu valori implicite pentru parametri (al doilea parametru are valoarea implicită 1)
3. O funcție săgeată `square` care primește un număr și returnează pătratul acestuia
4. O funcție `calculate` care acceptă o altă funcție ca parametru și două numere, apoi aplică funcția acestor numere
5. Demonstrați apelarea fiecărei funcții cu cazuri de testare adecvate

Aflați mai multe despre [modul agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) aici.

## Quiz după lecție
[Quiz după lecție](https://ff-quizzes.netlify.app)

## Recapitulare și studiu individual

Merită [să citiți puțin mai mult despre funcțiile săgeată](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), deoarece sunt din ce în ce mai utilizate în bazele de cod. Exersați scrierea unei funcții, apoi rescrierea acesteia cu această sintaxă.

## Temă

[Distracție cu Funcții](assignment.md)

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de oameni. Nu ne asumăm responsabilitatea pentru neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.