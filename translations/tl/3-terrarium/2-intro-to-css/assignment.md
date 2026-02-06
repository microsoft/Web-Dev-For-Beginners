# CSS Refactoring Assignment

## Layunin

Baguhin ang iyong terrarium project upang gumamit ng modernong CSS layout techniques! Palitan ang kasalukuyang absolute positioning approach gamit ang **Flexbox** o **CSS Grid** para sa mas madaling i-maintain at responsive na disenyo. Ang layuning ito ay hamon sa iyo na gamitin ang mga modernong pamantayan ng CSS habang pinapanatili ang visual na ganda ng iyong terrarium.

Ang pag-unawa kung kailan at paano gamitin ang iba't ibang layout methods ay mahalagang kasanayan sa modernong web development. Ang aktibidad na ito ay nag-uugnay sa tradisyunal na positioning techniques at mga makabagong CSS layout systems.

## Mga Tagubilin sa Gawain

### Phase 1: Pagsusuri at Pagpaplano
1. **Suriin ang kasalukuyang terrarium code** - Tukuyin kung aling mga elemento ang kasalukuyang gumagamit ng absolute positioning
2. **Piliin ang iyong layout method** - Magpasya kung Flexbox o CSS Grid ang mas angkop sa iyong disenyo
3. **Gumawa ng sketch ng bagong layout structure** - Planuhin kung paano maaayos ang mga container at plant elements

### Phase 2: Pagpapatupad
1. **Gumawa ng bagong bersyon** ng iyong terrarium project sa hiwalay na folder
2. **I-update ang HTML structure** kung kinakailangan upang suportahan ang napiling layout method
3. **I-refactor ang CSS** upang gumamit ng Flexbox o CSS Grid sa halip na absolute positioning
4. **Panatilihin ang visual consistency** - Siguraduhing ang mga halaman at terrarium jar ay nasa parehong posisyon
5. **Magpatupad ng responsive behavior** - Dapat mag-adjust ang layout nang maayos sa iba't ibang screen sizes

### Phase 3: Pagsusuri at Dokumentasyon
1. **Cross-browser testing** - Siguraduhing gumagana ang disenyo sa Chrome, Firefox, Edge, at Safari
2. **Responsive testing** - Suriin ang layout sa mobile, tablet, at desktop screen sizes
3. **Dokumentasyon** - Magdagdag ng mga komento sa iyong CSS na nagpapaliwanag ng iyong layout choices
4. **Screenshots** - Kumuha ng larawan ng iyong terrarium sa iba't ibang browser at screen sizes

## Mga Teknikal na Pangangailangan

### Layout Implementation
- **Pumili ng ISA**: Gumamit ng Flexbox O CSS Grid (hindi pareho para sa parehong mga elemento)
- **Responsive Design**: Gumamit ng relative units (`rem`, `em`, `%`, `vw`, `vh`) sa halip na fixed pixels
- **Accessibility**: Panatilihin ang tamang semantic HTML structure at alt text
- **Code Quality**: Gumamit ng consistent naming conventions at maayos na pag-aayos ng CSS

### Mga Modernong Tampok ng CSS na Dapat Isama
```css
/* Example Flexbox approach */
.terrarium-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

.plant-containers {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
}

/* Example Grid approach */
.terrarium-layout {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  gap: 1rem;
}
```

### Mga Pangangailangan sa Browser Support
- **Chrome/Edge**: Pinakabagong 2 bersyon
- **Firefox**: Pinakabagong 2 bersyon  
- **Safari**: Pinakabagong 2 bersyon
- **Mobile browsers**: iOS Safari, Chrome Mobile

## Mga Output

1. **Na-update na HTML file** na may mas maayos na semantic structure
2. **Refactored CSS file** gamit ang modernong layout techniques
3. **Koleksyon ng Screenshots** na nagpapakita ng cross-browser compatibility:
   - Desktop view (1920x1080)
   - Tablet view (768x1024) 
   - Mobile view (375x667)
   - Hindi bababa sa 2 iba't ibang browser
4. **README.md file** na nagdodokumento:
   - Ang iyong layout choice (Flexbox vs Grid) at ang dahilan
   - Mga hamon na naranasan sa refactoring
   - Mga tala tungkol sa browser compatibility
   - Mga tagubilin para sa pagpapatakbo ng iyong code

## Rubric ng Pagtatasa

| Pamantayan | Napakahusay (4) | Mahusay (3) | Paunlad (2) | Nagsisimula (1) |
|------------|-----------------|-------------|-------------|-----------------|
| **Layout Implementation** | Mahusay na paggamit ng Flexbox/Grid na may advanced features; ganap na responsive | Tamang pagpapatupad na may magandang responsive behavior | Pangunahing pagpapatupad na may kaunting responsive issues | Hindi kumpleto o maling layout implementation |
| **Code Quality** | Malinis, maayos na CSS na may makabuluhang komento at consistent naming | Magandang organisasyon na may ilang komento | Katamtamang organisasyon na may kaunting komento | Hindi maayos na organisasyon; mahirap intindihin |
| **Cross-Browser Compatibility** | Perpektong consistency sa lahat ng kinakailangang browser na may screenshots | Magandang compatibility na may kaunting documented differences | Ilang compatibility issues na hindi nakakasira ng functionality | Malaking compatibility problems o kulang sa testing |
| **Responsive Design** | Napakahusay na mobile-first approach na may smooth breakpoints | Magandang responsive behavior na may tamang breakpoints | Pangunahing responsive features na may ilang layout issues | Limitado o sirang responsive behavior |
| **Documentation** | Komprehensibong README na may detalyadong paliwanag at insights | Magandang dokumentasyon na sumasaklaw sa lahat ng kinakailangang elemento | Pangunahing dokumentasyon na may kaunting paliwanag | Hindi kumpleto o kulang na dokumentasyon |

## Mga Kapaki-pakinabang na Resources

### Mga Gabay sa Layout Method
- 📖 [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- 📖 [A Complete Guide to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- 📖 [Flexbox vs Grid - Choose the Right Tool](https://blog.webdevsimplified.com/2022-11/flexbox-vs-grid/)

### Mga Tool sa Browser Testing
- 🛠️ [Browser DevTools Responsive Mode](https://developer.chrome.com/docs/devtools/device-mode/)
- 🛠️ [Can I Use - Feature Support](https://caniuse.com/)
- 🛠️ [BrowserStack - Cross-browser Testing](https://www.browserstack.com/)

### Mga Tool sa Code Quality
- ✅ [CSS Validator](https://jigsaw.w3.org/css-validator/)
- ✅ [HTML Validator](https://validator.w3.org/)
- ✅ [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

## Mga Bonus na Hamon

🌟 **Advanced Layouts**: Gumamit ng parehong Flexbox AT Grid sa iba't ibang bahagi ng iyong disenyo  
🌟 **Animation Integration**: Magdagdag ng CSS transitions o animations na tugma sa iyong bagong layout  
🌟 **Dark Mode**: Gumamit ng CSS custom properties-based theme switcher  
🌟 **Container Queries**: Gumamit ng modernong container query techniques para sa component-level responsiveness  

> 💡 **Tandaan**: Ang layunin ay hindi lamang upang gumana ito, kundi upang maunawaan KUNG BAKIT ang napiling layout method ang pinakamahusay na solusyon para sa partikular na disenyo!

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na awtoritatibong pinagmulan. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.