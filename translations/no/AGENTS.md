# AGENTS.md

## Prosjektoversikt

Dette er et utdanningsrepository for å lære bort grunnleggende webutvikling til nybegynnere. Pensumet er et omfattende 12-ukers kurs utviklet av Microsoft Cloud Advocates, med 24 praktiske leksjoner som dekker JavaScript, CSS og HTML.

### Nøkkelkomponenter

- **Utdanningsinnhold**: 24 strukturerte leksjoner organisert i prosjektbaserte moduler
- **Praktiske prosjekter**: Terrarium, Typing Game, Nettleserutvidelse, Space Game, Banking App, Code Editor og AI Chat Assistant
- **Interaktive quizzer**: 48 quizzer med 3 spørsmål hver (før og etter leksjon)
- **Flerspråklig støtte**: Automatiserte oversettelser for 50+ språk via GitHub Actions
- **Teknologier**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (for AI-prosjekter)

### Arkitektur

- Utdanningsrepository med leksjonsbasert struktur
- Hver leksjonsmappe inneholder README, kodeeksempler og løsninger
- Frittstående prosjekter i egne kataloger (quiz-app, ulike leksjonsprosjekter)
- Oversettelsessystem ved bruk av GitHub Actions (co-op-translator)
- Dokumentasjon levert via Docsify og tilgjengelig som PDF

## Oppsettskommandoer

Dette repositoryet er primært for konsumering av utdanningsinnhold. For arbeid med spesifikke prosjekter:

### Hovedrepository Oppsett

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

### Chat Prosjekt (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Sett miljøvariabelen GITHUB_TOKEN
python api.py
```

## Utviklingsarbeidsflyt

### For innholdsleverandører

1. **Fork repositoryet** til din GitHub-konto
2. **Klon din fork** lokalt
3. **Opprett en ny branch** for endringene dine
4. Gjør endringer i leksjonsinnhold eller kodeeksempler
5. Test eventuelle kodeendringer i relevante prosjektkataloger
6. Send pull requests i henhold til retningslinjene for bidrag

### For lærende

1. Fork eller klon repositoryet
2. Naviger til leksjonskatalogene i rekkefølge
3. Les README-filene for hver leksjon
4. Fullfør før-leksjon quizzer på https://ff-quizzes.netlify.app/web/
5. Jobb gjennom kodeeksempler i leksjonsmappene
6. Fullfør oppgaver og utfordringer
7. Ta etter-leksjon quizzer

### Live utvikling

- **Dokumentasjon**: Kjør `docsify serve` i roten (port 3000)
- **Quiz App**: Kjør `npm run dev` i quiz-app katalogen
- **Prosjekter**: Bruk VS Code Live Server extension for HTML-prosjekter
- **API-prosjekter**: Kjør `npm start` i respektive API-kataloger

## Testinstruksjoner

### Testing av Quiz App

```bash
cd quiz-app
npm run lint       # Sjekk for kode stil problemer
npm run build      # Bekreft at byggingen lykkes
```

### Testing av Bank API

```bash
cd 7-bank-project/api
npm run lint       # Sjekk for kode stil problemer
node server.js     # Bekreft at server starter uten feil
```

### Generell testtilnærming

- Dette er et utdanningsrepository uten omfattende automatiserte tester
- Manuell testing fokuserer på:
  - Kodeeksempler kjører uten feil
  - Lenker i dokumentasjonen fungerer riktig
  - Prosjektbyggeoperasjoner fullføres uten feil
  - Eksempler følger beste praksis

### Sjekk før innsending

- Kjør `npm run lint` i kataloger med package.json
- Verifiser at markdown-lenker er gyldige
- Test kodeeksempler i nettleser eller Node.js
- Sjekk at oversettelser opprettholder korrekt struktur

## Kode stil retningslinjer

### JavaScript

- Bruk moderne ES6+ syntax
- Følg standard ESLint-konfigurasjoner gitt i prosjektene
- Bruk meningsfulle variabel- og funksjonsnavn for utdanningsklarhet
- Legg til kommentarer som forklarer konsepter for lærende
- Formater med Prettier der dette er konfigurert

### HTML/CSS

- Semantiske HTML5-elementer
- Responsive designprinsipper
- Klare klasse-navnekonvensjoner
- Kommentarer som forklarer CSS-teknikker for lærende

### Python

- PEP 8 stilretningslinjer
- Tydelige, pedagogiske kodeeksempler
- Type hints hvor hjelpsomt for læring

### Markdown-dokumentasjon

- Klar overskriftsstruktur
- Kodeblokker med språkspesifikasjon
- Lenker til tilleggsmateriale
- Skjermbilder og bilder i `images/` kataloger
- Alt-tekst for bilder for tilgjengelighet

### Filorganisering

- Leksjoner nummerert sekvensielt (1-getting-started-lessons, 2-js-basics, osv.)
- Hvert prosjekt har `solution/` og ofte `start/` eller `your-work/` kataloger
- Bilder lagres i leksjon-spesifikke `images/` mapper
- Oversettelser lagres i `translations/{language-code}/` struktur

## Bygging og distribusjon

### Distribusjon av Quiz App (Azure Static Web Apps)

quiz-app er konfigurert for distribusjon til Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Oppretter dist/-mappen
# Distribuerer via GitHub Actions-arbeidsflyt ved push til main
```

Azure Static Web Apps konfigurasjon:
- **App-plassering**: `/quiz-app`
- **Output-plassering**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generering av PDF-dokumentasjon

```bash
npm install                    # Installer docsify-to-pdf
npm run convert               # Generer PDF fra docs
```

### Docsify-dokumentasjon

```bash
npm install -g docsify-cli    # Installer Docsify globalt
docsify serve                 # Tjen på localhost:3000
```

### Prosjektspesifikke bygg

Hver prosjektkatalog kan ha egen byggeprosess:
- Vue-prosjekter: `npm run build` lager produksjonspakker
- Statisk prosjekter: Ingen byggeprosess, server filer direkte

## Retningslinjer for pull requests

### Tittelformat

Bruk klare, beskrivende titler som angir område for endring:
- `[Quiz-app] Legg til ny quiz for leksjon X`
- `[Lesson-3] Rett skrivefeil i terrarium-prosjekt`
- `[Translation] Legg til spansk oversettelse for leksjon 5`
- `[Docs] Oppdater oppsettinstruksjoner`

### Nødvendige sjekker

Før du sender en PR:

1. **Kodekvalitet**:
   - Kjør `npm run lint` i berørte prosjektkataloger
   - Rett opp alle lint-feil og advarsler

2. **Byggeverifisering**:
   - Kjør `npm run build` om relevant
   - Sørg for at det ikke er byggefeil

3. **Lenkekontroll**:
   - Test alle markdown-lenker
   - Verifiser at bildehenvisninger fungerer

4. **Innholdsgjennomgang**:
   - Korrekturles for stavefeil og grammatikk
   - Sørg for at kodeeksempler er riktige og pedagogiske
   - Dobbeltsjekk at oversettelser beholder opprinnelig betydning

### Bidragskrav

- Aksepter Microsoft CLA (automatisk sjekk på første PR)
- Følg [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Se [CONTRIBUTING.md](./CONTRIBUTING.md) for detaljerte retningslinjer
- Referer til issue-numre i PR-beskrivelse om relevant

### Gjennomgangsprosess

- PRer gjennomgås av vedlikeholdere og fellesskap
- Utdanningsklarhet prioriteres
- Kodeeksempler skal følge gjeldende beste praksis
- Oversettelser vurderes for nøyaktighet og kulturell tilpasning

## Oversettelsessystem

### Automatisk oversettelse

- Bruker GitHub Actions med co-op-translator workflow
- Oversetter automatisk til 50+ språk
- Kildefiler i hovedkataloger
- Oversatte filer i `translations/{language-code}/` kataloger

### Legge til manuelle oversettelsesforbedringer

1. Finn fil i `translations/{language-code}/`
2. Gjør forbedringer samtidig som struktur bevares
3. Sørg for at kodeeksempler forblir funksjonelle
4. Test eventuelt lokaliserte quizinnhold

### Oversettelsesmetadata

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

## Feilsøking og problemløsning

### Vanlige problemer

**Quiz app starter ikke**:
- Sjekk Node.js versjon (v14+ anbefalt)
- Slett `node_modules` og `package-lock.json`, kjør `npm install` på nytt
- Sjekk porter for konflikt (standard: Vite bruker port 5173)

**API server starter ikke**:
- Verifiser Node.js versjon minimum (node >=10)
- Sjekk at port ikke er i bruk
- Sørg for at alle avhengigheter er installert med `npm install`

**Nettleserutvidelse lastes ikke**:
- Verifiser at manifest.json er korrekt formatert
- Sjekk nettleserkonsoll for feil
- Følg nettleserspesifikke installasjonsinstruksjoner

**Problemer med Python chat prosjekt**:
- Sørg for at OpenAI-pakken er installert: `pip install openai`
- Verifiser at GITHUB_TOKEN miljøvariabel er satt
- Sjekk rettigheter for GitHub Models

**Docsify serverer ikke dokumentasjonen**:
- Installer docsify-cli globalt: `npm install -g docsify-cli`
- Kjør fra repository root-mappe
- Sjekk at `docs/_sidebar.md` eksisterer

### Utviklingsmiljø tips

- Bruk VS Code med Live Server extension for HTML-prosjekter
- Installer ESLint og Prettier extensions for konsistent formatering
- Bruk nettleserens DevTools for feilsøking av JavaScript
- For Vue-prosjekter, installer Vue DevTools nettleserutvidelse

### Ytelseshensyn

- Mange oversatte filer (50+ språk) gjør at hele kloner blir store
- Bruk shallow clone hvis du kun jobber med innhold: `git clone --depth 1`
- Ekskluder oversettelser fra søk når du jobber med engelsk innhold
- Byggeprosesser kan være treg ved første kjøring (npm install, Vite build)

## Sikkerhetshensyn

### Miljøvariabler

- API-nøkler bør aldri legges inn i repository
- Bruk `.env` filer (allerede i `.gitignore`)
- Dokumenter nødvendige miljøvariabler i prosjekt README-filer

### Python-prosjekter

- Bruk virtuelle miljøer: `python -m venv venv`
- Hold avhengigheter oppdatert
- GitHub-tokener skal ha minimale nødvendige rettigheter

### GitHub Models-tilgang

- Personlige tilgangstokener (PAT) kreves for GitHub Models
- Tokens skal lagres som miljøvariabler
- Aldri legg tokens eller legitimasjon i repository

## Tilleggsnotater

### Målgruppe

- Komplett nybegynnere i webutvikling
- Studenter og selvlærende
- Lærere som bruker pensum i klasserom
- Innholdet er utformet for tilgjengelighet og gradvis ferdighetsbygging

### Pedagogisk filosofi

- Prosjektbasert læringstilnærming
- Hyppige kunnskapskontroller (quizzer)
- Praktiske kodingsøvelser
- Virkelige applikasjonseksempler
- Fokus på grunnleggende før rammeverk

### Repository vedlikehold

- Aktivt fellesskap av lærende og bidragsytere
- Regelmessige oppdateringer av avhengigheter og innhold
- Issues og diskusjoner overvåkes av vedlikeholdere
- Oversettelsesoppdateringer automatiseres via GitHub Actions

### Relatert ressurser

- [Microsoft Learn moduler](https://docs.microsoft.com/learn/)
- [Student Hub ressurser](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) anbefalt for lærende
- Ytterligere kurs: Generativ AI, Data Science, ML, IoT pensum tilgjengelig

### Arbeide med spesifikke prosjekter

For detaljerte instruksjoner om individuelle prosjekter, se README-filene i:
- `quiz-app/README.md` - Vue 3 quiz applikasjon
- `7-bank-project/README.md` - Bankapplikasjon med autentisering
- `5-browser-extension/README.md` - Nettleserutvidelsesutvikling
- `6-space-game/README.md` - Canvas-basert spillutvikling
- `9-chat-project/README.md` - AI chat assistent prosjekt

### Monorepo-struktur

Selv om det ikke er et tradisjonelt monorepo, inneholder dette repository flere uavhengige prosjekter:
- Hver leksjon er selvstendig
- Prosjektene deler ikke avhengigheter
- Jobb med individuelle prosjekter uten å påvirke andre
- Klon hele repo for full pensumopplevelse

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Ansvarsfraskrivelse**:
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vennligst vær oppmerksom på at automatiske oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på dets opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for eventuelle misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->