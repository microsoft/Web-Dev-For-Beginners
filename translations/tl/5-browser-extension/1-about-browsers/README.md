<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "3f97452b78978031a401791449feaa06",
  "translation_date": "2025-10-20T21:12:14+00:00",
  "source_file": "5-browser-extension/1-about-browsers/README.md",
  "language_code": "tl"
}
-->
# Proyekto ng Browser Extension Bahagi 1: Lahat Tungkol sa Mga Browser

![Browser sketchnote](../../../../translated_images/browser.60317c9be8b7f84adce43e30bff8d47a1ae15793beab762317b2bc6b74337c1a.tl.jpg)
> Sketchnote ni [Wassim Chegham](https://dev.to/wassimchegham/ever-wondered-what-happens-when-you-type-in-a-url-in-an-address-bar-in-a-browser-3dob)

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/23)

### Panimula

Ang mga browser extension ay nagdadagdag ng karagdagang functionality sa isang browser. Ngunit bago ka magtayo ng isa, dapat kang matuto ng kaunti tungkol sa kung paano gumagana ang mga browser.

### Tungkol sa Browser

Sa serye ng mga araling ito, matututo kang gumawa ng browser extension na gagana sa mga browser tulad ng Chrome, Firefox, at Edge. Sa bahaging ito, matutuklasan mo kung paano gumagana ang mga browser at bubuuin ang mga elemento ng browser extension.

Pero ano nga ba ang browser? Ito ay isang software application na nagbibigay-daan sa isang end user na ma-access ang nilalaman mula sa isang server at maipakita ito sa mga web page.

✅ Kaunting kasaysayan: ang unang browser ay tinawag na 'WorldWideWeb' at nilikha ni Sir Timothy Berners-Lee noong 1990.

![early browsers](../../../../translated_images/earlybrowsers.d984b711cdf3a42ddac919d46c4b5ca7232f68ccfbd81395e04e5a64c0015277.tl.jpg)
> Ilang maagang browser, mula kay [Karen McGrane](https://www.slideshare.net/KMcGrane/week-4-ixd-history-personal-computing)

Kapag ang isang user ay kumonekta sa internet gamit ang isang URL (Uniform Resource Locator) address, karaniwang gamit ang Hypertext Transfer Protocol sa pamamagitan ng `http` o `https` address, ang browser ay nakikipag-ugnayan sa isang web server at kinukuha ang isang web page.

Sa puntong ito, ang rendering engine ng browser ay ipinapakita ito sa device ng user, na maaaring isang mobile phone, desktop, o laptop.

Ang mga browser ay may kakayahan ding mag-cache ng nilalaman upang hindi na ito kailangang kunin mula sa server sa bawat pagkakataon. Maaari rin nilang irekord ang kasaysayan ng aktibidad ng pag-browse ng user, mag-imbak ng 'cookies', na maliliit na piraso ng data na naglalaman ng impormasyon na ginagamit upang irekord ang aktibidad ng user, at marami pa.

Isang mahalagang bagay na dapat tandaan tungkol sa mga browser ay hindi lahat ng mga ito ay pareho! Ang bawat browser ay may kani-kaniyang lakas at kahinaan, at ang isang propesyonal na web developer ay kailangang maunawaan kung paano gawing mahusay ang pagganap ng mga web page sa iba't ibang browser. Kasama na rito ang paghawak sa maliliit na screen tulad ng sa mobile phone, pati na rin ang user na offline.

Isang kapaki-pakinabang na website na dapat mong i-bookmark sa kahit anong browser na gusto mong gamitin ay [caniuse.com](https://www.caniuse.com). Kapag gumagawa ka ng mga web page, napaka-kapaki-pakinabang na gamitin ang mga listahan ng mga suportadong teknolohiya ng caniuse upang mas maayos mong masuportahan ang iyong mga user.

✅ Paano mo malalaman kung aling mga browser ang pinakapopular sa base ng user ng iyong website? Tingnan ang iyong analytics - maaari kang mag-install ng iba't ibang analytics packages bilang bahagi ng iyong proseso ng web development, at sasabihin nila sa iyo kung aling mga browser ang pinakaginagamit ng iba't ibang popular na browser.

## Mga Browser Extension

Bakit mo gugustuhing gumawa ng browser extension? Ito ay isang kapaki-pakinabang na bagay na maikakabit sa iyong browser kapag kailangan mo ng mabilisang access sa mga gawain na madalas mong inuulit. Halimbawa, kung madalas kang kailangang suriin ang mga kulay sa iba't ibang web page na iyong ginagamit, maaari kang mag-install ng color-picker browser extension. Kung nahihirapan kang tandaan ang mga password, maaari kang gumamit ng password-management browser extension.

Masaya rin ang paggawa ng browser extensions. Karaniwan, pinamamahalaan nila ang limitadong bilang ng mga gawain na mahusay nilang ginagawa.

✅ Ano ang iyong mga paboritong browser extension? Anong mga gawain ang kanilang ginagawa?

### Pag-install ng Extensions

Bago ka magsimulang magtayo, tingnan ang proseso ng paggawa at pag-deploy ng isang browser extension. Bagama't bahagyang magkakaiba ang bawat browser sa kung paano nila pinamamahalaan ang gawaing ito, ang proseso ay katulad sa Chrome at Firefox sa halimbawang ito sa Edge:

![screenshot ng Edge browser na nagpapakita ng bukas na edge://extensions page at bukas na settings menu](../../../../translated_images/install-on-edge.d68781acaf0b3d3dada8b7507cde7a64bf74b7040d9818baaa9070668e819f90.tl.png)

> Tandaan: Siguraduhing i-toggle ang developer mode at payagan ang extension mula sa ibang mga tindahan.

Sa esensya, ang proseso ay:

- buuin ang iyong extension gamit ang `npm run build` 
- mag-navigate sa browser sa extensions pane gamit ang "Settings and more" button (ang `...` icon) sa kanang itaas
- kung ito ay bagong pag-install, piliin ang `load unpacked` upang mag-upload ng bagong extension mula sa build folder nito (sa ating kaso ito ay `/dist`) 
- o, i-click ang `reload` kung nire-reload mo ang extension na na-install na

✅ Ang mga tagubilin na ito ay para sa mga extension na ikaw mismo ang gumawa; upang mag-install ng mga extension na inilabas na sa browser extension store na nauugnay sa bawat browser, dapat kang mag-navigate sa mga [tindahan](https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home) at i-install ang extension na iyong pinili.

### Magsimula

Gagawa ka ng browser extension na nagpapakita ng carbon footprint ng iyong rehiyon, na ipinapakita ang paggamit ng enerhiya ng iyong rehiyon at ang pinagmulan ng enerhiya. Ang extension ay magkakaroon ng isang form na nangongolekta ng API key upang ma-access mo ang API ng CO2 Signal.

**Kailangan mo:**

- [isang API key](https://www.co2signal.com/); ilagay ang iyong email sa kahon sa pahinang ito at ipapadala ito sa iyo
- ang [code para sa iyong rehiyon](http://api.electricitymap.org/v3/zones) na tumutugma sa [Electricity Map](https://www.electricitymap.org/map) (sa Boston, halimbawa, ginagamit ko ang 'US-NEISO').
- ang [starter code](../../../../5-browser-extension/start). I-download ang folder na `start`; kukumpletuhin mo ang code sa folder na ito.
- [NPM](https://www.npmjs.com) - Ang NPM ay isang tool sa pamamahala ng package; i-install ito sa lokal at ang mga package na nakalista sa iyong `package.json` file ay mai-install para magamit sa iyong web asset.

✅ Matuto pa tungkol sa pamamahala ng package sa [napakahusay na Learn module na ito](https://docs.microsoft.com/learn/modules/create-nodejs-project-dependencies/?WT.mc_id=academic-77807-sagibbon)

Maglaan ng sandali upang tingnan ang codebase:

dist
    -|manifest.json (dito nakatakda ang mga default)
    -|index.html (dito ang front-end HTML markup)
    -|background.js (dito ang background JS)
    -|main.js (built JS)
src
    -|index.js (dito ilalagay ang iyong JS code)

✅ Kapag mayroon ka nang API key at Region code, itago ang mga ito sa isang tala para sa hinaharap na paggamit.

### Gumawa ng HTML para sa Extension

Ang extension na ito ay may dalawang view. Isa para mangolekta ng API key at region code:

![screenshot ng kumpletong extension na bukas sa browser, nagpapakita ng form na may mga input para sa region name at API key.](../../../../translated_images/1.b6da8c1394b07491afeb6b2a8e5aca73ebd3cf478e27bcc9aeabb187e722648e.tl.png)

At ang pangalawa para ipakita ang carbon usage ng rehiyon:

![screenshot ng kumpletong extension na nagpapakita ng mga halaga para sa carbon usage at fossil fuel percentage para sa rehiyong US-NEISO.](../../../../translated_images/2.1dae52ff0804224692cd648afbf2342955d7afe3b0101b617268130dfb427f55.tl.png)

Magsimula tayo sa paggawa ng HTML para sa form at pag-style nito gamit ang CSS.

Sa folder na `/dist`, gagawa ka ng form at isang result area. Sa file na `index.html`, punan ang delineated form area:

```HTML
<form class="form-data" autocomplete="on">
	<div>
		<h2>New? Add your Information</h2>
	</div>
	<div>
		<label for="region">Region Name</label>
		<input type="text" id="region" required class="region-name" />
	</div>
	<div>
		<label for="api">Your API Key from tmrow</label>
		<input type="text" id="api" required class="api-key" />
	</div>
	<button class="search-btn">Submit</button>
</form>	
```
Ito ang form kung saan ang iyong na-save na impormasyon ay ilalagay at mai-save sa local storage.

Susunod, gumawa ng results area; sa ilalim ng huling form tag, magdagdag ng ilang divs:

```HTML
<div class="result">
	<div class="loading">loading...</div>
	<div class="errors"></div>
	<div class="data"></div>
	<div class="result-container">
		<p><strong>Region: </strong><span class="my-region"></span></p>
		<p><strong>Carbon Usage: </strong><span class="carbon-usage"></span></p>
		<p><strong>Fossil Fuel Percentage: </strong><span class="fossil-fuel"></span></p>
	</div>
	<button class="clear-btn">Change region</button>
</div>
```
Sa puntong ito, maaari kang mag-try ng build. Siguraduhing i-install ang package dependencies ng extension na ito:

```
npm install
```

Ang command na ito ay gagamit ng npm, ang Node Package Manager, upang i-install ang webpack para sa proseso ng pagbuo ng iyong extension. Makikita mo ang output ng prosesong ito sa pamamagitan ng pagtingin sa `/dist/main.js` - makikita mo na ang code ay na-bundle na.

Sa ngayon, dapat na mabuo ang extension at, kung ide-deploy mo ito sa Edge bilang isang extension, makikita mo ang isang form na maayos na ipinapakita.

Binabati kita, nagawa mo na ang unang hakbang patungo sa paggawa ng isang browser extension. Sa mga susunod na aralin, gagawin mo itong mas functional at kapaki-pakinabang.

## Hamon ng GitHub Copilot Agent 🚀

Gamitin ang Agent mode upang kumpletuhin ang sumusunod na hamon:

**Deskripsyon:** Pagandahin ang browser extension sa pamamagitan ng pagdaragdag ng mga feature para sa form validation at user feedback upang mapabuti ang karanasan ng user sa paglalagay ng API keys at region codes.

**Prompt:** Gumawa ng mga JavaScript validation function na susuriin kung ang field ng API key ay naglalaman ng hindi bababa sa 20 characters at kung ang region code ay sumusunod sa tamang format (tulad ng 'US-NEISO'). Magdagdag ng visual feedback sa pamamagitan ng pagbabago ng kulay ng input border sa berde para sa mga valid na input at pula para sa mga invalid. Magdagdag din ng toggle feature upang ipakita/itago ang API key para sa seguridad.

---

## 🚀 Hamon

Tingnan ang isang browser extension store at mag-install ng isa sa iyong browser. Maaari mong suriin ang mga file nito sa mga kawili-wiling paraan. Ano ang iyong natuklasan?

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/24)

## Review & Pag-aaral sa Sarili

Sa araling ito, natutunan mo ang kaunti tungkol sa kasaysayan ng web browser; samantalahin ang pagkakataong ito upang matuto pa tungkol sa kung paano inisip ng mga imbentor ng World Wide Web ang paggamit nito sa pamamagitan ng pagbabasa ng higit pa tungkol sa kasaysayan nito. Ilang kapaki-pakinabang na site ay:

[The History of Web Browsers](https://www.mozilla.org/firefox/browsers/browser-history/)

[History of the Web](https://webfoundation.org/about/vision/history-of-the-web/)

[Panayam kay Tim Berners-Lee](https://www.theguardian.com/technology/2019/mar/12/tim-berners-lee-on-30-years-of-the-web-if-we-dream-a-little-we-can-get-the-web-we-want)

## Takdang-Aralin 

[Restyle your extension](assignment.md)

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat sinisikap naming maging tumpak, pakatandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na pinagmulan. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.