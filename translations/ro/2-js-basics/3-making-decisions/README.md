<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "90a3c32c3377f83ab750c2447c77ab98",
  "translation_date": "2025-10-24T21:55:15+00:00",
  "source_file": "2-js-basics/3-making-decisions/README.md",
  "language_code": "ro"
}
-->
# Bazele JavaScript: Luarea deciziilor

![Bazele JavaScript - Luarea deciziilor](../../../../translated_images/webdev101-js-decisions.69e1b20f272dd1f0b1cb2f8adaff3ed2a77c4f91db96d8a0594132a353fa189a.ro.png)

> Ilustrație de [Tomomi Imura](https://twitter.com/girlie_mac)

Te-ai întrebat vreodată cum iau aplicațiile decizii inteligente? De exemplu, cum alege un sistem de navigație ruta cea mai rapidă sau cum decide un termostat când să pornească încălzirea? Acesta este conceptul fundamental al luării deciziilor în programare.

Așa cum motorul analitic al lui Charles Babbage a fost conceput să urmeze diferite secvențe de operații în funcție de condiții, programele moderne JavaScript trebuie să facă alegeri bazate pe circumstanțe variabile. Această abilitate de a ramifica și de a lua decizii este ceea ce transformă codul static în aplicații responsive și inteligente.

În această lecție, vei învăța cum să implementezi logica condițională în programele tale. Vom explora instrucțiunile condiționale, operatorii de comparație și expresiile logice care permit codului tău să evalueze situații și să răspundă corespunzător.

## Test înainte de lecție

[Test înainte de lecție](https://ff-quizzes.netlify.app/web/quiz/11)

Abilitatea de a lua decizii și de a controla fluxul programului este un aspect fundamental al programării. Această secțiune acoperă modul de control al căii de execuție a programelor JavaScript folosind valori booleene și logica condițională.

[![Luarea deciziilor](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Luarea deciziilor")

> 🎥 Fă clic pe imaginea de mai sus pentru un videoclip despre luarea deciziilor.

> Poți parcurge această lecție pe [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon)!

## O recapitulare rapidă despre Booleeni

Înainte de a explora luarea deciziilor, să revizuim valorile booleene din lecția anterioară. Denumite după matematicianul George Boole, aceste valori reprezintă stări binare – fie `true`, fie `false`. Nu există ambiguitate, nu există cale de mijloc.

Aceste valori binare formează fundația logicii computaționale. Fiecare decizie pe care o ia programul tău se reduce, în cele din urmă, la o evaluare booleană.

Crearea variabilelor booleene este simplă:

```javascript
let myTrueBool = true;
let myFalseBool = false;
```

Aceasta creează două variabile cu valori booleene explicite.

✅ Booleenii sunt denumiți după matematicianul, filosoful și logicianul englez George Boole (1815–1864).

## Operatorii de comparație și Booleenii

În practică, rareori vei seta manual valori booleene. În schimb, le vei genera evaluând condiții: "Este acest număr mai mare decât celălalt?" sau "Sunt aceste valori egale?"

Operatorii de comparație permit aceste evaluări. Ei compară valorile și returnează rezultate booleene bazate pe relația dintre operanzi.

| Simbol | Descriere                                                                                                                                                   | Exemplu            |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `<`    | **Mai mic decât**: Compară două valori și returnează tipul de date boolean `true` dacă valoarea din partea stângă este mai mică decât cea din dreapta         | `5 < 6 // true`    |
| `<=`   | **Mai mic sau egal cu**: Compară două valori și returnează tipul de date boolean `true` dacă valoarea din partea stângă este mai mică sau egală cu cea din dreapta | `5 <= 6 // true`   |
| `>`    | **Mai mare decât**: Compară două valori și returnează tipul de date boolean `true` dacă valoarea din partea stângă este mai mare decât cea din dreapta        | `5 > 6 // false`   |
| `>=`   | **Mai mare sau egal cu**: Compară două valori și returnează tipul de date boolean `true` dacă valoarea din partea stângă este mai mare sau egală cu cea din dreapta | `5 >= 6 // false`  |
| `===`  | **Egalitate strictă**: Compară două valori și returnează tipul de date boolean `true` dacă valorile din dreapta și stânga sunt egale ȘI de același tip de date | `5 === 6 // false` |
| `!==`  | **Inegalitate**: Compară două valori și returnează valoarea booleană opusă celei pe care ar returna-o operatorul de egalitate strictă                         | `5 !== 6 // true`  |

✅ Verifică-ți cunoștințele scriind câteva comparații în consola browserului. Te surprinde vreun rezultat returnat?

## Instrucțiunea If

Instrucțiunea `if` este ca și cum ai pune o întrebare în codul tău. "Dacă această condiție este adevărată, atunci fă acest lucru." Este probabil cel mai important instrument pe care îl vei folosi pentru a lua decizii în JavaScript.

Iată cum funcționează:

```javascript
if (condition) {
  // Condition is true. Code in this block will run.
}
```

Condiția merge în interiorul parantezelor, iar dacă este `true`, JavaScript rulează codul din interiorul acoladelor. Dacă este `false`, JavaScript pur și simplu sare peste acel bloc.

De obicei, vei folosi operatorii de comparație pentru a crea aceste condiții. Să vedem un exemplu practic:

```javascript
let currentMoney = 1000;
let laptopPrice = 800;

if (currentMoney >= laptopPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

Deoarece `1000 >= 800` evaluează la `true`, codul din interiorul blocului se execută, afișând "Getting a new laptop!" în consolă.

## Instrucțiunea If..Else

Dar ce se întâmplă dacă vrei ca programul tău să facă ceva diferit atunci când condiția este falsă? Aici intervine `else` – este ca și cum ai avea un plan de rezervă.

Instrucțiunea `else` îți oferă o modalitate de a spune "dacă această condiție nu este adevărată, fă acest alt lucru în schimb."

```javascript
let currentMoney = 500;
let laptopPrice = 800;

if (currentMoney >= laptopPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  // Condition is false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

Acum, deoarece `500 >= 800` este `false`, JavaScript sare peste primul bloc și rulează blocul `else`. Vei vedea "Can't afford a new laptop, yet!" în consolă.

✅ Testează-ți înțelegerea acestui cod și a codului următor rulându-l în consola browserului. Schimbă valorile variabilelor currentMoney și laptopPrice pentru a modifica rezultatul `console.log()`.

## Instrucțiunea Switch

Uneori trebuie să compari o valoare cu mai multe opțiuni. Deși ai putea înlănțui mai multe instrucțiuni `if..else`, această abordare devine greoaie. Instrucțiunea `switch` oferă o structură mai clară pentru gestionarea mai multor valori discrete.

Conceptul seamănă cu sistemele mecanice de comutare utilizate în schimburile telefonice timpurii – o valoare de intrare determină care cale specifică urmează execuția.

```javascript
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

Iată cum este structurată:
- JavaScript evaluează expresia o singură dată
- Caută fiecare `case` pentru a găsi o potrivire
- Când găsește o potrivire, rulează acel bloc de cod
- `break` spune JavaScript-ului să se oprească și să iasă din switch
- Dacă niciun caz nu se potrivește, rulează blocul `default` (dacă există unul)

```javascript
// Program using switch statement for day of week
let dayNumber = 2;
let dayName;

switch (dayNumber) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  default:
    dayName = "Unknown day";
    break;
}
console.log(`Today is ${dayName}`);
```

În acest exemplu, JavaScript vede că `dayNumber` este `2`, găsește potrivirea `case 2`, setează `dayName` la "Tuesday", și apoi iese din switch. Rezultatul? "Today is Tuesday" este afișat în consolă.

✅ Testează-ți înțelegerea acestui cod și a codului următor rulându-l în consola browserului. Schimbă valorile variabilei a pentru a modifica rezultatul `console.log()`.

## Operatorii logici și Booleenii

Deciziile complexe necesită adesea evaluarea simultană a mai multor condiții. Așa cum algebra booleană permite matematicienilor să combine expresii logice, programarea oferă operatori logici pentru a conecta mai multe condiții booleene.

Acești operatori permit o logică condițională sofisticată prin combinarea evaluărilor simple de tip true/false.

| Simbol | Descriere                                                                                     | Exemplu                                                                 |
| ------ | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `&&`   | **ȘI logic**: Compară două expresii booleene. Returnează true **doar** dacă ambele părți sunt adevărate | `(5 > 3) && (5 < 10) // Ambele părți sunt adevărate. Returnează true` |
| `\|\|` | **SAU logic**: Compară două expresii booleene. Returnează true dacă cel puțin o parte este adevărată | `(5 > 10) \|\| (5 < 10) // O parte este falsă, cealaltă este adevărată. Returnează true` |
| `!`    | **NU logic**: Returnează valoarea opusă a unei expresii booleene                             | `!(5 > 10) // 5 nu este mai mare decât 10, deci "!" o face adevărată`         |

Acești operatori îți permit să combini condiții în moduri utile:
- ȘI (`&&`) înseamnă că ambele condiții trebuie să fie adevărate
- SAU (`||`) înseamnă că cel puțin o condiție trebuie să fie adevărată  
- NU (`!`) transformă true în false (și invers)

## Condiții și decizii cu operatori logici

Să vedem acești operatori logici în acțiune cu un exemplu mai realist:

```javascript
let currentMoney = 600;
let laptopPrice = 800;
let laptopDiscountPrice = laptopPrice - (laptopPrice * 0.2); // Laptop price at 20 percent off

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  // Condition is false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

În acest exemplu: calculăm un preț redus cu 20% (640), apoi evaluăm dacă fondurile disponibile acoperă fie prețul complet, fie prețul redus. Deoarece 600 îndeplinește pragul prețului redus de 640, condiția este evaluată ca adevărată.

### Operatorul de negație

Uneori este mai ușor să te gândești la momentul în care ceva NU este adevărat. De exemplu, în loc să întrebi "Este utilizatorul autentificat?", ai putea întreba "Nu este utilizatorul autentificat?" Operatorul semnului exclamării (`!`) inversează logica pentru tine.

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

Operatorul `!` este ca și cum ai spune "opusul a..." – dacă ceva este `true`, `!` îl face `false`, și invers.

### Expresii ternare

Pentru atribuiri condiționale simple, JavaScript oferă **operatorul ternar**. Această sintaxă concisă îți permite să scrii o expresie condițională într-o singură linie, utilă atunci când trebuie să atribui una dintre cele două valori pe baza unei condiții.

```javascript
let variable = condition ? returnThisIfTrue : returnThisIfFalse;
```

Se citește ca o întrebare: "Este această condiție adevărată? Dacă da, folosește această valoare. Dacă nu, folosește cealaltă valoare."

Mai jos este un exemplu mai concret:

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ Ia un minut pentru a citi acest cod de câteva ori. Înțelegi cum funcționează acești operatori?

Iată ce spune această linie: "Este `firstNumber` mai mare decât `secondNumber`? Dacă da, pune `firstNumber` în `biggestNumber`. Dacă nu, pune `secondNumber` în `biggestNumber`."

Operatorul ternar este doar o modalitate mai scurtă de a scrie această instrucțiune tradițională `if..else`:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

Ambele abordări produc rezultate identice. Operatorul ternar oferă concizie, în timp ce structura tradițională if-else poate fi mai ușor de citit pentru condiții complexe.

---

## 🚀 Provocare

Creează un program care este scris mai întâi cu operatori logici, iar apoi rescris folosind o expresie ternară. Care este sintaxa ta preferată?

---

## Provocarea Agentului GitHub Copilot 🚀

Folosește modul Agent pentru a finaliza următoarea provocare:

**Descriere:** Creează un calculator de note cuprinzător care să demonstreze mai multe concepte de luare a deciziilor din această lecție, inclusiv instrucțiuni if-else, instrucțiuni switch, operatori logici și expresii ternare.

**Cerere:** Scrie un program JavaScript care să preia nota numerică a unui student (0-100) și să determine nota literară folosind următoarele criterii:
- A: 90-100
- B: 80-89  
- C: 70-79
- D: 60-69
- F: Sub 60

Cerințe:
1. Folosește o instrucțiune if-else pentru a determina nota literară
2. Folosește operatori logici pentru a verifica dacă studentul trece (nota >= 60) ȘI are performanțe deosebite (nota >= 90)
3. Folosește o instrucțiune switch pentru a oferi feedback specific pentru fiecare notă literară
4. Folosește un operator ternar pentru a determina dacă studentul este eligibil pentru cursul următor (nota >= 70)
5. Include validarea intrării pentru a te asigura că nota este între 0 și 100

Testează programul cu diverse note, inclusiv cazuri limită precum 59, 60, 89, 90 și intrări invalide.

Află mai multe despre [modul agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) aici.

## Test după lecție

[Test după lecție](https://ff-quizzes.netlify.app/web/quiz/12)

## Recapitulare și studiu individual

Citește mai multe despre numeroșii operatori disponibili utilizatorului [pe MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators).

Parcurge minunatul [operator lookup](https://joshwcomeau.com/operator-lookup/) al lui Josh Comeau!

## Temă

[Operatori](assignment.md)

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de oameni. Nu ne asumăm responsabilitatea pentru neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.