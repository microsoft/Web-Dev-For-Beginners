<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "862f7f2ef320f6f8950fae379e6ece45",
  "translation_date": "2025-10-23T00:42:20+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "fi"
}
-->
# Rakenna avaruuspeli Osa 1: Johdanto

![Avaruuspeli-animaatio, joka näyttää pelin kulkua](../../../../6-space-game/images/pewpew.gif)

Aivan kuten NASAn lennonjohto koordinoi useita järjestelmiä avaruuslennon aikana, aiomme rakentaa avaruuspelin, joka havainnollistaa, kuinka ohjelman eri osat voivat toimia saumattomasti yhdessä. Luodessasi jotain, mitä voit oikeasti pelata, opit keskeisiä ohjelmointikonsepteja, jotka pätevät mihin tahansa ohjelmistoprojektiin.

Tutustumme kahteen perustavanlaatuiseen tapaan järjestää koodia: perintä ja koostaminen. Nämä eivät ole vain akateemisia käsitteitä – ne ovat samoja malleja, jotka ohjaavat kaikkea videopeleistä pankkijärjestelmiin. Toteutamme myös viestintäjärjestelmän nimeltä pub/sub, joka toimii kuten avaruusalusten viestintäverkostot, mahdollistaen eri komponenttien tiedon jakamisen ilman riippuvuuksia.

Tämän sarjan lopussa ymmärrät, kuinka rakentaa sovelluksia, jotka voivat laajentua ja kehittyä – olipa kyseessä pelien, verkkosovellusten tai minkä tahansa muun ohjelmistojärjestelmän kehittäminen.

## Ennen luentoa -kysely

[Ennen luentoa -kysely](https://ff-quizzes.netlify.app/web/quiz/29)

## Perintä ja koostaminen pelikehityksessä

Kun projektit kasvavat monimutkaisemmiksi, koodin järjestäminen muuttuu kriittiseksi. Se, mikä alkaa yksinkertaisena skriptinä, voi muuttua vaikeasti ylläpidettäväksi ilman asianmukaista rakennetta – aivan kuten Apollo-lennot vaativat huolellista koordinointia tuhansien komponenttien välillä.

Tutustumme kahteen perustavanlaatuiseen tapaan järjestää koodia: perintä ja koostaminen. Molemmilla on omat etunsa, ja molempien ymmärtäminen auttaa valitsemaan oikean lähestymistavan eri tilanteisiin. Havainnollistamme näitä käsitteitä avaruuspelimme kautta, jossa sankarien, vihollisten, tehosteiden ja muiden objektien on toimittava tehokkaasti yhdessä.

✅ Yksi kuuluisimmista ohjelmointikirjoista käsittelee [suunnittelumalleja](https://en.wikipedia.org/wiki/Design_Patterns).

Missä tahansa pelissä on `pelin objekteja` – vuorovaikutteisia elementtejä, jotka täyttävät pelimaailman. Sankarit, viholliset, tehosteet ja visuaaliset efektit ovat kaikki pelin objekteja. Jokainen sijaitsee tietyissä näytön koordinaateissa käyttäen `x`- ja `y`-arvoja, aivan kuten pisteiden sijoittaminen koordinaatistoon.

Huolimatta visuaalisista eroista, näillä objekteilla on usein yhteisiä peruskäyttäytymisiä:

- **Ne sijaitsevat jossain** – Jokaisella objektilla on x- ja y-koordinaatit, jotta peli tietää, mihin se piirretään
- **Monet voivat liikkua** – Sankarit juoksevat, viholliset jahtaavat, luodit lentävät ruudun poikki
- **Niillä on elinkaari** – Jotkut pysyvät ikuisesti, toiset (kuten räjähdykset) ilmestyvät hetkeksi ja katoavat
- **Ne reagoivat asioihin** – Kun objektit törmäävät, tehosteet kerätään, elämänpalkit päivittyvät

✅ Mieti peliä kuten Pac-Man. Voitko tunnistaa neljä yllä mainittua objektityyppiä tässä pelissä?

### Käyttäytymisen ilmaiseminen koodin kautta

Nyt kun ymmärrät pelin objektien jakamat yhteiset käyttäytymiset, tutkitaan, kuinka nämä käyttäytymiset voidaan toteuttaa JavaScriptissä. Objektin käyttäytymistä voidaan ilmaista metodeilla, jotka liitetään joko luokkiin tai yksittäisiin objekteihin, ja valittavana on useita lähestymistapoja.

**Luokkapohjainen lähestymistapa**

Luokat ja perintä tarjoavat jäsennellyn tavan järjestää pelin objekteja. Kuten Carl Linnaeuksen kehittämä taksonominen luokittelujärjestelmä, aloitat perusluokalla, joka sisältää yhteiset ominaisuudet, ja luot sitten erikoistuneita luokkia, jotka perivät nämä perusominaisuudet ja lisäävät erityisiä kykyjä.

✅ Perintä on tärkeä käsite ymmärtää. Lue lisää [MDN:n artikkelista perinnästä](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Näin voit toteuttaa pelin objektit luokkien ja perinnän avulla:

```javascript
// Step 1: Create the base GameObject class
class GameObject {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }
}
```

**Puretaan tämä vaihe vaiheelta:**
- Luomme perusmallin, jota jokainen pelin objekti voi käyttää
- Konstruktori tallentaa, missä objekti sijaitsee (`x`, `y`) ja minkä tyyppinen se on
- Tämä muodostaa perustan, jolle kaikki pelin objektit rakentuvat

```javascript
// Step 2: Add movement capability through inheritance
class Movable extends GameObject {
  constructor(x, y, type) {
    super(x, y, type); // Call parent constructor
  }

  // Add the ability to move to a new position
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}
```

**Yllä olevassa olemme:**
- **Laajentaneet** GameObject-luokkaa lisätäksemme liikkumistoiminnallisuuden
- **Kutsuneet** vanhemman konstruktorin käyttämällä `super()`-metodia perittyjen ominaisuuksien alustamiseen
- **Lisänneet** `moveTo()`-metodin, joka päivittää objektin sijainnin

```javascript
// Step 3: Create specific game object types
class Hero extends Movable {
  constructor(x, y) {
    super(x, y, 'Hero'); // Set type automatically
  }
}

class Tree extends GameObject {
  constructor(x, y) {
    super(x, y, 'Tree'); // Trees don't need movement
  }
}

// Step 4: Use your game objects
const hero = new Hero(0, 0);
hero.moveTo(5, 5); // Hero can move!

const tree = new Tree(10, 15);
// tree.moveTo() would cause an error - trees can't move
```

**Näiden käsitteiden ymmärtäminen:**
- **Luo** erikoistuneita objektityyppejä, jotka perivät sopivat käyttäytymiset
- **Havainnollistaa**, kuinka perintä mahdollistaa valikoivan ominaisuuksien sisällyttämisen
- **Näyttää**, että sankarit voivat liikkua, kun taas puut pysyvät paikallaan
- **Kuvastaa**, kuinka luokkahierarkia estää sopimattomat toiminnot

✅ Käytä muutama minuutti miettiäksesi uudelleen Pac-Manin sankaria (esimerkiksi Inky, Pinky tai Blinky) ja kuinka se kirjoitettaisiin JavaScriptissä.

**Koostamislähestymistapa**

Koostaminen noudattaa modulaarista suunnittelufilosofiaa, aivan kuten insinöörit suunnittelevat avaruusaluksia vaihdettavilla komponenteilla. Sen sijaan, että perittäisiin vanhemmalta luokalta, yhdistetään tiettyjä käyttäytymisiä luodakseen objekteja, joilla on juuri ne ominaisuudet, joita ne tarvitsevat. Tämä lähestymistapa tarjoaa joustavuutta ilman jäykkiä hierarkkisia rajoitteita.

```javascript
// Step 1: Create base behavior objects
const gameObject = {
  x: 0,
  y: 0,
  type: ''
};

const movable = {
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
};
```

**Tämä koodi tekee seuraavaa:**
- **Määrittelee** perus `gameObject`-objektin, jossa on sijainti- ja tyyppiominaisuudet
- **Luo** erillisen `movable`-käyttäytymisobjektin, jossa on liikkumistoiminnallisuus
- **Erottaa** vastuut pitämällä sijaintitiedot ja liikkumislogiikan erillään

```javascript
// Step 2: Compose objects by combining behaviors
const movableObject = { ...gameObject, ...movable };

// Step 3: Create factory functions for different object types
function createHero(x, y) {
  return {
    ...movableObject,
    x,
    y,
    type: 'Hero'
  };
}

function createStatic(x, y, type) {
  return {
    ...gameObject,
    x,
    y,
    type
  };
}
```

**Yllä olevassa olemme:**
- **Yhdistäneet** perusobjektin ominaisuudet ja liikkumiskäyttäytymisen spread-syntaksilla
- **Luoneet** tehdasfunktioita, jotka palauttavat räätälöityjä objekteja
- **Mahdollistaneet** joustavan objektien luomisen ilman jäykkiä luokkahierarkioita
- **Antaneet** objekteille juuri ne käyttäytymiset, joita ne tarvitsevat

```javascript
// Step 4: Create and use your composed objects
const hero = createHero(10, 10);
hero.moveTo(5, 5); // Works perfectly!

const tree = createStatic(0, 0, 'Tree');
// tree.moveTo() is undefined - no movement behavior was composed
```

**Tärkeät asiat muistaa:**
- **Koostaa** objekteja sekoittamalla käyttäytymisiä perimisen sijaan
- **Tarjoaa** enemmän joustavuutta kuin jäykät perintähierarkiat
- **Mahdollistaa** objekteille juuri niiden tarvitsemat ominaisuudet
- **Käyttää** modernia JavaScriptin spread-syntaksia siistiin objektien yhdistämiseen 
```

**Which Pattern Should You Choose?**

> 💡 **Pro Tip**: Both patterns have their place in modern JavaScript development. Classes work well for clearly defined hierarchies, while composition shines when you need maximum flexibility.
> 
**Here's when to use each approach:**
- **Choose** inheritance when you have clear "is-a" relationships (a Hero *is-a* Movable object)
- **Select** composition when you need "has-a" relationships (a Hero *has* movement abilities)
- **Consider** your team's preferences and project requirements
- **Remember** that you can mix both approaches in the same application

## Communication Patterns: The Pub/Sub System

As applications grow complex, managing communication between components becomes challenging. The publish-subscribe pattern (pub/sub) solves this problem using principles similar to radio broadcasting – one transmitter can reach multiple receivers without knowing who's listening.

Consider what happens when a hero takes damage: the health bar updates, sound effects play, visual feedback appears. Rather than coupling the hero object directly to these systems, pub/sub allows the hero to broadcast a "damage taken" message. Any system that needs to respond can subscribe to this message type and react accordingly.

✅ **Pub/Sub** stands for 'publish-subscribe'

### Understanding the Pub/Sub Architecture

The pub/sub pattern keeps different parts of your application loosely coupled, meaning they can work together without being directly dependent on each other. This separation makes your code more maintainable, testable, and flexible to changes.

**The key players in pub/sub:**
- **Messages** – Simple text labels like `'PLAYER_SCORED'` that describe what happened (plus any extra info)
- **Publishers** – The objects that shout out "Something happened!" to anyone who's listening
- **Subscribers** – The objects that say "I care about that event" and react when it happens
- **Event System** – The middleman that makes sure messages get to the right listeners

### Building an Event System

Let's create a simple but powerful event system that demonstrates these concepts:

```javascript
// Step 1: Create the EventEmitter class
class EventEmitter {
  constructor() {
    this.listeners = {}; // Store all event listeners
  }
  
  // Register a listener for a specific message type
  on(message, listener) {
    if (!this.listeners[message]) {
      this.listeners[message] = [];
    }
    this.listeners[message].push(listener);
  }
  
  // Send a message to all registered listeners
  emit(message, payload = null) {
    if (this.listeners[message]) {
      this.listeners[message].forEach(listener => {
        listener(message, payload);
      });
    }
  }
}
```

**Puretaan, mitä tässä tapahtuu:**
- **Luo** keskeisen tapahtumien hallintajärjestelmän yksinkertaisella luokalla
- **Tallentaa** kuuntelijat objektiin, joka on järjestetty viestityypin mukaan
- **Rekisteröi** uusia kuuntelijoita `on()`-metodilla
- **Lähettää** viestejä kaikille kiinnostuneille kuuntelijoille `emit()`-metodilla
- **Tukee** valinnaisia tietopaketteja olennaisen tiedon välittämiseksi

### Kaiken yhdistäminen: Käytännön esimerkki

Katsotaanpa, miten tämä toimii käytännössä! Rakennamme yksinkertaisen liikkumisjärjestelmän, joka näyttää, kuinka siisti ja joustava pub/sub voi olla:

```javascript
// Step 1: Define your message types
const Messages = {
  HERO_MOVE_LEFT: 'HERO_MOVE_LEFT',
  HERO_MOVE_RIGHT: 'HERO_MOVE_RIGHT',
  ENEMY_SPOTTED: 'ENEMY_SPOTTED'
};

// Step 2: Create your event system and game objects
const eventEmitter = new EventEmitter();
const hero = createHero(0, 0);
```

**Tämä koodi tekee seuraavaa:**
- **Määrittelee** vakio-objektin estääkseen kirjoitusvirheet viestin nimissä
- **Luo** tapahtumaemitterin käsittelemään kaikkea viestintää
- **Alustaa** sankariobjektin aloitussijainnissa

```javascript
// Step 3: Set up event listeners (subscribers)
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.moveTo(hero.x - 5, hero.y);
  console.log(`Hero moved to position: ${hero.x}, ${hero.y}`);
});

eventEmitter.on(Messages.HERO_MOVE_RIGHT, () => {
  hero.moveTo(hero.x + 5, hero.y);
  console.log(`Hero moved to position: ${hero.x}, ${hero.y}`);
});
```

**Yllä olevassa olemme:**
- **Rekisteröineet** tapahtumakuuntelijoita, jotka reagoivat liikkumisviesteihin
- **Päivittäneet** sankarin sijainnin liikkumissuunnan perusteella
- **Lisänneet** konsolilokituksen sankarin sijainnin muutosten seuraamiseksi
- **Erottaneet** liikkumislogiikan syötteen käsittelystä

```javascript
// Step 4: Connect keyboard input to events (publishers)
window.addEventListener('keydown', (event) => {
  switch(event.key) {
    case 'ArrowLeft':
      eventEmitter.emit(Messages.HERO_MOVE_LEFT);
      break;
    case 'ArrowRight':
      eventEmitter.emit(Messages.HERO_MOVE_RIGHT);
      break;
  }
});
```

**Näiden käsitteiden ymmärtäminen:**
- **Yhdistää** näppäimistön syötteen pelitapahtumiin ilman tiukkaa kytkentää
- **Mahdollistaa** syöttöjärjestelmän viestimisen pelin objektien kanssa epäsuorasti
- **Sallii** useiden järjestelmien reagoida samoihin näppäimistötapahtumiin
- **Helpottaa** näppäinten sitomisen muuttamista tai uusien syöttömenetelmien lisäämistä

> 💡 **Vinkki**: Tämän mallin kauneus on sen joustavuus! Voit helposti lisätä uusia ominaisuuksia, kuten ääniefektejä, ruudun tärinää tai hiukkasefektejä, yksinkertaisesti lisäämällä lisää tapahtumakuuntelijoita – sinun ei tarvitse muokata olemassa olevaa näppäimistö- tai liikkumiskoodia.
> 
**Miksi tulet rakastamaan tätä lähestymistapaa:**
- Uusien ominaisuuksien lisääminen on todella helppoa – kuuntele vain niitä tapahtumia, joista olet kiinnostunut
- Useat asiat voivat reagoida samaan tapahtumaan ilman, että ne häiritsevät toisiaan
- Testaaminen helpottuu huomattavasti, koska jokainen osa toimii itsenäisesti
- Kun jokin menee pieleen, tiedät tarkalleen, mistä etsiä

### Miksi Pub/Sub skaalautuu tehokkaasti

Pub/sub-malli säilyttää yksinkertaisuuden, kun sovellukset kasvavat monimutkaisemmiksi. Olipa kyseessä kymmenien vihollisten hallinta, dynaamiset käyttöliittymäpäivitykset tai äänijärjestelmät, malli käsittelee kasvavaa mittakaavaa ilman arkkitehtuurimuutoksia. Uudet ominaisuudet integroituvat olemassa olevaan tapahtumajärjestelmään vaikuttamatta vakiintuneeseen toiminnallisuuteen.

> ⚠️ **Yleinen virhe**: Älä luo liian monia erityisiä viestityyppejä alussa. Aloita laajoilla kategorioilla ja tarkenna niitä pelin tarpeiden mukaan.
> 
**Parhaat käytännöt:**
- **Ryhmittele** liittyvät viestit loogisiin kategorioihin
- **Käytä** kuvailevia nimiä, jotka selkeästi ilmaisevat tapahtuman
- **Pidä** viestien tietopaketit yksinkertaisina ja keskittyneinä
- **Dokumentoi** viestityypit tiimityötä varten

---

## GitHub Copilot Agent -haaste 🚀

Käytä Agent-tilaa suorittaaksesi seuraavan haasteen:

**Kuvaus:** Luo yksinkertainen pelin objektijärjestelmä käyttäen sekä perintää että pub/sub-mallia. Toteutat peruspelin, jossa eri objektit voivat kommunikoida tapahtumien kautta tietämättä suoraan toisistaan.

**Tehtävä:** Luo JavaScript-pelijärjestelmä seuraavilla vaatimuksilla: 1) Luo perus GameObject-luokka, jossa on x- ja y-koordinaatit sekä tyyppiominaisuus. 2) Luo Hero-luokka, joka laajentaa GameObjectia ja voi liikkua. 3) Luo Enemy-luokka, joka laajentaa GameObjectia ja voi jahdata sankaria. 4) Toteuta EventEmitter-luokka pub/sub-mallia varten. 5) Aseta tapahtumakuuntelijat niin, että kun sankari liikkuu, lähistöllä olevat viholliset saavat 'HERO_MOVED'-tapahtuman ja päivittävät sijaintinsa liikkuakseen sankaria kohti. Sisällytä console.log-lauseet näyttämään objektien välinen viestintä.

Lue lisää [agent-tilasta](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) täältä.

## 🚀 Haaste

Mieti, kuinka pub-sub-malli voi parantaa pelin arkkitehtuuria. Tunnista, mitkä komponentit pitäisi lähettää tapahtumia ja miten järjestelmän pitäisi reagoida. Suunnittele pelikonsepti ja hahmottele sen komponenttien väliset viestintämallit.

## Luentojälkeinen kysely

[Luentojälkeinen kysely](https://ff-quizzes.netlify.app/web/quiz/30)

## Kertaus ja itseopiskelu

Lue lisää Pub/Sub-mallista [täältä](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Tehtävä

[Suunnittele peli](assignment.md)

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.