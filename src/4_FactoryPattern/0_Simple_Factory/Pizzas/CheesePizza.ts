import {Pizza} from "./Pizza";

export class CheesePizza extends Pizza {
    constructor() {
        super();
        this.name = "Cheese Pizza";
        this.dough = "Regular Crust";
        this.sauce = "Marinara Pizza Sauce";
        this.toppings = ['Fresh Mozzarella', 'Parmesan'];
    }
}