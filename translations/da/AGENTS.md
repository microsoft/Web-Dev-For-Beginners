# AGENTS.md

## Projektoversigt

Dette er et undervisningspensum-arkiv til at undervise nybegyndere i grundlæggende webudvikling. Pensumet er et omfattende 12-ugers kursus udviklet af Microsoft Cloud Advocates, med 24 praktiske lektioner, der dækker JavaScript, CSS og HTML.

### Hovedkomponenter

- **Undervisningsindhold**: 24 strukturerede lektioner organiseret i projektbaserede moduler  
- **Praktiske projekter**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor og AI Chat Assistant  
- **Interaktive quizzer**: 48 quizzer med 3 spørgsmål hver (før/efter lektion vurderinger)  
- **Flersproget support**: Automatiske oversættelser til 50+ sprog via GitHub Actions  
- **Teknologier**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (til AI-projekter)  

### Arkitektur

- Undervisningsarkiv med lektionbaseret struktur  
- Hver lektion mappe indeholder README, kodeeksempler og løsninger  
- Selvstændige projekter i separate mapper (quiz-app, diverse lektionprojekter)  
- Oversættelsessystem ved hjælp af GitHub Actions (co-op-translator)  
- Dokumentation serveret via Docsify og tilgængelig som PDF  

## Setup-kommandoer

Dette arkiv er primært til forbrug af undervisningsindhold. For arbejde med specifikke projekter:

### Hoved Arkiv Setup

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```
  
### Quiz App Setup (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Start udviklingsserver
npm run build      # Byg til produktion
npm run lint       # Kør ESLint
```
  
### Bank Projekt API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Start API-server
npm run lint       # Kør ESLint
npm run format     # Formater med Prettier
```
  
### Browser Extension Projekter

```bash
cd 5-browser-extension/solution
npm install
# Følg browser-specifikke instruktioner til indlæsning af udvidelser
```
  
### Space Game Projekter

```bash
cd 6-space-game/solution
npm install
# Åbn index.html i browser eller brug Live Server
```
  
### Chat Projekt (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Indstil miljøvariablen GITHUB_TOKEN
python api.py
```
  
## Udviklingsworkflow

### For Indholdsbidragydere

1. **Fork arkivet** til din GitHub-konto  
2. **Klon din fork** lokalt  
3. **Opret en ny gren** til dine ændringer  
4. Lav ændringer i lektionens indhold eller kodeeksempler  
5. Test eventuelle kodeændringer i relevante projektmapper  
6. Indsend pull requests i henhold til bidragsretningslinjer  

### For Lærende

1. Fork eller klon arkivet  
2. Naviger gennem lektionmapper sekventielt  
3. Læs README-filer for hver lektion  
4. Gennemfør før-lektions quizzer på https://ff-quizzes.netlify.app/web/  
5. Arbejd igennem kodeeksempler i lektionsmapper  
6. Fuldfør opgaver og udfordringer  
7. Tag efter-lektions quizzer  

### Live Udvikling

- **Dokumentation**: Kør `docsify serve` i roden (port 3000)  
- **Quiz App**: Kør `npm run dev` i quiz-app mappen  
- **Projekter**: Brug VS Code Live Server extension til HTML projekter  
- **API Projekter**: Kør `npm start` i respektive API mapper  

## Testinstruktioner

### Quiz App Test

```bash
cd quiz-app
npm run lint       # Tjek for kode stil problemer
npm run build      # Bekræft at bygningen lykkes
```
  
### Bank API Test

```bash
cd 7-bank-project/api
npm run lint       # Tjek for kode stil problemer
node server.js     # Bekræft at serveren starter uden fejl
```
  
### Generel Test Tilgang

- Dette er et undervisningsarkiv uden omfattende automatiserede tests  
- Manuel test fokuserer på:  
  - Kodeeksempler kører uden fejl  
  - Links i dokumentationen virker korrekt  
  - Projekt builds gennemføres succesfuldt  
  - Eksempler følger bedste praksis  

### Før-indsendelses Kontroller

- Kør `npm run lint` i mapper med package.json  
- Bekræft at markdown-links er valide  
- Test kodeeksempler i browser eller Node.js  
- Tjek at oversættelser bevarer korrekt struktur  

## Kode Stil Retningslinjer

### JavaScript

- Brug moderne ES6+ syntaks  
- Følg standard ESLint konfigurationer leveret i projekterne  
- Brug meningsfulde variabel- og funktionsnavne for undervisningsklarhed  
- Tilføj kommentarer der forklarer koncepter for de lærende  
- Formater med Prettier hvor konfigureret  

### HTML/CSS

- Semantiske HTML5 elementer  
- Responsivt design principper  
- Klare klassifikationsnavne  
- Kommentarer der forklarer CSS teknikker for de lærende  

### Python

- PEP 8 stil retningslinjer  
- Klare, undervisningsvenlige kodeeksempler  
- Type hints hvor hjælpsomt for læring  

### Markdown Dokumentation

- Klar overskriftshierarki  
- Kodeblokke med sprog angivelse  
- Links til yderligere ressourcer  
- Skærmbilleder og billeder i `images/` mapper  
- Alternativ tekst til billeder for tilgængelighed  

### Filorganisation

- Lektioner nummereret sekventielt (1-getting-started-lessons, 2-js-basics, osv.)  
- Hvert projekt har `solution/` og ofte `start/` eller `your-work/` mapper  
- Billeder opbevaret i lektion-specifikke `images/` mapper  
- Oversættelser i `translations/{language-code}/` struktur  

## Build og Udrulning

### Quiz App Udrulning (Azure Static Web Apps)

quiz-app er konfigureret til Azure Static Web Apps udrulning:

```bash
cd quiz-app
npm run build      # Opretter dist/ mappe
# Udruller via GitHub Actions workflow ved push til main
```
  
Azure Static Web Apps konfiguration:  
- **App placering**: `/quiz-app`  
- **Output placering**: `dist`  
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`  

### Dokumentation PDF Generering

```bash
npm install                    # Installer docsify-to-pdf
npm run convert               # Generer PDF fra docs
```
  
### Docsify Dokumentation

```bash
npm install -g docsify-cli    # Installer Docsify globalt
docsify serve                 # Server på localhost:3000
```
  
### Projektspecifikke Builds

Hver projektmappe kan have sin egen buildproces:  
- Vue projekter: `npm run build` skaber produktionsbundles  
- Statiske projekter: Intet build trin, servér filer direkte  

## Pull Request Retningslinjer

### Titel Format

Brug klare, beskrivende titler, der angiver ændringsområdet:  
- `[Quiz-app] Tilføj ny quiz til lektion X`  
- `[Lesson-3] Ret stavefejl i terrarium projekt`  
- `[Translation] Tilføj spansk oversættelse for lektion 5`  
- `[Docs] Opdater installationsinstruktioner`  

### Krævede Kontroller

Før indsendelse af en PR:

1. **Kodekvalitet**:  
   - Kør `npm run lint` i berørte projektmapper  
   - Ret alle linting-fejl og advarsler  

2. **Build Verifikation**:  
   - Kør `npm run build` hvis relevant  
   - Sikr ingen build-fejl  

3. **Linkvalidering**:  
   - Test alle markdown links  
   - Bekræft at billedreferencer virker  

4. **Indholds Gennemgang**:  
   - Korrekturlæs for stave- og grammatikefejl  
   - Sikr at kodeeksempler er korrekte og undervisende  
   - Bekræft at oversættelser bevarer original mening  

### Bidragskrav

- Accepter Microsoft CLA (automatisk kontrol ved første PR)  
- Følg [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)  
- Se [CONTRIBUTING.md](./CONTRIBUTING.md) for detaljerede retningslinjer  
- Henvis til issues i PR-beskrivelse hvor relevant  

### Review Proces

- PR'er gennemgås af vedligeholdere og community  
- Undervisningsklarhed prioriteres  
- Kodeeksempler skal følge bedste praksis  
- Oversættelser gennemgås for nøjagtighed og kulturel hensigtsmæssighed  

## Oversættelsessystem

### Automatisk Oversættelse

- Bruger GitHub Actions med co-op-translator workflow  
- Oversætter til 50+ sprog automatisk  
- Kildefiler i hovedmapper  
- Oversatte filer i `translations/{language-code}/` mapper  

### Tilføjelse af Manuel Oversættelsesforbedring

1. Find fil i `translations/{language-code}/`  
2. Foretag forbedringer mens struktur bevares  
3. Sikr at kodeeksempler forbliver funktionelle  
4. Test eventuelt lokaliseret quiz indhold  

### Oversættelsesmetadata

Oversatte filer indeholder metadata header:  
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
  
## Fejlfinding og Problemløsning

### Almindelige Problemer

**Quiz app starter ikke**:  
- Tjek Node.js version (v14+ anbefalet)  
- Slet `node_modules` og `package-lock.json`, kør `npm install` igen  
- Tjek for portkonflikter (standard: Vite bruger port 5173)  

**API server starter ikke**:  
- Bekræft Node.js version er minimum (node >=10)  
- Tjek om port allerede er i brug  
- Sørg for alle dependencies er installeret med `npm install`  

**Browser extension loader ikke**:  
- Bekræft manifest.json er korrekt formateret  
- Tjek browserkonsol for fejl  
- Følg browser-specifikke installationsinstruktioner for extensions  

**Python chat projekt problemer**:  
- Sørg for OpenAI pakken er installeret: `pip install openai`  
- Bekræft miljøvariablen GITHUB_TOKEN er sat  
- Tjek GitHub Models adgangstilladelser  

**Docsify serverer ikke docs**:  
- Installer docsify-cli globalt: `npm install -g docsify-cli`  
- Kør fra arkivets rodmappe  
- Tjek at `docs/_sidebar.md` findes  

### Udviklingsmiljø Tips

- Brug VS Code med Live Server extension til HTML projekter  
- Installer ESLint og Prettier extensions for konsistent formatering  
- Brug browser DevTools til JavaScript debugging  
- For Vue projekter, installer Vue DevTools browser extension  

### Ydelsesmæssige Overvejelser

- Stort antal oversatte filer (50+ sprog) betyder store fulde kloner  
- Brug shallow clone hvis du kun arbejder med indhold: `git clone --depth 1`  
- Ekskluder oversættelser fra søgninger ved arbejde på engelsk indhold  
- Build processer kan være langsomme ved første kørsel (npm install, Vite build)  

## Sikkerhedsovervejelser

### Miljøvariabler

- API nøgler må aldrig committes til arkivet  
- Brug `.env` filer (allerede i `.gitignore`)  
- Dokumenter nødvendige miljøvariabler i projekt READMEs  

### Python Projekter

- Brug virtuelle miljøer: `python -m venv venv`  
- Hold dependencies opdaterede  
- GitHub tokens bør have minimale nødvendige tilladelser  

### GitHub Models Adgang

- Personal Access Tokens (PAT) kræves for GitHub Models  
- Tokens bør gemmes som miljøvariabler  
- Committ aldrig tokens eller credentials  

## Yderligere Noter

### Målgruppe

- Absolutte begyndere til webudvikling  
- Studerende og selvstuderende  
- Lærere der bruger pensum i klasseværelser  
- Indhold er designet til tilgængelighed og gradvis færdighedsopbygning  

### Undervisningsfilosofi

- Projektbaseret læringstilgang  
- Hyppige videnschecks (quizzer)  
- Praktiske kodningsøvelser  
- Virkelige applikationseksempler  
- Fokus på grundlæggende før frameworks  

### Arkiv Vedligeholdelse

- Aktiv community af lærende og bidragydere  
- Regelmæssige opdateringer af dependencies og indhold  
- Issues og diskussioner overvåges af vedligeholdere  
- Oversættelsesopdateringer automatiseres via GitHub Actions  

### Relaterede Ressourcer

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)  
- [Student Hub resources](https://docs.microsoft.com/learn/student-hub/)  
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) anbefalet for lærende  
- Yderligere kurser: Generativ AI, Data Science, ML, IoT pensum tilgængelig  

### Arbejde med Specifikke Projekter

For detaljerede instruktioner om individuelle projekter, se README-filer i:  
- `quiz-app/README.md` - Vue 3 quiz applikation  
- `7-bank-project/README.md` - Bankapplikation med autentificering  
- `5-browser-extension/README.md` - Browser extension udvikling  
- `6-space-game/README.md` - Canvas-baseret spiludvikling  
- `9-chat-project/README.md` - AI chat assistant projekt  

### Monorepo Struktur

Selvom det ikke er et traditionelt monorepo, indeholder dette arkiv flere uafhængige projekter:  
- Hver lektion er selvstændig  
- Projekterne deler ikke dependencies  
- Arbejd på individuelle projekter uden at påvirke andre  
- Klon hele repo for fuld pensumerfaring  

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Ansvarsfraskrivelse**:
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiske oversættelser kan indeholde fejl eller unøjagtigheder. Det oprindelige dokument på dets modersmål bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi påtager os intet ansvar for misforståelser eller fejltolkninger, som opstår som følge af brugen af denne oversættelse.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->