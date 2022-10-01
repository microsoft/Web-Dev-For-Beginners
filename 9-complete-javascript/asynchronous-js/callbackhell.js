const btn = document.querySelector('button');

// setTimeout(() => {
//     btn.style.transform = `translateX(100px)`;
//     setTimeout(() => {
//         btn.style.transform = `translateX(200px)`;
//         setTimeout(() => {
//             btn.style.transform = `translateX(100px)`;
//             setTimeout(() => {
//                 btn.style.transform = `translateX(100px)`
//             }, 1000);
//         }, 1000);
//     }, 2000);
// }, 3000);

const moveX = (element,amount,delay, callback)=>{
    setTimeout(() => {
        element.style.transform = `translateX(${amount}px)`;
        if(callback){
            callback();
        }
    }, delay);
}

moveX(btn,300,2000,()=>{
    moveX(btn,200,1000)
})