/*
 * ----1) Collegate questo file a html
 *
 * ----2) Crea 3 button con 3 id diversi e per ciascuno assegnagli un event "click" (get Nome, set Età, get All)
 *
 * 3) Crea 3 funzioni:
 *     la prima accetta come parametro un "nome" e restituisce una stringa composta da obj.welcomeMessage + nome
 *     la seconda accetta come parametro un "età" e imposta il valore dell'eta dell'oggetto di cui sotto...
 *     la terza restituisce entrambe le info di cui sopra messe insieme // 'Benvenuto Simone 29'
 *
 * 4) Fai eseguire ai rispettivi button le rispettive funzioni
 *
 * PS: utilizza `${}`, il destructuring e le arrow functions per completare l'esercizio
 *
 */

const obj = {
  welcomeMessage: "Benvenuto",
  eta: 0,
};

const mioNome = "Simone";

const getNome = (nome) => `${obj.welcomeMessage} ${nome}`;

const setEta = (eta) => {
  obj.eta = eta;
  console.log("Impostato valore di obj.eta con ", eta);
};

const getAll = () => `${getNome(mioNome)} ${obj.eta}`;

document.getElementById("getNome").addEventListener("click", () => {
  console.log(getNome(mioNome));
});

document.getElementById("setEta").addEventListener("click", () => {
  setEta(29);
});

document.getElementById("getAll").addEventListener("click", () => {
  console.log(getAll());
});

// Good Luck!!!
