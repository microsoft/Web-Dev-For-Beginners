const arr = [12,3,5,6,7];
const newarr = arr.map((e)=>{
    return e*2;
})
console.log(newarr);
const everOddArr = arr.map((n)=>{
    return{
        value: n,
        isEven: n%2===0
    }
})
console.log(everOddArr);
/*

[ { value: 12, isEven: true },
  { value: 3, isEven: false },
  { value: 5, isEven: false },
  { value: 6, isEven: true },
  { value: 7, isEven: false } ]

*/