# AGENTS.md

## Project Overview

Ito ay isang edukasyonal na kurikulum na repository para sa pagtuturo ng mga pundasyon ng web development sa mga nagsisimula. Ang kurikulum ay isang komprehensibong 12-linggong kurso na binuo ng Microsoft Cloud Advocates, naglalaman ng 24 na praktikal na aralin na sumasaklaw sa JavaScript, CSS, at HTML.

### Key Components

- **Educational Content**: 24 na organisadong aralin na inayos sa mga project-based na modules
- **Practical Projects**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor, at AI Chat Assistant
- **Interactive Quizzes**: 48 na pagsusulit na may tig-3 tanong bawat isa (pre/post-lesson assessments)
- **Multi-language Support**: Awtomatikong pagsasalin para sa 50+ na mga wika gamit ang GitHub Actions
- **Technologies**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (para sa mga AI projects)

### Architecture

- Educational repository na may leksyon na nakaayos ayon sa aralin
- Bawat folder ng aralin ay naglalaman ng README, mga halimbawa ng code, at mga solusyon
- Mga standalone na proyekto sa hiwalay na mga direktoryo (quiz-app, iba't ibang mga proyekto ng aralin)
- Sistema ng pagsasalin gamit ang GitHub Actions (co-op-translator)
- Dokumentasyon na isinusilbi gamit ang Docsify at available bilang PDF

## Setup Commands

Ang repository na ito ay pangunahing para sa pag-consume ng edukasyonal na nilalaman. Para sa pagtatrabaho sa mga partikular na proyekto:

### Main Repository Setup

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz App Setup (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Simulan ang development server
npm run build      # Gumawa para sa production
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

### Browser Extension Projects

```bash
cd 5-browser-extension/solution
npm install
# Sundin ang mga tagubilin sa pag-load ng extension na partikular sa browser
```

### Space Game Projects

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

## Development Workflow

### For Content Contributors

1. **I-fork ang repository** sa iyong GitHub account
2. **I-clone ang iyong fork** lokál
3. **Gumawa ng bagong sangay (branch)** para sa iyong mga pagbabago
4. Gawin ang mga pagbabago sa nilalaman ng aralin o mga halimbawa ng code
5. Subukan ang anumang pagbabago sa code sa mga angkop na direktoryo ng proyekto
6. Mag-submit ng pull requests ayon sa mga gabay sa kontribusyon

### For Learners

1. I-fork o i-clone ang repository
2. Mag-navigate sa mga direktoryo ng aralin nang sunod-sunod
3. Basahin ang mga file na README para sa bawat aralin
4. Tapusin ang mga pre-lesson na pagsusulit sa https://ff-quizzes.netlify.app/web/
5. Gawin ang mga halimbawa ng code sa mga folder ng aralin
6. Tapusin ang mga asignatura at hamon
7. Sagutan ang mga post-lesson na pagsusulit

### Live Development

- **Dokumentasyon**: Patakbuhin ang `docsify serve` sa root (port 3000)
- **Quiz App**: Patakbuhin ang `npm run dev` sa direktoryo ng quiz-app
- **Mga Proyekto**: Gamitin ang VS Code Live Server extension para sa mga HTML na proyekto
- **API Projects**: Patakbuhin ang `npm start` sa kaukulang mga direktoryo ng API

## Testing Instructions

### Quiz App Testing

```bash
cd quiz-app
npm run lint       # Suriin ang mga isyu sa estilo ng code
npm run build      # Tiyakin na matagumpay ang build
```

### Bank API Testing

```bash
cd 7-bank-project/api
npm run lint       # Suriin ang mga isyu sa estilo ng code
node server.js     # Tiyakin na nagsisimula ang server nang walang mga error
```

### General Testing Approach

- Ito ay isang edukasyonal na repository na walang komprehensibong automated tests
- Manual testing ay nakatuon sa:
  - Mga halimbawa ng code ay tumatakbo nang walang error
  - Mga link sa dokumentasyon ay gumagana nang tama
  - Ang mga build ng proyekto ay matagumpay na nakumpleto
  - Mga halimbawa ay sumusunod sa pinakamahusay na mga gawain

### Pre-submission Checks

- Patakbuhin ang `npm run lint` sa mga direktoryo na may package.json
- Siguraduhing wasto ang mga markdown na link
- Subukan ang mga halimbawa ng code sa browser o Node.js
- Tingnan na ang mga pagsasalin ay nananatili ang tamang estruktura

## Code Style Guidelines

### JavaScript

- Gumamit ng modernong ES6+ na syntax
- Sundin ang pamantayang ESLint configurations na ibinigay sa mga proyekto
- Gumamit ng makabuluhang mga variable at pangalan ng function para sa kalinawan ng edukasyon
- Magdagdag ng mga komento na nagpapaliwanag ng mga konsepto para sa mga nag-aaral
- I-format gamit ang Prettier kung ito ay naka-configure

### HTML/CSS

- Semantic na mga elemento ng HTML5
- Mga prinsipyo ng responsive design
- Malinaw na mga klaseng pangalan
- Mga komento na nagpapaliwanag ng mga teknik sa CSS para sa mga nag-aaral

### Python

- Pamantayan ng estilo ng PEP 8
- Malilinaw, edukasyonal na mga halimbawa ng code
- Mga type hint kung nakatutulong sa pag-aaral

### Markdown Documentation

- Malinaw na hierarchy ng mga heading
- Code blocks na may pagtukoy ng wika
- Mga link sa karagdagang mga mapagkukunan
- Mga screenshot at larawan sa `images/` na mga direktoryo
- Alt text para sa mga larawan para sa accessibility

### File Organization

- Mga aralin na naka-number nang sunud-sunod (1-getting-started-lessons, 2-js-basics, atbp.)
- Bawat proyekto ay may `solution/` at madalas ay `start/` o `your-work/` na mga direktoryo
- Mga larawan ay nakaimbak sa mga folder ng `images/` na para sa partikular na aralin
- Mga pagsasalin ay nasa estrukturang `translations/{language-code}/`

## Build and Deployment

### Quiz App Deployment (Azure Static Web Apps)

Ang quiz-app ay naka-configure para sa Azure Static Web Apps deployment:

```bash
cd quiz-app
npm run build      # Gumagawa ng dist/ na folder
# Nagde-deploy gamit ang GitHub Actions workflow kapag may push sa main
```

Azure Static Web Apps configuration:
- **App location**: `/quiz-app`
- **Output location**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Documentation PDF Generation

```bash
npm install                    # I-install ang docsify-to-pdf
npm run convert               # Bumuo ng PDF mula sa docs
```

### Docsify Documentation

```bash
npm install -g docsify-cli    # I-install ang Docsify nang global
docsify serve                 # I-serve sa localhost:3000
```

### Project-specific Builds

Bawat direktoryo ng proyekto ay maaaring may sariling proseso ng build:
- Vue projects: `npm run build` na lumilikha ng production bundles
- Static projects: Walang build step, direktang pagseserbisyo ng mga file

## Pull Request Guidelines

### Title Format

Gumamit ng malinaw, naglalarawang mga titulo na nagpapahiwatig ng lugar ng pagbabago:
- `[Quiz-app] Add new quiz for lesson X`
- `[Lesson-3] Fix typo in terrarium project`
- `[Translation] Add Spanish translation for lesson 5`
- `[Docs] Update setup instructions`

### Required Checks

Bago magsumite ng PR:

1. **Kalidad ng Code**:
   - Patakbuhin ang `npm run lint` sa mga apektadong direktoryo ng proyekto
   - Ayusin lahat ng linting error at warning

2. **Build Verification**:
   - Patakbuhin ang `npm run build` kung naaangkop
   - Siguraduhing walang error sa build

3. **Link Validation**:
   - Subukan lahat ng markdown na mga link
   - Siguraduhin na gumagana ang mga image reference

4. **Review ng Nilalaman**:
   - Proofread para sa baybay at gramatika
   - Siguraduhing tama at pang-edukasyon ang mga halimbawa ng code
   - I-verify na ang mga pagsasalin ay nananatili ang orihinal na kahulugan

### Contribution Requirements

- Sumang-ayon sa Microsoft CLA (awtomatikong tseke sa unang PR)
- Sundin ang [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Tingnan ang [CONTRIBUTING.md](./CONTRIBUTING.md) para sa detalyadong gabay
- Banggitin ang mga numero ng isyu sa deskripsyon ng PR kung naaangkop

### Review Process

- PRs ay sinusuri ng mga tagapag-maintain at community
- Prayoridad ang kalinawan sa edukasyon
- Dapat sundin ng mga halimbawa ng code ang kasalukuyang pinakamahusay na mga gawain
- Ang mga pagsasalin ay sinusuri para sa katumpakan at angkop na kultura

## Translation System

### Automated Translation

- Gumagamit ng GitHub Actions gamit ang co-op-translator workflow
- Nagsasalin sa 50+ na mga wika nang awtomatiko
- Mga source file sa pangunahing mga direktoryo
- Mga naisaling file sa `translations/{language-code}/` na mga direktoryo

### Adding Manual Translation Improvements

1. Hanapin ang file sa `translations/{language-code}/`
2. Gawin ang mga pagpapabuti habang pinapanatili ang estruktura
3. Siguraduhin na ang mga halimbawa ng code ay nananatiling gumagana
4. Subukan ang anumang lokal na nilalaman ng pagsusulit

### Translation Metadata

Ang naisaling mga file ay may metadata header:
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

## Debugging and Troubleshooting

### Common Issues

**Quiz app fails to start**:
- Suriin ang bersyon ng Node.js (v14+ ang rekomendado)
- Burahin ang `node_modules` at `package-lock.json`, patakbuhin muli ang `npm install`
- Suriin kung may conflict sa port (default: Vite ay gumagamit ng port 5173)

**API server won't start**:
- Tiyaking ang bersyon ng Node.js ay sapat (node >=10)
- Tingnan kung ang port ay ginagamit na
- Siguraduhing na-install ang lahat ng dependencies gamit ang `npm install`

**Browser extension won't load**:
- Siguraduhing tama ang format ng manifest.json
- Tingnan ang console ng browser para sa mga error
- Sundin ang mga instruksiyon para sa pag-install ng browser-specific extension

**Python chat project issues**:
- Siguraduhing naka-install ang OpenAI package: `pip install openai`
- Tiyaking naka-set ang GITHUB_TOKEN environment variable
- Suriin ang mga permiso sa GitHub Models access

**Docsify not serving docs**:
- Mag-install ng docsify-cli globally: `npm install -g docsify-cli`
- Patakbuhin mula sa root directory ng repository
- Siguraduhing nandiyan ang `docs/_sidebar.md`

### Development Environment Tips

- Gamitin ang VS Code na may Live Server extension para sa mga HTML na proyekto
- Mag-install ng ESLint at Prettier extensions para sa consistent na pag-format
- Gamitin ang browser DevTools para mag-debug ng JavaScript
- Para sa Vue projects, mag-install ng Vue DevTools browser extension

### Performance Considerations

- Maraming naisaling mga file (50+ na mga wika) kaya malaki ang full clones
- Gumamit ng shallow clone kung nilalaman lang ang pinagtatrabahuhan: `git clone --depth 1`
- I-exclude ang mga pagsasalin mula sa paghahanap kapag nagtatrabaho sa English na nilalaman
- Ang mga proseso ng build ay maaaring mabagal sa unang run (npm install, Vite build)

## Security Considerations

### Environment Variables

- Huwag kailanman i-commit ang API keys sa repository
- Gumamit ng `.env` files (naka-lista na sa `.gitignore`)
- I-dokumenta ang mga kinakailangang environment variables sa mga README ng proyekto

### Python Projects

- Gumamit ng virtual environments: `python -m venv venv`
- Panatilihing updated ang dependencies
- Ang mga GitHub token ay dapat may minimal na kinakailangang permiso

### GitHub Models Access

- Kailangan ang Personal Access Tokens (PAT) para sa GitHub Models
- Ang mga token ay dapat itago bilang environment variables
- Huwag kailanman i-commit ang mga token o credentials

## Additional Notes

### Target Audience

- Ganap na mga nagsisimula sa web development
- Mag-aaral at mga nag-aaral mag-isa
- Mga guro na gumagamit ng kurikulum sa mga silid-aralan
- Nilalaman ay idinisenyo para sa accessibility at unti-unting pagbuo ng kasanayan

### Educational Philosophy

- Project-based na pamamaraan sa pagkatuto
- Madalas na pagsusuri ng kaalaman (mga pagsusulit)
- Praktikal na mga coding exercise
- Mga halimbawa ng totoong aplikasyon
- Pokus sa mga pundasyon bago ang frameworks

### Repository Maintenance

- Aktibong komunidad ng mga nag-aaral at mga kontribyutor
- Regular na pag-update sa dependencies at nilalaman
- Issues at diskusyon ay minomonitor ng mga tagapag-maintain
- Mga update sa pagsasalin ay awtomatiko gamit ang GitHub Actions

### Related Resources

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub resources](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) na inirerekomenda para sa mga nag-aaral
- Mga karagdagang kurso: Generative AI, Data Science, ML, IoT curricula ay available

### Working with Specific Projects

Para sa detalyadong mga instruksiyon sa mga indibidwal na proyekto, sumangguni sa mga README file sa:
- `quiz-app/README.md` - Vue 3 quiz application
- `7-bank-project/README.md` - Banking application na may authentication
- `5-browser-extension/README.md` - Pag-develop ng browser extension
- `6-space-game/README.md` - Canvas-based na game development
- `9-chat-project/README.md` - AI chat assistant project

### Monorepo Structure

Bagamat hindi tradisyunal na monorepo, ang repository na ito ay naglalaman ng maraming independiyenteng mga proyekto:
- Bawat aralin ay sarado at kumpleto sa sarili
- Hindi nagbabahagi ng dependencies ang mga proyekto
- Maaaring magtrabaho sa mga indibidwal na proyekto nang hindi naaapektuhan ang iba
- I-clone ang buong repo para sa buong karanasan ng kurikulum

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Paalala**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat aming pinagsisikapan ang katumpakan, pakatandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o di-tumpak na impormasyon. Ang orihinal na dokumento sa orihinal nitong wika ang dapat ituring na pangunahing sanggunian. Para sa mahahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na maaaring magmula sa paggamit ng pagsasaling ito.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->