<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2e83e38c35dc003f046d7cc0bbfd4920",
  "translation_date": "2025-08-27T22:37:59+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "tl"
}
-->
# Gumawa ng Space Game Bahagi 4: Pagdaragdag ng Laser at Pagtukoy ng Banggaan

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/35)

Sa araling ito, matututo kang magpaputok ng laser gamit ang JavaScript! Magdaragdag tayo ng dalawang bagay sa ating laro:

- **Isang laser**: ang laser na ito ay ipuputok mula sa barko ng iyong bayani at pataas nang patayo
- **Pagtukoy ng banggaan**, bilang bahagi ng pagpapatupad ng kakayahang *magpaputok*, magdaragdag din tayo ng ilang magagandang patakaran sa laro:
   - **Laser tumama sa kalaban**: Mamamatay ang kalaban kapag tinamaan ng laser
   - **Laser tumama sa itaas na bahagi ng screen**: Masisira ang laser kapag tumama ito sa itaas na bahagi ng screen
   - **Banggaan ng kalaban at bayani**: Masisira ang kalaban at ang bayani kapag nagbanggaan sila
   - **Kalaban tumama sa ibaba ng screen**: Masisira ang kalaban at ang bayani kapag tumama ang kalaban sa ibaba ng screen

Sa madaling salita, ikaw -- *ang bayani* -- ay kailangang tamaan ang lahat ng kalaban gamit ang laser bago sila makarating sa ibaba ng screen.

✅ Mag-research ng kaunti tungkol sa pinakaunang computer game na kailanman naisulat. Ano ang functionality nito?

Maging bayani tayo nang magkasama!

## Pagtukoy ng Banggaan

Paano natin gagawin ang pagtukoy ng banggaan? Kailangan nating isipin ang ating mga game object bilang mga parihaba na gumagalaw. Bakit, tanong mo? Dahil ang imahe na ginagamit upang iguhit ang isang game object ay isang parihaba: mayroon itong `x`, `y`, `width`, at `height`.

Kung ang dalawang parihaba, halimbawa ang bayani at kalaban, ay *magkasalubong*, may banggaan. Ano ang dapat mangyari pagkatapos ay nakadepende sa mga patakaran ng laro. Upang maipatupad ang pagtukoy ng banggaan, kakailanganin mo ang mga sumusunod:

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

## Paano natin sisirain ang mga bagay

Upang sirain ang mga bagay sa laro, kailangan mong ipaalam sa laro na hindi na dapat ipinta ang item na ito sa game loop na nagti-trigger sa isang tiyak na interval. Isang paraan upang gawin ito ay markahan ang isang game object bilang *patay* kapag may nangyari, tulad nito:

```javascript
// collision happened
enemy.dead = true
```

Pagkatapos, maaari mong alisin ang mga *patay* na object bago muling ipinta ang screen, tulad nito:

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## Paano magpaputok ng laser

Ang pagpapaputok ng laser ay nangangahulugan ng pagtugon sa isang key-event at paglikha ng isang object na gumagalaw sa isang tiyak na direksyon. Kaya, kailangan nating gawin ang mga sumusunod na hakbang:

1. **Lumikha ng laser object**: mula sa itaas ng barko ng iyong bayani, na sa sandaling malikha ay magsisimulang gumalaw pataas patungo sa itaas ng screen.
2. **Mag-attach ng code sa isang key event**: kailangan nating pumili ng key sa keyboard na kumakatawan sa pagpapaputok ng laser ng manlalaro.
3. **Lumikha ng game object na mukhang laser** kapag pinindot ang key.

## Cooldown para sa ating laser

Kailangang magpaputok ang laser tuwing pinipindot mo ang isang key, halimbawa *space*. Upang maiwasan ang laro na makagawa ng sobrang daming laser sa maikling panahon, kailangan nating ayusin ito. Ang solusyon ay sa pamamagitan ng pagpapatupad ng tinatawag na *cooldown*, isang timer, na nagsisiguro na ang laser ay maaari lamang magpaputok sa tiyak na agwat. Maaari mo itong ipatupad sa ganitong paraan:

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

## Ano ang itatayo

Kukunin mo ang umiiral na code (na dapat mo nang nalinis at inayos) mula sa nakaraang aralin, at palalawakin ito. Maaaring magsimula sa code mula sa Bahagi II o gamitin ang code sa [Part III- starter](../../../../../../../../../your-work).

> tip: ang laser na gagamitin mo ay nasa iyong assets folder na at naka-reference na sa iyong code

- **Magdagdag ng pagtukoy ng banggaan**, kapag ang laser ay tumama sa isang bagay, ang mga sumusunod na patakaran ay dapat ipatupad:
   1. **Laser tumama sa kalaban**: mamamatay ang kalaban kapag tinamaan ng laser
   2. **Laser tumama sa itaas na bahagi ng screen**: Masisira ang laser kapag tumama ito sa itaas na bahagi ng ating screen
   3. **Banggaan ng kalaban at bayani**: masisira ang kalaban at ang bayani kapag nagbanggaan sila
   4. **Kalaban tumama sa ibaba ng screen**: Masisira ang kalaban at ang bayani kapag tumama ang kalaban sa ibaba ng screen

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

Simulan ang iyong proyekto sa folder na `your_work` sa pamamagitan ng pag-type:

```bash
cd your-work
npm start
```

Ang nasa itaas ay magpapasimula ng isang HTTP Server sa address na `http://localhost:5000`. Buksan ang isang browser at ilagay ang address na iyon, sa ngayon dapat nitong ipakita ang bayani at lahat ng kalaban, ngunit wala pang gumagalaw :).

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

2. **Magdagdag ng code na sumusuri ng banggaan** Ito ay magiging isang bagong function na sumusubok kung ang dalawang parihaba ay nagkasalubong:

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
   1. **Magdagdag ng key-event message**. Ang *space* key ay dapat lumikha ng laser sa itaas ng barko ng bayani. Magdagdag ng tatlong constants sa Messages object:

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

       at magdagdag ng bagong `eventEmitter.on()` function upang matiyak ang tamang behavior kapag ang kalaban ay tumama sa laser:

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   1. **Paggalaw ng object**, Tiyakin na ang laser ay gumagalaw pataas sa screen nang paunti-unti. Lilikha ka ng bagong Laser class na mag-e-extend sa `GameObject`, tulad ng dati:

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

      Tiyaking idagdag ang `updateGameObjects()` sa iyong game loop sa `window.onload`.

   4. **Ipatupad ang cooldown** sa laser, upang ito ay maaari lamang magpaputok sa tiyak na agwat.

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

Sa puntong ito, ang iyong laro ay may ilang functionality na! Maaari kang mag-navigate gamit ang iyong arrow keys, magpaputok ng laser gamit ang space bar, at nawawala ang mga kalaban kapag tinamaan mo sila. Magaling!

---

## 🚀 Hamon

Magdagdag ng pagsabog! Tingnan ang mga game asset sa [the Space Art repo](../../../../6-space-game/solution/spaceArt/readme.txt) at subukang magdagdag ng pagsabog kapag ang laser ay tumama sa isang alien.

## Post-Lecture Quiz

[Post-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/36)

## Review at Pag-aaral sa Sarili

Eksperimentuhin ang mga interval sa iyong laro sa ngayon. Ano ang mangyayari kapag binago mo ang mga ito? Magbasa pa tungkol sa [JavaScript timing events](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Takdang Aralin

[Pag-aralan ang mga banggaan](assignment.md)

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na maaaring magmula sa paggamit ng pagsasaling ito.