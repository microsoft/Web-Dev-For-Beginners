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

//let Fin = "";
        for (let movie of arr){
            //movie is i so you can directly output it
            console.log(movie.toUpperCase());
        }
}

Cap(movies);

function CharCounter(arr){
    if (!arr.length){
            return null;
        }

    let totalChars = 0;

  arr.forEach(movie => {
    totalChars += movie.length; //movie is element in array
  }); //foreach doesn't return anything outside of the function/at all

  console.log(`Total characters across all titles: ${totalChars}`);
}


CharCounter(movies);



/*
### Exercise 4: Data Filtering (Advanced)
Create a program that processes an array of objects representing students.

**Requirements:**
- Create an array of at least 5 student objects with properties: `name`, `age`, `grade`
- Use loops to find students who are 18 or older
- Calculate the average grade of all students
- Create a new array containing only students with grades above 85

**Example Structure:**
```javascript
const students = [
  { name: "Alice", age: 17, grade: 92 },
  { name: "Bob", age: 18, grade: 84 },
  // Add more students...
];
```
*/

const students = [
 { name: "Lena", age: 21, grade: 100},   
 { name: "Amir", age: 21, grade: 92},
 { name: "Marlene", age: 20, grade: 85},   
 { name: "Abu Yusuf", age: 13, grade: 23},
 { name: "Jacob", age: 16, grade: 72},   
 { name: "Ifu", age: 20, grade: 96},
 { name: "Johnny", age: 17, grade: 65},
 { name: "Bridge", age: 15, grade: 22},
];

function Adult(arr){
    arr.forEach(student => {
        if (student.age > 18){
            console.log(`${student.name}`);
        }
    });
}

function Average(arr){
    let a = 0;

    arr.forEach(student => {
       a += student.grade;
    });
    
    console.log(a/arr.length);
}

function EliteStudents(arr){
    let TopScores = [];

    arr.forEach(student => {
      if (student.grade >= 85){
        TopScores.push(student);
      }
    });
    
    console.log(TopScores);
}



Adult(students);
Average(students);
EliteStudents(students);