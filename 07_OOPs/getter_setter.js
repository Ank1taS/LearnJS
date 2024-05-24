class Person {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(personEmail) {
    this._email = personEmail; // chnage name of varriable to avoid race condition
  }

  get password() {
    // you can hide the actual pw from receiver by sending template literals
    return `myPW${this._password.toUpperCase()}`;
  }

  set password(pw) {
    this._password = pw;
  }
}

const ankita = new Person("ankita", "ankita@gamil.com", "ankita123");
console.log(ankita.password);

// if you are defining getter then you have to define the setter [otherwise TypeError: Cannot set property email of #<Person> which has only a getter  (for any attribute)    ]
