import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu } from '../modules/models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuURL = 'http://whispering-refuge-65875.herokuapp.com/menu/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Menu[]> {
    return this.httpClient.get<Menu[]>(this.menuURL + 'lista');
  }

  public listaUsuario(nombreUsuario: string): Observable<Menu[]> {
    return this.httpClient.get<Menu[]>(this.menuURL + `lista/${nombreUsuario}`);
  }

  public detail(id: number): Observable<Menu> {
    return this.httpClient.get<Menu>(this.menuURL + `detailMenu/${id}`);
  }

  public detailName(nombre: string): Observable<Menu> {
    return this.httpClient.get<Menu>(this.menuURL + `detailMenuName/${nombre}`);
  }

  public save(menu: Menu): Observable<any> {
    return this.httpClient.post<any>(this.menuURL + 'createMenu', menu);
  }

  public update(id: number, menu: Menu): Observable<any> {
    return this.httpClient.put<any>(this.menuURL + `updateMenu/${id}`, menu);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.menuURL + `deleteMenu/${id}`);
  }
}
