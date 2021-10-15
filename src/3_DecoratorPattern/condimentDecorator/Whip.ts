import {CondimentDecorator} from './CondimentDecorator';
import {Beverage} from '../beverage/Beverage';

export class Whip extends CondimentDecorator{
    beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ', Whip';
    }

    getCost() {
        return (this.beverage.getCost() + 0.10);
    }

}