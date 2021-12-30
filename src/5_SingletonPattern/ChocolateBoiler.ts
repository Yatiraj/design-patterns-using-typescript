export class ChocolateBoiler {
    private empty: boolean;
    private boiled: boolean;
    private static uniqueInstance: ChocolateBoiler;

    private constructor() {
        this.empty = true;
        this.boiled = false;
    }

    static getInstance(): ChocolateBoiler {
        if(!this.uniqueInstance) {
            console.log("Creating unique instance of Chocolate Boiler");
            this.uniqueInstance = new ChocolateBoiler();
        }
        console.log("Returning instance of Chocolate Boiler");
        return this.uniqueInstance;
    }

    fill(): void {
        if(this.isEmpty()) {
            this.empty = false;
            this.boiled = false;
        }
    }

    drain(): void {
        if(!this.isEmpty() && this.isBoiled()) {
            this.empty = true;
        }
    }

    boil(): void {
        if(!this.empty && this.boiled) {
            this.boiled = true;
        }
    }

    isEmpty(): boolean {
        return this.empty;
    }

    isBoiled(): boolean {
        return this.boiled;
    }
}