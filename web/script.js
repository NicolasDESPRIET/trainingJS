console.log("test link");

let tab = ["Annanas", "pamplemousse", "Pruneau", "Banane", "peche"];
let color = ["red", "blue", "green"];
let v;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let pushButton = document.querySelector("button");

pushButton.addEventListener("click", function() {
    document.body.style.backgroundColor = color[getRandomInt(3)];
    let divBal = document.getElementById("roolWord");
    rollworld(divBal);
});

function rollworld(divBal){
    clearInterval(v);
    v = setInterval(function(){
        divBal.innerHTML = tab[getRandomInt(5)];
    }, 5000);
}