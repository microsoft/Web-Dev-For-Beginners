# AGENTS.md

## Prosjektoversikt

Dette er et utdanningsrepositorium for å lære grunnleggende webutvikling til nybegynnere. Pensumet er et omfattende 12-ukers kurs utviklet av Microsoft Cloud Advocates, med 24 praktiske leksjoner som dekker JavaScript, CSS og HTML.

### Nøkkelkomponenter

- **Utdanningsinnhold**: 24 strukturerte leksjoner organisert i prosjektbaserte moduler  
- **Praktiske prosjekter**: Terrarium, Typing Game, Nettleserutvidelse, Space Game, Bankapp, Kodeeditor og AI Chat Assistant  
- **Interaktive quizer**: 48 quizer med 3 spørsmål hver (før/etter leksjon)  
- **Flerspråklig støtte**: Automatiserte oversettelser til 50+ språk via GitHub Actions  
- **Teknologier**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (for AI-prosjekter)  

### Arkitektur

- Utdanningsrepositorium med leksjonsbasert struktur  
- Hver leksjonsmappe inneholder README, kodeeksempler og løsninger  
- Frittstående prosjekter i separate kataloger (quiz-app, ulike leksjonsprosjekter)  
- Oversettelsessystem ved bruk av GitHub Actions (co-op-translator)  
- Dokumentasjon servert via Docsify og tilgjengelig som PDF  

## Oppsettkommandoer

Dette repositoriet er primært for konsum av utdanningsinnhold. For å jobbe med spesifikke prosjekter:

### Hovedoppsett for Repository

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

### Space Game-prosjekter

```bash
cd 6-space-game/solution
npm install
# Åpne index.html i nettleseren eller bruk Live Server
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

1. **Lag en fork** av repositoriet til din GitHub-konto  
2. **Klon din fork** lokalt  
3. **Opprett en ny gren** for dine endringer  
4. Gjør endringer i leksjonsinnhold eller kodeeksempler  
5. Test eventuelle kodeendringer i relevante prosjektkataloger  
6. Send inn pull requests i henhold til retningslinjer for bidrag  

### For lærende

1. Lag en fork eller klon repositoriet  
2. Naviger gjennom leksjonskatalogene sekvensielt  
3. Les README-filene for hver leksjon  
4. Fullfør forhånds-leksjonsquizer på https://ff-quizzes.netlify.app/web/  
5. Arbeid med kodeeksempler i leksjonsmappene  
6. Fullfør oppgaver og utfordringer  
7. Ta quizer etter leksjonen  

### Live utvikling

- **Dokumentasjon**: Kjør `docsify serve` i rotmappen (port 3000)  
- **Quiz App**: Kjør `npm run dev` i quiz-app-katalogen  
- **Prosjekter**: Bruk VS Code Live Server-utvidelsen for HTML-prosjekter  
- **API-prosjekter**: Kjør `npm start` i respektive API-kataloger  

## Testinstruksjoner

### Test av Quiz App

```bash
cd quiz-app
npm run lint       # Sjekk for kode stil problemer
npm run build      # Bekreft at bygging lykkes
```

### Bank API Testing

```bash
cd 7-bank-project/api
npm run lint       # Sjekk etter kode stil problemer
node server.js     # Bekreft at serveren starter uten feil
```

### Generell testtilnærming

- Dette er et utdanningsrepositorium uten omfattende automatiserte tester  
- Manuell testing fokuserer på:  
  - Kodeeksempler kjører uten feil  
  - Lenker i dokumentasjon fungerer korrekt  
  - Prosjektbygninger fullføres suksessfullt  
  - Eksempler følger beste praksis  

### Forhåndssjekker før innsending

- Kjør `npm run lint` i kataloger med package.json  
- Verifiser at markdown-lenker er gyldige  
- Test kodeeksempler i nettleser eller Node.js  
- Kontroller at oversettelser opprettholder korrekt struktur  

## Retningslinjer for kodestil

### JavaScript

- Bruk moderne ES6+ syntaks  
- Følg standard ESLint-konfigurasjoner som finnes i prosjektene  
- Bruk meningsfulle variabel- og funksjonsnavn for pedagogisk klarhet  
- Legg til kommentarer som forklarer konsepter for lærende  
- Formater med Prettier der det er konfigurert  

### HTML/CSS

- Semantiske HTML5-elementer  
- Responsive designprinsipper  
- Klare navnekonvensjoner for klasser  
- Kommentarer som forklarer CSS-teknikker for lærende  

### Python

- PEP 8 stilretningslinjer  
- Klare, pedagogiske kodeeksempler  
- Typeangivelser der det er hjelpsomt for læring  

### Markdown-dokumentasjon

- Tydelig overskriftshierarki  
- Kodeblokker med språkspecificasjon  
- Lenker til tilleggsmaterialer  
- Skjermbilder og bilder i `images/`-mapper  
- Alt-tekst for bilder for tilgjengelighet  

### Filorganisering

- Leksjoner nummerert sekvensielt (1-getting-started-lessons, 2-js-basics, osv.)  
- Hvert prosjekt har `solution/` og ofte `start/` eller `your-work/` kataloger  
- Bilder lagret i leksjonsspesifikke `images/`-mapper  
- Oversettelser i `translations/{language-code}/` struktur  

## Bygging og distribusjon

### Quiz App-distribusjon (Azure Static Web Apps)

quiz-app er konfigurert for Azure Static Web Apps distribusjon:

```bash
cd quiz-app
npm run build      # Oppretter dist/ mappe
# Distribuerer via GitHub Actions arbeidsflyt ved push til main
```

Azure Static Web Apps konfigurasjon:  
- **App plassering**: `/quiz-app`  
- **Utdata plassering**: `dist`  
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`  

### Generering av dokumentasjon PDF

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

Hver prosjektmappe kan ha egen byggeprosess:  
- Vue-prosjekter: `npm run build` lager produksjonspakker  
- Statiske prosjekter: Ingen byggeprosess, server filene direkte  

## Retningslinjer for pull request

### Tittelformat

Bruk klare, beskrivende titler som angir endringsområde:  
- `[Quiz-app] Legg til ny quiz for leksjon X`  
- `[Lesson-3] Rett skrivefeil i terrarium-prosjektet`  
- `[Translation] Legg til spansk oversettelse for leksjon 5`  
- `[Docs] Oppdater oppsettsinstruksjoner`  

### Nødvendige sjekker

Før innsending av PR:  

1. **Kodekvalitet**:  
   - Kjør `npm run lint` i berørte prosjektmapper  
   - Fiks alle linting-feil og advarsler  

2. **Byggeverifisering**:  
   - Kjør `npm run build` om relevant  
   - Sørg for at det ikke er byggefeil  

3. **Lenkevalidering**:  
   - Test alle markdown-lenker  
   - Verifiser at bildefiler fungerer  

4. **Innholdsreview**:  
   - Korrekturles for rettskrivning og grammatikk  
   - Kontroller at kodeeksempler er korrekte og lærerike  
   - Verifiser at oversettelser opprettholder original betydning  

### Bidragskrav

- Godta Microsoft CLA (automatisk sjekk på første PR)  
- Følg [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)  
- Se [CONTRIBUTING.md](./CONTRIBUTING.md) for detaljerte retningslinjer  
- Referer til issues i PR-beskrivelsen hvis aktuelt  

### Gjennomgangsprosess

- PR-er blir vurdert av vedlikeholdere og fellesskapet  
- Pedagogisk klarhet prioriteres  
- Kodeeksempler bør følge gjeldende beste praksis  
- Oversettelser vurderes for nøyaktighet og kulturtilpasning  

## Oversettelsessystem

### Automatisert oversettelse

- Bruker GitHub Actions med co-op-translator workflow  
- Oversetter automatisk til 50+ språk  
- Kildefiler i hovedkataloger  
- Oversatte filer i `translations/{language-code}/` kataloger  

### Legge til manuelle oversettelsesforbedringer

1. Finn fil i `translations/{language-code}/`  
2. Gjør forbedringer mens struktur bevares  
3. Sørg for at kodeeksempler fortsatt fungerer  
4. Test eventuelt lokalisert quizinnhold  

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
- Sjekk for portkonflikter (standard: Vite bruker port 5173)  

**API-server starter ikke**:  
- Verifiser at Node.js-versjon møter minimumskrav (node >=10)  
- Sjekk om port allerede er i bruk  
- Sørg for at alle avhengigheter er installert med `npm install`  

**Nettleserutvidelse lastes ikke**:  
- Kontroller at manifest.json er riktig formatert  
- Se etter feil i nettleserkonsollen  
- Følg nettleserspesifikke installasjonsinstruksjoner for utvidelser  

**Problemer med Python chat-prosjekt**:  
- Sørg for at OpenAI-pakken er installert: `pip install openai`  
- Verifiser at GITHUB_TOKEN miljøvariabel er satt  
- Sjekk GitHub Models-tilgangstillatelser  

**Docsify serverer ikke dokumentasjon**:  
- Installer docsify-cli globalt: `npm install -g docsify-cli`  
- Kjør fra repositoriets rotmappe  
- Kontroller at `docs/_sidebar.md` finnes  

### Tips for utviklingsmiljø

- Bruk VS Code med Live Server-utvidelse for HTML-prosjekter  
- Installer ESLint og Prettier-utvidelser for konsistent formatering  
- Bruk nettleserens devtools for JavaScript-feilsøking  
- For Vue-prosjekter, installer Vue DevTools nettleserutvidelse  

### Ytelseshensyn

- Stort antall oversatte filer (50+ språk) gjør fulle kloner store  
- Bruk shallow clone hvis du kun jobber med innhold: `git clone --depth 1`  
- Ekskluder oversettelser fra søk ved arbeid med engelsk innhold  
- Byggeprosesser kan være trege ved første kjøring (npm install, Vite build)  

## Sikkerhetshensyn

### Miljøvariabler

- API-nøkler skal aldri forplantes til repositoriet  
- Bruk `.env` filer (allerede i `.gitignore`)  
- Dokumenter nødvendige miljøvariabler i prosjektets README-er  

### Python-prosjekter

- Bruk virtuelle miljøer: `python -m venv venv`  
- Hold avhengigheter oppdatert  
- GitHub-tokens bør ha minimale nødvendige tillatelser  

### GitHub Models-tilgang

- Personal Access Tokens (PAT) kreves for GitHub Models  
- Tokens skal lagres som miljøvariabler  
- Aldri forplante tokens eller legitimasjon  

## Ytterligere merknader

### Målgruppe

- Fullstendige nybegynnere til webutvikling  
- Studenter og selvstudenter  
- Lærere som bruker pensum i klasserom  
- Innhold er designet for tilgjengelighet og gradvis ferdighetsbygging  

### Utdanningsfilosofi

- Prosjektbasert læringstilnærming  
- Hyppige kunnskapssjekker (quizer)  
- Praktiske kodeøvelser  
- Virkelighetstilpassede eksempler  
- Fokus på grunnleggende ferdigheter før rammeverk  

### Repository-vedlikehold

- Aktivt fellesskap av lærende og bidragsytere  
- Regelmessige oppdateringer til avhengigheter og innhold  
- Issues og diskusjoner overvåkes av vedlikeholdere  
- Oversettelsesoppdateringer automatisert via GitHub Actions  

### Relaterte ressurser

- [Microsoft Learn moduler](https://docs.microsoft.com/learn/)  
- [Student Hub ressurser](https://docs.microsoft.com/learn/student-hub/)  
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) anbefalt for lærende  
- Ytterligere kurs: Generativ AI, Data Science, ML, IoT pensum tilgjengelig  

### Arbeid med spesifikke prosjekter

For detaljerte instruksjoner om enkeltprosjekter, se README-filene i:  
- `quiz-app/README.md` - Vue 3 quizapplikasjon  
- `7-bank-project/README.md` - Bankapplikasjon med autentisering  
- `5-browser-extension/README.md` - Nettleserutvidelsesutvikling  
- `6-space-game/README.md` - Canvas-basert spillutvikling  
- `9-chat-project/README.md` - AI chat assistent prosjekt  

### Monorepo-struktur

Selv om det ikke er en tradisjonell monorepo, inneholder dette repositoriet flere uavhengige prosjekter:  
- Hver leksjon er selvstendig  
- Prosjektene deler ikke avhengigheter  
- Arbeid på individuelle prosjekter uten å påvirke andre  
- Klon hele repo for full pensumopplevelse  

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Ansvarsfraskrivelse**:
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vennligst vær oppmerksom på at automatiske oversettelser kan inneholde feil eller unøyaktigheter. Det opprinnelige dokumentet på dets opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->