import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { sidebarAnimation, iconAnimation, labelAnimation } from 'src/app/animations';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { Menu } from '../models/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    sidebarAnimation(),
    iconAnimation(),
    labelAnimation(),
  ]
})
export class SidebarComponent implements OnInit {

  menus: Menu[] = [];
  sidebarState: string;
  isLogged = false;
  nombreUsuario: string;

  constructor(
    private menuService: MenuService,
    private sidebarService: SidebarService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName();
      this.cargarMenus();
    } else {
      this.isLogged = false;
    }
    this.sidebarService.sidebarStateObservable$.
      subscribe((newState: string) => {
        this.sidebarState = newState;
      });
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  cargarMenus(): void {
    this.menuService.listaUsuario(this.nombreUsuario).subscribe(
      data => {
        this.menus = data;
      },
      err => {
        console.log(err);
      }
    );
  }
}
