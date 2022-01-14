import {Command} from "./Command";
import {NoCommand} from "./Commands/NoCommand";

export class RemoteControl {
    onCommands: Command[] = new Array(7);
    offCommands: Command[] = new Array(7);
    undoCommand: Command;

    constructor() {
        for(let i:number = 0; i<7; i++) {
            this.onCommands[i] = new NoCommand();
            this.offCommands[i] = new NoCommand();
        }
        this.undoCommand = new NoCommand();
    }

    setCommand(slot: number, onCommand: Command, offCommand: Command ): void {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand
    }

    onButtonWasPushed(slot: number): void {
        this.onCommands[slot].execute();
        this.undoCommand = this.onCommands[slot];
    }

    offButtonWasPushed(slot: number): void {
        this.offCommands[slot].execute();
        this.undoCommand = this.offCommands[slot];
    }

    undoButtonWasPushed(): void {
        this.undoCommand.undo();
    }

    toString(): string {
        let value: string = '';
        for(let i:number = 0; i<7; i++ ) {
            value += 'slot:' + i + ' on:' + this.onCommands[i].constructor.name
                + ' off:' + this.offCommands[i].constructor.name + '\n';
        }
        return value;
    }
}