<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "92c4431eac70670b0450b02c1d11279a",
  "translation_date": "2025-10-24T19:28:30+00:00",
  "source_file": "3-terrarium/2-intro-to-css/README.md",
  "language_code": "sw"
}
-->
# Mradi wa Terrarium Sehemu ya 2: Utangulizi wa CSS

![Utangulizi wa CSS](../../../../translated_images/webdev101-css.3f7af5991bf53a200d79e7257e5e450408d8ea97f5b531d31b2e3976317338ee.sw.png)
> Sketchnote na [Tomomi Imura](https://twitter.com/girlie_mac)

Unakumbuka jinsi HTML ya terrarium yako ilivyokuwa rahisi sana? CSS ndiyo tunayotumia kubadilisha muundo huo wa kawaida kuwa kitu kinachovutia machoni.

Ikiwa HTML ni kama kujenga fremu ya nyumba, basi CSS ni kila kitu kinachofanya nyumba hiyo ihisi kama nyumbani - rangi za ukuta, mpangilio wa samani, taa, na jinsi vyumba vinavyoungana. Fikiria jinsi Jumba la Versailles lilianza kama nyumba ya uwindaji rahisi, lakini kwa umakini wa mapambo na mpangilio, likabadilika kuwa moja ya majengo mazuri zaidi duniani.

Leo, tutabadilisha terrarium yako kutoka kuwa ya kazi tu hadi kuwa ya kuvutia. Utajifunza jinsi ya kuweka vipengele kwa usahihi, kuunda mpangilio unaojibu ukubwa tofauti wa skrini, na kuunda mvuto wa kuona unaofanya tovuti kuvutia.

Mwisho wa somo hili, utaona jinsi mtindo wa kimkakati wa CSS unavyoweza kuboresha mradi wako kwa kiasi kikubwa. Hebu tuongeze mtindo kwenye terrarium yako.

## Maswali ya Awali ya Somo

[Maswali ya awali ya somo](https://ff-quizzes.netlify.app/web/quiz/17)

## Kuanza na CSS

CSS mara nyingi hufikiriwa kama "kufanya vitu viwe vizuri," lakini ina madhumuni mapana zaidi. CSS ni kama kuwa mkurugenzi wa filamu - unadhibiti si tu jinsi kila kitu kinavyoonekana, bali pia jinsi kinavyosogea, kinavyoitikia mwingiliano, na kinavyobadilika kulingana na hali tofauti.

CSS ya kisasa ina uwezo mkubwa sana. Unaweza kuandika msimbo unaobadilisha mpangilio kiotomatiki kwa simu, vidonge, na kompyuta za mezani. Unaweza kuunda michoro laini inayowaongoza watumiaji kwenye sehemu zinazohitajika. Matokeo yanaweza kuwa ya kuvutia sana wakati kila kitu kinapofanya kazi pamoja.

> 💡 **Ushauri wa Kitaalamu**: CSS inaendelea kubadilika na vipengele vipya na uwezo. Daima angalia [CanIUse.com](https://caniuse.com) ili kuthibitisha usaidizi wa kivinjari kwa vipengele vipya vya CSS kabla ya kuvitumia katika miradi ya uzalishaji.

**Haya ndiyo tutakayofanikiwa katika somo hili:**
- **Kuunda** muundo kamili wa kuona kwa terrarium yako kwa kutumia mbinu za kisasa za CSS
- **Kuchunguza** dhana za msingi kama cascade, urithi, na vichagua vya CSS
- **Kutumia** mikakati ya mpangilio na nafasi inayojibu
- **Kujenga** kontena la terrarium kwa kutumia maumbo na mitindo ya CSS

### Sharti

Unapaswa kuwa umekamilisha muundo wa HTML wa terrarium yako kutoka somo la awali na uwe tayari kuipamba.

> 📺 **Rasilimali ya Video**: Tazama video hii ya maelezo
>
> [![Mafunzo ya Msingi ya CSS](https://img.youtube.com/vi/6yIdOIV9p1I/0.jpg)](https://www.youtube.com/watch?v=6yIdOIV9p1I)

### Kuandaa Faili Yako ya CSS

Kabla ya kuanza kupamba, tunahitaji kuunganisha CSS na HTML yetu. Muunganisho huu unaiambia kivinjari wapi pa kupata maelekezo ya mitindo kwa terrarium yetu.

Katika folda ya terrarium yako, unda faili mpya inayoitwa `style.css`, kisha uiunganishe kwenye sehemu ya `<head>` ya hati yako ya HTML:

```html
<link rel="stylesheet" href="./style.css" />
```

**Hii ndiyo kazi ya msimbo huu:**
- **Kuunda** muunganisho kati ya faili zako za HTML na CSS
- **Kuambia** kivinjari kupakia na kutumia mitindo kutoka `style.css`
- **Kutumia** sifa ya `rel="stylesheet"` kuonyesha kuwa hii ni faili ya CSS
- **Kurejelea** njia ya faili kwa `href="./style.css"`

## Kuelewa Cascade ya CSS

Umewahi kujiuliza kwa nini CSS inaitwa "Cascading" Style Sheets? Mitindo inashuka kama maporomoko ya maji, na wakati mwingine inagongana.

Fikiria jinsi miundo ya amri ya kijeshi inavyofanya kazi - amri ya jumla inaweza kusema "wanajeshi wote wavae kijani," lakini amri maalum kwa kikosi chako inaweza kusema "vani mavazi ya sherehe ya bluu kwa hafla." Maelekezo maalum zaidi yanapewa kipaumbele. CSS inafuata mantiki sawa, na kuelewa hierarkia hii hufanya utatuzi kuwa rahisi zaidi.

### Kujaribu Kipaumbele cha Cascade

Hebu tuone cascade ikifanya kazi kwa kuunda mgongano wa mitindo. Kwanza, ongeza mtindo wa ndani kwenye tagi yako ya `<h1>`:

```html
<h1 style="color: red">My Terrarium</h1>
```

**Kazi ya msimbo huu:**
- **Kutumia** rangi nyekundu moja kwa moja kwenye kipengele cha `<h1>` kwa kutumia mtindo wa ndani
- **Kutumia** sifa ya `style` kuingiza CSS moja kwa moja kwenye HTML
- **Kuunda** sheria ya mtindo yenye kipaumbele cha juu zaidi kwa kipengele hiki maalum

Kisha, ongeza sheria hii kwenye faili yako ya `style.css`:

```css
h1 {
  color: blue;
}
```

**Katika hapo juu, tumefanya:**
- **Kufafanua** sheria ya CSS inayolenga vipengele vyote vya `<h1>`
- **Kuweka** rangi ya maandishi kuwa bluu kwa kutumia stylesheet ya nje
- **Kuunda** sheria ya kipaumbele cha chini ikilinganishwa na mitindo ya ndani

✅ **Uhakiki wa Maarifa**: Ni rangi gani inaonekana kwenye programu yako ya wavuti? Kwa nini rangi hiyo inashinda? Je, unaweza kufikiria hali ambapo unaweza kutaka kuondoa mitindo?

> 💡 **Mpangilio wa Kipaumbele cha CSS (cha juu hadi cha chini):**
> 1. **Mitindo ya ndani** (sifa ya style)
> 2. **IDs** (#myId)
> 3. **Classes** (.myClass) na sifa
> 4. **Vichagua vya vipengele** (h1, div, p)
> 5. **Chaguo-msingi za kivinjari**

## Urithi wa CSS kwa Vitendo

Urithi wa CSS hufanya kazi kama maumbile - vipengele hurithi mali fulani kutoka kwa vipengele vya mzazi wao. Ikiwa utaweka familia ya fonti kwenye kipengele cha mwili, maandishi yote ndani yake hutumia fonti hiyo hiyo kiotomatiki. Ni sawa na jinsi sura ya kipekee ya familia ya Habsburg ilivyoonekana kwa vizazi bila kuainishwa kwa kila mtu binafsi.

Hata hivyo, si kila kitu kinachorithiwa. Mitindo ya maandishi kama fonti na rangi inarithiwa, lakini mali za mpangilio kama margins na borders hazirithiwi. Kama vile watoto wanaweza kurithi sifa za mwili lakini si chaguo za mitindo za wazazi wao.

### Kuona Urithi wa Fonti

Hebu tuone urithi ukifanya kazi kwa kuweka familia ya fonti kwenye kipengele cha `<body>`:

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

**Kufafanua kinachotokea hapa:**
- **Kuweka** familia ya fonti kwa ukurasa mzima kwa kulenga kipengele cha `<body>`
- **Kutumia** stack ya fonti na chaguo za akiba kwa usaidizi bora wa kivinjari
- **Kutumia** fonti za kisasa za mfumo zinazovutia kwenye mifumo tofauti ya uendeshaji
- **Kuhakikisha** vipengele vyote vya watoto vinarithia fonti hii isipokuwa vimezuiliwa maalum

Fungua zana za msanidi wa kivinjari chako (F12), nenda kwenye kichupo cha Vipengele, na kagua kipengele chako cha `<h1>`. Utaona kuwa kinarithia familia ya fonti kutoka kwa mwili:

![fonti iliyorithiwa](../../../../translated_images/1.cc07a5cbe114ad1d4728c35134584ac1b87db688eff83cf75985cf31fe0ed95c.sw.png)

✅ **Jaribio la Kujaribu**: Jaribu kuweka mali nyingine zinazorithiwa kwenye `<body>` kama `color`, `line-height`, au `text-align`. Ni nini kinachotokea kwa kichwa chako na vipengele vingine?

> 📝 **Mali Zinazorithiwa ni Pamoja na**: `color`, `font-family`, `font-size`, `line-height`, `text-align`, `visibility`
>
> **Mali Zisizorithiwa ni Pamoja na**: `margin`, `padding`, `border`, `width`, `height`, `position`

## Kumiliki Vichagua vya CSS

Vichagua vya CSS ni njia yako ya kulenga vipengele maalum kwa mitindo. Vinavyofanya kazi kama kutoa maelekezo sahihi - badala ya kusema "nyumba," unaweza kusema "nyumba ya bluu yenye mlango mwekundu kwenye Mtaa wa Maple."

CSS hutoa njia tofauti za kuwa maalum, na kuchagua kichagua sahihi ni kama kuchagua zana inayofaa kwa kazi. Wakati mwingine unahitaji kupamba kila mlango katika mtaa, na wakati mwingine mlango mmoja tu maalum.

### Vichagua vya Vipengele (Tagi)

Vichagua vya vipengele vinatarget vipengele vya HTML kwa jina la tagi yao. Vinavyofaa kwa kuweka mitindo ya msingi inayotumika kwa upana kwenye ukurasa wako:

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

**Kuelewa mitindo hii:**
- **Kuweka** typografia thabiti kwenye ukurasa mzima kwa kichagua cha `body`
- **Kuondoa** margins na padding za chaguo-msingi za kivinjari kwa udhibiti bora
- **Kupamba** vipengele vyote vya kichwa kwa rangi, mpangilio, na nafasi
- **Kutumia** vitengo vya `rem` kwa ukubwa wa fonti unaoweza kubadilika na kupatikana

Wakati vichagua vya vipengele vinafanya kazi vizuri kwa mitindo ya jumla, utahitaji vichagua maalum zaidi kupamba vipengele vya kibinafsi kama mimea katika terrarium yako.

### Vichagua vya ID kwa Vipengele Maalum

Vichagua vya ID vinatumia alama ya `#` na vinatarget vipengele vyenye sifa maalum ya `id`. Kwa kuwa IDs lazima ziwe za kipekee kwenye ukurasa, vinavyofaa kwa kupamba vipengele vya kibinafsi, maalum kama kontena za mimea za kushoto na kulia.

Hebu tuunde mitindo kwa kontena za upande za terrarium yetu ambapo mimea itaishi:

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

**Hii ndiyo kazi ya msimbo huu:**
- **Kuweka** kontena kwenye kingo za kushoto na kulia kwa kutumia nafasi ya `absolute`
- **Kutumia** vitengo vya `vh` (urefu wa viewport) kwa urefu unaojibu ukubwa wa skrini
- **Kutumia** `box-sizing: border-box` ili padding ijumuishwe katika upana wa jumla
- **Kuondoa** vitengo vya `px` visivyo vya lazima kutoka kwa thamani za sifuri kwa msimbo safi zaidi
- **Kuweka** rangi ya mandharinyuma laini inayovutia zaidi machoni kuliko kijivu mkali

✅ **Changamoto ya Ubora wa Msimbo**: Angalia jinsi CSS hii inavyokiuka kanuni ya DRY (Usirudie Mwenyewe). Je, unaweza kuiboresha kwa kutumia ID na darasa?

**Njia iliyoboreshwa:**
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

### Vichagua vya Darasa kwa Mitindo Inayoweza Kutumika Tena

Vichagua vya darasa vinatumia alama ya `.` na vinavyofaa unapohitaji kutumia mitindo sawa kwa vipengele vingi. Tofauti na IDs, madarasa yanaweza kutumika tena katika HTML yako, na kuyafanya kuwa bora kwa mifumo ya mitindo thabiti.

Katika terrarium yetu, kila mmea unahitaji mitindo sawa lakini pia unahitaji nafasi ya kipekee. Tutatumia mchanganyiko wa madarasa kwa mitindo ya pamoja na IDs kwa nafasi ya kipekee.

**Hii ndiyo muundo wa HTML kwa kila mmea:**
```html
<div class="plant-holder">
  <img class="plant" alt="Decorative plant for terrarium" id="plant1" src="../../../../translated_images/plant1.d18b18ffe73da18f8b1ac7aba73b4050af52f4a0c9174aeac464b85123fc2850.sw.png" />
</div>
```

**Vipengele muhimu vilivyoelezwa:**
- **Kutumia** `class="plant-holder"` kwa mitindo thabiti ya kontena kwa mimea yote
- **Kutumia** `class="plant"` kwa mitindo na tabia ya picha ya pamoja
- **Kujumuisha** `id="plant1"` ya kipekee kwa nafasi ya kibinafsi na mwingiliano wa JavaScript
- **Kutoa** maandishi ya alt yenye maelezo kwa upatikanaji wa wasomaji wa skrini

Sasa ongeza mitindo hii kwenye faili yako ya `style.css`:

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

**Kufafanua mitindo hii:**
- **Kuunda** nafasi ya jamaa kwa kontena la mmea ili kuanzisha muktadha wa nafasi
- **Kuweka** kila kontena la mmea kwa urefu wa 13%, kuhakikisha mimea yote inatoshea wima bila kusogeza
- **Kusogeza** kontena kidogo kushoto ili kuzingatia mimea vizuri ndani ya kontena zao
- **Kuruhusu** mimea kupanuka kwa majibu kwa kutumia mali za `max-width` na `max-height`
- **Kutumia** `z-index` kuweka mimea juu ya vipengele vingine katika terrarium
- **Kuongeza** athari ya hover laini na mabadiliko ya CSS kwa mwingiliano bora wa mtumiaji

✅ **Fikra Muhimu**: Kwa nini tunahitaji vichagua vyote `.plant-holder` na `.plant`? Nini kingetokea ikiwa tungejaribu kutumia kimoja tu?

> 💡 **Mfumo wa Ubunifu**: Kontena (`.plant-holder`) inadhibiti mpangilio na nafasi, wakati maudhui (`.plant`) yanadhibiti mwonekano na upanuzi. Mgawanyo huu hufanya msimbo uwe rahisi kudumisha na kubadilika.

## Kuelewa Nafasi ya CSS

Nafasi ya CSS ni kama kuwa mkurugenzi wa jukwaa la tamthilia - unadhibiti wapi kila mwigizaji anasimama na jinsi wanavyosogea kwenye jukwaa. Wengine hufuata mpangilio wa kawaida, wakati wengine wanahitaji nafasi maalum kwa athari ya kipekee.

Mara unapofahamu nafasi, changamoto nyingi za mpangilio zinakuwa rahisi kudhibiti. Unahitaji bar ya urambazaji inayobaki juu wakati watumiaji wanapokoroga? Nafasi inashughulikia hilo. Unataka tooltip inayojitokeza mahali maalum? Hilo pia ni nafasi.

### Thamani Tano za Nafasi

| Thamani ya Nafasi | Tabia | Matumizi |
|----------------|----------|----------|
| `static` | Mtiririko wa kawaida, inapuuzia juu/kushoto/kulia/chini | Mpangilio wa kawaida wa hati |
| `relative` | Imewekwa kulingana na nafasi yake ya kawaida | Marekebisho madogo, kuunda muktadha wa nafasi |
| `absolute` | Imewekwa kulingana na mzazi wa karibu aliyewekwa | Uwekaji sahihi, overlays |
| `fixed` | Imewekwa kulingana na viewport | Bar za urambazaji, vipengele vinavyosogea |
| `sticky` | Hubadilika kati ya relative na fixed kulingana na koroga | Vichwa vinavyoshikamana wakati wa koroga |

### Nafasi katika Terrarium Yetu

Terrarium yetu inatumia mchanganyiko wa kimkakati wa aina za nafasi kuunda mpangilio unaotakiwa:

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

**Kuelewa mkakati wa nafasi:**
- **Kontena za absolute** zinatolewa kutoka mtiririko wa kawaida wa hati na zimewekwa kwenye kingo za skrini
- **Wamiliki wa mimea wa relative** huunda muktadha wa nafasi huku wakibaki katika mtiririko wa hati
- **Mimea ya absolute** inaweza kuwekwa kwa usahihi ndani ya kontena zao za relative
- **Mchanganyiko huu** unaruhusu mimea kupangwa wima huku ikipatikana kwa nafasi ya kibinafsi

> 🎯 **Kwa Nini Hili Ni Muhimu**: Vipengele vya `plant` vinahitaji nafasi ya absolute ili viweze kuvutwa katika somo linalofuata. Nafasi ya absolute inavitenganisha kutoka mtiririko wa kawaida wa mpangilio, na kufanya mwingiliano wa kuvuta na kuacha uwezekane.

✅ **Jaribio la Kujaribu**: Jaribu kubadilisha thamani za nafasi na uone matokeo:
- Nini kinatokea ikiwa unabadilisha `.container` kutoka `absolute` hadi `relative`?
- Mpangilio unabadilika vipi ikiwa `.plant-holder` inatumia `absolute` badala ya `relative`?
- Nini kinatokea unapobadilisha `.plant` hadi nafasi ya `relative`?

## Kujenga Terrarium kwa CSS

Sasa tutajenga chupa ya kioo kwa kutumia CSS pekee - bila picha au programu ya michoro.

Kuunda kioo kinachoonekana halisi, vivuli, na athari za kina kwa kutumia nafasi na uwazi kunaonyesha uwezo wa kuona wa CSS. Mbinu hii inaakisi jinsi wasanifu wa harakati ya Bauhaus walivyotumia maumbo rahisi ya kijiometri kuunda miundo tata, yenye uzuri. Mara unapofahamu kanuni hizi, utatambua mbinu za CSS nyuma ya miundo mingi ya
Tujenge chupa ya terrarium hatua kwa hatua. Kila sehemu inatumia nafasi ya moja kwa moja na ukubwa wa asilimia kwa muundo unaojibika:

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

**Kuelewa ujenzi wa terrarium:**
- **Inatumia** vipimo vya asilimia kwa upanuzi unaojibika kwenye ukubwa wote wa skrini
- **Inaweka** vipengele kwa nafasi ya moja kwa moja ili kuviweka na kuviunganisha kwa usahihi
- **Inatumia** thamani tofauti za uwazi ili kuunda athari ya uwazi wa glasi
- **Inatekeleza** tabaka za `z-index` ili mimea ionekane ndani ya chupa
- **Inaongeza** kivuli cha kisanduku na pembe za mviringo zilizoboreshwa kwa mwonekano halisi zaidi

### Muundo Unaobadilika na Asilimia

Angalia jinsi vipimo vyote vinavyotumia asilimia badala ya thamani za pikseli zilizowekwa:

**Kwa nini hili ni muhimu:**
- **Inahakikisha** terrarium inapanuka kwa uwiano kwenye ukubwa wowote wa skrini
- **Inadumisha** uhusiano wa kuona kati ya vipengele vya chupa
- **Inatoa** uzoefu thabiti kutoka simu za mkononi hadi skrini kubwa za kompyuta
- **Inaruhusu** muundo kubadilika bila kuvunja mpangilio wa kuona

### Vipimo vya CSS kwa Vitendo

Tunatumia vipimo vya `rem` kwa pembe za mviringo, ambavyo vinapanuka kulingana na ukubwa wa fonti ya mzizi. Hii inaunda miundo inayopatikana zaidi inayoheshimu mapendeleo ya fonti ya mtumiaji. Jifunze zaidi kuhusu [vipimo vya jamaa vya CSS](https://www.w3.org/TR/css-values-3/#font-relative-lengths) katika maelezo rasmi.

✅ **Jaribio la Kuona**: Jaribu kubadilisha thamani hizi na uone athari:
- Badilisha uwazi wa chupa kutoka 0.5 hadi 0.8 – hili linaathiri vipi mwonekano wa glasi?
- Rekebisha rangi ya udongo kutoka `#3a241d` hadi `#8B4513` – athari ya kuona ni ipi?
- Badilisha `z-index` ya udongo hadi 2 – nini kinatokea kwa tabaka?

---

## Changamoto ya Wakala wa GitHub Copilot 🚀

Tumia hali ya Wakala kukamilisha changamoto ifuatayo:

**Maelezo:** Unda uhuishaji wa CSS unaofanya mimea ya terrarium kuyumba taratibu, ikionyesha athari ya upepo wa asili. Hii itakusaidia kufanya mazoezi ya uhuishaji wa CSS, mabadiliko, na keyframes huku ukiboresha mvuto wa kuona wa terrarium yako.

**Kichocheo:** Ongeza uhuishaji wa keyframe za CSS ili kufanya mimea kwenye terrarium kuyumba taratibu kutoka upande mmoja hadi mwingine. Unda uhuishaji wa kuyumba unaozungusha kila mmea kidogo (digrii 2-3) kushoto na kulia kwa muda wa sekunde 3-4, na uitumie kwa darasa la `.plant`. Hakikisha uhuishaji unarudia bila kikomo na una kazi ya kupunguza kwa mwendo wa asili.

Jifunze zaidi kuhusu [hali ya wakala](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) hapa.

## 🚀 Changamoto: Kuongeza Mwangaza wa Glasi

Uko tayari kuboresha terrarium yako kwa mwangaza halisi wa glasi? Mbinu hii itaongeza kina na uhalisia kwenye muundo.

Utaunda mwangaza mdogo unaoonyesha jinsi mwanga unavyorejea kwenye uso wa glasi. Mbinu hii ni sawa na jinsi wachoraji wa Renaissance kama Jan van Eyck walivyotumia mwanga na mwangaza kufanya glasi iliyochorwa ionekane ya pande tatu. Hivi ndivyo unavyolenga:

![terrarium iliyokamilika](../../../../translated_images/terrarium-final.2f07047ffc597d0a06b06cab28a77801a10dd12fdb6c7fc630e9c40665491c53.sw.png)

**Changamoto yako:**
- **Unda** maumbo madogo meupe au yenye rangi nyepesi kwa mwangaza wa glasi
- **Yapange** kimkakati upande wa kushoto wa chupa
- **Tumia** uwazi na athari za ukungu zinazofaa kwa mwangaza halisi wa mwanga
- **Tumia** `border-radius` kuunda maumbo ya asili, kama mapovu
- **Jaribu** na gradients au kivuli cha kisanduku kwa uhalisia ulioimarishwa

## Jaribio Baada ya Somo

[Jaribio baada ya somo](https://ff-quizzes.netlify.app/web/quiz/18)

## Panua Maarifa Yako ya CSS

CSS inaweza kuhisi kuwa ngumu mwanzoni, lakini kuelewa dhana hizi za msingi kunatoa msingi thabiti kwa mbinu za hali ya juu zaidi.

**Maeneo yako ya kujifunza CSS yanayofuata:**
- **Flexbox** - hurahisisha mpangilio na usambazaji wa vipengele
- **CSS Grid** - hutoa zana zenye nguvu za kuunda mpangilio changamano
- **CSS Variables** - hupunguza kurudia na kuboresha usimamizi
- **Muundo unaojibika** - huhakikisha tovuti zinafanya kazi vizuri kwenye ukubwa tofauti wa skrini

### Rasilimali za Kujifunza kwa Vitendo

Fanya mazoezi ya dhana hizi kwa michezo hii ya kuvutia, ya vitendo:
- 🐸 [Flexbox Froggy](https://flexboxfroggy.com/) - Jifunze Flexbox kupitia changamoto za kufurahisha
- 🌱 [Grid Garden](https://codepip.com/games/grid-garden/) - Jifunze CSS Grid kwa kulima karoti za mtandaoni
- 🎯 [CSS Battle](https://cssbattle.dev/) - Jaribu ujuzi wako wa CSS kwa changamoto za usimbaji

### Kujifunza Zaidi

Kwa misingi kamili ya CSS, kamilisha moduli hii ya Microsoft Learn: [Pamba programu yako ya HTML kwa CSS](https://docs.microsoft.com/learn/modules/build-simple-website/4-css-basics/?WT.mc_id=academic-77807-sagibbon)

## Kazi ya Nyumbani

[Uboreshaji wa CSS](assignment.md)

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.