# Build a Space Game Part 4: Adding A Laser and Detect Collisions

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/35)

Collision detection is the heart of interactive game development, transforming static visuals into dynamic, engaging experiences. In this lesson, you'll implement one of gaming's most fundamental mechanics: the ability to shoot projectiles and detect when objects collide with each other. These concepts form the foundation of countless game interactions, from simple arcade games to complex modern titles.

Building on your previous work with the space game, you'll add laser shooting capabilities and create a comprehensive collision detection system. You'll learn to think about game objects as mathematical rectangles, implement intersection algorithms, and create engaging game rules that respond to player actions. This technical foundation will give you the skills to create interactive experiences in any game or web application.

By the end of this lesson, you'll have a fully functional space combat system where you can shoot lasers at enemies, handle multiple types of collisions, and manage object lifecycles. These skills translate directly to modern web development, where interactive elements and dynamic user interfaces rely on similar collision detection principles.

✅ Do a little research on the very first computer game ever written. What was its functionality?

Let's build something amazing together!

## Collision detection

Collision detection forms the core of interactive gameplay, determining when game objects interact with each other. Understanding this concept will unlock your ability to create engaging game mechanics and responsive user experiences.

We approach collision detection by treating all game objects as rectangles with defined boundaries. This mathematical representation allows us to perform precise calculations to determine when objects overlap or intersect.

### Rectangle representation

Every game object needs a way to describe its boundaries in space. Here's how we create a rectangle representation:

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

**Here's what this code does:**
- **Defines** the top boundary using the object's y coordinate
- **Establishes** the left boundary using the object's x coordinate
- **Calculates** the bottom boundary by adding height to the y position
- **Determines** the right boundary by adding width to the x position

### Intersection algorithm

Once we have rectangle representations, we need a function to test if they overlap:

```javascript
function intersectRect(r1, r2) {
  return !(r2.left > r1.right ||
    r2.right < r1.left ||
    r2.top > r1.bottom ||
    r2.bottom < r1.top);
}
```

**Breaking down what happens here:**
- **Checks** if the second rectangle is completely to the right of the first
- **Tests** if the second rectangle is completely to the left of the first
- **Verifies** if the second rectangle is completely below the first
- **Determines** if the second rectangle is completely above the first
- **Returns** `true` when none of these conditions are met (indicating overlap)

## Managing object lifecycles

Game objects need a way to be removed from the game when they're no longer needed. This lifecycle management ensures optimal performance and proper game behavior.

The most efficient approach uses a flag-based system to mark objects for removal:

```javascript
// Mark object for removal
enemy.dead = true;
```

**Understanding this approach:**
- **Marks** the object as ready for removal without immediately deleting it
- **Allows** the current game loop iteration to complete safely
- **Prevents** errors from objects being accessed after deletion

Then filter out marked objects before the next render cycle:

```javascript
gameObjects = gameObjects.filter(go => !go.dead);
```

**This filtering process:**
- **Creates** a new array containing only living objects
- **Removes** all objects marked with `dead: true`
- **Updates** the game state cleanly between frames
- **Maintains** optimal performance by keeping the object array clean

## Implementing laser mechanics

Laser firing combines user input handling with dynamic object creation, creating an engaging interactive experience. This mechanic forms the foundation of player agency in your game.

Implementing laser functionality requires coordinating several systems:

**Key components to implement:**
- **Create** laser objects that spawn from the hero's position
- **Handle** keyboard input to trigger laser creation
- **Manage** laser movement and lifecycle
- **Implement** visual representation for the laser projectiles

## Implementing firing rate control

Without rate limiting, players could create hundreds of lasers instantly, breaking game balance and performance. A cooldown system ensures controlled, strategic firing mechanics.

Cooldown systems use timing mechanisms to enforce delays between actions:

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

**Understanding the cooldown system:**
- **Initializes** cooldown state as `false` when created
- **Uses** `setTimeout()` to automatically reset the cooldown after the specified time
- **Checks** cooldown status before allowing new laser creation
- **Prevents** rapid-fire abuse while maintaining responsive controls

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

Your starter files are organized in the `your-work` subfolder with all necessary assets and basic structure ready for enhancement.

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

#### 1. Add rectangle collision bounds

Extend your `GameObject` class to provide collision boundary information:

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

Create a utility function to test rectangle overlap:

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

##### Message constants

Define event messages for laser and collision handling:

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

At this point, your space game features fully functional combat mechanics! Test these features:
- **Navigate** using arrow keys for precise movement
- **Fire** lasers using the space bar with proper cooldown timing
- **Destroy** enemies by hitting them with laser projectiles
- **Experience** smooth object lifecycle management

Congratulations on building a complete interactive game system!

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
