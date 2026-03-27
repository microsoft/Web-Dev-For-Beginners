# AGENTS.md

## Prosjektoversikt

Dette er et utdanningspensum-repositorium for å lære webutviklingsgrunnlag til nybegynnere. Pensumet er et omfattende 12-ukers kurs utviklet av Microsoft Cloud Advocates, med 24 praktiske leksjoner som dekker JavaScript, CSS og HTML.

### Hovedkomponenter

- **Utdanningsinnhold**: 24 strukturerte leksjoner organisert i prosjektbaserte moduler
- **Praktiske prosjekter**: Terrarium, Typing Game, Nettleserutvidelse, Space Game, Bankapp, Kodeeditor og AI Chat-assistent
- **Interaktive quizzer**: 48 quizzer med 3 spørsmål hver (før- og etterleksjon vurderinger)
- **Flerspråklig støtte**: Automatiske oversettelser til 50+ språk via GitHub Actions
- **Teknologier**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (for AI-prosjekter)

### Arkitektur

- Utdanningsrepository med leksjonsbasert struktur
- Hver leksjonsmappe inneholder README, kodeeksempler og løsninger
- Frittstående prosjekter i egne kataloger (quiz-app, ulike leksjonsprosjekter)
- Oversettelsessystem med GitHub Actions (co-op-translator)
- Dokumentasjon servert via Docsify og tilgjengelig som PDF

## Oppsettskommandoer

Dette repositoriet er primært for konsumering av utdanningsinnhold. For arbeid med spesifikke prosjekter:

### Hovedrepository-oppsett

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
# Følg nettleserspesifikke instruksjoner for utvidelsesinnlasting
```

### Space Game Prosjekter

```bash
cd 6-space-game/solution
npm install
# Åpne index.html i nettleser eller bruk Live Server
```

### Chat-prosjekt (Python backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Sett miljøvariabelen GITHUB_TOKEN
python api.py
```

## Utviklingsarbeidsflyt

### For innholdsbidragsytere

1. **Fork repositoriet** til din GitHub-konto
2. **Klon din fork** lokalt
3. **Opprett en ny gren** for endringene dine
4. Gjør endringer i leksjonsinnhold eller kodeeksempler
5. Test eventuelle kodeendringer i relevante prosjektmapper
6. Send inn pull requests i henhold til retningslinjer for bidrag

### For lærende

1. Fork eller klon repositoriet
2. Naviger gjennom leksjonsmapper sekvensielt
3. Les README-filer for hver leksjon
4. Fullfør før-leksjons-quizzer på https://ff-quizzes.netlify.app/web/
5. Arbeid gjennom kodeeksempler i leksjonsmapper
6. Fullfør oppgaver og utfordringer
7. Ta etter-leksjons-quizzer

### Live utvikling

- **Dokumentasjon**: Kjør `docsify serve` i root (port 3000)
- **Quiz App**: Kjør `npm run dev` i quiz-app katalogen
- **Prosjekter**: Bruk VS Code Live Server extension for HTML-prosjekter
- **API-prosjekter**: Kjør `npm start` i respektive API-kataloger

## Testinstruksjoner

### Quiz App testing

```bash
cd quiz-app
npm run lint       # Sjekk for problemer med kodeformat
npm run build      # Verifiser at byggingen lykkes
```

### Bank API testing

```bash
cd 7-bank-project/api
npm run lint       # Sjekk for kodesstilproblemer
node server.js     # Bekreft at serveren starter uten feil
```

### Generell testtilnærming

- Dette er et utdanningsrepository uten omfattende automatiske tester
- Manuell testing fokuserer på:
  - Kodeeksempler kjører uten feil
  - Lenker i dokumentasjonen fungerer som de skal
  - Prosjektbygg fullføres suksessfullt
  - Eksempler følger beste praksis

### Sjekk før innsending

- Kjør `npm run lint` i kataloger med package.json
- Verifiser at markdown-lenker er gyldige
- Test kodeeksempler i nettleser eller Node.js
- Sjekk at oversettelser opprettholder riktig struktur

## Retningslinjer for kodestil

### JavaScript

- Bruk moderne ES6+ syntaks
- Følg standard ESLint-konfigurasjoner levert i prosjektene
- Bruk meningsfulle variable- og funksjonsnavn for pedagogisk klarhet
- Legg til kommentarer som forklarer konsepter for lærende
- Formater med Prettier der det er konfigurert

### HTML/CSS

- Semantiske HTML5-elementer
- Responsivt designprinsipper
- Klare klassenavnkonvensjoner
- Kommentarer som forklarer CSS-teknikker for lærende

### Python

- PEP 8 stil retningslinjer
- Klare, pedagogiske kodeeksempler
- Typehinting der det er nyttig for læring

### Markdown Dokumentasjon

- Klar overskriftshierarki
- Kodeblokker med spesifisering av språk
- Lenker til ytterligere ressurser
- Skjermbilder og bilder i `images/` mapper
- Alt-tekst for bilder for tilgjengelighet

### Filorganisering

- Leksjoner nummerert sekvensielt (1-getting-started-lessons, 2-js-basics, osv.)
- Hvert prosjekt har `solution/` og ofte `start/` eller `your-work/` mapper
- Bilder lagres i leksjonsspesifikke `images/` mapper
- Oversettelser i `translations/{language-code}/` struktur

## Bygging og distribusjon

### Quiz App distribusjon (Azure Static Web Apps)

Quiz-appen er konfigurert for distribusjon på Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Oppretter dist/-mappe
# Distribuerer via GitHub Actions-arbeidsflyt ved push til main
```

Azure Static Web Apps konfigurasjon:
- **App-lokasjon**: `/quiz-app`
- **Output-lokasjon**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokumentasjon PDF-generering

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

Hver prosjektkatalog kan ha egen byggeprosess:
- Vue-prosjekter: `npm run build` lager produksjonspakker
- Statiske prosjekter: Ingen byggeprosess, server filer direkte

## Retningslinjer for pull-forespørsler

### Tittelformat

Bruk klare, beskrivende titler som angir endringsområdet:
- `[Quiz-app] Legg til ny quiz for leksjon X`
- `[Lesson-3] Fiks skrivefeil i terrarium-prosjekt`
- `[Translation] Legg til spansk oversettelse for leksjon 5`
- `[Docs] Oppdater oppsettinstruksjoner`

### Krav til sjekker

Før innsending av PR:

1. **Kodekvalitet**:
   - Kjør `npm run lint` i berørte prosjektmapper
   - Rett opp alle lint-feil og advarsler

2. **Byggeverifisering**:
   - Kjør `npm run build` hvis aktuelt
   - Sørg for ingen byggefeil

3. **Lenkevalidering**:
   - Test alle markdown-lenker
   - Verifiser at bildefreferanser fungerer

4. **Innholdsgranskning**:
   - Korrekturles for stave- og grammatikkfeil
   - Sørg for at kodeeksempler er korrekte og pedagogiske
   - Verifiser at oversettelser opprettholder original betydning

### Bidragskrav

- Aksepter Microsoft CLA (automatisk sjekk ved første PR)
- Følg [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Se [CONTRIBUTING.md](./CONTRIBUTING.md) for detaljerte retningslinjer
- Referer til issues i PR-beskrivelse ved behov

### Gjennomgangsprosess

- PRs granskes av vedlikeholdere og community
- Pedagogisk klarhet prioriteres
- Kodeeksempler bør følge gjeldende beste praksis
- Oversettelser vurderes for nøyaktighet og kulturell tilpasning

## Oversettelsessystem

### Automatisk oversettelse

- Bruker GitHub Actions med co-op-translator workflow
- Oversetter automatisk til 50+ språk
- Kildefiler i hovedkataloger
- Oversatte filer i `translations/{language-code}/` mapper

### Legge til manuelle oversettelsesforbedringer

1. Finn fil i `translations/{language-code}/`
2. Gjør forbedringer samtidig som struktur bevares
3. Sørg for at kodeeksempler fortsatt fungerer
4. Test eventuelt lokalisert quiz-innhold

### Oversettelsesmetadata

Oversatte filer inkluderer metadata-overskrift:
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
- Sjekk Node.js versjon (v14+ anbefalt)
- Slett `node_modules` og `package-lock.json`, kjør `npm install` på nytt
- Sjekk portkonflikter (standard: Vite bruker port 5173)

**API-server starter ikke**:
- Verifiser at Node.js versjon tilfredsstiller minimum (node >=10)
- Sjekk om port allerede er i bruk
- Sørg for at alle avhengigheter er installert med `npm install`

**Nettleserutvidelse lastes ikke**:
- Kontroller at manifest.json er korrekt formatert
- Sjekk nettleserkonsollen for feil
- Følg nettleserspesifikke installasjonsinstruksjoner

**Problemer med Python chat-prosjekt**:
- Sørg for at OpenAI-pakken er installert: `pip install openai`
- Verifiser at GITHUB_TOKEN miljøvariabelen er satt
- Kontroller tilgangsrettigheter til GitHub Models

**Docsify serverer ikke dokumentasjon**:
- Installer docsify-cli globalt: `npm install -g docsify-cli`
- Kjør fra repository root-katalogen
- Sjekk at `docs/_sidebar.md` eksisterer

### Tips for utviklingsmiljø

- Bruk VS Code med Live Server extension for HTML-prosjekter
- Installer ESLint og Prettier extensions for konsistent formatering
- Bruk nettleserens DevTools for å feilsøke JavaScript
- For Vue-prosjekter, installer Vue DevTools nettleserutvidelse

### Ytelsesbetraktninger

- Stort antall oversatte filer (50+ språk) gjør at full kloning er stor
- Bruk shallow clone dersom du kun jobber med innhold: `git clone --depth 1`
- Ekskluder oversettelser fra søk når du jobber med engelsk innhold
- Byggeprosesser kan være trege ved første kjøring (npm install, Vite build)

## Sikkerhetsbetraktninger

### Miljøvariabler

- API-nøkler skal aldri sjekkes inn i repository
- Bruk `.env` filer (allerede i `.gitignore`)
- Dokumenter nødvendige miljøvariabler i prosjektets README-filer

### Python-prosjekter

- Bruk virtuelle miljøer: `python -m venv venv`
- Hold avhengigheter oppdatert
- GitHub-tokens skal ha minimale nødvendige tillatelser

### GitHub Models-tilgang

- Personlige tilgangstokener (PAT) kreves for GitHub Models
- Tokens bør lagres som miljøvariabler
- Aldri sjekk inn tokens eller legitimasjon

## Tilleggsnotater

### Målgruppe

- Fullstendige nybegynnere innen webutvikling
- Studenter og selvstudenter
- Lærere som bruker pensum i klasserom
- Innholdet er designet for tilgjengelighet og gradvis ferdighetsbygging

### Pedagogisk filosofi

- Prosjektbasert læringsmetode
- Hyppige kunnskapskontroller (quizzer)
- Praktiske kodingoppgaver
- Virkelighetsnære anvendelseksempler
- Fokus på grunnleggende før rammeverk

### Repository-vedlikehold

- Aktivt community av lærende og bidragsytere
- Jevnlige oppdateringer av avhengigheter og innhold
- Issues og diskusjoner overvåkes av vedlikeholdere
- Oversettelsesoppdateringer automatisert via GitHub Actions

### Relaterte ressurser

- [Microsoft Learn moduler](https://docs.microsoft.com/learn/)
- [Student Hub ressurser](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) anbefalt for lærende
- Tilleggs kurs: Generativ AI, Data Science, ML, IoT pensum tilgjengelig

### Arbeid med spesifikke prosjekter

For detaljerte instruksjoner om individuelle prosjekter, se README-filene i:
- `quiz-app/README.md` - Vue 3 quiz-applikasjon
- `7-bank-project/README.md` - Bankapplikasjon med autentisering
- `5-browser-extension/README.md` - Nettleserutvidelsesutvikling
- `6-space-game/README.md` - Canvas-basert spillutvikling
- `9-chat-project/README.md` - AI chat-assistent prosjekt

### Monorepo-struktur

Selv om dette ikke er et tradisjonelt monorepo, inneholder dette repositoriet flere uavhengige prosjekter:
- Hver leksjon er selvstendig
- Prosjektene deler ikke avhengigheter
- Arbeid på individuelle prosjekter uten å påvirke andre
- Klon hele repo for full pensumopplevelse

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Ansvarsfraskrivelse**:
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vennligst vær oppmerksom på at automatiske oversettelser kan inneholde feil eller unøyaktigheter. Det opprinnelige dokumentet på dets originale språk bør betraktes som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for eventuelle misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->