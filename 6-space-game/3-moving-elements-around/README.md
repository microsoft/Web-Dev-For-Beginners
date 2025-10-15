# Build a Space Game Part 3: Adding Motion

Movement is the heart of any engaging game experience. Without motion, your space game would be nothing more than a static image – interesting to look at, but hardly exciting to play! In this lesson, you'll breathe life into your game by learning how to create dynamic, interactive movement that responds to player input and creates autonomous behavior for game objects.

You'll discover the fundamental principles behind all game movement: coordinate manipulation, screen clearing, and redrawing. These concepts form the foundation of game animation and will serve you well whether you're building simple 2D games or complex interactive applications. Think of this as learning the core "engine" that powers visual interactivity.

By the end of this lesson, you'll have a fully interactive space game where players can control their hero spaceship and watch enemy ships move across the screen. You'll understand how keyboard events work, how to create smooth animations, and how to organize your code using modern JavaScript patterns. Let's transform your static game into an exciting interactive experience!

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/33)

## Understanding Game Movement

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
// Set the hero's location
hero.x += 5;
// Clear the rectangle that hosts the hero
ctx.clearRect(0, 0, canvas.width, canvas.height);
// Redraw the game background and hero
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "black";
ctx.drawImage(heroImg, hero.x, hero.y);
```

**Here's what this code does:**
- **Updates** the hero's x-coordinate by 5 pixels to move it horizontally
- **Clears** the entire canvas area to remove the previous frame
- **Fills** the canvas with a black background color
- **Redraws** the hero image at its new position

✅ Can you think of a reason why redrawing your hero many frames per second might accrue performance costs? Read about [alternatives to this pattern](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Handle keyboard events

Interactive games respond to player input, and keyboard events are one of the most common ways players control their game characters. Understanding how to capture and respond to keyboard input is essential for creating engaging gameplay experiences.

You handle events by attaching specific events to code. Keyboard events are triggered on the whole window whereas mouse events like a `click` can be connected to clicking a specific element. We will use keyboard events throughout this project.

To handle an event you need to use the window's `addEventListener()` method and provide it with two input parameters. The first parameter is the name of the event, for example `keyup`. The second parameter is the function that should be invoked as a result of the event taking place.

Here's an example:

```javascript
window.addEventListener('keyup', (evt) => {
  // evt.key = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
});
```

**Breaking down what happens here:**
- **Listens** for keyboard events on the entire window
- **Captures** the event object which contains information about which key was pressed
- **Checks** if the pressed key matches a specific key (in this case, the up arrow)
- **Executes** code when the condition is met

For key events there are two properties on the event you can use to see what key was pressed:

- `key` - this is a string representation of the pressed key, for example `'ArrowUp'`
- `keyCode` - this is a number representation, for example `37`, corresponds to `ArrowLeft`

✅ Key event manipulation is useful outside of game development. What other uses can you think of for this technique?

### Special keys: a caveat

There are some *special* keys that affect the window. That means that if you are listening to a `keyup` event and you use these special keys to move your hero it will also perform horizontal scrolling. For that reason you might want to *shut-off* this built-in browser behavior as you build out your game. You need code like this:

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

**Understanding this prevention code:**
- **Checks** for specific key codes that might cause unwanted browser behavior
- **Prevents** the default browser action for arrow keys and spacebar
- **Allows** other keys to function normally
- **Uses** `e.preventDefault()` to stop the browser's built-in behavior

## Game induced movement

Not all movement in games comes from player input. Many game objects need to move on their own – think of enemies patrolling, bullets flying, or background elements scrolling. This type of automatic movement creates the dynamic environment that makes games feel alive.

We can make things move by themselves by using timers such as the `setTimeout()` or `setInterval()` function that update the location of the object on each tick, or time interval. Here's what that can look like:

```javascript
const id = setInterval(() => {
  // Move the enemy on the y axis
  enemy.y += 10;
}, 100);
```

**Here's what this movement code does:**
- **Creates** a timer that runs every 100 milliseconds
- **Updates** the enemy's y-coordinate by 10 pixels each time
- **Stores** the interval ID so we can stop it later if needed
- **Moves** the enemy downward on the screen automatically

## The game loop

The game loop is the heartbeat of your game – it's what makes everything come together and creates the illusion of continuous motion. Think of it as the conductor of an orchestra, coordinating all the different elements to create a smooth, synchronized experience.

The game loop is a concept that is essentially a function that is invoked at regular intervals. It's called the game loop as everything that should be visible to the user is drawn into the loop. The game loop makes use of all the game objects that are part of the game, drawing all of them unless for some reason shouldn't be part of the game any more. For example if an object is an enemy that was hit by a laser and blows up, it's no longer part of the current game loop (you'll learn more on this in subsequent lessons).

Here's what a game loop can typically look like, expressed in code:

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

**Understanding the game loop structure:**
- **Clears** the entire canvas to remove the previous frame
- **Fills** the background with a solid color
- **Draws** all game objects in their current positions
- **Repeats** this process every 200 milliseconds to create smooth animation
- **Manages** the frame rate by controlling the interval timing

## Continuing the Space Game

Now it's time to put theory into practice! You'll take the existing code and extend it with the movement concepts you've just learned. This is where your static space game transforms into an interactive experience.

You will take the existing code and extend it. Either start with the code that you completed during part I or use the code in [Part II- starter](your-work).

**What you'll implement:**
- **Moving the hero**: you will add code to ensure you can move the hero using the arrow keys
- **Move enemies**: you will also need to add code to ensure the enemies move from top to bottom at a given rate

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

You start your project in the `your-work` folder by typing:

```bash
cd your-work
npm start
```

**What this command does:**
- **Navigates** to your project directory
- **Starts** a HTTP Server on address `http://localhost:5000`
- **Serves** your game files so you can test them in a browser

The above will start a HTTP Server on address `http://localhost:5000`. Open up a browser and input that address, right now it should render the hero and all the enemies; nothing is moving - yet!

### Add code

1. **Add dedicated objects** for `hero` and `enemy` and `game object`, they should have `x` and `y` properties. (Remember the portion on [Inheritance or composition](../README.md)).

   *HINT* `game object` should be the one with `x` and `y` and the ability to draw itself to a canvas.

   > **Tip**: Start by adding a new `GameObject` class with its constructor delineated as below, and then draw it to the canvas:

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

    **Understanding this base class:**
    - **Defines** common properties that all game objects share (position, size, image)
    - **Includes** a `dead` flag to track whether the object should be removed
    - **Provides** a `draw()` method that renders the object on the canvas
    - **Sets** default values for all properties that child classes can override

    Now, extend this `GameObject` to create the `Hero` and `Enemy`:
    
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

    **Key concepts in these classes:**
    - **Inherits** from `GameObject` using the `extends` keyword
    - **Calls** the parent constructor with `super(x, y)`
    - **Sets** specific dimensions and properties for each object type
    - **Implements** automatic movement for enemies using `setInterval()`

2. **Add key-event handlers** to handle key navigation (move hero up/down left/right)

   *REMEMBER* it's a cartesian system, top-left is `0,0`. Also remember to add code to stop *default behavior*

   > **Tip**: Create your `onKeyDown` function and attach it to the window:

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
    
   **What this event handler does:**
   - **Listens** for keydown events on the entire window
   - **Logs** the key code to help you debug which keys are being pressed
   - **Prevents** default browser behavior for arrow keys and spacebar
   - **Allows** other keys to function normally
   
   Check your browser console at this point, and watch the keystrokes being logged. 

3. **Implement** the [Pub sub pattern](../README.md), this will keep your code clean as you follow the remaining parts.

   The Publish-Subscribe pattern helps organize your code by separating event detection from event handling. This makes your code more modular and easier to maintain.

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

   **What this event system does:**
   - **Detects** keyboard input and converts it to custom game events
   - **Separates** input detection from game logic
   - **Makes** it easy to change controls later without affecting game code
   - **Allows** multiple systems to respond to the same input

   2. **Create an EventEmitter class** to publish and subscribe to messages:

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

   **Understanding the setup:**
   - **Defines** message constants to avoid typos and make refactoring easier
   - **Declares** variables for images, canvas context, and game state
   - **Creates** a global event emitter for the pub-sub system
   - **Initializes** an array to hold all game objects

   4. **Initialize the game**

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
       
4. **Setup the game loop**

   Refactor the `window.onload` function to initialize the game and set up a game loop on a good interval. You'll also add a laser beam:

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

   **Understanding the game setup:**
   - **Waits** for the page to load completely before starting
   - **Gets** the canvas element and its 2D rendering context
   - **Loads** all image assets asynchronously using `await`
   - **Starts** the game loop running at 100ms intervals (10 FPS)
   - **Clears** and redraws the entire screen each frame

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

    **What the enemy creation does:**
    - **Calculates** positions to center enemies on the screen
    - **Creates** a grid of enemies using nested loops
    - **Assigns** the enemy image to each enemy object
    - **Adds** each enemy to the global game objects array
    
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

    **What the hero creation does:**
    - **Positions** the hero at the bottom center of the screen
    - **Assigns** the hero image to the hero object
    - **Adds** the hero to the game objects array for rendering

    and finally, add a `drawGameObjects()` function to start the drawing:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    **Understanding the drawing function:**
    - **Iterates** through all game objects in the array
    - **Calls** the `draw()` method on each object
    - **Passes** the canvas context so objects can render themselves

    Your enemies should start advancing on your hero spaceship!
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

## GitHub Copilot Agent Challenge 🚀

Use the Agent mode to complete the following challenge:

**Description:** Enhance the space game by implementing boundary detection and smooth movement controls. This challenge will help you practice game object manipulation, event handling, and canvas rendering techniques.

**Prompt:** Create a boundary detection system that prevents the hero spaceship from moving outside the canvas boundaries. Additionally, implement a smooth movement system where holding down arrow keys creates continuous movement instead of single-step movement. Make sure the hero stops immediately when keys are released and add visual feedback when the hero hits a boundary (like a brief color change or glow effect).

## 🚀 Challenge

As you can see, your code can turn into 'spaghetti code' when you start adding functions and variables and classes. How can you better organize your code so that it is more readable? 

**Your challenge:**
Sketch out a system to organize your code, even if it still resides in one file. Consider these approaches:

- **Grouping related functions** together with clear comment headers
- **Separating concerns** - keep game logic separate from rendering
- **Using consistent naming** conventions for variables and functions
- **Creating modules** or namespaces to organize different aspects of your game
- **Adding documentation** that explains the purpose of each major section

**Reflection questions:**
- Which parts of your code are hardest to understand when you come back to them?
- How could you organize your code to make it easier for someone else to contribute?
- What would happen if you wanted to add new features like power-ups or different enemy types?

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/34)

## Review & Self Study

While we're writing our game without using frameworks, there are many JavaScript-based canvas frameworks for game development. Take some time to do some [reading about these](https://github.com/collections/javascript-game-engines) and consider how they might solve some of the organizational challenges you identified.

**Explore these concepts:**
- Game engine architecture and design patterns
- Entity-Component-System (ECS) patterns in game development
- Performance optimization techniques for canvas-based games
- Modern JavaScript features that can improve game code organization

## Assignment

[Comment your code](assignment.md)
