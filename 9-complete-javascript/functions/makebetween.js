function makeBetweenFunc(min,max){
    return function (val){
        return val>=min && val<=max;
    }
}
const inAgeRange = makeBetweenFunc(18,100);
console.log(inAgeRange(45));