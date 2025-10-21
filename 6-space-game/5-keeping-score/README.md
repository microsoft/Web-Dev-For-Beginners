# Build a Space Game Part 5: Scoring and Lives

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/37)

Ready to make your space game feel like a real game? Let's add scoring points and managing lives - the core mechanics that transformed early arcade games like Space Invaders from simple demonstrations into addictive entertainment. This is where your game becomes truly playable.

## Drawing Text on Screen - Your Game's Voice

To display your score, we need to learn how to render text on the canvas. The `fillText()` method is your primary tool for this - it's the same technique used in classic arcade games to show scores and status information.

You have complete control over the text appearance:

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Dive deeper into [adding text to a canvas](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text) - you might be surprised at how creative you can get with fonts and styling!

## Lives - More Than Just a Number

In game design, a "life" represents the player's margin for error. This concept dates back to pinball machines, where you'd get multiple balls to play with. In early video games like Asteroids, lives gave players permission to take risks and learn from mistakes.

Visual representation matters significantly - displaying ship icons instead of just "Lives: 3" creates immediate visual recognition, similar to how early arcade cabinets used iconography to communicate across language barriers.

## Building Your Game's Reward System

Now we'll implement the core feedback systems that keep players engaged:

- **Scoring system**: Each destroyed enemy ship awards 100 points (round numbers are easier for players to calculate mentally). The score displays in the bottom left corner.
- **Life counter**: Your hero starts with three lives - a standard established by early arcade games to balance challenge with playability. Each collision with an enemy costs one life. We'll display remaining lives in the bottom right using ship icons ![life image](solution/assets/life.png).

## Let's Get Building!

First, set up your workspace. Navigate to the files in your `your-work` sub folder. You should see these files:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

To test your game, start the development server from the `your_work` folder:

```bash
cd your-work
npm start
```

This runs a local server at `http://localhost:5000`. Open this address in your browser to see your game. Test the controls with arrow keys and try shooting enemies to verify everything works.

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

3. **Implement collision detection**. Extend your `updateGameObjects()` function to detect when enemies collide with your hero:

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

1. **Implement game consequences and rewards**. Now we'll add the feedback systems that make player actions meaningful:

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

   2. **Shooting enemies earns points**. Each successful hit awards 100 points, providing immediate positive feedback for accurate shooting.

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

After implementing these features, test your game to see the complete feedback system in action. You should see life icons in the bottom right, your score in the bottom left, and watch as collisions reduce lives while successful shots increase your score.

Your game now has the essential mechanics that made early arcade games so compelling - clear goals, immediate feedback, and meaningful consequences for player actions.

---

## GitHub Copilot Agent Challenge 🚀

Use the Agent mode to complete the following challenge:

**Description:** Enhance the space game's scoring system by implementing a high score feature with persistent storage and bonus scoring mechanics.

**Prompt:** Create a high score system that saves the player's best score to localStorage. Add bonus points for consecutive enemy kills (combo system) and implement different point values for different enemy types. Include a visual indicator when the player achieves a new high score and display the current high score on the game screen.



## 🚀 Challenge

You now have a functional game with scoring and lives. Consider what additional features might enhance the player experience.

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/38)

## Review & Self Study

Want to explore more? Research different approaches to game scoring and life systems. There are fascinating game engines out there like [PlayFab](https://playfab.com) that handle scoring, leaderboards, and player progression. How might integrating something like that take your game to the next level?

## Assignment

[Build a Scoring Game](assignment.md)
