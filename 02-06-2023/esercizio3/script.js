// var number1 = prompt("inserire il primo numero");
// var number2 = prompt("inserire il secondo numero");
// var number3 = prompt("inserire il terzo numero");
// var number4 = prompt("inserire il quarto numero");
// var number5 = prompt("inserire il quinto numero");
// var number6 = prompt("inserire il sesto numero");
// var number7 = prompt("inserire il settimo numero");
// var number8 = prompt("inserire il ottavo numero");
// var number9 = prompt("inserire il nono numero");
// var number10 = prompt("inserire il decimo numero");

// number1 = Number(number1);
// number2 = Number(number2);
// number3 = Number(number3);
// number4 = Number(number4);
// number5 = Number(number5);
// number6 = Number(number6);
// number7 = Number(number7);
// number8 = Number(number8);
// number9 = Number(number9);
// number10 = Number(number10);

// console.log(
//   "Il risultato è " +
//     (number1 +
//       number2 +
//       number3 +
//       number4 +
//       number5 +
//       number6 +
//       number7 +
//       number8 +
//       number9 +
//       number10)
// );

var sum = 0;

for (i = 1; i <= 10; i++) {
  var number = prompt("inserisci il numero " + i);
  number = Number(number);
  console.log(number);
  sum += number;
}

console.log("la somma dei numeri è " + sum);
