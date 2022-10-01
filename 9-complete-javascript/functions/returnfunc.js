function multiplyBy(num){
    return function(a){ // anonymous function
        return a*num;

    }
}
const triple = multiplyBy(3);
console.log(triple(20)); // 60
console.log(multiplyBy(3)(20)); // 60