# JavaScript Basics: Methods and Functions

![JavaScript Basics - Functions](/sketchnotes/webdev101-js-functions.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## Pre-Lecture Quiz
[Pre-lecture quiz](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/9)

When we think about writing code, we always want to ensure our code is readable. While this sounds counterintuitive, code is read many more times than it's written. One core tool in a developer's toolbox to ensure maintainable code is the **function**.

[![Methods and Functions](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Methods and Functions")

> 🎥 Click the image above for a video about methods and functions.

> You can take this lesson on [Microsoft Learn](https://docs.microsoft.com/en-us/learn/modules/web-development-101-functions/?WT.mc_id=academic-13441-cxa)!

## Functions

At its core, a function is a block of code we can execute on demand. This is perfect for scenarios where we need to perform the same task multiple times; rather than duplicating the logic in multiple locations (which would make it hard to update when the time comes), we can centralize it in one location, and call it whenever we need the operation performed - you can even call functions from other functions!.

Just as important is the ability to name a function. While this might seem trivial, the name provides a quick way of documenting a section of code. You could think of this as a label on a button. If I click on a button which reads "Cancel timer", I know it's going to stop running the clock.

## Creating and calling a function

The syntax for a function looks like the following:

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

Whenever we want to call (or invoke) our function, we use the name of the function followed by `()`. It's worth noting the fact our function can be defined before or after we decide to call it; the JavaScript compiler will find it for you.

```javascript
// calling our function
displayGreeting();
```

> **NOTE:** There is a special type of function known as a **method**, which you've already been using! In fact, we saw this in our demo above when we used `console.log`. What makes a method different from a function is a method is attached to an object (`console` in our example), while a function is free floating. You will hear many developers use these terms interchangeably.

### Function best practices

There are a handful of best practices to keep in mind when creating functions

- As always, use descriptive names so you know what the function will do
- Use **camelCasing** to combine words
- Keep your functions focused on a specific task

## Passing information to a function

To make a function more reusable you'll often want to pass information into it. If we consider our `displayGreeting` example above, it will only display **Hello, world!**. Not the most useful function one could create. If we want to make it a little more flexible, like allowing someone to specify the name of the person to greet, we can add a **parameter**. A parameter (also sometimes called an **argument**), is additional information sent to a function.

Parameters are listed in the definition part within parenthesis and are comma separated like so:

```javascript
function name(param, param2, param3) {

}
```

We can update our `displayGreeting` to accept a name and have that displayed.

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

When we want to call our function and pass in the parameter, we specify it in the parenthesis.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

## Default values

We can make our function even more flexible by adding more parameters. But what if we don't want to require every value be specified? Keeping with our greeting example, we could leave name as required (we need to know who we're greeting), but we want to allow the greeting itself to be customized as desired. If someone doesn't want to customize it, we provide a default value instead. To provide a default value to a parameter, we set it much in the same way we set a value for a variable - `parameterName = 'defaultValue'`. To see a full example:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

When we call the function, we can then decide if we want to set a value for `salutation`.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

## Return values

Up until now the function we built will always output to the [console](https://developer.mozilla.org/docs/Web/API/console). Sometimes this can be exactly what we're looking for, especially when we create functions which will be calling other services. But what if I want to create a helper function to perform a calculation and provide the value back so I can use it elsewhere?

We can do this by using a **return value**. A return value is returned by the function, and can be stored in a variable just the same as we could store a literal value such as a string or number.

If a function does return something then the keyword `return` is used. The `return` keyword expects a value or reference of what's being returned like so:

```javascript
return myVariable;
```  

We could create a function to create a greeting message and return the value back to the caller

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

When calling this function we'll store the value in a variable. This is much the same way we'd set a variable to a static value (like `const name = 'Christopher'`).

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

## Functions as parameters for functions

As you progress in your programming career, you will come across functions which accept functions as parameters. This neat trick is commonly used when we don't know when something is going to occur or complete, but we know we need to perform an operation in response.

As an example, consider [setTimeout](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout), which begins a timer and will execute code when it completes. We need to tell it what code we want to execute. Sounds like a perfect job for a function!

If you run the code below, after 3 seconds you'll see the message **3 seconds has elapsed**.

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

### Anonymous functions

Let's take another look at what we've built. We're creating a function with a name which will be used one time. As our application gets more complex, we can see ourselves creating a lot of functions which will only be called once. This isn't ideal. As it turns out, we don't always need to provide a name!

When we are passing a function as a parameter we can bypass creating one in advance and instead build one as part of the parameter. We use the same `function` keyword, but instead we build it as a parameter.

Let's rewrite the code above to use an anonymous function:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

If you run our new code you'll notice we get the same results. We've created a function, but didn't have to give it a name!

### Fat arrow functions

One shortcut common in a lot of programming languages (including JavaScript) is the ability to use what's called an **arrow** or **fat arrow** function. It uses a special indicator of `=>`, which looks like an arrow - thus the name! By using `=>`, we are able to skip the `function` keyword.

Let's rewrite our code one more time to use a fat arrow function:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

### When to use each strategy

You've now seen we have three ways to pass a function as a parameter and might be wondering when to use each. If you know you'll be using the function more than once, create it as normal. If you'll be using it for just the one location, it's generally best to use an anonymous function. Whether or not you use a fat arrow function or the more traditional `function` syntax is up to you, but you will notice most modern developers prefer `=>`.

---

## 🚀 Challenge

Can you articulate in one sentence the difference between functions and methods? Give it a try!

## Post-Lecture Quiz
[Post-lecture quiz](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/10)

## Review & Self Study

It's worth [reading up a little more on arrow functions](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), as they are increasingly used in code bases. Practice writing a function, and then rewriting it with this syntax.

## Assignment

[Fun with Functions](assignment.md)
