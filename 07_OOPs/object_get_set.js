const Person = {
  _name: "ankita",
  _email: "Ankita@gmail.com",

  get email() {
    return this._email.toUpperCase();
  },

  set email(personEmail) {
    this._email = email;
  },
};

// NOTE: _ before name use used as a convention for private members
// https://youtu.be/t6vLhF-iSxQ?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&t=1521
// factory function - Object.create()
const p1 = Object.create(Person);
console.log(p1.name); // undefined as no get/set for name
console.log(p1._name); // ankita  [but you should not access private members]

console.log(p1.email); // works fine    - ANKITA@GMAIL.COM
console.log(p1._email); // works fine   - Ankita@gmail.com
