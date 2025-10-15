# JavaScript Basics: Making Decisions

![JavaScript Basics - Making decisions](../../sketchnotes/webdev101-js-decisions.png)

> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

Making decisions is at the heart of programming and mirrors how we think in everyday life. Just as you decide what to wear based on the weather or which route to take based on traffic, your JavaScript programs need to make choices based on different conditions. This fundamental concept transforms static code into dynamic, intelligent applications that can respond to user input and changing circumstances.

In this lesson, you'll discover how to use conditional statements, comparison operators, and logical expressions to control the flow of your programs. You'll learn about `if` statements, `switch` statements, and the powerful logical operators that help your code make smart decisions. These tools will enable you to create programs that can evaluate situations and respond appropriately.

By the end of this lesson, you'll be writing JavaScript that can analyze data, validate user input, and execute different code paths based on various conditions. Let's explore how to give your programs the power of decision-making!

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/11)

Making decisions and controlling the order in which your code runs makes your code reusable and robust. This section covers the syntax for controlling data flow in JavaScript and its significance when used with Boolean data types

[![Making Decisions](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Making Decisions")

> 🎥 Click the image above for a video about making decisions.

> You can take this lesson on [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon)!

## A Brief Recap on Booleans

Before we dive into decision-making, let's revisit Boolean values from our previous lessons. Booleans are the foundation of all conditional logic in programming – they represent the simple concept of "yes or no," "true or false," or "on or off."

Booleans can have only two values: `true` or `false`. Booleans help make decisions on which lines of code should run when certain conditions are met.

Set your boolean to be true or false like this:

```javascript
let myTrueBool = true;
let myFalseBool = false;
```

**Here's what this code does:**
- **Creates** a variable `myTrueBool` and assigns the value `true`
- **Creates** a variable `myFalseBool` and assigns the value `false`
- **Uses** the `let` keyword to declare variables that can be changed later

✅ Booleans are named after the English mathematician, philosopher and logician George Boole (1815–1864).

## Comparison Operators and Booleans

Now that you understand Boolean values, let's explore how to create them using comparison operators. These operators are your tools for asking questions in code: "Is this number bigger than that one?" or "Are these two values the same?" Understanding these operators is crucial for writing effective conditional statements.

Operators are used to evaluate conditions by making comparisons that will create a Boolean value. The following is a list of operators that are frequently used.

| Symbol | Description                                                                                                                                                   | Example            |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `<`    | **Less than**: Compares two values and returns the `true` Boolean data type if the value on the left side is less than the right                              | `5 < 6 // true`    |
| `<=`   | **Less than or equal to**: Compares two values and returns the `true` Boolean data type if the value on the left side is less than or equal to the right      | `5 <= 6 // true`   |
| `>`    | **Greater than**: Compares two values and returns the `true` Boolean data type if the value on the left side is larger than the right                         | `5 > 6 // false`   |
| `>=`   | **Greater than or equal to**: Compares two values and returns the `true` Boolean data type if the value on the left side is larger than or equal to the right | `5 >= 6 // false`  |
| `===`  | **Strict equality**: Compares two values and returns the `true` Boolean data type if values on the right and left are equal AND are the same data type.       | `5 === 6 // false` |
| `!==`  | **Inequality**: Compares two values and returns the opposite Boolean value of what a strict equality operator would return                                    | `5 !== 6 // true`  |

✅ Check your knowledge by writing some comparisons in your browser's console. Does any returned data surprise you?

## If Statement

The `if` statement is your first tool for making decisions in JavaScript. Think of it as asking a question – if the answer is "yes" (true), then do something specific. This is the foundation of conditional logic and allows your programs to respond intelligently to different situations.

The `if` statement will run code in between its blocks if the condition is true.

```javascript
if (condition) {
  // Condition is true. Code in this block will run.
}
```

**Understanding this structure:**
- **Evaluates** the condition inside the parentheses `()`
- **Executes** the code inside the curly braces `{}` only if the condition is `true`
- **Skips** the code block entirely if the condition is `false`

Logical operators are often used to form the condition.

```javascript
let currentMoney = 1000;
let laptopPrice = 800;

if (currentMoney >= laptopPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

**In the above, we've:**
- **Declared** variables for current money and laptop price with realistic values
- **Used** the greater than or equal operator `>=` to compare values
- **Executed** the `console.log()` statement because `1000 >= 800` evaluates to `true`

## If..Else Statement

Sometimes you want your program to do one thing when a condition is true and something different when it's false. The `else` statement provides this "Plan B" – it ensures your program always has a response, regardless of whether the initial condition is met.

The `else` statement will run the code in between its blocks when the condition is false. It's optional with an `if` statement.

```javascript
let currentMoney = 500;
let laptopPrice = 800;

if (currentMoney >= laptopPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  // Condition is false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

**Breaking down what happens here:**
- **Compares** `currentMoney` (500) with `laptopPrice` (800)
- **Evaluates** the condition `500 >= 800` as `false`
- **Skips** the first code block because the condition failed
- **Executes** the `else` block, displaying "Can't afford a new laptop, yet!"

✅ Test your understanding of this code and the following code by running it in a browser console. Change the values of the currentMoney and laptopPrice variables to change the returned `console.log()`.

## Switch Statement

When you need to compare a single value against multiple possible options, the `switch` statement provides a cleaner alternative to multiple `if..else` statements. Think of it like a restaurant menu where you pick one option from many choices – the `switch` statement makes this type of decision-making more readable and organized.

The `switch` statement is used to perform different actions based on different conditions. Use the `switch` statement to select one of many code blocks to be executed.

```javascript
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

**Understanding the structure:**
- **Evaluates** the expression once at the beginning
- **Compares** the result against each `case` value
- **Executes** the matching case block and uses `break` to exit
- **Runs** the `default` block if no cases match

```javascript
// Program using switch statement for day of week
let dayNumber = 2;
let dayName;

switch (dayNumber) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  default:
    dayName = "Unknown day";
    break;
}
console.log(`Today is ${dayName}`);
```

**Step by step, here's what's happening:**
- **Declares** a variable `dayNumber` with the value `2`
- **Evaluates** the switch expression and finds the matching `case 2`
- **Assigns** "Tuesday" to the `dayName` variable
- **Exits** the switch block using the `break` statement
- **Displays** "Today is Tuesday" in the console

✅ Test your understanding of this code and the following code by running it in a browser console. Change the values of the variable a to change the returned `console.log()`.

## Logical Operators and Booleans

Real-world decisions often involve multiple conditions. For example, you might go to the beach if it's sunny AND warm, or you might stay home if it's raining OR snowing. Logical operators allow you to combine multiple conditions in your JavaScript programs, making your decision-making logic more sophisticated and realistic.

Decisions might require more than one comparison, and can be strung together with logical operators to produce a Boolean value.

| Symbol | Description                                                                                     | Example                                                                 |
| ------ | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `&&`   | **Logical AND**: Compares two Boolean expressions. Returns true **only** if both sides are true | `(5 > 3) && (5 < 10) // Both sides are true. Returns true` |
| `\|\|` | **Logical OR**: Compares two Boolean expressions. Returns true if at least one side is true     | `(5 > 10) \|\| (5 < 10) // One side is false, other is true. Returns true` |
| `!`    | **Logical NOT**: Returns the opposite value of a Boolean expression                             | `!(5 > 10) // 5 is not greater than 10, so "!" makes it true`         |

**Understanding these operators:**
- **Combines** multiple conditions using AND (`&&`) when all must be true
- **Offers** alternatives using OR (`||`) when at least one must be true
- **Reverses** logic using NOT (`!`) to flip true/false values

## Conditions and Decisions with Logical Operators

Now let's see how logical operators work in practice with `if..else` statements. By combining logical operators with conditional statements, you can create sophisticated decision-making logic that handles complex real-world scenarios.

Logical operators can be used to form conditions in `if..else` statements.

```javascript
let currentMoney = 600;
let laptopPrice = 800;
let laptopDiscountPrice = laptopPrice - (laptopPrice * 0.2); // Laptop price at 20 percent off

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  // Condition is false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

**Let's understand each part:**
- **Calculates** the discount price as 80% of original price (20% off)
- **Uses** the OR operator (`||`) to check if either condition is true
- **Evaluates** whether current money covers the full price OR the discount price
- **Executes** "Getting a new laptop!" because `600 >= 640` (discount price) is true

### Negation Operator

Sometimes it's easier to think about when something is NOT true rather than when it IS true. The negation operator (`!`) flips the logic, allowing you to write more intuitive conditions. For example, instead of checking "if user is not logged in," you can write "if not user is logged in."

You've seen so far how you can use an `if...else` statement to create conditional logic. Anything that goes into an `if` needs to evaluate to true/false. By using the `!` operator you can _negate_ the expression. It would look like so:

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

**Key points to remember:**
- **Flips** the Boolean value: `!true` becomes `false`, `!false` becomes `true`
- **Reads** naturally: "if not condition" makes logical sense
- **Simplifies** logic when you want to check for the absence of something

### Ternary Expressions

For simple `if...else` decisions, JavaScript offers a more concise syntax called the ternary operator. Think of it as a shorthand way to write conditional assignments – it's particularly useful when you need to assign one of two values to a variable based on a condition.

`if...else` isn't the only way to express decision logic. You can also use something called a ternary operator. The syntax for it looks like this:

```javascript
let variable = condition ? returnThisIfTrue : returnThisIfFalse;
```

**Understanding the structure:**
- **Evaluates** the condition before the question mark `?`
- **Returns** the first value (after `?`) if condition is true
- **Returns** the second value (after `:`) if condition is false

Below is a more tangible example:

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ Take a minute to read this code a few times. Do you understand how these operators are working?

The above states that:
- **Checks** if `firstNumber` is larger than `secondNumber`
- **Assigns** `firstNumber` to `biggestNumber` if the condition is true
- **Assigns** `secondNumber` to `biggestNumber` if the condition is false

The ternary expression is just a compact way of writing the code below:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

**What you need to know:**
- **Provides** a concise alternative to simple `if...else` statements
- **Works** best for straightforward conditional assignments
- **Improves** code readability when used appropriately for simple conditions

---



## 🚀 Challenge

Create a program that is written first with logical operators, and then rewrite it using a ternary expression. What's your preferred syntax?

---

## GitHub Copilot Agent Challenge 🚀

Use the Agent mode to complete the following challenge:

**Description:** Create a comprehensive grade calculator that demonstrates multiple decision-making concepts from this lesson, including if-else statements, switch statements, logical operators, and ternary expressions.

**Prompt:** Write a JavaScript program that takes a student's numerical score (0-100) and determines their letter grade using the following criteria:
- A: 90-100
- B: 80-89  
- C: 70-79
- D: 60-69
- F: Below 60

Requirements:
1. Use an if-else statement to determine the letter grade
2. Use logical operators to check if the student passes (grade >= 60) AND has honors (grade >= 90)
3. Use a switch statement to provide specific feedback for each letter grade
4. Use a ternary operator to determine if the student is eligible for the next course (grade >= 70)
5. Include input validation to ensure the score is between 0 and 100

Test your program with various scores including edge cases like 59, 60, 89, 90, and invalid inputs.


## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/12)

## Review & Self Study

Read more about the many operators available to the user [on MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators).

Go through Josh Comeau's wonderful [operator lookup](https://joshwcomeau.com/operator-lookup/)!

## Assignment

[Operators](assignment.md)
