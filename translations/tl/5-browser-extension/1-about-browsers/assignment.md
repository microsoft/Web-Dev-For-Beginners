<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b6897c02603d0045dd6d8256e8714baa",
  "translation_date": "2025-10-22T15:45:41+00:00",
  "source_file": "5-browser-extension/1-about-browsers/assignment.md",
  "language_code": "tl"
}
-->
# Takdang-Aralin: Baguhin ang Disenyo ng Iyong Browser Extension

## Pangkalahatang-ideya

Ngayon na natapos mo na ang HTML na istruktura para sa iyong browser extension tungkol sa carbon footprint, oras na para gawing kaakit-akit at madaling gamitin ito. Ang mahusay na disenyo ay nagpapahusay sa karanasan ng gumagamit at nagbibigay ng mas propesyonal at nakakaengganyong extension.

Ang iyong extension ay may kasamang basic na CSS styling, ngunit ang takdang-aralin na ito ay hamon sa iyo na lumikha ng natatanging visual identity na sumasalamin sa iyong personal na estilo habang pinapanatili ang mahusay na usability.

## Mga Panuto

### Bahagi 1: Suriin ang Kasalukuyang Disenyo

Bago gumawa ng mga pagbabago, suriin ang umiiral na istruktura ng CSS:

1. **Hanapin** ang mga CSS file sa iyong extension project
2. **Suriin** ang kasalukuyang approach sa styling at color scheme
3. **Tukuyin** ang mga lugar na maaaring pagandahin sa layout, typography, at visual hierarchy
4. **Isaalang-alang** kung paano sinusuportahan ng disenyo ang mga layunin ng gumagamit (madaling pagkompleto ng form at malinaw na pagpapakita ng data)

### Bahagi 2: Disenyuhin ang Iyong Custom na Styling

Lumikha ng cohesive na visual design na kinabibilangan ng:

**Color Scheme:**
- Pumili ng pangunahing color palette na sumasalamin sa mga tema ng kapaligiran
- Siguraduhing may sapat na contrast para sa accessibility (gumamit ng mga tool tulad ng WebAIM's contrast checker)
- Isaalang-alang kung paano magmumukha ang mga kulay sa iba't ibang browser themes

**Typography:**
- Pumili ng mga nababasang font na angkop sa maliliit na sukat ng extension
- Magtatag ng malinaw na hierarchy gamit ang tamang font sizes at weights
- Siguraduhing nananatiling nababasa ang teksto sa parehong light at dark browser themes

**Layout at Spacing:**
- Pagandahin ang visual na organisasyon ng mga elemento ng form at pagpapakita ng data
- Magdagdag ng tamang padding at margins para sa mas mahusay na readability
- Isaalang-alang ang mga prinsipyo ng responsive design para sa iba't ibang sukat ng screen

### Bahagi 3: Ipatupad ang Iyong Disenyo

Baguhin ang mga CSS file upang ipatupad ang iyong disenyo:

```css
/* Example starting points for customization */

.form-data {
    /* Style the configuration form */
    background: /* your choice */;
    padding: /* your spacing */;
    border-radius: /* your preference */;
}

.result-container {
    /* Style the data display area */
    background: /* complementary color */;
    border: /* your border style */;
    margin: /* your spacing */;
}

/* Add your custom styles here */
```

**Mga pangunahing lugar na dapat i-style:**
- **Mga elemento ng form**: Input fields, labels, at submit button
- **Pagpapakita ng resulta**: Data container, text styling, at loading states
- **Mga interactive na elemento**: Hover effects, button states, at transitions
- **Kabuuang layout**: Container spacing, background colors, at visual hierarchy

### Bahagi 4: Subukan at Pagandahin

1. **I-build** ang iyong extension gamit ang `npm run build`
2. **I-load** ang updated na extension sa iyong browser
3. **Subukan** ang lahat ng visual states (form entry, loading, results display, errors)
4. **I-verify** ang accessibility gamit ang browser developer tools
5. **Pagandahin** ang iyong styles base sa aktwal na paggamit

## Mga Hamon sa Pagkamalikhain

### Basic na Antas
- I-update ang mga kulay at font upang lumikha ng cohesive na tema
- Pagandahin ang spacing at alignment sa buong interface
- Magdagdag ng banayad na hover effects sa mga interactive na elemento

### Intermediate na Antas
- Magdisenyo ng custom na icons o graphics para sa iyong extension
- Magpatupad ng smooth transitions sa pagitan ng iba't ibang states
- Lumikha ng natatanging loading animation para sa API calls

### Advanced na Antas
- Magdisenyo ng maraming theme options (light/dark/high-contrast)
- Magpatupad ng responsive design para sa iba't ibang sukat ng browser window
- Magdagdag ng micro-interactions na nagpapahusay sa karanasan ng gumagamit

## Mga Alituntunin sa Pagsusumite

Ang iyong natapos na takdang-aralin ay dapat na kinabibilangan ng:

- **Binagong CSS files** na may iyong custom na styling
- **Mga screenshot** na nagpapakita ng iyong extension sa iba't ibang states (form, loading, results)
- **Maikling paglalarawan** (2-3 pangungusap) na nagpapaliwanag ng iyong mga desisyon sa disenyo at kung paano nito pinapabuti ang karanasan ng gumagamit

## Rubric ng Pagtatasa

| Pamantayan | Napakahusay (4) | Mahusay (3) | Paunlad (2) | Nagsisimula (1) |
|------------|-----------------|-------------|-------------|-----------------|
| **Visual Design** | Malikhain, cohesive na disenyo na nagpapahusay sa usability at sumasalamin sa matibay na prinsipyo ng disenyo | Magandang mga desisyon sa disenyo na may consistent na styling at malinaw na visual hierarchy | Pangunahing mga pagpapabuti sa disenyo na may ilang isyu sa consistency | Minimal na pagbabago sa styling o hindi consistent na disenyo |
| **Functionality** | Lahat ng styles ay gumagana nang perpekto sa iba't ibang states at browser environments | Gumagana nang maayos ang styles na may minor na isyu sa edge cases | Karamihan sa styles ay functional na may ilang problema sa display | Malaking isyu sa styling na nakakaapekto sa usability |
| **Code Quality** | Malinis, maayos na CSS na may makabuluhang class names at efficient selectors | Magandang istruktura ng CSS na may tamang paggamit ng selectors at properties | Katanggap-tanggap na CSS na may ilang isyu sa organisasyon | Mahinang istruktura ng CSS o sobrang komplikadong styling |
| **Accessibility** | Napakahusay na color contrast, nababasang font, at konsiderasyon para sa mga may kapansanan | Magandang accessibility practices na may minor na lugar para sa pagpapabuti | Pangunahing konsiderasyon sa accessibility na may ilang isyu | Limitadong atensyon sa mga pangangailangan sa accessibility |

## Mga Tip para sa Tagumpay

> 💡 **Tip sa Disenyo**: Magsimula sa banayad na mga pagbabago at unti-unting magdagdag ng mas dramatikong styling. Ang maliliit na pagpapabuti sa typography at spacing ay madalas na may malaking epekto sa kalidad ng disenyo.

**Mga pinakamahusay na kasanayan na dapat sundin:**
- **Subukan** ang iyong extension sa parehong light at dark browser themes
- **Gumamit** ng relative units (em, rem) para sa mas mahusay na scalability
- **Panatilihin** ang consistent na spacing gamit ang CSS custom properties
- **Isaalang-alang** kung paano magmumukha ang disenyo sa mga gumagamit na may iba't ibang visual needs
- **I-validate** ang iyong CSS upang matiyak na sumusunod ito sa tamang syntax

> ⚠️ **Karaniwang Pagkakamali**: Huwag isakripisyo ang usability para sa visual appeal. Ang iyong extension ay dapat parehong maganda at functional.

**Tandaan na:**
- **Panatilihin** ang mahalagang impormasyon na madaling mabasa
- **Siguraduhin** na ang mga button at interactive na elemento ay madaling i-click
- **Panatilihin** ang malinaw na visual feedback para sa mga aksyon ng gumagamit
- **Subukan** ang iyong disenyo gamit ang totoong data, hindi lamang placeholder text

Good luck sa paglikha ng browser extension na parehong functional at visually stunning!

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na pinagmulan. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.