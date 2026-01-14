<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8328f58f4593b4671656ff8f4b2edbd9",
  "translation_date": "2026-01-08T12:28:48+00:00",
  "source_file": "2-js-basics/2-functions-methods/assignment.md",
  "language_code": "pcm"
}
-->
# Fun wit Functions

## Instructions

For dis assignment, you go practice to create different kain functions to hala the concepts wey you don learn about JavaScript functions, parameters, default values, and return statements.

Create one JavaScript file wey dem dey call `functions-practice.js` and implement the following functions:

### Part 1: Basic Functions
1. **Create function wey dem go call `sayHello`** wey no go carry any parameters and e go just log "Hello!" for console.

2. **Create function wey dem go call `introduceYourself`** wey go carry one `name` parameter and e go log message like "Hi, my name na [name]" for console.

### Part 2: Functions with Default Parameters
3. **Create function wey dem go call `greetPerson`** wey go carry two parameters: `name` (wey suppose dey) and `greeting` (optional, default na "Hello"). The function suppose log message like "[greeting], [name]!" for console.

### Part 3: Functions wey Dey Return Values
4. **Create function wey dem go call `addNumbers`** wey go carry two parameters (`num1` and `num2`) and e go return their sum.

5. **Create function wey dem go call `createFullName`** wey go carry `firstName` and `lastName` parameters and e go return the full name as one single string.

### Part 4: Mix Am All Together
6. **Create function wey dem go call `calculateTip`** wey go carry two parameters: `billAmount` (wey suppose dey) and `tipPercentage` (optional, default na 15). The function suppose calculate and return the tip amount.

### Part 5: Test Your Functions
Add function calls to test each one of your functions and show the results using `console.log()`.

**Example test calls:**
```javascript
// Test your function dem here
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
| **Function Creation** | All 6 functions dem dey correctly implement with correct syntax and naming conventions | 4-5 functions dem dey correctly implement with small syntax issues | 3 or less functions implement or big syntax wahala |
| **Parameters & Default Values** | Correctly use the parameters wey dem suppose use, optional parameters, and default values as dem talk | Parameters dey okay but e fit get problem with default values | Parameters no correct or missing |
| **Return Values** | Functions wey suppose return values, dem dey return am correct, and functions wey no suppose return, dem just dey perform action | Majority return values dey okay but small issues dey | Big problem for return statements |
| **Code Quality** | Clean, well-organized code with better variable names and proper indentation | Code work but fit better or better organize | Code hard to read or e poor |
| **Testing** | All functions dem test well with correct calls and results show well | Majority functions dem test well | Testing no complete or e wrong |

## Bonus Challenges (Optional)

If you want take challenge yourself more:

1. **Create arrow function version** for one of your functions
2. **Create one function wey dey carry another function as parameter** (like the `setTimeout` examples wey dey inside lesson)
3. **Add input validation** to make sure your functions fit handle bad inputs well

---

> 💡 **Tip**: Make you remember to open your browser developer console (F12) to fit see the output of your `console.log()` statements!

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:
Dis document don translate wit AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). Even though we try make e correct, abeg sabi say automated translations fit get some mistakes or wahala. Di original document for im own language na di correct source. If na serious tins, make person wey sabi do professional human translation do am. We no responsible if mistake or misunderstanding show because of dis translation.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->