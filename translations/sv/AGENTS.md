# AGENTS.md

## Projektöversikt

Detta är ett utbildningsprogram för att lära ut grunderna i webbutveckling för nybörjare. Kursplanen är en omfattande 12-veckors kurs utvecklad av Microsoft Cloud Advocates, med 24 praktiska lektioner som täcker JavaScript, CSS och HTML.

### Huvudkomponenter

- **Utbildningsinnehåll**: 24 strukturerade lektioner organiserade i projektbaserade moduler
- **Praktiska projekt**: Terrarium, Typningsspel, Browser Extension, Rymdspel, Bankapp, Kodeditor och AI-chattassistent
- **Interaktiva quiz**: 48 quiz med 3 frågor vardera (före/efter lektionstest)
- **Fler språkstöd**: Automatiska översättningar till 50+ språk via GitHub Actions
- **Teknologier**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (för AI-projekt)

### Arkitektur

- Utbildningsförråd med lektionsbaserad struktur
- Varje lektionsmapp innehåller README, kodexempel och lösningar
- Fristående projekt i separata kataloger (quiz-app, olika lektionsprojekt)
- Översättningssystem med GitHub Actions (co-op-translator)
- Dokumentation serveras via Docsify och finns som PDF

## Setup-kommandon

Detta förråd är främst för utbildningsinnehållskonsumtion. För arbete med specifika projekt:

### Huvudförrådets installation

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz App Setup (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Starta utvecklingsserver
npm run build      # Bygg för produktion
npm run lint       # Kör ESLint
```

### Bankprojekt API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Starta API-server
npm run lint       # Kör ESLint
npm run format     # Formatera med Prettier
```

### Browser Extension-projekt

```bash
cd 5-browser-extension/solution
npm install
# Följ webbläsarspecifika instruktioner för att ladda tillägg
```

### Rymdspel-projekt

```bash
cd 6-space-game/solution
npm install
# Öppna index.html i webbläsaren eller använd Live Server
```

### Chattprojekt (Python backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Sätt miljövariabeln GITHUB_TOKEN
python api.py
```

## Utvecklingsarbetsflöde

### För innehållsbidragsgivare

1. **Fork:a förrådet** till ditt GitHub-konto
2. **Klona din fork** lokalt
3. **Skapa en ny branch** för dina ändringar
4. Gör ändringar i lektionsinnehåll eller kodexempel
5. Testa eventuella kodändringar i relevanta projektmappar
6. Skicka in pull-requests enligt riktlinjer för bidrag

### För elever

1. Fork:a eller klona förrådet
2. Navigera till lektionsmapparna i ordning
3. Läs README-filer för varje lektion
4. Gör för-lektionsquiz på https://ff-quizzes.netlify.app/web/
5. Arbeta igenom kodexempel i lektionsmapparna
6. Slutför uppgifter och utmaningar
7. Gör efter-lektionsquiz

### Liveutveckling

- **Dokumentation**: Kör `docsify serve` i root (port 3000)
- **Quiz App**: Kör `npm run dev` i quiz-app-mappen
- **Projekt**: Använd VS Codes Live Server-tillägg för HTML-projekt
- **API-projekt**: Kör `npm start` i respektive API-katalog

## Testinstruktioner

### Test av Quiz App

```bash
cd quiz-app
npm run lint       # Kontrollera efter kodstilproblem
npm run build      # Verifiera att bygget lyckas
```

### Test av Bank API

```bash
cd 7-bank-project/api
npm run lint       # Kontrollera kodstilproblem
node server.js     # Verifiera att servern startar utan fel
```

### Allmän testmetod

- Detta är ett utbildningsförråd utan omfattande automatiserade tester
- Manuell testning fokuserar på:
  - Kodexempel körs utan fel
  - Länkar i dokumentationen fungerar korrekt
  - Projekt bygger klart utan fel
  - Exempel följer bästa praxis

### Kontroll före inskick

- Kör `npm run lint` i mappar med package.json
- Kontrollera att markdown-länkar är giltiga
- Testa kodexempel i webbläsare eller Node.js
- Kontrollera att översättningar bibehåller korrekt struktur

## Kodstilriktlinjer

### JavaScript

- Använd modern ES6+ syntax
- Följ standard ESLint-konfigurationer i projekten
- Använd meningsfulla variabel- och funktionsnamn för utbildningsklarhet
- Lägg till kommentarer som förklarar koncept för elever
- Formatera med Prettier där det är konfigurerat

### HTML/CSS

- Semantiska HTML5-element
- Responsiv designprinciper
- Tydliga namngivningskonventioner för klasser
- Kommentarer som förklarar CSS-tekniker för elever

### Python

- PEP 8 kodstilriktlinjer
- Tydliga, utbildande kodexempel
- Typangivelser där det är hjälpsamt för lärande

### Markdown-dokumentation

- Tydlig rubrikhierarki
- Kodblock med språkangivelse
- Länkar till ytterligare resurser
- Skärmdumpar och bilder i `images/`-mappar
- Alt-text på bilder för tillgänglighet

### Filorganisation

- Lektioner numrerade i följd (1-getting-started-lessons, 2-js-basics, osv.)
- Varje projekt har `solution/` och ofta `start/` eller `your-work/` mappar
- Bilder lagras i lektionsspecifika `images/`-mappar
- Översättningar i `translations/{language-code}/`-struktur

## Bygg och distribution

### Quiz App-distribution (Azure Static Web Apps)

Quiz-appen är konfigurerad för distribution till Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Skapar dist/ mapp
# Distribuerar via GitHub Actions arbetsflöde vid push till main
```

Azure Static Web Apps-konfiguration:
- **App-läge**: `/quiz-app`
- **Utmatningsplats**: `dist`
- **Arbetsflöde**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generering av PDF för dokumentation

```bash
npm install                    # Installera docsify-to-pdf
npm run convert               # Generera PDF från docs
```

### Docsify-dokumentation

```bash
npm install -g docsify-cli    # Installera Docsify globalt
docsify serve                 # Servera på localhost:3000
```

### Projektsspecifika byggsteg

Varje projektkatalog kan ha egen byggprocess:
- Vue-projekt: `npm run build` skapar produktionsbundlar
- Statiska projekt: Ingen byggsteg, filer serveras direkt

## Pull request-riktlinjer

### Titelformat

Använd tydliga, beskrivande titlar som anger ändringsområde:
- `[Quiz-app] Lägg till nytt quiz för lektion X`
- `[Lesson-3] Rätta stavfel i terrarium-projektet`
- `[Translation] Lägg till spansk översättning för lektion 5`
- `[Docs] Uppdatera installationsinstruktioner`

### Obligatoriska kontroller

Innan PR skickas in:

1. **Kodkvalitet**:
   - Kör `npm run lint` i påverkade projektmappar
   - Åtgärda alla lint-fel och varningar

2. **Byggverifiering**:
   - Kör `npm run build` om tillämpligt
   - Säkerställ inga byggfel

3. **Länkvalidering**:
   - Testa alla markdown-länkar
   - Verifiera att bildreferenser fungerar

4. **Innehållsgranskning**:
   - Korrekturläs för stavning och grammatik
   - Säkerställ att kodexempel är korrekta och pedagogiska
   - Kontrollera att översättningar bibehåller ursprunglig mening

### Krav på bidrag

- Godkänn Microsoft CLA (automatisk kontroll vid första PR)
- Följ [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Se [CONTRIBUTING.md](./CONTRIBUTING.md) för detaljerade riktlinjer
- Referera ärendenummer i PR-beskrivning vid behov

### Granskningsprocess

- PR granskas av underhållare och gemenskap
- Pedagogisk tydlighet prioriteras
- Kodexempel bör följa aktuell bästa praxis
- Översättningar granskas för korrekthet och kulturell lämplighet

## Översättningssystem

### Automatisk översättning

- Använder GitHub Actions med co-op-translator-arbetsflöde
- Översätter till 50+ språk automatiskt
- Källfiler i huvudkataloger
- Översatta filer i `translations/{language-code}/` kataloger

### Lägga till manuella förbättringar av översättningar

1. Lokalisera fil i `translations/{language-code}/`
2. Gör förbättringar utan att ändra struktur
3. Säkerställ att kodexempel förblir fungerande
4. Testa eventuellt lokaliserat quiz-innehåll

### Översättningsmetadata

Översatta filer innehåller metadata-header:
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

## Felsökning och problemlösning

### Vanliga problem

**Quiz-appen startar inte**:
- Kontrollera Node.js-version (v14+ rekommenderas)
- Ta bort `node_modules` och `package-lock.json`, kör `npm install` igen
- Kontrollera portkonflikter (standard: Vite använder port 5173)

**API-servern startar inte**:
- Kontrollera att Node.js-versionen uppfyller minimikrav (node >=10)
- Kontrollera om port redan används
- Säkerställ att alla beroenden installerats med `npm install`

**Browser extension laddas inte**:
- Kontrollera att manifest.json är korrekt formaterad
- Kontrollera webbläsarkonsolen för fel
- Följ webbläsarspecifika instruktioner för tilläggsinstallation

**Problem med Python chattprojekt**:
- Säkerställ att OpenAI-paketet är installerat: `pip install openai`
- Kontrollera att miljövariabeln GITHUB_TOKEN är satt
- Granska GitHub Models-accessbehörigheter

**Docsify serverar inte dokumentation**:
- Installera docsify-cli globalt: `npm install -g docsify-cli`
- Kör från förrådets rotkatalog
- Kontrollera att `docs/_sidebar.md` finns

### Utvecklingsmiljötips

- Använd VS Code med Live Server-tillägg för HTML-projekt
- Installera ESLint och Prettier-tillägg för konsekvent formatering
- Använd webbläsarens DevTools för att felsöka JavaScript
- För Vue-projekt, installera Vue DevTools webbläsartillägg

### Prestandahänsyn

- Stort antal översatta filer (50+ språk) gör fulla kloningar stora
- Använd shallow clone om du bara arbetar med innehåll: `git clone --depth 1`
- Exkludera översättningar från sökningar när du arbetar på engelskt innehåll
- Byggprocesser kan vara långsamma första gången (npm install, Vite build)

## Säkerhetshänsyn

### Miljövariabler

- API-nycklar ska aldrig committas till förrådet
- Använd `.env`-filer (redan i `.gitignore`)
- Dokumentera nödvändiga miljövariabler i projekts README-filer

### Python-projekt

- Använd virtuella miljöer: `python -m venv venv`
- Håll beroenden uppdaterade
- GitHub-token ska ha minsta nödvändiga behörigheter

### GitHub Models-access

- Personliga åtkomsttoken (PAT) krävs för GitHub Models
- Token ska lagras som miljövariabler
- Committa aldrig token eller användaruppgifter

## Ytterligare anteckningar

### Målgrupp

- Helt nybörjare inom webbutveckling
- Studenter och självstudenter
- Lärare som använder kursplanen i klassrum
- Innehållet är utformat för tillgänglighet och gradvis kompetensuppbyggnad

### Utbildningsfilosofi

- Projektbaserat lärande
- Frekventa kunskapskontroller (quiz)
- Praktiska kodningsövningar
- Exempel med verkliga tillämpningar
- Fokus på grunder innan ramverk

### Förrådsunderhåll

- Aktiv gemenskap av elever och bidragsgivare
- Regelbundna uppdateringar av beroenden och innehåll
- Ärenden och diskussioner övervakas av underhållare
- Översättningsuppdateringar automatiserade via GitHub Actions

### Relaterade resurser

- [Microsoft Learn-moduler](https://docs.microsoft.com/learn/)
- [Student Hub-resurser](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) rekommenderas för elever
- Ytterligare kurser: Generativ AI, Data Science, ML, IoT kursplaner finns tillgängliga

### Arbeta med specifika projekt

För detaljerade instruktioner om enskilda projekt, se README-filer i:
- `quiz-app/README.md` - Vue 3 quiz-applikation
- `7-bank-project/README.md` - Bankapplikation med autentisering
- `5-browser-extension/README.md` - Utveckling av webbläsartillägg
- `6-space-game/README.md` - Canvasbaserat spelutveckling
- `9-chat-project/README.md` - AI-chattassistentprojekt

### Monorepo-struktur

Även om detta inte är ett traditionellt monorepo innehåller förrådet flera oberoende projekt:
- Varje lektion är självständig
- Projekten delar inte beroenden
- Arbeta med individuella projekt utan att påverka andra
- Klona hela förrådet för hela kursplanen upplevelse

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör du vara medveten om att automatiska översättningar kan innehålla fel eller brister. Det ursprungliga dokumentet på dess modersmål bör anses vara den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för några missförstånd eller feltolkningar som uppstår från användningen av denna översättning.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->