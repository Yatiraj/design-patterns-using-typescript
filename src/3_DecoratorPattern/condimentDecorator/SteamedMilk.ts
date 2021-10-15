import {CondimentDecorator} from './CondimentDecorator';

export class SteamedMilk extends CondimentDecorator{
    getDescription(): string {
        throw new Error('Method not implemented.');
    }
    getCost() {
        throw new Error('Method not implemented.');
    }

}