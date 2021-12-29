import {Cheese} from "./Cheese";

export class ParmesanCheese implements Cheese {
    display(): string {
        return "Shredded Parmesan";
    }
}