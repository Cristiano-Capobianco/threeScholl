let colori = new Array("red", "green", "blue", "black", "cyan", "#660099");
let count = 0;
let stop = false;

function changeColorWithSetTimeout() {
    window.setTimeout("setcolor()",2000);
}
function setcolor()     
{
    const body = document.querySelector("body");
    const indiceCasuale = Math.floor(Math.random() * colori.length)
    body.style.backgroundColor = colori[indiceCasuale];
}