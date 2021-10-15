import {Beverage} from './Beverage';

export class Decaf extends Beverage{
    constructor() {
        super();
        this.description = 'Decaf';
    }

    getCost() {
        return 1.05;
    }
}