import {PizzaStore} from "./PizzaStore";
import {Pizza} from "../Pizzas/Pizza"
import {CheesePizza} from "../Pizzas/CheesePizza";
import {ClamPizza} from "../Pizzas/ClamPizza";
import {VeggiePizza} from "../Pizzas/VeggiePizza";
import {PepperoniPizza} from "../Pizzas/PepperoniPizza";
import {NYPizzaIngredientFactory} from "../Ingredients/NYPizzaIngredientFactory";

export class NYPizzaStore extends PizzaStore {

    createPizza(item: string): Pizza {
        let pizza: Pizza = null;
        let ingredientFactory = new NYPizzaIngredientFactory();
        if (item == 'cheese') {
            pizza = new CheesePizza(ingredientFactory);
        }
        if (item == 'veggie') {
            pizza = new VeggiePizza(ingredientFactory);
        }
        if (item == 'pepperoni') {
            pizza = new PepperoniPizza(ingredientFactory);
        }
        if (item == 'clam') {
            pizza = new ClamPizza(ingredientFactory);
        }
        pizza.prepare();
        return pizza;
    }
}