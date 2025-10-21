# JavaScript Basics: Data Types

![JavaScript Basics - Data types](../../sketchnotes/webdev101-js-datatypes.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

Hey there! Ready to dive into one of the most important concepts in JavaScript? Data types might sound intimidating, but they're actually pretty straightforward once you get the hang of them. Think of data types like different containers in your kitchen – you wouldn't store soup in a colander or use a wine glass for cereal, right? JavaScript works the same way with different kinds of information!

In this lesson, we'll explore the core data types that make JavaScript tick. You'll learn how to work with numbers, text, true/false values, and discover why choosing the right type matters. Don't worry if some concepts seem tricky at first – we'll take it step by step, and I promise you'll be working with data types like a pro by the end!

What's really cool is that understanding data types will make everything else in JavaScript so much easier. It's like learning the alphabet before writing stories – these fundamentals will support everything you build going forward. Let's jump in and start exploring these digital building blocks!

## Pre-Lecture Quiz
[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/)

This lesson covers the basics of JavaScript, the language that provides interactivity on the web.

> You can take this lesson on [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-variables/?WT.mc_id=academic-77807-sagibbon)!

[![Variables](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Variables in JavaScript")

[![Data Types in JavaScript](https://img.youtube.com/vi/AWfA95eLdq8/0.jpg)](https://youtube.com/watch?v=AWfA95eLdq8 "Data Types in JavaScript")

> 🎥 Click the images above for videos about variables and data types

Let's start with variables and the data types that populate them!

## Variables

Let's talk about variables – they're honestly one of the coolest things about programming! Imagine you have a bunch of sticky notes where you can write down important information and stick them wherever you need them. That's basically what variables do in your code.

Variables let you store information and give it a name so you can find it later. Want to remember someone's age? Store it in a variable called `age`. Need to keep track of a user's name? Pop it into a variable called `userName`. It's that simple!

Now, here's where it gets interesting – we're going to learn the modern way to create variables in JavaScript. Trust me, once you see how clean and logical this is, you'll wonder how people ever coded without these techniques.

Creating and **declaring** a variable has the following syntax **[keyword] [name]**. It's made up of the two parts:

- **Keyword**. Use `let` for variables that can change, or `const` for values that stay the same.
- **The variable name**, this is a descriptive name you choose yourself.

✅ The keyword `let` was introduced in ES6 and gives your variable a so called _block scope_. It's recommended that you use `let` or `const` instead of the older `var` keyword. We will cover block scopes more in depth in future parts.

### Task - working with variables

1. **Declare a variable**. Let's start by creating our first variable:

    ```javascript
    let myVariable;
    ```

   **What just happened?**
   - We told JavaScript "Hey, I want to create a storage spot called `myVariable`"
   - JavaScript said "Sure!" and set aside some space in memory
   - Right now it's empty (undefined), but we'll fix that in a moment

2. **Give it a value**. Now let's put something in our variable:

    ```javascript
    myVariable = 123;
    ```

   **Here's the magic:**
   - That `=` sign is like saying "myVariable, please hold onto this number 123 for me"
   - Now our variable has a real value instead of being empty
   - We can use this number 123 anywhere in our code by just typing `myVariable`

   > Note: the use of `=` in this lesson means we make use of an "assignment operator", used to set a value to a variable. It doesn't denote equality.

3. **Do it the smart way**. Actually, let's combine those two steps:

    ```javascript
    let myVariable = 123;
    ```

    **Much cleaner, right?**
    - We're creating the variable AND giving it a value in one line
    - This is how most developers write their code
    - Less typing, same result – I love efficiency!

4. **Change your mind**. What if we want to store a different number?

   ```javascript
   myVariable = 321;
   ```

   **Pretty cool, huh?**
   - Our variable now holds 321 instead of 123
   - The old value is gone – variables can only hold one thing at a time
   - This flexibility is why we use `let` – it lets us change the value whenever we need to

   ✅ Try it! You can write JavaScript right in your browser. Open a browser window and navigate to Developer Tools. In the console, you will find a prompt; type `let myVariable = 123`, press return, then type `myVariable`. What happens? Note, you'll learn more about these concepts in subsequent lessons.

## Constants

Now, what if you have some information that should NEVER change? Like the value of pi, or your app's name, or the number of days in a week? That's where constants come in!

Constants are like variables with a superpower – once you set their value, they become locked in place. No accidental changes, no oops moments. It's JavaScript's way of helping you protect important values from getting messed up by mistake.

Declaration and initialization of a constant follows the same concepts as a variable, with the exception of the `const` keyword. Constants are typically declared with all uppercase letters.

```javascript
const MY_VARIABLE = 123;
```

**Here's what this code does:**
- **Creates** a constant named `MY_VARIABLE` with the value 123
- **Uses** uppercase naming convention for constants
- **Prevents** any future changes to this value

Constants have two main rules:

- **You must give them a value right away** – no empty constants allowed!
- **You can never change that value** – JavaScript will throw an error if you try. Let's see what I mean:

   **Simple value** - The following is NOT allowed:
   
      ```javascript
      const PI = 3;
      PI = 4; // not allowed
      ```

   **What you need to remember:**
   - **Attempts** to reassign a constant will cause an error
   - **Protects** important values from accidental changes
   - **Ensures** the value remains consistent throughout your program
 
   **Object reference is protected** - The following is NOT allowed:
   
      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // not allowed
      ```

   **Understanding these concepts:**
   - **Prevents** replacing the entire object with a new one
   - **Protects** the reference to the original object
   - **Maintains** the object's identity in memory

    **Object value is not protected** - The following IS allowed:
    
      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // allowed
      ```

      **Breaking down what happens here:**
      - **Modifies** the property value inside the object
      - **Keeps** the same object reference
      - **Demonstrates** that object contents can change while the reference stays constant

   > Note, a `const` means the reference is protected from reassignment. The value is not _immutable_ though and can change, especially if it's a complex construct like an object.

## Data Types

Alright, here's where things get really interesting! JavaScript has different categories for different kinds of information – we call these data types. Just like you wouldn't try to wear a book or read a shoe, JavaScript knows that numbers, text, and true/false values all need to be handled differently.

Why does this matter? Well, imagine trying to do math with someone's name, or trying to capitalize a number – it just doesn't make sense! When you understand data types, you'll write code that actually works and avoid those "wait, why isn't this working?" moments that every developer has experienced.

Variables can store many different types of values, like numbers and text. These various types of values are known as the **data type**. Data types are an important part of software development because it helps developers make decisions on how the code should be written and how the software should run. Furthermore, some data types have unique features that help transform or extract additional information in a value.

✅ Data Types are also referred to as JavaScript data primitives, as they are the lowest-level data types that are provided by the language. There are 7 primitive data types: string, number, bigint, boolean, undefined, null and symbol. Take a minute to visualize what each of these primitives might represent. What is a `zebra`? How about `0`? `true`?

### Numbers

Let's start with numbers – they're probably the most straightforward data type. Whether you're working with whole numbers like 42, decimals like 3.14, or even negative numbers like -5, JavaScript treats them all the same way. No fuss, no complications!

Remember our variable from earlier? That 123 we stored was actually a number data type:

```javascript
let myVariable = 123;
```

**What's cool about this:**
- JavaScript automatically recognizes 123 as a number
- We can now do math with this variable
- No need to tell JavaScript "hey, this is a number" – it just knows!

Variables can store all types of numbers, including decimals or negative numbers. Numbers also can be used with arithmetic operators, covered in the [next section](#arithmetic-operators).

### Arithmetic Operators

Time for some math! Don't worry – this is the fun kind of math where you get to make the computer do all the work. Arithmetic operators are just the symbols you use to do calculations, like the ones you learned way back in elementary school.

The best part? They work exactly like you'd expect them to. Plus becomes addition, minus becomes subtraction – no surprises here!

There are several types of operators to use when performing arithmetic functions, and some are listed here:

| Symbol | Description                                                              | Example                          |
| ------ | ------------------------------------------------------------------------ | -------------------------------- |
| `+`    | **Addition**: Calculates the sum of two numbers                          | `1 + 2 //expected answer is 3`   |
| `-`    | **Subtraction**: Calculates the difference of two numbers                | `1 - 2 //expected answer is -1`  |
| `*`    | **Multiplication**: Calculates the product of two numbers                | `1 * 2 //expected answer is 2`   |
| `/`    | **Division**: Calculates the quotient of two numbers                     | `1 / 2 //expected answer is 0.5` |
| `%`    | **Remainder**: Calculates the remainder from the division of two numbers | `1 % 2 //expected answer is 1`   |

✅ Try it! Try an arithmetic operation in your browser's console. Do the results surprise you?

### Strings

Now let's talk about text! In JavaScript, any piece of text – whether it's a single letter, a word, or an entire novel – is called a string. The name is pretty cute when you think about it: imagine letters strung together like beads on a necklace.

Strings are absolutely everywhere in web development. Every piece of text you see on a website – usernames, button labels, error messages, content – it's all strings. Master strings, and you're well on your way to building amazing user experiences!

Strings are sets of characters that reside between single or double quotes.

```javascript
'This is a string'
"This is also a string"
let myString = 'This is a string value stored in a variable';
```

**Understanding these concepts:**
- **Uses** either single quotes `'` or double quotes `"` to define strings
- **Stores** text data that can include letters, numbers, and symbols
- **Assigns** string values to variables for later use
- **Requires** quotes to distinguish text from variable names

Remember to use quotes when writing a string, or else JavaScript will assume it's a variable name.

### Formatting Strings

Here's where strings get really powerful – you can combine them, mix in variables, and create dynamic text that changes based on what's happening in your program. It's like being able to construct sentences on the fly!

Let's see how this works. Sometimes you need to join strings together – we call this concatenation (fancy word for "sticking things together").

To **concatenate** two or more strings, or join them together, use the `+` operator.

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!
```

**Step by step, here's what's happening:**
- **Combines** multiple strings using the `+` operator
- **Joins** strings directly together without spaces in the first example
- **Adds** space characters `" "` between strings for readability
- **Inserts** punctuation like commas to create proper formatting

✅ Why does `1 + 1 = 2` in JavaScript, but `'1' + '1' = 11?` Think about it. What about `'1' + 1`?

**Template literals** are another way to format strings, except instead of quotes, the backtick  is used. Anything that is not plain text must be placed inside placeholders `${ }`. This includes any variables that may be strings.

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
```

**Let's understand each part:**
- **Uses** backticks `` ` `` instead of regular quotes to create template literals
- **Embeds** variables directly using `${}` placeholder syntax
- **Preserves** spaces and formatting exactly as written
- **Provides** a cleaner way to create complex strings with variables

You can achieve your formatting goals with either method, but template literals will respect any spaces and line breaks.

✅ When would you use a template literal vs. a plain string?

### Booleans

Let's talk about the simplest but most powerful data type: booleans! These little guys can only be one of two things – `true` or `false`. That's it. No maybes, no sort-ofs, just yes or no.

Don't let their simplicity fool you though. Booleans are the decision-makers of the programming world. Every time your code needs to choose between two options – "Is the user logged in?", "Did they click the button?", "Is it daytime?" – booleans are there making it happen.

Booleans can be only two values: `true` or `false`. Booleans can help make decisions on which lines of code should run when certain conditions are met. In many cases, [operators](#arithmetic-operators) assist with setting the value of a Boolean and you will often notice and write variables being initialized or their values being updated with an operator.

```javascript
let myTrueBool = true;
let myFalseBool = false;
```

**In the above, we've:**
- **Created** a variable that stores the Boolean value `true`
- **Demonstrated** how to store the Boolean value `false`
- **Used** the exact keywords `true` and `false` (no quotes needed)
- **Prepared** these variables for use in conditional statements

✅ A variable can be considered 'truthy' if it evaluates to a boolean `true`. Interestingly, in JavaScript, [all values are truthy unless defined as falsy](https://developer.mozilla.org/docs/Glossary/Truthy).

---

## GitHub Copilot Agent Challenge 🚀

Use the Agent mode to complete the following challenge:

**Description:** Create a personal information manager that demonstrates all the JavaScript data types you've learned in this lesson while handling real-world data scenarios.

**Prompt:** Build a JavaScript program that creates a user profile object containing: a person's name (string), age (number), is a student status (boolean), favorite colors as an array, and an address object with street, city, and zip code properties. Include functions to display the profile information and update individual fields. Make sure to demonstrate string concatenation, template literals, arithmetic operations with the age, and boolean logic for the student status.

## 🚀 Challenge

Ready for a fun detective mission? JavaScript has some quirky behaviors that can catch even experienced developers off guard! Here's a classic one to get you started: try typing this in your browser console: `let age = 1; let Age = 2; age == Age` and see what happens. Spoiler alert: it returns `false` – can you figure out why?

This is just the tip of the iceberg. JavaScript has some wonderfully weird behaviors that once you know about them, you'll be prepared for anything. Happy hunting!

## Post-Lecture Quiz
[Post-lecture quiz](https://ff-quizzes.netlify.app)

## Review & Self Study

Take a look at [this list of JavaScript exercises](https://css-tricks.com/snippets/javascript/) and try one. What did you learn?

## Assignment

[Data Types Practice](assignment.md)
