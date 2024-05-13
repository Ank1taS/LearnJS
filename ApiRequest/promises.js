// promise is an object
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// Promises are central to modern JavaScript programming because they allow developers to handle asynchronous tasks in a more manageable and readable way compared to older patterns like callbacks.

// State: A promise has three possible states:
//          Pending: The operation is in progress, and the final outcome isn't yet determined.
//          Fulfilled: The operation completed successfully, and a result is available.
//          Rejected: The operation failed, and an error message or reason is available.
// Thenable: A promise is "thenable," meaning it has a .then() method for defining what should happen when the promise is fulfilled or rejected.
// Asynchronous Handling: Promises are designed to handle asynchronous operations, allowing you to manage operations like network requests, file I/O, or database queries without blocking the rest of the program's execution.

//
// creation and promise consumption
/*created a promise object instance using new*/
const promise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("promise-1 is executed");
    resolve();
  }, 2000);
});

promise1.then(function () {
  console.log("promise-1 is consumed");
});

// create anonymous promise instance
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("promise-2 is executed");
    resolve(); // here then() will be executed
  }, 2000);
}).then(function () {
  console.log("promise-2 is consumed");
});

// promise - 3
// agrguments passed inn resolve
new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Ankita", email: "ank1tas22sahoo@gmail.com" });
  }, 2000);
}).then((user) => {
  console.log(user); // prints object
});

// promise-4
// success and error handling and promise chaining
const promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;

    if (!error) {
      resolve({ username: "ANKITA", age: "22" });
    } else {
      reject("ERROR: something went wrong");
    }
  }, 2000);
});

promise4
  .then((user) => {
    console.log(user);
    return user.age;
  })
  .then((age) => {
    console.log(age);
  })
  .catch((error) => {
    console.log(error);
  });
// OUTPUT:
// { username: 'ANKITA', age: '22' }
// 22

// promise-5
// success and error handling
const promise5 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;

    if (!error) {
      resolve({ username: "ANKITA", age: "22" });
    } else {
      reject("ERROR: something went wrong");
    }
  }, 2000);
});

// promise chaining along with finally
promise5
  .then((user) => {
    console.log(user);
    return user.age;
  })
  .then((age) => {
    console.log(age);
  })
  .catch((error) => {
    // as error is true, reject() is called
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is resolved/rejected");
  });

// promise 6
// async await
const promise6 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // let error = false;

    // if error is true then program fails as there is no way to handel error but only to handel response
    let error = true;
    // [UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch()
    // to handel it use try catch block

    if (!error) {
      resolve({ file: "java script", extention: "js" });
    } else {
      reject("ERROR: js went wrong");
    }
  }, 2000);
});
async function consumePromise6() {
  try {
    const response = await promise6;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromise6();
