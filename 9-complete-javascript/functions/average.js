// write a function to find the average value in an array of numbers.
// avg([0,50]) // 25
function avg(arr){
    const l = arr.length;
    // for(let i =0;i<l;i++){
    //     sum+=arr[i];
    // }
    const sum = arr.reduce((total,num)=>{
        return total+num;
    })
    return sum/l;
}
console.log(avg([0,50]));
