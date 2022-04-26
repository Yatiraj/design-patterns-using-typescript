import {Quackable} from "../Quackable";
import {Goose} from "./Goose";

//Adapter Pattern to adapt goose as quackable
export class GooseAdapter implements Quackable {
    goose: Goose;

    constructor(goose: Goose) {
        this.goose = goose;
    }

    quack(): void {
        this.goose.honk();
    }
}