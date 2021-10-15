import {Beverage} from './Beverage';

export class DarkRoast extends Beverage{
    constructor() {
        super();
        this.description = 'DarkRoast';
    }

    getCost() {
        return 0.99;
    }
}