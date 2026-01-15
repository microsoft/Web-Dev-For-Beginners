<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "7f2c48e04754724123ea100a822765e5",
  "translation_date": "2025-11-03T13:49:27+00:00",
  "source_file": "1-getting-started-lessons/3-accessibility/README.md",
  "language_code": "tl"
}
-->
# Paglikha ng Accessible na Mga Webpage

![Lahat Tungkol sa Accessibility](../../../../translated_images/tl/webdev101-a11y.8ef3025c858d897a.png)
> Sketchnote ni [Tomomi Imura](https://twitter.com/girlie_mac)

```mermaid
journey
    title Your Accessibility Learning Adventure
    section Foundation
      Understanding Users: 5: You
      Testing Tools: 4: You
      POUR Principles: 5: You
    section Build Skills
      Semantic HTML: 4: You
      Visual Design: 5: You
      ARIA Techniques: 4: You
    section Master Practice
      Keyboard Navigation: 5: You
      Form Accessibility: 4: You
      Real-world Testing: 5: You
```

## Pre-Lecture Quiz
[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/)

> Ang kapangyarihan ng Web ay nasa pagiging pangkalahatan nito. Ang pag-access ng lahat, anuman ang kapansanan, ay mahalagang aspeto.
>
> \- Sir Timothy Berners-Lee, Direktor ng W3C at imbentor ng World Wide Web

Narito ang isang bagay na maaaring ikagulat mo: kapag gumagawa ka ng mga accessible na website, hindi mo lang tinutulungan ang mga taong may kapansanan—ginagawa mo rin ang web na mas mahusay para sa lahat!

Napansin mo ba ang mga curb cuts sa mga kanto ng kalye? Orihinal na idinisenyo ang mga ito para sa mga wheelchair, ngunit ngayon nakakatulong din ito sa mga taong may stroller, mga delivery worker na may dolly, mga manlalakbay na may rolling luggage, at mga siklista. Ganyan din ang paraan ng accessible na disenyo ng web—ang mga solusyon na tumutulong sa isang grupo ay kadalasang nakikinabang sa lahat. Ang astig, di ba?

Sa araling ito, tatalakayin natin kung paano gumawa ng mga website na talagang gumagana para sa lahat, anuman ang paraan nila ng pag-browse sa web. Matutuklasan mo ang mga praktikal na teknik na nakapaloob na sa mga pamantayan ng web, magkakaroon ng hands-on na karanasan sa mga testing tools, at makikita kung paano pinapahusay ng accessibility ang usability ng iyong mga site para sa lahat ng user.

Sa pagtatapos ng araling ito, magkakaroon ka ng kumpiyansa na gawing natural na bahagi ng iyong workflow sa pag-develop ang accessibility. Handa ka na bang tuklasin kung paano ang mga maingat na desisyon sa disenyo ay maaaring magbukas ng web para sa bilyon-bilyong user? Tara na!

```mermaid
mindmap
  root((Web Accessibility))
    Users
      Screen readers
      Keyboard navigation
      Voice control
      Magnification
    Technologies
      HTML semantics
      ARIA attributes
      CSS focus indicators
      Keyboard events
    Benefits
      Wider audience
      Better SEO
      Legal compliance
      Universal design
    Testing
      Automated tools
      Manual testing
      User feedback
      Real assistive tech
```

> Maaari mong kunin ang araling ito sa [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/accessibility/?WT.mc_id=academic-77807-sagibbon)!

## Pag-unawa sa Assistive Technologies

Bago tayo magsimula sa coding, maglaan muna tayo ng oras para maunawaan kung paano talaga nararanasan ng mga taong may iba't ibang kakayahan ang web. Hindi lang ito teorya—ang pag-unawa sa mga real-world navigation pattern ay magpapahusay sa iyo bilang developer!

Ang mga assistive technologies ay kamangha-manghang mga tool na tumutulong sa mga taong may kapansanan na makipag-ugnayan sa mga website sa mga paraang maaaring ikagulat mo. Kapag nakuha mo ang tamang paraan ng paggamit ng mga teknolohiyang ito, ang paggawa ng mga accessible na karanasan sa web ay nagiging mas intuitive. Para bang natututo kang makita ang iyong code sa mata ng iba.

### Screen readers

[Screen readers](https://en.wikipedia.org/wiki/Screen_reader) ay mga advanced na teknolohiya na nagko-convert ng digital na teksto sa speech o braille output. Bagama't pangunahing ginagamit ito ng mga taong may kapansanan sa paningin, napaka-kapaki-pakinabang din ito para sa mga user na may learning disabilities tulad ng dyslexia.

Iniisip ko ang screen reader na parang isang matalinong tagapagsalaysay na nagbabasa ng libro para sa iyo. Binabasa nito ang nilalaman nang malakas sa lohikal na pagkakasunod-sunod, ina-announce ang mga interactive na elemento tulad ng "button" o "link," at nagbibigay ng mga keyboard shortcut para sa pag-navigate sa isang pahina. Ngunit narito ang mahalaga—ang mga screen reader ay gumagana lamang nang mahusay kung gagawa tayo ng mga website na may tamang istruktura at makabuluhang nilalaman. Diyan ka papasok bilang developer!

**Mga sikat na screen reader sa iba't ibang platform:**
- **Windows**: [NVDA](https://www.nvaccess.org/about-nvda/) (libre at pinakasikat), [JAWS](https://webaim.org/articles/jaws/), [Narrator](https://support.microsoft.com/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1/?WT.mc_id=academic-77807-sagibbon) (built-in)
- **macOS/iOS**: [VoiceOver](https://support.apple.com/guide/voiceover/welcome/10) (built-in at napaka-kakayahan)
- **Android**: [TalkBack](https://support.google.com/accessibility/android/answer/6283677) (built-in)
- **Linux**: [Orca](https://wiki.gnome.org/Projects/Orca) (libre at open-source)

**Paano nagna-navigate ang mga screen reader sa web content:**

Ang mga screen reader ay nagbibigay ng iba't ibang paraan ng pag-navigate na nagpapabilis sa pag-browse para sa mga bihasang user:
- **Sequential reading**: Binabasa ang nilalaman mula itaas hanggang ibaba, tulad ng pagbabasa ng libro
- **Landmark navigation**: Tumalon sa pagitan ng mga seksyon ng pahina (header, nav, main, footer)
- **Heading navigation**: Tumalon sa pagitan ng mga heading para maunawaan ang istruktura ng pahina
- **Link lists**: Gumagawa ng listahan ng lahat ng link para sa mabilisang pag-access
- **Form controls**: Direktang nagna-navigate sa pagitan ng mga input field at button

> 💡 **Narito ang isang bagay na ikinagulat ko**: 68% ng mga user ng screen reader ay pangunahing nagna-navigate gamit ang mga heading ([WebAIM Survey](https://webaim.org/projects/screenreadersurvey9/#finding)). Nangangahulugan ito na ang istruktura ng iyong heading ay parang roadmap para sa mga user—kapag tama ang pagkakagawa mo, literal mong tinutulungan ang mga tao na mas mabilis na mahanap ang nilalaman!

### Pagbuo ng iyong testing workflow

Narito ang magandang balita—ang epektibong accessibility testing ay hindi kailangang nakaka-overwhelm! Gusto mong pagsamahin ang automated tools (napakahusay sa pag-detect ng mga halatang isyu) sa ilang hands-on na testing. Narito ang sistematikong paraan na napatunayan kong nakakahuli ng pinakamaraming isyu nang hindi nauubos ang buong araw:

**Essential manual testing workflow:**

```mermaid
flowchart TD
    A[🚀 Start Testing] --> B{⌨️ Keyboard Navigation}
    B --> C[Tab through all interactive elements]
    C --> D{🎧 Screen Reader Testing}
    D --> E[Test with NVDA/VoiceOver]
    E --> F{🔍 Zoom Testing}
    F --> G[Zoom to 200% and test functionality]
    G --> H{🎨 Color/Contrast Check}
    H --> I[Verify all text meets contrast ratios]
    I --> J{👁️ Focus Management}
    J --> K[Ensure focus indicators are visible]
    K --> L[✅ Testing Complete]
    
    style A fill:#e3f2fd
    style L fill:#e8f5e8
    style B fill:#fff3e0
    style D fill:#f3e5f5
    style F fill:#e0f2f1
    style H fill:#fce4ec
    style J fill:#e8eaf6
```

**Step-by-step testing checklist:**
1. **Keyboard navigation**: Gumamit lamang ng Tab, Shift+Tab, Enter, Space, at Arrow keys
2. **Screen reader testing**: I-enable ang NVDA, VoiceOver, o Narrator at mag-navigate nang nakapikit ang mata
3. **Zoom testing**: Subukan sa 200% at 400% zoom levels
4. **Color contrast verification**: Suriin ang lahat ng teksto at UI components
5. **Focus indicator testing**: Siguraduhing lahat ng interactive na elemento ay may nakikitang focus states

✅ **Simulan sa Lighthouse**: Buksan ang DevTools ng iyong browser, magpatakbo ng Lighthouse accessibility audit, pagkatapos gamitin ang resulta para gabayan ang iyong manual testing focus areas.

### Zoom at magnification tools

Alam mo ba kung paano minsan ay nagpi-pinch to zoom ka sa iyong telepono kapag masyadong maliit ang teksto, o nagpipilit kang magbasa sa laptop screen sa maliwanag na sikat ng araw? Maraming user ang umaasa sa magnification tools para gawing nababasa ang nilalaman araw-araw. Kasama dito ang mga taong may mababang paningin, matatanda, at sinumang sinubukang magbasa ng website sa labas.

Ang modernong teknolohiya ng zoom ay umunlad na lampas sa simpleng pagpapalaki ng mga bagay. Ang pag-unawa kung paano gumagana ang mga tool na ito ay makakatulong sa iyo na lumikha ng mga responsive na disenyo na nananatiling functional at kaakit-akit sa anumang antas ng magnification.

**Modern browser zoom capabilities:**
- **Page zoom**: Pinapalaki ang lahat ng nilalaman nang proporsyonal (teksto, mga imahe, layout) - ito ang mas pinapaborang paraan
- **Text-only zoom**: Pinapalaki ang font size habang pinapanatili ang orihinal na layout
- **Pinch-to-zoom**: Suporta sa mobile gesture para sa pansamantalang magnification
- **Browser support**: Lahat ng modernong browser ay sumusuporta sa zoom hanggang 500% nang hindi nasisira ang functionality

**Specialized magnification software:**
- **Windows**: [Magnifier](https://support.microsoft.com/windows/use-magnifier-to-make-things-on-the-screen-easier-to-see-414948ba-8b1c-d3bd-8615-0e5e32204198) (built-in), [ZoomText](https://www.freedomscientific.com/training/zoomtext/getting-started/)
- **macOS/iOS**: [Zoom](https://www.apple.com/accessibility/mac/vision/) (built-in na may advanced features)

> ⚠️ **Pagsasaalang-alang sa Disenyo**: Kinakailangan ng WCAG na ang nilalaman ay nananatiling functional kapag na-zoom sa 200%. Sa antas na ito, ang horizontal scrolling ay dapat minimal, at lahat ng interactive na elemento ay dapat manatiling accessible.

✅ **Subukan ang iyong responsive design**: I-zoom ang iyong browser sa 200% at 400%. Ang iyong layout ba ay maayos na umaangkop? Maa-access mo pa rin ba ang lahat ng functionality nang walang labis na pag-scroll?

## Modern Accessibility Testing Tools

Ngayon na nauunawaan mo kung paano nagna-navigate ang mga tao sa web gamit ang assistive technologies, tuklasin natin ang mga tool na tumutulong sa iyo na bumuo at mag-test ng mga accessible na website.

Isipin mo ito: ang automated tools ay mahusay sa pag-detect ng mga halatang isyu (tulad ng nawawalang alt text), habang ang hands-on testing ay tumutulong sa iyo na tiyakin na ang iyong site ay komportable gamitin sa totoong mundo. Kapag pinagsama, nagbibigay ito ng kumpiyansa na gumagana ang iyong mga site para sa lahat.

### Color contrast testing

Narito ang magandang balita: ang color contrast ay isa sa mga pinakakaraniwang isyu sa accessibility, ngunit isa rin ito sa pinakamadaling ayusin. Ang magandang contrast ay nakikinabang sa lahat—mula sa mga user na may kapansanan sa paningin hanggang sa mga taong nagbabasa ng kanilang telepono sa tabing dagat.

**Mga kinakailangan sa contrast ng WCAG:**

| Uri ng Teksto | WCAG AA (Minimum) | WCAG AAA (Enhanced) |
|---------------|-------------------|---------------------|
| **Normal na teksto** (mas mababa sa 18pt) | 4.5:1 contrast ratio | 7:1 contrast ratio |
| **Malaking teksto** (18pt+ o 14pt+ bold) | 3:1 contrast ratio | 4.5:1 contrast ratio |
| **UI components** (mga button, form borders) | 3:1 contrast ratio | 3:1 contrast ratio |

**Mga mahahalagang testing tools:**
- [Colour Contrast Analyser](https://www.tpgi.com/color-contrast-checker/) - Desktop app na may color picker
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) - Web-based na may instant feedback
- [Stark](https://www.getstark.co/) - Plugin ng design tool para sa Figma, Sketch, Adobe XD
- [Accessible Colors](https://accessible-colors.com/) - Hanapin ang mga accessible na color palettes

✅ **Gumawa ng mas mahusay na color palettes**: Simulan sa iyong brand colors at gamitin ang contrast checkers para lumikha ng mga accessible na variation. I-dokumenta ang mga ito bilang mga accessible na color tokens ng iyong design system.

### Comprehensive accessibility auditing

Ang pinaka-epektibong accessibility testing ay pinagsasama ang iba't ibang paraan. Walang isang tool na nakakakita ng lahat, kaya ang pagbuo ng testing routine na may iba't ibang pamamaraan ay nagsisiguro ng masusing coverage.

**Browser-based testing (built-in sa DevTools):**
- **Chrome/Edge**: Lighthouse accessibility audit + Accessibility panel
- **Firefox**: Accessibility Inspector na may detalyadong tree view
- **Safari**: Audit tab sa Web Inspector na may VoiceOver simulation

**Professional testing extensions:**
- [axe DevTools](https://www.deque.com/axe/devtools/) - Industry-standard automated testing
- [WAVE](https://wave.webaim.org/extension/) - Visual feedback na may error highlighting
- [Accessibility Insights](https://accessibilityinsights.io/) - Comprehensive testing suite ng Microsoft

**Command-line at CI/CD integration:**
- [axe-core](https://github.com/dequelabs/axe-core) - JavaScript library para sa automated testing
- [Pa11y](https://pa11y.org/) - Command-line accessibility testing tool
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) - Automated accessibility scoring

> 🎯 **Testing Goal**: Maghangad ng Lighthouse accessibility score na 95+ bilang baseline. Tandaan, ang automated tools ay nakakakita lamang ng humigit-kumulang 30-40% ng mga isyu sa accessibility—ang manual testing ay mahalaga pa rin!

### 🧠 **Testing Skills Check: Handa Ka Na Bang Maghanap ng Mga Isyu?**

**Tingnan natin kung ano ang nararamdaman mo tungkol sa accessibility testing:**
- Aling testing method ang tila pinaka-madali para sa iyo ngayon?
- Maiisip mo bang gumamit ng keyboard-only navigation sa loob ng isang buong araw?
- Ano ang isang accessibility barrier na personal mong naranasan online?

```mermaid
pie title "Accessibility Issues Caught by Different Methods"
    "Automated Tools" : 35
    "Manual Testing" : 40
    "User Feedback" : 25
```

> **Confidence booster**: Ang mga professional accessibility testers ay gumagamit ng eksaktong kombinasyon ng mga pamamaraang ito. Natututo ka ng mga industry-standard practices!

## Pagbuo ng Accessibility mula sa Simula

Ang susi sa tagumpay ng accessibility ay ang pagbuo nito sa iyong pundasyon mula pa sa simula. Alam kong nakakaakit na isipin na "Idadagdag ko ang accessibility mamaya," ngunit para itong pagtatangkang magdagdag ng rampa sa isang bahay pagkatapos itong maitayo. Posible? Oo. Madali? Hindi talaga.

Isipin ang accessibility na parang pagpaplano ng bahay—mas madali ang pagsama ng wheelchair accessibility sa iyong mga paunang plano sa arkitektura kaysa sa pag-retrofit ng lahat pagkatapos.

### Ang mga prinsipyo ng POUR: Ang iyong pundasyon sa accessibility

Ang Web Content Accessibility Guidelines (WCAG) ay nakabatay sa apat na pangunahing prinsipyo na tinatawag na POUR. Huwag mag-alala—hindi ito mga mahigpit na akademikong konsepto! Ang mga ito ay praktikal na gabay para sa paggawa ng nilalaman na gumagana para sa lahat.

Kapag nakuha mo ang prinsipyo ng POUR, ang paggawa ng mga desisyon sa accessibility ay nagiging mas intuitive. Para itong pagkakaroon ng mental checklist na gumagabay sa iyong mga desisyon sa disenyo. Talakayin natin ito:

```mermaid
flowchart LR
    A[🔍 PERCEIVABLE<br/>Can users sense it?] --> B[🎮 OPERABLE<br/>Can users use it?]
    B --> C[📖 UNDERSTANDABLE<br/>Can users get it?]
    C --> D[💪 ROBUST<br/>Does it work everywhere?]
    
    A1[Alt text<br/>Captions<br/>Contrast] --> A
    B1[Keyboard access<br/>No seizures<br/>Time limits] --> B
    C1[Clear language<br/>Predictable<br/>Error help] --> C
    D1[Valid code<br/>Compatible<br/>Future-proof] --> D
    
    style A fill:#e1f5fe
    style B fill:#e8f5e8
    style C fill:#fff3e0
    style D fill:#f3e5f5
```

**🔍 Perceivable**: Ang impormasyon ay dapat maipakita sa mga paraan na maaaring maramdaman ng mga user sa pamamagitan ng kanilang mga pandama

- Magbigay ng mga text alternatives para sa non-text content (mga imahe, video, audio)
- Siguraduhin ang sapat na color contrast para sa lahat ng teksto at UI components
- Magbigay ng captions at transcripts para sa multimedia content
- Disenyuhin ang nilalaman na nananatiling functional kapag na-resize hanggang 200%
- Gumamit ng maraming sensory characteristics (hindi lang kulay) para ipakita ang impormasyon

**🎮 Operable**: Lahat ng interface components ay dapat ma-operate sa pamamagitan ng available na input methods

- Gawing accessible ang lahat ng functionality sa pamamagitan ng keyboard navigation
- Magbigay ng sapat na oras para sa mga user na basahin at makipag-ugnayan sa nilalaman
- Iwasan ang nilalaman na nagdudulot ng seizures o vestibular disorders
- Tulungan ang mga user na mag-navigate nang mahusay gamit ang malinaw na istruktura at landmarks
- Siguraduhin na ang mga interactive na elemento ay may sapat na target sizes (44px minimum)

**📖 Understandable**: Ang impormasyon at UI operation ay dapat malinaw at madaling maunawaan

- Gumamit ng malinaw, simpleng wika na angkop para sa iyong audience
- Siguraduhin na ang nilalaman ay lumilitaw at gumagana sa predictable, consistent na paraan
- Magbigay ng malinaw na instruksyon at error messages para sa user input
- Tulungan ang mga user na maunawaan at maitama ang mga pagkakamali sa forms
- Ayusin ang nilalaman na may lohikal na reading order at information hierarchy

**💪 Robust**: Ang nilalaman ay dapat gumana nang maaasahan sa iba't ibang teknolohiya at assistive devices

- **Gumamit ng valid, semantic HTML bilang iyong pundasyon**
- **Siguraduhin ang compatibility sa kasalukuyan at hinaharap na assistive technologies**
- **Sundin ang web standards at best practices para sa markup**
- **Subukan sa iba't ibang browser, device, at mga tool para sa accessibility**
- **Istruktura ang nilalaman upang gumana pa rin nang maayos kahit hindi suportado ang mga advanced na feature**

### 🎯 **POUR Principles Check: Paano Ito Maalala**

**Mabilis na pagninilay sa mga pundasyon:**
- Makakaisip ka ba ng feature sa website na hindi pumasa sa bawat prinsipyo ng POUR?
- Alin sa mga prinsipyo ang pinaka-natural para sa iyo bilang developer?
- Paano makakatulong ang mga prinsipyong ito sa disenyo para sa lahat, hindi lang sa mga may kapansanan?

```mermaid
quadrantChart
    title POUR Principles Impact Matrix
    x-axis Low Effort --> High Effort
    y-axis Low Impact --> High Impact
    quadrant-1 Quick Wins
    quadrant-2 Major Projects
    quadrant-3 Consider Later
    quadrant-4 Strategic Focus
    
    Alt Text: [0.2, 0.9]
    Color Contrast: [0.3, 0.8]
    Semantic HTML: [0.4, 0.9]
    Keyboard Nav: [0.6, 0.8]
    ARIA Complex: [0.8, 0.7]
    Screen Reader Testing: [0.7, 0.6]
```

> **Tandaan**: Magsimula sa mga pagbabago na may mataas na epekto ngunit mababa ang effort. Ang semantic HTML at alt text ang nagbibigay ng pinakamalaking accessibility boost nang hindi masyadong mahirap gawin!

## Paglikha ng Accessible na Visual Design

Ang mahusay na visual design at accessibility ay magkaugnay. Kapag nagdisenyo ka nang may accessibility sa isip, madalas mong matutuklasan na ang mga limitasyong ito ay nagdudulot ng mas malinis at mas eleganteng solusyon na kapaki-pakinabang para sa lahat ng user.

Tuklasin natin kung paano gumawa ng mga disenyo na kaakit-akit sa mata at gumagana para sa lahat, anuman ang kanilang kakayahan sa paningin o ang mga kondisyon kung saan nila tinitingnan ang iyong nilalaman.

### Mga Estratehiya sa Kulay at Visual Accessibility

Ang kulay ay makapangyarihan para sa komunikasyon, ngunit hindi ito dapat ang tanging paraan para ipahayag ang mahalagang impormasyon. Ang pagdisenyo nang lampas sa kulay ay lumilikha ng mas matibay at inklusibong karanasan na gumagana sa mas maraming sitwasyon.

**Disenyo para sa pagkakaiba sa paningin ng kulay:**

Tinatayang 8% ng mga lalaki at 0.5% ng mga babae ang may ilang uri ng pagkakaiba sa paningin ng kulay (madalas na tinatawag na "color blindness"). Ang mga pinakakaraniwang uri ay:
- **Deuteranopia**: Hirap sa pagkilala ng pula at berde
- **Protanopia**: Ang pula ay mukhang mas madilim
- **Tritanopia**: Hirap sa asul at dilaw (bihira)

**Mga Estratehiya para sa Inklusibong Kulay:**

```css
/* ❌ Bad: Using only color to indicate status */
.error { color: red; }
.success { color: green; }

/* ✅ Good: Color plus icons and context */
.error {
  color: #d32f2f;
  border-left: 4px solid #d32f2f;
}
.error::before {
  content: "⚠️";
  margin-right: 8px;
}

.success {
  color: #2e7d32;
  border-left: 4px solid #2e7d32;
}
.success::before {
  content: "✅";
  margin-right: 8px;
}
```

**Lampas sa mga pangunahing kinakailangan sa contrast:**
- Subukan ang iyong mga pagpipilian sa kulay gamit ang mga simulator para sa color blindness
- Gumamit ng mga pattern, texture, o hugis kasabay ng color coding
- Siguraduhing ang mga interactive na estado ay nananatiling naiiba kahit walang kulay
- Isaalang-alang kung paano ang iyong disenyo ay mukhang nasa high contrast mode

✅ **Subukan ang accessibility ng iyong kulay**: Gumamit ng mga tool tulad ng [Coblis](https://www.color-blindness.com/coblis-color-blindness-simulator/) upang makita kung paano lumilitaw ang iyong site sa mga user na may iba't ibang uri ng paningin ng kulay.

### Mga Focus Indicator at Disenyo ng Interaksyon

Ang mga focus indicator ay ang digital na katumbas ng cursor—ipinapakita nila sa mga user ng keyboard kung nasaan sila sa pahina. Ang mahusay na disenyo ng focus indicator ay nagpapahusay sa karanasan para sa lahat sa pamamagitan ng paggawa ng mga interaksyon na malinaw at predictable.

**Mga Modernong Praktis para sa Focus Indicator:**

```css
/* Enhanced focus styles that work across browsers */
button:focus-visible {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
  box-shadow: 0 0 0 4px rgba(0, 102, 204, 0.25);
}

/* Remove focus outline for mouse users, preserve for keyboard users */
button:focus:not(:focus-visible) {
  outline: none;
}

/* Focus-within for complex components */
.card:focus-within {
  box-shadow: 0 0 0 3px rgba(74, 144, 164, 0.5);
  border-color: #4A90A4;
}

/* Ensure focus indicators meet contrast requirements */
.custom-focus:focus-visible {
  outline: 3px solid #ffffff;
  outline-offset: 2px;
  box-shadow: 0 0 0 6px #000000;
}
```

**Mga Kinakailangan para sa Focus Indicator:**
- **Visibility**: Dapat may hindi bababa sa 3:1 contrast ratio sa mga nakapaligid na elemento
- **Width**: Minimum na kapal na 2px sa buong elemento
- **Persistence**: Dapat manatiling nakikita hanggang sa lumipat ang focus sa ibang lugar
- **Distinction**: Dapat visually naiiba mula sa ibang estado ng UI

> 💡 **Tip sa Disenyo**: Ang mahusay na focus indicator ay madalas gumagamit ng kombinasyon ng outline, box-shadow, at pagbabago ng kulay upang matiyak ang visibility sa iba't ibang background at konteksto.

✅ **Audit ang mga focus indicator**: I-tab ang iyong website at tandaan kung aling mga elemento ang may malinaw na focus indicator. Mayroon bang mahirap makita o ganap na nawawala?

### Semantic HTML: Ang Pundasyon ng Accessibility

Ang Semantic HTML ay parang pagbibigay ng GPS system sa mga assistive technologies para sa iyong website. Kapag ginamit mo ang tamang HTML elements para sa kanilang layunin, nagbibigay ka ng detalyadong roadmap sa mga screen reader, keyboard, at iba pang tool upang matulungan ang mga user na mag-navigate nang epektibo.

Narito ang isang analogy na talagang tumatak sa akin: ang semantic HTML ay ang pagkakaiba sa pagitan ng isang maayos na library na may malinaw na kategorya at mga kapaki-pakinabang na palatandaan kumpara sa isang warehouse kung saan ang mga libro ay nakakalat nang random. Parehong may parehong mga libro, ngunit alin ang mas gusto mong hanapan ng isang bagay? Eksakto!

```mermaid
flowchart TD
    A[🏠 HTML Document] --> B[📰 header]
    A --> C[🧭 nav]
    A --> D[📄 main]
    A --> E[📋 footer]
    
    B --> B1[h1: Site Name<br/>Logo & branding]
    C --> C1[ul: Navigation<br/>Primary links]
    D --> D1[article: Content<br/>section: Subsections]
    D --> D2[aside: Sidebar<br/>Related content]
    E --> E1[nav: Footer links<br/>Copyright info]
    
    D1 --> D1a[h1: Page title<br/>h2: Major sections<br/>h3: Subsections]
    
    style A fill:#e3f2fd
    style B fill:#e8f5e8
    style C fill:#fff3e0
    style D fill:#f3e5f5
    style E fill:#e0f2f1
```

**Mga Building Blocks ng Accessible na Istruktura ng Pahina:**

```html
<!-- Landmark elements provide page navigation structure -->
<header>
  <h1>Your Site Name</h1>
  <nav aria-label="Main navigation">
    <ul>
      <li><a href="/home">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/services">Services</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <header>
      <h1>Article Title</h1>
      <p>Published on <time datetime="2024-10-14">October 14, 2024</time></p>
    </header>
    
    <section>
      <h2>First Section</h2>
      <p>Content that relates to this section...</p>
    </section>
    
    <section>
      <h2>Second Section</h2>
      <p>More related content...</p>
    </section>
  </article>
  
  <aside>
    <h2>Related Links</h2>
    <nav aria-label="Related articles">
      <ul>
        <li><a href="/related-1">First related article</a></li>
        <li><a href="/related-2">Second related article</a></li>
      </ul>
    </nav>
  </aside>
</main>

<footer>
  <p>&copy; 2024 Your Site Name. All rights reserved.</p>
  <nav aria-label="Footer links">
    <ul>
      <li><a href="/privacy">Privacy Policy</a></li>
      <li><a href="/contact">Contact Us</a></li>
    </ul>
  </nav>
</footer>
```

**Bakit Binabago ng Semantic HTML ang Accessibility:**

| Semantic Element | Layunin | Benepisyo sa Screen Reader |
|------------------|---------|---------------------------|
| `<header>` | Header ng pahina o seksyon | "Banner landmark" - mabilis na pag-navigate sa itaas |
| `<nav>` | Mga navigation link | "Navigation landmark" - listahan ng mga seksyon ng nav |
| `<main>` | Pangunahing nilalaman ng pahina | "Main landmark" - direktang pagpunta sa nilalaman |
| `<article>` | Self-contained na nilalaman | Inanunsyo ang mga hangganan ng artikulo |
| `<section>` | Mga grupong may tema | Nagbibigay ng istruktura ng nilalaman |
| `<aside>` | Kaugnay na nilalaman sa sidebar | "Complementary landmark" |
| `<footer>` | Footer ng pahina o seksyon | "Contentinfo landmark" |

**Mga Superpower ng Screen Reader gamit ang Semantic HTML:**
- **Landmark navigation**: Tumalon sa pagitan ng mga pangunahing seksyon ng pahina nang mabilis
- **Heading outlines**: Gumawa ng table of contents mula sa istruktura ng heading
- **Element lists**: Gumawa ng listahan ng lahat ng link, button, o form controls
- **Context awareness**: Maunawaan ang mga relasyon sa pagitan ng mga seksyon ng nilalaman

> 🎯 **Mabilis na Pagsubok**: Subukang i-navigate ang iyong site gamit ang screen reader gamit ang mga shortcut sa landmark (D para sa landmark, H para sa heading, K para sa link sa NVDA/JAWS). Ang navigation ba ay may katuturan?

### 🏗️ **Semantic HTML Mastery Check: Pagtatayo ng Matibay na Pundasyon**

**Suriin ang iyong semantic na kaalaman:**
- Kaya mo bang tukuyin ang mga landmark sa isang webpage sa pamamagitan lamang ng pagtingin sa HTML?
- Paano mo ipapaliwanag ang pagkakaiba sa pagitan ng `<section>` at `<div>` sa isang kaibigan?
- Ano ang unang bagay na iyong susuriin kung ang isang screen reader user ay nag-ulat ng problema sa navigation?

```mermaid
stateDiagram-v2
    [*] --> UnsementicHTML: div soup
    UnsementicHTML --> SemanticHTML: Add landmarks
    SemanticHTML --> AccessibleHTML: Test with AT
    AccessibleHTML --> [*]: User success!
    
    note right of UnsementicHTML
        Screen readers lost
        Keyboard nav broken
    end note
    
    note right of AccessibleHTML
        Clear navigation
        Efficient browsing
    end note
```

> **Insight ng Pro**: Ang mahusay na semantic HTML ay awtomatikong nag-aayos ng halos 70% ng mga isyu sa accessibility. Masterin ang pundasyong ito at malayo na ang mararating mo!

✅ **Audit ang iyong semantic na istruktura**: Gamitin ang Accessibility panel sa DevTools ng iyong browser upang tingnan ang accessibility tree at tiyaking ang iyong markup ay lumilikha ng lohikal na istruktura.

### Hierarchy ng Heading: Paglikha ng Lohikal na Outline ng Nilalaman

Ang mga heading ay napakahalaga para sa accessible na nilalaman—parang gulugod na nagtataguyod sa lahat. Ang mga user ng screen reader ay lubos na umaasa sa mga heading upang maunawaan at ma-navigate ang iyong nilalaman. Isipin ito bilang pagbibigay ng table of contents para sa iyong pahina.

**Narito ang gintong tuntunin para sa mga heading:**
Huwag laktawan ang mga level. Palaging magpatuloy nang lohikal mula `<h1>` hanggang `<h2>` hanggang `<h3>`, at iba pa. Tandaan ang paggawa ng mga outline noong nasa paaralan? Parehong prinsipyo—hindi ka lilipat mula sa "I. Pangunahing Punto" diretso sa "C. Sub-sub-point" nang walang "A. Sub-point" sa pagitan, tama?

**Halimbawa ng Perpektong Istruktura ng Heading:**

```html
<!-- ✅ Excellent: Logical, hierarchical progression -->
<main>
  <h1>Complete Guide to Web Accessibility</h1>
  
  <section>
    <h2>Understanding Screen Readers</h2>
    <p>Introduction to screen reader technology...</p>
    
    <h3>Popular Screen Reader Software</h3>
    <p>NVDA, JAWS, and VoiceOver comparison...</p>
    
    <h3>Testing with Screen Readers</h3>
    <p>Step-by-step testing instructions...</p>
  </section>
  
  <section>
    <h2>Color and Contrast Guidelines</h2>
    <p>Designing with sufficient contrast...</p>
    
    <h3>WCAG Contrast Requirements</h3>
    <p>Understanding the different contrast levels...</p>
    
    <h3>Testing Tools and Techniques</h3>
    <p>Tools for verifying contrast ratios...</p>
  </section>
</main>
```

```html
<!-- ❌ Problematic: Skipping levels, inconsistent structure -->
<h1>Page Title</h1>
<h3>Subsection</h3> <!-- Skipped h2 -->
<h2>This should come before h3</h2>
<h1>Another main heading?</h1> <!-- Multiple h1s -->
```

**Mga Praktis para sa Heading:**
- **Isang `<h1>` bawat pahina**: Karaniwang ang pangunahing pamagat ng pahina o pangunahing heading ng nilalaman
- **Lohikal na pag-unlad**: Huwag laktawan ang mga level (h1 → h2 → h3, hindi h1 → h3)
- **Descriptive content**: Gawing makabuluhan ang mga heading kahit basahin nang wala sa konteksto
- **Visual styling gamit ang CSS**: Gamitin ang CSS para sa hitsura, HTML levels para sa istruktura

**Mga Estadistika ng Navigation ng Screen Reader:**
- 68% ng mga user ng screen reader ay nagna-navigate gamit ang mga heading ([WebAIM Survey](https://webaim.org/projects/screenreadersurvey9/#finding))
- Inaasahan ng mga user na makakita ng lohikal na outline ng heading
- Ang mga heading ay nagbibigay ng pinakamabilis na paraan upang maunawaan ang istruktura ng pahina

> 💡 **Tip ng Pro**: Gumamit ng mga browser extension tulad ng "HeadingsMap" upang makita ang istruktura ng iyong heading. Dapat itong basahin tulad ng isang maayos na table of contents.

✅ **Subukan ang istruktura ng iyong heading**: Gamitin ang heading navigation ng screen reader (H key sa NVDA) upang tumalon sa iyong mga heading. Ang pag-unlad ba ay nagsasabi ng kuwento ng iyong nilalaman nang lohikal?

### Mga Advanced na Teknik para sa Visual Accessibility

Lampas sa mga pangunahing kaalaman ng contrast at kulay, may mga sopistikadong teknik na tumutulong sa paglikha ng tunay na inklusibong visual na karanasan. Tinitiyak ng mga pamamaraang ito na gumagana ang iyong nilalaman sa iba't ibang kondisyon ng pagtingin at assistive technologies.

**Mga Mahahalagang Estratehiya sa Visual na Komunikasyon:**

- **Multi-modal feedback**: Pagsamahin ang visual, textual, at minsan audio cues
- **Progressive disclosure**: Ipakita ang impormasyon sa mga digestible chunks
- **Consistent interaction patterns**: Gumamit ng mga pamilyar na UI conventions
- **Responsive typography**: I-scale ang text nang naaangkop sa iba't ibang device
- **Loading at error states**: Magbigay ng malinaw na feedback para sa lahat ng aksyon ng user

**Mga CSS Utility para sa Pinahusay na Accessibility:**

```css
/* Screen reader only text - visually hidden but accessible */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Skip link for keyboard navigation */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: #000000;
  color: #ffffff;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: top 0.3s ease;
  z-index: 1000;
}

.skip-link:focus {
  top: 6px;
}

/* Reduced motion respect */
@media (prefers-reduced-motion: reduce) {
  .skip-link {
    transition: none;
  }
  
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .button {
    border: 2px solid;
  }
}
```

> 🎯 **Accessibility Pattern**: Ang "skip link" ay mahalaga para sa mga user ng keyboard. Dapat itong unang focusable element sa iyong pahina at tumalon diretso sa pangunahing nilalaman.

✅ **Ipatupad ang skip navigation**: Magdagdag ng skip links sa iyong mga pahina at subukan ito sa pamamagitan ng pag-press ng Tab sa sandaling mag-load ang pahina. Dapat itong lumitaw at payagan kang tumalon sa pangunahing nilalaman.

## Paggawa ng Makabuluhang Link Text

Ang mga link ay parang mga highway ng web, ngunit ang hindi maayos na link text ay parang may mga road sign na nagsasabing "Lugar" sa halip na "Downtown Chicago." Hindi masyadong kapaki-pakinabang, di ba?

Narito ang isang bagay na talagang nagulat ako nang una kong malaman ito: ang mga screen reader ay maaaring kunin ang lahat ng mga link mula sa isang pahina at ipakita ang mga ito bilang isang malaking listahan. Isipin kung may nagbigay sa iyo ng direktoryo ng bawat link sa iyong pahina. Ang bawat isa ba ay may kahulugan nang mag-isa? Iyan ang pagsubok na kailangang maipasa ng iyong link text!

### Pag-unawa sa Mga Pattern ng Navigation ng Link

Nag-aalok ang mga screen reader ng makapangyarihang mga feature ng navigation ng link na umaasa sa maayos na link text:

**Mga Paraan ng Navigation ng Link:**
- **Sequential reading**: Ang mga link ay binabasa sa konteksto bilang bahagi ng daloy ng nilalaman
- **Link list generation**: Lahat ng link sa pahina ay pinagsama sa isang searchable directory
- **Quick navigation**: Tumalon sa pagitan ng mga link gamit ang keyboard shortcuts (K sa NVDA)
- **Search functionality**: Hanapin ang mga partikular na link sa pamamagitan ng pag-type ng partial text

**Bakit mahalaga ang konteksto:**
Kapag ang mga user ng screen reader ay bumuo ng listahan ng link, makikita nila ang ganito:
- "I-download ang ulat"
- "Alamin pa"
- "I-click dito"
- "Privacy policy"
- "I-click dito"

Dalawa lamang sa mga link na ito ang nagbibigay ng kapaki-pakinabang na impormasyon kapag binasa nang wala sa konteksto!

> 📊 **Epekto sa User**: Ang mga user ng screen reader ay nag-scan ng mga listahan ng link upang mabilis na maunawaan ang nilalaman ng pahina. Ang generic na link text ay pinipilit silang bumalik sa konteksto ng bawat link, na lubos na nagpapabagal sa kanilang karanasan sa pag-browse.

### Mga Karaniwang Pagkakamali sa Link Text na Dapat Iwasan

Ang pag-unawa sa kung ano ang hindi gumagana ay tumutulong sa iyo na kilalanin at ayusin ang mga isyu sa accessibility sa umiiral na nilalaman.

**❌ Generic na link text na walang konteksto:**

```html
<!-- Meaningless when read from a link list -->
<p>Our sustainability efforts are detailed in our recent report. 
   <a href="/sustainability-2024.pdf">Click here</a> to view it.</p>

<!-- Repeated generic text throughout the page -->
<div class="article-card">
  <h3>Web Accessibility Guide</h3>
  <p>Learn the fundamentals...</p>
  <a href="/accessibility-guide">Read more</a>
</div>
<div class="article-card">
  <h3>Color Contrast Tips</h3>
  <p>Improve your design...</p>
  <a href="/color-contrast">Read more</a>
</div>

<!-- URLs as link text (difficult for screen readers to announce) -->
<p>Visit https://www.w3.org/WAI/WCAG21/quickref/ for WCAG guidelines.</p>

<!-- Vague action words -->
<a href="/contact">Go</a> | <a href="/about">See</a> | <a href="/help">View</a>
```

**Bakit nabigo ang mga pattern na ito:**
- **"I-click dito"** ay walang sinasabi sa mga user tungkol sa destinasyon
- **"Basahin pa"** na inuulit nang maraming beses ay nagdudulot ng kalituhan
- **Raw URLs** ay mahirap bigkasin nang malinaw ng mga screen reader
- **Mga solong salita** tulad ng "Punta" o "Tingnan" ay kulang sa descriptive na konteksto

### Pagsulat ng Mahusay na Link Text

Ang descriptive na link text ay kapaki-pakinabang para sa lahat—ang mga user na may paningin ay maaaring mabilis na mag-scan ng mga link, at ang mga user ng screen reader ay agad na nauunawaan ang mga destinasyon.

**✅ Mga Halimbawa ng Malinaw at Descriptive na Link Text:**

```html
<!-- Descriptive text that explains the destination -->
<p>Our comprehensive <a href="/sustainability-2024.pdf">2024 sustainability report (PDF, 2.1MB)</a> details our environmental initiatives.</p>

<!-- Specific, unique link text for each card -->
<div class="article-card">
  <h3>Web Accessibility Guide</h3>
  <p>Learn the fundamentals of inclusive design...</p>
  <a href="/accessibility-guide">Read our complete web accessibility guide</a>
</div>
<div class="article-card">
  <h3>Color Contrast Tips</h3>
  <p>Improve your design with better color choices...</p>
  <a href="/color-contrast">Explore color contrast best practices</a>
</div>

<!-- Meaningful text instead of raw URLs -->
<p>The <a href="https://www.w3.org/WAI/WCAG21/quickref/">WCAG 2.1 Quick Reference guide</a> provides comprehensive accessibility guidelines.</p>

<!-- Descriptive action links -->
<a href="/contact">Contact our support team</a> | 
<a href="/about">About our company</a> | 
<a href="/help">Get help with your account</a>
```

**Mga Praktis para sa Link Text:**
- **Maging specific**: "I-download ang quarterly financial report" kumpara sa "I-download"
- **Isama ang file type at size**: "(PDF, 1.2MB)" para sa mga downloadable na file
- **Banggitin kung ang mga link ay magbubukas sa labas**: "(magbubukas sa bagong window)" kung naaangkop
- **Gumamit ng active language**: "Makipag-ugnayan sa amin" kumpara sa "Contact page"
- **Panatilihing maikli**: Hangarin ang 2-8 salita kung maaari

### Mga Advanced na Pattern para sa Accessibility ng Link

Minsan ang mga limitasyon sa disenyo ng visual o teknikal na mga kinakailangan ay nangangailangan ng mga espesyal na solusyon. Narito ang mga sopistikadong teknik para sa mga karaniwang hamon:

**Paggamit ng ARIA para sa Pinahusay na Konteksto:**

```html
<!-- When button text must be short but needs more context -->
<a href="/report.pdf" 
   aria-label="Download 2024 annual financial report, PDF format, 2.3MB">
  Download Report
</a>

<!-- When the full context comes from surrounding content -->
<h3 id="sustainability-heading">Sustainability Initiative</h3>
<p>Our efforts to reduce environmental impact...</p>
<a href="/sustainability-details" 
   aria-labelledby="sustainability-heading"
   aria-describedby="sustainability-summary">
  Learn more
</a>
<p id="sustainability-summary">Detailed breakdown of our 2024 environmental goals and achievements</p>
```

**Pagpapahiwatig ng mga Uri ng File at Panlabas na Destinasyon:**

```html
<!-- Method 1: Include information in visible link text -->
<a href="/annual-report.pdf">
  Download our 2024 annual report (PDF, 2.3MB)
</a>

<!-- Method 2: Use screen reader-only text for file details -->
<a href="/annual-report.pdf">
  Download our 2024 annual report
  <span class="sr-only">(PDF format, 2.3MB)</span>
</a>

<!-- Method 3: External link indication -->
<a href="https://example.com" 
   target="_blank" 
   aria-describedby="external-link-warning">
  Visit external resource
</a>
<span id="external-link-warning" class="sr-only">
  (opens in new window)
</span>

<!-- Method 4: Using CSS for visual indicators -->
<a href="https://example.com" class="external-link">
  External resource
</a>
```

```css
/* Visual indicator for external links */
.external-link::after {
  content: " ↗";
  font-size: 0.8em;
  color: #666;
}

/* Screen reader announcement for external links */
.external-link::before {
  content: "External link: ";
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
```

> ⚠️ **Mahalaga**: Kapag gumagamit ng `target="_blank"`, palaging ipaalam sa mga user na ang link ay magbubukas sa bagong window o tab. Ang hindi inaasahang pagbabago sa navigation ay maaaring magdulot ng pagkalito.

✅ **Subukan ang konteksto ng iyong link**: Gamitin ang developer tools ng iyong browser upang bumuo ng listahan ng lahat ng link sa iyong pahina. Nauunawaan mo ba ang layunin ng bawat link nang walang anumang nakapaligid na konteksto?

## ARIA: Pagpapalakas ng HTML Accessibility

[Accessible Rich Internet Applications (ARIA)](https://developer.mozilla.org/docs/Web/Accessibility/ARIA) ay parang universal translator sa pagitan ng iyong mga kumplikadong web application at assistive technologies. Kapag hindi maipahayag ng HTML ang lahat ng ginagawa ng iyong mga interactive na component, ang ARIA ang pumupuno sa mga puwang.

Iniisip ko ang ARIA bilang pagdaragdag ng mga kapaki-pakinabang na annotation sa iyong HTML—parang mga direksyon sa entablado sa isang script ng dula na tumutulong sa mga aktor na maunawaan ang kanilang mga papel at relasyon.

**Narito ang pinakamahalagang tuntunin tungkol sa ARIA**: Palaging gumamit muna ng semantic HTML, pagkatapos ay magdagdag ng ARIA upang mapahusay ito. Isipin ang ARIA bilang pampalasa, hindi ang pangunahing ulam. Dapat nitong linawin at pagandahin ang istruktura ng iyong HTML, hindi kailanman palitan ito. Unahin ang tamang pundasyon!

### Strategic na Implementasyon ng ARIA

Ang ARIA ay makapangyarihan, ngunit may kasamang responsibilidad ang kapangyarihan. Ang maling ARIA ay maaaring magpalala ng accessibility kaysa sa wala. Narito kung kailan at paano ito gamitin nang epektibo:

**✅ Gumamit ng ARIA kapag:**
- Gumagawa ng custom na interactive widgets (accordions, tabs, carousels)
- Gumagawa ng dynamic na nilalaman na nagbabago nang walang page reloads
- Nagbibigay ng karagdagang konteksto
**Ang limang kategorya ng ARIA:**

1. **Roles**: Ano ang elementong ito? (`button`, `tab`, `dialog`)
2. **Properties**: Ano ang mga katangian nito? (`aria-required`, `aria-haspopup`)
3. **States**: Ano ang kasalukuyang kondisyon nito? (`aria-expanded`, `aria-checked`)
4. **Landmarks**: Nasaan ito sa istruktura ng pahina? (`banner`, `navigation`, `main`)
5. **Live regions**: Paano dapat ipahayag ang mga pagbabago? (`aria-live`, `aria-atomic`)

### Mahahalagang ARIA pattern para sa modernong web apps

Ang mga pattern na ito ay nag-aalok ng solusyon sa mga karaniwang hamon sa accessibility ng mga interactive na web application:

**Pagbibigay ng pangalan at paglalarawan sa mga elemento:**

```html
<!-- aria-label: Provides accessible name when visible text isn't sufficient -->
<button aria-label="Close newsletter subscription dialog">×</button>

<!-- aria-labelledby: References existing text as the accessible name -->
<section aria-labelledby="news-heading">
  <h2 id="news-heading">Latest News</h2>
  <!-- news content -->
</section>

<!-- aria-describedby: Links to additional descriptive text -->
<input type="password" 
       aria-describedby="pwd-requirements pwd-strength"
       required>
<div id="pwd-requirements">
  Password must contain at least 8 characters, including uppercase, lowercase, and numbers.
</div>
<div id="pwd-strength" aria-live="polite">
  <!-- Dynamic password strength indicator -->
</div>
```

**Live regions para sa dynamic na nilalaman:**

```html
<!-- Polite announcements (don't interrupt current speech) -->
<div aria-live="polite" id="status-updates">
  <!-- Status messages appear here -->
</div>

<!-- Assertive announcements (interrupt and announce immediately) -->
<div aria-live="assertive" id="urgent-alerts">
  <!-- Error messages and critical alerts -->
</div>

<!-- Loading states with live regions -->
<button id="submit-btn" aria-describedby="loading-status">
  Submit Application
</button>
<div id="loading-status" aria-live="polite" aria-atomic="true">
  <!-- "Processing your application..." appears here -->
</div>
```

**Halimbawa ng interactive widget (accordion):**

```html
<div class="accordion">
  <h3>
    <button aria-expanded="false" 
            aria-controls="panel-1" 
            id="accordion-trigger-1"
            class="accordion-trigger">
      Accessibility Guidelines
    </button>
  </h3>
  <div id="panel-1" 
       role="region"
       aria-labelledby="accordion-trigger-1" 
       hidden>
    <p>WCAG 2.1 provides comprehensive guidelines...</p>
  </div>
</div>
```

```javascript
// JavaScript to manage accordion state
function toggleAccordion(trigger) {
  const panel = document.getElementById(trigger.getAttribute('aria-controls'));
  const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
  
  // Toggle states
  trigger.setAttribute('aria-expanded', !isExpanded);
  panel.hidden = isExpanded;
  
  // Announce change to screen readers
  const status = document.getElementById('status-updates');
  status.textContent = isExpanded ? 'Section collapsed' : 'Section expanded';
}
```

### Mga pinakamahusay na kasanayan sa implementasyon ng ARIA

Makapangyarihan ang ARIA ngunit nangangailangan ng maingat na implementasyon. Ang pagsunod sa mga alituntuning ito ay nakakatulong upang masigurong ang ARIA ay nagpapabuti sa halip na nakakasama sa accessibility:

**🛡️ Mga pangunahing prinsipyo:**

```mermaid
flowchart TD
    A[🚀 Start with semantic HTML] --> B{Does HTML provide needed semantics?}
    B -->|Yes| C[✅ Use HTML only]
    B -->|No| D[Consider ARIA enhancement]
    D --> E{Can you achieve it with simpler means?}
    E -->|Yes| F[🔄 Simplify approach]
    E -->|No| G[📝 Implement ARIA carefully]
    G --> H[🧪 Test with real AT]
    H --> I{Works as expected?}
    I -->|No| J[🔧 Debug and fix]
    I -->|Yes| K[✅ Success!]
    J --> H
    F --> C
    
    style A fill:#e3f2fd
    style C fill:#e8f5e8
    style K fill:#e8f5e8
    style G fill:#fff3e0
    style H fill:#f3e5f5
```

1. **Semantic HTML muna**: Laging piliin ang `<button>` kaysa sa `<div role="button">`
2. **Huwag sirain ang semantika**: Huwag kailanman baguhin ang umiiral na kahulugan ng HTML (iwasan ang `<h1 role="button">`)
3. **Panatilihin ang keyboard accessibility**: Ang lahat ng interactive na ARIA elements ay dapat ganap na naa-access gamit ang keyboard
4. **Subukan sa totoong mga user**: Ang suporta sa ARIA ay lubos na nagkakaiba sa pagitan ng mga assistive technologies
5. **Magsimula sa simple**: Ang mga komplikadong implementasyon ng ARIA ay mas malamang na magkamali

**🔍 Workflow sa pagsusuri:**

```mermaid
graph TD
    A[Write ARIA code] --> B[Validate HTML]
    B --> C[Test with keyboard only]
    C --> D[Test with screen reader]
    D --> E[Test across browsers]
    E --> F{Issues found?}
    F -->|Yes| G[Fix and re-test]
    F -->|No| H[Implementation complete]
    G --> B
```

**🚫 Karaniwang mga pagkakamali sa ARIA na dapat iwasan:**

- **Magkakasalungat na impormasyon**: Huwag kontrahin ang semantika ng HTML
- **Sobrang pag-label**: Ang sobrang impormasyon ng ARIA ay nakakalito sa mga user
- **Static ARIA**: Nakakalimutang i-update ang mga estado ng ARIA kapag nagbago ang nilalaman
- **Hindi nasubukang implementasyon**: ARIA na gumagana sa teorya ngunit pumapalya sa aktwal na paggamit
- **Kakulangan sa suporta sa keyboard**: Mga ARIA roles na walang kaukulang interaksyon sa keyboard

> 💡 **Mga Resource sa Pagsusuri**: Gumamit ng mga tool tulad ng [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) para sa automated na pagsusuri ng ARIA, ngunit laging subukan gamit ang totoong screen readers para sa kumpletong karanasan.

### 🎭 **Pagsusuri ng Kasanayan sa ARIA: Handa Ka Na Ba sa Mas Komplikadong Interaksyon?**

**Sukatin ang iyong kumpiyansa sa ARIA:**
- Kailan mo pipiliin ang ARIA kaysa sa semantic HTML? (Tip: halos hindi kailanman!)
- Kaya mo bang ipaliwanag kung bakit ang `<div role="button">` ay kadalasang mas masama kaysa sa `<button>`?
- Ano ang pinakamahalagang bagay na dapat tandaan tungkol sa pagsusuri ng ARIA?

```mermaid
pie title "Common ARIA Usage Patterns"
    "Labels & Descriptions" : 40
    "Live Regions" : 25
    "Widget States" : 20
    "Complex Controls" : 15
```

> **Mahalagang pananaw**: Karamihan sa paggamit ng ARIA ay para sa pag-label at paglalarawan ng mga elemento. Ang mga komplikadong pattern ng widget ay mas hindi karaniwan kaysa sa inaakala mo!

✅ **Matuto mula sa mga eksperto**: Pag-aralan ang [ARIA Authoring Practices Guide](https://w3c.github.io/aria-practices/) para sa mga subok na pattern at implementasyon ng mga komplikadong interactive na widget.

## Pagiging Accessible ng Mga Imahe at Media

Ang visual at audio na nilalaman ay mahalagang bahagi ng modernong karanasan sa web, ngunit maaari itong magdulot ng hadlang kung hindi maingat na na-implementa. Ang layunin ay masigurong ang impormasyon at emosyonal na epekto ng iyong media ay maabot ang bawat user. Kapag nasanay ka na, nagiging natural na ito.

Iba't ibang uri ng media ang nangangailangan ng iba't ibang diskarte sa accessibility. Parang pagluluto—hindi mo ituturing ang isang maselan na isda sa parehong paraan ng isang masarap na steak. Ang pag-unawa sa mga pagkakaibang ito ay nakakatulong sa iyong pumili ng tamang solusyon para sa bawat sitwasyon.

### Diskarte sa accessibility ng imahe

Ang bawat imahe sa iyong website ay may layunin. Ang pag-unawa sa layuning iyon ay nakakatulong sa iyong magsulat ng mas mahusay na alternatibong teksto at lumikha ng mas inklusibong karanasan.

**Ang apat na uri ng imahe at ang kanilang mga estratehiya sa alt text:**

**Mga impormatibong imahe** - nagbibigay ng mahalagang impormasyon:
```html
<img src="../../../../translated_images/tl/chart.31c7eb0eb5c4450deba10b6f236732dfee8e8a11f6c0d8f31d2c2efb9d4c00ef.png" alt="Sales increased 25% from Q1 to Q2 2024">
```

**Mga pandekorasyong imahe** - purong visual na walang halaga sa impormasyon:
```html
<img src="../../../../translated_images/tl/decorative-border.b2f3c4d6634fb79d57fb6357835906c16938df3d5651c1314c196c3b1c52df98.png" alt="" role="presentation">
```

**Mga functional na imahe** - nagsisilbing mga button o kontrol:
```html
<button>
  <img src="search-icon.svg" alt="Search">
</button>
```

**Mga komplikadong imahe** - mga chart, diagram, infographics:
```html
<img src="../../../../translated_images/tl/complex-chart.c831f461a363b446a688be5ccacde20d011221758c902cb082cfd4293534ef17.png" alt="Quarterly sales data" aria-describedby="chart-description">
<div id="chart-description">
  <p>Detailed description: Sales data shows a steady increase across all quarters...</p>
</div>
```

### Accessibility ng video at audio

**Mga kinakailangan sa video:**
- **Captions**: Tekstong bersyon ng nilalaman na sinasabi at mga sound effects
- **Audio descriptions**: Pagkukuwento ng mga visual na elemento para sa mga bulag na user
- **Transcripts**: Buong tekstong bersyon ng lahat ng audio at visual na nilalaman

```html
<video controls>
  <source src="video.mp4" type="video/mp4">
  <track kind="captions" src="captions.vtt" srclang="en" label="English">
  <track kind="descriptions" src="descriptions.vtt" srclang="en" label="Audio descriptions">
</video>
```

**Mga kinakailangan sa audio:**
- **Transcripts**: Tekstong bersyon ng lahat ng sinasabi
- **Visual indicators**: Para sa audio-only na nilalaman, magbigay ng visual na palatandaan

### Modernong teknolohiya sa imahe

**Paggamit ng CSS para sa pandekorasyong mga imahe:**
```css
.hero-section {
  background-image: url('decorative-hero.jpg');
  /* Decorative images in CSS don't need alt text */
}
```

**Mga responsive na imahe na may accessibility:**
```html
<picture>
  <source media="(min-width: 800px)" srcset="large-chart.png">
  <source media="(min-width: 400px)" srcset="medium-chart.png">
  <img src="../../../../translated_images/tl/small-chart.c50c7b1bbcce43d8d24fbfbab8f691fe47d8f25fb7c70857c9eae21d5f22862e.png" alt="Website traffic increased 40% after accessibility improvements">
</picture>
```

✅ **Subukan ang accessibility ng imahe**: Gumamit ng screen reader upang mag-navigate sa isang pahina na may mga imahe. Nakakakuha ka ba ng sapat na impormasyon upang maunawaan ang nilalaman?

## Keyboard navigation at focus management

Maraming user ang nagna-navigate sa web gamit lamang ang kanilang mga keyboard. Kasama rito ang mga taong may motor disabilities, mga power user na mas mabilis gumamit ng keyboard kaysa sa mouse, at sinumang nasira ang mouse. Ang pagtiyak na gumagana nang maayos ang iyong site gamit ang input ng keyboard ay mahalaga at kadalasang nagpapabuti sa karanasan ng lahat.

```mermaid
flowchart LR
    A[⌨️ Keyboard Navigation] --> B[Tab Order]
    A --> C[Focus Indicators]
    A --> D[Skip Links]
    A --> E[Keyboard Shortcuts]
    
    B --> B1[Logical sequence<br/>All interactive elements<br/>No tab traps]
    C --> C1[Visible outlines<br/>High contrast<br/>Clear boundaries]
    D --> D1[Skip to main<br/>Skip to nav<br/>Bypass repetitive]
    E --> E1[Escape to close<br/>Enter to activate<br/>Arrows in groups]
    
    style A fill:#e3f2fd
    style B fill:#e8f5e8
    style C fill:#fff3e0
    style D fill:#f3e5f5
    style E fill:#e0f2f1
```

### Mahahalagang pattern sa keyboard navigation

**Karaniwang interaksyon sa keyboard:**
- **Tab**: Lumipat ng focus pasulong sa mga interactive na elemento
- **Shift + Tab**: Lumipat ng focus pabalik
- **Enter**: I-activate ang mga button at link
- **Space**: I-activate ang mga button, i-check ang mga checkbox
- **Arrow keys**: Mag-navigate sa loob ng mga grupo ng component (radio buttons, menus)
- **Escape**: Isara ang modals, dropdowns, o kanselahin ang mga operasyon

### Mga pinakamahusay na kasanayan sa focus management

**Mga nakikitang focus indicators:**
```css
/* Ensure focus is always visible */
button:focus-visible {
  outline: 2px solid #4A90A4;
  outline-offset: 2px;
}

/* Custom focus styles for different components */
.card:focus-within {
  box-shadow: 0 0 0 3px rgba(74, 144, 164, 0.5);
}
```

**Skip links para sa mas epektibong navigation:**
```html
<a href="#main-content" class="skip-link">Skip to main content</a>
<a href="#navigation" class="skip-link">Skip to navigation</a>

<nav id="navigation">
  <!-- navigation content -->
</nav>
<main id="main-content">
  <!-- main content -->
</main>
```

**Tamang tab order:**
```html
<!-- Use semantic HTML for natural tab order -->
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" tabindex="0">
  
  <label for="email">Email:</label>
  <input type="email" id="email" tabindex="0">
  
  <button type="submit" tabindex="0">Submit</button>
</form>
```

### Focus trapping sa modals

Kapag nagbukas ng modal dialogs, ang focus ay dapat manatili sa loob ng modal:

```javascript
// Modern focus trap implementation
function trapFocus(element) {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  element.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
    
    if (e.key === 'Escape') {
      closeModal();
    }
  });
  
  // Focus first element when modal opens
  firstElement.focus();
}
```

✅ **Subukan ang keyboard navigation**: Subukang mag-navigate sa iyong website gamit lamang ang Tab key. Maaabot mo ba ang lahat ng interactive na elemento? Ang order ng focus ba ay lohikal? Ang mga focus indicators ba ay malinaw na nakikita?

## Accessibility ng Form

Ang mga form ay mahalaga para sa interaksyon ng user at nangangailangan ng espesyal na atensyon sa accessibility.

### Pag-uugnay ng label at form control

**Ang bawat form control ay nangangailangan ng label:**
```html
<!-- Explicit labeling (preferred) -->
<label for="username">Username:</label>
<input type="text" id="username" name="username" required>

<!-- Implicit labeling -->
<label>
  Password:
  <input type="password" name="password" required>
</label>

<!-- Using aria-label when visual label isn't desired -->
<input type="search" aria-label="Search products" placeholder="Search...">
```

### Error handling at validation

**Accessible na mga mensahe ng error:**
```html
<label for="email">Email Address:</label>
<input type="email" id="email" name="email" 
       aria-describedby="email-error" 
       aria-invalid="true" required>
<div id="email-error" role="alert">
  Please enter a valid email address
</div>
```

**Mga pinakamahusay na kasanayan sa form validation:**
- Gumamit ng `aria-invalid` upang ipakita ang mga invalid na field
- Magbigay ng malinaw at tiyak na mga mensahe ng error
- Gumamit ng `role="alert"` para sa mahahalagang anunsyo ng error
- Ipakita ang mga error parehong agad-agad at sa pag-submit ng form

### Fieldsets at pag-group

**I-group ang mga kaugnay na form controls:**
```html
<fieldset>
  <legend>Shipping Address</legend>
  <label for="street">Street Address:</label>
  <input type="text" id="street" name="street">
  
  <label for="city">City:</label>
  <input type="text" id="city" name="city">
</fieldset>

<fieldset>
  <legend>Preferred Contact Method</legend>
  <input type="radio" id="contact-email" name="contact" value="email">
  <label for="contact-email">Email</label>
  
  <input type="radio" id="contact-phone" name="contact" value="phone">
  <label for="contact-phone">Phone</label>
</fieldset>
```

## Ang Iyong Accessibility Journey: Mga Pangunahing Aral

Binabati kita! Nakuha mo na ang mga pangunahing kaalaman upang lumikha ng tunay na inklusibong karanasan sa web. Napaka-exciting nito! Ang web accessibility ay hindi lamang tungkol sa pagsunod sa mga regulasyon—ito ay tungkol sa pagkilala sa iba't ibang paraan ng interaksyon ng mga tao sa digital na nilalaman at pagdidisenyo para sa kamangha-manghang kompleksidad na iyon.

Ikaw ngayon ay bahagi ng lumalaking komunidad ng mga developer na nauunawaan na ang mahusay na disenyo ay para sa lahat. Maligayang pagdating sa club!

**🎯 Ang iyong accessibility toolkit ngayon ay naglalaman ng:**

| Pangunahing Prinsipyo | Implementasyon | Epekto |
|----------------|----------------|---------|
| **Semantic HTML Foundation** | Gumamit ng tamang HTML elements para sa kanilang layunin | Ang mga screen reader ay maaaring mag-navigate nang epektibo, ang mga keyboard ay awtomatikong gumagana |
| **Inclusive Visual Design** | Sapat na contrast, makabuluhang paggamit ng kulay, nakikitang focus indicators | Malinaw para sa lahat sa anumang kondisyon ng ilaw |
| **Descriptive Content** | Makabuluhang link text, alt text, headings | Nauunawaan ng mga user ang nilalaman kahit walang visual na konteksto |
| **Keyboard Accessibility** | Tab order, keyboard shortcuts, focus management | Accessibility para sa motor at kahusayan ng power user |
| **ARIA Enhancement** | Strategic na paggamit upang punan ang semantic gaps | Gumagana ang mga komplikadong application sa assistive technologies |
| **Comprehensive Testing** | Automated tools + manual verification + real user testing | Natutukoy ang mga isyu bago makaapekto sa mga user |

**🚀 Ang iyong susunod na hakbang:**

1. **Isama ang accessibility sa iyong workflow**: Gawing natural na bahagi ng iyong proseso ng development ang pagsusuri
2. **Matuto mula sa totoong mga user**: Humingi ng feedback mula sa mga taong gumagamit ng assistive technologies
3. **Manatiling updated**: Ang mga teknik sa accessibility ay patuloy na nagbabago kasabay ng mga bagong teknolohiya at pamantayan
4. **I-promote ang inclusivity**: Ibahagi ang iyong kaalaman at gawing prayoridad ng team ang accessibility

> 💡 **Tandaan**: Ang mga limitasyon sa accessibility ay kadalasang nagdudulot ng makabago at eleganteng solusyon na kapaki-pakinabang para sa lahat. Ang curb cuts, captions, at voice controls ay nagsimula bilang mga feature sa accessibility at naging mainstream na mga pagpapabuti.

**Ang business case ay malinaw na malinaw**: Ang mga accessible na website ay umaabot sa mas maraming user, mas mataas ang ranggo sa search engines, mas mababa ang gastos sa maintenance, at iniiwasan ang mga legal na panganib. Ngunit sa totoo lang? Ang tunay na dahilan para magmalasakit sa accessibility ay mas malalim pa. Ang mga accessible na website ay sumasalamin sa pinakamahusay na mga halaga ng web—pagiging bukas, inclusivity, at ang ideya na ang lahat ay nararapat sa pantay na access sa impormasyon.

Ikaw ay handa nang bumuo ng inklusibong web ng hinaharap. Ang bawat accessible na site na iyong nilikha ay ginagawang mas welcoming ang internet para sa lahat. Napaka-amazing kapag iniisip mo ito!

## Karagdagang Resources

Ipagpatuloy ang iyong pag-aaral sa accessibility gamit ang mga mahahalagang resources na ito:

**📚 Opisyal na Pamantayan at Gabay:**
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Ang opisyal na pamantayan sa accessibility na may quick reference
- [ARIA Authoring Practices Guide](https://w3c.github.io/aria-practices/) - Komprehensibong pattern para sa mga interactive na widget
- [WebAIM Guidelines](https://webaim.org/) - Praktikal at madaling maunawaan na gabay sa accessibility

**🛠️ Mga Tool at Resource sa Pagsusuri:**
- [axe DevTools](https://www.deque.com/axe/devtools/) - Industry-standard na pagsusuri sa accessibility
- [A11y Project Checklist](https://www.a11yproject.com/checklist/) - Step-by-step na pagsusuri sa accessibility
- [Accessibility Insights](https://accessibilityinsights.io/) - Komprehensibong testing suite ng Microsoft
- [Color Oracle](https://colororacle.org/) - Simulator ng color blindness para sa pagsusuri ng disenyo

**🎓 Pag-aaral at Komunidad:**
- [WebAIM Screen Reader Survey](https://webaim.org/projects/screenreadersurvey9/) - Mga totoong preference at behavior ng user
- [Inclusive Components](https://inclusive-components.design/) - Modernong accessible na component patterns
- [A11y Coffee](https://a11y.coffee/) - Mga mabilisang accessibility tips at insights
- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/) - Komprehensibong resources sa accessibility ng W3C

**🎥 Hands-on Learning:**
- [Accessibility Developer Guide](https://www.accessibility-developer-guide.com/) - Praktikal na gabay sa implementasyon
- [Deque University](https://dequeuniversity.com/) - Mga propesyonal na kurso sa accessibility training

## Hamon ng GitHub Copilot Agent 🚀

Gamitin ang Agent mode upang tapusin ang sumusunod na hamon:

**Deskripsyon:** Gumawa ng isang accessible na modal dialog component na nagpapakita ng tamang focus management, ARIA attributes, at mga pattern ng keyboard navigation.

**Prompt:** Bumuo ng kumpletong modal dialog component gamit ang HTML, CSS, at JavaScript na may kasamang: tamang focus trapping, ESC key para isara, pag-click sa labas para isara, ARIA attributes para sa screen readers, at nakikitang focus indicators. Siguraduhing ang component ay sumusunod sa WCAG 2.1 AA standards.


## 🚀 Hamon

Gamitin ang HTML na ito at isulat muli ito upang maging mas accessible, gamit ang mga estratehiyang natutunan mo.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Turtle Ipsum - The World's Premier Turtle Fan Club</title>
    <link href='../assets/style.css' rel='stylesheet' type='text/css'>
  </head>
  <body>
    <header class="site-header">
      <h1 class="site-title">Turtle Ipsum</h1>
      <p class="site-subtitle">The World's Premier Turtle Fan Club</p>
    </header>
    
    <nav class="main-nav" aria-label="Main navigation">
      <h2 class="nav-header">Resources</h2>
      <ul class="nav-list">
        <li><a href="https://www.youtube.com/watch?v=CMNry4PE93Y">"I like turtles" video</a></li>
        <li><a href="https://en.wikipedia.org/wiki/Turtle">Basic turtle information</a></li>
        <li><a href="https://en.wikipedia.org/wiki/Turtles_(chocolate)">Chocolate turtles candy</a></li>
      </ul>
    </nav>
    
    <main class="main-content">
      <article>
        <h1>Welcome to Turtle Ipsum</h1>
        <p class="intro">
          <a href="/about">Learn more about our turtle community</a> and discover fascinating facts about these amazing creatures.
        </p>
        <p class="article-text">
          Turtle ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </article>
    </main>
    
    <footer class="footer">
      <section class="newsletter-signup">
        <h2>Stay Updated</h2>
        <button type="button" onclick="showNewsletterForm()">Sign up for turtle news</button>
      </section>
      
      <nav class="footer-nav" aria-label="Footer navigation">
        <h2>Site Pages</h2>
        <ul>
          <li><a href="../">Home</a></li>
          <li><a href="../semantic">Semantic HTML example</a></li>
        </ul>
      </nav>
      
      <p class="footer-copyright">&copy; 2024 Instrument. All rights reserved.</p>
    </footer>
  </body>
</html>
```

**Mga pangunahing pagpapabuti na ginawa:**
- Idinagdag ang tamang semantic HTML structure
- Inayos ang hierarchy ng heading (isang h1, lohikal na progression)
- Idinagdag ang makabuluhang link text sa halip na "click here"
- Isinama ang tamang ARIA labels para sa navigation
- Idinagdag ang lang attribute at tamang meta tags
- Gumamit ng button element para sa mga interactive na elemento
- Inayos ang footer content gamit ang tamang landmarks

## Post-Lecture Quiz
[Post-lecture quiz](https://ff-quizzes.netlify.app/web/en/)

## Review at Pag-aaral sa Sarili

Maraming gobyerno ang may mga batas tungkol sa mga kinakailangan sa accessibility. Magbasa tungkol sa mga batas sa accessibility ng iyong bansa. Ano ang saklaw, at ano ang hindi? Halimbawa ay [ang website ng gobyerno na ito](https://accessibility.blog.gov.uk/).

## Assignment
 
[Pag-aralan ang isang hindi-accessible na website](assignment.md)

Credits: [Turtle Ipsum](https://github.com/Instrument/semantic-html-sample) by Instrument

---

## 🚀 Ang Iyong Timeline sa Accessibility Mastery

### ⚡ **Ano ang Magagawa Mo sa Susunod na 5 Minuto**
- [ ] I-install ang axe DevTools extension sa iyong browser
- [ ] Magpatakbo ng Lighthouse accessibility audit sa iyong paboritong website
- [ ] Subukang mag-navigate sa anumang website gamit lamang ang Tab key
- [ ] Subukan ang built-in na screen reader ng iyong browser (Narrator/VoiceOver)

### 🎯 **Ano ang Maaaring Magawa Mo sa Loob ng Isang Oras**
- [ ] Kumpletuhin ang post-lesson quiz at pagnilayan ang mga insight sa accessibility
- [ ] Magpraktis sa pagsusulat ng makabuluhang alt text para sa 10 iba't ibang imahe
- [ ] Mag-audit ng heading structure ng isang website gamit ang HeadingsMap extension
- [ ] Ayusin ang mga isyu sa accessibility na natagpuan sa challenge HTML
- [ ] Subukan ang color contrast sa iyong kasalukuyang proyekto gamit ang tool ng WebAIM

### 📅 **Ang Iyong Accessibility Journey sa Loob ng Isang Linggo**
- [ ] Kumpletuhin ang assignment sa pagsusuri ng isang hindi-accessible na website
- [ ] I-set up ang iyong development environment gamit ang mga tool sa pagsusuri ng accessibility
- [ ] Magpraktis ng pag-navigate gamit ang keyboard sa 5 iba't ibang kumplikadong website  
- [ ] Gumawa ng simpleng form na may tamang mga label, error handling, at ARIA  
- [ ] Sumali sa isang accessibility community (A11y Slack, WebAIM forum)  
- [ ] Manood ng mga totoong gumagamit na may kapansanan habang nagna-navigate sa mga website (May magagandang halimbawa sa YouTube)  

### 🌟 **Ang Iyong Buwanang Transformasyon**  
- [ ] Isama ang accessibility testing sa iyong development workflow  
- [ ] Mag-ambag sa isang open source project sa pamamagitan ng pag-aayos ng mga isyu sa accessibility  
- [ ] Magsagawa ng usability testing kasama ang isang taong gumagamit ng assistive technology  
- [ ] Gumawa ng accessible component library para sa iyong team  
- [ ] Magtaguyod ng accessibility sa iyong workplace o komunidad  
- [ ] Mag-mentor ng isang baguhan sa mga konsepto ng accessibility  

### 🏆 **Huling Check-in ng Accessibility Champion**  

**I-celebrate ang iyong accessibility journey:**  
- Ano ang pinaka-nakakagulat na bagay na natutunan mo tungkol sa kung paano ginagamit ng mga tao ang web?  
- Aling prinsipyo ng accessibility ang pinaka-nauugnay sa iyong estilo ng pag-develop?  
- Paano nabago ng pag-aaral tungkol sa accessibility ang iyong pananaw sa disenyo?  
- Ano ang unang accessibility improvement na nais mong gawin sa isang totoong proyekto?  

```mermaid
journey
    title Your Accessibility Confidence Evolution
    section Today
      Overwhelmed: 3: You
      Curious: 4: You
      Motivated: 5: You
    section This Week
      Practicing: 4: You
      Testing: 5: You
      Understanding: 5: You
    section Next Month
      Advocating: 5: You
      Leading: 5: You
      Inclusive by Default: 5: You
```
  
> 🌍 **Ikaw na ngayon ay isang accessibility champion!** Nauunawaan mo na ang magagandang karanasan sa web ay gumagana para sa lahat, anuman ang paraan ng kanilang pag-access sa web. Ang bawat accessible na feature na iyong ginagawa ay nagiging mas inklusibo ang internet. Kailangan ng web ang mga developer na tulad mo na nakikita ang accessibility hindi bilang isang limitasyon, kundi bilang isang pagkakataon upang lumikha ng mas magagandang karanasan para sa lahat ng gumagamit. Maligayang pagdating sa kilusan! 🎉  

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat sinisikap naming maging tumpak, pakitandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi eksaktong pagsasalin. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na pinagmulan. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.