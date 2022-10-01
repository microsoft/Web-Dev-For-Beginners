const nums = [2,3,4,5,6,6];
nums.forEach((e)=>{
    console.log(e);
})
// add 2 in every element of the array
let arr = []
nums.forEach((e)=>{
    arr.push(e*2)
})
console.log(arr)

let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    }
]
cars.forEach((car)=>{
    console.log(car.color);
})
