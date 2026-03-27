# AGENTS.md

## Project Overview

Ito ay isang edukasyonal na repositoryo ng kurikulum para sa pagtuturo ng mga pundasyon ng pag-develop ng web sa mga nagsisimula. Ang kurikulum ay isang komprehensibong 12-linggong kurso na binuo ng Microsoft Cloud Advocates, na may 24 na hands-on na mga aralin na sumasaklaw sa JavaScript, CSS, at HTML.

### Key Components

- **Nilalamang Edukasyonal**: 24 na istrukturadong mga aralin na inayos sa mga project-based na mga module
- **Praktikal na mga Proyekto**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor, at AI Chat Assistant
- **Interaktibong mga Pagsusulit**: 48 na pagsusulit na may tig-3 tanong bawat isa (pre/post-lesson assessments)
- **Suporta sa Maramihang Wika**: Automated na mga pagsasalin para sa 50+ na mga wika sa pamamagitan ng GitHub Actions
- **Mga Teknolohiya**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (para sa mga AI na proyekto)

### Architecture

- Edukasyonal na repositoryo na may lesson-based na istruktura
- Bawat folder ng aralin ay naglalaman ng README, mga halimbawa ng code, at mga solusyon
- Mga standalone na proyekto sa hiwalay na mga direktoryo (quiz-app, iba't ibang mga lesson na proyekto)
- Sistema ng pagsasalin gamit ang GitHub Actions (co-op-translator)
- Dokumentasyon na isinusilbi sa pamamagitan ng Docsify at available bilang PDF

## Setup Commands

Ang repositoryong ito ay pangunahing para sa pagkonsumo ng nilalamang edukasyonal. Para sa pagtatrabaho sa mga tiyak na proyekto:

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
# Sundin ang mga tagubilin sa pag-load ng extension na tiyak sa browser
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

1. **I-fork ang repositoryo** sa iyong GitHub account
2. **I-clone ang iyong fork** nang lokal
3. **Gumawa ng bagong sangay (branch)** para sa iyong mga pagbabago
4. Gumawa ng mga pagbabago sa nilalaman ng aralin o mga halimbawa ng code
5. Subukan ang anumang pagbabago sa code sa mga kaukulang direktoryo ng proyekto
6. Mag-submit ng mga pull request alinsunod sa mga patakaran sa kontribusyon

### Para sa mga Nag-aaral

1. I-fork o i-clone ang repositoryo
2. Mag-navigate sa mga direktoryo ng aralin nang sunud-sunod
3. Basahin ang mga README file para sa bawat aralin
4. Kumpletuhin ang pre-lesson quizzes sa https://ff-quizzes.netlify.app/web/
5. Gawin ang mga halimbawa ng code sa mga folder ng aralin
6. Kumpletuhin ang mga takdang-aralin at hamon
7. Kumuha ng mga post-lesson quizzes

### Live Development

- **Dokumentasyon**: Patakbuhin ang `docsify serve` sa root (port 3000)
- **Quiz App**: Patakbuhin ang `npm run dev` sa quiz-app na direktoryo
- **Mga Proyekto**: Gumamit ng VS Code Live Server extension para sa mga HTML na proyekto
- **API Projects**: Patakbuhin ang `npm start` sa kaukulang mga direktoryo ng API

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

- Ito ay isang edukasyonal na repositoryo na walang komprehensibong automated tests
- Manual na pagsusuri ay nakatuon sa:
  - Mga halimbawa ng code na tumatakbo nang walang error
  - Mga link sa dokumentasyon na gumagana nang tama
  - Matagumpay na pagtatapos ng mga build ng proyekto
  - Ang mga halimbawa ay sumusunod sa pinakamahusay na mga kasanayan

### Pre-submission Checks

- Patakbuhin ang `npm run lint` sa mga direktoryo na may package.json
- Suriin ang mga markdown link kung wasto
- Subukan ang mga halimbawa ng code sa browser o Node.js
- Suriin na ang mga pagsasalin ay napanatili ang tamang istruktura

## Code Style Guidelines

### JavaScript

- Gamitin ang modernong ES6+ na sintaks
- Sundan ang karaniwang konfigurasyon ng ESLint na ibinigay sa mga proyekto
- Gumamit ng makahulugang mga pangalan ng variable at function para sa kalinawan sa edukasyon
- Magdagdag ng mga komento na nagpapaliwanag ng mga konsepto para sa mga nag-aaral
- I-format gamit ang Prettier kung saan naka-configure

### HTML/CSS

- Mga semantic na elemento ng HTML5
- Mga prinsipyo ng responsive design
- Malinaw na mga convention sa pangalan ng klase
- Mga komento na nagpapaliwanag ng mga teknik sa CSS para sa mga nag-aaral

### Python

- Mga gabay sa estilo ng PEP 8
- Malinaw, edukasyonal na mga halimbawa ng code
- Mga type hint kung makakatulong sa pagkatuto

### Markdown Documentation

- Malinaw na hierarchy ng mga heading
- Mga blokeng code na may pagtukoy ng wika
- Mga link sa karagdagang mga mapagkukunan
- Mga screenshot at mga imahe sa mga direktoryo ng `images/`
- Alt text para sa mga larawan para sa accessibility

### File Organization

- Mga aralin na may bilang na sunud-sunod (1-getting-started-lessons, 2-js-basics, atbp.)
- Bawat proyekto ay may mga direktoryo na `solution/` at madalas ay `start/` o `your-work/`
- Mga imahe ay iniimbak sa lesson-specific na mga "images/" na folder
- Mga pagsasalin sa istruktura `translations/{language-code}/`

## Build and Deployment

### Quiz App Deployment (Azure Static Web Apps)

Ang quiz-app ay naka-configure para sa Azure Static Web Apps deployment:

```bash
cd quiz-app
npm run build      # Lumilikha ng dist/ folder
# Nagdedeploy gamit ang GitHub Actions workflow sa push sa main
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
docsify serve                 # Ihain sa localhost:3000
```

### Project-specific Builds

Maaaring may sariling proseso ng build bawat direktoryo ng proyekto:
- Vue projects: `npm run build` lumilikha ng mga production bundle
- Static projects: Walang build step, direkta na mag-serve ng mga file

## Pull Request Guidelines

### Title Format

Gumamit ng malinaw, deskriptibong mga pamagat na nagpapahiwatig ng bahagi ng pagbabago:
- `[Quiz-app] Add new quiz for lesson X`
- `[Lesson-3] Fix typo in terrarium project`
- `[Translation] Add Spanish translation for lesson 5`
- `[Docs] Update setup instructions`

### Required Checks

Bago magsumite ng PR:

1. **Kalidad ng Code**:
   - Patakbuhin ang `npm run lint` sa mga direktoryo ng apektadong proyekto
   - Ayusin ang lahat ng linting errors at warnings

2. **Pag-verify ng Build**:
   - Patakbuhin ang `npm run build` kung naaangkop
   - Siguraduhin na walang mga error sa build

3. **Pag-validate ng Link**:
   - Subukan lahat ng markdown link
   - I-verify ang mga reference sa imahe na gumagana

4. **Pagsusuri ng Nilalaman**:
   - Proofread para sa spelling at grammar
   - Siguraduhin na tama at edukasyonal ang mga halimbawa ng code
   - I-verify na ang mga pagsasalin ay napanatili ang orihinal na kahulugan

### Contribution Requirements

- Sumang-ayon sa Microsoft CLA (automated check sa unang PR)
- Sundin ang [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Tingnan ang [CONTRIBUTING.md](./CONTRIBUTING.md) para sa detalyadong mga patakaran
- I-reference ang mga numero ng isyu sa deskripsyon ng PR kung naaangkop

### Review Process

- Ang mga PR ay nire-review ng mga tagapangasiwa at komunidad
- Pinapahalagahan ang edukasyonal na kalinawan
- Ang mga halimbawa ng code ay dapat sumunod sa pinakabagong mga pinakamahusay na kasanayan
- Ang mga pagsasalin ay rerebyuhin para sa katumpakan at akmang kultura

## Translation System

### Automated Translation

- Gumagamit ng GitHub Actions gamit ang co-op-translator workflow
- Nagta-translate sa 50+ na mga wika nang awtomatiko
- Mga source file sa mga pangunahing direktoryo
- Mga na-translate na file sa `translations/{language-code}/` na mga direktoryo

### Adding Manual Translation Improvements

1. Hanapin ang file sa `translations/{language-code}/`
2. Gumawa ng mga pagpapabuti habang pinapanatili ang istruktura
3. Siguraduhin na ang mga halimbawa ng code ay nananatiling gumagana
4. Subukan ang anumang lokalized na quiz content

### Translation Metadata

Ang mga na-translate na mga file ay may kasamang metadata header:
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
- Suriin ang bersyon ng Node.js (inirerekomenda v14+)
- Tanggalin ang `node_modules` at `package-lock.json`, patakbuhin muli ang `npm install`
- Suriin ang mga conflict sa port (default: Vite gumagamit ng port 5173)

**API server won't start**:
- Siguraduhin ang Node.js version ay buo (node >=10)
- Suriin kung ang port ay ginagamit na
- Siguraduhing lahat ng dependencies ay naka-install gamit ang `npm install`

**Browser extension won't load**:
- Suriin na ang manifest.json ay maayos ang format
- Tingnan ang browser console para sa mga error
- Sundin ang mga tagubilin para sa pag-install ng browser-specific na extension

**Python chat project issues**:
- Siguraduhing naka-install ang OpenAI package: `pip install openai`
- Siguraduhin na ang GITHUB_TOKEN environment variable ay na-set
- Suriin ang mga permiso sa GitHub Models access

**Docsify not serving docs**:
- I-install ang docsify-cli globally: `npm install -g docsify-cli`
- Patakbuhin mula sa root directory ng repositoryo
- Suriin na ang `docs/_sidebar.md` ay umiiral

### Development Environment Tips

- Gamitin ang VS Code na may Live Server extension para sa mga HTML na proyekto
- Mag-install ng ESLint at Prettier na mga extension para sa pare-parehong format
- Gamitin ang browser DevTools para sa debugging ng JavaScript
- Para sa Vue projects, i-install ang Vue DevTools browser extension

### Performance Considerations

- Malaking bilang ng mga na-translate na file (50+ na mga wika) ay nangangahulugan ng malaking full clones
- Gumamit ng shallow clone kung content lang ang pinagtatrabahuhan: `git clone --depth 1`
- I-exclude ang mga pagsasalin mula sa paghahanap kapag nagtatrabaho sa English content
- Ang mga proseso ng build ay maaaring mabagal sa unang pagtakbo (npm install, Vite build)

## Security Considerations

### Environment Variables

- Ang mga API keys ay hindi dapat i-komit sa repositoryo
- Gumamit ng `.env` files (nasa `.gitignore` na)
- I-dokument ang mga kinakailangang environment variable sa mga README ng proyekto

### Python Projects

- Gumamit ng virtual environments: `python -m venv venv`
- Panatilihing up-to-date ang mga dependencies
- Ang mga GitHub token ay dapat may minimal na kinakailangang permiso

### GitHub Models Access

- Kailangan ang Personal Access Tokens (PAT) para sa GitHub Models
- Ang mga token ay dapat itago bilang environment variables
- Huwag kailanman i-komit ang mga token o kredensyal

## Additional Notes

### Target Audience

- Kumpletong mga nagsisimula sa web development
- Mga estudyante at self-learners
- Mga guro na gumagamit ng kurikulum sa mga silid-aralan
- Ang nilalaman ay dinisenyo para sa accessibility at unti-unting pagbuo ng kakayahan

### Educational Philosophy

- Project-based na paraan ng pag-aaral
- Madalas na pagsusuri ng kaalaman (mga pagsusulit)
- Hands-on na mga coding exercise
- Mga halimbawa ng aplikasyon sa tunay na mundo
- Pagtutok sa mga pundasyon bago ang mga framework

### Repository Maintenance

- Aktibong komunidad ng mga nag-aaral at kontribyutor
- Regular na updates sa mga dependencies at nilalaman
- Pinamamahalaan ang mga isyu at diskusyon ng mga tagapangasiwa
- Awtomatikong updates ng pagsasalin gamit ang GitHub Actions

### Related Resources

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub resources](https://docs.microsoft.com/learn/student-hub/)
- Inirerekomenda ang [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) para sa mga nag-aaral
- Karagdagang kurso: Generative AI, Data Science, ML, IoT curricula na available

### Working with Specific Projects

Para sa detalyadong mga tagubilin sa mga indibidwal na proyekto, tingnan ang mga README file sa:
- `quiz-app/README.md` - Vue 3 quiz application
- `7-bank-project/README.md` - Banking application na may authentication
- `5-browser-extension/README.md` - Browser extension development
- `6-space-game/README.md` - Canvas-based na pag-develop ng laro
- `9-chat-project/README.md` - AI chat assistant project

### Monorepo Structure

Bagamat hindi isang tradisyonal na monorepo, ang repositoryong ito ay naglalaman ng maraming independiyenteng proyekto:
- Ang bawat aralin ay self-contained
- Hindi nagbabahagi ng dependencies ang mga proyekto
- Maaaring magtrabaho sa mga indibidwal na proyekto nang hindi naaapektuhan ang iba
- I-clone ang buong repo para sa buong karanasan ng kurikulum

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat nagsusumikap kami para sa katumpakan, pakatandaan na ang mga automated na pagsasalin ay maaaring may mga pagkakamali o kakulangan sa katumpakan. Ang orihinal na dokumento sa orihinal nitong wika ang dapat ituring na pangunahing sanggunian. Para sa mahahalagang impormasyon, inirerekomenda ang propesyonal na pagsasaling-tao. Hindi kami mananagot sa anumang mga maling pagkaunawa o maling interpretasyon na maaaring magmula sa paggamit ng pagsasaling ito.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->