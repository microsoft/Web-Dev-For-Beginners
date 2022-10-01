const randNum = (a)=>{
    return Math.floor(Math.random()*a)+1;
}
let target = randNum(10);
let guess = randNum(10);
while(guess!==target){
    console.log(`guess is ${guess} Trying again.....`)
    guess = randNum(10);
}
console.log(`Congrats guess ${guess} was right`);