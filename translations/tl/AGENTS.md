# AGENTS.md

## Project Overview

Ito ay isang repositoryo ng edukasyonal na kurikulum para sa pagtuturo ng mga pundasyon ng web development sa mga baguhan. Ang kurikulum ay isang komprehensibong 12-linggong kurso na binuo ng Microsoft Cloud Advocates, na nagtatampok ng 24 na praktikal na mga aralin na sumasaklaw sa JavaScript, CSS, at HTML.

### Key Components

- **Educational Content**: 24 na nakaayos na mga aralin na organisado sa mga module na nakabase sa proyekto
- **Practical Projects**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor, at AI Chat Assistant
- **Interactive Quizzes**: 48 mga pagsusulit na may tig-3 tanong bawat isa (pagsusuri bago/pagkatapos ng aralin)
- **Multi-language Support**: Automated na pagsasalin para sa 50+ na mga wika gamit ang GitHub Actions
- **Technologies**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (para sa mga AI na proyekto)

### Architecture

- Repositoryo ng edukasyonal na may istrukturang nakabase sa aralin
- Bawat folder ng aralin ay naglalaman ng README, mga halimbawa ng code, at mga solusyon
- Mga standalone na proyekto sa magkakahiwalay na direktoryo (quiz-app, iba't ibang mga proyekto ng aralin)
- Sistema ng pagsasalin gamit ang GitHub Actions (co-op-translator)
- Dokumentasyon na sinuserve gamit ang Docsify at available bilang PDF

## Setup Commands

Ang repositoryong ito ay pangunahing para sa pagkonsumo ng edukasyonal na nilalaman. Para magtrabaho sa mga partikular na proyekto:

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
# Sundin ang mga partikular na tagubilin sa pag-load ng extension para sa browser
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
# Itakda ang GITHUB_TOKEN na variable ng kapaligiran
python api.py
```

## Development Workflow

### For Content Contributors

1. **I-fork ang repositoryo** sa iyong GitHub account
2. **I-clone ang iyong fork** nang lokal
3. **Gumawa ng bagong branch** para sa iyong mga pagbabago
4. Gawin ang mga pagbabago sa nilalaman ng aralin o mga halimbawa ng code
5. Subukan ang anumang mga pagbabago sa code sa mga kaukulang direktoryo ng proyekto
6. Mag-submit ng pull requests ayon sa mga panuntunan ng kontribusyon

### For Learners

1. I-fork o i-clone ang repositoryo
2. Pumunta sa mga direktoryo ng aralin nang sunud-sunod
3. Basahin ang mga README file para sa bawat aralin
4. Kumpletuhin ang pre-lesson quizzes sa https://ff-quizzes.netlify.app/web/
5. Trabahuhin ang mga halimbawa ng code sa mga folder ng aralin
6. Kumpletuhin ang mga assignments at challenges
7. Sagutan ang post-lesson quizzes

### Live Development

- **Dokumentasyon**: Patakbuhin ang `docsify serve` sa root (port 3000)
- **Quiz App**: Patakbuhin ang `npm run dev` sa direktoryo ng quiz-app
- **Mga Proyekto**: Gamitin ang VS Code Live Server extension para sa mga HTML na proyekto
- **API Projects**: Patakbuhin ang `npm start` sa mga kaukulang API na direktoryo

## Testing Instructions

### Quiz App Testing

```bash
cd quiz-app
npm run lint       # Suriin ang mga isyu sa istilo ng code
npm run build      # Tiyaking matagumpay ang build
```

### Bank API Testing

```bash
cd 7-bank-project/api
npm run lint       # Suriin para sa mga isyu sa estilo ng code
node server.js     # Tiyakin na nagsisimula ang server nang walang mga error
```

### General Testing Approach

- Ito ay isang edukasyonal na repositoryo na walang komprehensibong automated na mga pagsubok
- Ang manu-manong pagsusuri ay nakatuon sa:
  - Ang mga halimbawa ng code ay tumatakbo nang walang mga error
  - Gumagana nang tama ang mga link sa dokumentasyon
  - Nakumpleto nang matagumpay ang build ng mga proyekto
  - Sumusunod ang mga halimbawa sa mga pinakamahusay na kasanayan

### Pre-submission Checks

- Patakbuhin ang `npm run lint` sa mga direktoryong may package.json
- Suriin ang mga markdown link kung valid
- Subukan ang mga halimbawa ng code sa browser o Node.js
- Siguraduhing ang mga pagsasalin ay may tamang istruktura

## Code Style Guidelines

### JavaScript

- Gumamit ng modernong ES6+ na sintaks
- Sundin ang mga karaniwang ESLint na configuration na ibinigay sa mga proyekto
- Gumamit ng makahulugang mga pangalan ng variable at function para sa kalinawan ng edukasyon
- Magdagdag ng mga komento na nagpapaliwanag ng mga konsepto para sa mga nag-aaral
- I-format gamit ang Prettier kung ito ay naka-configure

### HTML/CSS

- Mga semantikong HTML5 na elemento
- Mga prinsipyo ng responsive na disenyo
- Malinaw na mga konbensiyon sa pag-ninilay ng klase
- Mga komento na nagpapaliwanag ng mga teknik sa CSS para sa mga nag-aaral

### Python

- Mga patnubay sa istilo ng PEP 8
- Malinaw, edukasyonal na mga halimbawa ng code
- Mga type hint kung nakakatulong sa pagkatuto

### Markdown Documentation

- Malinaw na hierarkiya ng mga heading
- Mga code block na may pagtukoy ng wika
- Mga link sa karagdagang mga mapagkukunan
- Mga screenshot at mga imahe sa mga direktoryong `images/`
- Alt text para sa mga imahe para sa accessibility

### File Organization

- Mga aralin na inanumero nang sunud-sunod (1-getting-started-lessons, 2-js-basics, atbp.)
- Bawat proyekto ay may `solution/` at kadalasang `start/` o `your-work/` na mga direktoryo
- Mga imahe na iniimbak sa mga lesson-specific na `images/` folder
- Mga pagsasalin sa istrukturang `translations/{language-code}/`

## Build and Deployment

### Quiz App Deployment (Azure Static Web Apps)

Ang quiz-app ay naka-configure para sa Azure Static Web Apps na deployment:

```bash
cd quiz-app
npm run build      # Lumilikha ng dist/ na folder
# Nagde-deploy gamit ang GitHub Actions workflow sa push sa main
```

Azure Static Web Apps configuration:
- **App location**: `/quiz-app`
- **Output location**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Documentation PDF Generation

```bash
npm install                    # I-install ang docsify-to-pdf
npm run convert               # Gumawa ng PDF mula sa mga docs
```

### Docsify Documentation

```bash
npm install -g docsify-cli    # I-install ang Docsify nang pangkalahatan
docsify serve                 # I-serve sa localhost:3000
```

### Project-specific Builds

Bawat direktoryo ng proyekto ay maaaring may sarili nitong build process:
- Mga Vue na proyekto: `npm run build` ay lumilikha ng production bundles
- Mga static na proyekto: Walang build step, direktang i-serve ang mga files

## Pull Request Guidelines

### Title Format

Gumamit ng malinaw, deskriptibong mga pamagat na naglalarawan sa bahagi ng pagbabago:
- `[Quiz-app] Magdagdag ng bagong quiz para sa aralin X`
- `[Lesson-3] Ayusin ang typo sa terrarium project`
- `[Translation] Magdagdag ng pagsasalin sa Spanish para sa aralin 5`
- `[Docs] I-update ang mga tagubilin sa setup`

### Required Checks

Bago magsumite ng PR:

1. **Kalidad ng Code**:
   - Patakbuhin ang `npm run lint` sa mga naapektuhang direktoryo ng proyekto
   - Ayusin lahat ng linting errors at warnings

2. **Pag-verify ng Build**:
   - Patakbuhin ang `npm run build` kung naaangkop
   - Siguraduhin walang error sa build

3. **Pagpapatunay ng Link**:
   - Subukan lahat ng markdown links
   - Siguraduhin gumagana ang mga image references

4. **Pagsusuri ng Nilalaman**:
   - Basahin para sa spelling at grammar
   - Siguraduhin tama ang mga halimbawa ng code at edukasyonal
   - I-verify na ang mga pagsasalin ay nagpapanatili ng orihinal na kahulugan

### Contribution Requirements

- Sumang-ayon sa Microsoft CLA (automated na tseke sa unang PR)
- Sundin ang [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Tingnan ang [CONTRIBUTING.md](./CONTRIBUTING.md) para sa detalyadong mga gabay
- I-reference ang mga numero ng isyu sa PR description kung naaangkop

### Review Process

- Ang mga PR ay nirerebyu ng mga maintainer at komunidad
- Pinapangunahan ang kalinawan sa edukasyon
- Dapat sundin ng mga halimbawa ng code ang kasalukuyang mga pinakamahusay na kasanayan
- Ang mga pagsasalin ay sinusuri para sa katumpakan at angkop na kultura

## Translation System

### Automated Translation

- Gumagamit ng GitHub Actions kasama ang co-op-translator workflow
- Nagsasalin sa 50+ na mga wika nang awtomatiko
- Mga source file sa mga pangunahing direktoryo
- Mga naisaling file sa `translations/{language-code}/` na mga direktoryo

### Adding Manual Translation Improvements

1. Hanapin ang file sa `translations/{language-code}/`
2. Gawin ang mga pagpapabuti habang pinapanatili ang istruktura
3. Siguraduhing gumagana pa rin ang mga halimbawa ng code
4. Subukan ang anumang lokal na content ng quiz

### Translation Metadata

Ang mga naisaling file ay may metadata header:
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
- Suriin ang Node.js version (inirerekomenda v14+)
- I-delete ang `node_modules` at `package-lock.json`, patakbuhin muli ang `npm install`
- Suriin kung may conflict sa port (default: Vite gumagamit ng port 5173)

**Hindi nagsisimula ang API server**:
- Siguraduhing ang Node.js version ay hindi bababa sa (node >=10)
- Suriin kung ginagamit na ang port
- Tiyaking naka-install lahat ng dependencies gamit ang `npm install`

**Hindi naglo-load ang browser extension**:
- Suriin kung maayos ang format ng manifest.json
- Tingnan ang console ng browser para sa mga error
- Sundin ang mga tagubilin sa pag-install ng extension para sa partikular na browser

**Mga isyu sa Python chat project**:
- Siguraduhing naka-install ang OpenAI package: `pip install openai`
- Siguraduhing nakaset ang GITHUB_TOKEN environment variable
- Suriin ang mga pahintulot sa pag-access ng GitHub Models

**Hindi nagseserbisyo ang Docsify ng dokumento**:
- I-install ang docsify-cli globally: `npm install -g docsify-cli`
- Patakbuhin mula sa root directory ng repositoryo
- Suriin kung umiiral ang `docs/_sidebar.md`

### Development Environment Tips

- Gamitin ang VS Code kasama ang Live Server extension para sa mga HTML na proyekto
- I-install ang ESLint at Prettier extensions para sa pare-parehong pag-format
- Gamitin ang browser DevTools para sa debugging ng JavaScript
- Para sa mga Vue na proyekto, i-install ang Vue DevTools na extension ng browser

### Performance Considerations

- Malaking bilang ng mga naisaling file (50+ na mga wika) ay nangangahulugan na malalaki ang mga full clone
- Gamitin ang shallow clone kung content lang ang pinagtatrabahuhan: `git clone --depth 1`
- I-exclude ang mga pagsasalin mula sa mga paghahanap kapag nagtatrabaho sa English content
- Maaaring mabagal ang build process sa unang patakbo (npm install, Vite build)

## Security Considerations

### Environment Variables

- Hindi dapat i-commit ang API keys sa repositoryo
- Gumamit ng `.env` files (na nakalista na sa `.gitignore`)
- Idokumento ang mga kinakailangang environment variable sa mga README ng proyekto

### Python Projects

- Gumamit ng virtual environments: `python -m venv venv`
- Panatilihing updated ang mga dependencies
- Ang mga GitHub token ay dapat may minimal na kinakailangang mga permiso

### GitHub Models Access

- Kinakailangan ang Personal Access Tokens (PAT) para sa GitHub Models
- Dapat itago ang mga token bilang environment variables
- Huwag kailanman i-commit ang mga token o credentials

## Additional Notes

### Target Audience

- Ganap na mga baguhan sa web development
- Mga estudyante at self-learners
- Mga guro na gumagamit ng kurikulum sa mga klase
- Ang nilalaman ay idinisenyo para sa accessibility at unti-unting pagbuo ng kasanayan

### Educational Philosophy

- Project-based learning approach
- Madalas na pagsusuri ng kaalaman (quizzes)
- Hands-on na ehersisyo sa pagsusulat ng code
- Mga halimbawa ng aplikasyon sa tunay na mundo
- Pokus sa mga pundasyon bago dumako sa mga frameworks

### Repository Maintenance

- Aktibong komunidad ng mga nag-aaral at kontribyutor
- Regular na update sa mga dependencies at nilalaman
- Mga isyu at diskusyon ay minomonitor ng mga maintainer
- Awtomatikong update sa pagsasalin sa pamamagitan ng GitHub Actions

### Related Resources

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub resources](https://docs.microsoft.com/learn/student-hub/)
- Inirerekomenda para sa mga nag-aaral ang [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- Karagdagang mga kurso: Generative AI, Data Science, ML, IoT curricula available

### Working with Specific Projects

Para sa mga detalyadong tagubilin sa mga indibidwal na proyekto, tingnan ang mga README file sa:
- `quiz-app/README.md` - Vue 3 quiz application
- `7-bank-project/README.md` - Banking application na may authentication
- `5-browser-extension/README.md` - Pag-develop ng browser extension
- `6-space-game/README.md` - Pag-develop ng laro gamit ang Canvas
- `9-chat-project/README.md` - AI chat assistant project

### Monorepo Structure

Bagaman hindi isang tradisyunal na monorepo, ang repositoryong ito ay naglalaman ng maraming independiyenteng proyekto:
- Ang bawat aralin ay self-contained
- Hindi nagbabahagi ng dependencies ang mga proyekto
- Maaaring magtrabaho sa mga indibidwal na proyekto nang hindi naaapektuhan ang iba
- I-clone ang buong repo para sa buong karanasan sa kurikulum

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Paalala**:  
Ang dokumentong ito ay isinalin gamit ang serbisyong AI na pagsasalin na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat nagsusumikap kami para sa katumpakan, pakatandaan na ang awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o di-katumpakan. Ang orihinal na dokumento sa kanyang likas na wika ang dapat ituring na pangunahing sanggunian. Para sa mahahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na maaaring magmula sa paggamit ng pagsasaling ito.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->