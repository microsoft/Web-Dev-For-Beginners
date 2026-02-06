# AGENTS.md

## Projektübersicht

Dies ist ein Bildungs-Curriculum-Repository zur Vermittlung von Grundlagen der Webentwicklung für Anfänger. Das Curriculum ist ein umfassender 12-Wochen-Kurs, der von Microsoft Cloud Advocates entwickelt wurde und 24 praxisorientierte Lektionen zu JavaScript, CSS und HTML enthält.

### Hauptkomponenten

- **Bildungsinhalt**: 24 strukturierte Lektionen, organisiert in projektbasierten Modulen
- **Praktische Projekte**: Terrarium, Tipp-Spiel, Browser-Erweiterung, Weltraumspiel, Banking-App, Code-Editor und KI-Chat-Assistent
- **Interaktive Quizze**: 48 Quizze mit jeweils 3 Fragen (Vorher-/Nachher-Bewertungen der Lektionen)
- **Mehrsprachige Unterstützung**: Automatisierte Übersetzungen für über 50 Sprachen via GitHub Actions
- **Technologien**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (für KI-Projekte)

### Architektur

- Bildungs-Repository mit lektion-basierter Struktur
- Jeder Lektionen-Ordner enthält README, Codebeispiele und Lösungen
- Eigenständige Projekte in separaten Verzeichnissen (quiz-app, verschiedene Lektionen-Projekte)
- Übersetzungssystem mittels GitHub Actions (co-op-translator)
- Dokumentation bereitgestellt über Docsify und als PDF verfügbar

## Setup-Befehle

Dieses Repository dient hauptsächlich zum Konsumieren von Bildungsinhalten. Für die Arbeit mit spezifischen Projekten:

### Haupt-Repository-Setup

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz-App Setup (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Entwicklungsserver starten
npm run build      # Für die Produktion bauen
npm run lint       # ESLint ausführen
```

### Bank Projekt API (Node.js + Express)

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
# Befolgen Sie die browserspezifischen Anweisungen zum Laden von Erweiterungen
```

### Weltraumspiel-Projekte

```bash
cd 6-space-game/solution
npm install
# Öffne index.html im Browser oder verwende Live Server
```

### Chat-Projekt (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Setzen Sie die Umgebungsvariable GITHUB_TOKEN
python api.py
```

## Entwicklungs-Workflow

### Für Inhalt-Beitragende

1. **Forken Sie das Repository** in Ihr GitHub-Konto
2. **Klonen Sie Ihren Fork** lokal
3. **Erstellen Sie einen neuen Branch** für Ihre Änderungen
4. Nehmen Sie Änderungen an Lektionen-Inhalt oder Codebeispielen vor
5. Testen Sie Codeänderungen in den entsprechenden Projektverzeichnissen
6. Reichen Sie Pull Requests entsprechend den Beitragsrichtlinien ein

### Für Lernende

1. Forken oder klonen Sie das Repository
2. Navigieren Sie nacheinander durch die Lektionen-Verzeichnisse
3. Lesen Sie die README-Dateien für jede Lektion
4. Machen Sie die Vor-Lektion-Quizze unter https://ff-quizzes.netlify.app/web/
5. Arbeiten Sie die Codebeispiele in den Lektionen-Ordnern durch
6. Erledigen Sie Aufgaben und Herausforderungen
7. Absolvieren Sie die Nach-Lektion-Quizze

### Live-Entwicklung

- **Dokumentation**: `docsify serve` im Root ausführen (Port 3000)
- **Quiz-App**: `npm run dev` im quiz-app-Verzeichnis ausführen
- **Projekte**: Nutzen Sie die VS Code Live Server-Erweiterung für HTML-Projekte
- **API-Projekte**: `npm start` in den jeweiligen API-Verzeichnissen ausführen

## Testanweisungen

### Quiz-App Tests

```bash
cd quiz-app
npm run lint       # Überprüfen auf Code-Stil-Probleme
npm run build      # Überprüfen, ob der Build erfolgreich ist
```

### Bank API Tests

```bash
cd 7-bank-project/api
npm run lint       # Auf Code-Stilprobleme prüfen
node server.js     # Überprüfen, ob der Server ohne Fehler startet
```

### Allgemeines Testverfahren

- Dies ist ein Bildungs-Repository ohne umfassende automatisierte Tests
- Manuelles Testen konzentriert sich auf:
  - Codebeispiele laufen fehlerfrei
  - Links in der Dokumentation funktionieren korrekt
  - Projekte bauen fehlerfrei
  - Beispiele folgen Best Practices

### Vor-Einreichungs-Checks

- Führen Sie `npm run lint` in Verzeichnissen mit package.json aus
- Überprüfen Sie, ob Markdown-Links gültig sind
- Testen Sie Codebeispiele im Browser oder Node.js
- Stellen Sie sicher, dass Übersetzungen die richtige Struktur behalten

## Code-Stil-Richtlinien

### JavaScript

- Verwenden Sie moderne ES6+ Syntax
- Folgen Sie den Standard-ESLint-Konfigurationen in den Projekten
- Verwenden Sie aussagekräftige Variablen- und Funktionsnamen zur besseren Verständlichkeit
- Fügen Sie Kommentare hinzu, die Konzepte für Lernende erklären
- Formatieren Sie mit Prettier, wo konfiguriert

### HTML/CSS

- Semantische HTML5-Elemente
- Responsive Design-Prinzipien
- Klare Klassennamenskonventionen
- Kommentare, die CSS-Techniken für Lernende erklären

### Python

- PEP 8 Stilrichtlinien
- Klare, pädagogische Codebeispiele
- Type Hints, wo sie beim Lernen hilfreich sind

### Markdown-Dokumentation

- Klare Überschriftenhierarchie
- Codeblöcke mit Sprachspezifikation
- Links zu zusätzlichen Ressourcen
- Screenshots und Bilder in `images/` Verzeichnissen
- Alt-Text für Bilder zur Barrierefreiheit

### Datei-Organisation

- Lektionen nummeriert sequentiell (1-getting-started-lessons, 2-js-basics, etc.)
- Jedes Projekt hat `solution/` und oft `start/` oder `your-work/` Verzeichnisse
- Bilder gespeichert in lektion-spezifischen `images/` Ordnern
- Übersetzungen in `translations/{language-code}/` Struktur

## Build und Deployment

### Quiz-App Deployment (Azure Static Web Apps)

Die quiz-app ist für Azure Static Web Apps Deployment konfiguriert:

```bash
cd quiz-app
npm run build      # Erstellt den Ordner dist/
# Führt bei Push zu main den GitHub Actions Workflow zur Bereitstellung aus
```

Azure Static Web Apps Konfiguration:
- **App Location**: `/quiz-app`
- **Output Location**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokumentation PDF-Erstellung

```bash
npm install                    # Installiere docsify-to-pdf
npm run convert               # Erzeuge PDF aus docs
```

### Docsify Dokumentation

```bash
npm install -g docsify-cli    # Docsify global installieren
docsify serve                 # Auf localhost:3000 bereitstellen
```

### Projektspezifische Builds

Jedes Projektverzeichnis kann einen eigenen Build-Prozess haben:
- Vue-Projekte: `npm run build` erstellt Produktions-Bundles
- Statische Projekte: Kein Build-Schritt, Dateien werden direkt ausgeliefert

## Pull-Request-Richtlinien

### Titel-Format

Verwenden Sie klare, beschreibende Titel, die den Änderungsbereich angeben:
- `[Quiz-app] Neue Quiz für Lektion X hinzufügen`
- `[Lesson-3] Tippfehler im Terrarium-Projekt korrigieren`
- `[Translation] Spanische Übersetzung für Lektion 5 hinzufügen`
- `[Docs] Setup-Anweisungen aktualisieren`

### Erforderliche Prüfungen

Vor dem Einreichen eines PR:

1. **Codequalität**:
   - `npm run lint` in betroffenen Projektordnern ausführen
   - Alle Linting-Fehler und Warnungen beheben

2. **Build-Verifikation**:
   - Falls zutreffend, `npm run build` ausführen
   - Sicherstellen, dass keine Build-Fehler auftreten

3. **Linkprüfung**:
   - Alle Markdown-Links testen
   - Bildreferenzen prüfen

4. **Inhaltsprüfung**:
   - Korrekturlesen auf Rechtschreibung und Grammatik
   - Sicherstellen, dass Codebeispiele korrekt und pädagogisch sinnvoll sind
   - Übersetzungen auf Erhalt der ursprünglichen Bedeutung prüfen

### Beitragsanforderungen

- Zustimmung zur Microsoft CLA (automatische Prüfung beim ersten PR)
- Einhaltung des [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Siehe [CONTRIBUTING.md](./CONTRIBUTING.md) für detaillierte Richtlinien
- Verweise auf Issue-Nummern im PR-Beschreibungstext, falls zutreffend

### Review-Prozess

- PRs werden von Maintainers und Community geprüft
- Priorität auf pädagogische Klarheit
- Codebeispiele sollten aktuellen Best Practices folgen
- Übersetzungen auf Genauigkeit und kulturelle Angemessenheit geprüft

## Übersetzungssystem

### Automatisierte Übersetzung

- Verwendet GitHub Actions mit co-op-translator Workflow
- Übersetzt automatisch in über 50 Sprachen
- Quelldateien in Hauptverzeichnissen
- Übersetzte Dateien in `translations/{language-code}/` Verzeichnissen

### Manuelle Verbesserungen zu Übersetzungen hinzufügen

1. Datei in `translations/{language-code}/` suchen
2. Verbesserungen vornehmen und Struktur bewahren
3. Sicherstellen, dass Codebeispiele weiterhin funktionieren
4. Lokalisierte Quiz-Inhalte testen

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

## Debugging und Fehlerbehebung

### Häufige Probleme

**Quiz-App startet nicht**:
- Node.js Version prüfen (v14+ empfohlen)
- `node_modules` und `package-lock.json` löschen, `npm install` erneut ausführen
- Port-Konflikte prüfen (Standard: Vite nutzt Port 5173)

**API-Server startet nicht**:
- Node.js Mindestversion prüfen (node >=10)
- Prüfen, ob Port bereits belegt ist
- Alle Abhängigkeiten mit `npm install` installieren

**Browser-Erweiterung lädt nicht**:
- Manifest.json auf korrekte Formatierung prüfen
- Browser-Konsole auf Fehler überprüfen
- Browser-spezifische Installationsanweisungen befolgen

**Probleme im Python-Chat-Projekt**:
- OpenAI-Package installiert? (`pip install openai`)
- GITHUB_TOKEN Umgebungsvariable gesetzt?
- GitHub Models Zugriffsrechte prüfen

**Docsify liefert keine Dokumentation aus**:
- docsify-cli global installieren: `npm install -g docsify-cli`
- Vom Root-Verzeichnis des Repositories aus starten
- Prüfen, ob `docs/_sidebar.md` existiert

### Tipps zur Entwicklungsumgebung

- VS Code mit Live Server-Erweiterung für HTML-Projekte verwenden
- ESLint und Prettier Erweiterungen für konsistentes Formatieren installieren
- Browser DevTools zum Debuggen von JavaScript nutzen
- Für Vue-Projekte Vue DevTools Browser-Erweiterung installieren

### Performance-Überlegungen

- Große Anzahl an Übersetzungen (50+ Sprachen) führt zu großen vollständigen Klonen
- Für nur Content-Arbeit flachen Klon verwenden: `git clone --depth 1`
- Übersetzungen bei Arbeit an englischem Inhalt vom Suchindex ausschließen
- Build-Prozesse können beim ersten Durchlauf langsam sein (npm install, Vite Build)

## Sicherheitsüberlegungen

### Umgebungsvariablen

- API-Schlüssel dürfen niemals im Repository gespeichert werden
- `.env` Dateien verwenden (bereits in `.gitignore`)
- Erforderliche Umgebungsvariablen in Projekt-READMEs dokumentieren

### Python-Projekte

- Virtuelle Umgebungen verwenden: `python -m venv venv`
- Abhängigkeiten aktuell halten
- GitHub-Tokens sollten minimal notwendige Berechtigungen haben

### GitHub Models Zugriff

- Personal Access Tokens (PAT) werden für GitHub Models benötigt
- Tokens als Umgebungsvariablen speichern
- Tokens oder Anmeldedaten niemals committen

## Zusätzliche Hinweise

### Zielgruppe

- Vollständige Anfänger in Webentwicklung
- Schüler und Selbstlernende
- Lehrer, die das Curriculum im Unterricht verwenden
- Inhalte sind barrierefrei und für schrittweise Kompetenzentwicklung ausgelegt

### Pädagogische Philosophie

- Projektbasiertes Lernen
- Häufige Wissensabfragen (Quizze)
- Praxisnahe Codierübungen
- Praxisbeispiele aus der Realität
- Fokus auf Grundlagen vor Frameworks

### Repository-Wartung

- Aktive Community von Lernenden und Beitragenden
- Regelmäßige Updates zu Abhängigkeiten und Inhalten
- Überwachung von Issues und Diskussionen durch Maintainer
- Automatisierte Übersetzungs-Updates via GitHub Actions

### Verwandte Ressourcen

- [Microsoft Learn Module](https://docs.microsoft.com/learn/)
- [Student Hub Ressourcen](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) empfohlen für Lernende
- Zusätzliche Kurse: Generative AI, Data Science, ML, IoT Curricula verfügbar

### Arbeit mit spezifischen Projekten

Für detaillierte Anweisungen zu einzelnen Projekten siehe die README-Dateien in:
- `quiz-app/README.md` - Vue 3 Quiz-Anwendung
- `7-bank-project/README.md` - Banking-Anwendung mit Authentifizierung
- `5-browser-extension/README.md` - Entwicklung von Browser-Erweiterungen
- `6-space-game/README.md` - Entwicklung eines Canvas-basierten Spiels
- `9-chat-project/README.md` - KI Chat-Assistent Projekt

### Monorepo-Struktur

Obwohl kein klassisches Monorepo, enthält dieses Repository mehrere unabhängige Projekte:
- Jede Lektion ist eigenständig
- Projekte teilen keine Abhängigkeiten
- Arbeiten Sie an einzelnen Projekten, ohne andere zu beeinflussen
- Klonen Sie das gesamte Repository für das volle Curriculum-Erlebnis

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, weisen wir darauf hin, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner Originalsprache ist als maßgebliche Quelle zu betrachten. Für wichtige Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die durch die Nutzung dieser Übersetzung entstehen.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->