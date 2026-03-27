# AGENTS.md

## Projektöversikt

Detta är ett utbildningsmaterial för att lära ut grundläggande webbutveckling för nybörjare. Kursplanen är en omfattande 12-veckors kurs utvecklad av Microsoft Cloud Advocates, med 24 praktiska lektioner som täcker JavaScript, CSS och HTML.

### Nyckelkomponenter

- **Utbildningsinnehåll**: 24 strukturerade lektioner organiserade i projektbaserade moduler  
- **Praktiska projekt**: Terrarium, Typningsspel, Webbläsartillägg, Rymdspel, Bankapp, Kodeditor och AI-chattassistent  
- **Interaktiva quiz**: 48 quiz med 3 frågor vardera (för- och efter-lektionsbedömningar)  
- **Flerspråkigt stöd**: Automatiska översättningar till 50+ språk via GitHub Actions  
- **Teknologier**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (för AI-projekt)  

### Arkitektur

- Utbildningsarkiv med lektioner organiserade per ämne  
- Varje lektionsmapp innehåller README, kodexempel och lösningar  
- Självständiga projekt i separata kataloger (quiz-app, olika lektionsprojekt)  
- Översättningssystem via GitHub Actions (co-op-translator)  
- Dokumentation serveras via Docsify och finns tillgänglig som PDF  

## Setup-kommandon

Det här arkivet är främst för konsumtion av utbildningsinnehåll. För arbete med specifika projekt:

### Huvudarkivets setup

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

### Rymdspelprojekt

```bash
cd 6-space-game/solution
npm install
# Öppna index.html i webbläsaren eller använd Live Server
```

### Chattprojekt (Python backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Sätt GITHUB_TOKEN-miljövariabeln
python api.py
```

## Utvecklingsarbetsflöde

### För innehållsbidragare

1. **Fork:a arkivet** till ditt GitHub-konto  
2. **Klona din fork** lokalt  
3. **Skapa en ny branch** för dina ändringar  
4. Gör ändringar i lektionsinnehåll eller kodexempel  
5. Testa eventuella kodändringar i relevanta projektkataloger  
6. Skicka pull requests enligt riktlinjer för bidrag  

### För elever

1. Fork:a eller klona arkivet  
2. Navigera genom lektionskatalogerna i ordning  
3. Läs README-filer för varje lektion  
4. Gör för-lektion quiz på https://ff-quizzes.netlify.app/web/  
5. Arbeta igenom kodexempel i lektionsmappar  
6. Slutför uppgifter och utmaningar  
7. Gör efter-lektion quiz  

### Live-utveckling

- **Dokumentation**: Kör `docsify serve` i roten (port 3000)  
- **Quiz-app**: Kör `npm run dev` i quiz-app katalogen  
- **Projekt**: Använd VS Code Live Server-extension för HTML-projekt  
- **API-projekt**: Kör `npm start` i respektive API-katalog  

## Testinstruktioner

### Testning av Quiz App

```bash
cd quiz-app
npm run lint       # Kontrollera kodstilproblem
npm run build      # Verifiera att bygget lyckas
```

### Bank API-testning

```bash
cd 7-bank-project/api
npm run lint       # Kontrollera efter kodstilproblem
node server.js     # Verifiera att servern startar utan fel
```

### Allmän testmetod

- Detta är ett utbildningsarkiv utan omfattande automatiserade tester  
- Manuell testning fokuserar på:  
  - Att kodexempel körs utan fel  
  - Att länkar i dokumentationen fungerar korrekt  
  - Att projekt byggs utan problem  
  - Att exempel följer bästa praxis  

### Kontroll före inskickning

- Kör `npm run lint` i kataloger med package.json  
- Verifiera att markdown-länkar är giltiga  
- Testa kodexempel i webbläsare eller Node.js  
- Kontrollera att översättningar behåller korrekt struktur  

## Kodstilriktlinjer

### JavaScript

- Använd modern ES6+ syntax  
- Följ standard ESLint-konfigurationer som finns i projekten  
- Använd meningsfulla variabel- och funktionsnamn för tydlighet i utbildningen  
- Lägg till kommentarer som förklarar koncept för elever  
- Formatera med Prettier där det är konfigurerat  

### HTML/CSS

- Semantiska HTML5-element  
- Responsiv designprinciper  
- Tydlig namngivning av klasser  
- Kommentarer som förklarar CSS-tekniker för elever  

### Python

- PEP 8 stilriktlinjer  
- Tydliga, pedagogiska kodexempel  
- Typangivelser där det är hjälpsamt för inlärningen  

### Markdown-dokumentation

- Klar rubrikhierarki  
- Kodblock med språkspecifikation  
- Länkar till ytterligare resurser  
- Skärmbilder och bilder i `images/`-kataloger  
- Alt-text för bilder för tillgänglighet  

### Filorganisation

- Lektioner numrerade sekventiellt (1-getting-started-lessons, 2-js-basics, etc.)  
- Varje projekt har `solution/` och ofta `start/` eller `your-work/`-kataloger  
- Bilder lagras i lektonspecifika `images/`-mappar  
- Översättningar i `translations/{language-code}/`-struktur  

## Bygg och distribution

### Quiz App distribution (Azure Static Web Apps)

Quiz-appen är konfigurerad för distribution via Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Skapar mappen dist/
# Distribuerar via GitHub Actions-arbetsflöde vid push till main
```

Azure Static Web Apps-konfiguration:  
- **Appplats**: `/quiz-app`  
- **Utmatningsplats**: `dist`  
- **Arbetsflöde**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`  

### Dokumentations-PDF-generering

```bash
npm install                    # Installera docsify-to-pdf
npm run convert               # Generera PDF från docs
```

### Docsify dokumentation

```bash
npm install -g docsify-cli    # Installera Docsify globalt
docsify serve                 # Servera på localhost:3000
```

### Projekt-specifika byggen

Varje projektkatalog kan ha sin egen byggprocess:  
- Vue-projekt: `npm run build` skapar produktionspaket  
- Statiska projekt: Ingen byggfas, serva filer direkt  

## Pull Request-riktlinjer

### Titelformat

Använd klara, beskrivande titlar som anger ändringsområde:  
- `[Quiz-app] Lägg till nytt quiz för lektion X`  
- `[Lesson-3] Rättelse av stavfel i terrarium-projektet`  
- `[Translation] Lägg till spansk översättning för lektion 5`  
- `[Docs] Uppdatera setup-instruktioner`  

### Obligatoriska kontroller

Innan du skickar en PR:  

1. **Kodkvalitet**:  
   - Kör `npm run lint` i berörda projektkataloger  
   - Åtgärda alla lintvarningar och -fel  

2. **Byggverifiering**:  
   - Kör `npm run build` om tillämpligt  
   - Se till att inga byggfel uppstår  

3. **Länkvalidering**:  
   - Testa alla markdown-länkar  
   - Verifiera att bildreferenser fungerar  

4. **Innehållsgranskning**:  
   - Korrekturläs rättstavning och grammatik  
   - Kontrollera att kodexempel är korrekta och pedagogiska  
   - Verifiera att översättningar behåller ursprungligt innehåll  

### Bidragskrav

- Acceptera Microsoft CLA (automatisk kontroll vid första PR)  
- Följ [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)  
- Se [CONTRIBUTING.md](./CONTRIBUTING.md) för detaljerade riktlinjer  
- Referera till ärendenummer i PR-beskrivning vid behov  

### Granskningsprocess

- PR granskas av underhållare och community  
- Pedagogisk tydlighet prioriteras  
- Kodexempel ska följa aktuell bästa praxis  
- Översättningar granskas för noggrannhet och kulturell anpassning  

## Översättningssystem

### Automatisk översättning

- Använder GitHub Actions med co-op-translator arbetsflöde  
- Översätter till 50+ språk automatiskt  
- Källfiler i huvuddirektiv  
- Översatta filer i `translations/{language-code}/` kataloger  

### Lägg till manuella översättningsförbättringar

1. Lokalisera fil i `translations/{language-code}/`  
2. Gör förbättringar med bevarad struktur  
3. Säkerställ att kodexempel förblir funktionella  
4. Testa eventuellt lokaliserat quizinnehåll  

### Översättningsmetadata

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
- Kontrollera Node.js version (v14+ rekommenderas)  
- Radera `node_modules` och `package-lock.json`, kör `npm install` igen  
- Kontrollera portkonflikter (standard: Vite använder port 5173)  

**API-server startar inte**:  
- Säkerställ att Node.js version är tillräcklig (node >=10)  
- Kontrollera om port redan används  
- Kontrollera att alla beroenden installerats med `npm install`  

**Webbläsartillägg laddas inte**:  
- Kontrollera att manifest.json är korrekt formaterad  
- Kontrollera webbläsarkonsolen för fel  
- Följ webbläsarspecifika installationsanvisningar för tillägg  

**Problem med Python chattprojekt**:  
- Säkerställ att OpenAI-paket installerats: `pip install openai`  
- Kontrollera att miljövariabel GITHUB_TOKEN är satt  
- Kontrollera behörigheter för GitHub Models  

**Docsify serverar inte dokumentation**:  
- Installera docsify-cli globalt: `npm install -g docsify-cli`  
- Kör från arkivets rotkatalog  
- Kontrollera att `docs/_sidebar.md` finns  

### Tips för utvecklingsmiljö

- Använd VS Code med Live Server-extension för HTML-projekt  
- Installera ESLint och Prettier extensions för konsekvent formatering  
- Använd browser DevTools för felsökning av JavaScript  
- För Vue-projekt, installera Vue DevTools browser extension  

### Prestandahänsyn

- Stort antal översatta filer (50+ språk) gör fulla kloner stora  
- Använd shallow clone om du bara arbetar med innehåll: `git clone --depth 1`  
- Exkludera översättningar från sökningar vid arbete med engelskt innehåll  
- Byggprocesser kan vara långsamma vid första körning (npm install, Vite build)  

## Säkerhetshänsyn

### Miljövariabler

- API-nycklar ska aldrig committas till arkivet  
- Använd `.env`-filer (som redan finns i `.gitignore`)  
- Dokumentera nödvändiga miljövariabler i projektens README-filer  

### Python-projekt

- Använd virtuella miljöer: `python -m venv venv`  
- Håll beroenden uppdaterade  
- GitHub-token ska ha minimala nödvändiga behörigheter  

### GitHub Models åtkomst

- Personliga access tokens (PAT) krävs för GitHub Models  
- Tokens ska lagras som miljövariabler  
- Committa aldrig tokens eller inloggningsuppgifter  

## Ytterligare anteckningar

### Målgrupp

- Totala nybörjare i webbutveckling  
- Studenter och självstudier  
- Lärare som använder kursplanen i klassrum  
- Innehåll är designat för tillgänglighet och gradvis färdighetsuppbyggnad  

### Pedagogisk filosofi

- Projektbaserat lärande  
- Frekventa kunskapskontroller (quiz)  
- Praktiska kodningsövningar  
- Exempel från verkliga tillämpningar  
- Fokus på grundläggande principer innan ramverk  

### Underhåll av arkivet

- Aktiv community av elever och bidragsgivare  
- Regelbundna uppdateringar av beroenden och innehåll  
- Ärenden och diskussioner bevakas av underhållare  
- Översättningsuppdateringar automatiseras via GitHub Actions  

### Relaterade resurser

- [Microsoft Learn-moduler](https://docs.microsoft.com/learn/)  
- [Student Hub-resurser](https://docs.microsoft.com/learn/student-hub/)  
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) rekommenderas för elever  
- Ytterligare kurser: Generativ AI, Data Science, ML, IoT kursplaner finns  

### Arbeta med specifika projekt

För detaljerade instruktioner om enskilda projekt, se README-filerna i:  
- `quiz-app/README.md` - Vue 3 quizapplikation  
- `7-bank-project/README.md` - Bankapplikation med autentisering  
- `5-browser-extension/README.md` - Utveckling av webbläsartillägg  
- `6-space-game/README.md` - Canvas-baserat spel  
- `9-chat-project/README.md` - AI-chattassistentprojekt  

### Monorepo-struktur

Även om detta inte är ett traditionellt monorepo, innehåller arkivet flera oberoende projekt:  
- Varje lektion är fristående  
- Projekten delar inga beroenden  
- Arbeta på individuella projekt utan att påverka andra  
- Klona hela arkivet för full kursplanserfarenhet  

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Ansvarsfriskrivning**:
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, vänligen var medveten om att automatiska översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess modersmål bör anses vara den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för några missförstånd eller feltolkningar som uppstår från användningen av denna översättning.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->