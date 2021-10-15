import {FlyBehaviour} from './FlyBehaviour';

export class FlyRocketPowered implements FlyBehaviour{
    fly(): void{
     console.log('Flying at Rocket Power');
    }
}