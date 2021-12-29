import {PizzaStore} from "./PizzaStore";
import {Pizza} from "../Pizzas/Pizza"
import {NYStyleCheesePizza} from "../Pizzas/NYStyleCheesePizza";
import {NyStyleClamPizza} from "../Pizzas/NyStyleClamPizza";

export class NYPizzaStore extends PizzaStore {
    createPizza(item: string): Pizza {
        let pizza: Pizza = null;
        if (item == 'cheese') {
            pizza = new NYStyleCheesePizza();
        }
        if (item == 'clam') {
            pizza = new NyStyleClamPizza();
        }
        return pizza;
    }
}