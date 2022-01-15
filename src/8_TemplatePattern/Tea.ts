import {CaffeineBeverage} from "./CaffeineBeverage";

export class Tea extends CaffeineBeverage {
    brew() {
        console.log('Steep the tea bag in the water');
    }

    addCondiments() {
        console.log('Add Lemon');
    }
}