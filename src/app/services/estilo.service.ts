import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estilo } from '../modules/models/estilo';

@Injectable({
  providedIn: 'root'
})
export class EstiloService {

  estiloURL = 'https://whispering-refuge-65875.herokuapp.com/estilo/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Estilo[]> {
    return this.httpClient.get<Estilo[]>(this.estiloURL + 'lista');
  }

  public detail(id: number): Observable<Estilo> {
    return this.httpClient.get<Estilo>(this.estiloURL + `detailEstilo/${id}`);
  }

  public save(estilo: Estilo): Observable<any> {
    return this.httpClient.post<any>(this.estiloURL + 'createEstilo', estilo);
  }

  public update(id: number, estilo: Estilo): Observable<any> {
    return this.httpClient.put<any>(this.estiloURL + `updateEstilo/${id}`, estilo);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.estiloURL + `deleteEstilo/${id}`);
  }
}
