# Istilo ang Iyong Bank App gamit ang Modernong CSS

## Pangkalahatang-ideya ng Proyekto

Baguhin ang iyong functional banking application upang maging isang kaakit-akit at propesyonal na web app gamit ang mga modernong teknolohiya ng CSS. Lilikha ka ng isang cohesive na design system na nagpapahusay sa karanasan ng user habang pinapanatili ang accessibility at mga prinsipyo ng responsive design.

Ang gawaing ito ay hamon sa iyo na mag-aplay ng mga makabagong pattern ng web design, magpatupad ng pare-parehong visual identity, at lumikha ng interface na parehong kaakit-akit at madaling gamitin ng mga user.

## Mga Instruksyon

### Hakbang 1: I-setup ang Iyong Stylesheet

**Gumawa ng pundasyon para sa iyong CSS:**

1. **Gumawa** ng bagong file na tinatawag na `styles.css` sa root ng iyong proyekto
2. **I-link** ang stylesheet sa iyong `index.html` file:
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
3. **Simulan** gamit ang CSS reset at mga modernong default:
   ```css
   /* Modern CSS reset and base styles */
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }
   
   body {
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
     line-height: 1.6;
     color: #333;
   }
   ```

### Hakbang 2: Mga Kinakailangan sa Design System

**Ipatupad ang mga mahahalagang elemento ng disenyo:**

#### Paleta ng Kulay
- **Pangunahing kulay**: Pumili ng propesyonal na kulay para sa mga button at highlight
- **Pangalawang kulay**: Kulay na komplementaryo para sa mga accent at pangalawang aksyon
- **Neutral na kulay**: Mga kulay abong para sa teksto, mga border, at mga background
- **Mga kulay para sa tagumpay/error**: Berde para sa mga tagumpay, pula para sa mga error

#### Tipograpiya
- **Hierarchy ng heading**: Malinaw na pagkakaiba sa pagitan ng H1, H2, at H3 na mga elemento
- **Teksto ng katawan**: Nababasang laki ng font (minimum na 16px) at angkop na line height
- **Mga label ng form**: Malinaw, accessible na istilo ng teksto

#### Layout at Spacing
- **Pare-parehong spacing**: Gumamit ng spacing scale (8px, 16px, 24px, 32px)
- **Grid system**: Organisadong layout para sa mga form at seksyon ng nilalaman
- **Responsive design**: Mobile-first na approach na may mga breakpoint

### Hakbang 3: Istilo ng mga Komponent

**Istilo ang mga partikular na komponent na ito:**

#### Mga Form
- **Mga input field**: Propesyonal na mga border, focus states, at istilo ng validation
- **Mga button**: Hover effects, disabled states, at loading indicators
- **Mga label**: Malinaw na posisyon at mga indicator para sa mga kinakailangang field
- **Mga mensahe ng error**: Nakikitang istilo ng error at kapaki-pakinabang na mensahe

#### Navigation
- **Header**: Malinis, branded na navigation area
- **Mga link**: Malinaw na hover states at active indicators
- **Logo/Pamagat**: Natatanging branding element

#### Mga Content Area
- **Mga seksyon**: Malinaw na visual na paghihiwalay sa pagitan ng iba't ibang mga lugar
- **Mga card**: Kung gumagamit ng card-based na layout, magdagdag ng mga shadow at border
- **Mga background**: Angkop na paggamit ng white space at banayad na mga background

### Hakbang 4: Mga Pinahusay na Tampok (Opsyonal)

**Isaalang-alang ang pagpapatupad ng mga advanced na tampok na ito:**
- **Dark mode**: Pag-toggle sa pagitan ng light at dark themes
- **Mga animasyon**: Banayad na transitions at micro-interactions
- **Loading states**: Visual na feedback sa panahon ng form submissions
- **Responsive images**: Mga optimized na imahe para sa iba't ibang laki ng screen

## Inspirasyon sa Disenyo

**Mga katangian ng modernong banking app:**
- **Malinis, minimal na disenyo** na may maraming white space
- **Propesyonal na color schemes** (blues, greens, o sophisticated neutrals)
- **Malinaw na visual hierarchy** na may prominenteng call-to-action buttons
- **Accessible contrast ratios** na sumusunod sa mga alituntunin ng WCAG
- **Mobile-responsive na mga layout** na gumagana sa lahat ng device

## Mga Teknikal na Kinakailangan

### Organisasyon ng CSS
```css
/* 1. CSS Custom Properties (Variables) */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  /* Add more variables */
}

/* 2. Base Styles */
/* Reset, typography, general elements */

/* 3. Layout */
/* Grid, flexbox, positioning */

/* 4. Components */
/* Forms, buttons, cards */

/* 5. Utilities */
/* Helper classes, responsive utilities */

/* 6. Media Queries */
/* Responsive breakpoints */
```

### Mga Kinakailangan sa Accessibility
- **Color contrast**: Siguraduhing hindi bababa sa 4.5:1 ratio para sa normal na teksto
- **Focus indicators**: Nakikitang focus states para sa keyboard navigation
- **Mga label ng form**: Tamang nauugnay sa mga input
- **Responsive design**: Magagamit sa mga screen mula 320px hanggang 1920px ang lapad

## Rubric ng Pagsusuri

| Pamantayan | Napakahusay (A) | Mahusay (B) | Paunlad (C) | Kailangan ng Pagpapabuti (F) |
|------------|-----------------|-------------|-------------|-----------------------------|
| **Design System** | Nagpapatupad ng komprehensibong design system na may pare-parehong kulay, tipograpiya, at spacing sa kabuuan | Gumagamit ng pare-parehong istilo na may malinaw na pattern ng disenyo at magandang visual hierarchy | Pangunahing istilo na may ilang isyu sa consistency o nawawalang elemento ng disenyo | Minimal na istilo na may hindi pare-pareho o magkasalungat na mga pagpipilian sa disenyo |
| **User Experience** | Lumilikha ng intuitive, propesyonal na interface na may mahusay na usability at visual appeal | Nagbibigay ng magandang karanasan ng user na may malinaw na navigation at nababasang nilalaman | Pangunahing usability na may ilang kailangang pagbutihin sa UX | Mahinang usability, mahirap i-navigate o basahin |
| **Teknikal na Pagpapatupad** | Gumagamit ng modernong teknolohiya ng CSS, maayos na istruktura ng code, at sumusunod sa mga pinakamahusay na kasanayan | Epektibong nagpapatupad ng CSS na may maayos na organisasyon at angkop na mga teknolohiya | Gumagana ang CSS ngunit maaaring kulang sa organisasyon o makabagong approach | Mahinang pagpapatupad ng CSS na may mga teknikal na isyu o problema sa compatibility ng browser |
| **Responsive Design** | Ganap na responsive na disenyo na gumagana nang maganda sa lahat ng laki ng device | Magandang responsive behavior na may minor na isyu sa ilang screen sizes | Pangunahing responsive implementation na may ilang problema sa layout | Hindi responsive o may malalaking problema sa mobile devices |
| **Accessibility** | Sumusunod sa mga alituntunin ng WCAG na may mahusay na keyboard navigation at suporta sa screen reader | Magandang accessibility practices na may tamang contrast at focus indicators | Pangunahing accessibility considerations na may ilang nawawalang elemento | Mahinang accessibility, mahirap para sa mga user na may kapansanan |

## Mga Alituntunin sa Pagsusumite

**Isama sa iyong pagsusumite:**
- **styles.css**: Ang iyong kumpletong stylesheet
- **Na-update na HTML**: Anumang mga pagbabago sa HTML na ginawa mo
- **Mga screenshot**: Mga larawan na nagpapakita ng iyong disenyo sa desktop at mobile
- **README**: Maikling paglalarawan ng iyong mga pagpipilian sa disenyo at paleta ng kulay

**Mga bonus na puntos para sa:**
- **CSS custom properties** para sa maintainable na theming
- **Mga advanced na tampok ng CSS** tulad ng Grid, Flexbox, o CSS animations
- **Mga konsiderasyon sa performance** tulad ng optimized CSS at minimal na laki ng file
- **Cross-browser testing** na tinitiyak ang compatibility sa iba't ibang browser

> 💡 **Pro Tip**: Simulan muna sa disenyo para sa mobile, pagkatapos ay i-enhance para sa mas malalaking screen. Ang mobile-first na approach na ito ay tinitiyak na gumagana nang maayos ang iyong app sa lahat ng device at sumusunod sa mga modernong kasanayan sa web development.

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na awtoritatibong sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.