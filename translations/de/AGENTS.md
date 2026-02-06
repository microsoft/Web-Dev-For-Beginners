# AGENTS.md

## Projektübersicht

Dies ist ein Bildungs-Curriculum-Repository zum Erlernen der Grundlagen der Webentwicklung für Anfänger. Das Curriculum ist ein umfassender 12-Wochen-Kurs, der von Microsoft Cloud Advocates entwickelt wurde und 24 praktische Lektionen zu JavaScript, CSS und HTML umfasst.

### Hauptkomponenten

- **Bildungsinhalt**: 24 strukturierte Lektionen, organisiert in projektbasierten Modulen
- **Praktische Projekte**: Terrarium, Tipp-Spiel, Browser-Erweiterung, Weltraumspiel, Banking-App, Code-Editor und KI-Chat-Assistent
- **Interaktive Quiz**: 48 Quiz mit jeweils 3 Fragen (Vor-/Nach-Lektionsbewertungen)
- **Mehrsprachige Unterstützung**: Automatisierte Übersetzungen für 50+ Sprachen via GitHub Actions
- **Technologien**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (für KI-Projekte)

### Architektur

- Bildungsrepository mit lektionenbasierter Struktur
- Jeder Lektionenordner enthält README, Codebeispiele und Lösungen
- Eigenständige Projekte in separaten Verzeichnissen (quiz-app, verschiedene Lektionenprojekte)
- Übersetzungssystem mit GitHub Actions (co-op-translator)
- Dokumentation verfügbar via Docsify und als PDF

## Einrichtungskommandos

Dieses Repository ist in erster Linie für die Nutzung von Bildungsinhalten bestimmt. Für die Arbeit mit spezifischen Projekten:

### Hauptrepository Einrichtung

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
# Befolgen Sie browserspezifische Anweisungen zum Laden von Erweiterungen
```

### Weltraumspiel-Projekte

```bash
cd 6-space-game/solution
npm install
# Öffne index.html im Browser oder nutze Live Server
```

### Chat-Projekt (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Setze die Umgebungsvariable GITHUB_TOKEN
python api.py
```

## Entwicklungsablauf

### Für Inhaltsbeiträge

1. **Forke das Repository** in deinen GitHub-Account
2. **Klone deinen Fork** lokal
3. **Erstelle einen neuen Branch** für deine Änderungen
4. Ändere Inhalt der Lektionen oder Codebeispiele
5. Teste Änderungen an Code in den relevanten Projektverzeichnissen
6. Reiche Pull Requests ein gemäß den Beitragsrichtlinien

### Für Lernende

1. Forke oder klone das Repository
2. Navigiere der Reihenfolge nach durch die Lektionenordner
3. Lese die README-Dateien jeder Lektion
4. Absolviere die Vor-Lektion-Quiz unter https://ff-quizzes.netlify.app/web/
5. Arbeite die Codebeispiele in den Lektionenordnern durch
6. Erledige Aufgaben und Herausforderungen
7. Absolviere die Nach-Lektion-Quiz

### Live-Entwicklung

- **Dokumentation**: Führe `docsify serve` im Root aus (Port 3000)
- **Quiz-App**: Starte `npm run dev` im quiz-app-Verzeichnis
- **Projekte**: Benutze VS Code Live Server Erweiterung für HTML-Projekte
- **API-Projekte**: Starte `npm start` in entsprechenden API-Verzeichnissen

## Testanweisungen

### Quiz-App Testing

```bash
cd quiz-app
npm run lint       # Überprüfen Sie auf Code-Stilprobleme
npm run build      # Überprüfen Sie, ob der Build erfolgreich ist
```

### Bank-API Testing

```bash
cd 7-bank-project/api
npm run lint       # Überprüfen Sie auf Probleme im Code-Stil
node server.js     # Überprüfen Sie, ob der Server ohne Fehler gestartet wird
```

### Allgemeiner Testansatz

- Dies ist ein Bildungsrepository ohne umfassende automatisierte Tests
- Manuelle Tests konzentrieren sich auf:
  - Codebeispiele laufen ohne Fehler
  - Links in der Dokumentation funktionieren korrekt
  - Projekte bauen erfolgreich
  - Beispiele folgen Best Practices

### Vor dem Einreichen überprüfen

- Führe `npm run lint` in Verzeichnissen mit package.json aus
- Überprüfe Gültigkeit aller Markdown-Links
- Teste Codebeispiele im Browser oder Node.js
- Stelle sicher, dass Übersetzungen korrekt strukturiert sind

## Code-Stil-Richtlinien

### JavaScript

- Verwende moderne ES6+ Syntax
- Folge Standard-ESLint-Konfigurationen der Projekte
- Verwende sinnvolle Variablen- und Funktionsnamen zur besseren Verständlichkeit
- Füge Kommentare hinzu, die Konzepte für Lernende erläutern
- Formatiere mit Prettier, wo konfiguriert

### HTML/CSS

- Semantische HTML5-Elemente
- Responsive Design Prinzipien
- Klare Klassennamen-Konventionen
- Kommentare, die CSS-Techniken für Lernende erklären

### Python

- PEP 8 Stilrichtlinien
- Klare, pädagogische Codebeispiele
- Type Hints, wo nützlich für das Lernen

### Markdown-Dokumentation

- Klare Überschriften-Hierarchie
- Codeblöcke mit Sprachangabe
- Links zu weiterführenden Ressourcen
- Screenshots und Bilder in `images/` Verzeichnissen
- Alt-Texte für Bilder für Barrierefreiheit

### Dateiorganisation

- Lektionen fortlaufend nummeriert (1-getting-started-lessons, 2-js-basics, usw.)
- Jedes Projekt hat `solution/` und häufig `start/` oder `your-work/` Verzeichnisse
- Bilder in lektionenspezifischen `images/` Ordnern
- Übersetzungen in `translations/{language-code}/` Strukturen

## Build und Deployment

### Quiz-App Deployment (Azure Static Web Apps)

Die quiz-app ist für Azure Static Web Apps Deployment konfiguriert:

```bash
cd quiz-app
npm run build      # Erstellt den Ordner dist/
# Führt Bereitstellung über GitHub Actions Workflow bei Push zum main durch
```

Azure Static Web Apps Konfiguration:
- **App-Location**: `/quiz-app`
- **Output-Location**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokumentations-PDF-Erstellung

```bash
npm install                    # Installiere docsify-to-pdf
npm run convert               # PDF aus Docs generieren
```

### Docsify-Dokumentation

```bash
npm install -g docsify-cli    # Installiere Docsify global
docsify serve                 # Bereitstellen auf localhost:3000
```

### Projektspezifische Builds

Jedes Projektverzeichnis kann einen eigenen Buildprozess haben:
- Vue-Projekte: `npm run build` erzeugt Produktionsbundles
- Statische Projekte: Kein Build-Schritt, Dateien werden direkt serviert

## Pull Request Richtlinien

### Titel-Format

Verwende klare, beschreibende Titel, die den Änderungsbereich angeben:
- `[Quiz-app] Neue Quiz für Lektion X hinzufügen`
- `[Lesson-3] Rechtschreibfehler im Terrarium-Projekt beheben`
- `[Translation] Spanische Übersetzung für Lektion 5 hinzufügen`
- `[Docs] Setup-Anweisungen aktualisieren`

### Erforderliche Prüfungen

Vor dem Einreichen eines PR:

1. **Codequalität**:
   - Führe `npm run lint` in betroffenen Projektverzeichnissen aus
   - Behebe alle Linting-Fehler und -Warnungen

2. **Build-Verifizierung**:
   - Führe `npm run build` falls zutreffend aus
   - Stelle sicher, dass keine Build-Fehler auftreten

3. **Link-Validierung**:
   - Teste alle Markdown-Links
   - Überprüfe Bildverweise auf Funktion

4. **Inhaltsprüfung**:
   - Korrekturlesen auf Rechtschreibung und Grammatik
   - Sicherstellen, dass Codebeispiele korrekt und lehrreich sind
   - Übersetzungen auf korrekte Bedeutung prüfen

### Beitragsanforderungen

- Zustimmung zur Microsoft CLA (automatischer Check beim ersten PR)
- Folge dem [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Siehe [CONTRIBUTING.md](./CONTRIBUTING.md) für ausführliche Richtlinien
- Verweise bei Bedarf auf Issue-Nummern in der PR-Beschreibung

### Review-Prozess

- PRs werden von Maintainers und Community geprüft
- Pädagogische Klarheit hat Priorität
- Codebeispiele sollten aktuellen Best Practices folgen
- Übersetzungen werden auf Genauigkeit und kulturelle Angemessenheit geprüft

## Übersetzungssystem

### Automatisierte Übersetzung

- Verwendet GitHub Actions mit co-op-translator Workflow
- Übersetzt automatisch in 50+ Sprachen
- Quelldateien in Hauptverzeichnissen
- Übersetzte Dateien in `translations/{language-code}/` Verzeichnissen

### Manuelle Übersetzungsverbesserungen hinzufügen

1. Datei in `translations/{language-code}/` aufrufen
2. Verbesserungen vornehmen, Struktur erhalten
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

## Debuggen und Fehlerbehebung

### Häufige Probleme

**Quiz-App startet nicht**:
- Node.js Version prüfen (v14+ empfohlen)
- `node_modules` und `package-lock.json` löschen, dann `npm install` erneut ausführen
- Prüfe Port-Konflikte (Standard: Vite nutzt Port 5173)

**API Server startet nicht**:
- Stelle sicher, dass Node.js Version >= 10 ist
- Prüfe, ob Port schon belegt ist
- Alle Abhängigkeiten mit `npm install` installiert?

**Browser-Erweiterung lädt nicht**:
- Manifest.json auf korrekte Formatierung prüfen
- Browser-Konsole auf Fehler untersuchen
- Browser-spezifische Installationsanweisungen beachten

**Probleme mit Python Chat-Projekt**:
- OpenAI-Paket installieren: `pip install openai`
- GITHUB_TOKEN Umgebungsvariable gesetzt?
- Zugriffsrechte auf GitHub Models prüfen

**Docsify liefert keine Docs aus**:
- docsify-cli global installieren: `npm install -g docsify-cli`
- Im Root-Verzeichnis des Repositories ausführen
- Prüfe, ob `docs/_sidebar.md` existiert

### Tipps zur Entwicklungsumgebung

- Verwende VS Code mit Live Server Erweiterung für HTML-Projekte
- Installiere ESLint und Prettier Extensions für einheitliches Formatieren
- Nutze Browser DevTools zum Debuggen von JavaScript
- Für Vue Projekte Vue DevTools Browser-Erweiterung installieren

### Performance Überlegungen

- Große Anzahl übersetzter Dateien (50+ Sprachen) macht vollständige Klone groß
- Verwende Shallow Clone, wenn nur Content bearbeitet wird: `git clone --depth 1`
- Übersetzungen bei Arbeit am englischen Content aus Suchergebnissen ausschließen
- Build-Prozesse können beim ersten Lauf langsam sein (npm install, Vite build)

## Sicherheitsüberlegungen

### Umgebungsvariablen

- API-Schlüssel dürfen niemals in das Repository committed werden
- Nutze `.env` Dateien (bereits in `.gitignore`)
- Dokumentiere benötigte Umgebungsvariablen in den README-Dateien der Projekte

### Python Projekte

- Virtuelle Umgebungen verwenden: `python -m venv venv`
- Abhängigkeiten aktuell halten
- GitHub Tokens mit minimalen erforderlichen Rechten nutzen

### GitHub Models Zugriff

- Persönliche Zugangstoken (PAT) für GitHub Models erforderlich
- Tokens als Umgebungsvariablen speichern
- Tokens oder Zugangsdaten niemals commiten

## Weitere Hinweise

### Zielgruppe

- Absolute Anfänger in der Webentwicklung
- Schüler und Selbstlernende
- Lehrer, die das Curriculum im Unterricht einsetzen
- Inhalte sind barrierefrei und bauen Fähigkeiten schrittweise auf

### Pädagogische Philosophie

- Projektbasiertes Lernen
- Häufige Wissensabfragen (Quiz)
- Praktische Programmierübungen
- Praxisnahe Beispiele
- Fokus auf Grundlagen vor Frameworks

### Repository-Wartung

- Aktive Community aus Lernenden und Beitragsleistenden
- Regelmäßige Updates von Abhängigkeiten und Inhalten
- Issues und Diskussionen werden von Maintainers betreut
- Übersetzungsaktualisierungen automatisiert via GitHub Actions

### Verwandte Ressourcen

- [Microsoft Learn Module](https://docs.microsoft.com/learn/)
- [Student Hub Ressourcen](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) empfohlen für Lernende
- Zusätzliche Kurse: Generative AI, Data Science, ML, IoT Curricula verfügbar

### Arbeit mit spezifischen Projekten

Detaillierte Anweisungen zu einzelnen Projekten in den README-Dateien:
- `quiz-app/README.md` - Vue 3 Quiz-Anwendung
- `7-bank-project/README.md` - Banking-Anwendung mit Authentifizierung
- `5-browser-extension/README.md` - Entwicklung von Browser-Erweiterungen
- `6-space-game/README.md` - Canvas-basiertes Weltraumspiel
- `9-chat-project/README.md` - KI-Chat-Assistent Projekt

### Monorepo-Struktur

Obwohl kein traditionelles Monorepo, enthält dieses Repository mehrere unabhängige Projekte:
- Jede Lektion ist eigenständig
- Projekte teilen keine Abhängigkeiten
- Arbeit an einzelnen Projekten ohne Einfluss auf andere möglich
- Komplettes Repo klonen für das vollständige Curriculum-Erlebnis

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Haftungsausschluss**:  
Dieses Dokument wurde mithilfe des KI-Übersetzungsdienstes [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir auf Genauigkeit achten, sollten Sie beachten, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner Ursprungssprache ist als maßgebliche Quelle zu betrachten. Für wichtige Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die durch die Nutzung dieser Übersetzung entstehen.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->