import {CondimentDecorator} from './CondimentDecorator';
import {Beverage} from '../beverage/Beverage';

export class Soy extends CondimentDecorator{
    beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ', Soy';
    }

    getCost() {
        return (this.beverage.getCost() + 0.15);
    }
}