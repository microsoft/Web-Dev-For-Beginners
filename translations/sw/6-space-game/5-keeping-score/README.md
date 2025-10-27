<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d642759cf1542f554871f74956a59af9",
  "translation_date": "2025-10-24T19:44:06+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "sw"
}
-->
# Jenga Mchezo wa Anga Sehemu ya 5: Alama na Maisha

## Maswali ya Awali ya Somo

[Maswali ya awali ya somo](https://ff-quizzes.netlify.app/web/quiz/37)

Tayari kufanya mchezo wako wa anga uhisi kama mchezo halisi? Hebu tuongeze alama za pointi na kudhibiti maisha - mbinu za msingi ambazo zilibadilisha michezo ya awali ya arcade kama Space Invaders kutoka maonyesho rahisi hadi burudani ya kuvutia. Hapa ndipo mchezo wako unakuwa wa kuchezeka kweli.

## Kuchora Maandishi Kwenye Skrini - Sauti ya Mchezo Wako

Ili kuonyesha alama zako, tunahitaji kujifunza jinsi ya kuandika maandishi kwenye canvas. Njia ya `fillText()` ndiyo zana yako kuu kwa hili - ni mbinu ile ile iliyotumika katika michezo ya arcade ya zamani kuonyesha alama na taarifa za hali.

Una udhibiti kamili juu ya muonekano wa maandishi:

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Chunguza zaidi kuhusu [kuongeza maandishi kwenye canvas](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text) - unaweza kushangazwa na jinsi unavyoweza kuwa mbunifu na fonti na mitindo!

## Maisha - Zaidi ya Nambari Tu

Katika muundo wa mchezo, "maisha" yanawakilisha nafasi ya mchezaji kufanya makosa. Dhana hii ilianza na mashine za pinball, ambapo ungepata mipira kadhaa ya kucheza nayo. Katika michezo ya video ya awali kama Asteroids, maisha yalipa wachezaji ruhusa ya kuchukua hatari na kujifunza kutokana na makosa.

Uwakilishi wa kuona ni muhimu sana - kuonyesha ikoni za meli badala ya tu "Maisha: 3" huunda utambuzi wa haraka wa kuona, sawa na jinsi kabati za arcade za awali zilivyotumia picha kuwasiliana bila kujali vizuizi vya lugha.

## Kujenga Mfumo wa Tuzo wa Mchezo Wako

Sasa tutaweka mifumo ya maoni ya msingi inayowafanya wachezaji waendelee kucheza:

- **Mfumo wa alama**: Kila meli ya adui iliyoharibiwa inatoa alama 100 (nambari za mviringo ni rahisi kwa wachezaji kuhesabu kiakili). Alama zinaonyeshwa kwenye kona ya chini kushoto.
- **Kipima maisha**: Shujaa wako anaanza na maisha matatu - kiwango kilichowekwa na michezo ya arcade ya awali ili kusawazisha changamoto na uchezaji. Kila mgongano na adui unagharimu maisha moja. Tutaonyesha maisha yaliyobaki kwenye kona ya chini kulia kwa kutumia ikoni za meli ![picha ya maisha](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.sw.png).

## Hebu Tuanze Kujenga!

Kwanza, andaa mazingira yako ya kazi. Nenda kwenye faili katika folda yako ndogo ya `your-work`. Unapaswa kuona faili hizi:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Ili kujaribu mchezo wako, anzisha seva ya maendeleo kutoka folda ya `your_work`:

```bash
cd your-work
npm start
```

Hii inaendesha seva ya ndani kwenye `http://localhost:5000`. Fungua anwani hii kwenye kivinjari chako ili kuona mchezo wako. Jaribu vidhibiti kwa funguo za mshale na jaribu kupiga adui ili kuthibitisha kila kitu kinafanya kazi.

### Muda wa Kuandika Nambari!

1. **Chukua mali za kuona unazohitaji**. Nakili mali ya `life.png` kutoka folda ya `solution/assets/` hadi folda yako ya `your-work`. Kisha ongeza lifeImg kwenye kazi yako ya window.onload: 

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Usisahau kuongeza `lifeImg` kwenye orodha yako ya mali:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Sanidi vigezo vya mchezo wako**. Ongeza nambari kufuatilia alama zako za jumla (kuanzia 0) na maisha yaliyobaki (kuanzia 3). Tutaonyesha hizi kwenye skrini ili wachezaji daima wajue wanasimama wapi.

3. **Tekeleza utambuzi wa mgongano**. Panua kazi yako ya `updateGameObjects()` ili kugundua wakati adui wanagongana na shujaa wako:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Ongeza ufuatiliaji wa maisha na pointi kwa Shujaa wako**. 
   1. **Anzisha kaunta**. Chini ya `this.cooldown = 0` katika darasa lako la `Hero`, sanidi maisha na pointi:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Onyesha maadili haya kwa mchezaji**. Unda kazi za kuchora maadili haya kwenye skrini:

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

   1. **Unganisha kila kitu kwenye mzunguko wa mchezo wako**. Ongeza kazi hizi kwenye kazi yako ya window.onload mara tu baada ya `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Tekeleza matokeo na tuzo za mchezo**. Sasa tutaongeza mifumo ya maoni inayofanya vitendo vya mchezaji kuwa na maana:

   1. **Migongano inagharimu maisha**. Kila wakati shujaa wako anagongana na adui, unapaswa kupoteza maisha.
   
      Ongeza njia hii kwenye darasa lako la `Hero`:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Kupiga adui kunapata pointi**. Kila hit sahihi inatoa alama 100, ikitoa maoni ya haraka ya chanya kwa upigaji sahihi.

      Panua darasa lako la Hero na njia hii ya kuongeza:

        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Sasa unganisha kazi hizi kwenye matukio ya mgongano:

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

✅ Unavutiwa na michezo mingine iliyojengwa kwa JavaScript na Canvas? Fanya uchunguzi - unaweza kushangazwa na kile kinachowezekana!

Baada ya kutekeleza vipengele hivi, jaribu mchezo wako ili kuona mfumo kamili wa maoni ukifanya kazi. Unapaswa kuona ikoni za maisha kwenye kona ya chini kulia, alama zako kwenye kona ya chini kushoto, na uone jinsi migongano inavyopunguza maisha huku risasi sahihi zikiongeza alama zako.

Mchezo wako sasa una mbinu muhimu ambazo zilifanya michezo ya arcade ya awali kuwa ya kuvutia - malengo wazi, maoni ya haraka, na matokeo yenye maana kwa vitendo vya mchezaji.

---

## Changamoto ya Wakala wa GitHub Copilot 🚀

Tumia hali ya Wakala kukamilisha changamoto ifuatayo:

**Maelezo:** Boresha mfumo wa alama wa mchezo wa anga kwa kutekeleza kipengele cha alama ya juu na uhifadhi wa kudumu pamoja na mbinu za alama za bonasi.

**Kichocheo:** Unda mfumo wa alama ya juu unaohifadhi alama bora ya mchezaji kwenye localStorage. Ongeza pointi za bonasi kwa mauaji ya adui mfululizo (mfumo wa combo) na tekeleza maadili tofauti ya pointi kwa aina tofauti za adui. Ongeza kiashiria cha kuona wakati mchezaji anafikia alama mpya ya juu na onyesha alama ya juu ya sasa kwenye skrini ya mchezo.



## 🚀 Changamoto

Sasa una mchezo unaofanya kazi na alama na maisha. Fikiria ni vipengele gani vya ziada vinaweza kuboresha uzoefu wa mchezaji.

## Maswali ya Baada ya Somo

[Maswali ya baada ya somo](https://ff-quizzes.netlify.app/web/quiz/38)

## Mapitio na Kujifunza Binafsi

Unataka kuchunguza zaidi? Tafiti mbinu tofauti za alama za mchezo na mifumo ya maisha. Kuna injini za michezo za kuvutia kama [PlayFab](https://playfab.com) zinazoshughulikia alama, orodha za viongozi, na maendeleo ya wachezaji. Je, kuunganisha kitu kama hicho kunaweza kuboresha mchezo wako kwa kiwango kingine?

## Kazi

[Jenga Mchezo wa Alama](assignment.md)

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya kutafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.