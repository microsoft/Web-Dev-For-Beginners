<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "03f5022615bbc23417d5af42943d12f5",
  "translation_date": "2025-10-20T21:09:31+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "tl"
}
-->
# Gumawa ng Space Game Bahagi 3: Pagdaragdag ng Galaw

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/33)

Hindi masyadong masaya ang mga laro kung walang mga alien na gumagalaw sa screen! Sa larong ito, gagamit tayo ng dalawang uri ng galaw:

- **Galaw gamit ang Keyboard/Mouse**: kapag ang user ay nakikipag-ugnayan gamit ang keyboard o mouse upang igalaw ang isang bagay sa screen.
- **Galaw na dulot ng laro**: kapag ang laro mismo ang gumagalaw sa isang bagay sa loob ng tiyak na oras.

Paano nga ba natin ginagalaw ang mga bagay sa screen? Nakasalalay ito sa cartesian coordinates: binabago natin ang lokasyon (x,y) ng bagay at muling iginuguhit ang screen.

Karaniwan, kailangan mo ng mga sumusunod na hakbang upang makamit ang *galaw* sa screen:

1. **Itakda ang bagong lokasyon** ng isang bagay; ito ay kinakailangan upang makita na gumalaw ang bagay.
2. **Linisin ang screen**, kailangang linisin ang screen sa pagitan ng mga guhit. Maaari natin itong linisin sa pamamagitan ng pagguhit ng isang rectangle na pinupuno ng background color.
3. **Muling iguhit ang bagay** sa bagong lokasyon. Sa pamamagitan nito, sa wakas ay makakamit natin ang paggalaw ng bagay mula sa isang lokasyon patungo sa iba.

Ganito ang itsura nito sa code:

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

✅ Maiisip mo ba kung bakit ang muling pagguhit ng iyong hero ng maraming frames kada segundo ay maaaring magdulot ng mataas na performance costs? Basahin ang tungkol sa [mga alternatibo sa pattern na ito](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Pag-handle ng keyboard events

Hinahandle ang mga events sa pamamagitan ng pag-attach ng mga partikular na events sa code. Ang keyboard events ay na-trigger sa buong window samantalang ang mouse events tulad ng `click` ay maaaring i-connect sa pag-click sa isang partikular na elemento. Gagamit tayo ng keyboard events sa buong proyekto na ito.

Upang ma-handle ang isang event, kailangan mong gamitin ang `addEventListener()` method ng window at magbigay ng dalawang input parameters. Ang unang parameter ay ang pangalan ng event, halimbawa `keyup`. Ang pangalawang parameter ay ang function na dapat ma-invoke bilang resulta ng event na naganap.

Narito ang isang halimbawa:

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

Para sa key events, mayroong dalawang properties sa event na maaari mong gamitin upang makita kung anong key ang na-press:

- `key`, ito ay isang string na representasyon ng na-press na key, halimbawa `ArrowUp`
- `keyCode`, ito ay isang numero na representasyon, halimbawa `37`, na tumutukoy sa `ArrowLeft`.

✅ Ang pag-manipula ng key events ay kapaki-pakinabang kahit sa labas ng game development. Ano pang ibang gamit ang naiisip mo para sa teknik na ito?

### Mga espesyal na key: isang paalala

May ilang *espesyal* na key na nakakaapekto sa window. Nangangahulugan ito na kung nakikinig ka sa isang `keyup` event at ginamit mo ang mga espesyal na key upang igalaw ang iyong hero, maaari rin itong magdulot ng horizontal scrolling. Dahil dito, maaaring gusto mong *i-disable* ang built-in na behavior ng browser habang binubuo mo ang iyong laro. Kailangan mo ng code tulad nito:

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

Ang code sa itaas ay titiyak na ang arrow-keys at ang space key ay may *default* na behavior na naka-disable. Ang *pag-disable* na mekanismo ay nangyayari kapag tinawag natin ang `e.preventDefault()`.

## Galaw na dulot ng laro

Maaari nating igalaw ang mga bagay nang kusa gamit ang timers tulad ng `setTimeout()` o `setInterval()` function na nag-a-update sa lokasyon ng bagay sa bawat tick o time interval. Ganito ang itsura nito:

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## Ang game loop

Ang game loop ay isang konsepto na mahalagang function na na-invoke sa regular na mga interval. Tinatawag itong game loop dahil lahat ng dapat makita ng user ay iginuguhit sa loop. Ang game loop ay gumagamit ng lahat ng game objects na bahagi ng laro, iginuguhit ang lahat ng ito maliban na lang kung may dahilan kung bakit hindi na dapat maging bahagi ng laro. Halimbawa, kung ang isang bagay ay isang kalaban na tinamaan ng laser at sumabog, hindi na ito bahagi ng kasalukuyang game loop (malalaman mo pa ang tungkol dito sa mga susunod na aralin).

Ganito ang karaniwang itsura ng isang game loop, na ipinahayag sa code:

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

Ang loop sa itaas ay na-invoke tuwing `200` milliseconds upang muling iguhit ang canvas. May kakayahan kang pumili ng pinakamainam na interval na naaangkop sa iyong laro.

## Pagpapatuloy ng Space Game

Kukunin mo ang umiiral na code at palalawakin ito. Maaaring magsimula sa code na natapos mo noong bahagi I o gamitin ang code sa [Bahagi II- starter](../../../../6-space-game/3-moving-elements-around/your-work).

- **Paggalaw ng hero**: magdadagdag ka ng code upang matiyak na maaari mong igalaw ang hero gamit ang arrow keys.
- **Paggalaw ng mga kalaban**: kailangan mo ring magdagdag ng code upang matiyak na gumagalaw ang mga kalaban mula sa itaas pababa sa isang tiyak na bilis.

## Mga Inirerekomendang Hakbang

Hanapin ang mga file na ginawa para sa iyo sa sub-folder na `your-work`. Dapat itong naglalaman ng mga sumusunod:

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

Ang nasa itaas ay magpapasimula ng isang HTTP Server sa address na `http://localhost:5000`. Buksan ang browser at ilagay ang address na iyon, sa ngayon dapat itong mag-render ng hero at lahat ng mga kalaban; wala pang gumagalaw - sa ngayon!

### Magdagdag ng code

1. **Magdagdag ng mga dedicated objects** para sa `hero`, `enemy`, at `game object`, dapat silang mayroong `x` at `y` properties. (Tandaan ang bahagi tungkol sa [Inheritance o composition](../README.md)).

   *HINT* Ang `game object` ang dapat mayroong `x` at `y` at kakayahang iguhit ang sarili nito sa canvas.

   >tip: magsimula sa pamamagitan ng pagdaragdag ng bagong GameObject class na may constructor na tulad ng nasa ibaba, at pagkatapos ay iguhit ito sa canvas:
  
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

2. **Magdagdag ng key-event handlers** upang i-handle ang key navigation (igalaw ang hero pataas/pababa kaliwa/kanan)

   *TANDAAN* ito ay isang cartesian system, ang top-left ay `0,0`. Tandaan din na magdagdag ng code upang ihinto ang *default behavior*

   >tip: gumawa ng iyong onKeyDown function at i-attach ito sa window:

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   Tingnan ang console ng iyong browser sa puntong ito, at panoorin ang mga keystrokes na na-log.

3. **Ipatupad** ang [Pub sub pattern](../README.md), ito ay magpapanatili ng kalinisan ng iyong code habang sinusundan ang natitirang mga bahagi.

   Upang gawin ang huling bahagi, maaari mong:

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

    1. **Magdagdag ng constants** at i-set up ang EventEmitter:

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

1. **I-set up ang game loop**

   I-refactor ang window.onload function upang i-initialize ang laro at i-set up ang game loop sa tamang interval. Magdadagdag ka rin ng laser beam:

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

5. **Magdagdag ng code** upang igalaw ang mga kalaban sa isang tiyak na interval

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
    
    at magdagdag ng `createHero()` function upang gawin ang katulad na proseso para sa hero.
    
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

    at sa wakas, magdagdag ng `drawGameObjects()` function upang simulan ang pagguhit:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    Ang iyong mga kalaban ay dapat magsimulang umabante sa iyong hero spaceship!

---

## Hamon ng GitHub Copilot Agent 🚀

Gamitin ang Agent mode upang tapusin ang sumusunod na hamon:

**Deskripsyon:** Pagandahin ang space game sa pamamagitan ng pag-implement ng boundary detection at smooth movement controls. Ang hamon na ito ay makakatulong sa iyo na magsanay sa game object manipulation, event handling, at canvas rendering techniques.

**Prompt:** Gumawa ng boundary detection system na pumipigil sa hero spaceship na lumampas sa mga hangganan ng canvas. Bukod dito, mag-implement ng smooth movement system kung saan ang paghawak sa arrow keys ay nagdudulot ng tuloy-tuloy na galaw sa halip na single-step movement. Siguraduhing huminto agad ang hero kapag binitawan ang mga keys at magdagdag ng visual feedback kapag ang hero ay tumama sa hangganan (tulad ng panandaliang pagbabago ng kulay o glow effect).

## 🚀 Hamon

Tulad ng nakikita mo, ang iyong code ay maaaring maging 'spaghetti code' kapag nagsimula kang magdagdag ng mga function, variable, at klase. Paano mo mas maayos na ma-oorganisa ang iyong code upang mas maging nababasa ito? Gumuhit ng sistema upang ma-organisa ang iyong code, kahit na ito ay nananatili sa isang file.

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/34)

## Review & Self Study

Habang sinusulat natin ang ating laro nang hindi gumagamit ng mga frameworks, maraming JavaScript-based canvas frameworks para sa game development. Maglaan ng oras upang magbasa tungkol sa [mga ito](https://github.com/collections/javascript-game-engines).

## Assignment

[Maglagay ng mga komento sa iyong code](assignment.md)

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na mapagkakatiwalaang pinagmulan. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.