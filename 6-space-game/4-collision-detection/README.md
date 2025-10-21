# Build a Space Game Part 4: Adding A Laser and Detect Collisions

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/35)

Ever wonder what makes a game exciting? It's those moments when your spaceship's laser hits an enemy, or when you narrowly avoid a collision! That's collision detection in action, and it's what transforms boring static images into thrilling interactive experiences.

In this lesson, we're going to add some serious firepower to your space game. You'll learn how to shoot lasers (pretty cool, right?) and detect when things crash into each other. Don't worry if this sounds complex - we'll break it down into bite-sized pieces that anyone can understand.

Here's what you'll be able to do by the end: fire lasers at enemies, watch them explode on impact, and handle all sorts of game interactions. Plus, these skills aren't just for games - the same principles power interactive websites and modern web apps. Ready to make some digital fireworks? Let's dive in!

✅ Do a little research on the very first computer game ever written. What was its functionality?

Let's build something amazing together!

## Collision detection

Think of collision detection as your game's referee - it decides when things bump into each other and what happens next. Without it, your laser would pass right through enemies like a ghost! 

Here's the clever part: we treat every game object like a rectangle. Your spaceship? Rectangle. Enemy ships? Rectangles. Lasers? You guessed it - rectangles! This might seem oversimplified, but it works beautifully and keeps the math manageable.

### Rectangle representation

Every game object needs to know where it exists in space - kind of like giving it an address! Here's how we create that invisible boundary box:

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

**Let's break this down:**
- **Top edge**: That's just where your object starts vertically (its y position)
- **Left edge**: Where it starts horizontally (its x position) 
- **Bottom edge**: Add the height to the y position - now you know where it ends!
- **Right edge**: Add the width to the x position - and you've got the complete boundary

### Intersection algorithm

Now for the fun part - figuring out if two rectangles are bumping into each other! The logic here is pretty clever:

```javascript
function intersectRect(r1, r2) {
  return !(r2.left > r1.right ||
    r2.right < r1.left ||
    r2.top > r1.bottom ||
    r2.bottom < r1.top);
}
```

**Here's the clever thinking:**
- Is rectangle 2 completely to the right of rectangle 1?
- Is rectangle 2 completely to the left of rectangle 1?
- Is rectangle 2 completely below rectangle 1?
- Is rectangle 2 completely above rectangle 1?

If none of these are true, then they must be overlapping! It's like asking "Are they completely separated?" - if the answer is no, they're touching.

## Managing object lifecycles

When a laser hits an enemy, both should disappear, right? But we can't just delete them immediately - that might break our game loop! Instead, we use a clever "mark for deletion" system. Think of it like putting a sticky note on something that says "throw this away later."

Here's how we mark something for removal:

```javascript
// Mark object for removal
enemy.dead = true;
```

**Why this approach works:**
- We mark the object as "dead" but don't delete it right away
- This lets the current game frame finish safely
- No crashes from trying to use something that's already gone!

Then filter out marked objects before the next render cycle:

```javascript
gameObjects = gameObjects.filter(go => !go.dead);
```

**What this filtering does:**
- Creates a fresh list with only the "living" objects
- Tosses out anything marked as dead
- Keeps your game running smoothly
- Prevents memory bloat from accumulating destroyed objects

## Implementing laser mechanics

Time for the satisfying part - shooting lasers! Every time you press the spacebar, you'll create a new laser that streaks across the screen. It's like magic, but with code.

To make this work, we need to coordinate a few different pieces:

**Key components to implement:**
- **Create** laser objects that spawn from the hero's position
- **Handle** keyboard input to trigger laser creation
- **Manage** laser movement and lifecycle
- **Implement** visual representation for the laser projectiles

## Implementing firing rate control

Imagine if you could fire a million lasers per second - sounds awesome, but it would crash your game faster than you can say "pew pew!" Plus, where's the challenge in that? 

We need a cooldown system, just like in your favorite video games. Think of it as your laser gun needing a moment to recharge between shots:

```javascript
class Cooldown {
  constructor(time) {
    this.cool = false;
    setTimeout(() => {
      this.cool = true;
    }, time);
  }
}

class Weapon {
  constructor() {
    this.cooldown = null;
  }
  
  fire() {
    if (!this.cooldown || this.cooldown.cool) {
      // Create laser projectile
      this.cooldown = new Cooldown(500);
    } else {
      // Weapon is still cooling down
    }
  }
}
```

**How the cooldown works:**
- When created, the weapon starts "hot" (can't fire yet)
- After the timeout period, it becomes "cool" (ready to fire)
- Before firing, we check: "Is the weapon cool?"
- This prevents spam-clicking while keeping controls responsive

✅ Refer to lesson 1 in the space game series to remind yourself about cooldowns.

## Building the collision system

You'll extend your existing space game code to create a fully functional combat system. This implementation will bring together all the concepts we've discussed into working game mechanics.

Starting from your previous lesson's code, you'll add comprehensive collision detection with specific game rules that create engaging gameplay challenges.

> 💡 **Pro Tip**: The laser sprite is already included in your assets folder and referenced in your code, ready for implementation.

### Collision rules to implement

**Game mechanics to add:**
1. **Laser hits enemy**: Enemy object is destroyed when struck by a laser projectile
2. **Laser hits screen boundary**: Laser is removed when reaching the top edge of the screen
3. **Enemy and hero collision**: Both objects are destroyed when they intersect
4. **Enemy reaches bottom**: Game over condition when enemies reach the screen bottom

## Setting up your development environment

Good news - we've already set up most of the groundwork for you! All your game assets and basic structure are waiting in the `your-work` subfolder, ready for you to add the cool collision features.

### Project structure

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

**Understanding the file structure:**
- **Contains** all sprite images needed for the game objects
- **Includes** the main HTML document and JavaScript application file
- **Provides** package configuration for local development server

### Starting the development server

Navigate to your project folder and start the local server:

```bash
cd your-work
npm start
```

**This command sequence:**
- **Changes** directory to your working project folder
- **Starts** a local HTTP server on `http://localhost:5000`
- **Serves** your game files for testing and development
- **Enables** live development with automatic reloading

Open your browser and navigate to `http://localhost:5000` to see your current game state with the hero and enemies rendered on screen.

### Step-by-step implementation

Alright, let's build this thing! We'll take it one step at a time, and before you know it, you'll have lasers flying everywhere.

#### 1. Add rectangle collision bounds

First, let's teach our game objects how to describe their boundaries. Add this method to your `GameObject` class:

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

**This method accomplishes:**
- **Creates** a rectangle object with precise boundary coordinates
- **Calculates** bottom and right edges using position plus dimensions
- **Returns** an object ready for collision detection algorithms
- **Provides** a standardized interface for all game objects

#### 2. Implement intersection detection

Now let's create our collision detective - a function that can tell when two rectangles are overlapping:

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

**This algorithm works by:**
- **Tests** four separation conditions between rectangles
- **Returns** `false` if any separation condition is true
- **Indicates** collision when no separation exists
- **Uses** negation logic for efficient intersection testing

#### 3. Implement laser firing system

Here's where things get exciting! Let's set up the laser firing system.

##### Message constants

First, let's define some message types so different parts of our game can talk to each other:

```javascript
KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
```

**These constants provide:**
- **Standardizes** event names throughout the application
- **Enables** consistent communication between game systems
- **Prevents** typos in event handler registration

##### Keyboard input handling

Add space key detection to your key event listener:

```javascript
} else if(evt.keyCode === 32) {
  eventEmitter.emit(Messages.KEY_EVENT_SPACE);
}
```

**This input handler:**
- **Detects** space key presses using keyCode 32
- **Emits** a standardized event message
- **Enables** decoupled firing logic

##### Event listener setup

Register firing behavior in your `initGame()` function:

```javascript
eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
 if (hero.canFire()) {
   hero.fire();
 }
});
```

**This event listener:**
- **Responds** to space key events
- **Checks** firing cooldown status
- **Triggers** laser creation when allowed

Add collision handling for laser-enemy interactions:

```javascript
eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
  first.dead = true;
  second.dead = true;
});
```

**This collision handler:**
- **Receives** collision event data with both objects
- **Marks** both objects for removal
- **Ensures** proper cleanup after collision

#### 4. Create the Laser class

Implement a laser projectile that moves upward and manages its own lifecycle:

```javascript
class Laser extends GameObject {
  constructor(x, y) {
    super(x, y);
    this.width = 9;
    this.height = 33;
    this.type = 'Laser';
    this.img = laserImg;
    
    let id = setInterval(() => {
      if (this.y > 0) {
        this.y -= 15;
      } else {
        this.dead = true;
        clearInterval(id);
      }
    }, 100);
  }
}
```

**This class implementation:**
- **Extends** GameObject to inherit basic functionality
- **Sets** appropriate dimensions for the laser sprite
- **Creates** automatic upward movement using `setInterval()`
- **Handles** self-destruction when reaching screen top
- **Manages** its own animation timing and cleanup

#### 5. Implement collision detection system

Create a comprehensive collision detection function:

```javascript
function updateGameObjects() {
  const enemies = gameObjects.filter(go => go.type === 'Enemy');
  const lasers = gameObjects.filter(go => go.type === "Laser");
  
  // Test laser-enemy collisions
  lasers.forEach((laser) => {
    enemies.forEach((enemy) => {
      if (intersectRect(laser.rectFromGameObject(), enemy.rectFromGameObject())) {
        eventEmitter.emit(Messages.COLLISION_ENEMY_LASER, {
          first: laser,
          second: enemy,
        });
      }
    });
  });

  // Remove destroyed objects
  gameObjects = gameObjects.filter(go => !go.dead);
}
```

**This collision system:**
- **Filters** game objects by type for efficient testing
- **Tests** every laser against every enemy for intersections
- **Emits** collision events when intersections are detected
- **Cleans** up destroyed objects after collision processing

> ⚠️ **Important**: Add `updateGameObjects()` to your main game loop in `window.onload` to enable collision detection.

#### 6. Add cooldown system to Hero class

Enhance the Hero class with firing mechanics and rate limiting:

```javascript
class Hero extends GameObject {
  constructor(x, y) {
    super(x, y);
    this.width = 99;
    this.height = 75;
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

**Understanding the enhanced Hero class:**
- **Initializes** cooldown timer at zero (ready to fire)
- **Creates** laser objects positioned above the hero ship
- **Sets** cooldown period to prevent rapid firing
- **Decrements** cooldown timer using interval-based updates
- **Provides** firing status check through `canFire()` method

### Testing your implementation

Drumroll please... your space game is now a full-blown combat simulator! 🚀 Go ahead and test these awesome features:
- **Fly around** with your arrow keys (smooth as butter!)
- **Blast away** with the spacebar - but don't spam it, the cooldown is working!
- **Watch enemies explode** when your lasers connect (so satisfying!)
- **Marvel** at how smoothly everything appears and disappears

You've just built a complete game from scratch - that's seriously impressive! Take a moment to appreciate what you've accomplished.

## GitHub Copilot Agent Challenge 🚀

Use the Agent mode to complete the following challenge:

**Description:** Enhance the collision detection system by implementing power-ups that spawn randomly and provide temporary abilities when collected by the hero ship.

**Prompt:** Create a PowerUp class that extends GameObject and implement collision detection between the hero and power-ups. Add at least two types of power-ups: one that increases fire rate (reduces cooldown) and another that creates a temporary shield. Include spawn logic that creates power-ups at random intervals and positions.

---



## 🚀 Challenge

Add an explosion! Take a look at the game assets in [the Space Art repo](../solution/spaceArt/readme.txt) and try to add an explosion when the laser hits an alien

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/36)

## Review & Self Study

Experiment with the intervals in your game thus far. What happens when you change them? Read more about [JavaScript timing events](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Assignment

[Explore collisions](assignment.md)
