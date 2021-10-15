import {FlyBehaviour} from "./FlyBehaviour";

export class FlyWithWings implements FlyBehaviour{
    fly(): void {
        console.log("I'm flying!!!");
    }
}