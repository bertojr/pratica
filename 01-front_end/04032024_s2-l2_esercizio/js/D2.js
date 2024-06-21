/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a, b;
a = 15;
b = 22;

if(a > b){
  document.write("il più grande tra "+a+" e "+b+" è: "+a);
  console.log("il più grande tra "+a+" e "+b+" è: "+a);
}
else if(a < b){
  document.write("il più grande tra "+a+" e "+b+" è: "+b);
  console.log("il più grande tra "+a+" e "+b+" è: "+b);
}
else{
  console.log(a+" e "+b+" sono uguali");
}



/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let c;
c = 3;

if(c != 5){
  document.write("| not equal");
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x, div;
div = 5;
x = 25;

if(x%5 == 0){
  console.log(x+" è perfettamente divisibile per "+div);
}
else{
  console.log(x+" non è divisibile per "+div);
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1, num2, sottr, somma;
num1 = 2;
num2 = 6;
sottr1 = num1 - num2;
sottr2 = num2 - num1;
somma = num1 + num2;

if(num1 == 8 || num2 == 8 || somma == 8 || sottr1 == 8 || sottr2 == 8){
  if(num1 == 8){
    console.log(num1+" è uguale ad 8");
  }
  else {
    console.log(num2+" è uguale ad 8");
  }
}
else if(sottr == 8 || somma == 8){
  console.log("La sottrazione o addizione tra "+num1+" e "+num2+" è uguale a: 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart, sped, tot;
totalShoppingCart = 58;
sped = 10;

if(totalShoppingCart < 50){
  tot = totalShoppingCart + sped;
  console.log("Tot. prodotti: "+totalShoppingCart+" -> spedizione: "+sped+" -> Totale Checkout: "+tot);
}
else{
  tot = totalShoppingCart;
  console.log("Tot. prodotti: "+totalShoppingCart+" -> spedizione: 0 -> Totale Checkout: "+tot);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart1, sped1, tot1, sconto, totalShoppingCart1Scontato, blackFriday;
blackFriday = 20/100;
totalShoppingCart1 = 110;
sped1 = 10;
sconto = blackFriday*totalShoppingCart1;
totalShoppingCart1Scontato = totalShoppingCart1 - sconto;

console.log("Tot. prodotti: "+totalShoppingCart1+" -> Tot. prodotti con "+blackFriday+" di sconto: "+totalShoppingCart1Scontato);

if(totalShoppingCart1Scontato < 50){
  total = totalShoppingCart1Scontato + sped1;
  console.log("Tot. prodotti: "+totalShoppingCart1Scontato+" -> spedizione: "+sped+" -> Totale Checkout: "+tot);
}
else{
  tot = totalShoppingCart1Scontato;
  console.log("Tot. prodotti: "+totalShoppingCart1Scontato+" -> spedizione: 0 -> Totale Checkout: "+tot);
}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let p, r, t, temp;
p = 87;
r = 65;
t = 5;

if(p > r && p > t){
  if(r > t){
    console.log("Numeri ordinati in modo decrescente: "+p+" - "+r+" - "+t);
  }
  else{
    console.log("Numeri ordinati in modo decrescente: "+p+" - "+t+" - "+r);
  }
}
else if(r > p && r > t){
    if(p > t){
      console.log("Numeri ordinati in modo decrescente: "+r+" - "+p+" - "+t);
    }
    else{
      console.log("Numeri ordinati in modo decrescente: "+r+" - "+t+" - "+p);
    }
}
else if(p > r){
    console.log("Numeri ordinati in modo decrescente: "+t+" - "+p+" - "+r);
  }
else{
    console.log("Numeri ordinati in modo decrescente: "+t+" - "+r+" - "+p);
  }


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n;
n = 45;


if(typeof n == "number"){
  console.log(n+" è un numero");
}
else{
  console.log(n+" è di tipo: "+typeof n);
}



/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num4;
num4 = 124;

if(num4%2 == 0){
  console.log(num4+" è PARI");
}
else{
  console.log(num4+" è DISPARI");
}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 10;

if (val < 5) {
    console.log("Meno di 5");
  } 
else if (val < 10) {
    console.log("Meno di 10");
  } 
else {
    console.log("Uguale a 10 o maggiore");
  }



/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
console.log(me);



/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me);


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
var array = [];
array.push(1);
array.push(2);
array.push(3);
array.push(4);
array.push(5);
array.push(6);
array.push(7);
array.push(8);
array.push(9);
array.push(10);
console.log(array);


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
array[9] = 100;
console.log(array);



