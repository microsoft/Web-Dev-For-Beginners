<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "adda95e02afa3fbee67b6e385b1109e1",
  "translation_date": "2025-08-29T10:05:19+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "sw"
}
-->
# Jenga Mchezo wa Anga Sehemu ya 5: Alama na Maisha

## Jaribio la Kabla ya Somo

[Jaribio la kabla ya somo](https://ff-quizzes.netlify.app/web/quiz/37)

Katika somo hili, utajifunza jinsi ya kuongeza alama kwenye mchezo na kuhesabu maisha.

## Chora maandishi kwenye skrini

Ili kuweza kuonyesha alama za mchezo kwenye skrini, unahitaji kujua jinsi ya kuweka maandishi kwenye skrini. Jibu ni kutumia njia ya `fillText()` kwenye kitu cha canvas. Unaweza pia kudhibiti vipengele vingine kama fonti ya kutumia, rangi ya maandishi na hata mpangilio wake (kushoto, kulia, katikati). Hapo chini kuna msimbo unaochora maandishi kwenye skrini.

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Soma zaidi kuhusu [jinsi ya kuongeza maandishi kwenye canvas](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text), na jisikie huru kufanya yako ionekane ya kuvutia zaidi!

## Maisha, kama dhana ya mchezo

Dhana ya kuwa na maisha kwenye mchezo ni namba tu. Katika muktadha wa mchezo wa anga, ni kawaida kupewa seti ya maisha ambayo hupunguzwa moja baada ya nyingine wakati chombo chako kinapopata uharibifu. Ni vizuri ikiwa unaweza kuonyesha uwakilishi wa picha wa hili kama vyombo vidogo au mioyo badala ya namba.

## Nini cha kujenga

Ongeza yafuatayo kwenye mchezo wako:

- **Alama za mchezo**: Kwa kila chombo cha adui kinachoharibiwa, shujaa anapaswa kupewa alama, tunapendekeza alama 100 kwa kila chombo. Alama za mchezo zinapaswa kuonyeshwa chini kushoto.
- **Maisha**: Chombo chako kina maisha matatu. Unapoteza maisha kila wakati chombo cha adui kinapogongana na wewe. Alama za maisha zinapaswa kuonyeshwa chini kulia na ziwe na picha ifuatayo ![life image](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.sw.png).

## Hatua Zinazopendekezwa

Tafuta faili ambazo zimeundwa kwa ajili yako kwenye folda ndogo ya `your-work`. Inapaswa kuwa na yafuatayo:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Anzisha mradi wako kwenye folda ya `your_work` kwa kuandika:

```bash
cd your-work
npm start
```

Hii itaanzisha HTTP Server kwenye anwani `http://localhost:5000`. Fungua kivinjari na uweke anwani hiyo, kwa sasa inapaswa kuonyesha shujaa na maadui wote, na unapobonyeza mishale ya kushoto na kulia, shujaa anasogea na anaweza kupiga maadui risasi.

### Ongeza msimbo

1. **Nakili mali zinazohitajika** kutoka kwenye folda ya `solution/assets/` hadi kwenye folda ya `your-work`; utaongeza mali ya `life.png`. Ongeza `lifeImg` kwenye kazi ya window.onload:

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Ongeza `lifeImg` kwenye orodha ya mali:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Ongeza vigezo**. Ongeza msimbo unaowakilisha alama zako za jumla (0) na maisha yaliyobaki (3), onyesha alama hizi kwenye skrini.

3. **Panua kazi ya `updateGameObjects()`**. Panua kazi ya `updateGameObjects()` ili kushughulikia migongano ya maadui:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Ongeza `life` na `points`**. 
   1. **Anzisha vigezo**. Chini ya `this.cooldown = 0` kwenye darasa la `Hero`, weka maisha na alama:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Chora vigezo kwenye skrini**. Chora thamani hizi kwenye skrini:

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

   1. **Ongeza mbinu kwenye mzunguko wa Mchezo**. Hakikisha unaongeza kazi hizi kwenye kazi yako ya window.onload chini ya `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Tekeleza sheria za mchezo**. Tekeleza sheria zifuatazo za mchezo:

   1. **Kwa kila mgongano wa shujaa na adui**, punguza maisha moja.
   
      Panua darasa la `Hero` kufanya upunguzaji huu:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Kwa kila risasi inayogonga adui**, ongeza alama za mchezo kwa alama 100.

      Panua darasa la Hero kufanya ongezeko hili:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Ongeza kazi hizi kwenye Emitters za Tukio la Migongano:

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

✅ Fanya utafiti kidogo kugundua michezo mingine iliyoundwa kwa kutumia JavaScript/Canvas. Ni sifa gani za kawaida wanazo?

Mwisho wa kazi hii, unapaswa kuona vyombo vidogo vya 'maisha' chini kulia, alama chini kushoto, na unapaswa kuona hesabu ya maisha ikipungua unapogongana na maadui na alama zako zikiongezeka unapopiga maadui risasi. Hongera! Mchezo wako karibu umekamilika.

---

## 🚀 Changamoto

Msimbo wako karibu umekamilika. Je, unaweza kufikiria hatua zako zinazofuata?

## Jaribio la Baada ya Somo

[Jaribio la baada ya somo](https://ff-quizzes.netlify.app/web/quiz/38)

## Mapitio na Kujisomea

Fanya utafiti wa njia ambazo unaweza kuongeza na kupunguza alama za mchezo na maisha. Kuna injini za michezo za kuvutia kama [PlayFab](https://playfab.com). Je, kutumia moja ya hizi kunaweza kuboresha mchezo wako vipi?

## Kazi

[Jenga Mchezo wa Alama](assignment.md)

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, inashauriwa kutumia tafsiri ya kitaalamu ya binadamu. Hatutawajibika kwa maelewano mabaya au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.