# AGENTS.md

## Project Overview

Ito ay isang repositoryo ng pang-edukasyon na kurikulum para sa pagtuturo ng mga pangunahing kaalaman sa web development sa mga nagsisimula. Ang kurikulum ay isang komprehensibong 12-linggong kurso na binuo ng Microsoft Cloud Advocates, na nagtatampok ng 24 na praktikal na aralin na sumasaklaw sa JavaScript, CSS, at HTML.

### Key Components

- **Educational Content**: 24 na nakaayos na mga aralin na naka-organisa sa mga module na batay sa proyekto
- **Practical Projects**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor, at AI Chat Assistant
- **Interactive Quizzes**: 48 na mga pagsusulit na may tig-3 tanong bawat isa (pagsusulit bago/pagkatapos ng aralin)
- **Multi-language Support**: Awtomatikong pagsasalin para sa 50+ na mga wika gamit ang GitHub Actions
- **Technologies**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (para sa mga proyekto ng AI)

### Architecture

- Educational na repositoryo na may istruktura batay sa mga aralin
- Bawat folder ng aralin ay naglalaman ng README, mga halimbawa ng code, at mga solusyon
- Mga standalone na proyekto sa hiwalay na mga direktoryo (quiz-app, iba't ibang mga proyekto ng aralin)
- Systema ng pagsasalin gamit ang GitHub Actions (co-op-translator)
- Dokumentasyon na pinagsisilbihan gamit ang Docsify at available bilang PDF

## Setup Commands

Ang repositoryong ito ay pangunahing para sa paggamit ng nilalamang pang-edukasyon. Para magtrabaho sa mga tiyak na proyekto:

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
# Sundin ang mga tagubilin sa pag-load ng extension na tukoy sa browser
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

1. **I-fork ang repositoryo** sa iyong GitHub account
2. **I-clone ang iyong fork** nang lokal
3. **Gumawa ng bagong branch** para sa iyong mga pagbabago
4. Gumawa ng mga pagbabago sa nilalaman ng aralin o mga halimbawa ng code
5. Subukan ang anumang mga pagbabago sa code sa mga kaugnay na direktoryo ng proyekto
6. Mag-submit ng pull request ayon sa mga alituntunin ng kontribusyon

### For Learners

1. I-fork o i-clone ang repositoryo
2. Pumunta sa mga direktoryo ng aralin nang sunud-sunod
3. Basahin ang mga README file para sa bawat aralin
4. Kumpletuhin ang pre-lesson quizzes sa https://ff-quizzes.netlify.app/web/
5. Trabahuhin ang mga halimbawa ng code sa mga folder ng aralin
6. Kumpletuhin ang mga assignment at hamon
7. Kunin ang post-lesson quizzes

### Live Development

- **Documentation**: Patakbuhin ang `docsify serve` sa root (port 3000)
- **Quiz App**: Patakbuhin ang `npm run dev` sa direktoryo ng quiz-app
- **Projects**: Gamitin ang VS Code Live Server extension para sa mga HTML na proyekto
- **API Projects**: Patakbuhin ang `npm start` sa kani-kanilang mga direktoryo ng API

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

### General Testing Approach

- Ito ay isang pang-edukasyon na repositoryo na walang komprehensibong automated tests
- Manual na pagsubok ay nakatuon sa:
  - Mga halimbawa ng code na tumatakbo nang walang error
  - Mga link sa dokumentasyon na gumagana nang tama
  - Matagumpay na pagtatayo ng proyekto
  - Mga halimbawa ay sumusunod sa mga pinakamahusay na gawain

### Pre-submission Checks

- Patakbuhin ang `npm run lint` sa mga direktoryong may package.json
- Siguraduhing valid ang mga markdown link
- Subukan ang mga halimbawa ng code sa browser o Node.js
- Suriin na ang mga pagsasalin ay nananatili ang wastong istruktura

## Code Style Guidelines

### JavaScript

- Gamitin ang makabagong ES6+ na syntax
- Sundin ang karaniwang ESLint na mga configuration na ibinigay sa mga proyekto
- Gumamit ng makahulugang mga pangalan ng variable at function para sa kalinawan sa pag-aaral
- Magdagdag ng mga komento na nagpapaliwanag ng mga konsepto para sa mga nag-aaral
- I-format gamit ang Prettier kung saan naka-configure

### HTML/CSS

- Semantic na mga elemento ng HTML5
- Mga prinsipyo ng responsive design
- Malinaw na mga konbensiyon sa pagpapangalan ng klase
- Mga komento na nagpapaliwanag ng mga teknik sa CSS para sa mga nag-aaral

### Python

- Mga gabay sa istilo ng PEP 8
- Malinaw, pang-edukasyong mga halimbawa ng code
- Mga type hint kung nakakatulong sa pag-aaral

### Markdown Documentation

- Malinaw na hierarchy ng mga heading
- Mga code block na may pagtukoy sa wika
- Mga link sa karagdagang mga mapagkukunan
- Mga screenshot at larawan sa `images/` na mga direktoryo
- Alt text para sa mga larawan para sa accessibility

### File Organization

- Mga aralin na naka-numero nang sunud-sunod (1-getting-started-lessons, 2-js-basics, atbp.)
- Bawat proyekto ay may `solution/` at kadalasang `start/` o `your-work/` na mga direktoryo
- Mga larawan na naka-imbak sa lesson-specific na `images/` na mga folder
- Mga pagsasalin sa istruktura na `translations/{language-code}/`

## Build and Deployment

### Quiz App Deployment (Azure Static Web Apps)

Ang quiz-app ay naka-configure para sa Azure Static Web Apps deployment:

```bash
cd quiz-app
npm run build      # Lumilikha ng folder na dist/
# Nagde-deploy gamit ang GitHub Actions workflow kapag may push sa main
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
npm install -g docsify-cli    # I-install ang Docsify nang globally
docsify serve                 # I-serve sa localhost:3000
```

### Project-specific Builds

Bawat direktoryo ng proyekto ay maaaring magkaroon ng sariling proseso ng build:
- Mga proyekto ng Vue: `npm run build` na lumilikha ng production bundles
- Mga static na proyekto: Walang build step, direktang pinagsisilbihan ang mga file

## Pull Request Guidelines

### Title Format

Gumamit ng malinaw, deskriptibong mga pamagat na nagpapahiwatig ng bahagi ng pagbabago:
- `[Quiz-app] Magdagdag ng bagong quiz para sa lesson X`
- `[Lesson-3] Ayusin ang typo sa terrarium project`
- `[Translation] Magdagdag ng pagsasalin sa Espanyol para sa lesson 5`
- `[Docs] I-update ang mga tagubilin sa setup`

### Required Checks

Bago magsumite ng PR:

1. **Kalidad ng Code**:
   - Patakbuhin ang `npm run lint` sa mga apektadong direktoryo ng proyekto
   - Ayusin lahat ng linting errors at warnings

2. **Build Verification**:
   - Patakbuhin ang `npm run build` kung naaangkop
   - Siguraduhing walang build errors

3. **Link Validation**:
   - Subukan ang lahat ng markdown links
   - Siguraduhing gumagana ang mga reference ng imahe

4. **Content Review**:
   - Proofread para sa spelling at grammar
   - Siguraduhing tama at pang-edukasyon ang mga halimbawa ng code
   - Suriin na nananatili ang orihinal na kahulugan ng mga pagsasalin

### Contribution Requirements

- Sumang-ayon sa Microsoft CLA (awtomatikong tseke sa unang PR)
- Sundin ang [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Tingnan ang [CONTRIBUTING.md](./CONTRIBUTING.md) para sa mga detalyadong alituntunin
- Banggitin ang mga numero ng isyu sa paglalarawan ng PR kung naaangkop

### Review Process

- Ang mga PR ay nire-review ng mga tagapamahala at ng komunidad
- Prayoridad ang kalinawan sa edukasyon
- Dapat sundin ng mga halimbawa ng code ang kasalukuyang pinakamahusay na gawain
- Ang mga pagsasalin ay nirereview para sa katumpakan at kultural na pagkakabagay

## Translation System

### Automated Translation

- Ginagamit ang GitHub Actions kasama ang workflow na co-op-translator
- Awtomatikong nagsasalin sa 50+ na mga wika
- Mga source file sa mga pangunahing direktoryo
- Mga isinalin na file sa `translations/{language-code}/` na mga direktoryo

### Adding Manual Translation Improvements

1. Hanapin ang file sa `translations/{language-code}/`
2. Gumawa ng mga pagpapabuti habang pinapanatili ang istruktura
3. Siguraduhing nananatiling gumagana ang mga halimbawa ng code
4. Subukan ang anumang lokal na contenido ng quiz

### Translation Metadata

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

## Debugging and Troubleshooting

### Common Issues

**Quiz app fails to start**:
- Suriin ang bersyon ng Node.js (inirerekumenda ang v14+)
- Burahin ang `node_modules` at `package-lock.json`, patakbuhin muli ang `npm install`
- Suriin ang conflicts sa port (default: Vite ay gumagamit ng port 5173)

**API server won't start**:
- Tiyakin na ang bersyon ng Node.js ay hindi bababa sa (node >=10)
- Suriin kung ang port ay ginagamit na
- Siguraduhing naka-install lahat ng dependencies gamit ang `npm install`

**Browser extension won't load**:
- Siguraduhing maayos ang format ng manifest.json
- Suriin ang browser console para sa mga error
- Sundin ang mga tagubilin sa pag-install ng extension para sa partikular na browser

**Python chat project issues**:
- Siguraduhing naka-install ang OpenAI package: `pip install openai`
- Tiyakin na nakaset ang GITHUB_TOKEN environment variable
- Suriin ang mga pahintulot para sa GitHub Models

**Docsify not serving docs**:
- I-install ang docsify-cli globally: `npm install -g docsify-cli`
- Patakbuhin mula sa root directory ng repositoryo
- Suriin na ang `docs/_sidebar.md` ay umiiral

### Development Environment Tips

- Gamitin ang VS Code na may Live Server extension para sa mga HTML na proyekto
- Mag-install ng ESLint at Prettier extensions para sa pare-parehong pag-format
- Gamitin ang browser DevTools para sa pag-debug ng JavaScript
- Para sa mga proyekto ng Vue, mag-install ng Vue DevTools browser extension

### Performance Considerations

- Ang malaking bilang ng mga isinaling file (50+ wika) ay nangangahulugan ng malalaking full clones
- Gamitin ang shallow clone kung nilalaman lang ang tinatrabaho: `git clone --depth 1`
- I-exclude ang mga pagsasalin mula sa paghahanap kapag nagtatrabaho sa English na nilalaman
- Ang mga proseso sa build ay maaaring mabagal sa unang takbo (npm install, Vite build)

## Security Considerations

### Environment Variables

- Ang mga API key ay hindi dapat i-commit sa repositoryo
- Gamitin ang `.env` files (na naka-ignore na sa `.gitignore`)
- I-dokumento ang mga kailangang environment variables sa mga README ng proyekto

### Python Projects

- Gamitin ang virtual environments: `python -m venv venv`
- Panatilihing updated ang mga dependencies
- Ang mga GitHub token ay dapat may pinakamababang kinakailangang mga pahintulot

### GitHub Models Access

- Kinakailangang Personal Access Tokens (PAT) para sa GitHub Models
- Ang mga token ay dapat itago bilang environment variables
- Huwag kailanman i-commit ang mga token o kredensyal

## Additional Notes

### Target Audience

- Mga ganap na nagsisimula sa web development
- Mga estudyante at mga self-learner
- Mga guro na gumagamit ng kurikulum sa klase
- Nilalaman ay dinisenyo para sa accessibility at unti-unting pagbuo ng kasanayan

### Educational Philosophy

- Pagtuturo gamit ang proyekto bilang batayan
- Madalas na pagsusuri sa kaalaman (quizzes)
- Hands-on na mga ehersisyo sa pagkocode
- Mga halimbawa ng aplikasyon sa totoong mundo
- Pokus sa mga pangunahing kaalaman bago ang mga framework

### Repository Maintenance

- Aktibong komunidad ng mga nag-aaral at mga contributor
- Regular na pag-update sa mga dependencies at nilalaman
- Mga isyu at diskusyon ay minomonitor ng mga tagapamahala
- Ang pag-update ng mga pagsasalin ay awtomatiko sa pamamagitan ng GitHub Actions

### Related Resources

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub resources](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) inirerekomenda para sa mga nag-aaral
- Karagdagang mga kurso: Generative AI, Data Science, ML, IoT curricula available

### Working with Specific Projects

Para sa detalyadong tagubilin sa mga indibidwal na proyekto, tingnan ang mga README files sa:
- `quiz-app/README.md` - Vue 3 quiz application
- `7-bank-project/README.md` - Banking application na may authentication
- `5-browser-extension/README.md` - Pag-develop ng browser extension
- `6-space-game/README.md` - Canvas-based na pag-develop ng laro
- `9-chat-project/README.md` - AI chat assistant project

### Monorepo Structure

Bagamat hindi isang tradisyunal na monorepo, naglalaman ang repositoryong ito ng maraming independiyenteng proyekto:
- Bawat aralin ay self-contained
- Hindi nagbabahagi ng mga dependency ang mga proyekto
- Maaaring magtrabaho sa mga indibidwal na proyekto nang hindi naaapektuhan ang iba pa
- I-clone ang buong repo para sa buong kurikulum na karanasan

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama’t sinisikap naming maging tumpak, pakatandaan na ang mga awtomatikong pagsasalin ay maaaring may mga pagkakamali o di-katumpakan. Ang orihinal na dokumento sa orihinal nitong wika ang dapat ituring na opisyal na sanggunian. Para sa mahahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaintindihan o maling interpretasyon mula sa paggamit ng pagsasaling ito.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->