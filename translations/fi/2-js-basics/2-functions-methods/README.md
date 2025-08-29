<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "92e136090efc4341b1d51c37924c1802",
  "translation_date": "2025-08-29T00:42:38+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "fi"
}
-->
# JavaScriptin perusteet: Metodit ja funktiot

![JavaScript Basics - Functions](../../../../translated_images/webdev101-js-functions.be049c4726e94f8b7605c36330ac42eeb5cd8ed02bcdd60fdac778174d6cb865.fi.png)
> Sketchnote: [Tomomi Imura](https://twitter.com/girlie_mac)

## Ennakkokysely
[Ennakkokysely](https://ff-quizzes.netlify.app)

Kun ajattelemme koodin kirjoittamista, haluamme aina varmistaa, että koodi on luettavaa. Vaikka tämä kuulostaa vastoin intuitiota, koodia luetaan paljon useammin kuin sitä kirjoitetaan. Yksi keskeinen työkalu kehittäjän työkalupakissa ylläpidettävän koodin varmistamiseksi on **funktio**.

[![Metodit ja funktiot](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Metodit ja funktiot")

> 🎥 Klikkaa yllä olevaa kuvaa nähdäksesi videon metodeista ja funktioista.

> Voit käydä tämän oppitunnin läpi [Microsoft Learnissa](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon)!

## Funktiot

Funktio on pohjimmiltaan koodilohko, jonka voimme suorittaa tarpeen mukaan. Tämä on täydellinen ratkaisu tilanteisiin, joissa meidän täytyy suorittaa sama tehtävä useita kertoja; sen sijaan, että kopioisimme logiikan useisiin paikkoihin (mikä tekisi päivityksistä hankalia), voimme keskittää sen yhteen paikkaan ja kutsua sitä aina tarvittaessa – voit jopa kutsua funktioita toisista funktioista!

Yhtä tärkeää on antaa funktiolle nimi. Vaikka tämä saattaa tuntua vähäpätöiseltä, nimi toimii nopeana tapana dokumentoida koodin osa. Voit ajatella sitä kuin painikkeen etikettinä. Jos painikkeessa lukee "Peruuta ajastin", tiedän sen pysäyttävän kellon.

## Funktion luominen ja kutsuminen

Funktion syntaksi näyttää tältä:

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

Jos haluaisin luoda funktion, joka näyttää tervehdyksen, se voisi näyttää tältä:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

Aina kun haluamme kutsua (tai suorittaa) funktiomme, käytämme funktion nimeä ja sen perässä `()`. On hyvä huomata, että funktiomme voidaan määritellä ennen tai jälkeen sen kutsumisen; JavaScript-kääntäjä löytää sen puolestasi.

```javascript
// calling our function
displayGreeting();
```

> **NOTE:** On olemassa erityinen funktiotyyppi, jota kutsutaan **metodiksi**, ja olet jo käyttänyt niitä! Itse asiassa näimme tämän esimerkissämme, kun käytimme `console.log`:ia. Se, mikä erottaa metodin funktiosta, on se, että metodi on liitetty objektiin (esimerkissämme `console`), kun taas funktio on irrallinen. Monet kehittäjät käyttävät näitä termejä kuitenkin keskenään.

### Funktion parhaat käytännöt

Kun luot funktioita, pidä mielessäsi muutama hyvä käytäntö:

- Käytä aina kuvailevia nimiä, jotta tiedät, mitä funktio tekee
- Käytä **camelCase**-muotoilua yhdistääksesi sanoja
- Pidä funktiot keskittyneinä yhteen tiettyyn tehtävään

## Tiedon välittäminen funktiolle

Jotta funktio olisi monikäyttöisempi, haluat usein välittää sille tietoa. Jos tarkastelemme yllä olevaa `displayGreeting`-esimerkkiä, se näyttää aina **Hello, world!**. Ei kovin hyödyllinen funktio. Jos haluamme tehdä siitä hieman joustavamman, kuten antaa jonkun määrittää tervehdyksen kohteen nimen, voimme lisätä **parametrin**. Parametri (jota kutsutaan joskus myös **argumentiksi**) on lisätieto, joka lähetetään funktiolle.

Parametrit luetellaan määrittelyosassa sulkujen sisällä ja erotetaan pilkulla, kuten tässä:

```javascript
function name(param, param2, param3) {

}
```

Voimme päivittää `displayGreeting`-funktion hyväksymään nimen ja näyttämään sen.

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

Kun haluamme kutsua funktiomme ja välittää sille parametrin, määritämme sen sulkujen sisällä.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

## Oletusarvot

Voimme tehdä funktiostamme vielä joustavamman lisäämällä enemmän parametreja. Mutta entä jos emme halua vaatia kaikkien arvojen määrittämistä? Pysyen tervehdyksen esimerkissä, voisimme jättää nimen pakolliseksi (meidän täytyy tietää, ketä tervehdimme), mutta haluamme sallia tervehdyksen mukauttamisen haluttaessa. Jos joku ei halua mukauttaa sitä, tarjoamme oletusarvon. Oletusarvon määrittämiseksi parametrille asetamme sen samalla tavalla kuin muuttujalle – `parameterName = 'defaultValue'`. Tässä on täydellinen esimerkki:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

Kun kutsumme funktiota, voimme päättää, haluammeko määrittää arvon `salutation`-parametrille.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

## Paluuarvot

Tähän asti rakentamamme funktio tulostaa aina [konsoliin](https://developer.mozilla.org/docs/Web/API/console). Joskus tämä voi olla juuri sitä, mitä haluamme, erityisesti kun luomme funktioita, jotka kutsuvat muita palveluita. Mutta entä jos haluan luoda apufunktion suorittamaan laskutoimituksen ja palauttamaan arvon, jotta voin käyttää sitä muualla?

Tämä onnistuu käyttämällä **paluuarvoa**. Paluuarvo palautetaan funktiosta ja voidaan tallentaa muuttujaan samalla tavalla kuin voisimme tallentaa esimerkiksi merkkijonon tai numeron.

Jos funktio palauttaa jotain, käytetään avainsanaa `return`. `return`-avainsana odottaa arvoa tai viittausta siihen, mitä palautetaan, kuten tässä:

```javascript
return myVariable;
```  

Voisimme luoda funktion, joka luo tervehdyksen ja palauttaa arvon kutsujalle.

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

Kun kutsumme tätä funktiota, tallennamme arvon muuttujaan. Tämä on hyvin samanlaista kuin jos määrittäisimme muuttujan staattiselle arvolle (kuten `const name = 'Christopher'`).

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

## Funktiot funktioiden parametreina

Kun etenet ohjelmointitaidoissasi, törmäät funktioihin, jotka hyväksyvät funktioita parametreina. Tämä kätevä temppu on yleinen, kun emme tiedä, milloin jokin tapahtuu tai valmistuu, mutta tiedämme, että meidän täytyy suorittaa jokin toiminto vastauksena.

Esimerkiksi [setTimeout](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) aloittaa ajastimen ja suorittaa koodin, kun se päättyy. Meidän täytyy kertoa sille, mitä koodia haluamme suorittaa. Kuulostaa täydelliseltä tehtävältä funktiolle!

Jos suoritat alla olevan koodin, 3 sekunnin kuluttua näet viestin **3 sekuntia kulunut**.

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

### Nimettömät funktiot

Katsotaanpa uudelleen, mitä olemme rakentaneet. Luomme funktion, jolla on nimi, mutta jota käytetään vain kerran. Kun sovelluksemme monimutkaistuu, voimme huomata luovamme paljon funktioita, joita kutsutaan vain kerran. Tämä ei ole ihanteellista. Kuten käy ilmi, meidän ei aina tarvitse antaa funktiolle nimeä!

Kun välitämme funktion parametrina, voimme ohittaa sen etukäteen luomisen ja sen sijaan rakentaa sen osana parametria. Käytämme samaa `function`-avainsanaa, mutta rakennamme sen parametrina.

Kirjoitetaan yllä oleva koodi uudelleen käyttämällä nimetöntä funktiota:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

Jos suoritat uuden koodimme, huomaat saavasi samat tulokset. Olemme luoneet funktion, mutta emme joutuneet antamaan sille nimeä!

### Fat arrow -funktiot

Yksi yleinen oikotie monissa ohjelmointikielissä (mukaan lukien JavaScript) on mahdollisuus käyttää niin sanottua **arrow**- tai **fat arrow** -funktiota. Se käyttää erityistä merkintää `=>`, joka näyttää nuolelta – tästä nimi! Käyttämällä `=>` voimme ohittaa `function`-avainsanan.

Kirjoitetaan koodi vielä kerran uudelleen käyttämällä fat arrow -funktiota:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

### Milloin käyttää mitäkin strategiaa

Olet nyt nähnyt kolme tapaa välittää funktio parametrina ja saatat miettiä, milloin käyttää mitäkin. Jos tiedät, että käytät funktiota useammin kuin kerran, luo se normaalisti. Jos käytät sitä vain yhdessä paikassa, on yleensä parasta käyttää nimetöntä funktiota. Se, käytätkö fat arrow -funktiota vai perinteisempää `function`-syntaksia, on makuasia, mutta huomaat, että useimmat modernit kehittäjät suosivat `=>`.

---

## 🚀 Haaste

Osaatko selittää yhdessä lauseessa, mikä ero on funktioiden ja metodien välillä? Kokeile!

## Jälkikysely
[Jälkikysely](https://ff-quizzes.netlify.app)

## Kertaus ja itseopiskelu

Kannattaa [lukea lisää arrow-funktioista](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), sillä niitä käytetään yhä enemmän koodipohjissa. Harjoittele funktion kirjoittamista ja kirjoita se sitten uudelleen käyttäen tätä syntaksia.

## Tehtävä

[Hauskaa funktioiden parissa](assignment.md)

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäisellä kielellä tulee pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskääntämistä. Emme ole vastuussa tämän käännöksen käytöstä aiheutuvista väärinkäsityksistä tai virhetulkinnoista.