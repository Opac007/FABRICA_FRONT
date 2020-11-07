import { Component, OnInit } from '@angular/core';
import { Menu } from '../models/menu';
import { MenuService } from '../../services/menu.service';
import { UsuarioService } from '../../services/usuario.service';
import { EstiloService } from '../../services/estilo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'src/app/services/token.service';
import { Usuario } from '../models/usuario';
import { Estilo } from '../models/estilo';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  menu: Menu = null;
  estilos: Estilo[] = [];
  usuario: Usuario = null;
  nombreUsuario: string;
  isLogged = false;
  estiloId = null;

  constructor(
    private menuService: MenuService,
    private usuarioService: UsuarioService,
    private estiloService: EstiloService,
    private activatedRoute: ActivatedRoute,
    private tokenService: TokenService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName();
      this.cargarDatos();
    } else {
      this.isLogged = false;
    }
  }

  onUpdate(): void {
    this.usuarioService.update(this.estiloId, this.usuario).subscribe(
      data => {
        this.toastr.success('Usuario Actualizado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        setTimeout(() => {
          window.location.reload();},
          1500);
          this.router.navigate(['/editarUsuario']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        // this.router.navigate(['/']);
      }
    );
  }
  
  cargarDatos(): void {
    this.usuarioService.detail(this.nombreUsuario).subscribe(
      data => {
        this.usuario = data;
        this.estiloId = this.usuario.estilo.id;
      },
      err => {
        console.log(err);
      }
    );

    this.estiloService.lista().subscribe(
      data => {
        this.estilos = data;
      },
      err => {
        console.log(err);
      }
    );

  }
  
}
