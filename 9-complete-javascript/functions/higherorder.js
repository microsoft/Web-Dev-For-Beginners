function add(x,y){
    return x+y;
}
const subtract = function(x,y){
    return x-y;
}

function multiply(x,y){
    return x*y;
}
const divide = function(x,y){
    return x/y;
}
// let's add all these functions to an array
const operations = [add,subtract,multiply,divide];
// now we can use this array of functions like this:
// console.log(operations[0](3,4)) //7
for(let func of operations){
    console.log(func(12,34));
}
// now I can also add these functions into an object and create a method
const thing = {
    doSomething: multiply
}
// now I can call and use this function as a method of object
console.log(thing.doSomething(23,3));


