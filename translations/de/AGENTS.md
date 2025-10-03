<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a362efd06d64d4134a0cfe8515a86d34",
  "translation_date": "2025-10-03T11:13:31+00:00",
  "source_file": "AGENTS.md",
  "language_code": "de"
}
-->
# AGENTS.md

## Projektübersicht

Dies ist ein Bildungsrepository, das Grundlagen der Webentwicklung für Anfänger vermittelt. Der Lehrplan ist ein umfassender 12-wöchiger Kurs, der von den Microsoft Cloud Advocates entwickelt wurde und 24 praxisorientierte Lektionen zu JavaScript, CSS und HTML umfasst.

### Hauptkomponenten

- **Bildungsinhalte**: 24 strukturierte Lektionen, organisiert in projektbasierte Module
- **Praktische Projekte**: Terrarium, Schreibspiel, Browser-Erweiterung, Weltraumspiel, Banking-App, Code-Editor und KI-Chat-Assistent
- **Interaktive Quizze**: 48 Quizze mit jeweils 3 Fragen (Vor-/Nach-Lektionen-Bewertungen)
- **Mehrsprachige Unterstützung**: Automatische Übersetzungen in über 50 Sprachen via GitHub Actions
- **Technologien**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (für KI-Projekte)

### Architektur

- Bildungsrepository mit lektionenbasierter Struktur
- Jeder Lektionenordner enthält README, Codebeispiele und Lösungen
- Eigenständige Projekte in separaten Verzeichnissen (quiz-app, verschiedene Lektionenprojekte)
- Übersetzungssystem mit GitHub Actions (co-op-translator)
- Dokumentation wird über Docsify bereitgestellt und ist als PDF verfügbar

## Setup-Befehle

Dieses Repository dient hauptsächlich dem Konsum von Bildungsinhalten. Für die Arbeit mit spezifischen Projekten:

### Hauptrepository-Setup

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz-App-Setup (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
```

### Bankprojekt-API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Start API server
npm run lint       # Run ESLint
npm run format     # Format with Prettier
```

### Browser-Erweiterungsprojekte

```bash
cd 5-browser-extension/solution
npm install
# Follow browser-specific extension loading instructions
```

### Weltraumspiel-Projekte

```bash
cd 6-space-game/solution
npm install
# Open index.html in browser or use Live Server
```

### Chat-Projekt (Python-Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Set GITHUB_TOKEN environment variable
python api.py
```

## Entwicklungsworkflow

### Für Inhaltsbeitragende

1. **Forken Sie das Repository** in Ihrem GitHub-Konto
2. **Klonen Sie Ihren Fork** lokal
3. **Erstellen Sie einen neuen Branch** für Ihre Änderungen
4. Nehmen Sie Änderungen an den Lektioneninhalten oder Codebeispielen vor
5. Testen Sie alle Codeänderungen in den relevanten Projektverzeichnissen
6. Reichen Sie Pull-Requests gemäß den Beitragsrichtlinien ein

### Für Lernende

1. Forken oder klonen Sie das Repository
2. Navigieren Sie nacheinander durch die Lektionenverzeichnisse
3. Lesen Sie die README-Dateien jeder Lektion
4. Machen Sie die Vor-Lektionen-Quizze unter https://ff-quizzes.netlify.app/web/
5. Arbeiten Sie die Codebeispiele in den Lektionenordnern durch
6. Bearbeiten Sie Aufgaben und Herausforderungen
7. Machen Sie die Nach-Lektionen-Quizze

### Live-Entwicklung

- **Dokumentation**: Führen Sie `docsify serve` im Root-Verzeichnis aus (Port 3000)
- **Quiz-App**: Führen Sie `npm run dev` im quiz-app-Verzeichnis aus
- **Projekte**: Verwenden Sie die Live Server-Erweiterung von VS Code für HTML-Projekte
- **API-Projekte**: Führen Sie `npm start` in den jeweiligen API-Verzeichnissen aus

## Testanweisungen

### Quiz-App-Test

```bash
cd quiz-app
npm run lint       # Check for code style issues
npm run build      # Verify build succeeds
```

### Bank-API-Test

```bash
cd 7-bank-project/api
npm run lint       # Check for code style issues
node server.js     # Verify server starts without errors
```

### Allgemeiner Testansatz

- Dies ist ein Bildungsrepository ohne umfassende automatisierte Tests
- Manuelles Testen konzentriert sich auf:
  - Codebeispiele laufen fehlerfrei
  - Links in der Dokumentation funktionieren korrekt
  - Projekt-Builds werden erfolgreich abgeschlossen
  - Beispiele folgen Best Practices

### Vorabprüfungen

- Führen Sie `npm run lint` in Verzeichnissen mit package.json aus
- Überprüfen Sie, ob Markdown-Links gültig sind
- Testen Sie Codebeispiele im Browser oder mit Node.js
- Stellen Sie sicher, dass Übersetzungen die richtige Struktur beibehalten

## Richtlinien für Code-Stil

### JavaScript

- Verwenden Sie moderne ES6+ Syntax
- Folgen Sie den standardmäßigen ESLint-Konfigurationen in den Projekten
- Verwenden Sie aussagekräftige Variablen- und Funktionsnamen für Bildungszwecke
- Fügen Sie Kommentare hinzu, die Konzepte für Lernende erklären
- Formatieren Sie mit Prettier, wo konfiguriert

### HTML/CSS

- Semantische HTML5-Elemente
- Prinzipien des responsiven Designs
- Klare Klassennamen-Konventionen
- Kommentare, die CSS-Techniken für Lernende erklären

### Python

- PEP 8 Stilrichtlinien
- Klare, bildungsorientierte Codebeispiele
- Typ-Hinweise, wo hilfreich für das Lernen

### Markdown-Dokumentation

- Klare Überschriftenhierarchie
- Codeblöcke mit Sprachspezifikation
- Links zu zusätzlichen Ressourcen
- Screenshots und Bilder in `images/` Verzeichnissen
- Alt-Text für Bilder für Barrierefreiheit

### Dateiorganisation

- Lektionen nummeriert in Reihenfolge (1-getting-started-lessons, 2-js-basics, etc.)
- Jedes Projekt hat `solution/` und oft `start/` oder `your-work/` Verzeichnisse
- Bilder werden in lektionenspezifischen `images/` Ordnern gespeichert
- Übersetzungen in `translations/{language-code}/` Struktur

## Build und Deployment

### Quiz-App-Deployment (Azure Static Web Apps)

Die quiz-app ist für die Bereitstellung auf Azure Static Web Apps konfiguriert:

```bash
cd quiz-app
npm run build      # Creates dist/ folder
# Deploys via GitHub Actions workflow on push to main
```

Azure Static Web Apps Konfiguration:
- **App-Standort**: `/quiz-app`
- **Ausgabe-Standort**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokumentations-PDF-Erstellung

```bash
npm install                    # Install docsify-to-pdf
npm run convert               # Generate PDF from docs
```

### Docsify-Dokumentation

```bash
npm install -g docsify-cli    # Install Docsify globally
docsify serve                 # Serve on localhost:3000
```

### Projekt-spezifische Builds

Jedes Projektverzeichnis kann seinen eigenen Build-Prozess haben:
- Vue-Projekte: `npm run build` erstellt Produktions-Bundles
- Statische Projekte: Kein Build-Schritt, Dateien direkt bereitstellen

## Richtlinien für Pull-Requests

### Titel-Format

Verwenden Sie klare, beschreibende Titel, die den Bereich der Änderung angeben:
- `[Quiz-app] Neues Quiz für Lektion X hinzufügen`
- `[Lesson-3] Tippfehler im Terrarium-Projekt beheben`
- `[Translation] Spanische Übersetzung für Lektion 5 hinzufügen`
- `[Docs] Setup-Anweisungen aktualisieren`

### Erforderliche Prüfungen

Vor dem Einreichen eines PR:

1. **Codequalität**:
   - Führen Sie `npm run lint` in den betroffenen Projektverzeichnissen aus
   - Beheben Sie alle Linting-Fehler und -Warnungen

2. **Build-Verifizierung**:
   - Führen Sie `npm run build` aus, falls zutreffend
   - Stellen Sie sicher, dass keine Build-Fehler auftreten

3. **Link-Validierung**:
   - Testen Sie alle Markdown-Links
   - Überprüfen Sie, ob Bildreferenzen funktionieren

4. **Inhaltsprüfung**:
   - Korrekturlesen auf Rechtschreibung und Grammatik
   - Sicherstellen, dass Codebeispiele korrekt und lehrreich sind
   - Überprüfen, ob Übersetzungen die ursprüngliche Bedeutung beibehalten

### Beitragsanforderungen

- Zustimmung zur Microsoft CLA (automatische Prüfung beim ersten PR)
- Befolgen Sie den [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Siehe [CONTRIBUTING.md](./CONTRIBUTING.md) für detaillierte Richtlinien
- Verweisen Sie auf Issue-Nummern in der PR-Beschreibung, falls zutreffend

### Überprüfungsprozess

- PRs werden von Maintainer und der Community überprüft
- Bildungsverständlichkeit hat Priorität
- Codebeispiele sollten aktuellen Best Practices folgen
- Übersetzungen werden auf Genauigkeit und kulturelle Angemessenheit geprüft

## Übersetzungssystem

### Automatische Übersetzung

- Verwendet GitHub Actions mit co-op-translator Workflow
- Übersetzt automatisch in über 50 Sprachen
- Quelldateien in Hauptverzeichnissen
- Übersetzte Dateien in `translations/{language-code}/` Verzeichnissen

### Manuelle Verbesserungen an Übersetzungen hinzufügen

1. Datei im `translations/{language-code}/` Verzeichnis finden
2. Verbesserungen vornehmen, während die Struktur erhalten bleibt
3. Sicherstellen, dass Codebeispiele weiterhin funktionieren
4. Lokalisierte Quiz-Inhalte testen

### Übersetzungs-Metadaten

Übersetzte Dateien enthalten einen Metadaten-Header:
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
- Überprüfen Sie die Node.js-Version (v14+ empfohlen)
- Löschen Sie `node_modules` und `package-lock.json`, führen Sie `npm install` erneut aus
- Überprüfen Sie auf Portkonflikte (Standard: Vite verwendet Port 5173)

**API-Server startet nicht**:
- Überprüfen Sie, ob die Node.js-Version die Mindestanforderungen erfüllt (node >=10)
- Überprüfen Sie, ob der Port bereits verwendet wird
- Stellen Sie sicher, dass alle Abhängigkeiten mit `npm install` installiert sind

**Browser-Erweiterung lädt nicht**:
- Überprüfen Sie, ob manifest.json korrekt formatiert ist
- Überprüfen Sie die Browser-Konsole auf Fehler
- Befolgen Sie die browser-spezifischen Installationsanweisungen für Erweiterungen

**Probleme mit Python-Chat-Projekt**:
- Stellen Sie sicher, dass das OpenAI-Paket installiert ist: `pip install openai`
- Überprüfen Sie, ob die Umgebungsvariable GITHUB_TOKEN gesetzt ist
- Überprüfen Sie die Zugriffsberechtigungen für GitHub Models

**Docsify dient keine Dokumentation**:
- Installieren Sie docsify-cli global: `npm install -g docsify-cli`
- Führen Sie es aus dem Root-Verzeichnis des Repositorys aus
- Überprüfen Sie, ob `docs/_sidebar.md` existiert

### Tipps zur Entwicklungsumgebung

- Verwenden Sie VS Code mit der Live Server-Erweiterung für HTML-Projekte
- Installieren Sie ESLint und Prettier-Erweiterungen für konsistente Formatierung
- Verwenden Sie die DevTools des Browsers zum Debuggen von JavaScript
- Für Vue-Projekte installieren Sie die Vue DevTools Browser-Erweiterung

### Leistungserwägungen

- Eine große Anzahl übersetzter Dateien (50+ Sprachen) bedeutet, dass vollständige Klone groß sind
- Verwenden Sie einen flachen Klon, wenn Sie nur an Inhalten arbeiten: `git clone --depth 1`
- Schließen Sie Übersetzungen von Suchvorgängen aus, wenn Sie an englischen Inhalten arbeiten
- Build-Prozesse können beim ersten Lauf langsam sein (npm install, Vite build)

## Sicherheitsüberlegungen

### Umgebungsvariablen

- API-Schlüssel sollten niemals im Repository gespeichert werden
- Verwenden Sie `.env` Dateien (bereits in `.gitignore`)
- Dokumentieren Sie erforderliche Umgebungsvariablen in den Projekt-READMEs

### Python-Projekte

- Verwenden Sie virtuelle Umgebungen: `python -m venv venv`
- Halten Sie Abhängigkeiten aktuell
- GitHub-Token sollten minimale erforderliche Berechtigungen haben

### GitHub Models Zugriff

- Persönliche Zugriffstoken (PAT) erforderlich für GitHub Models
- Token sollten als Umgebungsvariablen gespeichert werden
- Token oder Anmeldeinformationen niemals commiten

## Zusätzliche Hinweise

### Zielgruppe

- Vollständige Anfänger in der Webentwicklung
- Studenten und Selbstlernende
- Lehrer, die den Lehrplan im Unterricht verwenden
- Inhalte sind für Barrierefreiheit und schrittweisen Kompetenzaufbau konzipiert

### Bildungsphilosophie

- Projektbasierter Lernansatz
- Häufige Wissensüberprüfungen (Quizze)
- Praktische Codierungsübungen
- Beispiele aus der realen Welt
- Fokus auf Grundlagen vor Frameworks

### Repository-Wartung

- Aktive Community von Lernenden und Beitragenden
- Regelmäßige Updates von Abhängigkeiten und Inhalten
- Issues und Diskussionen werden von Maintainer überwacht
- Übersetzungsupdates automatisiert über GitHub Actions

### Verwandte Ressourcen

- [Microsoft Learn Module](https://docs.microsoft.com/learn/)
- [Student Hub Ressourcen](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) empfohlen für Lernende
- Zusätzliche Kurse: Generative KI, Data Science, ML, IoT Lehrpläne verfügbar

### Arbeit mit spezifischen Projekten

Für detaillierte Anweisungen zu einzelnen Projekten, siehe die README-Dateien in:
- `quiz-app/README.md` - Vue 3 Quiz-Anwendung
- `7-bank-project/README.md` - Banking-Anwendung mit Authentifizierung
- `5-browser-extension/README.md` - Entwicklung von Browser-Erweiterungen
- `6-space-game/README.md` - Canvas-basiertes Spiel
- `9-chat-project/README.md` - KI-Chat-Assistent-Projekt

### Monorepo-Struktur

Obwohl kein traditionelles Monorepo, enthält dieses Repository mehrere unabhängige Projekte:
- Jede Lektion ist eigenständig
- Projekte teilen keine Abhängigkeiten
- Arbeiten Sie an einzelnen Projekten, ohne andere zu beeinflussen
- Klonen Sie das gesamte Repository für das vollständige Curriculum-Erlebnis

---

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, beachten Sie bitte, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die sich aus der Nutzung dieser Übersetzung ergeben.