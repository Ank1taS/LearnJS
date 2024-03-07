//  array specific loops

// array can be of strings ["", "", ""] or can be of objects [{}, {}, {}]

// for of loop
const arr = [10, 20, 30, 40];

// for (const num of arr) {
//   console.log(num);
// }

// const name = "ankita";
// for (const ch of name) {
//   console.log(ch);
// }

//

//

//

// map: maintains order and contains unique values
const map = new Map();
map.set("Odisha", "BBSR");
map.set("Bihar", "Patna");
map.set("West Bengal", "Kolkata");

console.log(map);
// Map(3) {
//   'Odisha' => 'BBSR',
//   'Bihar' => 'Patna',
//   'West Bengal' => 'Kolkata'
// }

// for (const [key, value] of map) {
//   console.log(`state ${key} - capital ${value}`);
//   //   console.log(key);
// }

//

//

//

// Objects
const obj = {
  Odisha: "BBSR",
  Bihar: "Patna",
  Tripura: "Agartala",
};

// for (const state of obj) {       // ERROR: obj is not iterable
//   console.log(`state ${key} - capital ${value}`);
// }

//

//

//

//
// for-in loop
//

// NOTE: to iterate objects for-in loop is used, instead of for-of,
// cant not access map elements because map is not iterable
for (const key in obj) {
  console.log(`Capital of ${key} is  ${obj[key]}`);
}

// accessing array using for in loop
// in for in loop, in each iteration it will read keys of array which is index of the array
for (const key in arr) {
  console.log(key); // 0 1 2 3
}

//

//

//

//
// for-each loop
//A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array
// forEach(callbackfn: (value: any, index: number, array: any[]) => void, thisArg?: any): void
//
// NOTE callback function dont have name in it. for each uses callback function
arr.forEach(function (value) {
  console.log(value); // 10 20 30 40
});

// for-each with arrow function
arr.forEach((val) => {
  console.log(val); // 10 20 30 40
});

// we can pass function reference ie name in for each loop to iterate the array though function
function print(item) {
  console.log(item);
}
arr.forEach(print); // 10 20 30 40

arr.forEach();
