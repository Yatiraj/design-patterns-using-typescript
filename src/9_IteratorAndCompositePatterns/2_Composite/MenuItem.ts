import {MenuComponent} from "./MenuComponent";

export class MenuItem extends MenuComponent {
    name: string;
    description: string;
    vegetarian: boolean;
    price: number;

    constructor(
        name: string,
        description: string,
        vegetarian: boolean,
        price: number) {
        super();
        this.name = name;
        this.description = description;
        this.vegetarian = vegetarian;
        this.price = price;
    }

    getName(): string {
        return this.name;
    }

    getDescription(): string {
        return this.description;
    }

    getPrice(): number {
        return this.price;
    }

    getIsVegetarian(): boolean {
        return this.vegetarian;
    }

    print() {
        console.log(this.getName() + '\n'
            + 'isVeg: ' + this.getIsVegetarian() + '\n'
            + this.getDescription() + '\n'
            + this.getPrice() + '\n\n');
    }
}