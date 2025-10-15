# Build a Sample Game

## Assignment Overview

Now that you've mastered game end conditions and restart functionality in your space game, it's time to apply these concepts to a completely new gaming experience. You'll design and build your own game that demonstrates different end condition patterns and restart mechanics.

This assignment challenges you to think creatively about game design while practicing the technical skills you've learned. You'll explore different victory and defeat scenarios, implement player progression, and create engaging restart experiences.

## Project Requirements

### Core Game Features

Your game must include the following essential elements:

**End Condition Variety**: Implement at least two different ways the game can end:
- **Point-based victory**: Player reaches a target score or collects specific items
- **Life-based defeat**: Player loses all available lives or health points
- **Objective completion**: All enemies defeated, specific items collected, or goals achieved
- **Time-based**: Game ends after a set duration or countdown reaches zero

**Restart Functionality**: 
- **Clear game state**: Remove all previous game objects and reset variables
- **Reinitialize systems**: Start fresh with new player stats, enemies, and objectives
- **User-friendly controls**: Provide clear instructions for restarting the game

**Player Feedback**:
- **Victory messages**: Celebrate player achievements with positive feedback
- **Defeat messages**: Provide encouraging messages that motivate replay
- **Progress indicators**: Show current score, lives, or objective status

### Game Ideas and Inspiration

Choose one of these game concepts or create your own:

#### 1. Console Adventure Game
Create a text-based adventure with combat mechanics:

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
- **Multiple enemy types** with varying difficulty
- **Victory condition** when all enemies are defeated

#### 2. Collection Game
- **Objective**: Collect specific items while avoiding obstacles
- **End conditions**: Reach target collection count or lose all lives
- **Progression**: Items become harder to reach as game continues

#### 3. Puzzle Game
- **Objective**: Solve increasingly difficult puzzles
- **End conditions**: Complete all levels or run out of moves/time
- **Restart**: Reset to first level with cleared progress

#### 4. Defense Game
- **Objective**: Protect your base from waves of enemies
- **End conditions**: Survive all waves (victory) or base is destroyed (defeat)
- **Progression**: Enemy waves increase in difficulty and number

## Implementation Guidelines

### Getting Started

1. **Plan your game design**:
   - Sketch the basic gameplay loop
   - Define your end conditions clearly
   - Identify what data needs to be reset on restart

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
- Apply `const` and `let` for variable declarations
- Use arrow functions where appropriate
- Implement ES6+ features like template literals and destructuring

**Event-Driven Architecture**:
- Create event handlers for user interactions
- Implement game state changes through events
- Use event listeners for restart functionality

**Clean Code Practices**:
- Write functions with single responsibilities
- Use descriptive variable and function names
- Add comments explaining game logic and rules
- Organize code into logical sections

## Submission Requirements

### Deliverables

1. **Complete game files**: All HTML, CSS, and JavaScript files needed to run your game
2. **README.md**: Documentation explaining:
   - How to play your game
   - What end conditions you implemented
   - Instructions for restarting
   - Any special features or mechanics
3. **Code comments**: Clear explanations of your game logic and algorithms

### Testing Checklist

Before submitting, verify that your game:

- [ ] **Runs without errors** in the browser console
- [ ] **Implements multiple end conditions** as specified
- [ ] **Restarts properly** with clean state reset
- [ ] **Provides clear feedback** to players about game status
- [ ] **Uses modern JavaScript** syntax and best practices
- [ ] **Includes comprehensive documentation** in README.md

## Assessment Rubric

| Criteria | Exemplary (4) | Proficient (3) | Developing (2) | Beginning (1) |
|----------|---------------|----------------|----------------|--------------|
| **Game Functionality** | Complete game with multiple end conditions, smooth restart, and polished gameplay experience | Full game with basic end conditions and functional restart mechanism | Partial game with some end conditions implemented, restart may have minor issues | Incomplete game with limited functionality and significant bugs |
| **Code Quality** | Clean, well-organized code using modern JavaScript practices, comprehensive comments, and excellent structure | Good code organization with modern syntax, adequate comments, and clear structure | Basic code organization with some modern practices, minimal comments | Poor code organization, outdated syntax, lacking comments and structure |
| **User Experience** | Intuitive gameplay with clear instructions, excellent feedback, and engaging end/restart experience | Good gameplay with adequate instructions and feedback, functional end/restart | Basic gameplay with minimal instructions, limited feedback on game state | Confusing gameplay with unclear instructions and poor user feedback |
| **Technical Implementation** | Demonstrates mastery of game development concepts, event handling, and state management | Shows solid understanding of game concepts with good implementation | Basic understanding with acceptable implementation | Limited understanding with poor implementation |
| **Documentation** | Comprehensive README with clear instructions, well-documented code, and thorough testing evidence | Good documentation with clear instructions and adequate code comments | Basic documentation with minimal instructions | Poor or missing documentation |

### Grading Scale
- **Exemplary (16-20 points)**: Exceeds expectations with creative features and polished implementation
- **Proficient (12-15 points)**: Meets all requirements with solid execution
- **Developing (8-11 points)**: Meets most requirements with minor issues
- **Beginning (4-7 points)**: Meets some requirements but needs significant improvement

## Additional Learning Resources

- [MDN Game Development Guide](https://developer.mozilla.org/en-US/docs/Games)
- [JavaScript Game Development Tutorials](https://developer.mozilla.org/en-US/docs/Games/Tutorials)
- [Canvas API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Game Design Principles](https://www.gamasutra.com/blogs/)

> 💡 **Pro Tip**: Start simple and add features incrementally. A well-polished simple game is better than a complex game with bugs!