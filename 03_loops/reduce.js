// Reduce:
// Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
// @param callbackfn — A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
// @param initialValue — If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

const numarr = [10, 20, 30];

// reduce() with arrow furnction
const total1 = numarr.reduce((acc, num) => acc + num, 0); // 0 is the initial value
console.log(total1); // 60
console.log(numarr.reduce((acc, num) => acc + num, 5)); // 65 as 5 is initial value

// reduce() with normal furnction
const total2 = numarr.reduce(function (acc, num) {
  return acc + num;
}, 0);
console.log(total2); // 60

//

//

//

// reduce to sum up the total price of products in cart
const cart = [
  { item: "sugar", price: 80 },
  { item: "soap", price: 20 },
  { item: "bedsheet", price: 600 },
  { item: "diary", price: 100 },
  { item: "scrubber", price: 200 },
];

console.log(cart.reduce((acc, item) => acc + item.price, 0)); // 1000
