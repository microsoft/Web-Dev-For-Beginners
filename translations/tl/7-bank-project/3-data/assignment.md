<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d0a02cb117e91a5b5f24178080068a3d",
  "translation_date": "2025-10-22T15:35:33+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "tl"
}
-->
# Pag-refactor ng Code at Dokumentasyon na Gawain

## Mga Layunin sa Pagkatuto

Sa pamamagitan ng pagsasagawa ng gawaing ito, mapapahusay mo ang mahahalagang kasanayan sa pag-develop ng software na ginagamit ng mga propesyonal na developer araw-araw. Matututo kang mag-organisa ng code para sa mas madaling mapanatili, bawasan ang pag-uulit sa pamamagitan ng abstraction, at idokumento ang iyong trabaho para sa mga susunod na developer (kasama ka na rin!).

Ang malinis at maayos na dokumentadong code ay mahalaga sa mga tunay na proyekto sa web development kung saan maraming developer ang nagtutulungan at ang codebase ay patuloy na nagbabago.

## Pangkalahatang-ideya ng Gawain

Ang `app.js` file ng iyong banking app ay lumaki na nang husto dahil sa mga functionality tulad ng login, registration, at dashboard. Panahon na para i-refactor ang code na ito gamit ang mga propesyonal na kasanayan sa pag-develop upang mapabuti ang readability, maintainability, at mabawasan ang pag-uulit.

## Mga Instruksyon

I-transform ang kasalukuyang `app.js` code sa pamamagitan ng paggamit ng tatlong pangunahing teknik sa pag-refactor:

### 1. I-extract ang Mga Configuration Constants

**Gawain**: Gumawa ng configuration section sa itaas ng iyong file na may reusable constants.

**Mga gabay sa implementasyon:**
- I-extract ang server API base URL (na kasalukuyang hardcoded sa maraming lugar)
- Gumawa ng constants para sa mga error message na lumalabas sa maraming functions
- Isaalang-alang ang pag-extract ng mga route paths at element IDs na madalas gamitin

**Halimbawa ng istruktura:**
```javascript
// Configuration constants
const API_BASE_URL = 'http://localhost:5000/api';
const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard'
};
```

### 2. Gumawa ng Unified Request Function

**Gawain**: Bumuo ng reusable na `sendRequest()` function na mag-aalis ng duplicate na code sa pagitan ng `createAccount()` at `getAccount()`.

**Mga kinakailangan:**
- Mag-handle ng parehong GET at POST requests
- Magkaroon ng tamang error handling
- Suportahan ang iba't ibang URL endpoints
- Tanggapin ang optional na request body data

**Gabay sa function signature:**
```javascript
async function sendRequest(endpoint, method = 'GET', data = null) {
  // Your implementation here
}
```

### 3. Magdagdag ng Propesyonal na Dokumentasyon ng Code

**Gawain**: Idokumento ang iyong code gamit ang malinaw at kapaki-pakinabang na mga komento na nagpapaliwanag ng "bakit" sa likod ng iyong logic.

**Mga pamantayan sa dokumentasyon:**
- Magdagdag ng dokumentasyon ng function na nagpapaliwanag ng layunin, mga parameter, at return values
- Maglagay ng inline comments para sa mga kumplikadong logic o business rules
- I-group ang mga magkakaugnay na functions gamit ang section headers
- Ipaliwanag ang anumang hindi halatang code patterns o browser-specific workarounds

**Halimbawa ng estilo ng dokumentasyon:**
```javascript
/**
 * Authenticates user and redirects to dashboard
 * @param {Event} event - Form submission event
 * @returns {Promise<void>} - Resolves when login process completes
 */
async function login(event) {
  // Prevent default form submission to handle with JavaScript
  event.preventDefault();
  
  // Your implementation...
}
```

## Mga Pamantayan sa Tagumpay

Ang iyong refactored code ay dapat magpakita ng mga sumusunod na propesyonal na kasanayan sa pag-develop:

### Exemplary Implementation
- ✅ **Constants**: Lahat ng magic strings at URLs ay na-extract sa malinaw na pinangalanang constants
- ✅ **DRY Principle**: Ang common request logic ay na-consolidate sa isang reusable na `sendRequest()` function
- ✅ **Documentation**: Ang mga function ay may malinaw na JSDoc comments na nagpapaliwanag ng layunin at mga parameter
- ✅ **Organization**: Ang code ay lohikal na naka-group gamit ang section headers at consistent na formatting
- ✅ **Error Handling**: Pinahusay na error handling gamit ang bagong request function

### Adequate Implementation
- ✅ **Constants**: Karamihan sa mga paulit-ulit na values ay na-extract, na may kaunting hardcoded values na natitira
- ✅ **Factorization**: Basic na `sendRequest()` function ang ginawa ngunit maaaring hindi ma-handle ang lahat ng edge cases
- ✅ **Comments**: Ang mga pangunahing function ay na-dokumento, bagamat ang ilang paliwanag ay maaaring mas detalyado
- ✅ **Readability**: Ang code ay pangkalahatang maayos, ngunit may ilang lugar na maaaring mapabuti

### Needs Improvement
- ❌ **Constants**: Maraming magic strings at URLs ang nananatiling hardcoded sa buong file
- ❌ **Duplication**: Malaking bahagi ng code duplication ang nananatili sa pagitan ng mga magkatulad na functions
- ❌ **Documentation**: Kulang o hindi sapat ang mga komento na hindi nagpapaliwanag ng layunin ng code
- ❌ **Organization**: Ang code ay kulang sa malinaw na istruktura at lohikal na grouping

## Pagsubok sa Iyong Refactored Code

Pagkatapos ng pag-refactor, tiyaking gumagana pa rin nang tama ang iyong banking app:

1. **Subukan ang lahat ng user flows**: Registration, login, dashboard display, at error handling
2. **I-verify ang mga API calls**: Siguraduhing gumagana ang iyong `sendRequest()` function para sa parehong account creation at retrieval
3. **Suriin ang mga error scenarios**: Subukan gamit ang invalid credentials at network errors
4. **I-review ang console output**: Siguraduhing walang bagong errors na naidulot ng pag-refactor

## Mga Alituntunin sa Pagsumite

I-submit ang iyong refactored `app.js` file na may:
- Malinaw na section headers na nag-oorganisa ng iba't ibang functionality
- Consistent na formatting at indentation ng code
- Kumpletong JSDoc documentation para sa lahat ng functions
- Maikling komento sa itaas na nagpapaliwanag ng iyong approach sa pag-refactor

**Bonus Challenge**: Gumawa ng simpleng dokumentasyon ng code file (`CODE_STRUCTURE.md`) na nagpapaliwanag ng arkitektura ng iyong app at kung paano nagtutulungan ang iba't ibang functions.

## Koneksyon sa Tunay na Mundo

Ang gawaing ito ay sumasalamin sa uri ng code maintenance na regular na ginagawa ng mga propesyonal na developer. Sa mga setting ng industriya:
- **Code reviews** ay nag-evaluate ng readability at maintainability tulad ng gawaing ito
- **Technical debt** ay naiipon kapag ang code ay hindi regular na na-refactor at na-dokumento
- **Team collaboration** ay nakadepende sa malinaw at maayos na dokumentadong code na madaling maunawaan ng mga bagong miyembro ng team
- **Bug fixes** ay mas madali sa maayos na codebase na may tamang abstraction

Ang mga kasanayan na iyong pinapraktis dito - pag-extract ng constants, pag-aalis ng duplication, at pagsulat ng malinaw na dokumentasyon - ay mahalaga sa propesyonal na pag-develop ng software.

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat sinisikap naming maging tumpak, pakatandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.