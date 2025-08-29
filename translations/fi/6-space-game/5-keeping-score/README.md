<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "adda95e02afa3fbee67b6e385b1109e1",
  "translation_date": "2025-08-29T00:40:45+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "fi"
}
-->
# Rakenna avaruuspeli, osa 5: Pisteet ja elämät

## Ennakkokysely

[Ennakkokysely](https://ff-quizzes.netlify.app/web/quiz/37)

Tässä oppitunnissa opit lisäämään pisteytyksen peliin ja laskemaan elämiä.

## Piirrä teksti ruudulle

Jotta voit näyttää pelin pisteet ruudulla, sinun täytyy tietää, miten teksti sijoitetaan ruudulle. Ratkaisu on käyttää `fillText()`-metodia canvas-objektissa. Voit myös hallita muita ominaisuuksia, kuten fonttia, tekstin väriä ja sen kohdistusta (vasen, oikea, keskitetty). Alla on koodia, joka piirtää tekstiä ruudulle.

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Lue lisää [tekstin lisäämisestä canvasille](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text), ja voit halutessasi tehdä omastasi näyttävämmän!

## Elämä pelikonseptina

Elämä pelissä on vain numero. Avaruuspeliä ajatellen on yleistä antaa tietty määrä elämiä, jotka vähenevät yksi kerrallaan, kun aluksesi ottaa vahinkoa. On mukavaa, jos voit näyttää tämän graafisesti, esimerkiksi pienillä aluksilla tai sydämillä numeron sijaan.

## Mitä rakennetaan

Lisätään peliin seuraavat ominaisuudet:

- **Pelipisteet**: Jokaisesta tuhotusta vihollisaluksesta sankari saa pisteitä, esimerkiksi 100 pistettä per alus. Pelipisteet tulisi näyttää vasemmassa alakulmassa.
- **Elämät**: Aluksellasi on kolme elämää. Menetät yhden elämän aina, kun vihollisalus törmää sinuun. Elämät tulisi näyttää oikeassa alakulmassa ja niiden tulisi koostua seuraavasta graafisesta elementistä ![elämäkuva](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.fi.png).

## Suositellut vaiheet

Etsi tiedostot, jotka on luotu sinulle `your-work`-alikansioon. Sen pitäisi sisältää seuraavat:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Aloitat projektisi `your_work`-kansiosta kirjoittamalla:

```bash
cd your-work
npm start
```

Yllä oleva komento käynnistää HTTP-palvelimen osoitteessa `http://localhost:5000`. Avaa selain ja syötä tämä osoite. Tällä hetkellä sen pitäisi näyttää sankari ja kaikki viholliset, ja kun painat vasenta ja oikeaa nuolinäppäintä, sankari liikkuu ja voi ampua vihollisia.

### Lisää koodia

1. **Kopioi tarvittavat resurssit** `solution/assets/`-kansiosta `your-work`-kansioon; lisää `life.png`-resurssi. Lisää lifeImg `window.onload`-funktioon:

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Lisää `lifeImg` resurssien listaan:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Lisää muuttujia**. Lisää koodi, joka edustaa kokonaispisteitäsi (0) ja jäljellä olevia elämiä (3), ja näytä nämä arvot ruudulla.

3. **Laajenna `updateGameObjects()`-funktiota**. Laajenna `updateGameObjects()`-funktiota käsittelemään vihollisten törmäyksiä:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Lisää `life` ja `points`**. 
   1. **Alusta muuttujat**. Lisää `this.cooldown = 0`-kohdan alle `Hero`-luokassa elämät ja pisteet:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Piirrä muuttujat ruudulle**. Näytä nämä arvot ruudulla:

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

   1. **Lisää metodit pelisilmukkaan**. Varmista, että lisäät nämä funktiot `window.onload`-funktioon `updateGameObjects()`-kohdan alle:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Toteuta pelisäännöt**. Toteuta seuraavat pelisäännöt:

   1. **Jokaisesta sankarin ja vihollisen törmäyksestä** vähennä yksi elämä.
   
      Laajenna `Hero`-luokkaa tekemään tämä vähennys:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Jokaisesta laserista, joka osuu viholliseen**, lisää pelipisteisiin 100 pistettä.

      Laajenna `Hero`-luokkaa tekemään tämä lisäys:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Lisää nämä funktiot törmäystapahtumien käsittelijöihin:

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

✅ Tee hieman tutkimusta ja selvitä, mitä muita pelejä on luotu JavaScriptillä ja Canvasilla. Mitkä ovat niiden yhteiset piirteet?

Kun olet saanut tämän valmiiksi, sinun pitäisi nähdä pienet "elämä"-alukset oikeassa alakulmassa, pisteet vasemmassa alakulmassa, ja elämien määrä vähenee, kun törmäät vihollisiin, ja pisteet kasvavat, kun ammut vihollisia. Hienoa työtä! Pelisi on melkein valmis.

---

## 🚀 Haaste

Koodisi on melkein valmis. Mitä seuraavaksi voisit tehdä?

## Jälkikysely

[Jälkikysely](https://ff-quizzes.netlify.app/web/quiz/38)

## Kertaus ja itseopiskelu

Tutki tapoja, joilla voit lisätä ja vähentää pelipisteitä ja elämiä. On olemassa mielenkiintoisia pelimoottoreita, kuten [PlayFab](https://playfab.com). Miten tällaisen moottorin käyttö voisi parantaa peliäsi?

## Tehtävä

[Rakenna pisteytyspeli](assignment.md)

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Pyrimme tarkkuuteen, mutta huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäisellä kielellä tulee pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskääntämistä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.