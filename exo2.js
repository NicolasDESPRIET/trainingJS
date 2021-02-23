const scanf = require("scanf");

console.log("entrez un nombre: ");
let n = scanf("%d");

let val = 0;
for(let i = 1; i <= n; i++){
    val+=i;
}

console.log(val);