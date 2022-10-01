const max = (arr)=>{
    return arr.reduce((max,curr)=>{
        if(curr>max){
            return curr;
        }
        return max;
    })
}
console.log(max([12,23,5,64,23]))