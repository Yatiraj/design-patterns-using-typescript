import {CaffeineBeverage} from "./CaffeineBeverage";

export class Cofee extends CaffeineBeverage {
    brew() {
        console.log('Brew the cofee grinds');
    }

    addCondiments() {
        console.log('Add sugar and milk');
    }
}