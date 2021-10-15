import {Duck} from './Duck';
export class ModelDuck extends Duck{
    constructor() {
        super();
        
    }
    display(): void {
        console.log('I am a Model Duck');
    }
}