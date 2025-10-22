<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "92c4431eac70670b0450b02c1d11279a",
  "translation_date": "2025-10-22T15:31:19+00:00",
  "source_file": "3-terrarium/2-intro-to-css/README.md",
  "language_code": "tl"
}
-->
# Proyekto ng Terrarium Bahagi 2: Panimula sa CSS

![Panimula sa CSS](../../../../translated_images/webdev101-css.3f7af5991bf53a200d79e7257e5e450408d8ea97f5b531d31b2e3976317338ee.tl.png)
> Sketchnote ni [Tomomi Imura](https://twitter.com/girlie_mac)

Naalala mo ba kung gaano kasimple ang hitsura ng iyong HTML terrarium? Sa CSS, binabago natin ang simpleng istruktura na iyon upang maging mas kaakit-akit sa paningin.

Kung ang HTML ay parang pagbuo ng balangkas ng isang bahay, ang CSS naman ang lahat ng nagpapaganda dito - ang mga kulay ng pintura, ang ayos ng mga kasangkapan, ang ilaw, at kung paano magkakaugnay ang mga silid. Isipin kung paano nagsimula ang Palasyo ng Versailles bilang isang simpleng hunting lodge, ngunit sa maingat na pag-aayos at disenyo, ito ay naging isa sa pinakamagnificenteng gusali sa mundo.

Ngayon, babaguhin natin ang iyong terrarium mula sa functional patungo sa polished. Matututo kang magposisyon ng mga elemento nang eksakto, gawing responsive ang mga layout sa iba't ibang laki ng screen, at lumikha ng visual na kaakit-akit na nagpapaganda sa mga website.

Sa pagtatapos ng araling ito, makikita mo kung paano ang maingat na pag-istilo gamit ang CSS ay maaaring lubos na mapabuti ang iyong proyekto. Magdagdag na tayo ng estilo sa iyong terrarium.

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/17)

## Pagsisimula sa CSS

Ang CSS ay madalas na iniisip bilang "pagpapaganda ng mga bagay," ngunit ito ay may mas malawak na layunin. Ang CSS ay parang pagiging direktor ng isang pelikula - kontrolado mo hindi lamang kung paano ang hitsura ng lahat, kundi pati na rin kung paano ito gumagalaw, tumutugon sa interaksyon, at umaangkop sa iba't ibang sitwasyon.

Ang modernong CSS ay napakahusay. Maaari kang magsulat ng code na awtomatikong inaayos ang mga layout para sa mga telepono, tablet, at desktop computer. Maaari kang lumikha ng makinis na animasyon na gumagabay sa atensyon ng mga user kung saan kinakailangan. Ang resulta ay maaaring maging kahanga-hanga kapag ang lahat ay nagtutulungan.

> 💡 **Pro Tip**: Ang CSS ay patuloy na nagbabago sa mga bagong tampok at kakayahan. Palaging suriin ang [CanIUse.com](https://caniuse.com) upang i-verify ang suporta ng browser para sa mga mas bagong tampok ng CSS bago gamitin ang mga ito sa mga production project.

**Narito ang mga gagawin natin sa araling ito:**
- **Lumikha** ng kumpletong visual na disenyo para sa iyong terrarium gamit ang mga modernong teknik sa CSS
- **Suriin** ang mga pangunahing konsepto tulad ng cascade, inheritance, at CSS selectors
- **Ipatupad** ang mga responsive na estratehiya sa pagposisyon at layout
- **Bumuo** ng terrarium container gamit ang mga hugis at estilo ng CSS

### Paunang Kaalaman

Dapat ay natapos mo na ang HTML na istruktura para sa iyong terrarium mula sa nakaraang aralin at handa na itong istiluhin.

> 📺 **Video Resource**: Tingnan ang kapaki-pakinabang na video walkthrough
>
> [![CSS Basics Tutorial](https://img.youtube.com/vi/6yIdOIV9p1I/0.jpg)](https://www.youtube.com/watch?v=6yIdOIV9p1I)

### Pag-set Up ng Iyong CSS File

Bago tayo magsimulang mag-istilo, kailangan nating ikonekta ang CSS sa ating HTML. Ang koneksyon na ito ang nagsasabi sa browser kung saan hahanapin ang mga tagubilin sa pag-istilo para sa ating terrarium.

Sa iyong terrarium folder, gumawa ng bagong file na tinatawag na `style.css`, pagkatapos ay i-link ito sa `<head>` section ng iyong HTML document:

```html
<link rel="stylesheet" href="./style.css" />
```

**Narito ang ginagawa ng code na ito:**
- **Lumilikha** ng koneksyon sa pagitan ng iyong HTML at CSS files
- **Sinasabi** sa browser na i-load at i-apply ang mga estilo mula sa `style.css`
- **Gumagamit** ng `rel="stylesheet"` attribute upang tukuyin na ito ay isang CSS file
- **Nagre-refer** sa file path gamit ang `href="./style.css"`

## Pag-unawa sa CSS Cascade

Naisip mo na ba kung bakit tinatawag na "Cascading" Style Sheets ang CSS? Ang mga estilo ay bumababa tulad ng isang talon, at minsan sila ay nagkakaroon ng salungatan.

Isipin kung paano gumagana ang mga istruktura ng utos sa militar - maaaring sabihin ng pangkalahatang utos na "lahat ng tropa ay magsuot ng berde," ngunit ang isang partikular na utos sa iyong yunit ay maaaring magsabi na "magsuot ng dress blues para sa seremonya." Ang mas tiyak na utos ang may priyoridad. Ang CSS ay sumusunod sa katulad na lohika, at ang pag-unawa sa hierarchy na ito ay nagpapadali sa pag-debug.

### Eksperimento sa Cascade Priority

Tingnan natin ang cascade sa aksyon sa pamamagitan ng paglikha ng salungatan sa estilo. Una, magdagdag ng inline style sa iyong `<h1>` tag:

```html
<h1 style="color: red">My Terrarium</h1>
```

**Ano ang ginagawa ng code na ito:**
- **Nag-aapply** ng pulang kulay nang direkta sa `<h1>` element gamit ang inline styling
- **Gumagamit** ng `style` attribute upang i-embed ang CSS nang direkta sa HTML
- **Lumilikha** ng pinakamataas na priyoridad na panuntunan sa estilo para sa partikular na element na ito

Susunod, idagdag ang panuntunang ito sa iyong `style.css` file:

```css
h1 {
  color: blue;
}
```

**Sa itaas, ginawa natin:**
- **Nag-defina** ng CSS rule na tumutukoy sa lahat ng `<h1>` elements
- **Nag-set** ng text color sa blue gamit ang external stylesheet
- **Lumilikha** ng mas mababang priyoridad na panuntunan kumpara sa inline styles

✅ **Knowledge Check**: Anong kulay ang nagpapakita sa iyong web app? Bakit nanalo ang kulay na iyon? Makakaisip ka ba ng mga sitwasyon kung saan nais mong i-override ang mga estilo?

> 💡 **Order ng Priority ng CSS (pinakamataas hanggang pinakamababa):**
> 1. **Inline styles** (style attribute)
> 2. **IDs** (#myId)
> 3. **Classes** (.myClass) at attributes
> 4. **Element selectors** (h1, div, p)
> 5. **Browser defaults**

## CSS Inheritance sa Aksyon

Ang CSS inheritance ay gumagana tulad ng genetika - ang mga elemento ay nagmamana ng ilang mga katangian mula sa kanilang mga parent elements. Kung mag-set ka ng font family sa body element, lahat ng text sa loob ay awtomatikong gagamit ng parehong font. Katulad ito ng kung paano ang natatanging jawline ng pamilya Habsburg ay lumitaw sa iba't ibang henerasyon nang hindi tinukoy para sa bawat indibidwal.

Gayunpaman, hindi lahat ay namamana. Ang mga text styles tulad ng fonts at colors ay namamana, ngunit ang mga layout properties tulad ng margins at borders ay hindi. Katulad ng mga anak na maaaring magmana ng pisikal na katangian ngunit hindi ang mga fashion choices ng kanilang mga magulang.

### Pagmamasid sa Font Inheritance

Tingnan natin ang inheritance sa aksyon sa pamamagitan ng pag-set ng font family sa `<body>` element:

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

**Pagpapaliwanag sa nangyayari dito:**
- **Nag-set** ng font family para sa buong pahina sa pamamagitan ng pag-target sa `<body>` element
- **Gumagamit** ng font stack na may fallback options para sa mas mahusay na compatibility ng browser
- **Nag-aapply** ng modernong system fonts na maganda ang hitsura sa iba't ibang operating systems
- **Tinitiyak** na lahat ng child elements ay magmamana ng font na ito maliban kung partikular na na-override

Buksan ang developer tools ng iyong browser (F12), pumunta sa Elements tab, at i-inspect ang iyong `<h1>` element. Makikita mo na ito ay nagmamana ng font family mula sa body:

![inherited font](../../../../translated_images/1.cc07a5cbe114ad1d4728c35134584ac1b87db688eff83cf75985cf31fe0ed95c.tl.png)

✅ **Experiment Time**: Subukang mag-set ng iba pang namamanang properties sa `<body>` tulad ng `color`, `line-height`, o `text-align`. Ano ang nangyayari sa iyong heading at iba pang mga elemento?

> 📝 **Mga Namamanang Properties Kasama**: `color`, `font-family`, `font-size`, `line-height`, `text-align`, `visibility`
>
> **Mga Hindi Namamanang Properties Kasama**: `margin`, `padding`, `border`, `width`, `height`, `position`

## Pag-master ng CSS Selectors

Ang CSS selectors ang paraan mo upang i-target ang mga partikular na elemento para sa pag-istilo. Gumagana ito tulad ng pagbibigay ng eksaktong direksyon - sa halip na sabihin "ang bahay," maaari mong sabihin "ang asul na bahay na may pulang pinto sa Maple Street."

Nagbibigay ang CSS ng iba't ibang paraan upang maging tiyak, at ang pagpili ng tamang selector ay tulad ng pagpili ng angkop na tool para sa gawain. Minsan kailangan mong istiluhin ang bawat pinto sa kapitbahayan, at minsan isang partikular na pinto lamang.

### Element Selectors (Tags)

Ang element selectors ay nagta-target sa mga HTML elements sa pamamagitan ng kanilang tag name. Perpekto ang mga ito para sa pag-set ng base styles na malawakang ina-apply sa iyong pahina:

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}

h1 {
  color: #3a241d;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
```

**Pag-unawa sa mga estilo na ito:**
- **Nag-set** ng consistent na typography sa buong pahina gamit ang `body` selector
- **Nag-aalis** ng default na browser margins at padding para sa mas mahusay na kontrol
- **Nag-istilo** ng lahat ng heading elements gamit ang kulay, alignment, at spacing
- **Gumagamit** ng `rem` units para sa scalable, accessible na font sizing

Habang ang element selectors ay mahusay para sa pangkalahatang pag-istilo, kakailanganin mo ng mas tiyak na selectors upang istiluhin ang mga indibidwal na bahagi tulad ng mga halaman sa iyong terrarium.

### ID Selectors para sa Natatanging Mga Elemento

Ang ID selectors ay gumagamit ng `#` symbol at nagta-target sa mga elemento na may partikular na `id` attributes. Dahil ang IDs ay dapat na natatangi sa isang pahina, perpekto ang mga ito para sa pag-istilo ng mga indibidwal, espesyal na elemento tulad ng ating kaliwa at kanang plant containers.

Gawin natin ang pag-istilo para sa mga side containers ng terrarium kung saan maninirahan ang mga halaman:

```css
#left-container {
  background-color: #f5f5f5;
  width: 15%;
  left: 0;
  top: 0;
  position: absolute;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}

#right-container {
  background-color: #f5f5f5;
  width: 15%;
  right: 0;
  top: 0;
  position: absolute;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}
```

**Narito ang ginagawa ng code na ito:**
- **Nagpo-posisyon** ng mga container sa dulong kaliwa at kanan gamit ang `absolute` positioning
- **Gumagamit** ng `vh` (viewport height) units para sa responsive na taas na umaangkop sa laki ng screen
- **Nag-aapply** ng `box-sizing: border-box` upang ang padding ay kasama sa kabuuang lapad
- **Nag-aalis** ng hindi kinakailangang `px` units mula sa zero values para sa mas malinis na code
- **Nag-set** ng banayad na background color na mas magaan sa mata kaysa sa matinding gray

✅ **Code Quality Challenge**: Pansinin kung paano nilalabag ng CSS na ito ang prinsipyo ng DRY (Don't Repeat Yourself). Maaari mo bang i-refactor ito gamit ang parehong ID at class?

**Pinahusay na approach:**
```html
<div id="left-container" class="container"></div>
<div id="right-container" class="container"></div>
```

```css
.container {
  background-color: #f5f5f5;
  width: 15%;
  top: 0;
  position: absolute;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}

#left-container {
  left: 0;
}

#right-container {
  right: 0;
}
```

### Class Selectors para sa Reusable Styles

Ang class selectors ay gumagamit ng `.` symbol at perpekto kapag nais mong i-apply ang parehong estilo sa maraming elemento. Hindi tulad ng IDs, ang mga klase ay maaaring gamitin nang paulit-ulit sa iyong HTML, na ginagawang perpekto para sa mga consistent na pattern ng pag-istilo.

Sa ating terrarium, ang bawat halaman ay nangangailangan ng katulad na estilo ngunit kailangan din ng indibidwal na pagposisyon. Gagamit tayo ng kombinasyon ng mga klase para sa shared styles at IDs para sa natatanging pagposisyon.

**Narito ang HTML structure para sa bawat halaman:**
```html
<div class="plant-holder">
  <img class="plant" alt="Decorative plant for terrarium" id="plant1" src="../../../../translated_images/plant1.d18b18ffe73da18f8b1ac7aba73b4050af52f4a0c9174aeac464b85123fc2850.tl.png" />
</div>
```

**Mga pangunahing elemento na ipinaliwanag:**
- **Gumagamit** ng `class="plant-holder"` para sa consistent na container styling sa lahat ng halaman
- **Nag-aapply** ng `class="plant"` para sa shared image styling at behavior
- **Naglalaman** ng natatanging `id="plant1"` para sa indibidwal na pagposisyon at interaksyon sa JavaScript
- **Nagbibigay** ng descriptive alt text para sa accessibility ng screen reader

Ngayon, idagdag ang mga estilo na ito sa iyong `style.css` file:

```css
.plant-holder {
  position: relative;
  height: 13%;
  left: -0.6rem;
}

.plant {
  position: absolute;
  max-width: 150%;
  max-height: 150%;
  z-index: 2;
  transition: transform 0.3s ease;
}

.plant:hover {
  transform: scale(1.05);
}
```

**Pagpapaliwanag sa mga estilo na ito:**
- **Lumilikha** ng relative positioning para sa plant holder upang magtatag ng positioning context
- **Nag-set** ng bawat plant holder sa 13% height, tinitiyak na lahat ng halaman ay magkasya nang patayo nang walang pag-scroll
- **Bahagyang ini-shift** ang mga holder sa kaliwa upang mas maayos na ma-center ang mga halaman sa kanilang mga container
- **Pinapayagan** ang mga halaman na mag-scale nang responsive gamit ang `max-width` at `max-height` properties
- **Gumagamit** ng `z-index` upang i-layer ang mga halaman sa ibabaw ng ibang mga elemento sa terrarium
- **Nagdadagdag** ng banayad na hover effect gamit ang CSS transitions para sa mas mahusay na interaksyon ng user

✅ **Critical Thinking**: Bakit kailangan natin ang parehong `.plant-holder` at `.plant` selectors? Ano ang mangyayari kung susubukan nating gumamit ng isa lamang?

> 💡 **Design Pattern**: Ang container (`.plant-holder`) ang nagkokontrol sa layout at pagposisyon, habang ang content (`.plant`) ang nagkokontrol sa hitsura at pag-scale. Ang paghihiwalay na ito ay nagpapadali sa code na mas madaling i-maintain at flexible.

## Pag-unawa sa CSS Positioning

Ang CSS positioning ay tulad ng pagiging stage director para sa isang play - ikaw ang nagdidirekta kung saan tatayo ang bawat aktor at kung paano sila gumagalaw sa entablado. Ang ilang aktor ay sumusunod sa standard formation, habang ang iba ay nangangailangan ng partikular na pagposisyon para sa dramatic effect.

Kapag naintindihan mo ang positioning, maraming layout challenges ang nagiging mas madali. Kailangan mo ba ng navigation bar na nananatili sa itaas habang nag-scroll ang mga user? Ang positioning ang bahala diyan. Gusto mo ba ng tooltip na lumilitaw sa partikular na lokasyon? Iyan din ay positioning.

### Ang Limang Position Values

| Position Value | Pag-uugali | Gamit |
|----------------|------------|-------|
| `static` | Default flow, hindi pinapansin ang top/left/right/bottom | Normal na layout ng dokumento |
| `relative` | Nakaposisyon kaugnay sa normal na posisyon nito | Maliit na adjustments, paglikha ng positioning context |
| `absolute` | Nakaposisyon kaugnay sa pinakamalapit na positioned ancestor | Eksaktong pagposisyon, overlays |
| `fixed` | Nakaposisyon kaugnay sa viewport | Navigation bars, floating elements |
| `sticky` | Nagpapalit sa pagitan ng relative at fixed base sa scroll | Mga header na nananatili habang nag-scroll |

### Pagposisyon sa Ating Terrarium

Ang ating terrarium ay gumagamit ng maingat na kombinasyon ng mga positioning types upang lumikha ng nais na layout:

```css
/* Container positioning */
.container {
  position: absolute; /* Removes from normal flow */
  /* ... other styles ... */
}

/* Plant holder positioning */
.plant-holder {
  position: relative; /* Creates positioning context */
  /* ... other styles ... */
}

/* Plant positioning */
.plant {
  position: absolute; /* Allows precise placement within holder */
  /* ... other styles ... */
}
```

**Pag-unawa sa estratehiya ng pagposisyon:**
- **Absolute containers** ay inaalis mula sa normal na document flow at naka-pin sa mga gilid ng screen
- **Relative plant holders** ay lumilikha ng positioning context habang nananatili sa document flow
- **Absolute plants** ay maaaring iposisyon nang eksakto sa loob ng kanilang relative containers
- **Ang kombinasyong ito** ay nagpapahintulot sa mga halaman na mag-stack nang patayo habang maaaring iposisyon nang indibidwal

> 🎯 **Bakit Mahalaga Ito**: Ang `plant` elements ay nangangailangan ng absolute positioning upang maging draggable sa susunod na aralin. Ang absolute positioning ay inaalis ang mga ito mula sa normal na layout flow, na ginagawang posible ang drag-and-drop interactions.

✅ **Experiment Time**: Subukang baguhin ang mga positioning values at obserbahan ang mga resulta:
- Ano ang mangyayari kung babaguhin mo ang `.container` mula `absolute` patungong `relative`?
- Paano nagbabago ang layout kung ang `.plant-holder` ay gumagamit ng `absolute` sa halip na `relative`?
- Ano ang nangyayari kapag binago mo ang `.plant` sa `relative` positioning?

## Pagbuo ng Terrarium gamit ang CSS

Ngayon, bubuo tayo ng glass jar gamit lamang ang CSS - walang images o graphics software na kinakailangan.

Ang paglikha ng realistic-looking glass, shadows, at depth effects gamit ang positioning at transparency ay nagpapakita ng visual na kakayahan ng CSS. Ang teknik na ito ay kahalintulad sa kung paano ginamit ng mga arkitekto sa Bauhaus movement ang simpleng geometric forms upang lumikha ng complex, magagandang istruktura. Kapag naintindihan mo ang mga prinsipyong ito, makikilala mo ang mga teknik ng CSS sa likod ng maraming disenyo ng web.

### Paglikha ng Mga Komponent ng Glass Jar
Simulan natin ang paggawa ng terrarium jar, piraso bawat piraso. Ang bawat bahagi ay gumagamit ng absolute positioning at percentage-based sizing para sa responsive na disenyo:

```css
.jar-walls {
  height: 80%;
  width: 60%;
  background: #d1e1df;
  border-radius: 1rem;
  position: absolute;
  bottom: 0.5%;
  left: 20%;
  opacity: 0.5;
  z-index: 1;
  box-shadow: inset 0 0 2rem rgba(0, 0, 0, 0.1);
}

.jar-top {
  width: 50%;
  height: 5%;
  background: #d1e1df;
  position: absolute;
  bottom: 80.5%;
  left: 25%;
  opacity: 0.7;
  z-index: 1;
  border-radius: 0.5rem 0.5rem 0 0;
}

.jar-bottom {
  width: 50%;
  height: 1%;
  background: #d1e1df;
  position: absolute;
  bottom: 0;
  left: 25%;
  opacity: 0.7;
  border-radius: 0 0 0.5rem 0.5rem;
}

.dirt {
  width: 60%;
  height: 5%;
  background: #3a241d;
  position: absolute;
  border-radius: 0 0 1rem 1rem;
  bottom: 1%;
  left: 20%;
  opacity: 0.7;
  z-index: -1;
}
```

**Pag-unawa sa konstruksyon ng terrarium:**
- **Gumagamit** ng percentage-based dimensions para sa responsive scaling sa lahat ng screen sizes
- **Inaayos** ang mga elemento nang absolute para ma-stack at ma-align nang eksakto
- **Nag-aaplay** ng iba't ibang opacity values para makalikha ng glass transparency effect
- **Nagpapatupad** ng `z-index` layering para ang mga halaman ay magmukhang nasa loob ng jar
- **Nagdadagdag** ng subtle box-shadow at refined border-radius para sa mas realistiko na hitsura

### Responsive Design gamit ang Percentages

Pansinin kung paano lahat ng dimensions ay gumagamit ng percentages sa halip na fixed pixel values:

**Bakit ito mahalaga:**
- **Tinitiyak** na ang terrarium ay mag-scale nang proporsyonal sa anumang screen size
- **Pinapanatili** ang visual relationships sa pagitan ng mga bahagi ng jar
- **Nagbibigay** ng consistent na karanasan mula sa mobile phones hanggang sa malalaking desktop monitors
- **Pinapayagan** ang disenyo na mag-adapt nang hindi nasisira ang visual layout

### CSS Units sa Aksyon

Gumagamit tayo ng `rem` units para sa border-radius, na nag-scale base sa root font size. Ito ay lumilikha ng mas accessible na disenyo na nirerespeto ang user font preferences. Alamin pa ang tungkol sa [CSS relative units](https://www.w3.org/TR/css-values-3/#font-relative-lengths) sa opisyal na dokumentasyon.

✅ **Visual na Eksperimento**: Subukang baguhin ang mga values at obserbahan ang epekto:
- Palitan ang jar opacity mula 0.5 hanggang 0.8 – paano nito naaapektuhan ang hitsura ng salamin?
- Ayusin ang kulay ng lupa mula `#3a241d` hanggang `#8B4513` – anong visual na epekto ang dulot nito?
- Baguhin ang `z-index` ng lupa sa 2 – ano ang nangyayari sa layering?

---

## Hamon ng GitHub Copilot Agent 🚀

Gamitin ang Agent mode para tapusin ang sumusunod na hamon:

**Deskripsyon:** Gumawa ng CSS animation na nagpapagalaw sa mga halaman ng terrarium nang banayad, na parang hinahanginan. Ito ay makakatulong sa iyo na magpraktis ng CSS animations, transforms, at keyframes habang pinapaganda ang visual na appeal ng iyong terrarium.

**Prompt:** Magdagdag ng CSS keyframe animations para ang mga halaman sa terrarium ay gumalaw nang banayad mula kaliwa pakanan. Gumawa ng swaying animation na bahagyang nagro-rotate sa bawat halaman (2-3 degrees) kaliwa at kanan na may duration na 3-4 seconds, at i-apply ito sa `.plant` class. Siguraduhing ang animation ay mag-loop infinitely at may easing function para sa natural na galaw.

Alamin pa ang tungkol sa [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) dito.

## 🚀 Hamon: Pagdaragdag ng Glass Reflections

Handa ka na bang pagandahin ang iyong terrarium gamit ang realistic glass reflections? Ang teknik na ito ay magdadagdag ng depth at realism sa disenyo.

Gagawa ka ng banayad na highlights na nag-simulate kung paano nagre-reflect ang ilaw sa mga glass surfaces. Ang approach na ito ay katulad ng kung paano ginamit ng mga Renaissance painters tulad ni Jan van Eyck ang ilaw at reflection para magmukhang three-dimensional ang painted glass. Narito ang iyong layunin:

![finished terrarium](../../../../translated_images/terrarium-final.2f07047ffc597d0a06b06cab28a77801a10dd12fdb6c7fc630e9c40665491c53.tl.png)

**Ang iyong hamon:**
- **Gumawa** ng banayad na puti o light-colored oval shapes para sa glass reflections
- **Iposisyon** ang mga ito nang maayos sa kaliwang bahagi ng jar
- **Mag-apply** ng tamang opacity at blur effects para sa realistic na light reflection
- **Gumamit** ng `border-radius` para makalikha ng organic, bubble-like shapes
- **Mag-eksperimento** gamit ang gradients o box-shadows para sa mas pinahusay na realism

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/18)

## Palawakin ang Iyong Kaalaman sa CSS

Ang CSS ay maaaring mukhang komplikado sa simula, ngunit ang pag-unawa sa mga pangunahing konsepto na ito ay nagbibigay ng matibay na pundasyon para sa mas advanced na mga teknik.

**Ang iyong susunod na mga lugar ng pag-aaral sa CSS:**
- **Flexbox** - nagpapadali sa alignment at distribution ng mga elemento
- **CSS Grid** - nagbibigay ng makapangyarihang tools para sa paggawa ng complex layouts
- **CSS Variables** - binabawasan ang pag-uulit at pinapabuti ang maintainability
- **Responsive design** - tinitiyak na gumagana nang maayos ang mga site sa iba't ibang screen sizes

### Mga Interactive na Learning Resources

Pagpraktisan ang mga konseptong ito gamit ang mga engaging, hands-on na laro:
- 🐸 [Flexbox Froggy](https://flexboxfroggy.com/) - Masterin ang Flexbox sa pamamagitan ng masayang mga hamon
- 🌱 [Grid Garden](https://codepip.com/games/grid-garden/) - Matutunan ang CSS Grid sa pamamagitan ng pagtatanim ng virtual na carrots
- 🎯 [CSS Battle](https://cssbattle.dev/) - Subukan ang iyong CSS skills gamit ang coding challenges

### Karagdagang Pag-aaral

Para sa komprehensibong CSS fundamentals, kumpletuhin ang Microsoft Learn module na ito: [Style your HTML app with CSS](https://docs.microsoft.com/learn/modules/build-simple-website/4-css-basics/?WT.mc_id=academic-77807-sagibbon)

## Assignment

[CSS Refactoring](assignment.md)

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.