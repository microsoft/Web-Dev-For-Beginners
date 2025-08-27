<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b4612bbb9ace984f374fcc80e3e035ad",
  "translation_date": "2025-08-27T20:14:15+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "fi"
}
-->
# JavaScriptin perusteet: Metodit ja funktiot

![JavaScript Basics - Functions](../../../../translated_images/webdev101-js-functions.be049c4726e94f8b7605c36330ac42eeb5cd8ed02bcdd60fdac778174d6cb865.fi.png)
> Sketchnote: [Tomomi Imura](https://twitter.com/girlie_mac)

## Ennen luentoa - Kysely
[Ennen luentoa - kysely](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/9)

Kun ajattelemme koodin kirjoittamista, haluamme aina varmistaa, että koodi on luettavaa. Vaikka tämä kuulostaa vastoin intuitiota, koodia luetaan paljon useammin kuin sitä kirjoitetaan. Yksi keskeinen työkalu kehittäjän työkalupakissa ylläpidettävän koodin varmistamiseksi on **funktio**.

[![Metodit ja funktiot](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Metodit ja funktiot")

> 🎥 Klikkaa yllä olevaa kuvaa katsoaksesi videon metodeista ja funktioista.

> Voit käydä tämän oppitunnin läpi myös [Microsoft Learnissa](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon)!

## Funktiot

Funktio on pohjimmiltaan koodilohko, jonka voimme suorittaa tarvittaessa. Tämä on täydellinen ratkaisu tilanteisiin, joissa meidän täytyy suorittaa sama tehtävä useita kertoja; sen sijaan, että kopioisimme logiikan useisiin paikkoihin (mikä vaikeuttaisi sen päivittämistä myöhemmin), voimme keskittää sen yhteen paikkaan ja kutsua sitä aina tarvittaessa – voit jopa kutsua funktioita toisista funktioista!

Yhtä tärkeää on antaa funktiolle nimi. Vaikka tämä saattaa tuntua vähäpätöiseltä, nimi tarjoaa nopean tavan dokumentoida koodin osan. Voit ajatella sitä kuin painikkeen etikettinä. Jos painan painiketta, jossa lukee "Peruuta ajastin", tiedän, että se pysäyttää kellon.

## Funktion luominen ja kutsuminen

Funktion syntaksi näyttää seuraavalta:

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

Aina kun haluamme kutsua (tai suorittaa) funktiomme, käytämme funktion nimeä ja perään `()`. On hyvä huomata, että funktio voidaan määritellä ennen tai jälkeen sen kutsumisen; JavaScript-kääntäjä löytää sen puolestasi.

```javascript
// calling our function
displayGreeting();
```

> **NOTE:** On olemassa erityinen funktiotyyppi, jota kutsutaan **metodiksi**, ja olet jo käyttänyt sitä! Itse asiassa näimme tämän esimerkissämme, kun käytimme `console.log`. Metodin ja funktion ero on siinä, että metodi on liitetty objektiin (esimerkissämme `console`), kun taas funktio on irrallinen. Monet kehittäjät käyttävät näitä termejä kuitenkin keskenään.

### Funktion parhaat käytännöt

Kun luot funktioita, pidä mielessä muutama hyvä käytäntö:

- Käytä aina kuvaavia nimiä, jotta tiedät, mitä funktio tekee
- Käytä **camelCase**-tyyliä yhdistääksesi sanoja
- Pidä funktiot keskittyneinä tiettyyn tehtävään

## Tiedon välittäminen funktiolle

Jotta funktio olisi monikäyttöisempi, haluat usein välittää sille tietoa. Jos tarkastelemme yllä olevaa `displayGreeting`-esimerkkiä, se näyttää aina **Hello, world!**. Ei kovin hyödyllinen funktio. Jos haluamme tehdä siitä hieman joustavamman, kuten antaa jonkun määrittää tervehdyksen kohteen nimen, voimme lisätä **parametrin**. Parametri (joskus myös **argumentti**) on lisätieto, joka lähetetään funktiolle.

Parametrit luetellaan määrittelyosassa sulkujen sisällä ja erotetaan pilkuilla, kuten näin:

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

Kun haluamme kutsua funktiomme ja välittää parametrin, määritämme sen sulkeisiin.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

## Oletusarvot

Voimme tehdä funktiostamme vielä joustavamman lisäämällä enemmän parametreja. Mutta entä jos emme halua vaatia kaikkien arvojen määrittämistä? Pysytään tervehdyksen esimerkissä: voisimme jättää nimen pakolliseksi (meidän täytyy tietää, ketä tervehdimme), mutta haluamme sallia tervehdyksen mukauttamisen haluttaessa. Jos joku ei halua mukauttaa sitä, tarjoamme oletusarvon. Oletusarvon määrittämiseksi parametrille asetamme sen samalla tavalla kuin määrittäisimme arvon muuttujalle - `parameterName = 'defaultValue'`. Tässä on esimerkki:

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

Tähän asti rakentamamme funktiot tulostavat aina [konsoliin](https://developer.mozilla.org/docs/Web/API/console). Joskus tämä voi olla juuri sitä, mitä haluamme, erityisesti kun luomme funktioita, jotka kutsuvat muita palveluita. Mutta entä jos haluan luoda apufunktion, joka suorittaa laskelman ja palauttaa arvon, jotta voin käyttää sitä muualla?

Tämä onnistuu käyttämällä **paluuarvoa**. Paluuarvo palautetaan funktiosta ja voidaan tallentaa muuttujaan samalla tavalla kuin voisimme tallentaa merkkijonon tai numeron.

Jos funktio palauttaa jotain, käytetään avainsanaa `return`. `return`-avainsana odottaa arvoa tai viitettä siihen, mitä palautetaan, kuten näin:

```javascript
return myVariable;
```  

Voisimme luoda funktion, joka luo tervehdyksen ja palauttaa sen arvon kutsujalle.

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

Kun kutsumme tätä funktiota, tallennamme arvon muuttujaan. Tämä on hyvin samanlaista kuin jos määrittäisimme muuttujalle staattisen arvon (kuten `const name = 'Christopher'`).

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

## Funktiot funktioiden parametreina

Kun etenet ohjelmointitaidoissasi, tulet kohtaamaan funktioita, jotka hyväksyvät muita funktioita parametreina. Tämä kätevä temppu on yleinen, kun emme tiedä, milloin jokin tapahtuu tai valmistuu, mutta tiedämme, että meidän täytyy suorittaa jokin operaatio vastauksena.

Esimerkiksi [setTimeout](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) aloittaa ajastimen ja suorittaa koodin, kun se valmistuu. Meidän täytyy kertoa sille, mitä koodia haluamme suorittaa. Kuulostaa täydelliseltä tehtävältä funktiolle!

Jos suoritat alla olevan koodin, näet viestin **3 sekuntia kulunut** kolmen sekunnin kuluttua.

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

### Nimettömät funktiot

Katsotaanpa uudelleen, mitä olemme rakentaneet. Luomme funktion, jolla on nimi, mutta jota käytetään vain kerran. Kun sovelluksemme monimutkaistuu, voimme huomata luovamme paljon funktioita, joita käytetään vain kerran. Tämä ei ole ihanteellista. Kuten käy ilmi, meidän ei aina tarvitse antaa funktiolle nimeä!

Kun välitämme funktion parametrina, voimme ohittaa sen etukäteen luomisen ja sen sijaan rakentaa sen osana parametria. Käytämme samaa `function`-avainsanaa, mutta rakennamme sen parametrina.

Kirjoitetaan yllä oleva koodi uudelleen käyttämällä nimetöntä funktiota:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

Jos suoritat uuden koodimme, huomaat saavasi samat tulokset. Olemme luoneet funktion, mutta emme joutuneet antamaan sille nimeä!

### Fat arrow -funktiot

Monissa ohjelmointikielissä (mukaan lukien JavaScript) on yleinen oikotie, jota kutsutaan **arrow**- tai **fat arrow** -funktioksi. Se käyttää erityistä merkintää `=>`, joka näyttää nuolelta – tästä nimi! Käyttämällä `=>` voimme ohittaa `function`-avainsanan.

Kirjoitetaan koodimme vielä kerran uudelleen käyttämällä fat arrow -funktiota:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

### Milloin käyttää mitäkin strategiaa

Olet nyt nähnyt kolme tapaa välittää funktio parametrina ja saatat miettiä, milloin käyttää mitäkin. Jos tiedät, että käytät funktiota useammin kuin kerran, luo se normaalisti. Jos käytät sitä vain yhdessä paikassa, on yleensä parasta käyttää nimetöntä funktiota. Se, käytätkö fat arrow -funktiota vai perinteisempää `function`-syntaksia, on sinusta kiinni, mutta huomaat, että useimmat modernit kehittäjät suosivat `=>`.

---

## 🚀 Haaste

Osaatko selittää yhdessä lauseessa eron funktioiden ja metodien välillä? Kokeile!

## Luentojälkeinen kysely
[Luentojälkeinen kysely](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/10)

## Kertaus ja itseopiskelu

Kannattaa [lukea lisää arrow-funktioista](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), sillä niitä käytetään yhä enemmän koodipohjissa. Harjoittele funktion kirjoittamista ja kirjoita se sitten uudelleen tällä syntaksilla.

## Tehtävä

[Hauskaa funktioiden parissa](assignment.md)

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.