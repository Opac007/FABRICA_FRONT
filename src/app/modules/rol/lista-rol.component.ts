import { Component, OnInit } from '@angular/core';
import { Rol } from '../models/rol';
import { RolService } from '../../services/rol.service';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-lista-rol',
  templateUrl: './lista-rol.component.html',
  styleUrls: ['./lista-rol.component.css']
})
export class ListaRolComponent implements OnInit {

  rols: Rol[] = [];
  roles: string[];
  isAdmin = false;
  colorUsuario = '';

  constructor(
    private rolService: RolService,
    private toastr: ToastrService,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.cargarrols();
    this.roles = this.tokenService.getAuthorities();
    this.colorUsuario = this.tokenService.getStyle();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  cargarrols(): void {
    this.rolService.lista().subscribe(
      data => {
        this.rols = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.rolService.delete(id).subscribe(
      data => {
        this.toastr.success('rol Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        setTimeout(() => {
          },
          1500);
        this.cargarrols();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

}
