# Fun with Functions

## Instructions

Create different functions, both functions that return something and functions that don't return anything.

See if you can create a function that has a mix of parameters and parameters with default values.

## Rubric

| Criteria | Exemplary                                                                              | Adequate                                                         | Needs Improvement |
| -------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ----------------- |
|          | Solution is offered with two or more well-performing functions with diverse parameters | Working solution is offered with one function and few parameters | Solution has bugs |


function summ(x, y) {
  console.log(x+y);
}


function ranNum() {
  let min = 10;
  let max = 100;
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function bigNum(x,y) {
  if (x > y) return x;
  if (x < y) return y;
}

console.log(bigNum(9, 4));
