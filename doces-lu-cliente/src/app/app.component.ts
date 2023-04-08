import { Component, SimpleChange } from '@angular/core';
import { AuthService } from './login/auth.service';
import { ProdutosService } from './shared/services/produtos.service';
import { Produtos } from './shared/models/produtos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'doces-lu-cliente';

  mostrarMenu: boolean = false;
  encomendas: Produtos[] = [];

  constructor(
    private authService: AuthService,
    private produtoService: ProdutosService
  ) {}

  ngOnInit() {
    this.authService.mostrarMenuEmitter.subscribe(
      (mostrar) => (this.mostrarMenu = mostrar)
    );
    this.mostrarMenu = this.authService.isUserLoggedIn();
  }
}
