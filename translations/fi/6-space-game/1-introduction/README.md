<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "979cfcce2413a87d9e4c67eb79234bc3",
  "translation_date": "2025-08-29T00:42:15+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "fi"
}
-->
# Rakenna avaruuspeli Osa 1: Johdanto

![video](../../../../6-space-game/images/pewpew.gif)

## Ennakkotesti

[Ennakkotesti](https://ff-quizzes.netlify.app/web/quiz/29)

### Perintä ja koostaminen pelikehityksessä

Aiemmissa oppitunneissa ei ollut juurikaan tarvetta huolehtia sovellusten suunnitteluarkkitehtuurista, koska projektit olivat hyvin pienimuotoisia. Kuitenkin, kun sovelluksesi kasvavat kooltaan ja laajuudeltaan, arkkitehtuuriset päätökset tulevat tärkeämmiksi. JavaScriptissä on kaksi pääasiallista lähestymistapaa suurempien sovellusten luomiseen: *koostaminen* tai *perintä*. Molemmilla on omat hyvät ja huonot puolensa, mutta selitetään ne pelin kontekstissa.

✅ Yksi tunnetuimmista ohjelmointikirjoista käsittelee [suunnittelumalleja](https://en.wikipedia.org/wiki/Design_Patterns).

Pelissä sinulla on `pelin objektit`, jotka ovat objekteja, jotka näkyvät näytöllä. Tämä tarkoittaa, että niillä on sijainti koordinaatistossa, joka määritellään `x`- ja `y`-koordinaateilla. Kun kehität peliä, huomaat, että kaikilla pelin objekteilla on tiettyjä yhteisiä ominaisuuksia, jotka ovat yleisiä kaikille peleille, kuten:

- **sijaintipohjaisia** Suurin osa, ellei kaikki, pelin elementit perustuvat sijaintiin. Tämä tarkoittaa, että niillä on sijainti, `x` ja `y`.
- **liikkuvia** Nämä ovat objekteja, jotka voivat siirtyä uuteen sijaintiin. Tyypillisesti tämä on sankari, hirviö tai NPC (ei-pelaajahahmo), mutta ei esimerkiksi staattinen objekti, kuten puu.
- **itse tuhoutuvia** Nämä objektit ovat olemassa vain tietyn ajan ennen kuin ne merkitään poistettaviksi. Yleensä tämä esitetään `dead`- tai `destroyed`-booleanilla, joka ilmoittaa pelimoottorille, että tätä objektia ei enää tarvitse renderöidä.
- **viiveellä** 'Viive' on tyypillinen ominaisuus lyhytikäisille objekteille. Tyypillinen esimerkki on teksti tai graafinen efekti, kuten räjähdys, joka näkyy vain muutaman millisekunnin ajan.

✅ Mieti peliä, kuten Pac-Man. Voitko tunnistaa yllä mainitut neljä objektityyppiä tässä pelissä?

### Käyttäytymisen ilmaiseminen

Kaikki edellä mainitut ovat käyttäytymisiä, joita pelin objektit voivat omata. Mutta miten nämä koodataan? Voimme ilmaista nämä käyttäytymiset metodeina, jotka liittyvät joko luokkiin tai objekteihin.

**Luokat**

Ajatuksena on käyttää `luokkia` yhdessä `perinnän` kanssa lisätäksemme tiettyä käyttäytymistä luokkaan.

✅ Perintä on tärkeä käsite ymmärtää. Lue lisää [MDN:n artikkelista perinnästä](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Koodilla ilmaistuna pelin objekti voi tyypillisesti näyttää tältä:

```javascript

//set up the class GameObject
class GameObject {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }
}

//this class will extend the GameObject's inherent class properties
class Movable extends GameObject {
  constructor(x,y, type) {
    super(x,y, type)
  }

//this movable object can be moved on the screen
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}

//this is a specific class that extends the Movable class, so it can take advantage of all the properties that it inherits
class Hero extends Movable {
  constructor(x,y) {
    super(x,y, 'Hero')
  }
}

//this class, on the other hand, only inherits the GameObject properties
class Tree extends GameObject {
  constructor(x,y) {
    super(x,y, 'Tree')
  }
}

//a hero can move...
const hero = new Hero();
hero.moveTo(5,5);

//but a tree cannot
const tree = new Tree();
```

✅ Käytä muutama minuutti miettiäksesi, miten Pac-Manin sankari (esimerkiksi Inky, Pinky tai Blinky) kirjoitettaisiin JavaScriptillä.

**Koostaminen**

Toinen tapa käsitellä objektien perintää on käyttää *koostamista*. Tällöin objektit ilmaisevat käyttäytymisensä näin:

```javascript
//create a constant gameObject
const gameObject = {
  x: 0,
  y: 0,
  type: ''
};

//...and a constant movable
const movable = {
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}
//then the constant movableObject is composed of the gameObject and movable constants
const movableObject = {...gameObject, ...movable};

//then create a function to create a new Hero who inherits the movableObject properties
function createHero(x, y) {
  return {
    ...movableObject,
    x,
    y,
    type: 'Hero'
  }
}
//...and a static object that inherits only the gameObject properties
function createStatic(x, y, type) {
  return {
    ...gameObject
    x,
    y,
    type
  }
}
//create the hero and move it
const hero = createHero(10,10);
hero.moveTo(5,5);
//and create a static tree which only stands around
const tree = createStatic(0,0, 'Tree'); 
```

**Minkä mallin valitsen?**

Valinta on sinun. JavaScript tukee molempia paradigmoja.

--

Toinen pelikehityksessä yleinen malli käsittelee pelin käyttökokemuksen ja suorituskyvyn hallintaa.

## Pub/sub-malli

✅ Pub/Sub tarkoittaa 'julkaise-tilaa'

Tämä malli käsittelee ajatusta, että sovelluksesi eri osien ei pitäisi tietää toisistaan. Miksi näin? Tämä tekee yleiskuvan hahmottamisesta helpompaa, jos eri osat ovat erillään. Se myös helpottaa käyttäytymisen muuttamista tarvittaessa. Miten tämä saavutetaan? Tämä tehdään ottamalla käyttöön seuraavat käsitteet:

- **viesti**: Viesti on yleensä tekstijono, johon voi liittyä valinnainen lisätieto (data, joka selventää, mistä viestissä on kyse). Tyypillinen viesti pelissä voi olla `KEY_PRESSED_ENTER`.
- **julkaisija**: Tämä elementti *julkaisee* viestin ja lähettää sen kaikille tilaajille.
- **tilaaja**: Tämä elementti *kuuntelee* tiettyjä viestejä ja suorittaa jonkin tehtävän vastaanotettuaan viestin, kuten esimerkiksi laserin ampumisen.

Toteutus on kooltaan melko pieni, mutta se on erittäin tehokas malli. Näin se voidaan toteuttaa:

```javascript
//set up an EventEmitter class that contains listeners
class EventEmitter {
  constructor() {
    this.listeners = {};
  }
//when a message is received, let the listener to handle its payload
  on(message, listener) {
    if (!this.listeners[message]) {
      this.listeners[message] = [];
    }
    this.listeners[message].push(listener);
  }
//when a message is sent, send it to a listener with some payload
  emit(message, payload = null) {
    if (this.listeners[message]) {
      this.listeners[message].forEach(l => l(message, payload))
    }
  }
}

```

Yllä olevaa koodia voidaan käyttää hyvin pienessä toteutuksessa:

```javascript
//set up a message structure
const Messages = {
  HERO_MOVE_LEFT: 'HERO_MOVE_LEFT'
};
//invoke the eventEmitter you set up above
const eventEmitter = new EventEmitter();
//set up a hero
const hero = createHero(0,0);
//let the eventEmitter know to watch for messages pertaining to the hero moving left, and act on it
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});

//set up the window to listen for the keyup event, specifically if the left arrow is hit, emit a message to move the hero left
window.addEventListener('keyup', (evt) => {
  if (evt.key === 'ArrowLeft') {
    eventEmitter.emit(Messages.HERO_MOVE_LEFT)
  }
});
```

Yllä yhdistämme näppäimistötapahtuman, `ArrowLeft`, ja lähetämme `HERO_MOVE_LEFT`-viestin. Kuuntelemme tätä viestiä ja siirrämme `sankaria` sen seurauksena. Tämän mallin vahvuus on, että tapahtumankuuntelija ja sankari eivät tiedä toisistaan. Voit uudelleenmäärittää `ArrowLeft`-näppäimen `A`-näppäimeksi. Lisäksi olisi mahdollista tehdä jotain täysin erilaista `ArrowLeft`-näppäimellä tekemällä muutamia muokkauksia eventEmitterin `on`-funktioon:

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

Kun pelisi kasvaa monimutkaisemmaksi, tämä malli pysyy yhtä yksinkertaisena ja koodisi pysyy siistinä. On erittäin suositeltavaa omaksua tämä malli.

---

## 🚀 Haaste

Mieti, miten pub-sub-malli voi parantaa peliä. Mitkä osat lähettäisivät tapahtumia, ja miten pelin tulisi reagoida niihin? Nyt on tilaisuutesi olla luova ja miettiä uutta peliä ja sen osien käyttäytymistä.

## Jälkitesti

[Jälkitesti](https://ff-quizzes.netlify.app/web/quiz/30)

## Kertaus ja itseopiskelu

Lue lisää Pub/Sub-mallista [tutustumalla siihen](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Tehtävä

[Suunnittele peli](assignment.md)

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.