# AGENTS.md

## Projektoversigt

Dette er et uddannelsespensum-repositorium til undervisning i webudviklingsgrundlag for begyndere. Pensum består af et omfattende 12-ugers kursus udviklet af Microsoft Cloud Advocates, med 24 praktiske lektioner, der dækker JavaScript, CSS og HTML.

### Centrale komponenter

- **Uddannelsesindhold**: 24 strukturerede lektioner organiseret i projektbaserede moduler
- **Praktiske projekter**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor og AI Chat Assistant
- **Interaktive quizzer**: 48 quizzer med 3 spørgsmål hver (forud/efter-lektion vurderinger)
- **Flersproget support**: Automatiske oversættelser til 50+ sprog via GitHub Actions
- **Teknologier**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (til AI-projekter)

### Arkitektur

- Uddannelses-repositorium med lektionbaseret struktur
- Hver lektionsmappe indeholder README, kodeeksempler og løsninger
- Fritstående projekter i separate mapper (quiz-app, forskellige lektionsprojekter)
- Oversættelsessystem med GitHub Actions (co-op-translator)
- Dokumentation serveret via Docsify og tilgængelig som PDF

## Opsætningskommandoer

Dette repositorium er primært til forbrug af uddannelsesindhold. For at arbejde med specifikke projekter:

### Hoved-repositorium opsætning

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

### Bank Project API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Start API-server
npm run lint       # Kør ESLint
npm run format     # Formater med Prettier
```

### Browser Extension projekter

```bash
cd 5-browser-extension/solution
npm install
# Følg browser-specifikke instruktioner til indlæsning af udvidelser
```

### Space Game projekter

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

## Udviklingsarbejdsgang

### For indholds-bidragsydere

1. **Fork repositoriet** til din GitHub-konto
2. **Klon din fork** lokalt
3. **Lav en ny branch** til dine ændringer
4. Lav ændringer i lektionsindhold eller kodeeksempler
5. Test eventuelle kodeændringer i relevante projektmapper
6. Indsend pull requests i henhold til bidragsretningslinjer

### For elever

1. Fork eller klon repositoriet
2. Naviger sekventielt til lektionsmapperne
3. Læs README-filer for hver lektion
4. Gennemfør for-lektion-quizzer på https://ff-quizzes.netlify.app/web/
5. Arbejd med kodeeksempler i lektionsmapperne
6. Lav opgaver og udfordringer
7. Tag efter-lektion-quizzer

### Live udvikling

- **Dokumentation**: Kør `docsify serve` i roden (port 3000)
- **Quiz App**: Kør `npm run dev` i quiz-app-mappen
- **Projekter**: Brug VS Code Live Server-udvidelsen til HTML-projekter
- **API projekter**: Kør `npm start` i respektive API-mapper

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
npm run lint       # Tjek for kode stil problemer
node server.js     # Bekræft at serveren starter uden fejl
```

### Generel testmetode

- Dette er et uddannelses-repositorium uden omfattende automatiserede tests
- Manuel test fokuserer på:
  - Kodeeksempler kører uden fejl
  - Links i dokumentationen virker korrekt
  - Projekt builds gennemføres succesfuldt
  - Eksempler følger bedste praksis

### Forud for indsendelse checks

- Kør `npm run lint` i mapper med package.json
- Bekræft at markdown-links er gyldige
- Test kodeeksempler i browser eller Node.js
- Tjek at oversættelser bevarer korrekt struktur

## Kodestil-retningslinjer

### JavaScript

- Brug moderne ES6+ syntaks
- Følg standard ESLint-konfigurationer fra projekterne
- Brug meningsfulde variabel- og funktionsnavne for uddannelsesmæssig klarhed
- Tilføj kommentarer, der forklarer koncepter for elever
- Formatér med Prettier hvor det er konfigureret

### HTML/CSS

- Semantiske HTML5-elementer
- Responsive designprincipper
- Klare klasse-navngivningskonventioner
- Kommentarer, der forklarer CSS-teknikker for elever

### Python

- PEP 8 stil-retningslinjer
- Klare, uddannelsesmæssige kodeeksempler
- Type hints hvor det er hjælpsomt for læring

### Markdown dokumentation

- Klar overskriftshierarki
- Kodeblokke med sprogspecificering
- Links til yderligere ressourcer
- Skærmbilleder og billeder i `images/`-mapper
- ALT-tekst til billeder for tilgængelighed

### Filorganisation

- Lektioner nummereret sekventielt (1-getting-started-lessons, 2-js-basics, etc.)
- Hvert projekt har `solution/` og ofte `start/` eller `your-work/` mapper
- Billeder gemt i lektion-specifikke `images/`-mapper
- Oversættelser i `translations/{language-code}/` struktur

## Build og deploy

### Quiz App deploy (Azure Static Web Apps)

quiz-app er konfigureret til Azure Static Web Apps deployment:

```bash
cd quiz-app
npm run build      # Opretter dist/ mappe
# Udruller via GitHub Actions workflow ved push til main
```

Azure Static Web Apps konfiguration:
- **App placering**: `/quiz-app`
- **Output placering**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokumentations PDF-generering

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
- Vue-projekter: `npm run build` skaber produktionsbundles
- Statiske projekter: Ingen build-step, server filer direkte

## Pull Request retningslinjer

### Titel-format

Brug klare, beskrivende titler, der angiver område for ændring:
- `[Quiz-app] Tilføj ny quiz for lektion X`
- `[Lesson-3] Ret stavefejl i terrarium projekt`
- `[Translation] Tilføj spansk oversættelse for lektion 5`
- `[Docs] Opdater opsætningsinstruktioner`

### Nødvendige checks

Før PR indsendes:

1. **Kodekvalitet**:
   - Kør `npm run lint` i berørte projektmapper
   - Ret alle linting-fejl og advarsler

2. **Build verifikation**:
   - Kør `npm run build` hvis relevant
   - Sikr at der ikke er build-fejl

3. **Link validering**:
   - Test alle markdown-links
   - Bekræft at billedreferencer virker

4. **Indholds-gennemgang**:
   - Korrekturlæs for stave- og grammatikfejl
   - Sikr, at kodeeksempler er korrekte og pædagogiske
   - Bekræft, at oversættelser bevarer oprindelig mening

### Bidragskrav

- Accepter Microsoft CLA (automatisk tjek på første PR)
- Følg [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Se [CONTRIBUTING.md](./CONTRIBUTING.md) for detaljerede retningslinjer
- Referer issues i PR-beskrivelse hvis relevant

### Gennemgangsproces

- PR'er gennemgås af vedligeholdere og community
- Uddannelsesmæssig klarhed prioriteres
- Kodeeksempler skal følge nuværende bedste praksis
- Oversættelser gennemgås for nøjagtighed og kulturel passendehed

## Oversættelsessystem

### Automatisk oversættelse

- Bruger GitHub Actions med co-op-translator workflow
- Oversætter til 50+ sprog automatisk
- Kildefiler i hovedmapper
- Oversatte filer i `translations/{language-code}/` mapper

### Tilføjelse af manuelle oversættelsesforbedringer

1. Find fil i `translations/{language-code}/`
2. Lav forbedringer mens struktur bevares
3. Sørg for, at kodeeksempler forbliver funktionelle
4. Test eventuelt lokaliseret quiz-indhold

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

## Debugging og fejlfinding

### Almindelige problemer

**Quiz app starter ikke**:
- Tjek Node.js version (v14+ anbefales)
- Slet `node_modules` og `package-lock.json`, kør `npm install` igen
- Tjek for portkonflikter (default: Vite bruger port 5173)

**API server starter ikke**:
- Bekræft Node.js version opfylder minimum (node >=10)
- Tjek om port allerede er i brug
- Sørg for at alle afhængigheder er installeret med `npm install`

**Browser extension loader ikke**:
- Bekræft manifest.json er korrekt formateret
- Tjek browserkonsol for fejl
- Følg browser-specifikke installationsinstruktioner

**Python chat projekt problemer**:
- Sørg for at OpenAI-pakken er installeret: `pip install openai`
- Bekræft at GITHUB_TOKEN miljøvariabel er sat
- Tjek GitHub Models adgangstilladelser

**Docsify serverer ikke docs**:
- Installer docsify-cli globalt: `npm install -g docsify-cli`
- Kør fra repositoriets rodmappe
- Tjek at `docs/_sidebar.md` findes

### Tips til udviklingsmiljø

- Brug VS Code med Live Server-udvidelse til HTML-projekter
- Installer ESLint og Prettier-udvidelser for konsistent formatering
- Brug browser DevTools til JavaScript-debugging
- For Vue projekter, installer Vue DevTools browserudvidelse

### Performance overvejelser

- Mange oversatte filer (50+ sprog) betyder store fulde kloner
- Brug shallow clone, hvis du kun arbejder med indhold: `git clone --depth 1`
- Ekskluder oversættelser fra søgninger ved arbejde med engelsk indhold
- Build-processer kan være langsomme ved første kørsel (npm install, Vite build)

## Sikkerhedsovervejelser

### Miljøvariabler

- API-nøgler må aldrig committes til repositoriet
- Brug `.env` filer (allerede i `.gitignore`)
- Dokumenter nødvendige miljøvariabler i projekt-README'er

### Python projekter

- Brug virtuelle miljøer: `python -m venv venv`
- Hold afhængigheder opdaterede
- GitHub tokens skal have minimale nødvendige tilladelser

### GitHub Models adgang

- Personlige Access Tokens (PAT) kræves til GitHub Models
- Tokens skal opbevares som miljøvariabler
- Aldrig commit tokens eller legitimationsoplysninger

## Yderligere noter

### Målgruppe

- Komplette begyndere til webudvikling
- Studerende og selvstuderende
- Lærere, der bruger pensum i klasseværelser
- Indhold designet til tilgængelighed og gradvist færdighedsopbygning

### Uddannelsesfilosofi

- Projektbaseret læringsmetode
- Hyppige videnscheck (quizzer)
- Praktiske kodningsøvelser
- Virkelighedsnære anvendelseseksempler
- Fokus på grundlæggende før frameworks

### Vedligeholdelse af repositorium

- Aktivt fællesskab af elever og bidragsydere
- Regelmæssige opdateringer af afhængigheder og indhold
- Issues og diskussioner overvåges af vedligeholdere
- Oversættelsesopdateringer automatiseret via GitHub Actions

### Relaterede ressourcer

- [Microsoft Learn moduler](https://docs.microsoft.com/learn/)
- [Student Hub ressourcer](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) anbefales til elever
- Yderligere kurser: Generativ AI, Data Science, ML, IoT pensum tilgængeligt

### Arbejde med specifikke projekter

For detaljerede instruktioner om individuelle projekter, se README-filer i:
- `quiz-app/README.md` - Vue 3 quiz applikation
- `7-bank-project/README.md` - Bankapplikation med autentifikation
- `5-browser-extension/README.md` - Browser extension udvikling
- `6-space-game/README.md` - Canvas-baseret spiludvikling
- `9-chat-project/README.md` - AI chat assistent projekt

### Monorepo struktur

Selvom det ikke er et traditionelt monorepo, indeholder dette repositorium flere uafhængige projekter:
- Hver lektion er selvstændig
- Projekter deler ikke afhængigheder
- Arbejd med individuelle projekter uden at påvirke andre
- Klon hele repo for den komplette penumsoplevelse

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Ansvarsfraskrivelse**:
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, bedes du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det oprindelige dokument på originalsproget bør betragtes som den autoritative kilde. For vigtig information anbefales professionel menneskelig oversættelse. Vi påtager os intet ansvar for misforståelser eller fejltolkninger, der måtte opstå som følge af brugen af denne oversættelse.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->