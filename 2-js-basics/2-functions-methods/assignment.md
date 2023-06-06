# Fun with Functions

## Instructions

Create different functions, both functions that return something and functions that don't return anything.

Function that returns a value:

// Function to calculate the area of a rectangle
function calculateRectangleArea(length, width) {
  var area = length * width;
  return area;
}

// Function call and storing the returned value
var rectangleArea = calculateRectangleArea(5, 8);
console.log(rectangleArea); // Output: 40


Function that doesn't return anything:

// Function to greet a person
function greetPerson(name) {
  console.log("Hello, " + name + "!");
}

// Function call (no return value)
greetPerson("John"); // Output: Hello, John!



See if you can create a function that has a mix of parameters and parameters with default values.

## Rubric

| Criteria | Exemplary                                                                              | Adequate                                                         | Needs Improvement |
| -------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ----------------- |
|          | Solution is offered with two or more well-performing functions with diverse parameters | Working solution is offered with one function and few parameters | Solution has bugs |