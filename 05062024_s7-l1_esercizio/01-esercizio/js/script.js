class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  confrontAge(utente) {
    if (this.age > utente.age) {
      return `${this.firstName} ${this.lastName} è più vecchio di ${utente.firstName} ${utente.lastName}`;
    } else if (this.age === utente.age) {
      return `${this.firstName} ${this.lastName} ha la stessa età di ${utente.firstName} ${utente.lastName}`;
    } else {
      return `${this.firstName} ${this.lastName} è più giovane di ${utente.firstName} ${utente.lastName}`;
    }
  }
}

const u1 = new User("Paulo", "Dybala", 29, "Roma");
console.log("Utente 1 ", u1);
const u2 = new User("Federico", "Chiesa", 27, "Torino");
console.log("Utente 2 ", u2);
const u3 = new User("Dusan", "Vlahovic", 24, "Torino");
console.log("Utente 3 ", u3);
const u4 = new User("Kenan", "Yldiz", 19, "Torino");
console.log("Utente 4 ", u4);
const u5 = new User("Moise", "Kean", 24, "Torino");
console.log("Utente 5 ", u5);

console.log(u1.confrontAge(u3));
