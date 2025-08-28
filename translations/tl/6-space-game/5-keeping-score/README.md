<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4e8250db84b027c9ff816b4e4c093457",
  "translation_date": "2025-08-27T22:35:07+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "tl"
}
-->
# Gumawa ng Space Game Bahagi 5: Puntos at Buhay

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/37)

Sa araling ito, matututuhan mo kung paano magdagdag ng puntos sa laro at magtala ng buhay.

## Maglagay ng teksto sa screen

Upang maipakita ang puntos ng laro sa screen, kailangan mong malaman kung paano maglagay ng teksto sa screen. Ang sagot ay sa pamamagitan ng paggamit ng `fillText()` method sa canvas object. Maaari mo ring kontrolin ang iba pang aspeto tulad ng font na gagamitin, kulay ng teksto, at maging ang alignment nito (kaliwa, kanan, gitna). Narito ang isang halimbawa ng code na naglalagay ng teksto sa screen.

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Basahin pa ang tungkol sa [kung paano magdagdag ng teksto sa canvas](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text), at huwag mag-atubiling gawing mas maganda ang iyong disenyo!

## Buhay, bilang konsepto sa laro

Ang konsepto ng buhay sa laro ay simpleng numero lamang. Sa konteksto ng isang space game, karaniwang naglalaan ng ilang buhay na nababawasan isa-isa kapag nasira ang iyong barko. Maganda kung maaari kang magpakita ng graphical na representasyon nito tulad ng maliliit na barko o puso sa halip na numero.

## Ano ang gagawin

Idagdag ang mga sumusunod sa iyong laro:

- **Puntos ng Laro**: Para sa bawat barko ng kalaban na masisira, dapat bigyan ang bayani ng ilang puntos, iminumungkahi namin ang 100 puntos bawat barko. Ang puntos ng laro ay dapat ipakita sa ibabang kaliwa.
- **Buhay**: Ang iyong barko ay may tatlong buhay. Mawawalan ka ng isang buhay tuwing may kalabang barko na babangga sa iyo. Ang bilang ng buhay ay dapat ipakita sa ibabang kanan gamit ang sumusunod na graphic ![life image](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.tl.png).

## Mga Inirerekomendang Hakbang

Hanapin ang mga file na nilikha para sa iyo sa sub-folder na `your-work`. Dapat itong maglaman ng mga sumusunod:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Simulan ang iyong proyekto sa folder na `your_work` sa pamamagitan ng pag-type ng:

```bash
cd your-work
npm start
```

Ang nasa itaas ay magpapasimula ng HTTP Server sa address na `http://localhost:5000`. Buksan ang browser at ilagay ang address na iyon. Sa ngayon, dapat nitong ipakita ang bayani at lahat ng kalaban, at kapag pinindot mo ang kaliwa at kanang arrow, gumagalaw ang bayani at maaaring barilin ang mga kalaban.

### Magdagdag ng code

1. **Kopyahin ang mga kinakailangang assets** mula sa folder na `solution/assets/` papunta sa folder na `your-work`; magdadagdag ka ng `life.png` asset. Idagdag ang lifeImg sa window.onload function:

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Idagdag ang `lifeImg` sa listahan ng mga assets:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Magdagdag ng mga variable**. Magdagdag ng code na kumakatawan sa kabuuang puntos (0) at natitirang buhay (3), at ipakita ang mga ito sa screen.

3. **Palawakin ang `updateGameObjects()` function**. Palawakin ang `updateGameObjects()` function upang hawakan ang mga banggaan ng kalaban:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Idagdag ang `buhay` at `puntos`**. 
   1. **I-initialize ang mga variable**. Sa ilalim ng `this.cooldown = 0` sa `Hero` class, itakda ang buhay at puntos:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Ipakita ang mga variable sa screen**. Ipakita ang mga halagang ito sa screen:

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

   1. **Idagdag ang mga method sa Game loop**. Siguraduhing idagdag ang mga function na ito sa iyong window.onload function sa ilalim ng `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Ipatupad ang mga patakaran ng laro**. Ipatupad ang mga sumusunod na patakaran ng laro:

   1. **Para sa bawat banggaan ng bayani at kalaban**, bawasan ang isang buhay.
   
      Palawakin ang `Hero` class upang gawin ang pagbawas na ito:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Para sa bawat laser na tumama sa kalaban**, dagdagan ang puntos ng laro ng 100 puntos.

      Palawakin ang Hero class upang gawin ang pagtaas na ito:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Idagdag ang mga function na ito sa iyong Collision Event Emitters:

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

✅ Mag-research ng kaunti upang matuklasan ang iba pang mga laro na ginawa gamit ang JavaScript/Canvas. Ano ang kanilang mga karaniwang katangian?

Sa pagtatapos ng gawaing ito, dapat mong makita ang maliliit na 'life' ships sa ibabang kanan, puntos sa ibabang kaliwa, at dapat mong makita ang pagbawas ng bilang ng buhay kapag bumangga ka sa mga kalaban at ang pagtaas ng puntos kapag binaril mo ang mga kalaban. Magaling! Halos tapos na ang iyong laro.

---

## 🚀 Hamon

Halos tapos na ang iyong code. Ano ang nakikita mong susunod na hakbang?

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/38)

## Review & Self Study

Mag-research ng ilang paraan kung paano mo maaring dagdagan o bawasan ang puntos at buhay sa laro. May mga kawili-wiling game engine tulad ng [PlayFab](https://playfab.com). Paano makakatulong ang paggamit ng isa sa mga ito upang mapahusay ang iyong laro?

## Takdang-Aralin

[Build a Scoring Game](assignment.md)

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na maaaring magmula sa paggamit ng pagsasaling ito.