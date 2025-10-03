<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b46acf79da8550d76445eed00b06c878",
  "translation_date": "2025-10-03T13:06:19+00:00",
  "source_file": "7-bank-project/4-state-management/README.md",
  "language_code": "fi"
}
-->
# Rakenna pankkisovellus, osa 4: Tilanhallinnan periaatteet

## Ennakkokysely

[Ennakkokysely](https://ff-quizzes.netlify.app/web/quiz/47)

### Johdanto

Kun verkkosovellus kasvaa, datavirtojen hallinnasta tulee haastavaa. Mikä koodi hakee tiedot, mikä sivu käyttää niitä, missä ja milloin niitä pitää päivittää... On helppo päätyä sekavaan koodiin, jota on vaikea ylläpitää. Tämä on erityisen totta, kun tietoja pitää jakaa sovelluksen eri sivujen välillä, esimerkiksi käyttäjätietoja. *Tilanhallinnan* käsite on aina ollut olemassa kaikenlaisissa ohjelmissa, mutta verkkosovellusten monimutkaistuessa siitä on tullut kehityksen keskeinen osa.

Tässä viimeisessä osassa tarkastelemme rakentamaamme sovellusta uudelleen ja mietimme, miten tilaa hallitaan, jotta voimme tukea selaimen päivityksiä missä tahansa vaiheessa ja säilyttää tiedot käyttäjäistuntojen välillä.

### Esitiedot

Sinun tulee olla suorittanut verkkosovelluksen [datan hakemisen](../3-data/README.md) osio ennen tämän oppitunnin aloittamista. Sinun tulee myös asentaa [Node.js](https://nodejs.org) ja [ajaa palvelin-API](../api/README.md) paikallisesti, jotta voit hallita tilitietoja.

Voit testata, että palvelin toimii oikein suorittamalla tämän komennon terminaalissa:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## Tilanhallinnan uudelleenarviointi

Edellisessä [oppitunnissa](../3-data/README.md) esittelimme sovelluksessamme tilan peruskäsitteen globaalin `account`-muuttujan avulla, joka sisältää kirjautuneen käyttäjän pankkitiedot. Nykyisessä toteutuksessamme on kuitenkin joitakin puutteita. Kokeile päivittää sivu, kun olet hallintapaneelissa. Mitä tapahtuu?

Nykyisessä koodissa on kolme ongelmaa:

- Tila ei säily, sillä selaimen päivitys vie sinut takaisin kirjautumissivulle.
- On useita funktioita, jotka muuttavat tilaa. Sovelluksen kasvaessa tämä voi tehdä muutosten seuraamisesta vaikeaa, ja päivityksiä voi helposti unohtua.
- Tila ei tyhjene, joten kun napsautat *Kirjaudu ulos*, tilitiedot ovat edelleen olemassa, vaikka olet kirjautumissivulla.

Voisimme päivittää koodiamme ratkaistaksemme nämä ongelmat yksi kerrallaan, mutta se lisäisi koodin toistoa ja tekisi sovelluksesta monimutkaisemman ja vaikeammin ylläpidettävän. Tai voisimme pysähtyä hetkeksi ja miettiä strategiaamme uudelleen.

> Mitä ongelmia yritämme oikeastaan ratkaista?

[Tilanhallinta](https://en.wikipedia.org/wiki/State_management) tarkoittaa hyvän lähestymistavan löytämistä näiden kahden erityisen ongelman ratkaisemiseksi:

- Kuinka pitää sovelluksen datavirrat ymmärrettävinä?
- Kuinka pitää tiladata aina synkronoituna käyttöliittymän kanssa (ja päinvastoin)?

Kun nämä asiat on hoidettu, muut mahdolliset ongelmat saattavat joko ratketa itsestään tai tulla helpommin ratkaistaviksi. Näiden ongelmien ratkaisemiseksi on monia mahdollisia lähestymistapoja, mutta valitsemme yleisen ratkaisun, joka koostuu **datan ja sen muuttamistapojen keskittämisestä**. Datavirrat kulkisivat seuraavasti:

![Kaavio, joka näyttää datavirrat HTML:n, käyttäjän toimien ja tilan välillä](../../../../translated_images/data-flow.fa2354e0908fecc89b488010dedf4871418a992edffa17e73441d257add18da4.fi.png)

> Emme käsittele tässä osassa sitä, miten data automaattisesti päivittää näkymän, sillä se liittyy edistyneempiin [reaktiivisen ohjelmoinnin](https://en.wikipedia.org/wiki/Reactive_programming) käsitteisiin. Tämä on hyvä jatkoaihe, jos haluat syventyä aiheeseen.

✅ Markkinoilla on paljon kirjastoja, joilla on erilaisia lähestymistapoja tilanhallintaan, esimerkiksi [Redux](https://redux.js.org), joka on suosittu vaihtoehto. Tutustu sen käsitteisiin ja malleihin, sillä ne tarjoavat usein hyvän tavan oppia, millaisia ongelmia saatat kohdata suurissa verkkosovelluksissa ja miten ne voidaan ratkaista.

### Tehtävä

Aloitamme pienellä refaktoroinnilla. Korvaa `account`-määrittely:

```js
let account = null;
```

Seuraavalla:

```js
let state = {
  account: null
};
```

Ajatuksena on *keskittää* kaikki sovelluksemme data yhteen tilaobjektiin. Meillä on toistaiseksi vain `account` tilassa, joten tämä ei muuta paljoa, mutta luo pohjan tuleville kehityksille.

Meidän on myös päivitettävä sitä käyttävät funktiot. `register()`- ja `login()`-funktioissa korvaa `account = ...` seuraavalla: `state.account = ...`;

Lisää `updateDashboard()`-funktion alkuun tämä rivi:

```js
const account = state.account;
```

Tämä refaktorointi itsessään ei tuonut suuria parannuksia, mutta sen tarkoituksena oli luoda perusta seuraaville muutoksille.

## Datan muutosten seuraaminen

Nyt kun olemme ottaneet käyttöön `state`-objektin datan tallentamista varten, seuraava askel on keskittää päivitykset. Tavoitteena on helpottaa muutosten ja niiden ajankohdan seuraamista.

Jotta `state`-objektia ei voitaisi muuttaa suoraan, on myös hyvä käytäntö pitää se [*muuttumattomana*](https://en.wikipedia.org/wiki/Immutable_object), mikä tarkoittaa, että sitä ei voi muokata lainkaan. Tämä tarkoittaa myös, että sinun on luotava uusi tilaobjekti, jos haluat muuttaa jotain siinä. Näin rakennat suojan mahdollisia ei-toivottuja [sivuvaikutuksia](https://en.wikipedia.org/wiki/Side_effect_(computer_science)) vastaan ja avaat mahdollisuuksia uusille ominaisuuksille, kuten kumoa/tee uudelleen -toiminnon toteuttamiselle, samalla kun helpotat virheiden jäljittämistä. Esimerkiksi voit kirjata kaikki tilaan tehdyt muutokset ja pitää niistä historian ymmärtääksesi virheen lähteen.

JavaScriptissä voit käyttää [`Object.freeze()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)-metodia luodaksesi muuttumattoman version objektista. Jos yrität tehdä muutoksia muuttumattomaan objektiin, syntyy poikkeus.

✅ Tiedätkö eron *pintapuolisen* ja *syvän* muuttumattoman objektin välillä? Voit lukea siitä lisää [täältä](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#What_is_shallow_freeze).

### Tehtävä

Luodaan uusi `updateState()`-funktio:

```js
function updateState(property, newData) {
  state = Object.freeze({
    ...state,
    [property]: newData
  });
}
```

Tässä funktiossa luomme uuden tilaobjektin ja kopioimme tiedot edellisestä tilasta käyttämällä [*spread-operaattoria (`...`)*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals). Sitten ylikirjoitamme tietyn tilaobjektin ominaisuuden uusilla tiedoilla käyttämällä [sulkunotaatiota](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties) `[property]` määrittelyyn. Lopuksi lukitsemme objektin estääksemme muutokset käyttämällä `Object.freeze()`-metodia. Tällä hetkellä meillä on vain `account`-ominaisuus tallennettuna tilaan, mutta tällä lähestymistavalla voit lisätä niin monta ominaisuutta kuin tarvitset.

Päivitämme myös `state`-alkuinitoinnin varmistaaksemme, että alkuperäinen tila on myös jäädytetty:

```js
let state = Object.freeze({
  account: null
});
```

Tämän jälkeen päivitä `register`-funktio korvaamalla `state.account = result;` seuraavalla:

```js
updateState('account', result);
```

Tee sama `login`-funktion kanssa, korvaamalla `state.account = data;` seuraavalla:

```js
updateState('account', data);
```

Korjataan samalla tilitietojen säilymättömyys, kun käyttäjä napsauttaa *Kirjaudu ulos*.

Luo uusi funktio `logout()`:

```js
function logout() {
  updateState('account', null);
  navigate('/login');
}
```

Korvaa `updateDashboard()`-funktiossa uudelleenohjaus `return navigate('/login');` seuraavalla: `return logout();`

Kokeile rekisteröidä uusi tili, kirjautua ulos ja takaisin sisään varmistaaksesi, että kaikki toimii oikein.

> Vinkki: Voit tarkastella kaikkia tilan muutoksia lisäämällä `console.log(state)` `updateState()`-funktion loppuun ja avaamalla selaimen kehitystyökalujen konsolin.

## Tilan säilyttäminen

Useimmat verkkosovellukset tarvitsevat datan säilyttämistä toimiakseen oikein. Kaikki kriittiset tiedot tallennetaan yleensä tietokantaan ja niitä käytetään palvelin-API:n kautta, kuten käyttäjätilitietoja meidän tapauksessamme. Joskus on kuitenkin hyödyllistä säilyttää joitakin tietoja selaimessa toimivassa asiakassovelluksessa paremman käyttökokemuksen tai latausnopeuden parantamiseksi.

Kun haluat säilyttää tietoja selaimessasi, sinun tulisi kysyä itseltäsi muutamia tärkeitä kysymyksiä:

- *Ovatko tiedot arkaluonteisia?* Sinun tulisi välttää arkaluonteisten tietojen, kuten käyttäjäsalasanojen, tallentamista asiakassovellukseen.
- *Kuinka kauan tarvitset näitä tietoja?* Aiotko käyttää näitä tietoja vain nykyisen istunnon ajan vai haluatko niiden säilyvän ikuisesti?

Tietojen tallentamiseen verkkosovelluksessa on useita tapoja, riippuen siitä, mitä haluat saavuttaa. Esimerkiksi voit käyttää URL-osoitteita tallentaaksesi hakukyselyn ja tehdäksesi sen jaettavaksi käyttäjien kesken. Voit myös käyttää [HTTP-evästeitä](https://developer.mozilla.org/docs/Web/HTTP/Cookies), jos tiedot täytyy jakaa palvelimen kanssa, kuten [todennustiedot](https://en.wikipedia.org/wiki/Authentication).

Toinen vaihtoehto on käyttää jotakin selaimen monista API:sta tietojen tallentamiseen. Kaksi niistä on erityisen kiinnostavia:

- [`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage): [Avain/Arvo-tietokanta](https://en.wikipedia.org/wiki/Key%E2%80%93value_database), joka mahdollistaa tietojen säilyttämisen tietyn verkkosivuston osalta eri istuntojen välillä. Tallennetut tiedot eivät koskaan vanhene.
- [`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage): Tämä toimii samalla tavalla kuin `localStorage`, paitsi että tallennetut tiedot poistetaan, kun istunto päättyy (kun selain suljetaan).

Huomaa, että molemmat näistä API:sta sallivat vain [merkkijonojen](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) tallentamisen. Jos haluat tallentaa monimutkaisia objekteja, sinun täytyy sarjoittaa ne [JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON)-muotoon käyttämällä [`JSON.stringify()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)-metodia.

✅ Jos haluat luoda verkkosovelluksen, joka ei toimi palvelimen kanssa, on myös mahdollista luoda tietokanta asiakassovellukseen käyttämällä [`IndexedDB` API:ta](https://developer.mozilla.org/docs/Web/API/IndexedDB_API). Tämä on varattu edistyneempiin käyttötapauksiin tai jos sinun täytyy tallentaa merkittävä määrä tietoa, sillä sen käyttö on monimutkaisempaa.

### Tehtävä

Haluamme, että käyttäjät pysyvät kirjautuneina, kunnes he nimenomaisesti napsauttavat *Kirjaudu ulos* -painiketta, joten käytämme `localStorage`-ominaisuutta tilitietojen tallentamiseen. Määritellään ensin avain, jota käytämme tietojen tallentamiseen.

```js
const storageKey = 'savedAccount';
```

Lisää sitten tämä rivi `updateState()`-funktion loppuun:

```js
localStorage.setItem(storageKey, JSON.stringify(state.account));
```

Tämän avulla käyttäjätilitiedot säilyvät ja pysyvät aina ajan tasalla, koska olemme aiemmin keskittäneet kaikki tilapäivityksemme. Tässä vaiheessa alamme hyötyä kaikista aiemmista refaktoroinneistamme 🙂.

Koska tiedot tallennetaan, meidän on myös huolehdittava niiden palauttamisesta, kun sovellus ladataan. Koska alamme saada enemmän alustuskoodia, voi olla hyvä idea luoda uusi `init`-funktio, joka sisältää myös aiemman koodimme `app.js`-tiedoston lopussa:

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

Tässä haemme tallennetut tiedot, ja jos niitä on, päivitämme tilan vastaavasti. On tärkeää tehdä tämä *ennen* reitin päivitystä, sillä sivun päivityksen aikana voi olla koodia, joka riippuu tilasta.

Voimme myös tehdä *Hallintapaneeli*-sivusta sovelluksemme oletussivun, koska nyt säilytämme tilitiedot. Jos tietoja ei löydy, hallintapaneeli huolehtii uudelleenohjauksesta *Kirjautumissivulle*. Korvaa `updateRoute()`-funktiossa oletus `return navigate('/login');` seuraavalla: `return navigate('/dashboard');`.

Kirjaudu nyt sovellukseen ja kokeile päivittää sivu. Sinun pitäisi pysyä hallintapaneelissa. Tällä päivityksellä olemme ratkaisseet kaikki alkuperäiset ongelmamme...

## Datan päivittäminen

...Mutta saatamme myös olla luoneet uuden ongelman. Oho!

Siirry hallintapaneeliin käyttäen `test`-tiliä, ja suorita sitten tämä komento terminaalissa luodaksesi uuden tapahtuman:

```sh
curl --request POST \
     --header "Content-Type: application/json" \
     --data "{ \"date\": \"2020-07-24\", \"object\": \"Bought book\", \"amount\": -20 }" \
     http://localhost:5000/api/accounts/test/transactions
```

Kokeile päivittää hallintapaneelisivusi selaimessa nyt. Mitä tapahtuu? Näetkö uuden tapahtuman?

Tila säilyy loputtomiin `localStorage`-ominaisuuden ansiosta, mutta se tarkoittaa myös, että sitä ei koskaan päivitetä, ennen kuin kirjaudut ulos sovelluksesta ja takaisin sisään!

Yksi mahdollinen strategia tämän korjaamiseksi on ladata tilitiedot uudelleen aina, kun hallintapaneeli ladataan, jotta vältetään vanhentuneet tiedot.

### Tehtävä

Luo uusi funktio `updateAccountData`:

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

Tämä metodi tarkistaa, että olemme kirjautuneena sisään, ja lataa sitten tilitiedot uudelleen palvelimelta.

Luo toinen funktio nimeltä `refresh`:

```js
async function refresh() {
  await updateAccountData();
  updateDashboard();
}
```

Tämä funktio päivittää tilitiedot ja huolehtii hallintapaneelisivun HTML:n päivittämisestä. Tätä meidän täytyy kutsua, kun hallintapaneelireitti ladataan. Päivitä reittimääritelmä seuraavasti:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};
```

Kokeile nyt päivittää hallintapaneeli, sen pitäisi näyttää päivitetyt tilitiedot.

---

## 🚀 Haaste

Nyt kun lataamme tilitiedot uudelleen aina, kun hallintapaneeli ladataan, luuletko, että meidän täytyy edelleen säilyttää *kaikki tilitiedot*?

Yrittäkää yhdessä muuttaa, mitä tallennetaan ja ladataan `localStorage`-ominaisuudesta, niin että mukana on vain se, mikä on ehdottoman välttämätöntä sovelluksen toiminnan kannalta.

## Jälkikysely
[Luennon jälkeinen kysely](https://ff-quizzes.netlify.app/web/quiz/48)

## Tehtävä

[Toteuta "Lisää tapahtuma" -valintaikkuna](assignment.md)

Tässä on esimerkkitulos tehtävän suorittamisen jälkeen:

![Kuvakaappaus, jossa näkyy esimerkki "Lisää tapahtuma" -valintaikkunasta](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.fi.png)

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa tämän käännöksen käytöstä johtuvista väärinkäsityksistä tai virhetulkinnoista.