<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "92e136090efc4341b1d51c37924c1802",
  "translation_date": "2025-08-29T13:22:34+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "en"
}
-->
# JavaScript Basics: Methods and Functions

![JavaScript Basics - Functions](../../../../translated_images/en/webdev101-js-functions.be049c4726e94f8b7605c36330ac42eeb5cd8ed02bcdd60fdac778174d6cb865.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## Pre-Lecture Quiz
[Pre-lecture quiz](https://ff-quizzes.netlify.app)

When writing code, we always want to ensure it’s easy to read. While it might seem counterintuitive, code is read far more often than it’s written. One essential tool in a developer’s toolbox for creating maintainable code is the **function**.

[![Methods and Functions](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Methods and Functions")

> 🎥 Click the image above for a video about methods and functions.

> You can take this lesson on [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon)!

## Functions

At its core, a function is a block of code that can be executed whenever needed. This is especially useful when we need to perform the same task multiple times. Instead of duplicating the logic in several places (which would make updates difficult later), we can centralize it in one location and call it whenever necessary. You can even call functions from within other functions!

Equally important is the ability to name a function. While this might seem trivial, the name acts as a quick way to document what the code does. Think of it like a label on a button. If I see a button labeled "Cancel timer," I immediately know it will stop the clock.

## Creating and calling a function

The syntax for a function looks like this:

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

If I wanted to create a function to display a greeting, it might look like this:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

To call (or invoke) the function, we use its name followed by `()`. It’s worth noting that the function can be defined either before or after it’s called; the JavaScript compiler will locate it for you.

```javascript
// calling our function
displayGreeting();
```

> **NOTE:** There’s a special type of function called a **method**, which you’ve already been using! For example, in the demo above, we used `console.log`. What makes a method different from a function is that a method is attached to an object (like `console` in this case), whereas a function is independent. Developers often use these terms interchangeably.

### Function best practices

Here are some best practices to keep in mind when creating functions:

- Always use descriptive names so it’s clear what the function does.
- Use **camelCasing** to combine words.
- Keep your functions focused on a specific task.

## Passing information to a function

To make a function more reusable, you’ll often want to pass information into it. For example, our `displayGreeting` function above only displays **Hello, world!**, which isn’t very flexible. If we want to allow someone to specify the name of the person being greeted, we can add a **parameter**. A parameter (sometimes called an **argument**) is additional information passed to a function.

Parameters are listed in the function definition within parentheses and are separated by commas, like this:

```javascript
function name(param, param2, param3) {

}
```

We can update our `displayGreeting` function to accept a name and display it.

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

When calling the function, we pass the parameter value inside the parentheses.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

## Default values

We can make our function even more flexible by adding additional parameters. But what if we don’t want to require every parameter to be specified? For example, in our greeting function, we might want the name to be required (since we need to know who we’re greeting), but allow the greeting itself to be optional. If no custom greeting is provided, we can use a default value instead. To set a default value for a parameter, we assign it a value in the function definition, like this: `parameterName = 'defaultValue'`. Here’s a full example:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

When calling the function, we can decide whether or not to provide a value for `salutation`.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

## Return values

So far, the functions we’ve created always output to the [console](https://developer.mozilla.org/docs/Web/API/console). This is fine for some cases, especially when creating functions that interact with other services. But what if we want a function to perform a calculation and return the result so we can use it elsewhere?

This is where **return values** come in. A return value is sent back by the function and can be stored in a variable, just like a string or number.

If a function returns something, the `return` keyword is used. The `return` keyword expects a value or reference to be returned, like this:

```javascript
return myVariable;
```  

We could create a function to generate a greeting message and return the result to the caller:

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

When calling this function, we store the result in a variable, just as we would with a static value (e.g., `const name = 'Christopher'`).

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

## Functions as parameters for functions

As you advance in programming, you’ll encounter functions that accept other functions as parameters. This is a handy technique, especially when we don’t know exactly when something will happen, but we know we need to perform an action in response.

For example, consider [setTimeout](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout), which starts a timer and executes code when the timer ends. We need to specify what code to execute, which is a perfect job for a function!

If you run the code below, you’ll see the message **3 seconds has elapsed** after 3 seconds.

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

### Anonymous functions

Let’s revisit the example above. We’re creating a function with a name that will only be used once. As our applications grow more complex, we might end up creating many single-use functions, which isn’t ideal. Fortunately, we don’t always need to give functions a name!

When passing a function as a parameter, we can skip creating it in advance and define it directly as part of the parameter. We use the `function` keyword, but we don’t assign a name.

Here’s the rewritten code using an anonymous function:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

If you run this code, you’ll get the same result. We’ve created a function without giving it a name!

### Fat arrow functions

Many programming languages, including JavaScript, offer a shortcut for defining functions called **arrow functions** or **fat arrow functions**. These use the `=>` symbol, which looks like an arrow—hence the name. By using `=>`, we can skip the `function` keyword.

Let’s rewrite the code one more time using a fat arrow function:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

### When to use each strategy

Now that you’ve seen three ways to pass a function as a parameter, you might wonder when to use each. If you know the function will be reused, define it as a regular function. If it’s only needed in one place, an anonymous function is usually the best choice. Whether you use a fat arrow function or the traditional `function` syntax is up to you, but most modern developers prefer `=>`.

---

## 🚀 Challenge

Can you explain the difference between functions and methods in one sentence? Give it a try!

## Post-Lecture Quiz
[Post-lecture quiz](https://ff-quizzes.netlify.app)

## Review & Self Study

It’s worth [reading more about arrow functions](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), as they are increasingly common in modern codebases. Practice writing a function and then rewriting it using this syntax.

## Assignment

[Fun with Functions](assignment.md)

---

**Disclaimer**:  
This document has been translated using the AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). While we strive for accuracy, please note that automated translations may contain errors or inaccuracies. The original document in its native language should be regarded as the authoritative source. For critical information, professional human translation is recommended. We are not responsible for any misunderstandings or misinterpretations resulting from the use of this translation.