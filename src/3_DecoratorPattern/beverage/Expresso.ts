import {Beverage} from './Beverage';

export class Expresso extends Beverage{

    constructor() {
        super();
        this.description = 'Expresso';
    }

    getCost() {
        return 1.99;
    }

}