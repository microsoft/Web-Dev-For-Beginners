# AGENTS.md

## Prosjektoversikt

Dette er et utdanningskurslager for å lære webutviklingsgrunnlag til nybegynnere. Pensumet er et omfattende 12-ukers kurs utviklet av Microsoft Cloud Advocates, med 24 praktiske leksjoner som dekker JavaScript, CSS og HTML.

### Viktige komponenter

- **Utdanningsinnhold**: 24 strukturerte leksjoner organisert i prosjektbaserte moduler
- **Praktiske prosjekter**: Terrarium, Typing Game, Nettleserutvidelse, Space Game, Bank-app, Kodeeditor og AI Chat Assistant
- **Interaktive quizer**: 48 quizer med 3 spørsmål hver (før/etter-leksjon vurderinger)
- **Flerspråklig støtte**: Automatiserte oversettelser til 50+ språk via GitHub Actions
- **Teknologier**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (for AI-prosjekter)

### Arkitektur

- Utdanningslager med leksjonsbasert struktur
- Hver leksjonsmappe inneholder README, kodeeksempler og løsninger
- Selvstendige prosjekter i separate kataloger (quiz-app, diverse leksjonsprosjekter)
- Oversettelsessystem med GitHub Actions (co-op-translator)
- Dokumentasjon levert via Docsify og tilgjengelig som PDF

## Oppsettskommandoer

Dette repositoriet er primært for konsumering av utdanningsinnhold. For arbeid med spesifikke prosjekter:

### Hovedrepositorieoppsett

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

### For innholdsbidragsytere

1. **Fork repositoriet** til din GitHub-konto
2. **Klone ditt fork** lokalt
3. **Opprett en ny branch** for dine endringer
4. Gjør endringer i leksjonsinnhold eller kodeeksempler
5. Test eventuelle kodeendringer i relevante prosjektkataloger
6. Send pull requests i henhold til bidragsretningslinjer

### For lærende

1. Fork eller klone repositoriet
2. Naviger sekvensielt gjennom leksjonskataloger
3. Les README-filer for hver leksjon
4. Fullfør pre-leksjonsquizer på https://ff-quizzes.netlify.app/web/
5. Arbeid med kodeeksempler i leksjonsmapper
6. Fullfør oppgaver og utfordringer
7. Ta post-leksjonsquizer

### Live utvikling

- **Dokumentasjon**: Kjør `docsify serve` i rot (port 3000)
- **Quiz App**: Kjør `npm run dev` i quiz-app katalog
- **Prosjekter**: Bruk VS Code Live Server extension for HTML-prosjekter
- **API Prosjekter**: Kjør `npm start` i aktuelle API-kataloger

## Testinstruksjoner

### Quiz App testing

```bash
cd quiz-app
npm run lint       # Sjekk for kode stilproblemer
npm run build      # Bekreft at byggingen lykkes
```

### Bank API testing

```bash
cd 7-bank-project/api
npm run lint       # Sjekk for kode stilproblemer
node server.js     # Verifiser at serveren starter uten feil
```

### Generell testtilnærming

- Dette er et utdanningslager uten omfattende automatiserte tester
- Manuell testing fokuserer på:
  - Kodeeksempler kjører uten feil
  - Lenker i dokumentasjon fungerer korrekt
  - Prosjektbygg fullføres uten feil
  - Eksempler følger beste praksis

### Sjekk før innsending

- Kjør `npm run lint` i kataloger med package.json
- Verifiser at markdown-lenker er gyldige
- Test kodeeksempler i nettleser eller Node.js
- Sjekk at oversettelser opprettholder riktig struktur

## Kodestil retningslinjer

### JavaScript

- Bruk moderne ES6+ syntaks
- Følg standard ESLint-konfigurasjoner gitt i prosjektene
- Bruk meningsfulle variabel- og funksjonsnavn for pedagogisk tydelighet
- Legg til kommentarer som forklarer konsepter for lærende
- Formater med Prettier der det er konfigurert

### HTML/CSS

- Semantiske HTML5-elementer
- Responsive designprinsipper
- Klare klassifikasjonsnavnkonvensjoner
- Kommenterer CSS-teknikker for lærende

### Python

- PEP 8 stilretningslinjer
- Klare, pedagogiske kodeeksempler
- Typehinting der det er hjelpsomt for læring

### Markdown dokumentasjon

- Klar overskriftshierarki
- Kodeblokker med språkspecifikasjon
- Lenker til tilleggsressurser
- Skjermbilder og bilder i `images/` kataloger
- Alt-tekst for bilder for tilgjengelighet

### Filorganisering

- Leksjoner nummerert sekvensielt (1-getting-started-lessons, 2-js-basics, osv.)
- Hvert prosjekt har `solution/` og ofte `start/` eller `your-work/` kataloger
- Bilder lagret i leksjonsspesifikke `images/` mapper
- Oversettelser i `translations/{language-code}/` struktur

## Bygging og distribusjon

### Quiz App distribusjon (Azure Static Web Apps)

Quiz-app er konfigurert for Azure Static Web Apps distribusjon:

```bash
cd quiz-app
npm run build      # Oppretter dist/-mappe
# Distribuerer via GitHub Actions workflow ved push til main
```

Azure Static Web Apps konfigurasjon:
- **App-lokasjon**: `/quiz-app`
- **Output-lokasjon**: `dist`
- **Arbeidsflyt**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generering av PDF-dokumentasjon

```bash
npm install                    # Installer docsify-to-pdf
npm run convert               # Generer PDF fra docs
```

### Docsify dokumentasjon

```bash
npm install -g docsify-cli    # Installer Docsify globalt
docsify serve                 # Server på localhost:3000
```

### Prosjektspesifikke bygg

Hver prosjektkatalog kan ha egen byggprosess:
- Vue prosjekter: `npm run build` lager produksjonspakker
- Statisk prosjekter: Ingen byggesteg, server filer direkte

## Retningslinjer for pull requests

### Tittelformat

Bruk klare, beskrivende titler som angir endringsområde:
- `[Quiz-app] Legg til ny quiz for leksjon X`
- `[Lesson-3] Rett skrivefeil i terrarium-prosjekt`
- `[Translation] Legg til spansk oversettelse for leksjon 5`
- `[Docs] Oppdater oppsettinstruksjoner`

### Påkrevde sjekker

Før innsending av PR:

1. **Kodekvalitet**:
   - Kjør `npm run lint` i berørte prosjektkataloger
   - Fiks alle linting-feil og advarsler

2. **Byggverifisering**:
   - Kjør `npm run build` hvis aktuelt
   - Sørg for ingen byggefeil

3. **Lenkevalidering**:
   - Test alle markdown-lenker
   - Verifiser bildehenvisninger fungerer

4. **Innholdsrevisjon**:
   - Korrekturles for rettskrivning og grammatikk
   - Sørg for at kodeeksempler er korrekte og pedagogiske
   - Verifiser at oversettelser bevarer original betydning

### Bidragskrav

- Godta Microsoft CLA (automatisk sjekk ved første PR)
- Følg [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Se [CONTRIBUTING.md](./CONTRIBUTING.md) for detaljerte retningslinjer
- Referer til issues i PR-beskrivelsen hvis aktuelt

### Gjennomgangsprosess

- PR-er vurderes av vedlikeholdere og fellesskap
- Pedagogisk klarhet prioriteres
- Kodeeksempler bør følge gjeldende beste praksis
- Oversettelser vurderes for nøyaktighet og kulturtilpasning

## Oversettelsessystem

### Automatisert oversettelse

- Bruker GitHub Actions med co-op-translator arbeidsflyt
- Oversetter automatisk til 50+ språk
- Kildefiler i hovedkataloger
- Oversatte filer i `translations/{language-code}/` kataloger

### Legge til manuelle oversettelsesforbedringer

1. Finn fil i `translations/{language-code}/`
2. Gjør forbedringer med strukturintakt
3. Sørg for at kodeeksempler fortsatt fungerer
4. Test eventuelt lokalisert quiz-innhold

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

## Feilsøking og problemløsing

### Vanlige problemer

**Quiz app starter ikke**:
- Sjekk Node.js versjon (v14+ anbefalt)
- Slett `node_modules` og `package-lock.json`, kjør `npm install` på nytt
- Sjekk portkonflikter (standard: Vite bruker port 5173)

**API-server starter ikke**:
- Verifiser Node.js versjon oppfyller minimum (node >=10)
- Sjekk om port allerede er i bruk
- Sørg for at alle avhengigheter er installert med `npm install`

**Nettleserutvidelse lastes ikke**:
- Sjekk at manifest.json er korrekt formatert
- Se etter feil i nettleserkonsoll
- Følg nettleserspesifikke installasjonsinstruksjoner

**Python chat-prosjekt problemer**:
- Kontroller at OpenAI-pakken er installert: `pip install openai`
- Verifiser at GITHUB_TOKEN miljøvariabel er satt
- Sjekk GitHub Models tilgangstillatelser

**Docsify serverer ikke dokumentasjon**:
- Installer docsify-cli globalt: `npm install -g docsify-cli`
- Kjør fra repositories rotkatalog
- Sjekk at `docs/_sidebar.md` eksisterer

### Tips for utviklingsmiljø

- Bruk VS Code med Live Server-extension for HTML-prosjekter
- Installer ESLint og Prettier extensions for jevn formatering
- Bruk nettleserens utviklerverktøy til å feilsøke JavaScript
- For Vue prosjekter, installer Vue DevTools nettleserutvidelse

### Ytelsesmessige hensyn

- Stort antall oversatte filer (50+ språk) gjør hele kloner store
- Bruk grunne kloner hvis du kun skal jobbe med innhold: `git clone --depth 1`
- Ekskluder oversettelser fra søk når du arbeider med engelsk innhold
- Byggeprosesser kan være trege første gang (npm install, Vite build)

## Sikkerhetshensyn

### Miljøvariabler

- API-nøkler skal aldri legges i repositoriet
- Bruk `.env` filer (allereie i `.gitignore`)
- Dokumenter nødvendige miljøvariabler i prosjektets README-filer

### Python-prosjekter

- Bruk virtuelle miljøer: `python -m venv venv`
- Hold avhengigheter oppdatert
- GitHub-tokens skal ha minimale nødvendige tillatelser

### GitHub Models tilgang

- Personlige tilgangstokener (PAT) kreves for GitHub Models
- Tokens skal lagres som miljøvariabler
- Aldri legg tokens eller legitimasjon inn i repositoriet

## Tilleggsnotater

### Målgruppe

- Fullstendige nybegynnere i webutvikling
- Studenter og selvlærende
- Lærere som bruker pensum i klasserommet
- Innhold designet for tilgjengelighet og gradvis ferdighetsbygging

### Utdanningsfilosofi

- Prosjektbasert læringstilnærming
- Hyppige kunnskapssjekker (quizer)
- Praktiske kodeøvelser
- Eksempler på virkelige bruksområder
- Fokuser på grunnleggende før rammeverk

### Vedlikehold av repositoriet

- Aktivt fellesskap av lærende og bidragsytere
- Regelmessige oppdateringer av avhengigheter og innhold
- Issues og diskusjoner overvåkes av vedlikeholdere
- Oversettelsesoppdateringer automatisert via GitHub Actions

### Relaterte ressurser

- [Microsoft Learn-moduler](https://docs.microsoft.com/learn/)
- [Student Hub-ressurser](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) anbefalt for lærende
- Tilleggs kurs: Generativ AI, Data Science, ML, IoT pensum tilgjengelig

### Arbeide med spesifikke prosjekter

For detaljerte instruksjoner om individuelle prosjekter, se README-filene i:
- `quiz-app/README.md` - Vue 3 quiz-applikasjon
- `7-bank-project/README.md` - Bankapplikasjon med autentisering
- `5-browser-extension/README.md` - Nettleserutvidelsesutvikling
- `6-space-game/README.md` - Canvas-basert spillutvikling
- `9-chat-project/README.md` - AI chatteassistent-prosjekt

### Monorepo-struktur

Selv om det ikke er et tradisjonelt monorepo, inneholder dette repositoriet flere uavhengige prosjekter:
- Hver leksjon er selvstendig
- Prosjekter deler ikke avhengigheter
- Arbeid med individuelle prosjekter uten å påvirke andre
- Klon hele repo for full pensumopplevelse

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Ansvarsfraskrivelse**:
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vennligst vær oppmerksom på at automatiske oversettelser kan inneholde feil eller unøyaktigheter. Det opprinnelige dokumentet på originalsproget bør betraktes som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi påtar oss ikke ansvar for misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->