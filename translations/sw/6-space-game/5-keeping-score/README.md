<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4e8250db84b027c9ff816b4e4c093457",
  "translation_date": "2025-08-28T03:54:25+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "sw"
}
-->
# Jenga Mchezo wa Anga Sehemu ya 5: Alama na Maisha

## Maswali ya Awali ya Somo

[Maswali ya awali ya somo](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/37)

Katika somo hili, utajifunza jinsi ya kuongeza alama kwenye mchezo na kuhesabu maisha.

## Chora maandishi kwenye skrini

Ili kuweza kuonyesha alama za mchezo kwenye skrini, unahitaji kujua jinsi ya kuweka maandishi kwenye skrini. Jibu ni kutumia njia ya `fillText()` kwenye kitu cha canvas. Unaweza pia kudhibiti vipengele vingine kama fonti ya kutumia, rangi ya maandishi, na hata mpangilio wake (kushoto, kulia, katikati). Hapa chini kuna msimbo unaochora maandishi kwenye skrini.

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Soma zaidi kuhusu [jinsi ya kuongeza maandishi kwenye canvas](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text), na jisikie huru kufanya yako ionekane ya kuvutia zaidi!

## Maisha, kama dhana ya mchezo

Dhana ya kuwa na maisha kwenye mchezo ni namba tu. Katika muktadha wa mchezo wa anga, ni kawaida kupewa seti ya maisha ambayo hupunguzwa moja moja unapopata uharibifu kwenye chombo chako. Ni vizuri ikiwa unaweza kuonyesha uwakilishi wa picha wa hili kama vyombo vidogo au mioyo badala ya namba.

## Kitu cha Kujenga

Tuongeze yafuatayo kwenye mchezo wako:

- **Alama za mchezo**: Kwa kila chombo cha adui kinachoharibiwa, shujaa anapaswa kupewa alama, tunapendekeza alama 100 kwa kila chombo. Alama za mchezo zinapaswa kuonyeshwa chini kushoto.
- **Maisha**: Chombo chako kina maisha matatu. Unapoteza maisha kila wakati chombo cha adui kinapogongana na chombo chako. Alama ya maisha inapaswa kuonyeshwa chini kulia na iwe na picha ifuatayo ![picha ya maisha](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.sw.png).

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

Hii itaanzisha seva ya HTTP kwenye anwani `http://localhost:5000`. Fungua kivinjari na ingiza anwani hiyo, kwa sasa inapaswa kuonyesha shujaa na maadui wote, na unapobonyeza mishale ya kushoto na kulia, shujaa husogea na anaweza kupiga maadui.

### Ongeza Msimbo

1. **Nakili mali zinazohitajika** kutoka folda ya `solution/assets/` kwenda kwenye folda ya `your-work`; utaongeza mali ya `life.png`. Ongeza lifeImg kwenye kazi ya window.onload:

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
  
2. **Ongeza vigezo**. Ongeza msimbo unaowakilisha alama zako za jumla (0) na maisha yaliyosalia (3), onyesha alama hizi kwenye skrini.

3. **Panua kazi ya `updateGameObjects()`**. Panua kazi ya `updateGameObjects()` kushughulikia migongano ya maadui:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Ongeza `maisha` na `alama`**. 
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

   1. **Ongeza mbinu kwenye mzunguko wa mchezo**. Hakikisha unaongeza kazi hizi kwenye kazi ya window.onload chini ya `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Tekeleza sheria za mchezo**. Tekeleza sheria zifuatazo za mchezo:

   1. **Kwa kila mgongano wa shujaa na adui**, punguza maisha.

      Panua darasa la `Hero` kufanya upunguzaji huu:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Kwa kila laser inayogonga adui**, ongeza alama za mchezo kwa alama 100.

      Panua darasa la Hero kufanya ongezeko hili:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Ongeza kazi hizi kwenye Emitters za Matukio ya Migongano:

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

✅ Fanya utafiti kidogo kugundua michezo mingine iliyoundwa kwa kutumia JavaScript/Canvas. Je, ni sifa gani za kawaida wanazo?

Mwisho wa kazi hii, unapaswa kuona vyombo vidogo vya 'maisha' chini kulia, alama chini kushoto, na unapaswa kuona hesabu ya maisha yako ikipungua unapogongana na maadui na alama zako zikiongezeka unapopiga maadui. Hongera! Mchezo wako karibu umekamilika.

---

## 🚀 Changamoto

Msimbo wako karibu umekamilika. Je, unaweza kufikiria hatua zako zinazofuata?

## Maswali ya Baada ya Somo

[Maswali ya baada ya somo](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/38)

## Mapitio na Kujisomea

Fanya utafiti kuhusu njia ambazo unaweza kuongeza na kupunguza alama za mchezo na maisha. Kuna injini za michezo za kuvutia kama [PlayFab](https://playfab.com). Je, kutumia moja ya hizi kungeboresha mchezo wako?

## Kazi

[Jenga Mchezo wa Alama](assignment.md)

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya kutafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kuhakikisha usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati asilia katika lugha yake ya awali inapaswa kuchukuliwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.