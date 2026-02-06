# AGENTS.md

## Projektübersicht

Dies ist ein Bildungs-Curriculum-Repository zum Lehren der Grundlagen der Webentwicklung für Anfänger. Das Curriculum ist ein umfassender 12-Wochen-Kurs, entwickelt von Microsoft Cloud Advocates, mit 24 praxisorientierten Lektionen, die JavaScript, CSS und HTML abdecken.

### Hauptkomponenten

- **Bildungsinhalte**: 24 strukturierte Lektionen, organisiert in projektbasierten Modulen
- **Praktische Projekte**: Terrarium, Tipp-Spiel, Browser-Erweiterung, Weltraumspiel, Banking-App, Code-Editor und KI-Chat-Assistent
- **Interaktive Quizze**: 48 Quizze mit jeweils 3 Fragen (Vor- und Nach-Lektionsbewertungen)
- **Mehrsprachige Unterstützung**: Automatisierte Übersetzungen für 50+ Sprachen über GitHub Actions
- **Technologien**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (für KI-Projekte)

### Architektur

- Bildungsrepository mit lektionbasierter Struktur
- Jeder Lektionen-Ordner enthält README, Codebeispiele und Lösungen
- Eigenständige Projekte in separaten Verzeichnissen (quiz-app, verschiedene Lektionenprojekte)
- Übersetzungssystem mit GitHub Actions (co-op-translator)
- Dokumentation bereitgestellt via Docsify und als PDF verfügbar

## Setup-Befehle

Dieses Repository dient primär dem Konsumieren von Bildungsinhalten. Für das Arbeiten mit spezifischen Projekten:

### Haupt-Repository Setup

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz App Setup (Vue 3 + Vite)

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

### Space Game Projekte

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

## Entwicklungs-Workflow

### Für Inhaltsbeitragende

1. **Repository forken** in dein GitHub-Konto
2. **Fork lokal klonen**
3. **Neuen Branch** für Änderungen erstellen
4. Änderungen an Lektionstexten oder Codebeispielen vornehmen
5. Codeänderungen in relevanten Projektordnern testen
6. Pull Requests gemäß den Beitragsrichtlinien einreichen

### Für Lernende

1. Repository forken oder klonen
2. Lektionen-Ordner nacheinander durchgehen
3. README-Dateien jeder Lektion lesen
4. Pre-Lesson Quizze auf https://ff-quizzes.netlify.app/web/ absolvieren
5. Codebeispiele in Lektionen bearbeiten
6. Aufgaben und Herausforderungen abschließen
7. Post-Lektion Quizze durchführen

### Live-Entwicklung

- **Dokumentation**: `docsify serve` im Root-Verzeichnis ausführen (Port 3000)
- **Quiz-App**: `npm run dev` im quiz-app-Verzeichnis ausführen
- **Projekte**: VS Code Live Server Extension für HTML-Projekte nutzen
- **API-Projekte**: `npm start` in jeweiligen API-Ordnern ausführen

## Testanweisungen

### Quiz App Testen

```bash
cd quiz-app
npm run lint       # Überprüfen Sie auf Stilprobleme im Code
npm run build      # Überprüfen Sie, ob der Build erfolgreich ist
```

### Bank API Testen

```bash
cd 7-bank-project/api
npm run lint       # Überprüfe auf Code-Stilprobleme
node server.js     # Überprüfen, ob der Server ohne Fehler startet
```

### Allgemeiner Testansatz

- Dies ist ein Bildungsrepository ohne umfassende automatisierte Tests
- Manueller Test fokussiert auf:
  - Codebeispiele laufen fehlerfrei
  - Links in Dokumentation funktionieren korrekt
  - Projekt-Builds laufen erfolgreich durch
  - Beispiele folgen Best-Practices

### Vor-Einreichungs-Checks

- `npm run lint` in Verzeichnissen mit package.json ausführen
- Markdown-Links auf Gültigkeit prüfen
- Codebeispiele im Browser oder Node.js testen
- Übersetzungen auf korrekte Struktur prüfen

## Code-Stil-Richtlinien

### JavaScript

- Moderne ES6+ Syntax verwenden
- Standard ESLint-Konfigurationen in Projekten einhalten
- Sinnvolle Variablen- und Funktionsnamen für Bildungszwecke nutzen
- Kommentare zur Erklärung von Konzepten hinzufügen
- Formatierung mit Prettier, wo konfiguriert

### HTML/CSS

- Semantische HTML5-Elemente verwenden
- Responsive Design-Prinzipien beachten
- Klare Klassennamen-Konventionen
- Kommentare zur Erklärung von CSS-Techniken für Lernende

### Python

- PEP 8 Stilrichtlinien einhalten
- Klare, erklärende Codebeispiele
- Type-Hints wo sinnvoll für Lernzwecke

### Markdown-Dokumentation

- Klare Überschriftenhierarchie
- Codeblöcke mit Sprachangabe
- Links zu weiterführenden Ressourcen
- Screenshots und Bilder in `images/` Verzeichnissen
- Alt-Text für Bilder zur Barrierefreiheit

### Dateiorganisation

- Lektionen sequenziell nummeriert (1-getting-started-lessons, 2-js-basics, etc.)
- Jedes Projekt hat `solution/` und oft `start/` oder `your-work/` Verzeichnisse
- Bilder in lektionenspezifischen `images/` Ordnern gespeichert
- Übersetzungen in `translations/{language-code}/` Struktur

## Build und Deployment

### Quiz App Deployment (Azure Static Web Apps)

Die quiz-app ist für das Deployment auf Azure Static Web Apps konfiguriert:

```bash
cd quiz-app
npm run build      # Erstellt den Ordner dist/
# Führt Deployment über GitHub Actions Workflow bei Push auf main durch
```

Azure Static Web Apps Konfiguration:
- **App-Standort**: `/quiz-app`
- **Ausgabestandort**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokumentation PDF-Erstellung

```bash
npm install                    # Installiere docsify-to-pdf
npm run convert               # Generiere PDF aus Docs
```

### Docsify Dokumentation

```bash
npm install -g docsify-cli    # Docsify global installieren
docsify serve                 # Lokalhost:3000 bedienen
```

### Projektspezifische Builds

Jedes Projektverzeichnis kann einen eigenen Build-Prozess haben:
- Vue-Projekte: `npm run build` erzeugt Produktions-Bundles
- Statische Projekte: Kein Build-Schritt, Dateien werden direkt bereitgestellt

## Pull-Request-Richtlinien

### Titelformat

Klare, beschreibende Titel verwenden, die den Änderungsbereich angeben:
- `[Quiz-app] Neues Quiz für Lektion X hinzufügen`
- `[Lesson-3] Tippfehler im Terrarium-Projekt beheben`
- `[Translation] Spanische Übersetzung für Lektion 5 hinzufügen`
- `[Docs] Setup-Anweisungen aktualisieren`

### Erforderliche Prüfungen

Vor dem Einreichen eines PR:

1. **Codequalität**:
   - `npm run lint` in betroffenen Projektordnern ausführen
   - Alle Linting-Fehler und -Warnungen beheben

2. **Build-Verifikation**:
   - `npm run build` ausführen, falls zutreffend
   - Keine Build-Fehler zulassen

3. **Linkprüfung**:
   - Alle Markdown-Links testen
   - Funktionalität der Bildreferenzen prüfen

4. **Inhaltsprüfung**:
   - Rechtschreibung und Grammatik prüfen
   - Codebeispiele auf Korrektheit und pädagogischen Wert kontrollieren
   - Übersetzungen auf Bedeutungstreue überprüfen

### Beitragsanforderungen

- Microsoft CLA zustimmen (automatische Prüfung im ersten PR)
- Microsoft Open Source Code of Conduct einhalten: https://opensource.microsoft.com/codeofconduct/
- Details in [CONTRIBUTING.md](./CONTRIBUTING.md) nachlesen
- Issue-Nummern wenn möglich im PR-Beschreibung referenzieren

### Review-Prozess

- PRs werden von Maintainers und Community überprüft
- Pädagogische Klarheit hat Priorität
- Codebeispiele sollten aktuellen Best Practices folgen
- Übersetzungen auf Genauigkeit und kulturelle Angemessenheit geprüft

## Übersetzungssystem

### Automatisierte Übersetzung

- Nutzt GitHub Actions mit co-op-translator Workflow
- Übersetzt automatisch in 50+ Sprachen
- Quelldateien in Hauptverzeichnissen
- Übersetzte Dateien in `translations/{language-code}/` Verzeichnissen

### Manuelle Verbesserungen hinzufügen

1. Datei in `translations/{language-code}/` finden
2. Verbesserungen vornehmen, Struktur erhalten
3. Sicherstellen, dass Codebeispiele weiterhin funktionieren
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

**Quiz-App startet nicht**:
- Node.js Version prüfen (v14+ empfohlen)
- `node_modules` und `package-lock.json` löschen, `npm install` neu ausführen
- Prüfen auf Port-Konflikte (Standard: Vite nutzt Port 5173)

**API-Server startet nicht**:
- Node.js Version mindestens 10 prüfen
- Prüfen, ob Port bereits belegt ist
- Alle Abhängigkeiten mit `npm install` installieren

**Browser-Erweiterung lädt nicht**:
- Manifest.json korrekt formatiert prüfen
- Browser-Konsole auf Fehler überprüfen
- Browser-spezifische Installationsanweisungen befolgen

**Python Chat-Projekt Probleme**:
- OpenAI-Paket installiert? `pip install openai`
- Umgebungsvariable GITHUB_TOKEN gesetzt?
- Zugriffsrechte für GitHub Modelle prüfen

**Docsify liefert keine Docs**:
- docsify-cli global installieren: `npm install -g docsify-cli`
- Vom Root-Verzeichnis des Repositorys starten
- Sicherstellen, dass `docs/_sidebar.md` existiert

### Tipps für Entwicklungsumgebung

- VS Code mit Live Server Erweiterung für HTML-Projekte verwenden
- ESLint und Prettier Extensions für konsistentes Formatieren installieren
- Browser DevTools zum Debuggen von JavaScript nutzen
- Für Vue Projekte Vue DevTools Browser-Erweiterung verwenden

### Performance Überlegungen

- Große Anzahl übersetzter Dateien (50+ Sprachen) führt zu großen Klonen
- Bei nur Content-Arbeiten shallow clone verwenden: `git clone --depth 1`
- Übersetzungen bei Suche nach englischem Inhalt ausnehmen
- Build-Prozesse können im ersten Lauf langsam sein (npm install, Vite Build)

## Sicherheitsüberlegungen

### Umgebungsvariablen

- API-Schlüssel dürfen niemals ins Repository gelangen
- `.env` Dateien verwenden (bereits in `.gitignore`)
- Benötigte Umgebungsvariablen in Projekt-READMEs dokumentieren

### Python-Projekte

- Virtuelle Umgebungen nutzen: `python -m venv venv`
- Abhängigkeiten aktuell halten
- GitHub Token mit minimal notwendigen Rechten nutzen

### GitHub Modelle Zugriff

- Personal Access Tokens (PAT) für GitHub Modelle erforderlich
- Tokens als Umgebungsvariablen speichern
- Tokens oder Zugangsdaten niemals committen

## Weitere Hinweise

### Zielgruppe

- Komplettanfänger in Webentwicklung
- Studierende und Selbstlernende
- Lehrkräfte, die das Curriculum im Unterricht einsetzen
- Inhalte sind auf Zugänglichkeit und schrittweises Lernen ausgelegt

### Pädagogische Philosophie

- Projektbasierter Lernansatz
- Regelmäßige Wissensabfragen (Quizze)
- Praktische Programmierübungen
- Beispiele aus der Praxis
- Fokus auf Grundlagen vor Frameworks

### Repository Wartung

- Aktive Community von Lernenden und Beitragenden
- Regelmäßige Aktualisierungen von Abhängigkeiten und Inhalten
- Issues und Diskussionen werden von Maintainers überwacht
- Übersetzungsupdates automatisiert via GitHub Actions

### Verwandte Ressourcen

- [Microsoft Learn Module](https://docs.microsoft.com/learn/)
- [Student Hub Ressourcen](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) empfohlen für Lernende
- Weitere Kurse: Generative AI, Data Science, ML, IoT Curricula verfügbar

### Arbeiten mit spezifischen Projekten

Detaillierte Anweisungen zu einzelnen Projekten in den README-Dateien:
- `quiz-app/README.md` - Vue 3 Quiz-Anwendung
- `7-bank-project/README.md` - Banking-Anwendung mit Authentifizierung
- `5-browser-extension/README.md` - Browsererweiterungsentwicklung
- `6-space-game/README.md` - Canvas-basiertes Spiel
- `9-chat-project/README.md` - KI-Chat-Assistent Projekt

### Monorepo-Struktur

Obwohl kein klassisches Monorepo, enthält dieses Repository mehrere unabhängige Projekte:
- Jede Lektion ist eigenständig
- Projekte teilen keine Abhängigkeiten
- Arbeit an einzelnen Projekten ohne Beeinträchtigung anderer
- Gesamtes Repo klonen für komplettes Curriculum-Erlebnis

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Haftungsausschluss**:  
Dieses Dokument wurde mithilfe des KI-Übersetzungsdienstes [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir auf Genauigkeit achten, beachten Sie bitte, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache gilt als maßgebliche Quelle. Für wichtige Informationen wird eine professionelle, menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die durch die Nutzung dieser Übersetzung entstehen.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->