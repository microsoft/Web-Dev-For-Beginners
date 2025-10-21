# JavaScript Basics: Arrays and Loops

![JavaScript Basics - Arrays](../../sketchnotes/webdev101-js-arrays.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## Pre-Lecture Quiz
[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/13)

Ever wondered how websites keep track of shopping cart items or display your friend list? That's where arrays and loops come to the rescue! Arrays are like digital containers that hold multiple pieces of information, while loops are your coding superpowers that let you work with all that data without going crazy from repetition.

Together, these two concepts will completely change how you think about handling information in your programs. You'll go from manually writing out every single step to creating smart, efficient code that can process hundreds or even thousands of items in seconds.

By the time we're done here, you'll be amazed at what you can accomplish with just a few lines of code. Ready to unlock these programming superpowers? Let's dive in!

[![Arrays](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "Arrays")

[![Loops](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "Loops")

> 🎥 Click the images above for videos about arrays and loops.

> You can take this lesson on [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-arrays/?WT.mc_id=academic-77807-sagibbon)!

## Arrays

Think of arrays as your digital toolbox - instead of having one drawer for one tool, you get a whole toolbox that can hold as many tools as you need! In programming terms, arrays let you store multiple pieces of information in one neat package.

Whether you're building a photo gallery, managing a to-do list, or keeping track of high scores in a game, arrays are going to be your best friend. Let's see how they work!

✅ Arrays are all around us! Can you think of a real-life example of an array, such as a solar panel array?

### Creating Arrays

Creating an array is super simple - just use square brackets!

```javascript
// Empty array - like an empty shopping cart waiting for items
const myArray = [];
```

**What's happening here?**
You've just created an empty container using those square brackets `[]`. Think of it like getting a fresh, empty shopping cart at the store - it's ready to hold whatever you want to put in it!

But here's where it gets fun - you can fill your array right from the start!

```javascript
// Your ice cream shop's flavor menu
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// A user's profile info (mixing different types of data)
const userData = ["John", 25, true, "developer"];

// Test scores for your favorite class
const scores = [95, 87, 92, 78, 85];
```

**Cool things to notice:**
- You can store text, numbers, or even true/false values in the same array
- Just separate each item with a comma - easy!
- Arrays are perfect for keeping related information together

### Array Indexing

Here's something that might seem weird at first: arrays number their items starting from 0, not 1! I know, I know - it feels backwards, but you'll get used to it. Each spot in the array gets its own address number called an **index**.

| Index | Value | Description |
|-------|-------|-------------|
| 0 | "Chocolate" | First element |
| 1 | "Strawberry" | Second element |
| 2 | "Vanilla" | Third element |
| 3 | "Pistachio" | Fourth element |
| 4 | "Rocky Road" | Fifth element |

✅ Does it surprise you that arrays start at the zero index? In some programming languages, indexes start at 1. There's an interesting history around this, which you can [read on Wikipedia](https://en.wikipedia.org/wiki/Zero-based_numbering).

**Accessing Array Elements:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// Access individual elements using bracket notation
console.log(iceCreamFlavors[0]); // "Chocolate" - first element
console.log(iceCreamFlavors[2]); // "Vanilla" - third element
console.log(iceCreamFlavors[4]); // "Rocky Road" - last element
```

**Breaking down what happens here:**
- **Uses** square bracket notation with the index number to access elements
- **Returns** the value stored at that specific position in the array
- **Starts** counting from 0, making the first element index 0

**Modifying Array Elements:**

```javascript
// Change an existing value
iceCreamFlavors[4] = "Butter Pecan";
console.log(iceCreamFlavors[4]); // "Butter Pecan"

// Add a new element at the end
iceCreamFlavors[5] = "Cookie Dough";
console.log(iceCreamFlavors[5]); // "Cookie Dough"
```

**In the above, we've:**
- **Modified** the element at index 4 from "Rocky Road" to "Butter Pecan"
- **Added** a new element "Cookie Dough" at index 5
- **Expanded** the array length automatically when adding beyond current bounds

### Array Length and Common Methods

Arrays come with built-in properties and methods that make working with data much easier.

**Finding Array Length:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
console.log(iceCreamFlavors.length); // 5

// Length updates automatically as array changes
iceCreamFlavors.push("Mint Chip");
console.log(iceCreamFlavors.length); // 6
```

**Key points to remember:**
- **Returns** the total number of elements in the array
- **Updates** automatically when elements are added or removed
- **Provides** a dynamic count useful for loops and validation

**Essential Array Methods:**

```javascript
const fruits = ["apple", "banana", "orange"];

// Add elements
fruits.push("grape");           // Adds to end: ["apple", "banana", "orange", "grape"]
fruits.unshift("strawberry");   // Adds to beginning: ["strawberry", "apple", "banana", "orange", "grape"]

// Remove elements
const lastFruit = fruits.pop();        // Removes and returns "grape"
const firstFruit = fruits.shift();     // Removes and returns "strawberry"

// Find elements
const index = fruits.indexOf("banana"); // Returns 1 (position of "banana")
const hasApple = fruits.includes("apple"); // Returns true
```

**Understanding these methods:**
- **Adds** elements with `push()` (end) and `unshift()` (beginning)
- **Removes** elements with `pop()` (end) and `shift()` (beginning)
- **Locates** elements with `indexOf()` and checks existence with `includes()`
- **Returns** useful values like removed elements or position indexes

✅ Try it yourself! Use your browser's console to create and manipulate an array of your own creation.

## Loops

Remember being a kid and having to write "I will not talk in class" 100 times on the chalkboard? Imagine if you could just tell someone "write this sentence 100 times" and walk away. That's exactly what loops do for your code!

Loops are like having a super obedient assistant who never gets tired of doing the same thing over and over. Whether you need to check every item in a shopping cart or display all the photos in an album, loops have got your back.

JavaScript gives you several types of loops to choose from. Let's meet them and see which one fits different situations!

### For Loop

The `for` loop is like setting a timer - you know exactly how many times you want something to happen. It's super organized and predictable, which makes it perfect when you're working with arrays or need to count things.

**For Loop Structure:**

| Component | Purpose | Example |
|-----------|---------|----------|
| **Initialization** | Sets starting point | `let i = 0` |
| **Condition** | When to continue | `i < 10` |
| **Increment** | How to update | `i++` |

```javascript
// Counting from 0 to 9
for (let i = 0; i < 10; i++) {
  console.log(`Count: ${i}`);
}

// More practical example: processing scores
const testScores = [85, 92, 78, 96, 88];
for (let i = 0; i < testScores.length; i++) {
  console.log(`Student ${i + 1}: ${testScores[i]}%`);
}
```

**Step by step, here's what's happening:**
- **Initializes** the counter variable `i` to 0 at the start
- **Checks** the condition `i < 10` before each iteration
- **Executes** the code block when the condition is true
- **Increments** `i` by 1 after each iteration with `i++`
- **Stops** when the condition becomes false (when `i` reaches 10)

✅ Run this code in a browser console. What happens when you make small changes to the counter, condition, or iteration expression? Can you make it run backwards, creating a countdown?

### While Loop

The `while` loop is like saying "keep doing this until..." - you might not know exactly how many times it'll run, but you know when to stop. It's perfect for things like asking a user for input until they give you what you need, or searching through data until you find what you're looking for.

**While Loop Characteristics:**
- **Continues** executing as long as the condition is true
- **Requires** manual management of any counter variables
- **Checks** the condition before each iteration
- **Risks** infinite loops if the condition never becomes false

```javascript
// Basic counting example
let i = 0;
while (i < 10) {
  console.log(`While count: ${i}`);
  i++; // Don't forget to increment!
}

// More practical example: processing user input
let userInput = "";
let attempts = 0;
const maxAttempts = 3;

while (userInput !== "quit" && attempts < maxAttempts) {
  userInput = prompt(`Enter 'quit' to exit (attempt ${attempts + 1}):`);
  attempts++;
}

if (attempts >= maxAttempts) {
  console.log("Maximum attempts reached!");
}
```

**Understanding these examples:**
- **Manages** the counter variable `i` manually inside the loop body
- **Increments** the counter to prevent infinite loops
- **Demonstrates** practical use case with user input and attempt limiting
- **Includes** safety mechanisms to prevent endless execution

### Modern Loop Alternatives

JavaScript offers modern loop syntax that can make your code more readable and less error-prone.

**For...of Loop (ES6+):**

```javascript
const colors = ["red", "green", "blue", "yellow"];

// Modern approach - cleaner and safer
for (const color of colors) {
  console.log(`Color: ${color}`);
}

// Compare with traditional for loop
for (let i = 0; i < colors.length; i++) {
  console.log(`Color: ${colors[i]}`);
}
```

**Key advantages of for...of:**
- **Eliminates** index management and potential off-by-one errors
- **Provides** direct access to array elements
- **Improves** code readability and reduces syntax complexity

**forEach Method:**

```javascript
const prices = [9.99, 15.50, 22.75, 8.25];

// Using forEach for functional programming style
prices.forEach((price, index) => {
  console.log(`Item ${index + 1}: $${price.toFixed(2)}`);
});

// forEach with arrow functions for simple operations
prices.forEach(price => console.log(`Price: $${price}`));
```

**What you need to know about forEach:**
- **Executes** a function for each array element
- **Provides** both element value and index as parameters
- **Cannot** be stopped early (unlike traditional loops)
- **Returns** undefined (doesn't create a new array)

✅ Why would you choose a for loop vs. a while loop? 17K viewers had the same question on StackOverflow, and some of the opinions [might be interesting to you](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript).

## Loops and Arrays

Combining arrays with loops creates powerful data processing capabilities. This pairing is fundamental to many programming tasks, from displaying lists to calculating statistics.

**Traditional Array Processing:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// Classic for loop approach
for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(`Flavor ${i + 1}: ${iceCreamFlavors[i]}`);
}

// Modern for...of approach
for (const flavor of iceCreamFlavors) {
  console.log(`Available flavor: ${flavor}`);
}
```

**Let's understand each approach:**
- **Uses** array length property to determine loop boundary
- **Accesses** elements by index in traditional for loops
- **Provides** direct element access in for...of loops
- **Processes** each array element exactly once

**Practical Data Processing Example:**

```javascript
const studentGrades = [85, 92, 78, 96, 88, 73, 89];
let total = 0;
let highestGrade = studentGrades[0];
let lowestGrade = studentGrades[0];

// Process all grades with a single loop
for (let i = 0; i < studentGrades.length; i++) {
  const grade = studentGrades[i];
  total += grade;
  
  if (grade > highestGrade) {
    highestGrade = grade;
  }
  
  if (grade < lowestGrade) {
    lowestGrade = grade;
  }
}

const average = total / studentGrades.length;
console.log(`Average: ${average.toFixed(1)}`);
console.log(`Highest: ${highestGrade}`);
console.log(`Lowest: ${lowestGrade}`);
```

**Here's how this code works:**
- **Initializes** tracking variables for sum and extremes
- **Processes** each grade with a single efficient loop
- **Accumulates** the total for average calculation
- **Tracks** highest and lowest values during iteration
- **Calculates** final statistics after loop completion

✅ Experiment with looping over an array of your own making in your browser's console.

---

## GitHub Copilot Agent Challenge 🚀

Use the Agent mode to complete the following challenge:

**Description:** Build a comprehensive data processing function that combines arrays and loops to analyze a dataset and generate meaningful insights.

**Prompt:** Create a function called `analyzeGrades` that takes an array of student grade objects (each containing name and score properties) and returns an object with statistics including the highest score, lowest score, average score, count of students who passed (score >= 70), and an array of student names who scored above average. Use at least two different loop types in your solution.

Learn more about [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) here.

## 🚀 Challenge

JavaScript offers several modern array methods that can replace traditional loops for specific tasks. Explore [forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of), [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [filter](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), and [reduce](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce). 

**Here's your mission (if you choose to accept it):** Take that student grades example and give it a modern makeover using at least three different array methods. You'll be amazed at how much cleaner and more readable your code becomes!

## Post-Lecture Quiz
[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/14)


## Review & Self Study

Arrays in JavaScript have many methods attached to them, that are extremely useful for data manipulation. [Read up on these methods](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) and try some of them out (like push, pop, slice and splice) on an array of your creation.

## Assignment

[Loop an Array](assignment.md)
