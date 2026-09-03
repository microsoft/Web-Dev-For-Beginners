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

numbers = [8,393,200,700,4,2000,638,29999, -2]

function findMaximum(){
let max = 0;

    for (let num of numbers){
     if (max < num){
        max = num;
     }
    }
return max;
}

function findMinimum(){
let min = numbers[0];

    for (let num of numbers){
     if (min > num){
        min = num;
     }
    }
return min;
}

function calculateSum(){
    let a = 0;
    let i = 0;

    for (const num of numbers){
        if (num === numbers[0]){
            a += num;
            i++;
            console.log(`step ${i}: ${a}`);

        }else {
            a += a + num;
            i++;
            console.log(`step ${i}: ${a}`);
        }
    }

    return a;
}


console.log(findMaximum())
console.log(findMinimum())
console.log(calculateSum())
//console.log(findMaximum1())