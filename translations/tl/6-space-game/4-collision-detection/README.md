<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a6ce295ff03bb49df7a3e17e6e7100a0",
  "translation_date": "2025-08-28T15:45:01+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "tl"
}
-->
# Gumawa ng Space Game Bahagi 4: Magdagdag ng Laser at Mag-detect ng Banggaan

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/35)

Sa araling ito, matututuhan mong magpaputok ng laser gamit ang JavaScript! Magdadagdag tayo ng dalawang bagay sa ating laro:

- **Isang laser**: ang laser na ito ay ipuputok mula sa barko ng iyong bayani at pataas nang patayo.
- **Pag-detect ng banggaan**, bilang bahagi ng pagpapatupad ng kakayahang *magpaputok*, magdadagdag din tayo ng ilang magagandang patakaran sa laro:
   - **Laser tumama sa kalaban**: Mamamatay ang kalaban kapag tinamaan ng laser.
   - **Laser tumama sa itaas ng screen**: Mawawala ang laser kapag tumama ito sa itaas na bahagi ng screen.
   - **Banggaan ng kalaban at bayani**: Mawawala ang kalaban at ang bayani kapag nagbanggaan sila.
   - **Kalaban tumama sa ibaba ng screen**: Mawawala ang kalaban at ang bayani kapag tumama ang kalaban sa ibaba ng screen.

Sa madaling salita, ikaw -- *ang bayani* -- ay kailangang tamaan ang lahat ng kalaban gamit ang laser bago sila makarating sa ibaba ng screen.

✅ Mag-research ng kaunti tungkol sa pinakaunang computer game na kailanman ay ginawa. Ano ang functionality nito?

Maging bayani tayo nang magkasama!

## Pag-detect ng Banggaan

Paano natin gagawin ang pag-detect ng banggaan? Kailangan nating isipin ang ating mga game object bilang mga parihaba na gumagalaw. Bakit, tanong mo? Dahil ang imahe na ginagamit upang iguhit ang isang game object ay isang parihaba: mayroon itong `x`, `y`, `width`, at `height`.

Kapag ang dalawang parihaba, halimbawa ang bayani at kalaban, ay *nagkasalubong*, may banggaan. Ano ang dapat mangyari pagkatapos ay depende sa mga patakaran ng laro. Upang maipatupad ang pag-detect ng banggaan, kailangan mo ng mga sumusunod:

1. Isang paraan upang makuha ang representasyon ng parihaba ng isang game object, tulad nito:

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

2. Isang function para sa paghahambing, maaaring ganito ang hitsura nito:

   ```javascript
   function intersectRect(r1, r2) {
     return !(r2.left > r1.right ||
       r2.right < r1.left ||
       r2.top > r1.bottom ||
       r2.bottom < r1.top);
   }
   ```

## Paano Mawawala ang mga Bagay

Upang mawala ang mga bagay sa laro, kailangan mong ipaalam sa laro na hindi na nito dapat ipinta ang item na ito sa game loop na nagti-trigger sa isang tiyak na interval. Isang paraan upang gawin ito ay markahan ang isang game object bilang *patay* kapag may nangyari, tulad nito:

```javascript
// collision happened
enemy.dead = true
```

Pagkatapos, maaari mong ayusin ang mga *patay* na object bago muling ipinta ang screen, tulad nito:

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## Paano Magpaputok ng Laser

Ang pagpapaputok ng laser ay nangangahulugan ng pagtugon sa isang key-event at paggawa ng isang object na gumagalaw sa isang tiyak na direksyon. Kaya kailangan nating gawin ang mga sumusunod na hakbang:

1. **Gumawa ng laser object**: mula sa itaas ng barko ng ating bayani, na sa sandaling malikha ay magsisimulang gumalaw pataas patungo sa itaas ng screen.
2. **Mag-attach ng code sa isang key event**: kailangan nating pumili ng key sa keyboard na kumakatawan sa player na nagpapaputok ng laser.
3. **Gumawa ng game object na mukhang laser** kapag pinindot ang key.

## Cooldown para sa Laser

Kailangang magpaputok ang laser tuwing pinipindot mo ang isang key, tulad ng *space* halimbawa. Upang maiwasan ang laro na gumawa ng sobrang daming laser sa maikling panahon, kailangan nating ayusin ito. Ang solusyon ay sa pamamagitan ng pagpapatupad ng tinatawag na *cooldown*, isang timer, na tinitiyak na ang laser ay maaari lamang magpaputok sa tamang agwat. Maaari mo itong ipatupad sa ganitong paraan:

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

✅ Balikan ang aralin 1 sa serye ng space game upang maalala ang tungkol sa *cooldowns*.

## Ano ang Itatayo

Kukunin mo ang umiiral na code (na dapat mo nang nalinis at na-refactor) mula sa nakaraang aralin, at palawakin ito. Maaaring magsimula sa code mula sa bahagi II o gamitin ang code sa [Part III- starter](../../../../../../../../../your-work).

> tip: ang laser na gagamitin mo ay nasa iyong assets folder na at naka-refer na sa iyong code

- **Magdagdag ng pag-detect ng banggaan**, kapag ang laser ay tumama sa isang bagay, ang mga sumusunod na patakaran ay dapat ipatupad:
   1. **Laser tumama sa kalaban**: mamamatay ang kalaban kapag tinamaan ng laser.
   2. **Laser tumama sa itaas ng screen**: Mawawala ang laser kapag tumama ito sa itaas na bahagi ng screen.
   3. **Banggaan ng kalaban at bayani**: Mawawala ang kalaban at ang bayani kapag nagbanggaan sila.
   4. **Kalaban tumama sa ibaba ng screen**: Mawawala ang kalaban at ang bayani kapag tumama ang kalaban sa ibaba ng screen.

## Mga Rekomendadong Hakbang

Hanapin ang mga file na ginawa para sa iyo sa sub-folder na `your-work`. Dapat itong maglaman ng mga sumusunod:

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

Ang nasa itaas ay magsisimula ng HTTP Server sa address na `http://localhost:5000`. Buksan ang isang browser at ilagay ang address na iyon, sa ngayon dapat nitong ipakita ang bayani at lahat ng kalaban, ngunit wala pang gumagalaw :).

### Magdagdag ng Code

1. **I-setup ang representasyon ng parihaba ng iyong game object upang hawakan ang banggaan** Ang code sa ibaba ay nagbibigay-daan sa iyo upang makuha ang representasyon ng parihaba ng isang `GameObject`. I-edit ang iyong GameObject class upang palawakin ito:

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

2. **Magdagdag ng code na nagche-check ng banggaan** Ito ay magiging isang bagong function na sumusubok kung ang dalawang parihaba ay nagkasalubong:

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

3. **Magdagdag ng kakayahang magpaputok ng laser**
   1. **Magdagdag ng key-event message**. Ang *space* key ay dapat lumikha ng laser sa itaas lamang ng barko ng bayani. Magdagdag ng tatlong constants sa Messages object:

       ```javascript
        KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
        COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
        COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
       ```

   1. **I-handle ang space key**. I-edit ang `window.addEventListener` keyup function upang i-handle ang space:

      ```javascript
        } else if(evt.keyCode === 32) {
          eventEmitter.emit(Messages.KEY_EVENT_SPACE);
        }
      ```

    1. **Magdagdag ng listeners**. I-edit ang `initGame()` function upang matiyak na ang bayani ay maaaring magpaputok kapag pinindot ang space bar:

       ```javascript
       eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if (hero.canFire()) {
          hero.fire();
        }
       ```

       at magdagdag ng bagong `eventEmitter.on()` function upang matiyak ang behavior kapag ang kalaban ay tumama sa laser:

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   1. **Gumalaw ang object**, Tiyakin na ang laser ay gumagalaw pataas sa screen nang paunti-unti. Gagawa ka ng bagong Laser class na mag-e-extend sa `GameObject`, tulad ng ginawa mo dati: 
   
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

   1. **I-handle ang banggaan**, Ipatupad ang mga patakaran ng banggaan para sa laser. Magdagdag ng `updateGameObjects()` function na sumusubok sa mga nagbabanggaang object:

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

      Siguraduhing idagdag ang `updateGameObjects()` sa iyong game loop sa `window.onload`.

   4. **Ipatupad ang cooldown** sa laser, upang ito ay maaari lamang magpaputok sa tamang agwat.

      Sa wakas, i-edit ang Hero class upang magkaroon ito ng cooldown:

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

Sa puntong ito, ang iyong laro ay may ilang functionality na! Maaari kang mag-navigate gamit ang iyong arrow keys, magpaputok ng laser gamit ang iyong space bar, at nawawala ang mga kalaban kapag tinamaan mo sila. Magaling!

---

## 🚀 Hamon

Magdagdag ng pagsabog! Tingnan ang mga game asset sa [the Space Art repo](../../../../6-space-game/solution/spaceArt/readme.txt) at subukang magdagdag ng pagsabog kapag ang laser ay tumama sa isang alien.

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/36)

## Review at Pag-aaral sa Sarili

Eksperimentuhin ang mga interval sa iyong laro sa ngayon. Ano ang mangyayari kapag binago mo ang mga ito? Magbasa pa tungkol sa [JavaScript timing events](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Takdang-Aralin

[Pag-aralan ang mga banggaan](assignment.md)

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na maaaring magmula sa paggamit ng pagsasaling ito.