function callTwice(func){
    func();
    func();
}

function laugh(){
    console.log("hahahahahhah");
}

callTwice(laugh);