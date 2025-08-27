<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "23f088add24f0f1fa51014a9e27ea280",
  "translation_date": "2025-08-27T22:18:44+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "sr"
}
-->
# Изградња свемирске игре, део 3: Додавање кретања

## Квиз пре предавања

[Квиз пре предавања](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/33)

Игре нису баш забавне док се ванземаљци не почну кретати по екрану! У овој игри ћемо користити два типа кретања:

- **Кретање помоћу тастатуре/мишa**: када корисник интерагује са тастатуром или мишем да би померио објекат на екрану.
- **Кретање изазвано игром**: када игра помера објекат у одређеним временским интервалима.

Како онда померамо ствари на екрану? Све се своди на координатни систем: мењамо локацију (x, y) објекта и затим поново цртамо екран.

Типично, потребни су следећи кораци да би се постигло *кретање* на екрану:

1. **Поставите нову локацију** за објекат; ово је потребно да би се објекат перципирао као да се померио.
2. **Очистите екран**, екран треба очистити између цртања. Можемо га очистити цртањем правоугаоника који попуњавамо бојом позадине.
3. **Поново нацртајте објекат** на новој локацији. На овај начин коначно постижемо померање објекта са једне локације на другу.

Ево како то може изгледати у коду:

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

✅ Можете ли смислити разлог зашто поновно цртање вашег хероја много пута у секунди може довести до проблема са перформансама? Прочитајте о [алтернативама овом шаблону](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Обрада догађаја тастатуре

Догађаје обрађујете тако што повезујете одређене догађаје са кодом. Догађаји тастатуре се активирају на целом прозору, док се догађаји миша, као што је `click`, могу повезати са кликом на одређени елемент. Кроз овај пројекат користићемо догађаје тастатуре.

Да бисте обрадили догађај, потребно је да користите метод `addEventListener()` прозора и да му дате два улазна параметра. Први параметар је назив догађаја, на пример `keyup`. Други параметар је функција која треба да се позове као резултат догађаја.

Ево примера:

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

За догађаје тастатуре постоје два својства на догађају која можете користити да видите који је тастер притиснут:

- `key`, ово је стринг репрезентација притиснутог тастера, на пример `ArrowUp`
- `keyCode`, ово је нумеричка репрезентација, на пример `37`, што одговара `ArrowLeft`.

✅ Манипулација догађајима тастатуре је корисна и ван развоја игара. Које друге примене можете замислити за ову технику?

### Посебни тастери: упозорење

Постоје неки *посебни* тастери који утичу на прозор. То значи да ако слушате догађај `keyup` и користите ове посебне тастере за померање вашег хероја, то ће такође изазвати хоризонтално скроловање. Због тога ћете можда желети да *искључите* ово уграђено понашање прегледача док развијате своју игру. Потребан вам је код као овај:

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

Горњи код ће осигурати да стрелице и тастер за размак имају своје *подразумевано* понашање искључено. Механизам *искључивања* се дешава када позовемо `e.preventDefault()`.

## Кретање изазвано игром

Можемо учинити да се ствари саме крећу користећи тајмере као што су функције `setTimeout()` или `setInterval()` које ажурирају локацију објекта на сваком интервалу. Ево како то може изгледати:

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## Петља игре

Петља игре је концепт који је у суштини функција која се позива у редовним интервалима. Зове се петља игре јер све што треба да буде видљиво кориснику се црта унутар петље. Петља игре користи све објекте игре који су део игре, цртајући све њих осим ако из неког разлога не би требало да буду део игре. На пример, ако је објекат непријатељ који је погођен ласером и експлодира, он више није део тренутне петље игре (о овоме ћете више научити у наредним лекцијама).

Ево како петља игре обично изгледа, изражена у коду:

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

Горња петља се позива сваких `200` милисекунди да би се поново нацртала платформа. Имате могућност да изаберете најбољи интервал који има смисла за вашу игру.

## Наставак свемирске игре

Узећете постојећи код и проширити га. Можете започети са кодом који сте завршили током првог дела или користити код из [Део II - почетак](../../../../6-space-game/3-moving-elements-around/your-work).

- **Померање хероја**: додаћете код да осигурате да можете померати хероја помоћу стрелица.
- **Померање непријатеља**: такође ћете морати да додате код да осигурате да се непријатељи померају од врха ка дну у одређеном темпу.

## Препоручени кораци

Пронађите датотеке које су креиране за вас у подфолдеру `your-work`. Требало би да садрже следеће:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Започните свој пројекат у фолдеру `your_work` тако што ћете укуцати:

```bash
cd your-work
npm start
```

Горњи код ће покренути HTTP сервер на адреси `http://localhost:5000`. Отворите прегледач и унесите ту адресу, тренутно би требало да приказује хероја и све непријатеље; ништа се још не помера!

### Додајте код

1. **Додајте посебне објекте** за `hero`, `enemy` и `game object`, они би требало да имају својства `x` и `y`. (Запамтите део о [Наслеђивању или композицији](../README.md)).

   *САВЕТ* `game object` би требало да буде онај са `x` и `y` и способношћу да се нацрта на платформи.

   >савет: започните додавањем нове класе GameObject са њеним конструктором дефинисаним као доле, а затим је нацртајте на платформи:
  
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

    Сада проширите овај GameObject да бисте креирали Hero и Enemy.
    
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

2. **Додајте обрађиваче догађаја тастатуре** за навигацију (померање хероја горе/доле, лево/десно)

   *ЗАПАМТИТЕ* то је координатни систем, горњи леви угао је `0,0`. Такође запамтите да додате код за заустављање *подразумеваног понашања*.

   >савет: креирајте своју функцију onKeyDown и повежите је са прозором:

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   Проверите конзолу вашег прегледача у овом тренутку и посматрајте притиске на тастере који се бележе.

3. **Примените** [Pub sub pattern](../README.md), ово ће одржати ваш код чистим док следите преостале делове.

   Да бисте урадили овај последњи део, можете:

   1. **Додајте слушаоца догађаја** на прозор:

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

    1. **Креирајте класу EventEmitter** за објављивање и претплату на поруке:

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

    1. **Додајте константе** и подесите EventEmitter:

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

    1. **Иницијализујте игру**

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

1. **Подесите петљу игре**

   Преформулишите функцију window.onload да иницијализује игру и подесите петљу игре на добар интервал. Такође ћете додати ласерски зрак:

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

5. **Додајте код** за померање непријатеља у одређеним интервалима

    Преформулишите функцију `createEnemies()` да креира непријатеље и дода их у нову класу gameObjects:

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
    
    и додајте функцију `createHero()` да уради сличан процес за хероја.
    
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

    и на крају, додајте функцију `drawGameObjects()` да започнете цртање:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    Ваши непријатељи би требало да почну да напредују ка вашем свемирском броду!

---

## 🚀 Изазов

Као што видите, ваш код може постати 'шпагети код' када почнете да додајете функције, променљиве и класе. Како можете боље организовати свој код тако да буде читљивији? Осмислите систем за организовање вашег кода, чак и ако он и даље остаје у једној датотеци.

## Квиз после предавања

[Квиз после предавања](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/34)

## Преглед и самостално учење

Иако пишемо нашу игру без коришћења оквира, постоји много оквира за развој игара заснованих на JavaScript платформи. Одвојите време да прочитате [о овим оквирима](https://github.com/collections/javascript-game-engines).

## Задатак

[Коментаришите свој код](assignment.md)

---

**Одрицање од одговорности**:  
Овај документ је преведен коришћењем услуге за превођење помоћу вештачке интелигенције [Co-op Translator](https://github.com/Azure/co-op-translator). Иако се трудимо да обезбедимо тачност, молимо вас да имате у виду да аутоматизовани преводи могу садржати грешке или нетачности. Оригинални документ на његовом изворном језику треба сматрати ауторитативним извором. За критичне информације препоручује се професионални превод од стране људи. Не преузимамо одговорност за било каква погрешна тумачења или неспоразуме који могу настати услед коришћења овог превода.