import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estilo } from '../modules/models/estilo';

@Injectable({
  providedIn: 'root'
})
export class EstiloService {

  menuURL = 'http://whispering-refuge-65875.herokuapp.com/estilo/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Estilo[]> {
    return this.httpClient.get<Estilo[]>(this.menuURL + 'lista');
  }
}
