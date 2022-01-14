export class Stereo {
    on(): void {
        console.log('stereo is on');
    }

    off(): void {
        console.log('stereo is off');
    }

    setCD(): void {
        console.log('stereo is set for CD input');
    }

    setDVD(): void {
        console.log('stereo is set for DVD input');
    }

    setRadio(): void {
        console.log('stereo is set for Radio');
    }

    setVolume(volume: number): void {
        console.log(" stereo volume set to " + volume);
    }
}