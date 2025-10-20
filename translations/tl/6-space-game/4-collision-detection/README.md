<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "25b9a833403f73efe052f61f78977cdc",
  "translation_date": "2025-10-20T21:10:22+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "tl"
}
-->
# Gumawa ng Space Game Bahagi 4: Pagdaragdag ng Laser at Pagtukoy ng Banggaan

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/35)

Sa araling ito, matututunan mo kung paano magpaputok ng laser gamit ang JavaScript! Magdaragdag tayo ng dalawang bagay sa ating laro:

- **Isang laser**: ang laser na ito ay ipuputok mula sa barko ng iyong bayani pataas.
- **Pagtukoy ng banggaan**, bilang bahagi ng pagpapatupad ng kakayahang *magpaputok*, magdaragdag din tayo ng ilang magagandang patakaran sa laro:
   - **Laser tumama sa kalaban**: Mamamatay ang kalaban kapag tinamaan ng laser.
   - **Laser tumama sa itaas na bahagi ng screen**: Mawawala ang laser kapag tumama ito sa itaas na bahagi ng screen.
   - **Banggaan ng kalaban at bayani**: Mawawala ang kalaban at ang bayani kapag nagbanggaan sila.
   - **Kalaban tumama sa ibaba ng screen**: Mawawala ang kalaban at ang bayani kapag tumama ang kalaban sa ibaba ng screen.

Sa madaling salita, ikaw -- *ang bayani* -- ay kailangang tamaan ang lahat ng kalaban gamit ang laser bago sila makarating sa ibaba ng screen.

✅ Mag-research ng kaunti tungkol sa pinakaunang computer game na nagawa. Ano ang functionality nito?

Maging bayani tayo nang sabay-sabay!

## Pagtukoy ng banggaan

Paano natin matutukoy ang banggaan? Kailangan nating isipin ang mga game object bilang mga parihaba na gumagalaw. Bakit? Dahil ang imahe na ginagamit upang iguhit ang isang game object ay isang parihaba: mayroon itong `x`, `y`, `width` at `height`.

Kapag ang dalawang parihaba, halimbawa ang bayani at kalaban, ay *nagkasalubong*, may banggaan. Ano ang dapat mangyari ay depende sa mga patakaran ng laro. Para maipatupad ang pagtukoy ng banggaan, kailangan mo ng sumusunod:

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

2. Isang function para sa paghahambing, maaaring ganito ang hitsura ng function na ito:

   ```javascript
   function intersectRect(r1, r2) {
     return !(r2.left > r1.right ||
       r2.right < r1.left ||
       r2.top > r1.bottom ||
       r2.bottom < r1.top);
   }
   ```

## Paano natin sisirain ang mga bagay

Para sirain ang mga bagay sa laro, kailangan mong ipaalam sa laro na hindi na dapat ipinta ang item na ito sa game loop na nagti-trigger sa isang tiyak na interval. Isang paraan upang gawin ito ay markahan ang isang game object bilang *patay* kapag may nangyari, tulad nito:

```javascript
// collision happened
enemy.dead = true
```

Pagkatapos, maaari mong ayusin ang mga *patay* na object bago muling ipinta ang screen, tulad nito:

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## Paano magpaputok ng laser

Ang pagpapaputok ng laser ay nangangahulugan ng pagtugon sa isang key-event at paglikha ng isang object na gumagalaw sa isang tiyak na direksyon. Kaya kailangan nating isagawa ang mga sumusunod na hakbang:

1. **Gumawa ng laser object**: mula sa itaas ng barko ng ating bayani, na sa paglikha ay magsisimulang gumalaw pataas patungo sa itaas ng screen.
2. **Mag-attach ng code sa isang key event**: kailangan nating pumili ng key sa keyboard na kumakatawan sa player na nagpapaputok ng laser.
3. **Gumawa ng game object na mukhang laser** kapag pinindot ang key.

## Cooldown sa ating laser

Ang laser ay kailangang magpaputok tuwing pinipindot mo ang isang key, tulad ng *space* halimbawa. Upang maiwasan ang laro na gumawa ng sobrang daming laser sa maikling panahon, kailangan nating ayusin ito. Ang solusyon ay sa pamamagitan ng pagpapatupad ng tinatawag na *cooldown*, isang timer, na nagsisiguro na ang laser ay maipapaputok lamang sa tamang agwat. Maaari mo itong ipatupad sa ganitong paraan:

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

## Ano ang gagawin

Kukunin mo ang umiiral na code (na dapat mo nang nalinis at na-refactor) mula sa nakaraang aralin, at palawakin ito. Maaaring magsimula sa code mula sa Bahagi II o gamitin ang code sa [Bahagi III- starter](../../../../../../../../../your-work).

> tip: Ang laser na gagamitin mo ay nasa iyong assets folder at naka-reference na sa iyong code.

- **Magdagdag ng pagtukoy ng banggaan**, kapag ang laser ay tumama sa isang bagay, ang mga sumusunod na patakaran ay dapat ipatupad:
   1. **Laser tumama sa kalaban**: Mamamatay ang kalaban kapag tinamaan ng laser.
   2. **Laser tumama sa itaas na bahagi ng screen**: Mawawala ang laser kapag tumama ito sa itaas na bahagi ng screen.
   3. **Banggaan ng kalaban at bayani**: Mawawala ang kalaban at ang bayani kapag nagbanggaan sila.
   4. **Kalaban tumama sa ibaba ng screen**: Mawawala ang kalaban at ang bayani kapag tumama ang kalaban sa ibaba ng screen.

## Mga Inirerekomendang Hakbang

Hanapin ang mga file na ginawa para sa iyo sa sub-folder na `your-work`. Dapat itong naglalaman ng mga sumusunod:

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

Ang nasa itaas ay magpapasimula ng isang HTTP Server sa address na `http://localhost:5000`. Buksan ang browser at ilagay ang address na iyon, sa ngayon ay dapat na ipakita ang bayani at lahat ng mga kalaban, wala pang gumagalaw - sa ngayon :).

### Magdagdag ng code

1. **I-setup ang representasyon ng parihaba ng iyong game object, upang ma-handle ang banggaan** Ang code sa ibaba ay nagbibigay-daan sa iyo upang makuha ang representasyon ng parihaba ng isang `GameObject`. I-edit ang iyong GameObject class upang palawakin ito:

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

    1. **Magdagdag ng listeners**. I-edit ang `initGame()` function upang matiyak na ang bayani ay makakapagpaputok kapag pinindot ang space bar:

       ```javascript
       eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if (hero.canFire()) {
          hero.fire();
        }
       ```

       at magdagdag ng bagong `eventEmitter.on()` function upang matiyak ang behavior kapag ang kalaban ay nagbanggaan sa laser:

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

   1. **I-handle ang banggaan**, Ipatupad ang mga patakaran ng banggaan para sa laser. Magdagdag ng `updateGameObjects()` function na sumusubok sa mga nagbabanggaang object para sa mga tama:

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

      Tiyakin na idagdag ang `updateGameObjects()` sa iyong game loop sa `window.onload`.

   4. **Ipatupad ang cooldown** sa laser, upang maipaputok lamang ito sa tamang agwat.

      Sa wakas, i-edit ang Hero class upang ito ay magkaroon ng cooldown:

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

Sa puntong ito, ang iyong laro ay may ilang functionality na! Maaari kang mag-navigate gamit ang iyong arrow keys, magpaputok ng laser gamit ang space bar, at mawawala ang mga kalaban kapag tinamaan mo sila. Magaling!

## Hamon ng GitHub Copilot Agent 🚀

Gamitin ang Agent mode upang tapusin ang sumusunod na hamon:

**Deskripsyon:** Pagandahin ang sistema ng pagtukoy ng banggaan sa pamamagitan ng pagpapatupad ng mga power-up na random na lumilitaw at nagbibigay ng pansamantalang kakayahan kapag nakuha ng barko ng bayani.

**Prompt:** Gumawa ng PowerUp class na mag-e-extend sa GameObject at ipatupad ang pagtukoy ng banggaan sa pagitan ng bayani at mga power-up. Magdagdag ng hindi bababa sa dalawang uri ng power-up: isa na nagpapataas ng fire rate (nagbabawas ng cooldown) at isa na lumilikha ng pansamantalang shield. Isama ang spawn logic na lumilikha ng power-ups sa random na mga interval at posisyon.

---



## 🚀 Hamon

Magdagdag ng pagsabog! Tingnan ang mga game assets sa [the Space Art repo](../../../../6-space-game/solution/spaceArt/readme.txt) at subukang magdagdag ng pagsabog kapag ang laser ay tumama sa alien.

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/36)

## Review & Self Study

Eksperimentuhin ang mga interval sa iyong laro sa ngayon. Ano ang mangyayari kapag binago mo ang mga ito? Magbasa pa tungkol sa [JavaScript timing events](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Assignment

[Explore collisions](assignment.md)

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat sinisikap naming maging tumpak, pakatandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.