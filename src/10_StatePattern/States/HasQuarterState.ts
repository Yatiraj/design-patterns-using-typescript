import {GumBallMachine} from '../GumBallMachine';
import {State} from '../State';
export class HasQuarterState implements State {

    gumBallMachine: GumBallMachine;

    constructor(gumBallMachine: GumBallMachine) {
        this.gumBallMachine = gumBallMachine;
    }

    insertQuarter(): void {
        console.log('You cant insert another quarter');
    }

    ejectQuarter(): void {
        console.log('Quarter returned');
        this.gumBallMachine.setState(this.gumBallMachine.getNoQuarterState());
    }

    turnCrank(): void {
        console.log('You Turned...');
        this.gumBallMachine.setState(this.gumBallMachine.getSoldState());
    }

    dispense(): void {
        console.log("No gumball dispensed");
    }
}