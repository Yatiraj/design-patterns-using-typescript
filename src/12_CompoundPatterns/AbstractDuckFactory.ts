import {Quackable} from "./Quackable";

export interface AbstractDuckFactory {
    createMallardDuck: () => Quackable;
    createReadHeadDuck: () => Quackable;
    createRubberDuck: () => Quackable;
}