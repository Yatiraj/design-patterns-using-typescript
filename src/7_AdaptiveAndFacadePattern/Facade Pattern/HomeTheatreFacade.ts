import {Amplifier} from "./Amplifier";
import {PopcornPopper} from "./PopcornPopper";
import {Projector} from "./Projector";
import {StreamingPlayer} from "./StreamingPlayer";
import {TheaterLights} from "./TheaterLights";
import {Tuner} from "./Tuner";

export class HomeTheatreFacade {
    amplifier: Amplifier;
    popcornPopper: PopcornPopper;
    projector: Projector;
    streamingPlayer: StreamingPlayer;
    theaterLights: TheaterLights;
    tuner: Tuner;

    constructor(
        amplifier: Amplifier,
        popcornPopper: PopcornPopper,
        projector: Projector,
        streamingPlayer: StreamingPlayer,
        theaterLights: TheaterLights,
        tuner: Tuner
    ) {
        this.amplifier = amplifier;
        this.popcornPopper = popcornPopper;
        this.projector = projector;
        this.streamingPlayer = streamingPlayer;
        this.theaterLights = theaterLights;
        this.tuner = tuner;
    }

    watchMovie(): void {
        this.popcornPopper.on();
        this.theaterLights.on();
        this.projector.on();
        this.tuner.tuneProjector(this.projector);
        this.amplifier.connectStreamingPlayer(this.streamingPlayer);
        this.streamingPlayer.on();
    }

    endMovie(): void {
        this.popcornPopper.off();
        this.theaterLights.off();
        this.projector.off();
        this.streamingPlayer.off();
    }
}