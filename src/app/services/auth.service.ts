import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NuevoUsuario } from '../modules/models/nuevo-usuario';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../modules/models/login-usuario';
import { JwtDTO } from '../modules/models/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'https://whispering-refuge-65875.herokuapp.com/auth/';

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL + 'login', loginUsuario);
  }
}
