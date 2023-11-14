let arrayGenerato = [];
let digit;
let casualNumOnPage = document.getElementById("innerNum")

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

for (let i = 1; i <= 5; i++) {
    let numeriCasuali = getRndInteger(1, 100);
    console.log("i nel for" + i)
    arrayGenerato.push(numeriCasuali)
    console.log(arrayGenerato)
}

casualNumOnPage.innerHTML= arrayGenerato;

function myFunction(){
    casualNumOnPage.classList.add("hid")
    console.log(arrayGenerato);
}
let punteggio = 0
const timer = setTimeout(myFunction,  30 * 1000);
function otherTimeOut (){
    for (i = 1; i <=5; i++){
        digit = parseInt(prompt("Inserisci i Numeri precedenti"))
        
    if (arrayGenerato.includes(digit)){
        
        punteggio ++;


    }
    else {
        alert("You Lost")
        break;
    }

    }
    if (punteggio==5){
        alert("You Won")
    }

}
const secondTimer = setTimeout(otherTimeOut,  30 * 1000);
