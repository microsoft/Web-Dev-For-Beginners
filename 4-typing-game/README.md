# Event-Driven Programming - Build a Typing Game

```mermaid
journey
    title Your Typing Game Development Journey
    section Foundation
      Plan game structure: 3: Student
      Design user interface: 4: Student
      Setup HTML elements: 4: Student
    section Functionality
      Handle user input: 4: Student
      Track timing: 5: Student
      Calculate accuracy: 5: Student
    section Features
      Add visual feedback: 5: Student
      Implement game logic: 5: Student
      Polish experience: 5: Student
```

## Introduction

Here's something every developer knows but rarely talks about: typing fast is a superpower! 🚀 Think about it - the faster you can get your ideas from your brain to your code editor, the more your creativity can flow. It's like having a direct pipeline between your thoughts and the screen.

```mermaid
pie title Game Features
    "Real-time Feedback" : 25
    "Performance Tracking" : 20
    "Interactive UI" : 20
    "Timer System" : 15
    "Quote Management" : 10
    "Results Display" : 10
```

Want to know one of the best ways to level up this skill? You guessed it - we're going to build a game!

```mermaid
flowchart LR
    A[Player starts game] --> B[Random quote displayed]
    B --> C[Player types characters]
    C --> D{Character correct?}
    D -->|Yes| E[Green highlight]
    D -->|No| F[Red highlight]
    E --> G[Update accuracy]
    F --> G
    G --> H{Quote complete?}
    H -->|No| C
    H -->|Yes| I[Calculate WPM]
    I --> J[Display results]
    J --> K[Play again?]
    K -->|Yes| B
    K -->|No| L[Game over]
    
    style A fill:#e1f5fe
    style D fill:#fff3e0
    style E fill:#e8f5e8
    style F fill:#ffebee
    style I fill:#f3e5f5
```

> Let's create an awesome typing game together!

Ready to put all those JavaScript, HTML, and CSS skills you've been learning to work? We're going to build a typing game that'll challenge you with random quotes from the legendary detective [Sherlock Holmes](https://en.wikipedia.org/wiki/Sherlock_Holmes). The game will track how fast and accurately you can type - and trust me, it's more addictive than you might think!

```mermaid
mindmap
  root((Typing Game Development))
    User Interface
      Input Elements
      Visual Feedback
      Responsive Design
      Accessibility
    Game Logic
      Quote Selection
      Timer Management
      Accuracy Tracking
      Score Calculation
    Event Handling
      Keyboard Input
      Button Clicks
      Real-time Updates
      Game State Changes
    Performance Metrics
      Words Per Minute
      Character Accuracy
      Error Tracking
      Progress Display
    User Experience
      Immediate Feedback
      Clear Instructions
      Engaging Content
      Achievement System
```

![demo](images/demo.gif)

## What You'll Need to Know

```mermaid
flowchart TD
    A[User Action] --> B{Event Type?}
    B -->|Key Press| C[Keyboard Event]
    B -->|Button Click| D[Mouse Event]
    B -->|Timer| E[Time Event]
    
    C --> F[Check Character]
    D --> G[Start/Reset Game]
    E --> H[Update Timer]
    
    F --> I{Correct?}
    I -->|Yes| J[Highlight Green]
    I -->|No| K[Highlight Red]
    
    J --> L[Update Score]
    K --> L
    L --> M[Check Game State]
    
    G --> N[Generate New Quote]
    H --> O[Display Time]
    
    M --> P{Game Complete?}
    P -->|Yes| Q[Show Results]
    P -->|No| R[Continue Game]
    
    style A fill:#e1f5fe
    style F fill:#e8f5e8
    style I fill:#fff3e0
    style Q fill:#f3e5f5
```

Before we dive in, make sure you're comfortable with these concepts (don't worry if you need a quick refresher - we've all been there!):

- Creating text input and button controls
- CSS and setting styles using classes  
- JavaScript basics
  - Creating an array
  - Creating a random number
  - Getting the current time

If any of these feel a bit rusty, that's totally fine! Sometimes the best way to solidify your knowledge is by jumping into a project and figuring things out as you go.

### 🔄 **Pedagogical Check-in**
**Foundation Assessment**: Before starting development, ensure you understand:
- ✅ How HTML forms and input elements work
- ✅ CSS classes and dynamic styling
- ✅ JavaScript event listeners and handlers
- ✅ Array manipulation and random selection
- ✅ Time measurement and calculations

**Quick Self-Test**: Can you explain how these concepts work together in an interactive game?
- **Events** trigger when users interact with elements
- **Handlers** process those events and update game state
- **CSS** provides visual feedback for user actions
- **Timing** enables performance measurement and game progression

```mermaid
quadrantChart
    title Typing Game Skills Development
    x-axis Beginner --> Expert
    y-axis Static --> Interactive
    quadrant-1 Advanced Games
    quadrant-2 Real-time Apps
    quadrant-3 Basic Pages
    quadrant-4 Interactive Sites
    
    HTML Forms: [0.3, 0.2]
    CSS Styling: [0.4, 0.3]
    Event Handling: [0.7, 0.8]
    Game Logic: [0.8, 0.9]
    Performance Tracking: [0.9, 0.7]
```

## Let's Build This Thing!

[Creating a typing game by using event driven programming](./typing-game/README.md)

### ⚡ **What You Can Do in the Next 5 Minutes**
- [ ] Open your browser console and try listening for keyboard events with `addEventListener`
- [ ] Create a simple HTML page with an input field and test typing detection
- [ ] Practice string manipulation by comparing typed text with target text
- [ ] Experiment with `setTimeout` to understand timing functions

### 🎯 **What You Can Accomplish This Hour**
- [ ] Complete the post-lesson quiz and understand event-driven programming
- [ ] Build a basic version of the typing game with word validation
- [ ] Add visual feedback for correct and incorrect typing
- [ ] Implement a simple scoring system based on speed and accuracy
- [ ] Style your game with CSS to make it visually appealing

### 📅 **Your Week-Long Game Development**
- [ ] Complete the full typing game with all features and polish
- [ ] Add difficulty levels with varying word complexity
- [ ] Implement user statistics tracking (WPM, accuracy over time)
- [ ] Create sound effects and animations for better user experience
- [ ] Make your game mobile-responsive for touch devices
- [ ] Share your game online and gather feedback from users

### 🌟 **Your Month-Long Interactive Development**
- [ ] Build multiple games exploring different interaction patterns
- [ ] Learn about game loops, state management, and performance optimization
- [ ] Contribute to open source game development projects
- [ ] Master advanced timing concepts and smooth animations
- [ ] Create a portfolio showcasing various interactive applications
- [ ] Mentor others interested in game development and user interaction

## 🎯 Your Typing Game Mastery Timeline

```mermaid
timeline
    title Game Development Learning Progression
    
    section Setup (10 minutes)
        Project Structure: HTML foundation
                         : CSS styling setup
                         : JavaScript file creation
        
    section User Interface (20 minutes)
        Interactive Elements: Input fields
                            : Button controls
                            : Display areas
                            : Responsive layout
        
    section Event Handling (25 minutes)
        User Interaction: Keyboard events
                        : Mouse events
                        : Real-time feedback
                        : State management
        
    section Game Logic (30 minutes)
        Core Functionality: Quote generation
                          : Character comparison
                          : Accuracy calculation
                          : Timer implementation
        
    section Performance Tracking (35 minutes)
        Metrics & Analytics: WPM calculation
                           : Error tracking
                           : Progress visualization
                           : Results display
        
    section Polish & Enhancement (45 minutes)
        User Experience: Visual feedback
                       : Sound effects
                       : Animations
                       : Accessibility features
        
    section Advanced Features (1 week)
        Extended Functionality: Difficulty levels
                              : Leaderboards
                              : Custom quotes
                              : Multiplayer options
        
    section Professional Skills (1 month)
        Game Development: Performance optimization
                        : Code architecture
                        : Testing strategies
                        : Deployment patterns
```

### 🛠️ Your Game Development Toolkit Summary

After completing this project, you'll have mastered:
- **Event-Driven Programming**: Responsive user interfaces that react to input
- **Real-Time Feedback**: Instant visual and performance updates
- **Performance Measurement**: Accurate timing and scoring systems
- **Game State Management**: Controlling application flow and user experience
- **Interactive Design**: Creating engaging, addictive user experiences
- **Modern Web APIs**: Utilizing browser capabilities for rich interactions
- **Accessibility Patterns**: Inclusive design for all users

**Real-World Applications**: These skills directly apply to:
- **Web Applications**: Any interactive interface or dashboard
- **Educational Software**: Learning platforms and skill assessment tools
- **Productivity Tools**: Text editors, IDEs, and collaboration software
- **Gaming Industry**: Browser games and interactive entertainment
- **Mobile Development**: Touch-based interfaces and gesture handling

**Next Level**: You're ready to explore advanced game frameworks, real-time multiplayer systems, or complex interactive applications!

## Credits

Written with ♥️ by [Christopher Harrison](http://www.twitter.com/geektrainer)
