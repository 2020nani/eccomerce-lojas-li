import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../shared/models/usuario.model';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs';
import { ResponseLogin } from './ResponseLogin';
import jwt_decode from 'jwt-decode';

@Injectable()
export class AuthService {
  constructor(private router: Router, private http: HttpClient) {}
  mostrarMenuEmitter = new EventEmitter<boolean>();

  fazerLogin(usuario: Usuario) {
    let responseLogin = new ResponseLogin();

    this.http
      .post(`${environment.baseUrl}/login`, {
        nome: usuario.nome,
        senha: usuario.senha,
      })
      .pipe(tap((it) => console.log(it)))
      .subscribe((resp) => {
        responseLogin = resp;
        localStorage.setItem('token', `Bearer ${responseLogin.token}`);
        localStorage.setItem('usuario', JSON.stringify(responseLogin.user));
        this.mostrarMenuEmitter.emit(true);
        this.router.navigate(['/produtos']);
      });
  }

  fazerLogout() {
    localStorage.removeItem('token');
    this.mostrarMenuEmitter.emit(false);
    this.router.navigate(['/login']);
  }

  getTokenExpiredDate(token: string): Date | null {
    const decode: any = jwt_decode(token);
    if (decode.exp === undefined) {
      return null;
    }
    const date = new Date(0);
    date.setUTCSeconds(decode.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      return true;
    }

    const date = this.getTokenExpiredDate(token);
    if (date === undefined) {
      return false;
    }

    return !(date!.valueOf() > new Date().valueOf());
  }

  getAuthorizationToken(): string | null {
    const token = localStorage.getItem('token');
    return token;
  }

  isUserLoggedIn(): boolean {
    const token = this.getAuthorizationToken();
    if (!token || this.isTokenExpired(token)) {
      return false;
    }

    return true;
  }
}
