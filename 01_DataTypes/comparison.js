// comparing 2 different data type


console.log("02" > 1);      // true
console.log("0.0006" > 1 ); 
//Give Away ::  it is better ghabit to compare same datatype as type conversion may not give predictable values


console.log(null > 0);      // false    :  JavaScript converts null to a number, which becomes 0. Therefore, the comparison becomes 0 > 0, which is false.
console.log(null >= 0);     // true     :  null is converted to a number, which is 0. So, the comparison becomes 0 >= 0
console.log(null == 0);     // false    : the equality operator attempts to perform type coercion[Type coercion is the automatic or implicit conversion of values from one data type to another] if the operands have different types. Since null is considered to be loosely equal (==) to undefined 
console.log(null <= 0);     // true     : null is converted to a number, which is 0. So, the comparison becomes 0 <= 0


console.log(undefined > 0);     // false
console.log(undefined == 0);    // false
console.log(undefined >= 0);    // false

// take AWAY: Always avoid such type of conversion.

// strict comparision: ===
console.log("2" === 2);         // false



// symbol
const id1 = Symbol(12);
const id2 = Symbol(12);
console.log(id1 == id2) // false


// return type of function expression is : Object function
// https://262.ecma-international.org/5.1/#sec-11.4.3
