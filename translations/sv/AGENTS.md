# AGENTS.md

## Projektöversikt

Detta är ett utbildningsmaterial för att lära ut grunderna i webbutveckling till nybörjare. Kursplanen är en omfattande 12-veckors kurs utvecklad av Microsoft Cloud Advocates, med 24 praktiska lektioner som täcker JavaScript, CSS och HTML.

### Viktiga komponenter

- **Utbildningsinnehåll**: 24 strukturerade lektioner organiserade i projektbaserade moduler
- **Praktiska projekt**: Terrarium, Skrivarspel, Webbläsartillägg, Rymdspel, Bankapp, Kodredigerare och AI-chattassistent
- **Interaktiva quiz**: 48 quiz med 3 frågor vardera (före/efter lektion)
- **Flerspråkigt stöd**: Automatiserade översättningar till 50+ språk via GitHub Actions
- **Teknologier**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (för AI-projekt)

### Arkitektur

- Utbildningsmaterial med lektionbaserad struktur
- Varje lektionsmapp innehåller README, kodexempel och lösningar
- Självständiga projekt i separata kataloger (quiz-app, olika lektionsprojekt)
- Översättningssystem med GitHub Actions (co-op-translator)
- Dokumentation tillgänglig via Docsify och som PDF

## Installationskommandon

Detta material är främst avsett för att konsumera utbildningsinnehåll. För att arbeta med specifika projekt:

### Huvudrepository-installation

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz-app-installation (Vue 3 + Vite)

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

### Webbläsartilläggsprojekt

```bash
cd 5-browser-extension/solution
npm install
# Follow browser-specific extension loading instructions
```

### Rymdspelsprojekt

```bash
cd 6-space-game/solution
npm install
# Open index.html in browser or use Live Server
```

### Chattprojekt (Python-backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Set GITHUB_TOKEN environment variable
python api.py
```

## Utvecklingsarbetsflöde

### För innehållsbidragare

1. **Forka repositoryt** till ditt GitHub-konto
2. **Klona din fork** lokalt
3. **Skapa en ny gren** för dina ändringar
4. Gör ändringar i lektionsinnehåll eller kodexempel
5. Testa kodändringar i relevanta projektkataloger
6. Skicka pull requests enligt bidragsriktlinjerna

### För elever

1. Forka eller klona repositoryt
2. Navigera till lektionskatalogerna i ordning
3. Läs README-filerna för varje lektion
4. Gör quiz före lektionen på https://ff-quizzes.netlify.app/web/
5. Arbeta igenom kodexempel i lektionsmapparna
6. Slutför uppgifter och utmaningar
7. Gör quiz efter lektionen

### Liveutveckling

- **Dokumentation**: Kör `docsify serve` i root (port 3000)
- **Quiz-app**: Kör `npm run dev` i quiz-app-katalogen
- **Projekt**: Använd VS Code Live Server-tillägg för HTML-projekt
- **API-projekt**: Kör `npm start` i respektive API-kataloger

## Testinstruktioner

### Testning av quiz-app

```bash
cd quiz-app
npm run lint       # Check for code style issues
npm run build      # Verify build succeeds
```

### Testning av bank-API

```bash
cd 7-bank-project/api
npm run lint       # Check for code style issues
node server.js     # Verify server starts without errors
```

### Allmän teststrategi

- Detta är ett utbildningsmaterial utan omfattande automatiserade tester
- Manuell testning fokuserar på:
  - Kodexempel körs utan fel
  - Länkar i dokumentationen fungerar korrekt
  - Projektbyggen slutförs framgångsrikt
  - Exempel följer bästa praxis

### Kontroll före inlämning

- Kör `npm run lint` i kataloger med package.json
- Kontrollera att markdown-länkar är giltiga
- Testa kodexempel i webbläsare eller Node.js
- Kontrollera att översättningar behåller korrekt struktur

## Kodstilriktlinjer

### JavaScript

- Använd modern ES6+ syntax
- Följ standard ESLint-konfigurationer som tillhandahålls i projekten
- Använd meningsfulla variabel- och funktionsnamn för pedagogisk tydlighet
- Lägg till kommentarer som förklarar koncept för elever
- Formatera med Prettier där det är konfigurerat

### HTML/CSS

- Semantiska HTML5-element
- Principer för responsiv design
- Tydliga klassnamnskonventioner
- Kommentarer som förklarar CSS-tekniker för elever

### Python

- PEP 8-stilriktlinjer
- Tydliga, pedagogiska kodexempel
- Typanvisningar där det är hjälpsamt för lärande

### Markdown-dokumentation

- Tydlig rubrikhierarki
- Kodblock med språkspecifikation
- Länkar till ytterligare resurser
- Skärmdumpar och bilder i `images/`-kataloger
- Alt-text för bilder för tillgänglighet

### Filorganisation

- Lektioner numrerade sekventiellt (1-getting-started-lessons, 2-js-basics, etc.)
- Varje projekt har `solution/` och ofta `start/` eller `your-work/`-kataloger
- Bilder lagras i lektionsspecifika `images/`-mappar
- Översättningar i `translations/{language-code}/`-struktur

## Bygg och distribution

### Quiz-app-distribution (Azure Static Web Apps)

Quiz-appen är konfigurerad för distribution via Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Creates dist/ folder
# Deploys via GitHub Actions workflow on push to main
```

Konfiguration för Azure Static Web Apps:
- **App-plats**: `/quiz-app`
- **Utdata-plats**: `dist`
- **Arbetsflöde**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generering av dokumentations-PDF

```bash
npm install                    # Install docsify-to-pdf
npm run convert               # Generate PDF from docs
```

### Docsify-dokumentation

```bash
npm install -g docsify-cli    # Install Docsify globally
docsify serve                 # Serve on localhost:3000
```

### Projekt-specifika byggen

Varje projektkatalog kan ha sin egen byggprocess:
- Vue-projekt: `npm run build` skapar produktionspaket
- Statiska projekt: Ingen byggsteg, servera filer direkt

## Riktlinjer för pull requests

### Titelformat

Använd tydliga, beskrivande titlar som indikerar ändringsområdet:
- `[Quiz-app] Lägg till nytt quiz för lektion X`
- `[Lesson-3] Rätta stavfel i terrarium-projekt`
- `[Translation] Lägg till svensk översättning för lektion 5`
- `[Docs] Uppdatera installationsinstruktioner`

### Obligatoriska kontroller

Innan du skickar en PR:

1. **Kodkvalitet**:
   - Kör `npm run lint` i berörda projektkataloger
   - Åtgärda alla lintningsfel och varningar

2. **Byggverifiering**:
   - Kör `npm run build` om tillämpligt
   - Kontrollera att inga byggfel uppstår

3. **Länkvalidering**:
   - Testa alla markdown-länkar
   - Kontrollera att bildreferenser fungerar

4. **Innehållsgranskning**:
   - Korrekturläs för stavning och grammatik
   - Kontrollera att kodexempel är korrekta och pedagogiska
   - Verifiera att översättningar behåller ursprunglig mening

### Bidragskrav

- Godkänn Microsoft CLA (automatisk kontroll vid första PR)
- Följ [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Se [CONTRIBUTING.md](./CONTRIBUTING.md) för detaljerade riktlinjer
- Referera till ärendenummer i PR-beskrivningen om tillämpligt

### Granskningsprocess

- PRs granskas av underhållare och communityn
- Pedagogisk tydlighet prioriteras
- Kodexempel bör följa aktuella bästa praxis
- Översättningar granskas för noggrannhet och kulturell lämplighet

## Översättningssystem

### Automatiserad översättning

- Använder GitHub Actions med co-op-translator-arbetsflöde
- Översätter automatiskt till 50+ språk
- Källfiler i huvudkataloger
- Översatta filer i `translations/{language-code}/`-kataloger

### Lägga till manuella förbättringar av översättningar

1. Lokalisera filen i `translations/{language-code}/`
2. Gör förbättringar samtidigt som strukturen bevaras
3. Kontrollera att kodexempel förblir funktionella
4. Testa eventuellt lokaliserat quizinnehåll

### Metadata för översättningar

Översatta filer inkluderar metadata-header:
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
- Verifiera att Node.js-versionen uppfyller minimikrav (node >=10)
- Kontrollera om porten redan används
- Säkerställ att alla beroenden är installerade med `npm install`

**Webbläsartillägget laddas inte**:
- Kontrollera att manifest.json är korrekt formaterad
- Kontrollera webbläsarkonsolen för fel
- Följ webbläsarspecifika installationsinstruktioner för tillägg

**Problem med Python-chattprojekt**:
- Säkerställ att OpenAI-paketet är installerat: `pip install openai`
- Verifiera att GITHUB_TOKEN-miljövariabeln är inställd
- Kontrollera GitHub Models åtkomstbehörigheter

**Docsify serverar inte dokumentation**:
- Installera docsify-cli globalt: `npm install -g docsify-cli`
- Kör från repositorys root-katalog
- Kontrollera att `docs/_sidebar.md` finns

### Tips för utvecklingsmiljö

- Använd VS Code med Live Server-tillägg för HTML-projekt
- Installera ESLint och Prettier-tillägg för konsekvent formatering
- Använd webbläsarens utvecklingsverktyg för att felsöka JavaScript
- För Vue-projekt, installera Vue DevTools-webbläsartillägg

### Prestandaöverväganden

- Stort antal översatta filer (50+ språk) innebär att fullständiga kloner är stora
- Använd grundläggande klon om du bara arbetar med innehåll: `git clone --depth 1`
- Exkludera översättningar från sökningar när du arbetar med engelskt innehåll
- Byggprocesser kan vara långsamma vid första körningen (npm install, Vite build)

## Säkerhetsöverväganden

### Miljövariabler

- API-nycklar ska aldrig begås till repositoryt
- Använd `.env`-filer (redan i `.gitignore`)
- Dokumentera nödvändiga miljövariabler i projektens README-filer

### Python-projekt

- Använd virtuella miljöer: `python -m venv venv`
- Håll beroenden uppdaterade
- GitHub-token ska ha minimalt nödvändiga behörigheter

### GitHub Models-åtkomst

- Personliga åtkomsttoken (PAT) krävs för GitHub Models
- Token ska lagras som miljövariabler
- Begå aldrig token eller autentiseringsuppgifter

## Ytterligare anteckningar

### Målgrupp

- Helt nybörjare inom webbutveckling
- Studenter och självlärande
- Lärare som använder kursplanen i klassrum
- Innehållet är utformat för tillgänglighet och gradvis färdighetsbyggande

### Pedagogisk filosofi

- Projektbaserad inlärningsmetod
- Frekventa kunskapskontroller (quiz)
- Praktiska kodövningar
- Exempel på verkliga applikationer
- Fokus på grunder innan ramverk

### Repository-underhåll

- Aktiv community av elever och bidragsgivare
- Regelbundna uppdateringar av beroenden och innehåll
- Ärenden och diskussioner övervakas av underhållare
- Översättningsuppdateringar automatiserade via GitHub Actions

### Relaterade resurser

- [Microsoft Learn-moduler](https://docs.microsoft.com/learn/)
- [Student Hub-resurser](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) rekommenderas för elever
- Ytterligare kurser: Generativ AI, Data Science, ML, IoT-kursplaner tillgängliga

### Arbeta med specifika projekt

För detaljerade instruktioner om individuella projekt, se README-filerna i:
- `quiz-app/README.md` - Vue 3 quiz-applikation
- `7-bank-project/README.md` - Bankapplikation med autentisering
- `5-browser-extension/README.md` - Utveckling av webbläsartillägg
- `6-space-game/README.md` - Canvas-baserad spelutveckling
- `9-chat-project/README.md` - AI-chattassistentprojekt

### Monorepo-struktur

Även om det inte är en traditionell monorepo, innehåller detta repository flera oberoende projekt:
- Varje lektion är självständig
- Projekt delar inte beroenden
- Arbeta med individuella projekt utan att påverka andra
- Klona hela repositoryt för hela kursupplevelsen

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, vänligen notera att automatiska översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess originalspråk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.