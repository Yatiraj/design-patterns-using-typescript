import {Pizza} from "./Pizza";

export class PepperoniPizza extends Pizza {
    constructor() {
        super();
        this.name = "Pepperoni Pizza";
        this.dough = "Crust";
        this.sauce = "Marinara sauce";
        this.toppings = ['Sliced Onion', 'Grated parmesan cheese'];
    }
}