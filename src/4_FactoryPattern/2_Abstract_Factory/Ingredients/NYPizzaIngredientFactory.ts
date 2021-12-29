import {PizzaIngredientFactory} from "./PizzaIngredientFactory";
import {Cheese} from "./Cheeses/Cheese";
import {Clams} from "./Clams/Clams";
import {Dough} from "./Doughs/Dough";
import {Pepperoni} from "./Pepperonis/Pepperoni";
import {Sauce} from "./Sauces/Sauce";
import {Veggies} from "./Veggies/Veggies";
import {ThinCrustDough} from "./Doughs/ThinCrustDough";
import {MarinaraSauce} from "./Sauces/MarinaraSauce";
import {MozzarellaCheese} from "./Cheeses/MozzarellaCheese";
import {FreshClams} from "./Clams/FreshClams";
import {SlicedPepperoni} from "./Pepperonis/SlicedPepperoni";
import {Garlic} from "./Veggies/Garlic";
import {Onion} from "./Veggies/Onion";
import {Mushroom} from "./Veggies/Mushroom";

export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
    createCheese(): Cheese {
        return new MozzarellaCheese();
    }

    createClam(): Clams {
        return new FreshClams();
    }

    createDough(): Dough {
        return new ThinCrustDough();
    }

    createPepperoni(): Pepperoni {
        return new SlicedPepperoni();
    }

    createSauce(): Sauce {
        return new MarinaraSauce();
    }

    createVeggies(): Veggies[] {
        return [new Garlic(), new Onion()];
    }

}