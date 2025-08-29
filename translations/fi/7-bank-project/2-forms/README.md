<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8baca047d77a5f43fa4099c0578afa42",
  "translation_date": "2025-08-29T00:35:59+00:00",
  "source_file": "7-bank-project/2-forms/README.md",
  "language_code": "fi"
}
-->
# Rakenna pankkisovellus Osa 2: Luo kirjautumis- ja rekisteröintilomake

## Ennakkokysely

[Ennakkokysely](https://ff-quizzes.netlify.app/web/quiz/43)

### Johdanto

Lähes kaikissa moderneissa verkkosovelluksissa voit luoda tilin saadaksesi oman yksityisen tilan. Koska useat käyttäjät voivat käyttää verkkosovellusta samanaikaisesti, tarvitaan mekanismi, jolla jokaisen käyttäjän henkilökohtaiset tiedot tallennetaan erikseen ja valitaan, mitä tietoja näytetään. Emme käsittele [käyttäjän identiteetin turvallista hallintaa](https://en.wikipedia.org/wiki/Authentication), sillä se on laaja aihe itsessään, mutta varmistamme, että jokainen käyttäjä voi luoda yhden (tai useamman) pankkitilin sovelluksessamme.

Tässä osassa käytämme HTML-lomakkeita lisätäksemme kirjautumisen ja rekisteröinnin verkkosovellukseemme. Näemme, kuinka tiedot lähetetään ohjelmallisesti palvelimen API:lle ja lopulta määritämme perusvalidointisäännöt käyttäjän syötteille.

### Esivaatimukset

Sinun tulee olla suorittanut verkkosovelluksen [HTML-mallien ja reitityksen](../1-template-route/README.md) osion ennen tämän oppitunnin aloittamista. Sinun tulee myös asentaa [Node.js](https://nodejs.org) ja [käynnistää palvelimen API](../api/README.md) paikallisesti, jotta voit lähettää tietoja tilien luomista varten.

**Huomioi**
Sinulla tulee olla kaksi terminaalia käynnissä samanaikaisesti, kuten alla on lueteltu:
1. Pääpankkisovellusta varten, jonka rakensimme [HTML-mallien ja reitityksen](../1-template-route/README.md) oppitunnissa.
2. [Pankkisovelluksen palvelin-API](../api/README.md), jonka juuri asensimme.

Molemmat palvelimet tulee olla käynnissä, jotta voit jatkaa oppituntia. Ne kuuntelevat eri porteilla (portti `3000` ja portti `5000`), joten kaiken pitäisi toimia moitteettomasti.

Voit testata, että palvelin toimii oikein suorittamalla tämän komennon terminaalissa:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## Lomake ja ohjaimet

`<form>`-elementti kapseloi HTML-dokumentin osan, jossa käyttäjä voi syöttää ja lähettää tietoja interaktiivisten ohjainten avulla. Lomakkeessa voi käyttää monenlaisia käyttöliittymäohjaimia (UI), joista yleisimmät ovat `<input>`- ja `<button>`-elementit.

On olemassa monia erilaisia [tyyppejä](https://developer.mozilla.org/docs/Web/HTML/Element/input) `<input>`-elementille. Esimerkiksi, jos haluat luoda kentän, johon käyttäjä voi syöttää käyttäjänimensä, voit käyttää:

```html
<input id="username" name="username" type="text">
```

`name`-attribuuttia käytetään ominaisuuden nimenä, kun lomaketiedot lähetetään. `id`-attribuuttia käytetään `<label>`-elementin yhdistämiseen lomakeohjaimeen.

> Tutustu koko listaan [`<input>`-tyypeistä](https://developer.mozilla.org/docs/Web/HTML/Element/input) ja [muista lomakeohjaimista](https://developer.mozilla.org/docs/Learn/Forms/Other_form_controls), jotta saat käsityksen kaikista natiivista käyttöliittymäelementeistä, joita voit käyttää UI:n rakentamisessa.

✅ Huomaa, että `<input>` on [tyhjä elementti](https://developer.mozilla.org/docs/Glossary/Empty_element), johon ei tule lisätä vastaavaa sulkevaa tagia. Voit kuitenkin käyttää itse sulkevaa `<input/>`-merkintää, mutta se ei ole pakollista.

`<button>`-elementti lomakkeessa on hieman erityinen. Jos et määritä sen `type`-attribuuttia, se lähettää lomaketiedot automaattisesti palvelimelle, kun sitä painetaan. Tässä ovat mahdolliset `type`-arvot:

- `submit`: Oletusarvo lomakkeessa, painike käynnistää lomakkeen lähetyksen.
- `reset`: Painike palauttaa kaikki lomakeohjaimet alkuperäisiin arvoihinsa.
- `button`: Ei määritä oletuskäyttäytymistä painettaessa. Voit määrittää sille mukautettuja toimintoja JavaScriptin avulla.

### Tehtävä

Aloitetaan lisäämällä lomake `login`-malliin. Tarvitsemme *käyttäjänimi*-kentän ja *Kirjaudu sisään* -painikkeen.

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <h2>Login</h2>
    <form id="loginForm">
      <label for="username">Username</label>
      <input id="username" name="user" type="text">
      <button>Login</button>
    </form>
  </section>
</template>
```

Jos tarkastelet tarkemmin, huomaat, että lisäsimme myös `<label>`-elementin. `<label>`-elementtejä käytetään antamaan nimi käyttöliittymäohjaimille, kuten käyttäjänimikentällemme. Tunnisteet ovat tärkeitä lomakkeiden luettavuuden kannalta, mutta niillä on myös muita etuja:

- Yhdistämällä tunniste lomakeohjaimeen se auttaa avustavia teknologioita (kuten ruudunlukijoita) ymmärtämään, mitä tietoja käyttäjältä odotetaan.
- Voit klikata tunnistetta asettaaksesi kohdistuksen suoraan siihen liittyvään syöttökenttään, mikä helpottaa käyttöä kosketusnäyttölaitteilla.

> [Saavutettavuus](https://developer.mozilla.org/docs/Learn/Accessibility/What_is_accessibility) verkossa on erittäin tärkeä aihe, jota usein laiminlyödään. Kiitos [semanttisten HTML-elementtien](https://developer.mozilla.org/docs/Learn/Accessibility/HTML), saavutettavan sisällön luominen ei ole vaikeaa, jos käytät niitä oikein. Voit [lukea lisää saavutettavuudesta](https://developer.mozilla.org/docs/Web/Accessibility) välttääksesi yleiset virheet ja tullaksesi vastuulliseksi kehittäjäksi.

Lisätään nyt toinen lomake rekisteröintiä varten, heti edellisen alle:

```html
<hr/>
<h2>Register</h2>
<form id="registerForm">
  <label for="user">Username</label>
  <input id="user" name="user" type="text">
  <label for="currency">Currency</label>
  <input id="currency" name="currency" type="text" value="$">
  <label for="description">Description</label>
  <input id="description" name="description" type="text">
  <label for="balance">Current balance</label>
  <input id="balance" name="balance" type="number" value="0">
  <button>Register</button>
</form>
```

`value`-attribuutin avulla voimme määrittää oletusarvon tietylle syöttökentälle. Huomaa myös, että `balance`-kentän tyyppi on `number`. Näyttääkö se erilaiselta kuin muut syöttökentät? Kokeile sen kanssa vuorovaikutusta.

✅ Voitko navigoida ja käyttää lomakkeita pelkästään näppäimistön avulla? Kuinka tekisit sen?

## Tietojen lähettäminen palvelimelle

Nyt kun meillä on toimiva käyttöliittymä, seuraava askel on lähettää tiedot palvelimelle. Tehdään nopea testi nykyisellä koodillamme: mitä tapahtuu, jos klikkaat *Kirjaudu sisään* tai *Rekisteröidy* -painiketta?

Huomasitko muutoksen selaimen URL-osoiteosiossa?

![Kuvakaappaus selaimen URL-muutoksesta Rekisteröidy-painikkeen klikkauksen jälkeen](../../../../translated_images/click-register.e89a30bf0d4bc9ca867dc537c4cea679a7c26368bd790969082f524fed2355bc.fi.png)

Lomakkeen oletustoiminto on lähettää lomake nykyiseen palvelimen URL-osoitteeseen käyttäen [GET-metodia](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3), liittäen lomaketiedot suoraan URL-osoitteeseen. Tällä metodilla on kuitenkin joitakin puutteita:

- Lähetettävien tietojen koko on hyvin rajallinen (noin 2000 merkkiä).
- Tiedot näkyvät suoraan URL-osoitteessa (ei hyvä salasanoille).
- Se ei toimi tiedostojen latausten kanssa.

Siksi voit vaihtaa sen käyttämään [POST-metodia](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5), joka lähettää lomaketiedot palvelimelle HTTP-pyynnön rungossa ilman edellä mainittuja rajoituksia.

> Vaikka POST on yleisimmin käytetty metodi tietojen lähettämiseen, [joissakin erityistilanteissa](https://www.w3.org/2001/tag/doc/whenToUseGet.html) on suositeltavaa käyttää GET-metodia, esimerkiksi hakukentän toteuttamisessa.

### Tehtävä

Lisää `action`- ja `method`-ominaisuudet rekisteröintilomakkeeseen:

```html
<form id="registerForm" action="//localhost:5000/api/accounts" method="POST">
```

Kokeile nyt rekisteröidä uusi tili omalla nimelläsi. Kun klikkaat *Rekisteröidy*-painiketta, sinun pitäisi nähdä jotain tällaista:

![Selaimen ikkuna osoitteessa localhost:5000/api/accounts, jossa näkyy JSON-merkkijono käyttäjätiedoilla](../../../../translated_images/form-post.61de4ca1b964d91a9e338416e19f218504dd0af5f762fbebabfe7ae80edf885f.fi.png)

Jos kaikki menee hyvin, palvelin vastaa pyyntöösi [JSON](https://www.json.org/json-en.html)-vastauksella, joka sisältää luodun tilin tiedot.

✅ Kokeile rekisteröityä uudelleen samalla nimellä. Mitä tapahtuu?

## Tietojen lähettäminen ilman sivun uudelleenlatausta

Kuten todennäköisesti huomasit, tässä lähestymistavassa on pieni ongelma: kun lomake lähetetään, poistumme sovelluksestamme ja selain ohjautuu palvelimen URL-osoitteeseen. Yritämme välttää kaikki sivun uudelleenlataukset verkkosovelluksessamme, koska teemme [yksisivuisen sovelluksen (SPA)](https://en.wikipedia.org/wiki/Single-page_application).

Jotta voimme lähettää lomaketiedot palvelimelle ilman sivun uudelleenlatausta, meidän täytyy käyttää JavaScript-koodia. Sen sijaan, että asetamme URL-osoitteen `<form>`-elementin `action`-ominaisuuteen, voimme käyttää mitä tahansa JavaScript-koodia, joka alkaa `javascript:`-merkkijonolla suorittaaksemme mukautetun toiminnon. Käyttämällä tätä sinun täytyy toteuttaa joitakin tehtäviä, jotka selain aiemmin teki automaattisesti:

- Lomaketietojen hakeminen
- Lomaketietojen muuntaminen ja koodaus sopivaan muotoon
- HTTP-pyynnön luominen ja lähettäminen palvelimelle

### Tehtävä

Korvaa rekisteröintilomakkeen `action` seuraavalla:

```html
<form id="registerForm" action="javascript:register()">
```

Avaa `app.js` ja lisää uusi funktio nimeltä `register`:

```js
function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const data = Object.fromEntries(formData);
  const jsonData = JSON.stringify(data);
}
```

Tässä haemme lomake-elementin `getElementById()`-metodilla ja käytämme [`FormData`](https://developer.mozilla.org/docs/Web/API/FormData)-apuvälinettä lomakeohjaimien arvojen hakemiseen avain/arvo-pareina. Sitten muunnamme tiedot tavalliseksi objektiksi käyttäen [`Object.fromEntries()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries) ja lopulta sarjoitamme tiedot [JSON](https://www.json.org/json-en.html)-muotoon, joka on yleisesti käytetty tiedonvaihtomuoto verkossa.

Tiedot ovat nyt valmiita lähetettäväksi palvelimelle. Luo uusi funktio nimeltä `createAccount`:

```js
async function createAccount(account) {
  try {
    const response = await fetch('//localhost:5000/api/accounts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: account
    });
    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}
```

Mitä tämä funktio tekee? Huomaa ensin `async`-avainsana. Tämä tarkoittaa, että funktio sisältää koodia, joka suoritetaan [**asynkronisesti**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function). Kun sitä käytetään yhdessä `await`-avainsanan kanssa, se mahdollistaa odottamisen asynkronisen koodin suorittamiselle - kuten odottamisen palvelimen vastaukselle tässä - ennen kuin jatketaan.

Tässä on lyhyt video `async/await`-käytöstä:

[![Async ja Await lupauksien hallintaan](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async ja Await lupauksien hallintaan")

> 🎥 Klikkaa yllä olevaa kuvaa katsoaksesi videon async/awaitista.

Käytämme `fetch()`-API:a JSON-tietojen lähettämiseen palvelimelle. Tämä metodi ottaa kaksi parametria:

- Palvelimen URL-osoitteen, joten laitamme takaisin `//localhost:5000/api/accounts` tähän.
- Pyynnön asetukset. Tässä asetamme metodiksi `POST` ja annamme pyynnön `body`-sisällön. Koska lähetämme JSON-tietoja palvelimelle, meidän täytyy myös asettaa `Content-Type`-otsikko `application/json`, jotta palvelin tietää, miten sisältö tulkitaan.

Koska palvelin vastaa pyyntöön JSON-muodossa, voimme käyttää `await response.json()`-metodia JSON-sisällön jäsentämiseen ja palauttaa tuloksena olevan objektin. Huomaa, että tämä metodi on asynkroninen, joten käytämme `await`-avainsanaa ennen palauttamista varmistaaksemme, että mahdolliset virheet jäsentämisen aikana myös havaitaan.

Lisää nyt hieman koodia `register`-funktioon kutsuaksesi `createAccount()`:

```js
const result = await createAccount(jsonData);
```

Koska käytämme `await`-avainsanaa tässä, meidän täytyy lisätä `async`-avainsana ennen register-funktiota:

```js
async function register() {
```

Lopuksi, lisätään joitakin lokitietoja tuloksen tarkistamiseksi. Lopullinen funktio näyttää tältä:

```js
async function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const jsonData = JSON.stringify(Object.fromEntries(formData));
  const result = await createAccount(jsonData);

  if (result.error) {
    return console.log('An error occurred:', result.error);
  }

  console.log('Account created!', result);
}
```

Se oli hieman pitkä, mutta pääsimme perille! Jos avaat [selaimen kehittäjätyökalut](https://developer.mozilla.org/docs/Learn/Common_questions/What_are_browser_developer_tools) ja yrität rekisteröidä uuden tilin, sinun ei pitäisi nähdä muutosta verkkosivulla, mutta konsolissa näkyy viesti, joka vahvistaa, että kaikki toimii.

![Kuvakaappaus selaimen konsolissa näkyvästä lokiviestistä](../../../../translated_images/browser-console.efaf0b51aaaf67782a29e1a0bb32cc063f189b18e894eb5926e02f1abe864ec2.fi.png)

✅ Lähetetäänkö tiedot palvelimelle turvallisesti? Entä jos joku pystyy sieppaamaan pyynnön? Voit lukea [HTTPS:stä](https://en.wikipedia.org/wiki/HTTPS) saadaksesi lisätietoa turvallisesta tiedonsiirrosta.

## Tietojen validointi

Jos yrität rekisteröidä uuden tilin ilman, että asetat ensin käyttäjänimen, näet, että palvelin palauttaa virheen tilakoodilla [400 (Bad Request)](https://developer.mozilla.org/docs/Web/HTTP/Status/400#:~:text=The%20HyperText%20Transfer%20Protocol%20(HTTP,%2C%20or%20deceptive%20request%20routing).).

Ennen tietojen lähettämistä palvelimelle on hyvä käytäntö [validoida lomaketiedot](https://developer.mozilla.org/docs/Learn/Forms/Form_validation) etukäteen, kun mahdollista, varmistaakseen, että lähetät kelvollisen pyynnön. HTML5-lomakeohjaimet tarjoavat sisäänrakennetun validoinnin eri attribuuttien avulla:

- `required`: kenttä täytyy täyttää, muuten lomaketta ei voi lähettää.
- `minlength` ja `maxlength`: määrittävät tekstikenttien vähimmäis- ja enimmäismerkkimäärän.
- `min` ja `max`: määrittävät numeerisen kentän vähimmäis- ja enimmäisarvon.
- `type`: määrittää odotetun datatyypin, kuten `number`, `email`, `file` tai [muut sisäänrakennetut tyypit](https://developer.mozilla.org/docs/Web/HTML/Element/input). Tämä attribuutti voi myös muuttaa lomakeohjaimen visuaalista esitystä.
- `pattern`: mahdollistaa [säännöllisen lausekkeen](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Regular_Expressions) määrittämisen, jolla testataan, onko syötetty data kelvollista vai ei.
> Vinkki: Voit mukauttaa lomakekontrolliesi ulkoasua sen mukaan, ovatko ne kelvollisia vai eivät, käyttämällä CSS:n `:valid`- ja `:invalid`-pseudoluokkia.
### Tehtävä

Uuden tilin luomiseen vaaditaan kaksi kenttää: käyttäjänimi ja valuutta. Muut kentät ovat vapaaehtoisia. Päivitä lomakkeen HTML niin, että käytät sekä `required`-attribuuttia että tekstimuotoista ohjetta kentän otsikossa:

```html
<label for="user">Username (required)</label>
<input id="user" name="user" type="text" required>
...
<label for="currency">Currency (required)</label>
<input id="currency" name="currency" type="text" value="$" required>
```

Vaikka tämä palvelinimplementaatio ei aseta erityisiä rajoituksia kenttien maksimipituudelle, on aina hyvä käytäntö määritellä kohtuulliset rajat käyttäjän syöttämälle tekstille.

Lisää `maxlength`-attribuutti tekstikenttiin:

```html
<input id="user" name="user" type="text" maxlength="20" required>
...
<input id="currency" name="currency" type="text" value="$" maxlength="5" required>
...
<input id="description" name="description" type="text" maxlength="100">
```

Jos nyt painat *Rekisteröidy*-painiketta ja jokin kenttä ei täytä määriteltyjä validointisääntöjä, näet jotain tällaista:

![Kuvakaappaus, jossa näkyy validointivirhe lomakkeen lähetysyrityksen yhteydessä](../../../../translated_images/validation-error.8bd23e98d416c22f80076d04829a4bb718e0e550fd622862ef59008ccf0d5dce.fi.png)

Tällaista validointia, joka suoritetaan *ennen* datan lähettämistä palvelimelle, kutsutaan **asiakaspuolen** validoinniksi. Huomaa kuitenkin, että kaikkia tarkistuksia ei ole aina mahdollista suorittaa ilman datan lähettämistä. Esimerkiksi emme voi tarkistaa tässä, onko käyttäjänimi jo olemassa, ilman että lähetämme pyynnön palvelimelle. Lisävalidointi, joka suoritetaan palvelimella, kutsutaan **palvelinpuolen** validoinniksi.

Yleensä molemmat validointitavat täytyy toteuttaa. Asiakaspuolen validointi parantaa käyttäjäkokemusta tarjoamalla välitöntä palautetta, mutta palvelinpuolen validointi on välttämätöntä, jotta käsittelemäsi käyttäjätiedot ovat luotettavia ja turvallisia.

---

## 🚀 Haaste

Näytä virheilmoitus HTML:ssä, jos käyttäjä on jo olemassa.

Tässä esimerkki siitä, miltä lopullinen kirjautumissivu voi näyttää pienen tyylittelyn jälkeen:

![Kuvakaappaus kirjautumissivusta CSS-tyylien lisäämisen jälkeen](../../../../translated_images/result.96ef01f607bf856aa9789078633e94a4f7664d912f235efce2657299becca483.fi.png)

## Luennon jälkeinen visailu

[Luennon jälkeinen visailu](https://ff-quizzes.netlify.app/web/quiz/44)

## Kertaus ja itseopiskelu

Kehittäjät ovat olleet erittäin luovia lomakkeiden rakentamisessa, erityisesti validointistrategioiden osalta. Tutustu erilaisiin lomakevirtoihin selaamalla [CodePen](https://codepen.com); löydätkö mielenkiintoisia ja inspiroivia lomakkeita?

## Tehtävä

[Tyylittele pankkisovelluksesi](assignment.md)

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäisellä kielellä tulee pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskääntämistä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.