<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5d2efabbc8f94d89f4317ee8646c3ce9",
  "translation_date": "2025-08-28T15:39:30+00:00",
  "source_file": "7-bank-project/4-state-management/README.md",
  "language_code": "tl"
}
-->
# Gumawa ng Banking App Bahagi 4: Mga Konsepto ng State Management

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/47)

### Panimula

Habang lumalaki ang isang web application, nagiging hamon ang pagsubaybay sa lahat ng daloy ng data. Aling code ang kumukuha ng data, anong pahina ang gumagamit nito, saan at kailan ito kailangang i-update...madaling magresulta sa magulong code na mahirap i-maintain. Lalo na kung kailangan mong magbahagi ng data sa iba't ibang pahina ng iyong app, tulad ng user data. Ang konsepto ng *state management* ay matagal nang umiiral sa lahat ng uri ng programa, ngunit habang patuloy na lumalaki ang pagiging kumplikado ng mga web app, ito ay naging mahalagang aspeto na dapat isaalang-alang sa panahon ng development.

Sa huling bahaging ito, susuriin natin ang app na ginawa natin upang muling pag-isipan kung paano pinamamahalaan ang state, na nagbibigay-daan sa suporta para sa pag-refresh ng browser sa anumang punto, at pagpapanatili ng data sa mga session ng user.

### Paunang Kailangan

Kailangan mong matapos ang [data fetching](../3-data/README.md) na bahagi ng web app para sa araling ito. Kailangan mo ring i-install ang [Node.js](https://nodejs.org) at [patakbuhin ang server API](../api/README.md) nang lokal upang ma-manage ang account data.

Maaari mong subukan kung gumagana nang maayos ang server sa pamamagitan ng pag-execute ng command na ito sa terminal:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## Muling Pag-isipan ang State Management

Sa [nakaraang aralin](../3-data/README.md), ipinakilala natin ang pangunahing konsepto ng state sa ating app gamit ang global na `account` variable na naglalaman ng bank data para sa kasalukuyang naka-login na user. Gayunpaman, ang kasalukuyang implementasyon natin ay may ilang mga kahinaan. Subukan mong i-refresh ang pahina habang nasa dashboard ka. Ano ang nangyayari?

Mayroong 3 isyu sa kasalukuyang code:

- Ang state ay hindi napapanatili, dahil ang pag-refresh ng browser ay ibabalik ka sa login page.
- Maraming mga function ang nagbabago sa state. Habang lumalaki ang app, maaaring maging mahirap subaybayan ang mga pagbabago at madaling makalimutan ang pag-update ng isa.
- Ang state ay hindi nalilinis, kaya kapag nag-click ka sa *Logout*, ang account data ay nananatili kahit na nasa login page ka na.

Maaari nating i-update ang ating code upang harapin ang mga isyung ito isa-isa, ngunit magreresulta ito sa mas maraming code duplication at gagawing mas kumplikado at mahirap i-maintain ang app. O maaari tayong mag-pause ng ilang minuto at muling pag-isipan ang ating estratehiya.

> Anong mga problema ang talagang sinusubukan nating lutasin dito?

Ang [State management](https://en.wikipedia.org/wiki/State_management) ay tungkol sa paghahanap ng magandang paraan upang lutasin ang dalawang partikular na problema:

- Paano mapapanatili ang daloy ng data sa isang app na madaling maunawaan?
- Paano mapapanatili ang state data na palaging naka-sync sa user interface (at vice versa)?

Kapag naayos mo na ang mga ito, ang anumang iba pang isyu na maaaring mayroon ka ay maaaring nalutas na o naging mas madali nang lutasin. Maraming posibleng paraan para lutasin ang mga problemang ito, ngunit gagamit tayo ng karaniwang solusyon na binubuo ng **pag-centralize ng data at ng mga paraan para baguhin ito**. Ang daloy ng data ay magiging ganito:

![Schema na nagpapakita ng daloy ng data sa pagitan ng HTML, user actions, at state](../../../../translated_images/data-flow.fa2354e0908fecc89b488010dedf4871418a992edffa17e73441d257add18da4.tl.png)

> Hindi natin tatalakayin dito ang bahagi kung saan ang data ay awtomatikong nagti-trigger ng view update, dahil ito ay konektado sa mas advanced na mga konsepto ng [Reactive Programming](https://en.wikipedia.org/wiki/Reactive_programming). Magandang follow-up na paksa ito kung handa kang mag-dive nang mas malalim.

✅ Maraming mga library ang may iba't ibang approach sa state management, [Redux](https://redux.js.org) ang isa sa mga sikat na opsyon. Tingnan ang mga konsepto at pattern na ginagamit nito dahil madalas itong magandang paraan upang matutunan ang mga potensyal na isyu na maaaring harapin sa malalaking web app at kung paano ito malulutas.

### Gawain

Magsisimula tayo sa kaunting refactoring. Palitan ang deklarasyon ng `account`:

```js
let account = null;
```

Gamit:

```js
let state = {
  account: null
};
```

Ang ideya ay *i-centralize* ang lahat ng data ng ating app sa isang state object. Sa ngayon, mayroon lamang tayong `account` sa state kaya hindi ito masyadong nagbabago, ngunit nagbibigay ito ng daan para sa mga susunod na pagbabago.

Kailangan din nating i-update ang mga function na gumagamit nito. Sa mga function na `register()` at `login()`, palitan ang `account = ...` ng `state.account = ...`;

Sa itaas ng function na `updateDashboard()`, idagdag ang linyang ito:

```js
const account = state.account;
```

Ang refactoring na ito ay hindi nagdala ng maraming improvement, ngunit ang ideya ay maglatag ng pundasyon para sa mga susunod na pagbabago.

## Subaybayan ang Mga Pagbabago sa Data

Ngayon na nailagay na natin ang `state` object para mag-imbak ng ating data, ang susunod na hakbang ay i-centralize ang mga update. Ang layunin ay gawing mas madali ang pagsubaybay sa anumang mga pagbabago at kung kailan ito nangyayari.

Upang maiwasan ang mga pagbabago sa `state` object, magandang practice din na ituring itong [*immutable*](https://en.wikipedia.org/wiki/Immutable_object), ibig sabihin hindi ito maaaring baguhin. Nangangahulugan din ito na kailangan mong gumawa ng bagong state object kung gusto mong baguhin ang anumang bagay dito. Sa paggawa nito, nagtatayo ka ng proteksyon laban sa mga posibleng hindi gustong [side effects](https://en.wikipedia.org/wiki/Side_effect_(computer_science)), at nagbubukas ng mga posibilidad para sa mga bagong feature sa iyong app tulad ng pag-implement ng undo/redo, habang pinapadali rin ang pag-debug. Halimbawa, maaari mong i-log ang bawat pagbabago na ginawa sa state at panatilihin ang history ng mga pagbabago upang maunawaan ang pinagmulan ng isang bug.

Sa JavaScript, maaari mong gamitin ang [`Object.freeze()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) upang lumikha ng immutable na bersyon ng isang object. Kung susubukan mong gumawa ng mga pagbabago sa isang immutable object, magri-raise ng exception.

✅ Alam mo ba ang pagkakaiba ng *shallow* at *deep* immutable object? Maaari mong basahin ito [dito](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#What_is_shallow_freeze).

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

Sa function na ito, gumagawa tayo ng bagong state object at kinokopya ang data mula sa nakaraang state gamit ang [*spread (`...`) operator*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals). Pagkatapos, pinapalitan natin ang partikular na property ng state object gamit ang [bracket notation](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties) `[property]` para sa assignment. Sa wakas, nilalock natin ang object upang maiwasan ang mga pagbabago gamit ang `Object.freeze()`. Sa ngayon, mayroon lamang tayong `account` property na naka-store sa state, ngunit sa approach na ito maaari kang magdagdag ng maraming property hangga't kailangan mo sa state.

I-update din natin ang `state` initialization upang matiyak na ang initial state ay frozen din:

```js
let state = Object.freeze({
  account: null
});
```

Pagkatapos nito, i-update ang `register` function sa pamamagitan ng pagpapalit ng `state.account = result;` assignment ng:

```js
updateState('account', result);
```

Gawin din ito sa `login` function, palitan ang `state.account = data;` ng:

```js
updateState('account', data);
```

Ngayon, samantalahin natin ang pagkakataon upang ayusin ang isyu ng account data na hindi nalilinis kapag nag-click ang user sa *Logout*.

Gumawa ng bagong function na `logout()`:

```js
function logout() {
  updateState('account', null);
  navigate('/login');
}
```

Sa `updateDashboard()`, palitan ang redirection na `return navigate('/login');` ng `return logout()`;

Subukang magrehistro ng bagong account, mag-logout, at mag-login muli upang suriin kung gumagana pa rin nang maayos ang lahat.

> Tip: Maaari mong tingnan ang lahat ng pagbabago sa state sa pamamagitan ng pagdaragdag ng `console.log(state)` sa ibaba ng `updateState()` at pagbukas ng console sa development tools ng iyong browser.

## Panatilihin ang State

Karamihan sa mga web app ay kailangang magpanatili ng data upang gumana nang maayos. Ang lahat ng critical na data ay karaniwang naka-store sa isang database at ina-access sa pamamagitan ng server API, tulad ng user account data sa ating kaso. Ngunit minsan, interesante rin na magpanatili ng ilang data sa client app na tumatakbo sa iyong browser, para sa mas magandang user experience o upang mapabuti ang loading performance.

Kapag gusto mong magpanatili ng data sa iyong browser, may ilang mahahalagang tanong na dapat mong itanong sa iyong sarili:

- *Sensitive ba ang data?* Dapat mong iwasan ang pag-store ng anumang sensitive na data sa client, tulad ng mga password ng user.
- *Gaano katagal mo kailangang panatilihin ang data na ito?* Plano mo bang i-access ang data na ito para lamang sa kasalukuyang session o gusto mo itong i-store magpakailanman?

Mayroong iba't ibang paraan ng pag-store ng impormasyon sa loob ng isang web app, depende sa kung ano ang gusto mong makamit. Halimbawa, maaari mong gamitin ang URLs upang mag-store ng search query, at gawing shareable ito sa pagitan ng mga user. Maaari mo ring gamitin ang [HTTP cookies](https://developer.mozilla.org/docs/Web/HTTP/Cookies) kung ang data ay kailangang i-share sa server, tulad ng [authentication](https://en.wikipedia.org/wiki/Authentication) information.

Isa pang opsyon ay ang paggamit ng isa sa maraming browser APIs para sa pag-store ng data. Dalawa sa mga ito ang partikular na interesante:

- [`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage): isang [Key/Value store](https://en.wikipedia.org/wiki/Key%E2%80%93value_database) na nagpapahintulot sa pagpanatili ng data na partikular sa kasalukuyang website sa iba't ibang session. Ang data na naka-save dito ay hindi kailanman nag-e-expire.
- [`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage): ito ay gumagana nang katulad sa `localStorage` maliban na ang data na naka-store dito ay nalilinis kapag natapos ang session (kapag isinara ang browser).

Tandaan na ang parehong APIs na ito ay nagpapahintulot lamang sa pag-store ng [strings](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String). Kung gusto mong mag-store ng complex objects, kailangan mo itong i-serialize sa [JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON) format gamit ang [`JSON.stringify()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

✅ Kung gusto mong gumawa ng web app na hindi gumagana sa server, posible rin na gumawa ng database sa client gamit ang [`IndexedDB` API](https://developer.mozilla.org/docs/Web/API/IndexedDB_API). Ang API na ito ay nakalaan para sa advanced na paggamit o kung kailangan mong mag-store ng malaking dami ng data, dahil mas kumplikado itong gamitin.

### Gawain

Gusto natin na ang mga user ay manatiling naka-login hanggang sa sila mismo ang mag-click sa *Logout* button, kaya gagamit tayo ng `localStorage` upang i-store ang account data. Una, mag-define tayo ng key na gagamitin natin para i-store ang ating data.

```js
const storageKey = 'savedAccount';
```

Pagkatapos, idagdag ang linyang ito sa dulo ng `updateState()` function:

```js
localStorage.setItem(storageKey, JSON.stringify(state.account));
```

Sa ganitong paraan, ang user account data ay mapapanatili at palaging up-to-date dahil na-centralize natin ang lahat ng ating state updates. Dito natin sisimulan ang pagkuha ng benepisyo mula sa lahat ng ating mga naunang refactor 🙂.

Dahil ang data ay naka-save, kailangan din nating alagaan ang pag-restore nito kapag ang app ay na-load. Dahil magsisimula tayong magkaroon ng mas maraming initialization code, magandang ideya na gumawa ng bagong `init` function, na kasama rin ang ating naunang code sa ibaba ng `app.js`:

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

Dito natin kinukuha ang naka-save na data, at kung mayroon, ina-update natin ang state nang naaayon. Mahalagang gawin ito *bago* i-update ang route, dahil maaaring may code na umaasa sa state sa panahon ng page update.

Maaari rin nating gawing default page ng ating application ang *Dashboard* page, dahil ngayon ay pinapanatili na natin ang account data. Kung walang data na natagpuan, ang dashboard ang bahala sa pag-redirect sa *Login* page. Sa `updateRoute()`, palitan ang fallback na `return navigate('/login');` ng `return navigate('/dashboard');`.

Ngayon mag-login sa app at subukang i-refresh ang pahina. Dapat kang manatili sa dashboard. Sa update na ito, naayos na natin ang lahat ng ating mga paunang isyu...

## I-refresh ang Data

...Ngunit maaaring nakagawa rin tayo ng bagong isyu. Oops!

Pumunta sa dashboard gamit ang `test` account, pagkatapos ay patakbuhin ang command na ito sa terminal upang gumawa ng bagong transaction:

```sh
curl --request POST \
     --header "Content-Type: application/json" \
     --data "{ \"date\": \"2020-07-24\", \"object\": \"Bought book\", \"amount\": -20 }" \
     http://localhost:5000/api/accounts/test/transactions
```

Subukang i-refresh ang dashboard page sa browser ngayon. Ano ang nangyayari? Nakikita mo ba ang bagong transaction?

Ang state ay napapanatili nang walang hanggan salamat sa `localStorage`, ngunit nangangahulugan din ito na hindi ito kailanman na-update hanggang sa mag-log out ka sa app at mag-log in muli!

Isang posibleng estratehiya upang ayusin ito ay ang pag-reload ng account data tuwing na-load ang dashboard, upang maiwasan ang stale data.

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

Ang method na ito ay nagche-check kung kasalukuyan kang naka-login, pagkatapos ay nire-reload ang account data mula sa server.

Gumawa ng isa pang function na tinatawag na `refresh`:

```js
async function refresh() {
  await updateAccountData();
  updateDashboard();
}
```

Ang function na ito ay nag-a-update ng account data, pagkatapos ay ina-update ang HTML ng dashboard page. Ito ang kailangan nating tawagin kapag na-load ang dashboard route. I-update ang route definition gamit:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};
```

Subukang i-refresh ang dashboard ngayon, dapat nitong ipakita ang na-update na account data.

---

## 🚀 Hamon

Ngayon na nire-reload natin ang account data tuwing na-load ang dashboard, sa tingin mo ba kailangan pa nating panatilihin *lahat ng account* data?

Subukang magtulungan upang baguhin kung ano ang sine-save at niloload mula sa `localStorage` upang isama lamang ang mga bagay na talagang kinakailangan para gumana ang app.

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/48)

## Takdang-Aralin
[Ipapatupad ang "Magdagdag ng transaksyon" na dialog](assignment.md)

Narito ang isang halimbawa ng resulta matapos makumpleto ang gawain:

![Screenshot na nagpapakita ng halimbawa ng "Magdagdag ng transaksyon" na dialog](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.tl.png)

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.