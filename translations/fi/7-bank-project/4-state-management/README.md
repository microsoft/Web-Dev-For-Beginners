<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "32bd800759c3e943c38ad9ae6e1f51e0",
  "translation_date": "2025-10-23T00:31:20+00:00",
  "source_file": "7-bank-project/4-state-management/README.md",
  "language_code": "fi"
}
-->
# Rakenna pankkisovellus Osa 4: Tilanhallinnan periaatteet

## Ennakkokysely

[Ennakkokysely](https://ff-quizzes.netlify.app/web/quiz/47)

## Johdanto

Tilanhallinta on kuin Voyager-avaruusaluksen navigointijärjestelmä – kun kaikki toimii sujuvasti, et juuri huomaa sen olemassaoloa. Mutta kun jokin menee pieleen, se voi olla ratkaiseva ero tähtienväliseen avaruuteen pääsemisen ja kosmiseen tyhjyyteen eksymisen välillä. Verkkokehityksessä tila edustaa kaikkea, mitä sovelluksen täytyy muistaa: käyttäjän kirjautumistila, lomaketiedot, navigointihistoria ja väliaikaiset käyttöliittymän tilat.

Kun pankkisovelluksesi on kehittynyt yksinkertaisesta kirjautumislomakkeesta monimutkaisemmaksi sovellukseksi, olet todennäköisesti kohdannut joitakin yleisiä haasteita. Päivitä sivu, ja käyttäjät kirjautuvat ulos odottamatta. Sulje selain, ja kaikki edistys katoaa. Yritä korjata ongelmaa, ja huomaat etsiväsi ratkaisua useista eri funktioista, jotka kaikki muokkaavat samaa dataa eri tavoin.

Nämä eivät ole merkkejä huonosta koodauksesta – ne ovat luonnollisia kasvukipuja, jotka ilmenevät, kun sovellukset saavuttavat tietyn monimutkaisuuden tason. Jokainen kehittäjä kohtaa nämä haasteet, kun heidän sovelluksensa siirtyvät "konseptitodistuksesta" "tuotantovalmiiksi".

Tässä oppitunnissa toteutamme keskitetyn tilanhallintajärjestelmän, joka muuttaa pankkisovelluksesi luotettavaksi ja ammattimaiseksi sovellukseksi. Opit hallitsemaan datavirtoja ennustettavasti, säilyttämään käyttäjäistuntoja asianmukaisesti ja luomaan sujuvan käyttäjäkokemuksen, jota modernit verkkosovellukset vaativat.

## Esitiedot

Ennen kuin sukellat tilanhallinnan periaatteisiin, sinun on varmistettava, että kehitysympäristösi on asianmukaisesti asetettu ja pankkisovelluksesi perusta on kunnossa. Tämä oppitunti rakentuu suoraan tämän sarjan aiempien osien käsitteisiin ja koodiin.

Varmista, että sinulla on seuraavat komponentit valmiina ennen etenemistä:

**Vaadittu asennus:**
- Suorita [datan hakemisen oppitunti](../3-data/README.md) - sovelluksesi pitäisi ladata ja näyttää tilitiedot onnistuneesti
- Asenna [Node.js](https://nodejs.org) järjestelmääsi backend-API:n suorittamista varten
- Käynnistä [palvelin-API](../api/README.md) paikallisesti tilitietojen käsittelyä varten

**Ympäristön testaus:**

Varmista, että API-palvelimesi toimii oikein suorittamalla tämä komento terminaalissa:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

**Mitä tämä komento tekee:**
- **Lähettää** GET-pyynnön paikalliselle API-palvelimellesi
- **Testaa** yhteyden ja varmistaa, että palvelin vastaa
- **Palauttaa** API-version tiedot, jos kaikki toimii oikein

---

## Nykyisten tilaongelmien diagnosointi

Kuten Sherlock Holmes tutkii rikospaikkaa, meidän täytyy ymmärtää tarkalleen, mitä nykyisessä toteutuksessa tapahtuu, ennen kuin voimme ratkaista käyttäjäistuntojen katoamisen mysteerin.

Tehdään yksinkertainen kokeilu, joka paljastaa tilanhallinnan haasteet:

**🧪 Kokeile tätä diagnostiikkatestiä:**
1. Kirjaudu pankkisovellukseesi ja siirry hallintapaneeliin
2. Päivitä selaimen sivu
3. Tarkkaile, mitä tapahtuu kirjautumistilallesi

Jos sinut ohjataan takaisin kirjautumisnäyttöön, olet löytänyt klassisen tilan säilyttämisen ongelman. Tämä käyttäytyminen johtuu siitä, että nykyinen toteutuksemme tallentaa käyttäjätiedot JavaScript-muuttujiin, jotka nollautuvat jokaisen sivun latauksen yhteydessä.

**Nykyisen toteutuksen ongelmat:**

Edellisen oppitunnin yksinkertainen `account`-muuttuja aiheuttaa kolme merkittävää ongelmaa, jotka vaikuttavat sekä käyttäjäkokemukseen että koodin ylläpidettävyyteen:

| Ongelma | Tekninen syy | Vaikutus käyttäjälle |
|---------|--------|----------------|
| **Istunnon menetys** | Sivun päivitys tyhjentää JavaScript-muuttujat | Käyttäjien täytyy kirjautua usein uudelleen |
| **Hajanaiset päivitykset** | Useat funktiot muokkaavat tilaa suoraan | Virheiden korjaaminen vaikeutuu |
| **Epätäydellinen siivous** | Uloskirjautuminen ei tyhjennä kaikkia tilaviittauksia | Mahdolliset turvallisuus- ja yksityisyysongelmat |

**Arkkitehtoninen haaste:**

Kuten Titanicin osastoitu rakenne, joka vaikutti vankalta, kunnes useat osastot tulvivat samanaikaisesti, näiden ongelmien yksittäinen korjaaminen ei ratkaise taustalla olevaa arkkitehtonista ongelmaa. Tarvitsemme kattavan tilanhallintaratkaisun.

> 💡 **Mitä oikeastaan yritämme saavuttaa?**

[Tilanhallinta](https://en.wikipedia.org/wiki/State_management) tarkoittaa kahden perusongelman ratkaisemista:

1. **Missä tietoni ovat?**: Tietojen seuraaminen ja niiden alkuperän ymmärtäminen
2. **Ovatko kaikki samalla sivulla?**: Varmistaminen, että käyttäjien näkemä vastaa todellisuutta

**Suunnitelmamme:**

Sen sijaan, että juoksisimme ympyrää, luomme **keskitetyn tilanhallintajärjestelmän**. Ajattele sitä kuin yhtä todella järjestelmällistä henkilöä, joka vastaa kaikesta tärkeästä:

![Kaavio, joka näyttää datavirrat HTML:n, käyttäjän toimien ja tilan välillä](../../../../translated_images/data-flow.fa2354e0908fecc89b488010dedf4871418a992edffa17e73441d257add18da4.fi.png)

**Tämän datavirran ymmärtäminen:**
- **Keskittää** kaikki sovelluksen tilan yhteen paikkaan
- **Ohjaa** kaikki tilan muutokset hallittujen funktioiden kautta
- **Varmistaa**, että käyttöliittymä pysyy synkronoituna nykyisen tilan kanssa
- **Tarjoaa** selkeän ja ennustettavan mallin datanhallintaan

> 💡 **Ammattilaisen vinkki**: Tämä oppitunti keskittyy perusperiaatteisiin. Monimutkaisemmissa sovelluksissa kirjastot, kuten [Redux](https://redux.js.org), tarjoavat kehittyneempiä tilanhallintaominaisuuksia. Näiden ydinkäsitteiden ymmärtäminen auttaa sinua hallitsemaan mitä tahansa tilanhallintakirjastoa.

> ⚠️ **Edistynyt aihe**: Emme käsittele automaattisia käyttöliittymäpäivityksiä, jotka käynnistyvät tilan muutoksista, koska tämä liittyy [reaktiivisen ohjelmoinnin](https://en.wikipedia.org/wiki/Reactive_programming) käsitteisiin. Pidä tämä mielessä seuraavana oppimisen askeleena!

### Tehtävä: Keskitetyn tilarakenteen luominen

Aloitetaan hajanaisen tilanhallinnan muuttaminen keskitettyyn järjestelmään. Tämä ensimmäinen askel luo perustan kaikille seuraaville parannuksille.

**Vaihe 1: Luo keskitetty tilaobjekti**

Korvaa yksinkertainen `account`-määrittely:

```js
let account = null;
```

Rakenteellisella tilaobjektilla:

```js
let state = {
  account: null
};
```

**Miksi tämä muutos on tärkeä:**
- **Keskittää** kaikki sovelluksen tiedot yhteen paikkaan
- **Valmistaa** rakenteen lisäämään myöhemmin enemmän tilan ominaisuuksia
- **Luo** selkeän rajan tilan ja muiden muuttujien välille
- **Vakiinnuttaa** mallin, joka skaalautuu sovelluksen kasvaessa

**Vaihe 2: Päivitä tilan käyttömallit**

Päivitä funktiosi käyttämään uutta tilarakennetta:

**`register()` ja `login()`-funktioissa**, korvaa:
```js
account = ...
```

Tällä:
```js
state.account = ...
```

**`updateDashboard()`-funktiossa**, lisää tämä rivi alkuun:
```js
const account = state.account;
```

**Mitä nämä päivitykset saavuttavat:**
- **Säilyttävät** nykyisen toiminnallisuuden samalla kun parantavat rakennetta
- **Valmistavat** koodisi kehittyneempään tilanhallintaan
- **Luo** johdonmukaisia malleja tilatietojen käyttöön
- **Perustavat** pohjan keskitettyihin tilapäivityksiin

> 💡 **Huomio**: Tämä refaktorointi ei välittömästi ratkaise ongelmiamme, mutta se luo olennaisen perustan tuleville tehokkaille parannuksille!

## Hallittujen tilapäivitysten toteuttaminen

Kun tilamme on keskitetty, seuraava askel on luoda hallitut mekanismit datan muokkaamiseen. Tämä lähestymistapa varmistaa ennustettavat tilan muutokset ja helpottaa virheiden korjaamista.

Periaate muistuttaa lennonjohtoa: sen sijaan, että useat funktiot muokkaisivat tilaa itsenäisesti, ohjaamme kaikki muutokset yhden hallitun funktion kautta. Tämä malli tarjoaa selkeän valvonnan siitä, milloin ja miten data muuttuu.

**Muuttumaton tilanhallinta:**

Käsittelemme `state`-objektia [*muuttumattomana*](https://en.wikipedia.org/wiki/Immutable_object), mikä tarkoittaa, että emme koskaan muokkaa sitä suoraan. Sen sijaan jokainen muutos luo uuden tilaobjektin päivitettyjen tietojen kanssa.

Vaikka tämä lähestymistapa saattaa aluksi vaikuttaa tehottomalta verrattuna suoriin muokkauksiin, se tarjoaa merkittäviä etuja virheiden korjaamiseen, testaamiseen ja sovelluksen ennustettavuuden ylläpitämiseen.

**Muuttumattoman tilanhallinnan edut:**

| Etu | Kuvaus | Vaikutus |
|---------|-------------|--------|
| **Ennustettavuus** | Muutokset tapahtuvat vain hallittujen funktioiden kautta | Helpompi virheiden korjaus ja testaus |
| **Historian seuranta** | Jokainen tilan muutos luo uuden objektin | Mahdollistaa kumoamisen/tekemisen uudelleen |
| **Sivuvaikutusten ehkäisy** | Ei tahattomia muokkauksia | Estää mystisiä virheitä |
| **Suorituskyvyn optimointi** | Helppo havaita, milloin tila todella muuttui | Mahdollistaa tehokkaat käyttöliittymäpäivitykset |

**JavaScript-muuttumattomuus `Object.freeze()`-metodilla:**

JavaScript tarjoaa [`Object.freeze()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)-metodin estämään objektin muokkaukset:

```js
const immutableState = Object.freeze({ account: userData });
// Any attempt to modify immutableState will throw an error
```

**Mitä tässä tapahtuu:**
- **Estää** suorat ominaisuuksien lisäykset tai poistot
- **Heittää** poikkeuksia, jos muokkausyrityksiä tehdään
- **Varmistaa**, että tilan muutokset täytyy tehdä hallittujen funktioiden kautta
- **Luo** selkeän sopimuksen siitä, miten tilaa voidaan päivittää

> 💡 **Syväsukellus**: Lue lisää *pintapuolisten* ja *syvällisten* muuttumattomien objektien eroista [MDN-dokumentaatiosta](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#What_is_shallow_freeze). Tämän eron ymmärtäminen on tärkeää monimutkaisille tilarakenteille.

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

Tässä funktiossa luomme uuden tilaobjektin ja kopioimme tiedot edellisestä tilasta käyttämällä [*spread (`...`) -operaattoria*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals). Sitten korvaamme tietyn tilaobjektin ominaisuuden uusilla tiedoilla käyttämällä [hakasulkeiden notaatiota](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties) `[property]` määrittelyyn. Lopuksi lukitsemme objektin estääksemme muokkaukset käyttämällä `Object.freeze()`. Tällä hetkellä meillä on vain `account`-ominaisuus tallennettuna tilaan, mutta tällä lähestymistavalla voit lisätä niin monta ominaisuutta kuin tarvitset tilaan.

Päivitämme myös `state`-alkuasetuksen varmistaaksemme, että alkuperäinen tila on myös lukittu:

```js
let state = Object.freeze({
  account: null
});
```

Sen jälkeen päivitä `register`-funktio korvaamalla `state.account = result;` seuraavalla:

```js
updateState('account', result);
```

Tee sama `login`-funktiolle korvaamalla `state.account = data;` seuraavalla:

```js
updateState('account', data);
```

Käytämme nyt tilaisuutta korjataksemme ongelman, jossa tilitietoja ei tyhjennetä, kun käyttäjä napsauttaa *Kirjaudu ulos*.

Luo uusi funktio `logout()`:

```js
function logout() {
  updateState('account', null);
  navigate('/login');
}
```

`updateDashboard()`-funktiossa korvaa uudelleenohjaus `return navigate('/login');` seuraavalla: `return logout();`

Kokeile rekisteröidä uusi tili, kirjautua ulos ja takaisin sisään varmistaaksesi, että kaikki toimii edelleen oikein.

> Vinkki: voit tarkastella kaikkia tilan muutoksia lisäämällä `console.log(state)` `updateState()`-funktion loppuun ja avaamalla konsolin selaimesi kehitystyökaluissa.

## Datan säilyttämisen toteuttaminen

Aiemmin tunnistettu istunnon menetysongelma vaatii säilytysratkaisun, joka ylläpitää käyttäjätilaa selaimen istuntojen välillä. Tämä muuttaa sovelluksemme väliaikaisesta kokemuksesta luotettavaksi ja ammattimaiseksi työkaluksi.

Ajattele, kuinka atomikellot säilyttävät tarkan ajan jopa sähkökatkojen aikana tallentamalla kriittisen tilan ei-haihtuvaan muistiin. Samalla tavalla verkkosovellusten täytyy käyttää pysyviä tallennusmekanismeja säilyttääkseen olennaiset käyttäjätiedot selaimen istuntojen ja sivun päivitysten välillä.

**Strategiset kysymykset datan säilyttämiseen:**

Ennen säilytyksen toteuttamista, harkitse näitä kriittisiä tekijöitä:

| Kysymys | Pankkisovelluksen konteksti | Päätöksen vaikutus |
|----------|-------------------|----------------|
| **Ovatko tiedot arkaluonteisia?** | Tilin saldo, tapahtumahistoria | Valitse turvalliset tallennusmenetelmät |
| **Kuinka kauan niiden pitäisi säilyä?** | Kirjautumistila vs. väliaikaiset käyttöliittymäasetukset | Valitse sopiva säilytysaika |
| **Tarvitseeko palvelin niitä?** | Todennustunnukset vs. käyttöliittymäasetukset | Määritä jakamistarpeet |

**Selaimen tallennusvaihtoehdot:**

Modernit selaimet tarjoavat useita tallennusmekanismeja, jotka on suunniteltu eri käyttötarkoituksiin:

**Ensisijaiset tallennus-API:t:**

1. **[`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage)**: Pysyvä [avain/arvo-tallennus](https://en.wikipedia.org/wiki/Key%E2%80%93value_database)
   - **Säilyttää** tiedot selaimen istuntojen välillä loputtomasti  
   - **Säilyy** selaimen uudelleenkäynnistyksissä ja tietokoneen uudelleenkäynnistyksissä
   - **Rajattu** tiettyyn verkkotunnukseen
   - **Täydellinen** käyttäjäasetuksille ja kirjautumistiloille

2. **[`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage)**: Väliaikainen istuntotallennus
   - **Toimii** identtisesti localStoragen kanssa aktiivisten istuntojen aikana
   - **Tyhjentyy** automaattisesti, kun selaimen välilehti suljetaan
   - **Ihanteellinen** väliaikaisille tiedoille, jotka eivät saisi säilyä

3. **[HTTP-evästeet](https://developer.mozilla.org/docs/Web/HTTP/Cookies)**: Palvelimen jaettu tallennus
   - **Lähetetään** automaattisesti jokaisen palvelinpyynnön mukana
   - **Täydellinen** [todennustunnuksille](https://en.wikipedia.org/wiki/Authentication)
   - **Rajoitettu** kooltaan ja voi vaikuttaa suoritusky
> 💡 **Edistynyt vaihtoehto**: Jos sinulla on monimutkaisia offline-sovelluksia, joissa käsitellään suuria tietomääriä, harkitse [`IndexedDB` API:n](https://developer.mozilla.org/docs/Web/API/IndexedDB_API) käyttöä. Se tarjoaa täysimittaisen asiakaspuolen tietokannan, mutta sen toteuttaminen on monimutkaisempaa.

### Tehtävä: Toteuta localStorage-persistenssi

Toteutetaan pysyvä tallennus, jotta käyttäjät pysyvät kirjautuneina, kunnes he kirjautuvat ulos. Käytämme `localStoragea` tilitietojen tallentamiseen selaimen istuntojen välillä.

**Vaihe 1: Määritä tallennuskonfiguraatio**

```js
const storageKey = 'savedAccount';
```

**Mitä tämä vakio tarjoaa:**
- **Luo** johdonmukaisen tunnisteen tallennetuille tiedoille
- **Estää** kirjoitusvirheet tallennusavaimen viittauksissa
- **Helpottaa** tallennusavaimen muuttamista tarvittaessa
- **Noudattaa** parhaita käytäntöjä ylläpidettävän koodin osalta

**Vaihe 2: Lisää automaattinen persistenssi**

Lisää tämä rivi `updateState()`-funktion loppuun:

```js
localStorage.setItem(storageKey, JSON.stringify(state.account));
```

**Mitä tässä tapahtuu:**
- **Muuntaa** tilin objektin JSON-merkkijonoksi tallennusta varten
- **Tallentaa** tiedot käyttäen johdonmukaista tallennusavainta
- **Suorittaa** automaattisesti aina, kun tilassa tapahtuu muutoksia
- **Varmistaa**, että tallennetut tiedot ovat aina synkronoituna nykyisen tilan kanssa

> 💡 **Arkkitehtuurin etu**: Koska kaikki tilapäivitykset on keskitetty `updateState()`-funktioon, persistenssin lisääminen vaati vain yhden koodirivin. Tämä osoittaa hyvän arkkitehtuurin voiman!

**Vaihe 3: Palauta tila sovelluksen latautuessa**

Luo alustustoiminto tallennettujen tietojen palauttamiseksi:

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

**Alustuksen prosessin ymmärtäminen:**
- **Hakee** aiemmin tallennetut tilitiedot localStoragesta
- **Muuntaa** JSON-merkkijonon takaisin JavaScript-objektiksi
- **Päivittää** tilan hallitusti päivitysfunktiomme avulla
- **Palauttaa** käyttäjän istunnon automaattisesti sivun latautuessa
- **Suorittaa** ennen reittipäivityksiä, jotta tila on käytettävissä

**Vaihe 4: Optimoi oletusreitti**

Päivitä oletusreitti hyödyntämään persistenssiä:

Korvaa `updateRoute()`-funktiossa:
```js
// Replace: return navigate('/login');
return navigate('/dashboard');
```

**Miksi tämä muutos on järkevä:**
- **Hyödyntää** uutta persistenssijärjestelmää tehokkaasti
- **Mahdollistaa**, että hallintapaneeli käsittelee autentikointitarkistukset
- **Ohjaa** automaattisesti kirjautumissivulle, jos tallennettua istuntoa ei ole
- **Luo** saumattomamman käyttäjäkokemuksen

**Testaa toteutustasi:**

1. Kirjaudu sisään pankkisovellukseen
2. Päivitä selaimen sivu
3. Varmista, että pysyt kirjautuneena ja hallintapaneelissa
4. Sulje ja avaa selaimesi uudelleen
5. Siirry takaisin sovellukseen ja varmista, että olet edelleen kirjautuneena

🎉 **Saavutus avattu**: Olet onnistuneesti toteuttanut pysyvän tilanhallinnan! Sovelluksesi toimii nyt kuin ammattimainen verkkosovellus.

## Persistenssin ja tietojen tuoreuden tasapainottaminen

Persistenssijärjestelmämme ylläpitää käyttäjäistuntoja onnistuneesti, mutta tuo mukanaan uuden haasteen: tietojen vanhenemisen. Kun useat käyttäjät tai sovellukset muokkaavat samaa palvelimen dataa, paikallisesti välimuistissa olevat tiedot voivat vanhentua.

Tämä tilanne muistuttaa viikinkinavigaattoreita, jotka luottivat sekä tallennettuihin tähtikarttoihin että ajankohtaisiin taivaan havaintoihin. Kartat tarjosivat johdonmukaisuutta, mutta navigaattoreiden oli tehtävä tuoreita havaintoja muuttuvien olosuhteiden huomioimiseksi. Samoin sovelluksemme tarvitsee sekä pysyvän käyttäjätilan että ajankohtaiset palvelintiedot.

**🧪 Tietojen tuoreusongelman havaitseminen:**

1. Kirjaudu hallintapaneeliin käyttäen `test`-tiliä
2. Suorita tämä komento terminaalissa simuloidaksesi tapahtumaa toisesta lähteestä:

```sh
curl --request POST \
     --header "Content-Type: application/json" \
     --data "{ \"date\": \"2020-07-24\", \"object\": \"Bought book\", \"amount\": -20 }" \
     http://localhost:5000/api/accounts/test/transactions
```

3. Päivitä hallintapaneelin sivu selaimessa
4. Tarkista, näkyykö uusi tapahtuma

**Mitä tämä testi osoittaa:**
- **Näyttää**, kuinka localStorage voi "vanhentua" (olla epäajankohtainen)
- **Simuloi** todellisia tilanteita, joissa tietomuutoksia tapahtuu sovelluksen ulkopuolella
- **Paljastaa** jännitteen persistenssin ja tietojen tuoreuden välillä

**Tietojen vanhenemisen haaste:**

| Ongelma | Syy | Vaikutus käyttäjälle |
|---------|-----|----------------------|
| **Vanhentuneet tiedot** | localStorage ei vanhene automaattisesti | Käyttäjät näkevät vanhentuneita tietoja |
| **Palvelimen muutokset** | Muut sovellukset/käyttäjät muokkaavat samoja tietoja | Epäjohdonmukaiset näkymät eri alustoilla |
| **Välimuisti vs. todellisuus** | Paikallinen välimuisti ei vastaa palvelimen tilaa | Huono käyttäjäkokemus ja hämmennys |

**Ratkaisustrategia:**

Toteutamme "päivitä latauksessa" -mallin, joka tasapainottaa persistenssin hyödyt ja tuoreiden tietojen tarpeen. Tämä lähestymistapa säilyttää sujuvan käyttäjäkokemuksen ja varmistaa tietojen tarkkuuden.

### Tehtävä: Toteuta tietojen päivitysjärjestelmä

Luomme järjestelmän, joka hakee automaattisesti tuoreita tietoja palvelimelta samalla, kun säilytämme pysyvän tilanhallinnan edut.

**Vaihe 1: Luo tilitietojen päivittäjä**

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

**Tämän funktion logiikan ymmärtäminen:**
- **Tarkistaa**, onko käyttäjä tällä hetkellä kirjautuneena (state.account olemassa)
- **Ohjaa** uloskirjautumiseen, jos kelvollista istuntoa ei löydy
- **Hakee** tuoreet tilitiedot palvelimelta käyttäen olemassa olevaa `getAccount()`-funktiota
- **Käsittelee** palvelinvirheet sulavasti kirjautumalla ulos virheellisistä istunnoista
- **Päivittää** tilan tuoreilla tiedoilla hallitun päivitysjärjestelmän avulla
- **Käynnistää** automaattisen localStorage-persistenssin `updateState()`-funktion kautta

**Vaihe 2: Luo hallintapaneelin päivityskäsittelijä**

```js
async function refresh() {
  await updateAccountData();
  updateDashboard();
}
```

**Mitä tämä päivitysfunktio tekee:**
- **Koordinoi** tietojen päivitystä ja käyttöliittymän päivitysprosessia
- **Odottaa**, että tuoreet tiedot ladataan ennen käyttöliittymän päivittämistä
- **Varmistaa**, että hallintapaneeli näyttää ajankohtaisimmat tiedot
- **Säilyttää** selkeän erottelun tietojen hallinnan ja käyttöliittymän päivitysten välillä

**Vaihe 3: Integroi reittijärjestelmään**

Päivitä reittikonfiguraatiosi käynnistämään päivitys automaattisesti:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};
```

**Miten tämä integrointi toimii:**
- **Suorittaa** päivitysfunktio aina, kun hallintapaneelin reitti latautuu
- **Varmistaa**, että tuoreet tiedot näytetään aina, kun käyttäjät siirtyvät hallintapaneeliin
- **Säilyttää** olemassa olevan reittirakenteen samalla kun lisää tietojen tuoreuden
- **Tarjoaa** johdonmukaisen mallin reittikohtaiselle alustukselle

**Testaa tietojen päivitysjärjestelmääsi:**

1. Kirjaudu pankkisovellukseen
2. Suorita aiemmin mainittu curl-komento luodaksesi uuden tapahtuman
3. Päivitä hallintapaneelin sivu tai siirry pois ja takaisin
4. Varmista, että uusi tapahtuma näkyy välittömästi

🎉 **Täydellinen tasapaino saavutettu**: Sovelluksesi yhdistää nyt pysyvän tilan sujuvan kokemuksen ja tuoreiden palvelintietojen tarkkuuden!

## GitHub Copilot Agent -haaste 🚀

Käytä Agent-tilaa suorittaaksesi seuraavan haasteen:

**Kuvaus:** Toteuta kattava tilanhallintajärjestelmä, jossa on kumoa/palauta-toiminnallisuus pankkisovellukselle. Tämä haaste auttaa sinua harjoittelemaan edistyneitä tilanhallinnan käsitteitä, kuten tilahistorian seurantaa, muuttumattomia päivityksiä ja käyttöliittymän synkronointia.

**Ohje:** Luo parannettu tilanhallintajärjestelmä, joka sisältää: 1) Tilahistoria-taulukon, joka seuraa kaikkia aiempia tiloja, 2) Kumoa ja palauta -toiminnot, jotka voivat palauttaa aiempiin tiloihin, 3) Käyttöliittymän painikkeet kumoa/palauta-toimintoja varten hallintapaneelissa, 4) Enimmäishistorian rajoituksen 10 tilaan muistiongelmien välttämiseksi, ja 5) Historiatietojen asianmukaisen siivouksen, kun käyttäjä kirjautuu ulos. Varmista, että kumoa/palauta-toiminnallisuus toimii tilin saldon muutosten kanssa ja säilyy selaimen päivitysten välillä.

Lisätietoja [agent-tilasta](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) löydät täältä.

## 🚀 Haaste: Tallennuksen optimointi

Toteutuksesi käsittelee nyt käyttäjäistuntoja, tietojen päivitystä ja tilanhallintaa tehokkaasti. Mieti kuitenkin, onko nykyinen lähestymistapamme optimaalisin tallennustehokkuuden ja toiminnallisuuden tasapainottamiseksi.

Kuten shakkimestarit, jotka erottavat tärkeät nappulat vähemmän tärkeistä, tehokas tilanhallinta vaatii sen pohtimista, mitkä tiedot on välttämätöntä säilyttää ja mitkä tulisi aina hakea palvelimelta tuoreina.

**Optimointianalyysi:**

Arvioi nykyistä localStorage-toteutustasi ja pohdi näitä strategisia kysymyksiä:
- Mikä on vähimmäismäärä tietoa, joka tarvitaan käyttäjän autentikoinnin ylläpitämiseen?
- Mitkä tiedot muuttuvat niin usein, että paikallisesta välimuistista ei ole juurikaan hyötyä?
- Kuinka tallennuksen optimointi voi parantaa suorituskykyä heikentämättä käyttäjäkokemusta?

**Toteutusstrategia:**
- **Tunnista** olennaiset tiedot, jotka on säilytettävä (todennäköisesti vain käyttäjän tunnistetiedot)
- **Muokkaa** localStorage-toteutustasi tallentamaan vain kriittiset istuntotiedot
- **Varmista**, että tuoreet tiedot ladataan aina palvelimelta hallintapaneelivierailujen yhteydessä
- **Testaa**, että optimoitu lähestymistapusi säilyttää saman käyttäjäkokemuksen

**Edistynyt harkinta:**
- **Vertaa** täyden tilitiedon tallentamisen ja pelkkien autentikointitunnusten säilyttämisen kompromisseja
- **Dokumentoi** päätöksesi ja perustelusi tulevia tiimin jäseniä varten

Tämä haaste auttaa sinua ajattelemaan kuin ammattikehittäjä, joka huomioi sekä käyttäjäkokemuksen että sovelluksen tehokkuuden. Käytä aikaa erilaisten lähestymistapojen kokeilemiseen!

## Luentojälkeinen kysely

[Luentojälkeinen kysely](https://ff-quizzes.netlify.app/web/quiz/48)

## Tehtävä

[Toteuta "Lisää tapahtuma" -dialogi](assignment.md)

Tässä esimerkki tuloksesta tehtävän suorittamisen jälkeen:

![Näyttökuva, jossa näkyy esimerkki "Lisää tapahtuma" -dialogista](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.fi.png)

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.