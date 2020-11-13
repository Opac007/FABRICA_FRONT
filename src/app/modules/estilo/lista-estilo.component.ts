import { Component, OnInit } from '@angular/core';
import { Estilo } from '../models/estilo';
import { EstiloService } from '../../services/estilo.service';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-lista-estilo',
  templateUrl: './lista-estilo.component.html',
  styleUrls: ['./lista-estilo.component.css']
})
export class ListaEstiloComponent implements OnInit {

  estilos: Estilo[] = [];
  estiloes: string[];
  isAdmin = false;
  colorUsuario = '';

  constructor(
    private estiloService: EstiloService,
    private toastr: ToastrService,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.cargarestilos();
    this.estiloes = this.tokenService.getAuthorities();
    this.colorUsuario = this.tokenService.getStyle();
    this.estiloes.forEach(estilo => {
      if (estilo === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  cargarestilos(): void {
    this.estiloService.lista().subscribe(
      data => {
        this.estilos = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.estiloService.delete(id).subscribe(
      data => {
        this.toastr.success('estilo Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        setTimeout(() => {
          },
          1500);
        this.cargarestilos();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

}
