# JavaScript-Grundlagen: Methoden und Funktionen

[![Methoden und Funktionen](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Methoden und Funktionen")

## [Pre-Lecture Quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/9)

Wenn wir darüber nachdenken, Code zu schreiben, möchten wir immer sicherstellen, dass unser Code lesbar ist. Während dies nicht intuitiv klingt, wird Code viel öfter gelesen als geschrieben. Ein Kernwerkzeug in der Toolbox eines Entwicklers, um wartbaren Code sicherzustellen, ist die **Funktion**.

## Funktionen

Eine Funktion ist im Kern ein Codeblock, den wir bei Bedarf ausführen können. Dies ist perfekt für Szenarien, in denen wir dieselbe Aufgabe mehrmals ausführen müssen. Anstatt die Logik an mehreren Orten zu duplizieren (was eine Aktualisierung zu gegebener Zeit erschweren würde), können wir sie an einem Ort zentralisieren und jederzeit aufrufen, wenn die Operation ausgeführt werden muss - Sie können sogar Funktionen von anderen Funktionen aus aufrufen!.

Ebenso wichtig ist die Fähigkeit, eine Funktion zu benennen. Obwohl dies trivial erscheinen mag, bietet der Name eine schnelle Möglichkeit, einen Codeabschnitt zu dokumentieren. Sie können sich dies als Beschriftung auf einer Schaltfläche vorstellen. Wenn ich auf eine Schaltfläche mit der Aufschrift "Timer abbrechen" klicke, weiß ich, dass die Uhr nicht mehr läuft.

## Eine Funktion erstellen und aufrufen

Die Syntax für eine Funktion sieht folgendermaßen aus:


```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

Wenn ich eine Funktion zum Anzeigen einer Begrüßung erstellen wollte, könnte dies folgendermaßen aussehen:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

Wann immer wir unsere Funktion aufrufen (oder aufrufen) möchten, verwenden wir den Namen der Funktion, gefolgt von `()`. Es ist erwähnenswert, dass unsere Funktion definiert werden kann, bevor oder nachdem wir uns entscheiden, sie aufzurufen. Der JavaScript-Compiler findet es für Sie.


```javascript
// calling our function
displayGreeting();
```

> **HINWEIS:** Es gibt eine spezielle Art von Funktion, die als **Methode** bekannt ist und die Sie bereits verwendet haben! Tatsächlich haben wir dies in unserer obigen Demo gesehen, als wir `console.log` verwendet haben. Was eine Methode von einer Funktion unterscheidet, ist, dass eine Methode an ein Objekt angehängt ist (in unserem Beispiel `console`), während eine Funktion frei schwebend ist. Sie werden hören, dass viele Entwickler diese Begriffe synonym verwenden.

### Best Practices für Funktionen

Es gibt eine Handvoll Best Practices, die beim Erstellen von Funktionen berücksichtigt werden müssen

- Verwenden Sie wie immer beschreibende Namen, damit Sie wissen, was die Funktion tun wird
- Verwenden Sie **camelCasing**, um Wörter zu kombinieren
- Konzentrieren Sie Ihre Funktionen auf eine bestimmte Aufgabe

## Informationen an eine Funktion übergeben

Um eine Funktion wiederverwendbarer zu machen, möchten Sie häufig Informationen an sie weitergeben. Wenn wir unser Beispiel `displayGreeting` oben betrachten, wird nur **Hallo, Welt!** angezeigt. Nicht die nützlichste Funktion, die man erstellen könnte. Wenn wir es etwas flexibler gestalten möchten, z. B. jemandem erlauben, den Namen der zu begrüßenden Person anzugeben, können wir einen **Parameter** hinzufügen. Ein Parameter (manchmal auch als **Argument** bezeichnet) sind zusätzliche Informationen, die an eine Funktion gesendet werden.

Die Parameter sind im Definitionsteil in Klammern aufgeführt und werden wie folgt durch Kommas getrennt:

```javascript
function name(param, param2, param3) {

}
```

Wir können unser `displayGreeting` aktualisieren, um einen Namen zu akzeptieren und diesen anzeigen zu lassen.


```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

Wenn wir unsere Funktion aufrufen und den Parameter übergeben möchten, geben wir ihn in Klammern an.

```javascript
displayGreeting('Christopher');
// zeigt "Hallo Christopher!" wenn ausgeführt
```

## Standardwerte

Wir können unsere Funktion noch flexibler gestalten, indem wir weitere Parameter hinzufügen. Aber was ist, wenn nicht jeder Wert angegeben werden soll? In Übereinstimmung mit unserem Begrüßungsbeispiel könnten wir den Namen nach Bedarf belassen (wir müssen wissen, wen wir begrüßen), aber wir möchten, dass die Begrüßung selbst nach Wunsch angepasst wird. Wenn jemand es nicht anpassen möchte, geben wir stattdessen einen Standardwert an. Um einem Parameter einen Standardwert zuzuweisen, setzen wir ihn ähnlich wie einen Wert für eine Variable - `parameterName = 'defaultValue'`. Um ein vollständiges Beispiel zu sehen:


```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

When we call the function, we can then decide if we want to set a value for `salutation`.

```javascript
displayGreeting('Christopher');
// zeigt "Hallo Christopher!"

displayGreeting('Christopher', 'Hi');
// zeigt "Hi Christopher!"
```

## Rückgabewerte

Bisher wurde die von uns erstellte Funktion immer an die [Konsole](https://developer.mozilla.org/docs/Web/API/console) ausgegeben. Manchmal kann dies genau das sein, wonach wir suchen, insbesondere wenn wir Funktionen erstellen, die andere Dienste aufrufen. Was aber, wenn ich eine Hilfsfunktion erstellen möchte, um eine Berechnung durchzuführen und den Wert zurückzugeben, damit ich ihn an anderer Stelle verwenden kann?

Wir können dies tun, indem wir einen **Rückgabewert** verwenden. Ein Rückgabewert wird von der Funktion zurückgegeben und kann in einer Variablen genauso gespeichert werden, wie wir einen Literalwert wie eine Zeichenfolge oder eine Zahl speichern könnten.

Wenn eine Funktion etwas zurückgibt, wird das Schlüsselwort `return` verwendet. Das Schlüsselwort `return` erwartet einen Wert oder eine Referenz dessen, was wie folgt zurückgegeben wird:


```javascript
return myVariable;
```  

Wir könnten eine Funktion erstellen, um eine Begrüßungsnachricht zu erstellen und den Wert an den Anrufer zurückzugeben:

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

Beim Aufruf dieser Funktion speichern wir den Wert in einer Variablen. Dies ist fast die gleiche Art und Weise, wie wir eine Variable auf einen statischen Wert setzen würden (wie `const name = 'Christopher'`).

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

## Funktionen als Parameter für Funktionen

Im Laufe Ihrer Programmierkarriere werden Sie auf Funktionen stoßen, die Funktionen als Parameter akzeptieren. Dieser nette Trick wird häufig verwendet, wenn wir nicht wissen, wann etwas eintreten oder abgeschlossen sein wird, aber wir wissen, dass wir als Reaktion darauf eine Operation ausführen müssen.

Betrachten Sie als Beispiel [setTimeout](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout), das einen Timer startet und nach dessen Ausführung Code ausführt. Wir müssen ihm sagen, welchen Code wir ausführen wollen. Klingt nach einem perfekten Job für eine Veranstaltung!

Wenn Sie den folgenden Code ausführen, wird nach 3 Sekunden die Meldung **3 Sekunden sind verstrichen** angezeigt.


```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// Der Timer-Wert wird in Millisekunden angegeben
setTimeout(3000, displayDone);
```

### Anonyme Funktionen

Schauen wir uns noch einmal an, was wir gebaut haben. Wir erstellen eine Funktion mit einem Namen, der einmal verwendet wird. Wenn unsere Anwendung komplexer wird, können wir uns vorstellen, viele Funktionen zu erstellen, die nur einmal aufgerufen werden. Das ist nicht ideal. Wie sich herausstellt, müssen wir nicht immer einen Namen angeben!

Wenn wir eine Funktion als Parameter übergeben, können wir die Erstellung einer Funktion im Voraus umgehen und stattdessen eine als Teil des Parameters erstellen. Wir verwenden das gleiche Schlüsselwort `function`, aber stattdessen erstellen wir es als Parameter.

Schreiben wir den obigen Code neu, um eine anonyme Funktion zu verwenden:

```javascript
setTimeout(3000, function() {
  console.log('3 seconds has elapsed');
});
```

Wenn Sie unseren neuen Code ausführen, werden Sie feststellen, dass wir die gleichen Ergebnisse erhalten. Wir haben eine Funktion erstellt, mussten ihr aber keinen Namen geben!

### Fettpfeilfunktionen

Eine in vielen Programmiersprachen (einschließlich JavaScript) übliche Abkürzung ist die Möglichkeit, eine sogenannte **arrow** - oder **fat arrow** -Funktion zu verwenden. Es wird ein spezieller Indikator für `=>` verwendet, der wie ein Pfeil aussieht - daher der Name! Mit `=>` können wir das Schlüsselwort `function` überspringen.

Lassen Sie uns unseren Code noch einmal umschreiben, um eine Fettpfeilfunktion zu verwenden:


```javascript
setTimeout(3000, () => {
  console.log('3 seconds has elapsed');
});
```

### Wann wird jede Strategie angewendet?

Sie haben jetzt gesehen, dass wir drei Möglichkeiten haben, eine Funktion als Parameter zu übergeben, und fragen sich möglicherweise, wann sie jeweils verwendet werden sollen. Wenn Sie wissen, dass Sie die Funktion mehrmals verwenden, erstellen Sie sie wie gewohnt. Wenn Sie es nur für einen Ort verwenden, ist es im Allgemeinen am besten, eine anonyme Funktion zu verwenden. Ob Sie eine Fat-Arrow-Funktion oder die traditionellere `function` Syntax verwenden, liegt bei Ihnen, aber Sie werden feststellen, dass die meisten modernen Entwickler `=>` bevorzugen.


---

## 🚀 Herausforderung

Können Sie den Unterschied zwischen Funktionen und Methoden in einem Satz artikulieren? Versuche es!

## [Quiz nach der Vorlesung](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/10)

## Review & Selbststudium

Es lohnt sich, [etwas mehr über Pfeilfunktionen zu lesen](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), da diese zunehmend in Codebasen verwendet werden. Üben Sie, eine Funktion zu schreiben und sie dann mit dieser Syntax neu zu schreiben.

## Zuordnung

[Spaß mit Funktionen](assignment.de.md)