let number1 = number2 = ""; 
let operazione = "";
function numberCliccked(value){
    if(operazione != ""){
        // dobbiamo usare la seconda variabile
        number2 += value; // creare la concatenzione dei numeri 
        const pVal2 = document.querySelector("#number2"); // per la visualizzazione nell'html
        pVal2.innerHTML = number2;
    }
    else{
        // dobbiamo usare la prima variabile
        // value NUMERO
        // numer1 STRINGA
        number1 += value; // creare la concatenzione dei numeri 
        const pVal1 = document.querySelector("#number1"); // per la visualizzazione nell'html
        pVal1.innerHTML = number1;
    }
}
function operation(){
    const select = document.querySelector("select");
    operazione = select.value;
    console.log("HO CLICCATU SU : " + operazione);
    const oper = document.querySelector("#oper");
    oper.innerHTML = operazione;
}
function calcolaRisultato(){ 
    let val1 = (number1 != "") ? parseInt(number1) : 0;
    let val2 = (number2 != "") ? parseInt(number2) : 0; 
    let result = "";
    switch(operazione){
        case "+":
            result = somma(val1,val2)
            break;
        case "-":
            result = differenza(val1,val2)
            break;
        case "*":
            result = molt(val1,val2)
            break;
        case "/":
            result = divis(val1,val2);
            break;
        default:
            console.log("errore operazione");
            break;
    }
    const res = document.querySelector("#result");
    res.innerHTML = " = " +result;

    resetData();
}
function resetData(){
    // per una nuova operazione
    operazione = "";
    number1 = "";
    number2 = ""; 
    // resetto la select 
    const select = document.querySelector("select");
    select.value = ""; 
    
}
function somma(a,b){
    return a + b;
}
function differenza(a,b){
    return a-b;
}
function molt(a,b){
    return a * b;
}
function divis(a,b){
    if(b != 0){
        return a/b;
    }
    return 0;
}