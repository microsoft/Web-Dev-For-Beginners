<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "ec43b53e8e015cdabfd3ad877b3c28e5",
  "translation_date": "2025-10-23T00:13:14+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "fi"
}
-->
# JavaScriptin perusteet: Metodit ja funktiot

![JavaScriptin perusteet - Funktiot](../../../../translated_images/webdev101-js-functions.be049c4726e94f8b7605c36330ac42eeb5cd8ed02bcdd60fdac778174d6cb865.fi.png)
> Sketchnote: [Tomomi Imura](https://twitter.com/girlie_mac)

## Ennakkokysely
[Ennakkokysely](https://ff-quizzes.netlify.app)

Saman koodin kirjoittaminen toistuvasti on yksi ohjelmoinnin yleisimmistä turhautumisen aiheista. Funktiot ratkaisevat tämän ongelman antamalla mahdollisuuden paketoida koodia uudelleenkäytettäviin lohkoihin. Ajattele funktioita kuin standardoituja osia, jotka tekivät Henry Fordin kokoonpanolinjasta vallankumouksellisen – kun luot luotettavan komponentin, voit käyttää sitä missä tahansa ilman, että sinun tarvitsee rakentaa sitä uudelleen alusta.

Funktiot mahdollistavat koodin osien niputtamisen, jotta voit käyttää niitä uudelleen ohjelmassasi. Sen sijaan, että kopioisit ja liittäisit samaa logiikkaa kaikkialle, voit luoda funktion kerran ja kutsua sitä aina tarvittaessa. Tämä lähestymistapa pitää koodisi järjestyksessä ja helpottaa päivityksiä.

Tässä oppitunnissa opit luomaan omia funktioita, välittämään niille tietoa ja saamaan hyödyllisiä tuloksia takaisin. Opit eron funktioiden ja metodien välillä, nykyaikaisia syntaksitapoja ja näet, miten funktiot voivat toimia yhdessä muiden funktioiden kanssa. Rakennamme nämä käsitteet askel askeleelta.

[![Metodit ja funktiot](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Metodit ja funktiot")

> 🎥 Klikkaa yllä olevaa kuvaa nähdäksesi videon metodeista ja funktioista.

> Voit käydä tämän oppitunnin [Microsoft Learnissa](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon)!

## Funktiot

Funktio on itsenäinen koodilohko, joka suorittaa tietyn tehtävän. Se kapseloi logiikan, jonka voit suorittaa aina tarvittaessa.

Sen sijaan, että kirjoittaisit samaa koodia useita kertoja ohjelmassasi, voit paketoida sen funktioon ja kutsua kyseistä funktiota aina tarvittaessa. Tämä lähestymistapa pitää koodisi siistinä ja helpottaa päivityksiä. Mieti, kuinka haastavaa olisi ylläpitää koodia, jos sinun pitäisi muuttaa logiikkaa, joka on hajautettu 20 eri paikkaan koodipohjassasi.

On tärkeää antaa funktioille kuvaavat nimet. Hyvin nimetty funktio viestii tarkoituksensa selkeästi – kun näet `cancelTimer()`, ymmärrät heti, mitä se tekee, aivan kuten selkeästi merkitty painike kertoo, mitä tapahtuu, kun sitä painetaan.

## Funktion luominen ja kutsuminen

Tarkastellaan, miten funktio luodaan. Syntaksi noudattaa johdonmukaista kaavaa:

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

Puretaan tämä osiin:
- `function`-avainsana kertoo JavaScriptille "Hei, olen luomassa funktiota!"
- `nameOfFunction` on paikka, jossa annat funktiollesi kuvaavan nimen
- Sulut `()` ovat paikka, johon voit lisätä parametreja (palaamme tähän pian)
- Aaltosulkeet `{}` sisältävät varsinaisen koodin, joka suoritetaan, kun kutsut funktiota

Luodaan yksinkertainen tervehdysfunktio, jotta nähdään tämä käytännössä:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

Tämä funktio tulostaa "Hello, world!" konsoliin. Kun olet määritellyt sen, voit käyttää sitä niin monta kertaa kuin tarvitset.

Funktion suorittamiseksi (tai "kutsumiseksi") kirjoita sen nimi ja lisää sulut perään. JavaScript sallii funktion määrittelyn ennen tai jälkeen sen kutsumisen – JavaScript-moottori huolehtii suoritusjärjestyksestä.

```javascript
// calling our function
displayGreeting();
```

Kun suoritat tämän rivin, se suorittaa kaiken koodin `displayGreeting`-funktion sisällä ja näyttää "Hello, world!" selaimesi konsolissa. Voit kutsua tätä funktiota toistuvasti.

> **Note:** Olet käyttänyt **metodeja** näiden oppituntien aikana. `console.log()` on metodi – käytännössä funktio, joka kuuluu `console`-objektiin. Keskeinen ero on, että metodit liittyvät objekteihin, kun taas funktiot ovat itsenäisiä. Monet kehittäjät käyttävät näitä termejä epävirallisessa keskustelussa keskenään.

### Funktion parhaat käytännöt

Tässä muutama vinkki, jotka auttavat sinua kirjoittamaan hyviä funktioita:

- Anna funktioillesi selkeät, kuvaavat nimet – tuleva itsesi kiittää sinua!
- Käytä **camelCase**-tyyliä monisanaisissa nimissä (kuten `calculateTotal` sen sijaan, että käyttäisit `calculate_total`)
- Pidä jokainen funktio keskittyneenä yhteen asiaan ja tee se hyvin

## Tiedon välittäminen funktiolle

Meidän `displayGreeting`-funktiomme on rajallinen – se voi näyttää vain "Hello, world!" kaikille. Parametrit antavat meille mahdollisuuden tehdä funktioista joustavampia ja hyödyllisempiä.

**Parametrit** toimivat kuin paikkamerkit, joihin voit lisätä eri arvoja joka kerta, kun käytät funktiota. Näin sama funktio voi toimia eri tiedoilla jokaisella kutsulla.

Luettelet parametrit sulkujen sisällä, kun määrittelet funktion, ja erotat useat parametrit pilkuilla:

```javascript
function name(param, param2, param3) {

}
```

Jokainen parametri toimii paikkamerkkinä – kun joku kutsuu funktiotasi, hän antaa todellisia arvoja, jotka sijoitetaan näihin kohtiin.

Päivitetään tervehdysfunktiomme hyväksymään jonkun nimi:

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

Huomaa, miten käytämme takakauttaviivoja (`` ` ``) ja `${}` lisätäksemme nimen suoraan viestiimme – tätä kutsutaan mallimerkkijonoksi, ja se on todella kätevä tapa rakentaa merkkijonoja, joissa on sekoitettuja muuttujia.

Nyt kun kutsumme funktiotamme, voimme välittää minkä tahansa nimen:

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

JavaScript ottaa merkkijonon `'Christopher'`, määrittää sen `name`-parametrille ja luo henkilökohtaisen viestin "Hello, Christopher!"

## Oletusarvot

Entä jos haluamme tehdä joistakin parametreista valinnaisia? Tässä kohtaa oletusarvot ovat hyödyllisiä!

Oletetaan, että haluamme ihmisten voivan mukauttaa tervehdystä, mutta jos he eivät määrittele sellaista, käytämme varmuuden vuoksi "Hello"-tervehdystä. Voit asettaa oletusarvot käyttämällä yhtäläisyysmerkkiä, aivan kuten muuttujan määrittämisessä:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

Tässä `name` on edelleen pakollinen, mutta `salutation`-parametrilla on varmuuskopioarvo `'Hello'`, jos kukaan ei anna erilaista tervehdystä.

Nyt voimme kutsua tätä funktiota kahdella eri tavalla:

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

Ensimmäisessä kutsussa JavaScript käyttää oletusarvoa "Hello", koska emme määritelleet tervehdystä. Toisessa kutsussa se käyttää mukautettua "Hi"-tervehdystä. Tämä joustavuus tekee funktioista mukautuvia eri tilanteisiin.

## Palautusarvot

Tähän mennessä funktiomme ovat vain tulostaneet viestejä konsoliin, mutta entä jos haluat funktion laskevan jotain ja antavan tuloksen takaisin?

Tässä kohtaa **palautusarvot** tulevat mukaan. Sen sijaan, että funktio vain näyttäisi jotain, se voi antaa sinulle takaisin arvon, jonka voit tallentaa muuttujaan tai käyttää muualla koodissasi.

Palauttaaksesi arvon käytät `return`-avainsanaa, jota seuraa haluamasi palautettava arvo:

```javascript
return myVariable;
```

Tässä tärkeä huomio: kun funktio kohtaa `return`-lauseen, se lopettaa välittömästi suorittamisen ja lähettää kyseisen arvon takaisin sille, joka kutsui sitä.

Muokataan tervehdysfunktiotamme palauttamaan viesti sen sijaan, että se tulostaisi sen:

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

Nyt sen sijaan, että funktio tulostaisi tervehdyksen, se luo viestin ja antaa sen meille takaisin.

Palautetun arvon käyttämiseksi voimme tallentaa sen muuttujaan kuten minkä tahansa muun arvon:

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

Nyt `greetingMessage` sisältää "Hello, Christopher", ja voimme käyttää sitä missä tahansa koodissamme – näyttää sen verkkosivulla, sisällyttää sen sähköpostiin tai välittää sen toiselle funktiolle.

## Funktiot funktioiden parametreina

Funktioita voidaan välittää parametreina toisille funktioille. Vaikka tämä konsepti saattaa aluksi tuntua monimutkaiselta, se on tehokas ominaisuus, joka mahdollistaa joustavat ohjelmointimallit.

Tämä malli on erittäin yleinen, kun haluat sanoa "kun jotain tapahtuu, tee tämä toinen asia." Esimerkiksi "kun ajastin päättyy, suorita tämä koodi" tai "kun käyttäjä klikkaa painiketta, kutsu tämä funktio."

Tarkastellaan `setTimeout`-funktiota, joka on sisäänrakennettu funktio, joka odottaa tietyn ajan ja sitten suorittaa jonkin koodin. Meidän täytyy kertoa sille, mitä koodia suorittaa – täydellinen tapaus funktion välittämiseen!

Kokeile tätä koodia – 3 sekunnin kuluttua näet viestin:

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

Huomaa, miten välitämme `displayDone`-funktion (ilman sulkuja) `setTimeout`-funktiolle. Emme kutsu funktiota itse – annamme sen `setTimeout`-funktiolle ja sanomme "kutsu tämä 3 sekunnin kuluttua."

### Nimettömät funktiot

Joskus tarvitset funktiota vain yhteen asiaan etkä halua antaa sille nimeä. Mieti – jos käytät funktiota vain kerran, miksi lisätä koodiin ylimääräinen nimi?

JavaScript antaa sinun luoda **nimettömiä funktioita** – funktioita ilman nimiä, jotka voit määritellä juuri siellä, missä niitä tarvitaan.

Näin voimme kirjoittaa ajastinesimerkkimme uudelleen käyttämällä nimetöntä funktiota:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

Tämä saavuttaa saman tuloksen, mutta funktio määritellään suoraan `setTimeout`-kutsun sisällä, mikä poistaa tarpeen erilliselle funktion määrittelylle.

### Nuolifunktiot

Nykyaikaisessa JavaScriptissa on vielä lyhyempi tapa kirjoittaa funktioita, joita kutsutaan **nuolifunktioiksi**. Ne käyttävät `=>`-merkkiä (joka näyttää nuolelta – eikö olekin osuva?) ja ovat erittäin suosittuja kehittäjien keskuudessa.

Nuolifunktiot antavat sinun ohittaa `function`-avainsanan ja kirjoittaa tiiviimpää koodia.

Tässä ajastinesimerkkimme nuolifunktiolla:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

Sulut `()` ovat paikka, johon parametrit menisivät (tässä tapauksessa tyhjä), sitten tulee nuoli `=>`, ja lopuksi funktion runko aaltosulkeissa. Tämä tarjoaa saman toiminnallisuuden tiiviimmällä syntaksilla.

### Milloin käyttää mitä strategiaa

Milloin sinun pitäisi käyttää mitäkin lähestymistapaa? Käytännöllinen ohje: jos käytät funktiota useita kertoja, anna sille nimi ja määrittele se erikseen. Jos se on tarkoitettu yhteen tiettyyn käyttöön, harkitse nimetöntä funktiota. Sekä nuolifunktiot että perinteinen syntaksi ovat päteviä valintoja, vaikka nuolifunktiot ovat yleisiä nykyaikaisissa JavaScript-koodipohjissa.

---



## 🚀 Haaste

Osaatko tiivistää yhdessä lauseessa eron funktioiden ja metodien välillä? Kokeile!

## GitHub Copilot Agent -haaste 🚀

Käytä Agent-tilaa suorittaaksesi seuraavan haasteen:

**Kuvaus:** Luo matemaattisten funktioiden apukirjasto, joka havainnollistaa tämän oppitunnin käsittelemiä eri funktiokonsepteja, mukaan lukien parametrit, oletusarvot, palautusarvot ja nuolifunktiot.

**Tehtävänanto:** Luo JavaScript-tiedosto nimeltä `mathUtils.js`, joka sisältää seuraavat funktiot:
1. Funktio `add`, joka ottaa kaksi parametria ja palauttaa niiden summan
2. Funktio `multiply`, jossa on oletusarvot parametreille (toinen parametri oletuksena 1)
3. Nuolifunktio `square`, joka ottaa numeron ja palauttaa sen neliön
4. Funktio `calculate`, joka hyväksyy toisen funktion parametrina ja kaksi numeroa, ja soveltaa funktiota näihin numeroihin
5. Näytä jokaisen funktion kutsuminen sopivilla testitapauksilla

Lisätietoja [agent-tilasta](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) löydät täältä.

## Jälkikysely
[Jälkikysely](https://ff-quizzes.netlify.app)

## Kertaus ja itseopiskelu

Kannattaa [perehtyä hieman lisää nuolifunktioihin](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), sillä niitä käytetään yhä enemmän koodipohjissa. Harjoittele funktion kirjoittamista ja sen uudelleenkirjoittamista tällä syntaksilla.

## Tehtävä

[Hauskaa funktioiden parissa](assignment.md)

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.