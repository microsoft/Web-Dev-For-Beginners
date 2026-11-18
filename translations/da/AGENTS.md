# AGENTS.md

## Projektoversigt

Dette er et uddannelses-curriculum-arkiv til undervisning i grundlæggende webudvikling for begyndere. Curriculumet er et omfattende 12-ugers kursus udviklet af Microsoft Cloud Advocates, som indeholder 24 praktiske lektioner, der dækker JavaScript, CSS og HTML.

### Nøglekomponenter

- **Uddannelsesindhold**: 24 strukturerede lektioner organiseret i projektbaserede moduler
- **Praktiske projekter**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor og AI Chat Assistant
- **Interaktive quizzer**: 48 quizzer med 3 spørgsmål hver (før/efter lektion vurderinger)
- **Flersproget support**: Automatiske oversættelser til 50+ sprog via GitHub Actions
- **Teknologier**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (til AI-projekter)

### Arkitektur

- Uddannelses-arkiv med lektionbaseret struktur
- Hver lektionsmappe indeholder README, kodeeksempler og løsninger
- Selvstændige projekter i separate mapper (quiz-app, diverse lektionsprojekter)
- Oversættelsessystem ved hjælp af GitHub Actions (co-op-translator)
- Dokumentation serveret via Docsify og tilgængelig som PDF

## Opsætningskommandoer

Dette arkiv er primært til forbrug af uddannelsesindhold. For arbejde med specifikke projekter:

### Hovedarkiv opsætning

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

### Bank Projekt API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Start API-server
npm run lint       # Kør ESLint
npm run format     # Formatér med Prettier
```

### Browser Extension projekter

```bash
cd 5-browser-extension/solution
npm install
# Følg browser-specifikke instruktioner for indlæsning af udvidelser
```

### Space Game projekter

```bash
cd 6-space-game/solution
npm install
# Åbn index.html i browseren eller brug Live Server
```

### Chat projekt (Python backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Indstil miljøvariablen GITHUB_TOKEN
python api.py
```

## Udviklingsworkflow

### For indholdsbidragydere

1. **Fork arkivet** til din GitHub-konto
2. **Klon din fork** lokalt
3. **Opret en ny gren** til dine ændringer
4. Foretag ændringer i lektionsindhold eller kodeeksempler
5. Test eventuelle kodeændringer i relevante projektmapper
6. Indsend pull requests i henhold til bidragsretningslinjer

### For lærende

1. Fork eller klon arkivet
2. Naviger til lektionsmapper sekventielt
3. Læs README-filer for hver lektion
4. Gennemfør for-lektions quizzer på https://ff-quizzes.netlify.app/web/
5. Arbejd dig igennem kodeeksempler i lektionsmapper
6. Udfør opgaver og udfordringer
7. Tag efter-lektions quizzer

### Live udvikling

- **Dokumentation**: Kør `docsify serve` i root (port 3000)
- **Quiz App**: Kør `npm run dev` i quiz-app mappen
- **Projekter**: Brug VS Code Live Server extension til HTML projekter
- **API Projekter**: Kør `npm start` i respektive API mapper

## Testinstruktioner

### Quiz App test

```bash
cd quiz-app
npm run lint       # Tjek for kode stil problemer
npm run build      # Bekræft at build lykkes
```

### Bank API test

```bash
cd 7-bank-project/api
npm run lint       # Tjek for problemer med kodestil
node server.js     # Bekræft at serveren starter uden fejl
```

### Generel test tilgang

- Dette er et uddannelsesarkiv uden omfattende automatiserede tests
- Manuel test fokuserer på:
  - Kodeeksempler kører uden fejl
  - Links i dokumentation fungerer korrekt
  - Projekt builds fuldføres succesfuldt
  - Eksempler følger bedste praksis

### Kontroller før indsendelse

- Kør `npm run lint` i mapper med package.json
- Bekræft at markdown-links er gyldige
- Test kodeeksempler i browser eller Node.js
- Tjek at oversættelser bevarer korrekt struktur

## Kode stil retningslinjer

### JavaScript

- Brug moderne ES6+ syntaks
- Følg standard ESLint konfigurationer i projekterne
- Brug meningsfulde variabel- og funktionsnavne for uddannelsesmæssig klarhed
- Tilføj kommentarer der forklarer koncepter for lærende
- Formatér med Prettier hvor konfigureret

### HTML/CSS

- Semantiske HTML5 elementer
- Responsive design principper
- Klare klasse-navngivningskonventioner
- Kommentarer der forklarer CSS teknikker for lærende

### Python

- PEP 8 stil retningslinjer
- Klare, uddannelsesmæssige kodeeksempler
- Type hints hvor det er hjælpsomt for læring

### Markdown dokumentation

- Klar overskriftsstruktur
- Kodeblokke med sprog angivelse
- Links til yderligere ressourcer
- Skærmbilleder og billeder i `images/` mapper
- Alt-tekst til billeder for tilgængelighed

### Filorganisering

- Lektioner nummereret sekventielt (1-getting-started-lessons, 2-js-basics, osv.)
- Hvert projekt har `solution/` og ofte `start/` eller `your-work/` mapper
- Billeder gemt i lektionsspecifikke `images/` mapper
- Oversættelser i `translations/{language-code}/` struktur

## Build og deployment

### Quiz App deployment (Azure Static Web Apps)

Quiz-appen er konfigureret til Azure Static Web Apps deployment:

```bash
cd quiz-app
npm run build      # Opretter dist/-mappe
# Udruller via GitHub Actions workflow ved push til main
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
npm install -g docsify-cli    # Installér Docsify globalt
docsify serve                 # Server på localhost:3000
```

### Projekt-specifikke builds

Hver projektmappe kan have sin egen byggeproces:
- Vue projekter: `npm run build` laver produktions bundles
- Statisk projekter: Ingen build trin, server filer direkte

## Pull request retningslinjer

### Titel format

Brug klare, beskrivende titler der angiver ændringsområde:
- `[Quiz-app] Tilføj ny quiz til lektion X`
- `[Lesson-3] Ret stavefejl i terrarium projekt`
- `[Translation] Tilføj spansk oversættelse til lektion 5`
- `[Docs] Opdater opsætningsinstruktioner`

### Påkrævede checks

Før indsendelse af PR:

1. **Kodekvalitet**:
   - Kør `npm run lint` i berørte projektmapper
   - Ret alle linting fejl og advarsler

2. **Build verifikation**:
   - Kør `npm run build` hvis relevant
   - Sørg for ingen build fejl

3. **Link validering**:
   - Test alle markdown links
   - Bekræft at billedreferencer virker

4. **Indholds gennemgang**:
   - Korrekturlæs for stavning og grammatik
   - Sikr at kodeeksempler er korrekte og uddannelsesmæssige
   - Verificer at oversættelser bevarer oprindelig mening

### Bidragskrav

- Accepter Microsoft CLA (automatisk check ved første PR)
- Følg [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Se [CONTRIBUTING.md](./CONTRIBUTING.md) for detaljerede retningslinjer
- Referer til issues i PR beskrivelsen hvis relevant

### Gennemgangsproces

- PR'er gennemgås af vedligeholdere og community
- Uddannelsesmæssig klarhed prioriteres
- Kodeeksempler bør følge bedste praksis
- Oversættelser gennemgås for nøjagtighed og kulturel passende

## Oversættelsessystem

### Automatisk oversættelse

- Bruger GitHub Actions med co-op-translator workflow
- Oversætter automatisk til 50+ sprog
- Kildefiler i hovedmapper
- Oversatte filer i `translations/{language-code}/` mapper

### Tilføj manuelle oversættelsesforbedringer

1. Find fil i `translations/{language-code}/`
2. Lav forbedringer mens struktur bevares
3. Sørg for kodeeksempler stadig fungerer
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

## Fejlfinding og problemløsning

### Almindelige problemer

**Quiz app starter ikke**:
- Tjek Node.js version (v14+ anbefalet)
- Slet `node_modules` og `package-lock.json`, kør `npm install` igen
- Tjek for portkonflikter (standard: Vite bruger port 5173)

**API server starter ikke**:
- Verificer Node.js version minimum (node >=10)
- Tjek om port allerede er in brug
- Sørg for alle afhængigheder installeret med `npm install`

**Browser extension loader ikke**:
- Verificer at manifest.json er korrekt formateret
- Tjek browser konsol for fejl
- Følg browser specifikke installationsinstruktioner

**Python chat projekt problemer**:
- Sørg for OpenAI pakke installeret: `pip install openai`
- Verificer at GITHUB_TOKEN miljøvariabel er sat
- Tjek GitHub Models adgangstilladelser

**Docsify server ikke dokumenter**:
- Installer docsify-cli globalt: `npm install -g docsify-cli`
- Kør fra repository root mappe
- Tjek at `docs/_sidebar.md` findes

### Udviklingsmiljø tips

- Brug VS Code med Live Server extension til HTML projekter
- Installer ESLint og Prettier extensions for ensartet formatering
- Brug browser DevTools til debugging af JavaScript
- Til Vue projekter, installer Vue DevTools browser extension

### Ydelseshensyn

- Stort antal oversatte filer (50+ sprog) gør fulde kloner store
- Brug shallow clone hvis kun indhold arbejdes med: `git clone --depth 1`
- Ekskludér oversættelser fra søgninger når engelske indhold arbejdes med
- Build processer kan være langsomme første gang (npm install, Vite build)

## Sikkerhedshensyn

### Miljøvariabler

- API nøgler må aldrig committes til arkivet
- Brug `.env` filer (allerede i `.gitignore`)
- Dokumenter påkrævede miljøvariabler i projekt READMEs

### Python projekter

- Brug virtuelle miljøer: `python -m venv venv`
- Hold afhængigheder opdaterede
- GitHub tokens bør have minimale nødvendige rettigheder

### GitHub Models adgang

- Personlige adgangstokens (PAT) kræves til GitHub Models
- Tokens bør gemmes som miljøvariabler
- Commiter aldrig tokens eller legitimationsoplysninger

## Yderligere noter

### Målgruppe

- Helt nybegyndere i webudvikling
- Studerende og selvlærende
- Lærere der bruger curriculum i undervisning
- Indhold designet til tilgængelighed og gradvis færdighedsopbygning

### Uddannelsesfilosofi

- Projektbaseret læringstilgang
- Hyppige videnschecks (quizzer)
- Praktiske kodningsøvelser
- Virkelighedsnære anvendelsestilfælde
- Fokus på grundlæggende før frameworks

### Arkivvedligeholdelse

- Aktivt community af lærende og bidragydere
- Regelmæssige opdateringer af afhængigheder og indhold
- Issues og diskussioner overvåges af vedligeholdere
- Oversættelsesopdateringer automatiseret via GitHub Actions

### Relaterede ressourcer

- [Microsoft Learn moduler](https://docs.microsoft.com/learn/)
- [Student Hub ressourcer](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) anbefalet til lærende
- Flere kurser: Generativ AI, Data Science, ML, IoT curriculum tilgængelige

### Arbejde med specifikke projekter

For detaljerede instruktioner om individuelle projekter, se README filer i:
- `quiz-app/README.md` - Vue 3 quiz applikation
- `7-bank-project/README.md` - Banking applikation med autentificering
- `5-browser-extension/README.md` - Udvikling af browser extension
- `6-space-game/README.md` - Canvas-baseret spiludvikling
- `9-chat-project/README.md` - AI chat assistent projekt

### Monorepo struktur

Selvom ikke et traditionelt monorepo, indeholder dette arkiv flere uafhængige projekter:
- Hver lektion er selvstændig
- Projekter deler ikke afhængigheder
- Arbejd på individuelle projekter uden at påvirke andre
- Klon hele arkivet for fuld curriculum oplevelse

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi stræber efter nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det oprindelige dokument på dets modersmål bør betragtes som den autoritative kilde. For kritiske oplysninger anbefales professionel menneskelig oversættelse. Vi påtager os intet ansvar for eventuelle misforståelser eller fejltolkninger, der opstår ved brug af denne oversættelse.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->