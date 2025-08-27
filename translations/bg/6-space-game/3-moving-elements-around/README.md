<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "23f088add24f0f1fa51014a9e27ea280",
  "translation_date": "2025-08-27T22:18:13+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "bg"
}
-->
# Създаване на космическа игра, част 3: Добавяне на движение

## Предварителен тест

[Предварителен тест](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/33)

Игрите не са много забавни, докато не започнат извънземните да се движат по екрана! В тази игра ще използваме два типа движения:

- **Движение с клавиатура/мишка**: когато потребителят взаимодейства с клавиатурата или мишката, за да премести обект на екрана.
- **Движение, предизвикано от играта**: когато играта премества обект с определен времеви интервал.

Как всъщност движим нещата на екрана? Всичко се свежда до декартови координати: променяме местоположението (x, y) на обекта и след това прерисуваме екрана.

Обикновено са необходими следните стъпки, за да постигнем *движение* на екрана:

1. **Задаване на ново местоположение** за обект; това е необходимо, за да се възприеме обектът като преместен.
2. **Изчистване на екрана**, екранът трябва да бъде изчистен между рисуванията. Можем да го изчистим, като нарисуваме правоъгълник, който запълваме с фонов цвят.
3. **Прерисуване на обекта** на новото местоположение. По този начин най-накрая постигаме преместване на обекта от едно място на друго.

Ето как може да изглежда това в код:

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

✅ Можете ли да измислите причина, поради която прерисуването на вашия герой много кадри в секунда може да доведе до разходи за производителност? Прочетете за [алтернативи на този модел](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Обработка на събития от клавиатурата

Обработвате събития, като свързвате специфични събития с код. Събитията от клавиатурата се задействат върху целия прозорец, докато събитията от мишката, като `click`, могат да бъдат свързани с кликване върху конкретен елемент. Ще използваме събития от клавиатурата през целия проект.

За да обработите събитие, трябва да използвате метода `addEventListener()` на прозореца и да му предоставите два входни параметъра. Първият параметър е името на събитието, например `keyup`. Вторият параметър е функцията, която трябва да бъде извикана в резултат на настъпването на събитието.

Ето пример:

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

За събития от клавиатурата има две свойства на събитието, които можете да използвате, за да видите кой клавиш е натиснат:

- `key`, това е текстово представяне на натиснатия клавиш, например `ArrowUp`.
- `keyCode`, това е числово представяне, например `37`, което съответства на `ArrowLeft`.

✅ Манипулирането на събития от клавиатурата е полезно извън разработката на игри. За какви други приложения можете да се сетите за тази техника?

### Специални клавиши: предупреждение

Има някои *специални* клавиши, които влияят на прозореца. Това означава, че ако слушате събитие `keyup` и използвате тези специални клавиши, за да преместите героя си, това също ще извърши хоризонтално превъртане. Поради тази причина може да искате да *изключите* това вградено поведение на браузъра, докато изграждате играта си. Ще ви трябва код като този:

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

Горният код ще гарантира, че клавишите със стрелки и клавишът за интервал имат своето *по подразбиране* поведение изключено. Механизмът за *изключване* се случва, когато извикаме `e.preventDefault()`.

## Движение, предизвикано от играта

Можем да накараме нещата да се движат сами, като използваме таймери като функциите `setTimeout()` или `setInterval()`, които актуализират местоположението на обекта на всяко тикване или времеви интервал. Ето как може да изглежда това:

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## Игровият цикъл

Игровият цикъл е концепция, която представлява функция, извиквана на редовни интервали. Нарича се игрови цикъл, тъй като всичко, което трябва да бъде видимо за потребителя, се рисува в цикъла. Игровият цикъл използва всички игрови обекти, които са част от играта, като рисува всички тях, освен ако по някаква причина не трябва да бъдат част от играта повече. Например, ако обектът е враг, който е бил ударен от лазер и се е взривил, той вече не е част от текущия игрови цикъл (ще научите повече за това в следващите уроци).

Ето как обикновено може да изглежда игровият цикъл, изразен в код:

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

Горният цикъл се извиква на всеки `200` милисекунди, за да прерисува платното. Имате възможност да изберете най-добрия интервал, който има смисъл за вашата игра.

## Продължаване на космическата игра

Ще вземете съществуващия код и ще го разширите. Можете да започнете с кода, който сте завършили по време на част I, или да използвате кода в [Част II - стартов](../../../../6-space-game/3-moving-elements-around/your-work).

- **Движение на героя**: ще добавите код, за да гарантирате, че можете да движите героя с помощта на клавишите със стрелки.
- **Движение на враговете**: ще трябва също да добавите код, за да гарантирате, че враговете се движат отгоре надолу с определена скорост.

## Препоръчителни стъпки

Намерете файловете, които са създадени за вас в подпапката `your-work`. Тя трябва да съдържа следното:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Започнете проекта си в папката `your_work`, като напишете:

```bash
cd your-work
npm start
```

Горният код ще стартира HTTP сървър на адрес `http://localhost:5000`. Отворете браузър и въведете този адрес, в момента трябва да се визуализира героят и всички врагове; нищо не се движи - все още!

### Добавяне на код

1. **Добавете специални обекти** за `hero`, `enemy` и `game object`, те трябва да имат свойства `x` и `y`. (Спомнете си частта за [Наследяване или композиция](../README.md)).

   *ПОДСКАЗКА* `game object` трябва да бъде този с `x` и `y` и способността да се рисува върху платно.

   >съвет: започнете, като добавите нов клас GameObject с неговия конструктор, дефиниран както следва, и след това го нарисувайте върху платното:
  
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

    Сега разширете този GameObject, за да създадете Hero и Enemy.
    
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

2. **Добавете обработчици на събития от клавиатурата**, за да обработвате навигацията с клавиши (преместване на героя нагоре/надолу, наляво/надясно).

   *ЗАПОМНЕТЕ* това е декартова система, горният ляв ъгъл е `0,0`. Също така не забравяйте да добавите код за спиране на *поведение по подразбиране*.

   >съвет: създайте своя функция onKeyDown и я свържете с прозореца:

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   Проверете конзолата на браузъра си на този етап и наблюдавайте регистрирането на натисканията на клавиши.

3. **Реализирайте** [Модела Pub-Sub](../README.md), това ще поддържа кода ви чист, докато следвате останалите части.

   За да направите тази последна част, можете:

   1. **Добавете слушател на събития** към прозореца:

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

    1. **Създайте клас EventEmitter**, за да публикувате и абонирате съобщения:

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

    1. **Добавете константи** и настройте EventEmitter:

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

    1. **Инициализирайте играта**

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

1. **Настройте игровия цикъл**

   Рефакторирайте функцията window.onload, за да инициализирате играта и да настроите игрови цикъл на подходящ интервал. Ще добавите и лазерен лъч:

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

5. **Добавете код** за движение на враговете на определен интервал

    Рефакторирайте функцията `createEnemies()`, за да създадете враговете и да ги добавите към новия клас gameObjects:

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
    
    и добавете функция `createHero()`, за да направите подобен процес за героя.
    
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

    и накрая, добавете функция `drawGameObjects()`, за да започнете рисуването:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    Вашите врагове трябва да започнат да настъпват към вашия космически кораб!

---

## 🚀 Предизвикателство

Както виждате, вашият код може да се превърне в "спагети код", когато започнете да добавяте функции, променливи и класове. Как можете да организирате кода си по-добре, така че да бъде по-четим? Начертайте система за организиране на кода си, дори ако той все още се намира в един файл.

## Тест след лекцията

[Тест след лекцията](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/34)

## Преглед и самостоятелно обучение

Докато пишем играта си без използване на рамки, има много JavaScript-базирани рамки за платно за разработка на игри. Отделете време да направите [четене за тях](https://github.com/collections/javascript-game-engines).

## Задание

[Коментирайте кода си](assignment.md)

---

**Отказ от отговорност**:  
Този документ е преведен с помощта на AI услуга за превод [Co-op Translator](https://github.com/Azure/co-op-translator). Въпреки че се стремим към точност, моля, имайте предвид, че автоматизираните преводи може да съдържат грешки или неточности. Оригиналният документ на неговия роден език трябва да се счита за авторитетен източник. За критична информация се препоръчва професионален човешки превод. Ние не носим отговорност за недоразумения или погрешни интерпретации, произтичащи от използването на този превод.