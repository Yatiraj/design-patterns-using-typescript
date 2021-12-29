import {Pizza} from "./Pizza";
import {PizzaIngredientFactory} from "../Ingredients/PizzaIngredientFactory";

export class PepperoniPizza extends Pizza {
    ingredientFactory: PizzaIngredientFactory;
    constructor(ingredientFactory : PizzaIngredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory;

    }

    prepare() {
        this.name = "Pepperoni Pizza";
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.pepperoni = this.ingredientFactory.createPepperoni();
    }
}