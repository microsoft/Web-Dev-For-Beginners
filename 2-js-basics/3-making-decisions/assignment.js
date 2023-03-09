let allStudents = ['A','B-',1,4,5,2]
  
let studentsWhoPass = [];

for (let i = 0; i < allStudents.length; i++) {
    if (allStudents[i] == 'A' || allStudents[i] == 'B' || allStudents[i] == 'C' || allStudents[i] == 'A-' || allStudents[i] == 'B-' || allStudents[i] > 3) {
        studentsWhoPass.push(allStudents[i]);
    }
  }
console.log(studentsWhoPass);