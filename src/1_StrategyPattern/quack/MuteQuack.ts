import {QuackBehaviour} from "./QuackBehaviour";

export class MuteQuack implements QuackBehaviour{
    quack(): void{
        console.log('Silence...');
    }
}