import {Turkey} from "./Turkey";

export class WildTurkey implements Turkey {
    fly(): void {
        console.log('short fly');
    }

    gobble(): void {
        console.log('gobble, gobble');
    }
}