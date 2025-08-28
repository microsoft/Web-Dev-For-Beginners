<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e982871b8388c59c22a41b73b5fca70f",
  "translation_date": "2025-08-28T11:56:55+00:00",
  "source_file": "4-typing-game/typing-game/README.md",
  "language_code": "en"
}
-->
# Creating a game using events

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/21)

## Event driven programming

When building a browser-based application, we provide a graphical user interface (GUI) for users to interact with. The most common ways users interact with the browser are by clicking and typing in various elements. The challenge for us as developers is that we don’t know when they’ll perform these actions!

[Event-driven programming](https://en.wikipedia.org/wiki/Event-driven_programming) is the type of programming we use to create our GUI. If we break this term down, the key word here is **event**. According to [Merriam-Webster](https://www.merriam-webster.com/dictionary/event), an event is "something which happens." This perfectly describes our situation. We know something will happen that we want to respond to with code, but we don’t know when it will occur.

To specify the code we want to execute, we create a function. In [procedural programming](https://en.wikipedia.org/wiki/Procedural_programming), functions are called in a specific order. This is also true in event-driven programming, but the difference lies in **how** the functions are called.

To handle events (like button clicks or typing), we register **event listeners**. An event listener is a function that waits for an event to occur and executes in response. Event listeners can update the UI, make server calls, or perform any other necessary actions based on the user’s input. We add an event listener using [addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) and provide a function to execute.

> **NOTE:** There are many ways to create event listeners. You can use anonymous functions or create named ones. You can also use shortcuts, like setting the `click` property, or use `addEventListener`. In this exercise, we’ll focus on `addEventListener` and anonymous functions, as this is one of the most common techniques used by web developers. It’s also the most flexible, as `addEventListener` works for all events, and the event name can be passed as a parameter.

### Common events

There are [dozens of events](https://developer.mozilla.org/docs/Web/Events) you can listen to when building an application. Essentially, anything a user does on a page triggers an event, giving you a lot of power to create the desired user experience. Fortunately, you’ll typically only need a small subset of these events. Here are a few common ones (including the two we’ll use for our game):

- [click](https://developer.mozilla.org/docs/Web/API/Element/click_event): Triggered when the user clicks on something, usually a button or hyperlink.
- [contextmenu](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event): Triggered when the user right-clicks.
- [select](https://developer.mozilla.org/docs/Web/API/Element/select_event): Triggered when the user highlights text.
- [input](https://developer.mozilla.org/docs/Web/API/Element/input_event): Triggered when the user types text.

## Creating the game

We’re going to create a game to explore how events work in JavaScript. Our game will test a player’s typing skills, which is one of the most underrated skills every developer should practice. The general flow of the game will be:

- The player clicks a start button and is presented with a quote to type.
- The player types the quote as quickly as possible in a textbox.
  - As each word is completed, the next one is highlighted.
  - If the player makes a typo, the textbox turns red.
  - When the player completes the quote, a success message is displayed along with the elapsed time.

Let’s build the game and learn about events!

### File structure

We’ll need three files: **index.html**, **script.js**, and **style.css**. Let’s set them up to make things easier.

- Create a new folder for your work by opening a console or terminal and running the following command:

```bash
# Linux or macOS
mkdir typing-game && cd typing-game

# Windows
md typing-game && cd typing-game
```

- Open Visual Studio Code:

```bash
code .
```

- Add three files to the folder in Visual Studio Code with the following names:
  - index.html
  - script.js
  - style.css

## Create the user interface

Based on the requirements, we know we’ll need a few elements on our HTML page. Think of this as a recipe where we need specific ingredients:

- A place to display the quote for the user to type.
- A place to display messages, like a success message.
- A textbox for typing.
- A start button.

Each of these elements will need IDs so we can interact with them in JavaScript. We’ll also add references to the CSS and JavaScript files we’re creating.

Create a new file named **index.html** and add the following HTML:

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

### Launch the application

It’s always a good idea to develop iteratively and check how things look. Let’s launch our application. There’s a great Visual Studio Code extension called [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) that hosts your application locally and refreshes the browser whenever you save.

- Install [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) by clicking **Install** on the linked page.
  - Your browser will prompt you to open Visual Studio Code, and Visual Studio Code will prompt you to install the extension.
  - Restart Visual Studio Code if prompted.
- Once installed, press Ctrl-Shift-P (or Cmd-Shift-P) in Visual Studio Code to open the command palette.
- Type **Live Server: Open with Live Server**.
  - Live Server will start hosting your application.
- Open a browser and navigate to **https://localhost:5500**.
- You should now see the page you created!

Let’s add some functionality.

## Add the CSS

With the HTML in place, let’s add CSS for basic styling. We’ll highlight the word the player should type and change the textbox color if the player types incorrectly. We’ll do this using two classes.

Create a new file named **style.css** and add the following syntax:

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

✅ Feel free to customize the CSS to make the page more visually appealing:

- Choose a different font.
- Add colors to the headers.
- Adjust the sizes of elements.

## JavaScript

With the UI ready, let’s focus on the JavaScript logic. We’ll break this into a few steps:

- [Create the constants](../../../../4-typing-game/typing-game)
- [Add an event listener to start the game](../../../../4-typing-game/typing-game)
- [Add an event listener for typing](../../../../4-typing-game/typing-game)

First, create a new file named **script.js**.

### Add the constants

We’ll need a few constants to simplify our programming. Think of these as the ingredients for our recipe:

- An array containing all the quotes.
- An empty array to store the words of the current quote.
- A variable to track the index of the word the player is typing.
- A variable to store the time when the player clicked start.

We’ll also need references to the UI elements:

- The textbox (**typed-value**).
- The quote display (**quote**).
- The message display (**message**).

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

✅ Add more quotes to make your game more interesting.

> **NOTE:** While we can retrieve elements in code using `document.getElementById`, we’ll use constants to avoid typos when referencing these elements repeatedly. Frameworks like [Vue.js](https://vuejs.org/) or [React](https://reactjs.org/) can help centralize your code for better management.

Take a moment to watch a video about using `const`, `let`, and `var`:

[![Types of variables](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Types of variables")

> 🎥 Click the image above to watch the video.

### Add start logic

The game begins when the player clicks the start button. Since we don’t know when they’ll click it, we’ll use an [event listener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener). This listener will execute code when the user clicks start.

When the user clicks **start**, we’ll select a quote, set up the UI, and initialize tracking for the current word and timing. Add the following JavaScript, and we’ll explain it afterward:

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

Here’s what the code does:

- **Word tracking setup:**
  - Use [Math.floor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) and [Math.random](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random) to randomly select a quote from the `quotes` array.
  - Convert the `quote` into an array of `words` to track the player’s progress.
  - Set `wordIndex` to 0, as the player starts with the first word.
- **UI setup:**
  - Create an array of `spanWords`, where each word is wrapped in a `span` element for highlighting.
  - Use `join` to create a string and update the `innerHTML` of `quoteElement` to display the quote.
  - Highlight the first word by setting its `className` to `highlight`.
  - Clear the `messageElement` by setting its `innerText` to an empty string.
- **Textbox setup:**
  - Clear the `value` of `typedValueElement`.
  - Set focus to `typedValueElement`.
- **Start the timer:** Call `getTime`.

### Add typing logic

As the player types, an `input` event is triggered. This event listener will check if the player is typing correctly and handle the game’s current state. Add the following code to the end of **script.js**, and we’ll explain it afterward:

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

Here’s what the code does:

- **Quote completion:** If `typedValue` matches `currentWord` and `wordIndex` is the last word in `words`:
  - Calculate `elapsedTime` by subtracting `startTime` from the current time.
  - Convert `elapsedTime` from milliseconds to seconds.
  - Display a success message.
- **Word completion:** If `typedValue` ends with a space and matches `currentWord`:
  - Clear the `value` of `typedElement` for the next word.
  - Increment `wordIndex` to move to the next word.
  - Reset the `className` of all `childNodes` in `quoteElement` to default.
  - Highlight the next word by setting its `className` to `highlight`.
- **Correct typing:** If `currentWord` starts with `typedValue`:
  - Clear the `className` of `typedValueElement` to display it normally.
- **Error:** If none of the above conditions are met:
  - Set the `className` of `typedValueElement` to `error`.

## Test your application

You’ve reached the end! The final step is to test your application. Try it out! Don’t worry if there are errors—**all developers** encounter them. Read the error messages and debug as needed.

Click **start** and begin typing! It should look similar to the animation shown earlier.

![Animation of the game in action](../../../../4-typing-game/images/demo.gif)

---

## 🚀 Challenge

Add more features:

- Disable the `input` event listener when the game is complete, and re-enable it when the button is clicked.
- Disable the textbox after the player completes the quote.
- Display a modal dialog box with the success message.
- Save high scores using [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/22)

## Review & Self Study

Learn about [all the events available](https://developer.mozilla.org/docs/Web/Events) to developers through the web browser, and think about situations where each one would be useful.

## Assignment

[Develop a new keyboard game](assignment.md)

---

**Disclaimer**:  
This document has been translated using the AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). While we aim for accuracy, please note that automated translations may include errors or inaccuracies. The original document in its native language should be regarded as the authoritative source. For critical information, professional human translation is advised. We are not responsible for any misunderstandings or misinterpretations resulting from the use of this translation.