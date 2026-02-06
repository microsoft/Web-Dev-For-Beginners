# AGENTS.md

## Prosjektoversikt

Dette er et utdanningspensum-repositorium for å lære grunnleggende webutvikling til nybegynnere. Pensumet er et omfattende 12-ukers kurs utviklet av Microsoft Cloud Advocates, med 24 praktiske leksjoner som dekker JavaScript, CSS og HTML.

### Nøkkelkomponenter

- **Utdanningsinnhold**: 24 strukturerte leksjoner organisert i prosjektbaserte moduler
- **Praktiske prosjekter**: Terrarium, Typing Game, Nettleserutvidelse, Space Game, Bankapp, Kodeeditor og AI Chat Assistant
- **Interaktive quizzer**: 48 quizzer med 3 spørsmål hver (før/etter leksjon vurderinger)
- **Flerspråklig støtte**: Automatiserte oversettelser til 50+ språk via GitHub Actions
- **Teknologier**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (for AI-prosjekter)

### Arkitektur

- Utdannings-repositorium med leksebasert struktur
- Hver lekse-mappe inneholder README, kodeeksempler og løsninger
- Frittstående prosjekter i separate kataloger (quiz-app, ulike leksjonsprosjekter)
- Oversettelsessystem som bruker GitHub Actions (co-op-translator)
- Dokumentasjon levert via Docsify og tilgjengelig som PDF

## Oppsettskommandoer

Dette repositoriet er hovedsakelig for konsumering av utdanningsinnhold. For arbeid med spesifikke prosjekter:

### Hovedrepositorie-Setup

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz App Setup (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Start utviklingsserver
npm run build      # Bygg for produksjon
npm run lint       # Kjør ESLint
```

### Bank Prosjekt API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Start API-server
npm run lint       # Kjør ESLint
npm run format     # Formater med Prettier
```

### Nettleserutvidelsesprosjekter

```bash
cd 5-browser-extension/solution
npm install
# Følg nettleserspesifikke instruksjoner for lasting av utvidelser
```

### Space Game Prosjekter

```bash
cd 6-space-game/solution
npm install
# Åpne index.html i nettleser eller bruk Live Server
```

### Chat-prosjekt (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Sett miljøvariabelen GITHUB_TOKEN
python api.py
```

## Utviklingsarbeidsflyt

### For Innholds-bidragsytere

1. **Fork repositoriet** til din GitHub-konto
2. **Klon forken din** lokalt
3. **Lag en ny gren** for endringene dine
4. Gjør endringer i lekseinnhold eller kodeeksempler
5. Test kodeendringer i relevante prosjektmapper
6. Send pull requests i henhold til bidragsretningslinjer

### For Lærende

1. Fork eller klon repositoriet
2. Naviger sekvensielt gjennom leksemappene
3. Les README-filer for hver lekse
4. Fullfør forhånds-quizzer på https://ff-quizzes.netlify.app/web/
5. Jobb gjennom kodeeksempler i leksesidene
6. Fullfør oppgaver og utfordringer
7. Ta etter-quizzer

### Live Utvikling

- **Dokumentasjon**: Kjør `docsify serve` i rotmappen (port 3000)
- **Quiz App**: Kjør `npm run dev` i quiz-app katalogen
- **Prosjekter**: Bruk VS Code Live Server-utvidelsen for HTML-prosjekter
- **API-prosjekter**: Kjør `npm start` i respektive API-kataloger

## Testinstruksjoner

### Testing av Quiz App

```bash
cd quiz-app
npm run lint       # Sjekk for kode stil problemer
npm run build      # Verifiser at byggingen lykkes
```

### Testing av Bank API

```bash
cd 7-bank-project/api
npm run lint       # Sjekk for kode stil problemer
node server.js     # Bekreft at serveren starter uten feil
```

### Generell testtilnærming

- Dette er et utdanningsrepo uten omfattende automatiske tester
- Manuell testing fokuserer på:
  - At kodeeksempler kjører uten feil
  - At lenker i dokumentasjonen fungerer korrekt
  - At prosjekter bygges fullstendig uten feil
  - At eksempler følger beste praksis

### Sjekker før innsending

- Kjør `npm run lint` i kataloger med package.json
- Verifiser at markdown-lenker er gyldige
- Test kodeeksempler i nettleser eller Node.js
- Sjekk at oversettelser opprettholder riktig struktur

## Retningslinjer for kodestil

### JavaScript

- Bruk moderne ES6+ syntaks
- Følg standard ESLint-konfigurasjoner gitt i prosjektene
- Bruk meningsfulle variabel- og funksjonsnavn for pedagogisk klarhet
- Legg til kommentarer som forklarer konsepter for elever
- Formater med Prettier der det er konfigurert

### HTML/CSS

- Semantiske HTML5-elementer
- Responsivt design
- Klare navnekonvensjoner for klasser
- Kommentarer som forklarer CSS-teknikker for lærende

### Python

- PEP 8 stilretningslinjer
- Klare, pedagogiske kodeeksempler
- Typehinting hvor det er nyttig for læring

### Markdown-dokumentasjon

- Klar overskriftshierarki
- Kodeblokker med språkspesifikasjon
- Lenker til tilleggsressurser
- Skjermbilder og bilder i `images/`-mapper
- Alt-tekst for bilder for tilgjengelighet

### Filorganisering

- Leksjoner nummerert sekvensielt (1-getting-started-lessons, 2-js-basics, osv.)
- Hvert prosjekt har `solution/` og ofte `start/` eller `your-work/` mapper
- Bilder lagret i leksjonssp spesifikke `images/`-mapper
- Oversettelser i `translations/{language-code}/` struktur

## Building og distribusjon

### Quiz App-distribusjon (Azure Static Web Apps)

quiz-app er konfigurert for distribusjon på Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Oppretter dist/ mappe
# Distribuerer via GitHub Actions arbeidsflyt ved push til main
```

Azure Static Web Apps-konfigurasjon:
- **App-lokasjon**: `/quiz-app`
- **Output-lokasjon**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### PDF-generering av dokumentasjon

```bash
npm install                    # Installer docsify-to-pdf
npm run convert               # Generer PDF fra docs
```

### Docsify-dokumentasjon

```bash
npm install -g docsify-cli    # Installer Docsify globalt
docsify serve                 # Server på localhost:3000
```

### Prosjektspesifikke byggetrinn

Hver prosjektmappe kan ha egen byggeprosess:
- Vue-prosjekter: `npm run build` lager produksjonspakker
- Statisk prosjekter: Ingen byggeprosess, server filer direkte

## Retningslinjer for pull requests

### Tittel Format

Bruk klare, beskrivende titler som angir endringsområdet:
- `[Quiz-app] Legg til ny quiz for leksjon X`
- `[Lesson-3] Rett skrivefeil i terrarium-prosjekt`
- `[Translation] Legg til spansk oversettelse for leksjon 5`
- `[Docs] Oppdater oppsettsinstruksjoner`

### Påkrevde sjekker

Før innsending av PR:

1. **Kodekvalitet**:
   - Kjør `npm run lint` i berørte prosjektmapper
   - Rett alle lint-feil og advarsler

2. **Build-verifisering**:
   - Kjør `npm run build` om relevant
   - Sørg for ingen byggefeil

3. **Lenkevalidering**:
   - Test alle markdown-lenker
   - Sjekk at bildereferanser fungerer

4. **Innholdsrevisjon**:
   - Korrekturles for stave- og grammatikkfeil
   - Sørg for at kodeeksempler er korrekte og pedagogiske
   - Verifiser at oversettelser bevarer opprinnelig betydning

### Bidragskrav

- Godta Microsoft CLA (automatisk sjekk ved første PR)
- Følg [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Se [CONTRIBUTING.md](./CONTRIBUTING.md) for detaljerte retningslinjer
- Referer til sakernummer i PR-beskrivelse om relevant

### Gjennomgangsprosess

- PRer vurderes av vedlikeholdere og fellesskapet
- Pedagogisk klarhet prioriteres
- Kodeeksempler skal følge gjeldende beste praksis
- Oversettelser vurderes for nøyaktighet og kulturell tilpasning

## Oversettelsessystem

### Automatisert oversettelse

- Bruker GitHub Actions med co-op-translator workflow
- Oversetter automatisk til 50+ språk
- Kildefiler i hovedkataloger
- Oversatte filer i `translations/{language-code}/` kataloger

### Legge til manuelle forbedringer

1. Finn fil i `translations/{language-code}/`
2. Gjør forbedringer mens du bevarer struktur
3. Sørg for at kodeeksempler fortsatt fungerer
4. Test lokaliserte quiz-innhold

### Oversettelsesmetainformasjon

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

**API-server starter ikke**:
- Bekreft at Node.js-versjon er minimum (node >=10)
- Sjekk om port allerede er i bruk
- Sørg for at alle avhengigheter er installert med `npm install`

**Nettleserutvidelse lastes ikke**:
- Bekreft at manifest.json er korrekt formatert
- Sjekk nettleserkonsollen for feil
- Følg nettleserspesifikke installasjonsinstruksjoner

**Problemer med Python chat-prosjekt**:
- Sørg for at OpenAI-pakken er installert: `pip install openai`
- Bekreft at GITHUB_TOKEN miljøvariabel er satt
- Sjekk GitHub Models tilgangstillatelser

**Docsify serverer ikke dokumentasjon**:
- Installer docsify-cli globalt: `npm install -g docsify-cli`
- Kjør fra rotmappen til repositoriet
- Sjekk at `docs/_sidebar.md` eksisterer

### Tips for utviklingsmiljø

- Bruk VS Code med Live Server-utvidelse for HTML-prosjekter
- Installer ESLint og Prettier-utvidelser for konsistent formatering
- Bruk nettleserens DevTools for JavaScript-feilsøking
- For Vue-prosjekter, installer Vue DevTools nettleserutvidelse

### Ytelsesbetraktninger

- Stort antall oversatte filer (50+ språk) gjør fullstendige kloner store
- Bruk shallow clone om du kun jobber med innhold: `git clone --depth 1`
- Ekskluder oversettelser fra søk ved arbeid på engelsk innhold
- Byggeprosesser kan være treg ved første kjøring (npm install, Vite build)

## Sikkerhetsbetraktninger

### Miljøvariabler

- API-nøkler bør aldri legges i repositoriet
- Bruk `.env` filer (allerede i `.gitignore`)
- Dokumenter nødvendige miljøvariabler i prosjekt-READMEer

### Python Prosjekter

- Bruk virtuelle miljøer: `python -m venv venv`
- Hold avhengigheter oppdatert
- GitHub-tokener bør ha minimale nødvendige tillatelser

### GitHub Models tilgang

- Personal Access Tokens (PAT) kreves for GitHub Models
- Tokens skal lagres som miljøvariabler
- Aldri commit tokens eller påloggingsinformasjon

## Ytterligere merknader

### Målgruppe

- Fullstendige nybegynnere i webutvikling
- Studenter og selvstudenter
- Lærere som bruker pensum i klasserom
- Innholdet er designet for tilgjengelighet og gradvis ferdighetsoppbygging

### Pedagogisk filosofi

- Prosjektbasert læringstilnærming
- Hyppige kunnskapssjekker (quizzer)
- Praktisk koding
- Virkelige eksempler på anvendelse
- Fokus på grunnleggende før rammeverk

### Vedlikehold av repositoriet

- Aktivt fellesskap av lærende og bidragsytere
- Regelmessige oppdateringer av avhengigheter og innhold
- Saker og diskusjoner overvåkes av vedlikeholdere
- Oversettelsesoppdateringer automatisert via GitHub Actions

### Relaterte ressurser

- [Microsoft Learn-moduler](https://docs.microsoft.com/learn/)
- [Student Hub-ressurser](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) anbefalt for lærende
- Ytterligere kurs: Generativ AI, Data Science, ML, IoT pensum tilgjengelig

### Arbeide med spesifikke prosjekter

For detaljerte instruksjoner om individuelle prosjekter, se README-filene i:
- `quiz-app/README.md` - Vue 3 quiz-applikasjon
- `7-bank-project/README.md` - Bankapplikasjon med autentisering
- `5-browser-extension/README.md` - Nettleserutvidelsesutvikling
- `6-space-game/README.md` - Canvas-basert spillutvikling
- `9-chat-project/README.md` - AI chat-assistent prosjekt

### Monorepo-struktur

Selv om det ikke er et tradisjonelt monorepo, inneholder dette repositoriet flere uavhengige prosjekter:
- Hver lekse er selvstendig
- Prosjektene deler ikke avhengigheter
- Arbeid på individuelle prosjekter uten å påvirke andre
- Klon hele repoet for full pensumopplevelse

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Ansvarsfraskrivelse**:
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vennligst vær oppmerksom på at automatiske oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på dets opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for eventuelle misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->