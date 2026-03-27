# AGENTS.md

## Prosjektoversikt

Dette er et pedagogisk pensum-repositorium for å lære grunnleggende webutvikling til nybegynnere. Pensumet er et omfattende 12-ukers kurs utviklet av Microsoft Cloud Advocates, med 24 praktiske leksjoner som dekker JavaScript, CSS og HTML.

### Nøkkelkomponenter

- **Pedagogisk innhold**: 24 strukturerte leksjoner organisert i prosjektbaserte moduler
- **Praktiske prosjekter**: Terrarium, Typingspill, Nettleserutvidelse, Romspill, Bankapp, Kodeeditor og AI-chatassistent
- **Interaktive quizer**: 48 quizer med 3 spørsmål hver (før- og etterleksjonsevalueringer)
- **Støtte for flere språk**: Automatisk oversettelse til 50+ språk via GitHub Actions
- **Teknologier**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (for AI-prosjekter)

### Arkitektur

- Pedagogisk repositorium med leksjonsbasert struktur
- Hver leksjonsmappe inneholder README, kodeeksempler og løsninger
- Frittstående prosjekter i egne kataloger (quiz-app, forskjellige leksjonsprosjekter)
- Oversettelsessystem ved bruk av GitHub Actions (co-op-translator)
- Dokumentasjon servert via Docsify og tilgjengelig som PDF

## Oppsettkommandoer

Dette repositoriet er primært for inntak av pedagogisk innhold. For arbeid med spesifikke prosjekter:

### Hovedrepo-oppsett

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

### Romspillprosjekter

```bash
cd 6-space-game/solution
npm install
# Åpne index.html i nettleseren eller bruk Live Server
```

### Chatprosjekt (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Sett miljøvariabelen GITHUB_TOKEN
python api.py
```

## Utviklingsflyt

### For innholdsbidragsytere

1. **Fork repositoriet** til din GitHub-konto
2. **Klon din fork** lokalt
3. **Opprett en ny gren** for dine endringer
4. Gjør endringer i leksjonsinnhold eller kodeeksempler
5. Test eventuelle kodeendringer i relevante prosjektmapper
6. Send inn pull requests i henhold til bidragsretningslinjer

### For lærende

1. Fork eller klon repositoriet
2. Naviger til leksjonsmapper sekvensielt
3. Les README-filene for hver leksjon
4. Fullfør før-leksjonsquizer på https://ff-quizzes.netlify.app/web/
5. Arbeid gjennom kodeeksempler i leksjonsmapper
6. Fullfør oppgaver og utfordringer
7. Ta etter-leksjonsquizer

### Live utvikling

- **Dokumentasjon**: Kjør `docsify serve` i rotmappen (port 3000)
- **Quiz App**: Kjør `npm run dev` i quiz-app-mappen
- **Prosjekter**: Bruk VS Code Live Server-utvidelsen for HTML-prosjekter
- **API-prosjekter**: Kjør `npm start` i respektive API-mapper

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
npm run lint       # Sjekk etter kode stil problemer
node server.js     # Verifiser at serveren starter uten feil
```

### Generell testtilnærming

- Dette er et pedagogisk repositorium uten omfattende automatiserte tester
- Manuell testing fokuserer på:
  - At kodeeksempler kjører uten feil
  - At lenker i dokumentasjonen fungerer korrekt
  - At byggeprosjekter fullføres vellykket
  - At eksempler følger beste praksis

### Sjekker før innsending

- Kjør `npm run lint` i kataloger med package.json
- Verifiser at markdown-lenker er gyldige
- Test kodeeksempler i nettleser eller Node.js
- Sjekk at oversettelser beholder riktig struktur

## Retningslinjer for kode-stil

### JavaScript

- Bruk moderne ES6+ syntaks
- Følg standard ESLint-konfigurasjoner i prosjektene
- Bruk meningsfulle variabel- og funksjonsnavn for pedagogisk klarhet
- Legg til kommentarer som forklarer konsepter for lærende
- Formater ved bruk av Prettier der det er konfigurert

### HTML/CSS

- Semantiske HTML5-elementer
- Responsivt design-prinsipper
- Klare klasse-navnekonvensjoner
- Kommentarer som forklarer CSS-teknikker for lærende

### Python

- PEP 8-stil retningslinjer
- Klare, pedagogiske kodeeksempler
- Typehinting der det er nyttig for læring

### Markdown-dokumentasjon

- Klar overskriftshierarki
- Kodeblokker med språkspecificasjon
- Lenker til ekstra ressurser
- Skjermbilder og bilder i `images/` mapper
- Alternativ tekst for bilder for tilgjengelighet

### Filorganisering

- Leksjoner nummerert sekvensielt (1-getting-started-lessons, 2-js-basics, osv.)
- Hvert prosjekt har `solution/` og ofte `start/` eller `your-work/` mapper
- Bilder lagres i leksjonsspesifikke `images/` mapper
- Oversettelser i `translations/{language-code}/` struktur

## Bygg og distribusjon

### Utrulling av Quiz App (Azure Static Web Apps)

quiz-app er konfigurert for Azure Static Web Apps utrulling:

```bash
cd quiz-app
npm run build      # Oppretter dist/ mappe
# Distribuerer via GitHub Actions-arbeidsflyt ved push til main
```

Azure Static Web Apps konfigurasjon:
- **App-lokasjon**: `/quiz-app`
- **Utdata-lokasjon**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generering av dokumentasjon PDF

```bash
npm install                    # Installer docsify-to-pdf
npm run convert               # Generer PDF fra docs
```

### Docsify Dokumentasjon

```bash
npm install -g docsify-cli    # Installer Docsify globalt
docsify serve                 # Tjen på localhost:3000
```

### Prosjektspesifikke bygg

Hver prosjektmappe kan ha egen byggeprosess:
- Vue-prosjekter: `npm run build` lager produksjonspakker
- Statisk prosjekter: Ingen byggeprosess, serve filene direkte

## Retningslinjer for pull requests

### Tittelformat

Bruk klare, beskrivende titler som indikerer endringsområde:
- `[Quiz-app] Add new quiz for lesson X`
- `[Lesson-3] Fix typo in terrarium project`
- `[Translation] Add Spanish translation for lesson 5`
- `[Docs] Update setup instructions`

### Obligatoriske sjekker

Før innsending av PR:

1. **Kodekvalitet**:
   - Kjør `npm run lint` i påvirkede prosjektmapper
   - Rett alle lint-feil og advarsler

2. **Build-verifisering**:
   - Kjør `npm run build` hvis relevant
   - Sørg for at ingen byggefeil oppstår

3. **Lenkevalidering**:
   - Test alle markdown-lenker
   - Verifiser at bildehenvisninger fungerer

4. **Innholdsrevisjon**:
   - Korrekturles for rettskrivning og grammatikk
   - Sørg for at kodeeksempler er korrekte og pedagogiske
   - Verifiser at oversettelser bevarer opprinnelig mening

### Bidragskrav

- Samtykke til Microsoft CLA (automatisk sjekk ved første PR)
- Følg [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Se [CONTRIBUTING.md](./CONTRIBUTING.md) for detaljerte retningslinjer
- Referer til issues i PR-beskrivelsen dersom relevant

### Gjennomgangsprosess

- PR-er vurderes av vedlikeholdere og fellesskapet
- Pedagogisk klarhet prioriteres
- Kodeeksempler bør følge gjeldende beste praksis
- Oversettelser vurderes for nøyaktighet og kulturell tilpassethet

## Oversettelsessystem

### Automatisk oversettelse

- Bruker GitHub Actions med co-op-translator workflow
- Oversetter til 50+ språk automatisk
- Kildefiler i hovedkataloger
- Oversatte filer i `translations/{language-code}/` mapper

### Legge til manuelle forbedringer av oversettelser

1. Finn fil i `translations/{language-code}/`
2. Gjør forbedringer samtidig som struktur bevares
3. Sørg for at kodeeksempler fortsatt fungerer
4. Test eventuell lokalisert quiz-innhold

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

## Feilsøking og problemløsning

### Vanlige problemer

**Quiz-app starter ikke**:
- Sjekk Node.js-versjon (v14+ anbefalt)
- Slett `node_modules` og `package-lock.json`, kjør `npm install` på nytt
- Sjekk for portkonflikter (standard: Vite bruker port 5173)

**API-server starter ikke**:
- Verifiser Node.js-versjon minimum (node >=10)
- Sjekk om port allerede er i bruk
- Sørg for at alle avhengigheter er installert med `npm install`

**Nettleserutvidelse lastes ikke**:
- Sjekk at manifest.json er riktig formatert
- Se etter feil i nettleserkonsollen
- Følg nettleserspesifikke installasjonsinstruksjoner

**Problemer med Python chat-prosjekt**:
- Sørg for at OpenAI-pakken er installert: `pip install openai`
- Verifiser at GITHUB_TOKEN miljøvariabel er satt
- Sjekk GitHub Models tilgangstillatelser

**Docsify serverer ikke dokumentasjon**:
- Installer docsify-cli globalt: `npm install -g docsify-cli`
- Kjør fra repoets rotkatalog
- Sjekk at `docs/_sidebar.md` eksisterer

### Tips for utviklingsmiljø

- Bruk VS Code med Live Server-utvidelse for HTML-prosjekter
- Installer ESLint og Prettier-utvidelser for konsistent formatering
- Bruk nettleserens DevTools for JavaScript-feilsøking
- For Vue-prosjekter, installer Vue DevTools nettleserutvidelse

### Ytelseshensyn

- Mange oversatte filer (50+ språk) gjør at hele kloner blir store
- Bruk shallow clone hvis du kun jobber med innhold: `git clone --depth 1`
- Ekskluder oversettelser fra søk når du jobber på engelsk innhold
- Byggeprosesser kan være trege ved første kjøring (npm install, Vite build)

## Sikkerhetshensyn

### Miljøvariabler

- API-nøkler skal aldri committes til repositoriet
- Bruk `.env`-filer (allerede i `.gitignore`)
- Dokumenter nødvendige miljøvariabler i prosjektets README-filer

### Python-prosjekter

- Bruk virtuelle miljøer: `python -m venv venv`
- Hold avhengigheter oppdatert
- GitHub-tokens bør ha minimale nødvendige tillatelser

### GitHub Models-tilgang

- Personlige tilgangstokener (PAT) kreves for GitHub Models
- Tokens bør lagres som miljøvariabler
- Aldri commit tokens eller legitimasjon

## Tilleggsnotater

### Målgruppe

- Fullstendige nybegynnere til webutvikling
- Studenter og selvlærende
- Lærere som bruker pensum i klasserom
- Innholdet er designet for tilgjengelighet og gradvis ferdighetsbygging

### Pedagogisk filosofi

- Prosjektbasert læringsmetode
- Hyppige kunnskapskontroller (quizer)
- Praktiske kodingøvelser
- Reelle eksempler på anvendelse
- Fokuser på grunnleggende før rammeverk

### Repositorium-vedlikehold

- Aktivt fellesskap av lærende og bidragsytere
- Regelmessige oppdateringer av avhengigheter og innhold
- Issues og diskusjoner overvåkes av vedlikeholdere
- Oversettelsesoppdateringer automatisert via GitHub Actions

### Relaterte ressurser

- [Microsoft Learn moduler](https://docs.microsoft.com/learn/)
- [Student Hub ressurser](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) anbefalt for lærende
- Ekstra kurs: Generativ AI, Data Science, ML, IoT pensum tilgjengelig

### Arbeid med spesifikke prosjekter

For detaljerte instruksjoner om individuelle prosjekter, se README-filene i:
- `quiz-app/README.md` - Vue 3 quiz-applikasjon
- `7-bank-project/README.md` - Bankapplikasjon med autentisering
- `5-browser-extension/README.md` - Nettleserutvidelsesutvikling
- `6-space-game/README.md` - Canvas-basert spillutvikling
- `9-chat-project/README.md` - AI chatassistentprosjekt

### Monorepo-struktur

Selv om det ikke er et tradisjonelt monorepo, inneholder dette repositoriet flere uavhengige prosjekter:
- Hver leksjon er selvstendig
- Prosjektene deler ikke avhengigheter
- Arbeid med individuelle prosjekter uten å påvirke andre
- Klon hele repoet for full pensumopplevelse

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vennligst vær oppmerksom på at automatiske oversettelser kan inneholde feil eller unøyaktigheter. Det opprinnelige dokumentet på sitt morsmål bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for eventuelle misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->