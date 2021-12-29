export abstract class Pizza {
    name: string;
    dough: string;
    sauce: string;
    toppings: Array<string>;

    prepare() {
        console.log("Preparing " + this.name);
    }

    bake() {
        console.log("Baking " + this.name);
    }

    cut() {
        console.log("Cutting " + this.name);
    }

    box() {
        console.log("Boxing " + this.name);
    }

    displayPizza() {
        let displayPizza = '-------' + this.name + '-------\n'
            + this.dough + '\n'
            + this.sauce + '\n';
        this.toppings.forEach((element) => displayPizza = displayPizza + element + ' topping,');
        console.log(displayPizza + '\n');
    }
}