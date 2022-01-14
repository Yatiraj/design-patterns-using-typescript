import {Duckk} from "./Duckk";

export class MallardDuckk implements Duckk {
    fly(): void {
        console.log('fly fly');
    }

    quack(): void {
        console.log('Quack Quack')
    }

}