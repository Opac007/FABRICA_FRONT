import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu } from '../modules/models/menu';
import { Usuario } from '../modules/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  menuURL = 'http://localhost:8080/usuario/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Menu[]> {
    return this.httpClient.get<Menu[]>(this.menuURL + 'lista');
  }

  public listaUsuario(nombreUsuario: string): Observable<Menu[]> {
    return this.httpClient.get<Menu[]>(this.menuURL + `lista/${nombreUsuario}`);
  }

  public detail(nombreUsuario: string): Observable<Usuario> {
    return this.httpClient.get<Usuario>(this.menuURL + `detailUser/${nombreUsuario}`);
  }

  public detailName(nombre: string): Observable<Menu> {
    return this.httpClient.get<Menu>(this.menuURL + `detailMenuName/${nombre}`);
  }

  public save(menu: Menu): Observable<any> {
    return this.httpClient.post<any>(this.menuURL + 'createMenu', menu);
  }

  public update(id: number, usuario: Usuario): Observable<any> {
    return this.httpClient.put<any>(this.menuURL + `update/${id}`, usuario);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.menuURL + `deleteMenu/${id}`);
  }
}
