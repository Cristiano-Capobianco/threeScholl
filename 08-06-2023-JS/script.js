// Proviamo a scrivere una function

// function capitalize(word) {
//   const primaLettera = word.charAt(0).toUpperCase();
//   console.log(primaLettera);

//   const altriCaratteri = word.slice(1);
//   console.log(altriCaratteri);

//   const capitalized = primaLettera + altriCaratteri;
//   console.log(capitalized);

//   // torna la parola con la prima lettera maiuscola;
//   return capitalized;
// }

// console.log(capitalize("luca")); // ->  Luca
// console.log(capitalize("pippo")); // -> Pippo
// console.log(capitalize("pluTo")); // -> PluTo

// prendo la prima lettera e la porto maiuscola
// prendo tutti i carattreri dopo la prima
// metto insieme i due pezzi

// const ciao = "ciao";
// const primaLettera = ciao.charAt(0).toUpperCase();
// console.log(primaLettera);

// const altriCaratteri = ciao.slice(1);
// console.log(altriCaratteri);

// const capitalized = primaLettera + altriCaratteri;
// console.log(capitalized);

// ---------------------------------------------------------------

// Data una variabile count
// scrivere una function che ne incrementa il valore
// scrivere una function che ne decrementa il valore

// let count = 0;
// function increment() {
//   count++;
// }
// function decrement() {
//   count--;
// }

// console.log(count); // 1

// decrement();
// console.log(count); // 0

// increment();
// console.log(count); // 1

// ------------------------------------------------------------------------------------

// Riscriviamo la funzione in modo che il numero incrementato/decrementato
// venga passato come parametro:
// function inc(startingNumber) {
//   return startingNumber + 1;
// }
// function dec(startingNumber) {
//   startingNumber -= 1;
//   return startingNumber;
// }
// console.log(inc(5)); // 6
// console.log(inc(6)); // 7
// console.log(dec(1)); // 0

// ------------------------------------------------------------------------------------

// Unificare le due funzioni usando un parametro come distinguo:

// function counter(action = "increment", startingNumber) {
//   if (action === "increment") {
//     return increment(startingNumber);
//   } else {
//     return decrement(startingNumber);
//   }
// }

// function increment(startingNumber) {
//   return ++startingNumber;
// }

// function decrement(startingNumber) {
//   return --startingNumber;
// }

// console.log(counter("increment", 5)); // 6
// console.log(counter("decrement", 0)); // -1
// console.log(counter("increment", 3)); // 4

// // ------------------------------------------------------------------------------------

// // Creare le seguenti funzioni somma:
// // con tre parametri in input
// // con il primo parametro che indica il nome dell'operazione ed il resto dei parametri che indica le variabili da sommare

// function somma(a, b, c) {
//   return a + b + c;
// }

// console.log(somma(10, 53, 1));

// /**
//  * SOMMA DEI NUMERI
//  * @param {*} a addizione
//  * @param {*} b primo numero
//  * @param {*} c secondo numero
//  * @param {*} d terzo numero
//  * @returns NUMERO
//  */
// function somma2(a, b, c, d) {
//   if (a === "+") {
//     return b + c + d;
//   }
//   return "error";
// }

// console.log(somma2("+", 21, 21, 2));

// function somma3(a, ...arr) {
//   if (a == "+") {
//     let somma = 0;
//     for (let i = 0; i < arr.length; i++) {
//       somma += arr[i];
//     }
//     return somma;
//   }
//   return "Operazione non valida!";
// }
// console.log(somma3("+", 12, 4, 5, 2, 12, 4, 6, 5, 135, 1000));

// ------------------------------------------------------------------------------------

// Scrivere una funzione PeriodicWave(x,n) che:
// calcola la potenza n di x (moltiplica x per se stesso n volte)
// ritorna il risultato

// function PeriodicWave(x, n) {
//   let potenza = n ** x;
//   return potenza;
// }

// PeriodicWave(2, 4);

// ------------------------------------------------------------------------------------

// scrivere una funzione saluto(time) che prende in imput un intero (compreso tra 0 e 23) e visualizza un messaggio di saluto con scritto
// buongiorno(se compreso tra 0 e 12)
// buon pomeriggio (se compreso tra 12 e le 19)
// buonasera (se compreso tra le 19 e le 22)
// buonanotte (se compreso tra le 22 e le 23)

// function saluto(time) {
// if (math.sign(time)===-1) { verifica se il numero è negativo
//     alert("valore non valido", time)
//     return true;
// }
//   if (time >= 0 && time <= 12) console.log("Buongiorno!");
//   else if (time < 19) console.log("Buon pomeriggio!");
//   else if (time < 22) console.log("Buonasera!");
//   else if (time < 24) console.log("Buonanotte!");
//   else {
//     alert("fuori inrervallo", time)
// }
// }

// ------------------------------------------------------------------------------------

// 1) Dati i due numeri 9 e 11. Stampare la loro somma.

// const numero1 = 1;
// const numero2 = 2;
// const somma = numero1 + numero2;

// console.log(somma);

// 2) Data la stringa "il mio primo esercizio in Javascript" stamparla con tutti i caratteri maiuscoli

// const stringa =
//   "il mio primo esercizio in Javascript stamparla con tutti i caratteri maiuscoli";
// console.log(stringa.toUpperCase());

// 3) Data la stringa "Javascript è case-sensitive" stamparne la lunghezza

// let stringa = "Javascript è case-sensitive";
// console.log(stringa.length);

// 4) Data la stringa "Italia" stampare il primo e l'ultimo carattere

// let stringa = "Italia";
// let primoCarattere = stringa.charAt(0);
// let ultimoCarattere = stringa.charAt(stringa.length - 1);
// console.log(primoCarattere + " " + ultimoCarattere);

// 5) Date due stringhe "Roma" e "Catania " sommare le loro lunghezze

// let stringa1 = "Roma";
// let stringa2 = "Catania";

// console.log(stringa1.length + stringa2.length);

// 6) Data la stringa "Pizza" stampare la SOTTOSTRINGA che va dal secondo carattere fino alla fine della stringa

// let stringa = "Pizza";
// console.log(stringa.slice(1));

// 7) Data la stringa "JavaScript mi piace molto"
// Estrarre la lunghezza della stringa
// • Estrarre l'indice di partenza della sottostringa "mi
// • Utilizzare i due numeri per calcolare l'area di un rettangolo.

// let stringa = "JavaScript mi piace molto";
// lunghezzaStringa = stringa.length;
// console.log(lunghezzaStringa);

// let indiceMi = stringa.indexOf("mi");
// console.log(indiceMi);

// let somma = lunghezzaStringa + indiceMi;
// console.log(somma);

// 8) Dati tre numeri (a=11;b=3;c=2), trovare il resto della divisione tra le variabili "a" e "b" e stampare se è maggiore o meno della variabile "'".

// let a = 11;
// let b = 3;
// let c = 2;

// let restoAeB = a % b;

// if (restoAeB > c) {
//   console("resto maggiore di c");
// } else {
//   console.log("resto minore o uguale a c");
// }

// 9) Date due stringhe (Filo e Ponte) sostituire i primi due caratteri della prima stringa con i primi due caratteri della seconda stringa

let stringa1 = "filo";
let stringa2 = "Ponte";

let stringa1Char = stringa1.slice(0, 2);
let stringa11Char = stringa1.slice(2);

let stringa2Char = stringa2.slice(0, 2);
let stringa22Char = stringa2.slice(2);

console.log(stringa1Char + stringa2Char);
console.log(stringa11Char + stringa22Char);
