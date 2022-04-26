import {GumBallMachine} from '../GumBallMachine';
import {State} from '../State';
export class NoQuarterState implements State {

    gumBallMachine: GumBallMachine;

    constructor(gumBallMachine: GumBallMachine) {
        this.gumBallMachine = gumBallMachine;
    }

    insertQuarter(): void {
        console.log('You inserted a quarter')
        this.gumBallMachine.setState(this.gumBallMachine.getHasQuarterState());
    }

    ejectQuarter(): void {
        console.log('You havent inserted a quarter');
    }

    turnCrank(): void{
        console.log('You turned, but no quarter');
    }

    dispense(): void {
        console.log('You need to pay first');
    }

}