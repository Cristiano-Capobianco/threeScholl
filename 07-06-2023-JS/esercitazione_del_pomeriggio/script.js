// Sommare 10 volte il numero 5 con un ciclo while

// number = 0;
// conteggio = 0;

// while (conteggio < 10) {
//   number += 5;
//   conteggio++;
// }
// console.log(number);

// ------------------------------------------------------------------------------------------------------------------

// Definiamo una variabile a cui assegniamo il valore 100. sottraiamo il numero 3 per 10 volte

// number = 100;

// for (let index = 0; index < 10; index++) {
//   number -= 3;
// }
// console.log(number);

// ------------------------------------------------------------------------------------------------------------------

// Date due stringhe "Leone" e "Leotta" verificare se esistono lettere uguali ovvero lo stesso valore,stesso tipo (maiuscolo o minuscolo) e stessa posizione

// let stringa1 = "leone";
// let stringa2 = "leotta";

// // Itera su entrambe le stringhe fino alla lunghezza minore tra le due
// for (let i = 0; i < stringa1.length, i < stringa1.length; i++) {
//   // Verifica se i caratteri corrispondenti nelle due stringhe sono uguali
//   if (stringa1.charAt(i) == stringa2.charAt(i)) {
//     console.log(
//       "le due lettere sono uguali",
//       stringa1.charAt(i) + " " + stringa2.charAt(i)
//     );
//   }
// }

// ------------------------------------------------------------------------------------------------------------------

// Trovare i primi 15 numeri multipli di 3. Attenzione: utilizzare un solo ciclo; le variabili non devono essere create esternamente al ciclo

// for (let index = 0; index < 45; index = index + 3) {
//   console.log(index);
// }

// // altro modo di fare l'esercizio(con due indici)

// for (let y = 0, i = 0; y < 15; y++, i = i + 3) {
//   if (i == 0) {
//     console.log("multiplo di 3:" + 1);
//   } else console.log("multiplo di 3: " + i);
// }

// ------------------------------------------------------------------------------------------------------------------

// Stampare i primi 20 numeri pari(usare un solo ciclo)

// for (let index = 2; index <= 40; index = index + 2) {
//   console.log(index);
// }

//altro modo di fare l'esercizio(con due indici)

// for (let y = 1, i = 0; y < 20; i++) {
//   if (i % 2 == 0) {
//     console.log(y + ")" + i);
//     y++;
//   }
// }

// ------------------------------------------------------------------------------------------------------------------

// Dato il seguente array ["gatto", "cane", "renna", "pinguino", "coccodrillo"];
// Stampare tutte le parole con doppie consonanti(ad esempio renna);
// aggiungere altri tre animali
// Sommare tutte le lettere dell'array

// let array = ["gatto", "cane", "renna", "pinguino", "coccodrillo"];
// for (let i = 0; i < array.length; i++) {
//   let parolaSingola = array[i];
//   for (let y = 0; y < parolaSingola.length; y++) {
//     if (parolaSingola[y] == parolaSingola[y + 1]) {
//       console.log("Doppioni trovati" + parolaSingola[y]);
//       console.log(parolaSingola);
//     }
//   }
// }

// aggiungere altri tre animali
// let addedAnimal;
// for (let i = 0; i < 3; i++) {
//   addedAnimal = prompt("Aggiungi un animale!");
//   array.push(addedAnimal);
// }

// // sommare tutte le lettere dell'array
// let contatore = 0;
// for (let i = 0; i < array.length; i++) {
//   contatore += array[i].length;
// }
// console.log("HO ", contatore, " lettere");

// ------------------------------------------------------------------------------------------------------------------

//dato il seguente array[3,2,31,23,4]
// visualizzare il primo e l'ultimo elmento
// aggiungere gli elementi 21,7,4
// stamapare tutti i numeri pari
// eliminare l'elemento con valore 2

// visualizzare il primo e l'ultimo elmento
// array = [3, 2, 31, 23, 4];
// console.log(array[0]); // primo elemento
// console.log(array.length - 1); // ultimo elemento

// // aggiungere gli elementi 21,7,4
// array.push(21, 7, 4);

// // stamapare tutti i numeri pari
// for (let index = 0; index < array.length; index++) {
//   if (array[index] % 2 == 0) {
//     console.log("il valore ", array[index], " è pari");
//   }
// }

// // eliminare l'elemento con valore 2
// for (let index = 0; index < array.length; index++) {
//   if (array[index] == 2) {
//     array.splice(index, 1);
//   }
// }
// console.log(array);

// ------------------------------------------------------------------------------------------------------------------

// dato un array["gatto", "cane", "renna", "pinguino", "coccodrillo"]
// stamapare tutte le parole con almeno 4 consonanti

// let animals = ["gatto", "cane", "renna", "pinguino", "coccodrillo"];
// let vocali = ["a", "e", "i", "o", "u"];
// let consonanti = ["b", "c", "d"];

// for (let i = 0; i < animals.length; i++) {
//   let contaConsonanti = 0;
//   let parolaSingola = animals[i];
//   for (let y = 0; y < parolaSingola.length; y++) {
//     let carattere = parolaSingola.charAt(y);
//     // primo caso è g
//     if (!vocali.includes(carattere)) {
//       //se vocali contiene il carattere !FALSE ==> true
//       contaConsonanti += 1;
//     }
//   }
//   if (contaConsonanti > 3) {
//     console.log("PRINT:", parolaSingola);
//   }
// }

// ------------------------------------------------------------------------------------------------------------------

// dato un array di interi [1,3,6,14,7,2,50]
// invertire le posizioni

// let array3 = [1, 3, 6, 14, 7, 2, 50];
// let nuovoArray = array3.reverse;

// ------------------------------------------------------------------------------------------------------------------

// data una matrice 4 x 4 composta da tutti zeri
// rendere la matrice triangolare superiore utilizzando la funzione math.random
