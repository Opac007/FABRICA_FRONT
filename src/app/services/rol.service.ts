import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rol } from '../modules/models/rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  rolURL = 'http://whispering-refuge-65875.herokuapp.com/rol/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Rol[]> {
    return this.httpClient.get<Rol[]>(this.rolURL + 'lista');
  }

  public detail(id: number): Observable<Rol> {
    return this.httpClient.get<Rol>(this.rolURL + `detailRol/${id}`);
  }

  public save(rol: Rol): Observable<any> {
    return this.httpClient.post<any>(this.rolURL + 'createRol', rol);
  }

  public update(id: number, rol: Rol): Observable<any> {
    return this.httpClient.put<any>(this.rolURL + `updateRol/${id}`, rol);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.rolURL + `deleteRol/${id}`);
  }
}
