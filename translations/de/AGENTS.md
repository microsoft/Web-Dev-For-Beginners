# AGENTS.md

## Projektübersicht

Dies ist ein Bildungs-Curriculum-Repository zum Erlernen der Grundlagen der Webentwicklung für Anfänger. Das Curriculum ist ein umfassender 12-Wochen-Kurs, der von Microsoft Cloud Advocates entwickelt wurde und 24 praxisorientierte Lektionen zu JavaScript, CSS und HTML umfasst.

### Hauptkomponenten

- **Bildungsinhalte**: 24 strukturierte Lektionen, organisiert in projektbasierten Modulen
- **Praktische Projekte**: Terrarium, Tipp-Spiel, Browser-Erweiterung, Weltraumspiel, Bank-App, Code-Editor und KI-Chat-Assistent
- **Interaktive Quiz**: 48 Quiz mit jeweils 3 Fragen (Vor- und Nach-Lektionsbewertungen)
- **Mehrsprachige Unterstützung**: Automatisierte Übersetzungen für über 50 Sprachen mittels GitHub Actions
- **Technologien**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (für KI-Projekte)

### Architektur

- Bildungs-Repository mit lektionbasierter Struktur
- Jeder Lektionen-Ordner enthält README, Codebeispiele und Lösungen
- Eigenständige Projekte in separaten Verzeichnissen (quiz-app, verschiedene Lektionen-Projekte)
- Übersetzungssystem mit GitHub Actions (co-op-translator)
- Dokumentation bereitgestellt über Docsify und als PDF verfügbar

## Einrichtungsbefehle

Dieses Repository dient hauptsächlich zum Konsum von Bildungsinhalten. Zum Arbeiten mit spezifischen Projekten:

### Einrichtung des Hauptrepositories

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
# Befolgen Sie die browserspezifischen Anweisungen zum Laden von Erweiterungen
```

### Weltraumspiele-Projekte

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

### Für Beitragende von Inhalten

1. **Forke das Repository** in dein GitHub-Konto
2. **Clonse deinen Fork** lokal
3. **Erstelle einen neuen Branch** für deine Änderungen
4. Ändere Lektionstexte oder Codebeispiele
5. Teste Codeänderungen in entsprechenden Projektordnern
6. Reiche Pull Requests ein gemäß Beitragsrichtlinien

### Für Lernende

1. Forke oder clonse das Repository
2. Navigiere nacheinander durch die Lektionen-Ordner
3. Lies die README-Dateien jeder Lektion
4. Mache Vor-Lektions-Quiz unter https://ff-quizzes.netlify.app/web/
5. Bearbeite Codebeispiele in den Lektionen-Ordnern
6. Erledige Aufgaben und Herausforderungen
7. Bearbeite Nach-Lektions-Quiz

### Live-Entwicklung

- **Dokumentation**: Starte `docsify serve` im Root (Port 3000)
- **Quiz-App**: Starte `npm run dev` im quiz-app-Verzeichnis
- **Projekte**: Nutze die VS Code Live Server-Erweiterung für HTML-Projekte
- **API-Projekte**: Starte `npm start` in den jeweiligen API-Verzeichnissen

## Testanweisungen

### Quiz-App Tests

```bash
cd quiz-app
npm run lint       # Auf Probleme im Code-Stil prüfen
npm run build      # Überprüfen, ob der Build erfolgreich ist
```

### Bank-API Tests

```bash
cd 7-bank-project/api
npm run lint       # Überprüfen Sie auf Code-Stil-Probleme
node server.js     # Überprüfen Sie, ob der Server ohne Fehler startet
```

### Allgemeine Testansatz

- Dies ist ein Bildungs-Repository ohne umfassende automatisierte Tests
- Manuelle Tests konzentrieren sich auf:
  - Codebeispiele laufen ohne Fehler
  - Links in der Dokumentation funktionieren korrekt
  - Projekte bauen erfolgreich
  - Beispiele folgen Best Practices

### Vor-Einreichungsprüfungen

- Führe `npm run lint` in Verzeichnissen mit package.json aus
- Überprüfe Markdown-Links auf Gültigkeit
- Teste Codebeispiele im Browser oder Node.js
- Prüfe, ob Übersetzungen die richtige Struktur bewahren

## Code-Stilrichtlinien

### JavaScript

- Verwende moderne ES6+ Syntax
- Folge standardisierten ESLint-Konfigurationen der Projekte
- Nutze aussagekräftige Variablen- und Funktionsnamen für Bildungszwecke
- Füge Kommentare hinzu, die Konzepte für Lernende erklären
- Formatiere mit Prettier, wo konfiguriert

### HTML/CSS

- Semantische HTML5-Elemente
- Responsive Design-Prinzipien
- Klare Klassennamenskonventionen
- Kommentare erklären CSS-Techniken für Lernende

### Python

- PEP 8 Stilrichtlinien
- Klare, bildungsorientierte Codebeispiele
- Type-Hints, wenn hilfreich für das Lernen

### Markdown-Dokumentation

- Klare Überschriftenhierarchie
- Codeblöcke mit Sprachangabe
- Links zu zusätzlichen Ressourcen
- Screenshots und Bilder in `images/` Verzeichnissen
- Alt-Text für Bilder zur Barrierefreiheit

### Datei-Organisation

- Lektionen durchnummeriert (1-getting-started-lessons, 2-js-basics, etc.)
- Jedes Projekt hat `solution/` und oft auch `start/` oder `your-work/` Verzeichnisse
- Bilder im lektionenspezifischen `images/` Ordner
- Übersetzungen in der Struktur `translations/{language-code}/`

## Build und Deployment

### Quiz-App Deployment (Azure Static Web Apps)

Die quiz-app ist für Azure Static Web Apps Deployment konfiguriert:

```bash
cd quiz-app
npm run build      # Erstellt den dist/-Ordner
# Führt die Bereitstellung über den GitHub Actions Workflow bei Push auf main durch
```

Azure Static Web Apps Konfiguration:
- **App Standort**: `/quiz-app`
- **Ausgabeort**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### PDF Generierung der Dokumentation

```bash
npm install                    # Installiere docsify-to-pdf
npm run convert               # Erzeuge PDF aus docs
```

### Docsify Dokumentation

```bash
npm install -g docsify-cli    # Installiere Docsify global
docsify serve                 # Diene auf localhost:3000
```

### Projektspezifische Builds

Jeder Projektordner kann einen eigenen Build-Prozess haben:
- Vue Projekte: `npm run build` erstellt Produktions-Bundles
- Statische Projekte: Kein Build-Schritt, Dateien direkt ausliefern

## Pull Request Richtlinien

### Titel-Format

Verwende klare, beschreibende Titel, die den Änderungsbereich angeben:
- `[Quiz-app] Neues Quiz für Lektion X hinzufügen`
- `[Lesson-3] Tippfehler im Terrarium-Projekt beheben`
- `[Translation] Spanische Übersetzung für Lektion 5 hinzufügen`
- `[Docs] Setup-Anleitungen aktualisieren`

### Erforderliche Prüfungen

Vor Einreichung eines PR:

1. **Codequalität**:
   - Führe `npm run lint` in betroffenen Projektverzeichnissen aus
   - Behebe alle Lint-Fehler und -Warnungen

2. **Build-Verifizierung**:
   - Führe `npm run build` aus, falls zutreffend
   - Stelle sicher, dass keine Build-Fehler auftreten

3. **Linkvalidierung**:
   - Teste alle Markdown-Links
   - Überprüfe Bildreferenzen

4. **Inhaltsprüfung**:
   - Korrekturlesen auf Rechtschreibung und Grammatik
   - Überprüfe, dass Codebeispiele korrekt und lehrreich sind
   - Verifiziere, dass Übersetzungen den ursprünglichen Sinn bewahren

### Beitragende Voraussetzungen

- Zustimmung zur Microsoft CLA (automatische Prüfung beim ersten PR)
- Befolge den [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Siehe [CONTRIBUTING.md](./CONTRIBUTING.md) für detaillierte Richtlinien
- Referenziere Issue-Nummern in der PR-Beschreibung, falls zutreffend

### Prüfprozess

- PRs werden von Maintainers und Community geprüft
- Bildungsinhalte werden priorisiert
- Codebeispiele sollten aktuellen Best Practices folgen
- Übersetzungen werden auf Genauigkeit und kulturelle Angemessenheit geprüft

## Übersetzungssystem

### Automatisierte Übersetzung

- Nutzt GitHub Actions mit co-op-translator Workflow
- Übersetzt automatisch in über 50 Sprachen
- Quelldateien in Hauptverzeichnissen
- Übersetzte Dateien in `translations/{language-code}/` Verzeichnissen

### Manuelle Übersetzungsverbesserungen hinzufügen

1. Datei in `translations/{language-code}/` finden
2. Verbesserungen vornehmen unter Erhaltung der Struktur
3. Sicherstellen, dass Codebeispiele weiterhin funktionieren
4. Lokale Quiz-Inhalte testen

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
- `node_modules` und `package-lock.json` löschen, `npm install` neu ausführen
- Port-Konflikte prüfen (Standard: Vite verwendet Port 5173)

**API-Server startet nicht**:
- Node.js Version >= 10 sicherstellen
- Prüfen, ob Port bereits in Benutzung ist
- Alle Abhängigkeiten mit `npm install` installieren

**Browser-Erweiterung lädt nicht**:
- Manifest.json auf korrekte Formatierung prüfen
- Browser-Konsole auf Fehler überprüfen
- Browser-spezifische Installationsanleitungen befolgen

**Probleme beim Python-Chat-Projekt**:
- OpenAI-Paket installiert? `pip install openai`
- GITHUB_TOKEN Umgebungsvariable gesetzt?
- Zugriff auf GitHub Models überprüfen

**Docsify liefert keine Dokumente aus**:
- docsify-cli global installieren: `npm install -g docsify-cli`
- Aus dem Root-Verzeichnis des Repositories starten
- Prüfen, ob `docs/_sidebar.md` vorhanden ist

### Tipps zur Entwicklungsumgebung

- VS Code mit Live Server Erweiterung für HTML-Projekte nutzen
- ESLint und Prettier Erweiterungen für konsistente Formatierung installieren
- Browser DevTools zur JavaScript-Fehlersuche verwenden
- Für Vue-Projekte Vue DevTools Browser-Erweiterung installieren

### Performance-Überlegungen

- Große Anzahl an übersetzten Dateien (50+ Sprachen) führt zu großen Klonen
- Für Arbeit nur an Inhalten: flaches Klonen mit `git clone --depth 1`
- Übersetzungen bei Suche ausschließen, wenn nur Englisch nötig
- Buildvorgänge können beim ersten Lauf langsam sein (npm install, Vite Build)

## Sicherheitsüberlegungen

### Umgebungsvariablen

- API-Schlüssel dürfen niemals im Repository abgelegt werden
- `.env` Dateien verwenden (sind in `.gitignore`)
- Erforderliche Umgebungsvariablen in den Projekt-READMEs dokumentieren

### Python-Projekte

- Virtuelle Umgebungen verwenden: `python -m venv venv`
- Abhängigkeiten aktuell halten
- GitHub-Token mit minimal erforderlichen Berechtigungen verwenden

### Zugriff auf GitHub Models

- Personal Access Tokens (PAT) sind erforderlich
- Tokens als Umgebungsvariablen speichern
- Niemals Tokens oder Zugangsdaten commiten

## Zusätzliche Hinweise

### Zielgruppe

- Absolute Anfänger in der Webentwicklung
- Studierende und Selbstlerner
- Lehrkräfte, die das Curriculum im Unterricht verwenden
- Inhalt ist barrierefrei gestaltet und fördert schrittweises Lernen

### Bildungsphilosophie

- Projektbasiertes Lernen
- Häufige Wissensüberprüfungen (Quizzes)
- Praktische Programmierübungen
- Praxisnahe Anwendungsbeispiele
- Fokus auf Grundlagen vor Frameworks

### Repository-Wartung

- Aktive Community von Lernenden und Beitragenden
- Regelmäßige Updates von Abhängigkeiten und Inhalten
- Issues und Diskussionen werden von Maintainers betreut
- Übersetzungen werden automatisiert über GitHub Actions aktualisiert

### Verwandte Ressourcen

- [Microsoft Learn Module](https://docs.microsoft.com/learn/)
- [Student Hub Ressourcen](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) empfohlen für Lernende
- Weitere Kurse: Generative AI, Data Science, ML, IoT Curricula verfügbar

### Arbeiten mit spezifischen Projekten

Für detaillierte Anleitungen zu einzelnen Projekten siehe README-Dateien in:
- `quiz-app/README.md` - Vue 3 Quiz-Anwendung
- `7-bank-project/README.md` - Bankanwendung mit Authentifizierung
- `5-browser-extension/README.md` - Entwicklung von Browser-Erweiterungen
- `6-space-game/README.md` - Spielentwicklung mit Canvas
- `9-chat-project/README.md` - KI Chat-Assistent Projekt

### Monorepo-Struktur

Obwohl kein klassisches Monorepo, enthält dieses Repository mehrere unabhängige Projekte:
- Jede Lektion ist eigenständig
- Projekte teilen keine Abhängigkeiten
- Arbeit an einzelnen Projekten ohne Beeinträchtigung anderer möglich
- Komplettes Repository klonen für das volle Curriculum-Erlebnis

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Haftungsausschluss**:
Dieses Dokument wurde mithilfe des KI-Übersetzungsdienstes [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, bitten wir zu beachten, dass automatische Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache gilt als maßgebliche Quelle. Für wichtige Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die aus der Nutzung dieser Übersetzung entstehen.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->