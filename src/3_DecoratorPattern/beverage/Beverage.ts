export abstract class Beverage{
    description: string = 'unknown Beverage';

    getDescription(): string {
        return this.description;
    }

    abstract getCost();
}