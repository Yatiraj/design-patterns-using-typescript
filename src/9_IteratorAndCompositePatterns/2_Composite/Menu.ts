import {MenuComponent} from "./MenuComponent";

export class Menu extends MenuComponent {
    menuComponents: Set<MenuComponent>;
    name: string;
    description: string;

    constructor(name: string, description: string) {
        super();
        this.name = name;
        this.description = description;
        this.menuComponents = new Set<MenuComponent>();
    }

    add(menuComponent: MenuComponent): void {
        this.menuComponents.add(menuComponent);
    }

    remove(menuComponent: MenuComponent) {
        this.menuComponents.delete(menuComponent);
    }

    getName(): string {
        return this.name;
    }

    getDescription(): string {
        return this.getDescription();
    }

    print() {
        for(let menucomponent of this.menuComponents) {
            menucomponent.print();
        }
    }
}