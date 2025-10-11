<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a6ce295ff03bb49df7a3e17e6e7100a0",
  "translation_date": "2025-10-11T12:13:24+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "et"
}
-->
# Kosmoseteemalise mängu loomine, osa 4: Laseri lisamine ja kokkupõrgete tuvastamine

## Loengu-eelne viktoriin

[Loengu-eelne viktoriin](https://ff-quizzes.netlify.app/web/quiz/35)

Selles õppetunnis õpid, kuidas JavaScripti abil lasereid tulistada! Lisame oma mängule kaks asja:

- **Laser**: see laser tulistatakse sinu kangelase laevast vertikaalselt ülespoole.
- **Kokkupõrgete tuvastamine**: osana laseri tulistamise funktsionaalsusest lisame ka mõned mängureeglid:
   - **Laser tabab vaenlast**: vaenlane hävib, kui laser teda tabab.
   - **Laser tabab ekraani ülemist osa**: laser hävitatakse, kui see tabab ekraani ülemist osa.
   - **Vaenlase ja kangelase kokkupõrge**: vaenlane ja kangelane hävitatakse, kui nad üksteist tabavad.
   - **Vaenlane tabab ekraani alumist osa**: vaenlane ja kangelane hävitatakse, kui vaenlane jõuab ekraani alumisse ossa.

Lühidalt öeldes pead sina – *kangelane* – hävitama kõik vaenlased laseriga enne, kui nad jõuavad ekraani alumisse ossa.

✅ Uuri veidi esimese arvutimängu kohta, mis kunagi kirjutati. Milline oli selle funktsionaalsus?

Olge kangelased koos!

## Kokkupõrgete tuvastamine

Kuidas tuvastada kokkupõrkeid? Peame mõtlema oma mängu objektidest kui liikuvatest ristkülikutest. Miks? Sest mänguobjekti joonistamiseks kasutatav pilt on ristkülik: sellel on `x`, `y`, `laius` ja `kõrgus`.

Kui kaks ristkülikut, näiteks kangelane ja vaenlane, *lõikuvad*, toimub kokkupõrge. Mis siis juhtub, sõltub mängureeglitest. Kokkupõrgete tuvastamiseks on vaja järgmist:

1. Viis, kuidas saada mänguobjekti ristkülikukujuline esitus, midagi sellist:

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

2. Võrdlusfunktsioon, mis võib välja näha selline:

   ```javascript
   function intersectRect(r1, r2) {
     return !(r2.left > r1.right ||
       r2.right < r1.left ||
       r2.top > r1.bottom ||
       r2.bottom < r1.top);
   }
   ```

## Kuidas asju hävitada

Asjade hävitamiseks mängus pead mängule teada andma, et see ei peaks enam seda objekti ekraanil joonistama. Üks viis seda teha on märkida mänguobjekt *surnuks*, kui midagi juhtub, näiteks nii:

```javascript
// collision happened
enemy.dead = true
```

Seejärel saad *surnud* objektid enne ekraani uuesti joonistamist välja sorteerida, näiteks nii:

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## Kuidas laserit tulistada

Laseri tulistamine tähendab reageerimist klahvivajutusele ja objekti loomist, mis liigub kindlas suunas. Selleks peame tegema järgmised sammud:

1. **Loo laseri objekt**: kangelase laeva ülemisest osast, mis hakkab loomishetkel liikuma ülespoole ekraani ülemise osa suunas.
2. **Lisa kood klahvivajutuse sündmusele**: peame valima klaviatuuril klahvi, mis tähistab mängija laseri tulistamist.
3. **Loo mänguobjekt, mis näeb välja nagu laser**, kui klahv on vajutatud.

## Laseri tulistamise intervall

Laser peab tulistama iga kord, kui vajutad klahvi, näiteks *tühikut*. Et vältida liiga paljude laserite kiiret loomist, peame selle parandama. Lahendus on rakendada nn *intervalli*, taimerit, mis tagab, et laserit saab tulistada ainult teatud sagedusega. Seda saab rakendada järgmiselt:

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

✅ Vaata kosmoseteemalise mängu sarja esimest õppetundi, et meenutada, kuidas *intervallid* töötavad.

## Mida ehitada

Pead võtma olemasoleva koodi (mille sa peaksid olema juba puhastanud ja refaktoreerinud) eelmisest õppetunnist ja seda laiendama. Alusta kas II osa koodist või kasuta koodi [III osa - algus](../../../../../../../../../your-work).

> vihje: laser, millega töötad, on juba sinu varade kaustas ja viidatud sinu koodis.

- **Lisa kokkupõrgete tuvastamine**, kui laser põrkub millegagi, peaksid kehtima järgmised reeglid:
   1. **Laser tabab vaenlast**: vaenlane hävib, kui laser teda tabab.
   2. **Laser tabab ekraani ülemist osa**: laser hävitatakse, kui see tabab ekraani ülemist osa.
   3. **Vaenlase ja kangelase kokkupõrge**: vaenlane ja kangelane hävitatakse, kui nad üksteist tabavad.
   4. **Vaenlane tabab ekraani alumist osa**: vaenlane ja kangelane hävitatakse, kui vaenlane jõuab ekraani alumisse ossa.

## Soovitatavad sammud

Leia failid, mis on sinu jaoks loodud kaustas `your-work`. Need peaksid sisaldama järgmist:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Alusta oma projekti kaustas `your_work`, sisestades:

```bash
cd your-work
npm start
```

Ülaltoodu käivitab HTTP serveri aadressil `http://localhost:5000`. Ava brauser ja sisesta see aadress, praegu peaks see kuvama kangelase ja kõik vaenlased, kuid miski ei liigu - veel :).

### Lisa kood

1. **Loo mänguobjekti ristkülikukujuline esitus kokkupõrgete tuvastamiseks**. Allolev kood võimaldab saada `GameObject`-i ristkülikukujulise esituse. Muuda oma GameObject klassi, et seda laiendada:

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

2. **Lisa kood, mis kontrollib kokkupõrkeid**. See on uus funktsioon, mis testib, kas kaks ristkülikut lõikuvad:

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

3. **Lisa laseri tulistamise funktsionaalsus**
   1. **Lisa klahvivajutuse sõnum**. *Tühiku* klahv peaks looma laseri otse kangelase laeva kohal. Lisa kolm konstanti Messages objekti:

       ```javascript
        KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
        COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
        COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
       ```

   1. **Käsitle tühiku klahvi**. Muuda `window.addEventListener` keyup funktsiooni, et käsitleda tühikut:

      ```javascript
        } else if(evt.keyCode === 32) {
          eventEmitter.emit(Messages.KEY_EVENT_SPACE);
        }
      ```

    1. **Lisa kuulajad**. Muuda `initGame()` funktsiooni, et tagada, et kangelane saab tulistada, kui tühiku klahvi vajutatakse:

       ```javascript
       eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if (hero.canFire()) {
          hero.fire();
        }
       ```

       ja lisa uus `eventEmitter.on()` funktsioon, et tagada käitumine, kui vaenlane põrkub laseriga:

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   1. **Liiguta objekti**, tagades, et laser liigub järk-järgult ekraani ülemise osa suunas. Loo uus Laser klass, mis laiendab `GameObject`-i, nagu oled varem teinud: 
   
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

   1. **Käsitle kokkupõrkeid**, rakenda laseri kokkupõrke reeglid. Lisa `updateGameObjects()` funktsioon, mis testib kokkupõrkeid objektide vahel:

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

      Veendu, et lisad `updateGameObjects()` oma mängu tsüklisse `window.onload`-is.

   4. **Rakenda laseri intervall**, et seda saaks tulistada ainult teatud sagedusega.

      Lõpuks muuda Hero klassi, et see saaks intervalli rakendada:

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

Nüüd on sinu mängul juba mõningane funktsionaalsus! Sa saad navigeerida nooleklahvidega, tulistada laserit tühiku klahviga ja vaenlased kaovad, kui neid tabad. Tubli töö!

---

## 🚀 Väljakutse

Lisa plahvatus! Vaata mängu varasid [Space Art repo](../../../../6-space-game/solution/spaceArt/readme.txt) ja proovi lisada plahvatus, kui laser tabab tulnukat.

## Loengu-järgne viktoriin

[Loengu-järgne viktoriin](https://ff-quizzes.netlify.app/web/quiz/36)

## Ülevaade ja iseseisev õppimine

Katseta oma mängus seni kasutatud intervalle. Mis juhtub, kui neid muuta? Loe rohkem [JavaScripti ajastamise sündmuste kohta](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Ülesanne

[Uuri kokkupõrkeid](assignment.md)

---

**Lahtiütlus**:  
See dokument on tõlgitud, kasutades AI tõlketeenust [Co-op Translator](https://github.com/Azure/co-op-translator). Kuigi püüame tagada täpsust, palun arvestage, et automaatsed tõlked võivad sisaldada vigu või ebatäpsusi. Algne dokument selle algses keeles tuleks lugeda autoriteetseks allikaks. Olulise teabe puhul on soovitatav kasutada professionaalset inimtõlget. Me ei vastuta selle tõlke kasutamisest tulenevate arusaamatuste või valede tõlgenduste eest.