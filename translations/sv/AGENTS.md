# AGENTS.md

## Projektöversikt

Detta är ett utbildningsmaterial för att lära ut grunderna i webbutveckling till nybörjare. Kursen är en omfattande 12-veckors kurs utvecklad av Microsoft Cloud Advocates, med 24 praktiska lektioner som täcker JavaScript, CSS och HTML.

### Viktiga komponenter

- **Utbildningsinnehåll**: 24 strukturerade lektioner organiserade i projektbaserade moduler
- **Praktiska projekt**: Terrarium, Skrivspel, Webbläsartillägg, Rymdspel, Bankapp, Kodredigerare och AI-chattassistent
- **Interaktiva quiz**: 48 quiz med 3 frågor vardera (före-/efter-lektion bedömningar)
- **Fler språkstöd**: Automatiska översättningar till 50+ språk via GitHub Actions
- **Teknologier**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (för AI-projekt)

### Arkitektur

- Utbildningsförråd med lektionsbaserad struktur
- Varje lektionsmapp innehåller README, kodexempel och lösningar
- Fristående projekt i separata kataloger (quiz-app, olika lektionsprojekt)
- Översättningssystem som använder GitHub Actions (co-op-translator)
- Dokumentation serveras via Docsify och finns som PDF

## Uppstarts-kommandon

Det här arkivet är främst för konsumtion av utbildningsinnehåll. För att arbeta med specifika projekt:

### Huvudförrådets uppsättning

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz App-uppsättning (Vue 3 + Vite)

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
# Sätt miljövariabeln GITHUB_TOKEN
python api.py
```

## Utvecklingsarbetsflöde

### För innehållsbidragsgivare

1. **Fork:a förrådet** till ditt GitHub-konto
2. **Klon:a din fork** lokalt
3. **Skapa en ny gren** för dina ändringar
4. Gör ändringar i lektionsinnehåll eller kodexempel
5. Testa ändringar i motsvarande projektkataloger
6. Skicka in pull requests i enlighet med bidragsriktlinjer

### För elever

1. Fork:a eller klona förrådet
2. Navigera sekventiellt genom lektionskataloger
3. Läs README-filer för varje lektion
4. Gör för-lektionsquiz på https://ff-quizzes.netlify.app/web/
5. Arbeta igenom kodexempel i lektionsmapparna
6. Utför uppgifter och utmaningar
7. Gör efter-lektionsquiz

### Live-utveckling

- **Dokumentation**: Kör `docsify serve` i roten (port 3000)
- **Quiz App**: Kör `npm run dev` i quiz-app-katalogen
- **Projekt**: Använd VS Code Live Server tillägg för HTML-projekt
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
npm run lint       # Kontrollera kodstilproblem
node server.js     # Verifiera att servern startar utan fel
```

### Allmän testmetod

- Detta är ett utbildningsförråd utan omfattande automatiska tester
- Manuella tester fokuserar på:
  - Kodexempel körs utan fel
  - Länkar i dokumentationen fungerar korrekt
  - Projekten byggs klart utan problem
  - Exempel följer bästa praxis

### Kontroll före inskick

- Kör `npm run lint` i kataloger med package.json
- Verifiera att markdown-länkar är giltiga
- Testa kodexempel i webbläsare eller Node.js
- Kontrollera att översättningar behåller korrekt struktur

## Kodstilriktlinjer

### JavaScript

- Använd modern ES6+ syntax
- Följ standard ESLint-konfigurationer som finns i projekten
- Använd meningsfulla variabel- och funktionsnamn för pedagogisk tydlighet
- Lägg till kommentarer som förklarar koncept för elever
- Formatera med Prettier där det är konfigurerat

### HTML/CSS

- Semantiska HTML5-element
- Responsiv designprinciper
- Klara klassnamnskonventioner
- Kommentarer som förklarar CSS-tekniker för elever

### Python

- PEP 8-stilriktlinjer
- Klara, pedagogiska kodexempel
- Typanvisningar där det är hjälpsamt för lärande

### Markdown-dokumentation

- Klar rubrikhierarki
- Kodblock med språkspecifikation
- Länkar till ytterligare resurser
- Skärmdumpar och bilder i `images/` mappar
- Alt-text för bilder för tillgänglighet

### Filorganisation

- Lektioner numrerade sekventiellt (1-getting-started-lessons, 2-js-basics, etc.)
- Varje projekt har `solution/` och ofta `start/` eller `your-work/` mappar
- Bilder lagras i lektionsspecifika `images/` mappar
- Översättningar i `translations/{language-code}/` struktur

## Bygg och distribution

### Distribution av Quiz App (Azure Static Web Apps)

quiz-app är konfigurerad för distribution via Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Skapar dist/-mappen
# Distribuerar via GitHub Actions-arbetsflöde vid push till main
```

Azure Static Web Apps-konfiguration:
- **App plats**: `/quiz-app`
- **Utdata plats**: `dist`
- **Arbetsflöde**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

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

### Projekt-specifika byggen

Varje projektmapp kan ha egen byggprocess:
- Vue-projekt: `npm run build` skapar produktionspaket
- Statiska projekt: Ingen byggsteg, filer serveras direkt

## Pull Request-riktlinjer

### Titelformat

Använd klara, beskrivande titlar som tydligt anger ändringsområde:
- `[Quiz-app] Lägg till nytt quiz för lektion X`
- `[Lesson-3] Rätta stavfel i terrarium-projekt`
- `[Translation] Lägg till spansk översättning för lektion 5`
- `[Docs] Uppdatera installationsinstruktioner`

### Obligatoriska kontroller

Innan PR skickas in:

1. **Kodkvalitet**:
   - Kör `npm run lint` i berörda projektkataloger
   - Åtgärda alla lint-fel och varningar

2. **Byggverifiering**:
   - Kör `npm run build` om tillämpligt
   - Säkerställ inga byggfel

3. **Länkvalidering**:
   - Testa alla markdown-länkar
   - Verifiera bildreferenser fungerar

4. **Innehållsgranskning**:
   - Korrekturläs för stavning och grammatik
   - Säkerställ att kodexempel är korrekta och pedagogiska
   - Kontrollera att översättningar bevarar ursprungligt innehåll

### Bidragskrav

- Godkänn Microsoft CLA (automatiskt vid första PR)
- Följ [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Se [CONTRIBUTING.md](./CONTRIBUTING.md) för detaljerade riktlinjer
- Referera ärendenummer i PR-beskrivning vid behov

### Granskningsprocess

- PR granskas av underhållare och community
- Pedagogisk tydlighet prioriteras
- Kodexempel ska följa aktuella bästa praxis
- Översättningar granskas för korrekthet och kulturell anpassning

## Översättningssystem

### Automatisk översättning

- Använder GitHub Actions med co-op-translator arbetsflöde
- Översätter till 50+ språk automatiskt
- Källfiler i huvuddirektorier
- Översatta filer i `translations/{language-code}/` kataloger

### Lägg till manuella förbättringar

1. Hitta fil i `translations/{language-code}/`
2. Gör förbättringar medan strukturen bevaras
3. Säkerställ att kodexempel fungerar som de ska
4. Testa eventuellt lokalt quiz-innehåll

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

**Quiz app startar inte**:
- Kontrollera Node.js version (v14+ rekommenderas)
- Radera `node_modules` och `package-lock.json`, kör `npm install` igen
- Kontrollera om porten är upptagen (standard: Vite använder port 5173)

**API-servern startar inte**:
- Kontrollera att Node.js version är tillräckligt hög (node >=10)
- Kontrollera om porten redan används
- Säkerställ att alla beroenden är installerade med `npm install`

**Webbläsartillägg laddas inte**:
- Kontrollera att manifest.json är korrekt formaterad
- Kontrollera webbläsarkonsolen för fel
- Följ installationsinstruktioner för webbläsarspecifika tillägg

**Problem med Python-chattprojektet**:
- Säkerställ att OpenAI-paketet är installerat: `pip install openai`
- Verifiera att miljövariabeln GITHUB_TOKEN är satt
- Kontrollera åtkomsttillstånd för GitHub Models

**Docsify serverar inte dokumentation**:
- Installera docsify-cli globalt: `npm install -g docsify-cli`
- Kör från förrådets rotkatalog
- Kontrollera att `docs/_sidebar.md` finns

### Utvecklingsmiljötips

- Använd VS Code med Live Server-tillägg för HTML-projekt
- Installera ESLint och Prettier-tillägg för konsekvent formatering
- Använd webbläsarens DevTools för JavaScript-felsökning
- För Vue-projekt, installera Vue DevTools webbläsartillägg

### Prestandaöverväganden

- Stort antal översatta filer (50+ språk) gör fulla kloningar stora
- Använd grundlig kloning för endast innehåll: `git clone --depth 1`
- Exkludera översättningar från sökningar när du arbetar med engelskt innehåll
- Byggprocesser kan vara långsamma vid första körning (npm install, Vite build)

## Säkerhetsöverväganden

### Miljövariabler

- API-nycklar ska aldrig committas till förrådet
- Använd `.env`-filer (redan i `.gitignore`)
- Dokumentera nödvändiga miljövariabler i projektets README

### Python-projekt

- Använd virtuella miljöer: `python -m venv venv`
- Håll beroenden uppdaterade
- GitHub-tokens bör ha minimala nödvändiga behörigheter

### GitHub Models-åtkomst

- Personliga access tokens (PAT) krävs för GitHub Models
- Tokens ska lagras som miljövariabler
- Aldrig committa tokens eller credentials

## Ytterligare anteckningar

### Målgrupp

- Fullständiga nybörjare i webbutveckling
- Studenter och självlärande
- Lärare som använder kursmaterial i klassrum
- Innehållet är utformat för tillgänglighet och gradvis kompetensuppbyggnad

### Pedagogisk filosofi

- Projektbaserat lärande
- Frekventa kunskapskontroller (quiz)
- Praktiska kodningsövningar
- Exempel på verkliga tillämpningar
- Fokus på grunder innan ramverk

### Underhåll av förrådet

- Aktiv community av elever och bidragsgivare
- Regelbundna uppdateringar av beroenden och innehåll
- Ärenden och diskussioner övervakas av underhållare
- Översättningsuppdateringar automatiseras via GitHub Actions

### Relaterade resurser

- [Microsoft Learn-moduler](https://docs.microsoft.com/learn/)
- [Student Hub-resurser](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) rekommenderas för elever
- Ytterligare kurser: Generativ AI, Data Science, ML, IoT-kurser tillgängliga

### Arbeta med specifika projekt

För detaljerade instruktioner om individuella projekt, se README-filer i:
- `quiz-app/README.md` - Vue 3 quiz applikation
- `7-bank-project/README.md` - Bankapplikation med autentisering
- `5-browser-extension/README.md` - Utveckling av webbläsartillägg
- `6-space-game/README.md` - Canvas-baserat spel
- `9-chat-project/README.md` - AI chatassistentprojekt

### Monorepo-struktur

Även om detta inte är ett traditionellt monorepo, innehåller förrådet flera fristående projekt:
- Varje lektion är självständig
- Projekten delar inte beroenden
- Arbeta med enskilda projekt utan att påverka andra
- Klona hela förrådet för att få hela kursupplevelsen

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, vänligen observera att automatiska översättningar kan innehålla fel eller brister. Det ursprungliga dokumentet på dess modersmål ska betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->