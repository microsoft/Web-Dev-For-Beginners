# JavaScript Basics: Methods and Functions

![JavaScript Basics - Functions](../../sketchnotes/webdev101-js-functions.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## Pre-Lecture Quiz
[Pre-lecture quiz](https://ff-quizzes.netlify.app)

Ever felt like you're writing the same code over and over again? That's where functions come to the rescue! Think of functions like your favorite kitchen recipe – once you write it down, you can use it whenever you want to make that dish, and you can even share it with friends.

Functions let you bundle up pieces of code so you can reuse them throughout your program. Instead of copying and pasting the same logic everywhere (which gets messy fast), you can create a function once and call it whenever you need it. Pretty neat, right?

In this lesson, we'll explore how to create your own functions, pass information to them, and get useful results back. You'll discover the difference between functions and methods, learn some modern syntax tricks, and even see how functions can work with other functions. Don't worry if that sounds complex – we'll take it step by step, and soon you'll be writing functions like a pro!

[![Methods and Functions](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Methods and Functions")

> 🎥 Click the image above for a video about methods and functions.

> You can take this lesson on [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon)!

## Functions

So what exactly is a function? Think of it as a little worker in your code – a self-contained block that has one job and does it well whenever you ask.

Here's the magic: instead of writing the same code multiple times throughout your program, you can package it up in a function and just call that function whenever you need it. This keeps your code clean and makes updates much easier. Imagine if you had to change something and it was scattered across 20 different places – that's a debugging nightmare waiting to happen!

Naming your functions well is super important too. A good function name is like a clear label on a jar – you know exactly what's inside. When you see a function called `cancelTimer()`, you immediately know what it does, just like seeing a button labeled "Cancel timer" tells you exactly what will happen when you click it. 

## Creating and calling a function

Ready to create your first function? Don't worry – the syntax is pretty straightforward once you see it in action.

Here's what a basic function looks like:

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

Let's break this down:
- The `function` keyword tells JavaScript "Hey, I'm creating a function!"
- `nameOfFunction` is where you give your function a descriptive name
- The parentheses `()` are where you can add parameters (we'll get to that soon)
- The curly braces `{}` contain the actual code that runs when you call the function

Let's create a simple greeting function to see this in action:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

This function is pretty simple – it just prints "Hello, world!" to the console. The cool thing is, once we've defined it, we can use it as many times as we want!

To actually use (or "call") your function, you write its name followed by parentheses. JavaScript is pretty flexible – you can define your function before or after you call it, and JavaScript will figure it out.

```javascript
// calling our function
displayGreeting();
```

When you run this line, it executes all the code inside your `displayGreeting` function, which means "Hello, world!" appears in your browser's console. You can call this function as many times as you want!

> **Fun fact:** You've actually been using **methods** this whole time! `console.log()` is a method – it's basically a function that belongs to the `console` object. The main difference is that methods are attached to objects, while functions stand on their own. Don't worry too much about this distinction right now – many developers use the terms interchangeably.

### Function best practices

Here are a few tips to help you write great functions:

- Give your functions clear, descriptive names – your future self will thank you!
- Use **camelCasing** for multi-word names (like `calculateTotal` instead of `calculate_total`)
- Keep each function focused on doing one thing well

## Passing information to a function

Our `displayGreeting` function is nice, but it's a bit boring – it can only say "Hello, world!" to everyone. Wouldn't it be cool if we could make it more personal?

This is where **parameters** come in handy. Think of parameters like empty slots where you can plug in different values each time you use the function. This way, the same function can work with different information every time you call it.

You list parameters inside the parentheses when you define your function, separating multiple parameters with commas:

```javascript
function name(param, param2, param3) {

}
```

Each parameter acts like a placeholder – when someone calls your function, they'll provide actual values that get plugged into these spots.

Let's update our greeting function to accept someone's name:

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

Notice how we're using backticks (`` ` ``) and `${}` to insert the name directly into our message – this is called a template literal, and it's a really handy way to build strings with variables mixed in.

Now when we call our function, we can pass in any name we want:

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

JavaScript takes the string `'Christopher'`, plugs it into the `name` parameter, and creates the message "Hello, Christopher!" – much more personal!

## Default values

What if we want to make some parameters optional? That's where default values come in handy!

Let's say we want people to be able to customize the greeting word, but if they don't specify one, we'll just use "Hello" as a fallback. You can set up default values by using the equals sign, just like setting a variable:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

Here, `name` is still required, but `salutation` has a backup value of `'Hello'` if no one provides a different greeting.

Now we can call this function in two different ways:

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

In the first call, JavaScript uses the default "Hello" since we didn't specify a salutation. In the second call, it uses our custom "Hi" instead. Pretty flexible, right?

## Return values

Our functions so far have just been printing messages to the console, but what if you want a function to calculate something and give you back the result?

That's where **return values** come in. Instead of just displaying something, a function can hand you back a value that you can store in a variable or use in other parts of your code.

To send a value back, you use the `return` keyword followed by whatever you want to return:

```javascript
return myVariable;
```

Here's something important: when a function hits a `return` statement, it immediately stops running and sends that value back to whoever called it.

Let's modify our greeting function to return the message instead of printing it:

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

Now instead of printing the greeting, this function creates the message and hands it back to us.

To use the returned value, we can store it in a variable just like any other value:

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

Now `greetingMessage` contains "Hello, Christopher" and we can use it anywhere in our code – maybe to display it on a webpage, send it in an email, or use it in another function!

## Functions as parameters for functions

Here's where things get really interesting – you can actually pass functions to other functions! It might sound a bit mind-bending at first, but it's incredibly useful.

This pattern is super common when you want to say "when something happens, do this other thing." For example, "when the timer finishes, run this code" or "when the user clicks the button, call this function."

Let's look at `setTimeout`, which is a built-in function that waits a certain amount of time and then runs some code. We need to tell it what code to run – perfect use case for passing a function!

Try this code – after 3 seconds, you'll see a message:

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

Notice how we pass `displayDone` (without parentheses) to `setTimeout`. We're not calling the function ourselves – we're handing it over to `setTimeout` and saying "call this in 3 seconds."

### Anonymous functions

Sometimes you need a function for just one thing and don't want to give it a name. Think about it – if you're only using a function once, why clutter up your code with an extra name?

JavaScript lets you create **anonymous functions** – functions without names that you can define right where you need them.

Here's how we can rewrite our timer example using an anonymous function:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

Same result, but now we've defined the function right inside the `setTimeout` call. No separate function declaration needed!

### Fat arrow functions

Modern JavaScript has an even shorter way to write functions called **arrow functions**. They use `=>` (which looks like an arrow – get it?) and are super popular with developers.

Arrow functions let you skip the `function` keyword and write more concise code.

Here's our timer example using an arrow function:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

The `()` is where parameters would go (empty in this case), then comes the arrow `=>`, and finally the function body in curly braces. Same functionality, just more compact!

### When to use each strategy

So when should you use each approach? Here's a simple rule of thumb: if you'll use the function multiple times, give it a name and define it separately. If it's just for one specific spot, go with an anonymous function. As for arrow functions vs traditional syntax, both work fine – though you'll see arrow functions everywhere in modern JavaScript code.

---



## 🚀 Challenge

Can you articulate in one sentence the difference between functions and methods? Give it a try!

## GitHub Copilot Agent Challenge 🚀

Use the Agent mode to complete the following challenge:

**Description:** Create a utility library of mathematical functions that demonstrates different function concepts covered in this lesson, including parameters, default values, return values, and arrow functions.

**Prompt:** Create a JavaScript file called `mathUtils.js` that contains the following functions:
1. A function `add` that takes two parameters and returns their sum
2. A function `multiply` with default parameter values (second parameter defaults to 1)
3. An arrow function `square` that takes a number and returns its square
4. A function `calculate` that accepts another function as a parameter and two numbers, then applies the function to those numbers
5. Demonstrate calling each function with appropriate test cases

Learn more about [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) here.

## Post-Lecture Quiz
[Post-lecture quiz](https://ff-quizzes.netlify.app)

## Review & Self Study

It's worth [reading up a little more on arrow functions](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), as they are increasingly used in code bases. Practice writing a function, and then rewriting it with this syntax.

## Assignment

[Fun with Functions](assignment.md)
