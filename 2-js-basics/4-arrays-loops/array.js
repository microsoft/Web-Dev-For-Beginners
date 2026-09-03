function NumPattern() {

let Pattern = [];
    for (i = 1; i < 20; i++){
        if (i % 3 === 0 ){
            Pattern.push(i);
        }
}
return Pattern;
}

console.log(NumPattern());