<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a6ce295ff03bb49df7a3e17e6e7100a0",
  "translation_date": "2025-08-29T00:41:05+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "fi"
}
-->
# Rakenna avaruuspeli, osa 4: Lisää laser ja tunnista törmäykset

## Ennakkokysely

[Ennakkokysely](https://ff-quizzes.netlify.app/web/quiz/35)

Tässä osiossa opit ampumaan lasereita JavaScriptillä! Lisäämme peliimme kaksi asiaa:

- **Laserin**: tämä laser ammutaan sankarisi aluksesta pystysuoraan ylöspäin.
- **Törmäyksen tunnistuksen**: osana ampumistoiminnon toteutusta lisäämme myös seuraavat pelisäännöt:
   - **Laser osuu viholliseen**: Vihollinen tuhoutuu, jos laser osuu siihen.
   - **Laser osuu ruudun yläreunaan**: Laser tuhoutuu, jos se osuu ruudun yläosaan.
   - **Vihollinen ja sankari törmäävät**: Vihollinen ja sankari tuhoutuvat, jos ne törmäävät toisiinsa.
   - **Vihollinen osuu ruudun alareunaan**: Vihollinen ja sankari tuhoutuvat, jos vihollinen saavuttaa ruudun alareunan.

Lyhyesti sanottuna, sinun -- *sankarin* -- täytyy tuhota kaikki viholliset laserilla ennen kuin ne ehtivät ruudun alareunaan.

✅ Tee hieman tutkimusta ensimmäisestä koskaan kirjoitetusta tietokonepelistä. Millainen sen toiminnallisuus oli?

Ollaan sankareita yhdessä!

## Törmäyksen tunnistus

Miten tunnistamme törmäykset? Meidän täytyy ajatella pelin objekteja suorakulmioina, jotka liikkuvat ympäriinsä. Miksi näin, saatat kysyä? No, kuva, jota käytetään pelin objektin piirtämiseen, on suorakulmio: sillä on `x`, `y`, `leveys` ja `korkeus`.

Jos kaksi suorakulmiota, esimerkiksi sankari ja vihollinen, *leikkaavat* toisiaan, tapahtuu törmäys. Mitä sen jälkeen tapahtuu, riippuu pelin säännöistä. Törmäyksen tunnistuksen toteuttamiseksi tarvitset seuraavat asiat:

1. Tavan saada pelin objektista suorakulmion esitys, esimerkiksi näin:

   ```javascript
   rectFromGameObject() {
     return {
       top: this.y,
       left: this.x,
       bottom: this.y + this.height,
       right: this.x + this.width
     }
   }
   ```

2. Vertailufunktion, joka voi näyttää tältä:

   ```javascript
   function intersectRect(r1, r2) {
     return !(r2.left > r1.right ||
       r2.right < r1.left ||
       r2.top > r1.bottom ||
       r2.bottom < r1.top);
   }
   ```

## Miten tuhoamme asioita

Asioiden tuhoaminen pelissä tarkoittaa, että pelille kerrotaan, ettei sen enää tarvitse piirtää kyseistä objektia pelisilmukassa, joka käynnistyy tietyin väliajoin. Tämä voidaan tehdä merkitsemällä pelin objekti *kuolleeksi*, kun jotain tapahtuu, esimerkiksi näin:

```javascript
// collision happened
enemy.dead = true
```

Sen jälkeen voit käsitellä *kuolleet* objektit ennen ruudun uudelleenpiirtämistä, esimerkiksi näin:

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## Miten ammutaan laser

Laserin ampuminen tarkoittaa näppäintapahtumaan reagoimista ja objektin luomista, joka liikkuu tiettyyn suuntaan. Meidän täytyy suorittaa seuraavat vaiheet:

1. **Luo laser-objekti**: sankarisi aluksen yläosasta, joka alkaa liikkua ylöspäin kohti ruudun yläosaa heti luomisen jälkeen.
2. **Liitä koodi näppäintapahtumaan**: meidän täytyy valita näppäin, joka edustaa pelaajan laserin ampumista.
3. **Luo pelin objekti, joka näyttää laserilta**, kun näppäintä painetaan.

## Laserin viive

Laserin täytyy ampua aina, kun painat näppäintä, esimerkiksi *välilyöntiä*. Jotta peli ei tuottaisi liian monta laseria lyhyessä ajassa, meidän täytyy korjata tämä. Korjaus tehdään toteuttamalla niin sanottu *viive*, ajastin, joka varmistaa, että laser voidaan ampua vain tietyn ajan välein. Voit toteuttaa sen seuraavasti:

```javascript
class Cooldown {
  constructor(time) {
    this.cool = false;
    setTimeout(() => {
      this.cool = true;
    }, time)
  }
}

class Weapon {
  constructor {
  }
  fire() {
    if (!this.cooldown || this.cooldown.cool) {
      // produce a laser
      this.cooldown = new Cooldown(500);
    } else {
      // do nothing - it hasn't cooled down yet.
    }
  }
}
```

✅ Palaa avaruuspelisarjan ensimmäiseen osaan muistuttaaksesi itseäsi *viiveistä*.

## Mitä rakennetaan

Otat olemassa olevan koodin (jonka olet siivonnut ja refaktoroinut) edellisestä osasta ja laajennat sitä. Voit joko aloittaa osan II koodista tai käyttää koodia kohdasta [Osa III - aloitus](../../../../../../../../../your-work).

> vinkki: laser, jonka kanssa työskentelet, on jo assets-kansiossasi ja viitattu koodissasi

- **Lisää törmäyksen tunnistus**, kun laser osuu johonkin, seuraavien sääntöjen tulisi päteä:
   1. **Laser osuu viholliseen**: vihollinen tuhoutuu, jos laser osuu siihen.
   2. **Laser osuu ruudun yläreunaan**: laser tuhoutuu, jos se osuu ruudun yläosaan.
   3. **Vihollinen ja sankari törmäävät**: vihollinen ja sankari tuhoutuvat, jos ne törmäävät toisiinsa.
   4. **Vihollinen osuu ruudun alareunaan**: vihollinen ja sankari tuhoutuvat, jos vihollinen saavuttaa ruudun alareunan.

## Suositellut vaiheet

Etsi tiedostot, jotka on luotu sinulle `your-work`-alikansiossa. Sen pitäisi sisältää seuraavat:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Aloita projektisi `your_work`-kansiossa kirjoittamalla:

```bash
cd your-work
npm start
```

Yllä oleva käynnistää HTTP-palvelimen osoitteessa `http://localhost:5000`. Avaa selain ja syötä kyseinen osoite. Tällä hetkellä sen pitäisi näyttää sankari ja kaikki viholliset, mutta mikään ei vielä liiku :).

### Lisää koodi

1. **Määritä pelin objektin suorakulmion esitys törmäyksen käsittelyä varten** Alla oleva koodi mahdollistaa suorakulmion esityksen saamisen `GameObject`-objektista. Muokkaa GameObject-luokkaasi laajentaaksesi sitä:

    ```javascript
    rectFromGameObject() {
        return {
          top: this.y,
          left: this.x,
          bottom: this.y + this.height,
          right: this.x + this.width,
        };
      }
    ```

2. **Lisää koodi, joka tarkistaa törmäykset** Tämä on uusi funktio, joka testaa, leikkaavatko kaksi suorakulmiota toisiaan:

    ```javascript
    function intersectRect(r1, r2) {
      return !(
        r2.left > r1.right ||
        r2.right < r1.left ||
        r2.top > r1.bottom ||
        r2.bottom < r1.top
      );
    }
    ```

3. **Lisää laserin ampumiskyky**
   1. **Lisää näppäintapahtumaviesti**. *Välilyönti*-näppäimen pitäisi luoda laser juuri sankarialuksen yläpuolelle. Lisää kolme vakioarvoa Messages-objektiin:

       ```javascript
        KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
        COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
        COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
       ```

   1. **Käsittele välilyöntinäppäin**. Muokkaa `window.addEventListener`-keyup-funktiota käsittelemään välilyöntiä:

      ```javascript
        } else if(evt.keyCode === 32) {
          eventEmitter.emit(Messages.KEY_EVENT_SPACE);
        }
      ```

    1. **Lisää kuuntelijat**. Muokkaa `initGame()`-funktiota varmistaaksesi, että sankari voi ampua, kun välilyöntiä painetaan:

       ```javascript
       eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if (hero.canFire()) {
          hero.fire();
        }
       ```

       ja lisää uusi `eventEmitter.on()`-funktio varmistaaksesi toiminnan, kun vihollinen törmää laseriin:

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   1. **Liikuta objektia**, Varmista, että laser liikkuu vähitellen ruudun yläosaan. Luo uusi Laser-luokka, joka laajentaa `GameObject`-luokkaa, kuten aiemmin:

      ```javascript
        class Laser extends GameObject {
        constructor(x, y) {
          super(x,y);
          (this.width = 9), (this.height = 33);
          this.type = 'Laser';
          this.img = laserImg;
          let id = setInterval(() => {
            if (this.y > 0) {
              this.y -= 15;
            } else {
              this.dead = true;
              clearInterval(id);
            }
          }, 100)
        }
      }
      ```

   1. **Käsittele törmäykset**, Toteuta laserin törmäyssäännöt. Lisää `updateGameObjects()`-funktio, joka testaa törmäyksiä:

      ```javascript
      function updateGameObjects() {
        const enemies = gameObjects.filter(go => go.type === 'Enemy');
        const lasers = gameObjects.filter((go) => go.type === "Laser");
      // laser hit something
        lasers.forEach((l) => {
          enemies.forEach((m) => {
            if (intersectRect(l.rectFromGameObject(), m.rectFromGameObject())) {
            eventEmitter.emit(Messages.COLLISION_ENEMY_LASER, {
              first: l,
              second: m,
            });
          }
         });
      });

        gameObjects = gameObjects.filter(go => !go.dead);
      }  
      ```

      Varmista, että lisäät `updateGameObjects()`-funktion pelisilmukkaasi `window.onload`-kohdassa.

   4. **Toteuta viive** laserille, jotta sitä voidaan ampua vain tietyn ajan välein.

      Lopuksi, muokkaa Hero-luokkaa niin, että se voi käyttää viivettä:

       ```javascript
      class Hero extends GameObject {
        constructor(x, y) {
          super(x, y);
          (this.width = 99), (this.height = 75);
          this.type = "Hero";
          this.speed = { x: 0, y: 0 };
          this.cooldown = 0;
        }
        fire() {
          gameObjects.push(new Laser(this.x + 45, this.y - 10));
          this.cooldown = 500;
    
          let id = setInterval(() => {
            if (this.cooldown > 0) {
              this.cooldown -= 100;
            } else {
              clearInterval(id);
            }
          }, 200);
        }
        canFire() {
          return this.cooldown === 0;
        }
      }
      ```

Tässä vaiheessa pelissäsi on joitakin toiminnallisuuksia! Voit liikkua nuolinäppäimillä, ampua laserin välilyönnillä, ja viholliset katoavat, kun osut niihin. Hyvin tehty!

---

## 🚀 Haaste

Lisää räjähdys! Tutustu pelin assetteihin [Space Art -repo](../../../../6-space-game/solution/spaceArt/readme.txt) -kohdassa ja yritä lisätä räjähdys, kun laser osuu viholliseen.

## Jälkikysely

[Jälkikysely](https://ff-quizzes.netlify.app/web/quiz/36)

## Kertaus ja itseopiskelu

Kokeile pelisi aikavälejä tähän mennessä. Mitä tapahtuu, kun muutat niitä? Lue lisää [JavaScriptin ajoitustapahtumista](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Tehtävä

[Tutki törmäyksiä](assignment.md)

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäisellä kielellä tulee pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskääntämistä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.