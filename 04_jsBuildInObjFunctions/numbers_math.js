const n1 = 22;
const n2 = new Number(22);

console.log(n1);
console.log(n2);

const n3 = 556.896575;
console.log(n3.toPrecision(3));
console.log(n3.toPrecision(5));
console.log(n3.toPrecision(2)); // 5.6e+2
console.log(n3.toPrecision(7));

// =========== Math ===========

console.log(Math.random()); // generate random numbers bet 0 and 1

//example a dice problem 1 to 6, in that case generate a number greater than 1 - multiply 10. what if it is 0.023 -> 0.23 which is < 1. so add 1
console.log(Math.random() * 10 + 1);
console.log(Math.min(11, 7, -33, 33));
console.log(Math.max(700, 500, 5473));

// generate a number bet 2 range
const min = 1;
const max = 6;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// Math.random(): This function in JavaScript returns a floating-point, pseudo-random number in the range from 0 inclusive to 1 exclusive. In other words, it generates a random number between 0 (inclusive) and 1 (exclusive).
// (max - min + 1): This part calculates the range of numbers we want to generate randomly. If max is the maximum value and min is the minimum value, then (max - min + 1) calculates the total number of possible values within the range, including both max and min.
// Math.random() * (max - min + 1): This expression generates a random floating-point number between 0 (inclusive) and (max - min + 1) (exclusive). It's a random number within the range of possible values.
// Math.floor(): This function takes a floating-point number and rounds it down to the nearest integer. It ensures that we get an integer value.
// Math.floor(Math.random() * (max - min + 1)): This part generates a random integer between 0 and (max - min), inclusive.
// Finally, we add min to shift the range. This ensures that the generated random number falls within the range from min to max.
