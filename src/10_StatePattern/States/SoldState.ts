import {GumBallMachine} from '../GumBallMachine';
import {State} from '../State';
export class SoldState implements State {

    gumBallMachine: GumBallMachine;

    constructor(gumBallMachine: GumBallMachine) {
        this.gumBallMachine = gumBallMachine;
    }

    insertQuarter(): void {
        console.log("Wait we are dispensing gumball");
    }

    ejectQuarter(): void {
        console.log("Sorry, you already turned the crank");
    }

    turnCrank(): void {
        console.log("Turning twice doesnt get you another gumball")
    }

    dispense(): void {
        this.gumBallMachine.releaseBall();
        if (this.gumBallMachine.getCount() > 0) {
            this.gumBallMachine.setState(this.gumBallMachine.getNoQuarterState());
        }
        else
        {
            console.log("OOPS out of gumball");
            this.gumBallMachine.setState(this.gumBallMachine.getSoldOutState());
        }
    }
}