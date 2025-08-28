<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4e8250db84b027c9ff816b4e4c093457",
  "translation_date": "2025-08-28T11:33:44+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "lt"
}
-->
# Sukurkite kosminį žaidimą, 5 dalis: taškai ir gyvybės

## Klausimai prieš paskaitą

[Klausimai prieš paskaitą](https://ff-quizzes.netlify.app/web/quiz/37)

Šioje pamokoje sužinosite, kaip pridėti taškų skaičiavimą žaidime ir apskaičiuoti gyvybes.

## Teksto rodymas ekrane

Norėdami ekrane rodyti žaidimo taškus, turite žinoti, kaip pateikti tekstą ekrane. Atsakymas yra naudojant `fillText()` metodą ant canvas objekto. Taip pat galite kontroliuoti kitus aspektus, pvz., kokį šriftą naudoti, teksto spalvą ir net jo lygiavimą (kairė, dešinė, centras). Žemiau pateiktas kodas, kuris piešia tekstą ekrane.

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Skaitykite daugiau apie [kaip pridėti tekstą prie canvas](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text) ir drąsiai padarykite savo tekstą įdomesnį!

## Gyvybės kaip žaidimo koncepcija

Gyvybės koncepcija žaidime yra tik skaičius. Kosminio žaidimo kontekste dažnai priskiriamos kelios gyvybės, kurios mažėja po vieną, kai jūsų laivas patiria žalą. Gražu, jei galite parodyti grafinę šio atvaizdavimo formą, pvz., mažus laivelius ar širdeles, o ne skaičių.

## Ką sukurti

Pridėkime šiuos elementus į jūsų žaidimą:

- **Žaidimo taškai**: Už kiekvieną sunaikintą priešo laivą herojus turėtų gauti taškų, siūlome 100 taškų už laivą. Žaidimo taškai turėtų būti rodomi apatiniame kairiajame kampe.
- **Gyvybės**: Jūsų laivas turi tris gyvybes. Kiekvieną kartą, kai priešo laivas susiduria su jumis, prarandate gyvybę. Gyvybių skaičius turėtų būti rodomas apatiniame dešiniajame kampe ir būti sudarytas iš šio grafinio elemento ![gyvybės paveikslėlis](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.lt.png).

## Rekomenduojami žingsniai

Suraskite failus, kurie buvo sukurti jums `your-work` aplanke. Jame turėtų būti šie elementai:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Pradėkite savo projektą `your_work` aplanke įvesdami:

```bash
cd your-work
npm start
```

Aukščiau pateiktas kodas paleis HTTP serverį adresu `http://localhost:5000`. Atidarykite naršyklę ir įveskite šį adresą. Šiuo metu turėtumėte matyti herojų ir visus priešus, o paspaudę kairės ir dešinės rodyklių klavišus, herojus judės ir galės šaudyti į priešus.

### Pridėkite kodą

1. **Nukopijuokite reikalingus išteklius** iš `solution/assets/` aplanko į `your-work` aplanką; pridėsite `life.png` išteklį. Pridėkite `lifeImg` į `window.onload` funkciją:

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Pridėkite `lifeImg` į išteklių sąrašą:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Pridėkite kintamuosius**. Pridėkite kodą, kuris atspindi jūsų bendrą taškų skaičių (0) ir likusias gyvybes (3), parodykite šiuos skaičius ekrane.

3. **Išplėskite `updateGameObjects()` funkciją**. Išplėskite `updateGameObjects()` funkciją, kad apdorotumėte priešų susidūrimus:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Pridėkite gyvybes ir taškus**. 
   1. **Inicializuokite kintamuosius**. Po `this.cooldown = 0` `Hero` klasėje nustatykite gyvybes ir taškus:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Pieškite kintamuosius ekrane**. Rodykite šias reikšmes ekrane:

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

   1. **Pridėkite metodus į žaidimo ciklą**. Įsitikinkite, kad pridėjote šias funkcijas į `window.onload` funkciją po `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Įgyvendinkite žaidimo taisykles**. Įgyvendinkite šias žaidimo taisykles:

   1. **Už kiekvieną herojaus ir priešo susidūrimą** atimkite gyvybę.
   
      Išplėskite `Hero` klasę, kad atliktumėte šį atėmimą:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Už kiekvieną lazerį, kuris pataiko į priešą**, padidinkite žaidimo taškus 100 taškų.

      Išplėskite `Hero` klasę, kad atliktumėte šį padidinimą:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Pridėkite šias funkcijas į susidūrimo įvykių emitentus:

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

✅ Šiek tiek pasidomėkite, kokie kiti žaidimai yra sukurti naudojant JavaScript/Canvas. Kokie jų bendri bruožai?

Baigę šį darbą, turėtumėte matyti mažus „gyvybės“ laivelius apatiniame dešiniajame kampe, taškus apatiniame kairiajame kampe, ir turėtumėte matyti, kaip jūsų gyvybių skaičius mažėja susidūrus su priešais, o taškai didėja šaudant į priešus. Puiku! Jūsų žaidimas beveik baigtas.

---

## 🚀 Iššūkis

Jūsų kodas beveik baigtas. Ar galite įsivaizduoti kitus žingsnius?

## Klausimai po paskaitos

[Klausimai po paskaitos](https://ff-quizzes.netlify.app/web/quiz/38)

## Apžvalga ir savarankiškas mokymasis

Pasidomėkite būdais, kaip galite padidinti ir sumažinti žaidimo taškus bei gyvybes. Yra keletas įdomių žaidimų variklių, pvz., [PlayFab](https://playfab.com). Kaip vieno iš jų naudojimas galėtų pagerinti jūsų žaidimą?

## Užduotis

[Sukurkite žaidimą su taškų skaičiavimu](assignment.md)

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant dirbtinio intelekto vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, atkreipiame dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Kritinei informacijai rekomenduojama naudoti profesionalų žmogaus vertimą. Mes neprisiimame atsakomybės už nesusipratimus ar klaidingus aiškinimus, kylančius dėl šio vertimo naudojimo.