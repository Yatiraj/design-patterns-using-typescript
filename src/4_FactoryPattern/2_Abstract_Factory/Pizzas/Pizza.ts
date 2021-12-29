import {Dough} from "../Ingredients/Doughs/Dough";
import {Sauce} from "../Ingredients/Sauces/Sauce";
import {Veggies} from "../Ingredients/Veggies/Veggies";
import {Cheese} from "../Ingredients/Cheeses/Cheese";
import {Pepperoni} from "../Ingredients/Pepperonis/Pepperoni";
import {Clams} from "../Ingredients/Clams/Clams";

export abstract class Pizza {
    name: string;

    dough: Dough;
    sauce: Sauce;
    veggies: Veggies[];
    cheese: Cheese;
    pepperoni: Pepperoni;
    clam: Clams;

    abstract prepare() ;

    bake() {
        console.log("Baking " + this.name);
    }

    cut() {
        console.log("Cutting " + this.name);
    }

    box() {
        console.log("Boxing " + this.name);
    }

    displayPizza() {
        let displayPizza = '-------' + this.name + ' Ready -------\n';
        if(this.dough) {
            displayPizza += this.dough.display() + '\n';
        }
        if(this.sauce) {
            displayPizza += this.sauce.display() + '\n';
        }
        if(this.cheese) {
            displayPizza += this.cheese.display() + '\n';
        }
        if(this.clam) {
            displayPizza += this.clam.display() + '\n';
        }
        if(this.pepperoni) {
            displayPizza += this.pepperoni.display() + '\n';
        }
        if(this.veggies) {
            this.veggies.forEach((veggie) => displayPizza = displayPizza + veggie.display() + ' veggie,')
        }
        console.log(displayPizza + '\n\n');
    }
}