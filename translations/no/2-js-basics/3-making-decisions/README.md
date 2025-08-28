<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "888609c48329c280ca2477d2df40f2e5",
  "translation_date": "2025-08-26T21:41:32+00:00",
  "source_file": "2-js-basics/3-making-decisions/README.md",
  "language_code": "no"
}
-->
# JavaScript Grunnleggende: Ta Beslutninger

![JavaScript Grunnleggende - Ta beslutninger](../../../../translated_images/webdev101-js-decisions.69e1b20f272dd1f0b1cb2f8adaff3ed2a77c4f91db96d8a0594132a353fa189a.no.png)

> Sketchnote av [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz før forelesning

[Quiz før forelesning](https://ff-quizzes.netlify.app/web/quiz/11)

Å ta beslutninger og kontrollere rekkefølgen på hvordan koden din kjører gjør koden din gjenbrukbar og robust. Denne delen dekker syntaksen for å kontrollere dataflyt i JavaScript og dens betydning når den brukes med boolske datatyper.

[![Ta Beslutninger](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Ta Beslutninger")

> 🎥 Klikk på bildet over for en video om å ta beslutninger.

> Du kan ta denne leksjonen på [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon)!

## En Kort Oppsummering om Booleans

Booleans kan kun ha to verdier: `true` eller `false`. Booleans hjelper med å ta beslutninger om hvilke linjer med kode som skal kjøres når visse betingelser er oppfylt.

Sett din boolean til å være true eller false slik:

`let myTrueBool = true`  
`let myFalseBool = false`

✅ Booleans er oppkalt etter den engelske matematikeren, filosofen og logikeren George Boole (1815–1864).

## Sammenligningsoperatorer og Booleans

Operatorer brukes til å evaluere betingelser ved å gjøre sammenligninger som vil skape en boolsk verdi. Følgende er en liste over operatorer som ofte brukes.

| Symbol | Beskrivelse                                                                                                                                                   | Eksempel           |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `<`    | **Mindre enn**: Sammenligner to verdier og returnerer den boolske verdien `true` hvis verdien på venstre side er mindre enn høyre                              | `5 < 6 // true`    |
| `<=`   | **Mindre enn eller lik**: Sammenligner to verdier og returnerer den boolske verdien `true` hvis verdien på venstre side er mindre enn eller lik høyre          | `5 <= 6 // true`   |
| `>`    | **Større enn**: Sammenligner to verdier og returnerer den boolske verdien `true` hvis verdien på venstre side er større enn høyre                             | `5 > 6 // false`   |
| `>=`   | **Større enn eller lik**: Sammenligner to verdier og returnerer den boolske verdien `true` hvis verdien på venstre side er større enn eller lik høyre          | `5 >= 6 // false`  |
| `===`  | **Strict likhet**: Sammenligner to verdier og returnerer den boolske verdien `true` hvis verdiene på høyre og venstre er like OG har samme datatype            | `5 === 6 // false` |
| `!==`  | **Ulikhet**: Sammenligner to verdier og returnerer den motsatte boolske verdien av hva en strict likhetsoperator ville returnere                              | `5 !== 6 // true`  |

✅ Test kunnskapen din ved å skrive noen sammenligninger i nettleserens konsoll. Overrasker noen av de returnerte dataene deg?

## If-Setning

If-setningen vil kjøre koden mellom blokkene hvis betingelsen er sann.

```javascript
if (condition) {
  //Condition is true. Code in this block will run.
}
```

Logiske operatorer brukes ofte til å danne betingelsen.

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

## If..Else-Setning

`else`-setningen vil kjøre koden mellom blokkene når betingelsen er falsk. Den er valgfri med en `if`-setning.

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  //Condition is false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

✅ Test forståelsen din av denne koden og den følgende koden ved å kjøre den i en nettleserkonsoll. Endre verdiene til variablene currentMoney og laptopPrice for å endre den returnerte `console.log()`.

## Switch-Setning

`switch`-setningen brukes til å utføre forskjellige handlinger basert på forskjellige betingelser. Bruk `switch`-setningen for å velge én av mange kodeblokker som skal utføres.

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

```javascript
// program using switch statement
let a = 2;

switch (a) {
  case 1:
    a = "one";
    break;
  case 2:
    a = "two";
    break;
  default:
    a = "not found";
    break;
}
console.log(`The value is ${a}`);
```

✅ Test forståelsen din av denne koden og den følgende koden ved å kjøre den i en nettleserkonsoll. Endre verdiene til variabelen a for å endre den returnerte `console.log()`.

## Logiske Operatorer og Booleans

Beslutninger kan kreve mer enn én sammenligning, og kan kobles sammen med logiske operatorer for å produsere en boolsk verdi.

| Symbol | Beskrivelse                                                                                     | Eksempel                                                                 |
| ------ | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `&&`   | **Logisk OG**: Sammenligner to boolske uttrykk. Returnerer true **kun** hvis begge sider er true | `(5 > 6) && (5 < 6 ) //Én side er falsk, den andre er sann. Returnerer false` |
| `\|\|` | **Logisk ELLER**: Sammenligner to boolske uttrykk. Returnerer true hvis minst én side er sann   | `(5 > 6) \|\| (5 < 6) //Én side er falsk, den andre er sann. Returnerer true` |
| `!`    | **Logisk IKKE**: Returnerer den motsatte verdien av et boolsk uttrykk                           | `!(5 > 6) // 5 er ikke større enn 6, men "!" vil returnere true`         |

## Betingelser og Beslutninger med Logiske Operatorer

Logiske operatorer kan brukes til å danne betingelser i if..else-setninger.

```javascript
let currentMoney;
let laptopPrice;
let laptopDiscountPrice = laptopPrice - laptopPrice * 0.2; //Laptop price at 20 percent off

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  //Condition is true. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

### Negasjonsoperator

Du har så langt sett hvordan du kan bruke en `if...else`-setning for å lage betinget logikk. Alt som går inn i en `if` må evalueres til true/false. Ved å bruke `!`-operatoren kan du _nekte_ uttrykket. Det vil se slik ut:

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

### Ternære Uttrykk

`if...else` er ikke den eneste måten å uttrykke beslutningslogikk på. Du kan også bruke noe som kalles en ternær operator. Syntaksen for den ser slik ut:

```javascript
let variable = condition ? <return this if true> : <return this if false>
```

Nedenfor er et mer konkret eksempel:

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ Ta et øyeblikk til å lese denne koden noen ganger. Forstår du hvordan disse operatorene fungerer?

Det ovenstående sier at

- hvis `firstNumber` er større enn `secondNumber`
- så tilordne `firstNumber` til `biggestNumber`
- ellers tilordne `secondNumber`.

Det ternære uttrykket er bare en kompakt måte å skrive koden nedenfor på:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

---

## 🚀 Utfordring

Lag et program som først er skrevet med logiske operatorer, og skriv det deretter om ved hjelp av et ternært uttrykk. Hva er din foretrukne syntaks?

---

## Quiz etter forelesning

[Quiz etter forelesning](https://ff-quizzes.netlify.app/web/quiz/12)

## Gjennomgang & Selvstudium

Les mer om de mange operatorene som er tilgjengelige for brukeren [på MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators).

Gå gjennom Josh Comeaus fantastiske [operator lookup](https://joshwcomeau.com/operator-lookup/)!

## Oppgave

[Operatorer](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vær oppmerksom på at automatiske oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.