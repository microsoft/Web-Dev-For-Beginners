<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a6ce295ff03bb49df7a3e17e6e7100a0",
  "translation_date": "2025-08-29T13:21:09+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "en"
}
-->
# Build a Space Game Part 4: Adding A Laser and Detect Collisions

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/35)

In this lesson, you'll learn how to shoot lasers using JavaScript! We'll add two features to our game:

- **A laser**: This laser will be fired from your hero's ship and move vertically upward.
- **Collision detection**: As part of implementing the ability to *shoot*, we'll also introduce some exciting game rules:
   - **Laser hits enemy**: The enemy is destroyed if hit by a laser.
   - **Laser hits top of the screen**: The laser is removed if it reaches the top of the screen.
   - **Enemy and hero collision**: Both the enemy and the hero are destroyed if they collide.
   - **Enemy reaches the bottom of the screen**: Both the enemy and the hero are destroyed if the enemy reaches the bottom of the screen.

In short, you -- *the hero* -- must destroy all enemies with your laser before they reach the bottom of the screen.

✅ Do a little research on the very first computer game ever created. What was its functionality?

Let's be heroic together!

## Collision detection

How do we detect collisions? We need to think of our game objects as rectangles moving around. Why rectangles, you ask? Because the image used to represent a game object is essentially a rectangle: it has an `x`, `y`, `width`, and `height`.

If two rectangles, such as the hero and an enemy, *intersect*, a collision occurs. What happens next depends on the rules of the game. To implement collision detection, you'll need the following:

1. A way to represent a game object as a rectangle, like this:

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

2. A function to compare rectangles, which might look like this:

   ```javascript
   function intersectRect(r1, r2) {
     return !(r2.left > r1.right ||
       r2.right < r1.left ||
       r2.top > r1.bottom ||
       r2.bottom < r1.top);
   }
   ```

## How do we destroy things

To destroy objects in a game, you need to tell the game not to render them anymore during the game loop that runs at regular intervals. One way to do this is to mark a game object as *dead* when something happens, like this:

```javascript
// collision happened
enemy.dead = true
```

Then, you can filter out *dead* objects before repainting the screen, like this:

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## How do we fire a laser

Firing a laser involves responding to a key event and creating an object that moves in a specific direction. Here's what you'll need to do:

1. **Create a laser object**: The laser will originate from the top of the hero's ship and start moving upward toward the top of the screen.
2. **Attach code to a key event**: Choose a key on the keyboard (e.g., the space bar) to represent firing the laser.
3. **Create a game object that looks like a laser** when the key is pressed.

## Cooldown on our laser

The laser should fire every time you press a key, such as the space bar. To prevent the game from generating too many lasers in a short period, we need to implement a *cooldown*. A cooldown is essentially a timer that ensures the laser can only be fired at specific intervals. You can implement it like this:

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

✅ Refer to lesson 1 in the space game series to refresh your memory about *cooldowns*.

## What to build

You'll extend the existing code (which you should have cleaned up and refactored) from the previous lesson. You can either start with the code from part II or use the code from [Part III - starter](../../../../../../../../../your-work).

> tip: The laser you'll work with is already in your assets folder and referenced in your code.

- **Add collision detection**: When a laser collides with something, the following rules should apply:
   1. **Laser hits enemy**: The enemy is destroyed if hit by a laser.
   2. **Laser hits top of the screen**: The laser is removed if it reaches the top of the screen.
   3. **Enemy and hero collision**: Both the enemy and the hero are destroyed if they collide.
   4. **Enemy reaches the bottom of the screen**: Both the enemy and the hero are destroyed if the enemy reaches the bottom of the screen.

## Recommended steps

Locate the files created for you in the `your-work` subfolder. It should contain the following:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Start your project in the `your_work` folder by typing:

```bash
cd your-work
npm start
```

This will start an HTTP server at `http://localhost:5000`. Open a browser and navigate to that address. At this point, it should display the hero and all the enemies, but nothing is moving yet.

### Add code

1. **Set up a rectangle representation for your game objects to handle collisions**: The following code allows you to represent a `GameObject` as a rectangle. Edit your GameObject class to include this:

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

2. **Add code to check for collisions**: Create a new function to test whether two rectangles intersect:

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

3. **Add laser firing capability**:
   1. **Add a key-event message**: The space bar should create a laser just above the hero's ship. Add three constants to the Messages object:

       ```javascript
        KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
        COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
        COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
       ```

   2. **Handle the space bar key**: Edit the `window.addEventListener` keyup function to handle the space bar:

      ```javascript
        } else if(evt.keyCode === 32) {
          eventEmitter.emit(Messages.KEY_EVENT_SPACE);
        }
      ```

   3. **Add listeners**: Edit the `initGame()` function to ensure the hero can fire when the space bar is pressed:

       ```javascript
       eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if (hero.canFire()) {
          hero.fire();
        }
       ```

       Add a new `eventEmitter.on()` function to define behavior when an enemy collides with a laser:

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   4. **Move the laser object**: Ensure the laser moves gradually toward the top of the screen. Create a new Laser class that extends `GameObject`, as you've done before:

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

   5. **Handle collisions**: Implement collision rules for the laser. Add an `updateGameObjects()` function to test for collisions between objects:

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

      Make sure to include `updateGameObjects()` in your game loop in `window.onload`.

   6. **Implement cooldown** for the laser so it can only be fired at specific intervals.

      Finally, edit the Hero class to include a cooldown mechanism:

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

At this point, your game has some functionality! You can navigate using the arrow keys, fire a laser with the space bar, and enemies disappear when you hit them. Great job!

---

## 🚀 Challenge

Add an explosion! Check out the game assets in [the Space Art repo](../../../../6-space-game/solution/spaceArt/readme.txt) and try to add an explosion effect when the laser hits an alien.

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/36)

## Review & Self Study

Experiment with the intervals in your game so far. What happens when you change them? Read more about [JavaScript timing events](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Assignment

[Explore collisions](assignment.md)

---

**Disclaimer**:  
This document has been translated using the AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). While we strive for accuracy, please note that automated translations may contain errors or inaccuracies. The original document in its native language should be regarded as the authoritative source. For critical information, professional human translation is recommended. We are not responsible for any misunderstandings or misinterpretations resulting from the use of this translation.