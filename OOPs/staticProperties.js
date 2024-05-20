// static ketword can define static method, data member or initialization block in class of js
// Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.
// Static properties belongs to class so they can access by Class name but not belongs to class instance, so cant access by class instance

class User {
  constructor(userName) {
    this.userName = userName;
  }

  logMe() {
    console.log(`USER ${this.userName} is logged in`);
  }

  createId() {
    return `${this.userName}100`;
  }
}

const user1 = new User("ankita");

user1.logMe(); // USER ankita is logged in
// user1, createId();  //ReferenceError: createId is not defined

// NOTE:
// child class of User(parent class) inherits the static fields and can access using child class name but cant access using child class instance
