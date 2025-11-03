<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "efa2ab875b8bb5a7883816506da6b6d2",
  "translation_date": "2025-11-03T14:02:18+00:00",
  "source_file": "4-typing-game/README.md",
  "language_code": "tl"
}
-->
# Event-Driven Programming - Gumawa ng Typing Game

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

## Panimula

Narito ang isang bagay na alam ng bawat developer pero bihirang pag-usapan: ang mabilis na pagta-type ay isang superpower! 🚀 Isipin mo - mas mabilis mong maipapasa ang iyong mga ideya mula sa utak papunta sa code editor, mas malaya ang daloy ng iyong pagkamalikhain. Para itong direktang koneksyon sa pagitan ng iyong mga iniisip at ng screen.

```mermaid
pie title Game Features
    "Real-time Feedback" : 25
    "Performance Tracking" : 20
    "Interactive UI" : 20
    "Timer System" : 15
    "Quote Management" : 10
    "Results Display" : 10
```

Gusto mo bang malaman ang isa sa mga pinakamahusay na paraan para mahasa ang kakayahang ito? Tama ang hula mo - gagawa tayo ng isang laro!

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

> Gumawa tayo ng isang kahanga-hangang typing game!

Handa ka na bang gamitin ang lahat ng JavaScript, HTML, at CSS skills na natutunan mo? Gagawa tayo ng typing game na magpapakilala sa iyo ng mga random na quotes mula sa sikat na detektib na si [Sherlock Holmes](https://en.wikipedia.org/wiki/Sherlock_Holmes). Susukatin ng laro kung gaano ka kabilis at ka-eksakto mag-type - at maniwala ka, mas nakakaadik ito kaysa sa inaakala mo!

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

## Mga Kailangan Mong Malaman

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

Bago tayo magsimula, siguraduhing komportable ka sa mga konseptong ito (huwag mag-alala kung kailangan mo ng mabilisang pag-review - normal lang 'yan!):

- Paglikha ng text input at button controls
- CSS at pag-set ng styles gamit ang mga klase  
- Mga pangunahing kaalaman sa JavaScript
  - Paglikha ng array
  - Paglikha ng random na numero
  - Pagkuha ng kasalukuyang oras

Kung medyo malabo ang ilan sa mga ito, ayos lang! Minsan ang pinakamagandang paraan para mapalalim ang kaalaman ay ang sumabak sa proyekto at matutunan habang ginagawa.

### 🔄 **Pedagogical Check-in**
**Foundation Assessment**: Bago magsimula sa development, siguraduhing nauunawaan mo:
- ✅ Paano gumagana ang HTML forms at input elements
- ✅ CSS classes at dynamic styling
- ✅ JavaScript event listeners at handlers
- ✅ Manipulasyon ng array at random na pagpili
- ✅ Pagsukat ng oras at kalkulasyon

**Quick Self-Test**: Kaya mo bang ipaliwanag kung paano nagtutulungan ang mga konseptong ito sa isang interactive na laro?
- **Events** ang nagti-trigger kapag may interaksyon ang user sa mga elemento
- **Handlers** ang nagpoproseso ng mga events at nag-a-update ng estado ng laro
- **CSS** ang nagbibigay ng visual na feedback para sa mga aksyon ng user
- **Timing** ang nagbibigay-daan sa pagsukat ng performance at progreso ng laro

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

## Simulan Natin Ito!

[Paglikha ng typing game gamit ang event-driven programming](./typing-game/README.md)

### ⚡ **Mga Magagawa Mo sa Susunod na 5 Minuto**
- [ ] Buksan ang browser console at subukang makinig sa keyboard events gamit ang `addEventListener`
- [ ] Gumawa ng simpleng HTML page na may input field at subukang i-detect ang pagta-type
- [ ] Magpraktis ng string manipulation sa pamamagitan ng paghahambing ng typed text sa target text
- [ ] Mag-eksperimento gamit ang `setTimeout` para maunawaan ang timing functions

### 🎯 **Mga Magagawa Mo sa Loob ng Isang Oras**
- [ ] Tapusin ang post-lesson quiz at maunawaan ang event-driven programming
- [ ] Gumawa ng basic na bersyon ng typing game na may word validation
- [ ] Magdagdag ng visual feedback para sa tamang at maling pagta-type
- [ ] Mag-implement ng simpleng scoring system base sa bilis at eksaktong pagta-type
- [ ] I-style ang iyong laro gamit ang CSS para maging kaaya-aya sa mata

### 📅 **Pagbuo ng Laro sa Loob ng Isang Linggo**
- [ ] Tapusin ang buong typing game na may lahat ng features at polish
- [ ] Magdagdag ng difficulty levels na may iba't ibang complexity ng salita
- [ ] Mag-implement ng user statistics tracking (WPM, accuracy sa paglipas ng oras)
- [ ] Gumawa ng sound effects at animations para sa mas magandang user experience
- [ ] Gawing mobile-responsive ang iyong laro para sa touch devices
- [ ] Ibahagi ang iyong laro online at mangolekta ng feedback mula sa mga user

### 🌟 **Pagbuo ng Interactive Development sa Loob ng Isang Buwan**
- [ ] Gumawa ng maraming laro na nag-eexplore ng iba't ibang interaction patterns
- [ ] Matutunan ang tungkol sa game loops, state management, at performance optimization
- [ ] Mag-contribute sa open source game development projects
- [ ] Masterin ang advanced timing concepts at smooth animations
- [ ] Gumawa ng portfolio na nagpapakita ng iba't ibang interactive applications
- [ ] Mag-mentor sa iba na interesado sa game development at user interaction

## 🎯 Timeline ng Iyong Typing Game Mastery

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

### 🛠️ Buod ng Iyong Game Development Toolkit

Pagkatapos tapusin ang proyektong ito, ma-master mo ang:
- **Event-Driven Programming**: Responsive user interfaces na tumutugon sa input
- **Real-Time Feedback**: Instant visual at performance updates
- **Performance Measurement**: Eksaktong timing at scoring systems
- **Game State Management**: Pagkontrol sa daloy ng application at user experience
- **Interactive Design**: Paglikha ng engaging, nakakaadik na user experiences
- **Modern Web APIs**: Paggamit ng browser capabilities para sa rich interactions
- **Accessibility Patterns**: Inclusive design para sa lahat ng user

**Real-World Applications**: Ang mga skills na ito ay direktang magagamit sa:
- **Web Applications**: Anumang interactive interface o dashboard
- **Educational Software**: Mga learning platform at skill assessment tools
- **Productivity Tools**: Text editors, IDEs, at collaboration software
- **Gaming Industry**: Browser games at interactive entertainment
- **Mobile Development**: Touch-based interfaces at gesture handling

**Next Level**: Handa ka nang mag-explore ng advanced game frameworks, real-time multiplayer systems, o complex interactive applications!

## Credits

Isinulat nang may ♥️ ni [Christopher Harrison](http://www.twitter.com/geektrainer)

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.