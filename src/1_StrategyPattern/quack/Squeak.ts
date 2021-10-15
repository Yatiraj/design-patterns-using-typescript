import {QuackBehaviour} from "./QuackBehaviour";

export class Squeak implements QuackBehaviour{
    quack(): void{
        console.log("squeak squeak...");
    }
}