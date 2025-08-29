<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "61c14b27044861e5e69db35dd52c4403",
  "translation_date": "2025-08-29T14:15:53+00:00",
  "source_file": "3-terrarium/3-intro-to-DOM-and-closures/README.md",
  "language_code": "de"
}
-->
# Terrarium-Projekt Teil 3: DOM-Manipulation und eine Closure

![DOM und eine Closure](../../../../translated_images/webdev101-js.10280393044d7eaaec7e847574946add7ddae6be2b2194567d848b61d849334a.de.png)
> Sketchnote von [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz vor der Vorlesung

[Quiz vor der Vorlesung](https://ff-quizzes.netlify.app/web/quiz/19)

### Einführung

Die Manipulation des DOM, oder des "Document Object Model", ist ein zentraler Aspekt der Webentwicklung. Laut [MDN](https://developer.mozilla.org/docs/Web/API/Document_Object_Model/Introduction) ist "Das Document Object Model (DOM) die Datenrepräsentation der Objekte, die die Struktur und den Inhalt eines Dokuments im Web ausmachen." Die Herausforderungen rund um die DOM-Manipulation im Web haben oft dazu geführt, dass JavaScript-Frameworks anstelle von Vanilla-JavaScript verwendet werden, um das DOM zu verwalten. Aber wir werden es selbst schaffen!

Darüber hinaus wird in dieser Lektion die Idee einer [JavaScript-Closure](https://developer.mozilla.org/docs/Web/JavaScript/Closures) eingeführt, die man sich als eine Funktion vorstellen kann, die von einer anderen Funktion umschlossen ist, sodass die innere Funktion Zugriff auf den Scope der äußeren Funktion hat.

> JavaScript-Closures sind ein umfangreiches und komplexes Thema. Diese Lektion behandelt die grundlegende Idee, dass im Code dieses Terrariums eine Closure zu finden ist: eine innere Funktion und eine äußere Funktion, die so konstruiert sind, dass die innere Funktion Zugriff auf den Scope der äußeren Funktion hat. Für weitere Informationen darüber, wie dies funktioniert, besuchen Sie bitte die [ausführliche Dokumentation](https://developer.mozilla.org/docs/Web/JavaScript/Closures).

Wir werden eine Closure verwenden, um das DOM zu manipulieren.

Stellen Sie sich das DOM als einen Baum vor, der alle Möglichkeiten darstellt, wie ein Webseitendokument manipuliert werden kann. Verschiedene APIs (Application Program Interfaces) wurden entwickelt, damit Programmierer mit ihrer bevorzugten Programmiersprache auf das DOM zugreifen und es bearbeiten, ändern, umorganisieren und anderweitig verwalten können.

![Darstellung des DOM-Baums](../../../../translated_images/dom-tree.7daf0e763cbbba9273f9a66fe04c98276d7d23932309b195cb273a9cf1819b42.de.png)

> Eine Darstellung des DOM und des HTML-Markups, das darauf verweist. Von [Olfa Nasraoui](https://www.researchgate.net/publication/221417012_Profile-Based_Focused_Crawler_for_Social_Media-Sharing_Websites)

In dieser Lektion werden wir unser interaktives Terrarium-Projekt abschließen, indem wir das JavaScript erstellen, das es einem Benutzer ermöglicht, die Pflanzen auf der Seite zu manipulieren.

### Voraussetzung

Sie sollten das HTML und CSS für Ihr Terrarium erstellt haben. Am Ende dieser Lektion werden Sie in der Lage sein, die Pflanzen durch Ziehen in und aus dem Terrarium zu bewegen.

### Aufgabe

Erstellen Sie in Ihrem Terrarium-Ordner eine neue Datei namens `script.js`. Importieren Sie diese Datei im `<head>`-Abschnitt:

```html
	<script src="./script.js" defer></script>
```

> Hinweis: Verwenden Sie `defer`, wenn Sie eine externe JavaScript-Datei in die HTML-Datei importieren, damit das JavaScript erst ausgeführt wird, nachdem die HTML-Datei vollständig geladen wurde. Sie könnten auch das `async`-Attribut verwenden, das es dem Skript ermöglicht, während des Parsens der HTML-Datei ausgeführt zu werden. In unserem Fall ist es jedoch wichtig, dass die HTML-Elemente vollständig verfügbar sind, bevor wir das Drag-Skript ausführen.
---

## Die DOM-Elemente

Das erste, was Sie tun müssen, ist, Referenzen zu den Elementen zu erstellen, die Sie im DOM manipulieren möchten. In unserem Fall sind dies die 14 Pflanzen, die derzeit in den Seitenleisten warten.

### Aufgabe

```html
dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));
```

Was passiert hier? Sie referenzieren das Dokument und durchsuchen dessen DOM, um ein Element mit einer bestimmten Id zu finden. Erinnern Sie sich an die erste Lektion über HTML, in der Sie jedem Pflanzenbild individuelle Ids zugewiesen haben (`id="plant1"`)? Jetzt werden Sie diese Arbeit nutzen. Nachdem Sie jedes Element identifiziert haben, übergeben Sie dieses Element an eine Funktion namens `dragElement`, die Sie gleich erstellen werden. Somit ist das Element im HTML jetzt drag-fähig oder wird es gleich sein.

✅ Warum referenzieren wir Elemente nach Id? Warum nicht nach ihrer CSS-Klasse? Sie könnten auf die vorherige Lektion über CSS zurückgreifen, um diese Frage zu beantworten.

---

## Die Closure

Jetzt sind Sie bereit, die `dragElement`-Closure zu erstellen, die eine äußere Funktion ist, die eine innere Funktion oder mehrere umschließt (in unserem Fall werden es drei sein).

Closures sind nützlich, wenn eine oder mehrere Funktionen Zugriff auf den Scope einer äußeren Funktion benötigen. Hier ist ein Beispiel:

```javascript
function displayCandy(){
	let candy = ['jellybeans'];
	function addCandy(candyType) {
		candy.push(candyType)
	}
	addCandy('gumdrops');
}
displayCandy();
console.log(candy)
```

In diesem Beispiel umgibt die Funktion `displayCandy` eine Funktion, die eine neue Süßigkeit in ein Array einfügt, das bereits in der Funktion existiert. Wenn Sie diesen Code ausführen würden, wäre das `candy`-Array undefiniert, da es eine lokale Variable ist (lokal zur Closure).

✅ Wie können Sie das `candy`-Array zugänglich machen? Versuchen Sie, es außerhalb der Closure zu verschieben. Auf diese Weise wird das Array global, anstatt nur im lokalen Scope der Closure verfügbar zu sein.

### Aufgabe

Erstellen Sie unter den Elementdeklarationen in `script.js` eine Funktion:

```javascript
function dragElement(terrariumElement) {
	//set 4 positions for positioning on the screen
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	terrariumElement.onpointerdown = pointerDrag;
}
```

`dragElement` erhält sein `terrariumElement`-Objekt aus den Deklarationen am Anfang des Skripts. Dann setzen Sie einige lokale Positionen auf `0` für das Objekt, das in die Funktion übergeben wird. Dies sind die lokalen Variablen, die für jedes Element manipuliert werden, während Sie Drag-and-Drop-Funktionalität innerhalb der Closure zu jedem Element hinzufügen. Das Terrarium wird von diesen gezogenen Elementen bevölkert, sodass die Anwendung verfolgen muss, wo sie platziert werden.

Darüber hinaus wird das `terrariumElement`, das an diese Funktion übergeben wird, einem `pointerdown`-Event zugewiesen, das Teil der [Web-APIs](https://developer.mozilla.org/docs/Web/API) ist, die zur Unterstützung der DOM-Verwaltung entwickelt wurden. `onpointerdown` wird ausgelöst, wenn eine Taste gedrückt wird oder in unserem Fall ein ziehbares Element berührt wird. Dieser Event-Handler funktioniert sowohl auf [Web- als auch auf mobilen Browsern](https://caniuse.com/?search=onpointerdown), mit einigen Ausnahmen.

✅ Der [Event-Handler `onclick`](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick) hat eine viel größere Unterstützung über verschiedene Browser hinweg; warum würden Sie ihn hier nicht verwenden? Denken Sie über die genaue Art der Bildschirminteraktion nach, die Sie hier erstellen möchten.

---

## Die Pointerdrag-Funktion

Das `terrariumElement` ist bereit, herumgezogen zu werden; wenn das `onpointerdown`-Event ausgelöst wird, wird die Funktion `pointerDrag` aufgerufen. Fügen Sie diese Funktion direkt unter dieser Zeile hinzu: `terrariumElement.onpointerdown = pointerDrag;`:

### Aufgabe 

```javascript
function pointerDrag(e) {
	e.preventDefault();
	console.log(e);
	pos3 = e.clientX;
	pos4 = e.clientY;
}
```

Es passieren mehrere Dinge. Erstens verhindern Sie die Standardereignisse, die normalerweise bei `pointerdown` auftreten, indem Sie `e.preventDefault();` verwenden. Auf diese Weise haben Sie mehr Kontrolle über das Verhalten der Benutzeroberfläche.

> Kehren Sie zu dieser Zeile zurück, wenn Sie die Skriptdatei vollständig erstellt haben, und versuchen Sie es ohne `e.preventDefault()` - was passiert?

Zweitens öffnen Sie `index.html` in einem Browserfenster und inspizieren die Benutzeroberfläche. Wenn Sie auf eine Pflanze klicken, können Sie sehen, wie das 'e'-Event erfasst wird. Untersuchen Sie das Event, um zu sehen, wie viele Informationen durch ein einziges `pointerdown`-Event gesammelt werden!

Als Nächstes beachten Sie, wie die lokalen Variablen `pos3` und `pos4` auf `e.clientX` gesetzt werden. Sie können die `e`-Werte im Inspektionsfenster finden. Diese Werte erfassen die x- und y-Koordinaten der Pflanze in dem Moment, in dem Sie darauf klicken oder sie berühren. Sie benötigen eine feingranulare Kontrolle über das Verhalten der Pflanzen, während Sie sie klicken und ziehen, daher verfolgen Sie ihre Koordinaten.

✅ Wird es klarer, warum diese gesamte App mit einer großen Closure erstellt wurde? Wenn nicht, wie würden Sie den Scope für jede der 14 ziehbaren Pflanzen aufrechterhalten?

Vervollständigen Sie die Anfangsfunktion, indem Sie zwei weitere Pointer-Event-Manipulationen unter `pos4 = e.clientY` hinzufügen:

```html
document.onpointermove = elementDrag;
document.onpointerup = stopElementDrag;
```
Jetzt geben Sie an, dass Sie möchten, dass die Pflanze zusammen mit dem Zeiger bewegt wird, während Sie sie ziehen, und dass die Ziehbewegung stoppt, wenn Sie die Pflanze abwählen. `onpointermove` und `onpointerup` sind alle Teil derselben API wie `onpointerdown`. Die Benutzeroberfläche wird jetzt Fehler werfen, da Sie die Funktionen `elementDrag` und `stopElementDrag` noch nicht definiert haben. Erstellen Sie diese als Nächstes.

## Die Funktionen elementDrag und stopElementDrag

Sie werden Ihre Closure vervollständigen, indem Sie zwei weitere interne Funktionen hinzufügen, die steuern, was passiert, wenn Sie eine Pflanze ziehen und das Ziehen beenden. Das gewünschte Verhalten ist, dass Sie jederzeit jede Pflanze ziehen und sie überall auf dem Bildschirm platzieren können. Diese Benutzeroberfläche ist ziemlich unvoreingenommen (es gibt beispielsweise keine Drop-Zone), um Ihnen zu ermöglichen, Ihr Terrarium genau so zu gestalten, wie Sie es möchten, indem Sie Pflanzen hinzufügen, entfernen und neu positionieren.

### Aufgabe

Fügen Sie die Funktion `elementDrag` direkt nach der schließenden geschweiften Klammer von `pointerDrag` hinzu:

```javascript
function elementDrag(e) {
	pos1 = pos3 - e.clientX;
	pos2 = pos4 - e.clientY;
	pos3 = e.clientX;
	pos4 = e.clientY;
	console.log(pos1, pos2, pos3, pos4);
	terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
	terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
}
```
In dieser Funktion bearbeiten Sie viele der Anfangspositionen 1-4, die Sie als lokale Variablen in der äußeren Funktion gesetzt haben. Was passiert hier?

Während Sie ziehen, weisen Sie `pos1` neu zu, indem Sie es gleich `pos3` setzen (das Sie zuvor als `e.clientX` gesetzt haben), minus dem aktuellen `e.clientX`-Wert. Sie führen eine ähnliche Operation für `pos2` durch. Dann setzen Sie `pos3` und `pos4` auf die neuen X- und Y-Koordinaten des Elements zurück. Sie können diese Änderungen in der Konsole beobachten, während Sie ziehen. Dann manipulieren Sie den CSS-Stil der Pflanze, um ihre neue Position basierend auf den neuen Positionen von `pos1` und `pos2` zu setzen, indem Sie die oberen und linken X- und Y-Koordinaten der Pflanze basierend auf ihrem Offset mit diesen neuen Positionen berechnen.

> `offsetTop` und `offsetLeft` sind CSS-Eigenschaften, die die Position eines Elements basierend auf der seines Elternteils setzen; das Elternteil kann jedes Element sein, das nicht als `static` positioniert ist.

All diese Neuberechnung der Positionierung ermöglicht es Ihnen, das Verhalten des Terrariums und seiner Pflanzen fein abzustimmen.

### Aufgabe 

Die letzte Aufgabe, um die Benutzeroberfläche zu vervollständigen, besteht darin, die Funktion `stopElementDrag` nach der schließenden geschweiften Klammer von `elementDrag` hinzuzufügen:

```javascript
function stopElementDrag() {
	document.onpointerup = null;
	document.onpointermove = null;
}
```

Diese kleine Funktion setzt die `onpointerup`- und `onpointermove`-Events zurück, sodass Sie entweder den Fortschritt Ihrer Pflanze neu starten können, indem Sie sie erneut ziehen, oder beginnen können, eine neue Pflanze zu ziehen.

✅ Was passiert, wenn Sie diese Events nicht auf null setzen?

Jetzt haben Sie Ihr Projekt abgeschlossen!

🥇Herzlichen Glückwunsch! Sie haben Ihr wunderschönes Terrarium fertiggestellt. ![fertiges Terrarium](../../../../translated_images/terrarium-final.0920f16e87c13a84cd2b553a5af9a3ad1cffbd41fbf8ce715d9e9c43809a5e2c.de.png)

---

## 🚀Herausforderung

Fügen Sie Ihrer Closure einen neuen Event-Handler hinzu, um etwas mehr mit den Pflanzen zu machen; zum Beispiel, doppelklicken Sie auf eine Pflanze, um sie in den Vordergrund zu bringen. Werden Sie kreativ!

## Quiz nach der Vorlesung

[Quiz nach der Vorlesung](https://ff-quizzes.netlify.app/web/quiz/20)

## Überprüfung & Selbststudium

Obwohl das Ziehen von Elementen über den Bildschirm trivial erscheint, gibt es viele Möglichkeiten, dies zu tun, und viele Fallstricke, abhängig von dem gewünschten Effekt. Tatsächlich gibt es eine gesamte [Drag-and-Drop-API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API), die Sie ausprobieren können. Wir haben sie in diesem Modul nicht verwendet, da der gewünschte Effekt etwas anders war, aber probieren Sie diese API in Ihrem eigenen Projekt aus und sehen Sie, was Sie erreichen können.

Weitere Informationen zu Pointer-Events finden Sie in den [W3C-Dokumenten](https://www.w3.org/TR/pointerevents1/) und in den [MDN-Web-Dokumenten](https://developer.mozilla.org/docs/Web/API/Pointer_events).

Überprüfen Sie immer die Browser-Fähigkeiten mit [CanIUse.com](https://caniuse.com/).

## Aufgabe

[Arbeiten Sie ein wenig mehr mit dem DOM](assignment.md)

---

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, beachten Sie bitte, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die sich aus der Nutzung dieser Übersetzung ergeben.