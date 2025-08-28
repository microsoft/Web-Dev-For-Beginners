<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b4612bbb9ace984f374fcc80e3e035ad",
  "translation_date": "2025-08-24T12:16:12+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "de"
}
-->
# JavaScript-Grundlagen: Methoden und Funktionen

![JavaScript Basics - Funktionen](../../../../sketchnotes/webdev101-js-functions.png)
> Sketchnote von [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz vor der Vorlesung
[Quiz vor der Vorlesung](https://ff-quizzes.netlify.app/web/quiz/9)

Wenn wir über das Schreiben von Code nachdenken, möchten wir immer sicherstellen, dass unser Code lesbar ist. Auch wenn das zunächst widersprüchlich klingt, wird Code viel häufiger gelesen als geschrieben. Ein zentrales Werkzeug im Werkzeugkasten eines Entwicklers, um wartbaren Code zu gewährleisten, ist die **Funktion**.

[![Methoden und Funktionen](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Methoden und Funktionen")

> 🎥 Klicken Sie auf das Bild oben, um ein Video über Methoden und Funktionen anzusehen.

> Sie können diese Lektion auf [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon) absolvieren!

## Funktionen

Im Kern ist eine Funktion ein Codeblock, den wir bei Bedarf ausführen können. Dies ist ideal für Szenarien, in denen wir dieselbe Aufgabe mehrfach ausführen müssen; anstatt die Logik an mehreren Stellen zu duplizieren (was es schwierig machen würde, sie später zu aktualisieren), können wir sie an einem zentralen Ort bündeln und sie aufrufen, wann immer wir die Operation ausführen möchten – Sie können sogar Funktionen aus anderen Funktionen aufrufen!

Ebenso wichtig ist die Möglichkeit, einer Funktion einen Namen zu geben. Auch wenn dies trivial erscheinen mag, bietet der Name eine schnelle Möglichkeit, einen Abschnitt des Codes zu dokumentieren. Sie können dies wie ein Etikett auf einem Knopf betrachten. Wenn ich auf einen Knopf klicke, auf dem „Timer abbrechen“ steht, weiß ich, dass er die Uhr anhalten wird.

## Erstellen und Aufrufen einer Funktion

Die Syntax für eine Funktion sieht wie folgt aus:

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

Wenn ich eine Funktion erstellen möchte, um eine Begrüßung anzuzeigen, könnte sie so aussehen:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

Wann immer wir unsere Funktion aufrufen (oder ausführen) möchten, verwenden wir den Namen der Funktion, gefolgt von `()`. Es ist erwähnenswert, dass unsere Funktion vor oder nach ihrem Aufruf definiert werden kann; der JavaScript-Compiler wird sie für Sie finden.

```javascript
// calling our function
displayGreeting();
```

> **NOTE:** Es gibt eine spezielle Art von Funktion, die als **Methode** bekannt ist, die Sie bereits verwendet haben! Tatsächlich haben wir dies in unserem obigen Beispiel gesehen, als wir `console.log` verwendet haben. Der Unterschied zwischen einer Methode und einer Funktion besteht darin, dass eine Methode an ein Objekt angehängt ist (in unserem Beispiel `console`), während eine Funktion frei schwebend ist. Viele Entwickler verwenden diese Begriffe jedoch synonym.

### Best Practices für Funktionen

Es gibt einige bewährte Praktiken, die Sie beim Erstellen von Funktionen beachten sollten:

- Verwenden Sie wie immer aussagekräftige Namen, damit Sie wissen, was die Funktion tun wird.
- Verwenden Sie **camelCasing**, um Wörter zu kombinieren.
- Halten Sie Ihre Funktionen auf eine spezifische Aufgabe fokussiert.

## Informationen an eine Funktion übergeben

Um eine Funktion vielseitiger zu machen, möchten Sie oft Informationen an sie übergeben. Wenn wir unser Beispiel `displayGreeting` oben betrachten, wird es nur **Hello, world!** anzeigen. Nicht die nützlichste Funktion, die man erstellen könnte. Wenn wir sie etwas flexibler gestalten möchten, z. B. jemandem erlauben, den Namen der Person anzugeben, die begrüßt werden soll, können wir einen **Parameter** hinzufügen. Ein Parameter (manchmal auch als **Argument** bezeichnet) ist zusätzliche Information, die an eine Funktion gesendet wird.

Parameter werden im Definitionsabschnitt in Klammern aufgelistet und durch Kommas getrennt, wie folgt:

```javascript
function name(param, param2, param3) {

}
```

Wir können unser `displayGreeting` aktualisieren, um einen Namen zu akzeptieren und diesen anzuzeigen.

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

Wenn wir unsere Funktion aufrufen und den Parameter übergeben möchten, geben wir ihn in den Klammern an.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

## Standardwerte

Wir können unsere Funktion noch flexibler gestalten, indem wir weitere Parameter hinzufügen. Aber was, wenn wir nicht möchten, dass jeder Wert angegeben werden muss? Bleiben wir bei unserem Begrüßungsbeispiel: Wir könnten den Namen als erforderlich belassen (wir müssen wissen, wen wir begrüßen), aber wir möchten erlauben, dass die Begrüßung selbst nach Wunsch angepasst wird. Wenn jemand sie nicht anpassen möchte, stellen wir stattdessen einen Standardwert bereit. Um einem Parameter einen Standardwert zu geben, setzen wir ihn ähnlich wie bei einer Variablen – `parameterName = 'defaultValue'`. Ein vollständiges Beispiel:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

Wenn wir die Funktion aufrufen, können wir dann entscheiden, ob wir einen Wert für `salutation` festlegen möchten.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

## Rückgabewerte

Bis jetzt wird die Funktion, die wir erstellt haben, immer an die [Konsole](https://developer.mozilla.org/docs/Web/API/console) ausgeben. Manchmal kann dies genau das sein, was wir suchen, insbesondere wenn wir Funktionen erstellen, die andere Dienste aufrufen werden. Aber was, wenn ich eine Hilfsfunktion erstellen möchte, um eine Berechnung durchzuführen und den Wert zurückzugeben, damit ich ihn anderswo verwenden kann?

Wir können dies tun, indem wir einen **Rückgabewert** verwenden. Ein Rückgabewert wird von der Funktion zurückgegeben und kann genauso in einer Variablen gespeichert werden, wie wir einen Literalwert wie eine Zeichenkette oder Zahl speichern könnten.

Wenn eine Funktion etwas zurückgibt, wird das Schlüsselwort `return` verwendet. Das Schlüsselwort `return` erwartet einen Wert oder eine Referenz dessen, was zurückgegeben wird, wie folgt:

```javascript
return myVariable;
```  

Wir könnten eine Funktion erstellen, um eine Begrüßungsnachricht zu erstellen und den Wert an den Aufrufer zurückzugeben.

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

Wenn wir diese Funktion aufrufen, speichern wir den Wert in einer Variablen. Dies ist ähnlich wie wenn wir eine Variable auf einen statischen Wert setzen (wie `const name = 'Christopher'`).

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

## Funktionen als Parameter für Funktionen

Im Laufe Ihrer Programmierkarriere werden Sie auf Funktionen stoßen, die Funktionen als Parameter akzeptieren. Dieser clevere Trick wird häufig verwendet, wenn wir nicht wissen, wann etwas passieren oder abgeschlossen sein wird, aber wir wissen, dass wir eine Operation als Reaktion ausführen müssen.

Als Beispiel betrachten Sie [setTimeout](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout), das einen Timer startet und Code ausführt, wenn er abgeschlossen ist. Wir müssen ihm mitteilen, welchen Code wir ausführen möchten. Klingt nach einem perfekten Job für eine Funktion!

Wenn Sie den untenstehenden Code ausführen, sehen Sie nach 3 Sekunden die Nachricht **3 seconds has elapsed**.

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

### Anonyme Funktionen

Schauen wir uns noch einmal an, was wir gebaut haben. Wir erstellen eine Funktion mit einem Namen, die nur einmal verwendet wird. Wenn unsere Anwendung komplexer wird, können wir uns vorstellen, viele Funktionen zu erstellen, die nur einmal aufgerufen werden. Das ist nicht ideal. Wie sich herausstellt, müssen wir nicht immer einen Namen angeben!

Wenn wir eine Funktion als Parameter übergeben, können wir darauf verzichten, sie im Voraus zu erstellen, und stattdessen eine als Teil des Parameters erstellen. Wir verwenden das gleiche Schlüsselwort `function`, aber wir erstellen sie als Parameter.

Lassen Sie uns den obigen Code umschreiben, um eine anonyme Funktion zu verwenden:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

Wenn Sie unseren neuen Code ausführen, werden Sie feststellen, dass wir die gleichen Ergebnisse erhalten. Wir haben eine Funktion erstellt, mussten ihr aber keinen Namen geben!

### Fat Arrow-Funktionen

Eine Abkürzung, die in vielen Programmiersprachen (einschließlich JavaScript) üblich ist, ist die Möglichkeit, sogenannte **Arrow**- oder **Fat Arrow**-Funktionen zu verwenden. Sie verwenden einen speziellen Indikator `=>`, der wie ein Pfeil aussieht – daher der Name! Durch die Verwendung von `=>` können wir das Schlüsselwort `function` überspringen.

Lassen Sie uns unseren Code noch einmal umschreiben, um eine Fat Arrow-Funktion zu verwenden:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

### Wann welche Strategie verwenden?

Sie haben nun gesehen, dass wir drei Möglichkeiten haben, eine Funktion als Parameter zu übergeben, und fragen sich vielleicht, wann welche verwendet werden sollte. Wenn Sie wissen, dass Sie die Funktion mehr als einmal verwenden werden, erstellen Sie sie wie gewohnt. Wenn Sie sie nur für eine Stelle verwenden, ist es im Allgemeinen am besten, eine anonyme Funktion zu verwenden. Ob Sie eine Fat Arrow-Funktion oder die traditionellere `function`-Syntax verwenden, bleibt Ihnen überlassen, aber Sie werden feststellen, dass die meisten modernen Entwickler `=>` bevorzugen.

---

## 🚀 Herausforderung

Können Sie in einem Satz den Unterschied zwischen Funktionen und Methoden erklären? Versuchen Sie es!

## Quiz nach der Vorlesung
[Quiz nach der Vorlesung](https://ff-quizzes.netlify.app/web/quiz/10)

## Überprüfung & Selbststudium

Es lohnt sich, [etwas mehr über Arrow-Funktionen zu lesen](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), da sie zunehmend in Codebasen verwendet werden. Üben Sie, eine Funktion zu schreiben, und schreiben Sie sie dann mit dieser Syntax um.

## Aufgabe

[Spaß mit Funktionen](assignment.md)

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, weisen wir darauf hin, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die aus der Nutzung dieser Übersetzung entstehen.