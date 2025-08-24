<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "46a0639e719b9cf1dfd062aa24cad639",
  "translation_date": "2025-08-24T12:00:14+00:00",
  "source_file": "3-terrarium/1-intro-to-html/README.md",
  "language_code": "de"
}
-->
# Terrarium-Projekt Teil 1: Einführung in HTML

![Einführung in HTML](../../../../sketchnotes/webdev101-html.png)
> Sketchnote von [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz vor der Lektion

[Quiz vor der Lektion](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/15)

> Schau dir das Video an

> 
> [![Video zu Git- und GitHub-Grundlagen](https://img.youtube.com/vi/1TvxJKBzhyQ/0.jpg)](https://www.youtube.com/watch?v=1TvxJKBzhyQ)

### Einführung

HTML, oder HyperText Markup Language, ist das 'Skelett' des Webs. Wenn CSS dein HTML 'anzieht' und JavaScript es zum Leben erweckt, dann ist HTML der Körper deiner Webanwendung. Die Syntax von HTML spiegelt diese Idee wider, da sie Tags wie "head", "body" und "footer" enthält.

In dieser Lektion werden wir HTML verwenden, um das 'Skelett' der Benutzeroberfläche unseres virtuellen Terrariums zu erstellen. Es wird einen Titel und drei Spalten haben: eine rechte und eine linke Spalte, in denen die verschiebbaren Pflanzen leben, und einen mittleren Bereich, der das eigentliche gläserne Terrarium darstellt. Am Ende dieser Lektion wirst du die Pflanzen in den Spalten sehen können, aber die Benutzeroberfläche wird noch etwas seltsam aussehen; keine Sorge, im nächsten Abschnitt wirst du CSS-Stile hinzufügen, um die Benutzeroberfläche ansprechender zu gestalten.

### Aufgabe

Erstelle auf deinem Computer einen Ordner namens 'terrarium' und darin eine Datei namens 'index.html'. Du kannst dies in Visual Studio Code tun, nachdem du deinen Terrarium-Ordner erstellt hast, indem du ein neues VS Code-Fenster öffnest, auf 'Ordner öffnen' klickst und zu deinem neuen Ordner navigierst. Klicke im Explorer-Bereich auf die kleine Schaltfläche 'Datei' und erstelle die neue Datei:

![Explorer in VS Code](../../../../3-terrarium/1-intro-to-html/images/vs-code-index.png)

Oder

Verwende diese Befehle in deinem Git Bash:
* `mkdir terrarium`
* `cd terrarium`
* `touch index.html`
* `code index.html` oder `nano index.html`

> index.html-Dateien zeigen einem Browser an, dass es sich um die Standarddatei in einem Ordner handelt; URLs wie `https://anysite.com/test` könnten auf einer Ordnerstruktur basieren, die einen Ordner namens `test` mit einer `index.html`-Datei enthält; `index.html` muss nicht in der URL angezeigt werden.

---

## Der DocType und die html-Tags

Die erste Zeile einer HTML-Datei ist ihr Doctype. Es ist etwas überraschend, dass diese Zeile ganz oben in der Datei stehen muss, aber sie teilt älteren Browsern mit, dass die Seite im Standardmodus gerendert werden soll, der der aktuellen HTML-Spezifikation entspricht.

> Tipp: In VS Code kannst du über ein Tag fahren, um Informationen über dessen Verwendung aus den MDN-Referenzleitfäden zu erhalten.

Die zweite Zeile sollte das öffnende `<html>`-Tag sein, gefolgt von seinem schließenden Tag `</html>`. Diese Tags sind die Wurzelelemente deiner Benutzeroberfläche.

### Aufgabe

Füge diese Zeilen oben in deiner `index.html`-Datei hinzu:

```HTML
<!DOCTYPE html>
<html></html>
```

✅ Es gibt einige verschiedene Modi, die durch das Festlegen des Doctype mit einer Abfragezeichenfolge bestimmt werden können: [Quirks Mode und Standards Mode](https://developer.mozilla.org/docs/Web/HTML/Quirks_Mode_and_Standards_Mode). Diese Modi dienten der Unterstützung wirklich alter Browser, die heutzutage normalerweise nicht mehr verwendet werden (Netscape Navigator 4 und Internet Explorer 5). Du kannst bei der Standard-Doctype-Deklaration bleiben.

---

## Der 'head' des Dokuments

Der 'head'-Bereich des HTML-Dokuments enthält wichtige Informationen über deine Webseite, auch bekannt als [Metadaten](https://developer.mozilla.org/docs/Web/HTML/Element/meta). In unserem Fall teilen wir dem Webserver, an den diese Seite gesendet wird, um gerendert zu werden, diese vier Dinge mit:

-   den Titel der Seite
-   Metadaten der Seite, einschließlich:
    -   des 'Zeichensatzes', der angibt, welche Zeichenkodierung auf der Seite verwendet wird
    -   Browserinformationen, einschließlich `x-ua-compatible`, das angibt, dass der IE=edge-Browser unterstützt wird
    -   Informationen darüber, wie das Viewport beim Laden reagieren soll. Das Festlegen des Viewports auf eine anfängliche Skalierung von 1 steuert den Zoomlevel, wenn die Seite zum ersten Mal geladen wird.

### Aufgabe

Füge einen 'head'-Block zu deinem Dokument zwischen den öffnenden und schließenden `<html>`-Tags hinzu.

```html
<head>
	<title>Welcome to my Virtual Terrarium</title>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
```

✅ Was würde passieren, wenn du ein Viewport-Meta-Tag wie dieses festlegst: `<meta name="viewport" content="width=600">`? Lies mehr über das [Viewport](https://developer.mozilla.org/docs/Web/HTML/Viewport_meta_tag).

---

## Der `body` des Dokuments

### HTML-Tags

In HTML fügst du Tags zu deiner .html-Datei hinzu, um Elemente einer Webseite zu erstellen. Jedes Tag hat normalerweise ein öffnendes und ein schließendes Tag, wie dieses: `<p>hallo</p>`, um einen Absatz anzuzeigen. Erstelle den Body deiner Benutzeroberfläche, indem du ein Paar `<body>`-Tags innerhalb des `<html>`-Tag-Paares hinzufügst; dein Markup sieht jetzt so aus:

### Aufgabe

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Welcome to my Virtual Terrarium</title>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</head>
	<body></body>
</html>
```

Jetzt kannst du anfangen, deine Seite zu erstellen. Normalerweise verwendest du `<div>`-Tags, um die separaten Elemente auf einer Seite zu erstellen. Wir werden eine Reihe von `<div>`-Elementen erstellen, die Bilder enthalten.

### Bilder

Ein HTML-Tag, das kein schließendes Tag benötigt, ist das `<img>`-Tag, da es ein `src`-Element hat, das alle Informationen enthält, die die Seite benötigt, um das Element zu rendern.

Erstelle einen Ordner in deiner App namens `images` und füge dort alle Bilder aus dem [Quellcode-Ordner](../../../../3-terrarium/solution/images) hinzu; (es gibt 14 Bilder von Pflanzen).

### Aufgabe

Füge diese Pflanzenbilder in zwei Spalten zwischen den `<body></body>`-Tags ein:

```html
<div id="page">
	<div id="left-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant1" src="./images/plant1.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant2" src="./images/plant2.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant3" src="./images/plant3.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant4" src="./images/plant4.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant5" src="./images/plant5.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant6" src="./images/plant6.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant7" src="./images/plant7.png" />
		</div>
	</div>
	<div id="right-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant8" src="./images/plant8.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant9" src="./images/plant9.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant10" src="./images/plant10.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant11" src="./images/plant11.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant12" src="./images/plant12.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant13" src="./images/plant13.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant14" src="./images/plant14.png" />
		</div>
	</div>
</div>
```

> Hinweis: Spans vs. Divs. Divs werden als 'Block'-Elemente betrachtet, und Spans sind 'Inline'-Elemente. Was würde passieren, wenn du diese Divs in Spans umwandelst?

Mit diesem Markup erscheinen die Pflanzen jetzt auf dem Bildschirm. Es sieht ziemlich schlecht aus, da sie noch nicht mit CSS gestylt sind, und das werden wir in der nächsten Lektion tun.

Jedes Bild hat einen Alt-Text, der angezeigt wird, auch wenn du ein Bild nicht sehen oder rendern kannst. Dies ist ein wichtiges Attribut, um die Barrierefreiheit zu gewährleisten. Erfahre mehr über Barrierefreiheit in zukünftigen Lektionen; für jetzt merke dir, dass das Alt-Attribut alternative Informationen für ein Bild bereitstellt, falls ein Benutzer das Bild aus irgendeinem Grund nicht sehen kann (aufgrund einer langsamen Verbindung, eines Fehlers im src-Attribut oder wenn der Benutzer einen Screenreader verwendet).

✅ Ist dir aufgefallen, dass jedes Bild denselben Alt-Tag hat? Ist das eine gute Praxis? Warum oder warum nicht? Kannst du diesen Code verbessern?

---

## Semantisches Markup

Im Allgemeinen ist es vorzuziehen, beim Schreiben von HTML sinnvolle 'Semantik' zu verwenden. Was bedeutet das? Es bedeutet, dass du HTML-Tags verwendest, um die Art der Daten oder Interaktionen darzustellen, für die sie entworfen wurden. Zum Beispiel sollte der Haupttiteltext auf einer Seite ein `<h1>`-Tag verwenden.

Füge die folgende Zeile direkt unter deinem öffnenden `<body>`-Tag hinzu:

```html
<h1>My Terrarium</h1>
```

Die Verwendung von semantischem Markup, wie das Verwenden von `<h1>` für Überschriften und `<ul>` für ungeordnete Listen, hilft Screenreadern, sich durch eine Seite zu navigieren. Im Allgemeinen sollten Schaltflächen als `<button>` geschrieben werden und Listen als `<li>`. Während es _möglich_ ist, speziell gestylte `<span>`-Elemente mit Klick-Handlern zu verwenden, um Schaltflächen zu imitieren, ist es für Benutzer mit Behinderungen besser, Technologien zu verwenden, um zu bestimmen, wo sich eine Schaltfläche auf einer Seite befindet, und mit ihr zu interagieren, wenn das Element als Schaltfläche erscheint. Aus diesem Grund solltest du so oft wie möglich semantisches Markup verwenden.

✅ Schau dir einen Screenreader an und [wie er mit einer Webseite interagiert](https://www.youtube.com/watch?v=OUDV1gqs9GA). Kannst du sehen, warum nicht-semantisches Markup den Benutzer frustrieren könnte?

## Das Terrarium

Der letzte Teil dieser Benutzeroberfläche besteht darin, ein Markup zu erstellen, das so gestylt wird, dass es ein Terrarium darstellt.

### Aufgabe:

Füge dieses Markup oberhalb des letzten `</div>`-Tags hinzu:

```html
<div id="terrarium">
	<div class="jar-top"></div>
	<div class="jar-walls">
		<div class="jar-glossy-long"></div>
		<div class="jar-glossy-short"></div>
	</div>
	<div class="dirt"></div>
	<div class="jar-bottom"></div>
</div>
```

✅ Obwohl du dieses Markup auf dem Bildschirm hinzugefügt hast, siehst du absolut nichts gerendert. Warum?

---

## 🚀Herausforderung

Es gibt einige wilde 'ältere' Tags in HTML, die immer noch Spaß machen, obwohl du veraltete Tags wie [diese Tags](https://developer.mozilla.org/docs/Web/HTML/Element#Obsolete_and_deprecated_elements) nicht in deinem Markup verwenden solltest. Kannst du trotzdem das alte `<marquee>`-Tag verwenden, um den h1-Titel horizontal scrollen zu lassen? (Falls du das machst, vergiss nicht, es danach zu entfernen.)

## Quiz nach der Lektion

[Quiz nach der Lektion](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/16)

## Rückblick & Selbststudium

HTML ist das 'bewährte' Bausteinsystem, das dazu beigetragen hat, das Web zu dem zu machen, was es heute ist. Erfahre ein wenig über seine Geschichte, indem du einige alte und neue Tags studierst. Kannst du herausfinden, warum einige Tags veraltet und andere hinzugefügt wurden? Welche Tags könnten in Zukunft eingeführt werden?

Erfahre mehr über den Aufbau von Websites für das Web und mobile Geräte bei [Microsoft Learn](https://docs.microsoft.com/learn/modules/build-simple-website/?WT.mc_id=academic-77807-sagibbon).

## Aufgabe

[Übe dein HTML: Erstelle ein Blog-Layout](assignment.md)

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, weisen wir darauf hin, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die sich aus der Nutzung dieser Übersetzung ergeben.