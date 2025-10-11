<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "adda95e02afa3fbee67b6e385b1109e1",
  "translation_date": "2025-10-11T12:15:16+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "et"
}
-->
# Kosmosemängu loomine, osa 5: Punktid ja elud

## Eelloengu viktoriin

[Eelloengu viktoriin](https://ff-quizzes.netlify.app/web/quiz/37)

Selles tunnis õpid, kuidas lisada mängule punktisüsteemi ja arvutada elusid.

## Teksti kuvamine ekraanil

Et mängu punktisüsteemi ekraanil kuvada, pead teadma, kuidas teksti ekraanile paigutada. Vastus on `fillText()` meetodi kasutamine canvas-objektil. Samuti saad kontrollida teisi aspekte, nagu millist fonti kasutada, teksti värvi ja isegi joondust (vasak, parem, keskel). Allpool on näide koodist, mis kuvab teksti ekraanil.

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Loe rohkem [teksti lisamise kohta canvas'ile](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text) ja tee oma versioon veelgi stiilsemaks!

## Elu kui mängu kontseptsioon

Elu kontseptsioon mängus on lihtsalt number. Kosmosemängu kontekstis on tavaks määrata kindel arv elusid, mis vähenevad ükshaaval, kui sinu laev saab kahjustada. Tore oleks, kui saaksid seda graafiliselt kujutada, näiteks väikeste laevade või südametega, mitte ainult numbriga.

## Mida ehitada

Lisame mängule järgmised elemendid:

- **Mängu punktisüsteem**: Iga vaenlase laeva hävitamise eest peaks kangelane saama punkte, soovitame 100 punkti laeva kohta. Punktisüsteem peaks olema kuvatud ekraani vasakus allnurgas.
- **Elud**: Sinu laeval on kolm elu. Kaotad ühe elu iga kord, kui vaenlase laev sinuga kokku põrkub. Elude arv peaks olema kuvatud ekraani paremas allnurgas ja kujutatud järgmise graafikaga ![elu pilt](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.et.png).

## Soovitatud sammud

Leia failid, mis on sinu jaoks loodud kaustas `your-work`. See peaks sisaldama järgmist:

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

Ülaltoodud käsk käivitab HTTP-serveri aadressil `http://localhost:5000`. Ava brauser ja sisesta see aadress. Praegu peaksid nägema kangelast ja kõiki vaenlasi, ning kui vajutad vasak- ja paremnoolt, liigub kangelane ja saab vaenlasi tulistada.

### Koodi lisamine

1. **Kopeeri vajalikud ressursid** kaustast `solution/assets/` kausta `your-work`; lisad sinna `life.png` ressursi. Lisa `lifeImg` funktsiooni window.onload:

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Lisa `lifeImg` ressursside nimekirja:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Lisa muutujad**. Lisa kood, mis esindab sinu punktisummat (0) ja allesjäänud elusid (3), ning kuva need ekraanil.

3. **Laienda funktsiooni `updateGameObjects()`**. Laienda funktsiooni `updateGameObjects()`, et käsitleda vaenlaste kokkupõrkeid:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Lisa elud ja punktid**. 
   1. **Initsialiseeri muutujad**. Lisa `this.cooldown = 0` alla klassis `Hero` elud ja punktid:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Kuva muutujad ekraanil**. Kuva need väärtused ekraanil:

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

   1. **Lisa meetodid mängutsüklisse**. Veendu, et lisad need funktsioonid oma window.onload funktsiooni `updateGameObjects()` alla:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Rakenda mängureeglid**. Rakenda järgmised mängureeglid:

   1. **Iga kangelase ja vaenlase kokkupõrke korral** vähenda elu.

      Laienda klassi `Hero`, et seda vähendamist teha:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Iga laseri, mis tabab vaenlast, korral** suurenda punktisummat 100 punkti võrra.

      Laienda klassi `Hero`, et seda suurendamist teha:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Lisa need funktsioonid oma kokkupõrke sündmuste emitentidesse:

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

✅ Uuri, milliseid teisi mänge on loodud JavaScripti/Canvas'i abil. Millised on nende ühised omadused?

Selle töö lõpus peaksid nägema väikeseid "elu" laevu paremas allnurgas, punkte vasakus allnurgas, ning sinu elude arv peaks vähenema, kui põrkad vaenlastega, ja punktid peaksid suurenema, kui tulistad vaenlasi. Tubli töö! Sinu mäng on peaaegu valmis.

---

## 🚀 Väljakutse

Sinu kood on peaaegu valmis. Kas suudad ette kujutada järgmisi samme?

## Järelloengu viktoriin

[Järelloengu viktoriin](https://ff-quizzes.netlify.app/web/quiz/38)

## Ülevaade ja iseseisev õppimine

Uuri mõningaid viise, kuidas mängus punkte ja elusid suurendada ja vähendada. On olemas huvitavaid mängumootoreid, nagu [PlayFab](https://playfab.com). Kuidas nende kasutamine võiks sinu mängu täiustada?

## Ülesanne

[Loo punktisüsteemiga mäng](assignment.md)

---

**Lahtiütlus**:  
See dokument on tõlgitud AI tõlketeenuse [Co-op Translator](https://github.com/Azure/co-op-translator) abil. Kuigi püüame tagada täpsust, palume arvestada, et automaatsed tõlked võivad sisaldada vigu või ebatäpsusi. Algne dokument selle algses keeles tuleks pidada autoriteetseks allikaks. Olulise teabe puhul soovitame kasutada professionaalset inimtõlget. Me ei vastuta selle tõlke kasutamisest tulenevate arusaamatuste või valesti tõlgenduste eest.