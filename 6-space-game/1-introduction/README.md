# Build a Space Game Part 1: Introduction

![Space game animation showing gameplay](../images/pewpew.gif)

Welcome to an exciting journey where you'll build your very own space game using JavaScript! In this lesson, you'll discover the fundamental design patterns that power modern game development. These patterns aren't just for games – they're essential architectural concepts that will make you a better programmer across all types of applications.

You'll explore two powerful approaches to organizing code: inheritance and composition, and learn when to use each one. We'll also dive into the pub/sub (publish-subscribe) pattern, a communication system that keeps different parts of your application loosely connected yet perfectly coordinated. Think of it as a sophisticated messaging system that allows game objects to communicate without directly knowing about each other.

By the end of this lesson, you'll understand how to structure larger applications, create flexible game architectures, and implement communication patterns that scale beautifully. These concepts will serve you well whether you're building games, web applications, or any complex software project. Let's begin building the foundation for your space game adventure!

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/29)

## Inheritance and Composition in Game Development

As your programming skills advance, you'll need to make important decisions about how to organize and structure your code. When applications grow beyond simple scripts into complex interactive experiences like games, architectural patterns become crucial for maintainability and scalability.

In this section, you'll learn about two fundamental approaches to building larger JavaScript applications: inheritance and composition. Each approach offers unique advantages, and understanding both will help you choose the right pattern for different situations. We'll explore these concepts through the lens of game development, where objects interact in complex ways and clear organization is essential for success.

✅ One of the most famous programming books ever written has to do with [design patterns](https://en.wikipedia.org/wiki/Design_Patterns).

In a game, you have `game objects` – entities that exist on screen and interact with players and each other. These objects live in a coordinate system with `x` and `y` positions, much like points on a map. As you develop games, you'll notice that most game objects share common behaviors and properties.

**Here's what most game objects have in common:**
- **Location-based positioning** – **Uses** `x` and `y` coordinates to define where the object appears on screen
- **Movement capabilities** – **Enables** objects like heroes, enemies, or NPCs (non-player characters) to change position over time
- **Lifecycle management** – **Controls** how long objects exist before being removed from the game
- **Temporary effects** – **Handles** short-lived elements like explosions, power-ups, or visual effects that appear briefly

✅ Think about a game like Pac-Man. Can you identify the four object types listed above in this game?

### Expressing Behavior Through Code

Now that you understand the common behaviors game objects share, let's explore how to implement these behaviors in JavaScript. You can express object behavior through methods attached to either classes or individual objects, and there are several approaches to choose from.

**The Class-Based Approach**

One powerful way to organize behavior is through `classes` combined with `inheritance`. This approach allows you to define shared behaviors in parent classes and extend them with specialized functionality in child classes.

✅ Inheritance is an important concept to understand. Learn more on [MDN's article about inheritance](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Here's how you can implement game objects using classes and inheritance:

```javascript
// Step 1: Create the base GameObject class
class GameObject {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }
}
```

**Breaking down what happens here:**
- **Defines** a base class that all game objects will inherit from
- **Stores** position coordinates (`x`, `y`) and object type in the constructor
- **Establishes** the foundation for all objects in your game

```javascript
// Step 2: Add movement capability through inheritance
class Movable extends GameObject {
  constructor(x, y, type) {
    super(x, y, type); // Call parent constructor
  }

  // Add the ability to move to a new position
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}
```

**In the above, we've:**
- **Extended** the GameObject class to add movement functionality
- **Called** the parent constructor using `super()` to initialize inherited properties
- **Added** a `moveTo()` method that updates the object's position

```javascript
// Step 3: Create specific game object types
class Hero extends Movable {
  constructor(x, y) {
    super(x, y, 'Hero'); // Set type automatically
  }
}

class Tree extends GameObject {
  constructor(x, y) {
    super(x, y, 'Tree'); // Trees don't need movement
  }
}

// Step 4: Use your game objects
const hero = new Hero(0, 0);
hero.moveTo(5, 5); // Hero can move!

const tree = new Tree(10, 15);
// tree.moveTo() would cause an error - trees can't move
```

**Understanding these concepts:**
- **Creates** specialized object types that inherit appropriate behaviors
- **Demonstrates** how inheritance allows selective feature inclusion
- **Shows** that heroes can move while trees remain stationary
- **Illustrates** how the class hierarchy prevents inappropriate actions

✅ Take a few minutes to re-envision a Pac-Man hero (Inky, Pinky or Blinky, for example) and how it would be written in JavaScript. 

**The Composition Approach**

Composition offers an alternative to inheritance by combining smaller, focused objects into larger ones. Instead of creating class hierarchies, you build objects by mixing and matching behaviors as needed.

```javascript
// Step 1: Create base behavior objects
const gameObject = {
  x: 0,
  y: 0,
  type: ''
};

const movable = {
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
};
```

**Here's what this code does:**
- **Defines** a base `gameObject` with position and type properties
- **Creates** a separate `movable` behavior object with movement functionality
- **Separates** concerns by keeping position data and movement logic independent

```javascript
// Step 2: Compose objects by combining behaviors
const movableObject = { ...gameObject, ...movable };

// Step 3: Create factory functions for different object types
function createHero(x, y) {
  return {
    ...movableObject,
    x,
    y,
    type: 'Hero'
  };
}

function createStatic(x, y, type) {
  return {
    ...gameObject,
    x,
    y,
    type
  };
}
```

**In the above, we've:**
- **Combined** base object properties with movement behavior using spread syntax
- **Created** factory functions that return customized objects
- **Enabled** flexible object creation without rigid class hierarchies
- **Allowed** objects to have exactly the behaviors they need

```javascript
// Step 4: Create and use your composed objects
const hero = createHero(10, 10);
hero.moveTo(5, 5); // Works perfectly!

const tree = createStatic(0, 0, 'Tree');
// tree.moveTo() is undefined - no movement behavior was composed
```

**Key points to remember:**
- **Composes** objects by mixing behaviors rather than inheriting them
- **Provides** more flexibility than rigid inheritance hierarchies
- **Allows** objects to have exactly the features they need
- **Uses** modern JavaScript spread syntax for clean object combination 
```

**Which Pattern Should You Choose?**

> 💡 **Pro Tip**: Both patterns have their place in modern JavaScript development. Classes work well for clearly defined hierarchies, while composition shines when you need maximum flexibility.
> 
**Here's when to use each approach:**
- **Choose** inheritance when you have clear "is-a" relationships (a Hero *is-a* Movable object)
- **Select** composition when you need "has-a" relationships (a Hero *has* movement abilities)
- **Consider** your team's preferences and project requirements
- **Remember** that you can mix both approaches in the same application

## Communication Patterns: The Pub/Sub System

As your game grows more complex, different parts need to communicate without becoming tightly coupled. The publish-subscribe (pub/sub) pattern solves this challenge by creating a messaging system that keeps components independent while enabling sophisticated interactions.

This pattern is essential for game development because it allows objects to react to events without knowing exactly where those events come from. Imagine a game where the hero's health changes – with pub/sub, the health bar, sound effects, and visual indicators can all respond automatically without the hero object needing to know about any of them.

✅ **Pub/Sub** stands for 'publish-subscribe'

### Understanding the Pub/Sub Architecture

The pub/sub pattern keeps different parts of your application loosely coupled, meaning they can work together without being directly dependent on each other. This separation makes your code more maintainable, testable, and flexible to changes.

**Key concepts that make pub/sub work:**
- **Message** – **Carries** information as a string identifier (like `'PLAYER_SCORED'`) with optional data
- **Publisher** – **Broadcasts** messages when events occur, without knowing who will receive them
- **Subscriber** – **Listens** for specific messages and responds accordingly
- **Event System** – **Manages** the connection between publishers and subscribers

### Building an Event System

Let's create a simple but powerful event system that demonstrates these concepts:

```javascript
// Step 1: Create the EventEmitter class
class EventEmitter {
  constructor() {
    this.listeners = {}; // Store all event listeners
  }
  
  // Register a listener for a specific message type
  on(message, listener) {
    if (!this.listeners[message]) {
      this.listeners[message] = [];
    }
    this.listeners[message].push(listener);
  }
  
  // Send a message to all registered listeners
  emit(message, payload = null) {
    if (this.listeners[message]) {
      this.listeners[message].forEach(listener => {
        listener(message, payload);
      });
    }
  }
}
```

**Breaking down what happens here:**
- **Creates** a central event management system using a simple class
- **Stores** listeners in an object organized by message type
- **Registers** new listeners using the `on()` method
- **Broadcasts** messages to all interested listeners using `emit()`
- **Supports** optional data payloads for passing relevant information

### Putting It All Together: A Practical Example

Let's see how the pub/sub pattern works in practice by creating a simple movement system:

```javascript
// Step 1: Define your message types
const Messages = {
  HERO_MOVE_LEFT: 'HERO_MOVE_LEFT',
  HERO_MOVE_RIGHT: 'HERO_MOVE_RIGHT',
  ENEMY_SPOTTED: 'ENEMY_SPOTTED'
};

// Step 2: Create your event system and game objects
const eventEmitter = new EventEmitter();
const hero = createHero(0, 0);
```

**Here's what this code does:**
- **Defines** a constants object to prevent typos in message names
- **Creates** an event emitter instance to handle all communication
- **Initializes** a hero object at the starting position

```javascript
// Step 3: Set up event listeners (subscribers)
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.moveTo(hero.x - 5, hero.y);
  console.log(`Hero moved to position: ${hero.x}, ${hero.y}`);
});

eventEmitter.on(Messages.HERO_MOVE_RIGHT, () => {
  hero.moveTo(hero.x + 5, hero.y);
  console.log(`Hero moved to position: ${hero.x}, ${hero.y}`);
});
```

**In the above, we've:**
- **Registered** event listeners that respond to movement messages
- **Updated** the hero's position based on the movement direction
- **Added** console logging to track the hero's position changes
- **Separated** the movement logic from the input handling

```javascript
// Step 4: Connect keyboard input to events (publishers)
window.addEventListener('keydown', (event) => {
  switch(event.key) {
    case 'ArrowLeft':
      eventEmitter.emit(Messages.HERO_MOVE_LEFT);
      break;
    case 'ArrowRight':
      eventEmitter.emit(Messages.HERO_MOVE_RIGHT);
      break;
  }
});
```

**Understanding these concepts:**
- **Connects** keyboard input to game events without tight coupling
- **Enables** the input system to communicate with game objects indirectly
- **Allows** multiple systems to respond to the same keyboard events
- **Makes** it easy to change key bindings or add new input methods

> 💡 **Pro Tip**: The beauty of this pattern is flexibility! You can easily add sound effects, screen shake, or particle effects by simply adding more event listeners – no need to modify the existing keyboard or movement code.
> 
**Benefits you'll discover:**
- **Enables** easy addition of new features without modifying existing code
- **Allows** multiple systems to respond to the same events
- **Simplifies** testing by isolating different parts of your application
- **Makes** debugging easier by centralizing event flow

### Why Pub/Sub Scales Beautifully

As your game grows more complex with multiple enemies, power-ups, sound effects, and UI elements, the pub/sub pattern maintains its simplicity. You can add new features without touching existing code – just create new publishers and subscribers as needed.

> ⚠️ **Common Mistake**: Don't create too many specific message types early on. Start with broad categories and refine them as your game's needs become clearer.
> 
**Best practices to follow:**
- **Groups** related messages into logical categories
- **Uses** descriptive names that clearly indicate what happened
- **Keeps** message payloads simple and focused
- **Documents** your message types for team collaboration

---

## GitHub Copilot Agent Challenge 🚀

Use the Agent mode to complete the following challenge:

**Description:** Create a simple game object system using both inheritance and the pub/sub pattern. You'll implement a basic game where different objects can communicate through events without directly knowing about each other.

**Prompt:** Create a JavaScript game system with the following requirements: 1) Create a base GameObject class with x, y coordinates and a type property. 2) Create a Hero class that extends GameObject and can move. 3) Create an Enemy class that extends GameObject and can chase the hero. 4) Implement an EventEmitter class for the pub/sub pattern. 5) Set up event listeners so when the hero moves, nearby enemies receive a 'HERO_MOVED' event and update their position to move toward the hero. Include console.log statements to show the communication between objects.

## 🚀 Challenge

Think about how the pub-sub pattern can enhance a game. Which parts should emit events, and how should the game react to them? Now's your chance to get creative, thinking of a new game and how its parts might behave.

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/30)

## Review & Self Study

Learn more about Pub/Sub by [reading about it](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Assignment

[Mock up a game](assignment.md)
