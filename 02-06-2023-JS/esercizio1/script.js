var number1 = prompt("inserire il primo numero");
var number2 = prompt("inserire il secondo numero");

number1 = Number(number1);
number2 = Number(number2);

if (number1 > number2) {
  console.log(number1 + " è maggiore di " + number2);
} else if (number1 < number2) {
  console.log(number2 + " è maggiore di " + number1);
} else {
  console.log("i numeri sono uguali");
}
