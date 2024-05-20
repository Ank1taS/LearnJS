// parent class
class User {
  constructor(userName) {
    this.userName = userName;
  }

  logme() {
    console.log(`USER ${this.userName} is logged in`);
  }
}

// child class
class Teacher extends User {
  constructor(name, email, password) {
    // super() takes this as argument just like call() by default.
    super(name); // NOTE : super() should be the 1st line in constructor()
    this.email = email;
    this.password = password;
  }

  takeAttendance() {
    console.log(`Teacher ${this.userName} took his/her attendance today`);
  }
}

const t1 = new Teacher("Ankita", "ankita@gmail.com", "ankita123");
t1.takeAttendance();
t1.logme();

// OUTPUT
// Teacher Ankita took his/her attendance today
// USER Ankita is logged in

const u1 = new User("sona");
u1.logme();
// u1.takeAttendance();     // error - parent class instance cant access child class methods

console.log(t1 instanceof User); // true
console.log(t1 instanceof Teacher); // true
console.log(u1 instanceof User); // true
console.log(u1 instanceof Teacher); // false
