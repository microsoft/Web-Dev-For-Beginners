# Fun with Functions

## Instructions

Create different functions, both functions that return something and functions that don't return anything.

#1 returns random number 1 -100
function randomNumber(){
    return Math.floor(Math.random() * 100) + 1;
}
randomNumber(); 

#2 does not return anything
function randomNumber(){
}
randomNumber(); 

See if you can create a function that has a mix of parameters and parameters with default values.

#1
function greet(firstName, lastName){
    return `Hey there, ${firstName} ${lastName}`;
}
greet('Boboye', 'Andazi');

#2
function greet(firstName, lastName = 'Ford'){
    return `Hey there, ${firstName} ${lastName}`;
}
greet('Boboye');
greet('Boboye', 'Manny');


## Rubric

| Criteria | Exemplary                                                                              | Adequate                                                         | Needs Improvement |
| -------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ----------------- |
|          | Solution is offered with two or more well-performing functions with diverse parameters | Working solution is offered with one function and few parameters | Solution has bugs |
