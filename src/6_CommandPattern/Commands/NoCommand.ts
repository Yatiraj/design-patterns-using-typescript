import {Command} from "../Command";

export class NoCommand implements Command {
    execute(): void {
        console.log('Device Not Implemented');
    }

    undo(): void {
        console.log('Device Not Implemented');
    }
}