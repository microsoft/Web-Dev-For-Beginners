let allStudents = [
  'A',
  'B-',
  1,
  4,
  5,
  2
]

let studentsWhoPass = [];

for (let i = 0; i < allStudents.length; i++){
    let studentGrade = allStudents[i];

    if (typeof studentGrade === 'number') {
        if (studentGrade >= 3) {
            studentsWhoPass.push(studentGrade);
        }
    }

    else if (typeof studentGrade === 'string') {
        let passingGrades = ['A', 'A-', 'B', 'B-', 'C', 'C-'];
        if (passingGrades.includes(studentGrade)) {
            studentsWhoPass.push(studentGrade);
        }
    }
}
console.log(studentsWhoPass); 