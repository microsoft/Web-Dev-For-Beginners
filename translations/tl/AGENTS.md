# AGENTS.md

## Project Overview

Ito ay isang pang-edukasyon na repositoryo ng kurikulum para sa pagtuturo ng mga pundasyon ng web development sa mga baguhan. Ang kurikulum ay isang komprehensibong 12-linggong kurso na binuo ng Microsoft Cloud Advocates, na naglalaman ng 24 na praktikal na aralin na sumasaklaw sa JavaScript, CSS, at HTML.

### Key Components

- **Nilalamang Pang-edukasyon**: 24 na nakaayos na mga aralin na nakaorganisa sa mga proyekto
- **Praktikal na mga Proyekto**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor, at AI Chat Assistant
- **Interactive na Quizzes**: 48 na pagsusulit na may tig-3 na tanong (pre/post-lesson assessments)
- **Multi-language Support**: Awtomatikong pagsasalin para sa 50+ na mga wika gamit ang GitHub Actions
- **Mga Teknolohiya**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (para sa mga AI na proyekto)

### Architecture

- Pang-edukasyon na repositoryo na may estruktura batay sa mga aralin
- Bawat folder ng aralin ay naglalaman ng README, mga halimbawa ng code, at mga solusyon
- Mga standalone na proyekto sa mga hiwalay na direktoryo (quiz-app, iba't ibang proyekto ng aralin)
- Sistema ng pagsasalin gamit ang GitHub Actions (co-op-translator)
- Dokumentasyon na sineserbisyo gamit ang Docsify at available bilang PDF

## Setup Commands

Ang repositoryong ito ay pangunahing para sa paggamit ng nilalaman pang-edukasyon. Para sa pagtatrabaho sa mga tiyak na proyekto:

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
npm run build      # I-build para sa produksyon
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
# Sundin ang mga tagubilin para sa pag-load ng extension na partikular sa browser
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

### Para sa Mga Nag-aambag ng Nilalaman

1. **I-fork ang repositoryo** sa iyong GitHub account
2. **I-clone ang iyong fork** nang lokal
3. **Gumawa ng bagong branch** para sa iyong mga pagbabago
4. Gumawa ng mga pagbabago sa nilalaman ng aralin o mga halimbawa ng code
5. Subukan ang mga pagbabago sa code sa mga kaugnay na direktoryo ng proyekto
6. Mag-submit ng pull requests alinsunod sa mga patnubay sa kontribusyon

### Para sa Mga Nag-aaral

1. I-fork o i-clone ang repositoryo
2. Mag-navigate sa mga direktoryo ng aralin nang sunud-sunod
3. Basahin ang mga README file para sa bawat aralin
4. Kumpletuhin ang mga pre-lesson quiz sa https://ff-quizzes.netlify.app/web/
5. Trabahoin ang mga halimbawa ng code sa mga folder ng aralin
6. Kumpletuhin ang mga takdang-aralin at hamon
7. Sagutan ang mga post-lesson quiz

### Live Development

- **Dokumentasyon**: Patakbuhin ang `docsify serve` sa root (port 3000)
- **Quiz App**: Patakbuhin ang `npm run dev` sa direktoryo ng quiz-app
- **Mga Proyekto**: Gamitin ang VS Code Live Server extension para sa mga HTML na proyekto
- **API Projects**: Patakbuhin ang `npm start` sa mga kaukulang direktoryo ng API

## Testing Instructions

### Quiz App Testing

```bash
cd quiz-app
npm run lint       # Suriin ang mga isyu sa istilo ng code
npm run build      # Tiyakin na matagumpay ang build
```

### Bank API Testing

```bash
cd 7-bank-project/api
npm run lint       # Suriin ang mga isyu sa estilo ng code
node server.js     # Tiyakin na nagsisimula ang server nang walang mga error
```

### Pangkalahatang Paraan sa Pagsusuri

- Ito ay isang pang-edukasyong repositoryo na walang komprehensibong awtomatikong pagsusuri
- Manual na pagsusuri ay tumutok sa:
  - Mga halimbawa ng code ay tumatakbo nang walang error
  - Mga link sa dokumentasyon ay gumagana nang maayos
  - Tagumpay na pagtatayo ng proyekto
  - Mga halimbawa ay sumusunod sa pinakamahusay na mga gawain

### Pre-submission Checks

- Patakbuhin ang `npm run lint` sa mga direktoryo na may package.json
- Siguraduhing valid ang mga markdown link
- Subukan ang mga halimbawa ng code sa browser o Node.js
- Tiyaking ang mga pagsasalin ay nananatili ang tamang estruktura

## Code Style Guidelines

### JavaScript

- Gumamit ng modernong ES6+ na sintaks
- Sundin ang mga karaniwang ESLint na config sa mga proyekto
- Gumamit ng makabuluhang mga pangalan ng variable at function para sa kalinawan sa edukasyon
- Magdagdag ng mga komentaryo na nagpapaliwanag ng mga konsepto para sa mga nag-aaral
- I-format gamit ang Prettier kung saan naka-configure

### HTML/CSS

- Semantic na HTML5 na mga elemento
- Mga prinsipyo ng responsive design
- Malinaw na mga konbensiyon sa pag-ngalan ng klase
- Mga komentaryo na nagpapaliwanag ng mga teknik sa CSS para sa mga nag-aaral

### Python

- PEP 8 style guidelines
- Malinaw, edukasyonal na mga halimbawa ng code
- Type hints kung saan nakakatulong sa pag-aaral

### Markdown Documentation

- Malinaw na hierarchy ng mga heading
- Mga code block na may pagtukoy ng wika
- Mga link sa karagdagang mga resources
- Mga screenshot at mga imahe sa `images/` na mga direktoryo
- Alt text para sa mga imahe para sa accessibility

### File Organization

- Mga aralin na sunud-sunod na naka-number (1-getting-started-lessons, 2-js-basics, atbp.)
- Bawat proyekto ay may `solution/` at madalas `start/` o `your-work/` na mga direktoryo
- Mga larawan ay nakaimbak sa mga folder ng aralin na `images/`
- Mga pagsasalin sa `translations/{language-code}/` na estruktura

## Build and Deployment

### Quiz App Deployment (Azure Static Web Apps)

Ang quiz-app ay naka-configure para sa Azure Static Web Apps deployment:

```bash
cd quiz-app
npm run build      # Lumilikha ng dist/ folder
# Nagde-deploy gamit ang GitHub Actions workflow sa push sa main
```

Azure Static Web Apps configuration:
- **App location**: `/quiz-app`
- **Output location**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Documentation PDF Generation

```bash
npm install                    # I-install ang docsify-to-pdf
npm run convert               # Gumawa ng PDF mula sa docs
```

### Docsify Documentation

```bash
npm install -g docsify-cli    # I-install ang Docsify nang global
docsify serve                 # Paglingkuran sa localhost:3000
```

### Mga Tiyak na Build ng Proyekto

Bawat direktoryo ng proyekto ay maaaring magkaroon ng sariling proseso sa build:
- Vue projects: `npm run build` lumilikha ng mga bundle para sa produksyon
- Static projects: Walang build step, diretsong serbisyuhan ang mga file

## Pull Request Guidelines

### Title Format

Gumamit ng malinaw, deskriptibong mga pamagat na naglalahad ng bahagi ng pagbabago:
- `[Quiz-app] Add new quiz for lesson X`
- `[Lesson-3] Fix typo in terrarium project`
- `[Translation] Add Spanish translation for lesson 5`
- `[Docs] Update setup instructions`

### Required Checks

Bago mag-submit ng PR:

1. **Kalidad ng Code**:
   - Patakbuhin ang `npm run lint` sa mga apektadong direktoryo ng proyekto
   - Ayusin lahat ng linting error at babala

2. **Build Verification**:
   - Patakbuhin ang `npm run build` kung naaangkop
   - Siguraduhing walang error sa build

3. **Link Validation**:
   - Subukan lahat ng markdown links
   - Beripikahin na gumagana ang mga reference sa imahe

4. **Content Review**:
   - Proofread para sa wastong baybay at gramatika
   - Siguraduhin na tama at edukasyonal ang mga halimbawa ng code
   - Beripikahin na ang mga pagsasalin ay nananatili ang orihinal na kahulugan

### Contribution Requirements

- Sumang-ayon sa Microsoft CLA (awtomatikong tsek sa unang PR)
- Sundin ang [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Tingnan ang [CONTRIBUTING.md](./CONTRIBUTING.md) para sa detalyadong mga patnubay
- Ilahad ang mga numero ng isyu sa deskripsyon ng PR kung naaangkop

### Review Process

- Ang mga PR ay nire-review ng mga maintainer at komunidad
- Pinapahalagahan ang kalinawan sa edukasyon
- Ang mga halimbawa ng code ay dapat sumunod sa kasalukuyang pinakamahusay na mga gawain
- Ang mga pagsasalin ay nire-review para sa katumpakan at angkop na kultura

## Translation System

### Automated Translation

- Gumagamit ng GitHub Actions kasama ang co-op-translator workflow
- Nagsasalin sa 50+ na mga wika nang awtomatiko
- Mga source file sa pangunahing mga direktoryo
- Mga naisaling file sa `translations/{language-code}/` na mga direktoryo

### Adding Manual Translation Improvements

1. Hanapin ang file sa `translations/{language-code}/`
2. Gumawa ng mga pagsasaayos habang pinapanatili ang estruktura
3. Siguraduhin na ang mga halimbawa ng code ay nananatiling gumagana
4. Subukan ang anumang lokal na nilalaman ng quiz

### Translation Metadata

Nagsasama ang mga naisaling file ng metadata header:
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

**Quiz app ay hindi nagsisimula**:
- Suriin ang bersyon ng Node.js (inirerekomendang v14+)
- Tanggalin ang `node_modules` at `package-lock.json`, muling patakbuhin ang `npm install`
- Tingnan kung may port conflicts (default: Vite ay gumagamit ng port 5173)

**API server ay hindi nagsisimula**:
- Beripikahin kung ang bersyon ng Node.js ay sapat (node >=10)
- Siguraduhing walang ginagamit ang port
- Siguraduhing nakainstall lahat ng dependencies gamit ang `npm install`

**Browser extension ay hindi naglo-load**:
- Siguraduhing tama ang format ng manifest.json
- Suriin ang browser console para sa mga error
- Sundan ang mga tagubilin ng browser para sa instalasyon ng extension

**Mga isyu sa Python chat project**:
- Siguraduhing naka-install ang OpenAI package: `pip install openai`
- Beripikahin kung nakaset ang environment variable na GITHUB_TOKEN
- Suriin ang access permissions ng GitHub Models

**Docsify ay hindi nagseserbisyo ng docs**:
- I-install ang docsify-cli globally: `npm install -g docsify-cli`
- Patakbuhin mula sa root directory ng repositoryo
- Siguraduhing nandoon ang `docs/_sidebar.md`

### Development Environment Tips

- Gamitin ang VS Code na may Live Server extension para sa mga HTML na proyekto
- Mag-install ng ESLint at Prettier extensions para sa consistent na pag-format
- Gamitin ang browser DevTools para mag-debug ng JavaScript
- Para sa Vue projects, mag-install ng Vue DevTools browser extension

### Performance Considerations

- Malaking bilang ng mga naisaling file (50+ na wika) ay nagpapalaki ng buong clones
- Gumamit ng shallow clone kung nilalaman lang ang gagawing trabaho: `git clone --depth 1`
- I-exclude ang pagsasalin mula sa mga search kapag gumagamit ng English na nilalaman
- Maaaring bumagal ang build processes sa unang takbo (npm install, Vite build)

## Security Considerations

### Environment Variables

- Huwag kailanman i-commit ang mga API keys sa repositoryo
- Gamitin ang `.env` files (nasa `.gitignore` na)
- Idokumento ang kailangang environment variables sa mga README ng proyekto

### Python Projects

- Gumamit ng mga virtual environment: `python -m venv venv`
- Panatilihing updated ang mga dependencies
- Ang mga GitHub token ay dapat may pinakamababang kinakailangang permissions

### GitHub Models Access

- Kinakailangan ang Personal Access Tokens (PAT) para sa GitHub Models
- Itago ang mga token bilang environment variables
- Huwag kailanman i-commit ang mga token o credentials

## Additional Notes

### Target Audience

- Mga ganap na baguhan sa web development
- Mga estudyante at self-learners
- Mga guro na gumagamit ng kurikulum sa mga klasrum
- Nilalaman ay dinisenyo para sa accessibility at unti-unting pagbuo ng kasanayan

### Educational Philosophy

- Project-based na paraan ng pagkatuto
- Madalas na pagsusuri ng kaalaman (mga quiz)
- Praktikal na coding exercises
- Mga halimbawa ng aplikasyon sa totoong mundo
- Pokus sa mga pundasyon bago ang mga framework

### Repository Maintenance

- Aktibong komunidad ng mga nag-aaral at mga nag-aambag
- Regular na pag-update ng mga dependencies at nilalaman
- Ino-monitor ng mga maintainer ang mga isyu at diskusyon
- Ang mga update sa pagsasalin ay awtomatiko gamit ang GitHub Actions

### Related Resources

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub resources](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) na inirerekomenda para sa mga nag-aaral
- Karagdagang mga kurso: Generative AI, Data Science, ML, IoT na mga kurikulum ay available

### Working with Specific Projects

Para sa detalyadong mga tagubilin sa mga indibidwal na proyekto, tingnan ang mga README file sa:
- `quiz-app/README.md` - Vue 3 na aplikasyon ng quiz
- `7-bank-project/README.md` - Banking application na may authentication
- `5-browser-extension/README.md` - Pag-develop ng browser extension
- `6-space-game/README.md` - Canvas-based na pag-develop ng laro
- `9-chat-project/README.md` - AI chat assistant na proyekto

### Monorepo Structure

Bagaman hindi tradisyunal na monorepo, ang repositoryong ito ay naglalaman ng maraming independiyenteng proyekto:
- Bawat aralin ay standalone
- Hindi nagbabahagi ng dependencies ang mga proyekto
- Makakapagtrabaho sa mga indibidwal na proyekto nang hindi naaapektuhan ang iba pa
- I-clone ang buong repo para sa buong karanasan sa kurikulum

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang serbisyong AI na pagsasalin na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't nagsusumikap kami para sa katumpakan, pakatandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o kamalian. Ang orihinal na dokumento sa kanyang orihinal na wika ang dapat ituring na pangunahing sanggunian. Para sa mahahalagang impormasyon, inirerekomenda ang propesyonal na pagsasaling-tao. Hindi kami mananagot para sa anumang hindi pagkakaintindihan o maling interpretasyon na nagmumula sa paggamit ng pagsasaling ito.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->