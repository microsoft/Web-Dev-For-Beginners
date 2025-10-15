# Arrays and Loops Assignment

## Instructions

Complete the following exercises to practice working with arrays and loops. Each exercise builds on concepts from the lesson and encourages you to apply different loop types and array methods.

### Exercise 1: Number Pattern Generator
Create a program that lists every 3rd number between 1-20 and prints it to the console.

**Requirements:**
- Use a `for` loop with a custom increment
- Display numbers in a user-friendly format
- Add descriptive comments explaining your logic

**Expected Output:**
```
3, 6, 9, 12, 15, 18
```

> **Tip:** Modify the iteration-expression in your for loop to skip numbers.

### Exercise 2: Array Analysis
Create an array of at least 8 different numbers and write functions to analyze the data.

**Requirements:**
- Create an array called `numbers` with at least 8 values
- Write a function `findMaximum()` that returns the highest number
- Write a function `findMinimum()` that returns the lowest number  
- Write a function `calculateSum()` that returns the total of all numbers
- Test each function and display the results

**Bonus Challenge:** Create a function that finds the second highest number in the array.

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
```

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

## Testing Your Code

Test your programs by:
1. Running each exercise in your browser's console
2. Verifying outputs match expected results
3. Testing with different data sets
4. Checking that your code handles edge cases (empty arrays, single elements)

## Submission Guidelines

Include the following in your submission:
- Well-commented JavaScript code for each exercise
- Screenshots or text output showing your programs running
- Brief explanation of which loop type you chose for each task and why

## Rubric

| Criteria | Exemplary (3 points) | Adequate (2 points) | Needs Improvement (1 point) |
| -------- | -------------------- | ------------------- | --------------------------- |
| **Functionality** | All exercises completed correctly with bonus challenges | All required exercises work correctly | Some exercises incomplete or contain errors |
| **Code Quality** | Clean, well-organized code with descriptive variable names | Code works but could be cleaner | Code is messy or hard to understand |
| **Comments** | Comprehensive comments explaining logic and decisions | Basic comments present | Minimal or no comments |
| **Loop Usage** | Demonstrates understanding of different loop types appropriately | Uses loops correctly but limited variety | Incorrect or inefficient loop usage |
| **Testing** | Evidence of thorough testing with multiple scenarios | Basic testing demonstrated | Little evidence of testing |

## Reflection Questions

After completing the exercises, consider:
1. Which type of loop felt most natural to use and why?
2. What challenges did you encounter when working with arrays?
3. How could these skills apply to real-world web development projects?
4. What would you do differently if you had to optimize your code for performance?