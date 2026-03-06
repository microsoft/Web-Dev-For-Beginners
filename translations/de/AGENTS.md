# AGENTS.md

## Projektübersicht

Dies ist ein Bildungs-Curriculum-Repository zum Erlernen der Grundlagen der Webentwicklung für Einsteiger. Das Curriculum ist ein umfassender 12-Wochen-Kurs, der von Microsoft Cloud Advocates entwickelt wurde und 24 praxisorientierte Lektionen zu JavaScript, CSS und HTML umfasst.

### Hauptkomponenten

- **Bildungsinhalte**: 24 strukturierte Lektionen, organisiert in projektbasierten Modulen
- **Praktische Projekte**: Terrarium, Tipp-Spiel, Browser-Erweiterung, Weltraumspiel, Bank-App, Code-Editor und KI-Chat-Assistent
- **Interaktive Quizze**: 48 Quizze mit jeweils 3 Fragen (Vor-/Nach-Lektion-Bewertungen)
- **Mehrsprachige Unterstützung**: Automatisierte Übersetzungen für über 50 Sprachen via GitHub Actions
- **Technologien**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (für KI-Projekte)

### Architektur

- Bildungs-Repository mit lektionenbasierter Struktur
- Jeder Lektionen-Ordner enthält README, Code-Beispiele und Lösungen
- Eigenständige Projekte in separaten Verzeichnissen (quiz-app, verschiedene Lektionenprojekte)
- Übersetzungssystem mit GitHub Actions (co-op-translator)
- Dokumentation bereitgestellt über Docsify und als PDF verfügbar

## Setup-Befehle

Dieses Repository dient hauptsächlich dem Konsum von Bildungsinhalten. Für die Arbeit mit bestimmten Projekten:

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
npm run build      # Für Produktion erstellen
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

### Browser-Erweiterungs-Projekte

```bash
cd 5-browser-extension/solution
npm install
# Befolgen Sie die browserspezifischen Anweisungen zum Laden der Erweiterung
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
# Setze die Umgebungsvariable GITHUB_TOKEN
python api.py
```

## Entwicklungs-Workflow

### Für Inhaltsbeiträge

1. **Forken Sie das Repository** in Ihr GitHub-Konto
2. **Klonen Sie Ihren Fork** lokal
3. **Erstellen Sie einen neuen Branch** für Ihre Änderungen
4. Nehmen Sie Änderungen am Lektionstext oder Codebeispielen vor
5. Testen Sie Codeänderungen in relevanten Projektverzeichnissen
6. Reichen Sie Pull-Requests gemäß den Beitragsrichtlinien ein

### Für Lernende

1. Repository forken oder klonen
2. Navigieren Sie sequentiell durch die Lektionen-Ordner
3. Lesen Sie die README-Dateien für jede Lektion
4. Machen Sie Vor-Lektionen-Quizze unter https://ff-quizzes.netlify.app/web/
5. Arbeiten Sie die Codebeispiele in den Lektionen-Ordnern durch
6. Erledigen Sie Aufgaben und Herausforderungen
7. Nehmen Sie an Nach-Lektionen-Quizzen teil

### Live-Entwicklung

- **Dokumentation**: Führen Sie `docsify serve` im Root-Verzeichnis aus (Port 3000)
- **Quiz-App**: Führen Sie `npm run dev` im quiz-app-Verzeichnis aus
- **Projekte**: Verwenden Sie die VS Code Live Server-Erweiterung für HTML-Projekte
- **API-Projekte**: Führen Sie `npm start` in den jeweiligen API-Verzeichnissen aus

## Testanweisungen

### Quiz-App Testen

```bash
cd quiz-app
npm run lint       # Überprüfen Sie auf Stilprobleme im Code
npm run build      # Stellen Sie sicher, dass der Build erfolgreich ist
```

### Bank-API Testen

```bash
cd 7-bank-project/api
npm run lint       # Überprüfe auf Code-Stilprobleme
node server.js     # Verifiziere, dass der Server ohne Fehler startet
```

### Allgemeiner Testansatz

- Dies ist ein Bildungs-Repository ohne umfassende automatisierte Tests
- Manuelles Testen konzentriert sich auf:
  - Fehlerfreies Ausführen der Codebeispiele
  - Funktionierende Links in der Dokumentation
  - Erfolgreiche Projekt-Builds
  - Einhaltung von Best Practices in den Beispielen

### Prüfungen vor dem Einreichen

- Führen Sie `npm run lint` in Verzeichnissen mit package.json aus
- Überprüfen Sie die Gültigkeit der Markdown-Links
- Testen Sie Codebeispiele im Browser oder Node.js
- Stellen Sie sicher, dass Übersetzungen die Struktur beibehalten

## Code-Stilrichtlinien

### JavaScript

- Verwenden Sie moderne ES6+-Syntax
- Folgen Sie den standardmäßigen ESLint-Konfigurationen in den Projekten
- Verwenden Sie aussagekräftige Variablen- und Funktionsnamen zur besseren Verständlichkeit
- Fügen Sie Kommentare zur Erklärung von Konzepten für Lernende hinzu
- Formatieren Sie mit Prettier, wo konfiguriert

### HTML/CSS

- Semantische HTML5-Elemente
- Prinzipien des responsiven Designs
- Klare Klassennamen-Konventionen
- Kommentare zur Erklärung von CSS-Techniken für Lernende

### Python

- PEP 8 Stilrichtlinien
- Klare, didaktische Codebeispiele
- Typ-Hinweise, wo hilfreich für das Lernen

### Markdown-Dokumentation

- Klare Gliederungshierarchie
- Codeblöcke mit Sprachangabe
- Verlinkung zu weiteren Ressourcen
- Screenshots und Bilder in `images/`-Verzeichnissen
- Alternativtexte für Bilder zur Barrierefreiheit

### Dateiorganisation

- Lektionen fortlaufend nummeriert (1-getting-started-lessons, 2-js-basics usw.)
- Jedes Projekt hat `solution/` und oft `start/` oder `your-work/` Verzeichnisse
- Bilder in lektionenspezifischen `images/`-Ordnern gespeichert
- Übersetzungen in `translations/{language-code}/` Unterordnern

## Build und Deployment

### Quiz-App Deployment (Azure Static Web Apps)

Die quiz-app ist für Azure Static Web Apps Deployment konfiguriert:

```bash
cd quiz-app
npm run build      # Erstellt den Ordner dist/
# Führt die Bereitstellung über den GitHub Actions-Workflow bei Push auf main durch
```

Azure Static Web Apps Konfiguration:
- **App-Standort**: `/quiz-app`
- **Output-Standort**: `dist`
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

Jedes Projektverzeichnis kann seinen eigenen Build-Prozess haben:
- Vue-Projekte: `npm run build` erzeugt Produktions-Bundles
- Statische Projekte: Kein Build-Schritt, Dateien werden direkt bereitgestellt

## Pull-Request-Richtlinien

### Titel-Format

Verwenden Sie klare, beschreibende Titel, die den Änderungsbereich angeben:
- `[Quiz-app] Neues Quiz für Lektion X hinzufügen`
- `[Lesson-3] Tippfehler im Terrarium-Projekt korrigieren`
- `[Translation] Spanische Übersetzung für Lektion 5 hinzufügen`
- `[Docs] Setup-Anweisungen aktualisieren`

### Erforderliche Prüfungen

Vor dem Einreichen eines PR:

1. **Codequalität**:
   - Führen Sie `npm run lint` in den betroffenen Projektverzeichnissen aus
   - Beheben Sie alle Linting-Fehler und Warnungen

2. **Build-Verifikation**:
   - Führen Sie ggf. `npm run build` aus
   - Stellen Sie sicher, dass keine Build-Fehler auftreten

3. **Linkprüfung**:
   - Testen Sie alle Markdown-Links
   - Überprüfen Sie Bildreferenzen

4. **Inhaltsprüfung**:
   - Korrekturlesen auf Rechtschreibung und Grammatik
   - Sicherstellen, dass Codebeispiele korrekt und didaktisch sind
   - Überprüfen, dass Übersetzungen die Originalbedeutung wahren

### Beitragsanforderungen

- Zustimmung zur Microsoft CLA (automatische Prüfung beim ersten PR)
- Befolgung des [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Siehe [CONTRIBUTING.md](./CONTRIBUTING.md) für detaillierte Richtlinien
- Referenzierung von Issue-Nummern in der PR-Beschreibung, falls zutreffend

### Überprüfungsprozess

- PRs werden von Maintainers und Community geprüft
- Didaktische Klarheit hat Priorität
- Codebeispiele sollten den aktuellen Best Practices folgen
- Übersetzungen werden auf Genauigkeit und kulturelle Angemessenheit geprüft

## Übersetzungssystem

### Automatisierte Übersetzung

- Verwendet GitHub Actions mit co-op-translator Workflow
- Übersetzt automatisch in über 50 Sprachen
- Quelldateien in den Hauptverzeichnissen
- Übersetzte Dateien in `translations/{language-code}/` Ordnern

### Manuelle Übersetzungsverbesserungen hinzufügen

1. Datei in `translations/{language-code}/` finden
2. Verbesserungen vornehmen und dabei die Struktur bewahren
3. Sicherstellen, dass Codebeispiele weiterhin funktionieren
4. Eventuell lokalisierte Quiz-Inhalte testen

### Übersetzungs-Metadaten

Übersetzte Dateien enthalten Metadaten-Kopfzeile:
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

## Fehlerbehebung und Problembehandlung

### Häufige Probleme

**Quiz-App startet nicht**:
- Überprüfen der Node.js-Version (v14+ empfohlen)
- Löschen von `node_modules` und `package-lock.json`, danach `npm install` ausführen
- Prüfen auf Port-Konflikte (Standard: Vite verwendet Port 5173)

**API-Server startet nicht**:
- Node.js-Version prüfen (node >=10)
- Prüfen, ob Port bereits belegt ist
- Sicherstellen, dass alle Abhängigkeiten mit `npm install` installiert sind

**Browser-Erweiterung lädt nicht**:
- Manifest.json auf korrekte Formatierung prüfen
- Browser-Konsole auf Fehler überprüfen
- Browser-spezifische Installationsanweisungen beachten

**Probleme mit Python-Chat-Projekt**:
- OpenAI-Paket installiert? `pip install openai`
- Umgebungsvariable GITHUB_TOKEN gesetzt?
- Zugriff auf GitHub-Modelle prüfen

**Docsify liefert keine Dokumentation aus**:
- docsify-cli global installieren: `npm install -g docsify-cli`
- Im Root-Verzeichnis des Repositories ausführen
- Sicherstellen, dass `docs/_sidebar.md` existiert

### Tipps zur Entwicklungsumgebung

- VS Code mit Live Server-Erweiterung für HTML-Projekte verwenden
- ESLint- und Prettier-Erweiterungen für konsistente Formatierung installieren
- Browser-DevTools zum Debuggen von JavaScript nutzen
- Für Vue-Projekte Vue DevTools Browser-Erweiterung installieren

### Performance-Überlegungen

- Große Anzahl übersetzter Dateien (50+ Sprachen) führt zu großen Klonen
- Verwenden Sie ein flaches Klon mit `git clone --depth 1`, wenn nur Inhalte bearbeitet werden
- Übersetzungen bei der Suche ausnehmen, wenn englische Inhalte bearbeitet werden
- Build-Prozesse können beim ersten Lauf langsam sein (npm install, Vite build)

## Sicherheitsüberlegungen

### Umgebungsvariablen

- API-Schlüssel dürfen nie im Repository gespeichert werden
- Verwenden Sie `.env` Dateien (bereits in `.gitignore` enthalten)
- Erforderliche Umgebungsvariablen in den Projekt-READMEs dokumentieren

### Python-Projekte

- Virtuelle Umgebungen verwenden: `python -m venv venv`
- Abhängigkeiten aktuell halten
- GitHub-Tokens sollten nur minimale erforderliche Berechtigungen haben

### Zugriff auf GitHub-Modelle

- Persönliche Zugriffstoken (PAT) werden für GitHub-Modelle benötigt
- Tokens als Umgebungsvariablen speichern
- Nie Tokens oder Anmeldedaten im Repository commiten

## Zusätzliche Hinweise

### Zielgruppe

- Komplettanfänger in der Webentwicklung
- Studierende und Selbstlernende
- Lehrkräfte, die das Curriculum im Unterricht einsetzen
- Inhalte sind auf Zugänglichkeit und schrittweisen Kompetenzaufbau ausgelegt

### Pädagogische Philosophie

- Projektbasiertes Lernen
- Häufige Wissensüberprüfungen (Quizze)
- Praktische Coding-Übungen
- Praxisnahe Beispiele
- Fokus auf Grundlagen vor Frameworks

### Repository-Wartung

- Aktive Community von Lernenden und Beitragenden
- Regelmäßige Updates von Abhängigkeiten und Inhalten
- Issues und Diskussionen werden von Maintainers überwacht
- Übersetzungsupdates automatisiert via GitHub Actions

### Verwandte Ressourcen

- [Microsoft Learn Module](https://docs.microsoft.com/learn/)
- [Student Hub Ressourcen](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) empfohlen für Lernende
- Weitere Kurse: Generative KI, Data Science, ML, IoT Curricula verfügbar

### Arbeiten mit spezifischen Projekten

Für detaillierte Anweisungen zu einzelnen Projekten siehe README-Dateien in:
- `quiz-app/README.md` - Vue 3 Quiz-Anwendung
- `7-bank-project/README.md` - Bankanwendung mit Authentifizierung
- `5-browser-extension/README.md` - Entwicklung von Browser-Erweiterungen
- `6-space-game/README.md` - Canvas-basiertes Spiel
- `9-chat-project/README.md` - KI-Chat-Assistent-Projekt

### Monorepo-Struktur

Obwohl kein traditionelles Monorepo, enthält dieses Repository mehrere unabhängige Projekte:
- Jede Lektion ist eigenständig
- Projekte teilen keine Abhängigkeiten
- Arbeiten Sie an einzelnen Projekten, ohne andere zu beeinflussen
- Klonen Sie das gesamte Repository für die vollständige Curriculum-Erfahrung

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Haftungsausschluss**:
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir nach Genauigkeit streben, beachten Sie bitte, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner Ursprungssprache ist als maßgebliche Quelle anzusehen. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die aus der Nutzung dieser Übersetzung entstehen.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->