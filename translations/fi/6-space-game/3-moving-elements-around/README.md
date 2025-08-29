<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a9a161871de7706cb0e23b1bd0c74559",
  "translation_date": "2025-08-29T00:40:14+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "fi"
}
-->
# Rakenna avaruuspeli, osa 3: Liikkeen lisääminen

## Ennakkokysely

[Ennakkokysely](https://ff-quizzes.netlify.app/web/quiz/33)

Pelit eivät ole kovin hauskoja, ennen kuin ruudulla vilisee avaruusolioita! Tässä pelissä käytämme kahta erilaista liikettä:

- **Näppäimistö/hiiriliike**: kun käyttäjä käyttää näppäimistöä tai hiirtä liikuttaakseen objektia ruudulla.
- **Pelistä johtuva liike**: kun peli liikuttaa objektia tietyin aikavälein.

Miten siis saamme objektit liikkumaan ruudulla? Kyse on kartesiolaisista koordinaateista: muutamme objektin sijaintia (x,y) ja piirrämme ruudun uudelleen.

Liikkeen toteuttamiseksi ruudulla tarvitaan yleensä seuraavat vaiheet:

1. **Aseta uusi sijainti** objektille; tämä on tarpeen, jotta objekti näyttää liikkuvan.
2. **Tyhjennä ruutu**, ruutu täytyy tyhjentää piirtojen välillä. Voimme tyhjentää sen piirtämällä suorakulmion, jonka täytämme taustavärillä.
3. **Piirrä objekti uudelleen** uuteen sijaintiin. Näin saamme objektin siirtymään paikasta toiseen.

Tältä se voi näyttää koodissa:

```javascript
//set the hero's location
hero.x += 5;
// clear the rectangle that hosts the hero
ctx.clearRect(0, 0, canvas.width, canvas.height);
// redraw the game background and hero
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.fillStyle = "black";
ctx.drawImage(heroImg, hero.x, hero.y);
```

✅ Voitko keksiä syyn, miksi sankarin piirtäminen monta kertaa sekunnissa voi aiheuttaa suorituskykyongelmia? Lue lisää [vaihtoehdoista tähän malliin](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Näppäimistötapahtumien käsittely

Tapahtumia käsitellään liittämällä tiettyjä tapahtumia koodiin. Näppäimistötapahtumat aktivoituvat koko ikkunassa, kun taas hiiritapahtumat, kuten `click`, voidaan liittää tiettyyn elementtiin. Käytämme näppäimistötapahtumia koko projektin ajan.

Tapahtuman käsittelemiseksi sinun täytyy käyttää ikkunan `addEventListener()`-metodia ja antaa sille kaksi syötettä. Ensimmäinen syöte on tapahtuman nimi, esimerkiksi `keyup`. Toinen syöte on funktio, joka kutsutaan tapahtuman tapahtuessa.

Esimerkki:

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

Näppäimistötapahtumissa on kaksi ominaisuutta, joiden avulla voit tarkistaa, mikä näppäin painettiin:

- `key`, joka on painetun näppäimen merkkijonoesitys, esimerkiksi `ArrowUp`.
- `keyCode`, joka on numeroinen esitys, esimerkiksi `37`, vastaa `ArrowLeft`.

✅ Näppäimistötapahtumien manipulointi on hyödyllistä myös pelikehityksen ulkopuolella. Mihin muihin tarkoituksiin voisit käyttää tätä tekniikkaa?

### Erikoisnäppäimet: huomioitavaa

On olemassa joitakin *erikoisnäppäimiä*, jotka vaikuttavat ikkunaan. Tämä tarkoittaa, että jos kuuntelet `keyup`-tapahtumaa ja käytät näitä erikoisnäppäimiä liikuttaaksesi sankaria, se voi myös aiheuttaa vaakasuoraa vieritystä. Tästä syystä saatat haluta *poistaa käytöstä* tämän sisäänrakennetun selaimen toiminnan pelin kehittämisen aikana. Tarvitset koodia, kuten tämä:

```javascript
let onKeyDown = function (e) {
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 37:
    case 39:
    case 38:
    case 40: // Arrow keys
    case 32:
      e.preventDefault();
      break; // Space
    default:
      break; // do not block other keys
  }
};

window.addEventListener('keydown', onKeyDown);
```

Yllä oleva koodi varmistaa, että nuolinäppäimillä ja välilyöntinäppäimellä on *oletuskäyttäytyminen* poistettu käytöstä. *Poistomekanismi* tapahtuu, kun kutsumme `e.preventDefault()`.

## Pelistä johtuva liike

Voimme saada objektit liikkumaan itsestään käyttämällä ajastimia, kuten `setTimeout()` tai `setInterval()`-funktiota, jotka päivittävät objektin sijaintia jokaisella aikavälillä. Tältä se voi näyttää:

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## Pelisilmukka

Pelisilmukka on konsepti, joka käytännössä tarkoittaa funktiota, joka kutsutaan säännöllisin väliajoin. Sitä kutsutaan pelisilmukaksi, koska kaikki, mikä pitäisi olla näkyvissä käyttäjälle, piirretään silmukkaan. Pelisilmukka käyttää kaikkia pelin osia, jotka ovat osa peliä, piirtäen ne kaikki, ellei jokin syy estä niitä olemasta osa peliä. Esimerkiksi jos objekti on vihollinen, joka osui laseriin ja räjähti, se ei enää ole osa nykyistä pelisilmukkaa (opit tästä lisää myöhemmissä oppitunneissa).

Tältä pelisilmukka voi tyypillisesti näyttää koodissa:

```javascript
let gameLoopId = setInterval(() =>
  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawHero();
    drawEnemies();
    drawStaticObjects();
}, 200);
```

Yllä oleva silmukka kutsutaan joka `200` millisekunti ruudun uudelleenpiirtämiseksi. Voit valita parhaan aikavälin, joka sopii peliisi.

## Avaruuspeli jatkuu

Otat olemassa olevan koodin ja laajennat sitä. Voit joko aloittaa koodilla, jonka olet tehnyt osassa I, tai käyttää koodia [Osa II - aloitus](../../../../6-space-game/3-moving-elements-around/your-work).

- **Sankarin liikuttaminen**: lisäät koodia, joka mahdollistaa sankarin liikuttamisen nuolinäppäimillä.
- **Vihollisten liikuttaminen**: lisäät myös koodia, joka saa viholliset liikkumaan ylhäältä alas tietyllä nopeudella.

## Suositellut vaiheet

Etsi tiedostot, jotka on luotu sinulle `your-work`-alikansiossa. Sen pitäisi sisältää seuraavat:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Aloita projektisi `your_work`-kansiossa kirjoittamalla:

```bash
cd your-work
npm start
```

Yllä oleva käynnistää HTTP-palvelimen osoitteessa `http://localhost:5000`. Avaa selain ja syötä tuo osoite; tällä hetkellä sen pitäisi näyttää sankari ja kaikki viholliset, mutta mikään ei liiku - vielä!

### Lisää koodia

1. **Lisää omistettuja objekteja** `hero`, `enemy` ja `game object`, joilla on `x` ja `y` ominaisuudet. (Muista osio [Perintä tai koostumus](../README.md)).

   *VINKKI* `game object` pitäisi olla se, jolla on `x` ja `y` sekä kyky piirtää itsensä kankaalle.

   >vinkki: aloita lisäämällä uusi GameObject-luokka, jonka konstruktori on määritelty alla, ja piirrä se kankaalle:
  
    ```javascript
        
    class GameObject {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dead = false;
        this.type = "";
        this.width = 0;
        this.height = 0;
        this.img = undefined;
      }
    
      draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      }
    }
    ```

    Laajenna nyt tätä GameObjectia luodaksesi Hero ja Enemy.
    
    ```javascript
    class Hero extends GameObject {
      constructor(x, y) {
        ...it needs an x, y, type, and speed
      }
    }
    ```

    ```javascript
    class Enemy extends GameObject {
      constructor(x, y) {
        super(x, y);
        (this.width = 98), (this.height = 50);
        this.type = "Enemy";
        let id = setInterval(() => {
          if (this.y < canvas.height - this.height) {
            this.y += 5;
          } else {
            console.log('Stopped at', this.y)
            clearInterval(id);
          }
        }, 300)
      }
    }
    ```

2. **Lisää näppäimistötapahtumien käsittelijät** sankarin liikkumisen hallintaan (liikuta sankaria ylös/alas vasemmalle/oikealle)

   *MUISTA* kyseessä on kartesiolainen järjestelmä, vasen yläkulma on `0,0`. Muista myös lisätä koodi oletuskäyttäytymisen estämiseksi.

   >vinkki: luo oma onKeyDown-funktio ja liitä se ikkunaan:

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   Tarkista selaimen konsoli tässä vaiheessa ja katso, kuinka näppäinpainallukset kirjautuvat.

3. **Toteuta** [Pub sub -malli](../README.md), tämä pitää koodisi siistinä, kun seuraat jäljellä olevia osia.

   Tämän viimeisen osan tekemiseksi voit:

   1. **Lisätä tapahtumakuuntelijan** ikkunaan:

       ```javascript
        window.addEventListener("keyup", (evt) => {
          if (evt.key === "ArrowUp") {
            eventEmitter.emit(Messages.KEY_EVENT_UP);
          } else if (evt.key === "ArrowDown") {
            eventEmitter.emit(Messages.KEY_EVENT_DOWN);
          } else if (evt.key === "ArrowLeft") {
            eventEmitter.emit(Messages.KEY_EVENT_LEFT);
          } else if (evt.key === "ArrowRight") {
            eventEmitter.emit(Messages.KEY_EVENT_RIGHT);
          }
        });
        ```

    1. **Luo EventEmitter-luokka** viestien julkaisemiseen ja tilaamiseen:

        ```javascript
        class EventEmitter {
          constructor() {
            this.listeners = {};
          }
        
          on(message, listener) {
            if (!this.listeners[message]) {
              this.listeners[message] = [];
            }
            this.listeners[message].push(listener);
          }
        
          emit(message, payload = null) {
            if (this.listeners[message]) {
              this.listeners[message].forEach((l) => l(message, payload));
            }
          }
        }
        ```

    1. **Lisää vakioita** ja aseta EventEmitter:

        ```javascript
        const Messages = {
          KEY_EVENT_UP: "KEY_EVENT_UP",
          KEY_EVENT_DOWN: "KEY_EVENT_DOWN",
          KEY_EVENT_LEFT: "KEY_EVENT_LEFT",
          KEY_EVENT_RIGHT: "KEY_EVENT_RIGHT",
        };
        
        let heroImg, 
            enemyImg, 
            laserImg,
            canvas, ctx, 
            gameObjects = [], 
            hero, 
            eventEmitter = new EventEmitter();
        ```

    1. **Alusta peli**

    ```javascript
    function initGame() {
      gameObjects = [];
      createEnemies();
      createHero();
    
      eventEmitter.on(Messages.KEY_EVENT_UP, () => {
        hero.y -=5 ;
      })
    
      eventEmitter.on(Messages.KEY_EVENT_DOWN, () => {
        hero.y += 5;
      });
    
      eventEmitter.on(Messages.KEY_EVENT_LEFT, () => {
        hero.x -= 5;
      });
    
      eventEmitter.on(Messages.KEY_EVENT_RIGHT, () => {
        hero.x += 5;
      });
    }
    ```

1. **Aseta pelisilmukka**

   Refaktoroi window.onload-funktio pelin alustamiseksi ja pelisilmukan asettamiseksi hyvällä aikavälillä. Lisää myös laser-säde:

    ```javascript
    window.onload = async () => {
      canvas = document.getElementById("canvas");
      ctx = canvas.getContext("2d");
      heroImg = await loadTexture("assets/player.png");
      enemyImg = await loadTexture("assets/enemyShip.png");
      laserImg = await loadTexture("assets/laserRed.png");
    
      initGame();
      let gameLoopId = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawGameObjects(ctx);
      }, 100)
      
    };
    ```

5. **Lisää koodia** vihollisten liikuttamiseksi tietyin aikavälein

    Refaktoroi `createEnemies()`-funktio luomaan viholliset ja lisäämään ne uuteen gameObjects-luokkaan:

    ```javascript
    function createEnemies() {
      const MONSTER_TOTAL = 5;
      const MONSTER_WIDTH = MONSTER_TOTAL * 98;
      const START_X = (canvas.width - MONSTER_WIDTH) / 2;
      const STOP_X = START_X + MONSTER_WIDTH;
    
      for (let x = START_X; x < STOP_X; x += 98) {
        for (let y = 0; y < 50 * 5; y += 50) {
          const enemy = new Enemy(x, y);
          enemy.img = enemyImg;
          gameObjects.push(enemy);
        }
      }
    }
    ```
    
    ja lisää `createHero()`-funktio tekemään saman prosessin sankarille.
    
    ```javascript
    function createHero() {
      hero = new Hero(
        canvas.width / 2 - 45,
        canvas.height - canvas.height / 4
      );
      hero.img = heroImg;
      gameObjects.push(hero);
    }
    ```

    ja lopuksi lisää `drawGameObjects()`-funktio piirtämisen aloittamiseksi:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    Vihollisesi alkavat edetä sankarialuksesi kimppuun!

---

## 🚀 Haaste

Kuten huomaat, koodisi voi muuttua "spagettikoodiksi", kun alat lisätä funktioita, muuttujia ja luokkia. Miten voisit järjestää koodisi paremmin, jotta se olisi luettavampaa? Piirrä järjestelmä koodisi järjestämiseksi, vaikka se pysyisi yhdessä tiedostossa.

## Jälkikysely

[Jälkikysely](https://ff-quizzes.netlify.app/web/quiz/34)

## Kertaus ja itseopiskelu

Vaikka kirjoitamme pelimme ilman kehyksiä, on olemassa monia JavaScript-pohjaisia canvas-kehyksiä pelikehitykseen. Käytä aikaa [lukemiseen näistä](https://github.com/collections/javascript-game-engines).

## Tehtävä

[Kommentoi koodisi](assignment.md)

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Pyrimme tarkkuuteen, mutta huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäisellä kielellä tulee pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskääntämistä. Emme ole vastuussa tämän käännöksen käytöstä aiheutuvista väärinkäsityksistä tai virhetulkinnoista.