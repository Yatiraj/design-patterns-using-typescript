import {MenuItem} from "./MenuItem";
import {Menu} from "./Menu";
import {PanCakeHouseMenuIterator} from "./PanCakeHouseMenuIterator";
import {Iterator} from "./Iterator";

export class PanCakeHouseMenu implements Menu{
    menuItems: Set<MenuItem>;

    constructor() {
        this.menuItems = new Set<MenuItem>();
        this.addItem(
            new MenuItem(
                "K&B's Pancake Breakfast",
                "Pancakes with scrambled eggs, and toast",
                true,
                2.99
                ));
        this.addItem(
            new MenuItem(
                "Regular Pancake Breakfast",
                "Pancakes with fried eggs, sausage",
                false,
                2.99
            ));
        this.addItem(
            new MenuItem(
                "Blueberry Pancakes",
                "Pancakes made with fresh blueberries, and blueberry syrup",
                true,
                3.49
            ));
        this.addItem(
            new MenuItem(
                "Waffles",
                "Waffles, with your choice of blueberries or strawberries",
                true,
                3.59
            ));
    }

    addItem(menuItem: MenuItem): void {

        this.menuItems.add(menuItem);
    }

    createIterator(): Iterator {
        return new PanCakeHouseMenuIterator(this.menuItems);
    }
}