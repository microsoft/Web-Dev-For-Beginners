# Build a Space Game Part 1: Introduction

![Space game animation showing gameplay](../images/pewpew.gif)

Ready to blast off into game development? We're about to build an awesome space game together using JavaScript! But here's the cool part – while we're having fun creating something you can actually play, you'll also pick up some seriously valuable programming concepts that'll make you a much stronger developer.

We're going to explore how to organize code like a pro using two different approaches: inheritance and composition. Don't worry if these sound intimidating – I'll show you exactly when and why to use each one. We'll also build a slick communication system called pub/sub (think of it like a really smart messaging app for your code) that lets different parts of your game talk to each other without getting tangled up.

By the time we're done, you'll know how to build apps that can grow and change without breaking – whether you're making games, websites, or whatever your imagination comes up with. Ready to start this adventure?

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/29)

## Inheritance and Composition in Game Development

Here's something every developer figures out eventually: as your projects get bigger and more complex, the way you organize your code becomes super important. What starts as a simple script can quickly turn into a tangled mess if you're not careful!

So let's talk about two really useful approaches for keeping your code clean and organized: inheritance and composition. Each one has its own strengths, and knowing both will help you pick the right tool for the job. We'll learn these concepts by building our space game, where you've got heroes, enemies, power-ups, and all sorts of objects that need to work together smoothly.

✅ One of the most famous programming books ever written has to do with [design patterns](https://en.wikipedia.org/wiki/Design_Patterns).

In any game, you've got `game objects` – basically everything you see on screen that does something. Your hero, the enemies, power-ups, even that explosion when you blow something up – they're all game objects! Each one lives at a specific spot on the screen using `x` and `y` coordinates, just like plotting points on a graph in math class.

Here's the interesting part: even though these objects might look totally different, they usually share some basic behaviors:

- **They exist somewhere** – Every object has x and y coordinates so the game knows where to draw it
- **Many can move around** – Heroes run, enemies chase, bullets fly across the screen
- **They have a lifespan** – Some stick around forever, others (like explosions) appear briefly and vanish
- **They react to stuff** – When things collide, power-ups get collected, health bars update

✅ Think about a game like Pac-Man. Can you identify the four object types listed above in this game?

### Expressing Behavior Through Code

Now that you understand the common behaviors game objects share, let's explore how to implement these behaviors in JavaScript. You can express object behavior through methods attached to either classes or individual objects, and there are several approaches to choose from.

**The Class-Based Approach**

One really neat way to organize all this is with `classes` and `inheritance`. Think of it like a family tree – you start with a parent class that has all the basic stuff every game object needs, then create child classes that inherit those basics but add their own special abilities.

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

**Let's break this down step by step:**
- We're creating a basic template that every game object can use
- The constructor saves where the object is (`x`, `y`) and what kind of thing it is
- This becomes the foundation that all your game objects will build on

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

Composition is like building with LEGO blocks – instead of inheriting everything from a parent, you mix and match different pieces to create exactly what you need. It's super flexible because you can combine any behaviors you want without being locked into a rigid family tree structure.

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

As your game gets more complex, you'll run into a tricky problem: how do you get different parts of your game to talk to each other without creating a tangled mess of dependencies? That's where the publish-subscribe pattern (we just call it pub/sub) comes to the rescue!

Here's a perfect example: when your hero takes damage, lots of things need to happen – the health bar updates, a hurt sound plays, maybe the screen flashes red. But here's the thing: your hero object shouldn't have to know about all these other systems. That would make your code super messy and hard to change later. With pub/sub, your hero just broadcasts "Hey, I took damage!" and everything else that cares about that message can respond automatically.

✅ **Pub/Sub** stands for 'publish-subscribe'

### Understanding the Pub/Sub Architecture

The pub/sub pattern keeps different parts of your application loosely coupled, meaning they can work together without being directly dependent on each other. This separation makes your code more maintainable, testable, and flexible to changes.

**The key players in pub/sub:**
- **Messages** – Simple text labels like `'PLAYER_SCORED'` that describe what happened (plus any extra info)
- **Publishers** – The objects that shout out "Something happened!" to anyone who's listening
- **Subscribers** – The objects that say "I care about that event" and react when it happens
- **Event System** – The middleman that makes sure messages get to the right listeners

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

Alright, let's see this in action! We'll build a simple movement system that shows how clean and flexible pub/sub can be:

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
**Here's why you'll love this approach:**
- Adding new features becomes super easy – just listen for the events you care about
- Multiple things can react to the same event without stepping on each other
- Testing gets way simpler because each piece works independently
- When something breaks, you know exactly where to look

### Why Pub/Sub Scales Beautifully

The really cool thing about pub/sub is that it stays simple even as your game gets crazy complex. Whether you've got dozens of enemies, power-ups flying around, sound effects, UI updates – it all just works. Want to add a new feature? Just plug into the existing event system without breaking anything that's already working.

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

Learn more about [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) here.

## 🚀 Challenge

Think about how the pub-sub pattern can enhance a game. Which parts should emit events, and how should the game react to them? Now's your chance to get creative, thinking of a new game and how its parts might behave.

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/30)

## Review & Self Study

Learn more about Pub/Sub by [reading about it](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Assignment

[Mock up a game](assignment.md)
