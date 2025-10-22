<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "022bbb5c869091b98f19e408e0c51d5d",
  "translation_date": "2025-10-22T15:39:23+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "tl"
}
-->
# Gumawa ng Space Game Bahagi 3: Pagdaragdag ng Galaw

Isipin ang iyong mga paboritong laro – ang nagpapaganda sa kanila ay hindi lang magagandang graphics, kundi ang paraan ng paggalaw at pagtugon sa iyong mga aksyon. Sa ngayon, ang iyong space game ay parang isang magandang painting, pero malapit na nating idagdag ang galaw na magbibigay-buhay dito.

Noong pinrograma ng mga inhinyero ng NASA ang guidance computer para sa Apollo missions, hinarap nila ang parehong hamon: paano mo gagawing tumugon ang spacecraft sa input ng piloto habang awtomatikong pinapanatili ang mga pagwawasto ng kurso? Ang mga prinsipyo na matututunan natin ngayon ay kahalintulad ng mga konseptong iyon – pamamahala ng galaw na kontrolado ng manlalaro kasabay ng awtomatikong mga sistema.

Sa araling ito, matututunan mo kung paano magpalipad ng mga spaceship sa screen, tumugon sa mga utos ng manlalaro, at lumikha ng makinis na mga pattern ng galaw. Hahatiin natin ang lahat sa mga konseptong madaling maunawaan na natural na magtataguyod sa isa't isa.

Sa dulo, magagawa ng mga manlalaro na paliparin ang kanilang hero ship sa screen habang ang mga barko ng kalaban ay nagpa-patrol sa itaas. Mas mahalaga, mauunawaan mo ang mga pangunahing prinsipyo na nagpapatakbo ng mga sistema ng galaw sa laro.

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/33)

## Pag-unawa sa Galaw ng Laro

Nagiging buhay ang mga laro kapag nagsimulang gumalaw ang mga bagay, at may dalawang pangunahing paraan kung paano ito nangyayari:

- **Galaw na kontrolado ng manlalaro**: Kapag pinindot mo ang isang key o nag-click gamit ang mouse, may gumagalaw. Ito ang direktang koneksyon sa pagitan mo at ng mundo ng laro.
- **Awtomatikong galaw**: Kapag ang laro mismo ang nagpasya na gumalaw ang mga bagay – tulad ng mga barko ng kalaban na kailangang magpatrol sa screen kahit wala kang ginagawa.

Ang pagpapagalaw ng mga bagay sa screen ng computer ay mas simple kaysa sa iniisip mo. Naalala mo ba ang mga x at y coordinates mula sa klase ng math? Iyon mismo ang ginagamit natin dito. Noong sinusubaybayan ni Galileo ang mga buwan ng Jupiter noong 1610, ginagawa niya ang parehong bagay – nagpo-plot ng mga posisyon sa paglipas ng panahon upang maunawaan ang mga pattern ng galaw.

Ang pagpapagalaw ng mga bagay sa screen ay parang paggawa ng flipbook animation – kailangan mong sundin ang tatlong simpleng hakbang:

1. **I-update ang posisyon** – Baguhin kung saan dapat naroon ang iyong object (halimbawa, ilipat ito ng 5 pixels sa kanan)
2. **Burahin ang lumang frame** – Linisin ang screen para hindi mo makita ang mga ghostly trails
3. **I-drawing ang bagong frame** – Ilagay ang iyong object sa bagong posisyon nito

Gawin ito nang mabilis, at boom! Mayroon kang makinis na galaw na natural na nararamdaman ng mga manlalaro.

Ganito ang itsura nito sa code:

```javascript
// Set the hero's location
hero.x += 5;
// Clear the rectangle that hosts the hero
ctx.clearRect(0, 0, canvas.width, canvas.height);
// Redraw the game background and hero
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "black";
ctx.drawImage(heroImg, hero.x, hero.y);
```

**Ano ang ginagawa ng code na ito:**
- **Ina-update** ang x-coordinate ng hero ng 5 pixels para gumalaw ito nang pahalang
- **Binubura** ang buong canvas area para alisin ang lumang frame
- **Pinupuno** ang canvas ng itim na background na kulay
- **I-dinodrawing** ang hero image sa bagong posisyon nito

✅ Maisip mo ba ang dahilan kung bakit ang pag-redraw ng iyong hero nang maraming frames kada segundo ay maaaring magdulot ng performance costs? Basahin ang tungkol sa [mga alternatibo sa pattern na ito](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Pag-handle ng mga keyboard event

Dito natin ikokonekta ang input ng manlalaro sa aksyon ng laro. Kapag may pumindot sa spacebar para magpaputok ng laser o nag-tap sa arrow key para umiwas sa asteroid, kailangang ma-detect at tumugon ang iyong laro sa input na iyon.

Ang mga keyboard event ay nangyayari sa window level, ibig sabihin ang buong browser window mo ay nakikinig sa mga keypress na iyon. Ang mga mouse click, sa kabilang banda, ay maaaring itali sa mga partikular na elemento (tulad ng pag-click sa isang button). Para sa ating space game, magpo-focus tayo sa mga keyboard controls dahil ito ang nagbibigay sa mga manlalaro ng klasikong arcade feel.

Naalala ko ang mga operator ng telegrapo noong 1800s na kailangang i-translate ang morse code input sa mga makabuluhang mensahe – gumagawa tayo ng katulad na bagay, tinatranslate ang mga keypress sa mga utos ng laro.

Para mag-handle ng event, kailangan mong gamitin ang `addEventListener()` method ng window at magbigay ng dalawang input parameters. Ang unang parameter ay ang pangalan ng event, halimbawa `keyup`. Ang pangalawang parameter ay ang function na dapat ma-invoke bilang resulta ng event.

Narito ang isang halimbawa:

```javascript
window.addEventListener('keyup', (evt) => {
  // evt.key = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
});
```

**Pag-unawa sa nangyayari dito:**
- **Nakikinig** sa mga keyboard event sa buong window
- **Kinukuha** ang event object na naglalaman ng impormasyon tungkol sa kung anong key ang pinindot
- **Sinusuri** kung ang pinindot na key ay tumutugma sa isang partikular na key (sa kasong ito, ang up arrow)
- **Nag-e-execute** ng code kapag natugunan ang kondisyon

Para sa mga key event, may dalawang properties sa event na maaari mong gamitin para makita kung anong key ang pinindot:

- `key` - ito ay isang string representation ng pinindot na key, halimbawa `'ArrowUp'`
- `keyCode` - ito ay isang number representation, halimbawa `37`, na tumutugma sa `ArrowLeft`

✅ Ang pag-manipula ng key event ay kapaki-pakinabang kahit sa labas ng game development. Ano pang ibang gamit ang naiisip mo para sa teknik na ito?

### Mga espesyal na key: isang paalala!

Ang ilang mga key ay may built-in na browser behaviors na maaaring makagambala sa iyong laro. Ang mga arrow key ay nag-scroll sa page at ang spacebar ay tumatalon pababa – mga behavior na ayaw mo kapag sinusubukang i-pilot ang kanilang spaceship.

Maaari nating pigilan ang mga default na behavior na ito at hayaan ang laro na mag-handle ng input. Katulad ito ng kung paano kailangang i-override ng mga programmer noong unang panahon ang system interrupts para lumikha ng custom na behavior – ginagawa lang natin ito sa browser level. Ganito ang paraan:

```javascript
const onKeyDown = function (e) {
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

**Pag-unawa sa prevention code na ito:**
- **Sinusuri** ang mga partikular na key code na maaaring magdulot ng hindi kanais-nais na browser behavior
- **Pinipigilan** ang default na aksyon ng browser para sa mga arrow key at spacebar
- **Pinapayagan** ang ibang mga key na gumana nang normal
- **Gumagamit** ng `e.preventDefault()` para ihinto ang built-in na behavior ng browser

## Galaw na dulot ng laro

Ngayon, pag-usapan natin ang mga object na gumagalaw nang walang input ng manlalaro. Isipin ang mga barko ng kalaban na naglalakbay sa screen, mga bala na lumilipad sa tuwid na linya, o mga ulap na dumadaloy sa background. Ang awtonomong galaw na ito ay nagbibigay-buhay sa mundo ng laro kahit walang humahawak sa mga kontrol.

Gumagamit tayo ng built-in na timers ng JavaScript para i-update ang mga posisyon sa regular na interval. Ang konseptong ito ay katulad ng kung paano gumagana ang mga pendulum clock – isang regular na mekanismo na nagti-trigger ng consistent, timed actions. Ganito kasimple ito:

```javascript
const id = setInterval(() => {
  // Move the enemy on the y axis
  enemy.y += 10;
}, 100);
```

**Ano ang ginagawa ng movement code na ito:**
- **Gumagawa** ng timer na tumatakbo tuwing 100 milliseconds
- **Ina-update** ang y-coordinate ng kalaban ng 10 pixels bawat beses
- **Ini-store** ang interval ID para ma-stop ito kung kinakailangan
- **Pinapagalaw** ang kalaban pababa sa screen nang awtomatiko

## Ang game loop

Narito ang konsepto na nag-uugnay sa lahat – ang game loop. Kung ang iyong laro ay isang pelikula, ang game loop ang magiging film projector, nagpapakita ng frame pagkatapos ng frame nang napakabilis kaya mukhang gumagalaw ang lahat nang maayos.

Ang bawat laro ay may isa sa mga loop na ito na tumatakbo sa likod ng eksena. Isa itong function na nag-a-update ng lahat ng game objects, nagre-redraw ng screen, at inuulit ang prosesong ito nang tuloy-tuloy. Pinapanatili nito ang track ng iyong hero, lahat ng kalaban, anumang laser na lumilipad – ang buong estado ng laro.

Ang konseptong ito ay nagpapaalala sa akin kung paano kailangang i-redraw ng mga animator noong unang panahon tulad ni Walt Disney ang mga karakter frame by frame para lumikha ng ilusyon ng galaw. Ginagawa natin ang parehong bagay, pero gamit ang code sa halip na lapis.

Ganito ang itsura ng isang game loop, na ipinapahayag sa code:

```javascript
const gameLoopId = setInterval(() => {
  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawHero();
    drawEnemies();
    drawStaticObjects();
  }
  gameLoop();
}, 200);
```

**Pag-unawa sa istruktura ng game loop:**
- **Binubura** ang buong canvas para alisin ang lumang frame
- **Pinupuno** ang background ng solid na kulay
- **I-dinodrawing** ang lahat ng game objects sa kanilang kasalukuyang posisyon
- **Inuulit** ang prosesong ito tuwing 200 milliseconds para lumikha ng makinis na animation
- **Pinamamahalaan** ang frame rate sa pamamagitan ng pag-kontrol sa interval timing

## Pagpapatuloy ng Space Game

Ngayon, magdadagdag tayo ng galaw sa static na eksena na ginawa mo dati. Gagawin natin itong mula sa isang screenshot patungo sa isang interactive na karanasan. Gagawin natin ito hakbang-hakbang upang matiyak na ang bawat bahagi ay magtataguyod sa huli.

Kunin ang code mula sa kung saan tayo tumigil sa nakaraang aralin (o magsimula sa code sa [Part II- starter](../../../../6-space-game/3-moving-elements-around/your-work) folder kung kailangan mo ng bagong simula).

**Narito ang ating itatayo ngayon:**
- **Hero controls**: Ang mga arrow key ang magpapalipad sa iyong spaceship sa screen
- **Galaw ng kalaban**: Ang mga alien ships ay magsisimula ng kanilang pag-atake

Simulan na natin ang pag-implementa ng mga feature na ito.

## Mga Inirerekomendang Hakbang

Hanapin ang mga file na ginawa para sa iyo sa `your-work` sub folder. Dapat itong maglaman ng sumusunod:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Simulan ang iyong proyekto sa `your-work` folder sa pamamagitan ng pag-type:

```bash
cd your-work
npm start
```

**Ano ang ginagawa ng command na ito:**
- **Nagna-navigate** sa iyong project directory
- **Nagpapasimula** ng HTTP Server sa address na `http://localhost:5000`
- **Nagsisilbi** ng iyong game files para ma-test mo ito sa browser

Ang nasa itaas ay magsisimula ng HTTP Server sa address na `http://localhost:5000`. Buksan ang browser at ilagay ang address na iyon, sa ngayon dapat mag-render ang hero at lahat ng kalaban; wala pang gumagalaw - sa ngayon!

### Magdagdag ng Code

1. **Magdagdag ng mga dedicated object** para sa `hero`, `enemy`, at `game object`, dapat mayroon silang `x` at `y` properties. (Tandaan ang bahagi tungkol sa [Inheritance o composition](../README.md)).

   *HINT* Ang `game object` ang dapat may `x` at `y` at kakayahang i-drawing ang sarili sa canvas.

   > **Tip**: Simulan sa pamamagitan ng pagdaragdag ng bagong `GameObject` class na may constructor na tulad ng nasa ibaba, at pagkatapos ay i-drawing ito sa canvas:

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

    **Pag-unawa sa base class na ito:**
    - **Nagde-define** ng mga karaniwang properties na pinagsasaluhan ng lahat ng game objects (posisyon, laki, imahe)
    - **Kasama** ang `dead` flag para subaybayan kung dapat alisin ang object
    - **Nagbibigay** ng `draw()` method na nagre-render ng object sa canvas
    - **Nagse-set** ng default values para sa lahat ng properties na maaaring i-override ng child classes

    Ngayon, i-extend ang `GameObject` para lumikha ng `Hero` at `Enemy`:
    
    ```javascript
    class Hero extends GameObject {
      constructor(x, y) {
        super(x, y);
        this.width = 98;
        this.height = 75;
        this.type = "Hero";
        this.speed = 5;
      }
    }
    ```

    ```javascript
    class Enemy extends GameObject {
      constructor(x, y) {
        super(x, y);
        this.width = 98;
        this.height = 50;
        this.type = "Enemy";
        const id = setInterval(() => {
          if (this.y < canvas.height - this.height) {
            this.y += 5;
          } else {
            console.log('Stopped at', this.y);
            clearInterval(id);
          }
        }, 300);
      }
    }
    ```

    **Mga pangunahing konsepto sa mga klase na ito:**
    - **Nagmamana** mula sa `GameObject` gamit ang `extends` keyword
    - **Tinatawag** ang parent constructor gamit ang `super(x, y)`
    - **Nagse-set** ng partikular na dimensyon at properties para sa bawat uri ng object
    - **Nagpapatupad** ng awtomatikong galaw para sa mga kalaban gamit ang `setInterval()`

2. **Magdagdag ng key-event handlers** para sa key navigation (paggalaw ng hero pataas/pababa kaliwa/kanan)

   *TANDAAN* ito ay isang cartesian system, ang top-left ay `0,0`. Tandaan din na magdagdag ng code para ihinto ang *default behavior*

   > **Tip**: Gumawa ng iyong `onKeyDown` function at i-attach ito sa window:

   ```javascript
   const onKeyDown = function (e) {
     console.log(e.keyCode);
     // Add the code from the lesson above to stop default behavior
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

   window.addEventListener("keydown", onKeyDown);
   ```
    
   **Ano ang ginagawa ng event handler na ito:**
   - **Nakikinig** sa keydown events sa buong window
   - **Naglo-log** ng key code para matulungan kang i-debug kung anong mga key ang pinipindot
   - **Pinipigilan** ang default na browser behavior para sa mga arrow key at spacebar
   - **Pinapayagan** ang ibang mga key na gumana nang normal
   
   Tingnan ang console ng iyong browser sa puntong ito, at panoorin ang mga keystroke na na-log.

3. **Ipatupad** ang [Pub sub pattern](../README.md), panatilihing malinis ang iyong code habang sinusunod ang natitirang mga bahagi.

   Ang Publish-Subscribe pattern ay tumutulong sa pag-organisa ng iyong code sa pamamagitan ng paghihiwalay ng event detection mula sa event handling. Ginagawa nitong mas modular at madaling i-maintain ang iyong code.

   Para gawin ang huling bahagi na ito, maaari mong:

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

   **Ano ang ginagawa ng event system na ito:**
   - **Nadidetect** ang keyboard input at kino-convert ito sa custom na game events
   - **Ihinhiwalay** ang input detection mula sa game logic
   - **Ginagawang** madali ang pagbabago ng controls nang hindi naaapektuhan ang game code
   - **Pinapayagan** ang maraming sistema na tumugon sa parehong input

   2. **Gumawa ng EventEmitter class** para mag-publish at mag-subscribe sa mga mensahe:

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
       
   3. **Magdagdag ng constants** at i-setup ang EventEmitter:

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

   **Pag-unawa sa setup:**
   - **Nagde-define** ng mga message constants para maiwasan ang typo at gawing mas madali ang refactoring
   - **Nagde-declare** ng mga variable para sa mga imahe, canvas context, at estado ng laro
   - **Gumagawa** ng global event emitter para sa pub-sub system
   - **Nag-iinitialize** ng array para sa lahat ng game objects

   4. **I-initialize ang laro**

       ```javascript
       function initGame() {
         gameObjects = [];
         createEnemies();
         createHero();
       
         eventEmitter.on(Messages.KEY_EVENT_UP, () => {
           hero.y -= 5;
         });
       
         eventEmitter.on(Messages.KEY_EVENT_DOWN, () => {
           hero.y += 5;
         });
       
         eventEmitter.on(Messages.KEY_EVENT_LEFT, () => {
           hero.x -= 5;
         });
       
4. **I-setup ang game loop**

   I-refactor ang `window.onload` function para i-initialize ang laro at i-setup ang game loop sa tamang interval. Magdadagdag ka rin ng laser beam:

    ```javascript
    window.onload = async () => {
      canvas = document.getElementById("canvas");
      ctx = canvas.getContext("2d");
      heroImg = await loadTexture("assets/player.png");
      enemyImg = await loadTexture("assets/enemyShip.png");
      laserImg = await loadTexture("assets/laserRed.png");
    
      initGame();
      const gameLoopId = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawGameObjects(ctx);
      }, 100);
    };
    ```

   **Pag-unawa sa game setup:**
   - **Naghihintay** na ma-load nang buo ang page bago magsimula
   - **Kinukuha** ang canvas element at ang 2D rendering context nito
   - **Naglo-load** ng lahat ng image assets nang asynchronous gamit ang `await`
   - **Sinisimulan** ang game loop na tumatakbo sa 100ms intervals (10 FPS)
   - **Binubura** at nire-redraw ang buong screen bawat frame

5. **Magdagdag ng code** para magpagalaw ng mga kalaban sa isang tiyak na interval

    I-refactor ang `createEnemies()` function para lumikha ng mga kalaban at i-push ang mga ito sa bagong gameObjects class:

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

    **Ano ang ginagawa ng enemy creation:**
    - **Kinakalkula** ang mga posisyon para ma-center ang mga kalaban sa screen
- **Gumagawa** ng grid ng mga kalaban gamit ang nested loops  
- **Ina-assign** ang imahe ng kalaban sa bawat object ng kalaban  
- **Idinadagdag** ang bawat kalaban sa global game objects array  

at magdagdag ng `createHero()` function para gawin ang katulad na proseso para sa hero.  

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
  
**Ano ang ginagawa ng hero creation:**  
- **Pinoposisyon** ang hero sa ibabang gitna ng screen  
- **Ina-assign** ang imahe ng hero sa object ng hero  
- **Idinadagdag** ang hero sa game objects array para sa rendering  

at sa wakas, magdagdag ng `drawGameObjects()` function para simulan ang pag-drawing:  

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```
  
**Pag-unawa sa drawing function:**  
- **Ini-iterate** ang lahat ng game objects sa array  
- **Tinatawag** ang `draw()` method sa bawat object  
- **Ipinapasa** ang canvas context para ma-render ng mga object ang kanilang sarili  

Ang mga kalaban ay dapat magsimulang umabante papunta sa iyong hero spaceship!  
}  
}  
    ```
    
    and add a `createHero()` function to do a similar process for the hero.
    
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
  
at sa wakas, magdagdag ng `drawGameObjects()` function para simulan ang pag-drawing:  

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```
  
Ang mga kalaban ay dapat magsimulang umabante papunta sa iyong hero spaceship!  

---

## Hamon ng GitHub Copilot Agent 🚀  

Narito ang isang hamon na magpapaganda sa iyong laro: pagdaragdag ng mga hangganan at makinis na kontrol. Sa kasalukuyan, ang iyong hero ay maaaring lumipad palabas ng screen, at maaaring hindi maganda ang pakiramdam ng paggalaw.  

**Ang Iyong Misyon:** Gawing mas makatotohanan ang iyong spaceship sa pamamagitan ng pag-implement ng screen boundaries at fluid movement. Katulad ito ng kung paano pinipigilan ng mga sistema ng kontrol ng NASA ang spacecraft na lumampas sa ligtas na operational parameters.  

**Narito ang dapat gawin:** Gumawa ng sistema na magpapanatili sa iyong hero spaceship sa screen, at gawing makinis ang kontrol. Kapag pinindot ng mga manlalaro ang arrow key, ang spaceship ay dapat dumulas nang tuloy-tuloy sa halip na gumalaw sa discrete steps. Isaalang-alang ang pagdaragdag ng visual feedback kapag ang spaceship ay umabot sa mga hangganan ng screen – marahil isang banayad na epekto upang ipakita ang gilid ng play area.  

Alamin pa ang tungkol sa [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) dito.  

## 🚀 Hamon  

Ang organisasyon ng code ay nagiging mas mahalaga habang lumalaki ang mga proyekto. Maaaring napansin mo na ang iyong file ay nagiging masikip sa mga functions, variables, at classes na halo-halo. Paalala ito kung paano kailangang lumikha ng malinaw at maayos na sistema ang mga inhinyero ng Apollo mission code na maaaring sabay-sabay na magamit ng maraming team.  

**Ang iyong misyon:**  
Mag-isip tulad ng isang software architect. Paano mo iaayos ang iyong code upang anim na buwan mula ngayon, ikaw (o isang kasamahan) ay madaling maunawaan kung ano ang nangyayari? Kahit na ang lahat ay manatili sa isang file sa ngayon, maaari kang lumikha ng mas mahusay na organisasyon:  

- **Pag-grupo ng mga kaugnay na functions** na may malinaw na comment headers  
- **Paghiwalay ng mga concern** - panatilihin ang game logic na hiwalay sa rendering  
- **Paggamit ng pare-parehong naming** conventions para sa mga variables at functions  
- **Paglikha ng mga modules** o namespaces upang ayusin ang iba't ibang aspeto ng iyong laro  
- **Pagdaragdag ng dokumentasyon** na nagpapaliwanag ng layunin ng bawat pangunahing seksyon  

**Mga tanong para sa pagninilay:**  
- Aling bahagi ng iyong code ang pinakamahirap maunawaan kapag binalikan mo ito?  
- Paano mo maiaayos ang iyong code upang mas madali para sa iba na mag-ambag?  
- Ano ang mangyayari kung nais mong magdagdag ng mga bagong feature tulad ng power-ups o iba't ibang uri ng kalaban?  

## Post-Lecture Quiz  

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/34)  

## Review & Self Study  

Ginagawa natin ang lahat mula sa simula, na napakaganda para sa pag-aaral, ngunit narito ang isang maliit na lihim – mayroong mga kamangha-manghang JavaScript frameworks na maaaring magawa ang maraming mabibigat na trabaho para sa iyo. Kapag komportable ka na sa mga pundasyon na ating tinalakay, sulit [tuklasin kung ano ang magagamit](https://github.com/collections/javascript-game-engines).  

Isipin ang frameworks tulad ng pagkakaroon ng mahusay na kagamitan sa toolbox sa halip na gawin ang bawat tool nang mano-mano. Maaari nilang solusyunan ang marami sa mga hamon sa organisasyon ng code na ating tinalakay, at mag-alok ng mga feature na aabutin ng linggo upang gawin mo mismo.  

**Mga bagay na sulit tuklasin:**  
- Paano inaayos ng mga game engines ang code – magugulat ka sa mga matatalinong pattern na ginagamit nila  
- Mga trick sa performance para gawing butter-smooth ang canvas games  
- Mga modernong JavaScript features na maaaring gawing mas malinis at mas madaling mapanatili ang iyong code  
- Iba't ibang paraan ng pamamahala sa mga game objects at ang kanilang mga relasyon  

## Assignment  

[Comment your code](assignment.md)  

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na pinagmulan. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.