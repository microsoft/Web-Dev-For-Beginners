# AGENTS.md

## Projektöversikt

Detta är ett utbildningscurriculum för att lära ut grunderna i webbutveckling för nybörjare. Curriculumen är en omfattande 12-veckorskurs utvecklad av Microsoft Cloud Advocates, med 24 praktiska lektioner som täcker JavaScript, CSS och HTML.

### Viktiga komponenter

- **Utbildningsinnehåll**: 24 strukturerade lektioner organiserade i projektbaserade moduler
- **Praktiska projekt**: Terrarium, Typningsspel, Webbläsartillägg, Rymdspel, Bankapp, Kodredigerare och AI-chatassistent
- **Interaktiva quiz**: 48 quiz med 3 frågor vardera (för- och efterlektionstest)
- **Fler språkstöd**: Automatiska översättningar till över 50 språk via GitHub Actions
- **Teknologier**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (för AI-projekt)

### Arkitektur

- Utbildningsrepo med lektionbaserad struktur
- Varje lektionsmapp innehåller README, kodexempel och lösningar
- Självständiga projekt i separata kataloger (quiz-app, olika lektionsprojekt)
- Översättningssystem via GitHub Actions (co-op-translator)
- Dokumentation serverad via Docsify och tillgänglig som PDF

## Setup-kommandon

Detta repository är främst för konsumtion av utbildningsinnehåll. För att arbeta med specifika projekt:

### Huvudrepo Setup

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz Apps Setup (Vue 3 + Vite)

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

### Rymdspelprojekt

```bash
cd 6-space-game/solution
npm install
# Öppna index.html i webbläsaren eller använd Live Server
```

### Chatprojekt (Python backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Sätt GITHUB_TOKEN miljövariabeln
python api.py
```

## Utvecklingsflöde

### För innehållsbidragare

1. **Forka repot** till ditt GitHub-konto
2. **Klona din fork** lokalt
3. **Skapa en ny branch** för dina ändringar
4. Gör ändringar i lektionsinnehåll eller kodexempel
5. Testa eventuella kodändringar i relevanta projektmappar
6. Skicka pull requests enligt riktlinjer för bidrag

### För elever

1. Forka eller klona repot
2. Navigera till lektionskataloger i ordning
3. Läs README-filer för varje lektion
4. Gör för-lektions quiz på https://ff-quizzes.netlify.app/web/
5. Arbeta igenom kodexempel i lektionsmapparna
6. Slutför uppgifter och utmaningar
7. Gör efter-lektions quiz

### Liveutveckling

- **Dokumentation**: Kör `docsify serve` från rotmappen (port 3000)
- **Quiz-app**: Kör `npm run dev` i quiz-app-katalogen
- **Projekt**: Använd VS Code Live Server-tillägg för HTML-projekt
- **API-projekt**: Kör `npm start` i respektive API-katalog

## Testinstruktioner

### Quiz App-testning

```bash
cd quiz-app
npm run lint       # Kontrollera kodstilsproblem
npm run build      # Verifiera att bygget lyckas
```

### Bank API-testning

```bash
cd 7-bank-project/api
npm run lint       # Kontrollera efter kodstilsproblem
node server.js     # Verifiera att servern startar utan fel
```

### Allmän testmetod

- Detta är ett utbildningsrepo utan omfattande automatiserade tester
- Manuell testning fokuserar på:
  - Kodexempel körs utan fel
  - Länkar i dokumentationen fungerar korrekt
  - Projekt byggs framgångsrikt
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
- Använd meningsfulla variabel- och funktionsnamn för pedagogisk tydlighet
- Lägg till kommentarer som förklarar koncept för elever
- Formatera med Prettier där det är konfigurerat

### HTML/CSS

- Semantiska HTML5-element
- Responsiva designprinciper
- Tydliga klassnamns-konventioner
- Kommentarer som förklarar CSS-tekniker för elever

### Python

- PEP 8 stilriktlinjer
- Klara, pedagogiska kodexempel
- Typanvisningar där det hjälper inlärningen

### Markdown-dokumentation

- Tydlig rubrikhierarki
- Kodblock med språk-syntax
- Länkar till ytterligare resurser
- Skärmdumpar och bilder i `images/`-mappar
- Alt-text för bilder för tillgänglighet

### Filorganisation

- Lektioner numrerade sekventiellt (1-getting-started-lessons, 2-js-basics, etc.)
- Varje projekt har `solution/` och ofta `start/` eller `your-work/` mappar
- Bilder lagras i lektonspecifika `images/`-mappar
- Översättningar i `translations/{language-code}/` struktur

## Bygg och distribution

### Quiz App-distribution (Azure Static Web Apps)

Quiz-appen är konfigurerad för distribution på Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Skapar dist/-mappen
# Distribuerar via GitHub Actions-arbetsflöde vid push till main
```

Azure Static Web Apps-konfiguration:
- **Appplats**: `/quiz-app`
- **Outputplats**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### PDF-generering av dokumentation

```bash
npm install                    # Installera docsify-to-pdf
npm run convert               # Generera PDF från docs
```

### Docsify-dokumentation

```bash
npm install -g docsify-cli    # Installera Docsify globalt
docsify serve                 # Kör på localhost:3000
```

### Projektspecifika byggsteg

Varje projektkatalog kan ha sin egen byggprocess:
- Vue-projekt: `npm run build` skapar produktionspaket
- Statiska projekt: Inget byggsteg, filerna serveras direkt

## Riktlinjer för pull requests

### Titelformat

Använd tydliga, beskrivande titlar som visar ändringsområde:
- `[Quiz-app] Lägg till nytt quiz för lektion X`
- `[Lektion-3] Fixar stavfel i terrariumprojekt`
- `[Översättning] Lägg till spanskt översättning för lektion 5`
- `[Docs] Uppdatera installationsanvisningar`

### Obligatoriska kontroller

Innan PR skickas:

1. **Kodkvalitet**:
   - Kör `npm run lint` i berörda projektmappar
   - Åtgärda alla lint-fel och varningar

2. **Byggverifiering**:
   - Kör `npm run build` om tillämpligt
   - Säkerställ inga byggfel

3. **Länkvalidering**:
   - Testa alla markdown-länkar
   - Verifiera att bildreferenser fungerar

4. **Innehållsgranskning**:
   - Korrekturläs stavning och grammatik
   - Säkerställ att kodexempel är korrekta och pedagogiska
   - Kontrollera att översättningar behåller originalmening

### Bidragskrav

- Godkänn Microsoft CLA (automatisk kontroll vid första PR)
- Följ [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Se [CONTRIBUTING.md](./CONTRIBUTING.md) för detaljerade riktlinjer
- Referera issue-nummer i PR-beskrivning om möjligt

### Granskningsprocess

- PR granskas av underhållare och community
- Pedagogisk tydlighet prioriteras
- Kodexempel ska följa aktuella bästa praxis
- Översättningar granskas för korrekthet och kulturell lämplighet

## Översättningssystem

### Automatiserad översättning

- Använder GitHub Actions med co-op-translator workflow
- Översätter automatiskt till över 50 språk
- Källfiler i huvudkataloger
- Översatta filer i `translations/{language-code}/` kataloger

### Lägga till manuella översättningsförbättringar

1. Lokalisera fil i `translations/{language-code}/`
2. Gör förbättringar samtidigt som struktur bevaras
3. Säkerställ att kodexempel fungerar
4. Testa lokaliserat quiz-innehåll

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

## Felsökning och problemlösning

### Vanliga problem

**Quiz-appen startar inte**:
- Kontrollera Node.js-version (v14+ rekommenderas)
- Ta bort `node_modules` och `package-lock.json`, kör `npm install` igen
- Kontrollera portkonflikter (standard: Vite använder port 5173)

**API-server startar inte**:
- Verifiera att Node.js-version uppfyller minimikrav (node >=10)
- Kontrollera om port redan används
- Säkerställ att alla beroenden är installerade med `npm install`

**Webbläsartillägg laddas inte**:
- Kontrollera att manifest.json är korrekt formaterad
- Kolla webbläsarkonsolen efter felmeddelanden
- Följ webbläsarspecifika installationsinstruktioner för tillägg

**Problem med Python chatprojekt**:
- Säkerställ att OpenAI-paketet är installerat: `pip install openai`
- Verifiera att miljövariabeln GITHUB_TOKEN är satt
- Kontrollera GitHub Models-åtkomstbehörigheter

**Docsify serverar inte dokumentation**:
- Installera docsify-cli globalt: `npm install -g docsify-cli`
- Kör från repots rotkatalog
- Kontrollera att `docs/_sidebar.md` finns

### Tips för utvecklingsmiljö

- Använd VS Code med Live Server-tillägg för HTML-projekt
- Installera ESLint och Prettier-tillägg för konsekvent formatering
- Använd webbläsarens utvecklarverktyg för att debugga JavaScript
- För Vue-projekt, installera Vue DevTools webbläsartillägg

### Prestandahänsyn

- Stort antal översatta filer (50+ språk) gör fulla kloner stora
- Använd shallow clone om du bara arbetar med innehåll: `git clone --depth 1`
- Exkludera översättningar från sökningar när du arbetar med engelskt innehåll
- Byggprocesser kan vara långsamma första gången (npm install, Vite build)

## Säkerhetshänsyn

### Miljövariabler

- API-nycklar ska aldrig checkas in i repot
- Använd `.env`-filer (finns i `.gitignore`)
- Dokumentera nödvändiga miljövariabler i projektens README

### Python-projekt

- Använd virtuella miljöer: `python -m venv venv`
- Håll beroenden uppdaterade
- GitHub tokens bör ha minimala nödvändiga rättigheter

### GitHub Models-åtkomst

- Personliga access-tokens (PAT) krävs för GitHub Models
- Tokens ska lagras som miljövariabler
- Aldrig checka in tokens eller inloggningsuppgifter

## Ytterligare anmärkningar

### Målgrupp

- Helt nybörjare inom webbutveckling
- Studenter och självlärande
- Lärare som använder curriculumen i klassrum
- Innehåll designat för tillgänglighet och gradvis färdighetsutveckling

### Pedagogisk filosofi

- Projektbaserat lärande
- Frekventa kunskapskontroller (quiz)
- Praktiska kodövningar
- Exempel på verkliga tillämpningar
- Fokus på grunderna innan ramverk

### Repositorsunderhåll

- Aktivt community av elever och bidragsgivare
- Regelbundna uppdateringar av beroenden och innehåll
- Problem och diskussioner övervakas av underhållare
- Översättningsuppdateringar automatiska via GitHub Actions

### Relaterade resurser

- [Microsoft Learn-moduler](https://docs.microsoft.com/learn/)
- [Student Hub-resurser](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) rekommenderas för elever
- Ytterligare kurser: Generativ AI, Data Science, ML, IoT curricula tillgängliga

### Arbete med specifika projekt

För detaljerade instruktioner om enskilda projekt, se README-filer i:
- `quiz-app/README.md` - Vue 3 quizapplikation
- `7-bank-project/README.md` - Bankapplikation med autentisering
- `5-browser-extension/README.md` - Utveckling av webbläsartillägg
- `6-space-game/README.md` - Canvas-baserat spelutveckling
- `9-chat-project/README.md` - AI chattassistentprojekt

### Monorepo-struktur

Även om detta inte är ett traditionellt monorepo så innehåller repot flera oberoende projekt:
- Varje lektion är självständig
- Projekt delar inga beroenden
- Arbeta med individuella projekt utan att påverka andra
- Klona hela repot för hela curriculum-upplevelsen

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Ansvarsfriskrivning**:
Det här dokumentet har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, vänligen observera att automatiska översättningar kan innehålla fel eller inkonsekvenser. Det ursprungliga dokumentet på dess originalspråk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för några missförstånd eller feltolkningar som uppstår vid användning av denna översättning.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->