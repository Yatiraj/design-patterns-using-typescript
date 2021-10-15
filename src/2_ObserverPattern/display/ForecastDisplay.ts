import {Display} from './Display';
import {Observer} from '../Observer';
import {WeatherData} from '../WeatherData';
export class ForecastDisplay implements Display, Observer{
    temp: number;
    humidity: number;
    pressure: number;
    weatherData: WeatherData;

    constructor(weatherData: WeatherData) {
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);
    }

    update(): void{
        this.temp = this.weatherData.getTemp();
        this.humidity = this.weatherData.getHumidity();
        this.pressure = this.weatherData.getPressure();
        this.display();
    };

    display(): void{
        console.log('Forcast Conditions: ' + 'Temperature = ' + (this.temp + 5) + ' Celsius and ' +
            'Humidity = ' + (this.humidity - 2) + '% humidity' + 'Pressure = ' + (this.pressure + 5) + ' Bar');
    };

}