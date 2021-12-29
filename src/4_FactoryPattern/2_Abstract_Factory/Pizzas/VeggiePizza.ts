import {Pizza} from "./Pizza";
import {PizzaIngredientFactory} from "../Ingredients/PizzaIngredientFactory";

export class VeggiePizza extends Pizza {
    ingredientFactory: PizzaIngredientFactory;
    constructor(ingredientFactory : PizzaIngredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory;

    }

    prepare() {
        this.name = "Veggie Pizza";
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.veggies = this.ingredientFactory.createVeggies();
    }
}