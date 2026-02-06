# AGENTS.md

## Projektoversigt

Dette er et uddannelsesmæssigt læseplansdepot til undervisning i webudviklingsgrundlag for begyndere. Læseplanen er et omfattende 12-ugers kursus udviklet af Microsoft Cloud Advocates, med 24 praktiske lektioner, der dækker JavaScript, CSS og HTML.

### Nøglekomponenter

- **Uddannelsesindhold**: 24 strukturerede lektioner organiseret i projektbaserede moduler
- **Praktiske projekter**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor og AI Chat Assistant
- **Interaktive quizzer**: 48 quizzer med 3 spørgsmål hver (for/efter lektion evalueringer)
- **Fler-sprogs støtte**: Automatiske oversættelser til 50+ sprog via GitHub Actions
- **Teknologier**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (til AI projekter)

### Arkitektur

- Uddannelsesrepository med lektion-baseret struktur
- Hver lektionsmappe indeholder README, kodeeksempler og løsninger
- Selvstændige projekter i separate mapper (quiz-app, forskellige lektionsprojekter)
- Oversættelsessystem ved hjælp af GitHub Actions (co-op-translator)
- Dokumentation serveret via Docsify og tilgængelig som PDF

## Opsætningskommandoer

Dette repository er primært til forbrug af uddannelsesindhold. For arbejde med specifikke projekter:

### Hovedrepository opsætning

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz App Opsætning (Vue 3 + Vite)

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

### For indholds-bidragydere

1. **Fork repositoryet** til din GitHub-konto
2. **Klon din fork** lokalt
3. **Opret en ny gren** til dine ændringer
4. Foretag ændringer i lektionsindhold eller kodeeksempler
5. Test eventuelle kodeændringer i relevante projektmapper
6. Indsend pull requests efter bidragsretningslinjerne

### For elever

1. Fork eller klon repositoryet
2. Naviger til lektionsmapper i rækkefølge
3. Læs README-filer for hver lektion
4. Gennemfør for-lesson quizzer på https://ff-quizzes.netlify.app/web/
5. Arbejd med kodeeksempler i lektionsmapper
6. Fuldfør opgaver og udfordringer
7. Tag efter-lesson quizzer

### Live udvikling

- **Dokumentation**: Kør `docsify serve` i roden (port 3000)
- **Quiz App**: Kør `npm run dev` i quiz-app mappen
- **Projekter**: Brug VS Code Live Server extension til HTML projekter
- **API Projekter**: Kør `npm start` i respektive API mapper

## Testinstruktioner

### Quiz App Test

```bash
cd quiz-app
npm run lint       # Tjek for problemer med kodestil
npm run build      # Bekræft at build lykkes
```

### Bank API Test

```bash
cd 7-bank-project/api
npm run lint       # Tjek for problemer med kodestil
node server.js     # Bekræft at serveren starter uden fejl
```

### Generel test tilgang

- Dette er et uddannelsesrepository uden omfattende automatiserede tests
- Manuel test fokuserer på:
  - Kodeeksempler kører uden fejl
  - Links i dokumentationen fungerer korrekt
  - Projekt builds gennemføres succesfuldt
  - Eksempler følger bedste praksis

### Forhåndskontrol før indsendelse

- Kør `npm run lint` i mapper med package.json
- Verificer at markdown-links er gyldige
- Test kodeeksempler i browser eller Node.js
- Kontroller at oversættelser bevarer korrekt struktur

## Kodekonventioner

### JavaScript

- Brug moderne ES6+ syntaks
- Følg standard ESLint konfigurationer i projekterne
- Brug meningsfulde variabel- og funktionsnavne for pædagogisk klarhed
- Tilføj kommentarer der forklarer koncepter for elever
- Formater med Prettier hvor konfigureret

### HTML/CSS

- Semantiske HTML5-elementer
- Responsive designprincipper
- Klare class-navngivningskonventioner
- Kommentarer der forklarer CSS-teknikker for elever

### Python

- PEP 8 stilretningslinjer
- Klare, uddannelsesmæssige kodeeksempler
- Type hints hvor hjælpsomt for læring

### Markdown Dokumentation

- Klar overskriftsstruktur
- Kodeblokke med sprogspecifikation
- Links til yderligere ressourcer
- Screenshots og billeder i `images/` mapper
- Alt-tekst på billeder til tilgængelighed

### Filerorganisering

- Lektioner nummereret sekventielt (1-getting-started-lessons, 2-js-basics osv.)
- Hvert projekt har `solution/` og ofte `start/` eller `your-work/` mapper
- Billeder gemt i lektionsspecifikke `images/` mapper
- Oversættelser i `translations/{language-code}/` struktur

## Build og Deployment

### Quiz App Deployment (Azure Static Web Apps)

quiz-app er konfigureret til Azure Static Web Apps deployment:

```bash
cd quiz-app
npm run build      # Opretter dist/ mappe
# Udruller via GitHub Actions workflow ved push til main
```

Azure Static Web Apps konfiguration:
- **App-placering**: `/quiz-app`
- **Output placering**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokumentations PDF Generering

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

Hver projektmappe kan have sin egen build-proces:
- Vue projekter: `npm run build` skaber produktionsbundles
- Statisk projekter: Ingen build-step, filer serveres direkte

## Pull Request Retningslinjer

### Titel Format

Brug klare, beskrivende titler, der angiver ændringsområde:
- `[Quiz-app] Tilføj ny quiz til lektion X`
- `[Lesson-3] Ret stavefejl i terrarium projektet`
- `[Translation] Tilføj spansk oversættelse til lektion 5`
- `[Docs] Opdater opsætningsinstruktioner`

### Krævede kontroller

Før indsendelse af PR:

1. **Kodekvalitet**:
   - Kør `npm run lint` i berørte projektmapper
   - Ret alle lint fejl og advarsler

2. **Build verifikation**:
   - Kør `npm run build` hvis relevant
   - Sørg for ingen build fejl

3. **Link validering**:
   - Test alle markdown links
   - Verificer billedreferencer fungerer

4. **Indholds gennemgang**:
   - Korrekturlæs for stavning og grammatik
   - Sørg for kodeeksempler er korrekte og pædagogiske
   - Bekræft at oversættelser bevarer oprindelig mening

### Bidragskrav

- Accepter Microsoft CLA (automatisk kontrol ved første PR)
- Følg [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Se [CONTRIBUTING.md](./CONTRIBUTING.md) for detaljerede retningslinjer
- Referér issue-numre i PR beskrivelsen hvis relevant

### Review proces

- PR’er gennemgås af vedligeholdere og community
- Pædagogisk klarhed prioriteres
- Kodeeksempler skal følge gældende bedste praksis
- Oversættelser gennemgås for nøjagtighed og kulturel korrekthed

## Oversættelsessystem

### Automatisk Oversættelse

- Bruger GitHub Actions med co-op-translator workflow
- Oversætter til 50+ sprog automatisk
- Kilde filer i hovedmapper
- Oversatte filer i `translations/{language-code}/` mapper

### Tilføjelse af manuelle oversættelsesforbedringer

1. Find fil i `translations/{language-code}/`
2. Foretag forbedringer under bevarelse af struktur
3. Sørg for kodeeksempler forbliver funktionelle
4. Test eventuelt lokaliseret quizindhold

### Oversættelsesmetadata

Oversatte filer indeholder metadataheader:
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

## Debugging og Fejlfinding

### Almindelige problemer

**Quiz app starter ikke**:
- Tjek Node.js version (v14+ anbefales)
- Slet `node_modules` og `package-lock.json`, kør `npm install` igen
- Tjek for port konflikter (standard: Vite bruger port 5173)

**API server starter ikke**:
- Bekræft Node.js version minimum (node >=10)
- Tjek om port allerede er i brug
- Sørg for alle afhængigheder er installeret med `npm install`

**Browser extension loader ikke**:
- Bekræft at manifest.json er korrekt formatteret
- Tjek browserens konsol for fejl
- Følg browserspecifikke installationsinstruktioner for extension

**Python chat projekt problemer**:
- Sørg for OpenAI-pakken er installeret: `pip install openai`
- Bekræft at GITHUB_TOKEN miljøvariablen er sat
- Tjek adgangstilladelser til GitHub Models

**Docsify serverer ikke dokumentationen**:
- Installer docsify-cli globalt: `npm install -g docsify-cli`
- Kør fra repositorys rodmappe
- Bekræft at `docs/_sidebar.md` findes

### Udviklingsmiljø tips

- Brug VS Code med Live Server extension til HTML projekter
- Installer ESLint og Prettier extensions til konsistent formatering
- Brug browser DevTools til JavaScript debugging
- Til Vue projekter, installer Vue DevTools browser extension

### Ydelsesovervejelser

- Stort antal oversatte filer (50+ sprog) betyder store fulde kloner
- Brug shallow clone hvis du kun arbejder med indhold: `git clone --depth 1`
- Ekskluder oversættelser fra søgninger når du arbejder med engelsk indhold
- Build-processer kan være langsomme første gang (npm install, Vite build)

## Sikkerhedsovervejelser

### Miljøvariabler

- API-nøgler må aldrig committes til repository
- Brug `.env` filer (allerede i `.gitignore`)
- Dokumenter nødvendige miljøvariabler i projekternes READMEs

### Python Projekter

- Brug virtuelle miljøer: `python -m venv venv`
- Hold afhængigheder opdaterede
- GitHub tokens skal have minimale nødvendige tilladelser

### GitHub Models Adgang

- Personlige Access Tokens (PAT) kræves til GitHub Models
- Tokens skal gemmes som miljøvariabler
- Committ aldrig tokens eller adgangsoplysninger

## Yderligere noter

### Målgruppe

- Fuldstændige begyndere til webudvikling
- Studerende og selvstuderende
- Lærere, der bruger læseplanen i klasselokaler
- Indholdet er designet til tilgængelighed og gradvis færdighedsopbygning

### Uddannelsesfilosofi

- Projektbaseret læringstilgang
- Hyppige videnskontrol (quizzer)
- Praktiske kodningsøvelser
- Eksempler med virkelige anvendelser
- Fokus på grundlæggende koncepter før frameworks

### Repository vedligeholdelse

- Aktivt community af elever og bidragydere
- Regelmæssige opdateringer af afhængigheder og indhold
- Issues og diskussioner overvåges af vedligeholdere
- Oversættelsesopdateringer automatiseret via GitHub Actions

### Relaterede ressourcer

- [Microsoft Learn moduler](https://docs.microsoft.com/learn/)
- [Student Hub ressourcer](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) anbefales til elever
- Yderligere kurser: Generativ AI, Data Science, ML, IoT læseplaner tilgængelige

### Arbejde med specifikke projekter

For detaljerede instruktioner om individuelle projekter, se README-filer i:
- `quiz-app/README.md` - Vue 3 quiz applikation
- `7-bank-project/README.md` - Banking applikation med autentifikation
- `5-browser-extension/README.md` - Udvikling af browser extension
- `6-space-game/README.md` - Canvas-baseret spiludvikling
- `9-chat-project/README.md` - AI chat assistent projekt

### Monorepo struktur

Selvom det ikke er et traditionelt monorepo, indeholder dette repository flere uafhængige projekter:
- Hver lektion er selvstændig
- Projekter deler ikke afhængigheder
- Arbejd på individuelle projekter uden at påvirke andre
- Klon hele repoet for den fulde læseplansoplevelse

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Ansvarsfraskrivelse**:
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det oprindelige dokument på dets oprindelige sprog skal betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi påtager os ikke ansvar for misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->