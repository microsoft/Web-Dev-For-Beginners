# Build a Space Game Part 6: End and Restart

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/39)

There are different ways to express and *end condition* in a game. It's up to you as the creator of the game to say why the game has ended. Here are some reasons, if we assume we are talking about the space game you have been building so far:

- **`N` Enemy ships have been destroyed**: It's quite common if you divide up a game into different levels that you need to destroy `N` Enemy ships to complete a level
- **Your ship has been destroyed**: There are definitely games where you lose the game if your ship is destroyed. Another common approach is that you have the concept of lives. Every time a your ship is destroyed it deducts a life. Once all lives have been lost then you lose the game.
- **You've collected `N` points**: Another common end condition is for you to collect points. How you get points is up to you but it's quite common to assign points to various activities like destroying an enemy ship or maybe collect items that items *drop* when they are destroyed.
- **Complete a level**: This might involve several conditions such as `X` enemy ships destroyed, `Y` points collected or maybe that a specific item has been collected.

## Restarting

If people enjoy your game they are likely to want to replay it. Once the game ends for whatever reason you should offer an alternative to restart.

✅ Think a bit about under what conditions you find a game ends, and then how you are prompted to restart

## What to build

You will be adding these rules to your game:

1. **Winning the game**. Once all enemy ships have been destroyed, you win the game. Additionally display some kind of victory message.
1. **Restart**. Once all your lives are lost or the game is won, you should offer a way to restart the game. Remember! You will need to reinitialize the game and the previous game state should be cleared.

## Recommended steps

Locate the files that have been created for you in the `your-work` sub folder. It should contain the following:

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

You start your project the `your_work` folder by typing:

```bash
cd your-work
npm start
```

The above will start a HTTP Server on address `http://localhost:5000`. Open up a browser and input that address. Your game should be in a playable state.

> tip: to avoid warnings in Visual Studio Code, edit the `window.onload` function to call `gameLoopId` as is (without `let`), and declare the gameLoopId at the top of the file, independently: `let gameLoopId;`

### Add code

1. **Track end condition**. Add code that keeps track of the number of enemies, or if the hero ship has been destroyed by adding these two functions:

    ```javascript
    function isHeroDead() {
      return hero.life <= 0;
    }

    function isEnemiesDead() {
      const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
      return enemies.length === 0;
    }
    ```

1. **Add logic to message handlers**. Edit the `eventEmitter` to handle these conditions:

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

1. **Add new message types**. Add these Messages to the constants object:

    ```javascript
    GAME_END_LOSS: "GAME_END_LOSS",
    GAME_END_WIN: "GAME_END_WIN",
    ```

2. **Add restart code** code that restarts the game at the press of a selected button.

   1. **Listen to key press `Enter`**. Edit your window's eventListener to listen for this press:

    ```javascript
     else if(evt.key === "Enter") {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
      }
    ```

   1. **Add restart message**. Add this Message to your Messages constant:

        ```javascript
        KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
        ```

1. **Implement game rules**.  Implement the following game rules:

   1. **Player win condition**. When all enemy ships are destroyed, display a victory message.

      1. First, create a `displayMessage()` function:

        ```javascript
        function displayMessage(message, color = "red") {
          ctx.font = "30px Arial";
          ctx.fillStyle = color;
          ctx.textAlign = "center";
          ctx.fillText(message, canvas.width / 2, canvas.height / 2);
        }
        ```

      1. Create an `endGame()` function:

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

   1. **Restart logic**. When all lives are lost or the player won the game, display that the game can be restarted. Additionally restart the game when the *restart* key is hit (you can decide what key should be mapped to restart).

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

     1. Add a call to the `eventEmitter` to reset the game in `initGame()`:

        ```javascript
        eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
          resetGame();
        });
        ```

     1. Add a `clear()` function to the EventEmitter:

        ```javascript
        clear() {
          this.listeners = {};
        }
        ```

👽 💥 🚀 Congratulations, Captain! Your game is complete! Well done! 🚀 💥 👽

---

## 🚀 Challenge

Add a sound! Can you add a sound to enhance your game play, maybe when there's a laser hit, or the hero dies or wins? Have a look at this [sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) to learn how to play sound using JavaScript

## Post-Lecture Quiz

[Post-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/40)

## Review & Self Study

Your assignment is to create a fresh sample game, so explore some of the interesting games out there to see what type of game you might build.

## Assignment

[Build a Sample Game](assignment.md)
