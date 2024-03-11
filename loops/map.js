// map(callbackfn: (value: number, index: number, array: number[]) => any, thisArg?: any): any[]
// A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
// Calls a defined callback function on each element of an array, and returns an array that contains the results.

const num = [10, 20, 30, 40, 50];

console.log(num.map((n) => n + 1)); // [ 11, 21, 31, 41, 51 ]
console.log(
  num.map((n) => {
    n + 1; // no return in scope so will return nothing
  }) // [ undefined, undefined, undefined, undefined, undefined ]
);
console.log(
  num.map((n) => {
    return n + 1;
  }) // [ 11, 21, 31, 41, 51 ]
);

// using for each
const n2 = [];
num.forEach((n) => {
  n2.push(n + 1); //[ 11, 21, 31, 41, 51 ]
});
console.log(n2);

//
//
//
// Apply multiple maps
console.log(num.map((n) => n * 10).map((n) => n + 1)); // [ 101, 201, 301, 401, 501 ]
