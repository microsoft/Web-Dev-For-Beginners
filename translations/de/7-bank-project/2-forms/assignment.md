<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "efb01fcafd2ef40c593a6e662fc938a8",
  "translation_date": "2026-01-06T09:01:05+00:00",
  "source_file": "7-bank-project/2-forms/assignment.md",
  "language_code": "de"
}
-->
# Style deine Bank-App mit modernem CSS

## Projektübersicht

Verwandle deine funktionale Banking-Anwendung in eine optisch ansprechende, professionell wirkende Web-App mit modernen CSS-Techniken. Du wirst ein zusammenhängendes Designsystem erstellen, das die Benutzererfahrung verbessert und gleichzeitig Zugänglichkeit und Responsive-Design-Prinzipien einhält.

Diese Aufgabe fordert dich heraus, zeitgemäße Webdesign-Muster anzuwenden, eine konsistente visuelle Identität umzusetzen und eine Benutzeroberfläche zu schaffen, die Nutzer sowohl attraktiv als auch intuitiv zu bedienen finden.

## Anweisungen

### Schritt 1: Richte dein Stylesheet ein

**Erstelle deine CSS-Grundlage:**

1. **Erstelle** eine neue Datei namens `styles.css` im Projektstammverzeichnis  
2. **Verlinke** das Stylesheet in deiner `index.html`-Datei:  
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
3. **Beginne** mit CSS-Reset und modernen Voreinstellungen:  
   ```css
   /* Modern CSS reset and base styles */
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }
   
   body {
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
     line-height: 1.6;
     color: #333;
   }
   ```


### Schritt 2: Anforderungen an das Designsystem

**Implementiere diese wesentlichen Designelemente:**

#### Farbpalette
- **Primärfarbe**: Wähle eine professionelle Farbe für Buttons und Hervorhebungen  
- **Sekundärfarbe**: Komplementärfarbe für Akzente und sekundäre Aktionen  
- **Neutrale Farben**: Grautöne für Text, Rahmen und Hintergründe  
- **Erfolgs-/Fehlerfarben**: Grün für Erfolgszustände, Rot für Fehler  

#### Typografie
- **Überschriften-Hierarchie**: Klare Unterscheidung zwischen H1-, H2- und H3-Elementen  
- **Fließtext**: Lesbare Schriftgröße (mindestens 16px) und angemessene Zeilenhöhe  
- **Formularbeschriftungen**: Klare, zugängliche Textgestaltung  

#### Layout und Abstände
- **Konsistente Abstände**: Verwende eine Abstandsskala (8px, 16px, 24px, 32px)  
- **Grid-System**: Organisiertes Layout für Formulare und Inhaltsbereiche  
- **Responsives Design**: Mobile-First-Ansatz mit Breakpoints  

### Schritt 3: Komponenten-Styling

**Style diese spezifischen Komponenten:**

#### Formulare
- **Eingabefelder**: Professionelle Rahmen, Fokuszustände und Validierungs-Styling  
- **Buttons**: Hover-Effekte, deaktivierte Zustände und Ladeanzeigen  
- **Beschriftungen**: Klare Positionierung und Pflichtfeldkennzeichnung  
- **Fehlermeldungen**: Sichtbares Fehler-Styling und hilfreiche Meldungen  

#### Navigation
- **Header**: Sauberer, gebrandeter Navigationsbereich  
- **Links**: Klare Hover-Zustände und aktive Kennzeichnungen  
- **Logo/Titel**: Markantes Branding-Element  

#### Inhaltsbereiche
- **Sektionen**: Deutliche visuelle Trennung zwischen verschiedenen Bereichen  
- **Karten**: Falls Karten-Layouts verwendet werden, schatten und Rahmen hinzufügen  
- **Hintergründe**: Angemessene Nutzung von Weißraum und dezenten Hintergründen  

### Schritt 4: Erweiterte Features (Optional)

**Erwäge die Umsetzung dieser erweiterten Features:**  
- **Dark Mode**: Umschalten zwischen hellem und dunklem Thema  
- **Animationen**: Subtile Übergänge und Mikrointeraktionen  
- **Ladezustände**: Visuelles Feedback während Formularübermittlungen  
- **Responsives Bildmaterial**: Optimierte Bilder für verschiedene Bildschirmgrößen  

## Design-Inspiration

**Merkmale moderner Banking-Apps:**  
- **Sauberes, minimalistisches Design** mit viel Weißraum  
- **Professionelle Farbschemata** (Blau-, Grün- oder elegante Neutraltöne)  
- **Klare visuelle Hierarchie** mit prominenten Call-to-Action-Buttons  
- **Barrierefreie Kontrastverhältnisse** gemäß WCAG-Richtlinien  
- **Mobile-responsive Layouts**, die auf allen Geräten funktionieren  

## Technische Anforderungen

### CSS-Organisation  
```css
/* 1. CSS Custom Properties (Variables) */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  /* Add more variables */
}

/* 2. Base Styles */
/* Reset, typography, general elements */

/* 3. Layout */
/* Grid, flexbox, positioning */

/* 4. Components */
/* Forms, buttons, cards */

/* 5. Utilities */
/* Helper classes, responsive utilities */

/* 6. Media Queries */
/* Responsive breakpoints */
```
  
### Anforderungen an die Barrierefreiheit
- **Farbkontrast**: Mindestens 4,5:1-Verhältnis für normalen Text sicherstellen  
- **Fokusindikatoren**: Sichtbare Fokuszustände für Tastaturnavigation  
- **Formularbeschriftungen**: Richtig mit Eingabefeldern assoziiert  
- **Responsives Design**: Nutzbar auf Bildschirmen von 320px bis 1920px Breite  

## Bewertungsraster

| Kriterium | Hervorragend (A) | Kompetent (B) | Entwicklung (C) | Verbesserungsbedarf (F) |
|----------|------------------|---------------|----------------|-----------------------|
| **Designsystem** | Umfassendes Designsystem mit konsistenten Farben, Typografie und Abständen durchgehend implementiert | Konsistentes Styling mit klaren Designmustern und guter visueller Hierarchie | Grundlegendes Styling mit einigen Konsistenzproblemen oder fehlenden Designelementen | Minimales Styling mit inkonsistenten oder widersprüchlichen Designentscheidungen |
| **Benutzererfahrung** | Intuitive, professionelle Oberfläche mit exzellenter Bedienbarkeit und visueller Attraktivität erstellt | Gute Benutzererfahrung mit klarer Navigation und gut lesbarem Inhalt | Basis-Bedienbarkeit mit Verbesserungsbedarf im UX-Bereich | Schlechte Bedienbarkeit, schwer zu navigieren oder zu lesen |
| **Technische Umsetzung** | Moderne CSS-Techniken verwendet, gut organisierte Code-Struktur und Befolgung von Best Practices | CSS effektiv implementiert mit guter Organisation und passenden Techniken | CSS funktioniert, könnte aber an Organisation oder Modernität mangeln | Schlechte CSS-Implementierung mit technischen Problemen oder Browser-Kompatibilitätsproblemen |
| **Responsives Design** | Vollständig responsives Design, das auf allen Gerätegrößen hervorragend funktioniert | Gute Responsivität mit kleineren Problemen auf einigen Bildschirmgrößen | Grundlegende responsive Umsetzung mit einigen Layout-Problemen | Nicht responsiv oder erhebliche Probleme auf mobilen Geräten |
| **Barrierefreiheit** | Erfüllt WCAG-Richtlinien mit exzellenter Tastaturnavigation und Screenreader-Unterstützung | Gute Barrierefreiheitsmaßnahmen mit passenden Kontrasten und Fokusindikatoren | Grundlegende Berücksichtigung von Barrierefreiheit mit einigen fehlenden Elementen | Schlechte Barrierefreiheit, schwierig für Nutzer mit Behinderungen |

## Abgabehinweise

**Enthält deine Abgabe:**  
- **styles.css**: Dein komplettes Stylesheet  
- **Aktualisierte HTML-Dateien**: Alle vorgenommenen HTML-Änderungen  
- **Screenshots**: Bilder, die dein Design auf Desktop und Mobilgerät zeigen  
- **README**: Kurze Beschreibung deiner Designentscheidungen und Farbpalette  

**Bonus-Punkte für:**  
- **CSS-Custom-Properties** zur wartbaren Themenanpassung  
- **Fortgeschrittene CSS-Features** wie Grid, Flexbox oder CSS-Animationen  
- **Performance-Optimierungen** wie optimiertes CSS und minimale Dateigröße  
- **Cross-Browser-Tests** zur Sicherstellung der Kompatibilität in verschiedenen Browsern  

> 💡 **Profi-Tipp**: Beginne mit mobilem Design und erweitere dann für größere Bildschirme. Dieser Mobile-First-Ansatz stellt sicher, dass deine App auf allen Geräten gut funktioniert und modernen Webentwicklungskonventionen folgt.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir um Genauigkeit bemüht sind, können automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten. Das Originaldokument in seiner ursprünglichen Sprache gilt als maßgebliche Quelle. Für wichtige Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die durch die Nutzung dieser Übersetzung entstehen.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->