# AGENTS.md

## Project Overview

Ito ay isang edukasyonal na curriculum repository para sa pagtuturo ng mga pundasyon ng web development sa mga nagsisimula. Ang curriculum ay isang komprehensibong 12-linggong kurso na binuo ng Microsoft Cloud Advocates, na nagtatampok ng 24 na praktikal na mga aralin na sumasaklaw sa JavaScript, CSS, at HTML.

### Key Components

- **Educational Content**: 24 na nakaayos na aralin na pinaghihiwalay sa mga proyekto
- **Practical Projects**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor, at AI Chat Assistant
- **Interactive Quizzes**: 48 na pagsusulit na may tig-3 tanong bawat isa (pre/post-lesson na pagtatasa)
- **Multi-language Support**: Awtomatikong pagsasalin para sa mahigit 50 na mga wika gamit ang GitHub Actions
- **Technologies**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (para sa AI na mga proyekto)

### Architecture

- Educational repository na may istrakturang nakabase sa aralin
- Bawat folder ng aralin ay naglalaman ng README, mga halimbawa ng code, at mga solusyon
- Nakahiwalay na mga proyekto sa magkakahiwalay na direktoryo (quiz-app, iba't ibang aralin na proyekto)
- Sistema ng pagsasalin gamit ang GitHub Actions (co-op-translator)
- Dokumentasyon na hinahatid sa pamamagitan ng Docsify at makukuha bilang PDF

## Setup Commands

Ang repositoryong ito ay pangunahing para sa pagkonsumo ng edukasyonal na nilalaman. Para sa pagtatrabaho sa mga partikular na proyekto:

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
npm run build      # Gumawa para sa produksyon
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

### Para sa mga Nagbibigay ng Nilalaman

1. **I-fork ang repository** sa iyong GitHub account
2. **I-clone ang iyong fork** sa lokal na makina
3. **Gumawa ng bagong branch** para sa iyong mga pagbabago
4. Gumawa ng mga pagbabago sa nilalaman ng aralin o mga halimbawa ng code
5. Subukan ang anumang mga pagbabago sa code sa mga kaugnay na direktoryo ng proyekto
6. Mag-submit ng pull requests ayon sa mga gabay sa kontribusyon

### Para sa mga Nag-aaral

1. Mag-fork o mag-clone ng repository
2. Pumunta sa mga direktoryo ng aralin nang sunud-sunod
3. Basahin ang mga README file para sa bawat aralin
4. Kumpletuhin ang mga pre-lesson quiz sa https://ff-quizzes.netlify.app/web/
5. Trabahuin ang mga halimbawa ng code sa mga folder ng aralin
6. Kumpletuhin ang mga takdang-aralin at hamon
7. Sagutan ang mga post-lesson quiz

### Live Development

- **Dokumentasyon**: Patakbuhin ang `docsify serve` sa root (port 3000)
- **Quiz App**: Patakbuhin ang `npm run dev` sa quiz-app directory
- **Mga Proyekto**: Gamitin ang VS Code Live Server extension para sa mga HTML na proyekto
- **API Projects**: Patakbuhin ang `npm start` sa kani-kaniyang API directories

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

### Pangkalahatang Paraan ng Pagsubok

- Ito ay isang edukasyonal na repository na walang komprehensibong awtomatikong pagsusuri
- Ang manu-manong pagsusuri ay nakatuon sa:
  - Pagpapatakbo ng mga halimbawa ng code nang walang error
  - Tamang pagtatrabaho ng mga link sa dokumentasyon
  - Matiyak ang matagumpay na pagbuo ng proyekto
  - Pagsunod ng mga halimbawa sa pinakamahusay na praktis

### Mga Pagsusuri Bago Mag-submit

- Patakbuhin ang `npm run lint` sa mga direktoryong may package.json
- Siguraduhin na valid ang mga markdown link
- Subukan ang mga halimbawa ng code sa browser o Node.js
- Suriin na nananatili ang tamang istraktura sa mga pagsasalin

## Code Style Guidelines

### JavaScript

- Gumamit ng modernong ES6+ na sintaks
- Sundin ang karaniwang ESLint na mga konfigurasyon na ibinigay sa mga proyekto
- Gumamit ng makahulugang mga pangalan ng variable at function para sa kalinawan ng edukasyon
- Magdagdag ng mga paliwanag na komentaryo para sa mga nag-aaral
- I-format gamit ang Prettier kung naka-konfigure

### HTML/CSS

- Semantic na mga elemento ng HTML5
- Mga prinsipyong responsive design
- Malinaw na naming ng klase
- Mga komentaryong nagpapaliwanag ng mga teknik sa CSS para sa mga nag-aaral

### Python

- Mga PEP 8 na gabay sa estilo
- Malinaw, edukasyonal na mga halimbawa ng code
- Type hints kung kinakailangan para sa pag-aaral

### Markdown Documentation

- Malinaw na hierarchy ng mga heading
- Mga code block na may espesipikasyon ng wika
- Mga link sa karagdagang mga sanggunian
- Mga screenshot at imahe sa mga direktoryong `images/`
- Alt text para sa mga imahe para sa accessibility

### Organisasyon ng File

- Ang mga aralin ay may sunud-sunod na bilang (1-getting-started-lessons, 2-js-basics, atbp.)
- Bawat proyekto ay may `solution/` at madalas may `start/` o `your-work/` na mga direktoryo
- Mga imahe ay nakaimbak sa mga lesson-specific na `images/` folder
- Mga pagsasalin ay nasa `translations/{language-code}/` na istraktura

## Build and Deployment

### Quiz App Deployment (Azure Static Web Apps)

Ang quiz-app ay naka-konfigura para sa Azure Static Web Apps deployment:

```bash
cd quiz-app
npm run build      # Lumilikha ng folder na dist/
# Naglalaan gamit ang GitHub Actions workflow sa pag-push sa main
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
npm install -g docsify-cli    # I-install ang Docsify sa buong sistema
docsify serve                 # I-serve sa localhost:3000
```

### Project-specific Builds

Maaaring may sariling build process ang bawat direktoryo ng proyekto:
- Vue projects: `npm run build` ay lumilikha ng production bundles
- Static projects: Walang build step, diretso na pag-serve ng mga file

## Pull Request Guidelines

### Title Format

Gumamit ng malinaw, nakapagsasaysay na mga pamagat na nagpapakita ng bahagi ng pagbabago:
- `[Quiz-app] Add new quiz for lesson X`
- `[Lesson-3] Fix typo in terrarium project`
- `[Translation] Add Spanish translation for lesson 5`
- `[Docs] Update setup instructions`

### Required Checks

Bago mag-submit ng PR:

1. **Code Quality**:
   - Patakbuhin ang `npm run lint` sa mga apektadong direktoryo ng proyekto
   - Ayusin ang lahat ng linting errors at warnings

2. **Build Verification**:
   - Patakbuhin ang `npm run build` kung naaangkop
   - Siguraduhing walang error sa build

3. **Link Validation**:
   - Subukan lahat ng markdown links
   - Siguraduhin gumagana ang mga image references

4. **Content Review**:
   - I-proofread para sa spelling at grammar
   - Siguraduhing tama at edukasyonal ang mga sample code
   - Tingnan na ang mga pagsasalin ay nananatili ang orihinal na kahulugan

### Contribution Requirements

- Sumang-ayon sa Microsoft CLA (awtomatikong tseke sa unang PR)
- Sundan ang [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Tingnan ang [CONTRIBUTING.md](./CONTRIBUTING.md) para sa detalyadong gabay
- Ilahad ang mga numero ng isyu sa deskripsyon ng PR kung naaangkop

### Review Process

- Ang mga PR ay nirerepaso ng mga maintainers at ng komunidad
- Pinag-iibayo ang kalinawan sa edukasyon
- Ang mga halimbawa ng code ay dapat sumunod sa kasalukuyang pinakamahusay na praktis
- Ang mga pagsasalin ay nirerepaso para sa katumpakan at angkop na kultura

## Translation System

### Automated Translation

- Gumagamit ng GitHub Actions na may co-op-translator workflow
- Sinasalin sa mahigit 50 na mga wika nang awtomatiko
- Mga source file ay nasa pangunahing mga direktoryo
- Mga isinaling file ay nasa `translations/{language-code}/` na mga direktoryo

### Adding Manual Translation Improvements

1. Hanapin ang file sa `translations/{language-code}/`
2. Gawin ang mga pagpapabuti habang pinapanatili ang istraktura
3. Siguraduhing gumagana pa rin ang mga halimbawa ng code
4. Subukan ang anumang lokal na nilalaman ng quiz

### Translation Metadata

Ang mga isinaling file ay may metadata header:
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

**Hindi nagsisimula ang quiz app**:
- Suriin ang bersyon ng Node.js (v14+ ang inirerekomenda)
- Burahin ang `node_modules` at `package-lock.json`, pagkatapos ay patakbuhin ulit ang `npm install`
- Tsek ang mga port conflict (default: Vite ay gumagamit ng port 5173)

**Hindi nagsisimula ang API server**:
- Tiyakin ang bersyon ng Node.js ay naaabot ang minimum (node >=10)
- Tsek kung ginagamit na ang port
- Siguraduhing naka-install lahat ng dependencies gamit ang `npm install`

**Hindi naglo-load ang browser extension**:
- Tiyakin na ang manifest.json ay wastong na-format
- Suriin ang browser console para sa mga error
- Sundan ang mga browser-specific na panuto sa pag-install ng extension

**Mga isyu sa Python chat project**:
- Siguraduhing naka-install ang OpenAI package: `pip install openai`
- Tiyakin na naka-set ang environment variable na GITHUB_TOKEN
- Tsek ang permissions para sa GitHub Models access

**Hindi nagseserbisyo ang Docsify ng docs**:
- I-install ang docsify-cli globally: `npm install -g docsify-cli`
- Patakbuhin mula sa root directory ng repository
- Suriin na umiiral ang `docs/_sidebar.md`

### Development Environment Tips

- Gamitin ang VS Code na may Live Server extension para sa mga HTML na proyekto
- Mag-install ng ESLint at Prettier extensions para sa consistent na formatting
- Gamitin ang browser DevTools para i-debug ang JavaScript
- Para sa Vue projects, mag-install ng Vue DevTools browser extension

### Performance Considerations

- Maraming isinaling file (mahigit 50 na wika) kaya malalaki ang full clones
- Gamitin ang shallow clone kung content lang ang pinagtatrabahuhan: `git clone --depth 1`
- I-exclude ang mga pagsasalin sa mga paghahanap kapag nagtatrabaho sa English content
- Ang mga build process ay maaaring mabagal sa unang run (npm install, Vite build)

## Security Considerations

### Environment Variables

- Huwag kailanman i-commit ang API keys sa repository
- Gamitin ang `.env` files (nasa `.gitignore` na)
- I-dokumento ang mga kinakailangang environment variables sa project README

### Python Projects

- Gumamit ng virtual environments: `python -m venv venv`
- Panatilihing updated ang mga dependencies
- Ang mga GitHub token ay dapat may pinakamababang kinakailangang permiso

### GitHub Models Access

- Kinakailangan ang Personal Access Tokens (PAT) para sa GitHub Models
- Ang mga token ay dapat itago bilang environment variables
- Huwag kailanman i-commit ang mga token o credentials

## Additional Notes

### Target Audience

- Ganap na mga nagsisimula sa web development
- Mga estudyante at self-learners
- Mga guro na gumagamit ng curriculum sa mga silid-aralan
- Ang nilalaman ay dinisenyo para sa accessibility at unti-unting pagbuo ng kasanayan

### Educational Philosophy

- Project-based learning approach
- Madalas na mga pagsusuri ng kaalaman (quizzes)
- Praktikal na hands-on coding exercises
- Mga halimbawa ng aplikasyon sa tunay na mundo
- Pokus sa mga pundasyon bago ang mga framework

### Repository Maintenance

- Aktibong komunidad ng mga nag-aaral at mga kontribyutor
- Regular na pag-update ng mga dependencies at nilalaman
- Isyu at diskusyon ay minomonitor ng mga maintainers
- Awtonomong update ng pagsasalin gamit ang GitHub Actions

### Related Resources

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub resources](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) na inirerekomenda para sa mga nag-aaral
- Karagdagang mga kurso: Generative AI, Data Science, ML, IoT curricula ay available

### Working with Specific Projects

Para sa detalyadong mga panuto para sa bawat proyekto, tingnan ang mga README files sa:
- `quiz-app/README.md` - Vue 3 na quiz application
- `7-bank-project/README.md` - Banking application na may authentication
- `5-browser-extension/README.md` - Development ng browser extension
- `6-space-game/README.md` - Canvas-based na development ng laro
- `9-chat-project/README.md` - AI chat assistant project

### Monorepo Structure

Bagaman hindi isang tradisyunal na monorepo, ang repositoryong ito ay naglalaman ng maraming malalayang proyekto:
- Ang bawat aralin ay self-contained
- Hindi nagbabahagi ng dependencies ang mga proyekto
- Maaaring magtrabaho sa mga indibiduwal na proyekto nang hindi naaapektuhan ang iba
- I-clone ang buong repo para sa buong karanasan ng curriculum

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Pagtatangi**:
Ang dokumentong ito ay isinalin gamit ang AI na serbisyo sa pagsasalin [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat sinisikap naming maging tumpak, pakatandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga error o hindi pagkakatugma. Ang orihinal na dokumento sa sariling wika nito ang dapat ituring na pangunahing sanggunian. Para sa mga mahahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na maaaring magmula sa paggamit ng pagsasaling ito.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->