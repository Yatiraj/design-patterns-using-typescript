import {Pizza} from "./Pizza";
import {PizzaIngredientFactory} from "../Ingredients/PizzaIngredientFactory";

export class CheesePizza extends Pizza {
    ingredientFactory: PizzaIngredientFactory;
    constructor(ingredientFactory : PizzaIngredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory;

    }

    prepare() {
        this.name = "Cheese Pizza";
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
    }
}