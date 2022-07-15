# Build a Space Game Part 4: Adding A Laser and Detect Collisions

## Pre-Lecture Quiz

[Pre-lecture quiz](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/35)

In this lesson you will learn how to shoot lasers with JavaScript! We will add two things to our game:

- **A laser**: this laser is shot from your heroes ship and vertically upwards
- **Collision detection**, as part of implementing the ability to *shoot* we will also add some nice game rules:
   - **Laser hits enemy**: Enemy dies if hit by a laser
   - **Laser hits top screen**: A laser is destroyed if hitting the top part of the screen
   - **Enemy and hero collision**: An enemy and the hero are destroyed if hitting each other
   - **Enemy hits bottom of the screen**: An enemy and a hero are destroyed if the enemy hits the bottom of the screen

In short, you -- *the hero* -- need to hit all enemies with a laser before they manage to move to the bottom of the screen.

✅ Do a little research on the very first computer game ever written. What was its functionality?

Let's be heroic together!

## Collision detection

How do we do collision detection? We need to think of our game objects as rectangles moving about. Why is that you might ask? Well, the image used to draw a game object is a rectangle: it has an `x`, `y`, `width` and `height`.

If two rectangles, i.e a hero and enemy *intersect*, you have a collision. What should happen then is up to the rules of the game. To implement collision detection you therefore need the following:

1. A way to get a rectangle representation of a game object, something like this:

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

2. A comparison function, this function can look like this:

   ```javascript
   function intersectRect(r1, r2) {
     return !(r2.left > r1.right ||
       r2.right < r1.left ||
       r2.top > r1.bottom ||
       r2.bottom < r1.top);
   }
   ```

## How do we destroy things

To destroy things in a game you need to let the game know it should no longer paint this item in the game loop that triggers on a certain interval. A way to do this is to mark a game object as *dead* when something happens, like so:

```javascript
// collision happened
enemy.dead = true
```

Then you an proceed to sort out *dead* objects before repainting the screen, like so:

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## How do we fire a laser

Firing a laser translates to responding to a key-event and creating an object that moves in a certain direction. We therefore need to carry out the following steps:

1. **Create a laser object**: from the top of our hero's ship, that upon creation starts moving upwards towards the screen top.
2. **Attach code to a key event**: we need to choose a key on the keyboard that represents the player shooting the laser.
3. **Create a game object that looks like a laser** when the key is pressed.

## Cooldown on our laser

The laser needs to fire every time you press a key, like *space* for example. To prevent the game producing way too many lasers in a short time we need to fix this. The fix is by implementing a so called *cooldown*, a timer, that ensures that a laser can only be fired so often. You can implement that in the following way:

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

✅ Refer to lesson 1 in the space game series to remind yourself about *cooldowns*.

## What to build

You will take the existing code (which you should have cleaned up and refactored) from the previous lesson, and extend it. Either start with the code from part II or use the code at [Part III- starter](/your-work).

> tip: the laser that you'll work with is already in your assets folder and referenced by your code

- **Add collision detection**, when a laser collides with something the following rules should apply:
   1. **Laser hits enemy**: enemy dies if hit by a laser
   2. **Laser hits top screen**: A laser is destroyed if it hits the top part of our screen
   3. **Enemy and hero collision**: an enemy and the hero is destroyed if hitting each other
   4. **Enemy hits bottom of the screen**: An enemy and a hero is destroyed if the enemy hits the bottom of the screen

## Recommended steps

Locate the files that have been created for you in the `your-work` sub folder. It should contain the following:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

You start your project the `your_work` folder by typing:

```bash
cd your-work
npm start
```

The above will start a HTTP Server on address `http://localhost:5000`. Open up a browser and input that address, right now it should render the hero and all the enemies, nothing is moving - yet :).

### Add code

1. **Setup a  rectangle representation of your game object, to handle collision** The below code allows you to get a rectangle representation of a `GameObject`. Edit your GameObject class to extend it:

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

2. **Add code that checks collision** This will be a new function  that tests whether two rectangles intersect:

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

3. **Add laser firing capability**
   1. **Add key-event message**. The *space* key should create a laser just above the hero ship. Add three constants in the Messages object:

       ```javascript
        KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
        COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
        COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
       ```

   1. **Handle space key**. Edit the `window.addEventListener` keyup function to handle spaces:

      ```javascript
        } else if(evt.keyCode === 32) {
          eventEmitter.emit(Messages.KEY_EVENT_SPACE);
        }
      ```

    1. **Add listeners**. Edit the `initGame()` function to ensure that hero can fire when the space bar is hit:

       ```javascript
       eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if (hero.canFire()) {
          hero.fire();
        }
       ```

       and add a new `eventEmitter.on()` function to ensure behavior when an enemy collides with a laser:

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   1. **Move object**, Ensure the laser moves to the top of the screen gradually. You'll create a new Laser class that extends `GameObject`, as you've done before: 
   
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

   1. **Handle collisions**, Implement collision rules for the laser. Add an `updateGameObjects()` function that tests colliding objects for hits

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

      Make sure to add `updateGameObjects()` into your game loop in `window.onload`.

   4. **Implement cooldown** on the laser, so it can only be fired so often.

      Finally, edit the Hero class so that it can cooldown:

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

At this point, your game has some functionality! You can navigate with your arrow keys, fire a laser with your space bar, and enemies disappear when you hit them. Well done!

---

## 🚀 Challenge

Add an explosion! Take a look at the game assets in [the Space Art repo](../solution/spaceArt/readme.txt) and try to add an explosion when the laser hits an alien

## Post-Lecture Quiz

[Post-lecture quiz](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/36)

## Review & Self Study

Experiment with the intervals in your game thus far. What happens when you change them? Read more about [JavaScript timing events](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Assignment

[Explore collisions](assignment.md)
