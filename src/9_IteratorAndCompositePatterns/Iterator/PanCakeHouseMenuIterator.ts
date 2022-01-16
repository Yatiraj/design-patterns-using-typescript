import {Iterator} from "./Iterator";
import {MenuItem} from "./MenuItem";

export class PanCakeHouseMenuIterator implements Iterator {
    menuItemArray: Array<MenuItem>;
    position: number = 0;

    constructor(menuItemSet: Set<MenuItem>) {
        this.menuItemArray = Array.from(menuItemSet);
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