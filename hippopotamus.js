class Hippopotamus {
    constructor(name, weight, tusksSize){
        // constructeur avec valeur par defaut
        this.name = name?name:"Hipopo";
        // poids en kilo
        this.weight = weight?weight:1000;
        //taille en centimètre
        this.tusksSize = tusksSize?tusksSize:100;

        this.comptV = 0;
        this.comptD = 0;
        this.alive = true;
    }

    //action swin, l'Hippo perd 300 grammes
    swim(){
        if (this.weight > 0){
            this.weight-= 0.3;
        }else{
            console.log("il est mort");
            this.alive = false;
        }
        
    }

    //action eat, l'Hippo gagne 1 kilo
    eat(){
        this.weight+= 1;
    }

    //combat entre cet hippo et un autre , le gagnant a les plus grosses dents
    fight(hippopotamus){
        if( this.tusksSize > hippopotamus.tusksSize){
            console.log(` ${this.name} est le grand gagnant`);
            this.comptV++;
            hippopotamus.comptD++;
        }else{
            console.log(` ${hippopotamus.name} a gagné hélas`);
            this.comptD++;
            hippopotamus.comptV++;
        }
    }

    toString(){
        return `Cet Hippo s'appelle ${this.name}, il pèse ${this.weight} kilos et a des défences de ${this.tusksSize} cm. Il a ${this.comptV} victoires et ${this.comptD} défaites`
    }
}

module.exports = Hippopotamus;
// export default Hippopotamus;