import {State} from './State';
import {HasQuarterState} from "./States/HasQuarterState";
import {SoldState} from "./States/SoldState";
import {SoldOutState} from "./States/SoldOutState";
import {NoQuarterState} from "./States/NoQuarterState";

export class GumBallMachine {
    private soldOutState: State;
    private noQuarterState: State;
    private hasQuarterState: State;
    private soldState: State;

    state: State;
    private count = 0;

    constructor(numberOfGumBalls) {
        this.soldOutState = new SoldOutState(this);
        this.noQuarterState = new NoQuarterState(this);
        this.hasQuarterState = new HasQuarterState(this);
        this.soldState = new SoldState(this);

        this.count = numberOfGumBalls;
        if(this.count > 0) {
            this.state = this.noQuarterState;
        }
        else {
            this.state = this.soldOutState;
        }
    }

    insertQuarter() {
        this.state.insertQuarter();
    }

    ejectQuarter() {
        this.state.ejectQuarter();
    }

    turnCrank() {
        this.state.turnCrank();
    }

    setState(state: State) {
        this.state = state;
    }

    releaseBall() {
        console.log("A gumball comes rolling out the slot ...");
        if (this.count>0) {
            this.count = this.count - 1;
        }
    }

    getSoldOutState(): State {
        return this.soldOutState;
    }

    getNoQuarterState(): State {
        return this.noQuarterState;
    }

    getHasQuarterState(): State {
        return this.hasQuarterState;
    }

    getSoldState(): State {
        return this.soldState;
    }

    getCount(): number {
        return this.count;
    }
}