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

    if (!numbers.length){
        null;
        }

let max = 0;

    for (let num of numbers){
     if (max < num){
        max = num;
     }
    }
return max;
}

function findMinimum(){

    if (!numbers.length){
        return null;    
        }
let min = numbers[0];

    for (let num of numbers){
     if (min > num){
        min = num;
     }
    }
return min;
}

function calculateSum(){

    if (!numbers.length){
        return null;    
        }

    let a = 0;
    //let i = 0;


    for (const num of numbers){
     if (num === numbers[0]){
            a = num;
            //i++;
            //console.log(`step ${i}: ${a}`);

        }else {
            a = a + num;
            //i++;
            //console.log(`step ${i}: ${a}`);
        }
    }

    return a;
}


function SecondMaximum(){

    if (!numbers.length){
          return null;  
        }
        
let max = numbers[0];
let secondMax = 0;

    for (let num of numbers){
     if (max < num){
       secondMax = max;
        max = num;
     }
    }
return secondMax;
}

//console.log(findMaximum());
//console.log(SecondMaximum());
//console.log(findMinimum());
//console.log(calculateSum());
//console.log(findMaximum1())



//Exercise 3


/*
### Exercise 3: String Array Processing
Create an array of your favorite movies/books/songs and practice different loop types.

**Requirements:**
- Create an array with at least 5 string values
- Use a traditional `for` loop to display items with numbers (1. Item Name)
- Use a `for...of` loop to display items in uppercase
- Use `forEach()` method to count and display the total characters

**Example Output:**
```
Traditional for loop:
1. The Matrix
2. Inception
3. Interstellar

For...of loop (uppercase):
THE MATRIX
INCEPTION
INTERSTELLAR

Character count:
Total characters across all titles: 42


*/

const movies = ["Get Out", "Black Swan", "Godfather", "Obsession", "Lord of the Rings"]

function List(arr){
    if (!arr.length){
            return null;
        }

    for (i = 0; i < arr.length; i++){
         console.log(`${i + 1}. ${arr[i]}`);
    }
}

// WHY??
//Because it doesn't return anything, instead prints
List(movies);


function Cap(arr){

if (!arr.length){
            return null;
        }

        for (let movie in arr){
            
        }
}