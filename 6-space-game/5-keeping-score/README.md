# Build a Space Game Part 5: Scoring and Lives

## Pre-Lecture Quiz

[Pre-lecture quiz](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/37)

In this lesson, you'll learn how to add scoring to a game and calculate lives.

## Draw text on the screen

To be able to display a game score on the screen, you'll need to know how to place text on the screen. The answer is using the `fillText()` method on the canvas object. You can also control other aspects like what font to use, the color of the text and even its alignment (left, right, center). Below is some code drawing some text on the screen.

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Read more about [how to add text to a canvas](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text), and feel free to make yours look fancier!

## Life, as a game concept

The concept of having a life in a game is only a number. In the context of a space game it's common to assign a set of lives that get deducted one by one when your ship takes damage. It's nice if you can show a graphical representation of this like miniships or hearts instead of a number.

## What to build

Let's add the following to your game:

- **Game score**: For every enemy ship that is destroyed, the hero should be awarded some points, we suggest a 100 points per ship. The game score should be shown in the bottom left.
- **Life**: Your ship has three lives. You lose a life every time an enemy ship collides with you. A life score should be displayed at the bottom right and be made out of the following graphic ![life image](solution/assets/life.png).

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

The above will start a HTTP Server on address `http://localhost:5000`. Open up a browser and input that address, right now it should render the hero and all the enemies, and as you hit your left and right arrows, the hero moves and can shoot down enemies.

### Add code

1. **Copy over the needed assets** from the `solution/assets/` folder into `your-work` folder; you will add a `life.png` asset. Add the lifeImg to the window.onload function: 

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Add the `lifeImg` to the list of assets:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Add variables**. Add code that represents your total score (0) and lives left (3), display these scores on a screen.

3. **Extend `updateGameObjects()` function**. Extend the `updateGameObjects()` function to handle enemy collisions:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Add `life` and `points`**. 
   1. **Initialize variables**. Under `this.cooldown = 0` in the `Hero` class, set life and points:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Draw variables on screen**. Draw these values to screen:

        ```javascript
        function drawLife() {
          // TODO, 35, 27
          const START_POS = canvas.width - 180;
          for(let i=0; i < hero.life; i++ ) {
            ctx.drawImage(
              lifeImg, 
              START_POS + (45 * (i+1) ), 
              canvas.height - 37);
          }
        }
        
        function drawPoints() {
          ctx.font = "30px Arial";
          ctx.fillStyle = "red";
          ctx.textAlign = "left";
          drawText("Points: " + hero.points, 10, canvas.height-20);
        }
        
        function drawText(message, x, y) {
          ctx.fillText(message, x, y);
        }

        ```

   1. **Add methods to Game loop**. Make sure you add these functions to your window.onload function under `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Implement game rules**. Implement the following game rules:

   1. **For every hero and enemy collision**, deduct a life.
   
      Extend the `Hero` class to do this deduction:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **For every laser that hits an enemy**, increase game score with a 100 points.

      Extend the Hero class to do this increment:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Add these functions to your Collision Event Emitters:

        ```javascript
        eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
           first.dead = true;
           second.dead = true;
           hero.incrementPoints();
        })

        eventEmitter.on(Messages.COLLISION_ENEMY_HERO, (_, { enemy }) => {
           enemy.dead = true;
           hero.decrementLife();
        });
        ```

✅ Do a little research to discover other games that are created using JavaScript/Canvas. What are their common traits?

By the end of this work, you should see the small 'life' ships at the bottom right, points at the bottom left, and you should see your life count decrement as you collide with enemies and your points increment when you shoot enemies. Well done! Your game is almost complete.

---

## 🚀 Challenge

Your code is almost complete. Can you envision your next steps?

## Post-Lecture Quiz

[Post-lecture quiz](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/38)

## Review & Self Study

Research some ways that you can increment and decrement game scores and lives. There are some interesting game engines like [PlayFab](https://playfab.com). How could using one of these would enhance your game?

## Assignment

[Build a Scoring Game](assignment.md)
