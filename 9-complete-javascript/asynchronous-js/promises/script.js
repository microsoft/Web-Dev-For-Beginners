// const willGetYouDog = new Promise((resolve,reject)=>{
//     const rand = Math.random();
//     if(rand<0.5){
//         resolve()
//     }
//     else
//     reject()
// })


// willGetYouDog.then(()=>{
//     console.log('DOGGGG')
// }).catch((err)=>{console.log(err)})
const makeDogPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random();
            if (rand < 0.5) {
                resolve()
            }
            else
                reject()
        }, 5000)
    })
}


// willGetYouDog.then(() => {
//     console.log('DOGGGG')
// }).catch((err) => { console.log(err) })
const pro = makeDogPromise()
pro.then(()=>{
    console.log("hello")
})
