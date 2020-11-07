export class Estilo {
    id?: number;
    description: string;
    valor: string;

    constructor(description: string, valor: string) {
        this.description = description;
        this.valor = valor;
    }
}