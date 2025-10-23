<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d0a02cb117e91a5b5f24178080068a3d",
  "translation_date": "2025-10-23T00:34:40+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "fi"
}
-->
# Koodin refaktorointi ja dokumentointi -tehtävä

## Oppimistavoitteet

Tämän tehtävän suorittamalla harjoittelet keskeisiä ohjelmistokehitystaitoja, joita ammattilaiskehittäjät käyttävät päivittäin. Opit järjestämään koodia ylläpidettävyyden parantamiseksi, vähentämään toistoa abstraktion avulla ja dokumentoimaan työsi tulevia kehittäjiä (mukaan lukien itsesi!) varten.

Siisti ja hyvin dokumentoitu koodi on ratkaisevan tärkeää todellisissa verkkokehitysprojekteissa, joissa useat kehittäjät tekevät yhteistyötä ja koodipohjat kehittyvät ajan myötä.

## Tehtävän yleiskatsaus

Pankkisovelluksesi `app.js`-tiedosto on kasvanut merkittävästi sisältäen kirjautumis-, rekisteröinti- ja hallintapaneelitoiminnallisuuksia. Nyt on aika refaktoroida tämä koodi ammattimaisia kehityskäytäntöjä noudattaen, jotta sen luettavuus, ylläpidettävyys ja toiston vähentäminen paranevat.

## Ohjeet

Muokkaa nykyistä `app.js`-koodiasi käyttämällä seuraavia kolmea keskeistä refaktorointitekniikkaa:

### 1. Konfiguraatiovakioiden erottaminen

**Tehtävä**: Luo tiedoston alkuun konfiguraatio-osio, jossa on uudelleenkäytettäviä vakioita.

**Toteutusohjeet:**
- Erota palvelimen API:n perus-URL-osoite (tällä hetkellä kovakoodattu useisiin paikkoihin)
- Luo vakioita virheilmoituksille, jotka esiintyvät useissa funktioissa
- Harkitse reittipolkujen ja elementtien ID-tunnisteiden erottamista, joita käytetään toistuvasti

**Esimerkkirakenne:**
```javascript
// Configuration constants
const API_BASE_URL = 'http://localhost:5000/api';
const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard'
};
```

### 2. Yhtenäisen pyyntöfunktion luominen

**Tehtävä**: Rakenna uudelleenkäytettävä `sendRequest()`-funktio, joka poistaa toistuvan koodin `createAccount()`- ja `getAccount()`-funktioiden välillä.

**Vaatimukset:**
- Käsittele sekä GET- että POST-pyynnöt
- Sisällytä asianmukainen virheenkäsittely
- Tue eri URL-päätepisteitä
- Hyväksy valinnainen pyynnön runkodata

**Funktiosignatuurin ohjeet:**
```javascript
async function sendRequest(endpoint, method = 'GET', data = null) {
  // Your implementation here
}
```

### 3. Ammattimaisen koodidokumentaation lisääminen

**Tehtävä**: Dokumentoi koodisi selkeillä ja hyödyllisillä kommenteilla, jotka selittävät logiikan "miksi".

**Dokumentaatiostandardit:**
- Lisää funktiodokumentaatio, joka selittää tarkoituksen, parametrit ja palautusarvot
- Sisällytä rivikommentteja monimutkaiselle logiikalle tai liiketoimintasäännöille
- Ryhmittele liittyvät funktiot yhteen osioiden otsikoilla
- Selitä kaikki ei-ilmeiset koodimallit tai selainkohtaiset kiertotavat

**Esimerkkidokumentaatiotyyli:**
```javascript
/**
 * Authenticates user and redirects to dashboard
 * @param {Event} event - Form submission event
 * @returns {Promise<void>} - Resolves when login process completes
 */
async function login(event) {
  // Prevent default form submission to handle with JavaScript
  event.preventDefault();
  
  // Your implementation...
}
```

## Onnistumiskriteerit

Refaktoroidun koodisi tulisi osoittaa seuraavat ammattimaiset kehityskäytännöt:

### Erinomainen toteutus
- ✅ **Vakiot**: Kaikki "taikamerkkijonot" ja URL-osoitteet on erotettu selkeästi nimetyiksi vakioiksi
- ✅ **DRY-periaate**: Yhteinen pyyntölokiikka on yhdistetty uudelleenkäytettävään `sendRequest()`-funktioon
- ✅ **Dokumentaatio**: Funktioilla on selkeät JSDoc-kommentit, jotka selittävät tarkoituksen ja parametrit
- ✅ **Organisaatio**: Koodi on loogisesti ryhmitelty osioiden otsikoilla ja johdonmukaisella muotoilulla
- ✅ **Virheenkäsittely**: Parannettu virheenkäsittely uuden pyyntöfunktion avulla

### Riittävä toteutus
- ✅ **Vakiot**: Suurin osa toistuvista arvoista on erotettu, mutta joitakin kovakoodattuja arvoja voi olla jäljellä
- ✅ **Faktorointi**: Perustason `sendRequest()`-funktio luotu, mutta se ei välttämättä käsittele kaikkia reunatapauksia
- ✅ **Kommentit**: Keskeiset funktiot on dokumentoitu, vaikka jotkut selitykset voisivat olla täydellisempiä
- ✅ **Luettavuus**: Koodi on yleisesti hyvin järjestetty, vaikka joitakin parannusalueita voi olla

### Parannettavaa
- ❌ **Vakiot**: Monet "taikamerkkijonot" ja URL-osoitteet ovat edelleen kovakoodattuja tiedostossa
- ❌ **Toisto**: Merkittävä koodin toisto säilyy samanlaisten funktioiden välillä
- ❌ **Dokumentaatio**: Puuttuvat tai riittämättömät kommentit, jotka eivät selitä koodin tarkoitusta
- ❌ **Organisaatio**: Koodista puuttuu selkeä rakenne ja looginen ryhmittely

## Refaktoroidun koodin testaaminen

Refaktoroinnin jälkeen varmista, että pankkisovelluksesi toimii edelleen oikein:

1. **Testaa kaikki käyttäjävirrat**: Rekisteröinti, kirjautuminen, hallintapaneelin näyttö ja virheenkäsittely
2. **Vahvista API-kutsut**: Varmista, että `sendRequest()`-funktio toimii sekä tilin luomisessa että hakemisessa
3. **Tarkista virhetilanteet**: Testaa virheellisillä tunnuksilla ja verkkovirheillä
4. **Tarkista konsolin tulosteet**: Varmista, ettei refaktoroinnin aikana ole syntynyt uusia virheitä

## Palautusohjeet

Palauta refaktoroitu `app.js`-tiedosto, jossa:
- Selkeät osioiden otsikot järjestävät eri toiminnallisuudet
- Johdonmukainen koodin muotoilu ja sisennys
- Täydellinen JSDoc-dokumentaatio kaikille funktioille
- Lyhyt kommentti tiedoston alussa, joka selittää refaktorointilähestymistapasi

**Bonushaaste**: Luo yksinkertainen koodidokumentaatiotiedosto (`CODE_STRUCTURE.md`), joka selittää sovelluksesi arkkitehtuurin ja kuinka eri funktiot toimivat yhdessä.

## Yhteys todelliseen maailmaan

Tämä tehtävä heijastaa sellaista koodin ylläpitoa, jota ammattilaiskehittäjät tekevät säännöllisesti. Teollisuudessa:
- **Koodikatselmukset** arvioivat luettavuutta ja ylläpidettävyyttä, kuten tässä tehtävässä
- **Tekninen velka** kertyy, kun koodia ei refaktoroida ja dokumentoida säännöllisesti
- **Tiimityöskentely** riippuu selkeästä, hyvin dokumentoidusta koodista, jonka uudet tiimin jäsenet voivat ymmärtää
- **Virheiden korjaaminen** on paljon helpompaa hyvin järjestetyissä koodipohjissa, joissa on asianmukaiset abstraktiot

Tässä harjoiteltavat taidot - vakioiden erottaminen, toiston poistaminen ja selkeän dokumentaation kirjoittaminen - ovat keskeisiä ammattilaisohjelmistokehityksessä.

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.