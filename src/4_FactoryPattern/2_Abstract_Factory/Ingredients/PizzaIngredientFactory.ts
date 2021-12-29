import {Dough} from "./Doughs/Dough";
import {Sauce} from "./Sauces/Sauce";
import {Cheese} from "./Cheeses/Cheese";
import {Veggies} from "./Veggies/Veggies";
import {Pepperoni} from "./Pepperonis/Pepperoni";
import {Clams} from "./Clams/Clams";

export interface PizzaIngredientFactory {
    createDough: () => Dough;
    createSauce: () => Sauce;
    createCheese: () => Cheese;
    createVeggies: () => Veggies[];
    createPepperoni: () => Pepperoni;
    createClam: () => Clams;
}