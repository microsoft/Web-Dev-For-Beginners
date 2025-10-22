<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "20c72cf2e5b0050d38ca3cb14a75a9df",
  "translation_date": "2025-10-22T15:32:18+00:00",
  "source_file": "3-terrarium/1-intro-to-html/README.md",
  "language_code": "tl"
}
-->
# Proyekto ng Terrarium Bahagi 1: Panimula sa HTML

![Panimula sa HTML](../../../../translated_images/webdev101-html.4389c2067af68e98280c1bde52b6c6269f399eaae3659b7c846018d8a7b0bbd9.tl.png)
> Sketchnote ni [Tomomi Imura](https://twitter.com/girlie_mac)

Ang HTML, o HyperText Markup Language, ang pundasyon ng bawat website na iyong binisita. Isipin ang HTML bilang kalansay na nagbibigay ng istruktura sa mga web page – ito ang nagtatakda kung saan ilalagay ang nilalaman, paano ito iaayos, at ano ang kinakatawan ng bawat bahagi. Habang ang CSS ang "magbibihis" sa iyong HTML gamit ang mga kulay at layout, at ang JavaScript ang magbibigay ng interaktibidad, ang HTML ang nagbibigay ng mahalagang istruktura na nagpapahintulot sa lahat ng iba pang bagay na mangyari.

Sa araling ito, gagawa ka ng istruktura ng HTML para sa isang virtual na interface ng terrarium. Ang proyektong ito ay magtuturo sa iyo ng mga pangunahing konsepto ng HTML habang gumagawa ng isang bagay na kaakit-akit sa paningin. Matututuhan mo kung paano ayusin ang nilalaman gamit ang mga semantic na elemento, magtrabaho gamit ang mga imahe, at lumikha ng pundasyon para sa isang interaktibong web application.

Sa pagtatapos ng araling ito, magkakaroon ka ng gumaganang HTML page na nagpapakita ng mga imahe ng halaman sa maayos na mga kolum, handa na para sa pag-istilo sa susunod na aralin. Huwag mag-alala kung mukhang basic ito sa simula – ganyan talaga ang HTML bago magdagdag ng visual polish ang CSS.

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/15)

> 📺 **Manood at Matuto**: Tingnan ang kapaki-pakinabang na video overview
> 
> [![HTML Fundamentals Video](https://img.youtube.com/vi/1TvxJKBzhyQ/0.jpg)](https://www.youtube.com/watch?v=1TvxJKBzhyQ)

## Pagsisimula ng Iyong Proyekto

Bago tayo sumabak sa HTML code, mag-set up muna tayo ng maayos na workspace para sa iyong proyekto ng terrarium. Ang paggawa ng organisadong istruktura ng file mula sa simula ay isang mahalagang ugali na magagamit mo sa buong paglalakbay mo sa web development.

### Gawain: Gumawa ng Istruktura ng Proyekto

Gagawa ka ng dedikadong folder para sa iyong proyekto ng terrarium at magdadagdag ng iyong unang HTML file. Narito ang dalawang paraan na maaari mong gamitin:

**Opsyon 1: Gamit ang Visual Studio Code**
1. Buksan ang Visual Studio Code
2. I-click ang "File" → "Open Folder" o gamitin ang `Ctrl+K, Ctrl+O` (Windows/Linux) o `Cmd+K, Cmd+O` (Mac)
3. Gumawa ng bagong folder na tinatawag na `terrarium` at piliin ito
4. Sa Explorer pane, i-click ang "New File" icon
5. Pangalanan ang iyong file na `index.html`

![VS Code Explorer na nagpapakita ng paggawa ng bagong file](../../../../translated_images/vs-code-index.e2986cf919471eb984a0afef231380c8b132b000635105f2397bd2754d1b689c.tl.png)

**Opsyon 2: Gamit ang Terminal Commands**
```bash
mkdir terrarium
cd terrarium
touch index.html
code index.html
```

**Narito ang nagagawa ng mga command na ito:**
- **Gumagawa** ng bagong direktoryo na tinatawag na `terrarium` para sa iyong proyekto
- **Nagna-navigate** sa loob ng direktoryo ng terrarium
- **Gumagawa** ng walang laman na `index.html` file
- **Binubuksan** ang file sa Visual Studio Code para sa pag-edit

> 💡 **Pro Tip**: Ang filename na `index.html` ay espesyal sa web development. Kapag may bumisita sa isang website, awtomatikong hinahanap ng mga browser ang `index.html` bilang default na page na ipapakita. Nangangahulugan ito na ang URL tulad ng `https://mysite.com/projects/` ay awtomatikong magsisilbi sa `index.html` file mula sa `projects` folder nang hindi kailangang tukuyin ang filename sa URL.

## Pag-unawa sa Istruktura ng HTML Document

Ang bawat HTML document ay sumusunod sa isang partikular na istruktura na kailangan ng mga browser upang maunawaan at maipakita nang tama. Isipin ang istruktura na ito tulad ng isang pormal na liham – mayroon itong mga kinakailangang elemento sa tamang pagkakasunod-sunod na tumutulong sa tatanggap (sa kasong ito, ang browser) na iproseso nang maayos ang nilalaman.

Simulan natin sa pagdaragdag ng mahalagang pundasyon na kailangan ng bawat HTML document.

### Ang DOCTYPE Declaration at Root Element

Ang unang dalawang linya ng anumang HTML file ay nagsisilbing "panimula" ng dokumento sa browser:

```html
<!DOCTYPE html>
<html></html>
```

**Pag-unawa sa ginagawa ng code na ito:**
- **Idinedeklara** ang uri ng dokumento bilang HTML5 gamit ang `<!DOCTYPE html>`
- **Gumagawa** ng root `<html>` element na maglalaman ng lahat ng nilalaman ng page
- **Itinatakda** ang modernong web standards para sa tamang pag-render ng browser
- **Tinitiyak** ang pare-parehong pagpapakita sa iba't ibang browser at device

> 💡 **VS Code Tip**: I-hover ang anumang HTML tag sa VS Code upang makita ang kapaki-pakinabang na impormasyon mula sa MDN Web Docs, kabilang ang mga halimbawa ng paggamit at detalye ng compatibility ng browser.

> 📚 **Matuto Pa**: Ang DOCTYPE declaration ay pumipigil sa mga browser na pumasok sa "quirks mode," na ginamit upang suportahan ang napakalumang mga website. Ang modernong web development ay gumagamit ng simpleng `<!DOCTYPE html>` declaration upang matiyak ang [standards-compliant rendering](https://developer.mozilla.org/docs/Web/HTML/Quirks_Mode_and_Standards_Mode).

## Pagdaragdag ng Mahalagang Metadata ng Dokumento

Ang `<head>` na seksyon ng isang HTML document ay naglalaman ng mahalagang impormasyon na kailangan ng mga browser at search engine, ngunit hindi direktang nakikita ng mga bisita sa page. Isipin ito bilang "behind-the-scenes" na impormasyon na tumutulong sa iyong webpage na gumana nang maayos at lumitaw nang tama sa iba't ibang device at platform.

Ang metadata na ito ay nagsasabi sa mga browser kung paano ipapakita ang iyong page, anong character encoding ang gagamitin, at kung paano hahawakan ang iba't ibang laki ng screen – lahat ng ito ay mahalaga para sa paggawa ng propesyonal, accessible na mga web page.

### Gawain: Idagdag ang Document Head

Ipasok ang `<head>` na seksyon sa pagitan ng iyong pagbubukas at pagsasara ng `<html>` tags:

```html
<head>
	<title>Welcome to my Virtual Terrarium</title>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
```

**Pagbubuo ng ginagawa ng bawat elemento:**
- **Itinatakda** ang pamagat ng page na lumilitaw sa mga tab ng browser at resulta ng paghahanap
- **Tinutukoy** ang UTF-8 character encoding para sa tamang pagpapakita ng teksto sa buong mundo
- **Tinitiyak** ang compatibility sa mga modernong bersyon ng Internet Explorer
- **Kinokontrol** ang disenyo ng responsive sa pamamagitan ng pagtatakda ng viewport na tumutugma sa lapad ng device
- **Kinokontrol** ang initial zoom level upang ipakita ang nilalaman sa natural na laki

> 🤔 **Pag-isipan Ito**: Ano ang mangyayari kung magtakda ka ng viewport meta tag tulad nito: `<meta name="viewport" content="width=600">`? Pipilitin nitong palaging maging 600 pixels ang lapad ng page, na sisira sa disenyo ng responsive! Matuto pa tungkol sa [tamang configuration ng viewport](https://developer.mozilla.org/docs/Web/HTML/Viewport_meta_tag).

## Pagbuo ng Katawan ng Dokumento

Ang `<body>` na elemento ay naglalaman ng lahat ng nakikitang nilalaman ng iyong webpage – lahat ng makikita at makikipag-ugnayan ang mga user. Habang ang `<head>` na seksyon ay nagbibigay ng mga tagubilin sa browser, ang `<body>` na seksyon ay naglalaman ng aktwal na nilalaman: teksto, mga imahe, mga button, at iba pang elemento na bumubuo sa iyong user interface.

Magdagdag tayo ng istruktura ng katawan at unawain kung paano nagtutulungan ang mga HTML tag upang lumikha ng makabuluhang nilalaman.

### Pag-unawa sa Istruktura ng HTML Tag

Gumagamit ang HTML ng mga paired tag upang tukuyin ang mga elemento. Karamihan sa mga tag ay may opening tag tulad ng `<p>` at closing tag tulad ng `</p>`, na may nilalaman sa pagitan: `<p>Hello, world!</p>`. Lumilikha ito ng paragraph element na naglalaman ng teksto na "Hello, world!".

### Gawain: Idagdag ang Body Element

I-update ang iyong HTML file upang isama ang `<body>` na elemento:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Welcome to my Virtual Terrarium</title>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</head>
	<body></body>
</html>
```

**Narito ang ibinibigay ng kumpletong istruktura na ito:**
- **Itinatakda** ang pangunahing framework ng HTML5 document
- **Kasama** ang mahalagang metadata para sa tamang pag-render ng browser
- **Gumagawa** ng walang laman na katawan na handa para sa iyong nakikitang nilalaman
- **Sumusunod** sa mga modernong best practices ng web development

Ngayon handa ka nang magdagdag ng mga nakikitang elemento ng iyong terrarium. Gagamit tayo ng `<div>` na mga elemento bilang mga lalagyan upang ayusin ang iba't ibang seksyon ng nilalaman, at `<img>` na mga elemento upang ipakita ang mga imahe ng halaman.

### Paggamit ng Mga Imahe at Layout Containers

Ang mga imahe ay espesyal sa HTML dahil gumagamit sila ng "self-closing" na mga tag. Hindi tulad ng mga elemento tulad ng `<p></p>` na bumabalot sa nilalaman, ang `<img>` na tag ay naglalaman ng lahat ng impormasyong kailangan nito sa loob ng tag mismo gamit ang mga attributes tulad ng `src` para sa file path ng imahe at `alt` para sa accessibility.

Bago magdagdag ng mga imahe sa iyong HTML, kailangan mong ayusin ang iyong mga file ng proyekto nang maayos sa pamamagitan ng paggawa ng folder ng mga imahe at pagdaragdag ng mga graphics ng halaman.

**Una, i-set up ang iyong mga imahe:**
1. Gumawa ng folder na tinatawag na `images` sa loob ng iyong terrarium project folder
2. I-download ang mga imahe ng halaman mula sa [solution folder](../../../../3-terrarium/solution/images) (14 na imahe ng halaman lahat)
3. Kopyahin ang lahat ng imahe ng halaman sa iyong bagong `images` folder

### Gawain: Gumawa ng Layout ng Display ng Halaman

Ngayon idagdag ang mga imahe ng halaman na nakaayos sa dalawang kolum sa pagitan ng iyong `<body></body>` tags:

```html
<div id="page">
	<div id="left-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant1" src="../../../../translated_images/plant1.d87946a2ca70cc4316bda6e6c3af7210fbe9ada5539a7885141a9ce0efaf7be3.tl.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant2" src="../../../../translated_images/plant2.8daa1606c9c1ad896bb171212c7d1d882e504b76b8ec3a2d1c337d775cf50dc3.tl.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant3" src="../../../../translated_images/plant3.8b0d484381a2a2a77c5c06ad97ab6ae5b7023da8c6c7678b0183bc0e46ea17a7.tl.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant4" src="../../../../translated_images/plant4.656e16ae1df37be2af5f4e7b5ab6c5decc432c3d3ec2eb98b904ddbecad49db0.tl.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant5" src="../../../../translated_images/plant5.2b41b9355f11ebccd62d327f5f14e56531ecda9c6f970bc89e386ee9f0273bb0.tl.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant6" src="../../../../translated_images/plant6.3d1827d03b6569946be13ae5da1f32947ae56732638a43757a7c616a6adccc5d.tl.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant7" src="../../../../translated_images/plant7.8152c302ac97f621a6c595bdf3939103568f9efc7d3b06a0f02a1ea66f479de0.tl.png" />
		</div>
	</div>
	<div id="right-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant8" src="../../../../translated_images/plant8.38d6428174ffa850a47cd1b81d528fa528adda7d23f3ae0bb42f4a27356ca5e6.tl.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant9" src="../../../../translated_images/plant9.f0e38d3327c37fc29cd2734d48d20c2cf69300898ece6d46708829e02ce540e3.tl.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant10" src="../../../../translated_images/plant10.b159d6d6e985595f56d86b4b38061b8e7b4c9969c210c199fe967269cf935e7f.tl.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant11" src="../../../../translated_images/plant11.2a03a1c2ec8ea84ef3a80c06cc6883f3960fbb669f2c0b0bd824ba33d7eb7d32.tl.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant12" src="../../../../translated_images/plant12.60e9b53e538fbaf3e5797ebf800acb483baf5639e6cf378292ac2321ab8a5ea9.tl.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant13" src="../../../../translated_images/plant13.07a51543c820bcf57f67a9a6c0acbd6211ff795e2e67a42a9718224534e95fab.tl.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant14" src="../../../../translated_images/plant14.6e486371ba7d36ba3520d9828887993cb4c3edad8bdd8ff9b1b315717ff8cb63.tl.png" />
		</div>
	</div>
</div>
```

**Hakbang-hakbang, narito ang nangyayari sa code na ito:**
- **Gumagawa** ng pangunahing lalagyan ng page na may `id="page"` upang maglaman ng lahat ng nilalaman
- **Nagtatakda** ng dalawang lalagyan ng kolum: `left-container` at `right-container`
- **Inaayos** ang 7 halaman sa kaliwang kolum at 7 halaman sa kanang kolum
- **Binabalot** ang bawat imahe ng halaman sa isang `plant-holder` div para sa indibidwal na pagpoposisyon
- **Nag-aaplay** ng pare-parehong class names para sa pag-istilo ng CSS sa susunod na aralin
- **Nag-aassign** ng mga unique na ID sa bawat imahe ng halaman para sa interaksyon ng JavaScript sa hinaharap
- **Kasama** ang tamang file paths na tumuturo sa folder ng mga imahe

> 🤔 **Pag-isipan Ito**: Pansinin na lahat ng imahe ay may parehong alt text na "plant" sa kasalukuyan. Hindi ito ideal para sa accessibility. Ang mga gumagamit ng screen reader ay maririnig ang "plant" na inuulit ng 14 na beses nang hindi nalalaman kung aling partikular na halaman ang ipinapakita ng bawat imahe. Makakaisip ka ba ng mas maganda, mas deskriptibong alt text para sa bawat imahe?

> 📝 **Mga Uri ng HTML Element**: Ang `<div>` na mga elemento ay "block-level" at kumukuha ng buong lapad, habang ang `<span>` na mga elemento ay "inline" at kumukuha lamang ng kinakailangang lapad. Ano sa tingin mo ang mangyayari kung papalitan mo ang lahat ng `<div>` tags ng `<span>` tags?

Sa pagdaragdag ng markup na ito, ang mga halaman ay lilitaw sa screen, bagaman hindi pa ito mukhang polished – iyon ang layunin ng CSS sa susunod na aralin! Sa ngayon, mayroon kang solidong pundasyon ng HTML na maayos na nag-aayos ng iyong nilalaman at sumusunod sa mga best practices ng accessibility.

## Paggamit ng Semantic HTML para sa Accessibility

Ang Semantic HTML ay nangangahulugang pagpili ng mga HTML na elemento batay sa kanilang kahulugan at layunin, hindi lamang sa kanilang hitsura. Kapag gumamit ka ng semantic markup, ipinapahayag mo ang istruktura at kahulugan ng iyong nilalaman sa mga browser, search engine, at assistive technologies tulad ng screen readers.

Ang approach na ito ay nagpapaganda ng accessibility ng iyong mga website para sa mga gumagamit na may kapansanan at tumutulong sa mga search engine na mas maunawaan ang iyong nilalaman. Isa itong pangunahing prinsipyo ng modernong web development na lumilikha ng mas magagandang karanasan para sa lahat.

### Pagdaragdag ng Semantic Page Title

Magdagdag tayo ng tamang heading sa iyong terrarium page. Ipasok ang linyang ito pagkatapos ng iyong pagbubukas na `<body>` tag:

```html
<h1>My Terrarium</h1>
```

**Bakit mahalaga ang semantic markup:**
- **Tumutulong** sa mga screen reader na mag-navigate at maunawaan ang istruktura ng page
- **Pinapabuti** ang search engine optimization (SEO) sa pamamagitan ng pagpapaliwanag ng hierarchy ng nilalaman
- **Pinapalakas** ang accessibility para sa mga gumagamit na may kapansanan sa paningin o cognitive differences
- **Lumilikha** ng mas magagandang karanasan ng user sa lahat ng device at platform
- **Sumusunod** sa mga web standards at best practices para sa propesyonal na development

**Mga Halimbawa ng semantic vs. non-semantic na mga pagpipilian:**

| Layunin | ✅ Semantic Choice | ❌ Non-Semantic Choice |
|---------|-------------------|------------------------|
| Pangunahing heading | `<h1>Title</h1>` | `<div class="big-text">Title</div>` |
| Navigation | `<nav><ul><li></li></ul></nav>` | `<div class="menu"><div></div></div>` |
| Button | `<button>Click me</button>` | `<span onclick="...">Click me</span>` |
| Nilalaman ng artikulo | `<article><p></p></article>` | `<div class="content"><div></div></div>` |

> 🎥 **Panoorin Ito**: Panoorin [kung paano nakikipag-ugnayan ang mga screen reader sa mga web page](https://www.youtube.com/watch?v=OUDV1gqs9GA) upang maunawaan kung bakit mahalaga ang semantic markup. Pansinin kung paano nakakatulong ang tamang istruktura ng HTML sa mga user na mag-navigate nang mahusay.

## Paglikha ng Terrarium Container

Ngayon magdagdag tayo ng istruktura ng HTML para sa terrarium mismo – ang glass container kung saan ilalagay ang mga halaman. Ang seksyong ito ay nagpapakita ng mahalagang konsepto: Ang HTML ay nagbibigay ng istruktura, ngunit kung walang CSS styling, ang mga elementong ito ay hindi pa makikita.

Ang markup ng terrarium ay gumagamit ng mga deskriptibong class names na gagawing intuitive at madaling mapanatili ang CSS styling sa susunod na aralin.

### Gawain: Idagdag ang Istruktura ng Terrarium

Ipasok ang markup na ito sa itaas ng huling `</div>` tag (bago ang closing tag ng page container):

```html
<div id="terrarium">
	<div class="jar-top"></div>
	<div class="jar-walls">
		<div class="jar-glossy-long"></div>
		<div class="jar-glossy-short"></div>
	</div>
	<div class="dirt"></div>
	<div class="jar-bottom"></div>
</div>
```

**Pag-unawa sa istruktura ng terrarium na ito:**
- **Gumagawa** ng pangunahing terrarium container na may unique na ID para sa pag-istilo
- **Tinutukoy** ang magkakahiwalay na elemento para sa bawat visual na bahagi (top, walls, dirt, bottom)
- **Kasama** ang nested na mga elemento para sa glass reflection effects (glossy elements)
- **Gumagamit** ng deskriptibong class names na malinaw na nagpapahiwatig ng layunin ng bawat elemento
- **Inihahanda** ang istruktura para sa CSS styling na lilikha ng glass terrarium appearance

> 🤔 **Pansinin Ito**: Kahit na idinagdag mo ang markup na ito, wala kang makikitang bago sa page! Ito ay perpektong nagpapakita kung paano nagbibigay ng istruktura ang HTML habang ang CSS ang nagbibigay ng hitsura. Ang mga `<div>` na elemento ay umiiral ngunit wala pang visual styling – darating iyon sa susunod na aralin!

---

## Hamon ng GitHub Copilot Agent

Gamitin ang Agent mode upang tapusin ang sumusunod na hamon:

**Deskripsyon:** Gumawa ng semantic HTML na istruktura para sa isang seksyon ng plant care guide na maaaring idagdag sa proyekto ng terrarium.
**Prompt:** Gumawa ng semantic HTML section na may pangunahing pamagat na "Plant Care Guide", tatlong subseksyon na may mga pamagat na "Watering", "Light Requirements", at "Soil Care", bawat isa ay naglalaman ng talata ng impormasyon tungkol sa pag-aalaga ng halaman. Gumamit ng tamang semantic HTML tags tulad ng `<section>`, `<h2>`, `<h3>`, at `<p>` upang maayos na maistruktura ang nilalaman.

Alamin pa tungkol sa [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) dito.

## Tuklasin ang Hamon sa Kasaysayan ng HTML

**Pag-aaral Tungkol sa Ebolusyon ng Web**

Ang HTML ay malaki ang ipinagbago mula nang likhain ni Tim Berners-Lee ang unang web browser sa CERN noong 1990. Ang ilang mas lumang mga tag tulad ng `<marquee>` ay hindi na ginagamit dahil hindi ito angkop sa mga modernong pamantayan ng accessibility at prinsipyo ng responsive design.

**Subukan ang Eksperimentong Ito:**
1. Pansamantalang balutin ang iyong pamagat na `<h1>` sa isang `<marquee>` tag: `<marquee><h1>My Terrarium</h1></marquee>`
2. Buksan ang iyong pahina sa browser at obserbahan ang scrolling effect
3. Isipin kung bakit hindi na ginagamit ang tag na ito (hint: isipin ang karanasan ng user at accessibility)
4. Alisin ang `<marquee>` tag at bumalik sa semantic markup

**Mga Tanong sa Pagmumuni-muni:**
- Paano maaaring makaapekto ang isang scrolling na pamagat sa mga user na may kapansanan sa paningin o sensitivity sa galaw?
- Anong modernong mga teknik sa CSS ang maaaring makamit ang katulad na visual effects nang mas accessible?
- Bakit mahalaga ang paggamit ng kasalukuyang pamantayan sa web sa halip na mga hindi na ginagamit na elemento?

Tuklasin pa ang tungkol sa [mga lipas at hindi na ginagamit na HTML elements](https://developer.mozilla.org/docs/Web/HTML/Element#Obsolete_and_deprecated_elements) upang maunawaan kung paano umuunlad ang mga pamantayan sa web para mapabuti ang karanasan ng user.


## Quiz Pagkatapos ng Leksyon

[Quiz pagkatapos ng leksyon](https://ff-quizzes.netlify.app/web/quiz/16)

## Review at Pag-aaral sa Sarili

**Palalimin ang Iyong Kaalaman sa HTML**

Ang HTML ay naging pundasyon ng web sa loob ng mahigit 30 taon, mula sa isang simpleng wika para sa pagmarka ng dokumento hanggang sa isang sopistikadong platform para sa paggawa ng mga interactive na aplikasyon. Ang pag-unawa sa ebolusyong ito ay tumutulong sa iyo na pahalagahan ang mga modernong pamantayan sa web at gumawa ng mas mahusay na mga desisyon sa pag-develop.

**Mga Inirerekomendang Landas sa Pag-aaral:**

1. **Kasaysayan at Ebolusyon ng HTML**
   - Saliksikin ang timeline mula HTML 1.0 hanggang HTML5
   - Tuklasin kung bakit ang ilang mga tag ay hindi na ginagamit (accessibility, pagiging angkop sa mobile, maintainability)
   - Suriin ang mga umuusbong na tampok ng HTML at mga panukala

2. **Malalim na Pag-aaral sa Semantic HTML**
   - Pag-aralan ang kumpletong listahan ng [HTML5 semantic elements](https://developer.mozilla.org/docs/Web/HTML/Element)
   - Magpraktis sa pagtukoy kung kailan gagamitin ang `<article>`, `<section>`, `<aside>`, at `<main>`
   - Alamin ang tungkol sa ARIA attributes para sa mas pinahusay na accessibility

3. **Modernong Pag-develop ng Web**
   - Tuklasin ang [pagbuo ng mga responsive na website](https://docs.microsoft.com/learn/modules/build-simple-website/?WT.mc_id=academic-77807-sagibbon) sa Microsoft Learn
   - Unawain kung paano pinagsasama ang HTML sa CSS at JavaScript
   - Alamin ang tungkol sa mga pinakamahusay na kasanayan sa web performance at SEO

**Mga Tanong sa Pagmumuni-muni:**
- Anong mga hindi na ginagamit na HTML tags ang natuklasan mo, at bakit inalis ang mga ito?
- Anong mga bagong tampok ng HTML ang iminungkahi para sa mga susunod na bersyon?
- Paano nakakatulong ang semantic HTML sa accessibility ng web at SEO?


## Takdang-Aralin

[Magpraktis sa iyong HTML: Gumawa ng mockup ng blog](assignment.md)

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat sinisikap naming maging tumpak, pakatandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.