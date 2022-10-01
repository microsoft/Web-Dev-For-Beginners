function sayHi(){
    console.log("Hii")
    // this refers to the window (global scope object in the browser)
    console.log(this)
}


const person = {
    first: "Tushar",
    last : "Rajpoot",
    nickName: false,
    fullName(){
        // console.log(this)
        return `${this.first} ${this.last}`
    },
    printBio(){
        const fullName = this.fullName();
        console.log(`${fullName} is a person`)
    },
    laugh: ()=>{
        console.log(this);
        console.log(this.nickName)
    }// arrow functions don't behave that way 
    // this refers to window object not current object
}

console.log(person.fullName())
// now this refers to person object

person.printBio();


