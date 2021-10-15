import {FlyBehaviour} from "./FlyBehaviour";

export class FlyNoWay implements FlyBehaviour{
    fly(): void {
        console.log("I can't fly");
    }
}