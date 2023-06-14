let taskList = []; // è la lista dei tasks

//let tasList = ["lava la macchina", "fare la spesa"]
function saveTask() {
    //testo immesso nell'input text
    const task = document.querySelector("#taskName");
    const tasktext = task.value.trim(); //elimino tutti gli spazi iniziali e finali
    if(!errorText(tasktext)) { 
        //salvo il task
        taskList.push(tasktext);
        //stampo la lista
        printTask();
    }
    
}

function resetList() {
    taskList = [];
    //ristampo la lista così da cancellare tutto
    printTask();
}

function printTask() {
    const divList = document.querySelector("#printTaskList");
    let str = "";
    taskList.forEach(t => str += t + "<br />");
    //altro metodo
    //str = taskList.join("\n");
    divList.innerHTML = str;
}

function errorText(tasktext) {
    if(taskList.length == 10) { // se esistono già 10 tasks
        alert("Non è possibile inserire più task");
        return true; //esco dalla funzione
    }
    if(taskList.filter(t => t == tasktext).length != 0) { // verifica se è già presente
        // 1 passo filtro per i task con la stessa stringa arrayTask.filter(t => t == tasktext)
        // il filter restituisce un array. 
        // se l'array contiene un elemento il task è presente. arrayFiltrato.length != 0
        alert("Task già presente");
        return true; //esco dalla funzione
    }
    if(tasktext.split(" ").length > 3 || tasktext.split(" ").length < 1 ) {
        // taskCurrente = "la mia spesa";
        // array[] = split(" ") ==> array[1] = "la", array[2] = "mia", array[3] = "spesa"
        alert("Numero di parlore deve essere compreso tra uno e tre")
        return true //esco dalla funzione
    }
    return false;
}