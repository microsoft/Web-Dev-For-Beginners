function findMax(n1,n2,n3){
    if(n1>n2){
        if(n3>n1){
            console.log(`${n3} is max`);
        }
        else{
            console.log(`${n1} is max`);
        }
    }
    else{
        if(n3>n2){
            console.log(`${n3} is max`);
        }
        else{
            console.log(`${n2} is max`)
        }
    }
}

findMax(23,45,24);