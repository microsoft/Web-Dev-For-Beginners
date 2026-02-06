# Making Decisions: Student Grade Processor

## Learning Objectives

For dis assignment, you go practice di decision-making tins wey dis lesson teach by building program wey go process student grades from different grading systems. You go use `if...else` statements, comparison operators, and logical operators to know which students dem pass their courses.

## The Challenge

You dey work for school wey recently merge wit another one. Now you need process student grades from two different grading systems, then find out which students dey pass. Dis na beta chance to practice conditional logic!

### Understanding the Grading Systems

#### First Grading System (Numeric)
- Grades dey as numbers from 1-5
- **Passing grade**: 3 and above (3, 4, or 5)
- **Failing grade**: Below 3 (1 or 2)

#### Second Grading System (Letter Grades)
- Grades dem use letters: `A`, `A-`, `B`, `B-`, `C`, `C-`
- **Passing grades**: `A`, `A-`, `B`, `B-`, `C`, `C-` (all grades listed na passing)
- **Note**: Dis system no get failing grades like `D` or `F`

### Your Task

Given di following array `allStudents` wey represent all students and their grades, build new array `studentsWhoPass` wey go hold all students wey pass according to their correct grading systems.

```javascript
let allStudents = [
  'A',    // Letta grade - e mean say you pass
  'B-',   // Letta grade - e mean say you pass
  1,      // Numɛrik grade - e mean say you fail
  4,      // Numɛrik grade - e mean say you pass
  5,      // Numɛrik grade - e mean say you pass
  2       // Numɛrik grade - e mean say you fail
];

let studentsWhoPass = [];
```

### Step-by-Step Approach

1. **Set up loop** to check every grade inside di `allStudents` array
2. **Check grade type** (na number or string?)
3. **Apply correct grading system rule**:
   - If na number: check if grade >= 3
   - If na string: check if e dey among valid passing letter grades
4. **Add passing grades** enter `studentsWhoPass` array

### Helpful Code Techniques

Use dis JavaScript concepts from di lesson:

- **typeof operator**: `typeof grade === 'number'` to check if e be numeric grade
- **Comparison operators**: `>=` to check numeric grades
- **Logical operators**: `||` to check multiple letter grade conditions
- **if...else statements**: to handle different grading systems
- **Array methods**: `.push()` to add passing grades to your new array

### Expected Output

When you run your program, `studentsWhoPass` go get: `['A', 'B-', 4, 5]`

**Why dis grades pass:**
- `'A'` and `'B-'` na valid letter grades (all letter grades for dis system na passing)
- `4` and `5` na numeric grades wey pass >= 3
- `1` and `2` fail because dem numeric grades less than 3

## Testing Your Solution

Test your code with different cases:

```javascript
// Test wit diferent grade kombinéshon dem
let testGrades1 = ['A-', 3, 'C', 1, 'B'];
let testGrades2 = [5, 'A', 2, 'C-', 4];

// Yur solution fọ́ shud wok wit eni kombinéshon of valid grade dem
```

## Bonus Challenges

After you finish di basic assignment, try dis extra ones:

1. **Add validation**: Check for invalid grades (like negative numbers or wrong letters)
2. **Count statistics**: Count how many students pass and how many fail
3. **Grade conversion**: Change all grades to one numeric system (A=5, B=4, C=3, etc.)

## Rubric

| Criteria | Exemplary (4) | Proficient (3) | Developing (2) | Beginning (1) |
|----------|---------------|----------------|----------------|---------------|
| **Functionality** | Program correctly finds all passing grades from both systems | Program work small problem or edge case dey | Program work small small but get logical wahala | Program get serious mistakes or e no run |
| **Code Structure** | Clean, organized code with proper if...else logic | Good structure with correct conditional statements | Acceptable structure but get some organization problems | Bad structure, hard to follow logic |
| **Use of Concepts** | Use well comparison operators, logical operators, and conditional statements | Good use of lesson concepts but slight gap dey | Some use of lesson concepts but miss key parts | Small use of lesson concepts |
| **Problem Solving** | Show clear understanding of di problem and smart solution | Good problem-solving approach with steady logic | Enough problem-solving but some confusion dey | Unclear approach, no show understanding |

## Submission Guidelines

1. **Test your code** good well with di examples given
2. **Add comments** wey explain your logic, especially for di conditional statements
3. **Verify output** match wetin dem expect: `['A', 'B-', 4, 5]`
4. **Think about edge cases** like empty arrays or data wey no expected

> 💡 **Pro Tip**: Start simple! Make di basic functionality work first, then add better features. Remember, di goal na to practice decision-making logic with di tools wey you learn for dis lesson.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:
Dis document don translate wit AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). Even though we dey try make am correct, make you sabi say automated translation fit get errors or mistakes. Di original document wey dey im own language na di real correct source. If na important info, e better to use professional human translation. We no go take responsibility for any misunderstanding or wrong interpretation wey fit come from dis translation.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->