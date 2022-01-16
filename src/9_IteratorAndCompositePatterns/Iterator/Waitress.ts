import {Menu} from "./Menu";

export class Waitress {
    menu: Menu;

    constructor(menu: Menu) {
        this.menu = menu;
    }

    printMenu(): void {
        let iterator = this.menu.createIterator();
        while(iterator.hasNext()) {
            let menuitem = iterator.next();
            console.log(menuitem.getName() + '\n'
            + menuitem.getDiscription() + '\n'
            + menuitem.getPrice() + '\n\n');
        }
    }
}