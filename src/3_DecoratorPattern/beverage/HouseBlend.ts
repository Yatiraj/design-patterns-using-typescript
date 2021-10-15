import {Beverage} from './Beverage';

export class HouseBlend extends Beverage{
    constructor() {
        super();
        this.description = 'HouseBlend';
    }

    getCost() {
        return 0.89;
    }
}