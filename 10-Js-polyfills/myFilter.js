const numbers = [1, 2, 3, 4, 5];
// structure -> Array.filter((ele, index, arr) => {})

Array.prototype.myFilter = function (callback) {
  let newArr = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }

  return newArr;
};

// const filteredNumbers = numbers.filter((num) => num > 2);
const filteredNumbers = numbers.myFilter((num) => num > 2);

console.log({ filteredNumbers });
