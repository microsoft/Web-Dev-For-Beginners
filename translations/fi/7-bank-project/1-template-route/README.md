<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8da1b5e2c63f749808858c53f37b8ce7",
  "translation_date": "2025-08-27T21:01:12+00:00",
  "source_file": "7-bank-project/1-template-route/README.md",
  "language_code": "fi"
}
-->
# Rakenna pankkisovellus Osa 1: HTML-mallit ja reitit verkkosovelluksessa

## Ennakkokysely

[Ennakkokysely](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/41)

### Johdanto

JavaScriptin tulon myötä selaimiin, verkkosivustot ovat muuttuneet entistä interaktiivisemmiksi ja monimutkaisemmiksi. Verkkoteknologioita käytetään nykyään yleisesti täysin toimivien sovellusten luomiseen, jotka toimivat suoraan selaimessa ja joita kutsumme [verkkosovelluksiksi](https://en.wikipedia.org/wiki/Web_application). Koska verkkosovellukset ovat erittäin interaktiivisia, käyttäjät eivät halua odottaa koko sivun latautumista jokaisen toiminnon jälkeen. Siksi JavaScriptiä käytetään päivittämään HTML suoraan DOM:n avulla, jotta käyttäjäkokemus olisi sujuvampi.

Tässä oppitunnissa luomme perustan pankkisovelluksen rakentamiselle, käyttämällä HTML-malleja useiden näyttöjen luomiseen, jotka voidaan näyttää ja päivittää ilman, että koko HTML-sivua tarvitsee ladata uudelleen.

### Esivaatimukset

Tarvitset paikallisen verkkopalvelimen testataksesi verkkosovellusta, jonka rakennamme tässä oppitunnissa. Jos sinulla ei ole sellaista, voit asentaa [Node.js:n](https://nodejs.org) ja käyttää komentoa `npx lite-server` projektikansiossasi. Tämä luo paikallisen verkkopalvelimen ja avaa sovelluksesi selaimessa.

### Valmistelu

Luo tietokoneellesi kansio nimeltä `bank` ja sen sisälle tiedosto nimeltä `index.html`. Aloitamme tästä HTML-[pohjakoodista](https://en.wikipedia.org/wiki/Boilerplate_code):

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

## HTML-mallit

Jos haluat luoda useita näyttöjä verkkosivulle, yksi ratkaisu olisi luoda yksi HTML-tiedosto jokaiselle näytölle, jonka haluat näyttää. Tämä ratkaisu tuo kuitenkin mukanaan joitakin haittoja:

- Koko HTML täytyy ladata uudelleen näytön vaihdon yhteydessä, mikä voi olla hidasta.
- Tietojen jakaminen eri näyttöjen välillä on vaikeaa.

Toinen lähestymistapa on käyttää vain yhtä HTML-tiedostoa ja määritellä useita [HTML-malleja](https://developer.mozilla.org/docs/Web/HTML/Element/template) käyttämällä `<template>`-elementtiä. Malli on uudelleenkäytettävä HTML-lohko, jota selain ei näytä, ja joka täytyy luoda ajonaikaisesti JavaScriptin avulla.

### Tehtävä

Luomme pankkisovelluksen, jossa on kaksi näyttöä: kirjautumissivu ja hallintapaneeli. Aloitetaan lisäämällä HTML-runkoon paikkamerkkielementti, jota käytämme sovelluksemme eri näyttöjen luomiseen:

```html
<div id="app">Loading...</div>
```

Annamme sille `id`-tunnisteen, jotta sen löytäminen JavaScriptillä olisi helpompaa myöhemmin.

> Vinkki: Koska tämän elementin sisältö korvataan, voimme laittaa siihen latausviestin tai -ilmaisimen, joka näytetään sovelluksen latautuessa.

Seuraavaksi lisätään HTML-malli kirjautumissivulle. Laitamme siihen toistaiseksi vain otsikon ja osion, joka sisältää linkin navigointia varten.

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <a href="/dashboard">Login</a>
  </section>
</template>
```

Lisätään sitten toinen HTML-malli hallintapaneelisivulle. Tämä sivu sisältää eri osioita:

- Otsikon, jossa on otsikko ja uloskirjautumislinkki
- Pankkitilin nykyisen saldon
- Tapahtumaluettelon, joka näytetään taulukossa

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

> Vinkki: Kun luot HTML-malleja, jos haluat nähdä miltä ne näyttävät, voit kommentoida `<template>` ja `</template>`-rivien ympärille `<!-- -->`.

✅ Miksi käytämme `id`-attribuutteja malleissa? Voisimmeko käyttää jotain muuta, kuten luokkia?

## Mallien näyttäminen JavaScriptillä

Jos kokeilet nykyistä HTML-tiedostoasi selaimessa, näet, että se jää näyttämään `Loading...`. Tämä johtuu siitä, että meidän täytyy lisätä JavaScript-koodia mallien luomiseksi ja näyttämiseksi.

Mallin luominen tapahtuu yleensä kolmessa vaiheessa:

1. Haetaan mallielementti DOM:sta, esimerkiksi käyttämällä [`document.getElementById`](https://developer.mozilla.org/docs/Web/API/Document/getElementById).
2. Kopioidaan mallielementti, käyttämällä [`cloneNode`](https://developer.mozilla.org/docs/Web/API/Node/cloneNode).
3. Liitetään se DOM:iin näkyvän elementin alle, esimerkiksi käyttämällä [`appendChild`](https://developer.mozilla.org/docs/Web/API/Node/appendChild).

✅ Miksi meidän täytyy kopioida malli ennen sen liittämistä DOM:iin? Mitä luulet tapahtuvan, jos jättäisimme tämän vaiheen väliin?

### Tehtävä

Luo uusi tiedosto nimeltä `app.js` projektikansioosi ja tuo tämä tiedosto HTML:n `<head>`-osioon:

```html
<script src="app.js" defer></script>
```

Nyt `app.js`-tiedostossa luomme uuden funktion `updateRoute`:

```js
function updateRoute(templateId) {
  const template = document.getElementById(templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

Tässä teemme juuri yllä kuvatut kolme vaihetta. Luomme mallin, jonka `id` on `templateId`, ja laitamme sen kopioidun sisällön sovelluksemme paikkamerkkiin. Huomaa, että meidän täytyy käyttää `cloneNode(true)` kopioidaksemme koko mallin alipuuston.

Kutsu nyt tätä funktiota yhdellä mallilla ja katso tulosta.

```js
updateRoute('login');
```

✅ Mikä on tämän koodin tarkoitus `app.innerHTML = '';`? Mitä tapahtuu ilman sitä?

## Reittien luominen

Kun puhumme verkkosovelluksesta, kutsumme *reititykseksi* tarkoitusta yhdistää **URL-osoitteet** tiettyihin näyttöihin, jotka pitäisi näyttää. Verkkosivustolla, jossa on useita HTML-tiedostoja, tämä tapahtuu automaattisesti, koska tiedostopolut heijastuvat URL-osoitteeseen. Esimerkiksi, jos projektikansiossasi on nämä tiedostot:

```
mywebsite/index.html
mywebsite/login.html
mywebsite/admin/index.html
```

Jos luot verkkopalvelimen, jonka juurena on `mywebsite`, URL-reititys on:

```
https://site.com            --> mywebsite/index.html
https://site.com/login.html --> mywebsite/login.html
https://site.com/admin/     --> mywebsite/admin/index.html
```

Kuitenkin verkkosovelluksessamme käytämme yhtä HTML-tiedostoa, joka sisältää kaikki näytöt, joten tämä oletuskäyttäytyminen ei auta meitä. Meidän täytyy luoda tämä kartta manuaalisesti ja päivittää näytettävä malli JavaScriptin avulla.

### Tehtävä

Käytämme yksinkertaista objektia toteuttaaksemme [kartan](https://en.wikipedia.org/wiki/Associative_array) URL-polkujen ja malliemme välillä. Lisää tämä objekti `app.js`-tiedoston alkuun.

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard' },
};
```

Muokataan nyt hieman `updateRoute`-funktiota. Sen sijaan, että välittäisimme suoraan `templateId`-argumentin, haluamme hakea sen ensin nykyisestä URL-osoitteesta ja käyttää sitten karttaamme saadaksemme vastaavan mallin `id`-arvon. Voimme käyttää [`window.location.pathname`](https://developer.mozilla.org/docs/Web/API/Location/pathname) saadaksemme vain polkuosan URL-osoitteesta.

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

Tässä kartoitimme määritetyt reitit vastaaviin malleihin. Voit kokeilla, että tämä toimii oikein muuttamalla URL-osoitetta selaimessasi.

✅ Mitä tapahtuu, jos syötät tuntemattoman polun URL-osoitteeseen? Miten voisimme ratkaista tämän?

## Navigoinnin lisääminen

Sovelluksemme seuraava askel on lisätä mahdollisuus navigoida sivujen välillä ilman, että URL-osoitetta täytyy muuttaa manuaalisesti. Tämä tarkoittaa kahta asiaa:

1. Päivitetään nykyinen URL-osoite
2. Päivitetään näytettävä malli uuden URL-osoitteen perusteella

Olemme jo huolehtineet toisesta osasta `updateRoute`-funktiolla, joten meidän täytyy selvittää, miten päivittää nykyinen URL-osoite.

Meidän täytyy käyttää JavaScriptiä ja tarkemmin [`history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState), joka mahdollistaa URL-osoitteen päivittämisen ja uuden merkinnän luomisen selaimen historiassa ilman HTML:n uudelleenlatausta.

> Huomio: Vaikka HTML:n ankkurielementti [`<a href>`](https://developer.mozilla.org/docs/Web/HTML/Element/a) voidaan käyttää itsenäisesti hyperlinkkien luomiseen eri URL-osoitteisiin, se lataa HTML:n uudelleen oletuksena. Tämä käyttäytyminen täytyy estää, kun käsitellään reititystä mukautetulla JavaScriptillä, käyttämällä preventDefault()-funktiota klikkaustapahtumassa.

### Tehtävä

Luodaan uusi funktio, jota voimme käyttää navigointiin sovelluksessamme:

```js
function navigate(path) {
  window.history.pushState({}, path, path);
  updateRoute();
}
```

Tämä metodi päivittää ensin nykyisen URL-osoitteen annetun polun perusteella, sitten päivittää mallin. Ominaisuus `window.location.origin` palauttaa URL-juuren, mikä mahdollistaa täydellisen URL-osoitteen rakentamisen annetusta polusta.

Nyt kun meillä on tämä funktio, voimme huolehtia ongelmasta, joka meillä on, jos polku ei vastaa mitään määritettyä reittiä. Muokkaamme `updateRoute`-funktiota lisäämällä varasuunnitelman yhteen olemassa olevista reiteistä, jos emme löydä vastaavuutta.

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
    return navigate('/login');
  }

  ...
```

Jos reittiä ei löydy, ohjaamme nyt `login`-sivulle.

Luodaan nyt funktio, joka hakee URL-osoitteen, kun linkkiä klikataan, ja estää selaimen oletuslinkkikäyttäytymisen:

```js
function onLinkClick(event) {
  event.preventDefault();
  navigate(event.target.href);
}
```

Viimeistellään navigointijärjestelmä lisäämällä sidonnat HTML:n *Login*- ja *Logout*-linkkeihin.

```html
<a href="/dashboard" onclick="onLinkClick(event)">Login</a>
...
<a href="/login" onclick="onLinkClick(event)">Logout</a>
```

Yllä oleva `event`-objekti tallentaa `click`-tapahtuman ja välittää sen `onLinkClick`-funktiollemme.

Käyttämällä [`onclick`](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick)-attribuuttia sidotaan `click`-tapahtuma JavaScript-koodiin, tässä `navigate()`-funktion kutsuun.

Kokeile klikkaamalla näitä linkkejä, sinun pitäisi nyt pystyä navigoimaan sovelluksesi eri näyttöjen välillä.

✅ `history.pushState`-metodi on osa HTML5-standardia ja toteutettu [kaikissa moderneissa selaimissa](https://caniuse.com/?search=pushState). Jos rakennat verkkosovellusta vanhemmille selaimille, voit käyttää tämän API:n sijasta kikkaa: käyttämällä [hash-merkkiä (`#`)](https://en.wikipedia.org/wiki/URI_fragment) ennen polkua voit toteuttaa reitityksen, joka toimii tavallisella ankkurinavigoinnilla eikä lataa sivua uudelleen, koska sen tarkoitus oli luoda sisäisiä linkkejä sivun sisällä.

## Selaimen takaisin- ja eteenpäin-painikkeiden käsittely

`history.pushState`-käyttö luo uusia merkintöjä selaimen navigointihistoriaan. Voit tarkistaa tämän pitämällä selaimesi *takaisin-painiketta* painettuna, sen pitäisi näyttää jotain tällaista:

![Navigointihistorian kuvakaappaus](../../../../translated_images/history.7fdabbafa521e06455b738d3dafa3ff41d3071deae60ead8c7e0844b9ed987d8.fi.png)

Jos yrität klikata takaisin-painiketta muutaman kerran, näet, että nykyinen URL-osoite muuttuu ja historia päivittyy, mutta sama malli pysyy näytettynä.

Tämä johtuu siitä, että sovellus ei tiedä, että meidän täytyy kutsua `updateRoute()` joka kerta, kun historia muuttuu. Jos katsot [`history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState)-dokumentaatiota, näet, että jos tila muuttuu - eli siirryimme eri URL-osoitteeseen - [`popstate`](https://developer.mozilla.org/docs/Web/API/Window/popstate_event)-tapahtuma laukaistaan. Käytämme tätä korjataksemme ongelman.

### Tehtävä

Varmistaaksemme, että näytettävä malli päivitetään, kun selaimen historia muuttuu, liitämme uuden funktion, joka kutsuu `updateRoute()`. Teemme tämän `app.js`-tiedoston lopussa:

```js
window.onpopstate = () => updateRoute();
updateRoute();
```

> Huomio: Käytimme [nuolifunktiota](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions) tässä `popstate`-tapahtumankäsittelijän määrittämiseen lyhyyden vuoksi, mutta tavallinen funktio toimisi samalla tavalla.

Tässä on kertausvideo nuolifunktioista:

[![Nuolifunktiot](https://img.youtube.com/vi/OP6eEbOj2sc/0.jpg)](https://youtube.com/watch?v=OP6eEbOj2sc "Nuolifunktiot")

> 🎥 Klikkaa yllä olevaa kuvaa katsoaksesi videon nuolifunktioista.

Kokeile nyt selaimesi takaisin- ja eteenpäin-painikkeita ja tarkista, että näytettävä reitti päivittyy oikein tällä kertaa.

---

## 🚀 Haaste

Lisää uusi malli ja reitti kolmannelle sivulle, joka näyttää tämän sovelluksen tekijätiedot.

## Jälkikysely

[Jälkikysely](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/42)

## Kertaus ja itseopiskelu

Reititys on yksi yllättävän hankalista osista verkkokehityksessä, erityisesti kun verkkosivut siirtyvät sivun uudelleenlatauskäyttäytymisestä yhden sivun sovellusten sivun päivityksiin. Lue hieman [miten Azure Static Web App -palvelu](https://docs.microsoft.com/azure/static-web-apps/routes/?WT.mc_id=academic-77807-sagibbon) käsittelee reititystä. Voitko selittää, miksi jotkut dokumentissa kuvatut päätökset ovat välttämättömiä?

## Tehtävä

[Paranna reititystä](assignment.md)

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa tämän käännöksen käytöstä johtuvista väärinkäsityksistä tai virhetulkinnoista.