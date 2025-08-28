<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a9a161871de7706cb0e23b1bd0c74559",
  "translation_date": "2025-08-28T15:44:10+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "tl"
}
-->
# Gumawa ng Space Game Bahagi 3: Pagdaragdag ng Galaw

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/33)

Hindi masyadong masaya ang mga laro kung walang mga alien na gumagalaw sa screen! Sa larong ito, gagamit tayo ng dalawang uri ng galaw:

- **Galaw gamit ang Keyboard/Mouse**: kapag ang user ay gumamit ng keyboard o mouse upang igalaw ang isang bagay sa screen.
- **Galaw na dulot ng laro**: kapag ang laro mismo ang gumagalaw ng isang bagay sa isang tiyak na agwat ng oras.

Paano nga ba natin ginagalaw ang mga bagay sa screen? Ang lahat ay tungkol sa cartesian coordinates: binabago natin ang lokasyon (x, y) ng bagay at pagkatapos ay nire-redraw ang screen.

Karaniwan, kailangan mo ng mga sumusunod na hakbang upang maisagawa ang *galaw* sa screen:

1. **Itakda ang bagong lokasyon** ng isang bagay; kailangan ito upang makita na ang bagay ay gumalaw.
2. **I-clear ang screen**, kailangang i-clear ang screen sa pagitan ng mga pag-draw. Maaari natin itong i-clear sa pamamagitan ng pag-draw ng isang rectangle na puno ng background color.
3. **I-redraw ang bagay** sa bagong lokasyon. Sa paggawa nito, nagagawa nating igalaw ang bagay mula sa isang lokasyon patungo sa iba.

Ganito ang maaaring hitsura nito sa code:

```javascript
//set the hero's location
hero.x += 5;
// clear the rectangle that hosts the hero
ctx.clearRect(0, 0, canvas.width, canvas.height);
// redraw the game background and hero
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.fillStyle = "black";
ctx.drawImage(heroImg, hero.x, hero.y);
```

✅ Maiisip mo ba kung bakit ang pag-redraw ng iyong hero nang maraming beses kada segundo ay maaaring magdulot ng performance costs? Basahin ang tungkol sa [mga alternatibo sa pattern na ito](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Paghawak ng mga Keyboard Event

Hinahawakan mo ang mga event sa pamamagitan ng pag-attach ng mga partikular na event sa code. Ang mga keyboard event ay na-trigger sa buong window, samantalang ang mga mouse event tulad ng `click` ay maaaring konektado sa pag-click sa isang partikular na elemento. Gagamit tayo ng mga keyboard event sa buong proyektong ito.

Upang hawakan ang isang event, kailangan mong gamitin ang `addEventListener()` method ng window at bigyan ito ng dalawang input parameter. Ang unang parameter ay ang pangalan ng event, halimbawa `keyup`. Ang pangalawang parameter ay ang function na dapat ma-invoke bilang resulta ng pag-trigger ng event.

Narito ang isang halimbawa:

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

Para sa mga key event, mayroong dalawang properties sa event na maaari mong gamitin upang makita kung anong key ang na-press:

- `key`, ito ay isang string na representasyon ng na-press na key, halimbawa `ArrowUp`
- `keyCode`, ito ay isang numeric na representasyon, halimbawa `37`, na tumutugma sa `ArrowLeft`.

✅ Ang manipulasyon ng key event ay kapaki-pakinabang kahit sa labas ng game development. Ano pa ang ibang gamit na naiisip mo para sa teknik na ito?

### Mga Espesyal na Key: Isang Babala

May ilang *espesyal* na key na nakakaapekto sa window. Nangangahulugan ito na kung ikaw ay nakikinig sa isang `keyup` event at ginamit mo ang mga espesyal na key na ito upang igalaw ang iyong hero, maaari rin nitong i-trigger ang horizontal scrolling. Dahil dito, maaaring gusto mong *i-disable* ang built-in na browser behavior habang ginagawa mo ang iyong laro. Kakailanganin mo ng code tulad nito:

```javascript
let onKeyDown = function (e) {
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 37:
    case 39:
    case 38:
    case 40: // Arrow keys
    case 32:
      e.preventDefault();
      break; // Space
    default:
      break; // do not block other keys
  }
};

window.addEventListener('keydown', onKeyDown);
```

Ang code sa itaas ay titiyakin na ang arrow keys at ang space key ay may naka-*disable* na default behavior. Ang mekanismo ng *pag-disable* ay nangyayari kapag tinawag natin ang `e.preventDefault()`.

## Galaw na Dulot ng Laro

Maaari nating igalaw ang mga bagay nang kusa sa pamamagitan ng paggamit ng mga timer tulad ng `setTimeout()` o `setInterval()` function na nag-a-update ng lokasyon ng bagay sa bawat tick o agwat ng oras. Ganito ang maaaring hitsura nito:

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## Ang Game Loop

Ang game loop ay isang konsepto na mahalagang isang function na na-invoke sa regular na agwat. Tinatawag itong game loop dahil lahat ng dapat makita ng user ay na-draw sa loop. Ang game loop ay gumagamit ng lahat ng game objects na bahagi ng laro, dinodrawing ang mga ito maliban na lang kung may dahilan para hindi na sila maging bahagi ng laro. Halimbawa, kung ang isang bagay ay isang kalaban na tinamaan ng laser at sumabog, hindi na ito bahagi ng kasalukuyang game loop (malalaman mo pa ang tungkol dito sa mga susunod na aralin).

Ganito karaniwang hitsura ng isang game loop, na ipinapahayag sa code:

```javascript
let gameLoopId = setInterval(() =>
  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawHero();
    drawEnemies();
    drawStaticObjects();
}, 200);
```

Ang loop sa itaas ay na-invoke bawat `200` milliseconds upang i-redraw ang canvas. May kakayahan kang pumili ng pinakamahusay na interval na angkop para sa iyong laro.

## Pagpapatuloy ng Space Game

Kukunin mo ang umiiral na code at palalawakin ito. Maaaring magsimula sa code na natapos mo noong Bahagi I o gamitin ang code sa [Part II- starter](../../../../6-space-game/3-moving-elements-around/your-work).

- **Paggalaw ng hero**: magdadagdag ka ng code upang matiyak na maaari mong igalaw ang hero gamit ang arrow keys.
- **Paggalaw ng mga kalaban**: magdadagdag ka rin ng code upang matiyak na ang mga kalaban ay gumagalaw mula itaas pababa sa isang tiyak na bilis.

## Mga Rekomendadong Hakbang

Hanapin ang mga file na ginawa para sa iyo sa sub-folder na `your-work`. Dapat itong maglaman ng mga sumusunod:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Simulan ang iyong proyekto sa folder na `your_work` sa pamamagitan ng pag-type ng:

```bash
cd your-work
npm start
```

Ang nasa itaas ay magsisimula ng HTTP Server sa address na `http://localhost:5000`. Buksan ang isang browser at ilagay ang address na iyon, sa ngayon dapat nitong i-render ang hero at lahat ng mga kalaban; wala pang gumagalaw - sa ngayon!

### Magdagdag ng Code

1. **Magdagdag ng mga nakalaang object** para sa `hero`, `enemy`, at `game object`, dapat silang magkaroon ng `x` at `y` properties. (Tandaan ang bahagi tungkol sa [Inheritance o composition](../README.md)).

   *Pahiwatig*: Ang `game object` ang dapat may `x` at `y` at kakayahang i-draw ang sarili nito sa canvas.

   >tip: magsimula sa pamamagitan ng pagdagdag ng bagong GameObject class na may constructor na tulad ng nasa ibaba, at pagkatapos ay i-draw ito sa canvas:
  
    ```javascript
        
    class GameObject {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dead = false;
        this.type = "";
        this.width = 0;
        this.height = 0;
        this.img = undefined;
      }
    
      draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      }
    }
    ```

    Ngayon, palawakin ang GameObject upang lumikha ng Hero at Enemy.
    
    ```javascript
    class Hero extends GameObject {
      constructor(x, y) {
        ...it needs an x, y, type, and speed
      }
    }
    ```

    ```javascript
    class Enemy extends GameObject {
      constructor(x, y) {
        super(x, y);
        (this.width = 98), (this.height = 50);
        this.type = "Enemy";
        let id = setInterval(() => {
          if (this.y < canvas.height - this.height) {
            this.y += 5;
          } else {
            console.log('Stopped at', this.y)
            clearInterval(id);
          }
        }, 300)
      }
    }
    ```

2. **Magdagdag ng key-event handlers** upang hawakan ang key navigation (igalaw ang hero pataas/pababa, kaliwa/kanan).

   *TANDAAN*: ito ay isang cartesian system, ang top-left ay `0,0`. Tandaan din na magdagdag ng code upang ihinto ang *default behavior*.

   >tip: gumawa ng iyong onKeyDown function at i-attach ito sa window:

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   Tingnan ang console ng iyong browser sa puntong ito, at panoorin ang mga keystroke na nalog.

3. **Ipatupad** ang [Pub sub pattern](../README.md), panatilihing malinis ang iyong code habang sinusundan ang natitirang bahagi.

   Upang gawin ang huling bahaging ito, maaari mong:

   1. **Magdagdag ng event listener** sa window:

       ```javascript
        window.addEventListener("keyup", (evt) => {
          if (evt.key === "ArrowUp") {
            eventEmitter.emit(Messages.KEY_EVENT_UP);
          } else if (evt.key === "ArrowDown") {
            eventEmitter.emit(Messages.KEY_EVENT_DOWN);
          } else if (evt.key === "ArrowLeft") {
            eventEmitter.emit(Messages.KEY_EVENT_LEFT);
          } else if (evt.key === "ArrowRight") {
            eventEmitter.emit(Messages.KEY_EVENT_RIGHT);
          }
        });
        ```

    1. **Gumawa ng EventEmitter class** upang mag-publish at mag-subscribe sa mga mensahe:

        ```javascript
        class EventEmitter {
          constructor() {
            this.listeners = {};
          }
        
          on(message, listener) {
            if (!this.listeners[message]) {
              this.listeners[message] = [];
            }
            this.listeners[message].push(listener);
          }
        
          emit(message, payload = null) {
            if (this.listeners[message]) {
              this.listeners[message].forEach((l) => l(message, payload));
            }
          }
        }
        ```

    1. **Magdagdag ng constants** at i-setup ang EventEmitter:

        ```javascript
        const Messages = {
          KEY_EVENT_UP: "KEY_EVENT_UP",
          KEY_EVENT_DOWN: "KEY_EVENT_DOWN",
          KEY_EVENT_LEFT: "KEY_EVENT_LEFT",
          KEY_EVENT_RIGHT: "KEY_EVENT_RIGHT",
        };
        
        let heroImg, 
            enemyImg, 
            laserImg,
            canvas, ctx, 
            gameObjects = [], 
            hero, 
            eventEmitter = new EventEmitter();
        ```

    1. **I-initialize ang laro**

    ```javascript
    function initGame() {
      gameObjects = [];
      createEnemies();
      createHero();
    
      eventEmitter.on(Messages.KEY_EVENT_UP, () => {
        hero.y -=5 ;
      })
    
      eventEmitter.on(Messages.KEY_EVENT_DOWN, () => {
        hero.y += 5;
      });
    
      eventEmitter.on(Messages.KEY_EVENT_LEFT, () => {
        hero.x -= 5;
      });
    
      eventEmitter.on(Messages.KEY_EVENT_RIGHT, () => {
        hero.x += 5;
      });
    }
    ```

1. **I-setup ang game loop**

   I-refactor ang window.onload function upang i-initialize ang laro at i-setup ang game loop sa isang magandang interval. Magdadagdag ka rin ng laser beam:

    ```javascript
    window.onload = async () => {
      canvas = document.getElementById("canvas");
      ctx = canvas.getContext("2d");
      heroImg = await loadTexture("assets/player.png");
      enemyImg = await loadTexture("assets/enemyShip.png");
      laserImg = await loadTexture("assets/laserRed.png");
    
      initGame();
      let gameLoopId = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawGameObjects(ctx);
      }, 100)
      
    };
    ```

5. **Magdagdag ng code** upang igalaw ang mga kalaban sa isang tiyak na agwat.

    I-refactor ang `createEnemies()` function upang lumikha ng mga kalaban at i-push ang mga ito sa bagong gameObjects class:

    ```javascript
    function createEnemies() {
      const MONSTER_TOTAL = 5;
      const MONSTER_WIDTH = MONSTER_TOTAL * 98;
      const START_X = (canvas.width - MONSTER_WIDTH) / 2;
      const STOP_X = START_X + MONSTER_WIDTH;
    
      for (let x = START_X; x < STOP_X; x += 98) {
        for (let y = 0; y < 50 * 5; y += 50) {
          const enemy = new Enemy(x, y);
          enemy.img = enemyImg;
          gameObjects.push(enemy);
        }
      }
    }
    ```
    
    at magdagdag ng `createHero()` function upang gawin ang parehong proseso para sa hero.
    
    ```javascript
    function createHero() {
      hero = new Hero(
        canvas.width / 2 - 45,
        canvas.height - canvas.height / 4
      );
      hero.img = heroImg;
      gameObjects.push(hero);
    }
    ```

    at sa wakas, magdagdag ng `drawGameObjects()` function upang simulan ang pag-draw:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    Ang iyong mga kalaban ay dapat magsimulang sumugod sa iyong hero spaceship!

---

## 🚀 Hamon

Tulad ng nakikita mo, ang iyong code ay maaaring maging 'spaghetti code' kapag nagsimula kang magdagdag ng mga function, variable, at klase. Paano mo mas mahusay na maiaayos ang iyong code upang ito ay mas madaling basahin? Gumuhit ng isang sistema upang ayusin ang iyong code, kahit na ito ay nananatili pa rin sa isang file.

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/34)

## Review at Pag-aaral sa Sarili

Habang sinusulat natin ang ating laro nang walang paggamit ng mga framework, maraming mga JavaScript-based canvas framework para sa game development. Maglaan ng oras upang magbasa tungkol sa [mga ito](https://github.com/collections/javascript-game-engines).

## Takdang-Aralin

[Maglagay ng mga komento sa iyong code](assignment.md)

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, pakitandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.