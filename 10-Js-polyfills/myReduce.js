const numbers = [1, 2, 3, 4, 5];
// structure -> Array.reduce((acc, curr, index, arr) => {}, initialValue)

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;

  // after assigning initialValue to accumulator we need to check whether accumulator exists or not
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? accumulator + this[i] : this[i];
  }

  return accumulator;
};

// const sum = numbers.reduce((acc, curr) => acc + curr, 0);
const sum = numbers.myReduce((acc, curr) => acc + curr, 0);

console.log({ sum });
