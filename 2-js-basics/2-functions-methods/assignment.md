# Fun with Functions

## Instructions

In this assignment, you'll practice creating different types of functions to reinforce the concepts you've learned about JavaScript functions, parameters, default values, and return statements.

Create a JavaScript file called `functions-practice.js` and implement the following functions:

### Part 1: Basic Functions
1. **Create a function called `sayHello`** that doesn't take any parameters and simply logs "Hello!" to the console.

2. **Create a function called `introduceYourself`** that takes a `name` parameter and logs a message like "Hi, my name is [name]" to the console.

### Part 2: Functions with Default Parameters
3. **Create a function called `greetPerson`** that takes two parameters: `name` (required) and `greeting` (optional, defaults to "Hello"). The function should log a message like "[greeting], [name]!" to the console.

### Part 3: Functions that Return Values
4. **Create a function called `addNumbers`** that takes two parameters (`num1` and `num2`) and returns their sum.

5. **Create a function called `createFullName`** that takes `firstName` and `lastName` parameters and returns the full name as a single string.

### Part 4: Mix It All Together
6. **Create a function called `calculateTip`** that takes two parameters: `billAmount` (required) and `tipPercentage` (optional, defaults to 15). The function should calculate and return the tip amount.

### Part 5: Test Your Functions
Add function calls to test each of your functions and display the results using `console.log()`.

**Example test calls:**
```javascript
// Test your functions here
sayHello();
introduceYourself("Sarah");
greetPerson("Alex");
greetPerson("Maria", "Hi");

const sum = addNumbers(5, 3);
console.log(`The sum is: ${sum}`);

const fullName = createFullName("John", "Doe");
console.log(`Full name: ${fullName}`);

const tip = calculateTip(50);
console.log(`Tip for $50 bill: $${tip}`);
```

## Rubric

| Criteria | Exemplary | Adequate | Needs Improvement |
| -------- | --------- | -------- | ----------------- |
| **Function Creation** | All 6 functions are correctly implemented with proper syntax and naming conventions | 4-5 functions are correctly implemented with minor syntax issues | 3 or fewer functions implemented or major syntax errors |
| **Parameters & Default Values** | Correctly uses required parameters, optional parameters, and default values as specified | Uses parameters correctly but may have issues with default values | Incorrect or missing parameter implementation |
| **Return Values** | Functions that should return values do so correctly, and functions that shouldn't return values only perform actions | Most return values are correct with minor issues | Significant problems with return statements |
| **Code Quality** | Clean, well-organized code with meaningful variable names and proper indentation | Code works but could be cleaner or better organized | Code is difficult to read or poorly structured |
| **Testing** | All functions are tested with appropriate function calls and results are displayed clearly | Most functions are tested adequately | Limited or incorrect testing of functions |

## Bonus Challenges (Optional)

If you want to challenge yourself further:

1. **Create an arrow function version** of one of your functions
2. **Create a function that accepts another function as a parameter** (like the `setTimeout` examples from the lesson)
3. **Add input validation** to ensure your functions handle invalid inputs gracefully

---

> 💡 **Tip**: Remember to open your browser's developer console (F12) to see the output of your `console.log()` statements!