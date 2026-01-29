# AGENTS.md

## Projektoversigt

Dette er et uddannelsesmateriale-repository designet til at lære begyndere grundlæggende webudvikling. Curriculumet er et omfattende 12-ugers kursus udviklet af Microsoft Cloud Advocates, med 24 praktiske lektioner, der dækker JavaScript, CSS og HTML.

### Nøglekomponenter

- **Uddannelsesindhold**: 24 strukturerede lektioner organiseret i projektbaserede moduler
- **Praktiske projekter**: Terrarium, Skrivespil, Browserudvidelse, Rumspil, Bankapp, Kodeeditor og AI-chatassistent
- **Interaktive quizzer**: 48 quizzer med 3 spørgsmål hver (før/efter lektion vurderinger)
- **Flersproget support**: Automatiske oversættelser til 50+ sprog via GitHub Actions
- **Teknologier**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (til AI-projekter)

### Arkitektur

- Uddannelsesrepository med lektionbaseret struktur
- Hver lektionmappe indeholder README, kodeeksempler og løsninger
- Selvstændige projekter i separate mapper (quiz-app, diverse lektionprojekter)
- Oversættelsessystem ved hjælp af GitHub Actions (co-op-translator)
- Dokumentation leveret via Docsify og tilgængelig som PDF

## Opsætningskommandoer

Dette repository er primært til forbrug af uddannelsesindhold. For at arbejde med specifikke projekter:

### Opsætning af hovedrepository

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Opsætning af Quiz App (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
```

### Bankprojekt API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Start API server
npm run lint       # Run ESLint
npm run format     # Format with Prettier
```

### Browserudvidelsesprojekter

```bash
cd 5-browser-extension/solution
npm install
# Follow browser-specific extension loading instructions
```

### Rumspilsprojekter

```bash
cd 6-space-game/solution
npm install
# Open index.html in browser or use Live Server
```

### Chatprojekt (Python-backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Set GITHUB_TOKEN environment variable
python api.py
```

## Udviklingsworkflow

### For indholdsbidragydere

1. **Fork repositoryet** til din GitHub-konto
2. **Klon din fork** lokalt
3. **Opret en ny branch** til dine ændringer
4. Foretag ændringer i lektionindhold eller kodeeksempler
5. Test eventuelle kodeændringer i relevante projektmapper
6. Indsend pull requests i henhold til bidragsretningslinjer

### For lærende

1. Fork eller klon repositoryet
2. Naviger til lektionmapperne i rækkefølge
3. Læs README-filerne for hver lektion
4. Tag før-lektion quizzer på https://ff-quizzes.netlify.app/web/
5. Arbejd gennem kodeeksempler i lektionmapperne
6. Fuldfør opgaver og udfordringer
7. Tag efter-lektion quizzer

### Live udvikling

- **Dokumentation**: Kør `docsify serve` i roden (port 3000)
- **Quiz App**: Kør `npm run dev` i quiz-app mappen
- **Projekter**: Brug VS Code Live Server-udvidelsen til HTML-projekter
- **API-projekter**: Kør `npm start` i de respektive API-mapper

## Testinstruktioner

### Test af Quiz App

```bash
cd quiz-app
npm run lint       # Check for code style issues
npm run build      # Verify build succeeds
```

### Test af Bank API

```bash
cd 7-bank-project/api
npm run lint       # Check for code style issues
node server.js     # Verify server starts without errors
```

### Generel testtilgang

- Dette er et uddannelsesrepository uden omfattende automatiserede tests
- Manuel test fokuserer på:
  - Kodeeksempler kører uden fejl
  - Links i dokumentationen fungerer korrekt
  - Projektbygninger fuldføres succesfuldt
  - Eksempler følger bedste praksis

### Kontroller før indsendelse

- Kør `npm run lint` i mapper med package.json
- Bekræft, at markdown-links er gyldige
- Test kodeeksempler i browser eller Node.js
- Kontroller, at oversættelser bevarer korrekt struktur

## Kodestilretningslinjer

### JavaScript

- Brug moderne ES6+ syntaks
- Følg standard ESLint-konfigurationer leveret i projekterne
- Brug meningsfulde variabel- og funktionsnavne for uddannelsesmæssig klarhed
- Tilføj kommentarer, der forklarer koncepter for lærende
- Formater med Prettier, hvor det er konfigureret

### HTML/CSS

- Semantiske HTML5-elementer
- Principper for responsivt design
- Klare klassifikationsnavne
- Kommentarer, der forklarer CSS-teknikker for lærende

### Python

- PEP 8 stilretningslinjer
- Klare, uddannelsesmæssige kodeeksempler
- Type hints, hvor det er nyttigt for læring

### Markdown-dokumentation

- Klar overskriftsstruktur
- Kodeblokke med sprogspecifikation
- Links til yderligere ressourcer
- Skærmbilleder og billeder i `images/` mapper
- Alt-tekst til billeder for tilgængelighed

### Filorganisation

- Lektioner nummereret sekventielt (1-getting-started-lessons, 2-js-basics, osv.)
- Hvert projekt har `solution/` og ofte `start/` eller `your-work/` mapper
- Billeder gemt i lektion-specifikke `images/` mapper
- Oversættelser i `translations/{language-code}/` struktur

## Bygning og udrulning

### Quiz App udrulning (Azure Static Web Apps)

Quiz-app er konfigureret til udrulning på Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Creates dist/ folder
# Deploys via GitHub Actions workflow on push to main
```

Azure Static Web Apps konfiguration:
- **App placering**: `/quiz-app`
- **Output placering**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generering af dokumentation som PDF

```bash
npm install                    # Install docsify-to-pdf
npm run convert               # Generate PDF from docs
```

### Docsify-dokumentation

```bash
npm install -g docsify-cli    # Install Docsify globally
docsify serve                 # Serve on localhost:3000
```

### Projekt-specifikke bygninger

Hver projektmappe kan have sin egen byggeproces:
- Vue-projekter: `npm run build` skaber produktionsbundter
- Statiske projekter: Ingen byggeproces, server filer direkte

## Retningslinjer for pull requests

### Titelformat

Brug klare, beskrivende titler, der angiver ændringsområdet:
- `[Quiz-app] Tilføj ny quiz til lektion X`
- `[Lesson-3] Ret stavefejl i terrarium-projekt`
- `[Translation] Tilføj spansk oversættelse til lektion 5`
- `[Docs] Opdater opsætningsinstruktioner`

### Påkrævede kontroller

Før indsendelse af en PR:

1. **Kodekvalitet**:
   - Kør `npm run lint` i berørte projektmapper
   - Ret alle linting-fejl og advarsler

2. **Bygverifikation**:
   - Kør `npm run build`, hvis relevant
   - Sørg for, at der ikke er byggefejl

3. **Linkvalidering**:
   - Test alle markdown-links
   - Bekræft, at billedreferencer fungerer

4. **Indholdsrevision**:
   - Læs korrektur for stave- og grammatikfejl
   - Sørg for, at kodeeksempler er korrekte og uddannelsesmæssige
   - Bekræft, at oversættelser bevarer original betydning

### Bidragskrav

- Accepter Microsoft CLA (automatisk kontrol ved første PR)
- Følg [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Se [CONTRIBUTING.md](./CONTRIBUTING.md) for detaljerede retningslinjer
- Referer til problemnumre i PR-beskrivelsen, hvis relevant

### Reviewproces

- PR'er gennemgås af maintainers og fællesskabet
- Uddannelsesmæssig klarhed prioriteres
- Kodeeksempler skal følge aktuelle bedste praksis
- Oversættelser gennemgås for nøjagtighed og kulturel relevans

## Oversættelsessystem

### Automatisk oversættelse

- Bruger GitHub Actions med co-op-translator workflow
- Oversætter automatisk til 50+ sprog
- Kildemapper i hovedmapper
- Oversatte filer i `translations/{language-code}/` mapper

### Tilføjelse af manuelle oversættelsesforbedringer

1. Find filen i `translations/{language-code}/`
2. Foretag forbedringer, mens strukturen bevares
3. Sørg for, at kodeeksempler forbliver funktionelle
4. Test eventuelt lokaliseret quizindhold

### Oversættelsesmetadata

Oversatte filer inkluderer metadata-header:
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

## Fejlfinding og problemløsning

### Almindelige problemer

**Quiz-app starter ikke**:
- Kontroller Node.js version (v14+ anbefales)
- Slet `node_modules` og `package-lock.json`, kør `npm install` igen
- Kontroller for portkonflikter (standard: Vite bruger port 5173)

**API-server starter ikke**:
- Bekræft, at Node.js version opfylder minimumskrav (node >=10)
- Kontroller, om porten allerede er i brug
- Sørg for, at alle afhængigheder er installeret med `npm install`

**Browserudvidelse indlæses ikke**:
- Bekræft, at manifest.json er korrekt formateret
- Kontroller browserkonsollen for fejl
- Følg browser-specifikke installationsinstruktioner for udvidelser

**Problemer med Python-chatprojekt**:
- Sørg for, at OpenAI-pakken er installeret: `pip install openai`
- Bekræft, at GITHUB_TOKEN miljøvariablen er sat
- Kontroller GitHub Models adgangstilladelser

**Docsify serverer ikke dokumentation**:
- Installer docsify-cli globalt: `npm install -g docsify-cli`
- Kør fra repositoryets rodmappe
- Kontroller, at `docs/_sidebar.md` eksisterer

### Tips til udviklingsmiljø

- Brug VS Code med Live Server-udvidelsen til HTML-projekter
- Installer ESLint og Prettier-udvidelser for konsistent formatering
- Brug browserens DevTools til fejlfinding af JavaScript
- For Vue-projekter, installer Vue DevTools browserudvidelse

### Ydelseshensyn

- Det store antal oversatte filer (50+ sprog) betyder, at fulde kloner er store
- Brug en lav dybde klon, hvis du kun arbejder på indhold: `git clone --depth 1`
- Ekskluder oversættelser fra søgninger, når du arbejder på engelsk indhold
- Byggeprocesser kan være langsomme ved første kørsel (npm install, Vite build)

## Sikkerhedshensyn

### Miljøvariabler

- API-nøgler må aldrig committes til repositoryet
- Brug `.env` filer (allerede i `.gitignore`)
- Dokumenter påkrævede miljøvariabler i projekt-README'er

### Python-projekter

- Brug virtuelle miljøer: `python -m venv venv`
- Hold afhængigheder opdateret
- GitHub tokens bør have minimale nødvendige tilladelser

### GitHub Models adgang

- Personlige adgangstokens (PAT) kræves for GitHub Models
- Tokens bør gemmes som miljøvariabler
- Tokens eller legitimationsoplysninger må aldrig committes

## Yderligere noter

### Målgruppe

- Komplette begyndere inden for webudvikling
- Studerende og selvstændige lærende
- Lærere, der bruger curriculumet i klasseværelser
- Indholdet er designet til tilgængelighed og gradvis færdighedsopbygning

### Uddannelsesfilosofi

- Projektbaseret læringsmetode
- Hyppige videnskontroller (quizzer)
- Praktiske kodningsøvelser
- Eksempler med anvendelse i den virkelige verden
- Fokus på grundlæggende før frameworks

### Repository-vedligeholdelse

- Aktivt fællesskab af lærende og bidragydere
- Regelmæssige opdateringer af afhængigheder og indhold
- Problemer og diskussioner overvåges af maintainers
- Oversættelsesopdateringer automatiseret via GitHub Actions

### Relaterede ressourcer

- [Microsoft Learn-moduler](https://docs.microsoft.com/learn/)
- [Student Hub-ressourcer](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) anbefales til lærende
- Yderligere kurser: Generativ AI, Data Science, ML, IoT curriculum tilgængelige

### Arbejde med specifikke projekter

For detaljerede instruktioner om individuelle projekter, se README-filerne i:
- `quiz-app/README.md` - Vue 3 quiz-applikation
- `7-bank-project/README.md` - Bankapplikation med autentifikation
- `5-browser-extension/README.md` - Udvikling af browserudvidelser
- `6-space-game/README.md` - Canvas-baseret spiludvikling
- `9-chat-project/README.md` - AI-chatassistentprojekt

### Monorepo-struktur

Selvom det ikke er en traditionel monorepo, indeholder dette repository flere uafhængige projekter:
- Hver lektion er selvstændig
- Projekter deler ikke afhængigheder
- Arbejd på individuelle projekter uden at påvirke andre
- Klon hele repoet for den fulde curriculumoplevelse

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på at sikre nøjagtighed, skal det bemærkes, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi påtager os ikke ansvar for eventuelle misforståelser eller fejltolkninger, der måtte opstå som følge af brugen af denne oversættelse.