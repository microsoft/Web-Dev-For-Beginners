# HTML-Übungsaufgabe: Erstellen Sie ein Blog-Mockup

## Lernziele

Wenden Sie Ihr HTML-Wissen an, indem Sie eine vollständige Blog-Startseitenstruktur entwerfen und codieren. Diese praktische Aufgabe festigt Konzepte des semantischen HTML, bewährte Zugänglichkeitspraktiken und professionelle Fähigkeiten zur Codeorganisation, die Sie auf Ihrer gesamten Webentwicklungsreise anwenden werden.

**Durch das Abschließen dieser Aufgabe werden Sie:**
- Das Planen von Webseiten-Layouts vor dem Coden üben
- Semantische HTML-Elemente angemessen anwenden
- Zugängliche, gut strukturierte Markups erstellen
- Professionelle Codiergewohnheiten mit Kommentaren und Organisation entwickeln

## Projektanforderungen

### Teil 1: Designplanung (Visuelles Mockup)

**Erstellen Sie ein visuelles Mockup Ihrer Blog-Startseite, das umfasst:**
- Header mit Seitentitel und Navigation
- Hauptinhalt mit mindestens 2-3 Blog-Post-Vorschauen
- Seitenleiste mit zusätzlichen Informationen (Über-Mich-Bereich, letzte Beiträge, Kategorien)
- Footer mit Kontaktinformationen oder Links

**Optionen zur Erstellung des Mockups:**
- **Handgezeichnete Skizze**: Verwenden Sie Papier und Bleistift, fotografieren oder scannen Sie dann Ihr Design
- **Digitale Werkzeuge**: Figma, Adobe XD, Canva, PowerPoint oder eine beliebige Zeichenanwendung
- **Wireframe-Tools**: Balsamiq, MockFlow oder ähnliche Wireframing-Software

**Beschriften Sie die Abschnitte Ihres Mockups** mit den HTML-Elementen, die Sie verwenden möchten (z.B. „Header - `<header>`“, „Blogbeiträge - `<article>`“).

### Teil 2: HTML-Elementplanung

**Erstellen Sie eine Liste, die jeden Abschnitt Ihres Mockups bestimmten HTML-Elementen zuordnet:**

```
Example:
- Site Header → <header>
- Main Navigation → <nav> with <ul> and <li>
- Blog Post → <article> with <h2>, <p>, <time>
- Sidebar → <aside> with <section> elements
- Page Footer → <footer>
```

**Erforderliche einzubeziehende Elemente:**
Ihr HTML muss mindestens 10 verschiedene semantische Elemente aus dieser Liste enthalten:
- `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
- `<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, `<a>`
- `<img>`, `<time>`, `<blockquote>`, `<strong>`, `<em>`

### Teil 3: HTML-Implementierung

**Codieren Sie Ihre Blog-Startseite nach diesen Standards:**

1. **Dokumentenstruktur**: Enthalten Sie korrekten DOCTYPE, html-, head- und body-Elemente
2. **Semantische Markup**: Verwenden Sie HTML-Elemente für ihren vorgesehenen Zweck
3. **Zugänglichkeit**: Fügen Sie alt-Text für Bilder und aussagekräftige Linktexte hinzu
4. **Codequalität**: Nutzen Sie einheitliche Einrückungen und aussagekräftige Kommentare
5. **Inhalt**: Fügen Sie realistischen Blog-Inhalt ein (Sie können Platzhaltertext verwenden)

**Beispielhafte HTML-Struktur:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Blog</title>
</head>
<body>
    <!-- Main site header -->
    <header>
        <h1>My Blog Title</h1>
        <nav>
            <!-- Navigation menu -->
        </nav>
    </header>
    
    <!-- Main content area -->
    <main>
        <!-- Blog posts go here -->
    </main>
    
    <!-- Sidebar content -->
    <aside>
        <!-- Additional information -->
    </aside>
    
    <!-- Site footer -->
    <footer>
        <!-- Footer content -->
    </footer>
</body>
</html>
```

### Teil 4: Reflexion

**Verfassen Sie eine kurze Reflexion (3-5 Sätze), in der Sie auf folgende Fragen eingehen:**
- Bei welchen HTML-Elementen fühlten Sie sich am sichersten?
- Welche Herausforderungen hatten Sie bei der Planung oder Codierung?
- Wie hat das semantische HTML geholfen, Ihren Inhalt zu organisieren?
- Was würden Sie in Ihrem nächsten HTML-Projekt anders machen?

## Abgabe-Checkliste

**Stellen Sie vor der Abgabe sicher, dass Sie:**
- [ ] Visuelles Mockup mit beschrifteten HTML-Elementen
- [ ] Vollständige HTML-Datei mit korrekter Dokumentstruktur
- [ ] Mindestens 10 verschiedene semantische HTML-Elemente richtig verwendet
- [ ] Sinnvolle Kommentare zur Erläuterung Ihrer Code-Struktur
- [ ] Gültige HTML-Syntax (im Browser getestet)
- [ ] Geschriebene Reflexion, die die gestellten Fragen beantwortet

## Bewertungsrubrik

| Kriterien | Vorbildlich (4) | Kompetent (3) | Entwickelnd (2) | Anfang (1) |
|----------|-----------------|---------------|-----------------|------------|
| **Planung & Design** | Detailliertes, gut beschriftetes Mockup, das klares Verständnis von Layout und semantischer HTML-Struktur zeigt | Klare Mockup mit den meisten Abschnitten angemessen beschriftet | Einfaches Mockup mit wenigen Beschriftungen, zeigt grundsätzliches Verständnis | Minimales oder unklar beschriftetes Mockup, keine korrekte Abschnittskennung |
| **Semantische HTML-Nutzung** | Verwendet 10+ semantische Elemente angemessen, zeigt tiefes Verständnis von HTML-Struktur und Zugänglichkeit | Verwendet 8-9 semantische Elemente korrekt, zeigt gutes Verständnis von semantischem Markup | Verwendet 6-7 semantische Elemente, gewisse Verwirrung bei der angemessenen Nutzung | Verwendet weniger als 6 Elemente oder missbraucht semantische Elemente |
| **Codequalität & Organisation** | Außerordentlich gut organisierter, korrekt eingerückter Code mit umfassenden Kommentaren und perfekter HTML-Syntax | Gut organisierter Code mit guter Einrückung, hilfreichen Kommentaren und gültiger Syntax | Meistens organisierter Code mit einigen Kommentaren, kleine Syntaxfehler | Schlechte Organisation, minimale Kommentare, mehrere Syntaxfehler |
| **Zugänglichkeit & Best Practices** | Hervorragende Berücksichtigung der Zugänglichkeit, aussagekräftiger alt-Text, korrekte Überschriftenhierarchie, folgt modernen HTML-Praktiken | Gute Zugänglichkeitsmerkmale, angemessener Einsatz von Überschriften und alt-Text, folgt den meisten Best Practices | Einige Zugänglichkeitsüberlegungen, grundlegender alt-Text und Überschriftenstruktur | Eingeschränkte Zugänglichkeitsmerkmale, schlechte Überschriftenstruktur, hält sich nicht an Best Practices |
| **Reflexion & Lernen** | Tiefgehende Reflexion mit klarem Verständnis der HTML-Konzepte und durchdachter Analyse des Lernprozesses | Gute Reflexion mit Verständnis wichtiger Konzepte und gewissem Bewusstsein zum Lernprozess | Grundlegende Reflexion mit begrenztem Einblick in HTML-Konzepte oder Lernprozess | Minimale oder fehlende Reflexion, zeigt wenig Verständnis der erlernten Konzepte |

## Lernressourcen

**Wichtige Referenzen:**
- [MDN HTML Elements Reference](https://developer.mozilla.org/docs/Web/HTML/Element) – Komplette Anleitung zu allen HTML-Elementen
- [HTML5 Semantic Elements](https://developer.mozilla.org/docs/Web/HTML/Element#content_sectioning) – Verständnis semantischer Markups
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) – Erstellung zugänglicher Webinhalte
- [HTML Validator](https://validator.w3.org/) – Prüfen Sie Ihre HTML-Syntax

**Pro-Tipps für den Erfolg:**
- Beginnen Sie mit Ihrem Mockup, bevor Sie Code schreiben
- Nutzen Sie die Entwicklerwerkzeuge des Browsers, um Ihre HTML-Struktur zu inspizieren
- Testen Sie Ihre Seite mit verschiedenen Bildschirmgrößen (auch ohne CSS)
- Lesen Sie Ihr HTML laut vor, um zu prüfen, ob die Struktur logisch ist
- Überlegen Sie, wie ein Screenreader Ihre Seitenstruktur interpretieren würde

> 💡 **Denken Sie daran**: Diese Aufgabe konzentriert sich auf HTML-Struktur und Semantik. Sorgen Sie sich nicht um visuelle Gestaltung – dafür ist CSS da! Ihre Seite mag schlicht aussehen, sollte aber gut strukturiert und aussagekräftig sein.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Haftungsausschluss**:
Dieses Dokument wurde mithilfe des KI-Übersetzungsdienstes [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, bitten wir zu beachten, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner Ursprache ist als maßgebliche Quelle anzusehen. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die durch die Nutzung dieser Übersetzung entstehen.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->