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
function operations(oper,x,y){
    return oper(x,y);
}
console.log(operations(add,2,3)); // 5
console.log(operations((a,b)=>{
    return a+b;
},45,5)); // 50

