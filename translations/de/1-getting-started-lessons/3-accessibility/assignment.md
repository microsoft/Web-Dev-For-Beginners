<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e6d0f456dfc22afb41bbdefeb5ec179d",
  "translation_date": "2026-01-06T09:23:51+00:00",
  "source_file": "1-getting-started-lessons/3-accessibility/assignment.md",
  "language_code": "de"
}
-->
# Umfassendes Website-Barrierefreiheitsaudit

## Anweisungen

In dieser Aufgabe führst du ein professionelles Barrierefreiheitsaudit einer echten Website durch und wendest dabei die Prinzipien und Techniken an, die du gelernt hast. Diese praktische Erfahrung vertieft dein Verständnis für Barrieren und Lösungen im Bereich Barrierefreiheit.

Wähle eine Website aus, die offenbar Barrierefreiheitsprobleme aufweist – dies bietet dir mehr Lernmöglichkeiten als die Analyse einer bereits perfekten Seite. Gute Kandidaten sind ältere Websites, komplexe Webanwendungen oder Seiten mit reichhaltigen Multimedia-Inhalten.

### Phase 1: Strategische manuelle Bewertung

Bevor du automatisierte Tools einsetzt, führe eine umfassende manuelle Bewertung durch. Dieser menschenzentrierte Ansatz enthüllt oft Probleme, die Werkzeuge übersehen, und hilft dir, die echte Benutzererfahrung zu verstehen.

**🔍 Wesentliche Bewertungskriterien:**

**Navigation und Struktur:**
- Kannst du die gesamte Seite nur mit der Tastatur (Tab, Shift+Tab, Enter, Leertaste, Pfeiltasten) bedienen?
- Sind Fokusindikatoren an allen interaktiven Elementen klar sichtbar?
- Schafft die Überschriftenstruktur (H1-H6) eine logische Inhaltsübersicht?
- Gibt es Sprunglinks, um direkt zum Hauptinhalt zu gelangen?

**Visuelle Zugänglichkeit:**
- Gibt es ausreichenden Farbkontrast auf der gesamten Website (mindestens 4,5:1 für normalen Text)?
- Verwendet die Seite ausschließlich Farben, um wichtige Informationen zu vermitteln?
- Haben alle Bilder geeigneten alternativen Text?
- Bleibt das Layout bei einer Zoomstufe von 200 % funktional?

**Inhalt und Kommunikation:**
- Gibt es „Hier klicken“- oder unklare Linktexte?
- Verstehst du Inhalt und Funktionalität auch ohne visuelle Hinweise?
- Sind Formularfelder korrekt beschriftet und gruppiert?
- Sind Fehlermeldungen klar und hilfreich?

**Interaktive Elemente:**
- Funktionieren alle Schaltflächen und Formularelemente allein mit der Tastatur?
- Werden dynamische Inhaltsänderungen Bildschirmlesern angekündigt?
- Befolgen modale Dialoge und komplexe Widgets korrekte Barrierefreiheitsmuster?

📝 **Dokumentiere deine Erkenntnisse** mit konkreten Beispielen, Screenshots und Seiten-URLs. Notiere sowohl Probleme als auch gut umgesetzte Aspekte.

### Phase 2: Umfassende automatisierte Tests

Validiere und erweitere nun deine manuellen Ergebnisse mit branchenüblichen Barrierefreiheitstest-Tools. Jedes Tool hat unterschiedliche Stärken, sodass die Nutzung mehrerer Werkzeuge eine vollständige Abdeckung bietet.

**🛠️ Benötigte Test-Tools:**

1. **Lighthouse Accessibility Audit** (integriert in Chrome/Edge DevTools)
   - Audit auf mehreren Seiten durchführen
   - Fokus auf bestimmte Metriken und Empfehlungen
   - Notiere deinen Barrierefreiheits-Score und spezifische Verstöße

2. **axe DevTools** (Browser-Erweiterung – Branchenstandard)
   - Detailliertere Fehlererkennung als Lighthouse
   - Bietet konkrete Codebeispiele zur Behebung
   - Testet anhand der WCAG 2.1 Kriterien

3. **WAVE Web Accessibility Evaluator** (Browser-Erweiterung)
   - Visuelle Darstellung von Barrierefreiheitsmerkmalen
   - Hebt sowohl Fehler als auch positive Merkmale hervor
   - Hervorragend zum Verständnis der Seitenstruktur

4. **Color Contrast Analyzers**
   - WebAIM Contrast Checker für spezifische Farbkombinationen
   - Browser-Erweiterungen für Seiten-weite Analyse
   - Tests gemäß WCAG AA und AAA Standards

**🎧 Real-Assistive-Technologie-Tests:**
- **Screenreader-Tests**: Verwende NVDA (Windows), VoiceOver (Mac) oder TalkBack (Android)
- **Nur Tastaturbedienung**: Ziehe die Maus ab und navigiere die gesamte Website
- **Zoomtests**: Prüfe die Funktionsfähigkeit bei 200 % und 400 % Zoom
- **Sprachsteuerungstests**: Falls verfügbar, nutze Sprach-Navigationstools

**📊 Organisiere deine Ergebnisse** in einer Übersichts-Tabelle mit:
- Beschreibung des Problems und Standort
- Schweregrad (Kritisch/Hoch/Mittel/Niedrig)
- Verstoßene WCAG-Erfolgskriterien
- Erkennendes Tool
- Screenshots und Belege

### Phase 3: Umfassende Dokumentation der Ergebnisse

Erstelle einen professionellen Barrierefreiheitsauditbericht, der dein Verständnis sowohl technischer Probleme als auch deren menschlicher Auswirkungen zeigt.

**📋 Erforderliche Berichtabschnitte:**

1. **Executive Summary** (1 Seite)
   - Website-URL und kurze Beschreibung
   - Gesamtbewertung des Reifegrads der Barrierefreiheit
   - Top 3 kritischste Probleme
   - Geschätzte Auswirkungen auf Nutzer mit Behinderungen

2. **Methodik** (½ Seite)
   - Testansatz und verwendete Tools
   - Bewertete Seiten und Kombinationen aus Gerät/Browser
   - Bewertete Standards (WCAG 2.1 AA)

3. **Detaillierte Ergebnisse** (2-3 Seiten)
   - Probleme nach WCAG-Prinzipien kategorisiert (Wahrnehmbar, Bedienbar, Verständlich, Robust)
   - Einschließlich Screenshots und konkreter Beispiele
   - Notiere positive Barrierefreiheitsmerkmale
   - Querverweis zu automatischen Testergebnissen

4. **Auswirkungsbewertung auf Nutzer** (1 Seite)
   - Wie die identifizierten Probleme Nutzer mit unterschiedlichen Behinderungen betreffen
   - Szenarien, die reale Nutzererfahrungen beschreiben
   - Geschäftliche Auswirkungen (rechtliches Risiko, SEO, Nutzerbasis-Erweiterung)

**📸 Evidenzsammlung:**
- Screenshots von Barrierefreiheitsverletzungen
- Bildschirmaufnahmen problematischer Nutzerabläufe
- Toolberichte (als PDF speichern)
- Codebeispiele mit Fehlern

### Phase 4: Professioneller Maßnahmenplan

Entwickle einen strategischen, priorisierten Plan zur Behebung der Barrierefreiheitsprobleme. Dies zeigt deine Fähigkeit, wie ein professioneller Webentwickler unter realen Geschäftsbedingungen zu denken.

**🎯 Erstelle detaillierte Verbesserungsempfehlungen (mindestens 10 Probleme):**

**Für jedes identifizierte Problem gib an:**

- **Problembeschreibung**: Klare Erklärung für das Problem und warum es kritisch ist
- **WCAG-Referenz**: Spezifische verletzte Erfolgskriterium (z. B. „2.4.4 Zweck des Links (im Kontext) – Ebene A“)
- **Auswirkungen für Nutzer**: Wie es Menschen mit unterschiedlichen Behinderungen betrifft
- **Lösung**: Konkrete Codeänderungen, Designmodifikationen oder Prozessverbesserungen
- **Prioritätsstufe**: Kritisch (blockiert Grundfunktionen) / Hoch (signifikante Barriere) / Mittel (Usability-Problem) / Niedrig (Verbesserung)
- **Implementierungsaufwand**: Zeit-/Komplexitätsschätzung (Schneller Gewinn / Moderater Aufwand / Größerer Umbau)
- **Testverifikation**: Wie überprüft wird, dass die Lösung funktioniert

**Beispiel für eine Verbesserung:**

```
Issue: Generic "Read more" link text appears 8 times on homepage
WCAG Reference: 2.4.4 Link Purpose (In Context) - Level A
User Impact: Screen reader users cannot distinguish between links when viewed in link list
Solution: Replace with descriptive text like "Read more about sustainability initiatives"
Priority: High (major navigation barrier)
Effort: Low (30 minutes to update content)
Testing: Generate link list with screen reader - each link should be meaningful standalone
```
  
**📈 Strategische Umsetzungsphasen:**

- **Phase 1 (0-2 Wochen)**: Kritische Probleme, die Grundfunktionalität blockieren  
- **Phase 2 (1-2 Monate)**: Verbesserungen mit hoher Priorität für bessere Nutzererfahrung  
- **Phase 3 (3-6 Monate)**: Mittel-priorisierte Verbesserungen und Prozessoptimierungen  
- **Phase 4 (Laufend)**: Kontinuierliche Überwachung und Weiterentwicklung  

## Bewertungsmatrix

Dein Barrierefreiheitsaudit wird sowohl auf technische Genauigkeit als auch professionelle Präsentation bewertet:

| Kriterium | Exzellent (90-100%) | Gut (80-89%) | Befriedigend (70-79%) | Verbesserungswürdig (<70%) |
|-----------|---------------------|--------------|-----------------------|---------------------------|
| **Manuelle Testtiefe** | Umfassende Bewertung aller POUR-Prinzipien mit detaillierten Beobachtungen und Nutzerszenarien | Gute Abdeckung der meisten Bereiche mit klaren Ergebnissen und Nutzeranalyse | Grundlegende Bewertung der wichtigsten Bereiche mit ausreichenden Beobachtungen | Eingeschränkte Tests mit oberflächlichen Beobachtungen und minimaler Nutzeranalyse |
| **Werkzeugnutzung & Analyse** | Effektiver Einsatz aller Tools, Querverweise, klare Belege, Analyse der Tool-Limits | Nutzung der meisten Tools mit guter Dokumentation, Querverweisen und Belegen | Nutzung der erforderlichen Tools mit einfacher Dokumentation und einigen Belegen | Minimale Verwendung, schlechte Dokumentation oder fehlende Belege |
| **Identifikation & Kategorisierung** | Findet 15+ Probleme über alle WCAG-Prinzipien, korrekte Schweregradeinteilung, tiefes Verständnis | Findet 10-14 Probleme, gute Kategorisierung, solides Verständnis | Findet 7-9 Probleme, angemessene WCAG-Abdeckung, einfache Kategorisierung | Findet <7 Probleme mit eingeschränktem Umfang und schlechter Kategorisierung |
| **Lösungsqualität & Umsetzbarkeit** | 10+ detaillierte und umsetzbare Lösungen mit korrekten WCAG-Referenzen, realistischen Zeitplänen und Verifikationsmethoden | 8-9 gut ausgearbeitete Lösungen mit größtenteils korrekten Referenzen und guten Details | 6-7 einfache Lösungen mit einigen Details und meist realistischen Ansätzen | <6 Lösungen oder mangelnde Details, unrealistische Umsetzung |
| **Professionelle Kommunikation** | Hervorragend organisiert, klar geschrieben, mit Executive Summary, angemessener Fachsprache und Geschäftsdokument-Standards | Gut strukturiert, gute Schreibqualität, enthält die meisten Abschnitte, angemessener Ton | Akzeptable Struktur, annehmbares Schreibniveau, grundlegende Abschnitte | Schlechte Organisation, unklare Schreibweise oder fehlende zentrale Abschnitte |
| **Praxisbezug** | Versteht Geschäftsfolgen, rechtliche Aspekte, Nutzerdiversität und Umsetzung Herausforderungen | Gutes Verständnis praktischer Anwendungen mit etwas Geschäftskontext | Grundverständnis praktischer Anwendungen | Eingeschränkter Bezug zur Praxis |

## Erweiterte Herausforderungsmöglichkeiten

**🚀 Für Studierende, die sich weiter fordern wollen:**

- **Vergleichende Analyse**: Audit 2-3 konkurrierende Websites und vergleiche deren Barrierefreiheitsreife  
- **Fokus Mobile Barrierefreiheit**: Detaillierte Untersuchung mobilspezifischer Barrierefreiheitsprobleme mit Android TalkBack oder iOS VoiceOver  
- **Internationale Perspektive**: Recherche und Anwendung von Zugänglichkeitsstandards verschiedener Länder (EN 301 549, Section 508, ADA)  
- **Überprüfung der Barrierefreiheitserklärung**: Bewertung der vorhandenen Barrierefreiheitserklärung der Website anhand deiner Ergebnisse  

## Abgabe

Reiche einen umfassenden Barrierefreiheitsauditbericht ein, der professionelle Analyse und praktische Umsetzungsplanung zeigt:

**📄 Anforderungen an den Abschlussbericht:**

1. **Executive Summary** (1 Seite)  
   - Website-Überblick und Bewertung des Reifegrads  
   - Zusammenfassung der wichtigsten Erkenntnisse mit Geschäftsauswirkungen  
   - Empfohlene Prioritätsmaßnahmen  

2. **Methodik und Umfang** (1 Seite)  
   - Testansatz, eingesetzte Tools, Bewertungskriterien  
   - Bewertete Seiten/Bereiche und mögliche Einschränkungen  
   - Einhaltung der Standards (WCAG 2.1 AA)  

3. **Detaillierter Ergebnisbericht** (3-4 Seiten)  
   - Beobachtungen aus manuellen Tests mit Nutzerszenarien  
   - Ergebnisse automatisierter Tools mit Querverweisen  
   - Probleme nach WCAG-Prinzipien gegliedert mit Belegen  
   - Identifizierte positive Barrierefreiheitsmerkmale  

4. **Strategischer Maßnahmenplan** (3-4 Seiten)  
   - Priorisierte Verbesserungsvorschläge (mindestens 10)  
   - Zeitplan mit Aufwandsschätzungen  
   - Erfolgsmetriken und Verifikationsmethoden  
   - Strategie für langfristige Barrierefreiheitswartung  

5. **Unterstützende Belege** (Anhänge)  
   - Screenshots von Barrierefreiheitsverletzungen und Tool-Ergebnissen  
   - Codebeispiele zur Veranschaulichung von Problemen und Lösungen  
   - Tool-Berichte und Audit-Zusammenfassungen  
   - Notizen oder Aufnahmen von Screenreader-Tests  

**📊 Formatvorgaben:**  
- **Dokumentformat**: PDF (professionelle Präsentation)  
- **Wortanzahl**: 2.500-3.500 Wörter (ohne Anhänge und Screenshots)  
- **Visuelle Elemente**: Integriere Screenshots, Diagramme und Beispiele durchgängig  
- **Zitationen**: Verweise angemessen auf WCAG-Richtlinien und Barrierefreiheitsressourcen  

**💡 Expertentipps für Exzellenz:**  
- Nutze professionelle Berichtgestaltung mit konsistenten Überschriften und Stil  
- Füge ein Inhaltsverzeichnis für einfache Navigation hinzu  
- Balance zwischen technischer Genauigkeit und klarer, geschäftsgerechter Sprache  
- Zeige Verständnis für technische Umsetzung und Nutzerwirkungen  

## Lernziele

Nach Abschluss dieses umfassenden Barrierefreiheitsaudits hast du folgende wichtige berufliche Kompetenzen entwickelt:

**🎯 Technische Kompetenzen:**  
- **Meisterschaft im Barrierefreiheitstesten**: Praxis mit standardisierten manuellen und automatisierten Methoden  
- **WCAG-Anwendung**: Praktische Erfahrung bei der Umsetzung von Web Content Accessibility Guidelines in realen Szenarien  
- **Verständnis für assistive Technologien**: Praxis mit Screenreadern und Tastaturnavigation  
- **Problem-Lösungs-Zuordnung**: Fähigkeit, Barrieren zu identifizieren und konkrete, umsetzbare Maßnahmen zu entwickeln  

**💼 Berufliche Fähigkeiten:**  
- **Technische Kommunikation**: Erfahrung im Verfassen professioneller Barrierefreiheitsberichte für diverse Stakeholder  
- **Strategische Planung**: Fähigkeit, Barrierefreiheitsverbesserungen nach Nutzerrelevanz und Machbarkeit zu priorisieren  
- **Qualitätssicherung**: Verständnis von Barrierefreiheitsaudits als Teil des Entwicklungszyklus  
- **Risikoeinschätzung**: Bewusstsein für rechtliche, geschäftliche und ethische Aspekte der Barrierefreiheit  

**🌍 Inklusive Design-Denkweise:**  
- **Nutzerempathie**: Tiefes Verständnis unterschiedlicher Nutzerbedürfnisse und assistiver Technologie-Interaktionen  
- **Prinzipien des universellen Designs**: Erkenntnis, dass barrierefreies Design allen Nutzern zugutekommt, nicht nur Menschen mit Behinderungen  
- **Kontinuierliche Verbesserung**: Rahmenwerk für fortlaufende Bewertung und Optimierung der Zugänglichkeit  
- **Advocacy-Kompetenzen**: Selbstbewusstsein, um Barrierefreiheitsbest Practices in künftigen Projekten und Teams zu fördern  

**🚀 Karrierevorbereitung:**  
Diese Aufgabe spiegelt reale Beratungsprojekte im Bereich Barrierefreiheit wider und bietet dir portfoliofähige Erfahrungen, die zeigen:  
- Systematische Problemlösekompetenz  
- Aufmerksamkeit für technische Details und Geschäftsauswirkungen  
- Klare Vermittlung komplexer technischer Konzepte  
- Verständnis für rechtliche und ethische Verantwortlichkeiten in der Webentwicklung  

Nach Abschluss bist du bestens gerüstet, um bedeutend zu Zugänglichkeitsinitiativen in jedem Webentwicklungsjob beizutragen und inklusive Designpraktiken in deiner Karriere zu vertreten.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir um Genauigkeit bemüht sind, beachten Sie bitte, dass automatische Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner Ursprungssprache ist als maßgebliche Quelle zu betrachten. Für wichtige Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die aus der Verwendung dieser Übersetzung entstehen.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->