# AGENTS.md

## Projektöversikt

Detta är ett utbildningsbibliotek för att lära ut grunderna i webbapputveckling för nybörjare. Kursplanen är en omfattande 12-veckors kurs utvecklad av Microsoft Cloud Advocates, med 24 praktiska lektioner som täcker JavaScript, CSS och HTML.

### Viktiga komponenter

- **Utbildningsinnehåll**: 24 strukturerade lektioner organiserade i projektbaserade moduler
- **Praktiska projekt**: Terrarium, Typ-spel, Webbläsartillägg, Rymdspel, Bankapp, Kodredigerare och AI-chattassistent
- **Interaktiva quiz**: 48 quiz med 3 frågor vardera (före/efter lektion)
- **Fler språkstöd**: Automatiska översättningar för 50+ språk via GitHub Actions
- **Teknologier**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (för AI-projekt)

### Arkitektur

- Utbildningsbibliotek med lektionbaserad struktur
- Varje lektionsmapp innehåller README, kodexempel och lösningar
- Självständiga projekt i separata kataloger (quiz-app, olika lektionsprojekt)
- Översättningssystem med GitHub Actions (co-op-translator)
- Dokumentation serveras via Docsify och finns som PDF

## Installationskommandon

Detta bibliotek är främst för att konsumera utbildningsinnehåll. För att arbeta med specifika projekt:

### Huvudbibliotekets installation

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

### Chattprojekt (Python backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Sätt miljövariabeln GITHUB_TOKEN
python api.py
```

## Utvecklingsarbetsflöde

### För innehållsbidragare

1. **Forka biblioteket** till ditt GitHub-konto
2. **Klona din fork** lokalt
3. **Skapa en ny branch** för dina ändringar
4. Gör ändringar i lektionsinnehåll eller kodexempel
5. Testa eventuella kodändringar i relevanta projektmappar
6. Skicka pull requests enligt bidragsriktlinjer

### För elever

1. Forka eller klona biblioteket
2. Gå igenom lektionsmappar i ordning
3. Läs README-filer för varje lektion
4. Slutför för-lektionsquiz på https://ff-quizzes.netlify.app/web/
5. Arbeta igenom kodexempel i lektionsmappar
6. Slutför uppgifter och utmaningar
7. Gör efter-lektionsquiz

### Live-utveckling

- **Dokumentation**: Kör `docsify serve` i root (port 3000)
- **Quiz App**: Kör `npm run dev` i quiz-app-mappen
- **Projekt**: Använd VS Code Live Server-extension för HTML-projekt
- **API-projekt**: Kör `npm start` i respektive API-katalog

## Testningsinstruktioner

### Quiz App testning

```bash
cd quiz-app
npm run lint       # Kontrollera kodstilproblem
npm run build      # Verifiera att byggnationen lyckas
```

### Bank API testning

```bash
cd 7-bank-project/api
npm run lint       # Kontrollera kodstilproblem
node server.js     # Verifiera att servern startar utan fel
```

### Allmän testmetod

- Detta är ett utbildningsbibliotek utan omfattande automatiserade tester
- Manuell testning fokuserar på:
  - Kodexempel körs utan fel
  - Länkar i dokumentationen fungerar korrekt
  - Projekt byggs utan problem
  - Exempel följer bästa praxis

### Kontroll före inskickning

- Kör `npm run lint` i kataloger med package.json
- Verifiera att markdown-länkar är giltiga
- Testa kodexempel i webbläsare eller Node.js
- Kontrollera att översättningar behåller korrekt struktur

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
- Klara klassnamnskonventioner
- Kommentarer som förklarar CSS-tekniker för elever

### Python

- PEP 8 stilriktlinjer
- Klara, utbildningsanpassade kodexempel
- Typangivelser där det är hjälpsamt för lärande

### Markdown-dokumentation

- Tydlig rubrikstruktur
- Kodblock med språkspecifikation
- Länkar till ytterligare resurser
- Skärmdumpar och bilder i `images/`-mappar
- Alt-text för bilder för tillgänglighet

### Filorganisation

- Lektioner numrerade i ordning (1-getting-started-lessons, 2-js-basics, etc.)
- Varje projekt har `solution/` och ofta `start/` eller `your-work/` kataloger
- Bilder lagras i lektons-specifika `images/`-mappar
- Översättningar i `translations/{language-code}/` struktur

## Bygg och distribution

### Quiz App distribution (Azure Static Web Apps)

quiz-app är konfigurerad för distribution till Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Skapar dist/ mapp
# Distribuerar via GitHub Actions-arbetsflöde vid push till main
```

Azure Static Web Apps-konfiguration:
- **App-plats**: `/quiz-app`
- **Utdata-plats**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generering av PDF-dokumentation

```bash
npm install                    # Installera docsify-to-pdf
npm run convert               # Generera PDF från docs
```

### Docsify-dokumentation

```bash
npm install -g docsify-cli    # Installera Docsify globalt
docsify serve                 # Servera på localhost:3000
```

### Projekt-specifika byggsteg

Varje projektkatalog kan ha egen byggprocess:
- Vue-projekt: `npm run build` skapar produktionspaket
- Statisk projekt: Inget byggsteg, servera filer direkt

## Pull Request-riktlinjer

### Titelformat

Använd tydliga, beskrivande titlar som anger ändringsområde:
- `[Quiz-app] Lägg till nytt quiz för lektion X`
- `[Lesson-3] Fixar stavfel i terrarium-projekt`
- `[Translation] Lägg till spansk översättning för lektion 5`
- `[Docs] Uppdatera installationsinstruktioner`

### Obligatoriska kontroller

Innan PR skickas in:

1. **Kodkvalitet**:
   - Kör `npm run lint` i berörda projektmappar
   - Åtgärda alla lint-varningar och fel

2. **Byggverifiering**:
   - Kör `npm run build` om tillämpligt
   - Säkerställ att inga byggfel uppstår

3. **Länkkontroll**:
   - Testa alla markdown-länkar
   - Verifiera att bildreferenser fungerar

4. **Innehållsgranskning**:
   - Korrekturläs stavning och grammatik
   - Säkerställ att kodexempel är korrekta och pedagogiska
   - Kontrollera att översättningar behåller ursprungligt budskap

### Bidragskrav

- Acceptera Microsoft CLA (automatisk kontroll vid första PR)
- Följ [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Se [CONTRIBUTING.md](./CONTRIBUTING.md) för detaljerade riktlinjer
- Referera ärendenummer i PR-beskrivning vid behov

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
- Översatta filer i `translations/{language-code}/`-mappar

### Manuella förbättringar av översättning

1. Hitta filen i `translations/{language-code}/`
2. Gör förbättringar samtidigt som struktur bevaras
3. Säkerställ att kodexempel förblir funktionella
4. Testa eventuellt lokaliserat quizinnehåll

### Översättningsmetadata

Översatta filer innehåller metadatahuvud:
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
- Kontrollera om porten är upptagen (standard: Vite använder port 5173)

**API-server startar inte**:
- Verifiera att Node.js-version är minst (node >=10)
- Kontrollera om port är redan i bruk
- Säkerställ att alla beroenden är installerade med `npm install`

**Webbläsartillägg laddas inte**:
- Kontrollera att manifest.json är korrekt formaterad
- Kontrollera webbläsarkonsolen för fel
- Följ webbläsarspecifika installationsinstruktioner för tillägg

**Problem med Python-chattprojektet**:
- Kontrollera att OpenAI-paketet är installerat: `pip install openai`
- Verifiera att GITHUB_TOKEN miljövariabel är satt
- Kontrollera GitHub Models åtkomsträttigheter

**Docsify serverar inte dokumentation**:
- Installera docsify-cli globalt: `npm install -g docsify-cli`
- Kör från repository root-katalog
- Kontrollera att `docs/_sidebar.md` finns

### Tips för utvecklingsmiljö

- Använd VS Code med Live Server-extension för HTML-projekt
- Installera ESLint och Prettier extensions för konsekvent formatering
- Använd webbläsarens DevTools för att debugga JavaScript
- För Vue-projekt, installera Vue DevTools webbläsartillägg

### Prestandaöverväganden

- Stort antal översatta filer (50+ språk) gör att fulla kloner blir stora
- Använd shallow clone om du bara arbetar med innehåll: `git clone --depth 1`
- Exkludera översättningar från sökningar när du arbetar med engelskt innehåll
- Byggprocesser kan vara långsamma vid första körning (npm install, Vite build)

## Säkerhetsöverväganden

### Miljövariabler

- API-nycklar bör aldrig committas till repository
- Använd `.env`-filer (redan i `.gitignore`)
- Dokumentera erforderliga miljövariabler i projekt-README

### Python-projekt

- Använd virtuella miljöer: `python -m venv venv`
- Håll beroenden uppdaterade
- GitHub-tokens bör ha minimala nödvändiga rättigheter

### GitHub Models-åtkomst

- Personliga åtkomsttokens (PAT) krävs för GitHub Models
- Tokens bör sparas som miljövariabler
- Commita aldrig tokens eller inloggningsuppgifter

## Ytterligare anteckningar

### Målgrupp

- Helt nybörjare inom webbappar
- Studenter och självlärande
- Lärare som använder kursplanen i klassrum
- Innehållet är utformat för tillgänglighet och stegvis kompetensuppbyggnad

### Pedagogisk filosofi

- Projektbaserat lärande
- Frekventa kunskapskontroller (quiz)
- Praktiska kodövningar
- Exempel från verkliga tillämpningar
- Fokus på grunder innan ramverk

### Underhåll av repository

- Aktiv community av elever och bidragsgivare
- Regelbundna uppdateringar av beroenden och innehåll
- Ärenden och diskussioner övervakas av underhållare
- Översättningsuppdateringar automatiseras via GitHub Actions

### Relaterade resurser

- [Microsoft Learn moduler](https://docs.microsoft.com/learn/)
- [Student Hub resurser](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) rekommenderas för elever
- Ytterligare kurser: Generativ AI, Data Science, ML, IoT kursplaner finns

### Arbeta med specifika projekt

För detaljerade instruktioner om individuell projekt, se README-filer i:
- `quiz-app/README.md` - Vue 3 quiz-app
- `7-bank-project/README.md` - Bankapplikation med autentisering
- `5-browser-extension/README.md` - Webbläsartilläggsutveckling
- `6-space-game/README.md` - Canvas-baserat spel
- `9-chat-project/README.md` - AI-chattassistentprojekt

### Monorepo-struktur

Även om detta inte är ett traditionellt monorepo, innehåller detta bibliotek flera oberoende projekt:
- Varje lektion är självständig
- Projekt delar inga beroenden
- Arbeta med enskilda projekt utan att påverka andra
- Klona hela repot för full utbildningsupplevelse

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Ansvarsfriskrivning**:
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet bör du vara medveten om att automatiska översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess ursprungsspråk ska betraktas som den auktoritativa källan. För viktig information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för några missförstånd eller feltolkningar som uppstår vid användning av denna översättning.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->