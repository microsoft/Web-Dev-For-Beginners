# AGENTS.md

## Projektöversikt

Detta är ett utbildningsrepository för att lära ut grunderna i webbutveckling till nybörjare. Kursplanen är en omfattande 12-veckors kurs utvecklad av Microsoft Cloud Advocates, med 24 praktiska lektioner som täcker JavaScript, CSS och HTML.

### Nyckelkomponenter

- **Utbildningsinnehåll**: 24 strukturerade lektioner organiserade i projektbaserade moduler  
- **Praktiska projekt**: Terrarium, Typ-spel, Webbläsartillägg, Rymdspel, Bank-app, Kodredigerare och AI-chattassistent  
- **Interaktiva quiz**: 48 quiz med 3 frågor vardera (före/efter lektion)  
- **Fler språkstöd**: Automatiska översättningar till 50+ språk via GitHub Actions  
- **Teknologier**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (för AI-projekt)  

### Arkitektur

- Utbildningsrepository med lektionbaserad struktur  
- Varje lektionsmapp innehåller README, kodexempel och lösningar  
- Självständiga projekt i separata kataloger (quiz-app, olika lektionsprojekt)  
- Översättningssystem med GitHub Actions (co-op-translator)  
- Dokumentation serveras via Docsify och finns tillgänglig som PDF  

## Uppställningskommandon

Detta repository är främst för konsumtion av utbildningsinnehåll. För arbete med specifika projekt:

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

### Rymdspelprojekt

```bash
cd 6-space-game/solution
npm install
# Öppna index.html i webbläsaren eller använd Live Server
```

### Chattprojekt (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Ange miljövariabeln GITHUB_TOKEN
python api.py
```

## Utvecklingsarbetsflöde

### För innehållsbidragare

1. **Fork:a repositoryt** till ditt GitHub-konto  
2. **Klona din fork** lokalt  
3. **Skapa en ny gren** för dina ändringar  
4. Gör ändringar i lektionsinnehåll eller kodexempel  
5. Testa eventuella kodändringar i relevanta projektmappar  
6. Skicka pull requests enligt bidragsriktlinjer  

### För elever

1. Fork:a eller klona repositoryt  
2. Navigera igenom lektionsmappar i ordning  
3. Läs README-filer för varje lektion  
4. Gör för-lektionsquiz på https://ff-quizzes.netlify.app/web/  
5. Arbeta igenom kodexemplen i lektionsmapparna  
6. Slutför uppgifter och utmaningar  
7. Gör efter-lektionsquiz  

### Liveutveckling

- **Dokumentation**: Kör `docsify serve` i rotmappen (port 3000)  
- **Quiz App**: Kör `npm run dev` i quiz-app-mappen  
- **Projekt**: Använd VS Code Live Server-tillägg för HTML-projekt  
- **API-projekt**: Kör `npm start` i respektive API-mapp  

## Testinstruktioner

### Quiz App-testning

```bash
cd quiz-app
npm run lint       # Kontrollera kodstilproblem
npm run build      # Verifiera att bygget lyckas
```

### Bank API-testning

```bash
cd 7-bank-project/api
npm run lint       # Kontrollera kodstilproblem
node server.js     # Verifiera att servern startar utan fel
```

### Generell teststrategi

- Detta är ett utbildningsrepository utan omfattande automatiserade tester  
- Manuell testning fokuserar på:  
  - Kodexempel körs utan fel  
  - Länkar i dokumentationen fungerar korrekt  
  - Projektbyggen slutförs utan problem  
  - Exempel följer bästa praxis  

### Kontroll före inskickning

- Kör `npm run lint` i kataloger med package.json  
- Verifiera att markdown-länkar är giltiga  
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
- Tydliga klassnamnskonventioner  
- Kommentarer som förklarar CSS-tekniker för elever  

### Python

- PEP 8-stilriktlinjer  
- Klara, utbildande kodexempel  
- Typanvisningar där det är hjälpsamt för inlärning  

### Markdown-dokumentation

- Tydlig rubrikhierarki  
- Kodblock med språkdefinition  
- Länkar till ytterligare resurser  
- Skärmdumpar och bilder i `images/`-kataloger  
- Alt-text för bilder för tillgänglighet  

### Filorganisation

- Lektioner numrerade i följd (1-getting-started-lessons, 2-js-basics, osv.)  
- Varje projekt har `solution/` och ofta `start/` eller `your-work/` kataloger  
- Bilder lagras i lektonspecifika `images/`-mappar  
- Översättningar i `translations/{language-code}/` struktur  

## Bygg och distributionsinstruktioner

### Quiz App-distribution (Azure Static Web Apps)

Quiz-app är konfigurerad för distribution via Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Skapar mappen dist/
# Distribuerar via GitHub Actions-workflow vid push till main
```

Azure Static Web Apps-konfiguration:  
- **Appplats**: `/quiz-app`  
- **Utmatningsplats**: `dist`  
- **Arbetsflöde**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`  

### Generering av dokumentations-PDF

```bash
npm install                    # Installera docsify-to-pdf
npm run convert               # Generera PDF från docs
```

### Docsify-dokumentation

```bash
npm install -g docsify-cli    # Installera Docsify globalt
docsify serve                 # Kör på localhost:3000
```

### Projekt-specifika byggen

Varje projektmapp kan ha sin egen byggprocess:  
- Vue-projekt: `npm run build` skapar produktionspaket  
- Statisk projekt: Inget byggsteg, serva filer direkt  

## Regler för Pull Requests

### Titelmall

Använd tydliga, beskrivande titlar som anger ändringsområde:  
- `[Quiz-app] Lägg till nytt quiz för lektion X`  
- `[Lektion-3] Rätta stavfel i terrariumprojekt`  
- `[Översättning] Lägg till spansk översättning för lektion 5`  
- `[Docs] Uppdatera installationsinstruktioner`  

### Obligatoriska kontroller

Innan du skickar en PR:

1. **Kodkvalitet**:  
   - Kör `npm run lint` i berörda projektmappar  
   - Åtgärda alla lintfel och varningar  

2. **Byggverifiering**:  
   - Kör `npm run build` om tillämpligt  
   - Säkerställ att inga byggfel uppstår  

3. **Länkverifiering**:  
   - Testa alla markdown-länkar  
   - Kontrollera att bildreferenser fungerar  

4. **Innehållsgranskning**:  
   - Korrekturläs stavning och grammatik  
   - Säkerställ att kodexempel är korrekta och pedagogiska  
   - Verifiera att översättningar bibehåller ursprunglig mening  

### Bidragskrav

- Godkänn Microsoft CLA (automatisk kontroll vid första PR)  
- Följ [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)  
- Se [CONTRIBUTING.md](./CONTRIBUTING.md) för detaljerade riktlinjer  
- Referera eventuella issues i PR-beskrivningen  

### Granskningsprocess

- PR:er granskas av underhållare och community  
- Utbildningsklarhet prioriteras  
- Kodexempel ska följa nuvarande bästa praxis  
- Översättningar granskas för noggrannhet och kulturell lämplighet  

## Översättningssystem

### Automatisk översättning

- Använder GitHub Actions med co-op-translator-arbetsflöde  
- Översätter automatiskt till 50+ språk  
- Källfiler i huvudkataloger  
- Översatta filer i `translations/{language-code}/` kataloger  

### Lägga till manuella förbättringar i översättningar

1. Leta upp fil i `translations/{language-code}/`  
2. Gör förbättringar utan att ändra struktur  
3. Säkerställ att kodexempel förblir funktionella  
4. Testa eventuellt lokaliserat quiz-innehåll  

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

**Quiz-app startar inte**:  
- Kontrollera Node.js-version (v14+ rekommenderas)  
- Radera `node_modules` och `package-lock.json`, kör `npm install` igen  
- Kolla portkonflikter (standard: Vite använder port 5173)  

**API-server startar inte**:  
- Verifiera att Node.js-versionen uppfyller minimikrav (node >=10)  
- Kontrollera om port redan används  
- Säkerställ att alla beroenden är installerade med `npm install`  

**Webbläsartillägg laddas inte**:  
- Kontrollera att manifest.json är korrekt formaterad  
- Kolla webbläsarkonsolen efter fel  
- Följ webbläsarspecifika instruktioner för tilläggsinstallation  

**Problem med Python-chatprojektet**:  
- Säkerställ att OpenAI-paketet är installerat: `pip install openai`  
- Kontrollera att GITHUB_TOKEN-miljövariabeln är satt  
- Kontrollera GitHub Models behörigheter  

**Docsify serverar inte docs**:  
- Installera docsify-cli globalt: `npm install -g docsify-cli`  
- Kör från repositoryts rotmapp  
- Kontrollera att `docs/_sidebar.md` finns  

### Tips för utvecklingsmiljön

- Använd VS Code med Live Server-tillägg för HTML-projekt  
- Installera ESLint och Prettier-tillägg för konsekvent formattering  
- Använd webbläsarens utvecklarverktyg för att felsöka JavaScript  
- För Vue-projekt, installera Vue DevTools webbläsartillägg  

### Prestandaöverväganden

- Stort antal översättningsfiler (50+ språk) gör fullständiga kloner stora  
- Använd shallow clone om du bara arbetar med innehåll: `git clone --depth 1`  
- Exkludera översättningar från sökningar när du jobbar med engelska innehållet  
- Byggprocesser kan vara långsamma vid första körning (npm install, Vite build)  

## Säkerhetsöverväganden

### Miljövariabler

- API-nycklar ska aldrig committas till repository  
- Använd `.env`-filer (redan i `.gitignore`)  
- Dokumentera nödvändiga miljövariabler i projektens README-filer  

### Python-projekt

- Använd virtuella miljöer: `python -m venv venv`  
- Håll beroenden uppdaterade  
- GitHub-tokens ska ha minsta nödvändiga behörigheter  

### GitHub Models-åtkomst

- Personliga åtkomsttoken (PAT) krävs för GitHub Models  
- Token bör lagras som miljövariabler  
- Commita aldrig token eller autentiseringsuppgifter  

## Ytterligare anmärkningar

### Målgrupp

- Helt nya inom webbutveckling  
- Studenter och självlärande  
- Lärare som använder kursplanen i klassrum  
- Innehållet är utformat för tillgänglighet och gradvis färdighetsuppbyggnad  

### Pedagogisk filosofi

- Projektbaserat lärande  
- Frekventa kunskapskontroller (quiz)  
- Praktiska kodningsövningar  
- Exempel med verkliga tillämpningar  
- Fokuserar på grunder innan ramverk  

### Underhåll av repository

- Aktiv community av elever och bidragsgivare  
- Regelbundna uppdateringar av beroenden och innehåll  
- Issues och diskussioner övervakas av underhållare  
- Översättningsuppdateringar automatiserade via GitHub Actions  

### Relaterade resurser

- [Microsoft Learn-moduler](https://docs.microsoft.com/learn/)  
- [Student Hub-resurser](https://docs.microsoft.com/learn/student-hub/)  
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) rekommenderas för elever  
- Ytterligare kurser: Generativ AI, Data Science, ML, IoT kursplaner tillgängliga  

### Arbeta med specifika projekt

För detaljerade instruktioner om enskilda projekt, se README-filer i:  
- `quiz-app/README.md` - Vue 3 quizapplikation  
- `7-bank-project/README.md` - Bankapplikation med autentisering  
- `5-browser-extension/README.md` - Webbläsartilläggsutveckling  
- `6-space-game/README.md` - Canvas-baserat spelutveckling  
- `9-chat-project/README.md` - AI-chattassistentprojekt  

### Monorepo-struktur

Även om det inte är ett traditionellt monorepo innehåller detta repository flera oberoende projekt:  
- Varje lektion är självständig  
- Projekt delar inte beroenden  
- Arbeta med enskilda projekt utan att påverka andra  
- Klona hela repot för full kursupplevelse  

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Ansvarsfriskrivning**:
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, vänligen var medveten om att automatiska översättningar kan innehålla fel eller brister. Det ursprungliga dokumentet på dess modersmål bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår från användningen av denna översättning.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->