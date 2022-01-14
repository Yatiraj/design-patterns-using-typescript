import {Projector} from "./Projector";

export class Tuner {
    projector: Projector;

    tuneProjector(projector: Projector) {
        this.projector = projector;
    }
}