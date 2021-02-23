const Hippopotamus = require("./hippopotamus");


//initialiser les hipopo
let hippo1 = new Hippopotamus("jean-michel", 2000, 150);
console.log(hippo1.toString());

let hippo2 = new Hippopotamus("Phillipe", 1500, 120);
let hippo3 = new Hippopotamus("Louis", 1600, 200);

// test des combats victoire et defaite
hippo1.fight(hippo2);
hippo1.fight(hippo3);
console.log("");

// 3 semaines de vie d'un hippo
console.log("3 semaines de vie d'un hippo");
console.log("semaine 1 :");
semaine(hippo1);
console.log("");
console.log("semaine 2 :");
semaine(hippo1);
console.log("");
console.log("semaine 3 :");
semaine(hippo1);


// les actions de la journée, manger 2 fois, nager 3 fois, toutes les heures pendant 15h
function jour(hippo){
    for (let i = 0; i < 15; i++){
        hippo.eat();
        hippo.eat();
        for (let k = 0; k < 3; k++){
            if(hippo.alive){
                hippo.swim();
            }
        }
    }
}

// les actions sur uen semaine, affiche l'hippo chaque soir.
function semaine(hippo){
    for (let j = 0; j < 7; j++){
        jour(hippo);
        console.log(hippo.toString());
    }
}