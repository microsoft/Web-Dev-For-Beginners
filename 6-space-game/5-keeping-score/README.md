# Build a Space Game Part 5: Scoring and Lives

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/37)

Ready to make your space game feel like a real game? Let's add the satisfying elements that keep players coming back for more - scoring points and managing lives! This is where your game truly comes alive.

## Drawing Text on Screen - Your Game's Voice

Want to show off that epic score you're racking up? We need to learn how to put text on the screen! The secret weapon here is the `fillText()` method on your canvas object. Think of it as your game's way of talking to the player.

Here's the cool part - you get to control everything about how that text looks:

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Dive deeper into [adding text to a canvas](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text) - you might be surprised at how creative you can get with fonts and styling!

## Lives - More Than Just a Number

Here's something interesting: in games, a "life" is really just a number that counts down. But what makes it feel meaningful? In space games, you typically start with a few lives, and each time an enemy ship crashes into you, you lose one. 

The magic happens when you represent this visually - instead of just showing "Lives: 3", you might display tiny ship icons or hearts. It's amazing how much more engaging this feels for players!

## Building Your Game's Reward System

Time to add those satisfying game elements that'll make players want to keep playing! Here's what we're going to implement:

- **Scoring system**: Every enemy ship you blast out of the sky earns you points - let's say 100 points per ship because round numbers feel good! We'll display this score in the bottom left corner.
- **Life counter**: Your hero starts with three lives (the classic amount!). Each collision with an enemy costs you one life. We'll show this in the bottom right using this neat little graphic ![life image](solution/assets/life.png).

## Let's Get Building!

First things first - let's get your workspace ready. Navigate to the files in your `your-work` sub folder. You should see these familiar files waiting for you:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Ready to see your game in action? Start your project by jumping into the `your_work` folder and firing up the server:

```bash
cd your-work
npm start
```

This creates a local server at `http://localhost:5000`. Pop that address into your browser, and you should see your hero ready for action! Try moving with the arrow keys and shooting down some enemies - satisfying, right?

### Time to Code!

1. **Grab the visual assets you'll need**. Copy the `life.png` asset from the `solution/assets/` folder into your `your-work` folder. Then add the lifeImg to your window.onload function: 

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Don't forget to add the `lifeImg` to your assets list:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Set up your game variables**. Add some code to track your total score (starting at 0) and remaining lives (starting at 3). We'll display these on screen so players always know where they stand.

3. **Make collisions matter**. Extend your `updateGameObjects()` function to detect when enemies crash into your hero:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Add life and point tracking to your Hero**. 
   1. **Initialize the counters**. Under `this.cooldown = 0` in your `Hero` class, set up life and points:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Show these values to the player**. Create functions to draw these values on screen:

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

   1. **Hook everything into your game loop**. Add these functions to your window.onload function right after `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Make the game rules feel real**. Now for the exciting part - implementing the consequences and rewards:

   1. **Collisions cost lives**. Every time your hero crashes into an enemy, you should lose a life.
   
      Add this method to your `Hero` class:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Shooting enemies earns points**. Every successful hit should reward you with 100 points - because destroying space enemies is no small feat!

      Extend your Hero class with this increment method:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Now connect these functions to your collision events:

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

✅ Curious about other games built with JavaScript and Canvas? Do some exploring - you might be amazed at what's possible!

When you're done with all this coding, take a step back and admire what you've built! You should now see those little life ship icons in the bottom right, your points proudly displayed in the bottom left, and watch as your life count drops when enemies hit you and your points climb when you blast them away. 

This is starting to feel like a real game, isn't it? You're almost there!

---

## GitHub Copilot Agent Challenge 🚀

Use the Agent mode to complete the following challenge:

**Description:** Enhance the space game's scoring system by implementing a high score feature with persistent storage and bonus scoring mechanics.

**Prompt:** Create a high score system that saves the player's best score to localStorage. Add bonus points for consecutive enemy kills (combo system) and implement different point values for different enemy types. Include a visual indicator when the player achieves a new high score and display the current high score on the game screen.



## 🚀 Challenge

You're so close to having a complete game! What features are you excited to add next?

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/38)

## Review & Self Study

Want to explore more? Research different approaches to game scoring and life systems. There are fascinating game engines out there like [PlayFab](https://playfab.com) that handle scoring, leaderboards, and player progression. How might integrating something like that take your game to the next level?

## Assignment

[Build a Scoring Game](assignment.md)
