import {Duck} from "./Duck";
import {FlyWithWings} from "./fly/FlyWithWings";
import {Quack} from "./quack/Quack";

export class MallardDuck extends Duck{
    constructor() {
        super();
        this.setFlyBehaviour(new FlyWithWings());
        this.setQuackBehaviour(new Quack());
    }
    display(): void {
        console.log('I am a Mallard Duck');
    }
}