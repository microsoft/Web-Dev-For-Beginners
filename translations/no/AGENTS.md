# AGENTS.md

## Prosjektoversikt

Dette er et undervisningspensum-repositorium for å lære webutviklingsgrunnleggende til nybegynnere. Pensumet er et omfattende 12-ukers kurs utviklet av Microsoft Cloud Advocates, med 24 praktiske leksjoner som dekker JavaScript, CSS og HTML.

### Nøkkelkomponenter

- **Undervisningsinnhold**: 24 strukturerte leksjoner organisert i prosjektbaserte moduler
- **Praktiske Prosjekter**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor og AI Chat Assistant
- **Interaktive Quizer**: 48 quizer med 3 spørsmål hver (før-/etter-leksjonsvurderinger)
- **Flerspråklig Støtte**: Automatiske oversettelser til 50+ språk via GitHub Actions
- **Teknologier**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (for AI-prosjekter)

### Arkitektur

- Undervisningsrepo med leksjonsbasert struktur
- Hver leksjonsmappe inneholder README, kodeeksempler og løsninger
- Selvstendige prosjekter i egne kataloger (quiz-app, ulike leksjonsprosjekter)
- Oversettelsessystem ved bruk av GitHub Actions (co-op-translator)
- Dokumentasjon levert via Docsify og tilgjengelig som PDF

## Oppsettkommandoer

Dette repositoriet er primært for konsumering av undervisningsinnhold. For arbeid med spesifikke prosjekter:

### Hovedrepositorioppsett

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz App Oppsett (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Start utviklingsserver
npm run build      # Bygg for produksjon
npm run lint       # Kjør ESLint
```

### Bankprosjekt API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Start API-server
npm run lint       # Kjør ESLint
npm run format     # Formater med Prettier
```

### Browser Extension Prosjekter

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

### Chat Prosjekt (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Sett miljøvariabelen GITHUB_TOKEN
python api.py
```

## Utviklingsflyt

### For Innholdsbidragsytere

1. **Gaffel repositoriet** til din GitHub-konto
2. **Klon din gaffel** lokalt
3. **Opprett en ny gren** for dine endringer
4. Gjør endringer i leksjonsinnhold eller kodeeksempler
5. Test eventuelle kodeendringer i relevante prosjektkataloger
6. Send inn pull requests i henhold til retningslinjene for bidrag

### For Lærende

1. Gaffel eller klon repositoriet
2. Naviger til leksjonskataloger i rekkefølge
3. Les README-filer for hver leksjon
4. Fullfør pre-leksjonquizer på https://ff-quizzes.netlify.app/web/
5. Arbeid gjennom kodeeksempler i leksjonsmapper
6. Fullfør oppgaver og utfordringer
7. Ta post-leksjonquizer

### Live Utvikling

- **Dokumentasjon**: Kjør `docsify serve` i rotmappen (port 3000)
- **Quiz App**: Kjør `npm run dev` i quiz-app katalogen
- **Prosjekter**: Bruk VS Code Live Server-utvidelsen for HTML-prosjekter
- **API Prosjekter**: Kjør `npm start` i respektive API-kataloger

## Testinstruksjoner

### Quiz App Testing

```bash
cd quiz-app
npm run lint       # Sjekk etter problemer med kodeformat
npm run build      # Verifiser at byggingen lykkes
```

### Bank API Testing

```bash
cd 7-bank-project/api
npm run lint       # Sjekk for problemer med kodesstil
node server.js     # Verifiser at serveren starter uten feil
```

### Generell Testtilnærming

- Dette er et undervisningsrepo uten omfattende automatiserte tester
- Manuell testing fokuserer på:
  - Kodeeksempler kjører uten feil
  - Lenker i dokumentasjon fungerer korrekt
  - Prosjektbuilds fullføres vellykket
  - Eksempler følger beste praksis

### Sjekkliste før innsending

- Kjør `npm run lint` i kataloger med package.json
- Bekreft at markdown-lenker er gyldige
- Test kodeeksempler i nettleser eller Node.js
- Sjekk at oversettelser beholder riktig struktur

## Retningslinjer for Kodestil

### JavaScript

- Bruk moderne ES6+ syntaks
- Følg standard ESLint-konfigurasjoner gitt i prosjektene
- Bruk meningsfulle variabel- og funksjonsnavn for undervisningsklarhet
- Legg til kommentarer som forklarer konsepter for lærende
- Formater med Prettier der det er konfigurert

### HTML/CSS

- Semantiske HTML5-elementer
- Responsivt design-prinsipper
- Klare navnekonvensjoner for klasser
- Kommentarer som forklarer CSS-teknikker for lærende

### Python

- PEP 8 stilretningslinjer
- Klare, pedagogiske kodeeksempler
- Typehint der det er nyttig for læring

### Markdown Dokumentasjon

- Klar overskriftsstruktur
- Kodeblokker med språkspecificering
- Lenker til tilleggsmateriale
- Skjermbilder og bilder i `images/`-mapper
- Alternativ tekst for bilder for tilgjengelighet

### Filorganisering

- Leksjoner nummerert sekvensielt (1-getting-started-lessons, 2-js-basics, osv.)
- Hvert prosjekt har `solution/` og ofte `start/` eller `your-work/` kataloger
- Bilder lagret i leksjonsspesifikke `images/`-mapper
- Oversettelser i `translations/{language-code}/` struktur

## Bygg og Distribusjon

### Quiz App Distribusjon (Azure Static Web Apps)

Quiz-appen er konfigurert for Azure Static Web Apps distribusjon:

```bash
cd quiz-app
npm run build      # Oppretter dist/-mappe
# Distribuerer via GitHub Actions arbeidsflyt ved push til main
```

Azure Static Web Apps konfigurasjon:
- **App-lokasjon**: `/quiz-app`
- **Output-lokasjon**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokumentasjons-PDF Generering

```bash
npm install                    # Installer docsify-to-pdf
npm run convert               # Generer PDF fra docs
```

### Docsify Dokumentasjon

```bash
npm install -g docsify-cli    # Installer Docsify globalt
docsify serve                 # Server på localhost:3000
```

### Prosjektspesifikke Builds

Hver prosjektmappe kan ha sin egen byggeprosess:
- Vue-prosjekter: `npm run build` lager produksjonspakker
- Statisk prosjekter: Ingen bygge-steg, filene serveres direkte

## Retningslinjer for Pull Requests

### Tittelformat

Bruk klare, beskrivende titler som indikerer endringsområdet:
- `[Quiz-app] Legg til ny quiz for leksjon X`
- `[Lesson-3] Rett skrivefeil i terrarium-prosjektet`
- `[Translation] Legg til spansk oversettelse for leksjon 5`
- `[Docs] Oppdater oppsettinstruksjoner`

### Obligatoriske Sjekker

Før innsending av PR:

1. **Kodekvalitet**:
   - Kjør `npm run lint` i berørte prosjektkataloger
   - Rett opp alle linting-feil og advarsler

2. **Byggeverifisering**:
   - Kjør `npm run build` om relevant
   - Sørg for ingen byggefeil

3. **Lenkevalidering**:
   - Test alle markdown-lenker
   - Sjekk at bildehenvisninger fungerer

4. **Innholdsgjennomgang**:
   - Korrekturles for stave- og grammatikkfeil
   - Bekreft at kodeeksempler er korrekte og pedagogiske
   - Verifiser at oversettelser bevarer original betydning

### Bidragskrav

- Aksepter Microsoft CLA (automatisk sjekk ved første PR)
- Følg [Microsofts Offentlige Kodeks for Oppførsel](https://opensource.microsoft.com/codeofconduct/)
- Se [CONTRIBUTING.md](./CONTRIBUTING.md) for detaljerte retningslinjer
- Referer til issues i PR-beskrivelse om relevant

### Gjennomgangsprosess

- PRer gjennomgås av vedlikeholdere og community
- Pedagogisk klarhet prioriteres
- Kodeeksempler bør følge gjeldende beste praksis
- Oversettelser gjennomgås for nøyaktighet og kulturell hensiktsmessighet

## Oversettelsessystem

### Automatisk Oversettelse

- Bruker GitHub Actions med co-op-translator workflow
- Oversetter til 50+ språk automatisk
- Kildefiler i hovedkataloger
- Oversatte filer i `translations/{language-code}/` kataloger

### Legge til Manuelle Oversettelsesforbedringer

1. Finn fil i `translations/{language-code}/`
2. Gjør forbedringer mens strukturen beholdes
3. Sørg for at kodeeksempler fortsatt fungerer
4. Test eventuelt lokaliserte quiz-innhold

### Oversettelsesmetadata

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

## Feilsøking og Problemløsning

### Vanlige Problemer

**Quiz-appen starter ikke**:
- Sjekk Node.js versjon (v14+ anbefalt)
- Slett `node_modules` og `package-lock.json`, kjør `npm install` på nytt
- Sjekk for portkonflikter (standard: Vite bruker port 5173)

**API-server starter ikke**:
- Verifiser at Node.js-versjonen er tilstrekkelig (node >=10)
- Sjekk om port allerede er i bruk
- Sørg for at alle avhengigheter er installert med `npm install`

**Browser extension lastes ikke**:
- Sjekk at manifest.json er riktig formatert
- Se etter feil i nettleserens konsoll
- Følg nettleserspesifikke instruksjoner for installasjon av utvidelsen

**Problemer med Python chat-prosjektet**:
- Sørg for at OpenAI-pakken er installert: `pip install openai`
- Verifiser at GITHUB_TOKEN miljøvariabel er satt
- Sjekk GitHub Models tilgangstillatelser

**Docsify server ikke dokumentasjonen**:
- Installer docsify-cli globalt: `npm install -g docsify-cli`
- Kjør fra repoets rotkatalog
- Sjekk at `docs/_sidebar.md` finnes

### Utviklingsmiljøtips

- Bruk VS Code med Live Server-utvidelsen for HTML-prosjekter
- Installer ESLint og Prettier-utvidelser for konsistent formatering
- Bruk nettleserens DevTools for JavaScript-feilsøking
- For Vue-prosjekter, installer Vue DevTools nettleserutvidelse

### Ytelseshensyn

- Mange oversatte filer (50+ språk) gjør fullstendige kloner store
- Bruk shallow clone hvis du bare jobber med innhold: `git clone --depth 1`
- Ekskluder oversettelser fra søk når du jobber med engelsk innhold
- Byggeprosesser kan være langsomme første gang (npm install, Vite build)

## Sikkerhetshensyn

### Miljøvariabler

- API-nøkler skal aldri legges i repositoriet
- Bruk `.env`-filer (allerede i `.gitignore`)
- Dokumenter nødvendige miljøvariabler i prosjektets README

### Python Prosjekter

- Bruk virtuelle miljøer: `python -m venv venv`
- Hold avhengigheter oppdatert
- GitHub-tokens bør ha minimale nødvendige tillatelser

### GitHub Models Tilgang

- Personlige tilgangstokener (PAT) kreves for GitHub Models
- Tokens bør lagres som miljøvariabler
- Aldri legg inn tokens eller påloggingsinformasjon i repoet

## Tilleggsnotater

### Målgruppe

- Komplett nybegynnere innen webutvikling
- Studenter og selvstudenter
- Lærere som bruker pensum i klasserommet
- Innholdet er designet for tilgjengelighet og gradvis ferdighetsbygging

### Pedagogisk Filosofi

- Prosjektbasert læringstilnærming
- Hyppige kunnskapssjekker (quizer)
- Praktiske kodingøvelser
- Virkelige eksempler på anvendelse
- Fokus på grunnleggende før rammeverk

### Vedlikehold av Repositoriet

- Aktivt samfunn av lærende og bidragsytere
- Regelmessige oppdateringer av avhengigheter og innhold
- Issues og diskusjoner overvåkes av vedlikeholdere
- Oversettelsesoppdateringer automatisert via GitHub Actions

### Relaterte Ressurser

- [Microsoft Learn-moduler](https://docs.microsoft.com/learn/)
- [Student Hub-ressurser](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) anbefalt for lærende
- Ytterligere kurs: Generative AI, Data Science, ML, IoT pensum tilgjengelig

### Arbeide med Spesifikke Prosjekter

For detaljerte instruksjoner om individuelle prosjekter, se README-filene i:
- `quiz-app/README.md` - Vue 3 quiz-applikasjon
- `7-bank-project/README.md` - Bankapplikasjon med autentisering
- `5-browser-extension/README.md` - Utvikling av nettleserutvidelse
- `6-space-game/README.md` - Canvas-basert spillutvikling
- `9-chat-project/README.md` - AI chat-assistentprosjekt

### Monorepo Struktur

Selv om dette ikke er et tradisjonelt monorepo, inneholder dette repositoriet flere uavhengige prosjekter:
- Hver leksjon er selvstendig
- Prosjektene deler ikke avhengigheter
- Arbeid med individuelle prosjekter uten å påvirke andre
- Klon hele repoet for full pensumopplevelse

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Ansvarsfraskrivelse**:
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vennligst vær oppmerksom på at automatiske oversettelser kan inneholde feil eller unøyaktigheter. Det opprinnelige dokumentet på morsmålet skal anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for eventuelle misforståelser eller feiltolkninger som følge av bruk av denne oversettelsen.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->