<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "89f7f9f800ce7c9f149e98baaae8491a",
  "translation_date": "2025-08-28T15:48:49+00:00",
  "source_file": "3-terrarium/1-intro-to-html/README.md",
  "language_code": "tl"
}
-->
# Terrarium Project Part 1: Panimula sa HTML

![Panimula sa HTML](../../../../translated_images/webdev101-html.4389c2067af68e98280c1bde52b6c6269f399eaae3659b7c846018d8a7b0bbd9.tl.png)
> Sketchnote ni [Tomomi Imura](https://twitter.com/girlie_mac)

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/15)


> Panoorin ang video

> 
> [![Git at GitHub basics video](https://img.youtube.com/vi/1TvxJKBzhyQ/0.jpg)](https://www.youtube.com/watch?v=1TvxJKBzhyQ)

### Panimula

Ang HTML, o HyperText Markup Language, ang nagsisilbing 'balangkas' ng web. Kung ang CSS ang 'nagpapaganda' sa iyong HTML at ang JavaScript ang nagbibigay-buhay dito, ang HTML naman ang katawan ng iyong web application. Ang syntax ng HTML ay sumasalamin sa ideyang ito, dahil mayroon itong mga tag tulad ng "head", "body", at "footer".

Sa araling ito, gagamit tayo ng HTML upang i-layout ang 'balangkas' ng interface ng ating virtual terrarium. Magkakaroon ito ng pamagat at tatlong hanay: isang kanan at kaliwang hanay kung saan matatagpuan ang mga draggable na halaman, at isang gitnang bahagi na magiging parang baso na terrarium. Sa pagtatapos ng araling ito, makikita mo ang mga halaman sa mga hanay, ngunit maaaring magmukhang kakaiba ang interface; huwag mag-alala, sa susunod na bahagi ay magdadagdag tayo ng mga estilo gamit ang CSS upang mas mapaganda ito.

### Gawain

Sa iyong computer, gumawa ng folder na tinatawag na 'terrarium' at sa loob nito, gumawa ng file na tinatawag na 'index.html'. Maaari mo itong gawin sa Visual Studio Code pagkatapos mong likhain ang terrarium folder sa pamamagitan ng pagbubukas ng bagong VS Code window, pag-click sa 'open folder', at pag-navigate sa iyong bagong folder. I-click ang maliit na 'file' button sa Explorer pane at gumawa ng bagong file:

![explorer sa VS Code](../../../../translated_images/vs-code-index.e2986cf919471eb984a0afef231380c8b132b000635105f2397bd2754d1b689c.tl.png)

O

Gamitin ang mga command na ito sa iyong git bash:
* `mkdir terrarium`
* `cd terrarium`
* `touch index.html`
* `code index.html` o `nano index.html`

> Ang mga index.html file ay nagpapahiwatig sa browser na ito ang default na file sa isang folder; ang mga URL tulad ng `https://anysite.com/test` ay maaaring binuo gamit ang isang folder structure na may kasamang folder na tinatawag na `test` na may `index.html` sa loob nito; hindi kailangang ipakita ang `index.html` sa URL.

---

## Ang DocType at html tags

Ang unang linya ng isang HTML file ay ang doctype nito. Medyo nakakagulat na kailangan mong ilagay ang linyang ito sa pinakataas ng file, ngunit sinasabi nito sa mga lumang browser na kailangang i-render ng browser ang pahina sa standard mode, alinsunod sa kasalukuyang html specification.

> Tip: Sa VS Code, maaari kang mag-hover sa isang tag at makakakuha ng impormasyon tungkol sa paggamit nito mula sa MDN Reference guides.

Ang pangalawang linya ay dapat ang opening tag ng `<html>`, na susundan ng closing tag nito na `</html>`. Ang mga tag na ito ang root elements ng iyong interface.

### Gawain

Idagdag ang mga linyang ito sa itaas ng iyong `index.html` file:

```HTML
<!DOCTYPE html>
<html></html>
```

✅ May ilang iba't ibang mode na maaaring matukoy sa pamamagitan ng pag-set ng DocType gamit ang isang query string: [Quirks Mode at Standards Mode](https://developer.mozilla.org/docs/Web/HTML/Quirks_Mode_and_Standards_Mode). Ang mga mode na ito ay ginagamit upang suportahan ang mga lumang browser na bihirang gamitin ngayon (tulad ng Netscape Navigator 4 at Internet Explorer 5). Maaari kang manatili sa standard na deklarasyon ng doctype.

---

## Ang 'head' ng dokumento

Ang 'head' na bahagi ng HTML document ay naglalaman ng mahalagang impormasyon tungkol sa iyong web page, na kilala rin bilang [metadata](https://developer.mozilla.org/docs/Web/HTML/Element/meta). Sa ating kaso, ipapaalam natin sa web server kung saan ipapadala ang pahinang ito upang ma-render, ang apat na bagay na ito:

-   ang pamagat ng pahina
-   metadata ng pahina kabilang ang:
    -   ang 'character set', na nagsasabi kung anong character encoding ang ginagamit sa pahina
    -   impormasyon ng browser, kabilang ang `x-ua-compatible` na nagpapahiwatig na sinusuportahan ang IE=edge browser
    -   impormasyon tungkol sa kung paano dapat kumilos ang viewport kapag ito ay na-load. Ang pag-set ng viewport na magkaroon ng initial scale na 1 ay kumokontrol sa zoom level kapag unang na-load ang pahina.

### Gawain

Magdagdag ng isang 'head' block sa iyong dokumento sa pagitan ng opening at closing `<html>` tags.

```html
<head>
	<title>Welcome to my Virtual Terrarium</title>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
```

✅ Ano ang mangyayari kung mag-set ka ng viewport meta tag tulad nito: `<meta name="viewport" content="width=600">`? Magbasa pa tungkol sa [viewport](https://developer.mozilla.org/docs/Web/HTML/Viewport_meta_tag).

---

## Ang `body` ng dokumento

### HTML Tags

Sa HTML, nagdadagdag ka ng mga tag sa iyong .html file upang lumikha ng mga elemento ng isang web page. Kadalasan, ang bawat tag ay may opening at closing tag, tulad nito: `<p>hello</p>` upang ipahiwatig ang isang talata. Gumawa ng katawan ng iyong interface sa pamamagitan ng pagdaragdag ng isang set ng `<body>` tags sa loob ng `<html>` tag pair; ang iyong markup ay magiging ganito:

### Gawain

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

Ngayon, maaari mo nang simulan ang pagbuo ng iyong pahina. Karaniwan, gumagamit ka ng `<div>` tags upang lumikha ng magkakahiwalay na elemento sa isang pahina. Gumawa tayo ng serye ng `<div>` elements na maglalaman ng mga larawan.

### Mga Larawan

Ang isang html tag na hindi nangangailangan ng closing tag ay ang `<img>` tag, dahil mayroon itong `src` element na naglalaman ng lahat ng impormasyon na kailangan ng pahina upang ma-render ang item.

Gumawa ng folder sa iyong app na tinatawag na `images` at doon, idagdag ang lahat ng mga larawan mula sa [source code folder](../../../../3-terrarium/solution/images); (mayroong 14 na larawan ng mga halaman).

### Gawain

Idagdag ang mga larawang ito ng halaman sa dalawang hanay sa pagitan ng `<body></body>` tags:

```html
<div id="page">
	<div id="left-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant1" src="./images/plant1.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant2" src="./images/plant2.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant3" src="./images/plant3.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant4" src="./images/plant4.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant5" src="./images/plant5.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant6" src="./images/plant6.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant7" src="./images/plant7.png" />
		</div>
	</div>
	<div id="right-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant8" src="./images/plant8.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant9" src="./images/plant9.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant10" src="./images/plant10.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant11" src="./images/plant11.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant12" src="./images/plant12.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant13" src="./images/plant13.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant14" src="./images/plant14.png" />
		</div>
	</div>
</div>
```

> Tandaan: Spans vs. Divs. Ang Divs ay itinuturing na 'block' elements, at ang Spans ay 'inline'. Ano ang mangyayari kung gagawin mong spans ang mga divs na ito?

Sa markup na ito, lalabas na ang mga halaman sa screen. Mukha itong hindi maganda, dahil hindi pa ito naistilo gamit ang CSS, at gagawin natin iyon sa susunod na aralin.

Ang bawat larawan ay may alt text na lalabas kahit na hindi mo makita o ma-render ang isang larawan. Mahalagang attribute ito para sa accessibility. Matuto pa tungkol sa accessibility sa mga susunod na aralin; sa ngayon, tandaan na ang alt attribute ay nagbibigay ng alternatibong impormasyon para sa isang larawan kung sakaling hindi ito makita ng user (dahil sa mabagal na koneksyon, error sa src attribute, o kung gumagamit ang user ng screen reader).

✅ Napansin mo ba na ang bawat larawan ay may parehong alt tag? Magandang kasanayan ba ito? Bakit o bakit hindi? Paano mo mapapabuti ang code na ito?

---

## Semantic markup

Sa pangkalahatan, mas mainam na gumamit ng makabuluhang 'semantics' kapag nagsusulat ng HTML. Ano ang ibig sabihin nito? Nangangahulugan ito na gumagamit ka ng mga HTML tag upang kumatawan sa uri ng data o interaksyon na idinisenyo para dito. Halimbawa, ang pangunahing pamagat ng teksto sa isang pahina ay dapat gumamit ng `<h1>` tag.

Idagdag ang sumusunod na linya sa ibaba ng iyong opening `<body>` tag:

```html
<h1>My Terrarium</h1>
```

Ang paggamit ng semantic markup tulad ng pagkakaroon ng mga header na `<h1>` at unordered lists na naka-render bilang `<ul>` ay tumutulong sa mga screen reader na mag-navigate sa isang pahina. Sa pangkalahatan, ang mga button ay dapat isulat bilang `<button>` at ang mga listahan ay dapat `<li>`. Bagama't _posible_ na gumamit ng mga espesyal na istilong `<span>` elements na may click handlers upang gayahin ang mga button, mas mainam para sa mga may kapansanan na gumamit ng mga teknolohiya upang matukoy kung nasaan ang isang button sa isang pahina, at makipag-ugnayan dito, kung ang elemento ay lumalabas bilang isang button. Para sa kadahilanang ito, subukang gumamit ng semantic markup hangga't maaari.

✅ Tingnan ang isang screen reader at [kung paano ito nakikipag-ugnayan sa isang web page](https://www.youtube.com/watch?v=OUDV1gqs9GA). Nakikita mo ba kung bakit maaaring makainis ang user sa hindi semantic na markup?

## Ang terrarium

Ang huling bahagi ng interface na ito ay kinabibilangan ng paggawa ng markup na iistiluhin upang lumikha ng terrarium.

### Gawain:

Idagdag ang markup na ito sa itaas ng huling `</div>` tag:

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

✅ Kahit na idinagdag mo ang markup na ito sa screen, wala kang makikitang nagre-render. Bakit?

---

## 🚀Hamunin

May ilang kakaibang 'lumang' tag sa HTML na masaya pa ring gamitin, bagama't hindi mo dapat gamitin ang mga deprecated na tag tulad ng [mga tag na ito](https://developer.mozilla.org/docs/Web/HTML/Element#Obsolete_and_deprecated_elements) sa iyong markup. Gayunpaman, magagamit mo ba ang lumang `<marquee>` tag upang gawing horizontal na gumagalaw ang h1 title? (kung gagawin mo, huwag kalimutang alisin ito pagkatapos)

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/16)

## Review at Pag-aaral sa Sarili

Ang HTML ay ang 'subok na at maaasahang' sistema ng pagbuo na tumulong sa pagbuo ng web sa kung ano ito ngayon. Alamin ang kaunti tungkol sa kasaysayan nito sa pamamagitan ng pag-aaral ng mga lumang at bagong tag. Kaya mo bang alamin kung bakit ang ilang mga tag ay na-deprecate at ang iba ay idinagdag? Anong mga tag ang maaaring ipakilala sa hinaharap?

Matuto pa tungkol sa paggawa ng mga site para sa web at mga mobile device sa [Microsoft Learn](https://docs.microsoft.com/learn/modules/build-simple-website/?WT.mc_id=academic-77807-sagibbon).

## Takdang-Aralin

[Sanayin ang iyong HTML: Gumawa ng blog mockup](assignment.md)

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na maaaring magmula sa paggamit ng pagsasaling ito.