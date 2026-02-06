# AGENTS.md

## Pangkalahatang-ideya ng Proyekto

Ito ay isang repository ng kurikulum pang-edukasyon para sa pagtuturo ng mga pangunahing kaalaman sa web development sa mga baguhan. Ang kurikulum ay isang komprehensibong 12-linggong kurso na binuo ng Microsoft Cloud Advocates, na nagtatampok ng 24 na praktikal na aralin na sumasaklaw sa JavaScript, CSS, at HTML.

### Pangunahing Bahagi

- **Nilalaman Pang-edukasyon**: 24 na organisadong aralin na nakabatay sa proyekto
- **Praktikal na Proyekto**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor, at AI Chat Assistant
- **Mga Interaktibong Pagsusulit**: 48 na pagsusulit na may tig-3 tanong bawat isa (pre/post-lesson assessments)
- **Suporta sa Multi-language**: Awtomatikong pagsasalin sa mahigit 50 wika gamit ang GitHub Actions
- **Mga Teknolohiya**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (para sa mga AI na proyekto)

### Arkitektura

- Repository pang-edukasyon na may istrukturang nakabatay sa aralin
- Ang bawat folder ng aralin ay naglalaman ng README, mga halimbawa ng code, at mga solusyon
- Mga standalone na proyekto sa magkakahiwalay na direktoryo (quiz-app, iba't ibang proyekto ng aralin)
- Sistema ng pagsasalin gamit ang GitHub Actions (co-op-translator)
- Dokumentasyon na ipinapakita sa pamamagitan ng Docsify at magagamit bilang PDF

## Mga Command sa Setup

Ang repository na ito ay pangunahing para sa pagkonsumo ng nilalaman pang-edukasyon. Para sa pagtatrabaho sa mga partikular na proyekto:

### Pangunahing Setup ng Repository

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Setup ng Quiz App (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
```

### API ng Bank Project (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Start API server
npm run lint       # Run ESLint
npm run format     # Format with Prettier
```

### Mga Proyekto ng Browser Extension

```bash
cd 5-browser-extension/solution
npm install
# Follow browser-specific extension loading instructions
```

### Mga Proyekto ng Space Game

```bash
cd 6-space-game/solution
npm install
# Open index.html in browser or use Live Server
```

### Proyekto ng Chat (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Set GITHUB_TOKEN environment variable
python api.py
```

## Workflow ng Pag-develop

### Para sa mga Contributor ng Nilalaman

1. **I-fork ang repository** sa iyong GitHub account
2. **I-clone ang iyong fork** nang lokal
3. **Gumawa ng bagong branch** para sa iyong mga pagbabago
4. Gumawa ng mga pagbabago sa nilalaman ng aralin o mga halimbawa ng code
5. Subukan ang anumang pagbabago sa code sa mga kaugnay na direktoryo ng proyekto
6. Mag-submit ng pull requests ayon sa mga gabay sa kontribusyon

### Para sa mga Nag-aaral

1. I-fork o i-clone ang repository
2. Mag-navigate sa mga direktoryo ng aralin nang sunod-sunod
3. Basahin ang mga README file para sa bawat aralin
4. Kumpletuhin ang mga pre-lesson quiz sa https://ff-quizzes.netlify.app/web/
5. Trabahuin ang mga halimbawa ng code sa mga folder ng aralin
6. Kumpletuhin ang mga assignment at hamon
7. Sagutan ang mga post-lesson quiz

### Live Development

- **Dokumentasyon**: Patakbuhin ang `docsify serve` sa root (port 3000)
- **Quiz App**: Patakbuhin ang `npm run dev` sa quiz-app directory
- **Mga Proyekto**: Gamitin ang VS Code Live Server extension para sa mga HTML na proyekto
- **API Projects**: Patakbuhin ang `npm start` sa mga kaugnay na direktoryo ng API

## Mga Tagubilin sa Pagsusuri

### Pagsusuri ng Quiz App

```bash
cd quiz-app
npm run lint       # Check for code style issues
npm run build      # Verify build succeeds
```

### Pagsusuri ng Bank API

```bash
cd 7-bank-project/api
npm run lint       # Check for code style issues
node server.js     # Verify server starts without errors
```

### Pangkalahatang Diskarte sa Pagsusuri

- Ito ay isang repository pang-edukasyon na walang komprehensibong automated tests
- Ang manual testing ay nakatuon sa:
  - Ang mga halimbawa ng code ay tumatakbo nang walang error
  - Ang mga link sa dokumentasyon ay gumagana nang tama
  - Ang mga build ng proyekto ay matagumpay na nakukumpleto
  - Ang mga halimbawa ay sumusunod sa pinakamahusay na kasanayan

### Mga Pre-submission Check

- Patakbuhin ang `npm run lint` sa mga direktoryo na may package.json
- Siguraduhing valid ang mga markdown link
- Subukan ang mga halimbawa ng code sa browser o Node.js
- Siguraduhing ang mga pagsasalin ay may tamang istruktura

## Mga Gabay sa Estilo ng Code

### JavaScript

- Gumamit ng modernong ES6+ syntax
- Sundin ang standard na ESLint configurations na ibinigay sa mga proyekto
- Gumamit ng makabuluhang pangalan ng variable at function para sa edukasyonal na kalinawan
- Magdagdag ng mga komento na nagpapaliwanag ng mga konsepto para sa mga nag-aaral
- I-format gamit ang Prettier kung naka-configure

### HTML/CSS

- Semantic HTML5 elements
- Mga prinsipyo ng responsive design
- Malinaw na naming conventions para sa klase
- Mga komento na nagpapaliwanag ng mga teknik sa CSS para sa mga nag-aaral

### Python

- PEP 8 style guidelines
- Malinaw, edukasyonal na mga halimbawa ng code
- Mga type hint kung kapaki-pakinabang para sa pag-aaral

### Dokumentasyon ng Markdown

- Malinaw na hierarchy ng heading
- Mga code block na may language specification
- Mga link sa karagdagang resources
- Mga screenshot at imahe sa `images/` directories
- Alt text para sa mga imahe para sa accessibility

### Organisasyon ng File

- Ang mga aralin ay naka-number nang sunod-sunod (1-getting-started-lessons, 2-js-basics, atbp.)
- Ang bawat proyekto ay may `solution/` at madalas na `start/` o `your-work/` directories
- Ang mga imahe ay naka-imbak sa lesson-specific na `images/` folders
- Ang mga pagsasalin ay nasa `translations/{language-code}/` na istruktura

## Build at Deployment

### Deployment ng Quiz App (Azure Static Web Apps)

Ang quiz-app ay naka-configure para sa Azure Static Web Apps deployment:

```bash
cd quiz-app
npm run build      # Creates dist/ folder
# Deploys via GitHub Actions workflow on push to main
```

Konfigurasyon ng Azure Static Web Apps:
- **Lokasyon ng App**: `/quiz-app`
- **Lokasyon ng Output**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Pagbuo ng PDF ng Dokumentasyon

```bash
npm install                    # Install docsify-to-pdf
npm run convert               # Generate PDF from docs
```

### Dokumentasyon ng Docsify

```bash
npm install -g docsify-cli    # Install Docsify globally
docsify serve                 # Serve on localhost:3000
```

### Mga Build na Partikular sa Proyekto

Ang bawat direktoryo ng proyekto ay maaaring may sariling proseso ng build:
- Mga proyekto ng Vue: `npm run build` ay lumilikha ng production bundles
- Mga static na proyekto: Walang build step, direktang i-serve ang mga file

## Mga Gabay sa Pull Request

### Format ng Pamagat

Gumamit ng malinaw, deskriptibong pamagat na nagpapahiwatig ng lugar ng pagbabago:
- `[Quiz-app] Magdagdag ng bagong quiz para sa lesson X`
- `[Lesson-3] Ayusin ang typo sa terrarium project`
- `[Translation] Magdagdag ng pagsasalin sa Espanyol para sa lesson 5`
- `[Docs] I-update ang mga tagubilin sa setup`

### Mga Kinakailangang Pagsusuri

Bago mag-submit ng PR:

1. **Kalidad ng Code**:
   - Patakbuhin ang `npm run lint` sa mga apektadong direktoryo ng proyekto
   - Ayusin ang lahat ng linting errors at warnings

2. **Pag-verify ng Build**:
   - Patakbuhin ang `npm run build` kung naaangkop
   - Siguraduhing walang build errors

3. **Pag-validate ng Link**:
   - Subukan ang lahat ng markdown links
   - Siguraduhing gumagana ang mga reference ng imahe

4. **Review ng Nilalaman**:
   - I-proofread para sa spelling at grammar
   - Siguraduhing tama at edukasyonal ang mga halimbawa ng code
   - Siguraduhing ang mga pagsasalin ay nagpapanatili ng orihinal na kahulugan

### Mga Kinakailangan sa Kontribusyon

- Sumang-ayon sa Microsoft CLA (automated check sa unang PR)
- Sundin ang [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Tingnan ang [CONTRIBUTING.md](./CONTRIBUTING.md) para sa detalyadong gabay
- I-reference ang mga numero ng isyu sa PR description kung naaangkop

### Proseso ng Review

- Ang mga PR ay nire-review ng mga maintainer at komunidad
- Ang edukasyonal na kalinawan ang prayoridad
- Ang mga halimbawa ng code ay dapat sumunod sa kasalukuyang pinakamahusay na kasanayan
- Ang mga pagsasalin ay nire-review para sa katumpakan at pagiging angkop sa kultura

## Sistema ng Pagsasalin

### Awtomatikong Pagsasalin

- Gumagamit ng GitHub Actions na may co-op-translator workflow
- Awtomatikong isinasalin sa mahigit 50 wika
- Ang mga source file ay nasa pangunahing direktoryo
- Ang mga isinaling file ay nasa `translations/{language-code}/` na direktoryo

### Pagdaragdag ng Manu-manong Pagpapabuti sa Pagsasalin

1. Hanapin ang file sa `translations/{language-code}/`
2. Gumawa ng mga pagpapabuti habang pinapanatili ang istruktura
3. Siguraduhing gumagana ang mga halimbawa ng code
4. Subukan ang anumang localized na nilalaman ng quiz

### Metadata ng Pagsasalin

Ang mga isinaling file ay may kasamang metadata header:
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

## Pag-debug at Pag-troubleshoot

### Karaniwang Isyu

**Hindi gumagana ang quiz app**:
- Suriin ang bersyon ng Node.js (inirerekomenda: v14+)
- Tanggalin ang `node_modules` at `package-lock.json`, patakbuhin muli ang `npm install`
- Suriin ang mga port conflicts (default: Vite ay gumagamit ng port 5173)

**Hindi gumagana ang API server**:
- Siguraduhing ang bersyon ng Node.js ay nakakatugon sa minimum (node >=10)
- Suriin kung ang port ay ginagamit na
- Siguraduhing lahat ng dependencies ay naka-install gamit ang `npm install`

**Hindi naglo-load ang browser extension**:
- Siguraduhing ang manifest.json ay maayos na naka-format
- Suriin ang browser console para sa mga error
- Sundin ang mga partikular na tagubilin sa pag-install ng extension ng browser

**Mga isyu sa Python chat project**:
- Siguraduhing naka-install ang OpenAI package: `pip install openai`
- Siguraduhing naka-set ang GITHUB_TOKEN environment variable
- Suriin ang access permissions ng GitHub Models

**Hindi gumagana ang Docsify**:
- I-install ang docsify-cli globally: `npm install -g docsify-cli`
- Patakbuhin mula sa root directory ng repository
- Suriin kung ang `docs/_sidebar.md` ay umiiral

### Mga Tip sa Development Environment

- Gumamit ng VS Code na may Live Server extension para sa mga HTML na proyekto
- I-install ang ESLint at Prettier extensions para sa consistent na formatting
- Gumamit ng browser DevTools para sa pag-debug ng JavaScript
- Para sa mga proyekto ng Vue, i-install ang Vue DevTools browser extension

### Mga Pagsasaalang-alang sa Performance

- Ang malaking bilang ng mga isinaling file (50+ wika) ay nangangahulugang malaki ang full clones
- Gumamit ng shallow clone kung nagtatrabaho lamang sa nilalaman: `git clone --depth 1`
- I-exclude ang mga pagsasalin mula sa mga paghahanap kapag nagtatrabaho sa nilalaman sa Ingles
- Ang mga proseso ng build ay maaaring mabagal sa unang run (npm install, Vite build)

## Mga Pagsasaalang-alang sa Seguridad

### Mga Environment Variable

- Ang mga API key ay hindi dapat i-commit sa repository
- Gumamit ng `.env` files (nasa `.gitignore` na)
- I-dokumento ang mga kinakailangang environment variable sa mga README ng proyekto

### Mga Proyekto ng Python

- Gumamit ng virtual environments: `python -m venv venv`
- Panatilihing updated ang mga dependencies
- Ang mga GitHub token ay dapat may minimal na kinakailangang permissions

### Access ng GitHub Models

- Kinakailangan ang Personal Access Tokens (PAT) para sa GitHub Models
- Ang mga token ay dapat itago bilang environment variables
- Huwag kailanman i-commit ang mga token o credentials

## Karagdagang Tala

### Target na Audience

- Mga baguhan sa web development
- Mga estudyante at self-learners
- Mga guro na gumagamit ng kurikulum sa mga klase
- Ang nilalaman ay idinisenyo para sa accessibility at gradual na pagbuo ng kasanayan

### Pilosopiya ng Edukasyon

- Diskarte sa pag-aaral na nakabatay sa proyekto
- Madalas na pagsusuri ng kaalaman (quizzes)
- Mga praktikal na coding exercises
- Mga halimbawa ng aplikasyon sa totoong mundo
- Pokus sa mga pangunahing kaalaman bago ang mga framework

### Pagpapanatili ng Repository

- Aktibong komunidad ng mga nag-aaral at contributor
- Regular na pag-update sa mga dependencies at nilalaman
- Ang mga isyu at talakayan ay sinusubaybayan ng mga maintainer
- Ang mga update sa pagsasalin ay awtomatiko sa pamamagitan ng GitHub Actions

### Mga Kaugnay na Resources

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub resources](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) inirerekomenda para sa mga nag-aaral
- Karagdagang kurso: Generative AI, Data Science, ML, IoT curricula available

### Pagtatrabaho sa Partikular na Mga Proyekto

Para sa detalyadong tagubilin sa mga indibidwal na proyekto, tingnan ang README files sa:
- `quiz-app/README.md` - Vue 3 quiz application
- `7-bank-project/README.md` - Banking application na may authentication
- `5-browser-extension/README.md` - Pag-develop ng browser extension
- `6-space-game/README.md` - Pag-develop ng game gamit ang Canvas
- `9-chat-project/README.md` - Proyekto ng AI chat assistant

### Istruktura ng Monorepo

Bagama't hindi tradisyunal na monorepo, ang repository na ito ay naglalaman ng maraming independiyenteng proyekto:
- Ang bawat aralin ay self-contained
- Ang mga proyekto ay hindi nagbabahagi ng dependencies
- Magtrabaho sa mga indibidwal na proyekto nang hindi naaapektuhan ang iba
- I-clone ang buong repo para sa kumpletong karanasan sa kurikulum

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.