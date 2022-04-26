import {Quackable} from "./Quackable";

//Decorator pattern to implement Quack Counter
export class QuackCounter implements Quackable {
    duck: Quackable;
    static quackCount:number = 0;

    constructor(duck: Quackable) {
        this.duck = duck;
    }

    quack(): void {
        this.duck.quack();
        QuackCounter.quackCount++;
    }
}