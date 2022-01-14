import {Command} from "../Command";
import {Stereo} from "../Devices/Stereo";

export class StereoWithCDOnCommand implements Command {
    stereo: Stereo;
    constructor(stereo: Stereo) {
        this.stereo = stereo;
    }
    execute(): void {
        this.stereo.on();
        this.stereo.setCD();
        this.stereo.setVolume(50);
    }

    undo(): void {
        this.stereo.off();
    }

}