<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d0092f6533ae3ec3adad5b5ece68efaf",
  "translation_date": "2025-10-24T21:53:29+00:00",
  "source_file": "2-js-basics/1-data-types/README.md",
  "language_code": "ro"
}
-->
# Noțiuni de bază JavaScript: Tipuri de date

![Noțiuni de bază JavaScript - Tipuri de date](../../../../translated_images/webdev101-js-datatypes.4cc470179730702c756480d3ffa46507f746e5975ebf80f99fdaaf1cff09a7f4.ro.png)
> Schiță realizată de [Tomomi Imura](https://twitter.com/girlie_mac)

Tipurile de date sunt unul dintre conceptele fundamentale în JavaScript pe care le vei întâlni în fiecare program pe care îl scrii. Gândește-te la tipurile de date ca la sistemul de clasificare folosit de bibliotecarii antici din Alexandria – aceștia aveau locuri specifice pentru sulurile care conțineau poezie, matematică și înregistrări istorice. JavaScript organizează informațiile într-un mod similar, cu categorii diferite pentru diferite tipuri de date.

În această lecție, vom explora tipurile de date de bază care fac ca JavaScript să funcționeze. Vei învăța cum să lucrezi cu numere, text, valori adevărat/fals și vei înțelege de ce alegerea tipului corect este esențială pentru programele tale. Aceste concepte pot părea abstracte la început, dar cu practică, vor deveni naturale.

Înțelegerea tipurilor de date va face ca totul în JavaScript să fie mult mai clar. Așa cum arhitecții trebuie să înțeleagă diferitele materiale de construcție înainte de a construi o catedrală, aceste fundamente vor susține tot ceea ce vei construi de acum înainte.

## Test înainte de lecție
[Test înainte de lecție](https://ff-quizzes.netlify.app/web/)

Această lecție acoperă noțiunile de bază ale JavaScript, limbajul care oferă interactivitate pe web.

> Poți parcurge această lecție pe [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-variables/?WT.mc_id=academic-77807-sagibbon)!

[![Variabile](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Variabile în JavaScript")

[![Tipuri de date în JavaScript](https://img.youtube.com/vi/AWfA95eLdq8/0.jpg)](https://youtube.com/watch?v=AWfA95eLdq8 "Tipuri de date în JavaScript")

> 🎥 Fă clic pe imaginile de mai sus pentru videoclipuri despre variabile și tipuri de date

Să începem cu variabilele și tipurile de date care le populează!

## Variabile

Variabilele sunt blocuri fundamentale în programare. Așa cum alchimiștii medievali foloseau borcane etichetate pentru a stoca diferite substanțe, variabilele îți permit să stochezi informații și să le dai un nume descriptiv, astfel încât să le poți referi mai târziu. Ai nevoie să îți amintești vârsta cuiva? Stocheaz-o într-o variabilă numită `age`. Vrei să urmărești numele unui utilizator? Păstrează-l într-o variabilă numită `userName`.

Ne vom concentra pe abordarea modernă de creare a variabilelor în JavaScript. Tehnicile pe care le vei învăța aici reprezintă ani de evoluție a limbajului și cele mai bune practici dezvoltate de comunitatea de programatori.

Crearea și **declararea** unei variabile are următoarea sintaxă **[cuvânt cheie] [nume]**. Este formată din două părți:

- **Cuvânt cheie**. Folosește `let` pentru variabilele care pot fi modificate sau `const` pentru valorile care rămân neschimbate.
- **Numele variabilei**, acesta este un nume descriptiv pe care îl alegi tu.

✅ Cuvântul cheie `let` a fost introdus în ES6 și oferă variabilei tale așa-numitul _block scope_. Este recomandat să folosești `let` sau `const` în locul vechiului cuvânt cheie `var`. Vom acoperi block scopes mai detaliat în părțile viitoare.

### Sarcină - lucrul cu variabile

1. **Declară o variabilă**. Să începem prin a crea prima noastră variabilă:

    ```javascript
    let myVariable;
    ```

   **Ce realizează acest lucru:**
   - Acest lucru spune JavaScript-ului să creeze o locație de stocare numită `myVariable`
   - JavaScript alocă spațiu în memorie pentru această variabilă
   - Variabila nu are momentan nicio valoare (undefined)

2. **Atribuie o valoare**. Acum să punem ceva în variabila noastră:

    ```javascript
    myVariable = 123;
    ```

   **Cum funcționează atribuirea:**
   - Operatorul `=` atribuie valoarea 123 variabilei noastre
   - Variabila conține acum această valoare în loc să fie undefined
   - Poți referi această valoare în tot codul tău folosind `myVariable`

   > Notă: utilizarea lui `=` în această lecție înseamnă că folosim un "operator de atribuire", utilizat pentru a seta o valoare unei variabile. Nu denotă egalitate.

3. **Fă-o într-un mod inteligent**. De fapt, să combinăm acești doi pași:

    ```javascript
    let myVariable = 123;
    ```

    **Această abordare este mai eficientă:**
    - Declari variabila și îi atribui o valoare într-o singură instrucțiune
    - Aceasta este practica standard printre dezvoltatori
    - Reduce lungimea codului, menținând claritatea

4. **Schimbă-ți părerea**. Ce se întâmplă dacă vrem să stocăm un alt număr?

   ```javascript
   myVariable = 321;
   ```

   **Înțelegerea reatribuirii:**
   - Variabila conține acum 321 în loc de 123
   - Valoarea anterioară este înlocuită – variabilele stochează doar o valoare la un moment dat
   - Această mutabilitate este caracteristica cheie a variabilelor declarate cu `let`

   ✅ Încearcă! Poți scrie JavaScript direct în browserul tău. Deschide o fereastră de browser și navighează la Developer Tools. În consolă, vei găsi un prompt; tastează `let myVariable = 123`, apasă Enter, apoi tastează `myVariable`. Ce se întâmplă? Notă, vei învăța mai multe despre aceste concepte în lecțiile următoare.

## Constante

Uneori ai nevoie să stochezi informații care nu ar trebui să se schimbe niciodată în timpul execuției programului. Gândește-te la constante ca la principiile matematice stabilite de Euclid în Grecia antică – odată dovedite și documentate, au rămas fixe pentru toate referințele viitoare.

Constantele funcționează similar cu variabilele, dar cu o restricție importantă: odată ce le atribui o valoare, aceasta nu poate fi schimbată. Această imutabilitate ajută la prevenirea modificărilor accidentale ale valorilor critice din programul tău.

Declarația și inițializarea unei constante urmează aceleași concepte ca o variabilă, cu excepția cuvântului cheie `const`. Constantele sunt de obicei declarate cu litere mari.

```javascript
const MY_VARIABLE = 123;
```

**Ce face acest cod:**
- **Creează** o constantă numită `MY_VARIABLE` cu valoarea 123
- **Folosește** convenția de denumire cu litere mari pentru constante
- **Previne** orice modificări viitoare ale acestei valori

Constantele au două reguli principale:

- **Trebuie să le dai o valoare imediat** – nu sunt permise constante goale!
- **Nu poți schimba niciodată acea valoare** – JavaScript va genera o eroare dacă încerci. Să vedem ce înseamnă asta:

   **Valoare simplă** - Următorul exemplu NU este permis:
   
      ```javascript
      const PI = 3;
      PI = 4; // nu este permis
      ```

   **Ce trebuie să reții:**
   - **Încercările** de a reatribui o constantă vor cauza o eroare
   - **Protejează** valorile importante de modificări accidentale
   - **Asigură** că valoarea rămâne constantă pe parcursul programului
 
   **Referința obiectului este protejată** - Următorul exemplu NU este permis:
   
      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // nu este permis
      ```

   **Înțelegerea acestor concepte:**
   - **Previne** înlocuirea întregului obiect cu unul nou
   - **Protejează** referința la obiectul original
   - **Menține** identitatea obiectului în memorie

    **Valoarea obiectului nu este protejată** - Următorul exemplu ESTE permis:
    
      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // permis
      ```

      **Analiză a ceea ce se întâmplă aici:**
      - **Modifică** valoarea proprietății din interiorul obiectului
      - **Păstrează** aceeași referință a obiectului
      - **Demonstrează** că conținutul obiectului poate fi schimbat, în timp ce referința rămâne constantă

   > Notă, un `const` înseamnă că referința este protejată de reatribuire. Totuși, valoarea nu este _imutabilă_ și poate fi modificată, mai ales dacă este o construcție complexă, cum ar fi un obiect.

## Tipuri de date

JavaScript organizează informațiile în categorii diferite numite tipuri de date. Acest concept reflectă modul în care savanții antici clasificau cunoștințele – Aristotel a făcut distincție între diferite tipuri de raționament, știind că principiile logice nu pot fi aplicate uniform poeziei, matematicii și filozofiei naturale.

Tipurile de date sunt importante deoarece operațiile diferite funcționează cu diferite tipuri de informații. Așa cum nu poți efectua calcule aritmetice pe numele unei persoane sau să ordonezi alfabetic o ecuație matematică, JavaScript necesită tipul de date potrivit pentru fiecare operație. Înțelegerea acestui lucru previne erorile și face codul tău mai fiabil.

Variabilele pot stoca multe tipuri diferite de valori, cum ar fi numere și text. Aceste tipuri variate de valori sunt cunoscute sub numele de **tipuri de date**. Tipurile de date sunt o parte importantă a dezvoltării software, deoarece ajută dezvoltatorii să ia decizii despre cum ar trebui să fie scris codul și cum ar trebui să funcționeze software-ul. Mai mult, unele tipuri de date au caracteristici unice care ajută la transformarea sau extragerea de informații suplimentare dintr-o valoare.

✅ Tipurile de date sunt denumite și primitive de date JavaScript, deoarece sunt cele mai de bază tipuri de date oferite de limbaj. Există 7 tipuri de date primitive: string, number, bigint, boolean, undefined, null și symbol. Ia un minut pentru a vizualiza ce ar putea reprezenta fiecare dintre aceste primitive. Ce este un `zebra`? Dar `0`? `true`?

### Numere

Numerele sunt cel mai simplu tip de date în JavaScript. Indiferent dacă lucrezi cu numere întregi precum 42, zecimale precum 3.14 sau numere negative precum -5, JavaScript le gestionează uniform.

Îți amintești variabila noastră de mai devreme? Acel 123 pe care l-am stocat era de fapt un tip de date numeric:

```javascript
let myVariable = 123;
```

**Caracteristici cheie:**
- JavaScript recunoaște automat valorile numerice
- Poți efectua operații matematice cu aceste variabile
- Nu este necesară o declarație explicită a tipului

Variabilele pot stoca toate tipurile de numere, inclusiv zecimale sau numere negative. Numerele pot fi utilizate și cu operatori aritmetici, despre care vom discuta în [secțiunea următoare](../../../../2-js-basics/1-data-types).

### Operatorii aritmetici

Operatorii aritmetici îți permit să efectuezi calcule matematice în JavaScript. Acești operatori urmează aceleași principii pe care matematicienii le-au folosit de secole – aceleași simboluri care au apărut în lucrările savanților precum Al-Khwarizmi, care a dezvoltat notația algebrică.

Operatorii funcționează așa cum te-ai aștepta din matematică tradițională: plus pentru adunare, minus pentru scădere și așa mai departe.

Există mai multe tipuri de operatori pe care îi poți folosi pentru a efectua funcții aritmetice, iar câțiva sunt enumerați aici:

| Simbol | Descriere                                                              | Exemplu                          |
| ------ | ---------------------------------------------------------------------- | -------------------------------- |
| `+`    | **Adunare**: Calculează suma a două numere                             | `1 + 2 //răspunsul așteptat este 3`   |
| `-`    | **Scădere**: Calculează diferența dintre două numere                   | `1 - 2 //răspunsul așteptat este -1`  |
| `*`    | **Înmulțire**: Calculează produsul a două numere                       | `1 * 2 //răspunsul așteptat este 2`   |
| `/`    | **Împărțire**: Calculează câtul a două numere                          | `1 / 2 //răspunsul așteptat este 0.5` |
| `%`    | **Rest**: Calculează restul din împărțirea a două numere               | `1 % 2 //răspunsul așteptat este 1`   |

✅ Încearcă! Încearcă o operație aritmetică în consola browserului tău. Te surprind rezultatele?

### Șiruri de caractere

În JavaScript, datele textuale sunt reprezentate ca șiruri de caractere. Termenul "string" provine din conceptul de caractere legate împreună în secvență, la fel cum scribii din mănăstirile medievale conectau literele pentru a forma cuvinte și propoziții în manuscrisele lor.

Șirurile de caractere sunt fundamentale pentru dezvoltarea web. Fiecare bucată de text afișată pe un site web – nume de utilizatori, etichete de butoane, mesaje de eroare, conținut – este tratată ca date de tip șir. Înțelegerea șirurilor este esențială pentru crearea interfețelor funcționale pentru utilizatori.

Șirurile sunt seturi de caractere care se află între ghilimele simple sau duble.

```javascript
'This is a string'
"This is also a string"
let myString = 'This is a string value stored in a variable';
```

**Înțelegerea acestor concepte:**
- **Folosește** ghilimele simple `'` sau duble `"` pentru a defini șiruri
- **Stochează** date textuale care pot include litere, numere și simboluri
- **Atribuie** valori de tip șir variabilelor pentru utilizare ulterioară
- **Necesită** ghilimele pentru a distinge textul de numele variabilelor

Amintește-ți să folosești ghilimele atunci când scrii un șir, altfel JavaScript va presupune că este un nume de variabilă.

### Formatarea șirurilor

Manipularea șirurilor îți permite să combini elemente de text, să încorporezi variabile și să creezi conținut dinamic care răspunde stării programului. Această tehnică îți permite să construiești text în mod programatic.

Adesea, trebuie să unești mai multe șiruri – acest proces se numește concatenare.

Pentru a **concatena** două sau mai multe șiruri, sau pentru a le uni, folosește operatorul `+`.

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!
```

**Pas cu pas, iată ce se întâmplă:**
- **Combină** mai multe șiruri folosind operatorul `+`
- **Unește** șirurile direct fără spații în primul exemplu
- **Adaugă** caractere de spațiu `" "` între șiruri pentru lizibilitate
- **Inserează** semne de punctuație, cum ar fi virgule, pentru a crea o formatare corectă

✅ De ce `1 + 1 = 2` în JavaScript, dar `'1' + '1' = 11?` Gândește-te la asta. Dar `'1' + 1`?

**Șabloane literale** sunt o altă modalitate de a formata șiruri, cu excepția faptului că, în loc de ghilimele, se folosește backtick-ul. Orice nu este text simplu trebuie plasat în locuri rezervate `${ }`. Acest lucru include orice variabile care pot fi șiruri.

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
```

**Să înțelegem fiecare parte:**
- **Folosește** backtick-uri `` ` `` în loc de ghilimele obișnuite pentru a crea șablo
Poți să îți atingi obiectivele de formatare folosind oricare dintre metode, dar șirurile de caractere template respectă spațiile și întreruperile de linie.

✅ Când ai folosi un șir de caractere template în loc de un șir simplu?

### Booleeni

Booleenii reprezintă cea mai simplă formă de date: pot avea doar una dintre cele două valori – `true` sau `false`. Acest sistem de logică binară își are originea în munca lui George Boole, un matematician din secolul al XIX-lea care a dezvoltat algebra booleană.

Deși sunt simpli, booleenii sunt esențiali pentru logica programelor. Ei permit codului să ia decizii bazate pe condiții – dacă un utilizator este autentificat, dacă un buton a fost apăsat sau dacă anumite criterii sunt îndeplinite.

Booleenii pot avea doar două valori: `true` sau `false`. Booleenii pot ajuta la luarea deciziilor cu privire la ce linii de cod ar trebui să ruleze atunci când anumite condiții sunt îndeplinite. În multe cazuri, [operatorii](../../../../2-js-basics/1-data-types) ajută la setarea valorii unui booleean și vei observa adesea variabile care sunt inițializate sau ale căror valori sunt actualizate cu un operator.

```javascript
let myTrueBool = true;
let myFalseBool = false;
```

**În exemplul de mai sus, am:**
- **Creat** o variabilă care stochează valoarea booleană `true`
- **Demonstrat** cum să stocăm valoarea booleană `false`
- **Folosit** exact cuvintele cheie `true` și `false` (fără ghilimele)
- **Pregătit** aceste variabile pentru utilizare în declarații condiționale

✅ O variabilă poate fi considerată 'adevărată' dacă evaluează la valoarea booleană `true`. Interesant este că, în JavaScript, [toate valorile sunt adevărate, cu excepția celor definite ca false](https://developer.mozilla.org/docs/Glossary/Truthy).

---

## Provocarea Agentului GitHub Copilot 🚀

Folosește modul Agent pentru a finaliza următoarea provocare:

**Descriere:** Creează un manager de informații personale care să demonstreze toate tipurile de date JavaScript pe care le-ai învățat în această lecție, gestionând scenarii de date din lumea reală.

**Indicație:** Construiește un program JavaScript care creează un obiect profil de utilizator ce conține: numele unei persoane (string), vârsta (număr), statutul de student (boolean), culorile preferate sub formă de array și un obiect adresă cu proprietăți pentru stradă, oraș și cod poștal. Include funcții pentru a afișa informațiile profilului și pentru a actualiza câmpuri individuale. Asigură-te că demonstrezi concatenarea de șiruri de caractere, șiruri template, operații aritmetice cu vârsta și logica booleană pentru statutul de student.

Află mai multe despre [modul agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) aici.

## 🚀 Provocare

JavaScript are unele comportamente care pot surprinde dezvoltatorii. Iată un exemplu clasic de explorat: încearcă să tastezi acest lucru în consola browserului: `let age = 1; let Age = 2; age == Age` și observă rezultatul. Returnează `false` – poți determina de ce?

Acesta este doar unul dintre multele comportamente ale JavaScript care merită înțelese. Familiarizarea cu aceste particularități te va ajuta să scrii cod mai fiabil și să depanezi problemele mai eficient.

## Test de evaluare post-lectură
[Test de evaluare post-lectură](https://ff-quizzes.netlify.app)

## Recapitulare și studiu individual

Aruncă o privire la [această listă de exerciții JavaScript](https://css-tricks.com/snippets/javascript/) și încearcă unul. Ce ai învățat?

## Temă

[Exerciții de practică pentru tipuri de date](assignment.md)

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de oameni. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.