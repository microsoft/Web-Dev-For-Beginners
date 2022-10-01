// Resolved promise
function promise1(val) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(val);
    }, 1000);
  });
}

// Rejected promise
function promise2(val) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(val);
    }, 1000);
  });
}

// Resolved promise
function promise3(val) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(val);
    }, 1000);
  });
}

Promise.myAllPromise = (promises) => {
  return new Promise((resolve, reject) => {
    let results = [];

    if (promises.length === 0) {
      resolve(results);
      return;
    }

    let promisePendingState = promises.length;

    promises.forEach((promise, index) => {
      Promise.resolve(promise).then((res) => {
        results[index] = res;
        promisePendingState--;

        if (promisePendingState === 0) {
          resolve(results);
        }
      }, reject);
    });
  });
};

Promise.myAllPromise([
  promise1("hello from promise 1"),
  promise2("hello from promise 2"),
  promise3("hello from promise 3"),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(`failed Promise: ${err}`));
