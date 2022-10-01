// console.log("Hello")
// String.prototype.getup  = function(){
//    return this.toUpperCase()
// }
// Array.prototype.pop = function(){
//     return "Sorry"
// }
// console.log("Tushar".getup())
// console.log([2,3,4].pop())

// const navColor = new Color('pink',[345,354,645])
// const logoColor = new Color('green',[255,255,255])
// function hex(r,g,b){
//     return '#' + ((1 << 24) + (r << 16 ) + (g << 8) + b).toString(16).slice(1)

// }

// function rgb(r,g,b){
//     return `rgb(${r}, ${b}, ${g})`;
// }


// function makeColor(r, g, b) {
//     const color = {}
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function () {
//         const { r, g, b } = this;
//         return `rgb(${r}, ${b}, ${g})`
//     }
//     color.hex = function () {
//         const { r, g, b } = this;
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)

//     }
//     return color;
// }

// const c = makeColor(23, 23, 334)

// function Car(make,model,year){
//     this.make = make
//     this.model = model
//     this.year = year
// }

// Car.prototype.carPrice = function(){
//     const {make,year,model} = this;
//     return `Price(${make},${year},${model})`
// }
// let car1 = new Car("Audi", "Q7", "2022")

// class Color{
//     constructor(r,g,b){
//         this.r = r
//         this.g = g
//         this.b = b
//     }
//     greet(){
//         const {r,g,b} = this
//         return `rgb(${r}, ${g}, ${b})`
//     }
// }

// const c1 =  new Color(333,43,34)

class Pet {
    constructor(name,age){
        this.name = name
        this.age = age
    }
    eat(){
        return `${this.name} is eating`
    }
}

class Cat extends Pet{
    meow(){
        return "MEOWWW"
    }
}

class Dog extends Pet{
    bark(){
        return "BARKWW"
    }
}

const cat1 = new Cat("Losi",5)
const dog1 = new Dog("Rockie",7)