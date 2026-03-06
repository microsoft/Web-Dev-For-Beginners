# AGENTS.md

## Projektoversigt

Dette er et uddannelsesforløb-lager til undervisning i webudviklingsgrundlag for begyndere. Forløbet er et omfattende 12-ugers kursus udviklet af Microsoft Cloud Advocates, med 24 praktiske lektioner, der dækker JavaScript, CSS og HTML.

### Hovedkomponenter

- **Uddannelsesindhold**: 24 strukturerede lektioner organiseret i projektbaserede moduler
- **Praktiske Projekter**: Terrarium, Typing Game, Browserudvidelse, Space Game, Banking App, Code Editor, og AI Chat Assistant
- **Interaktive Quizzer**: 48 quizzer med 3 spørgsmål hver (før/efter-lesson vurderinger)
- **Flersprogssupport**: Automatiske oversættelser til 50+ sprog via GitHub Actions
- **Teknologier**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (til AI-projekter)

### Arkitektur

- Uddannelseslager med lektion-baseret struktur
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

### Browserudvidelsesprojekter

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
# Indstil miljøvariablen GITHUB_TOKEN
python api.py
```

## Udviklingsarbejdsgang

### For Indholdsbidragydere

1. **Fork lageret** til din GitHub-konto
2. **Klon din fork** lokalt
3. **Opret en ny gren** til dine ændringer
4. Foretag ændringer til lektionsindhold eller kodeeksempler
5. Test eventuelle kodeændringer i relevante projektmapper
6. Indsend pull requests i henhold til bidragsretningslinjerne

### For Lærende

1. Fork eller klon lageret
2. Naviger til lektionsmapper i rækkefølge
3. Læs README-filer for hver lektion
4. Gennemfør før-lektion quizzer på https://ff-quizzes.netlify.app/web/
5. Arbejd med kodeeksempler i lektionsmapper
6. Fuldfør opgaver og udfordringer
7. Tag efter-lektion quizzer

### Live Udvikling

- **Dokumentation**: Kør `docsify serve` i rodmappen (port 3000)
- **Quiz App**: Kør `npm run dev` i quiz-app mappen
- **Projekter**: Brug VS Code Live Server-udvidelsen til HTML-projekter
- **API Projekter**: Kør `npm start` i respektive API-mapper

## Testinstruktioner

### Quiz App Test

```bash
cd quiz-app
npm run lint       # Tjek for kode stil problemer
npm run build      # Bekræft at build lykkes
```

### Bank API Test

```bash
cd 7-bank-project/api
npm run lint       # Tjek for kode stil problemer
node server.js     # Bekræft, at serveren starter uden fejl
```

### Generel Testtilgang

- Dette er et uddannelseslager uden omfattende automatiserede tests
- Manuel test fokuserer på:
  - Kodeeksempler kører uden fejl
  - Links i dokumentationen fungerer korrekt
  - Projekt builds gennemføres succesfuldt
  - Eksempler følger bedste praksis

### Tjek Før Indsendelse

- Kør `npm run lint` i mapper med package.json
- Bekræft at markdown-links er valide
- Test kodeeksempler i browser eller Node.js
- Kontrollér at oversættelser bevarer korrekt struktur

## Kodeformateringsretningslinjer

### JavaScript

- Brug moderne ES6+ syntaks
- Følg standard ESLint konfigurationer i projekterne
- Brug meningsfulde variabel- og funktionsnavne for pædagogisk klarhed
- Tilføj kommentarer der forklarer koncepter for lærende
- Formater med Prettier hvor konfigureret

### HTML/CSS

- Semantiske HTML5-elementer
- Responsive designprincipper
- Klare klassenavnekonventioner
- Kommentarer der forklarer CSS-teknikker for lærende

### Python

- PEP 8 stilretningslinjer
- Tydelige, pædagogiske kodeeksempler
- Type hints hvor hjælpsomt for læring

### Markdown Dokumentation

- Klar overskriftshierarki
- Kodeblokke med sprogspecifikation
- Links til yderligere ressourcer
- Skærmbilleder og billeder i `images/` mapper
- Alt-tekst for billeder for tilgængelighed

### Filorganisation

- Lektioner nummeret sekventielt (1-getting-started-lessons, 2-js-basics, osv.)
- Hvert projekt har `solution/` og ofte `start/` eller `your-work/` mapper
- Billeder gemt i lektion-specifikke `images/` mapper
- Oversættelser i `translations/{language-code}/` struktur

## Byg og Udrul

### Quiz App Udrulning (Azure Static Web Apps)

Quiz-app'en er konfigureret til Azure Static Web Apps udrulning:

```bash
cd quiz-app
npm run build      # Opretter dist/-mappe
# Udruller via GitHub Actions workflow ved push til main
```

Azure Static Web Apps konfiguration:
- **App placering**: `/quiz-app`
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

### Projekt-specifikke Builds

Hver projektmappe kan have sin egen byggeproces:
- Vue-projekter: `npm run build` skaber produktionspakker
- Statiske projekter: Ingen build-step, server filer direkte

## Pull Request Retningslinjer

### Titel Format

Brug klare, beskrivende titler der angiver ændringsområdet:
- `[Quiz-app] Tilføj ny quiz til lektion X`
- `[Lesson-3] Ret stavefejl i terrarium projekt`
- `[Translation] Tilføj spansk oversættelse til lektion 5`
- `[Docs] Opdater opsætningsinstruktioner`

### Krævede Tjek

Før indsendelse af PR:

1. **Kodekvalitet**:
   - Kør `npm run lint` i berørte projektmapper
   - Ret alle linting fejl og advarsler

2. **Build Verifikation**:
   - Kør `npm run build` hvis relevant
   - Sikr at der ikke er build-fejl

3. **Link Validering**:
   - Test alle markdown links
   - Bekræft billedreferencer fungerer

4. **Indholdsgennemgang**:
   - Korrekturlæs for stave- og grammatikfejl
   - Sikr at kodeeksempler er korrekte og pædagogiske
   - Bekræft at oversættelser bevarer original betydning

### Bidragskrav

- Accepter Microsoft CLA (automatisk check ved første PR)
- Følg [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Se [CONTRIBUTING.md](./CONTRIBUTING.md) for detaljerede retningslinjer
- Referer til issue-numre i PR-beskrivelse hvis relevant

### Gennemgangsproces

- PR’er gennemgås af vedligeholdere og community
- Pædagogisk klarhed prioriteres
- Kodeeksempler skal følge aktuelle bedste praksisser
- Oversættelser vurderes for nøjagtighed og kulturel tilpasning

## Oversættelsessystem

### Automatisk Oversættelse

- Bruger GitHub Actions med co-op-translator workflow
- Oversætter til 50+ sprog automatisk
- Kildefiler i hovedmapper
- Oversatte filer i `translations/{language-code}/` mapper

### Tilføjelse af Manuelle Oversættelsesforbedringer

1. Find fil i `translations/{language-code}/`
2. Foretag forbedringer med bevaret struktur
3. Sikr at kodeeksempler forbliver funktionelle
4. Test eventuelt lokaliseret quiz-indhold

### Oversættelses Metadata

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
- Bekræft Node.js version minimum (node >=10)
- Tjek om port allerede er i brug
- Sikr at alle afhængigheder er installeret med `npm install`

**Browserudvidelse loader ikke**:
- Bekræft at manifest.json er korrekt formateret
- Tjek browserkonsol for fejl
- Følg browser-specifikke installationsinstruktioner til udvidelser

**Python chat projekt problemer**:
- Sikr at OpenAI-pakken er installeret: `pip install openai`
- Bekræft at miljøvariablen GITHUB_TOKEN er sat
- Tjek GitHub Models adgangstilladelser

**Docsify serverer ikke docs**:
- Installer docsify-cli globalt: `npm install -g docsify-cli`
- Kør fra lagerets rodmappe
- Tjek at `docs/_sidebar.md` findes

### Udviklingsmiljø Tips

- Brug VS Code med Live Server-udvidelsen til HTML-projekter
- Installer ESLint og Prettier-udvidelser for ensartet formatering
- Brug browser DevTools til fejlfinding af JavaScript
- For Vue projekter, installer Vue DevTools browserudvidelsen

### Ydelsesbetragtninger

- Stort antal oversatte filer (50+ sprog) betyder at komplette kloner er store
- Brug shallow clone hvis du kun arbejder med indhold: `git clone --depth 1`
- Udeluk oversættelser fra søgninger ved arbejde med engelsk indhold
- Byggeprocesser kan være langsomme ved første kørsel (npm install, Vite build)

## Sikkerhedsbetragtninger

### Miljøvariable

- API nøgler må aldrig committes til lager
- Brug `.env` filer (allerede i `.gitignore`)
- Dokumenter nødvendige miljøvariable i projekt-READMEs

### Python Projekter

- Brug virtuelle miljøer: `python -m venv venv`
- Hold afhængigheder opdaterede
- GitHub tokens skal have minimale nødvendige rettigheder

### GitHub Models Adgang

- Personlige adgangstokens (PAT) kræves til GitHub Models
- Tokens skal gemmes som miljøvariable
- Committ aldrig tokens eller login-oplysninger

## Yderligere Bemærkninger

### Målgruppe

- Fulde begyndere til webudvikling
- Studerende og selv-studerende
- Lærere der bruger forløbet i klasseværelser
- Indhold designet til tilgængelighed og gradvis færdighedsopbygning

### Uddannelsesfilosofi

- Projektbaseret læringstilgang
- Hyppige videnschecks (quizzer)
- Praktiske kodningsøvelser
- Eksempler på virkelige anvendelser
- Fokus på grundlæggende før frameworks

### Lager Vedligeholdelse

- Aktivt community af lærende og bidragydere
- Regelmæssige opdateringer til afhængigheder og indhold
- Issues og diskussioner overvåget af vedligeholdere
- Oversættelsesopdateringer automatiseret via GitHub Actions

### Relaterede Ressourcer

- [Microsoft Learn moduler](https://docs.microsoft.com/learn/)
- [Student Hub ressourcer](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) anbefalet til lærende
- Yderligere kurser: Generativ AI, Data Science, ML, IoT forløb tilgængelige

### Arbejde med Specifikke Projekter

For detaljerede instruktioner om enkelte projekter, se README-filerne i:
- `quiz-app/README.md` - Vue 3 quiz applikation
- `7-bank-project/README.md` - Banking app med autentificering
- `5-browser-extension/README.md` - Browserudvidelsesudvikling
- `6-space-game/README.md` - Canvas-baseret spiludvikling
- `9-chat-project/README.md` - AI chatassistent projekt

### Monorepo Struktur

Selvom det ikke er et traditionelt monorepo, indeholder dette lager flere uafhængige projekter:
- Hver lektion er selvstændig
- Projekterne deler ikke afhængigheder
- Arbejd på individuelle projekter uden at påvirke andre
- Klon hele repo for fuldt forløbsoplevelse

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Ansvarsfraskrivelse**:
Dette dokument er oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, bedes du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det oprindelige dokument på dets modersmål bør betragtes som den autoritative kilde. Ved kritiske informationer anbefales professionel menneskelig oversættelse. Vi påtager os intet ansvar for eventuelle misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->