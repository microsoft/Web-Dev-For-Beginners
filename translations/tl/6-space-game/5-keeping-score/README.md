<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d642759cf1542f554871f74956a59af9",
  "translation_date": "2025-10-22T15:43:09+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "tl"
}
-->
# Gumawa ng Space Game Bahagi 5: Puntos at Buhay

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/37)

Handa ka na bang gawing mas kapanapanabik ang iyong space game? Magdagdag tayo ng sistema ng puntos at pamamahala ng buhay - ang mga pangunahing mekanika na nag-transform sa mga unang arcade games tulad ng Space Invaders mula sa simpleng demonstrasyon patungo sa nakakaadik na libangan. Dito magsisimulang maging tunay na nakaka-engganyo ang iyong laro.

## Pag-drawing ng Teksto sa Screen - Ang Boses ng Iyong Laro

Para maipakita ang iyong puntos, kailangan nating matutunan kung paano mag-render ng teksto sa canvas. Ang `fillText()` method ang pangunahing tool mo para dito - ito ang parehong teknik na ginamit sa mga klasikong arcade games para ipakita ang mga puntos at impormasyon ng status.

May ganap kang kontrol sa hitsura ng teksto:

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Tuklasin pa ang [pagdaragdag ng teksto sa canvas](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text) - baka magulat ka kung gaano ka-kreatibo ang magagawa mo sa mga font at estilo!

## Buhay - Higit Pa sa Isang Numero

Sa disenyo ng laro, ang "buhay" ay kumakatawan sa margin ng error ng manlalaro. Ang konseptong ito ay nagmula pa sa mga pinball machine, kung saan makakakuha ka ng maraming bola para maglaro. Sa mga unang video games tulad ng Asteroids, ang buhay ay nagbibigay pahintulot sa mga manlalaro na mag-risk at matuto mula sa kanilang mga pagkakamali.

Mahalaga ang visual na representasyon - ang pagpapakita ng mga icon ng barko sa halip na simpleng "Lives: 3" ay nagbibigay ng agarang visual na pagkilala, katulad ng kung paano ginamit ng mga unang arcade cabinets ang iconography para makipag-usap sa iba't ibang wika.

## Pagbuo ng Sistema ng Gantimpala ng Iyong Laro

Ngayon, ipapatupad natin ang mga pangunahing sistema ng feedback na nagpapanatili ng interes ng mga manlalaro:

- **Sistema ng puntos**: Ang bawat nasirang barko ng kalaban ay nagbibigay ng 100 puntos (mas madaling kalkulahin ng mga manlalaro ang mga bilog na numero). Ang puntos ay ipapakita sa ibabang kaliwang sulok.
- **Bilang ng buhay**: Ang iyong bayani ay magsisimula sa tatlong buhay - isang pamantayan na itinatag ng mga unang arcade games para balansehin ang hamon at kasiyahan. Ang bawat banggaan sa kalaban ay magbabawas ng isang buhay. Ipapakita natin ang natitirang buhay sa ibabang kanan gamit ang mga icon ng barko ![life image](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.tl.png).

## Simulan na Natin ang Pagbuo!

Una, i-set up ang iyong workspace. Pumunta sa mga file sa iyong `your-work` sub folder. Dapat mong makita ang mga file na ito:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Para subukan ang iyong laro, simulan ang development server mula sa folder na `your_work`:

```bash
cd your-work
npm start
```

Ito ay magpapatakbo ng lokal na server sa `http://localhost:5000`. Buksan ang address na ito sa iyong browser para makita ang iyong laro. Subukan ang mga kontrol gamit ang arrow keys at subukang barilin ang mga kalaban para masigurado na gumagana ang lahat.

### Oras na Para Mag-code!

1. **Kunin ang mga visual assets na kakailanganin mo**. Kopyahin ang `life.png` asset mula sa folder na `solution/assets/` papunta sa iyong `your-work` folder. Pagkatapos, idagdag ang lifeImg sa iyong window.onload function:

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Huwag kalimutang idagdag ang `lifeImg` sa iyong assets list:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **I-set up ang mga variable ng iyong laro**. Magdagdag ng code para subaybayan ang kabuuang puntos (magsisimula sa 0) at natitirang buhay (magsisimula sa 3). Ipapakita natin ang mga ito sa screen para laging alam ng mga manlalaro ang kanilang kalagayan.

3. **Ipapatupad ang collision detection**. Palawakin ang iyong `updateGameObjects()` function para matukoy kung kailan nagbabanggaan ang mga kalaban sa iyong bayani:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Magdagdag ng tracking ng buhay at puntos sa iyong Hero**. 
   1. **I-initialize ang mga counter**. Sa ilalim ng `this.cooldown = 0` sa iyong `Hero` class, mag-set up ng buhay at puntos:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Ipakita ang mga value na ito sa manlalaro**. Gumawa ng mga function para i-drawing ang mga value na ito sa screen:

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

   1. **I-hook ang lahat sa iyong game loop**. Idagdag ang mga function na ito sa iyong window.onload function pagkatapos ng `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Ipapatupad ang mga epekto at gantimpala ng laro**. Ngayon, magdadagdag tayo ng mga sistema ng feedback na nagbibigay kahulugan sa mga aksyon ng manlalaro:

   1. **Ang mga banggaan ay nagbabawas ng buhay**. Sa tuwing ang iyong bayani ay babangga sa isang kalaban, dapat kang mawalan ng isang buhay.
   
      Idagdag ang method na ito sa iyong `Hero` class:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Ang pagbaril sa mga kalaban ay nagbibigay ng puntos**. Ang bawat matagumpay na hit ay nagbibigay ng 100 puntos, na nagbibigay ng agarang positibong feedback para sa tamang pagbaril.

      Palawakin ang iyong Hero class gamit ang increment method na ito:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Ngayon, i-connect ang mga function na ito sa iyong collision events:

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

✅ Interesado sa iba pang mga laro na ginawa gamit ang JavaScript at Canvas? Mag-explore - baka magulat ka sa mga posibilidad!

Pagkatapos ipatupad ang mga feature na ito, subukan ang iyong laro para makita ang kumpletong sistema ng feedback sa aksyon. Dapat mong makita ang mga icon ng buhay sa ibabang kanan, ang iyong puntos sa ibabang kaliwa, at panoorin kung paano nababawasan ang buhay sa mga banggaan habang nadaragdagan ang puntos sa matagumpay na pagbaril.

Ang iyong laro ngayon ay may mga pangunahing mekanika na nagpa-engganyo sa mga unang arcade games - malinaw na layunin, agarang feedback, at makabuluhang epekto para sa mga aksyon ng manlalaro.

---

## Hamon ng GitHub Copilot Agent 🚀

Gamitin ang Agent mode para tapusin ang sumusunod na hamon:

**Deskripsyon:** Pagandahin ang sistema ng puntos ng space game sa pamamagitan ng pag-implement ng high score feature na may persistent storage at bonus scoring mechanics.

**Prompt:** Gumawa ng high score system na nagse-save ng pinakamataas na puntos ng manlalaro sa localStorage. Magdagdag ng bonus points para sa sunod-sunod na pagpatay sa kalaban (combo system) at mag-implement ng iba't ibang halaga ng puntos para sa iba't ibang uri ng kalaban. Maglagay ng visual indicator kapag nakamit ng manlalaro ang bagong high score at ipakita ang kasalukuyang high score sa screen ng laro.

## 🚀 Hamon

Mayroon ka nang functional na laro na may puntos at buhay. Isipin kung anong mga karagdagang feature ang maaaring magpaganda sa karanasan ng manlalaro.

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/38)

## Review & Self Study

Gusto mo bang mag-explore pa? Mag-research ng iba't ibang paraan sa pag-score ng laro at mga sistema ng buhay. May mga kahanga-hangang game engines tulad ng [PlayFab](https://playfab.com) na humahawak sa scoring, leaderboards, at player progression. Paano kaya makakatulong ang pag-integrate ng ganitong bagay para ma-level up ang iyong laro?

## Assignment

[Build a Scoring Game](assignment.md)

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na pinagmulan. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.