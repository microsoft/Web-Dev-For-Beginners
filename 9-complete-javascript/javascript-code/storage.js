localStorage.setItem('name','Tushar')
localStorage.setItem('name2', "Rahul")

let nam = localStorage.getItem('name')
console.log(nam)

// clear all the local storage
// localStorage.clear()

localStorage.removeItem('name')

const arr = ["bhindi","pyaj","Nimbu"];
localStorage.setItem('Sabzi', JSON.stringify(arr))


// ##### Session Storage ####
sessionStorage.setItem('students',JSON.stringify(['Tushar',"Rahul"]))
