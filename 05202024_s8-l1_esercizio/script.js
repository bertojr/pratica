"use strict";
class User {
    constructor(_nome, _cognome) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.credito = 0;
        this.numeroChiamate = 0;
    }
    ricarica(amount) {
        this.credito += amount;
    }
    chiamata(minuti) {
        const costoChiamata = 0.2 * minuti;
        if (this.credito >= costoChiamata) {
            this.credito -= costoChiamata;
            this.numeroChiamate += minuti;
        }
        else {
            console.log("Credito insufficente per effettuare la chimata");
        }
    }
    chiama404() {
        return this.credito;
    }
    getNumeroChiamata() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
let user1 = new User("Paulo", "Dybala");
let user2 = new User("Dusan", "Vlahovic");
user1.ricarica(10);
console.log("Il tuo credito disponibile è di " + user1.chiama404() + " €");
// chiamata numero 1
user1.chiamata(25);
console.log("Il tuo credito disponibile è di " + user1.chiama404() + " €");
console.log("Hai effettuato " + user1.getNumeroChiamata() + " minuti di chiamata");
user1.azzeraChiamate();
// chiamata numero 2
user1.chiamata(25);
console.log("Il tuo credito disponibile è di " + user1.chiama404() + " €");
console.log("Hai effettuato " + user1.getNumeroChiamata() + " minuti di chiamata");
user1.azzeraChiamate();
// chiamata numero 3
user1.chiamata(10);
console.log("Il tuo credito disponibile è di " + user1.chiama404() + " €");
console.log("Hai effettuato " + user1.getNumeroChiamata() + " minuti di chiamata");
user1.azzeraChiamate();
