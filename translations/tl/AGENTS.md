# AGENTS.md

## Pangkalahatang-ideya ng Proyekto

Ito ay isang repositoryo ng edukasyonal na kurikulum para sa pagtuturo ng mga pundasyon ng web development sa mga baguhan. Ang kurikulum ay isang komprehensibong 12-linggong kurso na binuo ng Microsoft Cloud Advocates, na may 24 na hands-on na mga aralin na sumasaklaw sa JavaScript, CSS, at HTML.

### Pangunahing Mga Bahagi

- **Nilalamang Pang-edukasyon**: 24 na nakaayos na mga aralin na inorganisa sa mga proyekto batay sa module
- **Praktikal na Mga Proyekto**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor, at AI Chat Assistant
- **Interactive na Mga Pagsusulit**: 48 na pagsusulit na may tig-3 na tanong bawat isa (pre/post-lesson assessments)
- **Suporta sa Maramihang Wika**: Awtomatikong pagsasalin para sa 50+ na mga wika gamit ang GitHub Actions
- **Mga Teknolohiya**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (para sa mga AI na proyekto)

### Arkitektura

- Edukasyonal na repositoryo na may istrukturang nakabatay sa mga aralin
- Bawat folder ng aralin ay naglalaman ng README, mga halimbawa ng code, at mga solusyon
- Mga nakahiwalay na proyekto sa magkakahiwalay na direktoryo (quiz-app, iba't ibang proyekto ng aralin)
- Sistema ng pagsasalin gamit ang GitHub Actions (co-op-translator)
- Dokumentasyon na ipinapakita gamit ang Docsify at magagamit bilang PDF

## Mga Utos sa Setup

Ang repositoryo na ito ay pangunahing para sa pagkonsumo ng nilalamang pang-edukasyon. Para sa pagtatrabaho sa mga partikular na proyekto:

### Pangkalahatang Setup ng Repositoryo

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Setup ng Quiz App (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Simulan ang development server
npm run build      # Bumuo para sa produksyon
npm run lint       # Patakbuhin ang ESLint
```

### Bank Project API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Simulan ang API server
npm run lint       # Patakbuhin ang ESLint
npm run format     # I-format gamit ang Prettier
```

### Mga Proyekto ng Browser Extension

```bash
cd 5-browser-extension/solution
npm install
# Sundin ang mga tagubilin sa pag-load ng extension na partikular sa browser
```

### Mga Proyekto ng Space Game

```bash
cd 6-space-game/solution
npm install
# Buksan ang index.html sa browser o gamitin ang Live Server
```

### Chat Project (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Itakda ang environment variable na GITHUB_TOKEN
python api.py
```

## Workflow ng Pag-develop

### Para sa Mga Contributor ng Nilalaman

1. **I-fork ang repositoryo** sa iyong GitHub account
2. **I-clone ang iyong fork** lokal
3. **Gumawa ng bagong branch** para sa iyong mga pagbabago
4. Gawin ang mga pagbabago sa nilalaman ng aralin o mga halimbawa ng code
5. Subukan ang anumang pagbabago sa code sa mga kaukulang direktoryo ng proyekto
6. Mag-submit ng pull request kasunod ng mga patnubay sa kontribusyon

### Para sa Mga Nag-aaral

1. Mag-fork o mag-clone ng repositoryo
2. Mag-navigate sa mga direktoryo ng aralin nang sunod-sunod
3. Basahin ang README files para sa bawat aralin
4. Kumpletuhin ang mga pre-lesson quizzes sa https://ff-quizzes.netlify.app/web/
5. Trabahuhin ang mga halimbawa ng code sa mga folder ng aralin
6. Kumpletuhin ang mga takdang-aralin at mga hamon
7. Kumuha ng mga post-lesson quizzes

### Live na Pag-develop

- **Dokumentasyon**: Patakbuhin ang `docsify serve` sa root (port 3000)
- **Quiz App**: Patakbuhin ang `npm run dev` sa quiz-app directory
- **Mga Proyekto**: Gamitin ang VS Code Live Server extension para sa mga HTML na proyekto
- **Mga API na Proyekto**: Patakbuhin ang `npm start` sa mga kaukulang API directory

## Mga Tagubilin para sa Testing

### Pag-testing ng Quiz App

```bash
cd quiz-app
npm run lint       # Suriin ang mga isyu sa estilo ng code
npm run build      # Tiyakin na matagumpay ang build
```

### Pag-testing ng Bank API

```bash
cd 7-bank-project/api
npm run lint       # Suriin ang mga isyu sa estilo ng code
node server.js     # Siguraduhin na nagsisimula ang server nang walang mga error
```

### Pangkalahatang Paraan sa Testing

- Isang edukasyonal na repositoryo ito na walang komprehensibong awtomatikong mga test
- Manual na testing ay nakatuon sa:
  - Mga halimbawa ng code na tumatakbo nang walang error
  - Mga link sa dokumentasyon na gumagana nang tama
  - Matagumpay na pagsasagawa ng mga build ng proyekto
  - Mga halimbawa na sumusunod sa mga pinakamahusay na gawain

### Mga Pre-submission Checks

- Patakbuhin ang `npm run lint` sa mga direktoryo na may package.json
- Suriin na valid ang mga markdown link
- Subukan ang mga halimbawa ng code sa browser o Node.js
- Suriin na ang mga pagsasalin ay nananatili sa wastong istruktura

## Mga Alituntunin sa Estilo ng Code

### JavaScript

- Gumamit ng modernong ES6+ na sintaks
- Sundin ang standard ESLint configurations na ibinigay sa mga proyekto
- Gumamit ng makahulugang mga pangalang variable at function para sa kalinawan ng edukasyon
- Magdagdag ng mga komento na nagpapaliwanag ng mga konsepto para sa mga nag-aaral
- I-format gamit ang Prettier kung saan naka-configure

### HTML/CSS

- Semantic HTML5 na mga elemento
- Mga prinsipyo ng responsive design
- Malinaw na mga convention sa pag-ngalan ng klase
- Mga komento na nagpapaliwanag ng mga teknik sa CSS para sa mga nag-aaral

### Python

- Mga alituntunin sa estilo ng PEP 8
- Malinaw, pang-edukasyong mga halimbawa ng code
- Mga type hint kung kapaki-pakinabang sa pagkatuto

### Dokumentasyon sa Markdown

- Malinaw na hierarchy ng heading
- Mga code blocks na may pagtukoy ng wika
- Mga link sa karagdagang mga mapagkukunan
- Mga screenshot at larawan sa mga direktoryo ng `images/`
- Alt text para sa mga larawan para sa accessibility

### Organisasyon ng File

- Mga aralin na naka-number nang sunod-sunod (1-getting-started-lessons, 2-js-basics, atbp.)
- Bawat proyekto ay may `solution/` at kadalasan ay `start/` o `your-work/` na mga direktoryo
- Mga larawan na nakaimbak sa lesson-specific na mga folder na `images/`
- Mga pagsasalin sa istrukturang `translations/{language-code}/`

## Build at Deployment

### Pag-deploy ng Quiz App (Azure Static Web Apps)

Ang quiz-app ay naka-configure para sa deployment gamit ang Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Gumagawa ng dist/ na folder
# Nagde-deploy gamit ang GitHub Actions workflow sa pag-push sa main
```

Azure Static Web Apps configuration:
- **App location**: `/quiz-app`
- **Output location**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Pagbuo ng Dokumentasyong PDF

```bash
npm install                    # I-install ang docsify-to-pdf
npm run convert               # Gumawa ng PDF mula sa docs
```

### Dokumentasyon gamit ang Docsify

```bash
npm install -g docsify-cli    # I-install ang Docsify nang global
docsify serve                 # I-serve sa localhost:3000
```

### Mga Build na Partikular sa Proyekto

Bawat direktoryo ng proyekto ay maaaring may sariling proseso ng build:
- Mga Vue na proyekto: `npm run build` na lumilikha ng production bundles
- Mga static na proyekto: Walang build step, diretsong nagsisilbi ng mga file

## Mga Alituntunin para sa Pull Request

### Format ng Pamagat

Gumamit ng malinaw, mapanuring mga pamagat na nagsasaad ng lugar ng pagbabago:
- `[Quiz-app] Magdagdag ng bagong pagsusulit para sa aralin X`
- `[Lesson-3] Ayusin ang typo sa proyekto ng terrarium`
- `[Translation] Magdagdag ng pagsasaling Espanyol para sa aralin 5`
- `[Docs] I-update ang mga tagubilin sa setup`

### Mga Kinakailangang Pagsusuri

Bago magsumite ng PR:

1. **Kalidad ng Code**:
   - Patakbuhin ang `npm run lint` sa apektadong mga direktoryo ng proyekto
   - Ayusin lahat ng linting errors at warnings

2. **Pag-verify ng Build**:
   - Patakbuhin ang `npm run build` kung naaangkop
   - Siguraduhin na walang error sa build

3. **Pag-validate ng Link**:
   - Subukan ang lahat ng markdown links
   - Suriin ang mga image references

4. **Rebyu ng Nilalaman**:
   - Proofread para sa pagbaybay at gramatika
   - Siguraduhin na tama at edukasyonal ang mga halimbawa ng code
   - Patunayan na ang mga pagsasalin ay napapanatili ang orihinal na kahulugan

### Mga Kinakailangan sa Kontribusyon

- Sumang-ayon sa Microsoft CLA (awtomatikong pagsuri sa unang PR)
- Sundin ang [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Tingnan ang [CONTRIBUTING.md](./CONTRIBUTING.md) para sa detalyadong mga patnubay
- I-refer ang mga numero ng isyu sa paglalarawan ng PR kung naaangkop

### Proseso ng Pagsusuri

- Ang mga PR ay sinusuri ng mga tagapanatili at komunidad
- Pinapahalagahan ang kalinawan ng edukasyon
- Ang mga halimbawa ng code ay dapat sumunod sa kasalukuyang pinakamahusay na mga gawain
- Ang mga pagsasalin ay sinusuri para sa katumpakan at angkop na kultura

## Sistema ng Pagsasalin

### Awtomatikong Pagsasalin

- Gumagamit ng GitHub Actions gamit ang co-op-translator workflow
- Nagsasalin sa 50+ na mga wika nang awtomatiko
- Mga silbing file sa pangunahing mga direktoryo
- Mga naisaling file sa `translations/{language-code}/` na mga direktoryo

### Pagdaragdag ng Manual na Pagpapahusay sa Pagsasalin

1. Hanapin ang file sa `translations/{language-code}/`
2. Gawin ang mga pagpapahusay habang pinapanatili ang istruktura
3. Siguraduhin na ang mga halimbawa ng code ay nananatiling gumagana
4. Subukan ang anumang nilokal na nilalaman ng pagsusulit

### Metadata sa Pagsasalin

Ang mga naisaling file ay may metadata na header:
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

## Pag-debug at Pagsasaayos ng Problema

### Mga Karaniwang Isyu

**Hindi nagsisimula ang quiz app**:
- Suriin ang bersyon ng Node.js (inirerekomenda v14+)
- Tanggalin ang `node_modules` at `package-lock.json`, patakbuhin muli ang `npm install`
- Suriin kung may mga conflict sa port (default: Vite ay gumagamit ng port 5173)

**Hindi nagsisimula ang API server**:
- Siguraduhin ang Node.js na bersyon ay naaabot ang minimum (node >=10)
- Suriin kung ang port ay kasalukuyang ginagamit
- Siguraduhin na na-install lahat ng dependencies gamit ang `npm install`

**Hindi naglo-load ang browser extension**:
- Siguraduhin na maayos na nakabuo ang manifest.json
- Suriin ang console ng browser para sa mga error
- Sundin ang mga tagubilin sa pag-install ng extension na partikular sa browser

**Mga isyu sa Python chat project**:
- Siguraduhing naka-install ang OpenAI package: `pip install openai`
- Siguraduhin na nakaset ang environment variable na GITHUB_TOKEN
- Suriin ang mga permiso sa pag-access ng GitHub Models

**Hindi nagsisilbi ang Docsify ng dokumento**:
- Mag-install ng docsify-cli globally: `npm install -g docsify-cli`
- Patakbuhin mula sa root directory ng repositoryo
- Siguraduhing umiiral ang `docs/_sidebar.md`

### Mga Tip sa Kapaligiran ng Pag-develop

- Gumamit ng VS Code kasama ang Live Server extension para sa mga HTML na proyekto
- Mag-install ng ESLint at Prettier extensions para sa pare-parehong pag-format
- Gumamit ng DevTools ng browser para sa pag-debug ng JavaScript
- Para sa mga Vue na proyekto, mag-install ng Vue DevTools na extension sa browser

### Mga Pagsasaalang-alang sa Performance

- Ang malaking bilang ng mga naisaling file (50+ na wika) ay nagpapalaki ng mga full clone
- Gumamit ng shallow clone kung nilalaman lang ang inaasikaso: `git clone --depth 1`
- I-exclude ang mga pagsasalin sa paghahanap kapag nagtratrabaho sa English content
- Ang mga proseso ng build ay maaaring mabagal sa unang takbo (npm install, Vite build)

## Mga Pagsasaalang-alang sa Seguridad

### Mga Environment Variable

- Ang mga API key ay hindi dapat isama sa repositoryo
- Gumamit ng `.env` files (nasa `.gitignore` na)
- I-dokumento ang mga kinakailangang environment variable sa mga README ng proyekto

### Mga Proyekto sa Python

- Gumamit ng mga virtual environment: `python -m venv venv`
- Panatilihing updated ang mga dependencies
- Ang mga GitHub token ay dapat may minimal na kinakailangang permiso

### Access sa GitHub Models

- Personal Access Tokens (PAT) ang kinakailangan para sa GitHub Models
- Ang mga token ay dapat itago bilang mga environment variable
- Huwag kailanman i-commit ang mga token o credential

## Karagdagang Mga Tala

### Target na Audience

- Mga ganap na baguhan sa web development
- Mga estudyante at mga self-learner
- Mga guro na gumagamit ng kurikulum sa mga silid-aralan
- Nilalaman ay idinisenyo para sa accessibility at unti-unting pagbuo ng kakayahan

### Pilosopiya ng Edukasyon

- Paraan ng pagkatuto na nakabatay sa proyekto
- Mga madalas na pagsusuri ng kaalaman (quizzes)
- Hands-on na mga ehersisyo sa coding
- Mga totoong halimbawa ng aplikasyon
- Pokus sa mga pundasyon bago ang mga framework

### Pangangalaga ng Repositoryo

- Aktibong komunidad ng mga nag-aaral at nagkakaloob
- Regular na pag-update sa mga dependencies at nilalaman
- Mga isyu at diskusyon ay mino-monitor ng mga tagapanatili
- Mga update sa pagsasalin ay awtomatiko gamit ang GitHub Actions

### Mga Kaugnay na Mapagkukunan

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub resources](https://docs.microsoft.com/learn/student-hub/)
- Inirerekomenda ang [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) para sa mga nag-aaral
- Karagdagang mga kurso: Generative AI, Data Science, ML, IoT curricula na available

### Pagtatrabaho sa Mga Partikular na Proyekto

Para sa detalyadong mga tagubilin sa mga indibidwal na proyekto, sumangguni sa mga README file sa:
- `quiz-app/README.md` - Vue 3 na aplikasyon ng pagsusulit
- `7-bank-project/README.md` - Banking application na may authentication
- `5-browser-extension/README.md` - Development ng browser extension
- `6-space-game/README.md` - Desenvolvimento ng canvas-based na laro
- `9-chat-project/README.md` - Proyekto ng AI chat assistant

### Istruktura ng Monorepo

Bagama’t hindi tradisyunal na monorepo, ang repositoryo na ito ay naglalaman ng maramihang independiyenteng mga proyekto:
- Ang bawat aralin ay nakahiwalay
- Hindi nagsasaluhan ng dependencies ang mga proyekto
- Puwedeng magtrabaho sa mga indibidwal na proyekto nang hindi naaapektuhan ang iba
- I-clone ang buong repo para sa buong karanasan sa kurikulum

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Paalala**:  
Ang dokumentong ito ay isinalin gamit ang AI na serbisyo ng pagsasalin na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't nagsusumikap kaming maging tumpak, pakatandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o kamalian. Ang orihinal na dokumento sa kanyang sariling wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasaling pantao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling pag-intindi na maaaring magmula sa paggamit ng pagsasaling ito.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->