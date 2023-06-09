import { Component, OnInit } from '@angular/core';
import { Usuario } from '../shared/models/usuario.model';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  usuario: Usuario = new Usuario();

  ngOnInit() {}

  fazerLogin() {
    console.log(this.usuario);
    this.authService.fazerLogin(this.usuario);
  }
}
