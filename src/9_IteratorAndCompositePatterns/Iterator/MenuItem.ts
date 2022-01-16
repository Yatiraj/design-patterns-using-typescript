export class MenuItem {
    private name: string;
    private discription: string;
    private vegetarian: boolean;
    private price: number;

    constructor(name:string, discription:string,vegetarian:boolean, price:number) {
        this.name = name;
        this.discription = discription;
        this.vegetarian = vegetarian;
        this.price = price;
    }

    getName(): string {
        return this.name;
    }

    getDiscription(): string{
        return this.discription;
    }

    getVegetarian(): boolean{
        return this.vegetarian;
    }

    getPrice(): number{
        return this.price;
    }
}