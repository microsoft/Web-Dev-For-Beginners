<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "89d0df9854ed020f155e94882ae88d4c",
  "translation_date": "2025-08-28T15:37:39+00:00",
  "source_file": "7-bank-project/3-data/README.md",
  "language_code": "tl"
}
-->
# Gumawa ng Banking App Bahagi 3: Mga Paraan ng Pagkuha at Paggamit ng Data

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/45)

### Panimula

Sa puso ng bawat web application ay ang *data*. Ang data ay maaaring magkaroon ng iba't ibang anyo, ngunit ang pangunahing layunin nito ay palaging magpakita ng impormasyon sa user. Habang nagiging mas interactive at kumplikado ang mga web app, ang paraan ng pag-access at pakikipag-ugnayan ng user sa impormasyon ay naging mahalagang bahagi ng web development.

Sa araling ito, tatalakayin natin kung paano kumuha ng data mula sa server nang asynchronous, at gamitin ang data na ito upang magpakita ng impormasyon sa isang web page nang hindi nire-reload ang HTML.

### Kinakailangan

Kailangan mong natapos ang [Login at Registration Form](../2-forms/README.md) na bahagi ng web app para sa araling ito. Kailangan mo ring mag-install ng [Node.js](https://nodejs.org) at [patakbuhin ang server API](../api/README.md) nang lokal upang makuha ang data ng account.

Maaari mong subukan kung maayos na tumatakbo ang server sa pamamagitan ng pag-execute ng command na ito sa terminal:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## AJAX at pagkuha ng data

Ang tradisyunal na mga website ay nag-a-update ng nilalaman kapag ang user ay pumili ng link o nagsumite ng data gamit ang form, sa pamamagitan ng pag-reload ng buong HTML page. Sa tuwing kailangang mag-load ng bagong data, ang web server ay nagbabalik ng panibagong HTML page na kailangang iproseso ng browser, na nag-i-interrupt sa kasalukuyang aksyon ng user at nililimitahan ang interaksyon habang nagre-reload. Ang workflow na ito ay tinatawag ding *Multi-Page Application* o *MPA*.

![Workflow ng pag-update sa isang multi-page application](../../../../translated_images/mpa.7f7375a1a2d4aa779d3f928a2aaaf9ad76bcdeb05cfce2dc27ab126024050f51.tl.png)

Nang magsimulang maging mas kumplikado at interactive ang mga web application, lumitaw ang isang bagong teknik na tinatawag na [AJAX (Asynchronous JavaScript and XML)](https://en.wikipedia.org/wiki/Ajax_(programming)). Ang teknik na ito ay nagpapahintulot sa mga web app na magpadala at kumuha ng data mula sa server nang asynchronous gamit ang JavaScript, nang hindi nire-reload ang HTML page, na nagreresulta sa mas mabilis na pag-update at mas maayos na interaksyon ng user. Kapag natanggap ang bagong data mula sa server, maaaring i-update ang kasalukuyang HTML page gamit ang JavaScript sa pamamagitan ng [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model) API. Sa paglipas ng panahon, ang approach na ito ay naging tinatawag na [*Single-Page Application* o *SPA*](https://en.wikipedia.org/wiki/Single-page_application).

![Workflow ng pag-update sa isang single-page application](../../../../translated_images/spa.268ec73b41f992c2a21ef9294235c6ae597b3c37e2c03f0494c2d8857325cc57.tl.png)

Noong unang ipinakilala ang AJAX, ang tanging API na magagamit upang kumuha ng data nang asynchronous ay ang [`XMLHttpRequest`](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest). Ngunit ang mga modernong browser ngayon ay may mas maginhawa at mas makapangyarihang [`Fetch` API](https://developer.mozilla.org/docs/Web/API/Fetch_API), na gumagamit ng promises at mas angkop para sa pag-manipula ng JSON data.

> Bagamat sinusuportahan ng lahat ng modernong browser ang `Fetch API`, kung nais mong gumana ang iyong web application sa mga legacy o lumang browser, magandang ideya na suriin muna ang [compatibility table sa caniuse.com](https://caniuse.com/fetch).

### Gawain

Sa [nakaraang aralin](../2-forms/README.md), ipinatupad natin ang registration form upang makagawa ng account. Ngayon, magdadagdag tayo ng code upang mag-login gamit ang umiiral na account, at kunin ang data nito. Buksan ang `app.js` file at magdagdag ng bagong `login` function:

```js
async function login() {
  const loginForm = document.getElementById('loginForm')
  const user = loginForm.user.value;
}
```

Dito, sinisimulan natin sa pagkuha ng form element gamit ang `getElementById()`, at pagkatapos ay kinukuha natin ang username mula sa input gamit ang `loginForm.user.value`. Ang bawat form control ay maaaring ma-access sa pamamagitan ng pangalan nito (na itinakda sa HTML gamit ang `name` attribute) bilang property ng form.

Katulad ng ginawa natin para sa registration, gagawa tayo ng isa pang function upang magsagawa ng server request, ngunit sa pagkakataong ito para sa pagkuha ng data ng account:

```js
async function getAccount(user) {
  try {
    const response = await fetch('//localhost:5000/api/accounts/' + encodeURIComponent(user));
    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}
```

Ginagamit natin ang `fetch` API upang humiling ng data nang asynchronous mula sa server, ngunit sa pagkakataong ito, hindi natin kailangan ng anumang karagdagang parameter maliban sa URL na tatawagin, dahil nagku-query lang tayo ng data. Sa default, ang `fetch` ay lumilikha ng [`GET`](https://developer.mozilla.org/docs/Web/HTTP/Methods/GET) HTTP request, na siyang kailangan natin dito.

✅ Ang `encodeURIComponent()` ay isang function na nag-e-escape ng mga espesyal na karakter para sa URL. Anong mga problema ang maaaring mangyari kung hindi natin tatawagin ang function na ito at direktang gamitin ang `user` value sa URL?

Ngayon, i-update natin ang ating `login` function upang gamitin ang `getAccount`:

```js
async function login() {
  const loginForm = document.getElementById('loginForm')
  const user = loginForm.user.value;
  const data = await getAccount(user);

  if (data.error) {
    return console.log('loginError', data.error);
  }

  account = data;
  navigate('/dashboard');
}
```

Una, dahil ang `getAccount` ay isang asynchronous function, kailangan natin itong itugma sa `await` keyword upang hintayin ang resulta mula sa server. Tulad ng anumang server request, kailangan din nating harapin ang mga error cases. Sa ngayon, magdadagdag lang tayo ng log message upang ipakita ang error, at babalikan ito mamaya.

Pagkatapos, kailangan nating i-save ang data sa isang lugar upang magamit ito sa pagpapakita ng impormasyon sa dashboard. Dahil ang `account` variable ay hindi pa umiiral, gagawa tayo ng global variable para dito sa itaas ng ating file:

```js
let account = null;
```

Kapag na-save na ang user data sa isang variable, maaari na tayong mag-navigate mula sa *login* page papunta sa *dashboard* gamit ang `navigate()` function na mayroon na tayo.

Sa wakas, kailangan nating tawagin ang ating `login` function kapag na-submit ang login form, sa pamamagitan ng pagbabago sa HTML:

```html
<form id="loginForm" action="javascript:login()">
```

Subukan kung gumagana nang tama ang lahat sa pamamagitan ng pagrehistro ng bagong account at pagsubok na mag-login gamit ang parehong account.

Bago magpatuloy sa susunod na bahagi, maaari rin nating kumpletuhin ang `register` function sa pamamagitan ng pagdaragdag nito sa ibaba ng function:

```js
account = result;
navigate('/dashboard');
```

✅ Alam mo ba na sa default, maaari ka lamang tumawag ng server APIs mula sa *parehong domain at port* kung saan mo tinitingnan ang web page? Ito ay isang mekanismo ng seguridad na ipinatutupad ng mga browser. Ngunit teka, ang ating web app ay tumatakbo sa `localhost:3000` habang ang server API ay tumatakbo sa `localhost:5000`, bakit ito gumagana? Sa pamamagitan ng paggamit ng teknik na tinatawag na [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/docs/Web/HTTP/CORS), posible ang cross-origin HTTP requests kung ang server ay nagdadagdag ng mga espesyal na header sa response, na nagpapahintulot ng mga eksepsyon para sa mga partikular na domain.

> Matuto pa tungkol sa APIs sa pamamagitan ng pagkuha ng [araling ito](https://docs.microsoft.com/learn/modules/use-apis-discover-museum-art/?WT.mc_id=academic-77807-sagibbon)

## I-update ang HTML upang magpakita ng data

Ngayon na mayroon na tayong user data, kailangan nating i-update ang umiiral na HTML upang maipakita ito. Alam na natin kung paano kunin ang isang elemento mula sa DOM gamit ang halimbawa `document.getElementById()`. Kapag mayroon ka nang base element, narito ang ilang mga API na maaari mong gamitin upang baguhin ito o magdagdag ng mga child element dito:

- Gamit ang [`textContent`](https://developer.mozilla.org/docs/Web/API/Node/textContent) property, maaari mong baguhin ang text ng isang elemento. Tandaan na ang pagbabago ng value na ito ay nag-aalis ng lahat ng mga anak ng elemento (kung mayroon man) at pinapalitan ito ng ibinigay na text. Dahil dito, ito rin ay isang epektibong paraan upang alisin ang lahat ng anak ng isang elemento sa pamamagitan ng pag-assign ng empty string `''` dito.

- Gamit ang [`document.createElement()`](https://developer.mozilla.org/docs/Web/API/Document/createElement) kasabay ng [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append) method, maaari kang lumikha at mag-attach ng isa o higit pang bagong child element.

✅ Gamit ang [`innerHTML`](https://developer.mozilla.org/docs/Web/API/Element/innerHTML) property ng isang elemento, posible ring baguhin ang HTML contents nito, ngunit dapat itong iwasan dahil ito ay vulnerable sa [cross-site scripting (XSS)](https://developer.mozilla.org/docs/Glossary/Cross-site_scripting) attacks.

### Gawain

Bago magpatuloy sa dashboard screen, may isa pang bagay na dapat nating gawin sa *login* page. Sa kasalukuyan, kung susubukan mong mag-login gamit ang username na hindi umiiral, isang mensahe ang ipinapakita sa console ngunit para sa isang normal na user, walang nagbabago at hindi mo alam kung ano ang nangyayari.

Magdagdag tayo ng placeholder element sa login form kung saan maaari nating ipakita ang error message kung kinakailangan. Isang magandang lugar ay bago ang login `<button>`:

```html
...
<div id="loginError"></div>
<button>Login</button>
...
```

Ang `<div>` element na ito ay walang laman, ibig sabihin ay walang ipapakita sa screen hangga't hindi tayo nagdadagdag ng content dito. Binigyan din natin ito ng `id` upang madali natin itong makuha gamit ang JavaScript.

Bumalik sa `app.js` file at gumawa ng bagong helper function na `updateElement`:

```js
function updateElement(id, text) {
  const element = document.getElementById(id);
  element.textContent = text;
}
```

Ang function na ito ay medyo simple: binigyan ng isang element *id* at *text*, ia-update nito ang text content ng DOM element na may katugmang `id`. Gamitin natin ang method na ito kapalit ng naunang error message sa `login` function:

```js
if (data.error) {
  return updateElement('loginError', data.error);
}
```

Ngayon, kung susubukan mong mag-login gamit ang invalid account, makikita mo ang ganito:

![Screenshot na nagpapakita ng error message sa login](../../../../translated_images/login-error.416fe019b36a63276764c2349df5d99e04ebda54fefe60c715ee87a28d5d4ad0.tl.png)

Ngayon ay mayroon na tayong error text na lumalabas nang visual, ngunit kung susubukan mo ito gamit ang screen reader, mapapansin mong walang naia-announce. Upang ang text na dinadagdag nang dynamic sa page ay ma-announce ng screen readers, kailangan nitong gumamit ng tinatawag na [Live Region](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/ARIA_Live_Regions). Dito, gagamit tayo ng isang partikular na uri ng live region na tinatawag na alert:

```html
<div id="loginError" role="alert"></div>
```

Ipatupad ang parehong behavior para sa mga error sa `register` function (huwag kalimutang i-update ang HTML).

## Magpakita ng impormasyon sa dashboard

Gamit ang parehong mga teknik na nakita natin, aalagaan din natin ang pagpapakita ng impormasyon ng account sa dashboard page.

Ganito ang hitsura ng isang account object na natanggap mula sa server:

```json
{
  "user": "test",
  "currency": "$",
  "description": "Test account",
  "balance": 75,
  "transactions": [
    { "id": "1", "date": "2020-10-01", "object": "Pocket money", "amount": 50 },
    { "id": "2", "date": "2020-10-03", "object": "Book", "amount": -10 },
    { "id": "3", "date": "2020-10-04", "object": "Sandwich", "amount": -5 }
  ],
}
```

> Tandaan: upang gawing mas madali ang iyong trabaho, maaari mong gamitin ang pre-existing na `test` account na mayroon nang data.

### Gawain

Magsimula tayo sa pagpapalit ng seksyon ng "Balance" sa HTML upang magdagdag ng placeholder elements:

```html
<section>
  Balance: <span id="balance"></span><span id="currency"></span>
</section>
```

Magdagdag din tayo ng bagong seksyon sa ibaba upang ipakita ang account description:

```html
<h2 id="description"></h2>
```

✅ Dahil ang account description ay nagsisilbing pamagat para sa nilalaman sa ilalim nito, ito ay minarkahan nang semantically bilang heading. Matuto pa tungkol sa kung paano [ang istruktura ng heading](https://www.nomensa.com/blog/2017/how-structure-headings-web-accessibility) ay mahalaga para sa accessibility, at suriin nang kritikal ang page upang matukoy kung ano pa ang maaaring gawing heading.

Susunod, gagawa tayo ng bagong function sa `app.js` upang punan ang placeholder:

```js
function updateDashboard() {
  if (!account) {
    return navigate('/login');
  }

  updateElement('description', account.description);
  updateElement('balance', account.balance.toFixed(2));
  updateElement('currency', account.currency);
}
```

Una, sinisiguro natin na mayroon tayong kinakailangang account data bago magpatuloy. Pagkatapos, ginagamit natin ang `updateElement()` function na ginawa natin kanina upang i-update ang HTML.

> Upang gawing mas maganda ang display ng balance, ginagamit natin ang method na [`toFixed(2)`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) upang pilitin ang pagpapakita ng value na may 2 digits pagkatapos ng decimal point.

Ngayon, kailangan nating tawagin ang `updateDashboard()` function tuwing ang dashboard ay na-load. Kung natapos mo na ang [lesson 1 assignment](../1-template-route/assignment.md), dapat itong maging simple, kung hindi, maaari mong gamitin ang sumusunod na implementasyon.

Idagdag ang code na ito sa dulo ng `updateRoute()` function:

```js
if (typeof route.init === 'function') {
  route.init();
}
```

At i-update ang routes definition gamit ang:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: updateDashboard }
};
```

Sa pagbabagong ito, tuwing ang dashboard page ay ipinapakita, ang function na `updateDashboard()` ay tinatawag. Pagkatapos ng login, dapat mong makita ang account balance, currency, at description.

## Gumawa ng table rows nang dynamic gamit ang HTML templates

Sa [unang aralin](../1-template-route/README.md), gumamit tayo ng HTML templates kasabay ng [`appendChild()`](https://developer.mozilla.org/docs/Web/API/Node/appendChild) method upang ipatupad ang navigation sa ating app. Ang mga template ay maaari ring maging mas maliit at magamit upang dynamic na punan ang mga repetitive na bahagi ng page.

Gagamit tayo ng katulad na approach upang ipakita ang listahan ng mga transaction sa HTML table.

### Gawain

Magdagdag ng bagong template sa HTML `<body>`:

```html
<template id="transaction">
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</template>
```

Ang template na ito ay kumakatawan sa isang table row, na may 3 column na nais nating punan: *date*, *object*, at *amount* ng isang transaction.

Pagkatapos, idagdag ang `id` property na ito sa `<tbody>` element ng table sa loob ng dashboard template upang mas madali itong mahanap gamit ang JavaScript:

```html
<tbody id="transactions"></tbody>
```

Handa na ang ating HTML, lumipat tayo sa JavaScript code at gumawa ng bagong function na `createTransactionRow`:

```js
function createTransactionRow(transaction) {
  const template = document.getElementById('transaction');
  const transactionRow = template.content.cloneNode(true);
  const tr = transactionRow.querySelector('tr');
  tr.children[0].textContent = transaction.date;
  tr.children[1].textContent = transaction.object;
  tr.children[2].textContent = transaction.amount.toFixed(2);
  return transactionRow;
}
```

Ang function na ito ay eksaktong ginagawa ang ipinahihiwatig ng pangalan nito: gamit ang template na ginawa natin kanina, lumilikha ito ng bagong table row at pinupunan ang nilalaman nito gamit ang transaction data. Gagamitin natin ito sa `updateDashboard()` function upang punan ang table:

```js
const transactionsRows = document.createDocumentFragment();
for (const transaction of account.transactions) {
  const transactionRow = createTransactionRow(transaction);
  transactionsRows.appendChild(transactionRow);
}
updateElement('transactions', transactionsRows);
```

Dito, ginagamit natin ang method na [`document.createDocumentFragment()`](https://developer.mozilla.org/docs/Web/API/Document/createDocumentFragment) na lumilikha ng bagong DOM fragment kung saan maaari tayong magtrabaho, bago ito sa wakas i-attach sa ating HTML table.

May isa pang bagay na kailangan nating gawin bago gumana ang code na ito, dahil ang `updateElement()` function natin ay kasalukuyang sumusuporta lamang sa text content. Baguhin natin nang kaunti ang code nito:

```js
function updateElement(id, textOrNode) {
  const element = document.getElementById(id);
  element.textContent = ''; // Removes all children
  element.append(textOrNode);
}
```

Ginagamit natin ang [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append) method dahil pinapayagan nitong mag-attach ng text o [DOM Nodes](https://developer.mozilla.org/docs/Web/API/Node) sa isang parent element, na perpekto para sa lahat ng ating use cases.
Kung gagamitin mo ang `test` account para mag-login, makikita mo na ngayon ang listahan ng mga transaksyon sa dashboard 🎉.

---

## 🚀 Hamon

Magtulungan upang gawing mukhang tunay na banking app ang pahina ng dashboard. Kung naistilo mo na ang iyong app, subukang gumamit ng [media queries](https://developer.mozilla.org/docs/Web/CSS/Media_Queries) upang lumikha ng [responsive design](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks) na maayos gumagana sa parehong desktop at mobile devices.

Narito ang isang halimbawa ng istilong dashboard page:

![Screenshot ng isang halimbawa ng resulta ng dashboard pagkatapos istiluhin](../../../../translated_images/screen2.123c82a831a1d14ab2061994be2fa5de9cec1ce651047217d326d4773a6348e4.tl.png)

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/46)

## Takdang-Aralin

[Refactor at lagyan ng komento ang iyong code](assignment.md)

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, pakitandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa orihinal nitong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na maaaring magmula sa paggamit ng pagsasaling ito.