// implicit scope

const age = 10;
// no need to specify scope using {}, simply write one lin1 code end with ; or multiline code separated by , (comma) and end with ;
if (age >= 10) console.log("You can go to school");

if (age >= 10)
  console.log("You can go to school"),
    console.log("you have to inform your parents"),
    console.log("Nah, You cant drive");
// not recommended these type of writting

//

//

// In switch: if break is not there in a case, then all the code bellow the matched case will be executed EXCEPT the default block.

//

//

//

// FALSY value : false, 0, -0, BigInt 0n, "", null, undefined, NaN
// TRUTHY value : "0", 'false', " ", [], {}, empty fuction ie function() {}

// check array is empty or not
const arr = [];
if (arr.length === 0) {
  console.log("arr is empty");
}

// check object is empty or not
const obj = {};
if (Object.keys(obj).length === 0) {
  console.log("obj is empty");
}
// Object.keys(obj) will return the array of keys of object obj which is an empty array

//

//

//

// Nullish coalescing operator(??)
// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing

let val1;
val1 = 5 ?? 10; // 5
val1 = null ?? 10; // 10
val1 = undefined ?? 10; // 10
val1 = null ?? undefined ?? 5 ?? 10; // 5
console.log(val1); // run one line commening rest

//

//

// terinary opertaor is not same as Nullish coalescing operator
