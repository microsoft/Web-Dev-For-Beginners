<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "05be6c37791668e3719c4fba94566367",
  "translation_date": "2025-08-29T13:21:57+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "en"
}
-->
# Build a Space Game Part 6: End and Restart

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/39)

There are various ways to define an *end condition* in a game. As the creator, it's up to you to decide why the game ends. Here are some possible reasons, assuming we're talking about the space game you've been building so far:

- **`N` Enemy ships have been destroyed**: It's common in games divided into levels to require the destruction of `N` enemy ships to complete a level.
- **Your ship has been destroyed**: In some games, you lose if your ship is destroyed. Another common approach is to introduce the concept of lives. Each time your ship is destroyed, you lose a life. Once all lives are gone, the game ends.
- **You've collected `N` points**: Another typical end condition is reaching a certain number of points. Points can be earned in various ways, such as destroying enemy ships or collecting items dropped when ships are destroyed.
- **Complete a level**: This might involve multiple conditions, such as destroying `X` enemy ships, collecting `Y` points, or obtaining a specific item.

## Restarting

If players enjoy your game, they'll likely want to replay it. When the game ends for any reason, you should provide an option to restart.

✅ Take a moment to think about the conditions under which a game ends and how you're prompted to restart.

## What to build

You will add the following rules to your game:

1. **Winning the game**: When all enemy ships are destroyed, the player wins. Display a victory message to indicate this.
2. **Restart**: When all lives are lost or the game is won, provide an option to restart. Remember to reinitialize the game and clear the previous game state.

## Recommended steps

Locate the files in the `your-work` subfolder. It should contain the following:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
  -| life.png
-| index.html
-| app.js
-| package.json
```

Start your project in the `your_work` folder by typing:

```bash
cd your-work
npm start
```

This will start an HTTP server at `http://localhost:5000`. Open a browser and navigate to that address. Your game should be in a playable state.

> tip: To avoid warnings in Visual Studio Code, edit the `window.onload` function to call `gameLoopId` as is (without `let`), and declare `gameLoopId` at the top of the file independently: `let gameLoopId;`

### Add code

1. **Track end condition**: Add code to track the number of enemies or whether the hero ship has been destroyed by adding these two functions:

    ```javascript
    function isHeroDead() {
      return hero.life <= 0;
    }

    function isEnemiesDead() {
      const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
      return enemies.length === 0;
    }
    ```

2. **Add logic to message handlers**: Update the `eventEmitter` to handle these conditions:

    ```javascript
    eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
        first.dead = true;
        second.dead = true;
        hero.incrementPoints();

        if (isEnemiesDead()) {
          eventEmitter.emit(Messages.GAME_END_WIN);
        }
    });

    eventEmitter.on(Messages.COLLISION_ENEMY_HERO, (_, { enemy }) => {
        enemy.dead = true;
        hero.decrementLife();
        if (isHeroDead())  {
          eventEmitter.emit(Messages.GAME_END_LOSS);
          return; // loss before victory
        }
        if (isEnemiesDead()) {
          eventEmitter.emit(Messages.GAME_END_WIN);
        }
    });
    
    eventEmitter.on(Messages.GAME_END_WIN, () => {
        endGame(true);
    });
      
    eventEmitter.on(Messages.GAME_END_LOSS, () => {
      endGame(false);
    });
    ```

3. **Add new message types**: Add these messages to the constants object:

    ```javascript
    GAME_END_LOSS: "GAME_END_LOSS",
    GAME_END_WIN: "GAME_END_WIN",
    ```

4. **Add restart code**: Implement code to restart the game when a specific button is pressed.

   1. **Listen for the `Enter` key press**: Update your window's eventListener to detect this key press:

        ```javascript
     else if(evt.key === "Enter") {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
      }
    ```

   2. **Add a restart message**: Add this message to your Messages constant:

        ```javascript
        KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
        ```

5. **Implement game rules**: Add the following game rules:

   1. **Player win condition**: When all enemy ships are destroyed, display a victory message.

      1. First, create a `displayMessage()` function:

        ```javascript
        function displayMessage(message, color = "red") {
          ctx.font = "30px Arial";
          ctx.fillStyle = color;
          ctx.textAlign = "center";
          ctx.fillText(message, canvas.width / 2, canvas.height / 2);
        }
        ```

      2. Then, create an `endGame()` function:

        ```javascript
        function endGame(win) {
          clearInterval(gameLoopId);
        
          // set a delay so we are sure any paints have finished
          setTimeout(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            if (win) {
              displayMessage(
                "Victory!!! Pew Pew... - Press [Enter] to start a new game Captain Pew Pew",
                "green"
              );
            } else {
              displayMessage(
                "You died !!! Press [Enter] to start a new game Captain Pew Pew"
              );
            }
          }, 200)  
        }
        ```

   2. **Restart logic**: When all lives are lost or the player wins, display a message indicating the game can be restarted. Restart the game when the restart key is pressed (you can choose which key to use).

      1. Create the `resetGame()` function:

        ```javascript
        function resetGame() {
          if (gameLoopId) {
            clearInterval(gameLoopId);
            eventEmitter.clear();
            initGame();
            gameLoopId = setInterval(() => {
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              ctx.fillStyle = "black";
              ctx.fillRect(0, 0, canvas.width, canvas.height);
              drawPoints();
              drawLife();
              updateGameObjects();
              drawGameObjects(ctx);
            }, 100);
          }
        }
        ```

      2. Add a call to the `eventEmitter` to reset the game in `initGame()`:

        ```javascript
        eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
          resetGame();
        });
        ```

      3. Add a `clear()` function to the EventEmitter:

        ```javascript
        clear() {
          this.listeners = {};
        }
        ```

👽 💥 🚀 Congratulations, Captain! Your game is complete! Well done! 🚀 💥 👽

---

## 🚀 Challenge

Add sound! Can you enhance your gameplay by adding sound effects, such as for laser hits, the hero's death, or a victory? Check out this [sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) to learn how to play sound using JavaScript.

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/40)

## Review & Self Study

Your assignment is to create a new sample game. Explore some interesting games to get inspiration for the type of game you might want to build.

## Assignment

[Build a Sample Game](assignment.md)

---

**Disclaimer**:  
This document has been translated using the AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). While we strive for accuracy, please note that automated translations may contain errors or inaccuracies. The original document in its native language should be regarded as the authoritative source. For critical information, professional human translation is recommended. We are not responsible for any misunderstandings or misinterpretations resulting from the use of this translation.