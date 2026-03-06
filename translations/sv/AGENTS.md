# AGENTS.md

## Projektöversikt

Detta är ett utbildningsprogramsförråd för att lära ut grunderna i webbdesign till nybörjare. Kursplanen är en omfattande 12-veckorskurs utvecklad av Microsoft Cloud Advocates, med 24 praktiska lektioner som täcker JavaScript, CSS och HTML.

### Viktiga komponenter

- **Utbildningsinnehåll**: 24 strukturerade lektioner organiserade i projektbaserade moduler
- **Praktiska projekt**: Terrarium, Typningsspel, Webbläsartillägg, Rymdspel, Bankapp, Kodredigerare och AI-chattassistent
- **Interaktiva quiz**: 48 quiz med 3 frågor vardera (för- och efter lektion)
- **Flerspråkigt stöd**: Automatiska översättningar för 50+ språk via GitHub Actions
- **Teknologier**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (för AI-projekt)

### Arkitektur

- Utbildningsförråd med lektionbaserad struktur
- Varje lektionsmapp innehåller README, kodexempel och lösningar
- Fristående projekt i separata kataloger (quiz-app, olika lektionsprojekt)
- Översättningssystem med GitHub Actions (co-op-translator)
- Dokumentation serveras via Docsify och finns tillgänglig som PDF

## Installationskommandon

Detta förråd är främst för konsumtion av utbildningsinnehåll. För arbete med specifika projekt:

### Huvudförrådets installation

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz App installation (Vue 3 + Vite)

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
# Sätt miljövariabeln GITHUB_TOKEN
python api.py
```

## Utvecklingsflöde

### För innehållsbidragare

1. **Fork:a förrådet** till ditt GitHub-konto
2. **Klona din fork** lokalt
3. **Skapa en ny gren** för dina ändringar
4. Gör ändringar i lektionsinnehåll eller kodexempel
5. Testa eventuella kodändringar i relevanta projektkataloger
6. Skicka in pull requests enligt bidragsriktlinjerna

### För elever

1. Fork:a eller klona förrådet
2. Navigera till lektionskataloger i tur och ordning
3. Läs README-filer för varje lektion
4. Gör för-quiz på https://ff-quizzes.netlify.app/web/
5. Arbeta igenom kodexempel i lektionsmapparna
6. Genomför uppgifter och utmaningar
7. Avsluta med efter-quiz

### Live-utveckling

- **Dokumentation**: Kör `docsify serve` i rotkatalogen (port 3000)
- **Quiz App**: Kör `npm run dev` i quiz-app-katalogen
- **Projekt**: Använd VS Codes Live Server-förlängning för HTML-projekt
- **API-projekt**: Kör `npm start` i respektive API-katalog

## Testinstruktioner

### Testning av Quiz App

```bash
cd quiz-app
npm run lint       # Kontrollera kodstilproblem
npm run build      # Verifiera att byggandet lyckas
```

### Testning av Bank API

```bash
cd 7-bank-project/api
npm run lint       # Kontrollera kodstilproblem
node server.js     # Verifiera att servern startar utan fel
```

### Allmän testmetod

- Detta är ett utbildningsförråd utan omfattande automatiska tester
- Manuella tester fokuserar på:
  - Kodexempel som körs utan fel
  - Länkar i dokumentationen fungerar korrekt
  - Projekten byggs färdigt utan fel
  - Exemplen följer bästa praxis

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
- Responsiv designprinciper
- Klara klassnamnskonventioner
- Kommentarer som förklarar CSS-tekniker för elever

### Python

- PEP 8 stilriktlinjer
- Klara, pedagogiska kodexempel
- Typangivelser där det är hjälpsamt för inlärning

### Markdown-dokumentation

- Klar rubrikhierarki
- Kodblock med språkangivelse
- Länkar till ytterligare resurser
- Skärmdumpar och bilder i `images/`-kataloger
- Alternativtext för bilder för tillgänglighet

### Filorganisation

- Lektioner numrerade sekventiellt (1-getting-started-lessons, 2-js-basics, osv)
- Varje projekt har `solution/` och ofta `start/` eller `your-work/` kataloger
- Bilder lagras i lektionsspecifika `images/` mappar
- Översättningar i `translations/{language-code}/` struktur

## Build och Utplacering

### Quiz App-utplacering (Azure Static Web Apps)

Quiz-appen är konfigurerad för utplacering på Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Skapar dist/ mappen
# Distribuerar via GitHub Actions arbetsflöde vid push till main
```

Azure Static Web Apps-konfiguration:
- **Appplats**: `/quiz-app`
- **Utmatningsplats**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generering av dokumentations-PDF

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
- Statiska projekt: Inget byggsteg, servera filer direkt

## Riktlinjer för Pull Requests

### Titelformat

Använd klara, beskrivande titlar som anger ändringsområde:
- `[Quiz-app] Lägg till nytt quiz för lektion X`
- `[Lesson-3] Rätta stavfel i terrarium-projekt`
- `[Translation] Lägg till spansk översättning för lektion 5`
- `[Docs] Uppdatera installationsinstruktioner`

### Obligatoriska kontroller

Innan PR skickas:

1. **Kodkvalitet**:
   - Kör `npm run lint` i berörda projektkataloger
   - Åtgärda alla lint-varningar och fel

2. **Byggverifiering**:
   - Kör `npm run build` där applicerbart
   - Säkerställ inga byggfel

3. **Länkverifiering**:
   - Testa alla markdown-länkar
   - Verifiera att bildreferenser fungerar

4. **Innehållsgranskning**:
   - Korrekturläs stavning och grammatik
   - Säkerställ att kodexempel är korrekta och pedagogiska
   - Verifiera att översättningar bevarar ursprunglig betydelse

### Bidragskrav

- Godkänn Microsoft CLA (automatisk kontroll vid första PR)
- Följ [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Se [CONTRIBUTING.md](./CONTRIBUTING.md) för detaljerade riktlinjer
- Referera ärendenummer i PR-beskrivning vid tillämplighet

### Granskningsprocess

- PR granskas av underhållare och community
- Pedagogisk tydlighet prioriteras
- Kodexempel ska följa aktuella bästa praxis
- Översättningar granskas för noggrannhet och kulturrelevans

## Översättningssystem

### Automatisk översättning

- Använder GitHub Actions med co-op-translator workflow
- Översätter automatiskt till 50+ språk
- Källfiler i huvudkataloger
- Översatta filer i `translations/{language-code}/` kataloger

### Lägga till manuell översättningsförbättring

1. Hitta fil i `translations/{language-code}/`
2. Gör förbättringar utan att ändra struktur
3. Säkerställ att kodexempel förblir fungerande
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

## Felsökning och Problemlösning

### Vanliga problem

**Quiz-appen startar inte**:
- Kontrollera Node.js version (v14+ rekommenderas)
- Radera `node_modules` och `package-lock.json`, kör `npm install` igen
- Kontrollera portkonflikter (standard: Vite använder port 5173)

**API-servern startar inte**:
- Kontrollera att Node.js version är tillräcklig (node >=10)
- Kontrollera att porten inte redan används
- Säkerställ alla beroenden installerade med `npm install`

**Webbläsartillägg laddas inte**:
- Kontrollera att manifest.json är korrekt formaterad
- Granska webbläsarkonsol för fel
- Följ webbläsarspecifika installationsanvisningar

**Problem med Python-chattprojekt**:
- Säkerställ att OpenAI-paket är installerat: `pip install openai`
- Kontrollera att GITHUB_TOKEN miljövariabel är satt
- Granska GitHub Models åtkomstbehörigheter

**Docsify serverar inte dokumentation**:
- Installera docsify-cli globalt: `npm install -g docsify-cli`
- Kör från förrådets rotkatalog
- Kontrollera att `docs/_sidebar.md` finns

### Tips för utvecklingsmiljö

- Använd VS Code med Live Server-förlängning för HTML-projekt
- Installera ESLint och Prettier-förlängningar för konsekvent formatering
- Använd webbläsarens DevTools för JavaScript-felsökning
- För Vue-projekt, installera Vue DevTools webbläsartillägg

### Prestandahänsyn

- Stort antal översatta filer (50+ språk) gör fulla kloner stora
- Använd grundklon om du bara arbetar med innehåll: `git clone --depth 1`
- Exkludera översättningar från sökningar när du jobbar på engelskt innehåll
- Byggprocesser kan vara långsamma vid första körning (npm install, Vite build)

## Säkerhetshänsyn

### Miljövariabler

- API-nycklar ska aldrig checkas in i förrådet
- Använd `.env`-filer (redan i `.gitignore`)
- Dokumentera nödvändiga miljövariabler i projektens README-filer

### Python-projekt

- Använd virtuella miljöer: `python -m venv venv`
- Håll beroenden uppdaterade
- GitHub-tokens bör ha minimala nödvändiga behörigheter

### GitHub Models åtkomst

- Personliga åtkomsttokens (PAT) krävs för GitHub Models
- Tokens ska sparas som miljövariabler
- Aldrig checka in tokens eller inloggningsuppgifter

## Ytterligare anteckningar

### Målgrupp

- Kompletta nybörjare inom webbdesign
- Studenter och självstudier
- Lärare som använder kursplanen i klassrum
- Innehållet är utformat för tillgänglighet och gradvis färdighetsutveckling

### Pedagogisk filosofi

- Projektbaserat lärande
- Frekventa kunskapskontroller (quiz)
- Praktiska kodningsövningar
- Exempel på verkliga tillämpningar
- Fokus på grunder innan ramverk

### Förrådets underhåll

- Aktiv community av elever och bidragsgivare
- Regelbundna uppdateringar av beroenden och innehåll
- Ärenden och diskussioner övervakas av underhållare
- Översättningsuppdateringar automatiseras via GitHub Actions

### Relaterade resurser

- [Microsoft Learn-moduler](https://docs.microsoft.com/learn/)
- [Student Hub-resurser](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) rekommenderas för elever
- Ytterligare kurser: Generativ AI, Data Science, ML, IoT kursplaner tillgängliga

### Arbeta med specifika projekt

För detaljerade instruktioner om enskilda projekt, se README-filer i:
- `quiz-app/README.md` - Vue 3 quiz-applikation
- `7-bank-project/README.md` - Bankapplikation med autentisering
- `5-browser-extension/README.md` - Webbläsartilläggsutveckling
- `6-space-game/README.md` - Canvas-baserat spelutveckling
- `9-chat-project/README.md` - AI chattassistentprojekt

### Monorepo-struktur

Även om det inte är ett traditionellt monorepo innehåller detta förråd flera oberoende projekt:
- Varje lektion är självständig
- Projekten delar inte beroenden
- Arbeta på individuella projekt utan att påverka andra
- Klona hela förrådet för hela kursplanens upplevelse

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, var vänlig observera att automatiska översättningar kan innehålla fel eller brister. Originaldokumentet på dess ursprungliga språk ska betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår till följd av användningen av denna översättning.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->