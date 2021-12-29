import {Pizza} from "./Pizzas/Pizza";
import {SimplePizzaFactory} from "./SimplePizzaFactory";
import exp = require("constants");

export class PizzaStore {
    factory: SimplePizzaFactory;

    constructor(factory: SimplePizzaFactory) {
        this.factory = factory;
    }

    orderPizza(type:string): Pizza {
        let pizza = this.factory.createPizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    }
}