import {FlyBehaviour} from "./fly/FlyBehaviour";
import {QuackBehaviour} from "./quack/QuackBehaviour";
import {FlyNoWay} from "./fly/FlyNoWay";
import {MuteQuack} from "./quack/MuteQuack";

export abstract class Duck
{
    flyBehaviour: FlyBehaviour;
    quackBehaviour: QuackBehaviour;

    abstract display(): void;

    swim(): void{
        console.log('All Duck can Swimm!!!')
    }

    performFly(){
        if(!this.flyBehaviour){
            this.flyBehaviour = new FlyNoWay();
        }
        this.flyBehaviour.fly();
    }

    performQuack(){
        if(!this.quackBehaviour){
            this.quackBehaviour = new MuteQuack();
        }
        this.quackBehaviour.quack();
    }

    setFlyBehaviour(fb: FlyBehaviour){
        this.flyBehaviour = fb;
    }

    setQuackBehaviour(qb: QuackBehaviour){
        this.quackBehaviour = qb;
    }
}