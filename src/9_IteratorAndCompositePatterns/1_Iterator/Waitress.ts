import {Menu} from "./Menu";
import {Iterator} from "./Iterator";

export class Waitress {
    pancakeHouseMenu: Menu;
    dinnerMenu: Menu;

    constructor(pancakeHouseMenu: Menu, dinnerMenu: Menu) {
        this.pancakeHouseMenu = pancakeHouseMenu;
        this.dinnerMenu = dinnerMenu;
    }

    printMenu(): void {
        let pancakeHouseMenuIterator = this.pancakeHouseMenu.createIterator();
        this.printIterator(pancakeHouseMenuIterator);
        let dinnerMenuIterator = this.dinnerMenu.createIterator();
        this.printIterator(dinnerMenuIterator);
    }

    private printIterator(iterator: Iterator): void {
        while(iterator.hasNext()) {
            let menuitem = iterator.next();
            console.log(menuitem.getName() + '\n'
                + menuitem.getDiscription() + '\n'
                + menuitem.getPrice() + '\n\n');
        }
    }
}