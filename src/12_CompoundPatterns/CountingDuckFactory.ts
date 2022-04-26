import {AbstractDuckFactory} from "./AbstractDuckFactory";
import {QuackCounter} from "./QuackCounter";
import {MallardDuck} from "./Ducks/MallardDuck";
import {RedHeadDuck} from "./Ducks/RedHeadDuck";
import {Quackable} from "./Quackable";
import {RubberDuck} from "./Ducks/RubberDuck";

//Abstract Factory Pattern to produce Duck instances
export class CountingDuckFactory implements AbstractDuckFactory {
    createMallardDuck(): Quackable {
        return new QuackCounter(new MallardDuck());
    }

    createReadHeadDuck(): Quackable {
        return new QuackCounter(new RedHeadDuck());
    }

    createRubberDuck(): Quackable {
        return new QuackCounter(new RubberDuck());
    }
}