import {StreamingPlayer} from "./StreamingPlayer";

export class Amplifier {
   streamingPlayer: StreamingPlayer;

   connectStreamingPlayer(streamingPlayer: StreamingPlayer): void {
       this.streamingPlayer = streamingPlayer;
   }
}