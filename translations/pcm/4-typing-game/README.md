<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "efa2ab875b8bb5a7883816506da6b6d2",
  "translation_date": "2026-01-08T11:31:16+00:00",
  "source_file": "4-typing-game/README.md",
  "language_code": "pcm"
}
-->
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

Dis na wetin every developer sabi but no dey talk about well-well: typing fast na big power! 🚀 Think am - di faster wey you fit commot your tins from your brain go your code editor, di more your creativity go flow. E be like say you get direct pipeline between your mind and di screen.

```mermaid
pie title Game Features
    "Real-time Feedback" : 25
    "Performance Tracking" : 20
    "Interactive UI" : 20
    "Timer System" : 15
    "Quote Management" : 10
    "Results Display" : 10
```
You wan sabi one beta way to upgrade dis skill? You don guess am - we go build game!

```mermaid
flowchart LR
    A[Player start di game] --> B[Random quote show]
    B --> C[Player dey type characters]
    C --> D{Character correct?}
    D -->|Yes| E[Green highlight]
    D -->|No| F[Red highlight]
    E --> G[Update accuracy]
    F --> G
    G --> H{Quote finish?}
    H -->|No| C
    H -->|Yes| I[Calculate WPM]
    I --> J[Show result]
    J --> K[Play again?]
    K -->|Yes| B
    K -->|No| L[Game don finish]
    
    style A fill:#e1f5fe
    style D fill:#fff3e0
    style E fill:#e8f5e8
    style F fill:#ffebee
    style I fill:#f3e5f5
```
> Make we create beta typing game together!

You ready to put all those JavaScript, HTML, and CSS skills wey you don dey learn for work? We go build typing game wey go challenge you with random quotes from di legendary detective [Sherlock Holmes](https://en.wikipedia.org/wiki/Sherlock_Holmes). Di game go dey track how fast and correct you fit type - and I swear, e dey more addictive pass wetin you fit think!

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
![demo](../../../4-typing-game/images/demo.gif)

## Wetin You Need to Know

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
Before we start, make sure say you sabi these tins well (no shaking if you need quick refresher - we all don pass dat one!):

- How to create text input and button controls
- CSS and how to set styles with classes  
- JavaScript basics
  - How to create array
  - How to create random number
  - How to get current time

If any of this tins dey small rusty for you, no worry! Sometimes di beta way to make your knowledge strong na to jump inside project and learn as you dey go.

### 🔄 **Pedagogical Check-in**
**Foundation Assessment**: Before you start development, make sure say you sabi:
- ✅ How HTML forms and input elements dey work
- ✅ CSS classes and dynamic styling
- ✅ JavaScript event listeners and handlers
- ✅ Array manipulation and random selection
- ✅ How to measure time and do calculations

**Quick Self-Test**: Fit explain how these concepts dey work together for interactive game?
- **Events** dey trigger when users interact with elements
- **Handlers** dey process those events and update game state
- **CSS** dey give visual feedback for user actions
- **Timing** dey enable performance measurement and game progress

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
## Make We Build Dis Game!

[Creating a typing game by using event driven programming](./typing-game/README.md)

### ⚡ **Wetin You Fit Do for Next 5 Minutes**
- [ ] Open your browser console and try listen for keyboard events with `addEventListener`
- [ ] Create simple HTML page with input field and test typing detection
- [ ] Practice string manipulation by comparing typed text with target text
- [ ] Try use `setTimeout` to understand timing functions

### 🎯 **Wetin You Fit Achieve Dis Hour**
- [ ] Finish post-lesson quiz and understand event-driven programming
- [ ] Build basic version of typing game with word validation
- [ ] Add visual feedback for correct and wrong typing
- [ ] Implement simple scoring system wey depend on speed and accuracy
- [ ] Style your game with CSS to make am look fine

### 📅 **Your Week-Long Game Development**
- [ ] Finish full typing game with all features and polish
- [ ] Add difficulty levels with different word complexity
- [ ] Implement user statistics tracking (WPM, accuracy over time)
- [ ] Create sound effects and animations for better user experience
- [ ] Make your game mobile-responsive for touch devices
- [ ] Share your game online and collect feedback from users

### 🌟 **Your Month-Long Interactive Development**
- [ ] Build multiple games to explore different interaction patterns
- [ ] Learn about game loops, state management, and performance optimization
- [ ] Contribute to open source game development projects
- [ ] Master advanced timing concepts and smooth animations
- [ ] Create portfolio wey dey show different interactive applications
- [ ] Mentor people wey dey interested in game development and user interaction

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

After you finish dis project, you go sabi:
- **Event-Driven Programming**: Responsive user interfaces wey dey react to input
- **Real-Time Feedback**: Instant visual and performance updates
- **Performance Measurement**: Correct timing and scoring systems
- **Game State Management**: Control application flow and user experience
- **Interactive Design**: Create engaging, addictive user experiences
- **Modern Web APIs**: Use browser capabilities for rich interactions
- **Accessibility Patterns**: Inclusive design for everybody

**Real-World Applications**: These skills dey important for:
- **Web Applications**: Any interactive interface or dashboard
- **Educational Software**: Learning platforms and skill assessment tools
- **Productivity Tools**: Text editors, IDEs, and collaboration software
- **Gaming Industry**: Browser games and interactive entertainment
- **Mobile Development**: Touch-based interfaces and gesture handling

**Next Level**: You ready to explore advanced game frameworks, real-time multiplayer systems, or complex interactive applications!

## Credits

Written with ♥️ by [Christopher Harrison](http://www.twitter.com/geektrainer)

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:  
Dis dokumment don translate wit AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). Even though we dey try make am correct, abeg make you sabi se automated translation fit get some error or mistake. Di original dokumment wey dey dia for im own language na im be di main correct source. For important info, na professional human translation you suppose use. We no go responsible for any kind konfussion or wrong understandin wey fit happen from dis translation.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->