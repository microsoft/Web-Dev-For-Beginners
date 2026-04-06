# AGENTS.md

## Prosjektoversikt

Dette er et utdanningspensum-repositorium for å lære grunnleggende webutvikling til nybegynnere. Pensumet er et omfattende 12-ukers kurs utviklet av Microsoft Cloud Advocates, som inneholder 24 praktiske leksjoner om JavaScript, CSS og HTML.

### Nøkkelkomponenter

- **Utdanningsinnhold**: 24 strukturerte leksjoner organisert i prosjektbaserte moduler  
- **Praktiske prosjekter**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor, og AI Chat Assistant  
- **Interaktive quizer**: 48 quizer med 3 spørsmål hver (før/etter leksjon evalueringer)  
- **Flerspråklig støtte**: Automatiske oversettelser for 50+ språk via GitHub Actions  
- **Teknologier**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (for AI-prosjekter)  

### Arkitektur

- Utdanningsrepositorium med leksjonsbasert struktur  
- Hver leksjonsmappe inneholder README, kodeeksempler og løsninger  
- Selvstendige prosjekter i egne kataloger (quiz-app, ulike leksjonsprosjekter)  
- Oversettelsessystem ved bruk av GitHub Actions (co-op-translator)  
- Dokumentasjon servert via Docsify og tilgjengelig som PDF  

## Oppsett-kommandoer

Dette repositoriet er først og fremst for forbruk av utdanningsinnhold. For å jobbe med spesifikke prosjekter:

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
# Åpne index.html i nettleseren eller bruk Live Server
```

### Chatprosjekt (Python backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Sett GITHUB_TOKEN miljøvariabel
python api.py
```

## Utviklingsarbeidsflyt

### For innholdsbidragsytere

1. **Fork repositoriet** til din GitHub-konto  
2. **Klone din fork** lokalt  
3. **Lag en ny gren** for endringene dine  
4. Gjør endringer i leksjonsinnhold eller kodeeksempler  
5. Test eventuelle kodeendringer i relevante prosjektmapper  
6. Send pull-forespørsler etter retningslinjer for bidrag  

### For lærende

1. Fork eller klon repositoriet  
2. Naviger gjennom leksjonsmapper i rekkefølge  
3. Les README-filene for hver leksjon  
4. Fullfør for-klasse quizer på https://ff-quizzes.netlify.app/web/  
5. Jobb gjennom kodeeksempler i leksjonsmapper  
6. Utfør oppgaver og utfordringer  
7. Ta post-klasse quizer  

### Live utvikling

- **Dokumentasjon**: Kjør `docsify serve` i rot (port 3000)  
- **Quiz App**: Kjør `npm run dev` i quiz-app katalog  
- **Prosjekter**: Bruk VS Code Live Server-utvidelse for HTML-prosjekter  
- **API-prosjekter**: Kjør `npm start` i respektive API-kataloger  

## Testinstruksjoner

### Quiz App-testing

```bash
cd quiz-app
npm run lint       # Sjekk etter kode stil problemer
npm run build      # Verifiser at bygging lykkes
```

### Bank API-testing

```bash
cd 7-bank-project/api
npm run lint       # Sjekk for kode stil problemer
node server.js     # Verifiser at serveren starter uten feil
```

### Generell testtilnærming

- Dette er et utdanningsrepositorium uten omfattende automatiske tester  
- Manuell testing fokuserer på:  
  - Kodeeksempler kjører uten feil  
  - Lenker i dokumentasjon fungerer korrekt  
  - Prosjektbygget fullføres uten feil  
  - Eksempler følger beste praksis  

### Pre-submission sjekker

- Kjør `npm run lint` i kataloger med package.json  
- Verifiser at markdown-lenker er gyldige  
- Test kodeeksempler i nettleser eller Node.js  
- Kontroller at oversettelser opprettholder korrekt struktur  

## Kode-stil retningslinjer

### JavaScript

- Bruk moderne ES6+ syntaks  
- Følg standard ESLint-konfigurasjoner gitt i prosjekter  
- Bruk meningsfulle variabel- og funksjonsnavn for pedagogisk klarhet  
- Legg til kommentarer som forklarer konsepter for lærende  
- Formater med Prettier der det er konfigurert  

### HTML/CSS

- Semantiske HTML5-elementer  
- Responsive designprinsipper  
- Klare klasse-navnekonvensjoner  
- Kommentarer som forklarer CSS-teknikker for lærende  

### Python

- Følg PEP 8 stilretningslinjer  
- Klare, pedagogiske kodeeksempler  
- Typehint der det er hjelpsomt for læring  

### Markdown-dokumentasjon

- Klar overskriftshierarki  
- Kodeblokker med språkspesifikasjon  
- Lenker til tilleggsmateriale  
- Skjermbilder og bilder i `images/` mapper  
- Alt-tekst for bilder for tilgjengelighet  

### Filorganisering

- Leksjoner nummerert sekvensielt (1-getting-started-lessons, 2-js-basics, etc.)  
- Hvert prosjekt har `solution/` og ofte `start/` eller `your-work/` kataloger  
- Bilder lagres i leksjons-spesifikke `images/` mapper  
- Oversettelser i `translations/{language-code}/` struktur  

## Bygging og distribusjon

### Quiz App distribusjon (Azure Static Web Apps)

quiz-app er konfigurert for distribusjon til Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Lager dist/-mappen
# Distribuerer via GitHub Actions-arbeidsflyt ved push til main
```
  
Azure Static Web Apps konfigurasjon:  
- **App-lokasjon**: `/quiz-app`  
- **Output-lokasjon**: `dist`  
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`  

### Generering av PDF for dokumentasjon

```bash
npm install                    # Installer docsify-to-pdf
npm run convert               # Generer PDF fra docs
```
  
### Docsify dokumentasjon

```bash
npm install -g docsify-cli    # Installer Docsify globalt
docsify serve                 # Server på localhost:3000
```
  
### Prosjektspesifikke builds

Hver prosjektmappe kan ha egen byggprosess:  
- Vue-prosjekter: `npm run build` lager produksjonsbundler  
- Statisk prosjekter: Ingen byggeprosess, server filer direkte  

## Retningslinjer for pull requests

### Tittel-format

Bruk klare og beskrivende titler som indikerer endringsområde:  
- `[Quiz-app] Legg til ny quiz for leksjon X`  
- `[Lesson-3] Rett skrivefeil i terrarium prosjekt`  
- `[Translation] Legg til spansk oversettelse for leksjon 5`  
- `[Docs] Oppdater oppsettsinstruksjoner`  

### Obligatoriske sjekker

Før innsending av PR:  

1. **Kodekvalitet**:  
   - Kjør `npm run lint` i berørte prosjektmapper  
   - Fiks alle linting-feil og advarsler  

2. **Byggverifikasjon**:  
   - Kjør `npm run build` hvis aktuelt  
   - Sørg for at det ikke er byggefeil  

3. **Lenkevalidering**:  
   - Test alle markdown-lenker  
   - Verifiser at bilder refereres korrekt  

4. **Innholds gjennomgang**:  
   - Korrekturles for rettskrivning og grammatikk  
   - Sørg for at kodeeksempler er korrekte og pedagogiske  
   - Bekreft at oversettelser bevarer opprinnelig betydning  

### Bidragskrav

- Godta Microsoft CLA (automatisk sjekk ved første PR)  
- Følg [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)  
- Se [CONTRIBUTING.md](./CONTRIBUTING.md) for detaljerte retningslinjer  
- Referer issues i PR-beskrivelse hvis aktuelt  

### Gjennomgangsprosess

- PR-er gjennomgås av vedlikeholdere og community  
- Pedagogisk klarhet prioriteres  
- Kodeeksempler skal følge gjeldende beste praksis  
- Oversettelser vurderes for nøyaktighet og kulturell hensyn  

## Oversettelsessystem

### Automatisert oversettelse

- Bruker GitHub Actions med co-op-translator workflow  
- Oversetter til 50+ språk automatisk  
- Kildefiler i hovedmapper  
- Oversatte filer i `translations/{language-code}/` mapper  

### Legge til manuelle oversettelsesforbedringer

1. Finn fil i `translations/{language-code}/`  
2. Gjør forbedringer uten å endre struktur  
3. Sørg for at kodeeksempler fungerer fortsatt  
4. Test eventuell lokalisert quiz-innhold  

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

**Quiz app starter ikke**:  
- Sjekk Node.js-versjon (v14+ anbefalt)  
- Slett `node_modules` og `package-lock.json`, kjør `npm install` på nytt  
- Sjekk for portkonflikter (standard: Vite bruker port 5173)  

**API-server starter ikke**:  
- Verifiser Node.js-versjon minimum (node >=10)  
- Sjekk om port allerede er i bruk  
- Sørg for at alle avhengigheter er installert med `npm install`  

**Nettleserutvidelse lastes ikke**:  
- Verifiser at manifest.json er korrekt formatert  
- Sjekk nettleserkonsoll for feil  
- Følg nettleserspesifikke utvidelsesinstallasjonsinstruksjoner  

**Python chatprosjekt-problemer**:  
- Sørg for at OpenAI-pakken er installert: `pip install openai`  
- Verifiser at GITHUB_TOKEN miljøvariabel er satt  
- Sjekk Github modeller-tilgangstillatelser  

**Docsify serverer ikke dokumenter**:  
- Installer docsify-cli globalt: `npm install -g docsify-cli`  
- Kjør fra repositoriets rotkatalog  
- Sjekk at `docs/_sidebar.md` eksisterer  

### Tips for utviklingsmiljø

- Bruk VS Code med Live Server-utvidelse for HTML-prosjekter  
- Installer ESLint og Prettier-utvidelser for konsistent formatering  
- Bruk nettleserens DevTools for JavaScript-feilsøking  
- For Vue-prosjekter, installer Vue DevTools nettleserutvidelse  

### Ytelseshensyn

- Stort antall oversatte filer (50+ språk) gjør full cloning stor  
- Bruk shallow clone hvis du bare jobber med innhold: `git clone --depth 1`  
- Ekskluder oversettelser fra søk når du jobber med engelsk innhold  
- Byggeprosesser kan være trege første gang (npm install, Vite build)  

## Sikkerhetshensyn

### Miljøvariabler

- API-nøkler skal aldri legges inn i repositoriet  
- Bruk `.env` filer (allerede i `.gitignore`)  
- Dokumenter nødvendige miljøvariabler i prosjekt READMEs  

### Python-prosjekter

- Bruk virtuelle miljøer: `python -m venv venv`  
- Hold avhengigheter oppdatert  
- GitHub-tokener skal ha minimale nødvendige tillatelser  

### GitHub modeller tilgang

- Personlige tilgangstokener (PAT) kreves for GitHub modeller  
- Token skal lagres som miljøvariabler  
- Aldri legg inn tokens eller legitimasjon i koden  

## Tilleggsnotater

### Målgruppe

- Fullstendige nybegynnere i webutvikling  
- Studenter og selvstudenter  
- Lærere som bruker pensum i undervisning  
- Innhold er designet for tilgjengelighet og gradvis ferdighetsbygging  

### Utdanningsfilosofi

- Prosjektbasert læringsmetode  
- Hyppige kunnskapssjekker (quizer)  
- Praktiske kodeøvelser  
- Virkelige anvendelseseksempler  
- Fokus på grunnleggende før rammeverk  

### Repositorie-vedlikehold

- Aktivt community av lærende og bidragsytere  
- Regelmessige oppdateringer av avhengigheter og innhold  
- Issues og diskusjoner overvåkes av vedlikeholdere  
- Oversettelsesoppdateringer automatisert via GitHub Actions  

### Relaterte ressurser

- [Microsoft Learn moduler](https://docs.microsoft.com/learn/)  
- [Student Hub ressurser](https://docs.microsoft.com/learn/student-hub/)  
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) anbefalt for lærende  
- Flere kurs: Generativ AI, Data Science, ML, IoT pensum tilgjengelig  

### Arbeide med spesifikke prosjekter

For detaljerte instruksjoner om individuelle prosjekter, se README-filene i:  
- `quiz-app/README.md` - Vue 3 quiz-applikasjon  
- `7-bank-project/README.md` - Bankapplikasjon med autentisering  
- `5-browser-extension/README.md` - Nettleserutvidelsesutvikling  
- `6-space-game/README.md` - Canvas-basert spillutvikling  
- `9-chat-project/README.md` - AI chat assistent prosjekt  

### Monorepo-struktur

Selv om dette ikke er et tradisjonelt monorepo, inneholder repositoriet flere uavhengige prosjekter:  
- Hver leksjon er selvstendig  
- Prosjekter deler ikke avhengigheter  
- Jobb med individuelle prosjekter uten å påvirke andre  
- Klon hele repo for full pensumopplevelse  

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Ansvarsfraskrivelse**:
Dette dokumentet er oversatt ved bruk av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vennligst vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det opprinnelige dokumentet på dets morsmål bør betraktes som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for eventuelle misforståelser eller feiltolkninger som oppstår fra bruk av denne oversettelsen.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->