<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "89f7f9f800ce7c9f149e98baaae8491a",
  "translation_date": "2025-08-29T10:09:42+00:00",
  "source_file": "3-terrarium/1-intro-to-html/README.md",
  "language_code": "sw"
}
-->
# Mradi wa Terrarium Sehemu ya 1: Utangulizi wa HTML

![Utangulizi wa HTML](../../../../translated_images/webdev101-html.4389c2067af68e98280c1bde52b6c6269f399eaae3659b7c846018d8a7b0bbd9.sw.png)
> Sketchnote na [Tomomi Imura](https://twitter.com/girlie_mac)

## Jaribio la Kabla ya Somo

[Jaribio la kabla ya somo](https://ff-quizzes.netlify.app/web/quiz/15)

> Tazama video

> 
> [![Video ya misingi ya Git na GitHub](https://img.youtube.com/vi/1TvxJKBzhyQ/0.jpg)](https://www.youtube.com/watch?v=1TvxJKBzhyQ)

### Utangulizi

HTML, au HyperText Markup Language, ni 'mfupa' wa wavuti. Ikiwa CSS 'inapamba' HTML yako na JavaScript inaihuisha, basi HTML ni mwili wa programu yako ya wavuti. Sintaksia ya HTML hata inaakisi wazo hilo, kwani inajumuisha vitambulisho vya "head", "body", na "footer".

Katika somo hili, tutatumia HTML kupanga 'mfupa' wa kiolesura cha terrarium yetu ya mtandaoni. Itakuwa na kichwa na safu tatu: safu ya kulia na ya kushoto ambapo mimea inayovutika itawekwa, na eneo la katikati ambalo litakuwa terrarium yenye mwonekano wa glasi. Mwisho wa somo hili, utaweza kuona mimea kwenye safu, lakini kiolesura kitaonekana cha ajabu kidogo; usijali, katika sehemu inayofuata utaongeza mitindo ya CSS ili kufanya kiolesura kionekane bora zaidi.

### Kazi

Kwenye kompyuta yako, tengeneza folda inayoitwa 'terrarium' na ndani yake, faili inayoitwa 'index.html'. Unaweza kufanya hivi kwenye Visual Studio Code baada ya kuunda folda yako ya terrarium kwa kufungua dirisha jipya la VS Code, kubofya 'open folder', na kuelekea kwenye folda yako mpya. Bofya kitufe kidogo cha 'file' kwenye kidirisha cha Explorer na uunde faili mpya:

![explorer katika VS Code](../../../../translated_images/vs-code-index.e2986cf919471eb984a0afef231380c8b132b000635105f2397bd2754d1b689c.sw.png)

Au

Tumia amri hizi kwenye git bash yako:
* `mkdir terrarium`
* `cd terrarium`
* `touch index.html`
* `code index.html` au `nano index.html`

> Faili za index.html zinaonyesha kwa kivinjari kuwa ni faili chaguo-msingi kwenye folda; URL kama `https://anysite.com/test` inaweza kujengwa kwa kutumia muundo wa folda unaojumuisha folda inayoitwa `test` na `index.html` ndani yake; `index.html` haihitaji kuonyeshwa kwenye URL.

---

## DocType na vitambulisho vya html

Mstari wa kwanza wa faili ya HTML ni doctype yake. Ni jambo la kushangaza kidogo kwamba unahitaji kuwa na mstari huu juu kabisa ya faili, lakini unaiambia vivinjari vya zamani kwamba kivinjari kinapaswa kutoa ukurasa katika hali ya kawaida, kufuata vipimo vya sasa vya html.

> Kidokezo: katika VS Code, unaweza kuelekeza mshale juu ya tagi na kupata maelezo kuhusu matumizi yake kutoka kwa miongozo ya Marejeo ya MDN.

Mstari wa pili unapaswa kuwa tagi ya kufungua `<html>`, ikifuatiwa mara moja na tagi yake ya kufunga `</html>`. Vitambulisho hivi ni vipengele vya mizizi vya kiolesura chako.

### Kazi

Ongeza mistari hii juu ya faili yako ya `index.html`:

```HTML
<!DOCTYPE html>
<html></html>
```

✅ Kuna hali tofauti chache zinazoweza kuamuliwa kwa kuweka DocType na kamba ya swali: [Quirks Mode na Standards Mode](https://developer.mozilla.org/docs/Web/HTML/Quirks_Mode_and_Standards_Mode). Hali hizi zilitumika kusaidia vivinjari vya zamani sana ambavyo havitumiki sana siku hizi (kama Netscape Navigator 4 na Internet Explorer 5). Unaweza kushikamana na tamko la kawaida la doctype.

---

## 'Head' ya hati

Eneo la 'head' la hati ya HTML linajumuisha taarifa muhimu kuhusu ukurasa wako wa wavuti, pia inajulikana kama [metadata](https://developer.mozilla.org/docs/Web/HTML/Element/meta). Katika kesi yetu, tunaiambia seva ya wavuti ambayo ukurasa huu utatumwa ili kutolewa, mambo haya manne:

-   kichwa cha ukurasa
-   metadata ya ukurasa ikijumuisha:
    -   'character set', inayoonyesha aina ya usimbaji wa herufi unaotumika kwenye ukurasa
    -   taarifa za kivinjari, ikijumuisha `x-ua-compatible` ambayo inaonyesha kuwa kivinjari cha IE=edge kinasaidiwa
    -   taarifa kuhusu jinsi viewport inavyopaswa kujiendesha inapopakuliwa. Kuweka viewport kuwa na kiwango cha awali cha 1 hudhibiti kiwango cha kukuza wakati ukurasa unapopakuliwa kwa mara ya kwanza.

### Kazi

Ongeza kizuizi cha 'head' kwenye hati yako kati ya vitambulisho vya kufungua na kufunga `<html>`.

```html
<head>
	<title>Welcome to my Virtual Terrarium</title>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
```

✅ Nini kitatokea ikiwa utaweka tagi ya meta ya viewport kama hii: `<meta name="viewport" content="width=600">`? Soma zaidi kuhusu [viewport](https://developer.mozilla.org/docs/Web/HTML/Viewport_meta_tag).

---

## 'Body' ya hati

### Vitambulisho vya HTML

Katika HTML, unaongeza vitambulisho kwenye faili yako ya .html ili kuunda vipengele vya ukurasa wa wavuti. Kila tagi kawaida huwa na tagi ya kufungua na kufunga, kama hii: `<p>hello</p>` kuonyesha aya. Unda mwili wa kiolesura chako kwa kuongeza seti ya vitambulisho vya `<body>` ndani ya jozi ya vitambulisho vya `<html>`; markup yako sasa inaonekana kama hii:

### Kazi

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

Sasa, unaweza kuanza kujenga ukurasa wako. Kawaida, unatumia vitambulisho vya `<div>` kuunda vipengele tofauti kwenye ukurasa. Tutaunda mfululizo wa vipengele vya `<div>` ambavyo vitakuwa na picha.

### Picha

Tagi moja ya html ambayo haihitaji tagi ya kufunga ni `<img>`, kwa sababu ina kipengele cha `src` ambacho kina taarifa zote zinazohitajika ili kutoa kipengele hicho kwenye ukurasa.

Tengeneza folda kwenye programu yako inayoitwa `images` na ndani yake, ongeza picha zote kutoka kwenye [folda ya chanzo](../../../../3-terrarium/solution/images); (kuna picha 14 za mimea).

### Kazi

Ongeza picha hizo za mimea kwenye safu mbili kati ya vitambulisho vya `<body></body>`:

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

> Kumbuka: Spans vs. Divs. Divs huchukuliwa kama vipengele vya 'block', na Spans ni 'inline'. Nini kitatokea ikiwa utabadilisha divs hizi kuwa spans?

Kwa markup hii, mimea sasa inaonekana kwenye skrini. Inaonekana vibaya, kwa sababu bado haijapambwa kwa kutumia CSS, na tutafanya hivyo katika somo linalofuata.

Kila picha ina maandishi ya alt ambayo yataonekana hata kama huwezi kuona au kutoa picha. Hii ni sifa muhimu kujumuisha kwa ajili ya upatikanaji. Jifunze zaidi kuhusu upatikanaji katika masomo yajayo; kwa sasa, kumbuka kuwa sifa ya alt hutoa taarifa mbadala kwa picha ikiwa mtumiaji kwa sababu fulani hawezi kuiona (kwa sababu ya muunganisho wa polepole, hitilafu kwenye sifa ya src, au ikiwa mtumiaji anatumia kisomaji skrini).

✅ Je, uliona kwamba kila picha ina tagi ya alt sawa? Je, hii ni mazoea mazuri? Kwa nini au kwa nini siyo? Je, unaweza kuboresha msimbo huu?

---

## Markup ya Semantiki

Kwa ujumla, ni bora kutumia 'semantiki' yenye maana unapojumuisha HTML. Hii inamaanisha nini? Inamaanisha kwamba unatumia vitambulisho vya HTML kuwakilisha aina ya data au mwingiliano vilivyoundwa kwa ajili yake. Kwa mfano, maandishi ya kichwa kikuu kwenye ukurasa yanapaswa kutumia tagi ya `<h1>`.

Ongeza mstari ufuatao chini ya tagi yako ya kufungua `<body>`:

```html
<h1>My Terrarium</h1>
```

Kutumia markup ya semantiki kama kuwa na vichwa kuwa `<h1>` na orodha zisizo na mpangilio kuwa `<ul>` husaidia wasomaji wa skrini kuvinjari kupitia ukurasa. Kwa ujumla, vifungo vinapaswa kuandikwa kama `<button>` na orodha ziwe `<li>`. Ingawa inawezekana kutumia vipengele vya `<span>` vilivyopambwa maalum na vishughulikiaji vya kubofya kuiga vifungo, ni bora kwa watumiaji wenye ulemavu kutumia teknolojia kuamua wapi kwenye ukurasa kifungo kipo, na kuingiliana nacho, ikiwa kipengele kinaonekana kama kifungo. Kwa sababu hii, jaribu kutumia markup ya semantiki iwezekanavyo.

✅ Tazama kisomaji skrini na [jinsi kinavyoshirikiana na ukurasa wa wavuti](https://www.youtube.com/watch?v=OUDV1gqs9GA). Je, unaweza kuona kwa nini kuwa na markup isiyo ya semantiki kunaweza kumkatisha tamaa mtumiaji?

## Terrarium

Sehemu ya mwisho ya kiolesura hiki inahusisha kuunda markup ambayo itapambwa ili kuunda terrarium.

### Kazi:

Ongeza markup hii juu ya tagi ya mwisho ya `</div>`:

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

✅ Ingawa umeongeza markup hii kwenye skrini, huoni chochote kikitolewa. Kwa nini?

---

## 🚀Changamoto

Kuna baadhi ya vitambulisho vya zamani vya HTML ambavyo bado ni vya kufurahisha kucheza navyo, ingawa hupaswi kutumia vitambulisho vilivyopitwa na wakati kama [vitambulisho hivi](https://developer.mozilla.org/docs/Web/HTML/Element#Obsolete_and_deprecated_elements) kwenye markup yako. Bado, unaweza kutumia tagi ya zamani ya `<marquee>` kufanya kichwa cha h1 kitembee kwa usawa? (ikiwa utafanya hivyo, usisahau kuiondoa baadaye)

## Jaribio la Baada ya Somo

[Jaribio la baada ya somo](https://ff-quizzes.netlify.app/web/quiz/16)

## Mapitio na Kujisomea

HTML ni mfumo wa ujenzi wa 'kuaminika na wa kweli' ambao umeisaidia wavuti kuwa jinsi ilivyo leo. Jifunze kidogo kuhusu historia yake kwa kusoma baadhi ya vitambulisho vya zamani na vipya. Je, unaweza kuelewa kwa nini baadhi ya vitambulisho viliachwa na vingine vikaongezwa? Ni vitambulisho gani vinaweza kuanzishwa siku zijazo?

Jifunze zaidi kuhusu kujenga tovuti kwa wavuti na vifaa vya mkononi kwenye [Microsoft Learn](https://docs.microsoft.com/learn/modules/build-simple-website/?WT.mc_id=academic-77807-sagibbon).

## Kazi

[Fanya mazoezi ya HTML yako: Jenga mfano wa blogu](assignment.md)

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, inashauriwa kutumia huduma ya tafsiri ya kitaalamu ya binadamu. Hatutawajibika kwa maelewano mabaya au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.