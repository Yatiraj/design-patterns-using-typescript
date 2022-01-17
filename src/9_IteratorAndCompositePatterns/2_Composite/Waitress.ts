import {MenuComponent} from "./MenuComponent";

export class Waitress {
    allMenus: MenuComponent;

    constructor(allMenus: MenuComponent) {
        this.allMenus = allMenus;
    }

    printMenu(): void {
        this.allMenus.print();
    }
}