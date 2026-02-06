# Eine Website auf Leistung analysieren

## Überblick über die Aufgabe

Die Leistungsanalyse ist eine entscheidende Fähigkeit für moderne Webentwickler. In dieser Aufgabe führst du ein umfassendes Leistungs-Audit einer echten Website durch, wobei du sowohl browserbasierte Tools als auch Dienste von Drittanbietern verwendest, um Engpässe zu identifizieren und Optimierungsstrategien vorzuschlagen.

Deine Aufgabe ist es, einen detaillierten Leistungsbericht zu erstellen, der dein Verständnis der Prinzipien der Web-Performance und deine Fähigkeit, professionelle Analysetools effektiv einzusetzen, demonstriert.

## Aufgabenanweisungen

**Wähle eine Website** zur Analyse aus – entscheide dich für eine der folgenden Optionen:
- Eine beliebte Website, die du häufig nutzt (Nachrichtenseite, soziale Medien, E-Commerce)
- Eine Open-Source-Projektseite (GitHub Pages, Dokumentationsseiten)
- Eine Website eines lokalen Unternehmens oder Portfolio-Seite
- Dein eigenes Projekt oder eine frühere Kursarbeit

**Führe eine Multi-Tool-Analyse** mit mindestens drei verschiedenen Ansätzen durch:
- **Browser DevTools** – Nutze das Performance-Tab von Chrome/Edge für detailliertes Profiling
- **Online-Audit-Tools** – Probiere Lighthouse, GTmetrix oder WebPageTest aus
- **Netzwerkanalyse** – Untersuche Ressourcenauslastung, Dateigrößen und Anfragemuster

**Dokumentiere deine Erkenntnisse** in einem umfassenden Bericht, der Folgendes umfasst:

### Analyse der Leistungsmetriken
- **Messung der Ladezeiten** mit mehreren Tools und aus verschiedenen Perspektiven
- **Core Web Vitals** Scores (LCP, FID, CLS) und deren Bedeutung
- **Aufschlüsselung der Ressourcen** mit Angabe, welche Assets am meisten zur Ladezeit beitragen
- **Netzwerk-Wasserfall-Analyse** zur Identifikation blockierender Ressourcen

### Problemerkennung
- **Spezifische Performance-Engpässe** mit unterstützenden Daten
- **Ursachenanalyse** mit Erklärung, warum jedes Problem auftritt
- **Auswirkungen auf Nutzer** mit Beschreibung, wie Probleme reale Nutzer betreffen
- **Prioritäten-Rangliste** der Probleme basierend auf Schweregrad und Behebungsaufwand

### Optimierungsempfehlungen
- **Konkrete, umsetzbare Verbesserungen** mit erwarteter Auswirkung
- **Implementierungsstrategien** für jede empfohlene Änderung
- **Moderne Best Practices**, die angewendet werden können (Lazy Loading, Kompression etc.)
- **Werkzeuge und Techniken** für die kontinuierliche Leistungsüberwachung

## Forschungsanforderungen

**Verlasse dich nicht nur auf Browser-Tools** – erweitere deine Analyse mit:

**Diensten von Drittanbietern:**
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) – Umfassende Audits
- [GTmetrix](https://gtmetrix.com/) – Einblicke in Performance und Optimierung
- [WebPageTest](https://www.webpagetest.org/) – Tests unter realen Bedingungen
- [Pingdom](https://tools.pingdom.com/) – Globale Leistungsüberwachung

**Spezialisierte Analysetools:**
- [Bundle Analyzer](https://bundlephobia.com/) – Analyse der JavaScript-Bündelgröße
- [Bildoptimierungstools](https://squoosh.app/) – Möglichkeiten zur Asset-Optimierung
- [Analyse der Sicherheitsheader](https://securityheaders.com/) – Einfluss der Sicherheit auf die Performance

## Format der Abgabe

Erstelle einen professionellen Bericht (2-3 Seiten), der Folgendes umfasst:

1. **Executive Summary** – Übersicht der wichtigsten Erkenntnisse und Empfehlungen
2. **Methodik** – Verwendete Tools und Testvorgehen
3. **Aktuelle Leistungsbewertung** – Basiswerte und Messungen
4. **Identifizierte Probleme** – Detaillierte Problemanalyse mit unterstützenden Daten
5. **Empfehlungen** – Priorisierte Verbesserungsstrategien
6. **Umsetzungsplan** – Schritt-für-Schritt-Optimierungsplan

**Füge visuelle Belege hinzu:**
- Screenshots von Performance-Tools und Metriken
- Diagramme oder Grafiken mit Leistungsdaten
- Vorher-/Nachher-Vergleiche, wenn möglich
- Netzwerk-Wasserfalldiagramme und Ressourcenaufstellungen

## Bewertungskriterien

| Kriterien | Hervorragend (90-100%) | Ausreichend (70-89%) | Verbesserungsbedürftig (50-69%) |
| --------- | ---------------------- | -------------------- | ------------------------------- |
| **Analysetiefe** | Umfassende Analyse mit 4+ Tools, detaillierten Metriken, Ursachenanalyse und Nutzer-Auswirkungsbewertung | Gute Analyse mit 3 Tools, klaren Metriken und Grundidentifikation von Problemen | Basisanalyse mit 2 Tools, begrenzter Tiefe und minimaler Problemidentifikation |
| **Toolvielfalt** | Nutzung von Browser-Tools + 3+ Drittanbieterdiensten mit Vergleichsanalyse und Einblicken | Nutzung von Browser-Tools + 2 Drittanbieterdiensten mit etwas Vergleichsanalyse | Nutzung von Browser-Tools + 1 Drittanbieterdienst mit begrenztem Vergleich |
| **Problemerkennung** | Identifizierung von 5+ spezifischen Performance-Problemen mit detaillierter Ursachenanalyse und quantifiziertem Impact | Identifizierung von 3-4 Performance-Problemen mit guter Analyse und einiger Impact-Messung | Identifizierung von 1-2 Performance-Problemen mit grundlegender Analyse |
| **Empfehlungen** | Konkrete, umsetzbare Empfehlungen mit Implementierungsdetails, erwarteter Auswirkung und modernen Best Practices | Gute Empfehlungen mit Umsetzungshinweisen und erwarteten Ergebnissen | Basisempfehlungen mit begrenzten Umsetzungsdetails |
| **Professionelle Präsentation** | Gut strukturierter Bericht mit klarer Gliederung, visuellen Belegen, Executive Summary und professionellem Layout | Gute Organisation mit visuellen Belegen und klarer Struktur | Einfache Organisation mit minimalen visuellen Belegen |

## Lernziele

Mit dem Abschluss dieser Aufgabe zeigst du, dass du:
- **Professionelle Analysewerkzeuge und Methodiken** der Leistungsanalyse anwenden kannst
- **Performance-Engpässe anhand datengetriebener Analysen** identifizieren kannst
- **Beziehung zwischen Codequalität und Nutzererfahrung** analysieren kannst
- **Konkrete, umsetzbare Optimierungsstrategien** empfehlen kannst
- **Technische Befunde professionell kommunizieren** kannst

Diese Aufgabe festigt die im Unterricht erlernten Konzepte zur Performance und baut praktische Fähigkeiten auf, die du in deiner gesamten Webentwicklerkarriere nutzen wirst.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir nach Genauigkeit streben, bitten wir zu beachten, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner Ursprungssprache ist als maßgebliche Quelle zu betrachten. Für wichtige Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die aus der Verwendung dieser Übersetzung entstehen.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->