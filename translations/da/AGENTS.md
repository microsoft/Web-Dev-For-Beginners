# AGENTS.md

## Projektoversigt

Dette er et uddannelses-kursuslager til undervisning i grundlæggende webudvikling for begyndere. Pensum er et omfattende 12-ugers kursus udviklet af Microsoft Cloud Advocates, med 24 praktiske lektioner, der dækker JavaScript, CSS og HTML.

### Vigtige komponenter

- **Læremateriale**: 24 strukturerede lektioner organiseret i projektbaserede moduler
- **Praktiske projekter**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor og AI Chat Assistant
- **Interaktive quizzer**: 48 quizzer med 3 spørgsmål hver (før/efter lektion evalueringer)
- **Flersproget support**: Automatiske oversættelser til 50+ sprog via GitHub Actions
- **Teknologier**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (til AI-projekter)

### Arkitektur

- Uddannelseslager med lektionbaseret struktur
- Hver lektionsmappe indeholder README, kodeeksempler og løsninger
- Selvstændige projekter i separate mapper (quiz-app, forskellige lektionsprojekter)
- Oversættelsessystem ved brug af GitHub Actions (co-op-translator)
- Dokumentation leveres via Docsify og er tilgængelig som PDF

## Opsætningskommandoer

Dette lager er primært til forbrug af uddannelsesindhold. For at arbejde med specifikke projekter:

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
npm run format     # Formatér med Prettier
```

### Browser Extension Projekter

```bash
cd 5-browser-extension/solution
npm install
# Følg browser-specifikke udvidelsesindlæsningsinstruktioner
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
# Indstil GITHUB_TOKEN miljøvariabel
python api.py
```

## Udviklingsarbejdsgang

### For indholdsbidragsydere

1. **Fork lageret** til din GitHub-konto
2. **Klon din fork** lokalt
3. **Opret en ny gren** til dine ændringer
4. Foretag ændringer i lektionsindhold eller kodeeksempler
5. Test eventuelle kodeændringer i relevante projektmapper
6. Indsend pull requests i henhold til bidragsretningslinjer

### For elever

1. Fork eller klon lageret
2. Naviger sekventielt til lektionsmapperne
3. Læs README-filer for hver lektion
4. Fuldfør præ-lektionsquizzer på https://ff-quizzes.netlify.app/web/
5. Arbejd med kodeeksempler i lektionsmapperne
6. Udfør opgaver og udfordringer
7. Tag post-lektionsquizzer

### Live udvilkling

- **Dokumentation**: Kør `docsify serve` i rodmappen (port 3000)
- **Quiz App**: Kør `npm run dev` i quiz-app mappen
- **Projekter**: Brug VS Code Live Server-udvidelsen til HTML-projekter
- **API Projekter**: Kør `npm start` i respektive API-mapper

## Testinstruktioner

### Quiz App Test

```bash
cd quiz-app
npm run lint       # Tjek for kode stilproblemer
npm run build      # Bekræft at build lykkes
```

### Bank API Test

```bash
cd 7-bank-project/api
npm run lint       # Tjek for kode stil problemer
node server.js     # Bekræft at server starter uden fejl
```

### Generel testtilgang

- Dette er et uddannelseslager uden omfattende automatiserede tests
- Manuel test fokuserer på:
  - Kodeeksempler kører uden fejl
  - Links i dokumentationen fungerer korrekt
  - Projekter bygger færdigt succesfuldt
  - Eksempler følger bedste praksis

### Kontroller før indsendelse

- Kør `npm run lint` i mapper med package.json
- Bekræft at markdown-links er gyldige
- Test kodeeksempler i browser eller Node.js
- Tjek at oversættelser bevarer korrekt struktur

## Kode-stil retningslinjer

### JavaScript

- Brug moderne ES6+ syntaks
- Følg standard ESLint-konfigurationer leveret i projekterne
- Brug meningsfulde variabel- og funktionsnavne for bedre læring
- Tilføj kommentarer, der forklarer koncepter for elever
- Formater med Prettier hvor konfigureret

### HTML/CSS

- Semantiske HTML5-elementer
- Responsivt design principper
- Klare klassenavnekonventioner
- Kommentarer, der forklarer CSS-teknikker for elever

### Python

- PEP 8 stilretningslinjer
- Klare, uddannelsesmæssige kodeeksempler
- Type hints hvor det hjælper læring

### Markdown dokumentation

- Klar overskriftshierarki
- Kodeblokke med sprogangivelse
- Links til yderligere ressourcer
- Skærmbilleder og billeder i `images/` mapper
- Alt-tekst til billeder for tilgængelighed

### Filorganisation

- Lektioner nummereret sekventielt (1-getting-started-lessons, 2-js-basics, osv.)
- Hvert projekt har `solution/` og ofte `start/` eller `your-work/` mapper
- Billeder gemt i lektionsspecifikke `images/` mapper
- Oversættelser i `translations/{language-code}/` struktur

## Bygning og udrulning

### Quiz App udrulning (Azure Static Web Apps)

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

### Dokumentations PDF generering

```bash
npm install                    # Installer docsify-to-pdf
npm run convert               # Generer PDF fra docs
```

### Docsify dokumentation

```bash
npm install -g docsify-cli    # Installer Docsify globalt
docsify serve                 # Kør på localhost:3000
```

### Projekt-specifikke builds

Hver projektmappe kan have sin egen byggeproces:
- Vue projekter: `npm run build` skaber produktionspakker
- Statisk projekter: Ingen byggeproces, server filer direkte

## Pull Request retningslinjer

### Titel format

Brug klare, beskrivende titler, der angiver område for ændring:
- `[Quiz-app] Tilføj ny quiz til lektion X`
- `[Lesson-3] Ret stavefejl i terrarium projekt`
- `[Translation] Tilføj spansk oversættelse til lektion 5`
- `[Docs] Opdater opsætningsinstruktioner`

### Påkrævede kontroller

Før indsendelse af PR:

1. **Kodekvalitet**:
   - Kør `npm run lint` i berørte projektmapper
   - Ret alle lint fejl og advarsler

2. **Build verifikation**:
   - Kør `npm run build` hvis relevant
   - Sikre ingen build fejl

3. **Link validering**:
   - Test alle markdown links
   - Bekræft at billedreferencer virker

4. **Indholdsrevision**:
   - Korrekturlæs for stave- og grammatikfejl
   - Sikre kodeeksempler er korrekte og pædagogiske
   - Bekræft oversættelser bevarer oprindelig mening

### Bidragskrav

- Accepter Microsoft CLA (automatisk tjek ved første PR)
- Følg [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Se [CONTRIBUTING.md](./CONTRIBUTING.md) for detaljerede retningslinjer
- Referer til issues i PR-beskrivelsen hvis relevant

### Gennemgangsproces

- PR’er gennemgås af vedligeholdere og fællesskab
- Pædagogisk tydelighed prioriteres
- Kodeeksempler bør følge aktuelle bedste praksis
- Oversættelser gennemgås for nøjagtighed og kulturel tilpasning

## Oversættelsessystem

### Automatisk oversættelse

- Bruger GitHub Actions med co-op-translator workflow
- Oversætter til 50+ sprog automatisk
- Kildefiler i hovedmapper
- Oversatte filer i `translations/{language-code}/` mapper

### Tilføjelse af manuelle oversættelsesforbedringer

1. Find fil i `translations/{language-code}/`
2. Lav forbedringer mens struktur bevares
3. Sikr at kodeeksempler forbliver funktionelle
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
- Tjek for porte i konflikt (standard: Vite bruger port 5173)

**API server starter ikke**:
- Bekræft Node.js version minimum (node >=10)
- Tjek om port allerede er i brug
- Sikr at alle afhængigheder er installeret med `npm install`

**Browser extension loader ikke**:
- Bekræft manifest.json er korrekt formateret
- Tjek browserkonsol for fejl
- Følg browserspecifikke installationsinstruktioner

**Python chat projekt problemer**:
- Sikr OpenAI-pakken er installeret: `pip install openai`
- Bekræft GITHUB_TOKEN miljøvariabel er sat
- Tjek GitHub Models adgangstilladelser

**Docsify serverer ikke docs**:
- Installer docsify-cli globalt: `npm install -g docsify-cli`
- Kør fra rodmappen i lageret
- Tjek at `docs/_sidebar.md` findes

### Udviklingsmiljø tips

- Brug VS Code med Live Server extension til HTML projekter
- Installer ESLint og Prettier extensions for ensartet formatering
- Brug browser DevTools til fejlfinding af JavaScript
- Til Vue projekter, installer Vue DevTools browser extension

### Ydelseshensyn

- Stort antal oversatte filer (50+ sprog) betyder at fulde kloner er store
- Brug shallow clone hvis kun arbejder med indhold: `git clone --depth 1`
- Udeluk oversættelser fra søgninger når du arbejder med engelsk indhold
- Build-processer kan være langsomme første gang (npm install, Vite build)

## Sikkerhedshensyn

### Miljøvariabler

- API-nøgler må aldrig committes til lageret
- Brug `.env` filer (allerede i `.gitignore`)
- Dokumentér nødvendige miljøvariabler i projekt-README’er

### Python Projekter

- Brug virtuelle miljøer: `python -m venv venv`
- Hold afhængigheder opdaterede
- GitHub tokens skal have minimale nødvendige tilladelser

### GitHub Models adgang

- Personal Access Tokens (PAT) kræves for GitHub Models
- Tokens skal gemmes som miljøvariabler
- Commit aldrig tokens eller legitimationsoplysninger

## Yderligere noter

### Målgruppe

- Fuldstændige begyndere til webudvikling
- Studerende og selvlærende
- Lærere, der bruger pensum i klasseværelser
- Indhold er designet til tilgængelighed og gradvis færdighedsopbygning

### Pædagogisk filosofi

- Projektbaseret læringstilgang
- Hyppige videnschecks (quizzer)
- Praktiske kodningsøvelser
- Virkelighedsnære anvendelsestilfælde
- Fokus på grundlæggende færdigheder før frameworks

### Lagervedligeholdelse

- Aktivt fællesskab af elever og bidragsydere
- Regelmæssige opdateringer til afhængigheder og indhold
- Issues og diskussioner overvåges af vedligeholdere
- Oversættelsesopdateringer automatiseres via GitHub Actions

### Relaterede ressourcer

- [Microsoft Learn moduler](https://docs.microsoft.com/learn/)
- [Student Hub ressourcer](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) anbefalet til elever
- Yderligere kurser: Generativ AI, Data Science, ML, IoT pensum tilgængeligt

### Arbejde med specifikke projekter

For detaljerede instruktioner om individuelle projekter, se README-filer i:
- `quiz-app/README.md` - Vue 3 quiz applikation
- `7-bank-project/README.md` - Banking applikation med autentifikation
- `5-browser-extension/README.md` - Browser extension udvikling
- `6-space-game/README.md` - Canvas-baseret spiludvikling
- `9-chat-project/README.md` - AI chat assistent projekt

### Monorepo struktur

Selvom det ikke er et traditionelt monorepo, indeholder dette lager flere uafhængige projekter:
- Hver lektion er selvstændig
- Projekter deler ikke afhængigheder
- Arbejd på individuelle projekter uden at påvirke andre
- Klon hele lageret for den fulde kursusoplevelse

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, bedes du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det oprindelige dokument på dets modersmål bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi påtager os intet ansvar for eventuelle misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->