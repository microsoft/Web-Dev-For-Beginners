# AGENTS.md

## Projektübersicht

Dies ist ein Bildungs-Curriculum-Repository zum Unterrichten der Grundlagen der Webentwicklung für Anfänger. Das Curriculum ist ein umfassender 12-wöchiger Kurs, entwickelt von Microsoft Cloud Advocates, mit 24 praktischen Lektionen zu JavaScript, CSS und HTML.

### Hauptbestandteile

- **Bildungsinhalt**: 24 strukturierte Lektionen, organisiert in projektbasierten Modulen
- **Praktische Projekte**: Terrarium, Tipp-Spiel, Browser-Erweiterung, Weltraumspiel, Banking-App, Code-Editor und KI-Chat-Assistent
- **Interaktive Quizze**: 48 Quizze mit jeweils 3 Fragen (Vor-/Nach-Lektion-Bewertungen)
- **Mehrsprachige Unterstützung**: Automatisierte Übersetzungen für 50+ Sprachen via GitHub Actions
- **Technologien**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (für KI-Projekte)

### Architektur

- Bildungsrepository mit lektionenbasierter Struktur
- Jeder Lektionenordner enthält README, Codebeispiele und Lösungen
- Eigenständige Projekte in separaten Verzeichnissen (quiz-app, verschiedene Lektionen-Projekte)
- Übersetzungssystem mit GitHub Actions (co-op-translator)
- Dokumentation bereitgestellt via Docsify und als PDF verfügbar

## Einrichtung Befehle

Dieses Repository dient hauptsächlich zum Konsumieren von Bildungsinhalten. Für die Arbeit mit spezifischen Projekten:

### Haupt-Repository-Einrichtung

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz-App Einrichtung (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Entwicklungsserver starten
npm run build      # Für die Produktion bauen
npm run lint       # ESLint ausführen
```

### Bank-Projekt API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # API-Server starten
npm run lint       # ESLint ausführen
npm run format     # Mit Prettier formatieren
```

### Browser-Erweiterungsprojekte

```bash
cd 5-browser-extension/solution
npm install
# Befolgen Sie die browserspezifischen Anweisungen zum Laden der Erweiterung
```

### Weltraumspiel-Projekte

```bash
cd 6-space-game/solution
npm install
# Öffnen Sie index.html im Browser oder verwenden Sie Live Server
```

### Chat-Projekt (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Setze die Umgebungsvariable GITHUB_TOKEN
python api.py
```

## Entwicklungsablauf

### Für Inhaltsmitwirkende

1. **Forke das Repository** in deinem GitHub-Konto
2. **Klonen deinen Fork** lokal
3. **Erstelle einen neuen Branch** für deine Änderungen
4. Änderungen an Lektionstexten oder Codebeispielen vornehmen
5. Codeänderungen in relevanten Projektverzeichnissen testen
6. Pull Requests entsprechend der Beitragsrichtlinien einreichen

### Für Lernende

1. Repository forken oder klonen
2. Nacheinander durch Lektionenverzeichnisse navigieren
3. README-Dateien jeder Lektion lesen
4. Vor-Lektion-Quizze auf https://ff-quizzes.netlify.app/web/ absolvieren
5. Codebeispiele in Lektionenordnern durcharbeiten
6. Aufgaben und Herausforderungen abschließen
7. Nach-Lektion-Quizze machen

### Live-Entwicklung

- **Dokumentation**: `docsify serve` im Root ausführen (Port 3000)
- **Quiz-App**: `npm run dev` im quiz-app-Verzeichnis ausführen
- **Projekte**: Verwende VS Code Live Server Erweiterung für HTML-Projekte
- **API-Projekte**: `npm start` in jeweiligen API-Verzeichnissen ausführen

## Testanweisungen

### Quiz-App Test

```bash
cd quiz-app
npm run lint       # Überprüfen Sie auf Probleme mit dem Code-Stil
npm run build      # Überprüfen Sie, ob der Build erfolgreich ist
```

### Bank API Test

```bash
cd 7-bank-project/api
npm run lint       # Überprüfen auf Probleme mit dem Code-Stil
node server.js     # Überprüfen, ob der Server ohne Fehler startet
```

### Allgemeiner Testansatz

- Dies ist ein Bildungsrepository ohne umfassende automatisierte Tests
- Manueller Testfokus:
  - Codebeispiele laufen fehlerfrei
  - Links in der Dokumentation funktionieren korrekt
  - Projekt-Builds werden erfolgreich abgeschlossen
  - Beispiele folgen Best Practices

### Vor-Einreichungs-Checks

- `npm run lint` in Verzeichnissen mit package.json ausführen
- Markdown-Links auf Gültigkeit prüfen
- Codebeispiele im Browser oder Node.js testen
- Prüfen, dass Übersetzungen die richtige Struktur beibehalten

## Code-Stilrichtlinien

### JavaScript

- Nutze moderne ES6+ Syntax
- Folge den standardmäßigen ESLint-Konfigurationen in Projekten
- Verwende aussagekräftige Variablen- und Funktionsnamen zur Bildungsklarheit
- Füge Kommentare hinzu, die Konzepte für Lernende erklären
- Formatierung mit Prettier, wenn konfiguriert

### HTML/CSS

- Semantische HTML5-Elemente
- Responsive Design Prinzipien
- Klare Klassennamen-Konventionen
- Kommentare, die CSS-Techniken für Lernende erklären

### Python

- PEP 8 Stilrichtlinien
- Klare, lehrreiche Codebeispiele
- Typ-Hinweise, wo hilfreich für das Lernen

### Markdown-Dokumentation

- Klare Überschriften-Hierarchie
- Codeblöcke mit Sprachangabe
- Links zu zusätzlichen Ressourcen
- Screenshots und Bilder in `images/` Verzeichnissen
- Alt-Text für Bilder zur Barrierefreiheit

### Datei-Organisation

- Lektionen sequenziell nummeriert (1-getting-started-lessons, 2-js-basics usw.)
- Jedes Projekt hat `solution/` und oft `start/` oder `your-work/` Verzeichnisse
- Bilder werden in lektion-spezifischen `images/` Ordnern gespeichert
- Übersetzungen in `translations/{language-code}/` Struktur

## Build und Deployment

### Quiz-App Deployment (Azure Static Web Apps)

Die quiz-app ist für Azure Static Web Apps Deployment konfiguriert:

```bash
cd quiz-app
npm run build      # Erstellt den Ordner dist/
# Führt die Bereitstellung über GitHub Actions Workflow bei Push zum Branch main durch
```

Azure Static Web Apps Konfiguration:
- **App-Standort**: `/quiz-app`
- **Ausgabeort**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokumentation PDF-Erstellung

```bash
npm install                    # Installiere docsify-to-pdf
npm run convert               # Erzeuge PDF aus docs
```

### Docsify Dokumentation

```bash
npm install -g docsify-cli    # Installiere Docsify global
docsify serve                 # Auf localhost:3000 bereitstellen
```

### Projekt-spezifische Builds

Jedes Projektverzeichnis kann einen eigenen Build-Prozess haben:
- Vue-Projekte: `npm run build` erzeugt Produktions-Bundles
- Statische Projekte: Kein Build Schritt, Dateien direkt servieren

## Pull-Request Richtlinien

### Titel-Format

Verwende klare, beschreibende Titel, die den Änderungsbereich anzeigen:
- `[Quiz-app] Neues Quiz für Lektion X hinzufügen`
- `[Lesson-3] Tippfehler im Terrarium-Projekt beheben`
- `[Translation] Spanische Übersetzung für Lektion 5 hinzufügen`
- `[Docs] Setup-Anweisungen aktualisieren`

### Erforderliche Prüfungen

Vor dem Einreichen eines Pull Requests:

1. **Code-Qualität**:
   - `npm run lint` in betroffenen Projektverzeichnissen ausführen
   - Alle Linting-Fehler und Warnungen beheben

2. **Build-Verifikation**:
   - `npm run build` wenn zutreffend ausführen
   - Sicherstellen, dass keine Build-Fehler vorliegen

3. **Link-Validierung**:
   - Alle Markdown-Links testen
   - Bildverweise prüfen

4. **Inhaltsprüfung**:
   - Korrekturlesen auf Rechtschreibung und Grammatik
   - Sicherstellen, dass Codebeispiele korrekt und bildend sind
   - Übersetzungen auf Bedeutungsintaktheit prüfen

### Beitragsanforderungen

- Zustimmung zur Microsoft CLA (automatische Überprüfung beim ersten PR)
- Befolgung des [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Siehe [CONTRIBUTING.md](./CONTRIBUTING.md) für detaillierte Richtlinien
- Referenzierung von Issue-Nummern im PR-Beschreibung falls zutreffend

### Review-Prozess

- PRs werden von Maintainers und Community geprüft
- Bildungsverständlichkeit hat Priorität
- Codebeispiele sollten aktuellen Best Practices folgen
- Übersetzungen auf Genauigkeit und kulturelle Angemessenheit geprüft

## Übersetzungssystem

### Automatisierte Übersetzung

- Verwendet GitHub Actions mit co-op-translator Workflow
- Übersetzt automatisch in 50+ Sprachen
- Quell-Dateien in Hauptverzeichnissen
- Übersetzte Dateien in `translations/{language-code}/` Verzeichnissen

### Manuelle Verbesserungen an Übersetzungen

1. Datei in `translations/{language-code}/` finden
2. Verbesserungen bei Erhalt der Struktur vornehmen
3. Sicherstellen, dass Codebeispiele funktionsfähig bleiben
4. Lokalisiertes Quiz-Material testen

### Übersetzungs-Metadaten

Übersetzte Dateien enthalten Metadaten-Header:
```markdown
<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "...",
  "translation_date": "...",
  "source_file": "...",
  "language_code": "..."
}
-->
```

## Debugging und Fehlersuche

### Häufige Probleme

**Quiz-App startet nicht**:
- Node.js Version prüfen (v14+ empfohlen)
- `node_modules` und `package-lock.json` löschen, danach `npm install` ausführen
- Auf Port-Konflikte prüfen (Standard: Vite verwendet Port 5173)

**API Server startet nicht**:
- Node.js Version >= 10 sicherstellen
- Prüfen, ob Port bereits belegt ist
- Alle Abhängigkeiten mit `npm install` installieren

**Browser-Erweiterung lädt nicht**:
- manifest.json auf korrekte Formatierung prüfen
- Browser-Konsole auf Fehler überprüfen
- Browser-spezifische Installationsanleitungen befolgen

**Python Chat-Projekt Probleme**:
- OpenAI-Paket installiert? `pip install openai`
- GITHUB_TOKEN Umgebungsvariable gesetzt?
- Zugriffsrechte für GitHub Models prüfen

**Docsify liefert keine Dokumentation**:
- docsify-cli global installieren: `npm install -g docsify-cli`
- Vom Repository-Root aus starten
- Prüfen, ob `docs/_sidebar.md` existiert

### Tipps zur Entwicklungsumgebung

- VS Code mit Live Server Erweiterung für HTML-Projekte verwenden
- ESLint und Prettier Erweiterungen für einheitliche Formatierung installieren
- Browser DevTools zum JavaScript Debuggen nutzen
- Für Vue-Projekte Vue DevTools Browser-Erweiterung verwenden

### Performance Aspekt

- Große Anzahl an Übersetzungsdateien (50+ Sprachen) führt zu großen Klonen
- Shallow Clone verwenden, wenn nur Inhaltsarbeit gewünscht: `git clone --depth 1`
- Übersetzungen bei Arbeit am englischen Inhalt von Suchvorgängen ausnehmen
- Build-Prozesse können beim ersten Lauf langsam sein (npm install, Vite Build)

## Sicherheitsüberlegungen

### Umgebungsvariablen

- API-Schlüssel niemals ins Repository commiten
- `.env` Dateien verwenden (bereits in `.gitignore`)
- Benötigte Umgebungsvariablen in Projekt-READMEs dokumentieren

### Python-Projekte

- Virtuelle Umgebungen verwenden: `python -m venv venv`
- Abhängigkeiten aktuell halten
- GitHub Tokens mit minimal erforderlichen Berechtigungen nutzen

### GitHub Models Zugriff

- Personal Access Tokens (PAT) für GitHub Models erforderlich
- Tokens als Umgebungsvariablen speichern
- Tokens oder Zugangsdaten niemals committen

## Zusätzliche Hinweise

### Zielgruppe

- Absolute Anfänger in Webentwicklung
- Studierende und Selbstlernende
- Lehrkräfte, die das Curriculum im Unterricht einsetzen
- Inhalte sind auf Barrierefreiheit und schrittweise Kompetenzentwicklung ausgelegt

### Bildungskonzept

- Projektbasiertes Lernen
- Häufige Wissensüberprüfungen (Quizze)
- Praktische Programmierübungen
- Beispiele mit realweltlichen Anwendungen
- Fokus auf Grundlagen vor Frameworks

### Repository-Wartung

- Aktive Gemeinschaft von Lernenden und Mitwirkenden
- Regelmäßige Aktualisierung von Abhängigkeiten und Inhalten
- Issues und Diskussionen werden von Maintainers überwacht
- Übersetzungsupdates automatisiert über GitHub Actions

### Verwandte Ressourcen

- [Microsoft Learn Module](https://docs.microsoft.com/learn/)
- [Student Hub Ressourcen](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) empfiehlt sich für Lernende
- Weitere Kurse: Generative AI, Data Science, ML, IoT Curricula verfügbar

### Arbeit mit spezifischen Projekten

Für detaillierte Anleitungen zu einzelnen Projekten siehe README-Dateien in:
- `quiz-app/README.md` - Vue 3 Quiz-Anwendung
- `7-bank-project/README.md` - Banking-App mit Authentifizierung
- `5-browser-extension/README.md` - Browser-Erweiterungsentwicklung
- `6-space-game/README.md` - Canvas-basiertes Spiel
- `9-chat-project/README.md` - KI Chat-Assistent Projekt

### Monorepo-Struktur

Obwohl kein traditionelles Monorepo, enthält dieses Repository mehrere unabhängige Projekte:
- Jede Lektion ist eigenständig
- Projekte teilen keine Abhängigkeiten
- Arbeit an Einzelprojekten ohne Beeinflussung anderer
- Gesamtes Repo klonen für das komplette Curriculum-Erlebnis

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir auf Genauigkeit achten, bitten wir zu beachten, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner Ursprungssprache ist als maßgebliche Quelle zu betrachten. Für wichtige Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die aus der Verwendung dieser Übersetzung entstehen.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->