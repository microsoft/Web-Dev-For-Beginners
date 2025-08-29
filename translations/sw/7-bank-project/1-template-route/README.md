<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8a07db14e75ac62f013b7de5df05981d",
  "translation_date": "2025-08-29T10:01:00+00:00",
  "source_file": "7-bank-project/1-template-route/README.md",
  "language_code": "sw"
}
-->
# Jenga Programu ya Benki Sehemu ya 1: Violezo vya HTML na Njia katika Programu ya Wavuti

## Jaribio la Kabla ya Somo

[Jaribio la kabla ya somo](https://ff-quizzes.netlify.app/web/quiz/41)

### Utangulizi

Tangu kuanzishwa kwa JavaScript kwenye vivinjari, tovuti zimekuwa za mwingiliano zaidi na ngumu kuliko hapo awali. Teknolojia za wavuti sasa zinatumika sana kuunda programu kamili zinazofanya kazi moja kwa moja kwenye kivinjari, tunazoziita [programu za wavuti](https://en.wikipedia.org/wiki/Web_application). Kwa kuwa programu za wavuti ni za mwingiliano wa hali ya juu, watumiaji hawataki kusubiri upakiaji wa ukurasa mzima kila wakati kitendo kinapofanywa. Ndiyo maana JavaScript hutumika kusasisha HTML moja kwa moja kwa kutumia DOM, ili kutoa uzoefu laini wa mtumiaji.

Katika somo hili, tutaweka misingi ya kuunda programu ya benki ya wavuti, kwa kutumia violezo vya HTML kuunda skrini nyingi ambazo zinaweza kuonyeshwa na kusasishwa bila kupakia upya ukurasa mzima wa HTML.

### Mahitaji ya Awali

Unahitaji seva ya wavuti ya ndani ili kujaribu programu ya wavuti tutakayojenga katika somo hili. Ikiwa huna, unaweza kusakinisha [Node.js](https://nodejs.org) na kutumia amri `npx lite-server` kutoka kwenye folda ya mradi wako. Hii itaunda seva ya wavuti ya ndani na kufungua programu yako kwenye kivinjari.

### Maandalizi

Kwenye kompyuta yako, tengeneza folda inayoitwa `bank` na faili inayoitwa `index.html` ndani yake. Tutaanza na [msingi wa HTML](https://en.wikipedia.org/wiki/Boilerplate_code) huu:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bank App</title>
  </head>
  <body>
    <!-- This is where you'll work -->
  </body>
</html>
```

---

## Violezo vya HTML

Ikiwa unataka kuunda skrini nyingi kwa ukurasa wa wavuti, suluhisho moja litakuwa kuunda faili moja ya HTML kwa kila skrini unayotaka kuonyesha. Hata hivyo, suluhisho hili lina changamoto kadhaa:

- Lazima upakie upya HTML nzima unapobadilisha skrini, jambo ambalo linaweza kuwa polepole.
- Ni vigumu kushiriki data kati ya skrini tofauti.

Njia nyingine ni kuwa na faili moja tu ya HTML, na kufafanua [violezo vya HTML](https://developer.mozilla.org/docs/Web/HTML/Element/template) vingi kwa kutumia kipengele cha `<template>`. Kiolezo ni kipande cha HTML kinachoweza kutumika tena ambacho hakionyeshwi na kivinjari, na kinahitaji kuanzishwa wakati wa utekelezaji kwa kutumia JavaScript.

### Kazi

Tutaunda programu ya benki yenye skrini mbili: ukurasa wa kuingia na dashibodi. Kwanza, ongeza kipengele cha nafasi katika mwili wa HTML ambacho tutatumia kuanzisha skrini tofauti za programu yetu:

```html
<div id="app">Loading...</div>
```

Tunampa `id` ili iwe rahisi kuipata kwa JavaScript baadaye.

> Kidokezo: kwa kuwa maudhui ya kipengele hiki yatabadilishwa, tunaweza kuweka ujumbe wa kupakia au kiashiria kitakachoonyeshwa wakati programu inapopakia.

Kisha, ongeza kiolezo cha HTML kwa ukurasa wa kuingia. Kwa sasa tutaweka tu kichwa na sehemu yenye kiungo tutakachotumia kufanya urambazaji.

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <a href="/dashboard">Login</a>
  </section>
</template>
```

Halafu tutaongeza kiolezo kingine cha HTML kwa ukurasa wa dashibodi. Ukurasa huu utakuwa na sehemu tofauti:

- Kichwa chenye jina na kiungo cha kutoka
- Salio la sasa la akaunti ya benki
- Orodha ya miamala, inayoonyeshwa kwenye jedwali

```html
<template id="dashboard">
  <header>
    <h1>Bank App</h1>
    <a href="/login">Logout</a>
  </header>
  <section>
    Balance: 100$
  </section>
  <section>
    <h2>Transactions</h2>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Object</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </section>
</template>
```

> Kidokezo: unapounda violezo vya HTML, ikiwa unataka kuona jinsi vitakavyoonekana, unaweza kutoa maoni kwenye mistari ya `<template>` na `</template>` kwa kuzifunga na `<!-- -->`.

✅ Kwa nini unadhani tunatumia sifa za `id` kwenye violezo? Je, tungeweza kutumia kitu kingine kama madarasa?

## Kuonyesha violezo kwa JavaScript

Ukijaribu faili yako ya sasa ya HTML kwenye kivinjari, utaona kwamba inakwama ikionyesha `Loading...`. Hii ni kwa sababu tunahitaji kuongeza msimbo wa JavaScript ili kuanzisha na kuonyesha violezo vya HTML.

Kuanzisha kiolezo kawaida hufanyika kwa hatua 3:

1. Pata kipengele cha kiolezo kwenye DOM, kwa mfano kwa kutumia [`document.getElementById`](https://developer.mozilla.org/docs/Web/API/Document/getElementById).
2. Nakili kipengele cha kiolezo, kwa kutumia [`cloneNode`](https://developer.mozilla.org/docs/Web/API/Node/cloneNode).
3. Kiunganishe kwenye DOM chini ya kipengele kinachoonekana, kwa mfano kwa kutumia [`appendChild`](https://developer.mozilla.org/docs/Web/API/Node/appendChild).

✅ Kwa nini tunahitaji kunakili kiolezo kabla ya kukiunganisha kwenye DOM? Unadhani nini kingetokea kama tungeacha hatua hii?

### Kazi

Tengeneza faili mpya inayoitwa `app.js` kwenye folda yako ya mradi na uingize faili hiyo kwenye sehemu ya `<head>` ya HTML yako:

```html
<script src="app.js" defer></script>
```

Sasa kwenye `app.js`, tutaunda kazi mpya inayoitwa `updateRoute`:

```js
function updateRoute(templateId) {
  const template = document.getElementById(templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

Tunachofanya hapa ni hatua zile zile 3 zilizoelezwa hapo juu. Tunaanzisha kiolezo chenye kitambulisho `templateId`, na kuweka maudhui yake yaliyonakiliwa ndani ya nafasi ya programu yetu. Kumbuka kwamba tunahitaji kutumia `cloneNode(true)` ili kunakili mti mzima wa kiolezo.

Sasa ita kazi hii na moja ya violezo na uangalie matokeo.

```js
updateRoute('login');
```

✅ Madhumuni ya msimbo huu `app.innerHTML = '';` ni nini? Nini hutokea bila hiyo?

## Kuunda Njia

Tunapozungumzia programu ya wavuti, tunaita *Urambazaji* nia ya kuoanisha **URLs** na skrini maalum ambazo zinapaswa kuonyeshwa. Katika tovuti yenye faili nyingi za HTML, hili hufanyika kiotomatiki kwa kuwa njia za faili zinaonyeshwa kwenye URL. Kwa mfano, ukiwa na faili hizi kwenye folda yako ya mradi:

```
mywebsite/index.html
mywebsite/login.html
mywebsite/admin/index.html
```

Ukiunda seva ya wavuti na `mywebsite` kama mzizi, uoanishaji wa URL utakuwa:

```
https://site.com            --> mywebsite/index.html
https://site.com/login.html --> mywebsite/login.html
https://site.com/admin/     --> mywebsite/admin/index.html
```

Hata hivyo, kwa programu yetu ya wavuti tunatumia faili moja ya HTML iliyo na skrini zote, kwa hivyo tabia hii ya chaguo-msingi haitatusaidia. Tunapaswa kuunda ramani hii kwa mikono na kusasisha kiolezo kinachoonyeshwa kwa kutumia JavaScript.

### Kazi

Tutatumia kitu rahisi kutekeleza [ramani](https://en.wikipedia.org/wiki/Associative_array) kati ya njia za URL na violezo vyetu. Ongeza kitu hiki mwanzoni mwa faili yako ya `app.js`.

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard' },
};
```

Sasa wacha tubadilishe kidogo kazi ya `updateRoute`. Badala ya kupitisha moja kwa moja `templateId` kama hoja, tunataka kuipata kwa kwanza kuangalia URL ya sasa, halafu kutumia ramani yetu kupata thamani ya kitambulisho cha kiolezo kinacholingana. Tunaweza kutumia [`window.location.pathname`](https://developer.mozilla.org/docs/Web/API/Location/pathname) kupata sehemu ya njia kutoka kwenye URL.

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  const template = document.getElementById(route.templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

Hapa tumeoanisha njia tulizotangaza na kiolezo kinacholingana. Unaweza kujaribu kuona kama inafanya kazi kwa kubadilisha URL kwa mikono kwenye kivinjari chako.

✅ Nini hutokea ukiingiza njia isiyojulikana kwenye URL? Tunawezaje kutatua hili?

## Kuongeza Urambazaji

Hatua inayofuata kwa programu yetu ni kuongeza uwezekano wa kuvinjari kati ya kurasa bila kubadilisha URL kwa mikono. Hii inajumuisha mambo mawili:

1. Kusasisha URL ya sasa
2. Kusasisha kiolezo kinachoonyeshwa kulingana na URL mpya

Tayari tulishughulikia sehemu ya pili na kazi ya `updateRoute`, kwa hivyo tunapaswa kufikiria jinsi ya kusasisha URL ya sasa.

Tutatumia JavaScript na hasa [`history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState) ambayo inaruhusu kusasisha URL na kuunda ingizo jipya kwenye historia ya kuvinjari, bila kupakia upya HTML.

> Kumbuka: Ingawa kipengele cha HTML cha nanga [`<a href>`](https://developer.mozilla.org/docs/Web/HTML/Element/a) kinaweza kutumika peke yake kuunda viungo vya URL tofauti, kitafanya kivinjari kipakie upya HTML kwa chaguo-msingi. Ni muhimu kuzuia tabia hii wakati wa kushughulikia urambazaji kwa JavaScript maalum, kwa kutumia kazi ya `preventDefault()` kwenye tukio la kubofya.

### Kazi

Tengeneza kazi mpya ambayo tunaweza kutumia kuvinjari kwenye programu yetu:

```js
function navigate(path) {
  window.history.pushState({}, path, path);
  updateRoute();
}
```

Njia hii kwanza inasasisha URL ya sasa kulingana na njia iliyotolewa, halafu inasasisha kiolezo. Sifa `window.location.origin` inarudisha mzizi wa URL, ikituruhusu kuunda URL kamili kutoka kwa njia iliyotolewa.

Sasa kwa kuwa tuna kazi hii, tunaweza kushughulikia tatizo tunalopata ikiwa njia haifanani na njia yoyote iliyofafanuliwa. Tutabadilisha kazi ya `updateRoute` kwa kuongeza njia ya kurudi kwa moja ya njia zilizopo ikiwa hatuwezi kupata mechi.

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
    return navigate('/login');
  }

  ...
```

Ikiwa njia haiwezi kupatikana, sasa tutarudi kwenye ukurasa wa `login`.

Sasa wacha tuunde kazi ya kupata URL wakati kiungo kinabofya, na kuzuia tabia ya kawaida ya kiungo cha kivinjari:

```js
function onLinkClick(event) {
  event.preventDefault();
  navigate(event.target.href);
}
```

Tukamilishe mfumo wa urambazaji kwa kuongeza viungo kwenye viungo vyetu vya *Login* na *Logout* kwenye HTML.

```html
<a href="/dashboard" onclick="onLinkClick(event)">Login</a>
...
<a href="/login" onclick="onLinkClick(event)">Logout</a>
```

Kipengele cha `event` hapo juu, kinakamata tukio la `click` na kukipitisha kwenye kazi yetu ya `onLinkClick`.

Kwa kutumia sifa ya [`onclick`](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick) funga tukio la `click` kwenye msimbo wa JavaScript, hapa ni wito wa kazi ya `navigate()`.

Jaribu kubofya viungo hivi, sasa unapaswa kuwa na uwezo wa kuvinjari kati ya skrini tofauti za programu yako.

✅ Njia ya `history.pushState` ni sehemu ya kiwango cha HTML5 na imetekelezwa katika [vivinjari vyote vya kisasa](https://caniuse.com/?search=pushState). Ikiwa unajenga programu ya wavuti kwa vivinjari vya zamani, kuna mbinu unaweza kutumia badala ya API hii: kutumia [alama ya reli (`#`)](https://en.wikipedia.org/wiki/URI_fragment) kabla ya njia unaweza kutekeleza urambazaji unaofanya kazi na urambazaji wa kawaida wa nanga na haupakii upya ukurasa, kwani lengo lake lilikuwa kuunda viungo vya ndani ndani ya ukurasa.

## Kushughulikia Vitufe vya Nyuma na Mbele vya Kivinjari

Kutumia `history.pushState` huunda ingizo mpya kwenye historia ya urambazaji ya kivinjari. Unaweza kuangalia hilo kwa kushikilia *kitufe cha nyuma* cha kivinjari chako, kinapaswa kuonyesha kitu kama hiki:

![Picha ya historia ya urambazaji](../../../../translated_images/history.7fdabbafa521e06455b738d3dafa3ff41d3071deae60ead8c7e0844b9ed987d8.sw.png)

Ukijaribu kubofya kitufe cha nyuma mara chache, utaona kwamba URL ya sasa inabadilika na historia inasasishwa, lakini kiolezo kile kile kinaendelea kuonyeshwa.

Hii ni kwa sababu programu haijui kwamba tunahitaji kuita `updateRoute()` kila wakati historia inabadilika. Ukichunguza [nyaraka za `history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState), unaweza kuona kwamba ikiwa hali inabadilika - ikimaanisha kwamba tumehamia URL tofauti - tukio la [`popstate`](https://developer.mozilla.org/docs/Web/API/Window/popstate_event) linachochewa. Tutatumia hilo kurekebisha tatizo hilo.

### Kazi

Ili kuhakikisha kiolezo kinachoonyeshwa kinasasishwa wakati historia ya kivinjari inabadilika, tutaunganisha kazi mpya inayoiita `updateRoute()`. Tutafanya hivyo mwishoni mwa faili yetu ya `app.js`:

```js
window.onpopstate = () => updateRoute();
updateRoute();
```

> Kumbuka: tumetumia [kazi ya mshale](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions) hapa kutangaza mshughulikiaji wa tukio la `popstate` kwa ufupi, lakini kazi ya kawaida ingefanya kazi sawa.

Hapa kuna video ya kukumbusha kuhusu kazi za mshale:

[![Kazi za Mshale](https://img.youtube.com/vi/OP6eEbOj2sc/0.jpg)](https://youtube.com/watch?v=OP6eEbOj2sc "Kazi za Mshale")

> 🎥 Bofya picha hapo juu kwa video kuhusu kazi za mshale.

Sasa jaribu kutumia vitufe vya nyuma na mbele vya kivinjari chako, na uhakikishe kwamba njia inayoonyeshwa inasasishwa kwa usahihi wakati huu.

---

## 🚀 Changamoto

Ongeza kiolezo kipya na njia kwa ukurasa wa tatu unaoonyesha sifa za programu hii.

## Jaribio la Baada ya Somo

[Jaribio la baada ya somo](https://ff-quizzes.netlify.app/web/quiz/42)

## Mapitio na Kujisomea

Urambazaji ni moja ya sehemu za kushangaza ngumu za maendeleo ya wavuti, hasa wakati wavuti inavyohamia kutoka kwa tabia za upakiaji wa ukurasa hadi upakiaji wa kurasa za Programu Moja ya Ukurasa. Soma kidogo kuhusu [jinsi huduma ya Azure Static Web App](https://docs.microsoft.com/azure/static-web-apps/routes/?WT.mc_id=academic-77807-sagibbon) inavyoshughulikia urambazaji. Je, unaweza kueleza kwa nini baadhi ya maamuzi yaliyoelezwa kwenye hati hiyo ni muhimu?

## Kazi

[Boresha urambazaji](assignment.md)

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, inashauriwa kutumia tafsiri ya kitaalamu ya binadamu. Hatutawajibika kwa maelewano mabaya au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.