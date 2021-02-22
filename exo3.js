const scanf = require('scanf');

console.log("entrez 5 chiffres");
var table = scanf("%d %d %d %d %d");
console.log(table);

let max = table[0];
let moy = table[0];

for (let i = 1; i < table.length; i++){
    if (table[i] > max){
        max = table[i];
    }
    moy+= table[i];
}

console.log(`max : %d`, max);
console.log(`moyenne : %d`, moy/5);