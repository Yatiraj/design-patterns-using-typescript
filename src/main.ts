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
import {PizzaStore} from "./4_FactoryPattern/0_Simple_Factory/PizzaStore";
import {SimplePizzaFactory} from "./4_FactoryPattern/0_Simple_Factory/SimplePizzaFactory";
import {NYPizzaStore as NYPizzaStore1} from "./4_FactoryPattern/1_Factory_Method/PizzaStores/NYPizzaStore";
import {Pizza as Pizza0} from "./4_FactoryPattern/0_Simple_Factory/Pizzas/Pizza";
import {Pizza as Pizza1} from "./4_FactoryPattern/1_Factory_Method/Pizzas/Pizza";
import {ChicagoPizzaStore as ChicagoPizzaStore1} from "./4_FactoryPattern/1_Factory_Method/PizzaStores/ChicagoPizzaStore";
import {NYPizzaStore as NYPizzaStore2} from "./4_FactoryPattern/2_Abstract_Factory/PizzaStores/NYPizzaStore";
import {Pizza as Pizza2} from "./4_FactoryPattern/2_Abstract_Factory/Pizzas/Pizza";
import {ChicagoPizzaStore as ChicagoPizzaStore2} from "./4_FactoryPattern/2_Abstract_Factory/PizzaStores/ChicagoPizzaStore";
import {ChocolateBoiler} from "./5_SingletonPattern/ChocolateBoiler";
import {Light} from "./6_CommandPattern/Devices/Light";
import {LightOnCommand} from "./6_CommandPattern/Commands/LightOnCommand";
import {RemoteControl} from "./6_CommandPattern/RemoteControl";
import {LightOffCommand} from "./6_CommandPattern/Commands/LightOffCommand";
import {Stereo} from "./6_CommandPattern/Devices/Stereo";
import {StereoOffCommand} from "./6_CommandPattern/Commands/StereoOffCommand";
import {StereoWithCDOnCommand} from "./6_CommandPattern/Commands/StereoWithCDOnCommand";
import {Duck} from "./1_StrategyPattern/Duck";
import {MallardDuckk} from "./7_AdaptiveAndFacadePattern/AdapterPattern/MallardDuckk";
import {WildTurkey} from "./7_AdaptiveAndFacadePattern/AdapterPattern/WildTurkey";
import {TurkeyAdapter} from "./7_AdaptiveAndFacadePattern/AdapterPattern/TurkeyAdapter";
import {HomeTheatreFacade} from "./7_AdaptiveAndFacadePattern/Facade Pattern/HomeTheatreFacade";
import {StreamingPlayer} from "./7_AdaptiveAndFacadePattern/Facade Pattern/StreamingPlayer";
import {Amplifier} from "./7_AdaptiveAndFacadePattern/Facade Pattern/Amplifier";
import {PopcornPopper} from "./7_AdaptiveAndFacadePattern/Facade Pattern/PopcornPopper";
import {Projector} from "./7_AdaptiveAndFacadePattern/Facade Pattern/Projector";
import {TheaterLights} from "./7_AdaptiveAndFacadePattern/Facade Pattern/TheaterLights";
import {Tuner} from "./7_AdaptiveAndFacadePattern/Facade Pattern/Tuner";
import {Tea} from "./8_TemplatePattern/Tea";
import {Cofee} from "./8_TemplatePattern/Cofee";
import {PanCakeHouseMenu} from "./9_IteratorAndCompositePatterns/Iterator/PanCakeHouseMenu";
import {DinnerMenu} from "./9_IteratorAndCompositePatterns/Iterator/DinnerMenu";
import {Waitress} from "./9_IteratorAndCompositePatterns/Iterator/Waitress";

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

//Factory Pattern
console.log('<---- Factory Pattern ---->');

//0. Simple Factory
console.log('<---- Simple Factory ---->');
let pizzaStore = new PizzaStore(new SimplePizzaFactory());
let pizza0: Pizza0 = pizzaStore.orderPizza('cheese');
pizza0.displayPizza();
pizza0 = pizzaStore.orderPizza('pepperoni');
pizza0.displayPizza();

//1. Factory method
console.log('<---- Factory method ---->');
let nyPizzaStore1 = new NYPizzaStore1();
let pizza1: Pizza1 = nyPizzaStore1.orderPizza('cheese');
pizza1.displayPizza();
let chicagoPizzaStore1 = new ChicagoPizzaStore1();
pizza1 = chicagoPizzaStore1.orderPizza('cheese');
pizza1.displayPizza();

//2. Abstract Factory
console.log('<---- Abstract method ---->');

let nyPizzaStore2 = new NYPizzaStore2();
let pizza2: Pizza2 = nyPizzaStore2.orderPizza('cheese');
pizza2.displayPizza();
pizza2 = nyPizzaStore2.orderPizza('veggie');
pizza2.displayPizza();

let chicagoPizzaStore2 = new ChicagoPizzaStore2();
pizza2 = chicagoPizzaStore2.orderPizza('cheese');
pizza2.displayPizza();
pizza2 = chicagoPizzaStore2.orderPizza('veggie');
pizza2.displayPizza();


//Singleton Pattern
console.log('<---- Singleton Pattern ---->');
let boiler = ChocolateBoiler.getInstance();
boiler.fill();
boiler.boil();
boiler.drain();

//returns existing instance itself
let boiler2 =  ChocolateBoiler.getInstance();

//Command Pattern
console.log('<---- Command Pattern ---->');
let remoteControl = new RemoteControl();
let light = new Light();
//command object
let lightOnCommand = new LightOnCommand(light);
let lightOffCommand = new LightOffCommand(light);
//remoteControl doesn't need to know what is request. Command object lightOnCommand encapsulates request(light.on()) as an object, and passed in as parameter for RemoteControl
remoteControl.setCommand(0,lightOnCommand, lightOffCommand);
remoteControl.onButtonWasPushed(0);
remoteControl.offButtonWasPushed(0);
remoteControl.undoButtonWasPushed();

let stereo = new Stereo();
let stereoOnWithCDCommand = new StereoWithCDOnCommand(stereo);
let stereoOffCommand = new StereoOffCommand(stereo);
remoteControl.setCommand(1, stereoOnWithCDCommand, stereoOffCommand);
remoteControl.onButtonWasPushed(1);
remoteControl.offButtonWasPushed(1);

//print commands in each slot
console.log(remoteControl.toString());

//Adapter and Facade Pattern
console.log('<---- Adapter Pattern ---->');
let duckk = new MallardDuckk();
duckk.fly();
duckk.quack();

let turkey = new WildTurkey();
turkey.fly();
turkey.gobble();

let turkeyAdapter = new TurkeyAdapter(turkey);
turkeyAdapter.fly();
turkeyAdapter.quack();

//Facade Pattern
console.log('<---- Facade Pattern ---->');
let homeTheaterFacade = new HomeTheatreFacade(
    new Amplifier(),
    new PopcornPopper(),
    new Projector(),
    new StreamingPlayer(),
    new TheaterLights(),
    new Tuner());
homeTheaterFacade.watchMovie();
homeTheaterFacade.endMovie();

//Template Pattern
console.log('<---- Template Pattern ---->');
let tea = new Tea();
tea.prepareRecipe();

let coffee = new Cofee();
coffee.prepareRecipe();

//Iterator and Composite Pattern
console.log('<---- Iterator Pattern----->')
let panCakeHouseMenu = new PanCakeHouseMenu();
let dinnerHouseMenu = new DinnerMenu();
let waitress = new Waitress(panCakeHouseMenu);
waitress.printMenu();
waitress = new Waitress(dinnerHouseMenu);
waitress.printMenu();
