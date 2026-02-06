# AGENTS.md

## Projektoversigt

Dette er et uddannelseslæremiddelforestilling til undervisning i grundlæggende webudvikling for begyndere. Læremidlet er et omfattende 12-ugers kursus udviklet af Microsoft Cloud Advocates, med 24 praktiske lektioner, der dækker JavaScript, CSS og HTML.

### Nøglekomponenter

- **Uddannelsesindhold**: 24 strukturerede lektioner organiseret i projektbaserede moduler  
- **Praktiske projekter**: Terrarium, Typingspil, Browserudvidelse, Rumspil, Bankapp, Kodeeditor og AI Chat-assistent  
- **Interaktive quizzer**: 48 quizzer med 3 spørgsmål hver (før/efter lektion vurderinger)  
- **Flersproget support**: Automatiserede oversættelser til 50+ sprog via GitHub Actions  
- **Teknologier**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (til AI-projekter)  

### Arkitektur

- Uddannelsesrepository med lektionbaseret struktur  
- Hver lektionsmappe indeholder README, kodeeksempler og løsninger  
- Selvstændige projekter i separate mapper (quiz-app, diverse lektionsprojekter)  
- Oversættelsessystem ved brug af GitHub Actions (co-op-translator)  
- Dokumentation serveres via Docsify og findes som PDF  

## Opsætningskommandoer

Dette repository er primært til konsumering af uddannelsesindhold. For arbejde med specifikke projekter:

### Hovedrepository opsætning

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```
  
### Quiz App opsætning (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Start udviklingsserver
npm run build      # Byg til produktion
npm run lint       # Kør ESLint
```
  
### Bankprojekt API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Start API-server
npm run lint       # Kør ESLint
npm run format     # Formater med Prettier
```
  
### Browserudvidelsesprojekter

```bash
cd 5-browser-extension/solution
npm install
# Følg browser-specifikke instruktioner til indlæsning af udvidelser
```
  
### Rumspilsprojekter

```bash
cd 6-space-game/solution
npm install
# Åbn index.html i browseren eller brug Live Server
```
  
### Chatprojekt (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Indstil miljøvariablen GITHUB_TOKEN
python api.py
```
  
## Udviklingsworkflow

### For indholdsleverandører

1. **Fork repository** til din GitHub-konto  
2. **Clone din fork** lokalt  
3. **Opret en ny branch** til dine ændringer  
4. Foretag ændringer til lektionsindhold eller kodeeksempler  
5. Test eventuelle kodeændringer i relevante projektmapper  
6. Indsend pull requests i henhold til bidragsretningslinjer  

### For lærende

1. Fork eller klon repository  
2. Naviger sekventielt i lektionsmapper  
3. Læs README-filer for hver lektion  
4. Tag pre-lesson quizzer på https://ff-quizzes.netlify.app/web/  
5. Arbejd gennem kodeeksempler i lektionsmapper  
6. Fuldfør opgaver og udfordringer  
7. Tag post-lesson quizzer  

### Liveudvikling

- **Dokumentation**: Kør `docsify serve` i rodmappen (port 3000)  
- **Quiz App**: Kør `npm run dev` i quiz-app mappen  
- **Projekter**: Brug VS Code Live Server extension til HTML-projekter  
- **API-projekter**: Kør `npm start` i respektive API-mapper  

## Testinstruktioner

### Quiz App test

```bash
cd quiz-app
npm run lint       # Tjek for problemer med kodestil
npm run build      # Bekræft at build lykkes
```
  
### Bank API test

```bash
cd 7-bank-project/api
npm run lint       # Tjek for kode stil problemer
node server.js     # Bekræft at serveren starter uden fejl
```
  
### Generel testtilgang

- Dette er et uddannelsesrepository uden omfattende automatiserede tests  
- Manuel test fokuserer på:  
  - Kodeeksempler kører fejlfrit  
  - Links i dokumentation fungerer korrekt  
  - Projektbygninger gennemføres succesfuldt  
  - Eksempler følger bedste praksis  

### Pre-indsendelsescheck

- Kør `npm run lint` i mapper med package.json  
- Bekræft at markdown-links er gyldige  
- Test kodeeksempler i browser eller Node.js  
- Tjek at oversættelser bevarer korrekt struktur  

## Kode-stil retningslinjer

### JavaScript

- Brug moderne ES6+ syntaks  
- Følg standard ESLint konfigurationer leveret i projekterne  
- Brug meningsfulde variabel- og funktionsnavne for uddannelsesmæssig klarhed  
- Tilføj kommentarer der forklarer koncepter for lærende  
- Formater med Prettier hvor konfigureret  

### HTML/CSS

- Semantiske HTML5 elementer  
- Responsive designprincipper  
- Klare klasse-navnekonventioner  
- Kommentarer der forklarer CSS-teknikker for lærende  

### Python

- PEP 8 stil retningslinjer  
- Klare, uddannelsesmæssige kodeeksempler  
- Type hints hvor hjælpsomt for læring  

### Markdown dokumentation

- Klar overskriftshierarki  
- Kodeblokke med sprogspecifikation  
- Links til yderligere ressourcer  
- Skærmbilleder og billeder i `images/` mapper  
- Alt-tekst for billeder for tilgængelighed  

### Filorganisation

- Lektioner nummereret sekventielt (1-getting-started-lessons, 2-js-basics, osv.)  
- Hvert projekt har `solution/` og ofte `start/` eller `your-work/` mapper  
- Billeder opbevaret i lektionsspecifikke `images/` mapper  
- Oversættelser i `translations/{language-code}/` struktur  

## Build og udrulning

### Quiz App udrulning (Azure Static Web Apps)

quiz-app er konfigureret til Azure Static Web Apps udrulning:

```bash
cd quiz-app
npm run build      # Opretter dist/-mappe
# Udruller via GitHub Actions-arbejdsgang ved push til main
```
  
Azure Static Web Apps konfiguration:  
- **App placering**: `/quiz-app`  
- **Output placering**: `dist`  
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`  

### Dokumentations PDF generering

```bash
npm install                    # Installer docsify-to-pdf
npm run convert               # Generer PDF fra docs
```
  
### Docsify dokumentation

```bash
npm install -g docsify-cli    # Installer Docsify globalt
docsify serve                 # Server på localhost:3000
```
  
### Projekt-specifikke builds

Hver projektmappe kan have sin egen build-proces:  
- Vue projekter: `npm run build` skaber produktionspakker  
- Statisk projekter: Ingen build-step, filer serveres direkte  

## Pull Request retningslinjer

### Titelformat

Brug klare, beskrivende titler der angiver ændringsområdet:  
- `[Quiz-app] Tilføj ny quiz til lektion X`  
- `[Lesson-3] Ret stavefejl i terrarium projekt`  
- `[Translation] Tilføj spansk oversættelse til lektion 5`  
- `[Docs] Opdater opsætningsinstruktioner`  

### Nødvendige checks

Før indsendelse af PR:

1. **Kodekvalitet**:  
   - Kør `npm run lint` i berørte projektmapper  
   - Ret alle lintfejl og advarsler  

2. **Build verifikation**:  
   - Kør `npm run build` hvis relevant  
   - Sikr at der ikke er build-fejl  

3. **Linkvalidering**:  
   - Test alle markdown links  
   - Bekræft at billedreferencer virker  

4. **Indholdsrevision**:  
   - Korrekturlæs stavning og grammatik  
   - Sikr at kodeeksempler er korrekte og uddannelsesmæssige  
   - Bekræft at oversættelser bevarer oprindelig betydning  

### Bidragskrav

- Accepter Microsoft CLA (automatisk check ved første PR)  
- Følg [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)  
- Se [CONTRIBUTING.md](./CONTRIBUTING.md) for detaljerede retningslinjer  
- Referer issues i PR-beskrivelse hvis relevant  

### Review proces

- PRs gennemgås af vedligeholdere og community  
- Uddannelsesklarhed prioriteres  
- Kodeeksempler skal følge gældende bedste praksis  
- Oversættelser gennemgås for nøjagtighed og kulturel egnethed  

## Oversættelsessystem

### Automatisk oversættelse

- Bruger GitHub Actions med co-op-translator workflow  
- Oversætter automatisk til 50+ sprog  
- Kildefiler i hovedmapper  
- Oversatte filer i `translations/{language-code}/` mapper  

### Tilføjelse af manuelle oversættelsesforbedringer

1. Find fil i `translations/{language-code}/`  
2. Foretag forbedringer samtidig med at struktur bevares  
3. Sørg for at kodeeksempler forbliver funktionelle  
4. Test evt. lokaliseret quizindhold  

### Oversættelses metadata

Oversatte filer inkluderer metadata header:  
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

**Quiz app starter ikke**:  
- Tjek Node.js version (v14+ anbefales)  
- Slet `node_modules` og `package-lock.json`, kør `npm install` igen  
- Tjek for portkonflikter (standard: Vite bruger port 5173)  

**API serveren starter ikke**:  
- Bekræft at Node.js version opfylder minimum (node >=10)  
- Tjek om port allerede er i brug  
- Sørg for alle afhængigheder er installeret med `npm install`  

**Browserudvidelse indlæses ikke**:  
- Bekræft at manifest.json er korrekt formateret  
- Tjek browserens konsol for fejl  
- Følg browser-specifikke installationsinstruktioner for udvidelser  

**Python chat projekt problemer**:  
- Sørg for OpenAI pakken er installeret: `pip install openai`  
- Bekræft at GITHUB_TOKEN miljøvariablen er sat  
- Check GitHub Models adgangstilladelser  

**Docsify serverer ikke dokumenter**:  
- Installer docsify-cli globalt: `npm install -g docsify-cli`  
- Kør fra repository rodmappe  
- Tjek at `docs/_sidebar.md` eksisterer  

### Udviklingsmiljøtips

- Brug VS Code med Live Server extension til HTML projekter  
- Installer ESLint og Prettier extensions for konsistent formattering  
- Brug browserens DevTools til debugging af JavaScript  
- Til Vue projekter, installer Vue DevTools browser extension  

### Ydeevne overvejelser

- Stort antal oversatte filer (50+ sprog) betyder at fulde clones er store  
- Brug shallow clone hvis kun indhold arbejdes på: `git clone --depth 1`  
- Ekskluder oversættelser fra søgninger når der arbejdes på engelsk indhold  
- Buildprocesser kan være langsomme ved første kørsel (npm install, Vite build)  

## Sikkerhedsovervejelser

### Miljøvariabler

- API nøgler må aldrig committes til repository  
- Brug `.env` filer (allerede i `.gitignore`)  
- Dokumenter nødvendige miljøvariabler i projektets README  

### Python projekter

- Brug virtuelle miljøer: `python -m venv venv`  
- Hold afhængigheder opdaterede  
- GitHub tokens skal have minimal nødvendige tilladelser  

### GitHub Models adgang

- Personlige Access Tokens (PAT) kræves for GitHub Models  
- Tokens skal gemmes som miljøvariabler  
- Commit aldrig tokens eller credentials  

## Yderligere noter

### Målgruppe

- Fuldstændige begyndere til webudvikling  
- Studerende og selvstuderende  
- Lærere der bruger curriculum i klasseværelser  
- Indhold designet for tilgængelighed og gradvis færdighedsopbygning  

### Uddannelsesfilosofi

- Projektbaseret læringstilgang  
- Hyppige videnschecks (quizzer)  
- Praktiske kodningsøvelser  
- Eksempler på virkelige anvendelser  
- Fokus på grundlæggende før frameworks  

### Repository vedligeholdelse

- Aktivt community af lærende og bidragydere  
- Regelmæssige opdateringer af afhængigheder og indhold  
- Issues og diskussioner overvåges af vedligeholdere  
- Oversættelsesopdateringer automatiseret via GitHub Actions  

### Relaterede ressourcer

- [Microsoft Learn moduler](https://docs.microsoft.com/learn/)  
- [Student Hub ressourcer](https://docs.microsoft.com/learn/student-hub/)  
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) anbefales til lærende  
- Yderligere kurser: Generativ AI, Data Science, ML, IoT curriculum tilgængelige  

### Arbejde med specifikke projekter

For detaljerede instruktioner om individuelle projekter, se README-filer i:  
- `quiz-app/README.md` - Vue 3 quiz applikation  
- `7-bank-project/README.md` - Bankapplikation med autentifikation  
- `5-browser-extension/README.md` - Udvikling af browserudvidelse  
- `6-space-game/README.md` - Canvas-baseret spiludvikling  
- `9-chat-project/README.md` - AI chat assistent projekt  

### Monorepo struktur

Selvom det ikke er et traditionelt monorepo, indeholder dette repository flere uafhængige projekter:  
- Hver lektion er selvstændig  
- Projekter deler ikke afhængigheder  
- Arbejd på individuelle projekter uden at påvirke andre  
- Klon hele repo for fuld curriculum oplevelse  

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Ansvarsfraskrivelse**:  
Dette dokument er oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det oprindelige dokument på dets modersmål bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi påtager os intet ansvar for misforståelser eller fejltolkninger, der måtte opstå som følge af brugen af denne oversættelse.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->