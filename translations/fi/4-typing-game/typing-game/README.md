<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e982871b8388c59c22a41b73b5fca70f",
  "translation_date": "2025-08-27T21:08:03+00:00",
  "source_file": "4-typing-game/typing-game/README.md",
  "language_code": "fi"
}
-->
# Pelin luominen tapahtumien avulla

## Ennakkokysely

[Ennakkokysely](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/21)

## Tapahtumapohjainen ohjelmointi

Kun luomme selainpohjaisen sovelluksen, tarjoamme käyttäjälle graafisen käyttöliittymän (GUI), jonka avulla hän voi olla vuorovaikutuksessa rakentamamme kanssa. Yleisin tapa olla vuorovaikutuksessa selaimen kanssa on klikkaaminen ja kirjoittaminen eri elementteihin. Kehittäjänä kohtaamme haasteen: emme tiedä, milloin käyttäjä suorittaa nämä toiminnot!

[Tapahtumapohjainen ohjelmointi](https://en.wikipedia.org/wiki/Event-driven_programming) on ohjelmointityyppi, jota tarvitsemme GUI:n luomiseen. Jos pilkomme tämän termin osiin, huomaamme, että ydin on sana **tapahtuma**. [Tapahtuma](https://www.merriam-webster.com/dictionary/event) määritellään Merriam-Websterin mukaan "joksikin, joka tapahtuu". Tämä kuvaa tilannettamme täydellisesti. Tiedämme, että jotain tulee tapahtumaan, johon haluamme reagoida koodilla, mutta emme tiedä, milloin se tapahtuu.

Tapa, jolla merkitsemme koodin osan, jonka haluamme suorittaa, on luoda funktio. Kun ajattelemme [proseduraalista ohjelmointia](https://en.wikipedia.org/wiki/Procedural_programming), funktiot suoritetaan tietyssä järjestyksessä. Sama pätee tapahtumapohjaiseen ohjelmointiin. Ero on siinä, **miten** funktiot kutsutaan.

Tapahtumien (napin painaminen, kirjoittaminen jne.) käsittelemiseksi rekisteröimme **tapahtumakuuntelijoita**. Tapahtumakuuntelija on funktio, joka odottaa tapahtuman tapahtumista ja suorittaa koodia vastauksena. Tapahtumakuuntelijat voivat päivittää käyttöliittymää, tehdä palvelinkutsuja tai mitä tahansa muuta, mitä käyttäjän toiminta vaatii. Lisäämme tapahtumakuuntelijan käyttämällä [addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)-metodia ja tarjoamalla suoritettavan funktion.

> **NOTE:** On syytä korostaa, että tapahtumakuuntelijoiden luomiseen on monia tapoja. Voit käyttää anonyymejä funktioita tai luoda nimettyjä. Voit käyttää erilaisia oikoteitä, kuten asettamalla `click`-ominaisuuden tai käyttämällä `addEventListener`-metodia. Harjoituksessamme keskitymme `addEventListener`-metodiin ja anonyymeihin funktioihin, koska se on todennäköisesti yleisin tekniikka, jota web-kehittäjät käyttävät. Se on myös joustavin, koska `addEventListener` toimii kaikille tapahtumille, ja tapahtuman nimi voidaan antaa parametrina.

### Yleisiä tapahtumia

Sovellusta luodessasi voit kuunnella [kymmeniä tapahtumia](https://developer.mozilla.org/docs/Web/Events). Käytännössä kaikki, mitä käyttäjä tekee sivulla, laukaisee tapahtuman, mikä antaa sinulle paljon valtaa varmistaa, että käyttäjä saa haluamasi kokemuksen. Onneksi tarvitset yleensä vain pienen osan tapahtumista. Tässä muutamia yleisiä (mukaan lukien kaksi, joita käytämme pelimme luomisessa):

- [click](https://developer.mozilla.org/docs/Web/API/Element/click_event): Käyttäjä klikkasi jotain, yleensä painiketta tai hyperlinkkiä
- [contextmenu](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event): Käyttäjä klikkasi hiiren oikeaa painiketta
- [select](https://developer.mozilla.org/docs/Web/API/Element/select_event): Käyttäjä valitsi tekstiä
- [input](https://developer.mozilla.org/docs/Web/API/Element/input_event): Käyttäjä syötti tekstiä

## Pelin luominen

Luomme pelin tutkiaksemme, miten tapahtumat toimivat JavaScriptissä. Pelimme testaa pelaajan kirjoitustaitoa, joka on yksi aliarvostetuimmista taidoista, joita kaikilla kehittäjillä tulisi olla. Meidän kaikkien tulisi harjoitella kirjoittamista! Pelin yleinen kulku näyttää tältä:

- Pelaaja klikkaa aloituspainiketta ja saa kirjoitettavakseen lainauksen
- Pelaaja kirjoittaa lainauksen mahdollisimman nopeasti tekstikenttään
  - Jokaisen sanan valmistuttua seuraava korostetaan
  - Jos pelaaja tekee kirjoitusvirheen, tekstikenttä muuttuu punaiseksi
  - Kun pelaaja suorittaa lainauksen, näytetään onnistumisviesti ja kulunut aika

Rakennetaan peli ja opitaan tapahtumista!

### Tiedostorakenne

Tarvitsemme yhteensä kolme tiedostoa: **index.html**, **script.js** ja **style.css**. Aloitetaan niiden luomisesta, jotta työskentely olisi helpompaa.

- Luo uusi kansio työllesi avaamalla konsoli tai terminaali ja suorittamalla seuraava komento:

```bash
# Linux or macOS
mkdir typing-game && cd typing-game

# Windows
md typing-game && cd typing-game
```

- Avaa Visual Studio Code

```bash
code .
```

- Lisää kansioon kolme tiedostoa Visual Studio Codessa seuraavilla nimillä:
  - index.html
  - script.js
  - style.css

## Käyttöliittymän luominen

Jos tarkastelemme vaatimuksia, tiedämme, että tarvitsemme HTML-sivullemme muutamia elementtejä. Tämä on vähän kuin resepti, jossa tarvitsemme ainesosia:

- Paikka, jossa näytetään käyttäjälle kirjoitettava lainaus
- Paikka, jossa näytetään viestejä, kuten onnistumisviesti
- Tekstikenttä kirjoittamista varten
- Aloituspainike

Jokaiselle näistä tarvitaan ID:t, jotta voimme käsitellä niitä JavaScriptissä. Lisäämme myös viittaukset luotaviin CSS- ja JavaScript-tiedostoihin.

Luo uusi tiedosto nimeltä **index.html**. Lisää seuraava HTML:

```html
<!-- inside index.html -->
<html>
<head>
  <title>Typing game</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Typing game!</h1>
  <p>Practice your typing skills with a quote from Sherlock Holmes. Click **start** to begin!</p>
  <p id="quote"></p> <!-- This will display our quote -->
  <p id="message"></p> <!-- This will display any status messages -->
  <div>
    <input type="text" aria-label="current word" id="typed-value" /> <!-- The textbox for typing -->
    <button type="button" id="start">Start</button> <!-- To start the game -->
  </div>
  <script src="script.js"></script>
</body>
</html>
```

### Sovelluksen käynnistäminen

On aina parasta kehittää iteratiivisesti ja tarkistaa, miltä asiat näyttävät. Käynnistetään sovellus. Visual Studio Codessa on upea laajennus nimeltä [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon), joka isännöi sovellustasi paikallisesti ja päivittää selaimen aina, kun tallennat.

- Asenna [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) seuraamalla linkkiä ja klikkaamalla **Install**
  - Selaimesi kehottaa sinua avaamaan Visual Studio Coden, ja Visual Studio Code kehottaa sinua suorittamaan asennuksen
  - Käynnistä Visual Studio Code uudelleen, jos sitä pyydetään
- Kun laajennus on asennettu, paina Visual Studio Codessa Ctrl-Shift-P (tai Cmd-Shift-P) avataksesi komentopaletti
- Kirjoita **Live Server: Open with Live Server**
  - Live Server alkaa isännöidä sovellustasi
- Avaa selain ja siirry osoitteeseen **https://localhost:5500**
- Näet nyt luomasi sivun!

Lisätään toiminnallisuutta.

## Lisää CSS

Kun HTML on luotu, lisätään CSS ydinmuotoilua varten. Meidän täytyy korostaa sana, jonka pelaajan tulisi kirjoittaa, ja värjätä tekstikenttä punaiseksi, jos kirjoitus on virheellinen. Teemme tämän kahdella luokalla.

Luo uusi tiedosto nimeltä **style.css** ja lisää seuraava syntaksi.

```css
/* inside style.css */
.highlight {
  background-color: yellow;
}

.error {
  background-color: lightcoral;
  border: red;
}
```

✅ CSS:n osalta voit asettaa sivusi ulkoasun haluamallasi tavalla. Käytä hetki aikaa ja tee sivusta houkuttelevampi:

- Valitse eri fontti
- Väritä otsikot
- Muuta elementtien kokoa

## JavaScript

Kun käyttöliittymä on luotu, keskitytään JavaScriptiin, joka tarjoaa logiikan. Jaamme tämän muutamaan vaiheeseen:

- [Määritä vakioarvot](../../../../4-typing-game/typing-game)
- [Tapahtumakuuntelija pelin aloittamiseen](../../../../4-typing-game/typing-game)
- [Tapahtumakuuntelija kirjoittamiseen](../../../../4-typing-game/typing-game)

Mutta ensin, luo uusi tiedosto nimeltä **script.js**.

### Lisää vakioarvot

Tarvitsemme muutamia asioita, jotka helpottavat ohjelmointia. Jälleen, kuten reseptissä, tässä on, mitä tarvitsemme:

- Taulukko, joka sisältää kaikki lainaukset
- Tyhjä taulukko, johon tallennetaan nykyisen lainauksen sanat
- Tila, jossa säilytetään pelaajan kirjoittaman sanan indeksi
- Aika, jolloin pelaaja klikkasi aloituspainiketta

Tarvitsemme myös viittaukset käyttöliittymäelementteihin:

- Tekstikenttä (**typed-value**)
- Lainauksen näyttö (**quote**)
- Viesti (**message**)

```javascript
// inside script.js
// all of our quotes
const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];
// store the list of words and the index of the word the player is currently typing
let words = [];
let wordIndex = 0;
// the starting time
let startTime = Date.now();
// page elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
```

✅ Lisää peliisi lisää lainauksia

> **NOTE:** Voimme hakea elementit koodissa milloin tahansa käyttämällä `document.getElementById`. Koska viittaamme näihin elementteihin säännöllisesti, vältämme kirjoitusvirheitä merkkijonoissa käyttämällä vakioita. Kehykset, kuten [Vue.js](https://vuejs.org/) tai [React](https://reactjs.org/), voivat auttaa sinua hallitsemaan koodin keskittämistä paremmin.

Katso minuutin mittainen video `const`, `let` ja `var` -muuttujien käytöstä

[![Muuttujatyypit](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Muuttujatyypit")

> 🎥 Klikkaa yllä olevaa kuvaa katsoaksesi videon muuttujista.

### Lisää aloituslogiikka

Pelin aloittamiseksi pelaaja klikkaa aloituspainiketta. Tietenkään emme tiedä, milloin hän klikkaa sitä. Tässä kohtaa [tapahtumakuuntelija](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) astuu kuvaan. Tapahtumakuuntelija antaa meidän kuunnella jotain tapahtumaa ja suorittaa koodia vastauksena. Meidän tapauksessamme haluamme suorittaa koodia, kun käyttäjä klikkaa aloituspainiketta.

Kun käyttäjä klikkaa **start**, meidän täytyy valita lainaus, asettaa käyttöliittymä ja aloittaa sanan ja ajan seuranta. Alla on JavaScript, joka sinun täytyy lisätä; käsittelemme sitä tarkemmin koodilohkon jälkeen.

```javascript
// at the end of script.js
document.getElementById('start').addEventListener('click', () => {
  // get a quote
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];
  // Put the quote into an array of words
  words = quote.split(' ');
  // reset the word index for tracking
  wordIndex = 0;

  // UI updates
  // Create an array of span elements so we can set a class
  const spanWords = words.map(function(word) { return `<span>${word} </span>`});
  // Convert into string and set as innerHTML on quote display
  quoteElement.innerHTML = spanWords.join('');
  // Highlight the first word
  quoteElement.childNodes[0].className = 'highlight';
  // Clear any prior messages
  messageElement.innerText = '';

  // Setup the textbox
  // Clear the textbox
  typedValueElement.value = '';
  // set focus
  typedValueElement.focus();
  // set the event handler

  // Start the timer
  startTime = new Date().getTime();
});
```

Käydään koodi läpi!

- Sanan seurannan asettaminen
  - [Math.floor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)- ja [Math.random](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random)-metodien avulla voimme valita satunnaisesti lainauksen `quotes`-taulukosta
  - Muunnamme `quote`-muuttujan `words`-taulukoksi, jotta voimme seurata pelaajan kirjoittamaa sanaa
  - `wordIndex` asetetaan arvoon 0, koska pelaaja aloittaa ensimmäisestä sanasta
- Käyttöliittymän asettaminen
  - Luodaan `spanWords`-taulukko, joka sisältää jokaisen sanan `span`-elementissä
    - Tämä mahdollistaa sanan korostamisen näytöllä
  - `join`-metodilla luodaan merkkijono, jota käytetään `quoteElement`-elementin `innerHTML`-arvon päivittämiseen
    - Tämä näyttää lainauksen pelaajalle
  - Asetetaan ensimmäisen `span`-elementin `className` arvoksi `highlight`, jotta se korostuu keltaiseksi
  - Tyhjennetään `messageElement` asettamalla `innerText` arvoksi `''`
- Tekstikentän asettaminen
  - Tyhjennetään nykyinen `value` `typedValueElement`-elementistä
  - Asetetaan `focus` `typedValueElement`-elementtiin
- Ajastimen käynnistäminen kutsumalla `getTime`

### Lisää kirjoituslogiikka

Kun pelaaja kirjoittaa, `input`-tapahtuma laukaistaan. Tämä tapahtumakuuntelija tarkistaa, kirjoittaako pelaaja sanan oikein, ja käsittelee pelin nykytilan. Lisää **script.js**-tiedoston loppuun seuraava koodi. Käsittelemme sitä tarkemmin koodilohkon jälkeen.

```javascript
// at the end of script.js
typedValueElement.addEventListener('input', () => {
  // Get the current word
  const currentWord = words[wordIndex];
  // get the current value
  const typedValue = typedValueElement.value;

  if (typedValue === currentWord && wordIndex === words.length - 1) {
    // end of sentence
    // Display success
    const elapsedTime = new Date().getTime() - startTime;
    const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
    messageElement.innerText = message;
  } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
    // end of word
    // clear the typedValueElement for the new word
    typedValueElement.value = '';
    // move to the next word
    wordIndex++;
    // reset the class name for all elements in quote
    for (const wordElement of quoteElement.childNodes) {
      wordElement.className = '';
    }
    // highlight the new word
    quoteElement.childNodes[wordIndex].className = 'highlight';
  } else if (currentWord.startsWith(typedValue)) {
    // currently correct
    // highlight the next word
    typedValueElement.className = '';
  } else {
    // error state
    typedValueElement.className = 'error';
  }
});
```

Käydään koodi läpi! Aloitamme hakemalla nykyisen sanan ja pelaajan tähän mennessä kirjoittaman arvon. Sitten käytämme "vesiputouslogiikkaa", jossa tarkistamme, onko lainaus valmis, sana valmis, sana oikein vai onko kyseessä virhe.

- Lainaus on valmis, jos `typedValue` on yhtä kuin `currentWord` ja `wordIndex` on yhtä kuin `words`-taulukon pituus miinus yksi
  - Lasketaan `elapsedTime` vähentämällä `startTime` nykyisestä ajasta
  - Jaetaan `elapsedTime` luvulla 1 000, jotta se muunnetaan millisekunneista sekunneiksi
  - Näytetään onnistumisviesti
- Sana on valmis, jos `typedValue` päättyy välilyöntiin (sanan loppu) ja `typedValue` on yhtä kuin `currentWord`
  - Asetetaan `typedElement`-elementin `value` arvoksi `''`, jotta seuraava sana voidaan kirjoittaa
  - Kasvatetaan `wordIndex`-arvoa siirtyäksemme seuraavaan sanaan
  - Käydään läpi kaikki `quoteElement`-elementin `childNodes`-solmut ja asetetaan niiden `className` arvoksi `''`, jotta ne palautuvat oletusnäkymään
  - Asetetaan nykyisen sanan `className` arvoksi `highlight`, jotta se merkitään seuraavaksi kirjoitettavaksi sanaksi
- Sana on tällä hetkellä kirjoitettu oikein (mutta ei valmis), jos `currentWord` alkaa `typedValue`-arvolla
  - Varmistetaan, että `typedValueElement` näkyy oletuksena tyhjentämällä `className`
- Jos pääsemme tähän asti, kyseessä on virhe
  - Asetetaan `typedValueElement`-elementin `className` arvoksi `error`

## Testaa sovellustasi

Olet päässyt loppuun! Viimeinen vaihe on varmistaa, että sovelluksemme toimii. Kokeile sitä! Älä huoli, jos virheitä ilmenee; **kaikilla kehittäjillä** on virheitä. Tutki viestejä ja debuggaa tarvittaessa.

Klikkaa **start** ja ala kirjoittaa! Sen pitäisi näyttää hieman samalta kuin aiemmin näkemämme animaatio.

![Pelin animaatio toiminnassa](../../../../4-typing-game/images/demo.gif)

---

## 🚀 Haaste

Lisää toiminnallisuutta

- Poista `input`-tapahtumakuuntelija käytöstä, kun peli on valmis, ja ota se uudelleen käyttöön, kun painiketta klikataan
- Poista tekstikenttä käytöstä, kun pelaaja suorittaa lainauksen
- Näytä modaalidialogi onnistumisviestillä
- Tallenna huippupisteet käyttämällä [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)

## Luentojälkeinen kysely

[Luentojälkeinen kysely](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/22)

## Kertaus ja itseopiskelu

Lue lisää [kaikista tapahtumista](https://developer.mozilla.org/docs/Web/Events), jotka ovat kehittäjän käytettävissä verkkoselaimen kautta, ja pohdi tilanteita, joissa käyttäisit kutakin niistä.

## Tehtävä

[Luo uusi näppäimistöpeli](assignment.md)

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.