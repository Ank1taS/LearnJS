// NOTE:
// 1. functionName - reference
// 2. functionName() - function call

function loginMsg(userName) {
  //      !username or userName === undefined
  if (userName === undefined) {
    return "Please enter user name.";
  }
  return `${userName} logged in.`;
}

console.log(loginMsg());
console.log(loginMsg("Ankita"));

//
//
// Variadic function: rest operator: to pass multiple parameters
// rest operator is same as spread operator : ...
function sum(v1, v2, ...v3) {
  return v1;
}

console.log(sum(100, 200, 300, 500));

//
//
//
// We can pass an object directly as a paremeter to a function
function handleObj(obj) {
  console.log(`User name is ${obj.name} and age is ${obj.age}`);
}

handleObj({
  name: "Ankita",
  age: 22,
});

// Fuction expression
// you can not call a function expression before definition but we can do so in case of function declaration
// console.log(add(10, 20));  ----------- ERROR
const add = function (num1, num2) {
  return num1 + num2;
};
console.log(add(10, 20)); // OK

//  this: represents current context
const movie = {
  name: "Man of steel",
  genre: "Action",
  message: function () {
    console.log(`you are watching ${this.name} a ${this.genre} movie`);
    console.log(this);
    // OUTPUT: { name: 'Man of steel', genre: 'Action', message: [Function: message] }
  },
};

movie.message(); // you are watching Man of steel a Action movie
movie.genre = "sci-fri";
movie.message(); // you are watching Man of steel a sci-fri movie

console.log(this); // {}
// output is {} represnets an empty object. it is because it refers to the node's[stand alone engine] global env and currently it is empty
// but if we run this in a browser, it will show contents of browser's object ie window object
// NOTE: cant use this for a function instance

//

//

//

// ARROW FUNCTION:

const msg1 = () => {
  console.log("you are calling arrow function.");
};

msg1(); // you are calling arrow function.

//

// Implicit arrow function
// single statement
const add2 = (num1, num2) => num1 + num2;
console.log(add2(5, 10)); // 15

const msg2 = () => console.log("you are calling arrow function.");
msg2(); // you are calling arrow function.

// ?? TAKE AwAY: In the arrow function, if you specify return then it must be with in {} it is explicitly returned. Otherwise, you can specify it () without return keyword which is implicit in nature
// const add2 = (num1, num2) => num1 + num2;    // ok
// const add2 = (num1, num2) => (num1 + num2);  // ok
// const add2 = (num1, num2) => (return num1 + num2);   // error return require {}
// const add2 = (num1, num2) => (return num1 + num2);   // error return require {}

//

//

// ?? To return object without explicit return keyword, you have to return it within a parenthesis ()
const example1 = () => ({ userName: "Ankita" });
console.log(example1().userName); // Ankita
console.log(example1.userName); // undefined
