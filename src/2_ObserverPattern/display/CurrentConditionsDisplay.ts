import {Observer} from '../Observer';
import {Display} from './Display';
import {WeatherData} from '../WeatherData';

export class CurrentConditionsDisplay implements Observer, Display{
    temp: number;
    humidity: number;
    weatherData: WeatherData;

    constructor(weatherData: WeatherData) {
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);
    }

    update(): void{
        this.temp = this.weatherData.getTemp();
        this.humidity = this.weatherData.getPressure();
        this.display();
    };

    display(): void{
        console.log('Current Conditions: ' + 'Temperature = ' + this.temp + ' Celsius and ' +
            'Humidity = ' + this.humidity + '% humidity');
    };
}