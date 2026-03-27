# AGENTS.md

## Projektoversigt

Dette er et uddannelsesmæssigt kursuslager for undervisning i grundlæggende webudvikling for begyndere. Læreplanen er et omfattende 12-ugers kursus udviklet af Microsoft Cloud Advocates, der indeholder 24 praktiske lektioner om JavaScript, CSS og HTML.

### Centrale komponenter

- **Uddannelsesindhold**: 24 strukturerede lektioner organiseret i projektbaserede moduler
- **Praktiske projekter**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor og AI Chat Assistant
- **Interaktive quizzer**: 48 quizzer med 3 spørgsmål hver (før/efter-lektion vurderinger)
- **Multisprogunderstøttelse**: Automatiserede oversættelser til 50+ sprog via GitHub Actions
- **Teknologier**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (til AI-projekter)

### Arkitektur

- Uddannelseslager med lektionbaseret struktur
- Hver lektionsmappe indeholder README, kodeeksempler og løsninger
- Selvstændige projekter i separate mapper (quiz-app, forskellige lektionsprojekter)
- Oversættelsessystem ved brug af GitHub Actions (co-op-translator)
- Dokumentation serveret via Docsify og tilgængelig som PDF

## Opsætningskommandoer

Dette lager er primært til forbrug af uddannelsesindhold. For arbejde med specifikke projekter:

### Hovedlageropsætning

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

### Bankprojekt API (Node.js + Express)

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
# Åbn index.html i browseren eller brug Live Server
```

### Chat Projekt (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Sæt miljøvariablen GITHUB_TOKEN
python api.py
```

## Udviklingsworkflow

### For indholds bidragydere

1. **Fork lageret** til din GitHub-konto
2. **Klon din fork** lokalt
3. **Opret en ny gren** til dine ændringer
4. Foretag ændringer i lektionens indhold eller kodeeksempler
5. Test eventuelle kodeændringer i relevante projektmapper
6. Indsend pull requests i henhold til bidragsretningslinjer

### For elever

1. Fork eller klon lageret
2. Naviger sekventielt til lektionsmapper
3. Læs README-filer for hver lektion
4. Fuldfør før-lektion quizzer på https://ff-quizzes.netlify.app/web/
5. Arbejd igennem kodeeksempler i lektionsmapper
6. Fuldfør opgaver og udfordringer
7. Tag post-lesson quizzer

### Live udvikling

- **Dokumentation**: Kør `docsify serve` i rodmappen (port 3000)
- **Quiz App**: Kør `npm run dev` i quiz-app mappen
- **Projekter**: Brug VS Code Live Server-udvidelsen til HTML-projekter
- **API Projekter**: Kør `npm start` i respektive API-mapper

## Testinstruktioner

### Quiz App Test

```bash
cd quiz-app
npm run lint       # Tjek for problemer med kodestil
npm run build      # Bekræft, at build lykkes
```

### Bank API Test

```bash
cd 7-bank-project/api
npm run lint       # Tjek for kode stil problemer
node server.js     # Bekræft at serveren starter uden fejl
```

### Generel testtilgang

- Dette er et uddannelseslager uden omfattende automatiske tests
- Manuel test fokuserer på:
  - Kodeeksempler kører uden fejl
  - Links i dokumentationen fungerer korrekt
  - Projekt builds gennemføres uden problemer
  - Eksempler følger bedste praksis

### Forud for indsendelse tjek

- Kør `npm run lint` i mapper med package.json
- Verificer at markdown links er gyldige
- Test kodeeksempler i browser eller Node.js
- Kontroller at oversættelser bevarer korrekt struktur

## Kodestil retningslinjer

### JavaScript

- Brug moderne ES6+ syntax
- Følg standard ESLint konfigurationer leveret i projekter
- Brug meningsfulde variabel- og funktionsnavne for pædagogisk klarhed
- Tilføj kommentarer der forklarer koncepter for elever
- Formater ved hjælp af Prettier hvor konfigureret

### HTML/CSS

- Semantiske HTML5 elementer
- Responsivt design principper
- Klare navngivningskonventioner for klasser
- Kommentarer der forklarer CSS teknikker for elever

### Python

- PEP 8 stilretningslinjer
- Klare, pædagogiske kodeeksempler
- Typeangivelser hvor det er hjælpsomt for læring

### Markdown dokumentation

- Klar overskriftsstruktur
- Kodeblokke med sprogspecifikation
- Links til yderligere ressourcer
- Skærmbilleder og billeder i `images/` mapper
- Alt-tekster til billeder for tilgængelighed

### Filorganisation

- Lektioner nummereres sekventielt (1-getting-started-lessons, 2-js-basics osv.)
- Hvert projekt har `solution/` og ofte `start/` eller `your-work/` mapper
- Billeder gemt i lektionsspecifikke `images/` mapper
- Oversættelser i `translations/{language-code}/` struktur

## Build og deployment

### Quiz App Deployment (Azure Static Web Apps)

quiz-app er konfigureret til Azure Static Web Apps deployment:

```bash
cd quiz-app
npm run build      # Opretter dist/ mappe
# Udrulning via GitHub Actions workflow ved push til main
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
- Vue projekter: `npm run build` skaber produktionsbundles
- Static projekter: Ingen build-trin, server filer direkte

## Pull Request retningslinjer

### Titel format

Brug klare, beskrivende titler der angiver ændringsområde:
- `[Quiz-app] Tilføj ny quiz til lektion X`
- `[Lesson-3] Ret stavefejl i terrarium projekt`
- `[Translation] Tilføj spansk oversættelse til lektion 5`
- `[Docs] Opdater opsætningsinstruktioner`

### Krævede tjek

Før indsendelse af PR:

1. **Kodekvalitet**:
   - Kør `npm run lint` i berørte projektmapper
   - Ret alle lint fejl og advarsler

2. **Build verifikation**:
   - Kør `npm run build` hvis relevant
   - Sørg for ingen build fejl

3. **Link validering**:
   - Test alle markdown links
   - Bekræft billedehenvisninger virker

4. **Indholdsgennemgang**:
   - Korrekturlæs for stave- og grammatikefejl
   - Sørg for kodeeksempler er korrekte og pædagogiske
   - Verificer at oversættelser bevarer oprindelig betydning

### Bidragskrav

- Accepter Microsoft CLA (automatisk tjek ved første PR)
- Følg [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Se [CONTRIBUTING.md](./CONTRIBUTING.md) for detaljerede retningslinjer
- Referér issues i PR beskrivelsen hvis relevant

### Gennemgangsproces

- PR’er gennemgås af vedligeholdere og fællesskab
- Pædagogisk klarhed prioriteres
- Kodeeksempler bør følge aktuelle bedste praksisser
- Oversættelser vurderes for nøjagtighed og kulturel relevans

## Oversættelsessystem

### Automatisk oversættelse

- Bruger GitHub Actions med co-op-translator workflow
- Oversætter automatisk til over 50 sprog
- Kildefiler i hovedmapper
- Oversatte filer i `translations/{language-code}/` mapper

### Tilføjelse af manuelle oversættelsesforbedringer

1. Find fil i `translations/{language-code}/`
2. Foretag forbedringer mens strukturen bevares
3. Sørg for at kodeeksempler forbliver funktionelle
4. Test eventuelt lokaliseret quizindhold

### Oversættelsesmetadata

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

## Debugging og fejlfinding

### Almindelige problemer

**Quiz app starter ikke**:
- Tjek Node.js version (v14+ anbefalet)
- Slet `node_modules` og `package-lock.json`, kør `npm install` igen
- Tjek for portkonflikter (standard: Vite bruger port 5173)

**API server starter ikke**:
- Bekræft at Node.js version opfylder minimum (node >=10)
- Tjek om port allerede er i brug
- Sørg for alle afhængigheder er installeret med `npm install`

**Browser extension indlæses ikke**:
- Bekræft at manifest.json er korrekt formatteret
- Tjek browser konsol for fejl
- Følg browserspecifikke installationsinstruktioner

**Python chat projekt problemer**:
- Sørg for OpenAI pakken er installeret: `pip install openai`
- Bekræft at miljøvariablen GITHUB_TOKEN er sat
- Tjek GitHub Models adgangstilladelser

**Docsify serverer ikke dokumentation**:
- Installer docsify-cli globalt: `npm install -g docsify-cli`
- Kør fra roden af lageret
- Tjek at `docs/_sidebar.md` findes

### Udviklingsmiljø tips

- Brug VS Code med Live Server udvidelse til HTML projekter
- Installer ESLint og Prettier udvidelser for ensartet formatering
- Brug browser DevTools til debugging af JavaScript
- Til Vue projekter, installer Vue DevTools browserudvidelse

### Performance hensyn

- Stort antal oversatte filer (50+ sprog) betyder at fulde kloner er store
- Brug shallow clone hvis kun indhold arbejdes med: `git clone --depth 1`
- Ekskluder oversættelser fra søgninger når der arbejdes med engelsk indhold
- Buildprocesser kan være langsomme ved første kørsel (npm install, Vite build)

## Sikkerhedshensyn

### Miljøvariabler

- API nøgler må aldrig committes til lageret
- Brug `.env` filer (allerede i `.gitignore`)
- Dokumentér nødvendige miljøvariabler i projekt READMEs

### Python projekter

- Brug virtuelle miljøer: `python -m venv venv`
- Hold afhængigheder opdaterede
- GitHub tokens bør have minimale nødvendige tilladelser

### GitHub Models adgang

- Personlige adgangstokens (PAT) kræves til GitHub Models
- Tokens skal opbevares som miljøvariabler
- Må aldrig committes eller deles

## Yderligere noter

### Målgruppe

- Komplette begyndere til webudvikling
- Studerende og selvstuderende
- Lærere der bruger læseplanen i undervisning
- Indhold designet til tilgængelighed og gradvis færdighedsopbygning

### Pædagogisk filosofi

- Projektbaseret læringstilgang
- Hyppige videnscheck (quizzer)
- Praktiske kodningsøvelser
- Virkelighedsnære eksempler
- Fokus på grundlæggende færdigheder før frameworks

### Lagervedligeholdelse

- Aktivt fællesskab af elever og bidragydere
- Regelmæssige opdateringer til afhængigheder og indhold
- Issues og diskussioner overvåges af vedligeholdere
- Oversættelsesopdateringer automatiseres via GitHub Actions

### Relaterede ressourcer

- [Microsoft Learn moduler](https://docs.microsoft.com/learn/)
- [Student Hub ressourcer](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) anbefalet til elever
- Yderligere kurser: Generative AI, Data Science, ML, IoT læreplaner tilgængelige

### Arbejde med specifikke projekter

For detaljerede instruktioner om individuelle projekter, se README-filer i:
- `quiz-app/README.md` - Vue 3 quiz applikation
- `7-bank-project/README.md` - Bankapplikation med autentificering
- `5-browser-extension/README.md` - Udvikling af browserudvidelser
- `6-space-game/README.md` - Canvas-baseret spiludvikling
- `9-chat-project/README.md` - AI chat assistent projekt

### Monorepo struktur

Selvom det ikke er et traditionelt monorepo, indeholder dette lager flere uafhængige projekter:
- Hver lektion er selvstændig
- Projekter deler ikke afhængigheder
- Arbejd på individuelle projekter uden at påvirke andre
- Klon hele repoet for den fulde kursusoplevelse

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Ansvarsfraskrivelse**:  
Dette dokument er oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, bedes du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi påtager os intet ansvar for eventuelle misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->