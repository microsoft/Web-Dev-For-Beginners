<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e4cd5b1faed4adab5acf720f82798003",
  "translation_date": "2025-08-24T12:53:27+00:00",
  "source_file": "1-getting-started-lessons/3-accessibility/README.md",
  "language_code": "de"
}
-->
# Erstellen barrierefreier Webseiten

![Alles über Barrierefreiheit](../../../../sketchnotes/webdev101-a11y.png)
> Sketchnote von [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz vor der Vorlesung
[Quiz vor der Vorlesung](https://ff-quizzes.netlify.app/web/quiz/5)

> Die Stärke des Webs liegt in seiner Universalität. Der Zugang für alle, unabhängig von Behinderung, ist ein wesentlicher Aspekt.
>
> \- Sir Timothy Berners-Lee, W3C-Direktor und Erfinder des World Wide Web

Dieses Zitat unterstreicht perfekt die Bedeutung der Erstellung barrierefreier Websites. Eine Anwendung, die nicht von allen genutzt werden kann, ist per Definition ausschließend. Als Webentwickler sollten wir Barrierefreiheit immer im Blick haben. Wenn Sie diesen Fokus von Anfang an haben, sind Sie auf dem besten Weg, sicherzustellen, dass jeder Zugang zu den von Ihnen erstellten Seiten hat. In dieser Lektion lernen Sie die Werkzeuge kennen, die Ihnen helfen, sicherzustellen, dass Ihre Webinhalte barrierefrei sind, und wie Sie mit Barrierefreiheit im Hinterkopf entwickeln können.

> Sie können diese Lektion auf [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/accessibility/?WT.mc_id=academic-77807-sagibbon) absolvieren!

## Zu verwendende Werkzeuge

### Screenreader

Eines der bekanntesten Barrierefreiheitswerkzeuge sind Screenreader.

[Screenreader](https://en.wikipedia.org/wiki/Screen_reader) sind häufig genutzte Clients für Menschen mit Sehbehinderungen. Während wir Zeit darauf verwenden, sicherzustellen, dass ein Browser die Informationen, die wir teilen möchten, korrekt darstellt, müssen wir auch sicherstellen, dass ein Screenreader dies tut.

Ein Screenreader liest eine Seite von oben nach unten hörbar vor. Wenn Ihre Seite nur aus Text besteht, wird der Reader die Informationen ähnlich wie ein Browser vermitteln. Natürlich sind Webseiten selten rein textbasiert; sie enthalten Links, Grafiken, Farben und andere visuelle Komponenten. Es muss darauf geachtet werden, dass diese Informationen korrekt von einem Screenreader gelesen werden.

Jeder Webentwickler sollte sich mit einem Screenreader vertraut machen. Wie oben hervorgehoben, ist es der Client, den Ihre Nutzer verwenden werden. Genauso wie Sie wissen, wie ein Browser funktioniert, sollten Sie lernen, wie ein Screenreader funktioniert. Glücklicherweise sind Screenreader in den meisten Betriebssystemen integriert.

Einige Browser haben auch integrierte Tools und Erweiterungen, die Text laut vorlesen oder sogar grundlegende Navigationsfunktionen bieten, wie [diese barrierefreiheitsorientierten Edge-Browser-Tools](https://support.microsoft.com/help/4000734/microsoft-edge-accessibility-features). Diese sind ebenfalls wichtige Barrierefreiheitswerkzeuge, funktionieren jedoch ganz anders als Screenreader und sollten nicht mit Screenreader-Testtools verwechselt werden.

✅ Probieren Sie einen Screenreader und einen Browser-Textleser aus. Unter Windows ist [Narrator](https://support.microsoft.com/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1/?WT.mc_id=academic-77807-sagibbon) standardmäßig enthalten, und [JAWS](https://webaim.org/articles/jaws/) und [NVDA](https://www.nvaccess.org/about-nvda/) können ebenfalls installiert werden. Unter macOS und iOS ist [VoiceOver](https://support.apple.com/guide/voiceover/welcome/10) standardmäßig installiert.

### Zoom

Ein weiteres Werkzeug, das häufig von Menschen mit Sehbehinderungen verwendet wird, ist das Zoomen. Die einfachste Art des Zoomens ist statisches Zoomen, gesteuert durch `Control + Pluszeichen (+)` oder durch das Verringern der Bildschirmauflösung. Diese Art des Zoomens bewirkt, dass die gesamte Seite vergrößert wird. Daher ist es wichtig, [responsives Design](https://developer.mozilla.org/docs/Learn/CSS/CSS_layout/Responsive_Design) zu verwenden, um eine gute Benutzererfahrung bei erhöhten Zoomstufen zu gewährleisten.

Eine andere Art des Zoomens basiert auf spezieller Software, die einen Bereich des Bildschirms vergrößert und schwenkt, ähnlich wie bei der Verwendung einer echten Lupe. Unter Windows ist [Magnifier](https://support.microsoft.com/windows/use-magnifier-to-make-things-on-the-screen-easier-to-see-414948ba-8b1c-d3bd-8615-0e5e32204198) integriert, und [ZoomText](https://www.freedomscientific.com/training/zoomtext/getting-started/) ist eine Drittanbieter-Vergrößerungssoftware mit mehr Funktionen und einer größeren Nutzerbasis. Sowohl macOS als auch iOS verfügen über eine integrierte Vergrößerungssoftware namens [Zoom](https://www.apple.com/accessibility/mac/vision/).

### Kontrastprüfer

Farben auf Websites müssen sorgfältig ausgewählt werden, um den Bedürfnissen von farbenblinden Nutzern oder Menschen, die Schwierigkeiten haben, Farben mit geringem Kontrast zu sehen, gerecht zu werden.

✅ Testen Sie eine Website, die Sie gerne nutzen, auf Farbverwendung mit einer Browser-Erweiterung wie [WCAGs Farbprüfer](https://microsoftedge.microsoft.com/addons/detail/wcag-color-contrast-check/idahaggnlnekelhgplklhfpchbfdmkjp?hl=en-US&WT.mc_id=academic-77807-sagibbon). Was lernen Sie?

### Lighthouse

Im Entwicklerbereich Ihres Browsers finden Sie das Lighthouse-Tool. Dieses Tool ist wichtig, um einen ersten Überblick über die Barrierefreiheit (sowie andere Analysen) einer Website zu erhalten. Während es wichtig ist, sich nicht ausschließlich auf Lighthouse zu verlassen, ist eine 100%-Bewertung als Ausgangspunkt sehr hilfreich.

✅ Finden Sie Lighthouse im Entwicklerbereich Ihres Browsers und führen Sie eine Analyse auf einer beliebigen Website durch. Was entdecken Sie?

## Gestaltung für Barrierefreiheit

Barrierefreiheit ist ein relativ großes Thema. Um Ihnen zu helfen, stehen zahlreiche Ressourcen zur Verfügung.

- [Accessible U - University of Minnesota](https://accessibility.umn.edu/your-role/web-developers)

Während wir nicht jeden Aspekt der Erstellung barrierefreier Websites abdecken können, finden Sie unten einige der Kernprinzipien, die Sie umsetzen sollten. Eine barrierefreie Seite von Anfang an zu gestalten ist **immer** einfacher, als eine bestehende Seite nachträglich barrierefrei zu machen.

## Gute Anzeigeprinzipien

### Farbpaletten, die sicher sind

Menschen sehen die Welt auf unterschiedliche Weise, und dazu gehören auch Farben. Wenn Sie ein Farbschema für Ihre Website auswählen, sollten Sie sicherstellen, dass es für alle zugänglich ist. Ein großartiges [Tool zur Erstellung von Farbpaletten ist Color Safe](http://colorsafe.co/).

✅ Identifizieren Sie eine Website, die in ihrer Farbverwendung sehr problematisch ist. Warum?

### Verwenden Sie das richtige HTML

Mit CSS und JavaScript ist es möglich, jedes Element wie jede Art von Steuerung aussehen zu lassen. `<span>` könnte verwendet werden, um einen `<button>` zu erstellen, und `<b>` könnte zu einem Hyperlink werden. Obwohl dies möglicherweise einfacher zu gestalten ist, vermittelt es einem Screenreader nichts. Verwenden Sie das passende HTML, wenn Sie Steuerungen auf einer Seite erstellen. Wenn Sie einen Hyperlink möchten, verwenden Sie `<a>`. Die Verwendung des richtigen HTML für die richtige Steuerung wird als Nutzung von semantischem HTML bezeichnet.

✅ Gehen Sie zu einer beliebigen Website und prüfen Sie, ob die Designer und Entwickler HTML korrekt verwenden. Können Sie einen Button finden, der ein Link sein sollte? Hinweis: Rechtsklicken Sie und wählen Sie 'Seitenquelltext anzeigen' in Ihrem Browser, um den zugrunde liegenden Code zu sehen.

### Erstellen Sie eine beschreibende Überschriftenhierarchie

Screenreader-Nutzer [verlassen sich stark auf Überschriften](https://webaim.org/projects/screenreadersurvey8/#finding), um Informationen zu finden und durch eine Seite zu navigieren. Das Schreiben beschreibender Überschrifteninhalte und die Verwendung semantischer Überschriften-Tags sind wichtig, um eine leicht navigierbare Seite für Screenreader-Nutzer zu erstellen.

### Verwenden Sie gute visuelle Hinweise

CSS bietet vollständige Kontrolle über das Aussehen jedes Elements auf einer Seite. Sie können Textfelder ohne Umrandung oder Hyperlinks ohne Unterstreichung erstellen. Leider kann das Entfernen dieser Hinweise es für jemanden, der darauf angewiesen ist, schwieriger machen, die Art der Steuerung zu erkennen.

## Die Bedeutung von Linktext

Hyperlinks sind zentral für die Navigation im Web. Daher ist es wichtig, dass ein Screenreader Links korrekt lesen kann, damit alle Nutzer Ihre Website navigieren können.

### Screenreader und Links

Wie Sie erwarten würden, lesen Screenreader Linktext genauso wie jeden anderen Text auf der Seite. Mit diesem Wissen könnte der unten gezeigte Text akzeptabel erscheinen.

> Der kleine Pinguin, manchmal auch als Feenpinguin bekannt, ist der kleinste Pinguin der Welt. [Hier klicken](https://en.wikipedia.org/wiki/Little_penguin) für weitere Informationen.

> Der kleine Pinguin, manchmal auch als Feenpinguin bekannt, ist der kleinste Pinguin der Welt. Besuchen Sie https://en.wikipedia.org/wiki/Little_penguin für weitere Informationen.

> **NOTE** Wie Sie gleich lesen werden, sollten Sie **niemals** Links erstellen, die wie die oben genannten aussehen.

Denken Sie daran, dass Screenreader eine andere Schnittstelle als Browser sind und über ein anderes Set an Funktionen verfügen.

### Das Problem mit der Verwendung der URL

Screenreader lesen den Text. Wenn eine URL im Text erscheint, wird der Screenreader die URL vorlesen. Im Allgemeinen vermittelt die URL keine sinnvollen Informationen und kann störend klingen. Sie haben dies möglicherweise erlebt, wenn Ihr Telefon jemals eine Textnachricht mit einer URL hörbar vorgelesen hat.

### Das Problem mit "Hier klicken"

Screenreader können auch nur die Hyperlinks auf einer Seite vorlesen, ähnlich wie eine sehende Person eine Seite nach Links durchsucht. Wenn der Linktext immer "Hier klicken" lautet, hört der Nutzer nur "Hier klicken, Hier klicken, Hier klicken, Hier klicken, Hier klicken, ..." Alle Links sind jetzt nicht mehr voneinander unterscheidbar.

### Guter Linktext

Guter Linktext beschreibt kurz, was sich hinter dem Link befindet. Im obigen Beispiel über kleine Pinguine führt der Link zur Wikipedia-Seite über die Art. Der Ausdruck *kleine Pinguine* wäre perfekter Linktext, da er klar macht, was jemand erfährt, wenn er auf den Link klickt - kleine Pinguine.

> Der [kleine Pinguin](https://en.wikipedia.org/wiki/Little_penguin), manchmal auch als Feenpinguin bekannt, ist der kleinste Pinguin der Welt.

✅ Surfen Sie ein paar Minuten im Web, um Seiten zu finden, die undurchsichtige Verlinkungsstrategien verwenden. Vergleichen Sie sie mit anderen, besser verlinkten Seiten. Was lernen Sie?

#### Hinweise für Suchmaschinen

Als zusätzlicher Vorteil, wenn Sie sicherstellen, dass Ihre Website für alle zugänglich ist, helfen Sie auch Suchmaschinen, Ihre Website zu navigieren. Suchmaschinen verwenden Linktext, um die Themen von Seiten zu verstehen. Das Verwenden von gutem Linktext hilft also allen!

### ARIA

Stellen Sie sich die folgende Seite vor:

| Produkt      | Beschreibung       | Bestellung   |
| ------------ | ------------------ | ------------ |
| Widget       | [Beschreibung](../../../../1-getting-started-lessons/3-accessibility/') | [Bestellen](../../../../1-getting-started-lessons/3-accessibility/') |
| Super Widget | [Beschreibung](../../../../1-getting-started-lessons/3-accessibility/') | [Bestellen](../../../../1-getting-started-lessons/3-accessibility/') |

In diesem Beispiel macht es für jemanden, der einen Browser verwendet, Sinn, den Text von Beschreibung und Bestellung zu duplizieren. Allerdings würde jemand, der einen Screenreader verwendet, nur die Wörter *Beschreibung* und *Bestellung* wiederholt hören, ohne Kontext.

Um solche Szenarien zu unterstützen, unterstützt HTML eine Reihe von Attributen, die als [Accessible Rich Internet Applications (ARIA)](https://developer.mozilla.org/docs/Web/Accessibility/ARIA) bekannt sind. Diese Attribute ermöglichen es Ihnen, Screenreadern zusätzliche Informationen bereitzustellen.

> **NOTE**: Wie viele Aspekte von HTML kann die Unterstützung durch Browser und Screenreader variieren. Die meisten gängigen Clients unterstützen jedoch ARIA-Attribute.

Sie können `aria-label` verwenden, um den Link zu beschreiben, wenn das Format der Seite dies nicht zulässt. Die Beschreibung für Widget könnte wie folgt festgelegt werden:

``` html
<a href="#" aria-label="Widget description">description</a>
```

✅ Im Allgemeinen übertrifft die Verwendung von semantischem Markup wie oben beschrieben die Verwendung von ARIA, aber manchmal gibt es keine semantische Entsprechung für verschiedene HTML-Widgets. Ein gutes Beispiel ist ein Baum. Es gibt keine HTML-Entsprechung für einen Baum, daher identifizieren Sie das generische `<div>` für dieses Element mit einer passenden Rolle und ARIA-Werten. Die [MDN-Dokumentation zu ARIA](https://developer.mozilla.org/docs/Web/Accessibility/ARIA) enthält weitere nützliche Informationen.

```html
<h2 id="tree-label">File Viewer</h2>
<div role="tree" aria-labelledby="tree-label">
  <div role="treeitem" aria-expanded="false" tabindex="0">Uploads</div>
</div>
```

## Bilder

Es versteht sich von selbst, dass Screenreader nicht automatisch lesen können, was in einem Bild enthalten ist. Sicherzustellen, dass Bilder barrierefrei sind, erfordert nicht viel Arbeit - dafür ist das `alt`-Attribut da. Alle bedeutungsvollen Bilder sollten ein `alt` haben, um zu beschreiben, was sie sind. Bilder, die rein dekorativ sind, sollten ihr `alt`-Attribut auf einen leeren String setzen: `alt=""`. Dies verhindert, dass Screenreader das dekorative Bild unnötig ankündigen.

✅ Wie Sie vielleicht erwarten, können Suchmaschinen auch nicht verstehen, was in einem Bild enthalten ist. Sie verwenden ebenfalls Alt-Text. Daher bietet das Sicherstellen der Barrierefreiheit Ihrer Seite zusätzliche Vorteile!

## Die Tastatur

Einige Nutzer können keine Maus oder kein Trackpad verwenden und sind stattdessen auf Tastaturinteraktionen angewiesen, um von einem Element zum nächsten zu wechseln. Es ist wichtig, dass Ihre Website Ihre Inhalte in logischer Reihenfolge präsentiert, damit ein Tastaturnutzer jedes interaktive Element erreichen kann, während er ein Dokument durchgeht. Wenn Sie Ihre Webseiten mit semantischem Markup erstellen und CSS verwenden, um deren visuelles Layout zu gestalten, sollte Ihre Website mit der Tastatur navigierbar sein. Es ist jedoch wichtig, diesen Aspekt manuell zu testen. Erfahren Sie mehr über [Strategien zur Tastaturnavigation](https://webaim.org/techniques/keyboard/).

✅ Gehen Sie zu einer beliebigen Website und versuchen Sie, nur mit Ihrer Tastatur durch sie zu navigieren. Was funktioniert, was funktioniert nicht? Warum?

## Zusammenfassung

Ein Web, das nur für einige zugänglich ist, ist kein wirkliches 'World Wide Web'. Der beste Weg, um sicherzustellen, dass die von Ihnen erstellten Seiten barrierefrei sind, besteht darin, Barrierefreiheits-Best Practices von Anfang an zu integrieren. Während zusätzliche Schritte erforderlich sind, bedeutet das Einbinden dieser Fähigkeiten in Ihren Workflow jetzt, dass alle Seiten, die Sie erstellen, barrierefrei sein werden.

---

## 🚀 Herausforderung

Nehmen Sie dieses HTML und schreiben Sie es so um, dass es so barrierefrei wie möglich ist, basierend auf den Strategien, die Sie gelernt haben.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>
      Example
    </title>
    <link href='../assets/style.css' rel='stylesheet' type='text/css'>
  </head>
  <body>
    <div class="site-header">
      <p class="site-title">Turtle Ipsum</p>
      <p class="site-subtitle">The World's Premier Turtle Fan Club</p>
    </div>
    <div class="main-nav">
      <p class="nav-header">Resources</p>
      <div class="nav-list">
        <p class="nav-item nav-item-bull"><a href="https://www.youtube.com/watch?v=CMNry4PE93Y">"I like turtles"</a></p>
        <p class="nav-item nav-item-bull"><a href="https://en.wikipedia.org/wiki/Turtle">Basic Turtle Info</a></p>
        <p class="nav-item nav-item-bull"><a href="https://en.wikipedia.org/wiki/Turtles_(chocolate)">Chocolate Turtles</a></p>
      </div>
    </div>
    <div class="main-content">
      <div>
        <p class="page-title">Welcome to Turtle Ipsum. 
            <a href="">Click here</a> to learn more.
        </p>
        <p class="article-text">
          Turtle ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </div>
    <div class="footer">
      <div class="footer-section">
        <span class="button">Sign up for turtle news</span>
      </div><div class="footer-section">
        <p class="nav-header footer-title">
          Internal Pages
        </p>
        <div class="nav-list">
          <p class="nav-item nav-item-bull"><a href="../">Index</a></p>
          <p class="nav-item nav-item-bull"><a href="../semantic">Semantic Example</a></p>
        </div>
      </div>
      <p class="footer-copyright">&copy; 2016 Instrument</span>
    </div>
  </body>
</html>
```

## Quiz nach der Vorlesung
[Quiz nach der Vorlesung](https://ff-quizzes.netlify.app/web/quiz/6)

## Überprüfung & Selbststudium
Viele Regierungen haben Gesetze zu Barrierefreiheitsanforderungen. Informiere dich über die Barrierefreiheitsgesetze in deinem Heimatland. Was wird abgedeckt und was nicht? Ein Beispiel ist [diese Regierungswebseite](https://accessibility.blog.gov.uk/).

## Aufgabe

[Analysiere eine nicht barrierefreie Webseite](assignment.md)

Credits: [Turtle Ipsum](https://github.com/Instrument/semantic-html-sample) von Instrument

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, weisen wir darauf hin, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die sich aus der Nutzung dieser Übersetzung ergeben.