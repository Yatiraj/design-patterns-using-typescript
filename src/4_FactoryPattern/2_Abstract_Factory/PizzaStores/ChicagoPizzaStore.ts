import {PizzaStore} from "./PizzaStore";
import {Pizza} from "../Pizzas/Pizza"
import {PepperoniPizza} from "../Pizzas/PepperoniPizza";
import {VeggiePizza} from "../Pizzas/VeggiePizza";
import {ChicagoPizzaIngredientFactory} from "../Ingredients/ChicagoPizzaIngredientFactory";
import {CheesePizza} from "../Pizzas/CheesePizza";
import {ClamPizza} from "../Pizzas/ClamPizza";

export class ChicagoPizzaStore extends PizzaStore {

    createPizza(item: string): Pizza {
        let pizza: Pizza = null;
        let ingredientFactory = new ChicagoPizzaIngredientFactory();
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