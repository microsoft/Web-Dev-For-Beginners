function myPromise(executer) {
  let onResolve,
    onReject,
    isFullFilled = false,
    isCalled = false,
    value;

  this.then = function (callback) {
    onResolve = callback;

    if (isFullFilled && !isCalled) {
      isCalled = true;
      onResolve(value);
    }
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;
    if (isFullFilled && !isCalled) {
      isCalled = true;
      onReject(value);
    }
    return this;
  };

  function resolve(val) {
    isFullFilled = true;
    value = val;
    if (typeof onResolve === "function") {
      isCalled = true;
      onResolve(val);
    }
  }

  function reject(val) {
    isFullFilled = true;
    value = val;
    if (typeof onReject === "function") {
      isCalled = true;
      onReject(val);
    }
  }

  // Error handling for  executer
  try {
    executer(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

const examplePromise = new myPromise((resolve, reject) => {
  let state = false;
  setTimeout(() => {
    if (state) resolve("Promise resolved");
    else reject("Promise rejected");
  }, 1000);
});

examplePromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    throw new Error(err);
  });
