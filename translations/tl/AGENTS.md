# AGENTS.md

## Project Overview

Ito ay isang edukasyonal na repositoryo ng kurikulum para sa pagtuturo ng mga pundasyon ng web development sa mga nagsisimula. Ang kurikulum ay isang komprehensibong 12-linggong kurso na binuo ng Microsoft Cloud Advocates, na may 24 na hands-on na aralin na sumasaklaw sa JavaScript, CSS, at HTML.

### Key Components

- **Nilalamang Pang-edukasyon**: 24 na istrukturadong aralin na inayos sa mga module batay sa proyekto
- **Mga Praktikal na Proyekto**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor, at AI Chat Assistant
- **Mga Interactive na Quiz**: 48 na quiz na may tig-3 tanong bawat isa (pre/post-lesson assessments)
- **Suporta sa Maramihang Wika**: Awtomatikong pagsasalin para sa 50+ na wika gamit ang GitHub Actions
- **Mga Teknolohiya**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (para sa mga AI na proyekto)

### Architecture

- Edukasyonal na repositoryo na may lesson-based na estruktura
- Bawat folder ng aralin ay naglalaman ng README, mga halimbawa ng code, at mga solusyon
- Mga standalone na proyekto sa hiwalay na mga direktoryo (quiz-app, iba't ibang proyekto ng aralin)
- Sistema ng pagsasalin gamit ang GitHub Actions (co-op-translator)
- Dokumentasyon na ipinapakita sa pamamagitan ng Docsify at available bilang PDF

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

### Browser Extension Projects

```bash
cd 5-browser-extension/solution
npm install
# Sundin ang mga tagubilin para sa pag-load ng extension na tiyak sa browser
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

### Para sa mga Content Contributors

1. **I-fork ang repository** sa iyong GitHub account
2. **I-clone ang iyong fork** nang lokal
3. **Gumawa ng bagong branch** para sa iyong mga pagbabago
4. Gumawa ng mga pagbabago sa nilalaman ng aralin o mga halimbawa ng code
5. Subukan ang anumang mga pagbabago sa code sa mga kaukulang direktoryo ng proyekto
6. Mag-submit ng pull request alinsunod sa mga panuntunan ng kontribusyon

### Para sa mga Learners

1. Mag-fork o mag-clone ng repositoryo
2. Pumunta sa mga direktoryo ng aralin nang sunud-sunod
3. Basahin ang mga README na file para sa bawat aralin
4. Kumpletuhin ang mga pre-lesson quiz sa https://ff-quizzes.netlify.app/web/
5. Gawing ang mga halimbawa ng code sa mga folder ng aralin
6. Tapusin ang mga assignment at hamon
7. Kunin ang mga post-lesson quiz

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
npm run lint       # Suriin ang mga isyu sa istilo ng code
node server.js     # Tiyakin na nagsisimula ang server nang walang mga error
```

### General Testing Approach

- Ito ay isang edukasyonal na repositoryo na walang kumpletong automated tests 
- Manual testing ay nakatuon sa:
  - Mga halimbawa ng code na tumatakbo nang walang error
  - Mga link sa dokumentasyon ay gumagana nang tama
  - Proyekto ay matagumpay na na-build
  - Mga halimbawa ay sumusunod sa pinakamahusay na kasanayan

### Pre-submission Checks

- Patakbuhin ang `npm run lint` sa mga direktoryo na may package.json
- Siguraduhing ang mga markdown link ay valid
- Subukan ang mga halimbawa ng code sa browser o Node.js
- Suriin na ang mga pagsasalin ay nagpapanatili ng tamang estruktura

## Code Style Guidelines

### JavaScript

- Gumamit ng modernong ES6+ na sintaks
- Sundan ang standard na ESLint configurations na ibinigay sa mga proyekto
- Gumamit ng makahulugang pangalan ng mga variable at function para sa kalinawan sa edukasyon
- Magdagdag ng mga komento na nagpapaliwanag ng mga konsepto para sa mga nag-aaral
- I-format gamit ang Prettier kung saan naka-configure

### HTML/CSS

- Semantic na HTML5 na mga elemento
- Mga prinsipyo ng responsive design
- Malinaw na klaseng pagnenaming mga kombensiyon
- Mga komento na nagpapaliwanag ng mga teknik sa CSS para sa mga nag-aaral

### Python

- PEP 8 na mga gabay sa estilo
- Malinaw, edukasyonal na mga halimbawa ng code
- Mga type hint kung makakatulong sa pag-aaral

### Markdown Documentation

- Malinaw na hierarchy ng mga heading
- Mga code block na may pagtukoy ng wika
- Mga link sa karagdagang mga mapagkukunan
- Mga screenshot at mga larawan sa `images/` na mga direktoryo
- Alt text para sa mga larawan para sa accessibility

### File Organization

- Mga aralin na naka-numero nang sunud-sunod (1-getting-started-lessons, 2-js-basics, atbp.)
- Bawat proyekto ay may `solution/` at madalas ay `start/` o `your-work/` na mga direktoryo
- Mga larawan na nakaimbak sa aralin-nakatuong mga folder na `images/`
- Mga pagsasalin sa `translations/{language-code}/` na istruktura

## Build and Deployment

### Quiz App Deployment (Azure Static Web Apps)

Ang quiz-app ay naka-configure para sa Azure Static Web Apps deployment:

```bash
cd quiz-app
npm run build      # Lumilikha ng folder na dist/
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
npm install -g docsify-cli    # I-install ang Docsify nang globally
docsify serve                 # I-serve sa localhost:3000
```

### Project-specific Builds

Bawat direktoryo ng proyekto ay maaaring may sarili nitong proseso ng pag-build:
- Vue projects: `npm run build` ay lumilikha ng production bundles
- Static projects: Walang build step, direktang nagseserbisyo ng mga file

## Pull Request Guidelines

### Title Format

Gumamit ng malinaw, deskriptibong mga titulo na nagpapakita ng bahagi ng pagbabago:
- `[Quiz-app] Magdagdag ng bagong quiz para sa aralin X`
- `[Lesson-3] Ayusin ang typo sa terrarium na proyekto`
- `[Translation] Magdagdag ng pagsasalin sa Spanish para sa aralin 5`
- `[Docs] I-update ang mga tagubilin sa setup`

### Required Checks

Bago magsumite ng PR:

1. **Kalidad ng Code**:
   - Patakbuhin ang `npm run lint` sa mga naapektuhang direktoryo ng proyekto
   - Ayusin lahat ng linting errors at warnings

2. **Build Verification**:
   - Patakbuhin ang `npm run build` kung naaangkop
   - Siguraduhing walang error sa build

3. **Link Validation**:
   - Subukan ang lahat ng markdown links
   - Siguraduhing gumagana ang mga image references

4. **Content Review**:
   - Proofread para sa spelling at grammar
   - Siguraduhin na ang mga halimbawa ng code ay tama at edukasyonal
   - Suriin na ang mga pagsasalin ay nananatili ang orihinal na kahulugan

### Contribution Requirements

- Sumasang-ayon sa Microsoft CLA (awtomatikong tseke sa unang PR)
- Sundan ang [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Tingnan ang [CONTRIBUTING.md](./CONTRIBUTING.md) para sa detalyadong mga panuntunan
- Banggitin ang mga numero ng isyu sa deskripsiyon ng PR kung naaangkop

### Review Process

- Ang mga PR ay nire-review ng mga maintainers at komunidad
- Pinapahalagahan ang kalinawan sa edukasyon
- Ang mga halimbawa ng code ay dapat sumunod sa kasalukuyang pinakamahusay na mga kasanayan
- Ang mga pagsasalin ay nire-review para sa katumpakan at angkop sa kultura

## Translation System

### Automated Translation

- Gumagamit ng GitHub Actions sa co-op-translator workflow
- Awtomatikong nagsasalin sa 50+ na mga wika
- Source files ay nasa main directories
- Mga isinaling file ay nasa `translations/{language-code}/` na mga direktoryo

### Adding Manual Translation Improvements

1. Hanapin ang file sa `translations/{language-code}/`
2. Gumawa ng mga pagpapabuti habang pinapanatili ang estruktura
3. Siguraduhin na ang mga halimbawa ng code ay nananatiling gumagana
4. Subukan ang anumang lokal na nilalaman ng quiz

### Translation Metadata

Ang mga isinaling file ay may kasama na metadata header:
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
- Suriin ang Node.js na bersyon (v14+ ang inirerekomenda)
- Tanggalin ang `node_modules` at `package-lock.json`, patakbuhin muli ang `npm install`
- Suriin ang mga port conflicts (default: Vite gumagamit ng port 5173)

**API server ay hindi nagsisimula**:
- Siguraduhin ang Node.js na bersyon ay naaabot ang minimum (node >=10)
- Suriin kung ang port ay ginagamit na
- Siguraduhin lahat ng dependencies ay na-install gamit ang `npm install`

**Browser extension ay hindi naglo-load**:
- Siguraduhin ang manifest.json ay tama ang format
- Suriin ang browser console para sa mga error
- Sundin ang mga tagubilin sa pag-install ng extension na nakabatay sa browser

**Mga isyu sa Python chat project**:
- Siguraduhin na naka-install ang OpenAI package: `pip install openai`
- Siguraduhin ang environment variable na GITHUB_TOKEN ay nakaset
- Suriin ang mga permiso sa GitHub Models access

**Docsify ay hindi nagseserbisyo ng docs**:
- I-install ang docsify-cli globally: `npm install -g docsify-cli`
- Patakbuhin mula sa root directory ng repositoryo
- Siguraduhing ang `docs/_sidebar.md` ay naroon

### Development Environment Tips

- Gamitin ang VS Code na may Live Server extension para sa mga HTML na proyekto
- Mag-install ng ESLint at Prettier extensions para sa konsistenteng pag-format
- Gamitin ang browser DevTools para sa debugging ng JavaScript
- Para sa Vue projects, mag-install ng Vue DevTools browser extension

### Performance Considerations

- Maraming bilang ng mga isinaling file (50+ wika) kaya malaki ang buong clone
- Gumamit ng shallow clone kung content lang ang oobrahon: `git clone --depth 1`
- I-exclude ang mga pagsasalin sa paghahanap kapag nagtatrabaho sa English na nilalaman
- Ang mga build process ay maaaring mabagal sa unang takbo (npm install, Vite build)

## Security Considerations

### Environment Variables

- Ang mga API key ay hindi dapat i-commit sa repositoryo
- Gumamit ng `.env` files (naka-include na sa `.gitignore`)
- I-dokumento ang kinakailangang environment variables sa mga README ng proyekto

### Python Projects

- Gumamit ng virtual environments: `python -m venv venv`
- Panatilihing updated ang mga dependencies
- Ang mga GitHub tokens ay dapat may minimal na mga kinakailangang permiso

### GitHub Models Access

- Kailangan ng Personal Access Tokens (PAT) para sa GitHub Models
- Itago ang tokens bilang mga environment variables
- Huwag i-commit ang mga tokens o credentials

## Additional Notes

### Target Audience

- Ganap na mga nagsisimula sa web development
- Mga estudyante at mga self-learners
- Mga guro na gumagamit ng kurikulum sa mga silid-aralan
- Nilalaman ay idinisenyo para sa accessibility at unti-unting pagbuo ng kasanayan

### Educational Philosophy

- Paraan ng pag-aaral na nakabatay sa proyekto
- Madalas na pagsusuri ng kaalaman (quizzes)
- Hands-on na mga ehersisyo sa pagko-code
- Mga halimbawa ng aplikasyon sa totoong mundo
- Pokus sa mga pundasyon bago ang mga framework

### Repository Maintenance

- Aktibong komunidad ng mga nag-aaral at mga contributor
- Regular na pag-update sa dependencies at nilalaman
- Mga isyu at diskusyon ay minomonitor ng mga maintainers
- Ang mga update sa pagsasalin ay awtomatiko gamit ang GitHub Actions

### Related Resources

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub resources](https://docs.microsoft.com/learn/student-hub/)
- Inirerekomenda ang [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) para sa mga nag-aaral
- Mga karagdagang kurso: Generative AI, Data Science, ML, IoT curricula ay available

### Working with Specific Projects

Para sa detalyadong mga tagubilin sa mga indibidwal na proyekto, sumangguni sa README files sa:
- `quiz-app/README.md` - Vue 3 quiz application
- `7-bank-project/README.md` - Banking application na may authentication
- `5-browser-extension/README.md` - Pag-develop ng browser extension
- `6-space-game/README.md` - Canvas-based na pag-develop ng laro
- `9-chat-project/README.md` - AI chat assistant na proyekto

### Monorepo Structure

Bagaman hindi isang tradisyunal na monorepo, ang repositoryong ito ay naglalaman ng maraming independyenteng proyekto:
- Bawat aralin ay self-contained
- Ang mga proyekto ay hindi nagbabahagi ng mga dependencies
- Magtrabaho sa mga indibidwal na proyekto nang hindi naaapektuhan ang iba
- I-clone ang buong repo para sa buong karanasan ng kurikulum

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Pagsasanggalang**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Habang nagsusumikap kami para sa katumpakan, pakatandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga error o kamalian. Ang orihinal na dokumento sa katutubong wika nito ang dapat ituring na opisyal na sanggunian. Para sa mahahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaintindihan o maling interpretasyon na nagmula sa paggamit ng pagsasaling ito.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->