<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8a07db14e75ac62f013b7de5df05981d",
  "translation_date": "2025-08-29T00:37:43+00:00",
  "source_file": "7-bank-project/1-template-route/README.md",
  "language_code": "fi"
}
-->
# Rakenna pankkisovellus Osa 1: HTML-mallit ja reitit verkkosovelluksessa

## Ennakkokysely

[Ennakkokysely](https://ff-quizzes.netlify.app/web/quiz/41)

### Johdanto

JavaScriptin tulon myötä selaimiin verkkosivustoista on tullut entistä vuorovaikutteisempia ja monimutkaisempia. Verkkoteknologioita käytetään nykyään yleisesti täysin toimivien sovellusten luomiseen, jotka toimivat suoraan selaimessa. Näitä kutsutaan [verkkosovelluksiksi](https://en.wikipedia.org/wiki/Web_application). Koska verkkosovellukset ovat erittäin vuorovaikutteisia, käyttäjät eivät halua odottaa koko sivun uudelleenlatausta jokaisen toiminnon yhteydessä. Siksi JavaScriptiä käytetään päivittämään HTML suoraan DOM:n avulla, jotta käyttäjäkokemus olisi sujuvampi.

Tässä oppitunnissa luomme perustan pankkisovelluksen rakentamiselle käyttämällä HTML-malleja useiden näyttöjen luomiseen, joita voidaan näyttää ja päivittää ilman koko HTML-sivun uudelleenlatausta.

### Esitiedot

Tarvitset paikallisen verkkopalvelimen testataksesi verkkosovellusta, jonka rakennamme tällä oppitunnilla. Jos sinulla ei ole sellaista, voit asentaa [Node.js:n](https://nodejs.org) ja käyttää komentoa `npx lite-server` projektikansiostasi. Tämä luo paikallisen verkkopalvelimen ja avaa sovelluksesi selaimessa.

### Valmistelu

Luo tietokoneellesi kansio nimeltä `bank` ja sen sisälle tiedosto nimeltä `index.html`. Aloitamme tästä HTML-[pohjasta](https://en.wikipedia.org/wiki/Boilerplate_code):

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

Jos haluat luoda verkkosivulle useita näyttöjä, yksi ratkaisu olisi luoda yksi HTML-tiedosto jokaiselle näytölle. Tämä ratkaisu tuo kuitenkin mukanaan joitakin haittoja:

- Koko HTML täytyy ladata uudelleen näytön vaihtuessa, mikä voi olla hidasta.
- Tietojen jakaminen eri näyttöjen välillä on vaikeaa.

Toinen lähestymistapa on käyttää vain yhtä HTML-tiedostoa ja määritellä useita [HTML-malleja](https://developer.mozilla.org/docs/Web/HTML/Element/template) `<template>`-elementin avulla. Malli on uudelleenkäytettävä HTML-lohko, jota selain ei näytä, ja se täytyy ottaa käyttöön ajonaikaisesti JavaScriptin avulla.

### Tehtävä

Luomme pankkisovelluksen, jossa on kaksi näyttöä: kirjautumissivu ja hallintapaneeli. Aloitetaan lisäämällä HTML-runkoon paikkamerkki, jota käytämme sovelluksemme eri näyttöjen näyttämiseen:

```html
<div id="app">Loading...</div>
```

Annamme sille `id`-tunnisteen, jotta se on helpompi löytää JavaScriptillä myöhemmin.

> Vinkki: Koska tämän elementin sisältö korvataan, voimme laittaa siihen latausviestin tai -indikaattorin, joka näkyy sovelluksen latautuessa.

Seuraavaksi lisätään HTML-malli kirjautumissivulle. Toistaiseksi laitamme siihen vain otsikon ja osion, joka sisältää linkin navigointia varten.

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <a href="/dashboard">Login</a>
  </section>
</template>
```

Lisätään sitten toinen HTML-malli hallintapaneelisivulle. Tämä sivu sisältää eri osioita:

- Otsikko, jossa on otsikko ja uloskirjautumislinkki
- Pankkitilin nykyinen saldo
- Tapahtumaluettelo, joka näytetään taulukossa

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

> Vinkki: Kun luot HTML-malleja, jos haluat nähdä, miltä ne näyttävät, voit kommentoida `<template>`- ja `</template>`-rivien ympärille `<!-- -->`.

✅ Miksi luulet, että käytämme `id`-attribuutteja malleissa? Voisimmeko käyttää jotain muuta, kuten luokkia?

## Mallien näyttäminen JavaScriptillä

Jos kokeilet nykyistä HTML-tiedostoasi selaimessa, huomaat, että se jää näyttämään `Loading...`. Tämä johtuu siitä, että meidän täytyy lisätä JavaScript-koodia mallien käyttöönottoon ja näyttämiseen.

Mallin käyttöönotto tehdään yleensä kolmessa vaiheessa:

1. Haetaan mallielementti DOM:sta, esimerkiksi käyttämällä [`document.getElementById`](https://developer.mozilla.org/docs/Web/API/Document/getElementById).
2. Kopioidaan mallielementti käyttämällä [`cloneNode`](https://developer.mozilla.org/docs/Web/API/Node/cloneNode).
3. Liitetään se DOM:iin näkyvän elementin alle, esimerkiksi käyttämällä [`appendChild`](https://developer.mozilla.org/docs/Web/API/Node/appendChild).

✅ Miksi meidän täytyy kopioida malli ennen sen liittämistä DOM:iin? Mitä luulet tapahtuvan, jos ohitamme tämän vaiheen?

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

Tässä teemme juuri yllä kuvatut kolme vaihetta. Otamme käyttöön mallin, jonka `id` on `templateId`, ja laitamme sen kopioidun sisällön sovelluksemme paikkamerkkiin. Huomaa, että meidän täytyy käyttää `cloneNode(true)` kopioidaksemme koko mallin alipuusto.

Kutsu nyt tätä funktiota yhdellä mallilla ja katso tulosta.

```js
updateRoute('login');
```

✅ Mikä on tämän koodin `app.innerHTML = '';` tarkoitus? Mitä tapahtuu ilman sitä?

## Reittien luominen

Kun puhumme verkkosovelluksesta, kutsumme *reititykseksi* tarkoitusta yhdistää **URL-osoitteet** tiettyihin näyttöihin, jotka pitäisi näyttää. Verkkosivustolla, jossa on useita HTML-tiedostoja, tämä tapahtuu automaattisesti, koska tiedostopolut heijastuvat URL-osoitteeseen. Esimerkiksi, jos projektikansiossasi on nämä tiedostot:

```
mywebsite/index.html
mywebsite/login.html
mywebsite/admin/index.html
```

Jos luot verkkopalvelimen, jonka juurena on `mywebsite`, URL-yhdistykset ovat:

```
https://site.com            --> mywebsite/index.html
https://site.com/login.html --> mywebsite/login.html
https://site.com/admin/     --> mywebsite/admin/index.html
```

Kuitenkin verkkosovelluksessamme käytämme yhtä HTML-tiedostoa, joka sisältää kaikki näytöt, joten tämä oletuskäyttäytyminen ei auta meitä. Meidän täytyy luoda tämä kartta manuaalisesti ja päivittää näytettävä malli JavaScriptin avulla.

### Tehtävä

Käytämme yksinkertaista objektia toteuttamaan [kartan](https://en.wikipedia.org/wiki/Associative_array) URL-polkujen ja malliemme välillä. Lisää tämä objekti `app.js`-tiedostosi alkuun.

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard' },
};
```

Muokataan nyt hieman `updateRoute`-funktiota. Sen sijaan, että välittäisimme suoraan `templateId`:n argumenttina, haluamme hakea sen ensin nykyisestä URL-osoitteesta ja käyttää sitten karttaamme saadaksemme vastaavan mallin `id`:n arvon. Voimme käyttää [`window.location.pathname`](https://developer.mozilla.org/docs/Web/API/Location/pathname) saadaksemme vain polkuosan URL-osoitteesta.

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

Tässä yhdistimme määritellyt reitit vastaaviin malleihin. Voit kokeilla, että tämä toimii oikein, muuttamalla URL-osoitetta selaimessasi manuaalisesti.

✅ Mitä tapahtuu, jos syötät tuntemattoman polun URL-osoitteeseen? Kuinka voisimme ratkaista tämän?

## Navigoinnin lisääminen

Seuraava askel sovelluksessamme on lisätä mahdollisuus navigoida sivujen välillä ilman, että URL-osoitetta tarvitsee muuttaa manuaalisesti. Tämä tarkoittaa kahta asiaa:

1. Päivitetään nykyinen URL-osoite
2. Päivitetään näytettävä malli uuden URL-osoitteen perusteella

Olemme jo huolehtineet toisesta osasta `updateRoute`-funktion avulla, joten meidän täytyy selvittää, kuinka päivittää nykyinen URL-osoite.

Meidän täytyy käyttää JavaScriptiä ja tarkemmin sanottuna [`history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState), joka mahdollistaa URL-osoitteen päivittämisen ja uuden merkinnän luomisen selaushistoriaan ilman HTML:n uudelleenlatausta.

> Huom: Vaikka HTML-ankkurielementti [`<a href>`](https://developer.mozilla.org/docs/Web/HTML/Element/a) voidaan käyttää itsenäisesti luomaan hyperlinkkejä eri URL-osoitteisiin, se lataa oletuksena HTML:n uudelleen. Tämä käyttäytyminen täytyy estää, kun käsittelemme reititystä mukautetulla JavaScriptillä, käyttämällä `preventDefault()`-funktiota klikkaustapahtumassa.

### Tehtävä

Luodaan uusi funktio, jota voimme käyttää navigointiin sovelluksessamme:

```js
function navigate(path) {
  window.history.pushState({}, path, path);
  updateRoute();
}
```

Tämä metodi päivittää ensin nykyisen URL-osoitteen annetun polun perusteella ja sitten päivittää mallin. Ominaisuus `window.location.origin` palauttaa URL-osoitteen juuren, mikä mahdollistaa täydellisen URL-osoitteen uudelleenrakentamisen annetusta polusta.

Nyt kun meillä on tämä funktio, voimme huolehtia ongelmasta, joka ilmenee, jos polku ei vastaa mitään määriteltyä reittiä. Muokkaamme `updateRoute`-funktiota lisäämällä varasuunnitelman yhteen olemassa olevista reiteistä, jos emme löydä vastaavuutta.

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

Käyttämällä [`onclick`](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick)-attribuuttia sidomme `click`-tapahtuman JavaScript-koodiin, tässä tapauksessa `navigate()`-funktion kutsuun.

Kokeile klikata näitä linkkejä, sinun pitäisi nyt pystyä navigoimaan sovelluksesi eri näyttöjen välillä.

✅ `history.pushState`-metodi on osa HTML5-standardia ja toteutettu [kaikissa moderneissa selaimissa](https://caniuse.com/?search=pushState). Jos rakennat verkkosovellusta vanhemmille selaimille, voit käyttää tämän API:n sijasta kikkaa: käyttämällä [hash-merkkiä (`#`)](https://en.wikipedia.org/wiki/URI_fragment) ennen polkua voit toteuttaa reitityksen, joka toimii tavallisella ankkurinavigoinnilla eikä lataa sivua uudelleen, sillä sen tarkoitus oli luoda sisäisiä linkkejä sivun sisällä.

## Selaimen takaisin- ja eteenpäin-painikkeiden käsittely

`history.pushState` luo uusia merkintöjä selaimen navigointihistoriaan. Voit tarkistaa tämän pitämällä selaimen *takaisin-painiketta* painettuna, jolloin sen pitäisi näyttää jotain tällaista:

![Navigointihistorian kuvakaappaus](../../../../translated_images/history.7fdabbafa521e06455b738d3dafa3ff41d3071deae60ead8c7e0844b9ed987d8.fi.png)

Jos yrität klikata takaisin-painiketta muutaman kerran, huomaat, että nykyinen URL-osoite muuttuu ja historia päivittyy, mutta sama malli pysyy näytöllä.

Tämä johtuu siitä, että sovellus ei tiedä, että meidän täytyy kutsua `updateRoute()` aina, kun historia muuttuu. Jos katsot [`history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState)-dokumentaatiota, huomaat, että jos tila muuttuu - eli siirrymme eri URL-osoitteeseen - [`popstate`](https://developer.mozilla.org/docs/Web/API/Window/popstate_event)-tapahtuma laukaistaan. Käytämme tätä ongelman korjaamiseen.

### Tehtävä

Jotta varmistamme, että näytettävä malli päivittyy, kun selaimen historia muuttuu, liitämme uuden funktion, joka kutsuu `updateRoute()`. Teemme tämän `app.js`-tiedoston lopussa:

```js
window.onpopstate = () => updateRoute();
updateRoute();
```

> Huom: Käytimme tässä [nuolifunktiota](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions) määrittämään `popstate`-tapahtumakäsittelijämme tiiviisti, mutta tavallinen funktio toimisi samalla tavalla.

Tässä on kertausvideo nuolifunktioista:

[![Nuolifunktiot](https://img.youtube.com/vi/OP6eEbOj2sc/0.jpg)](https://youtube.com/watch?v=OP6eEbOj2sc "Nuolifunktiot")

> 🎥 Klikkaa yllä olevaa kuvaa katsoaksesi videon nuolifunktioista.

Kokeile nyt käyttää selaimen takaisin- ja eteenpäin-painikkeita ja tarkista, että näytettävä reitti päivittyy oikein tällä kertaa.

---

## 🚀 Haaste

Lisää uusi malli ja reitti kolmannelle sivulle, joka näyttää tämän sovelluksen tekijätiedot.

## Jälkikysely

[Jälkikysely](https://ff-quizzes.netlify.app/web/quiz/42)

## Kertaus ja itseopiskelu

Reititys on yksi yllättävän haastavista osista verkkokehityksessä, erityisesti kun verkko siirtyy sivun uudelleenlatauskäyttäytymisestä yhden sivun sovellusten päivityksiin. Lue hieman siitä, [kuinka Azure Static Web App -palvelu](https://docs.microsoft.com/azure/static-web-apps/routes/?WT.mc_id=academic-77807-sagibbon) käsittelee reititystä. Voitko selittää, miksi jotkin kyseisessä dokumentissa kuvatut päätökset ovat tarpeellisia?

## Tehtävä

[Paranna reititystä](assignment.md)

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.