# JavaScript Basics: Making Decisions

![JavaScript Basics - Making decisions](../../sketchnotes/webdev101-js-decisions.png)

> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

Ever wonder how your favorite apps know what to show you? Like how Netflix suggests movies based on what you've watched, or how a weather app tells you whether to bring an umbrella? That's the magic of decision-making in code!

Just like you decide what to wear based on the weather or which route to take based on traffic, your JavaScript programs need to make choices based on different situations. This is what transforms boring, static code into smart, responsive applications that actually do useful things.

In this lesson, you'll learn how to give your code a brain! We'll explore conditional statements, comparison operators, and logical expressions that help your programs think through problems and respond appropriately. Think of these as the "if this, then that" rules that make your code intelligent.

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/11)

Making decisions and controlling which parts of your code run when is what makes programming really powerful. This section covers how to control the flow of your JavaScript programs using Boolean values (those true/false values we learned about before).

[![Making Decisions](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Making Decisions")

> 🎥 Click the image above for a video about making decisions.

> You can take this lesson on [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon)!

## A Brief Recap on Booleans

Before we jump into making decisions, let's quickly revisit those Boolean values we talked about earlier. Remember, Booleans are like digital switches – they're either on (`true`) or off (`false`). No middle ground, no "maybe" – just yes or no.

These simple true/false values are the foundation of all decision-making in programming. Every time your code needs to choose between doing something or not doing something, it comes down to a Boolean.

Creating Boolean variables is straightforward:

```javascript
let myTrueBool = true;
let myFalseBool = false;
```

Here we're creating two variables – one that's `true` and one that's `false`. Simple as that!

✅ Booleans are named after the English mathematician, philosopher and logician George Boole (1815–1864).

## Comparison Operators and Booleans

Now here's where it gets interesting! Most of the time, you won't manually set Booleans to `true` or `false`. Instead, you'll create them by asking questions in your code: "Is this number bigger than that one?" or "Are these two things equal?"

That's where comparison operators come in. Think of them as your code's way of asking questions and getting yes/no answers.

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

The `if` statement is like asking a question in your code. "If this condition is true, then do this thing." It's probably the most important tool you'll use for making decisions in JavaScript.

Here's how it works:

```javascript
if (condition) {
  // Condition is true. Code in this block will run.
}
```

The condition goes inside the parentheses, and if it's `true`, JavaScript runs the code inside the curly braces. If it's `false`, JavaScript just skips that whole block.

You'll often use comparison operators to create these conditions. Let's see a practical example:

```javascript
let currentMoney = 1000;
let laptopPrice = 800;

if (currentMoney >= laptopPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

Since `1000 >= 800` is `true`, the code inside the curly braces runs, and you'll see "Getting a new laptop!" in the console. Makes sense, right?

## If..Else Statement

But what if you want your program to do something different when the condition is false? That's where `else` comes in – it's like having a backup plan.

The `else` statement gives you a way to say "if this condition isn't true, do this other thing instead."

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

Now since `500 >= 800` is `false`, JavaScript skips the first block and runs the `else` block instead. You'll see "Can't afford a new laptop, yet!" in the console.

✅ Test your understanding of this code and the following code by running it in a browser console. Change the values of the currentMoney and laptopPrice variables to change the returned `console.log()`.

## Switch Statement

Sometimes you need to compare one value against several different options. You could write a bunch of `if..else` statements, but that gets messy quickly. The `switch` statement is like a clean, organized way to handle multiple choices.

Think of it like a vending machine – you press one button (the value), and the machine does the corresponding action for that specific button.

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

Here's how it's structured:
- JavaScript evaluates the expression once
- It looks through each `case` to find a match
- When it finds a match, it runs that code block
- The `break` tells JavaScript to stop and exit the switch
- If no cases match, it runs the `default` block (if you have one)

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

In this example, JavaScript sees that `dayNumber` is `2`, finds the matching `case 2`, sets `dayName` to "Tuesday", and then breaks out of the switch. The result? "Today is Tuesday" gets logged to the console.

✅ Test your understanding of this code and the following code by running it in a browser console. Change the values of the variable a to change the returned `console.log()`.

## Logical Operators and Booleans

Real life isn't usually about simple yes/no questions. You might decide to go to the beach if it's sunny AND warm, or stay inside if it's raining OR snowing. Programming works the same way – you often need to combine multiple conditions to make smart decisions.

That's where logical operators come in. They let you connect multiple true/false questions together.

| Symbol | Description                                                                                     | Example                                                                 |
| ------ | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `&&`   | **Logical AND**: Compares two Boolean expressions. Returns true **only** if both sides are true | `(5 > 3) && (5 < 10) // Both sides are true. Returns true` |
| `\|\|` | **Logical OR**: Compares two Boolean expressions. Returns true if at least one side is true     | `(5 > 10) \|\| (5 < 10) // One side is false, other is true. Returns true` |
| `!`    | **Logical NOT**: Returns the opposite value of a Boolean expression                             | `!(5 > 10) // 5 is not greater than 10, so "!" makes it true`         |

These operators let you combine conditions in useful ways:
- AND (`&&`) means both conditions must be true
- OR (`||`) means at least one condition must be true  
- NOT (`!`) flips true to false (and vice versa)

## Conditions and Decisions with Logical Operators

Let's see these logical operators in action with a more realistic example:

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

Here's what's happening: we calculate a 20% discount price (640), then check if our money covers either the full price OR the discounted price. Since 600 is enough for the discounted laptop at 640, the condition is true and we get the laptop!

### Negation Operator

Sometimes it's easier to think about when something is NOT true. Like instead of asking "Is the user logged in?", you might want to ask "Is the user NOT logged in?" The exclamation mark (`!`) operator flips the logic for you.

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

The `!` operator is like saying "the opposite of..." – if something is `true`, `!` makes it `false`, and vice versa.

### Ternary Expressions

For simple decisions, JavaScript has a shortcut called the **ternary operator**. It's like a mini `if..else` statement that fits on one line. Great for when you need to assign one of two values to a variable based on a condition.

```javascript
let variable = condition ? returnThisIfTrue : returnThisIfFalse;
```

It reads like a question: "Is this condition true? If yes, use this value. If no, use that value."

Below is a more tangible example:

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ Take a minute to read this code a few times. Do you understand how these operators are working?

Here's what this line is saying: "Is `firstNumber` greater than `secondNumber`? If yes, put `firstNumber` in `biggestNumber`. If no, put `secondNumber` in `biggestNumber`."

The ternary operator is just a shorter way to write this traditional `if..else` statement:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

Both approaches do exactly the same thing – the ternary operator is just more compact. Use whichever feels more readable to you!

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
