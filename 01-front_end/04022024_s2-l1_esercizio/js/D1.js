/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.

*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("****************************************************** TIPI DI DATI *******************************************************");
console.log("- In javascript ci possono essere 5 vari tipi dati:");
console.log("STRINGA -> Una sequenza di caratteri delimitata da singoli apici o doppi apici. -> QUESTA è UNA STRINGA");

console.log("*****************************************************************************************************************************");

console.log("NUMERI -> si destinguono perchè valorizzati senza apici, possono essere numeri interi, numeri negtivi o numeri decimali");
console.log("Numero intero: "+124);
console.log("Numero negativo: "+-124);
console.log("Numero decimale: "+124.4539); // per impostare un numero decimale si utilizza il . e non la ,

console.log("*****************************************************************************************************************************");

console.log("VALORI BOOLEANI -> assumono solo due valori, true o false");
console.log("Questi sono valori Booleani "+true+" | "+false);

console.log("*****************************************************************************************************************************");

console.log("Valori null -> solo valore null, non rientra in nessuno dei precedenti tipi di dato");
console.log("Questo è un valore null: "+null);

console.log("*****************************************************************************************************************************");

console.log("Valori undefined -> rappresenta un valore che non esiste");

console.log("*****************************************************************************************************************************");

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName;
myName = "Daniele";
console.log("Questo è il mio nome: "+myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a, b, somma;
a = 12;
b = 20;
somma = 12 + 20;

console.log("La somma tra "+a+" e "+b+" equivale a: "+somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x, s;
x = 12;
s = 'x';

console.log("La variabile "+"'"+s+"'"+" equivale a "+x);


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myName = "Bertone";

console.log("Questo è il mio cognome: "+myName);
console.log("Ho sovrascritto la variabile myName dichiarata in precedenza");

const PIGRECO = 3.14;
// PIGRECO = 1.345;
// se si cerca di riassegnare un valore ad una costante si blocca tutto il codice e da errore nella console
// una costante si utilizza per dichiarare valori non modificabili all'inerno di tutto il codice javascript

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let sottr;
sottr = 4 - x;

console.log("La sottrazione tra 4 e "+x+" equivale a: "+sottr);


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1, name2;
name1 = "john";
name2 = "John";

console.log(name1+" è diverso da "+name2+"? ");
console.log(name1 != name2);

console.log(name1+" è uguale a "+name2+"? ");
console.log(name1 == name2);

console.log(name1+" è uguale a "+name2.toLowerCase()+"?");
console.log(name1.toLowerCase() == name2.toLowerCase());


