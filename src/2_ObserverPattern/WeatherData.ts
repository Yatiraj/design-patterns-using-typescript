import { Observer } from './Observer';
import {Subject} from './Subject';

export class WeatherData implements Subject {
    observers: Set<Observer>;
    temp: number;
    humidity: number;
    pressure: number;

    constructor() {
        this.observers = new Set<Observer>();
    }

    getTemp(){
        return this.temp;
    }

    getHumidity(){
        return this.humidity;
    }

    getPressure(){
        return this.pressure;
    }

    registerObserver(o: Observer){
        this.observers.add(o);
    };

    removeObserver(o: Observer){
        this.observers.delete(o);
    };

    notifyObserver(){
        this.observers.forEach((o) => {
            o.update();
        });
    }

    measurementsChanged(){
        this.notifyObserver();
    }

    setMeasurements(temp:number, humidity:number, pressure:number){
        this.temp = temp;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    }

}