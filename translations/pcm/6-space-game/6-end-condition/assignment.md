# Build a Sample Game

## Assignment Overview

Now wey you don sabi how game go end and how restart dey work for your space game, na time to take these ideas do another new game. You go design and build your own game wey go show different ways wey game fit end and how restart go work.

Dis assignment go make you think well well about how to design game and also practice the technical skills wey you don learn. You go try different ways wey person fit win or lose, make player fit progress, and make the restart experience sweet.

## Project Requirements

### Core Game Features

Your game gats get these important things:

**End Condition Variety**: Make sure say game fit end for at least two different ways:
- **Point-based victory**: Player reach target score or collect special items
- **Life-based defeat**: Player lose all e lives or health points
- **Objective completion**: All enemies don die, or specific items don collect, or goals don achieve
- **Time-based**: Game end after certain time or timer reach zero

**Restart Functionality**: 
- **Clear game state**: Remove all old game objects and reset variables
- **Reinitialize systems**: Start fresh with new player stats, enemies, and objectives
- **User-friendly controls**: Make instructions clear for how to restart the game

**Player Feedback**:
- **Victory messages**: Celebrate player achievement with better feedback
- **Defeat messages**: Give encouraging messages wey go make player wan play again
- **Progress indicators**: Show current score, lives, or objective status

### Game Ideas and Inspiration

Choose one game idea from these or create your own:

#### 1. Console Adventure Game
Make text-based adventure wey get fight mechanics:

```
Hero> Strikes with broadsword - orc takes 3p damage
Orc> Hits with club - hero takes 2p damage  
Hero> Kicks - orc takes 1p damage
Game> Orc is defeated - Hero collects 2 coins
Game> ****No more monsters, you have conquered the evil fortress****
```

**Key features to implement:**
- **Turn-based combat** with different attack options
- **Health points** for both player and enemies
- **Inventory system** for collecting coins or items
- **Multiple enemy types** with different difficulty levels
- **Victory condition** when all enemies done kill

#### 2. Collection Game
- **Objective**: Collect specific items and avoid obstacles
- **End conditions**: Reach the collection target or lose all your lives
- **Progression**: Items go dey harder to reach as game dey go

#### 3. Puzzle Game
- **Objective**: Solve puzzles wey go dey harder every level
- **End conditions**: Finish all levels or run out of moves/time
- **Restart**: Reset go first level with everything cleared

#### 4. Defense Game
- **Objective**: Protect your base from waves of enemies
- **End conditions**: Survive all waves (win) or base get destroy (lose)
- **Progression**: Enemy waves go harder and more

## Implementation Guidelines

### Getting Started

1. **Plan your game design**:
   - Sketch the basic gameplay loop
   - Define your end conditions clearly
   - Know which data gats reset when you restart

2. **Set up your project structure**:
   ```
   my-game/
   ├── index.html
   ├── style.css
   ├── game.js
   └── README.md
   ```

3. **Create your core game loop**:
   - Initialize game state
   - Handle user input
   - Update game logic
   - Check end conditions
   - Render current state

### Technical Requirements

**Use Modern JavaScript**: 
- Use `const` and `let` for variable declarations
- Use arrow functions where e go fit
- Use ES6+ features like template literals and destructuring

**Event-Driven Architecture**:
- Create event handlers for user actions
- Change game state through events
- Use event listeners for restart functionality

**Clean Code Practices**:
- Write functions with one responsibility
- Use clear variable and function names
- Add comments wey explain game logic and rules
- Organize code in proper sections

## Submission Requirements

### Deliverables

1. **Complete game files**: All HTML, CSS, and JavaScript files wey you need to run your game
2. **README.md**: Documentation wey explain:
   - How to play your game
   - The end conditions you put for the game
   - Instructions for restarting
   - Any special features or game mechanics
3. **Code comments**: Clear explanations of your game logic and algorithms

### Testing Checklist

Before you submit, make sure say your game:

- [ ] **Runs without errors** inside the browser console
- [ ] **Implements multiple end conditions** as the assignment talk
- [ ] **Restarts properly** with clean reset state
- [ ] **Provides clear feedback** to players about game status
- [ ] **Uses modern JavaScript** syntax and good practices
- [ ] **Includes complete documentation** for README.md

## Assessment Rubric

| Criteria | Exemplary (4) | Proficient (3) | Developing (2) | Beginning (1) |
|----------|---------------|----------------|----------------|--------------|
| **Game Functionality** | Complete game wey get plenty end conditions, smooth restart, and polished gameplay | Full game with basic end conditions and working restart | Partial game with some end conditions, restart get small wahala | Incomplete game with limited functionality and big bugs |
| **Code Quality** | Clean, well-organized code using modern JavaScript, good comments, and excellent structure | Good code organization with modern syntax and enough comments | Basic code organization with some modern practices and little comments | Poor code organization, old syntax, missing comments and structure |
| **User Experience** | Gameplay easy to use with clear instructions, good feedback, and nice end/restart vibe | Good gameplay with enough instructions and feedback, working end/restart | Basic gameplay with few instructions and little feedback | Confusing gameplay with bad instructions and poor user feedback |
| **Technical Implementation** | Shows clear skill for game development concepts, event handling, and state management | Shows good understanding of game concepts with correct implementation | Basic understanding with okay implementation | Poor understanding with bad implementation |
| **Documentation** | Complete README with clear instructions, well commented code, and thorough tests | Good documentation with clear instructions and enough comments | Basic documentation with few instructions | Poor or missing documentation |

### Grading Scale
- **Exemplary (16-20 points)**: Passes better than expected with creative features and neat implementation
- **Proficient (12-15 points)**: Meets all requirements with solid work
- **Developing (8-11 points)**: Meets most requirements but get small issues
- **Beginning (4-7 points)**: Meet some things but need plenty improvement

## Additional Learning Resources

- [MDN Game Development Guide](https://developer.mozilla.org/en-US/docs/Games)
- [JavaScript Game Development Tutorials](https://developer.mozilla.org/en-US/docs/Games/Tutorials)
- [Canvas API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Game Design Principles](https://www.gamasutra.com/blogs/)

> 💡 **Pro Tip**: Start simple and add features small small. A well-polished simple game better pass complex game wey get plenty bugs!

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Warning**:
Dis document dem translate am wit AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). Even though we try make e accurate, abeg sabi say automated translation fit get errors or wahala. Di original document for im own language na di correct source. If na serious tin you dey find, better make person wey sabi do professional human translation do am. We no go be responsible if person no understand or misinterpret anything wey come from dis translation.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->