# Fun with Functions

## Instructions

Create different functions, both functions that return something and functions that don't return anything.

See if you can create a function that has a mix of parameters and parameters with default values.

## Rubric

`function checkAge(name, surname, age) {  
        const userName = name;  
        const userSurname = surname;  
        const userAge = age;  

        if (age > 18) {
          return console.log(
            `Hello ${name} ${surname}! You ready for work! Good luck!`
          );
        } else {
          return console.log(
            `Hello ${name} ${surname}, sorry you too small for this project`
          );
        }
      }

      function addNumbers(a, b = 10) {
        const result = a + b;
        console.log(result);
      }`

| Criteria | Exemplary                                                                              | Adequate                                                         | Needs Improvement |
| -------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ----------------- |
|          | Solution is offered with two or more well-performing functions with diverse parameters | Working solution is offered with one function and few parameters | Solution has bugs |
