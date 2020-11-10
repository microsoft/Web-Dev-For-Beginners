# JavaScript-Grundlagen: Datentypen

[![Datentypen in JavaScript](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Datentypen in JavaScript")

## [Pre-Lecture Quiz](.github/pre-lecture-quiz.md)

Diese Lektion behandelt die Grundlagen von JavaScript, der Sprache, die Interaktivität im Web bietet.

Beginnen wir mit Variablen und den Datentypen, die sie füllen!

## Variablen

Variablen speichern Werte, die im gesamten Code verwendet und geändert werden können.

Das Erstellen und **Deklarieren** einer Variablen hat die folgende Syntax **[keyword] [name]**. Es besteht aus zwei Teilen:

- **Keyword**. Schlüsselwörter können `let` oder `var` sein.

    > Hinweis: Das Schlüsselwort `let` wurde in ES6 eingeführt und gibt Ihrer Variablen einen sogenannten "Block Scope". Es wird empfohlen, `let` over` var` zu verwenden. Wir werden uns in zukünftigen Teilen eingehender mit Blockbereichen befassen.
- **Der Variablenname**, dies ist ein Name, den Sie selbst wählen.

### Aufgabe - Arbeiten mit Variablen

1. **Deklariere eine Variable**. Deklarieren wir eine Variable mit dem Schlüsselwort `let`:


    ```javascript
    let myVariable;
    ```

   `myVariable` wurde jetzt mit dem Schlüsselwort `let` deklariert. Es hat derzeit keinen Wert.

1. **Weisen Sie einen Wert zu**. Speichern Sie einen Wert in einer Variablen mit dem Operator `=`, gefolgt vom erwarteten Wert.

    ```javascript
    myVariable = 123;
    ```

   > Hinweis: Die Verwendung von `=` in dieser Lektion bedeutet, dass wir einen "Zuweisungsoperator" verwenden, mit dem ein Wert auf eine Variable gesetzt wird. Es bedeutet nicht Gleichheit.

    `myVariable` wurde jetzt mit dem Wert 123 *initialisiert*.


1. **Refactor**. Ersetzen Sie Ihren Code durch die folgende Anweisung.

    ```javascript
    let myVariable = 123;
    ```

    Das Obige wird als _explizite Initialisierung_ bezeichnet, wenn eine Variable deklariert und gleichzeitig ein Wert zugewiesen wird.

1. **Ändern Sie den Variablenwert**. Ändern Sie den Variablenwert folgendermaßen:

   ```javascript
   myVariable = 321;
   ```

   Sobald eine Variable deklariert ist, können Sie ihren Wert an jeder Stelle in Ihrem Code mit dem Operator `=` und dem neuen Wert ändern.

    ✅ Probieren Sie es aus! Sie können JavaScript direkt in Ihren Browser schreiben. Öffnen Sie ein Browserfenster und navigieren Sie zu Developer Tools. In der Konsole finden Sie eine Eingabeaufforderung. Geben Sie `let myVariable = 123` ein, drücken Sie die Eingabetaste und geben Sie `myVariable` ein. Was geschieht? Beachten Sie, dass Sie in den folgenden Lektionen mehr über diese Konzepte erfahren werden.

## Konstanten

Die Deklaration und Initialisierung einer Konstante folgt denselben Konzepten wie eine Variable, mit Ausnahme des Schlüsselworts `const`. Konstanten werden normalerweise mit allen Großbuchstaben deklariert.


```javascript
const MY_VARIABLE = 123;
```

Konstanten ähneln Variablen mit zwei Ausnahmen:

- **Muss einen Wert haben**. Konstanten müssen initialisiert werden, sonst tritt beim Ausführen von Code ein Fehler auf.
- **Referenz kann nicht geändert werden**. Die Referenz einer Konstante kann nach der Initialisierung nicht mehr geändert werden. Andernfalls tritt beim Ausführen von Code ein Fehler auf. Schauen wir uns zwei Beispiele an:
- **Einfacher Wert**. Folgendes ist NICHT erlaubt:

   
      ```javascript
      const PI = 3;
      PI = 4; // not allowed
      ```
 
   - **Objektreferenz ist geschützt**. Folgendes ist NICHT erlaubt.

   
      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // not allowed
      ```

    - **Objektwert ist nicht geschützt**. Folgendes ist erlaubt:

    
      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // allowed
      ```

      Oben ändern Sie den Wert des Objekts, aber nicht die Referenz selbst, wodurch es zulässig wird.

   > Beachten Sie, dass ein `const` bedeutet, dass die Referenz vor einer Neuzuweisung geschützt ist. Der Wert ist jedoch nicht änderbar und kann sich ändern, insbesondere wenn es sich um ein komplexes Konstrukt wie ein Objekt handelt.

## Datentypen

Variablen können viele verschiedene Arten von Werten wie Zahlen und Text speichern. Diese verschiedenen Arten von Werten werden als **Datentyp** bezeichnet. Datentypen sind ein wichtiger Bestandteil der Softwareentwicklung, da sie Entwicklern helfen, Entscheidungen darüber zu treffen, wie der Code geschrieben und wie die Software ausgeführt werden soll. Darüber hinaus verfügen einige Datentypen über einzigartige Funktionen, mit denen zusätzliche Informationen in einen Wert umgewandelt oder extrahiert werden können.

✅ Datentypen werden auch als JavaScript-Datenprimitive bezeichnet, da es sich um die Datentypen der niedrigsten Ebene handelt, die von der Sprache bereitgestellt werden. Es gibt 6 primitive Datentypen: Zeichenfolge, Zahl, Bigint, Boolescher Wert, undefiniert und Symbol. Nehmen Sie sich eine Minute Zeit, um zu visualisieren, was jedes dieser Grundelemente darstellen könnte. Was ist ein `zebra`? Wie wäre es mit `0`? `true`?

### Zahlen

Im vorherigen Abschnitt war der Wert von `myVariable` ein Datentyp für Zahlen.

`let myVariable = 123;`

Variablen können alle Arten von Zahlen speichern, einschließlich Dezimalstellen oder negativer Zahlen. Zahlen können auch mit arithmetischen Operatoren verwendet werden, die im [nächsten Abschnitt](#operators) behandelt werden.

### Rechenzeichen

Es gibt verschiedene Arten von Operatoren, die beim Ausführen von arithmetischen Funktionen verwendet werden können. Einige sind hier aufgeführt:

| Symbol | Beschreibung | Beispiel |
| ------ | -------------------------------------------------- ---------------------- | -------------------------------- |
| `+` | **Addition**: Berechnet die Summe zweier Zahlen | `1 + 2 // erwartete Antwort ist 3` |
| `-` | **Subtraktion**: Berechnet die Differenz zweier Zahlen | `1 - 2 // erwartete Antwort ist -1` |
| `*` | **Multiplikation**: Berechnet das Produkt zweier Zahlen | `1 * 2 // erwartete Antwort ist 2` |
| `/` | **Division**: Berechnet den Quotienten aus zwei Zahlen | `1/2 // erwartete Antwort ist 0.5` |
| %% | **Rest**: Berechnet den Rest aus der Division zweier Zahlen | `1 % 2 // erwartete Antwort ist 1` |


✅ Probieren Sie es aus! Versuchen Sie eine arithmetische Operation in der Konsole Ihres Browsers. Überraschen Sie die Ergebnisse?

### Strings

Zeichenfolgen sind Zeichensätze, die zwischen einfachen oder doppelten Anführungszeichen stehen.

- `'Das ist eine Saite'`
- `"Dies ist auch eine Zeichenfolge"`
- `let myString = 'Dies ist ein in einer Variablen gespeicherter Zeichenfolgenwert';`

Denken Sie daran, beim Schreiben einer Zeichenfolge Anführungszeichen zu verwenden. Andernfalls geht JavaScript davon aus, dass es sich um einen Variablennamen handelt.

### Formatieren von Zeichenfolgen

Zeichenfolgen sind Textzeichenfolgen und müssen von Zeit zu Zeit formatiert werden.

Verwenden Sie den Operator `+`, um zwei oder mehr Zeichenfolgen zu **verketten** oder miteinander zu verbinden.

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!

```
.
✅ Warum ist in JavaScript `1 + 1 = 2`, aber `'1' + '1' = 11?` Denken Sie darüber nach. Was ist mit `'1' + 1`?

** Vorlagenliterale ** sind eine weitere Möglichkeit, Zeichenfolgen zu formatieren, außer dass anstelle von Anführungszeichen das Backtick verwendet wird. Alles, was kein einfacher Text ist, muss in die Platzhalter `${ }` eingefügt werden. Dies schließt alle Variablen ein, die Zeichenfolgen sein können.

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello World!
```

Sie können Ihre Formatierungsziele mit beiden Methoden erreichen, aber Vorlagenliterale berücksichtigen alle Leerzeichen und Zeilenumbrüche.

✅ Wann würden Sie ein Vorlagenliteral im Vergleich zu einer einfachen Zeichenfolge verwenden?

### Boolesche Werte

Boolesche Werte können nur zwei Werte sein: `true` oder `false`. Boolesche Werte können dabei helfen, Entscheidungen darüber zu treffen, welche Codezeilen ausgeführt werden sollen, wenn bestimmte Bedingungen erfüllt sind. In vielen Fällen helfen [Operatoren](#operators) beim Festlegen des Werts eines Booleschen Werts, und Sie werden häufig feststellen und schreiben, dass Variablen initialisiert oder ihre Werte mit einem Operator aktualisiert werden.

- `let myTrueBool = true`
- `let myFalseBool = false`

✅ Eine Variable kann als "wahr" betrachtet werden, wenn sie als boolescher Wert "wahr" ausgewertet wird. Interessanterweise sind in JavaScript [alle Werte wahr, sofern sie nicht als falsch definiert sind](https://developer.mozilla.org/en-US/docs/Glossary/Truthy).

--- ---.

## 🚀 Herausforderung

JavaScript ist bekannt für seine überraschende Art, gelegentlich mit Datentypen umzugehen. Recherchiere ein bisschen über diese 'Fallstricke'. Zum Beispiel: Groß- und Kleinschreibung kann beißen! Versuchen Sie dies in Ihrer Konsole: `let age = 1; let Age = 2; age == Age` (löst `false` auf - warum?). Welche anderen Fallstricke können Sie finden?

## [Quiz nach der Vorlesung](.github/post-lecture-quiz.md)

## Review & Selbststudium

Schauen Sie sich [diese Liste der JavaScript-Übungen](https://css-tricks.com/snippets/javascript/) an und probieren Sie eine aus. Was hast du gelernt?

## Zuordnung

[Praxis für Datentypen](assignment.md)