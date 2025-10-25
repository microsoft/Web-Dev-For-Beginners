<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "20c72cf2e5b0050d38ca3cb14a75a9df",
  "translation_date": "2025-10-24T19:29:42+00:00",
  "source_file": "3-terrarium/1-intro-to-html/README.md",
  "language_code": "sw"
}
-->
# Mradi wa Terrarium Sehemu ya 1: Utangulizi wa HTML

![Utangulizi wa HTML](../../../../translated_images/webdev101-html.4389c2067af68e98280c1bde52b6c6269f399eaae3659b7c846018d8a7b0bbd9.sw.png)
> Sketchnote na [Tomomi Imura](https://twitter.com/girlie_mac)

HTML, au HyperText Markup Language, ni msingi wa kila tovuti uliyowahi kutembelea. Fikiria HTML kama mifupa inayotoa muundo kwa kurasa za wavuti – inafafanua wapi maudhui yanakwenda, jinsi yanavyopangwa, na kila kipande kinawakilisha nini. Wakati CSS baadaye itapamba HTML yako kwa rangi na mpangilio, na JavaScript italeta uhai kwa mwingiliano, HTML hutoa muundo muhimu unaowezesha kila kitu kingine.

Katika somo hili, utaunda muundo wa HTML kwa kiolesura cha terrarium ya mtandaoni. Mradi huu wa vitendo utakufundisha dhana za msingi za HTML huku ukijenga kitu kinachovutia kwa macho. Utajifunza jinsi ya kupanga maudhui kwa kutumia vipengele vya semantic, kufanya kazi na picha, na kuunda msingi wa programu ya wavuti inayoweza kuingiliana.

Mwisho wa somo hili, utakuwa na ukurasa wa HTML unaofanya kazi unaoonyesha picha za mimea katika safu zilizopangwa, tayari kwa kupambwa katika somo linalofuata. Usijali ikiwa inaonekana rahisi mwanzoni – hiyo ndiyo hasa HTML inapaswa kufanya kabla ya CSS kuongeza mwonekano wa kuvutia.

## Maswali ya Kabla ya Somo

[Maswali ya kabla ya somo](https://ff-quizzes.netlify.app/web/quiz/15)

> 📺 **Tazama na Jifunze**: Angalia video hii ya muhtasari wa kusaidia
> 
> [![Video ya Misingi ya HTML](https://img.youtube.com/vi/1TvxJKBzhyQ/0.jpg)](https://www.youtube.com/watch?v=1TvxJKBzhyQ)

## Kuandaa Mradi Wako

Kabla ya kuanza kuandika msimbo wa HTML, hebu tuandae mazingira sahihi ya kazi kwa mradi wako wa terrarium. Kuunda muundo wa faili ulioandaliwa tangu mwanzo ni tabia muhimu itakayokusaidia katika safari yako ya maendeleo ya wavuti.

### Kazi: Unda Muundo wa Mradi Wako

Utaunda folda maalum kwa mradi wako wa terrarium na kuongeza faili yako ya kwanza ya HTML. Hapa kuna njia mbili unazoweza kutumia:

**Chaguo 1: Kutumia Visual Studio Code**
1. Fungua Visual Studio Code
2. Bonyeza "File" → "Open Folder" au tumia `Ctrl+K, Ctrl+O` (Windows/Linux) au `Cmd+K, Cmd+O` (Mac)
3. Unda folda mpya inayoitwa `terrarium` na uchague
4. Katika paneli ya Explorer, bonyeza ikoni ya "New File"
5. Peana jina faili yako `index.html`

![VS Code Explorer ikionyesha uundaji wa faili mpya](../../../../translated_images/vs-code-index.e2986cf919471eb984a0afef231380c8b132b000635105f2397bd2754d1b689c.sw.png)

**Chaguo 2: Kutumia Amri za Terminal**
```bash
mkdir terrarium
cd terrarium
touch index.html
code index.html
```

**Hivi ndivyo amri hizi zinavyofanikisha:**
- **Inaunda** saraka mpya inayoitwa `terrarium` kwa mradi wako
- **Inasogea** ndani ya saraka ya terrarium
- **Inaunda** faili tupu ya `index.html`
- **Inafungua** faili katika Visual Studio Code kwa kuhariri

> 💡 **Kidokezo cha Kitaalamu**: Jina la faili `index.html` ni maalum katika maendeleo ya wavuti. Wakati mtu anapotembelea tovuti, vivinjari huangalia moja kwa moja `index.html` kama ukurasa wa chaguo-msingi wa kuonyesha. Hii inamaanisha URL kama `https://mysite.com/projects/` itahudumia faili ya `index.html` kutoka folda ya `projects` bila hitaji la kutaja jina la faili kwenye URL.

## Kuelewa Muundo wa Hati ya HTML

Kila hati ya HTML hufuata muundo maalum ambao vivinjari vinahitaji kuelewa na kuonyesha kwa usahihi. Fikiria muundo huu kama barua rasmi – ina vipengele vinavyohitajika kwa mpangilio maalum vinavyosaidia mpokeaji (katika kesi hii, kivinjari) kushughulikia maudhui ipasavyo.

Hebu tuanze kwa kuongeza msingi muhimu ambao kila hati ya HTML inahitaji.

### Tamko la DOCTYPE na Kipengele Kikuu

Mistari miwili ya kwanza ya faili yoyote ya HTML hutumika kama "utambulisho" wa hati kwa kivinjari:

```html
<!DOCTYPE html>
<html></html>
```

**Kuelewa kile msimbo huu unachofanya:**
- **Inatangaza** aina ya hati kama HTML5 kwa kutumia `<!DOCTYPE html>`
- **Inaunda** kipengele kikuu `<html>` ambacho kitakuwa na maudhui yote ya ukurasa
- **Inaweka** viwango vya kisasa vya wavuti kwa uonyeshaji sahihi wa kivinjari
- **Inahakikisha** uonyeshaji thabiti katika vivinjari na vifaa tofauti

> 💡 **Kidokezo cha VS Code**: Peleka mshale juu ya tagi yoyote ya HTML katika VS Code ili kuona maelezo ya kusaidia kutoka MDN Web Docs, ikiwa ni pamoja na mifano ya matumizi na maelezo ya utangamano wa kivinjari.

> 📚 **Jifunze Zaidi**: Tamko la DOCTYPE huzuia vivinjari kuingia katika "hali ya quirks," ambayo ilitumika kusaidia tovuti za zamani sana. Maendeleo ya kisasa ya wavuti hutumia tamko rahisi `<!DOCTYPE html>` kuhakikisha [uonyeshaji unaozingatia viwango](https://developer.mozilla.org/docs/Web/HTML/Quirks_Mode_and_Standards_Mode).

## Kuongeza Metadata Muhimu ya Hati

Sehemu ya `<head>` ya hati ya HTML ina taarifa muhimu ambayo vivinjari na injini za utafutaji zinahitaji, lakini ambayo wageni hawaoni moja kwa moja kwenye ukurasa. Fikiria kama "maelezo ya nyuma ya pazia" yanayosaidia ukurasa wako kufanya kazi ipasavyo na kuonekana kwa usahihi katika vifaa na majukwaa tofauti.

Metadata hii inaambia vivinjari jinsi ya kuonyesha ukurasa wako, ni usimbaji wa herufi gani wa kutumia, na jinsi ya kushughulikia ukubwa wa skrini tofauti – yote ni muhimu kwa kuunda kurasa za wavuti za kitaalamu na zinazoweza kufikiwa.

### Kazi: Ongeza Kichwa cha Hati

Weka sehemu hii ya `<head>` kati ya tagi zako za kufungua na kufunga `<html>`:

```html
<head>
	<title>Welcome to my Virtual Terrarium</title>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
```

**Kufafanua kile kila kipengele kinachofanikisha:**
- **Inaweka** kichwa cha ukurasa kinachoonekana kwenye tabo za kivinjari na matokeo ya utafutaji
- **Inataja** usimbaji wa herufi wa UTF-8 kwa uonyeshaji sahihi wa maandishi duniani kote
- **Inahakikisha** utangamano na matoleo ya kisasa ya Internet Explorer
- **Inaseti** muundo wa mwitikio kwa kuweka viewport inayolingana na upana wa kifaa
- **Inadhibiti** kiwango cha kuanza cha zoom kuonyesha maudhui kwa ukubwa wa asili

> 🤔 **Fikiria Hili**: Nini kitatokea ikiwa utaweka tagi ya meta ya viewport kama hii: `<meta name="viewport" content="width=600">`? Hii italazimisha ukurasa kuwa na upana wa pikseli 600 kila wakati, ikivunja muundo wa mwitikio! Jifunze zaidi kuhusu [usanidi sahihi wa viewport](https://developer.mozilla.org/docs/Web/HTML/Viewport_meta_tag).

## Kujenga Mwili wa Hati

Kipengele cha `<body>` kina maudhui yote yanayoonekana ya ukurasa wako wa wavuti – kila kitu ambacho watumiaji wataona na kuingiliana nacho. Wakati sehemu ya `<head>` ilitoa maelekezo kwa kivinjari, sehemu ya `<body>` ina maudhui halisi: maandishi, picha, vitufe, na vipengele vingine vinavyounda kiolesura chako cha mtumiaji.

Hebu tuongeze muundo wa mwili na kuelewa jinsi tagi za HTML zinavyofanya kazi pamoja kuunda maudhui yenye maana.

### Kuelewa Muundo wa Tagi za HTML

HTML hutumia tagi za jozi kufafanua vipengele. Tagi nyingi zina tagi ya kufungua kama `<p>` na tagi ya kufunga kama `</p>`, na maudhui katikati: `<p>Hello, world!</p>`. Hii huunda kipengele cha aya kinachobeba maandishi "Hello, world!".

### Kazi: Ongeza Kipengele cha Mwili

Sasisha faili yako ya HTML ili kujumuisha kipengele cha `<body>`:

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

**Hivi ndivyo muundo huu kamili unavyotoa:**
- **Inaweka** mfumo wa msingi wa hati ya HTML5
- **Inajumuisha** metadata muhimu kwa uonyeshaji sahihi wa kivinjari
- **Inaunda** mwili tupu tayari kwa maudhui yako yanayoonekana
- **Inafuata** mazoea bora ya maendeleo ya wavuti ya kisasa

Sasa uko tayari kuongeza vipengele vinavyoonekana vya terrarium yako. Tutatumia vipengele vya `<div>` kama vyombo vya kupanga sehemu tofauti za maudhui, na vipengele vya `<img>` kuonyesha picha za mimea.

### Kufanya Kazi na Picha na Vyombo vya Mpangilio

Picha ni maalum katika HTML kwa sababu zinatumia tagi za "kujifunga". Tofauti na vipengele kama `<p></p>` vinavyofunika maudhui, tagi ya `<img>` ina taarifa zote zinazohitajika ndani ya tagi yenyewe kwa kutumia sifa kama `src` kwa njia ya faili ya picha na `alt` kwa upatikanaji.

Kabla ya kuongeza picha kwenye HTML yako, utahitaji kupanga faili za mradi wako ipasavyo kwa kuunda folda ya picha na kuongeza michoro ya mimea.

**Kwanza, andaa picha zako:**
1. Unda folda inayoitwa `images` ndani ya folda ya mradi wako wa terrarium
2. Pakua picha za mimea kutoka [folda ya suluhisho](../../../../3-terrarium/solution/images) (picha 14 za mimea kwa jumla)
3. Nakili picha zote za mimea kwenye folda yako mpya ya `images`

### Kazi: Unda Mpangilio wa Kuonyesha Mimea

Sasa ongeza picha za mimea zilizopangwa katika safu mbili kati ya tagi zako za `<body></body>`:

```html
<div id="page">
	<div id="left-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant1" src="../../../../translated_images/plant1.d87946a2ca70cc4316bda6e6c3af7210fbe9ada5539a7885141a9ce0efaf7be3.sw.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant2" src="../../../../translated_images/plant2.8daa1606c9c1ad896bb171212c7d1d882e504b76b8ec3a2d1c337d775cf50dc3.sw.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant3" src="../../../../translated_images/plant3.8b0d484381a2a2a77c5c06ad97ab6ae5b7023da8c6c7678b0183bc0e46ea17a7.sw.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant4" src="../../../../translated_images/plant4.656e16ae1df37be2af5f4e7b5ab6c5decc432c3d3ec2eb98b904ddbecad49db0.sw.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant5" src="../../../../translated_images/plant5.2b41b9355f11ebccd62d327f5f14e56531ecda9c6f970bc89e386ee9f0273bb0.sw.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant6" src="../../../../translated_images/plant6.3d1827d03b6569946be13ae5da1f32947ae56732638a43757a7c616a6adccc5d.sw.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant7" src="../../../../translated_images/plant7.8152c302ac97f621a6c595bdf3939103568f9efc7d3b06a0f02a1ea66f479de0.sw.png" />
		</div>
	</div>
	<div id="right-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant8" src="../../../../translated_images/plant8.38d6428174ffa850a47cd1b81d528fa528adda7d23f3ae0bb42f4a27356ca5e6.sw.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant9" src="../../../../translated_images/plant9.f0e38d3327c37fc29cd2734d48d20c2cf69300898ece6d46708829e02ce540e3.sw.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant10" src="../../../../translated_images/plant10.b159d6d6e985595f56d86b4b38061b8e7b4c9969c210c199fe967269cf935e7f.sw.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant11" src="../../../../translated_images/plant11.2a03a1c2ec8ea84ef3a80c06cc6883f3960fbb669f2c0b0bd824ba33d7eb7d32.sw.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant12" src="../../../../translated_images/plant12.60e9b53e538fbaf3e5797ebf800acb483baf5639e6cf378292ac2321ab8a5ea9.sw.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant13" src="../../../../translated_images/plant13.07a51543c820bcf57f67a9a6c0acbd6211ff795e2e67a42a9718224534e95fab.sw.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant14" src="../../../../translated_images/plant14.6e486371ba7d36ba3520d9828887993cb4c3edad8bdd8ff9b1b315717ff8cb63.sw.png" />
		</div>
	</div>
</div>
```

**Hatua kwa hatua, hivi ndivyo kinachotokea katika msimbo huu:**
- **Inaunda** chombo kikuu cha ukurasa na `id="page"` kushikilia maudhui yote
- **Inaseti** vyombo viwili vya safu: `left-container` na `right-container`
- **Inapanga** mimea 7 katika safu ya kushoto na mimea 7 katika safu ya kulia
- **Inafunika** kila picha ya mmea katika div ya `plant-holder` kwa nafasi ya mtu binafsi
- **Inatumia** majina ya darasa yanayofanana kwa upambaji wa CSS katika somo linalofuata
- **Inapeana** vitambulisho vya kipekee kwa kila picha ya mmea kwa mwingiliano wa JavaScript baadaye
- **Inajumuisha** njia sahihi za faili zinazoelekeza kwenye folda ya picha

> 🤔 **Fikiria Hili**: Angalia kwamba picha zote kwa sasa zina maandishi ya alt sawa "plant". Hili si bora kwa upatikanaji. Watumiaji wa skrini za kusoma wangesikia "plant" ikirudiwa mara 14 bila kujua mmea maalum kila picha inaonyesha. Je, unaweza kufikiria maandishi bora zaidi ya alt kwa kila picha?

> 📝 **Aina za Vipengele vya HTML**: Vipengele vya `<div>` ni "block-level" na vinachukua upana kamili, wakati vipengele vya `<span>` ni "inline" na vinachukua upana unaohitajika tu. Unadhani nini kingetokea ikiwa ungebadilisha tagi zote za `<div>` kuwa tagi za `<span>`?

Kwa msimbo huu ulioongezwa, mimea itaonekana kwenye skrini, ingawa haitakuwa na mwonekano mzuri bado – hiyo ndiyo kazi ya CSS katika somo linalofuata! Kwa sasa, una msingi thabiti wa HTML unaopanga maudhui yako ipasavyo na kufuata mazoea bora ya upatikanaji.

## Kutumia HTML ya Semantic kwa Upatikanaji

HTML ya semantic inamaanisha kuchagua vipengele vya HTML kulingana na maana na kusudi lake, si tu mwonekano wake. Unapotumia markup ya semantic, unawasiliana muundo na maana ya maudhui yako kwa vivinjari, injini za utafutaji, na teknolojia za kusaidia kama skrini za kusoma.

Mbinu hii inafanya tovuti zako ziweze kufikiwa zaidi na watumiaji wenye ulemavu na husaidia injini za utafutaji kuelewa maudhui yako vizuri. Ni kanuni ya msingi ya maendeleo ya wavuti ya kisasa inayounda uzoefu bora kwa kila mtu.

### Kuongeza Kichwa cha Ukurasa cha Semantic

Hebu tuongeze kichwa sahihi kwa ukurasa wako wa terrarium. Weka mstari huu mara tu baada ya tagi yako ya kufungua `<body>`:

```html
<h1>My Terrarium</h1>
```

**Kwa nini markup ya semantic ni muhimu:**
- **Inasaidia** skrini za kusoma kuvinjari na kuelewa muundo wa ukurasa
- **Inaboresha** uboreshaji wa injini za utafutaji (SEO) kwa kufafanua uongozi wa maudhui
- **Inaboresha** upatikanaji kwa watumiaji wenye ulemavu wa kuona au tofauti za utambuzi
- **Inaunda** uzoefu bora wa mtumiaji katika vifaa na majukwaa yote
- **Inafuata** viwango vya wavuti na mazoea bora kwa maendeleo ya kitaalamu

**Mifano ya chaguo za semantic vs. zisizo za semantic:**

| Kusudi | ✅ Chaguo la Semantic | ❌ Chaguo Lisilo la Semantic |
|--------|-----------------------|-----------------------------|
| Kichwa kikuu | `<h1>Title</h1>` | `<div class="big-text">Title</div>` |
| Uvinjari | `<nav><ul><li></li></ul></nav>` | `<div class="menu"><div></div></div>` |
| Kitufe | `<button>Click me</button>` | `<span onclick="...">Click me</span>` |
| Maudhui ya makala | `<article><p></p></article>` | `<div class="content"><div></div></div>` |

> 🎥 **Tazama Kwa Vitendo**: Tazama [jinsi skrini za kusoma zinavyoshirikiana na kurasa za wavuti](https://www.youtube.com/watch?v=OUDV1gqs9GA) kuelewa kwa nini markup ya semantic ni muhimu kwa upatikanaji. Angalia jinsi muundo sahihi wa HTML unavyosaidia watumiaji kuvinjari kwa ufanisi.

## Kuunda Chombo cha Terrarium

Sasa hebu tuongeze muundo wa HTML kwa terrarium yenyewe – chombo cha glasi ambapo mimea hatimaye itawekwa. Sehemu hii inaonyesha dhana muhimu: HTML hutoa muundo, lakini bila upambaji wa CSS, vipengele hivi havitaonekana bado.

Markup ya terrarium hutumia majina ya darasa yanayoelezea ambayo yatafanya upambaji wa CSS kuwa rahisi kuelewa na kudumisha katika somo linalofuata.

### Kazi: Ongeza Muundo wa Terrarium

Weka markup hii juu ya tagi ya mwisho ya `</div>` (kabla ya tagi ya kufunga ya chombo cha ukurasa):

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

**Kuelewa muundo huu wa terrarium:**
- **Inaunda** chombo kikuu cha terrarium na kitambulisho cha kipekee kwa upambaji
- **Inafafanua** vipengele tofauti kwa kila sehemu ya kuona (juu, kuta, udongo, chini)
- **Inajumuisha** vipengele vilivyowekwa ndani kwa athari za mwangaza wa glasi (vipengele vya glossy)
- **Inatumia** majina ya darasa yanayoelezea yanayoonyesha wazi kusudi la kila kipengele
- **Inatayarisha** muundo kwa upambaji wa CSS ambao utaunda mwonekano wa glasi ya terrarium

> 🤔 **Angalia Kitu?**: Ingawa umeongeza markup hii, huoni kitu kipya kwenye ukurasa! Hii inaonyesha kikamilifu jinsi HTML inavyotoa muundo wakati CSS inatoa mwonekano. Vipengele hivi vya `<div>` vipo lakini havina upambaji wa kuona bado – hiyo inakuja katika somo linalofuata!

---

## Changamoto ya Wakala wa GitHub Copilot

Tumia hali ya Wakala kukamilisha changamoto ifuatayo:

**Maelezo:** Unda muundo wa HTML wa semantic kwa sehemu ya mwongozo wa utunzaji wa mimea ambayo inaweza kuongezwa kwenye mradi wa terrarium.
**Maelezo:** Unda sehemu ya HTML ya kimantiki inayojumuisha kichwa kikuu "Mwongozo wa Utunzaji Mimea", sehemu ndogo tatu zenye vichwa "Kumwagilia", "Mahitaji ya Mwanga", na "Utunzaji wa Udongo", kila moja ikiwa na aya ya maelezo kuhusu utunzaji wa mimea. Tumia vitambulisho vya HTML vya kimantiki kama `<section>`, `<h2>`, `<h3>`, na `<p>` kuunda muundo ipasavyo.

Jifunze zaidi kuhusu [hali ya wakala](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) hapa.

## Changamoto ya Historia ya HTML

**Kujifunza Kuhusu Mageuzi ya Wavuti**

HTML imebadilika sana tangu Tim Berners-Lee alipoanzisha kivinjari cha kwanza cha wavuti huko CERN mwaka 1990. Baadhi ya vitambulisho vya zamani kama `<marquee>` sasa vimeachwa kwa sababu havifanyi kazi vizuri na viwango vya kisasa vya upatikanaji na kanuni za muundo unaojibika.

**Jaribu Jaribio Hili:**
1. Kwa muda, funika kichwa chako cha `<h1>` ndani ya kitambulisho cha `<marquee>`: `<marquee><h1>Terrarium Yangu</h1></marquee>`
2. Fungua ukurasa wako kwenye kivinjari na angalia athari ya kusogea
3. Fikiria kwa nini kitambulisho hiki kiliachwa (dokezo: fikiria kuhusu uzoefu wa mtumiaji na upatikanaji)
4. Ondoa kitambulisho cha `<marquee>` na urudi kwenye alama ya kimantiki

**Maswali ya Kutafakari:**
- Je, kichwa kinachosogea kinaweza kuathirije watumiaji wenye ulemavu wa kuona au hisia za mwendo?
- Ni mbinu gani za kisasa za CSS zinaweza kufanikisha athari za kuona zinazofanana kwa njia inayopatikana zaidi?
- Kwa nini ni muhimu kutumia viwango vya wavuti vya sasa badala ya vipengele vilivyoachwa?

Gundua zaidi kuhusu [vipengele vya HTML vilivyopitwa na wakati na vilivyoachwa](https://developer.mozilla.org/docs/Web/HTML/Element#Obsolete_and_deprecated_elements) ili kuelewa jinsi viwango vya wavuti vinavyobadilika kuboresha uzoefu wa mtumiaji.


## Jaribio Baada ya Somo

[Jaribio baada ya somo](https://ff-quizzes.netlify.app/web/quiz/16)

## Mapitio na Kujisomea

**Kuimarisha Maarifa Yako ya HTML**

HTML imekuwa msingi wa wavuti kwa zaidi ya miaka 30, ikibadilika kutoka lugha rahisi ya alama za hati hadi jukwaa la kisasa la kujenga programu za maingiliano. Kuelewa mageuzi haya husaidia kuthamini viwango vya kisasa vya wavuti na kufanya maamuzi bora ya maendeleo.

**Njia Zinazopendekezwa za Kujifunza:**

1. **Historia na Mageuzi ya HTML**
   - Tafiti ratiba ya HTML kutoka toleo la 1.0 hadi HTML5
   - Chunguza kwa nini baadhi ya vitambulisho viliachwa (upatikanaji, urafiki wa simu, utunzaji)
   - Chunguza vipengele vya HTML vinavyoibuka na mapendekezo

2. **Uchunguzi wa Kina wa HTML ya Kimantiki**
   - Soma orodha kamili ya [vipengele vya kimantiki vya HTML5](https://developer.mozilla.org/docs/Web/HTML/Element)
   - Fanya mazoezi ya kutambua wakati wa kutumia `<article>`, `<section>`, `<aside>`, na `<main>`
   - Jifunze kuhusu sifa za ARIA kwa upatikanaji ulioimarishwa

3. **Maendeleo ya Kisasa ya Wavuti**
   - Chunguza [kuunda tovuti zinazojibika](https://docs.microsoft.com/learn/modules/build-simple-website/?WT.mc_id=academic-77807-sagibbon) kwenye Microsoft Learn
   - Elewa jinsi HTML inavyounganishwa na CSS na JavaScript
   - Jifunze kuhusu utendaji wa wavuti na mbinu bora za SEO

**Maswali ya Kutafakari:**
- Ni vitambulisho vipi vya HTML vilivyoachwa ulivyogundua, na kwa nini viliondolewa?
- Ni vipengele vipya vya HTML vinavyopendekezwa kwa matoleo yajayo?
- HTML ya kimantiki inachangiaje katika upatikanaji wa wavuti na SEO?


## Kazi

[Fanya mazoezi ya HTML yako: Unda muundo wa blogu](assignment.md)

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya kutafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.