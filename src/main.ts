import {MallardDuck} from './1_StrategyPattern/MallardDuck';
import {ModelDuck} from './1_StrategyPattern/ModelDuck';
import {RubberDuck} from './1_StrategyPattern/RubberDuck';
import {FlyRocketPowered} from "./1_StrategyPattern/fly/FlyRocketPowered";
import {Squeak} from "./1_StrategyPattern/quack/Squeak";
import {WeatherData} from './2_ObserverPattern/WeatherData';
import {CurrentConditionsDisplay} from './2_ObserverPattern/display/CurrentConditionsDisplay';
import {ForecastDisplay} from './2_ObserverPattern/display/ForecastDisplay';
import {Expresso} from '../src/3_DecoratorPattern/beverage/Expresso';
import {DarkRoast} from '../src/3_DecoratorPattern/beverage/DarkRoast';
import {HouseBlend} from '../src/3_DecoratorPattern/beverage/HouseBlend';
import {Whip} from '../src/3_DecoratorPattern/condimentDecorator/Whip';
import {Mocha} from '../src/3_DecoratorPattern/condimentDecorator/Mocha';
import {Soy} from '../src/3_DecoratorPattern/condimentDecorator/Soy';

//StrategyPattern
console.log('<---- Strategy Pattern ---->');
let mallardDuck = new MallardDuck();
mallardDuck.display();
mallardDuck.performFly();
mallardDuck.performQuack();

//Set behaviour dynamically at runtime
let modelDuck = new ModelDuck();
modelDuck.display();
modelDuck.setFlyBehaviour(new FlyRocketPowered());
modelDuck.performFly();
modelDuck.setQuackBehaviour(new Squeak());
modelDuck.performQuack();

//cant fly and quack, use default behaviours
let rubberDuck = new RubberDuck();
rubberDuck.display();
rubberDuck.performFly();
rubberDuck.performQuack();

//Observer Pattern
console.log('<---- Observer Pattern ---->');
let weatherData = new WeatherData();

//Add observers/ subscribe
let currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
let forecastDisplay = new ForecastDisplay(weatherData);
weatherData.setMeasurements(10,20,30);
weatherData.setMeasurements(11,22,33);

//remove a observer/ unsubscribe
forecastDisplay.weatherData.removeObserver(forecastDisplay);
weatherData.setMeasurements(12,24,36);


//Decorator Pattern
console.log('<---- Decorator Pattern ---->');

//Order just Expresso without any condiment
let beverage = new Expresso();
console.log(beverage.getDescription() + " : $ " + beverage.getCost());

//Order DarkRoast DoubleMocha with Whip
let beverage2 = new DarkRoast();
beverage2 = new Mocha(beverage2);
beverage2 = new Mocha(beverage2);
beverage2 = new Whip(beverage2);
console.log(beverage2.getDescription() + " : $ " + beverage2.getCost());

//Order Houseblend with Soy, Mocha & Whip
let beverage3 = new HouseBlend();
beverage3 = new Soy(beverage3);
beverage3 = new Mocha(beverage3);
beverage3 = new Whip(beverage3);
console.log(beverage3.getDescription() + " : $ " + beverage3.getCost());










