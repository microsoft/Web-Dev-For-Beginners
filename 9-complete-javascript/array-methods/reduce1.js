const arr = [2,3,4,5];
// 5- [5,4,5]
// 9- [9,5]
// 14- 14

const sum = arr.reduce((t,c)=>{
    return t+c
})
console.log(sum);