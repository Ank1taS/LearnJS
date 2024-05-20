// injecting a prototype / property to Object class, its childeren classes (like array, function) inherits this property

const superHero = ["Superman", "thor"];

const superHeroUniverse = {
  thor: "Marvel",
  superMan: "DC",

  //   universe: function() {
  //     return this;
  //   }
};

// superHero.showUniverse();
// superHeroUniverse.showUniverse();
// these will throw error as there is no such property

Object.prototype.showUniverse = function () {
  console.log(`they belongs to multiverse`);
};

superHero.showUniverse();
superHeroUniverse.showUniverse();
// No error as the property is added to the superior (Object) access
// it is inheritance in default hierarchy

//

//

//
//=============================================================================
// an usecase

let user = "Ankita                   ";
console.log(user.length); // 25

String.prototype.trueLength = function () {
  console.log(this);
  return this.trim().length;
};
console.log(user.trueLength()); // 6

// OUTPUT
// [String: 'Ankita                   '] - as user is the refrence of the givr string so this refers to it
// 6

//
//
//
//==============================================================================================================
//      USER DEFINED INHERITANCE
const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

// const TASupport = {
//   makeAssignment: "JS assignment",
//   fullTime: true,
//   __proto__: TeachingSupport,
// };

// Teacher.__proto__ = User; // old style

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

// (method) ObjectConstructor.setPrototypeOf(o: any, proto: object | null): any
// @param o — The object to change its prototype.
// @param proto — The value of the new prototype or null.
// Sets the prototype of a specified object o to object proto or null. Returns the object o.
const obj = {};
const parent = { foo: "bar" };

console.log(obj.foo);
// Expected output: undefined

Object.setPrototypeOf(obj, parent);

console.log(obj.foo);
// Expected output: "bar"
