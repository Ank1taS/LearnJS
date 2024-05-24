class User {
  constructor(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}123`;
  }
}

const user1 = new User("Ankita", "ankita@gmail.com", "anki");
console.log(user1.encryptPassword());

// Behind the screen
function UserClass(userName, email, password) {
  this.userName = userName;
  this.email = email;
  this.password = password;
}

UserClass.prototype.encryptPassword = function () {
  return `${this.password}123`;
};
const user2 = new User("Ankita", "ankita@gmail.com", "anki");
console.log(user1.encryptPassword());
