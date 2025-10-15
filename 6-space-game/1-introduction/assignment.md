# Mock up a Game: Apply Design Patterns

## Assignment Overview

Put your newfound knowledge of design patterns to work by creating a simple game prototype! This assignment will help you practice both architectural patterns (inheritance or composition) and the pub/sub communication system you learned about in the lesson.

## Instructions

Create a simple game representation that demonstrates the design patterns from this lesson. Your game should be functional but doesn't need complex graphics \u2013 focus on the underlying architecture and communication patterns.

### Requirements

**Choose Your Architecture Pattern:**
- **Option A**: Use class-based inheritance (like the `GameObject` → `Movable` → `Hero` example)
- **Option B**: Use composition (like the factory function approach with mixed behaviors)

**Implement Communication:**
- **Include** an `EventEmitter` class for pub/sub messaging
- **Set up** at least 2-3 different message types (like `PLAYER_MOVE`, `ENEMY_SPAWN`, `SCORE_UPDATE`)
- **Connect** user input (keyboard/mouse) to game events through the event system

**Game Elements to Include:**
- At least one player-controlled character
- At least one other game object (enemy, collectible, or environmental element)
- Basic interaction between objects (collision, collection, or communication)

### Suggested Game Ideas

**Simple Games to Consider:**
- **Snake Game** \u2013 Snake segments follow the head, food spawns randomly
- **Pong Variation** \u2013 Paddle responds to input, ball bounces off walls
- **Collector Game** \u2013 Player moves around collecting items while avoiding obstacles
- **Tower Defense Basics** \u2013 Towers detect and shoot at moving enemies

### Code Structure Guidelines

```javascript
// Example starting structure
const Messages = {
  // Define your game messages here
};

class EventEmitter {
  // Your event system implementation
}

// Choose either class-based OR composition approach
// Class-based example:
class GameObject { /* base properties */ }
class Player extends GameObject { /* player-specific behavior */ }

// OR Composition example:
const gameObject = { /* base properties */ };
const movable = { /* movement behavior */ };
function createPlayer() { /* combine behaviors */ }
```

### Testing Your Implementation

**Verify your code works by:**
- **Testing** that objects move or change when events are triggered
- **Confirming** that multiple objects can respond to the same event
- **Checking** that you can add new behaviors without modifying existing code
- **Ensuring** keyboard/mouse input properly triggers game events

## Submission Guidelines

**Your submission should include:**
1. **JavaScript file(s)** with your game implementation
2. **HTML file** to run and test your game (can be simple)
3. **Comments** explaining which pattern you chose and why
4. **Brief documentation** of your message types and what they do

## Rubric

| Criteria | Exemplary (3 points) | Adequate (2 points) | Needs Improvement (1 point) |
|----------|---------------------|---------------------|------------------------------|
| **Architecture Pattern** | Correctly implements either inheritance OR composition with clear class/object hierarchy | Uses chosen pattern with minor issues or inconsistencies | Attempts to use pattern but implementation has significant problems |
| **Pub/Sub Implementation** | EventEmitter works correctly with multiple message types and proper event flow | Basic pub/sub system works with some event handling | Event system present but doesn't work reliably |
| **Game Functionality** | Three or more interactive elements that communicate through events | Two interactive elements with basic event communication | One element responds to events or basic interaction |
| **Code Quality** | Clean, well-commented code with logical organization and modern JavaScript | Generally well-organized code with adequate comments | Code works but lacks organization or clear commenting |

**Bonus Points:**
- **Creative game mechanics** that showcase interesting uses of the patterns
- **Multiple input methods** (keyboard AND mouse events)
- **Scalable architecture** that would be easy to extend with new features