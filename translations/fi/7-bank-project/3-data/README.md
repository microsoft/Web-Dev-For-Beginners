<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "89d0df9854ed020f155e94882ae88d4c",
  "translation_date": "2025-08-29T00:34:58+00:00",
  "source_file": "7-bank-project/3-data/README.md",
  "language_code": "fi"
}
-->
# Rakenna pankkisovellus Osa 3: Datan hakeminen ja käyttäminen

## Ennakkokysely

[Ennakkokysely](https://ff-quizzes.netlify.app/web/quiz/45)

### Johdanto

Jokaisen verkkosovelluksen ytimessä on *data*. Data voi esiintyä monessa muodossa, mutta sen pääasiallinen tarkoitus on aina esittää tietoa käyttäjälle. Verkkosovellusten muuttuessa yhä vuorovaikutteisemmiksi ja monimutkaisemmiksi, siitä, miten käyttäjä pääsee käsiksi tietoon ja käyttää sitä, on tullut keskeinen osa verkkokehitystä.

Tässä oppitunnissa opimme hakemaan dataa palvelimelta asynkronisesti ja käyttämään tätä dataa tiedon näyttämiseen verkkosivulla ilman HTML-sivun uudelleenlatausta.

### Esitiedot

Sinun tulee olla rakentanut [Kirjautumis- ja rekisteröintilomake](../2-forms/README.md) -osio verkkosovelluksesta ennen tämän oppitunnin aloittamista. Sinun tulee myös asentaa [Node.js](https://nodejs.org) ja [käynnistää palvelin-API](../api/README.md) paikallisesti, jotta saat tilitietoja.

Voit testata, että palvelin toimii oikein suorittamalla tämän komennon terminaalissa:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## AJAX ja datan hakeminen

Perinteiset verkkosivustot päivittävät näytettävää sisältöä, kun käyttäjä valitsee linkin tai lähettää tietoja lomakkeella, lataamalla koko HTML-sivun uudelleen. Joka kerta, kun uutta dataa täytyy ladata, verkkopalvelin palauttaa täysin uuden HTML-sivun, joka selaimen täytyy käsitellä. Tämä keskeyttää käyttäjän nykyisen toiminnon ja rajoittaa vuorovaikutusta latauksen aikana. Tätä työnkulkua kutsutaan myös *monisivusovellukseksi* tai *MPA:ksi*.

![Päivitystyönkulku monisivusovelluksessa](../../../../translated_images/mpa.7f7375a1a2d4aa779d3f928a2aaaf9ad76bcdeb05cfce2dc27ab126024050f51.fi.png)

Kun verkkosovellukset alkoivat muuttua monimutkaisemmiksi ja vuorovaikutteisemmiksi, syntyi uusi tekniikka nimeltä [AJAX (Asynchronous JavaScript and XML)](https://en.wikipedia.org/wiki/Ajax_(programming)). Tämä tekniikka mahdollistaa verkkosovellusten lähettää ja vastaanottaa dataa palvelimelta asynkronisesti JavaScriptin avulla ilman HTML-sivun uudelleenlatausta, mikä johtaa nopeampiin päivityksiin ja sujuvampaan käyttäjäkokemukseen. Kun uutta dataa saadaan palvelimelta, nykyistä HTML-sivua voidaan myös päivittää JavaScriptin avulla käyttäen [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model)-rajapintaa. Ajan myötä tämä lähestymistapa on kehittynyt siihen, mitä nykyään kutsutaan [*yksisivusovellukseksi* tai *SPA:ksi*](https://en.wikipedia.org/wiki/Single-page_application).

![Päivitystyönkulku yksisivusovelluksessa](../../../../translated_images/spa.268ec73b41f992c2a21ef9294235c6ae597b3c37e2c03f0494c2d8857325cc57.fi.png)

Kun AJAX esiteltiin ensimmäisen kerran, ainoa käytettävissä oleva rajapinta datan asynkroniseen hakemiseen oli [`XMLHttpRequest`](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest). Modernit selaimet tukevat kuitenkin nykyään myös kätevämpää ja tehokkaampaa [`Fetch` APIa](https://developer.mozilla.org/docs/Web/API/Fetch_API), joka käyttää promiseja ja soveltuu paremmin JSON-datan käsittelyyn.

> Vaikka kaikki modernit selaimet tukevat `Fetch APIa`, jos haluat verkkosovelluksesi toimivan vanhoissa selaimissa, on aina hyvä tarkistaa [yhteensopivuustaulukko caniuse.com-sivustolta](https://caniuse.com/fetch).

### Tehtävä

[Edellisessä oppitunnissa](../2-forms/README.md) toteutimme rekisteröintilomakkeen tilin luomista varten. Nyt lisäämme koodia kirjautumiseen olemassa olevalla tilillä ja datan hakemiseen. Avaa `app.js`-tiedosto ja lisää uusi `login`-funktio:

```js
async function login() {
  const loginForm = document.getElementById('loginForm')
  const user = loginForm.user.value;
}
```

Aloitamme hakemalla lomake-elementin `getElementById()`-metodilla ja saamme sitten käyttäjänimen syötteestä `loginForm.user.value` avulla. Jokainen lomakekontrolli on saatavilla sen nimen (asetettu HTML:ssä `name`-attribuutilla) perusteella lomakkeen ominaisuutena.

Samalla tavalla kuin rekisteröinnissä, luomme toisen funktion palvelinpyyntöä varten, mutta tällä kertaa tilitietojen hakemiseen:

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

Käytämme `fetch`-APIa pyytääksemme dataa asynkronisesti palvelimelta, mutta tällä kertaa emme tarvitse muita parametreja kuin kutsuttavan URL-osoitteen, koska haemme vain dataa. Oletuksena `fetch` luo [`GET`](https://developer.mozilla.org/docs/Web/HTTP/Methods/GET)-HTTP-pyynnön, mikä on juuri se, mitä tarvitsemme tässä.

✅ `encodeURIComponent()` on funktio, joka koodaa erikoismerkit URL-osoitetta varten. Mitä ongelmia voisi ilmetä, jos emme kutsu tätä funktiota ja käytämme suoraan `user`-arvoa URL-osoitteessa?

Päivitetään nyt `login`-funktiomme käyttämään `getAccount`-funktiota:

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

Koska `getAccount` on asynkroninen funktio, meidän täytyy käyttää `await`-avainsanaa odottaaksemme palvelimen vastausta. Kuten kaikissa palvelinpyynnöissä, meidän täytyy myös käsitellä virhetilanteet. Toistaiseksi lisäämme vain lokiviestin virheen näyttämiseksi ja palaamme tähän myöhemmin.

Seuraavaksi meidän täytyy tallentaa data johonkin, jotta voimme käyttää sitä myöhemmin kojelaudan tietojen näyttämiseen. Koska `account`-muuttujaa ei vielä ole, luomme globaalin muuttujan tiedoston alkuun:

```js
let account = null;
```

Kun käyttäjätiedot on tallennettu muuttujaan, voimme siirtyä *kirjautumissivulta* *kojelaudalle* käyttämällä olemassa olevaa `navigate()`-funktiota.

Lopuksi meidän täytyy kutsua `login`-funktiota, kun kirjautumislomake lähetetään, muokkaamalla HTML:ää:

```html
<form id="loginForm" action="javascript:login()">
```

Testaa, että kaikki toimii oikein, rekisteröimällä uusi tili ja yrittämällä kirjautua sisään samalla tilillä.

Ennen kuin siirrymme seuraavaan osaan, voimme myös täydentää `register`-funktiota lisäämällä tämän funktion loppuun:

```js
account = result;
navigate('/dashboard');
```

✅ Tiesitkö, että oletuksena voit kutsua palvelin-APIa vain *samasta domainista ja portista*, josta katsot verkkosivua? Tämä on selainten asettama turvallisuusmekanismi. Mutta hetkinen, verkkosovelluksemme pyörii osoitteessa `localhost:3000`, kun taas palvelin-API pyörii osoitteessa `localhost:5000`. Miksi se toimii? Käyttämällä tekniikkaa nimeltä [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/docs/Web/HTTP/CORS) on mahdollista suorittaa ristiin-origin HTTP-pyyntöjä, jos palvelin lisää erityisiä otsikoita vastaukseen, sallien poikkeukset tietyille domaineille.

> Opi lisää APIsta suorittamalla tämä [oppitunti](https://docs.microsoft.com/learn/modules/use-apis-discover-museum-art/?WT.mc_id=academic-77807-sagibbon)

## Päivitä HTML näyttämään dataa

Nyt kun meillä on käyttäjätiedot, meidän täytyy päivittää olemassa oleva HTML näyttämään ne. Tiedämme jo, miten hakea elementti DOM:sta esimerkiksi `document.getElementById()`-metodilla. Kun sinulla on peruselementti, tässä on joitakin rajapintoja, joita voit käyttää sen muokkaamiseen tai lapsielementtien lisäämiseen:

- [`textContent`](https://developer.mozilla.org/docs/Web/API/Node/textContent)-ominaisuutta käyttämällä voit muuttaa elementin tekstiä. Huomaa, että tämän arvon muuttaminen poistaa kaikki elementin lapset (jos niitä on) ja korvaa ne annetulla tekstillä. Näin ollen se on myös tehokas tapa poistaa kaikki annetun elementin lapset asettamalla arvoksi tyhjä merkkijono `''`.

- [`document.createElement()`](https://developer.mozilla.org/docs/Web/API/Document/createElement)-metodia yhdessä [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append)-metodin kanssa voit käyttää uusien lapsielementtien luomiseen ja liittämiseen.

✅ [`innerHTML`](https://developer.mozilla.org/docs/Web/API/Element/innerHTML)-ominaisuutta käyttämällä on myös mahdollista muuttaa elementin HTML-sisältöä, mutta tätä tulisi välttää, koska se on altis [cross-site scripting (XSS)](https://developer.mozilla.org/docs/Glossary/Cross-site_scripting)-hyökkäyksille.

### Tehtävä

Ennen kuin siirrymme kojelautanäkymään, meidän täytyy tehdä vielä yksi asia *kirjautumissivulla*. Tällä hetkellä, jos yrität kirjautua käyttäjänimellä, jota ei ole olemassa, viesti näytetään konsolissa, mutta tavalliselle käyttäjälle ei tapahdu mitään, eikä hän tiedä, mitä tapahtuu.

Lisätään paikkamerkki-elementti kirjautumislomakkeeseen, jossa voimme näyttää virheilmoituksen tarvittaessa. Hyvä paikka olisi juuri ennen kirjautumis-`<button>`-elementtiä:

```html
...
<div id="loginError"></div>
<button>Login</button>
...
```

Tämä `<div>`-elementti on tyhjä, mikä tarkoittaa, että mitään ei näytetä näytöllä, ennen kuin lisäämme siihen sisältöä. Annamme sille myös `id`-tunnisteen, jotta voimme hakea sen helposti JavaScriptillä.

Palaa `app.js`-tiedostoon ja luo uusi apufunktio `updateElement`:

```js
function updateElement(id, text) {
  const element = document.getElementById(id);
  element.textContent = text;
}
```

Tämä funktio on melko suoraviivainen: annettuna elementin *id* ja *teksti*, se päivittää vastaavan DOM-elementin tekstisisällön.

Käytetään tätä metodia aiemman virheilmoituksen tilalla `login`-funktiossa:

```js
if (data.error) {
  return updateElement('loginError', data.error);
}
```

Nyt, jos yrität kirjautua sisään virheellisellä tilillä, sinun pitäisi nähdä jotain tällaista:

![Kuvakaappaus, jossa virheilmoitus näytetään kirjautumisen aikana](../../../../translated_images/login-error.416fe019b36a63276764c2349df5d99e04ebda54fefe60c715ee87a28d5d4ad0.fi.png)

Nyt meillä on visuaalisesti näkyvä virheteksti, mutta jos kokeilet sitä ruudunlukijalla, huomaat, että mitään ei ilmoiteta. Jotta dynaamisesti lisätty teksti sivulle ilmoitettaisiin ruudunlukijoilla, sen täytyy käyttää jotain, jota kutsutaan [Live Regioniksi](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/ARIA_Live_Regions). Tässä käytämme erityistä live-alueen tyyppiä nimeltä alert:

```html
<div id="loginError" role="alert"></div>
```

Toteuta sama toiminnallisuus myös `register`-funktion virheille (älä unohda päivittää HTML:ää).

## Näytä tietoja kojelaudalla

Käyttämällä samoja tekniikoita, joita juuri opimme, huolehdimme myös tilitietojen näyttämisestä kojelautasivulla.

Tältä palvelimelta saatu tilitieto-objekti näyttää:

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

> Huom: elämän helpottamiseksi voit käyttää olemassa olevaa `test`-tiliä, joka on jo täytetty tiedoilla.

### Tehtävä

Aloitetaan korvaamalla "Saldo"-osio HTML:ssä lisäämällä paikkamerkki-elementit:

```html
<section>
  Balance: <span id="balance"></span><span id="currency"></span>
</section>
```

Lisäämme myös uuden osion juuri tämän alapuolelle tilin kuvauksen näyttämistä varten:

```html
<h2 id="description"></h2>
```

✅ Koska tilin kuvaus toimii otsikkona sen alapuolella olevalle sisällölle, se on merkitty semanttisesti otsikoksi. Opi lisää siitä, miksi [otsikkorakenne](https://www.nomensa.com/blog/2017/how-structure-headings-web-accessibility) on tärkeä saavutettavuuden kannalta, ja tarkastele kriittisesti sivua määrittääksesi, mitä muuta voisi olla otsikko.

Seuraavaksi luomme uuden funktion `app.js`-tiedostoon paikkamerkin täyttämiseksi:

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

Ensiksi tarkistamme, että meillä on tarvittavat tilitiedot ennen kuin jatkamme eteenpäin. Sitten käytämme aiemmin luomaamme `updateElement()`-funktiota HTML:n päivittämiseen.

> Jotta saldon näyttö olisi siistimpi, käytämme metodia [`toFixed(2)`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) pakottaaksemme arvon näyttämään kaksi desimaalia.

Nyt meidän täytyy kutsua `updateDashboard()`-funktiota aina, kun kojelautasivu ladataan. Jos olet jo suorittanut [oppitunnin 1 tehtävän](../1-template-route/assignment.md), tämän pitäisi olla suoraviivaista, muuten voit käyttää seuraavaa toteutusta.

Lisää tämä koodi `updateRoute()`-funktion loppuun:

```js
if (typeof route.init === 'function') {
  route.init();
}
```

Ja päivitä reittien määrittely seuraavasti:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: updateDashboard }
};
```

Tämän muutoksen myötä aina, kun kojelautasivu näytetään, `updateDashboard()`-funktio kutsutaan. Kirjautumisen jälkeen sinun pitäisi nähdä tilin saldo, valuutta ja kuvaus.

## Luo taulukon rivit dynaamisesti HTML-mallien avulla

[Ensimmäisessä oppitunnissa](../1-template-route/README.md) käytimme HTML-malleja yhdessä [`appendChild()`](https://developer.mozilla.org/docs/Web/API/Node/appendChild)-metodin kanssa navigoinnin toteuttamiseen sovelluksessamme. Mallit voivat olla myös pienempiä ja niitä voidaan käyttää dynaamisesti toistuvien osien täyttämiseen sivulla.

Käytämme samanlaista lähestymistapaa näyttääksemme tapahtumaluettelon HTML-taulukossa.

### Tehtävä

Lisää uusi malli HTML-`<body>`-osioon:

```html
<template id="transaction">
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</template>
```

Tämä malli edustaa yksittäistä taulukkoriviä, jossa on kolme saraketta: *päivämäärä*, *kohde* ja *summa* tapahtumasta.

Lisää sitten tämä `id`-ominaisuus kojelaudan taulukon `<tbody>`-elementtiin, jotta se on helpompi löytää JavaScriptillä:

```html
<tbody id="transactions"></tbody>
```

HTML on valmis, siirrytään JavaScript-koodiin ja luodaan uusi funktio `createTransactionRow`:

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

Tämä funktio tekee juuri sen, mitä sen nimi viittaa: käyttämällä aiemmin luomaamme mallia se luo uuden taulukkorivin ja täyttää sen sisällön tapahtumatiedoilla. Käytämme tätä `updateDashboard()`-funktiossamme taulukon täyttämiseen:

```js
const transactionsRows = document.createDocumentFragment();
for (const transaction of account.transactions) {
  const transactionRow = createTransactionRow(transaction);
  transactionsRows.appendChild(transactionRow);
}
updateElement('transactions', transactionsRows);
```

Tässä käytämme metodia [`document.createDocumentFragment()`](https://developer.mozilla.org/docs/Web/API/Document/createDocumentFragment), joka luo uuden DOM-fragmentin, johon voimme tehdä muutoksia ennen sen liittämistä HTML-taulukkoon.

On vielä yksi asia, joka meidän täytyy tehdä ennen kuin tämä koodi toimii, sillä `updateElement()`-funktiomme tukee tällä hetkellä vain tekstisisältöä. Muutetaan sen koodia hieman:

```js
function updateElement(id, textOrNode) {
  const element = document.getElementById(id);
  element.textContent = ''; // Removes all children
  element.append(textOrNode);
}
```

Käytämme [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append)-metodia, koska sen avulla voimme liittää joko tekstiä tai [DOM-solmuja](https://developer.mozilla.org/docs/Web/API/Node) vanhempaan elementtiin, mikä sopii täydellisesti kaikkiin käyttötapauksiimme.
Jos yrität kirjautua sisään käyttämällä `test`-tiliä, sinun pitäisi nyt nähdä tapahtumaluettelo hallintapaneelissa 🎉.

---

## 🚀 Haaste

Työskennelkää yhdessä, jotta hallintapaneelisivusta saadaan näyttämään oikealta pankkisovellukselta. Jos olet jo muotoillut sovelluksesi, yritä käyttää [media queries](https://developer.mozilla.org/docs/Web/CSS/Media_Queries) -ominaisuutta luodaksesi [responsiivisen suunnittelun](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks), joka toimii hyvin sekä työpöytä- että mobiililaitteilla.

Tässä esimerkki muotoillusta hallintapaneelisivusta:

![Esimerkkikuva hallintapaneelista muotoilun jälkeen](../../../../translated_images/screen2.123c82a831a1d14ab2061994be2fa5de9cec1ce651047217d326d4773a6348e4.fi.png)

## Luentojälkeinen kysely

[Luentojälkeinen kysely](https://ff-quizzes.netlify.app/web/quiz/46)

## Tehtävä

[Refaktoroi ja kommentoi koodisi](assignment.md)

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Pyrimme tarkkuuteen, mutta huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäisellä kielellä tulee pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskääntämistä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.