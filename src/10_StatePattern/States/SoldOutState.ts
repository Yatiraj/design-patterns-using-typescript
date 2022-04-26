import {GumBallMachine} from '../GumBallMachine';
import {State} from '../State';
export class SoldOutState implements State {

    gumBallMachine: GumBallMachine;

    constructor(gumBallMachine: GumBallMachine) {
        this.gumBallMachine = gumBallMachine;
    }

    insertQuarter():void {
        console.log("You cant insert quarter, No Gumball");
    }

    ejectQuarter(): void {
        console.log("You cant eject quarter, as you have not inserted any");
    }

    turnCrank(): void {
        console.log("You turned, but there are no Gumballs")
    }

    dispense(): void {
        console.log(("No Gumball dispensed"))
    }

}