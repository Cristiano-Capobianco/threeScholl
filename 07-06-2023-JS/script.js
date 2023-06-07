/* Scrivere il codice che permatta di:
  - Chiedere all'utente (prompt) per 4 volte (for) cosa deve comprare al market;
  - Salvare gli input dell'utente in una variabile (array);
  - Stampare in console la lista della spesa
  - S.G.: Chiedere all'utente anche cos'è facoltativo nella lista
    - eseguire un loop togliendo l'elemento facoltativo (splice);
   */

// tips:
// eseguire un for per 4 volte e chiedere all'utente qualcosa tramite prompt;
// salvare i dati dentro un array, che dobbiamo aver definito prim

// let lista = [];

// for (let index = 0; index < 4; index++) {
//   const element = prompt("cosa desideri acquistare?");

//   // controlla se il valore è una stringa
//   if (typeof element === "string") {
//     lista.push(element);
//   }

//   console.log(lista.toString);
// }

// --------------------------------------------------------------------------

// // chiedere all'utente quale elemento della lista vuole rimuovere

// const lista2 = ["Pane", "Pasta", "Latte", "Olio"];
// const cosaRimuovere = prompt("cosa vuoi eliminare dalla lista?");

// // - chiedere l'elemento da togliere: indice / stringa
// // - fare un ciclo fino a trovare l'elemento e toglierlo usando lista.splice()

// for (let index = 0; index < lista2.length; index++) {
//   const elementCorrente = lista2[index];
//   console.log(elementCorrente, cosaRimuovere);

//   if (elementCorrente === cosaRimuovere) {
//     console.log("devo rimmuovere l'elemento");
//     lista2.splice(index, 1);
//   }
// }

// console.log(lista2);

// --------------------------------------------------------------------------

/* Scrivere il codice che data un input numerico 
     dell'utente riesca a determinare il fattoriale di quel numero;

     5 -> 5 * 4 * 3 * 2 * 1 = 120;
     4 -> 4 * 3 * 2 * 1 = 24;
  */
// const input = prompt("Numero di cui calcore il fattoriale");
// const numberInput = Number(input);
// let output = numberInput;

// // partendo dal passato dall'utente eseguire un loop
// // che parte dal numero dato ed arriva ad 1,
// // ad ogni ciclo sommare il nuovo valore calcolato

// for (let index = numberInput; index >= 1; index--) {
//   output *= index - 1;

//   console.log(output);
// }
