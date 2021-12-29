import {Pizza} from "./Pizzas/Pizza";
import {CheesePizza} from "./Pizzas/CheesePizza";
import {ClamPizza} from "./Pizzas/ClamPizza";
import {PepperoniPizza} from "./Pizzas/PepperoniPizza";

export class SimplePizzaFactory {
    createPizza(type: string): Pizza {
        let pizza: Pizza = null;
        if (type == 'cheese') {
            pizza = new CheesePizza();
        }
        if (type == 'clam') {
            pizza = new ClamPizza();
        }
        if (type == 'pepperoni') {
            pizza = new PepperoniPizza();
        }
        return pizza;
    }
}