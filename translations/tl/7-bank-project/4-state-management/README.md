<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b46acf79da8550d76445eed00b06c878",
  "translation_date": "2025-10-03T13:10:45+00:00",
  "source_file": "7-bank-project/4-state-management/README.md",
  "language_code": "tl"
}
-->
# Gumawa ng Banking App Bahagi 4: Mga Konsepto ng State Management

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/47)

### Panimula

Habang lumalaki ang isang web application, nagiging hamon ang pagsubaybay sa lahat ng daloy ng data. Aling code ang kumukuha ng data, anong pahina ang gumagamit nito, saan at kailan ito kailangang i-update...madaling mauwi sa magulong code na mahirap i-maintain. Lalo na kung kailangan mong ibahagi ang data sa iba't ibang pahina ng iyong app, tulad ng user data. Ang konsepto ng *state management* ay palaging umiiral sa lahat ng uri ng programa, ngunit habang patuloy na lumalago ang pagiging kumplikado ng mga web app, ito ay nagiging mahalagang aspeto na dapat isaalang-alang sa panahon ng development.

Sa huling bahaging ito, susuriin natin ang app na ating ginawa upang muling pag-isipan kung paano pinamamahalaan ang estado, na nagbibigay-daan sa suporta para sa pag-refresh ng browser sa anumang punto, at pagpapanatili ng data sa buong sesyon ng user.

### Kinakailangan

Kailangan mong makumpleto ang bahagi ng [data fetching](../3-data/README.md) ng web app para sa araling ito. Kailangan mo ring mag-install ng [Node.js](https://nodejs.org) at [patakbuhin ang server API](../api/README.md) nang lokal upang ma-manage ang account data.

Maaari mong subukan kung maayos na tumatakbo ang server sa pamamagitan ng pag-execute ng command na ito sa terminal:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## Muling Pag-isipan ang State Management

Sa [nakaraang aralin](../3-data/README.md), ipinakilala natin ang isang pangunahing konsepto ng estado sa ating app gamit ang global na `account` variable na naglalaman ng bank data para sa kasalukuyang naka-log in na user. Gayunpaman, ang kasalukuyang implementasyon natin ay may ilang mga kakulangan. Subukang i-refresh ang pahina habang nasa dashboard ka. Ano ang nangyayari?

Mayroong 3 isyu sa kasalukuyang code:

- Ang estado ay hindi napapanatili, dahil ang pag-refresh ng browser ay ibinabalik ka sa login page.
- Maraming mga function ang nagmo-modify ng estado. Habang lumalaki ang app, maaaring maging mahirap subaybayan ang mga pagbabago at madaling makalimutang i-update ang isa.
- Ang estado ay hindi nalilinis, kaya kapag nag-click ka sa *Logout*, ang account data ay naroon pa rin kahit na nasa login page ka na.

Maaari nating i-update ang ating code upang harapin ang mga isyung ito isa-isa, ngunit ito ay magdudulot ng higit pang pag-uulit ng code at gagawing mas kumplikado at mahirap i-maintain ang app. O maaari tayong huminto ng ilang minuto at muling pag-isipan ang ating estratehiya.

> Anong mga problema ang talagang sinusubukan nating lutasin dito?

Ang [State management](https://en.wikipedia.org/wiki/State_management) ay tungkol sa paghahanap ng magandang paraan upang lutasin ang dalawang partikular na problemang ito:

- Paano mapapanatiling madaling maunawaan ang daloy ng data sa isang app?
- Paano mapapanatiling naka-sync ang state data sa user interface (at vice versa)?

Kapag naayos mo na ang mga ito, ang anumang iba pang isyu na maaaring mayroon ka ay maaaring nalutas na o naging mas madaling ayusin. Maraming posibleng paraan upang lutasin ang mga problemang ito, ngunit gagamit tayo ng isang karaniwang solusyon na binubuo ng **pagse-centralize ng data at ng mga paraan upang baguhin ito**. Ang daloy ng data ay magiging ganito:

![Schema na nagpapakita ng daloy ng data sa pagitan ng HTML, mga aksyon ng user, at estado](../../../../translated_images/data-flow.fa2354e0908fecc89b488010dedf4871418a992edffa17e73441d257add18da4.tl.png)

> Hindi natin tatalakayin dito ang bahagi kung saan ang data ay awtomatikong nagti-trigger ng pag-update ng view, dahil ito ay konektado sa mas advanced na mga konsepto ng [Reactive Programming](https://en.wikipedia.org/wiki/Reactive_programming). Magandang follow-up na paksa ito kung nais mong mag-dive nang mas malalim.

✅ Maraming mga library na may iba't ibang diskarte sa state management, ang [Redux](https://redux.js.org) ay isang sikat na opsyon. Tingnan ang mga konsepto at pattern na ginagamit nito dahil madalas itong magandang paraan upang matutunan ang mga potensyal na isyu na maaari mong harapin sa malalaking web app at kung paano ito malulutas.

### Gawain

Magsisimula tayo sa kaunting refactoring. Palitan ang deklarasyon ng `account`:

```js
let account = null;
```

Ng:

```js
let state = {
  account: null
};
```

Ang ideya ay *i-centralize* ang lahat ng data ng ating app sa isang state object. Sa ngayon, mayroon lamang tayong `account` sa estado kaya't hindi ito masyadong nagbabago, ngunit ito ay nagbubukas ng daan para sa mga susunod na pagbabago.

Kailangan din nating i-update ang mga function na gumagamit nito. Sa mga function na `register()` at `login()`, palitan ang `account = ...` ng `state.account = ...`;

Sa itaas ng function na `updateDashboard()`, idagdag ang linyang ito:

```js
const account = state.account;
```

Ang refactoring na ito mismo ay hindi nagdala ng malaking pagbabago, ngunit ang ideya ay maglatag ng pundasyon para sa mga susunod na pagbabago.

## Subaybayan ang Mga Pagbabago sa Data

Ngayon na nailagay na natin ang `state` object upang mag-imbak ng ating data, ang susunod na hakbang ay i-centralize ang mga update. Ang layunin ay gawing mas madali ang pagsubaybay sa anumang mga pagbabago at kung kailan ito nangyayari.

Upang maiwasan ang mga pagbabago sa `state` object, magandang kasanayan din na ituring itong [*immutable*](https://en.wikipedia.org/wiki/Immutable_object), ibig sabihin ay hindi ito maaaring baguhin. Nangangahulugan din ito na kailangan mong lumikha ng bagong state object kung nais mong baguhin ang anumang bagay dito. Sa paggawa nito, nagtatayo ka ng proteksyon laban sa mga posibleng hindi gustong [side effects](https://en.wikipedia.org/wiki/Side_effect_(computer_science)), at nagbubukas ng mga posibilidad para sa mga bagong tampok sa iyong app tulad ng pag-implement ng undo/redo, habang ginagawang mas madali ang pag-debug. Halimbawa, maaari mong i-log ang bawat pagbabago na ginawa sa estado at panatilihin ang kasaysayan ng mga pagbabago upang maunawaan ang pinagmulan ng isang bug.

Sa JavaScript, maaari mong gamitin ang [`Object.freeze()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) upang lumikha ng isang immutable na bersyon ng isang object. Kung susubukan mong gumawa ng mga pagbabago sa isang immutable na object, isang exception ang itataas.

✅ Alam mo ba ang pagkakaiba ng isang *shallow* at isang *deep* immutable object? Maaari mong basahin ito [dito](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#What_is_shallow_freeze).

### Gawain

Gumawa tayo ng bagong `updateState()` function:

```js
function updateState(property, newData) {
  state = Object.freeze({
    ...state,
    [property]: newData
  });
}
```

Sa function na ito, lumilikha tayo ng bagong state object at kinokopya ang data mula sa nakaraang estado gamit ang [*spread (`...`) operator*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals). Pagkatapos ay pinapalitan natin ang isang partikular na property ng state object gamit ang [bracket notation](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties) `[property]` para sa assignment. Sa wakas, nilalock natin ang object upang maiwasan ang mga pagbabago gamit ang `Object.freeze()`. Sa ngayon, mayroon lamang tayong `account` property na nakaimbak sa estado, ngunit sa diskarteng ito maaari kang magdagdag ng maraming property hangga't kailangan mo sa estado.

I-update din natin ang `state` initialization upang matiyak na ang initial state ay naka-freeze din:

```js
let state = Object.freeze({
  account: null
});
```

Pagkatapos nito, i-update ang `register` function sa pamamagitan ng pagpapalit ng `state.account = result;` assignment ng:

```js
updateState('account', result);
```

Gawin din ang parehong bagay sa `login` function, palitan ang `state.account = data;` ng:

```js
updateState('account', data);
```

Ngayon ay samantalahin natin ang pagkakataon upang ayusin ang isyu ng hindi nalilinis na account data kapag nag-click ang user sa *Logout*.

Gumawa ng bagong function na `logout()`:

```js
function logout() {
  updateState('account', null);
  navigate('/login');
}
```

Sa `updateDashboard()`, palitan ang redirection na `return navigate('/login');` ng `return logout()`;

Subukang magrehistro ng bagong account, mag-logout, at mag-login muli upang suriin kung maayos pa rin ang lahat.

> Tip: maaari mong tingnan ang lahat ng pagbabago sa estado sa pamamagitan ng pagdaragdag ng `console.log(state)` sa ibaba ng `updateState()` at pagbubukas ng console sa development tools ng iyong browser.

## Panatilihin ang Estado

Karamihan sa mga web app ay kailangang magpanatili ng data upang gumana nang maayos. Ang lahat ng mahalagang data ay karaniwang nakaimbak sa isang database at ina-access sa pamamagitan ng server API, tulad ng user account data sa ating kaso. Ngunit minsan, interesante ring magpanatili ng ilang data sa client app na tumatakbo sa iyong browser, para sa mas magandang karanasan ng user o upang mapabuti ang performance ng pag-load.

Kapag nais mong magpanatili ng data sa iyong browser, may ilang mahahalagang tanong na dapat mong itanong sa iyong sarili:

- *Sensitive ba ang data?* Dapat mong iwasan ang pag-iimbak ng anumang sensitibong data sa client, tulad ng mga password ng user.
- *Gaano katagal mo kailangang panatilihin ang data na ito?* Plano mo bang i-access ang data na ito para lamang sa kasalukuyang sesyon o nais mo itong maiimbak magpakailanman?

Mayroong iba't ibang paraan ng pag-iimbak ng impormasyon sa loob ng isang web app, depende sa kung ano ang nais mong makamit. Halimbawa, maaari mong gamitin ang URLs upang mag-imbak ng search query, at gawing shareable ito sa pagitan ng mga user. Maaari mo ring gamitin ang [HTTP cookies](https://developer.mozilla.org/docs/Web/HTTP/Cookies) kung ang data ay kailangang ibahagi sa server, tulad ng impormasyon sa [authentication](https://en.wikipedia.org/wiki/Authentication).

Isa pang opsyon ay ang paggamit ng isa sa maraming browser APIs para sa pag-iimbak ng data. Dalawa sa mga ito ay partikular na interesante:

- [`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage): isang [Key/Value store](https://en.wikipedia.org/wiki/Key%E2%80%93value_database) na nagpapahintulot na magpanatili ng data na partikular sa kasalukuyang website sa iba't ibang sesyon. Ang data na naka-save dito ay hindi kailanman nag-e-expire.
- [`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage): ito ay gumagana katulad ng `localStorage` maliban na ang data na nakaimbak dito ay nabubura kapag natapos ang sesyon (kapag isinara ang browser).

Tandaan na ang parehong mga API na ito ay nagpapahintulot lamang na mag-imbak ng [strings](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String). Kung nais mong mag-imbak ng mga kumplikadong object, kailangan mong i-serialize ito sa [JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON) format gamit ang [`JSON.stringify()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

✅ Kung nais mong gumawa ng isang web app na hindi gumagana sa isang server, posible ring gumawa ng database sa client gamit ang [`IndexedDB` API](https://developer.mozilla.org/docs/Web/API/IndexedDB_API). Ang API na ito ay nakalaan para sa mga advanced na kaso ng paggamit o kung kailangan mong mag-imbak ng malaking dami ng data, dahil ito ay mas kumplikado gamitin.

### Gawain

Nais nating manatiling naka-log in ang ating mga user hanggang sa sila mismo ang mag-click sa *Logout* button, kaya gagamit tayo ng `localStorage` upang mag-imbak ng account data. Una, magtakda tayo ng key na gagamitin natin upang mag-imbak ng ating data.

```js
const storageKey = 'savedAccount';
```

Pagkatapos ay idagdag ang linyang ito sa dulo ng `updateState()` function:

```js
localStorage.setItem(storageKey, JSON.stringify(state.account));
```

Sa ganitong paraan, ang user account data ay mapapanatili at palaging up-to-date dahil na-centralize na natin ang lahat ng ating state updates. Dito natin sisimulang maramdaman ang benepisyo ng lahat ng ating mga naunang refactor 🙂.

Dahil ang data ay naka-save, kailangan din nating tiyakin na maibabalik ito kapag na-load ang app. Dahil magkakaroon na tayo ng mas maraming initialization code, magandang ideya na gumawa ng bagong `init` function, na kasama rin ang ating naunang code sa ibaba ng `app.js`:

```js
function init() {
  const savedAccount = localStorage.getItem(storageKey);
  if (savedAccount) {
    updateState('account', JSON.parse(savedAccount));
  }

  // Our previous initialization code
  window.onpopstate = () => updateRoute();
  updateRoute();
}

init();
```

Dito natin kinukuha ang naka-save na data, at kung mayroon man, ina-update natin ang estado nang naaayon. Mahalagang gawin ito *bago* i-update ang ruta, dahil maaaring may code na umaasa sa estado sa panahon ng pag-update ng pahina.

Maaari rin nating gawing default na pahina ng ating application ang *Dashboard*, dahil ngayon ay pinapanatili na natin ang account data. Kung walang data na makita, ang dashboard ang bahalang mag-redirect sa *Login* page. Sa `updateRoute()`, palitan ang fallback na `return navigate('/login');` ng `return navigate('/dashboard');`.

Ngayon mag-login sa app at subukang i-refresh ang pahina. Dapat kang manatili sa dashboard. Sa update na ito, naayos na natin ang lahat ng ating mga unang isyu...

## I-refresh ang Data

...Ngunit maaaring nakagawa rin tayo ng bago. Oops!

Pumunta sa dashboard gamit ang `test` account, pagkatapos ay patakbuhin ang command na ito sa terminal upang lumikha ng bagong transaction:

```sh
curl --request POST \
     --header "Content-Type: application/json" \
     --data "{ \"date\": \"2020-07-24\", \"object\": \"Bought book\", \"amount\": -20 }" \
     http://localhost:5000/api/accounts/test/transactions
```

Subukang i-refresh ang iyong dashboard page sa browser ngayon. Ano ang nangyayari? Nakikita mo ba ang bagong transaction?

Ang estado ay napapanatili nang walang hanggan salamat sa `localStorage`, ngunit nangangahulugan din ito na hindi ito kailanman na-update hanggang sa mag-log out ka sa app at mag-log in muli!

Ang isang posibleng estratehiya upang ayusin iyon ay ang i-reload ang account data tuwing na-load ang dashboard, upang maiwasan ang lumang data.

### Gawain

Gumawa ng bagong function na `updateAccountData`:

```js
async function updateAccountData() {
  const account = state.account;
  if (!account) {
    return logout();
  }

  const data = await getAccount(account.user);
  if (data.error) {
    return logout();
  }

  updateState('account', data);
}
```

Ang method na ito ay sinusuri kung kasalukuyan kang naka-log in pagkatapos ay nire-reload ang account data mula sa server.

Gumawa ng isa pang function na tinatawag na `refresh`:

```js
async function refresh() {
  await updateAccountData();
  updateDashboard();
}
```

Ang function na ito ay nag-a-update ng account data, pagkatapos ay inaasikaso ang pag-update ng HTML ng dashboard page. Ito ang kailangan nating tawagin kapag na-load ang dashboard route. I-update ang route definition gamit ang:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};
```

Subukang i-reload ang dashboard ngayon, dapat nitong ipakita ang na-update na account data.

---

## 🚀 Hamon

Ngayon na nire-reload natin ang account data tuwing na-load ang dashboard, sa tingin mo ba kailangan pa rin nating panatilihin ang *lahat ng account* data?

Subukang magtulungan upang baguhin kung ano ang sine-save at niloload mula sa `localStorage` upang isama lamang kung ano ang talagang kinakailangan para gumana ang app.

## Post-Lecture Quiz
[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/48)

## Takdang-Aralin

[Ipapatupad ang "Add transaction" dialog](assignment.md)

Narito ang isang halimbawa ng resulta pagkatapos makumpleto ang takdang-aralin:

![Screenshot na nagpapakita ng halimbawa ng "Add transaction" dialog](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.tl.png)

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, pakitandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa orihinal nitong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.