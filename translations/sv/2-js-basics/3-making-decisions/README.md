<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "888609c48329c280ca2477d2df40f2e5",
  "translation_date": "2025-08-26T21:40:48+00:00",
  "source_file": "2-js-basics/3-making-decisions/README.md",
  "language_code": "sv"
}
-->
# JavaScript-grunder: Att fatta beslut

![JavaScript Basics - Making decisions](../../../../translated_images/webdev101-js-decisions.69e1b20f272dd1f0b1cb2f8adaff3ed2a77c4f91db96d8a0594132a353fa189a.sv.png)

> Sketchnote av [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz före föreläsningen

[Quiz före föreläsningen](https://ff-quizzes.netlify.app/web/quiz/11)

Att fatta beslut och kontrollera ordningen i vilken din kod körs gör din kod återanvändbar och robust. Den här sektionen täcker syntaxen för att kontrollera dataflödet i JavaScript och dess betydelse när det används med Booleska datatyper.

[![Att fatta beslut](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Att fatta beslut")

> 🎥 Klicka på bilden ovan för en video om att fatta beslut.

> Du kan ta denna lektion på [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon)!

## En kort återblick på Booleans

Booleans kan bara ha två värden: `true` eller `false`. Booleans hjälper till att fatta beslut om vilka kodrader som ska köras när vissa villkor är uppfyllda.

Sätt din boolean till att vara true eller false så här:

`let myTrueBool = true`  
`let myFalseBool = false`

✅ Booleans är uppkallade efter den engelska matematikern, filosofen och logikern George Boole (1815–1864).

## Jämförelseoperatorer och Booleans

Operatorer används för att utvärdera villkor genom att göra jämförelser som skapar ett Boolean-värde. Följande är en lista över ofta använda operatorer.

| Symbol | Beskrivning                                                                                                                                                   | Exempel            |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `<`    | **Mindre än**: Jämför två värden och returnerar `true` om värdet på vänster sida är mindre än det på höger                                                    | `5 < 6 // true`    |
| `<=`   | **Mindre än eller lika med**: Jämför två värden och returnerar `true` om värdet på vänster sida är mindre än eller lika med det på höger                      | `5 <= 6 // true`   |
| `>`    | **Större än**: Jämför två värden och returnerar `true` om värdet på vänster sida är större än det på höger                                                    | `5 > 6 // false`   |
| `>=`   | **Större än eller lika med**: Jämför två värden och returnerar `true` om värdet på vänster sida är större än eller lika med det på höger                      | `5 >= 6 // false`  |
| `===`  | **Strikt likhet**: Jämför två värden och returnerar `true` om värdena på höger och vänster är lika OCH har samma datatyp                                      | `5 === 6 // false` |
| `!==`  | **Olikhet**: Jämför två värden och returnerar motsatsen till vad en strikt likhetsoperator skulle returnera                                                  | `5 !== 6 // true`  |

✅ Testa din kunskap genom att skriva några jämförelser i din webbläsares konsol. Överraskar något av de returnerade värdena dig?

## If-sats

If-satsen kör koden mellan sina block om villkoret är sant.

```javascript
if (condition) {
  //Condition is true. Code in this block will run.
}
```

Logiska operatorer används ofta för att skapa villkoret.

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

## If..Else-sats

`else`-satsen kör koden mellan sina block när villkoret är falskt. Den är valfri med en `if`-sats.

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

✅ Testa din förståelse av denna kod och följande kod genom att köra den i en webbläsares konsol. Ändra värdena på variablerna currentMoney och laptopPrice för att ändra det returnerade `console.log()`.

## Switch-sats

`switch`-satsen används för att utföra olika åtgärder baserat på olika villkor. Använd `switch`-satsen för att välja ett av många kodblock som ska köras.

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

✅ Testa din förståelse av denna kod och följande kod genom att köra den i en webbläsares konsol. Ändra värdena på variabeln a för att ändra det returnerade `console.log()`.

## Logiska operatorer och Booleans

Beslut kan kräva mer än en jämförelse och kan kopplas ihop med logiska operatorer för att producera ett Boolean-värde.

| Symbol | Beskrivning                                                                                     | Exempel                                                                 |
| ------ | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `&&`   | **Logisk OCH**: Jämför två Booleska uttryck. Returnerar true **endast** om båda sidor är sanna   | `(5 > 6) && (5 < 6 ) //En sida är falsk, den andra är sann. Returnerar falskt` |
| `\|\|` | **Logisk ELLER**: Jämför två Booleska uttryck. Returnerar true om minst en sida är sann          | `(5 > 6) \|\| (5 < 6) //En sida är falsk, den andra är sann. Returnerar sant` |
| `!`    | **Logisk INTE**: Returnerar motsatt värde av ett Booleskt uttryck                               | `!(5 > 6) // 5 är inte större än 6, men "!" kommer att returnera sant`         |

## Villkor och beslut med logiska operatorer

Logiska operatorer kan användas för att skapa villkor i if..else-satser.

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

Du har hittills sett hur du kan använda en `if...else`-sats för att skapa logik baserad på villkor. Allt som går in i en `if` måste utvärderas till sant/falskt. Genom att använda `!`-operatorn kan du _negera_ uttrycket. Det skulle se ut så här:

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

### Ternära uttryck

`if...else` är inte det enda sättet att uttrycka logik baserad på villkor. Du kan också använda något som kallas en ternär operator. Syntaxen för den ser ut så här:

```javascript
let variable = condition ? <return this if true> : <return this if false>
```

Nedan är ett mer konkret exempel:

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ Ta en minut att läsa denna kod några gånger. Förstår du hur dessa operatorer fungerar?

Ovanstående säger att:

- om `firstNumber` är större än `secondNumber`
- tilldela då `firstNumber` till `biggestNumber`
- annars tilldela `secondNumber`.

Det ternära uttrycket är bara ett kompakt sätt att skriva koden nedan:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

---

## 🚀 Utmaning

Skapa ett program som först skrivs med logiska operatorer och sedan skrivs om med ett ternärt uttryck. Vilken syntax föredrar du?

---

## Quiz efter föreläsningen

[Quiz efter föreläsningen](https://ff-quizzes.netlify.app/web/quiz/12)

## Granskning & Självstudier

Läs mer om de många operatorer som finns tillgängliga för användaren [på MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators).

Gå igenom Josh Comeaus fantastiska [operator lookup](https://joshwcomeau.com/operator-lookup/)!

## Uppgift

[Operatorer](assignment.md)

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiserade översättningar kan innehålla fel eller brister. Det ursprungliga dokumentet på dess originalspråk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som kan uppstå vid användning av denna översättning.