# AGENTS.md

## Projektöversikt

Detta är ett utbildningskursförråd för att lära ut grunderna i webbutveckling till nybörjare. Kursplanen är en omfattande 12-veckorskurs utvecklad av Microsoft Cloud Advocates, med 24 praktiskt inriktade lektioner som täcker JavaScript, CSS och HTML.

### Huvudkomponenter

- **Utbildningsinnehåll**: 24 strukturerade lektioner organiserade i projektbaserade moduler
- **Praktiska Projekt**: Terrarium, Skrivspel, Webbläsartillägg, Rymdspel, Bankapp, Kodredigerare och AI-chattassistent
- **Interaktiva Quiz**: 48 quiz med 3 frågor vardera (före/efter-lektionsbedömningar)
- **Fler språkstöd**: Automatiska översättningar till 50+ språk via GitHub Actions
- **Teknologier**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (för AI-projekt)

### Arkitektur

- Utbildningsförråd med lektionsbaserad struktur
- Varje lektionsmapp innehåller README, kodexempel och lösningar
- Fristående projekt i separata kataloger (quiz-app, olika lektionsprojekt)
- Översättningssystem med GitHub Actions (co-op-translator)
- Dokumentation serveras via Docsify och finns tillgänglig som PDF

## Uppstartskommandon

Detta förråd är främst för konsumtion av utbildningsinnehåll. För arbete med specifika projekt:

### Huvudförråd Uppstart

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
# Sätt GITHUB_TOKEN-miljövariabeln
python api.py
```

## Utvecklingsarbetsflöde

### För innehållsbidragsgivare

1. **Fork:a förrådet** till ditt GitHub-konto
2. **Klon:a din fork** lokalt
3. **Skapa en ny branch** för dina ändringar
4. Gör ändringar i lektionsinnehåll eller kodexempel
5. Testa eventuella kodändringar i relevanta projektmappar
6. Skicka pull requests enligt bidragsriktlinjerna

### För lärande

1. Forka eller klona förrådet
2. Navigera sekventiellt till lektionsmapparna
3. Läs README-filer för varje lektion
4. Gör för-lektionsquiz på https://ff-quizzes.netlify.app/web/
5. Arbeta igenom kodexempel i lektionsmapparna
6. Slutför uppgifter och utmaningar
7. Gör efter-lektionsquizzen

### Live-utveckling

- **Dokumentation**: Kör `docsify serve` i root (port 3000)
- **Quiz App**: Kör `npm run dev` i quiz-app-mappen
- **Projekt**: Använd VS Code Live Server-extension för HTML-projekt
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

### Allmän testmetod

- Detta är ett utbildningsförråd utan fullständiga automatiserade tester
- Manuell testning fokuserar på:
  - Kodexempel körs utan fel
  - Länkar i dokumentationen fungerar korrekt
  - Projekt byggs utan problem
  - Exempel följer bästa praxis

### Kontroller före inskickning

- Kör `npm run lint` i kataloger med package.json
- Verifiera att markdown-länkar är giltiga
- Testa kodexempel i webbläsare eller Node.js
- Kontrollera att översättningar bibehåller korrekt struktur

## Kodstilriktlinjer

### JavaScript

- Använd modern ES6+ syntax
- Följ angivna ESLint-konfigurationer i projekten
- Använd meningsfulla variabel- och funktionsnamn för pedagogisk tydlighet
- Lägg till kommentarer som förklarar koncept för elever
- Formatera med Prettier där det är konfigurerat

### HTML/CSS

- Semantiska HTML5-element
- Responsiva designprinciper
- Tydliga klassnamnskonventioner
- Kommentarer som förklarar CSS-tekniker för elever

### Python

- PEP 8-stilriktlinjer
- Klara, pedagogiska kodexempel
- Typangivelser där det är hjälpsamt för lärande

### Markdown Dokumentation

- Klar rubrikhierarki
- Kodblock med språkspecifikation
- Länkar till ytterligare resurser
- Skärmdumpar och bilder i `images/`-mappar
- Alt-text för bilder för tillgänglighet

### Filorganisation

- Lektioner numrerade sekventiellt (1-getting-started-lessons, 2-js-basics, osv)
- Varje projekt har `solution/` och ofta `start/` eller `your-work/`-mappar
- Bilder lagras i lektionsspecifika `images/`-mappar
- Översättningar i `translations/{language-code}/`-struktur

## Bygg och distribution

### Quiz App-distribution (Azure Static Web Apps)

quiz-app är konfigurerad för distribution via Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Skapar mappen dist/
# Distribuerar via GitHub Actions workflow vid push till main
```

Azure Static Web Apps-konfiguration:
- **App-plats**: `/quiz-app`
- **Utdata-plats**: `dist`
- **Arbetsflöde**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

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

### Projekt-specifika byggprocesser

Varje projektkatalog kan ha sin egen byggprocess:
- Vue-projekt: `npm run build` skapar produktionspaket
- Statiska projekt: Ingen byggsteg, servera filer direkt

## Riktlinjer för Pull Requests

### Titelformat

Använd klara, beskrivande titlar som anger ändringsområde:
- `[Quiz-app] Lägg till nytt quiz för lektion X`
- `[Lesson-3] Åtgärda skrivfel i terrarium-projektet`
- `[Translation] Lägg till spansk översättning för lektion 5`
- `[Docs] Uppdatera uppstartsinstruktioner`

### Obligatoriska kontroller

Innan inskickande av PR:

1. **Kodkvalitet**:
   - Kör `npm run lint` i berörda projektmappar
   - Åtgärda alla lint-fel och varningar

2. **Byggverifiering**:
   - Kör `npm run build` om tillämpligt
   - Säkerställ att inga byggfel förekommer

3. **Länkvalidering**:
   - Testa alla markdown-länkar
   - Verifiera bildreferenser fungerar

4. **Innehållsgranskning**:
   - Korrekturläs stavning och grammatik
   - Säkerställ att kodexempel är korrekta och pedagogiska
   - Kontrollera att översättningar bibehåller ursprunglig betydelse

### Bidragskrav

- Godkänn Microsoft CLA (automatisk kontroll vid första PR)
- Följ [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Se [CONTRIBUTING.md](./CONTRIBUTING.md) för detaljerade riktlinjer
- Referera ärendenummer i PR-beskrivning om tillämpligt

### Granskningsprocess

- PR:er granskas av underhållare och community
- Pedagogisk tydlighet prioriteras
- Kodexempel ska följa aktuell bästa praxis
- Översättningar granskas för noggrannhet och kulturell lämplighet

## Översättningssystem

### Automatisk översättning

- Använder GitHub Actions med co-op-translator-arbetsflöde
- Översätter automatiskt till 50+ språk
- Källfiler i huvudkataloger
- Översatta filer i `translations/{language-code}/`-mappar

### Lägg till manuella förbättringar

1. Lokalisera fil i `translations/{language-code}/`
2. Gör förbättringar samtidigt som strukturen bevaras
3. Säkerställ att kodexempel förblir funktionella
4. Testa eventuell lokaliserad quiz-innehåll

### Översättningsmetadata

Översatta filer innehåller metadata-huvud:
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
- Radera `node_modules` och `package-lock.json`, kör `npm install` på nytt
- Kontrollera portar (standard: Vite använder port 5173)

**API-server startar inte**:
- Verifiera att Node.js-version är tillräcklig (node >=10)
- Kontrollera om port redan används
- Säkerställ att alla beroenden är installerade med `npm install`

**Webbläsartillägg laddas inte**:
- Kontrollera att manifest.json är korrekt formaterad
- Granska webbläsarkonsolen för fel
- Följ webbläsarspecifika installationsinstruktioner

**Problem med Python-chatprojekt**:
- Kontrollera att OpenAI-paket är installerat: `pip install openai`
- Verifiera att GITHUB_TOKEN-miljövariabel är satt
- Kontrollera GitHub Models-accessbehörigheter

**Docsify serverar inte dokumentation**:
- Installera docsify-cli globalt: `npm install -g docsify-cli`
- Kör från förrådets rotkatalog
- Kontrollera att `docs/_sidebar.md` finns

### Tips för utvecklingsmiljö

- Använd VS Code med Live Server-extension för HTML-projekt
- Installera ESLint- och Prettier-extensions för konsekvent formatering
- Använd webbläsarens DevTools för att felsöka JavaScript
- För Vue-projekt, installera Vue DevTools webbläsartillägg

### Prestandaöverväganden

- Stort antal översatta filer (50+ språk) gör fulla kloner stora
- Använd shallow clone om du bara jobbar med innehåll: `git clone --depth 1`
- Exkludera översättningar från sökningar vid arbete med engelskt innehåll
- Byggprocesserna kan vara långsamma vid första körningen (npm install, Vite build)

## Säkerhetsöverväganden

### Miljövariabler

- API-nycklar ska aldrig committas till förrådet
- Använd `.env`-filer (redan i `.gitignore`)
- Dokumentera nödvändiga miljövariabler i projekt-README-filer

### Python-projekt

- Använd virtuella miljöer: `python -m venv venv`
- Håll beroenden uppdaterade
- GitHub-token bör ha minimala behörigheter

### GitHub Models Access

- Personliga Access Tokens (PAT) krävs för GitHub Models
- Tokens bör lagras som miljövariabler
- Commita aldrig tokens eller inloggningsuppgifter

## Ytterligare Noteringar

### Målgrupp

- Absoluta nybörjare inom webbutveckling
- Studenter och självlärande
- Lärare som använder kursplanen i klassrum
- Innehållet är utformat för tillgänglighet och gradvis färdighetsuppbyggnad

### Pedagogisk filosofi

- Projektbaserat lärande
- Frekventa kunskapskontroller (quiz)
- Praktiska kodövningar
- Verklighetsnära exempel
- Fokus på grunderna innan ramverk

### Förrådsunderhåll

- Aktiv community av elever och bidragsgivare
- Regelbundna uppdateringar av beroenden och innehåll
- Ärenden och diskussioner övervakas av underhållare
- Översättningsuppdateringar automatiserade via GitHub Actions

### Relaterade resurser

- [Microsoft Learn-moduler](https://docs.microsoft.com/learn/)
- [Student Hub-resurser](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) rekommenderas för elever
- Ytterligare kurser: Generativ AI, Data Science, ML, IoT kursplaner tillgängliga

### Arbeta med specifika projekt

För detaljerade instruktioner om individuella projekt, se README-filer i:
- `quiz-app/README.md` - Vue 3 quiz-applikation
- `7-bank-project/README.md` - Bankapplikation med autentisering
- `5-browser-extension/README.md` - Utveckling av webbläsartillägg
- `6-space-game/README.md` - Canvas-baserat spel
- `9-chat-project/README.md` - AI-chattassistentprojekt

### Monorepo-struktur

Även om detta inte är ett traditionellt monorepo innehåller förrådet flera oberoende projekt:
- Varje lektion är självständig
- Projekten delar inga beroenden
- Arbeta med individuella projekt utan att påverka andra
- Klona hela förrådet för att få hela kursplanen upplevelse

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Friskrivning**:
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, var god observera att automatiska översättningar kan innehålla fel eller brister. Det ursprungliga dokumentet på dess modersmål bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för några missförstånd eller feltolkningar som uppstår från användningen av denna översättning.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->