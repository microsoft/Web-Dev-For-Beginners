# AGENTS.md

## Projektübersicht

Dies ist ein Bildungs-Curriculum-Repository zum Vermitteln von Webentwicklungsgrundlagen für Anfänger. Das Curriculum ist ein umfassender 12-Wochen-Kurs, der von Microsoft Cloud Advocates entwickelt wurde und 24 praxisorientierte Lektionen zu JavaScript, CSS und HTML enthält.

### Hauptkomponenten

- **Bildungsinhalte**: 24 strukturierte Lektionen, organisiert in projektbasierten Modulen  
- **Praktische Projekte**: Terrarium, Tipp-Spiel, Browser-Erweiterung, Weltraumspiel, Banking-App, Code-Editor und KI-Chat-Assistent  
- **Interaktive Quizze**: 48 Quizze mit je 3 Fragen (Vor-/Nach-Lektionsbewertungen)  
- **Mehrsprachige Unterstützung**: Automatisierte Übersetzungen in über 50 Sprachen via GitHub Actions  
- **Technologien**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (für KI-Projekte)  

### Architektur

- Bildungsrepository mit lektionenbasierter Struktur  
- Jeder Lektionen-Ordner enthält README, Codebeispiele und Lösungen  
- Eigenständige Projekte in separaten Verzeichnissen (quiz-app, diverse Lektionenprojekte)  
- Übersetzungssystem mittels GitHub Actions (co-op-translator)  
- Dokumentation bereitgestellt via Docsify und als PDF verfügbar  

## Setup-Befehle

Dieses Repository dient hauptsächlich zum Konsumieren von Bildungsinhalten. Für die Arbeit mit spezifischen Projekten:

### Haupt-Repository Setup

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

### Bankprojekt API (Node.js + Express)

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
# Setzen Sie die Umgebungsvariable GITHUB_TOKEN
python api.py
```

## Entwicklungs-Workflow

### Für Inhaltsbeiträge

1. **Forke das Repository** in dein GitHub-Konto  
2. **Klone deinen Fork** lokal  
3. **Erstelle einen neuen Branch** für deine Änderungen  
4. Ändere Inhalte der Lektionen oder Codebeispiele  
5. Teste alle Codeänderungen in den relevanten Projektverzeichnissen  
6. Reiche Pull Requests entsprechend der Beitragsrichtlinien ein  

### Für Lernende

1. Forke oder klone das Repository  
2. Navigiere nacheinander zu den Lektionen-Ordnern  
3. Lies die README-Dateien jeder Lektion  
4. Mache Vorab-Quizze unter https://ff-quizzes.netlify.app/web/  
5. Arbeite die Codebeispiele in den Lektionen durch  
6. Bearbeite Aufgaben und Herausforderungen  
7. Absolviere Nachbereitungs-Quizze  

### Live-Entwicklung

- **Dokumentation**: Führe `docsify serve` im Root aus (Port 3000)  
- **Quiz-App**: Führe `npm run dev` im quiz-app-Verzeichnis aus  
- **Projekte**: Nutze VS Code Live Server Erweiterung für HTML-Projekte  
- **API-Projekte**: Führe `npm start` in jeweiligen API-Verzeichnissen aus  

## Testanleitungen

### Quiz-App Tests

```bash
cd quiz-app
npm run lint       # Überprüfen auf Code-Stilprobleme
npm run build      # Überprüfen, ob der Build erfolgreich ist
```

### Bank API Tests

```bash
cd 7-bank-project/api
npm run lint       # Überprüfen Sie auf Code-Stilprobleme
node server.js     # Überprüfen Sie, ob der Server ohne Fehler startet
```

### Allgemeiner Testansatz

- Dies ist ein Bildungsrepository ohne umfassende automatisierte Tests  
- Manuelle Tests konzentrieren sich auf:  
  - Codebeispiele laufen fehlerfrei  
  - Links in der Dokumentation funktionieren korrekt  
  - Projekt-Builds laufen erfolgreich durch  
  - Beispiele folgen Best Practices  

### Vor-Einreichungs-Checks

- Führe `npm run lint` in Verzeichnissen mit package.json aus  
- Überprüfe Markdown-Links auf Gültigkeit  
- Teste Codebeispiele im Browser oder in Node.js  
- Prüfe, dass Übersetzungen die korrekte Struktur beibehalten  

## Code-Stilrichtlinien

### JavaScript

- Verwende moderne ES6+ Syntax  
- Beachte Standard-ESLint-Konfigurationen der Projekte  
- Nutze aussagekräftige Variablen- und Funktionsnamen zur besseren Verständlichkeit  
- Füge erläuternde Kommentare für Lernende hinzu  
- Formatiere mit Prettier, wo konfiguriert  

### HTML/CSS

- Semantische HTML5-Elemente  
- Responsive Design Prinzipien  
- Klare Klassennamen-Konventionen  
- Kommentare, die CSS-Techniken für Lernende erklären  

### Python

- PEP 8 Stilrichtlinien  
- Klare, didaktische Codebeispiele  
- Typannotationen, wo sinnvoll für den Lernprozess  

### Markdown-Dokumentation

- Klare Überschriftenhierarchie  
- Codeblöcke mit Sprachangabe  
- Verlinkungen zu weiteren Ressourcen  
- Screenshots und Bilder in `images/` Verzeichnissen  
- Alt-Texte für Bilder zwecks Barrierefreiheit  

### Dateiorganisation

- Lektionen nummeriert und sequenziell (1-getting-started-lessons, 2-js-basics, etc.)  
- Jedes Projekt mit `solution/` und oft `start/` oder `your-work/` Ordnern  
- Bilder liegen in lektionenspezifischen `images/` Ordnern  
- Übersetzungen in `translations/{language-code}/` Verzeichnisstruktur  

## Build und Deployment

### Quiz-App Deployment (Azure Static Web Apps)

Die quiz-app ist für Azure Static Web Apps Deployment konfiguriert:

```bash
cd quiz-app
npm run build      # Erstellt Ordner dist/
# Setzt Bereitstellung per GitHub Actions Workflow bei Push auf main um
```
  
Azure Static Web Apps Konfiguration:  
- **App Location**: `/quiz-app`  
- **Output Location**: `dist`  
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`  

### PDF-Erstellung der Dokumentation

```bash
npm install                    # Installiere docsify-to-pdf
npm run convert               # Erzeuge PDF aus docs
```
  
### Docsify Dokumentation

```bash
npm install -g docsify-cli    # Docsify global installieren
docsify serve                 # Auf localhost:3000 bereitstellen
```
  
### Projekt-spezifische Builds

Jedes Projektverzeichnis kann einen eigenen Buildprozess haben:  
- Vue-Projekte: `npm run build` erstellt Produktions-Bundles  
- Statische Projekte: Kein Build-Schritt, Dateien werden direkt bedient  

## Pull-Request-Richtlinien

### Titel-Format

Verwende klare, beschreibende Titel, die den Änderungsbereich angeben:  
- `[Quiz-app] Füge neues Quiz für Lektion X hinzu`  
- `[Lesson-3] Rechtschreibfehler im Terrarium-Projekt beheben`  
- `[Translation] Füge Spanisch-Übersetzung für Lektion 5 hinzu`  
- `[Docs] Aktualisiere Setup-Anweisungen`  

### Erforderliche Prüfungen

Vor dem PR-Einreichen:  

1. **Codequalität**:  
   - Führe `npm run lint` in betroffenen Projektverzeichnissen aus  
   - Behebe alle Lint-Fehler und Warnungen  

2. **Build-Verifikation**:  
   - Führe `npm run build` falls zutreffend aus  
   - Sicherstellen, dass keine Build-Fehler auftreten  

3. **Link-Validierung**:  
   - Teste alle Markdown-Links  
   - Verifiziere Bildreferenzen  

4. **Inhaltsprüfung**:  
   - Korrekturlesen von Rechtschreibung und Grammatik  
   - Sicherstellen, dass Codebeispiele korrekt und didaktisch sind  
   - Übersetzungen auf Bedeutungsgenauigkeit prüfen  

### Beitragspflichten

- Zustimmung zur Microsoft CLA (automatische Prüfung beim ersten PR)  
- Befolgung des [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)  
- Details in [CONTRIBUTING.md](./CONTRIBUTING.md)  
- Verweise auf Issue-Nummern im PR-Beschreibungstext falls zutreffend  

### Review-Prozess

- PRs werden von Maintainer- und Community-Mitgliedern geprüft  
- Bildungsklarheit hat Priorität  
- Codebeispiele sollten aktuellen Best Practices entsprechen  
- Übersetzungen auf Genauigkeit und kulturelle Angemessenheit geprüft  

## Übersetzungssystem

### Automatisierte Übersetzung

- Verwendet GitHub Actions mit co-op-translator Workflow  
- Übersetzt automatisiert in über 50 Sprachen  
- Quell-Dateien in Hauptverzeichnissen  
- Übersetzungen in `translations/{language-code}/` Verzeichnissen  

### Manuelle Verbesserungen an Übersetzungen

1. Datei in `translations/{language-code}/` finden  
2. Verbesserungen vornehmen, Struktur bewahren  
3. Sicherstellen, dass Codebeispiele funktionsfähig bleiben  
4. Lokalisierte Quizinhalte testen  

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

**Quiz-App startet nicht:**  
- Prüfe Node.js Version (v14+ empfohlen)  
- Lösche `node_modules` und `package-lock.json`, führe `npm install` erneut aus  
- Prüfe Port-Konflikte (Standard: Vite nutzt Port 5173)  

**API-Server startet nicht:**  
- Node.js Version mindestens v10 sicherstellen  
- Prüfe, ob Port bereits belegt ist  
- Alle Abhängigkeiten mit `npm install` installieren  

**Browser-Erweiterung lädt nicht:**  
- Prüfe Manifest.json auf korrekte Formatierung  
- Browser-Konsole auf Fehler prüfen  
- Browser-spezifische Installationshinweise beachten  

**Python Chat-Projekt Probleme:**  
- OpenAI-Paket installiert? `pip install openai`  
- Umgebungsvariable GITHUB_TOKEN gesetzt?  
- Zugriff auf GitHub Models überprüft?  

**Docsify liefert keine Docs aus:**  
- docsify-cli global installieren: `npm install -g docsify-cli`  
- Aus dem Root-Verzeichnis starten  
- Prüfen, ob `docs/_sidebar.md` existiert  

### Entwicklungstipps

- Nutze VS Code mit Live Server Erweiterung für HTML-Projekte  
- Installiere ESLint und Prettier Extensions für konsistente Formatierung  
- Verwende Browser DevTools zum Debuggen von JavaScript  
- Für Vue-Projekte Vue DevTools Browser Extension installieren  

### Performance-Aspekte

- Große Anzahl übersetzter Dateien (50+ Sprachen) führt zu großen Klonen  
- Nutze shallow clone, wenn nur mit Inhalten gearbeitet wird: `git clone --depth 1`  
- Übersetzungen bei englischer Bearbeitung von Suchen ausschließen  
- Build-Prozesse können beim ersten Mal langsam sein (npm install, Vite build)  

## Sicherheitsaspekte

### Umgebungsvariablen

- API-Schlüssel niemals im Repository speichern  
- `.env` Dateien nutzen (bereits in `.gitignore` enthalten)  
- Benötigte Umgebungsvariablen in Projekt-README dokumentieren  

### Python-Projekte

- Virtuelle Umgebungen verwenden: `python -m venv venv`  
- Abhängigkeiten aktuell halten  
- GitHub-Tokens minimal erforderliche Rechte geben  

### Zugang zu GitHub Models

- Personal Access Tokens (PAT) für GitHub Models erforderlich  
- Tokens als Umgebungsvariablen speichern  
- Keine Tokens oder Credentials commiten  

## Weitere Hinweise

### Zielgruppe

- Totale Anfänger in der Webentwicklung  
- Studenten und autodidaktische Lernende  
- Lehrende, die das Curriculum im Unterricht verwenden  
- Inhalte sind auf Zugänglichkeit und graduelles Kompetenzaufbau ausgelegt  

### Pädagogische Philosophie

- Projektbasierter Lernansatz  
- Häufige Wissensüberprüfungen (Quizze)  
- Praktische Programmierübungen  
- Beispiele aus realen Anwendungsfällen  
- Fokus auf Grundlagen vor Frameworks  

### Repository-Pflege

- Aktive Community von Lernenden und Mitwirkenden  
- Regelmäßige Aktualisierung der Abhängigkeiten und Inhalte  
- Beobachtung von Issues und Diskussionen durch Maintainer  
- Übersetzungsupdates automatisiert über GitHub Actions  

### Verwandte Ressourcen

- [Microsoft Learn Module](https://docs.microsoft.com/learn/)  
- [Student Hub Ressourcen](https://docs.microsoft.com/learn/student-hub/)  
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) empfohlen für Lernende  
- Zusätzliche Kurse: Generative KI, Data Science, ML, IoT Curricula verfügbar  

### Arbeit mit spezifischen Projekten

Für detaillierte Anleitungen zu einzelnen Projekten siehe README-Dateien in:  
- `quiz-app/README.md` - Vue 3 Quiz-Anwendung  
- `7-bank-project/README.md` - Banking-Anwendung mit Authentifizierung  
- `5-browser-extension/README.md` - Browsererweiterungsentwicklung  
- `6-space-game/README.md` - Canvas-basiertes Spiel  
- `9-chat-project/README.md` - KI-Chat-Assistent Projekt  

### Monorepo-Struktur

Obwohl kein traditionelles Monorepo, enthält dieses Repository mehrere unabhängige Projekte:  
- Jede Lektion ist eigenständig  
- Projekte teilen keine Abhängigkeiten  
- Arbeit an einzelnen Projekten ohne Beeinflussung anderer möglich  
- Komplettes Repository klonen für das vollständige Curriculum-Erlebnis  

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, beachten Sie bitte, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner Ursprungssprache gilt als maßgebliche Quelle. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die sich aus der Verwendung dieser Übersetzung ergeben.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->