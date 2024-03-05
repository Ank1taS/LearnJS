// obj literals  - non singleton object
const user1 = {
  name: "ankita",
  age: 22,
  location: "BBSR",
  leaveDay: ["Saturday", "sunday"],
};

// access
console.log(user1.name); // prefered one
console.log(user1["name"]); // support string keys like "full name" and also for Symbol

// create a symbol and add it to obj as a key
const sym1 = Symbol("key1");
const sym2 = Symbol("key2");

const user2 = {
  name: "ankita",
  [sym1]: "userKey1", // syntax to store symbol. without[] it would be key of string type instead of symbol
  sym2: "userKey2", // syntax to store symbol. without[] it would be key of string type instead of symbol
  age: 22,
  location: "BBSR",
  leaveDay: ["Saturday", "sunday"],
};

console.log(user2[sym1]); // Output: "userKey1"
console.log(user2[sym2]); // Output: undefined (since sym2 is not used as a symbol key)
console.log(user2.sym2); // Output: "userKey2" (accessing via regular string key)
console.log(typeof user2[sym1]); // Output: "string" (since the value associated with sym1 is a string)
console.log(typeof user2[sym2]); // Output: "undefined" (since sym2 is not used as a symbol key)

console.log(user2); // sym2: 'userKey2' |-difference is the type-| [Symbol(key1)]: 'userKey1'
// {
//     name: 'ankita',
//     sym2: 'userKey2',
//     age: 22,
//     location: 'BBSR',
//     leaveDay: [ 'Saturday', 'sunday' ],
//     [Symbol(key1)]: 'userKey1'
//   }

// freeze - Prevents the modification of existing property attributes and values, and prevents the addition of new properties
Object.freeze(user2);
user2["name"] = "Sona"; // will not change
console.log(user2.name); // Ankita

// add a function to object
user1.msg = function () {
  console.log(`Hello ${this.name}`);
};

console.log(user1.msg()); // return content of function
console.log(user1.msg); // return reference of function - [Function (anonymous)]

// // //
// //
// // nested object
const user3 = {
  fullname: {
    firstName: "Ankita",
    lastName: "Sahoo",
  },
  DOB: "22-09-2001",
  email: "ankita@gamil.com",
};

console.log(user3);
console.log(user3.fullname);
console.log(user3.fullname.firstName);

//
//
// Combine / concat objects
const obj1 = {
  1: 10,
  2: 20,
};

const obj2 = {
  3: 30,
  4: 40,
};

console.log({ obj1, obj2 }); // { obj1: { '1': 10, '2': 20 }, obj2: { '3': 30, '4': 40 } }

// assign
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3); // { '1': 10, '2': 20, '3': 30, '4': 40 }

// spread :
const obj4 = { ...obj1, ...obj2 };
console.log(obj3); // { '1': 10, '2': 20, '3': 30, '4': 40 }

//
//
//
//
// access only keys of an object
console.log(Object.keys(obj1)); // [ '1', '2' ]
// access only values of an object
console.log(Object.values(obj1)); // [ 10, 20 ]

// entries: Returns an array of key/values of the enumerable properties of an object
console.log(Object.entries(user3));

//hasOwnProperty : returns a boolean indicating whether this object has the specified property as its own property
console.log(user3.hasOwnProperty("name")); // false
console.log(user3.hasOwnProperty("fullname")); // true

// //
// singleton created by constructor not by literals - object.create()
