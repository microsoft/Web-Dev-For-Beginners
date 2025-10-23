<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "022bbb5c869091b98f19e408e0c51d5d",
  "translation_date": "2025-10-23T00:39:23+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "fi"
}
-->
# Rakenna avaruuspeli, osa 3: Liikkeen lisääminen

Ajattele suosikkipelejäsi – mikä tekee niistä kiehtovia? Ei pelkästään kauniit grafiikat, vaan se, miten kaikki liikkuu ja reagoi toimintaasi. Tällä hetkellä avaruuspelisi on kuin kaunis maalaus, mutta nyt aiomme lisätä liikettä, joka herättää sen eloon.

Kun NASAn insinöörit ohjelmoivat Apollo-missioiden ohjaustietokonetta, he kohtasivat samanlaisen haasteen: miten saada avaruusalus reagoimaan pilotin komentoihin samalla kun se automaattisesti korjaa kurssiaan? Tänään opimme periaatteita, jotka muistuttavat näitä samoja konsepteja – pelaajan ohjaaman liikkeen hallintaa yhdessä automaattisten järjestelmätoimintojen kanssa.

Tässä oppitunnissa opit, miten avaruusalukset liukuvat ruudulla, reagoivat pelaajan komentoihin ja luovat sulavia liikemalleja. Jaamme kaiken hallittaviin osiin, jotka rakentuvat luonnollisesti toistensa päälle.

Lopuksi pelaajat voivat lentää sankarialustaan ruudulla samalla kun vihollisalukset partioivat yläpuolella. Vielä tärkeämpää on, että ymmärrät pelin liikejärjestelmien keskeiset periaatteet.

## Ennakkokysely

[Ennakkokysely](https://ff-quizzes.netlify.app/web/quiz/33)

## Pelin liikkeen ymmärtäminen

Pelit heräävät eloon, kun asiat alkavat liikkua, ja periaatteessa tämä tapahtuu kahdella tavalla:

- **Pelaajan ohjaama liike**: Kun painat näppäintä tai klikkaat hiirtä, jokin liikkuu. Tämä on suora yhteys sinun ja pelimaailman välillä.
- **Automaattinen liike**: Kun peli itse päättää liikuttaa asioita – kuten vihollisaluksia, jotka partioivat ruudulla riippumatta siitä, teetkö mitään vai et.

Esineiden liikuttaminen tietokoneen näytöllä on yksinkertaisempaa kuin luuletkaan. Muistatko matematiikan tunnilta x- ja y-koordinaatit? Juuri niiden kanssa työskentelemme täällä. Kun Galileo seurasi Jupiterin kuita vuonna 1610, hän teki pohjimmiltaan samaa – kartoitti sijainteja ajan kuluessa ymmärtääkseen liikeratoja.

Esineiden liikuttaminen ruudulla on kuin flipbook-animaation luomista – sinun täytyy noudattaa näitä kolmea yksinkertaista vaihetta:

1. **Päivitä sijainti** – Muuta, missä esineesi pitäisi olla (ehkä siirrä sitä 5 pikseliä oikealle)
2. **Poista vanha ruutu** – Tyhjennä ruutu, jotta et näe haamujälkiä kaikkialla
3. **Piirrä uusi ruutu** – Aseta esineesi uuteen paikkaan

Tee tämä tarpeeksi nopeasti, ja voilà! Sinulla on sulava liike, joka tuntuu pelaajista luonnolliselta.

Tältä se voi näyttää koodissa:

```javascript
// Set the hero's location
hero.x += 5;
// Clear the rectangle that hosts the hero
ctx.clearRect(0, 0, canvas.width, canvas.height);
// Redraw the game background and hero
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "black";
ctx.drawImage(heroImg, hero.x, hero.y);
```

**Mitä tämä koodi tekee:**
- **Päivittää** sankarin x-koordinaatin 5 pikselillä liikuttaakseen sitä vaakasuunnassa
- **Tyhjentää** koko canvas-alueen poistaakseen edellisen ruudun
- **Täyttää** canvasin mustalla taustavärillä
- **Piirtää** sankarin kuvan sen uudessa sijainnissa

✅ Voitko keksiä syyn, miksi sankarin uudelleenpiirtäminen monta kertaa sekunnissa saattaa aiheuttaa suorituskykyongelmia? Lue lisää [vaihtoehdoista tähän malliin](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Näppäimistötapahtumien käsittely

Tässä yhdistämme pelaajan syötteen pelin toimintaan. Kun joku painaa välilyöntiä laukaistakseen laserin tai napauttaa nuolinäppäintä väistääkseen asteroidin, pelisi täytyy havaita ja reagoida tähän syötteeseen.

Näppäimistötapahtumat tapahtuvat ikkunatasolla, mikä tarkoittaa, että koko selaimen ikkuna kuuntelee näitä näppäinpainalluksia. Hiiren klikkaukset taas voidaan sitoa tiettyihin elementteihin (kuten painikkeen klikkaamiseen). Avaruuspeliämme varten keskitymme näppäimistöohjaukseen, koska se antaa pelaajille sen klassisen arcade-tunnelman.

Tämä muistuttaa minua siitä, miten 1800-luvun lennätinoperaattorit joutuivat kääntämään morsekoodin syötteen merkityksellisiksi viesteiksi – teemme jotain vastaavaa, kääntäen näppäinpainallukset pelikomennoksi.

Tapahtuman käsittelemiseksi sinun täytyy käyttää ikkunan `addEventListener()`-metodia ja antaa sille kaksi syöttöparametria. Ensimmäinen parametri on tapahtuman nimi, esimerkiksi `keyup`. Toinen parametri on funktio, joka pitäisi kutsua tapahtuman tapahtuessa.

Tässä esimerkki:

```javascript
window.addEventListener('keyup', (evt) => {
  // evt.key = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
});
```

**Mitä tässä tapahtuu:**
- **Kuuntelee** näppäimistötapahtumia koko ikkunassa
- **Tallentaa** tapahtumaobjektin, joka sisältää tiedot siitä, mikä näppäin painettiin
- **Tarkistaa**, vastaako painettu näppäin tiettyä näppäintä (tässä tapauksessa nuoli ylös)
- **Suorittaa** koodia, kun ehto täyttyy

Näppäintapahtumille on kaksi ominaisuutta, joita voit käyttää nähdäksesi, mikä näppäin painettiin:

- `key` - tämä on painetun näppäimen merkkijonoesitys, esimerkiksi `'ArrowUp'`
- `keyCode` - tämä on numeroinen esitys, esimerkiksi `37`, joka vastaa `ArrowLeft`

✅ Näppäintapahtumien manipulointi on hyödyllistä myös pelinkehityksen ulkopuolella. Mihin muihin tarkoituksiin voisit käyttää tätä tekniikkaa?

### Erikoisnäppäimet: huomio!

Joillakin näppäimillä on sisäänrakennettuja selaimen toimintoja, jotka voivat häiritä peliäsi. Nuolinäppäimet vierittävät sivua ja välilyönti hyppää alas – toimintoja, joita et halua, kun joku yrittää ohjata avaruusalustaan.

Voimme estää nämä oletustoiminnot ja antaa pelin käsitellä syötteen sen sijaan. Tämä on samanlaista kuin miten varhaiset tietokoneohjelmoijat joutuivat ohittamaan järjestelmän keskeytykset luodakseen mukautettuja toimintoja – me vain teemme sen selaintasolla. Näin se onnistuu:

```javascript
const onKeyDown = function (e) {
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

**Tämän estokoodin ymmärtäminen:**
- **Tarkistaa** tietyt näppäinkoodit, jotka saattavat aiheuttaa ei-toivottua selaimen toimintaa
- **Estää** oletusselaintoiminnon nuolinäppäimille ja välilyönnille
- **Sallii** muiden näppäinten toimia normaalisti
- **Käyttää** `e.preventDefault()`-metodia pysäyttääkseen selaimen sisäänrakennetun toiminnan

## Pelin automaattinen liike

Puhutaan nyt esineistä, jotka liikkuvat ilman pelaajan syötettä. Ajattele vihollisaluksia, jotka risteilevät ruudulla, luoteja, jotka lentävät suoraan eteenpäin, tai pilviä, jotka ajelehtivat taustalla. Tämä autonominen liike saa pelimaailmasi tuntumaan elävältä, vaikka kukaan ei koskisi ohjaimiin.

Käytämme JavaScriptin sisäänrakennettuja ajastimia päivittääksemme sijainteja säännöllisin väliajoin. Tämä konsepti on samanlainen kuin heilurikellojen toiminta – säännöllinen mekanismi, joka laukaisee johdonmukaisia, ajastettuja toimintoja. Näin yksinkertaista se voi olla:

```javascript
const id = setInterval(() => {
  // Move the enemy on the y axis
  enemy.y += 10;
}, 100);
```

**Mitä tämä liikkumiskoodi tekee:**
- **Luo** ajastimen, joka käynnistyy 100 millisekunnin välein
- **Päivittää** vihollisen y-koordinaatin 10 pikselillä joka kerta
- **Tallentaa** intervallin tunnuksen, jotta sen voi tarvittaessa pysäyttää myöhemmin
- **Liikuttaa** vihollista automaattisesti alaspäin ruudulla

## Pelin silmukka

Tässä on konsepti, joka sitoo kaiken yhteen – pelin silmukka. Jos pelisi olisi elokuva, pelin silmukka olisi filmiprojektori, joka näyttää ruutuja niin nopeasti, että kaikki näyttää liikkuvan sulavasti.

Jokaisessa pelissä on tällainen silmukka taustalla. Se on funktio, joka päivittää kaikki pelin objektit, piirtää ruudun uudelleen ja toistaa tämän prosessin jatkuvasti. Tämä pitää kirjaa sankaristasi, kaikista vihollisista, lentävistä lasereista – koko pelitilasta.

Tämä konsepti muistuttaa minua siitä, miten varhaiset animaattorit, kuten Walt Disney, joutuivat piirtämään hahmot ruutu ruudulta luodakseen liikkeen illuusion. Me teemme samaa, mutta koodilla kynien sijaan.

Tältä pelin silmukka yleensä näyttää koodissa:

```javascript
const gameLoopId = setInterval(() => {
  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawHero();
    drawEnemies();
    drawStaticObjects();
  }
  gameLoop();
}, 200);
```

**Pelin silmukan rakenteen ymmärtäminen:**
- **Tyhjentää** koko canvasin poistaakseen edellisen ruudun
- **Täyttää** taustan yhtenäisellä värillä
- **Piirtää** kaikki pelin objektit niiden nykyisiin sijainteihin
- **Toistaa** tämän prosessin 200 millisekunnin välein luodakseen sulavan animaation
- **Hallinnoi** ruutunopeutta ohjaamalla intervalliaikaa

## Avaruuspeli jatkuu

Nyt lisäämme liikettä aiemmin rakentamaasi staattiseen näkymään. Muutamme sen kuvakaappauksesta interaktiiviseksi kokemukseksi. Käymme tämän läpi askel askeleelta varmistaaksemme, että jokainen osa rakentuu edellisen päälle.

Hae koodi siitä, mihin jäimme edellisessä oppitunnissa (tai aloita koodilla [Osa II - aloitus](../../../../6-space-game/3-moving-elements-around/your-work)-kansiosta, jos tarvitset uuden aloituksen).

**Tätä rakennamme tänään:**
- **Sankarin ohjaus**: Nuolinäppäimillä ohjataan avaruusalusta ruudulla
- **Vihollisten liike**: Nuo avaruusolentojen alukset aloittavat etenemisensä

Aloitetaan näiden ominaisuuksien toteuttaminen.

## Suositellut vaiheet

Etsi tiedostot, jotka on luotu sinulle `your-work`-alikansioon. Sen pitäisi sisältää seuraavat:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Aloita projektisi `your-work`-kansiossa kirjoittamalla:

```bash
cd your-work
npm start
```

**Mitä tämä komento tekee:**
- **Siirtyy** projektihakemistoon
- **Käynnistää** HTTP-palvelimen osoitteessa `http://localhost:5000`
- **Palvelee** pelitiedostosi, jotta voit testata niitä selaimessa

Yllä oleva käynnistää HTTP-palvelimen osoitteessa `http://localhost:5000`. Avaa selain ja syötä kyseinen osoite, tällä hetkellä sen pitäisi näyttää sankari ja kaikki viholliset; mikään ei kuitenkaan vielä liiku!

### Lisää koodia

1. **Lisää omistettuja objekteja** `hero`, `enemy` ja `game object`, joilla on `x` ja `y` -ominaisuudet. (Muista osio [Periytyminen tai koostumus](../README.md)).

   *VINKKI* `game object` pitäisi olla se, jolla on `x` ja `y` sekä kyky piirtää itsensä canvasille.

   > **Vinkki**: Aloita lisäämällä uusi `GameObject`-luokka, jonka konstruktori on määritelty alla, ja piirrä se sitten canvasille:

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

    **Tämän perusluokan ymmärtäminen:**
    - **Määrittää** yhteiset ominaisuudet, jotka kaikki pelin objektit jakavat (sijainti, koko, kuva)
    - **Sisältää** `dead`-lipun, joka seuraa, pitäisikö objekti poistaa
    - **Tarjoaa** `draw()`-metodin, joka piirtää objektin canvasille
    - **Asettaa** oletusarvot kaikille ominaisuuksille, joita aliluokat voivat korvata

    Nyt laajenna tätä `GameObject`-luokkaa luodaksesi `Hero` ja `Enemy`:
    
    ```javascript
    class Hero extends GameObject {
      constructor(x, y) {
        super(x, y);
        this.width = 98;
        this.height = 75;
        this.type = "Hero";
        this.speed = 5;
      }
    }
    ```

    ```javascript
    class Enemy extends GameObject {
      constructor(x, y) {
        super(x, y);
        this.width = 98;
        this.height = 50;
        this.type = "Enemy";
        const id = setInterval(() => {
          if (this.y < canvas.height - this.height) {
            this.y += 5;
          } else {
            console.log('Stopped at', this.y);
            clearInterval(id);
          }
        }, 300);
      }
    }
    ```

    **Keskeiset käsitteet näissä luokissa:**
    - **Perii** `GameObject`-luokasta käyttäen `extends`-avainsanaa
    - **Kutsuu** vanhemman konstruktorin `super(x, y)`-kutsulla
    - **Asettaa** erityiset mitat ja ominaisuudet kullekin objektityypille
    - **Toteuttaa** automaattisen liikkeen vihollisille käyttäen `setInterval()`

2. **Lisää näppäintapahtumien käsittelijät** sankarin liikuttamiseksi ylös/alas/vasemmalle/oikealle

   *MUISTA*, että kyseessä on kartesiolainen järjestelmä, vasen yläkulma on `0,0`. Muista myös lisätä koodi oletuskäyttäytymisen estämiseksi.

   > **Vinkki**: Luo `onKeyDown`-funktiosi ja liitä se ikkunaan:

   ```javascript
   const onKeyDown = function (e) {
     console.log(e.keyCode);
     // Add the code from the lesson above to stop default behavior
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

   window.addEventListener("keydown", onKeyDown);
   ```
    
   **Mitä tämä tapahtumankäsittelijä tekee:**
   - **Kuuntelee** näppäinten painalluksia koko ikkunassa
   - **Kirjaa** näppäinkoodin auttaakseen sinua debuggaamaan, mitä näppäimiä painetaan
   - **Estää** oletusselaintoiminnan nuolinäppäimille ja välilyönnille
   - **Sallii** muiden näppäinten toimia normaalisti
   
   Tarkista selaimesi konsoli tässä vaiheessa ja katso, kuinka näppäinpainallukset kirjautuvat.

3. **Toteuta** [Pub sub -malli](../README.md), tämä pitää koodisi siistinä, kun seuraat jäljellä olevia osia.

   Publish-Subscribe-malli auttaa järjestämään koodisi erottamalla tapahtumien havaitsemisen niiden käsittelystä. Tämä tekee koodistasi modulaarisemman ja helpommin ylläpidettävän.

   Tämän viimeisen osan toteuttamiseksi voit:

   1. **Lisätä tapahtumankuuntelijan** ikkunaan:

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

   **Mitä tämä tapahtumajärjestelmä tekee:**
   - **Havaitsee** näppäimistösyötteen ja muuntaa sen mukautetuiksi pelitapahtumiksi
   - **Erottaa** syötteen havaitsemisen pelilogiikasta
   - **Helpottaa** ohjainten muuttamista myöhemmin vaikuttamatta pelin koodiin
   - **Mahdollistaa**, että useat järjestelmät voivat reagoida samaan syötteeseen

   2. **Luo EventEmitter-luokka** viestien julkaisemista ja tilaamista varten:

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
       
   3. **Lisää vakioita** ja aseta EventEmitter:

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

   **Ymmärrä asetukset:**
   - **Määrittää** viestivakiot välttääkseen kirjoitusvirheitä ja helpottaakseen refaktorointia
   - **Ilmoittaa** muuttujat kuville, canvas-kontekstille ja pelitilalle
   - **Luo** globaalin tapahtumaemitterin pub-sub-järjestelmää varten
   - **Alustaa** taulukon kaikkien pelin objektien tallentamiseksi

   4. **Alusta peli**

       ```javascript
       function initGame() {
         gameObjects = [];
         createEnemies();
         createHero();
       
         eventEmitter.on(Messages.KEY_EVENT_UP, () => {
           hero.y -= 5;
         });
       
         eventEmitter.on(Messages.KEY_EVENT_DOWN, () => {
           hero.y += 5;
         });
       
         eventEmitter.on(Messages.KEY_EVENT_LEFT, () => {
           hero.x -= 5;
         });
       
4. **Aseta pelin silmukka**

   Refaktoroi `window.onload`-funktio alustamaan peli ja asettamaan pelin silmukka hyvällä intervallilla. Lisää myös laser:

    ```javascript
    window.onload = async () => {
      canvas = document.getElementById("canvas");
      ctx = canvas.getContext("2d");
      heroImg = await loadTexture("assets/player.png");
      enemyImg = await loadTexture("assets/enemyShip.png");
      laserImg = await loadTexture("assets/laserRed.png");
    
      initGame();
      const gameLoopId = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawGameObjects(ctx);
      }, 100);
    };
    ```

   **Pelin asetusten ymmärtäminen:**
   - **Odottaa**, että sivu latautuu kokonaan ennen aloittamista
   - **Hakee** canvas-elementin ja sen 2D-piirtokontekstin
   - **Lataa** kaikki kuvatiedostot asynkronisesti käyttäen `await`
   - **Käynnistää** pelin silmukan, joka pyörii 100 ms välein (10 FPS)
   - **Tyhjentää** ja piirtää koko ruudun uudelleen jokaisessa ruudussa

5. **Lisää koodia** vihollisten liikuttamiseksi tietyin väliajoin

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

    **Mitä vihollisten luominen tekee
- **Luo** vihollisten ruudukon käyttämällä sisäkkäisiä silmukoita  
- **Määrittää** viholliskuvan jokaiselle vihollisobjektille  
- **Lisää** jokaisen vihollisen globaalin pelin objektien taulukkoon  

ja lisää `createHero()`-funktio, joka tekee samanlaisen prosessin sankarille.  

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
  
**Mitä sankarin luonti tekee:**  
- **Asettaa** sankarin näytön alareunaan keskelle  
- **Määrittää** sankarikuvan sankariobjektille  
- **Lisää** sankarin pelin objektien taulukkoon renderöintiä varten  

ja lopuksi lisää `drawGameObjects()`-funktio piirtämisen aloittamiseksi:  

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```
  
**Piirtämisfunktion ymmärtäminen:**  
- **Käy läpi** kaikki pelin objektit taulukossa  
- **Kutsuu** `draw()`-metodia jokaiselle objektille  
- **Välittää** canvas-kontekstin, jotta objektit voivat piirtää itsensä  

Vihollisesi alkavat edetä kohti sankarisi avaruusalusta!  
}  
}  
    ```
    
    and add a `createHero()` function to do a similar process for the hero.
    
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
  
Vihollisesi alkavat edetä kohti sankarisi avaruusalusta!  

---

## GitHub Copilot Agent -haaste 🚀  

Tässä on haaste, joka parantaa pelisi viimeistelyä: rajojen lisääminen ja sulavat ohjaimet. Tällä hetkellä sankarisi voi lentää pois näytöltä, ja liike saattaa tuntua nykivältä.  

**Tehtäväsi:** Tee avaruusaluksestasi realistisempi toteuttamalla näytön rajat ja sulava liike. Tämä on samanlaista kuin NASA:n lentokontrollijärjestelmät, jotka estävät avaruusaluksia ylittämästä turvallisia toimintarajoja.  

**Tässä mitä sinun tulee rakentaa:** Luo järjestelmä, joka pitää sankarisi avaruusaluksen näytöllä ja tekee ohjauksesta sulavan. Kun pelaajat pitävät nuolinäppäintä painettuna, aluksen tulisi liukua jatkuvasti sen sijaan, että se liikkuisi erillisinä askelina. Harkitse visuaalisen palautteen lisäämistä, kun alus saavuttaa näytön rajat – esimerkiksi hienovarainen efekti, joka osoittaa pelialueen reunan.  

Lisätietoja [agent mode -tilasta](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) löydät täältä.  

## 🚀 Haaste  

Koodin organisointi tulee yhä tärkeämmäksi projektien kasvaessa. Olet ehkä huomannut, että tiedostosi täyttyy funktioista, muuttujista ja luokista, jotka ovat kaikki sekaisin keskenään. Tämä muistuttaa minua siitä, kuinka Apollo-mission insinöörit joutuivat luomaan selkeitä ja ylläpidettäviä järjestelmiä, joiden parissa useat tiimit pystyivät työskentelemään samanaikaisesti.  

**Tehtäväsi:**  
Ajattele kuin ohjelmistoarkkitehti. Kuinka järjestäisit koodisi niin, että kuuden kuukauden päästä sinä (tai tiimikaverisi) ymmärtäisitte, mitä siinä tapahtuu? Vaikka kaikki pysyisi yhdessä tiedostossa toistaiseksi, voit luoda parempaa organisointia:  

- **Ryhmittele** liittyvät funktiot yhteen selkeillä kommenttiosioilla  
- **Erota vastuut** – pidä pelilogiikka erillään renderöinnistä  
- **Käytä johdonmukaisia nimeämiskäytäntöjä** muuttujille ja funktioille  
- **Luo moduuleja** tai nimiavaruuksia pelisi eri osa-alueiden järjestämiseksi  
- **Lisää dokumentaatiota**, joka selittää jokaisen pääosion tarkoituksen  

**Pohdintakysymyksiä:**  
- Mitkä osat koodistasi ovat vaikeimpia ymmärtää, kun palaat niiden pariin?  
- Kuinka voisit järjestää koodisi, jotta joku muu voisi helpommin osallistua sen kehittämiseen?  
- Mitä tapahtuisi, jos haluaisit lisätä uusia ominaisuuksia, kuten voimaesineitä tai erilaisia vihollistyyppejä?  

## Luentojälkeinen kysely  

[Luentojälkeinen kysely](https://ff-quizzes.netlify.app/web/quiz/34)  

## Kertaus ja itseopiskelu  

Olemme rakentaneet kaiken alusta asti, mikä on loistavaa oppimisen kannalta, mutta tässä pieni salaisuus – on olemassa upeita JavaScript-kehyksiä, jotka voivat hoitaa paljon raskasta työtä puolestasi. Kun tunnet olosi mukavaksi käsittelemämme perusteiden kanssa, kannattaa [tutkia, mitä on tarjolla](https://github.com/collections/javascript-game-engines).  

Ajattele kehyksiä kuin hyvin varusteltua työkalupakkia sen sijaan, että tekisit jokaisen työkalun itse. Ne voivat ratkaista monia niistä koodin organisointiin liittyvistä haasteista, joista puhuimme, ja tarjota ominaisuuksia, joiden rakentaminen itse veisi viikkoja.  

**Tutustumisen arvoisia asioita:**  
- Kuinka pelimoottorit järjestävät koodin – tulet hämmästymään niiden käyttämistä älykkäistä malleista  
- Suorituskykytemppuja, jotka saavat canvas-pelit pyörimään sulavasti  
- Modernit JavaScript-ominaisuudet, jotka voivat tehdä koodistasi siistimmän ja helpommin ylläpidettävän  
- Erilaisia lähestymistapoja pelin objektien ja niiden suhteiden hallintaan  

## Tehtävä  

[Kommentoi koodisi](assignment.md)  

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.