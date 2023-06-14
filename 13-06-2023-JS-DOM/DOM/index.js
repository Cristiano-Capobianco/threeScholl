// Esercizio:
// in html:
// <button class="minus">-</button>
// <span class="value">0</span>
// <button class="plus">+</button>

// scrivere su JS il codice che permetta di:
// definire 1 variabile per ogni elemento in HTML (+, -, value);
// inserire 1 event listener per i due bottoni
// al click su ".minus" diminuiamo il valore dello span di uno e lo salviamo in html
// al click su ".plus" aumentiamo il valore dello span di uno e lo salviamo in html

// document.querySelector(); // per prendere gli elementi
// console.log(outputEl.innerHTML); // torna lo HTML del mio elemento
// outputEl.innerHTML = 2; // salva lo HTML nel mio elemento

// buttonPlus.addEventListener("click", function () {});

let bottoneIncremento = document.querySelector(".plus");
let bottoneDecremento = document.querySelector(".minus");
let spanRisultato = document.querySelector(".value");

bottoneIncremento.addEventListener("click", function () {
  console.log("Ho cliccato su +");
  console.log(spanRisultato.innerHTML);
  spanRisultato.innerHTML = 1 + Number(spanRisultato.innerHTML);
});

bottoneDecremento.addEventListener("click", function () {
  console.log("Ho cliccato su -");
  console.log(spanRisultato.innerHTML);
  spanRisultato.innerHTML = Number(spanRisultato.innerHTML) - 1;
});

// ALTRO METODO ------------------------------------------------------------------

// const buttonPlus = document.querySelector(".counter button.plus");
// const buttonMinus = document.querySelector(".counter button.minus");
// const spanValue = document.querySelector(".counter span.value");

// if (spanValue && buttonMinus && buttonPlus) {
//   buttonPlus.addEventListener("click", () => {
//     console.log(this);

//     const currentValue = Number(spanValue.innerHTML); // torna html dentro il mio span, è sempre un "string"
//     spanValue.innerHTML = currentValue + 1; // sostituisco html con il nuovo valore incrementato di 1;
//   });

//   buttonMinus.addEventListener("click", function () {
//     console.log(this); // "this" -> elemento buttonMinus

//     const currentValue = Number(spanValue.innerHTML); // torna html dentro il mio span, è sempre un "string"
//     spanValue.innerHTML = currentValue - 1; // sostituisco html con il nuovo valore incrementato di 1;
//   });
// } else {
//   console.error("Sei un folle a non avere questo HTML! >:( ");
// }
