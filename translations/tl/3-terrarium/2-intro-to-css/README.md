<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "32af0ae2f7963127a93e7a8f59fdd84b",
  "translation_date": "2025-10-20T21:06:17+00:00",
  "source_file": "3-terrarium/2-intro-to-css/README.md",
  "language_code": "tl"
}
-->
# Proyekto ng Terrarium Bahagi 2: Panimula sa CSS

![Panimula sa CSS](../../../../translated_images/webdev101-css.3f7af5991bf53a200d79e7257e5e450408d8ea97f5b531d31b2e3976317338ee.tl.png)
> Sketchnote ni [Tomomi Imura](https://twitter.com/girlie_mac)

## Paunang Pagsusulit sa Leksyon

[Paunang pagsusulit sa leksyon](https://ff-quizzes.netlify.app/web/quiz/17)

### Panimula

Ang CSS, o Cascading Style Sheets, ay nag-aalok ng solusyon sa mahalagang problema sa web development: kung paano gawing maganda ang hitsura ng iyong website. Ang pag-istilo sa iyong mga app ay nagiging mas magagamit at mas kaaya-aya sa paningin; maaari mo ring gamitin ang CSS upang lumikha ng Responsive Web Design (RWD) - na nagpapahintulot sa iyong mga app na magmukhang maganda anuman ang laki ng screen kung saan ito ipinapakita. Ang CSS ay hindi lamang tungkol sa pagpapaganda ng hitsura ng iyong app; kasama sa spec nito ang mga animation at transform na maaaring magbigay-daan sa mga sopistikadong interaksyon para sa iyong mga app. Ang CSS Working Group ang tumutulong sa pagpapanatili ng kasalukuyang mga detalye ng CSS; maaari mong sundan ang kanilang trabaho sa [site ng World Wide Web Consortium](https://www.w3.org/Style/CSS/members).

> Tandaan, ang CSS ay isang wika na patuloy na nagbabago, tulad ng lahat ng bagay sa web, at hindi lahat ng browser ay sumusuporta sa mga mas bagong bahagi ng detalye. Palaging suriin ang iyong mga implementasyon sa pamamagitan ng pagbisita sa [CanIUse.com](https://caniuse.com).

Sa leksyon na ito, magdadagdag tayo ng mga estilo sa ating online na terrarium at matututo pa tungkol sa ilang mga konsepto ng CSS: ang cascade, inheritance, at ang paggamit ng selectors, positioning, at paggamit ng CSS upang bumuo ng mga layout. Sa proseso, ilalayout natin ang terrarium at gagawin ang aktwal na terrarium mismo.

### Paunang Kaalaman

Dapat ay mayroon ka nang HTML para sa iyong terrarium na handa nang istiluhin.

> Panoorin ang video

> 
> [![Video tungkol sa Git at GitHub basics](https://img.youtube.com/vi/6yIdOIV9p1I/0.jpg)](https://www.youtube.com/watch?v=6yIdOIV9p1I)

### Gawain

Sa folder ng iyong terrarium, gumawa ng bagong file na tinatawag na `style.css`. I-import ang file na iyon sa seksyong `<head>`:

```html
<link rel="stylesheet" href="./style.css" />
```

---

## Ang Cascade

Ang Cascading Style Sheets ay nagtataglay ng ideya na ang mga estilo ay 'nagka-cascade' kung saan ang aplikasyon ng isang estilo ay ginagabayan ng priyoridad nito. Ang mga estilo na itinakda ng may-akda ng website ay may priyoridad kaysa sa mga itinakda ng browser. Ang mga estilo na itinakda 'inline' ay may priyoridad kaysa sa mga itinakda sa isang external na style sheet.

### Gawain

Magdagdag ng inline style na "color: red" sa iyong `<h1>` tag:

```HTML
<h1 style="color: red">My Terrarium</h1>
```

Pagkatapos, idagdag ang sumusunod na code sa iyong `style.css` file:

```CSS
h1 {
 color: blue;
}
```

✅ Anong kulay ang lumalabas sa iyong web app? Bakit? Maaari mo bang hanapin ang paraan upang i-override ang mga estilo? Kailan mo gustong gawin ito, o bakit hindi?

---

## Inheritance

Ang mga estilo ay namamana mula sa estilo ng ninuno patungo sa inapo, kung saan ang mga nakapaloob na elemento ay namamana ang mga estilo ng kanilang mga magulang.

### Gawain

Itakda ang font ng katawan sa isang ibinigay na font, at suriin kung ang font ng isang nakapaloob na elemento:

```CSS
body {
	font-family: helvetica, arial, sans-serif;
}
```

Buksan ang console ng iyong browser sa tab na 'Elements' at obserbahan ang font ng H1. Namamana nito ang font mula sa katawan, tulad ng nakasaad sa loob ng browser:

![namamanang font](../../../../translated_images/1.cc07a5cbe114ad1d4728c35134584ac1b87db688eff83cf75985cf31fe0ed95c.tl.png)

✅ Maaari mo bang gawing magmana ang isang nakapaloob na estilo ng ibang property?

---

## Mga CSS Selector

### Mga Tag

Sa ngayon, ang iyong `style.css` file ay may kaunting mga tag na may estilo, at mukhang kakaiba ang app:

```CSS
body {
	font-family: helvetica, arial, sans-serif;
}

h1 {
	color: #3a241d;
	text-align: center;
}
```

Ang ganitong paraan ng pag-istilo ng isang tag ay nagbibigay sa iyo ng kontrol sa mga natatanging elemento, ngunit kailangan mong kontrolin ang mga estilo ng maraming halaman sa iyong terrarium. Upang magawa ito, kailangan mong gamitin ang mga CSS selector.

### Mga Id

Magdagdag ng ilang estilo upang ilayout ang kaliwa at kanang mga container. Dahil may isa lamang kaliwang container at isa lamang kanang container, binigyan sila ng mga id sa markup. Upang istiluhin ang mga ito, gamitin ang `#`:

```CSS
#left-container {
	background-color: #eee;
	width: 15%;
	left: 0px;
	top: 0px;
	position: absolute;
	height: 100%;
	padding: 10px;
}

#right-container {
	background-color: #eee;
	width: 15%;
	right: 0px;
	top: 0px;
	position: absolute;
	height: 100%;
	padding: 10px;
}
```

Dito, inilagay mo ang mga container na ito gamit ang absolute positioning sa dulong kaliwa at kanan ng screen, at ginamit ang mga porsyento para sa kanilang lapad upang mag-scale sila para sa maliliit na mobile screen.

✅ Ang code na ito ay medyo paulit-ulit, kaya hindi "DRY" (Don't Repeat Yourself); maaari mo bang hanapin ang mas mahusay na paraan upang istiluhin ang mga id na ito, marahil gamit ang isang id at isang class? Kailangan mong baguhin ang markup at i-refactor ang CSS:

```html
<div id="left-container" class="container"></div>
```

### Mga Klase

Sa halimbawa sa itaas, istinilo mo ang dalawang natatanging elemento sa screen. Kung gusto mong ang mga estilo ay mag-aplay sa maraming elemento sa screen, maaari kang gumamit ng mga CSS class. Gawin ito upang ilayout ang mga halaman sa kaliwa at kanang mga container.

Pansinin na ang bawat halaman sa HTML markup ay may kombinasyon ng mga id at class. Ang mga id dito ay ginagamit ng JavaScript na idadagdag mo sa susunod upang manipulahin ang paglalagay ng halaman sa terrarium. Ang mga class, gayunpaman, ay nagbibigay sa lahat ng halaman ng isang ibinigay na estilo.

```html
<div class="plant-holder">
	<img class="plant" alt="plant" id="plant1" src="../../../../translated_images/plant1.d18b18ffe73da18f8b1ac7aba73b4050af52f4a0c9174aeac464b85123fc2850.tl.png" />
</div>
```

Idagdag ang sumusunod sa iyong `style.css` file:

```CSS
.plant-holder {
	position: relative;
	height: 13%;
	left: -10px;
}

.plant {
	position: absolute;
	max-width: 150%;
	max-height: 150%;
	z-index: 2;
}
```

Kapansin-pansin sa snippet na ito ang halo ng relative at absolute positioning, na tatalakayin natin sa susunod na seksyon. Tingnan ang paraan ng paghawak sa mga taas gamit ang mga porsyento:

Itinakda mo ang taas ng plant holder sa 13%, isang magandang numero upang matiyak na ang lahat ng halaman ay ipinapakita sa bawat vertical na container nang walang pangangailangan para sa pag-scroll.

Itinakda mo ang plant holder na lumipat sa kaliwa upang ang mga halaman ay mas nakasentro sa loob ng kanilang container. Ang mga imahe ay may malaking dami ng transparent na background upang gawing mas madali ang pag-drag, kaya kailangan silang itulak sa kaliwa upang mas magkasya sa screen.

Pagkatapos, ang halaman mismo ay binigyan ng max-width na 150%. Pinapayagan nito itong mag-scale pababa habang ang browser ay nag-scale pababa. Subukang i-resize ang iyong browser; ang mga halaman ay nananatili sa kanilang mga container ngunit nag-scale pababa upang magkasya.

Kapansin-pansin din ang paggamit ng z-index, na kumokontrol sa kamag-anak na altitude ng isang elemento (upang ang mga halaman ay nakaupo sa ibabaw ng container at lumilitaw na nakaupo sa loob ng terrarium).

✅ Bakit kailangan mo ng parehong plant holder at plant CSS selector?

## CSS Positioning

Ang paghahalo ng mga property ng posisyon (mayroong static, relative, fixed, absolute, at sticky positions) ay maaaring medyo mahirap, ngunit kapag ginawa nang maayos, nagbibigay ito ng magandang kontrol sa mga elemento sa iyong mga pahina.

Ang mga elementong may absolute positioning ay nakaposisyon batay sa kanilang pinakamalapit na posisyon na ninuno, at kung wala, ito ay nakaposisyon ayon sa katawan ng dokumento.

Ang mga elementong may relative positioning ay nakaposisyon batay sa direksyon ng CSS upang ayusin ang kanilang pagkakalagay mula sa kanilang orihinal na posisyon.

Sa aming halimbawa, ang `plant-holder` ay isang elementong may relative positioning na nakaposisyon sa loob ng isang container na may absolute positioning. Ang resulta ng ganitong pag-uugali ay ang mga side bar container ay nakapako sa kaliwa at kanan, at ang plant-holder ay nakapaloob, inaayos ang sarili nito sa loob ng mga side bar, nagbibigay ng espasyo para sa mga halaman na mailagay sa isang vertical na hanay.

> Ang `plant` mismo ay mayroon ding absolute positioning, na kinakailangan upang gawing draggable ito, tulad ng matutuklasan mo sa susunod na leksyon.

✅ Subukang palitan ang mga uri ng positioning ng mga side container at ng plant-holder. Ano ang nangyayari?

## Mga Layout ng CSS

Ngayon ay gagamitin mo ang natutunan upang buuin ang terrarium mismo, lahat gamit ang CSS!

Una, istiluhin ang mga anak ng `.terrarium` div bilang isang bilugan na parihaba gamit ang CSS:

```CSS
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
}

.jar-bottom {
	width: 50%;
	height: 1%;
	background: #d1e1df;
	position: absolute;
	bottom: 0%;
	left: 25%;
	opacity: 0.7;
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

Pansinin ang paggamit ng mga porsyento dito. Kung i-scale mo ang iyong browser pababa, makikita mo kung paano rin nag-i-scale ang jar. Pansinin din ang mga lapad at taas na porsyento para sa mga elemento ng jar at kung paano ang bawat elemento ay nakaposisyon sa gitna, nakapako sa ilalim ng viewport.

Gumagamit din tayo ng `rem` para sa border-radius, isang font-relative na haba. Basahin pa ang tungkol sa ganitong uri ng relative na pagsukat sa [CSS spec](https://www.w3.org/TR/css-values-3/#font-relative-lengths).

✅ Subukang baguhin ang mga kulay ng jar at opacity kumpara sa mga nasa lupa. Ano ang nangyayari? Bakit?

---

## Hamon ng GitHub Copilot Agent 🚀

Gamitin ang Agent mode upang tapusin ang sumusunod na hamon:

**Paglalarawan:** Gumawa ng CSS animation na nagpapagalaw sa mga halaman ng terrarium nang banayad na parang hinahanginan. Makakatulong ito sa iyo na magsanay sa CSS animations, transforms, at keyframes habang pinapaganda ang visual na aspeto ng iyong terrarium.

**Prompt:** Magdagdag ng CSS keyframe animations upang ang mga halaman sa terrarium ay banayad na gumalaw mula kaliwa pakanan. Gumawa ng swaying animation na bahagyang umiikot ang bawat halaman (2-3 degrees) kaliwa at kanan na may tagal na 3-4 segundo, at i-apply ito sa `.plant` class. Siguraduhing ang animation ay tuloy-tuloy at may easing function para sa natural na galaw.

---



## 🚀Hamon

Magdagdag ng 'bubble' shine sa kaliwang ibabang bahagi ng jar upang magmukhang mas parang salamin. I-istilo mo ang `.jar-glossy-long` at `.jar-glossy-short` upang magmukhang reflected shine. Ganito ang magiging hitsura:

![natapos na terrarium](../../../../translated_images/terrarium-final.2f07047ffc597d0a06b06cab28a77801a10dd12fdb6c7fc630e9c40665491c53.tl.png)

Upang tapusin ang pagsusulit pagkatapos ng leksyon, dumaan sa Learn module na ito: [Istiluhin ang iyong HTML app gamit ang CSS](https://docs.microsoft.com/learn/modules/build-simple-website/4-css-basics/?WT.mc_id=academic-77807-sagibbon)

## Pagsusulit Pagkatapos ng Leksyon

[Pagsusulit pagkatapos ng leksyon](https://ff-quizzes.netlify.app/web/quiz/18)

## Review at Pag-aaral sa Sarili

Ang CSS ay mukhang simple, ngunit maraming hamon kapag sinusubukang istiluhin ang isang app nang perpekto para sa lahat ng browser at lahat ng laki ng screen. Ang CSS-Grid at Flexbox ay mga tool na binuo upang gawing mas maayos at mas maaasahan ang trabaho. Alamin ang tungkol sa mga tool na ito sa pamamagitan ng paglalaro ng [Flexbox Froggy](https://flexboxfroggy.com/) at [Grid Garden](https://codepip.com/games/grid-garden/).

## Takdang-Aralin

[CSS Refactoring](assignment.md)

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na awtoritatibong pinagmulan. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.