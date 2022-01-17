import {Iterator} from "./Iterator";
import {MenuItem} from "./MenuItem";

export class DinnerMenuIterator implements Iterator {
    menuItemArray: Array<MenuItem>;
    position: number = 0;

    constructor(menuItemArray: Array<MenuItem>) {
        this.menuItemArray = menuItemArray;
    }

    next(): MenuItem {
        let menuItem = this.menuItemArray[this.position];
        this.position = this.position + 1;
        return menuItem;
    }

    hasNext(): boolean {
        if( this.position >= this.menuItemArray.length) {
            return false;
        }
        return true;
    }
}