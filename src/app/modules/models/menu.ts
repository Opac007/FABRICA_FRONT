export class Menu {
    id?: number;
    nombre: string;
    icon: string;
    path: string;

    constructor(nombre: string, icon: string, path: string) {
        this.nombre = nombre;
        this.icon = icon;
        this.path = path;
    }
}