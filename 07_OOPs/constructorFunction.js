function person(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;

  return this; // implicit return
}

const p1 = new person("ankita", "f", 22);
const p2 = new person("Rojalin", "f", 22); // without new overwrites value
const p3 = new person("Himanshu", "M", 22);

console.log(p1);
console.log(p2);
console.log(p3);

// In JavaScript, the new keyword is used to create an instance of a constructor function. When you use new with a function, it creates a new object, binds this to that object, sets up the prototype inheritance, and returns the newly created object implicitly (unless another object is explicitly returned).
// In your code, the person function acts as a constructor function. When you use new with it, it creates a new object with properties name, gender, and age, assigns the provided values to these properties, and returns the object implicitly

// it is possible because evrything in js is OBJECT

// ==============================
person.prototype.nextYear = function () {
  console.log(`your age will be ${++this.age}`);
};

p1.nextYear();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
