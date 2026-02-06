# Ota API käyttöön

## Yleiskatsaus

API:t avaavat loputtomasti mahdollisuuksia luovaan verkkokehitykseen! Tässä tehtävässä valitset ulkoisen API:n ja rakennat selainlaajennuksen, joka ratkaisee todellisen ongelman tai tarjoaa käyttäjille arvokasta toiminnallisuutta.

## Ohjeet

### Vaihe 1: Valitse API
Valitse API tästä kuratoidusta [ilmaisten julkisten API:iden listasta](https://github.com/public-apis/public-apis). Harkitse näitä kategorioita:

**Suosittuja vaihtoehtoja aloittelijoille:**
- **Viihde**: [Dog CEO API](https://dog.ceo/dog-api/) satunnaisia koirakuvia varten
- **Sää**: [OpenWeatherMap](https://openweathermap.org/api) ajankohtaisia säätietoja varten
- **Lainaukset**: [Quotable API](https://quotable.io/) inspiroivia lainauksia varten
- **Uutiset**: [NewsAPI](https://newsapi.org/) ajankohtaisia uutisotsikoita varten
- **Hauskat faktat**: [Numbers API](http://numbersapi.com/) mielenkiintoisia numerofaktoja varten

### Vaihe 2: Suunnittele laajennuksesi
Ennen koodaamista vastaa näihin suunnittelukysymyksiin:
- Minkä ongelman laajennuksesi ratkaisee?
- Kuka on kohdekäyttäjäsi?
- Mitä tietoja tallennat paikalliseen tallennustilaan?
- Miten käsittelet API-virheet tai käyttörajoitukset?

### Vaihe 3: Rakenna laajennuksesi
Laajennuksesi tulisi sisältää:

**Vaaditut ominaisuudet:**
- Lomakekentät tarvittaville API-parametreille
- API-integraatio asianmukaisella virheenkäsittelyllä
- Paikallinen tallennustila käyttäjän asetuksille tai API-avaimille
- Selkeä, responsiivinen käyttöliittymä
- Lataustilat ja käyttäjäpalautteet

**Koodivaatimukset:**
- Käytä moderneja JavaScript (ES6+) -ominaisuuksia
- Toteuta async/await API-kutsuille
- Sisällytä asianmukainen virheenkäsittely try/catch-lohkoilla
- Lisää merkityksellisiä kommentteja selittämään koodiasi
- Noudata johdonmukaista koodin muotoilua

### Vaihe 4: Testaa ja viimeistele
- Testaa laajennustasi erilaisilla syötteillä
- Käsittele erikoistapaukset (ei internet-yhteyttä, virheelliset API-vastaukset)
- Varmista, että laajennus toimii selaimen uudelleenkäynnistyksen jälkeen
- Lisää käyttäjäystävällisiä virheilmoituksia

## Lisähaasteet

Vie laajennuksesi seuraavalle tasolle:
- Lisää useita API-päätepisteitä monipuolisemman toiminnallisuuden saavuttamiseksi
- Toteuta datan välimuisti API-kutsujen vähentämiseksi
- Luo pikanäppäimiä yleisille toiminnoille
- Lisää datan vienti-/tuontiominaisuuksia
- Toteuta käyttäjän mukautusvaihtoehtoja

## Palautusvaatimukset

1. **Toimiva selainlaajennus**, joka integroituu valitsemaasi API:iin onnistuneesti
2. **README-tiedosto**, jossa selitetään:
   - Minkä API:n valitsit ja miksi
   - Kuinka laajennus asennetaan ja käytetään
   - Tarvittavat API-avaimet tai asetukset
   - Kuvakaappauksia laajennuksesta toiminnassa
3. **Siisti, kommentoitu koodi**, joka noudattaa moderneja JavaScript-käytäntöjä

## Arviointikriteerit

| Kriteeri | Erinomainen (90-100%) | Hyvä (80-89%) | Kehittyvä (70-79%) | Alkuvaiheessa (60-69%) |
|----------|-----------------------|---------------|--------------------|------------------------|
| **API-integraatio** | Virheetön API-integraatio kattavalla virheenkäsittelyllä ja erikoistapausten hallinnalla | Onnistunut API-integraatio perusvirheenkäsittelyllä | API toimii, mutta virheenkäsittely on rajallista | API-integraatiossa merkittäviä ongelmia |
| **Koodin laatu** | Siisti, hyvin kommentoitu moderni JavaScript, joka noudattaa parhaita käytäntöjä | Hyvä koodirakenne riittävillä kommenteilla | Koodi toimii, mutta vaatii parempaa organisointia | Huono koodin laatu ja vähäiset kommentit |
| **Käyttäjäkokemus** | Viimeistelty käyttöliittymä erinomaisilla lataustiloilla ja käyttäjäpalautteella | Hyvä käyttöliittymä peruskäyttäjäpalautteella | Peruskäyttöliittymä, joka toimii riittävästi | Huono käyttäjäkokemus ja sekava käyttöliittymä |
| **Paikallinen tallennustila** | Kehittynyt paikallisen tallennustilan käyttö datan validoinnilla ja hallinnalla | Asianmukainen paikallisen tallennustilan toteutus keskeisille ominaisuuksille | Perustason paikallisen tallennustilan toteutus | Vähäinen tai virheellinen paikallisen tallennustilan käyttö |
| **Dokumentaatio** | Kattava README, jossa asennusohjeet ja kuvakaappaukset | Hyvä dokumentaatio, joka kattaa suurimman osan vaatimuksista | Perustason dokumentaatio, josta puuttuu joitakin yksityiskohtia | Huono tai puuttuva dokumentaatio |

## Aloitusvinkit

1. **Aloita yksinkertaisesti**: Valitse API, joka ei vaadi monimutkaista autentikointia
2. **Lue dokumentaatio**: Ymmärrä perusteellisesti valitsemasi API:n päätepisteet ja vastaukset
3. **Suunnittele käyttöliittymäsi**: Piirrä laajennuksesi käyttöliittymä ennen koodaamista
4. **Testaa usein**: Rakenna vaiheittain ja testaa jokainen ominaisuus lisäyksen jälkeen
5. **Käsittele virheet**: Oleta aina, että API-kutsut voivat epäonnistua, ja suunnittele sen mukaisesti

## Resurssit

- [Selainlaajennusten dokumentaatio](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions)
- [Fetch API -opas](https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch)
- [Paikallisen tallennustilan opas](https://developer.mozilla.org/docs/Web/API/Window/localStorage)
- [JSON:n jäsennys ja käsittely](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON)

Pidä hauskaa rakentaessasi jotain hyödyllistä ja luovaa! 🚀

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa tämän käännöksen käytöstä johtuvista väärinkäsityksistä tai virhetulkinnoista.