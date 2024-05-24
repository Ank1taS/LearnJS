function Person(name, email, password) {
  this._name = name;
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "name", {
    get: function () {
      return this._name.toUpperCase();
    },

    set: function (name) {
      this._name = name;
    },
  });

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },

    set: function (email) {
      this._email = email;
    },
  });
}

const p1 = new Person("Ankita", "A@gmail.com", "ankita123");
console.log(p1.name);
