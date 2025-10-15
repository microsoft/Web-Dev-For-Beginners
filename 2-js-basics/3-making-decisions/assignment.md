# Making Decisions: Student Grade Processor

## Learning Objectives

In this assignment, you'll practice the decision-making concepts from this lesson by building a program that processes student grades from different grading systems. You'll use `if...else` statements, comparison operators, and logical operators to determine which students pass their courses.

## The Challenge

You work for a school that recently merged with another institution. Now you need to process student grades from two completely different grading systems and determine which students are passing. This is a perfect opportunity to practice conditional logic!

### Understanding the Grading Systems

#### First Grading System (Numeric)
- Grades are given as numbers from 1-5
- **Passing grade**: 3 and above (3, 4, or 5)
- **Failing grade**: Below 3 (1 or 2)

#### Second Grading System (Letter Grades)
- Grades use letters: `A`, `A-`, `B`, `B-`, `C`, `C-`
- **Passing grades**: `A`, `A-`, `B`, `B-`, `C`, `C-` (all listed grades are passing)
- **Note**: This system doesn't include failing grades like `D` or `F`

### Your Task

Given the following array `allStudents` representing all students and their grades, construct a new array `studentsWhoPass` containing all students who pass according to their respective grading systems.

```javascript
let allStudents = [
  'A',    // Letter grade - passing
  'B-',   // Letter grade - passing  
  1,      // Numeric grade - failing
  4,      // Numeric grade - passing
  5,      // Numeric grade - passing
  2       // Numeric grade - failing
];

let studentsWhoPass = [];
```

### Step-by-Step Approach

1. **Set up a loop** to go through each grade in the `allStudents` array
2. **Check the grade type** (is it a number or a string?)
3. **Apply the appropriate grading system rules**:
   - For numbers: check if grade >= 3
   - For strings: check if it's one of the valid passing letter grades
4. **Add passing grades** to the `studentsWhoPass` array

### Helpful Code Techniques

Use these JavaScript concepts from the lesson:

- **typeof operator**: `typeof grade === 'number'` to check if it's a numeric grade
- **Comparison operators**: `>=` to compare numeric grades
- **Logical operators**: `||` to check multiple letter grade conditions
- **if...else statements**: to handle different grading systems
- **Array methods**: `.push()` to add passing grades to your new array

### Expected Output

When you run your program, `studentsWhoPass` should contain: `['A', 'B-', 4, 5]`

**Why these grades pass:**
- `'A'` and `'B-'` are valid letter grades (all letter grades in this system are passing)
- `4` and `5` are numeric grades >= 3
- `1` and `2` fail because they're numeric grades < 3

## Testing Your Solution

Test your code with different scenarios:

```javascript
// Test with different grade combinations
let testGrades1 = ['A-', 3, 'C', 1, 'B'];
let testGrades2 = [5, 'A', 2, 'C-', 4];

// Your solution should work with any combination of valid grades
```

## Bonus Challenges

Once you complete the basic assignment, try these extensions:

1. **Add validation**: Check for invalid grades (like negative numbers or invalid letters)
2. **Count statistics**: Calculate how many students pass vs. fail
3. **Grade conversion**: Convert all grades to a single numeric system (A=5, B=4, C=3, etc.)

## Rubric

| Criteria | Exemplary (4) | Proficient (3) | Developing (2) | Beginning (1) |
|----------|---------------|----------------|----------------|---------------|
| **Functionality** | Program correctly identifies all passing grades from both systems | Program works with minor issues or edge cases | Program partially works but has logical errors | Program has significant errors or doesn't run |
| **Code Structure** | Clean, well-organized code with proper if...else logic | Good structure with appropriate conditional statements | Acceptable structure with some organizational issues | Poor structure, difficult to follow logic |
| **Use of Concepts** | Effectively uses comparison operators, logical operators, and conditional statements | Good use of lesson concepts with minor gaps | Some use of lesson concepts but missing key elements | Limited use of lesson concepts |
| **Problem Solving** | Shows clear understanding of the problem and elegant solution approach | Good problem-solving approach with solid logic | Adequate problem-solving with some confusion | Unclear approach, doesn't demonstrate understanding |

## Submission Guidelines

1. **Test your code** thoroughly with the provided examples
2. **Add comments** explaining your logic, especially for the conditional statements
3. **Verify output** matches expected results: `['A', 'B-', 4, 5]`
4. **Consider edge cases** like empty arrays or unexpected data types

> 💡 **Pro Tip**: Start simple! Get the basic functionality working first, then add more sophisticated features. Remember, the goal is to practice decision-making logic with the tools you learned in this lesson.
