# JavaScript-Grundlagen: Entscheidungen treffen

[![Entscheidungen treffen](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Entscheidungen treffen")

## [Pre-Lecture Quiz](../.github/pre-lecture-quiz.md)

Wenn Sie Entscheidungen treffen und die Reihenfolge steuern, in der Ihr Code ausgeführt wird, ist Ihr Code wiederverwendbar und robust. Dieser Abschnitt behandelt die Syntax zur Steuerung des Datenflusses in JavaScript und ihre Bedeutung bei Verwendung mit booleschen Datentypen.

## Eine kurze Zusammenfassung der Booleschen Werte

Boolesche Werte können nur zwei Werte sein: `true` oder `false`. Boolesche Werte helfen bei der Entscheidung, welche Codezeilen ausgeführt werden sollen, wenn bestimmte Bedingungen erfüllt sind.

Stellen Sie Ihren Booleschen Wert wie folgt auf wahr oder falsch ein:

`let myTrueBool = true`
`let myFalseBool = false`

✅ Boolesche sind nach dem englischen Mathematiker, Philosophen und Logiker George Boole (1815–1864) benannt.

## Vergleichsoperatoren und Boolesche Werte

Operatoren werden verwendet, um Bedingungen durch Vergleiche zu bewerten, die einen Booleschen Wert erzeugen. Das Folgende ist eine Liste von Operatoren, die häufig verwendet werden.

| Symbol | Beschreibung | Beispiel |
| ------ | -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ------- | ------------------ |
| `<` | **Größer als**: Vergleicht zwei Werte und gibt den booleschen Datentyp "true" zurück, wenn der Wert auf der rechten Seite größer als der linke ist `5 < 6 // true` |
| `<=` | **Größer oder gleich**: Vergleicht zwei Werte und gibt den booleschen Datentyp `true` zurück, wenn der Wert auf der rechten Seite größer oder gleich dem linken | ist `5 <= 6 // true` |
| `>` | **Kleiner als**: Vergleicht zwei Werte und gibt den booleschen Datentyp `true` zurück, wenn der Wert auf der linken Seite größer als der rechte ist `5 > 6 // false` |
| `=>` | **Kleiner oder gleich**: Vergleicht zwei Werte und gibt den booleschen Datentyp `true` zurück, wenn der Wert auf der linken Seite größer oder gleich dem rechten | ist `5 => 6 // false` |
| `===` | **Strikte Gleichheit**: Vergleicht zwei Werte und gibt den booleschen Datentyp `true` zurück, wenn die Werte rechts und links gleich sind UND denselben Datentyp haben. | `5 === 6 // false` |
| `!==` | **Ungleichung**: Vergleicht zwei Werte und gibt den entgegengesetzten Booleschen Wert zurück, den ein strikter Gleichheitsoperator | zurückgeben würde `5 !== 6 // true` |

✅ Überprüfen Sie Ihr Wissen, indem Sie einige Vergleiche in die Konsole Ihres Browsers schreiben. Überraschen Sie zurückgegebene Daten?

## If-Anweisung

Die if-Anweisung führt Code zwischen ihren Blöcken aus, wenn die Bedingung erfüllt ist.

```javascript
if (condition){
    //Bedingung war wahr. Der Code in diesem Block wird ausgeführt.
}
```

Logische Operatoren werden häufig verwendet, um die Bedingung zu bilden.

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice){
    //Bedingung war wahr. Der Code in diesem Block wird ausgeführt.
    console.log("Getting a new laptop!");
}
```

## IF..Else Anweisung

Die `else`-Anweisung führt den Code zwischen ihren Blöcken aus, wenn die Bedingung falsch ist. Es ist optional mit einer `if`-Anweisung.


```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice){
    //Bedingung war wahr. Der Code in diesem Block wird ausgeführt.
    console.log("Getting a new laptop!");
}
else{
    //Bedingung war wahr. Der Code in diesem Block wird ausgeführt.
    console.log("Can't afford a new laptop, yet!");
}
```

✅ Testen Sie Ihr Verständnis dieses Codes und des folgenden Codes, indem Sie ihn in einer Browserkonsole ausführen. Ändern Sie die Werte der Variablen currentMoney und LaptopPrice, um das zurückgegebene `console.log()` zu ändern.

## Logische Operatoren und Boolesche Werte

Entscheidungen erfordern möglicherweise mehr als einen Vergleich und können mit logischen Operatoren verknüpft werden, um einen Booleschen Wert zu erzeugen.


| Symbol | Beschreibung | Beispiel |
| ------ | -------------------------------------------------- ----------------------------------------- | -------------------------------------------------- --------------------- |
| `&&` | **Logisches UND**: Vergleicht zwei Boolesche Ausdrücke. Gibt true **nur** zurück, wenn beide Seiten true | sind `(5 > 6) && (5 < 6) // Eine Seite ist falsch, die andere ist wahr. Gibt false` | zurück
| `||` | **Logisches ODER**: Vergleicht zwei Boolesche Ausdrücke. Gibt true zurück, wenn mindestens eine Seite true ist `(5 > 6) || (5 < 6) // Eine Seite ist falsch, die andere ist wahr. Gibt true` | zurück
| `!` | **Logisch NICHT**: Gibt den entgegengesetzten Wert eines Booleschen Ausdrucks | zurück `! (5 > 6) // 5 ist nicht größer als 6, aber "!" wird true zurückgeben` |

## Bedingungen und Entscheidungen mit logischen Operatoren

Logische Operatoren können verwendet werden, um Bedingungen in if..else-Anweisungen zu bilden.


```javascript
let currentMoney;
let laptopPrice;
let laptopDiscountPrice = laptopPrice - (laptopPrice * .20) //Laptop-Preis bei 20 Prozent Rabatt

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice){
    //Bedingung war wahr. Der Code in diesem Block wird ausgeführt.
    console.log("Getting a new laptop!");
}
else {
    //Bedingung war wahr. Der Code in diesem Block wird ausgeführt.
    console.log("Can't afford a new laptop, yet!");
}
```

### Negationsoperator

Sie haben bisher gesehen, wie Sie mit einer `if...else`-Anweisung eine bedingte Logik erstellen können. Alles, was in ein `if` geht, muss als wahr / falsch bewertet werden. Mit dem Operator `!` Können Sie den Ausdruck _negieren_. Es würde so aussehen:

```javascript
if (!condition) {
  // wird ausgeführt, wenn die Bedingung falsch ist
} else {
  // wird ausgeführt, wenn die Bedingung erfüllt ist
}
```

### Ternäre Ausdrücke

`if...else` ist nicht die einzige Möglichkeit, Entscheidungslogik auszudrücken. Sie können auch einen so genannten ternären Operator verwenden. Die Syntax dafür sieht folgendermaßen aus:

```javascript
let variable = condition ? <return this if true> : <return this if false>`
```

Below is a more tangible example:

```javascript
let firstNumber = 20;
let secondNumber = 10
let biggestNumber = firstNumber > secondNumber ? firstNumber: secondNumber;
```

✅ Nehmen Sie sich eine Minute Zeit, um diesen Code einige Male zu lesen. Verstehen Sie, wie diese Operatoren arbeiten?

Das Obige besagt das
- wenn `firstNumber` größer als `secondNumber` ist
- dann `firstNumber` zu `biggestNumber` zuweisen
- sonst `secondNumber` zuweisen.
  
Der ternäre Ausdruck ist nur eine kompakte Art, den folgenden Code zu schreiben:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

---

## 🚀 Herausforderung

Erstellen Sie ein Programm, das zuerst mit logischen Operatoren geschrieben wird, und schreiben Sie es dann mit einem ternären Ausdruck neu. Was ist Ihre bevorzugte Syntax?

## [Quiz nach der Vorlesung](../.github/post-lecture-quiz.md)

## Review & Selbststudium

Lesen Sie mehr über die vielen Operatoren, die dem Benutzer [auf MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators) zur Verfügung stehen.

## Zuordnung

[Operators](assignment.de.md)
