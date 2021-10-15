import {Beverage} from '../beverage/beverage';

export abstract class CondimentDecorator extends Beverage{
    beverage: Beverage;

    abstract getDescription(): string;
}