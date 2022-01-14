import {Duckk} from "./Duckk";
import {Turkey} from "./Turkey";

export class TurkeyAdapter implements Duckk {
    turkey: Turkey;
    constructor(turkey: Turkey) {
        this.turkey = turkey;
    }
    fly(): void {
        //turkey fly is short, increase it to match duck
        for(let i = 0; i < 5; i++) {
            this.turkey.fly();
        }
    }

    quack(): void {
        this.turkey.gobble();
    }
}