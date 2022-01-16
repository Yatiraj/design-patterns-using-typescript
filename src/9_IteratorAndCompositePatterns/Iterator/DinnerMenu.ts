import {Menu} from "./Menu";
import {Iterator} from "./Iterator";
import {MenuItem} from "./MenuItem";
import {DinnerMenuIterator} from "./DinnerMenuIterator";

export class DinnerMenu implements Menu {
    readonly MAX_ITEMS = 4;
    numberOfItems = 0;
    menuItems: Array<MenuItem>;

    constructor() {
        this.menuItems = new Array<MenuItem>();
        this.addItem(
            new MenuItem(
                "Vegetarian BLT",
                "(Fakin') Bacon with lettuce & tomato on whole wheat",
                true,
                2.99
            ));
        this.addItem(
            new MenuItem(
                "BLT",
                "Bacon with lettuce & tomato on whole wheat",
                false,
                2.99
            ));
        this.addItem(
            new MenuItem(
                "Soup of the day",
                "Soup of the day, with a side of potato salad",
                false,
                3.29
            ));
        this.addItem(
            new MenuItem(
                "Steamed Veggies and Brown Rice",
                "Steamed vegetables over brown rice",
                true,
                3.99
            ));
    }

    addItem(menuItem: MenuItem): void {
        if(this.numberOfItems >= this.MAX_ITEMS) {
            console.log("Sorry, menu is full!  Can't add item to menu");
        }
        else {
            this.menuItems.push(menuItem);
            this.numberOfItems = this.numberOfItems + 1;
        }
    }

    createIterator(): Iterator {
        return new DinnerMenuIterator(this.menuItems);
    }
}