# Build a Space Game Part 1: Introduction

![video](../images/pewpew.gif)

## Pre-Lecture Quiz

[Pre-lecture quiz](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/29)

### Inheritance and Composition in game development

In earlier lessons, there was not much need to worry about the design architecture of the apps you built, as the projects were very small in scope. However, when your applications grow in size and scope, architectural decisions become a larger concern. There are two major approaches to creating larger applications in JavaScript: *composition* or *inheritance*. There are pros and cons to both but let's explain them from within the context of a game.

✅ One of the most famous programming books ever written has to do with [design patterns](https://en.wikipedia.org/wiki/Design_Patterns).

In a game you have `game objects` which are objects that exist on a screen. This means they have a location on a cartesian coordinate system, characterized by having an `x` and `y` coordinate. As you develop a game you will notice that all your game objects have a standard property, common for every game you create, namely elements that are:

- **location-based** Most, if not all, game elements are location based. This means that they have a location, an `x` and `y`.
- **movable** These are objects that can move to a new location. This is typically a hero, a monster or an NPC (a non player character), but not for example, a static object like a tree.
- **self-destructing** These objects only exist for a set period of time before they set themselves up for deletion. Usually this is represented by a `dead` or `destroyed` boolean that signals to the game engine that this object should no longer be rendered.
- **cool-down** 'Cool-down' is a typical property among short-lived objects. A typical example is a piece of text or graphical effect like an explosion that should only be seen for a few milliseconds.

✅ Think about a game like Pac-Man. Can you identify the four object types listed above in this game?

### Expressing behavior

All we described above are behavior that game objects can have. So how do we encode those? We can express this behavior as methods associated to either classes or objects.

**Classes**

The idea is to use `classes` in conjunction with `inheritance` to accomplish adding a certain behavior to a class.

✅ Inheritance is an important concept to understand. Learn more on [MDN's article about inheritance](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Expressed via code, a game object can typically look like this:

```javascript

//set up the class GameObject
class GameObject {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }
}

//this class will extend the GameObject's inherent class properties
class Movable extends GameObject {
  constructor(x,y, type) {
    super(x,y, type)
  }

//this movable object can be moved on the screen
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}

//this is a specific class that extends the Movable class, so it can take advantage of all the properties that it inherits
class Hero extends Movable {
  constructor(x,y) {
    super(x,y, 'Hero')
  }
}

//this class, on the other hand, only inherits the GameObject properties
class Tree extends GameObject {
  constructor(x,y) {
    super(x,y, 'Tree')
  }
}

//a hero can move...
const hero = new Hero();
hero.moveTo(5,5);

//but a tree cannot
const tree = new Tree();
```

✅ Take a few minutes to re-envision a Pac-Man hero (Inky, Pinky or Blinky, for example) and how it would be written in JavaScript. 

**Composition**

A different way of handling object inheritance is by using *Composition*. Then, objects express their behavior like this:

```javascript
//create a constant gameObject
const gameObject = {
  x: 0,
  y: 0,
  type: ''
};

//...and a constant movable
const movable = {
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}
//then the constant movableObject is composed of the gameObject and movable constants
const movableObject = {...gameObject, ...movable};

//then create a function to create a new Hero who inherits the movableObject properties
function createHero(x, y) {
  return {
    ...movableObject,
    x,
    y,
    type: 'Hero'
  }
}
//...and a static object that inherits only the gameObject properties
function createStatic(x, y, type) {
  return {
    ...gameObject
    x,
    y,
    type
  }
}
//create the hero and move it
const hero = createHero(10,10);
hero.moveTo(5,5);
//and create a static tree which only stands around
const tree = createStatic(0,0, 'Tree'); 
```

**Which pattern should I use?**

It's up to you which pattern you choose. JavaScript supports both these paradigms.

--

Another pattern common in game development addresses the problem of handling the game's user experience and performance.

## Pub/sub pattern

✅ Pub/Sub stands for 'publish-subscribe'

This pattern addresses the idea that the disparate parts of your application shouldn't know about one another. Why is that? It makes it a lot easier to see what's going on in general if various parts are separated. It also makes it easier to suddenly change behavior if you need to. How do we accomplish this? We do this by establishing some concepts:

- **message**: A message is usually a text string accompanied by an optional payload (a piece of data that clarifies what the message is about). A typical message in a game can be `KEY_PRESSED_ENTER`.
- **publisher**: This element *publishes* a message and sends it out to all subscribers.
- **subscriber**: This element *listens* to specific messages and carries out some task as the result of receiving this message, such as firing a laser.

The implementation is quite small in size but it's a very powerful pattern. Here's how it can be implemented:

```javascript
//set up an EventEmitter class that contains listeners
class EventEmitter {
  constructor() {
    this.listeners = {};
  }
//when a message is received, let the listener to handle its payload
  on(message, listener) {
    if (!this.listeners[message]) {
      this.listeners[message] = [];
    }
    this.listeners[message].push(listener);
  }
//when a message is sent, send it to a listener with some payload
  emit(message, payload = null) {
    if (this.listeners[message]) {
      this.listeners[message].forEach(l => l(message, payload))
    }
  }
}

```

To use the above code we can create a very small implementation:

```javascript
//set up a message structure
const Messages = {
  HERO_MOVE_LEFT: 'HERO_MOVE_LEFT'
};
//invoke the eventEmitter you set up above
const eventEmitter = new EventEmitter();
//set up a hero
const hero = createHero(0,0);
//let the eventEmitter know to watch for messages pertaining to the hero moving left, and act on it
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});

//set up the window to listen for the keyup event, specifically if the left arrow is hit, emit a message to move the hero left
window.addEventListener('keyup', (evt) => {
  if (evt.key === 'ArrowLeft') {
    eventEmitter.emit(Messages.HERO_MOVE_LEFT)
  }
});
```

Above we connect a keyboard event, `ArrowLeft` and send the `HERO_MOVE_LEFT` message. We listen to that message and move the `hero` as a result. The strength with this pattern is that the event listener and the hero don't know about each other. You can remap the `ArrowLeft` to the `A` key. Additionally it would be possible to do something completely different on `ArrowLeft` by making a few edits to the eventEmitter's `on` function:

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

As things gets more complicated when your game grows, this pattern stays the same in complexity and your code stays clean. It's really recommended to adopt this pattern.

---

## 🚀 Challenge

Think about how the pub-sub pattern can enhance a game. Which parts should emit events, and how should the game react to them? Now's your chance to get creative, thinking of a new game and how its parts might behave.

## Post-Lecture Quiz

[Post-lecture quiz](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/30)

## Review & Self Study

Learn more about Pub/Sub by [reading about it](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber?WT.mc_id=academic-13441-cxa).

## Assignment

[Mock up a game](assignment.md)
