# AGENTS.md

## Projektöversikt

Detta är ett utbildningscurriculum-repository för att undervisa grundläggande webbutveckling för nybörjare. Curriculumet är en omfattande 12-veckors kurs utvecklad av Microsoft Cloud Advocates, med 24 praktiska lektioner som täcker JavaScript, CSS och HTML.

### Viktiga komponenter

- **Utbildningsinnehåll**: 24 strukturerade lektioner organiserade i projektbaserade moduler
- **Praktiska projekt**: Terrarium, Typningsspel, Webbläsartillägg, Rymdspel, Bankapp, Kodredigerare och AI-chattassistent
- **Interaktiva quiz**: 48 quiz med 3 frågor vardera (före/efter lektion)
- **Fler språkstöd**: Automatiska översättningar till 50+ språk via GitHub Actions
- **Teknologier**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (för AI-projekt)

### Arkitektur

- Utbildningsrepository med lektionbaserad struktur
- Varje lektionsmapp innehåller README, kodexempel och lösningar
- Fristående projekt i separata kataloger (quiz-app, olika lektionsprojekt)
- Översättningssystem med GitHub Actions (co-op-translator)
- Dokumentation serveras via Docsify och finns som PDF

## Installationskommandon

Detta repository är huvudsakligen för konsumtion av utbildningsinnehåll. För arbete med specifika projekt:

### Huvudrepository Setup

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

### Webbläsartilläggsprojekt

```bash
cd 5-browser-extension/solution
npm install
# Följ webbläsarspecifika instruktioner för att ladda tillägg
```

### Rymdspelsprojekt

```bash
cd 6-space-game/solution
npm install
# Öppna index.html i webbläsaren eller använd Live Server
```

### Chattprojekt (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Ställ in miljövariabeln GITHUB_TOKEN
python api.py
```

## Utvecklingsarbetsflöde

### För innehållsbidragare

1. **Gaffla repositoryt** till ditt GitHub-konto
2. **Klona din gaffel** lokalt
3. **Skapa en ny branch** för dina ändringar
4. Gör ändringar i lektionsinnehåll eller kodexempel
5. Testa eventuella kodändringar i relevanta projektkataloger
6. Skicka pull requests enligt riktlinjer för bidrag

### För elever

1. Gaffla eller klona repositoryt
2. Navigera sekventiellt till lektionskatalogerna
3. Läs README-filer för varje lektion
4. Gör förlektion-quiz på https://ff-quizzes.netlify.app/web/
5. Arbeta med kodexempel i lektionsmapparna
6. Slutför uppgifter och utmaningar
7. Gör efterlektion-quiz

### Livsutveckling

- **Dokumentation**: Kör `docsify serve` i root (port 3000)
- **Quiz App**: Kör `npm run dev` i quiz-app-mappen
- **Projekt**: Använd VS Code Live Server-extension för HTML-projekt
- **API-projekt**: Kör `npm start` i respektive API-kataloger

## Testinstruktioner

### Quiz App-testning

```bash
cd quiz-app
npm run lint       # Kontrollera kodstilproblem
npm run build      # Verifiera att byggnaden lyckas
```

### Bank API-testning

```bash
cd 7-bank-project/api
npm run lint       # Kontrollera kodstilproblem
node server.js     # Verifiera att servern startar utan fel
```

### Allmän testmetod

- Detta är ett utbildningsrepository utan omfattande automatiserade tester
- Manuell testning fokuserar på:
  - Kodexempel körs utan fel
  - Länkar i dokumentationen fungerar korrekt
  - Projekt bygger klart utan fel
  - Exempel följer bästa praxis

### Kontroll före inskickning

- Kör `npm run lint` i kataloger med package.json
- Verifiera att alla markdownlänkar är giltiga
- Testa kodexempel i webbläsare eller Node.js
- Kontrollera att översättningar bibehåller korrekt struktur

## Kodstilriktlinjer

### JavaScript

- Använd modern ES6+-syntax
- Följ standard ESLint-konfigurationer i projekten
- Använd meningsfulla variabel- och funktionsnamn för utbildningsklarhet
- Lägg till kommentarer som förklarar koncept för elever
- Formatera med Prettier där det är konfigurerat

### HTML/CSS

- Semantiska HTML5-element
- Responsiva designprinciper
- Tydliga klassnamngivningskonventioner
- Kommentarer som förklarar CSS-tekniker för elever

### Python

- PEP 8-stilriktlinjer
- Tydliga, pedagogiska kodexempel
- Typanvisningar där det är hjälpsamt för lärandet

### Markdown-dokumentation

- Tydlig rubrikhierarki
- Kodblock med språkspecifikation
- Länkar till ytterligare resurser
- Skärmdumpar och bilder i `images/`-mappar
- Alt-text för bilder för tillgänglighet

### Filorganisation

- Lektioner numrerade sekventiellt (1-getting-started-lessons, 2-js-basics, etc.)
- Varje projekt har `solution/` och ofta `start/` eller `your-work/` kataloger
- Bilder lagras i lektionsspecifika `images/`-mappar
- Översättningar i `translations/{language-code}/` struktur

## Bygg och distribution

### Quiz App Distribution (Azure Static Web Apps)

Quiz-appen är konfigurerad för Azure Static Web Apps-distribution:

```bash
cd quiz-app
npm run build      # Skapar mappen dist/
# Distribuerar via GitHub Actions-arbetsflöde vid push till main
```

Azure Static Web Apps-konfiguration:
- **App-läge**: `/quiz-app`
- **Utmatningsplats**: `dist`
- **Arbetsflöde**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokumentations-PDF-generering

```bash
npm install                    # Installera docsify-to-pdf
npm run convert               # Generera PDF från docs
```

### Docsify-dokumentation

```bash
npm install -g docsify-cli    # Installera Docsify globalt
docsify serve                 # Servera på localhost:3000
```

### Projektspecifika byggprocesser

Varje projektkatalog kan ha egen byggprocess:
- Vue-projekt: `npm run build` skapar produktionspaket
- Statisk projekt: Ingen byggsteg, servera filer direkt

## Pull Request-riktlinjer

### Titelformat

Använd tydliga, beskrivande titlar som anger ändringsområde:
- `[Quiz-app] Lägg till nytt quiz för lektion X`
- `[Lesson-3] Rätta stavfel i terrariumprojekt`
- `[Translation] Lägg till spansk översättning för lektion 5`
- `[Docs] Uppdatera installationsinstruktioner`

### Obligatoriska kontroller

Innan PR skickas in:

1. **Kodkvalitet**:
   - Kör `npm run lint` i berörda projektkataloger
   - Fixa alla lint-fel och varningar

2. **Byggverifiering**:
   - Kör `npm run build` om tillämpligt
   - Säkerställ inga byggfel

3. **Länkverifiering**:
   - Testa alla markdownlänkar
   - Kontrollera att bildreferenser fungerar

4. **Innehållsgranskning**:
   - Korrekturläs för stavning och grammatik
   - Säkerställ att kodexempel är korrekta och pedagogiska
   - Verifiera att översättningar bevarar ursprungligt innehåll

### Krav på bidrag

- Godkänn Microsoft CLA (automatiskt vid första PR)
- Följ [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Se [CONTRIBUTING.md](./CONTRIBUTING.md) för detaljerade riktlinjer
- Referera ärendenummer i PR-beskrivning om tillämpligt

### Granskningsprocess

- PR granskas av underhållare och community
- Utbildningsklarhet prioriteras
- Kodexempel ska följa aktuella bästa praxis
- Översättningar granskas för korrekthet och kulturell lämplighet

## Översättningssystem

### Automatisk översättning

- Använder GitHub Actions med co-op-translator workflow
- Översätter automatiskt till 50+ språk
- Källfiler i huvudkataloger
- Översatta filer i `translations/{language-code}/` kataloger

### Lägga till manuella förbättringar

1. Lokalisera fil i `translations/{language-code}/`
2. Gör förbättringar samtidigt som struktur bevaras
3. Säkerställ att kodexempel förblir fungerande
4. Testa eventuell lokaliserad quiz-innehåll

### Översättningsmetadata

Översatta filer inkluderar metadataheader:
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

## Felsökning och Problemlösning

### Vanliga problem

**Quiz app startar inte**:
- Kontrollera Node.js-version (v14+ rekommenderas)
- Ta bort `node_modules` och `package-lock.json`, kör `npm install` igen
- Kontrollera portkonflikter (default: Vite använder port 5173)

**API-server startar inte**:
- Kontrollera Node.js-version uppfyller miniminivå (node >=10)
- Kontrollera att port ej används av annat
- Säkerställ att alla beroenden är installerade med `npm install`

**Webbläsartillägg laddas inte**:
- Kontrollera att manifest.json är korrekt formaterad
- Kolla webbläsarkonsolen för fel
- Följ webbläsarspecifika installationsinstruktioner

**Problem med Python chat-projekt**:
- Säkerställ att OpenAI-paket är installerat: `pip install openai`
- Verifiera att GITHUB_TOKEN miljövariabel är satt
- Kontrollera GitHub Models-åtkomstbehörigheter

**Docsify serverar inte dokumentation**:
- Installera docsify-cli globalt: `npm install -g docsify-cli`
- Kör från repositoryts rotkatalog
- Kontrollera att `docs/_sidebar.md` finns

### Utvecklingsmiljötips

- Använd VS Code med Live Server-extension för HTML-projekt
- Installera ESLint- och Prettier-extensions för konsekvent formatering
- Använd webbläsarens DevTools för JavaScript-felsökning
- För Vue-projekt, installera Vue DevTools-webbläsartillägg

### Prestandabetraktelser

- Stort antal översatta filer (50+ språk) gör hela klon stora
- Använd shallow clone om du bara jobbar med innehåll: `git clone --depth 1`
- Exkludera översättningar från sökningar vid arbete med engelskt innehåll
- Byggprocesser kan vara långsamma vid första körning (npm install, Vite build)

## Säkerhetshänsyn

### Miljövariabler

- API-nycklar ska aldrig committas till repository
- Använd `.env`-filer (redan i `.gitignore`)
- Dokumentera nödvändiga miljövariabler i projektens README-filer

### Python-projekt

- Använd virtuella miljöer: `python -m venv venv`
- Håll beroenden uppdaterade
- GitHub-token bör ha minimala nödvändiga behörigheter

### GitHub Models-åtkomst

- Personliga access tokens (PAT) krävs för GitHub Models
- Tokens ska sparas som miljövariabler
- Commita aldrig tokens eller autentiseringsuppgifter

## Ytterligare anmärkningar

### Målgrupp

- Kompletta nybörjare inom webbutveckling
- Studenter och självstudenter
- Lärare som använder curriculum i klassrum
- Innehållet är utformat för tillgänglighet och gradvis färdighetsträning

### Pedagogisk filosofi

- Projektbaserat lärande
- Frekventa kunskapskontroller (quiz)
- Praktiska programmeringsövningar
- Verklighetsnära exempel
- Fokus på grunderna före ramverk

### Underhåll av repository

- Aktiv community av elever och bidragsgivare
- Regelbundna uppdateringar av beroenden och innehåll
- Ärenden och diskussioner övervakas av underhållare
- Översättningsuppdateringar automatiserade via GitHub Actions

### Relaterade resurser

- [Microsoft Learn-moduler](https://docs.microsoft.com/learn/)
- [Student Hub-resurser](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) rekommenderas för elever
- Ytterligare kurser: Generativ AI, Data Science, ML, IoT-curricula tillgängliga

### Arbeta med specifika projekt

För detaljerade instruktioner om enskilda projekt, se README-filer i:
- `quiz-app/README.md` - Vue 3 quiz-applikation
- `7-bank-project/README.md` - Bankapplikation med autentisering
- `5-browser-extension/README.md` - Utveckling av webbläsartillägg
- `6-space-game/README.md` - Canvasbaserat spelutveckling
- `9-chat-project/README.md` - AI-chattassistentprojekt

### Monorepo-struktur

Även om detta inte är ett traditionellt monorepo, innehåller detta repository flera oberoende projekt:
- Varje lektion är självständig
- Projekt delar inte beroenden
- Arbeta med enskilda projekt utan att påverka andra
- Klona hela repo för fullständig curriculumupplevelse

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, vänligen observera att automatiska översättningar kan innehålla fel eller unøyaktigheter. Det ursprungliga dokumentet på dess ursprungliga språk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->