/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
console.log("*****************************************************");
console.log("******************** ESERCIZIO 1 ********************");
console.log("*****************************************************");

let str1, str2;

string1="Paulo";
string2="Dybala";

/*
function concat(str1, str2){
  return str1.slice(0, 2).concat(str2.substr(-4));
}*/

const concat=(str1, str2) => {
  return str1.slice(0, 2).concat(str2.substr(-4)).toUpperCase();
}
console.log("Ecco la sringa richiesta: \n"+concat(string1, string2));


/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
console.log("*****************************************************");
console.log("******************** ESERCIZIO 2 ********************");
console.log("*****************************************************");
let myArray=[];

const arrayRandom=(array) => {
  let nRandom;
  for(i=0; i<10; i++){
    nRandom=Math.round(Math.random()*100);
    array.push(nRandom);
  }

  return array;
}

console.log("Array con numeri random: \n"+arrayRandom(myArray));



/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
console.log("*****************************************************");
console.log("******************** ESERCIZIO 3 ********************");
console.log("*****************************************************");
const arrayPari=(array) => {
  return array.filter((el) => el%2===0);
}

console.log(arrayPari(myArray));


/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
console.log("*****************************************************");
console.log("******************** ESERCIZIO 4 ********************");
console.log("*****************************************************");
const sommaArray=(array) => {
  let somma=0;
  array.forEach((el) => somma+=el);
  return somma;
}

console.log("Somma tutti i numeri dell'array: \n"+sommaArray(myArray));


/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
console.log("*****************************************************");
console.log("******************** ESERCIZIO 5 ********************");
console.log("*****************************************************");
const sommaReduce=(array) => {
  return array.reduce((el, total) => el+total);
}

console.log("Somma utti i numeri dell'array con reduce: \n"+sommaReduce(myArray));


/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
console.log("*****************************************************");
console.log("******************** ESERCIZIO 6 ********************");
console.log("*****************************************************");
let num;

num=10;

const arrayIncr=(array, n) => {
  return array.map((el) => el+n);
}

console.log(arrayIncr(myArray, num));


/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
console.log("*****************************************************");
console.log("******************** ESERCIZIO 7 ********************");
console.log("*****************************************************");
let myArrayS=["EPICODE", "is", "great"];

const arrayString=(array) => {
  return array.map((el) => el.length);
}

console.log(arrayString(myArrayS));


/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
console.log("*****************************************************");
console.log("******************** ESERCIZIO 8 ********************");
console.log("*****************************************************");
const arrayDispari=() => {
  let myArray=[];

  for(i=0; i<100; i++){
    if(i%2!=0){
      myArray.push(i);
    }
  }
  return myArray;
}

console.log(arrayDispari());


/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2016',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]


/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
console.log("*****************************************************");
console.log("******************** ESERCIZIO 9 ********************");
console.log("*****************************************************");
const film_pu_vecchio=(array) => {
  let result={Year: 2100};
  array.forEach((movie) => {
    let year=parseInt(movie.Year);
    if(year<result.Year){
      result=movie;
    }
  })
  return result;
}

console.log(film_pu_vecchio(movies));


/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
console.log("*****************************************************");
console.log("******************** ESERCIZIO 10 *******************");
console.log("*****************************************************");
const num_film=(array) => {
  return array.length;
}

console.log(num_film(movies));



/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
console.log("*****************************************************");
console.log("******************** ESERCIZIO 11 *******************");
console.log("*****************************************************");
const onlyTitle=(array) => {
  return array.map((movie) => movie.Title)
}

console.log(onlyTitle(movies));



/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
console.log("*****************************************************");
console.log("******************** ESERCIZIO 12 *******************");
console.log("*****************************************************");
const film_millennio_corrente=(array) => {
  return array.filter((movie) => parseInt(movie.Year)>1999)
}

console.log(film_millennio_corrente(movies));


/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
console.log("******************************************************");
console.log("******************** ESERCIZIO 13 ********************");
console.log("******************************************************");
const somma_anni=(array) => {
  return array.reduce((total, movie) => total+parseInt(movie.Year), 0);
}

console.log(somma_anni(movies));


/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
console.log("******************************************************");
console.log("******************** ESERCIZIO 14 ********************");
console.log("******************************************************");
let id="tt4154796";

const film_id=(array, id) => {
  return array.find((movie) => movie.imdbID===id);
}

console.log(film_id(movies, id));


/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
console.log("******************************************************");
console.log("********************* ESERCIZIO 15 *******************");
console.log("******************************************************");
let anno=2005;

const index_film=(array, year) => {
  return array.findIndex((movie) => parseInt(movie.Year)===year);
}

console.log(index_film(movies, anno));

