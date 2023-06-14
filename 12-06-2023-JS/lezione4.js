let array = [3, 1, 40, 12, 42, 100, 431, 76, 4, 9];

/*function somma(){
    let sum = array.reduce(( (acc, el) => acc + el), 0);
    console.log(sum);
}*/
somma = function () {
  let sum = array.reduce((acc, el) => acc + el, 0);
  console.log(sum);
};
max = function () {
  let max = array.reduce(function (a, b) {
    return Math.max(a, b);
  });
  console.log(max);

  /** metodo alternativo */
  console.log(Math.max(...array));
};

min = function () {
  let min = array.reduce(function (a, b) {
    return Math.min(a, b);
  });
  console.log(min);
};
casuale = function () {
  let indiceCasuale = Math.floor(Math.random() * array.length);
  console.log(
    "INDICE CASUALE: ",
    indiceCasuale,
    " nuovo valore: ",
    array[indiceCasuale] * 3
  );
};
sumPari = function () {
  let elementFilter = array.filter((el) => el % 2 == 0);
  let somma = elementFilter.reduce((acc, el) => acc + el, 0);
  console.log(somma);
};

/**
 * Creare una pagina con un div che contiene un paragrafo con scritto «Hello Word!». Implementare in js: 
 * un metodo che:
    cambia colore al testo (da nero a blu)
    converte la scritta in «Ciao mondo»
    cambia le dimensioni del testo a 24px.
 */
function changeText() {
  let el = document.querySelector("p");
  el.style.color = "blue";
  el.innerHTML = "Ciao Mondo";
  el.style.fontSize = "24px";
}
changeText();
