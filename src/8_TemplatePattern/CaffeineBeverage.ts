export abstract class CaffeineBeverage {
    readonly prepareRecipe = (): void => {
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
    }

    boilWater() {
        console.log('boiling water');
    }

    abstract brew();

    pourInCup() {
        console.log('pouring');
    }

    abstract addCondiments();
}