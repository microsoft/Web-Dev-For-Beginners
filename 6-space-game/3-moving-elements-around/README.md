# Build a Space Game Part 3: Adding Motion

## Pre-Lecture Quiz

[Pre-lecture quiz](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/33)

Games aren't much fun until you have aliens running around on screen! In this game, we will make use of two types of movements:

- **Keyboard/Mouse movement**: when the user interacts with the keyboard or mouse to move an object on the screen.
- **Game induced movement**: when the game moves an object with a certain time interval.

So how do we move things on a screen? It's all about cartesian coordinates: we change the location (x,y) of the object and then redraw the screen.

Typically you need the following steps to accomplish *movement* on a screen:

1. **Set a new location** for an object; this is needed to perceive the object as having moved.
2. **Clear the screen**, the screen needs to be cleared in between draws. We can clear it by drawing a rectangle that we fill with a background color.
3. **Redraw object** at new location. By doing this we finally accomplish moving the object from one location to the other.

 Here's what it can look like in code:

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

✅ Can you think of a reason why redrawing your hero many frames per second might accrue performance costs? Read about [alternatives to this pattern](https://www.html5rocks.com/en/tutorials/canvas/performance/).

## Handle keyboard events

You handle events by attaching specific events to code. Keyboard events are triggered on the whole window whereas mouse events like a `click` can be connected to clicking a specific element. We will use keyboard events throughout this project. 

To handle an event you need to use the window's `addEventListener()` method and provide it with two input parameters. The first parameter is the name of the event, for example `keyup`. The second parameter is the function that should be invoked as a result of the event taking place.  

Here's an example:

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

For key events there are two properties on the event you can use to see what key was pressed:

- `key`, this is a string representation of the pressed key, for example `ArrowUp`
- `keyCode`, this is a number representation, for example `37`, corresponds to `ArrowLeft`.

✅ Key event manipulation is useful outside of game development. What other uses can you think of for this technique?

### Special keys: a caveat

There are some *special* keys that affect the window. That means that if you are listening to a `keyup` event and you use these special keys to move your hero it will also perform horizontal scrolling. For that reason you might want to *shut-off* this built-in browser behavior as you build out your game. You need code like this:

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

The above code will ensure that arrow-keys and the space key have their *default* behavior shut off. The *shut-off* mechanism happens when we call `e.preventDefault()`.

## Game induced movement

We can make things move by themselves by using timers such as the `setTimeout()` or `setInterval()` function that update the location of the object on each tick, or time interval. Here's what that can look like:

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## The game loop

The game loop is a concept that is essentially a function that is invoked at regular intervals. It's called the game loop as everything that should be visible to the user is drawn into the loop. The game loop makes use of all the game objects that are part of the game, drawing all of them unless for some reason shouldn't be part of the game any more. For example if an object is an enemy that was hit by a laser and blows up, it's no longer part of the current game loop (you'll learn more on this in subsequent lessons).

Here's what a game loop can typically look like, expressed in code:

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

The above loop is invoked every `200` milliseconds to redraw the canvas. You have the ability to choose the best interval that makes sense for your game.

## Continuing the Space Game

You will take the existing code and extend it. Either start with the code that you completed during part I or use the code in [Part II- starter](your-work). 

- **Moving the hero**: you will add code to ensure you can move the hero using the arrow keys.
- **Move enemies**: you will also need to add code to ensure the enemies move from top to bottom at a given rate.

## Recommended steps

Locate the files that have been created for you in the `your-work` sub folder. It should contain the following:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

You start your project the `your_work` folder by typing:

```bash
cd your-work
npm start
```

The above will start a HTTP Server on address `http://localhost:5000`. Open up a browser and input that address, right now it should render the hero and all the enemies; nothing is moving - yet!

### Add code

1. **Add dedicated objects** for `hero` and `enemy` and `game object`, they should have `x` and `y` properties. (Remember the portion on [Inheritance or composition](../README.md) ). 

   *HINT* `game object` should be the one with `x` and `y` and the ability to draw itself to a canvas.

   >tip: start by adding a new GameObject class with its constructor delineated as below, and then draw it to the canvas:
  
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

    Now, extend this GameObject to create the Hero and Enemy.
    
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

2. **Add key-event handlers** to handle key navigation (move hero up/down left/right)

   *REMEMBER* it's a cartesian system, top-left is `0,0`. Also remember to add code to stop *default behavior*

   >tip: create your onKeyDown function and attach it to the window:

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   Check your browser console at this point, and watch the keystrokes being logged. 

3. **Implement** the [Pub sub pattern](../README.md), this will keep your code clean as you follow the remaining parts.

   To do this last part, you can:

   1. **Add an event listener** on the window:

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

    1. **Create an EventEmitter class** to publish and subscribe to messages:

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

    1. **Add constants** and set up the EventEmitter:

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

    1. **Initialize the game**

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

1. **Setup the game loop**

   Refactor the window.onload function to initialize the game and set up a game loop on a good interval. You'll also add a laser beam:

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

5. **Add code** to move enemies at a certain interval

    Refactor the `createEnemies()` function to create the enemies and push them into the new gameObjects class:

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

    and finally, add a `drawGameObjects()` function to start the drawing:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    Your enemies should start advancing on your hero spaceship!

---

## 🚀 Challenge

As you can see, your code can turn into 'spaghetti code' when you start adding functions and variables and classes. How can you better organize your code so that it is more readable? Sketch out a system to organize your code, even if it still resides in one file.

## Post-Lecture Quiz

[Post-lecture quiz](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/34)

## Review & Self Study

While we're writing our game without using frameworks, there are many JavaScript-based canvas frameworks for game development. Take some time to do some [reading about these](https://github.com/collections/javascript-game-engines).

## Assignment

[Comment your code](assignment.md)
