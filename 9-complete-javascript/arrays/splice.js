let arr = [1,2,3,4,5,6];
// let arrDeletedItems = arr.splice(start[, deleteCount[, item1[, item2[, ...]]]])
arr.splice(1,0,15);
console.log(arr); // [ 1, 15, 2, 3, 4, 5, 6 ]
arr.splice(2,2);
console.log(arr); //  [1, 15, 4, 5, 6 ]