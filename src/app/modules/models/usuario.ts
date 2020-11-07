import { Estilo } from './estilo';

export class Usuario {
    id?: number;
    nombre: string;
    nombreUsuario: string;
    email: string;
    estilo: Estilo;

    constructor(nombre: string, nombreUsuario: string, email: string, estilo: Estilo) {
        this.nombre = nombre;
        this.nombreUsuario = nombreUsuario;
        this.email = email;
        this.estilo = estilo;
    }
}