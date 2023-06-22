// PUNTATORI - RIFERIMENTI
// js saprà a cosa fare riferimento quando userò
// i nomi che ho assegnato alle costanti
const pulsanteRosso = document.getElementById("red-btn");
const pulsanteGiallo = document.getElementById("yellow-btn");
const pulsanteVerde = document.getElementById("green-btn");
const boxColorato = document.getElementById("semaforo");

// function cambiaSfondoInRosso() {
//   boxColorato.classList.remove("yellow-box");
//   boxColorato.classList.remove("green-box");
//   boxColorato.classList.add("red-box");
// }

// function cambiaSfondoInGiallo() {
//   boxColorato.classList.remove("red-box");
//   boxColorato.classList.remove("green-box");
//   boxColorato.classList.add("yellow-box");
// }

// function cambiaSfondoInVerde() {
//   boxColorato.classList.remove("yellow-box");
//   boxColorato.classList.remove("red-box");
//   boxColorato.classList.add("green-box");
// }

// pulsanteRosso.addEventListener("click", cambiaSfondoInRosso);
// pulsanteGiallo.addEventListener("click", cambiaSfondoInGiallo);
// pulsanteVerde.addEventListener("click", cambiaSfondoInVerde);

function funzioneUnivoca(classe) {
  boxColorato.classList.remove("red-box", "yellow-box", "green-box");
  boxColorato.classList.add(classe);
  console.log(boxColorato);
}

pulsanteRosso.addEventListener("click", () => funzioneUnivoca("red-box"));
pulsanteGiallo.addEventListener("click", () => funzioneUnivoca("yellow-box"));
pulsanteVerde.addEventListener("click", () => funzioneUnivoca("green-box"));
