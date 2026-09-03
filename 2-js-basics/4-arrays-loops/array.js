function NumPattern() {

let Pattern = [];
    for (i = 1; i < 20; i++){
        if (i % 3 === 0 ){
            Pattern.push(i);
        }
}
return Pattern;
}


console.log(NumPattern());



//- Create an array called `numbers` with at least 8 values
//- Write a function `findMaximum()` that returns the highest number
//- Write a function `findMinimum()` that returns the lowest number  
//- Write a function `calculateSum()` that returns the total of all numbers

numbers = [8,393,200,700,4,2000,638,29999]

function findMaximum(){
let max = numbers[0];

    for (let num of numbers){
     if (max < numbers[i]){
        max = numbers[i];
     }
    }
return max;
}

function findMaximum1(){
let max = 0;

    for (i = 0; i < numbers.length; i++){
     if (max < numbers[i]){
        max = numbers[i];
     }
    }
return max;
}



console.log(findMaximum())

console.log(findMaximum1())