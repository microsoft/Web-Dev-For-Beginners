<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a9a161871de7706cb0e23b1bd0c74559",
  "translation_date": "2025-08-29T13:20:25+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "en"
}
-->
# Build a Space Game Part 3: Adding Motion

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/33)

Games become much more engaging when you have aliens moving around on the screen! In this lesson, we’ll explore two types of movement:

- **Keyboard/Mouse movement**: When the user interacts with the keyboard or mouse to move an object on the screen.
- **Game-induced movement**: When the game itself moves an object at specific time intervals.

So, how do we make objects move on the screen? It all comes down to cartesian coordinates: we change the object's location (x, y) and then redraw the screen.

To achieve *movement* on the screen, you typically follow these steps:

1. **Set a new location** for the object. This is necessary to make it appear as though the object has moved.
2. **Clear the screen**. The screen must be cleared between draws. This can be done by drawing a rectangle filled with the background color.
3. **Redraw the object** at its new location. This step completes the process of moving the object from one position to another.

Here’s an example of what this might look like in code:

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

✅ Can you think of why redrawing your hero many times per second might lead to performance issues? Check out [alternatives to this pattern](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Handle keyboard events

You can handle events by attaching specific events to your code. Keyboard events are triggered on the entire window, while mouse events like `click` can be tied to specific elements. In this project, we’ll use keyboard events.

To handle an event, you use the window's `addEventListener()` method, which takes two input parameters. The first parameter is the event name, such as `keyup`. The second parameter is the function to be executed when the event occurs.

Here’s an example:

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

For key events, you can use two properties on the event object to determine which key was pressed:

- `key`: A string representation of the pressed key, such as `ArrowUp`.
- `keyCode`: A numeric representation, such as `37`, which corresponds to `ArrowLeft`.

✅ Key event handling is useful beyond game development. Can you think of other applications for this technique?

### Special keys: a caveat

Some *special* keys affect the browser window. For example, if you’re listening for a `keyup` event and use these special keys to move your hero, the browser might also perform horizontal scrolling. To prevent this, you can disable the browser's default behavior with the following code:

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

This code ensures that the arrow keys and the spacebar have their *default* behavior disabled. The disabling happens when we call `e.preventDefault()`.

## Game-induced movement

Objects can move on their own using timers like `setTimeout()` or `setInterval()`. These functions update the object's location at regular intervals. Here’s an example:

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## The game loop

The game loop is a fundamental concept in game development. It’s essentially a function that runs at regular intervals, drawing everything that should be visible to the player. The game loop processes all game objects, drawing them unless they’re no longer part of the game (e.g., an enemy destroyed by a laser).

Here’s an example of a typical game loop in code:

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

This loop runs every `200` milliseconds to redraw the canvas. You can adjust the interval to suit your game’s needs.

## Continuing the Space Game

You’ll build on the existing code. Start with the code you completed in Part I, or use the code provided in [Part II - starter](../../../../6-space-game/3-moving-elements-around/your-work).

- **Move the hero**: Add code to allow the hero to move using the arrow keys.
- **Move enemies**: Add code to make the enemies move from top to bottom at a set speed.

## Recommended steps

Locate the files in the `your-work` folder. It should contain the following:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Start your project by navigating to the `your_work` folder and typing:

```bash
cd your-work
npm start
```

This will start an HTTP server at `http://localhost:5000`. Open a browser and navigate to that address. At this point, you should see the hero and enemies on the screen, but nothing is moving—yet!

### Add code

1. **Create dedicated objects** for `hero`, `enemy`, and `game object`. These should have `x` and `y` properties. (Refer to the section on [Inheritance or composition](../README.md)).

   *HINT*: The `game object` should include `x` and `y` properties and the ability to draw itself on the canvas.

   > Tip: Start by creating a `GameObject` class with the following constructor, and then draw it on the canvas:

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

   Next, extend the `GameObject` class to create the `Hero` and `Enemy` classes:

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

2. **Add key-event handlers** to handle navigation (move the hero up, down, left, and right).

   *REMEMBER*: The coordinate system starts at the top-left corner, which is `(0, 0)`. Also, don’t forget to disable the default browser behavior.

   > Tip: Create an `onKeyDown` function and attach it to the window:

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```

   Check your browser console to see the keystrokes being logged.

3. **Implement** the [Pub-Sub pattern](../README.md) to keep your code clean as you continue building the game.

   To do this, follow these steps:

   1. **Add an event listener** to the window:

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

   2. **Create an EventEmitter class** to manage publishing and subscribing to messages:

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

   3. **Add constants** and set up the EventEmitter:

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

   4. **Initialize the game**:

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

4. **Set up the game loop**

   Refactor the `window.onload` function to initialize the game and set up a game loop with an appropriate interval. Add a laser beam as well:

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

5. **Move enemies at intervals**

   Refactor the `createEnemies()` function to generate enemies and add them to the new `gameObjects` class:

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

   Create a `createHero()` function to do the same for the hero:

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

   Finally, add a `drawGameObjects()` function to start drawing:

   ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

   Your enemies should now begin advancing toward your hero spaceship!

---

## 🚀 Challenge

As you’ve seen, adding more functions, variables, and classes can lead to 'spaghetti code.' How can you better organize your code to make it more readable? Sketch out a system for organizing your code, even if it’s still in a single file.

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/34)

## Review & Self Study

While we’re building this game without frameworks, there are many JavaScript-based canvas frameworks for game development. Take some time to [read about these](https://github.com/collections/javascript-game-engines).

## Assignment

[Comment your code](assignment.md)

---

**Disclaimer**:  
This document has been translated using the AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). While we strive for accuracy, please note that automated translations may contain errors or inaccuracies. The original document in its native language should be regarded as the authoritative source. For critical information, professional human translation is recommended. We are not responsible for any misunderstandings or misinterpretations resulting from the use of this translation.