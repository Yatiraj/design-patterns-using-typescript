import {Pizza} from "./Pizza";

export class NyStyleClamPizza extends Pizza {
    constructor() {
        super();
        this.name = "NY Style Clam Pizza";
        this.dough = "Thin crust Dough";
        this.sauce = "Marinara Sauce";
        this.toppings = ['Fresh Clams from Long Island Sound', 'Grated parmesan cheese'];
    }
}