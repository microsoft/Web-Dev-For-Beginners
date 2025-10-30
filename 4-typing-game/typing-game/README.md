# Creating a game using events

Have you ever wondered how websites know when you click a button or type in a text box? That's the magic of event-driven programming! What better way to learn this essential skill than by building something useful - a typing speed game that reacts to every keystroke you make.

You're going to see firsthand how web browsers "talk" to your JavaScript code. Every time you click, type, or move your mouse, the browser is sending little messages (we call them events) to your code, and you get to decide how to respond!

By the time we're done here, you'll have built a real typing game that tracks your speed and accuracy. More importantly, you'll understand the fundamental concepts that power every interactive website you've ever used. Let's dive in!

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/21)

## Event driven programming

Think about your favorite app or website - what makes it feel alive and responsive? It's all about how it reacts to what you do! Every tap, click, swipe, or keystroke creates what we call an "event," and that's where the real magic of web development happens.

Here's what makes programming for the web so interesting: we never know when someone will click that button or start typing in a text box. They might click immediately, wait five minutes, or maybe never click at all! This unpredictability means we need to think differently about how we write our code.

Instead of writing code that runs from top to bottom like a recipe, we write code that sits patiently waiting for something to happen. It's similar to how telegraph operators in the 1800s would sit by their machines, ready to respond the moment a message came through the wire.

So what exactly is an "event"? Simply put, it's something that happens! When you click a button - that's an event. When you type a letter - that's an event. When you move your mouse - that's another event.

Event-driven programming lets us set up our code to listen and respond. We create special functions called **event listeners** that wait patiently for specific things to happen, then spring into action when they do.

Think of event listeners like having a doorbell for your code. You set up the doorbell (`addEventListener()`), tell it what sound to listen for (like a 'click' or 'keypress'), and then specify what should happen when someone rings it (your custom function).

**Here's how event listeners work:**
- **Listens** for specific user actions like clicks, keystrokes, or mouse movements
- **Executes** your custom code when the specified event occurs
- **Responds** immediately to user interactions, creating a seamless experience
- **Handles** multiple events on the same element using different listeners

> **NOTE:** It's worth highlighting there are numerous ways to create event listeners. You can use anonymous functions, or create named ones. You can use various shortcuts, like setting the `click` property, or using `addEventListener()`. In our exercise we are going to focus on `addEventListener()` and anonymous functions, as it's probably the most common technique web developers use. It's also the most flexible, as `addEventListener()` works for all events, and the event name can be provided as a parameter.

### Common events

While web browsers offer dozens of different events you can listen for, most interactive applications rely on just a handful of essential events. Understanding these core events will give you the foundation to build sophisticated user interactions.

There are [dozens of events](https://developer.mozilla.org/docs/Web/Events) available for you to listen to when creating an application. Basically anything a user does on a page raises an event, which gives you a lot of power to ensure they get the experience you desire. Fortunately, you'll normally only need a small handful of events. Here's a few common ones (including the two we'll use when creating our game):

| Event | Description | Common Use Cases |
|-------|-------------|------------------|
| `click` | The user clicked on something | Buttons, links, interactive elements |
| `contextmenu` | The user clicked the right mouse button | Custom right-click menus |
| `select` | The user highlighted some text | Text editing, copy operations |
| `input` | The user input some text | Form validation, real-time search |

**Understanding these event types:**
- **Triggers** when users interact with specific elements on your page
- **Provides** detailed information about the user's action through event objects
- **Enables** you to create responsive, interactive web applications
- **Works** consistently across different browsers and devices

## Creating the game

Now that you understand how events work, let's put that knowledge into practice by building something useful. We'll create a typing speed game that demonstrates event handling while helping you develop an important developer skill.

We're going to create a game to explore how events work in JavaScript. Our game will test a player's typing skill, which is one of the most underrated skills all developers should have. Fun fact: the QWERTY keyboard layout we use today was actually designed in the 1870s for typewriters - and good typing skills are still just as valuable for programmers today! The general flow of the game will look like this:

```mermaid
flowchart TD
    A[Player clicks Start] --> B[Random quote displays]
    B --> C[Player types in textbox]
    C --> D{Word complete?}
    D -->|Yes| E[Highlight next word]
    D -->|No| F{Correct so far?}
    F -->|Yes| G[Keep normal styling]
    F -->|No| H[Show error styling]
    E --> I{Quote complete?}
    I -->|No| C
    I -->|Yes| J[Show success message with time]
    G --> C
    H --> C
```

**Here's how our game will work:**
- **Starts** when the player clicks the start button and displays a random quote
- **Tracks** the player's typing progress word by word in real-time
- **Highlights** the current word to guide the player's focus
- **Provides** immediate visual feedback for typing errors
- **Calculates** and displays the total time when the quote is completed

Let's build our game, and learn about events!

### File structure

Before we start coding, let's get organized! Having a clean file structure from the beginning will save you headaches later and make your project more professional. 😊

We're going to keep things simple with just three files: `index.html` for our page structure, `script.js` for all our game logic, and `style.css` to make everything look great. This is the classic trio that powers most of the web!

**Create a new folder for your work by opening a console or terminal window and issuing the following command:**

```bash
# Linux or macOS
mkdir typing-game && cd typing-game

# Windows
md typing-game && cd typing-game
```

**Here's what these commands do:**
- **Creates** a new directory called `typing-game` for your project files
- **Navigates** into the newly created directory automatically
- **Sets up** a clean workspace for your game development

**Open Visual Studio Code:**

```bash
code .
```

**This command:**
- **Launches** Visual Studio Code in the current directory
- **Opens** your project folder in the editor
- **Provides** access to all the development tools you'll need

**Add three files to the folder in Visual Studio Code with the following names:**
- `index.html` - Contains the structure and content of your game
- `script.js` - Handles all the game logic and event listeners
- `style.css` - Defines the visual appearance and styling

## Create the user interface

Now let's build the stage where all our game action will happen! Think of this like designing the control panel for a spaceship - we need to make sure everything our players need is right where they expect it to be.

Let's figure out what our game actually needs. If you were playing a typing game, what would you want to see on the screen? Here's what we'll need:

| UI Element | Purpose | HTML Element |
|------------|---------|-------------|
| Quote Display | Shows the text to type | `<p>` with `id="quote"` |
| Message Area | Displays status and success messages | `<p>` with `id="message"` |
| Text Input | Where players type the quote | `<input>` with `id="typed-value"` |
| Start Button | Begins the game | `<button>` with `id="start"` |

**Understanding the UI structure:**
- **Organizes** content logically from top to bottom
- **Assigns** unique IDs to elements for JavaScript targeting
- **Provides** clear visual hierarchy for better user experience
- **Includes** semantic HTML elements for accessibility

Each of those will need IDs so we can work with them in our JavaScript. We will also add references to the CSS and JavaScript files we're going to create.

Create a new file named `index.html`. Add the following HTML:

```html
<!-- inside index.html -->
<html>
<head>
  <title>Typing game</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Typing game!</h1>
  <p>Practice your typing skills with a quote from Sherlock Holmes. Click **start** to begin!</p>
  <p id="quote"></p> <!-- This will display our quote -->
  <p id="message"></p> <!-- This will display any status messages -->
  <div>
    <input type="text" aria-label="current word" id="typed-value" /> <!-- The textbox for typing -->
    <button type="button" id="start">Start</button> <!-- To start the game -->
  </div>
  <script src="script.js"></script>
</body>
</html>
```

**Breaking down what this HTML structure accomplishes:**
- **Links** the CSS stylesheet in the `<head>` for styling
- **Creates** a clear heading and instructions for users
- **Establishes** placeholder paragraphs with specific IDs for dynamic content
- **Includes** an input field with accessibility attributes
- **Provides** a start button to trigger the game
- **Loads** the JavaScript file at the end for optimal performance

### Launch the application

Testing your application frequently during development helps you catch issues early and see your progress in real-time. Live Server is an invaluable tool that automatically refreshes your browser whenever you save changes, making development much more efficient.

It's always best to develop iteratively to see how things look. Let's launch our application. There's a wonderful extension for Visual Studio Code called [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) which will both host your application locally and refresh the browser each time you save.

**Install [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) by following the link and clicking Install:**

**Here's what happens during installation:**
- **Prompts** your browser to open Visual Studio Code
- **Guides** you through the extension installation process
- **May require** restarting Visual Studio Code to complete setup

**Once installed, in Visual Studio Code, click Ctrl-Shift-P (or Cmd-Shift-P) to open the command palette:**

**Understanding the command palette:**
- **Provides** quick access to all VS Code commands
- **Searches** commands as you type
- **Offers** keyboard shortcuts for faster development

**Type "Live Server: Open with Live Server":**

**What Live Server does:**
- **Starts** a local development server for your project
- **Automatically** refreshes the browser when you save files
- **Serves** your files from a local URL (typically `localhost:5500`)

**Open a browser and navigate to `https://localhost:5500`:**

You should now see the page you created! Let's add some functionality.

## Add the CSS

Now let's make things look good! Visual feedback has been crucial for user interfaces since the early days of computing. In the 1980s, researchers discovered that immediate visual feedback dramatically improves user performance and reduces errors. That's exactly what we're going to create.

Our game needs to be crystal clear about what's happening. Players should immediately know which word they're supposed to type, and if they make a mistake, they should see it right away. Let's create some simple but effective styling:

Create a new file named `style.css` and add the following syntax.

```css
/* inside style.css */
.highlight {
  background-color: yellow;
}

.error {
  background-color: lightcoral;
  border: red;
}
```

**Understanding these CSS classes:**
- **Highlights** the current word with a yellow background for clear visual guidance
- **Signals** typing errors with a light coral background color
- **Provides** immediate feedback without disrupting the user's typing flow
- **Uses** contrasting colors for accessibility and clear visual communication

✅ When it comes to CSS you can layout your page however you might like. Take a little time and make the page look more appealing:

- Choose a different font
- Colorize the headers
- Resize items

## JavaScript

Here's where things get interesting! 🎉 We've got our HTML structure and our CSS styling, but right now our game is like a beautiful car without an engine. JavaScript is going to be that engine - it's what makes everything actually work and respond to what players do.

This is where you'll see your creation come to life. We're going to tackle this step by step so nothing feels overwhelming:

| Step | Purpose | What You'll Learn |
|------|---------|------------------|
| [Create the constants](#add-the-constants) | Set up quotes and DOM references | Variable management and DOM selection |
| [Event listener to start the game](#add-start-logic) | Handle game initialization | Event handling and UI updates |
| [Event listener to typing](#add-typing-logic) | Process user input in real-time | Input validation and dynamic feedback |

**This structured approach helps you:**
- **Organize** your code into logical, manageable sections
- **Build** functionality incrementally for easier debugging
- **Understand** how different parts of your application work together
- **Create** reusable patterns for future projects

But first, create a new file named `script.js`.

### Add the constants

Before we dive into the action, let's gather all our resources! Just like how NASA mission control sets up all their monitoring systems before launch, it's much easier when you have everything prepared and ready to go. This saves us from hunting around for things later and helps prevent typos.

Here's what we need to set up first:

| Data Type | Purpose | Example |
|-----------|---------|--------|
| Array of quotes | Store all possible quotes for the game | `['Quote 1', 'Quote 2', ...]` |
| Word array | Break current quote into individual words | `['When', 'you', 'have', ...]` |
| Word index | Track which word player is typing | `0, 1, 2, 3...` |
| Start time | Calculate elapsed time for scoring | `Date.now()` |

**We'll also need references to our UI elements:**
| Element | ID | Purpose |
|---------|----|---------|
| Text input | `typed-value` | Where players type |
| Quote display | `quote` | Shows the quote to type |
| Message area | `message` | Displays status updates |

```javascript
// inside script.js
// all of our quotes
const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];
// store the list of words and the index of the word the player is currently typing
let words = [];
let wordIndex = 0;
// the starting time
let startTime = Date.now();
// page elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
```

**Breaking down what this setup code accomplishes:**
- **Stores** an array of Sherlock Holmes quotes using `const` since the quotes won't change
- **Initializes** tracking variables with `let` since these values will update during gameplay
- **Captures** references to DOM elements using `document.getElementById()` for efficient access
- **Sets up** the foundation for all game functionality with clear, descriptive variable names
- **Organizes** related data and elements logically for easier code maintenance

✅ Go ahead and add more quotes to your game

> 💡 **Pro Tip**: We can retrieve the elements whenever we want in code by using `document.getElementById()`. Because of the fact we're going to refer to these elements on a regular basis we're going to avoid typos with string literals by using constants. Frameworks such as [Vue.js](https://vuejs.org/) or [React](https://reactjs.org/) can help you better manage centralizing your code.
>
**Here's why this approach works so well:**
- **Prevents** spelling errors when referencing elements multiple times
- **Improves** code readability with descriptive constant names
- **Enables** better IDE support with autocomplete and error checking
- **Makes** refactoring easier if element IDs change later

Take a minute to watch a video on using `const`, `let` and `var`

[![Types of variables](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Types of variables")

> 🎥 Click the image above for a video about variables.

### Add start logic

This is where everything clicks into place! 🚀 You're about to write your first real event listener, and there's something quite satisfying about seeing your code respond to a button click.

Think about it: somewhere out there, a player is going to click that "Start" button, and your code needs to be ready for them. We have no idea when they'll click it - could be immediately, could be after they grab a coffee - but when they do, your game springs to life.

When the user clicks `start`, we need to select a quote, setup the user interface, and setup tracking for the current word and timing. Below is the JavaScript you'll need to add; we discuss it just after the script block.

```javascript
// at the end of script.js
document.getElementById('start').addEventListener('click', () => {
  // get a quote
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];
  // Put the quote into an array of words
  words = quote.split(' ');
  // reset the word index for tracking
  wordIndex = 0;

  // UI updates
  // Create an array of span elements so we can set a class
  const spanWords = words.map(function(word) { return `<span>${word} </span>`});
  // Convert into string and set as innerHTML on quote display
  quoteElement.innerHTML = spanWords.join('');
  // Highlight the first word
  quoteElement.childNodes[0].className = 'highlight';
  // Clear any prior messages
  messageElement.innerText = '';

  // Setup the textbox
  // Clear the textbox
  typedValueElement.value = '';
  // set focus
  typedValueElement.focus();
  // set the event handler

  // Start the timer
  startTime = new Date().getTime();
});
```

**Let's break down the code into logical sections:**

**📊 Word Tracking Setup:**
- **Selects** a random quote using `Math.floor()` and `Math.random()` for variety
- **Converts** the quote into an array of individual words using `split(' ')`
- **Resets** the `wordIndex` to 0 since players start with the first word
- **Prepares** the game state for a fresh round

**🎨 UI Setup and Display:**
- **Creates** an array of `<span>` elements, wrapping each word for individual styling
- **Joins** the span elements into a single string for efficient DOM updating
- **Highlights** the first word by adding the `highlight` CSS class
- **Clears** any previous game messages to provide a clean slate

**⌨️ Textbox Preparation:**
- **Clears** any existing text in the input field
- **Sets focus** to the textbox so players can start typing immediately
- **Prepares** the input area for the new game session

**⏱️ Timer Initialization:**
- **Captures** the current timestamp using `new Date().getTime()`
- **Enables** accurate calculation of typing speed and completion time
- **Starts** the performance tracking for the game session

### Add typing logic

Here's where we tackle the heart of our game! Don't worry if this seems like a lot at first - we'll walk through every piece, and by the end, you'll see how logical it all is.

What we're building here is quite sophisticated: every single time someone types a letter, our code is going to check what they typed, give them feedback, and decide what should happen next. It's similar to how early word processors like WordStar in the 1970s provided real-time feedback to typists.

```javascript
// at the end of script.js
typedValueElement.addEventListener('input', () => {
  // Get the current word
  const currentWord = words[wordIndex];
  // get the current value
  const typedValue = typedValueElement.value;

  if (typedValue === currentWord && wordIndex === words.length - 1) {
    // end of sentence
    // Display success
    const elapsedTime = new Date().getTime() - startTime;
    const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
    messageElement.innerText = message;
  } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
    // end of word
    // clear the typedValueElement for the new word
    typedValueElement.value = '';
    // move to the next word
    wordIndex++;
    // reset the class name for all elements in quote
    for (const wordElement of quoteElement.childNodes) {
      wordElement.className = '';
    }
    // highlight the new word
    quoteElement.childNodes[wordIndex].className = 'highlight';
  } else if (currentWord.startsWith(typedValue)) {
    // currently correct
    // highlight the next word
    typedValueElement.className = '';
  } else {
    // error state
    typedValueElement.className = 'error';
  }
});
```

**Understanding the typing logic flow:**

This function uses a waterfall approach, checking conditions from most specific to most general. Let's break down each scenario:

```mermaid
flowchart TD
    A[Player types character] --> B[Get current word and typed value]
    B --> C{Quote complete?}
    C -->|Yes| D[Show completion message with time]
    C -->|No| E{Word complete with space?}
    E -->|Yes| F[Clear input, move to next word, update highlight]
    E -->|No| G{Typing correctly so far?}
    G -->|Yes| H[Remove error styling]
    G -->|No| I[Show error styling]
```

**🏁 Quote Complete (Scenario 1):**
- **Checks** if typed value matches current word AND we're on the last word
- **Calculates** elapsed time by subtracting start time from current time
- **Converts** milliseconds to seconds by dividing by 1,000
- **Displays** congratulatory message with completion time

**✅ Word Complete (Scenario 2):**
- **Detects** word completion when input ends with a space
- **Validates** that trimmed input matches the current word exactly
- **Clears** the input field for the next word
- **Advances** to the next word by incrementing `wordIndex`
- **Updates** visual highlighting by removing all classes and highlighting the new word

**📝 Typing in Progress (Scenario 3):**
- **Verifies** that the current word starts with what's been typed so far
- **Removes** any error styling to show the input is correct
- **Allows** continued typing without interruption

**❌ Error State (Scenario 4):**
- **Triggers** when typed text doesn't match the expected word beginning
- **Applies** error CSS class to provide immediate visual feedback
- **Helps** players quickly identify and correct mistakes

## Test your application

Look what you've accomplished! 🎉 You just built a real, working typing game from scratch using event-driven programming. Take a moment to appreciate that - this is no small feat!

Now comes the testing phase! Will it work as expected? Did we miss something? Here's the thing: if something doesn't work perfectly right away, that's completely normal. Even experienced developers find bugs in their code regularly. It's all part of the development process!

Click on `start`, and start typing away! It should look a little like the animation we saw before.

![Animation of the game in action](../images/demo.gif)

**What to test in your application:**
- **Verifies** that clicking Start displays a random quote
- **Confirms** that typing highlights the current word correctly
- **Checks** that error styling appears for incorrect typing
- **Ensures** that completing words advances the highlight properly
- **Tests** that finishing the quote shows the completion message with timing

**Common debugging tips:**
- **Check** the browser console (F12) for JavaScript errors
- **Verify** that all file names match exactly (case-sensitive)
- **Ensure** Live Server is running and refreshing properly
- **Test** different quotes to verify the random selection works

---

## GitHub Copilot Agent Challenge 🎮

Use the Agent mode to complete the following challenge:

**Description:** Extend the typing game by implementing a difficulty system that adjusts the game based on player performance. This challenge will help you practice advanced event handling, data analysis, and dynamic UI updates.

**Prompt:** Create a difficulty adjustment system for the typing game that:
1. Tracks the player's typing speed (words per minute) and accuracy percentage
2. Automatically adjusts to three difficulty levels: Easy (simple quotes), Medium (current quotes), Hard (complex quotes with punctuation)
3. Displays the current difficulty level and player statistics on the UI
4. Implements a streak counter that increases difficulty after 3 consecutive good performances
5. Adds visual feedback (colors, animations) to indicate difficulty changes

Add the necessary HTML elements, CSS styles, and JavaScript functions to implement this feature. Include proper error handling and ensure the game remains accessible with appropriate ARIA labels.

Learn more about [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) here.

## 🚀 Challenge

Ready to take your typing game to the next level? Try implementing these advanced features to deepen your understanding of event handling and DOM manipulation:

**Add more functionality:**

| Feature | Description | Skills You'll Practice |
|---------|-------------|------------------------|
| **Input Control** | Disable the `input` event listener on completion, and re-enable it when the button is clicked | Event management and state control |
| **UI State Management** | Disable the textbox when the player completes the quote | DOM property manipulation |
| **Modal Dialog** | Display a modal dialog box with the success message | Advanced UI patterns and accessibility |
| **High Score System** | Store high scores using `localStorage` | Browser storage APIs and data persistence |

**Implementation tips:**
- **Research** `localStorage.setItem()` and `localStorage.getItem()` for persistent storage
- **Practice** adding and removing event listeners dynamically
- **Explore** HTML dialog elements or CSS modal patterns
- **Consider** accessibility when disabling and enabling form controls

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/22)

---

## 🚀 Your Typing Game Mastery Timeline

### ⚡ **What You Can Do in the Next 5 Minutes**
- [ ] Test your typing game with different quotes to ensure it works smoothly
- [ ] Experiment with the CSS styling - try changing the highlight and error colors
- [ ] Open your browser's DevTools (F12) and watch the Console while playing
- [ ] Challenge yourself to complete a quote as fast as possible

### ⏰ **What You Can Accomplish This Hour**
- [ ] Add more quotes to the array (maybe from your favorite books or movies)
- [ ] Implement the localStorage high score system from the challenge section
- [ ] Create a words-per-minute calculator that displays after each game
- [ ] Add sound effects for correct typing, errors, and completion

### 📅 **Your Week-Long Adventure**
- [ ] Build a multiplayer version where friends can compete side-by-side
- [ ] Create different difficulty levels with varying quote complexity
- [ ] Add a progress bar showing how much of the quote is complete
- [ ] Implement user accounts with personal statistics tracking
- [ ] Design custom themes and let users choose their preferred styling

### 🗓️ **Your Month-Long Transformation**
- [ ] Create a typing course with lessons that progressively teach proper finger placement
- [ ] Build analytics that show which letters or words cause the most errors
- [ ] Add support for different languages and keyboard layouts
- [ ] Integrate with educational APIs to pull quotes from literature databases
- [ ] Publish your enhanced typing game for others to use and enjoy

### 🎯 **Final Reflection Check-in**

**Before you move on, take a moment to celebrate:**
- What was the most satisfying moment while building this game?
- How do you feel about event-driven programming now compared to when you started?
- What's one feature you're excited to add to make this game uniquely yours?
- How might you apply event handling concepts to other projects?

```mermaid
journey
    title Your Event Programming Confidence Journey
    section Today
      Understanding Events: 3: You
      Building UI: 4: You
      Writing Event Listeners: 5: You
    section This Week
      Adding Features: 4: You
      Debugging Issues: 5: You
      Enhancing UX: 4: You
    section Next Month
      Building Complex Apps: 5: You
      Teaching Others: 5: You
      Creating Frameworks: 5: You
```

> 🌟 **Remember**: You've just mastered one of the core concepts that powers every interactive website and application. Event-driven programming is what makes the web feel alive and responsive. Every time you see a dropdown menu, a form that validates as you type, or a game that responds to your clicks, you now understand the magic behind it. You're not just learning to code - you're learning to create experiences that feel intuitive and engaging! 🎉

---

## Review & Self Study

Read up on [all the events available](https://developer.mozilla.org/docs/Web/Events) to the developer via the web browser, and consider the scenarios in which you would use each one.

## Assignment

[Create a new keyboard game](assignment.md)
