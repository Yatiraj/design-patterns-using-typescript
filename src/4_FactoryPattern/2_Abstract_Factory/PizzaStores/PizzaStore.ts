import {Pizza} from "../Pizzas/Pizza";

export abstract class PizzaStore {
    orderPizza(item: string): Pizza {
        let pizza: Pizza = this.createPizza(item);
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    }

    abstract createPizza(item: string): Pizza;
}