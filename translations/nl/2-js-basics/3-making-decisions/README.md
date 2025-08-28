<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "888609c48329c280ca2477d2df40f2e5",
  "translation_date": "2025-08-27T20:13:05+00:00",
  "source_file": "2-js-basics/3-making-decisions/README.md",
  "language_code": "nl"
}
-->
# JavaScript Basis: Beslissingen Nemen

![JavaScript Basis - Beslissingen nemen](../../../../translated_images/webdev101-js-decisions.69e1b20f272dd1f0b1cb2f8adaff3ed2a77c4f91db96d8a0594132a353fa189a.nl.png)

> Sketchnote door [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz Voorafgaand aan de Les

[Quiz voorafgaand aan de les](https://ff-quizzes.netlify.app/web/quiz/11)

Beslissingen nemen en de volgorde waarin je code wordt uitgevoerd beheersen, maakt je code herbruikbaar en robuust. Dit gedeelte behandelt de syntax voor het beheersen van de gegevensstroom in JavaScript en het belang ervan bij het gebruik met Booleaanse gegevenstypen.

[![Beslissingen Nemen](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Beslissingen Nemen")

> 🎥 Klik op de afbeelding hierboven voor een video over beslissingen nemen.

> Je kunt deze les volgen op [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon)!

## Een Korte Herhaling over Booleans

Booleans kunnen slechts twee waarden hebben: `true` of `false`. Booleans helpen bij het nemen van beslissingen over welke regels code moeten worden uitgevoerd wanneer aan bepaalde voorwaarden wordt voldaan.

Stel je boolean in op true of false zoals dit:

`let myTrueBool = true`  
`let myFalseBool = false`

✅ Booleans zijn vernoemd naar de Engelse wiskundige, filosoof en logicus George Boole (1815–1864).

## Vergelijkingsoperatoren en Booleans

Operatoren worden gebruikt om voorwaarden te evalueren door vergelijkingen te maken die een Booleaanse waarde opleveren. Hieronder staat een lijst van veelgebruikte operatoren.

| Symbool | Beschrijving                                                                                                                                                   | Voorbeeld          |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `<`     | **Kleiner dan**: Vergelijkt twee waarden en retourneert het Booleaanse gegevenstype `true` als de waarde aan de linkerkant kleiner is dan die aan de rechterkant | `5 < 6 // true`    |
| `<=`    | **Kleiner dan of gelijk aan**: Vergelijkt twee waarden en retourneert het Booleaanse gegevenstype `true` als de waarde aan de linkerkant kleiner dan of gelijk is aan de rechterkant | `5 <= 6 // true`   |
| `>`     | **Groter dan**: Vergelijkt twee waarden en retourneert het Booleaanse gegevenstype `true` als de waarde aan de linkerkant groter is dan die aan de rechterkant  | `5 > 6 // false`   |
| `>=`    | **Groter dan of gelijk aan**: Vergelijkt twee waarden en retourneert het Booleaanse gegevenstype `true` als de waarde aan de linkerkant groter dan of gelijk is aan de rechterkant | `5 >= 6 // false`  |
| `===`   | **Strikte gelijkheid**: Vergelijkt twee waarden en retourneert het Booleaanse gegevenstype `true` als de waarden aan de rechter- en linkerkant gelijk zijn EN hetzelfde gegevenstype hebben | `5 === 6 // false` |
| `!==`   | **Ongelijkheid**: Vergelijkt twee waarden en retourneert de tegenovergestelde Booleaanse waarde van wat een strikte gelijkheidsoperator zou retourneren         | `5 !== 6 // true`  |

✅ Test je kennis door enkele vergelijkingen in de console van je browser te schrijven. Verrast een van de geretourneerde gegevens je?

## If Statement

De if-statement voert de code tussen zijn blokken uit als de voorwaarde waar is.

```javascript
if (condition) {
  //Condition is true. Code in this block will run.
}
```

Logische operatoren worden vaak gebruikt om de voorwaarde te vormen.

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

## If..Else Statement

De `else`-statement voert de code tussen zijn blokken uit wanneer de voorwaarde onwaar is. Het is optioneel bij een `if`-statement.

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

✅ Test je begrip van deze code en de volgende code door deze in een browserconsole uit te voeren. Verander de waarden van de variabelen `currentMoney` en `laptopPrice` om de geretourneerde `console.log()` te wijzigen.

## Switch Statement

De `switch`-statement wordt gebruikt om verschillende acties uit te voeren op basis van verschillende voorwaarden. Gebruik de `switch`-statement om een van de vele codeblokken te selecteren die moeten worden uitgevoerd.

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

✅ Test je begrip van deze code en de volgende code door deze in een browserconsole uit te voeren. Verander de waarden van de variabele `a` om de geretourneerde `console.log()` te wijzigen.

## Logische Operatoren en Booleans

Beslissingen kunnen meer dan één vergelijking vereisen en kunnen worden gecombineerd met logische operatoren om een Booleaanse waarde te produceren.

| Symbool | Beschrijving                                                                                     | Voorbeeld                                                                 |
| ------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `&&`    | **Logische EN**: Vergelijkt twee Booleaanse expressies. Retourneert true **alleen** als beide kanten waar zijn | `(5 > 6) && (5 < 6 ) //Eén kant is onwaar, de andere is waar. Retourneert false` |
| `\|\|`  | **Logische OF**: Vergelijkt twee Booleaanse expressies. Retourneert true als minstens één kant waar is | `(5 > 6) \|\| (5 < 6) //Eén kant is onwaar, de andere is waar. Retourneert true` |
| `!`     | **Logische NIET**: Retourneert de tegenovergestelde waarde van een Booleaanse expressie          | `!(5 > 6) // 5 is niet groter dan 6, maar "!" retourneert true`         |

## Voorwaarden en Beslissingen met Logische Operatoren

Logische operatoren kunnen worden gebruikt om voorwaarden te vormen in if..else-statements.

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

### Negatie-operator

Je hebt tot nu toe gezien hoe je een `if...else`-statement kunt gebruiken om conditionele logica te creëren. Alles wat in een `if` gaat, moet evalueren naar true/false. Door de `!`-operator te gebruiken kun je de expressie _negatief maken_. Het zou er zo uitzien:

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

### Ternaire expressies

`if...else` is niet de enige manier om beslissingslogica uit te drukken. Je kunt ook iets gebruiken dat een ternaire operator wordt genoemd. De syntax ziet er als volgt uit:

```javascript
let variable = condition ? <return this if true> : <return this if false>
```

Hieronder staat een concreter voorbeeld:

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ Neem een minuut om deze code een paar keer door te lezen. Begrijp je hoe deze operatoren werken?

Het bovenstaande stelt dat:

- als `firstNumber` groter is dan `secondNumber`
- wijs dan `firstNumber` toe aan `biggestNumber`
- anders wijs `secondNumber` toe.

De ternaire expressie is gewoon een compacte manier om de onderstaande code te schrijven:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

---

## 🚀 Uitdaging

Maak een programma dat eerst wordt geschreven met logische operatoren en herschrijf het vervolgens met een ternaire expressie. Wat is jouw favoriete syntax?

---

## Quiz Na de Les

[Quiz na de les](https://ff-quizzes.netlify.app/web/quiz/12)

## Herziening & Zelfstudie

Lees meer over de vele operatoren die beschikbaar zijn voor de gebruiker [op MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators).

Bekijk Josh Comeau's geweldige [operator lookup](https://joshwcomeau.com/operator-lookup/)!

## Opdracht

[Operatoren](assignment.md)

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in zijn oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor cruciale informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.