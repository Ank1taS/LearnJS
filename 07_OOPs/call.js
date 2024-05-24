function setUserName(name) {
  // db operations, checking...  etc
  this.name = name;
  console.log(`user name is now set`);
}

function user(name, email, password) {
  //   setUserName(name); can not set name ankita to current context ie user()
  setUserName.call(this, name);

  this.email = email;
  this.password = password;

  console.log(`${this.name} user created`);
}

const user1 = new user("Ankita", "ankita@gmail.com", "ankita123");

console.log(user1);

// OUTPUT

/*
user name is now set
Ankita user created
user {
  name: 'Ankita',
  email: 'ankita@gmail.com',
  password: 'ankita123'
}
*/
