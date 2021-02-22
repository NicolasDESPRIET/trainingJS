const scanf = require("scanf");

console.log("entrez la premiere chaine: ");
let chaine1 = scanf("%S");

console.log("entrez la seconde chaine: ");
let chaine2 = scanf("%S");

if (chaine1.length >= chaine2.length*2){
    console.log( `La chaine 1 est au moins deux fois plus grande que la chaine 2 : %d contre %d`, chaine1.length, chaine2.length);
}else{
    console.log( `La chaine 1 n'est pas deux fois plus long que l'autre : %d contre %d`, chaine1.length, chaine2.length);
}