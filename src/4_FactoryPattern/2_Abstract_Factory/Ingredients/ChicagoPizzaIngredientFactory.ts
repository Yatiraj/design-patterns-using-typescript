import {PizzaIngredientFactory} from "./PizzaIngredientFactory";
import {Cheese} from "./Cheeses/Cheese";
import {Clams} from "./Clams/Clams";
import {Dough} from "./Doughs/Dough";
import {Pepperoni} from "./Pepperonis/Pepperoni";
import {Sauce} from "./Sauces/Sauce";
import {Veggies} from "./Veggies/Veggies";
import {ThickCrustDough} from "./Doughs/ThickCrustDough";
import {PlumTomatoSauce} from "./Sauces/PlumTomatoSauce";
import {ParmesanCheese} from "./Cheeses/ParmesanCheese";
import {FrozenClams} from "./Clams/FrozenClams";
import {Spinach} from "./Veggies/Spinach";
import {Garlic} from "./Veggies/Garlic";
import {SlicedPepperoni} from "./Pepperonis/SlicedPepperoni";

export class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
    createCheese(): Cheese {
        return new ParmesanCheese();
    }

    createClam(): Clams {
        return new FrozenClams();
    }

    createDough(): Dough {
        return new ThickCrustDough();
    }

    createPepperoni(): Pepperoni {
        return new SlicedPepperoni();
    }

    createSauce(): Sauce {
        return new PlumTomatoSauce();
    }

    createVeggies(): Veggies[] {
        return [new Spinach(), new Garlic()];
    }

}