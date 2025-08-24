<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "fc6aef8ecfdd5b0ad2afa6e6ba52bfde",
  "translation_date": "2025-08-24T12:21:59+00:00",
  "source_file": "2-js-basics/1-data-types/README.md",
  "language_code": "de"
}
-->
# JavaScript Grundlagen: Datentypen

![JavaScript Grundlagen - Datentypen](../../../../sketchnotes/webdev101-js-datatypes.png)
> Sketchnote von [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz vor der Lektion
[Quiz vor der Lektion](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/7)

Diese Lektion behandelt die Grundlagen von JavaScript, der Sprache, die Interaktivität im Web ermöglicht.

> Du kannst diese Lektion auf [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-variables/?WT.mc_id=academic-77807-sagibbon) absolvieren!

[![Variablen](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Variablen in JavaScript")

[![Datentypen in JavaScript](https://img.youtube.com/vi/AWfA95eLdq8/0.jpg)](https://youtube.com/watch?v=AWfA95eLdq8 "Datentypen in JavaScript")

> 🎥 Klicke auf die Bilder oben, um Videos über Variablen und Datentypen anzusehen.

Lass uns mit Variablen und den Datentypen beginnen, die sie enthalten können!

## Variablen

Variablen speichern Werte, die in deinem Code verwendet und geändert werden können.

Das Erstellen und **Deklarieren** einer Variablen hat die folgende Syntax **[Schlüsselwort] [Name]**. Es besteht aus zwei Teilen:

- **Schlüsselwort**. Schlüsselwörter können `let` oder `var` sein.  

✅ Das Schlüsselwort `let` wurde in ES6 eingeführt und gibt deiner Variablen einen sogenannten _Block Scope_. Es wird empfohlen, `let` anstelle von `var` zu verwenden. Wir werden Block Scopes später ausführlicher behandeln.
- **Der Variablenname**, den du selbst auswählst.

### Aufgabe - Arbeiten mit Variablen

1. **Deklariere eine Variable**. Deklariere eine Variable mit dem Schlüsselwort `let`:

    ```javascript
    let myVariable;
    ```

   `myVariable` wurde nun mit dem Schlüsselwort `let` deklariert. Es hat derzeit keinen Wert.

1. **Weise einen Wert zu**. Speichere einen Wert in einer Variablen mit dem `=`-Operator, gefolgt vom gewünschten Wert.

    ```javascript
    myVariable = 123;
    ```

   > Hinweis: Die Verwendung von `=` in dieser Lektion bedeutet, dass wir einen "Zuweisungsoperator" verwenden, um einer Variablen einen Wert zuzuweisen. Es bedeutet nicht Gleichheit.

   `myVariable` wurde nun mit dem Wert 123 *initialisiert*.

1. **Refaktorieren**. Ersetze deinen Code durch die folgende Anweisung.

    ```javascript
    let myVariable = 123;
    ```

    Das oben genannte wird als _explizite Initialisierung_ bezeichnet, wenn eine Variable deklariert und gleichzeitig ein Wert zugewiesen wird.

1. **Ändere den Variablenwert**. Ändere den Variablenwert auf folgende Weise:

   ```javascript
   myVariable = 321;
   ```

   Sobald eine Variable deklariert ist, kannst du ihren Wert jederzeit in deinem Code mit dem `=`-Operator und dem neuen Wert ändern.

   ✅ Probier es aus! Du kannst JavaScript direkt in deinem Browser schreiben. Öffne ein Browserfenster und navigiere zu den Entwicklertools. Im Konsolenbereich findest du eine Eingabeaufforderung; gib `let myVariable = 123` ein, drücke Enter und gib dann `myVariable` ein. Was passiert? Hinweis: Du wirst mehr über diese Konzepte in den folgenden Lektionen lernen.

## Konstanten

Die Deklaration und Initialisierung einer Konstante folgt denselben Konzepten wie bei einer Variablen, mit der Ausnahme des Schlüsselworts `const`. Konstanten werden typischerweise mit Großbuchstaben deklariert.

```javascript
const MY_VARIABLE = 123;
```

Konstanten sind ähnlich wie Variablen, mit zwei Ausnahmen:

- **Muss einen Wert haben**. Konstanten müssen initialisiert werden, sonst tritt ein Fehler auf, wenn der Code ausgeführt wird.
- **Referenz kann nicht geändert werden**. Die Referenz einer Konstante kann nach der Initialisierung nicht geändert werden, sonst tritt ein Fehler auf, wenn der Code ausgeführt wird. Schauen wir uns zwei Beispiele an:
   - **Einfacher Wert**. Das Folgende ist NICHT erlaubt:
   
      ```javascript
      const PI = 3;
      PI = 4; // not allowed
      ```
 
   - **Objektreferenz ist geschützt**. Das Folgende ist NICHT erlaubt.
   
      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // not allowed
      ```

    - **Objektwert ist nicht geschützt**. Das Folgende IST erlaubt:
    
      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // allowed
      ```

      Oben änderst du den Wert des Objekts, aber nicht die Referenz selbst, was erlaubt ist.

   > Hinweis: Ein `const` bedeutet, dass die Referenz vor einer Neuzuweisung geschützt ist. Der Wert ist jedoch nicht _unveränderlich_ und kann sich ändern, insbesondere wenn es sich um eine komplexe Struktur wie ein Objekt handelt.

## Datentypen

Variablen können viele verschiedene Arten von Werten speichern, wie Zahlen und Text. Diese verschiedenen Arten von Werten werden als **Datentyp** bezeichnet. Datentypen sind ein wichtiger Bestandteil der Softwareentwicklung, da sie Entwicklern helfen, Entscheidungen darüber zu treffen, wie der Code geschrieben und wie die Software ausgeführt werden soll. Darüber hinaus haben einige Datentypen einzigartige Eigenschaften, die helfen, zusätzliche Informationen aus einem Wert zu extrahieren oder ihn zu transformieren.

✅ Datentypen werden auch als JavaScript-Datenprimitiven bezeichnet, da sie die niedrigsten Datentypen sind, die von der Sprache bereitgestellt werden. Es gibt 7 primitive Datentypen: string, number, bigint, boolean, undefined, null und symbol. Nimm dir einen Moment Zeit, um dir vorzustellen, was jeder dieser Primitiven darstellen könnte. Was ist ein `zebra`? Wie wäre es mit `0`? `true`?

### Zahlen

Im vorherigen Abschnitt war der Wert von `myVariable` ein Zahlendatentyp.

`let myVariable = 123;`

Variablen können alle Arten von Zahlen speichern, einschließlich Dezimalzahlen oder negativer Zahlen. Zahlen können auch mit arithmetischen Operatoren verwendet werden, die im [nächsten Abschnitt](../../../../2-js-basics/1-data-types) behandelt werden.

### Arithmetische Operatoren

Es gibt verschiedene Arten von Operatoren, die bei der Durchführung arithmetischer Funktionen verwendet werden können, und einige sind hier aufgeführt:

| Symbol | Beschreibung                                                              | Beispiel                          |
| ------ | ------------------------------------------------------------------------ | -------------------------------- |
| `+`    | **Addition**: Berechnet die Summe von zwei Zahlen                        | `1 + 2 //erwartete Antwort ist 3`   |
| `-`    | **Subtraktion**: Berechnet die Differenz von zwei Zahlen                 | `1 - 2 //erwartete Antwort ist -1`  |
| `*`    | **Multiplikation**: Berechnet das Produkt von zwei Zahlen                | `1 * 2 //erwartete Antwort ist 2`   |
| `/`    | **Division**: Berechnet den Quotienten von zwei Zahlen                   | `1 / 2 //erwartete Antwort ist 0.5` |
| `%`    | **Rest**: Berechnet den Rest der Division von zwei Zahlen                | `1 % 2 //erwartete Antwort ist 1`   |

✅ Probier es aus! Probiere eine arithmetische Operation in der Konsole deines Browsers aus. Überraschen dich die Ergebnisse?

### Strings

Strings sind Zeichenfolgen, die zwischen einfachen oder doppelten Anführungszeichen stehen.

- `'Das ist ein String'`
- `"Das ist auch ein String"`
- `let myString = 'Das ist ein Stringwert, der in einer Variablen gespeichert ist';`

Denke daran, Anführungszeichen zu verwenden, wenn du einen String schreibst, sonst nimmt JavaScript an, dass es sich um einen Variablennamen handelt.

### Strings formatieren

Strings sind textuell und müssen von Zeit zu Zeit formatiert werden.

Um zwei oder mehr Strings zu **konkatenieren**, also zusammenzufügen, verwende den `+`-Operator.

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!

```

✅ Warum ergibt `1 + 1 = 2` in JavaScript, aber `'1' + '1' = 11`? Denk darüber nach. Was ist mit `'1' + 1`?

**Template Literals** sind eine andere Möglichkeit, Strings zu formatieren. Statt Anführungszeichen wird hier das Backtick verwendet. Alles, was kein reiner Text ist, muss in Platzhalter `${ }` gesetzt werden. Dazu gehören auch Variablen, die Strings sein können.

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
```

Du kannst deine Formatierungsziele mit beiden Methoden erreichen, aber Template Literals respektieren alle Leerzeichen und Zeilenumbrüche.

✅ Wann würdest du ein Template Literal gegenüber einem einfachen String verwenden?

### Booleans

Booleans können nur zwei Werte haben: `true` oder `false`. Booleans können helfen, Entscheidungen darüber zu treffen, welche Codezeilen ausgeführt werden sollen, wenn bestimmte Bedingungen erfüllt sind. In vielen Fällen helfen [Operatoren](../../../../2-js-basics/1-data-types) dabei, den Wert eines Booleans festzulegen, und du wirst oft Variablen bemerken und schreiben, die initialisiert werden oder deren Werte mit einem Operator aktualisiert werden.

- `let myTrueBool = true`
- `let myFalseBool = false`

✅ Eine Variable kann als 'truthy' betrachtet werden, wenn sie zu einem Boolean `true` ausgewertet wird. Interessanterweise sind in JavaScript [alle Werte truthy, es sei denn, sie sind als falsy definiert](https://developer.mozilla.org/docs/Glossary/Truthy).

---

## 🚀 Herausforderung

JavaScript ist berüchtigt für seine gelegentlich überraschenden Arten, Datentypen zu behandeln. Recherchiere ein wenig über diese 'Fallstricke'. Zum Beispiel: Groß- und Kleinschreibung kann problematisch sein! Probiere dies in deiner Konsole: `let age = 1; let Age = 2; age == Age` (ergibt `false` -- warum?). Welche anderen Fallstricke kannst du finden?

## Quiz nach der Lektion
[Quiz nach der Lektion](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/8)

## Wiederholung & Selbststudium

Schau dir [diese Liste von JavaScript-Übungen](https://css-tricks.com/snippets/javascript/) an und probiere eine aus. Was hast du gelernt?

## Aufgabe

[Übung zu Datentypen](assignment.md)

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, weisen wir darauf hin, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die aus der Nutzung dieser Übersetzung entstehen.