// object destructuring
const obj1 = {
  fullName: "Ankita Sahoo",
  email: "ankita@gmail.com",
};

//
console.log(obj1.fullName); // Ankita Sahoo

const { fullName: name } = obj1;
// console.log(fullName);
console.log(name); // Ankita Sahoo

//
//
//
// JSON fromat: Javascript Object Notation
// https://randomuser.me/
// https://jsonformatter.org/

// result of an api call:
/*
 {
  "name": "Ankita Sahoo",
  "email": "ankita@gmail.com"
 }


 [
  {},
  {},
  {},
  ...
  {}
 ]
 */
