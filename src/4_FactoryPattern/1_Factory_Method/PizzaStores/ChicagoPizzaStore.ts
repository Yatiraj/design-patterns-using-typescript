import {PizzaStore} from "./PizzaStore";
import {Pizza} from "../Pizzas/Pizza"
import {ChicagoStyleCheesePizza} from "../Pizzas/ChicagoStyleCheesePizza";
import {ChicagoStyleClamPizza} from "../Pizzas/ChicagoStyleClamPizza";

export class ChicagoPizzaStore extends PizzaStore {
    createPizza(item: string): Pizza {
        let pizza: Pizza = null;
        if (item == 'cheese') {
            pizza = new ChicagoStyleCheesePizza();
        }
        if (item == 'clam') {
            pizza = new ChicagoStyleClamPizza();
        }
        return pizza;
    }
}