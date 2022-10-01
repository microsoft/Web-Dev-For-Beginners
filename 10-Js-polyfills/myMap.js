const numbers = [1, 2, 3, 4, 5];
// structure -> Array.map((ele, index, arr) => {})

Array.prototype.myMap = function (callback) {
  let newArr = [];

  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i], i, this));
  }

  return newArr;
};

// const modifiedNumbers = numbers.map((num) => num * 2);
const modifiedNumbers = numbers.myMap((num) => num * 2);

console.log({ modifiedNumbers });
