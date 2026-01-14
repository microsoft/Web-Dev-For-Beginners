<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "c8fc39a014d08247c082878122e2ba73",
  "translation_date": "2026-01-08T14:28:32+00:00",
  "source_file": "6-space-game/1-introduction/assignment.md",
  "language_code": "pcm"
}
-->
# Mock up a Game: Apply Design Patterns

## Assignment Overview

Put your newfound knowledge of design patterns to work by creating a simple game prototype! Dis assignment go help you practice both architectural patterns (inheritance or composition) and di pub/sub communication system wey you learn for di lesson.

## Instructions

Create one simple game representation wey go show di design patterns from dis lesson. Your game suppose dey functional but e no need get complex graphics – focus on di underlying architecture and communication patterns.

### Requirements

**Choose Your Architecture Pattern:**
- **Option A**: Use class-based inheritance (like the `GameObject` → `Movable` → `Hero` example)
- **Option B**: Use composition (like the factory function approach wey get mixed behaviors)

**Implement Communication:**
- **Include** one `EventEmitter` class for pub/sub messaging
- **Set up** at least 2-3 different message types (like `PLAYER_MOVE`, `ENEMY_SPAWN`, `SCORE_UPDATE`)
- **Connect** user input (keyboard/mouse) to game events through di event system

**Game Elements to Include:**
- At least one player-controlled character
- At least one other game object (enemy, collectible, or environmental element)
- Basic interaction between objects (collision, collection, or communication)

### Suggested Game Ideas

**Simple Games to Consider:**
- **Snake Game** – Snake segments dey follow head, food dey spawn randomly
- **Pong Variation** – Paddle dey respond to input, ball dey bounce off walls
- **Collector Game** – Player dey move around dey collect items while dem dey avoid obstacles
- **Tower Defense Basics** – Towers dey detect and shoot at moving enemies

### Code Structure Guidelines

```javascript
// Example wey dem start with
const Messages = {
  // Put your game messages here
};

class EventEmitter {
  // How you go take do your event system
}

// Choose whether na class-based OR composition method
// Class-based example:
class GameObject { /* base properties */ }
class Player extends GameObject { /* player-specific behavior */ }

// OR Composition example:
const gameObject = { /* base properties */ };
const movable = { /* movement behavior */ };
function createPlayer() { /* combine behaviors */ }
```

### Testing Your Implementation

**Verify say your code dey work by:**
- **Testing** say objects dey move or change when events trigger
- **Confirming** say plenty objects fit respond to di same event
- **Checking** say you fit add new behaviors without changing old code
- **Ensuring** keyboard/mouse input dey properly trigger game events

## Submission Guidelines

**Your submission suppose include:**
1. **JavaScript file(s)** wey get your game implementation
2. **HTML file** to run and test your game (fit simple)
3. **Comments** wey explain which pattern you choose and why
4. **Brief documentation** of your message types and wetin dem do

## Rubric

| Criteria | Exemplary (3 points) | Adequate (2 points) | Needs Improvement (1 point) |
|----------|---------------------|---------------------|------------------------------|
| **Architecture Pattern** | Correctly dey implement inheritance OR composition with clear class/object hierarchy | Uses chosen pattern with small wahala or inconsistencies | Try use pattern but implementation get big wahala |
| **Pub/Sub Implementation** | EventEmitter dey work well with many message types and correct event flow | Basic pub/sub system dey work with small event handling | Event system dey but e no dey work steady |
| **Game Functionality** | Three or more interactive elements wey dey communicate through events | Two interactive elements with basic event communication | One element dey respond to events or basic interaction |
| **Code Quality** | Clean, well-commented code with logical arrangement and modern JavaScript | Generally well-organized code with enough comments | Code dey work but e no organized or no clear commenting |

**Bonus Points:**
- **Creative game mechanics** wey show interesting use of di patterns
- **Multiple input methods** (keyboard AND mouse events)
- **Scalable architecture** wey go easy to add new features

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:
Dis dokument na AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator) we translate am. Even though we try make am correct, abeg sabi say automatic translation fit get mistake or no correct finish. Di original dokument wey dey im ogbonge language na di correct one. If na serious mata, e better make person use professional human translation. We no go take responsibility if person no understand well or mistake am because of this translation.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->