<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9029f96b0e034839c1799f4595e4bb66",
  "translation_date": "2025-08-29T14:14:23+00:00",
  "source_file": "2-js-basics/4-arrays-loops/README.md",
  "language_code": "de"
}
-->
# JavaScript-Grundlagen: Arrays und Schleifen

![JavaScript-Grundlagen - Arrays](../../../../translated_images/webdev101-js-arrays.439d7528b8a294558d0e4302e448d193f8ad7495cc407539cc81f1afe904b470.de.png)
> Sketchnote von [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz vor der Lektion
[Quiz vor der Lektion](https://ff-quizzes.netlify.app/web/quiz/13)

Diese Lektion behandelt die Grundlagen von JavaScript, der Sprache, die Interaktivität im Web ermöglicht. In dieser Lektion lernst du Arrays und Schleifen kennen, die zur Datenmanipulation verwendet werden.

[![Arrays](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "Arrays")

[![Schleifen](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "Schleifen")

> 🎥 Klicke auf die Bilder oben, um Videos über Arrays und Schleifen anzusehen.

> Du kannst diese Lektion auf [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-arrays/?WT.mc_id=academic-77807-sagibbon) absolvieren!

## Arrays

Mit Daten zu arbeiten ist eine häufige Aufgabe in jeder Programmiersprache, und es wird viel einfacher, wenn die Daten in einer strukturierten Form wie Arrays organisiert sind. Mit Arrays werden Daten in einer Struktur gespeichert, die einer Liste ähnelt. Ein großer Vorteil von Arrays ist, dass du verschiedene Datentypen in einem Array speichern kannst.

✅ Arrays sind überall um uns herum! Kannst du ein Beispiel aus dem echten Leben für ein Array nennen, wie etwa ein Solarpanel-Array?

Die Syntax für ein Array besteht aus einem Paar eckiger Klammern.

```javascript
let myArray = [];
```

Dies ist ein leeres Array, aber Arrays können auch bereits mit Daten gefüllt deklariert werden. Mehrere Werte in einem Array werden durch ein Komma getrennt.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
```

Die Array-Werte erhalten einen eindeutigen Wert, der als **Index** bezeichnet wird. Dabei handelt es sich um eine ganze Zahl, die basierend auf ihrer Entfernung vom Anfang des Arrays zugewiesen wird. Im obigen Beispiel hat der String-Wert "Chocolate" den Index 0, und der Index von "Rocky Road" ist 4. Verwende den Index mit eckigen Klammern, um Array-Werte abzurufen, zu ändern oder einzufügen.

✅ Überrascht es dich, dass Arrays beim Index null beginnen? In einigen Programmiersprachen beginnen Indizes bei 1. Es gibt eine interessante Geschichte dazu, die du [auf Wikipedia nachlesen kannst](https://en.wikipedia.org/wiki/Zero-based_numbering).

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors[2]; //"Vanilla"
```

Du kannst den Index nutzen, um einen Wert zu ändern, wie hier:

```javascript
iceCreamFlavors[4] = "Butter Pecan"; //Changed "Rocky Road" to "Butter Pecan"
```

Und du kannst einen neuen Wert an einem bestimmten Index einfügen, wie hier:

```javascript
iceCreamFlavors[5] = "Cookie Dough"; //Added "Cookie Dough"
```

✅ Eine gängigere Methode, Werte zu einem Array hinzuzufügen, ist die Verwendung von Array-Operatoren wie `array.push()`.

Um herauszufinden, wie viele Elemente sich in einem Array befinden, verwende die `length`-Eigenschaft.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors.length; //5
```

✅ Probiere es selbst aus! Verwende die Konsole deines Browsers, um ein eigenes Array zu erstellen und zu manipulieren.

## Schleifen

Schleifen ermöglichen es uns, wiederholende oder **iterative** Aufgaben auszuführen, und können viel Zeit und Code sparen. Jede Iteration kann sich in ihren Variablen, Werten und Bedingungen unterscheiden. Es gibt verschiedene Arten von Schleifen in JavaScript, die alle kleine Unterschiede aufweisen, aber im Wesentlichen dasselbe tun: Daten durchlaufen.

### For-Schleife

Die `for`-Schleife benötigt 3 Teile, um zu iterieren:
- `counter` Eine Variable, die typischerweise mit einer Zahl initialisiert wird, die die Anzahl der Iterationen zählt
- `condition` Eine Bedingung, die Vergleichsoperatoren verwendet, um die Schleife zu stoppen, wenn sie `false` wird
- `iteration-expression` Wird am Ende jeder Iteration ausgeführt, typischerweise verwendet, um den Zählerwert zu ändern

```javascript
// Counting up to 10
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

✅ Führe diesen Code in der Konsole deines Browsers aus. Was passiert, wenn du kleine Änderungen am Zähler, an der Bedingung oder am Iterationsausdruck vornimmst? Kannst du die Schleife rückwärts laufen lassen, um einen Countdown zu erstellen?

### While-Schleife

Im Gegensatz zur Syntax der `for`-Schleife benötigen `while`-Schleifen nur eine Bedingung, die die Schleife stoppt, wenn die Bedingung `false` wird. Bedingungen in Schleifen hängen normalerweise von anderen Werten wie Zählern ab und müssen während der Schleife verwaltet werden. Startwerte für Zähler müssen außerhalb der Schleife erstellt werden, und alle Ausdrücke, die eine Bedingung erfüllen, einschließlich der Änderung des Zählers, müssen innerhalb der Schleife gepflegt werden.

```javascript
//Counting up to 10
let i = 0;
while (i < 10) {
 console.log(i);
 i++;
}
```

✅ Warum würdest du eine for-Schleife gegenüber einer while-Schleife wählen? 17.000 Leser hatten dieselbe Frage auf StackOverflow, und einige der Meinungen [könnten für dich interessant sein](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript).

## Schleifen und Arrays

Arrays werden oft mit Schleifen verwendet, da die meisten Bedingungen die Länge des Arrays benötigen, um die Schleife zu stoppen, und der Index auch als Zählerwert verwendet werden kann.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(iceCreamFlavors[i]);
} //Ends when all flavors are printed
```

✅ Experimentiere mit dem Durchlaufen eines selbst erstellten Arrays in der Konsole deines Browsers.

---

## 🚀 Herausforderung

Es gibt andere Möglichkeiten, Arrays zu durchlaufen, außer mit for- und while-Schleifen. Es gibt [forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of) und [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map). Schreibe deine Array-Schleife mit einer dieser Techniken um.

## Quiz nach der Lektion
[Quiz nach der Lektion](https://ff-quizzes.netlify.app/web/quiz/14)

## Wiederholung & Selbststudium

Arrays in JavaScript haben viele Methoden, die äußerst nützlich für die Datenmanipulation sind. [Lies mehr über diese Methoden](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) und probiere einige davon aus (wie push, pop, slice und splice) an einem selbst erstellten Array aus.

## Aufgabe

[Ein Array durchlaufen](assignment.md)

---

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, beachten Sie bitte, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die sich aus der Nutzung dieser Übersetzung ergeben.