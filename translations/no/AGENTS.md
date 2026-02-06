# AGENTS.md

## Prosjektoversikt

Dette er et utdanningsrepository for å lære nybegynnere grunnleggende webutvikling. Pensumet er et omfattende 12-ukers kurs utviklet av Microsoft Cloud Advocates, med 24 praktiske leksjoner som dekker JavaScript, CSS og HTML.

### Hovedkomponenter

- **Utdanningsinnhold**: 24 strukturerte leksjoner organisert i prosjektbaserte moduler
- **Praktiske prosjekter**: Terrarium, Skrivespill, Nettleserutvidelse, Romspill, Bankapp, Kodeeditor og AI-chatassistent
- **Interaktive quizer**: 48 quizer med 3 spørsmål hver (før/etter leksjon)
- **Flerspråklig støtte**: Automatiserte oversettelser til 50+ språk via GitHub Actions
- **Teknologier**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (for AI-prosjekter)

### Arkitektur

- Utdanningsrepository med leksjonsbasert struktur
- Hver leksjonsmappe inneholder README, kodeeksempler og løsninger
- Frittstående prosjekter i separate kataloger (quiz-app, ulike leksjonsprosjekter)
- Oversettelsessystem ved bruk av GitHub Actions (co-op-translator)
- Dokumentasjon levert via Docsify og tilgjengelig som PDF

## Oppsettskommandoer

Dette repositoryet er primært for konsumering av utdanningsinnhold. For å jobbe med spesifikke prosjekter:

### Hovedrepository-oppsett

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Oppsett av Quiz-app (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
```

### Bankprosjekt-API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Start API server
npm run lint       # Run ESLint
npm run format     # Format with Prettier
```

### Nettleserutvidelsesprosjekter

```bash
cd 5-browser-extension/solution
npm install
# Follow browser-specific extension loading instructions
```

### Romspillprosjekter

```bash
cd 6-space-game/solution
npm install
# Open index.html in browser or use Live Server
```

### Chat-prosjekt (Python-backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Set GITHUB_TOKEN environment variable
python api.py
```

## Utviklingsarbeidsflyt

### For innholdsbidragsytere

1. **Fork repositoryet** til din GitHub-konto
2. **Klon din fork** lokalt
3. **Opprett en ny gren** for endringene dine
4. Gjør endringer i leksjonsinnhold eller kodeeksempler
5. Test eventuelle kodeendringer i relevante prosjektkataloger
6. Send inn pull requests i henhold til retningslinjene for bidrag

### For lærende

1. Fork eller klon repositoryet
2. Naviger til leksjonskatalogene i rekkefølge
3. Les README-filene for hver leksjon
4. Fullfør før-leksjonsquizer på https://ff-quizzes.netlify.app/web/
5. Jobb gjennom kodeeksempler i leksjonsmapper
6. Fullfør oppgaver og utfordringer
7. Ta etter-leksjonsquizer

### Live utvikling

- **Dokumentasjon**: Kjør `docsify serve` i rotkatalogen (port 3000)
- **Quiz-app**: Kjør `npm run dev` i quiz-app-katalogen
- **Prosjekter**: Bruk VS Code Live Server-utvidelsen for HTML-prosjekter
- **API-prosjekter**: Kjør `npm start` i respektive API-kataloger

## Testinstruksjoner

### Testing av Quiz-app

```bash
cd quiz-app
npm run lint       # Check for code style issues
npm run build      # Verify build succeeds
```

### Testing av Bank-API

```bash
cd 7-bank-project/api
npm run lint       # Check for code style issues
node server.js     # Verify server starts without errors
```

### Generell testtilnærming

- Dette er et utdanningsrepository uten omfattende automatiserte tester
- Manuell testing fokuserer på:
  - Kodeeksempler kjører uten feil
  - Lenker i dokumentasjonen fungerer korrekt
  - Prosjektbygg fullføres vellykket
  - Eksempler følger beste praksis

### Sjekk før innsending

- Kjør `npm run lint` i kataloger med package.json
- Verifiser at markdown-lenker er gyldige
- Test kodeeksempler i nettleser eller Node.js
- Sjekk at oversettelser opprettholder riktig struktur

## Retningslinjer for kodestil

### JavaScript

- Bruk moderne ES6+ syntaks
- Følg standard ESLint-konfigurasjoner som er gitt i prosjektene
- Bruk meningsfulle variabel- og funksjonsnavn for pedagogisk klarhet
- Legg til kommentarer som forklarer konsepter for lærende
- Formater med Prettier der det er konfigurert

### HTML/CSS

- Semantiske HTML5-elementer
- Prinsipper for responsivt design
- Klare klassenavnkonvensjoner
- Kommentarer som forklarer CSS-teknikker for lærende

### Python

- PEP 8-stilretningslinjer
- Klare, pedagogiske kodeeksempler
- Type hints der det er nyttig for læring

### Markdown-dokumentasjon

- Klar overskriftsstruktur
- Kodeblokker med språkspecifikasjon
- Lenker til tilleggsmateriell
- Skjermbilder og bilder i `images/`-kataloger
- Alt-tekst for bilder for tilgjengelighet

### Filorganisering

- Leksjoner nummerert sekvensielt (1-getting-started-lessons, 2-js-basics, osv.)
- Hvert prosjekt har `solution/` og ofte `start/` eller `your-work/`-kataloger
- Bilder lagret i leksjonsspesifikke `images/`-mapper
- Oversettelser i `translations/{language-code}/`-struktur

## Bygging og distribusjon

### Distribusjon av Quiz-app (Azure Static Web Apps)

Quiz-appen er konfigurert for distribusjon via Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Creates dist/ folder
# Deploys via GitHub Actions workflow on push to main
```

Konfigurasjon for Azure Static Web Apps:
- **App-plassering**: `/quiz-app`
- **Output-plassering**: `dist`
- **Arbeidsflyt**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generering av dokumentasjon som PDF

```bash
npm install                    # Install docsify-to-pdf
npm run convert               # Generate PDF from docs
```

### Docsify-dokumentasjon

```bash
npm install -g docsify-cli    # Install Docsify globally
docsify serve                 # Serve on localhost:3000
```

### Prosjektspesifikke bygg

Hver prosjektkatalog kan ha sin egen byggeprosess:
- Vue-prosjekter: `npm run build` lager produksjonsbundler
- Statisk prosjekter: Ingen byggeprosess, server filene direkte

## Retningslinjer for pull requests

### Tittelformat

Bruk klare, beskrivende titler som indikerer endringsområdet:
- `[Quiz-app] Legg til ny quiz for leksjon X`
- `[Lesson-3] Rett skrivefeil i terrarium-prosjekt`
- `[Translation] Legg til spansk oversettelse for leksjon 5`
- `[Docs] Oppdater oppsettsinstruksjoner`

### Nødvendige sjekker

Før du sender inn en PR:

1. **Kodekvalitet**:
   - Kjør `npm run lint` i berørte prosjektkataloger
   - Rett alle linting-feil og advarsler

2. **Byggverifisering**:
   - Kjør `npm run build` hvis aktuelt
   - Sørg for at det ikke er byggefeil

3. **Lenkevalidering**:
   - Test alle markdown-lenker
   - Verifiser at bildereferanser fungerer

4. **Innholdsrevisjon**:
   - Korrekturles for stave- og grammatikkfeil
   - Sørg for at kodeeksempler er korrekte og pedagogiske
   - Verifiser at oversettelser opprettholder original mening

### Krav til bidrag

- Godta Microsoft CLA (automatisk sjekk ved første PR)
- Følg [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Se [CONTRIBUTING.md](./CONTRIBUTING.md) for detaljerte retningslinjer
- Referer til issuenumre i PR-beskrivelsen hvis aktuelt

### Gjennomgangsprosess

- PR-er gjennomgås av vedlikeholdere og fellesskapet
- Pedagogisk klarhet prioriteres
- Kodeeksempler bør følge gjeldende beste praksis
- Oversettelser gjennomgås for nøyaktighet og kulturell tilpasning

## Oversettelsessystem

### Automatisert oversettelse

- Bruker GitHub Actions med co-op-translator arbeidsflyt
- Oversetter automatisk til 50+ språk
- Kildefiler i hovedkataloger
- Oversatte filer i `translations/{language-code}/`-kataloger

### Legge til manuelle forbedringer i oversettelser

1. Finn filen i `translations/{language-code}/`
2. Gjør forbedringer mens du opprettholder strukturen
3. Sørg for at kodeeksempler forblir funksjonelle
4. Test eventuelt lokaliserte quizinnhold

### Metadata for oversettelser

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

## Feilsøking og problemløsning

### Vanlige problemer

**Quiz-appen starter ikke**:
- Sjekk Node.js-versjon (v14+ anbefalt)
- Slett `node_modules` og `package-lock.json`, kjør `npm install` på nytt
- Sjekk for portkonflikter (standard: Vite bruker port 5173)

**API-serveren starter ikke**:
- Verifiser at Node.js-versjonen oppfyller minimumskravene (node >=10)
- Sjekk om porten allerede er i bruk
- Sørg for at alle avhengigheter er installert med `npm install`

**Nettleserutvidelsen laster ikke**:
- Verifiser at manifest.json er riktig formatert
- Sjekk nettleserkonsollen for feil
- Følg nettleserspesifikke instruksjoner for installasjon av utvidelser

**Problemer med Python-chatprosjekt**:
- Sørg for at OpenAI-pakken er installert: `pip install openai`
- Verifiser at GITHUB_TOKEN miljøvariabelen er satt
- Sjekk tilgangstillatelser for GitHub Models

**Docsify serverer ikke dokumentasjon**:
- Installer docsify-cli globalt: `npm install -g docsify-cli`
- Kjør fra repositoryets rotkatalog
- Sjekk at `docs/_sidebar.md` eksisterer

### Tips for utviklingsmiljø

- Bruk VS Code med Live Server-utvidelsen for HTML-prosjekter
- Installer ESLint og Prettier-utvidelser for konsistent formatering
- Bruk nettleserens utviklerverktøy for feilsøking av JavaScript
- For Vue-prosjekter, installer Vue DevTools nettleserutvidelse

### Ytelseshensyn

- Et stort antall oversatte filer (50+ språk) betyr at full kloning er stor
- Bruk grunnleggende kloning hvis du kun jobber med innhold: `git clone --depth 1`
- Ekskluder oversettelser fra søk når du jobber med engelsk innhold
- Byggeprosesser kan være trege ved første kjøring (npm install, Vite build)

## Sikkerhetshensyn

### Miljøvariabler

- API-nøkler skal aldri committes til repositoryet
- Bruk `.env`-filer (allerede i `.gitignore`)
- Dokumenter nødvendige miljøvariabler i prosjekt-README-er

### Python-prosjekter

- Bruk virtuelle miljøer: `python -m venv venv`
- Hold avhengigheter oppdatert
- GitHub-tokens bør ha minimale nødvendige tillatelser

### Tilgang til GitHub Models

- Personlige tilgangstokens (PAT) kreves for GitHub Models
- Tokens bør lagres som miljøvariabler
- Aldri committ tokens eller legitimasjon

## Tilleggsnotater

### Målgruppe

- Helt nybegynnere innen webutvikling
- Studenter og selvstudenter
- Lærere som bruker pensumet i klasserommet
- Innholdet er designet for tilgjengelighet og gradvis ferdighetsbygging

### Pedagogisk filosofi

- Prosjektbasert læringsmetode
- Hyppige kunnskapssjekker (quizer)
- Praktiske kodeøvelser
- Eksempler med reell anvendelse
- Fokus på grunnleggende før rammeverk

### Vedlikehold av repository

- Aktivt fellesskap av lærende og bidragsytere
- Regelmessige oppdateringer av avhengigheter og innhold
- Issues og diskusjoner overvåkes av vedlikeholdere
- Oversettelsesoppdateringer automatisert via GitHub Actions

### Relaterte ressurser

- [Microsoft Learn-moduler](https://docs.microsoft.com/learn/)
- [Student Hub-ressurser](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) anbefales for lærende
- Tilleggskurs: Generativ AI, Data Science, ML, IoT-pensum tilgjengelig

### Arbeid med spesifikke prosjekter

For detaljerte instruksjoner om individuelle prosjekter, se README-filene i:
- `quiz-app/README.md` - Vue 3 quiz-applikasjon
- `7-bank-project/README.md` - Bankapplikasjon med autentisering
- `5-browser-extension/README.md` - Utvikling av nettleserutvidelse
- `6-space-game/README.md` - Canvas-basert spillutvikling
- `9-chat-project/README.md` - AI-chatassistentprosjekt

### Monorepo-struktur

Selv om det ikke er en tradisjonell monorepo, inneholder dette repositoryet flere uavhengige prosjekter:
- Hver leksjon er selvstendig
- Prosjekter deler ikke avhengigheter
- Arbeid med individuelle prosjekter uten å påvirke andre
- Klon hele repoet for den fulle pensumopplevelsen

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi tilstreber nøyaktighet, vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.