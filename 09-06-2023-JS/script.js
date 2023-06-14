// Esercizio
// scrivere due funzioni:

// La prima accetta una parametro numerico un torna un booleano (true/false)
// in base al fatto che il parametro sia divisibile per due o meno.

// La seconda function accetta due parametri:
// il primo è un numero
// il secondo è la funzione a cui verrà passato il primo parametro.
// eseguire la funzione del secondo parametro solo per numeri diversi da 0;
// stampare a schermo il risultato della seconda function

// function isEven(number) {
//   return number % 2 === 0;
// }

// function validateNumber(number, validateFn) {
//   if (number !== 0) {
//     let result = validateFn(number);
//     console.log(result);
//   } else {
//     console.error("lo zero non è previsto");
//   }
// }

// validateNumber(10, isEven); // è vero
// validateNumber(0, isEven); // torna messaggio di errore
// validateNumber(5, isEven); // non è vero
