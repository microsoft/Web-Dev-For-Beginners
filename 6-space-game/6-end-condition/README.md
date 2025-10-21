# Build a Space Game Part 6: End and Restart

Every great game needs clear end conditions and a smooth restart mechanism. You've built an impressive space game with movement, combat, and scoring - now it's time to add the final pieces that make it feel complete.

Your game currently runs indefinitely, like the Voyager probes that NASA launched in 1977 - still traveling through space decades later. While that's fine for space exploration, games need defined endpoints to create satisfying experiences.

Today, we'll implement proper win/lose conditions and a restart system. By the end of this lesson, you'll have a polished game that players can complete and replay, just like the classic arcade games that defined the medium.

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/39)

## Understanding Game End Conditions

When should your game end? This fundamental question has shaped game design since the early arcade era. Pac-Man ends when you're caught by ghosts or clear all dots, while Space Invaders ends when aliens reach the bottom or you destroy them all.

As the game creator, you define the victory and defeat conditions. For our space game, here are proven approaches that create engaging gameplay:

- **`N` Enemy ships have been destroyed**: It's quite common if you divide up a game into different levels that you need to destroy `N` Enemy ships to complete a level
- **Your ship has been destroyed**: There are definitely games where you lose the game if your ship is destroyed. Another common approach is that you have the concept of lives. Every time a your ship is destroyed it deducts a life. Once all lives have been lost then you lose the game.
- **You've collected `N` points**: Another common end condition is for you to collect points. How you get points is up to you but it's quite common to assign points to various activities like destroying an enemy ship or maybe collect items that items *drop* when they are destroyed.
- **Complete a level**: This might involve several conditions such as `X` enemy ships destroyed, `Y` points collected or maybe that a specific item has been collected.

## Implementing Game Restart Functionality

Good games encourage replayability through smooth restart mechanisms. When players complete a game (or meet defeat), they often want to try again immediately - whether to beat their score or improve their performance.

Tetris exemplifies this perfectly: when your blocks reach the top, you can instantly start a new game without navigating complex menus. We'll build a similar restart system that cleanly resets the game state and gets players back into action quickly.

✅ **Reflection**: Think about the games you've played. Under what conditions do they end, and how are you prompted to restart? What makes a restart experience feel smooth versus frustrating?

## What You'll Build

You'll implement the final features that transform your project into a complete game experience. These elements distinguish polished games from basic prototypes.

**Here's what we're adding today:**

1. **Victory condition**: Blast all the enemies and get a proper celebration (you've earned it!)
2. **Defeat condition**: Run out of lives and face the music with a defeat screen
3. **Restart mechanism**: Hit Enter to jump right back in - because one game is never enough
4. **State management**: Clean slate every time - no leftover enemies or weird glitches from the last game

## Getting Started

Let's prepare your development environment. You should have all your space game files from the previous lessons ready.

**Your project should look something like this:**

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

**Start your development server:**

```bash
cd your-work
npm start
```

**This command:**
- Runs a local server on `http://localhost:5000`
- Serves your files properly
- Automatically refreshes when you make changes

Open `http://localhost:5000` in your browser and verify your game is running. You should be able to move, shoot, and interact with enemies. Once confirmed, we can proceed with the implementation.

> 💡 **Pro Tip**: To avoid warnings in Visual Studio Code, declare `gameLoopId` at the top of your file as `let gameLoopId;` instead of declaring it inside the `window.onload` function. This follows modern JavaScript variable declaration best practices.

## Implementation Steps

### Step 1: Create End Condition Tracking Functions

We need functions to monitor when the game should end. Like sensors on the International Space Station that constantly monitor critical systems, these functions will continuously check the game state.

```javascript
function isHeroDead() {
  return hero.life <= 0;
}

function isEnemiesDead() {
  const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
  return enemies.length === 0;
}
```

**Here's what's happening under the hood:**
- **Checks** if our hero is out of lives (ouch!)
- **Counts** how many enemies are still alive and kicking
- **Returns** `true` when the battlefield is clear of enemies
- **Uses** simple true/false logic to keep things straightforward
- **Filters** through all game objects to find the survivors

### Step 2: Update Event Handlers for End Conditions

Now we'll connect these condition checks to the game's event system. Every time a collision occurs, the game will evaluate whether it triggers an end condition. This creates immediate feedback for critical game events.

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

**What's going on here:**
- **Laser hits enemy**: Both disappear, you get points, and we check if you've won
- **Enemy hits you**: You lose a life, and we check if you're still breathing
- **Smart ordering**: We check for defeat first (nobody wants to win and lose at the same time!)
- **Instant reactions**: As soon as something important happens, the game knows about it

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

Your game needs to communicate results clearly to players. We'll create a message system that displays victory and defeat states using color-coded text, similar to the terminal interfaces of early computer systems where green indicated success and red signaled errors.

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

**What this function does:**
- **Freezes** everything in place - no more moving ships or lasers
- **Takes** a tiny pause (200ms) to let the last frame finish drawing
- **Wipes** the screen clean and paints it black for dramatic effect
- **Shows** different messages for winners and losers
- **Color codes** the news - green for good, red for... well, not so good
- **Tells** players exactly how to jump back in

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

👽 💥 🚀 You've successfully built a complete game from the ground up. Like the programmers who created the first video games in the 1970s, you've transformed lines of code into an interactive experience with proper game mechanics and user feedback. 🚀 💥 👽

**You've accomplished:**
- **Implemented** complete win and lose conditions with user feedback
- **Created** a seamless restart system for continuous gameplay
- **Designed** clear visual communication for game states
- **Managed** complex game state transitions and cleanup
- **Assembled** all components into a cohesive, playable game

## GitHub Copilot Agent Challenge 🚀

Use the Agent mode to complete the following challenge:

**Description:** Enhance the space game by implementing a level progression system with increasing difficulty and bonus features.

**Prompt:** Create a multi-level space game system where each level has more enemy ships with increased speed and health. Add a scoring multiplier that increases with each level, and implement power-ups (like rapid fire or shield) that randomly appear when enemies are destroyed. Include a level completion bonus and display the current level on screen alongside the existing score and lives.

Learn more about [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) here.

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
