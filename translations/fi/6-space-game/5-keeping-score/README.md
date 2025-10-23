<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d642759cf1542f554871f74956a59af9",
  "translation_date": "2025-10-23T00:42:56+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "fi"
}
-->
# Rakenna avaruuspeli osa 5: Pisteet ja elämät

## Ennakkoquiz

[Ennakkoquiz](https://ff-quizzes.netlify.app/web/quiz/37)

Valmis tekemään avaruuspelistäsi oikean pelin? Lisätään pisteiden kerääminen ja elämien hallinta - ydintoiminnot, jotka muuttivat varhaiset arcade-pelit, kuten Space Invaders, yksinkertaisista demonstraatioista koukuttavaksi viihteeksi. Tässä vaiheessa pelisi muuttuu todella pelattavaksi.

## Tekstin piirtäminen ruudulle - pelisi ääni

Näyttääksemme pisteesi, meidän täytyy oppia renderöimään tekstiä canvas-elementille. `fillText()`-metodi on päätyökalusi tähän - se on sama tekniikka, jota käytettiin klassisissa arcade-peleissä pisteiden ja tilatietojen näyttämiseen.

Sinulla on täydellinen hallinta tekstin ulkoasusta:

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Sukella syvemmälle [tekstin lisäämiseen canvas-elementille](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text) - saatat yllättyä, kuinka luovaksi voit ryhtyä fonttien ja tyylien kanssa!

## Elämät - enemmän kuin vain numero

Pelisuunnittelussa "elämä" edustaa pelaajan virhemarginaalia. Tämä konsepti juontaa juurensa flipperikoneista, joissa pelaajalla oli useita palloja pelattavaksi. Varhaisissa videopeleissä, kuten Asteroids, elämät antoivat pelaajille luvan ottaa riskejä ja oppia virheistään.

Visuaalinen esitys on erittäin tärkeää - alusten kuvakkeiden näyttäminen pelkän "Elämät: 3" sijaan luo välittömän visuaalisen tunnistettavuuden, aivan kuten varhaiset arcade-kaapit käyttivät ikonografiaa viestinnässä kielimuurien yli.

## Pelin palkitsemisjärjestelmän rakentaminen

Nyt toteutamme keskeiset palautemekanismit, jotka pitävät pelaajat mukana:

- **Pistejärjestelmä**: Jokainen tuhottu vihollisalus antaa 100 pistettä (pyöreät luvut ovat helpompia pelaajille laskea mielessään). Pisteet näytetään vasemmassa alakulmassa.
- **Elämälaskuri**: Sankarisi aloittaa kolmella elämällä - standardi, jonka varhaiset arcade-pelit asettivat tasapainottamaan haastetta ja pelattavuutta. Jokainen törmäys viholliseen maksaa yhden elämän. Näytämme jäljellä olevat elämät oikeassa alakulmassa aluksen kuvakkeilla ![elämäkuva](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.fi.png).

## Aloitetaan rakentaminen!

Ensiksi, valmistele työtilasi. Siirry tiedostoihin `your-work`-alikansiossa. Sinun pitäisi nähdä nämä tiedostot:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Testataksesi peliäsi, käynnistä kehityspalvelin `your_work`-kansiosta:

```bash
cd your-work
npm start
```

Tämä käynnistää paikallisen palvelimen osoitteessa `http://localhost:5000`. Avaa tämä osoite selaimessasi nähdäksesi pelisi. Testaa ohjaimia nuolinäppäimillä ja kokeile ampua vihollisia varmistaaksesi, että kaikki toimii.

### Koodauksen aika!

1. **Hanki tarvitsemasi visuaaliset resurssit**. Kopioi `life.png`-resurssi `solution/assets/`-kansiosta `your-work`-kansioon. Lisää sitten lifeImg `window.onload`-funktioon: 

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Älä unohda lisätä `lifeImg`-kuvaa resurssilistaan:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Aseta pelin muuttujat**. Lisää koodi, joka seuraa kokonaispisteitäsi (alkaen 0) ja jäljellä olevia elämiäsi (alkaen 3). Näytämme nämä ruudulla, jotta pelaajat tietävät aina tilanteensa.

3. **Toteuta törmäysten tunnistus**. Laajenna `updateGameObjects()`-funktiotasi tunnistamaan, kun viholliset törmäävät sankariisi:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Lisää elämien ja pisteiden seuranta sankarillesi**. 
   1. **Alusta laskurit**. Lisää `this.cooldown = 0`-kohdan alle `Hero`-luokassasi elämät ja pisteet:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Näytä nämä arvot pelaajalle**. Luo funktiot, jotka piirtävät nämä arvot ruudulle:

        ```javascript
        function drawLife() {
          // TODO, 35, 27
          const START_POS = canvas.width - 180;
          for(let i=0; i < hero.life; i++ ) {
            ctx.drawImage(
              lifeImg, 
              START_POS + (45 * (i+1) ), 
              canvas.height - 37);
          }
        }
        
        function drawPoints() {
          ctx.font = "30px Arial";
          ctx.fillStyle = "red";
          ctx.textAlign = "left";
          drawText("Points: " + hero.points, 10, canvas.height-20);
        }
        
        function drawText(message, x, y) {
          ctx.fillText(message, x, y);
        }

        ```

   1. **Liitä kaikki pelisilmukkaan**. Lisää nämä funktiot `window.onload`-funktioon heti `updateGameObjects()`-kohdan jälkeen:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Toteuta pelin seuraukset ja palkinnot**. Nyt lisätään palautemekanismit, jotka tekevät pelaajan toimista merkityksellisiä:

   1. **Törmäykset maksavat elämiä**. Joka kerta, kun sankarisi törmää viholliseen, menetät yhden elämän.
   
      Lisää tämä metodi `Hero`-luokkaasi:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Vihollisten ampuminen ansaitsee pisteitä**. Jokainen onnistunut osuma antaa 100 pistettä, tarjoten välitöntä positiivista palautetta tarkasta ampumisesta.

      Laajenna Hero-luokkaasi tällä lisäysmetodilla:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Nyt yhdistä nämä funktiot törmäystapahtumiin:

        ```javascript
        eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
           first.dead = true;
           second.dead = true;
           hero.incrementPoints();
        })

        eventEmitter.on(Messages.COLLISION_ENEMY_HERO, (_, { enemy }) => {
           enemy.dead = true;
           hero.decrementLife();
        });
        ```

✅ Kiinnostunut muista JavaScriptillä ja Canvasilla tehdyistä peleistä? Tutki lisää - saatat yllättyä siitä, mitä kaikkea on mahdollista tehdä!

Kun olet toteuttanut nämä ominaisuudet, testaa peliäsi nähdäksesi täydellisen palautemekanismin toiminnassa. Sinun pitäisi nähdä elämän kuvakkeet oikeassa alakulmassa, pisteesi vasemmassa alakulmassa, ja huomata, kuinka törmäykset vähentävät elämiä ja onnistuneet laukaukset lisäävät pisteitä.

Pelissäsi on nyt olennaiset mekanismit, jotka tekivät varhaisista arcade-peleistä niin koukuttavia - selkeät tavoitteet, välitön palaute ja merkitykselliset seuraukset pelaajan toimille.

---

## GitHub Copilot Agent -haaste 🚀

Käytä Agent-tilaa suorittaaksesi seuraavan haasteen:

**Kuvaus:** Paranna avaruuspelin pistejärjestelmää toteuttamalla ennätyspisteiden ominaisuus pysyvällä tallennuksella ja bonuspisteiden mekanismilla.

**Tehtävä:** Luo ennätyspistejärjestelmä, joka tallentaa pelaajan parhaan tuloksen localStorageen. Lisää bonuspisteitä peräkkäisistä vihollistaposta (kombosysteemi) ja toteuta erilaiset pistemäärät eri vihollistyypeille. Lisää visuaalinen indikaattori, kun pelaaja saavuttaa uuden ennätyspisteen, ja näytä nykyinen ennätyspiste peliruudulla.

## 🚀 Haaste

Sinulla on nyt toimiva peli pisteiden ja elämien kanssa. Mieti, mitkä lisäominaisuudet voisivat parantaa pelaajakokemusta.

## Jälkiquiz

[Jälkiquiz](https://ff-quizzes.netlify.app/web/quiz/38)

## Kertaus ja itseopiskelu

Haluatko tutkia lisää? Tutki erilaisia lähestymistapoja pelin piste- ja elämäsysteemeihin. On olemassa kiehtovia pelimoottoreita, kuten [PlayFab](https://playfab.com), jotka käsittelevät pisteitä, tulostaulukoita ja pelaajien etenemistä. Miten tällaisen integrointi voisi viedä pelisi seuraavalle tasolle?

## Tehtävä

[Rakenna pistepeli](assignment.md)

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.