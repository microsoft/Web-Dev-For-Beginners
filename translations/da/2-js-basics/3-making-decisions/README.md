<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f7009631b73556168ca435120a231c98",
  "translation_date": "2025-08-29T08:16:35+00:00",
  "source_file": "2-js-basics/3-making-decisions/README.md",
  "language_code": "da"
}
-->
# JavaScript Grundlæggende: At Træffe Beslutninger

![JavaScript Grundlæggende - At træffe beslutninger](../../../../translated_images/webdev101-js-decisions.69e1b20f272dd1f0b1cb2f8adaff3ed2a77c4f91db96d8a0594132a353fa189a.da.png)

> Sketchnote af [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz Før Lektionen

[Quiz før lektionen](https://ff-quizzes.netlify.app/web/quiz/11)

At træffe beslutninger og kontrollere rækkefølgen, hvori din kode kører, gør din kode genanvendelig og robust. Denne sektion dækker syntaksen for at kontrollere dataflow i JavaScript og dens betydning, når den bruges med Booleske datatyper.

[![At Træffe Beslutninger](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "At Træffe Beslutninger")

> 🎥 Klik på billedet ovenfor for en video om at træffe beslutninger.

> Du kan tage denne lektion på [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon)!

## En Kort Genopfriskning af Booleans

Booleans kan kun have to værdier: `true` eller `false`. Booleans hjælper med at træffe beslutninger om, hvilke linjer kode der skal køres, når visse betingelser er opfyldt.

Sæt din boolean til at være true eller false sådan her:

`let myTrueBool = true`  
`let myFalseBool = false`

✅ Booleans er opkaldt efter den engelske matematiker, filosof og logiker George Boole (1815–1864).

## Sammenligningsoperatorer og Booleans

Operatorer bruges til at evaluere betingelser ved at lave sammenligninger, der skaber en Boolean-værdi. Følgende er en liste over ofte anvendte operatorer.

| Symbol | Beskrivelse                                                                                                                                                   | Eksempel           |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `<`    | **Mindre end**: Sammenligner to værdier og returnerer `true` Boolean-datatype, hvis værdien på venstre side er mindre end højre                               | `5 < 6 // true`    |
| `<=`   | **Mindre end eller lig med**: Sammenligner to værdier og returnerer `true` Boolean-datatype, hvis værdien på venstre side er mindre end eller lig med højre   | `5 <= 6 // true`   |
| `>`    | **Større end**: Sammenligner to værdier og returnerer `true` Boolean-datatype, hvis værdien på venstre side er større end højre                              | `5 > 6 // false`   |
| `>=`   | **Større end eller lig med**: Sammenligner to værdier og returnerer `true` Boolean-datatype, hvis værdien på venstre side er større end eller lig med højre  | `5 >= 6 // false`  |
| `===`  | **Streng lighed**: Sammenligner to værdier og returnerer `true` Boolean-datatype, hvis værdierne på højre og venstre er ens OG har samme datatype.           | `5 === 6 // false` |
| `!==`  | **Ulighed**: Sammenligner to værdier og returnerer den modsatte Boolean-værdi af, hvad en streng lighedsoperator ville returnere                             | `5 !== 6 // true`  |

✅ Test din viden ved at skrive nogle sammenligninger i din browsers konsol. Er der noget af det returnerede data, der overrasker dig?

## If-Sætning

If-sætningen vil køre kode mellem sine blokke, hvis betingelsen er sand.

```javascript
if (condition) {
  //Condition is true. Code in this block will run.
}
```

Logiske operatorer bruges ofte til at danne betingelsen.

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

## If..Else-Sætning

`else`-sætningen vil køre koden mellem sine blokke, når betingelsen er falsk. Den er valgfri med en `if`-sætning.

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

✅ Test din forståelse af denne kode og den følgende kode ved at køre den i en browserkonsol. Ændr værdierne af variablerne currentMoney og laptopPrice for at ændre den returnerede `console.log()`.

## Switch-Sætning

`switch`-sætningen bruges til at udføre forskellige handlinger baseret på forskellige betingelser. Brug `switch`-sætningen til at vælge en af mange kodeblokke, der skal udføres.

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

✅ Test din forståelse af denne kode og den følgende kode ved at køre den i en browserkonsol. Ændr værdierne af variablen a for at ændre den returnerede `console.log()`.

## Logiske Operatorer og Booleans

Beslutninger kan kræve mere end én sammenligning og kan kædes sammen med logiske operatorer for at producere en Boolean-værdi.

| Symbol | Beskrivelse                                                                                     | Eksempel                                                                 |
| ------ | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `&&`   | **Logisk OG**: Sammenligner to Boolean-udtryk. Returnerer true **kun** hvis begge sider er true | `(5 > 6) && (5 < 6 ) //En side er falsk, den anden er sand. Returnerer false` |
| `\|\|` | **Logisk ELLER**: Sammenligner to Boolean-udtryk. Returnerer true, hvis mindst én side er true  | `(5 > 6) \|\| (5 < 6) //En side er falsk, den anden er sand. Returnerer true` |
| `!`    | **Logisk IKKE**: Returnerer den modsatte værdi af et Boolean-udtryk                             | `!(5 > 6) // 5 er ikke større end 6, men "!" vil returnere true`         |

## Betingelser og Beslutninger med Logiske Operatorer

Logiske operatorer kan bruges til at danne betingelser i if..else-sætninger.

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

### Negationsoperator

Du har indtil videre set, hvordan du kan bruge en `if...else`-sætning til at skabe betinget logik. Alt, der går ind i en `if`, skal evaluere til true/false. Ved at bruge `!`-operatoren kan du _negere_ udtrykket. Det ville se sådan ud:

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

### Ternære Udtryk

`if...else` er ikke den eneste måde at udtrykke beslutningslogik på. Du kan også bruge noget, der kaldes en ternær operator. Syntaksen for den ser sådan ud:

```javascript
let variable = condition ? <return this if true> : <return this if false>
```

Nedenfor er et mere konkret eksempel:

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ Tag et øjeblik til at læse denne kode et par gange. Forstår du, hvordan disse operatorer fungerer?

Ovenstående siger, at

- hvis `firstNumber` er større end `secondNumber`
- så tildel `firstNumber` til `biggestNumber`
- ellers tildel `secondNumber`.

Det ternære udtryk er blot en kompakt måde at skrive koden nedenfor på:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

---

## 🚀 Udfordring

Lav et program, der først er skrevet med logiske operatorer, og omskriv det derefter ved hjælp af et ternært udtryk. Hvad er din foretrukne syntaks?

---

## Quiz Efter Lektionen

[Quiz efter lektionen](https://ff-quizzes.netlify.app/web/quiz/12)

## Gennemgang & Selvstudie

Læs mere om de mange operatorer, der er tilgængelige for brugeren [på MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators).

Gå igennem Josh Comeaus fantastiske [operator-opslag](https://joshwcomeau.com/operator-lookup/)!

## Opgave

[Operatorer](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi påtager os ikke ansvar for eventuelle misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.