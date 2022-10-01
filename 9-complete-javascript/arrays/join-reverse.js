let arr = [1,2,3,4,5];
arr.reverse()
console.log(arr); // [ 5, 4, 3, 2, 1 ]

let names = ["Tushar","Rahul","Mohan"]
let join1 = names.join()
let join2 = names.join(' ')
let join3 = names.join("&")
console.log(join1) // Tushar,Rahul,Mohan
console.log(join2) // Tushar Rahul Mohan
console.log(join3) // Tushar&Rahul&Mohan