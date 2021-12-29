import {Pizza} from "./Pizza";

export class ChicagoStyleClamPizza extends Pizza {
    constructor() {
        super();
        this.name = "Chicago Style Clam Pizza";
        this.dough = "Extra Thick Crust Dough";
        this.sauce = "Plum Tomato Sauce";
        this.toppings = ['Shredded Mozzarella Cheese', 'Frozen Clams from Chesapeake Bay'];
    }
}