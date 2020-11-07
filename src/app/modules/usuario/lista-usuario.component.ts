import { Component, OnInit } from '@angular/core';
import { Menu } from '../models/menu';
import { MenuService } from '../../services/menu.service';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-lista-menu',
  templateUrl: './lista-menu.component.html',
  styleUrls: ['./lista-menu.component.css']
})
export class ListamenuComponent implements OnInit {

  menus: Menu[] = [];
  roles: string[];
  isAdmin = false;
  colorUsuario = '';

  constructor(
    private menuService: MenuService,
    private toastr: ToastrService,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.cargarmenus();
    this.roles = this.tokenService.getAuthorities();
    this.colorUsuario = this.tokenService.getStyle();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  cargarmenus(): void {
    this.menuService.lista().subscribe(
      data => {
        this.menus = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.menuService.delete(id).subscribe(
      data => {
        this.toastr.success('menu Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        setTimeout(() => {
          window.location.reload();},
          1500);
        this.cargarmenus();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

}
