<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f587e913e3f7c0b1c549a05dd74ee8e5",
  "translation_date": "2025-08-28T11:14:53+00:00",
  "source_file": "7-bank-project/3-data/README.md",
  "language_code": "lt"
}
-->
# Sukurkite bankinę programėlę 3 dalis: Duomenų gavimo ir naudojimo metodai

## Klausimynas prieš paskaitą

[Klausimynas prieš paskaitą](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/45)

### Įvadas

Kiekvienos internetinės programėlės pagrindas yra *duomenys*. Duomenys gali būti įvairių formų, tačiau jų pagrindinis tikslas visada yra pateikti informaciją vartotojui. Kadangi internetinės programėlės tampa vis interaktyvesnės ir sudėtingesnės, tai, kaip vartotojas pasiekia ir sąveikauja su informacija, tampa esmine interneto kūrimo dalimi.

Šioje pamokoje pamatysime, kaip asinchroniškai gauti duomenis iš serverio ir naudoti juos informacijai pateikti interneto puslapyje, neperkraunant HTML.

### Būtinos sąlygos

Jums reikia būti sukūrus [Prisijungimo ir registracijos formą](../2-forms/README.md) kaip šios pamokos dalį. Taip pat turite įdiegti [Node.js](https://nodejs.org) ir [paleisti serverio API](../api/README.md) lokaliai, kad gautumėte paskyros duomenis.

Galite patikrinti, ar serveris veikia tinkamai, vykdydami šią komandą terminale:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## AJAX ir duomenų gavimas

Tradicinės interneto svetainės atnaujina rodomą turinį, kai vartotojas pasirenka nuorodą arba pateikia duomenis naudodamas formą, perkraudamos visą HTML puslapį. Kiekvieną kartą, kai reikia įkelti naujus duomenis, interneto serveris grąžina visiškai naują HTML puslapį, kurį naršyklė turi apdoroti, nutraukdama dabartinį vartotojo veiksmą ir apribodama sąveiką per įkrovimą. Šis darbo procesas taip pat vadinamas *daugiapuslapių programėlių* arba *MPA*.

![Atnaujinimo procesas daugiapuslapių programėlėje](../../../../translated_images/mpa.7f7375a1a2d4aa779d3f928a2aaaf9ad76bcdeb05cfce2dc27ab126024050f51.lt.png)

Kai internetinės programėlės pradėjo tapti sudėtingesnės ir interaktyvesnės, atsirado nauja technika, vadinama [AJAX (Asynchronous JavaScript and XML)](https://en.wikipedia.org/wiki/Ajax_(programming)). Ši technika leidžia internetinėms programėlėms siųsti ir gauti duomenis iš serverio asinchroniškai naudojant JavaScript, neperkraunant HTML puslapio, todėl atnaujinimai vyksta greičiau, o vartotojo sąveika tampa sklandesnė. Kai nauji duomenys gaunami iš serverio, dabartinis HTML puslapis taip pat gali būti atnaujintas naudojant [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model) API. Laikui bėgant, šis požiūris išsivystė į tai, kas dabar vadinama [*vieno puslapio programėle* arba *SPA*](https://en.wikipedia.org/wiki/Single-page_application).

![Atnaujinimo procesas vieno puslapio programėlėje](../../../../translated_images/spa.268ec73b41f992c2a21ef9294235c6ae597b3c37e2c03f0494c2d8857325cc57.lt.png)

Kai AJAX buvo pirmą kartą pristatytas, vienintelė API, leidžianti asinchroniškai gauti duomenis, buvo [`XMLHttpRequest`](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest). Tačiau šiuolaikinės naršyklės dabar taip pat įgyvendina patogesnę ir galingesnę [`Fetch` API](https://developer.mozilla.org/docs/Web/API/Fetch_API), kuri naudoja pažadus ir yra geriau pritaikyta manipuliuoti JSON duomenimis.

> Nors visos šiuolaikinės naršyklės palaiko `Fetch API`, jei norite, kad jūsų internetinė programėlė veiktų senesnėse naršyklėse, visada verta patikrinti [suderinamumo lentelę caniuse.com](https://caniuse.com/fetch).

### Užduotis

[Ankstesnėje pamokoje](../2-forms/README.md) įgyvendinome registracijos formą paskyrai sukurti. Dabar pridėsime kodą, kad galėtume prisijungti naudojant esamą paskyrą ir gauti jos duomenis. Atidarykite `app.js` failą ir pridėkite naują `login` funkciją:

```js
async function login() {
  const loginForm = document.getElementById('loginForm')
  const user = loginForm.user.value;
}
```

Čia pradedame nuo formos elemento gavimo naudojant `getElementById()`, o tada gauname vartotojo vardą iš įvesties su `loginForm.user.value`. Kiekvieną formos valdiklį galima pasiekti pagal jo pavadinimą (nustatytą HTML naudojant `name` atributą) kaip formos savybę.

Panašiai kaip darėme registracijai, sukursime kitą funkciją, skirtą serverio užklausai atlikti, tačiau šį kartą duomenims gauti:

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

Naudojame `fetch` API, kad asinchroniškai užklaustume duomenis iš serverio, tačiau šį kartą mums nereikia jokių papildomų parametrų, išskyrus URL, kurį reikia iškviesti, nes mes tik užklausome duomenis. Pagal numatymą `fetch` sukuria [`GET`](https://developer.mozilla.org/docs/Web/HTTP/Methods/GET) HTTP užklausą, kurios mes čia siekiame.

✅ `encodeURIComponent()` yra funkcija, kuri užkoduoja specialius simbolius URL. Kokias problemas galėtume turėti, jei nekviestume šios funkcijos ir tiesiogiai naudotume `user` reikšmę URL?

Dabar atnaujinkime mūsų `login` funkciją, kad ji naudotų `getAccount`:

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

Pirma, kadangi `getAccount` yra asinchroninė funkcija, turime ją suderinti su `await` raktažodžiu, kad lauktume serverio rezultato. Kaip ir bet kurioje serverio užklausoje, taip pat turime spręsti klaidų atvejus. Kol kas pridėsime tik žurnalo pranešimą, kad būtų rodoma klaida, ir vėliau grįšime prie jos.

Tada turime išsaugoti duomenis kažkur, kad vėliau galėtume juos naudoti informacijos pateikimui prietaisų skydelyje. Kadangi `account` kintamasis dar neegzistuoja, sukursime globalų kintamąjį failo viršuje:

```js
let account = null;
```

Kai vartotojo duomenys išsaugomi kintamajame, galime pereiti nuo *prisijungimo* puslapio prie *prietaisų skydelio* naudodami jau turimą `navigate()` funkciją.

Galiausiai, turime iškviesti mūsų `login` funkciją, kai prisijungimo forma pateikiama, modifikuodami HTML:

```html
<form id="loginForm" action="javascript:login()">
```

Patikrinkite, ar viskas veikia tinkamai, registruodami naują paskyrą ir bandydami prisijungti naudodami tą pačią paskyrą.

Prieš pereidami prie kitos dalies, taip pat galime užbaigti `register` funkciją, pridėdami tai funkcijos apačioje:

```js
account = result;
navigate('/dashboard');
```

✅ Ar žinojote, kad pagal numatymą serverio API galite kviesti tik iš *to paties domeno ir prievado*, kaip ir interneto puslapis, kurį peržiūrite? Tai yra naršyklių taikoma saugumo priemonė. Bet palaukite, mūsų internetinė programėlė veikia `localhost:3000`, o serverio API veikia `localhost:5000`, kodėl tai veikia? Naudojant techniką, vadinamą [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/docs/Web/HTTP/CORS), galima atlikti kryžminės kilmės HTTP užklausas, jei serveris prideda specialias antraštes prie atsakymo, leidžiančias išimtis konkretiems domenams.

> Sužinokite daugiau apie API, peržiūrėdami šią [pamoką](https://docs.microsoft.com/learn/modules/use-apis-discover-museum-art/?WT.mc_id=academic-77807-sagibbon)

## Atnaujinkite HTML, kad būtų rodomi duomenys

Dabar, kai turime vartotojo duomenis, turime atnaujinti esamą HTML, kad juos būtų galima rodyti. Jau žinome, kaip gauti elementą iš DOM, pavyzdžiui, naudojant `document.getElementById()`. Kai turite bazinį elementą, čia yra keletas API, kurias galite naudoti norėdami jį modifikuoti arba pridėti vaikų elementų:

- Naudojant [`textContent`](https://developer.mozilla.org/docs/Web/API/Node/textContent) savybę galite pakeisti elemento tekstą. Atkreipkite dėmesį, kad keičiant šią reikšmę pašalinami visi elemento vaikai (jei jų yra) ir pakeičiama pateiktu tekstu. Todėl tai taip pat yra efektyvus būdas pašalinti visus nurodyto elemento vaikus, priskiriant tuščią eilutę `''`.

- Naudojant [`document.createElement()`](https://developer.mozilla.org/docs/Web/API/Document/createElement) kartu su [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append) metodu galite sukurti ir pridėti vieną ar daugiau naujų vaikų elementų.

✅ Naudojant [`innerHTML`](https://developer.mozilla.org/docs/Web/API/Element/innerHTML) savybę elemento HTML turinį taip pat galima pakeisti, tačiau šios savybės reikėtų vengti, nes ji yra pažeidžiama [kryžminio svetainės scenarijaus (XSS)](https://developer.mozilla.org/docs/Glossary/Cross-site_scripting) atakoms.

### Užduotis

Prieš pereidami prie prietaisų skydelio ekrano, turime atlikti dar vieną dalyką prisijungimo puslapyje. Šiuo metu, jei bandote prisijungti su vartotojo vardu, kuris neegzistuoja, pranešimas rodomas konsolėje, tačiau paprastam vartotojui niekas nesikeičia ir nežinote, kas vyksta.

Pridėkime vietos rezervavimo elementą prisijungimo formoje, kur prireikus galime rodyti klaidos pranešimą. Geriausia vieta būtų prieš prisijungimo `<button>`:

```html
...
<div id="loginError"></div>
<button>Login</button>
...
```

Šis `<div>` elementas yra tuščias, tai reiškia, kad nieko nebus rodoma ekrane, kol nepridėsime turinio. Taip pat suteikiame jam `id`, kad galėtume lengvai jį gauti naudodami JavaScript.

Grįžkite į `app.js` failą ir sukurkite naują pagalbinę funkciją `updateElement`:

```js
function updateElement(id, text) {
  const element = document.getElementById(id);
  element.textContent = text;
}
```

Ši funkcija yra gana paprasta: pateikus elemento *id* ir *tekstą*, ji atnaujins DOM elemento tekstinį turinį, atitinkantį `id`. Naudokime šį metodą vietoje ankstesnio klaidos pranešimo `login` funkcijoje:

```js
if (data.error) {
  return updateElement('loginError', data.error);
}
```

Dabar, jei bandysite prisijungti su neteisinga paskyra, turėtumėte matyti kažką panašaus:

![Ekrano nuotrauka, rodanti klaidos pranešimą prisijungimo metu](../../../../translated_images/login-error.416fe019b36a63276764c2349df5d99e04ebda54fefe60c715ee87a28d5d4ad0.lt.png)

Dabar turime klaidos tekstą, kuris vizualiai rodomas, tačiau jei bandysite jį naudoti su ekrano skaitytuvu, pastebėsite, kad nieko nepranešama. Kad tekstas, kuris dinamiškai pridedamas prie puslapio, būtų pranešamas ekrano skaitytuvams, jis turės naudoti vadinamąją [Live Region](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/ARIA_Live_Regions). Čia naudosime specifinį gyvos srities tipą, vadinamą pranešimu:

```html
<div id="loginError" role="alert"></div>
```

Įgyvendinkite tą patį elgesį `register` funkcijos klaidoms (nepamirškite atnaujinti HTML).

## Informacijos rodymas prietaisų skydelyje

Naudodami tuos pačius metodus, kuriuos ką tik matėme, taip pat pasirūpinsime paskyros informacijos rodymu prietaisų skydelio puslapyje.

Štai kaip atrodo paskyros objektas, gautas iš serverio:

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

> Pastaba: kad būtų lengviau, galite naudoti iš anksto sukurtą `test` paskyrą, kuri jau yra užpildyta duomenimis.

### Užduotis

Pradėkime nuo "Balanso" skyriaus pakeitimo HTML, kad pridėtume vietos rezervavimo elementus:

```html
<section>
  Balance: <span id="balance"></span><span id="currency"></span>
</section>
```

Taip pat pridėsime naują skyrių žemiau, kad būtų rodoma paskyros aprašymas:

```html
<h2 id="description"></h2>
```

✅ Kadangi paskyros aprašymas veikia kaip turinio antraštė, jis semantiškai pažymėtas kaip antraštė. Sužinokite daugiau apie tai, kaip [antraščių struktūra](https://www.nomensa.com/blog/2017/how-structure-headings-web-accessibility) yra svarbi prieinamumui, ir kritiškai įvertinkite puslapį, kad nustatytumėte, kas dar galėtų būti antraštė.

Tada sukursime naują funkciją `app.js`, kad užpildytume vietos rezervavimo elementus:

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

Pirma, patikriname, ar turime reikalingus paskyros duomenis, prieš tęsdami. Tada naudojame anksčiau sukurtą `updateElement()` funkciją, kad atnaujintume HTML.

> Kad balanso rodymas būtų gražesnis, naudojame metodą [`toFixed(2)`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed), kad priverstinai rodytume reikšmę su 2 skaitmenimis po kablelio.

Dabar turime iškviesti mūsų `updateDashboard()` funkciją kiekvieną kartą, kai prietaisų skydelis įkeliamas. Jei jau baigėte [1 pamokos užduotį](../1-template-route/assignment.md), tai turėtų būti paprasta, kitaip galite naudoti šią įgyvendinimą.

Pridėkite šį kodą `updateRoute()` funkcijos pabaigoje:

```js
if (typeof route.init === 'function') {
  route.init();
}
```

Ir atnaujinkite maršrutų apibrėžimą su:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: updateDashboard }
};
```

Su šiuo pakeitimu kiekvieną kartą, kai rodomas prietaisų skydelio puslapis, iškviečiama funkcija `updateDashboard()`. Po prisijungimo turėtumėte matyti paskyros balansą, valiutą ir aprašymą.

## Dinamiškai kurkite lentelės eilutes naudodami HTML šablonus

Pirmoje pamokoje](../1-template-route/README.md) naudojome HTML šablonus kartu su [`appendChild()`](https://developer.mozilla.org/docs/Web/API/Node/appendChild) metodu, kad įgyvendintume navigaciją mūsų programėlėje. Šablonai taip pat gali būti mažesni ir naudojami dinamiškai užpildyti pasikartojančias puslapio dalis.

Naudosime panašų požiūrį, kad rodytume operacijų sąrašą HTML lentelėje.

### Užduotis

Pridėkite naują šabloną HTML `<body>`:

```html
<template id="transaction">
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</template>
```

Šis šablonas atspindi vieną lentelės eilutę su 3 stulpeliais, kuriuos norime užpildyti: *data*, *objektas* ir *suma* operacijos.

Tada pridėkite šį `id` atributą `<tbody>` elementui lentelėje prietaisų skydelio šablone, kad būtų lengviau rasti naudojant JavaScript:

```html
<tbody id="transactions"></tbody>
```

Mūsų HTML paruoštas, pereikime prie JavaScript kodo ir sukurkime naują funkciją `createTransactionRow`:

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

Ši funkcija daro būtent tai, ką jos pavadinimas reiškia: naudodama anksčiau sukurtą šabloną, ji sukuria naują lentelės eilutę ir užpildo jos turinį naudodama operacijos duomenis. Naudosime tai mūsų `updateDashboard()` funkcijoje, kad užpildytume lentelę:

```js
const transactionsRows = document.createDocumentFragment();
for (const transaction of account.transactions) {
  const transactionRow = createTransactionRow(transaction);
  transactionsRows.appendChild(transactionRow);
}
updateElement('transactions', transactionsRows);
```

Čia naudojame metodą [`document.createDocumentFragment()`](https://developer.mozilla.org/docs/Web/API/Document/createDocumentFragment), kuris sukuria naują DOM fragmentą, su kuriuo galime dirbti, prieš galiausiai jį prijungdami prie mūsų HTML lentelės.

Dar yra vienas dalykas, kurį turime padaryti, kad šis kodas veiktų, nes mūsų `updateElement()` funkcija šiuo metu palaiko tik
Jei bandysite prisijungti naudodami paskyrą „test“, dabar turėtumėte matyti operacijų sąrašą prietaisų skydelyje 🎉.

---

## 🚀 Iššūkis

Dirbkite kartu, kad prietaisų skydelio puslapis atrodytų kaip tikra bankininkystės programa. Jei jau stilizavote savo programą, pabandykite naudoti [media užklausas](https://developer.mozilla.org/docs/Web/CSS/Media_Queries), kad sukurtumėte [prisitaikantį dizainą](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks), kuris gerai veiktų tiek staliniuose, tiek mobiliuosiuose įrenginiuose.

Štai pavyzdys, kaip gali atrodyti stilizuotas prietaisų skydelio puslapis:

![Stilizuoto prietaisų skydelio pavyzdžio ekrano nuotrauka](../../../../translated_images/screen2.123c82a831a1d14ab2061994be2fa5de9cec1ce651047217d326d4773a6348e4.lt.png)

## Po paskaitos testas

[Po paskaitos testas](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/46)

## Užduotis

[Refaktorizuokite ir pakomentuokite savo kodą](assignment.md)

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, atkreipkite dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Kritinei informacijai rekomenduojama profesionali žmogaus vertimo paslauga. Mes neprisiimame atsakomybės už nesusipratimus ar klaidingus interpretavimus, atsiradusius naudojant šį vertimą.