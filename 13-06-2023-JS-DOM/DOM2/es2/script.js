let number1 = number2 = "";
let operazione = "";
function showNameSurname() {
    const name = document.querySelector("#name");
    const surname = document.querySelector("#surname");

    //dove stampare
    const pNameSurname = document.querySelector("#nameSurname");
    pNameSurname.innerHTML = name.value + " " + surname.value;
}