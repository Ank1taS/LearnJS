"use strict";

//      js array
// contain element of different types
// is resizable
// Array() can be called with or without new. Both create a new Array instance

//================= mering 2 array ============
const arr1 = [10, 20, 30];
const arr2 = [100, 200, 300];

// 1. push
arr2.push(arr1);
console.log(arr1); // [ 10, 20, 30 ]
console.log(arr2); // [ 100, 200, 300, [ 10, 20, 30 ] ]

console.log(arr2[3][2]); // 30

// 2. concat : This method returns a new array without modifying any existing arrays.
console.log(arr1.concat(arr2)); //[ 10, 20, 30, 100, 200, 300 ]

// 3. spreeds: can spread and concat multiple array simultanously
const arr3 = [1000];
const arr4 = [...arr1, ...arr2, ...arr3];
console.log(arr4); 
//[
//     10,  20,  30,
//    100, 200, 300,
//   1000
// ]

// spreading out array of any depth to any depth
// flat: Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const arr5 = [1, 2, [30, 40, [500, [6000]], 70], 8, [90]];
console.log(arr5.flat(2));  // [ 1, 2, 30, 40, 500, [ 6000 ], 70, 8, 90 ]
console.log(arr5.flat(5));
// [
//     1,    2, 30, 40,
//   500, 6000, 70,  8,
//    90
// ]

console.log(arr5.flat(Infinity));  // to flat the entire array
// [
//     1,    2, 30, 40,
//   500, 6000, 70,  8,
//    90
// ]
console.log(arr5.flat()); // default 1 depth
// [ 1, 2, 30, 40, [ 500, [ 6000 ] ], 70, 8, 90 ]

// ===== some other imp operations
// from : Creates an array from an array-like object.
console.log(Array.from("Ankita")); // string are array like obj   - [ 'A', 'n', 'k', 'i', 't', 'a' ]
console.log(Array.from({ name: "Ankita" })); // objects are not array like   - []
// you can create array from either keys or values

// of: Returns a new array from a set of elements.
const v1 = 10;
const v2 = 20;
const v3 = 30;
console.log(Array.of(v1, v2, v3)); // [ 10, 20, 30 ]
