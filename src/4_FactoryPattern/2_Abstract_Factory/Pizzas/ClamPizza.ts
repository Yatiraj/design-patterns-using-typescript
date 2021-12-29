import {Pizza} from "./Pizza";
import {PizzaIngredientFactory} from "../Ingredients/PizzaIngredientFactory";

export class ClamPizza extends Pizza {
    ingredientFactory: PizzaIngredientFactory;

    constructor(ingredientFactory: PizzaIngredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory;

    }

    prepare() {
        this.name = "Clam Pizza";
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.clam = this.ingredientFactory.createClam();
    }
}