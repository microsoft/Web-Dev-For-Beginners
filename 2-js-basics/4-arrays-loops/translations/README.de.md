# JavaScript-Grundlagen: Arrays und Loops


[![Arrays](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "Arrays")
[![Loops](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "Loops")


## [Pre-Lecture Quiz](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/13)

Diese Lektion behandelt die Grundlagen von JavaScript, der Sprache, die Interaktivität im Web bietet. In dieser Lektion lernen Sie Arrays und Loops kennen, mit denen Daten bearbeitet werden.

## Arrays

Das Arbeiten mit Daten ist eine häufige Aufgabe für jede Sprache und eine viel einfachere Aufgabe, wenn Daten in einem strukturellen Format wie Arrays organisiert sind. Bei Arrays werden Daten in einer Struktur ähnlich einer Liste gespeichert. Ein Hauptvorteil von Arrays besteht darin, dass Sie verschiedene Datentypen in einem Array speichern können.

✅ Arrays sind überall um uns herum! Können Sie sich ein reales Beispiel für ein Array vorstellen, beispielsweise ein Solarpanel-Array?

Die Syntax für ein Array besteht aus zwei eckigen Klammern.

```javascript
let myArray = [];
```

Dies ist ein leeres Array, aber Arrays können als bereits mit Daten gefüllt deklariert werden. Mehrere Werte in einem Array werden durch ein Komma getrennt.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
```

Den Array-Werten wird ein eindeutiger Wert zugewiesen, der als **Index** bezeichnet wird. Diese ganze Zahl wird basierend auf dem Abstand vom Anfang des Arrays zugewiesen. Im obigen Beispiel hat der Zeichenfolgenwert "Chocolate" den Index 0 und der Index "Rocky Road" den Wert 4. Verwenden Sie den Index in eckigen Klammern, um Array-Werte abzurufen, zu ändern oder einzufügen.

✅ Überrascht es Sie, dass Arrays am Nullindex beginnen? In einigen Programmiersprachen beginnen die Indizes bei 1. Es gibt eine interessante Geschichte, die Sie [auf Wikipedia lesen](https://en.wikipedia.org/wiki/Zero-based_numbering) können.


```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors[2]; //"Vanilla"
```

Sie können den Index nutzen, um einen Wert wie folgt zu ändern:

```javascript
iceCreamFlavors[4] = "Butter Pecan"; //ändert "Rocky Road" in "Butter Pecan"
```

And you can insert a new value at a given index like this:

```javascript
iceCreamFlavors[5] = "Cookie Dough"; //"Cookie Dough" hinzugefügt
```


✅ Eine häufigere Methode zum Übertragen von Werten in ein Array ist die Verwendung von Array-Operatoren wie array.push()

Verwenden Sie die Eigenschaft `length`, um herauszufinden, wie viele Elemente sich in einem Array befinden.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors.length; //5
```

✅ Probieren Sie es aus! Verwenden Sie die Konsole Ihres Browsers, um ein Array Ihrer eigenen Erstellung zu erstellen und zu bearbeiten.

## Schleifen

Schleifen ermöglichen sich wiederholende oder **iterative** Aufgaben und können viel Zeit und Code sparen. Jede Iteration kann in ihren Variablen, Werten und Bedingungen variieren. Es gibt verschiedene Arten von Schleifen in JavaScript, und sie weisen kleine Unterschiede auf, tun jedoch im Wesentlichen dasselbe: Schleifen über Daten.

### For Loop

Die `for`-Schleife benötigt 3 Teile, um zu iterieren:
     - `counter` Eine Variable, die normalerweise mit einer Zahl initialisiert wird, die die Anzahl der Iterationen zählt.
     - `condition` Ausdruck, der Vergleichsoperatoren verwendet, um zu bewirken, dass die Schleife stoppt, wenn `true`
     - `iteration-expression` Wird am Ende jeder Iteration ausgeführt und normalerweise zum Ändern des Zählerwerts verwendet
  
```javascript
// Counting up to 10
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

✅ Führen Sie diesen Code in einer Browserkonsole aus. Was passiert, wenn Sie kleine Änderungen am Zähler, der Bedingung oder dem Iterationsausdruck vornehmen? Können Sie es rückwärts laufen lassen und einen Countdown erstellen?

### While-Schleife

Im Gegensatz zur Syntax für die `for` -Schleife erfordern `while`-Schleifen nur eine Bedingung, die die Schleife stoppt, wenn `true`. Bedingungen in Schleifen hängen normalerweise von anderen Werten wie Zählern ab und müssen während der Schleife verwaltet werden. Startwerte für Zähler müssen außerhalb der Schleife erstellt werden, und alle Ausdrücke, die eine Bedingung erfüllen, einschließlich des Änderns des Zählers, müssen innerhalb der Schleife beibehalten werden.


```javascript
//Counting up to 10
let i = 0;
while (i < 10) {
 console.log(i);
 i++;
}
```

✅ Warum sollten Sie eine for-Schleife oder eine while-Schleife wählen? 17.000 Zuschauer hatten dieselbe Frage zu StackOverflow und einige der Meinungen [könnten für Sie interessant sein](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript).

## Schleifen und Arrays

Arrays werden häufig mit Schleifen verwendet, da die meisten Bedingungen die Länge des Arrays erfordern, um die Schleife zu stoppen, und der Index auch der Zählerwert sein kann.


```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(iceCreamFlavors[i]);
} //Endet, wenn alle Geschmacksrichtungen gedruckt sind
```

✅ Experimentieren Sie mit dem Durchlaufen eines Arrays, das Sie selbst erstellt haben, in der Konsole Ihres Browsers.

---

## 🚀 Herausforderung

Es gibt andere Möglichkeiten, Arrays als for- und while-Schleifen zu durchlaufen. Es gibt [forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of) und [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map). Schreiben Sie Ihre Array-Schleife mit einer dieser Techniken neu.

## [Quiz nach der Vorlesung](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/14)

## Review & Selbststudium

An Arrays in JavaScript sind viele Methoden angehängt, die für die Datenmanipulation äußerst nützlich sind. [Informieren Sie sich über diese Methoden](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) und probieren Sie einige davon aus (wie Push, Pop, Slice und Splice). auf einem Array Ihrer Kreation.

## Zuordnung

[Array schleifen](assignment.de.md)
