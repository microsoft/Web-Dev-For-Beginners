# Build a Space Game Part 6: End and Restart

Every great game needs that satisfying "Game Over" moment and the irresistible "Play Again?" button, right? You've come so far with your space game - we're talking movement, explosions, scoring, the works! Now it's time for the grand finale: making your game actually end properly and giving players that sweet, sweet restart option.

Think about it - you've built something pretty amazing already. Your little ship zips around, lasers fly everywhere, enemies explode in digital glory. But right now, it probably just keeps going forever, which is... well, a bit like a song that never ends (and trust me, that gets old fast!).

Today, we're going to wrap up your space adventure with proper win/lose conditions and a restart system that'll keep players coming back for "just one more game." By the time we're done, you'll have a complete, polished game that feels professional. Ready to cross that finish line?

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/39)

## Understanding Game End Conditions

So, when should your game actually end? It's a bigger question than you might think! Every game needs clear rules about when the fun stops and the victory dance begins (or when you face defeat and shake your fist at the screen).

As the game creator, you get to decide what counts as "winning" or "losing." It's like being the referee of your own sport! For our space game, here are some classic approaches that work really well:

- **`N` Enemy ships have been destroyed**: It's quite common if you divide up a game into different levels that you need to destroy `N` Enemy ships to complete a level
- **Your ship has been destroyed**: There are definitely games where you lose the game if your ship is destroyed. Another common approach is that you have the concept of lives. Every time a your ship is destroyed it deducts a life. Once all lives have been lost then you lose the game.
- **You've collected `N` points**: Another common end condition is for you to collect points. How you get points is up to you but it's quite common to assign points to various activities like destroying an enemy ship or maybe collect items that items *drop* when they are destroyed.
- **Complete a level**: This might involve several conditions such as `X` enemy ships destroyed, `Y` points collected or maybe that a specific item has been collected.

## Implementing Game Restart Functionality

Here's the thing about good games - they're like potato chips. Nobody has just one! When someone beats your game (or spectacularly crashes and burns), the first thing they'll want to do is try again. Maybe they want to beat their high score, or maybe they're convinced they can do better this time.

A clunky restart process is like having to unwrap each potato chip individually - it kills the momentum. We want that seamless "Ooh, let me try that again!" experience. So we're going to build a restart system that wipes the slate clean and gets players right back into the action.

✅ **Reflection**: Think about the games you've played. Under what conditions do they end, and how are you prompted to restart? What makes a restart experience feel smooth versus frustrating?

## What You'll Build

Time for the exciting part - let's add those final touches that'll make your game feel complete and professional! We're talking about the features that separate "cool coding project" from "actual game I want to show my friends."

**Here's what we're adding today:**

1. **Victory condition**: Blast all the enemies and get a proper celebration (you've earned it!)
2. **Defeat condition**: Run out of lives and face the music with a defeat screen
3. **Restart mechanism**: Hit Enter to jump right back in - because one game is never enough
4. **State management**: Clean slate every time - no leftover enemies or weird glitches from the last game

## Getting Started

Alright, let's get your workspace ready! You should have all your space game files from the previous lessons - if you're looking at a folder full of game assets and code, you're in the right place.

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

**Fire up your development server:**

```bash
cd your-work
npm start
```

**This command is your friend - it:**
- Gets a local server running on `http://localhost:5000`
- Makes sure all your files load properly
- Automatically refreshes when you make changes (pretty handy!)

Head over to `http://localhost:5000` in your browser and make sure your game is running. You should be able to fly around, shoot lasers, and dodge enemies. If that's all working, we're ready to add the finishing touches!

> 💡 **Pro Tip**: To avoid warnings in Visual Studio Code, declare `gameLoopId` at the top of your file as `let gameLoopId;` instead of declaring it inside the `window.onload` function. This follows modern JavaScript variable declaration best practices.

## Implementation Steps

### Step 1: Create End Condition Tracking Functions

Let's start with the basics - we need a way to check if the game should end. Think of these as the "referees" of your game, constantly watching to see if someone has won or lost.

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

Now we need to wire up these condition checks to actually do something! Every time something explodes or crashes in your game, we want to pause and ask: "Hey, did we just win or lose?" This way, the game can react instantly to important moments.

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

Time to give your game a voice! When someone wins or loses, you want to let them know loud and clear. We're going to create a message system that can celebrate victories with green text or break the bad news with red text - kind of like a digital scoreboard announcer.

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

👽 💥 🚀 **Look at you go, space commander!** You've just completed a full-fledged game from scratch! We're talking proper win conditions, lose conditions, restart functionality - the whole nine yards. This isn't just a coding exercise anymore; it's a real game that people can actually enjoy. 🚀 💥 👽

**Just look at what you've pulled off:**
- **Built** a game that actually knows when to end (and tells you about it!)
- **Created** that addictive "just one more game" restart experience
- **Designed** clear, helpful messages that guide players through wins and losses
- **Mastered** game state management (trust me, that's harder than it sounds)
- **Put together** all the pieces that make a game feel professional and polished

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
