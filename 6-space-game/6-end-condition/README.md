# Build a Space Game Part 6: End and Restart

Every great game needs a satisfying conclusion and the ability to play again. In this final lesson of our space game series, you'll learn how to implement end conditions that determine when your game finishes and how to give players the option to restart for another adventure. These concepts are fundamental to creating engaging, replayable gaming experiences.

You've built an impressive space game with movement, collision detection, and scoring systems. Now you'll add the finishing touches that transform your project from a technical demo into a complete, polished game. Understanding end conditions and restart mechanics will also prepare you for building more complex games in the future.

By the end of this lesson, you'll have a fully functional space game with win/lose conditions, restart capabilities, and a smooth user experience. Let's bring your space game to its epic conclusion and make it infinitely replayable!

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/39)

## Understanding Game End Conditions

Game end conditions define when your game concludes and what triggers that conclusion. These conditions create goals for players and provide clear feedback about their performance. Let's explore the most common end condition patterns you can implement in your space game.

There are different ways to express an *end condition* in a game. It's up to you as the creator of the game to say why the game has ended. Here are some reasons, if we assume we are talking about the space game you have been building so far:

- **`N` Enemy ships have been destroyed**: It's quite common if you divide up a game into different levels that you need to destroy `N` Enemy ships to complete a level
- **Your ship has been destroyed**: There are definitely games where you lose the game if your ship is destroyed. Another common approach is that you have the concept of lives. Every time a your ship is destroyed it deducts a life. Once all lives have been lost then you lose the game.
- **You've collected `N` points**: Another common end condition is for you to collect points. How you get points is up to you but it's quite common to assign points to various activities like destroying an enemy ship or maybe collect items that items *drop* when they are destroyed.
- **Complete a level**: This might involve several conditions such as `X` enemy ships destroyed, `Y` points collected or maybe that a specific item has been collected.

## Implementing Game Restart Functionality

Restart functionality is essential for creating an engaging gaming experience. When players enjoy your game, they'll want to play again immediately without having to reload the page or navigate away. A smooth restart mechanism keeps players engaged and provides opportunities to improve their performance.

Think about your favorite games - the best ones make it effortless to jump into another round. We'll implement a restart system that clears the previous game state and initializes everything fresh for a new adventure.

✅ **Reflection**: Think about the games you've played. Under what conditions do they end, and how are you prompted to restart? What makes a restart experience feel smooth versus frustrating?

## What You'll Build

In this lesson, you'll implement the final features that complete your space game experience. These additions will transform your game from a technical demonstration into a polished, replayable experience.

**Game completion features you'll add:**

1. **Victory condition**: Once all enemy ships are destroyed, the game ends with a celebration message
2. **Defeat condition**: When the player's lives reach zero, the game ends with a defeat message  
3. **Restart mechanism**: Players can press Enter to start a fresh game after winning or losing
4. **State management**: The game properly clears previous state and reinitializes all systems

## Getting Started

Before implementing the end conditions, let's set up your development environment and review the project structure. You'll be working with the files from your previous space game lessons.

**Your project structure should contain:**

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

**To start your development server:**

```bash
cd your-work
npm start
```

**Here's what this command does:**
- **Starts** a local HTTP server on `http://localhost:5000`
- **Serves** your game files with proper MIME types
- **Enables** live development with automatic reloading

Open your browser and navigate to `http://localhost:5000`. Your game should be in a playable state from the previous lessons.

> 💡 **Pro Tip**: To avoid warnings in Visual Studio Code, declare `gameLoopId` at the top of your file as `let gameLoopId;` instead of declaring it inside the `window.onload` function. This follows modern JavaScript variable declaration best practices.

## Implementation Steps

### Step 1: Create End Condition Tracking Functions

First, you'll create utility functions that check the current state of your game. These functions will help determine when the game should end based on different victory or defeat conditions.

```javascript
function isHeroDead() {
  return hero.life <= 0;
}

function isEnemiesDead() {
  const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
  return enemies.length === 0;
}
```

**Breaking down what happens here:**
- **Checks** if the hero's life has reached zero or below
- **Filters** the game objects to find only living enemy ships
- **Returns** `true` when all enemies have been destroyed
- **Uses** the logical comparison operators to create clear boolean results
- **Leverages** array filtering to efficiently count remaining enemies

### Step 2: Update Event Handlers for End Conditions

Next, you'll modify your existing event handlers to check for end conditions after each collision. This ensures your game responds immediately when victory or defeat conditions are met.

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

**Here's what this code accomplishes:**
- **Handles** laser-enemy collisions by marking both objects as dead
- **Increments** the player's score when enemies are destroyed
- **Checks** for victory condition after each enemy destruction
- **Manages** hero-enemy collisions by reducing player lives
- **Prioritizes** defeat over victory to prevent conflicting end states
- **Triggers** appropriate end game sequences based on conditions met

### Step 3: Add New Message Constants

You'll need to add new message types to your `Messages` constant object. These constants help maintain consistency and prevent typos in your event system.

```javascript
GAME_END_LOSS: "GAME_END_LOSS",
GAME_END_WIN: "GAME_END_WIN",
```

**In the above, we've:**
- **Added** constants for game end events to maintain consistency
- **Used** descriptive names that clearly indicate the event purpose
- **Followed** the existing naming convention for message types

### Step 4: Implement Restart Controls

Now you'll add keyboard controls that allow players to restart the game. The Enter key is a natural choice since it's commonly associated with confirming actions and starting new games.

**Add Enter key detection to your existing keydown event listener:**

```javascript
else if(evt.key === "Enter") {
   eventEmitter.emit(Messages.KEY_EVENT_ENTER);
}
```

**Add the new message constant:**

```javascript
KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
```

**What you need to know:**
- **Extends** your existing keyboard event handling system
- **Uses** the Enter key as the restart trigger for intuitive user experience
- **Emits** a custom event that other parts of your game can listen for
- **Maintains** the same pattern as your other keyboard controls

### Step 5: Create the Message Display System

Your game needs a way to communicate victory, defeat, and restart instructions to players. You'll create a flexible message display function that can show different types of messages with appropriate styling.

**Create the `displayMessage()` function:**

```javascript
function displayMessage(message, color = "red") {
  ctx.font = "30px Arial";
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.fillText(message, canvas.width / 2, canvas.height / 2);
}
```

**Step by step, here's what's happening:**
- **Sets** the font size and family for clear, readable text
- **Applies** a color parameter with "red" as the default for warnings
- **Centers** the text horizontally and vertically on the canvas
- **Uses** modern JavaScript default parameters for flexible color options
- **Leverages** the canvas 2D context for direct text rendering

**Create the `endGame()` function:**

```javascript
function endGame(win) {
  clearInterval(gameLoopId);

  // Set a delay to ensure any pending renders complete
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

**Understanding this function:**
- **Stops** the game loop immediately to prevent further updates
- **Waits** 200 milliseconds to ensure all pending canvas operations complete
- **Clears** the entire canvas and fills it with a black background
- **Displays** conditional messages based on victory or defeat
- **Uses** green text for victory and red text (default) for defeat
- **Provides** clear instructions for restarting the game

### Step 6: Implement Game Reset Functionality

The reset system needs to completely clean up the current game state and initialize a fresh game session. This ensures players get a clean start without any leftover data from the previous game.

**Create the `resetGame()` function:**

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

**Let's understand each part:**
- **Checks** if a game loop is currently running before resetting
- **Clears** the existing game loop to stop all current game activity
- **Removes** all event listeners to prevent memory leaks
- **Reinitializes** the game state with fresh objects and variables
- **Starts** a new game loop with all the essential game functions
- **Maintains** the same 100ms interval for consistent game performance

**Add the Enter key event handler to your `initGame()` function:**

```javascript
eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
  resetGame();
});
```

**Add the `clear()` method to your EventEmitter class:**

```javascript
clear() {
  this.listeners = {};
}
```

**Key points to remember:**
- **Connects** the Enter key press to the reset game functionality
- **Registers** this event listener during game initialization
- **Provides** a clean way to remove all event listeners when resetting
- **Prevents** memory leaks by clearing event handlers between games
- **Resets** the listeners object to an empty state for fresh initialization

## Congratulations! 🎉

👽 💥 🚀 **Fantastic work, Captain!** Your space game is now complete with proper end conditions and restart functionality! You've successfully built a fully functional game that players can enjoy again and again. 🚀 💥 👽

**What you've accomplished:**
- **Implemented** victory and defeat conditions that respond to game events
- **Created** a smooth restart system that clears previous game state
- **Built** an intuitive user interface for game completion messages
- **Designed** a replayable gaming experience with proper state management
- **Applied** modern JavaScript patterns for event handling and game flow

## GitHub Copilot Agent Challenge 🚀

Use the Agent mode to complete the following challenge:

**Description:** Enhance the space game by implementing a level progression system with increasing difficulty and bonus features.

**Prompt:** Create a multi-level space game system where each level has more enemy ships with increased speed and health. Add a scoring multiplier that increases with each level, and implement power-ups (like rapid fire or shield) that randomly appear when enemies are destroyed. Include a level completion bonus and display the current level on screen alongside the existing score and lives.

## 🚀 Optional Enhancement Challenge

**Add Audio to Your Game**: Enhance your gameplay experience by implementing sound effects! Consider adding audio for:

- **Laser shots** when the player fires
- **Enemy destruction** when ships are hit
- **Hero damage** when the player takes hits
- **Victory music** when the game is won
- **Defeat sound** when the game is lost

**Audio implementation example:**

```javascript
// Create audio objects
const laserSound = new Audio('assets/laser.wav');
const explosionSound = new Audio('assets/explosion.wav');

// Play sounds during game events
function playLaserSound() {
  laserSound.currentTime = 0; // Reset to beginning
  laserSound.play();
}
```

**What you need to know:**
- **Creates** Audio objects for different sound effects
- **Resets** the `currentTime` to allow rapid-fire sound effects
- **Handles** browser autoplay policies by triggering sounds from user interactions
- **Manages** audio volume and timing for better game experience

> 💡 **Learning Resource**: Explore this [audio sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) to learn more about implementing audio in JavaScript games.

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/40)

## Review & Self Study

Your assignment is to create a fresh sample game, so explore some of the interesting games out there to see what type of game you might build.

## Assignment

[Build a Sample Game](assignment.md)
