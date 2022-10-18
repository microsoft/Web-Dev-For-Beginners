# JavaScript Basics: Making Decisions

![JavaScript Basics - Making decisions](../../sketchnotes/webdev101-js-decisions.png)

> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/11)

Making decisions and controlling the order in which your code runs makes your code reusable and robust. This section covers the syntax for controlling data flow in JavaScript and its significance when used with Boolean data types

[![Making Decisions](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Making Decisions")

> 🎥 Click the image above for a video about making decisions.

> You can take this lesson on [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-13441-cxa)!

## A Brief Recap on Booleans

Booleans can be only two values: `true` or `false`. Booleans help make decisions on which lines of code should run when certain conditions are met.

Set your boolean to be true or false like this:

`let myTrueBool = true`
`let myFalseBool = false`

✅ Booleans are named after the English mathematician, philosopher and logician George Boole (1815–1864).

## Comparison Operators and Booleans

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

The if statement will run code in between its blocks if the condition is true.

```javascript
if (condition) {
  //Condition was true. Code in this block will run.
}
```

Logical operators are often used to form the condition.

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice) {
  //Condition was true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

## If..Else Statement

The `else` statement will run the code in between its blocks when the condition is false. It's optional with an `if` statement.

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice) {
  //Condition was true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  //Condition was false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

✅ Test your understanding of this code and the following code by running it in a browser console. Change the values of the currentMoney and laptopPrice variables to change the returned `console.log()`.

## Switch Statement

The switch statement evaluates an expression, matching the expression's value against a series of 'case' clauses, and executes the first case clause with with a matching value, until a break statement is encountered.

The default clause is used to command the browser, what to do when none of the cases match with the expression.

Following is the syntax of using switch-case statement

```javascript
switch (expression) {
  case value1:
    // block of code, executed when expression matches value1
    [break]
  case value1:
    // block of code, executed when expression matches value2
    [break]
  ...
  case valueN:
    // block of code, executed when expression matches valueN
    [break]
  [default:
    // block of code, executed when expression doesn't matches any case.
    [break]]
}
```

the default clause if always executed even if any of the cases are true, so we need to break statement to explicitly skip the execution of default

Let's see an example

```javascript
let runs = prompt("Enter runs ");
runs = Number.parseInt(runs);
switch (runs) {
  case 50:
    // Block executed when runs==50
    console.log("Half Century");
    break;
  case 100:
    // Block executed when runs==100
    console.log("Century");
    break;
  case 200:
    // Block executed when runs==200
    console.log("Double Cnetury");
    break;
  default:
    console.log("Score more runs");
}
```

## Logical Operators and Booleans

Decisions might require more than one comparison, and can be strung together with logical operators to produce a Boolean value.

| Symbol | Description                                                                                     | Example                                                                 |
| ------ | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `&&`   | **Logical AND**: Compares two Boolean expressions. Returns true **only** if both sides are true | `(5 > 6) && (5 < 6 ) //One side is false, other is true. Returns false` |
| `\|\|` | **Logical OR**: Compares two Boolean expressions. Returns true if at least one side is true     | `(5 > 6) \|\| (5 < 6) //One side is false, other is true. Returns true` |
| `!`    | **Logical NOT**: Returns the opposite value of a Boolean expression                             | `!(5 > 6) // 5 is not greater than 6, but "!" will return true`         |

## Conditions and Decisions with Logical Operators

Logical operators can be used to form conditions in if..else statements.

```javascript
let currentMoney;
let laptopPrice;
let laptopDiscountPrice = laptopPrice - laptopPrice * 0.2; //Laptop price at 20 percent off

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice) {
  //Condition was true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  //Condition was true. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

### Negation operator

You've seen so far how if you can use an `if...else` statement to create conditional logic. Anything that goes into an `if` needs to evaluate to true/false. By using the `!` operator you can _negate_ the expression. It would look like so:

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

### Ternary expressions

`if...else` isn't the only way to express decision logic. You can also use something called a ternary operator. The syntax for it looks like this:

```javascript
let variable = condition ? <return this if true> : <return this if false>
```

Below is a more tangible example:

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ Take a minute to read this code a few times. Do you understand how these operators are working?

The above states that

- if `firstNumber` is larger than `secondNumber`
- then assign `firstNumber` to `biggestNumber`
- else assign `secondNumber`.

The ternary expression is just a compact way of writing the code below:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

---

## 🚀 Challenge

Create a program that is written first with logical operators, and then rewrite it using a ternary expression. What's your preferred syntax?

---

## Post-Lecture Quiz

[Post-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/12)

## Review & Self Study

Read more about the many operators available to the user [on MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators).

Go through Josh Comeau's wonderful [operator lookup](https://joshwcomeau.com/operator-lookup/)!

## Assignment

[Operators](assignment.md)
